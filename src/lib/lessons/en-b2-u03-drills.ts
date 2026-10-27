// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b2-u03-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B2 unit u03 (future forms): a short recap, then graded practice.

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
  slug: `en-b2-future-unit-drill-${n}`,
  level: "EN-B2",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B2_U03_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Choosing a future form (Future Forms 1 and 2, Contrast Clinic)
  // ---------------------------------------------------------------------
  lesson(
    1,
    "Will, Going To, I'm Doing, I'll Be Doing, I'll Have Done",
    "You will be able to choose between will, going to, the present continuous and the present simple for the future, and use the future continuous, the future perfect, by, until, be about to and be due to.",
    "Recap: six ways to talk about the future",
    [
      "\"Will\" for decisions made now, offers, promises and opinions (\"I'll call you\"); \"going to\" for intentions and evidence (\"It's going to rain\"); the present continuous for arrangements (\"I'm meeting Ana on Friday\"); the present simple for timetables (\"The train leaves at six\").",
      "\"Will be + -ing\" is in progress at a future moment; \"will have + participle\" is finished before a deadline, usually with \"by\" («para»). \"Until\" is a period that continues up to then; \"be about to\" is «estar a punto de».",
    ],
    [
      ["I'll help you with that.", "Yo te ayudo con eso."],
      ["We're flying to Cancun on Monday.", "El lunes volamos a Cancún."],
      ["This time tomorrow I'll be sitting on the plane.", "Mañana a esta hora estaré sentada en el avión."],
      ["By June we'll have moved to the new office.", "Para junio ya nos habremos mudado a la nueva oficina."],
    ],
    [
      fb("The phone's ringing. ___ it.", ["I'll get", "I'll answer"], "Está sonando el teléfono. [Contesto yo].",
        "A decision made at the moment of speaking takes \"will\": \"I'll get it\". Spanish uses the present («contesto yo»), but *I get it sounds wrong in English."),
      fb("Look at those clouds. It ___ rain.", "is going to", "Mira esas nubes. [Va a] llover.",
        "A prediction based on evidence you can see now: \"going to\". Remember the verb \"be\": \"It's going to\"."),
      tr("Te llamo luego.", ["I'll {call|phone} you later.", "I'll give you a call later.", "I'll call you back later."],
        "A promise or decision made now needs \"will\". *I call you later copies the Spanish present."),
      tr("El sábado juego tenis con Tom.", ["I'm playing tennis with Tom on Saturday.", "On Saturday{,|} I'm playing tennis with Tom."],
        "An arrangement with another person and a day: present continuous. *On Saturday I play tennis sounds like a weekly routine."),
      fb("The train ___ at 6:15 tomorrow morning.", ["leaves", "departs"], "El tren [sale] a las 6:15 mañana por la mañana.",
        "Official timetables use the present simple even for the future: \"The train leaves at 6:15\"."),
      mc("«Vamos a comprar una casa el año que viene.» Which is correct?", [
        "We're going to buy a house next year.",
        "We buy a house next year.",
        "We will to buy a house next year.",
        "We going to buy a house next year.",
      ], "An intention decided before speaking: \"be going to\" + base verb. Don't forget \"are\", and never put \"to\" after \"will\"."),
      mc("\"We're out of milk.\" \"Oh, ___ some on my way home.\"", ["I'll get", "I'm getting", "I get", "I'm going to get"],
        "The speaker decides right now, reacting to the news: \"will\". \"I'm going to get\" would mean it was already planned."),
      tr("Este año voy a aprender a tocar la guitarra.", [
        "I'm going to learn {to play the guitar|how to play the guitar|the guitar} this year.",
        "This year{,|} I'm going to learn {to play the guitar|how to play the guitar|the guitar}.",
      ], "An intention with nothing booked: \"going to\". «Tocar» an instrument is \"play\"."),
      fb("This time tomorrow I ___ to Lima.", "will be flying", "Mañana a esta hora [estaré volando] a Lima.",
        "An action in progress at a future moment: future continuous \"will be flying\"."),
      fb("By June I ___ the course.", ["will have finished", "will have completed"], "Para junio [habré terminado] el curso.",
        "Complete before a deadline: \"will have\" + past participle. «Para» + deadline is \"by\", not *for."),
      mc("She ___ the report by Friday.", ["will have finished", "will has finished", "will have finish", "will finished"],
        "\"Have\" never changes after \"will\" (*will has), and it needs the participle: \"finished\", not *finish."),
      tr("Para el viernes habremos pagado todo.", "By Friday{,|} we'll have paid {everything|for everything|it all}.",
        "«Para el viernes habremos» = \"By Friday we'll have\" + participle. \"Paid\" is the participle of \"pay\"."),
      fb("I'll be at the office ___ six.", ["until", "till"], "Estaré en la oficina [hasta] las seis.",
        "The situation continues up to six: \"until\". \"By six\" would be a deadline."),
      fb("I'll be home ___ six, I promise.", "by", "Estaré en casa [para] las seis, te lo prometo.",
        "\"By\" = at that moment or earlier, a deadline. «Para las seis» is \"by six\"."),
      tr("No voy a estar en casa hasta las diez.", ["I won't be {home|at home|back} until ten{| o'clock}.", "I'm not going to be {home|at home|back} until ten{| o'clock}."],
        "\"Not ... until\" = «no ... hasta»: you get home at ten, not earlier. English needs only one negative."),
      fb("Hurry up! The movie is ___ start.", "about to", "¡Apúrate! La película [está a punto de] empezar.",
        "\"Be about to\" + base verb = «estar a punto de»: very soon."),
      tr("Está previsto que el avión aterrice a las siete.", "{The plane|The flight} is due to land at {seven|7}{| o'clock}.",
        "A scheduled or expected time: \"be due to\" + verb. It's common in announcements."),
      tr("El bebé de mi hermana llega en mayo.", ["My sister's baby is due in May.", "My sister's baby is coming in May.", "My sister is having her baby in May."],
        "With a time or date alone, use \"due\": \"The baby is due in May\". *arrives in May sounds like a timetable."),
      mc("Watch out! That glass ___ fall.", ["is going to", "will", "falls", "is falling to"],
        "The evidence is right in front of you, so \"going to\" is the natural choice."),
      mc("«El carro no arranca.» Which is correct?", [
        "The car won't start.",
        "The car isn't starting to.",
        "The car not starts.",
        "The car won't to start.",
      ], "\"Won't\" can mean refusal: \"The car won't start\", \"He won't listen\". No \"to\" after a modal."),
      tr("¿Me ayudas con esta caja?", "{Will|Can|Could} you help me with this box?",
        "A request: \"Will you...?\" (or \"Can\"/\"Could you...?\"). *Do you help me? is not a request in English."),
      mt("Match each sentence with its use.", [
        ["I'll call you later.", "decisión o promesa en el momento"],
        ["I'm going to buy a car.", "intención ya decidida"],
        ["I'm seeing the dentist at four.", "cita acordada"],
        ["The train leaves at six.", "horario oficial"],
        ["I'll be working at ten.", "acción en curso en un momento futuro"],
        ["I'll have finished by ten.", "acción terminada antes de un plazo"],
      ], "Choose the form by what you are describing, not by the Spanish verb."),
      tr("Creo que Argentina va a ganar.", "I think Argentina {will|is going to} win.",
        "A prediction based on opinion (\"I think\") usually takes \"will\"; \"going to\" is also possible."),
      wo("I'm meeting Ana at the cafe on Friday.", "Voy a ver a Ana en la cafetería el viernes.",
        "Arrangement: present continuous + place + time."),
      dc("This time next week, we'll be lying on a beach in Cancun.",
        "Future continuous: \"we'll be lying\". \"We'll\" is short /wil/, and \"lying\" comes from \"lie\"."),
      dc("The concert starts at eight, so we're leaving at seven.",
        "Timetable (\"starts\", present simple) and personal arrangement (\"we're leaving\", present continuous) in one sentence."),
      lc("I'll have finished it by Monday.", [
        "Lo habré terminado para el lunes.",
        "Lo terminaré el lunes.",
        "Lo estaré terminando el lunes.",
        "Lo terminé el lunes.",
      ], "\"Will have finished\" + \"by\": finished before the deadline, «habré terminado para el lunes»."),
      lc("I'm seeing the dentist tomorrow.", [
        "Mañana tengo cita con el dentista.",
        "Ahora mismo estoy viendo al dentista.",
        "Ayer vi al dentista.",
        "Iría al dentista mañana.",
      ], "Present continuous + a future time = an arrangement, not something happening now."),
      sp("Don't worry, I'll pick you up at the airport.", "An offer made now: \"I'll\". The Spanish present («te recojo») becomes \"will\" in English.",
        "Contract it: \"I'll\" /aɪl/, linked to \"pick\".", "Say it in English: No te preocupes, yo te recojo en el aeropuerto."),
      sp("By the end of the year, I'll have saved enough money.", "Deadline + future perfect: \"by the end of the year\" + \"I'll have saved\".",
        "Weak \"have\": \"I'll've saved\" /aɪləv seɪvd/.", "Say it in English: Para fin de año, habré ahorrado suficiente dinero."),
      fb("I ___ the dentist tomorrow at four.", ["am seeing", "am going to see"], "Mañana a las cuatro [veo al] dentista.",
        "An appointment is an arrangement: \"I'm seeing\". *I will see the dentist sounds like a decision you just made."),
      tr("Mañana a las nueve estaré en una reunión, así que te llamo después.", [
        "Tomorrow at nine{,|} I'll be in a meeting, so I'll call you {after|afterwards|later}.",
        "At nine tomorrow{,|} I'll be in a meeting, so I'll call you {after|afterwards|later}.",
      ], "Two futures, two jobs: a situation at a future moment (\"I'll be in a meeting\") and a promise (\"I'll call you\"), not *I call you."),
      mc("Which sentence is correct?", [
        "By the time you arrive, I'll have cooked dinner.",
        "By the time you will arrive, I'll have cooked dinner.",
        "By the time you arrive, I'll cook dinner already.",
        "By the time you arrive, I have cooked dinner.",
      ], "After \"by the time\", use the present (\"arrive\"); the main clause takes the future perfect because dinner will be finished before then."),
      tr("¿A qué hora empieza la película?", ["What time does the {movie|film} start?", "When does the {movie|film} start?"],
        "A schedule: present simple, with \"does\" in the question. *What time starts the movie? keeps Spanish word order."),
      tr("No te preocupes, no se lo voy a decir a nadie.", ["Don't worry, I won't tell {anyone|anybody}.", "Don't worry, I'm not going to tell {anyone|anybody}."],
        "A promise: \"I won't tell anyone\". English uses one negative: *I won't tell nobody is wrong."),
      wo("The meeting is due to start at ten.", "La reunión está programada para las diez.",
        "\"Be due to\" + base verb + time: a scheduled event."),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Time clauses, deadlines and form errors (Future Time Clauses, Transform: By Then, Error Hunt)
  // ---------------------------------------------------------------------
  lesson(
    2,
    "When I Arrive, By Then, Will Be Able To",
    "You will be able to use the present after when, as soon as, until and once, ask and answer with the future perfect and future continuous, and say «podré» with will be able to.",
    "Recap: no will after time words",
    [
      "Where Spanish uses the subjunctive after «cuando», «en cuanto», «hasta que», «antes de que», «una vez que» or «si», English uses the present: \"I'll call you when I arrive\". To stress that something must finish first, use the present perfect: \"once I've finished\". Questions are different: \"When will you know?\", \"I don't know when he'll come\".",
      "Future perfect negatives and questions: \"I won't have finished\", \"Will you have finished?\". «Llevaré diez años trabajando» is \"I'll have been working for ten years\". \"Can\" has no future: «podré» is \"I'll be able to\".",
    ],
    [
      ["I'll text you as soon as I land.", "Te escribo en cuanto aterrice."],
      ["Once I've paid the rent, I'll buy the tickets.", "Una vez que haya pagado la renta, compraré los boletos."],
      ["Will you have finished by Friday?", "¿Habrás terminado para el viernes?"],
      ["Next year I'll be able to drive.", "El año que viene podré manejar."],
    ],
    [
      fb("I'll call you when I ___.", ["arrive", "get there", "get home", "land"], "Te llamaré cuando [llegue].",
        "Time clause about the future: present simple. Spanish uses the subjunctive «llegue»; English never puts \"will\" here."),
      mc("Text me as soon as you ___ home.", ["get", "will get", "are getting", "got"],
        "\"As soon as\" introduces a time clause, so the present simple: \"as soon as you get home\". *as soon as you will get is the classic error."),
      tr("Te espero hasta que vuelvas.", "I'll wait for you until you {come back|get back|return}.",
        "\"Until\" + present (\"you come back\"). «Esperar a alguien» is \"wait for\" someone."),
      fb("We won't start ___ everyone is here.", "until", "No vamos a empezar [hasta que] estén todos.",
        "\"Until\" («hasta que») + present: \"until everyone is here\", not *until everyone will be here."),
      tr("Antes de que te vayas, dame tu número.", "Before you {go|leave}, give me your number.",
        "«Antes de que» + subjunctive = \"before\" + present simple. The main clause can be an imperative."),
      fb("I'll help you once I ___ this email.", ["have finished", "have sent", "have written", "finish"], "Te ayudo una vez que [haya terminado] este correo.",
        "To stress that the first action will be complete, use the present perfect after \"once\": \"once I've finished\". Never *once I will have finished."),
      tr("En cuanto haya terminado, te aviso.", "As soon as I {have finished|finish}, I'll {let you know|tell you}.",
        "«En cuanto haya terminado» = \"as soon as I've finished\". The promise in the main clause needs \"will\": \"I'll let you know\", not *I let you know."),
      mc("Which sentence is correct?", [
        "I don't know when he'll arrive.",
        "I don't know when will he arrive.",
        "I don't know when he arrive.",
        "I don't know when arrives he.",
      ], "An indirect question is not a time clause, so \"will\" is fine. But it keeps statement order: \"when he'll arrive\", not *when will he arrive."),
      mc("When ___ back from your trip?", ["will you be", "you will be", "are you be", "you be"],
        "A direct question with «cuándo» (with an accent) is not a time clause, so \"will\" is normal: \"When will you be back?\"."),
      tr("¿Sabes cuándo llegará el paquete?", "Do you know when the package {will arrive|will get here|is arriving}?",
        "An indirect question can use \"will\"; statement order after \"when\": \"when the package will arrive\"."),
      fb("By the end of the month, we ___ all the boxes.", ["will have unpacked", "will have opened", "will have emptied"], "Para fin de mes, [habremos desempacado] todas las cajas.",
        "Task + deadline = future perfect: \"will have\" + participle."),
      fb("I ___ by Friday, sorry.", "won't have finished", "[No habré terminado] para el viernes, lo siento.",
        "Negative future perfect: \"won't have\" + participle."),
      tr("¿Habrás terminado para las cinco?", "Will you have finished by five{| o'clock}?",
        "Question: \"Will\" + subject + \"have\" + participle. «Para las cinco» = \"by five\"."),
      tr("¿Cuántos países habrás visitado al final del viaje?", "How many countries will you have {visited|been to} by the end of {the|your} trip?",
        "\"How many\" + future perfect question. «Al final del viaje» here is a deadline: \"by the end of the trip\"."),
      fb("___ you be using the car tonight?", "Will", "¿[Vas a] usar el carro esta noche?",
        "The future continuous question \"Will you be using...?\" asks about plans politely, often before a request."),
      mc("Which question just asks about someone's plans, without pressure?", [
        "Will you be coming to the meeting?",
        "Will you come to the meeting?",
        "Do you come to the meeting?",
        "Are you come to the meeting?",
      ], "\"Will you be coming?\" is neutral: it only asks about plans. \"Will you come?\" sounds like an invitation or a request."),
      tr("En diciembre llevaré diez años trabajando aquí.", "{In December|By December}{,|} I'll have been working here for ten years.",
        "«Llevaré + time + gerund» = future perfect continuous: \"will have been + -ing + for\". English has no verb like «llevar» here."),
      wo("By next summer, she will have been studying English for five years.", "Para el próximo verano, llevará cinco años estudiando inglés.",
        "\"By\" + time, then \"will have been + -ing + for\" + period."),
      mc("Which sentence is correct?", [
        "After this course, you'll be able to understand movies in English.",
        "After this course, you'll can understand movies in English.",
        "After this course, you're going to can understand movies in English.",
        "After this course, you'll be able understand movies in English.",
      ], "\"Can\" has no future form. For future ability, use \"will be able to\" + base verb (don't drop \"to\")."),
      fb("Tomorrow I ___ help you with the move.", ["will be able to", "can"], "Mañana [podré] ayudarte con la mudanza.",
        "«Podré» = \"I'll be able to\". For a simple arrangement, \"I can help you tomorrow\" also works. *I will can is never correct."),
      tr("Podré viajar más cuando me jubile.", "I'll be able to travel more when I retire.",
        "Future ability: \"I'll be able to\". The time clause takes the present: \"when I retire\", not *when I will retire."),
      mc("«Te lo mando mañana.» Which is correct?", [
        "I'll send it to you tomorrow.",
        "I will to send it to you tomorrow.",
        "I will sends it to you tomorrow.",
        "I send it to you tomorrow.",
      ], "A promise needs \"will\" + base verb, with no \"to\" and no -s. The Spanish present doesn't work in English here."),
      tr("Para el lunes lo tengo terminado.", ["By Monday{,|} I'll have finished it.", "I'll have finished it by Monday.", "I'll have it finished by Monday."],
        "Spanish uses the present for a deadline; English needs the future perfect: *By Monday I finish it sounds wrong."),
      tr("Mándame un mensaje cuando llegues.", "{Text me|Send me a message} when you {arrive|get there|get here|get home}.",
        "Imperative + time clause in the present. *when you will arrive is the error number one in messages."),
      dc("As soon as I've saved enough money, I'll buy a new laptop.",
        "Present perfect in the time clause (\"I've saved\"), \"will\" in the main clause. Listen for the short 've."),
      dc("Will you have finished the project by the time the client arrives?",
        "Future perfect question + \"by the time\" + present simple (\"arrives\")."),
      lc("I'll wait until you come back.", [
        "Te esperaré hasta que vuelvas.",
        "Volveré cuando me esperes.",
        "Esperaba que volvieras.",
        "Te esperaré antes de que vuelvas.",
      ], "\"Until you come back\" = «hasta que vuelvas»: English present, Spanish subjunctive."),
      lc("I'll be working late tonight.", [
        "Esta noche voy a estar trabajando hasta tarde.",
        "Anoche trabajé hasta tarde.",
        "Habré terminado de trabajar esta noche.",
        "Trabajaría hasta tarde esta noche.",
      ], "\"Will be working\": in progress at a future time, «voy a estar trabajando»."),
      sp("I'll let you know as soon as I hear anything.", "Main clause with \"will\" (\"I'll let you know\"), time clause in the present (\"as soon as I hear\").",
        "Link \"let you\" as /letʃu/.", "Say it in English: Te aviso en cuanto sepa algo."),
      sp("By May, I'll have been living here for a year.", "Future perfect continuous for duration up to a future point: «en mayo llevaré un año viviendo aquí».",
        "\"I'll have been\" is quick: /aɪləv bɪn/.", "Say it in English: Para mayo, llevaré un año viviendo aquí."),
      mt("Match each time word with its Spanish equivalent.", [
        ["as soon as", "en cuanto"],
        ["until", "hasta que"],
        ["once", "una vez que"],
        ["by the time", "para cuando"],
        ["before", "antes de que"],
      ], "All of them take the present (or present perfect) for the future in English, where Spanish uses the subjunctive."),
      tr("Le diré cuando la vea.", "I'll tell her when I see her.",
        "«Cuando la vea» = \"when I see her\": present simple. \"Will\" goes only in the main clause."),
      fb("If the weather ___ nice tomorrow, we'll go hiking.", "is", "Si [hace] buen tiempo mañana, vamos a ir de excursión.",
        "First conditional: \"if\" + present, never *if the weather will be. «Hacer buen tiempo» is \"the weather is nice\"."),
      tr("No sé si podré ir a la fiesta.", "I don't know if I'll be able to {go to|come to|make it to} the party.",
        "«Podré» = \"I'll be able to\". Here \"if\" means «si» in an indirect question (whether), so \"will\" is correct."),
      mc("Which sentence is correct?", [
        "I'll call you once I've landed.",
        "I'll call you once I will have landed.",
        "I'll call you once I will land.",
        "I call you once I will land.",
      ], "Time clause: present perfect (\"once I've landed\"), never \"will\". The main clause needs \"will\" for the promise."),
      wo("I'll call you as soon as I get home.", "Te llamo en cuanto llegue a casa.",
        "Main clause with \"will\", then \"as soon as\" + present simple."),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 3. Plans, predictions, the future in the past and the whole unit
  // (Dialogue Lab, Real Mission, Future in the Past, Spiral Review, Mastery Check)
  // ---------------------------------------------------------------------
  lesson(
    3,
    "Plans, Predictions and Was Going To",
    "You will be able to make and discuss plans, predict with likely to, bound to and probably in the right place, talk about changed plans with was going to and would, and mix every future form in the unit.",
    "Recap: from plans to the future in the past",
    [
      "Ask about plans with \"What are you doing this weekend?\" and offer with \"I'll...\". Predict with \"will probably\" but \"probably won't\", \"be likely to\" and \"be bound to\" (no subjunctive after them), and \"might\" + base verb.",
      "«Iba a llamarte» is \"I was going to call you\" (a plan that changed); \"was about to\" is «estaba a punto de»; and reported futures use \"would\": \"She said she would come\", with the past after \"when\": \"when she arrived\".",
    ],
    [
      ["What are you up to this weekend?", "¿Qué vas a hacer este fin de semana?"],
      ["It probably won't be ready until Monday.", "Probablemente no esté listo hasta el lunes."],
      ["I was going to call you, but my phone died.", "Iba a llamarte, pero se me murió el celular."],
      ["He said he would call when he got home.", "Dijo que llamaría cuando llegara a casa."],
    ],
    [
      tr("¿Qué vas a hacer este fin de semana?", ["What are you doing this weekend?", "What are you up to this weekend?", "What are you going to do this weekend?"],
        "To ask about someone's arrangements, English uses the present continuous: \"What are you doing...?\". \"What are you up to?\" is the informal version."),
      mc("«¿Qué haces este fin de semana?» Which is correct?", [
        "What are you doing this weekend?",
        "What do you do this weekend?",
        "What you do this weekend?",
        "What are you do this weekend?",
      ], "Plans for this weekend: present continuous. *What do you do this weekend? sounds like a question about a habit."),
      fb("___ going to the movies on Friday?", "How about", "¿[Qué tal si] vamos al cine el viernes?",
        "\"How about\" + -ing makes a suggestion. \"Why don't we go...?\" and \"Let's go...\" do the same job."),
      tr("Te recojo a las siete.", "I'll pick you up at seven{| o'clock}.",
        "An offer made now needs \"will\". The Spanish present («te recojo») doesn't work in English: *I pick you up at seven."),
      tr("Me encantaría, pero voy a visitar a mis abuelos.", "I'd love to, but I'm {visiting|going to visit|seeing} my grandparents.",
        "Decline politely and give an arrangement as the reason: \"I'd love to, but I'm visiting...\"."),
      fb("How many nights ___ staying?", "will you be", "¿Cuántas noches [se va a] quedar?",
        "Hotel staff use the polite future continuous: \"How many nights will you be staying?\"."),
      fb("It ___ rain tomorrow.", ["will probably", "is probably going to"], "[Probablemente va a] llover mañana.",
        "In affirmative sentences \"probably\" goes after \"will\": \"It will probably rain\"."),
      mc("«Probablemente no llueva.» Which is correct?", [
        "It probably won't rain.",
        "It won't probably rain.",
        "It probably will not to rain.",
        "It will not probably rain.",
      ], "\"Will probably\" but \"probably won't\": in the negative, \"probably\" goes before \"won't\"."),
      tr("Es probable que suban los precios.", ["Prices are likely to {go up|rise|increase}.", "It's likely that prices will {go up|rise|increase}.", "Prices will probably {go up|rise|increase}."],
        "«Es probable que» + subjunctive becomes \"be likely to\" + base verb. No subjunctive in English."),
      fb("With all that traffic, they're ___ be late.", "bound to", "Con todo ese tráfico, [seguro que] llegan tarde.",
        "\"Be bound to\" = you are sure something will happen, «seguro que»."),
      mc("Robots ___ do many of our jobs in the future.", ["might", "might to", "might will", "mights"],
        "\"Might\" is a modal: base verb directly after it, no \"to\", no -s and no \"will\"."),
      tr("Dudo que vivamos en Marte.", ["I doubt {that |}we'll live on Mars.", "I don't think we'll live on Mars."],
        "After \"I doubt\", English uses \"will\", not a subjunctive. \"I don't think we'll...\" is just as natural."),
      fb("By 2050, scientists ___ a cure.", ["will have found", "will probably have found", "might have found"], "Para 2050, los científicos [habrán encontrado] una cura.",
        "Complete by a future date: future perfect. Hedged: \"will probably have found\" or \"might have found\"."),
      fb("I ___ call you, but I forgot.", "was going to", "[Iba a] llamarte, pero se me olvidó.",
        "A past plan that didn't happen: \"was going to\" + base verb, exactly like «iba a»."),
      mc("«Iba al trabajo cuando me llamaste.» Which is correct?", [
        "I was going to work when you called.",
        "I was going to go to work when you called.",
        "I used to go to work when you called.",
        "I would go to work when you called.",
      ], "Here «iba» is movement in progress, not a plan: the past continuous of \"go\". \"Was going to go\" would mean a plan."),
      tr("Estaba a punto de salir cuando sonó el teléfono.", "I was about to {leave|go out} when the phone rang.",
        "«Estaba a punto de» = \"was about to\" + base verb: it almost happened, but something interrupted."),
      tr("Se suponía que el paquete llegaba ayer.", "The package was supposed to {arrive|come|get here} yesterday.",
        "«Se suponía que» = \"was supposed to\": an expectation that wasn't met."),
      fb("She said she ___ come to the party.", "would", "Dijo que [vendría] a la fiesta.",
        "Reported future: \"will\" becomes \"would\", like the Spanish conditional «vendría»."),
      tr("Dijo que iba a renunciar.", ["He said {that |}he was going to {quit|resign}.", "She said {that |}she was going to {quit|resign}."],
        "In reported speech, \"am going to\" becomes \"was going to\"."),
      wo("I knew it would be a long night.", "Sabía que iba a ser una noche larga.",
        "\"Would\" shows the future from a past point in a story. «Iba a ser» here is not a changed plan."),
      lc("We were going to go to the beach, but it rained.", [
        "Íbamos a ir a la playa, pero llovió.",
        "Fuimos a la playa aunque llovió.",
        "Íbamos a la playa cuando llovió.",
        "Vamos a ir a la playa si no llueve.",
      ], "\"Were going to go\": a plan that didn't happen because of the rain."),
      mt("Match each Spanish «iba» with its English version.", [
        ["Iba a llamarte (un plan)", "I was going to call you"],
        ["Iba al trabajo cuando me llamaste", "I was going to work when you called"],
        ["De niño iba en bici al colegio", "I used to go to school by bike"],
        ["Estaba a punto de irme", "I was about to leave"],
      ], "One Spanish form, four English ones: a plan, movement in progress, a habit, and something about to happen. Think timeline, not Spanish."),
      mc("He said he would wait until I ___ back.", ["came", "would come", "will come", "come"],
        "The time-clause rule moves back too: in a past context, the past simple after \"until\" (not *would come)."),
      tr("Me prometió que me llamaría cuando llegara.", ["He promised {that |}he would call me when he {arrived|got there|got home}.", "She promised {that |}she would call me when she {arrived|got there|got home}."],
        "«Llamaría» = \"would call\", and «cuando llegara» = \"when he arrived\": past simple, not *would arrive."),
      fb("In June, I ___ her for ten years.", "will have known", "En junio [llevaré] diez años [conociéndola].",
        "\"Know\" is a state verb, so no -ing even in the future: \"will have known\", not *will have been knowing."),
      mc("Which sentence is correct?", [
        "I'll be having lunch at one, so call me later.",
        "I'll be knowing the results tomorrow.",
        "I'll be owning a house by then.",
        "I'll be wanting a coffee at one.",
      ], "\"Have lunch\" is an activity, so the continuous is fine. \"Know\", \"own\" and \"want\" are states: \"I'll know\", \"I'll own\", \"I'll want\"."),
      tr("Cuando era niño, quería un perro.", "When I was {a child|a kid|little|a boy}, I wanted a dog.",
        "«Quería» is a state: past simple \"wanted\", not *was wanting."),
      dc("There's a good chance we'll work fewer hours in the future.",
        "\"There's a good chance\" + \"will\": no subjunctive. \"Fewer\" goes with countable nouns like \"hours\"."),
      dc("I was just about to call you when your message arrived.",
        "\"Was just about to\": something was going to happen immediately but was interrupted."),
      sp("I was going to tell you, but I didn't have time.", "A plan that didn't happen: \"was going to\" + base verb, like «iba a decírtelo».",
        "In fast speech \"going to\" sounds like \"gonna\", but don't write it that way.", "Say it in English: Iba a decírtelo, pero no tuve tiempo."),
      sp("Prices are bound to go up next year.", "\"Be bound to\" = «seguro que»: a confident prediction.",
        "Stress \"bound\" and \"up\".", "Say it in English: Seguro que los precios suben el año que viene."),
      lc("By then, most people will be working from home.", [
        "Para entonces, la mayoría de la gente estará trabajando desde casa.",
        "Para entonces, la mayoría habrá dejado de trabajar desde casa.",
        "Por entonces, la mayoría de la gente trabajaba desde casa.",
        "Hasta entonces, la gente trabajará en la oficina.",
      ], "\"Will be working\": in progress at a future time, «estará trabajando»."),
      tr("Cuando llegue Ana, ya habremos cenado.", ["When Ana arrives, we'll have {already |}{had dinner|eaten}.", "By the time Ana arrives, we'll have {already |}{had dinner|eaten}."],
        "Time clause in the present (\"arrives\") and the future perfect in the main clause, because dinner will be finished by then."),
      tr("Mañana a esta hora estaré manejando a la costa.", "This time tomorrow{,|} I'll be driving to the coast.",
        "«Mañana a esta hora estaré + gerundio» = \"This time tomorrow I'll be + -ing\"."),
      mc("Which sentence is correct?", [
        "I'm meeting Carlos tomorrow, so I'll give him the keys.",
        "I meet Carlos tomorrow, so I give him the keys.",
        "I'm meeting Carlos tomorrow, so I give him the keys when I will see him.",
        "I will meet Carlos tomorrow, so I am giving him the keys when I will see him.",
      ], "An arrangement (\"I'm meeting\") + a decision or promise (\"I'll give\"). No \"will\" after \"when\"."),
      wo("It probably won't be ready until next week.", "Probablemente no esté listo hasta la semana que viene.",
        "\"Probably\" before \"won't\", and \"not ... until\" for «no ... hasta»."),
    ],
  ),
];
