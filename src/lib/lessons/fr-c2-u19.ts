// Synced from cheneygross-afk/lengo:src/lib/lessons/fr-c2-u19.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// French C2, Unit 19: Rhetorical Questions.

export const FR_C2_U19: Lesson[] = [
  {
    slug: "c2-rhetorical-questions-1",
    level: "FR-C2",
    number: 1,
    title: "Questions Rhétoriques et Structures d'Emphase, Part 1 of 7",
    summary: "What makes a question rhetorical, the reversal of polarity (a negative question asserts, a positive one denies), and the stock formulas: faut-il rappeler que, qui pourrait nier que, à quoi bon, comment ne pas, que dire de.",
    duration: "19 min",
    sections: [
      {
        heading: "A question that expects no answer",
        body: [
          "A rhetorical question (\"une question rhétorique\" or \"question oratoire\") has the form of a question and the force of a statement. The speaker knows the answer, and so does the audience; the question form makes them supply it themselves, which is far more persuasive than being told.",
        ],
        examples: [
          { es: "N'est-ce pas évident ?", en: "Isn't it obvious? (= it is obvious)" },
          { es: "Avons-nous vraiment le choix ?", en: "Do we really have a choice? (= we don't)" },
          { es: "Que diable allait-il faire dans cette galère ?", en: "What the devil was he doing in that galley? (the old father's famous line in the comedy The Tricks of Scapin: he should never have got involved)" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In a speech, the mayor says \"Qui pourrait reprocher à ces familles de vouloir rester ?\" What does she mean?",
            options: ["Nobody can blame these families for wanting to stay.", "She wants to know who blames the families.", "Someone has blamed the families for staying.", "The families blame someone for making them stay."],
            correctIndex: 0,
            explanation: "A positive rhetorical question asserts the negative: \"qui pourrait...\" = nobody could.",
          },
        ],
      },
      {
        heading: "The reversal of polarity",
        body: [
          "Its key mechanism is the reversal of polarity. A negative question asserts the positive: \"N'est-ce pas évident ?\" = it is obvious. \"Ne l'avais-je pas annoncé ?\" = I had predicted it. A positive question asserts the negative: \"Qui pourrait le nier ?\" = nobody could. \"Est-ce ma faute si le train était en retard ?\" = it's not my fault. When you translate or paraphrase, you must turn the polarity round; reading \"qui pourrait le nier ?\" as a real question is a misreading.",
        ],
        examples: [
          { es: "Qui pourrait sérieusement le nier ?", en: "Who could seriously deny it? (= nobody can)" },
          { es: "Ne l'avais-je pas annoncé dès le mois de mars ?", en: "Hadn't I predicted it as early as March? (= I had)" },
          { es: "Est-ce ma faute si le train avait deux heures de retard ?", en: "Is it my fault if the train was two hours late? (= it isn't)" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the statement into a rhetorical question with a negative.",
            source: "Cette réforme est injuste.",
            answer: "Cette réforme n'est-elle pas injuste ?",
            altAnswers: ["N'est-ce pas une réforme injuste ?", "Est-ce que cette réforme n'est pas injuste ?"],
            explanation: "A negative question asserts the positive: \"cette réforme n'est-elle pas injuste ?\" = it is unjust. Note the complex inversion with a noun subject: \"la réforme n'est-elle pas\".",
          },
        ],
      },
      {
        heading: "How you hear it",
        body: [
          "In speech, intonation marks it: a real question rises at the end, a rhetorical one often falls, or rises with exaggerated emphasis and a pause that leaves no room for a reply. In writing, context and the stock formulas below do the work.",
        ],
        examples: [
          { es: "Vous trouvez ça normal ?", en: "Do you think that's normal? (= it isn't)" },
          { es: "Et alors ? Qu'est-ce que ça change ?", en: "So what? What difference does it make? (= none)" },
          { es: "Tu crois vraiment que je vais céder ?", en: "Do you really think I'll give in? (= I won't)" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A speaker asks a question whose voice falls at the end, then pauses without letting anyone reply. What is it most likely to be?",
            options: ["A rhetorical question", "A real request for information", "A yes/no question to the audience", "A polite offer"],
            correctIndex: 0,
            explanation: "A real question usually rises at the end and leaves room for an answer; a rhetorical one often falls, or is over-stressed, and the pause leaves no room for a reply.",
          },
        ],
      },
      {
        heading: "Faut-il rappeler que...?",
        body: [
          "\"Faut-il rappeler que...?\" (need I remind you that...?) and \"est-il besoin de dire que...?\" introduce a fact as self-evident while stating it anyway. They take the indicative, because the fact is presented as true: \"Faut-il rappeler que la France a connu trois cohabitations ?\". This is the rhetorical cousin of the prétérition you'll meet in Part 4.",
        ],
        examples: [
          { es: "Faut-il rappeler que cette ligne de bus est la seule qui desserve le quartier ?", en: "Need I remind you that this bus line is the only one serving the district?" },
          { es: "Est-il besoin de dire que personne n'a été consulté ?", en: "Need I say that nobody was consulted?" },
          { es: "Faut-il rappeler que le stade a coûté deux fois plus que prévu ?", en: "Need I remind you that the stadium cost twice as much as planned?" },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            answer: "Faut-il rappeler que",
            altAnswers: ["Est-il besoin de rappeler que"],
            explanation: "\"Faut-il rappeler que\" presents a fact as self-evident while stating it anyway; it takes the indicative (\"est fermée\") because the fact is true.",
            en: "[Need I remind you that] the library has been closed for a year?",
            sentence: "___ la bibliothèque est fermée depuis un an ?",
          },
        ],
      },
      {
        heading: "Qui pourrait nier que...?",
        body: [
          "\"Qui pourrait nier que...?\", \"qui contesterait que...?\", \"qui ignore que...?\" all mean nobody can deny / everybody knows. After \"nier\" and \"contester\", careful style puts the subjunctive (\"qui pourrait nier que la situation soit grave ?\"), but the indicative is common and more assertive in a speech, because the speaker presents the fact as real (\"qui pourrait nier que la situation est grave ?\"). Both are correct; the indicative hits harder.",
        ],
        examples: [
          { es: "Qui pourrait nier que la situation est grave ?", en: "Who could deny that the situation is serious?" },
          { es: "Qui contesterait que l'école doive rester gratuite ?", en: "Who would dispute that school must stay free?" },
          { es: "Qui ignore aujourd'hui que le tabac tue ?", en: "Who doesn't know today that tobacco kills?" },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Qui contesterait que ces travaux soient urgents ?",
            question: "What is the speaker saying?",
            options: ["Nobody would dispute that this work is urgent.", "Some people dispute that this work is urgent.", "The speaker wonders who disputes the work.", "The speaker doubts that the work is urgent."],
            correctIndex: 0,
            explanation: "\"Qui contesterait que...?\" means nobody would dispute it; the subjunctive \"soient\" is the careful-style choice after \"contester\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it to the more assertive indicative.",
            source: "Qui pourrait nier que cette loi soit injuste ?",
            answer: "Qui pourrait nier que cette loi est injuste ?",
            explanation: "After \"nier\" careful style uses the subjunctive, but in a speech the indicative presents the fact as real and hits harder. Both are correct.",
          },
        ],
      },
      {
        heading: "Qui n'a jamais...?",
        body: [
          "\"Qui ne connaît...?\", \"qui n'a jamais...?\" (who hasn't ever...?) use a negative to claim universality: \"Qui n'a jamais attendu une heure au téléphone pour joindre un service public ?\" = everybody has. A good way to create complicity with an audience.",
        ],
        examples: [
          { es: "Qui n'a jamais attendu une heure au téléphone pour joindre un service public ?", en: "Who hasn't waited an hour on the phone to reach a public service?" },
          { es: "Qui ne connaît pas cette chanson ?", en: "Who doesn't know this song? (= everybody does)" },
          { es: "Qui n'a jamais pesté contre un répondeur ?", en: "Who hasn't ever cursed an answering machine?" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Who hasn't ever lost their keys?",
            answer: "Qui n'a jamais perdu ses clés ?",
            altAnswers: ["Qui n'a jamais égaré ses clés ?"],
            explanation: "\"Qui n'a jamais...?\" uses a negative to claim universality: everybody has. \"Qui\" takes a singular verb and the possessive \"ses\".",
          },
        ],
      },
      {
        heading: "À quoi bon, comment ne pas, pourquoi",
        body: [
          "The interrogative infinitive is a French speciality with no exact English equivalent. \"À quoi bon\" + infinitive (what's the point of...?) asserts uselessness: \"À quoi bon insister ?\" = there's no point insisting. \"Comment ne pas\" + infinitive asserts that the reaction is inevitable: \"Comment ne pas s'indigner ?\" = one can only be outraged. \"Pourquoi\" + infinitive asserts there's no reason: \"Pourquoi s'en étonner ?\" = it's no surprise.",
        ],
        examples: [
          { es: "À quoi bon voter si rien ne change ?", en: "What's the point of voting if nothing changes?" },
          { es: "Comment ne pas s'indigner devant de tels chiffres ?", en: "How can one not be outraged at such figures?" },
          { es: "Pourquoi s'en étonner ? La décision était prévisible.", en: "Why be surprised? The decision was foreseeable." },
          { es: "Comment ne pas penser aux familles qui attendent depuis des mois ?", en: "How could we not think of the families who have been waiting for months?" },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "À quoi bon insister ?",
            question: "What does it mean?",
            options: ["There's no point insisting.", "What is good about insisting?", "Who will insist?", "Why don't you insist?"],
            correctIndex: 0,
            explanation: "\"À quoi bon\" + infinitive = what's the point of, i.e. it's useless.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (use an infinitive question).",
            source: "What's the point of complaining if nobody listens?",
            answer: "À quoi bon se plaindre si personne n'écoute ?",
            altAnswers: ["À quoi bon se plaindre si personne ne nous écoute ?", "À quoi ça sert de se plaindre si personne n'écoute ?"],
            explanation: "\"À quoi bon\" + infinitive asserts uselessness. \"Personne\" takes \"ne\" without \"pas\".",
          },
        ],
      },
      {
        heading: "Que dire de...? Que faire?",
        body: [
          "\"Que dire de...?\" (what can one say about...?) moves to a new example while suggesting it is even worse, or beyond words: \"Et que dire de la gestion de la crise ?\" It is a favourite transition in editorials. \"Que faire ?\" (what is to be done?) opens a deliberation, as in La Fontaine's line \"Que faire en un gîte, à moins que l'on ne songe ?\" (what else is there to do in a burrow but dream?).",
        ],
        examples: [
          { es: "Et que dire de l'attitude de la direction pendant la grève ?", en: "And what can one say about management's attitude during the strike?" },
          { es: "Que faire en un gîte, à moins que l'on ne songe ?", en: "What else is there to do in a burrow but dream? (La Fontaine)" },
          { es: "Que faire face à une telle injustice ?", en: "What is to be done in the face of such injustice?" },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "And [what can one say about the] price of the tickets?",
            sentence: "Et ___ prix des billets ?",
            answer: "que dire du",
            explanation: "\"Que dire de\" moves to a new, even worse example; \"de\" + \"le prix\" contracts to \"du\".",
          },
        ],
      },
      {
        heading: "No subject, so universal",
        body: [
          "These infinitive questions have no subject, which makes them sound universal: not what can I do, but what can anyone do. That impersonality is their persuasive force.",
        ],
        examples: [
          { es: "Comment ne pas sourire ?", en: "How can one not smile?" },
          { es: "Pourquoi s'inquiéter ?", en: "Why worry?" },
          { es: "À quoi bon mentir ?", en: "What's the point of lying?" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "À quoi bon de continuer ?",
            answer: "À quoi bon continuer ?",
            explanation: "\"À quoi bon\" is followed directly by the infinitive, with no \"de\": \"à quoi bon continuer ?\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Make it a rhetorical question with qui pourrait.",
        source: "Personne ne peut le contester.",
        answer: "Qui pourrait le contester ?",
        explanation: "A positive rhetorical question asserts the negative: \"qui pourrait le contester ?\" = nobody can.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Why wait? Everything has been decided.",
        answer: "Pourquoi attendre ? Tout est décidé.",
        altAnswers: ["Pourquoi attendre ? Tout a été décidé.", "Pourquoi attendre ? Tout est déjà décidé."],
        explanation: "\"Pourquoi\" + infinitive asserts there is no reason: no point waiting.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (formal inversion).",
        source: "Hadn't I predicted it?",
        answer: "Ne l'avais-je pas annoncé ?",
        altAnswers: ["Ne l'avais-je pas prédit ?", "Ne l'avais-je pas prévu ?"],
        explanation: "Negative rhetorical question = I had. Inversion with a pronoun object: \"ne l'avais-je pas\".",
      },
      {
        type: "multiple-choice",
        question: "What does \"Avons-nous vraiment le choix ?\" assert?",
        options: ["We have no choice.", "We have many choices.", "We need to vote on the choice.", "We don't know whether we have a choice."],
        correctIndex: 0,
        explanation: "A positive rhetorical question asserts the negative.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Is it my fault if it rained all week?",
        answer: "Est-ce ma faute s'il a plu toute la semaine ?",
        altAnswers: ["Est-ce de ma faute s'il a plu toute la semaine ?", "C'est ma faute s'il a plu toute la semaine ?"],
        explanation: "A positive rhetorical question asserts the negative: it isn't my fault. \"Si il\" elides to \"s'il\".",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Who would dispute that this bridge must be repaired?",
        words: ["Qui", "contesterait", "que ce pont", "doive être", "réparé ?"],
        translation: "Who would dispute that this bridge must be repaired?",
        explanation: "\"Qui contesterait que\" + subjunctive (\"doive\"): nobody would dispute it.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "How could we not think of the volunteers?",
        answer: "Comment ne pas penser aux bénévoles ?",
        altAnswers: ["Comment ne pas penser aux volontaires ?"],
        explanation: "\"Comment ne pas\" + infinitive asserts that the reaction is inevitable; \"ne pas\" stays together before the infinitive.",
      },
      {
        type: "dictation",
        audio: "Faut-il rappeler que le musée est gratuit le dimanche ?",
        explanation: "\"Faut-il rappeler que\" + indicative states a fact as self-evident.",
      },
      {
        type: "speak",
        text: "Qui n'a jamais rêvé de partir loin de tout ?",
        prompt: "Say it in French: Who hasn't ever dreamed of getting away from it all?",
        tip: "Let your voice fall at the end and pause, as if waiting for nods.",
        explanation: "\"Qui n'a jamais...?\" claims that everyone has, creating complicity with the audience.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "[How can one not admire] such courage?",
        sentence: "___ un tel courage ?",
        answer: "Comment ne pas admirer",
        altAnswers: ["Comment ne pas être indigné", "Comment ne pas être scandalisé"],
        explanation: "\"Comment ne pas\" + infinitive: one can only admire it.",
      },
      {
        type: "speak",
        text: "À quoi bon tant de discours si rien ne bouge ?",
        tip: "Stress \"indigner\" and let the voice fall at the end: it isn't a real question.",
        explanation: "\"À quoi bon\" can also take a noun: \"à quoi bon tant de discours ?\".",
        prompt: "Say it in French: What's the point of so many speeches if nothing moves?",
      },
    ],
  },
  {
    slug: "c2-real-or-rhetorical-word-web",
    level: "FR-C2",
    number: 2,
    title: "Word Web: Vraie Question ou Question Rhétorique ?",
    summary: "Sort questions by what they really seek (information, or an effect: asserting, denying, reproaching, expressing outrage) using form, context and intonation.",
    duration: "17 min",
    sections: [
      {
        heading: "Real questions and disguised requests",
        body: [
          "Between the true question and the purely rhetorical one lies a whole family. \"Une vraie question\" (or \"question d'information\") seeks an unknown answer: \"À quelle heure part le train ?\". \"Une question de politesse\" disguises a request: \"Pourriez-vous fermer la fenêtre ?\" expects an action, not a yes. \"Une question d'examen\" or \"question pédagogique\" is asked by someone who knows the answer, to test you: \"En quelle année Zola publie-t-il J'accuse ?\".",
        ],
        examples: [
          { es: "À quelle heure part le dernier train pour Lille ?", en: "What time does the last train for Lille leave? (information)" },
          { es: "Pourriez-vous baisser un peu le son, s'il vous plaît ?", en: "Could you turn the volume down a little, please? (a request)" },
          { es: "En quelle année Zola publie-t-il J'accuse ?", en: "In what year does Zola publish J'accuse? (a test question)" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the order into a polite request with pourriez-vous.",
            source: "Fermez la fenêtre.",
            answer: "Pourriez-vous fermer la fenêtre ?",
            altAnswers: ["Pourriez-vous fermer la fenêtre, s'il vous plaît ?"],
            explanation: "\"Pourriez-vous\" + infinitive is a question in form and a request in function: it expects an action, not a yes.",
          },
        ],
      },
      {
        heading: "Questions that seek an effect",
        body: [
          "Then come the questions that seek an effect: \"la question rhétorique\" proper (assert or deny), \"la question de reproche\" (\"Tu ne pouvais pas prévenir ?\"), \"la question d'indignation\" (\"Comment ose-t-il ?\"), \"la question de surprise\" (\"Tu es sérieux ?\"), and \"la question délibérative\", which a speaker asks himself aloud (\"Que faire ?\").",
        ],
        examples: [
          { es: "Comment ose-t-il se présenter ici après ce qu'il a fait ?", en: "How dare he show up here after what he did? (outrage)" },
          { es: "Que faire, dès lors ? Attendre, ou agir seuls ?", en: "What is to be done, then? Wait, or act alone? (deliberation)" },
          { es: "Tu es sérieux ?", en: "Are you serious? (surprise)" },
        ],
        checkpoint: [
          {
            type: "matching",
            instructions: "Match each question with what it really does.",
            pairs: [
              { left: "À quelle heure part le train ?", right: "asks for information" },
              { left: "Pourriez-vous fermer la porte ?", right: "makes a polite request" },
              { left: "Comment ose-t-il ?", right: "expresses outrage" },
              { left: "Qui pourrait le nier ?", right: "asserts that nobody can deny it" },
              { left: "Que faire ?", right: "deliberates aloud" },
            ],
            explanation: "The grammatical form is the same; the function depends on the words, the context and the voice.",
          },
        ],
      },
      {
        heading: "Same words, another family",
        body: [
          "The categories overlap, and the same words can change family with context: \"Tu as vu l'heure ?\" is a real question in the street and a reproach at 3 a.m. to a teenager coming home.",
        ],
        examples: [
          { es: "Tu as vu l'heure ?", en: "Have you seen the time? (a reproach at 3 a.m.)" },
          { es: "Tu as faim ?", en: "Are you hungry? (a real question)" },
          { es: "Tu as vu dans quel état est ta chambre ?", en: "Have you seen the state of your room? (a reproach)" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You walk into the office at 10.30; your colleague looks at you and says « Tu as vu l'heure ? ». What is she doing?",
            options: ["Reproaching you for being late", "Asking whether you know the time", "Offering to lend you a watch", "Deliberating aloud"],
            correctIndex: 0,
            explanation: "The same words change family with context: in the street it is a real question, here it is a reproach about your lateness.",
          },
        ],
      },
      {
        heading: "Assert, deny, reproach",
        body: [
          "To assert or deny: the polarity reverses (\"N'avais-je pas raison ?\" = I was right; \"Est-ce une raison pour tout casser ?\" = it isn't). To reproach: the question targets the listener's failure, often in the negative with \"pouvoir\" or \"falloir\": \"Tu ne pouvais pas me le dire plus tôt ?\", \"Il fallait vraiment que tu en parles à ta mère ?\".",
        ],
        examples: [
          { es: "N'avais-je pas raison de m'inquiéter ?", en: "Wasn't I right to worry? (= I was)" },
          { es: "Est-ce une raison pour tout casser ?", en: "Is that a reason to smash everything? (= it isn't)" },
          { es: "Tu ne pouvais pas me le dire plus tôt ?", en: "Couldn't you have told me sooner? (a reproach)" },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Il fallait vraiment que tu le racontes à tout le monde ?",
            question: "What is the speaker doing?",
            options: ["Reproaching the listener for telling everyone", "Asking whether the listener had to tell everyone", "Asking the listener to tell everyone", "Thanking the listener for telling everyone"],
            correctIndex: 0,
            explanation: "\"Il fallait vraiment que...?\" targets the listener's failure: a reproach, not a real question. Note the subjunctive \"racontes\" after \"il fallait que\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (to friends, as a reproach).",
            source: "Couldn't you have warned us?",
            answer: "Vous ne pouviez pas nous prévenir ?",
            altAnswers: ["Vous n'auriez pas pu nous prévenir ?", "Vous ne pouviez pas nous avertir ?"],
            explanation: "A reproach often takes a negative question with \"pouvoir\": the imparfait \"ne pouviez pas\" or the past conditional \"n'auriez pas pu\".",
          },
        ],
      },
      {
        heading: "Protest and disbelief",
        body: [
          "To protest or show outrage: \"Comment ose-t-on...?\", \"De quel droit...?\" (by what right...?), \"Où va-t-on ?\" (what's the world coming to?), \"Jusqu'où iront-ils ?\". To show surprise or disbelief: \"C'est une blague ?\", \"Vous plaisantez ?\", \"Et puis quoi encore ?\" (what next?).",
          "Recognising the function is the first step; the next lessons teach you to answer or use them. For now, learn to hear what is really being said.",
        ],
        examples: [
          { es: "De quel droit fouillez-vous dans mes affaires ?", en: "What right do you have to go through my things?" },
          { es: "Où va-t-on, si même les bibliothèques ferment ?", en: "What's the world coming to, if even libraries close?" },
          { es: "Payer pour se garer devant chez soi ? Et puis quoi encore ?", en: "Pay to park outside your own home? What next?" },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[By what right] are they cutting off our water?",
            sentence: "___ nous coupent-ils l'eau ?",
            answer: "De quel droit",
            explanation: "\"De quel droit\" + inversion protests: they have no right. It is outrage, not a request for a legal reference.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (to someone you don't know).",
            source: "Are you joking?",
            answer: "Vous plaisantez ?",
            altAnswers: ["Plaisantez-vous ?", "C'est une plaisanterie ?", "C'est une blague ?", "Vous rigolez ?"],
            explanation: "A question of disbelief, not a request for information.",
          },
        ],
      },
      {
        heading: "Formal clues",
        body: [
          "Formal clues of a rhetorical question: a negative in a question that obviously has a known answer (\"ne... pas ?\"), the conditional of impossibility (\"qui pourrait...?\", \"qui oserait...?\"), an infinitive without subject (\"à quoi bon...?\"), intensifiers (\"vraiment\", \"donc\", \"quand même\", \"diable\"): \"Mais qu'est-ce que tu as donc fait ?\", \"Tu ne vas quand même pas partir ?\".",
        ],
        examples: [
          { es: "Tu ne vas quand même pas partir sans dire au revoir ?", en: "You're surely not going to leave without saying goodbye?" },
          { es: "Mais qu'est-ce que tu as donc fait de tes clés ?", en: "Whatever have you done with your keys?" },
          { es: "Qui oserait aujourd'hui défendre une telle mesure ?", en: "Who would dare defend such a measure today?" },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Who [would dare] say the opposite?",
            sentence: "Qui ___ dire le contraire ?",
            answer: "oserait",
            explanation: "The conditional of impossibility (\"qui oserait\", \"qui pourrait\") is a formal clue of a rhetorical question: nobody would dare.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Tu ne vas quand même partir pas sans moi ?",
            answer: "Tu ne vas quand même pas partir sans moi ?",
            explanation: "\"Ne... pas\" wraps the conjugated verb \"vas\", and \"quand même\" sits inside the negation: \"tu ne vas quand même pas partir\". The intensifier marks the question as rhetorical.",
          },
        ],
      },
      {
        heading: "Context: who asks whom",
        body: [
          "Context: who speaks to whom, and whether the answer is shared knowledge. A politician at a rally is not polling the crowd. A teacher who asks \"Qui a fini ?\" may be checking; one who asks \"Qui a encore oublié son livre ?\" is reproaching the usual suspect.",
        ],
        examples: [
          { es: "Qui a encore oublié son livre ?", en: "Who's forgotten their book again? (said to the usual culprit)" },
          { es: "Qui a fini ? Levez la main.", en: "Who has finished? Raise your hand. (a real check)" },
          { es: "Le candidat lance à la foule : « Voulez-vous vraiment cinq ans de plus ? »", en: "The candidate calls out to the crowd: 'Do you really want five more years?'" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A teacher looks at Lucas and says \"Qui a encore oublié son cahier ?\" What is she doing?",
            options: ["Reproaching Lucas", "Asking for information", "Making a polite request", "Deliberating aloud"],
            correctIndex: 0,
            explanation: "\"Encore\" and the context (she's looking at the usual culprit) make it a reproach.",
          },
        ],
      },
      {
        heading: "Intonation and punctuation",
        body: [
          "Intonation: true yes/no questions rise; rhetorical ones often fall, or are followed by a pointed silence. In writing, punctuation sometimes helps: \"?!\" or an exclamation mark in place of a question mark (\"Comment ose-t-il !\") shows a question that is really an exclamation.",
        ],
        examples: [
          { es: "Comment ose-t-il !", en: "How dare he! (a question turned exclamation)" },
          { es: "C'est une blague ?!", en: "Is this a joke?!" },
          { es: "Mais où avais-je la tête !", en: "What was I thinking!" },
        ],
        checkpoint: [
          {
            type: "speak",
            text: "Comment peut-on accepter ça ?!",
            tip: "No rise at the end: say it with falling, indignant intonation.",
            explanation: "\"?!\" marks a question that is really an exclamation: let the voice fall with emphasis rather than rise.",
            prompt: "Say it in French, as outrage: How can anyone accept that?!",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Turn it into a rhetorical question that asserts it.",
        source: "J'avais raison de me méfier.",
        answer: "N'avais-je pas raison de me méfier ?",
        altAnswers: ["Est-ce que je n'avais pas raison de me méfier ?", "Je n'avais pas raison de me méfier ?"],
        explanation: "A negative question asserts the positive: \"n'avais-je pas raison ?\" = I was right.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "What's the world coming to?",
        answer: "Où va-t-on ?",
        altAnswers: ["Où va le monde ?", "Où allons-nous ?", "Mais où va-t-on ?"],
        explanation: "\"Où va-t-on ?\" is the fixed expression of dismay; the \"-t-\" is inserted between two vowels.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Pay to use the toilets? What next?",
        answer: "Payer pour aller aux toilettes ? Et puis quoi encore ?",
        altAnswers: ["Payer pour utiliser les toilettes ? Et puis quoi encore ?"],
        explanation: "\"Et puis quoi encore ?\" (what next?) expresses disbelief at an outrageous idea.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Is that a reason to shout at everyone?",
        words: ["Est-ce", "une raison", "pour crier", "sur tout le monde ?"],
        translation: "Is that a reason to shout at everyone?",
        explanation: "A positive rhetorical question asserts the negative: it is no reason.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "In what year does Hugo publish \"Les Misérables\"?",
        answer: "En quelle année Hugo publie-t-il Les Misérables ?",
        altAnswers: ["En quelle année Hugo a-t-il publié Les Misérables ?", "En quelle année Victor Hugo publie-t-il Les Misérables ?"],
        explanation: "A test question: the teacher knows the answer. With a noun subject, the inversion adds \"-t-il\": \"Hugo publie-t-il\".",
      },
      {
        type: "listen-choose",
        audio: "N'ai-je pas tout fait pour t'aider ?",
        question: "What is the speaker saying?",
        options: ["I did everything I could to help you.", "I didn't do anything to help you.", "Did I help you at all?", "I want to help you more."],
        correctIndex: 0,
        explanation: "A negative rhetorical question asserts the positive: \"n'ai-je pas tout fait ?\" = I did everything.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (to a friend).",
        source: "You're surely not going to eat all that?",
        answer: "Tu ne vas quand même pas manger tout ça ?",
        altAnswers: ["Tu ne vas tout de même pas manger tout ça ?", "Tu ne vas quand même pas manger tout cela ?"],
        explanation: "\"Quand même\" inside a negative question is a formal clue: the speaker expects, and urges, a no.",
      },
      {
        type: "dictation",
        audio: "Comment osez-vous me parler sur ce ton ?",
        explanation: "\"Comment osez-vous...?\" is a question of indignation: how dare you.",
      },
      {
        type: "speak",
        text: "Jusqu'où iront-ils pour garder le pouvoir ?",
        prompt: "Say it in French: How far will they go to stay in power?",
        tip: "\"Va-t-on\" is said as one word: va-ton.",
        explanation: "\"Jusqu'où iront-ils ?\" protests: there seems to be no limit.",
      },
    ],
  },
  {
    slug: "c2-rhetorical-questions-2",
    level: "FR-C2",
    number: 3,
    title: "Questions Rhétoriques et Structures d'Emphase, Part 2 of 7",
    summary: "Hypophora, asking and answering yourself (pourquoi ? parce que... ; que faut-il en retenir ? ; est-ce à dire que... ? certainement pas), and the inversion and register of formal questions.",
    duration: "19 min",
    sections: [
      {
        heading: "L'hypophore: ask, then answer",
        body: [
          "\"L'hypophore\" (or \"la subjection\" in classical rhetoric) is a question the speaker asks and immediately answers. Unlike the rhetorical question, it does expect an answer, but supplies it itself. It anticipates the audience's objection, creates a moment of suspense, and gives the speech a dialogue-like rhythm that keeps attention.",
        ],
        examples: [
          { es: "Pourquoi cette réforme échoue-t-elle ? Pour une raison simple : personne ne l'a expliquée.", en: "Why is this reform failing? For a simple reason: nobody explained it." },
          { es: "Qui paiera la facture ? Les ménages modestes, comme toujours.", en: "Who will pay the bill? Low-income households, as always." },
          { es: "Que nous apprend cette enquête ? Deux choses, essentiellement.", en: "What does this survey teach us? Two things, essentially." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "\"Pourquoi cette réforme échoue-t-elle ? Pour une raison simple : personne ne l'a expliquée.\" What device is this?",
            options: ["L'hypophore: the speaker asks and answers.", "A real question to the audience.", "A reproach to the listener.", "A polite request."],
            correctIndex: 0,
            explanation: "The speaker supplies the answer immediately: hypophora.",
          },
        ],
      },
      {
        heading: "Pascal and Figaro",
        body: [
          "Pascal uses it to stage a whole meditation: « Qu'est-ce que l'homme dans la nature ? Un néant à l'égard de l'infini, un tout à l'égard du néant, un milieu entre rien et tout. » Beaumarchais's Figaro uses it as a weapon against the count: « Qu'avez-vous fait pour tant de biens ? Vous vous êtes donné la peine de naître, et rien de plus. » The answer, short and cutting, gets its force from the question that set it up.",
        ],
        examples: [
          { es: "Qu'est-ce que l'homme dans la nature ? Un néant à l'égard de l'infini, un tout à l'égard du néant.", en: "What is man in nature? A nothing compared with the infinite, an everything compared with nothing. (Pascal)" },
          { es: "Qu'avez-vous fait pour tant de biens ? Vous vous êtes donné la peine de naître, et rien de plus.", en: "What have you done for so many advantages? You took the trouble to be born, and nothing more. (Beaumarchais)" },
          { es: "Que reste-t-il de nos amours ? Des photos jaunies.", en: "What is left of our loves? Some yellowed photos." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Qu'avez-vous fait pour tant de biens ? Vous vous êtes donné la peine de naître, et rien de plus.",
            question: "What is the speaker's point?",
            options: ["You have done nothing to deserve your privileges except be born.", "You worked hard to earn your fortune.", "You were born poor and became rich.", "Tell me what you did with your property."],
            correctIndex: 0,
            explanation: "Figaro's hypophora (Beaumarchais): the question sets up a cutting answer against inherited privilege.",
          },
        ],
      },
      {
        heading: "Elliptical answers",
        body: [
          "Notice that the answer is often elliptical: a noun phrase, not a full sentence. \"Pourquoi ? Pour une raison simple.\" The question has already provided the verb.",
        ],
        examples: [
          { es: "Qui en profite ? Les actionnaires.", en: "Who benefits? The shareholders." },
          { es: "Combien cela coûtera-t-il ? Trois millions.", en: "How much will it cost? Three million." },
          { es: "Quand ? Dès la rentrée.", en: "When? From the start of the school year." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (a question answered by the speaker).",
            source: "Who will pay for the repairs? The tenants, of course.",
            answer: "Qui paiera les réparations ? Les locataires, bien sûr.",
            altAnswers: ["Qui paiera les réparations ? Les locataires, évidemment.", "Qui va payer les réparations ? Les locataires, bien sûr."],
            explanation: "In a hypophora the answer is often elliptical: a noun phrase (\"les locataires\"), because the question has already supplied the verb.",
          },
        ],
      },
      {
        heading: "Explain, sum up, prevent a misreading",
        body: [
          "To explain: \"Pourquoi ? Parce que...\" or, more elegantly, \"Pourquoi ? C'est que...\" (the reason is that). To sum up: \"Que faut-il en retenir ?\", \"Qu'en conclure ?\" (what should we conclude from it?), followed by the answer. To prevent a misreading: \"Est-ce à dire que... ?\" (does that mean that...?), answered by \"Certainement pas\", \"Loin de là\", \"Non, bien sûr\".",
        ],
        examples: [
          { es: "Pourquoi les jeunes votent-ils moins ? C'est qu'ils ne se sentent pas représentés.", en: "Why do young people vote less? It's because they don't feel represented." },
          { es: "Que faut-il en retenir ? Que la mesure a surtout profité aux plus aisés.", en: "What should we take from this? That the measure mainly benefited the better-off." },
          { es: "Est-ce à dire qu'il faut renoncer ? Certainement pas.", en: "Does that mean we should give up? Certainly not." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Why are shops closing? [It's because] rents have doubled.",
            sentence: "Pourquoi les commerces ferment-ils ? ___ les loyers ont doublé.",
            answer: "C'est que",
            altAnswers: ["Parce qu'"],
            explanation: "\"C'est que\" (the reason is that) is the elegant answer to a self-posed \"pourquoi ?\"; it elides before a vowel: \"c'est qu'ils\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Does that mean the project is dead? Far from it.",
            answer: "Est-ce à dire que le projet est mort ? Loin de là.",
            altAnswers: ["Est-ce à dire que le projet est enterré ? Loin de là.", "Faut-il en conclure que le projet est mort ? Loin de là."],
            explanation: "\"Est-ce à dire que...?\" anticipates a misreading, and the speaker answers it at once: \"loin de là\", \"certainement pas\".",
          },
        ],
      },
      {
        heading: "The nominal question",
        body: [
          "The nominal question is very modern and very French in journalism and talks: \"La raison ? Un manque criant de moyens.\" \"Le résultat ? Des classes surchargées.\" \"La solution ? Elle existe.\" Just the noun with a question mark, then the answer. It is punchy but informal; avoid it in a dissertation.",
        ],
        examples: [
          { es: "La raison ? Un manque criant de moyens.", en: "The reason? A glaring lack of resources." },
          { es: "Le résultat ? Des classes de trente-cinq élèves.", en: "The result? Classes of thirty-five pupils." },
          { es: "La solution ? Elle existe.", en: "The solution? It exists." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Le coupable ? Un simple câble mal branché.",
            question: "What does it mean?",
            options: ["The culprit? A simple badly connected cable.", "Who is guilty of connecting the cable?", "Is the culprit the man who plugged in the cable?", "The cable was guilty of a simple mistake."],
            correctIndex: 0,
            explanation: "A nominal question (\"le coupable ?\") followed at once by its answer: punchy, journalistic, too informal for a dissertation.",
          },
        ],
      },
      {
        heading: "Qu'en est-il de...?",
        body: [
          "\"Qu'en est-il de... ?\" (what about...?, what is the situation regarding...?) and \"Qu'en est-il vraiment ?\" introduce a section in which you will answer: a bridge between a received idea and the facts.",
        ],
        examples: [
          { es: "On dit la ville plus sûre qu'avant. Qu'en est-il vraiment ?", en: "The city is said to be safer than before. What is the truth of it?" },
          { es: "Qu'en est-il des promesses de campagne ?", en: "What about the campaign promises?" },
          { es: "Qu'en est-il de la sécurité des données ?", en: "What is the situation regarding data security?" },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Everyone praises the new tram. [What is the truth of it]?",
            sentence: "Tout le monde vante le nouveau tram. ___ ?",
            answer: "Qu'en est-il vraiment",
            altAnswers: ["Qu'en est-il", "Qu'en est-il réellement"],
            explanation: "\"Qu'en est-il vraiment ?\" bridges a received idea and the facts you are about to give.",
          },
        ],
      },
      {
        heading: "Three ways to ask; complex inversion",
        body: [
          "French has three ways to ask: intonation (\"Vous partez ?\"), \"est-ce que\" (\"Est-ce que vous partez ?\"), inversion (\"Partez-vous ?\"). In speeches and formal writing, inversion is the norm, and with a noun subject it becomes complex inversion: the noun stays first and a pronoun is attached to the verb: \"Cette réforme est-elle juste ?\", \"Les élus ont-ils été consultés ?\".",
        ],
        examples: [
          { es: "Cette réforme est-elle juste ? Regardons qui la paiera.", en: "Is this reform fair? Let's look at who will pay for it." },
          { es: "Les habitants ont-ils été consultés ? Jamais.", en: "Were the residents consulted? Never." },
          { es: "Pourquoi le Gouvernement a-t-il attendu six mois avant de réagir ?", en: "Why did the Government wait six months before reacting?" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which formal question is correct?",
            options: ["Pourquoi le maire a-t-il refusé ?", "Pourquoi le maire a-il refusé ?", "Pourquoi a le maire refusé ?", "Pourquoi est-ce que le maire a-t-il refusé ?"],
            correctIndex: 0,
            explanation: "Complex inversion with \"-t-\": \"le maire a-t-il\". Never combine \"est-ce que\" with inversion.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into a formal question with complex inversion.",
            source: "Est-ce que les élus ont lu le rapport ?",
            answer: "Les élus ont-ils lu le rapport ?",
            explanation: "Complex inversion keeps the noun subject first and attaches a pronoun to the auxiliary: \"les élus ont-ils lu\". \"Est-ce que\" disappears.",
          },
        ],
      },
      {
        heading: "-t- and the rare je inversions",
        body: [
          "Add \"-t-\" between a verb ending in a vowel and \"il\", \"elle\", \"on\": \"Va-t-on\", \"A-t-il\", \"Faudra-t-il\". With \"je\", inversion survives only in a few fixed forms (\"puis-je\", \"ai-je\", \"suis-je\", \"dois-je\", \"sais-je\"): \"Que sais-je ?\" (Montaigne's motto). Otherwise use \"est-ce que\".",
        ],
        examples: [
          { es: "Faudra-t-il attendre une catastrophe pour agir ?", en: "Will we have to wait for a disaster before we act?" },
          { es: "Que sais-je ?", en: "What do I know? (Montaigne's motto)" },
          { es: "Puis-je vous poser une question ?", en: "May I ask you a question?" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Mange-je trop ?",
            answer: "Est-ce que je mange trop ?",
            altAnswers: ["Je mange trop ?"],
            explanation: "With \"je\", inversion survives only in fixed forms (\"puis-je\", \"ai-je\", \"suis-je\", \"dois-je\", \"sais-je\"). Otherwise use \"est-ce que\".",
          },
        ],
      },
      {
        heading: "Register is part of the message",
        body: [
          "Register is part of the message. An intonation question in a hypophora (\"Vous voulez savoir pourquoi ? Je vais vous le dire.\") sounds conversational and close to the audience; a complex inversion (\"Pourquoi le Gouvernement a-t-il attendu ?\") sounds parliamentary. Choose deliberately, and don't mix the two within one sentence.",
        ],
        examples: [
          { es: "Vous voulez savoir pourquoi ? Je vais vous le dire.", en: "You want to know why? I'll tell you." },
          { es: "Le Gouvernement entend-il revoir sa copie ?", en: "Does the Government intend to rethink its plans?" },
          { es: "Vous trouvez ça juste, vous ?", en: "You think that's fair, do you?" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            explanation: "Complex inversion sounds parliamentary. The second and third are conversational, and the last mixes \"est-ce que\" with inversion, which is never correct.",
            question: "In a parliamentary speech, which question fits?",
            options: ["Le ministre compte-t-il démissionner ?", "Le ministre, il compte démissionner ou quoi ?", "Le ministre va démissionner, non ?", "Est-ce que le ministre compte-t-il démissionner ?"],
            correctIndex: 0,
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (hypophora).",
        source: "What should we take from this? Two things.",
        answer: "Que faut-il en retenir ? Deux choses.",
        altAnswers: ["Qu'en retenir ? Deux choses.", "Que faut-il retenir ? Deux choses.", "Que retenir de cela ? Deux choses."],
        explanation: "\"Que faut-il en retenir ?\" sums up; \"en\" refers to what has just been said.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Make it formal with complex inversion.",
        source: "Est-ce que cette loi est utile ?",
        answer: "Cette loi est-elle utile ?",
        explanation: "Noun subject first, then the verb with an attached pronoun: \"cette loi est-elle utile ?\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (a punchy nominal question).",
        source: "The cause? A forgotten candle.",
        answer: "La cause ? Une bougie oubliée.",
        altAnswers: ["La cause ? Une bougie qu'on avait oubliée."],
        explanation: "A nominal question and its elliptical answer: punchy, for journalism and talks rather than a dissertation.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "You want to know who is responsible? I'll tell you.",
        answer: "Vous voulez savoir qui est responsable ? Je vais vous le dire.",
        altAnswers: ["Vous voulez savoir qui est responsable ? Je vais vous le dire, moi.", "Tu veux savoir qui est responsable ? Je vais te le dire."],
        explanation: "An intonation question in a hypophora sounds conversational, close to the audience.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Why did the mayor turn down the project?",
        words: ["Pourquoi", "le maire", "a-t-il", "refusé", "le projet ?"],
        translation: "Why did the mayor turn down the project?",
        explanation: "Complex inversion after \"pourquoi\": the noun subject, then \"a-t-il\" + participle.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "What do these figures tell us? That inequality is rising.",
        answer: "Que nous disent ces chiffres ? Que les inégalités augmentent.",
        altAnswers: ["Que nous disent ces chiffres ? Que les inégalités progressent.", "Que nous apprennent ces chiffres ? Que les inégalités augmentent."],
        explanation: "The answer to a self-posed question can be a bare \"que\" clause: the verb is already in the question.",
      },
      {
        type: "dictation",
        audio: "Faut-il pour autant tout abandonner ? Certainement pas.",
        explanation: "The speaker raises a misreading and rejects it at once: \"certainement pas\".",
      },
      {
        type: "speak",
        text: "Pourquoi les prix montent-ils ? Pour une raison simple : la demande explose.",
        prompt: "Say it in French: Why are prices rising? For a simple reason: demand is exploding.",
        tip: "Pause after the question, as if giving the audience time to wonder.",
        explanation: "Hypophora with complex inversion (\"les prix montent-ils\") and an elliptical start to the answer.",
      },
      {
        type: "speak",
        text: "Va-t-on enfin écouter les habitants ?",
        prompt: "Say it in French: Are we finally going to listen to the residents?",
        tip: "\"Faudra-t-il\": the inserted t links the two vowels: fau-dra-til.",
        explanation: "\"-t-\" separates two vowels in inversion: \"va-t-on\".",
      },
    ],
  },
  {
    slug: "c2-hypophora-transformations",
    level: "FR-C2",
    number: 4,
    title: "Transformations: De l'Affirmation à l'Hypophore",
    summary: "Turn flat statements into hypophora that wins attention (« La réforme est injuste » → « Cette réforme est-elle juste ? Regardons qui la paiera. »), then tone it back down into measured written prose.",
    duration: "19 min",
    sections: [
      {
        heading: "Step 1: find the hidden question",
        body: [
          "Every claim answers an implicit question. \"La réforme est injuste\" answers \"Cette réforme est-elle juste ?\". \"Le centre-ville se vide à cause des loyers\" answers \"Pourquoi le centre-ville se vide-t-il ?\". The first step of the transformation is to bring that question to the surface, in a form the audience might ask themselves.",
        ],
        examples: [
          { es: "La réforme est injuste. → Cette réforme est-elle juste ? Regardons qui la paiera.", en: "The reform is unfair. → Is this reform fair? Let's look at who will pay for it." },
          { es: "Le centre-ville se vide à cause des loyers. → Pourquoi le centre-ville se vide-t-il ? Parce qu'un deux-pièces y coûte 1 200 euros.", en: "The town centre is emptying because of rents. → Why is it emptying? Because a two-room flat costs 1,200 euros there." },
          { es: "Les petites communes sont oubliées. → Qui pense aux petites communes ? Personne, à en juger par le budget.", en: "Small towns are forgotten. → Who thinks of small towns? Nobody, judging by the budget." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the claim into the yes/no question it answers, with complex inversion.",
            source: "Cette décision est équitable.",
            answer: "Cette décision est-elle équitable ?",
            explanation: "Every claim answers an implicit question. With a noun subject, the formal question keeps the noun first and attaches a pronoun: \"cette décision est-elle\".",
          },
        ],
      },
      {
        heading: "The answer must add something",
        body: [
          "Then the answer must bring something the bare statement didn't: evidence, a figure, a concrete image. A hypophora that merely repeats the claim (\"La réforme est-elle injuste ? Oui, elle est injuste.\") is empty. Compare: \"Cette réforme est-elle juste ? Regardons qui la paiera : les retraités modestes, pas les grandes fortunes.\" The question opens a door; the answer walks the audience through it.",
        ],
        examples: [
          { es: "Ce projet coûtera cher. → Combien coûtera ce projet ? Trois fois l'estimation initiale.", en: "This project will be expensive. → How much will it cost? Three times the initial estimate." },
          { es: "La mesure n'a rien changé. → Qu'a changé cette mesure ? Rien, ou presque.", en: "The measure changed nothing. → What did this measure change? Nothing, or almost nothing." },
          { es: "Cette loi est-elle utile ? Demandez aux deux mille familles qui en ont bénéficié.", en: "Is this law useful? Ask the two thousand families who have benefited from it." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which hypophora actually adds something to the claim \"Le projet coûtera cher\" ?",
            options: ["Combien coûtera ce projet ? Trois fois l'estimation initiale.", "Ce projet coûtera-t-il cher ? Oui, il coûtera cher.", "Êtes-vous assez naïfs pour croire qu'il sera bon marché ?", "Le projet ? Cher."],
            correctIndex: 0,
            explanation: "The answer must bring evidence; repeating the claim or mocking the audience doesn't persuade.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (hypophora).",
            source: "Who benefited from this tax cut? The richest ten per cent.",
            answer: "Qui a profité de cette baisse d'impôts ? Les dix pour cent les plus riches.",
            altAnswers: ["Qui a profité de cette baisse d'impôts ? Les 10 % les plus riches.", "Qui a bénéficié de cette baisse d'impôts ? Les dix pour cent les plus riches.", "Qui a bénéficié de cette baisse d'impôts ? Les 10 % les plus riches."],
            explanation: "The answer brings evidence the bare claim lacked: a precise group. \"Profiter de\" / \"bénéficier de\" take \"de\".",
          },
        ],
      },
      {
        heading: "Inquire with the audience, don't mock it",
        body: [
          "Beware of the leading question that insults the audience (\"Êtes-vous assez naïfs pour croire que... ?\"). Hypophora persuades by staging a shared inquiry, not by mocking.",
        ],
        examples: [
          { es: "Êtes-vous assez naïfs pour croire à ces promesses ?", en: "Are you naive enough to believe these promises? (insulting)" },
          { es: "Pouvons-nous croire à ces promesses ? Regardons les chiffres.", en: "Can we believe these promises? Let's look at the figures." },
          { es: "Faut-il les croire ? Examinons ce qu'ils ont fait.", en: "Should we believe them? Let's examine what they have done." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which question stages a shared inquiry rather than mocking the audience?",
            options: ["Peut-on faire confiance à ce plan ? Examinons-le.", "Êtes-vous assez naïfs pour faire confiance à ce plan ?", "Qui serait assez bête pour y croire ?", "Vous croyez encore à ce plan, sérieusement ?"],
            correctIndex: 0,
            explanation: "Hypophora persuades by inviting the audience to examine with you. The other three insult or belittle them, which turns people against the speaker.",
          },
        ],
      },
      {
        heading: "Step 2: choose the question word",
        body: [
          "Choose the question word that leads to your strongest evidence. \"Qui\" points to victims or culprits (\"Qui paiera ?\"), \"combien\" to a figure, \"pourquoi\" to a cause, \"que reste-t-il de\" to a loss (\"Que reste-t-il de cette promesse ?\"). A yes/no question with inversion (\"Cette réforme est-elle juste ?\") sets up a verdict.",
        ],
        examples: [
          { es: "Que reste-t-il de cette promesse ? Un slogan.", en: "What is left of that promise? A slogan." },
          { es: "Qui sont les premières victimes de cette décision ? Les enfants.", en: "Who are the first victims of this decision? The children." },
          { es: "Combien d'élèves par classe ? Trente-quatre.", en: "How many pupils per class? Thirty-four." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into a hypophora with que reste-t-il de.",
            source: "Il ne reste que des ruines de ce grand chantier.",
            answer: "Que reste-t-il de ce grand chantier ? Des ruines.",
            altAnswers: ["Que reste-t-il de ce grand chantier ? Rien que des ruines.", "Que reste-t-il de ce grand chantier ? Seulement des ruines."],
            explanation: "\"Que reste-t-il de\" points to a loss; the answer, a bare noun phrase, lands harder than the flat statement.",
          },
        ],
      },
      {
        heading: "Sharpen it, then pause",
        body: [
          "Sharpen with the conditional or an infinitive: \"Que dirait-on si...?\", \"Comment expliquer ce silence ?\". Or use the nominal question for speed: \"Le coût ? Trois millions.\" Each form has a rhythm: inversion is solemn, the nominal question is brisk, the intonation question is familiar.",
          "In a speech, follow the question with a pause: the second of silence is where the audience starts answering in their heads, and your answer arrives just as they are ready for it.",
        ],
        examples: [
          { es: "Comment expliquer ce silence ? Par la peur, tout simplement.", en: "How can this silence be explained? By fear, quite simply." },
          { es: "Que dirait-on si une banque gérait ainsi ses comptes ?", en: "What would people say if a bank managed its accounts like this?" },
          { es: "Le coût ? Trois millions d'euros. Le bénéfice ? Personne ne le sait.", en: "The cost? Three million euros. The benefit? Nobody knows." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[How can this delay be explained]? By a lack of staff.",
            sentence: "___ ? Par un manque de personnel.",
            answer: "Comment expliquer ce retard",
            explanation: "An infinitive question (\"comment expliquer...?\") sounds universal, and the answer starts with \"par\" to match \"expliquer par\".",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[What would people say] if a school were run like this?",
            sentence: "___ si une école était gérée ainsi ?",
            answer: "Que dirait-on",
            explanation: "\"Que dirait-on si\" + imparfait sharpens the question with a hypothetical comparison.",
          },
        ],
      },
      {
        heading: "Step 3: tone it down for the page",
        body: [
          "What works at a microphone can feel theatrical on the page. In a dissertation, a report or a synthèse, French academic style tolerates one or two questions (the problématique, a transition) but frowns on a series of hypophoras. The transformation then runs backwards: keep the logic, drop the drama.",
        ],
        examples: [
          { es: "Cette réforme est-elle juste ? → Il convient de se demander si cette réforme est juste.", en: "Is this reform fair? → One should ask whether this reform is fair." },
          { es: "Pour juger de la justice de cette réforme, il faut examiner qui la financera.", en: "To judge whether this reform is fair, one must examine who will fund it." },
          { es: "Dans une synthèse, une seule question suffit : la problématique.", en: "In a synthesis, one question is enough: the research question." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You are writing a report, not a speech. Which version suits the register best?",
            options: ["Le coût, estimé à trois millions d'euros, reste à justifier.", "Le coût ? Trois millions. Le bénéfice ? Mystère !", "Combien ça coûte ? Trois millions, vous vous rendez compte ?", "Le coût, vous voulez le connaître ? Trois millions."],
            correctIndex: 0,
            explanation: "Written prose keeps the information and drops the theatrical questions.",
          },
        ],
      },
      {
        heading: "Three ways back to prose",
        body: [
          "Three ways to do it. Turn the question into an indirect one: \"Il convient de se demander qui financera la réforme.\" Turn it into a nominal subject: \"La question du financement de la réforme est décisive.\" Or keep the declarative with a connector that announces the answer: \"Pour juger de la justice de cette réforme, il faut examiner qui la financera : en l'occurrence, les retraités modestes.\"",
        ],
        examples: [
          { es: "Qui paiera ? → La question du financement est décisive.", en: "Who will pay? → The question of funding is decisive." },
          { es: "Pourquoi le centre se vide-t-il ? → Le dépeuplement du centre s'explique avant tout par le niveau des loyers.", en: "Why is the centre emptying? → The depopulation of the centre is explained above all by the level of rents." },
          { es: "Le coût ? Trois millions. → Le coût, estimé à trois millions d'euros, reste à justifier.", en: "The cost? Three million. → The cost, estimated at three million euros, has yet to be justified." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into an indirect question for a report.",
            source: "Qui financera le nouveau stade ?",
            answer: "Il convient de se demander qui financera le nouveau stade.",
            altAnswers: ["On peut se demander qui financera le nouveau stade.", "Il faut se demander qui financera le nouveau stade.", "On peut se demander qui va financer le nouveau stade."],
            explanation: "The indirect question keeps the logic and drops the drama: no inversion, no question mark, introduced by \"se demander\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (nominalised).",
            source: "The closure of the shops is explained above all by online sales.",
            answer: "La fermeture des commerces s'explique avant tout par la vente en ligne.",
            altAnswers: ["La fermeture des commerces s'explique avant tout par le commerce en ligne.", "La fermeture des magasins s'explique avant tout par la vente en ligne.", "La fermeture des commerces s'explique surtout par la vente en ligne."],
            explanation: "The question \"pourquoi les commerces ferment-ils ?\" becomes a nominal subject, \"la fermeture des commerces\", with \"s'expliquer par\".",
          },
        ],
      },
      {
        heading: "Between oral and written",
        body: [
          "You keep the virtue of hypophora (the reader's question is anticipated) without its theatricality. This back-and-forth between oral and written registers is exactly what the DALF C2 tests when it asks you to turn a dossier into a speech or a speech into an article.",
        ],
        examples: [
          { es: "Le dossier devient un discours, le discours un article.", en: "The dossier becomes a speech, the speech an article." },
          { es: "À l'oral : « Le coût ? Énorme. » À l'écrit : « Le coût est considérable. »", en: "Spoken: 'The cost? Huge.' Written: 'The cost is considerable.'" },
          { es: "La question du lecteur est anticipée, sans théâtralité.", en: "The reader's question is anticipated, without theatricality." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Il convient de se demander qui est-ce qui financera la réforme.",
            answer: "Il convient de se demander qui financera la réforme.",
            explanation: "An indirect question in writing uses the plain question word: \"qui financera\". \"Qui est-ce qui\" belongs to direct, spoken questions.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (hypophora).",
        source: "Who thinks of night workers? Nobody.",
        answer: "Qui pense aux travailleurs de nuit ? Personne.",
        altAnswers: ["Qui pense aux travailleuses et travailleurs de nuit ? Personne."],
        explanation: "A hypophora with \"qui\" points to the forgotten; \"penser à\" + \"les\" = \"aux\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (hypophora).",
        source: "Why are young doctors leaving the countryside? Because they feel isolated there.",
        answer: "Pourquoi les jeunes médecins quittent-ils la campagne ? Parce qu'ils s'y sentent isolés.",
        altAnswers: ["Pourquoi les jeunes médecins quittent-ils la campagne ? Parce qu'ils s'y sentent seuls.", "Pourquoi les jeunes médecins quittent-ils les campagnes ? Parce qu'ils s'y sentent isolés."],
        explanation: "\"Pourquoi\" points to a cause; complex inversion (\"les jeunes médecins quittent-ils\"), and \"y\" for \"à la campagne\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (written prose).",
        source: "The question of safety is central.",
        answer: "La question de la sécurité est centrale.",
        altAnswers: ["La question de la sécurité est essentielle.", "La question de la sécurité est primordiale."],
        explanation: "\"La question de\" + noun turns a spoken question (\"est-ce sûr ?\") into a nominal subject fit for a report.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Turn it into a hypophora with qui.",
        source: "Les commerçants sont les grands perdants de ces travaux.",
        answer: "Qui sont les grands perdants de ces travaux ? Les commerçants.",
        explanation: "\"Qui\" points to the victims; the answer, a bare noun phrase, comes after the question.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: To assess this plan, one must examine its cost.",
        words: ["Pour évaluer", "ce plan,", "il faut", "en examiner", "le coût."],
        translation: "To assess this plan, one must examine its cost.",
        explanation: "A declarative with a connector announces the answer without a question: the written version of a hypophora.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "How long will the works last? Twice as long as announced.",
        answer: "Combien de temps dureront les travaux ? Deux fois plus longtemps qu'annoncé.",
        altAnswers: ["Combien de temps vont durer les travaux ? Deux fois plus longtemps qu'annoncé.", "Combien de temps les travaux dureront-ils ? Deux fois plus longtemps qu'annoncé."],
        explanation: "\"Combien\" leads to a figure; the answer is elliptical.",
      },
      {
        type: "listen-choose",
        audio: "Que reste-t-il de ce grand projet ? Une maquette.",
        question: "What is the speaker claiming?",
        options: ["The great project has been reduced to a mere model.", "The great project is nearly finished.", "Someone wants to see the model of the project.", "The model was better than the project."],
        correctIndex: 0,
        explanation: "\"Que reste-t-il de...? Une maquette.\" asserts a loss: only a scale model is left.",
      },
      {
        type: "dictation",
        audio: "Il convient de se demander qui profitera de cette mesure.",
        explanation: "The indirect question is the written, toned-down form of \"qui en profitera ?\".",
      },
      {
        type: "speak",
        text: "Ce plan est-il réaliste ? Regardons les chiffres.",
        prompt: "Say it in French, as a speaker: Is this plan realistic? Let's look at the figures.",
        tip: "Rise on \"juste\", pause, then say \"regardons\" with a lower, firmer voice.",
        explanation: "A yes/no question with inversion sets up a verdict; the imperative \"regardons\" invites the audience to examine with you.",
      },
      {
        type: "speak",
        text: "Le prix ? Douze euros. La qualité ? Discutable.",
        tip: "Pause after each question mark; the answers should land like blows.",
        explanation: "Two nominal questions in a row give a brisk rhythm; pause briefly after each question mark.",
        prompt: "Say it in French, briskly: The price? Twelve euros. The quality? Debatable.",
      },
    ],
  },
  {
    slug: "c2-rhetorical-questions-3",
    level: "FR-C2",
    number: 5,
    title: "Questions Rhétoriques et Structures d'Emphase, Part 3 of 7",
    summary: "Interrogative series and the questions of outrage: Cicero's « Jusqu'à quand, Catilina... ? », anaphora (combien de... ? combien de... ?), escalation, and the interrogative infinitive (que faire ? comment ne pas s'indigner ?).",
    duration: "21 min",
    sections: [
      {
        heading: "Cicero's opening",
        body: [
          "The most famous rhetorical opening in Western oratory is Cicero's first speech against Catiline (63 BC), which every French lycée pupil who studied Latin knows in its classic translation: « Jusqu'à quand, Catilina, abuseras-tu de notre patience ? Combien de temps encore serons-nous le jouet de ta fureur ? Jusqu'où s'emportera ton audace effrénée ? »",
        ],
        examples: [
          { es: "Jusqu'à quand, Catilina, abuseras-tu de notre patience ?", en: "How long, Catiline, will you abuse our patience? (Cicero)" },
          { es: "Combien de temps encore serons-nous le jouet de ta fureur ?", en: "How much longer will we be the plaything of your fury?" },
          { es: "Ô temps ! Ô mœurs !", en: "Oh the times! Oh the customs! (Cicero's exclamation, used ironically today)" },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Combien de temps encore, monsieur le préfet, ignorerez-vous nos lettres ?",
            question: "What does it mean?",
            options: ["How much longer, Prefect, will you ignore our letters?", "How long ago did the Prefect ignore our letters?", "How many letters has the Prefect ignored?", "When will the Prefect answer our letters?"],
            correctIndex: 0,
            explanation: "\"Combien de temps encore\" + future, addressed to someone by title: the Ciceronian question of outrage. It expects no answer; it says your silence has lasted too long.",
          },
        ],
      },
      {
        heading: "The mechanics of the series",
        body: [
          "Look at the mechanics. Three questions, none expecting an answer; each says the same thing (your insolence has gone too far) in a new form; the speaker addresses the accused directly by name (an interpellation, Part 4); and the questions grow in intensity. The audience is not asked for information but recruited into indignation.",
        ],
        examples: [
          { es: "Jusqu'à quand, monsieur le maire, fermerez-vous les yeux ?", en: "How long, Mr Mayor, will you turn a blind eye?" },
          { es: "Combien de temps encore devrons-nous patienter ?", en: "How much longer will we have to be patient?" },
          { es: "Jusqu'où irez-vous ?", en: "How far will you go?" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In Cicero's series against Catiline, what does each new question do?",
            options: ["It repeats the same accusation in a stronger form", "It asks Catiline for new information", "It moves on to an unrelated topic", "It invites Catiline to reply"],
            correctIndex: 0,
            explanation: "The series says one thing (your insolence has gone too far) in ever stronger forms. None of the questions expects an answer: they recruit the audience into indignation.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into an interpellation by addressing monsieur le président after Jusqu'à quand.",
            source: "Jusqu'à quand abuserez-vous de notre patience ?",
            answer: "Jusqu'à quand, monsieur le président, abuserez-vous de notre patience ?",
            explanation: "An interpellation names the person addressed, set off by commas, right after the opening words: \"Jusqu'à quand, monsieur le président, ...\".",
          },
        ],
      },
      {
        heading: "Jusqu'à quand or jusqu'où",
        body: [
          "Modern French politics and journalism reuse the model constantly: \"Jusqu'à quand allons-nous tolérer... ?\", \"Combien de temps encore faudra-t-il attendre... ?\", \"Jusqu'où ira-t-on ?\". \"Jusqu'à quand\" is about time running out; \"jusqu'où\" is about limits being crossed.",
        ],
        examples: [
          { es: "Jusqu'à quand allons-nous tolérer que des enfants dorment dans la rue ?", en: "How long will we tolerate children sleeping on the street?" },
          { es: "Combien de temps encore faudra-t-il attendre ce rapport ?", en: "How much longer will we have to wait for this report?" },
          { es: "Jusqu'où ira-t-on dans la course aux profits ?", en: "How far will the race for profit go?" },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Jusqu'où ira la hausse des loyers ?",
            question: "What does it mean?",
            options: ["How far will rents rise?", "How long will rents keep rising?", "Where are rents rising?", "When will rents stop rising?"],
            correctIndex: 0,
            explanation: "\"Jusqu'où\" is about limits (how far), not time; \"jusqu'à quand\" would be about time running out (how long).",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            answer: "Jusqu'où",
            explanation: "\"Jusqu'où\" asks about limits being crossed (how far); \"jusqu'à quand\" asks about time (how long).",
            en: "[How far] will they go to win this election?",
            sentence: "___ iront-ils pour gagner cette élection ?",
          },
        ],
      },
      {
        heading: "Anaphora: the hammer",
        body: [
          "\"L'anaphore\" repeats the same word or group at the start of successive units. In an interrogative series it becomes a hammer: \"Combien de familles attendent un logement ? Combien d'enfants font leurs devoirs dans la cuisine ? Combien de temps encore allons-nous détourner les yeux ?\". The repetition makes the audience anticipate the next blow.",
        ],
        examples: [
          { es: "Combien de familles attendent un logement ? Combien d'enfants font leurs devoirs dans la cuisine ? Combien de temps encore allons-nous détourner les yeux ?", en: "How many families are waiting for housing? How many children do their homework in the kitchen? How much longer will we look away?" },
          { es: "Où sont les promesses de la campagne ? Où sont les crédits annoncés ?", en: "Where are the campaign promises? Where is the funding that was announced?" },
          { es: "Est-ce cela, le progrès ? Est-ce cela, la modernité ?", en: "Is that progress? Is that modernity?" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the second question into an anaphora with où sont.",
            source: "Où sont les médecins promis ? Et qu'en est-il des infirmières annoncées ?",
            answer: "Où sont les médecins promis ? Où sont les infirmières annoncées ?",
            explanation: "Anaphora repeats the same opening (\"où sont\") at the start of each question; the identical frame makes the audience anticipate the next blow.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (keep the anaphora).",
            source: "Who decided? Who paid?",
            answer: "Qui a décidé ? Qui a payé ?",
            altAnswers: ["Qui a pris la décision ? Qui a payé ?"],
            explanation: "Keep the anaphora: both questions open with \"qui a\" + past participle.",
          },
        ],
      },
      {
        heading: "Escalation and the rule of three",
        body: [
          "Build the series in escalation (\"la gradation\"): from the general to the concrete, from the bearable to the intolerable, from them to us. Three is the classic number (\"le rythme ternaire\"); the last question is often longer and turns towards the audience or the decision-maker.",
        ],
        examples: [
          { es: "Faut-il fermer la médiathèque ? Faut-il fermer l'école ? Faut-il, demain, fermer le quartier tout entier ?", en: "Must we close the library? Must we close the school? Must we, tomorrow, close the whole neighbourhood?" },
          { es: "Combien de lettres sans réponse ? Combien de mois perdus ? Combien de vies brisées ?", en: "How many unanswered letters? How many lost months? How many broken lives?" },
          { es: "Qui l'a vu ? Qui l'a dit ? Qui, dans cette ville, a enfin agi ?", en: "Who saw it? Who said it? Who, in this town, finally acted?" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which series follows la gradation?",
            options: ["Faut-il attendre une plainte ? Faut-il attendre un accident ? Faut-il attendre un mort ?", "Faut-il attendre un mort ? Faut-il attendre un accident ? Faut-il attendre une plainte ?", "Faut-il attendre un accident ? Faut-il attendre un mort ? Faut-il attendre une plainte ?", "Faut-il attendre un mort ? Faut-il attendre une plainte ? Faut-il attendre un accident ?"],
            correctIndex: 0,
            explanation: "Gradation runs from the bearable to the intolerable, so the strongest question (a death) must come last.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Who knew? Who kept quiet? [Who, among us, dared to speak]?",
            sentence: "Qui savait ? Qui s'est tu ? ___ ?",
            answer: "Qui, parmi nous, a osé parler",
            altAnswers: ["Qui parmi nous a osé parler"],
            explanation: "The third question keeps the frame \"qui\", grows longer and turns to the audience (\"parmi nous\"): the classic ending of a ternary series.",
          },
        ],
      },
      {
        heading: "Other frames",
        body: [
          "Other anaphoric frames: \"Faut-il... ? Faut-il... ?\", \"Qui... ? Qui... ?\", \"Est-ce... ? Est-ce... ?\", \"Où sont... ?\". Keep the frame identical, vary what follows, and stop before the audience tires.",
        ],
        examples: [
          { es: "Qui a été consulté ? Qui a été informé ? Qui, dans cette salle, a eu son mot à dire ?", en: "Who was consulted? Who was informed? Who, in this room, had any say?" },
          { es: "Est-ce juste ? Est-ce raisonnable ? Est-ce seulement légal ?", en: "Is it fair? Is it reasonable? Is it even legal?" },
          { es: "Faut-il tout privatiser ? Faut-il tout vendre ?", en: "Must we privatise everything? Must we sell everything?" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Où sont les écoles promises ? Où est les crèches ?",
            answer: "Où sont les écoles promises ? Où sont les crèches ?",
            explanation: "The verb agrees with the subject that follows it: \"les crèches\" is plural, so \"où sont\". Keeping the frame identical also keeps the anaphora.",
          },
        ],
      },
      {
        heading: "The infinitive of helplessness",
        body: [
          "The interrogative infinitive you met in Part 1 shines in moments of crisis: \"Que faire ?\", \"Où aller ?\", \"Que répondre à cela ?\", \"Comment ne pas s'indigner ?\", \"Pourquoi continuer ?\". Without a subject, the question expresses a universal helplessness or an inevitable reaction.",
        ],
        examples: [
          { es: "Que répondre à une mère qui attend depuis trois ans ?", en: "What can one say to a mother who has been waiting for three years?" },
          { es: "Où aller, quand tous les guichets ont fermé ?", en: "Where can one go, when every counter has closed?" },
          { es: "Pourquoi continuer, si personne n'écoute ?", en: "Why carry on, if nobody listens?" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into an infinitive question.",
            source: "Qu'est-ce qu'on peut faire face à cette crise ?",
            answer: "Que faire face à cette crise ?",
            explanation: "The interrogative infinitive drops the subject and the modal: \"que faire ?\". Without a subject, the helplessness becomes universal.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Who can one turn to when the town hall no longer answers?",
            answer: "Vers qui se tourner quand la mairie ne répond plus ?",
            altAnswers: ["À qui s'adresser quand la mairie ne répond plus ?", "Vers qui se tourner lorsque la mairie ne répond plus ?", "À qui s'adresser lorsque la mairie ne répond plus ?"],
            explanation: "An infinitive question (\"vers qui se tourner ?\") has no subject, so it speaks for everyone in the same situation.",
          },
        ],
      },
      {
        heading: "Corneille: the question of despair",
        body: [
          "Classical theatre is full of them, alongside questions of despair. In Corneille's Le Cid (1637), old Don Diègue, insulted and too weak to fight, cries: « Ô rage ! ô désespoir ! ô vieillesse ennemie ! / N'ai-je donc tant vécu que pour cette infamie ? » The negative question with \"ne... que\" means: have I lived this long only for this disgrace? The answer he dreads is yes.",
        ],
        examples: [
          { es: "Ô rage ! ô désespoir ! ô vieillesse ennemie ! N'ai-je donc tant vécu que pour cette infamie ?", en: "O rage! O despair! O hostile old age! Have I lived so long only for this disgrace? (Corneille)" },
          { es: "N'ai-je donc tant travaillé que pour ce résultat ?", en: "Have I worked so hard only for this result?" },
          { es: "Ne suis-je venu que pour entendre cela ?", en: "Did I come only to hear that?" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In \"N'ai-je donc tant vécu que pour cette infamie ?\", what does \"ne... que\" express?",
            options: ["only: have I lived this long only for this disgrace?", "not: have I not lived for this disgrace?", "than: have I lived longer than this disgrace?", "nothing: I have lived for nothing but glory."],
            correctIndex: 0,
            explanation: "\"Ne... que\" = only; the rhetorical question voices the dreaded answer: yes, only for this.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Have I [waited so long only] for this answer?",
            sentence: "N'ai-je donc ___ pour cette réponse ?",
            answer: "tant attendu que",
            explanation: "\"Ne... que\" means only: \"tant\" goes before the participle, and \"que\" after it introduces the dreaded purpose.",
          },
        ],
      },
      {
        heading: "Closing a paragraph",
        body: [
          "In modern editorials, the infinitive question often closes a paragraph of facts: \"Face à de tels chiffres, comment ne pas s'interroger ?\". It hands the reader the conclusion without seeming to impose it.",
        ],
        examples: [
          { es: "Face à de tels chiffres, comment ne pas s'interroger ?", en: "Faced with such figures, how can one not ask questions?" },
          { es: "Devant un tel gâchis, comment ne pas s'indigner ?", en: "Faced with such waste, how can one not be outraged?" },
          { es: "Après de telles promesses, que penser de ce silence ?", en: "After such promises, what is one to think of this silence?" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "With so many empty flats, how can one not be shocked?",
            answer: "Avec tant de logements vides, comment ne pas être choqué ?",
            altAnswers: ["Avec tant de logements vides, comment ne pas être choqués ?", "Devant tant de logements vides, comment ne pas être choqué ?", "Avec tant d'appartements vides, comment ne pas être choqué ?", "Avec tant de logements vides, comment ne pas s'indigner ?"],
            explanation: "\"Comment ne pas\" + infinitive closes the paragraph: \"ne pas\" stays together before the infinitive, and the reader draws the conclusion.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "How much longer will the residents have to put up with the noise?",
        answer: "Combien de temps encore les habitants devront-ils supporter le bruit ?",
        altAnswers: ["Combien de temps encore faudra-t-il que les habitants supportent le bruit ?", "Combien de temps encore les riverains devront-ils supporter le bruit ?", "Combien de temps encore les habitants vont-ils devoir supporter le bruit ?"],
        explanation: "\"Combien de temps encore\" + future complains that time is running out; with a noun subject, use complex inversion: \"les habitants devront-ils\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (keep the anaphora).",
        source: "Where are the buses? Where are the trains?",
        answer: "Où sont les bus ? Où sont les trains ?",
        altAnswers: ["Où sont donc les bus ? Où sont donc les trains ?"],
        explanation: "Anaphora: the same frame \"où sont\" opens each question.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "[How far will] the race for profit [go]?",
        sentence: "___ la course aux profits ?",
        answer: "Jusqu'où ira",
        explanation: "\"Jusqu'où\" for limits; the noun subject follows the verb after the question word.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Is that justice? Is that equality?",
        answer: "Est-ce cela, la justice ? Est-ce cela, l'égalité ?",
        altAnswers: ["Est-ce ça, la justice ? Est-ce ça, l'égalité ?", "C'est cela, la justice ? C'est cela, l'égalité ?", "Est-ce là la justice ? Est-ce là l'égalité ?"],
        explanation: "\"Est-ce cela, la... ?\" repeated: the frame is identical, only the noun changes.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: How long, Director, will you keep postponing this meeting?",
        words: ["Jusqu'à quand,", "madame la directrice,", "repousserez-vous", "cette réunion ?"],
        translation: "How long, Director, will you keep postponing this meeting?",
        explanation: "The Ciceronian pattern: \"jusqu'à quand\", the interpellation between commas, then the future with inversion.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "What is one to do when nobody answers?",
        answer: "Que faire quand personne ne répond ?",
        altAnswers: ["Que faire lorsque personne ne répond ?", "Que faire si personne ne répond ?"],
        explanation: "The interrogative infinitive \"que faire ?\" expresses helplessness; \"personne\" takes \"ne\" without \"pas\".",
      },
      {
        type: "dictation",
        audio: "Jusqu'où ira-t-on pour économiser quelques euros ?",
        explanation: "\"Jusqu'où ira-t-on\" protests that a limit has been crossed; \"-t-\" separates the two vowels.",
      },
      {
        type: "speak",
        text: "Qui a signé ? Qui a payé ? Qui, au bout du compte, en a profité ?",
        prompt: "Say it in French: Who signed? Who paid? Who, in the end, profited from it?",
        tip: "Make the third question longer and slower: it is the climax.",
        explanation: "A ternary anaphora with \"qui\": the third question is longer and lands the accusation.",
      },
      {
        type: "speak",
        text: "Combien d'écoles ferment ? Combien de classes débordent ? Combien de temps encore allons-nous nous taire ?",
        tip: "Stress \"combien\" each time, and slow down slightly on the second question.",
        explanation: "Anaphora with \"combien\" in escalation: the last question turns towards the audience (\"nous\").",
        prompt: "Say it in French: How many schools are closing? How many classes are overflowing? How much longer will we stay silent?",
      },
    ],
  },
  {
    slug: "c2-question-series-style-workshop",
    level: "FR-C2",
    number: 6,
    title: "Style Workshop: La Série Interrogative",
    summary: "Build a series of questions with anaphora to close a speech with force: choose the frame, escalate, end on an answer or an appeal, and know when the series has become too heavy.",
    duration: "19 min",
    sections: [
      {
        heading: "The flat ending",
        body: [
          "Here is the flat ending of a speech to a town council: \"Il faut garder la médiathèque ouverte, car elle est utile aux habitants.\" True, and forgettable. The workshop: turn it into a closing series that the council will remember.",
        ],
        examples: [
          { es: "Il faut garder la médiathèque ouverte, car elle est utile aux habitants.", en: "The library must stay open, because it is useful to residents. (the flat version)" },
          { es: "Il faut rénover la piscine, car elle est vétuste.", en: "The pool must be renovated, because it is run-down. (flat)" },
          { es: "Le bus de nuit doit être maintenu, car il est utile.", en: "The night bus must be kept, because it is useful. (flat)" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What is the problem with ending a speech on « Il faut garder la médiathèque ouverte, car elle est utile aux habitants » ?",
            options: ["It is true, but nobody will remember it", "It is grammatically incorrect", "It is far too emotional", "It insults the council"],
            correctIndex: 0,
            explanation: "A flat statement of the conclusion is correct and forgettable. The workshop turns it into a closing series that sticks in the memory.",
          },
        ],
      },
      {
        heading: "Frame, groups, decision-makers",
        body: [
          "Step 1, choose a frame that you can repeat: \"Où iront... ?\" works, because the closure is about people losing a place. Step 2, fill it with concrete groups, from the most obvious to the most moving: \"Où iront les lycéens qui révisent le soir ? Où iront les retraités qui lisent le journal au chaud ? Où iront les enfants dont les parents n'ont pas de livres à la maison ?\" Step 3, turn towards the decision-makers: \"Et vous, mesdames et messieurs les élus, où irez-vous leur expliquer votre choix ?\"",
        ],
        examples: [
          { es: "Où iront les lycéens qui révisent le soir ?", en: "Where will the sixth-formers who revise in the evening go?" },
          { es: "Où iront les retraités qui lisent le journal au chaud ?", en: "Where will the pensioners who read the paper in the warm go?" },
          { es: "Et vous, mesdames et messieurs les élus, où irez-vous leur expliquer votre choix ?", en: "And you, councillors, where will you go to explain your choice to them?" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into a question with the frame Où iront...?",
            source: "Les jeunes musiciens qui répètent le samedi n'auront plus de salle.",
            answer: "Où iront les jeunes musiciens qui répètent le samedi ?",
            explanation: "Step 1 is a repeatable frame: \"où iront\" + a concrete group, with a \"qui\" clause giving the detail that makes the group visible.",
          },
        ],
      },
      {
        heading: "Escalation, rhythmic and emotional",
        body: [
          "Notice that each question is longer than the previous one, and that the last group (children without books at home) is the most vulnerable: the escalation is both rhythmic and emotional. Victor Hugo's speech on poverty to the Assemblée (1849) uses the same mechanics with assertions rather than questions, hammering \"Vous n'avez rien fait tant que le peuple souffre !\" and its variations until the chamber erupts.",
        ],
        examples: [
          { es: "Où iront les enfants dont les parents n'ont pas de livres à la maison ?", en: "Where will the children whose parents have no books at home go?" },
          { es: "Vous n'avez rien fait tant que le peuple souffre !", en: "You have done nothing as long as the people suffer! (Hugo, 1849)" },
          { es: "Où iront les malades qui attendent un rendez-vous ? Où iront ceux qui n'ont plus de médecin du tout ?", en: "Where will the sick who are waiting for an appointment go? Where will those who no longer have any doctor at all go?" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which order of questions gives the best escalation?",
            options: ["students revising → pensioners reading → children without books at home", "children without books at home → pensioners → students", "pensioners → children → students → pensioners again", "students → students → students"],
            correctIndex: 0,
            explanation: "Escalation moves from the expected to the most vulnerable, and the questions grow longer.",
          },
        ],
      },
      {
        heading: "Le rythme ternaire",
        body: [
          "The classic series has three members (\"le rythme ternaire\"), each a little longer than the last: French rhetoric calls this \"la cadence majeure\", the rising cadence that sounds conclusive. Four can work if the fourth breaks the pattern (an interpellation, a shift to \"nous\").",
        ],
        examples: [
          { es: "Qui paiera ? Qui attendra ? Qui renoncera, faute de place, à apprendre à lire ?", en: "Who will pay? Who will wait? Who will give up, for lack of room, learning to read?" },
          { es: "Voulons-nous une ville qui ferme ? Voulons-nous une ville qui trie ? Ou voulons-nous une ville qui accueille ?", en: "Do we want a town that closes? A town that sorts people? Or a town that welcomes?" },
          { es: "Qui a vu ? Qui a su ? Qui, pendant tout ce temps, a choisi de se taire ?", en: "Who saw? Who knew? Who, all that time, chose to keep quiet?" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which series has the rising cadence, la cadence majeure?",
            options: ["Qui part ? Qui reste ? Qui, demain, tiendra encore la boutique ?", "Qui, demain, tiendra encore la boutique ? Qui reste ? Qui part ?", "Qui reste, et pour combien de temps encore ? Qui part ? Qui ?", "Qui part ? Qui, demain, tiendra encore la boutique ? Qui reste ?"],
            correctIndex: 0,
            explanation: "In la cadence majeure each member is a little longer than the last, so the longest question comes at the end and sounds conclusive.",
          },
          {
            type: "listen-choose",
            audio: "Voulons-nous un quartier qui s'endort ? Ou voulons-nous un quartier qui vit ?",
            question: "What does it mean?",
            options: ["Do we want a neighbourhood that falls asleep, or one that is alive?", "Is the neighbourhood asleep or alive?", "We want a neighbourhood where people sleep and live.", "Who wants to live in a sleepy neighbourhood?"],
            correctIndex: 0,
            explanation: "The frame \"voulons-nous un quartier qui...\" is repeated, and the last member breaks the pattern with \"ou\": the choice it leaves is no choice at all.",
          },
        ],
      },
      {
        heading: "The release",
        body: [
          "After the series comes the release: either a short answer (\"Nulle part.\"), or a call to action introduced by \"Alors\" or \"Eh bien\": \"Alors, oui, gardons-la ouverte, parce qu'elle est la dernière maison commune de ce quartier.\" The contrast between long questions and a short answer is what makes the audience applaud.",
        ],
        examples: [
          { es: "Où iront-ils ? Nulle part.", en: "Where will they go? Nowhere." },
          { es: "Alors, oui, gardons-la ouverte, parce qu'elle est la dernière maison commune de ce quartier.", en: "So yes, let's keep it open, because it is the last shared home in this neighbourhood." },
          { es: "Eh bien, ce sera nous, si nous ne faisons rien.", en: "Well, it will be us, if we do nothing." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which ending works best after a series of three questions?",
            options: ["Alors, oui, gardons-la ouverte.", "Où iront les associations ?", "Je vais maintenant vous présenter le budget.", "Voilà, c'est tout, merci."],
            correctIndex: 0,
            explanation: "The release is a short call to action; a fourth question or a flat ending deflates the series.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (the release after the series).",
            source: "So yes, let's save this pool, because it is the only one in the neighbourhood.",
            answer: "Alors, oui, sauvons cette piscine, parce que c'est la seule du quartier.",
            altAnswers: ["Alors, oui, sauvons cette piscine, car c'est la seule du quartier.", "Eh bien, sauvons cette piscine, parce que c'est la seule du quartier.", "Alors, oui, sauvons cette piscine, parce que c'est la seule dans le quartier."],
            explanation: "After the series comes the release: \"alors\" or \"eh bien\" + an imperative in the \"nous\" form (\"sauvons\"), shorter than the questions before it.",
          },
        ],
      },
      {
        heading: "Vary the inside, never the frame",
        body: [
          "Vary the inside of each member, never the frame: same opening words, different verbs and images. If the questions are interchangeable, the series sounds mechanical.",
        ],
        examples: [
          { es: "Qui paiera la facture ? Qui fermera la porte ? Qui l'expliquera aux enfants ?", en: "Who will pay the bill? Who will close the door? Who will explain it to the children?" },
          { es: "Faut-il fermer la piscine ? Faut-il vendre le terrain ? Faut-il oublier les nageurs du dimanche ?", en: "Must we close the pool? Must we sell the land? Must we forget the Sunday swimmers?" },
          { es: "Même début, autres verbes, autres images.", en: "Same opening, other verbs, other images." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Où iront les apprentis qui doit partir tôt ?",
            answer: "Où iront les apprentis qui doivent partir tôt ?",
            explanation: "Inside each member, the verb of the \"qui\" clause agrees with its antecedent: \"les apprentis qui doivent\", plural.",
          },
        ],
      },
      {
        heading: "Signs of overload",
        body: [
          "Signs of overload: more than four questions, frames that change mid-series, questions whose answer is genuinely unclear (the audience starts thinking instead of feeling), or a series in a written report, where it sounds like shouting. Above all, a series that comes too early: it belongs at the climax, not in the introduction.",
        ],
        examples: [
          { es: "Six questions identiques lassent l'auditoire au lieu de l'émouvoir.", en: "Six identical questions tire the audience instead of moving it." },
          { es: "La série interrogative a sa place à la fin du discours, pas dans l'introduction.", en: "The series of questions belongs at the end of the speech, not in the introduction." },
          { es: "Dans un rapport écrit, une telle série paraît déclamatoire.", en: "In a written report, such a series seems bombastic." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which is a sign that a series of questions is overloaded?",
            options: ["The frame changes halfway through", "Each question is a little longer than the last", "It comes at the climax of the speech", "It is followed by a short answer"],
            correctIndex: 0,
            explanation: "Changing the frame mid-series breaks the anaphora. The other three are features of a well-built series.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "In a dissertation, a series of questions [seems bombastic].",
            sentence: "Dans une dissertation, une série de questions ___.",
            answer: "paraît déclamatoire",
            altAnswers: ["semble déclamatoire", "paraît grandiloquente", "semble grandiloquente"],
            explanation: "On the page a series sounds like shouting: \"paraître déclamatoire\" (to seem bombastic).",
          },
        ],
      },
      {
        heading: "Cut, don't polish",
        body: [
          "Editing a heavy series means cutting, not polishing. From \"Où iront les lycéens ? Où iront les retraités ? Où iront les chômeurs ? Où iront les mères de famille ? Où iront les associations ? Où iront les enfants ?\", keep the three most concrete and most contrasted groups, and give each a detail. Six bare questions become three vivid ones.",
        ],
        examples: [
          { es: "Mieux vaut trois questions précises que six questions vagues.", en: "Better three precise questions than six vague ones." },
          { es: "Où iront les lycéens ? Où iront les retraités ? Où iront les chômeurs ? Où iront les mères de famille ?", en: "Where will the sixth-formers go? The pensioners? The unemployed? The mothers? (too many, too bare)" },
          { es: "Six questions nues deviennent trois questions vivantes.", en: "Six bare questions become three vivid ones." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A series has six bare « Où iront... ? » questions. What does the method tell you to do?",
            options: ["Keep the three most concrete, contrasted groups and give each a detail", "Keep the first three questions as they are", "Keep all six but say them faster", "Change the frame of each question"],
            correctIndex: 0,
            explanation: "Editing a heavy series means cutting, not polishing: three vivid, contrasted groups, each with a detail, beat six bare ones.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Better one vivid question than ten vague ones.",
            answer: "Mieux vaut une question vivante que dix questions vagues.",
            altAnswers: ["Mieux vaut une seule question vivante que dix questions vagues.", "Mieux vaut une question frappante que dix questions vagues."],
            explanation: "\"Mieux vaut A que B\" puts the verb first, with no \"il\": the compact form of a piece of advice.",
          },
        ],
      },
      {
        heading: "One question can do more",
        body: [
          "And always ask: does the series say something new, or does it only shout louder? If it only shouts, one well-placed question (\"Qui, ici, oserait le leur dire en face ?\") does more.",
        ],
        examples: [
          { es: "Qui, ici, oserait le leur dire en face ?", en: "Who here would dare tell them that to their face?" },
          { es: "Qui, dans cette salle, accepterait cela pour ses propres enfants ?", en: "Who in this room would accept that for their own children?" },
          { es: "Une seule question bien placée vaut mieux qu'une série qui crie.", en: "A single well-placed question is better than a series that shouts." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            explanation: "The conditional \"oserait\" makes the single question rhetorical: nobody would dare. The object pronouns go \"le leur\" before the infinitive.",
            en: "[Who among you would dare] announce it to them?",
            sentence: "___ le leur annoncer ?",
            answer: "Qui, parmi vous, oserait",
            altAnswers: ["Qui parmi vous oserait", "Qui d'entre vous oserait"],
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Where will the shopkeepers who open at dawn go?",
        answer: "Où iront les commerçants qui ouvrent à l'aube ?",
        altAnswers: ["Où iront les commerçants qui ouvrent dès l'aube ?", "Où vont aller les commerçants qui ouvrent à l'aube ?"],
        explanation: "The frame \"où iront\" + a group made concrete by a \"qui\" clause.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (to the council).",
        source: "And you, councillors, how will you explain your choice to them?",
        answer: "Et vous, mesdames et messieurs les élus, comment leur expliquerez-vous votre choix ?",
        altAnswers: ["Et vous, mesdames et messieurs les conseillers, comment leur expliquerez-vous votre choix ?", "Et vous, mesdames et messieurs les élus, comment allez-vous leur expliquer votre choix ?", "Et vous, chers élus, comment leur expliquerez-vous votre choix ?"],
        explanation: "The interpellation breaks the series and points it at the decision-makers.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Who will help them? Nobody.",
        answer: "Qui les aidera ? Personne.",
        altAnswers: ["Qui va les aider ? Personne."],
        explanation: "The release can be one word: a long question, a short answer.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Do we want a school that excludes, or a school that includes?",
        answer: "Voulons-nous une école qui exclut, ou une école qui inclut ?",
        altAnswers: ["Voulons-nous une école qui exclut, ou bien une école qui inclut ?", "Voulons-nous une école qui exclut ou une école qui intègre ?"],
        explanation: "The frame (\"une école qui\") stays identical; only the verb changes, and \"ou\" signals the final, decisive member.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Well, it will be up to us to take them in.",
        words: ["Eh bien,", "ce sera", "à nous", "de les accueillir."],
        translation: "Well, it will be up to us to take them in.",
        explanation: "\"Eh bien\" introduces the release; \"ce sera à nous de\" + infinitive turns the series into a call to action.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The series belongs at the climax, not at the start.",
        answer: "La série a sa place au point culminant, pas au début.",
        altAnswers: ["La série trouve sa place au point culminant, pas au début.", "La série a sa place au sommet du discours, pas au début.", "La série a sa place à l'apogée du discours, pas au début."],
        explanation: "\"Avoir sa place\" (to belong): a series placed too early has nowhere to climb.",
      },
      {
        type: "word-order",
        explanation: "Frame first (\"où iront\"), then the group, then the \"qui\" clause that makes it concrete.",
        prompt: "Put the words in order to say: Where will the nurses who work at night go?",
        words: ["Où iront", "les infirmières", "qui travaillent", "la nuit ?"],
        translation: "Where will the nurses who work at night go?",
      },
      {
        type: "dictation",
        audio: "Une série trop longue lasse l'auditoire.",
        explanation: "\"Lasser\" (to tire, to bore): the risk of a series with too many members.",
      },
      {
        type: "speak",
        text: "Où iront les lycéens qui révisent le soir ? Où iront les retraités qui lisent le journal au chaud ? Où iront les enfants dont les parents n'ont pas de livres ?",
        prompt: "Say the closing series in French: Where will the students who revise in the evening go? The pensioners who read the paper in the warm? The children whose parents have no books?",
        tip: "Repeat \"Où iront\" with the same stress each time; slow down for the third question.",
        explanation: "A ternary series with anaphora and rising length: the cadence majeure.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "Who will give up the course [for lack of] money?",
        sentence: "Qui renoncera au cours ___ moyens ?",
        answer: "faute de",
        explanation: "\"Faute de\" + noun with no article (for lack of): a compact detail inside a member of the series.",
      },
    ],
  },
  {
    slug: "c2-rhetorical-questions-4",
    level: "FR-C2",
    number: 7,
    title: "Questions Rhétoriques et Structures d'Emphase, Part 4 of 7",
    summary: "The neighbours of the rhetorical question: interpellation (et vous, monsieur le ministre, qu'avez-vous fait ?), dubitation or feigned doubt, prétérition (je ne parlerai pas de...) and dismissive questions (et alors ?, serait-ce que... ?).",
    duration: "21 min",
    sections: [
      {
        heading: "L'interpellation",
        body: [
          "\"L'interpellation\" is a sudden address to a specific person or group, by name or title, usually with a question: \"Et vous, monsieur le ministre, qu'avez-vous fait ?\". In Parliament, \"interpeller le gouvernement\" is also the official act of questioning it. The device breaks the speech's frame: the audience watches the person addressed, who is put on the spot.",
        ],
        examples: [
          { es: "Et vous, monsieur le ministre, qu'avez-vous fait pendant ces cinq années ?", en: "And you, Minister, what did you do during those five years?" },
          { es: "L'opposition a interpellé le gouvernement sur la hausse des prix de l'énergie.", en: "The opposition questioned the government about rising energy prices." },
          { es: "Le député a interpellé la ministre sur la fermeture des maternités.", en: "The MP questioned the minister about the closure of maternity units." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "« Et vous, madame la maire, qu'avez-vous fait ? » What is the speaker doing?",
            options: ["Putting one specific person on the spot", "Asking the whole audience for information", "Pretending not to know what to say", "Passing over a topic in silence"],
            correctIndex: 0,
            explanation: "An interpellation suddenly addresses one person or group by name or title, so the audience turns to watch them.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The unions questioned the minister about pensions.",
            answer: "Les syndicats ont interpellé le ministre sur les retraites.",
            altAnswers: ["Les syndicats ont interpellé la ministre sur les retraites.", "Les syndicats ont interpellé le ministre au sujet des retraites.", "Les syndicats ont interpellé la ministre au sujet des retraites."],
            explanation: "\"Interpeller quelqu'un sur\" + topic is the official act of questioning someone in public: \"interpeller le ministre sur les retraites\".",
          },
        ],
      },
      {
        heading: "The formula: et vous + title",
        body: [
          "The formula: \"Et vous\" or \"Et toi\" + title or name between commas + question. Titles in French interpellation: \"monsieur le ministre\", \"madame la présidente\", \"mesdames et messieurs les députés\", \"chers collègues\". In Beaumarchais's Le Mariage de Figaro, the servant interpellates his absent master: « Parce que vous êtes un grand seigneur, vous vous croyez un grand génie ! [...] Qu'avez-vous fait pour tant de biens ? »",
        ],
        examples: [
          { es: "Mesdames et messieurs les députés, regarderez-vous ces familles en face ?", en: "Members of Parliament, will you look these families in the eye?" },
          { es: "Et toi, Karim, tu aurais fait quoi à ma place ?", en: "And you, Karim, what would you have done in my place?" },
          { es: "Parce que vous êtes un grand seigneur, vous vous croyez un grand génie !", en: "Because you are a great lord, you think you're a great genius! (Beaumarchais)" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into an interpellation with Et vous and the title madame la présidente.",
            source: "Qu'allez-vous faire pour ces familles ?",
            answer: "Et vous, madame la présidente, qu'allez-vous faire pour ces familles ?",
            explanation: "The formula is \"Et vous\" + title between commas + the question: \"Et vous, madame la présidente, ...\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Et toi, Julie, qu'en pensez-vous ?",
            answer: "Et toi, Julie, qu'en penses-tu ?",
            altAnswers: ["Et vous, Julie, qu'en pensez-vous ?"],
            explanation: "\"Et toi\" sets up the tu form, so the question must keep it: \"qu'en penses-tu ?\". Mixing toi and vous breaks the address.",
          },
        ],
      },
      {
        heading: "Zola: the courteous attack",
        body: [
          "Zola's J'accuse (1898) is itself an interpellation in letter form, addressed to the President of the Republic: « Monsieur le Président, [...] me permettez-vous [...] d'avoir le souci de votre juste gloire [...] ? » The courtesy of the address makes the accusations that follow even sharper.",
        ],
        examples: [
          { es: "Monsieur le Président, permettez-moi de vous poser une question.", en: "Mr President, allow me to ask you a question." },
          { es: "« J'accuse » est une lettre ouverte au président de la République.", en: "\"J'accuse\" is an open letter to the President of the Republic." },
          { es: "Madame la ministre, me permettrez-vous de vous rappeler vos promesses ?", en: "Minister, will you allow me to remind you of your promises?" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Why does Zola open his letter with a polite address to the President?",
            options: ["The courtesy makes the accusations that follow sharper", "He wants to apologise to the President", "Newspapers banned any other opening", "He is asking the President for a personal favour"],
            correctIndex: 0,
            explanation: "A courteous interpellation (\"Monsieur le Président, me permettez-vous...?\") contrasts with what follows, so the accusations strike harder.",
          },
        ],
      },
      {
        heading: "La dubitation: feigned doubt",
        body: [
          "\"La dubitation\" is a show of hesitation: the speaker pretends not to know how to say something, or what to think, in order to emphasise it. \"Comment dire ?\" (how shall I put it?), \"Que dire de plus ?\", \"Faut-il en rire ou en pleurer ?\", \"Comment qualifier une telle attitude ?\", \"Que penser d'un gouvernement qui... ?\".",
        ],
        examples: [
          { es: "Faut-il en rire ou en pleurer ?", en: "Should we laugh or cry about it?" },
          { es: "Que penser d'un gouvernement qui annonce une réforme sans en connaître le coût ?", en: "What is one to think of a government that announces a reform without knowing its cost?" },
          { es: "Que dire de plus ?", en: "What more is there to say?" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "What is one to think of a mayor who closes the school without consulting anyone?",
            answer: "Que penser d'un maire qui ferme l'école sans consulter personne ?",
            altAnswers: ["Que penser d'un maire qui ferme l'école sans avoir consulté personne ?", "Que penser d'un maire qui ferme l'école sans consulter qui que ce soit ?", "Que faut-il penser d'un maire qui ferme l'école sans consulter personne ?"],
            explanation: "\"Que penser de\" + infinitive question feigns doubt; \"sans\" + infinitive takes \"personne\" without \"ne\".",
          },
        ],
      },
      {
        heading: "The doubt is fake",
        body: [
          "The doubt is fake: the speaker knows exactly what to say, and the hesitation prepares a stronger word (\"Comment qualifier une telle attitude ? Le mot qui me vient est celui de mépris.\") or lets the audience fill the gap with something harsher than the speaker could decently say.",
        ],
        examples: [
          { es: "Comment qualifier une telle attitude ? Le mot qui me vient est celui de mépris.", en: "How should one describe such an attitude? The word that comes to mind is contempt." },
          { es: "Dois-je m'en réjouir ou m'en inquiéter ? Je vous laisse juges.", en: "Should I be pleased or worried? I'll let you be the judges." },
          { es: "Comment appeler cela ? Il n'y a qu'un mot : une trahison.", en: "What should one call this? There is only one word: betrayal." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "How should one describe this silence? [The word that comes to mind is] cowardice.",
            sentence: "Comment qualifier ce silence ? ___ lâcheté.",
            answer: "Le mot qui me vient est celui de",
            altAnswers: ["Le mot qui me vient à l'esprit est celui de"],
            explanation: "The feigned hesitation prepares a stronger word: \"le mot qui me vient est celui de\" + noun, with \"celui\" standing for \"le mot\".",
          },
        ],
      },
      {
        heading: "Comment dire... in everyday speech",
        body: [
          "In everyday speech, \"comment dire\" and \"je ne sais pas, moi\" do the same: \"Il est, comment dire... un peu spécial.\" The pause and the hesitation are the meaning: he's odd, and I'm being polite.",
        ],
        examples: [
          { es: "Il est, comment dire... un peu spécial.", en: "He's, how shall I put it... a bit peculiar." },
          { es: "C'était, comment dire... original.", en: "It was, how shall I put it... original." },
          { es: "Elle est, je ne sais pas, moi... un peu froide.", en: "She's, I don't know... a bit cold." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Son discours était, comment dire... un peu long.",
            question: "What is the speaker suggesting?",
            options: ["It was far too long, and I'm saying so politely.", "I can't remember how long it was.", "It was short and to the point.", "He asked me how to say it."],
            correctIndex: 0,
            explanation: "The pause after \"comment dire\" is the meaning: the speaker is being tactful about something worse than \"un peu long\".",
          },
        ],
      },
      {
        heading: "La prétérition",
        body: [
          "\"La prétérition\" (paralipsis) announces that you will not mention something, and mentions it in the process: \"Je ne parlerai pas des 300 000 euros dépensés en frais de réception.\" The audience hears the figure, and the speaker appears above petty attacks. It is one of the most effective and most cynical devices in French political rhetoric.",
        ],
        examples: [
          { es: "Je ne parlerai pas des 300 000 euros dépensés en frais de réception.", en: "I won't mention the 300,000 euros spent on receptions." },
          { es: "Inutile de rappeler que le maire avait juré de ne jamais fermer cette école.", en: "Needless to recall that the mayor had sworn never to close this school." },
          { es: "Je ne dirai rien des voyages en jet privé.", en: "I will say nothing about the private-jet trips." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "\"Je ne parlerai pas des 300 000 euros dépensés en réceptions.\" What device is this?",
            options: ["la prétérition", "l'interpellation", "la dubitation", "l'hypophore"],
            correctIndex: 0,
            explanation: "Announcing you won't mention something while mentioning it is a prétérition.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (prétérition).",
            source: "I won't mention the broken promises.",
            answer: "Je ne parlerai pas des promesses non tenues.",
            altAnswers: ["Je ne mentionnerai pas les promesses non tenues.", "Je passerai sous silence les promesses non tenues.", "Je n'évoquerai pas les promesses non tenues."],
            explanation: "\"Parler de\" + \"les\" = \"des\"; a broken promise is \"une promesse non tenue\".",
          },
        ],
      },
      {
        heading: "Formulas, used sparingly",
        body: [
          "Formulas: \"je ne parlerai pas de\", \"je passerai sous silence\", \"inutile de rappeler que\", \"je n'insisterai pas sur\", \"sans même évoquer\", \"je ne reviendrai pas sur\", \"passons sur\" (let's pass over). \"Faut-il rappeler que... ?\" from Part 1 is the interrogative version.",
          "Recognise it when it's used against you, and use it sparingly: a whole speech of prétéritions reads as a list of insinuations.",
        ],
        examples: [
          { es: "Je passerai sous silence les promesses non tenues de la dernière campagne.", en: "I will pass over the broken promises of the last campaign." },
          { es: "Sans même évoquer le coût du projet, son utilité reste à démontrer.", en: "Without even mentioning the project's cost, its usefulness has yet to be shown." },
          { es: "Passons sur les retards ; parlons des résultats.", en: "Let's pass over the delays; let's talk about the results." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into a prétérition with inutile de rappeler que.",
            source: "Le maire avait promis une piscine.",
            answer: "Inutile de rappeler que le maire avait promis une piscine.",
            altAnswers: ["Il est inutile de rappeler que le maire avait promis une piscine."],
            explanation: "\"Inutile de rappeler que\" + indicative announces that you won't say it, and says it anyway.",
          },
        ],
      },
      {
        heading: "Et alors ? Et quand bien même ?",
        body: [
          "Some questions shut down the opponent's point rather than open a reflection. \"Et alors ?\" (so what?) and \"Et après ?\" deny that a fact matters. \"Et quand bien même ?\" (and even if that were so?) grants a point only to wave it away. They are blunt, and in a formal debate \"Et alors ?\" sounds aggressive; use them in conversation or in a deliberately combative style.",
        ],
        examples: [
          { es: "Il est arrivé en retard. Et alors ? Le travail a été fait.", en: "He arrived late. So what? The work got done." },
          { es: "La mesure coûterait cher ? Et quand bien même ?", en: "The measure would be expensive? Even if it were?" },
          { es: "Les sondages sont mauvais. Et après ? Les élections sont dans deux ans.", en: "The polls are bad. So what? The elections are two years away." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In a formal televised debate, which reply sounds most aggressive?",
            options: ["Et alors ?", "Je vous rejoins sur ce point.", "Permettez-moi de nuancer.", "Serait-ce que les chiffres vous gênent ?"],
            correctIndex: 0,
            explanation: "\"Et alors ?\" dismisses bluntly; \"serait-ce que\" is barbed but elegant.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "She left early. So what? Her report is finished.",
            answer: "Elle est partie tôt. Et alors ? Son rapport est terminé.",
            altAnswers: ["Elle est partie tôt. Et alors ? Son rapport est fini.", "Elle est partie de bonne heure. Et alors ? Son rapport est terminé.", "Elle est partie tôt. Et après ? Son rapport est terminé."],
            explanation: "\"Et alors ?\" denies that the fact matters, and the speaker gives the reason at once.",
          },
        ],
      },
      {
        heading: "Serait-ce que...?",
        body: [
          "\"Serait-ce que... ?\" (could it be that...?) is the insinuating question: the conditional pretends to wonder, while suggesting an unflattering explanation: \"Vous refusez de publier le rapport. Serait-ce qu'il contredit vos chiffres ?\". It is elegant, and very hard to answer without seeming defensive.",
        ],
        examples: [
          { es: "Vous refusez de publier le rapport. Serait-ce qu'il contredit vos chiffres ?", en: "You refuse to publish the report. Could it be that it contradicts your figures?" },
          { es: "Serait-ce que vous avez quelque chose à cacher ?", en: "Could it be that you have something to hide?" },
          { es: "Vous changez de sujet. Serait-ce que la question vous gêne ?", en: "You are changing the subject. Could it be that the question bothers you?" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it insinuating with serait-ce que.",
            source: "Vous évitez les journalistes. Avez-vous peur de leurs questions ?",
            answer: "Vous évitez les journalistes. Serait-ce que vous avez peur de leurs questions ?",
            explanation: "\"Serait-ce que\" + indicative: the conditional pretends to wonder while suggesting an unflattering explanation.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (an interpellation).",
        source: "Councillors, will you vote against your own district?",
        answer: "Mesdames et messieurs les conseillers, voterez-vous contre votre propre quartier ?",
        altAnswers: ["Mesdames et messieurs les élus, voterez-vous contre votre propre quartier ?", "Chers collègues, voterez-vous contre votre propre quartier ?", "Mesdames et messieurs les conseillers municipaux, voterez-vous contre votre propre quartier ?"],
        explanation: "An interpellation opens with the title of the group addressed, then a question with inversion.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (feigned doubt).",
        source: "How should one describe such an attitude?",
        answer: "Comment qualifier une telle attitude ?",
        altAnswers: ["Comment qualifier pareille attitude ?", "Comment décrire une telle attitude ?", "Comment qualifier un tel comportement ?"],
        explanation: "\"Qualifier\" = to describe as, to characterise; \"une telle\" (such a) agrees with \"attitude\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (prétérition).",
        source: "Let's pass over the delays.",
        answer: "Passons sur les retards.",
        altAnswers: ["Passons sous silence les retards.", "Ne parlons pas des retards."],
        explanation: "\"Passer sur\" = to pass over; the imperative \"passons\" includes the audience.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "The minister is silent. [Could it be that] he has no answer?",
        sentence: "Le ministre se tait. ___ il n'a pas de réponse ?",
        answer: "Serait-ce qu'",
        explanation: "\"Serait-ce que\" elides before a vowel (\"serait-ce qu'il\") and insinuates an unflattering reason.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: And you, Sophie, what would you have said in his place?",
        words: ["Et toi,", "Sophie,", "qu'aurais-tu", "dit à sa place ?"],
        translation: "And you, Sophie, what would you have said in his place?",
        explanation: "Informal interpellation: \"Et toi\" + first name between commas, then the tu question.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Some people would complain? Even if they did?",
        answer: "Certains se plaindraient ? Et quand bien même ?",
        altAnswers: ["Des gens se plaindraient ? Et quand bien même ?", "Certains se plaindraient ? Quand bien même ?"],
        explanation: "\"Et quand bien même ?\" grants the point only to wave it away.",
      },
      {
        type: "listen-choose",
        audio: "Faut-il s'en réjouir ou s'en inquiéter ?",
        question: "What does it mean?",
        options: ["Should we be pleased or worried about it?", "We must be pleased, not worried.", "Who is pleased and who is worried?", "Is it necessary to worry before being pleased?"],
        correctIndex: 0,
        explanation: "Feigned doubt with \"faut-il... ou...?\": the speaker leaves the audience to decide, while hinting at the answer.",
      },
      {
        type: "dictation",
        audio: "Je passerai sous silence les promesses non tenues.",
        explanation: "\"Passer sous silence\" = to pass over; \"tenues\" agrees with \"promesses\".",
      },
      {
        type: "speak",
        text: "Et vous, madame la maire, où étiez-vous pendant la crise ?",
        prompt: "Say it in French: And you, Madam Mayor, where were you during the crisis?",
        tip: "Pause after \"Et vous\", turn towards the person, then ask slowly.",
        explanation: "\"Et vous\" + title between commas puts one person on the spot.",
      },
      {
        type: "speak",
        text: "Je n'insisterai pas sur les comptes de la campagne.",
        prompt: "Say it in French: I will not dwell on the campaign accounts.",
        explanation: "\"Je n'insisterai pas sur\" is a prétérition: the audience hears exactly what you claim to skip.",
      },
    ],
  },
  {
    slug: "c2-interpellation-feigned-doubt-contrast",
    level: "FR-C2",
    number: 8,
    title: "Contrast Clinic: Interpellation, Dubitation et Question Rhétorique",
    summary: "« Et vous, qu'avez-vous fait ? », « Comment dire cela sans blesser ? », « Est-ce vraiment important ? »: three devices with three different targets and effects; identify each, then produce all three from the same idea.",
    duration: "19 min",
    sections: [
      {
        heading: "Who is the question aimed at?",
        body: [
          "The quickest way to tell the three devices apart is to ask who the question targets. The interpellation targets one identified person or group, named or titled: \"Et vous, monsieur le maire, qu'avez-vous fait ?\". The rhetorical question targets the whole audience, who are invited to supply the obvious answer: \"Qui pourrait accepter cela ?\". The dubitation targets the speaker himself, who stages his own hesitation: \"Comment dire cela sans blesser ?\".",
        ],
        examples: [
          { es: "Et vous, monsieur le maire, qu'avez-vous fait pour ce quartier ?", en: "And you, Mayor, what have you done for this neighbourhood? (interpellation)" },
          { es: "Qui pourrait accepter qu'on ferme la seule école du village ?", en: "Who could accept the closure of the village's only school? (rhetorical question)" },
          { es: "Comment dire cela sans blesser personne ?", en: "How can I say this without hurting anyone? (dubitation)" },
        ],
        checkpoint: [
          {
            type: "matching",
            instructions: "Match each question with its device.",
            pairs: [
              { left: "Et vous, madame la présidente, qu'en pensez-vous ?", right: "interpellation" },
              { left: "Qui pourrait accepter cela ?", right: "rhetorical question" },
              { left: "Comment dire cela sans blesser ?", right: "dubitation (feigned doubt)" },
            ],
            explanation: "Target one person, the whole audience, or the speaker himself.",
          },
        ],
      },
      {
        heading: "Three different effects",
        body: [
          "So the effects differ. Interpellation puts someone on the spot and dramatises a confrontation. The rhetorical question creates consensus: we all agree. The dubitation creates suspense and complicity: you watch me search for the word, and you guess it before I say it.",
        ],
        examples: [
          { es: "N'est-ce pas là le cœur du problème ?", en: "Isn't that the heart of the problem? (rhetorical question)" },
          { es: "Toi qui donnes des leçons à tout le monde, as-tu seulement lu le dossier ?", en: "You who lecture everyone, have you even read the file? (interpellation)" },
          { es: "Qui, ici, n'a jamais attendu des mois un rendez-vous ?", en: "Who here has never waited months for an appointment? (consensus)" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which device creates consensus, the feeling that we all agree?",
            options: ["The rhetorical question", "The interpellation", "The dubitation", "The prétérition"],
            correctIndex: 0,
            explanation: "The rhetorical question targets the whole audience and lets them supply the obvious answer together; the interpellation confronts one person, and the dubitation builds suspense.",
          },
        ],
      },
      {
        heading: "Grammar follows the target",
        body: [
          "Grammar follows: the interpellation uses \"vous\" or \"tu\" with a vocative (a name or title between commas); the rhetorical question often uses \"qui\", \"comment ne pas\", \"n'est-ce pas\", or a negative; the dubitation uses \"je\", \"comment dire\", \"que penser\", \"dois-je\", \"faut-il\".",
        ],
        examples: [
          { es: "Dois-je y voir de la naïveté ou du cynisme ?", en: "Should I see naivety or cynicism in it? (dubitation)" },
          { es: "Toi, Paul, tu trouves ça juste ?", en: "You, Paul, do you think that's fair? (interpellation)" },
          { es: "Que penser d'un tel silence ?", en: "What is one to think of such silence? (dubitation)" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into an interpellation addressed to monsieur le directeur.",
            source: "Qu'a-t-on fait pour les salariés ?",
            answer: "Et vous, monsieur le directeur, qu'avez-vous fait pour les salariés ?",
            altAnswers: ["Monsieur le directeur, qu'avez-vous fait pour les salariés ?"],
            explanation: "An interpellation uses \"vous\" or \"tu\" with a vocative (a title between commas), so the impersonal \"on\" becomes \"vous\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Vous qui parlez si bien de l'école, y as-tu seulement mis les pieds ?",
            answer: "Vous qui parlez si bien de l'école, y avez-vous seulement mis les pieds ?",
            altAnswers: ["Toi qui parles si bien de l'école, y as-tu seulement mis les pieds ?"],
            explanation: "The vocative \"vous qui...\" sets the vous form, and the question must keep it: \"y avez-vous\".",
          },
        ],
      },
      {
        heading: "Staged doubt or real hesitation?",
        body: [
          "Each device has a genuine twin. \"Comment dire...\" can be real hesitation in an interview, when a speaker is truly searching for a word; staged doubt is recognisable because the word that follows is strong and well chosen (\"Comment qualifier cette décision ? D'irresponsable.\"). Real hesitation is followed by a vaguer word, a correction, or a filler (\"euh\", \"enfin\", \"disons\").",
        ],
        examples: [
          { es: "Comment qualifier cette décision ? D'irresponsable.", en: "How should this decision be described? As irresponsible. (staged doubt)" },
          { es: "C'est, euh, disons... compliqué.", en: "It's, er, let's say... complicated. (real hesitation)" },
          { es: "Comment appeler ce choix ? Une faute.", en: "What should one call this choice? A mistake. (staged doubt)" },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "C'était, enfin, je veux dire... pas mal.",
            question: "What does this sound like?",
            options: ["Real hesitation, ending in a vague word", "Staged doubt preparing a strong word", "An interpellation", "A rhetorical question"],
            correctIndex: 0,
            explanation: "The filler \"enfin, je veux dire\" and the vague \"pas mal\" mark real hesitation: staged doubt would land on a strong, well-chosen word.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (staged doubt with a strong answer).",
            source: "How should this reform be described? As unfair.",
            answer: "Comment qualifier cette réforme ? D'injuste.",
            altAnswers: ["Comment qualifier cette réforme ? D'inique.", "Comment qualifier cette réforme ? D'inéquitable."],
            explanation: "Staged doubt ends on a strong, well-chosen word. \"Qualifier de\" + adjective, so the answer starts with \"d'\".",
          },
        ],
      },
      {
        heading: "Real question or dismissal?",
        body: [
          "Likewise \"Est-ce vraiment important ?\" can be a real question in a meeting (\"est-ce vraiment important de tout traduire ?\") or a dismissal (= it doesn't matter). The clue is again what follows: a real question waits for an answer; a rhetorical one moves straight on.",
        ],
        examples: [
          { es: "Est-ce vraiment important de tout traduire ? Je pose la question.", en: "Is it really important to translate everything? I'm asking. (a real question)" },
          { es: "Est-ce vraiment important ? Passons.", en: "Is it really important? Let's move on. (dismissal)" },
          { es: "Est-ce vraiment nouveau ? Avançons.", en: "Is it really new? Let's move forward. (dismissal)" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "\"Est-ce vraiment important ? Passons.\" What is the speaker doing?",
            options: ["Dismissing the point as unimportant", "Asking the audience to vote on its importance", "Hesitating about what to say next", "Interpellating the chair"],
            correctIndex: 0,
            explanation: "No pause for an answer and an immediate \"passons\": a dismissive rhetorical question.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Is it really serious? Let's carry on.",
            answer: "Est-ce vraiment grave ? Continuons.",
            altAnswers: ["Est-ce vraiment grave ? Poursuivons.", "Est-ce si grave ? Continuons.", "C'est vraiment grave ? Continuons."],
            explanation: "The dismissal moves straight on with a \"nous\" imperative (\"continuons\"): no one is given time to answer.",
          },
        ],
      },
      {
        heading: "Real request or rhetorical interpellation?",
        body: [
          "And an interpellation can be a real request for information when addressed to someone who can answer (\"Madame la directrice, pouvez-vous nous donner le chiffre ?\"). It becomes a rhetorical interpellation when the speaker doesn't wait, or when the answer is presumed shameful (\"Qu'avez-vous fait ? Rien.\").",
        ],
        examples: [
          { es: "Madame la directrice, pouvez-vous nous donner le chiffre exact ?", en: "Director, can you give us the exact figure? (a real request)" },
          { es: "Monsieur le ministre, qu'avez-vous fait ? Rien.", en: "Minister, what have you done? Nothing. (rhetorical interpellation)" },
          { es: "Monsieur le président, quand le rapport sera-t-il publié ?", en: "Chairman, when will the report be published? (a real request)" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "« Madame la ministre, qu'avez-vous fait ? Rien. » What makes this interpellation rhetorical?",
            options: ["The speaker answers at once instead of waiting", "It uses a title", "It is in the past tense", "It asks for a figure"],
            correctIndex: 0,
            explanation: "An interpellation becomes rhetorical when the speaker doesn't wait for the reply, or presumes a shameful one: \"Rien.\"",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (a real request).",
            source: "Chairman, can you tell us the date of the vote?",
            answer: "Monsieur le président, pouvez-vous nous indiquer la date du vote ?",
            altAnswers: ["Monsieur le président, pouvez-vous nous donner la date du vote ?", "Monsieur le président, pouvez-vous nous dire la date du vote ?", "Madame la présidente, pouvez-vous nous indiquer la date du vote ?", "Madame la présidente, pouvez-vous nous donner la date du vote ?"],
            explanation: "Addressed to someone who can answer, an interpellation is a real request: title, then \"pouvez-vous nous\" + infinitive.",
          },
        ],
      },
      {
        heading: "One idea, three devices",
        body: [
          "Take one idea: the town council closed the youth centre without consulting anyone. As an interpellation: \"Et vous, mesdames et messieurs les élus, qui avez-vous consulté avant de fermer la maison des jeunes ?\". As a rhetorical question: \"Peut-on fermer un lieu fréquenté par deux cents adolescents sans même leur demander leur avis ?\". As dubitation: \"Comment qualifier une décision prise sans consulter ceux qu'elle concerne ? Je cherche le mot... Le mot, c'est mépris.\"",
        ],
        examples: [
          { es: "Et vous, mesdames et messieurs les élus, qui avez-vous consulté avant de fermer la maison des jeunes ?", en: "And you, councillors, whom did you consult before closing the youth centre?" },
          { es: "Peut-on fermer un lieu fréquenté par deux cents adolescents sans même leur demander leur avis ?", en: "Can a place used by two hundred teenagers be closed without even asking their opinion?" },
          { es: "Comment qualifier une décision prise sans consulter ceux qu'elle concerne ?", en: "How should one describe a decision taken without consulting those it concerns?" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (a rhetorical question).",
            source: "Can a place be closed without even asking the users' opinion?",
            answer: "Peut-on fermer un lieu sans même demander l'avis des usagers ?",
            altAnswers: ["Peut-on fermer un lieu sans même demander leur avis aux usagers ?", "Peut-on fermer un lieu sans même consulter les usagers ?", "Est-ce qu'on peut fermer un lieu sans même demander l'avis des usagers ?"],
            explanation: "\"Peut-on\" with inversion of \"on\": no answer expected; \"sans même\" + infinitive.",
          },
        ],
      },
      {
        heading: "Each device has its moment",
        body: [
          "Each is suited to a moment. The interpellation fits a public meeting where the councillors are present. The rhetorical question fits a newspaper tribune or a petition. The dubitation fits the climax of a speech, where a pause can be held.",
        ],
        examples: [
          { es: "En réunion publique, les élus sont là : on peut les interpeller.", en: "At a public meeting the councillors are present: you can address them directly." },
          { es: "Dans une pétition, la question rhétorique rassemble les signataires.", en: "In a petition, the rhetorical question unites the signatories." },
          { es: "Au sommet du discours, on peut tenir une pause de dubitation.", en: "At the climax of the speech, you can hold a pause of feigned doubt." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You are writing a newspaper tribune, and the councillors will not be in the room. Which device fits best?",
            options: ["A rhetorical question", "An interpellation of each councillor by name", "A dubitation with a long pause", "Real hesitation with fillers"],
            correctIndex: 0,
            explanation: "A rhetorical question suits a tribune or a petition; an interpellation needs the people present, and a held pause needs a live audience.",
          },
        ],
      },
      {
        heading: "Don't stack them",
        body: [
          "Avoid stacking all three in one paragraph: choose the device that serves the moment, and let the others wait for their turn.",
        ],
        examples: [
          { es: "Chaque procédé a son moment ; inutile de les empiler.", en: "Each device has its moment; there's no point piling them up." },
          { es: "Je cherche le mot... Le mot, c'est mépris.", en: "I'm searching for the word... The word is contempt." },
          { es: "Une seule question, bien choisie, suffit souvent.", en: "A single, well-chosen question is often enough." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: No point stacking the three devices.",
            words: ["Inutile", "d'empiler", "les trois", "procédés."],
            translation: "No point stacking the three devices.",
            explanation: "\"Inutile de\" + infinitive (no point doing): choose one device for the moment.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (an interpellation).",
        source: "And you, councillors, whom did you consult?",
        answer: "Et vous, mesdames et messieurs les élus, qui avez-vous consulté ?",
        altAnswers: ["Et vous, mesdames et messieurs les conseillers, qui avez-vous consulté ?", "Et vous, chers élus, qui avez-vous consulté ?", "Et vous, mesdames et messieurs les élus, qui est-ce que vous avez consulté ?"],
        explanation: "\"Et vous\" + title + question: the target is named.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (a rhetorical question).",
        source: "Isn't that the real scandal?",
        answer: "N'est-ce pas là le vrai scandale ?",
        altAnswers: ["N'est-ce pas cela, le vrai scandale ?", "N'est-ce pas là le véritable scandale ?", "N'est-ce pas le vrai scandale ?"],
        explanation: "A negative rhetorical question asserts: that is the scandal. \"Là\" points to what has just been said.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (dubitation).",
        source: "Should I call it negligence or incompetence?",
        answer: "Dois-je parler de négligence ou d'incompétence ?",
        altAnswers: ["Faut-il parler de négligence ou d'incompétence ?", "Dois-je appeler cela de la négligence ou de l'incompétence ?", "Dois-je parler de négligence ou bien d'incompétence ?"],
        explanation: "Dubitation uses \"je\" and a modal (\"dois-je\"): the speaker stages his own hesitation between two harsh words.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "[You who know the file so well], why did you say nothing?",
        sentence: "___, pourquoi n'avez-vous rien dit ?",
        answer: "Vous qui connaissez si bien le dossier",
        altAnswers: ["Vous qui connaissez si bien ce dossier"],
        explanation: "\"Vous qui\" + verb in the vous form is a vocative: the interpellation names its target by what they do.",
      },
      {
        type: "multiple-choice",
        question: "\"Comment qualifier cette décision ? D'irresponsable.\" Which device is this?",
        options: ["dubitation (staged doubt)", "interpellation", "real hesitation", "prétérition"],
        correctIndex: 0,
        explanation: "The speaker pretends to search, then lands on a strong, precise word.",
      },
      {
        type: "fill-blank",
        explanation: "Interpellation: \"Et vous\" + title between commas, then the vous question.",
        prompt: "Write the French for the bold words.",
        en: "[And you, Madam Director], what have you done for the staff?",
        sentence: "___, qu'avez-vous fait pour le personnel ?",
        answer: "Et vous, madame la directrice",
      },
      {
        type: "dictation",
        audio: "Comment le dire sans vexer personne ?",
        explanation: "Dubitation: the speaker stages a search for the right words. \"Sans\" + infinitive takes \"personne\" without \"ne\".",
      },
      {
        type: "speak",
        text: "Peut-on supprimer une ligne de bus utilisée par mille personnes sans même les prévenir ?",
        prompt: "Say it in French: Can a bus line used by a thousand people be cut without even warning them?",
        tip: "\"Deux cents adolescents\": liaison in z between cents and adolescents.",
        explanation: "A rhetorical question with \"peut-on\": the whole audience supplies the answer, no.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (dubitation).",
        source: "Who could seriously defend this choice?",
        answer: "Qui pourrait sérieusement défendre ce choix ?",
        altAnswers: ["Qui pourrait défendre sérieusement ce choix ?", "Qui pourrait défendre ce choix sérieusement ?"],
        explanation: "\"Qui pourrait\" + infinitive is a rhetorical question: nobody could.",
      },
      {
        type: "fill-blank",
        explanation: "Staged doubt ends on one strong word; \"en\" stands for \"de mots\" in \"il n'y en a qu'un\".",
        prompt: "Write the French for the bold words.",
        en: "I'm searching for the word... [There is only one]: arrogance.",
        sentence: "Je cherche le mot... ___ : l'arrogance.",
        answer: "Il n'y en a qu'un",
      },
    ],
  },
];

export const FR_C2_U19_WRITING: WriteExercise = {
  type: "write",
  prompt: "Your town plans to replace a public park with a car park. Write the text of a speech (to be read at a public meeting with the mayor present) opposing the project. Use at least one rhetorical question with reversed polarity, one hypophora, an interrogative series with anaphora, an interpellation of the mayor, and either a dubitation or a prétérition.",
  minWords: 250,
  maxWords: 400,
  rubric: [
    "Rhetorical questions that assert: \"qui pourrait nier que...\", \"n'est-ce pas...\", \"à quoi bon...\", \"comment ne pas...\".",
    "A hypophora with a short answer (\"Pourquoi ? Parce que...\", \"Qui paiera ? ...\", \"Est-ce à dire que... ? Certainement pas.\").",
    "A series of two to four questions with anaphora and escalation, followed by a release (\"Alors, oui, ...\").",
    "An interpellation (\"Et vous, madame la maire, ...?\") and a dubitation (\"comment qualifier...\") or a prétérition (\"je ne parlerai pas de...\"), with correct formal inversion.",
  ],
  modelAnswer: "Madame la maire, mesdames et messieurs,\n\nOn nous dit que ce parking est nécessaire. Nécessaire à qui ? Aux commerces du centre, nous répond-on. Est-ce à dire que les commerçants ont été consultés ? Pas un seul. J'en ai rencontré douze cette semaine ; aucun n'a demandé qu'on rase le parc.\n\nQui pourrait nier que ce jardin est le dernier espace vert du quartier ? Qui, parmi nous, n'y a jamais promené un enfant, lu un livre ou simplement respiré, un soir de canicule ? Je ne parlerai pas des platanes centenaires que l'on s'apprête à abattre : chacun ici les connaît.\n\nPourquoi alors tant de hâte ? La réponse tient en un mot : la subvention, qu'il faudrait dépenser avant la fin de l'année. Faut-il pour autant sacrifier un parc à un calendrier budgétaire ?\n\nOù joueront les enfants de l'école Jean-Jaurès ? Où se retrouveront les anciens qui, chaque après-midi, occupent les bancs près du kiosque ? Où irons-nous, nous tous, quand la ville tout entière ne sera plus que bitume et voitures ?\n\nEt vous, madame la maire, qui avez promis pendant la campagne de « rendre la ville à ses habitants », comment expliquerez-vous ce choix aux familles de ce quartier ? Comment qualifier un projet qui retire aux habitants ce qu'on leur avait promis de leur rendre ? Je cherche le mot... et je n'en trouve qu'un : incohérence.\n\nÀ quoi bon gagner deux cents places de stationnement si l'on perd le cœur du quartier ? Alors, oui, nous demandons le retrait de ce projet, et l'ouverture d'une véritable concertation. Ce parc n'est pas un terrain disponible : c'est notre bien commun.",
  explanation: "The speech opens with hypophora (\"Nécessaire à qui ? ... Est-ce à dire que... ? Pas un seul.\"), uses rhetorical questions with reversed polarity (\"qui pourrait nier que\", \"qui n'y a jamais...\"), a prétérition (\"je ne parlerai pas des platanes\"), an anaphoric series in escalation (\"Où joueront... Où se retrouveront... Où irons-nous\"), an interpellation of the mayor with a relative clause recalling her promise, a dubitation resolved on a strong noun, and a release introduced by \"Alors, oui\". Formal inversion (\"comment expliquerez-vous\") keeps the register of a public meeting.",
};
