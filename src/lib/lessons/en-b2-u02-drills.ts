// Synced from cheneygross-afk/lengo:src/lib/lessons/en-b2-u02-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise, Lesson } from "./types";

// Required drill lessons for EN-B2 unit u02 (narrative tenses in practice): a short recap, then graded practice.

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
  slug: `en-b2-narrative-practice-unit-drill-${n}`,
  level: "EN-B2",
  number: n,
  title: `Drill: ${title}`,
  summary,
  duration: `${Math.round((exercises.reduce((s, e) => s + SECONDS[e.type], 0) + 40) / 60)} min`,
  sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
  exercises,
});

export const EN_B2_U02_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Translating pasts and hearing them (Talk About Yourself, Sentence by Sentence,
  // Correct the Learner, Minimal Pairs, Dictation)
  // ---------------------------------------------------------------------
  lesson(
    1,
    "One Imperfecto, Four English Tenses",
    "You will be able to translate the Spanish imperfecto, pluscuamperfecto and «llevaba + gerundio» into the right English tense, fix learner errors like *during I was sleeping, and tell had from would in 'd.",
    "Recap: translate the job, not the tense",
    [
      "Ask what the «imperfecto» is doing: an action in progress is past continuous (\"was cooking\"), a habit is \"used to\", \"would\" or the past simple, and a state is the past simple (\"knew\", \"had\"). «Llevaba un año trabajando» is \"had been working for a year\"; «llevaba meses sin verla» is \"hadn't seen her for months\".",
      "\"During\" goes before a noun, \"while\" before a clause. In 'd, look at the next verb: a participle means \"had\" (\"I'd gone\"), a base form means \"would\" (\"I'd go\").",
    ],
    [
      ["When I arrived, my mother was cooking.", "Cuando llegué, mi madre cocinaba."],
      ["I had been working there for a year.", "Llevaba un año trabajando allí."],
      ["While I was sleeping, the dog started to bark.", "Mientras dormía, el perro empezó a ladrar."],
      ["She'd taken a taxi, so she'd arrived early.", "Había tomado un taxi, así que había llegado temprano."],
    ],
    [
      fb("I ___ on a train when my phone rang.", ["was sitting", "was traveling", "was riding"], "[Estaba sentado] en un tren cuando sonó mi celular.",
        "The background to the main event is past continuous. The interruption (\"rang\") is past simple."),
      mc("\"Where were you when you heard the news?\" Which answer sounds most natural?", [
        "I was at work. I was having lunch when my boss told me.",
        "I was at work. I had lunch when my boss told me.",
        "I am at work. I was having lunch when my boss told me.",
        "I was at work. I was having lunch when my boss was telling me.",
      ], "Background in the past continuous (\"was having lunch\"), the main event in the past simple (\"told\"). With two past simples, lunch sounds like a separate event after the news."),
      tr("Estaba agotada porque había trabajado toda la noche.", "I was exhausted because I had {worked|been working} all night.",
        "The night's work came before the moment of the story, so past perfect \"had worked\" (or \"had been working\" to stress the long activity)."),
      fb("How long ___ there when you met him?", ["had you been living", "had you lived"], "¿Cuánto tiempo [llevabas viviendo] allí cuando lo conociste?",
        "«¿Cuánto tiempo llevabas...?» up to a past moment is \"How long had you been + -ing?\". Question order: \"had\" + subject + \"been\"."),
      tr("Llevaba un año trabajando allí.", "I had been working there for {a|one} year.",
        "«Llevaba» + time + gerund = \"had been + -ing + for + time\". Don't translate «llevaba» with *carried or *took."),
      tr("Llevaba meses sin verla.", "I hadn't seen her {for|in} months.",
        "«Llevaba X sin + infinitive» becomes a negative past perfect: \"hadn't seen her for months\" (American English also says \"in months\")."),
      mc("«Cuando llegué, mi madre cocinaba.» Which is correct?", [
        "When I arrived, my mother was cooking.",
        "When I arrived, my mother cooked.",
        "When I arrived, my mother used to cook.",
        "When I arrived, my mother would cook.",
      ], "Test: can you say «estaba cocinando»? Yes, so it's an action in progress: \"was cooking\". \"Cooked\" makes it sound as if she started because you arrived."),
      fb("She ___ the truth, but she didn't say anything.", "knew", "Ella [sabía] la verdad, pero no dijo nada.",
        "«Sabía» describes a state, so the past simple \"knew\". *She was knowing is never correct."),
      tr("Llevaba diez años conociéndola.", "I had known her for ten years.",
        "With a state verb, «llevaba + gerundio» becomes the past perfect simple: \"had known\", never *had been knowing."),
      mc("Which sentence is correct?", [
        "When I was a child, I lived near the sea.",
        "When I was child, I lived near the sea.",
        "When I was a child, I use to live near the sea.",
        "When I was a child, I would live near the sea.",
      ], "\"A child\" needs the article after \"be\" (*when I was child copies «cuando era niño»). \"Would\" can't describe a state like living somewhere, and the past form is \"used to\"."),
      fb("One night, ___ I was sleeping, the dog started to bark.", "while", "Una noche, [mientras] dormía, el perro empezó a ladrar.",
        "A clause (subject + verb: \"I was sleeping\") needs \"while\". \"During\" only goes before a noun: \"during the night\"."),
      tr("Alguien había roto la ventana diez minutos antes.", "Someone had broken the window ten minutes {earlier|before}.",
        "Counting back from a past moment, the time comes first: \"ten minutes earlier\" or \"ten minutes before\". Not *before ten minutes, and not \"ago\", which counts back from now."),
      wo("We had known each other since we were kids.", "Nos conocíamos desde que éramos niños.",
        "State verb \"know\": past perfect simple + \"since\" + the starting point."),
      tr("Durante la reunión, nadie dijo nada.", ["During the meeting, {nobody|no one} said anything.", "{Nobody|No one} said anything during the meeting."],
        "\"During\" + noun (\"the meeting\"). English uses one negative: \"nobody said anything\", not *nobody didn't say nothing."),
      mt("Match each form with its meaning.", [
        ["I'd gone", "había ido"],
        ["I'd go", "iría"],
        ["she'd seen", "había visto"],
        ["she'd see", "vería"],
        ["I'd better", "más vale que"],
        ["I'd rather", "prefiero"],
      ], "'d + participle = \"had\"; 'd + base form = \"would\". \"I'd better\" is \"had better\" and \"I'd rather\" is \"would rather\", both followed by the base form."),
      mc("\"They'd already eaten when we got there.\" What does 'd stand for?", ["had", "would", "did", "could"],
        "\"Eaten\" is a past participle, and \"already\" looks back from a past moment, so 'd = \"had\"."),
      mc("\"She said she'd call me.\" What does 'd stand for?", ["would", "had", "did", "should"],
        "\"Call\" is the base form and \"said\" introduces a future idea seen from the past, so 'd = \"would\"."),
      lc("I'd seen that movie before.", [
        "Había visto esa película antes.",
        "Vería esa película antes.",
        "Vi esa película ayer.",
        "Quisiera ver esa película.",
      ], "\"Seen\" is a participle, so 'd is \"had\": «había visto»."),
      lc("I'd go with you, but I'm working.", [
        "Iría contigo, pero estoy trabajando.",
        "Había ido contigo, pero estaba trabajando.",
        "Fui contigo, pero estaba trabajando.",
        "Voy contigo, pero estoy trabajando.",
      ], "\"Go\" is the base form, so 'd is \"would\": «iría»."),
      fb("You ___ leave now, or you'll miss the bus.", "had better", "[Más vale que] te vayas ya, o vas a perder el autobús.",
        "\"Had better\" (usually \"you'd better\") + base form gives strong advice. It looks past, but it refers to now."),
      tr("Prefiero quedarme en casa esta noche.", "I would rather stay {home|at home|in} tonight.",
        "\"I'd rather\" = \"I would rather\" + base form, no \"to\": *I'd rather to stay is wrong."),
      dc("The police had closed the road by the time we got there.",
        "After a noun, \"had\" isn't written as 'd, but it is pronounced weakly: \"the police /əd/ closed\". Listen for the participle \"closed\"."),
      dc("He'd told his family he would be back by Sunday.",
        "Both meanings of 'd in one sentence: \"He'd told\" (had + participle) and \"would be back\" (would + base form)."),
      dc("They'd been searching for him for two days.",
        "\"They'd been searching\" sounds almost like one word: /ðeɪd bɪn ˈsɜːrtʃɪŋ/. \"Been\" is the quick /bɪn/."),
      sp("I was walking to work when I saw the accident.", "Background in the past continuous, interruption in the past simple. *I walked to work when I saw it would sound like two separate events.",
        "Weak \"was\": /wəz/, almost \"wuz\".", "Say it in English: Iba caminando al trabajo cuando vi el accidente."),
      fb("We ___ for nearly two hours when the train finally arrived.", "had been waiting", "[Llevábamos] casi dos horas [esperando] cuando por fin llegó el tren.",
        "Duration up to a past moment: \"had been waiting\" + \"for nearly two hours\"."),
      tr("Quería irme, pero no sabía cómo decírselo.", "I wanted to leave, but I didn't know how to tell {him|her|them}.",
        "«Quería» and «sabía» are states, so both are past simple: \"wanted\", \"didn't know\"."),
      wo("My parents had already woken up when I went downstairs.", "Mis padres ya se habían despertado cuando bajé.",
        "They woke up before I went down: \"had already woken up\" (participle of \"wake\" is \"woken\")."),
      tr("Cuando bajé, mis padres ya estaban despiertos.", ["When I {went|came} downstairs, my parents were already awake.", "When I {went|came} downstairs, my parents had already woken up."],
        "«Estaban despiertos» is a state: \"were already awake\". You can also express it as an earlier event: \"had already woken up\". Not *already woke up."),
      tr("De pequeño, iba a la playa todos los veranos.", "{As a child|When I was little|When I was a kid|When I was a child}, I {used to go|would go|went} to the beach every summer.",
        "A habit: \"used to go\", \"would go\" or \"went\". The past continuous is not used for habits: *I was going to the beach every summer."),
      mc("Which sentence is correct?", [
        "While we were having dinner, the lights went out.",
        "During we were having dinner, the lights went out.",
        "While the dinner, the lights went out.",
        "During we had dinner, the lights went out.",
      ], "A clause with a verb needs \"while\". \"During\" needs a noun: \"during dinner\"."),
      tr("No habíamos comido nada desde el desayuno.", ["We hadn't eaten anything since breakfast.", "We had eaten nothing since breakfast."],
        "Pluscuamperfecto maps to the past perfect: \"hadn't eaten\". \"Since\" + a starting point (\"breakfast\")."),
      sp("I'd never been on a plane before that trip.", "'d + \"been\" (a participle) = \"had\": \"I had never been\". Experience up to a moment in the past.",
        "Say \"I'd\" clearly before \"never\": /aɪd ˈnevər/.", "Say it in English: Nunca me había subido a un avión antes de ese viaje."),
      tr("Diez minutos después, llegó la policía.", "{Ten minutes later|Ten minutes after that}, the police arrived.",
        "Counting forward in a story: \"ten minutes later\". \"The police\" is plural in English: \"the police arrive / are\"."),
      fb("I ___ the answer, so I kept quiet.", "didn't know", "[No sabía] la respuesta, así que me quedé callado.",
        "A state in the past: \"didn't know\". *I wasn't knowing is a direct copy of the imperfect."),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Patterns, time words, memories and life stories, plus the whole unit
  // (Pattern Practice, Quick-fire Round, Childhood, Biography, Spiral Review)
  // ---------------------------------------------------------------------
  lesson(
    2,
    "By the Time, While, For and Life Stories",
    "You will be able to use by the time and had been + -ing for automatically, choose between while, during, for and until, tell childhood memories and life stories, and switch correctly between narratives and the present perfect.",
    "Recap: patterns and time words",
    [
      "\"By the time\" + past simple, + past perfect: \"By the time I got there, they had left\". \"Had been + -ing + for + time\" is «llevaba X haciendo»: verb first, then the time.",
      "\"While\" + clause, \"during\" + noun, \"for\" + length of time, \"until\" for something that continued up to a moment. Counted repetitions take the past simple, not \"used to\"; and «llevo» (up to now) is \"have been\", «llevaba» (up to then) is \"had been\".",
    ],
    [
      ["By the time the movie ended, I had fallen asleep.", "Para cuando terminó la película, ya me había dormido."],
      ["She had been teaching for twenty years when she retired.", "Llevaba veinte años enseñando cuando se jubiló."],
      ["I lived in Monterrey for three years.", "Viví en Monterrey durante tres años."],
      ["She went on to become a famous architect.", "Después llegó a ser una arquitecta famosa."],
    ],
    [
      fb("By the time I got home, everyone ___ to bed.", ["had gone", "had already gone"], "Cuando llegué a casa, todos [ya se habían ido] a la cama.",
        "The fixed pattern: \"by the time\" + past simple (\"got\"), then the past perfect (\"had gone\")."),
      mc("By the time we ___, he still hadn't arrived.", ["left", "had left", "were leaving", "have left"],
        "Only the main clause takes the past perfect. After \"by the time\", use the past simple: \"By the time we left\"."),
      tr("Cuando nos fuimos, todavía no había llegado.", ["By the time we left, {he|she} still hadn't arrived.", "When we left, {he|she} {still hadn't arrived|hadn't arrived yet}."],
        "The negative pattern: \"By the time we left, he still hadn't arrived\". «Todavía no» = \"still hadn't\" (before the verb) or \"hadn't ... yet\" (at the end)."),
      fb("She ___ there for ten years when the company closed.", "had been working", "[Llevaba] diez años [trabajando] allí cuando cerró la empresa.",
        "\"Had been + -ing + for + time\". Keep the English order: verb, then \"for ten years\", never *had been ten years working."),
      wo("By the time the bus came, we had been waiting for an hour.", "Cuando llegó el autobús, llevábamos una hora esperando.",
        "Both patterns together: \"by the time\" + past simple, then \"had been + -ing + for\"."),
      mc("Which sentence is correct?", [
        "He had been studying for three hours.",
        "He had been three hours studying.",
        "He had been studying since three hours.",
        "He was studying since three hours.",
      ], "The verb comes before the time, and a length of time takes \"for\". \"Since\" needs a starting point: \"since nine o'clock\"."),
      fb("I lived in Chile ___ three years.", "for", "Viví en Chile [durante] tres años.",
        "How long something lasted is \"for\" + a length of time. *during three years is a direct translation of «durante»."),
      fb("Somebody called ___ the meeting.", "during", "Alguien llamó [durante] la reunión.",
        "\"During\" + a noun (\"the meeting\") says when something happened inside a period."),
      mc("I fell asleep ___ I was watching the movie.", ["while", "during", "for", "by the time"],
        "A clause (\"I was watching\") needs the conjunction \"while\". \"During\" would need a noun: \"during the movie\"."),
      tr("Esperé hasta que llegó.", "I waited until {he|she} {arrived|came|got here|got there}.",
        "\"Until\" («hasta que») = the waiting continued up to that moment. \"By the time\" would mean something was already finished."),
      tr("Para cuando llegó, yo ya me había ido.", "By the time {he|she} {arrived|got there|got here|came}, I had {already |}{left|gone}.",
        "«Para cuando» = \"by the time\" + past simple; my leaving was already finished, so past perfect."),
      fb("We ___ to Disneyland three times when I was a kid.", "went", "[Fuimos] a Disneyland tres veces cuando era niño.",
        "When you say how many times, use the past simple. *We used to go three times is wrong: \"used to\" doesn't count repetitions."),
      mc("We ___ in a small village when I was little.", ["used to live", "would live", "use to live", "were used to live"],
        "Living somewhere is a state: \"used to live\" (or \"lived\"), never \"would\". \"Use to\" without -d appears only after \"did\"."),
      tr("Los domingos, mi abuelo nos llevaba al parque.", "On Sundays, my grandfather {would take|used to take|took} us to the park.",
        "A repeated action in a memory: \"would take\", \"used to take\" or \"took\". \"Would\" here is a past habit, not a conditional."),
      tr("Nunca había dormido fuera de casa, así que tenía miedo.", "I had never slept away from home, so I was {scared|afraid|frightened}.",
        "The past perfect explains a feeling in a memory: \"had never slept\". «Tener miedo» is \"be scared\", not *have fear."),
      fb("Frida Kahlo ___ in Mexico City in 1907.", "was born", "Frida Kahlo [nació] en la Ciudad de México en 1907.",
        "\"Be born\" is passive, so it needs \"was\": \"was born\". *She born and *she borned are mistakes."),
      tr("Se mudó a Nueva York a los veinticuatro años.", [
        "{She|He} moved to New York at the age of {twenty-four|24}.",
        "She moved to New York when she was {twenty-four|24}.",
        "He moved to New York when he was {twenty-four|24}.",
      ], "Ages: \"at the age of 24\" or \"when she was 24\". Never *with 24 years."),
      mc("«Con el tiempo, llegó a ser profesora.» Which is correct?", [
        "She eventually became a professor.",
        "She possibly became a professor.",
        "At the end she became a professor.",
        "She became eventually a professor.",
      ], "\"Eventually\" = «con el tiempo, al final», and it goes before the main verb. It never means «posiblemente», and \"at the end\" needs \"of\" + noun."),
      fb("By then, she ___ a Nobel Prize.", ["had already won", "had won"], "Para entonces, [ya había ganado] un Premio Nobel.",
        "\"By then\" looks back from a past point and takes the past perfect."),
      tr("Mientras estudiaba en Bogotá, conoció a su esposo.", "While she was studying in Bogota, she met her husband.",
        "Life stories use the past continuous for what was going on (\"was studying\") and the past simple for the event (\"met\")."),
      tr("Después llegó a ganar dos premios más.", ["{She|He} went on to win two more {awards|prizes}.", "Later{,|} {she|he} won two more {awards|prizes}."],
        "\"Go on to\" + verb = «después llegó a»: the next step in a life story."),
      mt("Match each linker with its meaning.", [
        ["later on", "más adelante"],
        ["by then", "para entonces"],
        ["eventually", "con el tiempo, al final"],
        ["at the age of", "a la edad de"],
        ["went on to", "después llegó a"],
      ], "These linkers move a biography forward. \"By then\" usually takes the past perfect, and \"eventually\" is a false friend."),
      fb("I ___ here for two years, and I love it.", ["have lived", "have been living"], "[Llevo] dos años [viviendo] aquí y me encanta.",
        "«Llevo» measures up to now, so the present perfect: \"have lived\" or \"have been living\". *I live here for two years is wrong."),
      mc("Which sentence means «Llevo una hora esperando»?", [
        "I've been waiting for an hour.",
        "I had been waiting for an hour.",
        "I was waiting for an hour.",
        "I waited for an hour.",
      ], "«Llevo» is up to NOW: present perfect continuous. «Llevaba» would be \"had been waiting\"."),
      tr("¿Cuánto tiempo llevas estudiando inglés?", "How long have you been studying English?",
        "«¿Cuánto tiempo llevas + gerundio?» = \"How long have you been + -ing?\"."),
      dc("By the time we got to the beach, the sun had gone down.",
        "The pattern you drilled: \"by the time\" + past simple, then the past perfect \"had gone down\"."),
      dc("She had been working there for ten years when the company closed.",
        "\"Had been working\" + \"for ten years\". \"Been\" is short /bɪn/; \"for\" is weak /fər/."),
      lc("We'd been driving for hours when we finally saw the lights of the town.", [
        "Llevábamos horas manejando cuando por fin vimos las luces del pueblo.",
        "Íbamos a manejar durante horas hasta ver las luces del pueblo.",
        "Manejaríamos horas para ver las luces del pueblo.",
        "Llevamos horas manejando y por fin vemos las luces del pueblo.",
      ], "'d + \"been\" = \"had been\": duration up to a past moment, «llevábamos»."),
      sp("By the time the bus came, we had been waiting for an hour.", "Pattern 1 + pattern 2: \"by the time\" + past simple, then \"had been + -ing + for\".",
        "Group it: \"By the time the bus came / we'd been waiting / for an hour\".", "Say it in English: Cuando llegó el autobús, llevábamos una hora esperando."),
      wo("We used to play soccer in the street every afternoon.", "Jugábamos fútbol en la calle todas las tardes.",
        "\"Used to\" + base form for a past habit; place and time phrases at the end."),
      tr("¿Alguna vez has estado en México? Sí, fui en 2019.", "Have you ever been to Mexico? Yes, I went {there |}in 2019.",
        "Experience first (present perfect, no time), then the story starts with a finished time (\"in 2019\"), so the past simple. Not *I have been there in 2019."),
      tr("Cuando era niña, no me gustaba el pescado.", ["When I was {a child|a kid|little|a girl}, I didn't like fish.", "When I was {a child|a kid|little|a girl}, I didn't use to like fish."],
        "A past state: \"didn't like\" or \"didn't use to like\" (no -d after \"did\"). Remember the article: \"when I was a child\"."),
      tr("Durante tres semanas, no supimos nada de él.", ["For three weeks, we didn't hear anything from him.", "We didn't hear anything from him for three weeks.", "We heard nothing from him for three weeks."],
        "«Durante» + length of time = \"for\", never *during three weeks. «Saber de alguien» is \"hear from someone\"."),
      mc("Which sentence is correct?", [
        "While I was waiting, I realized I had left my wallet at home.",
        "During I was waiting, I realized I had left my wallet at home.",
        "While I was waiting, I was realizing I had left my wallet at home.",
        "While I was waiting, I realized I have left my wallet at home.",
      ], "\"While\" + clause, \"realized\" as a single event in the past simple, and \"had left\" for the earlier event. The whole unit in one sentence."),
      sp("We would go fishing every Sunday morning.", "\"Would\" + base form for a repeated action in a memory, like «íbamos a pescar».",
        "\"We would\" often becomes \"we'd\": /wiːd ɡoʊ/.", "Say it in English: Íbamos a pescar todos los domingos por la mañana."),
    ],
  ),
];
