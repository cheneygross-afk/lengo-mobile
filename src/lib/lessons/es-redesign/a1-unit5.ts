// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/a1-unit5.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, A1 Unit 5: content fixes from Claude's audit in Ricardo's
// format (Claude Feedback/Spanish (new course)/A1 Beginner/Unit 05). They add
// to the Beginner patches in a1.ts (merged section by section in index.ts).
// Section numbers are the lesson's own; question numbers are its practice
// questions (lesson.exercises). Only content changes here: what is taught,
// asked and accepted. The answer checker and the rubric are untouched.
//
// The unit teaches regular -er and -ir verbs, no + verb and question words.
// Possessives (su, nuestro), demonstratives (este, ese, aquel), ir and
// stem-changing verbs come later (Units 6 and 7, A2), so no scored question
// here asks for them; the review and vocabulary lessons that need possessives
// and place words moved to Unit 6. Tengo / tienes and quiero / quieres are
// taught as set phrases in the question-words lesson.
import type { Exercise } from "../types";
import type { LessonPatch } from "./patch";
import type { LessonTable } from "../types";
import { AR_ENDINGS, ER_IR_ENDINGS } from "./concept-tables";

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
const toEn = (prompt: string, source: string, answer: string, altAnswers: string[], explanation: string): Exercise => ({
  type: "translate",
  prompt,
  direction: "es-en",
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
const order = (sentence: string, translation: string, explanation: string): Exercise => ({
  type: "word-order",
  prompt: "Put the words in order.",
  words: sentence.split(" "),
  translation,
  explanation,
});
const SAY = "Say it in Spanish:";
const QS = (q: string, options: string[], correctIndex: number, explanation: string, optionNotes: string[]): Exercise => mc(q, options, correctIndex, explanation, optionNotes);
const match = (instructions: string, pairs: [string, string][], explanation: string): Exercise => ({
  type: "matching",
  instructions,
  pairs: pairs.map(([left, right]) => ({ left, right })),
  explanation,
});
// The three ways to ask where, with a regular -ar verb for "where to"
// (ir is taught in Unit 7).
const WHERE_U5: LessonTable = {
  caption: "Three ways to ask where",
  head: ["Question", "Asks", "Answer"],
  rows: [
    ["¿Dónde estás?", "where you are", "Estoy en Lima."],
    ["¿Adónde viajas?", "where you're traveling to", "Viajo a México."],
    ["¿De dónde eres?", "where you're from", "Soy de Venezuela."],
  ],
  note: "The small word (en, a, de) in the answer tells you which one was asked.",
};
const HAVE_WANT =
  "Two pairs to use as set phrases in questions for now: tengo / tienes (I have / you have) and quiero / quieres (I want / you want). ¿Cuántos hermanos tienes? ¿Qué quieres? Tener gets its own lesson in Unit 6.";

export const A1_UNIT5_PATCHES: Record<string, LessonPatch> = {
  "present-tense-er-ir-verbs-1": {
    sections: {
      0: {
        addTables: [AR_ENDINGS],
        build: [
          { text: "hablar", note: "the whole verb: to speak" },
          { text: "habl-", note: "take off -ar" },
          { text: "habl + an", note: "add the ending for ellos" },
          { text: "hablan", note: "they speak" },
        ],
        reteach: "-ar verbs: hablo, hablas, habla, hablamos, hablan. The -er and -ir verbs in this lesson use the same system with a different vowel.",
      },
    },
    reword: [[" (Lesson: -ar verbs.)", ""]],
    optionNotes: {
      2: ["Escribo is for yo.", "", "Escribes is for tú.", "Escriben is for ellos or ustedes."],
      11: ["Escribir is an -ir verb, so nosotros takes -imos.", "", "Escriben is for ellos.", "Escribís is Spain's vosotros form."],
      13: ["", "Comís mixes the -ir ending into comer, an -er verb.", "Comemos is nosotros, not you all.", "Como is yo."],
      17: ["", "-er verbs take -en, not -an.", "Vendimos isn't a present form, and it's not for \"they\".", "Vende is for one person."],
    },
    exercises: {
      replace: {
        21: speak(`${SAY} "My son reads a lot."`, "Mi hijo lee mucho.", [], "Mi hijo is one person, like él, and -er verbs take -e for él: lee."),
      },
    },
  },
  "present-tense-er-ir-verbs-2": {
    reword: [[" (Lesson: -er and -ir verbs, part 1.)", ""], [" statement — the question marks do the work.", " statement: the question marks do the work."]],
    sections: {
      1: {
        examples: [
          { es: "Carmen: ¿Qué haces los sábados?", en: "Carmen: What do you do on Saturdays? (haces = you do: a set phrase for now)" },
          { es: "Pablo: Leo, escribo cartas y como con mi familia.", en: "Pablo: I read, write letters, and eat with my family." },
          { es: "Carmen: ¡Qué bien! Yo aprendo español los sábados.", en: "Carmen: How nice! I learn Spanish on Saturdays." },
        ],
      },
    },
  },
  "a1r-error-hunt-verbs-agreement": {
    sections: {
      0: {
        addTables: [AR_ENDINGS, ER_IR_ENDINGS],
        reteach: "Check two links: the verb ending matches who does it (yo como, ellos comen, nosotros vivimos), and the describing word matches its noun (las chicas simpáticas).",
      },
    },
    exercises: {
      replace: {
        22: speak("Say the corrected sentence aloud: «Nosotros comen en casa.»", "Nosotros comemos en casa.", ["Comemos en casa.", "Nosotras comemos en casa."], "Nosotros takes -emos with an -er verb: comemos. Comen is the ellos form."),
        23: speak(`${SAY} "My classes are very interesting."`, "Mis clases son muy interesantes.", [], "Clases is plural, so mis, son and interesantes are plural too. Interesante has one form for a man or a woman."),
      },
    },
  },
  "review-adjectives-ar-er-ir-verbs": {
    exercises: {
      replace: {
        10: order("Mis vecinos compran un carro negro", "My neighbors buy a black car", "Negro comes after carro and agrees with it (masculine, singular). Mis vecinos is ellos, so comprar takes -an: compran."),
      },
    },
  },
  "present-tense-verbs-drill-1": {
    summary: "Quick drills on -ar and -er verbs for every person: yo, tú, usted, nosotros and ellos.",
    sections: {
      2: {
        addBody: ["Comer shows the whole pattern: como, comes, come, comemos, comen. Beber, leer, aprender, vender and correr work the same way: bebo, lees, aprende, vendemos, corren."],
      },
    },
  },
  "present-tense-verbs-drill-2": {
    goal: "pick the right ending for -ir verbs, and for any regular verb.",
    sections: {
      0: { addTables: [ER_IR_ENDINGS] },
      2: { body: ["Check the infinitive ending first (-ar, -er or -ir), then pick the verb ending for the person."] },
    },
    reword: [[" — the other two", ". The other two"]],
    exercises: {
      replace: {
        5: toEn("Translate this sentence to English.", "Ellas escriben cartas a la profesora.", "They write letters to the teacher.", ["They're writing letters to the teacher.", "They write letters to the (female) teacher.", "They write the teacher letters."], "Escriben is the ellas form of escribir (-en, like -er verbs), and a la profesora says who gets the letters."),
      },
    },
  },
  "present-tense-verbs-drill-3": {
    goal: "say what people do with -ar, -er and -ir verbs, in full sentences.",
    summary: "Full sentences and rapid-fire practice that mix -ar, -er and -ir verbs, with every person.",
    sections: {
      0: { addTables: [AR_ENDINGS, ER_IR_ENDINGS] },
    },
    exercises: {
      replace: {
        8: fill("How do you say the bold words in Spanish?", "Ellas ___ cartas a mi abuela.", "escriben", "They [write] letters to my grandmother.", "Escribir is an -ir verb, and ellas takes -en, the same as -er verbs: escriben."),
        15: tr("Translate to Spanish.", "The students write in the classroom.", "Los estudiantes escriben en el salón.", ["Los estudiantes escriben en la clase.", "Los estudiantes escriben en el aula.", "Los estudiantes escriben en el salón de clases.", "Los alumnos escriben en el salón.", "Los alumnos escriben en la clase."], "Los estudiantes is ellos, so escribir takes -en: escriben."),
      },
    },
  },
  "question-words": {
    sections: {
      0: {
        examples: [
          { es: "¿Qué? ¿Quién? ¿Dónde? ¿Cuándo?", en: "What? Who? Where? When?" },
          { es: "¿Cómo? ¿Por qué? ¿Cuánto?", en: "How? Why? How much / how many?" },
          { es: "¿Dónde vive tu hermano?", en: "Where does your brother live? (The question word comes first, then the verb, then the subject.)" },
          { es: "¿Qué es un tamal?", en: "What is a tamal? (qué + es asks what something is)" },
        ],
      },
      1: {
        addTables: [WHERE_U5],
        addBody: [HAVE_WANT],
        examples: [
          { es: "¿Cuántos años tienes?", en: "How old are you? (Años is masculine plural, so cuántos.)" },
          { es: "¿Cuántas personas hay?", en: "How many people are there? (personas is feminine plural, so cuántas)" },
          { es: "¿Quiénes son ellos?", en: "Who are they? (several people, so quiénes)" },
          { es: "¿De dónde eres?", en: "Where are you from? (de moves to the front)" },
          { es: "¿Con quién vives?", en: "Who do you live with? (con moves to the front)" },
        ],
      },
    },
    exercises: {
      replace: {
        17: speak(`${SAY} "Where does your brother live?"`, "¿Dónde vive tu hermano?", [], "The question word comes first, then the verb, then the subject: ¿Dónde vive tu hermano?"),
        18: speak(`${SAY} "How old are you?"`, "¿Cuántos años tienes?", ["¿Cuántos años tienes tú?", "¿Cuántos años tiene usted?"], "Años is masculine plural, so cuántos. Spanish asks age with tener: how many years do you have?"),
        19: speak(`${SAY} "What is a tamal?"`, "¿Qué es un tamal?", [], "Qué + es asks what something is. Like every question word, qué carries its accent."),
      },
    },
  },
  "a1r-answer-first-build-question": {
    sections: {
      1: {
        addTables: [WHERE_U5],
        examples: [
          { es: "¿Quiénes son las chicas de la foto? —Son mis compañeras.", en: "Who are the girls in the photo? They're my classmates. (several people: quiénes)" },
          { es: "¿Cuántos primos tienes? —Tengo cinco.", en: "How many cousins do you have? I have five. (primos: cuántos)" },
          { es: "Viajo a Madrid. → ¿Adónde viajas?", en: "I'm traveling to Madrid. → Where are you traveling to? (a + place: adónde)" },
        ],
      },
    },
    optionNotes: {
      3: ["", "That asks where they are; the answer would use están en.", "That asks where they're traveling to; the answer would use a.", "That asks who they are."],
      4: ["", "That asks where you are, not where you're going.", "That asks where you're from.", "That asks when; the answer gives a place."],
    },
    exercises: {
      replace: {
        0: match("Match each answer to its question.", [["Mañana.", "¿Cuándo?"], ["En el parque.", "¿Dónde?"], ["Con mi madre.", "¿Con quién?"], ["Diez dólares.", "¿Cuánto cuesta?"]], "Look at the type of information the answer gives: a time, a place, a person (after con, so the question keeps con too), a price."),
        3: QS("Answer: \"Son de Venezuela.\" What was the question?", ["¿De dónde son?", "¿Dónde están?", "¿Adónde viajan?", "¿Quiénes son?"], 0, "The answer gives origin (de Venezuela), so ¿De dónde son? \"¿Dónde están?\" asks where they are now, \"¿Adónde viajan?\" asks where they're traveling to, and \"¿Quiénes son?\" asks who they are.", ["", "That asks where they are; the answer would use están en.", "That asks where they're traveling to; the answer would use a.", "That asks who they are."]),
        6: tr("Make it plural.", "¿Quién es el chico nuevo?", "¿Quiénes son los chicos nuevos?", ["¿Quiénes son los nuevos chicos?"], "Several people: quién becomes quiénes, es becomes son, and el chico nuevo becomes los chicos nuevos."),
        16: tr("Write the question that produced this answer.", "Answer: The book costs fifty dollars.", "¿Cuánto cuesta el libro?", ["¿Cuánto vale el libro?"], "A price takes cuánto, with no noun after it, and cuesta for one book."),
        19: QS("Answer: 'Porque estoy cansado.' What was the question?", ["¿Cuándo trabajas?", "¿Por qué no estudias hoy?", "¿Dónde estás?", "¿Cómo eres?"], 1, "Porque answers a por qué question. ¿Cuándo trabajas? wants a time, ¿Dónde estás? a place, and ¿Cómo eres? a description.", ["That asks when; porque gives a reason.", "", "That asks where.", "That asks what you're like."]),
        22: speak(`${SAY} "Who are the girls in the photo? They're my classmates."`, "¿Quiénes son las chicas de la foto? Son mis compañeras.", ["¿Quiénes son las chicas en la foto? Son mis compañeras."], "Several people take quiénes and son, and the answer keeps son: Son mis compañeras."),
        23: speak(`${SAY} "How many cousins do you have? I have five."`, "¿Cuántos primos tienes? Tengo cinco.", ["¿Cuántos primos tienes? Tengo cinco primos.", "¿Cuántas primas tienes? Tengo cinco."], "Primos is masculine plural, so cuántos. The answer copies the verb: tienes becomes tengo."),
        24: speak(`${SAY} "How many books are there on the table?"`, "¿Cuántos libros hay en la mesa?", ["¿Cuántos libros hay sobre la mesa?"], "Libros is masculine plural, so cuántos, and hay asks what there is."),
      },
    },
  },
  "question-words-drill-1": {
    reword: [["(with motion verbs like ir)", "(with verbs of movement like viajar a)"]],
    goal: "choose between qué and cuál, quién and quiénes, and dónde and adónde.",
    sections: {
      0: {
        body: [
          "Remember the rule: qué asks for a definition (¿Qué es un tamal?) or goes straight before a noun (¿Qué libro?). Cuál / cuáles picks one out of a set, and before es it asks for a specific piece of information: ¿Cuál es tu nombre?",
          "Why? Cuál really means \"which one\", so use it whenever there's a set of possible answers to choose from: names, numbers, addresses, favorites.",
        ],
        examples: [
          { es: "¿Qué es un tamal?", en: "What is a tamal? (Qué + es asks for a definition.)" },
          { es: "¿Qué libro lees?", en: "What book are you reading? (qué + noun)" },
          { es: "¿Cuál compras, el rojo o el azul?", en: "Which one are you buying, the red one or the blue one? (picking from a set)" },
        ],
      },
      1: {
        check: [
          fill("How do you say the bold words in Spanish?", "¿ ___ es tu profesora de español?", "Quién", "[Who] is your Spanish teacher?", "You're asking about one teacher, so the singular quién, with es."),
          QS("¿ ___ llegan a la fiesta hoy? (expecting a list of several guests)", ["Quién", "Quiénes", "Cuál", "Cuáles"], 1, "Quiénes is plural, matching an answer with several people. \"Quién\" expects one person, and \"cuál\" and \"cuáles\" ask which, not who.", ["Quién expects one person; the answer is several.", "", "Cuál asks which one, not who.", "Cuáles asks which ones, not who."]),
        ],
      },
      2: {
        body: [
          "Dónde asks where something is. Adónde (a + dónde, \"to where\") asks where someone is heading, so it goes with verbs of movement that take a: viajar a, llegar a, caminar a.",
          "A verb with no movement (vivir, estar, trabajar) always takes plain dónde.",
        ],
        examples: [
          { es: "¿Dónde vives?", en: "Where do you live? (no movement)" },
          { es: "¿Adónde viajas?", en: "Where are you traveling to? (viajar a + place)" },
        ],
      },
    },
    exercises: {
      replace: {
        1: fill("How do you say the bold words in Spanish?", "¿ ___ es tu cumpleaños?", "Cuándo", "[When] is your birthday?", "A date answers cuándo. As a question word it always carries the written accent; cuando without it is only a linking word."),
        6: fill("How do you say the bold words in Spanish?", "¿___ viajas en diciembre?", "Adónde", "[Where] are you traveling (to) in December?", "Viajar a is movement toward a place, so the question word is adónde (a + dónde).", ["A dónde"]),
        11: speak(`${SAY} "What is a quesadilla?"`, "¿Qué es una quesadilla?", [], "Qué + es asks for a definition. Quesadilla is feminine: una quesadilla."),
        12: speak(`${SAY} "Who are they?"`, "¿Quiénes son ellos?", ["¿Quiénes son ellas?", "¿Quiénes son?"], "More than one person takes the plural quiénes, and the verb follows: son."),
        13: speak(`${SAY} "What book are you reading?"`, "¿Qué libro lees?", ["¿Qué libro lees tú?", "¿Qué libro estás leyendo?"], "Qué goes straight before a noun: qué libro. Lees is the tú form of leer."),
      },
    },
  },
  "question-words-drill-1-part-2": {
    summary: "More practice choosing qué or cuál, quién or quiénes, and dónde or adónde, with new sentences.",
    reword: [["Adónde is for verbs like ir.", "Adónde is for verbs of movement like viajar a."]],
    sections: {
      0: {
        examples: [
          { es: "¿Qué es un tamal?", en: "What is a tamal? (Qué + es asks for a definition.)" },
          { es: "¿Quién llama?", en: "Who's calling? (one person: quién)" },
          { es: "¿Dónde vives?", en: "Where do you live? (no movement: dónde)" },
        ],
      },
    },
    goal: "choose qué or cuál, quién or quiénes, and dónde or adónde without stopping to think.",
    exercises: {
      replace: {
        0: fill("Complete the question with quién or quiénes.", "¿___ es el señor de la foto? —Es mi abuelo.", "Quién", undefined, "The answer is one person (mi abuelo), so the singular quién, with es."),
        1: QS("¿ ___ viajas de vacaciones en verano? (heading somewhere)", ["Dónde", "Adónde", "Cuándo", "Cómo"], 1, "Viajar a is movement toward a place, so adónde asks for the destination. \"Dónde\" asks where something is, \"cuándo\" asks when, and \"cómo\" asks how.", ["Dónde asks where something is, with no movement.", "", "Cuándo asks when.", "Cómo asks how."]),
        3: tr("Change it to ask where she is traveling to.", "¿Dónde está tu hermana?", "¿Adónde viaja tu hermana?", ["¿A dónde viaja tu hermana?", "¿Adónde viaja?"], "Traveling somewhere takes viajar a, so the question word becomes adónde (a + dónde)."),
        9: tr("Translate to Spanish.", "Who is the new student (m.)?", "¿Quién es el estudiante nuevo?", ["¿Quién es el nuevo estudiante?", "¿Quién es el alumno nuevo?", "¿Quién es el nuevo alumno?"], "One person: quién, with es."),
        11: tr("Translate to Spanish.", "Who are the girls in the photo?", "¿Quiénes son las chicas de la foto?", ["¿Quiénes son las chicas en la foto?"], "Several people: quiénes, with son."),
        13: order("¿Quién vive en la casa azul?", "Who lives in the blue house?", "Quién for one person, then the verb vive. Azul comes after casa."),
        14: speak(`${SAY} "Who are your friends?"`, "¿Quiénes son tus amigos?", ["¿Quiénes son tus amigas?"], "Several people take quiénes and son, and tu becomes tus before a plural noun."),
        16: speak(`${SAY} "Who are your parents?"`, "¿Quiénes son tus padres?", ["¿Quiénes son tus papás?"], "Parents are two people, so the plural quiénes, with son."),
      },
    },
  },
  "question-words-drill-2": {
    reword: [[" have no accent — they aren't", " have no accent: they aren't"]],
    goal: "use cuándo and cómo, make cuánto agree, and choose por qué or para qué.",
    sections: {
      0: {
        body: [
          "Remember the rule: cuándo asks \"when\" and cómo asks \"how\". Like every question word, they carry a written accent whenever they ask something, even inside a longer sentence: Pregunto cómo se llama.",
          "Without the accent, cuando and como are ordinary linking words (when, like / as), so the accent tells the reader a question is being asked.",
        ],
        examples: [
          { es: "¿Cuándo llegas?", en: "When do you arrive?" },
          { es: "Pregunto cómo se llama.", en: "I'm asking what his name is. (A hidden question, so cómo keeps its accent.)" },
        ],
        check: [
          fill("How do you say the bold words in Spanish?", "¿ ___ termina la película?", "Cuándo", "[When] does the movie end?", "Cuándo asks when, and as a question word it always carries the written accent."),
          QS("¿ ___ se dice 'goodbye' en español?", ["Qué", "Cuándo", "Cómo", "Cuál"], 2, "Cómo asks how, here how something is said: ¿Cómo se dice...? \"Qué\" asks what, \"cuándo\" asks when, and \"cuál\" asks which.", ["Qué asks what.", "Cuándo asks when.", "", "Cuál asks which one."]),
        ],
      },
      2: {
        examples: [
          { es: "¿Por qué lloras?", en: "Why are you crying? (cause)" },
          { es: "¿Para qué estudias español?", en: "What are you studying Spanish for? (purpose)" },
        ],
      },
    },
    exercises: {
      replace: {
        9: fill("How do you say the bold words in Spanish?", "¿___ estudias inglés? —Para trabajar en Londres.", "Para qué", "[What] are you studying English [for]? —To work in London.", "The answer gives a purpose (para trabajar...), so the question is para qué, not por qué."),
        10: speak(`${SAY} "How do you say 'book' in Spanish?"`, "¿Cómo se dice book en español?", ["¿Cómo se dice «book» en español?"], "Cómo se dice... asks how something is said. Cómo keeps its accent."),
        11: speak(`${SAY} "How many books do you have?"`, "¿Cuántos libros tienes?", ["¿Cuántos libros tienes tú?", "¿Cuántos libros tiene usted?"], "Libros is masculine plural, so cuántos."),
        12: speak(`${SAY} "Why are you crying?"`, "¿Por qué lloras?", ["¿Por qué lloras tú?", "¿Por qué estás llorando?"], "Por qué asks for a reason: two words, with an accent. Lloras is the tú form of llorar."),
      },
    },
  },
  "question-words-drill-2-part-2": {
    summary: "More practice with cuándo, cómo, cuánto, por qué and para qué, with new sentences.",
    goal: "ask when, how, how much and why without mixing up the words.",
    sections: {
      0: {
        examples: [
          { es: "¿Cuándo llegas?", en: "When do you arrive?" },
          { es: "¿Cuántos libros tienes?", en: "How many books do you have? (Libros is masculine plural, so cuántos.)" },
          { es: "¿Por qué lloras?", en: "Why are you crying? (a cause, so por qué)" },
        ],
        check: [
          QS("¿ ___ estás hoy? —Un poco cansado. (How are you today? A bit tired.)", ["Qué", "Cuál", "Cómo", "Cuándo"], 2, "Cómo asks how someone is: ¿Cómo estás? \"Qué\" and \"cuál\" ask what or which, and \"cuándo\" asks when.", ["Qué asks what.", "Cuál asks which one.", "", "Cuándo asks when."]),
        ],
      },
    },
    exercises: {
      replace: {
        5: tr("Correct the sentence. (The answer was: Para viajar a Chile.)", "¿Por qué estudias español?", "¿Para qué estudias español?", ["¿Para qué estudias tú español?"], "The answer is a goal (para viajar a Chile), so the question asks para qué. Por qué would ask for a cause."),
        8: tr("Translate to Spanish.", "What is the key for?", "¿Para qué es la llave?", [], "Para qué asks about purpose (what for); por qué would ask for a cause."),
        9: tr("Translate to Spanish.", "When does the class end?", "¿Cuándo termina la clase?", ["¿A qué hora termina la clase?"], "Cuándo asks when. Terminar is a regular -ar verb, so la clase takes termina."),
        11: fill("How do you say the bold words in Spanish?", "¿___ amigas cenan en tu casa?", "Cuántas", "[How many] friends (female) are having dinner at your house?", "Amigas is feminine plural, so cuántas; cuántos would only fit a masculine noun."),
        14: QS("Which question word fits? «¿___ caminas al mercado? —Para comprar fruta.»", ["Por qué", "Para qué", "Cuándo", "Cuánto"], 1, "The answer starts with para + infinitive (a goal), so the question asks para qué. \"Por qué\" would expect a cause (porque...), and cuándo / cuánto would expect a time or an amount.", ["Por qué expects porque and a cause.", "", "Cuándo expects a time.", "Cuánto expects an amount."]),
        15: speak(`${SAY} "How many brothers do you have?"`, "¿Cuántos hermanos tienes?", ["¿Cuántos hermanos tienes tú?", "¿Cuántos hermanos tiene usted?"], "Hermanos is masculine plural, so cuántos. Tienes is the set phrase for \"you have\"."),
        16: speak(`${SAY} "Why are you studying Spanish?"`, "¿Por qué estudias español?", ["¿Por qué estudias tú español?"], "Por qué asks for a reason: two words, with an accent."),
      },
    },
  },
  "question-words-drill-3": {
    sections: {
      0: {
        body: [
          "Remember the rule: every question word carries a written accent (qué, cuál, quién, dónde, cuándo, cómo, cuánto, por qué), and every question opens with ¿ and closes with ?.",
          "Why? The accent marks a word that asks something, even inside a statement (Pregunto por qué está triste). Without it, que, donde, cuando and como just link ideas: la ciudad donde vivo.",
        ],
        examples: [
          { es: "¿Cómo estás?", en: "How are you?" },
          { es: "Pregunto por qué está triste.", en: "I'm asking why he's sad. (A hidden question, so por qué keeps its accent.)" },
          { es: "la ciudad donde vivo", en: "the city where I live (no question: no accent)" },
        ],
      },
    },
    reword: [[" — mixing them up", ": mixing them up"]],
    exercises: {
      replace: {
        0: QS("¿ ___ no cenas con nosotros? —Porque estoy enfermo.", ["Por qué", "Para qué", "Qué", "Cuál"], 0, "The answer explains a reason (porque...), so the question needed por qué.", ["", "Para qué expects para and a goal.", "Qué asks what.", "Cuál asks which one."]),
        1: QS("¿ ___ estudias en la biblioteca? —Para leer en silencio. (What do you study in the library for? To read in silence.)", ["Por qué", "Para qué", "Cómo", "Cuándo"], 1, "The answer gives a purpose (para leer...), so para qué. \"Por qué\" asks for a cause, and \"cómo\" and \"cuándo\" ask how and when.", ["Por qué expects porque and a cause.", "", "Cómo asks how.", "Cuándo asks when."]),
        6: tr("Turn it into a question about the time.", "La clase termina a las nueve.", "¿Cuándo termina la clase?", ["¿A qué hora termina la clase?"], "The information is a time, so ask with cuándo (or ¿A qué hora...? for a clock time)."),
        7: tr("Turn it into a question about the people.", "Mis primos cenan aquí hoy.", "¿Quiénes cenan aquí hoy?", ["¿Quién cena aquí hoy?"], "The answer is several people, so the plural quiénes; the verb stays cenan."),
        9: tr("Correct the sentence.", "Pregunto donde está mi llave.", "Pregunto dónde está mi llave.", ["Yo pregunto dónde está mi llave."], "Dónde asks a hidden question here (I'm asking where...), so it keeps its accent even without ¿ ?."),
        14: tr("Translate to Spanish.", "Where are you (informal) traveling to?", "¿Adónde viajas?", ["¿A dónde viajas?", "¿Adónde viajas tú?"], "Viajar a is movement toward a place, so adónde (or a dónde)."),
        15: tr("Translate to Spanish.", "How many people work here?", "¿Cuántas personas trabajan aquí?", [], "Personas is feminine plural, so cuánto becomes cuántas."),
        17: speak(`${SAY} "I'm asking where he lives."`, "Pregunto dónde vive.", ["Yo pregunto dónde vive."], "Dónde keeps its accent inside a statement when it asks a hidden question: pregunto dónde vive."),
        19: fill("How do you say the bold words in Spanish?", "Pregunto ___ se llama la profesora.", "cómo", "I'm asking [what] the teacher's name is.", "Names are asked with cómo se llama (literally \"how is she called\"), so \"what\" here is cómo, with an accent."),
        21: fill("How do you say the bold words in Spanish?", "¿___ compras, el libro rojo o el azul?", "Cuál", "[Which one] are you buying, the red book or the blue one?", "Choosing between options takes cuál, with its accent."),
        22: fill("How do you say the bold words in Spanish?", "¿___ son los chicos de la foto? —Son mis primos.", "Quiénes", "[Who] are the boys in the photo? —They're my cousins.", "Several people, so the plural quiénes matches son."),
        24: speak(`${SAY} "She's asking why he's sad."`, "Ella pregunta por qué está triste.", ["Pregunta por qué está triste."], "Por qué keeps its accent inside a statement when it asks a hidden question."),
        25: speak(`${SAY} "How many times a year do you travel?"`, "¿Cuántas veces al año viajas?", ["¿Cuántas veces viajas al año?"], "Veces is feminine plural, so cuántas veces. Viajas is the tú form of viajar."),
      },
    },
  },
};
