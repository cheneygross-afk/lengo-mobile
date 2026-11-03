// Synced from cheneygross-afk/lengo:src/lib/lessons/fr-c2-u12.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// French C2, Unit 12: Skimming, Scanning & Note-Taking.

export const FR_C2_U12: Lesson[] = [
  {
    slug: "c2-comprehension-strategies-5",
    level: "FR-C2",
    number: 1,
    title: "Stratégies de Compréhension, Part 5 of 8",
    summary: "Listening to radio and podcasts (France Culture, France Inter, RFI): how an interview is built, the host's framing questions, telling fact from opinion, and catching the speaker's attitude from modalisers like \"il me semble\", \"force est de constater\", \"j'ose espérer\".",
    duration: "18 min",
    sections: [
      {
        heading: "The framing and the credentials",
        body: [
          "French public radio (France Inter, France Culture, RFI) has a recognisable interview structure. The host opens with a framing: a fact, a figure or a quotation that sets the angle (\"Selon une étude publiée ce matin, un Français sur trois...\").",
        ],
        examples: [
          { es: "Selon une étude publiée ce matin, un Français sur trois ne part pas en vacances.", en: "According to a study published this morning, one in three French people doesn't go on holiday." },
          { es: "Vous êtes sociologue, directrice de recherche au CNRS.", en: "You're a sociologist, a research director at the CNRS." },
          { es: "Merci d'avoir été notre invitée ce matin.", en: "Thank you for being our guest this morning." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Qu'est-ce qui vous a frappée dans cette enquête ?",
            question: "What is the host asking?",
            options: ["What struck you in this survey?", "Who hit you during the investigation?", "What did you print in the survey?", "Why did you start this survey?"],
            correctIndex: 0,
            explanation: "\"Frapper\" means to strike, figuratively to impress; \"frappée\" agrees with a female guest.",
          },
        ],
      },
      {
        heading: "The first question is an open one",
        body: [
          "Then comes the introduction of the guest with their credentials (\"vous êtes sociologue, directrice de recherche au CNRS, et vous publiez...\"), and the first question, usually open: \"Qu'est-ce qui vous a frappée ?\"",
        ],
        examples: [
          { es: "Qu'est-ce qui vous a frappée dans cette enquête ?", en: "What struck you in this survey?" },
          { es: "Puis vient la présentation de l'invitée et de ses titres.", en: "Then comes the introduction of the guest and her credentials." },
          { es: "La première question est presque toujours ouverte.", en: "The first question is almost always an open one." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: What first struck you in these results?",
            words: ["Qu'est-ce qui", "vous a frappée", "d'abord", "dans ces résultats ?"],
            translation: "What first struck you in these results?",
            explanation: "The open question of the radio host, with the participle agreeing with a woman: \"frappée\".",
          },
        ],
      },
      {
        heading: "Follow-ups reveal the direction",
        body: [
          "The host's follow-up questions reveal the interview's direction: \"Concrètement, ça veut dire quoi ?\" (asking for an example), \"Mais n'est-ce pas un peu exagéré ?\" (devil's advocate), \"Vous allez plus loin, vous dites que...\" (pushing to a strong claim), \"On a une question d'un auditeur\" (a change of perspective). The interview often ends with \"Un mot pour conclure ?\" or \"Merci d'avoir été notre invitée.\"",
        ],
        examples: [
          { es: "Concrètement, ça veut dire quoi pour les familles ?", en: "In practical terms, what does that mean for families?" },
          { es: "Mais n'est-ce pas un peu exagéré ?", en: "But isn't that a bit of an exaggeration?" },
          { es: "On a une question d'un auditeur, si vous permettez.", en: "We have a question from a listener, if you don't mind." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French. (as a radio host)",
            source: "In practical terms, what does that mean?",
            answer: "Concrètement, qu'est-ce que ça veut dire ?",
            altAnswers: ["Concrètement, ça veut dire quoi ?", "Concrètement, qu'est-ce que cela signifie ?", "Concrètement, qu'est-ce que ça signifie ?"],
            explanation: "\"Concrètement\" asks the guest to move from theory to examples.",
          },
          {
            type: "multiple-choice",
            question: "The host says: « Mais n'est-ce pas un peu exagéré ? » What role is she playing?",
            options: ["Devil's advocate, testing the guest's claim", "Agreeing enthusiastically", "Introducing the guest", "Closing the interview"],
            correctIndex: 0,
            explanation: "A negative question with \"un peu exagéré\" challenges the guest so that they justify their claim.",
          },
        ],
      },
      {
        heading: "What to catch, what to let go",
        body: [
          "Strategy: you don't need every word. Catch the framing (what's the topic and angle?), the guest's status (expert, witness, politician?), and each new question (what is being asked now?). The answers will then fall into place.",
        ],
        examples: [
          { es: "Vous n'avez pas besoin de chaque mot.", en: "You do not need every word." },
          { es: "Repérez le cadrage, le statut de l'invité, puis chaque question.", en: "Spot the framing, the guest's status, then each question." },
          { es: "Les réponses se mettent alors en place d'elles-mêmes.", en: "The answers then fall into place by themselves." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You lose the thread in the middle of a long answer. What should you listen for?",
            options: ["The host's next question, which says what is being asked now.", "Every adjective the guest uses.", "The music under the credits.", "The guest's accent."],
            correctIndex: 0,
            explanation: "Each new question restarts the interview and tells you what the next stretch of answer is about; chasing individual words only loses more ground.",
          },
        ],
      },
      {
        heading: "Facts come with sources and figures",
        body: [
          "Experts on the radio mix facts and opinions, and part of Mastery listening is separating them. Facts come with sources and figures: \"d'après les chiffres de l'Insee\", \"l'étude porte sur dix mille personnes\", \"en 2022, le taux était de...\". Opinions come with verbs of judgement and evaluation: \"je pense\", \"j'estime\", \"à mon sens\", \"c'est inquiétant\", \"c'est une erreur\".",
        ],
        examples: [
          { es: "D'après les chiffres de l'Insee, le chômage a baissé de 0,3 point.", en: "According to INSEE figures, unemployment has fallen by 0.3 points." },
          { es: "L'étude porte sur dix mille personnes de quinze à vingt-cinq ans.", en: "The study covers ten thousand people aged fifteen to twenty-five." },
          { es: "À mon sens, c'est une erreur politique majeure.", en: "In my view, it's a major political mistake." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence is presented as an opinion rather than a fact?",
            options: ["À mon sens, cette réforme est une erreur.", "L'étude porte sur trois mille ménages.", "En 2023, le taux était de 12 %.", "D'après l'Insee, les prix ont augmenté de 4 %."],
            correctIndex: 0,
            explanation: "\"À mon sens\" marks a personal judgement; the others report sourced data.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "According to a study published today, one young person in two reads every day.",
            answer: "Selon une étude publiée aujourd'hui, un jeune sur deux lit tous les jours.",
            altAnswers: ["D'après une étude publiée aujourd'hui, un jeune sur deux lit tous les jours.", "Selon une étude parue aujourd'hui, un jeune sur deux lit tous les jours.", "D'après une étude parue aujourd'hui, un jeune sur deux lit tous les jours.", "Selon une étude publiée aujourd'hui, un jeune sur deux lit chaque jour."],
            explanation: "The typical framing of a radio item: a source and a figure (\"un sur deux\").",
          },
        ],
      },
      {
        heading: "Interpretations sit in between",
        body: [
          "Between the two lie interpretations: \"ces chiffres montrent que\", \"cela révèle\", \"on peut y voir\". They present an opinion as if it followed from the facts. A critical listener asks: does the figure really show that, or is the speaker going further?",
        ],
        examples: [
          { es: "Ces chiffres montrent que les jeunes lisent autrement, pas moins.", en: "These figures show that young people read differently, not less." },
          { es: "Cela révèle un changement d'habitudes, pas un désintérêt.", en: "That reveals a change of habits, not a loss of interest." },
          { es: "On peut y voir le signe d'une évolution plus large.", en: "One may see in it the sign of a wider change." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "These figures show that young people read differently.",
            answer: "Ces chiffres montrent que les jeunes lisent différemment.",
            altAnswers: ["Ces chiffres montrent que les jeunes lisent autrement.", "Ces données montrent que les jeunes lisent différemment.", "Ces chiffres montrent que les jeunes lisent de manière différente."],
            explanation: "\"Montrer que\" presents an interpretation as following from facts.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "In my view, it's a mistake.",
            answer: "À mon sens, c'est une erreur.",
            altAnswers: ["Selon moi, c'est une erreur.", "À mon avis, c'est une erreur.", "D'après moi, c'est une erreur."],
            explanation: "\"À mon sens\" is a slightly formal marker of opinion.",
          },
        ],
      },
      {
        heading: "Observation or analysis?",
        body: [
          "Hosts often make the distinction for you: \"C'est un constat ou c'est votre analyse ?\" (Is that an observation or your analysis?). Using these words yourself in a DALF debate shows control: \"Je distinguerais le constat, qui est incontestable, de l'interprétation, qui me paraît discutable.\"",
        ],
        examples: [
          { es: "C'est un constat ou c'est votre analyse ?", en: "Is that an observation or your analysis?" },
          { es: "Je distinguerais le constat de l'interprétation.", en: "I would distinguish the observation from the interpretation." },
          { es: "Distinguer les deux, c'est montrer que l'on maîtrise le sujet.", en: "Distinguishing the two shows that you have a grip on the subject." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Is that established, or is it your interpretation?",
            answer: "Est-ce établi, ou est-ce votre interprétation ?",
            altAnswers: ["Est-ce un fait établi, ou votre interprétation ?"],
            explanation: "The question asks the guest to say where the fact stops and the reading of it begins.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Rewrite it so the judgement is marked as the speaker's own.",
            source: "Le dispositif est un échec complet.",
            answer: "À mon sens, le dispositif est un échec complet.",
            altAnswers: ["Il me semble que le dispositif est un échec complet."],
            explanation: "A bare assertion is heard as a fact; \"à mon sens\" or \"il me semble que\" marks it as the speaker's evaluation, which is what a host asks for.",
          },
        ],
      },
      {
        heading: "Modalisers of prudence and certainty",
        body: [
          "Modalisers are words that show how certain, hesitant, critical or hopeful the speaker is. Prudence: \"il me semble que\", \"si je ne m'abuse\" (if I'm not mistaken), \"me semble-t-il\", \"vraisemblablement\". Certainty:",
        ],
        examples: [
          { es: "Il me semble que la question est mal posée.", en: "It seems to me that the question is badly framed." },
          { es: "Si je ne m'abuse, cette loi date de 2016.", en: "If I'm not mistaken, this law dates from 2016." },
          { es: "Force est de constater que les résultats ne sont pas au rendez-vous.", en: "One has to admit that the results haven't materialised." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[If I'm not mistaken], the law dates from 2019.",
            sentence: "___, la loi date de 2019.",
            answer: "Si je ne m'abuse",
            altAnswers: ["Si je ne me trompe pas", "Sauf erreur de ma part", "Si je ne me trompe"],
            explanation: "\"Si je ne m'abuse\" is a formal, slightly old-fashioned hedge.",
          },
          {
            type: "multiple-choice",
            question: "Which phrase signals certainty?",
            options: ["il est indéniable que", "il me semble que", "si je ne m'abuse", "j'ose espérer que"],
            correctIndex: 0,
            explanation: "\"Il est indéniable que\" asserts; the others hedge or hint.",
          },
        ],
      },
      {
        heading: "Hope as veiled criticism",
        body: [
          "\"force est de constater que\" (one has to admit that), \"il est indéniable que\", \"à n'en pas douter\". Hope or veiled criticism: \"j'ose espérer que\" (I would hope that, often meaning I fear otherwise), \"on peut regretter que\" + subjunctive.",
        ],
        examples: [
          { es: "J'ose espérer que le ministre a lu le rapport.", en: "I would hope that the minister has read the report." },
          { es: "On peut regretter que le débat ait été si court.", en: "It's a pity that the debate was so short." },
          { es: "La formule est polie, le reproche est clair.", en: "The phrasing is polite, the reproach is clear." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A guest says: « J'ose espérer que la direction a mesuré les conséquences. » What does she imply?",
            options: ["She doubts that management has thought it through.", "She is sure management has thought it through.", "She is daring to hope for a promotion.", "She is thanking management."],
            correctIndex: 0,
            explanation: "\"J'ose espérer\" is polite on the surface but expresses doubt or veiled criticism.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "It is a pity that the report was not published.",
            answer: "On peut regretter que le rapport n'ait pas été publié.",
            altAnswers: ["On peut regretter que ce rapport n'ait pas été publié."],
            explanation: "\"On peut regretter que\" takes the subjunctive, here in the past: \"n'ait pas été publié\".",
          },
        ],
      },
      {
        heading: "Force est de constater, on the radio",
        body: [
          "\"Force est de constater que\" is a favourite of French radio: it presents an uncomfortable truth as unavoidable. \"J'ose espérer\" is subtler: \"j'ose espérer que le ministre a lu le rapport\" sounds polite but implies the speaker doubts it. Hearing these phrases tells you the attitude even when the content is complex.",
        ],
        examples: [
          { es: "La formule présente une vérité gênante comme inévitable.", en: "The phrase presents an uncomfortable truth as unavoidable." },
          { es: "Les invités l'emploient pour clore une objection.", en: "Guests use it to close off an objection." },
          { es: "Elle s'entend dans presque tous les débats du matin.", en: "It is heard in almost every morning debate." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "One has to admit that the plan has failed.",
            answer: "Force est de constater que le plan a échoué.",
            altAnswers: ["Force est de constater que le projet a échoué.", "Il faut bien constater que le plan a échoué.", "Force est de reconnaître que le plan a échoué."],
            explanation: "\"Force est de constater que\" + indicative presents an unavoidable conclusion.",
          },
        ],
      },
      {
        heading: "The conditional modalises too",
        body: [
          "The conditional also modalises: \"cela poserait problème\" (it would seem to pose a problem), and the hearsay conditional distances the speaker from a claim: \"le gouvernement préparerait une réforme\" (the government is reportedly preparing). You will study it more in the press lessons.",
        ],
        examples: [
          { es: "Le gouvernement préparerait une réforme des retraites.", en: "The government is reportedly preparing a pensions reform." },
          { es: "Cela poserait problème dans plusieurs régions.", en: "That would seem to pose a problem in several regions." },
          { es: "Le conditionnel met le locuteur à distance de l'information.", en: "The conditional puts the speaker at a distance from the information." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The minister [is reportedly preparing] a new law.",
            sentence: "Le ministre ___ une nouvelle loi.",
            answer: "préparerait",
            explanation: "The hearsay conditional distances the journalist from an unconfirmed claim.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "It seems to me that this figure is out of date.",
            answer: "Il me semble que ce chiffre est dépassé.",
            altAnswers: ["Il me semble que ce chiffre n'est plus à jour."],
            explanation: "\"Il me semble que\" takes the indicative and hedges the claim; \"il semble que\" alone would be more impersonal.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Thank you for being our guest. (to a man)",
        answer: "Merci d'avoir été notre invité.",
        altAnswers: ["Merci d'avoir été notre invité ce matin.", "Je vous remercie d'avoir été notre invité."],
        explanation: "The ritual closing of a French interview; \"invité\" agrees with the guest.",
      },
      {
        type: "matching",
        instructions: "Match each modaliser with the attitude it expresses.",
        pairs: [
          { left: "force est de constater que", right: "an unavoidable conclusion" },
          { left: "il me semble que", right: "prudent opinion" },
          { left: "j'ose espérer que", right: "polite doubt" },
          { left: "si je ne m'abuse", right: "hedged factual claim" },
          { left: "le gouvernement préparerait", right: "unconfirmed report" },
        ],
        explanation: "Modalisers reveal the speaker's stance even when the content is complex.",
      },
      {
        type: "dictation",
        audio: "Force est de constater que les résultats sont décevants.",
        explanation: "\"Force est de constater que\" + indicative.",
      },
      {
        type: "speak",
        text: "Force est de constater que rien n'a changé.",
        prompt: "Say it in French: One has to admit that nothing has changed.",
        tip: "Stress \"ose\" slightly to make the irony audible.",
        explanation: "The formula of certainty, with the indicative after it.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Rewrite it so the claim is attributed, not asserted.",
        source: "Le gouvernement prépare une réforme du lycée.",
        answer: "Le gouvernement préparerait une réforme du lycée.",
        altAnswers: ["Le gouvernement serait en train de préparer une réforme du lycée."],
        explanation: "The hearsay conditional \"préparerait\" says the information is unconfirmed; the present would make the journalist answer for it.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Force est de constater que le dispositif n'ait pas fonctionné.",
        answer: "Force est de constater que le dispositif n'a pas fonctionné.",
        explanation: "\"Force est de constater que\" states a certainty, so it takes the indicative: \"n'a pas fonctionné\". Only \"on peut regretter que\" would call for the subjunctive.",
      },
    ],
  },
  {
    slug: "c2-radio-interview-text-detective",
    level: "FR-C2",
    number: 2,
    title: "Text Detective: L'Entretien Radiophonique",
    summary: "A sociologist talks about teenage language on the radio: identify the main idea, separate facts from opinions, and read the interviewer's attitude (complicity, scepticism, provocation).",
    duration: "20 min",
    sections: [
      {
        heading: "Transcript part 1: the framing",
        body: [
          "Here is an original transcript of a fictional morning interview. « Animatrice : \"Wesh\", \"en mode\", \"c'est chaud\"... Les parents s'inquiètent, les profs s'arrachent les cheveux. Nadia Benali, vous êtes sociologue du langage à l'université de Lille, vous publiez \"Parler jeune\" chez un éditeur parisien.",
        ],
        examples: [
          { es: "Les parents s'inquiètent, les profs s'arrachent les cheveux.", en: "Parents are worried, teachers are tearing their hair out." },
          { es: "Alors, faut-il s'alarmer ?", en: "So, should we be alarmed?" },
          { es: "Vous publiez un essai sur la langue des adolescents.", en: "You're publishing an essay on teenagers' language." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Teachers are tearing their hair out.",
            answer: "Les profs s'arrachent les cheveux.",
            altAnswers: ["Les professeurs s'arrachent les cheveux.", "Les enseignants s'arrachent les cheveux."],
            explanation: "\"S'arracher les cheveux\": to be in despair, a common hyperbole.",
          },
        ],
      },
      {
        heading: "The guest's answer, in one sentence",
        body: [
          "Alors, faut-il s'alarmer ? Nadia Benali : Pas du tout. Il me semble au contraire que ces adolescents font preuve d'une grande inventivité. Ils ne parlent pas moins bien que leurs parents : ils parlent autrement, selon les situations. »",
        ],
        examples: [
          { es: "Il me semble au contraire que ces adolescents font preuve d'une grande inventivité.", en: "On the contrary, it seems to me that these teenagers show great inventiveness." },
          { es: "Ils ne parlent pas moins bien que leurs parents : ils parlent autrement.", en: "They don't speak worse than their parents: they speak differently." },
          { es: "Ils adaptent leur langage selon les situations.", en: "They adapt their language to the situation." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What is the sociologist's main idea?",
            options: ["Teenagers speak differently depending on the situation, not worse.", "Teenagers' language is in decline.", "Teachers should ban slang at school.", "Parents speak better than their children."],
            correctIndex: 0,
            explanation: "Her first answer contains the thesis: \"ils parlent autrement, selon les situations\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "They don't speak worse: they speak differently.",
            answer: "Ils ne parlent pas moins bien : ils parlent autrement.",
            altAnswers: ["Ils ne parlent pas plus mal : ils parlent autrement.", "Ils ne parlent pas moins bien : ils parlent différemment.", "Ils ne parlent pas plus mal : ils parlent différemment."],
            explanation: "The colon carries the correction: not worse, but differently.",
          },
        ],
      },
      {
        heading: "How the framing sets up the thesis",
        body: [
          "The framing (\"les parents s'inquiètent, les profs s'arrachent les cheveux\") sets up a common fear, and the question \"faut-il s'alarmer ?\" invites the guest to confirm or deny it. Her answer gives the main idea in one sentence: teenagers don't speak worse, they speak differently depending on the situation. Everything else in the interview will develop this thesis.",
        ],
        examples: [
          { es: "Le cadrage installe une peur commune, la question la relance.", en: "The framing sets up a shared fear, and the question puts it to the guest." },
          { es: "La thèse tient en une phrase : autrement, et non moins bien.", en: "The thesis fits in one sentence: differently, and not worse." },
          { es: "Tout l'entretien développera cette idée.", en: "The whole interview will develop that idea." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "So, should we be worried?",
            answer: "Alors, faut-il s'inquiéter ?",
            altAnswers: ["Alors, faut-il s'alarmer ?", "Alors, doit-on s'inquiéter ?", "Alors, est-ce qu'il faut s'inquiéter ?", "Alors, faut-il s'en inquiéter ?"],
            explanation: "\"Faut-il\" + infinitive: the host's typical framing question.",
          },
        ],
      },
      {
        heading: "The modaliser and the colon",
        body: [
          "Note the modaliser \"il me semble au contraire\" (prudence + opposition) and the colon that replaces \"car\": \"ils ne parlent pas moins bien : ils parlent autrement\". The implicit link is correction (not this, but that).",
        ],
        examples: [
          { es: "« Il me semble au contraire » : prudence et opposition.", en: "\"Il me semble au contraire\": prudence plus opposition." },
          { es: "Les deux-points remplacent ici « car ».", en: "The colon here replaces \"car\"." },
          { es: "Le lien implicite est une correction : non pas ceci, mais cela.", en: "The implicit link is a correction: not this, but that." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Rewrite it with a colon instead of « car ».",
            source: "Ils ne parlent pas plus mal, car ils changent de registre.",
            answer: "Ils ne parlent pas plus mal : ils changent de registre.",
            altAnswers: ["Ils ne parlent pas plus mal : ils changent simplement de registre."],
            explanation: "The colon carries the correction on its own, which is why the guest uses it; keeping \"car\" states the link twice.",
          },
        ],
      },
      {
        heading: "Transcript part 2: the host turns sceptical",
        body: [
          "« Animatrice : Mais enfin, quand mon fils me répond \"c'est chaud\" à toutes mes questions, j'ai du mal à y voir de l'inventivité ! Nadia Benali (riant) : Je comprends. Mais regardez les chiffres : dans notre enquête, menée auprès de deux mille lycéens, plus de quatre-vingts pour cent déclarent changer de façon de parler avec leurs grands-parents ou en entretien d'embauche.",
        ],
        examples: [
          { es: "Quand mon fils me répond « c'est chaud », j'ai du mal à y voir de l'inventivité.", en: "When my son answers 'it's tricky' to everything, I struggle to see any inventiveness in it." },
          { es: "Ce qu'ils disent et ce qu'ils font, ce n'est pas toujours la même chose.", en: "What they say and what they do aren't always the same thing." },
          { es: "Mais enfin, j'ai du mal à vous suivre sur ce point.", en: "Come now, I find it hard to follow you on that point." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Why does the host repeat the word « Déclarent... » ?",
            options: ["She is sceptical: what pupils say may differ from what they do.", "She didn't hear the figure.", "She agrees enthusiastically.", "She is correcting the guest's grammar."],
            correctIndex: 0,
            explanation: "Picking up \"déclarent\" questions the reliability of self-reported data: classic scepticism.",
          },
        ],
      },
      {
        heading: "The data the guest offers",
        body: [
          "Animatrice : Déclarent... Ce qu'ils disent et ce qu'ils font, ce n'est pas toujours la même chose. Nadia Benali : C'est vrai, et c'est pourquoi nous avons aussi enregistré des conversations réelles. Force est de constater qu'ils passent d'un registre à l'autre avec une aisance remarquable. »",
        ],
        examples: [
          { es: "Notre enquête a été menée auprès de deux mille lycéens.", en: "Our survey was carried out among two thousand secondary school pupils." },
          { es: "Plus de quatre-vingts pour cent déclarent changer de façon de parler.", en: "More than eighty per cent say they change the way they speak." },
          { es: "C'est pourquoi nous avons aussi enregistré des conversations réelles.", en: "That's why we also recorded real conversations." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The survey was carried out among three thousand students.",
            answer: "L'enquête a été menée auprès de trois mille étudiants.",
            altAnswers: ["L'enquête a été réalisée auprès de trois mille étudiants.", "L'enquête a été conduite auprès de trois mille étudiants.", "L'enquête a été menée auprès de 3 000 étudiants.", "L'enquête a été menée auprès de trois mille élèves."],
            explanation: "\"Mener une enquête auprès de\" is the standard collocation for surveys.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "That is also why the team recorded two hundred hours of conversation.",
            answer: "C'est aussi pourquoi l'équipe a enregistré deux cents heures de conversation.",
            altAnswers: ["C'est aussi pourquoi l'équipe a enregistré deux cents heures de conversations."],
            explanation: "\"C'est pourquoi\" introduces the methodological answer; \"deux cents\" takes an s because it is a round multiple.",
          },
        ],
      },
      {
        heading: "Sorting the facts from the readings",
        body: [
          "Facts: the survey of two thousand lycéens, the eighty per cent who 'declare' changing their way of speaking, the recordings. Opinions or interpretations: \"une aisance remarquable\", \"une grande inventivité\". The host's attitude here is sceptical: she personalises (\"mon fils\"), then picks on the verb \"déclarent\", pointing out the gap between what people say and what they do. This is not hostility but the classic devil's advocate role.",
        ],
        examples: [
          { es: "Ils passent d'un registre à l'autre avec une aisance remarquable.", en: "They switch from one register to another with remarkable ease." },
          { es: "L'aisance remarquable est une évaluation, pas une mesure.", en: "The remarkable ease is an evaluation, not a measurement." },
          { es: "Les chiffres et les enregistrements, eux, sont des faits.", en: "The figures and the recordings, by contrast, are facts." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Ils passent d'un registre à l'autre avec une aisance remarquable.",
            question: "Is this a fact or an interpretation?",
            options: ["An interpretation: 'remarkable ease' is the researcher's evaluation.", "A pure fact: it is a figure from the survey.", "A question from the host.", "A quotation from a teenager."],
            correctIndex: 0,
            explanation: "\"Remarquable\" is evaluative: an interpretation based on the recordings.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "What a survey records and what people do are two different things.",
            answer: "Ce qu'une enquête enregistre et ce que les gens font sont deux choses différentes.",
            altAnswers: ["Ce qu'une enquête enregistre et ce que les gens font sont deux choses bien différentes."],
            explanation: "The doubled \"ce que\" structure is the host's objection, turned here into a general statement.",
          },
        ],
      },
      {
        heading: "Scepticism serves the listener",
        body: [
          "The guest answers the scepticism with a methodological point (real recordings), then a modaliser of certainty: \"force est de constater\". Notice how the exchange makes her argument stronger: a good interviewer's scepticism serves the listener.",
        ],
        examples: [
          { es: "L'invitée répond d'abord par un point de méthode.", en: "The guest answers first with a point of method." },
          { es: "Puis elle ajoute un modalisateur de certitude.", en: "Then she adds a modaliser of certainty." },
          { es: "Le scepticisme de l'animatrice renforce l'argument.", en: "The host's scepticism makes the argument stronger." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Why does the host's scepticism help the listener?",
            options: ["It forces the guest to give her evidence and her method.", "It shows that the guest is wrong.", "It fills the time until the next programme.", "It tells the listener what to think."],
            correctIndex: 0,
            explanation: "Pressing on the word \"déclarent\" is what brings out the recordings; a host who agreed with everything would leave the claim unsupported.",
          },
        ],
      },
      {
        heading: "Transcript part 3: the provocation",
        body: [
          "« Animatrice : Vous allez plus loin, vous dites que l'école devrait enseigner ces registres. Ça va faire bondir certains auditeurs ! Nadia Benali : Je dis simplement que l'école gagnerait à les reconnaître. Un élève qui sait qu'il parle autrement à ses copains et au proviseur a déjà compris l'essentiel : la langue est une palette, pas une règle unique.",
        ],
        examples: [
          { es: "Vous allez plus loin, vous dites que l'école devrait enseigner ces registres.", en: "You go further, you say that schools should teach these registers." },
          { es: "Ça va faire bondir certains auditeurs !", en: "That's going to make some listeners hit the roof!" },
          { es: "Vous allez plus loin, et cela va surprendre.", en: "You go further, and that is going to be a surprise." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which host attitude does « Mais enfin, quand mon fils me répond... » show?",
            options: ["Scepticism through a personal example", "Complicity with the guest", "Neutral introduction", "Closing the interview"],
            correctIndex: 0,
            explanation: "\"Mais enfin\" + a personal anecdote challenges the guest's thesis.",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: That will make a few teachers jump.",
            words: ["Ça va faire bondir", "quelques", "professeurs."],
            translation: "That will make a few teachers jump.",
            explanation: "\"Faire bondir quelqu'un\" is to make someone hit the roof: the host's way of announcing a provocation.",
          },
        ],
      },
      {
        heading: "Softening a radical claim",
        body: [
          "Animatrice : Un mot pour conclure ? Nadia Benali : J'ose espérer qu'on arrêtera un jour de dire que les jeunes massacrent le français. Ils le font vivre. »",
        ],
        examples: [
          { es: "L'école gagnerait à les reconnaître.", en: "Schools would benefit from recognising them." },
          { es: "La langue est une palette, pas une règle unique.", en: "Language is a palette, not a single rule." },
          { es: "Je dis simplement que l'école y gagnerait.", en: "I am simply saying that schools would be better off for it." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Schools would benefit from listening to them.",
            answer: "L'école gagnerait à les écouter.",
            altAnswers: ["Les écoles gagneraient à les écouter.", "L'école aurait intérêt à les écouter.", "Les écoles auraient intérêt à les écouter."],
            explanation: "\"Gagner à\" + infinitive in the conditional: a polite, moderate suggestion.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[You go further]: you say the school should change.",
            sentence: "___ : vous dites que l'école devrait changer.",
            answer: "Vous allez plus loin",
            explanation: "The host's push towards a controversial claim.",
          },
        ],
      },
      {
        heading: "The closing flourish",
        body: [
          "The host's \"vous allez plus loin\" and \"ça va faire bondir certains auditeurs\" (that'll make some listeners jump) are a provocation: she pushes the guest towards her most controversial claim. The guest responds by softening it: \"je dis simplement que l'école gagnerait à les reconnaître\" (conditional of suggestion), reformulating a radical proposal as a moderate one.",
        ],
        examples: [
          { es: "Un mot pour conclure ?", en: "A final word?" },
          { es: "On dit que les jeunes massacrent le français. Ils le font vivre.", en: "People say young people are murdering French. They're keeping it alive." },
          { es: "L'antithèse finale est un procédé de radio.", en: "The closing antithesis is a radio device." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Language is a toolbox, not a cage.",
            answer: "La langue est une boîte à outils, pas une cage.",
            altAnswers: ["La langue est une boîte à outils et non une cage."],
            explanation: "The same antithesis as the guest's closing line, built on a different image.",
          },
        ],
      },
      {
        heading: "Veiled criticism in the last word",
        body: [
          "The final \"j'ose espérer\" carries veiled criticism of the people who say young people \"massacrent le français\". And the closing antithesis (they do not murder French, \"ils le font vivre\") is a typical rhetorical flourish for the last word on the radio.",
        ],
        examples: [
          { es: "« J'ose espérer » vise ceux qui parlent de massacre.", en: "\"J'ose espérer\" is aimed at the people who talk about murdering the language." },
          { es: "La politesse de la formule rend la critique plus nette.", en: "The politeness of the phrase makes the criticism sharper." },
          { es: "Le dernier mot reste à l'invitée.", en: "The last word stays with the guest." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "J'ose espérer que les auditeurs ont comprit la nuance.",
            answer: "J'ose espérer que les auditeurs ont compris la nuance.",
            explanation: "The past participle of \"comprendre\" is \"compris\", with no final t. \"J'ose espérer que\" itself takes the indicative, so \"ont compris\" is the right tense.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "They show great inventiveness.",
        answer: "Ils font preuve d'une grande inventivité.",
        altAnswers: ["Elles font preuve d'une grande inventivité.", "Ils font preuve de beaucoup d'inventivité."],
        explanation: "\"Faire preuve de\" (to show, display a quality) is a formal collocation.",
      },
      {
        type: "matching",
        instructions: "Match each element of the interview with its function.",
        pairs: [
          { left: "Les profs s'arrachent les cheveux.", right: "framing a common fear" },
          { left: "Déclarent...", right: "scepticism about the data" },
          { left: "Ça va faire bondir certains auditeurs !", right: "provocation" },
          { left: "Force est de constater que...", right: "assertion of certainty" },
          { left: "Un mot pour conclure ?", right: "closing the interview" },
        ],
        explanation: "Recognising each move helps you follow the interview's structure.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: They switch from one register to another.",
        words: ["Ils", "passent", "d'un", "registre", "à", "l'autre."],
        translation: "They switch from one register to another.",
        explanation: "\"Passer d'un X à l'autre\": to move between.",
      },
      {
        type: "dictation",
        audio: "Ils ne le massacrent pas, ils le font vivre.",
        explanation: "An antithesis: the pronoun \"le\" refers to \"le français\".",
      },
      {
        type: "speak",
        text: "Il me semble au contraire qu'ils font preuve d'une grande inventivité.",
        prompt: "Say it in French: On the contrary, it seems to me they show great inventiveness.",
        explanation: "Prudent modaliser + opposition: \"il me semble au contraire\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Rewrite the claim so it sounds moderate.",
        source: "L'école doit enseigner l'argot des adolescents.",
        answer: "L'école gagnerait à reconnaître ces façons de parler.",
        altAnswers: ["L'école aurait intérêt à reconnaître ces façons de parler."],
        explanation: "The conditional of suggestion, \"gagnerait à\" plus an infinitive, turns an obligation into an advantage; \"doit\" is what makes listeners hit the roof.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Her study covers two thousand secondary school pupils.",
        answer: "Son étude porte sur deux mille lycéens.",
        altAnswers: ["Son enquête porte sur deux mille lycéens."],
        explanation: "\"Porter sur\" is the verb for what a study covers, and \"mille\" never takes an s.",
      },
    ],
  },
  {
    slug: "c2-comprehension-strategies-6",
    level: "FR-C2",
    number: 3,
    title: "Stratégies de Compréhension, Part 6 of 8",
    summary: "Reading modes (lecture globale, sélective, approfondie), the press genres (dépêche AFP, éditorial, tribune, chronique, article de fond) and the paratext that guides fast reading (titre, chapô, intertitres, encadré, légende), plus the hearsay conditional.",
    duration: "18 min",
    sections: [
      {
        heading: "Dépêche, article de fond, chronique",
        body: [
          "Knowing the genre tells you how to read. \"Une dépêche\" (from the AFP, Agence France-Presse) is a short news wire: facts, sources, no opinion, the most important information first. \"Un article de fond\" (in-depth article) investigates and explains, with quotations and data. \"Une chronique\" is a regular column by a named writer, often personal or humorous.",
        ],
        examples: [
          { es: "Selon une dépêche de l'AFP, l'incendie aurait fait trois blessés.", en: "According to an AFP report, the fire reportedly injured three people." },
          { es: "Sa chronique du samedi est toujours pleine d'humour.", en: "Her Saturday column is always full of humour." },
          { es: "Cet article de fond retrace dix ans de négociations.", en: "This in-depth article traces ten years of negotiations." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Cent médecins signent une tribune dans la presse.",
            question: "What does it mean?",
            options: ["A hundred doctors sign an opinion piece in the press.", "A hundred doctors sit in the stands.", "A hundred doctors sign a petition to a court.", "A hundred doctors write a news report."],
            correctIndex: 0,
            explanation: "\"Une tribune\" is an opinion piece by outside contributors (also a grandstand, but not here).",
          },
        ],
      },
      {
        heading: "Éditorial and tribune are not the same",
        body: [
          "\"L'éditorial\" expresses the newspaper's own position, written by the editor or a senior journalist; it argues. \"Une tribune\" is an opinion piece by an outside contributor (an academic, a politician, a collective of signatories): \"une tribune publiée dans Le Monde\". The paper does not necessarily share it. Confusing an éditorial with a tribune is a common mistake in DALF syntheses.",
        ],
        examples: [
          { es: "Dans son éditorial, le directeur du journal dénonce l'inaction du gouvernement.", en: "In his editorial, the paper's editor denounces the government's inaction." },
          { es: "Cent médecins signent une tribune pour alerter sur la pénurie de soignants.", en: "A hundred doctors sign an opinion piece warning of the shortage of health workers." },
          { es: "Il est temps que l'État prenne ses responsabilités.", en: "It is time the State faced up to its responsibilities." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A text in Le Monde is signed by 150 economists and begins « Nous, économistes, appelons... ». What genre is it?",
            options: ["une tribune", "un éditorial", "une dépêche", "un article de fond"],
            correctIndex: 0,
            explanation: "An opinion piece by outside contributors is a tribune; the éditorial represents the paper itself.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "In its editorial, the newspaper criticises the reform.",
            answer: "Dans son éditorial, le journal critique la réforme.",
            altAnswers: ["Dans son éditorial, le quotidien critique la réforme.", "Dans son éditorial, le journal dénonce la réforme.", "Dans son éditorial, le journal s'en prend à la réforme."],
            explanation: "\"L'éditorial\" expresses the paper's own position.",
          },
        ],
      },
      {
        heading: "Signs that give the genre away",
        body: [
          "Typical signs: a dépêche uses the hearsay conditional and attributions (\"selon\", \"a indiqué\"); an éditorial uses \"nous\", rhetorical questions and strong verbs (\"il est temps\", \"on ne peut que\"); a tribune often begins with a list of signatories or the author's credentials.",
        ],
        examples: [
          { es: "Une dépêche multiplie les attributions : « selon », « a indiqué ».", en: "A news wire piles up attributions: \"selon\", \"a indiqué\"." },
          { es: "Un éditorial pose des questions rhétoriques et emploie « nous ».", en: "An editorial asks rhetorical questions and uses \"nous\"." },
          { es: "Une tribune s'ouvre souvent sur la liste des signataires.", en: "An opinion piece often opens with the list of signatories." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A text opens « Nous ne pouvons plus attendre » and is signed by the paper's editor. What genre is it?",
            options: ["Un éditorial: the paper's own position.", "Une dépêche: a short news wire.", "Une tribune: an outside contributor's piece.", "Une chronique: a regular personal column."],
            correctIndex: 0,
            explanation: "The \"nous\" of the paper plus a strong call is the editorial; a tribune carries the same tone but is signed by someone outside the paper.",
          },
        ],
      },
      {
        heading: "The hearsay conditional",
        body: [
          "French journalism uses the conditional to report unconfirmed information: \"le Premier ministre démissionnerait dans la soirée\" (the PM is said to be resigning this evening), \"l'accident aurait fait deux victimes\" (reportedly). English uses 'reportedly', 'allegedly', 'is said to'. The conditional signals: we haven't confirmed this.",
        ],
        examples: [
          { es: "Le Premier ministre démissionnerait dans la soirée.", en: "The Prime Minister is said to be resigning this evening." },
          { es: "L'accident aurait fait deux victimes.", en: "The accident reportedly left two dead." },
          { es: "De source policière, le suspect aurait été interpellé à Lyon.", en: "According to police sources, the suspect has reportedly been arrested in Lyon." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The company [is said to be planning] layoffs.",
            sentence: "L'entreprise ___ des licenciements.",
            answer: "préparerait",
            altAnswers: ["envisagerait", "prévoirait", "planifierait"],
            explanation: "The present conditional: unconfirmed current information.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French. (news report)",
            source: "The storm reportedly caused major damage.",
            answer: "La tempête aurait causé d'importants dégâts.",
            altAnswers: ["La tempête aurait provoqué d'importants dégâts.", "La tempête aurait causé des dégâts importants.", "La tempête aurait provoqué des dégâts importants.", "La tempête aurait fait d'importants dégâts."],
            explanation: "Hearsay conditional for unconfirmed facts.",
          },
        ],
      },
      {
        heading: "Attribution: who answers for the claim",
        body: [
          "Attribution formulas tell you who is responsible for a claim: \"selon\", \"d'après\", \"de source policière\", \"a-t-on appris auprès de\", \"affirme\", \"estime\", \"assure\" (claims), \"reconnaît\" (admits). The verb choice is itself a judgement: \"il assure que\" sounds less convinced than \"il a démontré que\", \"il prétend que\" is sceptical.",
        ],
        examples: [
          { es: "Le maire assure que les travaux seront terminés en juin.", en: "The mayor claims the work will be finished in June." },
          { es: "La ministre reconnaît des « erreurs de communication ».", en: "The minister admits to 'communication errors'." },
          { es: "Selon le journal, le groupe envisagerait de fermer deux usines.", en: "According to the paper, the group is considering closing two factories." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which reporting verb shows the most scepticism?",
            options: ["Il prétend que...", "Il a démontré que...", "Il reconnaît que...", "Il constate que..."],
            correctIndex: 0,
            explanation: "\"Prétendre\" (to claim) casts doubt on the statement.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[According to police sources], two people were arrested.",
            sentence: "___, deux personnes auraient été interpellées.",
            answer: "De source policière",
            altAnswers: ["Selon la police", "D'après la police", "Selon des sources policières"],
            explanation: "\"De source policière\" is the compact press attribution.",
          },
        ],
      },
      {
        heading: "Keep the distance when you summarise",
        body: [
          "Reading strategy: when you see a conditional in a news article, don't read it as a hypothesis ('would'), but as a hedge. And when summarising, keep the distance: \"selon le journal, le ministre envisagerait...\" not \"le ministre envisage...\".",
        ],
        examples: [
          { es: "Le conditionnel de presse n'est pas une hypothèse.", en: "The press conditional is not a hypothesis." },
          { es: "En résumant, gardez la distance : « selon le journal ».", en: "When summarising, keep the distance: \"selon le journal\"." },
          { es: "Supprimer l'attribution revient à endosser l'information.", en: "Dropping the attribution means taking the information on yourself." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French. (news report)",
            source: "The fire reportedly started in the kitchen.",
            answer: "L'incendie aurait démarré dans la cuisine.",
            altAnswers: ["L'incendie se serait déclaré dans la cuisine.", "L'incendie aurait pris dans la cuisine.", "Le feu aurait démarré dans la cuisine.", "Le feu aurait pris dans la cuisine.", "L'incendie aurait commencé dans la cuisine."],
            explanation: "The past conditional reports an unconfirmed fact.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Rewrite it so the management, not you, answers for the claim.",
            source: "Le groupe ferme deux usines en Bretagne.",
            answer: "Selon la direction, le groupe fermerait deux usines en Bretagne.",
            altAnswers: ["D'après la direction, le groupe fermerait deux usines en Bretagne."],
            explanation: "An attribution plus the conditional puts the claim on its source; the plain present would make the writer answer for it.",
          },
        ],
      },
      {
        heading: "Paratext: titre, surtitre, chapô",
        body: [
          "The paratext is everything around the body of the article that helps you read fast: \"le titre\" (headline), \"le surtitre\" (kicker above it), \"le chapô\"",
        ],
        examples: [
          { es: "Le chapô résume l'essentiel de l'article en trois lignes.", en: "The standfirst sums up the essence of the article in three lines." },
          { es: "Les intertitres permettent de repérer la structure du texte.", en: "The subheadings make it possible to identify the structure of the text." },
          { es: "Le surtitre annonce la rubrique au-dessus du titre.", en: "The kicker announces the section above the headline." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The standfirst sums up the article.",
            answer: "Le chapô résume l'article.",
            altAnswers: ["Le chapeau résume l'article.", "Le chapô résume l'essentiel de l'article."],
            explanation: "\"Le chapô\" (or \"chapeau\") is the introductory paragraph in bold.",
          },
        ],
      },
      {
        heading: "Encadré, légende, signature",
        body: [
          "(the standfirst, the bold introductory paragraph that summarises the article), \"les intertitres\" (subheadings), \"l'encadré\" (box with extra information), \"la légende\" (photo caption), \"la signature\".",
        ],
        examples: [
          { es: "Les chiffres clés figurent dans l'encadré.", en: "The key figures are in the box." },
          { es: "La légende de la photo précise le lieu et la date.", en: "The photo caption gives the place and date." },
          { es: "La signature indique qui a écrit l'article.", en: "The byline says who wrote the article." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: The subheadings reveal the plan of the article.",
            words: ["Les intertitres", "révèlent le plan", "de l'article."],
            translation: "The subheadings reveal the plan of the article.",
            explanation: "Reading the subheadings alone gives the plan, which is why a skim reading starts there.",
          },
        ],
      },
      {
        heading: "Three reading modes",
        body: [
          "Three reading modes: \"la lecture globale\" (skimming) reads the paratext and the first and last lines of paragraphs to get the gist; \"la lecture sélective\" (scanning) hunts for one piece of information (a date, a figure, a name); \"la lecture approfondie\" (close reading) analyses every word, for nuance and argument.",
        ],
        examples: [
          { es: "Pour une revue de presse, une lecture globale suffit.", en: "For a press review, skimming is enough." },
          { es: "Une tribune exige une lecture approfondie.", en: "An opinion piece calls for close reading." },
          { es: "La lecture sélective chasse une date, un chiffre, un nom.", en: "Scanning hunts for a date, a figure, a name." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You need to find the unemployment rate in a long article. Which reading mode do you use?",
            options: ["la lecture sélective", "la lecture approfondie", "la lecture globale", "la lecture à voix haute"],
            correctIndex: 0,
            explanation: "Scanning for one piece of information is \"lecture sélective\".",
          },
        ],
      },
      {
        heading: "Choose the mode before you read",
        body: [
          "A good Mastery reader chooses the mode first. For a press review, read globally: title, chapô, intertitres. For a figure, scan the encadré and the paragraphs with numbers. For a tribune you will discuss, read in depth, noting modalisers and implicit links. The next lesson practises the choice.",
        ],
        examples: [
          { es: "Choisissez le mode avant de commencer à lire.", en: "Choose the mode before you start reading." },
          { es: "Pour une revue de presse : titre, chapô, intertitres.", en: "For a press review: headline, standfirst, subheadings." },
          { es: "Pour une tribune à discuter, lisez en profondeur.", en: "For an opinion piece you will discuss, read in depth." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The subheadings show the structure of the article.",
            answer: "Les intertitres montrent la structure de l'article.",
            altAnswers: ["Les intertitres révèlent la structure de l'article.", "Les intertitres indiquent la structure de l'article.", "Les intertitres font apparaître la structure de l'article."],
            explanation: "\"Les intertitres\" are the subheadings within an article.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "De source policière, le suspect a été interpellé, mais la préfecture ne confirme rien.",
            answer: "De source policière, le suspect aurait été interpellé, mais la préfecture ne confirme rien.",
            explanation: "An unconfirmed police source calls for the conditional \"aurait été interpellé\"; the plain past tense would make the paper answer for the arrest, which the second clause denies.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "According to the newspaper, the minister is considering resigning.",
        answer: "Selon le journal, le ministre envisagerait de démissionner.",
        altAnswers: ["D'après le journal, le ministre envisagerait de démissionner.", "Selon le journal, la ministre envisagerait de démissionner.", "Selon le quotidien, le ministre envisagerait de démissionner."],
        explanation: "Attribution + conditional keeps the distance from an unconfirmed claim.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The mayor admits mistakes were made.",
        answer: "Le maire reconnaît que des erreurs ont été commises.",
        altAnswers: ["La maire reconnaît que des erreurs ont été commises.", "Le maire reconnaît des erreurs.", "Le maire admet que des erreurs ont été commises."],
        explanation: "\"Reconnaître\" (admit) presents the claim as a concession.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "A column can be skimmed; an editorial cannot.",
        answer: "Une chronique peut se lire en diagonale ; un éditorial non.",
        altAnswers: ["Une chronique se lit en diagonale ; un éditorial non."],
        explanation: "\"Lire en diagonale\" is the French for skimming, and the genre decides whether it is enough.",
      },
      {
        type: "matching",
        instructions: "Match each press genre with its description.",
        pairs: [
          { left: "une dépêche", right: "a short news wire with no opinion" },
          { left: "un éditorial", right: "the paper's own position" },
          { left: "une tribune", right: "an outside contributor's opinion" },
          { left: "une chronique", right: "a regular personal column" },
          { left: "un article de fond", right: "an in-depth investigation" },
        ],
        explanation: "The genre tells you who is speaking and how to read.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: The accident reportedly left three injured.",
        words: ["L'accident", "aurait", "fait", "trois", "blessés."],
        translation: "The accident reportedly left three injured.",
        explanation: "\"Aurait fait\": past hearsay conditional.",
      },
      {
        type: "listen-choose",
        audio: "Le Premier ministre démissionnerait dans la soirée.",
        question: "What does it mean?",
        options: ["The Prime Minister is reportedly resigning this evening.", "The Prime Minister would resign if asked.", "The Prime Minister resigned this evening.", "The Prime Minister refuses to resign."],
        correctIndex: 0,
        explanation: "The journalistic conditional reports unconfirmed news, not a hypothesis.",
      },
      {
        type: "speak",
        text: "La mairie aurait eu connaissance du rapport.",
        prompt: "Say it in French: The town hall reportedly knew about the report.",
        explanation: "\"Aurait eu connaissance de\" reports something the paper has not confirmed.",
      },
    ],
  },
  {
    slug: "c2-reading-modes-contrast",
    level: "FR-C2",
    number: 4,
    title: "Contrast Clinic: Lecture Globale, Sélective, Approfondie",
    summary: "Not everything is read the same way: choose the strategy for the goal (the gist of an editorial, a figure in a report, the nuance of a tribune), apply it to the same article, and compare the results.",
    duration: "18 min",
    sections: [
      {
        heading: "The paratext of one article",
        body: [
          "Here is the paratext and opening of an original article. Surtitre: « Logement ». Titre: « Les centres-villes, nouveaux déserts familiaux ? » Chapô: « Loyers record, écoles qui ferment, commerces remplacés par des locations touristiques : dans plusieurs grandes villes, les familles avec enfants quittent le centre.",
        ],
        examples: [
          { es: "Les centres-villes, nouveaux déserts familiaux ?", en: "City centres: the new family deserts?" },
          { es: "Les commerces sont remplacés par des locations touristiques.", en: "Shops are being replaced by tourist rentals." },
          { es: "Surtitre, titre, chapô : le lecteur sait déjà de quoi il s'agit.", en: "Kicker, headline, standfirst: the reader already knows what it is about." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You have thirty seconds to tell a colleague what the article is about. What do you read?",
            options: ["The title, the chapô and the intertitres", "The encadré only", "The last paragraph in detail", "Every sentence of the first section"],
            correctIndex: 0,
            explanation: "\"La lecture globale\" relies on the paratext to get the gist.",
          },
        ],
      },
      {
        heading: "The subheadings and the box",
        body: [
          "Enquête à Bordeaux, Lyon et Annecy. » Intertitres: « Des classes fermées faute d'élèves » ; « La tentation de la périphérie » ; « Les maires cherchent la parade ». Encadré: « En chiffres : – 18 % d'enfants de moins de 11 ans dans le centre de Bordeaux entre 2012 et 2022 (source : Insee). »",
        ],
        examples: [
          { es: "Des classes fermées faute d'élèves.", en: "Classes closed for lack of pupils." },
          { es: "La tentation de la périphérie.", en: "The lure of the suburbs." },
          { es: "Les maires cherchent la parade.", en: "Mayors look for a way to fight back." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Classes are closing for lack of pupils.",
            answer: "Des classes ferment faute d'élèves.",
            altAnswers: ["Les classes ferment faute d'élèves.", "Des classes sont fermées faute d'élèves.", "Des classes ferment par manque d'élèves."],
            explanation: "\"Faute de\" + noun without article: for lack of.",
          },
        ],
      },
      {
        heading: "Global reading: thirty seconds",
        body: [
          "Lecture globale (goal: what's it about, in thirty seconds?): the title's question, the chapô, the intertitres. Result: families are leaving city centres because of rents and tourism, schools are closing, families go to the suburbs, mayors are looking for solutions. You haven't read the body, yet you could summarise the article.",
        ],
        examples: [
          { es: "En trente secondes, on tient déjà le sujet.", en: "In thirty seconds, you already have the subject." },
          { es: "Le corps de l'article n'a pas encore été lu.", en: "The body of the article has not been read yet." },
          { es: "Les intertitres donnent le plan en trois temps.", en: "The subheadings give the plan in three steps." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: The article deals with school closures.",
            words: ["L'article", "traite", "de", "la", "fermeture", "des", "écoles."],
            translation: "The article deals with school closures.",
            explanation: "\"Traiter de\" + noun.",
          },
        ],
      },
      {
        heading: "Selective and in-depth on the same text",
        body: [
          "Lecture sélective (goal: one figure for a presentation): go straight to the encadré: minus 18 per cent of under-11s in central Bordeaux in ten years, source Insee. Lecture approfondie (goal: understand the journalist's angle): notice the question mark in the title (a hypothesis, not a fact), the strong metaphor \"déserts familiaux\", and the verb \"cherchent la parade\" (are looking for a counter-move), which suggests the mayors are on the defensive.",
        ],
        examples: [
          { es: "Moins 18 % d'enfants de moins de onze ans entre 2012 et 2022.", en: "18% fewer children under eleven between 2012 and 2022." },
          { es: "Le point d'interrogation du titre annonce une hypothèse.", en: "The question mark in the headline announces a hypothesis." },
          { es: "« Chercher la parade » place les maires sur la défensive.", en: "\"Chercher la parade\" puts the mayors on the defensive." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Families with children are leaving the centre.",
            answer: "Les familles avec enfants quittent le centre.",
            altAnswers: ["Les familles avec des enfants quittent le centre."],
            explanation: "The chapô states the movement in this form, which is the sentence a skim reading retains.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The headline suggests a hypothesis.",
            answer: "Le titre suggère une hypothèse.",
            altAnswers: ["Le titre avance une hypothèse.", "Le titre laisse entendre une hypothèse."],
            explanation: "\"Suggérer\" interprets: the product of close reading.",
          },
        ],
      },
      {
        heading: "Mode problems, not language problems",
        body: [
          "Most reading problems at the Mastery level are not language problems but mode problems. Reading a 3,000-word report in depth when you only need one figure wastes an hour. Skimming a tribune when you must discuss it in an exam leaves you blind to its irony and concessions. Scanning an editorial for keywords misses the argument, which is in the connectors and the modalisers.",
        ],
        examples: [
          { es: "Une lecture globale ne devrait pas dépasser trois minutes.", en: "A skim reading shouldn't take more than three minutes." },
          { es: "Lire un rapport entier pour un seul chiffre coûte une heure.", en: "Reading a whole report for a single figure costs an hour." },
          { es: "Survoler une tribune, c'est manquer son ironie.", en: "Skimming an opinion piece means missing its irony." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In an exam, you must discuss a tribune's argument. Which mode is required?",
            options: ["la lecture approfondie", "la lecture sélective", "la lecture globale", "a reading of the title only"],
            correctIndex: 0,
            explanation: "Arguments live in connectors, concessions and modalisers: they require close reading.",
          },
        ],
      },
      {
        heading: "Typical mistakes with titles and chapôs",
        body: [
          "Typical mistakes: taking the title as the conclusion (French titles often ask questions or play on words, \"Paris, ville lumière... et chère\"), stopping at the chapô when the body nuances it (\"si la tendance est nette, elle n'est pas générale\"), and treating an encadré figure as the article's thesis.",
        ],
        examples: [
          { es: "Si la tendance est nette, elle n'est pas générale.", en: "While the trend is clear, it is not universal." },
          { es: "Le titre pose une question, il n'affirme rien.", en: "The headline asks a question; it asserts nothing." },
          { es: "Paris, ville lumière... et chère.", en: "Paris, City of Light... and of high prices." },
          { es: "L'encadré donne un chiffre, pas la thèse de l'article.", en: "The box gives a figure, not the article's thesis." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Le titre pose une question, il n'affirme rien.",
            question: "What does it mean?",
            options: ["The headline asks a question; it asserts nothing.", "The headline answers a question.", "The headline is a quotation.", "The headline is misleading."],
            correctIndex: 0,
            explanation: "A question in a title is a hypothesis to be tested by the article.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "While the figure is striking, it covers only one city.",
            answer: "Si le chiffre est frappant, il ne concerne qu'une seule ville.",
            altAnswers: ["Si le chiffre est frappant, il ne porte que sur une seule ville."],
            explanation: "\"Si\" plus the indicative is concessive here, not conditional: it grants the point before limiting it.",
          },
        ],
      },
      {
        heading: "Write down the goal, then time yourself",
        body: [
          "Strategy: before you read, write down your goal in one line. Then choose: global (gist), selective (data), in-depth (argument and nuance). And time yourself: a global reading of a press article should take two to three minutes at the Mastery level.",
        ],
        examples: [
          { es: "Avant de lire, je note mon objectif en une ligne.", en: "Before reading, I write down my goal in one line." },
          { es: "Écrivez votre objectif en une ligne, puis choisissez.", en: "Write your goal in one line, then choose." },
          { es: "Chronométrez-vous : deux à trois minutes suffisent.", en: "Time yourself: two to three minutes are enough." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            answer: "Avant de lire",
            altAnswers: ["Avant la lecture"],
            explanation: "\"Avant de\" plus the infinitive, because the subject of both verbs is the same reader.",
            en: "[Before reading], write down your goal in one line.",
            sentence: "___, notez votre objectif en une ligne.",
          },
          {
            type: "multiple-choice",
            question: "You need the exact date of a law mentioned in a long report. Which mode?",
            options: ["la lecture sélective", "la lecture approfondie", "la lecture globale", "reading the conclusion only"],
            correctIndex: 0,
            explanation: "One precise piece of information: scan for it.",
          },
        ],
      },
      {
        heading: "Reporting a global reading",
        body: [
          "Each mode produces a different kind of report. After a global reading: \"l'article traite de\", \"il est question de\", \"le journaliste s'intéresse à\". After a selective reading:",
        ],
        examples: [
          { es: "L'article traite de l'exode des familles hors des centres-villes.", en: "The article deals with the exodus of families from city centres." },
          { es: "Il est question des loyers et de la fermeture des écoles.", en: "It discusses rents and school closures." },
          { es: "Après une lecture globale, on dit « il est question de ».", en: "After a skim reading, you say \"il est question de\"." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[It discusses] tourism and housing.",
            sentence: "___ de tourisme et de logement.",
            answer: "Il est question",
            altAnswers: ["Il s'agit"],
            explanation: "\"Il est question de\" introduces the subject.",
          },
        ],
      },
      {
        heading: "Reporting selective and in-depth readings",
        body: [
          "\"d'après l'encadré\", \"selon les chiffres de l'Insee cités par l'article\", \"le texte indique que\". After an in-depth reading: \"le journaliste laisse entendre que\", \"le titre interrogatif suggère\", \"la métaphore des déserts souligne\".",
        ],
        examples: [
          { es: "D'après l'encadré, le nombre d'enfants a baissé de 18 %.", en: "According to the box, the number of children has fallen by 18%." },
          { es: "Le journaliste laisse entendre que les maires ont réagi trop tard.", en: "The journalist implies that the mayors reacted too late." },
          { es: "Après une lecture sélective, on cite la source du chiffre.", en: "After a selective reading, you quote the source of the figure." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The journalist [implies] that the policy has failed.",
            sentence: "Le journaliste ___ que la politique a échoué.",
            answer: "laisse entendre",
            altAnswers: ["sous-entend", "suggère", "insinue"],
            explanation: "\"Laisser entendre\": an interpretation that goes beyond the explicit text.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "According to the box, the number of pupils has fallen.",
            answer: "D'après l'encadré, le nombre d'élèves a baissé.",
            altAnswers: ["Selon l'encadré, le nombre d'élèves a baissé.", "D'après l'encadré, le nombre d'élèves a diminué.", "Selon l'encadré, le nombre d'élèves a diminué."],
            explanation: "\"D'après l'encadré\": a selective-reading report.",
          },
        ],
      },
      {
        heading: "The gradation of the verbs",
        body: [
          "Notice the gradation in the verbs: \"traiter de\" and \"être question de\" give the subject; \"indiquer\" gives information; \"laisser entendre\", \"suggérer\" and \"souligner\" interpret. Using the right verb shows which reading you did and how far you are going beyond the text.",
        ],
        examples: [
          { es: "Le titre interrogatif suggère une hypothèse plutôt qu'un constat.", en: "The question in the headline suggests a hypothesis rather than an observation." },
          { es: "La métaphore des « déserts familiaux » souligne la gravité du phénomène.", en: "The metaphor of 'family deserts' emphasises the seriousness of the phenomenon." },
          { es: "« Indiquer » informe, « suggérer » interprète.", en: "\"Indiquer\" informs, \"suggérer\" interprets." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The article deals with rising rents.",
            answer: "L'article traite de la hausse des loyers.",
            altAnswers: ["L'article traite de l'augmentation des loyers.", "L'article porte sur la hausse des loyers.", "Il est question dans l'article de la hausse des loyers."],
            explanation: "\"Traiter de\" gives the subject, the product of a global reading.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The metaphor emphasises the seriousness of the problem.",
            answer: "La métaphore souligne la gravité du problème.",
            altAnswers: ["La métaphore met en relief la gravité du problème.", "La métaphore met en évidence la gravité du problème.", "La métaphore accentue la gravité du problème."],
            explanation: "\"Souligner\" and \"mettre en relief\" are the commentary verbs of close reading.",
          },
        ],
      },
      {
        heading: "Combining the three in a synthesis",
        body: [
          "In a DALF synthesis, you will combine all three: the theme (global), the key data (selective), and the position of each author (in-depth).",
        ],
        examples: [
          { es: "La synthèse combine les trois lectures.", en: "The synthesis combines the three readings." },
          { es: "Le thème vient de la lecture globale.", en: "The theme comes from the global reading." },
          { es: "La position de chaque auteur vient de la lecture approfondie.", en: "Each author's position comes from the close reading." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Rewrite it with a verb that interprets rather than informs.",
            source: "L'article signale que les écoles ferment une à une.",
            answer: "L'article laisse entendre que les écoles ferment une à une.",
            altAnswers: ["L'article suggère que les écoles ferment une à une."],
            explanation: "\"Signaler\" only passes the information on; \"laisser entendre\" and \"suggérer\" say that you are reading between the lines, which only a close reading licenses.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Tourist rentals have replaced the bookshop.",
        answer: "Des locations touristiques ont remplacé la librairie.",
        altAnswers: ["Les locations touristiques ont remplacé la librairie."],
        explanation: "Here the rentals are the subject, so the participle \"remplacé\" stays invariable after \"avoir\".",
      },
      {
        type: "matching",
        instructions: "Match each goal with the reading mode.",
        pairs: [
          { left: "get the gist of an editorial", right: "lecture globale" },
          { left: "find a figure in a report", right: "lecture sélective" },
          { left: "analyse the irony of a tribune", right: "lecture approfondie" },
          { left: "prepare a quick press review", right: "lecture globale of titles and chapôs" },
        ],
        explanation: "Choose the mode before you start reading.",
      },
      {
        type: "dictation",
        audio: "Je note mon objectif avant de choisir mon mode de lecture.",
        explanation: "The goal decides the mode, which is why it is written down first.",
      },
      {
        type: "speak",
        text: "Le journaliste se garde de conclure.",
        prompt: "Say it in French: The journalist is careful not to conclude.",
        explanation: "\"Se garder de\" plus the infinitive: a close reading notices what the writer declines to say.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "D'après l'encadré, le nombre d'enfants a baissé, selon des chiffres que l'Insee a publié.",
        answer: "D'après l'encadré, le nombre d'enfants a baissé, selon des chiffres que l'Insee a publiés.",
        explanation: "The participle agrees with the direct object placed before it, \"que\", which stands for \"des chiffres\": \"a publiés\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "A press review only needs the headlines and the standfirsts.",
        answer: "Une revue de presse ne demande que les titres et les chapôs.",
        altAnswers: ["Pour une revue de presse, les titres et les chapôs suffisent."],
        explanation: "\"Ne demander que\" is the restrictive construction; the paratext alone carries a press review.",
      },
    ],
  },
  {
    slug: "c2-comprehension-strategies-7",
    level: "FR-C2",
    number: 5,
    title: "Stratégies de Compréhension, Part 7 of 8",
    summary: "Note-taking in French: abbreviations (qqch, qqn, pb, gvt, dvpt, tjs, ds, cad, cf.), symbols (→, ≠, ⊂, +/-), hierarchy and indentation, nominal style, and the lecturer's signposts (j'insiste sur, retenez que, je reviendrai sur ce point, j'ouvre une parenthèse).",
    duration: "18 min",
    sections: [
      {
        heading: "Abbreviations for frequent words",
        body: [
          "French students take notes with a shared set of abbreviations. Common words: \"qqch\" (quelque chose), \"qqn\" (quelqu'un), \"pb\" (problème), \"tjs\" (toujours), \"ds\" (dans), \"pr\" (pour), \"ms\" (mais), \"tt\"",
        ],
        examples: [
          { es: "pb du logt ds les gdes villes → ↗ loyers", en: "housing problem in big cities → rents rising" },
          { es: "NB : tjs citer la source, cf. chap. 3", en: "NB: always cite the source, see chapter 3" },
          { es: "bcp de monde, ms tt le monde n'écoute pas", en: "a lot of people, but not everyone is listening" },
        ],
        checkpoint: [
          {
            type: "matching",
            instructions: "Match each note-taking abbreviation with its full form.",
            pairs: [
              { left: "qqch", right: "quelque chose" },
              { left: "gvt", right: "gouvernement" },
              { left: "dvpt", right: "développement" },
              { left: "tjs", right: "toujours" },
              { left: "cad", right: "c'est-à-dire" },
            ],
            explanation: "French notes drop vowels and shrink frequent words to a few consonants: \"gvt\", \"dvpt\", \"tjs\".",
          },
          {
            type: "multiple-choice",
            question: "What does the note « NB : cf. chap. 3 » tell you?",
            options: ["Important: see chapter 3", "No book: chapter 3 is missing", "New beginning: chapter 3", "Not bad: chapter 3"],
            correctIndex: 0,
            explanation: "\"NB\" = nota bene (note well), \"cf.\" = see, compare.",
          },
        ],
      },
      {
        heading: "Shrinking endings and long nouns",
        body: [
          "(tout), \"bcp\" (beaucoup), \"cad\" or \"c-à-d\" (c'est-à-dire), \"cf.\" (Latin \"confer\": voir, se reporter à). Endings: \"-mt\" for \"-ment\" (\"seulemt\", \"rapidemt\"), and frequent nouns shrink to a few consonants (\"gvt\" gouvernement, \"dvpt\" développement, \"logt\" logement); \"°\" (or a superscript \"on\") for \"-tion\" (\"educ°\" for \"éducation\").",
        ],
        examples: [
          { es: "gvt ≠ syndicats sur la réforme", en: "government vs unions on the reform" },
          { es: "dvpt durable ⊂ politiques locales", en: "sustainable development is part of local policies" },
          { es: "rapidemt : dvpt du logt social", en: "quickly: the growth of social housing" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Write the full French sentence that the notes \"gvt ≠ syndicats\" stand for: The government disagrees with the unions.",
            source: "The government disagrees with the unions.",
            answer: "Le gouvernement s'oppose aux syndicats.",
            altAnswers: ["Le gouvernement est en désaccord avec les syndicats.", "Le gouvernement n'est pas d'accord avec les syndicats."],
            explanation: "≠ can mean 'is different from' or 'opposes': context decides.",
          },
        ],
      },
      {
        heading: "Symbols for the logical words",
        body: [
          "Symbols replace logical words: → (entraîne, donc), ← (provient de), = (égale, signifie), ≠ (différent de, s'oppose à), ⊂ (fait partie de), + / - (plus, moins), ↗ / ↘ (augmente, diminue), ∆ (changement), ∴ (donc), NB (nota bene, important). Use them consistently; inventing a new one mid-lecture is a recipe for confusion when you reread.",
        ],
        examples: [
          { es: "qqn qui ne lit pas = qqn qui lit autrement ?", en: "someone who doesn't read = someone who reads differently?" },
          { es: "chômage ↘ ms précarité ↗", en: "unemployment down but job insecurity up" },
          { es: "crise ← spéculat° ∴ ∆ de politique", en: "the crisis comes from speculation, therefore a change of policy" },
        ],
        checkpoint: [
          {
            type: "matching",
            instructions: "Match each symbol with its meaning.",
            pairs: [
              { left: "→", right: "leads to, therefore" },
              { left: "≠", right: "differs from, opposes" },
              { left: "⊂", right: "is part of" },
              { left: "↗", right: "increases" },
              { left: "↘", right: "decreases" },
            ],
            explanation: "Symbols replace logical words; use them consistently.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Write the full French sentence that the notes \"chômage ↘ ms précarité ↗\" stand for: Unemployment is falling but job insecurity is rising.",
            source: "Unemployment is falling but job insecurity is rising.",
            answer: "Le chômage baisse, mais la précarité augmente.",
            altAnswers: ["Le chômage diminue, mais la précarité augmente.", "Le chômage baisse mais la précarité augmente.", "Le chômage recule, mais la précarité progresse.", "Le chômage diminue mais la précarité augmente."],
            explanation: "↘ and ↗ become verbs; \"ms\" is \"mais\".",
          },
        ],
      },
      {
        heading: "Readable a week later",
        body: [
          "Abbreviations must remain readable a week later. A good rule: abbreviate frequent grammatical words and the lecture's recurring key terms (decide on an abbreviation at the start: \"mondialisat°\" → \"MD\"), but write rare or technical words in full.",
        ],
        examples: [
          { es: "Vos notes doivent rester lisibles une semaine plus tard.", en: "Your notes have to stay readable a week later." },
          { es: "Fixez l'abréviation des mots clés dès le début.", en: "Settle on the abbreviation of the key terms from the start." },
          { es: "Écrivez en entier les mots rares ou techniques.", en: "Write rare or technical words out in full." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A whole lecture turns on the word « mondialisation ». What do you do with it?",
            options: ["Fix an abbreviation at the start and keep it throughout.", "Write it out in full every single time.", "Invent a new abbreviation on each page.", "Leave it out: the context is enough."],
            correctIndex: 0,
            explanation: "A recurring key term earns one fixed abbreviation, chosen at the start; new ones invented as you go are what make a page unreadable later.",
          },
        ],
      },
      {
        heading: "Nominal, telegraphic style",
        body: [
          "Notes are written in a nominal, telegraphic style: verbs become nouns, articles and auxiliaries disappear. \"Le gouvernement a décidé de baisser les impôts\" → \"décision gvt : baisse impôts\". \"Les loyers ont augmenté de 20 % en cinq ans\" → \"↗ loyers 20 % / 5 ans\". This is the same nominalisation you use in reports, pushed to the extreme.",
        ],
        examples: [
          { es: "décision gvt : baisse impôts 2025", en: "government decision: tax cuts in 2025" },
          { es: "↗ loyers 20 % / 5 ans", en: "rents up 20% over 5 years" },
          { es: "fermeture écoles → départ familles", en: "school closures lead to families leaving" },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words, in note style.",
            en: "Notes: [fall in] the birth rate since 2015",
            sentence: "___ natalité depuis 2015",
            answer: "↘",
            altAnswers: ["baisse"],
            explanation: "The arrow down stands for any fall; the noun after it needs no article in note style.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Write the full French sentence that the notes \"fermeture écoles → départ familles\" stand for: School closures are leading families to leave.",
            source: "School closures are leading families to leave.",
            answer: "La fermeture des écoles entraîne le départ des familles.",
            altAnswers: ["La fermeture des écoles provoque le départ des familles.", "Les fermetures d'écoles entraînent le départ des familles.", "La fermeture des écoles pousse les familles à partir."],
            explanation: "→ is usually \"entraîner\" or \"provoquer\"; the nouns get their articles back.",
          },
        ],
      },
      {
        heading: "Hierarchy by indentation",
        body: [
          "Hierarchy is shown by indentation and numbering, not by sentences: main idea at the margin, examples indented, with dashes or numbers. A clear page has a title, two or three main points, and sub-points below each. Leave space: you will add things the lecturer comes back to.",
        ],
        examples: [
          { es: "1. Causes – spéculation – tourisme", en: "1. Causes – speculation – tourism" },
          { es: "Idée principale à la marge, exemples en retrait.", en: "Main idea at the margin, examples indented." },
          { es: "Laissez de la place : l'intervenante y reviendra.", en: "Leave space: the speaker will come back to it." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Rewrite the sentence as a note in telegraphic style.",
            source: "Le gouvernement a décidé de geler les loyers.",
            answer: "décision gvt : gel loyers",
            altAnswers: ["gvt : gel des loyers"],
            explanation: "Notes drop the articles and the auxiliary and turn the verb into a noun; keeping \"a décidé de\" would defeat the purpose.",
          },
        ],
      },
      {
        heading: "Always note who said it",
        body: [
          "Attribution is vital in notes, especially when several speakers or sources are involved: \"selon X\", \"X : ...\", or initials. Without it, you will later mix up the lecturer's opinion with a theory she was criticising.",
        ],
        examples: [
          { es: "selon Dupont : crise = cyclique", en: "according to Dupont: the crisis is cyclical" },
          { es: "critique de la thèse de Dupont par l'intervenante", en: "the speaker criticises Dupont's thesis" },
          { es: "sans attribut°, on confond les thèses", en: "without attribution, you confuse the theses" },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Selon Dupont, la crise serait cyclique.",
            question: "How should you note it?",
            options: ["selon Dupont : crise = cyclique", "crise = cyclique", "Dupont ≠ crise", "crise → Dupont"],
            correctIndex: 0,
            explanation: "Always keep the attribution: it's Dupont's view, reported with distance (conditional).",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Write the full French sentence that the notes \"décision gvt : baisse impôts\" stand for: The government has decided to cut taxes.",
            source: "The government has decided to cut taxes.",
            answer: "Le gouvernement a décidé de baisser les impôts.",
            altAnswers: ["Le gouvernement a pris la décision de baisser les impôts.", "Le gouvernement a décidé une baisse des impôts.", "Le gouvernement a décidé de réduire les impôts."],
            explanation: "Undo the nominalisation: \"décision\" → \"a décidé\", \"baisse\" → \"baisser\".",
          },
        ],
      },
      {
        heading: "Signposts of importance",
        body: [
          "Lecturers tell you what matters, if you listen for the signposts. Importance: \"j'insiste sur\", \"retenez que\", \"c'est essentiel\", \"notez bien\". Structure: \"dans un premier temps\", \"j'en viens à\", \"passons maintenant à\", \"pour résumer\".",
        ],
        examples: [
          { es: "J'insiste sur ce point : la corrélation n'est pas une causalité.", en: "I want to stress this point: correlation is not causation." },
          { es: "Retenez que la loi date de 1905.", en: "Remember that the law dates from 1905." },
          { es: "c'est essentiel, notez bien ce chiffre", en: "this is essential: note this figure carefully" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French. (as a lecturer)",
            source: "I want to stress this point.",
            answer: "J'insiste sur ce point.",
            altAnswers: ["Je tiens à insister sur ce point.", "J'insiste particulièrement sur ce point."],
            explanation: "\"Insister sur\" marks importance: star it in your notes.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French. (as a lecturer)",
            source: "Remember that this law dates from 1975.",
            answer: "Retenez que cette loi date de 1975.",
            altAnswers: ["Retenez bien que cette loi date de 1975.", "Notez que cette loi date de 1975.", "Retiens que cette loi date de 1975."],
            explanation: "\"Retenez que\" signals an essential point.",
          },
        ],
      },
      {
        heading: "Structure and digression",
        body: [
          "Digression: \"j'ouvre une parenthèse\" / \"je ferme la parenthèse\" (you can note less), \"soit dit en passant\" (incidentally).",
        ],
        examples: [
          { es: "J'ouvre une parenthèse : ce terme vient du grec.", en: "A brief aside: this term comes from Greek." },
          { es: "J'en viens maintenant à la deuxième partie.", en: "I now come to the second part." },
          { es: "soit dit en passant, le terme est contesté", en: "incidentally, the term is disputed" },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[A brief aside]: this word is Latin.",
            sentence: "___ : ce mot est latin.",
            answer: "J'ouvre une parenthèse",
            altAnswers: ["Petite parenthèse", "Soit dit en passant", "Entre parenthèses"],
            explanation: "\"J'ouvre une parenthèse\" signals a digression.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French. (as a lecturer)",
            source: "I close the parenthesis and come back to my point.",
            answer: "Je ferme la parenthèse et je reviens à mon propos.",
            altAnswers: ["Je ferme la parenthèse et je reviens à mon sujet."],
            explanation: "The pair \"j'ouvre / je ferme la parenthèse\" frames a digression, and the note-taker can relax in between.",
          },
        ],
      },
      {
        heading: "Returns and reformulations",
        body: [
          "Return and reformulation: \"je reviendrai sur ce point\" (leave a space), \"comme je le disais\", \"autrement dit\", \"en d'autres termes\", \"c'est-à-dire\". Reformulation markers are gifts: the lecturer is repeating the idea in simpler words, so you can check your notes.",
        ],
        examples: [
          { es: "Je reviendrai sur ce point la semaine prochaine.", en: "I'll come back to this point next week." },
          { es: "Autrement dit, les jeunes ne lisent pas moins, ils lisent autrement.", en: "In other words, young people don't read less, they read differently." },
          { es: "en d'autres termes, la cause est économique", en: "in other words, the cause is economic" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "In other words, the problem is political.",
            answer: "Autrement dit, le problème est politique.",
            altAnswers: ["En d'autres termes, le problème est politique.", "C'est-à-dire que le problème est politique.", "Autrement dit, c'est un problème politique.", "En d'autres termes, c'est un problème politique."],
            explanation: "\"Autrement dit\" and \"en d'autres termes\" announce a reformulation.",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: We will come back to this question later.",
            words: ["Nous reviendrons", "sur cette question", "plus tard."],
            translation: "We will come back to this question later.",
            explanation: "The announcement of a return: in your notes, leave a space and draw an arrow back.",
          },
        ],
      },
      {
        heading: "Marking it on the page",
        body: [
          "Mark these in your notes: a star or \"!!\" for \"j'insiste\", brackets for parentheses, an arrow back for \"je reviendrai\". This is how you turn a flow of speech into a structure.",
        ],
        examples: [
          { es: "Une étoile pour « j'insiste », des crochets pour la parenthèse.", en: "A star for \"j'insiste\", brackets for the digression." },
          { es: "Une flèche en arrière pour « je reviendrai ».", en: "An arrow back for \"je reviendrai\"." },
          { es: "Ainsi le flot de parole devient une structure.", en: "That is how the flow of speech becomes a structure." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French. (as a lecturer)",
            source: "I'll come back to this point.",
            answer: "Je reviendrai sur ce point.",
            altAnswers: ["Je reviendrai sur ce point plus tard.", "Nous reviendrons sur ce point."],
            explanation: "\"Revenir sur\" a point: leave space in your notes.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Les notes que j'ai pris hier soir sont illisibles.",
            answer: "Les notes que j'ai prises hier soir sont illisibles.",
            explanation: "The participle agrees with the direct object placed before it, \"que\", which stands for \"les notes\": \"j'ai prises\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Write the full French sentence that the notes \"pb logt ds gdes villes\" stand for: There's a housing problem in big cities.",
        source: "There's a housing problem in big cities.",
        answer: "Il y a un problème de logement dans les grandes villes.",
        altAnswers: ["Le logement pose problème dans les grandes villes.", "Il existe un problème de logement dans les grandes villes."],
        explanation: "\"pb\" = problème, \"logt\" = logement, \"ds\" = dans, \"gdes\" = grandes.",
      },
      {
        type: "dictation",
        audio: "Retenez que la corrélation n'est pas une causalité.",
        explanation: "\"Retenez que\": the lecturer's marker of an essential point.",
      },
      {
        type: "speak",
        text: "Autrement dit, le problème n'est pas technique.",
        prompt: "Say it in French: In other words, the problem is not technical.",
        explanation: "\"Autrement dit\" announces a reformulation, which is the moment to check your notes.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Rewrite the note as a full sentence.",
        source: "↘ natalité ds les zones rurales",
        answer: "La natalité baisse dans les zones rurales.",
        altAnswers: ["La natalité diminue dans les zones rurales."],
        explanation: "Reading notes back means restoring the verb, the articles and the preposition that the symbols replaced.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Notez bien cette date : la loi date de 1905, ms elle a été modifié en 2004.",
        answer: "Notez bien cette date : la loi date de 1905, ms elle a été modifiée en 2004.",
        explanation: "In the passive the participle agrees with the subject \"elle\", standing for \"la loi\": \"modifiée\". Abbreviating \"mais\" to \"ms\" is normal in notes.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "Notes: speculation rising, [therefore] a change of policy",
        sentence: "spéculat° ↗ ___ ∆ politique",
        answer: "∴",
        altAnswers: ["donc"],
        explanation: "The symbol \"∴\" stands for \"donc\"; notes keep the symbol rather than the word.",
      },
    ],
  },
  {
    slug: "c2-lecture-notes-mission",
    level: "FR-C2",
    number: 6,
    title: "Real-World Mission: Prendre des Notes en Conférence",
    summary: "Turn an extract of a public lecture into useful notes (keywords, hierarchy, abbreviations, the speaker's markers), then rebuild a five-sentence summary from the notes alone.",
    duration: "20 min",
    sections: [
      {
        heading: "The lecture: the common belief",
        body: [
          "You attend a public lecture at a médiathèque in Rennes: « La lecture à l'ère numérique ». Here is an original extract of what the speaker says. « Bonsoir à tous.",
        ],
        examples: [
          { es: "On entend souvent dire que les jeunes ne lisent plus.", en: "We often hear it said that young people don't read any more." },
          { es: "Dans un premier temps, je voudrais montrer que ce constat est largement faux.", en: "First, I'd like to show that this view is largely wrong." },
          { es: "Bonsoir à tous, merci d'être venus si nombreux.", en: "Good evening everyone, thank you all for coming." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence does the speaker mark as the key idea?",
            options: ["Long-form reading is clearly declining.", "Screen reading is superficial.", "Young people read for two hours a day.", "Libraries have a role to play."],
            correctIndex: 0,
            explanation: "\"J'insiste sur ce point\" introduces the decline of long-form reading. The screen remark is in a parenthesis.",
          },
        ],
      },
      {
        heading: "The figures she gives",
        body: [
          "On entend souvent dire que les jeunes ne lisent plus. Dans un premier temps, je voudrais montrer que ce constat est largement faux. Selon les enquêtes du ministère de la Culture, les quinze-vingt-cinq ans lisent en moyenne plus de deux heures par jour, si l'on compte les écrans. Autrement dit, ils lisent, mais pas les mêmes textes, ni de la même manière. »",
        ],
        examples: [
          { es: "Ils lisent en moyenne plus de deux heures par jour, si l'on compte les écrans.", en: "They read for more than two hours a day on average, if you count screens." },
          { es: "Les enquêtes du ministère portent sur mille jeunes.", en: "The ministry's surveys cover a thousand young people." },
          { es: "Si l'on compte les écrans, le total change du tout au tout.", en: "If you count screens, the total changes completely." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "She shows that this received idea is wrong.",
            answer: "Elle montre que cette idée reçue est fausse.",
            altAnswers: ["Elle démontre que cette idée reçue est fausse."],
            explanation: "\"Une idée reçue\" is a received idea or common belief; \"montrer que\" takes the indicative.",
          },
        ],
      },
      {
        heading: "The digression, then the key idea",
        body: [
          "« J'ouvre une parenthèse : la lecture sur écran n'est pas forcément superficielle, contrairement à une idée reçue. Je ferme la parenthèse. En revanche, et j'insiste sur ce point, ce qui recule nettement, c'est la lecture longue, celle des romans et des essais.",
        ],
        examples: [
          { es: "Ce qui recule nettement, c'est la lecture longue.", en: "What is clearly declining is long-form reading." },
          { es: "Contrairement à une idée reçue, l'écran n'empêche pas la concentration.", en: "Contrary to a received idea, screens do not prevent concentration." },
          { es: "« Je ferme la parenthèse » signale la fin de la digression.", en: "\"Je ferme la parenthèse\" signals the end of the digression." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Screen reading isn't necessarily superficial.",
            answer: "La lecture sur écran n'est pas forcément superficielle.",
            altAnswers: ["La lecture sur écran n'est pas nécessairement superficielle.", "Lire sur écran n'est pas forcément superficiel."],
            explanation: "\"Pas forcément\": not necessarily.",
          },
        ],
      },
      {
        heading: "The causes, and part two",
        body: [
          "Les causes sont multiples : la fragmentation de l'attention, la concurrence des vidéos, mais aussi l'école, qui fait lire des extraits plutôt que des œuvres entières. Je reviendrai sur ce dernier point. Dans un second temps, j'aborderai les solutions : les clubs de lecture, le quart d'heure de lecture à l'école, et le rôle des bibliothèques. »",
        ],
        examples: [
          { es: "L'école fait lire des extraits plutôt que des œuvres entières.", en: "Schools have pupils read extracts rather than whole works." },
          { es: "Dans un second temps, j'aborderai les solutions.", en: "Second, I'll turn to the solutions." },
          { es: "Les causes sont multiples et s'additionnent.", en: "The causes are many and they add up." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Je reviendrai sur ce dernier point.",
            question: "What should you do in your notes?",
            options: ["Leave space: she will return to this point.", "Cross it out: it's not important.", "Stop taking notes.", "Write the conclusion."],
            correctIndex: 0,
            explanation: "\"Je reviendrai sur\" announces a return; leave space to complete it.",
          },
        ],
      },
      {
        heading: "Read the signposts before writing",
        body: [
          "Before taking notes, identify the structure from the signposts: \"dans un premier temps\" (part 1), \"j'ouvre / je ferme une parenthèse\" (digression), \"j'insiste sur ce point\" (key idea), \"je reviendrai sur ce dernier point\" (a return later), \"dans un second temps\" (part 2).",
        ],
        examples: [
          { es: "Repérez la structure avant d'écrire une ligne.", en: "Spot the structure before writing a single line." },
          { es: "« Dans un premier temps » annonce la première partie.", en: "\"Dans un premier temps\" announces the first part." },
          { es: "« Je reviendrai sur ce point » demande une place vide.", en: "\"Je reviendrai sur ce point\" calls for an empty space." },
        ],
        checkpoint: [
          {
            type: "matching",
            instructions: "Match each signpost with how you mark it in your notes.",
            pairs: [
              { left: "j'insiste sur ce point", right: "!! or a star" },
              { left: "j'ouvre une parenthèse", right: "brackets" },
              { left: "je reviendrai sur ce point", right: "a space and an arrow" },
              { left: "dans un second temps", right: "a new Roman numeral" },
              { left: "autrement dit", right: "cad" },
            ],
            explanation: "Signposts become visual structure in your notes.",
          },
        ],
      },
      {
        heading: "Model notes: title and part one",
        body: [
          "Here are model notes in standard French student style. « Lecture à l'ère numérique (conf. médiathèque Rennes). I. Idée reçue : jeunes ne lisent plus → FAUX. – Enquêtes min. Culture : 15-25 ans = + 2 h/j lecture (écrans compris). – Cad : lisent ≠ textes, ≠ manière.",
        ],
        examples: [
          { es: "Idée reçue : jeunes ne lisent plus → FAUX.", en: "Common belief: young people no longer read → WRONG." },
          { es: "15-25 ans = + 2 h/j lecture (écrans compris).", en: "15-25-year-olds: over 2 hrs/day reading (screens included)." },
          { es: "Titre et contexte en tête de page.", en: "Title and context at the top of the page." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Common belief: young people [no longer read].",
            sentence: "Idée reçue : les jeunes ___.",
            answer: "ne lisent plus",
            explanation: "\"Ne... plus\" surrounds the verb; in the notes it was compressed to \"jeunes ne lisent plus\".",
          },
        ],
      },
      {
        heading: "Model notes: key idea and causes",
        body: [
          "(Parenth. : lecture écran ≠ forcément superficielle.) !! Recul net = lecture longue (romans, essais). Causes : – fragmentat° attention – concurrence vidéos – école : extraits > œuvres entières (→ y revient). II. Solutions : clubs lecture, ¼ h lecture école, rôle biblio. »",
        ],
        examples: [
          { es: "!! Recul net = lecture longue (romans, essais).", en: "!! Clear decline in long-form reading (novels, essays)." },
          { es: "Causes : fragmentation de l'attention, concurrence des vidéos.", en: "Causes: fragmented attention, competition from videos." },
          { es: "École : extraits > œuvres entières.", en: "School: extracts rather than whole works." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Write the full French sentence that the note \"concurrence vidéos → ↘ lecture longue\" stands for: Competition from videos is reducing long-form reading.",
            source: "Competition from videos is reducing long-form reading.",
            answer: "La concurrence des vidéos fait reculer la lecture longue.",
            altAnswers: ["La concurrence des vidéos fait baisser la lecture longue."],
            explanation: "The arrow becomes a causative verb, \"faire reculer\", and the articles come back.",
          },
        ],
      },
      {
        heading: "The choices behind the page",
        body: [
          "Notice the choices: the title and context first; Roman numerals for the two parts; dashes for sub-points; \"!!\" for the key idea; brackets for the digression; \"→ y revient\" for the promised return. Words are cut (\"conf.\", \"min.\", \"biblio\", \"fragmentat°\") but stay recognisable, and \"cad\" marks the reformulation.",
        ],
        examples: [
          { es: "Solutions : clubs de lecture, quart d'heure de lecture à l'école.", en: "Solutions: book clubs, a quarter of an hour of reading at school." },
          { es: "Chiffres romains pour les parties, tirets pour les sous-points.", en: "Roman numerals for the parts, dashes for the sub-points." },
          { es: "Les mots coupés restent reconnaissables : « conf. », « biblio ».", en: "The cut words stay recognisable: \"conf.\", \"biblio\"." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which element should NOT go in your notes?",
            options: ["Bonsoir à tous.", "Recul net de la lecture longue", "Causes : fragmentation de l'attention", "Solutions : clubs de lecture"],
            correctIndex: 0,
            explanation: "Greetings and phrasing are not information; notes keep content and structure.",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: She attributes this decline to several causes.",
            words: ["Elle", "attribue", "ce", "recul", "à", "plusieurs", "causes."],
            translation: "She attributes this decline to several causes.",
            explanation: "\"Attribuer quelque chose à\".",
          },
        ],
      },
      {
        heading: "What is not noted",
        body: [
          "What is NOT noted: \"bonsoir à tous\", \"on entend souvent dire\", the full sentences. Notes keep the information and the structure, not the speaker's phrasing.",
        ],
        examples: [
          { es: "Les formules de politesse ne se notent pas.", en: "The polite formulas are not noted." },
          { es: "« On entend souvent dire » n'apporte aucune information.", en: "\"On entend souvent dire\" carries no information." },
          { es: "Les notes gardent l'information et la structure.", en: "Notes keep the information and the structure." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Idée reçue : les jeunes ne lisent plus, ms les enquêtes montre le contraire.",
            answer: "Idée reçue : les jeunes ne lisent plus, ms les enquêtes montrent le contraire.",
            explanation: "Even in abbreviated notes a verb agrees with its plural subject \"les enquêtes\": \"montrent\". Shortening \"mais\" to \"ms\" is not the mistake.",
          },
        ],
      },
      {
        heading: "From the notes to a summary",
        body: [
          "Now rebuild a summary from the notes alone, in full written French, with attribution and connectors: « Selon la conférencière, l'idée selon laquelle les jeunes ne liraient plus est largement fausse. D'après les enquêtes du ministère de la Culture, les quinze-vingt-cinq ans lisent plus de deux heures par jour, écrans compris.",
        ],
        examples: [
          { es: "Selon la conférencière, l'idée selon laquelle les jeunes ne liraient plus est fausse.", en: "According to the speaker, the idea that young people no longer read is wrong." },
          { es: "Les quinze-vingt-cinq ans lisent plus de deux heures par jour, écrans compris.", en: "Fifteen to twenty-five-year-olds read more than two hours a day, screens included." },
          { es: "Le résumé tient en cinq phrases.", en: "The summary fits into five sentences." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "She rejects the idea that young people have stopped reading.",
            answer: "Elle réfute l'idée que les jeunes auraient cessé de lire.",
            altAnswers: ["Elle réfute l'idée que les jeunes auraient arrêté de lire."],
            explanation: "The conditional \"auraient cessé\" keeps the claim at arm's length: it is the view she is attacking, not her own.",
          },
        ],
      },
      {
        heading: "The second half of the summary",
        body: [
          "En revanche, la lecture longue recule nettement. Elle attribue ce recul à la fragmentation de l'attention, à la concurrence des vidéos et à une école qui privilégie les extraits. Elle propose enfin plusieurs pistes, dont les clubs de lecture et le quart d'heure de lecture quotidien. »",
        ],
        examples: [
          { es: "En revanche, la lecture longue recule nettement.", en: "On the other hand, long-form reading is clearly declining." },
          { es: "Elle attribue le recul à trois causes.", en: "She puts the decline down to three causes." },
          { es: "Les connecteurs rendent la logique visible.", en: "The connectors make the logic visible." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[On the other hand], whole books are read less and less.",
            sentence: "___, on lit de moins en moins de livres entiers.",
            answer: "En revanche",
            altAnswers: ["En contrepartie"],
            explanation: "\"En revanche\" marks the reversal between what holds up and what is declining.",
          },
        ],
      },
      {
        heading: "Attribution and the conditional of distance",
        body: [
          "Key moves: attribution (\"selon la conférencière\", \"elle attribue\", \"elle propose\"); the conditional of distance in \"l'idée selon laquelle les jeunes ne liraient plus\" (a view she rejects); connectors restoring the logic (\"en revanche\", \"enfin\"); and verbs instead of symbols.",
        ],
        examples: [
          { es: "Elle attribue ce recul à la fragmentation de l'attention.", en: "She attributes this decline to fragmented attention." },
          { es: "Elle propose enfin plusieurs pistes, dont les clubs de lecture.", en: "Finally, she suggests several avenues, including book clubs." },
          { es: "Le quart d'heure de lecture quotidien est une piste intéressante.", en: "The daily quarter of an hour of reading is an interesting idea." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "She attributes this decline to competition from videos.",
            answer: "Elle attribue ce recul à la concurrence des vidéos.",
            altAnswers: ["Elle attribue ce déclin à la concurrence des vidéos.", "Elle attribue cette baisse à la concurrence des vidéos."],
            explanation: "\"Attribuer quelque chose à\": to attribute a cause, a key verb of summaries.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Finally, she suggests several solutions.",
            answer: "Enfin, elle propose plusieurs solutions.",
            altAnswers: ["Elle propose enfin plusieurs solutions.", "Enfin, elle propose plusieurs pistes.", "Elle propose enfin plusieurs pistes."],
            explanation: "\"Proposer\" reports the speaker's suggestions; \"des pistes\" is the idiomatic word for avenues.",
          },
        ],
      },
      {
        heading: "Practising with a podcast",
        body: [
          "This is exactly the skill tested in the DALF C2 oral, where you take notes on recordings and present a structured account. Practise it with any podcast: ten minutes of listening, notes, five sentences.",
        ],
        examples: [
          { es: "Dix minutes d'écoute, des notes, cinq phrases.", en: "Ten minutes of listening, some notes, five sentences." },
          { es: "L'épreuve orale du diplôme demande exactement cela.", en: "The oral paper of the diploma asks for exactly that." },
          { es: "N'importe quel podcast fait l'affaire pour s'entraîner.", en: "Any podcast will do for practice." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Rewrite the note as a sentence with attribution.",
            source: "clubs lecture + ¼ h école = pistes",
            answer: "Elle propose comme pistes les clubs de lecture et le quart d'heure à l'école.",
            altAnswers: ["La conférencière propose les clubs de lecture et le quart d'heure de lecture à l'école."],
            explanation: "A summary restores the verb and says who is speaking; the notes leave both out because the page already names the speaker.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "First of all, she sets out the common belief.",
        answer: "Dans un premier temps, elle expose l'idée reçue.",
        altAnswers: ["Dans un premier temps, elle présente l'idée reçue."],
        explanation: "\"Dans un premier temps\" is the signpost of part one, and \"exposer\" is the neutral verb for setting out a view.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Write the full French sentence that the notes \"min. Culture : enquêtes 2023\" stand for: The Ministry of Culture published surveys in 2023.",
        source: "The Ministry of Culture published surveys in 2023.",
        answer: "Le ministère de la Culture a publié des enquêtes en 2023.",
        altAnswers: ["Le ministère de la Culture a publié des enquêtes en deux mille vingt-trois."],
        explanation: "\"Min.\" is the cut form of \"ministère\"; reading it back restores the verb and the date's preposition.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        answer: "fait lire",
        altAnswers: ["fait étudier"],
        explanation: "\"Faire lire quelque chose à quelqu'un\" is the causative: the school is not reading, it makes others read.",
        en: "Schools [have pupils read] extracts.",
        sentence: "L'école ___ des extraits.",
      },
      {
        type: "dictation",
        audio: "Je ferme la parenthèse et j'en viens aux causes.",
        explanation: "Two signposts in one sentence: the end of the digression and the move to the next point.",
      },
      {
        type: "speak",
        text: "Selon la conférencière, la lecture longue recule nettement.",
        prompt: "Say it in French: According to the speaker, long-form reading is clearly declining.",
        explanation: "Attribution first: \"selon la conférencière\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The speaker suggests a daily quarter of an hour of reading.",
        answer: "La conférencière propose un quart d'heure de lecture quotidien.",
        altAnswers: ["La conférencière propose un quart d'heure de lecture par jour."],
        explanation: "\"Quotidien\" agrees with \"quart d'heure\", which is masculine singular.",
      },
    ],
  },
  {
    slug: "c2-comprehension-strategies-8",
    level: "FR-C2",
    number: 7,
    title: "Stratégies de Compréhension, Part 8 of 8",
    summary: "From notes to the DALF C2 tasks: the oral exam (listen, present an exposé, debate with the jury) and the written exam (a structured text from a dossier); synthesising several sources, reformulating without copying, and keeping your own view apart.",
    duration: "20 min",
    sections: [
      {
        heading: "The DALF C2: two exams, one dossier each",
        body: [
          "The DALF C2 has two exams, each built on a dossier. In \"Compréhension et production orales\", you listen to recordings (an interview, a lecture, a debate) and take notes, then present a structured exposé on the theme and defend your point of view in a discussion with the jury. In \"Compréhension et production écrites\", you read a dossier of texts (around 2,000 words) and write a structured text: an article, an editorial, a report or a speech, depending on the instructions.",
        ],
        examples: [
          {
            es: "Le candidat écoute deux documents et prend des notes.",
            en: "The candidate listens to two recordings and takes notes.",
          },
          {
            es: "Il présente ensuite un exposé structuré sur le thème du dossier.",
            en: "He then gives a structured talk on the theme of the dossier.",
          },
          { es: "L'épreuve se termine par un débat avec le jury.", en: "The exam ends with a discussion with the examiners." },
          {
            es: "À l'écrit, il faut rédiger un éditorial à partir d'un dossier.",
            en: "In the written exam, you must write an editorial based on a dossier.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In the oral exam of the DALF C2, what do you do after listening to the recordings and taking notes?",
            options: [
              "Give a structured talk on the theme, then discuss it with the jury.",
              "Write an editorial based on the recordings.",
              "Summarise each recording in turn, without giving any opinion.",
              "Answer a multiple-choice questionnaire.",
            ],
            correctIndex: 0,
            explanation: "The oral exam is \"Compréhension et production orales\": notes on the recordings, then \"un exposé structuré\" and a discussion (\"un débat\") with the jury. The editorial belongs to the written exam.",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: The candidate then defends his point of view.",
            words: ["Le candidat", "défend", "ensuite", "son point de vue."],
            translation: "The candidate then defends his point of view.",
            altOrders: [
              ["Ensuite,", "le candidat", "défend", "son point de vue."],
            ],
            explanation: "\"Ensuite\" sits after the verb in French (\"défend ensuite\"), not between subject and verb as in English.",
          },
        ],
      },
      {
        heading: "What really sinks candidates",
        body: [
          "Both exams test the skills of these units: inferring unknown words, catching register and attitude, rebuilding implicit links, taking notes, and above all synthesising: combining several sources into one coherent text, in your own words, organised by ideas rather than by document.",
          "The most common reason for failure is not weak French but a weak structure: candidates summarise document 1, then document 2, then add their opinion. The jury expects a plan organised around a problématique (a central question), with the sources woven together.",
        ],
        examples: [
          {
            es: "Le plan doit s'organiser autour d'une problématique.",
            en: "The plan must be organised around a central question.",
          },
          {
            es: "Il ne s'agit pas de résumer les documents l'un après l'autre.",
            en: "It's not about summarising the documents one after the other.",
          },
          {
            es: "Le jury attend une synthèse organisée par idées, et non document par document.",
            en: "The jury expects a synthesis organised by ideas, not document by document.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What is the most common structural mistake in a DALF C2 synthesis?",
            options: [
              "Summarising each document in turn instead of organising by ideas",
              "Using too many connectors",
              "Writing a title",
              "Quoting the sources",
            ],
            correctIndex: 0,
            explanation: "The jury expects a plan built around a central question, with sources combined.",
          },
          {
            type: "listen-choose",
            audio: "Le candidat a présenté le premier texte, puis le second, avant de donner son avis.",
            question: "What does the jury hear in this plan?",
            options: [
              "A document-by-document summary, the classic structural mistake.",
              "A plan built around a central question.",
              "A synthesis that weaves the two sources together.",
              "A neutral report with no opinion at all.",
            ],
            correctIndex: 0,
            explanation: "Text 1, then text 2, then an opinion: exactly the structure the jury penalises. A DALF plan is built around \"une problématique\", with the sources woven together.",
          },
        ],
      },
      {
        heading: "Reformulate: structure, words, angle",
        body: [
          "The jury penalises copied sentences. Reformulation uses three tools. Change the structure: \"les loyers ont doublé\" → \"le doublement des loyers\" (nominalisation) or \"les ménages paient deux fois plus cher\". Change the vocabulary: \"recul\" → \"déclin\", \"baisse\", \"érosion\". Change the angle: \"les familles quittent le centre\" → \"le centre perd ses familles\".",
          "Introduce reformulation explicitly when you explain an idea: \"autrement dit\", \"en d'autres termes\", \"c'est-à-dire\", \"cela revient à dire que\", \"en somme\". These markers help the jury follow and show that you are processing, not repeating.",
        ],
        examples: [
          {
            es: "Le doublement des loyers chasse les familles du centre.",
            en: "The doubling of rents is driving families out of the centre.",
          },
          {
            es: "Autrement dit, le centre-ville perd ses habitants les plus jeunes.",
            en: "In other words, the town centre is losing its youngest residents.",
          },
          {
            es: "Cela revient à dire que le marché seul ne peut pas réguler le logement.",
            en: "That amounts to saying that the market alone cannot regulate housing.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the verb into a noun (nominalisation), so the sentence starts with \"L'augmentation\".",
            source: "Les impôts ont augmenté, et cela inquiète les ménages.",
            answer: "L'augmentation des impôts inquiète les ménages.",
            altAnswers: ["L'augmentation des impôts inquiète les familles."],
            explanation: "Nominalisation changes the structure without copying: \"les impôts ont augmenté\" becomes \"l'augmentation des impôts\", which becomes the subject of \"inquiète\". This is the first of the three reformulation tools, like \"le doublement des loyers\".",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[That amounts to saying] the reform has failed.",
            sentence: "___ que la réforme a échoué.",
            answer: "Cela revient à dire",
            altAnswers: ["Ça revient à dire"],
            explanation: "\"Cela revient à dire que\" reformulates an idea in its consequences.",
          },
        ],
      },
      {
        heading: "Attribute every idea precisely",
        body: [
          "Attribution must stay precise: \"l'auteur de la tribune estime que\", \"selon l'économiste interrogé\", \"le rapport souligne\", \"l'éditorialiste dénonce\". Vary the verbs: \"affirmer\", \"soutenir\" (to argue), \"nuancer\", \"rappeler\", \"déplorer\", \"mettre en garde contre\".",
        ],
        examples: [
          {
            es: "L'auteur de la tribune soutient que l'État doit intervenir.",
            en: "The author of the opinion piece argues that the State must intervene.",
          },
          { es: "L'économiste interrogé nuance ce constat.", en: "The economist interviewed qualifies this observation." },
          { es: "Le rapport met en garde contre une ville à deux vitesses.", en: "The report warns against a two-speed city." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "The economist says the plan is broadly right but adds limits and exceptions. Which reporting verb fits?",
            options: [
              "L'économiste nuance ce plan.",
              "L'économiste déplore ce plan.",
              "L'économiste met en garde contre ce plan.",
              "L'économiste dénonce ce plan.",
            ],
            correctIndex: 0,
            explanation: "\"Nuancer\" means to qualify: agree, but add limits. \"Déplorer\" (to regret) and \"dénoncer\" (to condemn) are hostile, and \"mettre en garde contre\" warns of a danger.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The sociologist [deplores] the lack of social housing.",
            sentence: "La sociologue ___ le manque de logements sociaux.",
            answer: "déplore",
            explanation: "\"Déplorer\" (to regret, to lament) attributes a negative judgement to the source. Varying reporting verbs (\"soutenir\", \"nuancer\", \"déplorer\", \"rappeler\") is what keeps a synthesis precise.",
          },
        ],
      },
      {
        heading: "Weave the sources together",
        body: [
          "A synthesis compares and combines: \"si le document 1 insiste sur..., le document 2 met plutôt l'accent sur...\", \"les deux auteurs s'accordent sur...\", \"à l'inverse de l'économiste, la sociologue...\", \"cette analyse rejoint celle de...\". These phrases organise the sources around ideas.",
        ],
        examples: [
          {
            es: "Si le premier document insiste sur les causes, le second met l'accent sur les solutions.",
            en: "While the first document stresses the causes, the second focuses on solutions.",
          },
          {
            es: "Les deux auteurs s'accordent sur un point : le statu quo n'est plus tenable.",
            en: "Both authors agree on one point: the status quo is no longer tenable.",
          },
          {
            es: "À l'inverse de l'économiste, la sociologue refuse de parler de crise.",
            en: "Unlike the economist, the sociologist refuses to speak of a crisis.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Two sources say the same thing about the cost of the reform. Which phrase organises them around that idea?",
            options: [
              "Les deux auteurs s'accordent sur le coût de la réforme.",
              "Le document 1 parle du coût. Le document 2 parle aussi du coût.",
              "À l'inverse du premier auteur, le second parle du coût.",
              "Pour ma part, le coût de la réforme est élevé.",
            ],
            correctIndex: 0,
            explanation: "\"S'accorder sur\" groups two sources under one idea. Listing them one after the other is the document-by-document trap, \"à l'inverse de\" signals a contrast, and \"pour ma part\" introduces your own view, not the sources'.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Unlike] the minister, the mayor rejects the plan.",
            sentence: "___ du ministre, le maire rejette le plan.",
            answer: "À l'inverse",
            altAnswers: ["Contrairement"],
            explanation: "\"À l'inverse de\" contrasts two sources inside one sentence; \"de + le\" contracts to \"du\".",
          },
        ],
      },
      {
        heading: "Keep your own view apart",
        body: [
          "In the written DALF, depending on the task, you may need to give your opinion (an editorial, a tribune) or stay neutral (a report, a synthesis). When opinion is allowed, separate it clearly: \"pour ma part\", \"il me semble pour ma part que\", \"à mon sens\", and place it after the presentation of the sources, or in a final part.",
        ],
        examples: [
          {
            es: "Pour ma part, il me semble que les deux approches sont complémentaires.",
            en: "For my part, it seems to me that the two approaches are complementary.",
          },
          { es: "À mon sens, cette mesure arrive trop tard.", en: "In my view, this measure comes too late." },
          {
            es: "Il me semble pour ma part que le débat est mal posé.",
            en: "For my part, it seems to me the debate is badly framed.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Your task is a neutral report for a ministry. Where does a sentence starting \"Pour ma part\" belong?",
            options: [
              "Nowhere: a report stays neutral.",
              "In the first sentence, to announce your thesis.",
              "Between the two sources, to link them.",
              "In the title.",
            ],
            correctIndex: 0,
            explanation: "A report or a synthesis stays neutral, so \"pour ma part\" has no place in it. In an editorial or a tribune it is allowed, but after the sources have been presented.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[In my view], this tax is unfair.",
            sentence: "___, cette taxe est injuste.",
            answer: "À mon sens",
            altAnswers: ["Selon moi", "À mes yeux", "Pour ma part", "À mon avis"],
            explanation: "\"À mon sens\" (like \"à mes yeux\", \"selon moi\") flags the sentence as your own opinion, kept apart from the sources.",
          },
        ],
      },
      {
        heading: "Under fire from the jury",
        body: [
          "In the oral, the jury will push you: \"vous ne pensez pas que...?\", \"comment répondriez-vous à ceux qui disent que...?\" Take your time, reformulate the question (\"si je comprends bien, vous me demandez si...\"), concede what is fair (\"c'est un argument recevable\") and maintain your position with nuance.",
        ],
        examples: [
          {
            es: "Si je comprends bien, vous me demandez si l'État doit intervenir.",
            en: "If I understand correctly, you're asking me whether the State should intervene.",
          },
          {
            es: "C'est un argument recevable, mais il ne règle pas tout.",
            en: "That's a fair argument, but it doesn't solve everything.",
          },
          { es: "Vous ne pensez pas que cette solution coûte trop cher ?", en: "Don't you think this solution costs too much?" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "The jury asks: « Comment répondriez-vous à ceux qui disent que c'est utopique ? » Which opening is best?",
            options: [
              "Si je comprends bien, vous me demandez si cette solution est réaliste. C'est un argument recevable, mais...",
              "Non, c'est faux.",
              "Je ne sais pas.",
              "Tu parles !",
            ],
            correctIndex: 0,
            explanation: "Reformulate the question, concede what's fair, then defend your position with nuance.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[If I understand correctly], you are asking me whether the tax is fair.",
            sentence: "___, vous me demandez si la taxe est juste.",
            answer: "Si je comprends bien",
            explanation: "Reformulating the jury's question (\"si je comprends bien, vous me demandez si...\") buys time and shows you have understood before you answer.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Unlike the first author, the second one is optimistic.",
        answer: "À l'inverse du premier auteur, le second est optimiste.",
        altAnswers: [
          "Contrairement au premier auteur, le second est optimiste.",
          "À la différence du premier auteur, le second est optimiste.",
          "Contrairement au premier auteur, le deuxième est optimiste.",
          "À l'inverse du premier auteur, le deuxième est optimiste.",
        ],
        explanation: "\"À l'inverse de\" or \"contrairement à\" contrasts two sources.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "In other words, the market alone is not enough.",
        answer: "Autrement dit, le marché seul ne suffit pas.",
        altAnswers: [
          "En d'autres termes, le marché seul ne suffit pas.",
          "Autrement dit, le marché ne suffit pas à lui seul.",
          "En d'autres termes, le marché ne suffit pas à lui seul.",
        ],
        explanation: "\"Autrement dit\" introduces a reformulation.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "[For my part], I think both views are complementary.",
        sentence: "___, je pense que les deux points de vue sont complémentaires.",
        answer: "Pour ma part",
        altAnswers: ["Quant à moi", "En ce qui me concerne", "Personnellement"],
        explanation: "\"Pour ma part\" separates your view from the sources'.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Le rapport met en garde la hausse des loyers.",
        answer: "Le rapport met en garde contre la hausse des loyers.",
        explanation: "The verb is \"mettre en garde contre\": you warn against something, so the preposition \"contre\" cannot be dropped.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Turn the two sentences into one, starting with \"Si le rapport...\".",
        source: "Le rapport insiste sur les risques. L'étude met plutôt l'accent sur les opportunités.",
        answer: "Si le rapport insiste sur les risques, l'étude met plutôt l'accent sur les opportunités.",
        altAnswers: [
          "Si le rapport insiste sur les risques, l'étude, elle, met plutôt l'accent sur les opportunités.",
          "Si le rapport insiste sur les risques, l'étude met l'accent sur les opportunités.",
        ],
        explanation: "\"Si\" here is not a condition but a contrast (whereas): it puts the two sources side by side inside one idea, which is what a synthesis does.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "In the oral exam, you must defend your point of view in front of the jury.",
        answer: "À l'oral, il faut défendre son point de vue devant le jury.",
        altAnswers: [
          "À l'oral, il faut défendre son point de vue face au jury.",
          "À l'oral, on doit défendre son point de vue devant le jury.",
          "À l'oral, vous devez défendre votre point de vue devant le jury.",
        ],
        explanation: "\"À l'oral\" is the oral exam, as \"à l'écrit\" is the written one. \"Il faut\" + infinitive with the impersonal \"son point de vue\".",
      },
      {
        type: "matching",
        instructions: "Match each phrase with its role in a synthesis.",
        pairs: [
          { left: "les deux auteurs s'accordent sur", right: "showing agreement between sources" },
          { left: "à l'inverse de", right: "contrasting sources" },
          { left: "cela revient à dire que", right: "reformulating" },
          { left: "pour ma part", right: "introducing your own view" },
          { left: "l'auteur soutient que", right: "attributing a claim" },
        ],
        explanation: "Each phrase organises the synthesis around ideas, not documents.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: In other words, the reform has missed its target.",
        words: ["En d'autres termes,", "la réforme", "a manqué", "sa cible."],
        translation: "In other words, the reform has missed its target.",
        explanation: "\"En d'autres termes\" announces a reformulation, like \"autrement dit\"; the jury sees you are processing the idea, not repeating it.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Les deux sociologues s'accordent l'essentiel : la ville se vide de ses familles.",
        answer: "Les deux sociologues s'accordent sur l'essentiel : la ville se vide de ses familles.",
        altAnswers: ["Les deux sociologues s'accordent sur l'essentiel, la ville se vide de ses familles."],
        explanation: "The verb is \"s'accorder sur\" (to agree on): without \"sur\" the sentence has no grammatical link to its object.",
      },
      {
        type: "dictation",
        audio: "L'éditorialiste dénonce une réforme précipitée.",
        explanation: "\"Dénoncer\" is a strong attribution verb: the columnist condemns. Note \"précipitée\" agreeing with \"réforme\".",
      },
      {
        type: "speak",
        text: "C'est un argument recevable, mais il me semble que la question est mal posée.",
        prompt: "Say it in French: That's a fair argument, but it seems to me the question is badly framed.",
        explanation: "Concede first (\"c'est un argument recevable\"), then hold your position with nuance (\"il me semble que\" + indicative).",
      },
    ],
  },
  {
    slug: "c2-strategies-spiral-review",
    level: "FR-C2",
    number: 8,
    title: "Spiral Review: Toutes les Stratégies dans un Texte",
    summary: "A short press text with difficult words, implicit links, a register shift and a hearsay conditional: apply every strategy at once, then write a three-line synthesis.",
    duration: "20 min",
    sections: [
      {
        heading: "The text",
        body: [
          "Read this original press article. « Trottinettes : la fronde des riverains. Elles encombrent les trottoirs, frôlent les poussettes et finissent, parfois, dans la Saône. Depuis le printemps, les habitants de la Croix-Rousse, à Lyon, ne décolèrent pas. Une pétition a recueilli quatre mille signatures en trois semaines. La mairie, elle, temporise : un nouveau règlement serait à l'étude, mais aucune date n'a été avancée. \"On nous balade\", résume un retraité, membre du collectif. Les opérateurs assurent, quant à eux, que les incivilités restent marginales. Or, selon les chiffres de la police municipale, les verbalisations ont triplé en un an. »",
        ],
        examples: [
          {
            es: "La fronde des riverains contre les trottinettes s'étend.",
            en: "The residents' revolt against e-scooters is spreading.",
          },
          { es: "Les habitants ne décolèrent pas depuis le printemps.", en: "Residents have been seething since the spring." },
          { es: "La mairie temporise.", en: "The town hall is playing for time." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What is the article mainly about?",
            options: [
              "Residents in a Lyon neighbourhood are angry about e-scooters, and the town hall is slow to act.",
              "The town hall has just banned e-scooters in Lyon.",
              "E-scooter operators are campaigning against the police.",
              "A retired man has been fined for riding an e-scooter.",
            ],
            correctIndex: 0,
            explanation: "The title (\"la fronde des riverains\") and the first lines give the subject: residents are angry. The ban is only \"à l'étude\", and the retiree is quoted, not fined.",
          },
        ],
      },
      {
        heading: "Global, selective, close",
        body: [
          "First, global reading: the title (\"la fronde des riverains\", the residents' revolt) and the first lines give the subject: residents in Lyon are angry about e-scooters. Then, selective reading: the figures (4,000 signatures in three weeks, fines tripled in one year). Finally, close reading: the attitudes and the logic, which the next two sections unpack.",
        ],
        examples: [
          {
            es: "Une pétition a recueilli quatre mille signatures en trois semaines.",
            en: "A petition gathered four thousand signatures in three weeks.",
          },
          { es: "Les verbalisations ont triplé en un an.", en: "Fines have tripled in one year." },
          {
            es: "Le titre annonce le sujet : la colère des habitants.",
            en: "The headline announces the subject: the residents' anger.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Selective reading: which detail of the article shows that the problem is getting worse?",
            options: [
              "Les verbalisations ont triplé en un an.",
              "Les habitants de la Croix-Rousse ne décolèrent pas.",
              "La mairie, elle, temporise.",
              "Les opérateurs assurent que les incivilités restent marginales.",
            ],
            correctIndex: 0,
            explanation: "Selective reading hunts for figures: fines tripling in a year is the only measured trend. The other lines report feelings, a stance or a claim.",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: The figures confirm the residents' anger.",
            words: ["Les chiffres", "confirment", "la colère", "des riverains."],
            translation: "The figures confirm the residents' anger.",
            explanation: "Selective reading picks out the figures; here they back up the residents' feelings. \"Des riverains\": de + les.",
          },
        ],
      },
      {
        heading: "Infer the hard words",
        body: [
          "Difficult words to infer: \"la fronde\" (a sling; historically the Fronde revolt of the 17th century; here a revolt), \"ne décolèrent pas\" (dé- + colère: they don't stop being angry), \"temporiser\" (to play for time), \"les incivilités\" (in- + civil + -ité: antisocial behaviour), \"les verbalisations\" (fines, from \"dresser un procès-verbal\").",
        ],
        examples: [
          {
            es: "Les opérateurs assurent que les incivilités restent marginales.",
            en: "The operators claim that antisocial behaviour remains marginal.",
          },
          { es: "Les policiers ont dressé un procès-verbal.", en: "The police officers wrote up a fine (an official report)." },
          {
            es: "Les élus temporisent en attendant les élections.",
            en: "The councillors are playing for time until the elections.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "« Les habitants ne décolèrent pas. » What does « décolérer » mean here, judging by its parts?",
            options: ["To stop being angry (so: they remain angry)", "To become angry", "To decorate", "To shout"],
            correctIndex: 0,
            explanation: "\"Dé-\" + \"colère\": to stop being angry; in the negative, they stay furious.",
          },
          {
            type: "multiple-choice",
            question: "Use the same method on a word the article does not contain: \"l'insalubrité\" of a building (in- + salubre + -ité). What does it mean?",
            options: ["Its unhealthy, unsanitary state", "Its high rent", "Its excellent condition", "Its large size"],
            correctIndex: 0,
            explanation: "\"In-\" negates, \"salubre\" means healthy (think salubrious), and \"-ité\" makes an abstract noun: the state of being unhealthy. Same route as \"in-civil-ité\".",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The government [has been playing for time] for months.",
            sentence: "Le gouvernement ___ depuis des mois.",
            answer: "temporise",
            explanation: "\"Temporiser\" (to play for time, from \"tempus\", time). French uses the present with \"depuis\" for an action still going on.",
          },
        ],
      },
      {
        heading: "A familiar quote, a neutral journalist",
        body: [
          "The register shift: the journalist writes standard press French, then quotes a retiree: \"On nous balade\" (familiar: they're stringing us along). The quotation in familiar register brings the residents' voice and anger into the text, and makes the journalist's own neutrality more credible. It is a classic press device.",
        ],
        examples: [
          { es: "« On nous balade », résume un retraité.", en: "'They're stringing us along,' sums up a retiree." },
          {
            es: "La citation familière donne la parole aux habitants.",
            en: "The colloquial quotation gives the residents a voice.",
          },
          { es: "« C'est n'importe quoi », lâche une commerçante.", en: "'It's nonsense,' says a shopkeeper." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In a neutral article on a strike, the journalist quotes a commuter: « On en a ras le bol ! » Why?",
            options: [
              "To bring the commuters' anger into the text while the journalist stays neutral.",
              "Because the journalist shares the commuter's anger.",
              "To show that the commuter speaks poor French.",
              "Because press articles are written in familiar French.",
            ],
            correctIndex: 0,
            explanation: "The familiar quotation (\"on en a ras le bol\", we're fed up) carries the voice and the emotion; because the anger is someone else's, the journalist's own neutrality looks more credible.",
          },
        ],
      },
      {
        heading: "Hearsay and loaded verbs",
        body: [
          "The hearsay conditional: \"un nouveau règlement serait à l'étude\" (a new regulation is reportedly being considered). The journalist does not confirm the information; combined with \"aucune date n'a été avancée\", it suggests scepticism about the town hall's intentions.",
          "Attribution verbs reveal attitude: \"les opérateurs assurent\" (claim) is weaker than \"démontrent\"; the operators' view is presented as a claim, and then contradicted by figures.",
        ],
        examples: [
          { es: "Un nouveau règlement serait à l'étude.", en: "A new regulation is reportedly under consideration." },
          { es: "Aucune date n'a été avancée.", en: "No date has been put forward." },
          { es: "Les opérateurs assurent que tout va bien.", en: "The operators insist that all is well." },
          {
            es: "Le conditionnel signale une information non confirmée.",
            en: "The conditional signals unconfirmed information.",
          },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Le ministre assure que la réforme ne coûtera rien.",
            question: "How does the journalist present the minister's view?",
            options: [
              "As a claim, not a proven fact",
              "As an established fact",
              "As the journalist's own opinion",
              "As a rumour the journalist denies",
            ],
            correctIndex: 0,
            explanation: "\"Assurer\" (to claim, to insist) reports a statement without endorsing it; \"démontrer\" would present it as proven.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it hearsay: the journalist does not confirm it.",
            source: "La mairie prépare un nouveau règlement.",
            answer: "La mairie préparerait un nouveau règlement.",
            explanation: "The hearsay conditional (\"préparerait\") reports information without confirming it, like \"un nouveau règlement serait à l'étude\" in the article.",
          },
        ],
      },
      {
        heading: "Implicit links: elle, the colon, or",
        body: [
          "The implicit links: \"Elles encombrent les trottoirs, frôlent les poussettes...\" → (cause) \"les habitants ne décolèrent pas\". \"La mairie, elle, temporise\": the detached pronoun \"elle\" contrasts the town hall with the angry residents (whereas). The colon after \"temporise\" explains how. And \"Or, selon les chiffres de la police municipale, les verbalisations ont triplé\": \"or\" introduces the decisive fact that refutes the operators' claim.",
        ],
        examples: [
          { es: "La mairie, elle, temporise.", en: "The town hall, for its part, is playing for time." },
          { es: "Or, les verbalisations ont triplé en un an.", en: "But fines have in fact tripled in a year." },
          { es: "Le préfet, lui, se tait.", en: "The prefect, for his part, says nothing." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In the article, what does « Or » introduce?",
            options: [
              "A decisive fact that contradicts the operators' claim",
              "A conclusion agreeing with the operators",
              "A new character",
              "A question",
            ],
            correctIndex: 0,
            explanation: "\"Or\" brings in the police figures that refute the operators.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The operators claim that all is well. [But in fact] the accidents have doubled.",
            sentence: "Les opérateurs assurent que tout va bien. ___, les accidents ont doublé.",
            answer: "Or",
            explanation: "\"Or\" introduces the decisive fact that undermines what came before. It is not the English or (that is \"ou\").",
          },
        ],
      },
      {
        heading: "The three-line synthesis",
        body: [
          "Now a three-line synthesis, in neutral written French, with attribution and explicit links: « À Lyon, les riverains de la Croix-Rousse se mobilisent contre les nuisances des trottinettes en libre-service. Alors que la mairie n'annonce aucun calendrier, les opérateurs minimisent le problème. Pourtant, les chiffres de la police municipale montrent une forte hausse des infractions. »",
          "Notice what was done: the hard words became plain ones (\"fronde\" → \"se mobilisent\", \"verbalisations\" → \"infractions\"), the quotation disappeared (a synthesis reports, it doesn't quote colour), the implicit links became \"alors que\" and \"pourtant\", and every claim is attributed.",
        ],
        examples: [
          {
            es: "Les riverains se mobilisent contre les nuisances des trottinettes.",
            en: "Residents are mobilising against the nuisance caused by e-scooters.",
          },
          {
            es: "Alors que la mairie n'annonce aucun calendrier, les opérateurs minimisent le problème.",
            en: "While the town hall announces no timetable, the operators play down the problem.",
          },
          {
            es: "Pourtant, les chiffres montrent une forte hausse des infractions.",
            en: "Yet the figures show a sharp rise in offences.",
          },
          {
            es: "Une synthèse rapporte, elle ne cite pas les détails pittoresques.",
            en: "A synthesis reports; it doesn't quote colourful details.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the implicit link into an explicit one with \"alors que\".",
            source: "Les habitants protestent. La mairie, elle, temporise.",
            answer: "Alors que les habitants protestent, la mairie temporise.",
            altAnswers: [
              "La mairie temporise alors que les habitants protestent.",
              "Alors que les habitants protestent, la mairie, elle, temporise.",
            ],
            explanation: "A synthesis makes implicit links explicit: the contrast carried by the detached \"elle\" becomes \"alors que\" (whereas).",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The residents have been seething for months.",
        answer: "Les riverains ne décolèrent pas depuis des mois.",
        altAnswers: [
          "Les habitants ne décolèrent pas depuis des mois.",
          "Ça fait des mois que les riverains ne décolèrent pas.",
          "Les riverains sont furieux depuis des mois.",
        ],
        explanation: "\"Ne pas décolérer\": to remain angry; \"depuis\" + present.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French. (news report)",
        source: "The mayor is reportedly considering a ban.",
        answer: "Le maire envisagerait une interdiction.",
        altAnswers: [
          "La maire envisagerait une interdiction.",
          "Le maire étudierait une interdiction.",
          "Le maire songerait à une interdiction.",
        ],
        explanation: "The hearsay conditional keeps the journalist's distance.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Or que la mairie temporise, les riverains s'impatientent.",
        answer: "Alors que la mairie temporise, les riverains s'impatientent.",
        altAnswers: ["Tandis que la mairie temporise, les riverains s'impatientent."],
        explanation: "\"Or\" stands alone at the head of a sentence to introduce a decisive fact; it cannot open a subordinate clause. Contrast inside one sentence needs \"alors que\" (whereas).",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Several residents claim that the street has become dangerous.",
        answer: "Plusieurs riverains assurent que la rue est devenue dangereuse.",
        altAnswers: [
          "Plusieurs riverains affirment que la rue est devenue dangereuse.",
          "Plusieurs habitants assurent que la rue est devenue dangereuse.",
          "Plusieurs habitants affirment que la rue est devenue dangereuse.",
        ],
        explanation: "\"Assurer que\" reports a claim without endorsing it; \"devenir\" takes \"être\" in the passé composé, so \"est devenue\" agrees with \"la rue\".",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "The mayor's proposal [has gathered] little support.",
        sentence: "La proposition du maire ___ peu de soutien.",
        answer: "a recueilli",
        altAnswers: ["a rassemblé", "a obtenu"],
        explanation: "\"Recueillir\" (to gather, to collect) is the press verb for signatures, votes or support.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Les plaintes des riverains ont doublées depuis l'été.",
        answer: "Les plaintes des riverains ont doublé depuis l'été.",
        explanation: "With \"avoir\", the past participle does not agree with the subject: \"ont doublé\", not \"doublées\".",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "No figure [has been put forward] by the operators.",
        sentence: "Aucun chiffre ___ par les opérateurs.",
        answer: "n'a été avancé",
        explanation: "\"Avancer un chiffre\" (to put forward a figure) in the passive: \"n'a été avancé\", agreeing with the masculine \"aucun chiffre\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Change the attribution verb so the operators' view sounds proven, not merely claimed.",
        source: "Les opérateurs assurent que les accidents sont rares.",
        answer: "Les opérateurs démontrent que les accidents sont rares.",
        altAnswers: ["Les opérateurs prouvent que les accidents sont rares."],
        explanation: "\"Assurer\" reports a claim; \"démontrer\" (or \"prouver\") presents it as established. Attribution verbs carry the journalist's attitude.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Shopkeepers are mobilising against the closure of the street.",
        answer: "Les commerçants se mobilisent contre la fermeture de la rue.",
        explanation: "\"Se mobiliser contre\" is the neutral synthesis verb for a protest movement (a plain replacement for \"la fronde\").",
      },
      {
        type: "matching",
        instructions: "Match each word from the article with its plain equivalent.",
        pairs: [
          { left: "la fronde", right: "la révolte" },
          { left: "temporiser", right: "gagner du temps" },
          { left: "les incivilités", right: "les comportements irrespectueux" },
          { left: "les verbalisations", right: "les amendes" },
          { left: "on nous balade", right: "on se moque de nous" },
        ],
        explanation: "A synthesis replaces rare or familiar words with neutral ones.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: The operators, for their part, play down the accidents.",
        words: ["Les opérateurs,", "eux,", "minimisent", "les accidents."],
        translation: "The operators, for their part, play down the accidents.",
        explanation: "The detached pronoun \"eux\" sets the operators against someone else, as \"la mairie, elle,\" did in the article.",
      },
      {
        type: "dictation",
        audio: "Une enquête aurait été ouverte par la mairie.",
        explanation: "\"Aurait été ouverte\": the past hearsay conditional (conditionnel passé). The journalist reports an investigation without confirming it.",
      },
      {
        type: "speak",
        text: "Pourtant, selon la police, les accidents ont doublé.",
        prompt: "Say it in French: Yet, according to the police, accidents have doubled.",
        explanation: "\"Pourtant\" makes the contrast explicit, and \"selon la police\" attributes the figure: two habits of a good synthesis.",
      },
    ],
  },
  {
    slug: "c2-vocab-verb-noun-collocations",
    level: "FR-C2",
    number: 9,
    title: "Mastery Vocabulary: Verb and Noun Collocations",
    summary: "The verb a native chooses without thinking: nourrir des espoirs, émettre des doutes, remporter un succès, essuyer un refus, semer la discorde, clore une polémique, combler une lacune, prendre des mesures... and the calques to avoid.",
    duration: "18 min",
    sections: [
      {
        heading: "The right verb with a common noun",
        body: [
          "A collocation is a habitual pairing of words. A Mastery speaker is recognised less by rare words than by the right verb with a common noun. \"Nourrir des espoirs\" (to cherish hopes, literally feed), \"caresser un projet\" (to toy with a plan), \"émettre des doutes\" or \"des réserves\" (to express doubts, reservations), \"formuler une critique\", \"soulever une question\" (to raise).",
          "Learning the noun with its verb as one chunk is the only efficient method. When you meet a noun in the press, note the verb in front of it.",
        ],
        examples: [
          { es: "Elle nourrit de grands espoirs pour ce projet.", en: "She has high hopes for this project." },
          {
            es: "Il caresse depuis longtemps le projet d'ouvrir une librairie.",
            en: "He has long been toying with the idea of opening a bookshop.",
          },
          {
            es: "Plusieurs experts ont émis des doutes sur ces chiffres.",
            en: "Several experts have expressed doubts about these figures.",
          },
          { es: "Le rapport soulève une question essentielle.", en: "The report raises an essential question." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Elle nourrit de grands espoirs.",
            question: "What does it mean?",
            options: [
              "She has high hopes.",
              "She feeds great hopes to others.",
              "She has lost all hope.",
              "She is hungry for success.",
            ],
            correctIndex: 0,
            explanation: "\"Nourrir des espoirs\": to cherish hopes.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Several economists [have expressed] doubts.",
            sentence: "Plusieurs économistes ___ des doutes.",
            answer: "ont émis",
            altAnswers: ["ont exprimé", "ont formulé"],
            explanation: "\"Émettre des doutes / des réserves\" is the formal collocation.",
          },
        ],
      },
      {
        heading: "Decisions: prendre, trancher, arrêter",
        body: [
          "Decisions: \"prendre une décision\" (never \"*faire une décision\", a calque), \"prendre des mesures\" (to take measures: usually plural, though \"prendre une mesure\" is correct for one specific measure: \"le gouvernement a pris une mesure impopulaire\"), \"trancher une question\" (to settle), \"arrêter une date\" (to fix).",
        ],
        examples: [
          {
            es: "Le gouvernement a pris des mesures pour limiter la hausse des prix.",
            en: "The government has taken measures to limit price rises.",
          },
          { es: "Il faut prendre une décision avant vendredi.", en: "We need to make a decision before Friday." },
          { es: "La direction a arrêté la date du déménagement.", en: "The management has fixed the date of the move." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "We have to make a decision.",
            answer: "Nous devons prendre une décision.",
            altAnswers: [
              "Il faut prendre une décision.",
              "On doit prendre une décision.",
              "Il faut qu'on prenne une décision.",
              "Il faut que nous prenions une décision.",
            ],
            explanation: "\"Prendre une décision\": \"*faire une décision\" is a calque of English.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Le jury a fait sa décision hier soir.",
            answer: "Le jury a pris sa décision hier soir.",
            explanation: "French takes a decision: \"prendre une décision\". \"Faire une décision\" is a calque of the English make a decision.",
          },
        ],
      },
      {
        heading: "Success: remporter, connaître, atteindre",
        body: [
          "Success: \"remporter un succès\", \"une victoire\", \"un prix\" (to win), \"connaître un succès\" (to enjoy), \"atteindre un objectif\", \"tenir ses promesses\".",
        ],
        examples: [
          {
            es: "La pièce a remporté un vif succès au festival d'Avignon.",
            en: "The play was a great success at the Avignon festival.",
          },
          { es: "L'armée a subi de lourdes pertes.", en: "The army suffered heavy losses." },
          { es: "Le projet n'a pas tenu ses promesses.", en: "The project hasn't lived up to its promise." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "The team has reached its target for the year. Which collocation is right?",
            options: [
              "L'équipe a atteint son objectif.",
              "L'équipe a remporté son objectif.",
              "L'équipe a gagné son objectif.",
              "L'équipe a essuyé son objectif.",
            ],
            correctIndex: 0,
            explanation: "An objective is reached: \"atteindre un objectif\". \"Remporter\" goes with a victory, a prize or a success, and \"essuyer\" with a failure.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The film was a great success.",
            answer: "Le film a remporté un vif succès.",
            altAnswers: [
              "Le film a connu un vif succès.",
              "Le film a remporté un grand succès.",
              "Le film a connu un grand succès.",
              "Le film a été un grand succès.",
            ],
            explanation: "\"Remporter / connaître un vif succès\".",
          },
        ],
      },
      {
        heading: "Failure: essuyer, subir",
        body: [
          "Failure: \"essuyer un refus\", \"un échec\", \"une défaite\", \"des critiques\" (to suffer, literally to wipe), \"subir une défaite\", \"des pertes\", \"encaisser un coup\" (to take a blow, familiar).",
          "\"Essuyer\" is the verb that most marks a Mastery writer: \"le ministre a essuyé un refus cinglant\", \"l'équipe a essuyé une lourde défaite\". English speakers default to \"recevoir\" or \"avoir\", which are possible but flat.",
          "Watch the article: \"remporter un vif succès\" (a great success), \"essuyer un revers\" (a setback), \"connaître des difficultés\" (to experience difficulties, not 'to know').",
        ],
        examples: [
          { es: "Sa demande de mutation a essuyé un refus.", en: "Her transfer request was turned down." },
          {
            es: "Le parti a essuyé un sérieux revers aux élections.",
            en: "The party suffered a serious setback in the elections.",
          },
          {
            es: "L'entreprise connaît des difficultés depuis la crise.",
            en: "The company has been experiencing difficulties since the crisis.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Her proposal was turned down.",
            answer: "Sa proposition a essuyé un refus.",
            altAnswers: ["Sa proposition a été refusée.", "Sa proposition a été rejetée.", "Sa proposition a essuyé un refus net."],
            explanation: "\"Essuyer un refus\": the natural collocation for suffering a refusal.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change the flat verb \"avoir\" to the collocation a Mastery writer would use.",
            source: "Le club a eu une lourde défaite dimanche.",
            answer: "Le club a essuyé une lourde défaite dimanche.",
            altAnswers: ["Le club a subi une lourde défaite dimanche."],
            explanation: "A defeat is suffered: \"essuyer une défaite\" (or \"subir une défaite\"). \"Avoir une défaite\" is understood but flat, the typical English-speaker default.",
          },
        ],
      },
      {
        heading: "Conflict: semer, attiser, apaiser, clore",
        body: [
          "Conflict: \"semer la discorde\" (to sow discord), \"semer le trouble\", \"attiser les tensions\" (to stir up), \"apaiser les esprits\" (to calm people down), \"clore une polémique\" or \"un débat\" (to close), \"envenimer la situation\" (to poison).",
        ],
        examples: [
          { es: "Ces rumeurs ont semé la discorde dans l'équipe.", en: "These rumours sowed discord in the team." },
          {
            es: "Le ministre a voulu clore la polémique par un communiqué.",
            en: "The minister tried to end the controversy with a statement.",
          },
          { es: "Ses propos ont semé le trouble parmi les militants.", en: "His remarks sowed confusion among the activists." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "The mediator wants to calm everyone down before the vote. Which collocation does she need?",
            options: ["apaiser les esprits", "attiser les esprits", "semer les esprits", "clore les esprits"],
            correctIndex: 0,
            explanation: "\"Apaiser les esprits\" means to calm people down. \"Attiser\" (to stir up) goes with tensions, \"semer\" with discord or trouble, \"clore\" with a debate or a controversy.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "His remarks [have poisoned] the situation.",
            sentence: "Ses remarques ont ___ la situation.",
            answer: "envenimé",
            explanation: "\"Envenimer la situation\": literally to put venom into it, so to make it worse. The participle after \"ont\" is \"envenimé\".",
          },
        ],
      },
      {
        heading: "Gaps and effort: combler, pallier, conjuguer",
        body: [
          "Gaps and needs: \"combler une lacune\" (to fill a gap in knowledge), \"combler un retard\" (to catch up), \"combler un déficit\", \"pallier un manque\" (to make up for; \"pallier\" is transitive: \"pallier le manque\", and \"pallier à\" is criticised). Effort: \"conjuguer ses efforts\" (to combine efforts), \"redoubler d'efforts\", \"déployer des efforts\".",
        ],
        examples: [
          {
            es: "Cette formation permet de combler mes lacunes en statistique.",
            en: "This course lets me fill the gaps in my statistics.",
          },
          {
            es: "Pour pallier le manque de médecins, la région recrute à l'étranger.",
            en: "To make up for the shortage of doctors, the region is recruiting abroad.",
          },
          { es: "Les deux associations ont conjugué leurs efforts.", en: "The two associations combined their efforts." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "To [make up for] the shortage of teachers...",
            sentence: "Pour ___ le manque d'enseignants...",
            answer: "pallier",
            altAnswers: ["compenser"],
            explanation: "\"Pallier\" is transitive: \"pallier le manque\", not \"pallier au manque\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Pour pallier au manque de logements, la ville construit des résidences.",
            answer: "Pour pallier le manque de logements, la ville construit des résidences.",
            explanation: "\"Pallier\" is transitive: \"pallier le manque\", with no \"à\". \"Pallier à\" is a common slip that careful writers avoid.",
          },
        ],
      },
      {
        heading: "Body and mind: sommeil, patience, calme",
        body: [
          "Body and mind: \"trouver le sommeil\" (to get to sleep), \"perdre patience\", \"garder son calme\", \"se plier à une règle\" or \"à un ordre\" (to comply with). These are everyday in written French and in good conversation.",
        ],
        examples: [
          { es: "Avec ce bruit, impossible de trouver le sommeil.", en: "With this noise, it's impossible to get to sleep." },
          { es: "Tous les participants doivent se plier au règlement.", en: "All participants must comply with the rules." },
          { es: "Au bout d'une heure, les clients ont perdu patience.", en: "After an hour, the customers lost patience." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I couldn't get to sleep.",
            answer: "Je n'ai pas réussi à trouver le sommeil.",
            altAnswers: [
              "Je n'arrivais pas à trouver le sommeil.",
              "Je n'ai pas pu trouver le sommeil.",
              "Je n'ai pas trouvé le sommeil.",
              "Je n'arrivais pas à m'endormir.",
              "Je n'ai pas réussi à m'endormir.",
            ],
            explanation: "\"Trouver le sommeil\" is the elegant collocation; \"s'endormir\" is plainer.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Despite the insults, she [kept her calm].",
            sentence: "Malgré les insultes, elle ___.",
            answer: "a gardé son calme",
            altAnswers: ["est restée calme"],
            explanation: "\"Garder son calme\" (to keep one's calm), the opposite of \"perdre patience\". The possessive agrees with the subject: \"son calme\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "The council [has fixed] the date of the vote.",
        sentence: "Le conseil ___ la date du vote.",
        answer: "a arrêté",
        altAnswers: ["a fixé"],
        explanation: "\"Arrêter une date\" means to fix it, not to stop it. The collocation belongs to official, written French.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "The start-up [has been experiencing] difficulties since January.",
        sentence: "La start-up ___ des difficultés depuis janvier.",
        answer: "connaît",
        explanation: "\"Connaître des difficultés\" means to experience them, not to know them. The present with \"depuis\" covers a situation still going on.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "This year the school must [catch up on] its backlog.",
        sentence: "Cette année, l'école doit ___ son retard.",
        answer: "combler",
        altAnswers: ["rattraper"],
        explanation: "\"Combler un retard\" (to catch up), like \"combler une lacune\" or \"un déficit\": you fill in what is missing.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Several journalists raised the question of the cost.",
        answer: "Plusieurs journalistes ont soulevé la question du coût.",
        altAnswers: ["Plusieurs journalistes ont posé la question du coût."],
        explanation: "A question is raised: \"soulever une question\". \"Poser la question\" is also correct.",
      },
      {
        type: "multiple-choice",
        question: "Which sentence contains a calque?",
        options: [
          "Il faut faire une décision rapidement.",
          "Il faut prendre une décision rapidement.",
          "Il faut trancher rapidement.",
          "Il faut se décider rapidement.",
        ],
        correctIndex: 0,
        explanation: "\"*Faire une décision\" copies English make a decision; French says \"prendre une décision\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The volunteers redoubled their efforts.",
        answer: "Les bénévoles ont redoublé d'efforts.",
        altAnswers: ["Les volontaires ont redoublé d'efforts."],
        explanation: "\"Redoubler d'efforts\" takes \"de\" with no article; compare \"conjuguer ses efforts\", \"déployer des efforts\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "This decision has stirred up tensions in the village.",
        answer: "Cette décision a attisé les tensions dans le village.",
        altAnswers: ["Cette décision a attisé les tensions au village."],
        explanation: "Tensions are stirred up like a fire: \"attiser les tensions\". The opposite move is \"apaiser les esprits\".",
      },
      {
        type: "matching",
        instructions: "Match each noun with its usual verb.",
        pairs: [
          { left: "des espoirs", right: "nourrir" },
          { left: "un refus", right: "essuyer" },
          { left: "la discorde", right: "semer" },
          { left: "une lacune", right: "combler" },
          { left: "un succès", right: "remporter" },
          { left: "des doutes", right: "émettre" },
        ],
        explanation: "Learn the noun and its verb as one chunk.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: The players must comply with the referee's decision.",
        words: ["Les joueurs", "doivent", "se plier", "à la décision", "de l'arbitre."],
        translation: "The players must comply with the referee's decision.",
        explanation: "\"Se plier à\" (to bow to, to comply with) a rule, an order or a decision.",
      },
      {
        type: "dictation",
        audio: "Le syndicat a formulé une critique sévère.",
        explanation: "\"Formuler une critique\": the precise verb for putting a criticism into words.",
      },
      {
        type: "speak",
        text: "Notre équipe a atteint tous ses objectifs.",
        prompt: "Say it in French: Our team has reached all its targets.",
        explanation: "\"Atteindre un objectif\": the past participle of \"atteindre\" is \"atteint\".",
      },
    ],
  },
];

export const FR_C2_U12_WRITING: WriteExercise = {
  type: "write",
  prompt: "You have read two press articles on remote working: a news report announcing that a large French company would reportedly end remote work, and an opinion piece by a sociologist defending it. Write a synthesis of 250-400 words for the readers of a professional newsletter: present both positions without copying, organise the text around a central question, and end with a short, clearly separated personal view.",
  minWords: 250,
  maxWords: 400,
  rubric: [
    "Organised by ideas around a central question (\"une problématique\"), not document by document, with a title",
    "Precise attribution and reported speech (\"selon\", \"l'auteure estime que\", \"le PDG assure que\") and the hearsay conditional for unconfirmed news (\"le groupe mettrait fin\")",
    "Reformulation without copying, with markers such as \"autrement dit\", \"en d'autres termes\", \"cela revient à dire que\"",
    "At least three natural verb-noun collocations (e.g. \"émettre des réserves\", \"prendre des mesures\", \"essuyer un refus\", \"combler un retard\") and a separate personal view introduced by \"pour ma part\"",
  ],
  modelAnswer: "Télétravail : la fin d'une parenthèse ?\n\nTrois ans après sa généralisation, le télétravail divise à nouveau. Faut-il y voir un acquis durable ou une simple parenthèse ? Deux textes récents apportent des réponses opposées.\n\nSelon une dépêche publiée cette semaine, un grand groupe français de services mettrait fin au télétravail dès janvier pour la plupart de ses salariés. La direction n'a pas confirmé l'information, mais son PDG assure, dans un entretien, que « l'innovation naît des échanges informels ». Autrement dit, le bureau resterait le lieu irremplaçable de la créativité collective. Les syndicats, eux, ont émis de vives réserves et dénoncent une décision prise sans concertation.\n\nÀ l'inverse, la sociologue Claire Martin, dans une tribune parue dans un quotidien national, soutient que le retour forcé au bureau serait une erreur. S'appuyant sur plusieurs enquêtes, elle rappelle que les salariés en télétravail partiel se déclarent moins fatigués et tout aussi productifs. En d'autres termes, ce ne serait pas la présence physique qui garantit l'efficacité, mais l'organisation du travail. Elle reconnaît toutefois que le télétravail peut isoler les plus jeunes, qui ont besoin de l'accompagnement de collègues expérimentés pour combler leur retard.\n\nLes deux points de vue s'accordent donc sur un point : le lien social au travail est essentiel. Ils divergent en revanche sur les moyens de le préserver. Pour le PDG, cela passe par la présence quotidienne ; pour la sociologue, cela revient à repenser les temps collectifs plutôt qu'à imposer des horaires.\n\nPour ma part, il me semble que la question est mal posée lorsqu'on oppose le bureau à la maison. Les entreprises qui ont pris des mesures concrètes, comme des journées d'équipe fixes et un tutorat pour les nouveaux arrivants, semblent avoir trouvé un équilibre. Plutôt que de trancher dans le vif, elles ont fait le pari de la confiance, et force est de constater que leurs salariés le leur rendent bien.",
  explanation: "The synthesis opens with a central question, then weaves the two sources around ideas (agreement on social ties, disagreement on the means). It attributes every claim (\"selon une dépêche\", \"le PDG assure\", \"elle soutient\", \"elle rappelle\"), uses the hearsay conditional for unconfirmed news (\"mettrait fin\") and to keep distance (\"ce ne serait pas\"), reformulates with \"autrement dit\", \"en d'autres termes\" and \"cela revient à\", uses collocations (\"émettre des réserves\", \"combler leur retard\", \"prendre des mesures\"), and separates the personal view with \"pour ma part\" and \"force est de constater\".",
};
