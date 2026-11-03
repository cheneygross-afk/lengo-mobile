// Synced from cheneygross-afk/lengo:src/lib/lessons/fr-b1-u31.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// French B1, Unit 31: Word Webs: Emotions, Opinions & Nature.

export const FR_B1_U31_WRITING: WriteExercise = {
  type: "write",
  prompt: "A French website asks its readers: \"Faut-il interdire les voitures dans le centre des villes ?\" Write a short opinion essay (80-150 words) in the DELF B1 style: give your opinion, two arguments with an example, one counter-argument, and a conclusion.",
  minWords: 80,
  maxWords: 150,
  rubric: [
    "Structures the essay with connectors (\"d'abord\", \"ensuite\", \"de plus\", \"cependant\", \"en conclusion\")",
    "States opinion and certainty with the right mood (\"je pense que\" + indicative; \"je ne pense pas que\", \"je doute que\" + subjunctive; \"il est évident que\" + indicative)",
    "Uses \"il faudrait que\" + subjunctive or a si-clause (\"si on interdisait..., on...\") to propose a solution",
    "Uses environment vocabulary (\"la pollution\", \"les transports en commun\", \"protéger\", \"le réchauffement climatique\")",
  ],
  modelAnswer: "Aujourd'hui, de plus en plus de villes limitent la circulation dans leur centre. À mon avis, c'est une bonne idée, mais il faut le faire progressivement.\n\nD'abord, il est évident que les voitures polluent : à Paris, la qualité de l'air s'est beaucoup améliorée depuis que certaines rues sont piétonnes. Ensuite, une ville sans voitures est plus calme et plus agréable pour les familles. De plus, si on interdisait les voitures, les gens marcheraient et feraient plus de vélo.\n\nCependant, je ne pense pas qu'on puisse tout interdire du jour au lendemain. Les personnes âgées et les artisans ont besoin de leur véhicule.\n\nEn conclusion, il faudrait que les villes développent d'abord les transports en commun. Ce n'est qu'à cette condition que les habitants accepteront le changement.",
  explanation: "Connectors (\"d'abord\", \"ensuite\", \"de plus\", \"cependant\", \"en conclusion\") give the essay its structure. Certainty takes the indicative (\"il est évident que les voitures polluent\"), doubt the subjunctive (\"je ne pense pas qu'on puisse\"). A hypothesis uses \"si\" + imparfait + conditional, and the recommendation uses \"il faudrait que\" + subjunctive (\"développent\").",
};

export const FR_B1_U31: Lesson[] = [
  {
    slug: "b1-vocabulary-practice-10",
    level: "FR-B1",
    number: 1,
    title: "Intermediate Vocabulary Practice, Part 10 of 10",
    summary: "The last set of high-frequency Intermediate expressions: s'en sortir, se rendre compte, en avoir marre, avoir hâte de, faire de son mieux, il s'agit de and au fur et à mesure.",
    duration: "14 min",
    sections: [
      {
        heading: "Se rendre compte (and réaliser)",
        body: [
          "\"Se rendre compte\" means to realise: \"Je me suis rendu compte que j'avais oublié mes clés\". With a noun, use \"de\": \"Il ne se rend pas compte du danger\". The trap: \"réaliser\" in careful French means to carry out, to make happen (\"réaliser un projet\", \"réaliser un rêve\"). Using it for to realise is common in speech but criticised as an anglicism; \"se rendre compte\" is always safe. Note the participle: \"compte\" is a noun, so \"rendu\" doesn't agree: \"elle s'est rendu compte\".",
        ],
        examples: [
          { es: "Je me suis rendu compte que j'avais oublié mes clés.", en: "I realised I'd forgotten my keys." },
          { es: "Elle s'est rendu compte de son erreur trop tard.", en: "She realised her mistake too late." },
          { es: "Tu te rends compte ? Il a démissionné !", en: "Can you believe it? He's resigned!" },
          { es: "Ils ont enfin réalisé leur rêve : ouvrir une boulangerie.", en: "They finally achieved their dream: opening a bakery." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "We realised the shop was closed.", answer: "On s'est rendu compte que le magasin était fermé.", altAnswers: ["Nous nous sommes rendu compte que le magasin était fermé.", "On a réalisé que le magasin était fermé.", "Nous avons réalisé que le magasin était fermé.", "On s'est aperçus que le magasin était fermé.", "On s'est aperçu que le magasin était fermé."], explanation: "\"Se rendre compte que\" = to realise; \"rendu\" never agrees." },
          { type: "multiple-choice", question: "Which is careful French for 'She realised the danger'?", options: ["Elle s'est rendu compte du danger.", "Elle s'est rendu compte le danger.", "Elle a rendu compte du danger.", "Elle s'est rendue le compte du danger."], correctIndex: 0, explanation: "\"Se rendre compte de\" + noun, with \"être\" and no agreement on \"rendu\"." },
        ],
      },
      {
        heading: "S'en sortir",
        body: [
          "\"S'en sortir\" means to manage, to cope, to get through a difficult situation: \"Ne t'inquiète pas, tu vas t'en sortir\", \"Avec un seul salaire, on a du mal à s'en sortir\" (we struggle to make ends meet). The \"en\" is fixed and has no particular meaning.",
        ],
        examples: [
          { es: "Ne t'inquiète pas, tu vas t'en sortir.", en: "Don't worry, you'll get through it." },
          { es: "Avec un seul salaire, on a du mal à s'en sortir.", en: "On one salary, we struggle to make ends meet." },
          { es: "Elle s'en est bien sortie à l'examen.", en: "She did well in the exam." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "Don't worry, we'll [manage]. (polite)", sentence: "Ne vous inquiétez pas, on va ___.", answer: "s'en sortir", explanation: "\"S'en sortir\" = to cope, to manage; with \"on\" the pronoun is \"s'\"." },
          { type: "listen-choose", audio: "Je ne sais pas comment il s'en sort avec trois enfants.", question: "What does it mean?", options: ["I don't know how he copes with three children.", "I don't know how he gets out with three children.", "I don't know where he goes with three children.", "I don't know when he leaves with three children."], correctIndex: 0, explanation: "\"S'en sortir\" = to cope; \"il s'en sort\" in the present." },
        ],
      },
      {
        heading: "En avoir marre",
        body: [
          "Two opposite feelings about what's coming. \"En avoir marre\" (familiar) means to be fed up: \"J'en ai marre de ce temps !\", \"J'en ai marre qu'il soit toujours en retard\" (+ de + noun / infinitive, or que + subjunctive). A neutral equivalent is \"en avoir assez\".",
        ],
        examples: [
          { es: "J'en ai marre de ce temps pourri !", en: "I'm fed up with this rotten weather!" },
          { es: "J'en ai marre qu'il soit toujours en retard.", en: "I'm sick of him always being late." },
          { es: "On en a assez d'attendre.", en: "We've had enough of waiting." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I'm fed up with working at weekends.", answer: "J'en ai marre de travailler le week-end.", altAnswers: ["J'en ai assez de travailler le week-end.", "J'en ai marre de travailler les week-ends.", "J'en ai assez de travailler les week-ends.", "J'en ai marre de bosser le week-end."], explanation: "\"En avoir marre de\" + infinitive (familiar)." },
          { type: "translate", direction: "en-es", prompt: "Make it neutral instead of familiar.", source: "J'en ai marre de ce bruit.", answer: "J'en ai assez de ce bruit.", explanation: "\"En avoir assez\" is the neutral version of \"en avoir marre\"." },
        ],
      },
      {
        heading: "Avoir hâte de / que",
        body: [
          "\"Avoir hâte de\" + infinitive means to look forward to, to be eager to: \"J'ai hâte de te voir\" (I can't wait to see you). With another subject: \"J'ai hâte que tu arrives\" (subjunctive). English looking forward to + -ing is never *regarder en avant*.",
        ],
        examples: [
          { es: "J'ai hâte de te voir !", en: "I can't wait to see you!" },
          { es: "Les enfants ont hâte que les vacances commencent.", en: "The children can't wait for the holidays to start." },
          { es: "J'ai vraiment hâte d'être en vacances.", en: "I'm really looking forward to being on holiday." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "I can't wait for you [to see] your surprise. (to a friend)", sentence: "J'ai hâte que tu ___ ta surprise.", answer: "voies", explanation: "Different subjects: \"avoir hâte que\" + subjunctive; \"voir\" → \"que tu voies\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "We're looking forward to meeting your parents. (to a friend)", answer: "On a hâte de rencontrer tes parents.", altAnswers: ["Nous avons hâte de rencontrer tes parents.", "On a hâte de connaître tes parents.", "Nous avons hâte de connaître tes parents."], explanation: "\"Avoir hâte de\" + infinitive = to look forward to doing." },
        ],
      },
      {
        heading: "Faire de son mieux",
        body: [
          "\"Faire de son mieux\" = to do one's best; the possessive changes with the person: \"Je fais de mon mieux\", \"Elle a fait de son mieux\", \"Faites de votre mieux\".",
        ],
        examples: [
          { es: "Je fais de mon mieux, mais c'est difficile.", en: "I'm doing my best, but it's hard." },
          { es: "Faites de votre mieux, c'est tout ce qu'on vous demande.", en: "Do your best, that's all we ask of you." },
          { es: "Les joueurs ont fait de leur mieux.", en: "The players did their best." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "'Do your best.' (to a friend)", options: ["Fais de ton mieux.", "Fais de votre mieux.", "Fais ton meilleur.", "Fais le mieux de toi."], correctIndex: 0, explanation: "The possessive follows the person: \"ton\" for tu." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "We [did our best], but we lost.", sentence: "Nous ___, mais nous avons perdu.", answer: "avons fait de notre mieux", explanation: "\"Faire de son mieux\" with \"notre\" for nous." },
        ],
      },
      {
        heading: "Il s'agit de",
        body: [
          "\"Il s'agit de\" is impersonal (always \"il\") and means it's about / it's a matter of: \"Dans ce film, il s'agit d'une famille qui...\" (This film is about a family who...), \"Il s'agit de bien comprendre la consigne\". A common mistake is *le film s'agit de*: the subject must be \"il\". In speech, \"ça parle de\" is easier: \"Le film parle d'une famille\".",
        ],
        examples: [
          { es: "Dans ce roman, il s'agit d'un enfant qui cherche son père.", en: "This novel is about a child looking for his father." },
          { es: "Il ne s'agit pas d'argent, il s'agit de respect.", en: "It's not about money, it's about respect." },
          { es: "Dans cet article, il s'agit du climat.", en: "This article is about the climate." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Turn it into a sentence with il s'agit de.", source: "Ce film parle d'une femme pilote.", answer: "Dans ce film, il s'agit d'une femme pilote.", explanation: "\"Il s'agit de\" needs the impersonal \"il\"; the film goes in front with \"dans\"." },
          { type: "listen-choose", audio: "Il s'agit de bien lire la question.", question: "What does it mean?", options: ["What matters is reading the question carefully.", "It's about a question nobody reads.", "He reads the question well.", "The question is easy to read."], correctIndex: 0, explanation: "\"Il s'agit de\" + infinitive = it's a matter of, what you have to do is." },
        ],
      },
      {
        heading: "Au fur et à mesure",
        body: [
          "\"Au fur et à mesure\" means gradually, as you go along: \"On apprend au fur et à mesure\", \"au fur et à mesure que\" + indicative (as, in step with): \"Au fur et à mesure que les jours passaient, il allait mieux\".",
        ],
        examples: [
          { es: "On apprend les règles au fur et à mesure.", en: "You learn the rules as you go along." },
          { es: "Au fur et à mesure que les jours passaient, il allait mieux.", en: "As the days went by, he got better." },
          { es: "Je range au fur et à mesure.", en: "I tidy up as I go along." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "As the weeks went by, I understood better.", answer: "Au fur et à mesure que les semaines passaient, je comprenais mieux.", altAnswers: ["À mesure que les semaines passaient, je comprenais mieux.", "Au fur et à mesure que les semaines passaient, je comprenais de mieux en mieux."], explanation: "\"Au fur et à mesure que\" + indicative; imparfait for a gradual change." },
          { type: "multiple-choice", question: "« Au fur et à mesure que » is followed by...", options: ["the indicative", "the subjunctive", "an infinitive", "the conditional only"], correctIndex: 0, explanation: "It states a fact that develops step by step, so the indicative." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "He didn't realise the problem.", answer: "Il ne s'est pas rendu compte du problème.", altAnswers: ["Il n'a pas réalisé le problème.", "Il ne s'est pas aperçu du problème.", "Il ne s'est pas rendu compte de ce problème."], explanation: "\"Se rendre compte de\"; \"ne... pas\" around the auxiliary." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "She managed on her own.", answer: "Elle s'en est sortie toute seule.", altAnswers: ["Elle s'en est sortie seule.", "Elle s'est débrouillée toute seule.", "Elle s'est débrouillée seule."], explanation: "\"S'en sortir\" in the passé composé: \"être\", and \"sortie\" agrees with \"elle\"." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "[We're fed up with] the rain.", sentence: "___ de la pluie.", answer: "On en a marre", altAnswers: ["Nous en avons marre", "On en a assez", "Nous en avons assez"], explanation: "\"En avoir marre de\" + noun; \"en avoir assez\" is the neutral version." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I'm looking forward to seeing the sea.", answer: "J'ai hâte de voir la mer.", altAnswers: ["Je suis impatient de voir la mer.", "Je suis impatiente de voir la mer."], explanation: "\"Avoir hâte de\" + infinitive." },
      { type: "multiple-choice", question: "Which sentence correctly says 'This film is about a family who move to Brittany'?", options: ["Dans ce film, il s'agit d'une famille qui déménage en Bretagne.", "Ce film s'agit d'une famille qui déménage en Bretagne.", "Ce film il s'agit une famille qui déménage en Bretagne.", "Dans ce film, ça s'agit d'une famille qui déménage en Bretagne."], correctIndex: 0, explanation: "\"S'agir de\" only works with the impersonal \"il\": \"il s'agit de\"." },
      { type: "word-order", prompt: "Put the words in order to say: You'll get through it, I'm sure.", words: ["Tu", "vas", "t'en", "sortir,", "j'en", "suis", "sûr."], translation: "You'll get through it, I'm sure.", explanation: "\"S'en sortir\" with \"t'\" for tu; \"j'en suis sûr\" = I'm sure of it." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The architect carried out the project in two years.", answer: "L'architecte a réalisé le projet en deux ans.", explanation: "\"Réaliser\" in its true sense: to carry out, make real." },
      { type: "dictation", audio: "Elle fait toujours de son mieux.", explanation: "\"Faire de son mieux\" with \"son\" for elle." },
      { type: "speak", text: "J'ai hâte de partir en week-end.", prompt: "Say you can't wait to go away for the weekend.", explanation: "\"Avoir hâte de\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Je regarde en avant au concert.", answer: "J'ai hâte d'aller au concert.", altAnswers: ["J'attends le concert avec impatience.", "J'ai hâte d'être au concert.", "Je suis impatient d'aller au concert.", "Je suis impatiente d'aller au concert."], explanation: "Looking forward to is \"avoir hâte de\", never a word-for-word \"regarder en avant\"." },
      { type: "listen-choose", audio: "Il s'agit d'une erreur de la banque.", question: "What does it mean?", options: ["It's a mistake by the bank.", "He made a mistake at the bank.", "The bank is acting strangely.", "It's about a bank robbery."], correctIndex: 0, explanation: "\"Il s'agit de\" = it's a matter of, it's about." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Write the words down as you go along. (to a friend)", answer: "Note les mots au fur et à mesure.", altAnswers: ["Écris les mots au fur et à mesure.", "Note les mots au fur et à mesure que tu avances."], explanation: "\"Au fur et à mesure\" = as you go along." },
    ],
  },
  {
    slug: "b1-word-web-emotions",
    level: "FR-B1",
    number: 2,
    title: "Word Web: Emotions and Reactions",
    summary: "Build families of emotion words (noun, adjective, verb) and react to news with emotion triggers + subjunctive.",
    duration: "15 min",
    sections: [
      {
        heading: "Word families: joy, anger, fear",
        body: [
          "Emotion words come in families, and knowing all three forms lets you vary your French. Joy: \"la joie\" (noun), \"joyeux\" (adjective), \"se réjouir de\" (to be delighted about). Anger: \"la colère\", \"être en colère\" (to be angry), \"se fâcher\" (to get angry), \"fâché\". Fear: \"la peur\", \"avoir peur de\", \"effrayé\" (frightened), \"effrayer\" / \"faire peur à\" (to frighten).",
        ],
        examples: [
          { es: "Elle a sauté de joie en apprenant la nouvelle.", en: "She jumped for joy when she heard the news." },
          { es: "Je me réjouis de te revoir.", en: "I'm delighted to see you again." },
          { es: "Le bruit a fait peur aux enfants.", en: "The noise frightened the children." },
          { es: "Elle avait l'air effrayée par l'orage.", en: "She looked frightened by the storm." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "The film [frightened] my little brother.", sentence: "Le film ___ à mon petit frère.", answer: "a fait peur", explanation: "\"Faire peur à quelqu'un\" = to frighten someone." },
          { type: "multiple-choice", question: "Which verb means to get angry?", options: ["se fâcher", "se réjouir", "effrayer", "avoir peur"], correctIndex: 0, explanation: "\"Se fâcher\" = to get angry; \"se réjouir\" = to be delighted, \"effrayer\" = to frighten." },
        ],
      },
      {
        heading: "Avoir peur, en colère contre",
        body: [
          "Notice how often French uses \"avoir\" + noun where English uses to be + adjective: \"avoir peur\" (to be afraid), \"avoir honte\" (to be ashamed). And \"être en colère contre quelqu'un\" (angry with someone): \"contre\", not *avec*.",
        ],
        examples: [
          { es: "Il est en colère contre son frère.", en: "He's angry with his brother." },
          { es: "Ne te fâche pas, ce n'était qu'une blague.", en: "Don't get angry, it was only a joke." },
          { es: "Tu n'as pas peur du noir ?", en: "Aren't you afraid of the dark?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Elle est en colère avec son patron.", answer: "Elle est en colère contre son patron.", altAnswers: ["Elle est fâchée contre son patron."], explanation: "Angry with someone is \"en colère contre\", not \"avec\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Are you afraid of dogs? (to a friend)", answer: "Tu as peur des chiens ?", altAnswers: ["As-tu peur des chiens ?", "Est-ce que tu as peur des chiens ?"], explanation: "\"Avoir peur de\": avoir + noun; \"de\" + \"les\" → \"des\"." },
        ],
      },
      {
        heading: "Shame, jealousy, anxiety, relief",
        body: [
          "More families: \"la honte\" / \"avoir honte de\" / \"honteux\" (shameful); \"la jalousie\" / \"jaloux, jalouse\" / \"être jaloux de\"; \"l'angoisse\" (anxiety, dread) / \"angoissé\" / \"angoissant\"; \"la déception\" (disappointment, false friend: not deception, which is \"la tromperie\") / \"déçu\" / \"décevoir\"; \"le soulagement\" / \"soulagé\" (relieved).",
        ],
        examples: [
          { es: "J'ai eu honte de ma réaction.", en: "I was ashamed of my reaction." },
          { es: "Il est un peu jaloux de sa petite sœur.", en: "He's a bit jealous of his little sister." },
          { es: "Les examens, ça m'angoisse.", en: "Exams make me anxious." },
          { es: "Quelle déception ! Le concert a été annulé.", en: "What a disappointment! The concert's been cancelled." },
          { es: "On était soulagés d'avoir des nouvelles.", en: "We were relieved to have news." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "She's jealous of her best friend.", answer: "Elle est jalouse de sa meilleure amie.", altAnswers: ["Elle est jalouse de son meilleur ami."], explanation: "\"Être jaloux de\"; \"jalouse\" agrees with \"elle\"." },
          { type: "multiple-choice", question: "« J'ai été très déçu. » What does it mean?", options: ["I was very disappointed.", "I was very deceived.", "I was very surprised.", "I was very relieved."], correctIndex: 0, explanation: "False friend: \"déçu\" (from \"décevoir\") = disappointed." },
        ],
      },
      {
        heading: "-ant or -é?",
        body: [
          "Also \"être ému\" (moved, touched), \"inquiet, inquiète\" (worried) / \"s'inquiéter\", \"vexé\" (offended, hurt). The -ant / -é pairs work like English -ing / -ed: \"un film angoissant\" (a distressing film) vs \"je suis angoissé\" (I'm anxious); \"une nouvelle décevante\" vs \"je suis déçu\".",
        ],
        examples: [
          { es: "J'ai été très ému par son discours.", en: "I was very moved by his speech." },
          { es: "C'est une nouvelle décevante.", en: "It's disappointing news." },
          { es: "Ce film est vraiment angoissant.", en: "This film is really distressing." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "« Cet examen est ___. » (stressful, causing anxiety)", options: ["angoissant", "angoissé", "angoissée", "angoisse"], correctIndex: 0, explanation: "-ant describes what causes the feeling; -é describes the person who feels it." },
          { type: "translate", direction: "en-es", prompt: "Turn it around so it says how you feel (Je suis...).", source: "Ce résultat est décevant.", answer: "Je suis déçu par ce résultat.", altAnswers: ["Je suis déçue par ce résultat.", "Je suis déçu de ce résultat.", "Je suis déçue de ce résultat."], explanation: "-ant for the cause (\"décevant\"), -é for the person (\"déçu\")." },
        ],
      },
      {
        heading: "Reacting: emotion + que + subjunctive",
        body: [
          "To react to what someone else does or what happens, use an emotion + \"que\" + subjunctive: \"Je suis ravi que tu viennes\", \"Ça m'énerve qu'il ne réponde jamais\", \"Je suis déçu que vous partiez\", \"C'est dommage qu'il pleuve\", \"Je suis soulagée que tout se soit bien passé\" (past subjunctive).",
        ],
        examples: [
          { es: "Je suis ravie que tu viennes samedi.", en: "I'm delighted you're coming on Saturday." },
          { es: "Ça m'énerve qu'il ne réponde jamais aux messages.", en: "It annoys me that he never answers messages." },
          { es: "Je suis déçu que vous partiez si tôt.", en: "I'm disappointed you're leaving so early." },
          { es: "On est soulagés que tout se soit bien passé.", en: "We're relieved that everything went well." },
          { es: "Ça me rend jaloux qu'elle parte en Australie.", en: "It makes me jealous that she's going to Australia." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "I'm happy you [can] come. (to a friend)", sentence: "Je suis content que tu ___ venir.", answer: "puisses", explanation: "Emotion + \"que\" + subjunctive: \"pouvoir\" → \"que tu puisses\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "It's a shame he's ill.", answer: "C'est dommage qu'il soit malade.", altAnswers: ["Dommage qu'il soit malade.", "Quel dommage qu'il soit malade."], explanation: "\"C'est dommage que\" + subjunctive \"soit\"." },
        ],
      },
      {
        heading: "Same subject: de + infinitive",
        body: [
          "When the subject is the same, use \"de\" + infinitive instead: \"Je suis ravi de venir\" (not *que je vienne*), \"Je suis déçu d'avoir raté le train\".",
        ],
        examples: [
          { es: "Je suis triste de quitter cette ville.", en: "I'm sad to leave this town." },
          { es: "Je suis ravi de vous rencontrer.", en: "I'm delighted to meet you." },
          { es: "Elle est déçue d'avoir raté le train.", en: "She's disappointed she missed the train." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Je suis content que je parte en vacances.", answer: "Je suis content de partir en vacances.", altAnswers: ["Je suis contente de partir en vacances."], explanation: "Same subject (je... je): \"de\" + infinitive, not \"que\" + subjunctive." },
          { type: "speak", text: "Je suis désolé d'être en retard.", prompt: "Apologise for being late.", explanation: "Same subject, so \"de\" + infinitive: \"d'être\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Don't be afraid, it's only a dog. (to a friend)", answer: "N'aie pas peur, ce n'est qu'un chien.", altAnswers: ["N'aie pas peur, c'est juste un chien.", "N'aie pas peur, c'est seulement un chien."], explanation: "Imperative of \"avoir\": \"aie\"; \"ne... que\" = only." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I'm delighted you're staying. (to a friend)", answer: "Je suis ravi que tu restes.", altAnswers: ["Je suis ravie que tu restes.", "Je suis content que tu restes.", "Je suis contente que tu restes."], explanation: "\"Être ravi que\" + subjunctive \"restes\"." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "She was [moved] by the film.", sentence: "Elle a été ___ par le film.", answer: "émue", explanation: "\"Ému\" = moved; it agrees with \"elle\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The news makes me anxious.", answer: "Les informations m'angoissent.", altAnswers: ["Les infos m'angoissent.", "Les informations, ça m'angoisse.", "Les infos, ça m'angoisse.", "Les nouvelles m'angoissent.", "Les informations me rendent anxieux.", "Les informations me rendent anxieuse."], explanation: "\"Angoisser quelqu'un\" = to make someone anxious." },
      { type: "matching", instructions: "Match the French with the English.", pairs: [{ left: "joyeux", right: "joyful" }, { left: "en colère", right: "angry" }, { left: "honteux", right: "shameful" }, { left: "déçu", right: "disappointed" }, { left: "soulagé", right: "relieved" }], explanation: "The adjectives of the families \"la joie\", \"la colère\", \"la honte\", \"la déception\" and \"le soulagement\"." },
      { type: "multiple-choice", question: "Which sentence means 'I'm sorry to bother you'?", options: ["Je suis désolé de vous déranger.", "Je suis désolé que je vous dérange.", "Je suis désolé à vous déranger.", "Je suis désolé que vous déranger."], correctIndex: 0, explanation: "Same subject: \"de\" + infinitive." },
      { type: "word-order", prompt: "Put the words in order to say: It annoys me that she never says thank you.", words: ["Ça", "m'énerve", "qu'elle", "ne", "dise", "jamais", "merci."], translation: "It annoys me that she never says thank you.", explanation: "\"Ça m'énerve que\" + subjunctive: \"dire\" → \"qu'elle dise\"." },
      { type: "listen-choose", audio: "Ils sont fâchés depuis des années.", question: "What does it mean?", options: ["They've been on bad terms for years.", "They've been happy for years.", "They got angry years ago.", "They've known each other for years."], correctIndex: 0, explanation: "\"Être fâchés\" = to have fallen out; present + \"depuis\" for a state still going on." },
      { type: "speak", text: "Je suis soulagée que tu sois arrivé.", prompt: "Tell him (as a woman) you're relieved he has arrived.", explanation: "Emotion + \"que\" + past subjunctive \"sois arrivé\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "It makes me sad that you're moving. (to a friend)", answer: "Ça me rend triste que tu déménages.", altAnswers: ["Je suis triste que tu déménages.", "Ça m'attriste que tu déménages."], explanation: "\"Rendre\" + adjective; emotion + \"que\" + subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Make it a reaction starting with Je suis surpris que.", source: "Il ne vient pas.", answer: "Je suis surpris qu'il ne vienne pas.", altAnswers: ["Je suis surprise qu'il ne vienne pas."], explanation: "Emotion + \"que\" + subjunctive: \"venir\" → \"qu'il vienne\"." },
      { type: "dictation", audio: "On était très inquiets pour toi.", altAnswers: ["On était très inquiètes pour toi."], explanation: "\"Inquiet\" = worried; plural agreement with \"on\" meaning we." },
    ],
  },
  {
    slug: "b1-themed-review-memories-of-a-father",
    level: "FR-B1",
    number: 3,
    title: "Themed Review: Memories of a Father",
    summary: "A daughter remembers her father: habits in the imparfait, relatives to describe, and emotions with the subjunctive (il était fier que je sois..., je regrette qu'il ne soit plus là).",
    duration: "15 min",
    sections: [
      {
        heading: "Ce qu'il me disait: habits and sayings",
        body: [
          "Élodie remembers her father, Jean, a carpenter in the Vosges who died two years ago. Memories of habits go in the imparfait: \"Le dimanche, on allait pêcher au lac\", \"Il se levait toujours avant tout le monde\", \"Il sifflait en travaillant\".",
          "She uses relatives to describe what he said and did: \"ce qu'il me disait\" (what he used to tell me), \"les chansons qu'il chantait\", \"l'atelier où il passait ses journées\", \"les outils dont il se servait\" (the tools he used: \"se servir de\" → \"dont\").",
        ],
        examples: [
          { es: "Le dimanche, on allait pêcher au lac de Gérardmer.", en: "On Sundays, we used to go fishing at the lake." },
          { es: "Il se levait toujours avant tout le monde.", en: "He always got up before everyone else." },
          { es: "Je me souviens de ce qu'il me disait : « Prends ton temps. »", en: "I remember what he used to tell me: 'Take your time.'" },
          { es: "J'adorais l'atelier où il passait ses journées.", en: "I loved the workshop where he spent his days." },
          { es: "J'ai gardé les outils dont il se servait.", en: "I've kept the tools he used." },
          { es: "Il sifflait en travaillant, toujours la même chanson.", en: "He whistled as he worked, always the same song." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "In summer, we used to go camping.", answer: "L'été, on allait camper.", altAnswers: ["En été, on allait camper.", "L'été, nous allions camper.", "En été, nous allions camper.", "L'été, on faisait du camping.", "En été, on faisait du camping.", "L'été, nous faisions du camping."], explanation: "A past habit: imparfait." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "I remember the house [where he grew up].", sentence: "Je me souviens de la maison ___.", answer: "où il a grandi", altAnswers: ["dans laquelle il a grandi", "où il avait grandi"], explanation: "\"Où\" for a place; passé composé for a completed period." },
        ],
      },
      {
        heading: "Feelings then: il était fier que je sois...",
        body: [
          "Her father's emotions about her, in the past, take the subjunctive after the emotion: \"Il était fier que je sois devenue médecin\" (He was proud that I'd become a doctor), \"Il n'aimait pas que je rentre tard\", \"Il était content qu'on vienne le voir\". Even in a past context, the subjunctive stays in the present (or the past subjunctive for an earlier action).",
          "Her own feelings as a child: \"J'avais peur qu'il se fâche\", \"J'étais triste qu'il travaille autant\".",
        ],
        examples: [
          { es: "Il était fier que je sois devenue médecin.", en: "He was proud that I'd become a doctor." },
          { es: "Il n'aimait pas que je rentre tard le soir.", en: "He didn't like me coming home late at night." },
          { es: "Il était toujours content qu'on vienne le voir.", en: "He was always happy when we came to see him." },
          { es: "J'avais peur qu'il se fâche quand j'avais de mauvaises notes.", en: "I was afraid he'd get angry when I had bad marks." },
          { es: "J'étais triste qu'il travaille autant.", en: "I was sad that he worked so much." },
          { es: "Ma mère voulait qu'il prenne sa retraite plus tôt.", en: "My mother wanted him to retire earlier." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "He didn't like us [to make] noise.", sentence: "Il n'aimait pas qu'on ___ du bruit.", answer: "fasse", explanation: "\"Aimer que\" + subjunctive: \"faire\" → \"qu'on fasse\", even in a past context." },
          { type: "multiple-choice", question: "'She was happy that I had called.' Which is correct?", options: ["Elle était contente que j'aie appelé.", "Elle était contente que j'ai appelé.", "Elle était contente que j'avais appelé.", "Elle était contente que j'appelle hier."], correctIndex: 0, explanation: "Emotion + past subjunctive for an earlier action: \"que j'aie appelé\"." },
        ],
      },
      {
        heading: "Now: je regrette qu'il ne soit plus là",
        body: [
          "Today, Élodie expresses regret and gratitude. \"Regretter que\" + subjunctive: \"Je regrette qu'il ne soit plus là\", \"Je regrette qu'il n'ait pas connu ses petits-enfants\" (past subjunctive). With the same subject: \"Je regrette de ne pas lui avoir dit plus souvent que je l'aimais\" (past infinitive, with \"ne pas\" before it).",
        ],
        examples: [
          { es: "Je regrette qu'il ne soit plus là.", en: "I'm sorry he's no longer here." },
          { es: "Je regrette qu'il n'ait pas connu ses petits-enfants.", en: "I'm sad that he never knew his grandchildren." },
          { es: "Je regrette de ne pas lui avoir dit plus souvent que je l'aimais.", en: "I regret not telling him more often that I loved him." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Change it to start with Je regrette que.", source: "Elle n'est pas venue.", answer: "Je regrette qu'elle ne soit pas venue.", explanation: "\"Regretter que\" + past subjunctive: \"est venue\" → \"soit venue\"." },
          { type: "listen-choose", audio: "Je regrette de ne pas avoir pris plus de photos.", question: "What does she regret?", options: ["Not taking more photos.", "Taking too many photos.", "Losing the photos.", "That he didn't take photos."], correctIndex: 0, explanation: "Same subject: \"regretter de\" + past infinitive, with \"ne pas\" before \"avoir\"." },
        ],
      },
      {
        heading: "Gratitude, and il me manque",
        body: [
          "Gratitude: \"Je lui dois beaucoup\" (I owe him a lot), \"C'est grâce à lui que j'aime la nature\", \"Il m'a appris à...\". And \"il me manque\" (I miss him): the person missed is the subject. *Je le manque* is a classic error.",
        ],
        examples: [
          { es: "C'est grâce à lui que j'aime la nature.", en: "It's thanks to him that I love nature." },
          { es: "Il m'a appris à pêcher et à ne jamais abandonner.", en: "He taught me to fish and never to give up." },
          { es: "Il me manque tous les jours.", en: "I miss him every day." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Je manque ma grand-mère.", answer: "Ma grand-mère me manque.", explanation: "With \"manquer à\", the person missed is the subject: she is lacking to me." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "It's thanks to her that I learned to cook.", answer: "C'est grâce à elle que j'ai appris à cuisiner.", altAnswers: ["C'est grâce à elle que j'ai appris à faire la cuisine."], explanation: "\"C'est... que\" highlights the cause; \"apprendre à\" + infinitive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "He always went to bed early.", answer: "Il se couchait toujours tôt.", explanation: "A past habit: imparfait \"se couchait\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I loved the garden where he grew tomatoes.", answer: "J'adorais le jardin où il cultivait des tomates.", altAnswers: ["J'aimais le jardin où il cultivait des tomates.", "J'adorais le jardin où il faisait pousser des tomates."], explanation: "\"Où\" for a place; imparfait for habits." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "My mother wanted us [to come] for dinner.", sentence: "Ma mère voulait qu'on ___ dîner.", answer: "vienne", explanation: "\"Vouloir que\" + subjunctive: \"venir\" → \"qu'on vienne\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I'm sorry you weren't able to come. (to a friend)", answer: "Je regrette que tu n'aies pas pu venir.", altAnswers: ["Je suis désolé que tu n'aies pas pu venir.", "Je suis désolée que tu n'aies pas pu venir."], explanation: "\"Regretter que\" + past subjunctive \"aies pu\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "We miss him a lot.", answer: "Il nous manque beaucoup.", explanation: "\"Manquer à\": he is the subject, \"nous\" the people who miss him." },
      { type: "multiple-choice", question: "How do you say 'I miss my father'?", options: ["Mon père me manque.", "Je manque mon père.", "Je manque à mon père.", "Mon père manque de moi."], correctIndex: 0, explanation: "With \"manquer à\", the person missed is the subject: \"mon père me manque\". \"Je manque à mon père\" means he misses me." },
      { type: "word-order", prompt: "Put the words in order to say: I remember the songs he used to sing.", words: ["Je", "me", "souviens", "des", "chansons", "qu'il", "chantait."], translation: "I remember the songs he used to sing.", explanation: "\"Se souvenir de\" + \"les chansons\" → \"des chansons\"; imparfait for a habit." },
      { type: "dictation", audio: "Il avait peur que je me perde en forêt.", explanation: "\"Avoir peur que\" + subjunctive \"perde\"." },
      { type: "speak", text: "Elle me manque beaucoup.", prompt: "Say you miss her a lot.", explanation: "\"Elle me manque\": she is lacking to me." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "She taught me to swim.", answer: "Elle m'a appris à nager.", explanation: "\"Apprendre à quelqu'un à\" + infinitive = to teach someone to do something." },
      { type: "translate", direction: "en-es", prompt: "Turn it into the past (il était...).", source: "Il est fier que je fasse ce métier.", answer: "Il était fier que je fasse ce métier.", explanation: "Only the main verb moves into the past; the subjunctive \"fasse\" stays in the present." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Je regrette qu'il n'est pas venu.", answer: "Je regrette qu'il ne soit pas venu.", explanation: "\"Regretter que\" + subjunctive: past subjunctive \"soit venu\"." },
    ],
  },
  {
    slug: "b1-dictation-double-pronouns",
    level: "FR-B1",
    number: 4,
    title: "Dictation: Double Pronouns",
    summary: "Spaced review of double pronouns through dictation: le lui, les leur, m'en, y en, and participle agreement you can't hear.",
    duration: "13 min",
    sections: [
      {
        heading: "Hearing the order",
        body: [
          "Double pronouns are hard to hear because they run together: \"je le lui ai dit\" sounds like one long word, [ʒələlɥiedi]. Writing them down forces you to decide which pronouns are there and in what order: me / te / se / nous / vous → le / la / les → lui / leur → y → en.",
        ],
        examples: [
          { es: "Je le lui ai dit hier.", en: "I told him yesterday." },
          { es: "Tu le lui as demandé ?", en: "Did you ask him for it?" },
          { es: "Il va le leur expliquer.", en: "He's going to explain it to them." },
        ],
        checkpoint: [
          { type: "dictation", audio: "Je la lui ai montrée hier.", explanation: "\"La lui\": direct before indirect; \"montrée\" agrees with \"la\"." },
          { type: "translate", direction: "en-es", prompt: "Replace la photo and à Marie with pronouns.", source: "J'ai montré la photo à Marie.", answer: "Je la lui ai montrée.", explanation: "\"La\" (la photo) before \"lui\" (to Marie), both before the auxiliary; \"montrée\" agrees with \"la\"." },
        ],
      },
      {
        heading: "Le, les, lui, leur: listening tips",
        body: [
          "Listening tips: \"le\" and \"les\" differ by the vowel (le = 'luh', les = 'lay'). \"Lui\" and \"leur\" are easy to tell apart, but remember \"leur\" never takes an s when it's a pronoun. \"Les leur\" is the hardest combination: \"Je les leur ai rendus\".",
        ],
        examples: [
          { es: "Elle la leur a prêtée.", en: "She lent it to them." },
          { es: "On les leur a rendus ce matin.", en: "We gave them back to them this morning." },
          { es: "Je ne les lui ai pas encore envoyées.", en: "I haven't sent them to her yet." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Nous le leur avons dit.", question: "What did you hear?", options: ["Nous le leur avons dit.", "Nous les leur avons dit.", "Nous le lui avons dit.", "Nous leur avons dit."], correctIndex: 0, explanation: "\"Le\" ('luh', not 'lay') + \"leur\": it to them." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Je leurs les ai rendus.", answer: "Je les leur ai rendus.", explanation: "\"Les\" comes before \"leur\", and the pronoun \"leur\" never takes an s." },
        ],
      },
      {
        heading: "En and y: m'en, lui en, y en",
        body: [
          "\"En\" always comes last: \"Il m'en a parlé\" (he told me about it), \"Je lui en ai donné\" (I gave him some), \"Il y en a\" (there is / are some). In speech \"il y en a\" often shrinks to \"y en a\" [jɑ̃na].",
          "The participle never agrees with \"en\": \"Des pommes ? J'en ai acheté\" (no -es). In the imperative: \"Donne-m'en\", \"Parle-lui-en\", \"Vas-y\" (with an -s on \"va\" before \"y\").",
        ],
        examples: [
          { es: "Il m'en a parlé la semaine dernière.", en: "He told me about it last week." },
          { es: "Je lui en ai donné trois.", en: "I gave him three of them." },
          { es: "Il y en a encore dans le frigo.", en: "There are still some in the fridge." },
          { es: "Des cerises ? J'en ai acheté deux kilos.", en: "Cherries? I bought two kilos." },
          { es: "Donne-m'en un peu, s'il te plaît.", en: "Give me a bit, please." },
          { es: "Ne leur en parle pas.", en: "Don't tell them about it." },
        ],
        checkpoint: [
          { type: "dictation", audio: "Elle nous en a apporté une bouteille.", explanation: "\"Nous en\": \"en\" always last; no agreement with \"en\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Did he talk to you about it? (to a friend)", answer: "Il t'en a parlé ?", altAnswers: ["Est-ce qu'il t'en a parlé ?", "T'en a-t-il parlé ?"], explanation: "\"Parler de quelque chose à quelqu'un\" → \"t'en parler\"; \"en\" comes last." },
        ],
      },
      {
        heading: "Agreement you can see but not hear",
        body: [
          "In a dictation, the hardest part is agreement with a preceding direct object: you hear [done] but must write \"donné\", \"donnée\", \"donnés\" or \"données\". Ask: what does \"le / la / les\" stand for? \"Les clés ? Je les lui ai données\" (feminine plural). \"Les livres ? Je les leur ai rendus\" (masculine plural).",
          "Some participles do make agreement audible, which helps: \"mise\", \"prise\", \"faite\", \"dite\", \"écrite\", \"ouverte\": \"La lettre ? Je la lui ai écrite\" [ekʁit].",
        ],
        examples: [
          { es: "Les clés ? Je les lui ai données.", en: "The keys? I gave them to him." },
          { es: "Les livres ? Je les leur ai rendus.", en: "The books? I gave them back to them." },
          { es: "La lettre ? Je la lui ai écrite hier soir.", en: "The letter? I wrote it to her last night." },
          { es: "Ta veste ? Je te l'ai mise sur la chaise.", en: "Your jacket? I put it on the chair for you." },
          { es: "Ces photos, qui te les a prises ?", en: "These photos, who took them for you?" },
        ],
        checkpoint: [
          { type: "dictation", audio: "Les fleurs ? Je les lui ai offertes.", explanation: "\"Offertes\": you can hear the t, the sign of agreement with \"les\" (les fleurs)." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "The door? Who [opened it] for you?", sentence: "La porte ? Qui te l'a ___ ?", answer: "ouverte", explanation: "\"L'\" = la porte, before \"avoir\": \"ouverte\", with an audible t." },
        ],
      },
    ],
    exercises: [
      { type: "dictation", audio: "Nous la leur avons vendue l'an dernier.", explanation: "\"La leur\" (it to them); \"vendue\" agrees with \"la\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I haven't given it back to him yet. (the book)", answer: "Je ne le lui ai pas encore rendu.", explanation: "\"Ne\" before the pronouns, \"pas encore\" after the auxiliary." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "She's going to send them to us.", answer: "Elle va nous les envoyer.", explanation: "With \"aller\" + infinitive, the pronouns go before the infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "He gave me two of them.", answer: "Il m'en a donné deux.", explanation: "\"En\" + a number at the end; no agreement with \"en\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Give it to her. (to a friend; the key)", answer: "Donne-la-lui.", explanation: "Affirmative imperative: verb + \"la\" + \"lui\", with hyphens." },
      { type: "dictation", audio: "Des timbres ? Il en reste trois dans le tiroir.", explanation: "\"En\" with a number: \"il en reste trois\"." },
      { type: "translate", direction: "en-es", prompt: "Make it negative.", source: "Envoie-la-leur.", answer: "Ne la leur envoie pas.", explanation: "Negative imperative: the pronouns go back before the verb, in the normal order." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "The table? I [put it] in the kitchen.", sentence: "La table ? Je l'ai ___ dans la cuisine.", answer: "mise", explanation: "\"L'\" = la table, a feminine direct object before \"avoir\": \"mise\"." },
      { type: "multiple-choice", question: "Which sentence means 'I gave them to them'?", options: ["Je les leur ai donnés.", "Je leur les ai donnés.", "Je les lui ai donnés.", "Je le leur ai donné."], correctIndex: 0, explanation: "Order: \"les\" before \"leur\"; \"lui\" would be to him or her, and \"le\" is a single thing." },
      { type: "speak", text: "Je te l'ai déjà dit.", prompt: "Say: I've already told you. (to a friend)", tip: "Run te l'ai together: teu-lé.", explanation: "\"Te l'\": \"te\" before \"le\", both before the auxiliary." },
      { type: "word-order", prompt: "Put the words in order to say: These letters, who wrote them to you?", words: ["Ces", "lettres,", "qui", "te", "les", "a", "écrites ?"], translation: "These letters, who wrote them to you?", explanation: "\"Te les\" before \"a\"; \"écrites\" agrees with \"les\" (les lettres)." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Je lui le donnerai demain.", answer: "Je le lui donnerai demain.", explanation: "Order: \"le\" before \"lui\"." },
    ],
  },
  {
    slug: "b1-word-web-opinions-certainty",
    level: "FR-B1",
    number: 5,
    title: "Word Web: Opinions and Certainty",
    summary: "Grade your certainty from je suis convaincu que to ça m'étonnerait que, choose the right mood each time, and agree or disagree politely.",
    duration: "15 min",
    sections: [
      {
        heading: "Sure, fairly sure: the indicative side",
        body: [
          "French lets you dial your certainty up and down precisely. Strong certainty: \"je suis sûr / certain / convaincu que\" (I'm convinced that), \"il est évident / clair que\", \"sans aucun doute\". Medium: \"je pense / crois que\", \"il me semble que\" (it seems to me that), \"j'ai l'impression que\" (I get the feeling that), \"il est probable que\". All of these take the indicative: you present the idea as true or likely.",
        ],
        examples: [
          { es: "Je suis convaincue que c'est la bonne solution.", en: "I'm convinced it's the right solution." },
          { es: "Il est évident que les prix vont augmenter.", en: "It's obvious that prices are going to rise." },
          { es: "J'ai l'impression qu'il ne m'écoute pas.", en: "I get the feeling he isn't listening to me." },
          { es: "Il est probable que la réunion sera reportée.", en: "The meeting will probably be postponed." },
          { es: "Je crois qu'on s'est trompés de route.", en: "I think we've taken the wrong road." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "« Je suis sûr qu'il ___ la vérité. » Which form fits?", options: ["dit", "dise", "dirait-il", "disant"], correctIndex: 0, explanation: "Certainty takes the indicative: \"il dit\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "It's clear that she's tired.", answer: "Il est clair qu'elle est fatiguée.", altAnswers: ["C'est clair qu'elle est fatiguée.", "Il est évident qu'elle est fatiguée."], explanation: "\"Il est clair que\" + indicative." },
        ],
      },
      {
        heading: "Il me semble que",
        body: [
          "Watch \"il me semble que\" (indicative) vs \"il semble que\" (often subjunctive in careful French, because it's less personal and less certain). At the Intermediate level, the safe choice is \"il me semble que\" + indicative.",
        ],
        examples: [
          { es: "Il me semble que tu as maigri.", en: "It seems to me that you've lost weight." },
          { es: "Il me semble qu'on s'est déjà rencontrés.", en: "I think we've met before." },
          { es: "Il me semble que le magasin ferme à midi.", en: "I believe the shop closes at noon." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "It seems to me that the train [has left].", sentence: "Il me semble que le train ___.", answer: "est parti", altAnswers: ["est déjà parti"], explanation: "\"Il me semble que\" + indicative; \"partir\" takes être." },
          { type: "listen-choose", audio: "Il me semble que tu as changé de coiffure.", question: "What does the speaker say?", options: ["I think you've changed your hairstyle.", "I'm sure you haven't changed your hairstyle.", "You should change your hairstyle.", "It seems you want a new hairstyle."], correctIndex: 0, explanation: "\"Il me semble que\" = it seems to me, I think; \"changer de coiffure\" = to change hairstyle." },
        ],
      },
      {
        heading: "Doubt and disbelief: the subjunctive side",
        body: [
          "As soon as you express doubt, the subjunctive appears: \"je doute que\", \"je ne suis pas sûr / certain que\", \"je ne pense pas / ne crois pas que\", \"il est peu probable que\" (it's unlikely), \"il est possible que\", and the very French \"ça m'étonnerait que\" (I'd be surprised if: a polite way of saying I don't believe it).",
        ],
        examples: [
          { es: "Je doute qu'il soit au courant.", en: "I doubt he knows about it." },
          { es: "Ça m'étonnerait qu'ils arrivent à l'heure.", en: "I'd be surprised if they arrived on time." },
          { es: "Il est peu probable qu'il pleuve demain.", en: "It's unlikely to rain tomorrow." },
          { es: "Il est possible que je me sois trompé.", en: "It's possible that I made a mistake." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "I doubt she [can] help us.", sentence: "Je doute qu'elle ___ nous aider.", answer: "puisse", explanation: "\"Douter que\" + subjunctive: \"pouvoir\" → \"qu'elle puisse\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I'd be surprised if he said yes.", answer: "Ça m'étonnerait qu'il dise oui.", altAnswers: ["Cela m'étonnerait qu'il dise oui."], explanation: "\"Ça m'étonnerait que\" + present subjunctive, where English uses a past form." },
        ],
      },
      {
        heading: "Sure or not sure: the pairs",
        body: [
          "Compare the pairs: \"Je suis sûr qu'il a raison\" (indicative) / \"Je ne suis pas sûr qu'il ait raison\" (subjunctive). \"Il est probable qu'il pleuvra\" / \"Il est peu probable qu'il pleuve\".",
        ],
        examples: [
          { es: "Je ne suis pas sûr qu'elle ait raison.", en: "I'm not sure she's right." },
          { es: "Je ne crois pas que ce soit une bonne idée.", en: "I don't think it's a good idea." },
          { es: "Je pense qu'il a raison, mais je ne pense pas qu'il soit honnête.", en: "I think he's right, but I don't think he's honest." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Make it negative.", source: "Je suis sûre qu'il vient ce soir.", answer: "Je ne suis pas sûre qu'il vienne ce soir.", explanation: "Negative certainty brings the subjunctive: \"vient\" → \"vienne\"." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Je ne crois pas qu'il est malade.", answer: "Je ne crois pas qu'il soit malade.", explanation: "\"Je ne crois pas que\" + subjunctive: \"soit\"." },
        ],
      },
      {
        heading: "Agreeing",
        body: [
          "Agreeing: \"Je suis (tout à fait) d'accord avec toi\", \"Je partage ton avis\" (I share your view), \"Tu as raison\", \"Exactement\", \"C'est vrai\". Partly: \"Je suis d'accord jusqu'à un certain point\", \"Oui, mais...\", \"Dans un sens, oui\".",
        ],
        examples: [
          { es: "Je partage tout à fait ton avis.", en: "I completely agree with you." },
          { es: "Je suis d'accord avec toi jusqu'à un certain point.", en: "I agree with you up to a point." },
          { es: "Tu as raison, je n'y avais pas pensé.", en: "You're right, I hadn't thought of that." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I completely agree with you. (polite)", answer: "Je suis tout à fait d'accord avec vous.", altAnswers: ["Je partage tout à fait votre avis.", "Je suis complètement d'accord avec vous."], explanation: "\"Être d'accord avec\" quelqu'un; \"tout à fait\" = completely." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "J'agrée avec ton idée.", answer: "Je suis d'accord avec ton idée.", explanation: "To agree is \"être d'accord\"; \"agréer\" belongs only in formal letter closings." },
        ],
      },
      {
        heading: "Disagreeing politely",
        body: [
          "Disagreeing politely: \"Je ne suis pas du tout d'accord\", \"Je ne partage pas ton avis\", \"Je vois les choses autrement\", \"Je ne suis pas convaincu\". Note: to agree is \"être d'accord\", never *agréer* (which only appears in formal letter closings). And \"à mon avis\" (in my opinion), never *dans mon opinion*.",
        ],
        examples: [
          { es: "Je ne suis pas du tout d'accord avec cette décision.", en: "I don't agree with this decision at all." },
          { es: "À mon avis, il faudrait attendre.", en: "In my opinion, we should wait." },
          { es: "Je vois les choses autrement.", en: "I see things differently." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Dans mon opinion, c'est trop cher.", answer: "À mon avis, c'est trop cher.", altAnswers: ["Selon moi, c'est trop cher.", "Pour moi, c'est trop cher."], explanation: "In my opinion is \"à mon avis\"; \"dans mon opinion\" is a calque." },
          { type: "speak", text: "Je ne partage pas ton avis.", prompt: "Tell a friend politely that you don't share their view.", explanation: "\"Partager l'avis de quelqu'un\" = to share their view." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I'm certain the shop is closed.", answer: "Je suis certain que le magasin est fermé.", altAnswers: ["Je suis certaine que le magasin est fermé.", "Je suis sûr que le magasin est fermé.", "Je suis sûre que le magasin est fermé."], explanation: "Certainty takes the indicative: \"est\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I doubt they know the answer.", answer: "Je doute qu'ils sachent la réponse.", altAnswers: ["Je doute qu'ils connaissent la réponse.", "Je doute qu'elles sachent la réponse."], explanation: "\"Douter que\" + subjunctive: \"savoir\" → \"qu'ils sachent\"." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "It's possible that she [has left].", sentence: "Il est possible qu'elle ___.", answer: "soit partie", explanation: "\"Il est possible que\" + past subjunctive; \"partir\" takes être, so \"partie\" agrees." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I get the feeling it's going to snow.", answer: "J'ai l'impression qu'il va neiger.", explanation: "\"Avoir l'impression que\" + indicative." },
      { type: "translate", direction: "en-es", prompt: "Change it to Il est peu probable que.", source: "Il est probable qu'il viendra.", answer: "Il est peu probable qu'il vienne.", explanation: "\"Probable\" takes the indicative, \"peu probable\" the subjunctive: \"vienne\"." },
      { type: "multiple-choice", question: "Which phrase is followed by the indicative?", options: ["je suis convaincu que", "je doute que", "il est possible que", "ça m'étonnerait que"], correctIndex: 0, explanation: "Conviction presents the idea as true; the other three express doubt and take the subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "In my opinion, it's too late.", answer: "À mon avis, c'est trop tard.", altAnswers: ["À mon avis, il est trop tard.", "Selon moi, c'est trop tard.", "Selon moi, il est trop tard.", "Pour moi, c'est trop tard."], explanation: "\"À mon avis\" = in my opinion." },
      { type: "word-order", prompt: "Put the words in order to say: It's possible he's forgotten.", words: ["Il", "est", "possible", "qu'il", "ait", "oublié."], translation: "It's possible he's forgotten.", explanation: "\"Il est possible que\" + past subjunctive \"ait oublié\"." },
      { type: "listen-choose", audio: "Ça m'étonnerait qu'il vienne.", question: "What does the speaker think?", options: ["He probably won't come.", "He'll definitely come.", "She's surprised he came.", "She hopes he'll come."], correctIndex: 0, explanation: "\"Ça m'étonnerait que\" = I'd be surprised if: a polite way of expressing doubt." },
      { type: "speak", text: "Je ne suis pas convaincu que ce soit utile.", prompt: "Say you're not convinced it's useful.", explanation: "Negative conviction brings the subjunctive \"soit\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The match will probably be cancelled.", answer: "Il est probable que le match sera annulé.", altAnswers: ["Le match sera probablement annulé.", "Le match va probablement être annulé."], explanation: "\"Il est probable que\" + indicative (here the future passive)." },
      { type: "dictation", audio: "Je ne pense pas qu'il le sache.", explanation: "\"Je ne pense pas que\" + subjunctive \"sache\"." },
    ],
  },
  {
    slug: "b1-themed-review-after-the-storm",
    level: "FR-B1",
    number: 6,
    title: "Themed Review: After the Storm",
    summary: "A village counts the damage after a violent storm: the passive for the damage, on s'est entraidés, il faut que la commune..., and si on avait été prévenus as a chunk.",
    duration: "14 min",
    sections: [
      {
        heading: "The damage: les arbres ont été arrachés",
        body: [
          "In a village in the Gironde, a violent storm (\"une tempête\") hit during the night. Reports of damage use the passive, because what matters is what happened to things, not who did it: \"Des dizaines d'arbres ont été arrachés\" (uprooted), \"Plusieurs toits ont été endommagés\", \"La route a été coupée\", \"Le village a été privé d'électricité pendant deux jours\" (left without electricity).",
        ],
        examples: [
          { es: "Des dizaines d'arbres ont été arrachés par le vent.", en: "Dozens of trees were uprooted by the wind." },
          { es: "Plusieurs toits ont été gravement endommagés.", en: "Several roofs were badly damaged." },
          { es: "La route principale a été coupée toute la journée.", en: "The main road was blocked all day." },
          { es: "Le village a été privé d'électricité pendant deux jours.", en: "The village was without electricity for two days." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The bridge was closed by the police.", answer: "Le pont a été fermé par la police.", explanation: "Passive passé composé with \"par\" for the agent." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "The cars [were damaged] by the hail.", sentence: "Les voitures ___ par la grêle.", answer: "ont été endommagées", explanation: "Passive: \"ont été\" + participle agreeing with \"les voitures\" (feminine plural)." },
        ],
      },
      {
        heading: "Storm vocabulary",
        body: [
          "Storm vocabulary: \"une tempête\", \"un orage\" (thunderstorm), \"des rafales de vent\" (gusts), \"la grêle\" (hail), \"une inondation\" (flood), \"une coulée de boue\" (mudslide), \"les dégâts\" (damage, always plural), \"les sinistrés\" (the disaster victims).",
        ],
        examples: [
          { es: "Les rafales ont atteint 150 km/h.", en: "The gusts reached 150 km/h." },
          { es: "Les dégâts sont estimés à plusieurs millions d'euros.", en: "The damage is estimated at several million euros." },
          { es: "Il y a eu de la grêle toute la nuit.", en: "There was hail all night." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "« Il y a eu un orage. » What happened?", options: ["There was a thunderstorm.", "There was a flood.", "There was a mudslide.", "There was a heatwave."], correctIndex: 0, explanation: "\"Un orage\" is a thunderstorm; a flood is \"une inondation\", a mudslide \"une coulée de boue\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "There was a flood in the village.", answer: "Il y a eu une inondation dans le village.", altAnswers: ["Il y a eu une inondation au village."], explanation: "\"Il y a eu\" = there was (an event); \"une inondation\" = a flood." },
        ],
      },
      {
        heading: "Solidarity: on s'est entraidés",
        body: [
          "The villagers helped each other: \"On s'est entraidés\" (we helped one another). Reciprocal verbs (\"s'entraider\", \"se parler\", \"se prêter des outils\") use the pronominal form; in the passé composé, with \"on\" meaning \"nous\", the participle is usually plural: \"on s'est entraidés\".",
          "The story mixes pasts: \"Pendant que certains dégageaient la route, d'autres préparaient à manger\" (imparfait for simultaneous background actions), \"Le maire a ouvert la salle des fêtes pour ceux dont la maison était inondée\" (relatives).",
        ],
        examples: [
          { es: "Tout le village s'est mobilisé, on s'est entraidés.", en: "The whole village pulled together, we all helped each other." },
          { es: "Pendant que certains dégageaient la route, d'autres préparaient à manger.", en: "While some were clearing the road, others were making food." },
          { es: "Les voisins se sont prêté des tronçonneuses.", en: "The neighbours lent each other chainsaws." },
          { es: "Le maire a ouvert la salle des fêtes à ceux dont la maison était inondée.", en: "The mayor opened the village hall to those whose houses were flooded." },
          { es: "Je ne connaissais pas mes voisins avant la tempête.", en: "I didn't know my neighbours before the storm." },
          { es: "Ce qui m'a frappé, c'est la solidarité.", en: "What struck me was the solidarity." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The neighbours talked to each other for hours.", answer: "Les voisins se sont parlé pendant des heures.", altAnswers: ["Les voisins ont parlé ensemble pendant des heures."], explanation: "Reciprocal \"se parler\"; no agreement, because \"se\" means to each other (parler à)." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "The family [whose] car was crushed slept at the school.", sentence: "La famille ___ la voiture a été écrasée a dormi à l'école.", answer: "dont", explanation: "Whose = \"dont\" (la voiture de la famille)." },
        ],
      },
      {
        heading: "Lessons and demands: il faut que la commune...",
        body: [
          "After the storm, the residents make demands with \"il faut que\" + subjunctive: \"Il faut que la commune répare les routes au plus vite\", \"Il faudrait que l'État reconnaisse l'état de catastrophe naturelle\" (an official status that lets insurers pay out).",
          "Regret about the warning: \"Si on avait été prévenus...\" (If we'd been warned...) is a useful chunk on its own, as an exclamation of regret. For now, keep it as a fixed phrase, or rephrase with what you know: \"On n'a pas été prévenus à temps\", \"Personne ne nous avait prévenus\".",
        ],
        examples: [
          { es: "Il faut que la commune répare les routes au plus vite.", en: "The council must repair the roads as soon as possible." },
          { es: "Il faudrait que l'État reconnaisse l'état de catastrophe naturelle.", en: "The state should declare it a natural disaster." },
          { es: "Si on avait été prévenus !", en: "If only we'd been warned!" },
          { es: "Personne ne nous avait prévenus.", en: "No one had warned us." },
          { es: "Il est inadmissible que l'alerte soit arrivée si tard.", en: "It's unacceptable that the warning came so late." },
          { es: "La prochaine fois, on sera mieux préparés.", en: "Next time, we'll be better prepared." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "The state should [help] the victims.", sentence: "Il faudrait que l'État ___ les sinistrés.", answer: "aide", explanation: "\"Il faudrait que\" + subjunctive: \"aider\" → \"qu'il aide\"." },
          { type: "listen-choose", audio: "Personne ne nous avait dit que la rivière allait déborder.", question: "What does it mean?", options: ["No one had told us the river was going to overflow.", "We had told everyone the river would overflow.", "No one believed the river would overflow.", "The river overflowed without anyone noticing."], correctIndex: 0, explanation: "\"Personne ne\" as subject; plus-que-parfait \"avait dit\"; \"déborder\" = to overflow." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Many houses were flooded.", answer: "Beaucoup de maisons ont été inondées.", altAnswers: ["De nombreuses maisons ont été inondées."], explanation: "Passive: \"inondées\" agrees with \"maisons\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The school was closed for a week.", answer: "L'école a été fermée pendant une semaine.", altAnswers: ["L'école est restée fermée pendant une semaine."], explanation: "Passive passé composé; \"pendant\" for the duration." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "Everyone must [be] careful.", sentence: "Il faut que tout le monde ___ prudent.", answer: "soit", explanation: "\"Il faut que\" + subjunctive: \"être\" → \"soit\"; \"tout le monde\" is singular." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "While I was sleeping, the wind was blowing hard.", answer: "Pendant que je dormais, le vent soufflait fort.", altAnswers: ["Pendant que je dormais, le vent soufflait très fort."], explanation: "Two background actions at the same time: imparfait in both clauses." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "What surprised me was the silence.", answer: "Ce qui m'a surpris, c'est le silence.", altAnswers: ["Ce qui m'a surprise, c'est le silence.", "Ce qui m'a surpris, c'était le silence.", "Ce qui m'a surprise, c'était le silence."], explanation: "\"Ce qui\" as the subject of \"a surpris\"." },
      { type: "multiple-choice", question: "'It's a shame the shops are still closed.' Which is correct?", options: ["C'est dommage que les magasins soient encore fermés.", "C'est dommage que les magasins sont encore fermés.", "C'est dommage que les magasins seront encore fermés.", "C'est dommage que les magasins étaient être fermés."], correctIndex: 0, explanation: "A judgement + \"que\" takes the subjunctive: \"soient\"." },
      { type: "word-order", prompt: "Put the words in order to say: Next week, the road will be reopened.", words: ["La", "semaine", "prochaine,", "la", "route", "sera", "rouverte."], translation: "Next week, the road will be reopened.", explanation: "Future passive: \"sera\" + participle agreeing with \"la route\"." },
      { type: "translate", direction: "en-es", prompt: "Turn it into the passive.", source: "Le vent a détruit la grange.", answer: "La grange a été détruite par le vent.", explanation: "Passive: \"a été\" + participle agreeing with \"la grange\"; the agent with \"par\"." },
      { type: "dictation", audio: "Les dégâts ont été très importants.", explanation: "\"Les dégâts\" is always plural; \"importants\" = considerable." },
      { type: "speak", text: "On s'est tous entraidés pendant la tempête.", prompt: "Say we all helped each other during the storm.", explanation: "Reciprocal \"s'entraider\"; plural participle with \"on\" = nous." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Il est inadmissible que les secours sont arrivés si tard.", answer: "Il est inadmissible que les secours soient arrivés si tard.", explanation: "A judgement takes the subjunctive: past subjunctive \"soient arrivés\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The storm caused a lot of damage.", answer: "La tempête a causé beaucoup de dégâts.", altAnswers: ["La tempête a fait beaucoup de dégâts.", "La tempête a provoqué beaucoup de dégâts."], explanation: "\"Les dégâts\" = damage, always plural." },
    ],
  },
  {
    slug: "b1-qa-que-ferais-tu",
    level: "FR-B1",
    number: 7,
    title: "Questions and Answers: Qu'est-ce que tu ferais ?",
    summary: "Spaced review of si + imparfait + conditional through moral and practical dilemmas: ask what someone would do and answer.",
    duration: "13 min",
    sections: [
      {
        heading: "Asking: qu'est-ce que tu ferais si...?",
        body: [
          "The question frame is \"Qu'est-ce que tu ferais si\" + imparfait? (What would you do if...?), or more formally \"Que feriez-vous si...?\". In speech, the question word often moves to the end: \"Tu ferais quoi, toi, si...?\".",
          "Remember the two halves: imparfait after \"si\", conditional in the result. Irregular conditional stems you'll need: \"ferais\", \"irais\", \"serais\", \"aurais\", \"pourrais\", \"voudrais\", \"devrais\". Regular ones built on the infinitive: \"dirais\", \"rendrais\", and \"appellerais\" with its double l.",
        ],
        examples: [
          { es: "Qu'est-ce que tu ferais si tu trouvais un portefeuille dans la rue ?", en: "What would you do if you found a wallet in the street?" },
          { es: "Que feriez-vous si votre meilleur ami vous mentait ?", en: "What would you do if your best friend lied to you?" },
          { es: "Tu ferais quoi, toi, si tu gagnais au loto ?", en: "What would you do if you won the lottery?" },
          { es: "Qu'est-ce que tu dirais si ton chef te proposait une promotion à l'étranger ?", en: "What would you say if your boss offered you a promotion abroad?" },
          { es: "Si tu pouvais changer une chose dans ta vie, ce serait quoi ?", en: "If you could change one thing in your life, what would it be?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "What would you do if you lost your phone? (to a friend)", answer: "Qu'est-ce que tu ferais si tu perdais ton téléphone ?", altAnswers: ["Que ferais-tu si tu perdais ton téléphone ?", "Tu ferais quoi si tu perdais ton téléphone ?", "Qu'est-ce que tu ferais si tu perdais ton portable ?", "Que ferais-tu si tu perdais ton portable ?", "Tu ferais quoi si tu perdais ton portable ?"], explanation: "\"Si\" + imparfait \"perdais\", result in the conditional \"ferais\"." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Qu'est-ce que tu ferais si tu aurais le temps ?", answer: "Qu'est-ce que tu ferais si tu avais le temps ?", explanation: "Never the conditional after \"si\": imparfait \"avais\"." },
        ],
      },
      {
        heading: "Answering: moral dilemmas",
        body: [
          "Answers start with the conditional and often justify with \"parce que\" or \"sinon\" (otherwise): \"Je l'apporterais au commissariat, parce que je ne voudrais pas qu'on garde le mien\". Notice \"je ne voudrais pas que\" + subjunctive.",
          "Hesitating: \"Ça dépend\", \"Je ne sais pas trop\", \"Honnêtement, je crois que je...\", \"À sa place, je...\". Strong refusal: \"Je ne ferais jamais ça\", \"Pour rien au monde\" (not for anything in the world).",
        ],
        examples: [
          { es: "Je l'apporterais au commissariat.", en: "I'd take it to the police station." },
          { es: "Je ne voudrais pas qu'on garde le mien.", en: "I wouldn't want someone to keep mine." },
          { es: "Honnêtement, je crois que je lui pardonnerais.", en: "Honestly, I think I'd forgive him." },
          { es: "Ça dépend du mensonge.", en: "It depends on the lie." },
          { es: "Je ne ferais jamais ça, pour rien au monde.", en: "I'd never do that, not for anything in the world." },
          { es: "Si j'étais à sa place, je lui en parlerais.", en: "If I were in his shoes, I'd talk to him about it." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "I wouldn't want my children [to know].", sentence: "Je ne voudrais pas que mes enfants le ___.", answer: "sachent", explanation: "\"Vouloir que\" + subjunctive: \"savoir\" → \"qu'ils sachent\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "In her shoes, I'd say nothing.", answer: "À sa place, je ne dirais rien.", altAnswers: ["Si j'étais à sa place, je ne dirais rien.", "À sa place, moi, je ne dirais rien."], explanation: "\"À sa place\" = in his / her shoes; conditional \"dirais\" with \"ne... rien\"." },
        ],
      },
      {
        heading: "Practical dilemmas: chaining consequences",
        body: [
          "Practical what-ifs work the same way: \"Si mon train était annulé, je prendrais un covoiturage\", \"Si j'avais une panne en pleine nuit, j'appellerais l'assistance\". Chain consequences with a second \"si\" or with \"et puis\": \"Si je ratais le dernier métro, je rentrerais à pied, et si c'était trop loin, je prendrais un taxi\".",
        ],
        examples: [
          { es: "Si mon train était annulé, je prendrais un covoiturage.", en: "If my train were cancelled, I'd get a car-share." },
          { es: "Si je ratais le dernier métro, je rentrerais à pied.", en: "If I missed the last metro, I'd walk home." },
          { es: "Si c'était trop loin, je prendrais un taxi.", en: "If it were too far, I'd take a taxi." },
          { es: "Si j'avais une panne en pleine nuit, j'appellerais l'assistance.", en: "If I broke down in the middle of the night, I'd call roadside assistance." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Change it to a hypothesis (si + imparfait).", source: "Si je rate le bus, j'irai à pied.", answer: "Si je ratais le bus, j'irais à pied.", explanation: "Imagined situation: \"si\" + imparfait \"ratais\", then the conditional \"irais\"." },
          { type: "word-order", prompt: "Put the words in order to say: If the shop were closed, I'd go to the market.", words: ["Si", "le", "magasin", "était", "fermé,", "j'irais", "au", "marché."], translation: "If the shop were closed, I'd go to the market.", explanation: "\"Si\" + imparfait, then the conditional." },
        ],
      },
      {
        heading: "Likely or imagined?",
        body: [
          "When the situation is quite likely, switch back to a real condition with \"si\" + present + future: \"S'il neige demain, je travaillerai de chez moi\". The choice of tense tells your listener how likely you think it is.",
        ],
        examples: [
          { es: "S'il neige demain, je travaillerai de chez moi.", en: "If it snows tomorrow, I'll work from home." },
          { es: "Si tu as le temps ce soir, on ira au cinéma.", en: "If you have time tonight, we'll go to the cinema." },
          { es: "Si je gagnais au loto, j'arrêterais de travailler.", en: "If I won the lottery, I'd stop working." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Your friend will very probably come tomorrow. Which sentence shows that?", options: ["S'il vient demain, on fera un gâteau.", "S'il venait demain, on ferait un gâteau.", "S'il viendrait demain, on ferait un gâteau.", "S'il viendra demain, on fera un gâteau."], correctIndex: 0, explanation: "A likely event: \"si\" + present, then the future. The imparfait version sounds less likely, and the last two are never correct." },
          { type: "listen-choose", audio: "Si j'étais toi, je refuserais.", question: "What did you hear?", options: ["If I were you, I'd refuse.", "If I were you, I'll refuse.", "When I was you, I refused.", "If you were me, you'd refuse."], correctIndex: 0, explanation: "\"Si j'étais toi\" + conditional \"refuserais\" (open è sound at the end)." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "What would you do if you had a year off? (polite)", answer: "Que feriez-vous si vous aviez un an de congé ?", altAnswers: ["Qu'est-ce que vous feriez si vous aviez un an de congé ?", "Que feriez-vous si vous aviez une année de congé ?", "Qu'est-ce que vous feriez si vous aviez une année de congé ?", "Que feriez-vous si vous aviez un an de libre ?"], explanation: "\"Si\" + imparfait \"aviez\", then the conditional \"feriez\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Honestly, I think I'd say no.", answer: "Honnêtement, je crois que je dirais non.", altAnswers: ["Honnêtement, je pense que je dirais non.", "Franchement, je crois que je dirais non.", "Franchement, je pense que je dirais non."], explanation: "\"Croire que\" + indicative (here the conditional \"dirais\")." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "If you could live anywhere, where [would you go]?", sentence: "Si tu pouvais vivre n'importe où, tu ___ où ?", answer: "irais", explanation: "Conditional of \"aller\": irregular stem \"ir-\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "If I were you, I'd call her.", answer: "Si j'étais toi, je l'appellerais.", altAnswers: ["À ta place, je l'appellerais.", "Si j'étais à ta place, je l'appellerais.", "Si j'étais vous, je l'appellerais.", "À votre place, je l'appellerais."], explanation: "\"Si j'étais toi\" + conditional; \"appeler\" doubles the l: \"appellerais\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "If it rains tomorrow, we'll stay at home.", answer: "S'il pleut demain, on restera à la maison.", altAnswers: ["S'il pleut demain, nous resterons à la maison.", "S'il pleut demain, on restera chez nous.", "S'il pleut demain, nous resterons chez nous."], explanation: "A likely situation: \"si\" + present, then the future." },
      { type: "multiple-choice", question: "Which answer shows hesitation?", options: ["Ça dépend, je ne sais pas trop.", "Je ne ferais jamais ça.", "Oui, sans hésiter.", "Pour rien au monde."], correctIndex: 0, explanation: "\"Ça dépend\" and \"je ne sais pas trop\" buy you time; the others are firm answers." },
      { type: "word-order", prompt: "Put the words in order to say: What would you say to her? (to a friend)", words: ["Qu'est-ce", "que", "tu", "lui", "dirais ?"], translation: "What would you say to her? (to a friend)", explanation: "\"Dire quelque chose à quelqu'un\" → \"lui dire\"; conditional \"dirais\"." },
      { type: "speak", text: "À ta place, je lui dirais la vérité.", prompt: "Tell a friend: in your shoes, I'd tell him the truth.", explanation: "\"À ta place\" + conditional." },
      { type: "translate", direction: "en-es", prompt: "Make it a real condition (si + present, then the future).", source: "Si j'étais malade, je resterais au lit.", answer: "Si je suis malade, je resterai au lit.", explanation: "A real condition: \"si\" + present \"suis\", then the future \"resterai\"." },
      { type: "dictation", audio: "Qu'est-ce que vous feriez à ma place ?", explanation: "\"À ma place\" = in my shoes; conditional \"feriez\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "What would you say if your sister asked you for money? (to a friend)", answer: "Qu'est-ce que tu dirais si ta sœur te demandait de l'argent ?", altAnswers: ["Que dirais-tu si ta sœur te demandait de l'argent ?", "Tu dirais quoi si ta sœur te demandait de l'argent ?"], explanation: "\"Si\" + imparfait \"demandait\", then the conditional \"dirais\"." },
    ],
  },
  {
    slug: "b1-word-web-nature-environment",
    level: "FR-B1",
    number: 8,
    title: "Word Web: Nature and the Environment",
    summary: "The vocabulary of environmental problems and solutions, from le réchauffement climatique to trier ses déchets, with il faudrait que and on devrait.",
    duration: "15 min",
    sections: [
      {
        heading: "The problems",
        body: [
          "Core words: \"l'environnement\" (note the double n and the e before -ment: environnement, not *environment*), \"le réchauffement climatique\" (global warming), \"le changement climatique\", \"les gaz à effet de serre\" (greenhouse gases), \"la pollution de l'air / de l'eau\", \"la sécheresse\" (drought), \"la déforestation\", \"une espèce menacée\" (an endangered species), \"disparaître\" (to disappear, die out), \"la biodiversité\".",
        ],
        examples: [
          { es: "Le réchauffement climatique menace de nombreuses espèces.", en: "Global warming threatens many species." },
          { es: "Cet été, la sécheresse a touché tout le sud de la France.", en: "This summer, the drought hit the whole of the south of France." },
          { es: "L'ours brun est une espèce menacée dans les Pyrénées.", en: "The brown bear is an endangered species in the Pyrenees." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "[Greenhouse gases] warm the planet.", sentence: "Les ___ réchauffent la planète.", answer: "gaz à effet de serre", explanation: "\"Les gaz à effet de serre\" = greenhouse gases." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Many animals are disappearing.", answer: "Beaucoup d'animaux disparaissent.", altAnswers: ["De nombreux animaux disparaissent.", "Beaucoup d'animaux sont en train de disparaître."], explanation: "\"Disparaître\" = to disappear, die out." },
        ],
      },
      {
        heading: "Collocations",
        body: [
          "Collocations matter: \"émettre du CO2\" (to emit), \"polluer\" (to pollute), \"menacer\" (to threaten), \"détruire\" (to destroy), \"les températures augmentent\", \"le niveau de la mer monte\".",
        ],
        examples: [
          { es: "Les transports émettent beaucoup de gaz à effet de serre.", en: "Transport emits a lot of greenhouse gases." },
          { es: "Chaque année, des milliers d'hectares de forêt sont détruits.", en: "Every year, thousands of hectares of forest are destroyed." },
          { es: "Le niveau de la mer monte plus vite que prévu.", en: "The sea level is rising faster than expected." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Turn it into the passive.", source: "La pollution détruit les forêts.", answer: "Les forêts sont détruites par la pollution.", explanation: "Passive: \"sont\" + participle agreeing with \"les forêts\"; the agent with \"par\"." },
          { type: "listen-choose", audio: "Les températures augmentent chaque année.", question: "What does it mean?", options: ["Temperatures rise every year.", "Temperatures fall every year.", "Temperatures were high last year.", "Temperatures stay the same every year."], correctIndex: 0, explanation: "\"Augmenter\" = to rise, increase." },
        ],
      },
      {
        heading: "Rubbish and waste",
        body: [
          "At home: \"trier ses déchets\" (to sort your rubbish), \"le tri sélectif\", \"la poubelle jaune\" (recycling bin in most French towns), \"recycler\", \"le compost\", \"le gaspillage\" (waste, wastefulness) / \"gaspiller\" (to waste: food, water, energy). Note the difference: \"les déchets\" are waste materials, \"le gaspillage\" is the act of wasting.",
        ],
        examples: [
          { es: "Chez nous, on trie tous nos déchets.", en: "At home, we sort all our rubbish." },
          { es: "Les bouteilles en plastique vont dans la poubelle jaune.", en: "Plastic bottles go in the yellow bin." },
          { es: "Je déteste le gaspillage alimentaire.", en: "I hate food waste." },
          { es: "On gaspille trop d'eau en été.", en: "We waste too much water in summer." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "We [waste] too much food.", sentence: "Nous ___ trop de nourriture.", answer: "gaspillons", explanation: "\"Gaspiller\" = to waste (food, water, energy)." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Je trie mon gaspillage.", answer: "Je trie mes déchets.", explanation: "You sort \"les déchets\" (the rubbish itself); \"le gaspillage\" is the act of wasting." },
        ],
      },
      {
        heading: "Greener habits",
        body: [
          "Other habits: \"éteindre les appareils en veille\" (switch off devices on standby), \"privilégier les transports en commun\", \"consommer local\" (buy locally produced food), \"réduire sa consommation de viande\", \"acheter d'occasion\" (to buy second-hand).",
        ],
        examples: [
          { es: "J'achète presque tous mes vêtements d'occasion.", en: "I buy almost all my clothes second-hand." },
          { es: "Ils essaient de consommer local et de saison.", en: "They try to buy local, seasonal produce." },
          { es: "J'éteins toujours la télé au lieu de la laisser en veille.", en: "I always switch the TV off instead of leaving it on standby." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I try to buy local.", answer: "J'essaie de consommer local.", altAnswers: ["J'essaie d'acheter local.", "J'essaye de consommer local.", "J'essaye d'acheter local."], explanation: "\"Consommer local\" = to buy locally produced goods." },
          { type: "multiple-choice", question: "« Acheter d'occasion » means...", options: ["to buy second-hand", "to buy on special occasions", "to buy at a discount", "to buy in bulk"], correctIndex: 0, explanation: "\"D'occasion\" = second-hand; a bargain is \"une bonne affaire\"." },
        ],
      },
      {
        heading: "Solutions: il faudrait que, on devrait",
        body: [
          "Proposals use the conditional and the subjunctive: \"On devrait taxer davantage les vols courts\", \"Il faudrait que chacun fasse un effort\", \"Il est urgent que les gouvernements agissent\", \"Si on mangeait moins de viande, on émettrait moins de CO2\".",
        ],
        examples: [
          { es: "Il faudrait que chacun fasse un effort.", en: "Everyone should make an effort." },
          { es: "On devrait interdire les sacs en plastique partout.", en: "Plastic bags should be banned everywhere." },
          { es: "Il est urgent que les gouvernements agissent.", en: "It's urgent that governments act." },
          { es: "Si on mangeait moins de viande, on émettrait moins de CO2.", en: "If we ate less meat, we'd emit less CO2." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "It's urgent that we [reduce] our consumption.", sentence: "Il est urgent qu'on ___ notre consommation.", answer: "réduise", explanation: "\"Il est urgent que\" + subjunctive: \"réduire\" → \"qu'on réduise\"." },
          { type: "translate", direction: "en-es", prompt: "Change it so that it starts with Il faudrait que.", source: "Tout le monde doit trier.", answer: "Il faudrait que tout le monde trie.", explanation: "\"Il faudrait que\" + subjunctive: \"trier\" → \"qu'il trie\"." },
        ],
      },
      {
        heading: "Verbs for solutions",
        body: [
          "Verbs for solutions: \"protéger\" (to protect), \"préserver\", \"réduire\", \"limiter\", \"interdire\" (to ban), \"encourager\", \"investir dans les énergies renouvelables\", \"sensibiliser\" (to raise awareness: \"sensibiliser les jeunes à l'écologie\").",
        ],
        examples: [
          { es: "Il faut sensibiliser les enfants dès l'école primaire.", en: "We need to raise children's awareness from primary school." },
          { es: "Il faudrait investir davantage dans les énergies renouvelables.", en: "We should invest more in renewable energy." },
          { es: "Cette loi protège les zones humides.", en: "This law protects wetlands." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "We should protect the forests.", answer: "On devrait protéger les forêts.", altAnswers: ["Il faudrait protéger les forêts.", "Nous devrions protéger les forêts.", "Il faudrait qu'on protège les forêts."], explanation: "Conditional \"devrait\" + infinitive for a proposal." },
          { type: "multiple-choice", question: "What does « sensibiliser » mean?", options: ["to raise awareness", "to make sensitive to pain", "to be sensible", "to feel emotional"], correctIndex: 0, explanation: "\"Sensibiliser quelqu'un à\" = to raise someone's awareness of." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Cars should be banned in the city centre.", answer: "On devrait interdire les voitures dans le centre-ville.", altAnswers: ["Les voitures devraient être interdites dans le centre-ville.", "Il faudrait interdire les voitures dans le centre-ville.", "On devrait interdire les voitures au centre-ville.", "Les voitures devraient être interdites au centre-ville."], explanation: "English passive should be banned → \"on devrait interdire\" or \"devraient être interdites\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "If we took the train more, we'd pollute less.", answer: "Si on prenait plus le train, on polluerait moins.", altAnswers: ["Si nous prenions plus le train, nous polluerions moins.", "Si on prenait davantage le train, on polluerait moins.", "Si on prenait le train plus souvent, on polluerait moins."], explanation: "\"Si\" + imparfait, then the conditional." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "I bought this bike [second-hand].", sentence: "J'ai acheté ce vélo ___.", answer: "d'occasion", explanation: "\"D'occasion\" = second-hand." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Food waste is a big problem.", answer: "Le gaspillage alimentaire est un gros problème.", altAnswers: ["Le gaspillage alimentaire est un grand problème.", "Le gaspillage de nourriture est un gros problème."], explanation: "\"Le gaspillage\" is the act of wasting; \"alimentaire\" = food." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Every year, many species disappear.", answer: "Chaque année, de nombreuses espèces disparaissent.", altAnswers: ["Chaque année, beaucoup d'espèces disparaissent.", "Tous les ans, de nombreuses espèces disparaissent."], explanation: "\"De nombreuses\" + plural noun; \"disparaître\"." },
      { type: "matching", instructions: "Match the French with the English.", pairs: [{ left: "la sécheresse", right: "drought" }, { left: "les déchets", right: "waste, rubbish" }, { left: "le gaspillage", right: "wastefulness" }, { left: "trier", right: "to sort" }, { left: "sensibiliser", right: "to raise awareness" }], explanation: "Key environment vocabulary; note the difference between \"les déchets\" (things) and \"le gaspillage\" (the act)." },
      { type: "multiple-choice", question: "Which word is spelled correctly?", options: ["l'environnement", "l'environment", "l'environement", "l'environnment"], correctIndex: 0, explanation: "French has \"nn\" and keeps the e: \"environnement\"." },
      { type: "word-order", prompt: "Put the words in order to say: We should invest more in public transport.", words: ["Il", "faudrait", "investir", "davantage", "dans", "les", "transports", "en", "commun."], translation: "We should invest more in public transport.", explanation: "\"Il faudrait\" + infinitive for a general recommendation." },
      { type: "dictation", audio: "La sécheresse menace les récoltes cette année.", explanation: "\"La sécheresse\" = drought; \"menacer\" = to threaten." },
      { type: "speak", text: "Il est urgent qu'on agisse.", prompt: "Say it's urgent that we act.", explanation: "\"Il est urgent que\" + subjunctive: \"agir\" → \"qu'on agisse\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The floods destroyed several villages.", answer: "Les inondations ont détruit plusieurs villages.", explanation: "\"Une inondation\" = a flood; passé composé \"ont détruit\"." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Il faudrait qu'on va moins en avion.", answer: "Il faudrait qu'on aille moins en avion.", altAnswers: ["Il faudrait qu'on prenne moins l'avion."], explanation: "\"Il faudrait que\" + subjunctive: \"aller\" → \"qu'on aille\"." },
    ],
  },
  {
    slug: "b1-fix-the-paragraph-final-essay",
    level: "FR-B1",
    number: 9,
    title: "Fix the Paragraph: The Final Essay",
    summary: "Correct a DELF B1-style opinion essay on the environment: wrong moods, missing connectors and anglicisms, rewritten with d'abord, ensuite, de plus, cependant, en conclusion.",
    duration: "15 min",
    sections: [
      {
        heading: "Kevin's draft",
        body: [
          "Kevin, a learner, wrote this DELF B1 essay on the topic \"Les petits gestes du quotidien peuvent-ils sauver la planète ?\": \"Je pense que les petits gestes soient importants. On doit recycler. On doit prendre le vélo. Mais il faut que le gouvernement fait plus. J'espère que les gens fassent des efforts. Dans mon opinion, c'est les deux.\" The French is understandable, but the examiner would mark down the wrong moods, the anglicisms and, above all, the lack of structure.",
        ],
        examples: [
          { es: "Je pense que le vélo est une bonne solution.", en: "I think cycling is a good solution. (indicative after an affirmative opinion)" },
          { es: "Selon moi, le recyclage ne suffit pas.", en: "In my view, recycling isn't enough. (not a word-for-word calque)" },
          { es: "D'abord, on peut trier ses déchets.", en: "First, we can sort our rubbish. (a connector opens the point)" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "An examiner reads: \"Dans mon opinion, on doit manger local.\" What is the problem?",
            options: ["An anglicism: the French say \"à mon avis\".", "A wrong mood after an opinion verb.", "A wrong tense: it should be in the future.", "A missing article before \"local\"."],
            correctIndex: 0,
            explanation: "\"Dans mon opinion\" copies English word for word; French says \"à mon avis\", \"selon moi\" or \"d'après moi\". There is no opinion verb with \"que\" here, so mood is not the issue.",
          },
        ],
      },
      {
        heading: "Connectors give the structure",
        body: [
          "An Intermediate essay needs connectors: to introduce (\"Aujourd'hui, ...\"), to list (\"d'abord\", \"ensuite\", \"enfin\"), to add (\"de plus\", \"en outre\", \"par ailleurs\"), to contrast (\"cependant\", \"pourtant\", \"en revanche\", \"mais\"), to give an example (\"par exemple\"), to explain (\"en effet\", \"car\"), and to conclude (\"en conclusion\", \"pour conclure\", \"finalement\").",
        ],
        examples: [
          { es: "Aujourd'hui, l'écologie est au cœur des débats.", en: "Today, ecology is at the heart of public debate." },
          { es: "D'abord, recycler permet de réduire les déchets.", en: "First, recycling helps reduce waste." },
          { es: "Ensuite, prendre le vélo est bon pour la santé et pour la planète.", en: "Next, cycling is good for your health and for the planet." },
          { es: "De plus, ces gestes ne coûtent presque rien.", en: "Moreover, these habits cost almost nothing." },
          { es: "Cependant, ils ne suffisent pas.", en: "However, they are not enough." },
          { es: "En conclusion, il faut agir à tous les niveaux.", en: "In conclusion, we must act at every level." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which connector adds a further argument?",
            options: ["De plus", "Cependant", "En conclusion", "Pourtant"],
            correctIndex: 0,
            explanation: "\"De plus\" = moreover; \"cependant\" and \"pourtant\" contrast; \"en conclusion\" ends.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[However], public transport is still too expensive.",
            sentence: "___, les transports en commun sont encore trop chers.",
            answer: "Cependant",
            altAnswers: ["Pourtant", "Toutefois", "Néanmoins"],
            explanation: "A contrast with the previous argument needs \"cependant\" (or \"pourtant\", \"toutefois\"). \"De plus\" would add a point in the same direction.",
          },
        ],
      },
      {
        heading: "Penser que: indicative or subjunctive?",
        body: [
          "Kevin's first sentence, \"Je pense que les petits gestes soient importants\", uses the subjunctive after an affirmative \"penser\". Correct: \"Je pense que les petits gestes sont importants\". But in the negative or with doubt, the subjunctive is right: \"Je ne pense pas qu'ils soient suffisants\", \"Je doute qu'ils puissent tout changer\".",
        ],
        examples: [
          { es: "Je pense que les petits gestes sont importants.", en: "I think small everyday actions are important." },
          { es: "Je ne pense pas qu'ils soient suffisants.", en: "I don't think they're enough." },
          { es: "Je doute qu'ils puissent tout changer.", en: "I doubt they can change everything." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "I don't think the bus [is] free.",
            sentence: "Je ne pense pas que le bus ___ gratuit.",
            answer: "soit",
            explanation: "A negative opinion (\"je ne pense pas que\") takes the subjunctive: \"soit\". The indicative \"est\" only follows an affirmative \"je pense que\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Je pense que cette loi soit utile.",
            answer: "Je pense que cette loi est utile.",
            explanation: "Affirmative \"penser que\" states what you believe is true, so it takes the indicative \"est\", not the subjunctive \"soit\".",
          },
        ],
      },
      {
        heading: "Il faut que, but espérer que",
        body: [
          "His later sentence \"Il faut que le gouvernement fait plus\" needs the subjunctive: \"Il faut que le gouvernement fasse plus\". And \"J'espère que les gens fassent des efforts\" should be \"J'espère que les gens feront des efforts\" (indicative after espérer).",
        ],
        examples: [
          { es: "Il faut que le gouvernement fasse plus.", en: "The government needs to do more." },
          { es: "J'espère que les gens changeront leurs habitudes.", en: "I hope people will change their habits." },
          { es: "Il est évident que chacun a un rôle à jouer.", en: "It's obvious that everyone has a part to play. (certainty: indicative)" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "How do you write: Cities need to take action.",
            options: ["Il faut que les villes prennent des mesures.", "Il faut que les villes prendront des mesures.", "Il faut que les villes prenaient des mesures.", "Il faut que les villes prendre des mesures."],
            correctIndex: 0,
            explanation: "\"Il faut que\" always takes the subjunctive: \"qu'elles prennent\". The future \"prendront\" is what \"espérer que\" would take, and after \"que\" you need a conjugated verb, not the infinitive.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "J'espère que la mairie fasse quelque chose.",
            answer: "J'espère que la mairie fera quelque chose.",
            altAnswers: ["J'espère que la mairie va faire quelque chose.", "J'espère que la mairie fait quelque chose."],
            explanation: "\"Espérer que\" takes the indicative, usually the future: \"fera\". It is not a wish verb like \"vouloir que\", so no subjunctive \"fasse\".",
          },
        ],
      },
      {
        heading: "Calques: à mon avis, se rendre compte",
        body: [
          "Kevin's \"Dans mon opinion\" is a calque: say \"À mon avis\", \"Selon moi\" or \"D'après moi\". \"C'est les deux\" should be \"Les deux sont nécessaires\". Other common anglicisms in essays: *réaliser* for to realise (use \"se rendre compte\"), *définitivement* for definitely (use \"sans aucun doute\" or \"vraiment\"; \"définitivement\" means permanently).",
        ],
        examples: [
          { es: "À mon avis, les deux sont nécessaires.", en: "In my opinion, both are necessary." },
          { es: "Beaucoup de gens ne se rendent pas compte de l'urgence.", en: "Many people don't realise how urgent it is." },
          { es: "C'est sans aucun doute le défi du siècle.", en: "It's definitely the challenge of the century." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which opening is natural French for an essay?",
            options: ["Selon moi, la voiture n'a plus sa place en ville.", "Dans mon opinion, la voiture n'a plus sa place en ville.", "En mon opinion, la voiture n'a plus sa place en ville.", "Définitivement, la voiture n'a plus sa place en ville."],
            correctIndex: 0,
            explanation: "\"Selon moi\" (or \"à mon avis\") gives an opinion. \"Dans / en mon opinion\" are calques of English, and \"définitivement\" means permanently, not definitely.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "She didn't realise the problem was serious.",
            answer: "Elle ne s'est pas rendu compte que le problème était grave.",
            altAnswers: ["Elle ne s'est pas rendu compte que le problème était sérieux.", "Elle ne s'était pas rendu compte que le problème était grave."],
            explanation: "To realise is \"se rendre compte\", not *réaliser*. In the passé composé \"rendu\" does not agree, because \"compte\" is its direct object.",
          },
        ],
      },
      {
        heading: "False friends: supporter, éventuellement",
        body: [
          "Two more traps: *supporter* for to support a cause (use \"soutenir\"; \"supporter\" means to bear, tolerate), *éventuellement* for eventually (\"éventuellement\" means possibly; eventually is \"finalement\").",
        ],
        examples: [
          { es: "Je soutiens les associations qui protègent les océans.", en: "I support the charities that protect the oceans." },
          { es: "Je ne supporte pas le gaspillage.", en: "I can't stand waste." },
          { es: "Finalement, les habitudes ont changé.", en: "Eventually, habits changed." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "\"Je ne supporte pas le bruit.\" What does it mean?",
            options: ["I can't stand noise.", "I don't support noise.", "I don't make noise.", "I'm not against noise."],
            correctIndex: 0,
            explanation: "False friend: \"supporter\" = to bear, tolerate; to support (a cause, a team) is \"soutenir\" (or \"supporter\" only for a sports team).",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Nous supportons les agriculteurs de la région.",
            answer: "Nous soutenons les agriculteurs de la région.",
            explanation: "To support people or a cause is \"soutenir\". \"Supporter\" would mean that we put up with the farmers.",
          },
        ],
      },
      {
        heading: "Vary on doit",
        body: [
          "Final tip: avoid repeating \"on doit\". Vary with \"il faut\", \"il faudrait que\", \"il est essentiel de\", \"nous devrions\".",
        ],
        examples: [
          { es: "Il faudrait que chacun réduise ses déchets.", en: "Everyone should cut down their waste." },
          { es: "Il est essentiel de protéger les forêts.", en: "It's essential to protect the forests." },
          { es: "Nous devrions manger moins de viande.", en: "We should eat less meat." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change to \"il faut que\".",
            source: "On doit isoler les vieux bâtiments.",
            answer: "Il faut qu'on isole les vieux bâtiments.",
            altAnswers: ["Il faut que l'on isole les vieux bâtiments.", "Il faut que nous isolions les vieux bâtiments."],
            explanation: "\"Il faut que\" + subjunctive replaces \"on doit\" + infinitive: \"qu'on isole\". Varying the structure is exactly what the examiner rewards.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "matching",
        instructions: "Match each connector with its job.",
        pairs: [
          { left: "d'abord", right: "first" },
          { left: "par ailleurs", right: "besides" },
          { left: "en revanche", right: "on the other hand" },
          { left: "en effet", right: "indeed" },
          { left: "pour conclure", right: "to conclude" },
        ],
        explanation: "Listing, adding, contrasting, explaining and concluding: each paragraph of the essay should open with one of these.",
      },
      {
        type: "listen-choose",
        audio: "Éventuellement, on pourrait taxer les vols courts.",
        question: "What does it mean?",
        options: ["Possibly, short flights could be taxed.", "Eventually, short flights were taxed.", "Short flights will definitely be taxed.", "Finally, short flights are banned."],
        correctIndex: 0,
        explanation: "False friend: \"éventuellement\" = possibly, if need be; eventually is \"finalement\".",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "We must act now, [because] time is running out.",
        sentence: "Il faut agir maintenant, ___ le temps presse.",
        answer: "car",
        altAnswers: ["parce que", "en effet"],
        explanation: "\"Car\" explains the reason and is the written-style choice in an essay; \"parce que\" is also correct.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: For example, you can switch off the light when you go out.",
        words: ["Par exemple,", "on peut", "éteindre", "la lumière", "en sortant."],
        translation: "For example, you can switch off the light when you go out.",
        explanation: "\"Par exemple\" introduces a concrete case; \"en sortant\" = when going out.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Make it negative.",
        source: "Je pense que le recyclage est suffisant.",
        answer: "Je ne pense pas que le recyclage soit suffisant.",
        altAnswers: ["Je ne pense pas que le recyclage suffise."],
        explanation: "Once \"penser\" is negative, the opinion becomes a doubt, so \"est\" becomes the subjunctive \"soit\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Turn it into a doubt: start with \"Je doute que\".",
        source: "Les entreprises font assez d'efforts.",
        answer: "Je doute que les entreprises fassent assez d'efforts.",
        explanation: "\"Douter que\" takes the subjunctive: \"font\" becomes \"fassent\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Je doute que les voitures électriques sont la solution.",
        answer: "Je doute que les voitures électriques soient la solution.",
        explanation: "Doubt triggers the subjunctive: \"soient\", not the indicative \"sont\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Dans mon opinion, les transports en commun devraient être gratuits.",
        answer: "À mon avis, les transports en commun devraient être gratuits.",
        altAnswers: ["Selon moi, les transports en commun devraient être gratuits.", "D'après moi, les transports en commun devraient être gratuits.", "Pour moi, les transports en commun devraient être gratuits."],
        explanation: "\"Dans mon opinion\" is an anglicism; French says \"à mon avis\", \"selon moi\" or \"d'après moi\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Moreover, public transport is cheaper than the car.",
        answer: "De plus, les transports en commun coûtent moins cher que la voiture.",
        altAnswers: ["De plus, les transports en commun sont moins chers que la voiture.", "En outre, les transports en commun coûtent moins cher que la voiture.", "Par ailleurs, les transports en commun coûtent moins cher que la voiture.", "En plus, les transports en commun coûtent moins cher que la voiture."],
        explanation: "\"De plus\" adds a second argument in the same direction; \"coûter moins cher\" keeps \"cher\" invariable.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "I hope the town will build more cycle lanes.",
        answer: "J'espère que la ville construira plus de pistes cyclables.",
        altAnswers: ["J'espère que la ville construira davantage de pistes cyclables.", "J'espère que la ville va construire plus de pistes cyclables.", "J'espère que la mairie construira plus de pistes cyclables."],
        explanation: "\"Espérer que\" + indicative future: \"construira\". Not the subjunctive, which Kevin wrongly used.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "However, I doubt that people will change quickly.",
        answer: "Cependant, je doute que les gens changent rapidement.",
        altAnswers: ["Cependant, je doute que les gens changent vite.", "Pourtant, je doute que les gens changent rapidement.", "Toutefois, je doute que les gens changent rapidement.", "Cependant, je doute que les gens changent rapidement d'habitudes."],
        explanation: "\"Cependant\" opens the counter-argument; after \"douter que\" the subjunctive \"changent\" also covers the English future.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "It's essential to use less plastic.",
        answer: "Il est essentiel d'utiliser moins de plastique.",
        altAnswers: ["C'est essentiel d'utiliser moins de plastique.", "Il est essentiel de consommer moins de plastique.", "Il est indispensable d'utiliser moins de plastique."],
        explanation: "\"Il est essentiel de\" + infinitive is a written-style alternative to \"on doit\".",
      },
      {
        type: "speak",
        text: "Cependant, je doute que ces gestes puissent tout changer.",
        prompt: "Say it in French: However, I doubt these actions can change everything.",
        explanation: "\"Cependant\" + \"douter que\" + subjunctive \"puissent\".",
      },
    ],
  },
];
