// Synced from cheneygross-afk/lengo:src/lib/lessons/en-c2-u23-drills.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";

// Required drill lessons for EN-C2 unit u23 (conflict resolution: de-escalating, acknowledging, apologizing, compromise, feedback, mediation, complaints, sorry vs excuse me, past modals and modal nuance): a short recap, then graded practice.

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

export const EN_C2_U23_DRILLS: Lesson[] = [
  // ---------------------------------------------------------------------
  // Drill 1. Parts 1-5: de-escalating, acknowledging, apologizing, compromise, feedback
  // ---------------------------------------------------------------------
  drill(
    "en-c2-conflict-unit-drill-1",
    "Drill: De-escalating, Apologizing and Finding Middle Ground",
    "Lower the temperature of a dispute, acknowledge without conceding, apologize fully, propose and confirm a compromise, and give critical feedback with genuine I-statements.",
    "Recap: from heat to agreement",
    [
      "De-escalate by naming the emotion with perception verbs (\"I can see\", \"It sounds like\"), slowing down and moving to \"let's\"; replace \"You always...\", \"Calm down!\" and \"Whatever\" with facts and offers. Acknowledge without conceding (\"I hear what you're saying\", \"I can see why you'd...\", \"That's a fair point, and...\"); keep \"You're right\" for real concessions.",
      "A real apology names the action, owns it, recognizes the impact and offers repair; \"apologize to someone for doing\". For middle ground, explore interests, propose tentatively (\"What if we moved...?\") and remember that a \"compromise\" is a mutual concession, while «compromiso» is usually a \"commitment\" or \"plans\". Feedback describes behavior, and a real I-statement uses an emotion: \"I feel frustrated when...\".",
    ],
    [
      ["It sounds like the last few days have been really stressful.", "Parece que los últimos días han sido muy estresantes."],
      ["I can see why you'd want a clear answer today.", "Entiendo que quieras una respuesta clara hoy."],
      ["I'm sorry I didn't call you back. That's on me.", "Siento no haberte devuelto la llamada. Es culpa mía."],
      ["What if we split the cost of the repairs?", "¿Y si dividimos el costo de las reparaciones?"],
    ],
    [
      // --- Part 1: de-escalating ---
      mc(
        "A customer is shouting about a lost package. Which reply is most likely to calm things down?",
        [
          "I can see this is really frustrating. Let's look at what we can do right now.",
          "Calm down, please. Shouting won't help.",
          "That's not my problem; the courier lost it.",
          "You're being ridiculous. It's only a package.",
        ],
        0,
        "Name the emotion with a perception verb, then move to \"let's\". Orders aimed at feelings (\"Calm down\"), refusing responsibility and labels for the person all escalate.",
      ),
      fb(
        "I can ___ you're upset, and I want to understand why.",
        "tell",
        "[Noto] que estás molesto y quiero entender por qué.",
        ["see"],
        "\"I can tell\" and \"I can see\" describe what you perceive, without claiming to know how the other person feels. \"I know how you feel\" often invites \"No, you don't\".",
      ),
      tr(
        "Explícame paso a paso lo que pasó. No hay prisa.",
        "Talk me through what happened. There's no rush.",
        [
          "Talk me through what happened. There is no rush.",
          "Walk me through what happened. There's no rush.",
          "Walk me through what happened. There is no rush.",
          "Talk me through what happened. Take your time.",
          "Talk me through what happened step by step. There's no rush.",
          "Walk me through what happened step by step. There's no rush.",
        ],
        "\"Talk me through\" invites the other person to explain at their own pace, and \"There's no rush\" slows the conversation down.",
      ),
      tr(
        "Demos un paso atrás y centrémonos en lo que podemos hacer.",
        "Let's take a step back and focus on what we can do.",
        [
          "Let's take a step back and focus on what we can actually do.",
          "Let us take a step back and focus on what we can do.",
          "Let's step back and focus on what we can do.",
          "Let's take a step back and concentrate on what we can do.",
          "Let's take a step back and look at what we can do.",
        ],
        "In Spanish the \"we\" is built into the verb («demos»); in English you must say \"let's\". Without it, *Take a step back sounds like an order.",
      ),
      mc(
        "Which is the calm equivalent of \"You never answer my messages\"?",
        [
          "I've sent you four messages since Monday and haven't heard back.",
          "You always ignore me, as usual.",
          "Whatever. I'll stop writing to you.",
          "Why are you so rude?",
        ],
        0,
        "Replace the generalization with a fact: a number, a time frame and your own experience. Absolutes, contempt (\"Whatever\") and labels escalate.",
      ),
      wo(
        "I'm not sure we're getting anywhere right now.",
        "No sé si estamos avanzando ahora mismo.",
        "An honest way to pause instead of storming off. \"Get anywhere\" means make progress.",
      ),
      // --- Part 2: acknowledging without conceding ---
      lc(
        "I can see where you're coming from.",
        "Is the speaker agreeing that the other person is right?",
        [
          "No: they understand the other person's view without accepting it",
          "Yes: they fully accept that the other person is right",
          "No: they are asking where the other person traveled from",
          "Yes: they are apologizing for a mistake",
        ],
        0,
        "\"I can see where you're coming from\" acknowledges the logic of someone's view, not its correctness. It is «entiendo tu punto de vista», not «tienes razón».",
      ),
      fb(
        "I can see why you ___ be annoyed about the delay.",
        "would",
        "Entiendo que [estés] molesto por el retraso.",
        ["might"],
        "The conditional \"you'd\" presents the reaction as natural in the circumstances, mirroring the Spanish subjunctive («que estés»). A plain present is correct but flatter.",
      ),
      tr(
        "Es lógico que quieras una explicación por escrito.",
        "It makes sense that you'd want a written explanation.",
        [
          "It makes sense that you would want a written explanation.",
          "It makes sense that you'd want an explanation in writing.",
          "It makes sense that you would want an explanation in writing.",
          "It makes sense you'd want a written explanation.",
          "It's understandable that you'd want a written explanation.",
          "It's understandable that you want a written explanation.",
          "It makes sense that you want a written explanation.",
        ],
        "«Es lógico que» + subjunctive becomes \"It makes sense that you'd...\": the hypothetical cushion again.",
      ),
      mc(
        "You accept part of a colleague's argument and want to add your own. Which keeps their point alive?",
        [
          "That's a fair point, and we also need to think about the cost.",
          "That's a fair point, but we also need to think about the cost.",
          "You have reason, but we need to think about the cost.",
          "I take your point of view, but the cost is the problem.",
        ],
        0,
        "\"And\" keeps both points on the table; \"but\" turns the concession into a preamble. *You have reason is a calque of «tienes razón», and \"I take your point\" has no \"of view\".",
      ),
      tr(
        "Tienes razón en que el plan era ambicioso, pero yo no llegaría a decir que fue un error.",
        "You're right that the plan was ambitious, but I wouldn't go as far as to say it was a mistake.",
        [
          "You are right that the plan was ambitious, but I wouldn't go as far as to say it was a mistake.",
          "You're right that the plan was ambitious, but I wouldn't go so far as to say it was a mistake.",
          "You're right that the plan was ambitious, but I wouldn't go as far as saying it was a mistake.",
          "You're right that the plan was ambitious, but I wouldn't go as far as to say that it was a mistake.",
          "You're right that the plan was ambitious, but I wouldn't go so far as to say that it was a mistake.",
          "You're right that the plan was ambitious, but I wouldn't say it was a mistake.",
        ],
        "Partial agreement names exactly what you accept and what you don't. \"You're right that\" + clause, never *You have reason that.",
      ),
      // --- Part 3: apologizing ---
      mc(
        "Which sentence is correct?",
        [
          "I'd like to apologize to you for missing the meeting.",
          "I'd like to apologize you for missing the meeting.",
          "I'd like to apologize you for to miss the meeting.",
          "I'd like to apologize to you for miss the meeting.",
        ],
        0,
        "\"Apologize to someone for doing something\". *I apologize you drops the \"to\", and after the preposition \"for\" the verb takes -ing.",
      ),
      mc(
        "Which is a real apology rather than a non-apology?",
        [
          "I sent the wrong file, and I'm sorry. I'll resend it now.",
          "I'm sorry if you felt the file was wrong.",
          "Mistakes were made with the file.",
          "I'm sorry, but you didn't explain which file you wanted.",
        ],
        0,
        "A real apology names the action, owns it and offers repair. \"I'm sorry if you felt...\" blames the feelings, the agentless passive hides who did it, and \"but\" cancels the apology.",
      ),
      tr(
        "Asumo toda la responsabilidad por el error en el informe.",
        "I take full responsibility for the error in the report.",
        [
          "I take full responsibility for the mistake in the report.",
          "I take complete responsibility for the error in the report.",
          "I take complete responsibility for the mistake in the report.",
          "I accept full responsibility for the error in the report.",
          "I accept full responsibility for the mistake in the report.",
        ],
        "\"Take full responsibility for\" is the strong ownership phrase. Avoid diluting it immediately with excuses.",
      ),
      fb(
        "How can I make this ___ to you?",
        "up",
        "¿Cómo puedo [compensártelo]?",
        [],
        "\"Make it up to someone\" means compensate them for something you did wrong: a repair phrase that shows you want to put things right.",
      ),
      tr(
        "Le ruego acepte nuestras más sinceras disculpas por el retraso en el envío.",
        "Please accept our sincere apologies for the delay in delivery.",
        [
          "Please accept our sincere apologies for the delay in the delivery.",
          "Please accept our sincere apologies for the delivery delay.",
          "Please accept our sincerest apologies for the delay in delivery.",
          "Please accept our sincere apologies for the delay in shipping.",
          "Please accept our sincere apologies for the shipping delay.",
          "Please accept our most sincere apologies for the delay in delivery.",
        ],
        "In formal writing, \"apologies\" is plural in \"Please accept our apologies\". Follow it with a specific repair so it doesn't sound formulaic.",
      ),
      lc(
        "Thank you for saying that. I need a bit of time, but I appreciate it.",
        "How is the speaker responding to the apology?",
        [
          "Acknowledging it without fully closing the matter yet",
          "Rejecting it angrily",
          "Saying it was unnecessary because nothing happened",
          "Apologizing in return",
        ],
        0,
        "You can acknowledge an apology without forgiving immediately. \"No worries\" would sound dismissive for a serious matter.",
      ),
      // --- Part 4: middle ground ---
      mc(
        "«Tengo un compromiso el jueves por la noche.» Which is the natural translation?",
        [
          "I've got plans on Thursday evening.",
          "I have a compromise on Thursday evening.",
          "I'm compromised on Thursday evening.",
          "I have a commitment of Thursday evening.",
        ],
        0,
        "«Compromiso» meaning prior plans is \"I've got plans\", \"I've got something on\" or \"I have a prior engagement\". A \"compromise\" is a mutual concession, and \"compromised\" means exposed or weakened.",
      ),
      tr(
        "Los dos tuvimos que ceder, pero llegamos a una solución intermedia.",
        "We both had to give a little, but we reached a compromise.",
        [
          "We both had to compromise, but we reached a compromise.",
          "We both had to make concessions, but we reached a compromise.",
          "We both had to compromise, but we found a middle ground.",
          "We both had to compromise, but we found middle ground.",
          "We both had to give way, but we reached a compromise.",
          "We both had to compromise, but we came to a compromise.",
        ],
        "«Ceder» is \"give a little\" or the verb \"compromise\"; «solución intermedia» is the noun \"a compromise\". Neither ever means «compromiso» in the sense of commitment.",
      ),
      fb(
        "What if we ___ the deadline to the end of the month?",
        "moved",
        "¿Y si [pasáramos] el plazo a fin de mes?",
        ["pushed", "extended", "move", "push"],
        "\"What if we moved...?\" uses the past to make the proposal sound more hypothetical and easier to accept; \"What if we move...?\" is also correct.",
      ),
      tr(
        "Ustedes piden 50 y nosotros ofrecemos 40. ¿Lo dejamos en 45?",
        "You're asking for 50 and we're offering 40. Shall we split the difference at 45?",
        [
          "You're asking for 50 and we're offering 40. Shall we split the difference and say 45?",
          "You are asking for 50 and we are offering 40. Shall we split the difference at 45?",
          "You're asking for 50 and we're offering 40. Why don't we split the difference at 45?",
          "You're asking for 50 and we're offering 40. How about we split the difference at 45?",
          "You're asking for 50, and we're offering 40. Shall we split the difference at 45?",
          "You're asking for 50 and we're offering 40. Shall we meet halfway at 45?",
          "You're asking for 50 and we're offering 40. Shall we settle on 45?",
        ],
        "\"Split the difference\" is used with numbers: each side gives up the same amount. \"Ask for\" takes \"for\".",
      ),
      wo(
        "I could agree to that, provided that we review it in June.",
        "Podría aceptarlo, siempre que lo revisemos en junio.",
        "\"Provided that\" makes the concession conditional. Note the present \"we review\" after it, where Spanish uses the subjunctive.",
      ),
      mc(
        "Which sentence correctly confirms an agreement?",
        [
          "So, just to confirm, we're agreed that the price stays the same.",
          "So, just to confirm, we are agree that the price stays the same.",
          "So, just to confirm, we agree in that the price stays the same.",
          "So, just to confirm, we're agreeing the price stays same.",
        ],
        0,
        "\"We're agreed\" is correct in this confirming use, and \"We agree\" is the everyday form. *We are agree is a calque of «estamos de acuerdo».",
      ),
      dt(
        "It's not ideal, but I can live with that.",
        "\"I can live with that\" means acceptable though not perfect. Listen for the linking in \"live with that\".",
      ),
      // --- Part 5: feedback and I-statements ---
      mc(
        "Which is a genuine I-statement?",
        [
          "I feel frustrated when the agenda changes the night before.",
          "I feel that you're disorganized.",
          "I feel like you don't respect my time.",
          "I feel you are always late.",
        ],
        0,
        "A real I-statement uses an emotion word plus the behavior. \"I feel that\" and \"I feel like\" introduce an opinion, so they are accusations with \"I\" in front.",
      ),
      tr(
        "Me sentí decepcionado cuando cancelaron la presentación sin avisar.",
        "I felt let down when the presentation was canceled without warning.",
        [
          "I felt let down when the presentation was cancelled without warning.",
          "I felt let down when they canceled the presentation without warning.",
          "I felt let down when they cancelled the presentation without warning.",
          "I felt disappointed when the presentation was canceled without warning.",
          "I felt disappointed when they canceled the presentation without warning.",
          "I felt let down when they canceled the presentation without any warning.",
          "I felt let down when the presentation was canceled without notice.",
        ],
        "\"Feel\" + emotion + \"when\" + behavior. \"Let down\" is a common emotion word for disappointment caused by someone.",
      ),
      fb(
        "In this morning's meeting, you ___ Paula twice while she was presenting.",
        "interrupted",
        "En la reunión de esta mañana, [interrumpiste] a Paula dos veces mientras presentaba.",
        ["cut off"],
        "Situation, behavior, impact: describe the behavior as a camera would record it, with a time and a number, not a label like \"You're rude\".",
      ),
      tr(
        "Me preguntaba si podríamos hablar de cómo se están repartiendo las tareas.",
        "I was wondering if we could talk about how the tasks are being divided.",
        [
          "I was wondering whether we could talk about how the tasks are being divided.",
          "I was wondering if we could talk about how the tasks are being shared out.",
          "I was wondering if we could talk about how tasks are being divided.",
          "I was wondering if we could talk about how the tasks are being split.",
          "I was wondering if we could talk about how the tasks are being allocated.",
          "I was wondering if we could talk about how the work is being divided.",
          "I was wondering if we could discuss how the tasks are being divided.",
        ],
        "The past continuous \"I was wondering if\" softens even more than \"I wonder\". The embedded question keeps statement order: \"how the tasks are being divided\".",
      ),
      // --- Combined and traps ---
      sp(
        "I hear what you're saying, and I can see why you'd be upset. Let's look at this together.",
        "Entiendo lo que dices, y entiendo que estés molesto. Veámoslo juntos.",
        "Slow, low and even; leave a short pause after \"upset\".",
        "Acknowledge, cushion with \"you'd\", then move to \"let's\": the three de-escalating moves in sequence.",
      ),
      tr(
        "Siento haber llegado tarde. Fue culpa mía; debería haber salido antes.",
        "I'm sorry I was late. That was my fault; I should have left earlier.",
        [
          "I'm sorry for being late. That was my fault; I should have left earlier.",
          "I'm sorry I was late. It was my fault; I should have left earlier.",
          "I'm sorry for being late. It was my fault; I should have left earlier.",
          "I'm sorry I was late. That was my fault. I should have left earlier.",
          "I'm sorry I was late. That's on me; I should have left earlier.",
          "Sorry I was late. That was my fault; I should have left earlier.",
          "I'm sorry I was late. That was my fault; I should've left earlier.",
        ],
        "\"I'm sorry I was late\" or \"I'm sorry for being late\", never *Sorry for to be late. Ownership comes without excuses.",
      ),
      tr(
        "¿Qué es lo que más te importa en este acuerdo?",
        "What matters most to you in this agreement?",
        [
          "What matters most to you about this agreement?",
          "What's most important to you in this agreement?",
          "What is most important to you in this agreement?",
          "What's most important to you about this agreement?",
          "What matters most to you in this deal?",
          "What do you care about most in this agreement?",
        ],
        "A question about interests rather than positions. \"Matter to someone\" is the natural verb for «importarle a alguien».",
      ),
      wo(
        "Help me understand why the budget matters so much to you.",
        "Ayúdame a entender por qué el presupuesto te importa tanto.",
        "\"Help me understand\" (bare infinitive after \"help\") is more collaborative than a bare \"Why?\", which can sound like a challenge. The embedded question keeps statement order.",
      ),
      sp(
        "That's a fair point, and what I'd also ask us to consider is the cost of waiting.",
        "Es un argumento razonable, y lo que también pediría que tengamos en cuenta es el costo de esperar.",
        "Stress \"fair\" and \"also\"; don't pause before \"and\".",
        "\"And\" keeps the other person's point alive while you add yours; \"but\" would cancel it.",
      ),
      kw(
        "MEET",
        "Let's each give up the same amount so we can agree.",
        "Let's ___.",
        "meet halfway",
        ["meet each other halfway", "meet in the middle"],
        "\"Meet halfway\" means each side moves the same distance towards the other.",
      ),
      dt(
        "I feel undervalued when my work isn't mentioned in the report.",
        "An emotion word after \"I feel\", then \"when\" + the behavior. Listen for the contraction \"isn't\".",
      ),
      mc(
        "Your manager says: \"You're right, the timeline was unrealistic.\" What has she done?",
        [
          "Conceded the point: she accepts the timeline was unrealistic",
          "Only acknowledged your feelings without agreeing",
          "Proposed a compromise on the timeline",
          "Apologized for the timeline on behalf of the team",
        ],
        0,
        "\"You're right\" is a real concession in English, like «tienes razón». Use it only when you mean it, because it can be quoted back as an admission.",
      ),
    ],
  ),
  // ---------------------------------------------------------------------
  // Drill 2. Mediation, complaints, sorry vs excuse me, past modals, modal nuance + whole-unit mix
  // ---------------------------------------------------------------------
  drill(
    "en-c2-conflict-unit-drill-2",
    "Drill: Mediation, Complaints, Sorry and Past Modals",
    "Mediate neutrally, write and answer formal complaints, choose between sorry, excuse me and pardon, and use past modals and modal nuances to criticize, regret and reassure precisely.",
    "Recap: neutral words, formal words, exact modals",
    [
      "Mediators set ground rules, reframe loaded language into needs (\"So what I'm hearing is...\"), summarize both sides evenly and ask open questions. Formal complaints state facts neutrally with evidence and request an outcome (\"I request that the decision be reviewed\"); a «reclamación» is a \"complaint\" or a \"claim\", and «denunciar» is \"report\". \"Excuse me\" comes before you disturb someone, \"sorry\" after.",
      "\"Should have\" criticizes, \"could have\" reproaches, \"must have\" deduces (never obligation), \"needn't have\" means it was done but unnecessary, and \"I wish\" + past perfect regrets. Past obligation is \"had to\"; \"was supposed to\" marks a broken arrangement, \"be bound to\" a certainty, and «puede que» is \"may\", not *can.",
    ],
    [
      ["If I've understood correctly, your main concern is the overtime.", "Si lo he entendido bien, tu principal preocupación son las horas extra."],
      ["I would ask that the charge be refunded in full.", "Solicito que se reembolse el cargo en su totalidad."],
      ["Excuse me, is anyone sitting here?", "Disculpe, ¿hay alguien sentado aquí?"],
      ["You were supposed to send the invoice on Friday.", "Se suponía que ibas a mandar la factura el viernes."],
    ],
    [
      // --- Part 6: the mediator ---
      tr(
        "Mi papel no es decidir quién tiene razón, sino ayudarlos a encontrar una salida.",
        "My role isn't to decide who's right, but to help you find a way forward.",
        [
          "My role is not to decide who is right, but to help you find a way forward.",
          "My role isn't to decide who is right, but to help you find a way forward.",
          "My role isn't to decide who's right but to help you find a way forward.",
          "My job isn't to decide who's right, but to help you find a way forward.",
          "My role isn't to decide who's right, but to help you find a solution.",
          "My role isn't to decide who's right, but to help you find a way out.",
          "My role isn't to decide who's right; it's to help you find a way forward.",
        ],
        "\"Not to... but to...\" frames the mediator's neutrality. «Tener razón» is \"be right\" (\"who's right\").",
      ),
      fb(
        "Let's agree ___ a few ground rules before we start.",
        "on",
        "Pongámonos de acuerdo [en] unas normas básicas antes de empezar.",
        [],
        "You \"agree on\" rules or a plan (British English also \"agree the rules\"). You \"agree with\" a person and \"agree to\" a proposal.",
      ),
      mc(
        "One party says: \"He's completely unreliable.\" Which is the best mediator reframe?",
        [
          "So it's important to you that commitments are kept. Is that right?",
          "Yes, he does seem unreliable.",
          "Don't you think you're overreacting?",
          "Let's not talk about that.",
        ],
        0,
        "Reframing keeps the need and removes the blame, then checks. Repeating the label takes sides, a leading question sounds like cross-examination, and ignoring it leaves the speaker unheard.",
      ),
      tr(
        "Parece que los dos quieren que el cliente quede satisfecho.",
        "It sounds as though you both want the client to be satisfied.",
        [
          "It sounds as though you both want the client to be happy.",
          "It sounds like you both want the client to be satisfied.",
          "It sounds like you both want the client to be happy.",
          "It seems that you both want the client to be satisfied.",
          "It seems you both want the client to be happy.",
          "It sounds as if you both want the client to be satisfied.",
          "You both seem to want the client to be satisfied.",
        ],
        "Highlighting shared ground is a key mediator move. Note \"want\" + object + to-infinitive for «querer que» + subjunctive.",
      ),
      mc(
        "Which is an open question a mediator would ask?",
        [
          "What would a good outcome look like for you?",
          "Wouldn't it be easier if you just apologized?",
          "Did you send the email or not?",
          "Don't you agree that this is a small problem?",
        ],
        0,
        "Open questions cannot be answered yes or no and invite people to explain their needs. Closed and leading questions suggest the mediator has already decided.",
      ),
      wo(
        "What would need to happen for you to feel comfortable with that?",
        "¿Qué tendría que pasar para que te sintieras cómodo con eso?",
        "\"For you to feel\" is the English equivalent of «para que te sintieras»: \"for\" + object + to-infinitive.",
      ),
      // --- Part 7: complaints and grievances ---
      mc(
        "«Presenté una reclamación al seguro por los daños del carro.» Which is correct?",
        [
          "I filed an insurance claim for the damage to the car.",
          "I filed an insurance reclamation for the damage to the car.",
          "I denounced the insurance for the damage to the car.",
          "I made a reclamation to the insurance for the car damages.",
        ],
        0,
        "A demand for money from an insurer is a \"claim\". \"Reclamation\" means recovering land or materials, and \"denounce\" means condemn publicly.",
      ),
      tr(
        "Denunciamos el robo de las computadoras a la policía.",
        "We reported the theft of the computers to the police.",
        [
          "We reported the computer theft to the police.",
          "We reported the theft of the computers to the cops.",
          "We reported to the police that the computers had been stolen.",
          "We reported the stolen computers to the police.",
          "We reported the theft of the laptops to the police.",
        ],
        "«Denunciar» a crime is \"report\" it. *We denounced the theft would mean you condemned it publicly, in a speech or the press.",
      ),
      fb(
        "After months of unpaid overtime, she decided to ___ a formal grievance with HR.",
        "raise",
        "Tras meses de horas extra sin pagar, decidió [presentar] una queja formal ante Recursos Humanos.",
        ["file", "lodge"],
        "An employee \"raises\" (or \"files\") a grievance under the grievance procedure; a customer \"makes\", \"files\" or \"lodges\" a complaint.",
      ),
      tr(
        "No se me informó del cambio de horario hasta la noche anterior.",
        "I was not informed of the schedule change until the night before.",
        [
          "I wasn't informed of the schedule change until the night before.",
          "I was not informed of the change of schedule until the night before.",
          "I was not informed of the change in schedule until the night before.",
          "I was not informed about the schedule change until the night before.",
          "I was not told about the schedule change until the night before.",
          "I wasn't told about the schedule change until the night before.",
          "I was not informed of the change to the schedule until the night before.",
        ],
        "Neutral facts with a precise time carry more weight than emotive words. \"Not... until\" marks how late something happened.",
      ),
      fb(
        "I request that the decision ___ reviewed by an independent panel.",
        "be",
        "Solicito que la decisión [sea] revisada por un comité independiente.",
        [],
        "After verbs of requesting, formal English uses the subjunctive: the base form \"be\" for every person. *I request that the decision is reviewed is common but less formal; *will be is wrong.",
      ),
      tr(
        "Le agradecería que investigara este asunto en un plazo de diez días hábiles.",
        "I would be grateful if you could look into this matter within ten working days.",
        [
          "I'd be grateful if you could look into this matter within ten working days.",
          "I would be grateful if you could look into this matter within ten business days.",
          "I would be grateful if you could investigate this matter within ten working days.",
          "I would be grateful if you could investigate this matter within ten business days.",
          "I would appreciate it if you could look into this matter within ten working days.",
          "I would be grateful if you could look into this within ten working days.",
        ],
        "\"I would be grateful if you could...\" is the standard polite request in formal letters; \"look into\" means investigate. US English also says \"business days\".",
      ),
      lc(
        "Following our investigation, your complaint has been partially upheld.",
        "What does this mean?",
        [
          "The organization agrees the complaint was partly justified",
          "The complaint has been rejected completely",
          "The complaint is still being investigated",
          "The complaint has been passed to the police",
        ],
        0,
        "A complaint is \"upheld\" (justified), \"partially upheld\" or \"not upheld\": «se estima parcialmente la reclamación».",
      ),
      wo(
        "Please find attached a copy of the original receipt.",
        "Adjunto una copia del recibo original.",
        "\"Please find attached\" is the formal formula for referring to evidence; the object comes after \"attached\".",
      ),
      // --- Contrast: sorry, excuse me, pardon ---
      mc(
        "You need to get past someone in a crowded bus aisle. What do you say?",
        [
          "Excuse me, can I just get past?",
          "Sorry me, permission.",
          "Permission, please.",
          "Pardon, I pass.",
        ],
        0,
        "\"Excuse me\" comes before you disturb someone. «Con permiso» has no literal equivalent: *Permission is not used this way.",
      ),
      mc(
        "You didn't hear what a colleague said in a meeting. Which reply is polite in American English?",
        [
          "Sorry, I didn't catch that. Could you say it again?",
          "What?",
          "Repeat.",
          "I beg your pardon?! (with a sharp rise)",
        ],
        0,
        "\"Sorry, I didn't catch that\" is polite and neutral. A bare \"What?\" can sound rude, and \"I beg your pardon?\" with a sharp rise means you are offended by what was said.",
      ),
      mt(
        "Match each situation with the most natural phrase.",
        [
          ["You step on someone's foot", "Oh, sorry!"],
          ["You want to ask a stranger the way", "Excuse me"],
          ["A friend tells you her father died", "I'm so sorry for your loss."],
          ["You sent a trivial message to the wrong friend", "My bad."],
          ["Your reply to a client email is two days late", "Apologies for the delay."],
        ],
        "\"Sorry\" after an accident, \"Excuse me\" before disturbing, \"I'm sorry\" for sympathy, \"My bad\" only for trivial informal mistakes, and \"Apologies for the delay\" as a semi-formal written formula.",
      ),
      tr(
        "Perdona que te moleste, pero ¿tienes un minuto para revisar esto?",
        "Sorry to bother you, but do you have a minute to look over this?",
        [
          "Sorry to bother you, but do you have a minute to look at this?",
          "Sorry to bother you, but have you got a minute to look at this?",
          "Sorry to bother you, but do you have a minute to go over this?",
          "Sorry to bother you, but do you have a minute to check this?",
          "Sorry to bother you, but do you have a minute to review this?",
          "Sorry to bother you, but do you have a moment to look at this?",
          "Sorry to disturb you, but do you have a minute to look at this?",
        ],
        "A polite opener that softens a request without apologizing for anything serious. Skipping it can sound abrupt in English, even when it feels normal in Spanish.",
      ),
      // --- Spiral: past modals of criticism and regret ---
      mc(
        "You want to tell a colleague «Tendrías que habérmelo dicho». Which sentence says this?",
        [
          "You should have told me.",
          "You must have told me.",
          "You should of told me.",
          "You must told me.",
        ],
        0,
        "\"Should have\" criticizes something that didn't happen. \"You must have told me\" is a deduction («seguro que me lo dijiste»), the opposite message, and *should of is a spelling error from the sound /ˈʃʊdəv/.",
      ),
      tr(
        "¡Por lo menos podrías haber llamado!",
        "You could at least have called!",
        [
          "You could have at least called!",
          "At least you could have called!",
          "You might at least have called!",
          "You could at least have phoned!",
          "You could have called at least!",
        ],
        "\"Could have\" (or the more British \"might have\") expresses irritation that someone failed to do something easy: «podrías haber...».",
      ),
      fb(
        "I ___ have worried about the presentation: everyone loved it.",
        "needn't",
        "[No hacía falta que me hubiera] preocupado por la presentación: a todos les encantó.",
        ["need not"],
        "\"Needn't have\" + participle means you did worry, but it turned out unnecessary: «me preocupé para nada». \"Didn't need to worry\" usually implies you didn't worry at all.",
      ),
      tr(
        "Ojalá no hubiera enviado ese correo.",
        "I wish I hadn't sent that email.",
        [
          "I wish I had not sent that email.",
          "If only I hadn't sent that email.",
          "If only I had not sent that email.",
          "I wish I hadn't sent that e-mail.",
          "I wish I hadn't sent that message.",
        ],
        "Regret about the past: \"I wish\" + past perfect. *I wish I wouldn't have sent is a common error.",
      ),
      // --- Modal nuance ---
      mc(
        "«Ayer tuve que cancelar el vuelo.» Which is correct?",
        [
          "Yesterday I had to cancel the flight.",
          "Yesterday I must cancel the flight.",
          "Yesterday I must have canceled the flight.",
          "Yesterday I needn't cancel the flight.",
        ],
        0,
        "\"Must\" has no past form for obligation: «tuve que» is \"had to\". \"I must have canceled it\" is a deduction («seguro que lo cancelé»).",
      ),
      tr(
        "Se suponía que el informe estaba listo el lunes.",
        "The report was supposed to be ready on Monday.",
        [
          "The report was meant to be ready on Monday.",
          "The report was supposed to be ready by Monday.",
          "The report was meant to be ready by Monday.",
          "The report was supposed to be finished on Monday.",
          "The report was supposed to be finished by Monday.",
          "The report was supposed to be done by Monday.",
        ],
        "\"Was supposed to\" expresses an arrangement that was not kept: the natural way to complain about a broken agreement. \"Was meant to\" is a slightly more British equivalent.",
      ),
      fb(
        "If you keep missing deadlines, the client is ___ to notice.",
        "bound",
        "Si sigues sin cumplir los plazos, el cliente [se va a dar cuenta seguro].",
        [],
        "\"Be bound to\" expresses certainty: «seguro que...», «sí o sí». *The client is sure that he notices changes the meaning to the client's own belief.",
      ),
      dt(
        "The meeting's been canceled, so we might as well finish the report.",
        "\"Might as well\" means there's no better option: «ya puestos». Listen for the contraction \"meeting's been\".",
      ),
      tr(
        "Por fin pude hablar con el gerente después de tres intentos.",
        "I finally managed to speak to the manager after three attempts.",
        [
          "I finally managed to speak with the manager after three attempts.",
          "I finally managed to talk to the manager after three attempts.",
          "I finally managed to talk with the manager after three attempts.",
          "I was finally able to speak to the manager after three attempts.",
          "I was finally able to talk to the manager after three attempts.",
          "Finally I managed to speak to the manager after three attempts.",
          "I finally got to speak to the manager after three attempts.",
        ],
        "Ability on one past occasion is \"managed to\" or \"was able to\". *I finally could speak to him sounds wrong because \"could\" is for general past ability.",
      ),
      lc(
        "I could do with a break after that meeting.",
        "What does the speaker mean?",
        [
          "They would like a break; it would be good for them",
          "They were able to take a break during the meeting",
          "They can't take a break today",
          "They took a break and regret it",
        ],
        0,
        "\"Could do with\" + noun means «no me vendría mal»: a soft way to say you need something.",
      ),
      // --- Whole-unit mix and traps ---
      kw(
        "SUPPOSED",
        "We had agreed that you would call me last night, but you didn't.",
        "You ___ me last night.",
        "were supposed to call",
        ["were supposed to phone", "were supposed to ring"],
        "\"Be supposed to\" captures both the arrangement and the fact that it was broken.",
      ),
      tr(
        "Entiendo que estés molesto, pero no hacía falta que le gritaras al mesero.",
        "I can see why you'd be upset, but you didn't need to shout at the waiter.",
        [
          "I can see why you would be upset, but you didn't need to shout at the waiter.",
          "I understand why you'd be upset, but you didn't need to shout at the waiter.",
          "I can see why you're upset, but you didn't need to shout at the waiter.",
          "I understand that you're upset, but you didn't need to shout at the waiter.",
          "I can see why you'd be upset, but you didn't have to shout at the waiter.",
          "I can see why you'd be upset, but you didn't need to yell at the waiter.",
          "I can see why you'd be upset, but there was no need to shout at the waiter.",
        ],
        "Acknowledge without conceding, then a reproach with \"didn't need to\". Note \"shout at\" (aggressively) rather than \"shout to\" (so someone can hear).",
      ),
      tr(
        "Hay algo de verdad en eso, pero en lo que no estoy de acuerdo es en que fuera culpa de Laura.",
        "There's some truth in that, but where I'd disagree is that it was Laura's fault.",
        [
          "There is some truth in that, but where I would disagree is that it was Laura's fault.",
          "There's some truth in that, but where I disagree is that it was Laura's fault.",
          "There's some truth in that, but what I disagree with is that it was Laura's fault.",
          "There's some truth in that, but I don't agree that it was Laura's fault.",
          "There's some truth in that, but I'd disagree that it was Laura's fault.",
        ],
        "Partial agreement: grant exactly what you accept, then name exactly what you don't. \"Where I'd disagree is...\" is softer than \"You're wrong\".",
      ),
      sp(
        "So what I'm hearing is that you felt left out of the decision. Have I got that right?",
        "Entonces, lo que oigo es que te sentiste excluido de la decisión. ¿Lo he entendido bien?",
        "Neutral, even tone; rise gently on \"right\".",
        "Reframe the complaint as a need, then check: the mediator never takes sides.",
      ),
      mc(
        "Which sentence uses the modal correctly?",
        [
          "It may rain during the ceremony, so bring an umbrella.",
          "It can rain during the ceremony, so bring an umbrella.",
          "It must rain during the ceremony, so bring an umbrella.",
          "It should have rained during the ceremony, so bring an umbrella.",
        ],
        0,
        "«Puede que llueva» is a possibility in one situation: \"may\", \"might\" or \"could\". \"Can rain\" is a general possibility and \"must\" is certainty or obligation.",
      ),
      sp(
        "We sincerely apologize for the error, and we have put measures in place to prevent it from happening again.",
        "Lamentamos sinceramente el error y hemos tomado medidas para evitar que vuelva a ocurrir.",
        "Stress \"sincerely\" and \"prevent\"; keep \"to\" and \"it\" weak.",
        "A formal apology with ownership and prevention, not just the formulaic \"We apologize for the inconvenience\".",
      ),
      dt(
        "You needn't have apologized; it wasn't your fault at all.",
        "\"Needn't have\" + participle is generous here: «no hacía falta que te disculparas». Listen for \"needn't have\" /ˈniːdənt əv/.",
      ),
    ],
  ),
];
