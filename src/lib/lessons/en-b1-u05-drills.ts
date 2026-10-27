// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b1-u05-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B1 unit u05 (future forms, future continuous, future perfect): a short recap, then graded practice.

// ---- small authoring helpers (local to this file) ----------------------
// Answer patterns use {a|b|} for alternatives; every combination is
// accepted, and the first combination is the main answer.
function x(p: string): string[] {
  const m = p.match(/\{([^{}]*)\}/);
  if (!m || m.index === undefined) return [p.replace(/\s+/g, " ").replace(/\s+([,.!?;])/g, "$1").trim()];
  const out: string[] = [];
  for (const opt of m[1].split("|")) out.push(...x(p.slice(0, m.index) + opt + p.slice(m.index + m[0].length)));
  return out;
}
function xs(ps: string | string[]): string[] {
  return [...new Set((Array.isArray(ps) ? ps : [ps]).flatMap(x))];
}
const tr = (source: string, answers: string | string[], explanation: string, prompt = "Translate into English."): Exercise => {
  const [answer, ...alts] = xs(answers);
  return { type: "translate", direction: "es-en", prompt, source, answer, ...(alts.length ? { altAnswers: alts } : {}), explanation };
};
const fb = (sentence: string, answers: string | string[], en: string, explanation: string): Exercise => {
  const [answer, ...alts] = xs(answers);
  return { type: "fill-blank", prompt: "Write the bold words in English.", sentence, answer, en, ...(alts.length ? { altAnswers: alts } : {}), explanation };
};
const mc = (question: string, options: string[], explanation: string): Exercise => ({ type: "multiple-choice", question, options, correctIndex: 0, explanation });
const wo = (sentence: string, translation: string, explanation: string, alts?: string[]): Exercise => ({
  type: "word-order",
  prompt: "Put the words in order.",
  words: sentence.split(" "),
  translation,
  ...(alts ? { altOrders: alts.map((a) => a.split(" ")) } : {}),
  explanation,
});
const dc = (audio: string, explanation: string): Exercise => ({ type: "dictation", audio, explanation });
const lc = (audio: string, options: string[], explanation: string, question = "What does it mean?"): Exercise => ({ type: "listen-choose", audio, question, options, correctIndex: 0, explanation });
const sp = (text: string, explanation: string, tip?: string, prompt?: string): Exercise => ({ type: "speak", text, ...(prompt ? { prompt } : {}), ...(tip ? { tip } : {}), explanation });
const mt = (instructions: string, pairs: [string, string][], explanation: string): Exercise => ({ type: "matching", instructions, pairs: pairs.map(([left, right]) => ({ left, right })), explanation });

const SECONDS: Record<Exercise["type"], number> = {
  "multiple-choice": 15, "multi-select": 20, "listen-choose": 20, "fill-blank": 20, translate: 30,
  "word-order": 25, matching: 30, dictation: 30, speak: 25, write: 300,
};
const lesson = (
  n: number,
  title: string,
  summary: string,
  heading: string,
  body: string[],
  examples: [string, string][],
  exercises: Exercise[],
): Lesson => ({
  slug: `en-b1-future-forms-unit-drill-${n}`,
  level: "EN-B1",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B1_U05_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Will, going to, present continuous, timetables, offers, future continuous
  // ---------------------------------------------------------------------
  lesson(
    1,
    "Will, Going To, Arrangements & Timetables",
    "You will be able to choose will, going to, the present continuous or the present simple for the future, make offers with \"I'll\" and \"Shall I...?\", and say what you'll be doing at a future moment.",
    "Recap: one future, many forms",
    [
      "\"Will\" for predictions, instant decisions, offers and promises (\"I'll help you\", not *I help you); \"going to\" for intentions and visible evidence; the present continuous for arrangements in your calendar (\"I'm meeting Ana at six\"); and the present simple only for timetables (\"The train leaves at 8\"). *Tomorrow I go to Madrid copies the Spanish present.",
      "\"Shall I...?\" offers («¿abro la ventana?») and \"Shall we...?\" suggests. \"Won't\" can mean that someone or something refuses: \"The car won't start\". \"Will be\" + -ing is an action in progress at a future moment: \"This time tomorrow I'll be flying to Rome\".",
    ],
    [
      ["I'm having dinner with my in-laws on Friday.", "El viernes ceno con mis suegros."],
      ["The last bus leaves at midnight.", "El último autobús sale a medianoche."],
      ["Shall I call a taxi?", "¿Llamo un taxi?"],
      ["At noon tomorrow I'll be taking my driving test.", "Mañana a mediodía estaré haciendo el examen de manejo."],
    ],
    [
      fb("Look at that truck! It ___ crash into the wall.", "is going to", "¡Mira ese camión! [Va a] chocar contra la pared.",
        "A prediction based on what you can see right now = \"going to\"."),
      fb("I ___ my accountant at four tomorrow.", ["am meeting", "am seeing"], "Mañana a las cuatro [me reúno] con mi contador.",
        "An arrangement with a time and another person = present continuous. Spanish uses the present («me reúno»), but *I meet my accountant tomorrow sounds like a habit."),
      mc("How do you say «El sábado juego al tenis con Marcos» (it's arranged)?", [
        "I'm playing tennis with Marcos on Saturday.",
        "I play tennis with Marcos on Saturday.",
        "I will to play tennis with Marcos on Saturday.",
        "I'm play tennis with Marcos on Saturday.",
      ], "Arrangement = present continuous. The present simple sounds like a weekly habit, \"will\" never takes \"to\", and *I'm play forgets the -ing."),
      tr("Mañana voy al dentista.", ["I'm going to the dentist tomorrow.", "Tomorrow I'm going to the dentist.", "I'm seeing the dentist tomorrow.", "I'm going to see the dentist tomorrow."],
        "The Spanish present for a plan («mañana voy») becomes the present continuous or \"going to\" in English. *Tomorrow I go to the dentist is the classic mistake."),
      tr("¿Qué haces el domingo?", ["What are you doing {on Sunday|Sunday}?", "What are you going to do {on Sunday|Sunday}?"],
        "Asking about someone's plans: \"What are you doing...?\". *What do you do on Sunday? asks about a weekly habit."),
      tr("Este año voy a ahorrar para un carro.", ["This year I'm going to save {for a car|up for a car|money for a car}.", "I'm going to save {for a car|up for a car|money for a car} this year."],
        "An intention you have already decided = \"going to\". «Ir a» + infinitive is usually \"going to\" + base verb."),
      fb("Our bus ___ at 6:15 tomorrow morning.", ["leaves", "departs"], "Nuestro autobús [sale] mañana a las 6:15.",
        "A timetable uses the present simple, even for tomorrow. Remember the third-person -s: \"leaves\"."),
      fb("What time ___?", ["does the movie start", "does the film start"], "¿A qué hora [empieza la película]?",
        "Timetable questions need \"does\": *What time the movie starts? forgets the auxiliary."),
      tr("El vuelo aterriza en Bogotá a las 9:40.", "The flight lands in Bogota at 9:40.",
        "Official schedule = present simple, as in Spanish. Don't forget the -s: \"lands\"."),
      mc("Which sentence is correct?", [
        "We arrive in Madrid at noon.",
        "We arrive to Madrid at noon.",
        "We arrive at Madrid at noon.",
        "We arrive Madrid at noon.",
      ], "\"Arrive in\" + a city or country, \"arrive at\" + a building or station. Never *arrive to, a very common Spanish-speaker mistake."),
      tr("Mi clase termina a las siete, así que me voy a ver con Laura a las siete y media.", "My class {finishes|ends} at seven, so I'm {meeting|seeing} Laura at {seven thirty|7:30|half past seven}.",
        "Timetable (\"My class finishes\", present simple) vs your arrangement (\"I'm meeting Laura\", present continuous)."),
      fb("You look busy. I ___ the kids from school.", ["will pick up", "will get"], "Te ves ocupada. Yo [recojo] a los niños de la escuela.",
        "An offer made at the moment of speaking = \"will\", usually \"I'll\". Spanish uses the present («yo recojo»), but *I pick up the kids sounds strange here."),
      mc("How do you say «Te ayudo con la mudanza» (an offer)?", [
        "I'll help you with the move.",
        "I help you with the move.",
        "Do I help you with the move?",
        "I will to help you with the move.",
      ], "Offers take \"I'll\". The Spanish present («te ayudo») becomes \"will\" in English; \"will\" is followed by the base form, never \"to\"."),
      tr("Te prometo que no voy a llegar tarde.", "I promise {I won't be late|I'm not going to be late|I won't arrive late}.",
        "Promises use \"will\" / \"won't\": \"I promise I won't be late\"."),
      tr("La computadora no prende.", "The computer won't {turn on|start|switch on}.",
        "\"Won't\" with machines = it refuses to work, you're trying and nothing happens. \"The computer doesn't turn on\" sounds like a general fact."),
      fb("My daughter ___ her vegetables. She just pushes them around the plate.", "won't eat", "Mi hija [no quiere comer] la verdura. Solo la mueve por el plato.",
        "\"Won't\" = refuses to. «No quiere comer» is \"won't eat\", not *doesn't want eat."),
      fb("It's hot in here. ___ I turn on the fan?", ["Should", "Shall"], "Hace calor aquí. ¿[Prendo] el ventilador?",
        "\"Shall I...?\" (or \"Should I...?\" in American English) offers to do something. *Do I turn on the fan? translates the Spanish present."),
      tr("¿Pedimos comida china?", ["{Should|Shall} we order Chinese{ food|}?", "Do you want to order Chinese{ food|}?"],
        "A suggestion = \"Shall we...?\" or \"Should we...?\". *We order Chinese food? is a translation of the Spanish present."),
      mc("How do you say «¿Cierro la puerta?»", ["Should I close the door?", "Do I close the door?", "I close the door?", "Will I to close the door?"],
        "To offer, English uses \"Shall I...?\" (or \"Should I...?\", \"Do you want me to...?\"), never the present simple."),
      fb("This time tomorrow I ___ over the Atlantic.", "will be flying", "Mañana a esta hora [estaré volando] sobre el Atlántico.",
        "An action in progress at a future moment = \"will be\" + -ing. Spanish «estaré + gerundio» works exactly the same way."),
      tr("Cuando llegues, estaré trabajando en el jardín.", ["When you {arrive|get here|get home}, I'll be working in the {garden|yard}.", "I'll be working in the {garden|yard} when you {arrive|get here|get home}."],
        "The work is in progress (\"I'll be working\") when you arrive. After \"when\", the present: \"when you arrive\", never *when you will arrive."),
      mc("What does \"At eight I'll be having breakfast\" mean?", [
        "A las ocho ya estaré desayunando.",
        "A las ocho empezaré a desayunar.",
        "A las ocho ya habré desayunado.",
        "A las ocho desayuno siempre.",
      ], "\"Will be\" + -ing = in the middle of it at eight. \"At eight I'll have breakfast\" would mean breakfast starts at eight."),
      mt("Match each sentence with its meaning.", [
        ["I'll call you later.", "promesa o decisión del momento"],
        ["It's going to rain.", "predicción con evidencia"],
        ["I'm meeting Ana at six.", "plan acordado"],
        ["The bus leaves at six.", "horario"],
        ["I'll be working at six.", "acción en curso en el futuro"],
      ], "English chooses the future form by meaning, not by time."),
      wo("Will you be working on Saturday morning?", "¿Vas a estar trabajando el sábado por la mañana?",
        "Question: \"Will\" + subject + \"be\" + -ing. Don't forget \"be\": *Will you working is wrong."),
      wo("My train leaves at six, so I'm getting up at five.", "Mi tren sale a las seis, así que me levanto a las cinco.",
        "Timetable (\"leaves\") + personal arrangement (\"I'm getting up\")."),
      dc("The concert starts at eight, but we're meeting at seven.",
        "\"Starts\" (the official program) vs \"we're meeting\" (our arrangement): two futures in one sentence."),
      dc("Don't worry, I won't tell anybody.",
        "A promise with \"won't\" = \"will not\". Say it /woʊnt/, different from \"want\" /wɑnt/."),
      lc("I'll be lying on the beach this time next week.", [
        "La semana que viene a esta hora estaré tirado en la playa.",
        "La semana pasada a esta hora estaba en la playa.",
        "La semana que viene iré a la playa a esta hora.",
        "Estoy en la playa desde la semana pasada.",
      ], "\"This time next week\" + \"will be\" + -ing = in progress at that future moment."),
      lc("The window won't close.", [
        "La ventana no cierra (no hay manera).",
        "La ventana no se va a cerrar mañana.",
        "No quiero cerrar la ventana.",
        "La ventana nunca se cierra.",
      ], "\"Won't\" with objects = it refuses to work: you are trying to close it and it doesn't."),
      sp("I'm meeting my friends on Friday night.", "An arrangement = present continuous.",
        "Stress \"friends\" and \"Friday\"; link \"meeting my\".", "Say it in English: El viernes por la noche me veo con mis amigos."),
      sp("I'll get the check. You paid last time.", "An instant decision and offer = \"I'll\". \"Get the check\" = pay the bill.",
        "\"I'll\" is one syllable: /aɪl/.", "Say it in English: Yo pago la cuenta. Tú pagaste la última vez."),
      tr("Mañana trabajo hasta tarde, así que no voy a ir al gimnasio.", ["I'm working late tomorrow, so I'm not going {to the gym|to go to the gym}.", "Tomorrow I'm working late, so I'm not going {to the gym|to go to the gym}.", "I'm working late tomorrow, so I won't go to the gym."],
        "Two Spanish presents, two English futures: \"I'm working late\" (arrangement) and \"I'm not going to the gym\". *Tomorrow I work late sounds like a timetable."),
      tr("Alguien está tocando la puerta. —Yo abro.", "{Someone|Somebody} is knocking {at|on} the door. I'll {get it|open it|answer it}.",
        "An instant decision = \"I'll\". The Spanish present («yo abro») cannot be translated as *I open."),
      mc("Which sentence is correct?", [
        "I'm seeing the dentist at 5 tomorrow.",
        "I seeing the dentist at 5 tomorrow.",
        "I will to see the dentist at 5 tomorrow.",
        "I'm see the dentist at 5 tomorrow.",
      ], "An appointment already booked = present continuous: \"I'm seeing\". Both parts are needed: \"am\" + -ing."),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Future continuous (plans), future perfect, by/until, which future, tech + whole unit
  // ---------------------------------------------------------------------
  lesson(
    2,
    "Will Be Doing & Will Have Done",
    "You will be able to ask politely about plans with \"Will you be...?\", say what will be finished by a deadline, choose by or until, and pick the right future in any situation.",
    "Recap: in progress or completed?",
    [
      "\"Will you be using the car tonight?\" asks politely about plans, without asking anyone to do anything. \"Will have\" + participle is completed before a future moment: \"By June I'll have finished the course\" («para junio habré terminado»).",
      "\"By\" is a deadline («para»), \"until\" is «hasta» (the action continues up to that moment): *I'll finish it until Friday is wrong. After \"by the time\" and \"when\", use the present: \"by the time you get home\", never *by the time you will get home.",
    ],
    [
      ["Will you be eating with us tonight?", "¿Vas a cenar con nosotros esta noche?"],
      ["By Christmas we'll have paid off the car.", "Para Navidad habremos terminado de pagar el carro."],
      ["I'll be at the library until seven.", "Estaré en la biblioteca hasta las siete."],
      ["By the time you read this, I'll have landed.", "Para cuando leas esto, ya habré aterrizado."],
    ],
    [
      fb("___ the meeting room this afternoon?", "Will you be using", "¿[Vas a usar] la sala de reuniones esta tarde?",
        "\"Will you be\" + -ing asks politely about someone's plans, often because you want something yourself."),
      mc("Which question just asks about plans (it is not a request)?", [
        "Will you be driving to the office tomorrow?",
        "Will you drive me to the office tomorrow?",
        "Can you drive me to the office tomorrow?",
        "Could you drive to the office tomorrow?",
      ], "\"Will you be\" + -ing never asks someone to do something. \"Will you drive me...?\", \"Can you...?\" and \"Could you...?\" are requests."),
      tr("¿Vas a venir a la boda?", ["Will you be coming to the wedding?", "Are you coming to the wedding?", "Are you going to come to the wedding?"],
        "\"Will you be coming...?\" is the softest and most polite way to ask. The present continuous and \"going to\" are also fine."),
      tr("Mañana voy a ver a Pedro en clase, así que le puedo dar tu cuaderno.", ["I'll be seeing Pedro in class tomorrow, so I can give him your notebook.", "I'm seeing Pedro in class tomorrow, so I can give him your notebook.", "I'm going to see Pedro in class tomorrow, so I can give him your notebook.", "I'll see Pedro in class tomorrow, so I can give him your notebook."],
        "Something that will happen anyway, as part of the routine = \"I'll be seeing\". You're not planning to see Pedro for this reason; you'll see him anyway."),
      lc("We'll be landing in Lima in about fifteen minutes.", [
        "Aterrizaremos en Lima dentro de unos quince minutos.",
        "Aterrizamos en Lima hace unos quince minutos.",
        "Llevamos quince minutos aterrizando en Lima.",
        "Saldremos de Lima en unos quince minutos.",
      ], "A typical announcement: \"will be\" + -ing for something that will happen as planned. \"In fifteen minutes\" = «dentro de quince minutos»."),
      fb("By June, I ___ this course.", ["will have finished", "will have completed"], "Para junio [habré terminado] este curso.",
        "Completed before a future moment = \"will have\" + participle. «Habré terminado» works exactly the same way."),
      mc("My parents ___ by then.", ["will have arrived", "will has arrived", "will have arrive", "will arrived"],
        "After \"will\", always \"have\" (never \"has\"), then the participle: \"will have arrived\"."),
      tr("Para el viernes habré leído todos los documentos.", ["By Friday{,|} I'll have read all the {documents|files|papers}.", "I'll have read all the {documents|files|papers} by Friday."],
        "«Para» + time = \"by\" + time. \"Read, read, read\": same spelling, but the participle sounds like \"red\"."),
      tr("Para cuando lleguen los invitados, habremos decorado la sala.", ["By the time the guests {arrive|get here}, we'll have decorated the living room.", "We'll have decorated the living room by the time the guests {arrive|get here}."],
        "«Para cuando» + subjunctive = \"by the time\" + present simple. Never *by the time the guests will arrive."),
      fb("I'll be at the gym ___ eight.", ["until", "till"], "Estaré en el gimnasio [hasta] las ocho.",
        "You stay there, and at eight you leave: the action continues up to that moment = \"until\"."),
      fb("Please send me the invoice ___ Thursday.", "by", "Por favor, mándame la factura [para] el jueves.",
        "A deadline = \"by\": on Thursday or before."),
      mc("How do you say «Lo termino hasta el lunes» (meaning: Monday is the deadline)?", [
        "I'll finish it by Monday.",
        "I'll finish it until Monday.",
        "I'll finish it since Monday.",
        "I'll have finish it until Monday.",
      ], "Finishing is not something that continues, so it can't take \"until\". A deadline is \"by\". *I'll finish it until Monday is the classic Spanish-speaker error."),
      tr("No sabremos nada hasta el martes.", "We won't know anything {until|till} Tuesday.",
        "In negative sentences \"until\" is fine: «no... hasta» = \"won't... until\"."),
      fb("Sorry, I ___ the presentation by ten.", ["won't have finished", "won't have prepared"], "Perdón, no [habré terminado] la presentación para las diez.",
        "Negative future perfect: \"won't have\" + participle."),
      tr("¿Habrás terminado de cenar para las nueve?", "Will you have finished {dinner|eating dinner|eating} by nine{ o'clock|}?",
        "Question: \"Will\" + subject + \"have\" + participle. «Terminar de cenar» = \"finish dinner\" or \"finish eating\"."),
      mt("Match each time expression with its Spanish meaning.", [
        ["by Friday", "para el viernes"],
        ["until Friday", "hasta el viernes"],
        ["by the time", "para cuando"],
        ["this time tomorrow", "mañana a esta hora"],
        ["in two days", "dentro de dos días"],
        ["the day after tomorrow", "pasado mañana"],
      ], "The key pair: \"by\" = deadline («para»), \"until\" = continues up to («hasta»). «Dentro de» + time is \"in\"."),
      mc("The final starts at 8. At 9 p.m. I ___ it.", ["will be watching", "will have watched", "watch", "am watched"],
        "At 9 the game is still on: in progress = \"will be\" + -ing. \"Will have watched\" would mean it's over."),
      fb("The final starts at 8 and finishes at 9:45. By ten, it ___.", ["will have finished", "will have ended"], "La final empieza a las 8 y termina a las 9:45. Para las diez, ya [habrá terminado].",
        "\"By\" + a time after the end = completed: \"will have\" + participle."),
      tr("¡Mira esas nubes negras! Va a haber tormenta.", "Look at those {black|dark} clouds! There's going to be a storm.",
        "Evidence you can see now = \"going to\". «Va a haber» = \"there's going to be\"."),
      tr("Seguro que te va a encantar Oaxaca.", ["I'm sure you'll love Oaxaca.", "I'm sure you're going to love Oaxaca."],
        "A prediction based on your opinion = \"will\", often with \"I'm sure\". \"Going to\" is also possible."),
      tr("El mes que viene a esta hora estaremos viajando por Europa.", ["This time next month{,|} we'll be {traveling|travelling} {around|through|in} Europe.", "We'll be {traveling|travelling} {around|through|in} Europe this time next month."],
        "\"This time next month\" + \"will be\" + -ing = in progress at that moment."),
      fb("My phone is almost dead. I need to ___ it.", "charge", "Mi celular casi no tiene batería. Tengo que [cargarlo].",
        "«Cargar» a battery = \"charge\". \"Load\" is for programs or pages (\"The page won't load\")."),
      mc("How do you say «Tienes que actualizar la aplicación»?", [
        "You need to update the app.",
        "You need to actualize the app.",
        "You need to upload the app.",
        "You need to load the app.",
      ], "«Actualizar» = \"update\". *Actualize is not used for software, and \"upload\" is «subir»."),
      fb("I can't ___ in. I think I forgot my password.", ["log", "sign"], "No puedo [iniciar sesión]. Creo que olvidé mi contraseña.",
        "\"Log in\" or \"sign in\" = «iniciar sesión». As a verb it is two words."),
      tr("Para 2035, la inteligencia artificial habrá cambiado muchos trabajos.", "By 2035{,|} {AI|artificial intelligence} will have changed {many|a lot of|lots of} jobs.",
        "A prediction about something completed by a future year = future perfect with \"by\". In English it's \"AI\", not «IA»."),
      wo("In ten years, we'll be using AI for almost everything.", "Dentro de diez años, estaremos usando la IA para casi todo.",
        "\"In ten years\" = «dentro de diez años». \"Will be\" + -ing describes what life will be like at that time."),
      wo("The library will be closing in five minutes.", "La biblioteca cerrará dentro de cinco minutos.",
        "Announcements often use the future continuous: it will happen as planned."),
      dc("By the end of the month, I'll have saved enough for the trip.",
        "\"By the end of the month\" + \"I'll have saved\": completed before that moment."),
      dc("Will you be needing a taxi to the airport, sir?",
        "A very polite question in a hotel: \"Will you be needing...?\". It asks about plans, not a request."),
      lc("I'll have moved to my new apartment by Christmas.", [
        "Para Navidad ya me habré mudado a mi nuevo departamento.",
        "Me voy a mudar a mi nuevo departamento después de Navidad.",
        "Estaré mudándome a mi nuevo departamento en Navidad.",
        "Me mudé a mi nuevo departamento antes de Navidad.",
      ], "\"Will have moved... by Christmas\" = the move will be complete at Christmas or earlier."),
      sp("This time tomorrow I'll be taking the exam.", "\"This time tomorrow\" + \"will be\" + -ing: in progress at that future moment.",
        "Say \"I'll be\" fast: /aɪl bi/. Stress \"tomorrow\" and \"exam\".", "Say it in English: Mañana a esta hora estaré haciendo el examen."),
      sp("I don't think we'll be driving our own cars in 2050.", "\"I don't think\" + \"will\" is more natural than \"I think... won't\". \"Will be\" + -ing describes life at that time.",
        "Say the year as \"twenty fifty\".", "Say it in English: No creo que en 2050 vayamos a manejar nuestros propios carros."),
      tr("Cuando termines, ya me habré ido.", ["{When|By the time} you {finish|are done|get done}, I'll {have left|have gone|already have left|have already left|have already gone}.", "I'll {have left|have gone|already have left|have already left|have already gone} {when|by the time} you {finish|are done|get done}."],
        "Present after \"when\" / \"by the time\" (\"you finish\"), future perfect in the main clause (\"I'll have left\"): leaving happens first."),
      tr("Mañana a las ocho no me llames: estaré manejando al aeropuerto.", ["Don't call me at eight tomorrow{:|;|,|.} I'll be driving to the airport.", "Don't call me tomorrow at eight{:|;|,|.} I'll be driving to the airport."],
        "\"Will be driving\" = in progress at eight. \"Drive to\" a place, like \"go to\"."),
      mc("Which sentence is correct?", [
        "By the time you get home, I'll have cooked dinner.",
        "By the time you will get home, I'll have cooked dinner.",
        "Until you get home, I'll have cooked dinner.",
        "By the time you get home, I'll have cook dinner.",
      ], "Present after \"by the time\", \"will have\" + participle in the main clause. \"Until\" doesn't work with a completed action."),
    ],
  ),
];
