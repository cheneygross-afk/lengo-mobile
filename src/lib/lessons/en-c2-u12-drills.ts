// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u12-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u12 (reading modes, stance, interviews, lectures, summaries and headlines): a short recap, then graded practice.

type Ex = Lesson["exercises"][number];

const SECONDS: Record<string, number> = {
  "multiple-choice": 15, "multi-select": 20, "listen-choose": 20, "fill-blank": 20, translate: 30,
  "word-order": 25, matching: 30, dictation: 30, speak: 25, write: 0,
};

const tr = (source: string, answer: string, altAnswers: string[], explanation: string): Ex =>
  altAnswers.length
    ? { type: "translate", direction: "es-en", prompt: "Translate into English.", source, answer, altAnswers, explanation }
    : { type: "translate", direction: "es-en", prompt: "Translate into English.", source, answer, explanation };

const fb = (sentence: string, answer: string, en: string, altAnswers: string[], explanation: string): Ex =>
  altAnswers.length
    ? { type: "fill-blank", prompt: "Write the bold words in English.", sentence, answer, en, altAnswers, explanation }
    : { type: "fill-blank", prompt: "Write the bold words in English.", sentence, answer, en, explanation };

const fe = (prompt: string, sentence: string, answer: string, altAnswers: string[], explanation: string): Ex =>
  altAnswers.length
    ? { type: "fill-blank", prompt, sentence, answer, altAnswers, explanation }
    : { type: "fill-blank", prompt, sentence, answer, explanation };

const mc = (question: string, options: string[], correctIndex: number, explanation: string): Ex => ({
  type: "multiple-choice", question, options, correctIndex, explanation,
});

const wo = (sentence: string, translation: string, explanation: string, alts: string[] = []): Ex =>
  alts.length
    ? { type: "word-order", prompt: "Put the words in order.", words: sentence.split(" "), translation, altOrders: alts.map((a) => a.split(" ")), explanation }
    : { type: "word-order", prompt: "Put the words in order.", words: sentence.split(" "), translation, explanation };

const dt = (audio: string, explanation: string): Ex => ({ type: "dictation", audio, explanation });

const lc = (audio: string, question: string, options: string[], correctIndex: number, explanation: string): Ex => ({
  type: "listen-choose", audio, question, options, correctIndex, explanation,
});

const sp = (text: string, spanish: string, tip: string, explanation: string): Ex => ({
  type: "speak", text, prompt: `Say in English: «${spanish}»`, tip, explanation,
});

const mt = (instructions: string, pairs: [string, string][], explanation: string): Ex => ({
  type: "matching", instructions, pairs: pairs.map(([left, right]) => ({ left, right })), explanation,
});

const drill = (
  slug: string,
  title: string,
  summary: string,
  heading: string,
  body: string[],
  examples: [string, string][],
  exercises: Ex[],
): Lesson => {
  const seconds = exercises.reduce((t, e) => t + SECONDS[e.type], 0) + 45;
  return {
    slug,
    level: "EN-C2",
    number: 1,
    title,
    summary,
    duration: `${Math.round(seconds / 60)} min`,
    sections: [{ heading, body, examples: examples.map(([es, en]) => ({ es, en })) }],
    exercises,
  };
};

export const EN_C2_U12_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Reading modes, stance, interviews and lecture note-taking
  // ---------------------------------------------------------------------
  drill(
    "en-c2-strategies-headlines-unit-drill-1",
    "Drill: Reading Modes, Stance, Interviews and Lectures",
    "Choose between skimming, scanning and close reading, read stance in hedges, distancing words and reporting verbs, follow challenges and evasions in interviews, and use lecture signposts and note-taking abbreviations correctly.",
    "Recap: read for the task, hear the structure",
    [
      "Skim for the gist (headings, topic sentences, \"in short\"), scan a text \"for\" a specific detail (watch for paraphrases and for 1,500 vs 1.5), and read closely where meaning hangs on \"hardly\" or \"largely\". Stance shows in hedges, distancing (\"reportedly\", \"alleged\", \"so-called\") and reporting verbs: \"claimed\" doubts, \"conceded\" admits, \"pointed out\" accepts.",
      "In interviews, let fillers pass, keep the second version after a false start, and notice challenges (\"So you're saying...?\") and evasions (\"I'm not going to speculate\"). In lectures, signposts mark structure (\"I'd like to turn now to\"), emphasis (\"The key point here is\") and digressions (\"Incidentally\"); \"e.g.\" gives examples, \"i.e.\" restates.",
    ],
    [
      ["I skimmed the article on the train.", "Leí el artículo por encima en el tren."],
      ["The company is reportedly in talks with a rival.", "La empresa estaría negociando con un competidor."],
      ["I wouldn't put it quite like that.", "Yo no lo diría exactamente así."],
      ["I'd like to turn now to the second cause.", "Paso ahora a la segunda causa."],
    ],
    [
      mc(
        "You need only the date of the next board meeting from a 40-page report. What should you do?",
        [
          "Scan it",
          "Skim it",
          "Read it closely from the start",
          "Pore over every section",
        ],
        0,
        "Scanning means searching for one specific piece of information, such as a date. Skimming gives the gist, and close reading would waste time here.",
      ),
      tr(
        "Leí el artículo por encima en el autobús.",
        "I skimmed the article on the bus.",
        [
          "I skimmed through the article on the bus.",
          "I skim-read the article on the bus.",
          "I skimmed over the article on the bus.",
        ],
        "«Leer por encima» or «en diagonal» is \"skim\" (or \"skim through\", \"skim-read\"). *I read the article over is not idiomatic.",
      ),
      fb(
        "___ the guest list for your name and sign next to it.",
        "Scan",
        "[Busca] tu nombre en la lista de invitados y firma al lado.",
        ["Check", "Search", "Look through"],
        "\"Scan\" is followed by the place you search, then \"for\" and the thing you want: \"scan the list for your name\".",
      ),
      tr(
        "Busca en el contrato la fecha de vencimiento.",
        "Scan the contract for the expiration date.",
        [
          "Scan the contract for the expiry date.",
          "Search the contract for the expiration date.",
          "Check the contract for the expiration date.",
          "Look through the contract for the expiration date.",
          "Scan the contract for the due date.",
        ],
        "Spanish puts the thing first («busca la fecha en el contrato»); English \"scan\" takes the place as its object and the target with \"for\".",
      ),
      lc(
        "In a nutshell, the merger will cost more than it saves.",
        "What does \"in a nutshell\" tell a reader who is skimming?",
        [
          "A conclusion or summary follows",
          "An example follows",
          "The topic is about to change",
          "A quotation follows",
        ],
        0,
        "\"In a nutshell\", \"in short\" and \"the upshot is\" announce a conclusion: exactly what a skimmer is looking for.",
      ),
      mc(
        "A report says the project will cost 2.5 billion dollars. In Spanish, that is:",
        [
          "2.500 millones de dólares",
          "2,5 billones de dólares",
          "25.000 millones de dólares",
          "2.500 billones de dólares",
        ],
        0,
        "English uses a point for decimals and \"a billion\" is «mil millones». So 2.5 billion is 2.500 millones. «Un billón» is a trillion in English.",
      ),
      dt(
        "Sales climbed by 3.7 percent, to 1,250 units a week.",
        "In English the decimal separator is a point (3.7) and the thousands separator is a comma (1,250), the opposite of Spanish usage.",
      ),
      mc(
        "\"Hardly anyone supported the plan.\" Which paraphrase is accurate?",
        [
          "Very few people supported the plan.",
          "Almost everyone supported the plan.",
          "People supported the plan with great difficulty.",
          "Nobody at all supported the plan.",
        ],
        0,
        "\"Hardly anyone\" means almost nobody. Close reading matters: \"hardly anyone\" and \"almost everyone\" share their structure and say the opposite. \"Hardly\" never means «duramente».",
      ),
      fb(
        "The lawyer ___ every clause of the lease before advising us.",
        "pored over",
        "La abogada [estudió a fondo] cada cláusula del contrato de alquiler antes de asesorarnos.",
        [],
        "\"Pore over\" means to study with great attention. Don't confuse it with \"pour\" (verter), which sounds the same.",
      ),
      tr(
        "Hojeé un catálogo mientras esperaba.",
        "I leafed through a catalog while I was waiting.",
        [
          "I leafed through a catalog while I waited.",
          "I flicked through a catalog while I was waiting.",
          "I flicked through a catalog while I waited.",
          "I flipped through a catalog while I was waiting.",
          "I flipped through a catalog while I waited.",
          "I browsed through a catalog while I was waiting.",
        ],
        "«Hojear» is \"leaf through\" or \"flick through\" (\"flip through\" in American speech). Note the spelling: American \"catalog\", British \"catalogue\".",
      ),
      tr(
        "Por lo visto, nadie había revisado los datos.",
        "Evidently, nobody had checked the data.",
        [
          "Evidently nobody had checked the data.",
          "Evidently, no one had checked the data.",
          "Apparently, nobody had checked the data.",
          "Apparently, no one had checked the data.",
          "Apparently nobody had checked the data.",
        ],
        "English \"evidently\" usually means «por lo visto», a conclusion drawn from evidence. For «evidentemente» in the sense of «claro», use \"obviously\" or \"clearly\".",
      ),
      tr(
        "La empresa estaría negociando la compra de un competidor.",
        "The company is reportedly negotiating to buy a competitor.",
        [
          "The company is reportedly negotiating the purchase of a competitor.",
          "The company is said to be negotiating to buy a competitor.",
          "The company is said to be negotiating the purchase of a competitor.",
          "The company is reported to be negotiating to buy a competitor.",
          "Reportedly, the company is negotiating to buy a competitor.",
          "The company is reportedly in talks to buy a competitor.",
        ],
        "Spanish news uses the conditional for unconfirmed reports. English never does: *The company would be negotiating sounds hypothetical. Use \"reportedly\" or \"is said to be\".",
      ),
      fb(
        "The ___ thief was arrested at the airport on Sunday.",
        "alleged",
        "El [presunto] ladrón fue detenido en el aeropuerto el domingo.",
        ["suspected"],
        "«Presunto» in crime reporting is \"alleged\" or \"suspected\". *The presumed thief is a calque that sounds odd in English news.",
      ),
      mc(
        "Which reporting verb shows that the writer accepts the reported statement as true?",
        [
          "She pointed out that the figures were accurate.",
          "She claimed that the figures were accurate.",
          "She insisted that the figures were accurate.",
          "She maintained that the figures were accurate.",
        ],
        0,
        "\"Pointed out\", \"noted\" and \"showed\" signal agreement. \"Claimed\", \"insisted\" and \"maintained\" keep the writer at a distance: the facts are identical, the stance is opposite.",
      ),
      tr(
        "La ministra reconoció que el plan había sido demasiado ambicioso.",
        "The minister conceded that the plan had been too ambitious.",
        [
          "The minister conceded the plan had been too ambitious.",
          "The minister admitted that the plan had been too ambitious.",
          "The minister admitted the plan had been too ambitious.",
          "The minister acknowledged that the plan had been too ambitious.",
          "The minister acknowledged the plan had been too ambitious.",
          "The minister admitted that the plan was too ambitious.",
        ],
        "\"Conceded\" and \"admitted\" mark a reluctant or damaging admission. *Recognized that is possible but less natural for a concession. Note the backshift to \"had been\".",
      ),
      wo(
        "Critics maintained that the survey had been badly designed.",
        "Los críticos sostenían que la encuesta estaba mal diseñada.",
        "\"Maintained\" reports the critics' view while keeping the writer at a distance. The reported clause backshifts to \"had been\".",
      ),
      mt(
        "Match each word for tone with its Spanish equivalent.",
        [
          ["wry", "socarrón"],
          ["scathing", "demoledor"],
          ["even-handed", "ecuánime"],
          ["wistful", "melancólico"],
          ["deadpan", "con cara seria, sin mostrar que bromea"],
        ],
        "Mastery tasks expect precise tone words, not just \"positive\" or \"negative\". \"Wry\" is gently mocking; \"scathing\" is fierce criticism.",
      ),
      fb(
        "The ___ reform only renamed the department.",
        "so-called",
        "La [supuesta] reforma solo le cambió el nombre al departamento.",
        ["supposed"],
        "\"So-called\" distances the writer from the label: it is a reform in name only. Scare quotes (a \"reform\") do the same job in writing.",
      ),
      mc(
        "In an interview, a guest says: \"We were going to, well, the plan was to open in March.\" What should go in your notes?",
        [
          "The plan was to open in March.",
          "They were going to open well.",
          "They opened in March.",
          "They had no plan.",
        ],
        0,
        "After a false start, the second version is the one that counts. \"Well\" here is a filler, not an adverb.",
      ),
      tr(
        "O sea, nadie esperaba que funcionara tan rápido.",
        "I mean, nobody expected it to work so fast.",
        [
          "I mean, nobody expected it to work so quickly.",
          "I mean, no one expected it to work so fast.",
          "I mean, no one expected it to work so quickly.",
          "I mean, nobody expected it to work that fast.",
          "I mean, nobody expected it to work that quickly.",
          "In other words, nobody expected it to work so fast.",
          "In other words, nobody expected it to work so quickly.",
        ],
        "«O sea» is \"I mean\" or \"in other words\", never word for word. Also \"expect someone/something to do\", not *expected that it worked.",
      ),
      tr(
        "Perdone que lo interrumpa, pero esa no era la pregunta.",
        "Sorry to interrupt, but that wasn't the question.",
        [
          "Sorry to interrupt, but that was not the question.",
          "I'm sorry to interrupt, but that wasn't the question.",
          "Sorry to interrupt you, but that wasn't the question.",
          "I'm sorry to interrupt you, but that wasn't the question.",
        ],
        "«Perdone que lo interrumpa» is \"Sorry to interrupt\" (infinitive), not *Sorry that I interrupt you.",
      ),
      fb(
        "Please, ___ me out before you decide.",
        "hear",
        "Por favor, [escúcheme hasta el final] antes de decidir.",
        [],
        "\"Hear me out\" is how guests defend their turn, like \"Let me finish\" or \"If I could just finish\".",
      ),
      lc(
        "I wouldn't put it quite like that.",
        "How firm is this denial?",
        [
          "Soft: it may half-admit the point",
          "Completely firm: a total rejection",
          "It is full agreement",
          "It is a question to the interviewer",
        ],
        0,
        "\"I don't accept that\" is a firm denial; \"I wouldn't put it quite like that\" is a soft one that often concedes part of the point.",
      ),
      tr(
        "Esquivó la pregunta sobre los despidos.",
        "He sidestepped the question about the layoffs.",
        [
          "She sidestepped the question about the layoffs.",
          "He dodged the question about the layoffs.",
          "She dodged the question about the layoffs.",
          "He ducked the question about the layoffs.",
          "She ducked the question about the layoffs.",
          "He avoided the question about the layoffs.",
          "She avoided the question about the layoffs.",
          "He sidestepped the question about the job cuts.",
        ],
        "\"Sidestep\", \"dodge\" and \"duck\" a question all mean «esquivar». They are evaluative: in a neutral summary you would write \"declined to answer\".",
      ),
      fb(
        "I'd like to ___ now to the social consequences of the reform.",
        "turn",
        "[Paso] ahora a las consecuencias sociales de la reforma.",
        ["move on", "go on"],
        "«Paso a» in a lecture is \"I'd like to turn now to\" or \"Moving on to\", never *I pass to. It is a cue to start a new heading in your notes.",
      ),
      tr(
        "Lo importante aquí es que nadie verificó las fuentes.",
        "The key point here is that nobody checked the sources.",
        [
          "The key point here is that no one checked the sources.",
          "The key point here is that nobody verified the sources.",
          "The important point here is that nobody checked the sources.",
          "The important thing here is that nobody checked the sources.",
          "The important thing here is that no one checked the sources.",
          "What's important here is that nobody checked the sources.",
        ],
        "English needs a noun after the adjective: \"the key point\", \"the important thing\". *The important here is copies «lo importante» word for word.",
      ),
      mc(
        "Choose the right abbreviation: \"Bring a photo ID, ___ a passport or a driver's license.\"",
        [
          "e.g.",
          "i.e.",
          "cf.",
          "N.B.",
        ],
        0,
        "\"E.g.\" introduces examples (a passport is one kind of photo ID); \"i.e.\" introduces an exact restatement. Spanish speakers often swap them.",
      ),
      tr(
        "Pasa los apuntes a limpio antes del examen.",
        "Write up your notes before the exam.",
        [
          "Write your notes up before the exam.",
          "Write up your notes before the test.",
          "Write your notes up before the test.",
        ],
        "«Pasar los apuntes a limpio» is \"write up your notes\". «Tomar apuntes» is \"take notes\"; \"take note of\" means «prestar atención».",
      ),
      dt(
        "Incidentally, the first version of the law was written in 1910.",
        "\"Incidentally\" opens a digression: in your notes it goes in the margin or nowhere. Listen for the weak \"of\" /əv/ and \"was\" /wəz/.",
      ),
      dt(
        "To sum up, there are two main causes and one major consequence.",
        "\"To sum up\" signals the summary. Stress falls on \"sum\", \"two\", \"causes\", \"one\" and \"consequence\".",
      ),
      sp(
        "Can I just stop you there? With respect, that wasn't my question.",
        "¿Puedo interrumpirlo un momento? Con todo respeto, esa no era mi pregunta.",
        "Rise on \"there\"; stress \"respect\" and \"my\".",
        "Typical interviewer moves: a polite interruption, then \"with respect\", which in broadcasting often introduces open disagreement.",
      ),
      sp(
        "First of all, I'd like to look at the causes; then I'll turn to the solutions.",
        "En primer lugar, quiero analizar las causas; después pasaré a las soluciones.",
        "\"First of all\" links into \"firs-tuh-vall\"; stress \"causes\" and \"solutions\".",
        "A lecturer's road signs: \"First of all\" and \"I'll turn to\" each tell the note-taker to start a new heading.",
      ),
      wo(
        "The singer is said to be planning a world tour.",
        "Se dice que el cantante está planeando una gira mundial.",
        "Passive reporting structure: subject + \"is said to be\" + -ing. It is the English answer to the Spanish journalistic conditional.",
      ),
      mc(
        "Which sentence is correct in English news style?",
        [
          "The airline is reportedly considering new routes to Asia.",
          "The airline would be considering new routes to Asia.",
          "The presumed airline is considering new routes to Asia.",
          "Evidently, the airline would be considering new routes to Asia.",
        ],
        0,
        "Unconfirmed news takes \"reportedly\" or \"is said to\", never the Spanish-style conditional. \"Presumed\" is not used for «presunto», and \"evidently\" plus a conditional mixes two errors.",
      ),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Interview summary, lecture notes, two-text summary, headlines,
  // plus a unit mix
  // ---------------------------------------------------------------------
  drill(
    "en-c2-strategies-headlines-unit-drill-2",
    "Drill: Neutral Summaries and Headlines",
    "Report an interview neutrally (declined to, acknowledged, Asked whether...), turn lecture notes into sentences, merge and paraphrase two texts without copying or judging, and decode and rewrite headlines.",
    "Recap: report, condense, decode",
    [
      "A neutral summary reports and never judges: \"argued\", \"maintained\", \"acknowledged\", \"declined to rule out\", \"Asked whether..., he said...\"; avoid \"dodged\" or \"weakly claimed\". From lecture notes, restore the articles and verbs, keep the lecturer's emphasis and limitations, and drop digressions. In a two-text summary, merge the shared points (\"Both writers...\", \"Whereas...\"), paraphrase with new structures, cut examples and leave your opinion out.",
      "Headlines drop articles and \"be\", use the present simple for recent events (\"Minister quits\"), \"to\" + verb for the future (\"PM to visit\") and a bare participle for the passive (\"Four hurt\"). Short verbs such as \"axe\", \"probe\", \"slam\", \"vow\", \"curb\" and \"spark\" become neutral English when you rewrite.",
    ],
    [
      ["Asked about the budget, she declined to give a figure.", "Preguntada por el presupuesto, no quiso dar una cifra."],
      ["Whereas the first text stresses the costs, the second focuses on the benefits.", "Mientras que el primer texto destaca los costos, el segundo se centra en los beneficios."],
      ["Union slams pay deal", "El sindicato critica duramente el acuerdo salarial."],
      ["The union has strongly criticized the pay deal.", "El sindicato ha criticado duramente el acuerdo salarial."],
    ],
    [
      tr(
        "¿Puede descartar una subida de precios?",
        "Can you rule out a price increase?",
        [
          "Could you rule out a price increase?",
          "Can you rule out a price rise?",
          "Could you rule out a price rise?",
          "Can you rule out an increase in prices?",
          "Can you rule out a rise in prices?",
          "Can you rule out raising prices?",
        ],
        "«Descartar» a possibility is \"rule out\". It is the interviewer's classic narrow yes/no question, designed to pin the guest down.",
      ),
      fb(
        "The mayor ___ to rule out further cuts.",
        "declined",
        "La alcaldesa [no quiso] descartar más recortes.",
        ["refused"],
        "\"Declined to\" reports a non-answer neutrally. \"Dodged\" or \"ducked\" would add the writer's judgment, which a neutral summary avoids.",
      ),
      mc(
        "Which sentence belongs in a neutral summary of the interview?",
        [
          "He declined to say whether the fee would rise.",
          "He dodged the question about the fee, as usual.",
          "He weakly claimed that the fee was fair.",
          "He finally admitted that the fee would rise.",
        ],
        0,
        "\"Declined to say whether\" describes the non-answer factually. \"Dodged\", \"weakly claimed\" and \"as usual\" are judgments, and \"admitted\" reports something he never said.",
      ),
      mc(
        "The commissioner first says \"Every cent goes into transport\", then \"transport broadly, which includes road maintenance, but mostly buses\". What has happened?",
        [
          "He has quietly weakened his original claim",
          "He has made his original claim stronger",
          "He has refused to answer the question",
          "He has changed the topic to road safety",
        ],
        0,
        "\"Broadly\" and \"mostly\" are hedges: he concedes that not every cent goes to public transport. A good summary keeps this detail.",
      ),
      tr(
        "Preguntado por si habría más despidos, el director no quiso descartarlo.",
        "Asked whether there would be more layoffs, the director declined to rule it out.",
        [
          "Asked if there would be more layoffs, the director declined to rule it out.",
          "Asked whether there would be more layoffs, the director wouldn't rule it out.",
          "Asked if there would be more layoffs, the director wouldn't rule it out.",
          "Asked whether there would be further layoffs, the director declined to rule it out.",
          "Asked whether there would be more job cuts, the director declined to rule it out.",
          "Asked whether there would be more layoffs, the director refused to rule it out.",
        ],
        "The participle clause \"Asked whether...\" reports the question and the answer in one sentence. Its subject is the main subject: the director was asked. Note the backshift \"would be\".",
      ),
      tr(
        "La comisionada reconoció que el proyecto se había retrasado.",
        "The commissioner acknowledged that the project had been delayed.",
        [
          "The commissioner acknowledged the project had been delayed.",
          "The commissioner acknowledged that the project was behind schedule.",
          "The commissioner conceded that the project had been delayed.",
          "The commissioner admitted that the project had been delayed.",
          "The commissioner admitted the project had been delayed.",
        ],
        "\"Acknowledged\" is the neutral verb for a clear concession. The past perfect \"had been delayed\" is the natural backshift in a past report.",
      ),
      lc(
        "So that's a no. You can't rule it out.",
        "What is the interviewer doing?",
        [
          "Stating the implication of an evasive answer",
          "Agreeing with the guest",
          "Changing the subject",
          "Asking a new question about costs",
        ],
        0,
        "After a non-answer, the interviewer reformulates it herself to pin the guest down. \"So that's a no\" turns the evasion into a clear position.",
      ),
      wo(
        "She argued that the new fee would reduce pollution in the center.",
        "Argumentó que la nueva tarifa reduciría la contaminación en el centro.",
        "Neutral reporting verb + \"that\" + backshifted clause: \"will reduce\" becomes \"would reduce\".",
      ),
      fe(
        "Complete the lecturer's definition with the signpost that introduces it.",
        "___, a heat wave is a long period of unusually hot weather.",
        "Put simply",
        ["Simply put", "In simple terms"],
        "\"Put simply\" introduces a definition, which goes straight into your notes.",
      ),
      dt(
        "Bear in mind, though, that green roofs are expensive to maintain.",
        "\"Bear in mind, though\" introduces a limitation, which examiners love: note it with \"BUT\" or a minus sign. \"Bear\" sounds like \"bare\".",
      ),
      tr(
        "Los techos blancos pueden reducir la factura de luz hasta un 20 %.",
        "White roofs can cut electricity bills by up to 20%.",
        [
          "White roofs can reduce electricity bills by up to 20%.",
          "White roofs can lower electricity bills by up to 20%.",
          "White roofs can cut electricity bills by as much as 20%.",
          "White roofs can reduce electricity bills by as much as 20%.",
          "White roofs can cut electricity bills by up to 20 percent.",
          "White roofs can reduce electricity bills by up to 20 percent.",
          "White roofs can cut the electricity bill by up to 20%.",
        ],
        "«Hasta un 20 %» as an upper limit is \"by up to 20%\" or \"by as much as 20%\". Note \"by\" for the size of a change, and no space before % in English.",
      ),
      fe(
        "Expand the note into a full sentence: \"rents ↑ b/c tourism\"",
        "Rents ___ because of tourism.",
        "rose",
        ["have risen", "went up", "have gone up", "increased", "have increased", "are rising", "have been rising"],
        "Expanding notes means restoring the verb and choosing a tense; the arrow means an increase and \"b/c\" is \"because\". \"Because of\" is followed by a noun, not a clause.",
      ),
      mc(
        "Which sentence belongs in your written summary of the lecture?",
        [
          "The lecturer noted that trees need water, which may be scarce.",
          "Incidentally, the ancient Greeks painted their houses white.",
          "I personally think cool roofs are the best solution.",
          "UHI ↑ b/c AC + cars.",
        ],
        0,
        "A summary keeps limitations and reports the lecturer's points in full sentences. Digressions, your own opinions and raw notes stay out.",
      ),
      tr(
        "Ambos textos coinciden en que el teletrabajo reduce los gastos de las empresas.",
        "Both texts agree that remote work reduces companies' costs.",
        [
          "Both texts agree that remote work reduces costs for companies.",
          "Both texts agree that working from home reduces companies' costs.",
          "Both texts agree that remote work cuts companies' costs.",
          "Both writers agree that remote work reduces companies' costs.",
          "Both writers agree that remote work reduces costs for companies.",
          "Both texts agree that remote working reduces companies' costs.",
        ],
        "Where the writers agree, say it once with \"Both\". «Coincidir en» is \"agree that\", not *coincide in.",
      ),
      tr(
        "Mientras que el primer texto destaca las ventajas, el segundo se centra en los riesgos.",
        "Whereas the first text stresses the advantages, the second focuses on the risks.",
        [
          "Whereas the first text highlights the advantages, the second focuses on the risks.",
          "Whereas the first text emphasizes the advantages, the second focuses on the risks.",
          "While the first text stresses the advantages, the second focuses on the risks.",
          "While the first text highlights the advantages, the second focuses on the risks.",
          "While the first text emphasizes the advantages, the second focuses on the risks.",
          "Whereas the first text stresses the benefits, the second focuses on the risks.",
        ],
        "\"Whereas\" (or \"while\") puts the contrast between the texts in one sentence instead of summarizing Text A and then Text B. «Centrarse en» is \"focus on\".",
      ),
      fe(
        "Paraphrase by turning the verb into a noun: \"Rents have risen sharply.\"",
        "The sharp ___ in rents has hit young families hardest.",
        "rise",
        ["increase"],
        "Nominalizing (\"rents have risen\" → \"the rise in rents\") changes the structure, not just the words, which is what a Mastery paraphrase needs. Note \"rise in\", not *rise of.",
      ),
      fe(
        "Replace the list \"shops, bars and cafes\" with one general phrase.",
        "Tourism keeps local ___ alive.",
        "businesses",
        ["business"],
        "Turning a list into one general word is a key summary skill: \"shops, bars and cafes\" become \"local businesses\".",
      ),
      mc(
        "What is wrong with this summary sentence: \"I think the second writer is right, as a taxi driver in Text B explains.\"?",
        [
          "It adds an opinion and keeps an example",
          "It is too short",
          "It uses the present simple",
          "It links two ideas in one sentence",
        ],
        0,
        "A summary is neutral (no \"I think\") and cuts the evidence: the taxi driver is only an example supporting a claim.",
      ),
      lc(
        "Neither writer suggests banning cars from the center altogether.",
        "What does this tell you about the two texts?",
        [
          "Both stop short of proposing a total ban",
          "Only one of them proposes a total ban",
          "Both propose a total ban",
          "Neither text mentions cars",
        ],
        0,
        "\"Neither writer\" + \"altogether\": both discuss cars, but neither goes as far as a complete ban.",
      ),
      mc(
        "What does the headline \"Minister quits over expenses row\" mean?",
        [
          "A minister has resigned after a dispute about expenses.",
          "A minister is going to resign because of expenses.",
          "A minister has stopped rowing because of the cost.",
          "A minister is asking for his expenses to be paid.",
        ],
        0,
        "In headlines the present simple reports a recent past event (\"quits\" = has resigned), and \"row\" (British, rhymes with \"cow\") means a dispute.",
      ),
      fe(
        "Rewrite the headline \"PM to visit Brazil\" as a full sentence.",
        "The Prime Minister ___ visit Brazil.",
        "is going to",
        ["will", "is to", "plans to", "is due to"],
        "In headlines \"to\" + verb announces the future. In a full sentence, restore \"is going to\" or \"will\".",
      ),
      fe(
        "Rewrite the headline \"Four hurt in bus crash\" as a full sentence.",
        "Four people ___ hurt in a bus crash.",
        "have been",
        ["were"],
        "A bare past participle in a headline is passive: \"Four hurt\" = four people have been (or were) hurt. Restore the auxiliary and the article.",
      ),
      mt(
        "Match each headline verb with its neutral meaning.",
        [
          ["axe", "cut or close"],
          ["probe", "investigate"],
          ["slam", "criticize strongly"],
          ["vow", "promise"],
          ["curb", "limit"],
        ],
        "Headlines prefer short, punchy verbs. When you rewrite a headline as a normal sentence, translate them back into neutral English.",
      ),
      {
        type: "translate",
        direction: "es-en",
        prompt: "Write this as an English headline.",
        source: "Un fabricante de juguetes suprime 300 empleos",
        answer: "Toymaker axes 300 jobs",
        altAnswers: [
          "Toy maker axes 300 jobs",
          "Toy firm axes 300 jobs",
          "Toy company axes 300 jobs",
          "Toymaker cuts 300 jobs",
          "Toy maker cuts 300 jobs",
          "Toy firm cuts 300 jobs",
        ],
        explanation: "Headline grammar: no article, present simple for a recent event, and the short verb \"axe\". Spanish puts the verb first («Suprime...»); English puts the subject first.",
      },
      tr(
        "El sindicato ha criticado duramente la nueva ley.",
        "The union has strongly criticized the new law.",
        [
          "The union has harshly criticized the new law.",
          "The union has fiercely criticized the new law.",
          "The union strongly criticized the new law.",
          "The union has sharply criticized the new law.",
        ],
        "This is the neutral full-sentence version of the headline \"Union slams new law\": restore the article and the auxiliary, and replace \"slams\" with \"has strongly criticized\".",
      ),
      mc(
        "\"School meal price rise row\" (row: British headline word for a dispute) is about:",
        [
          "a dispute about an increase in the price of school meals",
          "a line of school meals whose price went up",
          "a price rise caused by a dispute at a school",
          "a school rowing team whose costs rose",
        ],
        0,
        "Read noun stacks from right to left: the last noun (\"row\") is the head; everything before it describes it.",
      ),
      lc(
        "Police probe death of hiker.",
        "What does the headline mean?",
        [
          "Police are investigating a hiker's death",
          "Police caused a hiker's death",
          "A hiker died during a police search",
          "Police found a missing hiker alive",
        ],
        0,
        "\"Probe\" is headline language for \"investigate\" (as a verb) or \"investigation\" (as a noun, as in \"Fraud probe widens\").",
      ),
      fb(
        "Tax hike ___ protests.",
        "sparks",
        "La subida de impuestos [provoca] protestas.",
        ["triggers"],
        "\"Hike\" is a noun here (an increase) and \"sparks\" is the verb (causes). Many headline words work as both nouns and verbs, which is what makes headlines tricky.",
      ),
      dt(
        "Union vows to fight plan to axe night trains.",
        "Two headline verbs: \"vows\" (promises) and \"axe\" (cut). Note the two to-infinitives in a row, and no articles.",
      ),
      sp(
        "A bank boss has resigned after a dispute about his pay.",
        "El jefe de un banco ha renunciado tras una polémica por su sueldo.",
        "Stress \"bank boss\", \"resigned\", \"dispute\" and \"pay\".",
        "This is how a news reader would say the headline \"Bank boss quits over pay row\": articles, auxiliary and neutral vocabulary restored.",
      ),
      sp(
        "Both writers acknowledge the benefits, yet the second warns of the risks.",
        "Ambos autores reconocen los beneficios, pero el segundo advierte de los riesgos.",
        "Pause slightly before \"yet\"; \"acknowledge\" is stressed on -KNOW-.",
        "Cohesive summary language: \"Both writers\" merges the shared point, and \"yet\" links the contrast inside one sentence.",
      ),
      tr(
        "Preguntada por la nueva ley, la ministra se limitó a decir que se estaba revisando.",
        "Asked about the new law, the minister merely said that it was being reviewed.",
        [
          "Asked about the new law, the minister merely said it was being reviewed.",
          "Asked about the new law, the minister merely said that it was under review.",
          "Asked about the new law, the minister merely said it was under review.",
          "Asked about the new law, the minister only said that it was being reviewed.",
          "Asked about the new law, the minister simply said that it was being reviewed.",
          "Asked about the new law, the minister just said that it was being reviewed.",
        ],
        "Unit mix: the participle clause \"Asked about...\", \"merely said\" for «se limitó a decir» (a small word that minimizes), and the backshifted passive \"was being reviewed\".",
      ),
      mc(
        "Which is the correct full-sentence version of the headline \"Fraud probe widens\"?",
        [
          "An investigation into fraud is being extended.",
          "Fraud is probing more widely.",
          "A wide fraud has been investigated.",
          "Police will widen the fraud.",
        ],
        0,
        "Here \"probe\" is a noun (investigation) and \"widens\" is the verb. Reading the wrong word as the verb is the classic headline trap.",
      ),
      wo(
        "Bear in mind that the figures were never independently verified.",
        "Tengan en cuenta que las cifras nunca se verificaron de forma independiente.",
        "\"Bear in mind that\" flags a limitation; the passive \"were never independently verified\" puts the adverbs between the auxiliary and the participle.",
      ),
    ],
  ),
];
