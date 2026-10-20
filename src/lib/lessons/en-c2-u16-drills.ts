// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u16-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u16 (presentations and negotiation: delivery, Q&A, deadlock, written agreements, register): a short recap, then graded practice.

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


export const EN_C2_U16_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Delivery and body language, handling questions, deadlock and
  // concessions
  // ---------------------------------------------------------------------
  drill(
    "en-c2-dealmaking-unit-drill-1",
    "Drill: Delivery, Q&A and Deadlock",
    "Describe and improve delivery (eye contact, posture, voice, fillers, reading the room), run a Q&A that clarifies, deflects and handles hostility, and keep a stalled negotiation moving by naming, parking, reframing and trading.",
    "Recap: deliver, answer, unblock",
    [
      "You \"make eye contact\" (not *do), \"stand up straight\" rather than \"slouch\", \"enunciate\" (not *vocalize), \"speak up\" and \"project your voice\", cut out fillers and \"pause for effect\". \"Come across as\" describes the impression you give, and \"delivery\" is the way you present. In a Q&A: \"take questions\", clarify (\"Just so I'm clear...\"), postpone (\"Can I come back to that?\"), deflect (\"I'd rather not speculate\"), admit (\"I don't have that figure to hand\") and stay calm (\"With respect, I don't think that's quite accurate\").",
      "In a deadlock, name it (\"We seem to have reached an impasse\", \"the sticking point\"), park it (\"Let's park that for now\"), reframe (\"What would it take to...?\", \"What if we were to...?\") and trade (\"provided that you sign\" + present). Summarize common ground: \"We're agreed on X; the only outstanding issue is Y\", never *We are agree.",
    ],
    [
      ["Make eye contact with people at the back, too.", "Establece contacto visual también con la gente del fondo."],
      ["Just so I'm clear, you're asking about the second phase?", "Para asegurarme de que entiendo: ¿pregunta por la segunda fase?"],
      ["Delivery is the main sticking point.", "La entrega es el principal escollo."],
      ["What would it take to get this signed today?", "¿Qué haría falta para firmar esto hoy?"],
    ],
    [
      tr(
        "Intenta establecer contacto visual con todo el público.",
        "Try to make eye contact with the whole audience.",
        [
          "Try to make eye contact with the entire audience.",
          "Try to make eye contact with everyone in the audience.",
          "Try to make eye contact with all of the audience.",
          "Try to make eye contact with the whole room.",
          "Try and make eye contact with the whole audience.",
        ],
        "You \"make\" eye contact (and \"hold\" or \"break\" it). *Do eye contact and *establish visual contact are calques.",
      ),
      fb(
        "Look the interviewer in the ___ when you answer.",
        "eye",
        "Mira al entrevistador a los [ojos] cuando respondas.",
        ["eyes"],
        "«Mirar a alguien a los ojos» is \"look someone in the eye\", usually singular. *look the eyes of is the calque to avoid.",
      ),
      mc(
        "Which verb means «encorvarse» (standing or sitting with rounded shoulders)?",
        [
          "slouch",
          "fidget",
          "mumble",
          "gesture",
        ],
        0,
        "\"Slouch\" is about posture. \"Fidget\" is «no parar quieto», \"mumble\" is «hablar entre dientes», and \"gesture\" is the neutral verb for «gesticular».",
      ),
      tr(
        "Vocaliza más; desde el fondo no se te entiende.",
        "Enunciate more clearly; people at the back can't understand you.",
        [
          "Enunciate more clearly; the people at the back can't understand you.",
          "Enunciate more clearly; we can't understand you at the back.",
          "Enunciate more clearly; nobody at the back can understand you.",
          "Articulate your words more clearly; people at the back can't understand you.",
          "Enunciate more; people at the back can't understand you.",
          "Enunciate more clearly; people in the back can't understand you.",
        ],
        "«Vocalizar» is a false friend: English \"vocalize\" means to put a feeling into words or produce a sound. Say \"enunciate\" or \"articulate\".",
      ),
      fb(
        "You'll need to ___ your voice in a hall this size.",
        "project",
        "Vas a tener que [proyectar] la voz en un salón de este tamaño.",
        [],
        "\"Project your voice\" (or \"speak up\") is what a large room demands. \"Raise your voice\" suggests anger.",
      ),
      mc(
        "Your coach says you rely too heavily on fillers. What is the best advice?",
        [
          "Cut them out and get comfortable with short, deliberate pauses.",
          "Replace every \"um\" with \"like\" or \"you know\".",
          "Speak faster so there is no time for fillers.",
          "Use Spanish fillers like «o sea», which English speakers won't notice.",
        ],
        0,
        "The fix is not to swap one filler for another but to use silence. A Spanish «bueno» or «eh» in an English talk is instantly noticeable.",
      ),
      fb(
        "Try to cut ___ on the fillers in your next talk.",
        "down",
        "Intenta [reducir] las muletillas en tu próxima charla.",
        [],
        "\"Cut down on\" means reduce; \"cut out\" means remove completely. Both are standard in delivery feedback.",
      ),
      tr(
        "Se dio cuenta de que el público estaba perdiendo el interés, así que fue al grano.",
        "She could tell the audience was losing interest, so she cut to the chase.",
        [
          "She could tell that the audience was losing interest, so she cut to the chase.",
          "She could tell the audience were losing interest, so she cut to the chase.",
          "She realized the audience was losing interest, so she cut to the chase.",
          "She noticed the audience was losing interest, so she cut to the chase.",
          "She could tell the audience was losing interest, so she got to the point.",
          "She realized that the audience was losing interest, so she got straight to the point.",
        ],
        "Reading the room and reacting: \"cut to the chase\" is «ir al grano». \"Could tell\" means «se dio cuenta» from signs, not *could say.",
      ),
      tr(
        "Dio la impresión de estar tranquila, aunque un poco rígida.",
        "She came across as calm, albeit a little wooden.",
        [
          "She came across as calm, albeit a little stiff.",
          "She came across as calm, although a little wooden.",
          "She came across as calm, if a little wooden.",
          "She came across as calm, though a little stiff.",
          "She came across as calm but a little wooden.",
          "She came across as calm, but a little stiff.",
          "She came across as calm, albeit slightly wooden.",
        ],
        "\"Come across as\" + adjective is «dar la impresión de». \"Wooden\" or \"stiff\" describes rigid delivery, and \"albeit\" + adjective (from Unit 13) adds the concession neatly.",
      ),
      mc(
        "«Su exposición fue muy clara» (the way she spoke). Which is the English?",
        [
          "Her delivery was very clear.",
          "Her exposition was very clear.",
          "Her exhibition was very clear.",
          "Her exposure was very clear.",
        ],
        0,
        "\"Delivery\" is the way you present. \"Exposition\" is a formal written explanation or an exhibition, and \"exposure\" is something else entirely.",
      ),
      lc(
        "She's very good at reading the room.",
        "What does this mean?",
        [
          "She notices how the audience is reacting and adjusts.",
          "She reads her notes very fluently.",
          "She always checks the venue before a talk.",
          "She speaks loudly enough for a large room.",
        ],
        0,
        "To \"read the room\" is to notice the audience's mood (glazed eyes, phones, shuffling) and adapt: pick up the pace, skip a slide or ask a question.",
      ),
      tr(
        "Con gusto responderé sus preguntas después de la demostración.",
        "I'd be happy to take your questions after the demo.",
        [
          "I'd be happy to take your questions after the demonstration.",
          "I would be happy to take your questions after the demo.",
          "I'll be happy to take your questions after the demo.",
          "I'd be happy to take any questions after the demo.",
          "I'd be glad to take your questions after the demo.",
          "I'd be happy to answer your questions after the demo.",
        ],
        "\"Take questions\" means accept and answer them in turn. *respond your questions misses the preposition, and a bare \"Questions?\" sounds abrupt.",
      ),
      tr(
        "Para asegurarme de que entiendo: ¿pregunta si el piloto se extenderá a otras oficinas?",
        "Just so I'm clear, are you asking whether the pilot will be extended to other offices?",
        [
          "Just so I'm clear: are you asking whether the pilot will be extended to other offices?",
          "Just so I'm clear, are you asking if the pilot will be extended to other offices?",
          "Just so I'm clear, are you asking whether the pilot will be rolled out to other offices?",
          "Just so I'm clear, are you asking whether the pilot will be expanded to other offices?",
          "Just to be clear, are you asking whether the pilot will be extended to other offices?",
          "If I understand you correctly, you're asking whether the pilot will be extended to other offices?",
        ],
        "Clarify before answering: \"Just so I'm clear, are you asking whether...?\". The embedded question keeps statement order: \"whether the pilot will be\", not *will the pilot be.",
      ),
      fb(
        "Let me come ___ to that in a moment, once we've seen the timeline.",
        "back",
        "Permítame [retomar] eso en un momento, cuando hayamos visto el calendario.",
        [],
        "\"Come back to\" («retomar», «volver sobre») postpones a question politely and sounds more natural than \"return to the question\".",
      ),
      tr(
        "No tengo ese dato a mano, pero se lo envío mañana por la mañana.",
        "I don't have that figure to hand, but I'll send it to you tomorrow morning.",
        [
          "I don't have that figure to hand, but I'll send it to you first thing tomorrow.",
          "I don't have that figure on hand, but I'll send it to you tomorrow morning.",
          "I don't have that number in front of me, but I'll send it to you tomorrow morning.",
          "I don't have that figure to hand, but I'll get back to you tomorrow morning.",
          "I don't have that figure to hand, but I'll send it over tomorrow morning.",
          "I don't have that data to hand, but I'll send it to you tomorrow morning.",
          "I don't have that information to hand, but I'll send it to you tomorrow morning.",
        ],
        "Admit it and offer a next step. \"To hand\" (BrE) or \"on hand\", \"in front of me\" (AmE) mean «a mano»; never bluff.",
      ),
      mc(
        "«No sabría decirle.» Which is the natural English?",
        [
          "I couldn't tell you.",
          "I wouldn't know to tell you.",
          "I wouldn't know say you.",
          "I don't know to say you.",
        ],
        0,
        "\"I couldn't tell you\" or \"I'm afraid I don't know\". *I wouldn't know to tell you is a word-for-word calque.",
      ),
      lc(
        "Perhaps we could take that offline.",
        "What is the speaker suggesting?",
        [
          "Discussing it privately later",
          "Ending the video call immediately",
          "Removing the slide from the presentation",
          "Asking the audience to vote on it",
        ],
        0,
        "\"Take something offline\" means to discuss it later, outside the meeting: a polite way to deflect a question that doesn't concern everyone.",
      ),
      tr(
        "Entiendo por qué diría eso, pero con respeto, no creo que sea del todo exacto.",
        "I can see why you'd say that, but with respect, I don't think that's quite accurate.",
        [
          "I can see why you would say that, but with respect, I don't think that's quite accurate.",
          "I can see why you'd say that, but, with respect, I don't think that's quite accurate.",
          "I can see why you'd say that, but with respect, I don't think that's entirely accurate.",
          "I understand why you'd say that, but with respect, I don't think that's quite accurate.",
          "I can see why you'd say that, but with respect, I don't think it's quite accurate.",
          "I can see why you'd say that, but with respect, I don't think that's completely accurate.",
        ],
        "Acknowledge, then correct firmly without attacking. \"With respect\" is safer than \"with all due respect\", and English negates \"think\": \"I don't think that's...\" rather than *I think it isn't.",
      ),
      fb(
        "Let's talk about it ___, over coffee.",
        "afterwards",
        "Hablemos de eso [después], con un café.",
        ["afterward", "later"],
        "\"Afterwards\" (AmE also \"afterward\") stands alone; \"after\" needs an object (\"after the session\"). *Let's talk about it after is a common slip.",
      ),
      mt(
        "Match each phrase to its Spanish meaning.",
        [
          ["We're going around in circles.", "Estamos dando vueltas sin avanzar."],
          ["This is the sticking point.", "Este es el escollo."],
          ["Let's park that for now.", "Dejemos eso de lado por ahora."],
          ["We're not that far apart.", "No estamos tan lejos."],
          ["the outstanding issues", "los temas pendientes"],
          ["break the deadlock", "desbloquear la situación"],
        ],
        "The vocabulary of a stalled negotiation. Note the false friend: \"outstanding\" here means «pendiente», not «sobresaliente».",
      ),
      mc(
        "Negotiations ___ over the question of who pays for shipping.",
        [
          "stalled",
          "stagnated",
          "stuck themselves",
          "estancated",
        ],
        0,
        "Talks \"stall\" or \"get bogged down\". \"Stagnate\" is for economies and careers, so *The negotiation stagnated is not idiomatic.",
      ),
      tr(
        "¿Qué haría falta para cerrar este acuerdo hoy?",
        "What would it take to close this deal today?",
        [
          "What would it take to close the deal today?",
          "What would it take to get this deal over the line today?",
          "What would it take to get this over the line today?",
          "What would it take to seal this deal today?",
          "What would it take to close this deal now?",
        ],
        "\"What would it take to...?\" reframes from positions to interests and invites the other side to name their price. *What would it need is a calque.",
      ),
      tr(
        "¿Y si ampliáramos el contrato a cuatro años?",
        "What if we were to extend the contract to four years?",
        [
          "What if we extended the contract to four years?",
          "Suppose we extended the contract to four years?",
          "What if we were to lengthen the contract to four years?",
        ],
        "\"What if we were to...?\" sounds exploratory rather than like a firm offer; \"What if we extended...?\" is the neutral version. Avoid *What if we will extend.",
      ),
      fb(
        "We'd be prepared to cover shipping, provided that you ___ for two years.",
        "sign",
        "Estaríamos dispuestos a cubrir el envío, siempre que [firmen] por dos años.",
        ["commit"],
        "After \"provided that\", \"as long as\" and \"on condition that\", English uses the present simple. *provided that you will sign is wrong.",
      ),
      mc(
        "We've already ___ a significant concession on price.",
        [
          "made",
          "done",
          "realized",
          "taken",
        ],
        0,
        "You \"make a concession\" (and \"make an offer\"). *do a concession copies «hacer».",
      ),
      wo(
        "We could be more flexible on delivery if you could be more flexible on price.",
        "Podríamos ser más flexibles con la entrega si ustedes pudieran ser más flexibles con el precio.",
        "Trade, never give: a mirrored conditional ties your concession to theirs.",
      ),
      tr(
        "Estamos de acuerdo en el volumen; el único punto pendiente son las condiciones de pago.",
        "We're agreed on volume; the only outstanding issue is the payment terms.",
        [
          "We're agreed on volume; the only outstanding issue is payment terms.",
          "We agree on volume; the only outstanding issue is the payment terms.",
          "We agree on volume; the only outstanding issue is payment terms.",
          "We're agreed on the volume; the only outstanding issue is the payment terms.",
          "We're agreed on volume; the only outstanding point is the payment terms.",
          "We're agreed on volume; the only issue still outstanding is the payment terms.",
          "We are agreed on volume; the only outstanding issue is the payment terms.",
        ],
        "\"We're agreed on\" (formal) or \"We agree on\" (everyday), never *We are agree. \"Outstanding\" means «pendiente».",
      ),
      wo(
        "Just so I'm clear, you'd like the figures broken down by region?",
        "Para asegurarme de que entiendo: ¿quiere las cifras desglosadas por región?",
        "A clarifying question with statement word order and rising intonation; it also lets the rest of the room hear the question.",
      ),
      tr(
        "Parece que hemos llegado a un punto muerto. Dejemos el precio de lado y veamos primero la capacitación.",
        "We seem to have reached an impasse. Let's park the price for now and look at the training first.",
        [
          "We seem to have reached an impasse. Let's park price for now and look at the training first.",
          "We seem to have reached an impasse. Let's put the price to one side and look at the training first.",
          "We seem to have reached a deadlock. Let's park the price for now and look at the training first.",
          "We seem to have hit a deadlock. Let's park the price for now and look at the training first.",
          "It seems we've reached an impasse. Let's park the price for now and look at the training first.",
          "We seem to have reached an impasse. Let's set the price aside and look at the training first.",
          "We seem to have reached an impasse. Let's park the price and look at the training first.",
        ],
        "Name the deadlock, then park the sticking point and build momentum on an easier issue. \"Reach an impasse\" is the idiom; *arrive to a dead point is a calque.",
      ),
      mc(
        "Which sentence is correct?",
        [
          "We're agreed on the timeline; the only outstanding issue is the warranty.",
          "We are agree on the timeline; the only outstanding issue is the warranty.",
          "We're agreed in the timeline; the only excellent issue is the warranty.",
          "We agree the timeline; the only pending issue has stagnated.",
        ],
        0,
        "\"Agreed on\", \"outstanding\" in the sense of «pendiente», and no *are agree. The other options mix in prepositions, false friends and the wrong verb for stalled talks.",
      ),
      dt(
        "I don't have that figure to hand, so let's park it and come back to it after the break.",
        "Admitting you don't know, parking an issue and promising to return: Q&A and negotiation tools together.",
      ),
      dt(
        "She came across as assured, and she paused instead of filling every silence.",
        "\"Come across as\" + adjective for the impression given; deliberate pauses replace fillers.",
      ),
      sp(
        "I can see why you'd say that. What would it take to get this over the line?",
        "Entiendo por qué lo dice. ¿Qué haría falta para cerrar esto?",
        "Warm, falling tone on the first sentence; stress \"take\" and \"over the line\".",
        "Acknowledge the other side, then reframe with \"What would it take...?\" instead of defending your position.",
      ),
      sp(
        "Slow down, pause, and let that sink in before the next slide.",
        "Baja el ritmo, haz una pausa y deja que eso cale antes de la siguiente diapositiva.",
        "Pause briefly after \"Slow down\" and after \"pause\"; stress \"sink in\".",
        "Coaching language for delivery: pace, deliberate silence and \"let that sink in\".",
      ),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Agreements in writing, closing the deal, the Q&A session,
  // tentative language and register, plus a whole-unit mix
  // ---------------------------------------------------------------------
  drill(
    "en-c2-dealmaking-unit-drill-2",
    "Drill: Close, Confirm and Choose the Register",
    "Write follow-up summaries with unambiguous dates, figures and obligations, qualify them with \"subject to contract\" and \"in principle\", handle a live Q&A, and set the right degree of tentativeness and formality in a negotiation.",
    "Recap: put it in writing, answer, set the tone",
    [
      "Open with \"As agreed in yesterday's meeting\" or \"Further to our call\", attach with \"Please find attached\" or \"I've attached\", and use \"by\" for deadlines, \"until\" for periods and \"within 30 days of\". State obligations with \"will\", not \"should\"; qualify with \"subject to contract\", \"subject to board approval\" and \"agreed in principle\"; and close with \"I look forward to hearing from you\".",
      "In a Q&A, take multi-part questions \"one at a time\", give \"the short answer\", challenge loaded premises (\"I'd question the assumption that...\") and bridge (\"What I can tell you is...\"). Soften requests with past forms (\"I was wondering if you could...\"), distance with \"It would seem...\", and match register: \"That's not really our call\" (informal) vs \"I'm afraid that falls outside our remit\" (formal).",
    ],
    [
      ["As agreed, please find below a summary of the main terms.", "Tal como acordamos, a continuación encontrará un resumen de los puntos principales."],
      ["The report is due by 30 September.", "El informe debe entregarse a más tardar el 30 de septiembre."],
      ["The short answer is no; the longer answer is more interesting.", "La respuesta corta es no; la más larga es más interesante."],
      ["I was wondering if we could revisit the timeline.", "Me preguntaba si podríamos revisar el calendario."],
    ],
    [
      tr(
        "Tal como acordamos en la reunión de ayer, la primera entrega llegará el 3 de marzo.",
        "As agreed in yesterday's meeting, the first delivery will arrive on March 3.",
        [
          "As agreed in yesterday's meeting, the first delivery will arrive on 3 March.",
          "As agreed at yesterday's meeting, the first delivery will arrive on March 3.",
          "As agreed at yesterday's meeting, the first delivery will arrive on 3 March.",
          "As agreed in yesterday's meeting, the first delivery will arrive on March 3rd.",
          "As agreed in yesterday's meeting, the first shipment will arrive on March 3.",
          "As we agreed in yesterday's meeting, the first delivery will arrive on March 3.",
          "As agreed yesterday, the first delivery will arrive on March 3.",
        ],
        "\"As agreed in yesterday's meeting\" uses the possessive: *in the meeting of yesterday copies «en la reunión de ayer». Writing the month in letters avoids 03/04 confusion.",
      ),
      mc(
        "«Adjunto le envío el contrato revisado.» Which is correct in a business email?",
        [
          "Please find attached the revised contract.",
          "I send you attached the revised contract.",
          "Attached I send you the revised contract.",
          "I attach you the revised contract.",
        ],
        0,
        "\"Please find attached...\" (or, more modern, \"I've attached...\"). *I send you attached and *I attach you are calques of the Spanish formula.",
      ),
      fb(
        "Payment is due ___ 15 May.",
        "by",
        "El pago debe hacerse [hasta el] 15 de mayo.",
        ["no later than", "on or before"],
        "For a deadline, «hasta» is \"by\" (on or before that date). \"Until\" describes a period that continues, so *due until 15 May is the classic error.",
      ),
      fb(
        "The discount is valid ___ the end of the month.",
        "until",
        "El descuento es válido [hasta] fin de mes.",
        ["till", "through"],
        "Here «hasta» describes a period that lasts up to a point, so \"until\" is right. Compare \"Pay by Friday\" (deadline) and \"valid until Friday\" (period).",
      ),
      tr(
        "Envíen la propuesta a más tardar el viernes a las 5 p. m.",
        "Please send the proposal no later than 5 p.m. on Friday.",
        [
          "Send the proposal no later than 5 p.m. on Friday.",
          "Please send the proposal by 5 p.m. on Friday.",
          "Send the proposal by 5 p.m. on Friday.",
          "Please send the proposal no later than 5 p.m. Friday.",
          "Please send the proposal by 5 p.m. Friday.",
          "Please send the proposal no later than 5 pm on Friday.",
          "Please send us the proposal no later than 5 p.m. on Friday.",
        ],
        "\"No later than\" (or \"by\") fixes a deadline precisely. *until Friday at 5 would mean you keep sending until then.",
      ),
      mc(
        "In a summary email, which sentence states the supplier's obligation unambiguously?",
        [
          "The supplier will deliver the goods by 1 June.",
          "The supplier should deliver the goods by 1 June.",
          "The supplier could deliver the goods by 1 June.",
          "The supplier would maybe deliver the goods by 1 June.",
        ],
        0,
        "Use \"will\" (or \"is to\") for agreed obligations. \"Should\" sounds like a recommendation, which makes the obligation seem optional.",
      ),
      mc(
        "Which date is safest in an email to a US partner and a European partner?",
        [
          "April 3, 2027",
          "03/04/2027",
          "3/4/27",
          "04.03.27",
        ],
        0,
        "Numeric dates mean 3 April in Europe and Latin America but March 4 in the US. Writing the month in letters removes the ambiguity.",
      ),
      tr(
        "Hemos acordado en principio ampliar el servicio a dos sedes más.",
        "We've agreed in principle to extend the service to two more sites.",
        [
          "We have agreed in principle to extend the service to two more sites.",
          "We've agreed in principle to extend the service to two more locations.",
          "We've agreed in principle to expand the service to two more sites.",
          "We've agreed in principle to extend the service to two additional sites.",
          "In principle, we've agreed to extend the service to two more sites.",
          "We've agreed in principle to extend the service to another two sites.",
        ],
        "\"Agreed in principle\" means the general idea is accepted but details remain open. \"Agree to\" + infinitive; \"two more sites\", not *more two sites.",
      ),
      tr(
        "En principio llego a las seis.",
        "I should be there by six.",
        [
          "I'm planning to be there by six.",
          "I should get there by six.",
          "I should arrive by six.",
          "I expect to be there by six.",
          "I should be there at six.",
          "I'm planning to arrive by six.",
        ],
        "Here «en principio» means «probablemente», so English uses \"should\" or \"I'm planning to\". *In principle I arrive at six sounds like a contractual reservation.",
      ),
      lc(
        "This offer is subject to contract.",
        "What does this mean?",
        [
          "Nothing is legally binding until a formal contract is signed.",
          "The offer is already a binding contract.",
          "The offer can only be accepted in writing by the subject.",
          "The contract has been canceled.",
        ],
        0,
        "\"Subject to contract\" protects both sides: the terms are agreed in outline, but nothing binds anyone until the formal contract is signed.",
      ),
      fb(
        "The agreement is ___ to board approval.",
        "subject",
        "El acuerdo está [sujeto] a la aprobación de la junta.",
        [],
        "\"Subject to\" + noun introduces a condition: \"subject to board approval\", \"subject to legal review\".",
      ),
      tr(
        "Quedo a la espera de sus noticias.",
        "I look forward to hearing from you.",
        [
          "I'm looking forward to hearing from you.",
          "I am looking forward to hearing from you.",
          "I look forward to your reply.",
          "I look forward to hearing back from you.",
        ],
        "\"Look forward to\" + -ing: \"to\" is a preposition here, so *I look forward to hear is wrong. *I stay waiting for your news is a calque.",
      ),
      mc(
        "Which closing line sounds natural in a modern business email?",
        [
          "Please don't hesitate to get in touch if you have any questions.",
          "I remain at your entire disposal for whatever thing.",
          "I stay waiting your news.",
          "Don't hesitate in contacting with me.",
        ],
        0,
        "\"Please don't hesitate to get in touch\" is the natural equivalent of «quedo a su disposición». *I remain at your disposal is stiff, and the others are calques.",
      ),
      tr(
        "Si algo de esto difiere de sus notas, avíseme antes del jueves.",
        "If anything here differs from your notes, please let me know by Thursday.",
        [
          "If anything here differs from your notes, let me know by Thursday.",
          "If anything here differs from your notes, do let me know by Thursday.",
          "If any of this differs from your notes, please let me know by Thursday.",
          "If anything here is different from your notes, please let me know by Thursday.",
          "If anything in this differs from your notes, please let me know by Thursday.",
          "If anything here differs from your notes, please let me know before Thursday.",
        ],
        "Ask the other side to confirm so that silence cannot later be read as disagreement. \"Differ from\" takes \"from\"; \"by Thursday\" sets the deadline.",
      ),
      fb(
        "Let me be clear up ___: we can't change the delivery date.",
        "front",
        "Le aclaro [de entrada]: no podemos cambiar la fecha de entrega.",
        [],
        "\"Up front\" («de entrada», «desde el principio») signals transparency about your constraints at the start of a negotiation.",
      ),
      tr(
        "Nuestro punto de partida es de 50 dólares por usuario al año.",
        "Our starting point is 50 dollars per user per year.",
        [
          "Our starting point is $50 per user per year.",
          "Our starting point is fifty dollars per user per year.",
          "Our starting point is 50 dollars per user a year.",
          "Our starting point is 50 dollars a user a year.",
        ],
        "\"Starting point\" tells the other side there is room to move; \"final offer\" this early would close doors. Note \"per user per year\", with no article.",
      ),
      wo(
        "Could you include the setup at no extra cost?",
        "¿Podrían incluir la instalación sin costo adicional?",
        "A request for one more concession, softened with \"Could you\". \"At no extra cost\" is the fixed phrase for «sin costo adicional».",
      ),
      lc(
        "Are we close to something we can both live with?",
        "Why does the negotiator ask this?",
        [
          "To test whether both sides are ready to agree",
          "To complain about the other side's attitude",
          "To suggest living in the same city",
          "To end the negotiation without a deal",
        ],
        0,
        "When the gap is small, test for agreement. \"Something we can both live with\" is acceptable to both, perhaps with some reluctance.",
      ),
      tr(
        "Me hizo un par de preguntas; déjeme responderlas una por una.",
        "You've asked a couple of things there; let me take them one at a time.",
        [
          "You've asked a couple of questions there; let me take them one at a time.",
          "You've asked a couple of things; let me take them one at a time.",
          "You've asked a couple of questions; let me take them one at a time.",
          "You asked a couple of questions; let me take them one at a time.",
          "You've asked a couple of things there. Let me take them one at a time.",
          "You've asked two questions there; let me take them one at a time.",
        ],
        "\"Let me take them one at a time\" takes control of a multi-part question. \"One by one\" is possible but less natural here.",
      ),
      mc(
        "«Resumiendo, nada cambia para el cliente.» Which is correct?",
        [
          "In short, nothing changes for the customer.",
          "Resuming, nothing changes for the customer.",
          "Resuming up, nothing changes for the customer.",
          "To resume, nothing changes for the customer.",
        ],
        0,
        "«Resumiendo» is \"In short\", \"To sum up\" or \"In a nutshell\". \"Resume\" means to start again after a pause.",
      ),
      tr(
        "Cuestionaría la premisa de que esto se trata de recortar costos.",
        "I'd question the assumption that this is about cutting costs.",
        [
          "I would question the assumption that this is about cutting costs.",
          "I'd question the premise that this is about cutting costs.",
          "I would question the premise that this is about cutting costs.",
          "I'd question the assumption that this is about reducing costs.",
          "I'd challenge the assumption that this is about cutting costs.",
          "I'd question the idea that this is about cutting costs.",
        ],
        "A loaded question hides an assumption; challenge it calmly. «Se trata de» is \"is about\", never *treats of.",
      ),
      fb(
        "What I ___ tell you is that no one will be relocated.",
        "can",
        "Lo que sí [puedo] decirle es que nadie será trasladado.",
        [],
        "\"What I can tell you is...\" bridges from a hostile question to the facts you are able to share.",
      ),
      mc(
        "A participant keeps interrupting your answer. Which response keeps the floor politely?",
        [
          "If I could just finish my answer...",
          "Calm down, please.",
          "Be quiet a moment.",
          "Let me finish, you!",
        ],
        0,
        "\"If I could just finish...\" is polite but firm. \"Calm down\" almost always makes people angrier in English.",
      ),
      tr(
        "En aras del tiempo, ¿podría formular su pregunta en una frase?",
        "In the interest of time, could I ask you to put your question in a sentence?",
        [
          "In the interests of time, could I ask you to put your question in a sentence?",
          "In the interest of time, could I ask you to put your question in one sentence?",
          "In the interest of time, could you put your question in a sentence?",
          "In the interest of time, could you put your question in one sentence?",
          "In the interests of time, could you put your question in one sentence?",
          "In the interest of time, could you phrase your question in one sentence?",
        ],
        "\"In the interest(s) of time\" is polite but firm, ideal for a monologue disguised as a question. *For the interest of time is a calque.",
      ),
      tr(
        "Me preguntaba si podría enviarnos el informe antes del viernes.",
        "I was wondering if you could send us the report by Friday.",
        [
          "I was wondering whether you could send us the report by Friday.",
          "I was wondering if you could send the report to us by Friday.",
          "I was wondering if you could send us the report before Friday.",
          "I was wondering if you might be able to send us the report by Friday.",
          "I was wondering if you could send over the report by Friday.",
        ],
        "The past continuous \"I was wondering\" softens a present request. After \"could\", the bare infinitive: never *could to send.",
      ),
      mc(
        "In a negotiation, the other side asks for delivery in one week. You mean «Eso es imposible». What would a native negotiator most likely say?",
        [
          "That would be very difficult for us, I'm afraid.",
          "That is impossible.",
          "Impossible. No way.",
          "That is not possible for us, no, never.",
        ],
        0,
        "Literal «Eso es imposible» sounds blunter in English than intended. \"That would be very difficult for us\" or \"I'm not sure we could do that\" says no without closing the door.",
      ),
      mt(
        "Match each phrase to its register and function.",
        [
          ["That's not really our call.", "informal refusal"],
          ["That's not something we can decide.", "neutral refusal"],
          ["I'm afraid that falls outside our remit.", "formal refusal"],
          ["Sounds good.", "informal agreement"],
          ["That works for us.", "neutral agreement"],
          ["We're happy to agree to that.", "formal agreement"],
        ],
        "English has no «usted»: register comes from vocabulary, modals and length. Choose by context, and never let a Spanish «vale» slip into an English meeting.",
      ),
      fb(
        "It would ___ that there's been a misunderstanding about the dates.",
        "seem",
        "[Parecería] que ha habido un malentendido sobre las fechas.",
        ["appear"],
        "\"It would seem/appear that...\" distances you from an awkward fact. It is far softer than \"You've misunderstood the dates\".",
      ),
      kw(
        "RECOMMEND",
        "We think the company should invest now.",
        "We recommend that the company ___ now.",
        "invest",
        ["should invest"],
        "After \"recommend that\", formal English uses the base form for every person: \"the company invest\", not *invests. British English also allows \"should invest\".",
      ),
      wo(
        "We were thinking of a slightly longer trial period.",
        "Estábamos pensando en un período de prueba un poco más largo.",
        "The distancing past continuous (\"We were thinking of\") makes a proposal sound tentative; \"slightly\" softens it further.",
      ),
      tr(
        "Tal como acordamos, el precio será de 35 dólares el primer año, sujeto a la aprobación de la junta.",
        "As agreed, the price will be 35 dollars for the first year, subject to board approval.",
        [
          "As agreed, the price will be $35 for the first year, subject to board approval.",
          "As agreed, the price will be 35 dollars in the first year, subject to board approval.",
          "As agreed, the price will be 35 dollars for year one, subject to board approval.",
          "As agreed, the price will be 35 dollars for the first year, subject to approval by the board.",
          "As agreed, the price will be 35 dollars for the first year, subject to the board's approval.",
          "As agreed, the price for the first year will be 35 dollars, subject to board approval.",
        ],
        "\"As agreed\" (decided, stronger than \"as discussed\"), an obligation with \"will\", and a qualifier with \"subject to\". All three keep the summary unambiguous.",
      ),
      dt(
        "Further to our call this morning, please find below a summary of what we agreed.",
        "A formal follow-up opening: \"Further to\" + the meeting, then \"please find below\".",
      ),
      dt(
        "I was hoping we could go a little lower, but our absolute minimum is forty dollars.",
        "Getting the balance right: tentative about the request, clear about the final position.",
      ),
      sp(
        "That's not ideal, but I think we can live with it, provided delivery is by June.",
        "No es lo ideal, pero creo que podemos aceptarlo, siempre que la entrega sea antes de junio.",
        "Stress \"ideal\", \"live with\" and \"June\"; keep \"provided\" light.",
        "Understatement (\"not ideal\"), reluctant acceptance (\"we can live with it\") and a condition with \"provided\" + present, with \"by\" for the deadline.",
      ),
      sp(
        "Thank you all for some excellent questions. My email is on the final slide.",
        "Gracias a todos por sus excelentes preguntas. Mi correo está en la última diapositiva.",
        "Pause after \"questions\"; finish with a clear fall on \"slide\".",
        "Close a Q&A by thanking people for their questions, not only for their attention, and offer a way to follow up.",
      ),
    ],
  ),
];
