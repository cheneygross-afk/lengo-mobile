// Synced from cheneygross-afk/lengo:src/lib/lessons/fr-c2-u15.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// French C2, Unit 15: Presentations & Negotiation.

export const FR_C2_U15: Lesson[] = [
  {
    slug: "c2-presentations-negotiation-1",
    level: "FR-C2",
    number: 1,
    title: "Présentations et Négociation, Part 1 of 8",
    summary: "Opening a professional presentation in French: thanking and situating yourself, choosing a hook, and announcing the plan the way a French audience expects.",
    duration: "18 min",
    sections: [
      {
        heading: "The opening ritual",
        body: [
          "The first thirty seconds of a French presentation follow a ritual. You thank the hosts or the organiser (\"merci de m'accueillir\", \"je remercie les organisateurs de leur invitation\"), you greet the audience (\"Mesdames, Messieurs\", or \"bonjour à toutes et à tous\" in a less formal setting), and you situate yourself: who you are and why you are speaking (\"je suis chargée de la stratégie numérique au sein du groupe\").",
        ],
        examples: [
          {
            es: "Mesdames, Messieurs, merci de m'accueillir ce matin.",
            en: "Ladies and gentlemen, thank you for having me this morning.",
          },
          { es: "Je remercie les organisateurs de leur invitation.", en: "I'd like to thank the organisers for inviting me." },
          {
            es: "Bonjour à toutes et à tous, et merci d'être venus si nombreux.",
            en: "Hello everyone, and thank you for coming in such numbers.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What does the opening ritual of a French presentation consist of?",
            options: [
              "Thanking the hosts, greeting the audience, situating yourself",
              "A joke, your CV, then the conclusion",
              "The plan, then a long personal story",
              "Greeting the audience, then straight into the figures",
            ],
            correctIndex: 0,
            explanation: "First thirty seconds: thank (\"merci de m'accueillir\"), greet (\"Mesdames, Messieurs\"), situate (who you are, why you speak).",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Hello everyone], and thank you for your patience.",
            sentence: "___, et merci de votre patience.",
            answer: "Bonjour à toutes et à tous",
            altAnswers: ["Bonjour à tous et à toutes", "Bonjour à tous"],
            explanation: "\"Bonjour à toutes et à tous\" greets a mixed audience in a less formal setting than \"Mesdames, Messieurs\".",
          },
        ],
      },
      {
        heading: "Stating your role",
        body: [
          "\"Être chargé(e) de\" (to be in charge of) is the standard way to state a role; \"je suis en charge de\" is widespread but criticised as an anglicism by purists. \"Au sein de\" (within) is the formal preposition for an organisation. If someone has introduced you, a brief nod is enough: \"Merci, Monsieur le Directeur, pour cette présentation un peu trop flatteuse.\"",
        ],
        examples: [
          {
            es: "Je suis chargée de la stratégie numérique au sein du groupe.",
            en: "I'm in charge of digital strategy within the group.",
          },
          {
            es: "Merci, Monsieur le Directeur, pour cette présentation un peu trop flatteuse.",
            en: "Thank you, Director, for that rather too flattering introduction.",
          },
          { es: "Je travaille au sein du service juridique.", en: "I work within the legal department." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change \"en charge de\" to the form purists prefer.",
            source: "Je suis en charge des ressources humaines.",
            answer: "Je suis chargé des ressources humaines.",
            altAnswers: ["Je suis chargée des ressources humaines."],
            explanation: "\"Être chargé(e) de\" is the standard way to state a role; \"être en charge de\" is criticised as an anglicism. \"De + les\" contracts to \"des\".",
          },
        ],
      },
      {
        heading: "The grammar of thanks",
        body: [
          "Thank-you verbs have their own grammar: \"remercier quelqu'un de\" + noun or infinitive (\"je vous remercie de votre attention\", \"de m'avoir invitée\"); \"pour\" is also common with a noun (\"merci pour votre accueil\"). With an infinitive, use \"de\": \"merci de m'avoir invité\", not \"*merci pour m'avoir invité\" in careful French.",
        ],
        examples: [
          { es: "Merci de m'avoir invité à présenter nos résultats.", en: "Thank you for inviting me to present our results." },
          { es: "Je vous remercie de votre attention.", en: "Thank you for your attention." },
          { es: "Merci pour votre accueil.", en: "Thank you for your welcome." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "I thank you [for your patience].",
            sentence: "Je vous remercie ___.",
            answer: "de votre patience",
            altAnswers: ["pour votre patience"],
            explanation: "\"Remercier quelqu'un de\" + noun; \"pour\" is also common with a noun.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Merci pour m'avoir invitée à ce colloque.",
            answer: "Merci de m'avoir invitée à ce colloque.",
            explanation: "With an infinitive, careful French uses \"de\": \"merci de m'avoir invitée\". \"Pour\" is acceptable only before a noun.",
          },
        ],
      },
      {
        heading: "Four classic hooks",
        body: [
          "Then comes the hook. French speakers use four classic types. \"Une question\": \"Combien de temps passez-vous chaque jour à chercher un document ?\" \"Un chiffre frappant\" (a striking figure): \"Chaque année, un salarié français passe en moyenne cent cinquante heures en réunion.\" \"Une anecdote\": a short story, ideally personal and true. \"Une citation\": a quotation from an author or a public figure, introduced by \"comme le disait\" or \"selon le mot de\".",
        ],
        examples: [
          {
            es: "Combien de temps passez-vous chaque jour à chercher un document ?",
            en: "How much time do you spend each day looking for a document?",
          },
          {
            es: "Chaque année, un salarié passe en moyenne cent cinquante heures en réunion.",
            en: "Every year an employee spends on average a hundred and fifty hours in meetings.",
          },
          { es: "« Je n'enseigne point, je raconte », écrivait Montaigne.", en: "'I do not teach, I tell,' wrote Montaigne." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which type of hook is « Selon une étude récente, un Français sur trois saute le petit-déjeuner » ?",
            options: ["un chiffre frappant", "une anecdote", "une citation", "une question"],
            correctIndex: 0,
            explanation: "A striking figure (\"un chiffre frappant\"): one statistic that makes the problem concrete.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "How many emails do you receive every day?",
            answer: "Combien de courriels recevez-vous chaque jour ?",
            altAnswers: [
              "Combien d'e-mails recevez-vous chaque jour ?",
              "Combien de mails recevez-vous chaque jour ?",
              "Combien de courriels recevez-vous par jour ?",
              "Combien d'e-mails recevez-vous par jour ?",
            ],
            explanation: "A question hook with inversion (\"recevez-vous\"), the formal register of a presentation.",
          },
        ],
      },
      {
        heading: "Brief, and linked to the subject",
        body: [
          "A French hook is brief and leads straight to the subject. A long American-style story can feel manipulative or off-topic to a French audience; one or two sentences are enough. The hook must connect to the \"problématique\": if you open with a figure about meetings, your presentation should be about meetings.",
        ],
        examples: [
          {
            es: "Il y a trois ans, un client m'a dit une phrase que je n'ai jamais oubliée.",
            en: "Three years ago a client said something to me that I've never forgotten.",
          },
          {
            es: "Commençons par un chiffre : 40 % de nos clients nous quittent la première année.",
            en: "Let's start with a figure: 40% of our customers leave us in the first year.",
          },
          { es: "Une phrase, puis on entre dans le sujet.", en: "One sentence, then straight into the subject." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Your presentation is about remote work. Which hook fits a French audience best?",
            options: [
              "Un salarié sur quatre travaille désormais de chez lui au moins un jour par semaine.",
              "Il y a vingt ans, j'ai fait un long voyage en Asie, et je vais vous le raconter en détail.",
              "Comme le disait Voltaire, le travail éloigne de nous trois grands maux.",
              "Saviez-vous que les manchots ne volent pas ?",
            ],
            correctIndex: 0,
            explanation: "A French hook is brief and tied to the subject. The long story feels manipulative, the Voltaire line is overused, and the penguin fact is off-topic.",
          },
        ],
      },
      {
        heading: "Choosing a quotation",
        body: [
          "Quotations are especially prized in French culture, but choose them well: a quotation from a classic author shows culture; an overused one (\"Le travail éloigne de nous trois grands maux\", Voltaire) can sound like a school essay. \"Selon le mot de Saint-Exupéry\" or \"comme l'écrivait Montaigne\" signal that you are quoting.",
        ],
        examples: [
          {
            es: "Selon le mot de Pascal, « tout le malheur des hommes vient d'une seule chose, qui est de ne savoir pas demeurer en repos dans une chambre ».",
            en: "In Pascal's words, 'all of humanity's problems stem from man's inability to sit quietly in a room alone.'",
          },
          {
            es: "Comme l'écrivait Montaigne, « chaque homme porte la forme entière de l'humaine condition ».",
            en: "As Montaigne wrote, 'every man bears the whole form of the human condition.'",
          },
          {
            es: "Selon le mot de Saint-Exupéry, « on ne voit bien qu'avec le cœur ».",
            en: "In Saint-Exupery's words, 'one sees clearly only with the heart.'",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[As Voltaire wrote], we must cultivate our garden.",
            sentence: "___, il faut cultiver notre jardin.",
            answer: "Comme l'écrivait Voltaire",
            altAnswers: ["Comme l'a écrit Voltaire", "Selon le mot de Voltaire", "Comme le disait Voltaire"],
            explanation: "\"Comme l'écrivait\" + author (imparfait) or \"selon le mot de\" signals that you are quoting.",
          },
        ],
      },
      {
        heading: "Announcing the plan",
        body: [
          "After the hook, the French audience waits for the plan. \"Mon exposé s'articulera autour de trois axes\" (my talk will be structured around three main points) is the classic formula. Others: \"je vous propose de procéder en trois temps\", \"dans un premier temps, je reviendrai sur...; dans un deuxième temps, je présenterai...; enfin, j'évoquerai...\", \"ma présentation comportera deux parties\".",
        ],
        examples: [
          { es: "Mon exposé s'articulera autour de trois axes.", en: "My talk will be structured around three main points." },
          { es: "Je vous propose de procéder en trois temps.", en: "I suggest we proceed in three stages." },
          { es: "Ma présentation comportera deux parties.", en: "My presentation will have two parts." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it to the classic formula with \"s'articuler autour de\".",
            source: "Ma présentation a deux parties.",
            answer: "Ma présentation s'articulera autour de deux axes.",
            explanation: "\"S'articuler autour de\" + number + \"axes\", in the future: the classic announcement of the plan.",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: First, I'll tackle the question of costs.",
            words: ["Dans un premier temps,", "j'aborderai", "la question", "des coûts."],
            translation: "First, I'll tackle the question of costs.",
            explanation: "\"Dans un premier temps\" opens the plan; \"aborder\" (to tackle) in the future.",
          },
        ],
      },
      {
        heading: "Never skip the announcement",
        body: [
          "Skipping the announcement reads as disorganised to a French audience; it is not seen as natural or relaxed. Even a ten-minute presentation to colleagues usually announces its steps, if only in one line: \"Je vais d'abord vous présenter les chiffres, puis nos propositions.\" Many speakers also show the plan on a slide (\"le sommaire\") and come back to it at each transition.",
        ],
        examples: [
          {
            es: "Dans un premier temps, je reviendrai sur les résultats de l'année.",
            en: "First, I'll go back over the year's results.",
          },
          { es: "Dans un deuxième temps, je présenterai notre nouvelle offre.", en: "Second, I'll present our new offer." },
          {
            es: "Je vais d'abord vous présenter les chiffres, puis nos propositions.",
            en: "First I'll show you the figures, then our proposals.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I'll first present the budget, then the timetable.",
            answer: "Je vais d'abord vous présenter le budget, puis le calendrier.",
            altAnswers: [
              "Je présenterai d'abord le budget, puis le calendrier.",
              "Je vais d'abord présenter le budget, puis le calendrier.",
              "Je vais d'abord vous présenter le budget, puis le planning.",
            ],
            explanation: "Even a short talk announces its steps in one line: \"d'abord..., puis...\".",
          },
        ],
      },
      {
        heading: "Verbs of the plan and the time check",
        body: [
          "Note the verbs: \"revenir sur\" (to go back over), \"présenter\", \"évoquer\" (to mention, touch on), \"aborder\" (to tackle), \"faire le point sur\" (to review). And the tense: future (\"je présenterai\") or \"je vais\" + infinitive, both natural. Close the introduction with a time check if relevant: \"le tout en vingt minutes, avant de vous laisser la parole\".",
        ],
        examples: [
          {
            es: "Enfin, j'évoquerai les perspectives pour l'an prochain.",
            en: "Finally, I'll touch on the outlook for next year.",
          },
          {
            es: "Le tout en vingt minutes, avant de vous laisser la parole.",
            en: "All in twenty minutes, before I hand over to you for questions.",
          },
          { es: "Je ferai d'abord le point sur le projet.", en: "I'll start by reviewing where the project stands." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Finally, I'll [touch on] the risks.",
            sentence: "Enfin, j'___ les risques.",
            answer: "évoquerai",
            altAnswers: ["aborderai"],
            explanation: "\"Évoquer\" (to mention, touch on), in the future like the other steps of the plan.",
          },
          {
            type: "listen-choose",
            audio: "Le tout en quinze minutes, avant de répondre à vos questions.",
            question: "What does it mean?",
            options: [
              "All in fifteen minutes, before I answer your questions.",
              "Everything took fifteen minutes, then there were questions.",
              "The whole team will answer your questions in fifteen minutes.",
              "In fifteen minutes, you will be able to ask everything.",
            ],
            correctIndex: 0,
            explanation: "\"Le tout en...\" closes the introduction with a time check.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "I'd like to thank the mayor for his welcome.",
        answer: "Je remercie le maire de son accueil.",
        altAnswers: [
          "Je remercie le maire pour son accueil.",
          "Je tiens à remercier le maire de son accueil.",
          "Je tiens à remercier le maire pour son accueil.",
        ],
        explanation: "\"Remercier quelqu'un de\" + noun; \"pour\" is also accepted before a noun.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Dans un premier temps, je reviendrai les résultats du trimestre.",
        answer: "Dans un premier temps, je reviendrai sur les résultats du trimestre.",
        explanation: "\"Revenir sur\" (to go back over) needs its preposition: \"je reviendrai sur les résultats\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Second, I'll present our partners.",
        answer: "Dans un deuxième temps, je présenterai nos partenaires.",
        altAnswers: [
          "Dans un second temps, je présenterai nos partenaires.",
          "Ensuite, je présenterai nos partenaires.",
          "Dans un deuxième temps, je vous présenterai nos partenaires.",
        ],
        explanation: "\"Dans un deuxième temps\" continues the plan; the future \"je présenterai\" announces the step.",
      },
      {
        type: "multiple-choice",
        question: "Which opening would a French audience find best organised?",
        options: [
          "Merci de m'accueillir. Un chiffre pour commencer : 40 % de nos clients partent la première année. Mon exposé s'articulera autour de trois axes.",
          "Alors, euh, voilà, je vais vous parler de nos clients, on verra bien.",
          "Je ne vais pas faire de plan, on va improviser ensemble.",
          "Bon, on commence ? Les chiffres, les voilà.",
        ],
        correctIndex: 0,
        explanation: "Thanks, a hook, then the announced plan: the French ritual in three steps.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "Let's start [with a striking figure]: one customer in two doesn't read our emails.",
        sentence: "Commençons ___ : un client sur deux ne lit pas nos courriels.",
        answer: "par un chiffre frappant",
        explanation: "\"Commencer par\" + the hook: \"un chiffre frappant\" makes the problem concrete at once.",
      },
      {
        type: "dictation",
        audio: "Je vous propose de faire le point sur nos ventes.",
        explanation: "\"Je vous propose de\" + infinitive announces a step; \"faire le point sur\" means to review.",
      },
      {
        type: "speak",
        text: "Bonsoir à toutes et à tous. Je suis chargée de la formation au sein de l'entreprise.",
        prompt: "Say it in French (as a woman): Good evening, everyone. I'm in charge of training within the company.",
        explanation: "Greet, then situate yourself: \"être chargée de\" + \"au sein de\".",
      },
    ],
  },
  {
    slug: "c2-presentation-openings-contrast",
    level: "FR-C2",
    number: 2,
    title: "Contrast Clinic: Des Accroches qui Captivent et d'Autres qui Endorment",
    summary: "Question, surprising figure, anecdote or quotation: choose the right hook for a board, a class or a town meeting, and avoid the deadly \"alors, euh, je vais vous parler de...\".",
    duration: "17 min",
    sections: [
      {
        heading: "The deadly opening",
        body: [
          "This clinic compares openings that differ in one respect: how they start. The deadly one: \"Alors, euh, bonjour, je vais vous parler de... la gestion des déchets.\" Three problems at once: a filler (\"alors, euh\"), an empty announcement (\"je vais vous parler de\"), and no reason for the audience to care. French audiences call it \"une entrée en matière laborieuse\" (a laboured start).",
        ],
        examples: [
          {
            es: "Alors, euh, bonjour, je vais vous parler de la gestion des déchets.",
            en: "So, er, hello, I'm going to talk to you about waste management. (deadly)",
          },
          { es: "Son entrée en matière a été un peu laborieuse.", en: "His opening was a bit laboured." },
          {
            es: "Bon, alors, euh, je vais vous parler du budget.",
            en: "Right, so, er, I'm going to talk to you about the budget.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which of these is NOT one of the faults of « Alors, euh, bonjour, je vais vous parler de... la gestion des déchets » ?",
            options: [
              "It is too short.",
              "It starts with a filler.",
              "It makes an empty announcement.",
              "It gives the audience no reason to care.",
            ],
            correctIndex: 0,
            explanation: "Its faults are the filler (\"alors, euh\"), the empty \"je vais vous parler de\" and no reason to care. Brevity is not the problem.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Her [opening] was brilliant.",
            sentence: "Son ___ a été brillante.",
            answer: "entrée en matière",
            explanation: "\"Une entrée en matière\" (an opening, a way into the subject) is feminine, hence \"brillante\".",
          },
        ],
      },
      {
        heading: "Other sleepers, and a better start",
        body: [
          "Other sleepers: excuses (\"je ne suis pas très bon à l'oral, mais...\"), technical warnings (\"j'espère que le micro marche\"), and the slide read aloud. They all spend the most precious seconds on nothing. Compare: \"Chaque habitant de notre ville produit cinq cents kilos de déchets par an. Où vont-ils ? Personne ici ne le sait vraiment. Ce soir, je vais vous le montrer.\"",
        ],
        examples: [
          {
            es: "Je ne suis pas très doué pour l'oral, mais je vais essayer.",
            en: "I'm not very good at public speaking, but I'll try. (deadly)",
          },
          {
            es: "Chaque habitant de notre ville produit cinq cents kilos de déchets par an.",
            en: "Every resident of our town produces five hundred kilos of waste a year.",
          },
          { es: "Où vont-ils ? Personne ici ne le sait vraiment.", en: "Where does it go? Nobody here really knows." },
          { es: "Ce soir, je vais vous le montrer.", en: "Tonight, I'm going to show you." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which opening wastes the first seconds?",
            options: [
              "J'espère que le micro marche... Bon, je vais vous parler de déchets.",
              "Où vont nos déchets ? Personne ici ne le sait vraiment.",
              "Cinq cents kilos : c'est ce que chacun de nous jette chaque année.",
              "Il y a un an, j'ai suivi un camion-poubelle jusqu'au bout de son trajet.",
            ],
            correctIndex: 0,
            explanation: "Technical worries and an empty announcement put the audience to sleep; the others start from the audience's world.",
          },
        ],
      },
      {
        heading: "Start from the audience's world",
        body: [
          "The contrast is not in vocabulary but in structure: the good opening goes from the audience's world (their waste, their city) to the topic, while the bad one goes from the speaker's task to the topic.",
        ],
        examples: [
          {
            es: "Vos impôts, votre quartier, vos enfants : voilà mon sujet.",
            en: "Your taxes, your neighbourhood, your children: that's my subject.",
          },
          { es: "Le bon début part du monde du public.", en: "A good opening starts from the audience's world." },
          { es: "Le mauvais part de la tâche de l'orateur.", en: "A bad one starts from the speaker's task." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which opening starts from the audience's world rather than the speaker's task?",
            options: [
              "Chacun de vous jette vingt kilos de pain par an.",
              "Je dois vous présenter un rapport sur le gaspillage.",
              "On m'a demandé de parler du gaspillage.",
              "Mon exposé porte sur le gaspillage.",
            ],
            correctIndex: 0,
            explanation: "\"Chacun de vous jette...\" puts the audience's own habits first. The others start from what the speaker has to do.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Our talk [starts from] the residents' daily life.",
            sentence: "Notre exposé ___ quotidien des habitants.",
            answer: "part du",
            explanation: "\"Partir de\" (to start from); \"de + le\" contracts to \"du\".",
          },
        ],
      },
      {
        heading: "A board of directors",
        body: [
          "A board of directors (\"un conseil d'administration\") wants figures and stakes, fast: \"Trois chiffres, et une décision à prendre aujourd'hui.\" An anecdote would seem a waste of their time; a quotation, pretentious. A striking figure tied to money or risk is ideal.",
        ],
        examples: [
          {
            es: "Trois chiffres, et une décision à prendre aujourd'hui.",
            en: "Three figures, and a decision to be made today. (board)",
          },
          {
            es: "Un conseil d'administration veut des chiffres et des enjeux.",
            en: "A board of directors wants figures and stakes.",
          },
          { es: "Deux risques, et un choix à faire ce soir.", en: "Two risks, and a choice to make tonight." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You're presenting to a board of directors. Which hook fits?",
            options: [
              "Trois chiffres, et une décision à prendre aujourd'hui.",
              "Comme l'écrivait Montaigne, « chaque homme porte la forme entière de l'humaine condition ».",
              "Il était une fois, dans une petite usine...",
              "Levez la main si vous aimez les tableaux Excel !",
            ],
            correctIndex: 0,
            explanation: "A board wants figures and stakes; the others are too literary, too long or too playful.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "One figure, and a decision to be made this week.",
            answer: "Un chiffre, et une décision à prendre cette semaine.",
            altAnswers: ["Un chiffre, et une décision à prendre d'ici la fin de la semaine."],
            explanation: "A nominal hook for a board: \"à prendre\" (to be made) keeps it short and puts the stakes first.",
          },
        ],
      },
      {
        heading: "Students, town meetings, academics",
        body: [
          "A class of students responds to a question that involves them: \"Qui, dans cette salle, a déjà acheté un vêtement porté une seule fois ?\" A town meeting (\"une réunion publique\") responds to a local, concrete anecdote: \"La semaine dernière, Mme Garnier, qui habite rue des Tilleuls, a attendu le bus quarante minutes sous la pluie.\" A cultural or academic audience appreciates a well-chosen quotation.",
        ],
        examples: [
          {
            es: "Qui, dans cette salle, a déjà acheté un vêtement porté une seule fois ?",
            en: "Who in this room has ever bought a piece of clothing they wore only once? (students)",
          },
          {
            es: "La semaine dernière, une habitante de la rue des Tilleuls a attendu le bus quarante minutes sous la pluie.",
            en: "Last week a resident of Rue des Tilleuls waited forty minutes for the bus in the rain. (town meeting)",
          },
          {
            es: "« La lecture de tous les bons livres est comme une conversation avec les plus honnêtes gens des siècles passés », écrivait Descartes.",
            en: "'Reading good books is like a conversation with the finest people of past centuries,' wrote Descartes. (academic audience)",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Who in this room has ever missed a train?",
            answer: "Qui, dans cette salle, a déjà raté un train ?",
            altAnswers: [
              "Qui, dans cette salle, a déjà manqué un train ?",
              "Qui, ici, a déjà raté un train ?",
              "Qui dans cette salle a déjà raté un train ?",
              "Qui, dans cette salle, a déjà raté son train ?",
            ],
            explanation: "\"Qui, dans cette salle, a déjà...?\" involves students directly: everyone checks their own memory.",
          },
        ],
      },
      {
        heading: "The trap of the closed question",
        body: [
          "The question hook has a trap: a closed question that the audience can answer \"non\" (\"Vous êtes-vous déjà intéressés aux déchets ?\") kills the opening. Prefer questions that make people raise a hand or think of a number: \"Combien...?\", \"Qui, ici, a déjà...?\"",
        ],
        examples: [
          {
            es: "Vous êtes-vous déjà intéressés aux déchets ?",
            en: "Have you ever been interested in waste? (a closed question to avoid)",
          },
          {
            es: "Levez la main si vous avez pris votre voiture ce matin.",
            en: "Raise your hand if you drove here this morning.",
          },
          { es: "Qui, ici, a déjà dormi dans un aéroport ?", en: "Who here has ever slept in an airport?" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the closed question into one that starts with \"Combien d'entre vous\".",
            source: "Êtes-vous déjà venus au travail à vélo ?",
            answer: "Combien d'entre vous sont déjà venus au travail à vélo ?",
            altAnswers: ["Combien d'entre vous sont déjà venus travailler à vélo ?"],
            explanation: "A closed question can be answered \"non\" and kills the opening; \"Combien d'entre vous...?\" makes people think of a number. The verb agrees with \"vous\" in the plural.",
          },
          {
            type: "listen-choose",
            audio: "Levez la main si vous avez déjà perdu vos clés cette semaine.",
            question: "What does the speaker want?",
            options: [
              "People to raise their hand if they've lost their keys this week.",
              "People to hand in any keys they've found.",
              "People to keep their keys in their hands.",
              "People to stand up if they arrived late.",
            ],
            correctIndex: 0,
            explanation: "\"Levez la main si...\" turns a question hook into a small action: the audience is involved before the topic is named.",
          },
        ],
      },
      {
        heading: "Flat to hook: the figure first",
        body: [
          "Let's transform three flat openings. Flat: \"Je vais vous présenter le bilan de la campagne de vaccination.\" Hook: \"En six mois, nous avons vacciné plus de personnes qu'en cinq ans. Comment ? C'est ce que je vais vous expliquer.\" The figure first, then a one-word question, then the announcement.",
        ],
        examples: [
          {
            es: "En six mois, nous avons vacciné plus de personnes qu'en cinq ans.",
            en: "In six months we've vaccinated more people than in five years.",
          },
          { es: "Comment ? C'est ce que je vais vous expliquer.", en: "How? That's what I'm going to explain." },
          {
            es: "En un an, la ville a planté plus d'arbres qu'en dix ans.",
            en: "In one year the town planted more trees than in ten years.",
          },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: In three months we've hired more people than in two years.",
            words: ["En trois mois,", "nous avons recruté", "plus de personnes", "qu'en deux ans."],
            translation: "In three months we've hired more people than in two years.",
            explanation: "The figure first, as a comparison (\"plus de... qu'en...\"); the question and the announcement come after.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "In ten years the village has lost half its shops.",
            answer: "En dix ans, le village a perdu la moitié de ses commerces.",
            altAnswers: [
              "En dix ans, le village a perdu la moitié de ses magasins.",
              "En dix ans, le village a perdu la moitié de ses boutiques.",
            ],
            explanation: "A striking figure framed by a time span (\"en dix ans\") makes the change concrete before any announcement.",
          },
        ],
      },
      {
        heading: "Flat to hook: a scene, a quotation",
        body: [
          "Flat: \"Aujourd'hui, nous allons parler du télétravail.\" Hook: \"Lundi matin, 8 h 30 : la moitié d'entre vous étaient déjà au travail... dans leur cuisine.\" A concrete scene, a touch of humour, then the topic. Flat: \"Le sujet de mon exposé est la lecture chez les jeunes.\" Hook with a quotation: \"« Je n'ai jamais eu de chagrin qu'une heure de lecture ne m'ait ôté », écrivait Montesquieu. Les jeunes d'aujourd'hui auraient-ils perdu ce remède ?\"",
        ],
        examples: [
          {
            es: "Lundi matin, 8 h 30 : la moitié d'entre vous étaient déjà au travail... dans leur cuisine.",
            en: "Monday morning, 8.30: half of you were already at work... in your kitchens.",
          },
          {
            es: "Je vous propose d'examiner une question simple : pourquoi les jeunes lisent-ils moins ?",
            en: "I'd like us to examine a simple question: why do young people read less?",
          },
          { es: "Les jeunes d'aujourd'hui auraient-ils perdu ce remède ?", en: "Have today's young people lost this remedy?" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What does the remote-work hook (« Lundi matin, 8 h 30... dans leur cuisine ») do before naming the topic?",
            options: [
              "It paints a concrete scene with a touch of humour.",
              "It quotes a philosopher.",
              "It gives a statistic.",
              "It apologises for the subject.",
            ],
            correctIndex: 0,
            explanation: "A concrete scene and a touch of humour, then the topic: the audience recognises itself before hearing the word \"télétravail\".",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Have] voters [lost] all trust in politics?",
            sentence: "Les électeurs ___ toute confiance dans la politique ?",
            answer: "auraient-ils perdu",
            explanation: "The conditional in a question (\"auraient-ils perdu\") raises a possibility without asserting it, as in the Montesquieu hook.",
          },
        ],
      },
      {
        heading: "If you must announce: stronger verbs",
        body: [
          "In each case the announcement \"je vais vous parler de\" disappears or comes after the hook. If you must say it, choose a stronger verb: \"je vais vous montrer\", \"je vais tenter de vous convaincre\", \"je vous propose d'examiner\".",
        ],
        examples: [
          {
            es: "Je vais tenter de vous convaincre qu'il faut tout revoir.",
            en: "I'm going to try to convince you that everything needs rethinking.",
          },
          {
            es: "Je vais vous montrer pourquoi ce projet coûte si cher.",
            en: "I'm going to show you why this project costs so much.",
          },
          { es: "Je vous propose d'examiner trois pistes.", en: "I'd like us to examine three options." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change \"vous parler de\" to the stronger \"vous montrer\".",
            source: "Je vais vous parler des dangers du sucre.",
            answer: "Je vais vous montrer les dangers du sucre.",
            explanation: "\"Montrer\" promises evidence; \"parler de\" only names a topic. Note that \"des\" (de + les) becomes \"les\" without the preposition.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Je vais tenter à vous convaincre que ce projet est utile.",
            answer: "Je vais tenter de vous convaincre que ce projet est utile.",
            explanation: "\"Tenter de\" + infinitive, like \"essayer de\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Where do our old phones end up? Nobody really knows.",
        answer: "Où finissent nos vieux téléphones ? Personne ne le sait vraiment.",
        altAnswers: [
          "Où finissent nos anciens téléphones ? Personne ne le sait vraiment.",
          "Où finissent nos vieux portables ? Personne ne le sait vraiment.",
          "Où vont nos vieux téléphones ? Personne ne le sait vraiment.",
        ],
        explanation: "A question followed by a short answer that creates suspense: \"personne ne le sait vraiment\".",
      },
      {
        type: "multiple-choice",
        question: "You're opening a town meeting about bus services. Which hook fits best?",
        options: [
          "La semaine dernière, une habitante a attendu le bus quarante minutes sous la pluie.",
          "Comme l'écrivait Descartes, la lecture est une conversation.",
          "Vous êtes-vous déjà intéressés aux bus ?",
          "Alors, euh, je vais vous parler des bus.",
        ],
        correctIndex: 0,
        explanation: "A local, concrete anecdote suits a town meeting; the closed question invites a no.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Qui, dans cette salle, a déjà prendre le train de nuit ?",
        answer: "Qui, dans cette salle, a déjà pris le train de nuit ?",
        altAnswers: ["Qui dans cette salle a déjà pris le train de nuit ?"],
        explanation: "After \"a déjà\", the passé composé needs the past participle: \"pris\", not the infinitive.",
      },
      {
        type: "listen-choose",
        audio: "Comment ? C'est ce que je vais vous expliquer.",
        question: "Where would this sentence typically come in a presentation?",
        options: [
          "Right after a striking figure, as part of the opening",
          "At the very end, after the questions",
          "In the middle of the second part",
          "In the thank-you at the end",
        ],
        correctIndex: 0,
        explanation: "It follows the hook and turns into the announcement.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "[Raise your hand] if you've ever lost a document.",
        sentence: "___ si vous avez déjà perdu un document.",
        answer: "Levez la main",
        explanation: "\"Levez la main si...\": the imperative turns the question into a gesture the whole room can make.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "I'm going to show you why everything has changed.",
        answer: "Je vais vous montrer pourquoi tout a changé.",
        explanation: "\"Je vais vous montrer\" is a stronger announcement than \"je vais vous parler de\".",
      },
      {
        type: "speak",
        text: "Combien d'entre vous ont pris l'avion cette année ?",
        prompt: "Say it in French: How many of you have flown this year?",
        explanation: "A question that makes people think of a number, not one they can answer \"non\".",
      },
    ],
  },
  {
    slug: "c2-presentations-negotiation-2",
    level: "FR-C2",
    number: 3,
    title: "Présentations et Négociation, Part 2 of 8",
    summary: "Signposting and commenting on visuals (\"j'en viens maintenant à\", \"comme vous pouvez le constater sur ce graphique\"), and reading figures aloud the French way, with the decimal comma and the billion trap.",
    duration: "19 min",
    sections: [
      {
        heading: "Signposts: on, back, ahead",
        body: [
          "Signposts (\"les mots de liaison\", \"les balises\") tell the audience where they are in the plan. Moving on: \"j'en viens maintenant à\" (I now come to), \"passons à\", \"venons-en à\", \"abordons à présent\". Looking back: \"après avoir évoqué les causes, ...\" (with the past infinitive), \"comme je l'ai dit tout à l'heure\", \"je le rappelle\". Looking ahead: \"j'y reviendrai\" (I'll come back to that), \"nous le verrons plus loin\".",
        ],
        examples: [
          {
            es: "J'en viens maintenant à la deuxième partie : les solutions.",
            en: "I now come to the second part: the solutions.",
          },
          {
            es: "Après avoir évoqué les causes, passons aux conséquences.",
            en: "Having discussed the causes, let's move on to the consequences.",
          },
          { es: "C'est une question importante, j'y reviendrai.", en: "That's an important question; I'll come back to it." },
          { es: "Comme je l'ai dit tout à l'heure, le marché est saturé.", en: "As I said earlier, the market is saturated." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Let's move on to the risks.",
            answer: "Passons aux risques.",
            altAnswers: [
              "Venons-en aux risques.",
              "J'en viens aux risques.",
              "Abordons à présent les risques.",
              "Passons maintenant aux risques.",
              "Passons à présent aux risques.",
            ],
            explanation: "\"Passer à\" (to move on to); \"à + les\" contracts to \"aux\".",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Having presented] the budget, let's move on to the timetable.",
            sentence: "___ le budget, passons au calendrier.",
            answer: "Après avoir présenté",
            altAnswers: ["Après vous avoir présenté"],
            explanation: "\"Après avoir\" + past participle (the past infinitive) looks back at the step just finished.",
          },
        ],
      },
      {
        heading: "Digressions and emphasis",
        body: [
          "Digressions are signalled too: \"j'ouvre une parenthèse\" ... \"je ferme la parenthèse\", and \"pour faire court\" (to cut a long story short). Emphasis: \"j'insiste sur ce point\", \"retenez ceci\", \"c'est le point essentiel\".",
        ],
        examples: [
          {
            es: "J'ouvre une parenthèse : ce chiffre ne comprend pas l'outre-mer.",
            en: "Just a quick aside: this figure doesn't include the overseas territories.",
          },
          {
            es: "J'insiste sur ce point : rien n'est encore décidé.",
            en: "I want to stress this point: nothing has been decided yet.",
          },
          {
            es: "Pour faire court, le projet a pris un an de retard.",
            en: "To cut a long story short, the project is a year behind.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You want to add a quick remark on a side detail. What do you say?",
            options: ["J'ouvre une parenthèse.", "J'insiste sur ce point.", "Retenez ceci.", "J'en viens maintenant à..."],
            correctIndex: 0,
            explanation: "\"J'ouvre une parenthèse\" signals a digression, closed by \"je ferme la parenthèse\". The others stress a point or move on.",
          },
        ],
      },
      {
        heading: "Mind the pronouns",
        body: [
          "Mind the pronouns: \"en venir à\" gives \"j'en viens à\"; \"revenir sur quelque chose\" gives \"j'y reviendrai\" in everyday use (strictly, \"y\" replaces \"à\" + thing, but \"j'y reviendrai\" is fixed and universal). \"Comme je l'ai dit\" keeps the neuter \"l'\", which English omits (as I said).",
        ],
        examples: [
          { es: "J'en viens à la question du prix.", en: "I now come to the question of price." },
          { es: "Nous y reviendrons tout à l'heure.", en: "We'll come back to that later." },
          { es: "Comme je l'ai expliqué, le délai est court.", en: "As I explained, the deadline is tight." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it to use the pronoun \"en\", as signposts do.",
            source: "Je viens maintenant à la conclusion.",
            answer: "J'en viens maintenant à la conclusion.",
            explanation: "The signpost is \"en venir à\": \"j'en viens à\" (I now come to).",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Comme j'ai dit, les prix vont baisser.",
            answer: "Comme je l'ai dit, les prix vont baisser.",
            explanation: "French keeps the neuter \"l'\" that English drops: \"comme je l'ai dit\".",
          },
        ],
      },
      {
        heading: "Pointing at a visual",
        body: [
          "To point at a visual: \"comme vous pouvez le constater sur ce graphique\" (as you can see on this chart), \"ce tableau fait apparaître une hausse de\" (this table shows a rise of), \"cette courbe illustre\", \"sur cette diapositive, vous voyez\". Types: \"un graphique\" (any chart), \"une courbe\" (a line graph), \"un histogramme\" (a bar chart), \"un camembert\" (a pie chart, literally a camembert cheese), \"un tableau\" (a table).",
        ],
        examples: [
          {
            es: "Comme vous pouvez le constater sur ce graphique, les ventes ont doublé.",
            en: "As you can see on this chart, sales have doubled.",
          },
          {
            es: "Ce tableau fait apparaître une hausse de 12 % du chiffre d'affaires.",
            en: "This table shows a 12% rise in turnover.",
          },
          {
            es: "Sur ce camembert, la part des moins de trente ans apparaît en vert.",
            en: "On this pie chart, the share of under-thirties is shown in green.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[As you can see] on this slide, prices have fallen.",
            sentence: "___ sur cette diapositive, les prix ont baissé.",
            answer: "Comme vous pouvez le constater",
            altAnswers: ["Comme vous le voyez", "Comme vous pouvez le voir", "Comme vous le constatez"],
            explanation: "\"Comme vous pouvez le constater\", with the neuter \"le\", is the standard way to point at a visual.",
          },
        ],
      },
      {
        heading: "Describing trends",
        body: [
          "Trends: up: \"augmenter\", \"progresser\", \"être en hausse\", \"grimper\", \"s'envoler\" (to soar); down: \"baisser\", \"diminuer\", \"reculer\", \"être en baisse\", \"chuter\", \"s'effondrer\" (to collapse); stable: \"stagner\", \"se stabiliser\", \"rester stable\". Change: \"doubler\", \"être multiplié par trois\", \"être divisé par deux\".",
        ],
        examples: [
          { es: "Après une forte hausse, la courbe se stabilise.", en: "After a sharp rise, the curve levels off." },
          { es: "Les ventes en ligne se sont envolées.", en: "Online sales have soared." },
          { es: "Le nombre d'accidents a été divisé par deux.", en: "The number of accidents has been halved." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which verb describes a collapse?",
            options: ["s'effondrer", "stagner", "progresser", "se stabiliser"],
            correctIndex: 0,
            explanation: "\"S'effondrer\" (to collapse) is the strongest downward verb. \"Stagner\" and \"se stabiliser\" are flat, \"progresser\" goes up.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it to say the prices tripled, with \"multiplier\".",
            source: "Les prix ont beaucoup augmenté.",
            answer: "Les prix ont été multipliés par trois.",
            altAnswers: ["Les prix ont triplé."],
            explanation: "\"Être multiplié par trois\" (passive) gives the exact change; the participle agrees with \"les prix\".",
          },
        ],
      },
      {
        heading: "Prepositions with figures",
        body: [
          "Prepositions with figures: \"augmenter de 10 %\" (by), \"passer de 2 à 3 millions\" (from... to), \"atteindre 5 %\" (to reach), \"une hausse de 10 %\". English speakers often add \"par\" (\"*augmenter par 10 %\"): it is always \"de\". Percentage points: \"le taux a gagné deux points\".",
        ],
        examples: [
          {
            es: "Le nombre d'abonnés est passé de deux à trois millions.",
            en: "The number of subscribers went from two to three million.",
          },
          { es: "Les coûts ont augmenté de 8 % en un an.", en: "Costs rose by 8% in a year." },
          { es: "Le taux de chômage a reculé de deux points.", en: "The unemployment rate fell by two percentage points." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Les exportations ont augmenté par 15 % l'an dernier.",
            answer: "Les exportations ont augmenté de 15 % l'an dernier.",
            explanation: "The change is always \"de\": \"augmenter de 15 %\". \"Par\" is an English calque.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The price went from ten to twelve euros.",
            answer: "Le prix est passé de dix à douze euros.",
            altAnswers: ["Le prix est passé de 10 à 12 euros.", "Le prix est passé de dix euros à douze euros."],
            explanation: "\"Passer de... à...\" (from... to), with \"être\" in the passé composé.",
          },
        ],
      },
      {
        heading: "Writing and reading numbers",
        body: [
          "French writes a comma for the decimal point and a space between thousands: \"3,5 %\" is read \"trois virgule cinq pour cent\"; \"1 200 000\" is \"un million deux cent mille\". A full stop between thousands (1.200.000) is also seen, but a comma never separates thousands. In a presentation, round numbers are easier to follow: \"près de 1,2 million\", read \"près d'un million deux cent mille\" or \"un virgule deux million\".",
        ],
        examples: [
          { es: "La croissance a atteint 3,5 % cette année.", en: "Growth reached 3.5% this year." },
          { es: "La ville compte 1 200 000 habitants.", en: "The city has 1,200,000 inhabitants." },
          { es: "Près de 1,2 million de visiteurs sont venus.", en: "Nearly 1.2 million visitors came." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "L'inflation a atteint quatre virgule deux pour cent.",
            question: "What figure did you hear?",
            options: ["4.2%", "42%", "4.02%", "0.42%"],
            correctIndex: 0,
            explanation: "\"Virgule\" is the decimal point: \"4,2 %\" is read \"quatre virgule deux pour cent\".",
          },
        ],
      },
      {
        heading: "The billion trap",
        body: [
          "The billion trap: \"un milliard\" is a billion (10⁹); \"un billion\" in French is a trillion (10¹²). Translating a billion euros as \"*un billion d'euros\" multiplies the figure by a thousand. \"Million\" and \"milliard\" are nouns, so they take \"de\": \"trois millions d'habitants\", \"deux milliards d'euros\"; but \"1,5 million d'euros\" keeps \"million\" singular, since the number is below two.",
        ],
        examples: [
          { es: "Le projet coûtera deux milliards d'euros.", en: "The project will cost two billion euros." },
          { es: "La dette mondiale dépasse cent billions de dollars.", en: "Global debt exceeds a hundred trillion dollars." },
          { es: "Le budget s'élève à 1,5 million d'euros.", en: "The budget amounts to 1.5 million euros." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "How do you write 1.5 million euros in French?",
            options: ["1,5 million d'euros", "1.5 millions d'euros", "1,5 millions euros", "1,5 billion d'euros"],
            correctIndex: 0,
            explanation: "Decimal comma, \"million\" singular below two, and \"de\" before the noun.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The deficit reached [three billion] euros.",
            sentence: "Le déficit a atteint ___ d'euros.",
            answer: "trois milliards",
            explanation: "A billion is \"un milliard\" (\"un billion\" is a trillion). As a noun, it takes \"de\" and the plural from two upwards.",
          },
        ],
      },
      {
        heading: "Fractions and approximations",
        body: [
          "Other readings: \"0,8\" is \"zéro virgule huit\"; \"2025\" is \"deux mille vingt-cinq\"; \"1/3\" is \"un tiers\"; \"x 3\" is \"multiplié par trois\". For approximate figures: \"une vingtaine\", \"une centaine\", \"des milliers\", \"environ\", \"près de\", \"plus d'un tiers\", \"un peu moins de la moitié\".",
        ],
        examples: [
          {
            es: "Plus d'un tiers des salariés télétravaillent au moins un jour par semaine.",
            en: "More than a third of employees work from home at least one day a week.",
          },
          { es: "Une centaine de personnes ont répondu à l'enquête.", en: "About a hundred people answered the survey." },
          {
            es: "Un peu moins de la moitié des élèves mangent à la cantine.",
            en: "Just under half the pupils eat in the canteen.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[About twenty] journalists were waiting.",
            sentence: "___ de journalistes attendaient.",
            answer: "Une vingtaine",
            explanation: "\"Une vingtaine de\" (about twenty), like \"une dizaine\", \"une centaine\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "More than a third of voters abstained.",
        answer: "Plus d'un tiers des électeurs se sont abstenus.",
        explanation: "\"Plus d'un tiers des\" + plural noun usually takes a plural verb; \"s'abstenir\" takes \"être\".",
      },
      {
        type: "multiple-choice",
        question: "« Les prix ont augmenté ___ 5 %. » Which word fills the gap?",
        options: ["de", "par", "à", "avec"],
        correctIndex: 0,
        explanation: "\"Augmenter de\" + the amount of change.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Unemployment has been stagnating for two years.",
        words: ["Le chômage", "stagne", "depuis", "deux ans."],
        translation: "Unemployment has been stagnating for two years.",
        explanation: "\"Stagner\" (to stagnate) in the present with \"depuis\" for an ongoing trend.",
      },
      {
        type: "matching",
        instructions: "Match each French word to the type of visual.",
        pairs: [
          { left: "un camembert", right: "a pie chart" },
          { left: "un histogramme", right: "a bar chart" },
          { left: "une courbe", right: "a line graph" },
          { left: "un tableau", right: "a table" },
          { left: "une diapositive", right: "a slide" },
        ],
        explanation: "The everyday vocabulary of presentations; \"un camembert\" is informal but universal.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "I'll come back to that in the second part.",
        answer: "J'y reviendrai dans la deuxième partie.",
        altAnswers: [
          "J'y reviendrai dans la seconde partie.",
          "Nous y reviendrons dans la deuxième partie.",
          "Nous y reviendrons dans la seconde partie.",
        ],
        explanation: "\"J'y reviendrai\" is the fixed signpost for looking ahead.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Le pays compte deux millions habitants.",
        answer: "Le pays compte deux millions d'habitants.",
        explanation: "\"Million\" is a noun, so it takes \"de\": \"deux millions d'habitants\".",
      },
      {
        type: "listen-choose",
        audio: "Le budget s'élève à un virgule cinq million d'euros.",
        question: "What did you hear?",
        options: ["1.5 million euros", "15 million euros", "1.5 billion euros", "150,000 euros"],
        correctIndex: 0,
        explanation: "\"Un virgule cinq million\" = 1,5 million; \"virgule\" is the decimal comma.",
      },
      {
        type: "dictation",
        audio: "Le chiffre d'affaires a été divisé par deux.",
        explanation: "\"Être divisé par deux\" (to be halved).",
      },
      {
        type: "speak",
        text: "Comme vous pouvez le constater, les ventes ont reculé de trois pour cent.",
        prompt: "Say it in French: As you can see, sales fell by three per cent.",
        explanation: "Point at the visual, then the trend: \"reculer de\" + figure.",
      },
    ],
  },
  {
    slug: "c2-presentation-transitions-transformations",
    level: "FR-C2",
    number: 4,
    title: "Transformations: Les Transitions entre les Parties",
    summary: "Turn abrupt jumps between the parts of a presentation into smooth transitions that orient the audience: \"après avoir analysé les causes, intéressons-nous maintenant aux solutions\".",
    duration: "17 min",
    sections: [
      {
        heading: "From the jump to the bridge",
        body: [
          "An abrupt jump: \"Voilà pour les causes. Les solutions maintenant.\" It is not wrong in a casual meeting, but in a formal presentation it sounds rushed. A transition has two halves: it closes the previous part (a summary in a few words) and opens the next one (an announcement). Transformation: \"Après avoir analysé les causes de ce retard, intéressons-nous maintenant aux solutions.\"",
        ],
        examples: [
          { es: "Voilà pour les causes. Les solutions maintenant.", en: "So much for the causes. Now the solutions. (abrupt)" },
          {
            es: "Après avoir analysé les causes de ce retard, intéressons-nous maintenant aux solutions.",
            en: "Having analysed the causes of this delay, let's now turn to the solutions.",
          },
          { es: "Voilà pour le budget. Le calendrier maintenant.", en: "So much for the budget. Now the timetable." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the abrupt jump into a two-part transition, with \"Après avoir analysé\" and \"intéressons-nous\".",
            source: "Voilà pour les coûts. Les bénéfices maintenant.",
            answer: "Après avoir analysé les coûts, intéressons-nous maintenant aux bénéfices.",
            altAnswers: [
              "Après avoir analysé les coûts, intéressons-nous aux bénéfices.",
              "Après avoir analysé les coûts, intéressons-nous à présent aux bénéfices.",
            ],
            explanation: "A transition closes the previous part (\"après avoir analysé les coûts\") and opens the next (\"intéressons-nous aux bénéfices\").",
          },
        ],
      },
      {
        heading: "The workhorse: the past infinitive",
        body: [
          "The workhorse is \"après avoir / être\" + past participle (the past infinitive), which you know from the Advanced level: \"après avoir présenté\", \"après être revenu sur\". Its subject must be the same as the main clause, or the main clause must be an imperative including the audience (\"intéressons-nous\", \"passons\", \"voyons\").",
        ],
        examples: [
          {
            es: "Après être revenus sur le contexte, voyons les chiffres.",
            en: "Having gone back over the context, let's look at the figures.",
          },
          {
            es: "Après avoir présenté le diagnostic, je voudrais vous soumettre trois propositions.",
            en: "Having presented the diagnosis, I'd like to put three proposals to you.",
          },
          {
            es: "Après avoir rappelé les faits, passons aux enjeux.",
            en: "Having recalled the facts, let's move on to what is at stake.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Having come back] to the figures, let's look at the risks.",
            sentence: "___ sur les chiffres, voyons les risques.",
            answer: "Après être revenus",
            altAnswers: ["Après être revenues", "Après être revenu", "Après être revenue"],
            explanation: "\"Revenir\" takes \"être\", so the past infinitive is \"après être revenus\", agreeing with the \"nous\" of \"voyons\".",
          },
        ],
      },
      {
        heading: "The dangling transition",
        body: [
          "A frequent learner error is the dangling transition: \"*Après avoir vu les causes, les solutions sont simples\" (the solutions did not see the causes). Fix it by giving the main clause the right subject: \"Après avoir vu les causes, nous pouvons envisager les solutions.\"",
        ],
        examples: [
          {
            es: "Après avoir vu les causes, nous pouvons envisager les solutions.",
            en: "Having looked at the causes, we can consider the solutions.",
          },
          { es: "Après avoir lu le rapport, j'ai changé d'avis.", en: "Having read the report, I changed my mind." },
          {
            es: "Après avoir écouté les syndicats, la direction a revu sa copie.",
            en: "Having listened to the unions, management went back to the drawing board.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which transition is grammatically correct?",
            options: [
              "Après avoir vu les causes, nous pouvons envisager les solutions.",
              "Après avoir vu les causes, les solutions sont simples.",
              "Après avoir vu les causes, il y a des solutions.",
              "Après voir vu les causes, passons aux solutions.",
            ],
            correctIndex: 0,
            explanation: "The past infinitive needs the same subject as the main clause (\"nous\"). \"Après voir\" lacks \"avoir\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Après avoir lire le rapport, nous pouvons conclure.",
            answer: "Après avoir lu le rapport, nous pouvons conclure.",
            explanation: "The past infinitive is \"avoir\" + past participle: \"après avoir lu\", never \"avoir lire\".",
          },
        ],
      },
      {
        heading: "A summarising noun",
        body: [
          "A second technique uses a noun that sums up the previous part, followed by a question that opens the next: \"Ce constat posé, une question demeure : que faire ?\" The absolute construction \"ce constat posé\" (this observation made) is elegant and very French; you met it in legal style: \"le délai expiré\".",
        ],
        examples: [
          {
            es: "Ce constat posé, une question demeure : que faire ?",
            en: "With that established, one question remains: what should be done?",
          },
          {
            es: "Le diagnostic établi, reste à définir le traitement.",
            en: "The diagnosis made, the treatment remains to be defined.",
          },
          {
            es: "Le délai expiré, la demande n'est plus recevable.",
            en: "The deadline having passed, the application is no longer admissible.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it to the absolute construction, starting with \"Ce bilan\".",
            source: "Maintenant que ce bilan est dressé, une question se pose : par où commencer ?",
            answer: "Ce bilan dressé, une question se pose : par où commencer ?",
            explanation: "Noun + past participle (\"ce bilan dressé\") closes the previous part in three words: the elegant absolute construction.",
          },
        ],
      },
      {
        heading: "Concession and the heart of the matter",
        body: [
          "A third uses concession, mirroring the plan: \"Si les causes sont désormais claires, les solutions, elles, restent à inventer.\" The stressed pronoun \"elles\" marks the contrast. A fourth announces the importance of what follows: \"J'en arrive maintenant au cœur de mon propos.\"",
        ],
        examples: [
          {
            es: "Si les causes sont désormais claires, les solutions, elles, restent à inventer.",
            en: "While the causes are now clear, the solutions remain to be invented.",
          },
          { es: "J'en arrive maintenant au cœur de mon propos.", en: "I now come to the heart of my argument." },
          {
            es: "Si le coût est connu, le calendrier, lui, reste flou.",
            en: "While the cost is known, the timetable is still vague.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "While the town is ready, the region [for its part] is hesitating.",
            sentence: "Si la ville est prête, la région, ___, hésite.",
            answer: "elle",
            explanation: "The stressed pronoun (\"elle\" for \"la région\") marks the contrast between the two parts.",
          },
          {
            type: "listen-choose",
            audio: "J'en arrive maintenant à l'essentiel.",
            question: "What does it mean?",
            options: [
              "I now come to the essential point.",
              "I've finished the essential part.",
              "I've just arrived, so let's be quick.",
              "Essentially, I've reached the end.",
            ],
            correctIndex: 0,
            explanation: "\"J'en arrive à\" announces that what follows matters most: \"l'essentiel\", \"le cœur de mon propos\".",
          },
        ],
      },
      {
        heading: "The question bridge",
        body: [
          "Finally, the rhetorical question bridge: \"Comment expliquer un tel écart ? C'est ce que nous allons voir.\" In each case the audience knows where it has been and where it is going, which is exactly what French listeners expect.",
        ],
        examples: [
          {
            es: "Comment expliquer un tel écart ? C'est ce que nous allons voir.",
            en: "How can such a gap be explained? That's what we'll see next.",
          },
          {
            es: "Ces chiffres appellent une question : sommes-nous prêts ?",
            en: "These figures raise a question: are we ready?",
          },
          {
            es: "Pourquoi un tel retard ? C'est ce que je vais vous montrer.",
            en: "Why such a delay? That's what I'm going to show you.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "These results [raise] a question: should we carry on?",
            sentence: "Ces résultats ___ une question : faut-il continuer ?",
            answer: "appellent",
            altAnswers: ["soulèvent", "posent"],
            explanation: "\"Appeler une question\" (to call for, to raise): the figures themselves open the next part.",
          },
        ],
      },
      {
        heading: "A full set of transitions",
        body: [
          "Put together, a three-part presentation on a delayed construction project might sound like this. Opening of part 1: \"Je commencerai par revenir sur le contexte.\" Transition 1→2: \"Le contexte rappelé, venons-en aux causes du retard.\" Transition 2→3: \"Après avoir identifié ces trois causes, intéressons-nous maintenant aux solutions.\" Opening of the conclusion: \"Que retenir de tout cela ?\"",
        ],
        examples: [
          { es: "Je commencerai par revenir sur le contexte.", en: "I'll start by going back over the background." },
          {
            es: "Le contexte rappelé, venons-en aux causes du retard.",
            en: "With the background recalled, let's come to the causes of the delay.",
          },
          {
            es: "Après avoir identifié ces trois causes, intéressons-nous maintenant aux solutions.",
            en: "Having identified these three causes, let's now turn to the solutions.",
          },
          { es: "Que retenir de tout cela ?", en: "What should we take away from all this?" },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: I'll start by recalling the figures.",
            words: ["Je commencerai", "par rappeler", "les chiffres."],
            translation: "I'll start by recalling the figures.",
            explanation: "\"Commencer par\" + infinitive opens the first part.",
          },
        ],
      },
      {
        heading: "Vary them, keep them short",
        body: [
          "Vary the formulas: using \"passons à\" four times sounds mechanical. A good transition is also short: one or two sentences. If it takes a paragraph, it has become a summary.",
        ],
        examples: [
          { es: "Venons-en, à présent, au financement.", en: "Let's now come to the funding." },
          { es: "Abordons maintenant la question du personnel.", en: "Let's now tackle the question of staff." },
          { es: "Une transition tient en une ou deux phrases.", en: "A transition fits into one or two sentences." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You've already said « passons à » three times. Which transition should you use next?",
            options: [
              "Venons-en à présent aux coûts.",
              "Passons aux coûts.",
              "Passons donc aux coûts.",
              "Et maintenant, passons encore aux coûts.",
            ],
            correctIndex: 0,
            explanation: "Vary the formulas: \"venons-en à\", \"abordons\", \"j'en viens à\". Repeating \"passons à\" sounds mechanical.",
          },
        ],
      },
      {
        heading: "Transitions on slides",
        body: [
          "On slides, transitions are often supported by bringing back the plan with the next part highlighted. Say it as you show it: \"Nous avons vu le premier point ; passons au deuxième.\"",
        ],
        examples: [
          {
            es: "Nous avons vu le premier point ; passons au deuxième.",
            en: "We've covered the first point; let's move on to the second.",
          },
          {
            es: "Voici de nouveau notre plan : nous en sommes au troisième point.",
            en: "Here is our plan again: we've reached the third point.",
          },
          { es: "Le deuxième point apparaît maintenant en surbrillance.", en: "The second point is now highlighted." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "We've covered the costs; let's move on to the benefits.",
            answer: "Nous avons vu les coûts ; passons aux bénéfices.",
            altAnswers: [
              "Nous avons vu les coûts, passons aux bénéfices.",
              "Nous avons vu les coûts ; passons maintenant aux bénéfices.",
              "Nous avons examiné les coûts ; passons aux bénéfices.",
            ],
            explanation: "Close one part (\"nous avons vu\") and open the next (\"passons à\") as you bring the plan back on screen.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Which is the smoothest transition from costs to benefits?",
        options: [
          "Après avoir examiné les coûts, intéressons-nous aux bénéfices.",
          "Voilà les coûts. Bénéfices.",
          "Après avoir examiné les coûts, les bénéfices sont importants.",
          "Les coûts, bon, ça c'est fait. Euh, les bénéfices.",
        ],
        correctIndex: 0,
        explanation: "Close and open with a shared subject; the third option is a dangling participle.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Après avoir analysé les causes, intéressons-nous maintenant des solutions.",
        answer: "Après avoir analysé les causes, intéressons-nous maintenant aux solutions.",
        explanation: "\"S'intéresser à\": \"à + les\" gives \"aux solutions\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "With the budget voted, let's come to the timetable.",
        answer: "Le budget voté, venons-en au calendrier.",
        altAnswers: [
          "Le budget voté, passons au calendrier.",
          "Le budget adopté, venons-en au calendrier.",
          "Une fois le budget voté, venons-en au calendrier.",
        ],
        explanation: "The absolute construction (\"le budget voté\") closes the part; \"venons-en à\" opens the next.",
      },
      {
        type: "multiple-choice",
        question: "What does « Ce constat posé » do in a presentation?",
        options: [
          "It closes the previous part by summing it up.",
          "It asks the audience a question.",
          "It thanks the organisers.",
          "It announces a coffee break.",
        ],
        correctIndex: 0,
        explanation: "The absolute participle sums up what has been established.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "[Having visited] the site, we can draw three lessons.",
        sentence: "___ le chantier, nous pouvons tirer trois leçons.",
        answer: "Après avoir visité",
        explanation: "The past infinitive shares the subject of the main clause (\"nous\"), so the transition does not dangle.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "What should we take away from this study?",
        answer: "Que retenir de cette étude ?",
        altAnswers: ["Que faut-il retenir de cette étude ?"],
        explanation: "\"Que retenir de...?\" opens the conclusion with an infinitive question.",
      },
      {
        type: "speak",
        text: "J'en arrive maintenant à la question qui fâche.",
        prompt: "Say it in French: I now come to the touchy question.",
        explanation: "\"J'en arrive maintenant à\" announces the most important or delicate part.",
      },
    ],
  },
  {
    slug: "c2-presentations-negotiation-3",
    level: "FR-C2",
    number: 5,
    title: "Présentations et Négociation, Part 3 of 8",
    summary: "The language of negotiation (\"la marge de manœuvre\", \"la contre-proposition\", \"le terrain d'entente\", \"le prix plancher\") and conditions with \"à condition que\", \"pourvu que\", \"à moins que (ne)\", \"dans la mesure où\", \"si\" and \"sous réserve de\".",
    duration: "19 min",
    sections: [
      {
        heading: "The nouns of the table",
        body: [
          "Before the grammar, the nouns. \"La marge de manœuvre\" (room to manoeuvre) is what each side can give. \"Une contre-proposition\" (a counter-offer) answers \"une offre\" or \"une proposition\". \"Un terrain d'entente\" (common ground) is what you look for, and \"un compromis\" what you reach. \"Faire une concession\" (to make a concession) and \"lâcher du lest\" (to give some ground, literally to drop ballast) are the moves.",
        ],
        examples: [
          { es: "Notre marge de manœuvre est très réduite.", en: "Our room to manoeuvre is very limited." },
          {
            es: "Nous vous ferons parvenir une contre-proposition d'ici vendredi.",
            en: "We'll send you a counter-offer by Friday.",
          },
          { es: "Je suis sûre que nous trouverons un terrain d'entente.", en: "I'm sure we'll find common ground." },
          {
            es: "Ils ont fini par lâcher du lest sur les délais de paiement.",
            en: "They eventually gave some ground on payment terms.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "We are ready [to give some ground] on the price.",
            sentence: "Nous sommes prêts à ___ sur le prix.",
            answer: "lâcher du lest",
            altAnswers: ["faire une concession", "faire des concessions"],
            explanation: "\"Lâcher du lest\" (literally to drop ballast): to give some ground.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "They sent us a counter-offer.",
            answer: "Ils nous ont envoyé une contre-proposition.",
            altAnswers: [
              "Ils nous ont fait parvenir une contre-proposition.",
              "Ils nous ont adressé une contre-proposition.",
              "Elles nous ont envoyé une contre-proposition.",
              "Ils nous ont envoyé une contre-offre.",
            ],
            explanation: "\"Une contre-proposition\" answers \"une offre\" or \"une proposition\".",
          },
        ],
      },
      {
        heading: "Limits and the balance of power",
        body: [
          "Limits: \"les points non négociables\" (the deal-breakers), \"le prix plancher\" (the floor price, the lowest a seller will accept) and \"le prix plafond\" (the ceiling price). \"Une ligne rouge\" is a red line. \"Être en position de force / de faiblesse\" describes the balance of power, and \"un rapport de force\" (the balance of power) is one of the most frequent phrases in French business and political commentary.",
        ],
        examples: [
          {
            es: "La qualité du service reste pour nous un point non négociable.",
            en: "Quality of service remains a non-negotiable point for us.",
          },
          { es: "Nous ne descendrons pas en dessous de notre prix plancher.", en: "We won't go below our floor price." },
          { es: "Le rapport de force a basculé en notre faveur.", en: "The balance of power has tipped in our favour." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "The buyer says « Notre prix plafond est de 80 euros. » What does that mean?",
            options: [
              "80 euros is the most the buyer will pay.",
              "80 euros is the least the buyer will accept.",
              "80 euros is a red line for the seller.",
              "80 euros is the starting price.",
            ],
            correctIndex: 0,
            explanation: "\"Le prix plafond\" is the ceiling; \"le prix plancher\" is the floor, the least a seller will accept.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Job security is [a red line] for the union.",
            sentence: "La sécurité de l'emploi est ___ pour le syndicat.",
            answer: "une ligne rouge",
            explanation: "\"Une ligne rouge\" (a red line), like \"un point non négociable\".",
          },
        ],
      },
      {
        heading: "False friends: compromettre, offrir",
        body: [
          "Note the false friend: \"un compromis\" is a positive solution, but \"compromettre\" means to jeopardise, and \"être compromis\" means to be implicated in something shady. Also, \"une offre\" is an offer, while \"offrir\" more often means to give as a gift; to put a price on the table, say \"proposer\" or \"faire une offre\" (though \"offrir des garanties\" is a normal collocation).",
        ],
        examples: [
          { es: "Ce scandale a compromis sa carrière.", en: "This scandal jeopardised his career." },
          {
            es: "Le ministre a été compromis dans une affaire de corruption.",
            en: "The minister was implicated in a corruption case.",
          },
          { es: "Nous sommes prêts à faire une offre.", en: "We're ready to make an offer." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Your client says « Ce retard compromet tout le projet. » What does she mean?",
            options: [
              "The delay jeopardises the whole project.",
              "The delay is a compromise for the whole project.",
              "The delay was agreed for the whole project.",
              "The delay commits the whole team.",
            ],
            correctIndex: 0,
            explanation: "\"Compromettre\" means to jeopardise; only the noun \"un compromis\" is positive.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change \"offrir\" to the usual way of putting a price on the table, with \"proposer\".",
            source: "Nous vous offrons 40 euros l'unité.",
            answer: "Nous vous proposons 40 euros l'unité.",
            altAnswers: ["Nous vous proposons quarante euros l'unité.", "Nous vous proposons 40 euros par unité."],
            explanation: "\"Offrir\" more often means to give as a gift; for a price, say \"proposer\" or \"faire une offre\".",
          },
        ],
      },
      {
        heading: "À condition que, à condition de",
        body: [
          "Negotiation is conditional by nature, and French marks the condition's mood. \"À condition que\" + subjunctive (provided that): \"Nous acceptons, à condition que la livraison soit garantie avant le 15.\" With the same subject, use \"à condition de\" + infinitive: \"Nous acceptons, à condition d'être payés à trente jours.\"",
        ],
        examples: [
          {
            es: "Nous acceptons, à condition que la livraison soit garantie avant le 15.",
            en: "We accept, provided delivery is guaranteed before the 15th.",
          },
          {
            es: "Nous acceptons, à condition d'être payés à trente jours.",
            en: "We accept, on condition that we're paid within thirty days.",
          },
          { es: "Je signe, à condition que vous me laissiez une semaine.", en: "I'll sign, provided you give me a week." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence is correct?",
            options: [
              "Nous signerons, à condition que vous baissiez le prix.",
              "Nous signerons, à condition que vous baissez le prix.",
              "Nous signerons, à condition que vous baisseriez le prix.",
              "Nous signerons, à condition de vous baissiez le prix.",
            ],
            correctIndex: 0,
            explanation: "\"À condition que\" always takes the subjunctive: \"baissiez\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it to \"à condition de\" + infinitive, since both verbs have the same subject.",
            source: "Nous signerons, à condition que nous obtenions une remise.",
            answer: "Nous signerons, à condition d'obtenir une remise.",
            explanation: "Same subject: \"à condition de\" + infinitive. \"À condition que\" + subjunctive is for a different subject.",
          },
        ],
      },
      {
        heading: "Pourvu que, à moins que",
        body: [
          "\"Pourvu que\" + subjunctive also means provided that (and, at the start of a sentence, let's hope that: \"pourvu qu'il accepte !\"). \"À moins que\" + subjunctive (unless) often takes the optional \"ne explétif\" in careful French: \"à moins que vous ne préfériez une livraison en deux fois\". This \"ne\" is not a negation; it adds a formal, slightly hesitant tone. With the same subject: \"à moins de\" + infinitive.",
        ],
        examples: [
          {
            es: "Ce prix est envisageable, pourvu que la commande soit ferme.",
            en: "This price is possible, provided the order is firm.",
          },
          {
            es: "Nous livrerons en une fois, à moins que vous ne préfériez deux livraisons.",
            en: "We'll deliver in one go, unless you'd prefer two deliveries.",
          },
          { es: "Pourvu qu'il accepte !", en: "Let's hope he accepts!" },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Pourvu que le client signe avant Noël !",
            question: "What does it mean?",
            options: [
              "Let's hope the client signs before Christmas!",
              "Provided the client signs, it will be Christmas.",
              "The client signed before Christmas.",
              "The client must sign before Christmas.",
            ],
            correctIndex: 0,
            explanation: "At the start of a sentence, \"pourvu que\" + subjunctive expresses a hope: let's hope that.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "We'll keep the price, [unless] costs rise.",
            sentence: "Nous maintiendrons le prix, ___ les coûts n'augmentent.",
            answer: "à moins que",
            explanation: "\"À moins que\" + subjunctive, often with the expletive \"ne\", which is not a negation.",
          },
        ],
      },
      {
        heading: "Pour peu que, en admettant que, and the trap",
        body: [
          "Other subjunctive conditions: \"pour peu que\" (if only, as long as: \"pour peu que vous commandiez davantage, nous pourrons...\") and \"en admettant que\" (assuming that). The trap: \"à condition que\" never takes the indicative, even in fast speech, and \"à moins que\" never takes the conditional.",
        ],
        examples: [
          {
            es: "Pour peu que vous augmentiez les volumes, nous pourrons revoir le tarif.",
            en: "If you just increase the volumes, we'll be able to review the price.",
          },
          {
            es: "En admettant que nous acceptions, quelles garanties nous offrez-vous ?",
            en: "Assuming we accept, what guarantees can you give us?",
          },
          { es: "À moins que le prix ne baisse, nous renoncerons.", en: "Unless the price falls, we'll give up." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "À condition que le fournisseur peut livrer, nous signerons demain.",
            answer: "À condition que le fournisseur puisse livrer, nous signerons demain.",
            explanation: "\"À condition que\" never takes the indicative: \"puisse\" (pouvoir, subjunctive).",
          },
        ],
      },
      {
        heading: "Si + indicative",
        body: [
          "Not every condition takes the subjunctive. \"Si\" + indicative is the most common and the most direct: \"Si vous commandez mille unités, nous vous accordons 5 %.\" In negotiation, \"si + imparfait / conditional\" softens a proposal into a hypothesis: \"Si nous acceptions vos délais, seriez-vous prêts à revoir le prix ?\" (you will practise this in Unit 16).",
        ],
        examples: [
          {
            es: "Si vous commandez mille unités, nous vous accordons 5 % de remise.",
            en: "If you order a thousand units, we'll give you a 5% discount.",
          },
          { es: "Si vous payez comptant, nous livrons gratuitement.", en: "If you pay in cash, we'll deliver for free." },
          { es: "Si nous baissions le prix, signeriez-vous aujourd'hui ?", en: "If we lowered the price, would you sign today?" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "If you sign today, we'll deliver next week.",
            answer: "Si vous signez aujourd'hui, nous livrerons la semaine prochaine.",
            altAnswers: [
              "Si vous signez aujourd'hui, nous livrons la semaine prochaine.",
              "Si vous signez aujourd'hui, on livrera la semaine prochaine.",
              "Si vous signez aujourd'hui, nous vous livrerons la semaine prochaine.",
            ],
            explanation: "\"Si\" + present indicative, then the future (or present): the most direct condition.",
          },
        ],
      },
      {
        heading: "Dans la mesure où, du moment que",
        body: [
          "\"Dans la mesure où\" + indicative means insofar as, given that: \"Dans la mesure où vous êtes un client fidèle, nous pouvons faire un effort.\" It sounds measured and slightly formal. \"Du moment que\" + indicative (as long as) is the conversational equivalent.",
        ],
        examples: [
          {
            es: "Dans la mesure où vous êtes un client fidèle, nous pouvons faire un effort.",
            en: "Since you're a loyal customer, we can make an effort.",
          },
          {
            es: "Du moment que le délai est respecté, le reste nous convient.",
            en: "As long as the deadline is met, the rest suits us.",
          },
          {
            es: "Dans la mesure où les volumes augmentent, le tarif baisse.",
            en: "Insofar as volumes increase, the price falls.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[As long as] payment arrives on time, we're flexible.",
            sentence: "___ le paiement arrive à temps, nous sommes souples.",
            answer: "Du moment que",
            altAnswers: ["Dans la mesure où"],
            explanation: "\"Du moment que\" + indicative (as long as) is the conversational counterpart of \"dans la mesure où\".",
          },
        ],
      },
      {
        heading: "Sous réserve de, moyennant",
        body: [
          "\"Sous réserve de\" + noun (subject to) states the condition nominally, as in contracts: \"sous réserve de l'accord de notre direction\", \"sous réserve de disponibilité\". \"Moyennant\" + noun (in return for) attaches a price or condition: \"moyennant un supplément de 10 %\". Both are compact and very common in written offers.",
        ],
        examples: [
          {
            es: "Cette offre est valable sous réserve de l'accord de notre direction.",
            en: "This offer is valid subject to our management's approval.",
          },
          {
            es: "Livraison possible en 48 heures, moyennant un supplément de 10 %.",
            en: "Delivery possible within 48 hours, for an extra 10%.",
          },
          {
            es: "Sous réserve de disponibilité, nous pouvons livrer dès lundi.",
            en: "Subject to availability, we can deliver from Monday.",
          },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: Express delivery is possible for an extra fee.",
            words: ["La livraison express", "est possible", "moyennant", "un supplément."],
            translation: "Express delivery is possible for an extra fee.",
            explanation: "\"Moyennant\" + noun attaches a price or condition, compactly, as in written offers.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "matching",
        instructions: "Match each connector to the mood it takes.",
        pairs: [
          { left: "à condition que", right: "subjunctive" },
          { left: "dans la mesure où", right: "indicative" },
          { left: "à moins que", right: "subjunctive (often with \"ne\")" },
          { left: "sous réserve de", right: "a noun" },
          { left: "à condition de", right: "an infinitive" },
        ],
        explanation: "The condition's form depends on the connector, not on how certain it is.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Assuming the bank agrees, when could you start?",
        answer: "En admettant que la banque accepte, quand pourriez-vous commencer ?",
        altAnswers: [
          "En admettant que la banque soit d'accord, quand pourriez-vous commencer ?",
          "En admettant que la banque accepte, quand pourriez-vous démarrer ?",
        ],
        explanation: "\"En admettant que\" + subjunctive (\"accepte\"); the question uses the conditional to stay hypothetical.",
      },
      {
        type: "multiple-choice",
        question: "In « à moins que vous ne préfériez », what is the \"ne\"?",
        options: [
          "An optional expletive \"ne\", not a negation",
          "A negation: unless you don't prefer",
          "A mistake",
          "Part of a double negation with \"que\"",
        ],
        correctIndex: 0,
        explanation: "The expletive \"ne\" is formal and optional; the meaning stays positive.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The contract will be signed subject to the board's approval.",
        answer: "Le contrat sera signé sous réserve de l'accord du conseil d'administration.",
        altAnswers: [
          "Le contrat sera signé sous réserve de l'approbation du conseil d'administration.",
          "Le contrat sera signé sous réserve de l'accord du conseil.",
          "Le contrat sera signé sous réserve de l'approbation du conseil.",
        ],
        explanation: "\"Sous réserve de\" + noun states the condition as in a contract.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Nous signerons demain, à moins que le juriste ne trouverait un problème.",
        answer: "Nous signerons demain, à moins que le juriste ne trouve un problème.",
        explanation: "\"À moins que\" takes the subjunctive, never the conditional: \"ne trouve\".",
      },
      {
        type: "listen-choose",
        audio: "Nous ne monterons pas au-dessus de notre prix plafond.",
        question: "What does it mean?",
        options: [
          "We won't go above our ceiling price.",
          "We won't go below our floor price.",
          "We won't go upstairs to discuss prices.",
          "Our price includes the ceiling work.",
        ],
        correctIndex: 0,
        explanation: "\"Le prix plafond\" is the most a buyer will pay: \"monter au-dessus de\" (to go above).",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "We have very little [room to manoeuvre] on deadlines.",
        sentence: "Nous avons très peu de ___ sur les délais.",
        answer: "marge de manœuvre",
        explanation: "\"La marge de manœuvre\" (room to manoeuvre) is what each side can give.",
      },
      {
        type: "dictation",
        audio: "Moyennant un petit effort, nous trouverons un compromis.",
        explanation: "\"Moyennant\" + noun (in return for); \"un compromis\" is the positive solution.",
      },
      {
        type: "speak",
        text: "Nous acceptons, à condition que le paiement soit effectué à trente jours.",
        prompt: "Say it in French: We accept, provided payment is made within thirty days.",
        explanation: "\"À condition que\" + subjunctive: \"soit effectué\".",
      },
    ],
  },
  {
    slug: "c2-counteroffer-dialogue-lab",
    level: "FR-C2",
    number: 6,
    title: "Dialogue Lab: La Contre-Proposition",
    summary: "You receive an insufficient offer for a translation contract: thank, justify and make a counter-proposal that leaves room to move, with \"votre proposition retient toute notre attention, toutefois...\" and \"nous serions prêts à... à condition que\".",
    duration: "18 min",
    sections: [
      {
        heading: "The situation",
        body: [
          "The situation: you are Camille Roussel, director of a small translation agency in Montpellier. Pierre Vasseur, purchasing manager at a pharmaceutical company, calls to make an offer for a large contract: three hundred thousand words a year, at a price per word 30% below your usual rate, payment at ninety days.",
        ],
        examples: [
          {
            es: "Pierre : Nous vous proposons un tarif de 0,08 euro le mot, payable à quatre-vingt-dix jours.",
            en: "Pierre: We're offering a rate of 0.08 euros per word, payable at ninety days.",
          },
          {
            es: "Le contrat porte sur trois cent mille mots par an.",
            en: "The contract covers three hundred thousand words a year.",
          },
          {
            es: "Le tarif proposé est inférieur de 30 % à notre tarif habituel.",
            en: "The proposed rate is 30% below our usual rate.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What makes Pierre's offer hard for Camille to accept?",
            options: [
              "A price 30% below her usual rate, with payment at ninety days",
              "A very small volume of work",
              "A deadline of one week",
              "A contract in a field she doesn't know",
            ],
            correctIndex: 0,
            explanation: "The volume is attractive, but the price per word is 30% lower and payment comes only after ninety days.",
          },
        ],
      },
      {
        heading: "The first move is never a refusal",
        body: [
          "The first move is never a refusal. French business culture values courtesy and the appearance of open-mindedness: \"Je vous remercie de cette proposition, qui retient toute notre attention.\" \"Retenir l'attention\" (to receive careful consideration) is a formula of written and spoken business French; it signals interest without commitment.",
        ],
        examples: [
          {
            es: "Camille : Je vous remercie de cette proposition, qui retient toute notre attention.",
            en: "Camille: Thank you for this offer, which we're considering very carefully.",
          },
          { es: "Votre offre retient toute notre attention.", en: "Your offer is receiving our full attention." },
          {
            es: "Merci pour cette proposition, que nous étudions avec soin.",
            en: "Thank you for this proposal, which we are studying carefully.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "The offer is far too low. What should Camille say first?",
            options: [
              "Je vous remercie de cette proposition, qui retient toute notre attention.",
              "C'est hors de question, au revoir.",
              "Vous plaisantez, j'espère ?",
              "D'accord, on prend.",
            ],
            correctIndex: 0,
            explanation: "Thank and show interest first; refusing or accepting outright ends the negotiation.",
          },
        ],
      },
      {
        heading: "Signal the problem, keep the door open",
        body: [
          "Then signal the problem without closing the door: \"Toutefois, en l'état, elle ne nous permet pas de garantir la qualité que vous attendez.\" \"En l'état\" (as it stands) leaves room for change. Note how the objection is framed as a concern for the client's interest (quality), not yours (profit). This is the essence of a good counter-offer.",
        ],
        examples: [
          {
            es: "Camille : Toutefois, en l'état, elle ne nous permet pas de garantir la qualité que vous attendez.",
            en: "Camille: However, as it stands, it doesn't allow us to guarantee the quality you expect.",
          },
          {
            es: "Pierre : Je comprends, mais c'est le budget dont nous disposons.",
            en: "Pierre: I understand, but that's the budget we have.",
          },
          { es: "En l'état, ce calendrier n'est pas tenable.", en: "As it stands, this timetable isn't workable." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[As it stands], the contract does not protect your data.",
            sentence: "___, le contrat ne protège pas vos données.",
            answer: "En l'état",
            explanation: "\"En l'état\" (as it stands) leaves room for change; the objection is framed around the client's interest.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "As it stands, this deadline doesn't allow us to test the software.",
            answer: "En l'état, ce délai ne nous permet pas de tester le logiciel.",
            altAnswers: [
              "En l'état, ce délai ne nous permet pas de tester le logiciel correctement.",
              "En l'état actuel, ce délai ne nous permet pas de tester le logiciel.",
            ],
            explanation: "\"Ne pas permettre de\" + infinitive frames the problem as a risk for the client, not a refusal.",
          },
        ],
      },
      {
        heading: "Justify with facts the client cares about",
        body: [
          "Camille justifies her price with facts the client cares about: \"Nos traducteurs sont tous spécialisés dans le domaine pharmaceutique, et chaque document fait l'objet d'une double relecture. Une erreur dans une notice peut avoir des conséquences graves.\" The last sentence turns the price into a risk question for the client.",
        ],
        examples: [
          {
            es: "Camille : Nos traducteurs sont tous spécialisés dans le domaine pharmaceutique.",
            en: "Camille: All our translators specialise in the pharmaceutical field.",
          },
          {
            es: "Camille : Une erreur dans une notice peut avoir des conséquences graves.",
            en: "Camille: An error in a patient leaflet can have serious consequences.",
          },
          {
            es: "Camille : Permettez-moi de vous expliquer ce que recouvre notre tarif.",
            en: "Camille: Allow me to explain what our rate covers.",
          },
          {
            es: "Camille : Chaque document est relu par un second traducteur spécialisé.",
            en: "Camille: Every document is reviewed by a second specialist translator.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which argument turns the price into a risk question for the client?",
            options: [
              "Une traduction approximative peut entraîner le rejet de votre dossier.",
              "Nos bureaux sont très agréables.",
              "Nous travaillons beaucoup, vous savez.",
              "Nos prix n'ont pas changé depuis 2020.",
            ],
            correctIndex: 0,
            explanation: "Like \"une erreur dans une notice peut avoir des conséquences graves\", it shows what a cheap translation could cost the client.",
          },
        ],
      },
      {
        heading: "The counter: conditional plus condition",
        body: [
          "Then the counter-proposal, in the conditional and with a condition: \"Nous serions prêts à consentir un effort sur le tarif, à condition que le paiement intervienne à trente jours.\" \"Consentir un effort\" (to agree to make an effort) and \"consentir une remise\" (to grant a discount) are formal collocations; \"intervenir\" here means to take place.",
        ],
        examples: [
          {
            es: "Camille : Nous serions prêts à consentir un effort sur le tarif, à condition que le paiement intervienne à trente jours.",
            en: "Camille: We'd be prepared to make an effort on the rate, provided payment is made at thirty days.",
          },
          { es: "Nous pourrions consentir une remise de 5 %.", en: "We could grant a 5% discount." },
          { es: "La livraison interviendra sous huit jours.", en: "Delivery will take place within a week." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it to the conditional, so the counter-proposal sounds open.",
            source: "Nous sommes prêts à consentir une remise.",
            answer: "Nous serions prêts à consentir une remise.",
            altAnswers: ["Nous serions disposés à consentir une remise."],
            explanation: "The conditional (\"serions\") offers without committing: the tone of a counter-proposal.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Nous consentirons un effort, à condition que le paiement intervient à trente jours.",
            answer: "Nous consentirons un effort, à condition que le paiement intervienne à trente jours.",
            explanation: "\"À condition que\" takes the subjunctive: \"intervienne\" (intervenir).",
          },
        ],
      },
      {
        heading: "Donnant-donnant",
        body: [
          "A good counter leaves room to move. Camille does not give a figure yet; she exchanges a concession on price for a concession on payment terms. \"Donnant-donnant\" (give and take, tit for tat) is the French name for this principle: never concede without getting something back.",
        ],
        examples: [
          {
            es: "Pierre : Trente jours, c'est difficile pour nous. Quarante-cinq ?",
            en: "Pierre: Thirty days is difficult for us. Forty-five?",
          },
          {
            es: "Camille : C'est envisageable, si le volume annuel est garanti par contrat.",
            en: "Camille: That's possible, if the annual volume is guaranteed by contract.",
          },
          {
            es: "Je veux bien baisser le prix, mais en échange, j'ai besoin d'un engagement sur deux ans.",
            en: "I'm willing to lower the price, but in return I need a two-year commitment.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "We can lower the price [in return for] a firm order.",
            sentence: "Nous pouvons baisser le prix ___ une commande ferme.",
            answer: "en échange d'",
            altAnswers: ["moyennant", "contre"],
            explanation: "Never concede without getting something back: \"en échange de\" (or \"moyennant\", \"contre\") names what you get.",
          },
        ],
      },
      {
        heading: "Two conditions: si... et que",
        body: [
          "Pierre makes his move: « Si nous garantissons cent mille mots par trimestre et que nous payons à quarante-cinq jours, jusqu'où pouvez-vous descendre ? » Note \"si... et que\": when two conditions follow \"si\", the second is introduced by \"que\" + indicative.",
        ],
        examples: [
          {
            es: "Pierre : Si nous garantissons cent mille mots par trimestre et que nous payons à quarante-cinq jours, jusqu'où pouvez-vous descendre ?",
            en: "Pierre: If we guarantee a hundred thousand words per quarter and pay at forty-five days, how low can you go?",
          },
          {
            es: "Si vous signez aujourd'hui et que vous payez d'avance, la livraison est gratuite.",
            en: "If you sign today and pay in advance, delivery is free.",
          },
          {
            es: "S'il pleut et que le match est annulé, on vous rembourse.",
            en: "If it rains and the match is cancelled, we'll refund you.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "If you increase the volume [and accept] a longer contract, we'll lower the rate.",
            sentence: "Si vous augmentez le volume ___ un contrat plus long, nous baisserons le tarif.",
            answer: "et que vous acceptez",
            explanation: "The second condition after \"si\" is introduced by \"que\" + indicative, not by a second \"si\".",
          },
        ],
      },
      {
        heading: "A figure, with a reservation",
        body: [
          "Camille answers with a figure and a reservation: « Dans ces conditions, nous pourrions descendre à 0,10 euro le mot, sous réserve de validation par mon associé. » \"Dans ces conditions\" (under these conditions) acknowledges his move; \"sous réserve de\" keeps a last exit open, a classic tactic called \"l'autorité supérieure\".",
        ],
        examples: [
          {
            es: "Camille : Dans ces conditions, nous pourrions descendre à 0,10 euro le mot.",
            en: "Camille: Under those conditions, we could go down to 0.10 euros per word.",
          },
          { es: "Camille : Sous réserve de validation par mon associé.", en: "Camille: Subject to my partner's approval." },
          { es: "Dans ces conditions, nous pouvons vous suivre.", en: "Under these conditions, we can go along with you." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Subject to my director's approval, we could accept.",
            answer: "Sous réserve de validation par mon directeur, nous pourrions accepter.",
            altAnswers: [
              "Sous réserve de validation par ma directrice, nous pourrions accepter.",
              "Sous réserve de l'accord de mon directeur, nous pourrions accepter.",
              "Sous réserve de l'accord de ma directrice, nous pourrions accepter.",
              "Sous réserve de l'approbation de mon directeur, nous pourrions accepter.",
            ],
            explanation: "\"Sous réserve de\" keeps a last exit open: the tactic of \"l'autorité supérieure\".",
          },
        ],
      },
      {
        heading: "An agreement in principle",
        body: [
          "They close on an agreement in principle: « Je crois que nous tenons une base de travail. Je vous envoie une proposition écrite d'ici demain. » \"Un accord de principe\" (an agreement in principle) and \"une base de travail\" (a working basis) are not yet a contract, but they lock in progress.",
        ],
        examples: [
          { es: "Pierre : Je crois que nous tenons une base de travail.", en: "Pierre: I think we have a working basis." },
          {
            es: "Camille : Je vous envoie une proposition écrite d'ici demain.",
            en: "Camille: I'll send you a written proposal by tomorrow.",
          },
          {
            es: "Pierre : Parfait. Disons que nous avons un accord de principe.",
            en: "Pierre: Perfect. Let's say we have an agreement in principle.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "I'll send you the contract [by] Friday.",
            sentence: "Je vous envoie le contrat ___ vendredi.",
            answer: "d'ici",
            explanation: "\"D'ici\" + day (by): a firm next step that locks in progress.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "[Allow me] to explain our method.",
        sentence: "___ de vous expliquer notre méthode.",
        answer: "Permettez-moi",
        explanation: "\"Permettez-moi de\" + infinitive introduces a justification politely.",
      },
      {
        type: "multiple-choice",
        question: "Pierre asks for a lower price. What is the best \"donnant-donnant\" reply?",
        options: [
          "C'est envisageable, si vous nous garantissez un volume annuel.",
          "D'accord, nous baissons le prix sans condition.",
          "Non, jamais.",
          "Nous verrons bien, on ne sait jamais.",
        ],
        correctIndex: 0,
        explanation: "Concede only in exchange for something: price for volume.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Under these conditions, we could deliver in two weeks.",
        answer: "Dans ces conditions, nous pourrions livrer en deux semaines.",
        altAnswers: [
          "Dans ces conditions, nous pourrions livrer sous deux semaines.",
          "Dans ces conditions, nous pourrions livrer dans deux semaines.",
          "Dans ces conditions, on pourrait livrer en deux semaines.",
          "Dans ces conditions, nous pourrions livrer en quinze jours.",
        ],
        explanation: "\"Dans ces conditions\" acknowledges the other side's move; the conditional keeps the figure open.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "C'est la marge que nous disposons.",
        answer: "C'est la marge dont nous disposons.",
        explanation: "\"Disposer de\" takes \"dont\" as its relative pronoun: \"la marge dont nous disposons\".",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: We have reached an agreement in principle.",
        words: ["Nous sommes parvenus", "à un accord", "de principe."],
        translation: "We have reached an agreement in principle.",
        explanation: "\"Parvenir à un accord de principe\": not yet a contract, but progress locked in.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "If the volume is guaranteed, we can make an effort.",
        answer: "Si le volume est garanti, nous pouvons faire un effort.",
        altAnswers: [
          "Si le volume est garanti, nous pouvons consentir un effort.",
          "Si le volume est garanti, on peut faire un effort.",
          "Si le volume est garanti, nous pourrons faire un effort.",
        ],
        explanation: "\"Si\" + indicative states a direct condition; \"faire\" or \"consentir un effort\".",
      },
      {
        type: "dictation",
        audio: "Nous vous ferons parvenir une proposition écrite d'ici lundi.",
        explanation: "\"Faire parvenir\" (to send) and \"d'ici\" + day: the closing step.",
      },
      {
        type: "speak",
        text: "Dans ces conditions, nous pourrions descendre à quinze centimes le mot.",
        prompt: "Say it in French: Under those conditions, we could go down to fifteen cents a word.",
        explanation: "A figure in the conditional, after acknowledging the other side's move.",
      },
    ],
  },
  {
    slug: "c2-presentations-negotiation-4",
    level: "FR-C2",
    number: 7,
    title: "Présentations et Négociation, Part 4 of 8",
    summary: "Breaking a deadlock: reformulating, moving from positions to interests, proposing new options and suspending the session, plus the features of French negotiation culture.",
    duration: "19 min",
    sections: [
      {
        heading: "Deadlock and reformulation",
        body: [
          "A negotiation is deadlocked (\"dans l'impasse\", \"au point mort\") when each side repeats its position. The first tool is reformulation: it shows you have listened and often reveals a misunderstanding. \"Si je vous comprends bien, ce qui vous pose problème, ce n'est pas le prix en soi, mais le calendrier de paiement ?\" \"Si je résume votre position\" and \"autrement dit\" do the same job.",
        ],
        examples: [
          { es: "Les discussions sont dans l'impasse depuis trois semaines.", en: "Talks have been deadlocked for three weeks." },
          {
            es: "Si je vous comprends bien, ce qui vous pose problème, c'est le calendrier de paiement ?",
            en: "If I understand you correctly, what bothers you is the payment schedule?",
          },
          {
            es: "Si je résume votre position, vous acceptez le prix mais pas les délais.",
            en: "To sum up your position, you accept the price but not the deadlines.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Talks have been at a standstill since March.",
            answer: "Les discussions sont au point mort depuis mars.",
            altAnswers: [
              "Les négociations sont au point mort depuis mars.",
              "Les discussions sont dans l'impasse depuis mars.",
              "Les négociations sont dans l'impasse depuis mars.",
              "Les pourparlers sont au point mort depuis mars.",
            ],
            explanation: "\"Être au point mort\" or \"dans l'impasse\" (deadlocked), with the present + \"depuis\".",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[In other words], you need more time.",
            sentence: "___, vous avez besoin de plus de temps.",
            answer: "Autrement dit",
            explanation: "\"Autrement dit\", like \"si je résume\", reformulates to show you have listened.",
          },
        ],
      },
      {
        heading: "Position or interest?",
        body: [
          "The second tool distinguishes \"la position\" (what someone demands) from \"l'intérêt\" or \"le besoin\" (why they demand it). Questions that dig for interests: \"Quels sont vos impératifs ?\" (what are your constraints, your must-haves?), \"Qu'est-ce qui est le plus important pour vous dans cet accord ?\", \"Qu'est-ce qui vous empêche d'accepter ?\" French negotiators use \"impératifs\" and \"contraintes\" constantly.",
        ],
        examples: [
          { es: "Quels sont vos impératifs ?", en: "What are your must-haves?" },
          {
            es: "Qu'est-ce qui vous empêche d'accepter notre offre aujourd'hui ?",
            en: "What's stopping you from accepting our offer today?",
          },
          { es: "Quelles sont vos contraintes en matière de délais ?", en: "What are your constraints regarding deadlines?" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which question digs for an interest rather than restating a position?",
            options: [
              "Qu'est-ce qui est le plus important pour vous dans cet accord ?",
              "Vous voulez 10 %, c'est bien ça ?",
              "Vous refusez notre prix ?",
              "Vous maintenez votre demande ?",
            ],
            correctIndex: 0,
            explanation: "An interest is why someone demands something. The other three only repeat what they demand.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Qu'est-ce que vous empêche d'accepter ?",
            answer: "Qu'est-ce qui vous empêche d'accepter ?",
            explanation: "The thing that stops you is the subject of \"empêche\", so it is \"qu'est-ce qui\", not \"qu'est-ce que\".",
          },
        ],
      },
      {
        heading: "Indicative and the pseudo-cleft",
        body: [
          "Reformulation uses the indicative after \"si je comprends bien\" (it is a real hypothesis about what was said), and often a cleft or pseudo-cleft to isolate the real issue: \"ce qui vous pose problème, c'est...\", \"ce que vous cherchez, c'est...\".",
        ],
        examples: [
          {
            es: "Ce que vous cherchez, au fond, c'est de la visibilité sur les volumes.",
            en: "What you're really looking for is visibility on volumes.",
          },
          {
            es: "Si je comprends bien, vous voulez un engagement ferme.",
            en: "If I understand correctly, you want a firm commitment.",
          },
          { es: "Ce qui vous inquiète, c'est la qualité.", en: "What worries you is the quality." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into a pseudo-cleft starting with \"Ce qui vous inquiète\".",
            source: "Le délai de livraison vous inquiète.",
            answer: "Ce qui vous inquiète, c'est le délai de livraison.",
            explanation: "\"Ce qui..., c'est...\" isolates the real issue; \"ce qui\" because it is the subject of \"inquiète\".",
          },
        ],
      },
      {
        heading: "New options on the table",
        body: [
          "Once interests are clear, propose options that did not exist on the table: \"Et si nous envisagions une livraison échelonnée ?\" (what if we considered a staggered delivery?). \"Et si\" + imparfait is a gentle, collaborative suggestion. Others: \"une autre piste serait de\", \"nous pourrions imaginer\", \"que penseriez-vous de...?\", \"il y aurait peut-être une solution intermédiaire\".",
        ],
        examples: [
          { es: "Et si nous envisagions une livraison échelonnée ?", en: "What if we considered a staggered delivery?" },
          {
            es: "Une autre piste serait de prolonger la durée du contrat.",
            en: "Another option would be to extend the length of the contract.",
          },
          {
            es: "Que penseriez-vous d'une phase pilote de trois mois ?",
            en: "What would you think of a three-month pilot phase?",
          },
          { es: "Il y aurait peut-être une solution intermédiaire.", en: "There might be a middle-ground solution." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it into a gentle, collaborative suggestion with \"Et si\".",
            source: "Nous devons partager les frais de transport.",
            answer: "Et si nous partagions les frais de transport ?",
            altAnswers: ["Et si on partageait les frais de transport ?"],
            explanation: "\"Et si\" + imparfait (\"partagions\") turns a demand into a shared idea.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[What would you think of] a two-year contract?",
            sentence: "___ un contrat de deux ans ?",
            answer: "Que penseriez-vous d'",
            altAnswers: ["Que diriez-vous d'"],
            explanation: "\"Que penseriez-vous de...?\" in the conditional proposes an option without pressure; \"de\" elides before \"un\".",
          },
        ],
      },
      {
        heading: "Enlarging the pie",
        body: [
          "\"Élargir le gâteau\" (to enlarge the pie) means adding elements to trade: a longer contract, a different payment schedule, exclusivity, training, a pilot phase. \"Une phase pilote\" or \"une période d'essai\" is often what breaks a deadlock, because it reduces risk for both sides.",
        ],
        examples: [
          {
            es: "Élargissons le gâteau : ajoutons la formation au contrat.",
            en: "Let's enlarge the pie: let's add training to the contract.",
          },
          {
            es: "Une période d'essai réduirait le risque pour les deux parties.",
            en: "A trial period would reduce the risk for both sides.",
          },
          {
            es: "Nous pourrions vous accorder l'exclusivité sur la région.",
            en: "We could grant you exclusivity in the region.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Why does « une phase pilote » often break a deadlock?",
            options: [
              "It reduces the risk for both sides.",
              "It ends the talks quickly.",
              "It lets one side impose its price.",
              "It postpones the decision indefinitely.",
            ],
            correctIndex: 0,
            explanation: "A pilot phase or trial period adds something new to trade and lowers the risk on both sides.",
          },
        ],
      },
      {
        heading: "Suspending is not losing",
        body: [
          "When tempers rise, suspend: \"Je vous propose une courte pause\", \"suspendons la séance un quart d'heure\", \"prenons le temps de consulter nos équipes respectives\", \"reprenons demain à tête reposée\" (with a rested mind). Suspending is not losing; in French culture it is a sign of maturity.",
        ],
        examples: [
          { es: "Je vous propose une courte pause.", en: "I suggest we take a short break." },
          { es: "Reprenons demain à tête reposée.", en: "Let's pick this up tomorrow with fresh minds." },
          { es: "Suspendons la séance un quart d'heure.", en: "Let's adjourn for a quarter of an hour." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: Let's take time to consult our respective teams.",
            words: ["Prenons le temps", "de consulter", "nos équipes", "respectives."],
            translation: "Let's take time to consult our respective teams.",
            explanation: "\"Prenons le temps de\" + infinitive suspends the talks without breaking them off.",
          },
        ],
      },
      {
        heading: "Formality and the love of argument",
        body: [
          "Foreign negotiators often describe their French counterparts in the same terms: formal at first, fond of argument, attentive to hierarchy, and sensitive to the relationship. Formality: titles and \"vous\" are the norm; first names may come later, but \"tu\" rarely does in a negotiation. Love of argument: a French counterpart may contest your reasoning vigorously; this is a sign of engagement, not hostility, and a well-argued reply earns respect.",
        ],
        examples: [
          {
            es: "Ne vous y trompez pas : s'il conteste vos arguments, c'est qu'il est intéressé.",
            en: "Make no mistake: if he challenges your arguments, it means he's interested.",
          },
          {
            es: "Le vouvoiement reste de rigueur, même après plusieurs rencontres.",
            en: "Using \"vous\" remains the rule, even after several meetings.",
          },
          {
            es: "Il a contesté chacun de nos chiffres, puis il a signé.",
            en: "He challenged every one of our figures, then he signed.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Punctuality [is the rule] at these meetings.",
            sentence: "La ponctualité ___ lors de ces réunions.",
            answer: "est de rigueur",
            altAnswers: ["reste de rigueur"],
            explanation: "\"Être de rigueur\" (to be the rule, to be required), as in \"le vouvoiement reste de rigueur\".",
          },
        ],
      },
      {
        heading: "Hierarchy and the business lunch",
        body: [
          "Hierarchy: final decisions are often taken at the top, so the person across the table may lack authority to sign (\"je dois en référer à ma direction\": I must refer it to my management). Plan for that step instead of being frustrated by it. The relationship: \"le déjeuner d'affaires\" remains an institution, long and unhurried, where business is often discussed only over coffee; rushing to the point at the starter can seem impolite.",
        ],
        examples: [
          {
            es: "Je dois en référer à ma direction avant de m'engager.",
            en: "I must refer it to my management before committing.",
          },
          { es: "Les choses sérieuses ont commencé au moment du café.", en: "The serious business began over coffee." },
          {
            es: "Un déjeuner d'affaires peut durer deux heures sans que personne ne parle du contrat.",
            en: "A business lunch can last two hours without anyone mentioning the contract.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "We must refer it to our lawyers before signing.",
            answer: "Nous devons en référer à nos avocats avant de signer.",
            altAnswers: [
              "Nous devons en référer à nos juristes avant de signer.",
              "Il faut en référer à nos avocats avant de signer.",
              "Nous devons en référer à nos avocats avant toute signature.",
            ],
            explanation: "\"En référer à\" (to refer a matter to someone higher up): plan for that step.",
          },
        ],
      },
      {
        heading: "Written follow-up",
        body: [
          "Written follow-up is essential. Agreements are confirmed by email or letter, in precise and formal French, and the logic of the proposal matters as much as the figures. Generalisations have limits, of course: start-ups in Paris and family businesses in the provinces do not negotiate the same way.",
        ],
        examples: [
          {
            es: "Chaque engagement pris oralement sera confirmé par écrit.",
            en: "Every commitment made orally will be confirmed in writing.",
          },
          {
            es: "Je vous confirme par écrit les points sur lesquels nous nous sommes entendus.",
            en: "I'm confirming in writing the points we agreed on.",
          },
          {
            es: "Une start-up parisienne ne négocie pas comme une entreprise familiale.",
            en: "A Paris start-up doesn't negotiate like a family business.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The agreement [will be confirmed] by email tomorrow.",
            sentence: "L'accord ___ par courriel demain.",
            answer: "sera confirmé",
            explanation: "Agreements are confirmed in writing: passive future, \"sera confirmé\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Your French counterpart vigorously contests your figures. What does it most likely mean?",
        options: [
          "He's engaged and interested; answer with solid arguments.",
          "He's insulting you and the deal is over.",
          "He wants you to switch to \"tu\".",
          "He has already decided to sign.",
        ],
        correctIndex: 0,
        explanation: "Argument is a form of engagement in French business culture.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "What is most important to you in this contract?",
        answer: "Qu'est-ce qui est le plus important pour vous dans ce contrat ?",
        altAnswers: [
          "Qu'est-ce qui compte le plus pour vous dans ce contrat ?",
          "Qu'est-ce qui est le plus important pour vous dans ce contrat-là ?",
        ],
        explanation: "A question that digs for interests; \"qu'est-ce qui\" because it is the subject.",
      },
      {
        type: "matching",
        instructions: "Match each phrase to its function in breaking a deadlock.",
        pairs: [
          { left: "Si je vous comprends bien...", right: "Reformulating" },
          { left: "Quels sont vos impératifs ?", right: "Digging for interests" },
          { left: "Et si nous envisagions...?", right: "Proposing a new option" },
          { left: "Suspendons la séance.", right: "Pausing" },
          { left: "Je dois en référer à ma direction.", right: "Referring upwards" },
        ],
        explanation: "Each tool unblocks a different kind of deadlock.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Et si on essaierait une période d'essai ?",
        answer: "Et si on essayait une période d'essai ?",
        explanation: "\"Et si\" takes the imparfait, never the conditional: \"essayait\".",
      },
      {
        type: "dictation",
        audio: "Prenons le temps de réfléchir chacun de notre côté.",
        explanation: "\"Prenons le temps de\" + infinitive: a pause that keeps the talks alive.",
      },
      {
        type: "speak",
        text: "Si je résume, ce qui vous pose problème, c'est le volume.",
        prompt: "Say it in French: To sum up, what bothers you is the volume.",
        explanation: "Reformulate with \"si je résume\" and isolate the issue with \"ce qui..., c'est...\".",
      },
    ],
  },
  {
    slug: "c2-break-deadlock-mission",
    level: "FR-C2",
    number: 8,
    title: "Real-World Mission: Sortir de l'Impasse",
    summary: "A supplier negotiation for a chain of organic bakeries is stuck on price and delivery dates: use reformulation, shared interests and new options to unblock it and reach a provisional agreement.",
    duration: "20 min",
    sections: [
      {
        heading: "The mission",
        body: [
          "The mission: you are Thomas Lefort, buyer for \"Le Fournil Vert\", a chain of twelve organic bakeries in the Lyon region. Your flour supplier, Moulins Bertrand, wants to raise its price by 15% because of a poor harvest, and can only guarantee deliveries every two weeks instead of weekly. You need weekly deliveries (fresh flour, small storage rooms) and cannot absorb more than 6%.",
        ],
        examples: [
          { es: "Le Fournil Vert compte douze boulangeries bio.", en: "Le Fournil Vert has twelve organic bakeries." },
          { es: "Le meunier veut augmenter son prix de 15 %.", en: "The miller wants to raise his price by 15%." },
          { es: "Nous ne pouvons pas absorber plus de 6 %.", en: "We can't absorb more than 6%." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What are Thomas's two must-haves?",
            options: [
              "Weekly deliveries and an increase of no more than 6%",
              "Deliveries every two weeks and a 15% increase",
              "A new supplier and lower quality flour",
              "Bigger storage rooms and a longer contract",
            ],
            correctIndex: 0,
            explanation: "Fresh flour and small storage rooms mean weekly deliveries; the budget cannot absorb more than 6%.",
          },
        ],
      },
      {
        heading: "A dialogue of the deaf",
        body: [
          "After an hour, the discussion with Mme Bertrand, the miller's sales director, is going round in circles: « Quinze pour cent, c'est le minimum. » « Six pour cent, c'est notre maximum. » Each side repeats a position. This is the classic \"dialogue de sourds\" (a dialogue of the deaf).",
        ],
        examples: [
          { es: "Mme Bertrand : Quinze pour cent, c'est le minimum.", en: "Mrs Bertrand: Fifteen per cent is the minimum." },
          { es: "Thomas : Six pour cent, c'est notre maximum.", en: "Thomas: Six per cent is our maximum." },
          { es: "C'est un vrai dialogue de sourds.", en: "It's a real dialogue of the deaf." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The talks [are going round in circles].",
            sentence: "Les discussions ___.",
            answer: "tournent en rond",
            explanation: "\"Tourner en rond\" (to go round in circles): each side repeats its position, a \"dialogue de sourds\".",
          },
        ],
      },
      {
        heading: "First move: reformulate",
        body: [
          "Your first move: stop arguing about numbers and reformulate. « Madame Bertrand, si je vous comprends bien, votre problème n'est pas tant le prix que la hausse de vos propres coûts cette année. C'est bien cela ? » The construction \"ne... pas tant A que B\" (not so much A as B) is precise and elegant.",
        ],
        examples: [
          {
            es: "Si je vous comprends bien, votre problème n'est pas tant le prix que la hausse de vos propres coûts.",
            en: "If I understand correctly, your problem is not so much the price as the rise in your own costs.",
          },
          { es: "C'est bien cela ?", en: "Is that right?" },
          {
            es: "Mme Bertrand : Exactement. La récolte a été catastrophique.",
            en: "Mrs Bertrand: Exactly. The harvest was disastrous.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it to \"ne... pas tant... que\".",
            source: "Le problème, c'est la durée plutôt que le prix.",
            answer: "Le problème n'est pas tant le prix que la durée.",
            explanation: "\"Ne... pas tant A que B\" (not so much A as B): A is the apparent issue, B the real one.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Our problem is not so much the price as the delivery schedule.",
            answer: "Notre problème n'est pas tant le prix que le calendrier de livraison.",
            altAnswers: [
              "Notre problème n'est pas tant le prix que le calendrier des livraisons.",
              "Notre problème n'est pas tant le prix que le rythme de livraison.",
              "Notre problème n'est pas tant le prix que le rythme des livraisons.",
            ],
            explanation: "\"Pas tant le prix que...\" moves the discussion away from numbers towards the real issue.",
          },
        ],
      },
      {
        heading: "State your interest, ask for theirs",
        body: [
          "Now dig for interests on both sides, and state yours openly. « Pour notre part, l'impératif, c'est la fraîcheur : nos fournils n'ont pas de place pour stocker deux semaines de farine. Et vous, quelles sont vos contraintes, au-delà du prix ? » Mme Bertrand reveals that her real difficulty is the cost of small weekly deliveries to twelve separate addresses.",
        ],
        examples: [
          { es: "Pour notre part, l'impératif, c'est la fraîcheur.", en: "For our part, the must-have is freshness." },
          {
            es: "Nos fournils n'ont pas de place pour stocker deux semaines de farine.",
            en: "Our bakehouses have no room to store two weeks' worth of flour.",
          },
          { es: "Et vous, quelles sont vos contraintes, au-delà du prix ?", en: "And what are your constraints, beyond price?" },
          {
            es: "Mme Bertrand : Livrer douze adresses chaque semaine nous coûte une fortune.",
            en: "Mrs Bertrand: Delivering to twelve addresses every week costs us a fortune.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[For our part], the priority is safety.",
            sentence: "___, la priorité, c'est la sécurité.",
            answer: "Pour notre part",
            altAnswers: ["De notre côté"],
            explanation: "\"Pour notre part\" states your own interest openly before asking for theirs.",
          },
          {
            type: "listen-choose",
            audio: "Ce qui nous coûte cher, c'est le transport, pas la farine.",
            question: "What is the speaker's real problem?",
            options: ["The cost of transport", "The price of flour", "The quality of flour", "Late payments"],
            correctIndex: 0,
            explanation: "The pseudo-cleft \"ce qui nous coûte cher, c'est...\" isolates the real interest behind the position.",
          },
        ],
      },
      {
        heading: "Compatible interests, a new option",
        body: [
          "This changes everything. The two interests are compatible: you need weekly flour, she needs fewer delivery points. A new option appears: « Et si nous mutualisions les livraisons ? Nous pourrions faire livrer chaque semaine un seul entrepôt, à Villeurbanne, d'où nos propres camionnettes desservent les boutiques. » \"Mutualiser\" (to pool, share costs) is a key verb of French business.",
        ],
        examples: [
          { es: "Et si nous mutualisions les livraisons ?", en: "What if we pooled the deliveries?" },
          {
            es: "Nous pourrions faire livrer un seul entrepôt, d'où nos camionnettes desservent les boutiques.",
            en: "We could have a single warehouse delivered to, from which our vans serve the shops.",
          },
          { es: "Mutualisons les achats pour obtenir de meilleurs prix.", en: "Let's pool our purchases to get better prices." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "We could share the storage costs.",
            answer: "Nous pourrions mutualiser les frais de stockage.",
            altAnswers: [
              "Nous pourrions partager les frais de stockage.",
              "On pourrait mutualiser les frais de stockage.",
              "Nous pourrions mutualiser les coûts de stockage.",
            ],
            explanation: "\"Mutualiser\" (to pool, share costs) is a key verb of French business; the conditional keeps it a proposal.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "We rent a depot in Lyon, [from which] we serve the whole region.",
            sentence: "Nous louons un dépôt à Lyon, ___ nous desservons toute la région.",
            answer: "d'où",
            explanation: "\"D'où\" (from where) links the logistics: the depot is the starting point.",
          },
        ],
      },
      {
        heading: "The grammar of collaboration",
        body: [
          "Notice the grammar of collaboration: \"et si\" + imparfait, the conditional (\"nous pourrions\"), \"nous\" including both parties, and \"d'où\" (from where) linking the logistics.",
        ],
        examples: [
          { es: "Nous pourrions alterner les jours de livraison.", en: "We could alternate delivery days." },
          { es: "Et si nous partagions le coût du camion ?", en: "What if we shared the cost of the lorry?" },
          { es: "Le dépôt est à Bron, d'où partent nos tournées.", en: "The depot is in Bron, from where our rounds set off." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the demand into a collaborative suggestion with \"Et si nous\".",
            source: "Il faut regrouper les commandes.",
            answer: "Et si nous regroupions les commandes ?",
            altAnswers: ["Et si on regroupait les commandes ?"],
            explanation: "\"Et si\" + imparfait and an inclusive \"nous\": the idea belongs to both sides.",
          },
        ],
      },
      {
        heading: "The price can move",
        body: [
          "With the logistics solved, the price can move. Mme Bertrand: « Dans ces conditions, je pourrais limiter la hausse à 9 %, à condition que vous vous engagiez sur deux ans. » You answer with a final condition: « Neuf pour cent sur deux ans, c'est acceptable, pourvu que le tarif soit révisable à la baisse si la récolte prochaine est bonne. »",
        ],
        examples: [
          {
            es: "Mme Bertrand : Je pourrais limiter la hausse à 9 %, à condition que vous vous engagiez sur deux ans.",
            en: "Mrs Bertrand: I could limit the increase to 9%, provided you commit for two years.",
          },
          {
            es: "Thomas : C'est acceptable, pourvu que le tarif soit révisable à la baisse.",
            en: "Thomas: That's acceptable, provided the price can be revised downwards.",
          },
          { es: "Dans ces conditions, je pourrais faire un geste.", en: "Under these conditions, I could make a gesture." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "C'est acceptable, pourvu que le contrat est révisable chaque année.",
            answer: "C'est acceptable, pourvu que le contrat soit révisable chaque année.",
            explanation: "\"Pourvu que\" takes the subjunctive: \"soit\".",
          },
        ],
      },
      {
        heading: "Closing provisionally",
        body: [
          "You close provisionally, with the reservations that protect both sides: « Je propose que nous en restions là pour aujourd'hui : livraison hebdomadaire à l'entrepôt, hausse de 9 %, engagement sur deux ans, clause de révision. Sous réserve de l'accord de ma direction, nous pourrions signer d'ici la fin du mois. »",
        ],
        examples: [
          { es: "Je propose que nous en restions là pour aujourd'hui.", en: "I suggest we leave it there for today." },
          {
            es: "Livraison hebdomadaire à l'entrepôt, hausse de 9 %, engagement sur deux ans.",
            en: "Weekly delivery to the warehouse, a 9% increase, a two-year commitment.",
          },
          {
            es: "Sous réserve de l'accord de ma direction, nous pourrions signer d'ici la fin du mois.",
            en: "Subject to my management's approval, we could sign by the end of the month.",
          },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: Let's leave it there and meet again on Monday.",
            words: ["Restons-en là", "et revoyons-nous", "lundi."],
            translation: "Let's leave it there and meet again on Monday.",
            explanation: "\"En rester là\" (to leave it there), here in the imperative: \"restons-en là\".",
          },
        ],
      },
      {
        heading: "The recap and the last reservation",
        body: [
          "\"En rester là\" (to leave it there) and the list of nouns recap the deal; \"sous réserve de\" keeps the last approval open. This list is exactly what will appear in the confirmation email you will learn to write in Unit 16.",
        ],
        examples: [
          {
            es: "Mme Bertrand : Je suis ravie que nous ayons trouvé un terrain d'entente.",
            en: "Mrs Bertrand: I'm delighted we've found common ground.",
          },
          { es: "Récapitulons : prix, durée, clause de révision.", en: "Let's recap: price, duration, review clause." },
          { es: "Tout reste suspendu à l'accord de la direction.", en: "Everything still hinges on management's approval." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What does « sous réserve de l'accord de ma direction » do at the close?",
            options: [
              "It keeps the final approval open.",
              "It cancels the agreement.",
              "It accepts all the other side's terms.",
              "It asks for a new meeting.",
            ],
            correctIndex: 0,
            explanation: "\"Sous réserve de\" protects you: the deal is fixed, but the last approval stays open.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "The talks are stuck at « 15 % » versus « 6 % ». What is the best next move?",
        options: [
          "Reformulate and ask about the other side's constraints beyond price.",
          "Repeat « 6 %, c'est notre maximum » more loudly.",
          "Leave the room without a word.",
          "Accept 15% to end the discussion.",
        ],
        correctIndex: 0,
        explanation: "Repeating positions deepens the deadlock; reformulating and exploring interests opens new options.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "I'm delighted we've reached an agreement.",
        answer: "Je suis ravi que nous soyons parvenus à un accord.",
        altAnswers: [
          "Je suis ravie que nous soyons parvenus à un accord.",
          "Je suis ravi que nous ayons trouvé un accord.",
          "Je suis ravie que nous ayons trouvé un accord.",
          "Je suis ravi que nous soyons arrivés à un accord.",
          "Je suis ravie que nous soyons arrivés à un accord.",
        ],
        explanation: "\"Être ravi que\" + subjunctive: \"que nous soyons parvenus\" (parvenir takes être).",
      },
      {
        type: "matching",
        instructions: "Match each element of the final deal to its French wording.",
        pairs: [
          { left: "livraison hebdomadaire", right: "weekly delivery" },
          { left: "engagement sur deux ans", right: "a two-year commitment" },
          { left: "clause de révision", right: "a price review clause" },
          { left: "hausse de 9 %", right: "a 9% increase" },
          { left: "sous réserve de l'accord de ma direction", right: "subject to my management's approval" },
        ],
        explanation: "Nominal phrases recap a deal crisply; they will reappear in the confirmation email.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "We could limit the increase to 5%.",
        answer: "Nous pourrions limiter la hausse à 5 %.",
        altAnswers: [
          "Nous pourrions limiter l'augmentation à 5 %.",
          "On pourrait limiter la hausse à 5 %.",
          "Nous pourrions limiter la hausse à cinq pour cent.",
        ],
        explanation: "\"Limiter à\" + figure, in the conditional: a concession offered, not yet given.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Votre problème n'est pas tant le prix mais la qualité.",
        answer: "Votre problème n'est pas tant le prix que la qualité.",
        explanation: "\"Pas tant... que\": the second term is introduced by \"que\", not \"mais\".",
      },
      {
        type: "dictation",
        audio: "Votre tarif sera révisable à la baisse.",
        explanation: "\"Révisable à la baisse\" (can be revised downwards): a clause that protects the buyer.",
      },
      {
        type: "speak",
        text: "Pour notre part, l'impératif, c'est la régularité des livraisons.",
        prompt: "Say it in French: For our part, the must-have is regular deliveries.",
        explanation: "State your interest openly: \"pour notre part, l'impératif, c'est...\".",
      },
    ],
  },
];

export const FR_C2_U15_WRITING: WriteExercise = {
  type: "write",
  prompt: "You are the commercial director of a company that makes reusable packaging. A large supermarket chain has offered to buy your products at a price you find too low (−20% on your list price, payment at 90 days). Write a formal email to their purchasing director: thank them, show interest, explain why the offer is not acceptable as it stands, and make a structured counter-proposal with at least two conditions and one new option that could unblock the situation.",
  minWords: 250,
  maxWords: 400,
  rubric: [
    "A courteous opening and frame (\"je vous remercie de\", \"votre proposition retient toute notre attention\", \"toutefois, en l'état\").",
    "A justification that speaks to the client's interests (quality, reliability, risk), with figures written the French way (\"20 %\", \"1,5 million\").",
    "A counter-proposal in the conditional (\"nous serions prêts à\", \"nous pourrions envisager\") with conditions using the right moods: \"à condition que\" / \"pourvu que\" / \"à moins que (ne)\" + subjunctive, \"dans la mesure où\" / \"si\" + indicative, \"sous réserve de\" + noun.",
    "A new option (\"et si nous envisagions\", \"une autre piste serait de\") and a formal closing suggesting a next step.",
  ],
  modelAnswer: "Objet : votre proposition du 3 mars – emballages réutilisables\n\nMadame la Directrice,\n\nJe vous remercie de votre proposition du 3 mars, qui retient toute notre attention. Nous serions très heureux de compter votre enseigne parmi nos partenaires, d'autant que nos valeurs en matière de réduction des déchets nous semblent proches des vôtres.\n\nToutefois, en l'état, cette offre ne nous permet pas de garantir le niveau de service que vous êtes en droit d'attendre. Nos emballages sont fabriqués en France, testés pour résister à plus de cinquante cycles de lavage, et livrés sous quarante-huit heures. Une remise de 20 % assortie d'un paiement à quatre-vingt-dix jours mettrait en péril cette qualité, ce qui ne serait ni dans l'intérêt de vos clients ni dans le nôtre.\n\nNous serions néanmoins prêts à consentir un effort significatif. Nous pourrions ainsi vous accorder une remise de 10 %, à condition que le paiement intervienne à quarante-cinq jours et que votre commande annuelle atteigne au moins 1,5 million d'unités. Dans la mesure où ces volumes nous permettraient d'optimiser notre production, une remise supplémentaire de 2 % serait envisageable dès la deuxième année, sous réserve d'un bilan positif de la première.\n\nPar ailleurs, et si nous envisagions une phase pilote de six mois dans une vingtaine de vos magasins ? Elle vous permettrait d'évaluer l'accueil de vos clients avant tout engagement à grande échelle, à moins que vous ne préfériez un déploiement immédiat sur l'ensemble du réseau.\n\nJe me tiens à votre disposition pour en discuter de vive voix et vous propose, si vous en êtes d'accord, une rencontre dans vos locaux au cours de la semaine du 17 mars.\n\nJe vous prie d'agréer, Madame la Directrice, l'expression de mes salutations distinguées.\n\nJulien Masson\nDirecteur commercial, Réemploi & Cie",
  explanation: "The email follows the counter-offer pattern: thanks and interest (\"retient toute notre attention\"), an objection framed as the client's interest (\"en l'état\", \"ne serait ni dans l'intérêt de vos clients ni dans le nôtre\"), then a conditional counter-proposal (\"nous serions prêts\", \"nous pourrions\"). Conditions use their moods: \"à condition que le paiement intervienne et que votre commande atteigne\" (subjunctive), \"dans la mesure où\" + indicative, \"sous réserve de\" + noun, \"à moins que vous ne préfériez\" with the expletive \"ne\". A new option (\"et si nous envisagions une phase pilote\") opens the deadlock, and the figures follow French conventions (\"20 %\", \"1,5 million\").",
};
