// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b1-u07-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lesson for EN-B1 unit u07 (tenses review): a short recap, then graded practice mixing the whole unit.

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
const lc = (audio: string, options: string[], explanation: string, question = "What did you hear?"): Exercise => ({ type: "listen-choose", audio, question, options, correctIndex: 0, explanation });
const sp = (text: string, explanation: string, tip?: string, prompt?: string): Exercise => ({ type: "speak", text, ...(prompt ? { prompt } : {}), ...(tip ? { tip } : {}), explanation });
const mt = (instructions: string, pairs: [string, string][], explanation: string): Exercise => ({ type: "matching", instructions, pairs: pairs.map(([left, right]) => ({ left, right })), explanation });

const SECONDS: Record<Exercise["type"], number> = {
  "multiple-choice": 15, "multi-select": 20, "listen-choose": 20, "fill-blank": 20, translate: 30,
  "word-order": 25, matching: 30, dictation: 30, speak: 25, write: 300,
};
const lesson = (
  n: number,
  topic: string,
  title: string,
  summary: string,
  heading: string,
  body: string[],
  examples: [string, string][],
  exercises: Exercise[],
): Lesson => ({
  slug: `en-b1-${topic}-unit-drill-${n}`,
  level: "EN-B1",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B1_U07_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. The whole unit: past, perfect, future, conditions, state
  // verbs, used to / get used to, relationships and feelings
  // ---------------------------------------------------------------------
  lesson(
    1,
    "tenses-review",
    "Tenses Review",
    "You will be able to choose the right tense for past, present-perfect and future meanings, avoid state verbs in the continuous, and use used to, be used to and the unit's relationship and feeling words.",
    "Recap: ask why each tense is right",
    [
      "Before you choose a tense, ask four questions: Is it finished (past simple)? Is it connected to now (present perfect)? Is it background or something earlier in a story (past continuous, past perfect)? Is it a plan, a prediction or a condition (going to, the present continuous, will, if + present)?",
      "Two classic Spanish-speaker traps run through the whole unit: copying the Spanish present («vivo aquí desde...», «cuando llegue...») and using the continuous with state verbs (*I'm knowing, *I'm having a car).",
    ],
    [
      ["I've worked at this bank since 2020.", "Trabajo en este banco desde 2020."],
      ["When I got to the airport, my flight had left.", "Cuando llegué al aeropuerto, mi vuelo ya había salido."],
      ["I'll text you when I get to the hotel.", "Te escribo cuando llegue al hotel."],
      ["I'm getting used to my new schedule.", "Me estoy acostumbrando a mi nuevo horario."],
    ],
    [
      // --- present perfect vs past simple
      fb("I ___ in this apartment since 2021.", ["have lived", "have been living"], "[Vivo] en este departamento desde 2021.",
        "«Vivo... desde» describes something that started in the past and is still true, so English needs the present perfect: \"I have lived\" or \"I have been living\". *I live here since 2021 copies the Spanish present."),
      mc("Which sentence is correct?", [
        "I lost my wallet last Friday.",
        "I have lost my wallet last Friday.",
        "I had lost my wallet last Friday.",
        "I was losing my wallet last Friday.",
      ], "\"Last Friday\" is a finished time, so the past simple: \"I lost\". *I have lost... last Friday mixes the present perfect with a finished time, the most common tense error in the unit."),
      fb("When ___ to Chicago?", "did you move", "¿Cuándo [te mudaste] a Chicago?",
        "A question with \"when\" asks about a finished moment, so it takes the past simple: \"When did you move?\". *When have you moved? is wrong even if Spanish says «¿cuándo te has mudado?»."),
      tr("¿Cuánto tiempo llevas trabajando en este hospital?", [
        "How long have you been working {at|in} this hospital?",
        "How long have you worked {at|in} this hospital?",
      ], "«¿Cuánto tiempo llevas + gerundio?» is \"How long have you been + -ing?\". The present perfect simple \"How long have you worked\" is also fine. Never *How long are you working, which copies the Spanish present."),
      tr("Lo conozco desde hace cinco años.", "I've known him for five years.",
        "\"Know\" is a state verb, so the present perfect simple (not *I've been knowing). A length of time takes \"for\": *since five years is wrong, because \"since\" needs a starting point."),
      // --- narrative tenses
      fb("I ___ dinner when my sister called.", ["was making", "was cooking", "was preparing"], "[Estaba preparando] la cena cuando llamó mi hermana.",
        "The past continuous gives the background activity (\"was making dinner\"), and the past simple gives the short event that interrupted it (\"called\")."),
      tr("Cuando llegamos al cine, la película ya había empezado.",
        "When we {got to|arrived at} the {movie theater|movies|cinema}, the {movie|film} had {already started|started already}.",
        "The movie started first, so it takes the past perfect: \"had already started\". \"When we arrived, the movie started\" would mean it started at that moment. Remember \"arrive at\" a place, never *arrive to."),
      lc("When I got to the station, the train had left.", [
        "Cuando llegué a la estación, el tren ya se había ido.",
        "Cuando llegué a la estación, salió el tren.",
        "Cuando llegue a la estación, el tren se irá.",
        "Llegué a la estación y tomé el tren.",
      ], "\"Had left\" (past perfect) means the train left before I arrived: «ya se había ido». Listen for the weak \"had\": without it, the train would leave at the moment you arrive."),
      // --- used to
      tr("De niño, usaba lentes.", [
        "When I was a {child|kid}, I used to wear glasses.",
        "I used to wear glasses when I was a {child|kid}.",
        "As a {child|kid}, I used to wear glasses.",
      ], "A past state that is no longer true: \"used to\" + base form. «Usar lentes» is \"wear glasses\", not *use glasses."),
      mc("Which sentence is correct?", [
        "I usually go to the gym after work.",
        "I use to go to the gym after work.",
        "I used to going to the gym after work.",
        "I am used to go to the gym after work.",
      ], "«Suelo ir» is a present habit, so the present simple with \"usually\". \"Used to\" has no present form, so *I use to go is wrong, and \"be used to\" would need an -ing verb."),
      wo("Did you use to take the bus to school?", "¿Antes tomabas el autobús para ir a la escuela?",
        "Questions with \"used to\" take \"did\" + \"use to\", without the -d: *Did you used to is a common spelling mistake."),
      // --- future forms, time clauses, conditions
      wo("Look at the traffic! We're going to be late.", "¡Mira el tráfico! Vamos a llegar tarde.",
        "A prediction based on what you can see now takes \"going to\": \"We're going to be late\". \"Be late\" is the usual way to say «llegar tarde»."),
      tr("Mañana me voy a ver con mi jefe a las nueve.", [
        "{I'm meeting|I'm seeing|I'm going to meet|I'm going to see} my boss {at nine tomorrow|tomorrow at nine}.",
        "Tomorrow I'm {meeting|seeing} my boss at nine.",
        "Tomorrow I'm going to {meet|see} my boss at nine.",
      ], "An arrangement with a time and another person is best in the present continuous: \"I'm meeting my boss\". *I meet my boss tomorrow copies the Spanish present."),
      fb("I'll send you the photos as soon as I ___ home.", ["get", "arrive", "get back"], "Te mando las fotos en cuanto [llegue] a casa.",
        "After \"as soon as\", \"when\", \"before\" and \"until\", English uses the present for the future: \"as soon as I get home\", never *as soon as I will get. With \"home\" there is no preposition: \"get home\", not *arrive to home."),
      mc("Which sentence is correct?", [
        "We'll go to the park unless it rains.",
        "We'll go to the park unless it doesn't rain.",
        "We'll go to the park unless it will rain.",
        "We go to the park unless it will rain.",
      ], "\"Unless\" already means \"if not\", so it takes a positive present verb: \"unless it rains\". Adding \"doesn't\" doubles the negative, and \"will\" never goes after \"unless\"."),
      tr("Llévate un suéter por si hace frío en la noche.",
        "{Take|Bring} a sweater in case it {gets|is} cold {at night|tonight|in the evening}.",
        "«Por si» is \"in case\": a precaution you take now. \"Take a sweater if it gets cold\" would mean «solo si hace frío». After \"in case\", the present, not *will get."),
      dc("I've been sleeping badly since I started my new job.",
        "\"I've been sleeping\" (present perfect continuous, still true now) + \"since\" + a past simple clause for the starting point. The contraction \"I've\" is short: listen for the /v/."),
      // --- state vs action verbs
      fb("Sorry, I ___ what you mean.", "don't understand", "Perdón, no [entiendo] lo que quieres decir.",
        "\"Understand\" is a state verb, so the simple form even for right now: \"I don't understand\". *I'm not understanding is a typical Spanish-speaker mistake."),
      fb("We ___ lunch right now. Can I call you back?", ["are having", "are eating"], "[Estamos comiendo] ahora mismo. ¿Te puedo llamar después?",
        "\"Have lunch\" is an action, so the continuous is fine: \"We're having lunch\". Compare the state meaning of \"have\" (possession): \"We have a car\", never *We're having a car."),
      mt("Match each sentence with its meaning.", [
        ["I'm seeing the dentist on Friday.", "Tengo cita con el dentista el viernes."],
        ["I see what you mean.", "Entiendo lo que quieres decir."],
        ["This coffee tastes strange.", "Este café sabe raro."],
        ["I'm tasting the soup.", "Estoy probando la sopa."],
        ["I think it's a good idea.", "Creo que es buena idea."],
      ], "\"See\", \"taste\" and \"think\" are states when they describe a perception, a quality or an opinion (simple form), and actions when someone does something on purpose: a meeting, trying food (continuous)."),
      // --- email update
      dc("It's been a long week, and I haven't had time to call my parents.",
        "\"It's been\" = \"it has been\" (the 's is \"has\" here, and \"been\" sounds like \"bin\"). \"This week\" is not finished, so the present perfect: \"I haven't had time\"."),
      tr("Hace mucho que no te escribo. ¿Qué es de tu vida?",
        "I haven't written {to you |}{in|for} {a long time|ages}. What have you been up to?",
        "«Hace mucho que no...» is the present perfect + \"in\" or \"for a long time\", never *It makes a long time that I don't write you. \"What have you been up to?\" is the natural way to ask «¿qué es de tu vida?»."),
      fb("I ___ from my trip to Peru, so I'm still a bit tired.", ["have just come back", "have just gotten back", "have just returned", "just came back", "just got back"], "[Acabo de volver] de mi viaje a Perú, así que todavía estoy un poco cansado.",
        "«Acabo de» is \"I've just\" + participle. In American English \"I just got back\" (past simple) is also very common."),
      // --- relationships and feelings
      tr("Me llevo muy bien con mis compañeros de trabajo.", "I get {along|on} {really|very} well with my {coworkers|colleagues}.",
        "«Llevarse bien con» is \"get along with\" (or British \"get on with\"). «Compañeros de trabajo» are \"coworkers\" or \"colleagues\", not *partners."),
      mc("Which sentence is correct?", [
        "My sister married a doctor last year.",
        "My sister married with a doctor last year.",
        "My sister has married a doctor last year.",
        "My sister got married with a doctor last year.",
      ], "\"Marry someone\" or \"get married to someone\": never *marry with or *got married with. \"Last year\" is a finished time, so past simple, not the present perfect."),
      fb("Tom and Ana ___ in May, but now they've made up.", ["broke up", "split up"], "Tom y Ana [terminaron] en mayo, pero ya hicieron las paces.",
        "«Terminar» (a relationship) is \"break up\" or \"split up\". \"In May\" is a finished time, so past simple; \"they've made up\" is recent news with a result now."),
      dc("My parents are very proud of my little brother.",
        "\"Proud\" always takes \"of\": \"proud of you\", \"proud of her work\". In fast speech \"of\" is a weak \"uv\", so listen for it after \"proud\"."),
      lc("I hope you're doing well. I've just started a new job.", [
        "Espero que estés bien. Acabo de empezar en un trabajo nuevo.",
        "Espero que estés bien. Voy a empezar en un trabajo nuevo.",
        "Espero que estuvieras bien. Empecé un trabajo nuevo el año pasado.",
        "Ojalá estuvieras bien. Ya no tengo trabajo.",
      ], "\"I've just started\" is recent news: «acabo de empezar». \"I hope you're doing well\" is a typical friendly first line in an email."),
      mc("The meeting lasted three hours, and everyone was ___.", ["bored", "boring", "bore", "boredom"],
        "-ed adjectives describe how people feel: \"everyone was bored\" («aburridos»). \"Everyone was boring\" would mean the people were dull. The meeting was boring; the people were bored."),
      tr("Me molesta mucho cuando la gente llega tarde.", [
        "It really {annoys|bothers} me when people {arrive|are|show up|come} late.",
        "It {annoys|bothers} me a lot when people {arrive|are|show up|come} late.",
      ], "«Me molesta» is \"it annoys me\" or \"it bothers me\". Never *molest: it means abuse. The present simple is for a general fact, not something happening now."),
      // --- first job and moving house: final mix with traps
      tr("He trabajado de mesero en dos restaurantes.", "I've worked as a {waiter|server} {in|at} two restaurants.",
        "Work experience with no time mentioned: the present perfect. «De mesero» is \"as a waiter\" (or \"as a server\"), never *of waiter."),
      wo("I was answering the phone when my new boss walked in.", "Estaba contestando el teléfono cuando entró mi nuevo jefe.",
        "Background in the past continuous (\"was answering\"), the interrupting event in the past simple (\"walked in\")."),
      fb("I'm still ___ the noise of the city.", "getting used to", "Todavía me estoy [acostumbrando] al ruido de la ciudad.",
        "«Acostumbrarse» (the process) is \"get used to\", here in the continuous because it is happening now: \"I'm still getting used to\". Not *I'm still using to."),
      mc("Which sentence is correct?", [
        "I'm not used to getting up so early.",
        "I'm not used to get up so early.",
        "I didn't used to getting up so early.",
        "I'm not use to get up so early.",
      ], "In \"be used to\" («estar acostumbrado a»), \"to\" is a preposition, so the next verb takes -ing: \"used to getting up\". \"I didn't use to get up early\" would be a different idea: «antes no me levantaba temprano»."),
      tr("Cuando hayamos pintado las paredes, compraremos los muebles.",
        "{When|Once|After} we've painted the walls, we'll buy the furniture.",
        "«Cuando hayamos pintado» shows completion first, so English uses the present perfect after \"when\": \"when we've painted\", never *when we will have painted. \"Furniture\" is uncountable: no *furnitures."),
      sp("I used to live downtown, but now I live in the suburbs.",
        "\"Used to\" for the past situation, present simple for now. «El centro» is \"downtown\" in American English, with no \"the\" or \"in\" before it.",
        "\"Used to\" sounds like \"yoos-tuh\": the d is silent.",
        "Say it in English: «Antes vivía en el centro, pero ahora vivo en las afueras.»"),
      sp("If my flight isn't late, I'll call you as soon as I land.",
        "Two clauses with future meaning, both in the present: \"if my flight isn't late\" and \"as soon as I land\". \"Will\" goes only in the main clause.",
        "Contract \"I'll\" so it sounds like \"aisle\", and stress \"call\" and \"land\".",
        "Say it in English: «Si mi vuelo no se retrasa, te llamo en cuanto aterrice.»"),
    ],
  ),
];
