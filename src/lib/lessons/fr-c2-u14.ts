// Synced from cheneygross-afk/lengo:src/lib/lessons/fr-c2-u14.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// French C2, Unit 14: Rhetoric & Closing Arguments.

export const FR_C2_U14: Lesson[] = [
  {
    slug: "c2-debate-6",
    level: "FR-C2",
    number: 1,
    title: "L'Art du Débat et de l'Argumentation, Part 6 of 9",
    summary: "Structuring an argument the French way: the dialectical and analytical plans, the introduction from \"accroche\" to \"annonce du plan\", and the transitions that hold the parts together.",
    duration: "19 min",
    sections: [
      {
        heading: "Le plan: why the French announce it",
        body: [
          "Every French student learns, from the lycée onwards, that an argument has \"un plan\": two or three parts, announced in the introduction and followed faithfully. The habit runs through the whole culture: politicians announce \"trois priorités\", ministers \"deux axes\", and the DALF C2 jury expects the same from you. An English-style argument that opens with an anecdote and lets the structure emerge can read, to a French reader, as \"décousu\" (rambling) or \"sans plan\".",
        ],
        examples: [
          { es: "Mon propos s'articulera en trois temps.", en: "My argument will fall into three stages." },
          {
            es: "Ce devoir est riche en idées, mais il manque de plan.",
            en: "This essay is full of ideas, but it lacks structure.",
          },
          {
            es: "Le ministre a présenté trois priorités pour la rentrée.",
            en: "The minister presented three priorities for the new school year.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A French reader calls your essay « décousu ». What is most likely missing?",
            options: [
              "An announced plan with clear parts.",
              "A personal anecdote at the start.",
              "More vocabulary.",
              "A longer conclusion.",
            ],
            correctIndex: 0,
            explanation: "\"Décousu\" (rambling) is the French verdict on an argument that lets its structure emerge instead of announcing \"un plan\" and following it.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "My presentation [will fall into] two parts.",
            sentence: "Mon exposé ___ en deux parties.",
            answer: "s'articulera",
            altAnswers: ["se divisera", "se déroulera"],
            explanation: "\"S'articuler en\" (to be organised into): the future announces the plan before you follow it.",
          },
        ],
      },
      {
        heading: "The dialectical plan",
        body: [
          "\"Le plan dialectique\" is the classic for a yes/no question (\"Faut-il interdire les écrans à l'école ?\"): \"thèse\" (one side, with its best arguments), \"antithèse\" (the other side, or the limits of the first), \"synthèse\" (a third position that goes beyond both, not a lukewarm compromise). The synthesis is where you show your thinking: \"la question n'est pas tant de savoir si..., que de savoir comment...\".",
        ],
        examples: [
          {
            es: "Nous verrons d'abord les arguments en faveur de l'interdiction, puis ses limites, avant de proposer une autre approche.",
            en: "We will first look at the arguments for a ban, then its limits, before proposing another approach.",
          },
          {
            es: "La question n'est pas tant de savoir s'il faut des écrans à l'école que de savoir quel usage en faire.",
            en: "The question is not so much whether schools should have screens as what use to make of them.",
          },
          { es: "Faut-il interdire la voiture en centre-ville ?", en: "Should cars be banned from city centres?" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "The topic is « Faut-il rendre le vote obligatoire ? ». Which plan suits it best?",
            options: [
              "Un plan dialectique : thèse, antithèse, synthèse.",
              "Un plan analytique : constat, causes, conséquences.",
              "Pas de plan : une anecdote et des réflexions libres.",
              "Un plan chronologique de l'histoire du vote.",
            ],
            correctIndex: 0,
            explanation: "A yes/no question calls for the dialectical plan; the analytical plan suits a problem to explain.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The question [is not so much whether] the tax is fair as how to make it effective.",
            sentence: "La question ___ l'impôt est juste que de savoir comment le rendre efficace.",
            answer: "n'est pas tant de savoir si",
            explanation: "The synthesis moves beyond yes or no: \"la question n'est pas tant de savoir si..., que de savoir comment...\".",
          },
        ],
      },
      {
        heading: "Analytical and thematic plans",
        body: [
          "\"Le plan analytique\" fits a problem to be explained rather than a question to be decided: \"constat\" (the situation), \"causes\", \"conséquences\" or \"solutions\". A third option, \"le plan thématique\", sorts arguments by domain (économique, social, environnemental). Whatever the plan, each part carries one idea, stated at its start.",
        ],
        examples: [
          {
            es: "Dans un premier temps, nous dresserons un constat ; dans un second temps, nous en analyserons les causes.",
            en: "First we'll set out the situation; then we'll analyse its causes.",
          },
          {
            es: "En dernier lieu, nous examinerons les solutions envisageables.",
            en: "Finally, we'll examine the possible solutions.",
          },
          {
            es: "Sur le plan économique, la mesure coûte cher ; sur le plan social, elle rassure.",
            en: "Economically the measure is costly; socially it reassures.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "The topic is « Le décrochage scolaire en France », a problem to explain rather than a question to decide. Which plan fits?",
            options: [
              "Constat, causes, solutions (le plan analytique).",
              "Thèse, antithèse, synthèse (le plan dialectique).",
              "No plan: free reflections.",
              "Three anecdotes in a row.",
            ],
            correctIndex: 0,
            explanation: "A problem to be explained calls for the analytical plan: the situation, its causes, then consequences or solutions. The dialectical plan suits a yes/no question.",
          },
        ],
      },
      {
        heading: "The introduction: accroche and problématique",
        body: [
          "A French introduction has three fixed moves. \"L'accroche\" (the hook) catches attention: a fact, a quotation, a recent event, a paradox. Unlike an English hook, it is short, one or two sentences, and leads straight to the subject. Then come \"la présentation du sujet\" (defining the key terms) and \"la problématique\": the real question behind the topic, often introduced by \"dès lors\", \"on peut alors se demander\" or \"il convient de s'interroger sur\".",
        ],
        examples: [
          {
            es: "En 2019, à peine 3 % des salariés français télétravaillaient régulièrement ; ils sont aujourd'hui près d'un quart.",
            en: "In 2019 barely 3% of French employees worked from home regularly; today it's nearly a quarter. (accroche)",
          },
          {
            es: "Il convient de s'interroger sur les conséquences de ce bouleversement.",
            en: "We should ask ourselves what the consequences of this upheaval are.",
          },
          {
            es: "« Le travail éloigne de nous trois grands maux : l'ennui, le vice et le besoin », écrivait Voltaire.",
            en: "'Work keeps three great evils away from us: boredom, vice and want,' wrote Voltaire. (accroche by quotation)",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence works as an accroche for an essay on cycling in cities?",
            options: [
              "À Paris, le nombre de cyclistes a doublé en cinq ans.",
              "Dans cet essai, je vais parler du vélo.",
              "Le vélo, c'est bien.",
              "Nous verrons d'abord les avantages du vélo.",
            ],
            correctIndex: 0,
            explanation: "A French accroche is short and catches attention with a fact, a quotation or a paradox. Announcing the topic or the plan comes later.",
          },
        ],
      },
      {
        heading: "Dans quelle mesure, en quoi",
        body: [
          "The \"problématique\" is not a repetition of the title. If the title is \"Le télétravail\", the problématique might be \"Dans quelle mesure le télétravail redéfinit-il la frontière entre vie professionnelle et vie privée ?\" \"Dans quelle mesure\" (to what extent) and \"en quoi\" (in what way) are the favourite openings because they force a nuanced answer, not yes or no.",
        ],
        examples: [
          {
            es: "Dès lors, on peut se demander dans quelle mesure le télétravail redéfinit la frontière entre vie professionnelle et vie privée.",
            en: "One may then ask to what extent remote work is redrawing the line between work and private life. (the central question)",
          },
          {
            es: "En quoi cette évolution constitue-t-elle une rupture ?",
            en: "In what way does this development represent a break with the past?",
          },
          {
            es: "Dans quelle mesure les réseaux sociaux menacent-ils la démocratie ?",
            en: "To what extent do social networks threaten democracy?",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (a \"problématique\").",
            source: "To what extent is remote work changing our relationship with work?",
            answer: "Dans quelle mesure le télétravail change-t-il notre rapport au travail ?",
            altAnswers: [
              "Dans quelle mesure le télétravail modifie-t-il notre rapport au travail ?",
              "Dans quelle mesure le télétravail transforme-t-il notre rapport au travail ?",
              "Dans quelle mesure le télétravail change-t-il notre relation au travail ?",
            ],
            explanation: "\"Dans quelle mesure\" + complex inversion (noun + verb + \"-t-il\"): the classic form of a \"problématique\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the yes/no question into a problématique, starting with \"Dans quelle mesure\".",
            source: "Les jeux vidéo rendent-ils les enfants violents ?",
            answer: "Dans quelle mesure les jeux vidéo rendent-ils les enfants violents ?",
            explanation: "\"Dans quelle mesure\" (to what extent) forces a nuanced answer; the complex inversion \"les jeux vidéo rendent-ils\" stays.",
          },
        ],
      },
      {
        heading: "L'annonce du plan",
        body: [
          "Finally, \"l'annonce du plan\": \"Nous verrons dans un premier temps..., puis..., avant de...\" Use \"nous\" (the academic we) or impersonal forms; \"je\" is acceptable in an oral exposé, more rarely in writing. The tense is the future: \"nous verrons\", \"nous montrerons\", \"nous examinerons\".",
        ],
        examples: [
          {
            es: "Nous verrons dans un premier temps les bénéfices du télétravail, puis ses effets pervers, avant de proposer quelques pistes.",
            en: "We'll first see the benefits of remote work, then its side effects, before proposing a few ideas.",
          },
          {
            es: "Nous montrerons ensuite que cette réforme a ses limites.",
            en: "We will then show that this reform has its limits.",
          },
          { es: "Nous examinerons enfin les solutions possibles.", en: "Finally, we will examine the possible solutions." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[We will first see] the benefits, then the limits.",
            sentence: "___ les bénéfices, puis les limites.",
            answer: "Nous verrons d'abord",
            altAnswers: ["Nous verrons dans un premier temps", "Nous examinerons d'abord", "Nous étudierons d'abord"],
            explanation: "The announcement of the plan uses the future and the academic \"nous\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Nous voyons dans un premier temps les causes, puis les conséquences.",
            answer: "Nous verrons dans un premier temps les causes, puis les conséquences.",
            explanation: "The announcement of the plan is in the future: \"nous verrons\", \"nous montrerons\", \"nous examinerons\".",
          },
        ],
      },
      {
        heading: "Transitions hold the parts together",
        body: [
          "Between parts, French expects \"une transition\": one or two sentences that sum up the part just finished and announce the next. They make the structure audible, which matters even more in an oral. Model: \"Si le télétravail offre des avantages indéniables, il n'est pas sans effets pervers. C'est ce que nous allons voir à présent.\"",
        ],
        examples: [
          {
            es: "Si le télétravail offre des avantages indéniables, il n'est pas sans effets pervers.",
            en: "While remote work offers undeniable advantages, it is not without side effects.",
          },
          { es: "C'est ce que nous allons voir à présent.", en: "This is what we will now examine." },
          {
            es: "Ces avantages ne doivent pas masquer les risques : c'est l'objet de notre seconde partie.",
            en: "These advantages must not hide the risks: that is the subject of our second part.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the two sentences into a transition, with a concessive \"si\".",
            source: "Le vélo est rapide en ville. Il reste dangereux.",
            answer: "Si le vélo est rapide en ville, il reste dangereux.",
            altAnswers: ["Si le vélo est rapide en ville, il n'en reste pas moins dangereux."],
            explanation: "A transition sums up the part just finished (\"si le vélo est rapide\") and announces the next (its danger). Concessive \"si\" means while, not if.",
          },
        ],
      },
      {
        heading: "Connectors of the plan",
        body: [
          "The connectors of the plan: \"dans un premier temps / dans un second temps / en dernier lieu\", \"d'abord / ensuite / enfin\", \"tout d'abord\" (first of all), \"en premier lieu\", \"après avoir montré que..., nous verrons...\" (with the past infinitive), \"il reste à examiner\". Avoid \"premièrement, deuxièmement\" in an essay: they sound like a list, not an argument.",
        ],
        examples: [
          {
            es: "Après avoir montré les bénéfices de cette réforme, il convient d'en examiner les limites.",
            en: "Having shown the benefits of this reform, we should examine its limits.",
          },
          { es: "Il reste à examiner la question du financement.", en: "The question of funding remains to be examined." },
          { es: "En dernier lieu, nous proposerons une voie médiane.", en: "Lastly, we will propose a middle way." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which connector should you avoid in a French essay?",
            options: ["premièrement", "dans un premier temps", "en dernier lieu", "il reste à examiner"],
            correctIndex: 0,
            explanation: "\"Premièrement, deuxièmement\" sound like a list, not an argument. The others are the connectors of the plan.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Après avoir montrer les causes, nous verrons les solutions.",
            answer: "Après avoir montré les causes, nous verrons les solutions.",
            explanation: "\"Après avoir\" + past participle: the past infinitive is \"avoir montré\", not \"avoir montrer\".",
          },
        ],
      },
      {
        heading: "Transitions pivot on a concession",
        body: [
          "A transition often uses concession to pivot: \"s'il est vrai que\", \"certes... mais\", \"pour autant\". This mirrors the dialectical plan: the antithesis is introduced as a limit of the thesis, not as a contradiction from nowhere. A good test: could someone who read only your transitions reconstruct your argument? If so, they are doing their job.",
        ],
        examples: [
          {
            es: "Ces arguments, pour solides qu'ils soient, ne suffisent pas à emporter la conviction.",
            en: "These arguments, solid as they are, are not enough to convince.",
          },
          {
            es: "Certes, la mesure rassure ; pour autant, elle ne règle rien.",
            en: "Admittedly the measure is reassuring; that doesn't mean it solves anything.",
          },
          {
            es: "S'il est vrai que l'école s'est numérisée, elle n'a pas changé de mission.",
            en: "While it's true that schools have gone digital, their mission hasn't changed.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "These figures, [however solid they may be], prove nothing.",
            sentence: "Ces chiffres, ___, ne prouvent rien.",
            answer: "pour solides qu'ils soient",
            altAnswers: ["si solides qu'ils soient", "aussi solides qu'ils soient"],
            explanation: "\"Pour + adjective + que\" + subjunctive concedes a quality before the pivot, like \"pour solides qu'ils soient\"; the adjective agrees with \"ces chiffres\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Change \"d'abord... ensuite\" to \"dans un premier temps... dans un second temps\".",
        source: "D'abord, nous décrirons la situation ; ensuite, nous proposerons des solutions.",
        answer: "Dans un premier temps, nous décrirons la situation ; dans un second temps, nous proposerons des solutions.",
        explanation: "\"Dans un premier temps / dans un second temps\" are the connectors of an announced plan; \"d'abord, ensuite\" are fine but less formal.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "It remains to examine the impact on young people.",
        answer: "Il reste à examiner l'impact sur les jeunes.",
        altAnswers: ["Il reste à examiner les effets sur les jeunes."],
        explanation: "\"Il reste à\" + infinitive announces what is still to be done: a typical transition to the last part.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "[In what way] does this law represent progress?",
        sentence: "___ cette loi constitue-t-elle un progrès ?",
        answer: "En quoi",
        explanation: "\"En quoi\" (in what way) opens a problématique that cannot be answered by yes or no.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "[One may then ask] whether the measure is fair.",
        sentence: "___ si la mesure est juste.",
        answer: "On peut alors se demander",
        altAnswers: ["Dès lors, on peut se demander", "On peut dès lors se demander"],
        explanation: "\"On peut alors se demander\" introduces the \"problématique\" as an indirect question.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Finally, we will examine the cost.",
        words: ["En dernier lieu,", "nous", "examinerons", "le coût."],
        translation: "Finally, we will examine the cost.",
        explanation: "\"En dernier lieu\" announces the last part; the future \"examinerons\" belongs to the plan.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "This is what we will see in the second part.",
        answer: "C'est ce que nous verrons dans la seconde partie.",
        altAnswers: [
          "C'est ce que nous verrons dans la deuxième partie.",
          "C'est ce que nous allons voir dans la seconde partie.",
          "C'est ce que nous allons voir dans la deuxième partie.",
        ],
        explanation: "A transition announces the next part in the future.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Your argument is interesting, but it lacks a plan.",
        answer: "Votre argumentation est intéressante, mais elle manque de plan.",
        altAnswers: [
          "Votre raisonnement est intéressant, mais il manque de plan.",
          "Votre argumentation est intéressante, mais elle manque de structure.",
        ],
        explanation: "\"Manquer de\" + noun without an article: \"elle manque de plan\".",
      },
      {
        type: "multiple-choice",
        question: "Which sentence is a \"problématique\" rather than a restatement of the title?",
        options: [
          "Dans quelle mesure les réseaux sociaux transforment-ils le débat démocratique ?",
          "Les réseaux sociaux et la démocratie.",
          "Nous allons parler des réseaux sociaux.",
          "Les réseaux sociaux existent depuis vingt ans.",
        ],
        correctIndex: 0,
        explanation: "A \"problématique\" asks a real question that calls for a nuanced answer.",
      },
      {
        type: "matching",
        instructions: "Match each element to its role in a French introduction or plan.",
        pairs: [
          { left: "l'accroche", right: "the opening hook" },
          { left: "la problématique", right: "the central question" },
          { left: "l'annonce du plan", right: "the outline of the parts" },
          { left: "la synthèse", right: "the position that goes beyond thesis and antithesis" },
          { left: "la transition", right: "the link summing up one part and announcing the next" },
        ],
        explanation: "These terms are the shared vocabulary of every French teacher and examiner.",
      },
      {
        type: "listen-choose",
        audio: "Notre réflexion s'articulera en deux temps.",
        question: "What does it mean?",
        options: [
          "Our reflection will fall into two stages.",
          "Our reflection will take two hours.",
          "We will reflect twice.",
          "Our reflection is late.",
        ],
        correctIndex: 0,
        explanation: "\"S'articuler en deux temps\": the plan is announced in the future before it is followed.",
      },
      {
        type: "speak",
        text: "Nous verrons d'abord les causes du phénomène, puis ses conséquences.",
        prompt: "Say it in French: We will first look at the causes of the phenomenon, then its consequences.",
        explanation: "The announcement of an analytical plan: future tense, academic \"nous\", and the connectors \"d'abord... puis\".",
      },
    ],
  },
  {
    slug: "c2-rhetorical-devices-style-workshop",
    level: "FR-C2",
    number: 2,
    title: "Style Workshop: Les Procédés qui Convainquent",
    summary: "Strengthen a flat argument with analogy, the ternary rhythm, anaphora, the rhetorical question and a concrete example, without sliding into bombast.",
    duration: "18 min",
    sections: [
      {
        heading: "The flat version",
        body: [
          "Start from a flat paragraph, correct but lifeless: \"La bibliothèque municipale est utile. Beaucoup de gens l'utilisent. Il ne faut pas la fermer.\" Nothing is wrong, and nothing convinces. This workshop adds one device at a time and watches the effect.",
        ],
        examples: [
          {
            es: "La bibliothèque municipale est utile. Beaucoup de gens l'utilisent. Il ne faut pas la fermer.",
            en: "The town library is useful. Many people use it. It shouldn't be closed. (flat)",
          },
          {
            es: "Le parc est agréable. Les familles y vont. Il faut le garder.",
            en: "The park is pleasant. Families go there. It must be kept. (flat)",
          },
          { es: "Rien n'est faux, mais rien ne convainc.", en: "Nothing is wrong, but nothing convinces." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What is wrong with « Le bus est utile. Les gens le prennent. Il ne faut pas le supprimer. »?",
            options: [
              "Nothing is incorrect, but it is lifeless: no device makes it convincing.",
              "It is full of grammar mistakes.",
              "It is far too emotional.",
              "It is too long for a speech.",
            ],
            correctIndex: 0,
            explanation: "The flat version is correct French and convinces no one. The workshop adds one device at a time to a paragraph like this.",
          },
        ],
      },
      {
        heading: "Le rythme ternaire",
        body: [
          "First device, \"le rythme ternaire\": three elements of similar length, ideally growing (\"une gradation\"). French rhetoric has loved it since Cicero, and French ears expect it at strong moments: \"La bibliothèque, c'est un lieu pour lire, pour apprendre, pour se rencontrer.\" Two elements sound incomplete; four sound like a list. Three sound finished.",
        ],
        examples: [
          {
            es: "La bibliothèque, c'est un lieu pour lire, pour apprendre, pour ne plus être seul.",
            en: "The library is a place to read, to learn, to be alone no longer.",
          },
          {
            es: "Ce projet est injuste, coûteux et, surtout, inutile.",
            en: "This project is unfair, costly and, above all, useless.",
          },
          { es: "Il faut écouter, comprendre, puis décider.", en: "We must listen, understand, then decide." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which version has the most effective ternary rhythm?",
            options: [
              "Ce projet est injuste, coûteux et, surtout, inutile.",
              "Ce projet est injuste et coûteux.",
              "Ce projet est injuste, coûteux, mal pensé, tardif, inutile et mal financé.",
              "Ce projet est injuste, et en plus il coûte, et il ne sert à rien je pense.",
            ],
            correctIndex: 0,
            explanation: "Three parallel adjectives with a climax (\"surtout, inutile\"). Two feels incomplete; six is a list; the last option breaks the parallelism.",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: The park is a place to play, to rest, to meet.",
            words: ["Le parc,", "c'est un lieu", "pour jouer,", "pour se reposer,", "pour se rencontrer."],
            translation: "The park is a place to play, to rest, to meet.",
            explanation: "Three parallel members, each with \"pour\": two would sound incomplete, four like a list.",
          },
        ],
      },
      {
        heading: "Parallel members, rising to a climax",
        body: [
          "The rhythm works best when the three members are grammatically parallel (three infinitives, three nouns, three clauses) and when the last one is longest or strongest. Compare \"pour lire, apprendre, et aussi parce qu'on y croise des gens\" (broken) with \"pour lire, pour apprendre, pour ne plus être seul\" (parallel, with emotional climax).",
        ],
        examples: [
          {
            es: "Nous avons hérité d'un pays, d'une langue, d'une histoire.",
            en: "We have inherited a country, a language, a history.",
          },
          {
            es: "Ce n'est pas une dépense, c'est un investissement, c'est même une nécessité.",
            en: "It isn't an expense, it's an investment; indeed it's a necessity.",
          },
          {
            es: "Ce bus, on le prend pour travailler, pour se soigner, pour ne pas rester isolé.",
            en: "We take this bus to work, to see a doctor, not to be cut off.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it so the three members are parallel: three infinitives introduced by \"à\".",
            source: "Le marché sert à acheter, à la discussion et pour voir ses voisins.",
            answer: "Le marché sert à acheter, à discuter et à voir ses voisins.",
            explanation: "The ternary rhythm works when the members are grammatically parallel: three infinitives, each after \"à\". A noun and a \"pour\" clause break it.",
          },
        ],
      },
      {
        heading: "L'anaphore",
        body: [
          "\"L'anaphore\" repeats the same word or phrase at the start of successive sentences: \"Fermer la bibliothèque, c'est fermer une porte aux enfants. Fermer la bibliothèque, c'est fermer une fenêtre aux anciens. Fermer la bibliothèque, c'est fermer les yeux sur ce qui nous relie.\" It hammers the idea in and builds emotion. Its risk is mechanical repetition: three occurrences are usually enough in writing, a few more in a speech.",
        ],
        examples: [
          {
            es: "Fermer la bibliothèque, c'est fermer une porte aux enfants.",
            en: "Closing the library means closing a door on children.",
          },
          {
            es: "Fermer la bibliothèque, c'est fermer une fenêtre aux anciens.",
            en: "Closing the library means closing a window on the elderly.",
          },
          {
            es: "Vendre ce parc, c'est vendre l'enfance du quartier. Vendre ce parc, c'est vendre son air.",
            en: "Selling this park means selling the neighbourhood's childhood. Selling this park means selling its air.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Cutting this bus line means] isolating the villages.",
            sentence: "___ isoler les villages.",
            answer: "Supprimer cette ligne, c'est",
            altAnswers: ["Supprimer cette ligne de bus, c'est"],
            explanation: "The infinitive as subject, picked up by \"c'est\": the frame an anaphora repeats at the start of each sentence.",
          },
          {
            type: "multiple-choice",
            question: "In a written text, how many times should an anaphora usually repeat its phrase?",
            options: ["About three times", "Once", "Seven or eight times", "As often as possible"],
            correctIndex: 0,
            explanation: "Three occurrences hammer the idea in; more risks sounding mechanical in writing (a speech can take a few more).",
          },
        ],
      },
      {
        heading: "The rhetorical question",
        body: [
          "\"La question rhétorique\" (or \"oratoire\") expects no answer; it makes the audience give the answer silently, which is more persuasive than being told. \"Qui peut sérieusement croire qu'on économisera de l'argent en fermant le seul lieu culturel du quartier ?\" Its strength is that a negative answer is obvious; its danger is sounding sarcastic. A negative rhetorical question presents an obvious yes: \"N'est-ce pas là notre rôle ?\"",
        ],
        examples: [
          {
            es: "Qui peut sérieusement croire qu'on économisera de l'argent en fermant le seul lieu culturel du quartier ?",
            en: "Who can seriously believe we'll save money by closing the only cultural venue in the area?",
          },
          { es: "N'est-ce pas là notre rôle ?", en: "Isn't that precisely our role?" },
          {
            es: "Faut-il attendre que le quartier se vide pour réagir ?",
            en: "Must we wait until the area empties before we react?",
          },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "N'est-ce pas cela, la justice sociale ?",
            question: "What answer does the speaker expect?",
            options: [
              "Yes, that is social justice.",
              "No, that isn't social justice.",
              "No answer: they want information.",
              "They don't know what social justice is.",
            ],
            correctIndex: 0,
            explanation: "A negative rhetorical question presents an obvious yes: the audience supplies the answer silently.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the statement into a negative rhetorical question, starting with \"N'est-ce pas\".",
            source: "C'est notre devoir.",
            answer: "N'est-ce pas notre devoir ?",
            altAnswers: ["N'est-ce pas là notre devoir ?"],
            explanation: "\"N'est-ce pas...?\" makes the audience say yes for you, which persuades more than being told.",
          },
        ],
      },
      {
        heading: "The grammar behind the devices",
        body: [
          "Notice the grammar that supports these devices: inversion in the formal question (\"Peut-on vraiment...?\"), the cleft \"c'est... que\" for focus, and the infinitive as subject (\"Fermer la bibliothèque, c'est...\"), which turns an action into a topic.",
        ],
        examples: [
          {
            es: "Peut-on vraiment parler d'économie quand on sacrifie l'avenir ?",
            en: "Can we really talk about savings when we're sacrificing the future?",
          },
          { es: "C'est la jeunesse que nous sacrifions.", en: "It's young people we are sacrificing." },
          { es: "Investir dans l'école, c'est préparer l'avenir.", en: "Investing in schools is preparing the future." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it formal, with inversion.",
            source: "On peut vraiment parler de progrès ?",
            answer: "Peut-on vraiment parler de progrès ?",
            explanation: "Inversion is the grammar of the formal rhetorical question: \"peut-on\" instead of intonation alone.",
          },
        ],
      },
      {
        heading: "L'analogie",
        body: [
          "\"L'analogie\" explains the unfamiliar through the familiar: \"Une ville sans bibliothèque, c'est une maison sans fenêtres : on y vit, mais on n'y voit plus rien.\" It must be immediately clear, and the audience must accept the comparison; an analogy that can be turned against you (\"une fenêtre, ça se remplace\") is worse than none.",
        ],
        examples: [
          {
            es: "Une ville sans bibliothèque, c'est une maison sans fenêtres : on y vit, mais on n'y voit plus rien.",
            en: "A town without a library is a house without windows: you can live there, but you can't see a thing.",
          },
          {
            es: "Un quartier sans commerces, c'est un corps sans cœur.",
            en: "A neighbourhood without shops is a body without a heart.",
          },
          {
            es: "Une rue sans commerces, c'est une rue qui s'éteint.",
            en: "A street without shops is a street that's dying out.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "A school without a library is a garden without water.",
            answer: "Une école sans bibliothèque, c'est un jardin sans eau.",
            explanation: "The analogy explains through the familiar, with the frame \"A sans B, c'est C sans D\". It must be clear at once and hard to turn against you.",
          },
        ],
      },
      {
        heading: "The concrete example",
        body: [
          "\"L'exemple concret\" anchors the argument in reality, and French debaters often underuse it: \"Mardi dernier, j'ai vu une dame de quatre-vingts ans apprendre à remplir sa déclaration d'impôts en ligne avec l'aide d'une bibliothécaire.\" One precise example convinces more than three abstract statistics, especially at the end of a part.",
        ],
        examples: [
          {
            es: "Mardi dernier, j'ai vu une dame de quatre-vingts ans apprendre à remplir sa déclaration d'impôts en ligne.",
            en: "Last Tuesday I saw an eighty-year-old woman learn to fill in her tax return online.",
          },
          {
            es: "Un exemple précis vaut mieux que trois statistiques abstraites.",
            en: "One precise example is worth more than three abstract statistics.",
          },
          {
            es: "L'an dernier, la bibliothèque a accueilli plus de quarante mille visiteurs, soit plus que la piscine.",
            en: "Last year the library welcomed over forty thousand visitors, more than the swimming pool.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You want to end a part of your speech on the swimming pool. Which line convinces most?",
            options: [
              "Hier, j'ai vu un garçon de huit ans nager sa première longueur, sous les applaudissements de sa grand-mère.",
              "Les piscines sont importantes pour beaucoup de gens.",
              "Selon diverses études, le sport est bon pour la santé.",
              "La piscine, ce temple éternel de l'eau et de la vie...",
            ],
            correctIndex: 0,
            explanation: "One precise example anchors the argument in reality, especially at the end of a part. The others are vague, abstract or bombastic.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Last year, the pool welcomed twenty thousand children.",
            answer: "L'an dernier, la piscine a accueilli vingt mille enfants.",
            altAnswers: ["L'année dernière, la piscine a accueilli vingt mille enfants."],
            explanation: "A precise figure about a real place does the work of a concrete example.",
          },
        ],
      },
      {
        heading: "The bombast trap",
        body: [
          "The trap is \"l'emphase\" or \"la grandiloquence\" (bombast): stacking devices until the speech sounds hollow. \"La bibliothèque, ce phare éternel de l'humanité, ce temple sacré du savoir universel...\" French juries punish this as \"ampoulé\" (pompous). The rule of the workshop: one device per idea, and always a fact under the figure.",
        ],
        examples: [
          {
            es: "La bibliothèque, ce phare éternel de l'humanité, ce temple sacré du savoir universel...",
            en: "The library, that eternal lighthouse of humanity, that sacred temple of universal knowledge... (bombast)",
          },
          {
            es: "Le style est un peu ampoulé : on ne voit plus l'argument.",
            en: "The style is a bit pompous: the argument gets lost.",
          },
          {
            es: "Un seul procédé par idée, et toujours un fait sous la figure.",
            en: "One device per idea, and always a fact under the figure.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence slides into bombast?",
            options: [
              "Le parc, ce poumon sacré, ce sanctuaire éternel de la nature universelle...",
              "Le parc a accueilli trente mille promeneurs l'an dernier.",
              "Vendre le parc, c'est vendre l'enfance du quartier.",
              "Un quartier sans parc, c'est une maison sans fenêtres.",
            ],
            correctIndex: 0,
            explanation: "Stacked grand images with no fact underneath (\"poumon sacré\", \"sanctuaire éternel\") sound hollow: French juries call this \"ampoulé\".",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The jury found his conclusion [pompous].",
            sentence: "Le jury a trouvé sa conclusion ___.",
            answer: "ampoulée",
            altAnswers: ["grandiloquente"],
            explanation: "\"Ampoulé\" (pompous, bombastic) agrees with \"sa conclusion\": \"ampoulée\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The market is a place to shop, to chat, to feel less alone.",
        answer: "Le marché, c'est un lieu pour faire ses courses, pour discuter, pour se sentir moins seul.",
        altAnswers: [
          "Le marché, c'est un endroit pour faire ses courses, pour discuter, pour se sentir moins seul.",
          "Le marché est un lieu pour faire ses courses, pour discuter, pour se sentir moins seul.",
        ],
        explanation: "Ternary rhythm: three parallel \"pour\" + infinitive members, the last one the most emotional.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Who can seriously believe that one more motorway will reduce traffic jams?",
        answer: "Qui peut sérieusement croire qu'une autoroute de plus réduira les embouteillages ?",
        altAnswers: [
          "Qui peut sérieusement croire qu'une autoroute supplémentaire réduira les embouteillages ?",
          "Qui peut sérieusement croire qu'une autoroute de plus va réduire les embouteillages ?",
        ],
        explanation: "A rhetorical question with an obvious no: the audience answers it silently.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "It isn't a luxury, it's a need; indeed, it's a right.",
        answer: "Ce n'est pas un luxe, c'est un besoin, c'est même un droit.",
        altAnswers: ["Ce n'est pas un luxe, c'est un besoin ; c'est même un droit."],
        explanation: "A gradation in three steps, the strongest last, held together by \"c'est\" and \"même\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Turn it into a rhetorical question, starting with \"Faut-il\".",
        source: "Il faut attendre la fermeture de l'usine pour agir.",
        answer: "Faut-il attendre la fermeture de l'usine pour agir ?",
        explanation: "Inverting \"il faut\" turns a statement into a question whose answer (no) is obvious.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "[Isn't that] what we promised the voters?",
        sentence: "___ ce que nous avons promis aux électeurs ?",
        answer: "N'est-ce pas",
        altAnswers: ["N'est-ce pas là"],
        explanation: "\"N'est-ce pas...?\" presents an obvious yes.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: One fact is worth more than a long speech.",
        words: ["Un fait", "vaut mieux", "qu'un long", "discours."],
        translation: "One fact is worth more than a long speech.",
        explanation: "\"Valoir mieux que\" (to be worth more than): always a fact under the figure.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Closing this school means closing the village's future.",
        answer: "Fermer cette école, c'est fermer l'avenir du village.",
        explanation: "The infinitive as subject, taken up by \"c'est\", turns an action into a topic: ready for an anaphora.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Peut-on vraiment parlé d'économies quand on ferme les écoles ?",
        answer: "Peut-on vraiment parler d'économies quand on ferme les écoles ?",
        explanation: "After a modal verb like \"pouvoir\" comes the infinitive: \"peut-on parler\", not the participle \"parlé\".",
      },
      {
        type: "matching",
        instructions: "Match each device to its French name.",
        pairs: [
          { left: "le rythme ternaire", right: "three parallel elements" },
          { left: "l'anaphore", right: "repeating words at the start of sentences" },
          { left: "la question rhétorique", right: "a question that expects no answer" },
          { left: "l'analogie", right: "explaining through a familiar comparison" },
          { left: "la gradation", right: "elements of increasing intensity" },
        ],
        explanation: "The French names are used in school analyses and by examiners.",
      },
      {
        type: "dictation",
        audio: "Peut-on vraiment sacrifier la jeunesse ?",
        explanation: "A formal rhetorical question with inversion (\"peut-on\"): the expected answer is no.",
      },
      {
        type: "speak",
        text: "Cette réforme est confuse, coûteuse et, surtout, dangereuse.",
        prompt: "Say it in French: This reform is muddled, costly and, above all, dangerous.",
        explanation: "A ternary rhythm with a climax: the third adjective, set off by \"surtout\", is the strongest. All three agree with \"réforme\".",
      },
    ],
  },
  {
    slug: "c2-debate-7",
    level: "FR-C2",
    number: 3,
    title: "L'Art du Débat et de l'Argumentation, Part 7 of 9",
    summary: "Ethos, pathos and logos in great French speeches, from Victor Hugo and Jaurès to Simone Veil, Robert Badinter, de Gaulle's Appel du 18 juin and Malraux, and what each device does.",
    duration: "20 min",
    sections: [
      {
        heading: "Ethos, pathos, logos",
        body: [
          "Aristotle's three means of persuasion are taught in every French lycée under their Greek names. \"L'ethos\" is the image the speaker projects (credibility, integrity, authority). \"Le pathos\" is the emotion stirred in the audience (pity, indignation, hope). \"Le logos\" is the reasoning (facts, figures, logic). A great speech weaves all three. Careful: in everyday French, \"faire du pathos\" or \"tomber dans le pathos\" is pejorative, meaning to lay on the emotion too thick.",
        ],
        examples: [
          {
            es: "L'ethos de l'orateur repose ici sur sa réputation et sur sa sincérité.",
            en: "Here the speaker's ethos rests on his reputation and his sincerity.",
          },
          {
            es: "Évitons de tomber dans le pathos : les faits parlent d'eux-mêmes.",
            en: "Let's not lay the emotion on too thick: the facts speak for themselves.",
          },
          { es: "Le logos repose sur les faits et les chiffres.", en: "Logos rests on facts and figures." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A speaker gives precise figures on unemployment and draws a logical conclusion. Which means of persuasion is this?",
            options: ["le logos", "le pathos", "l'ethos", "l'anaphore"],
            correctIndex: 0,
            explanation: "Facts and reasoning are \"le logos\"; emotion is \"le pathos\"; the speaker's credibility is \"l'ethos\".",
          },
        ],
      },
      {
        heading: "Hugo, 1849: the three at work",
        body: [
          "Victor Hugo's speech on poverty (\"Discours sur la misère\", Assemblée nationale législative, 9 July 1849) shows the three working together. His ethos: a famous poet and former peer of France, elected on the conservative side, now confronting his own camp. His logos: a precise distinction between suffering, which no law can abolish, and destitution, which political action can. And his pathos: descriptions of Paris families sleeping on heaps of rotting rags and of a mother and her four children searching for food in the refuse of Montfaucon.",
        ],
        examples: [
          {
            es: "Le logos tient à une distinction précise entre la souffrance et la misère.",
            en: "The logos lies in a precise distinction between suffering and destitution.",
          },
          {
            es: "Hugo fait appel au pathos en décrivant des familles entières entassées dans des taudis.",
            en: "Hugo appeals to pathos by describing whole families crammed into slums.",
          },
          { es: "Hugo s'en prend à son propre camp.", en: "Hugo takes on his own political camp." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A speaker opens: « Moi qui ai passé vingt ans dans les hôpitaux, je peux vous le dire... » Which means of persuasion is this?",
            options: ["l'ethos", "le logos", "le pathos", "la gradation"],
            correctIndex: 0,
            explanation: "The speaker builds credibility from experience: \"l'ethos\".",
          },
        ],
      },
      {
        heading: "Hugo's key sentence: concession, then correction",
        body: [
          "The key sentence is built on a concession (I am not one of those who...) followed by a correction (but I am one of those who...): « Je ne suis pas, messieurs, de ceux qui croient qu'on peut supprimer la souffrance en ce monde ; la souffrance est une loi divine ; mais je suis de ceux qui pensent et qui affirment qu'on peut détruire la misère. »",
        ],
        examples: [
          {
            es: "« Je ne suis pas, messieurs, de ceux qui croient qu'on peut supprimer la souffrance en ce monde. »",
            en: "'I am not, gentlemen, one of those who believe suffering can be abolished in this world.' (Hugo, 1849)",
          },
          { es: "Je ne suis pas de ceux qui renoncent.", en: "I'm not one of those who give up." },
          { es: "Je ne suis pas de ceux qui croient aux miracles.", en: "I'm not one of those who believe in miracles." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I am not one of those who believe that nothing can be done.",
            answer: "Je ne suis pas de ceux qui croient qu'on ne peut rien faire.",
            altAnswers: [
              "Je ne suis pas de ceux qui pensent qu'on ne peut rien faire.",
              "Je ne suis pas de ceux qui croient que l'on ne peut rien faire.",
              "Je ne suis pas de ceux qui croient que rien ne peut être fait.",
              "Je ne suis pas de ceux qui pensent que rien ne peut être fait.",
            ],
            explanation: "\"Être de ceux qui\" (to be one of those who) is Hugo's frame; the verb agrees with \"ceux\" (plural): \"croient\".",
          },
        ],
      },
      {
        heading: "The doublet and the parallel",
        body: [
          "Notice the doublet \"qui pensent et qui affirment\", which moves from opinion to commitment, and the parallel structure \"je ne suis pas de ceux qui... je suis de ceux qui\", which is still used by politicians today.",
        ],
        examples: [
          {
            es: "« Mais je suis de ceux qui pensent et qui affirment qu'on peut détruire la misère. »",
            en: "'But I am one of those who think and who affirm that destitution can be destroyed.' (Hugo, 1849)",
          },
          {
            es: "Je ne suis pas de ceux qui se taisent ; je suis de ceux qui dénoncent.",
            en: "I am not one of those who stay silent; I am one of those who speak out.",
          },
          {
            es: "Nous pensons et nous affirmons que cette réforme est juste.",
            en: "We think and we affirm that this reform is fair.",
          },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: I am one of those who believe in progress.",
            words: ["Je suis", "de ceux", "qui", "croient", "au progrès."],
            translation: "I am one of those who believe in progress.",
            explanation: "\"Être de ceux qui\" + plural verb: Hugo's frame.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it into Hugo's parallel structure, starting with \"Je ne suis pas de ceux qui\".",
            source: "Je ne me résigne pas ; j'agis.",
            answer: "Je ne suis pas de ceux qui se résignent ; je suis de ceux qui agissent.",
            explanation: "\"Je ne suis pas de ceux qui... ; je suis de ceux qui...\": the verb after \"ceux qui\" is plural (\"se résignent\", \"agissent\"), since \"ceux\" is plural.",
          },
        ],
      },
      {
        heading: "Veil, 1974: a hostile assembly",
        body: [
          "Two of the most studied speeches of the Fifth Republic were delivered to a hostile or divided Assemblée nationale, and both owe their force to logos and ethos rather than to grand effects. On 26 November 1974, Simone Veil, minister of health, presented the bill decriminalising abortion. She spoke, as she pointed out herself, as a woman before an assembly made up almost entirely of men.",
        ],
        examples: [
          {
            es: "Simone Veil s'adresse à une assemblée presque exclusivement masculine.",
            en: "Simone Veil is addressing an almost exclusively male assembly.",
          },
          { es: "Elle parle en tant que ministre de la Santé.", en: "She speaks as minister of health." },
          { es: "L'assemblée était hostile ou divisée.", en: "The assembly was hostile or divided." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Veil pointed out that she was speaking as a woman to an almost all-male assembly. Which means of persuasion does this feed?",
            options: ["l'ethos", "le pathos", "le logos", "l'anaphore"],
            correctIndex: 0,
            explanation: "By naming who she is and where she speaks from, Veil builds her ethos: the image and credibility of the speaker.",
          },
        ],
      },
      {
        heading: "Veil's strategy: concede, then reason",
        body: [
          "Her strategy was sober reasoning: clandestine abortions already existed in great numbers and endangered women's lives; the law would not encourage abortion but bring it under medical supervision and limit it. She conceded her opponents' moral concerns before answering them, and she presented abortion as a last resort, never as a right to be celebrated: a classic concession-refutation structure that reassured moderates.",
        ],
        examples: [
          {
            es: "Elle concède les inquiétudes morales de ses adversaires avant d'y répondre point par point.",
            en: "She concedes her opponents' moral concerns before answering them point by point.",
          },
          {
            es: "Son argumentation repose sur un constat : les avortements clandestins mettent en danger la vie des femmes.",
            en: "Her argument rests on an observation: clandestine abortions endanger women's lives.",
          },
          {
            es: "La loi ne visait pas à encourager l'avortement, mais à l'encadrer.",
            en: "The law did not aim to encourage abortion, but to regulate it.",
          },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Elle reconnaît les objections de ses adversaires avant de les réfuter.",
            question: "What does it mean?",
            options: [
              "She acknowledges her opponents' objections before refuting them.",
              "She ignores her opponents' objections.",
              "She gives in to her opponents' objections.",
              "Her opponents refute her objections.",
            ],
            correctIndex: 0,
            explanation: "The concession-refutation structure: grant the opponents' concerns first, then answer them. It reassured the moderates.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Her argument [rests on] figures.",
            sentence: "Son argumentation ___ des chiffres.",
            answer: "repose sur",
            altAnswers: ["s'appuie sur"],
            explanation: "\"Reposer sur\" (to rest on): sober logos built on facts, not grand effects.",
          },
        ],
      },
      {
        heading: "Badinter, 1981: the lawyer's ethos",
        body: [
          "On 17 September 1981, Robert Badinter, minister of justice and a former defence lawyer, defended the abolition of the death penalty. His ethos was that of a lawyer who had seen men executed and had pleaded for others' lives.",
        ],
        examples: [
          {
            es: "Badinter avait plaidé pour sauver des accusés de la guillotine.",
            en: "Badinter had pleaded to save defendants from the guillotine.",
          },
          { es: "Il parle en avocat autant qu'en ministre.", en: "He speaks as a lawyer as much as a minister." },
          { es: "Son expérience donne du poids à ses paroles.", en: "His experience gives weight to his words." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "He speaks as a former lawyer.",
            answer: "Il parle en ancien avocat.",
            altAnswers: [
              "Il s'exprime en ancien avocat.",
              "Il parle en tant qu'ancien avocat.",
              "Il s'exprime en tant qu'ancien avocat.",
            ],
            explanation: "\"En\" + noun without an article gives the capacity in which someone speaks: \"en ancien avocat\". It is the basis of his ethos.",
          },
        ],
      },
      {
        heading: "Badinter's logos and restrained pathos",
        body: [
          "His logos rested on two arguments: the death penalty does not deter crime, as comparisons between countries show, and justice can make mistakes that an execution makes irreversible. His pathos was restrained but present, in the image of the guillotine and in his appeal to the honour of France, then one of the last countries in Western Europe to apply the death penalty.",
        ],
        examples: [
          {
            es: "Badinter soutient que la peine de mort n'a aucun effet dissuasif.",
            en: "Badinter argues that the death penalty has no deterrent effect.",
          },
          {
            es: "Une erreur judiciaire suivie d'une exécution serait irréparable.",
            en: "A miscarriage of justice followed by an execution would be irreparable.",
          },
          {
            es: "La France était alors l'un des derniers pays d'Europe occidentale à appliquer la peine de mort.",
            en: "France was then one of the last countries in Western Europe to apply the death penalty.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "An execution [would make] any error irreversible.",
            sentence: "Une exécution ___ toute erreur irréversible.",
            answer: "rendrait",
            explanation: "The conditional presents the consequence as a hypothesis: \"rendrait\" (rendre). This is the logos of irreversibility.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it to the conditional, to present the consequence as a hypothesis.",
            source: "Une erreur judiciaire est irréparable.",
            answer: "Une erreur judiciaire serait irréparable.",
            explanation: "The conditional \"serait\" frames the error as what would happen, the core of Badinter's second argument.",
          },
        ],
      },
      {
        heading: "Hugo, 1848: three adjectives",
        body: [
          "Badinter could also draw on a long tradition, which he invoked: Hugo himself had asked for abolition in 1848, in a sentence of total clarity: « Je vote l'abolition pure, simple et définitive de la peine de mort. » Notice the ternary rhythm of the three adjectives, each closing a possible loophole.",
        ],
        examples: [
          {
            es: "« Je vote l'abolition pure, simple et définitive de la peine de mort. »",
            en: "'I vote for the pure, simple and definitive abolition of the death penalty.' (Hugo, 1848)",
          },
          { es: "Nous voulons une réforme claire, juste et durable.", en: "We want a clear, fair and lasting reform." },
          {
            es: "Il réclame une aide immédiate, totale et sans conditions.",
            en: "He demands immediate, full and unconditional help.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Why does « l'abolition pure, simple et définitive » use three adjectives?",
            options: [
              "Each one closes a possible loophole, in a ternary rhythm.",
              "French grammar requires three adjectives after a noun.",
              "To make the sentence longer for the record.",
              "Because Hugo was unsure which one to use.",
            ],
            correctIndex: 0,
            explanation: "\"Pure\" (no exceptions), \"simple\" (no conditions), \"définitive\" (no going back): a ternary rhythm in which every word does a job.",
          },
        ],
      },
      {
        heading: "De Gaulle, 18 June 1940: building ethos",
        body: [
          "On 18 June 1940, de Gaulle spoke on the BBC from London, almost unknown in France, the day after the government had asked for an armistice. His ethos had to be built in the speech itself: he presented himself as a general, spoke with calm authority and reasoned like a strategist (the war is a world war; France has an empire and allies).",
        ],
        examples: [
          { es: "L'orateur construit son ethos au fil du discours.", en: "The speaker builds his ethos as the speech goes on." },
          {
            es: "De Gaulle parle depuis Londres, sur les ondes de la BBC.",
            en: "De Gaulle speaks from London, on the BBC airwaves.",
          },
          {
            es: "Il raisonne en stratège : la guerre est mondiale.",
            en: "He reasons like a strategist: the war is a world war.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Almost unknown in France, how did de Gaulle build his ethos on 18 June?",
            options: [
              "Inside the speech: as a general, with calm authority and a strategist's reasoning.",
              "By listing his past electoral victories.",
              "By asking the listeners to trust his reputation.",
              "By quoting famous writers.",
            ],
            correctIndex: 0,
            explanation: "With no reputation to lean on, his credibility had to be built within the speech itself, by his tone and his reasoning.",
          },
        ],
      },
      {
        heading: "Questions answered by a single non",
        body: [
          "The turning point is a series of short rhetorical questions about whether the defeat is final, answered by a single categorical \"non\": the questions voice the listeners' despair, and the answer overturns it.",
        ],
        examples: [
          {
            es: "De Gaulle enchaîne une série de questions rhétoriques auxquelles il répond par un seul mot : non.",
            en: "De Gaulle strings together a series of rhetorical questions and answers them with a single word: no.",
          },
          { es: "La défaite est-elle définitive ? Non !", en: "Is the defeat final? No!" },
          { es: "Faut-il renoncer ? Non.", en: "Must we give up? No." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the statement into a rhetorical question answered by a single \"non\".",
            source: "Tout n'est pas perdu.",
            answer: "Tout est-il perdu ? Non.",
            altAnswers: ["Tout est-il perdu ? Non !"],
            explanation: "The question voices the listeners' despair; the one-word answer overturns it. Complex inversion: \"tout est-il\".",
          },
        ],
      },
      {
        heading: "Malraux, 1964: the apostrophe",
        body: [
          "On 19 December 1964, André Malraux, minister of culture, delivered the speech for the transfer of Jean Moulin's ashes to the Panthéon. It is pure pathos in the noble sense: Malraux addresses the dead man directly (\"l'apostrophe\"), uses the imperative, evokes the tortured résistants with heavy, slow images, and ends by turning to the young people of France. Its power comes from the solemn setting, a funeral oration in winter, as much as from the words.",
        ],
        examples: [
          {
            es: "Malraux s'adresse directement au mort : c'est une apostrophe.",
            en: "Malraux addresses the dead man directly: it is an apostrophe.",
          },
          {
            es: "Entre ici, Jean Moulin, avec ton terrible cortège.",
            en: "Enter here, Jean Moulin, with your terrible procession.",
          },
          { es: "L'orateur se tourne enfin vers la jeunesse.", en: "Finally the speaker turns to the young." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The poet [addresses] his late friend directly.",
            sentence: "Le poète ___ directement à son ami disparu.",
            answer: "s'adresse",
            explanation: "\"S'adresser à\" + person: speaking straight to someone absent or dead is the apostrophe.",
          },
        ],
      },
      {
        heading: "The anaphora: Jaurès and Hollande",
        body: [
          "The anaphora is the device politicians love most. Jaurès's speech to the young people of Albi (1903) repeats \"Le courage, c'est...\" again and again: « Le courage, c'est d'aimer la vie et de regarder la mort d'un regard tranquille ; c'est d'aller à l'idéal et de comprendre le réel. » In the 2012 televised debate, François Hollande answered a question with a long anaphora beginning \"Moi président de la République...\", listing what he would do. The device became so famous that it is now quoted, parodied and imitated in French political life.",
        ],
        examples: [
          {
            es: "« Le courage, c'est d'aimer la vie et de regarder la mort d'un regard tranquille. »",
            en: "'Courage is loving life and looking death calmly in the eye.' (speech to the young people of Albi, 1903)",
          },
          {
            es: "« C'est d'aller à l'idéal et de comprendre le réel. »",
            en: "'It is going towards the ideal and understanding the real.' (speech to the young people of Albi, 1903)",
          },
          {
            es: "L'anaphore « Moi président de la République » est restée dans les mémoires.",
            en: "The anaphora 'Me, as President of the Republic' has stayed in people's memories.",
          },
          {
            es: "« La vérité est en marche, et rien ne l'arrêtera », écrivait Zola pendant l'affaire Dreyfus.",
            en: "'Truth is on the march, and nothing will stop it,' wrote Zola during the Dreyfus affair.",
          },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Le courage, c'est de chercher la vérité et de la dire.",
            question: "What does it mean?",
            options: [
              "Courage is seeking the truth and telling it.",
              "It takes courage to find the truth.",
              "The truth is courageous.",
              "Courage is telling the truth to yourself.",
            ],
            correctIndex: 0,
            explanation: "The frame \"Le courage, c'est de...\" + infinitives is the one Jaurès repeats in his anaphora.",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: Courage is telling the truth.",
            words: ["Le courage,", "c'est", "de dire", "la vérité."],
            translation: "Courage is telling the truth.",
            explanation: "The topic (\"le courage\") is picked up by \"c'est de\" + infinitive: the frame repeated at the start of each sentence.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "matching",
        instructions: "Match each speech to its dominant device.",
        pairs: [
          { left: "Hugo, 1849", right: "Concession then correction: \"je ne suis pas de ceux qui...\"" },
          { left: "Veil, 1974", right: "Sober logos addressed to a hostile assembly" },
          { left: "De Gaulle, 18 juin 1940", right: "Rhetorical questions answered by a categorical no" },
          { left: "Malraux, 1964", right: "Apostrophe to the dead in a funeral oration" },
          { left: "Jaurès, 1903", right: "Anaphora: \"Le courage, c'est...\"" },
        ],
        explanation: "Each speech is remembered for one main device, though all combine ethos, pathos and logos.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "His argument rests on a comparison between countries.",
        answer: "Son argumentation repose sur une comparaison entre pays.",
        altAnswers: [
          "Son argumentation repose sur une comparaison entre les pays.",
          "Son raisonnement repose sur une comparaison entre pays.",
        ],
        explanation: "\"Reposer sur\": the logos of deterrence rests on comparisons between countries.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The minister concedes her opponents' doubts before refuting them.",
        answer: "La ministre concède les doutes de ses adversaires avant de les réfuter.",
        altAnswers: ["La ministre reconnaît les doutes de ses adversaires avant de les réfuter."],
        explanation: "\"Avant de\" + infinitive; \"les\" (direct object) goes before \"réfuter\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The speaker appeals to emotion.",
        answer: "L'orateur fait appel à l'émotion.",
        altAnswers: [
          "L'orateur fait appel au pathos.",
          "L'orateur fait appel aux émotions.",
          "L'oratrice fait appel à l'émotion.",
        ],
        explanation: "\"Faire appel à\" (to appeal to): the standard phrase in rhetorical analysis.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "The film [lays the emotion on too thick].",
        sentence: "Le film ___.",
        answer: "tombe dans le pathos",
        altAnswers: ["fait du pathos"],
        explanation: "In everyday French, \"tomber dans le pathos\" or \"faire du pathos\" is pejorative: too much emotion.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Je suis de ceux qui pense que tout reste possible.",
        answer: "Je suis de ceux qui pensent que tout reste possible.",
        explanation: "The verb after \"ceux qui\" agrees with \"ceux\" (plural), not with \"je\": \"pensent\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "De Gaulle answers his own questions with a single word.",
        answer: "De Gaulle répond à ses propres questions par un seul mot.",
        altAnswers: [
          "De Gaulle répond par un seul mot à ses propres questions.",
          "De Gaulle répond à ses propres questions d'un seul mot.",
        ],
        explanation: "\"Répondre à quelque chose par\" + noun: to answer with.",
      },
      {
        type: "speak",
        text: "Le courage, c'est de dire non quand tout le monde dit oui.",
        prompt: "Say it in French: Courage is saying no when everyone says yes.",
        explanation: "The Jaurès frame, \"le courage, c'est de\" + infinitive, applied to a new idea.",
      },
    ],
  },
  {
    slug: "c2-closing-argument-mission",
    level: "FR-C2",
    number: 4,
    title: "Real-World Mission: La Conclusion qu'On Retient",
    summary: "Write the closing statement of a university debate on a tourist tax: synthesise your points, contrast them with your opponent's, make a final appeal and end with the expected French \"ouverture\".",
    duration: "19 min",
    sections: [
      {
        heading: "The brief",
        body: [
          "The mission: you are Inès Benali, a student at Sciences Po Bordeaux, defending the motion \"Il faut instaurer un quota de visiteurs dans les villes touristiques\" in the final of an inter-university debating competition. You have two minutes to close. The jury will judge clarity, structure and the last impression.",
        ],
        examples: [
          { es: "Inès dispose de deux minutes pour conclure.", en: "Ines has two minutes to close." },
          {
            es: "Le jury jugera la clarté, la structure et la dernière impression.",
            en: "The jury will judge clarity, structure and the last impression.",
          },
          { es: "Il me reste deux minutes pour convaincre.", en: "I have two minutes left to convince." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What will the jury judge in Ines's closing statement?",
            options: [
              "Clarity, structure and the last impression it leaves.",
              "The number of new arguments she adds.",
              "How many statistics she quotes.",
              "How long she manages to speak.",
            ],
            correctIndex: 0,
            explanation: "A closing is judged on clarity, structure and the last impression: nothing new, nothing padded.",
          },
        ],
      },
      {
        heading: "Synthesis, not repetition",
        body: [
          "A French closing statement (\"la conclusion\" or, in a speech, \"la péroraison\") opens with a synthesis, not a repetition. Repetition lists what you said (\"j'ai dit que..., puis j'ai dit que...\"); synthesis shows what it adds up to: \"Au terme de ce débat, une chose apparaît clairement : le tourisme de masse n'est pas une fatalité, c'est un choix.\"",
        ],
        examples: [
          {
            es: "Au terme de ce débat, une chose apparaît clairement : le tourisme de masse n'est pas une fatalité, c'est un choix.",
            en: "At the end of this debate, one thing is clear: mass tourism isn't inevitable, it's a choice.",
          },
          {
            es: "Nous avons montré que les habitants quittent les centres historiques, que les loyers explosent et que les sites se dégradent.",
            en: "We have shown that residents are leaving historic centres, that rents are soaring and that sites are deteriorating.",
          },
          {
            es: "En définitive, il ne s'agit pas de fermer nos villes, mais de les préserver.",
            en: "Ultimately, this isn't about closing our cities, but about preserving them.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Your motion is « Il faut rendre les transports en commun gratuits ». Which line is a synthesis rather than a repetition?",
            options: [
              "Au terme de ce débat, une chose apparaît : la gratuité n'est pas un cadeau, c'est un investissement.",
              "J'ai d'abord parlé du prix, puis j'ai parlé de la pollution, puis des bus.",
              "Comme je l'ai déjà dit, les bus sont utiles.",
              "Je résume : prix, pollution, bus.",
            ],
            correctIndex: 0,
            explanation: "A synthesis shows what the arguments add up to; a repetition just lists what you said in order.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[At the end of this debate], one thing is certain: free transport is an investment.",
            sentence: "___, une chose est certaine : la gratuité des transports est un investissement.",
            answer: "Au terme de ce débat",
            altAnswers: ["À l'issue de ce débat"],
            explanation: "\"Au terme de ce débat\" opens the synthesis: it signals that you are drawing the lesson, not repeating the arguments.",
          },
        ],
      },
      {
        heading: "Openers for the synthesis",
        body: [
          "Useful openers: \"au terme de ce débat\", \"en définitive\", \"que retenir de cet échange ?\", \"si l'on récapitule\". Use the present tense and \"nous\" or \"je\"; in the oral of a debate, \"je\" is perfectly acceptable and adds conviction.",
        ],
        examples: [
          { es: "Que retenir de cet échange ?", en: "What should we take away from this exchange?" },
          {
            es: "Si l'on récapitule, trois arguments plaident en faveur de la motion.",
            en: "To sum up, three arguments support the motion.",
          },
          {
            es: "En définitive, la gratuité profite d'abord aux plus modestes.",
            en: "Ultimately, free transport benefits the least well-off first.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it a formal opener, with \"si l'on récapitule\".",
            source: "Bon, en gros, deux arguments soutiennent la motion.",
            answer: "Si l'on récapitule, deux arguments soutiennent la motion.",
            altAnswers: [
              "Si l'on récapitule, deux arguments plaident en faveur de la motion.",
              "Si on récapitule, deux arguments soutiennent la motion.",
            ],
            explanation: "\"Si l'on récapitule\" (with the euphonic \"l'\") replaces the casual \"bon, en gros\" at the start of a closing.",
          },
        ],
      },
      {
        heading: "Contrast with the opponent: c'est oublier que",
        body: [
          "The second move contrasts your position with your opponent's, fairly. Restate their best argument in one sentence, then show why yours prevails: \"Nos adversaires nous ont dit que les quotas tueraient l'économie locale. C'est oublier que, sans habitants, il n'y a plus de ville, et sans ville, plus de touristes.\" \"C'est oublier que\" (that is to forget that) is an elegant, compact refutation.",
        ],
        examples: [
          {
            es: "Nos adversaires nous ont dit que les quotas tueraient l'économie locale.",
            en: "Our opponents told us that quotas would kill the local economy.",
          },
          {
            es: "C'est oublier que, sans habitants, il n'y a plus de ville, et sans ville, plus de touristes.",
            en: "That's forgetting that without residents there's no city, and without a city, no tourists.",
          },
          {
            es: "Leur argument, pour séduisant qu'il soit, ne résiste pas à l'examen des faits.",
            en: "Their argument, appealing as it is, doesn't stand up to the facts.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[That's forgetting that] public transport is already subsidised.",
            sentence: "___ les transports publics sont déjà subventionnés.",
            answer: "C'est oublier que",
            explanation: "\"C'est oublier que\" refutes in one compact move: the opponent's claim overlooks a fact.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change \"même s'il est séduisant\" to \"pour séduisant qu'il soit\".",
            source: "Leur projet, même s'il est séduisant, coûte trop cher.",
            answer: "Leur projet, pour séduisant qu'il soit, coûte trop cher.",
            altAnswers: ["Leur projet, si séduisant qu'il soit, coûte trop cher."],
            explanation: "\"Pour + adjective + que\" + subjunctive is the elegant concessive of a closing; \"même si\" takes the indicative.",
          },
        ],
      },
      {
        heading: "The chain argument and nominal sentences",
        body: [
          "The chiasmus-like reversal \"sans habitants, plus de ville ; sans ville, plus de touristes\" is a chain argument, easy to remember. Notice the dropped verbs: in a conclusion, French tolerates nominal sentences for punch.",
        ],
        examples: [
          {
            es: "Sans école, plus de familles ; sans familles, plus de village.",
            en: "No school, no families; no families, no village.",
          },
          { es: "Moins de voitures, plus de vie.", en: "Fewer cars, more life." },
          {
            es: "Sans commerces, plus de rue ; sans rue, plus de quartier.",
            en: "No shops, no street; no street, no neighbourhood.",
          },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: Without buses, no jobs; without jobs, no town.",
            words: ["Sans bus,", "plus d'emplois ;", "sans emplois,", "plus de ville."],
            translation: "Without buses, no jobs; without jobs, no town.",
            explanation: "A chain argument in nominal sentences: no verb, \"plus de\" for no more. In a conclusion, French tolerates them for punch.",
          },
        ],
      },
      {
        heading: "The final appeal",
        body: [
          "Then the final appeal, often addressed to the jury or the audience: \"Je vous invite donc à voter pour la motion\", \"c'est pourquoi je vous demande de\", \"faisons le choix de\". The imperative \"nous\" form (\"faisons\", \"choisissons\") includes the audience in the decision.",
        ],
        examples: [
          { es: "Je vous invite donc à voter pour la motion.", en: "I therefore invite you to vote for the motion." },
          {
            es: "Faisons le choix de villes vivantes plutôt que de décors de cinéma.",
            en: "Let's choose living cities over film sets.",
          },
          { es: "Choisissons des villes où l'on peut encore vivre.", en: "Let's choose cities where people can still live." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it to the inclusive \"nous\" imperative.",
            source: "Vous devez choisir la gratuité.",
            answer: "Choisissons la gratuité.",
            altAnswers: ["Faisons le choix de la gratuité."],
            explanation: "The \"nous\" imperative (\"choisissons\", \"faisons\") includes the audience in the decision instead of ordering them.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[That's why I ask you to] reject this motion.",
            sentence: "___ rejeter cette motion.",
            answer: "C'est pourquoi je vous demande de",
            explanation: "\"C'est pourquoi je vous demande de\" + infinitive: the appeal draws the consequence of everything said before.",
          },
        ],
      },
      {
        heading: "L'ouverture: a wider question",
        body: [
          "French conclusions end with \"une ouverture\": a sentence that widens the debate to a related question, showing that your thinking goes beyond the topic. It is expected in the dissertation and appreciated in a debate. It must be related, brief and not a new argument. For example: \"Reste à savoir si nous, voyageurs, serons prêts à changer nos propres habitudes.\"",
        ],
        examples: [
          {
            es: "Reste à savoir si nous, voyageurs, serons prêts à changer nos propres habitudes.",
            en: "It remains to be seen whether we travellers will be ready to change our own habits.",
          },
          { es: "Reste à savoir qui paiera la facture.", en: "It remains to be seen who will foot the bill." },
          { es: "Une ouverture élargit le débat sans le rouvrir.", en: "An ouverture widens the debate without reopening it." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence is the best \"ouverture\" for this debate?",
            options: [
              "Reste à savoir si nous serons prêts à changer nos propres habitudes de voyage.",
              "Voilà, c'est tout pour moi.",
              "J'ajoute un nouvel argument : les croisières polluent.",
              "J'espère avoir été clair, merci.",
            ],
            correctIndex: 0,
            explanation: "An \"ouverture\" widens the debate briefly; it doesn't add a new argument or apologise.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[It remains to be seen whether] the region will follow.",
            sentence: "___ la région suivra.",
            answer: "Reste à savoir si",
            altAnswers: ["Il reste à savoir si"],
            explanation: "\"Reste à savoir si\" opens the debate onto a related question in one sentence: the classic ouverture.",
          },
        ],
      },
      {
        heading: "Frames for the ouverture",
        body: [
          "Typical frames: \"reste à savoir si\", \"la question se pose désormais de savoir\", \"au-delà de ce débat, c'est notre rapport au voyage qui est en jeu\", \"et si la vraie question était...?\". The last is lighter and suits an oral.",
        ],
        examples: [
          {
            es: "Au-delà de ce débat, c'est notre rapport au voyage qui est en jeu.",
            en: "Beyond this debate, it's our relationship with travel that is at stake.",
          },
          {
            es: "Et si la vraie question était : pourquoi voyageons-nous ?",
            en: "And what if the real question were: why do we travel?",
          },
          {
            es: "La question se pose désormais de savoir qui fixera les quotas.",
            en: "The question now is who will set the quotas.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into a lighter ouverture, with \"Et si la vraie question était\".",
            source: "La vraie question est : comment travaillerons-nous demain ?",
            answer: "Et si la vraie question était : comment travaillerons-nous demain ?",
            explanation: "\"Et si\" + imparfait (\"était\") suggests a new angle lightly; it suits an oral.",
          },
        ],
      },
      {
        heading: "Short, and never apologetic",
        body: [
          "A good closing is short. Two minutes is about 250 words. Count the moves: synthesis (2-3 sentences), contrast (2 sentences), appeal (1-2 sentences), \"ouverture\" (1 sentence). Nothing new, nothing apologetic: never close with \"voilà, c'est tout\" or \"j'espère avoir été clair\".",
        ],
        examples: [
          {
            es: "Voilà, c'est tout, j'espère avoir été clair.",
            en: "So, that's it, I hope I was clear. (a weak ending to avoid)",
          },
          { es: "Je vous remercie de votre attention.", en: "Thank you for your attention." },
          {
            es: "Deux minutes, c'est environ deux cent cinquante mots.",
            en: "Two minutes is about two hundred and fifty words.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which is the weakest last line for a debate closing?",
            options: [
              "J'espère avoir été clair.",
              "Faisons le choix de villes vivantes.",
              "Reste à savoir si nous changerons nos habitudes.",
              "Je vous invite donc à voter pour la motion.",
            ],
            correctIndex: 0,
            explanation: "Never close by apologising or doubting yourself. The other three are an appeal, an ouverture and a call to vote.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "What should we take away from these two hours of discussion?",
        answer: "Que retenir de ces deux heures de discussion ?",
        altAnswers: ["Que faut-il retenir de ces deux heures de discussion ?"],
        explanation: "\"Que retenir de...?\" (infinitive question) opens a synthesis by inviting the audience to draw the lesson with you.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Two arguments support free school meals.",
        answer: "Deux arguments plaident en faveur de la gratuité de la cantine.",
        altAnswers: [
          "Deux arguments plaident pour la gratuité de la cantine.",
          "Deux arguments plaident en faveur de la cantine gratuite.",
        ],
        explanation: "\"Plaider en faveur de\" (to argue for) is the formal verb for what arguments do.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Faisons le choix d'une ville apaisée plutôt qu'une ville saturée.",
        answer: "Faisons le choix d'une ville apaisée plutôt que d'une ville saturée.",
        explanation: "Both sides of \"plutôt que\" depend on \"le choix de\", so \"de\" is repeated: \"plutôt que d'une ville saturée\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Our opponents told us that the measure would cost too much.",
        answer: "Nos adversaires nous ont dit que la mesure coûterait trop cher.",
        altAnswers: ["Nos adversaires nous ont expliqué que la mesure coûterait trop cher."],
        explanation: "Restate the opponent's best argument fairly; the conditional \"coûterait\" reports their prediction.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "Let's choose clean air [rather than] traffic jams.",
        sentence: "Choisissons l'air pur ___ les embouteillages.",
        answer: "plutôt que",
        explanation: "\"Plutôt que\" sets your choice against the alternative in the final appeal.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Unemployment is not inevitable, it is a political choice.",
        words: ["Le chômage", "n'est pas", "une fatalité,", "c'est", "un choix politique."],
        translation: "Unemployment is not inevitable, it is a political choice.",
        explanation: "\"Ce n'est pas une fatalité, c'est un choix\": a synthesis line that reframes the whole debate.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Without trains, no tourists; without tourists, no shops.",
        answer: "Sans trains, plus de touristes ; sans touristes, plus de commerces.",
        altAnswers: ["Sans train, plus de touristes ; sans touristes, plus de commerces."],
        explanation: "A chain argument in nominal sentences, with \"plus de\" for no more.",
      },
      {
        type: "listen-choose",
        audio: "C'est oublier que la gratuité a un coût pour la collectivité.",
        question: "What is the speaker doing?",
        options: [
          "Refuting the opponent's argument",
          "Conceding the opponent's point",
          "Announcing the plan",
          "Thanking the jury",
        ],
        correctIndex: 0,
        explanation: "\"C'est oublier que\" introduces the fact the opponent overlooked: a compact refutation.",
      },
      {
        type: "speak",
        text: "Au terme de ce débat, une chose apparaît clairement : la voiture n'est pas l'avenir de la ville.",
        prompt: "Say it in French: At the end of this debate, one thing is clear: the car is not the future of the city.",
        explanation: "Open the closing with a synthesis, not a list: \"au terme de ce débat, une chose apparaît clairement\".",
      },
    ],
  },
  {
    slug: "c2-debate-8",
    level: "FR-C2",
    number: 5,
    title: "L'Art du Débat et de l'Argumentation, Part 8 of 9",
    summary: "The conclusion and the \"péroraison\": \"bilan\", answer to the \"problématique\" and \"ouverture\", the formulas that frame them, and the rhetorical climax of gradation, chiasmus and the memorable \"formule\".",
    duration: "19 min",
    sections: [
      {
        heading: "The written conclusion: bilan, réponse, ouverture",
        body: [
          "In a dissertation or a written synthesis, the conclusion has three parts, in this order. \"Le bilan\" sums up the path of the argument in two or three sentences (not a list of the parts). \"La réponse à la problématique\" gives a clear, nuanced answer to the question asked in the introduction; a conclusion that does not answer is the most common fault examiners note. \"L'ouverture\" widens the perspective.",
        ],
        examples: [
          {
            es: "Au terme de cette réflexion, il apparaît que le télétravail est moins une révolution qu'une accélération.",
            en: "At the end of this reflection, it appears that remote work is less a revolution than an acceleration.",
          },
          {
            es: "Nous avons pu constater que ses bénéfices sont réels, mais inégalement répartis.",
            en: "We have seen that its benefits are real but unevenly distributed.",
          },
          {
            es: "En somme, la réponse à notre problématique est nuancée : oui, mais à certaines conditions.",
            en: "In short, the answer to our question is nuanced: yes, but under certain conditions.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What is the fault examiners most often note in a French conclusion?",
            options: [
              "It does not answer the problématique.",
              "It is too short.",
              "It ends with an ouverture.",
              "It sums up the argument.",
            ],
            correctIndex: 0,
            explanation: "The conclusion must give a clear, nuanced answer to the question asked in the introduction. Summing up and opening out are expected; failing to answer is the classic fault.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[It appears that] the reform has partly succeeded.",
            sentence: "___ la réforme a en partie réussi.",
            answer: "Il apparaît que",
            explanation: "\"Il apparaît que\" presents a result, so it takes the indicative (\"a réussi\").",
          },
        ],
      },
      {
        heading: "The formulas of the conclusion",
        body: [
          "The formulas: \"en définitive\", \"au terme de cette réflexion\" (at the end of this reflection), \"il apparaît que\" (it appears that, + indicative), \"nous avons pu constater que\", \"ainsi\", \"en somme\". \"En conclusion\" is acceptable but heavy; \"pour conclure\" belongs to speech. \"Reste à savoir si\" and \"on peut dès lors se demander si\" open the \"ouverture\".",
        ],
        examples: [
          {
            es: "Il ressort de cette analyse que la question est avant tout sociale.",
            en: "What emerges from this analysis is that the question is above all a social one.",
          },
          {
            es: "On peut dès lors se demander si le bureau a encore un avenir.",
            en: "One may therefore wonder whether the office still has a future.",
          },
          {
            es: "En somme, la question est moins technique que politique.",
            en: "In short, the question is less technical than political.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which formula belongs to speech rather than to a written conclusion?",
            options: ["pour conclure", "au terme de cette réflexion", "en définitive", "il apparaît que"],
            correctIndex: 0,
            explanation: "\"Pour conclure\" belongs to speech, and \"en conclusion\" is acceptable but heavy. The others are the written formulas.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[In short], the reform is a half-success.",
            sentence: "___, la réforme est un demi-succès.",
            answer: "En somme",
            altAnswers: ["Bref"],
            explanation: "\"En somme\" (in short) introduces the summing-up of the argument, the bilan.",
          },
        ],
      },
      {
        heading: "Mind the moods",
        body: [
          "Mind the moods: \"il apparaît que\" and \"il ressort de cette analyse que\" take the indicative, because they present a result. But \"il n'est pas certain que\" in an \"ouverture\" takes the subjunctive: \"Il n'est pas certain que la loi suffise à changer les mentalités.\"",
        ],
        examples: [
          {
            es: "Il n'est pas certain que la loi suffise à changer les mentalités.",
            en: "It's not certain that the law will be enough to change attitudes.",
          },
          { es: "Il apparaît que la mesure a porté ses fruits.", en: "It appears that the measure has borne fruit." },
          {
            es: "Il n'est pas certain que les habitants l'acceptent.",
            en: "It is not certain that the residents will accept it.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Il n'est pas certain que la réforme peut suffire.",
            answer: "Il n'est pas certain que la réforme puisse suffire.",
            explanation: "\"Il n'est pas certain que\" expresses doubt, so it takes the subjunctive: \"puisse\" (pouvoir).",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it an uncertain ouverture, starting with \"Il n'est pas certain que\".",
            source: "Le marché va se stabiliser.",
            answer: "Il n'est pas certain que le marché se stabilise.",
            explanation: "Doubt takes the subjunctive: \"se stabilise\". A result (\"il apparaît que\") would take the indicative.",
          },
        ],
      },
      {
        heading: "La péroraison",
        body: [
          "\"La péroraison\" is the final part of a speech, where the orator moves from reason to emotion and action. Classical rhetoric gave it two tasks: sum up and stir. In modern French it is also used ironically: \"une longue péroraison\" is a long-winded closing speech. Use the word for analysis, not for your own ending.",
        ],
        examples: [
          {
            es: "Le ministre s'est lancé dans une longue péroraison sur les valeurs de la République.",
            en: "The minister launched into a long-winded closing speech on the values of the Republic.",
          },
          { es: "La péroraison résume et émeut.", en: "The peroration sums up and stirs." },
          { es: "Sa péroraison a duré vingt minutes.", en: "His closing speech went on for twenty minutes." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "After your director's forty-minute closing remarks, a colleague whispers « Quelle péroraison ! ». What does she mean?",
            options: ["It was long-winded.", "It was a perfect climax.", "It was too short.", "It was full of figures."],
            correctIndex: 0,
            explanation: "In modern French, \"une péroraison\" is often ironic: a long-winded closing speech. Keep the word for analysis, not for your own ending.",
          },
        ],
      },
      {
        heading: "La gradation: Corneille and Rostand",
        body: [
          "\"La gradation\" arranges elements in increasing intensity. The schoolbook example is Corneille: in Le Cid (1637), Don Diègue, too old to fight, asks his son to avenge him with four verbs that accelerate: « Va, cours, vole, et nous venge. » Each verb is faster than the last, and the final one names the goal. Rostand's Cyrano (1897) plays with the device comically: « C'est un roc !... c'est un pic !... c'est un cap ! Que dis-je, c'est un cap ?... C'est une péninsule ! »",
        ],
        examples: [
          { es: "« Va, cours, vole, et nous venge. »", en: "'Go, run, fly, and avenge us.' (Corneille, Le Cid)" },
          {
            es: "« C'est un roc !... c'est un pic !... c'est un cap ! Que dis-je, c'est un cap ?... C'est une péninsule ! »",
            en: "'It's a rock! a peak! a cape! What am I saying, a cape? It's a peninsula!' (Rostand, Cyrano de Bergerac)",
          },
          { es: "Il marche, il court, il s'envole.", en: "He walks, he runs, he takes flight." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Je suis déçu, je suis inquiet, je suis en colère.",
            question: "What device does this line illustrate?",
            options: ["A gradation", "A chiasmus", "A rhetorical question", "An understatement"],
            correctIndex: 0,
            explanation: "Three elements of rising intensity: disappointment, worry, anger. That is \"la gradation\".",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: Listen, understand, act, and decide.",
            words: ["Écoutez,", "comprenez,", "agissez,", "et décidez."],
            translation: "Listen, understand, act, and decide.",
            explanation: "Four imperatives that accelerate towards the goal, the way \"va, cours, vole, et nous venge\" does.",
          },
        ],
      },
      {
        heading: "Gradation in a modern speech",
        body: [
          "In a modern speech, gradation often applies to consequences or to commitment: \"Ce projet est une erreur, une faute, presque une trahison.\" The adverb \"presque\" before the last element keeps the gradation from sounding hysterical. Descending gradation exists too, for irony or sadness: \"un empire, un royaume, une province, plus rien\".",
        ],
        examples: [
          {
            es: "Ce projet est une erreur, une faute, presque une trahison.",
            en: "This project is a mistake, a fault, almost a betrayal.",
          },
          {
            es: "Il faut agir aujourd'hui, demain il sera trop tard, après-demain il sera inutile d'en parler.",
            en: "We must act today; tomorrow will be too late; the day after, there'll be no point talking about it.",
          },
          {
            es: "Nous voulions un pays, nous avons eu une région, il nous reste un village.",
            en: "We wanted a country, we got a region, we're left with a village. (descending gradation)",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the list into a rising gradation, with \"presque\" before the strongest word.",
            source: "Cette décision est un scandale, une maladresse, une erreur.",
            answer: "Cette décision est une maladresse, une erreur, presque un scandale.",
            explanation: "A gradation climbs from weakest to strongest; \"presque\" before the last element keeps it from sounding hysterical.",
          },
        ],
      },
      {
        heading: "Le chiasme",
        body: [
          "\"Le chiasme\" (chiasmus) reverses the order of two terms in parallel phrases: A B / B A. The classic is from Molière's L'Avare (1668): « Il faut manger pour vivre, et non pas vivre pour manger. » A chiasmus sounds definitive because it seems to close a circle; it is ideal for the last line of a speech: \"Il ne s'agit pas de travailler pour vivre moins bien, mais de vivre mieux pour mieux travailler.\"",
        ],
        examples: [
          {
            es: "« Il faut manger pour vivre, et non pas vivre pour manger. »",
            en: "'One must eat to live, and not live to eat.' (from The Miser, 1668)",
          },
          {
            es: "Il ne s'agit pas de travailler pour vivre moins bien, mais de vivre mieux pour mieux travailler.",
            en: "It's not about working to live less well, but about living better to work better.",
          },
          {
            es: "Ce n'est pas au peuple de s'adapter à la loi, c'est à la loi de s'adapter au peuple.",
            en: "It isn't for the people to adapt to the law; it's for the law to adapt to the people.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence is a chiasmus?",
            options: [
              "Il ne faut pas vivre pour travailler, mais travailler pour vivre.",
              "Écoutez, comprenez, agissez.",
              "Peut-on vraiment parler de progrès ?",
              "C'est une erreur, une faute, presque une trahison.",
            ],
            correctIndex: 0,
            explanation: "A chiasmus reverses two terms in parallel phrases (A B / B A): vivre... travailler / travailler... vivre. The others are a gradation, a rhetorical question and a gradation.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change the second clause so the two terms are reversed, making a chiasmus.",
            source: "Il faut savoir pour agir, et non pas agir sans savoir.",
            answer: "Il faut savoir pour agir, et non pas agir pour savoir.",
            explanation: "A B / B A: \"savoir pour agir\" becomes \"agir pour savoir\". The reversal seems to close a circle, which is why it suits a last line.",
          },
        ],
      },
      {
        heading: "La formule",
        body: [
          "\"La formule\" (a memorable phrase, a sound bite) is the sentence people quote the next day. It is short, balanced and often based on antithesis or chiasmus. Pascal is the model: « Le cœur a ses raisons que la raison ne connaît point. » The same word, \"raison\", is used in two senses (reasons, reason): a pun turned into a thought. \"Avoir le sens de la formule\" is a compliment paid to good speakers and writers.",
        ],
        examples: [
          {
            es: "« Le cœur a ses raisons que la raison ne connaît point. »",
            en: "'The heart has its reasons that reason knows nothing of.' (Pascal, 17th century)",
          },
          { es: "Elle a le sens de la formule.", en: "She has a gift for a memorable phrase." },
          {
            es: "Une phrase courte, équilibrée, qu'on cite le lendemain.",
            en: "A short, balanced sentence that people quote the next day.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What makes Pascal's « Le cœur a ses raisons que la raison ne connaît point » a formule?",
            options: [
              "The same word is used in two senses, in a short, balanced sentence.",
              "It is very long and detailed.",
              "It contains a statistic.",
              "It asks a question.",
            ],
            correctIndex: 0,
            explanation: "\"Raisons\" (reasons) and \"la raison\" (reason) play on one word: a pun turned into a thought, short and balanced enough to be quoted.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "This columnist [has a real gift for memorable phrases].",
            sentence: "Ce chroniqueur ___.",
            answer: "a le sens de la formule",
            explanation: "\"Avoir le sens de la formule\" is the compliment paid to speakers and writers whose lines get quoted.",
          },
        ],
      },
      {
        heading: "Don't overload",
        body: [
          "Do not overload: one chiasmus or one formula at the very end is enough. Many French speeches end with a short formula followed by a brief, conventional close: \"Je vous remercie.\" In a written conclusion, the formula can replace the \"ouverture\" if it opens the perspective.",
        ],
        examples: [
          {
            es: "Nous ne voulons pas d'une école qui trie, mais d'une école qui élève.",
            en: "We don't want a school that sorts, but a school that raises up.",
          },
          { es: "Je vous remercie.", en: "Thank you." },
          { es: "Un seul chiasme, à la toute fin, suffit.", en: "One chiasmus, at the very end, is enough." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[One single formula] at the very end is enough.",
            sentence: "___ à la toute fin suffit.",
            answer: "Une seule formule",
            explanation: "Do not overload: one chiasmus or one formula at the very end, then a brief, conventional close.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "We have seen that the reform has had mixed results.",
        answer: "Nous avons pu constater que la réforme a donné des résultats mitigés.",
        altAnswers: [
          "Nous avons pu constater que la réforme a eu des résultats mitigés.",
          "Nous avons constaté que la réforme a donné des résultats mitigés.",
        ],
        explanation: "\"Nous avons pu constater que\" + indicative introduces the bilan of a written conclusion.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "We don't want a city that excludes, but a city that welcomes.",
        answer: "Nous ne voulons pas d'une ville qui exclut, mais d'une ville qui accueille.",
        altAnswers: ["Nous ne voulons pas d'une ville qui exclut, mais d'une ville qui accueille tout le monde."],
        explanation: "An antithesis in parallel clauses; \"vouloir\" in the negative takes \"de\": \"pas d'une ville\".",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: It remains to be seen whether the law will be applied.",
        words: ["Reste à savoir", "si", "la loi", "sera", "appliquée."],
        translation: "It remains to be seen whether the law will be applied.",
        explanation: "\"Reste à savoir si\" opens the ouverture; the indicative future follows \"si\" here because it is an indirect question.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Today it's a warning; tomorrow it will be a crisis.",
        answer: "Aujourd'hui, c'est un avertissement ; demain, ce sera une crise.",
        altAnswers: ["Aujourd'hui c'est un avertissement, demain ce sera une crise."],
        explanation: "A two-step gradation in time: \"c'est\" becomes \"ce sera\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Au terme de cette réflexion, il apparaît que la réforme soit un échec.",
        answer: "Au terme de cette réflexion, il apparaît que la réforme est un échec.",
        explanation: "\"Il apparaît que\" presents a result, so it takes the indicative: \"est\", not \"soit\".",
      },
      {
        type: "matching",
        instructions: "Match each term to its meaning.",
        pairs: [
          { left: "le bilan", right: "the summing-up of the argument" },
          { left: "l'ouverture", right: "the widening at the very end" },
          { left: "la péroraison", right: "the emotional final part of a speech" },
          { left: "la gradation", right: "rising intensity" },
          { left: "le chiasme", right: "A B / B A reversal" },
        ],
        explanation: "The vocabulary of conclusions and climaxes in French rhetoric.",
      },
      {
        type: "dictation",
        audio: "Il apparaît que la réponse est nuancée.",
        explanation: "\"Il apparaît que\" + indicative: the conclusion's answer to the problématique.",
      },
      {
        type: "speak",
        text: "Ce n'est pas à l'élève de s'adapter à l'école, c'est à l'école de s'adapter à l'élève.",
        prompt: "Say it in French: It isn't for the pupil to adapt to the school; it's for the school to adapt to the pupil.",
        explanation: "A chiasmus (élève... école / école... élève) built on \"ce n'est pas à X de..., c'est à Y de...\".",
      },
    ],
  },
  {
    slug: "c2-debate-vocab-word-web",
    level: "FR-C2",
    number: 6,
    title: "Word Web: Le Lexique du Débat",
    summary: "Organise the vocabulary of argument: \"thèse\", \"argument\", \"contre-argument\", \"objection\", \"réfutation\", \"prémisse\", \"conclusion\", and the verbs \"réfuter\", \"contester\", \"soutenir\", \"étayer\", \"plaider\", \"objecter\", \"battre en brèche\", \"faire valoir\".",
    duration: "17 min",
    sections: [
      {
        heading: "The chain of nouns",
        body: [
          "The nouns of argument form a chain. \"Une prémisse\" (a premise) is a starting point taken as true. \"Un argument\" supports \"une thèse\" (the position). \"Une objection\" is raised against it; \"un contre-argument\" is a full argument on the other side. \"Une réfutation\" demolishes an argument; \"une conclusion\" is what follows from the premises.",
        ],
        examples: [
          { es: "Votre raisonnement part d'une prémisse fausse.", en: "Your reasoning starts from a false premise." },
          { es: "Elle a avancé trois arguments solides.", en: "She put forward three solid arguments." },
          {
            es: "La réfutation de cette thèse occupe la deuxième partie du livre.",
            en: "The refutation of this thesis takes up the second part of the book.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which word names a full argument on the other side, not just a single point raised?",
            options: ["un contre-argument", "une objection", "une prémisse", "une conclusion"],
            correctIndex: 0,
            explanation: "\"Une objection\" is a single point raised against a thesis; \"un contre-argument\" is a whole argument for the other side.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Their whole argument [starts from] a doubtful premise.",
            sentence: "Toute leur argumentation ___ une prémisse douteuse.",
            answer: "part d'",
            altAnswers: ["repose sur"],
            explanation: "\"Partir d'une prémisse\": the premise is the starting point of the chain. \"De\" elides before \"une\".",
          },
        ],
      },
      {
        heading: "Objection or réfutation, and a false friend",
        body: [
          "Distinctions that matter: \"une objection\" is a single point raised (\"soulever une objection\"); \"une réfutation\" is a demonstration that something is false (\"la réfutation de cette thèse\"). \"Un raisonnement\" is the whole chain of reasoning, \"une démonstration\" a rigorous proof, \"une argumentation\" the set of arguments you deploy. \"Un argument\" in French can also mean a summary of a plot in old texts, but not a quarrel: for a quarrel, French says \"une dispute\" or \"une querelle\".",
        ],
        examples: [
          { es: "Permettez-moi de soulever une objection.", en: "Allow me to raise an objection." },
          { es: "Ils se sont lancés dans une dispute sans fin.", en: "They launched into an endless argument." },
          { es: "Sa démonstration est rigoureuse.", en: "His proof is rigorous." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Your friend and her neighbour shouted at each other over a hedge. What did they have?",
            options: ["une dispute", "un argument", "une argumentation", "une démonstration"],
            correctIndex: 0,
            explanation: "\"Un argument\" is never a quarrel in French: that is \"une dispute\" or \"une querelle\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Ils ont eu un gros argument hier soir.",
            answer: "Ils ont eu une grosse dispute hier soir.",
            altAnswers: ["Ils ont eu une grosse querelle hier soir.", "Ils se sont disputés hier soir."],
            explanation: "False friend: a quarrel is \"une dispute\" (feminine, so \"une grosse dispute\"). \"Un argument\" only supports a thesis.",
          },
        ],
      },
      {
        heading: "Collocations: soulever, lever, tirer, aboutir",
        body: [
          "Collocations: \"avancer un argument\", \"développer une argumentation\", \"partir d'une prémisse\", \"tirer une conclusion\", \"aboutir à une conclusion\", \"soulever / lever une objection\" (\"soulever\" = raise, \"lever\" = remove), \"se heurter à une objection\".",
        ],
        examples: [
          { es: "Cette précision devrait lever votre objection.", en: "This clarification should remove your objection." },
          { es: "On ne peut pas tirer de conclusion d'un seul sondage.", en: "You can't draw a conclusion from a single poll." },
          { es: "Le projet se heurte à une objection de taille.", en: "The project comes up against a major objection." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "« Cette précision devrait ___ votre objection. » The clarification will make the objection disappear. Which verb?",
            options: ["lever", "soulever", "élever", "relever"],
            correctIndex: 0,
            explanation: "\"Lever une objection\" removes it; \"soulever une objection\" raises it.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The survey [led to] a surprising conclusion.",
            sentence: "L'enquête a ___ une conclusion surprenante.",
            answer: "abouti à",
            explanation: "\"Aboutir à une conclusion\" (to arrive at), like \"tirer une conclusion\" (to draw). The participle of \"aboutir\" is \"abouti\".",
          },
        ],
      },
      {
        heading: "Verbs for: soutenir, étayer, plaider",
        body: [
          "\"Soutenir\" (to maintain, to argue) states a thesis: \"il soutient que\". \"Étayer\" (to support, to back up, literally to prop up a wall) adds evidence: \"étayer une thèse par des exemples\". \"Plaider\" (to plead, to argue for) comes from the courtroom: \"plaider pour une réforme\", \"plaider en faveur de\", and \"plaider sa cause\".",
        ],
        examples: [
          { es: "Il soutient que la réforme est indispensable.", en: "He maintains that the reform is essential." },
          { es: "Elle étaie sa thèse par des données précises.", en: "She backs up her thesis with precise data." },
          {
            es: "Les associations plaident pour une meilleure prise en charge des malades.",
            en: "The associations are arguing for better care for patients.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The lawyer [backs up] her argument with three examples.",
            sentence: "L'avocate ___ son argumentation par trois exemples.",
            answer: "étaie",
            altAnswers: ["étaye"],
            explanation: "\"Étayer\" (literally to prop up a wall) adds evidence: \"étayer une thèse par des exemples\". Present: \"elle étaie\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The mayor is arguing for a new school.",
            answer: "Le maire plaide pour une nouvelle école.",
            altAnswers: ["Le maire plaide en faveur d'une nouvelle école."],
            explanation: "\"Plaider pour\" (or \"en faveur de\") comes from the courtroom: to argue for a cause.",
          },
        ],
      },
      {
        heading: "Faire valoir, arguer de",
        body: [
          "\"Faire valoir\" (to put forward, to point out, to assert) is extremely common in journalism: \"Les syndicats font valoir que les salaires stagnent\" (the unions point out that...). It also means to assert a right: \"faire valoir ses droits\". \"Arguer de\" (to plead as a reason) is more formal: \"Il a argué de son état de santé pour ne pas venir.\"",
        ],
        examples: [
          {
            es: "Les syndicats font valoir que les salaires stagnent depuis dix ans.",
            en: "The unions point out that wages have stagnated for ten years.",
          },
          {
            es: "Il a argué de son état de santé pour ne pas se présenter.",
            en: "He cited his health as a reason for not appearing.",
          },
          {
            es: "Vous devez faire valoir vos droits auprès de l'administration.",
            en: "You must assert your rights with the authorities.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Farmers [point out] that prices are falling.",
            sentence: "Les agriculteurs ___ que les prix baissent.",
            answer: "font valoir",
            explanation: "\"Faire valoir que\" (to point out, to put forward) is the journalist's favourite way to report an argument.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "She [cited] her workload as a reason for refusing.",
            sentence: "Elle a ___ sa charge de travail pour refuser.",
            answer: "argué de",
            explanation: "\"Arguer de\" + noun (to plead as a reason) is formal; note the \"de\".",
          },
        ],
      },
      {
        heading: "Soutenir something, soutenir que",
        body: [
          "Note the subtle difference between \"soutenir\" + noun (to support a person, a team, a project) and \"soutenir que\" (to maintain that). And \"défendre\" works for both: \"défendre une idée\", \"défendre un projet\".",
        ],
        examples: [
          { es: "Je soutiens ce projet.", en: "I support this project." },
          { es: "Je soutiens que ce projet est nécessaire.", en: "I maintain that this project is necessary." },
          { es: "Elle défend une idée simple.", en: "She defends a simple idea." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "« Nous soutenons l'équipe de Lyon. » What does soutenir mean here?",
            options: ["to support", "to maintain that", "to prove", "to deny"],
            correctIndex: 0,
            explanation: "\"Soutenir\" + noun means to support (a person, a team, a project); only \"soutenir que\" means to maintain that.",
          },
        ],
      },
      {
        heading: "Réfuter: prove wrong, not just deny",
        body: [
          "\"Réfuter\" means to prove wrong; it is a strong verb, and saying \"il a réfuté l'accusation\" in the loose English sense of to deny is criticised by purists (\"démentir\" or \"nier\" is the safer choice for a mere denial). \"Contester\" (to dispute, to challenge) is broader: you can contest figures, a decision, a result.",
        ],
        examples: [
          { es: "Le ministre a démenti avoir été informé.", en: "The minister denied having been informed." },
          {
            es: "Les chercheurs ont réfuté cette hypothèse par une série d'expériences.",
            en: "The researchers disproved this hypothesis through a series of experiments.",
          },
          { es: "L'opposition conteste les chiffres du gouvernement.", en: "The opposition disputes the government's figures." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence uses \"réfuter\" in its strict, recommended sense?",
            options: [
              "Les chercheurs ont réfuté l'hypothèse par une série d'expériences.",
              "Le suspect a réfuté être sur place, sans preuve.",
              "Elle a réfuté l'invitation à dîner.",
              "Il a réfuté de venir.",
            ],
            correctIndex: 0,
            explanation: "\"Réfuter\" means to prove wrong. A bare denial is \"démentir\" or \"nier\"; declining is \"refuser\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change \"réfuté\" to the safer verb for a mere denial.",
            source: "Le maire a réfuté les accusations sans apporter de preuve.",
            answer: "Le maire a démenti les accusations sans apporter de preuve.",
            altAnswers: ["Le maire a nié les accusations sans apporter de preuve."],
            explanation: "Without proof, the mayor only denied: \"démentir\" or \"nier\". Purists keep \"réfuter\" for proving something wrong.",
          },
        ],
      },
      {
        heading: "Objecter, s'opposer à",
        body: [
          "\"Objecter\" (to object) introduces the counter-argument, often in reported speech: \"Il m'a objecté que le délai était trop court.\" Note the construction: \"objecter quelque chose à quelqu'un\", never \"*objecter à\" + noun in the English sense of to object to something (for that, French uses \"s'opposer à\" or \"protester contre\").",
        ],
        examples: [
          { es: "Il m'a objecté que le délai était trop court.", en: "He objected that the deadline was too short." },
          { es: "Je m'oppose à ce projet.", en: "I object to this project." },
          { es: "Elle s'oppose à la fermeture de la gare.", en: "She objects to the closure of the station." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "On m'a objecté que le budget était insuffisant.",
            question: "What does it mean?",
            options: [
              "People objected to me that the budget was insufficient.",
              "I objected to the budget.",
              "The budget was rejected by me.",
              "I was told the budget was sufficient.",
            ],
            correctIndex: 0,
            explanation: "\"Objecter quelque chose à quelqu'un\": the objection is the clause after \"que\", and \"m'\" is the person it is raised against.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Nous objectons à la fermeture de l'école.",
            answer: "Nous nous opposons à la fermeture de l'école.",
            altAnswers: ["Nous protestons contre la fermeture de l'école."],
            explanation: "To object to something is \"s'opposer à\" (or \"protester contre\"), not \"objecter à\" + noun, which is an English calque.",
          },
        ],
      },
      {
        heading: "Battre en brèche, saper, mettre à mal",
        body: [
          "\"Battre en brèche\" (to demolish, to undermine, literally to batter a breach in a fortification) is a vivid image beloved of essayists: \"Cette étude bat en brèche l'idée reçue selon laquelle...\" (this study demolishes the received idea that...). \"Mettre à mal\" (to damage) and \"saper\" (to undermine) are close relatives.",
        ],
        examples: [
          {
            es: "Cette étude bat en brèche l'idée reçue selon laquelle les jeunes ne lisent plus.",
            en: "This study demolishes the received idea that young people no longer read.",
          },
          {
            es: "Ces révélations sapent la crédibilité du témoin.",
            en: "These revelations undermine the witness's credibility.",
          },
          { es: "La crise a mis à mal la confiance des épargnants.", en: "The crisis has damaged savers' confidence." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "These figures [demolish] the idea that the town is dying.",
            sentence: "Ces chiffres ___ l'idée selon laquelle la ville se meurt.",
            answer: "battent en brèche",
            altAnswers: ["sapent"],
            explanation: "\"Battre en brèche\" (to batter a breach in a wall) is the essayist's image for demolishing a received idea.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "matching",
        instructions: "Match each verb to its meaning.",
        pairs: [
          { left: "étayer", right: "to back up with evidence" },
          { left: "faire valoir", right: "to put forward, point out" },
          { left: "battre en brèche", right: "to demolish (an idea)" },
          { left: "plaider pour", right: "to argue in favour of" },
          { left: "objecter", right: "to raise as a counter-argument" },
          { left: "démentir", right: "to deny (a statement)" },
        ],
        explanation: "Each verb carries a precise nuance; together they replace the overused \"dire\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Several residents raised an objection.",
        answer: "Plusieurs habitants ont soulevé une objection.",
        altAnswers: ["Plusieurs riverains ont soulevé une objection."],
        explanation: "\"Soulever une objection\" (to raise); \"lever une objection\" would remove it.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "We can draw two conclusions from this study.",
        answer: "On peut tirer deux conclusions de cette étude.",
        altAnswers: ["Nous pouvons tirer deux conclusions de cette étude."],
        explanation: "\"Tirer une conclusion de\" (to draw a conclusion from).",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The union disputes the management's decision.",
        answer: "Le syndicat conteste la décision de la direction.",
        explanation: "\"Contester\" (to dispute, to challenge) works for figures, decisions and results.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Le porte-parole a démenti d'avoir été informé.",
        answer: "Le porte-parole a démenti avoir été informé.",
        explanation: "\"Démentir\" takes a bare infinitive: \"démentir avoir été informé\", with no \"de\".",
      },
      {
        type: "multiple-choice",
        question: "\"Étayer\" literally means to prop up a wall. Which other debate verb also comes from building or siege warfare?",
        options: ["saper", "plaider", "objecter", "soutenir que"],
        correctIndex: 0,
        explanation: "\"Saper\" means to dig under a wall to bring it down, hence to undermine. Like \"étayer\" and \"battre en brèche\", it turns an argument into a building to attack or defend.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: These leaks damage the government's credibility.",
        words: ["Ces fuites", "mettent à mal", "la crédibilité", "du gouvernement."],
        translation: "These leaks damage the government's credibility.",
        explanation: "\"Mettre à mal\" (to damage, to undermine) is a close relative of \"saper\".",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "The minister's answer [removed] all our objections.",
        sentence: "La réponse du ministre a ___ toutes nos objections.",
        answer: "levé",
        explanation: "\"Lever une objection\" removes it; \"soulever\" would raise it.",
      },
      {
        type: "dictation",
        audio: "Il étaie chaque argument par un exemple.",
        explanation: "\"Étayer par\": each argument is propped up by an example.",
      },
      {
        type: "speak",
        text: "Les médecins font valoir que les urgences sont saturées.",
        prompt: "Say it in French: Doctors point out that A&E is overwhelmed.",
        explanation: "\"Faire valoir que\" + indicative reports an argument someone puts forward.",
      },
    ],
  },
  {
    slug: "c2-debate-9",
    level: "FR-C2",
    number: 7,
    title: "L'Art du Débat et de l'Argumentation, Part 9 of 9",
    summary: "The live debate: speaking time, the moderator's language, the \"débat d'entre-deux-tours\" as a French genre, and keeping your composure under interruption.",
    duration: "18 min",
    sections: [
      {
        heading: "Le temps de parole",
        body: [
          "In French broadcasting, \"le temps de parole\" (speaking time) is not just a matter of courtesy: during election campaigns, the broadcasting regulator (l'Arcom) requires channels to give candidates equitable or equal time, and stopwatches are often shown on screen. Moderators therefore manage time constantly, and their formulas are worth knowing because you will hear them in every debate.",
        ],
        examples: [
          { es: "Vous avez dépassé votre temps de parole.", en: "You've gone over your speaking time." },
          { es: "L'Arcom veille à l'équité des temps de parole.", en: "Arcom makes sure speaking time is shared fairly." },
          { es: "Un chronomètre s'affiche à l'écran.", en: "A stopwatch is shown on screen." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Why do French moderators manage speaking time so closely?",
            options: [
              "The broadcasting regulator requires equitable or equal time for candidates.",
              "Viewers vote on who spoke best.",
              "Debates are paid by the minute.",
              "It is only a matter of courtesy.",
            ],
            correctIndex: 0,
            explanation: "During campaigns, l'Arcom requires channels to give candidates equitable or equal time: \"le temps de parole\" is a legal matter, not just courtesy.",
          },
        ],
      },
      {
        heading: "The moderator's formulas",
        body: [
          "To interrupt: \"je vous coupe\" (I'll stop you there), \"je me permets de vous interrompre\", \"on va devoir avancer\". To manage time: \"il nous reste deux minutes\", \"vous avez dépassé votre temps de parole\", \"vous êtes en avance de trente secondes sur votre adversaire\", \"je vous laisse vingt secondes\". To structure: \"passons au thème suivant\", \"on va aborder maintenant la question du pouvoir d'achat\", \"un mot de conclusion\".",
        ],
        examples: [
          { es: "Je vous coupe, il nous reste deux minutes.", en: "I'll stop you there, we have two minutes left." },
          { es: "Passons au thème suivant : la sécurité.", en: "Let's move on to the next topic: security." },
          {
            es: "On va aborder maintenant la question du pouvoir d'achat.",
            en: "We're now going to turn to the question of purchasing power.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it to the moderator's formula, starting with \"Il nous reste\".",
            source: "Nous avons encore une minute.",
            answer: "Il nous reste une minute.",
            explanation: "\"Il nous reste\" (impersonal \"il\" + \"nous\") is how a moderator announces the time left.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[We're now going to turn to] the question of housing.",
            sentence: "___ la question du logement.",
            answer: "On va aborder maintenant",
            altAnswers: ["Nous allons aborder maintenant", "On va maintenant aborder", "Nous allons maintenant aborder"],
            explanation: "\"Aborder une question\" (to turn to, to tackle): the moderator's way to structure the debate.",
          },
        ],
      },
      {
        heading: "Using the rules as a participant",
        body: [
          "As a participant, you can use the moderator's rules: \"j'ai été interrompu, je demande à récupérer mon temps de parole\" or \"je réponds en dix secondes\". Note that \"couper la parole à quelqu'un\" (to cut someone off) is a reproach, while \"je vous coupe\" from the moderator is a neutral, professional formula.",
        ],
        examples: [
          {
            es: "J'ai été interrompu, je demande à récupérer mon temps de parole.",
            en: "I was interrupted; I'd like my speaking time back.",
          },
          { es: "Arrêtez de me couper la parole, s'il vous plaît.", en: "Stop cutting me off, please." },
          { es: "Je réponds en dix secondes.", en: "I'll answer in ten seconds." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "The moderator says to you: « Je vous coupe. » How should you take it?",
            options: [
              "As a neutral, professional formula.",
              "As a personal insult.",
              "As a sign you have won the debate.",
              "As a request to speak louder.",
            ],
            correctIndex: 0,
            explanation: "From the moderator, \"je vous coupe\" is neutral. \"Couper la parole à quelqu'un\" is a reproach only when an opponent does it.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Monsieur, vous me coupez sans cesse le parole.",
            answer: "Monsieur, vous me coupez sans cesse la parole.",
            explanation: "\"La parole\" is feminine: \"couper la parole à quelqu'un\".",
          },
        ],
      },
      {
        heading: "Le débat d'entre-deux-tours",
        body: [
          "Since 1974, the two candidates who qualify for the second round of the presidential election usually face each other in a single televised debate, \"le débat d'entre-deux-tours\", watched by millions. It has strict rules: equal speaking time to the second, two moderators, themes agreed in advance, a draw to decide who speaks first, and negotiated camera angles.",
        ],
        examples: [
          {
            es: "Le débat d'entre-deux-tours oppose les deux finalistes de l'élection présidentielle.",
            en: "The debate between the two rounds pits the two finalists of the presidential election against each other.",
          },
          { es: "Le temps de parole est chronométré à la seconde près.", en: "Speaking time is measured to the second." },
          { es: "Un tirage au sort décide qui parle en premier.", en: "A draw decides who speaks first." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: The themes are agreed in advance.",
            words: ["Les thèmes", "sont", "fixés", "à l'avance."],
            translation: "The themes are agreed in advance.",
            explanation: "Strict rules: equal time, two moderators, themes fixed \"à l'avance\" (in advance).",
          },
        ],
      },
      {
        heading: "The conventions of the genre",
        body: [
          "The genre has its own conventions. Candidates address each other as \"monsieur\" or \"madame\" (never by first name), use \"vous\", and speak directly to the viewers at the opening and closing (\"Mesdames et Messieurs, mes chers compatriotes\"). Some moments have entered the language: the expression \"avoir le monopole du cœur\" (to claim to be the only one who cares) dates from the 1974 debate and is still used today.",
        ],
        examples: [
          { es: "Vous n'avez pas le monopole du cœur.", en: "You don't have a monopoly on caring." },
          { es: "Mesdames et Messieurs, mes chers compatriotes...", en: "Ladies and gentlemen, my fellow citizens..." },
          { es: "Madame, vous ne pouvez pas dire cela.", en: "Madam, you can't say that." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "How do the two candidates address each other during the debate?",
            options: [
              "« Monsieur » or « Madame », with vous",
              "By first name, with tu",
              "By first name, with vous",
              "« Cher ami », with tu",
            ],
            correctIndex: 0,
            explanation: "Convention: \"monsieur\" or \"madame\", never the first name, and \"vous\" throughout.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Nobody here [has a monopoly on] honesty.",
            sentence: "Personne ici n'a ___ l'honnêteté.",
            answer: "le monopole de",
            explanation: "\"Avoir le monopole de\" (to have a monopoly on): the 1974 line \"le monopole du cœur\" made the pattern famous.",
          },
        ],
      },
      {
        heading: "What decides a debate",
        body: [
          "What decides a debate is rarely the programme; it is \"la maîtrise des dossiers\" (command of the issues), \"la stature\" (looking presidential) and the moment when one candidate loses composure. Commentators then speak of \"un débat tendu\", \"un échange musclé\" (a tough exchange), \"un candidat déstabilisé\" or \"une prestation jugée convaincante\".",
        ],
        examples: [
          {
            es: "Les deux candidats se sont livrés à un échange musclé sur l'économie.",
            en: "The two candidates engaged in a tough exchange on the economy.",
          },
          { es: "Elle a montré une grande maîtrise de ses dossiers.", en: "She showed a strong command of the issues." },
          {
            es: "Selon les commentateurs, il est apparu déstabilisé en fin de débat.",
            en: "According to commentators, he seemed rattled towards the end of the debate.",
          },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Le candidat a paru déstabilisé face aux chiffres.",
            question: "What does it mean?",
            options: [
              "The candidate seemed rattled when faced with the figures.",
              "The candidate mastered the figures.",
              "The candidate refused to give figures.",
              "The candidate seemed bored by the figures.",
            ],
            correctIndex: 0,
            explanation: "\"Déstabilisé\" (rattled, thrown off balance): the commentators' word for a candidate who loses composure.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Her performance [was judged convincing].",
            sentence: "Sa prestation a été ___.",
            answer: "jugée convaincante",
            explanation: "\"Une prestation jugée convaincante\": both words agree with the feminine \"prestation\".",
          },
        ],
      },
      {
        heading: "Keeping or losing control",
        body: [
          "French has a family of expressions for keeping or losing control. Keeping: \"garder son calme\", \"garder son sang-froid\", \"rester maître de soi\", \"garder la tête froide\", \"ne pas se laisser déstabiliser\". Losing: \"perdre son sang-froid\", \"s'emporter\" (to lose one's temper), \"sortir de ses gonds\" (to fly off the handle), \"perdre ses moyens\" (to fall apart under pressure).",
        ],
        examples: [
          { es: "Il a su garder son sang-froid malgré les attaques.", en: "He managed to keep his cool despite the attacks." },
          {
            es: "Elle s'est emportée et a perdu le fil de son raisonnement.",
            en: "She lost her temper and lost the thread of her argument.",
          },
          { es: "Il est sorti de ses gonds au bout d'une heure.", en: "He flew off the handle after an hour." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Despite the pressure, she [kept a clear head].",
            sentence: "Malgré la pression, elle ___.",
            answer: "a gardé la tête froide",
            altAnswers: ["a gardé son sang-froid", "a gardé son calme"],
            explanation: "\"Garder la tête froide\" (to keep a clear head), like \"garder son sang-froid\" or \"rester maître de soi\".",
          },
        ],
      },
      {
        heading: "Techniques under fire",
        body: [
          "Practical techniques have their formulas too. Slow down and name the attack: \"Je constate que vous préférez les attaques aux arguments.\" Use humour: \"Je vois que le sujet vous passionne.\" Return to the audience: \"Ce qui intéresse les Français, ce n'est pas notre querelle, ce sont leurs factures.\" This last move, turning from the opponent to the viewers, is one of the most effective in a televised debate.",
        ],
        examples: [
          { es: "Je constate que vous préférez les attaques aux arguments.", en: "I note that you prefer attacks to arguments." },
          { es: "Je vois que le sujet vous passionne.", en: "I can see the subject excites you." },
          {
            es: "Ce qui intéresse les Français, ce n'est pas notre querelle, ce sont leurs factures.",
            en: "What matters to the French isn't our quarrel, it's their bills.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Your opponent shouts and interrupts you. Which reply keeps your composure and wins the audience?",
            options: [
              "Ce qui compte pour les auditeurs, ce n'est pas notre dispute, c'est leur loyer.",
              "Taisez-vous, vous êtes ridicule !",
              "Si vous continuez, je m'en vais.",
              "Tu te calmes, oui ?",
            ],
            correctIndex: 0,
            explanation: "Turning from the opponent to the audience (\"ce qui compte pour les auditeurs...\") is one of the most effective moves. The others lose composure or switch to \"tu\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the outburst into a calm observation, starting with \"Je constate que\".",
            source: "Vous ne faites qu'attaquer !",
            answer: "Je constate que vous ne faites qu'attaquer.",
            explanation: "Slow down and name the attack: \"je constate que\" + indicative sounds factual, not angry.",
          },
        ],
      },
      {
        heading: "Irony must stay light",
        body: [
          "Finally, irony must stay light. \"Je vous remercie de cette leçon\" can work once; repeated, it becomes contempt, and French viewers punish \"l'arrogance\" and \"le mépris\" severely. The candidate judged \"méprisant\" (contemptuous) usually loses the debate, whatever the quality of his arguments.",
        ],
        examples: [
          { es: "Son ton méprisant lui a coûté le débat.", en: "His contemptuous tone cost him the debate." },
          { es: "Le mépris ne pardonne pas à la télévision.", en: "Contempt is never forgiven on television." },
          { es: "Une pointe d'humour, pas plus.", en: "A touch of humour, no more." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[His contemptuous tone] annoyed the viewers.",
            sentence: "___ a agacé les téléspectateurs.",
            answer: "Son ton méprisant",
            explanation: "\"Méprisant\" (contemptuous): French viewers punish \"le mépris\" severely, whatever the arguments.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "You are thirty seconds ahead of your opponent.",
        answer: "Vous êtes en avance de trente secondes sur votre adversaire.",
        altAnswers: ["Vous avez trente secondes d'avance sur votre adversaire."],
        explanation: "\"Être en avance de... sur\": the moderator's way of keeping speaking time balanced.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The minister flew off the handle.",
        answer: "Le ministre est sorti de ses gonds.",
        explanation: "\"Sortir de ses gonds\" (literally to come off one's hinges) takes \"être\" in the passé composé.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Le candidat s'est emporté et a perdue ses moyens.",
        answer: "Le candidat s'est emporté et a perdu ses moyens.",
        explanation: "With \"avoir\", the participle does not agree with the subject: \"a perdu\". (\"S'est emporté\" agrees, but the subject is masculine anyway.)",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Her humour won over the audience.",
        answer: "Son humour a conquis le public.",
        altAnswers: ["Son humour a séduit le public."],
        explanation: "\"Conquérir\" (to win over) has the participle \"conquis\". Light humour helps; contempt does not.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: The two finalists face each other on television.",
        words: ["Les deux finalistes", "s'affrontent", "à la télévision."],
        translation: "The two finalists face each other on television.",
        explanation: "\"S'affronter\" (to face each other, to clash): the reciprocal pronominal verb.",
      },
      {
        type: "matching",
        instructions: "Match each expression to its meaning.",
        pairs: [
          { left: "garder son sang-froid", right: "to keep one's cool" },
          { left: "s'emporter", right: "to lose one's temper" },
          { left: "perdre ses moyens", right: "to fall apart under pressure" },
          { left: "sortir de ses gonds", right: "to fly off the handle" },
          { left: "garder la tête froide", right: "to keep a clear head" },
        ],
        explanation: "The vocabulary commentators use the morning after a debate.",
      },
      {
        type: "dictation",
        audio: "On va devoir avancer, il nous reste une minute.",
        explanation: "Two moderator formulas in one: \"on va devoir avancer\" (we'll have to move on) and \"il nous reste\".",
      },
      {
        type: "speak",
        text: "Je réponds en dix secondes : les chiffres sont faux.",
        prompt: "Say it in French: I'll answer in ten seconds: the figures are wrong.",
        explanation: "Using the moderator's rules: offer a short answer, then deliver the fact.",
      },
    ],
  },
  {
    slug: "c2-argument-grammar-spiral",
    level: "FR-C2",
    number: 8,
    title: "Spiral Review: La Grammaire de l'Argumentation",
    summary: "The grammar behind a good debate, mixed: the subjunctive after negated opinion, concessives, unreal conditionals, \"c'est... que\" clefts, dislocation and the hearsay conditional.",
    duration: "18 min",
    sections: [
      {
        heading: "Moods after opinion and doubt",
        body: [
          "This review mixes the grammar you have used throughout Units 13 and 14. No new rules: fresh sentences, with the traps placed where they occur in real argument. First, the moods: affirmative opinion + indicative (\"je crois que c'est juste\"), negated or questioned opinion + subjunctive (\"je ne crois pas que ce soit juste\"), doubt + subjunctive (\"je doute qu'il le sache\").",
        ],
        examples: [
          {
            es: "Je ne crois pas que cette réforme soit juste, bien qu'elle parte d'une bonne intention.",
            en: "I don't think this reform is fair, although it comes from good intentions.",
          },
          { es: "Je doute que le ministre connaisse ces chiffres.", en: "I doubt the minister knows these figures." },
          { es: "Je crois que cette mesure est utile.", en: "I believe this measure is useful." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which verb form completes « Je doute que le maire ___ la vérité » ?",
            options: ["dise", "dit", "dira", "dirait"],
            correctIndex: 0,
            explanation: "Doubt takes the subjunctive: \"je doute qu'il dise\". The indicative \"dit\" would only follow an affirmative opinion such as \"je crois que\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it negative, starting with \"Je ne pense pas que\".",
            source: "Je pense que ce compromis est équitable.",
            answer: "Je ne pense pas que ce compromis soit équitable.",
            explanation: "An affirmative opinion takes the indicative (\"est\"); once negated, it takes the subjunctive (\"soit\").",
          },
        ],
      },
      {
        heading: "Concession: five patterns, five moods",
        body: [
          "Then concession: \"bien que / quoique\" + subjunctive, \"même si\" + indicative, \"avoir beau\" + infinitive, \"quand bien même\" + conditional, \"tout + adjective + que\" + indicative. The concessive is where long sentences go wrong, so read each example aloud and identify the mood before the meaning.",
        ],
        examples: [
          {
            es: "Même si les chiffres s'améliorent, le malaise persiste.",
            en: "Even if the figures are improving, the unease persists.",
          },
          {
            es: "Le gouvernement a beau répéter que tout va bien, les Français n'y croient pas.",
            en: "No matter how often the government says all is well, the French don't believe it.",
          },
          {
            es: "Quand bien même nous aurions les moyens, le calendrier serait trop serré.",
            en: "Even if we had the means, the schedule would be too tight.",
          },
          {
            es: "Tout imparfait qu'il est, ce compromis vaut mieux qu'un blocage.",
            en: "Imperfect as it is, this compromise is better than deadlock.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[No matter how much we] protest, the decision has been made.",
            sentence: "Nous ___ protester, la décision est prise.",
            answer: "avons beau",
            explanation: "\"Avoir beau\" + infinitive: the concession is in the verb \"avoir\", conjugated for \"nous\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Bien qu'il a raison, personne ne l'écoute.",
            answer: "Bien qu'il ait raison, personne ne l'écoute.",
            altAnswers: ["Quoiqu'il ait raison, personne ne l'écoute.", "Même s'il a raison, personne ne l'écoute."],
            explanation: "\"Bien que\" always takes the subjunctive: \"qu'il ait\". The indicative \"a\" belongs after \"même si\".",
          },
        ],
      },
      {
        heading: "The unreal conditional",
        body: [
          "Arguments about consequences need the unreal conditional. Present unreal: \"si\" + imparfait, conditional present: \"Si nous ne faisions rien, nous aurions à payer bien plus cher demain.\" Past unreal: \"si\" + plus-que-parfait, conditional past: \"Si nous avions agi plus tôt, nous n'en serions pas là\" (mixed: past condition, present result) or \"...nous aurions évité la crise\" (past result).",
        ],
        examples: [
          {
            es: "Si nous ne faisions rien, nous aurions à payer bien plus cher demain.",
            en: "If we did nothing, we'd have to pay far more tomorrow.",
          },
          {
            es: "Si nous avions agi plus tôt, nous n'en serions pas là.",
            en: "If we'd acted sooner, we wouldn't be where we are now.",
          },
          {
            es: "Si l'État avait investi en 2010, la crise aurait été évitée.",
            en: "If the state had invested in 2010, the crisis would have been avoided.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "If we raised taxes, we would lose voters.",
            answer: "Si nous augmentions les impôts, nous perdrions des électeurs.",
            altAnswers: [
              "Si on augmentait les impôts, on perdrait des électeurs.",
              "Si nous augmentions les impôts, nous perdrions nos électeurs.",
            ],
            explanation: "Present unreal: \"si\" + imparfait (\"augmentions\"), then the conditional present (\"perdrions\").",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "If the town [had built] a bridge, traffic would flow better today.",
            sentence: "Si la ville ___ un pont, la circulation serait plus fluide aujourd'hui.",
            answer: "avait construit",
            explanation: "Mixed unreal: past condition in the plus-que-parfait (\"avait construit\"), present result in the conditional (\"serait\").",
          },
        ],
      },
      {
        heading: "The si trap, and ne serait-ce que",
        body: [
          "The trap: never put the conditional after \"si\" (\"*si nous ferions\"). And in formal writing, you may meet the literary inversion without \"si\": \"Eussions-nous agi plus tôt, nous aurions évité la crise\" (recognition only). In speech, \"ne serait-ce que\" (if only, even just) is a useful hypothetical: \"ne serait-ce que pour des raisons budgétaires\".",
        ],
        examples: [
          {
            es: "Il faudrait revoir ce projet, ne serait-ce que pour des raisons budgétaires.",
            en: "This project should be reviewed, if only for budgetary reasons.",
          },
          {
            es: "Que se passerait-il si tout le monde raisonnait ainsi ?",
            en: "What would happen if everyone reasoned like that?",
          },
          {
            es: "Eussions-nous agi plus tôt, nous aurions évité la crise.",
            en: "Had we acted sooner, we would have avoided the crisis.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence is correct?",
            options: [
              "Si les loyers baissaient, les familles resteraient en ville.",
              "Si les loyers baisseraient, les familles resteraient en ville.",
              "Si les loyers baissent, les familles resteraient en ville.",
              "Si les loyers auraient baissé, les familles resteraient en ville.",
            ],
            correctIndex: 0,
            explanation: "Never the conditional after \"si\": \"si\" + imparfait, then the conditional. \"Si... baissent\" would call for a future, not \"resteraient\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Si la mairie aurait écouté les habitants, le projet n'aurait pas échoué.",
            answer: "Si la mairie avait écouté les habitants, le projet n'aurait pas échoué.",
            explanation: "No conditional after \"si\": the past condition takes the plus-que-parfait (\"avait écouté\"); the conditional goes in the result clause.",
          },
        ],
      },
      {
        heading: "Clefts and dislocation",
        body: [
          "Clefts focus one element: \"c'est la méthode que je conteste, pas l'objectif\"; \"c'est à vous qu'il revient de trancher\". Dislocation sets up a topic and takes it up with a pronoun: \"Cette réforme, je la crois nécessaire\"; \"Le chômage, on en parle beaucoup, mais on l'explique mal.\" Both are essential in debate: they tell the audience exactly what you are talking about.",
        ],
        examples: [
          { es: "C'est la méthode que je conteste, pas l'objectif.", en: "It's the method I'm challenging, not the goal." },
          { es: "C'est à vous qu'il revient de trancher.", en: "It's up to you to decide." },
          { es: "Cette réforme, je la crois nécessaire.", en: "This reform, I believe it's necessary." },
          {
            es: "Le chômage, on en parle beaucoup, mais on l'explique mal.",
            en: "Unemployment: we talk about it a lot, but we explain it badly.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into a cleft that puts the focus on the timetable.",
            source: "Je conteste le calendrier, pas le principe.",
            answer: "C'est le calendrier que je conteste, pas le principe.",
            explanation: "\"C'est... que\" focuses the object: the audience knows exactly what you are challenging.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Nuclear power: everyone [talks about it], but few understand it.",
            sentence: "Le nucléaire, tout le monde ___ parle, mais peu le comprennent.",
            answer: "en",
            explanation: "Dislocation takes up the topic with a pronoun: \"parler de\" gives \"en\", \"comprendre\" + direct object gives \"le\".",
          },
        ],
      },
      {
        heading: "The hearsay conditional",
        body: [
          "The hearsay conditional distances you from a claim you report: \"Le gouvernement préparerait une nouvelle taxe\" (the government is reportedly preparing...). In a debate, it lets you cite rumours without endorsing them, and lets you challenge your opponent: \"Selon vous, cette mesure aurait coûté dix milliards. D'où tenez-vous ce chiffre ?\"",
        ],
        examples: [
          {
            es: "Le gouvernement préparerait une nouvelle taxe sur les billets d'avion.",
            en: "The government is reportedly preparing a new tax on plane tickets.",
          },
          {
            es: "Selon vous, cette mesure aurait coûté dix milliards. D'où tenez-vous ce chiffre ?",
            en: "According to you, this measure cost ten billion. Where did you get that figure?",
          },
          {
            es: "Le ministre aurait menti, selon plusieurs témoins.",
            en: "The minister reportedly lied, according to several witnesses.",
          },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Selon la presse, l'entreprise aurait supprimé trois cents postes.",
            question: "What does it mean?",
            options: [
              "According to the press, the company has reportedly cut three hundred jobs.",
              "According to the press, the company would cut three hundred jobs if it had to.",
              "The press has proved that the company cut three hundred jobs.",
              "According to the press, the company will cut three hundred jobs.",
            ],
            correctIndex: 0,
            explanation: "The past conditional \"aurait supprimé\" reports an unconfirmed fact: the hearsay conditional, not a hypothesis.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it to the hearsay conditional, to report it without endorsing it.",
            source: "Le maire va démissionner.",
            answer: "Le maire démissionnerait.",
            altAnswers: ["Le maire serait sur le point de démissionner.", "Le maire s'apprêterait à démissionner."],
            explanation: "The hearsay conditional (\"démissionnerait\") passes on a rumour while keeping your distance from it.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "No matter how often the government says all is well, nobody believes it.",
        answer: "Le gouvernement a beau répéter que tout va bien, personne n'y croit.",
        altAnswers: [
          "Le gouvernement a beau répéter que tout va bien, personne ne le croit.",
          "Le gouvernement a beau dire que tout va bien, personne n'y croit.",
          "Le gouvernement a beau dire que tout va bien, personne ne le croit.",
        ],
        explanation: "\"Avoir beau\" + infinitive; \"y croire\" (to believe in it) or \"le croire\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "If only for the children, we should keep this park.",
        answer: "Ne serait-ce que pour les enfants, nous devrions garder ce parc.",
        altAnswers: [
          "Ne serait-ce que pour les enfants, il faudrait garder ce parc.",
          "Ne serait-ce que pour les enfants, on devrait garder ce parc.",
          "Ne serait-ce que pour les enfants, nous devrions conserver ce parc.",
        ],
        explanation: "\"Ne serait-ce que\" (if only, even just) adds one minimal reason that is hard to refuse.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "It's the price that worries me, not the quality.",
        answer: "C'est le prix qui m'inquiète, pas la qualité.",
        explanation: "When the focused element is the subject, the cleft uses \"qui\", not \"que\": \"c'est le prix qui m'inquiète\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Cette loi, je crois nécessaire.",
        answer: "Cette loi, je la crois nécessaire.",
        explanation: "Dislocation needs the pronoun that takes up the topic: \"cette loi... je la crois\".",
      },
      {
        type: "multiple-choice",
        question: "Which sentence contains an error?",
        options: [
          "Même si la croissance soit faible, l'emploi progresse.",
          "Bien que la croissance soit faible, l'emploi progresse.",
          "Même si la croissance est faible, l'emploi progresse.",
          "Quoique la croissance soit faible, l'emploi progresse.",
        ],
        correctIndex: 0,
        explanation: "\"Même si\" never takes the subjunctive.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Even if the minister resigned, nothing would change.",
        words: ["Quand bien même", "le ministre", "démissionnerait,", "rien", "ne changerait."],
        translation: "Even if the minister resigned, nothing would change.",
        explanation: "\"Quand bien même\" takes the conditional in both clauses, unlike \"si\".",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "[Solid as it is], this argument does not convince me.",
        sentence: "___, cet argument ne me convainc pas.",
        answer: "Tout solide qu'il est",
        explanation: "\"Tout + adjective + que\" + indicative concedes a quality before rejecting the conclusion.",
      },
      {
        type: "dictation",
        audio: "Je doute que vous ayez lu le rapport.",
        explanation: "Doubt + subjunctive: \"que vous ayez lu\" (past subjunctive of \"lire\").",
      },
      {
        type: "speak",
        text: "Si la région avait investi dans le rail, nous n'aurions pas tant de camions.",
        prompt: "Say it in French: If the region had invested in rail, we wouldn't have so many lorries.",
        explanation: "Mixed unreal: \"si\" + plus-que-parfait for the past condition, conditional present for today's result.",
      },
    ],
  },
  {
    slug: "c2-vocab-intensifying-collocations",
    level: "FR-C2",
    number: 9,
    title: "Mastery Vocabulary: Intensifying Collocations",
    summary: "The adjective a native pairs with the noun: \"une erreur grossière\", \"une ignorance crasse\", \"une peur bleue\", \"une colère noire\", \"un échec cuisant\", \"un succès retentissant\", \"un refus catégorique\" and more.",
    duration: "17 min",
    sections: [
      {
        heading: "What a collocation is",
        body: [
          "A collocation is a pairing that natives make without thinking and learners rarely guess. English says a glaring error, French says \"une erreur grossière\" (gross, blatant); English says abysmal ignorance, French says \"une ignorance crasse\" (the noun \"crasse\" means grime). Using \"très grande\" or \"énorme\" everywhere is correct but flat; the right collocation is what makes Mastery French sound native.",
        ],
        examples: [
          {
            es: "Le rapport contient une erreur grossière dans le calcul des coûts.",
            en: "The report contains a glaring error in the cost calculation.",
          },
          { es: "Il a fait preuve d'une ignorance crasse du dossier.", en: "He showed abysmal ignorance of the issue." },
          { es: "Une erreur aussi grossière aurait dû être repérée.", en: "Such a glaring error should have been spotted." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which phrase sounds most native for a glaring mistake in the figures?",
            options: [
              "une erreur grossière dans les chiffres",
              "une très grande erreur dans les chiffres",
              "une erreur crasse dans les chiffres",
              "une erreur cuisante dans les chiffres",
            ],
            correctIndex: 0,
            explanation: "\"Une erreur grossière\" is the native pairing. \"Très grande\" is correct but flat; \"crasse\" goes with \"ignorance\" and \"cuisant\" with \"échec\".",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The minister showed [abysmal ignorance] of farming.",
            sentence: "Le ministre a fait preuve d'___ de l'agriculture.",
            answer: "une ignorance crasse",
            explanation: "\"Une ignorance crasse\" (abysmal ignorance): the adjective \"crasse\" pairs with \"ignorance\" and almost nothing else.",
          },
        ],
      },
      {
        heading: "Failure and mistakes",
        body: [
          "For failure: \"un échec cuisant\" (a stinging failure, from \"cuire\", to burn) and \"une défaite cuisante\"; \"un revers\" (a setback), \"un fiasco total\". For mistakes: \"une faute lourde\" (serious misconduct; in labour law, the gravest category, implying intent to harm the employer), \"une bévue\" (a blunder), \"une erreur de jugement\".",
        ],
        examples: [
          {
            es: "La liste a subi un échec cuisant aux municipales.",
            en: "The list suffered a stinging defeat in the local elections.",
          },
          { es: "C'est une défaite cuisante pour le gouvernement.", en: "It's a humiliating defeat for the government." },
          {
            es: "Le salarié a été licencié pour faute lourde.",
            en: "The employee was dismissed for wilful misconduct (gross misconduct with intent to harm the employer).",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The team suffered [a stinging defeat] at home.",
            sentence: "L'équipe a subi ___ à domicile.",
            answer: "une défaite cuisante",
            altAnswers: ["un échec cuisant"],
            explanation: "\"Cuisant\" (from \"cuire\", to burn) agrees with the feminine \"défaite\": \"une défaite cuisante\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "It was a blunder, not a crime.",
            answer: "C'était une bévue, pas un crime.",
            altAnswers: ["C'est une bévue, pas un crime.", "Il s'agissait d'une bévue, pas d'un crime."],
            explanation: "\"Une bévue\" (a blunder) is a clumsy mistake, far lighter than \"une faute lourde\".",
          },
        ],
      },
      {
        heading: "Fixed intensifiers",
        body: [
          "Some intensifiers are fixed to one noun and never move: \"une ignorance crasse\" but not \"*une erreur crasse\"; \"un échec cuisant\" but not \"*un succès cuisant\". Learn them as blocks, the way you learn a noun with its gender.",
        ],
        examples: [
          { es: "Il a fait preuve d'une ignorance crasse du dossier.", en: "He showed abysmal ignorance of the issue." },
          { es: "Ce choix relève d'une grave erreur de jugement.", en: "This choice reflects a serious error of judgement." },
          { es: "Un échec cuisant, jamais un succès cuisant.", en: "A stinging failure, never a stinging success." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Le festival a connu un succès cuisant.",
            answer: "Le festival a connu un succès retentissant.",
            altAnswers: ["Le festival a connu un succès éclatant."],
            explanation: "\"Cuisant\" is fixed to failure (\"un échec cuisant\"); success is \"retentissant\" (resounding).",
          },
        ],
      },
      {
        heading: "Emotions in colour",
        body: [
          "French colours emotions in a way English does not: \"une peur bleue\" (a terrible fright, literally a blue fear), \"une colère noire\" (a towering rage), \"rire jaune\" (to laugh without meaning it), \"voir rouge\" (to see red). These colour adjectives are fixed: \"*une peur noire\" or \"*une colère bleue\" sound wrong.",
        ],
        examples: [
          { es: "Elle a une peur bleue des araignées.", en: "She's terrified of spiders." },
          {
            es: "Quand il a appris la nouvelle, il est entré dans une colère noire.",
            en: "When he heard the news, he flew into a towering rage.",
          },
          {
            es: "Elle a ri jaune quand on a évoqué ses résultats.",
            en: "She laughed it off awkwardly when her results were mentioned.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Your boss hears that his project has been cancelled. Which sentence describes his reaction?",
            options: [
              "Il est entré dans une colère noire.",
              "Il est entré dans une colère bleue.",
              "Il a eu une peur noire.",
              "Il a ri rouge.",
            ],
            correctIndex: 0,
            explanation: "The colours are fixed: \"une colère noire\", \"une peur bleue\", \"rire jaune\", \"voir rouge\". Swapping them sounds wrong.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change \"a été très en colère\" to the colour expression with \"voir\".",
            source: "Quand elle a vu la facture, elle a été très en colère.",
            answer: "Quand elle a vu la facture, elle a vu rouge.",
            altAnswers: ["Quand elle a vu la facture, elle est entrée dans une colère noire."],
            explanation: "\"Voir rouge\" (to see red) intensifies anger with a colour, like \"une colère noire\".",
          },
        ],
      },
      {
        heading: "Physical images, belief and silence",
        body: [
          "Physical images intensify feelings: \"une haine viscérale\" (a gut hatred), \"une peur panique\", \"une joie débordante\" (overflowing), \"une tristesse profonde\", \"une douleur aiguë\" (sharp pain). For belief and silence: \"une foi aveugle\" (blind faith), \"une confiance absolue\", \"un silence de mort\" (a deathly silence), \"un silence pesant\" (a heavy, awkward silence).",
        ],
        examples: [
          {
            es: "Leur foi aveugle dans le progrès technique m'inquiète.",
            en: "Their blind faith in technological progress worries me.",
          },
          { es: "Un silence de mort s'est abattu sur la salle.", en: "A deathly silence fell over the room." },
          { es: "Après sa remarque, un silence pesant s'est installé.", en: "After his remark, an awkward silence set in." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Une joie débordante a envahi le stade.",
            question: "What does it mean?",
            options: [
              "Overflowing joy swept through the stadium.",
              "The stadium overflowed with fans.",
              "A quiet joy settled over the stadium.",
              "The joy in the stadium was exaggerated.",
            ],
            correctIndex: 0,
            explanation: "\"Une joie débordante\" (overflowing joy): \"déborder\" is what a river does when it bursts its banks.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "She felt [a sharp pain] in her knee.",
            sentence: "Elle a ressenti ___ au genou.",
            answer: "une douleur aiguë",
            explanation: "\"Une douleur aiguë\" (sharp pain); note the diaeresis on the feminine \"aiguë\".",
          },
        ],
      },
      {
        heading: "Where to use them, and the preposition",
        body: [
          "These collocations are especially useful in portraits, narratives and the analysis of speeches: \"une haine viscérale de l'injustice\", \"une foi aveugle dans le progrès\". Note the preposition: \"la foi en\" or \"dans\", \"la haine de\", \"la peur de\".",
        ],
        examples: [
          { es: "Il voue une haine viscérale à l'injustice.", en: "He has a gut hatred of injustice." },
          { es: "Il a une peur panique de l'avion.", en: "He's terrified of flying." },
          { es: "Elle garde une confiance absolue en son équipe.", en: "She keeps absolute confidence in her team." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Il a une haine viscérale pour le mensonge.",
            answer: "Il a une haine viscérale du mensonge.",
            explanation: "\"La haine de\" (de + le = du), not \"pour\": the preposition belongs to the noun, as in \"la peur de\" and \"la foi en\".",
          },
        ],
      },
      {
        heading: "Success and criticism",
        body: [
          "Success: \"un succès retentissant\" (resounding), \"une victoire éclatante\" (brilliant, dazzling), \"un triomphe\", \"une majorité écrasante\" (overwhelming). Criticism: \"une critique cinglante\" (scathing, from \"cingler\", to lash), \"un réquisitoire implacable\" (a relentless indictment), \"une charge violente contre\".",
        ],
        examples: [
          { es: "Le film a remporté un succès retentissant.", en: "The film was a resounding success." },
          { es: "La loi a été adoptée à une majorité écrasante.", en: "The law was passed by an overwhelming majority." },
          {
            es: "L'éditorial adresse une critique cinglante au ministre.",
            en: "The editorial delivers a scathing criticism of the minister.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The team won a dazzling victory.",
            answer: "L'équipe a remporté une victoire éclatante.",
            altAnswers: ["L'équipe a remporté une éclatante victoire."],
            explanation: "\"Remporter une victoire\", intensified by \"éclatante\" (brilliant, dazzling).",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The prosecutor delivered [a relentless indictment] against the fraudsters.",
            sentence: "Le procureur a prononcé ___ contre les fraudeurs.",
            answer: "un réquisitoire implacable",
            explanation: "\"Un réquisitoire implacable\": originally a prosecutor's speech, now any relentless attack.",
          },
        ],
      },
      {
        heading: "Refusal and denial",
        body: [
          "Refusal and denial: \"un refus catégorique\" (flat refusal), \"un démenti formel\" (an official, categorical denial), \"une fin de non-recevoir\" (a flat rejection, from legal French). \"Opposer une fin de non-recevoir à une demande\" is a favourite phrase of political journalists.",
        ],
        examples: [
          { es: "Le syndicat a opposé un refus catégorique à la proposition.", en: "The union flatly rejected the proposal." },
          {
            es: "Le ministère a opposé une fin de non-recevoir à notre demande.",
            en: "The ministry flatly turned down our request.",
          },
          { es: "La direction s'est heurtée à un refus catégorique.", en: "Management met with a flat refusal." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the plain refusal into the journalists' phrase with \"une fin de non-recevoir\".",
            source: "La préfecture a refusé notre demande.",
            answer: "La préfecture a opposé une fin de non-recevoir à notre demande.",
            explanation: "\"Opposer une fin de non-recevoir à\" + request: the formal, legal-sounding flat rejection.",
          },
        ],
      },
      {
        heading: "The trap with formel",
        body: [
          "A trap with \"formel\": in French it often means categorical, explicit (\"un démenti formel\", \"une interdiction formelle\"), not formal in the sense of ceremonial (\"une cérémonie officielle\", \"une tenue de soirée\"). \"Je suis formel\" means I am absolutely certain.",
        ],
        examples: [
          { es: "L'Élysée a publié un démenti formel.", en: "The presidential palace issued a categorical denial." },
          { es: "Je suis formel : il était là à vingt heures.", en: "I'm absolutely certain: he was there at eight p.m." },
          { es: "Il est formellement interdit de fumer ici.", en: "Smoking is strictly forbidden here." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The doctor [is absolutely certain]: it's nothing serious.",
            sentence: "Le médecin ___ : ce n'est rien de grave.",
            answer: "est formel",
            altAnswers: ["est catégorique"],
            explanation: "\"Être formel\" means to be absolutely certain, not to be formal.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "matching",
        instructions: "Match each noun with its usual intensifier.",
        pairs: [
          { left: "une erreur", right: "grossière" },
          { left: "une ignorance", right: "crasse" },
          { left: "un échec", right: "cuisant" },
          { left: "une peur", right: "bleue" },
          { left: "une critique", right: "cinglante" },
          { left: "un succès", right: "retentissant" },
        ],
        explanation: "Fixed pairs: learn the noun with its adjective as one block.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The candidate made a serious error of judgement.",
        answer: "Le candidat a commis une grave erreur de jugement.",
        altAnswers: ["Le candidat a fait une grave erreur de jugement.", "Le candidat a commis une sérieuse erreur de jugement."],
        explanation: "\"Commettre une erreur de jugement\", with \"grave\" before the noun.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "They have blind faith in their leader.",
        answer: "Ils ont une foi aveugle en leur chef.",
        altAnswers: [
          "Ils ont une foi aveugle dans leur chef.",
          "Ils ont une foi aveugle en leur dirigeant.",
          "Elles ont une foi aveugle en leur chef.",
        ],
        explanation: "\"Une foi aveugle\" (blind faith), followed by \"en\" or \"dans\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The ministry issued a categorical denial.",
        answer: "Le ministère a publié un démenti formel.",
        altAnswers: [
          "Le ministère a opposé un démenti formel.",
          "Le ministère a apporté un démenti formel.",
          "Le ministère a formellement démenti.",
        ],
        explanation: "\"Formel\" here means categorical; \"un démenti\" is an official denial.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Elle a une peur noire des serpents.",
        answer: "Elle a une peur bleue des serpents.",
        explanation: "The colour is fixed: fear is blue (\"une peur bleue\"), rage is black (\"une colère noire\").",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: The press launched a violent attack on the minister.",
        words: ["La presse", "a lancé", "une charge violente", "contre", "le ministre."],
        translation: "The press launched a violent attack on the minister.",
        explanation: "\"Une charge violente contre\" (a violent attack on): the military image of a charge.",
      },
      {
        type: "multiple-choice",
        question: "Which pairing is natural French?",
        options: ["une colère noire", "une colère bleue", "une peur noire", "une erreur crasse"],
        correctIndex: 0,
        explanation: "Anger is black, fear is blue, ignorance is \"crasse\", errors are \"grossières\".",
      },
      {
        type: "listen-choose",
        audio: "Le témoin est formel : la voiture était rouge.",
        question: "What does it mean?",
        options: [
          "The witness is absolutely certain: the car was red.",
          "The witness is speaking formally: the car was red.",
          "The witness was formally dressed: the car was red.",
          "Officially, the car may have been red.",
        ],
        correctIndex: 0,
        explanation: "\"Être formel\" means to be categorical, absolutely certain. Formal in the ceremonial sense is \"officiel\" or \"de cérémonie\".",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "The president was re-elected [by an overwhelming majority].",
        sentence: "Le président a été réélu ___.",
        answer: "à une majorité écrasante",
        explanation: "\"À une majorité écrasante\" (overwhelming, literally crushing), with the preposition \"à\".",
      },
      {
        type: "dictation",
        audio: "Le projet s'est soldé par un fiasco total.",
        explanation: "\"Se solder par un fiasco total\" (to end in total fiasco), the financial image of a final balance.",
      },
      {
        type: "speak",
        text: "Le ministre a essuyé un revers cuisant.",
        prompt: "Say it in French: The minister suffered a stinging setback.",
        explanation: "\"Essuyer un revers\" (to suffer a setback), intensified by \"cuisant\".",
      },
    ],
  },
  {
    slug: "c2-vocab-portraits-in-context",
    level: "FR-C2",
    number: 10,
    title: "Vocabulary in Context: Portraits and Adjective Position",
    summary: "Describe people with literary precision, and master the adjectives whose meaning changes with position: \"un grand homme\" / \"un homme grand\", \"un ancien élève\", \"un pauvre homme\", \"sa propre chambre\", \"un certain âge\".",
    duration: "18 min",
    sections: [
      {
        heading: "Before or after: the rule of thumb",
        body: [
          "Most French adjectives follow the noun, and a few short, common ones precede it (\"grand\", \"petit\", \"beau\", \"bon\", \"vieux\"). But a group of adjectives changes meaning with position. The rule of thumb: after the noun, the adjective has its literal, objective meaning; before it, a figurative, subjective or evaluative one.",
        ],
        examples: [
          {
            es: "Victor Hugo était un grand homme, mais pas un homme grand.",
            en: "Victor Hugo was a great man, but not a tall man.",
          },
          {
            es: "« Aux grands hommes, la patrie reconnaissante »",
            en: "'To great men, from a grateful nation' (the inscription on the Pantheon in Paris)",
          },
          { es: "Un homme grand n'est pas forcément un grand homme.", en: "A tall man is not necessarily a great man." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "For the adjectives that change meaning with position, which meaning usually goes with the position after the noun?",
            options: [
              "The literal, objective meaning",
              "The figurative, evaluative meaning",
              "An ironic meaning",
              "There is no difference in meaning",
            ],
            correctIndex: 0,
            explanation: "After the noun: literal and objective (\"un homme grand\", tall). Before it: figurative or evaluative (\"un grand homme\", great).",
          },
        ],
      },
      {
        heading: "Grand, pauvre, ancien, propre",
        body: [
          "\"Un homme grand\" is tall; \"un grand homme\" is great (\"Aux grands hommes, la patrie reconnaissante\", engraved on the Panthéon). \"Un homme pauvre\" has no money; \"un pauvre homme\" is pitiable. \"Une maison ancienne\" is old; \"une ancienne maison\" is former (the house we used to have), and \"un ancien élève\" is a former pupil, an alumnus. \"Une chambre propre\" is clean; \"sa propre chambre\" is his own room.",
        ],
        examples: [
          { es: "Le pauvre homme avait tout perdu dans l'incendie.", en: "The poor man had lost everything in the fire." },
          {
            es: "C'est un ancien élève de l'école, devenu ministre.",
            en: "He's a former pupil of the school who became a minister.",
          },
          {
            es: "Ils vivent dans une maison ancienne au cœur du village.",
            en: "They live in an old house in the heart of the village.",
          },
          { es: "À quinze ans, elle a enfin eu sa propre chambre.", en: "At fifteen, she finally had her own room." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Our [former mayor] has written a book.",
            sentence: "Notre ___ a écrit un livre.",
            answer: "ancien maire",
            explanation: "Before the noun, \"ancien\" means former; after it, old (\"une maison ancienne\").",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it so the room is his own, not a clean one.",
            source: "Il a enfin une chambre propre.",
            answer: "Il a enfin sa propre chambre.",
            explanation: "Before the noun, \"propre\" means own (with a possessive: \"sa propre chambre\"); after it, clean.",
          },
        ],
      },
      {
        heading: "More pairs",
        body: [
          "More pairs: \"un certain âge\" (a fairly advanced age, a euphemism) vs \"une chose certaine\" (a sure thing); \"un cher ami\" (dear) vs \"une robe chère\" (expensive); \"un seul homme\" (only one man) vs \"un homme seul\" (a lonely man, a man on his own); \"un brave homme\" (a decent man) vs \"un homme brave\" (brave, in literary use); \"un sale type\" (a nasty character) vs \"des mains sales\" (dirty hands).",
        ],
        examples: [
          { es: "C'est une dame d'un certain âge, très élégante.", en: "She's a lady of a certain age, very elegant." },
          { es: "Ce sale type m'a menti.", en: "That nasty piece of work lied to me." },
          { es: "C'est un cher ami de la famille.", en: "He's a dear friend of the family." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What does « un homme seul » mean?",
            options: ["a lonely man, a man on his own", "only one man", "a single (unmarried) man only", "the only man"],
            correctIndex: 0,
            explanation: "After the noun, \"seul\" means alone; before, \"un seul homme\" means only one man.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Elle porte toujours des chères robes.",
            answer: "Elle porte toujours des robes chères.",
            explanation: "Expensive is \"cher\" after the noun (\"des robes chères\"); before it, \"cher\" means dear (\"un cher ami\").",
          },
        ],
      },
      {
        heading: "The physical portrait: build, face, look",
        body: [
          "A literary portrait goes from the general impression to telling details. Build: \"une silhouette élancée\" (slender), \"trapue\" (stocky), \"voûtée\" (stooped). Face: \"des traits fins\" (delicate features), \"émaciés\" (gaunt), \"un visage buriné\" (weathered, literally engraved), \"un teint hâlé\" (tanned) or \"blafard\" (pallid). Eyes and look: \"un regard perçant\" (piercing), \"fuyant\" (shifty), \"un regard d'acier\".",
        ],
        examples: [
          {
            es: "Sa silhouette voûtée trahissait une longue vie de labeur.",
            en: "His stooped figure betrayed a long life of toil.",
          },
          {
            es: "Elle le fixait d'un regard perçant, sans un mot.",
            en: "She stared at him with a piercing look, without a word.",
          },
          {
            es: "Il avait les traits émaciés et le teint blafard des grands malades.",
            en: "He had the gaunt features and pallid complexion of the gravely ill.",
          },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Il avait le teint hâlé et un regard d'acier.",
            question: "What does it mean?",
            options: [
              "He had a tanned complexion and a steely gaze.",
              "He had a pale complexion and grey eyes.",
              "He was sunburnt and wore steel glasses.",
              "He had a weathered face and a shifty look.",
            ],
            correctIndex: 0,
            explanation: "\"Un teint hâlé\" is tanned (\"blafard\" would be pallid); \"un regard d'acier\" is a steely gaze.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The sailor had [a weathered face].",
            sentence: "Le marin avait ___.",
            answer: "le visage buriné",
            altAnswers: ["un visage buriné"],
            explanation: "\"Buriné\" (weathered, literally engraved with a burin): the face of someone who has lived outdoors.",
          },
        ],
      },
      {
        heading: "Hair and bearing",
        body: [
          "Hair: \"des cheveux grisonnants\" (greying), \"un front dégarni\" (a receding hairline), \"une chevelure abondante\". Bearing: \"une démarche assurée\" (a confident gait), \"une allure nonchalante\", \"un port de tête altier\" (a haughty carriage of the head).",
        ],
        examples: [
          {
            es: "Une femme aux cheveux grisonnants est entrée d'une démarche assurée.",
            en: "A woman with greying hair walked in with a confident stride.",
          },
          { es: "Il avait le front dégarni et les cheveux grisonnants.", en: "He had a receding hairline and greying hair." },
          { es: "Elle traversa la salle d'une allure nonchalante.", en: "She crossed the room with a nonchalant air." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "He walked in with a confident stride.",
            answer: "Il est entré d'une démarche assurée.",
            altAnswers: ["Il entra d'une démarche assurée.", "Il est arrivé d'une démarche assurée."],
            explanation: "\"D'une démarche assurée\" (with a confident gait): \"de\" + bearing describes how someone moves.",
          },
        ],
      },
      {
        heading: "Joining details: au + noun + adjective",
        body: [
          "French portraits often join physical and moral traits through the adjective position: \"ce petit homme sec au regard fuyant\" places the evaluative \"petit\" before and the descriptive \"sec\" after. The pattern \"au + noun + adjective\" (with the piercing eyes) is a compact way to attach a detail: \"une femme aux cheveux grisonnants\", \"un homme au visage buriné\".",
        ],
        examples: [
          { es: "C'était un petit homme sec au regard fuyant.", en: "He was a wiry little man with shifty eyes." },
          { es: "Une enfant aux yeux immenses nous regardait.", en: "A child with huge eyes was watching us." },
          { es: "C'était un gaillard au port de tête altier.", en: "He was a strapping fellow with a haughty bearing." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the relative clause into the compact pattern \"au + noun + adjective\".",
            source: "C'est un homme qui a le regard perçant.",
            answer: "C'est un homme au regard perçant.",
            explanation: "\"Au regard perçant\" (with the piercing eyes) attaches the detail directly to the noun; \"aux\" is used for plurals (\"aux cheveux gris\").",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: A woman with a tanned complexion opened the door.",
            words: ["Une femme", "au teint hâlé", "a ouvert", "la porte."],
            translation: "A woman with a tanned complexion opened the door.",
            explanation: "\"Au teint hâlé\" follows the noun it describes, like \"au regard fuyant\".",
          },
        ],
      },
      {
        heading: "The moral portrait: precise adjectives",
        body: [
          "For character, French favours precise adjectives over intensified general ones. Instead of \"très gentil\": \"bienveillant\" (kindly), \"affable\", \"prévenant\" (considerate). Instead of \"pas gentil\": \"acariâtre\" (cantankerous), \"revêche\" (surly), \"mesquin\" (petty). Instead of \"intelligent\": \"perspicace\" (shrewd), \"érudit\" (learned), \"brillant\". Instead of \"bizarre\": \"fantasque\" (whimsical), \"ombrageux\" (touchy, easily offended).",
        ],
        examples: [
          {
            es: "Sa voisine, une vieille dame acariâtre, se plaignait de tout.",
            en: "Her neighbour, a cantankerous old lady, complained about everything.",
          },
          {
            es: "Érudit et perspicace, il voyait les failles de chaque argument.",
            en: "Learned and shrewd, he saw the flaws in every argument.",
          },
          {
            es: "D'un tempérament ombrageux, elle prenait mal la moindre critique.",
            en: "Touchy by temperament, she took the slightest criticism badly.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which adjective describes someone who takes offence at the slightest remark?",
            options: ["ombrageux", "fantasque", "érudit", "affable"],
            correctIndex: 0,
            explanation: "\"Ombrageux\" (touchy, easily offended). \"Fantasque\" is whimsical, \"érudit\" learned, \"affable\" pleasant.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "My neighbour is very [considerate]: he always offers to help.",
            sentence: "Mon voisin est très ___ : il propose toujours son aide.",
            answer: "prévenant",
            altAnswers: ["serviable"],
            explanation: "\"Prévenant\" (considerate, thoughtful) is more precise than \"très gentil\".",
          },
        ],
      },
      {
        heading: "Position matters here too",
        body: [
          "Position matters for some of these too: \"un brave homme\" (a decent fellow) is not \"un homme brave\" (a courageous man, rather literary); \"un vrai problème\" (a real problem) differs from \"une histoire vraie\" (a true story); \"un drôle de type\" (an odd character) differs from \"un type drôle\" (a funny guy).",
        ],
        examples: [
          { es: "C'est un brave homme, toujours prêt à rendre service.", en: "He's a decent sort, always ready to help." },
          {
            es: "C'est un drôle de type : il ne parle jamais de lui.",
            en: "He's an odd character: he never talks about himself.",
          },
          { es: "C'est une histoire vraie.", en: "It's a true story." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "We have a real problem.",
            answer: "Nous avons un vrai problème.",
            altAnswers: ["On a un vrai problème."],
            explanation: "\"Vrai\" before the noun means real, genuine; after it (\"une histoire vraie\"), true.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Mon oncle est un drôle type : il collectionne les cailloux.",
            answer: "Mon oncle est un drôle de type : il collectionne les cailloux.",
            explanation: "An odd character is \"un drôle de type\", with \"de\". \"Un type drôle\" would be a funny guy.",
          },
        ],
      },
      {
        heading: "One precise adjective, detached",
        body: [
          "In a debate portrait or a profile, one precise adjective with an example beats a list: \"Affable en public, il se montrait mesquin avec ses collaborateurs.\" Note the elegant opening with the adjective detached at the start of the sentence, typical of journalistic portraits.",
        ],
        examples: [
          {
            es: "Affable en public, il se montrait mesquin avec ses collaborateurs.",
            en: "Affable in public, he was petty with his staff.",
          },
          {
            es: "Discret en réunion, il se révélait redoutable en négociation.",
            en: "Discreet in meetings, he proved formidable in negotiations.",
          },
          { es: "Brillante à l'oral, elle peinait à l'écrit.", en: "Brilliant when speaking, she struggled in writing." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into a journalistic portrait, with the first adjective detached at the start.",
            source: "Il était affable avec la presse, mais revêche avec son équipe.",
            answer: "Affable avec la presse, il était revêche avec son équipe.",
            altAnswers: [
              "Affable avec la presse, il se montrait revêche avec son équipe.",
              "Affable avec la presse, il était revêche avec ses collaborateurs.",
            ],
            explanation: "The detached adjective at the head of the sentence sets up a contrast in one line, typical of press portraits.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The poor woman doesn't know what to do any more.",
        answer: "La pauvre femme ne sait plus quoi faire.",
        altAnswers: ["La pauvre femme ne sait plus que faire."],
        explanation: "\"Pauvre\" before the noun means pitiable, not penniless.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Only one candidate answered.",
        answer: "Un seul candidat a répondu.",
        altAnswers: ["Seul un candidat a répondu."],
        explanation: "\"Seul\" before the noun means only one; after it (\"un candidat seul\"), on his own.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "She's a former colleague of my brother's.",
        answer: "C'est une ancienne collègue de mon frère.",
        altAnswers: ["Elle est une ancienne collègue de mon frère."],
        explanation: "\"Ancienne\" before the noun: former.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "Pasteur was [a great scientist].",
        sentence: "Pasteur était ___.",
        answer: "un grand savant",
        altAnswers: ["un grand scientifique"],
        explanation: "\"Grand\" before the noun: great, not tall.",
      },
      {
        type: "matching",
        instructions: "Match each phrase to its meaning.",
        pairs: [
          { left: "un homme grand", right: "a tall man" },
          { left: "un grand homme", right: "a great man" },
          { left: "une chambre propre", right: "a clean room" },
          { left: "sa propre chambre", right: "his or her own room" },
          { left: "un drôle de type", right: "an odd character" },
          { left: "un type drôle", right: "a funny guy" },
        ],
        explanation: "Before the noun: figurative or evaluative. After: literal and descriptive.",
      },
      {
        type: "multiple-choice",
        question: "Which adjective best describes a cantankerous old neighbour who complains about everything?",
        options: ["acariâtre", "affable", "perspicace", "bienveillant"],
        correctIndex: 0,
        explanation: "\"Acariâtre\" is cantankerous; the others are positive.",
      },
      {
        type: "dictation",
        audio: "Un vieil homme au regard d'acier nous attendait.",
        explanation: "\"Vieil\" before a vowel; \"au regard d'acier\" attaches the detail.",
      },
      {
        type: "speak",
        text: "C'est un drôle de type, mais un brave homme.",
        prompt: "Say it in French: He's an odd character, but a decent fellow.",
        explanation: "Both adjectives go before the noun here: \"un drôle de type\" (odd), \"un brave homme\" (decent).",
      },
    ],
  },
];

export const FR_C2_U14_WRITING: WriteExercise = {
  type: "write",
  prompt: "You took part in a university debate on the motion « Faut-il interdire les vols intérieurs quand le train met moins de quatre heures ? ». You argued in favour. Write the closing statement you would deliver (the \"péroraison\"): synthesise your points, contrast them fairly with your opponents' strongest argument, use at least two rhetorical devices (ternary rhythm, anaphora, rhetorical question, chiasmus or gradation), make a final appeal and end with an \"ouverture\".",
  minWords: 250,
  maxWords: 400,
  rubric: [
    "A real synthesis, not a list (\"au terme de ce débat\", \"en définitive\", \"il apparaît que\"), and a clear answer to the question.",
    "A fair contrast with the opponents (\"nos adversaires font valoir que\", \"c'est oublier que\", \"pour séduisant qu'il soit\") using concession with the right mood.",
    "At least two devices: a ternary rhythm or gradation, an anaphora, a rhetorical question with inversion (\"peut-on vraiment...?\"), a chiasmus or a cleft (\"c'est... que\").",
    "A final appeal in the \"nous\" imperative or with \"je vous invite à\", and an \"ouverture\" (\"reste à savoir si\", \"au-delà de ce débat\").",
  ],
  modelAnswer: "Mesdames et Messieurs les membres du jury,\n\nAu terme de ce débat, une chose apparaît clairement : la question n'est pas de savoir si nous devons réduire les émissions du transport, mais à quel rythme et à quel prix. Nous avons montré que, sur les trajets de moins de quatre heures, le train émet jusqu'à cinquante fois moins de CO2 que l'avion ; que le temps de trajet réel, de centre-ville à centre-ville, est souvent comparable ; et que la France a déjà franchi le pas sur plusieurs liaisons sans que son économie s'effondre.\n\nNos adversaires font valoir que cette interdiction pénaliserait les régions enclavées et les voyageurs pressés. L'argument, pour respectable qu'il soit, ne résiste pas à l'examen des faits : la mesure ne concerne que les liaisons pour lesquelles une alternative ferroviaire existe déjà. C'est oublier, surtout, que l'inaction aussi a un coût, et que ce coût, ce sont nos enfants qui le paieront.\n\nPeut-on vraiment parler de liberté quand on hypothèque l'avenir de la génération suivante ? Interdire ces vols, ce n'est pas punir les voyageurs. Interdire ces vols, c'est investir dans le rail. Interdire ces vols, c'est enfin mettre nos actes en accord avec nos discours.\n\nIl ne s'agit pas d'adapter la planète à nos habitudes, mais d'adapter nos habitudes à la planète. Je vous invite donc à voter pour la motion : choisissons la cohérence, choisissons l'ambition, choisissons l'avenir.\n\nReste à savoir si l'État saura accompagner cette mesure d'un véritable investissement dans le réseau ferroviaire, car un train trop cher ou trop rare ne remplacera jamais un avion. C'est là, sans doute, que se jouera le prochain débat.\n\nJe vous remercie.",
  explanation: "The \"péroraison\" opens with a synthesis (\"au terme de ce débat\", \"la question n'est pas de savoir si... mais\") and a three-part summary. The contrast is fair: \"font valoir que\", \"pour respectable qu'il soit\" with the subjunctive, \"c'est oublier que\", and a cleft (\"ce sont nos enfants qui le paieront\"). Devices: a rhetorical question with inversion (\"peut-on vraiment...?\"), an anaphora (\"Interdire ces vols, c'est...\"), a chiasmus (\"adapter la planète à nos habitudes\" / \"nos habitudes à la planète\") and a ternary appeal in the \"nous\" imperative (\"choisissons...\"). The \"ouverture\" uses \"reste à savoir si\".",
};
