// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u14-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u14 (debate and persuasion: rhetoric, appeals, conclusions, formal debate, cohesion, argument verbs, ellipsis): a short recap, then graded practice.

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

const kw = (key: string, original: string, sentence: string, answer: string, altAnswers: string[], explanation: string): Ex =>
  altAnswers.length
    ? { type: "fill-blank", prompt: `Complete the second sentence so it means the same as the first, using ${key}: "${original}"`, sentence, answer, altAnswers, explanation }
    : { type: "fill-blank", prompt: `Complete the second sentence so it means the same as the first, using ${key}: "${original}"`, sentence, answer, explanation };

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


export const EN_C2_U14_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Rhetorical devices, the three appeals, strong conclusions,
  // the language of formal debate
  // ---------------------------------------------------------------------
  drill(
    "en-c2-rhetoric-unit-drill-1",
    "Drill: Devices, Appeals and the Debating Chamber",
    "Build tricolons, antitheses and repetition, appeal to credibility, emotion and evidence with correct number grammar, close a speech with force and a call to action, and use the procedure of formal debate.",
    "Recap: devices, appeals, endings, procedure",
    [
      "Devices: a tricolon (three parallel items, ideally ascending), antithesis (\"not a cost but an investment\", with «sino» as \"but\"), anaphora and epistrophe (repeated openings or endings) and alliteration. Use two or three, at the opening and the close.",
      "Appeals: ethos (\"As someone who has worked... for twelve years\"), pathos (one concrete person, careful framing), logos (\"40 percent of\", \"one in five\", \"a threefold increase\"). End with \"Ultimately\" or \"In the final analysis\", not *In conclusion, I think; call to action with \"urge/ask/call on someone to do\". In debate: the motion, \"This House would...\", \"You have the floor\", \"I'll give way\", and a motion is carried or defeated.",
    ],
    [
      ["It was slow, it was expensive, and it failed the people it was meant to help.", "Fue lento, fue caro y les falló a las personas a las que debía ayudar."],
      ["Healthy food is not a luxury but a necessity.", "La comida saludable no es un lujo sino una necesidad."],
      ["Ultimately, this comes down to trust.", "En definitiva, esto se reduce a la confianza."],
      ["I urge you to oppose the motion.", "Les pido encarecidamente que se opongan a la moción."],
    ],
    [
      mt(
        "Match each device to its example.",
        [
          ["tricolon", "We will plan, we will build, and we will deliver."],
          ["antithesis", "We need fewer slogans and more solutions."],
          ["anaphora", "This city deserves honesty. This city deserves vision. This city deserves better."],
          ["epistrophe", "When the rents rose, we paid. When the taxes rose, we paid."],
          ["alliteration", "a decade of drift and decline"],
        ],
        "Anaphora repeats the start of each clause, epistrophe the end. A tricolon is three parallel units, antithesis sets opposites in parallel, and alliteration repeats initial consonant sounds.",
      ),
      mc(
        "Which is the strongest ascending tricolon?",
        [
          "It was rushed, it was reckless, and it put thousands of jobs at risk.",
          "It put thousands of jobs at risk, it was reckless, and it was rushed.",
          "It was rushed and reckless.",
          "It was rushed, reckless, careless, thoughtless, hasty and risky.",
        ],
        0,
        "Three parallel clauses that grow heavier towards the end build rhythm. Starting with the heaviest item deflates it, two items feel unfinished, and six adjectives sound padded.",
      ),
      fb(
        "Housing is not a luxury ___ a basic right.",
        "but",
        "La vivienda no es un lujo [sino] un derecho básico.",
        [],
        "In \"not X but Y\", «sino» is \"but\". *not a luxury if not a right is a common calque: \"if not\" means «si no», a condition.",
      ),
      tr(
        "Esto no tiene que ver con la tecnología; tiene que ver con las personas.",
        "This isn't about technology; it's about people.",
        [
          "This is not about technology; it is about people.",
          "This isn't about technology; it is about people.",
          "This isn't about technology. It's about people.",
          "This has nothing to do with technology; it's about people.",
          "This isn't about the technology; it's about the people.",
          "It isn't about technology; it's about people.",
        ],
        "The everyday antithesis: \"This isn't about X; it's about Y\". The parallel structure is what makes it land, so keep both halves short and matched.",
      ),
      tr(
        "Necesitamos menos reuniones y más decisiones.",
        "We need fewer meetings and more decisions.",
        [
          "What we need is fewer meetings and more decisions.",
          "We need fewer meetings and more decision-making.",
        ],
        "A balanced antithesis with matching word classes. \"Meetings\" is countable, so the opposite of \"more\" is \"fewer\", not *less meetings in careful speech.",
      ),
      mc(
        "Which version would sound best in an English speech?",
        [
          "This reform is fair, necessary and long overdue.",
          "This reform is fair, necessary, urgent, brave, historic and long overdue.",
          "This reform is a fair reform, a necessary reform, an urgent reform, a brave reform and a historic reform.",
          "This reform is fair and also it is necessary and also overdue.",
        ],
        0,
        "English audiences hear three items as complete. Spanish rhetoric often stacks five or six adjectives, which sounds padded in English: pick your best three.",
      ),
      dt(
        "It is easy to make promises; it is far harder to keep them.",
        "An antithesis: two parallel clauses (\"It is easy to... it is far harder to...\") set against each other.",
      ),
      tr(
        "Llevo doce años trabajando como enfermera de urgencias.",
        "I have been working as an emergency nurse for twelve years.",
        [
          "I've been working as an emergency nurse for twelve years.",
          "I have worked as an emergency nurse for twelve years.",
          "I've worked as an emergency nurse for twelve years.",
          "I have been an emergency nurse for twelve years.",
          "I've been an emergency nurse for twelve years.",
          "I have been working as an ER nurse for twelve years.",
          "I've been working as an ER nurse for twelve years.",
          "For twelve years, I have been working as an emergency nurse.",
        ],
        "Experience up to now takes the present perfect (continuous) + \"for\". *I work as a nurse since twelve years copies «trabajo... desde hace doce años» and undermines the very credibility you are trying to build.",
      ),
      fb(
        "As someone who ___ in logistics for twenty years, I know how fragile supply chains are.",
        "has worked",
        "Como alguien que [lleva] veinte años [trabajando] en logística, sé lo frágiles que son las cadenas de suministro.",
        ["has been working"],
        "Ethos in one line: \"As someone who has worked...\" + \"for\" + period. The present simple *who works since twenty years is the calque to avoid.",
      ),
      tr(
        "El 35 % de los estudiantes trabaja a tiempo parcial.",
        "Thirty-five percent of students work part-time.",
        [
          "35 percent of students work part-time.",
          "35% of students work part-time.",
          "Thirty-five percent of students work part time.",
          "Thirty-five per cent of students work part-time.",
          "Thirty-five percent of all students work part-time.",
          "Thirty-five percent of students have part-time jobs.",
        ],
        "No article before the percentage and none before \"students\": *The 35% of the students is a direct copy. The verb agrees with \"students\" (plural).",
      ),
      tr(
        "Los precios son un 30 % más altos que el año pasado.",
        "Prices are 30 percent higher than last year.",
        [
          "Prices are thirty percent higher than last year.",
          "Prices are 30% higher than last year.",
          "Prices are 30 percent higher than they were last year.",
          "Prices are 30 per cent higher than last year.",
          "Prices are up 30 percent on last year.",
          "Prices are 30 percent higher than a year ago.",
        ],
        "«Un 30 % más» is \"30 percent more/higher\", with no article: *a 30% more is a classic slip. And no \"the\" before \"prices\" for a general statement.",
      ),
      mc(
        "«Los tiempos de espera se han triplicado.» Which is the most precise English?",
        [
          "There has been a threefold increase in waiting times.",
          "There has been a triple increase of waiting times.",
          "Waiting times have increased three times more.",
          "The waiting times have made themselves three times.",
        ],
        0,
        "\"A threefold increase in\" (or \"Waiting times have tripled\") is the logos phrasing. \"Increase in\" names what changes; *three times more is ambiguous and *made themselves is a calque.",
      ),
      lc(
        "Picture a teacher grading homework at midnight, then getting up at six to do it all again.",
        "Which appeal is the speaker mainly using?",
        [
          "Pathos: one concrete person to stir emotion",
          "Logos: statistics and logical steps",
          "Ethos: the speaker's own credentials",
          "A call to action at the end of the speech",
        ],
        0,
        "\"Picture...\" invites the audience to imagine a single, concrete person: the most powerful pathos technique in English.",
      ),
      mc(
        "The government ___ funding for public libraries. Which verb frames the change most dramatically?",
        [
          "slashed",
          "adjusted",
          "reduced",
          "trimmed",
        ],
        0,
        "Framing is choosing the verb: \"slashed\" sounds violent and drastic, \"reduced\" neutral, \"trimmed\" and \"adjusted\" minor. Choose deliberately, and recognize it when opponents do.",
      ),
      wo(
        "Those are the numbers. But numbers don't pay rent; people do.",
        "Esas son las cifras. Pero las cifras no pagan alquiler; las personas sí.",
        "A transition from logos to pathos, built on an antithesis. Note \"people do\": English keeps the auxiliary where Spanish says «sí».",
      ),
      tr(
        "En definitiva, se trata de una cuestión de confianza.",
        "Ultimately, this is a question of trust.",
        [
          "Ultimately, it's a question of trust.",
          "Ultimately, it is a question of trust.",
          "Ultimately, this is a matter of trust.",
          "Ultimately, it's a matter of trust.",
          "In the final analysis, this is a question of trust.",
          "In the final analysis, it's a matter of trust.",
          "When all is said and done, this is a question of trust.",
          "In short, this is a question of trust.",
          "All in all, it's a question of trust.",
        ],
        "«En definitiva» is \"ultimately\", \"in short\" or \"all in all\", never *definitively, which means «de forma definitiva».",
      ),
      mc(
        "Which is the strongest way to signal the end of a speech?",
        [
          "Ultimately, the question is whether we can afford to wait.",
          "In conclusion, I think that maybe we should not wait.",
          "Definitively, the question is whether we can afford to wait.",
          "And that's all, thank you very much, the end.",
        ],
        0,
        "\"Ultimately, the question is...\" signals the end and states the point as a fact. \"In conclusion, I think that...\" sounds like a school essay and weakens the claim.",
      ),
      tr(
        "Les pido que voten en contra de esta propuesta.",
        "I ask you to vote against this proposal.",
        [
          "I'm asking you to vote against this proposal.",
          "I urge you to vote against this proposal.",
          "I ask you to reject this proposal.",
          "I urge you to reject this proposal.",
          "I would ask you to vote against this proposal.",
          "I ask that you vote against this proposal.",
        ],
        "\"Ask/urge someone to do\": object + infinitive. *I ask you that you vote copies «les pido que voten».",
      ),
      fb(
        "We call ___ the city council to act before winter.",
        "on",
        "Exhortamos [al] concejo municipal a que actúe antes del invierno.",
        ["upon"],
        "\"Call on someone to do something\" is the formal call to action. The preposition is \"on\" (or \"upon\"), never *call to the council.",
      ),
      kw(
        "URGE",
        "I strongly recommend that you support the motion.",
        "I ___ the motion.",
        "urge you to support",
        ["strongly urge you to support"],
        "\"Urge\" + object + infinitive is the classic call to action: forceful but polite.",
      ),
      wo(
        "Let me close where I began, with that empty classroom.",
        "Permítanme terminar donde empecé, con esa aula vacía.",
        "Coming full circle: the closing returns to the opening image, now charged with your arguments.",
      ),
      dt(
        "History will judge us not by what we promised, but by what we delivered.",
        "A final line built on antithesis (\"not by... but by...\"): short, concrete and rhythmic.",
      ),
      tr(
        "Esta Cámara prohibiría la publicidad de comida chatarra.",
        "This House would ban junk food advertising.",
        [
          "This House would ban advertising for junk food.",
          "This House would ban the advertising of junk food.",
          "This House would ban junk-food advertising.",
          "This House would ban junk food ads.",
          "This House would ban advertisements for junk food.",
        ],
        "A parliamentary motion with \"This House would...\" proposes an action. \"House\" means the assembly, so it keeps its capital letter.",
      ),
      mc(
        "The chair says «Tiene la palabra». Which is the English?",
        [
          "You have the floor.",
          "You have the word.",
          "The word is yours.",
          "You take the word.",
        ],
        0,
        "\"The floor\" is the right to speak: \"You have the floor\" or \"The floor is yours\". *You have the word is a calque.",
      ),
      fb(
        "After a heated debate, the motion was ___ by 140 votes to 95.",
        "carried",
        "Tras un debate acalorado, la moción fue [aprobada] por 140 votos contra 95.",
        ["passed"],
        "A motion is \"carried\" (passed) or \"defeated\". Note \"by 140 votes to 95\", not *with 140 votes against 95.",
      ),
      lc(
        "I'll give way.",
        "A speaker says this when an opponent stands up. What does it mean?",
        [
          "I accept your point of information; go ahead.",
          "I'm leaving the debate early.",
          "I admit that my whole argument is wrong.",
          "I'm giving up the rest of my speaking time.",
        ],
        0,
        "\"I'll give way\" accepts a point of information. It comes from yielding on the road, not from «dar camino» or conceding defeat.",
      ),
      tr(
        "Me pongo de pie para secundar la moción.",
        "I rise to second the motion.",
        [
          "I rise to second this motion.",
          "I stand to second the motion.",
          "I stand to second this motion.",
          "I rise in order to second the motion.",
        ],
        "In formal debate, speakers \"rise to propose\", \"rise to oppose\" or \"rise to second\" a motion. \"Second\" here is a verb: to support the first speaker.",
      ),
      sp(
        "Thank you for the point, but it actually strengthens our case. As I was saying...",
        "Gracias por la intervención, pero de hecho refuerza nuestro argumento. Como iba diciendo...",
        "Stress \"strengthens\" and \"our\"; pause before \"As I was saying\".",
        "Answer a point of information briefly, turn it to your advantage, then return smoothly to your speech.",
      ),
      tr(
        "Uno de cada tres jubilados vive solo.",
        "One in three pensioners lives alone.",
        [
          "One in three retirees lives alone.",
          "One out of three pensioners lives alone.",
          "One out of three retirees lives alone.",
          "One in every three pensioners lives alone.",
          "One in every three retirees lives alone.",
          "One in three retired people lives alone.",
        ],
        "\"One in three\" (or \"one out of three\") is the English pattern for «uno de cada tres»; the verb agrees with \"one\" in careful writing. *One of each three is a calque.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "As someone who has run a school for ten years, I urge you to oppose this motion.",
          "As someone who runs a school since ten years, I urge you that you oppose this motion.",
          "As someone who has run a school for ten years, I urge you that you oppose to this motion.",
          "As someone who has run a school since ten years, I urge you to oppose to this motion.",
        ],
        0,
        "Ethos with the present perfect + \"for\", a call to action with \"urge you to\", and \"oppose\" with no preposition. Each wrong option keeps at least one calque.",
      ),
      tr(
        "En última instancia, la pregunta es a quién sirve esta ley.",
        "Ultimately, the question is who this law serves.",
        [
          "Ultimately, the question is whom this law serves.",
          "Ultimately, the question is who this law is for.",
          "In the final analysis, the question is who this law serves.",
          "In the final analysis, the question is whom this law serves.",
          "Ultimately, the question is who this law really serves.",
          "When all is said and done, the question is who this law serves.",
        ],
        "A strong closing frame plus an embedded question in statement order: \"who this law serves\", never *who does this law serve inside the sentence.",
      ),
      dt(
        "Madam Chair, I rise to oppose the motion, and I will give way once I have made my first point.",
        "Address the chair, \"rise to oppose\" and \"give way\": the procedure of a formal debate in one sentence.",
      ),
      sp(
        "Not a cost, but an investment: in our children, in our towns, in our future.",
        "No un gasto, sino una inversión: en nuestros hijos, en nuestros pueblos, en nuestro futuro.",
        "Pause at the colon; let the voice rise on \"children\" and \"towns\" and fall on \"future\".",
        "An antithesis followed by an ascending tricolon with anaphora (\"in our...\"): a closing line built from the unit's devices.",
      ),
      tr(
        "Hay que reconocer que las cifras son preocupantes. Aun así, les pido que rechacen la moción.",
        "Admittedly, the figures are worrying. Even so, I ask you to reject the motion.",
        [
          "Admittedly, the figures are worrying. Even so, I urge you to reject the motion.",
          "Granted, the figures are worrying. Even so, I ask you to reject the motion.",
          "Granted, the figures are worrying. Even so, I urge you to reject the motion.",
          "Admittedly, the figures are concerning. Even so, I ask you to reject the motion.",
          "Admittedly, the figures are worrying. Nevertheless, I ask you to reject the motion.",
          "Admittedly, the figures are worrying. All the same, I urge you to reject the motion.",
          "Admittedly, the figures are worrying. Even so, I ask you to vote against the motion.",
          "Admittedly, the numbers are worrying. Even so, I urge you to reject the motion.",
        ],
        "A concession and pivot from the previous unit, then a call to action with object + infinitive (never *I ask you that you reject).",
      ),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Conceding in debate, cohesion, verbs of argument, ellipsis and
  // substitution, closing arguments, plus a whole-unit mix
  // ---------------------------------------------------------------------
  drill(
    "en-c2-rhetoric-unit-drill-2",
    "Drill: Concession, Cohesion and Ellipsis",
    "Concede a point without losing your case, link and refer with precision (conversely, to that end, in so doing, the latter, such a), choose argument verbs by meaning and stance, and avoid repetition with so, not, do so, one and auxiliaries.",
    "Recap: concede, link, report, substitute",
    [
      "Concede with \"I'll grant you that...\" or \"I concede that...\" (never *I concede you that), then pivot: \"Even if we accept that, it doesn't follow that...\". Link with \"conversely\", \"to that end\", \"in so doing\", \"by contrast\" (not *in change), and refer back with \"the former/the latter\", \"this\" + noun and \"such (a)\".",
      "Verbs carry stance: contend, posit, maintain, assert + that; refute (prove wrong) vs deny; dismiss X as Y; bolster, substantiate, concede. Replace, don't repeat: \"I think so\", \"I hope not\", \"may do so\", \"so do I\", \"neither has she\", \"wooden ones\", \"those of\", \"I'd love to\".",
    ],
    [
      ["I'll grant you that the timing is tight.", "Te concedo que los plazos son ajustados."],
      ["The audit failed to substantiate the claims.", "La auditoría no logró fundamentar las acusaciones."],
      ["Will they sign today? I hope so.", "¿Firmarán hoy? Espero que sí."],
      ["The old printers were slow; the new ones are fast.", "Las impresoras viejas eran lentas; las nuevas son rápidas."],
    ],
    [
      tr(
        "Te concedo que los costos son altos.",
        "I'll grant you that the costs are high.",
        [
          "I'll grant you that costs are high.",
          "I will grant you that the costs are high.",
          "I grant you that the costs are high.",
          "I concede that the costs are high.",
          "I concede that costs are high.",
          "Granted, the costs are high.",
          "I'll grant you that the costs are steep.",
        ],
        "\"Grant\" takes the person (\"I'll grant you that\"); \"concede\" does not. *I concede you that copies «te concedo que».",
      ),
      mc(
        "Which sentence is correct?",
        [
          "I concede that the first phase will be slow.",
          "I concede you that the first phase will be slow.",
          "I'll grant that you the first phase will be slow.",
          "I'm happy to concede you that the first phase will be slow.",
        ],
        0,
        "\"Concede\" takes a \"that\" clause with no indirect object. Only \"grant\" works with \"you\", and then the person comes before \"that\": \"I'll grant you that...\".",
      ),
      fb(
        "Your argument is valid as far as it ___, but it leaves out the long-term costs.",
        "goes",
        "Tu argumento es válido hasta donde [llega], pero deja fuera los costos a largo plazo.",
        [],
        "\"True/valid as far as it goes\" means «es cierto, pero se queda corto»: a sharp concession that prepares a pivot.",
      ),
      tr(
        "Tienes razón en lo del presupuesto, pero no en lo de los plazos.",
        "You're right about the budget, but not about the deadlines.",
        [
          "You are right about the budget, but not about the deadlines.",
          "You're right about the budget but not about the deadlines.",
          "You're right about the budget, but not about the timeline.",
          "You're right about the budget, but you're wrong about the deadlines.",
          "You're right about the budget, but not the deadlines.",
        ],
        "«Tener razón» is \"be right\": *You have reason is the calque to avoid. Conceding one part precisely keeps the rest of your case intact.",
      ),
      tr(
        "Aun aceptando eso, de ello no se deduce que haya que abandonar el proyecto.",
        "Even if we accept that, it doesn't follow that we should abandon the project.",
        [
          "Even if we accept that, it does not follow that we should abandon the project.",
          "Even if we accept that, it doesn't follow that the project should be abandoned.",
          "Even if we accept that, it doesn't follow that we have to abandon the project.",
          "Even if we accept that, it doesn't follow that we must abandon the project.",
          "Even if we accept that, it doesn't follow that we should drop the project.",
          "Even if we accept that, it doesn't follow that we should scrap the project.",
          "Even accepting that, it doesn't follow that we should abandon the project.",
        ],
        "\"Even if we accept that...\" concedes for argument's sake; \"it doesn't follow that...\" shows the concession does not lead to the opponent's conclusion.",
      ),
      fb(
        "Higher taxes on tobacco reduce smoking; ___, lower prices tend to increase it.",
        "conversely",
        "Los impuestos más altos al tabaco reducen el consumo; [a la inversa], los precios más bajos tienden a aumentarlo.",
        [],
        "\"Conversely\" introduces the reverse of what has just been said. \"On the other hand\" would only signal a contrast, not the mirror image.",
      ),
      tr(
        "Queremos que todos los empleados hablen inglés en dos años. Con ese fin, la empresa pagará las clases.",
        "We want all employees to speak English within two years. To that end, the company will pay for the classes.",
        [
          "We want all employees to speak English within two years. To that end, the company will pay for the lessons.",
          "We want all employees to speak English within two years. To that end, the company will pay for classes.",
          "We want all employees to speak English in two years. To that end, the company will pay for the classes.",
          "We want all staff to speak English within two years. To that end, the company will pay for the classes.",
          "We want all employees to speak English within two years. To this end, the company will pay for the classes.",
          "We want all employees to speak English within two years. To that end, the company will cover the cost of the classes.",
          "We want every employee to speak English within two years. To that end, the company will pay for the classes.",
        ],
        "\"To that end\" links a goal to the action that serves it. Two traps: \"want\" + object + infinitive (never *We want that all employees speak), and \"pay for\" the classes.",
      ),
      mc(
        "Which connector is best in a formal report? «El plan es asequible. ___, cuenta con un amplio apoyo público.»",
        [
          "Furthermore",
          "Besides",
          "On the other hand",
          "In the other hand",
        ],
        0,
        "In formal writing, add with \"Furthermore\", \"Moreover\" or \"In addition\". \"Besides\" is conversational and usually adds a final clinching reason; \"on the other hand\" contrasts; *in the other hand does not exist.",
      ),
      fb(
        "She criticized the board in public and, ___, gave up any chance of promotion.",
        "in so doing",
        "Criticó a la junta en público y, [al hacerlo], renunció a cualquier posibilidad de ascenso.",
        ["in doing so", "by doing so"],
        "\"In so doing\" (or \"in doing so\") is «al hacerlo»: it shows the consequence of the action just mentioned.",
      ),
      tr(
        "Las ventas en línea crecieron un 20 %. En cambio, las ventas en tienda cayeron.",
        "Online sales grew by 20 percent. By contrast, in-store sales fell.",
        [
          "Online sales grew by 20%. By contrast, in-store sales fell.",
          "Online sales grew 20 percent. By contrast, in-store sales fell.",
          "Online sales rose by 20 percent. By contrast, in-store sales fell.",
          "Online sales grew by 20 percent. In contrast, in-store sales fell.",
          "Online sales grew by 20 percent. By contrast, store sales fell.",
          "Online sales grew by 20 percent. By contrast, in-store sales dropped.",
          "Online sales increased by 20 percent. By contrast, in-store sales fell.",
          "Online sales grew by 20 percent, whereas in-store sales fell.",
        ],
        "«En cambio» is \"by contrast\", \"in contrast\" or \"whereas\", never *in change. «Un 20 %» is \"by 20 percent\" with no article.",
      ),
      mc(
        "Which is correctly punctuated?",
        [
          "The report was finished; however, nobody had read it.",
          "The report was finished, however nobody had read it.",
          "The report was finished however, nobody had read it.",
          "The report was finished, however, nobody had read it.",
        ],
        0,
        "\"However\" is an adverb, not a conjunction, so it cannot join two clauses with commas. Use a semicolon before it (or a new sentence) and a comma after.",
      ),
      fb(
        "Nobody expected ___ strong reaction from the shareholders.",
        "such a",
        "Nadie esperaba [una] reacción [tan] fuerte de los accionistas.",
        [],
        "\"Such a\" + adjective + singular countable noun. *a such strong reaction and *so strong reaction are the typical slips.",
      ),
      wo(
        "Several hospitals now publish their waiting times online. This practice has improved trust.",
        "Varios hospitales publican ahora sus tiempos de espera en línea. Esta práctica ha mejorado la confianza.",
        "\"This\" + a summary noun (\"This practice\") labels the whole previous idea. A bare \"This has improved trust\" would be vaguer.",
      ),
      mt(
        "Match each verb to its meaning.",
        [
          ["contend", "argue a position in a dispute"],
          ["posit", "propose as a basis for reasoning"],
          ["maintain", "keep claiming despite opposition"],
          ["refute", "prove a claim wrong"],
          ["dismiss", "reject without serious consideration"],
          ["substantiate", "provide evidence for a claim"],
        ],
        "These verbs are not interchangeable: \"refute\" claims success in disproving, \"dismiss\" suggests a lack of serious attention, and \"posit\" is typical of academic writing.",
      ),
      mc(
        "The minister said the allegations were false but offered no evidence. Which verb is most accurate? «The minister ___ the allegations.»",
        [
          "denied",
          "refuted",
          "substantiated",
          "bolstered",
        ],
        0,
        "\"Refute\" strictly means to prove something wrong. If you only say it is false, careful writers use \"deny\" or \"reject\".",
      ),
      fb(
        "She dismissed the survey ___ biased and unreliable.",
        "as",
        "Descartó la encuesta [por] sesgada y poco confiable.",
        [],
        "The pattern is \"dismiss X as Y\". *dismissed the survey for biased is a calque of «por».",
      ),
      tr(
        "La auditoría no logró fundamentar ninguna de las denuncias.",
        "The audit failed to substantiate any of the allegations.",
        [
          "The audit was unable to substantiate any of the allegations.",
          "The audit could not substantiate any of the allegations.",
          "The audit couldn't substantiate any of the allegations.",
          "The audit failed to substantiate any of the complaints.",
          "The audit failed to substantiate any of the claims.",
          "The audit did not substantiate any of the allegations.",
        ],
        "\"Substantiate\" means to provide evidence for («fundamentar»). It is common in negatives: \"failed to\", \"was unable to\".",
      ),
      lc(
        "Even the minister's own advisers concede that the scheme is behind schedule.",
        "What does \"concede\" suggest about the advisers?",
        [
          "They admit it reluctantly.",
          "They are proud of it.",
          "They have proved it with data.",
          "They strongly deny it.",
        ],
        0,
        "Reporting verbs carry stance: \"concede\" suggests reluctance, \"point out\" suggests the point is true, and \"claim\" hints at doubt.",
      ),
      mc(
        "«Me temo que sí.» Which is the English?",
        [
          "I'm afraid so.",
          "I'm afraid yes.",
          "I fear that yes.",
          "I'm afraid it.",
        ],
        0,
        "English replaces the clause with \"so\" after \"be afraid\", \"think\", \"hope\" and similar verbs. *I'm afraid yes copies «que sí».",
      ),
      fb(
        "Will the merger go through? I don't think ___.",
        "so",
        "¿Se concretará la fusión? Creo que [no].",
        [],
        "With \"think\", English prefers to negate the main verb: \"I don't think so\". *I think no is the classic calque, and \"I think not\" sounds formal or emphatic.",
      ),
      tr(
        "Si es así, firmamos hoy; si no, esperamos hasta el lunes.",
        "If so, we'll sign today; if not, we'll wait until Monday.",
        [
          "If so, we will sign today; if not, we will wait until Monday.",
          "If so, we sign today; if not, we wait until Monday.",
          "If so, we'll sign today; if not, we'll wait till Monday.",
          "If so, we'll sign today. If not, we'll wait until Monday.",
          "If so, we'll sign today; otherwise, we'll wait until Monday.",
        ],
        "\"If so\" and \"if not\" replace a whole condition («en caso afirmativo / negativo»). *If yes and *if no are Spanish-speaker calques.",
      ),
      fb(
        "I've never been to Cusco, and ___ has my brother.",
        "neither",
        "Nunca he ido a Cusco, y mi hermano [tampoco].",
        ["nor"],
        "\"Neither/nor\" + auxiliary + subject, and the auxiliary matches the tense: \"has\" for the present perfect. *and my brother neither and *and neither my brother copy «y mi hermano tampoco»; \"and my brother hasn't either\" is the other correct option.",
      ),
      tr(
        "Mi jefa habla portugués, y yo también.",
        "My boss speaks Portuguese, and so do I.",
        [
          "My boss speaks Portuguese, and I do too.",
          "My boss speaks Portuguese and so do I.",
          "My manager speaks Portuguese, and so do I.",
          "My boss speaks Portuguese, and I do as well.",
          "My boss speaks Portuguese, as do I.",
        ],
        "\"So\" + auxiliary + subject, with \"do\" because the first clause is present simple. *and so I do and *and me too (in writing) are the typical slips.",
      ),
      tr(
        "No me gustan las sillas de plástico; prefiero las de madera.",
        "I don't like plastic chairs; I prefer wooden ones.",
        [
          "I don't like plastic chairs; I prefer wooden chairs.",
          "I don't like plastic chairs. I prefer wooden ones.",
          "I don't like plastic chairs; I prefer the wooden ones.",
          "I do not like plastic chairs; I prefer wooden ones.",
          "I don't like plastic chairs; I'd rather have wooden ones.",
        ],
        "Spanish drops the noun («las de madera»), but English needs \"ones\" after the adjective: *I prefer the wooden is incomplete.",
      ),
      fb(
        "Salaries in the capital are higher than ___ in the provinces.",
        "those",
        "Los sueldos en la capital son más altos que [los] de las provincias.",
        [],
        "\"Those\" replaces a plural noun in a formal comparison («los de»); \"that\" replaces a singular one. *than the of the provinces is impossible.",
      ),
      tr(
        "(¿Quieres venir a cenar con nosotros?) Me encantaría.",
        "I'd love to.",
        [
          "I would love to.",
          "I'd love to!",
        ],
        "The \"to\" stands for the whole infinitive phrase. *I'd love and *I'd love it are the common slips.",
      ),
      wo(
        "Staff who want to work remotely may do so two days a week.",
        "El personal que quiera trabajar a distancia puede hacerlo dos días a la semana.",
        "\"Do so\" replaces a verb phrase in formal English («hacerlo»), here \"work remotely\".",
      ),
      lc(
        "Has the contract been signed? I believe so, but let me double-check.",
        "What does the second speaker mean?",
        [
          "They think it has been signed, but aren't certain.",
          "They are certain it has not been signed.",
          "They hope it will never be signed.",
          "They signed it themselves.",
        ],
        0,
        "\"I believe so\" = «creo que sí», a tentative yes. \"So\" replaces the clause \"the contract has been signed\".",
      ),
      tr(
        "Aunque todas sus cifras fueran correctas, los beneficios seguirían superando los costos.",
        "Even if all their figures were correct, the benefits would still outweigh the costs.",
        [
          "Even if all their figures were right, the benefits would still outweigh the costs.",
          "Even if all of their figures were correct, the benefits would still outweigh the costs.",
          "Even if every one of their figures were correct, the benefits would still outweigh the costs.",
          "Even if every one of their figures was correct, the benefits would still outweigh the costs.",
          "Even if all their figures were correct, the benefits would still outweigh the cost.",
          "Even if all their numbers were correct, the benefits would still outweigh the costs.",
        ],
        "Weighing, the heart of a closing argument: concede the opponent's figures, then show they are outweighed. «Superar» here is \"outweigh\", not *overcome.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "I think so, and so does the board; if not, we'll vote again.",
          "I think yes, and so the board does; if no, we'll vote again.",
          "I think so, and the board so does; if not, we'll vote again.",
          "I think it, and so does the board; if no, we'll vote again.",
        ],
        0,
        "\"I think so\", \"so does the board\" (inversion: so + auxiliary + subject) and \"if not\". Each wrong option keeps at least one calque of «que sí / si no».",
      ),
      tr(
        "Sea como sea, la junta decidió seguir adelante y, al hacerlo, asumió un riesgo enorme.",
        "Be that as it may, the board decided to go ahead and, in so doing, took a huge risk.",
        [
          "Be that as it may, the board decided to go ahead and, in doing so, took a huge risk.",
          "Be that as it may, the board decided to go ahead and, in so doing, took an enormous risk.",
          "Be that as it may, the board decided to go ahead and, in so doing, took on a huge risk.",
          "Be that as it may, the board decided to proceed and, in so doing, took a huge risk.",
          "Be that as it may, the board has decided to go ahead and, in so doing, has taken a huge risk.",
          "Be that as it may, the board decided to go ahead and, by doing so, took a huge risk.",
        ],
        "Two fixed linkers: \"Be that as it may\" (never *Be it as it may) and \"in so doing\". «Asumir un riesgo» is \"take a risk\", not *assume a risk.",
      ),
      dt(
        "Paris and Porto both attract millions of tourists, but the latter has far fewer hotels.",
        "\"The latter\" refers to the second of exactly two items: Porto. With three or more, say \"the last\".",
      ),
      dt(
        "The opposition's case rests on cost; ours rests on fairness, and fairness outweighs cost.",
        "Weighing in a closing argument: \"rests on\" frames each side's case, and \"outweighs\" tells the audience why yours matters more.",
      ),
      sp(
        "I'll grant you that the first year will be hard. But that's a reason to prepare, not a reason to wait.",
        "Te concedo que el primer año será difícil. Pero esa es una razón para prepararse, no para esperar.",
        "Stress \"grant\", \"prepare\" and \"wait\"; pause before \"But\".",
        "A short concession, then a pivot built as an antithesis: the concession is brief and the pivot carries the weight.",
      ),
      sp(
        "Fair point. Even so, the central argument stands.",
        "Buen punto. Aun así, el argumento central se mantiene.",
        "Let \"Fair point\" fall; stress \"central\" and \"stands\".",
        "The lightest concession in the unit, followed by a pivot that refuses to give up the case.",
      ),
    ],
  ),
];
