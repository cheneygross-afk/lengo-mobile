// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b2-u04-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B2 unit u04 (future forms in practice): a short recap, then graded practice.

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
  slug: `en-b2-future-practice-unit-drill-${n}`,
  level: "EN-B2",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B2_U04_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Plans, Spanish futures, learner errors and deadlines
  // (Talk About Yourself, Sentence by Sentence, Correct the Learner, Dialogue Lab)
  // ---------------------------------------------------------------------
  lesson(
    1,
    "I'm Thinking Of, I'll Be Able To, When Is It Due?",
    "You will be able to talk about your own plans and hopes, translate «quedamos», «¿te ayudo?», «podré» and the three meanings of «esperar», and discuss deadlines at work.",
    "Recap: your plans, Spanish traps and deadlines",
    [
      "Arrangements: present continuous (\"I'm meeting Ana at 8\", never *I have stayed with Ana). Hopes and ideas: \"I'm hoping to\", \"I'm thinking of\" + -ing, \"I might\". Offers: \"Should I...?\" or \"Do you want me to...?\", never *Do I help you?",
      "«Podré» is \"I'll be able to\" and «tendré que» is \"I'll have to\". «Esperar» is \"wait for\", \"expect\" or \"hope\". At work: \"When is it due?\", \"When do you need it by?\", \"I'm off tomorrow\", \"push the deadline back\".",
    ],
    [
      ["I'm meeting Carlos at eight.", "Quedé con Carlos a las ocho."],
      ["Do you want me to carry that?", "¿Te llevo eso?"],
      ["You'll be able to see the volcano from the hotel.", "Podrás ver el volcán desde el hotel."],
      ["The report is due on Friday.", "El informe es para el viernes."],
    ],
    [
      fb("On Saturday I ___ lunch with my parents.", "am having", "El sábado [como] con mis padres.",
        "A plan for this weekend is an arrangement: \"I'm having lunch\". *On Saturday I have lunch sounds like a weekly routine."),
      mc("Which answer to \"What are you doing this weekend?\" is correct?", [
        "I'm having lunch with my parents on Saturday.",
        "On Saturday I'm have lunch with my parents.",
        "On Saturday I eat with my parents lunch.",
        "I having lunch with my parents on Saturday.",
      ], "Present continuous for an arrangement: \"be\" + -ing. \"Have lunch\" is the natural collocation for «comer» at midday."),
      tr("Estoy pensando en mudarme a Canadá.", "I'm thinking {of|about} moving to Canada.",
        "\"Think of\" / \"think about\" + -ing. *I'm thinking in move copies «pensar en» + infinitive."),
      fb("I'm ___ travel in the summer.", ["hoping to", "planning to"], "[Tengo la esperanza de] viajar en el verano.",
        "\"Hope to\" + base verb for a plan you want but can't be sure of: \"I'm hoping to travel\"."),
      tr("Espero que me den el trabajo.", ["I hope {they give|they'll give} me the job.", "I hope I get the job."],
        "\"Hope\" + a full sentence takes the present (or \"will\"): \"I hope they give me the job\". No subjunctive, and never *I hope them to give me."),
      tr("En cinco años, estaré viviendo en el extranjero.", ["In five years{,|} I'll be living abroad.", "Five years from now{,|} I'll be living abroad."],
        "What you'll be in the middle of at a future time: future continuous \"I'll be living\"."),
      tr("Todavía no sé. Puede que vaya de excursión.", ["I'm not sure yet. I might go hiking.", "I don't know yet. I might go hiking."],
        "If you haven't decided, avoid a bare \"will\": use \"might\" + base verb (or \"I'll probably...\")."),
      tr("Quedé de verme con Ana a las 8.", "I'm meeting Ana at {8|eight}.",
        "«Quedar de verse» for an arrangement already made is the present continuous of \"meet\". *I have stayed with Ana means you remained somewhere with her."),
      mc("«¿Te ayudo con las bolsas?» Which is correct?", [
        "Do you want me to help you with the bags?",
        "Do I help you with the bags?",
        "I help you with the bags?",
        "Do you want that I help you with the bags?",
      ], "Offers are \"Do you want me to...?\", \"Should I...?\" or \"Let me...\". *Do I help you? isn't English, and \"want\" takes object + \"to\", not *want that I."),
      fb("___ the window?", ["Should I open", "Shall I open"], "¿[Abro] la ventana?",
        "An offer as a question: \"Should I...?\" (American) or \"Shall I...?\" (British). The Spanish present «¿abro?» doesn't translate as *Do I open?"),
      fb("Send it ___ Friday, please.", "by", "Mándalo [para el] viernes, por favor.",
        "A deadline (that day or earlier) is \"by\". \"Until\" would mean a continuous period."),
      tr("No lo tendré hasta el viernes.", "I won't have it until Friday.",
        "«No ... hasta» = \"not ... until\": you'll get it on Friday, not before."),
      mc("«Mañana a esta hora estoy en el avión.» Which is correct?", [
        "This time tomorrow I'll be on the plane.",
        "This time tomorrow I am in the plane.",
        "This time tomorrow I'll be on the plane now.",
        "This time tomorrow I'm being on the plane.",
      ], "A situation at a future moment needs \"will\": \"I'll be on the plane\" (or \"I'll be flying\"). The Spanish present doesn't work here."),
      fb("I ___ show you the old town on Saturday.", ["will be able to", "can"], "El sábado [podré] mostrarte el centro histórico.",
        "«Podré» = \"I'll be able to\" (or \"I can\" for a simple arrangement). *I will can is impossible."),
      tr("Tendrás que traer un abrigo.", "You'll have to bring a {coat|jacket}.",
        "\"Must\" has no future: «tendrás que» is \"you'll have to\"."),
      fb("I'll ___ you at the door.", "wait for", "Te [espero] en la puerta.",
        "You \"wait for\" someone. *I'll wait you is missing the preposition."),
      fb("We're ___ about twenty guests.", "expecting", "[Esperamos] unos veinte invitados.",
        "\"Expect\" = think someone will come or something will happen. «Esperar invitados» is \"expect guests\"."),
      mc("«Espero que te guste Lima.» Which is correct?", [
        "I hope you like Lima.",
        "I hope you to like Lima.",
        "I wait you like Lima.",
        "I hope that you will to like Lima.",
      ], "\"Hope\" (wish) + a clause: \"I hope you like it\". Never *hope + object + to, and never \"to\" after \"will\"."),
      mt("Match each English form with its meaning.", [
        ["wait for", "esperar (dejar pasar el tiempo)"],
        ["expect", "esperar (creer que va a pasar)"],
        ["hope", "esperar (desear)"],
        ["will have to", "tendrá que"],
        ["will be able to", "podrá"],
      ], "«Esperar» is three English verbs, and the modals \"must\" and \"can\" borrow \"have to\" and \"be able to\" for the future."),
      tr("Para cuando llegues, habré limpiado todo.", "By the time you {arrive|get here}, I'll have {cleaned|finished cleaning} everything.",
        "\"By the time\" + present (\"arrive\"), and the future perfect in the main clause: everything will be done before you arrive."),
      tr("¿Para cuándo es?", ["When is it due?", "When do you need it by?"],
        "«¿Para cuándo es?» = \"When is it due?\" or \"When do you need it by?\". Not *For when is it?"),
      fb("When do you need it ___?", "by", "¿[Para] cuándo lo necesitas?",
        "English puts the preposition at the end of the question, and the deadline preposition is \"by\": not *For when do you need it?"),
      tr("Mañana tengo el día libre.", ["I'm off tomorrow.", "I {have|'ve got} the day off tomorrow.", "I'm taking the day off tomorrow."],
        "\"I'm off tomorrow\" is the natural way to say you're not working."),
      fb("I'll be out of the office ___ Monday.", "until", "Estaré fuera de la oficina [hasta el] lunes.",
        "The whole period up to Monday: \"until\". \"By Monday\" would be a deadline."),
      tr("¿Podríamos aplazar la fecha límite hasta el lunes?", ["{Could|Can} we push the deadline back to Monday?", "{Could|Can} we push back the deadline to Monday?", "{Could|Can} we postpone the deadline {to|until} Monday?"],
        "To ask for more time: \"push back\" or \"postpone\". \"Delay\" usually describes something that is late."),
      lc("They've moved the meeting up to Tuesday.", [
        "Adelantaron la reunión al martes.",
        "Aplazaron la reunión al martes.",
        "Cancelaron la reunión del martes.",
        "Subieron la reunión al piso de arriba el martes.",
      ], "\"Move up\" (or \"bring forward\") = «adelantar». The opposite is \"push back\"."),
      lc("I'm on it.", [
        "Ya me estoy encargando.",
        "Estoy encima de eso.",
        "Estoy de acuerdo.",
        "Ya lo terminé.",
      ], "\"I'm on it\" = I'm working on it right now. A useful reply when your boss asks about a task."),
      dc("I'll be working on the budget all day tomorrow.",
        "Future continuous to explain why you're busy: \"I'll be working\"."),
      dc("If you give me until Friday, I'll have it finished.",
        "First conditional to negotiate: \"if\" + present, then \"will\". \"Have it finished\" = it will be done."),
      sp("I was just about to call you!", "\"Was just about to\" = «justo iba a»: something nearly happened.",
        "Stress \"just\" and \"call\".", "Say it in English: ¡Justo iba a llamarte!"),
      sp("I'm thinking of taking a cooking class.", "\"Think of\" + -ing for an idea you're considering, «estoy pensando en tomar».",
        "Link \"thinking of\" as /ˈθɪŋkɪŋəv/.", "Say it in English: Estoy pensando en tomar una clase de cocina."),
      wo("I'm not sure yet, but I'll probably stay home.", "Todavía no estoy seguro, pero probablemente me quede en casa.",
        "\"Probably\" goes after \"will\" in an affirmative sentence: \"I'll probably stay\"."),
      wo("Will it be ready by Thursday?", "¿Va a estar listo para el jueves?",
        "A simple way to ask about a deadline: \"Will it be ready by...?\"."),
      mc("Which sentence is correct?", [
        "When you arrive, I'll be waiting for you at the airport.",
        "When you will arrive, I wait you at the airport.",
        "When you arrive, I wait for you at the airport.",
        "When you will arrive, I'll be waiting you at the airport.",
      ], "Time clause in the present (\"arrive\"), future in the main clause, and \"wait for\" + person. The other options keep Spanish habits."),
      tr("En cuanto me manden las cifras, tendré el informe listo para el miércoles.", "As soon as they send me the {figures|numbers}, I'll have the report ready by Wednesday.",
        "\"As soon as\" + present (\"send\"), then \"will\". «Para el miércoles» is a deadline: \"by Wednesday\"."),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Time-clause patterns, travel and career plans, and the whole unit
  // (Pattern Practice, Quick-fire Round, Travel Plans, Career Plans, Spiral Review)
  // ---------------------------------------------------------------------
  lesson(
    2,
    "As Soon As, In Case, Unless and Career Plans",
    "You will be able to produce time-clause patterns automatically, plan a trip with in case and timetables, talk about career goals with likely to, unless and as long as, and switch between past and future without Spanish interference.",
    "Recap: patterns for trips and careers",
    [
      "Time word + present (or present perfect), main clause with a future, an imperative or a modal: \"As soon as we land, we'll call you\", \"Once I've finished, you can have it\". \"In case\" («por si»), \"if\", \"unless\" («a menos que») and \"as long as\" («siempre que») also take the present, never \"will\".",
      "«Un viaje» is \"a trip\", «reservar» is \"book\", «la carrera» is \"my degree\". \"Be likely to\" replaces «es probable que»; in May \"I'll have worked here for ten years\". And from the past: \"I was going to...\", \"She said she would call when she got home\".",
    ],
    [
      ["Once we've checked in, we'll go to the beach.", "Una vez que hayamos hecho el check-in, iremos a la playa."],
      ["Take some cash in case the card doesn't work.", "Llévate efectivo por si no funciona la tarjeta."],
      ["I won't move unless they offer me more money.", "No me voy a mudar a menos que me ofrezcan más dinero."],
      ["I'm likely to finish my degree next year.", "Es probable que termine la carrera el año que viene."],
    ],
    [
      fb("As soon as I ___ home, I'll call you.", "get", "En cuanto [llegue] a casa, te llamo.",
        "Pattern 1: \"As soon as I\" + present, then \"I'll\". The Spanish subjunctive «llegue» is the English present \"get\"."),
      tr("En cuanto sepa algo, te aviso.", ["As soon as I {hear|know} anything, I'll let you know.", "I'll let you know as soon as I {hear|know} anything."],
        "Same frame: present after \"as soon as\", \"will\" in the main clause. The clauses can swap places."),
      fb("Once I ___ this email, I'll help you.", ["have sent", "have finished", "have written", "send", "finish"], "Una vez que [haya enviado] este correo, te ayudo.",
        "Pattern 2: \"Once I've\" + participle stresses that the first action will be complete. The present simple also works; \"will have\" never does."),
      mc("Which sentence is correct?", [
        "You can leave once you've finished.",
        "You can leave once you will have finished.",
        "You can leave once you will finish.",
        "You can leave once you finished.",
      ], "The main clause can be a modal (\"can\"); the time clause stays in the present perfect or present."),
      tr("No me voy hasta que no me lo devuelvas.", ["I'm not leaving until you give it back{| to me}.", "I won't leave until you give it back{| to me}."],
        "Spanish adds an extra «no» after «hasta que»; English uses only one negative: \"I'm not leaving until you give it back\"."),
      fb("By the time you get up, I ___.", ["will have left", "will already have left", "will have gone"], "Para cuando te levantes, [ya me habré ido].",
        "Pattern 3: \"by the time\" + present, then the future perfect in the main clause."),
      mc("At 8 p.m. tomorrow I ___ dinner with clients, so I can't talk.", ["will be having", "will have had", "have", "am going to have had"],
        "\"At\" + a time = in progress at that moment: future continuous."),
      mc("By 8 p.m. I ___ dinner, so we can meet after that.", ["will have had", "will be having", "have had", "am having had"],
        "\"By\" + a time = finished before then: future perfect \"will have had\"."),
      fb("Our flight ___ at 6:15.", ["leaves", "departs"], "Nuestro vuelo [sale] a las 6:15.",
        "Flights and trains are timetables: present simple even for the future."),
      tr("¿A qué hora aterriza el vuelo?", ["What time does the flight land?", "When does the flight land?"],
        "Timetable question with \"does\" + subject + base verb. *What time lands the flight? keeps Spanish word order."),
      mc("«Nos vamos de viaje a Lisboa.» Which is correct?", [
        "We're going on a trip to Lisbon.",
        "We're going on a travel to Lisbon.",
        "We're doing a travel to Lisbon.",
        "We're going on a travels to Lisbon.",
      ], "«Un viaje» is \"a trip\". \"Travel\" is mainly a verb or an uncountable noun, so *a travel is wrong."),
      tr("Ya reservamos un hotel cerca del río.", ["We've already booked a hotel near the river.", "We already booked a hotel near the river."],
        "«Reservar» is usually \"book\". American English also accepts the past simple with \"already\"."),
      fb("Take an umbrella ___ it rains.", "in case", "Llévate un paraguas [por si] llueve.",
        "\"In case\" = «por si», a precaution, + present. \"If it rains\" would mean take it only when it's raining."),
      tr("Llévate un suéter por si hace frío.", "{Take|Bring} a {sweater|jumper} in case it {gets|is} cold.",
        "\"In case\" + present simple, never *in case it will be cold."),
      tr("La semana que viene a esta hora estaremos caminando por Lisboa.", "This time next week{,|} we'll be {walking around|walking through|walking in} Lisbon.",
        "Picture yourself on the trip: future continuous \"we'll be walking\"."),
      wo("As soon as we land, we'll pick up the car.", "En cuanto aterricemos, recogeremos el carro.",
        "Time clause in the present, comma, main clause with \"will\"."),
      fb("In May, I ___ here for ten years.", ["will have worked", "will have been working"], "En mayo [hará] diez años [que trabajo] aquí.",
        "Duration up to a future point: \"will have worked\" (or \"will have been working\") + \"for\". English has no «hará» structure."),
      tr("Estoy estudiando la carrera de Derecho.", ["I'm studying law.", "I'm doing a law degree."],
        "«La carrera» (university studies) is \"a degree\"; \"career\" is your professional life. *I'm doing the career of law is wrong."),
      mc("«Es probable que me asciendan este año.» Which is correct?", [
        "I'm likely to get a promotion this year.",
        "I'm probable to get a promotion this year.",
        "I'm likely get a promotion this year.",
        "I'm probably to get a promotion this year.",
      ], "\"Be likely to\" + base verb is the natural «es probable que». \"Probable\" can't take a person as subject, and \"probably\" is an adverb."),
      tr("Es poco probable que contraten a alguien antes de enero.", ["They're unlikely to hire anyone before January.", "It's unlikely that they'll hire anyone before January.", "They probably won't hire anyone before January."],
        "«Es poco probable que» = \"be unlikely to\". Note \"probably won't\", with \"probably\" before \"won't\"."),
      fb("My goal is ___ my own business.", ["to start", "to open", "to run", "to have"], "Mi objetivo es [abrir] mi propio negocio.",
        "\"My goal is to\" + base verb. *My objective is open drops the \"to\"."),
      fb("I won't accept the job ___ they pay me more.", "unless", "No voy a aceptar el trabajo [a menos que] me paguen más.",
        "\"Unless\" = «a menos que» = \"if ... not\", + present: \"unless they pay\", not *unless they will pay."),
      tr("Me quedaré siempre que siga aprendiendo.", "I'll stay as long as I {keep learning|continue learning|continue to learn|am still learning}.",
        "«Siempre que» (condition) = \"as long as\" + present. Spanish uses the subjunctive; English doesn't."),
      mc("If I ___ the job, I'll move to Toronto.", ["get", "will get", "got", "would get"],
        "First conditional: \"if\" + present, \"will\" in the main clause. *If I will get the job is the typical error."),
      tr("Si me ofrecieran un trabajo en Tokio, lo aceptaría.", ["If I {were|was} offered a job in Tokyo, I would {take|accept} it.", "If they offered me a job in Tokyo, I would {take|accept} it."],
        "An unlikely or imaginary situation: second conditional (\"if\" + past, \"would\")."),
      mt("Match each English word with its Spanish meaning.", [
        ["a trip", "un viaje"],
        ["book", "reservar"],
        ["in case", "por si"],
        ["unless", "a menos que"],
        ["as long as", "siempre que"],
        ["a degree", "una carrera universitaria"],
      ], "Vocabulary traps from trips and careers: *a travel, *reserve a hotel (in everyday speech) and *the career of law are typical Spanish-speaker slips."),
      dc("We're staying in a small hotel near the old town.",
        "A booked part of a trip is an arrangement: present continuous \"we're staying\"."),
      dc("They're unlikely to make a decision before the end of the month.",
        "\"Be unlikely to\" + base verb. Listen for \"unlikely\" /ʌnˈlaɪkli/ after the contraction \"they're\"."),
      lc("He said he would call when he arrived.", [
        "Dijo que llamaría cuando llegara.",
        "Dijo que llamó cuando llegó.",
        "Dice que llamará cuando llegue.",
        "Dijo que había llamado al llegar.",
      ], "Reported future: \"would call\" = «llamaría»; the time clause moves to the past: \"when he arrived\" = «cuando llegara»."),
      sp("Once I've finished my degree, I'm going to look for a job abroad.", "Time clause in the present perfect, main clause with \"going to\" for an intention.",
        "Contract: \"Once I've\" /wʌns aɪv/.", "Say it in English: Una vez que haya terminado la carrera, voy a buscar trabajo en el extranjero."),
      sp("Take a jacket in case it gets cold tonight.", "\"In case\" + present: a precaution, «por si hace frío».",
        "Link \"in case it\" as /ɪnˈkeɪsɪt/.", "Say it in English: Llévate una chamarra por si hace frío esta noche."),
      tr("Antes trabajaba en un banco.", "I used to work {in|at|for} a bank.",
        "A past situation that has changed: \"used to\". Not *I was working in a bank, which sounds temporary."),
      tr("Iba a ir al gimnasio, pero estaba lloviendo.", "I was going to go to the gym, but it was raining.",
        "A plan that didn't happen: \"was going to go\". The reason is background: \"it was raining\"."),
      wo("We'll be arriving late, so please leave the key at reception.", "Vamos a llegar tarde, así que por favor dejen la llave en recepción.",
        "\"We'll be arriving\" sounds natural and polite in a message to a hotel."),
      mc("Which sentence is correct?", [
        "She said she would call me when she got home.",
        "She said she will call me when she will get home.",
        "She said she would call me when she would get home.",
        "She said she called me when she gets home.",
      ], "Reported future \"would call\", and in a past context the time clause takes the past simple: \"when she got home\"."),
      fb("When I ___ to Lima next month, I'll have been studying English for two years.", ["move", "go", "get"], "Cuando [me mude] a Lima el mes que viene, llevaré dos años estudiando inglés.",
        "The whole unit in one sentence: present in the time clause (\"when I move\"), future perfect continuous in the main clause for duration up to then."),
    ],
  ),
];
