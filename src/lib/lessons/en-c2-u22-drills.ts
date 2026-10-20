// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u22-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u22 (job interviews: pitfalls, CVs and cover letters, questions, salary and closing, negotiating the offer, video and panel interviews, error correction): a short recap, then graded practice.

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

export const EN_C2_U22_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Parts 5-7: pitfalls, CVs and cover letters, questions, salary and closing
  // ---------------------------------------------------------------------
  drill(
    "en-c2-interview-closing-unit-drill-1",
    "Drill: Pitfalls, CVs and the Final Questions",
    "Avoid the false friends and register slips that cost candidates the job, write CV bullets and cover letter lines in natural English, and handle questions, salary, notice periods and the follow-up.",
    "Recap: what quietly costs you the job",
    [
      "The big six false friends: \"currently\" (not actually), \"attend\" (not assist), \"degree\" (not career), \"training\" (not formation), \"carry out\" (not realize), \"committed\" (not compromised). Lead with the answer, keep a friendly neutral register (\"Thanks for having me\", contractions in speech) and frame every move as a move towards something, never a criticism of a former employer.",
      "CV bullets start with a past-tense action verb and end with a number (\"Streamlined...\", \"Secured...\"); cover letters end \"I look forward to hearing from you\". Indirect questions keep statement order (\"Could you tell me what the next steps are?\"), salaries are annual and gross (\"in the region of\"), and notice takes the possessive: \"three months' notice\".",
    ],
    [
      ["I'm currently a payroll specialist at a retail chain.", "Actualmente soy especialista en nóminas en una cadena de tiendas."],
      ["Reduced onboarding time by 30% by redesigning the induction program.", "Reduje el tiempo de incorporación un 30% rediseñando el programa de bienvenida."],
      ["Could you tell me how the team measures success?", "¿Podría decirme cómo mide el equipo el éxito?"],
      ["I'd need to give my employer two months' notice.", "Tendría que dar dos meses de preaviso a mi empresa."],
    ],
    [
      // --- Part 5: false friends ---
      mt(
        "Match each Spanish word with its correct English equivalent in an interview.",
        [
          ["actualmente", "currently"],
          ["asistir a", "attend"],
          ["carrera (universitaria)", "degree"],
          ["formación", "training"],
          ["realizar", "carry out"],
          ["comprometido", "committed"],
        ],
        "\"Actually\" means «en realidad», \"assist\" means «ayudar», a \"career\" is your whole working life, \"formation\" is how something is formed, \"realize\" means «darse cuenta» and \"compromised\" means damaged or put at risk.",
      ),
      mc(
        "A candidate says: \"Actually, I work at an insurance company.\" How does this sound to a native interviewer?",
        [
          "As if they are correcting a misunderstanding",
          "Like a neutral statement of their current job",
          "Like an overly formal opening",
          "As if they are about to leave that company",
        ],
        0,
        "\"Actually\" means «en realidad» and signals a contrast with what was said before. For «actualmente», say \"currently\" or \"at the moment\".",
      ),
      tr(
        "Actualmente estoy realizando un análisis de los costos de distribución.",
        "I'm currently carrying out an analysis of distribution costs.",
        [
          "I am currently carrying out an analysis of distribution costs.",
          "I'm currently carrying out an analysis of the distribution costs.",
          "I'm currently conducting an analysis of distribution costs.",
          "I'm currently conducting an analysis of the distribution costs.",
          "At the moment I'm carrying out an analysis of distribution costs.",
          "I'm currently analyzing distribution costs.",
          "I'm currently doing an analysis of distribution costs.",
        ],
        "Two false friends at once: «actualmente» is \"currently\" and «realizar» is \"carry out\" or \"conduct\". *I'm actually realizing an analysis would mean «en realidad me estoy dando cuenta de un análisis».",
      ),
      fb(
        "I'm fully ___ to building long-term relationships with our clients.",
        "committed",
        "Estoy totalmente [comprometida] con construir relaciones a largo plazo con nuestros clientes.",
        [],
        "«Comprometido» is \"committed to\" (+ noun or -ing, because \"to\" is a preposition). *Compromised suggests your integrity has been damaged.",
      ),
      tr(
        "Soy licenciada en Psicología y el año pasado asistí a un congreso en Lima.",
        "I have a degree in psychology, and last year I attended a conference in Lima.",
        [
          "I have a degree in psychology and last year I attended a conference in Lima.",
          "I have a psychology degree, and last year I attended a conference in Lima.",
          "I have a psychology degree and last year I attended a conference in Lima.",
          "I have a degree in psychology, and I attended a conference in Lima last year.",
          "I studied psychology, and last year I attended a conference in Lima.",
          "I have a degree in psychology, and last year I went to a conference in Lima.",
        ],
        "«Licenciada en» is \"a degree in\"; «asistir a» is \"attend\" with no preposition; and a professional «congreso» is usually a \"conference\" (a \"congress\" is a political body or a huge formal assembly).",
      ),
      // --- Part 5: answers that land, register, former employers ---
      mc(
        "The interviewer asks, \"Have you ever managed a remote team?\" Which answer follows English interview conventions best?",
        [
          "The short answer is yes: for two years I led a team of nine across four time zones.",
          "Yes.",
          "Well, to understand that, first I need to explain how my company was founded in 2005...",
          "It is an honor to be asked such a question by this distinguished panel.",
        ],
        0,
        "Lead with the answer, add one piece of evidence, stop. A bare \"Yes\" wastes the chance to show evidence, a long preamble sounds like avoiding the question, and the ceremonial opener is far too stiff.",
      ),
      fb(
        "There are two main reasons I applied, and to give you a concrete ___, last year we doubled our online sales.",
        "example",
        "Hay dos razones principales por las que me postulé y, por darle un [ejemplo] concreto, el año pasado duplicamos nuestras ventas en línea.",
        [],
        "Signposts such as \"There are two main reasons\" and \"To give you a concrete example\" tell the listener where the answer is going.",
      ),
      mc(
        "Which is the most natural way to start your answer about a project?",
        [
          "I'd like to talk about my last project.",
          "I would like to proceed to explain my last project.",
          "In relation to my last project, I would like to express the following.",
          "I proceed to explain you my last project.",
        ],
        0,
        "Neutral, friendly register with a contraction. \"Proceed to\" + verb is a calque of «proceder a», and *explain you is wrong: you \"explain something to someone\".",
      ),
      tr(
        "La empresa pasó por una reestructuración y ahora busco un puesto con más margen para liderar.",
        "The company went through a restructuring, and now I'm looking for a role with more scope for leadership.",
        [
          "The company went through a restructuring and now I'm looking for a role with more scope for leadership.",
          "The company went through a restructuring, and I'm now looking for a role with more scope for leadership.",
          "The company went through a restructuring, and now I'm looking for a position with more scope for leadership.",
          "The company went through a restructuring, and now I'm looking for a role with more scope to lead.",
          "The company underwent a restructuring, and now I'm looking for a role with more scope for leadership.",
          "The company went through a restructuring, and now I am looking for a role with more scope for leadership.",
          "The company went through a restructuring, and now I'm looking for a role with more room for leadership.",
        ],
        "Name the problem neutrally, then frame the move as a move towards something. \"Scope for\" means room or opportunity for.",
      ),
      // --- Part 6: CVs and resumes ---
      mc(
        "You are applying for a job in Chicago. Which should you leave out of your resume?",
        [
          "Your date of birth and a photo",
          "A short professional summary",
          "Action verbs with measurable results",
          "Your languages and their levels",
        ],
        0,
        "US resumes (and UK CVs) leave out photos, date of birth, marital status and ID numbers; equality laws mean recruiters prefer not to see them.",
      ),
      mc(
        "Which CV bullet point is strongest?",
        [
          "Streamlined the returns process, cutting refund times from 14 days to 5.",
          "Responsible for the returns process.",
          "I was in charge of helping with the returns process.",
          "Management of the returns process and coordination of refunds.",
        ],
        0,
        "A strong bullet starts with a past-tense action verb, leaves out \"I\" and ends with a number. \"Responsible for\" and noun lists describe a job, not an achievement.",
      ),
      fb(
        "___ the company's entry into the Brazilian market, opening two offices in 18 months.",
        "Spearheaded",
        "[Encabecé] la entrada de la empresa en el mercado brasileño, abriendo dos oficinas en 18 meses.",
        ["Led", "Headed"],
        "\"Spearheaded\" means led a new initiative from the front. CV bullets drop the subject \"I\" and start with the verb.",
      ),
      tr(
        "Conseguí 800.000 dólares de financiación pública para el proyecto.",
        "Secured 800,000 dollars in public funding for the project.",
        [
          "Secured $800,000 in public funding for the project.",
          "Secured 800,000 dollars of public funding for the project.",
          "Secured $800,000 of public funding for the project.",
          "I secured 800,000 dollars in public funding for the project.",
          "I secured $800,000 in public funding for the project.",
          "Secured 800,000 dollars in government funding for the project.",
          "Secured $800,000 in government funding for the project.",
        ],
        "\"Secured\" is the CV verb for winning funding or a contract. English uses a comma for thousands (800,000), not a period as in Spanish (800.000).",
      ),
      mc(
        "How should a Mexican «licenciatura» in Economics appear on an English CV?",
        [
          "Bachelor's degree in Economics",
          "Licensed in Economics",
          "Career in Economics",
          "Graduated of Economics",
        ],
        0,
        "Qualifications are translated, not transliterated: «licenciatura» or «grado» is a \"bachelor's degree\" (BA, BSc). \"Licensed\" means officially permitted, and a \"career\" is your working life.",
      ),
      tr(
        "Ingeniera civil bilingüe con diez años de experiencia en infraestructura vial.",
        "Bilingual civil engineer with ten years' experience in road infrastructure.",
        [
          "Bilingual civil engineer with ten years of experience in road infrastructure.",
          "Bilingual civil engineer with 10 years' experience in road infrastructure.",
          "Bilingual civil engineer with 10 years of experience in road infrastructure.",
          "Bilingual civil engineer with ten years' experience in road infrastructure projects.",
          "Bilingual civil engineer with ten years' experience in highway infrastructure.",
        ],
        "A personal statement is written without \"I\" in a compressed style. Note \"ten years' experience\" (apostrophe) or \"ten years of experience\", never *ten years experience.",
      ),
      // --- Part 6: cover letters ---
      mc(
        "In a British cover letter that begins \"Dear Sir or Madam\", which sign-off is traditionally correct?",
        [
          "Yours faithfully,",
          "Yours sincerely,",
          "Attentively,",
          "Without anything else, yours,",
        ],
        0,
        "British convention: \"Yours faithfully\" after \"Dear Sir or Madam\", \"Yours sincerely\" after a name. Never translate «Atentamente» as *Attentively, and drop «Sin otro particular».",
      ),
      fb(
        "I look forward to ___ from you.",
        "hearing",
        "Quedo a la espera de [tener noticias] suyas.",
        [],
        "In \"look forward to\", \"to\" is a preposition, so the verb takes -ing. *I look forward to hear from you is one of the most frequent errors in letters by Spanish speakers.",
      ),
      wo(
        "I am writing to apply for the position of Logistics Coordinator.",
        "Le escribo para postularme al puesto de coordinador de logística.",
        "The standard opening line of a cover letter: purpose first. \"Apply for\" takes \"for\".",
      ),
      dt(
        "Dear Hiring Manager, I would welcome the opportunity to discuss my application in more detail.",
        "\"Dear Hiring Manager\" is the modern choice when you have no name. Listen for \"welcome the opportunity\".",
      ),
      // --- Part 7: questions ---
      mc(
        "Which question is correct?",
        [
          "Could you tell me what the biggest challenges are?",
          "Could you tell me what are the biggest challenges?",
          "Could you tell me which are the biggest challenges are?",
          "Could you tell me the biggest challenges what are?",
        ],
        0,
        "Indirect questions keep statement order: subject + verb (\"what the biggest challenges are\"). Spanish keeps the same order in both («¿Podría decirme cuáles son...?»), which is why the slip is so common.",
      ),
      tr(
        "Me preguntaba cómo se mide el rendimiento en este puesto.",
        "I was wondering how performance is measured in this role.",
        [
          "I was wondering how performance is measured in this position.",
          "I was wondering how performance is evaluated in this role.",
          "I was wondering how performance is assessed in this role.",
          "I was wondering how you measure performance in this role.",
          "I was wondering how performance in this role is measured.",
          "I was wondering how performance is measured for this role.",
        ],
        "\"I was wondering\" is a tentative frame, and the embedded question keeps statement order (\"how performance is measured\", not *how is performance measured).",
      ),
      wo(
        "What would success look like in the first six months?",
        "¿Qué se consideraría un buen resultado en los primeros seis meses?",
        "A question about the work, not the perks. \"Would\" makes it hypothetical and polite.",
      ),
      // --- Part 7: salary and notice ---
      tr(
        "Busco algo en torno a los 70.000 dólares al año, en bruto.",
        "I'm looking for something in the region of 70,000 dollars a year, gross.",
        [
          "I'm looking for something in the region of $70,000 a year, gross.",
          "I am looking for something in the region of 70,000 dollars a year, gross.",
          "I'm looking for something around 70,000 dollars a year, gross.",
          "I'm looking for something around $70,000 a year, gross.",
          "I'm looking for something in the region of 70,000 dollars a year before tax.",
          "I'm looking for something in the region of 70,000 dollars gross a year.",
          "I'm looking for around 70,000 dollars a year, gross.",
          "I'm looking for something in the range of 70,000 dollars a year, gross.",
        ],
        "Salaries in English-speaking countries are discussed as annual gross figures. \"In the region of\" softens the figure; «bruto» is \"gross\" or \"before tax\".",
      ),
      fb(
        "My ___ salary is around 52,000 dollars, plus an annual bonus.",
        "base",
        "Mi salario [base] ronda los 52.000 dólares, más un bono anual.",
        ["basic"],
        "The \"base salary\" (UK also \"basic salary\") is the fixed part; the \"package\" adds the bonus, pension, health insurance and other benefits.",
      ),
      tr(
        "Tendría que dar tres meses de preaviso a mi empresa actual.",
        "I'd need to give my current employer three months' notice.",
        [
          "I would need to give my current employer three months' notice.",
          "I'd have to give my current employer three months' notice.",
          "I would have to give my current employer three months' notice.",
          "I'd need to give three months' notice to my current employer.",
          "I'd have to give three months' notice to my current employer.",
          "I'd need to give my current company three months' notice.",
          "I'm on a three-month notice period with my current employer.",
        ],
        "«Preaviso» is \"notice\", uncountable and with the possessive: \"three months' notice\". Avoid *the notice of three months; \"I'm on a three-month notice period\" is the other natural option.",
      ),
      lc(
        "I may be able to negotiate an earlier release.",
        "What does the candidate mean?",
        [
          "They might be able to leave their current job sooner than their notice period",
          "They want to be released from the new contract early",
          "They will definitely start next week",
          "They want the company to publish its results earlier",
        ],
        0,
        "An \"earlier release\" means your current employer lets you go before the end of your notice period. \"May be able to\" keeps the offer tentative.",
      ),
      // --- Part 7: closing and follow-up ---
      tr(
        "Gracias por dedicarme su tiempo ayer. Quedo a su disposición para cualquier información adicional.",
        "Thank you for taking the time to meet with me yesterday. Please let me know if you need any further information.",
        [
          "Thank you for taking the time to meet me yesterday. Please let me know if you need any further information.",
          "Thank you for taking the time to meet with me yesterday. Please let me know if you need any more information.",
          "Thank you for taking the time to meet with me yesterday. I'm happy to provide any further information.",
          "Thank you for taking the time to meet with me yesterday. I'd be happy to provide any further information.",
          "Thanks for taking the time to meet with me yesterday. Please let me know if you need any further information.",
          "Thank you for your time yesterday. Please let me know if you need any further information.",
        ],
        "A follow-up email in natural English. «Quedo a su disposición» is not *I remain at your disposition: say \"Please let me know if you need any further information\".",
      ),
      dt(
        "Thank you, I've really enjoyed our conversation. It's made me even more interested in the role.",
        "A warm close: thanks plus renewed interest. Listen for the contractions \"I've\" and \"It's\".",
      ),
      sp(
        "When can I expect to hear back from you?",
        "¿Cuándo puedo esperar noticias suyas?",
        "\"Hear back\" is one chunk; let your voice fall on \"you\".",
        "If the interviewer has not mentioned the timeline, ask about it as part of a short, warm close.",
      ),
      tr(
        "¿Podría contarme un poco más sobre cómo está organizado el equipo de ventas?",
        "Could you tell me a bit more about how the sales team is organized?",
        [
          "Could you tell me a bit more about how the sales team is organised?",
          "Could you tell me a little more about how the sales team is organized?",
          "Could you tell me a bit more about how the sales team is structured?",
          "Could you tell me a little more about how the sales team is structured?",
          "Could you tell me more about how the sales team is organized?",
          "Can you tell me a bit more about how the sales team is organized?",
        ],
        "The embedded question keeps statement order: \"how the sales team is organized\", not *how is organized the sales team.",
      ),
      tr(
        "Según lo que he investigado, buscaría entre 60.000 y 65.000 dólares, aunque estoy abierto a hablar del paquete en su conjunto.",
        "Based on my research, I'd be looking for between 60,000 and 65,000 dollars, though I'm open to discussing the overall package.",
        [
          "Based on my research, I would be looking for between 60,000 and 65,000 dollars, though I'm open to discussing the overall package.",
          "Based on my research, I'd be looking for between $60,000 and $65,000, though I'm open to discussing the overall package.",
          "Based on my research, I'd be looking for between 60,000 and 65,000 dollars, although I'm open to discussing the overall package.",
          "Based on my research, I'd be looking for between 60,000 and 65,000 dollars, but I'm open to discussing the overall package.",
          "Based on my research, I'd be looking for something between 60,000 and 65,000 dollars, though I'm open to discussing the overall package.",
          "Based on my research, I'd be looking for between 60,000 and 65,000 dollars, though I'm open to discussing the package as a whole.",
          "Based on my research, I'd be looking for 60,000 to 65,000 dollars, though I'm open to discussing the overall package.",
        ],
        "A researched range, introduced with a softener (\"I'd be looking for\"), and flexibility on the \"package\" (bonus, pension, benefits). Note the comma for thousands in English.",
      ),
      lc(
        "That figure is gross, so my take-home pay would be quite a bit lower.",
        "What is \"take-home pay\"?",
        [
          "The salary after tax and deductions",
          "The salary before tax",
          "Money paid for working from home",
          "A bonus paid at the end of the year",
        ],
        0,
        "\"Take-home pay\" is net pay, «neto». \"Gross\" is before tax, «bruto».",
      ),
      wo(
        "I'd be available to start from early April.",
        "Podría incorporarme a partir de principios de abril.",
        "\"Available to start from\" + date is the natural way to give a start date; \"early April\" means the beginning of April.",
      ),
      // --- Combined and traps ---
      tr(
        "Trabajo en esta empresa desde 2019 y en 2022 dirigí la migración del sistema de facturación.",
        "I've been working at this company since 2019, and in 2022 I led the migration of the billing system.",
        [
          "I have been working at this company since 2019, and in 2022 I led the migration of the billing system.",
          "I've worked at this company since 2019, and in 2022 I led the migration of the billing system.",
          "I've been working for this company since 2019, and in 2022 I led the migration of the billing system.",
          "I've worked for this company since 2019, and in 2022 I led the migration of the billing system.",
          "I've been at this company since 2019, and in 2022 I led the migration of the billing system.",
          "I've been working at this company since 2019, and in 2022 I led the billing system migration.",
          "I've been working at this company since 2019 and in 2022 I led the migration of the billing system.",
          "I've been working at this company since 2019, and in 2022 I led the migration of the invoicing system.",
        ],
        "Present perfect for the ongoing job, past simple for the dated achievement: the two tense errors interviewers notice most are *I work here since 2019 and *I have led it in 2022.",
      ),
      kw(
        "NOTICE",
        "I have to tell my employer one month before I leave.",
        "I'm on a one-month ___.",
        "notice period",
        [],
        "\"I'm on a one-month notice period\": \"one-month\" is a compound adjective, so there is no -s. Compare \"one month's notice\", with the possessive.",
      ),
      mc(
        "Which sentence would you use when asked why you are leaving your current job?",
        [
          "I've learned a great deal there, but I'd like to work in a more international environment.",
          "Actually, my boss is impossible and the company is a disaster.",
          "I'm compromised with my company, but they don't value me.",
          "I'm leaving because they never gave me the formation I needed.",
        ],
        0,
        "Never badmouth a former employer, and frame the move towards something. The others criticize the employer and add false friends (actually, compromised, formation).",
      ),
      sp(
        "I'm currently responsible for training new staff, and I'm fully committed to the role.",
        "Actualmente soy responsable de la formación del personal nuevo y estoy totalmente comprometida con el puesto.",
        "Stress \"currently\" and \"committed\"; keep \"for\" and \"to\" weak.",
        "Three false friends avoided in one sentence: currently, training, committed.",
      ),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Negotiating the offer, video and panel interviews, error hunt + whole-unit mix
  // ---------------------------------------------------------------------
  drill(
    "en-c2-interview-closing-unit-drill-2",
    "Drill: Negotiating, Video Calls and Error Hunting",
    "Negotiate an offer with tentative language, handle small talk, video glitches, panels and group tasks smoothly, and spot and fix the tense, make/do, article and false-friend errors in interview English.",
    "Recap: the offer, the call and the corrections",
    [
      "Negotiation relies on distance: \"I was wondering whether there's any flexibility on...\", \"Would it be all right if I came back to you by Friday?\", \"Is there any room to move on...?\". Anchor requests in your value, present conditions as a package and accept or decline warmly. On video, \"You froze\", \"You're on mute\", \"You're breaking up\"; in panels and group tasks, build on others and ask \"Can I just come in here?\".",
      "The errors to hunt: the present for ongoing jobs (*I work here since), the present perfect with a finished time (*I have led it in 2021), make/do (*make an internship), articles (*I am engineer, *The teamwork is key) and stiff calques (*I proceed to explain you).",
    ],
    [
      ["I was wondering whether there's any flexibility on the start date.", "Me preguntaba si hay algo de margen con la fecha de incorporación."],
      ["Sorry, you broke up there for a second. Could you repeat the question?", "Perdón, se le cortó el audio un segundo. ¿Podría repetir la pregunta?"],
      ["Building on what Marta said, we could pilot the idea in one store.", "Partiendo de lo que dijo Marta, podríamos probar la idea en una tienda."],
      ["I did an internship and made a few mistakes, but I learned a lot.", "Hice una pasantía y cometí algunos errores, pero aprendí mucho."],
    ],
    [
      // --- Responding to the offer ---
      mc(
        "The recruiter calls: \"We'd like to offer you the position.\" You want time to think. What is the best reply?",
        [
          "That's wonderful news, thank you. Could you send me the details in writing so I can get back to you by Thursday?",
          "OK. I'll think about it.",
          "I accept immediately, whatever the conditions are.",
          "I need more money first, then I'll decide.",
        ],
        0,
        "Show enthusiasm, ask for the written offer and give a concrete deadline. Asking for time is normal in English-speaking business cultures; a flat \"OK\" sounds cold and a bare demand sounds aggressive.",
      ),
      fb(
        "Would it be all right if I ___ back to you on Monday?",
        "came",
        "¿Le parecería bien que le [diera una respuesta] el lunes?",
        ["got"],
        "The unreal past after \"Would it be all right if I...\" makes the request more tentative. \"Came back to you\" and \"got back to you\" are both natural.",
      ),
      tr(
        "Solo quisiera revisar los detalles antes de darle una respuesta definitiva.",
        "I'd just like to look over the details before I give you a final answer.",
        [
          "I would just like to look over the details before I give you a final answer.",
          "I'd just like to go over the details before I give you a final answer.",
          "I'd just like to look over the details before giving you a final answer.",
          "I'd just like to review the details before I give you a final answer.",
          "I'd just like to look through the details before I give you a final answer.",
          "I'd just like to look over the details before I give you a definite answer.",
          "I'd just like to check the details before I give you a final answer.",
        ],
        "\"Look over\" means read through and check. «Definitiva» here is \"final\" or \"definite\"; \"definitive\" sounds overly formal.",
      ),
      // --- Asking for more ---
      mc(
        "Which request for a higher salary is most likely to work in an English-speaking negotiation?",
        [
          "Given my experience with ERP migrations, I was hoping for something closer to 75,000.",
          "I want 75,000. My rent is very expensive.",
          "You must pay me 75,000 or I will not accept.",
          "Give me 75,000, please.",
        ],
        0,
        "Distance (past tense \"I was hoping\") plus an anchor in value (\"Given my experience\"). Personal reasons such as rent, and bare demands, are easy to refuse.",
      ),
      tr(
        "Me preguntaba si hay algo de margen en el bono de desempeño.",
        "I was wondering whether there's any flexibility on the performance bonus.",
        [
          "I was wondering whether there is any flexibility on the performance bonus.",
          "I was wondering if there's any flexibility on the performance bonus.",
          "I was wondering if there is any flexibility on the performance bonus.",
          "I was wondering whether there's any room to move on the performance bonus.",
          "I was wondering if there's any room to move on the performance bonus.",
          "I was wondering whether there's any flexibility in the performance bonus.",
          "I was wondering whether there's any flexibility on the bonus.",
        ],
        "\"I was wondering whether...\" sounds like a possibility rather than a demand, which makes it easy to say yes to. \"Flexibility on\" or \"room to move on\" are the standard collocations.",
      ),
      fb(
        "If the salary is fixed, could we look at the relocation package ___?",
        "instead",
        "Si el salario es fijo, ¿podríamos revisar [en su lugar] la ayuda por traslado?",
        [],
        "\"Instead\" at the end of the clause means «en su lugar». Moving to the rest of the package keeps the negotiation alive when the base salary will not move.",
      ),
      lc(
        "Would you be able to meet me halfway?",
        "What is the candidate proposing?",
        [
          "That both sides make an equal concession",
          "That they meet in person at a halfway point",
          "That the offer is accepted as it is",
          "That the negotiation stops for now",
        ],
        0,
        "\"Meet someone halfway\" means each side moves the same distance towards agreement: «llegar a un punto intermedio».",
      ),
      // --- Start date and conditions ---
      tr(
        "Hay dos cosas que me gustaría comentar: la fecha de incorporación y los días de teletrabajo.",
        "There are two things I'd like to discuss: the start date and the remote days.",
        [
          "There are two things I would like to discuss: the start date and the remote days.",
          "There are two things I'd like to discuss: the start date and the remote working days.",
          "There are two things I'd like to discuss: the start date and the days working from home.",
          "There are two things I'd like to discuss: the start date and the work-from-home days.",
          "There are two things I'd like to talk about: the start date and the remote days.",
          "There are two things I'd like to discuss: the start date and remote work.",
          "There are two things I'd like to discuss: the start date and remote working.",
        ],
        "Presenting conditions as a package avoids seeming to add demands one by one. Note \"discuss\" takes no preposition: never *discuss about.",
      ),
      kw(
        "EARLIEST",
        "I can't start before the first of July.",
        "The ___ start would be the first of July.",
        "earliest I could",
        ["earliest I can"],
        "\"The earliest I could start would be...\" uses the notice period as an argument while sounding cooperative.",
      ),
      wo(
        "Could we bring the first salary review forward to six months?",
        "¿Podríamos adelantar la primera revisión salarial a los seis meses?",
        "\"Bring something forward\" means move it to an earlier date; the object can go between \"bring\" and \"forward\".",
      ),
      // --- Accepting or declining ---
      tr(
        "Tras pensarlo detenidamente, he decidido aceptar otra oferta.",
        "After careful consideration, I've decided to accept another offer.",
        [
          "After careful consideration, I have decided to accept another offer.",
          "After careful consideration I've decided to accept another offer.",
          "After giving it careful thought, I've decided to accept another offer.",
          "After thinking it over carefully, I've decided to accept another offer.",
          "After careful consideration, I've decided to take another offer.",
          "After considering it carefully, I've decided to accept another offer.",
        ],
        "A graceful decline: a brief, non-specific reason and no criticism. \"After careful consideration\" is the standard formula.",
      ),
      mc(
        "«Le agradezco enormemente su tiempo.» Which is natural English?",
        [
          "I really appreciate your time.",
          "I thank you enormously for your time.",
          "I appreciate enormously you your time.",
          "I am enormously grateful of your time.",
        ],
        0,
        "Keep the gratitude at a natural level: \"I really appreciate your time\" or \"Thank you very much for your time\". *I thank you enormously is a calque.",
      ),
      // --- Small talk and video ---
      mc(
        "The interviewer says, \"Did you find us OK?\" Which reply sets the right tone?",
        [
          "Yes, no problem at all, thanks. The directions were really clear.",
          "Yes.",
          "The traffic was a total nightmare and the parking is terrible.",
          "Well, and you?",
        ],
        0,
        "Short, positive and friendly: one sentence plus a small detail. A one-word answer sounds cold, complaints sound negative, and *Well, and you? is a calque of «Bien, ¿y usted?».",
      ),
      fb(
        "Sorry, you ___ for a second. Could you repeat the last part?",
        "froze",
        "Perdón, [se le congeló la imagen] un segundo. ¿Podría repetir la última parte?",
        [],
        "On a video call, someone \"freezes\" when the image stops: \"You froze\". English uses the person as the subject, not *your image congealed.",
      ),
      tr(
        "Creo que tiene el micrófono silenciado.",
        "I think you're on mute.",
        ["I think you are on mute.", "I think you're muted.", "I think you are muted.", "I think your microphone is muted.", "I think your mic is muted."],
        "«Está en silencio» is \"You're on mute\", not *You are in silence.",
      ),
      lc(
        "You're breaking up a little. Would it help if I turned my camera off?",
        "What is happening?",
        [
          "The sound is cutting out, and the speaker suggests a fix",
          "The other person is ending the relationship",
          "The image has frozen completely and the call has ended",
          "The speaker wants to stop the interview",
        ],
        0,
        "\"Breaking up\" or \"cutting out\" means the sound is being interrupted. \"Would it help if I turned...\" proposes a solution instead of apologizing repeatedly.",
      ),
      // --- Panels and assessment centers ---
      tr(
        "Como comentó Daniel antes, el equipo está creciendo rápidamente.",
        "As Daniel mentioned earlier, the team is growing quickly.",
        [
          "As Daniel mentioned earlier, the team is growing fast.",
          "As Daniel mentioned before, the team is growing quickly.",
          "As Daniel said earlier, the team is growing quickly.",
          "As Daniel mentioned earlier, the team is growing rapidly.",
          "As Daniel mentioned earlier, the team's growing quickly.",
          "As Daniel pointed out earlier, the team is growing quickly.",
        ],
        "Referring to panel members by name connects your answers into one conversation. «Comentar» here is \"mention\", not *comment, which needs \"on\" and means give an opinion.",
      ),
      wo(
        "Shall I start with the budget question and then come back to the timeline?",
        "¿Empiezo por la pregunta del presupuesto y luego vuelvo al calendario?",
        "\"Shall I...?\" offers to manage the turn when two panel members ask at once.",
      ),
      mc(
        "In a group exercise, you want to take a turn while someone is speaking. Which is most appropriate?",
        [
          "Sorry, can I just come in here?",
          "No, no, no, listen to me.",
          "Stop. My idea is better.",
          "Excuse me, you are wrong.",
        ],
        0,
        "\"Sorry, can I just come in here?\" is the polite way to take the floor. A bare \"No, no, no\", common in Spanish conversation, sounds aggressive in English.",
      ),
      dt(
        "We've got about ten minutes left, so shall we agree on a recommendation?",
        "A timekeeping move in a group task. Listen for \"We've got\" and the weak \"on a\".",
      ),
      // --- Error hunt ---
      mc(
        "Which sentence has NO errors?",
        [
          "I'm currently responsible for training new employees.",
          "Actually I am responsible of the formation of new employees.",
          "Currently I am responsible of training new employees.",
          "I'm actually responsible for the formation of new employees.",
        ],
        0,
        "\"Currently\" (not actually), \"responsible for\" (not *of) and \"training\" (not formation). Each wrong option keeps at least one of the three calques.",
      ),
      fb(
        "___, the board approved the budget, after three rounds of revisions.",
        "Eventually",
        "[Finalmente], el consejo aprobó el presupuesto, tras tres rondas de revisiones.",
        ["Finally", "In the end"],
        "\"Eventually\" means «finalmente, al final» after a long process; it does not mean «eventualmente» (possibly, occasionally).",
      ),
      tr(
        "Dirigí el proyecto de expansión en 2021, y desde entonces he abierto cuatro oficinas más.",
        "I led the expansion project in 2021, and since then I've opened four more offices.",
        [
          "I led the expansion project in 2021, and since then I have opened four more offices.",
          "I led the expansion project in 2021 and since then I've opened four more offices.",
          "I led the expansion project in 2021, and I've opened four more offices since then.",
          "I led the expansion project in 2021, and I've since opened four more offices.",
          "I led the expansion project in 2021, and since then I've opened four other offices.",
          "I led the expansion project in 2021, and since then I've opened another four offices.",
        ],
        "The dated event takes the past simple (*I have led it in 2021 is wrong); the period up to now takes the present perfect.",
      ),
      mt(
        "Match each noun with the verb it takes: make or do.",
        [
          ["an internship", "do"],
          ["a difference", "make"],
          ["research", "do"],
          ["progress", "make"],
          ["business", "do"],
          ["a decision", "make"],
        ],
        "\"Do\" for tasks and activities, \"make\" for creating and deciding. *I made an internship and *I want to do a difference are typical errors.",
      ),
      tr(
        "El trabajo en equipo es fundamental para mí; soy economista, no vendedor.",
        "Teamwork is essential for me; I'm an economist, not a salesperson.",
        [
          "Teamwork is essential to me; I'm an economist, not a salesperson.",
          "Teamwork is essential for me; I am an economist, not a salesperson.",
          "Teamwork is fundamental for me; I'm an economist, not a salesperson.",
          "Teamwork is essential for me; I'm an economist, not a salesman.",
          "Teamwork is essential for me; I'm an economist, not a sales rep.",
          "Teamwork is key for me; I'm an economist, not a salesperson.",
        ],
        "No article for general statements (*The teamwork is essential), but \"a/an\" with jobs (*I'm economist). Spanish does exactly the opposite in both places.",
      ),
      fb(
        "Could you explain the reporting structure ___ me in a bit more detail?",
        "to",
        "¿Podría explicar[me] la estructura jerárquica con un poco más de detalle?",
        [],
        "\"Explain\" takes \"to\" before the person: \"explain something to someone\". *Explain me the structure is a calque of «explícame».",
      ),
      tr(
        "Hice una pasantía en una empresa de ingeniería y cometí algunos errores al principio.",
        "I did an internship at an engineering firm and made a few mistakes at first.",
        [
          "I did an internship at an engineering firm, and I made a few mistakes at first.",
          "I did an internship at an engineering company and made a few mistakes at first.",
          "I did an internship at an engineering firm and made some mistakes at first.",
          "I did an internship at an engineering firm and made a few mistakes at the beginning.",
          "I did an internship at an engineering firm and made a few mistakes early on.",
          "I did an internship with an engineering firm and made a few mistakes at first.",
        ],
        "\"Do an internship\" (an activity) but \"make a mistake\" (fixed collocation). *I made an internship and *I did some mistakes swap them. «Prácticas» is never *practices.",
      ),
      tr(
        "Llevo seis años en el sector y el año pasado terminé un máster en logística.",
        "I've been in the industry for six years, and last year I finished a master's in logistics.",
        [
          "I have been in the industry for six years, and last year I finished a master's in logistics.",
          "I've been in the industry for six years and last year I finished a master's in logistics.",
          "I've been in the sector for six years, and last year I finished a master's in logistics.",
          "I've worked in the industry for six years, and last year I finished a master's in logistics.",
          "I've been in the industry for six years, and last year I completed a master's in logistics.",
          "I've been in the industry for six years, and last year I finished a master's degree in logistics.",
          "I've been in the industry for six years, and I finished a master's in logistics last year.",
        ],
        "Present perfect with \"for\" for the ongoing situation, past simple with \"last year\" (*I have finished my master's last year is the classic slip), and \"a master's\" with the apostrophe.",
      ),
      // --- Whole-unit mix (mock interview) ---
      tr(
        "Gracias por recibirme. Actualmente soy analista de compras y en los últimos dos años he reducido nuestros costos un 12%.",
        "Thanks for having me. I'm currently a purchasing analyst, and over the last two years I've cut our costs by 12%.",
        [
          "Thank you for having me. I'm currently a purchasing analyst, and over the last two years I've cut our costs by 12%.",
          "Thanks for having me. I'm currently a procurement analyst, and over the last two years I've cut our costs by 12%.",
          "Thanks for having me. I'm currently a purchasing analyst, and in the last two years I've cut our costs by 12%.",
          "Thanks for having me. I'm currently a purchasing analyst, and over the past two years I've cut our costs by 12%.",
          "Thanks for having me. I'm currently a purchasing analyst, and over the last two years I've reduced our costs by 12%.",
          "Thanks for having me. I'm currently a purchasing analyst, and over the last two years I've cut our costs by twelve percent.",
          "Thanks for having me. I am currently a purchasing analyst, and over the last two years I have cut our costs by 12%.",
        ],
        "Friendly opener, \"currently\", an article before the job, the present perfect for a period up to now and \"by\" for the amount of change.",
      ),
      dt(
        "I'd say my greatest strength is turning messy data into clear decisions.",
        "A softened claim from the mock interview. Listen for the contraction \"I'd\" and the linking in \"turning messy\".",
      ),
      sp(
        "I was hoping for something closer to 68,000, given the scope of the role.",
        "Esperaba algo más cercano a 68.000, teniendo en cuenta el alcance del puesto.",
        "Say \"sixty-eight thousand\"; stress \"closer\" and \"scope\".",
        "Past continuous for distance, and an anchor in value rather than need.",
      ),
      kw(
        "LOOK FORWARD",
        "I hope you will reply soon.",
        "I ___ from you.",
        "look forward to hearing",
        [],
        "\"Look forward to\" + -ing, because \"to\" is a preposition: never *look forward to hear.",
      ),
      mc(
        "Which closing question would make the best impression at the end of an interview?",
        [
          "What are the biggest challenges the team is facing right now?",
          "How many vacation days do I get in the first year?",
          "No, I think you've covered everything.",
          "Could you tell me what are the next steps?",
        ],
        0,
        "Questions about the work and the team impress; perks can wait until the offer. \"No questions\" wastes the chance, and the last option breaks indirect-question word order (\"what the next steps are\").",
      ),
      sp(
        "I'm delighted to accept the offer. Just to confirm, the start date will be the third of March.",
        "Estoy encantado de aceptar la oferta. Solo para confirmar: la fecha de incorporación será el 3 de marzo.",
        "Warm rising tone on \"delighted\"; clear, even pace for the date.",
        "Accept clearly and confirm the key terms, so there is no second dispute later.",
      ),
    ],
  ),
];
