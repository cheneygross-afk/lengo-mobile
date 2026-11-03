// Synced from cheneygross-afk/lengo:src/lib/lessons/fr-c2-u28.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// French C2, Unit 28: Philosophy & Abstract Ideas.

export const FR_C2_U28: Lesson[] = [
  {
    slug: "c2-philosophy-1",
    level: "FR-C2",
    number: 1,
    title: "La Philosophie et les Idées Abstraites, Part 1 of 3",
    summary: "Philosophy in French life (the bac philo, cafés philo, radio) and its core notions: la liberté, le libre arbitre, le déterminisme, la conscience, l'inconscient, le devoir, la vérité, la justice; with the famous lines of Descartes, Pascal and Sartre.",
    duration: "19 min",
    sections: [
      {
        heading: "The bac philo, a national event",
        body: [
          "France is one of the few countries where every pupil in the final year of the lycée studies philosophy, and \"l'épreuve de philosophie du bac\" (\"le bac philo\") is a national event: a four-hour written exam in June in which candidates choose between two \"sujets de dissertation\" (essay questions such as \"Peut-on être libre sans les autres ?\") and \"une explication de texte\". The subjects are made public soon after the exam begins and are debated on radio and television the same day.",
        ],
        examples: [
          { es: "Cette année, le premier sujet du bac philo était : « Peut-on être libre sans les autres ? »", en: "This year, the first question in the philosophy exam was: 'Can we be free without others?'" },
          { es: "Les candidats disposent de quatre heures pour rédiger leur dissertation.", en: "Candidates have four hours to write their essay." },
          { es: "Le sujet tombé cette année a fait débat sur les réseaux sociaux.", en: "This year's question sparked debate on social media." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Les candidats choisissent entre deux dissertations et une explication de texte.",
            question: "What does it mean?",
            options: ["Candidates choose between two essay questions and a text commentary.", "Candidates must write two essays and a commentary.", "Candidates choose two texts to explain.", "Candidates write one essay chosen by the teacher."],
            correctIndex: 0,
            explanation: "\"Choisir entre\": the bac philo offers a choice of three subjects, two \"dissertations\" and one \"explication de texte\"; the candidate writes only one.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate this exam question into French.",
            source: "Can we be happy without others?",
            answer: "Peut-on être heureux sans les autres ?",
            altAnswers: ["Peut-on être heureux sans autrui ?", "Peut-on être heureuse sans les autres ?"],
            explanation: "Exam questions use \"on\" with inversion: \"peut-on\" (a -t- is only needed after a vowel, as in \"a-t-on\"). The adjective stays masculine with the generic \"on\".",
          },
        ],
      },
      {
        heading: "Philosophy outside school",
        body: [
          "Philosophy also lives outside school: \"les cafés philo\", public debates in cafés started in Paris in 1992, \"les émissions de philosophie\" on France Culture, philosophy festivals and best-selling essays. Being able to argue about \"la liberté\" or \"la vérité\" is part of French intellectual culture, and many politicians and journalists quote philosophers.",
        ],
        examples: [
          { es: "Le dimanche matin, un café philo se tient dans ce bistrot du quartier.", en: "On Sunday mornings, a philosophy discussion group meets in this local bistro." },
          { es: "J'écoute une émission de philosophie sur France Culture en faisant la cuisine.", en: "I listen to a philosophy programme on France Culture while I cook." },
          { es: "Cet essai de philosophie s'est vendu à cent mille exemplaires.", en: "This philosophy essay sold a hundred thousand copies." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "A philosophy festival is held every autumn in this town.",
            answer: "Un festival de philosophie se tient chaque automne dans cette ville.",
            altAnswers: ["Un festival de philosophie a lieu chaque automne dans cette ville.", "Un festival de philosophie se tient tous les automnes dans cette ville.", "Chaque automne, un festival de philosophie se tient dans cette ville.", "Chaque automne, un festival de philosophie a lieu dans cette ville."],
            explanation: "\"Se tenir\" (to be held) is the usual verb for a meeting, festival or debate; \"avoir lieu\" is also correct.",
          },
        ],
      },
      {
        heading: "Notions: learn them with their article",
        body: [
          "The school programme is organised around \"notions\": \"la conscience\", \"l'inconscient\", \"la liberté\", \"le devoir\", \"la justice\", \"la vérité\", \"le bonheur\", \"la technique\", \"l'art\", \"le travail\", \"l'État\", \"la nature\", \"la religion\", \"le langage\", \"la raison\", \"la science\", \"le temps\". Learn them with their article: they are almost always used with \"le\" or \"la\".",
        ],
        examples: [
          { es: "Le bonheur est-il le but de l'existence ?", en: "Is happiness the goal of existence?" },
          { es: "La vérité dépend-elle de celui qui la cherche ?", en: "Does truth depend on the person seeking it?" },
          { es: "L'art est-il inutile ?", en: "Is art useless?" },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Is [work] nothing but a constraint?",
            sentence: "___ n'est-il qu'une contrainte ?",
            answer: "Le travail",
            explanation: "Notions take the definite article in French even when English has none: \"le travail\", \"la liberté\", \"l'art\". The subject is then picked up by \"-il\" in the inverted question.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Liberté est-elle une illusion ?",
            answer: "La liberté est-elle une illusion ?",
            explanation: "A notion used in a general sense needs its article: \"la liberté\". English uses no article here, which is exactly the trap.",
          },
        ],
      },
      {
        heading: "Free will and determinism",
        body: [
          "\"La liberté\" is the broad notion; \"le libre arbitre\" (free will) is the power to choose without being determined by causes; \"le déterminisme\" is the thesis that every event, including our choices, follows necessarily from prior causes. A classic question: \"Le libre arbitre est-il une illusion ?\".",
        ],
        examples: [
          { es: "Le libre arbitre est-il une illusion ?", en: "Is free will an illusion?" },
          { es: "Selon le déterminisme, nos choix sont le produit de causes antérieures.", en: "According to determinism, our choices are the product of prior causes." },
          { es: "Si tout est déterminé, peut-on encore parler de responsabilité ?", en: "If everything is determined, can we still talk about responsibility?" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into an exam question with inversion.",
            source: "La conscience est un fardeau.",
            answer: "La conscience est-elle un fardeau ?",
            explanation: "With a noun subject, the exam question keeps the noun first and adds the pronoun after the verb: \"la conscience est-elle\" (complex inversion).",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "According to determinism, our choices have causes.",
            answer: "Selon le déterminisme, nos choix ont des causes.",
            altAnswers: ["D'après le déterminisme, nos choix ont des causes.", "Pour le déterminisme, nos choix ont des causes.", "Selon le déterminisme, nos choix sont causés."],
            explanation: "\"Le déterminisme\" with the article; \"selon\" introduces a thesis.",
          },
        ],
      },
      {
        heading: "Conscience, the unconscious, duty",
        body: [
          "\"La conscience\" is awareness of oneself and the world, and also moral conscience (see Part 2). \"L'inconscient\", made central by Freud, names what in our mind escapes awareness: \"un désir inconscient\", \"agir inconsciemment\". \"Le devoir\" is duty: \"faire son devoir\", \"agir par devoir\" (out of duty, Kant's moral motive) as opposed to \"agir conformément au devoir\" (in line with duty, possibly for self-interest).",
        ],
        examples: [
          { es: "Freud a fait de l'inconscient un objet d'étude scientifique.", en: "Freud made the unconscious an object of scientific study." },
          { es: "Le commerçant honnête par intérêt agit conformément au devoir, non par devoir.", en: "The shopkeeper who is honest out of self-interest acts in line with duty, not out of duty." },
          { es: "Elle a obéi par devoir plus que par conviction.", en: "She obeyed out of duty more than out of conviction." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A shopkeeper gives correct change only to keep his customers. In Kant's terms, he acts...",
            options: ["conformément au devoir", "par devoir", "par inconscient", "par libre arbitre"],
            correctIndex: 0,
            explanation: "Acting \"par devoir\" means the motive is duty itself; acting for self-interest in line with duty is \"conformément au devoir\".",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "He acted [out of duty], not out of interest.",
            sentence: "Il a agi ___, non par intérêt.",
            answer: "par devoir",
            explanation: "\"Agir par devoir\": the motive is duty itself.",
          },
        ],
      },
      {
        heading: "Truth and justice",
        body: [
          "\"La vérité\" and \"la justice\": \"chercher la vérité\", \"dire la vérité\", \"une vérité scientifique\"; \"la justice\" is both the virtue and the institution: \"le sens de la justice\", \"rendre la justice\", \"se faire justice\" (to take the law into one's own hands).",
        ],
        examples: [
          { es: "Personne n'a le droit de se faire justice soi-même.", en: "No one has the right to take the law into their own hands." },
          { es: "Dire la vérité est-il toujours un devoir ?", en: "Is telling the truth always a duty?" },
          { es: "Les juges rendent la justice au nom du peuple français.", en: "Judges administer justice in the name of the French people." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The villagers decided [to take the law into their own hands].",
            sentence: "Les villageois ont décidé de ___.",
            answer: "se faire justice eux-mêmes",
            altAnswers: ["se faire justice"],
            explanation: "\"Se faire justice\" (to take the law into one's own hands); \"soi-même\" becomes \"eux-mêmes\" with a plural subject.",
          },
        ],
      },
      {
        heading: "Descartes and Pascal",
        body: [
          "Some formulas belong to every educated French speaker. Descartes, \"Discours de la méthode\" (1637): \"Je pense, donc je suis\" (cogito ergo sum), the certainty that survives radical doubt. Pascal, \"Pensées\" (1670): \"L'homme n'est qu'un roseau, le plus faible de la nature ; mais c'est un roseau pensant\": our dignity lies in thought, however fragile we are.",
        ],
        examples: [
          { es: "« Je pense, donc je suis » : c'est la première certitude de Descartes.", en: "'I think, therefore I am': that is Descartes's first certainty." },
          { es: "Pascal voit dans l'homme un roseau pensant.", en: "Pascal sees man as a thinking reed." },
          { es: "Même en doutant de tout, je ne peux douter que je pense.", en: "Even doubting everything, I cannot doubt that I think." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which is the exact wording of Descartes's formula?",
            options: ["Je pense, donc je suis.", "Je pense, alors je suis.", "Je pense, ainsi je suis.", "Je suis, donc je pense."],
            correctIndex: 0,
            explanation: "The cogito: \"je pense, donc je suis\" (Discours de la méthode, 1637).",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: Man is only a reed, but a thinking reed.",
            words: ["L'homme", "n'est qu'un roseau,", "mais", "c'est un roseau", "pensant."],
            translation: "Man is only a reed, but a thinking reed.",
            explanation: "\"Ne... que\" (only) diminishes, then \"mais c'est\" raises: Pascal's balance between fragility and dignity.",
          },
        ],
      },
      {
        heading: "Sartre's formulas",
        body: [
          "From the twentieth century, two short formulas of Sartre's existentialism are quoted everywhere: \"l'existence précède l'essence\" (we exist first and then define ourselves by our acts; there is no pre-given human nature) and \"l'homme est condamné à être libre\" (we cannot escape choosing, and so we are responsible).",
        ],
        examples: [
          { es: "Pour les existentialistes, l'existence précède l'essence.", en: "For the existentialists, existence precedes essence." },
          { es: "Selon Sartre, l'homme est condamné à être libre.", en: "According to Sartre, man is condemned to be free." },
          { es: "Nous sommes ce que nous faisons de ce qu'on a fait de nous.", en: "We are what we make of what others have made of us." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "According to Sartre, we are responsible for what we become.",
            answer: "Selon Sartre, nous sommes responsables de ce que nous devenons.",
            altAnswers: ["D'après Sartre, nous sommes responsables de ce que nous devenons.", "Selon Sartre, on est responsable de ce qu'on devient."],
            explanation: "\"Responsable de\" + \"ce que\": since \"l'existence précède l'essence\", we define ourselves by what we do, and answer for it.",
          },
        ],
      },
      {
        heading: "Quote as support, and quote exactly",
        body: [
          "Use them as support, never as a substitute for argument: \"Comme l'écrit Pascal, ...\", \"Pour reprendre la formule de Descartes, ...\", \"C'est ce qu'exprime la célèbre formule sartrienne selon laquelle...\". And quote exactly: the cogito is \"je pense, donc je suis\", not \"je pense, alors je suis\".",
        ],
        examples: [
          { es: "Pour reprendre la formule de Descartes, le doute mène à une certitude.", en: "To borrow Descartes's phrase, doubt leads to a certainty." },
          { es: "C'est ce qu'exprime la célèbre formule pascalienne.", en: "This is what Pascal's famous phrase expresses." },
          { es: "Comme l'écrit Pascal, le cœur a ses raisons que la raison ne connaît point.", en: "As Pascal writes, the heart has its reasons which reason knows nothing of." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[To borrow] Sartre's phrase, existence precedes essence.",
            sentence: "___ la formule de Sartre, l'existence précède l'essence.",
            answer: "Pour reprendre",
            altAnswers: ["Selon"],
            explanation: "\"Pour reprendre la formule de...\" introduces a quotation as support for your own argument.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Comme le dit Descartes : « Je pense, alors je suis. »",
            answer: "Comme le dit Descartes : « Je pense, donc je suis. »",
            altAnswers: ["Comme le dit Descartes : « Je pense donc je suis. »"],
            explanation: "Quote exactly: the cogito is \"je pense, donc je suis\". \"Alors\" is the commonest misquotation, and it changes a logical conclusion into a mere sequence.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate this exam question into French.",
        source: "Is lying always wrong?",
        answer: "Mentir est-il toujours une faute ?",
        altAnswers: ["Mentir est-il toujours mal ?", "Est-ce toujours une faute de mentir ?"],
        explanation: "An infinitive can be the subject of an exam question, picked up by \"-il\": \"mentir est-il...\".",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "This dream reveals an [unconscious] desire.",
        sentence: "Ce rêve révèle un désir ___.",
        answer: "inconscient",
        explanation: "\"Inconscient\" is both the adjective (\"un désir inconscient\") and, with an article, the noun Freud made central (\"l'inconscient\").",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: For Sartre, there is no human nature.",
        words: ["Pour Sartre,", "il n'y a pas", "de nature", "humaine."],
        translation: "For Sartre, there is no human nature.",
        explanation: "\"L'existence précède l'essence\" means precisely that there is no pre-given human nature: \"pas de\" after the negation.",
      },
      {
        type: "listen-choose",
        audio: "Rendre la justice n'est pas se venger.",
        question: "What does it mean?",
        options: ["Administering justice is not taking revenge.", "Giving back justice is a form of revenge.", "Justice must avenge the victims.", "No one can take revenge on justice."],
        correctIndex: 0,
        explanation: "\"Rendre la justice\" is what courts do; \"se venger\" is private revenge, close to \"se faire justice\".",
      },
      {
        type: "dictation",
        audio: "Le déterminisme laisse-t-il une place à la liberté ?",
        explanation: "Complex inversion with a noun subject: \"le déterminisme laisse-t-il\", with a -t- between two vowels.",
      },
      {
        type: "speak",
        text: "Pour Pascal, notre dignité réside dans la pensée.",
        prompt: "Say it in French: For Pascal, our dignity lies in thought.",
        explanation: "\"Résider dans\" (to lie in): the idea behind the thinking reed.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Does justice depend on each country's laws?",
        answer: "La justice dépend-elle des lois de chaque pays ?",
        altAnswers: ["Est-ce que la justice dépend des lois de chaque pays ?"],
        explanation: "Complex inversion \"la justice dépend-elle\"; \"dépendre de\" + \"les lois\" gives \"des lois\".",
      },
      {
        type: "speak",
        text: "Toute notre dignité consiste en la pensée.",
        tip: "Pause at the semicolon; stress \"pensant\".",
        explanation: "Pascal's own words in the \"Pensées\": our whole dignity lies in thought.",
      },
    ],
  },
  {
    slug: "c2-free-will-dialogue-lab",
    level: "FR-C2",
    number: 2,
    title: "Dialogue Lab: Libre Arbitre et Déterminisme",
    summary: "Two friends debate whether we are responsible for our actions: follow the arguments and answer with conceptual precision (tu confonds liberté et absence de contrainte, cela suppose que, admettons, si je te suis bien).",
    duration: "19 min",
    sections: [
      {
        heading: "Round 1: the determinist challenge",
        body: [
          "Inès and Hugo, two friends, are having a drink after a philosophy lecture. Hugo : « Franchement, le libre arbitre, je n'y crois pas. Tout ce qu'on fait a une cause : nos gènes, notre éducation, notre milieu. Si j'avais grandi ailleurs, je penserais autrement. » Inès : « D'accord, nos choix ont des causes. Mais cela suppose-t-il qu'ils soient déterminés d'avance ? »",
        ],
        examples: [
          { es: "Le libre arbitre, je n'y crois pas.", en: "Free will, I don't believe in it." },
          { es: "Tout ce qu'on fait a une cause.", en: "Everything we do has a cause." },
          { es: "Cela suppose-t-il que nos choix soient déterminés d'avance ?", en: "Does that imply that our choices are determined in advance?" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What exactly does Inès question in Hugo's argument?",
            options: ["Not that our choices have causes, but that causes mean they are fixed in advance", "That our choices have any causes at all", "That Hugo grew up somewhere else", "That philosophy lectures are useful"],
            correctIndex: 0,
            explanation: "She grants the premise (\"d'accord, nos choix ont des causes\") and challenges the inference with \"cela suppose-t-il que...?\": having causes does not obviously mean being determined in advance.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Does that imply that] we are not responsible?",
            sentence: "___ nous ne soyons pas responsables ?",
            answer: "Cela suppose-t-il que",
            altAnswers: ["Est-ce que cela suppose que", "Cela implique-t-il que"],
            explanation: "\"Supposer que\" (to presuppose) + subjunctive challenges an inference without denying the premise.",
          },
        ],
      },
      {
        heading: "The mixed conditional, and challenging an inference",
        body: [
          "Hugo opens with a thesis and an argument by causes; note the hypothetical \"si j'avais grandi ailleurs, je penserais autrement\" (si + plus-que-parfait, conditional present: a mixed conditional). Inès concedes (\"d'accord\") then questions the implication with \"cela suppose-t-il que\" + subjunctive, a precise move: she does not deny the premise, she challenges the inference.",
        ],
        examples: [
          { es: "Si j'avais grandi ailleurs, je penserais autrement.", en: "If I had grown up somewhere else, I would think differently." },
          { es: "Si elle avait lu ce livre, elle verrait les choses autrement.", en: "If she had read this book, she would see things differently." },
          { es: "S'il avait étudié le droit, il serait avocat aujourd'hui.", en: "If he had studied law, he would be a lawyer today." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "If he had listened to his parents, he would be a doctor today.",
            answer: "S'il avait écouté ses parents, il serait médecin aujourd'hui.",
            altAnswers: ["S'il avait écouté ses parents, aujourd'hui il serait médecin.", "S'il avait écouté ses parents, il serait aujourd'hui médecin."],
            explanation: "A mixed conditional: a past condition (si + plus-que-parfait, \"avait écouté\") with a present result (conditional present, \"serait\"). No article before a profession after \"être\".",
          },
        ],
      },
      {
        heading: "Spinoza's argument",
        body: [
          "Hugo goes further with a classic argument (paraphrasing Spinoza): « Spinoza le disait déjà : on se croit libre parce qu'on a conscience de ses actes, mais on ignore les causes qui les déterminent. » Notice the structure: \"se croire\" + adjective (to believe oneself to be), and the opposition between \"avoir conscience de\" and \"ignorer\" (not to know).",
        ],
        examples: [
          { es: "On se croit libre parce qu'on a conscience de ses actes.", en: "We believe ourselves free because we are aware of our actions." },
          { es: "Mais on ignore les causes qui les déterminent.", en: "But we don't know the causes that determine them." },
          { es: "Elle se croit indispensable, mais personne ne l'attend.", en: "She thinks she's indispensable, but nobody is waiting for her." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Il se croit original, mais il ignore d'où viennent ses goûts.",
            question: "What is the speaker saying?",
            options: ["He thinks he is original, but he doesn't know where his tastes come from.", "He is original because he knows the origin of his tastes.", "He ignores original people with good taste.", "He doesn't believe in originality or taste."],
            correctIndex: 0,
            explanation: "The same structure as Spinoza's argument: \"se croire\" + adjective (to believe oneself to be) set against \"ignorer\" (not to know), not to ignore.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "She [thinks she is] clear-sighted, but she doesn't know her own motives.",
            sentence: "Elle ___ lucide, mais elle ignore ses propres motivations.",
            answer: "se croit",
            explanation: "\"Se croire\" + adjective: to believe oneself to be. The adjective agrees with the subject (\"lucide\" is the same in both genders).",
          },
        ],
      },
      {
        heading: "Round 2: the distinction",
        body: [
          "Inès : « Attention, tu confonds deux choses. Être libre, ce n'est pas agir sans cause, c'est agir selon ses propres raisons. Tu confonds liberté et absence de contrainte. » Hugo : « Admettons. Mais mes raisons, d'où viennent-elles ? Elles aussi ont des causes. » Inès : « Certes, mais ce n'est pas parce qu'une raison a une origine qu'elle cesse d'être la mienne. »",
        ],
        examples: [
          { es: "Tu confonds liberté et absence de contrainte.", en: "You're confusing freedom with the absence of constraint." },
          { es: "Être libre, c'est agir selon ses propres raisons.", en: "Being free means acting for one's own reasons." },
          { es: "Admettons. Mais mes raisons, d'où viennent-elles ?", en: "Let's grant that. But where do my reasons come from?" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Hugo answers \"Admettons.\" What is he doing?",
            options: ["Conceding the point provisionally before objecting", "Admitting he was wrong for good", "Refusing to discuss further", "Agreeing completely with Inès"],
            correctIndex: 0,
            explanation: "\"Admettons\" = let's grant that, for the sake of argument; an objection usually follows.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "You're confusing tolerance with indifference.",
            answer: "Tu confonds tolérance et indifférence.",
            altAnswers: ["Tu confonds la tolérance et l'indifférence.", "Tu confonds la tolérance avec l'indifférence.", "Tu confonds tolérance avec indifférence."],
            explanation: "\"Tu confonds A et B\" names a confusion between two notions: the first move of conceptual precision in a debate.",
          },
        ],
      },
      {
        heading: "Distinguish to answer",
        body: [
          "The key move in philosophical debate is the distinction: \"tu confonds A et B\", \"il faut distinguer A de B\", \"ce n'est pas la même chose de... et de...\". Inès distinguishes freedom as absence of cause (impossible) from freedom as self-determination (possible). Hugo's \"admettons\" (let's grant that) concedes provisionally and relaunches.",
        ],
        examples: [
          { es: "Il faut distinguer la cause de la raison.", en: "We must distinguish cause from reason." },
          { es: "Ce n'est pas la même chose d'être déterminé et d'être contraint.", en: "Being determined and being coerced are not the same thing." },
          { es: "Il faut distinguer l'opinion du savoir.", en: "We must distinguish opinion from knowledge." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Your friend says: « Si on ne peut pas tout faire, on n'est pas libre. » Which reply draws a distinction?",
            options: ["Tu confonds liberté et toute-puissance.", "Tu as complètement raison.", "Ça ne veut rien dire.", "On ne peut jamais rien faire."],
            correctIndex: 0,
            explanation: "\"Tu confonds liberté et toute-puissance\" separates two notions the friend has merged: being free is not being able to do everything. The other replies agree, dismiss or exaggerate without arguing.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Let's grant that]. But where does this desire come from?",
            sentence: "___. Mais d'où vient ce désir ?",
            answer: "Admettons",
            altAnswers: ["Soit", "D'accord"],
            explanation: "\"Admettons\" (or the literary \"soit\") concedes for the sake of argument.",
          },
        ],
      },
      {
        heading: "Ce n'est pas parce que... que...",
        body: [
          "Note \"ce n'est pas parce que... que...\" (just because... doesn't mean...): \"ce n'est pas parce qu'une raison a une origine qu'elle cesse d'être la mienne\". It is the standard French way to refute a faulty inference, and it takes the indicative in both clauses.",
        ],
        examples: [
          { es: "Ce n'est pas parce qu'une raison a une origine qu'elle cesse d'être la mienne.", en: "Just because a reason has an origin doesn't mean it stops being mine." },
          { es: "Ce n'est pas parce qu'il pleut que tu dois rester enfermé.", en: "Just because it's raining doesn't mean you have to stay indoors." },
          { es: "Ce n'est pas parce qu'une idée est ancienne qu'elle est fausse.", en: "Just because an idea is old doesn't mean it's wrong." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Just because] it has a cause [doesn't mean] it isn't free.",
            sentence: "___ un acte a une cause qu'il n'est pas libre.",
            answer: "Ce n'est pas parce qu'",
            explanation: "\"Ce n'est pas parce que... que...\" refutes a faulty inference; \"que\" must elide before \"un\": \"parce qu'un acte\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into « Ce n'est pas parce que… que… ».",
            source: "Un livre est célèbre, mais il n'est pas forcément bon.",
            answer: "Ce n'est pas parce qu'un livre est célèbre qu'il est bon.",
            altAnswers: ["Ce n'est pas parce qu'un livre est célèbre qu'il est forcément bon.", "Ce n'est pas parce qu'un livre est célèbre qu'il est nécessairement bon."],
            explanation: "\"Ce n'est pas parce que A que B\" refutes the inference from A to B; both clauses stay in the indicative, and the negation sits on \"ce n'est pas\", not on B.",
          },
        ],
      },
      {
        heading: "Round 3: responsibility",
        body: [
          "Hugo : « Bon. Mais alors, si un criminel a eu une enfance terrible, est-il vraiment responsable ? » Inès : « Il peut avoir des circonstances atténuantes sans être irresponsable. Sinon, plus personne ne serait responsable de rien. Et toi-même, tu me reproches mes arguments : cela suppose bien que tu me crois capable d'en changer ! » Hugo : « Touché. Je t'accorde ce point. »",
        ],
        examples: [
          { es: "Est-il vraiment responsable s'il a eu une enfance terrible ?", en: "Is he really responsible if he had a terrible childhood?" },
          { es: "On peut avoir des circonstances atténuantes sans être irresponsable.", en: "You can have mitigating circumstances and still be responsible." },
          { es: "Sinon, plus personne ne serait responsable de rien.", en: "Otherwise, no one would be responsible for anything any more." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Why does Hugo finally say « Touché » ?",
            options: ["Inès has shown that by criticising her, he assumes she can change her mind.", "Inès has proved that criminals are never responsible.", "Hugo wants to end the debate because he is tired.", "Inès has insulted him."],
            correctIndex: 0,
            explanation: "Her last argument is performative: reproaching someone's arguments presupposes they are free to change them. \"Touché\" (and \"je t'accorde ce point\") concedes gracefully.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Otherwise, nobody would ever be guilty of anything.",
            answer: "Sinon, personne ne serait jamais coupable de rien.",
            altAnswers: ["Sinon, plus personne ne serait jamais coupable de rien.", "Autrement, personne ne serait jamais coupable de rien."],
            explanation: "French stacks negative words without \"pas\": \"personne ne... jamais... rien\". The conditional \"serait\" draws the absurd consequence (a reductio).",
          },
        ],
      },
      {
        heading: "Reductio and the performative argument",
        body: [
          "Inès uses a reductio (\"sinon, plus personne ne serait responsable de rien\": if your view were right, absurd consequence) and a performative argument: by arguing, Hugo already presupposes that she can change her mind freely. \"Cela suppose bien que\" + indicative here: \"bien\" insists that the presupposition is real.",
        ],
        examples: [
          { es: "Tu me reproches mes arguments : cela suppose bien que tu me crois libre.", en: "You criticise my arguments: that does presuppose you think I'm free." },
          { es: "Tu essaies de me convaincre : c'est donc que tu me crois capable de changer d'avis.", en: "You're trying to convince me: so you think I'm capable of changing my mind." },
          { es: "Si tout était permis, plus aucune loi n'aurait de sens.", en: "If everything were allowed, no law would make sense any more." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Sinon, personne ne serait pas responsable.",
            answer: "Sinon, personne ne serait responsable.",
            altAnswers: ["Sinon, plus personne ne serait responsable."],
            explanation: "\"Personne ne\" is already a full negation: adding \"pas\" is a mistake. Only other negative words (\"jamais\", \"rien\", \"plus\") can be combined with it.",
          },
        ],
      },
      {
        heading: "Conceding gracefully, holding your ground",
        body: [
          "Ways to concede gracefully in a French debate: \"Touché\", \"je t'accorde ce point\", \"tu marques un point\", \"sur ce point, je te rejoins\". And to keep your position: \"il n'en reste pas moins que\", \"cela dit\", \"je maintiens que\".",
        ],
        examples: [
          { es: "Je t'accorde ce point.", en: "I'll grant you that point." },
          { es: "Cela dit, je maintiens que notre liberté est limitée.", en: "That said, I still maintain that our freedom is limited." },
          { es: "Tu marques un point, je le reconnais.", en: "You've scored a point, I admit it." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which reply concedes gracefully in a debate between friends?",
            options: ["Tu marques un point.", "Tu dis n'importe quoi.", "On s'en fiche.", "C'est faux, point final."],
            correctIndex: 0,
            explanation: "\"Tu marques un point\", \"touché\", \"je t'accorde ce point\" acknowledge a good argument.",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: You've scored a point, but I maintain my position.",
            words: ["Tu marques", "un point,", "mais", "je maintiens", "ma position."],
            translation: "You've scored a point, but I maintain my position.",
            explanation: "Concede (\"tu marques un point\"), then hold your ground (\"je maintiens\"): the polite rhythm of a French debate.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Every choice we make has a history.",
        answer: "Chaque choix que nous faisons a une histoire.",
        altAnswers: ["Chaque choix qu'on fait a une histoire.", "Tout choix que nous faisons a une histoire."],
        explanation: "\"Chaque\" + singular noun; \"que nous faisons\" is a relative clause with \"que\" as object.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "We must distinguish the cause from the excuse.",
        answer: "Il faut distinguer la cause de l'excuse.",
        altAnswers: ["Il faut distinguer entre la cause et l'excuse.", "On doit distinguer la cause de l'excuse."],
        explanation: "\"Distinguer A de B\": the preposition is \"de\" (here elided: \"de l'excuse\").",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "The judge took the [mitigating circumstances] into account.",
        sentence: "Le juge a tenu compte des ___.",
        answer: "circonstances atténuantes",
        explanation: "\"Les circonstances atténuantes\" reduce a sentence without removing responsibility; \"tenir compte de\" + \"les\" gives \"des\".",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Being free means choosing one's own rules.",
        words: ["Être libre,", "c'est", "choisir", "ses propres", "règles."],
        translation: "Being free means choosing one's own rules.",
        explanation: "An infinitive subject picked up by \"c'est\" + infinitive: the shape of a definition in debate.",
      },
      {
        type: "listen-choose",
        audio: "Ce n'est pas la même chose d'être influencé et d'être forcé.",
        question: "What does it mean?",
        options: ["Being influenced and being forced are not the same thing.", "Being influenced is the same as being forced.", "It is not the same to be influenced twice.", "Influence and force always go together."],
        correctIndex: 0,
        explanation: "\"Ce n'est pas la même chose de... et de...\" draws a distinction between two infinitives.",
      },
      {
        type: "dictation",
        audio: "Tu confonds la cause et l'excuse.",
        explanation: "\"Tu confonds A et B\": the classic way to point out a conceptual confusion.",
      },
      {
        type: "speak",
        text: "Cela suppose-t-il que personne ne soit coupable ?",
        prompt: "Say it in French: Does that imply that nobody is guilty?",
        tip: "\"Suppose-t-il\": the t is pronounced, [sypoztil].",
        explanation: "\"Cela suppose-t-il que\" + subjunctive questions an implication; \"personne ne\" needs no \"pas\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "That said, I still maintain that we are responsible.",
        answer: "Cela dit, je maintiens que nous sommes responsables.",
        altAnswers: ["Cela dit, je maintiens qu'on est responsables.", "Ceci dit, je maintiens que nous sommes responsables.", "Cela dit, je continue à penser que nous sommes responsables.", "Cela dit, je maintiens que nous sommes responsables de nos actes."],
        explanation: "\"Je maintiens que\" + indicative holds a position after a concession.",
      },
      {
        type: "speak",
        text: "Je t'accorde ce point ; cela dit, je maintiens ma position.",
        tip: "\"Cela dit\": se-la-di, no liaison.",
        explanation: "Concede, then hold your ground: \"je t'accorde ce point ; cela dit, je maintiens...\".",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "[On this point], I agree with you.",
        sentence: "___, je te rejoins.",
        answer: "Sur ce point",
        explanation: "\"Sur ce point, je te rejoins\" concedes on one point only, which keeps the rest of your position intact.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "If you had read Spinoza, you would see things differently.",
        answer: "Si tu avais lu Spinoza, tu verrais les choses autrement.",
        altAnswers: ["Si tu avais lu Spinoza, tu verrais les choses différemment."],
        explanation: "Mixed conditional: si + plus-que-parfait for the past condition, conditional present for the present result.",
      },
    ],
  },
  {
    slug: "c2-philosophy-2",
    level: "FR-C2",
    number: 3,
    title: "La Philosophie et les Idées Abstraites, Part 2 of 3",
    summary: "Abstract vocabulary (l'essence, l'existence, l'être, le néant, la substance, l'apparence, la transcendance, l'immanence, a priori / a posteriori), the substantivised adjective (le beau, le vrai, le juste) and articles with abstract nouns (la liberté, une liberté, de la liberté); conscience vs consciousness.",
    duration: "19 min",
    sections: [
      {
        heading: "Being, nothingness, essence, appearance",
        body: [
          "\"L'être\" is being (\"la question de l'être\"); \"le néant\" is nothingness (\"surgir du néant\", \"retourner au néant\"). \"L'essence\" is what a thing is, its defining nature (\"l'essence d'un triangle\"); \"l'existence\" is the fact that it is. \"La substance\" is what exists by itself, underlying changing qualities; \"l'apparence\" is how something appears, as opposed to \"la réalité\" (\"se fier aux apparences\", \"les apparences sont trompeuses\").",
        ],
        examples: [
          { es: "Pourquoi y a-t-il quelque chose plutôt que rien ?", en: "Why is there something rather than nothing?" },
          { es: "Rien ne surgit du néant.", en: "Nothing comes out of nothing." },
          { es: "Les apparences sont trompeuses.", en: "Appearances are deceptive." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "We must not trust appearances.",
            answer: "Il ne faut pas se fier aux apparences.",
            altAnswers: ["On ne doit pas se fier aux apparences.", "Il ne faut pas faire confiance aux apparences."],
            explanation: "\"Se fier à\" (to trust) + \"les apparences\" gives \"aux apparences\": the set phrase opposing appearance to reality.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The project seemed to [come out of nothingness] in a few months.",
            sentence: "Le projet a semblé surgir du ___ en quelques mois.",
            answer: "néant",
            explanation: "\"Le néant\" (nothingness) is masculine: \"surgir du néant\", to appear out of nowhere.",
          },
        ],
      },
      {
        heading: "Transcendant or transcendantal?",
        body: [
          "\"La transcendance\" is what lies beyond the world or experience (God for many religions, values for some philosophers); \"l'immanence\" is what lies within it. \"Transcendant\" (beyond experience) should not be confused with \"transcendantal\" (Kant: relating to the conditions of possible knowledge), a classic trap even for French students.",
        ],
        examples: [
          { es: "Pour le croyant, Dieu est transcendant au monde.", en: "For the believer, God is transcendent to the world." },
          { es: "Spinoza défend une conception immanente de Dieu.", en: "Spinoza defends an immanent conception of God." },
          { es: "Kant étudie les conditions transcendantales de la connaissance.", en: "Kant studies the transcendental conditions of knowledge." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Kant asks what makes any knowledge possible at all. Which adjective describes his inquiry?",
            options: ["transcendantale", "transcendante", "immanente", "a posteriori"],
            correctIndex: 0,
            explanation: "Relating to the conditions of possible knowledge is \"transcendantal\" (Kant). \"Transcendant\" means beyond the world or experience, the trap even French students fall into.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Kant propose une analyse transcendante de la connaissance.",
            answer: "Kant propose une analyse transcendantale de la connaissance.",
            explanation: "For Kant's inquiry into the conditions of knowledge, the word is \"transcendantal\" (feminine \"transcendantale\"). \"Transcendant\" would put knowledge beyond experience.",
          },
        ],
      },
      {
        heading: "A priori, a posteriori, and un a priori",
        body: [
          "\"A priori\" means independently of experience (\"une connaissance a priori\": mathematics), \"a posteriori\" means from experience (\"une connaissance a posteriori\": that water boils at 100 °C at sea level). In everyday French, \"a priori\" also means at first sight, in principle: \"a priori, ça devrait marcher\" (in principle it should work), and \"un a priori\" is a preconception: \"avoir des a priori sur quelqu'un\".",
        ],
        examples: [
          { es: "Les mathématiques reposent sur des connaissances a priori.", en: "Mathematics rests on a priori knowledge." },
          { es: "A priori, la réunion devrait se terminer vers midi.", en: "In principle, the meeting should end around noon." },
          { es: "Il faut se débarrasser de ses a priori.", en: "You have to get rid of your preconceptions." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "\"J'ai des a priori sur ce quartier.\" What does it mean?",
            options: ["I have preconceptions about this neighbourhood.", "I have a priori knowledge of this neighbourhood.", "I have priorities in this neighbourhood.", "I lived in this neighbourhood before."],
            correctIndex: 0,
            explanation: "As a noun in everyday French, \"un a priori\" is a preconception, a prejudice.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[In principle], it should work.",
            sentence: "___, ça devrait marcher.",
            answer: "A priori",
            altAnswers: ["En principe", "Normalement"],
            explanation: "Everyday \"a priori\" = in principle, at first sight (no accent on the a).",
          },
        ],
      },
      {
        heading: "Le beau, le vrai, le juste",
        body: [
          "French turns adjectives into abstract nouns with \"le\": \"le beau\" (beauty, the beautiful), \"le vrai\" (the true), \"le juste\" (the just), \"le bien\" and \"le mal\" (good and evil), \"le sacré\", \"le possible\", \"le réel\". \"Le vrai, le beau, le bien\" is the classic triad of philosophy. Always masculine singular, never \"la belle\" in this sense.",
        ],
        examples: [
          { es: "Le beau est-il objectif ?", en: "Is beauty objective?" },
          { es: "Platon associe le vrai, le beau et le bien.", en: "Plato links the true, the beautiful and the good." },
          { es: "Le sacré n'a pas disparu des sociétés modernes.", en: "The sacred has not disappeared from modern societies." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "How do you name the beautiful as a philosophical category?",
            options: ["le beau", "la belle", "les beaux", "la belle chose"],
            correctIndex: 0,
            explanation: "A substantivised adjective is always masculine singular with \"le\": \"le beau\", \"le vrai\", \"le juste\". \"La belle\" would be a beautiful woman.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the adjective into an abstract noun with « le ».",
            source: "Ce qui est réel est-il rationnel ?",
            answer: "Le réel est-il rationnel ?",
            explanation: "\"Ce qui est réel\" becomes the substantivised adjective \"le réel\", masculine singular, picked up by \"-il\" in the inverted question.",
          },
        ],
      },
      {
        heading: "Le beau or la beauté?",
        body: [
          "The substantivised adjective names a category or a quality in general; the corresponding noun often names the quality as a property: \"le beau\" (whatever is beautiful) vs \"la beauté\" (the quality), \"le vrai\" vs \"la vérité\", \"le juste\" vs \"la justice\". Both are common: \"Le beau est-il objectif ?\", \"La beauté est-elle dans l'œil de celui qui regarde ?\".",
        ],
        examples: [
          { es: "Le juste et le légal ne coïncident pas toujours.", en: "What is just and what is legal do not always coincide." },
          { es: "La beauté est-elle dans l'œil de celui qui regarde ?", en: "Is beauty in the eye of the beholder?" },
          { es: "Cherche-t-on le vrai, ou seulement des vérités ?", en: "Do we seek the true, or only truths?" },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[What is possible] is not always desirable.",
            sentence: "___ n'est pas toujours souhaitable.",
            answer: "Le possible",
            explanation: "\"Le possible\" names the whole category of what is possible: a substantivised adjective, masculine singular.",
          },
        ],
      },
      {
        heading: "Le tout, l'autre, le pourquoi",
        body: [
          "Other useful patterns: \"le tout\" (the whole), \"l'autre\" (the other, otherness), \"le même\", \"l'un et le multiple\", and with an adverb: \"le pourquoi et le comment\" (the why and the how).",
        ],
        examples: [
          { es: "La science explique le comment, pas toujours le pourquoi.", en: "Science explains the how, not always the why." },
          { es: "Le tout est plus que la somme des parties.", en: "The whole is more than the sum of its parts." },
          { es: "La rencontre de l'autre transforme notre regard sur nous-mêmes.", en: "Encountering the other transforms how we see ourselves." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[The why] interests him more than the how.",
            sentence: "___ l'intéresse plus que le comment.",
            answer: "Le pourquoi",
            explanation: "Adverbs can be nouns too: \"le pourquoi\" and \"le comment\" (the why and the how), masculine with \"le\".",
          },
        ],
      },
      {
        heading: "La liberté, une liberté, de la liberté",
        body: [
          "The article changes the meaning of an abstract noun. \"La liberté\" is the concept in general: \"la liberté est-elle un droit ?\". \"Une liberté\" is a specific freedom: \"la liberté d'expression est une liberté fondamentale\", \"les libertés publiques\". \"De la liberté\" (partitive) is some degree of it: \"il faut laisser de la liberté aux adolescents\". Same logic: \"la patience\" (the virtue), \"de la patience\" (some patience: \"il faut de la patience\").",
        ],
        examples: [
          { es: "La liberté d'expression est une liberté fondamentale.", en: "Freedom of expression is a fundamental freedom." },
          { es: "Il faut laisser de la liberté aux adolescents.", en: "Teenagers need to be given some freedom." },
          { es: "Il faut du courage pour dire la vérité.", en: "It takes courage to tell the truth." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence names one specific freedom?",
            options: ["Le droit de grève est une liberté reconnue par la Constitution.", "La liberté est-elle un droit ?", "Il faut laisser de la liberté aux élèves.", "Je tiens à ma liberté."],
            correctIndex: 0,
            explanation: "\"Une liberté\" is a specific freedom (the right to strike). \"La liberté\" is the concept in general, and \"de la liberté\" is some amount of it.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "You need [some patience] to learn a language.",
            sentence: "Il faut ___ pour apprendre une langue.",
            answer: "de la patience",
            explanation: "Partitive \"de la\": some degree of an abstract quality.",
          },
        ],
      },
      {
        heading: "Conscience: two meanings",
        body: [
          "\"La conscience\" has two meanings that English splits: consciousness (\"perdre conscience\", \"la conscience de soi\", \"prendre conscience de\") and conscience (\"avoir mauvaise conscience\", \"une affaire de conscience\", \"la liberté de conscience\"). Context decides: \"la conscience humaine\" can be either. The adjectives split again: \"conscient\" (aware) vs \"consciencieux\" (conscientious).",
        ],
        examples: [
          { es: "Le blessé a perdu conscience pendant quelques minutes.", en: "The injured man lost consciousness for a few minutes." },
          { es: "C'est une employée consciencieuse, pas seulement consciente de ses responsabilités.", en: "She is a conscientious employee, not just aware of her responsibilities." },
          { es: "Après l'accident, elle a repris conscience à l'hôpital.", en: "After the accident, she regained consciousness in hospital." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence uses \"conscience\" in the sense of consciousness?",
            options: ["La conscience de soi distingue l'homme de l'animal.", "Il a mauvaise conscience.", "C'est une affaire de conscience.", "Il a agi selon sa conscience."],
            correctIndex: 0,
            explanation: "\"La conscience de soi\" = self-awareness; the others refer to moral conscience.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "She is a conscientious student.",
            answer: "C'est une étudiante consciencieuse.",
            altAnswers: ["C'est une élève consciencieuse."],
            explanation: "\"Consciencieux\" = conscientious (careful, diligent); \"conscient\" = aware.",
          },
        ],
      },
      {
        heading: "Avoir conscience, avoir bonne conscience, prendre conscience",
        body: [
          "Trap: \"avoir conscience de\" (to be aware of) vs \"avoir bonne / mauvaise conscience\" (a clear / guilty conscience). \"Prendre conscience de\" = to become aware of, a very frequent formula in essays: \"il faut prendre conscience des enjeux\".",
        ],
        examples: [
          { es: "J'ai mauvaise conscience de ne pas l'avoir appelée.", en: "I feel guilty for not having called her." },
          { es: "Il a fini par prendre conscience de la gravité de la situation.", en: "He finally became aware of how serious the situation was." },
          { es: "Elle a conscience de ses limites.", en: "She is aware of her limits." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I have a clear conscience: I did everything I could.",
            answer: "J'ai bonne conscience : j'ai fait tout ce que je pouvais.",
            altAnswers: ["J'ai la conscience tranquille : j'ai fait tout ce que je pouvais.", "J'ai bonne conscience : j'ai fait tout ce que j'ai pu."],
            explanation: "A clear conscience is \"avoir bonne conscience\" (no article); a guilty one, \"avoir mauvaise conscience\". \"Avoir conscience de\" means to be aware of.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "We must [become aware of] the stakes.",
            sentence: "Il faut ___ des enjeux.",
            answer: "prendre conscience",
            explanation: "\"Prendre conscience de\" = to become aware of.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "He lost consciousness.",
        answer: "Il a perdu conscience.",
        altAnswers: ["Il a perdu connaissance.", "Il perdit conscience.", "Il perdit connaissance."],
        explanation: "\"Perdre conscience\" or \"perdre connaissance\" (no article).",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "For Kant, the good does not depend on our interests.",
        answer: "Pour Kant, le bien ne dépend pas de nos intérêts.",
        altAnswers: ["Selon Kant, le bien ne dépend pas de nos intérêts."],
        explanation: "\"Le bien\" (the good) is the substantivised form; \"dépendre de\" + \"nos\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Freedom of conscience is a fundamental right.",
        answer: "La liberté de conscience est un droit fondamental.",
        altAnswers: ["La liberté de conscience constitue un droit fondamental."],
        explanation: "Here \"conscience\" = moral conscience; \"la liberté de conscience\" is the legal term.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Evil is sometimes banal.",
        words: ["Le mal", "est", "parfois", "banal."],
        translation: "Evil is sometimes banal.",
        explanation: "\"Le mal\" (evil) with the article, as every notion; \"banal\" agrees in the masculine singular.",
      },
      {
        type: "listen-choose",
        audio: "Elle a beaucoup d'a priori sur la province.",
        question: "What does it mean?",
        options: ["She has a lot of preconceptions about the provinces.", "She has a lot of priorities in the provinces.", "She knows the provinces a priori.", "She lived in the provinces before."],
        correctIndex: 0,
        explanation: "\"Un a priori\" (invariable) is a preconception; \"la province\" is France outside Paris.",
      },
      {
        type: "dictation",
        audio: "Le légal n'est pas toujours le juste.",
        explanation: "Two substantivised adjectives: \"le légal\" and \"le juste\", the categories of what is legal and what is just.",
      },
      {
        type: "speak",
        text: "Le mal est-il toujours un choix ?",
        prompt: "Say it in French: Is evil always a choice?",
        explanation: "Exam-style question with a notion as subject and complex inversion: \"le mal est-il\".",
      },
      {
        type: "speak",
        text: "Une liberté sans responsabilité n'est qu'un caprice.",
        tip: "\"Fondamentale\": fon-da-men-tale, two nasal vowels.",
        explanation: "\"Une liberté\" here is a particular kind of freedom; \"ne... que\" (only).",
      },
    ],
  },
  {
    slug: "c2-abstract-nouns-word-web",
    level: "FR-C2",
    number: 4,
    title: "Word Web: Les Noms Abstraits",
    summary: "Organise the lexicon of philosophy into families and oppositions: essence / apparence, nécessité / contingence, universel / particulier, sujet / objet, fin / moyen, droit / fait, with their adjectives and the phrases built on them.",
    duration: "17 min",
    sections: [
      {
        heading: "Necessary and contingent",
        body: [
          "\"Nécessaire\" is what cannot be otherwise (\"une vérité nécessaire\": 2 + 2 = 4); \"contingent\" is what could have been otherwise (\"un fait contingent\": that it rained yesterday). Nouns: \"la nécessité\", \"la contingence\". In everyday French, \"nécessaire\" also means needed, but \"contingent\" is learned, and \"un contingent\" in the military or in trade means a quota or a contingent of troops.",
        ],
        examples: [
          { es: "Qu'il ait plu hier est un fait contingent ; que deux et deux fassent quatre est une vérité nécessaire.", en: "That it rained yesterday is a contingent fact; that two and two make four is a necessary truth." },
          { es: "La mort est la seule nécessité à laquelle nul n'échappe.", en: "Death is the one necessity no one escapes." },
          { es: "La contingence de notre naissance devrait nous rendre humbles.", en: "The contingency of our birth ought to make us humble." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which is a contingent fact?",
            options: ["Il a plu hier à Lyon.", "Un triangle a trois côtés.", "Deux et deux font quatre.", "Tout effet a une cause."],
            correctIndex: 0,
            explanation: "A contingent fact could have been otherwise; the others are presented as necessary.",
          },
          {
            type: "multiple-choice",
            question: "\"Contingent\" gives \"la contingence\". Following the same pattern, what is the noun of \"pertinent\" (relevant)?",
            options: ["la pertinence", "la pertinentité", "le pertinent", "la pertinance"],
            correctIndex: 0,
            explanation: "Adjectives in \"-ent\" usually form their noun in \"-ence\": \"contingent / la contingence\", \"évident / l'évidence\", \"pertinent / la pertinence\". Adjectives in \"-ant\" take \"-ance\" (\"constant / la constance\").",
          },
        ],
      },
      {
        heading: "Universal, particular, general, singular",
        body: [
          "\"Universel\" applies to all (\"une loi universelle\", \"le suffrage universel\"); \"particulier\" applies to one or some (\"un cas particulier\"). Between them: \"général\" (true in most cases) and \"singulier\" (unique, individual). The pair \"l'universel et le particulier\" structures many dissertation questions: \"Peut-il y avoir des valeurs universelles ?\".",
        ],
        examples: [
          { es: "Peut-il y avoir des valeurs universelles ?", en: "Can there be universal values?" },
          { es: "Partir d'un cas particulier pour en tirer une loi générale est risqué.", en: "Starting from a particular case to draw a general law is risky." },
          { es: "Le suffrage universel masculin a été établi en 1848.", en: "Universal male suffrage was established in 1848." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate this exam question into French.",
            source: "Can there be a universal morality?",
            answer: "Peut-il y avoir une morale universelle ?",
            altAnswers: ["Une morale universelle est-elle possible ?", "Y a-t-il une morale universelle ?"],
            explanation: "\"Peut-il y avoir\" is the inverted form of \"il peut y avoir\"; \"universel\" agrees with \"la morale\": \"universelle\".",
          },
        ],
      },
      {
        heading: "Trap: particulier and singulier",
        body: [
          "Trap: \"en particulier\" = in particular; \"un particulier\" = a private individual (\"vente entre particuliers\"); and \"singulier\" also means odd, strange (\"une singulière idée\").",
        ],
        examples: [
          { es: "Vente de voiture entre particuliers.", en: "Car for sale, private seller." },
          { es: "Chaque être humain est singulier.", en: "Every human being is unique." },
          { es: "Les jeunes, en particulier, sont touchés par la crise.", en: "Young people in particular are hit by the crisis." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Car for sale, [private sellers].",
            sentence: "Voiture à vendre, entre ___.",
            answer: "particuliers",
            explanation: "\"Un particulier\" = a private individual, as opposed to a professional.",
          },
          {
            type: "listen-choose",
            audio: "Quelle singulière façon de dire bonjour !",
            question: "What does it mean?",
            options: ["What a strange way to say hello!", "What a unique way to say goodbye!", "What a single way to say hello!", "What a lonely way to say hello!"],
            correctIndex: 0,
            explanation: "Before the noun, \"singulier\" often means odd, strange; after it (\"un être singulier\") it tends to mean unique. It never means single in the sense of unmarried.",
          },
        ],
      },
      {
        heading: "Subject and object",
        body: [
          "\"Le sujet\" is the conscious being who knows or acts; \"l'objet\" is what is known or acted upon. \"Subjectif\" (depending on the subject) and \"objectif\" (independent of the subject, or impartial). In everyday French, \"un objectif\" is also a goal and a camera lens.",
        ],
        examples: [
          { es: "Le goût est-il purement subjectif ?", en: "Is taste purely subjective?" },
          { es: "Un journaliste doit rester objectif.", en: "A journalist must remain impartial." },
          { es: "Mon objectif est de finir ce livre avant l'été.", en: "My goal is to finish this book before the summer." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "This judgement is [far from objective].",
            sentence: "Ce jugement est ___.",
            answer: "loin d'être objectif",
            explanation: "\"Objectif\" (impartial, independent of the subject) is the opposite of \"subjectif\"; \"loin d'être\" + adjective = far from being.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Un arbitre doit rester subjectif pendant le match.",
            answer: "Un arbitre doit rester objectif pendant le match.",
            explanation: "A referee must be impartial, which is \"objectif\". \"Subjectif\" means depending on the subject's own view, the opposite of what is required.",
          },
        ],
      },
      {
        heading: "End and means",
        body: [
          "\"La fin\" (the end, aim) and \"le moyen\" (the means) structure moral debate: \"la fin justifie-t-elle les moyens ?\" (does the end justify the means?). Kant's formula: treat humanity \"toujours en même temps comme une fin, et jamais simplement comme un moyen\". Note \"le moyen\" singular, \"les moyens\" plural, and \"avoir les moyens\" = to be able to afford.",
        ],
        examples: [
          { es: "La fin justifie-t-elle les moyens ?", en: "Does the end justify the means?" },
          { es: "Il ne faut jamais traiter autrui simplement comme un moyen.", en: "We must never treat others merely as a means." },
          { es: "Je n'ai pas les moyens de m'acheter une voiture.", en: "I can't afford to buy a car." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "\"Je n'ai pas les moyens.\" What does it mean?",
            options: ["I can't afford it.", "I don't have the methods.", "I don't have the aims.", "I'm not average."],
            correctIndex: 0,
            explanation: "\"Avoir les moyens\" = to have the money, to be able to afford.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into an exam question with inversion.",
            source: "Le progrès technique est une fin en soi.",
            answer: "Le progrès technique est-il une fin en soi ?",
            explanation: "Noun subject + verb + pronoun: \"le progrès technique est-il\". \"Une fin en soi\" is an end in itself, the opposite of \"un moyen\".",
          },
        ],
      },
      {
        heading: "Trap: à cette fin, à la fin, le but",
        body: [
          "Trap: \"à cette fin\" (to this end) vs \"à la fin\" (at the end); \"la fin\" meaning aim is literary and philosophical, so in everyday French say \"le but\" or \"l'objectif\".",
        ],
        examples: [
          { es: "À cette fin, le gouvernement a créé une commission.", en: "To this end, the government set up a committee." },
          { es: "À la fin du film, tout le monde pleurait.", en: "At the end of the film, everyone was crying." },
          { es: "Le but de cette réunion est de fixer un calendrier.", en: "The aim of this meeting is to set a timetable." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "À cette fin, la mairie a ouvert un nouveau centre d'accueil.",
            question: "What does it mean?",
            options: ["To this end, the town hall has opened a new reception centre.", "In the end, the town hall opened a new reception centre.", "At the end of the year, the reception centre closed.", "Finally, the town hall closed the centre."],
            correctIndex: 0,
            explanation: "\"À cette fin\" means to this end, for this purpose; \"à la fin\" would mean at the end.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[To this end], we will meet every Monday.",
            sentence: "___, nous nous réunirons chaque lundi.",
            answer: "À cette fin",
            altAnswers: ["Dans ce but", "Pour cela"],
            explanation: "\"À cette fin\" (to this end) introduces the action that serves the aim just stated. \"À la fin\" (at the end) would change the meaning entirely.",
          },
        ],
      },
      {
        heading: "In fact and by right",
        body: [
          "\"En fait\" (in fact, as things are) and \"en droit\" (in principle, by right) are a crucial philosophical pair: \"en droit, tous les citoyens sont égaux ; en fait, les inégalités persistent\". \"Une question de fait\" asks what is; \"une question de droit\" asks what ought to be or what is legitimate. \"De fait\" = de facto; \"de droit\" = de jure.",
        ],
        examples: [
          { es: "En droit, tous les citoyens sont égaux ; en fait, les inégalités persistent.", en: "In principle, all citizens are equal; in fact, inequalities persist." },
          { es: "Il est devenu chef de fait, sans avoir été élu.", en: "He became the de facto leader without having been elected." },
          { es: "De droit, la présidence revient au doyen d'âge.", en: "By right, the chair goes to the oldest member." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "He became the [de facto] leader.",
            sentence: "Il est devenu le chef ___.",
            answer: "de fait",
            explanation: "\"De fait\" = de facto; \"de droit\" = de jure.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "In principle, all citizens are equal; in fact, they are not.",
            answer: "En droit, tous les citoyens sont égaux ; en fait, ils ne le sont pas.",
            altAnswers: ["En principe, tous les citoyens sont égaux ; en fait, ils ne le sont pas.", "En droit, tous les citoyens sont égaux ; dans les faits, ils ne le sont pas.", "En droit, tous les citoyens sont égaux, mais en fait, ils ne le sont pas."],
            explanation: "\"En droit / en fait\" opposes principle and reality; \"le\" stands for the adjective \"égaux\".",
          },
        ],
      },
      {
        heading: "Essence and appearance, being and seeming",
        body: [
          "\"L'essence\" (what a thing really is) vs \"l'apparence\" (how it appears): \"au-delà des apparences\", \"essentiel\" (essential) vs \"apparent\" (seeming, visible). Related pairs: \"l'être et le paraître\" (being and seeming), \"le fond et la forme\" (substance and form), \"l'abstrait et le concret\", \"l'absolu et le relatif\".",
        ],
        examples: [
          { es: "Nos sociétés privilégient le paraître sur l'être.", en: "Our societies favour seeming over being." },
          { es: "Au-delà des apparences, ce texte est profondément pessimiste.", en: "Beyond appearances, this text is deeply pessimistic." },
          { es: "Tout est-il relatif ?", en: "Is everything relative?" },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: This film favours form over substance.",
            words: ["Ce film", "privilégie", "la forme", "sur le fond."],
            translation: "This film favours form over substance.",
            explanation: "\"Le fond et la forme\" (substance and form) is one of the classic pairs; \"privilégier A sur B\" is to favour A over B.",
          },
        ],
      },
      {
        heading: "Build sentences with the pairs",
        body: [
          "Build sentences with the pairs: \"Il convient de distinguer la question de fait de la question de droit.\" \"Ce débat oppose l'être au paraître.\" \"Tout est-il relatif ?\" Each pair gives you an axis for a paragraph.",
        ],
        examples: [
          { es: "Il convient de distinguer la question de fait de la question de droit.", en: "We should distinguish the question of fact from the question of right." },
          { es: "Ce débat oppose l'abstrait au concret.", en: "This debate pits the abstract against the concrete." },
          { es: "Il faut distinguer l'absolu du relatif.", en: "We must distinguish the absolute from the relative." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Ce débat oppose l'être avec le paraître.",
            answer: "Ce débat oppose l'être au paraître.",
            explanation: "The construction is \"opposer A à B\" (\"au\" = à + le). \"Avec\" is a calque of the English construction.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "matching",
        instructions: "Match each concept with its opposite.",
        pairs: [
          { left: "la nécessité", right: "contingency (la contingence)" },
          { left: "l'universel", right: "the particular (le particulier)" },
          { left: "la fin", right: "the means (le moyen)" },
          { left: "l'essence", right: "appearance (l'apparence)" },
          { left: "le droit", right: "fact (le fait)" },
        ],
        explanation: "Each pair gives an axis for a philosophical argument.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "My goal is to remain objective.",
        answer: "Mon objectif est de rester objectif.",
        altAnswers: ["Mon but est de rester objectif.", "Mon objectif est de rester objective."],
        explanation: "The same word twice: the noun \"un objectif\" (a goal) and the adjective \"objectif\" (impartial).",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Is everything negotiable?",
        answer: "Tout est-il négociable ?",
        altAnswers: ["Est-ce que tout est négociable ?"],
        explanation: "\"Tout\" as subject takes simple inversion with \"-il\": \"tout est-il...?\", the shape of a dissertation question.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "Sleep is [a necessity], not a luxury.",
        sentence: "Le sommeil est ___, pas un luxe.",
        answer: "une nécessité",
        explanation: "\"Nécessaire\" gives the noun \"la nécessité\"; with \"une\" it names one thing that cannot be done without.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Beyond appearances, the book is very sad.",
        answer: "Au-delà des apparences, le livre est très triste.",
        altAnswers: ["Au-delà des apparences, ce livre est très triste.", "Derrière les apparences, le livre est très triste.", "Sous les apparences, le livre est très triste."],
        explanation: "\"Au-delà des apparences\" (plural) = beyond appearances.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Is the means as important as the end?",
        words: ["Le moyen", "est-il", "aussi important", "que la fin ?"],
        translation: "Is the means as important as the end?",
        explanation: "\"Le moyen\" (singular) and \"la fin\" (the aim) form the classic moral pair.",
      },
      {
        type: "dictation",
        audio: "Le paraître l'emporte-t-il sur l'être ?",
        explanation: "\"L'emporter sur\" (to prevail over); \"le paraître\" and \"l'être\" are infinitives used as nouns.",
      },
      {
        type: "speak",
        text: "En droit, le vote est secret ; en fait, tout le monde le sait.",
        prompt: "Say it in French: In principle, the vote is secret; in fact, everyone knows.",
        explanation: "\"En droit... en fait\": what ought to be versus what is.",
      },
      {
        type: "speak",
        text: "Il convient de distinguer le fond de la forme.",
        tip: "\"Convient\": the final ent is nasal here, [kɔ̃vjɛ̃], because it is the verb \"convenir\".",
        explanation: "\"Distinguer A de B\" with one of the classic pairs: substance and form.",
      },
    ],
  },
  {
    slug: "c2-philosophy-3",
    level: "FR-C2",
    number: 5,
    title: "La Philosophie et les Idées Abstraites, Part 3 of 3",
    summary: "The French dissertation de philosophie: analysing the question, defining the terms (entendre par, en tant que), building the problématique with indirect questions and a paradox, making distinctions (il convient de distinguer), and handling objections; with Rousseau's opening of the Contrat social.",
    duration: "21 min",
    sections: [
      {
        heading: "Analyse the question first",
        body: [
          "A French dissertation never answers the question straight away. It starts by \"analyser le sujet\": weighing every word. Take \"Peut-on être libre sans les autres ?\". \"Peut-on\" asks both whether it is possible (\"est-il possible de\") and whether it is legitimate (\"a-t-on le droit de\"). \"Être libre\" can mean doing what one wants, being independent, or being autonomous (giving oneself one's own law). \"Sans les autres\" can mean alone, without help, or against others.",
        ],
        examples: [
          { es: "« Peut-on » interroge à la fois la possibilité et la légitimité.", en: "'Can we' asks about both possibility and legitimacy." },
          { es: "« Faut-il » interroge à la fois la nécessité et le devoir.", en: "'Must we' asks about both necessity and duty." },
          { es: "« Le travail » peut désigner l'effort, l'emploi ou l'œuvre.", en: "'Work' can refer to effort, employment or a finished work." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "\"Peut-on mentir ?\" What does \"peut-on\" ask?",
            options: ["Both whether it is possible and whether it is legitimate", "Only whether it is physically possible", "Only whether people often do it", "Whether it is compulsory"],
            correctIndex: 0,
            explanation: "\"Pouvoir\" covers capacity and right; a good analysis plays on both.",
          },
        ],
      },
      {
        heading: "The formulas of definition",
        body: [
          "The formulas of definition: \"il convient tout d'abord de définir les termes du sujet\", \"on entend généralement par liberté...\" (by freedom we usually mean), \"si l'on entend par là que...\", \"la liberté, en tant que pouvoir de choisir, ...\" (as, qua), \"au sens strict / au sens large\", \"au sens où...\" (in the sense that).",
        ],
        examples: [
          { es: "Il convient tout d'abord de définir les termes du sujet.", en: "We should first define the terms of the question." },
          { es: "On entend généralement par liberté l'absence de contrainte.", en: "Freedom is usually taken to mean the absence of constraint." },
          { es: "Si l'on entend par là que nous pouvons tout faire, la réponse est non.", en: "If by that we mean we can do anything, the answer is no." },
          { es: "Au sens strict, être libre, c'est se donner sa propre loi.", en: "In the strict sense, to be free is to give oneself one's own law." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "We should first define what we mean by work.",
            answer: "Il convient tout d'abord de définir ce qu'on entend par travail.",
            altAnswers: ["Il convient tout d'abord de définir ce que l'on entend par travail.", "Il convient d'abord de définir ce qu'on entend par travail.", "Il convient d'abord de définir ce que l'on entend par travail.", "Il convient tout d'abord de définir ce qu'on entend par le travail."],
            explanation: "\"Il convient de\" + infinitive is the dissertation's polite way of saying we should; \"entendre par\" is to mean by, with \"ce que\" as its object.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[In the strict sense], to be free is to obey one's own law.",
            sentence: "___, être libre, c'est obéir à sa propre loi.",
            answer: "Au sens strict",
            explanation: "\"Au sens strict / au sens large\": precise a definition.",
          },
        ],
      },
      {
        heading: "Trap: en tant que, tant que, autant que",
        body: [
          "Trap: \"en tant que\" (as, in the capacity of) is not \"autant que\" (as much as) nor \"tant que\" (as long as). \"L'homme en tant qu'être social\" = man as a social being.",
        ],
        examples: [
          { es: "L'homme, en tant qu'être social, a besoin des autres.", en: "Man, as a social being, needs others." },
          { es: "Tant que nous vivrons ensemble, il faudra des lois.", en: "As long as we live together, we will need laws." },
          { es: "Il travaille autant que son frère.", en: "He works as much as his brother." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The citizen, [as] a voter, holds power.",
            sentence: "Le citoyen, ___ électeur, détient le pouvoir.",
            answer: "en tant qu'",
            explanation: "\"En tant que\" (as, in the capacity of) elides before a vowel: \"en tant qu'électeur\". \"Tant que\" means as long as, \"autant que\" as much as.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Je vous parle autant que médecin, pas en tant qu'ami.",
            answer: "Je vous parle en tant que médecin, pas en tant qu'ami.",
            explanation: "In the capacity of is \"en tant que\". \"Autant que\" means as much as, which changes the meaning to as much as a doctor.",
          },
        ],
      },
      {
        heading: "The problématique: show a tension",
        body: [
          "\"La problématique\" turns the question into a real problem by showing a tension: two reasonable answers that contradict each other. For our question: on the one hand, others limit my freedom (laws, judgement, constraints); on the other, without others I could not even become free (language, education, recognition). Hence a paradox: \"les autres sont-ils l'obstacle ou la condition de ma liberté ?\".",
        ],
        examples: [
          { es: "Les autres sont-ils l'obstacle ou la condition de ma liberté ?", en: "Are others the obstacle to my freedom or its condition?" },
          { es: "Ne sont-ils pas aussi ce sans quoi je ne pourrais jamais devenir libre ?", en: "Are they not also that without which I could never become free?" },
          { es: "Le travail nous asservit-il ou nous libère-t-il ?", en: "Does work enslave us or free us?" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "The question is « Le travail est-il une contrainte ? ». Which problématique shows a real tension?",
            options: ["Si le travail semble d'abord nous contraindre, n'est-il pas aussi ce qui nous permet de nous réaliser ?", "Le travail est une contrainte, comme chacun sait.", "Il s'agit de dire si l'on aime son travail.", "Le travail est-il une contrainte ou une contrainte ?"],
            correctIndex: 0,
            explanation: "A problématique sets two reasonable answers against each other: work constrains us, yet it may also be what fulfils us. The other options state an opinion, change the subject or repeat the question.",
          },
        ],
      },
      {
        heading: "Indirect questions: no inversion, no est-ce que",
        body: [
          "It is usually phrased with indirect questions: \"il s'agit de se demander si...\", \"on peut dès lors se demander dans quelle mesure...\", \"la question est de savoir si...\", \"reste à savoir comment...\". In indirect questions there is no inversion and no \"est-ce que\": \"on peut se demander si la liberté suppose les autres\", never \"si la liberté suppose-t-elle\". \"Ce que\" replaces \"qu'est-ce que\": \"on peut se demander ce que signifie être libre\".",
        ],
        examples: [
          { es: "Il s'agit de se demander si la liberté suppose les autres.", en: "The question is whether freedom presupposes others." },
          { es: "On peut dès lors se demander dans quelle mesure nous sommes responsables.", en: "We may therefore ask to what extent we are responsible." },
          { es: "La question est de savoir si le bonheur dépend de nous.", en: "The question is whether happiness depends on us." },
          { es: "On peut se demander ce que signifie être libre.", en: "We may ask what being free means." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which indirect question is correct?",
            options: ["On peut se demander si la liberté suppose les autres.", "On peut se demander si la liberté suppose-t-elle les autres.", "On peut se demander est-ce que la liberté suppose les autres.", "On peut se demander qu'est-ce que la liberté suppose."],
            correctIndex: 0,
            explanation: "Indirect questions keep normal word order: no inversion, no \"est-ce que\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into an indirect question with « On peut se demander si… ».",
            source: "Le travail rend-il heureux ?",
            answer: "On peut se demander si le travail rend heureux.",
            explanation: "In an indirect question the inversion disappears: \"le travail rend-il\" becomes \"si le travail rend\". No \"est-ce que\", and a full stop instead of a question mark.",
          },
        ],
      },
      {
        heading: "A model problématique",
        body: [
          "A model problématique: \"Si les autres semblent d'abord limiter ma liberté, ne sont-ils pas aussi ce sans quoi je ne pourrais jamais devenir libre ? Il s'agit donc de se demander si autrui est l'obstacle ou la condition de ma liberté.\"",
        ],
        examples: [
          { es: "Si la loi semble limiter ma liberté, n'en est-elle pas aussi la garantie ?", en: "If the law seems to limit my freedom, is it not also its guarantee?" },
          { es: "Il s'agit donc de se demander si la loi est un obstacle ou une protection.", en: "The question, then, is whether the law is an obstacle or a protection." },
          { es: "Si le travail semble d'abord une contrainte, n'est-il pas aussi ce qui nous construit ?", en: "If work first seems a constraint, is it not also what shapes us?" },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "We may ask [to what extent] happiness depends on us.",
            sentence: "On peut se demander ___ le bonheur dépend de nous.",
            answer: "dans quelle mesure",
            explanation: "\"Dans quelle mesure\" = to what extent: the favourite phrase of the problématique.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "We may ask what work gives us.",
            answer: "On peut se demander ce que le travail nous apporte.",
            altAnswers: ["On peut se demander ce que nous apporte le travail.", "On peut se demander ce que le travail nous donne."],
            explanation: "\"Qu'est-ce que le travail nous apporte ?\" becomes \"ce que le travail nous apporte\" in an indirect question.",
          },
        ],
      },
      {
        heading: "Distinctions and objections",
        body: [
          "The argument progresses by distinctions and objections: \"il convient de distinguer la liberté d'indépendance de la liberté d'autonomie\", \"on pourrait objecter que...\", \"à cette objection, on peut répondre que...\", \"cette position, si séduisante soit-elle, se heurte à une difficulté\". The concessive \"si + adjective + soit-il / soit-elle\" (however... it may be) is a Mastery classic.",
        ],
        examples: [
          { es: "Il convient de distinguer la liberté d'indépendance de la liberté d'autonomie.", en: "We should distinguish freedom as independence from freedom as autonomy." },
          { es: "On pourrait objecter que les lois limitent notre liberté.", en: "It could be objected that laws limit our freedom." },
          { es: "À cette objection, on peut répondre que la loi protège aussi notre liberté.", en: "To this objection, one may reply that the law also protects our freedom." },
          { es: "Cette position, si séduisante soit-elle, se heurte à une difficulté.", en: "This position, however attractive it may be, runs into a difficulty." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "This argument, [however strong it may be], has a weakness.",
            sentence: "Cet argument, ___, présente une faiblesse.",
            answer: "si fort soit-il",
            altAnswers: ["si séduisante qu'elle soit", "aussi séduisante soit-elle", "aussi séduisante qu'elle soit", "pour séduisante qu'elle soit"],
            explanation: "\"Si\" + adjective + \"soit-il\": however... it may be. The adjective and pronoun agree with \"cet argument\" (masculine): \"si fort soit-il\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "It could be objected that work is a necessity.",
            answer: "On pourrait objecter que le travail est une nécessité.",
            altAnswers: ["On pourrait objecter que le travail constitue une nécessité."],
            explanation: "\"On pourrait objecter que\" + indicative introduces the objection your argument will then answer.",
          },
        ],
      },
      {
        heading: "Rousseau's paradox",
        body: [
          "Rousseau opens \"Du contrat social\" (1762) with a famous paradox: \"L'homme est né libre, et partout il est dans les fers. Tel se croit le maître des autres, qui ne laisse pas d'être plus esclave qu'eux.\" The first sentence opposes nature (\"né libre\") and society (\"dans les fers\"); the second turns the paradox against the powerful. \"Tel... qui\" (a man who... / someone...) and \"ne pas laisser de\" (not to cease to, to be nonetheless) are classical constructions.",
        ],
        examples: [
          { es: "« L'homme est né libre, et partout il est dans les fers. »", en: "'Man is born free, and everywhere he is in chains.'" },
          { es: "Tel croit commander, qui obéit en réalité.", en: "Many a man thinks he is in command who in fact obeys." },
          { es: "Il ne laissait pas d'être inquiet malgré les bonnes nouvelles.", en: "He was nonetheless worried despite the good news." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In Rousseau's \"Tel se croit le maître des autres, qui ne laisse pas d'être plus esclave qu'eux\", what does \"ne laisse pas d'être\" mean?",
            options: ["is nonetheless", "does not let himself be", "stops being", "refuses to be"],
            correctIndex: 0,
            explanation: "Classical \"ne pas laisser de\" + infinitive = not to cease to, to be nonetheless.",
          },
        ],
      },
      {
        heading: "Using a quotation in a dissertation",
        body: [
          "Using it in a dissertation: \"Comme le souligne Rousseau dès l'ouverture du Contrat social, la domination ne libère pas le maître : celui qui se croit libre parce qu'il commande aux autres dépend en réalité d'eux.\" Quote briefly, then explain in your own words and connect to the problématique.",
        ],
        examples: [
          { es: "Celui qui commande aux autres dépend en réalité d'eux.", en: "Whoever commands others actually depends on them." },
          { es: "Comme le souligne Rousseau, la domination ne libère pas le maître.", en: "As Rousseau stresses, domination does not set the master free." },
          { es: "Il faut citer brièvement, puis expliquer avec ses propres mots.", en: "You should quote briefly, then explain in your own words." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You have just quoted Rousseau in your dissertation. What should come next?",
            options: ["An explanation in your own words, linked to your problématique", "Another quotation from a different philosopher", "A new paragraph on an unrelated point", "Nothing: the quotation speaks for itself"],
            correctIndex: 0,
            explanation: "A quotation supports an argument but never replaces it: quote briefly, explain it in your own words, then connect it to the problématique.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The question is whether work makes us free.",
        answer: "La question est de savoir si le travail nous rend libres.",
        altAnswers: ["La question est de savoir si le travail nous rend libre.", "Il s'agit de savoir si le travail nous rend libres."],
        explanation: "\"La question est de savoir si\" introduces an indirect question: no inversion after \"si\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "By happiness we usually mean a lasting satisfaction.",
        answer: "On entend généralement par bonheur une satisfaction durable.",
        altAnswers: ["Par bonheur, on entend généralement une satisfaction durable.", "On entend en général par bonheur une satisfaction durable."],
        explanation: "\"Entendre par X\": to mean by X. The term defined comes right after \"par\", without an article.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "[To this objection], one may reply that the law protects us.",
        sentence: "___, on peut répondre que la loi nous protège.",
        answer: "À cette objection",
        explanation: "\"Répondre à une objection\": the preposition comes first in the fronted phrase.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Is the law the enemy or the ally of freedom?",
        answer: "La loi est-elle l'ennemie ou l'alliée de la liberté ?",
        altAnswers: ["Est-ce que la loi est l'ennemie ou l'alliée de la liberté ?"],
        explanation: "A paradox phrased as a direct question, with complex inversion: \"la loi est-elle\". \"L'ennemie\" and \"l'alliée\" agree with \"la loi\".",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: The question is whether we can be happy alone.",
        words: ["La question", "est de savoir", "si", "l'on peut", "être heureux", "seul."],
        translation: "The question is whether we can be happy alone.",
        explanation: "An indirect question after \"est de savoir si\": ordinary word order, no inversion.",
      },
      {
        type: "listen-choose",
        audio: "Il convient de distinguer le travail de l'emploi.",
        question: "What is the speaker doing?",
        options: ["Drawing a distinction between two senses of freedom", "Rejecting freedom altogether", "Giving a historical example", "Concluding the essay"],
        correctIndex: 0,
        explanation: "\"Il convient de distinguer A de B\" introduces a distinction: work in general is not the same as having a job.",
      },
      {
        type: "dictation",
        audio: "Reste à savoir comment concilier liberté et sécurité.",
        explanation: "\"Reste à savoir\" (it remains to be seen) + indirect question: no inversion after \"comment\".",
      },
      {
        type: "speak",
        text: "Cette thèse, si convaincante soit-elle, néglige un point.",
        prompt: "Say it in French: This thesis, however convincing it may be, overlooks one point.",
        explanation: "\"Si\" + adjective + \"soit-elle\", agreeing with \"cette thèse\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Rousseau opens his book with a paradox.",
        answer: "Rousseau ouvre son livre sur un paradoxe.",
        altAnswers: ["Rousseau ouvre son livre par un paradoxe.", "Rousseau commence son livre par un paradoxe."],
        explanation: "\"Ouvrir un livre sur\" or \"par\" + noun: to open with.",
      },
      {
        type: "speak",
        text: "Tel se croit libre, qui ne laisse pas d'être dépendant.",
        tip: "\"Fers\": the s is silent, [fɛʁ].",
        explanation: "Rousseau's structure: \"tel... qui\" (many a man who...) and \"ne pas laisser de\" (to be nonetheless).",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Turn it into an indirect question with « On peut se demander… ».",
        source: "Qu'est-ce qu'une vie réussie ?",
        answer: "On peut se demander ce qu'est une vie réussie.",
        explanation: "In an indirect question \"qu'est-ce que\" becomes \"ce que\": \"ce qu'est une vie réussie\", with the verb before its noun subject.",
      },
    ],
  },
  {
    slug: "c2-philosophical-argument-text-detective",
    level: "FR-C2",
    number: 6,
    title: "Text Detective: Analyser un Argument Philosophique",
    summary: "Analyse Pascal's « roseau pensant » fragment: identify its premises, its conclusion, its implicit assumptions and possible objections, decode its classical French, and reformulate the reasoning in your own words.",
    duration: "21 min",
    sections: [
      {
        heading: "The text: Pascal's thinking reed",
        body: [
          "Pascal, \"Pensées\" (published 1670): \"L'homme n'est qu'un roseau, le plus faible de la nature ; mais c'est un roseau pensant. Il ne faut pas que l'univers entier s'arme pour l'écraser : une vapeur, une goutte d'eau suffit pour le tuer. Mais, quand l'univers l'écraserait, l'homme serait encore plus noble que ce qui le tue, puisqu'il sait qu'il meurt, et l'avantage que l'univers a sur lui ; l'univers n'en sait rien. Toute notre dignité consiste donc en la pensée.\"",
        ],
        examples: [
          { es: "L'homme n'est qu'un roseau, le plus faible de la nature.", en: "Man is only a reed, the weakest thing in nature." },
          { es: "Une vapeur, une goutte d'eau suffit pour le tuer.", en: "A vapour, a drop of water is enough to kill him." },
          { es: "Les « Pensées » ont été publiées après la mort de Pascal, en 1670.", en: "The Pensees were published after Pascal's death, in 1670." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "According to the fragment, why is man nobler than the universe that crushes him?",
            options: ["Because he knows that he dies, and the universe knows nothing", "Because he is stronger than a reed", "Because the universe cannot kill him", "Because he can escape death by thinking"],
            correctIndex: 0,
            explanation: "\"Puisqu'il sait qu'il meurt, et l'avantage que l'univers a sur lui ; l'univers n'en sait rien\": knowledge, not strength, makes man nobler. Pascal concedes that man is weak and mortal.",
          },
        ],
      },
      {
        heading: "First, find the premises",
        body: [
          "First, find the premises. Premise 1: man is physically the weakest of beings (\"un roseau, le plus faible de la nature\"). Premise 2: a trifle can kill him (\"une vapeur, une goutte d'eau suffit\"). Premise 3: man knows that he dies and knows the universe's power over him; the universe knows nothing. The images (reed, vapour, drop) make an abstract point concrete.",
        ],
        examples: [
          { es: "La première prémisse porte sur la faiblesse physique de l'homme.", en: "The first premise concerns man's physical weakness." },
          { es: "Les images rendent concrète une idée abstraite.", en: "The images make an abstract idea concrete." },
          { es: "La deuxième prémisse souligne qu'un rien peut tuer l'homme.", en: "The second premise stresses that a trifle can kill man." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "« Tout homme est mortel ; or Socrate est un homme ; donc Socrate est mortel. » Which part is a premise?",
            options: ["Socrate est un homme.", "Socrate est mortel.", "donc", "or"],
            correctIndex: 0,
            explanation: "Premises are the statements the argument starts from (\"tout homme est mortel\", \"Socrate est un homme\"); \"donc\" introduces the conclusion, and \"or\" is the link between the premises.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The argument rests on two [premises] and a conclusion.",
            sentence: "L'argument repose sur deux ___ et une conclusion.",
            answer: "prémisses",
            explanation: "\"Une prémisse\" (feminine, with an accent) is a starting statement of an argument; plural \"prémisses\".",
          },
        ],
      },
      {
        heading: "Classical French: il ne faut pas que",
        body: [
          "Watch the classical French: \"Il ne faut pas que l'univers entier s'arme\" does not mean the universe must not arm itself; in seventeenth-century usage it means there is no need for the whole universe to arm itself. Modern French would say \"il n'est pas nécessaire que\". This is one of the most frequent misreadings of the text.",
        ],
        examples: [
          { es: "Il ne faut pas que l'univers entier s'arme pour l'écraser.", en: "The whole universe need not arm itself to crush him." },
          { es: "Il n'est pas nécessaire que l'univers entier s'arme pour l'écraser.", en: "It isn't necessary for the whole universe to arm itself to crush him." },
          { es: "Il n'est pas nécessaire que tout le monde vienne.", en: "Not everyone needs to come." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In a seventeenth-century text: « Il ne faut pas qu'un roi soit cruel pour être craint. » What does it mean?",
            options: ["A king need not be cruel to be feared.", "A king must not be cruel if he wants to be feared.", "A king refuses to be cruel.", "A king should be cruel to be feared."],
            correctIndex: 0,
            explanation: "In classical French \"il ne faut pas que\" often means there is no need for: here, cruelty is not necessary to inspire fear. Reading it as a prohibition is the classic misreading.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it into modern French with « il n'est pas nécessaire que ».",
            source: "Il ne faut pas qu'une armée entière vienne pour prendre ce village.",
            answer: "Il n'est pas nécessaire qu'une armée entière vienne pour prendre ce village.",
            explanation: "The classical \"il ne faut pas que\" (no need for) becomes \"il n'est pas nécessaire que\"; the subjunctive \"vienne\" stays.",
          },
        ],
      },
      {
        heading: "The turn: quand + conditional",
        body: [
          "The argument turns on \"mais\" twice. The second \"mais\" introduces a concessive hypothesis: \"quand l'univers l'écraserait, l'homme serait encore plus noble que ce qui le tue\". \"Quand\" + conditional means even if (= \"même si l'univers l'écrasait\"), a structure you saw at the Advanced level with \"quand bien même\". The conditional in both clauses marks a hypothesis pushed to the extreme.",
        ],
        examples: [
          { es: "Quand l'univers l'écraserait, l'homme serait encore plus noble que ce qui le tue.", en: "Even if the universe crushed him, man would still be nobler than what kills him." },
          { es: "Même si l'univers l'écrasait, l'homme resterait plus noble.", en: "Even if the universe crushed him, man would remain nobler." },
          { es: "Quand il me l'ordonnerait, je refuserais.", en: "Even if he ordered me to, I would refuse." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Quand tout le monde me donnerait tort, je ne changerais pas d'avis.",
            question: "What does \"quand\" mean here?",
            options: ["even if", "when", "because", "as soon as"],
            correctIndex: 0,
            explanation: "\"Quand\" + conditional in both clauses means even if: a hypothesis pushed to the extreme, like Pascal's \"quand l'univers l'écraserait\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change « même si » into « quand » + conditional.",
            source: "Même si tu me suppliais, je ne céderais pas.",
            answer: "Quand tu me supplierais, je ne céderais pas.",
            altAnswers: ["Quand bien même tu me supplierais, je ne céderais pas."],
            explanation: "\"Même si\" + imperfect becomes \"quand\" (or \"quand bien même\") + conditional: \"tu me supplierais\". The main clause keeps the conditional.",
          },
        ],
      },
      {
        heading: "Puisque and donc: reason and conclusion",
        body: [
          "\"Puisque\" gives the reason as already admitted: man knows he dies, the universe doesn't. Then \"donc\" introduces the conclusion: \"Toute notre dignité consiste donc en la pensée.\" The structure is: weakness (concession), knowledge (reason), dignity (conclusion). Pascal's strategy is to concede everything on the side of force in order to win everything on the side of thought.",
        ],
        examples: [
          { es: "L'homme sait qu'il meurt ; l'univers n'en sait rien.", en: "Man knows that he dies; the universe knows nothing of it." },
          { es: "Toute notre dignité consiste donc en la pensée.", en: "All our dignity therefore lies in thought." },
          { es: "Puisque tu le sais, pourquoi le demandes-tu ?", en: "Since you know, why are you asking?" },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Puisque la machine ne sait rien, elle ne peut pas être digne.",
            question: "What does « puisque » present here?",
            options: ["A reason treated as already admitted", "A hypothesis pushed to the extreme", "A concession to the opponent", "The final conclusion"],
            correctIndex: 0,
            explanation: "\"Puisque\" gives a reason the listener is assumed to accept already, as in Pascal's \"puisqu'il sait qu'il meurt\". The conclusion would come with \"donc\".",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Their happiness [lies in] simple things.",
            sentence: "Leur bonheur ___ des choses simples.",
            answer: "consiste en",
            altAnswers: ["réside dans", "tient à"],
            explanation: "\"Consister en\" + noun: to lie in, to consist of, as in \"toute notre dignité consiste en la pensée\".",
          },
        ],
      },
      {
        heading: "Describing the argument",
        body: [
          "To describe it: \"Pascal procède par concession\", \"il pousse l'hypothèse à l'extrême\", \"le connecteur « donc » introduit la conclusion\", \"l'argument repose sur une opposition entre la force et la pensée\".",
        ],
        examples: [
          { es: "Pascal pousse l'hypothèse à l'extrême.", en: "Pascal pushes the hypothesis to the extreme." },
          { es: "L'argument repose sur une opposition entre la force et la pensée.", en: "The argument rests on an opposition between force and thought." },
          { es: "L'auteur procède par concession avant de conclure.", en: "The author proceeds by concession before concluding." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The connector « donc » [introduces] the conclusion.",
            sentence: "Le connecteur « donc » ___ la conclusion.",
            answer: "introduit",
            explanation: "\"Introduire\" for a connector that opens a step of the reasoning.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The essay [rests on] an opposition between nature and culture.",
            sentence: "L'essai ___ une opposition entre nature et culture.",
            answer: "repose sur",
            altAnswers: ["s'appuie sur"],
            explanation: "\"Reposer sur\" (to rest on) names the structure an argument is built on.",
          },
        ],
      },
      {
        heading: "Name the implicit assumptions",
        body: [
          "Every argument rests on implicit assumptions (\"des présupposés\", \"des postulats implicites\"). Here: that knowing is superior to being strong; that dignity is measured by consciousness, not by power or size; that the universe has no consciousness. A critical reader names them: \"le raisonnement présuppose que...\", \"Pascal tient pour acquis que...\" (takes for granted).",
        ],
        examples: [
          { es: "Le raisonnement présuppose que savoir vaut mieux qu'être fort.", en: "The reasoning presupposes that knowing is better than being strong." },
          { es: "Pascal tient pour acquis que l'univers n'a pas de conscience.", en: "Pascal takes it for granted that the universe has no consciousness." },
          { es: "Cette publicité présuppose que le bonheur s'achète.", en: "This advert presupposes that happiness can be bought." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "« Il faut travailler plus pour gagner plus. » What does this slogan take for granted?",
            options: ["That more work is always paid more", "That nobody wants to earn more", "That work is a pleasure", "That wages are fixed by law"],
            correctIndex: 0,
            explanation: "The slogan's implicit assumption (\"présupposé\") is that extra work automatically brings extra pay. A critical reader names it: \"le slogan tient pour acquis que...\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The author takes it for granted that machines cannot think.",
            answer: "L'auteur tient pour acquis que les machines ne peuvent pas penser.",
            altAnswers: ["L'auteur tient pour acquis que les machines ne sauraient penser.", "L'auteur considère comme acquis que les machines ne peuvent pas penser."],
            explanation: "\"Tenir pour acquis que\" + indicative: to take for granted. It is the formula for naming an implicit assumption.",
          },
        ],
      },
      {
        heading: "Objections, fairly put",
        body: [
          "Possible objections: one could object that knowing one's death is also a source of anguish, not only of dignity (\"on pourrait objecter que...\"); or that thought exists in animals in some form; or that dignity should rather lie in action or in love. Formulate them fairly, then consider how Pascal could answer: for him, even anguish is a form of thought, and so of greatness.",
        ],
        examples: [
          { es: "On pourrait objecter que la conscience de la mort est aussi source d'angoisse.", en: "One could object that awareness of death is also a source of anguish." },
          { es: "On pourrait objecter que les plantes, elles aussi, réagissent à leur environnement.", en: "One could object that plants, too, react to their environment." },
          { es: "Pascal pourrait répondre que l'angoisse elle-même est une pensée.", en: "Pascal could reply that anguish itself is a thought." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "One could object that animals also think.",
            answer: "On pourrait objecter que les animaux pensent aussi.",
            altAnswers: ["On pourrait objecter que les animaux pensent également.", "On pourrait objecter que les animaux aussi pensent.", "On objectera que les animaux pensent aussi."],
            explanation: "\"On pourrait objecter que\" + indicative introduces a counter-argument.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "On pourrait objecter que la mort soit une source d'angoisse.",
            answer: "On pourrait objecter que la mort est une source d'angoisse.",
            explanation: "\"Objecter que\" presents a claim as a fact to be considered, so it takes the indicative: \"est\", not the subjunctive \"soit\".",
          },
        ],
      },
      {
        heading: "Reformulate in your own words",
        body: [
          "Reformulate in your own words, without the images: \"Pascal soutient que la grandeur de l'homme ne tient pas à sa force, qui est infime, mais à sa conscience : même anéanti par l'univers, l'homme lui reste supérieur, puisqu'il sait ce qui lui arrive.\" A good reformulation keeps the logic (concession, reason, conclusion) and changes the words.",
        ],
        examples: [
          { es: "La grandeur de l'homme ne tient pas à sa force, mais à sa conscience.", en: "Man's greatness does not lie in his strength, but in his consciousness." },
          { es: "Même anéanti par l'univers, l'homme lui reste supérieur.", en: "Even destroyed by the universe, man remains superior to it." },
          { es: "Une bonne reformulation garde la logique et change les mots.", en: "A good reformulation keeps the logic and changes the words." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which is the best reformulation of Pascal's conclusion?",
            options: ["La grandeur de l'homme tient à sa capacité de penser, non à sa force.", "L'homme est un roseau qui pense.", "L'univers est plus fort que l'homme.", "L'homme devrait devenir plus fort pour être digne."],
            correctIndex: 0,
            explanation: "It keeps the logic (thought vs force) without repeating Pascal's image.",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: Our value does not lie in our wealth.",
            words: ["Notre valeur", "ne tient pas", "à notre", "richesse."],
            translation: "Our value does not lie in our wealth.",
            explanation: "\"Tenir à\" (to lie in, to depend on) keeps Pascal's logic while changing the words: the aim of a good reformulation.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "This reasoning proceeds by concession.",
        answer: "Ce raisonnement procède par concession.",
        altAnswers: ["Ce raisonnement procède par concessions."],
        explanation: "\"Procéder par\" + noun describes a method of argument: concede first, then turn the point around.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The reasoning presupposes that everyone fears death.",
        answer: "Le raisonnement présuppose que tout le monde craint la mort.",
        altAnswers: ["Le raisonnement présuppose que tous craignent la mort.", "Le raisonnement suppose que tout le monde craint la mort.", "Le raisonnement présuppose que chacun craint la mort."],
        explanation: "\"Présupposer que\" + indicative names an assumption; \"tout le monde\" takes a singular verb (\"craint\").",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: All his strength lies in his patience.",
        words: ["Toute sa force", "consiste", "en", "sa patience."],
        translation: "All his strength lies in his patience.",
        explanation: "\"Consister en\" + noun, modelled on Pascal's conclusion.",
      },
      {
        type: "dictation",
        audio: "Pascal concède tout du côté de la force.",
        explanation: "\"Concéder\": Pascal's strategy is to give up everything on the side of force in order to win on the side of thought.",
      },
      {
        type: "speak",
        text: "La dignité de l'homme tient à sa pensée, non à sa force.",
        prompt: "Say it in French: Man's dignity lies in his thought, not in his strength.",
        explanation: "\"Tenir à\" + \"non à\": a reformulation that keeps the opposition between thought and force.",
      },
      {
        type: "speak",
        text: "On pourrait objecter que penser ne protège de rien.",
        tip: "\"Angoisse\": an-goisse, nasal an then a hard g.",
        explanation: "\"On pourrait objecter que\" + indicative introduces a fair objection.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "A single spark is enough to set the forest ablaze.",
        answer: "Une seule étincelle suffit pour embraser la forêt.",
        altAnswers: ["Une seule étincelle suffit à embraser la forêt.", "Une seule étincelle suffit pour mettre le feu à la forêt.", "Une seule étincelle suffit à mettre le feu à la forêt."],
        explanation: "Pascal's construction \"suffit pour\" + infinitive (or \"suffit à\"): a trifle is enough to cause a disaster.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Even if everyone left, I would stay.",
        answer: "Quand tout le monde partirait, je resterais.",
        altAnswers: ["Même si tout le monde partait, je resterais.", "Quand bien même tout le monde partirait, je resterais."],
        explanation: "\"Quand\" + conditional means even if; the plainer modern version is \"même si\" + imperfect: \"même si tout le monde partait\".",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "The text [takes it for granted] that the reader is a believer.",
        sentence: "Le texte ___ que le lecteur est croyant.",
        answer: "tient pour acquis",
        explanation: "\"Tenir pour acquis que\": to take for granted, the formula for naming an implicit assumption. \"Acquis\" stays invariable here.",
      },
    ],
  },
  {
    slug: "c2-philosophy-paragraph-mission",
    level: "FR-C2",
    number: 7,
    title: "Real-World Mission: Un Paragraphe de Dissertation",
    summary: "Write one full paragraph answering « La technique nous rend-elle plus libres ? »: an argument built on a conceptual distinction, a concrete example, an objection and its answer, and a link back to the problématique.",
    duration: "21 min",
    sections: [
      {
        heading: "Your mission: analyse the question",
        body: [
          "Your mission: write the second paragraph of the first part of a dissertation on \"La technique nous rend-elle plus libres ?\". First, the analysis. \"La technique\" is the set of tools and procedures by which humans transform nature (from the flint to the smartphone). \"Nous rend-elle\" suggests a change produced in us. \"Plus libres\" is a comparative: not free or unfree, but more or less free, and in which sense of freedom?",
        ],
        examples: [
          { es: "La technique est l'ensemble des procédés par lesquels l'homme transforme la nature.", en: "Technology is the set of processes by which humans transform nature." },
          { es: "« Plus libres » invite à penser des degrés de liberté.", en: "'Freer' invites us to think in degrees of freedom." },
          { es: "Du silex au smartphone, la technique accompagne l'homme.", en: "From the flint to the smartphone, technology has always been with us." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Why does \"plus libres\" matter in the question?",
            options: ["It is a comparative: the question is about degrees and kinds of freedom.", "It means we are already completely free.", "It refers to free time only.", "It makes the question grammatically plural."],
            correctIndex: 0,
            explanation: "Analysing the question means weighing every word; the comparative changes the problem.",
          },
        ],
      },
      {
        heading: "The tension and the problématique",
        body: [
          "The tension: technique frees us from natural constraints (distance, hunger, cold, effort), yet it creates new dependencies (on machines, networks, energy, the companies that control them). Hence the problématique: \"La technique, qui nous affranchit des contraintes naturelles, ne nous soumet-elle pas à de nouvelles dépendances ? Il s'agit de se demander si la libération qu'elle procure est une véritable liberté.\"",
        ],
        examples: [
          { es: "Ne nous soumet-elle pas à de nouvelles dépendances ?", en: "Does it not subject us to new dependencies?" },
          { es: "Il s'agit de se demander si cette libération est une véritable liberté.", en: "The question is whether this liberation is real freedom." },
          { es: "Le téléphone nous affranchit de la distance, mais nous rend joignables partout.", en: "The phone frees us from distance, but makes us reachable everywhere." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Another question: « Les réseaux sociaux nous rapprochent-ils des autres ? ». Which problématique shows the tension?",
            options: ["Si les réseaux sociaux nous relient à tous, ne nous éloignent-ils pas de nos proches ?", "Les réseaux sociaux sont très utilisés par les jeunes.", "Il s'agit de dire combien d'amis on a en ligne.", "Les réseaux sociaux ont été inventés au XXIe siècle."],
            correctIndex: 0,
            explanation: "A problématique opposes two reasonable answers: social media connect us to everyone, yet may distance us from those close to us. The other options are facts or opinions with no tension.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Does it not make us] more dependent?",
            sentence: "___ plus dépendants ?",
            answer: "Ne nous rend-elle pas",
            explanation: "The negative question with inversion (\"ne nous rend-elle pas\") suggests the answer yes: the classic way to voice the second side of a tension. The object pronoun \"nous\" stays before the verb.",
          },
        ],
      },
      {
        heading: "Words of liberation and dependence",
        body: [
          "Vocabulary of liberation and dependence: \"affranchir de\" (to free from), \"s'affranchir de\", \"délivrer de\", \"soulager\" (to relieve), \"émanciper\"; and on the other side \"asservir\" (to enslave), \"aliéner\" (to alienate, make someone a stranger to himself), \"la dépendance\", \"l'assujettissement\".",
        ],
        examples: [
          { es: "La technique nous affranchit des contraintes naturelles.", en: "Technology frees us from natural constraints." },
          { es: "La machine peut soulager l'homme ou l'asservir.", en: "Machines can relieve humans or enslave them." },
          { es: "Le travail à la chaîne aliène l'ouvrier.", en: "Assembly-line work alienates the worker." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Machines can [enslave] humans.",
            sentence: "Les machines peuvent ___ l'homme.",
            answer: "asservir",
            altAnswers: ["aliéner", "assujettir"],
            explanation: "\"Asservir\" = to enslave, the opposite of \"affranchir\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The washing machine freed women from an exhausting task.",
            answer: "La machine à laver a affranchi les femmes d'une tâche épuisante.",
            altAnswers: ["La machine à laver a libéré les femmes d'une tâche épuisante.", "La machine à laver a délivré les femmes d'une tâche épuisante.", "Le lave-linge a affranchi les femmes d'une tâche épuisante.", "Le lave-linge a libéré les femmes d'une tâche épuisante."],
            explanation: "\"Affranchir quelqu'un de\" (or \"délivrer\", \"libérer de\"): to free someone from. The thing escaped is introduced by \"de\".",
          },
        ],
      },
      {
        heading: "Step 2: build on a distinction",
        body: [
          "The heart of a strong paragraph is a conceptual distinction. Here: \"Il convient de distinguer la libération, qui consiste à être délivré d'une contrainte, de la liberté, qui suppose la maîtrise de ses choix.\" Technique certainly brings liberation; whether it brings freedom depends on whether we master it or it masters us.",
        ],
        examples: [
          { es: "Il convient de distinguer la libération de la liberté.", en: "We should distinguish liberation from freedom." },
          { es: "La libération consiste à être délivré d'une contrainte.", en: "Liberation consists in being freed from a constraint." },
          { es: "La liberté suppose la maîtrise de ses choix.", en: "Freedom presupposes mastery of one's choices." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into a distinction with « Il convient de distinguer… de… ».",
            source: "La solitude et l'isolement ne sont pas la même chose.",
            answer: "Il convient de distinguer la solitude de l'isolement.",
            explanation: "\"Distinguer A de B\": the second term is introduced by \"de\" (here elided before \"l'isolement\"). This sentence is the backbone of a strong paragraph.",
          },
        ],
      },
      {
        heading: "An example analysed, not just cited",
        body: [
          "Then a precise, analysed example, not a list: the GPS. \"Le GPS nous délivre de la peur de nous perdre ; mais à force de suivre ses instructions, nous perdons la capacité de nous orienter par nous-mêmes. Libérés d'un effort, nous devenons dépendants d'un outil.\" The example is explained, not just cited: what freedom does it bring, what does it take away?",
        ],
        examples: [
          { es: "Le GPS nous délivre de la peur de nous perdre.", en: "GPS frees us from the fear of getting lost." },
          { es: "À force de suivre ses instructions, nous perdons le sens de l'orientation.", en: "By constantly following its instructions, we lose our sense of direction." },
          { es: "La calculatrice nous délivre du calcul mental, mais nous en fait perdre l'habitude.", en: "The calculator frees us from mental arithmetic, but makes us lose the habit of it." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence analyses its example instead of just citing it?",
            options: ["Le correcteur orthographique nous évite des fautes ; mais, à force de nous corriger, il nous dispense d'apprendre l'orthographe.", "Il existe beaucoup d'outils, comme le GPS, le téléphone et l'ordinateur.", "Par exemple, le correcteur orthographique.", "Le GPS a été inventé pour l'armée."],
            correctIndex: 0,
            explanation: "An analysed example says what freedom the tool brings and what it takes away. A list of tools, a bare example or a historical fact gives the reader nothing to think with.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[By constantly using] the GPS, we forget how to read a map.",
            sentence: "___ le GPS, nous oublions comment lire une carte.",
            answer: "À force d'utiliser",
            altAnswers: ["À force d'employer"],
            explanation: "\"À force de\" + infinitive = through constantly doing; elision before a vowel.",
          },
        ],
      },
      {
        heading: "A compact paradox: participle clause and à force de",
        body: [
          "Note the participle clause \"Libérés d'un effort, nous devenons dépendants\" (Advanced): a compact way to state a paradox. And \"à force de\" + infinitive (by dint of, through constantly doing).",
        ],
        examples: [
          { es: "Libérés d'un effort, nous devenons dépendants d'un outil.", en: "Freed from an effort, we become dependent on a tool." },
          { es: "À force de tout photographier, on ne regarde plus rien.", en: "By photographing everything, we no longer look at anything." },
          { es: "Délivrés de la distance, nous restons pourtant seuls.", en: "Freed from distance, we nonetheless remain alone." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Connectés en permanence, nous ne sommes plus jamais disponibles.",
            question: "What paradox does the sentence express?",
            options: ["Being always connected, we are never really available.", "Being connected makes us always available.", "We are never connected, so we are available.", "We are available because we are connected."],
            correctIndex: 0,
            explanation: "The participle clause \"connectés en permanence\" sets up the paradox that the main clause completes: constant connection, yet no real availability.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the first clause into a participle clause.",
            source: "Nous sommes libérés de l'effort de mémoire, et nous devenons dépendants de nos écrans.",
            answer: "Libérés de l'effort de mémoire, nous devenons dépendants de nos écrans.",
            explanation: "The past participle alone, agreeing with \"nous\" (\"libérés\"), replaces \"nous sommes... et\": a compact way to state a paradox.",
          },
        ],
      },
      {
        heading: "Step 3: anticipate the objection, answer with a nuance",
        body: [
          "A good paragraph anticipates the strongest objection: \"On pourrait objecter que la dépendance n'est pas en soi une servitude : nous dépendons aussi du langage, sans lequel nous ne pourrions penser.\" Then answer it, with a nuance rather than a denial: \"Sans doute ; mais le langage est une dépendance que nous maîtrisons et qui accroît notre pouvoir de choisir, alors que l'outil dont nous ne comprenons plus le fonctionnement décide à notre place.\"",
        ],
        examples: [
          { es: "On pourrait objecter que la dépendance n'est pas en soi une servitude.", en: "It could be objected that dependence is not in itself servitude." },
          { es: "Nous dépendons aussi du langage, sans lequel nous ne pourrions penser.", en: "We also depend on language, without which we could not think." },
          { es: "Sans doute ; mais le langage accroît notre pouvoir de choisir.", en: "No doubt; but language increases our power to choose." },
          { es: "L'outil dont nous ne comprenons plus le fonctionnement décide à notre place.", en: "The tool whose workings we no longer understand decides for us." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "It could be objected that not all dependence is servitude.",
            answer: "On pourrait objecter que toute dépendance n'est pas une servitude.",
            altAnswers: ["On pourrait objecter que toute dépendance n'est pas servitude.", "On pourrait objecter que la dépendance n'est pas toujours une servitude.", "On pourrait objecter que toutes les dépendances ne sont pas des servitudes."],
            explanation: "\"Toute... n'est pas\" = not all...; \"on pourrait objecter que\" introduces the objection.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The machine [whose workings] we don't understand decides for us.",
            sentence: "La machine ___ nous ne comprenons pas le fonctionnement décide pour nous.",
            answer: "dont",
            explanation: "\"Dont\" = whose (\"le fonctionnement de la machine\"): the relative pronoun replaces \"de\" + noun.",
          },
        ],
      },
      {
        heading: "Link back and prepare the next step",
        body: [
          "End by linking back to the problématique and preparing the next step: \"Ainsi, la technique libère sans nécessairement rendre libre : tout dépend du rapport que nous entretenons avec elle. Reste à savoir à quelles conditions ce rapport peut redevenir un rapport de maîtrise.\"",
        ],
        examples: [
          { es: "Ainsi, la technique libère sans nécessairement rendre libre.", en: "Thus technology liberates without necessarily making us free." },
          { es: "Reste à savoir à quelles conditions ce rapport peut redevenir un rapport de maîtrise.", en: "It remains to be seen under what conditions this relationship can become one of mastery again." },
          { es: "Tout dépend donc de l'usage que nous en faisons.", en: "So everything depends on the use we make of it." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence best links the paragraph back to the problématique?",
            options: ["Ainsi, la technique libère sans nécessairement rendre libre.", "Le GPS a été inventé aux États-Unis.", "J'utilise beaucoup mon téléphone.", "La technique est partout de nos jours."],
            correctIndex: 0,
            explanation: "It answers the question partially, using the distinction (libérer / rendre libre) built in the paragraph.",
          },
          {
            type: "listen-choose",
            audio: "Reste à savoir à quelles conditions ce rapport peut redevenir un rapport de maîtrise.",
            question: "What is this sentence doing in the essay?",
            options: ["Opening the next step of the argument", "Giving an example", "Stating an objection", "Defining technology"],
            correctIndex: 0,
            explanation: "\"Reste à savoir\" sets up the next question: a transition towards the following part.",
          },
        ],
      },
      {
        heading: "The whole paragraph, part 1",
        body: [
          "Here is the whole paragraph, original, as you might write it. It opens with the distinction and the example: \"Il convient de distinguer la libération, qui consiste à être délivré d'une contrainte, de la liberté, qui suppose la maîtrise de ses choix. Le GPS nous délivre de la peur de nous perdre ; mais à force de suivre ses instructions, nous perdons la capacité de nous orienter par nous-mêmes : libérés d'un effort, nous devenons dépendants d'un outil.\"",
        ],
        examples: [
          { es: "Ce paragraphe s'ouvre sur une distinction.", en: "This paragraph opens with a distinction." },
          { es: "L'exemple du GPS est analysé, pas seulement cité.", en: "The GPS example is analysed, not just cited." },
          { es: "Les deux-points annoncent le paradoxe.", en: "The colon announces the paradox." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Il convient de distinguer le progrès avec le bonheur.",
            answer: "Il convient de distinguer le progrès du bonheur.",
            explanation: "The construction is \"distinguer A de B\". \"Avec\" is a calque of the English construction.",
          },
        ],
      },
      {
        heading: "The whole paragraph, part 2",
        body: [
          "Then come the objection, its answer and the link: \"On pourrait objecter que toute dépendance n'est pas une servitude : nous dépendons aussi du langage. Sans doute ; mais le langage accroît notre pouvoir de choisir, alors que l'outil dont nous ne comprenons plus le fonctionnement décide à notre place. Ainsi, la technique libère sans nécessairement rendre libre.\"",
        ],
        examples: [
          { es: "L'objection est formulée loyalement.", en: "The objection is put fairly." },
          { es: "La réponse nuance au lieu de nier.", en: "The answer qualifies instead of denying." },
          { es: "La dernière phrase revient à la problématique.", en: "The last sentence goes back to the problematic." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The tool decides for us.",
            answer: "L'outil décide à notre place.",
            altAnswers: ["L'outil décide pour nous.", "C'est l'outil qui décide à notre place.", "C'est l'outil qui décide pour nous."],
            explanation: "\"À notre place\" = instead of us, for us.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "We should distinguish information from knowledge.",
        answer: "Il convient de distinguer l'information du savoir.",
        altAnswers: ["Il convient de distinguer l'information de la connaissance.", "Il faut distinguer l'information du savoir."],
        explanation: "\"Distinguer A de B\"; \"de\" + \"le savoir\" contracts to \"du savoir\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The dishwasher frees us from a chore.",
        answer: "Le lave-vaisselle nous délivre d'une corvée.",
        altAnswers: ["Le lave-vaisselle nous libère d'une corvée.", "Le lave-vaisselle nous affranchit d'une corvée."],
        explanation: "\"Délivrer de\" (to free from); \"une corvée\" is a chore.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "Here is the tool [without which] I could not work.",
        sentence: "Voici l'outil ___ je ne pourrais pas travailler.",
        answer: "sans lequel",
        explanation: "After a preposition, the relative pronoun for a thing is \"lequel\", agreeing with \"l'outil\" (masculine singular): \"sans lequel\".",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Connected to everyone, we are sometimes alone.",
        words: ["Connectés", "à tous,", "nous sommes", "parfois", "seuls."],
        translation: "Connected to everyone, we are sometimes alone.",
        explanation: "A participle clause (\"connectés à tous\") and a main clause that contradicts it: a paradox in one sentence.",
      },
      {
        type: "dictation",
        audio: "La libération n'est pas encore la liberté.",
        explanation: "The paragraph's key distinction in one line: being freed from something is not yet being free.",
      },
      {
        type: "speak",
        text: "La technique, qui nous affranchit des contraintes naturelles, ne nous soumet-elle pas à de nouvelles dépendances ?",
        prompt: "Say it in French: Does technology, which frees us from natural constraints, not subject us to new dependencies?",
        explanation: "A problématique as a negative question with complex inversion.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Everything depends on the relationship we have with it.",
        answer: "Tout dépend du rapport que nous entretenons avec elle.",
        altAnswers: ["Tout dépend du rapport que nous avons avec elle.", "Tout dépend de la relation que nous entretenons avec elle.", "Tout dépend de la relation que nous avons avec elle.", "Tout dépend du rapport qu'on entretient avec elle."],
        explanation: "\"Entretenir un rapport avec\" = to have (maintain) a relationship with; \"elle\" = la technique.",
      },
      {
        type: "speak",
        text: "Ainsi, l'écran rapproche sans nécessairement relier.",
        tip: "\"Nécessairement\": four syllables, né-ces-saire-ment.",
        explanation: "Modelled on the paragraph's last line: \"ainsi\" + a verb + \"sans nécessairement\" + a second verb.",
      },
    ],
  },
  {
    slug: "c2-vocab-movement-gesture",
    level: "FR-C2",
    number: 8,
    title: "Mastery Vocabulary: Movement and Gesture",
    summary: "Narrate movement precisely: déambuler, flâner, rôder, grouiller, s'esquiver, se tapir, se jucher, trébucher, se vautrer, s'étirer, se dandiner, hausser les sourcils, hausser les épaules.",
    duration: "17 min",
    sections: [
      {
        heading: "Flâner and déambuler",
        body: [
          "\"Flâner\" is to stroll idly, for pleasure, especially in a city: \"flâner sur les quais\". It is almost a cultural institution: \"le flâneur\" of nineteenth-century Paris observed the crowd with detached curiosity. \"Déambuler\" is to wander about, walk around without a precise goal, often in an enclosed space: \"déambuler dans les couloirs d'un musée\".",
        ],
        examples: [
          { es: "Le dimanche, on aime flâner sur les quais de la Saône.", en: "On Sundays, we like to stroll along the banks of the Saone." },
          { es: "Les visiteurs déambulaient lentement entre les salles du musée.", en: "Visitors wandered slowly from room to room in the museum." },
          { es: "Le flâneur observe la foule sans jamais se presser.", en: "The stroller watches the crowd without ever hurrying." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Patients were wandering about the hospital corridors.",
            answer: "Des patients déambulaient dans les couloirs de l'hôpital.",
            altAnswers: ["Des malades déambulaient dans les couloirs de l'hôpital.", "Des patients erraient dans les couloirs de l'hôpital."],
            explanation: "\"Déambuler\" is to wander about without a precise goal, typically in an enclosed space; the imperfect describes the scene.",
          },
        ],
      },
      {
        heading: "Rôder and s'esquiver",
        body: [
          "\"Rôder\" is to prowl, hang around with suspicious intentions: \"un individu rôdait autour de l'école\"; \"un rôdeur\" is a prowler. \"S'esquiver\" is to slip away discreetly, to sneak off: \"il s'est esquivé avant la fin du dîner\"; it also means to dodge (\"esquiver un coup\", \"esquiver une question\").",
        ],
        examples: [
          { es: "Un individu rôdait autour de l'école depuis le matin.", en: "Someone had been prowling around the school since the morning." },
          { es: "Il s'est esquivé avant le discours du directeur.", en: "He slipped away before the director's speech." },
          { es: "La ministre a habilement esquivé la question.", en: "The minister skilfully dodged the question." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The candidate [dodged] every question about the budget.",
            sentence: "Le candidat a ___ toutes les questions sur le budget.",
            answer: "esquivé",
            altAnswers: ["éludé", "évité"],
            explanation: "\"Esquiver\" (non-pronominal) is to dodge a blow or a question; \"s'esquiver\" is to slip away.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "He slipped away before the end of the dinner.",
            answer: "Il s'est esquivé avant la fin du dîner.",
            altAnswers: ["Il s'esquiva avant la fin du dîner.", "Il s'est éclipsé avant la fin du dîner.", "Il s'éclipsa avant la fin du dîner."],
            explanation: "\"S'esquiver\" (or \"s'éclipser\") = to slip away discreetly.",
          },
        ],
      },
      {
        heading: "One walk, three connotations",
        body: [
          "Choose the verb for its connotation: the same walk is \"flâner\" if you like the walker, \"traîner\" (to hang about, dawdle) if you're impatient with him, and \"rôder\" if you suspect him.",
        ],
        examples: [
          { es: "Arrête de traîner, on va rater le train !", en: "Stop dawdling, we'll miss the train!" },
          { es: "Les ados traînent devant le collège après les cours.", en: "The teenagers hang about outside the school after lessons." },
          { es: "Nous avons flâné tout l'après-midi dans le Vieux-Lyon.", en: "We strolled all afternoon in Old Lyon." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A stranger is walking slowly around a parked car at night. A worried neighbour says:",
            options: ["Quelqu'un rôde autour de la voiture.", "Quelqu'un flâne autour de la voiture.", "Quelqu'un se dandine autour de la voiture.", "Quelqu'un s'étire autour de la voiture."],
            correctIndex: 0,
            explanation: "\"Rôder\" implies suspicious intentions; \"flâner\" is a pleasant stroll.",
          },
        ],
      },
      {
        heading: "Crouch, perch, stumble",
        body: [
          "\"Se tapir\" is to crouch, hide by making oneself small: \"le chat se tapit derrière le buisson\". \"Se jucher\" is to perch high up: \"l'enfant s'était juché sur les épaules de son père\" (birds \"se perchent\"; people \"se juchent\" somewhere high and a bit precarious). \"Trébucher\" is to stumble, trip (\"trébucher sur une marche\"), also figuratively on a word.",
        ],
        examples: [
          { es: "Le chat se tapit derrière le buisson, prêt à bondir.", en: "The cat crouched behind the bush, ready to pounce." },
          { es: "L'enfant s'était juché sur les épaules de son père pour voir le défilé.", en: "The child had perched on his father's shoulders to see the parade." },
          { es: "Elle a trébuché sur la dernière marche.", en: "She tripped on the last step." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The actor [stumbled] over a difficult word.",
            sentence: "Le comédien a ___ sur un mot difficile.",
            answer: "trébuché",
            explanation: "\"Trébucher\" is to stumble, literally on a step or figuratively on a word.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The cat crouched behind the sofa.",
            answer: "Le chat se tapit derrière le canapé.",
            altAnswers: ["Le chat s'est tapi derrière le canapé.", "Le chat se tapissait derrière le canapé.", "Le chat se cacha derrière le canapé."],
            explanation: "\"Se tapir\" = to crouch, hide; passé simple \"se tapit\".",
          },
        ],
      },
      {
        heading: "Sprawl and swarm",
        body: [
          "\"Se vautrer\" is to sprawl, loll (\"se vautrer sur le canapé\"), with a pejorative ring of laziness; in informal French it also means to fall flat or to fail badly (\"il s'est vautré à l'examen\"). \"Grouiller\" is to swarm, teem: \"la place grouillait de monde\", \"un fromage qui grouille de vers\"; informally, \"grouille-toi !\" means hurry up!",
        ],
        examples: [
          { es: "Il passe ses dimanches vautré sur le canapé.", en: "He spends his Sundays sprawled on the sofa." },
          { es: "Le marché grouillait de monde dès sept heures.", en: "The market was teeming with people from seven o'clock." },
          { es: "Grouille-toi, le film commence dans cinq minutes !", en: "Hurry up, the film starts in five minutes!" },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Elle s'est vautrée sur le lit sans même enlever ses chaussures.",
            question: "What does it mean?",
            options: ["She sprawled on the bed without even taking her shoes off.", "She made the bed without taking her shoes off.", "She sat up straight on the bed with her shoes on.", "She fell asleep under the bed."],
            correctIndex: 0,
            explanation: "\"Se vautrer\" is to sprawl, loll, with a hint of laziness; the participle agrees with \"elle\": \"vautrée\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The square was teeming with people.",
            answer: "La place grouillait de monde.",
            altAnswers: ["La place fourmillait de monde.", "La place grouillait de gens."],
            explanation: "\"Grouiller de\" = to swarm with; \"monde\" here = people.",
          },
        ],
      },
      {
        heading: "Agreement: these verbs are pronominal",
        body: [
          "Agreement reminder: these are pronominal verbs, so the past participle agrees with the subject: \"elle s'est tapie\", \"ils s'étaient juchés\", \"elle s'est vautrée\".",
        ],
        examples: [
          { es: "Les enfants s'étaient tapis sous la table.", en: "The children had crouched under the table." },
          { es: "Elle s'est juchée sur un tabouret.", en: "She perched on a stool." },
          { es: "Ils se sont vautrés dans l'herbe.", en: "They sprawled in the grass." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change the subject to « elles ».",
            source: "Il s'est tapi derrière la porte.",
            answer: "Elles se sont tapies derrière la porte.",
            explanation: "A pronominal verb takes \"être\", and its past participle agrees with the subject: feminine plural \"tapies\". The pronoun \"s'\" becomes \"se\" before \"sont\".",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The child [had perched] on a wall.",
            sentence: "L'enfant ___ sur un muret.",
            answer: "s'était juché",
            altAnswers: ["s'était perché"],
            explanation: "\"Se jucher\" = to perch (high and precariously); pluperfect with \"être\".",
          },
        ],
      },
      {
        heading: "Stretch and sway",
        body: [
          "\"S'étirer\" is to stretch (one's body): \"il s'étira en bâillant\". \"Se dandiner\" is to waddle or sway from one foot to the other, often from embarrassment or impatience: \"il se dandinait d'un pied sur l'autre\".",
        ],
        examples: [
          { es: "Il s'étira longuement en bâillant.", en: "He stretched for a long time, yawning." },
          { es: "Le garçon se dandinait d'un pied sur l'autre, gêné.", en: "The boy shifted awkwardly from one foot to the other." },
          { es: "Le chat s'étire au soleil.", en: "The cat stretches in the sun." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The penguins [waddle] towards the sea.",
            sentence: "Les manchots ___ vers la mer.",
            answer: "se dandinent",
            explanation: "\"Se dandiner\" is to waddle or sway from one foot to the other, the gait of a penguin or of an embarrassed child. \"S'étirer\" would be to stretch.",
          },
        ],
      },
      {
        heading: "Gestures: hausser, froncer, hocher",
        body: [
          "Facial and body gestures use \"hausser\" (to raise): \"hausser les sourcils\" (to raise one's eyebrows, in surprise or doubt), \"hausser les épaules\" (to shrug, in indifference or resignation; the shrug is a famous French gesture). Others: \"froncer les sourcils\" (to frown), \"plisser les yeux\" (to squint), \"hocher la tête\" (to nod), \"secouer la tête\" (to shake one's head), \"se gratter la tête\".",
        ],
        examples: [
          { es: "Elle haussa les sourcils, incrédule.", en: "She raised her eyebrows in disbelief." },
          { es: "Le professeur fronça les sourcils en lisant ma copie.", en: "The teacher frowned as he read my paper." },
          { es: "Elle hocha la tête sans rien dire.", en: "She nodded without saying a word." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: He frowned, puzzled.",
            words: ["Il", "fronça", "les sourcils,", "perplexe."],
            translation: "He frowned, puzzled.",
            explanation: "To frown is \"froncer les sourcils\"; an adjective after the comma (\"perplexe\") describes his state of mind.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "He [nodded] to show he agreed.",
            sentence: "Il ___ pour montrer son accord.",
            answer: "hocha la tête",
            altAnswers: ["a hoché la tête"],
            explanation: "To nod is \"hocher la tête\"; to shake one's head is \"secouer la tête\".",
          },
        ],
      },
      {
        heading: "Gestures tell the story",
        body: [
          "Gestures carry meaning in narrative: \"Elle haussa les épaules\" says 'I don't care' or 'what can you do?' without dialogue. An original sentence: \"Il s'étira, bâilla, puis haussa les épaules : la réunion pouvait bien attendre.\"",
        ],
        examples: [
          { es: "Il haussa les épaules : peu lui importait.", en: "He shrugged: he didn't much care." },
          { es: "Il secoua la tête : il n'en était pas question.", en: "He shook his head: it was out of the question." },
          { es: "Elle se gratta la tête, perplexe.", en: "She scratched her head, puzzled." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In a novel: « Elle haussa les épaules. » What does the gesture usually convey?",
            options: ["Indifference or resignation", "Enthusiasm", "Physical pain", "Agreement with a nod"],
            correctIndex: 0,
            explanation: "\"Hausser les épaules\" (to shrug) signals indifference or resignation without dialogue. Agreement would be \"hocher la tête\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "He shrugged.",
            answer: "Il haussa les épaules.",
            altAnswers: ["Il a haussé les épaules."],
            explanation: "\"Hausser les épaules\" = to shrug; no possessive in French for body parts here.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "On Sundays, we like to stroll along the river.",
        answer: "Le dimanche, nous aimons flâner au bord de la rivière.",
        altAnswers: ["Le dimanche, on aime flâner au bord de la rivière.", "Le dimanche, nous aimons flâner le long de la rivière.", "Le dimanche, on aime flâner le long de la rivière.", "Le dimanche, nous aimons flâner sur les bords de la rivière.", "Le dimanche, on aime flâner le long du fleuve."],
        explanation: "\"Flâner\" = to stroll for pleasure; \"le dimanche\" = on Sundays (habit).",
      },
      {
        type: "matching",
        instructions: "Match each verb with its meaning.",
        pairs: [
          { left: "rôder", right: "to prowl" },
          { left: "s'esquiver", right: "to slip away" },
          { left: "se vautrer", right: "to sprawl" },
          { left: "se dandiner", right: "to shift from foot to foot" },
          { left: "grouiller", right: "to swarm, teem" },
        ],
        explanation: "Each verb paints a precise picture, often with a judgement attached.",
      },
      {
        type: "multiple-choice",
        question: "\"Grouille-toi !\" is...",
        options: ["an informal way of saying hurry up", "a polite request to sit down", "a way of saying stop moving", "a compliment on someone's energy"],
        correctIndex: 0,
        explanation: "Informal \"se grouiller\" = to hurry up; the standard verb \"grouiller\" means to teem.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Someone was prowling around the house.",
        words: ["Quelqu'un", "rôdait", "autour", "de", "la", "maison."],
        translation: "Someone was prowling around the house.",
        explanation: "\"Rôder autour de\" = to prowl around.",
      },
      {
        type: "listen-choose",
        audio: "Elle plissa les yeux pour lire le panneau.",
        question: "What did she do?",
        options: ["She squinted.", "She raised her eyebrows.", "She smiled.", "She shrugged."],
        correctIndex: 0,
        explanation: "\"Plisser les yeux\" is to squint, narrowing the eyes to see better.",
      },
      {
        type: "dictation",
        audio: "Elle haussa les sourcils sans répondre.",
        explanation: "\"Hausser les sourcils\": to raise one's eyebrows, in surprise or doubt; body parts take \"les\", not a possessive.",
      },
      {
        type: "speak",
        text: "La gare grouillait de touristes.",
        prompt: "Say it in French: The station was swarming with tourists.",
        explanation: "\"Grouiller de\" (to swarm with), in the imperfect for a description.",
      },
      {
        type: "speak",
        text: "Il s'étira, bâilla, puis haussa les épaules.",
        tip: "\"Haussa\": the h is aspirated, so \"il\" does not link to it: il / haussa.",
        explanation: "Three passé simple verbs in a row: a compact narrative of gestures.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Il a haussé ses épaules et il est parti.",
        answer: "Il a haussé les épaules et il est parti.",
        explanation: "With parts of one's own body French uses the definite article, not the possessive: \"hausser les épaules\", \"froncer les sourcils\".",
      },
    ],
  },
  {
    slug: "c2-vocab-register-synonyms",
    level: "FR-C2",
    number: 9,
    title: "Vocabulary in Context: Synonyms by Register",
    summary: "Choose by context and register: commencer / débuter / entamer / amorcer; finir / terminer / achever / clore / parachever; demander / solliciter / requérir; montrer / démontrer / attester; and why « débuter quelque chose » and « initier un projet » are frowned upon.",
    duration: "17 min",
    sections: [
      {
        heading: "Commencer and débuter",
        body: [
          "\"Commencer\" is the all-purpose verb, transitive and intransitive: \"commencer un travail\", \"le cours commence à 9 h\". \"Débuter\" is intransitive in careful French: \"le concert débute à 20 h\", \"elle a débuté comme stagiaire\". \"Débuter une réunion\" (transitive) is very common but criticised by usage guides; say \"commencer une réunion\" or \"ouvrir une réunion\".",
        ],
        examples: [
          { es: "Le concert débute à vingt heures précises.", en: "The concert starts at exactly eight pm." },
          { es: "Elle a débuté comme stagiaire dans une agence de pub.", en: "She started out as an intern in an advertising agency." },
          { es: "Le président a ouvert la séance à neuf heures.", en: "The chair opened the meeting at nine." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence would a careful editor correct?",
            options: ["Nous allons débuter la réunion.", "La réunion débute à dix heures.", "Nous allons commencer la réunion.", "Nous allons ouvrir la réunion."],
            correctIndex: 0,
            explanation: "\"Débuter\" is intransitive in careful French; use \"commencer\" or \"ouvrir la réunion\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Nous allons débuter la formation lundi matin.",
            answer: "Nous allons commencer la formation lundi matin.",
            altAnswers: ["Nous allons entamer la formation lundi matin.", "La formation débutera lundi matin."],
            explanation: "In careful French \"débuter\" is intransitive (\"la formation débute lundi\"). With a direct object, use \"commencer\" (or \"entamer\").",
          },
        ],
      },
      {
        heading: "Entamer and amorcer",
        body: [
          "\"Entamer\" (to start something, often by cutting into it) is elegant and versatile: \"entamer une négociation\", \"entamer un gâteau\", \"entamer ses économies\" (to dip into one's savings). \"Amorcer\" suggests a first, tentative step that will develop: \"amorcer un dialogue\", \"amorcer un virage\", \"la reprise s'amorce\" (the recovery is getting under way).",
        ],
        examples: [
          { es: "Les deux pays ont entamé des négociations.", en: "The two countries have begun negotiations." },
          { es: "Nous avons dû entamer nos économies.", en: "We had to dip into our savings." },
          { es: "La reprise économique s'amorce enfin.", en: "The economic recovery is finally getting under way." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Who [cut into] the cake before dessert?",
            sentence: "Qui a ___ le gâteau avant le dessert ?",
            answer: "entamé",
            altAnswers: ["puiser dans"],
            explanation: "\"Entamer\" is literally to cut into something whole (a cake, a loaf, savings), and figuratively to begin.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (careful style).",
            source: "The government has begun a dialogue with the unions.",
            answer: "Le gouvernement a amorcé un dialogue avec les syndicats.",
            altAnswers: ["Le gouvernement a entamé un dialogue avec les syndicats.", "Le gouvernement a engagé un dialogue avec les syndicats."],
            explanation: "\"Amorcer un dialogue\" suggests a first, tentative step; \"entamer\" is also elegant. Avoid \"débuter un dialogue\".",
          },
        ],
      },
      {
        heading: "Trap: initier",
        body: [
          "Trap: \"initier\" in the sense of to initiate a project is an anglicism; in careful French \"initier quelqu'un à\" means to introduce someone to (\"initier un enfant aux échecs\"). For a project, say \"lancer\", \"engager\", \"mettre en œuvre\", \"être à l'initiative de\".",
        ],
        examples: [
          { es: "C'est elle qui a lancé ce projet.", en: "She's the one who launched this project." },
          { es: "Mon grand-père m'a initié aux échecs.", en: "My grandfather introduced me to chess." },
          { es: "Cette association est à l'initiative du festival.", en: "This association is behind the festival." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which is the careful way to say 'She initiated the project'?",
            options: ["Elle a lancé le projet.", "Elle a initié le projet.", "Elle a débuté le projet.", "Elle a amorcé quelqu'un au projet."],
            correctIndex: 0,
            explanation: "\"Lancer\" (or \"être à l'initiative de\"); \"initier un projet\" is an anglicism and \"débuter\" is intransitive in careful French.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "She [launched] this project two years ago.",
            sentence: "Elle a ___ ce projet il y a deux ans.",
            answer: "lancé",
            altAnswers: ["engagé"],
            explanation: "\"Lancer un projet\" is the careful choice; \"initier un projet\" is widespread but considered an anglicism.",
          },
        ],
      },
      {
        heading: "Finir, terminer, achever",
        body: [
          "\"Finir\" and \"terminer\" are the everyday pair; \"terminer\" is slightly more formal and stresses completing something properly. \"Achever\" is to complete, bring to its end (\"achever un roman\", \"une œuvre inachevée\"); it also means to finish off a wounded animal or person, and informally to exhaust (\"cette journée m'a achevé\").",
        ],
        examples: [
          { es: "Il a mis dix ans à achever son roman.", en: "It took him ten years to complete his novel." },
          { es: "Cette semaine de déménagement m'a achevé.", en: "This week of moving house has finished me off." },
          { es: "La cathédrale est restée inachevée pendant des siècles.", en: "The cathedral remained unfinished for centuries." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Ce marathon m'a complètement achevé.",
            question: "What does it mean?",
            options: ["This marathon completely wore me out.", "I completely finished the marathon.", "I achieved my goal in this marathon.", "This marathon was completely achievable."],
            correctIndex: 0,
            explanation: "Informally, \"achever quelqu'un\" is to exhaust them. It is not English achieve (\"réussir\", \"atteindre\").",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "It took her ten years to [complete] this book.",
            sentence: "Elle a mis dix ans à ___ ce livre.",
            answer: "achever",
            altAnswers: ["terminer", "finir"],
            explanation: "\"Achever\" = to bring to completion, a little more formal than \"terminer\".",
          },
        ],
      },
      {
        heading: "Clore, clôturer, parachever",
        body: [
          "\"Clore\" is to close, formally: \"clore un débat\", \"clore la séance\", \"l'incident est clos\"; it is a defective verb, used mainly in the infinitive, the present singular (\"je clos\"), the participle \"clos\" and compound tenses. In speech prefer \"clôturer\" (\"clôturer un compte, une réunion\"). \"Parachever\" is to put the finishing touches to, to perfect: \"parachever son œuvre\".",
        ],
        examples: [
          { es: "L'incident est clos.", en: "The matter is closed." },
          { es: "La banque a clôturé mon compte sans prévenir.", en: "The bank closed my account without warning." },
          { es: "Ce dernier chapitre parachève une œuvre immense.", en: "This final chapter crowns an immense body of work." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A designer adds the last perfect details to her collection. Which verb fits?",
            options: ["parachever", "clore", "clôturer", "entamer"],
            correctIndex: 0,
            explanation: "\"Parachever\" is to put the finishing touches to, to perfect. \"Clore\" and \"clôturer\" only close (a debate, an account), and \"entamer\" begins.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The association [closed] its financial year with a surplus.",
            sentence: "L'association a ___ son exercice avec un excédent.",
            answer: "clôturé",
            altAnswers: ["fermé"],
            explanation: "\"Clôturer\" is the regular verb for closing an account, a financial year or a meeting; \"clore\" is defective and formal.",
          },
        ],
      },
      {
        heading: "A register ladder for a meeting",
        body: [
          "Register ladder for a meeting: \"on a fini\" (spoken), \"la réunion est terminée\" (neutral), \"je déclare la séance close\" (formal, the chair's formula).",
        ],
        examples: [
          { es: "Je déclare la séance close.", en: "I declare the meeting closed." },
          { es: "Bon, on a fini, tout le monde peut partir !", en: "Right, we're done, everyone can go!" },
          { es: "La réunion est terminée, merci à tous.", en: "The meeting is over, thank you all." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it formal: the chair's formula with « clos ».",
            source: "Bon, on arrête le débat.",
            answer: "Je déclare le débat clos.",
            explanation: "The chair's formal formula is \"je déclare\" + noun + \"clos\"; \"clos\" agrees with the noun (\"le débat clos\", \"la séance close\").",
          },
        ],
      },
      {
        heading: "Asking: solliciter, requérir",
        body: [
          "\"Demander\" is the neutral verb. \"Solliciter\" is formal: \"solliciter un rendez-vous, un congé, une aide\", \"je me permets de solliciter votre bienveillance\"; it belongs in formal letters. \"Requérir\" is legal or very formal, to require or demand: \"le procureur a requis cinq ans de prison\", \"cette tâche requiert beaucoup de patience\" (needs).",
        ],
        examples: [
          { es: "Je me permets de solliciter un rendez-vous.", en: "I am writing to request an appointment." },
          { es: "Le procureur a requis cinq ans de prison ferme.", en: "The prosecutor called for a five-year prison sentence." },
          { es: "Ce poste requiert une grande disponibilité.", en: "This job requires great flexibility." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (a formal letter).",
            source: "I am writing to request a few days' leave.",
            answer: "Je me permets de solliciter quelques jours de congé.",
            altAnswers: ["Je me permets de vous solliciter quelques jours de congé.", "Je me permets de solliciter quelques jours de congés."],
            explanation: "\"Je me permets de solliciter\" is the formal-letter way to ask; \"demander\" would be neutral.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The prosecutor called for three years in prison.",
            answer: "Le procureur a requis trois ans de prison.",
            altAnswers: ["Le procureur a requis trois ans d'emprisonnement.", "La procureure a requis trois ans de prison.", "Le procureur a réclamé trois ans de prison."],
            explanation: "\"Requérir une peine\" is the legal verb; participle \"requis\".",
          },
        ],
      },
      {
        heading: "Showing: démontrer, attester",
        body: [
          "\"Montrer\" is neutral. \"Démontrer\" is to prove by reasoning or evidence (\"démontrer un théorème\", \"il a démontré que...\"), stronger than \"montrer\". \"Attester\" is to certify, bear witness to: \"une attestation\" is an official certificate (\"une attestation de domicile\"), and \"ces vestiges attestent une présence romaine\" (or \"attestent d'une présence\", widespread but criticised).",
        ],
        examples: [
          { es: "L'enquête a démontré que le rapport était falsifié.", en: "The investigation proved the report had been falsified." },
          { es: "Ces vestiges attestent une présence romaine dans la vallée.", en: "These remains bear witness to a Roman presence in the valley." },
          { es: "Pour l'inscription, il faut fournir une attestation de domicile.", en: "To register, you have to provide proof of address." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Your new employer asks for an official document proving you are enrolled at university. What is it called?",
            options: ["une attestation d'inscription", "une démonstration d'inscription", "une requête d'inscription", "une sollicitation d'inscription"],
            correctIndex: 0,
            explanation: "An official certificate is \"une attestation\" (from \"attester\", to certify). \"Une démonstration\" is a proof by reasoning, \"une requête\" a formal request.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "These letters bear witness to their friendship.",
            answer: "Ces lettres attestent leur amitié.",
            altAnswers: ["Ces lettres attestent de leur amitié.", "Ces lettres témoignent de leur amitié."],
            explanation: "\"Attester quelque chose\" (direct) is the careful construction; \"attester de\" is widespread but criticised. \"Témoigner de\" is also correct.",
          },
        ],
      },
      {
        heading: "Traps: solliciter a joint, conjugate requérir",
        body: [
          "Trap: \"solliciter\" also means to put pressure on, to strain (\"une articulation très sollicitée\" = a joint under heavy strain), and \"requérir\" conjugates like \"acquérir\": \"il requiert\", \"il a requis\".",
        ],
        examples: [
          { es: "Le genou est très sollicité pendant la course.", en: "The knee is put under heavy strain when running." },
          { es: "Cette mission requiert du sang-froid.", en: "This assignment requires composure." },
          { es: "Le président de séance a requis le silence.", en: "The chair demanded silence." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: This job requires a lot of patience.",
            words: ["Ce", "poste", "requiert", "beaucoup", "de", "patience."],
            translation: "This job requires a lot of patience.",
            explanation: "\"Requérir\" (like \"acquérir\"): \"il requiert\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it to the passé composé.",
            source: "Le procureur requiert dix ans de prison.",
            answer: "Le procureur a requis dix ans de prison.",
            explanation: "\"Requérir\" conjugates like \"acquérir\": past participle \"requis\" (like \"acquis\"), with \"avoir\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The shift towards electric cars is getting under way.",
        answer: "Le virage vers la voiture électrique s'amorce.",
        altAnswers: ["Le tournant vers la voiture électrique s'amorce.", "Le virage vers les voitures électriques s'amorce."],
        explanation: "\"S'amorcer\" describes something just beginning to develop: a recovery, a turn, a change.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: The festival starts on Friday evening.",
        words: ["Le festival", "débute", "vendredi", "soir."],
        translation: "The festival starts on Friday evening.",
        explanation: "\"Débuter\" used intransitively, as careful French prefers: the festival starts; you do not start it with \"débuter\".",
      },
      {
        type: "listen-choose",
        audio: "Ce dernier album parachève une carrière exceptionnelle.",
        question: "What does the last album do?",
        options: ["It crowns an exceptional career.", "It begins an exceptional career.", "It ends an exceptional career badly.", "It is missing from an exceptional career."],
        correctIndex: 0,
        explanation: "\"Parachever\" is to bring to perfection, to crown, not merely to end.",
      },
      {
        type: "dictation",
        audio: "Je me permets de solliciter votre bienveillance.",
        explanation: "A formal-letter formula: \"solliciter\" belongs to written, polite requests.",
      },
      {
        type: "speak",
        text: "Les deux entreprises ont entamé des discussions.",
        prompt: "Say it in French: The two companies have begun talks.",
        explanation: "\"Entamer des discussions\" (or \"des négociations\"): to begin talks, an elegant verb.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "My grandmother introduced me to painting.",
        answer: "Ma grand-mère m'a initié à la peinture.",
        altAnswers: ["Ma grand-mère m'a initiée à la peinture."],
        explanation: "\"Initier quelqu'un à\" = to introduce someone to an activity: the correct use of \"initier\".",
      },
      {
        type: "speak",
        text: "Cette étude démontre que le dispositif est efficace.",
        tip: "\"Démontré\": dé-mon-tré, nasal on.",
        explanation: "\"Démontrer que\" (to prove) is stronger than \"montrer que\".",
      },
    ],
  },
];

export const FR_C2_U28_WRITING: WriteExercise = {
  type: "write",
  prompt: "Write the introduction and one developed paragraph of a French-style philosophy dissertation on the question \"Le travail nous rend-il libres ?\" (Does work make us free?). In the introduction, analyse the key terms, show the tension and state the problématique as an indirect question. In the paragraph, build an argument on a conceptual distinction, analyse one concrete example, raise an objection and answer it, and link back to the problématique.",
  minWords: 250,
  maxWords: 400,
  rubric: [
    "Analyses and defines the terms (\"on entend par\", \"au sens strict\", \"en tant que\") and uses abstract nouns with the right article (\"le travail\", \"la liberté\", \"une liberté\")",
    "States a problématique with correct indirect questions (\"il s'agit de se demander si\", \"dans quelle mesure\", no inversion after \"si\")",
    "Builds the argument on a distinction (\"il convient de distinguer... de...\") and analyses one example rather than listing several",
    "Raises and answers an objection (\"on pourrait objecter que\", \"si séduisante soit-elle\", \"sans doute ; mais\") and uses precise register verbs (\"entamer\", \"achever\", \"démontrer\", not \"débuter quelque chose\")",
  ],
  modelAnswer: "Le mot « travail » viendrait, selon une étymologie discutée, d'un instrument de torture, le tripalium. Le travail serait donc d'abord contrainte et souffrance, ce qui semble l'opposer à la liberté. Pourtant, on entend aussi par travail l'activité par laquelle l'homme transforme la nature et se transforme lui-même. Quant à la liberté, si on l'entend au sens strict comme le pouvoir de se déterminer soi-même, elle paraît exclure toute nécessité ; mais une liberté sans aucune œuvre ne serait-elle pas vide ? Il s'agit donc de se demander si le travail est seulement une contrainte que nous subissons ou s'il peut être le lieu où notre liberté se réalise.\n\nIl convient d'abord de distinguer le travail en tant que nécessité vitale du travail en tant qu'activité créatrice. Le premier nous est imposé par nos besoins : il faut travailler pour vivre. Le second, en revanche, permet à l'homme de reconnaître dans son œuvre la marque de sa propre intelligence. Considérons l'artisan qui achève une table : en façonnant le bois selon un projet qu'il a lui-même conçu, il ne se contente pas de répondre à un besoin, il imprime sa volonté à la matière et y découvre ce dont il est capable. On pourrait objecter que cet exemple est exceptionnel et que la plupart des travailleurs, à la chaîne ou devant un écran, exécutent des tâches dont ils ne maîtrisent ni le sens ni la fin. Sans doute ; mais cette objection, si juste soit-elle, ne démontre pas que le travail asservit par nature : elle montre plutôt que certaines formes d'organisation du travail privent l'homme de ce qui pourrait le libérer. Ainsi, le travail ne nous rend pas libres par lui-même ; il peut néanmoins devenir libérateur lorsque le travailleur reste l'auteur de ce qu'il fait. Reste à savoir à quelles conditions une telle maîtrise est possible.",
  explanation: "The model analyses the terms with \"on entend par\" and \"au sens strict\", states the problématique as an indirect question without inversion (\"il s'agit de se demander si le travail est...\"), builds the paragraph on a distinction (\"il convient de distinguer le travail en tant que... du travail en tant que...\"), analyses a single example, raises an objection and answers it with a literary concession (\"si juste soit-elle\"), uses precise verbs (\"achever\", \"démontrer\") and ends with a transition (\"reste à savoir\").",
};
