// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/a2-unit7.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, A2 Unit 7 (have done · odd "done" forms): content fixes from
// Claude's audit in Ricardo's format (Claude Feedback/Spanish (new course)/A2
// Elementary/Unit 07). Section and question numbers are the lessons' own as
// they are now. Only content changes here: what is taught, asked and
// accepted. The answer checker and the rubric are untouched.
//
// The lessons themselves say Latin America uses the preterite where Spain
// uses the present perfect (hoy comí, ya pagué, todavía no llegó), so those
// answers are now accepted wherever an English "have done" sentence has no
// finished time. Lessons built on later grammar moved (es-redesign-units.json):
// the pronoun-placement and past-tenses-plus-pronouns circuits to B1 Units 4
// and 2, the irregular-verb workout (future) to B1 Unit 4, and the describing
// circuit (-mente, comparisons) and the Buenos Aires challenge (future,
// comparisons, me la, bájese) to B1 Unit 5. Elsewhere questions stop asking
// for object pronouns and reflexives before B1 (se han ido, me he levantado,
// se conocieron, lo compré), goals say what each lesson really practices, and
// coche, gafas, deberes, la compra, nevera, fontanero, billete and tarta
// become carro, lentes, la tarea, las compras, refrigerador, plomero, boleto
// and pastel.
import type { Exercise } from "../types";
import type { LessonPatch } from "./patch";
import { order } from "./a2-unit5";

const speak = (prompt: string, text: string, altAnswers: string[], explanation: string): Exercise => ({
  type: "speak",
  prompt,
  text,
  ...(altAnswers.length ? { altAnswers } : {}),
  explanation,
});
const tr = (prompt: string, source: string, answer: string, altAnswers: string[], explanation: string, direction: "en-es" | "es-en" = "en-es"): Exercise => ({
  type: "translate",
  prompt,
  direction,
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
const CORRECT = "Correct the sentence.";
const TR = "Translate to Spanish.";

const GLASSES = speak(`${SAY} "Have you seen my glasses?"`, "¿Has visto mis lentes?", ["¿Has visto mis anteojos?", "¿Viste mis lentes?", "¿Viste mis anteojos?", "¿Has visto mis gafas?"], "Ver → visto (irregular). In Latin America glasses are los lentes or los anteojos; in Latin America ¿Viste mis lentes? is just as common.");
const GLASSES_EX = { es: "¿Has visto mis lentes?", en: "Have you seen my glasses?" };

const GOAL_YA = "say what you have already done, haven't done yet, or have ever done, with ya, todavía no and alguna vez.";
const GOAL_VS = "choose between he comido and comí: a time that isn't over or a finished time.";
const GOAL_CHECK = "show you can build and use the present perfect, regular and irregular, in new sentences.";

export const A2_UNIT7_PATCHES: Record<string, LessonPatch> = {
  "a2-perfect-he-comido": {
    sections: {
      0: { body: ["Why two parts? Spanish builds this tense like English: a helper verb that shows the person (have / has) plus a fixed form of the main verb (eaten, worked). The helper is always haber, never tener: tener means to have or own (tengo un carro)."] },
      1: { checkAlts: { 0: ["trabajé"] } },
    },
    alts: {
      8: ["Habló"],
      9: ["Esta semana llovió todos los días."],
    },
    exercises: {
      replace: {
        6: order(["Esta", "mañana", "he", "desayunado", "en", "una", "cafetería."], "This morning I've had breakfast in a café.", "Esta mañana + he + participle."),
        7: tr(TR, "Have you (tú) finished the homework?", "¿Has terminado la tarea?", ["¿Ya has terminado la tarea?", "¿Terminaste la tarea?", "¿Ya terminaste la tarea?", "¿Has terminado los deberes?", "¿Has terminado tu tarea?"], "Has + terminado; nothing goes between them. In Latin America ¿Terminaste la tarea? is also common."),
      },
    },
  },
  "a2-perfect-he-comido-part-2": {
    sections: { 0: { checkAlts: { 0: ["Leíste"] } } },
    alts: {
      9: ["Hoy caminamos mucho."],
      12: ["Vendieron la casa."],
      14: ["¿Entendieron la lección?", "¿Comprendieron la lección?"],
    },
  },
  "a2-perfect-ya-todavia-alguna-vez": {
    goal: GOAL_YA,
    sections: {
      0: {
        check: [
          fill(BOLD, "___ he hecho las compras.", "Ya", "I've [already] done the shopping.", "ya = already."),
          mc("—¿Ya has llamado al plomero? Which reply means \"not yet\"?", ["No, todavía no.", "Sí, ya.", "Nunca jamás.", "Una vez."], 0, "Todavía no = not yet. Sí, ya means yes, already; nunca is never, and una vez is once."),
        ],
      },
    },
    alts: {
      5: ["Todavía no decidimos.", "Aún no decidimos.", "No decidimos todavía."],
      8: ["Ya pagué."],
    },
  },
  "a2-perfect-ya-todavia-alguna-vez-part-2": {
    goal: GOAL_YA,
    alts: {
      6: ["Fui a México tres veces.", "Estuve en México tres veces."],
      7: ["Todavía no llegó.", "Aún no llegó.", "No llegó todavía."],
      12: ["Todavía no limpiamos la cocina.", "Aún no limpiamos la cocina."],
    },
    exercises: {
      replace: {
        3: tr(CORRECT, "He ya terminado la tarea.", "Ya he terminado la tarea.", ["He terminado ya la tarea.", "He terminado la tarea ya.", "Ya he terminado los deberes.", "Ya terminé la tarea."], "Nothing goes between haber and the participle: ya goes before he (or at the end)."),
        13: mc("'They've already left.'", ["Ya han salido.", "Han ya salido.", "Ya han salidos.", "Ya tienen salido."], 0, "Ya goes before haber; nothing goes between han and salido, the participle never adds -s, and the helper is haber, not tener."),
      },
    },
  },
  "a2-perfect-vs-preterite": {
    goal: GOAL_VS,
    exercises: {
      replace: {
        10: tr(TR, "Today I've worked a lot, but yesterday I worked very little.", "Hoy he trabajado mucho, pero ayer trabajé muy poco.", ["Hoy he trabajado mucho pero ayer trabajé muy poco.", "Hoy trabajé mucho, pero ayer trabajé muy poco.", "Hoy trabajé mucho pero ayer trabajé muy poco."], "Hoy → present perfect (he trabajado; in Latin America also trabajé); ayer → preterite trabajé."),
      },
    },
  },
  "a2-perfect-vs-preterite-part-2": {
    goal: GOAL_VS,
    exercises: {
      replace: {
        4: tr(CORRECT, "Mis abuelos han llegado a Lima en 1965.", "Mis abuelos llegaron a Lima en 1965.", [], "A specific date in the past → preterite llegaron."),
        13: tr(TR, "My parents bought the house in 1990.", "Mis padres compraron la casa en 1990.", ["En 1990 mis padres compraron la casa.", "Mis papás compraron la casa en 1990."], "A specific past date: preterite, never han comprado."),
      },
    },
  },
  "a2-perfect-irregular-participles": {
    sections: {
      1: {
        examples: [
          GLASSES_EX,
          { es: "Mi hijo ha roto la ventana.", en: "My son has broken the window." },
          { es: "Han abierto un restaurante nuevo en la esquina.", en: "They've opened a new restaurant on the corner." },
          { es: "¿Ya has vuelto del viaje?", en: "Are you back from your trip already?" },
          { es: "Todavía no he escrito el informe.", en: "I haven't written the report yet." },
          { es: "¿Qué ha dicho el médico?", en: "What did the doctor say?" },
        ],
        check: [
          mc("\"I've put the keys on the table.\"", ["He puesto las llaves en la mesa.", "He ponido las llaves en la mesa.", "He puse las llaves en la mesa.", "He puestas las llaves en la mesa."], 0, "Poner → puesto, and it doesn't agree with las llaves after haber."),
          fill(BOLD, "Mi hermana ha ___ su viaje a Perú.", "descrito", "My sister has [described] her trip to Peru.", "Describir is built on escribir, so it inherits escrito → descrito."),
        ],
      },
    },
    alts: {
      6: ["Los científicos descubrieron un planeta nuevo.", "Los científicos descubrieron un nuevo planeta.", "Los científicos han descubierto un nuevo planeta."],
      8: ["Abrimos una cuenta en el banco.", "Abrimos una cuenta bancaria.", "Hemos abierto una cuenta bancaria."],
      9: ["Alguien rompió mi teléfono.", "Alguien rompió mi celular.", "Alguien ha roto mi celular."],
    },
    exercises: {
      replace: {
        10: mc("'They have done the homework.'", ["Han hecho la tarea.", "Han hacido la tarea.", "Han hizo la tarea.", "Han hechos la tarea."], 0, "Hacer → hecho, and the participle never changes after haber."),
        12: GLASSES,
      },
    },
  },
  "a2-perfect-irregular-participles-part-2": {
    sections: { 0: { examples: [{ es: "hacer → hecho", en: "done, made" }, GLASSES_EX] } },
    alts: {
      7: ["Hicimos todo.", "Ya hicimos todo."],
      11: ["Hoy escribí tres correos.", "Escribí tres correos hoy."],
      12: ["Mi hijo dijo su primera palabra."],
      13: ["Este verano no vimos el mar.", "No vimos el mar este verano."],
    },
    exercises: {
      replace: {
        14: {
          type: "write",
          prompt: "You're leaving for work. Write a note for your roommate saying what you've done this morning and what has happened in the apartment. Use at least four irregular participles.",
          minWords: 25,
          maxWords: 60,
          rubric: ["At least four irregular participles (hecho, puesto, abierto, roto, escrito, vuelto…)", "He / ha / han + participle", "Words for today (esta mañana, hoy)", "A note greeting and closing"],
          modelAnswer: "Hola, Sara: Esta mañana he hecho las compras y he puesto la leche en el refrigerador. He abierto las ventanas porque hace calor. ¡Cuidado! El gato ha roto un vaso en la cocina. He escrito el número del plomero en un papel. Mamá ha vuelto de su viaje y ha dicho que viene a cenar. Besos, Ana",
          explanation: "Hacer, poner, abrir, romper, escribir, volver and decir have irregular participles: hecho, puesto, abierto, roto, escrito, vuelto, dicho. Haber changes; the participle never does.",
        },
        15: GLASSES,
      },
    },
  },
  "a2-perfect-mastery-check": {
    goal: GOAL_CHECK,
    alts: {
      2: ["Todavía no vi las noticias.", "Aún no vi las noticias.", "No vi las noticias todavía."],
    },
    exercises: {
      replace: {
        11: tr(TR, "I haven't done my homework yet.", "Todavía no he hecho la tarea.", ["Aún no he hecho la tarea.", "No he hecho la tarea todavía.", "Todavía no he hecho mi tarea.", "Todavía no hice la tarea.", "Aún no hice la tarea.", "No hice la tarea todavía.", "Todavía no hice mi tarea.", "Todavía no he hecho los deberes.", "Aún no he hecho los deberes."], "Todavía no + he hecho (irregular participle). In Latin America todavía no hice la tarea is also common."),
      },
    },
  },
  "a2-perfect-mastery-check-part-2": {
    goal: GOAL_CHECK,
    sections: {
      0: { check: [fill(BOLD, "¿Ya ___ los boletos?", "has comprado", "[Have you bought] the tickets yet? (tú)", "has + comprado.", ["compraste"])] },
    },
    alts: {
      1: ["Volvieron de su viaje.", "Regresaron de su viaje.", "Volvieron del viaje.", "Han regresado de su viaje."],
      4: ["rompieron"],
      9: ["¿Ya comieron?", "¿Comieron ya?"],
      11: ["Hoy mi jefe dijo algo raro.", "Mi jefe dijo algo raro hoy."],
    },
    exercises: {
      replace: {
        10: tr(TR, "Have you (tú) put the milk in the fridge?", "¿Has puesto la leche en el refrigerador?", ["¿Pusiste la leche en el refrigerador?", "¿Has puesto la leche en la heladera?", "¿Pusiste la leche en la heladera?", "¿Has puesto la leche en la nevera?", "¿Has puesto la leche en el frigorífico?", "¿Has puesto la leche en el refri?", "¿Pusiste la leche en el refri?"], "Poner → puesto. In Latin America the fridge is el refrigerador (la heladera in Argentina)."),
        13: tr(TR, "Today I've done the shopping, but on Monday I did nothing.", "Hoy he hecho las compras, pero el lunes no hice nada.", ["Hoy hice las compras, pero el lunes no hice nada.", "Hoy he hecho las compras pero el lunes no hice nada.", "Hoy hice las compras pero el lunes no hice nada.", "Hoy he hecho la compra, pero el lunes no hice nada.", "Hoy hice la compra, pero el lunes no hice nada."], "Hoy → he hecho (in Latin America also hice); el lunes → preterite no hice."),
        16: speak(`${SAY} "Have you bought the tickets yet?"`, "¿Ya has comprado los boletos?", ["¿Ya compraste los boletos?", "¿Ya has comprado los billetes?", "¿Ya compraste los billetes?"], "has + comprado. In Latin America a ticket is el boleto."),
      },
    },
  },
  "a2-common-words-history-conflict": {
    goal: "use words for history and the news (luchar, destruir, la amenaza, la pista) to tell what happened, in the preterite.",
    sections: {
      1: {
        examples: [
          { es: "La policía investiga el ataque a una tienda.", en: "The police are investigating the attack on a shop. (la policía is singular)" },
          { es: "No hay ninguna pista, pero un vecino ha dado algunos detalles.", en: "There's no lead, but a neighbor has given some details." },
          { es: "Los ladrones ocultaron la droga en un carro.", en: "The thieves hid the drugs in a car. (ocultar = esconder)" },
          { es: "Después de una pelea, un hombre golpeó a otro en la calle.", en: "After a fight, one man hit another in the street." },
          { es: "El golpe fue fuerte, pero el hombre está bien.", en: "The blow was hard, but the man is OK. (golpear → el golpe)" },
          { es: "Hay más vigilancia en el centro por una amenaza.", en: "There's more surveillance downtown because of a threat." },
          { es: "El ladrón pasó tres años en prisión.", en: "The thief spent three years in prison." },
          { es: "La policía encontró una pistola y tres balas.", en: "The police found a pistol and three bullets." },
        ],
      },
    },
    exercises: {
      replace: {
        17: order(["La", "policía", "encontró", "una", "pista", "en", "el", "carro"], "The police found a lead in the car", "La pista = the lead/clue. La policía is singular → encontró."),
      },
    },
  },
  "a2-perfect-mission-news": {
    goal: "understand news headlines in the present perfect and pass the news on to a friend.",
    sections: {
      0: {
        examples: [
          { es: "La policía ha detenido a dos sospechosos del robo del banco.", en: "Police have arrested two suspects in the bank robbery. (la policía is singular → ha)" },
          { es: "Un testigo ha visto a los ladrones huir en un carro negro.", en: "A witness has seen the thieves flee in a black car. (ver → visto, irregular)" },
          { es: "Según el juez, los dos hombres son inocentes hasta el juicio.", en: "According to the judge, the two men are innocent until the trial." },
          { es: "La víctima, un cajero del banco, no ha sufrido heridas graves.", en: "The victim, a bank teller, hasn't suffered serious injuries. (no goes before ha)" },
        ],
      },
      1: { checkAlts: { 0: ["desaparecieron"] } },
      2: { checkAlts: { 0: ["escribió"] } },
    },
    alts: {
      0: ["detuvo"],
      4: ["El juez dijo que el hombre es inocente.", "El juez dijo que el hombre era inocente."],
      5: ["Una chica desapareció, pero apareció esta mañana.", "Una muchacha desapareció, pero apareció esta mañana."],
      10: ["Desapareció un chico en las montañas.", "Un chico desapareció en las montañas.", "Un chico ha desaparecido en las montañas."],
      11: ["apareció"],
      12: ["decidió"],
      13: ["perdió"],
      18: ["El cantante mencionó nuestra ciudad."],
    },
    exercises: {
      replace: {
        9: speak(`${SAY} "The police have found the stolen car"`, "La policía ha encontrado el carro robado.", ["La policía ha encontrado el auto robado.", "La policía ha encontrado el coche robado.", "La policía encontró el carro robado.", "La policía encontró el auto robado."], "La policía is singular, so ha encontrado (not han); today's news → present perfect (Latin American news also says encontró). Robado agrees with el carro."),
      },
    },
  },
  "a2-comprehensive-review-1": {
    goal: "review the preterite, regular and irregular, and the imperfect, in new sentences.",
    summary: "Recap the regular and irregular preterite and the imperfect, then check them with a short mixed set of exercises.",
    exercises: {
      replace: {
        3: speak(`${SAY} "Did you have time to study yesterday?"`, "¿Tuviste tiempo para estudiar ayer?", ["¿Tuviste tiempo de estudiar ayer?", "¿Tú tuviste tiempo para estudiar ayer?", "¿Ayer tuviste tiempo para estudiar?"], "tener → tuviste: preterite with the irregular stem tuv-, tú."),
        11: speak(`${SAY} "Did you buy bread? Yes, I bought bread and milk"`, "¿Compraste pan? Sí, compré pan y leche.", ["¿Compraste pan? Sí, compré pan y leche", "¿Compraste el pan? Sí, compré pan y leche."], "compraste (tú) and compré (yo): regular -ar preterite. The yo form has the accent on the last syllable."),
        12: mc("Which is correct?", ["Ayer fui al cine.", "Ayer fuí al cine.", "Ayer fue yo al cine.", "Ayer ido al cine."], 0, "Ir → fui (yo), with no accent: one-syllable preterite forms never take one. Fue is él / ella, and ido is not a past tense on its own."),
        14: speak(`${SAY} "I looked for my wallet, but I didn't find anything"`, "Busqué mi cartera, pero no encontré nada.", ["Busqué mi billetera, pero no encontré nada.", "Busqué mi cartera pero no encontré nada.", "Busqué mi billetera pero no encontré nada."], "Buscar: -car verbs change c → qu in the yo form: busqué. No … nada = nothing / not anything."),
        16: tr(TR, "Last night we made a cake.", "Anoche hicimos un pastel.", ["Anoche hicimos una torta.", "Anoche hicimos una tarta.", "Anoche nosotros hicimos un pastel."], "Hacer has the i-stem: hicimos. In Latin America a cake is un pastel or una torta."),
        22: order(["Mi", "abuelo", "siempre", "contaba", "historias"], "My grandfather always used to tell stories", "Siempre + imperfect for a past habit."),
        25: tr(TR, "The teacher said that the exam was very easy, but nobody believed that.", "El profesor dijo que el examen era muy fácil, pero nadie creyó eso.", ["La profesora dijo que el examen era muy fácil, pero nadie creyó eso.", "El profesor dijo que el examen era muy fácil pero nadie creyó eso.", "La profesora dijo que el examen era muy fácil pero nadie creyó eso.", "El maestro dijo que el examen era muy fácil, pero nadie creyó eso.", "La maestra dijo que el examen era muy fácil, pero nadie creyó eso."], "Dijo (j-stem preterite); era (imperfect description); creyó (y in the third person)."),
      },
    },
  },
};
