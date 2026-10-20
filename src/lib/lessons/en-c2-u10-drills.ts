// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u10-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u10 (business idioms, jargon, false friends and register): a short recap, then graded practice.

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

export const EN_C2_U10_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Meeting and crisis idioms, the team meeting, the crisis email
  // ---------------------------------------------------------------------
  drill(
    "en-c2-business-idioms-unit-drill-1",
    "Drill: Meeting and Crisis Idioms",
    "Use meeting and crisis idioms (on the same page, touch base, a ballpark figure, move the goalposts, weather the storm, in the red, the bottom line) accurately, and switch to plain English for minutes and international readers.",
    "Recap: idioms for meetings, crises and status reports",
    [
      "Meeting idioms are fixed: \"on the same page\" (never *in), \"touch base\" (never *touch basis), \"circle back to\", \"a ballpark figure\", \"give or take\", \"move the goalposts\", \"a quick win\", \"low-hanging fruit\" (uncountable), \"take it offline\", \"put a pin in it\".",
      "Crisis idioms: \"firefighting\", \"a perfect storm\" (several causes at once), \"weather the storm\", \"cut our losses\", \"back to the drawing board\", \"go belly up\", \"in the red\" (with the present perfect for «lleva... en números rojos»), \"break even\", \"the bottom line\". Use them with your own team; in minutes and for international readers, use plain verbs and full dates.",
    ],
    [
      ["Let's make sure we're all on the same page.", "Asegurémonos de que todos tenemos claro lo mismo."],
      ["Can you give me a rough figure, give or take?", "¿Me das una cifra aproximada, más o menos?"],
      ["The branch has been in the red since January.", "La sucursal está en números rojos desde enero."],
      ["It was agreed that the launch would be postponed.", "Se acordó aplazar el lanzamiento."],
    ],
    [
      mc(
        "Which is the correct idiom for «Asegurémonos de que todos tenemos claro lo mismo»?",
        [
          "Let's make sure we're all on the same page.",
          "Let's make sure we're all in the same page.",
          "Let's make sure we're all at the same page.",
          "Let's make sure we're all on the same side of the page.",
        ],
        0,
        "The idiom is \"on the same page\": you write on a page. *In the same page is a calque of «en la misma página» and one of the most frequent errors in emails.",
      ),
      fb(
        "I'll ___ with the designers on Thursday and see how the mockups are going.",
        "touch base",
        "El jueves [hablo un momento] con los diseñadores y veo cómo van los bocetos.",
        [],
        "\"Touch base (with someone)\" means brief contact to check progress. \"Base\" is singular with no article: *touch bases and *touch basis are both wrong.",
      ),
      fb(
        "Good question. Let's ___ to the hiring plan once we have the budget.",
        "circle back",
        "Buena pregunta. [Retomemos] el plan de contrataciones cuando tengamos el presupuesto.",
        ["come back", "get back", "return"],
        "\"Circle back to\" politely parks a topic for later. In formal minutes, \"return to\" is the plain alternative.",
      ),
      tr(
        "Solo necesito una cifra aproximada, no un presupuesto detallado.",
        "I just need a ballpark figure, not a detailed quote.",
        [
          "I only need a ballpark figure, not a detailed quote.",
          "I just need a ballpark, not a detailed quote.",
          "I just need a ballpark figure, not a detailed estimate.",
          "I just need a ballpark estimate, not a detailed quote.",
          "I just need a rough figure, not a detailed quote.",
          "I just need a rough estimate, not a detailed quote.",
          "I only need a rough figure, not a detailed quote.",
        ],
        "«Cifra aproximada» is \"a ballpark figure\" or \"a rough figure\". *An approximated figure is a typical learner error. «Presupuesto» for a job is a \"quote\" or \"estimate\", not a *budget.",
      ),
      mc(
        "The client keeps changing the targets after the work has started. Which idiom describes this?",
        [
          "They keep moving the goalposts.",
          "They keep getting the ball rolling.",
          "They keep picking the low-hanging fruit.",
          "They keep touching base.",
        ],
        0,
        "\"Move the goalposts\" means changing the targets or rules after work has started, almost always as a complaint: «cambiar las reglas a mitad de partido».",
      ),
      wo(
        "They moved the goalposts two weeks before the deadline.",
        "Cambiaron las reglas del juego dos semanas antes de la fecha de entrega.",
        "The idiom is a fixed verb phrase, \"move the goalposts\" (plural, with \"the\"); the time expression follows it.",
      ),
      fb(
        "Updating the FAQ page is ___; we can do it today.",
        "low-hanging fruit",
        "Actualizar la página de preguntas frecuentes es [lo más fácil]; podemos hacerlo hoy.",
        ["low hanging fruit", "a quick win"],
        "\"Low-hanging fruit\" means the easiest tasks. \"Fruit\" stays uncountable: *low-hanging fruits is a classic slip.",
      ),
      fb(
        "I spent the whole morning ___ instead of working on the strategy.",
        "firefighting",
        "Me pasé toda la mañana [apagando fuegos] en lugar de trabajar en la estrategia.",
        ["putting out fires"],
        "The image transfers from Spanish, but English uses the -ing form \"firefighting\" or \"putting out fires\", not *extinguishing fires.",
      ),
      tr(
        "Muchos restaurantes no lograron capear el temporal durante la pandemia.",
        "Many restaurants failed to weather the storm during the pandemic.",
        [
          "Many restaurants didn't manage to weather the storm during the pandemic.",
          "Many restaurants couldn't weather the storm during the pandemic.",
          "Many restaurants were unable to weather the storm during the pandemic.",
          "Many restaurants failed to ride out the storm during the pandemic.",
          "Many restaurants didn't manage to ride out the storm during the pandemic.",
          "Many restaurants couldn't ride out the storm during the pandemic.",
        ],
        "«Capear el temporal» is \"weather the storm\" or \"ride out the storm\". Don't confuse \"weather\" (the verb) with \"whether\" (the conjunction): they sound identical.",
      ),
      tr(
        "Decidieron cortar por lo sano y vender el negocio.",
        "They decided to cut their losses and sell the business.",
        [
          "They decided to cut their losses and sell the company.",
          "They decided to cut their losses and sell up.",
        ],
        "\"Cut your losses\" changes its possessive with the subject: \"they... their losses\", \"we... our losses\". *Cut the losses sounds like a calculation, not an idiom.",
      ),
      fb(
        "The investors hated the logo, so it's ___.",
        "back to the drawing board",
        "A los inversores no les gustó el logo, así que toca [volver a empezar de cero].",
        [],
        "\"It's back to the drawing board\" has no verb of movement and is said after a failure. Spanish speakers sometimes add *return to it's, which is unnecessary.",
      ),
      tr(
        "La tienda quebró a los seis meses.",
        "The store went belly up after six months.",
        [
          "The store went bust after six months.",
          "The store went under after six months.",
          "The store went bankrupt after six months.",
          "The store went belly up within six months.",
          "The shop went belly up after six months.",
          "The shop went bust after six months.",
        ],
        "\"Go belly up\", \"go bust\" and \"go under\" are informal; in a formal report write \"went bankrupt\" or \"filed for bankruptcy\". Note \"went\", not *broke, for «quebró».",
      ),
      tr(
        "Nuestra sucursal de Monterrey lleva un año y medio en números rojos.",
        "Our Monterrey branch has been in the red for a year and a half.",
        [
          "Our Monterrey branch has been in the red for eighteen months.",
          "Our branch in Monterrey has been in the red for a year and a half.",
          "Our branch in Monterrey has been in the red for eighteen months.",
          "Our Monterrey office has been in the red for a year and a half.",
          "Our Monterrey branch has been in the red for 18 months.",
        ],
        "«Lleva... en números rojos» needs the present perfect with \"for\": \"has been in the red for\". *Is in the red since a year and a half is the typical calque.",
      ),
      fb(
        "If sales hold up, we should ___ by March.",
        "break even",
        "Si las ventas se mantienen, deberíamos [cubrir gastos] para marzo.",
        [],
        "\"Break even\" means neither losing nor making money. It is acceptable in formal reports, unlike \"go belly up\".",
      ),
      mt(
        "Match each idiom with its meaning.",
        [
          ["in the black", "con beneficios"],
          ["go belly up", "irse a pique"],
          ["cut your losses", "cortar por lo sano"],
          ["weather the storm", "capear el temporal"],
          ["a perfect storm", "varios problemas a la vez que causan un desastre"],
        ],
        "Accountants wrote profits in black ink, so \"in the black\" is profitable. \"A perfect storm\" always needs several causes, not one bad day.",
      ),
      tr(
        "En resumidas cuentas, no podemos permitirnos otro proveedor.",
        "The bottom line is that we can't afford another supplier.",
        [
          "The bottom line is we can't afford another supplier.",
          "Bottom line: we can't afford another supplier.",
          "Bottom line, we can't afford another supplier.",
          "The bottom line is that we cannot afford another supplier.",
        ],
        "Figuratively, \"the bottom line\" is the most important conclusion, «en resumidas cuentas». In a status report, \"Bottom line:\" at the start of a sentence is very common.",
      ),
      lc(
        "A strike, a cyber attack and a heat wave, all in the same week. It was a perfect storm.",
        "Why does the speaker call it a perfect storm?",
        [
          "Several problems combined to cause a disaster",
          "The weather was unusually bad that week",
          "One problem was handled perfectly",
          "The team had predicted the crisis",
        ],
        0,
        "\"A perfect storm\" is a rare combination of bad circumstances that together cause a disaster. The heat wave is only one of three causes.",
      ),
      fb(
        "Can we ___ that and come back to it after lunch?",
        "put a pin in",
        "¿Podemos [dejar pendiente] eso y retomarlo después del almuerzo?",
        ["park"],
        "\"Put a pin in it\" and \"park it\" both mean «dejarlo para luego» in a meeting.",
      ),
      tr(
        "¿Podemos hablar de los sueldos aparte?",
        "Can we take the salary question offline?",
        [
          "Can we take salaries offline?",
          "Could we take the salary question offline?",
          "Can we discuss salaries separately?",
          "Could we discuss salaries separately?",
          "Can we talk about salaries separately?",
          "Can we discuss the salaries separately?",
        ],
        "\"Take something offline\" means discussing it separately, with fewer people, after the meeting. It has nothing to do with the internet. In written minutes, \"discuss separately\" is clearer.",
      ),
      mc(
        "Lucia says the new feature will take \"six weeks, give or take.\" What does she mean?",
        [
          "About six weeks, possibly a little more or less",
          "Exactly six weeks",
          "At least six weeks",
          "Six weeks if the client gives something in exchange",
        ],
        0,
        "\"Give or take\" after a number means «más o menos». It signals an estimate, not a commitment.",
      ),
      tr(
        "¿Podríamos llegar a un punto intermedio con el cliente y entregar la mitad en mayo?",
        "Could we meet the client halfway and deliver half in May?",
        [
          "Could we meet the client halfway and deliver half of it in May?",
          "Could we meet the client halfway and deliver half by May?",
          "Could we meet the client halfway and deliver half of it by May?",
        ],
        "«Llegar a un punto intermedio con alguien» is \"meet someone halfway\": the person is the direct object, with no preposition.",
      ),
      mc(
        "Which is correct for the minutes: «Se acordó posponer la auditoría»?",
        [
          "It was agreed to postpone the audit.",
          "It was accorded to postpone the audit.",
          "It was agreed postpone the audit.",
          "It was accorded postponing the audit.",
        ],
        0,
        "«Se acordó» is \"It was agreed\" (followed by \"to\" + verb or \"that\" + clause). *It was accorded is a false-friend calque of «acordar».",
      ),
      wo(
        "The team agreed to move the launch to July.",
        "El equipo acordó trasladar el lanzamiento a julio.",
        "Minutes state decisions plainly: subject + \"agreed to\" + verb. No idioms are needed in the written record.",
      ),
      mc(
        "Which sentence suits an update to international partners who read English as a second language?",
        [
          "We have postponed the opening until Monday, September 8.",
          "We've had to put the opening off, so it's back to the drawing board.",
          "The opening went belly up, so we're firefighting.",
          "Bottom line: we're pushing the opening back till 9/8.",
        ],
        0,
        "For international readers: no idioms, one clear Latinate verb (\"postpone\") rather than a phrasal verb, and a full date instead of 9/8, which means different days in the US and Britain.",
      ),
      fb(
        "Quick ___: the office will be closed on Monday for repairs.",
        "heads-up",
        "[Aviso] rápido: la oficina estará cerrada el lunes por reparaciones.",
        ["heads up"],
        "\"A heads-up\" is a short warning or piece of advance information, typical at the start of internal emails and messages.",
      ),
      tr(
        "Le informamos que su pedido se entregará con retraso.",
        "Your order will be delivered late.",
        [
          "Please note that your order will be delivered late.",
          "Your order will arrive late.",
          "Please note that your order will arrive late.",
          "Your order will be delayed.",
          "Please note that your order will be delayed.",
        ],
        "English simply states the fact. *We inform you that... is a stiff calque of «Le informamos que»; \"Please note that\" is the most you need.",
      ),
      tr(
        "Hemos aplazado la reunión hasta el jueves 12 de marzo.",
        "We have postponed the meeting until Thursday, March 12.",
        [
          "We have postponed the meeting to Thursday, March 12.",
          "We have postponed the meeting until Thursday, March 12th.",
          "We have postponed the meeting until Thursday 12 March.",
          "We have postponed the meeting to Thursday 12 March.",
        ],
        "For a crisis update to outside readers: a clear Latinate verb (\"postpone\"), the present perfect for a recent action with present relevance, and a date written in full.",
      ),
      lc(
        "Bottom line: customers will get their refunds, just a week late.",
        "What is the main point of the message?",
        [
          "Refunds will be paid, but with a delay",
          "Refunds have been canceled",
          "The company is losing money",
          "Customers must wait at the bottom of the list",
        ],
        0,
        "\"Bottom line\" introduces the key conclusion: the refunds are coming, a week late. It says nothing about the company's profits here.",
      ),
      dt(
        "We've been firefighting since the server went down on Tuesday.",
        "\"Firefighting\" is one word. \"Since\" + a past event needs the present perfect continuous: \"we've been\".",
      ),
      dt(
        "Let's get the ball rolling and touch base again on Friday.",
        "\"Touch base\" has no -s and no article. Listen for \"get the\" said quickly as /ɡɛt ðə/.",
      ),
      dt(
        "The Lima office has been in the red since the merger, but losses have halved.",
        "\"Halved\" is pronounced /hævd/ in American English: the l is silent, as in \"half\".",
      ),
      sp(
        "We are sorry for the delay and will send another update on Monday, May 6.",
        "Lamentamos el retraso y enviaremos otra actualización el lunes 6 de mayo.",
        "Say the date as \"Monday, May sixth\".",
        "Plain and warm without idioms: an apology, a commitment and a full date, exactly what an international reader needs.",
      ),
      sp(
        "Right, let's get started. Just so we're all on the same page, the deadline is Friday.",
        "Bueno, empecemos. Para que todos tengamos claro lo mismo: el plazo vence el viernes.",
        "Pause briefly after \"Right\" and after \"page\".",
        "\"Right\" or \"OK, so\" opens an English meeting the way «Bueno, pues» does, and \"Just so we're all on the same page\" introduces a summary of the facts.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "Now that we're on the same page, let's touch base next week.",
          "Now that we're in the same page, let's touch bases next week.",
          "Now that we're on the same page, let's touch basis next week.",
          "Now that we're in the same page, let's touch base next week.",
        ],
        0,
        "Both idioms are fixed: \"on the same page\" and \"touch base\". Changing a single word (*in, *bases, *basis) is enough for a native speaker to notice.",
      ),
      tr(
        "Después de perder dinero tres meses seguidos, decidimos cortar por lo sano.",
        "After losing money for three months in a row, we decided to cut our losses.",
        [
          "After losing money three months in a row, we decided to cut our losses.",
          "After losing money for three straight months, we decided to cut our losses.",
          "After three months of losses in a row, we decided to cut our losses.",
          "After losing money for three consecutive months, we decided to cut our losses.",
        ],
        "\"After\" + -ing, then \"cut our losses\" with the possessive matching \"we\". *After to lose money is a calque of «después de perder».",
      ),
    ],
  ),

  // ---------------------------------------------------------------------
  // Drill 2. Jargon, false friends, phrasal vs Latinate, error hunt, mix
  // ---------------------------------------------------------------------
  drill(
    "en-c2-business-idioms-unit-drill-2",
    "Drill: Jargon, False Friends and Register",
    "Replace empty jargon with clear English, avoid the business false friends (actual, eventually, assist, rentable, realize, sensible), choose between phrasal and Latinate verbs, and fix broken idioms and Spanish-influenced email phrases.",
    "Recap: say it clearly, in the right register",
    [
      "Jargon such as \"leverage\" (use), \"bandwidth\" (time), \"deep dive\" (detailed analysis) and \"going forward\" (from now on, often redundant) is fine inside a team but confuses outsiders. False friends: «actualmente» is \"currently\", «eventualmente» is \"if necessary\", «asistir a» is \"attend\", «rentable» is \"profitable\", «realizar» is \"carry out\" or \"conduct\", «sensible» is \"sensitive\".",
      "Phrasal verbs (find out, put off, get rid of) suit speech and everyday emails; Latinate verbs (ascertain, postpone, eliminate) suit formal reports, and a pronoun splits a separable phrasal verb (\"turn it down\"). Fix the classic errors: *at the end (in the end), *explain me, *discuss about, *make a meeting, *feedbacks, *I send you attached.",
    ],
    [
      ["I don't have time for another project.", "No tengo margen para otro proyecto."],
      ["We currently have two open positions.", "Actualmente tenemos dos puestos vacantes."],
      ["They've put the launch off until June.", "Han aplazado el lanzamiento hasta junio."],
      ["In the end, we signed the deal.", "Al final, firmamos el acuerdo."],
    ],
    [
      mc(
        "What does \"I don't have the bandwidth for this right now\" mean in plain English?",
        [
          "I don't have time for this right now.",
          "My internet connection is too slow for this right now.",
          "I don't have the authority to decide this right now.",
          "I don't have the budget for this right now.",
        ],
        0,
        "In office jargon \"bandwidth\" means time or capacity to take on work. A colleague reading it literally may well think of the internet, which is exactly why plain English is safer.",
      ),
      tr(
        "Podemos aprovechar los contactos que ya tenemos.",
        "We can make the most of the contacts we already have.",
        [
          "We can use the contacts we already have.",
          "We can build on the contacts we already have.",
          "We can leverage the contacts we already have.",
          "We can make use of the contacts we already have.",
          "We can take advantage of the contacts we already have.",
        ],
        "\"Leverage\" is correct but jargon-heavy; \"use\", \"build on\" or \"make the most of\" say the same thing more clearly. The calque «apalancar» makes \"leverage\" feel natural to Spanish speakers, so notice it.",
      ),
      mc(
        "Which version is the clearest?",
        [
          "From now on, invoices must include a purchase order number.",
          "Going forward, invoices will need to include a purchase order number going forward.",
          "Leveraging synergies going forward, invoices must include a purchase order number.",
          "Going forward from now on, invoices must include a purchase order number.",
        ],
        0,
        "\"From now on\" marks a change from today. \"Going forward\" is often redundant (the modal already shows the future), and doubling it or adding \"leveraging synergies\" says nothing.",
      ),
      tr(
        "Hagamos un análisis a fondo de las quejas de los clientes.",
        "Let's look at the customer complaints in detail.",
        [
          "Let's look at customer complaints in detail.",
          "Let's do a deep dive into the customer complaints.",
          "Let's do a deep dive into customer complaints.",
          "Let's analyze the customer complaints in detail.",
          "Let's take a detailed look at the customer complaints.",
          "Let's do an in-depth analysis of the customer complaints.",
        ],
        "\"A deep dive into\" is accepted office English, but \"look at... in detail\" is clearer for any reader. Note \"into\" after \"deep dive\", not *of.",
      ),
      lc(
        "The company is rightsizing its call centers next year.",
        "What is actually going to happen?",
        [
          "Call center staff will lose their jobs",
          "The call centers will move to bigger buildings",
          "The call centers will hire more staff",
          "The call centers will get new equipment",
        ],
        0,
        "\"Rightsizing\" is a euphemism for cutting jobs. Heavy jargon like this can sound evasive, which is why native readers often distrust it.",
      ),
      fb(
        "The ___ price is 120 dollars, but it goes up in June.",
        "current",
        "El precio [actual] es de 120 dólares, pero sube en junio.",
        ["present"],
        "Spanish «actual» is \"current\". English \"actual\" means «real», so *the actual price would suggest the real price as opposed to the advertised one.",
      ),
      tr(
        "Actualmente trabajamos desde casa dos días por semana.",
        "We currently work from home two days a week.",
        [
          "Currently, we work from home two days a week.",
          "At the moment, we work from home two days a week.",
          "We currently work from home twice a week.",
          "We currently work remotely two days a week.",
          "Right now, we work from home two days a week.",
        ],
        "«Actualmente» is \"currently\" or \"at the moment\". *Actually we work from home would mean «en realidad», as if correcting someone.",
      ),
      tr(
        "Eventualmente, podríamos contratar a un traductor.",
        "If necessary, we could hire a translator.",
        [
          "If necessary we could hire a translator.",
          "If need be, we could hire a translator.",
          "If needed, we could hire a translator.",
          "If necessary, we could bring in a translator.",
        ],
        "«Eventualmente» means «si hace falta». *Eventually we could hire a translator tells an English reader the hiring will happen in the end, after a long wait.",
      ),
      fb(
        "Only half the team ___ the training session.",
        "attended",
        "Solo la mitad del equipo [asistió a la] sesión de capacitación.",
        [],
        "«Asistir a» is \"attend\", with no preposition. \"Assist\" means «ayudar», and *attended to the session would mean dealing with it.",
      ),
      fb(
        "She ___ the job in Toronto, but they hired someone internally.",
        "applied for",
        "[Solicitó] el puesto en Toronto, pero contrataron a alguien de la empresa.",
        [],
        "«Solicitar un puesto» is \"apply for a job\"; \"apply to\" names the organization (\"apply to a company\").",
      ),
      tr(
        "Ninguno de los dos quería ceder, pero al final llegamos a un acuerdo intermedio.",
        "Neither of us wanted to give in, but in the end we reached a compromise.",
        [
          "Neither of us wanted to give in, but we eventually reached a compromise.",
          "Neither of us wanted to give in, but in the end we came to a compromise.",
          "Neither side wanted to give in, but in the end we reached a compromise.",
          "Neither of us wanted to back down, but in the end we reached a compromise.",
          "Neither of us wanted to give way, but in the end we reached a compromise.",
        ],
        "\"A compromise\" is an agreement where both sides give something up. «Al final» is \"in the end\" or \"eventually\" (here the true meaning of \"eventually\"), never *at the end.",
      ),
      tr(
        "Nos comprometemos a responder en un plazo de 24 horas.",
        "We are committed to responding within 24 hours.",
        [
          "We commit to responding within 24 hours.",
          "We are committed to replying within 24 hours.",
          "We commit to replying within 24 hours.",
          "We are committed to answering within 24 hours.",
          "We are committed to responding within twenty-four hours.",
        ],
        "«Comprometerse a» is \"commit to\" + -ing (\"to\" is a preposition here). \"Compromise\" would mean a deal or, as a verb, to put something at risk.",
      ),
      mt(
        "Match each Spanish word with its English equivalent.",
        [
          ["rentable", "profitable"],
          ["carpeta", "folder"],
          ["éxito", "success"],
          ["sensato", "sensible"],
          ["darse cuenta", "realize"],
        ],
        "Each English word on the right is the trap twin of a different Spanish word: \"carpet\" is «alfombra», \"exit\" is «salida», \"sensible\" is «sensato» (not «sensible»), and «realizar» is \"carry out\".",
      ),
      tr(
        "El negocio todavía no es rentable.",
        "The business isn't profitable yet.",
        [
          "The business is not yet profitable.",
          "The business still isn't profitable.",
          "The business isn't making a profit yet.",
          "The business still isn't making a profit.",
        ],
        "«Rentable» is \"profitable\". English \"rentable\" only means «que se puede alquilar», so *The business isn't rentable yet is a real misunderstanding.",
      ),
      tr(
        "Tenemos que realizar una encuesta entre nuestros clientes.",
        "We need to carry out a survey of our customers.",
        [
          "We need to conduct a survey of our customers.",
          "We need to carry out a survey among our customers.",
          "We need to conduct a survey among our customers.",
          "We have to carry out a survey of our customers.",
          "We have to conduct a survey of our customers.",
          "We need to do a survey of our customers.",
        ],
        "«Realizar» a survey or study is \"carry out\" or \"conduct\". \"Realize\" means «darse cuenta», so *realize a survey is a false-friend error.",
      ),
      mc(
        "This spreadsheet contains ___ salary data, so please don't share it.",
        [
          "sensitive",
          "sensible",
          "sensitivity",
          "sensational",
        ],
        0,
        "«Datos sensibles» are \"sensitive data\". \"Sensible\" means «sensato», so *sensible data would be reasonable data.",
      ),
      mc(
        "Which sounds natural in a quick message to a colleague?",
        [
          "Hey, can you help me get rid of these old files?",
          "Hey, can you assist me to eliminate these old files?",
          "Hey, could you assist me in the elimination of these old files?",
          "Hey, can you help me to dispose these old files?",
        ],
        0,
        "Keep the register consistent: \"Hey\" calls for the everyday phrasal verb \"get rid of\". The formal Latinate versions sound like a legal document, and \"dispose\" needs \"of\".",
      ),
      fe(
        "Rewrite in formal register with a single Latinate verb: \"They put off the decision.\"",
        "The decision was ___ until next month.",
        "postponed",
        ["deferred"],
        "\"Put off\" is the everyday phrasal verb; \"postpone\" is its formal Latinate pair. In a report, the passive \"was postponed\" is typical.",
      ),
      fe(
        "Rewrite in everyday spoken English with a phrasal verb: \"We need to ascertain the cause.\"",
        "We need to ___ what caused it.",
        "find out",
        ["figure out", "work out"],
        "\"Ascertain\" is very formal. In speech, \"find out\" (or \"figure out\") is what a person would actually say.",
      ),
      tr(
        "Me enteré por un colega de que la oficina iba a cerrar.",
        "I found out from a colleague that the office was going to close.",
        [
          "I found out from a colleague that the office was closing.",
          "I heard from a colleague that the office was going to close.",
          "I heard from a colleague that the office was closing.",
          "I learned from a colleague that the office was going to close.",
        ],
        "For everyday information, \"find out\" is the natural verb. \"Discover\" suits something new to everyone, so *I discovered from a colleague sounds odd.",
      ),
      wo(
        "Women make up almost half of the engineering team.",
        "Las mujeres constituyen casi la mitad del equipo de ingeniería.",
        "\"Make up\" is the neutral phrasal partner of \"constitute\": subject + \"make up\" + proportion.",
      ),
      tr(
        "¿Puedes organizar una reunión con el proveedor para el martes?",
        "Can you set up a meeting with the supplier for Tuesday?",
        [
          "Could you set up a meeting with the supplier for Tuesday?",
          "Can you arrange a meeting with the supplier for Tuesday?",
          "Could you arrange a meeting with the supplier for Tuesday?",
          "Can you set up a meeting with the supplier on Tuesday?",
          "Can you schedule a meeting with the supplier for Tuesday?",
          "Could you schedule a meeting with the supplier for Tuesday?",
        ],
        "\"Set up\" a meeting means \"arrange\" it, not \"establish\" it. And you never *make a meeting: you set one up, arrange it, have it or hold it.",
      ),
      fb(
        "The operation was ___ by a team of three surgeons.",
        "performed",
        "La operación fue [realizada] por un equipo de tres cirujanos.",
        ["carried out"],
        "«Realizar» an operation is \"perform\" (or \"carry out\"); \"conduct\" goes with research and surveys. Never *realized.",
      ),
      mc(
        "The new printers work ___: you just plug them in.",
        [
          "out of the box",
          "outside the box",
          "out the box of",
          "outside of the box",
        ],
        0,
        "\"Out of the box\" means ready to use straight from the packaging. \"Think outside the box\" is the creativity idiom: the two are easy to swap by mistake.",
      ),
      tr(
        "Al final, el cliente aceptó nuestra propuesta.",
        "In the end, the client accepted our proposal.",
        [
          "In the end the client accepted our proposal.",
          "Eventually, the client accepted our proposal.",
          "The client eventually accepted our proposal.",
          "In the end, the customer accepted our proposal.",
          "In the end, the client accepted our offer.",
        ],
        "«Al final» meaning «finalmente» is \"in the end\" or \"eventually\". *At the end needs \"of\" + something: \"at the end of the meeting\".",
      ),
      mc(
        "Which sentence from a business email is correct?",
        [
          "Could you explain the new expense policy to me?",
          "Could you explain me the new expense policy?",
          "We need to discuss about the new expense policy.",
          "The refund depends of the new expense policy.",
        ],
        0,
        "\"Explain something to someone\", \"discuss something\" (no \"about\") and \"depend on\". The wrong options are direct calques of «explícame», «discutir sobre» and «depender de».",
      ),
      fb(
        "Thanks for all the ___ on the draft.",
        "feedback",
        "Gracias por todos los [comentarios] sobre el borrador.",
        ["comments"],
        "\"Feedback\" is uncountable, like \"information\", \"advice\" and \"equipment\": never *feedbacks, even after \"all the\".",
      ),
      tr(
        "Le adjunto el presupuesto actualizado.",
        "Please find attached the updated quote.",
        [
          "Please find the updated quote attached.",
          "I've attached the updated quote.",
          "I'm attaching the updated quote.",
          "Please find attached the updated estimate.",
          "I've attached the updated estimate.",
          "Attached is the updated quote.",
        ],
        "\"Please find attached\" (formal) or \"I've attached\" (neutral). *I send you attached is a calque, and «presupuesto» for a job is a \"quote\" or \"estimate\".",
      ),
      lc(
        "One late delivery isn't a perfect storm. It's just a bad day.",
        "What is the speaker objecting to?",
        [
          "An idiom used for a situation it doesn't fit",
          "A bad weather forecast",
          "A delivery company's prices",
          "Someone's working hours",
        ],
        0,
        "\"A perfect storm\" needs several problems at once. The speaker is pointing out that the idiom has the right form but the wrong meaning for one late delivery.",
      ),
      dt(
        "Could you explain the new process to me before we discuss it?",
        "\"Explain... to me\" and \"discuss it\" with no \"about\": two calques avoided in one sentence.",
      ),
      dt(
        "We're committed to reducing costs, but not at the expense of quality.",
        "\"Committed to\" is followed by -ing (\"reducing\"). Listen for \"at the\" reduced to /ət ðə/.",
      ),
      sp(
        "I didn't realize the actual cost was so much higher.",
        "No me di cuenta de que el costo real era mucho más alto.",
        "Stress \"realize\", \"actual\" and \"higher\".",
        "Two false friends used correctly: \"realize\" is «darse cuenta» and \"actual\" is «real».",
      ),
      sp(
        "We'll look into it and get back to you by Friday.",
        "Lo revisaremos y te respondemos antes del viernes.",
        "Link \"look into it\" into one unit: loo-kin-to-it.",
        "\"Look into\" is the everyday partner of \"investigate\". It is inseparable, so the pronoun goes after it: \"look into it\", never *look it into.",
      ),
      tr(
        "Actualmente estamos en números rojos, pero eventualmente podríamos pedir un préstamo.",
        "We're currently in the red, but if necessary we could take out a loan.",
        [
          "We're currently in the red, but if necessary, we could take out a loan.",
          "We are currently in the red, but if necessary we could get a loan.",
          "We're currently in the red, but if need be we could take out a loan.",
          "At the moment we're in the red, but if necessary we could take out a loan.",
          "We're currently in the red, but if necessary we could ask for a loan.",
          "We're currently in the red, but if necessary we could apply for a loan.",
        ],
        "Unit mix: «actualmente» is \"currently\", «eventualmente» is \"if necessary\", and «en números rojos» is \"in the red\". Writing *actually and *eventually would change the meaning of the whole message.",
      ),
      mc(
        "Which sentence would a native editor leave unchanged?",
        [
          "Several hundred people attended the meeting, and in the end we reached a compromise.",
          "Several hundred people assisted to the meeting, and at the end we reached a compromise.",
          "Several hundred people attended to the meeting, and finally we reached a commitment.",
          "Several hundred people attended the meeting, and at the end we arrived to a compromise.",
        ],
        0,
        "\"Attend\" takes no preposition, \"in the end\" (not *at the end) means «al final», and «llegar a un acuerdo» is \"reach a compromise\". A \"commitment\" is an obligation, not a deal.",
      ),
    ],
  ),
];
