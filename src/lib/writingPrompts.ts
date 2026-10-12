// The longer pieces on every course's Writing practice pages
// (writingPractice.ts): eight open prompts per level, from a few sentences
// at A1 to a couple of pages at C2, marked by the AI writing feedback.
// They suit any language, so every course shares them; the unit tasks
// beside them come from the lessons. Written in English, with Spanish
// versions for the beginner levels of English for Spanish speakers, whose
// instructions are in Spanish. No model answers: these are open pieces.

export type PromptLevel = "a1" | "a2" | "b1" | "b2" | "c1" | "c2";

export type LongPrompt = {
  id: string;
  /** "Postcard", "Opinion essay": shown above the prompt. */
  genre: string;
  prompt: string;
  rubric: string[];
};

type Bilingual = { genre: [string, string]; prompt: [string, string]; rubric: [string, string][] };

// Word ranges per level. Japanese and Chinese count each character as a
// word (writingFeedback.ts countWords), so they get twice the range.
export const LONG_RANGES: Record<PromptLevel, [number, number]> = {
  a1: [15, 50],
  a2: [40, 100],
  b1: [100, 200],
  b2: [180, 300],
  c1: [300, 500],
  c2: [600, 1000],
};

export function longRange(level: PromptLevel, characterScript: boolean): [number, number] {
  const [min, max] = LONG_RANGES[level];
  return characterScript ? [min * 2, max * 2] : [min, max];
}

// [English, Spanish] for A1 and A2.
const BEGINNER: Record<"a1" | "a2", Bilingual[]> = {
  a1: [
    {
      genre: ["About me", "Sobre mí"],
      prompt: [
        "Introduce yourself to a new classmate: your name, where you are from, where you live and what you do.",
        "Preséntate a un compañero de clase nuevo: tu nombre, de dónde eres, dónde vives y a qué te dedicas.",
      ],
      rubric: [
        ["Say your name and where you are from", "Di tu nombre y de dónde eres"],
        ["Say where you live", "Di dónde vives"],
        ["Say what you do (job or studies)", "Di a qué te dedicas (trabajo o estudios)"],
      ],
    },
    {
      genre: ["My family", "Mi familia"],
      prompt: [
        "Describe two people in your family: who they are, how old they are and what they are like.",
        "Describe a dos personas de tu familia: quiénes son, cuántos años tienen y cómo son.",
      ],
      rubric: [
        ["Name two family members", "Nombra a dos familiares"],
        ["Give each person's age", "Di la edad de cada uno"],
        ["Use at least two adjectives to describe them", "Usa al menos dos adjetivos para describirlos"],
      ],
    },
    {
      genre: ["Text message", "Mensaje"],
      prompt: [
        "Text a friend to invite them for a coffee: say the day, the time and the place.",
        "Escribe un mensaje a un amigo para invitarlo a un café: di el día, la hora y el lugar.",
      ],
      rubric: [
        ["Greet your friend and invite them", "Saluda a tu amigo e invítalo"],
        ["Give the day and the time", "Di el día y la hora"],
        ["Say where you will meet", "Di dónde quedan"],
      ],
    },
    {
      genre: ["My day", "Mi día"],
      prompt: [
        "Describe a normal weekday: what you do in the morning, the afternoon and the evening.",
        "Describe un día normal entre semana: qué haces por la mañana, por la tarde y por la noche.",
      ],
      rubric: [
        ["Use at least four everyday verbs in the present", "Usa al menos cuatro verbos cotidianos en presente"],
        ["Give at least two times of day", "Di al menos dos horas del día"],
        ["Put the activities in order", "Pon las actividades en orden"],
      ],
    },
    {
      genre: ["My home", "Mi casa"],
      prompt: [
        "Describe your home: how many rooms it has, your favourite room and what is in it.",
        "Describe tu casa: cuántas habitaciones tiene, cuál es tu habitación favorita y qué hay en ella.",
      ],
      rubric: [
        ["Say how big your home is or how many rooms it has", "Di cómo es de grande tu casa o cuántas habitaciones tiene"],
        ["Name your favourite room", "Di cuál es tu habitación favorita"],
        ["List at least three things in it", "Nombra al menos tres cosas que hay en ella"],
      ],
    },
    {
      genre: ["Shopping list", "Lista de la compra"],
      prompt: [
        "You are cooking dinner for friends. Write a note to your flatmate saying what to buy and how much of each thing.",
        "Vas a hacer la cena para unos amigos. Escribe una nota a tu compañero de piso diciendo qué tiene que comprar y cuánto de cada cosa.",
      ],
      rubric: [
        ["Name at least four foods or drinks", "Nombra al menos cuatro comidas o bebidas"],
        ["Give a quantity for each one", "Di una cantidad para cada una"],
        ["Say thank you", "Da las gracias"],
      ],
    },
    {
      genre: ["Likes", "Gustos"],
      prompt: [
        "Write about what you like and don't like to do at the weekend.",
        "Escribe sobre lo que te gusta y lo que no te gusta hacer el fin de semana.",
      ],
      rubric: [
        ["Say at least two things you like", "Di al menos dos cosas que te gustan"],
        ["Say one thing you don't like", "Di una cosa que no te gusta"],
        ["Give a reason for one of them", "Da una razón para una de ellas"],
      ],
    },
    {
      genre: ["Postcard", "Postal"],
      prompt: [
        "Write a short postcard from a holiday: where you are, what the weather is like and what there is to do.",
        "Escribe una postal breve desde tus vacaciones: dónde estás, qué tiempo hace y qué se puede hacer.",
      ],
      rubric: [
        ["Say where you are", "Di dónde estás"],
        ["Describe the weather", "Describe el tiempo"],
        ["Say what there is in the place", "Di qué hay en el lugar"],
      ],
    },
  ],
  a2: [
    {
      genre: ["Last weekend", "El fin de semana pasado"],
      prompt: [
        "Write an email to a friend telling them what you did last weekend and who you were with.",
        "Escribe un correo a un amigo contándole qué hiciste el fin de semana pasado y con quién estuviste.",
      ],
      rubric: [
        ["Tell at least three things you did, in the past", "Cuenta al menos tres cosas que hiciste, en pasado"],
        ["Say who you were with", "Di con quién estuviste"],
        ["Say how it went or how you felt", "Di qué tal fue o cómo te sentiste"],
      ],
    },
    {
      genre: ["Thank-you note", "Nota de agradecimiento"],
      prompt: [
        "A friend let you stay at their place for a few days. Write a note to thank them and say what you liked most.",
        "Un amigo te dejó quedarte en su casa unos días. Escríbele una nota para darle las gracias y decirle qué te gustó más.",
      ],
      rubric: [
        ["Thank them warmly", "Dale las gracias con cariño"],
        ["Mention two specific things you enjoyed", "Menciona dos cosas concretas que disfrutaste"],
        ["Invite them to visit you", "Invítalo a visitarte"],
      ],
    },
    {
      genre: ["Plans", "Planes"],
      prompt: [
        "Write to a friend about your plans for the next holidays: where you are going, how you will travel and what you want to do.",
        "Escribe a un amigo sobre tus planes para las próximas vacaciones: adónde vas a ir, cómo vas a viajar y qué quieres hacer.",
      ],
      rubric: [
        ["Use the future to talk about your plans", "Usa el futuro para hablar de tus planes"],
        ["Say how you will travel", "Di cómo vas a viajar"],
        ["Mention at least two activities", "Menciona al menos dos actividades"],
      ],
    },
    {
      genre: ["Comparison", "Comparación"],
      prompt: [
        "Compare the town where you live with another town you know. Which do you prefer, and why?",
        "Compara la ciudad donde vives con otra ciudad que conozcas. ¿Cuál prefieres y por qué?",
      ],
      rubric: [
        ["Use at least two comparisons (more… than, less… than, as… as)", "Usa al menos dos comparaciones (más… que, menos… que, tan… como)"],
        ["Describe both places", "Describe los dos lugares"],
        ["Say which you prefer and why", "Di cuál prefieres y por qué"],
      ],
    },
    {
      genre: ["Childhood", "La infancia"],
      prompt: [
        "Describe what your life was like when you were a child: where you lived, what you used to do and who your friends were.",
        "Describe cómo era tu vida cuando eras niño: dónde vivías, qué hacías normalmente y quiénes eran tus amigos.",
      ],
      rubric: [
        ["Describe habits in the past (used to…)", "Describe costumbres del pasado (de pequeño hacía…)"],
        ["Describe a place or a person from your childhood", "Describe un lugar o una persona de tu infancia"],
        ["Say one thing that has changed since then", "Di una cosa que ha cambiado desde entonces"],
      ],
    },
    {
      genre: ["Review", "Opinión"],
      prompt: [
        "Write a short review of a restaurant or café you went to recently: the food, the service and the price.",
        "Escribe una reseña breve de un restaurante o una cafetería donde estuviste hace poco: la comida, el servicio y el precio.",
      ],
      rubric: [
        ["Say what you ate or drank", "Di qué comiste o bebiste"],
        ["Give your opinion of the food and the service", "Da tu opinión sobre la comida y el servicio"],
        ["Say whether you recommend it", "Di si lo recomiendas"],
      ],
    },
    {
      genre: ["Directions", "Indicaciones"],
      prompt: [
        "A friend is coming to your home for the first time. Write how to get there from the nearest station or bus stop.",
        "Un amigo va a tu casa por primera vez. Escríbele cómo llegar desde la estación o la parada de autobús más cercana.",
      ],
      rubric: [
        ["Give at least three steps in order", "Da al menos tres pasos en orden"],
        ["Use instructions (turn, go straight on, cross…)", "Usa instrucciones (gira, sigue recto, cruza…)"],
        ["Mention a landmark", "Menciona un punto de referencia"],
      ],
    },
    {
      genre: ["Problem", "Un problema"],
      prompt: [
        "Write to your landlord or a shop about a problem: something in your flat is broken, or something you bought doesn't work. Ask them to fix it.",
        "Escribe al dueño de tu piso o a una tienda por un problema: algo de tu piso está roto o algo que compraste no funciona. Pide que lo arreglen.",
      ],
      rubric: [
        ["Explain the problem clearly", "Explica el problema con claridad"],
        ["Say when it started or when you bought it", "Di cuándo empezó o cuándo lo compraste"],
        ["Ask politely for a solution", "Pide una solución con educación"],
      ],
    },
  ],
};

const UPPER: Record<"b1" | "b2" | "c1" | "c2", Omit<LongPrompt, "id">[]> = {
  b1: [
    {
      genre: "Personal letter",
      prompt: "Write to a friend you haven't seen for a long time. Tell them what has happened in your life recently and what you are hoping to do next.",
      rubric: ["Narrate recent events in the past", "Describe how you felt about them", "Talk about a hope or plan for the future", "End with a question for your friend"],
    },
    {
      genre: "Story",
      prompt: "Tell the story of a day when everything went wrong, from the moment you woke up.",
      rubric: ["Set the scene (when, where, who)", "Use past tenses to tell what happened and what was going on", "Use time connectors (then, suddenly, in the end)", "Say how it ended"],
    },
    {
      genre: "Opinion post",
      prompt: "Write a post for an online forum: is it better to live in a big city or in the countryside? Give your opinion with reasons.",
      rubric: ["State your opinion clearly", "Give at least two reasons", "Mention one point on the other side", "Finish with a conclusion"],
    },
    {
      genre: "Film or book",
      prompt: "Describe a film or book you liked: what it is about, who the main characters are and why you would recommend it.",
      rubric: ["Summarize the plot without giving away the ending", "Describe a main character", "Explain why you liked it", "Say who it would suit"],
    },
    {
      genre: "Advice",
      prompt: "A friend wants to learn a new language but has very little time. Write them a message with advice.",
      rubric: ["Show you understand their problem", "Give at least three pieces of advice", "Use expressions like 'you should' or 'if I were you'", "Encourage them"],
    },
    {
      genre: "Formal email",
      prompt: "Write to a language school asking about their summer courses: dates, prices, accommodation and levels.",
      rubric: ["Use a formal greeting and closing", "Say who you are and why you are writing", "Ask at least three clear questions", "Keep a polite, formal tone throughout"],
    },
    {
      genre: "Experience",
      prompt: "Describe an experience that changed the way you think about something.",
      rubric: ["Explain what happened", "Describe how you thought before and after", "Use past tenses correctly", "Reflect on what you learned"],
    },
    {
      genre: "Complaint",
      prompt: "You ordered something online and it arrived late and damaged. Write to the company to complain and say what you want them to do.",
      rubric: ["Explain what you ordered and what went wrong", "Express your dissatisfaction politely but firmly", "Say clearly what you want (refund, replacement)", "Use a suitable formal register"],
    },
  ],
  b2: [
    {
      genre: "For-and-against essay",
      prompt: "Should working from home become the norm? Write an essay weighing the advantages and disadvantages.",
      rubric: ["Introduce the issue", "Develop arguments on both sides", "Use connectors of contrast and addition (however, moreover, on the other hand)", "Reach a reasoned conclusion"],
    },
    {
      genre: "Article",
      prompt: "Write an article for a local magazine about a place in your town that visitors usually miss.",
      rubric: ["Give the article an engaging title and opening", "Describe the place vividly", "Explain why it is worth visiting", "Address the reader directly at some point"],
    },
    {
      genre: "Formal letter",
      prompt: "Write to your local council proposing an improvement to your neighbourhood (a park, a cycle lane, a community centre). Explain why it is needed.",
      rubric: ["Use formal register and conventions", "Describe the current problem", "Present your proposal and its benefits", "Anticipate an objection and answer it"],
    },
    {
      genre: "Review",
      prompt: "Review a series, album or exhibition you've seen or heard recently, for readers who don't know it.",
      rubric: ["Give enough background for a new reader", "Evaluate strengths and weaknesses", "Support your judgements with specific examples", "End with a clear recommendation"],
    },
    {
      genre: "Hypothetical",
      prompt: "If you could change one decision in your life, what would it be, and how would your life be different now?",
      rubric: ["Describe the real decision and its context", "Use past hypotheticals (if I had…, I would have…)", "Imagine the present consequences", "Reflect on whether you would really change it"],
    },
    {
      genre: "Report",
      prompt: "Your company or school wants to reduce its environmental impact. Write a short report with your findings and recommendations.",
      rubric: ["Use headings or clear sections", "Describe the current situation", "Make at least three concrete recommendations", "Use an impersonal, objective style"],
    },
    {
      genre: "Narrative",
      prompt: "Write a short story that begins: 'Nobody noticed the letter until it was too late.'",
      rubric: ["Start with the given sentence", "Build some tension or mystery", "Use a range of past tenses and reported speech", "Give the story a satisfying ending"],
    },
    {
      genre: "Cover letter",
      prompt: "Apply for a job or volunteer role you'd genuinely like. Explain why you are a good fit.",
      rubric: ["Name the role and where you saw it", "Link your experience and skills to the role", "Show motivation with concrete examples", "Close formally and ask for an interview"],
    },
  ],
  c1: [
    {
      genre: "Argumentative essay",
      prompt: "'Social media has done more harm than good to public debate.' Discuss.",
      rubric: ["Set out a clear thesis in the introduction", "Develop each argument with evidence or examples", "Concede and rebut a counter-argument", "Use a wide range of cohesive devices", "Conclude by drawing the argument together"],
    },
    {
      genre: "Proposal",
      prompt: "Write a proposal to a funding body for a cultural project in your community. Explain the aims, the plan, the budget in outline and how you will measure success.",
      rubric: ["Structure the proposal with clear sections", "State the aims and who will benefit", "Outline the plan and resources", "Explain how success will be measured", "Keep a persuasive, formal register"],
    },
    {
      genre: "Opinion column",
      prompt: "Write an opinion column on whether tourism should be limited in popular cities.",
      rubric: ["Open with a hook that sets out your stance", "Support it with specific examples", "Use rhetorical devices (questions, contrast, emphasis)", "Address the opposing view fairly", "End with a memorable close"],
    },
    {
      genre: "Critical review",
      prompt: "Write a critical review of a book, film or play that divides opinion. Explain why it provokes such different reactions and give your own judgement.",
      rubric: ["Summarize the work concisely", "Explain the divided reactions", "Analyse style or technique, not just plot", "Give a nuanced personal judgement"],
    },
    {
      genre: "Formal complaint",
      prompt: "A public service (transport, health, a university) has repeatedly let you down. Write a formal letter of complaint that sets out the history and asks for specific action.",
      rubric: ["Set out the events in a clear sequence", "Keep a controlled, formal tone", "Refer to the impact on you", "Request specific remedies with a deadline"],
    },
    {
      genre: "Reflective essay",
      prompt: "Reflect on how learning another language has changed (or could change) the way you see your own culture.",
      rubric: ["Ground the reflection in concrete experiences", "Explore more than one aspect of the question", "Use sophisticated vocabulary and nominalization", "Reach a thoughtful conclusion"],
    },
    {
      genre: "Report",
      prompt: "Write a report for your employer on the results of a staff survey about working conditions, with recommendations.",
      rubric: ["Use an objective, impersonal register", "Present the main findings clearly", "Interpret the findings rather than just listing them", "Make prioritized recommendations"],
    },
    {
      genre: "Speech",
      prompt: "Write a speech to give at the graduation of a class of students, offering them advice for the next stage of life.",
      rubric: ["Address the audience directly and appropriately", "Organize the advice around a clear theme", "Use rhetorical devices for effect", "Balance warmth with substance"],
    },
  ],
  c2: [
    {
      genre: "Discursive essay",
      prompt: "'Technology makes us more connected and more alone.' Write an essay exploring this paradox.",
      rubric: ["Frame the paradox in a compelling introduction", "Develop several distinct lines of argument", "Weave in examples, evidence or references", "Handle nuance and counter-arguments with precision", "Conclude with an original insight"],
    },
    {
      genre: "Feature article",
      prompt: "Write a long-form feature article about a profession that is disappearing, mixing description, interviews you imagine and reflection.",
      rubric: ["Open with a vivid scene or anecdote", "Integrate quoted voices naturally", "Shift between narration, information and reflection", "Sustain a consistent journalistic voice", "End with a resonant close"],
    },
    {
      genre: "Short story",
      prompt: "Write a short story in which a single object connects three generations of a family.",
      rubric: ["Create distinct characters across the generations", "Handle shifts in time clearly", "Use literary techniques (imagery, dialogue, foreshadowing)", "Let the object carry symbolic weight", "Give the ending emotional resonance"],
    },
    {
      genre: "Policy paper",
      prompt: "Write a policy paper for a government department recommending how to tackle loneliness among older people.",
      rubric: ["Summarize the problem with supporting evidence", "Evaluate existing approaches", "Set out costed or prioritized recommendations", "Anticipate risks and objections", "Maintain a precise, formal register"],
    },
    {
      genre: "Literary review",
      prompt: "Write a review essay comparing two works (books, films or albums) that treat the same theme in very different ways.",
      rubric: ["Introduce both works and the shared theme", "Compare technique, tone and structure in depth", "Support claims with close reference to the works", "Reach an evaluative conclusion"],
    },
    {
      genre: "Memoir",
      prompt: "Write a memoir piece about a place that shaped you, and what returning to it (or never returning) means to you now.",
      rubric: ["Evoke the place with precise sensory detail", "Move between past and present with control", "Reflect on change and memory", "Use a distinctive personal voice"],
    },
    {
      genre: "Open letter",
      prompt: "Write an open letter to the head of a large company or institution, challenging a decision it has made and proposing an alternative.",
      rubric: ["Establish your standing and the decision at issue", "Build a rigorous case with evidence", "Use rhetoric persuasively but with restraint", "Propose a credible alternative", "Close with a clear call to action"],
    },
    {
      genre: "Debate essay",
      prompt: "Should a country's history be judged by today's moral standards? Write a balanced essay that takes a final position.",
      rubric: ["Define the terms of the debate", "Present the strongest version of each side", "Use historical examples to illustrate", "Take and justify a final, nuanced position"],
    },
  ],
};

/**
 * A level's longer pieces. `spanish` gives the Spanish versions (English
 * for Spanish speakers at A1 and A2, whose instructions are in Spanish).
 */
export function longPrompts(level: PromptLevel, spanish = false): LongPrompt[] {
  if (level === "a1" || level === "a2") {
    const i = spanish ? 1 : 0;
    return BEGINNER[level].map((p, n) => ({
      id: `p${n + 1}`,
      genre: p.genre[i],
      prompt: p.prompt[i],
      rubric: p.rubric.map((r) => r[i]),
    }));
  }
  return UPPER[level].map((p, n) => ({ ...p, id: `p${n + 1}` }));
}
