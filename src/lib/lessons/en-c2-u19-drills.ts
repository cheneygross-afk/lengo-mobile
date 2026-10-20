// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u19-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u19 (rhetorical questions and emphasis structures): a short recap, then graded practice.

type Ex = Lesson["exercises"][number];

const SECONDS: Record<string, number> = {
  "multiple-choice": 15, "multi-select": 20, "listen-choose": 20, "fill-blank": 20, translate: 30,
  "word-order": 25, matching: 30, dictation: 30, speak: 25, write: 0,
};

// Expands "{a|b}" alternatives into every variant; the first variant is the main answer.
const expand = (p: string): string[] => {
  const m = p.match(/\{([^{}]*)\}/);
  if (!m) return [p.replace(/\s+/g, " ").replace(/ ([,.;:?!])/g, "$1").trim()];
  return m[1].split("|").flatMap((o) => expand(p.replace(m[0], o)));
};

const tr = (source: string, pattern: string, explanation: string, extra: string[] = []): Ex => {
  const all = [...new Set([...expand(pattern), ...extra])];
  return all.length > 1
    ? { type: "translate", direction: "es-en", prompt: "Translate into English.", source, answer: all[0], altAnswers: all.slice(1), explanation }
    : { type: "translate", direction: "es-en", prompt: "Translate into English.", source, answer: all[0], explanation };
};

const fb = (sentence: string, answer: string, en: string, altAnswers: string[], explanation: string): Ex =>
  altAnswers.length
    ? { type: "fill-blank", prompt: "Write the bold words in English.", sentence, answer, en, altAnswers, explanation }
    : { type: "fill-blank", prompt: "Write the bold words in English.", sentence, answer, en, explanation };

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

// A transformation gap-fill: complete the rewrite so it keeps the meaning of the original.
const fx = (original: string, sentence: string, answer: string, altAnswers: string[], explanation: string): Ex =>
  altAnswers.length
    ? { type: "fill-blank", prompt: `Complete the paraphrase so it means the same as: "${original}"`, sentence, answer, altAnswers, explanation }
    : { type: "fill-blank", prompt: `Complete the paraphrase so it means the same as: "${original}"`, sentence, answer, explanation };

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

export const EN_C2_U19_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Rhetorical questions, hypophora, fronting and concessive inversion, clefts and inversion
  // ---------------------------------------------------------------------
  drill(
    "en-c2-emphasis-unit-drill-1",
    "Drill: Rhetorical Questions, Fronting, Clefts and Inversion",
    "Read and produce rhetorical questions and hypophora, and build emphasis with concessive \"as/though\", fronting, it-clefts, wh-clefts and negative inversion without the usual Spanish-speaker slips.",
    "Recap: questions that assert, structures that emphasize",
    [
      "A rhetorical question asserts the opposite polarity (\"What's the point?\" = there is none; \"Didn't I tell you?\" = I did); hypophora asks and immediately answers (\"Why? Because...\"). Fixed forms: \"How should I know?\", \"Since when...?\", \"What did you expect?\".",
      "Concessive inversion: \"Strange as it may seem\", \"Try as I might\", \"Much as I admire her\", with no \"although\" or \"but\". A fronted object leaves an empty gap (\"That I can't accept\"); \"Gone are the days\", \"Such was the noise that\".",
      "Clefts: \"It was in May that...\" (not \"when\"), \"What I need is...\", \"All I want is...\". Negative inversion needs an auxiliary: \"Only then did I understand\".",
    ],
    [
      ["Why bother? Nobody reads the reports anyway.", "¿Para qué molestarse? Total, nadie lee los informes."],
      ["Small as it is, the apartment gets a lot of light.", "Aunque es pequeño, el departamento tiene mucha luz."],
      ["It was the night shift that noticed the leak.", "Fue el turno de noche el que notó la fuga."],
      ["Under no circumstances should the door be left open.", "Bajo ningún concepto debe dejarse la puerta abierta."],
    ],
    [
      mc(
        "\"What's the point of fixing it again?\" What does the speaker assert?",
        [
          "There is no point in fixing it again",
          "There is a good reason to fix it again",
          "The speaker wants to know the reason",
          "The speaker has already fixed it",
        ],
        0,
        "A positive rhetorical question asserts a negative: \"What's the point?\" means there is none. \"What's the point of\" + -ing is the English for «¿De qué sirve...?».",
      ),
      tr(
        "El vuelo se retrasó, pero ¿qué más da? No tenemos prisa.",
        "The flight {was|is} delayed, but {who cares|what does it matter|what difference does it make}? {We're not in a hurry|We aren't in a hurry|We're in no hurry}.",
        "«¿Qué más da?» is \"Who cares?\" or \"What does it matter?\", said with a falling tone. It asserts that the delay is unimportant.",
      ),
      tr(
        "¿De qué sirve llamarlos otra vez?",
        "What's the {point|use} of calling them again?",
        "\"What's the point/use of\" + -ing. *What serves calling them is a word-for-word calque, and an infinitive (*the point to call) is wrong after \"of\".",
        ["What is the point of calling them again?", "Why bother calling them again?"],
      ),
      tr(
        "¿Y yo qué sé? Acabo de llegar.",
        "How {should|would} I know? I just got {here|home|in}.",
        "«¿Y yo qué sé?» is \"How should I know?\" (or \"How would I know?\", \"How am I supposed to know?\"). Keep question word order: never *How I should know?",
        ["How am I supposed to know? I just got here.", "How should I know? I've just arrived.", "How should I know? I just arrived."],
      ),
      lc(
        "Who knows? Maybe they'll change their minds next year.",
        "What does \"Who knows?\" mean here?",
        [
          "Nobody can know for sure",
          "The speaker wants a volunteer to answer",
          "The speaker knows, but won't say",
          "Everybody already knows",
        ],
        0,
        "Sighed with a falling tone about the future, \"Who knows?\" is rhetorical: nobody knows. Asked by a teacher looking for a volunteer, it would be a real question.",
      ),
      tr(
        "¿Quién lo iba a decir? Ganó el equipo más pequeño.",
        "Who {knew|would have thought it|would have thought}? The smallest team won.",
        "\"Who knew?\" and \"Who would have thought (it)?\" express surprise, like «¿Quién lo iba a decir?». No answer is expected.",
      ),
      fb(
        "___ when do you read the terms and conditions?",
        "Since",
        "¿[Desde] cuándo lees tú los términos y condiciones?",
        [],
        "\"Since when...?\" challenges a claim: it means you never read them. Spanish «¿Desde cuándo...?» works the same way.",
      ),
      tr(
        "Lo dejaste bajo la lluvia toda la noche. ¿Qué esperabas?",
        "You left it {out |}in the rain all night. What did you expect?",
        "\"What did you expect?\" says the result was predictable. Note the past simple, matching «esperabas» in this sense.",
      ),
      mc(
        "Which of these is hypophora?",
        [
          "Why does this matter? Because the deadline is on Friday.",
          "Who cares about the deadline?",
          "Isn't it obvious that the deadline matters?",
          "Since when do you care about deadlines?",
        ],
        0,
        "Hypophora asks a question and answers it at once, signposting the next point. The others are rhetorical questions whose answer is left implied.",
      ),
      tr(
        "¿Y esto qué significa para los clientes? Pues que los precios van a subir.",
        "So what does this mean for {customers|our customers}? It means {that |}prices {are going to|will} {rise|go up}.",
        "Answer a hypophora question with a full clause (\"It means that...\"), not with a bare *That prices..., which copies Spanish «Pues que...».",
      ),
      mc(
        "Which sentence is correct in careful writing?",
        [
          "The reason is that the battery was faulty.",
          "The reason is because the battery was faulty.",
          "The reason is why the battery was faulty.",
          "The reason is for the battery was faulty.",
        ],
        0,
        "\"The reason is that...\". *The reason is because is common in speech but redundant in writing. \"Because...\" alone is fine as the answer in hypophora (\"Why? Because...\").",
      ),
      mc(
        "Which sentence is correct in writing?",
        [
          "The question is what we do with the leftover budget.",
          "The question is what do we do with the leftover budget.",
          "The question is what we do with the leftover budget?",
          "The question is: what we do with the leftover budget.",
        ],
        0,
        "Choose one form: indirect (statement order, no question mark) or direct after a colon (\"The question is: what do we do...?\"). Mixing them is marked wrong in writing.",
      ),
      tr(
        "¿La solución es contratar más gente? No. Es organizarnos mejor.",
        "Is the {answer|solution} {hiring|to hire} more people? No. It's {organizing ourselves better|to organize ourselves better|better organization}.",
        "The surprising answer: a short \"No.\" creates contrast and gives the next sentence extra weight.",
      ),
      tr(
        "Pero ¿no es demasiado arriesgado? No si empezamos poco a poco.",
        "But isn't {it|this|that} too risky? Not if we start {gradually|slowly|small|little by little}.",
        "Raising the critics' question and answering it at once (\"Not if...\") pre-empts an objection.",
      ),
      fb(
        "___ as it may seem, the cheaper model lasted longer.",
        "Strange",
        "[Por extraño] que parezca, el modelo más barato duró más.",
        ["Odd", "Surprising", "Weird"],
        "Adjective + \"as\" + subject + verb is the English for «Por extraño que parezca». The subject \"it\" is obligatory.",
      ),
      tr(
        "Aunque estaba agotado, terminó la maratón.",
        "{Exhausted|Tired} {as|though} he was, he finished the marathon.",
        "Concessive inversion puts the adjective first: \"Exhausted as he was\". Don't add \"although\" as well (*Although exhausted as he was): the concession is already in \"as\".",
        ["Although he was exhausted, he finished the marathon.", "Even though he was exhausted, he finished the marathon."],
      ),
      mc(
        "Which sentence is correct?",
        [
          "Unlikely as it sounds, the old printer still works.",
          "Unlikely as sounds, the old printer still works.",
          "Although unlikely as it sounds, the old printer still works.",
          "Unlikely as it sounds, but the old printer still works.",
        ],
        0,
        "English needs the subject (\"it sounds\"), only one concessive marker, and no \"but\" in the main clause.",
      ),
      tr(
        "Por más que lo intenté, no pude arrancar el carro.",
        "{Try as I might|Hard as I tried|However hard I tried|No matter how hard I tried}, I {couldn't|could not} start the car.",
        "\"Try as I might\" (bare verb + \"as\" + subject + modal) or \"Hard as I tried\". *For more that I tried and *Despite I tried are calques.",
      ),
      fb(
        "___ as I love my job, I really need a break.",
        "Much",
        "[Por mucho que] me encante mi trabajo, de verdad necesito un descanso.",
        [],
        "\"Much as\" + clause means «por mucho que» or «aunque». No \"but\" before the main clause.",
      ),
      wo(
        "That I am not going to sign",
        "Eso no lo voy a firmar.",
        "A fronted object leaves an empty gap. Spanish repeats it with «lo»; English has no such pronoun, so nothing follows \"sign\".",
      ),
      mc(
        "«Eso no me lo creo.» Which fronted version is correct?",
        [
          "That I don't believe.",
          "That I don't believe it.",
          "That don't I believe.",
          "That I don't believe that.",
        ],
        0,
        "Fronting the object does not trigger inversion, and the gap stays empty. *That I don't believe it is clitic doubling copied from «Eso no me lo creo».",
      ),
      fb(
        "Particularly ___ is the drop in reading among teenagers.",
        "worrying",
        "Especialmente [preocupante] es la caída de la lectura entre los adolescentes.",
        ["alarming", "concerning", "striking", "troubling"],
        "A fronted complement of \"be\" puts the verb before the subject: \"Particularly worrying is the drop...\". It foregrounds your evaluation.",
      ),
      tr(
        "Atrás quedaron los días en que los boletos se compraban en la estación.",
        "Gone are the days when {tickets were bought|you bought tickets|people bought tickets|we bought tickets} at the station.",
        "«Atrás quedaron los días en que» is exactly \"Gone are the days when\": fronted participle, then \"are\" before the subject.",
      ),
      fb(
        "___ was the heat that the trains had to slow down.",
        "Such",
        "[Tal] era el calor que los trenes tuvieron que reducir la velocidad.",
        [],
        "\"Such was the + noun + that\" fronts the degree for a dramatic result clause, like «Tal era el... que».",
      ),
      fb(
        "It was in Quito ___ my parents met.",
        "that",
        "Fue en Quito [donde] se conocieron mis padres.",
        [],
        "Careful English uses \"that\" after the focus of an it-cleft, even for places and times. *It was in Quito where is heard in speech but treated as an error in writing.",
      ),
      tr(
        "No fue hasta que vi la factura cuando me di cuenta del error.",
        "It wasn't until I saw the {bill|invoice} that I {noticed|realized|spotted} the {mistake|error}.",
        "\"It wasn't until... that...\": the negative is on \"wasn't\" and the main verb stays affirmative. *that I didn't notice adds a second negative.",
      ),
      wo(
        "It wasn't until we landed that I found my passport",
        "Hasta que no aterrizamos no encontré mi pasaporte.",
        "«Hasta que no... no...» becomes \"It wasn't until... that...\" with an affirmative main verb: \"that I found\", not *that I didn't find.",
      ),
      mc(
        "«Lo que necesito es un día libre.» Which version is correct?",
        [
          "What I need is a day off.",
          "What I need it is a day off.",
          "All what I need is a day off.",
          "That what I need is a day off.",
        ],
        0,
        "In a wh-cleft the what-clause itself is the subject, so no extra \"it\". *All what copies «todo lo que»: it is \"All I need\".",
      ),
      tr(
        "Lo único que tienes que hacer es reiniciar el router.",
        "All you {have to|need to} do is {restart|reboot} the router.",
        "\"All\" + clause means «lo único que». There is no \"what\" after \"all\": *All what you have to do is a direct copy.",
        ["All you have to do is to restart the router.", "The only thing you have to do is restart the router."],
      ),
      fb(
        "Under no circumstances ___ you share your password.",
        "should",
        "Bajo ningún concepto [debes] compartir tu contraseña.",
        ["must"],
        "After a fronted negative the auxiliary comes before the subject: \"should you\". *Under no circumstances you should is the typical error.",
      ),
      tr(
        "Solo entonces entendí lo que había pasado.",
        "Only then did I {understand|realize} what had happened.",
        "\"Only then\" triggers inversion, and with no auxiliary in the sentence you add \"did\" and use the base verb. *Only then I understood copies Spanish word order.",
      ),
      dt(
        "Unlikely as it sounds, the old printer still works perfectly.",
        "Concessive inversion: adjective + \"as\" + subject + verb, then the main clause with no \"but\".",
      ),
      dt(
        "Not once did the manager thank the team for their extra hours.",
        "\"Not once\" fronted: \"did\" + subject + base verb.",
      ),
      lc(
        "Isn't it obvious?",
        "What is the speaker saying?",
        [
          "It is obvious, and the listener should know it",
          "It is not obvious at all",
          "The speaker is genuinely unsure",
          "The speaker wants a yes or no answer",
        ],
        0,
        "A negative rhetorical question asserts a positive, with a falling tone and impatience: the listener should already know.",
      ),
      sp(
        "Much as I admire her, I can't vote for her.",
        "Por mucho que la admire, no puedo votar por ella.",
        "Stress \"admire\" and \"can't\"; pause at the comma.",
        "\"Much as\" + clause concedes a point; the main clause follows with no \"but\".",
      ),
      sp(
        "Never had I seen so many people on the subway.",
        "Nunca había visto tanta gente en el metro.",
        "Stress \"Never\" and \"so many\"; \"had I\" is unstressed.",
        "Negative inversion: \"Never had I seen\", not *Never I had seen. «Metro» in American English is usually \"the subway\".",
      ),
      mc(
        "Which sentence is correct?",
        [
          "Hard as it is to believe, it was my grandmother who fixed the computer.",
          "Hard as is to believe, it was my grandmother who fixed the computer.",
          "Hard as it is to believe, but it was my grandmother who fixed the computer.",
          "Hard as it is to believe, it was my grandmother when fixed the computer.",
        ],
        0,
        "The concessive clause needs its subject and no \"but\"; the it-cleft focuses on a person with \"who\" (or \"that\"), never \"when\".",
      ),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Identifying devices, series and anaphora, error hunt + unit mix
  // ---------------------------------------------------------------------
  drill(
    "en-c2-emphasis-unit-drill-2",
    "Drill: Naming Devices, Series and Anaphora, Emphasis Errors",
    "Identify and describe rhetorical devices, build parallel series and anaphora without overdoing them, and fix the classic errors in concessive clauses, fronting, clefts and inversion.",
    "Recap: spot it, build it, check it",
    [
      "Name the device by what happens next: a question answered at once is hypophora, one left unanswered is rhetorical; fronting \"foregrounds\" an element, a cleft \"puts the spotlight on\" one, negative inversion \"adds gravity\". A series of questions or an anaphora must be parallel, escalate, stop at about three and keep the subject every time.",
      "Errors to hunt: *Strange as seems, *Much as I like it, but..., *That I don't accept it, *Here comes it, *What I need it is, *All what I want, *They were my parents who, *Never I have seen, *Rarely does she complains, *Only when did I arrive I saw.",
    ],
    [
      ["Can anyone seriously call this progress?", "¿Alguien puede llamar a esto progreso en serio? (= nadie)"],
      ["We will not wait. We will not apologize. We will not go back.", "No esperaremos. No pediremos perdón. No daremos marcha atrás."],
      ["It was my cousins who organized the party.", "Fueron mis primos los que organizaron la fiesta."],
      ["Rarely does the bus arrive on time.", "Rara vez llega el autobús a tiempo."],
    ],
    [
      mc(
        "\"Can anyone seriously defend these fees?\" What is this?",
        [
          "A rhetorical question implying that nobody can",
          "Hypophora, because the writer answers it",
          "A real question asking for volunteers",
          "Negative inversion",
        ],
        0,
        "No answer follows and none is expected: the question implies \"nobody can\". It invites the reader to agree.",
      ),
      mt(
        "Match each device with an example.",
        [
          ["hypophora", "Why does it matter? Because we pay for it."],
          ["rhetorical question", "Who in their right mind would sign that?"],
          ["it-cleft", "It is the system that has failed, not the staff."],
          ["wh-cleft", "What we need is a clear timetable."],
          ["negative inversion", "Seldom has a decision been so unpopular."],
          ["anaphora", "We will listen. We will learn. We will act."],
        ],
        "Hypophora answers itself; a rhetorical question leaves its answer implied; clefts single out one element; negative inversion puts the auxiliary before the subject; anaphora repeats the opening of each clause.",
      ),
      fb(
        "The question ___ the reader's objection before it is even raised.",
        "pre-empts",
        "La pregunta [se adelanta a] la objeción del lector antes incluso de que la plantee.",
        ["preempts", "anticipates"],
        "\"Pre-empt an objection\" (American spelling also \"preempt\") describes hypophora that answers the critics' question in advance.",
      ),
      tr(
        "La oración escindida pone el foco en el precio, no en la calidad.",
        "The cleft {sentence |}{puts the spotlight on|focuses on|singles out} the price, not the quality.",
        "\"Put the spotlight on\" and \"single out\" are the precise verbs for what a cleft does. An \"it-cleft\" or \"cleft sentence\" is «oración escindida».",
      ),
      mc(
        "Complete the series so it stays parallel: \"Is it safe? Is it legal? ___\"",
        [
          "Is it what our patients deserve?",
          "Does it have legality for patients?",
          "Patients deserve it?",
          "And what about the patients deserving it?",
        ],
        0,
        "A series works when every question shares the same structure (\"Is it...?\") and the last one is the longest and strongest. A change of structure breaks the rhythm.",
      ),
      mc(
        "Which series escalates most effectively?",
        [
          "Who decided this? Who was consulted? Who will pay for it for the next twenty years?",
          "Who will pay for it for the next twenty years? Who was consulted? Who decided this?",
          "Who decided this? Who decided this? Who decided this?",
          "Who decided this? Who was consulted? Who wrote the memo? Who signed it? Who filed it?",
        ],
        0,
        "Rule of three plus escalation: each question longer or heavier than the last, so the final one lands hardest. Reversing the order deflates it; five items feel like a list; repeating with nothing new adds nothing.",
      ),
      tr(
        "No vamos a esperar. No vamos a pedir permiso. No vamos a rendirnos.",
        "We will not wait. We will not ask for permission. We will not give up.",
        "Anaphora keeps the opening identical, subject included. Spanish can drop «nosotros»; English must repeat \"We\" every time, and that repetition creates the rhythm.",
        [
          "We are not going to wait. We are not going to ask for permission. We are not going to give up.",
          "We will not wait. We will not ask permission. We will not give up.",
          "We are not going to wait. We are not going to ask permission. We are not going to give up.",
          "We will not wait. We will not ask for permission. We will not surrender.",
        ],
      ),
      tr(
        "Todo estudiante merece un mentor. Todo estudiante merece una computadora.",
        "Every student deserves a mentor. Every student deserves a computer.",
        "The repeated part must be identical and complete: *Every student deserves a mentor. Deserves a computer. drops the subject and loses the anaphora.",
        ["Every student deserves a mentor. Every student deserves a laptop."],
      ),
      mc(
        "Where would a series of four rhetorical questions be most out of place?",
        [
          "In the monthly maintenance report for the IT department",
          "At the climax of a campaign speech",
          "In the closing paragraph of an opinion column",
          "In a rallying speech to striking workers",
        ],
        0,
        "Series and anaphora clash with neutral registers: reports, minutes and formal emails. In speeches and op-eds they work, once, at a climax.",
      ),
      fb(
        "With six rhetorical questions in a row, the final paragraph feels ___.",
        "overwrought",
        "Con seis preguntas retóricas seguidas, el último párrafo resulta [recargado].",
        ["melodramatic"],
        "\"Overwrought\" describes rhetoric pushed too far: the reader feels pushed rather than persuaded.",
      ),
      wo(
        "Not for ourselves, but for our grandchildren",
        "No por nosotros, sino por nuestros nietos.",
        "A parallel contrast in a speech close: \"not for X, but for Y\".",
      ),
      mc(
        "Which sentence is correct?",
        [
          "Tempting as it is to blame the weather, the real problem was planning.",
          "Tempting as is to blame the weather, the real problem was planning.",
          "Although tempting as it is to blame the weather, the real problem was planning.",
          "Tempting as it is to blame the weather, but the real problem was planning.",
        ],
        0,
        "Concessive inversion needs its subject (\"it is\"), takes no extra \"although\", and is followed by the main clause without \"but\".",
      ),
      tr(
        "Por mucho que me guste la ciudad, no podría vivir ahí.",
        "{Much as I like|Much as I love|However much I like} the city, I {couldn't|could not} live there.",
        "\"Much as\" or \"However much\" + clause; no \"but\" in the main clause (*Much as I like it, but...).",
        ["Although I really like the city, I couldn't live there."],
      ),
      mc(
        "«Eso no lo acepto.» Which version is correct?",
        [
          "That I don't accept.",
          "That I don't accept it.",
          "That don't I accept.",
          "That it I don't accept.",
        ],
        0,
        "A fronted object leaves an empty gap and keeps normal order. The extra \"it\" copies Spanish «lo».",
      ),
      tr(
        "Ahí está ella, junto a la puerta.",
        "There she is, {by|next to|beside|near} the door.",
        "With a pronoun subject there is no inversion after a place adverbial: \"There she is\", \"Here it comes\". *There is she is wrong; with a noun, \"There is Maria\" is fine.",
      ),
      tr(
        "Lo que me preocupa es el presupuesto.",
        "What worries me is the budget.",
        "The what-clause is the subject; *What worries me it is the budget adds a pronoun that neither language has.",
        ["What concerns me is the budget.", "What I'm worried about is the budget."],
      ),
      tr(
        "Lo único que quiero es una respuesta clara.",
        "All I want is a clear answer.",
        "\"All I want\" means «lo único que quiero»; *All what I want is a calque of «todo lo que».",
        ["The only thing I want is a clear answer.", "All I want is a straight answer."],
      ),
      tr(
        "Fueron mis vecinos los que llamaron a los bomberos.",
        "It was my {neighbors|neighbours} {who|that} called the fire department.",
        "An it-cleft always starts with \"It\" + singular verb, even with a plural focus. *They were my neighbors who copies «Fueron mis vecinos».",
        ["It was my neighbors who called the firefighters.", "It was my neighbours who called the fire brigade."],
      ),
      fb(
        "It wasn't until the lights went out that we ___ how bad the storm was.",
        "realized",
        "Hasta que no se fue la luz no nos [dimos cuenta de] lo fuerte que era la tormenta.",
        ["realised", "understood", "saw"],
        "The negative is already in \"wasn't until\", so the verb after \"that\" is affirmative. Spanish «no nos dimos cuenta» tempts *that we didn't realize.",
      ),
      fb(
        "Rarely ___ my boss complain about overtime.",
        "does",
        "Rara vez se [queja] mi jefa de las horas extra.",
        [],
        "The auxiliary carries the -s, so the main verb is bare: \"Rarely does my boss complain\". *Rarely does she complains marks the tense twice.",
      ),
      fb(
        "Seldom ___ we go out on weeknights when the kids were small.",
        "did",
        "Rara vez [salíamos] entre semana cuando los niños eran pequeños.",
        [],
        "Past tense goes on the auxiliary: \"Seldom did we go\", never *Seldom did we went or *Seldom we went.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "Not only did she fix the leak, but she also repainted the wall.",
          "Not only she fixed the leak, but she also repainted the wall.",
          "Not only did she fixed the leak, but she also repainted the wall.",
          "Not only did she fix the leak, but also did she repaint the wall.",
        ],
        0,
        "Invert the first clause only, with \"did\" + base verb. The second clause keeps normal order: \"but she also repainted\".",
      ),
      mc(
        "Which sentence is correct?",
        [
          "Only when I opened the box did I see the damage.",
          "Only when did I open the box I saw the damage.",
          "Only when I opened the box I saw the damage.",
          "Only when did I open the box did I see the damage.",
        ],
        0,
        "With \"Only when / Only after / Not until\", the time clause keeps normal order and the inversion goes in the main clause.",
      ),
      tr(
        "En ningún momento mencionó el precio.",
        "At no point did {he|she} mention the price.",
        "\"At no point\" triggers inversion: \"did\" + subject + base verb. *At no point he mentioned copies Spanish order.",
        ["At no time did he mention the price.", "At no time did she mention the price."],
      ),
      wo(
        "Nowhere is this clearer than in our hospitals",
        "En ningún sitio se ve esto más claro que en nuestros hospitales.",
        "\"Nowhere\" fronted: \"is\" comes before the subject \"this\".",
      ),
      wo(
        "Never before has the evidence been so clear",
        "Nunca antes habían sido tan claras las pruebas.",
        "Negative inversion with the present perfect: \"has\" + subject + \"been\". \"Evidence\" is uncountable, so the verb is singular.",
      ),
      tr(
        "¿Quién paga la cuenta al final? Los contribuyentes.",
        "Who pays the bill in the end? {The taxpayers|Taxpayers}.",
        "Hypophora: the question is answered at once, here with a short fragment for impact.",
        ["Who pays the bill at the end of the day? Taxpayers.", "Who ends up paying the bill? Taxpayers.", "Who foots the bill in the end? Taxpayers."],
      ),
      dt(
        "What we need is not another meeting but a decision.",
        "A wh-cleft with a contrast: \"What we need is not X but Y\". No \"it\" before \"is\".",
      ),
      dt(
        "Little did we know that the shop would close the following week.",
        "\"Little did we know\": auxiliary + subject + base verb after the restrictive \"little\".",
      ),
      lc(
        "Who would want to work for a company like that?",
        "What does the speaker mean?",
        [
          "Nobody would want to work there",
          "The speaker is looking for applicants",
          "Everybody would like to work there",
          "The speaker wants to know who works there",
        ],
        0,
        "A positive rhetorical question asserts a negative: nobody would. The falling tone confirms it is not a real question.",
      ),
      lc(
        "Strange as it may sound, I actually miss the old office.",
        "What is the speaker conceding?",
        [
          "That it may sound strange to miss the old office",
          "That the old office was strange",
          "That the speaker never liked the old office",
          "That the new office sounds strange",
        ],
        0,
        "The \"as\" clause concedes that the statement may sound strange; the main clause then makes the point.",
      ),
      sp(
        "Not only did he arrive late, but he also forgot his keys.",
        "No solo llegó tarde, sino que además se olvidó las llaves.",
        "Stress \"Not only\" and \"also\"; keep \"did he\" light.",
        "Inversion in the first clause only; the second clause has normal order with \"but... also\".",
      ),
      sp(
        "No child should go hungry. No child should sleep on the street.",
        "Ningún niño debería pasar hambre. Ningún niño debería dormir en la calle.",
        "Say both openings with exactly the same rhythm and stress \"No child\".",
        "Anaphora works only if the repeated opening is identical, subject included.",
      ),
      mc(
        "\"What we need is not another report. Why? Because never before has the evidence been so clear.\" Which devices does it contain?",
        [
          "A wh-cleft, hypophora and negative inversion",
          "An it-cleft, a rhetorical question and fronting",
          "Anaphora, hypophora and concessive inversion",
          "A wh-cleft, a rhetorical question and anaphora",
        ],
        0,
        "\"What we need is...\" is a wh-cleft; \"Why? Because...\" is hypophora (answered at once); \"never before has the evidence been\" is negative inversion.",
      ),
      tr(
        "Por extraño que parezca, fue mi hermano menor quien arregló la computadora.",
        "{Strange|Odd} {as|though} it {may seem|seems|might seem}, it was my {younger|little} brother {who|that} fixed the computer.",
        "Concessive inversion plus an it-cleft: the subject \"it\" in the concession is obligatory, and the cleft starts with \"It was\", not *Was my brother who.",
      ),
    ],
  ),
];
