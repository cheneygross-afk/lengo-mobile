// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/a1-unit4.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, A1 Unit 4: content fixes from Claude's audit in Ricardo's
// format (Claude Feedback/Spanish (new course)/A1 Beginner/Unit 04). They add
// to the Beginner patches in a1.ts (merged section by section in index.ts).
// Section numbers are the lesson's own; question numbers are its practice
// questions (lesson.exercises). Only content changes here: what is taught,
// asked and accepted. The answer checker and the rubric are untouched.
//
// The recut lesson es-hay-there-is takes its patch here through
// recuts-a1.ts, since a recut takes no other.
//
// The unit teaches hay, numbers, the time, dates and regular -ar verbs (now
// taught right after hay, so the number and time lessons can use them).
// -er/-ir verbs (Unit 5), este/esta and su (Unit 6), tener as a verb
// (Unit 6, used here only as the phrases tengo / tiene ... años) and
// stem-changing verbs (Unit 7 and A2) come later, so no scored question
// here asks for them. Beginners get Latin American words (carro, boleto,
// computadora, lentes).
import type { Exercise } from "../types";
import type { LessonPatch } from "./patch";

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
// Old-course lesson names that the new course doesn't use.
const OLD_LISTS: [string, string][] = [
  [" (from the 'Greetings, Subject Pronouns & Ser' lesson)", " (Units 1 to 3)"],
  [" (from the 'Gender, Number & Articles' lesson)", " (Units 1 to 3)"],
  [" (from the 'Adjective Agreement & Placement' lesson)", " (Units 1 to 3)"],
  [" from the 'Greetings, Subject Pronouns & Ser' lesson", " from Units 1 to 3"],
  [" from the 'Gender, Number & Articles' lesson", " from Units 1 to 3"],
  [" from the 'Adjective Agreement & Placement' lesson", " from Units 1 to 3"],
];

export const A1_UNIT4_PATCHES: Record<string, LessonPatch> = {
  // Recut lesson: applied through recuts-a1.ts.
  "es-hay-there-is": {
    sections: {
      1: {
        check: [
          order("Hay un problema con el carro.", "There is a problem with the car.", "Hay comes first and never changes, whether one thing or many follow it."),
          mc("\"There are two cats in the garden.\"", ["Hay dos gatos en el jardín.", "Han dos gatos en el jardín.", "Son dos gatos en el jardín.", "Tienen dos gatos en el jardín."], 0, "Existence takes hay, and it stays hay for plurals. Han is a different form of haber that can't say \"there are\", son identifies (they are two cats), and tienen means \"they have\".", ["", "Han can't say \"there are\": it's always hay.", "Son says what they are, not that they exist.", "Tienen means \"they have\"."]),
        ],
      },
    },
    exercises: {
      replace: {
        7: speak(`${SAY} "In my bedroom there's a bed, a closet (clóset) and a lamp."`, "En mi dormitorio hay una cama, un clóset y una lámpara.", ["En mi dormitorio hay una cama, un armario y una lámpara.", "En mi cuarto hay una cama, un clóset y una lámpara.", "En mi recámara hay una cama, un clóset y una lámpara.", "Hay una cama, un clóset y una lámpara en mi dormitorio."], "One hay covers the whole list. Use un or una with each new thing: una cama, un clóset, una lámpara."),
        8: speak(`${SAY} "There's a bed in the bedroom."`, "Hay una cama en el dormitorio.", ["En el dormitorio hay una cama.", "Hay una cama en el cuarto.", "Hay una cama en la recámara."], "Hay brings in something new, so it takes una: hay una cama. The bedroom is a known room, so el dormitorio."),
        12: speak(`${SAY} "There is a park near here."`, "Hay un parque cerca de aquí.", ["Hay un parque cerca.", "Hay un parque por aquí.", "Cerca de aquí hay un parque."], "A park you're mentioning for the first time takes hay + un. Cerca de aquí means near here."),
        16: tr("Translate to Spanish.", "Is there a bank on your (tú) street?", "¿Hay un banco en tu calle?", ["¿Hay algún banco en tu calle?"], "Asking whether one exists takes hay + un: ¿Hay un banco...? The question is the same sentence with question marks."),
        19: speak(`${SAY} "There are three books on the table."`, "Hay tres libros en la mesa.", ["En la mesa hay tres libros."], "Hay stays the same for three books as for one: hay tres libros. Only the noun goes plural."),
      },
    },
  },
  "a1r-contrast-hay-esta": {
    summary: "\"There is a bank\" or \"the bank is there\": choose hay for something new and está for something already known.",
    sections: {
      0: {
        examples: [
          { es: "Hay un banco en mi calle.", en: "There's a bank on my street. (new: hay)" },
          { es: "El banco está en mi calle.", en: "The bank is on my street. (a known bank: está)" },
          { es: "Hay un perro en la calle. El perro está al lado de la puerta.", en: "There's a dog in the street. The dog is next to the door. (first mention hay, then está)" },
        ],
      },
    },
    exercises: {
      replace: {
        1: speak(`${SAY} "The milk is in the fridge."`, "La leche está en la nevera.", ["La leche está en el refrigerador.", "La leche está en el refri."], "La leche is a known thing, so you say where it is with estar: está. Hay would only bring in new milk: hay leche."),
        9: tr("Correct the sentence.", "Está un problema con la computadora.", "Hay un problema con la computadora.", ["Hay un problema con el ordenador."], "Un problema is new information, so hay. Estar needs a known thing: el problema está en..."),
        10: tr("Translate to Spanish.", "There's a supermarket on my street.", "Hay un supermercado en mi calle.", [], "Un supermercado is something new, so hay brings it in."),
        11: speak(`${SAY} "The supermarket is on my street."`, "El supermercado está en mi calle.", [], "El supermercado is a known place, so estar says where it is: está."),
        20: tr("Translate to Spanish.", "Where are my glasses (lentes)?", "¿Dónde están mis lentes?", ["¿Dónde están mis anteojos?", "¿Dónde están mis gafas?"], "Mis lentes are known things, so estar locates them, and the plural takes están."),
        24: speak(`${SAY} "There's a bank on my street."`, "Hay un banco en mi calle.", ["En mi calle hay un banco."], "Un banco is new information, so hay. Once you both know it, it's el banco está..."),
        25: speak(`${SAY} "There are two parks in my neighborhood."`, "Hay dos parques en mi barrio.", ["En mi barrio hay dos parques.", "Hay dos parques en mi colonia."], "A number brings in new things, so hay: hay dos parques."),
      },
    },
  },
  "numbers-0-100-1": {
    summary: "Count from zero to 999: one-word 16-29, treinta y uno and up, cien or ciento, and hundreds that agree (doscientas casas).",
    sections: {
      0: {
        addBody: [
          "Two short phrases help you use numbers right away. For age, Spanish says \"have years\": Tengo veinte años (I'm twenty), Mi hermano tiene doce años (my brother is twelve). For prices: El libro cuesta diez pesos (the book costs ten pesos). Tener gets its own lesson later; for now, tengo = I have and tiene = he or she has.",
        ],
      },
    },
  },
  "numbers-0-100-2": {
    sections: {
      0: {
        addBody: ["Quiero means \"I want\" or \"I'd like\": Quiero un café, por favor. Use it as a set phrase for now."],
        body: [
          "One rule covers every \"one\": in front of a noun it behaves like an adjective. Right before a masculine noun it drops its -o and becomes un (un carro, un año, un problema); right before a feminine noun it becomes una (una mesa, una idea).",
          "With no noun after it, it keeps its full form: when you count (uno, dos, tres), at the end of a number (cuarenta y uno) and when it stands in for a noun (Quiero uno).",
          "Compounds that end in uno follow the same rule: veintiún libros (note the accent on veintiún), veintiuna páginas, treinta y un días, cincuenta y una personas.",
        ],
      },
      1: {
        check: [
          mc("Which is correct for \"the first book\" (el libro)?", ["el primero libro", "el primer libro", "el primera libro", "el uno libro"], 1, "Primero shortens to primer directly before a masculine singular noun: el primer libro. \"Primera\" is feminine, and \"el uno libro\" uses the counting number instead of the ordinal.", ["Primero drops its -o right before a masculine noun.", "", "Libro is masculine, so not primera.", "Uno counts; for \"first\" use primer."]),
          fill("Fill in \"first\".", "Mi oficina está en el ___ piso.", "primer", "My office is on the [first] floor.", "Piso is masculine singular and the ordinal comes right before it, so primero drops its -o: el primer piso."),
        ],
      },
      2: {
        examples: [
          { es: "—¿Cuántos años tienes? —Tengo treinta y dos años.", en: "\"How old are you?\" \"I'm thirty-two years old.\" (tener for age)" },
          { es: "—¿Cuál es tu número de teléfono? —Es el seis, quince, veintidós, cuarenta.", en: "\"What's your phone number?\" \"It's 6-15-22-40.\"" },
          { es: "—¿Cuánto cuesta? —Cuesta ciento cincuenta pesos.", en: "\"How much does it cost?\" \"It costs one hundred fifty pesos.\"" },
          { es: "Mi casa está en la calle Mayor, número veintiocho.", en: "My house is on Mayor Street, number twenty-eight." },
        ],
      },
    },
    exercises: {
      replace: {
        7: tr("Change carro to casa.", "Es mi primer carro.", "Es mi primera casa.", [], "No shortening before a feminine noun: primer becomes primera."),
        13: tr("Correct the sentence.", "Es la tercer casa de la calle.", "Es la tercera casa de la calle.", [], "Tercer is only for masculine singular nouns; casa is feminine, so tercera."),
        19: speak(`${SAY} "I have one brother and one sister."`, "Tengo un hermano y una hermana.", ["Yo tengo un hermano y una hermana."], "Un before a masculine noun (un hermano), una before a feminine one (una hermana)."),
        20: speak("Answer out loud in Spanish: ¿Cuántos años tienes? (Say: \"I'm thirty-two years old.\")", "Tengo treinta y dos años.", ["Yo tengo treinta y dos años."], "Age takes tener + number + años: tengo treinta y dos años. From 31 up, the number is three words."),
      },
    },
  },
  "telling-time-1": {
    exercises: {
      replace: {
        21: speak(`${SAY} "What time is it?"`, "¿Qué hora es?", [], "¿Qué hora es? never changes, whatever the time. It uses qué and the singular es."),
        22: speak(`${SAY} "It's half past one."`, "Es la una y media.", [], "One o'clock is singular even with minutes: es la una. Half past is y media."),
        23: speak(`${SAY} "It's three o'clock, exactly."`, "Son las tres en punto.", ["Son las tres."], "Three hours are plural: son las tres. En punto means exactly, on the dot."),
      },
    },
  },
  "telling-time-2": {
    sections: {
      1: {
        examples: [
          { es: "¿A qué hora es la clase?", en: "At what time is the class?" },
          { es: "La clase es a las nueve.", en: "The class is at nine. (a las, not son las)" },
          { es: "El tren llega a la una.", en: "The train arrives at one. (a la for one o'clock)" },
          { es: "Cenamos a las nueve de la noche.", en: "We have dinner at nine at night. (9pm)" },
        ],
      },
    },
    exercises: {
      replace: {
        2: tr("Translate to Spanish.", "At what time do you (tú) have dinner?", "¿A qué hora cenas?", ["¿A qué hora cenas tú?", "¿Tú a qué hora cenas?"], "¿A qué hora...? asks when something happens. Cenar is a regular -ar verb, so tú takes -as: cenas."),
        5: fill("How do you say the bold words in Spanish?", "La reunión es ___ la una.", "a", "The meeting is [at] one.", "\"At\" a time is a la / a las: a la una for one o'clock."),
        6: speak(`${SAY} "The train arrives at six."`, "El tren llega a las seis.", [], "When something happens takes a: a las seis. Llegar is a regular -ar verb: el tren → llega."),
        9: tr("Change it to say the train arrives at ten.", "Son las diez.", "El tren llega a las diez.", [], "Son las diez tells the time; to say when the train arrives, swap son for a: a las diez."),
        14: tr("Correct the sentence.", "¿Qué hora es la película?", "¿A qué hora es la película?", [], "Asking when something happens needs a: ¿A qué hora...? ¿Qué hora es? only asks the time now."),
        17: order("¿A qué hora llega el autobús?", "At what time does the bus arrive?", "¿A qué hora...? first, then the verb and the subject."),
        19: speak(`${SAY} "It's eight in the morning."`, "Son las ocho de la mañana.", [], "Eight hours are plural (son las), and de la mañana replaces a.m."),
      },
    },
  },
  "numbers-time-drill-1": {
    goal: "build any number up to mil, and make un, una and the hundreds agree.",
    sections: {
      1: {
        check: [
          mc("How do you say 31?", ["treintayuno", "treinta y uno", "treintiuno", "treinta uno"], 1, "From 31 up, tens and units are separate words joined by y: treinta y uno. Only 16 to 29 fuse into one word.", ["Above 30, the number is three words.", "", "Only 21 to 29 use veinti-; 31 is three words.", "The y can't be dropped."]),
          fill("How do you say the bold words in Spanish?", "El boleto cuesta ___ pesos.", "ciento diez", "The ticket costs [one hundred and ten] pesos.", "Cien becomes ciento when another number follows, and there's no y after the hundreds: ciento diez."),
        ],
      },
    },
    exercises: {
      replace: {
        5: tr("Change carros to motos.", "Hay veintiún carros en la calle.", "Hay veintiuna motos en la calle.", [], "Moto is feminine (la moto), so veintiún becomes veintiuna."),
        11: speak(`${SAY} "The ticket costs one hundred and ten pesos."`, "El boleto cuesta ciento diez pesos.", ["El boleto cuesta 110 pesos."], "Cien becomes ciento when another number follows, and there's no y after the hundreds: ciento diez."),
      },
    },
  },
  "numbers-time-drill-1-part-2": {
    goal: "say numbers up to mil quickly, with un, una and the hundreds agreeing.",
    sections: {
      0: { body: ["A quick look back at the number rules: 16 to 29 are one word (dieciséis, veintiocho), from 31 up it's three words with y (treinta y uno), and un, una and the hundreds agree with the noun (veintiún libros, doscientas casas). Then more practice with new sentences."] },
    },
    exercises: {
      replace: {
        6: tr("Correct the sentence.", "El boleto cuesta ciento y veinte pesos.", "El boleto cuesta ciento veinte pesos.", [], "No y after the hundreds: ciento veinte. The y only joins tens and units, as in treinta y uno."),
      },
    },
  },
  "numbers-time-drill-2": {
    goal: "use first to tenth and tell the time to the minute.",
    exercises: {
      replace: {
        1: toEn("Translate to English.", "En la ciudad hay mil quinientas personas.", "There are 1,500 people in the city.", ["There are one thousand five hundred people in the city.", "There are fifteen hundred people in the city.", "In the city there are 1,500 people.", "There are 1,500 people in the town."], "Mil is 1,000 and never changes; quinientas agrees with personas: mil quinientas personas = 1,500 people."),
        4: fill("How do you say the bold words in Spanish?", "Mi clase está en el ___ piso.", "tercer", "My class is on the [third] floor.", "Piso is masculine singular, so tercero shortens to tercer."),
        21: speak(`${SAY} "My class is on the third floor."`, "Mi clase está en el tercer piso.", [], "Piso is masculine singular, so tercero shortens to tercer. Where something is takes estar: está."),
        22: speak(`${SAY} "My office is on the seventh floor."`, "Mi oficina está en el séptimo piso.", [], "Floors use ordinals: seventh is séptimo, masculine like piso."),
        23: speak("Say it out loud. Change día to semana: «Es el tercer día.»", "Es la tercera semana.", [], "Semana is feminine, so the article and the ordinal agree (la tercera), and the feminine form is never shortened."),
      },
    },
  },
  "numbers-time-drill-3": {
    exercises: {
      replace: {
        4: toEn("Translate to English.", "Hay ciento cincuenta invitados y la fiesta es a las nueve de la noche.", "There are a hundred and fifty guests and the party is at nine at night.", ["There are 150 guests and the party is at 9 PM.", "There are one hundred and fifty guests and the party is at nine p.m.", "There are 150 guests and the party is at nine at night.", "There are 150 guests and the party's at 9 PM."], "Ciento cincuenta = 150 (ciento because a number follows); a las nueve de la noche = at 9 PM."),
        12: tr("Translate to Spanish.", "The movie is at 8:30 PM.", "La película es a las ocho y media de la noche.", [], "When something happens takes a: a las ocho y media. De la noche replaces PM."),
        14: speak(`${SAY} "The train arrives at six."`, "El tren llega a las seis.", [], "When something happens takes a: a las seis. Llegar is a regular -ar verb: el tren → llega."),
        18: order("¿A qué hora es el partido?", "At what time is the game?", "¿A qué hora...? asks when something happens; the event comes after es."),
        19: mc("\"I have dinner at 9:00 PM.\"", ["Ceno a las nueve de la noche.", "Ceno en las nueve de la noche.", "Ceno a las nueve por la noche.", "Ceno son las nueve de la noche."], 0, "At a clock time is a las, and after a clock time the part of the day takes de. En is the wrong preposition, por is only used with no clock time, and son can't follow ceno.", ["", "At a time is a, not en.", "After a clock time, use de la noche.", "Son tells the time; for when, use a."]),
        20: tr("Correct the sentence.", "¿Qué hora es el concierto?", "¿A qué hora es el concierto?", [], "Asking when something happens needs a: ¿A qué hora...? ¿Qué hora es? only asks the time now."),
      },
    },
  },
  "days-months-dates": {
    sections: {
      0: {
        check: [
          mc("\"We have dinner with my grandparents on Sundays.\"", ["Cenamos con mis abuelos los domingos.", "Cenamos con mis abuelos en domingo.", "Cenamos con mis abuelos el domingos.", "Cenamos con mis abuelos en los domingos."], 0, "Every week = los + plural day: los domingos. Spanish has no word for \"on\", so en domingo and en los domingos are wrong, and el domingos mixes a singular article with a plural day.", ["", "Days never take en.", "El is singular; every week is los domingos.", "No en: the article alone does the job."]),
          fill("Complete with el or los.", "Tengo clase de piano ___ miércoles, todas las semanas.", "los", undefined, "Todas las semanas (every week) tells you it repeats, so los miércoles. El miércoles would be just one Wednesday."),
        ],
      },
      1: {
        examples: [
          { es: "enero, febrero, marzo, abril", en: "January, February, March, April" },
          { es: "mayo, junio, julio, agosto", en: "May, June, July, August" },
          { es: "septiembre, octubre, noviembre, diciembre", en: "September, October, November, December" },
          { es: "Mi cumpleaños es en mayo.", en: "My birthday is in May. (en + month)" },
          { es: "Viajamos a Chile en septiembre.", en: "We travel to Chile in September." },
        ],
      },
    },
    exercises: {
      replace: {
        21: speak(`${SAY} "On Monday I have an exam."`, "El lunes tengo un examen.", ["Tengo un examen el lunes."], "One particular Monday is el lunes, with no word for \"on\". Tengo = I have."),
        22: speak(`${SAY} "My birthday is in May."`, "Mi cumpleaños es en mayo.", [], "A month takes en: en mayo, written in lowercase."),
      },
    },
  },
  "present-tense-ar-verbs": {
    sections: {
      3: { body: ["Twenty more regular -ar verbs. They all conjugate exactly like hablar."] },
    },
    exercises: {
      replace: {
        9: tr("Change to nosotros.", "Yo trabajo en casa.", "Trabajamos en casa.", ["Nosotros trabajamos en casa.", "Nosotras trabajamos en casa."], "Swap the yo ending -o for the nosotros ending -amos: trabajamos. The stem trabaj- stays the same."),
        18: speak(`${SAY} "I work in an office, but at night I sing in a band."`, "Trabajo en una oficina, pero por la noche canto en un grupo.", ["Trabajo en una oficina pero por la noche canto en un grupo.", "Trabajo en una oficina, pero en la noche canto en un grupo.", "Trabajo en una oficina, pero por la noche canto en una banda."], "Both verbs are yo, so both end in -o: trabajo, canto. No yo needed: the ending already says \"I\"."),
        19: speak(`${SAY} "I study English at night."`, "Estudio inglés por la noche.", ["Yo estudio inglés por la noche.", "Estudio inglés en la noche."], "Estudiar → estudio: the -o ending already says \"I\", so yo is optional."),
      },
    },
  },
  "vocabulary-practice-1": {
    goal: "name the people, home and description words from Units 1 to 3, and use the patterns behind them.",
    reword: OLD_LISTS,
    sections: {
      0: { body: ["Test yourself on these 20 people and job words from Units 1 to 3, then use the pattern behind them.", "The pattern: a word for a person usually has a man's form and a woman's form. Words in -o swap to -a (amigo → amiga, abogado → abogada). Words in -or add -a (profesor → profesora, escritor → escritora). Words in -ista, and most words in -e, don't change at all (el artista, la artista; el estudiante, la estudiante): only the article tells you who you mean."] },
      1: { body: ["Test yourself on these 20 words for things around the house, then use the pattern behind them.", "The pattern: most nouns in -o are masculine (el techo, el espejo) and most nouns in -a are feminine (la ventana, la alfombra). Nouns in -dad and -ción are always feminine (la ciudad, la canción). Nouns that end in -e or a consonant (la pared, el reloj, el jardín) give no clue, so learn them with their article."] },
      2: { body: ["Test yourself on these 20 colors and describing words, then use the pattern behind them.", "The pattern: adjectives in -o have four forms (rojo, roja, rojos, rojas). Adjectives in -e or a consonant only change for plural: verde → verdes, azul → azules, gris → grises. Feliz changes z to c before -es: felices."] },
    },
    exercises: {
      replace: {
        6: speak(`${SAY} "My name is Ana."`, "Mi nombre es Ana.", ["Me llamo Ana."], "Nombre means name: mi nombre es Ana. Me llamo Ana says the same thing."),
        7: speak(`${SAY} "My last name is López."`, "Mi apellido es López.", [], "Apellido is a last name (family name); nombre is a first name."),
        8: speak(`${SAY} "My country is big."`, "Mi país es grande.", [], "País is masculine and keeps its accent on the í. Grande is the same for both genders."),
        9: speak(`${SAY} "The city is very pretty."`, "La ciudad es muy bonita.", ["La ciudad es muy linda."], "Ciudad ends in -dad, so it's feminine: la ciudad, bonita."),
      },
    },
  },
  "vocabulary-practice-1-part-2": {
    goal: "use the people, home and description words in new sentences, with every ending matching.",
    reword: OLD_LISTS,
    sections: {
      0: { body: ["A quick look back at the three word lists (people and jobs, the house, colors and descriptions), then more practice with new sentences. Keep checking the endings: -o or -a, and the plural."] },
    },
    exercises: {
      replace: {
        13: speak(`${SAY} "My neighbor (woman) is a writer and she is very nice."`, "Mi vecina es escritora y es muy simpática.", ["Mi vecina es escritora y es muy amable.", "Mi vecina es escritora y ella es muy simpática."], "Vecina (-o → -a), escritora (-or + a), and simpática agrees with her."),
        15: speak(`${SAY} "My neighbor (man) is a doctor."`, "Mi vecino es doctor.", ["Mi vecino es médico."], "Vecino for a man, and a plain job after ser takes no un: es doctor."),
      },
    },
  },
  "a1r-word-web-jobs": {
    goal: "say what people do and where they work, with job words that match the person.",
    exercises: {
      replace: {
        4: fill("Complete with a job word built from flor (flower).", "La mujer de la tienda de flores es la ___.", "florista", undefined, "Flor + -ista = florista, the same for a man or a woman: el florista, la florista. Only the article la tells you it's a woman."),
        22: speak(`${SAY} "My mother is a doctor and works at a hospital."`, "Mi madre es médica y trabaja en un hospital.", ["Mi madre es doctora y trabaja en un hospital.", "Mi mamá es médica y trabaja en un hospital.", "Mi madre es médica y trabaja en el hospital."], "A plain job after ser has no una: es médica. Trabajar → trabaja for mi madre."),
        23: speak(`${SAY} "She's a very good lawyer."`, "Es una abogada muy buena.", ["Ella es una abogada muy buena.", "Es muy buena abogada."], "With an adjective, the article comes back: es una abogada muy buena."),
      },
    },
  },
  "a1r-word-web-family-people": {
    goal: "name family members and the people around you, with -o for men and -a for women.",
    exercises: {
      replace: {
        4: tr("Translate to Spanish.", "My cousins are at my grandparents' house.", "Mis primos están en la casa de mis abuelos.", ["Mis primas están en la casa de mis abuelos.", "Mis primos están en casa de mis abuelos.", "Mis primas están en casa de mis abuelos."], "Masculine plurals cover mixed groups: primos and abuelos include women too. De + owner replaces 's."),
        8: tr("Make it plural.", "Mi primo está en Lima.", "Mis primos están en Lima.", ["Mis primas están en Lima."], "Mi → mis, primo → primos, and the verb follows: está → están. Primos can be boys or a mixed group."),
        17: speak(`${SAY} "My coworkers are nice."`, "Mis compañeros de trabajo son simpáticos.", ["Mis compañeros de trabajo son amables.", "Mis compañeras de trabajo son simpáticas."], "-os covers men or a mixed group, and simpáticos agrees with it."),
        19: speak(`${SAY} "My cousins are at my grandparents' house."`, "Mis primos están en la casa de mis abuelos.", ["Mis primas están en la casa de mis abuelos.", "Mis primos están en casa de mis abuelos."], "Where people are takes estar: están. De + owner replaces 's: la casa de mis abuelos."),
      },
    },
  },
  "a1r-ar-verbs-in-real-life": {
    goal: "read a weekly planner and say who does what with -ar verbs.",
  },
  "a1r-dialogue-what-do-you-do": {
    goal: "answer a question about what you do, with the verb ending that matches.",
    exercises: {
      replace: {
        11: speak(`${SAY} "I study English and work in a shop."`, "Estudio inglés y trabajo en una tienda.", ["Yo estudio inglés y trabajo en una tienda."], "Both verbs are yo, so both end in -o: estudio, trabajo."),
      },
    },
  },
  "a1r-dialogue-what-do-you-do-part-2": {
    goal: "ask and answer about daily life, flipping tú and ustedes questions into yo and nosotros answers.",
    sections: {
      0: { body: ["A quick look back at the mirror rule: a tú or usted question gets a yo answer (-o), and an ustedes question gets a nosotros answer (-amos). Then more practice with new sentences."] },
    },
    exercises: {
      replace: {
        0: mc("Which question would get the answer \"No, no fumo\"? (fumar = to smoke)", ["¿Fumas?", "¿Fuman ustedes?", "¿Fuma él?", "¿Fumamos?"], 0, "The answer \"no fumo\" is in the yo form, so the question was asked to tú: ¿Fumas? \"¿Fuman ustedes?\" would get fumamos, \"¿Fuma él?\" would get fuma, and \"¿Fumamos?\" is about us.", ["", "Ustedes would get a nosotros answer: fumamos.", "A question about él keeps fuma.", "That asks about us, not you."]),
        14: speak(`${SAY} "Do you all train on Mondays? No, we train on Tuesdays."`, "—¿Ustedes entrenan los lunes? —No, entrenamos los martes.", ["¿Entrenan ustedes los lunes? No, entrenamos los martes.", "¿Ustedes entrenan los lunes? No, nosotros entrenamos los martes."], "A question to ustedes gets a nosotros answer: entrenamos."),
      },
    },
  },
};
