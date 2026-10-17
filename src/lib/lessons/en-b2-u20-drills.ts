// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b2-u20-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B2 unit u20 (emphasis: cleft sentences, emphatic do, so and such, too and enough, intensifiers): a short recap, then graded practice.

const SLUG = "en-b2-emphasis";

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
  slug: `${SLUG}-unit-drill-${n}`,
  level: "EN-B2",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B2_U20_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. It-clefts, what-clefts, all I want; emphatic do, so and such,
  // the reason why, really and at all; neutral or emphatic?
  // ---------------------------------------------------------------------
  lesson(
    1,
    "Cleft Sentences and Emphatic Do",
    "You will be able to highlight information with it-clefts and what-clefts, insist with emphatic do, use so and such correctly and decide when a neutral sentence is better.",
    "Recap: English builds a frame",
    [
      "It-cleft: It + be + focus + who/that + rest (\"It was Sofia who paid\"); the \"it\" is never optional. What-cleft: \"What I need is...\" (never *What I need it is); for actions, \"What I did was call...\"; «lo único que» = \"All I want is...\" (never *All what); «lo que quiero es que...» = \"What I want is for you to...\".",
      "Emphatic do + base verb: \"I did tell you\" (never *did told). \"So\" + adjective, \"such (a)\" + noun phrase; \"really\" before verbs (never *I very like it); \"at all\" strengthens negatives. Use emphasis only when you correct, insist or highlight; otherwise stay neutral.",
    ],
    [
      ["It was my sister who booked the hotel.", "Fue mi hermana quien reservó el hotel."],
      ["What I miss most is my mom's cooking.", "Lo que más extraño es la comida de mi mamá."],
      ["I did pay the bill! Here's the receipt.", "¡Que sí pagué la cuenta! Aquí está el recibo."],
      ["It was such a long day.", "Fue un día tan largo."],
    ],
    [
      fb("___ was Martin who forgot the tickets, not me.", "It", "[Fue] Martin quien olvidó los boletos, no yo.",
        "An it-cleft always has a subject: \"It was...\". *Was Martin who forgot is wrong."),
      fb("It was in Miami ___ we got engaged.", "that", "Fue en Miami [donde] nos comprometimos.",
        "After a place or a time, the it-cleft uses \"that\", not \"where\" or \"when\"."),
      fb("___ I need right now is a strong coffee.", "What", "[Lo que] necesito ahora mismo es un café bien cargado.",
        "«Lo que» starting a noun clause = \"What\". Not *That I need or *The what I need."),
      fb("___ I want is a quiet evening at home.", "All", "[Lo único que] quiero es una noche tranquila en casa.",
        "«Lo único que» = \"All\" + clause. Never *All what I want."),
      fb("What I did was ___ the bank right away.", ["call", "to call", "phone", "contact"], "Lo que hice fue [llamar] al banco de inmediato.",
        "After \"What I did was\", the bare infinitive is most common (\"to call\" is also correct)."),
      fb("I ___ lock the door! I remember doing it.", "did", "¡Que [sí] cerré la puerta con llave! Me acuerdo de haberlo hecho.",
        "Emphatic \"did\" + base verb (\"lock\") insists that something really happened."),
      fb("They're ___ friendly neighbors.", "such", "Son unos vecinos [tan] amables.",
        "\"Such\" + adjective + plural noun, with no \"a\"."),
      fb("I was ___ nervous before the interview.", "so", "Estaba [tan] nervioso antes de la entrevista.",
        "\"So\" + adjective on its own."),
      fb("I didn't enjoy the party at ___.", "all", "No disfruté [nada] la fiesta.",
        "\"At all\" strengthens a negative: «nada», «para nada»."),
      mc("Which sentence is correct?", [
        "What I don't understand is why he quit.",
        "What I don't understand it is why he quit.",
        "The what I don't understand is why he quit.",
        "That I don't understand is why he quit.",
      ], "\"What I don't understand\" is already the subject of \"is\"; don't add \"it\" or \"the\"."),
      mc("Which sentence is correct?", [
        "She does like her new job. She's just tired.",
        "She does likes her new job. She's just tired.",
        "She do like her new job. She's just tired.",
        "She did liked her new job. She's just tired.",
      ], "After emphatic \"does\" or \"did\", the main verb is in the base form: \"does like\"."),
      mc("Which sentence is correct?", [
        "It was such a beautiful wedding.",
        "It was so a beautiful wedding.",
        "It was a so beautiful wedding.",
        "It was such beautiful wedding.",
      ], "\"Such a\" + adjective + singular noun. \"So\" can't go before \"a\" + noun."),
      mc("Your boss asks: \"Did you send the invoice?\" You sent it and nobody doubts you. What is the most natural answer?", [
        "Yes, I sent it this morning.",
        "I did send it!",
        "It was me who sent it!",
        "What I did was send it!",
      ], "Nobody is doubting you, so a neutral answer is best. Emphatic forms here sound offended."),
      tr("Fue mi papá quien me enseñó a manejar.", ["It was my {dad|father} who taught me {how |}to drive.", "It was my {dad|father} that taught me {how |}to drive."],
        "It-cleft focusing on a person: \"It was... who...\"."),
      tr("No fui yo quien rompió la impresora.", ["It wasn't me who broke the printer.", "It was not me who broke the printer.", "It wasn't me that broke the printer.", "I wasn't the one who broke the printer."],
        "To correct someone: \"It wasn't me who...\". Everyday English uses \"me\", not \"I\"."),
      tr("Lo que me encanta de este barrio es la gente.", ["What I love about this neighborhood is the people.", "What I love about this {neighborhood|area} {is|are} the people."],
        "«Lo que me encanta de» = \"What I love about\". The verb is usually singular."),
      tr("Lo único que hice fue hacer una pregunta.", ["All I did was ask a question.", "All I did was to ask a question.", "The only thing I did was ask a question."],
        "«Lo único que hice fue» = \"All I did was\" + base verb."),
      tr("Lo que quiero es que me digas la verdad.", ["What I want is for you to tell me the truth."],
        "«Lo que quiero es que» + subjunctive = \"What I want is for you to\" + verb. *What I want is that you tell me is wrong."),
      tr("¡Sí que te lo dije!", ["I did tell you!", "I did tell you about it!"],
        "«Sí que» = emphatic \"did\" + base verb. Never *I did told you."),
      tr("La razón por la que te llamo es que necesito un favor.", ["The reason {why |that |}I'm calling is that I need a favor.", "The reason {why |that |}I'm calling {you |}is {that |}I need a favor.", "The reason {why |that |}I'm calling is {that |}I need a favour."],
        "\"The reason (why) I'm calling is that...\". Avoid *The reason because."),
      tr("Me gusta mucho esta serie.", ["I really like this {series|show}.", "I like this {series|show} very much.", "I like this {series|show} a lot."],
        "\"Very\" never goes before a verb: \"I really like it\" or \"I like it very much\" (after the object)."),
      tr("Por eso no fui a la reunión.", ["That's why I didn't go to the meeting.", "That is why I didn't go to the meeting."],
        "«Por eso» = \"That's why\" + normal word order."),
      wo("It was the noise that kept me awake.", "Fue el ruido lo que no me dejó dormir.",
        "It-cleft with a thing as focus: \"that\"."),
      wo("What surprised me most was the silence.", "Lo que más me sorprendió fue el silencio.",
        "What-cleft: the key information comes at the end."),
      wo("I do like the apartment, but it's too small.", "El departamento sí me gusta, pero es demasiado pequeño.",
        "Emphatic \"do\" concedes a point before \"but\"."),
      lc("It's not that I don't like him. It's that I don't trust him.", ["No es que no me caiga bien. Es que no me fío de él.", "No me cae bien porque no confío en él.", "Me cae bien, pero él no confía en mí.", "No es que no confíe en él, es que no me cae bien."],
        "\"It's not that..., it's that...\" corrects a wrong interpretation."),
      lc("The thing is, I don't have enough time.", ["Lo que pasa es que no tengo suficiente tiempo.", "La cosa es que tengo tiempo de sobra.", "No tengo nada que hacer.", "Esa cosa no me da tiempo."],
        "\"The thing is, ...\" = «lo que pasa es que...», introducing a problem."),
      dc("It was only last week that I found out about the party.",
        "It-cleft with a time: \"It was... that...\"."),
      dc("What happened was that the train broke down near Denver.",
        "\"What happened was (that)...\" focuses on a whole event."),
      sp("I am listening! You said seven o'clock.",
        "With \"be\" there is no \"do\": just stress \"am\".",
        "Stress AM strongly; don't contract it to \"I'm\"."),
      sp("It wasn't me who left the lights on.",
        "Correcting with an it-cleft.",
        undefined, "Say it in English: «No fui yo quien dejó las luces prendidas.»"),
      tr("Lo que necesitamos son más voluntarios, no más dinero.", ["What we need is more volunteers, not more money.", "What we need {is|are} more volunteers, not more money."],
        "Trap: Spanish says «son», but English usually keeps \"is\" after a what-clause. Don't add *it."),
      tr("Fue un viaje tan bonito que queremos volver el año que viene.", ["It was such a {beautiful|lovely|nice|wonderful} trip that we want to go back next year.", "It was such a {beautiful|lovely|nice|wonderful} trip {that |}we want to {go back|return} next year.", "The trip was so {beautiful|lovely|nice|wonderful} that we want to {go back|return} next year."],
        "Trap: «un viaje tan bonito» = \"such a beautiful trip\", never *a so beautiful trip."),
      mc("Which sentence is correct?", [
        "It was Carla who suggested going to the beach.",
        "Was Carla who suggested going to the beach.",
        "It was Carla who suggested to go to the beach.",
        "It was Carla which suggested going to the beach.",
      ], "It-cleft with a subject and \"who\" for people; \"suggest\" + -ing (never *suggest to go)."),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. So/such... that, too and enough, gradable and extreme
  // adjectives, the classic emphasis errors
  // ---------------------------------------------------------------------
  lesson(
    2,
    "So, Such, Too, Enough and Extreme Adjectives",
    "You will be able to express results with so... that and such... that, limits with too and enough, pair intensifiers with the right adjectives and fix the typical emphasis errors.",
    "Recap: result, limit and the right intensifier",
    [
      "\"So\" + adjective + (that) and \"such (a)\" + noun phrase + (that) give a result: \"It was so loud that I left\". \"Too\" + adjective (never *too much expensive) + to = more than possible; \"enough\" goes after adjectives (\"old enough\", never *enough old) but before nouns (\"enough chairs\"). Don't repeat the object: \"too hot to drink\", not *to drink it.",
      "Gradable adjectives (cold, tired, big) take \"very\", \"extremely\", \"a bit\", \"pretty\"; extreme adjectives (freezing, exhausted, huge, delicious) take \"absolutely\", \"completely\", \"totally\". \"Really\" works with both. Replace -ísimo with an extreme word: «cansadísimo» = \"exhausted\".",
    ],
    [
      ["The music was so loud that we couldn't talk.", "La música estaba tan alta que no podíamos hablar."],
      ["This suitcase is too heavy to carry.", "Esta maleta pesa demasiado para cargarla."],
      ["We don't have enough plates for everyone.", "No tenemos suficientes platos para todos."],
      ["After the hike, I was absolutely starving.", "Después de la caminata, me moría de hambre."],
    ],
    [
      fb("The exam was ___ easy that everyone finished early.", "so", "El examen fue [tan] fácil que todos terminaron temprano.",
        "\"So\" + adjective + that for a result."),
      fb("It was ___ boring movie that I fell asleep.", "such a", "Era una película [tan] aburrida que me quedé dormido.",
        "\"Such a\" + adjective + singular noun + that."),
      fb("There were ___ many cars that we couldn't find a parking space.", "so", "Había [tantos] carros que no pudimos encontrar lugar para estacionar.",
        "\"So many\" + countable plural noun."),
      fb("My grandmother is ___ old to travel alone.", "too", "Mi abuela es [demasiado] mayor para viajar sola.",
        "\"Too\" + adjective + to-infinitive: more than is possible or good."),
      fb("Is your son old ___ to stay home alone?", "enough", "¿Tu hijo tiene [suficiente] edad para quedarse solo en casa?",
        "\"Enough\" goes after the adjective: \"old enough\"."),
      fb("We didn't have ___ time to visit the museum.", "enough", "No tuvimos [suficiente] tiempo para visitar el museo.",
        "\"Enough\" goes before a noun: \"enough time\"."),
      fb("The concert was absolutely ___. I loved every minute.", ["amazing", "fantastic", "incredible", "brilliant", "wonderful"], "El concierto fue [increíble]. Disfruté cada minuto.",
        "\"Absolutely\" goes with extreme adjectives like \"amazing\" or \"fantastic\", not with \"good\"."),
      fb("Was it cold? It was absolutely ___!", "freezing", "¿Hacía frío? ¡Hacía un frío [tremendo]!",
        "Answer a gradable question with an extreme adjective: \"cold\" → \"freezing\"."),
      mc("Which sentence is correct?", [
        "This phone is too expensive for me.",
        "This phone is too much expensive for me.",
        "This phone is enough expensive for me.",
        "This phone is so much expensive for me.",
      ], "\"Too\" goes directly before an adjective. \"Too much\" and \"so much\" go before nouns or comparatives."),
      mc("Which sentence is correct?", [
        "He isn't tall enough to reach the top shelf.",
        "He isn't enough tall to reach the top shelf.",
        "He isn't tall enough for reach the top shelf.",
        "He isn't enough tall for reaching the top shelf.",
      ], "Adjective + \"enough\" + to-infinitive."),
      mc("Which pair is natural English?", [
        "very tired / completely exhausted",
        "very exhausted / completely tired",
        "absolutely tired / very exhausted",
        "extremely exhausted / absolutely tired",
      ], "Gradable \"tired\" takes \"very\"; extreme \"exhausted\" takes \"completely\" or \"absolutely\"."),
      mc("Your friend says: «¡Este pastel está demasiado bueno!» (= buenísimo). How do you say it in English?", [
        "This cake is really good!",
        "This cake is too good!",
        "This cake is too much good!",
        "This cake is very delicious!",
      ], "English \"too\" always means a problem. Say \"really good\" or \"absolutely delicious\"; \"very delicious\" sounds odd."),
      mt("Match each gradable adjective with its extreme partner.", [
        ["hungry", "starving"],
        ["small", "tiny"],
        ["angry", "furious"],
        ["funny", "hilarious"],
        ["scared", "terrified"],
      ], "Extreme adjectives already mean \"very...\", so they take \"absolutely\" instead of \"very\"."),
      tr("Hacía tanto calor que no pudimos dormir.", ["It was so hot {that |}we couldn't sleep.", "It was so hot {that |}we could not sleep."],
        "«Tanto... que» with an adjective = \"so\" + adjective + (that)."),
      tr("Eran tan buenos vecinos que nos regalaron un pastel.", ["They were such good neighbors {that |}they gave us a cake.", "They were such {nice|good|great} neighbors {that |}they gave us a cake.", "They were such good neighbours {that |}they gave us a cake."],
        "«Tan» + adjective + plural noun = \"such\" + adjective + plural noun, with no \"a\"."),
      tr("Esta sopa está demasiado caliente para tomarla.", ["This soup is too hot to {eat|have|drink}.", "This soup is too hot for me to {eat|have|drink}."],
        "Don't repeat the object at the end: *too hot to eat it."),
      tr("No tiene edad para votar.", ["{He|She} isn't old enough to vote.", "{He|She} is too young to vote.", "{He's|She's} not old enough to vote."],
        "\"Not old enough to\" or \"too young to\". Never *enough old."),
      tr("La mesa es lo bastante grande para ocho personas.", ["The table is big enough for eight people.", "The table is large enough for eight people.", "The table is big enough to seat eight people."],
        "Adjective + \"enough\" + \"for\" + person."),
      tr("Estoy agotadísimo.", ["I'm completely exhausted.", "I'm absolutely exhausted.", "I'm totally exhausted.", "I'm exhausted.", "I'm really exhausted."],
        "«-ísimo» → extreme adjective: \"exhausted\", with \"completely\" or \"absolutely\" if you like."),
      tr("Su casa nueva es enorme.", ["Their new house is huge.", "{His|Her|Their} new house is {huge|enormous|absolutely huge}."],
        "«Enorme» = \"huge\" or \"enormous\": already extreme, so no \"very\"."),
      tr("Las entradas eran carísimas.", ["The tickets were incredibly expensive.", "The tickets were {really|extremely|very|so} expensive.", "The tickets were way too expensive."],
        "English has no -ísimo: use \"incredibly\" or \"really\" + \"expensive\"."),
      tr("Hoy hace bastante frío.", ["It's pretty cold today.", "It's quite cold today.", "It's fairly cold today.", "It's rather cold today."],
        "\"Pretty\" = informal «bastante», with gradable adjectives."),
      wo("He spoke so quickly that nobody understood him.", "Habló tan rápido que nadie le entendió.",
        "\"So\" + adverb + that + result clause."),
      wo("There's too much salt in this soup.", "Esta sopa tiene demasiada sal.",
        "\"Too much\" + uncountable noun."),
      wo("You're not working hard enough.", "No estás trabajando lo suficiente.",
        "\"Enough\" goes after the adverb \"hard\"."),
      lc("The hotel was so far from the beach that we had to take a taxi every day.", ["El hotel estaba tan lejos de la playa que teníamos que tomar un taxi todos los días.", "El hotel estaba demasiado lejos de la playa para ir caminando.", "El hotel estaba lo bastante cerca para ir a la playa.", "Tomamos un taxi porque el hotel estaba en la playa."],
        "\"So far... that\" = «tan lejos... que»: a separate result with its own subject."),
      lc("The movie was absolutely hilarious.", ["La película era divertidísima.", "La película era bastante graciosa.", "La película no tenía nada de gracia.", "La película era un poco ridícula."],
        "\"Hilarious\" is the extreme of \"funny\", so it takes \"absolutely\"."),
      dc("There were so many people that we couldn't get in.",
        "\"So many\" + plural noun + that."),
      dc("We don't have enough chairs for everyone.",
        "\"Enough\" before the noun \"chairs\"."),
      dc("The food was absolutely delicious.",
        "\"Delicious\" is extreme: \"absolutely\" or \"really\", not \"very\"."),
      sp("It was such a long day that I went straight to bed.",
        "\"Such a\" + adjective + noun + that.",
        undefined, "Say it in English: «Fue un día tan largo que me fui directo a la cama.»"),
      sp("Were you hungry? I was starving!",
        "Answer with an extreme adjective.",
        "Stress \"starving\" strongly: STAR-ving."),
      tr("La maleta pesaba tanto que no pude levantarla.", ["The suitcase was so heavy {that |}I couldn't lift it.", "The suitcase was too heavy {for me |}to lift.", "The suitcase was so heavy {that |}I could not lift it."],
        "Trap: with \"so... that\" the result clause keeps \"it\"; with \"too... to\" it disappears."),
      tr("Lo único que quiero es un carro lo bastante grande para toda la familia.", ["All I want is a car big enough for the whole family.", "All I want is a car {that's|that is} big enough for the whole family.", "The only thing I want is a car big enough for the whole family.", "All I want is a big enough car for the whole family."],
        "Trap mix: \"All I want\" (not *All what) and \"big enough\" (not *enough big)."),
      mc("Which sentence is correct?", [
        "I'm so tired. It was such a busy week.",
        "I'm so much tired. It was such busy week.",
        "I'm such tired. It was so a busy week.",
        "I'm very exhausted. It was a so busy week.",
      ], "\"So\" + adjective, \"such a\" + adjective + singular noun. Not *so much tired, *very exhausted or *a so busy week."),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 3. Transforming into clefts, clearing up misunderstandings,
  // what or which, it wasn't until; whole-unit mix
  // ---------------------------------------------------------------------
  lesson(
    3,
    "Make It Emphatic and Clear It Up",
    "You will be able to turn neutral sentences into emphatic ones, clear up a misunderstanding with clefts and stress, choose between what and which for «lo que», and use It wasn't until... that.",
    "Recap: choose the focus, then the frame",
    [
      "To transform: pick the focus and frame it. \"Lucia fixed it\" → \"It was Lucia who fixed it\"; \"I hate the traffic\" → \"What I hate is the traffic\"; \"I apologized\" → \"What I did was apologize\"; \"I left because I was bored\" → \"The reason I left was that I was bored\". Clearing up: \"It wasn't me who...\", \"I did send it!\", \"What I meant was...\".",
      "«Lo que» starting a noun clause = \"what\" (\"What she said was true\"); «lo que» commenting on a whole clause after a comma = \"which\" (\"He was late, which annoyed me\"). «No... hasta» = \"It wasn't until... that...\". \"So\" can be a linker (\"It was late, so we left\") or an intensifier (\"It was so late that we left\").",
    ],
    [
      ["What you should do is talk to your manager.", "Lo que deberías hacer es hablar con tu gerente."],
      ["What I meant was that the price was too high.", "Lo que quería decir era que el precio era demasiado alto."],
      ["She lost her keys, which made her late.", "Perdió las llaves, lo que hizo que llegara tarde."],
      ["It wasn't until Friday that they answered.", "No contestaron hasta el viernes."],
    ],
    [
      fb("Diego broke the window. → It was Diego ___ broke the window.", ["who", "that"], "Fue Diego [quien] rompió la ventana.",
        "It-cleft focusing on a person: \"who\" (or \"that\")."),
      fb("The traffic annoys me. → What ___ me is the traffic.", "annoys", "Lo que me [molesta] es el tráfico.",
        "Move the verb phrase into the what-clause and the focus to the end. The verb keeps its -s."),
      fb("You should rest. → What you should ___ is rest.", "do", "Lo que deberías [hacer] es descansar.",
        "To focus on an action, use \"do\" in the what-clause: \"What you should do is...\"."),
      fb("I only want some peace. → ___ I want is some peace.", ["All", "The only thing"], "[Lo único que] quiero es un poco de tranquilidad.",
        "\"I only want\" → \"All I want is...\" or \"The only thing I want is...\"."),
      fb("He arrived two hours late, ___ annoyed everyone.", "which", "Llegó dos horas tarde, [lo que] molestó a todos.",
        "«Lo que» commenting on the whole previous clause = \", which\". *what annoyed everyone is wrong."),
      fb("I don't understand ___ you mean.", "what", "No entiendo [lo que] quieres decir.",
        "«Lo que» = \"the thing that\" starting a noun clause = \"what\"."),
      fb("It wasn't ___ I got home that I saw the message.", "until", "No vi el mensaje [hasta] que llegué a casa.",
        "«No... hasta que» = \"It wasn't until... that...\"."),
      fb("It was late, ___ we took a taxi home.", "so", "Era tarde, [así que] tomamos un taxi a casa.",
        "\"So\" as a linker of result, after a comma."),
      mc("Which sentence is correct?", [
        "She got the job, which surprised nobody.",
        "She got the job, what surprised nobody.",
        "She got the job, that surprised nobody.",
        "She got the job, the which surprised nobody.",
      ], "A comment on the whole clause after a comma = \"which\". \"What\" and \"that\" can't do this job."),
      mc("Emma thinks you sent the wrong file to the client. You didn't. What do you say?", [
        "It wasn't me who sent it to the client. I sent it to you.",
        "Wasn't me who sent it to the client. I sent it to you.",
        "I didn't sent it to the client. I did sent it to you.",
        "It wasn't I who sent it the client. I sent you it.",
      ], "Correct with an it-cleft (\"It wasn't me who...\"), keep the subject \"it\" and use base verbs after \"didn't\"/\"did\"."),
      mc("Which version focuses on the time?", [
        "It was on Sunday that we finished the project.",
        "It was us who finished the project on Sunday.",
        "What we finished on Sunday was the project.",
        "We did finish the project on Sunday.",
      ], "The focus goes right after \"It was\": \"on Sunday\"."),
      mc("Which sentence uses emphasis well?", [
        "What surprised me most about Tokyo was how quiet it was.",
        "What I did do was such an absolutely amazing trip.",
        "It was me who I went to Tokyo.",
        "What I visited it was Tokyo.",
      ], "One tool at a time. Piling up clefts, emphatic do and intensifiers sounds silly; extra subjects are wrong."),
      tr("Fue en Cancún donde nos conocimos.", ["It was in Cancun that we met.", "It was in Cancun that we first met."],
        "After a place, the it-cleft uses \"that\". Spanish «donde» tempts you to say \"where\"."),
      tr("Lo que me sorprendió fue el final.", ["What surprised me was the ending.", "What surprised me was the end."],
        "What-cleft: \"What surprised me was...\"."),
      tr("Lo que deberías hacer es pedir perdón.", ["What you should do is apologize.", "What you should do is {say sorry|apologise|to apologize}."],
        "\"What you should do is\" + base verb."),
      tr("Me fui porque estaba aburrido.", ["I left because I was bored.", "The reason {why |}I left was that I was bored.", "The reason {why |}I left was {that |}I was bored."],
        "Neutral or with \"The reason (why) I left was that...\". Note \"bored\" (the person), not *boring."),
      tr("Lo que quería decir era que necesitamos más tiempo.", ["What I meant was that we need more time.", "What I meant {was|is} {that |}we need more time.", "What I meant was {that |}we needed more time.", "What I wanted to say was {that |}we need more time."],
        "\"What I meant was...\" repairs a misunderstanding."),
      tr("No llamó hasta la medianoche.", ["It wasn't until midnight that {he|she} called.", "{He|She} didn't call until midnight."],
        "\"It wasn't until... that...\" (emphatic) or \"didn't... until\" (neutral)."),
      tr("No entendí a mis padres hasta que tuve hijos.", ["It wasn't until I had {kids|children} that I understood my parents.", "I didn't understand my parents until I had {kids|children}."],
        "«No... hasta que» + clause = \"It wasn't until\" + clause + \"that\"."),
      tr("Perdí el tren, lo cual fue un desastre.", ["I missed the train, which was a disaster.", "I missed the train, which was a {nightmare|catastrophe}."],
        "«Lo cual» after a comma = \"which\". «Perder» a train = \"miss\"."),
      tr("Todo lo que dice es verdad.", ["Everything {he|she} says is true.", "Everything that {he|she} says is true.", "All {he|she} says is true."],
        "«Todo lo que» = \"everything (that)\", not *all what."),
      wo("It's not that I'm angry. It's that I'm tired.", "No es que esté enojado. Es que estoy cansado.",
        "\"It's not that..., it's that...\" corrects a wrong interpretation."),
      wo("What I did was attach the new version.", "Lo que hice fue adjuntar la versión nueva.",
        "\"What I did was\" + base verb."),
      wo("The person who helped me most was my neighbor.", "La persona que más me ayudó fue mi vecino.",
        "A general noun frame: \"The person who... was...\"."),
      lc("I sent it to you, not to the client.", ["Te lo envié a ti, no al cliente.", "Se lo envié al cliente, no a ti.", "No te lo envié ni a ti ni al cliente.", "El cliente me lo envió a mí."],
        "Contrastive stress on \"you\" and \"client\" carries the correction."),
      lc("In fact, it was the price that made me change my mind.", ["De hecho, fue el precio lo que me hizo cambiar de opinión.", "De hecho, el precio no me importó.", "Cambié el precio porque no me gustaba.", "En realidad, cambié de opinión antes de ver el precio."],
        "\"In fact\" + it-cleft focusing on \"the price\"."),
      dc("It wasn't until the next morning that we realized the mistake.",
        "\"It wasn't until... that...\". \"Realize\" = «darse cuenta»."),
      dc("However, what really matters is that everyone is safe.",
        "A linker followed by a what-cleft."),
      sp("I did send it! I have the confirmation email.",
        "Emphatic \"did\" + base verb \"send\".",
        "Stress DID strongly and say the rest quickly."),
      sp("What I meant was that we should wait a little longer.",
        "\"What I meant was...\" softens and clarifies.",
        undefined, "Say it in English: «Lo que quería decir era que deberíamos esperar un poco más.»"),
      tr("Llovía tanto que cancelaron el partido, lo que decepcionó a todos.", ["It was raining so {hard|much|heavily} {that |}they canceled the {game|match}, which disappointed everyone.", "It rained so {hard|much|heavily} {that |}they canceled the {game|match}, which disappointed everyone.", "It was raining so {hard|much|heavily} {that |}the {game|match} was canceled, which disappointed everyone.", "It rained so {hard|much|heavily} {that |}the {game|match} was canceled, which disappointed everyone.", "It was raining so {hard|much|heavily} {that |}they cancelled the {game|match}, which disappointed everyone."],
        "Trap mix: \"so\" + adverb + that, then \", which\" (not *what) for «lo que» commenting on the whole event."),
      tr("No fue culpa mía. Lo único que hice fue abrir el correo.", ["It wasn't my fault. All I did was open the email.", "It wasn't my fault. The only thing I did was open the email.", "It wasn't my fault. All I did was {to open|open} the {email|e-mail|message}."],
        "Trap mix: \"All I did was\" + base verb (not *All what I did)."),
      tr("Aunque el hotel era demasiado caro, lo que más me molestó fue el ruido.", ["{Although|Even though} the hotel was too expensive, what bothered me most was the noise.", "{Although|Even though} the hotel was too expensive, what {bothered|annoyed} me {most|the most} was the noise."],
        "Trap mix: \"although\" + clause (no \"but\"), \"too expensive\" (not *too much), and a what-cleft."),
      mc("Which sentence is correct?", [
        "It was such a good offer that I accepted it immediately.",
        "It was so a good offer that I accepted it immediately.",
        "Was such a good offer that I accepted it immediately.",
        "It was such good offer what I accepted it immediately.",
      ], "\"It was such a\" + adjective + noun + that. English needs the subject \"it\", and \"what\" can't replace \"that\" here."),
      mc("Which sentence is correct?", [
        "What I want is for you to be honest with me.",
        "What I want is that you are honest with me.",
        "What I want it is for you to be honest with me.",
        "All what I want is that you be honest with me.",
      ], "«Lo que quiero es que...» = \"What I want is for you to...\". No extra \"it\", no *all what."),
    ],
  ),
];
