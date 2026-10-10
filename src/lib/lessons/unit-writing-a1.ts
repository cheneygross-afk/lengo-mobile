// Synced from cheneygross-afk/lengo:src/lib/lessons/unit-writing-a1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { WriteExercise } from "./types";
import { wr } from "./skills-authoring";

// The writing task in each A1 unit's review lesson (unit-reviews.ts), keyed
// by the unit's first lesson (unit-defs.ts). Instructions in English; each
// task only needs the grammar and words of its unit and the units before.

const t = (prompt: string, rubric: string[], modelAnswer: string, explanation: string): WriteExercise =>
  wr(prompt, [20, 50], rubric, modelAnswer, explanation);

export const A1_UNIT_WRITING: Record<string, WriteExercise> = {
  "greetings-pronouns-ser-1": t(
    "Introduce yourself and a friend to a new classmate. Say hello, say who you are and where you're from, then describe your friend with two or three adjectives.",
    ["A greeting (Hola, Buenos días…)", "Soy… and soy de…", "Mi amigo/amiga es… with adjectives that agree", "A goodbye (Adiós, Hasta luego…)"],
    "¡Hola! Me llamo Laura. Soy de Canadá y soy estudiante. Mi amiga se llama Marta. Ella es de México. Es alta, simpática y muy inteligente. Somos amigas de la universidad. ¡Hasta luego!",
    "Ser for who someone is and where they're from (soy de Canadá), and adjectives that match the person: Marta es alta, simpática (feminine)."
  ),
  "sounds-vowels": t(
    "Write four or five short sentences about you: your name, where you live, and two things you have or like. Then read them aloud slowly, every vowel clear.",
    ["Me llamo… and vivo en…", "At least two more sentences about you", "Correct accents where needed (é, á…)", "Short, clear sentences you can read aloud"],
    "Me llamo Ricardo. Vivo en una ciudad bonita cerca del río. Tengo un perro grande que se llama Rocky. Me gusta la música y el café. Hoy hablo español con mi amiga Rosa.",
    "Spanish vowels never change: read every a, e, i, o, u the same each time. Listen for the trill in perro and at the start of Ricardo, Rocky, río and Rosa, and the single tap in the middle of Ricardo (ri-CAR-do)."
  ),
  "present-tense-ar-verbs": t(
    "Describe a normal weekday: what you do in the morning, at work or school, and in the evening. Use at least four different verbs in the present tense.",
    ["At least four present-tense verbs (trabajo, como, vivo…)", "One stem-changing verb (quiero, puedo, empiezo…)", "Times of day (por la mañana, por la tarde…)", "Words like y, pero, también"],
    "Por la mañana desayuno café y pan. Trabajo en una oficina y empiezo a las nueve. Como con mis compañeros a la una. Por la tarde camino a casa y leo un libro. Por la noche cenamos juntos y duermo ocho horas.",
    "Regular endings (trabajo, como, camino) and stem changers (empiezo, duermo): the stem changes in every form except nosotros and vosotros."
  ),
  "a1-irregulars-yo-go": t(
    "Write a short message to a friend about your plans this week. Say what you have to do, what you want to do and one thing you can't do. Use at least two yo-go verbs (salgo, hago, tengo, pongo…).",
    ["Tengo que + infinitive", "Quiero / necesito + infinitive", "No puedo + infinitive", "At least two yo-go verbs (salgo, hago, traigo…)"],
    "Hola, Ana: Esta semana tengo que trabajar mucho. El lunes salgo tarde de la oficina. El miércoles quiero ir al cine contigo. Yo traigo las palomitas. El viernes no puedo salir porque hago la cena para mi familia. ¡Un beso!",
    "Tener que, querer, necesitar and poder all take an infinitive. Salgo, traigo and hago are yo-go forms: only yo gets the g."
  ),
  "a1r-word-web-jobs": t(
    "Describe a family member or friend: their job, where they work, what they're like, and how they are or what they're doing today.",
    ["Ser for the job and personality (es médico, es simpático)", "Estar for location (trabaja en un hospital que está en…)", "Estar for how they are today (está cansado)", "Estar + gerund for right now (está trabajando)"],
    "Mi hermana se llama Lucía. Es enfermera y trabaja en un hospital que está en el centro. Es muy trabajadora y alegre. Hoy está un poco cansada porque trabaja mucho. Ahora está durmiendo en casa.",
    "Ser for who someone is (es enfermera, es alegre); estar for where something is (está en el centro), how someone is right now (está cansada) and with a gerund (está durmiendo)."
  ),
  "possessives-prepositions": t(
    "Describe your morning routine with times. Say when you get up, have breakfast and leave home, and mention one of your things or a family member's (mi, tu, su, nuestro).",
    ["At least three times (a las siete, a las ocho y media…)", "Daily-routine verbs (me levanto, desayuno, salgo…)", "A possessive (mi, su, nuestro…)", "A preposition of place (en, cerca de, al lado de…)"],
    "Me levanto a las siete. Desayuno a las siete y media con mi hermano. Nuestro piso está cerca de la estación. Salgo de casa a las ocho y cuarto y tomo el tren. Llego a mi trabajo a las nueve menos diez.",
    "Telling the time: a las siete, a las ocho y cuarto, a las nueve menos diez. Possessives match the thing owned: nuestro piso, mi trabajo."
  ),
  "days-months-dates": t(
    "Write about your birthday and your family. Say the date of your birthday, who is in your family, and ask a friend two questions about theirs.",
    ["A date (el + number + de + month)", "At least two family words (mi madre, mis primos…)", "Two questions with question words and accents (¿Cuándo…?, ¿Cuántos…?)", "Question marks at the start and end"],
    "Mi cumpleaños es el doce de abril. Vivo con mis padres y mi hermana pequeña. Mis abuelos viven en otra ciudad, pero casi siempre vienen en abril. ¿Cuándo es tu cumpleaños? ¿Cuántos hermanos tienes?",
    "Dates are el + number + de + month (el doce de abril), with no capital on the month. Question words carry an accent: ¿cuándo?, ¿cuántos?"
  ),
  "gustar-1": t(
    "Describe your favourite season. Say what the weather is like, what you like and don't like doing then, and what you usually have to do or go to.",
    ["Weather with hace / hay / llueve / nieva", "Me gusta + infinitive or noun, and me gustan + plural noun", "No me gusta…", "Tener, ir or hacer at least once"],
    "Mi estación favorita es el invierno. Hace frío y a veces nieva. Me gusta mucho esquiar y me gustan las montañas. No me gusta el viento. En diciembre voy a casa de mis abuelos y tengo vacaciones.",
    "Gustar agrees with the thing liked: me gusta esquiar, me gustan las montañas. Weather uses hacer (hace frío) or its own verbs (nieva, llueve)."
  ),
  "a1r-word-web-house": t(
    "You're in a clothes shop with a friend. Write what you say about three items using este, ese and aquel, with their colours and prices.",
    ["Este / esta for something near you", "Ese / esa for something near your friend", "Aquel / aquella for something far away", "Colours that agree, and a price (cuesta… euros)"],
    "Mira, esta camisa azul es muy bonita y cuesta veinte euros. Esa chaqueta negra es elegante, pero es cara. ¿Y aquellos zapatos rojos? Me encantan. Voy a preguntar cuánto cuestan.",
    "Este (near me), ese (near you), aquel (over there); all agree with the noun: esta camisa, aquellos zapatos. Colours agree too: camisa azul, zapatos rojos."
  ),
  "a1-final-review-1": t(
    "Write a short email to a new pen friend. Introduce yourself, say where you live and what you do, describe your family, and say what you like doing at the weekend. End with a question.",
    ["Greeting and sign-off", "Ser and estar used correctly", "Present-tense verbs about your life", "Me gusta / me gustan", "A question at the end"],
    "¡Hola, Pablo! Me llamo Emma y tengo veinticinco años. Soy de Irlanda, pero vivo en Madrid. Soy profesora de inglés. Mi familia es pequeña: mis padres y mi hermano. Los fines de semana me gusta ir al parque y leer. ¿Qué haces tú los domingos? Un abrazo, Emma",
    "Beginner in one email: ser for identity and origin, tener for age, present-tense verbs, gustar, and a question with an opening ¿."
  ),
};
