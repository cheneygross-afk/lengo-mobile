// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u21-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u21 (job interviews: pitch, strengths, weaknesses, STAR, tone, rewrites, precise verbs, verb complementation): a short recap, then graded practice.

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

export const EN_C2_U21_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Parts 1-4 and STAR practice: pitch, strengths, weaknesses, STAR
  // ---------------------------------------------------------------------
  drill(
    "en-c2-interviews-unit-drill-1",
    "Drill: Pitch, Strengths, Weaknesses and STAR",
    "Deliver an interview pitch in the right tenses, back strengths with evidence, frame a weakness constructively and tell a STAR story with accurate narrative tenses and results.",
    "Recap: from the pitch to the STAR story",
    [
      "In the pitch, experience that continues now takes the present perfect with \"for\" or \"since\" (never *I work here since 2019), dated achievements take the past simple, and job titles need \"a/an\". Strengths are a softened claim plus evidence (\"I'd say...\", \"good at\" + -ing, \"good with\" people); weaknesses are real, non-central, and followed by the action and the progress.",
      "In STAR answers, the background goes in the past continuous (actions in progress) or past perfect (earlier events), states stay in the past simple, your actions take \"I\" and the past simple, and results take \"by\" and \"from... to\": \"fell by 30%\", \"from ten days to six\".",
    ],
    [
      ["I've been with the company since 2020, and I'm now a team lead.", "Estoy en la empresa desde 2020 y ahora soy jefe de equipo."],
      ["Colleagues tend to come to me when a client is unhappy.", "Los compañeros suelen acudir a mí cuando un cliente está descontento."],
      ["The supplier had already missed two deliveries, so I was asked to step in.", "El proveedor ya había fallado dos entregas, así que me pidieron que interviniera."],
      ["Late payments fell by a quarter within six months.", "Los pagos atrasados bajaron un cuarto en seis meses."],
    ],
    [
      // --- Part 1: the pitch ---
      mc(
        "Which sentence is correct in an interview pitch?",
        [
          "I've worked in hospital administration for six years.",
          "I work in hospital administration since six years.",
          "I'm working in hospital administration for six years.",
          "I worked in hospital administration since six years.",
        ],
        0,
        "Experience that started in the past and continues now takes the present perfect, and a length of time takes \"for\". The present (*I work... since) and the present continuous are calques of «trabajo desde hace»; «desde hace» is always \"for\".",
      ),
      fb(
        "I ___ a structural engineer, and I've spent most of my career on bridges.",
        "am an",
        "[Soy] ingeniero de estructuras y he pasado la mayor parte de mi carrera trabajando en puentes.",
        ["'m an"],
        "Before a job title English needs an article: \"I'm an engineer\". *I'm structural engineer copies «soy ingeniero», where Spanish uses no article.",
      ),
      tr(
        "Tengo siete años de experiencia en el sector farmacéutico.",
        "I have seven years' experience in the pharmaceutical industry.",
        [
          "I have seven years of experience in the pharmaceutical industry.",
          "I've got seven years' experience in the pharmaceutical industry.",
          "I have seven years' experience in the pharmaceutical sector.",
          "I have seven years of experience in the pharmaceutical sector.",
          "I have seven years' experience in pharmaceuticals.",
          "I have seven years of experience in pharmaceuticals.",
          "I have seven years' experience in the pharma industry.",
          "I have seven years of experience in the pharma industry.",
        ],
        "\"Seven years' experience\" (with the possessive apostrophe) or \"seven years of experience\". \"Experience\" in this sense is uncountable, so never *seven years of experiences.",
      ),
      tr(
        "Entré en la empresa en 2018 y desde entonces he dirigido tres lanzamientos.",
        "I joined the company in 2018 and I have led three launches since then.",
        [
          "I joined the company in 2018 and I've led three launches since then.",
          "I joined the company in 2018, and since then I have led three launches.",
          "I joined the company in 2018, and since then I've led three launches.",
          "I joined the company in 2018 and have led three launches since then.",
          "I joined the company in 2018 and have since led three launches.",
          "I joined the company in 2018 and I've since led three launches.",
          "I joined the company in 2018 and I've led three product launches since then.",
          "I joined the firm in 2018 and I've led three launches since then.",
        ],
        "A finished date (\"in 2018\") takes the past simple; the period from then to now takes the present perfect. *I've joined in 2018 is impossible because the present perfect cannot go with a finished time.",
      ),
      fb(
        "Your work on renewable energy really ___ my eye.",
        "caught",
        "Su trabajo en energías renovables me [llamó] mucho la atención.",
        [],
        "«Me llamó la atención» is \"caught my eye\" or \"stood out to me\". *Called my attention is a calque that sounds odd in English.",
      ),
      tr(
        "Me hace mucha ilusión la posibilidad de trabajar con clientes internacionales.",
        "I'm really excited about the prospect of working with international clients.",
        [
          "I am really excited about the prospect of working with international clients.",
          "I'm really excited about the possibility of working with international clients.",
          "I am really excited about the possibility of working with international clients.",
          "I'm really looking forward to the possibility of working with international clients.",
          "I'm really excited about the chance to work with international clients.",
          "I'm very excited about the prospect of working with international clients.",
          "I'm very excited about the possibility of working with international clients.",
        ],
        "«Me hace ilusión» has no single-word equivalent: \"I'm really excited about\" or \"I'd love the chance to\". \"Illusion\" means a false impression, so *it makes me illusion is meaningless.",
      ),
      wo(
        "What drew me to this role is the focus on research.",
        "Lo que me atrajo de este puesto es el enfoque en la investigación.",
        "\"What drew me to this role\" is a noun clause acting as the subject, followed by \"is\". It is a natural bridge from your past to why you are applying.",
      ),
      // --- Part 2: strengths ---
      fb(
        "I'd say one of my strengths is that I'm ___ negotiating with suppliers.",
        "good at",
        "Diría que uno de mis puntos fuertes es que [se me da bien] negociar con proveedores.",
        [],
        "\"Good at\" + noun or -ing: \"good at negotiating\". *Good in negotiating and *good for negotiating are calques; \"good with\" is for people and tools.",
      ),
      mc(
        "«Se me dan muy bien los pacientes mayores.» Which is the natural translation?",
        [
          "I'm very good with elderly patients.",
          "I'm very good at elderly patients.",
          "Elderly patients give me very well.",
          "I'm very good for elderly patients.",
        ],
        0,
        "\"Good with\" is for people and tools (\"good with clients\", \"good with numbers\"). \"Good at\" needs an activity, and \"good for\" means beneficial to, which changes the meaning.",
      ),
      tr(
        "Soy muy resolutivo y tengo una gran capacidad de trabajo.",
        "I'm very resourceful and I have a strong work ethic.",
        [
          "I am very resourceful and I have a strong work ethic.",
          "I'm very resourceful and have a strong work ethic.",
          "I'm very resourceful, and I have a strong work ethic.",
          "I'm very good at solving problems and I have a strong work ethic.",
          "I'm very decisive and I have a strong work ethic.",
          "I'm very resourceful and I have a great work ethic.",
        ],
        "«Resolutivo» is \"resourceful\", \"decisive\" or \"good at solving problems\"; «capacidad de trabajo» is \"a strong work ethic\". Literal versions (*capacity of work) sound translated.",
      ),
      mt(
        "Match each Spanish CV quality with its natural English equivalent.",
        [
          ["polivalente", "versatile"],
          ["don de gentes", "people skills"],
          ["implicado", "committed"],
          ["responsable (persona)", "reliable"],
          ["sensato", "sensible"],
        ],
        "«Responsable» describing a person is usually \"reliable\" or \"conscientious\"; \"responsible for\" is for duties. \"Sensible\" is the false friend: it means «sensato», not «sensible».",
      ),
      sp(
        "I've been told I'm good at spotting errors in contracts.",
        "Me han dicho que se me da bien detectar errores en los contratos.",
        "Contract \"I've been\" to /aɪv bɪn/; stress \"good\" and \"errors\".",
        "\"I've been told I'm good at...\" is a softened opener: the praise comes from others, so the claim does not sound arrogant.",
      ),
      // --- Part 3: weaknesses ---
      mc(
        "A candidate wants to say «Antes era muy sensible a las críticas». Which is correct?",
        [
          "I used to be very sensitive to criticism.",
          "I used to be very sensible to criticism.",
          "I used to be very sensitive to the critics.",
          "I was used to be very sensitive to criticism.",
        ],
        0,
        "«Sensible» is \"sensitive\"; \"sensible\" means reasonable. \"Criticism\" is uncountable; \"critics\" are people who review films. \"Used to\" + infinitive shows a past state that has changed (*was used to be mixes it up with \"be used to\").",
      ),
      tr(
        "Soy muy exigente conmigo mismo, lo que a veces me hace ir más lento.",
        "I have very high standards, which sometimes slows me down.",
        [
          "I have very high standards, which can slow me down.",
          "I'm very demanding of myself, which sometimes slows me down.",
          "I am very demanding of myself, which sometimes slows me down.",
          "I set very high standards for myself, which sometimes slows me down.",
          "I have very high standards for myself, which sometimes slows me down.",
          "I'm very demanding of myself, which can slow me down.",
        ],
        "«Exigente conmigo mismo» is \"I have very high standards\" or \"I'm very demanding of myself\". *I'm very exigent is a false cognate that native speakers rarely use.",
      ),
      fb(
        "I sometimes get ___ when three projects peak in the same week.",
        "overwhelmed",
        "A veces [me agobio] cuando tres proyectos coinciden en la misma semana.",
        ["stressed"],
        "«Me agobio» is \"I get overwhelmed\" or \"I get stressed\". \"Get\" + adjective describes a change of state, like the Spanish reflexive.",
      ),
      fb(
        "I used to avoid giving negative feedback, but I've ___ learned to address problems early.",
        "since",
        "Antes evitaba dar comentarios negativos, pero [desde entonces] he aprendido a abordar los problemas pronto.",
        [],
        "\"Since\" as an adverb between \"have\" and the participle means \"between then and now\". It pairs naturally with \"used to\" to show change.",
      ),
      tr(
        "Puedo impacientarme cuando las reuniones se alargan sin llegar a ninguna decisión.",
        "I can get impatient when meetings drag on without reaching a decision.",
        [
          "I can get impatient when meetings go on without reaching a decision.",
          "I can become impatient when meetings drag on without reaching a decision.",
          "I can get impatient when meetings drag on without reaching any decision.",
          "I can get impatient when meetings drag on and no decision is reached.",
          "I can get impatient when meetings run long without reaching a decision.",
          "I can get impatient when meetings go on and on without reaching a decision.",
        ],
        "\"Can\" + verb softens a tendency, like «a veces me pasa que...». Adding the context (\"when meetings drag on\") makes the weakness concrete rather than a vague label.",
      ),
      dt(
        "An area I'm actively developing is presenting to senior management.",
        "Neutral framing of a weakness: \"An area I'm actively developing is...\". Listen for the weak \"to\" in \"presenting to\".",
      ),
      // --- Part 4: STAR ---
      fb(
        "When I joined the project, the client ___ already threatened to cancel the contract twice.",
        "had",
        "Cuando me incorporé al proyecto, el cliente ya [había] amenazado dos veces con cancelar el contrato.",
        [],
        "The past perfect sets an earlier layer of background in the Situation: the threats came before you joined. \"Already\" is a strong signal for \"had\" + participle.",
      ),
      mc(
        "Which sentence sets the scene correctly in a STAR answer?",
        [
          "The office was understaffed and the deadline was very tight.",
          "The office was being understaffed and the deadline was being very tight.",
          "The office would be understaffed and the deadline would be very tight.",
          "The office has been understaffed and the deadline has been very tight.",
        ],
        0,
        "States in the background take the past simple. Spanish uses the «imperfecto» for all background, but English keeps the continuous for actions in progress only, and \"would\" here sounds hypothetical.",
      ),
      tr(
        "Estábamos migrando todos los datos de los clientes cuando el servidor principal falló.",
        "We were migrating all the customer data when the main server failed.",
        [
          "We were migrating all the client data when the main server failed.",
          "We were migrating all our customer data when the main server failed.",
          "We were migrating all our client data when the main server failed.",
          "We were migrating all the customer data when the main server went down.",
          "We were migrating all the client data when the main server went down.",
          "We were migrating all the customer data when the main server crashed.",
          "We were migrating all the client data when the main server crashed.",
        ],
        "The past continuous for the action in progress, the past simple for the event that interrupted it. A plain *We migrated... when the server failed would suggest the migration started after the failure.",
      ),
      tr(
        "Me encargaron reducir los costos de envío sin perder clientes.",
        "I was asked to cut shipping costs without losing customers.",
        [
          "I was asked to reduce shipping costs without losing customers.",
          "I was asked to cut shipping costs without losing any customers.",
          "I was asked to reduce shipping costs without losing any customers.",
          "I was asked to cut shipping costs without losing clients.",
          "I was asked to reduce shipping costs without losing clients.",
          "My task was to cut shipping costs without losing customers.",
          "My task was to reduce shipping costs without losing customers.",
          "I was put in charge of cutting shipping costs without losing customers.",
        ],
        "«Me encargaron» is \"I was asked to\" or \"I was put in charge of\" + -ing. \"My task was to...\" is the standard way to state the Task in STAR.",
      ),
      mc(
        "The interviewer asks, \"Tell me about a time you had to win over a skeptical stakeholder.\" Which answer is in the right form?",
        [
          "I set up a one-on-one meeting and walked her through the risk analysis.",
          "I would set up a one-on-one meeting and walk her through the risk analysis.",
          "We would usually set up meetings and walk people through the analysis.",
          "I usually set up a meeting and walk people through the analysis.",
        ],
        0,
        "A behavioral question asks what you did on one occasion: past simple and \"I\". The conditional treats it as a hypothetical, and \"usually\" turns it into a general habit, the two classic STAR faults.",
      ),
      fb(
        "As a result, customer churn fell ___ 18% in one year.",
        "by",
        "Como resultado, la tasa de bajas de clientes bajó [un] 18% en un año.",
        [],
        "A change measured as a difference takes \"by\": \"fell by 18%\", \"increased by 20%\". *Fell in 18% is a calque of «bajar en un 18%».",
      ),
      tr(
        "Redujimos el tiempo de respuesta de cuarenta y ocho horas a seis.",
        "We cut the response time from forty-eight hours to six.",
        [
          "We cut response time from forty-eight hours to six.",
          "We reduced the response time from forty-eight hours to six.",
          "We reduced response time from forty-eight hours to six.",
          "We cut the response time from 48 hours to six.",
          "We cut the response time from 48 hours to 6.",
          "We reduced the response time from 48 hours to 6.",
          "We brought the response time down from forty-eight hours to six.",
        ],
        "«De... a...» for a change is \"from... to...\". Numbers make the Result concrete, which is what the interviewer remembers.",
      ),
      lc(
        "In hindsight, I would have flagged the risk to my manager much earlier.",
        "What is the speaker doing?",
        [
          "Reflecting on what they would do differently",
          "Describing what they actually did at the time",
          "Saying that the manager ignored the warning",
          "Explaining a plan for the next project",
        ],
        0,
        "\"In hindsight, I would have...\" is a reflection on a past choice: they did not flag it early, and now see that they should have. Reflection shows maturity in a mixed-result answer.",
      ),
      // --- STAR practice: conflict, failure, leadership ---
      mc(
        "«Discutimos con el otro departamento sobre el presupuesto» (we disagreed sharply). Which fits best?",
        [
          "We disagreed with the other department about the budget.",
          "We discussed about the budget with the other department.",
          "We discussed with the other department about the budget.",
          "We argued the other department about the budget.",
        ],
        0,
        "«Discutir» in the sense of disagreeing is \"disagree\" or \"argue with\". \"Discuss\" means talk calmly and takes no \"about\": *discussed about is a typical error.",
      ),
      wo(
        "I underestimated how long the legal approval would take.",
        "Subestimé cuánto tiempo llevaría la aprobación legal.",
        "An embedded question keeps statement order: \"how long the approval would take\", not *how long would the approval take. \"Would\" is the future seen from the past.",
      ),
      tr(
        "Incumplí el plazo porque no había previsto tiempo para las revisiones.",
        "I missed the deadline because I hadn't built in any time for reviews.",
        [
          "I missed the deadline because I hadn't built in time for reviews.",
          "I missed the deadline because I had not built in any time for reviews.",
          "I missed the deadline because I hadn't allowed any time for reviews.",
          "I missed the deadline because I hadn't allowed time for reviews.",
          "I missed the deadline because I hadn't planned any time for reviews.",
          "I missed the deadline because I hadn't built in any time for the reviews.",
          "I missed the deadline because I hadn't allowed any time for the reviews.",
        ],
        "The cause happened before the result, so it takes the past perfect. Saying \"I missed the deadline\" rather than \"the deadline was missed\" shows ownership.",
      ),
      wo(
        "Nobody owned the problem, so I took the initiative.",
        "Nadie se responsabilizaba del problema, así que tomé la iniciativa.",
        "\"Take the initiative\" needs \"the\". The comma before \"so\" separates the situation from your action.",
      ),
      fb(
        "Against all odds, we managed to ___ two days before the launch.",
        "pull it off",
        "Contra todo pronóstico, conseguimos [sacarlo adelante] dos días antes del lanzamiento.",
        ["see it through", "get it over the line"],
        "«Sacar adelante» is \"pull it off\", \"see it through\" or \"get it over the line\". \"Manage to\" stresses that it was difficult.",
      ),
      // --- Combined and traps ---
      tr(
        "Llevo tres años trabajando en esta empresa, pero antes pasé dos en una consultora.",
        "I've been working at this company for three years, but before that I spent two at a consultancy.",
        [
          "I have been working at this company for three years, but before that I spent two at a consultancy.",
          "I've worked at this company for three years, but before that I spent two at a consultancy.",
          "I have worked at this company for three years, but before that I spent two at a consultancy.",
          "I've been working for this company for three years, but before that I spent two at a consultancy.",
          "I've worked for this company for three years, but before that I spent two at a consultancy.",
          "I've been working at this company for three years, but before that I spent two years at a consultancy.",
          "I've worked at this company for three years, but before that I spent two years at a consultancy.",
          "I've been working here for three years, but before that I spent two years at a consultancy.",
          "I've been at this company for three years, but before that I spent two years at a consultancy.",
        ],
        "«Llevo... trabajando» is the present perfect (continuous) with \"for\"; the finished earlier job switches to the past simple. *I'm working here for three years is the calque to avoid.",
      ),
      kw(
        "HAD",
        "The team started the audit and then I joined the project.",
        "When I joined the project, the team ___ the audit.",
        "had already started",
        ["had started"],
        "The audit started first, so it takes the past perfect. \"When I joined, the team started the audit\" would mean they began it at that moment.",
      ),
      sp(
        "I'd say one of my strengths is staying calm under pressure, and I understand that's a big part of this role.",
        "Diría que uno de mis puntos fuertes es mantener la calma bajo presión, y entiendo que eso es una parte importante de este puesto.",
        "Contract \"I'd\" and \"that's\"; stress \"calm\" and \"big part\".",
        "A softened claim plus a link to the job: the two moves that turn a list of adjectives into a targeted answer.",
      ),
      tr(
        "Antes me costaba delegar; desde entonces he aprendido a confiar más en mi equipo.",
        "I used to find it hard to delegate; I've since learned to trust my team more.",
        [
          "I used to find it hard to delegate; since then I've learned to trust my team more.",
          "I used to find it difficult to delegate; I've since learned to trust my team more.",
          "I used to find it difficult to delegate; since then I've learned to trust my team more.",
          "I used to struggle to delegate; I've since learned to trust my team more.",
          "I used to struggle to delegate; since then I have learned to trust my team more.",
          "I used to find it hard to delegate, but I've since learned to trust my team more.",
          "I used to find it hard to delegate; since then, I have learned to trust my team more.",
          "I used to find delegating hard; I've since learned to trust my team more.",
        ],
        "«Me cuesta» is \"I find it hard to\" or \"I struggle to\", never *it costs me. \"Used to\" marks the change, and \"I've since learned\" brings it up to now.",
      ),
      dt(
        "The client had complained twice that month, so I decided to call him rather than email.",
        "Past perfect for the background, past simple for your decision. Listen for the contraction-free \"had complained\" and \"rather than\".",
      ),
      mc(
        "Which pitch sentence would a native interviewer find most natural?",
        [
          "I'm a financial analyst, and I've been with my current employer since 2021.",
          "I'm financial analyst and I am with my current employer since 2021.",
          "I'm a financial analyst and I work with my actual employer since 2021.",
          "I'm a financial analyst, and I've joined my current employer in 2021.",
        ],
        0,
        "Article before the job title, present perfect with \"since\" for a situation that continues, and \"current\" (not *actual, which means real). *I've joined in 2021 puts a finished date with the present perfect.",
      ),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Tone, rewrites, precise verbs, verb complementation + whole-unit mix
  // ---------------------------------------------------------------------
  drill(
    "en-c2-interviews-unit-drill-2",
    "Drill: Tone, Precise Verbs and Verb Patterns",
    "Strike a confident tone, replace calques and buzzwords with specific English, choose precise verbs instead of get, do, make and say, and use gerund and infinitive patterns accurately in interview answers.",
    "Recap: sounding precise and confident",
    [
      "Confidence means stating your role and the result as facts, without superlatives (arrogant) or minimizers like \"just\" and \"only\" (over-modest). Rewrites replace calques with natural English (\"I have a degree in\", \"a master's\", \"an internship\", \"my current job\", \"responsible for\") and buzzwords with described behavior and numbers.",
      "Precise verbs upgrade get, do, make and say: secure, earn, gain, obtain; carry out, conduct, undertake; draft, generate, forge, devise; point out, stress, claim, argue. Verb patterns change meaning (\"stop doing\" vs \"stop to do\") and Spanish «que» + subjunctive becomes object + infinitive: \"I want you to come\".",
    ],
    [
      ["I led a new onboarding program, and staff turnover dropped by 15%.", "Dirigí un nuevo programa de incorporación y la rotación de personal bajó un 15%."],
      ["I did a six-month internship at a law firm.", "Hice unas prácticas de seis meses en un despacho de abogados."],
      ["We secured a three-year contract with the city council.", "Conseguimos un contrato de tres años con el ayuntamiento."],
      ["My manager encouraged me to apply for the position.", "Mi jefa me animó a postularme al puesto."],
    ],
    [
      // --- Tone ---
      mc(
        "Which version of the same achievement sounds confident, not arrogant or over-modest?",
        [
          "I redesigned our pricing model, and margins rose by 6% that year.",
          "I single-handedly saved the company with my brilliant pricing model.",
          "Margins went up a bit, but honestly it was mostly luck.",
          "I only helped a little with the pricing, nothing special.",
        ],
        0,
        "The confident version states your role and the result as facts. Superlatives and sole credit sound arrogant; minimizers (\"a bit\", \"only\", \"luck\") sound over-modest.",
      ),
      lc(
        "Your proposal was quite interesting, actually.",
        "A British interviewer says this. What is the most likely meaning?",
        [
          "It was fairly interesting, but not impressive",
          "It was extremely interesting",
          "It was not interesting at all",
          "It was interesting because it was surprising",
        ],
        0,
        "In British English \"quite\" before a gradable adjective usually means fairly, so \"quite interesting\" can be faint praise. In American English \"quite good\" tends to mean very good.",
      ),
      tr(
        "Me gustaría pensar que contribuí de verdad a mejorar el ambiente del equipo.",
        "I'd like to think I really helped to improve the team atmosphere.",
        [
          "I would like to think I really helped to improve the team atmosphere.",
          "I'd like to think that I really helped to improve the team atmosphere.",
          "I'd like to think I really helped improve the team atmosphere.",
          "I'd like to think I really contributed to improving the team atmosphere.",
          "I'd like to think I made a real contribution to improving the team atmosphere.",
          "I'd like to think I really helped to improve the atmosphere in the team.",
          "I'd like to think I really helped improve the atmosphere in the team.",
        ],
        "\"I'd like to think...\" is British-style understatement: it softens the frame while the claim stays clear. Note \"contribute to\" + -ing, where \"to\" is a preposition.",
      ),
      // --- Rewrites: calques and buzzwords ---
      mc(
        "Which sentence is correct?",
        [
          "I have a degree in chemistry and I did a master's in food safety.",
          "I'm graduated in chemistry and I did a master in food safety.",
          "I'm licensed in chemistry and I made a master's in food safety.",
          "I have a career in chemistry and I did a master in food safety.",
        ],
        0,
        "«Soy licenciado en» is \"I have a degree in\" (never *I'm graduated in or *licensed in). «Hice un máster» is \"I did a master's\", with the apostrophe; *a master is a person, and a «carrera» in this sense is a \"degree\", not a career.",
      ),
      tr(
        "En mi trabajo actual soy responsable de la formación del personal nuevo.",
        "In my current job I'm responsible for training new staff.",
        [
          "In my current job, I'm responsible for training new staff.",
          "In my current job I am responsible for training new staff.",
          "In my current job I'm in charge of training new staff.",
          "In my current role I'm responsible for training new staff.",
          "In my current role, I'm in charge of training new staff.",
          "In my current job I'm responsible for training new employees.",
          "In my current job I'm responsible for the training of new staff.",
          "In my current position I'm responsible for training new staff.",
        ],
        "Three traps in one: «actual» is \"current\" (\"actual\" means real), «responsable de» is \"responsible for\" (never *of), and «formación» is \"training\" (never *formation).",
      ),
      fb(
        "Last spring I ___ a two-day course on contract law.",
        "attended",
        "La primavera pasada [asistí a] un curso de dos días sobre derecho contractual.",
        ["took", "did"],
        "«Asistir a» is \"attend\" with no preposition, or \"take\" or \"do\" a course. *I assisted to a course means you helped the course, which makes no sense.",
      ),
      tr(
        "Me apasiona analizar datos.",
        "I really enjoy analyzing data.",
        [
          "I really enjoy analysing data.",
          "I love analyzing data.",
          "I love analysing data.",
          "I really love analyzing data.",
          "I really like analyzing data.",
          "I'm very interested in analyzing data.",
          "I'm really interested in analyzing data.",
          "I'm passionate about analyzing data.",
        ],
        "«Me apasiona» is often over-translated as \"I'm passionate about\", which sounds stronger and more theatrical in English. \"I really enjoy\" or \"I love\" is usually more natural; \"enjoy\" takes -ing.",
      ),
      kw(
        "UP TO",
        "I have a lot of experience managing teams; the biggest had twelve people.",
        "I've managed teams of ___ twelve people.",
        "up to",
        [],
        "\"Teams of up to twelve people\" turns a vague claim (\"a lot of experience\") into a specific one. Ask \"how many?\" and put the answer in the sentence.",
      ),
      // --- Precise verbs: get ---
      mt(
        "Match each verb with the noun it most naturally replaces \"get\" with.",
        [
          ["secure", "a contract"],
          ["earn", "a promotion"],
          ["obtain", "a work permit"],
          ["gain", "experience"],
          ["acquire", "a competitor"],
        ],
        "\"Secure\" implies effort against competition; \"earn\" is deserved by your work; \"obtain\" is formal and official; \"gain\" goes with experience and insight; \"acquire\" is for skills, knowledge and companies.",
      ),
      tr(
        "Gané mucha experiencia en atención al cliente en mi primer trabajo.",
        "I gained a lot of experience in customer service in my first job.",
        [
          "I gained a lot of customer service experience in my first job.",
          "I gained a great deal of experience in customer service in my first job.",
          "I gained plenty of experience in customer service in my first job.",
          "I gained a lot of experience in customer service at my first job.",
          "In my first job I gained a lot of experience in customer service.",
          "I gained a lot of experience of customer service in my first job.",
        ],
        "English \"gains\" experience. *Win experience is a calque of «ganar experiencia»: you win a prize or a match, not experience.",
      ),
      fb(
        "She ___ a promotion within eighteen months of joining.",
        "earned",
        "Se [ganó] un ascenso a los dieciocho meses de entrar.",
        [],
        "\"Earn\" means you deserved it through your work: the natural verb for a promotion, a reputation or a degree. \"Won a promotion\" sounds like a lottery.",
      ),
      // --- Precise verbs: do / make ---
      mc(
        "Which sentence is correct?",
        [
          "Before the interview I did some research on the company.",
          "Before the interview I made a research on the company.",
          "Before the interview I did a research about the company.",
          "Before the interview I made some researches on the company.",
        ],
        0,
        "\"Research\" is uncountable (no \"a\", no plural) and takes \"do\" or \"conduct\". *Make a research is doubly wrong.",
      ),
      tr(
        "Realizamos más de cien encuestas a clientes el trimestre pasado.",
        "We conducted over a hundred customer surveys last quarter.",
        [
          "We conducted more than a hundred customer surveys last quarter.",
          "We conducted more than one hundred customer surveys last quarter.",
          "We conducted over 100 customer surveys last quarter.",
          "We carried out over a hundred customer surveys last quarter.",
          "We carried out more than a hundred customer surveys last quarter.",
          "Last quarter we conducted over a hundred customer surveys.",
          "We conducted over a hundred surveys of customers last quarter.",
        ],
        "«Realizar» is not \"realize\" (which means «darse cuenta»). For surveys, interviews and research, \"conduct\" is the precise verb; \"carry out\" is the all-rounder.",
      ),
      fb(
        "I ___ the first version of the tender and the legal team reviewed it.",
        "drafted",
        "[Redacté] la primera versión de la licitación y el equipo jurídico la revisó.",
        ["wrote", "prepared"],
        "\"Draft\" means write a first version of a document: a report, a contract, a proposal. «Hacer un informe» is never *make a report.",
      ),
      tr(
        "La campaña generó un aumento del 30% en las solicitudes.",
        "The campaign generated a 30% increase in applications.",
        [
          "The campaign generated a thirty percent increase in applications.",
          "The campaign generated a 30 percent increase in applications.",
          "The campaign generated a 30% rise in applications.",
          "The campaign led to a 30% increase in applications.",
          "The campaign produced a 30% increase in applications.",
        ],
        "\"Generate\" upgrades \"make\" for revenue, leads and interest. Note \"an increase in\" (the noun takes \"in\") but \"increase by\" for the amount after the verb.",
      ),
      // --- Precise verbs: say ---
      fb(
        "My manager ___ out that we had already exceeded the travel budget.",
        "pointed",
        "Mi jefe [señaló] que ya nos habíamos pasado del presupuesto de viajes.",
        [],
        "\"Point out that...\" draws attention to a fact. The past perfect \"had exceeded\" follows because the overspend came before the comment.",
      ),
      tr(
        "El proveedor afirmaba haber enviado los documentos la semana anterior.",
        "The supplier claimed to have sent the documents the previous week.",
        [
          "The supplier claimed to have sent the documents the week before.",
          "The supplier claimed that he had sent the documents the previous week.",
          "The supplier claimed that they had sent the documents the previous week.",
          "The supplier claimed that it had sent the documents the previous week.",
          "The supplier claimed that he had sent the documents the week before.",
          "The supplier claimed they had sent the documents the week before.",
          "The supplier claimed to have sent the paperwork the previous week.",
        ],
        "\"Claim\" suggests the statement may not be true. \"Claim to have done\" uses the perfect infinitive for an earlier action; \"claim that\" + past perfect is the alternative.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "She told me that the vacancy had been filled.",
          "She said me that the vacancy had been filled.",
          "She told that the vacancy had been filled to me.",
          "She said to me the vacancy that had been filled.",
        ],
        0,
        "You \"tell someone\" but \"say something (to someone)\". *She said me that... is a direct calque of «me dijo que».",
      ),
      // --- Verb complementation ---
      mc(
        "«Dejó de beber café el mes pasado.» Which sentence means this?",
        [
          "He stopped drinking coffee last month.",
          "He stopped to drink coffee last month.",
          "He stopped to drinking coffee last month.",
          "He left to drink coffee last month.",
        ],
        0,
        "\"Stop + -ing\" ends an activity («dejar de»). \"Stop + to\" means pausing in order to do something («pararse a»), so *stopped to drink coffee means he took a coffee break.",
      ),
      fb(
        "If the app keeps crashing, try ___ the cache.",
        "clearing",
        "Si la aplicación se sigue cerrando, [prueba a borrar] la caché.",
        ["deleting", "emptying"],
        "\"Try + -ing\" means experiment with a method and see what happens («probar a»). \"Try to\" + infinitive is for an effort that may fail («intentar»).",
      ),
      tr(
        "Me acuerdo de haber firmado el contrato, pero no recuerdo dónde lo guardé.",
        "I remember signing the contract, but I don't remember where I put it.",
        [
          "I remember signing the contract, but I can't remember where I put it.",
          "I remember signing the contract but I don't remember where I put it.",
          "I remember signing the contract, but I don't remember where I kept it.",
          "I remember signing the contract, but I can't remember where I kept it.",
          "I remember having signed the contract, but I don't remember where I put it.",
          "I remember signing the contract, but I don't remember where I filed it.",
          "I remember signing the contract, but I can't remember where I saved it.",
        ],
        "\"Remember + -ing\" looks back at something that happened. \"Remember to sign\" would be a task still to do.",
      ),
      fb(
        "She started as a receptionist and went on ___ the regional office.",
        "to run",
        "Empezó como recepcionista y después [llegó a dirigir] la oficina regional.",
        ["to manage", "to head", "to lead"],
        "\"Go on to\" + infinitive means move on to something new; \"go on + -ing\" means continue the same activity. *Went on running the office would mean she kept running it.",
      ),
      tr(
        "Aceptar el puesto supondría viajar dos semanas al mes.",
        "Taking the job would mean traveling two weeks a month.",
        [
          "Taking the job would mean travelling two weeks a month.",
          "Accepting the job would mean traveling two weeks a month.",
          "Accepting the position would mean traveling two weeks a month.",
          "Taking the position would mean traveling two weeks a month.",
          "Taking the job would mean traveling for two weeks a month.",
          "Taking the job would mean traveling two weeks every month.",
          "Accepting the post would mean traveling two weeks a month.",
        ],
        "\"Mean + -ing\" is «implicar, suponer». \"Mean to\" + infinitive is «tener intención de»: \"I didn't mean to interrupt\".",
      ),
      tr(
        "Quiero que revises el presupuesto antes de la reunión.",
        "I want you to check the budget before the meeting.",
        [
          "I want you to review the budget before the meeting.",
          "I want you to go over the budget before the meeting.",
          "I want you to look over the budget before the meeting.",
          "I'd like you to check the budget before the meeting.",
          "I'd like you to review the budget before the meeting.",
          "I want you to check the budget before the meeting starts.",
        ],
        "«Querer que» + subjunctive is \"want\" + object + to-infinitive. *I want that you check is one of the most persistent Spanish-speaker errors, even at advanced levels.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "I suggest that you bring a printed copy of your portfolio.",
          "I suggest you to bring a printed copy of your portfolio.",
          "I suggest to you to bring a printed copy of your portfolio.",
          "I suggest that you to bring a printed copy of your portfolio.",
        ],
        0,
        "\"Suggest\" never takes object + infinitive. Say \"I suggest (that) you bring\" or \"I suggest bringing\". *I suggest you to bring is a calque of «te sugiero que traigas».",
      ),
      wo(
        "They made me wait for forty minutes.",
        "Me hicieron esperar cuarenta minutos.",
        "\"Make\" + object + bare infinitive: no \"to\" in the active. In the passive \"to\" comes back: \"I was made to wait\".",
      ),
      kw(
        "MADE",
        "They forced us to sign a confidentiality agreement.",
        "We ___ sign a confidentiality agreement.",
        "were made to",
        [],
        "In the passive, \"make\" recovers the \"to\": \"We were made to sign\". In the active it has none: \"They made us sign\".",
      ),
      fb(
        "___ worked in three countries, I adapt quickly to new teams.",
        "Having",
        "[Como he] trabajado en tres países, me adapto rápido a equipos nuevos.",
        [],
        "The perfect participle \"Having worked\" stresses that the experience came first and explains the main clause. It replaces «como he...» or «al haber...».",
      ),
      tr(
        "Le agradezco que se me haya dado la oportunidad de presentar mi proyecto.",
        "I appreciate being given the opportunity to present my project.",
        [
          "I appreciate having been given the opportunity to present my project.",
          "I appreciate being given the chance to present my project.",
          "I appreciate having been given the chance to present my project.",
          "I really appreciate being given the opportunity to present my project.",
          "I'm grateful to have been given the opportunity to present my project.",
          "I'm grateful for the opportunity to present my project.",
        ],
        "\"Appreciate\" takes -ing, and the passive gerund \"being given\" replaces the Spanish impersonal «que se me dé». *I appreciate that you give me is a calque.",
      ),
      // --- Whole-unit mix and traps ---
      wo(
        "I'd recommend booking the meeting room a day in advance.",
        "Yo recomendaría reservar la sala de reuniones con un día de antelación.",
        "\"Recommend\" + -ing is the safe pattern. *I'd recommend you to book is formal British at best, and best avoided.",
      ),
      lc(
        "On the way to the interview, I stopped to call my sister.",
        "What happened?",
        [
          "The speaker paused on the way in order to call their sister",
          "The speaker stopped calling their sister altogether",
          "The speaker forgot to call their sister",
          "The speaker's sister called and made them stop",
        ],
        0,
        "\"Stop + to\" means stop one thing in order to do another («pararse a»). \"Stopped calling\" would mean they no longer call her.",
      ),
      sp(
        "I don't remember agreeing to that deadline, but I'll remember to check my emails more carefully.",
        "No recuerdo haber aceptado ese plazo, pero me acordaré de revisar mis correos con más cuidado.",
        "Stress the contrast: \"agreeing\" (past) and \"to check\" (future task).",
        "\"Remember + -ing\" looks back at something that happened; \"remember + to\" looks forward to a task.",
      ),
      dt(
        "We regret to inform you that the position has now been filled.",
        "\"Regret to\" is the formal announcement of bad news, typical of rejection emails. Listen for the weak \"to\" before \"inform\".",
      ),
      tr(
        "No era mi intención interrumpirla, pero quería señalar que las cifras son del año pasado.",
        "I didn't mean to interrupt you, but I wanted to point out that the figures are from last year.",
        [
          "I didn't mean to interrupt, but I wanted to point out that the figures are from last year.",
          "I did not mean to interrupt you, but I wanted to point out that the figures are from last year.",
          "I didn't mean to interrupt you, but I wanted to point out the figures are from last year.",
          "I didn't mean to interrupt, but I wanted to point out the figures are from last year.",
          "I didn't mean to interrupt you, but I wanted to point out that those figures are from last year.",
          "I didn't mean to interrupt you, but I wanted to point out that these figures are from last year.",
          "I didn't mean to interrupt you, but I just wanted to point out that the figures are from last year.",
        ],
        "\"Mean to\" + infinitive is intention; \"point out that\" is the precise reporting verb for drawing attention to a fact.",
      ),
      sp(
        "Having worked in procurement for five years, I've negotiated contracts worth over two million dollars.",
        "Como he trabajado cinco años en compras, he negociado contratos por valor de más de dos millones de dólares.",
        "Stress \"five years\" and \"two million\"; the numbers carry the claim.",
        "A perfect participle clause, the present perfect for career-so-far achievements and a precise verb with a figure: the whole unit in one sentence.",
      ),
      mc(
        "Which CV-style sentence is the strongest rewrite of *I am responsible of many projects and I am a team player?",
        [
          "I'm in charge of four cross-border projects and regularly cover for colleagues during audits.",
          "I'm responsible of four projects and I am a very passionate team player.",
          "I'm the responsible of many projects and I always go the extra mile.",
          "I have many projects and I'm very dynamic and results-driven.",
        ],
        0,
        "The strong rewrite fixes the preposition (\"in charge of\" or \"responsible for\"), adds a number and replaces the buzzword with a described behavior.",
      ),
      dt(
        "I persuaded the board to approve the budget, and we secured the funding two weeks later.",
        "\"Persuade\" + object + to-infinitive, then the precise verb \"secured\". Listen for the linking in \"secured the\".",
      ),
      tr(
        "Mi jefa me animó a solicitar una beca y la conseguí.",
        "My manager encouraged me to apply for a scholarship, and I got it.",
        [
          "My manager encouraged me to apply for a scholarship and I got it.",
          "My boss encouraged me to apply for a scholarship, and I got it.",
          "My manager encouraged me to apply for a scholarship, and I was awarded it.",
          "My manager encouraged me to apply for a scholarship, and I won it.",
          "My manager encouraged me to apply for a grant, and I got it.",
          "My manager encouraged me to apply for a scholarship, and I secured it.",
          "My boss encouraged me to apply for a scholarship and I got it.",
        ],
        "\"Encourage\" + object + to-infinitive, like \"want you to\" and \"ask you to\". In speech \"I got it\" is fine; \"I was awarded it\" is the formal choice for a scholarship.",
      ),
    ],
  ),
];
