// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/a1-unit7.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, A1 Unit 7 (Ir and going to · e → ie): content fixes from
// Claude's audit in Ricardo's format (Claude Feedback/Spanish (new
// course)/A1 Beginner/Unit 07). Section and question numbers are the
// lessons' own as they are now (index.ts adds these after re-aligning the
// earlier units' patches). Only content changes here: what is taught, asked
// and accepted. The answer checker and the rubric are untouched.
//
// Gustar comes in A2 Unit 2, o → ue and e → i verbs in A2 Unit 1, so the
// Beginner challenge lessons built on them moved there. The first part of
// this file also fixes items in Units 4 to 6 that other fixes to the old
// course changed or that the Unit 6 audit missed (gustar, jugar).
import type { Exercise, LessonTable } from "../types";
import type { LessonPatch } from "./patch";
import { HAY } from "./concept-tables";

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
const mc = (question: string, options: string[], correctIndex: number, explanation: string, optionNotes: string[]): Exercise => ({
  type: "multiple-choice",
  question,
  options,
  correctIndex,
  explanation,
  optionNotes,
});
const ms = (question: string, options: string[], correctIndexes: number[], explanation: string): Exercise => ({
  type: "multi-select",
  question,
  options,
  correctIndexes,
  explanation,
});
const order = (sentence: string, translation: string, explanation: string): Exercise => ({
  type: "word-order",
  prompt: "Put the words in order.",
  words: sentence.split(" "),
  translation,
  explanation,
});
const write = (prompt: string, minWords: number, maxWords: number, rubric: string[], modelAnswer: string, explanation: string): Exercise => ({
  type: "write",
  prompt,
  minWords,
  maxWords,
  rubric,
  modelAnswer,
  explanation,
});
const SAY = "Say it in Spanish:";
const FIX = "Correct the sentence.";
const BOLD = "How do you say the bold words in Spanish?";
// Car is carro in Latin America: keys say carro, and coche and auto stay accepted.
const CAR_ALTS = (answer: string): string[] => [answer.replace(/carro/g, "coche"), answer.replace(/carro/g, "auto")];
// "--" and " — " inside feedback read as a pause: a colon says it plainly.
const DASHES: [string, string][] = [[" -- ", ": "], [" — ", ": "]];


const TO_BE: LessonTable = {
  caption: "English \"to be\", four Spanish verbs",
  head: ["What you say", "Verb", "Example"],
  rows: [
    ["age, hunger, cold, fear, hurry", "tener", "Tengo veinte años. Tengo hambre."],
    ["the weather", "hace", "Hace frío. Hace sol."],
    ["something exists", "hay", "Hay dos gatos."],
    ["a plan", "ir a + verb", "Voy a estudiar."],
  ],
  note: "Ser and estar still do the rest: Soy alto. Estoy cansado.",
};

// The Ir recut's own spoken questions (recuts-a1.ts), by their number in the recut.
export const IR_RECUT_FIX: LessonPatch = {
  exercises: {
    replace: {
      4: speak(`${SAY} "I'm going to study tomorrow"`, "Voy a estudiar mañana.", ["Mañana voy a estudiar.", "Yo voy a estudiar mañana."], "A plan is ir a + infinitive: voy a estudiar. Only ir changes for the person."),
      8: speak(`${SAY} "She goes to the park"`, "Ella va al parque.", ["Va al parque."], "Ella takes va, and a + el always joins into al."),
      13: speak(`${SAY} "We are going to the movies"`, "Nosotros vamos al cine.", ["Vamos al cine."], "Nosotros takes vamos, v- plus the -ar style ending -amos."),
      19: speak(`${SAY} "I go to the gym on Mondays"`, "Voy al gimnasio los lunes.", ["Los lunes voy al gimnasio.", "Yo voy al gimnasio los lunes."], "Yo takes voy, al gimnasio joins a + el, and los lunes means every Monday."),
    },
  },
};

const DRILL_GOALS = {
  d1: "use tener for what you have and for age, hunger and cold, and say where people go with ir.",
  d2: "use tener and ir without help: tenemos, not tienemos, and a + el = al.",
  d3: "make plans with ir a + infinitive, and use hacer for what you do and for the weather.",
  d4: "choose tener, hace, hay or ir a: feelings and age, weather, what exists, and plans.",
};

export const A1_UNIT7_PATCHES: Record<string, LessonPatch> = {
  // ---- Units 4 to 6, follow-up ----
  "days-months-dates-unit-review": {
    goal: "show you can hear, say and write dates and questions, getting at least 8 of 10 quiz questions right.",
  },
  "vocabulary-practice-3": {
    goal: "use the 40 family, place and time words in short sentences: la gente es, detrás del, siempre or nunca.",
  },
  "review-possessives-prepositions-questions-1": {
    exercises: {
      replace: {
        13: fill(BOLD, "Los niños están ___ de la escuela.", "fuera", "The children are [outside] the school.", "Fuera de means outside, the opposite of dentro de (inside)."),
      },
    },
  },
  "demonstratives-2": {
    sections: {
      0: {
        examples: [
          { es: "Quiero esta camisa, pero no esa.", en: "I want this shirt, but not that one. (esa = esa camisa)" },
          { es: "¿Quieres este pastel o aquel?", en: "Do you want this cake or that one over there? (aquel = aquel pastel)" },
          { es: "Estos zapatos son baratos; esos son caros.", en: "These shoes are cheap; those are expensive. (esos = esos zapatos)" },
        ],
        check: [
          mc("Talking about las botas (boots): \"I want these, not those (near you).\" Which is correct?", ["Quiero estas, no esas.", "Quiero estos, no esos.", "Quiero esto, no eso.", "Quiero esta, no esa."], 0, "The dropped noun is las botas (feminine plural), so estas and esas.", ["", "Estos and esos are masculine; botas is feminine.", "Esto and eso can't stand for a named noun.", "Esta and esa are singular; there are two boots."]),
          fill("Complete with the demonstrative (talking about el vestido, far from both of you).", "Este vestido es bonito, pero ___ es más elegante.", "aquel", undefined, "Vestido is masculine singular and the second dress is far from both, so aquel, standing for aquel vestido. Aquello can't replace a named noun."),
        ],
      },
      1: {
        examples: [
          { es: "Clara: Quiero esta bufanda. ¿Cuánto cuesta?", en: "Clara: I want this scarf. How much is it?" },
          { es: "Raúl: ¿Esa bufanda azul? Cien pesos.", en: "Raúl: That blue scarf (near you)? A hundred pesos." },
          { es: "Clara: ¿Y aquellos sombreros, allí en la pared?", en: "Clara: And those hats over there, on the wall?" },
          { es: "Raúl: Esos son más caros. Y aquello, ¿qué es? ¿Un cinturón?", en: "Raúl: Those are more expensive. And that thing over there, what is it? A belt?" },
        ],
      },
    },
    exercises: {
      replace: {
        3: speak(`${SAY} "I want this notebook"`, "Quiero este cuaderno.", ["Yo quiero este cuaderno."], "Cuaderno is masculine and near you, so este."),
        10: fill(BOLD, "Quiero ___ sillas. (right here)", "estas", "I want [these] chairs.", "Sillas is feminine plural and near you: estas, not estos."),
        19: speak(`${SAY} "I want this shirt, but not that one"`, "Quiero esta camisa, pero no esa.", ["Quiero esta camisa pero no esa."], "That one is just esa: the noun drops, and esa stays feminine because it stands for esa camisa."),
      },
    },
  },
  "a1r-transform-demonstratives": {
    exercises: {
      replace: {
        4: tr("Translate to Spanish.", "I want this shirt, but I don't want those pants (near you).", "Quiero esta camisa, pero no quiero esos pantalones.", ["Quiero esta camisa pero no quiero esos pantalones."], "Esta for the shirt near you, esos for the pants near the listener: pantalones is masculine plural."),
        18: tr("Translate to Spanish.", "I don't want that coat (near you), I want this one.", "No quiero ese abrigo, quiero este.", ["No quiero ese abrigo; quiero este."], "Ese for the coat near the listener; este alone means this one, standing for este abrigo."),
        25: speak("Say it out loud: move «ese carro» next to you.", "este carro", ["este coche", "este auto"], "Near you, the speaker, is the este family; carro is masculine singular, so este."),
      },
    },
  },

  // ---- Unit 7 ----
  "tener-ir-hacer-hay-drill-1": {
    goal: DRILL_GOALS.d1,
    summary: "Drill tener (tengo, tienes...) with hambre, sed, frío and años, and the present of ir.",
    sections: {
      0: {
        examples: [
          { es: "Yo tengo un perro.", en: "I have a dog. (Yo takes the irregular tengo.)" },
          { es: "Mis primos tienen dos carros.", en: "My cousins have two cars. (The stress is on the stem, so ten- becomes tien-.)" },
          { es: "Tenemos una casa grande.", en: "We have a big house. (The stress is on the ending, so ten- stays.)" },
        ],
      },
    },
    exercises: {
      replace: {
        10: speak(`${SAY} "I have a dog"`, "Yo tengo un perro.", ["Tengo un perro."], "Yo takes the irregular tengo, with the -go ending."),
        11: speak(`${SAY} "I'm twenty"`, "Tengo veinte años.", ["Yo tengo veinte años.", "Tengo 20 años."], "Age takes tener: literally, I have twenty years."),
        12: speak(`${SAY} "She goes to the park"`, "Ella va al parque.", ["Va al parque."], "Ella takes va, and a + el always joins into al."),
      },
    },
  },
  "tener-ir-hacer-hay-drill-1-part-2": {
    goal: DRILL_GOALS.d2,
    sections: {
      0: {
        examples: [
          { es: "Yo tengo un perro.", en: "I have a dog. (Yo takes the irregular tengo.)" },
          { es: "Tengo veinte años.", en: "I'm twenty. (Literally, I have twenty years.)" },
          { es: "Ella va al parque.", en: "She goes to the park. (A + el joins into al.)" },
        ],
      },
    },
    summary: "More tener and ir with new sentences: tenemos keeps ten-, age and hunger take tener, and a + el = al.",
    exercises: {
      replace: {
        3: tr("Change to ella.", "Tenemos dos carros.", "Tiene dos carros.", ["Ella tiene dos carros.", "Tiene dos coches.", "Ella tiene dos coches.", "Tiene dos autos."], "Ella's form is stressed on the stem (TIE-ne), so ten- becomes tien-: tiene."),
        15: speak(`${SAY} "I have a dog"`, "Yo tengo un perro.", ["Tengo un perro."], "Yo takes the irregular tengo, with the -go ending."),
        16: speak(`${SAY} "I'm twenty"`, "Tengo veinte años.", ["Yo tengo veinte años.", "Tengo 20 años."], "Age takes tener: literally, I have twenty years."),
      },
    },
  },
  "a1r-word-web-places": {
    summary: "Connect each place in town to the activity you do there: ir a + place, then what you do.",
    exercises: {
      replace: {
        0: speak(`${SAY} "On Sundays we go to church"`, "Los domingos vamos a la iglesia.", ["Vamos a la iglesia los domingos."], "Iglesia is feminine, so a la, which never joins up."),
        22: speak(`${SAY} "I buy bread at the bakery"`, "Compro pan en la panadería.", ["Yo compro pan en la panadería."], "Pan gives the shop's name: pan → panadería, and every -ería shop is feminine."),
        23: speak(`${SAY} "I go to the library to read"`, "Voy a la biblioteca para leer.", ["Voy a la biblioteca a leer."], "Biblioteca is feminine (a la), and para + infinitive says why you go."),
      },
    },
  },
  "tener-ir-hacer-hay-drill-2": {
    goal: DRILL_GOALS.d3,
    exercises: {
      replace: {
        14: tr(FIX, "Yo hace la tarea.", "Yo hago la tarea.", ["Hago la tarea."], "Yo has its own irregular form: hago. Hace is él / ella."),
        22: speak(`${SAY} "This weekend I'm going to play sports and I'm going to see a movie."`, "Este fin de semana voy a hacer deporte y voy a ver una película.", ["Voy a hacer deporte y voy a ver una película este fin de semana.", "Este fin de semana voy a hacer deporte y ver una película."], "Each plan is voy a + infinitive; only ir changes for the person."),
        23: speak(`${SAY} "I'm going to study tonight"`, "Voy a estudiar esta noche.", ["Esta noche voy a estudiar.", "Yo voy a estudiar esta noche."], "A plan is voy a + infinitive, and esta noche means tonight."),
      },
    },
  },
  "tener-ir-hacer-hay-drill-3": {
    goal: DRILL_GOALS.d4,
    sections: {
      0: {
        body: [
          "Remember the rule: hay means \"there is / there are\" and has only one form, for one thing or a hundred. It introduces something new, so it comes with un / una, a number, mucho or no article at all.",
          "To say where a specific, known thing is (el libro, mi carro), use estar instead: el libro está en la mesa.",
        ],
        tables: [HAY],
      },
    },
    exercises: {
      replace: {
        2: ms("Select ALL the correct tener expressions.", ["Tengo calor.", "Tengo veinte años.", "Tengo lluvia.", "Tienen prisa."], [0, 1, 3], "Heat, age and hurry are things a person has. Rain is weather, not something you have."),
        11: tr(FIX, "Hay mi carro en la calle.", "Mi carro está en la calle.", CAR_ALTS("Mi carro está en la calle."), "Mi carro is a specific, known car, so you say where it is with estar. Hay only introduces new things."),
        19: fill(BOLD, "Yo ___ a hacer las compras.", "voy", "I [am going] to do the shopping.", "Ir a + infinitive: yo voy."),
        23: speak(`${SAY} "On my street there are two cafés, and today it's sunny."`, "En mi calle hay dos cafés y hoy hace sol.", ["En mi calle hay dos cafés, y hoy hace sol.", "Hay dos cafés en mi calle y hoy hace sol."], "Hay introduces what exists; hace + noun gives the weather."),
        24: speak(`${SAY} "There's a book on the table"`, "Hay un libro en la mesa.", ["Hay un libro sobre la mesa."], "Un libro is something new, so hay introduces it."),
      },
    },
  },
  "a1r-error-hunt-tener-ir-hacer-hay": {
    goal: "fix the \"to be\" slips: tener for age and hunger, hace for weather, hay for what exists, and ir a + verb.",
    sections: { 0: { tables: [TO_BE] } },
    exercises: {
      replace: {
        15: tr("Make it negative.", "Hay muchos carros.", "No hay muchos carros.", CAR_ALTS("No hay muchos carros."), "No goes before hay."),
        21: speak(`${SAY} "I'm thirty, I'm hungry, and it's hot today."`, "Tengo treinta años, tengo hambre y hoy hace calor.", ["Tengo treinta años, tengo hambre y hace calor hoy.", "Tengo 30 años, tengo hambre y hoy hace calor."], "Age and hunger take tener; the weather takes hace."),
      },
    },
  },
  "stem-changing-verbs-e-ie": {
    reword: [[" (Contrast Clinic: -er vs. -ir.)", ""]],
    exercises: {
      replace: {
        20: speak(`${SAY} "We think it's easy"`, "Pensamos que es fácil.", ["Nosotros pensamos que es fácil."], "Nosotros is outside the boot, so pensar keeps its e: pensamos."),
        21: speak(`${SAY} "Do you want to go to the movies?"`, "¿Quieres ir al cine?", ["¿Tú quieres ir al cine?"], "Tú is inside the boot (quieres), and ir stays in the infinitive."),
        22: speak(`${SAY} "They prefer to study at home"`, "Prefieren estudiar en casa.", ["Ellos prefieren estudiar en casa.", "Ellas prefieren estudiar en casa."], "Ellos is inside the boot: prefieren. Estudiar stays in the infinitive."),
      },
      // Typed answers forgive one missing letter, so the stem change itself is
      // practised by choosing (above) and by saying it (here).
      add: [
        speak(`${SAY} "I want a coffee, please."`, "Quiero un café, por favor.", ["Yo quiero un café, por favor."], "Yo is inside the boot: querer → quiero."),
        speak(`${SAY} "The class starts at nine."`, "La clase empieza a las nueve.", ["La clase empieza a las 9."], "La clase is ella, inside the boot: empezar → empieza."),
        speak(`${SAY} "I don't understand the question."`, "No entiendo la pregunta.", ["Yo no entiendo la pregunta."], "Yo is inside the boot: entender → entiendo. No goes right before the verb."),
      ],
    },
  },
  "a1r-word-web-house": {
    summary: "Put every piece of furniture in the right room, and say where it is.",
    sections: {
      2: {
        check: [
          fill(BOLD, "La lámpara está ___ del escritorio.", "encima", "The lamp is [on top] of the desk.", "Encima de means on top of, and de + el escritorio joins into del escritorio."),
          fill("Complete the sentence.", "El gato está debajo ___ mesa.", "de la", undefined, "Mesa is feminine: de + la doesn't join up, so debajo de la mesa. Only de + el becomes del."),
        ],
      },
    },
    exercises: {
      replace: {
        22: speak(`${SAY} "I cook in the kitchen"`, "Cocino en la cocina.", ["Yo cocino en la cocina."], "The room comes from the verb: cocinar gives la cocina."),
        23: speak(`${SAY} "There's a lamp in the living room"`, "Hay una lámpara en la sala.", ["En la sala hay una lámpara.", "Hay una lámpara en el salón."], "Una lámpara is something new, so hay introduces it."),
      },
    },
  },
  "a1-final-review-1": {
    goal: "use ser, articles, agreeing adjectives and -ar verbs together, without notes.",
    summary: "Recap subject pronouns and ser, gender and articles, adjective agreement and -ar verbs, then test yourself on each one.",
  },
  "a1-final-review-1-part-2": {
    goal: "show you can do it without the recap: ser for jobs and origin, plurals, agreement and -ar endings, in new sentences.",
    summary: "Ser, articles, agreement and -ar verbs again, now with new sentences, from choosing to writing and saying them.",
    reword: DASHES,
  },
  "a1-final-review-2": {
    reword: DASHES,
    exercises: {
      replace: {
        10: speak("Respond aloud: ¿Cómo estás y dónde estás? Say you're tired and you're at home.", "Hoy estoy cansado y estoy en casa.", ["Hoy estoy cansada y estoy en casa.", "Estoy cansado y estoy en casa.", "Estoy cansada y estoy en casa.", "Estoy cansado y en casa.", "Estoy cansada y en casa."], "Both a state (cansado or cansada) and a location (en casa) take estar."),
      },
    },
  },
  "a1-final-review-2-part-2": {
    goal: "show you can do it without the recap: -er and -ir endings, ser or estar, possessives and del, in new sentences.",
    summary: "-er and -ir verbs, ser or estar, and possessives again, now with new sentences, from choosing to saying them.",
    reword: DASHES,
  },
  "a1r-challenge-day-in-madrid-morning": {
    sections: { 0: { heading: "8:00: Breakfast at the hotel" }, 1: { heading: "9:30: Asking for directions" }, 2: { heading: "11:00: At the museum" } },
    reword: [["Orange juice would be un zumo (or jugo) de naranja", "Orange juice would be un jugo de naranja (zumo in Spain)"]],
    exercises: {
      replace: {
        21: speak(`${SAY} "The museum is huge and the paintings are beautiful"`, "El museo es enorme y los cuadros son preciosos.", ["El museo es enorme y los cuadros son hermosos.", "El museo es enorme y los cuadros son muy bonitos."], "Ser describes what things are like: es enorme, son preciosos."),
        22: speak(`${SAY} "I'm a bit tired, but I'm very happy"`, "Estoy un poco cansada, pero estoy muy contenta.", ["Estoy un poco cansado, pero estoy muy contento.", "Estoy un poco cansada pero muy contenta.", "Estoy un poco cansado pero muy contento."], "Feelings right now take estar; a man says cansado and contento."),
      },
    },
  },
  // Moved to A2 Unit 2 (after gustar); its goal starts with what you do.
  "a1r-challenge-day-in-madrid-evening": {
    goal: "talk over lunch, shop with gustar and cuesta / cuestan, and make plans for the evening with ir a.",
  },
  "a1-final-review-1-unit-review": {
    goal: "show you can hear, say and write this unit (ir, ir a + verb, e → ie verbs, tener, hacer and hay) with the Beginner basics.",
    summary: "Hear, say and write ir and plans with ir a, e → ie verbs, tener, hace and hay, with ser and estar, agreement, possessives and regular verbs, then a short quiz.",
    sections: {
      0: {
        check: [
          { type: "listen-choose", audio: "Mis primos son de Colombia, pero viven en Chile.", question: "What does it tell you?", options: ["The cousins are from Colombia and live in Chile.", "The cousins are from Chile and live in Colombia.", "The cousins are in Colombia on vacation."], correctIndex: 0, explanation: "Son de: where they're from. Viven en: where they live now." },
          { type: "listen-choose", audio: "Estamos cansados porque trabajamos mucho.", question: "Who is tired?", options: ["We are", "They are", "I am"], correctIndex: 0, explanation: "Estamos and trabajamos: the -amos ending means we." },
          { type: "listen-choose", audio: "Mis padres prefieren ir a la playa en julio.", question: "What does it tell you?", options: ["My parents prefer to go to the beach in July.", "My parents are going to the beach in June.", "My parents don't want to go to the beach."], correctIndex: 0, explanation: "Prefieren is ellos (e → ie), then ir a + place; julio is July." },
          { type: "dictation", audio: "¿Cuántas hermanas tienes?", explanation: "Cuántas agrees with hermanas, and the question opens with ¿." },
          { type: "dictation", audio: "Hay una farmacia al lado del banco.", explanation: "Hay for something new; de + el = del." },
        ],
      },
    },
    exercises: {
      replace: {
        6: mc("\"We want to go to the movies.\"", ["Queremos ir al cine.", "Quieremos ir al cine.", "Queremos ir a el cine.", "Queremos vamos al cine."], 0, "Nosotros is outside the boot, so querer keeps its e: queremos. Then the infinitive ir, and a + el = al.", ["", "Nosotros is outside the boot: no ie.", "A + el always joins into al.", "After querer the second verb stays an infinitive."]),
      },
      add: [
        tr("Translate to Spanish.", "Tomorrow I'm going to visit the museum.", "Mañana voy a visitar el museo.", ["Voy a visitar el museo mañana."], "A plan: voy a + infinitive, and visitar stays whole."),
        tr("Translate to Spanish.", "Are you (informal) going to the beach on Saturday?", "¿Vas a la playa el sábado?", ["¿Tú vas a la playa el sábado?", "¿El sábado vas a la playa?"], "Tú takes vas, ir takes a before the place, and the day takes el."),
        tr(FIX, "Hoy es mucho calor.", "Hoy hace mucho calor.", ["Hace mucho calor hoy."], "Weather takes hace + a noun, and calor is a noun, so mucho."),
      ],
    },
  },
};
