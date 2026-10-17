// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b1-u02-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B1 unit u02 (present perfect vs past simple, gone/been, experience): a short recap, then graded practice.

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
  slug: `en-b1-perfect-vs-past-unit-drill-${n}`,
  level: "EN-B1",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B1_U02_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Present perfect vs past simple, gone vs been, the news
  // ---------------------------------------------------------------------
  lesson(
    1,
    "Have You Ever...? When Did You...?",
    "You will be able to choose between \"I have done\" and \"I did\" by looking at the time, switch tenses naturally in a conversation, and use gone, been and the news pattern.",
    "Recap: finished time or not?",
    [
      "If you say or ask WHEN (yesterday, last week, in 2019, two days ago, at seven, When...?), use the past simple. If the time is not given or not finished (ever, never, yet, already, today, this week), use the present perfect: \"Have you ever been to Peru?\" \"Yes, I went last year.\"",
      "Spain's «he desayunado a las siete» is \"I had breakfast at seven\", and Latin America's «nunca fui a Europa» is \"I've never been to Europe\": translate the time, not the tense. \"She's gone to the bank\" means she is there now; \"She's been to Rome\" means she went and came back.",
    ],
    [
      ["Have you ever eaten tamales? Yes, I tried them in Oaxaca.", "¿Alguna vez comiste tamales? Sí, los probé en Oaxaca."],
      ["I called the bank at nine.", "He llamado al banco a las nueve."],
      ["Martin isn't here. He's gone to the gym.", "Martin no está. Se ha ido al gimnasio."],
      ["A storm has hit the coast. It arrived at midnight.", "Una tormenta ha azotado la costa. Llegó a medianoche."],
    ],
    [
      fb("I ___ to Peru three times.", "have been", "[He estado] en Perú tres veces.",
        "Life experience with no time given = present perfect. \"Been to\" a place means you went and came back. A number of times (\"three times\") is typical of the present perfect."),
      fb("We ___ a horror movie last night, and I couldn't sleep.", "watched", "Anoche [vimos] una película de terror y no pude dormir.",
        "\"Last night\" is finished time, so the past simple: \"watched\" (or \"saw\"). *We have watched... last night is always wrong."),
      mc("___ the game yesterday?", ["Did you watch", "Have you watched", "Have you been watching", "Did you watched"],
        "\"Yesterday\" forces the past simple, also in questions: \"Did you watch...?\". After \"did\", the base form (\"watch\"), never *did you watched."),
      fb("Have you ever ___ a horse?", "ridden", "¿Alguna vez [montaste] a caballo?",
        "Latin American Spanish uses the preterite («¿alguna vez montaste?»), but with \"ever\" English uses the present perfect: \"Have you ever ridden...?\". \"Ride, rode, ridden\": the participle, not the past simple."),
      tr("Nunca fui a Canadá.", ["I've never been to Canada.", "I never went to Canada."],
        "Life experience with no time: \"I've never been to Canada\". «Fui» does not force the past simple, because the time is your whole life up to now. In casual American English, \"I never went to Canada\" is also heard."),
      tr("¿Ya pagaste la renta?", ["Have you paid the rent yet?", "Have you already paid the rent?", "Did you pay the rent yet?"],
        "«¿Ya...?» asks about up to now, so the present perfect with \"yet\" at the end is the safe choice. Americans also say \"Did you pay the rent yet?\" in conversation."),
      tr("Hoy he hablado con el médico a las diez.", ["I {spoke|talked} {to|with} the doctor at ten{ today|}.", "Today I {spoke|talked} {to|with} the doctor at ten."],
        "In Spain, «hoy he hablado» is normal even with an exact time. English cares about the exact time: \"at ten\" is a finished moment, so the past simple: \"I spoke\"."),
      mc("Which sentence is correct?", [
        "She called me an hour ago.",
        "She has called me an hour ago.",
        "She has been calling me an hour ago.",
        "She calls me an hour ago.",
      ], "\"Ago\" always takes the past simple. *She has called me an hour ago is a classic mistake for speakers who say «me ha llamado hace una hora»."),
      fb("I ___ my wallet. Can you lend me some money?", ["have lost", "lost"], "[He perdido] la cartera. ¿Me prestas dinero?",
        "No time is given and the result matters now (no wallet), so the present perfect: \"I've lost\". In American English, \"I lost my wallet\" is also common in conversation."),
      tr("—¿Alguna vez has estado en Chile? —Sí, fui el año pasado.", "Have you ever been to Chile? Yes, {I have. |}I went last year.",
        "Open with the present perfect (experience, no time), then switch to the past simple as soon as a time appears: \"I went last year\". *I have been there last year is wrong."),
      wo("Where did you stay in Cartagena?", "¿Dónde te quedaste en Cartagena?",
        "Once the conversation is about one particular trip, questions about details (where, how, who with) take the past simple: \"Where did you stay?\"."),
      mc("\"Have you ever eaten ceviche?\" \"Yes, I have.\" Choose the best next question.", [
        "When did you try it?",
        "When have you tried it?",
        "Have you liked it?",
        "When you tried it?",
      ], "\"When\" always takes the past simple: \"When did you try it?\". After the opening question, the conversation zooms in on one finished moment, so *Have you liked it? should be \"Did you like it?\"."),
      tr("¿A qué hora ha terminado la reunión?", "What time did the meeting {end|finish}?",
        "\"What time...?\" asks for a point in finished time, so English uses the past simple even though Spain says «ha terminado». *What time has the meeting finished? is wrong."),
      fb("How long ago ___ your phone?", ["did you buy", "did you get"], "¿Hace cuánto [compraste] el celular?",
        "\"How long ago...?\" asks when something happened, so the past simple: \"did you buy\". Compare \"How long have you had your phone?\" (the period up to now)."),
      fb("(It's 11 a.m.) I ___ four cups of coffee this morning!", ["have had", "have drunk"], "(Son las 11:00) ¡Esta mañana [me he tomado] cuatro tazas de café!",
        "At 11 a.m. the morning isn't over, so it is unfinished time: present perfect, \"I've had\"."),
      fb("(It's 6 p.m.) I ___ a lot of phone calls this morning.", "made", "(Son las 18:00) Esta mañana [hice] muchas llamadas.",
        "At 6 p.m. the morning is finished, so the past simple: \"made\". Spain uses «he hecho» in both cases; English has to choose."),
      tr("¿Cuánto tiempo viviste en Buenos Aires?", "How long did you live in Buenos Aires?",
        "You don't live there anymore, so it is a finished period: \"How long did you live...?\". \"How long have you lived...?\" would mean you still live there."),
      tr("Vivo en este barrio desde hace ocho años.", "I've {lived|been living} in this {neighborhood|area} for eight years.",
        "A situation that is still true + \"for\": the present perfect. *I live in this neighborhood for eight years copies the Spanish present."),
      mc("Where's Sofia? She ___ to the supermarket. She'll be back soon.", ["has gone", "has been", "is been", "has went"],
        "She is at the supermarket now and hasn't come back, so \"has gone\". \"Has been to\" would mean she went and returned. *Has went uses the past simple instead of the participle."),
      fb("My parents ___ to Europe twice, and they want to go again.", "have been", "Mis papás [han estado] dos veces en Europa y quieren volver a ir.",
        "They went and came back (experience), so \"have been to\". «Han estado en» for a visit is almost always \"have been to\"."),
      tr("Mi hermano se ha ido a Monterrey; vuelve el lunes.", "My brother has gone to Monterrey; he{'ll be back| comes back|'s coming back} {on Monday|Monday}.",
        "He is in Monterrey now, so \"has gone\". If he had already returned, you would say \"has been to Monterrey\"."),
      tr("Mi abuelo está en el hospital desde el jueves.", "My {grandfather|grandpa} has been in the hospital since Thursday.",
        "\"Been in\" + \"since\" = he is still there. Spanish uses the present («está... desde»), English the present perfect: *My grandfather is in the hospital since Thursday is wrong."),
      lc("Tom's gone home.", [
        "Tom se fue a casa (ya no está aquí).",
        "Tom estuvo en casa y ya volvió.",
        "Tom va a ir a casa.",
        "Tom está yendo a casa ahora mismo.",
      ], "\"Tom's gone home\" = \"Tom has gone home\": he left and is not here now. Note \"go home\" without \"to\"."),
      fb("Police ___ two men after the robbery in the city center.", "have arrested", "La policía [ha detenido] a dos hombres tras el robo en el centro.",
        "The news opens with the present perfect. \"Police\" is always plural, so \"have arrested\", never *the police has."),
      tr("Un incendio ha destruido una fábrica en Lima. Empezó a las dos de la mañana.", "A fire has destroyed a factory in Lima. It started at two {in the morning.|a.m.|o'clock in the morning.}",
        "The news pattern: present perfect for the headline fact (\"has destroyed\"), past simple for the details with a time (\"It started at two\")."),
      mc("Prices ___ by ten percent this year.", ["have risen", "have rised", "have rose", "has risen"],
        "\"This year\" is not finished, so the present perfect. \"Rise, rose, risen\": the participle is \"risen\". \"Prices\" is plural, so \"have\", not \"has\"."),
      wo("Scientists have discovered a new species of frog.", "Unos científicos han descubierto una nueva especie de rana.",
        "A typical news opening: subject + \"have\" + participle. No article before \"scientists\" when you mean «unos científicos»."),
      dc("The president has just arrived in Lima. He landed an hour ago.",
        "\"Has just arrived\" gives fresh news (present perfect). The detail with a time (\"an hour ago\") switches to the past simple: \"landed\"."),
      mt("Match each expression with its Spanish meaning.", [
        ["Have you ever...?", "¿Alguna vez...?"],
        ["so far", "hasta ahora"],
        ["How long ago...?", "¿Hace cuánto...?"],
        ["He's gone to Lima.", "Se fue a Lima (está allí)."],
        ["He's been to Lima.", "Ha estado en Lima (ya volvió)."],
      ], "\"Have you ever\" and \"so far\" go with the present perfect; \"How long ago\" asks for a finished moment, so it takes the past simple. \"Gone\" = still there; \"been\" = went and came back."),
      sp("Have you ever been to Mexico City? When did you go?", "Open with the present perfect (experience), then switch to the past simple for the details (\"When did you go?\").",
        "Rising intonation on the first question; falling on the \"When...?\" question.", "Say it in English: ¿Alguna vez has estado en Ciudad de México? ¿Cuándo fuiste?"),
      tr("Ayer he visto a tu hermana en el súper.", ["I saw your sister at the {supermarket|grocery store} yesterday.", "Yesterday I saw your sister at the {supermarket|grocery store}."],
        "Trap from Spain: «ayer he visto». \"Yesterday\" is always finished time, so \"I saw\". *I have seen your sister yesterday is always wrong in English."),
      tr("¿Ya viste la nueva serie? La vi el fin de semana pasado y me encantó.", ["{Have you seen|Did you see} the new series yet? I {saw|watched} it last weekend{,|} and I loved it."],
        "First sentence: «¿ya...?» = up to now, so \"Have you seen... yet?\" (Americans also say \"Did you see... yet?\"). Second: \"last weekend\" is finished time, so \"I saw it\" and \"I loved it\"."),
      mc("Which sentence is correct?", [
        "My cousin went to London in 2019.",
        "My cousin has gone to London in 2019.",
        "My cousin has been to London in 2019.",
        "My cousin has went to London in 2019.",
      ], "With a finished time (\"in 2019\"), both \"gone\" and \"been\" go back to the past simple \"went\". The present perfect never takes a past date."),
      dc("Where have you been? I've been calling you all afternoon!",
        "\"Where have you been?\" asks about the period up to now; \"I've been calling you all afternoon\" is the present perfect continuous from the last unit."),
      lc("Have you seen my glasses? I've looked everywhere.", [
        "¿Has visto mis lentes? He buscado por todas partes.",
        "¿Viste mis lentes ayer? Los busqué por todas partes.",
        "¿Vas a ver mis lentes? Voy a buscar por todas partes.",
        "¿Ves mis lentes? Siempre busco por todas partes.",
      ], "No time is given and the result matters now (I still can't find them): present perfect in both sentences."),
      sp("I've worked in three countries so far.", "\"So far\" («hasta ahora») goes with the present perfect: the count may still change.",
        "Stress \"three\" and \"countries\"; \"I've\" is short, just /aɪv/.", "Say it in English: Hasta ahora he trabajado en tres países."),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Errors, job experience, life events, bucket list + whole unit
  // ---------------------------------------------------------------------
  lesson(
    2,
    "Your Experience, Life Events & Bucket List",
    "You will be able to fix the classic «ayer he...» errors, talk about your work experience in an interview, describe life events and say what's on your bucket list.",
    "Recap: current job, previous jobs, life so far",
    [
      "A job you still have: present perfect + for/since (\"I've worked in sales for six years\"). A job you left: past simple, even with \"for\" (\"Before that, I worked in a hotel for two years\"). Achievements so far: present perfect; achievements with a date: past simple.",
      "Life events: \"graduate from\", \"get promoted\", \"retire\", \"get married to\" (never *married with), \"split up\", \"move abroad\". For your bucket list: \"I've always wanted to...\", \"I've never...\" (no double negative) and \"I haven't... yet\" / \"I still haven't...\".",
    ],
    [
      ["I've been a nurse since 2017.", "Soy enfermera desde 2017."],
      ["Before that, I worked at a school for three years.", "Antes de eso, trabajé tres años en una escuela."],
      ["My parents got divorced when I was twelve.", "Mis papás se divorciaron cuando yo tenía doce años."],
      ["I've always wanted to see the pyramids.", "Siempre he querido ver las pirámides."],
    ],
    [
      mc("Which sentence is correct?", [
        "I finished my degree last year.",
        "I have finished my degree last year.",
        "I've finished my degree last year ago.",
        "I have finish my degree last year.",
      ], "\"Last year\" is finished time, so the past simple. If you can answer \"when?\" from the sentence, use the past simple."),
      fb("What time ___?", "did the package arrive", "¿A qué hora [ha llegado el paquete]?",
        "\"What time...?\" asks for a finished moment, so the past simple with \"did\" + base form. Never *What time has the package arrived?"),
      tr("Mi hermana está de vacaciones desde el viernes.", "My sister has been on {vacation|holiday} since Friday.",
        "Error 4 of the unit: the Spanish present + «desde» becomes the present perfect: \"has been\". *My sister is on vacation since Friday is wrong."),
      tr("Te mandé el correo hace una hora.", "I sent {you the email|the email to you} an hour ago.",
        "\"Ago\" never goes with the present perfect: *I've sent you the email an hour ago is wrong."),
      tr("Trabajo en marketing desde hace seis años.", "I've {worked|been working} in marketing for six years.",
        "Your current job + how long = present perfect + \"for\". *I work in marketing for six years is the most common interview mistake. You work \"in\" a sector."),
      fb("My uncle works ___ a taxi driver in Bogota.", "as", "Mi tío trabaja [de] taxista en Bogotá.",
        "«Trabajar de» + job = \"work as\" + a/an + job. *He works of taxi driver is a word-for-word translation."),
      fb("Before that, I ___ in a call center for two years.", "worked", "Antes de eso, [trabajé] dos años en un centro de llamadas.",
        "A previous job is finished, so the past simple, even with \"for\": \"I worked there for two years\" (I don't anymore)."),
      tr("¿Alguna vez has trabajado en equipo con personas de otros países?", "Have you ever worked {in|on} a team with people from other countries?",
        "A typical interview question about experience: \"Have you ever...?\" + participle."),
      mc("How do you say «Actualmente vivo en Quito»?", [
        "I currently live in Quito.",
        "I actually live in Quito.",
        "Actually I am living in Quito since now.",
        "I live actually in Quito.",
      ], "«Actualmente» is \"currently\" or \"at the moment\". \"Actually\" is a false friend: it means «en realidad»."),
      tr("He dirigido varios proyectos internacionales.", "I've {led|managed|run} {several|a few|various} international projects.",
        "An achievement in your career so far, with no date: present perfect. \"Lead, led, led\"."),
      fb("I'm in ___ of the customer service team.", "charge", "[Estoy a cargo] del equipo de atención al cliente.",
        "\"Be in charge of\" = «estar a cargo de». Another option: \"I'm responsible for the customer service team\"."),
      mt("Match each life event with its Spanish meaning.", [
        ["graduate", "graduarse"],
        ["get promoted", "ascender (en el trabajo)"],
        ["retire", "jubilarse"],
        ["split up", "separarse"],
        ["give birth", "dar a luz"],
        ["move abroad", "irse a vivir al extranjero"],
      ], "Many life events are phrasal verbs or use \"get\". Note \"move abroad\" with no \"to\"."),
      fb("She graduated ___ Harvard in 2018.", "from", "Se graduó [en] Harvard en 2018.",
        "You \"graduate from\" a school or university. *Graduated in Harvard translates «en» word for word."),
      mc("How do you say «Asistí a una conferencia en Miami»?", [
        "I attended a conference in Miami.",
        "I assisted a conference in Miami.",
        "I assisted to a conference in Miami.",
        "I attended to a conference in Miami.",
      ], "«Asistir a» = \"attend\" (no preposition). \"Assist\" means «ayudar». \"Attend to\" means «ocuparse de»."),
      tr("Mi hermano se casó con una peruana el año pasado.", "My brother {got married to|married} a Peruvian{ woman|} last year.",
        "\"Get married to\" or \"marry\" someone, never *married with. \"Last year\" = past simple."),
      tr("Mi papá se jubiló en 2020 y desde entonces ha viajado mucho.", [
        "My {dad|father} retired in 2020{,|} and he's {traveled|been traveling} a lot since then.",
        "My {dad|father} retired in 2020{,|} and since then he's {traveled|been traveling} a lot.",
      ], "\"In 2020\" = past simple (\"retired\"); \"since then\" = present perfect (\"has traveled\"). One sentence, two times, two tenses."),
      fb("I ___ four times since I left home.", "have moved", "[Me he mudado] cuatro veces desde que me fui de casa.",
        "Counting life events up to now: present perfect. \"Since I left home\" has the past simple for the starting point."),
      tr("Siempre he querido aprender a bucear.", "I've always wanted to learn {to dive|to scuba dive|how to dive|how to scuba dive|scuba diving}.",
        "\"I've always wanted to...\" is the key bucket-list phrase: the wish started in the past and is still true."),
      mc("Which sentence is correct?", [
        "I've never been to a music festival.",
        "I haven't never been to a music festival.",
        "I've not never been to a music festival.",
        "I've never went to a music festival.",
      ], "\"Never\" is already negative, so no \"not\": *I haven't never is a double negative copied from «no he ido nunca». And the participle is \"been\" (or \"gone\"), never *went."),
      fb("I haven't booked the flights ___.", "yet", "[Todavía] no he reservado los vuelos.",
        "\"Yet\" goes at the END of negative sentences and questions. It suggests you plan to do it."),
      fb("I ___ haven't learned to ride a bike!", "still", "¡[Todavía] no he aprendido a andar en bici!",
        "\"Still\" goes BEFORE \"haven't\" and shows surprise or impatience. Both \"still\" and \"yet\" are «todavía»: the position tells you which one."),
      wo("What was the trip like?", "¿Qué tal fue el viaje?",
        "\"What was it like?\" = «¿qué tal fue?». *How was it like? mixes two questions; say \"How was it?\" or \"What was it like?\"."),
      mc("\"Have you ever slept in a hammock?\" Choose the correct short answer.", ["Yes, I have.", "Yes, I did.", "Yes, I've.", "Yes, I slept."],
        "A present perfect question takes \"have\" in the short answer: \"Yes, I have.\" Positive short answers are never contracted."),
      tr("¿Con quién fuiste y qué tal fue?", "Who did you go with{,|} and {what was it like|how was it}?",
        "Follow-up questions about one experience take the past simple. The preposition goes at the end: \"Who did you go with?\"."),
      fb("I ___ three emails, but I still have ten to answer.", ["have written", "have sent", "have answered"], "[He escrito] tres correos, pero todavía me quedan diez por contestar.",
        "A number of results = present perfect simple. The continuous (\"I've been writing\") would focus on the activity, not on how many."),
      tr("Llevo toda la tarde estudiando para el examen.", "I've been studying for the {exam|test} {all afternoon|the whole afternoon}.",
        "Activity + how long up to now = present perfect continuous. «Llevar» never becomes \"carry\" here."),
      dc("I've been working at this hotel since I graduated.",
        "Present perfect continuous for the current job + \"since\" + past simple (\"graduated\") for the starting point."),
      dc("How long ago did your parents get divorced?",
        "\"How long ago\" asks for a finished moment: past simple with \"did\" + base form (\"get divorced\")."),
      lc("I worked there for two years.", [
        "Trabajé allí dos años (ya no trabajo allí).",
        "Trabajo allí desde hace dos años.",
        "Voy a trabajar allí dos años.",
        "Llevo dos años sin trabajar allí.",
      ], "Past simple + \"for\" = a finished period. If you still worked there, it would be \"I've worked there for two years\"."),
      lc("She's been promoted twice since she joined the company.", [
        "La han ascendido dos veces desde que entró en la empresa.",
        "La ascendieron dos veces antes de dejar la empresa.",
        "Ha pedido un ascenso dos veces este año.",
        "Va a entrar en la empresa dentro de dos años.",
      ], "\"She's been promoted\" = \"she has been promoted\" (present perfect). \"Since she joined\" = since the moment she started."),
      sp("Have you ever worked abroad?", "The classic experience question: \"Have you ever\" + participle.",
        "Rising intonation at the end; link \"worked abroad\" into one sound: \"workdabroad\".", "Say it in English: ¿Alguna vez has trabajado en el extranjero?"),
      sp("I've worked here for three years. Before that, I worked in a bank.", "Current job = present perfect + \"for\"; previous job = past simple.",
        "Pause after \"years\". Stress \"here\" and \"bank\".", "Say it in English: Trabajo aquí desde hace tres años. Antes de eso, trabajé en un banco."),
      tr("Conozco a mi jefe desde 2018, pero empecé a trabajar con él el año pasado.", "I've known my boss since 2018, but I started {working|to work} with him last year.",
        "\"Know\" is a state verb: \"I've known\" (simple), never *I know him since 2018 or *I've been knowing him. \"Last year\" = past simple: \"started\"."),
      tr("¿Cuándo te graduaste? ¿Y desde cuándo trabajas aquí?", ["When did you graduate? And how long have you {worked|been working} here?", "When did you graduate? And since when have you {worked|been working} here?"],
        "\"When\" = past simple (\"did you graduate\"). «¿Desde cuándo trabajas?» = \"How long have you worked/been working here?\". *Since when do you work here? copies the Spanish present."),
      wo("My sister got engaged in Paris last spring.", "Mi hermana se comprometió en París la primavera pasada.",
        "\"Get engaged\" = «comprometerse». \"Last spring\" is finished time, so the past simple: \"got\"."),
    ],
  ),
];
