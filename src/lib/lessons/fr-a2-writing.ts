// Synced from cheneygross-afk/lengo:src/lib/lessons/fr-a2-writing.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { UnitWriting } from "./unitWriting";
import { spaced } from "./fr-units";

// Extra writing tasks for this level's units, so every unit asks the learner to
// write at least three times: keyed by the lesson each is added to (see
// unitWriting.ts). Marked by the AI writing feedback like every writing task.
export const FR_A2_WRITING: UnitWriting = spaced({
  "a2-passe-compose-avoir-2": [
    {
      "type": "write",
      "prompt": "You've just finished your exam week. Write a diary entry about today: what you finished, chose, waited for, answered or sold, with time markers to order the day.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses -ir and -re participles with avoir (\"j'ai fini\", \"j'ai choisi\", \"j'ai attendu\", \"j'ai répondu\", \"j'ai vendu\").",
        "Uses -er participles with avoir for other actions (\"j'ai mangé\", \"j'ai regardé\").",
        "Orders the day with time markers (\"ce matin\", \"à midi\", \"l'après-midi\", \"ce soir\").",
        "Ends with a short comment on the day."
      ],
      "modelAnswer": "Cher journal, quelle journée ! Ce matin, j'ai attendu le bus sous la pluie. À l'université, j'ai fini mon dernier examen à midi et j'ai répondu à toutes les questions ! L'après-midi, j'ai vendu mes vieux livres à une étudiante et j'ai choisi un nouveau sac. Ce soir, j'ai mangé une pizza et j'ai regardé un film. J'ai bien mérité ça !",
      "explanation": "-Ir verbs give -i (\"fini\", \"choisi\") and -re verbs give -u (\"attendu\", \"répondu\", \"vendu\"), always after the present of avoir. \"Répondre à\" keeps its à (\"j'ai répondu à toutes les questions\"), and the time markers put the day in order."
    }
  ],
  "a2-dialogue-weekend": [
    {
      "type": "write",
      "prompt": "It's Monday morning at the office. Write a short dialogue between two colleagues, Léa and Marc, asking each other about their weekend: what they did, one thing they didn't do, and how they react.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Asks at least two questions in the passé composé (\"Tu as passé un bon week-end ?\", \"Qu'est-ce que tu as fait ?\").",
        "Answers with avoir + participle for several actions (\"j'ai joué\", \"on a dîné\").",
        "Includes a negative around the helper (\"je n'ai pas regardé\").",
        "Reacts naturally (\"Super !\", \"Génial !\", \"Et toi ?\")."
      ],
      "modelAnswer": "Léa : Salut Marc ! Tu as passé un bon week-end ?\nMarc : Oui, super ! Samedi, j'ai joué au foot avec mon frère et le soir, on a dîné chez des amis. Et toi, qu'est-ce que tu as fait ?\nLéa : Samedi matin, j'ai travaillé. Dimanche, j'ai rangé la maison et j'ai appelé ma grand-mère.\nMarc : Tu as regardé le match hier soir ?\nLéa : Non, je n'ai pas regardé la télé. Qui a gagné ?\nMarc : Lyon ! Ils ont marqué trois buts.\nLéa : Génial !",
      "explanation": "Questions use intonation (\"Tu as passé un bon week-end ?\") or \"qu'est-ce que tu as fait ?\". Every action is avoir + a participle in -é, the negative wraps the helper only (\"je n'ai pas regardé\"), and \"on a dîné\" uses on for nous."
    }
  ],
  "a2-irregular-participles-1": [
    {
      "type": "write",
      "prompt": "Write a short post for your French class blog about a book you read and then saw as a film. Say how you got the book, what you could or couldn't understand, what happened when you saw the film, and what you thought of each.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses at least four -u participles (\"j'ai reçu\", \"j'ai lu\", \"j'ai vu\", \"j'ai pu\", \"j'ai dû\", \"j'ai voulu\").",
        "Includes a negative with an irregular participle (\"je n'ai pas pu\", \"je n'ai pas voulu\").",
        "Gives an opinion of the book and the film (\"j'ai adoré\", \"génial\", \"nul\").",
        "Uses time markers (\"le mois dernier\", \"ensuite\", \"samedi\")."
      ],
      "modelAnswer": "Le mois dernier, j'ai reçu un livre de mon amie Claire : Le Petit Prince. J'ai lu le livre en trois jours et j'ai adoré. Je n'ai pas pu tout comprendre, mais j'ai dû chercher seulement quelques mots dans le dictionnaire. Ensuite, samedi, j'ai vu le film au cinéma avec Claire. Franchement, je n'ai pas cru à l'histoire et je n'ai pas voulu rester jusqu'à la fin ! Le livre est génial, le film est nul.",
      "explanation": "These participles all end in -u: \"reçu\" (with ç), \"lu\", \"pu\", \"dû\" (with a circumflex), \"vu\", \"cru\" and \"voulu\". The negative wraps the helper only (\"je n'ai pas pu\", \"je n'ai pas voulu\"), and an infinitive follows the participle: \"j'ai dû chercher\"."
    }
  ],
  "a2-contrast-eu-ete": [
    {
      "type": "write",
      "prompt": "You missed your French class all week. Write a short email to your teacher explaining why: when you were ill and what you had, what happened that stopped you coming, and when you'll hand in your homework.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses \"j'ai été\" for a state (\"j'ai été malade\").",
        "Uses \"j'ai eu\" for what you had and \"il y a eu\" for what happened (\"j'ai eu de la fièvre\", \"il y a eu une grève\").",
        "Uses other irregular participles in the negative (\"je n'ai pas fait\", \"je n'ai pas pu\").",
        "Opens and closes the email politely (\"Bonjour Madame...\", \"Cordialement\")."
      ],
      "modelAnswer": "Bonjour Madame Lefèvre, Je suis désolé, je n'ai pas fait mes devoirs cette semaine. Lundi, j'ai été malade : j'ai eu de la fièvre et j'ai dormi toute la journée. Mardi, il y a eu une grève des bus et je n'ai pas pu venir au cours. Hier, j'ai eu un problème avec mon ordinateur. Je vais rendre mes devoirs vendredi. Cordialement, Tom",
      "explanation": "\"J'ai été\" (the past of être) describes a state: \"j'ai été malade\". \"J'ai eu\" (the past of avoir) is for what you had (\"de la fièvre\", \"un problème\"), and \"il y a eu\" says something happened: \"il y a eu une grève\". Ne...pas wraps the helper: \"je n'ai pas fait\", \"je n'ai pas pu\"."
    }
  ],
  "a2-passe-compose-etre-2": [
    {
      "type": "write",
      "prompt": "Your French class is making a family-history page. Write a short biography of a grandparent: when and where they were born, where they went and stayed, when their children were born, and a place they never went back to.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses naître and mourir with être and agreement (\"elle est née en 1938\", \"il est mort\").",
        "Uses at least three other être verbs with agreement (\"elle est partie\", \"ils sont rentrés\").",
        "Includes a negative around être (\"elle n'est jamais retournée\").",
        "Gives years and places with \"en\" and \"à\"."
      ],
      "modelAnswer": "Ma grand-mère Jeanne est née en 1938 à Marseille. À vingt ans, elle est partie à Paris et elle est devenue infirmière. En 1962, elle est allée au Canada et elle est restée six ans à Montréal. Ses deux enfants sont nés là-bas. Ils sont rentrés en France en 1968. Elle n'est jamais retournée à Montréal, mais elle parle souvent du Canada. Mon grand-père est mort en 2010.",
      "explanation": "Verbs of movement and change of state take être, and the participle agrees with the subject: \"elle est née\", \"partie\", \"devenue\", \"allée\", \"restée\"; \"ils sont nés\", \"rentrés\"; \"il est mort\". Ne...jamais wraps the helper: \"elle n'est jamais retournée\"."
    }
  ],
  "a2-contrast-sortir-monter-object": [
    {
      "type": "write",
      "prompt": "Write a short anecdote about a weekend in a hotel where the lift broke down. Use monter, descendre and sortir each twice: once with être (you went up, down, out) and once with avoir and an object (you carried the suitcases up...).",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses monter, descendre or sortir with être and agreement when there's no object (\"nous sommes montés\", \"je suis descendue\").",
        "Uses the same verbs with avoir when they have a direct object (\"il a monté les valises\", \"j'ai sorti la carte\").",
        "Uses arriver or rentrer with être.",
        "Ends with how the problem was solved."
      ],
      "modelAnswer": "Vendredi soir, nous sommes arrivés à l'hôtel à minuit, et l'ascenseur est tombé en panne ! Nous sommes montés au cinquième étage à pied et mon mari a monté les deux valises. Samedi matin, je suis descendue la première et j'ai descendu les sacs de plage. Ensuite, nous sommes sortis et j'ai sorti la carte de la ville. Le soir, nous sommes rentrés : le réceptionniste a enfin réparé l'ascenseur !",
      "explanation": "Without an object, monter, descendre and sortir take être and agree (\"nous sommes montés\", \"je suis descendue\", \"nous sommes sortis\"). With a direct object they switch to avoir and mean carry up, bring down, take out: \"il a monté les valises\", \"j'ai descendu les sacs\", \"j'ai sorti la carte\"."
    }
  ],
  "a2-imparfait-spelling-stems": [
    {
      "type": "write",
      "prompt": "Your town newsletter is collecting memories. Write a short article about what life was like in your village fifty years ago, from what older neighbours told you: the shops, school, work and free time.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses \"il y avait\" and \"il fallait\" to describe the past.",
        "Uses the imparfait of -ger and -cer verbs correctly (\"on mangeait\", \"l'école commençait\").",
        "Uses at least three other imparfait forms for habits (\"les enfants allaient\", \"on jouait\").",
        "Uses habit markers (\"toujours\", \"le samedi soir\", \"d'habitude\")."
      ],
      "modelAnswer": "Il y a cinquante ans, notre village était très différent. Il y avait une boulangerie, une épicerie et trois cafés. L'école commençait à huit heures et les enfants allaient à l'école à pied. Après la classe, il fallait aider les parents à la ferme. On mangeait toujours en famille et on ne regardait pas la télé : on jouait aux cartes. Le samedi soir, tout le monde dansait sur la place.",
      "explanation": "\"Il y avait\" and \"il fallait\" are the imparfait of il y a and il faut. Verbs in -ger and -cer keep their soft sound with e and ç before a: \"on mangeait\", \"l'école commençait\". The other verbs describe habits: \"allaient\", \"regardait\", \"jouait\", \"dansait\"."
    }
  ],
  "a2-mission-childhood-interview": [
    {
      "type": "write",
      "prompt": "For a class project, you interviewed your grandfather about his childhood. Write up the interview: four of your questions in the imparfait with tu, and his answers.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Asks at least three questions in the imparfait with tu (\"où habitais-tu ?\", \"qu'est-ce que tu faisais... ?\").",
        "Answers in the imparfait with \"j'habitais\", \"j'avais\", \"c'était\" or \"elle était\".",
        "Describes habits with markers (\"le dimanche\", \"d'habitude\").",
        "Uses at least one nous form in -ions (\"nous allions\", \"nous jouions\")."
      ],
      "modelAnswer": "— Papi, où habitais-tu quand tu étais petit ?\n— J'habitais dans une petite ferme en Normandie.\n— Comment était ton école ?\n— Elle était minuscule : nous étions douze élèves !\n— Qu'est-ce que tu faisais le dimanche ?\n— D'habitude, nous allions à la messe, puis nous jouions au foot dans les champs.\n— Et tu avais des animaux ?\n— Oui, j'avais un chien, Max. Il dormait avec moi !",
      "explanation": "The imparfait describes how things used to be: \"j'habitais\", \"elle était\", \"j'avais\". Nous forms end in -ions (\"nous allions\", \"nous jouions\", \"nous étions\"), and \"d'habitude\" and \"le dimanche\" mark repeated habits."
    }
  ],
  "a2-pc-vs-imparfait-2": [
    {
      "type": "write",
      "prompt": "Yesterday you saw a small accident between a cyclist and a car. Write a short witness statement for the police: describe the scene (time, weather, what people were doing), then say what happened and what you did.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Sets the scene in the imparfait (\"il était huit heures\", \"il pleuvait\", \"j'attendais\").",
        "Tells the events in the passé composé (\"une voiture est sortie\", \"le cycliste est tombé\").",
        "Includes an interrupted action (\"il roulait... quand une voiture est sortie\").",
        "Uses \"pendant\" for a closed period (\"pendant dix minutes\")."
      ],
      "modelAnswer": "Hier, il était environ huit heures et il pleuvait. J'attendais le bus devant la pharmacie. Un cycliste roulait vite dans la rue Victor-Hugo quand une voiture est sortie d'un parking. Le cycliste est tombé. J'ai appelé les pompiers tout de suite et je suis resté avec lui pendant dix minutes. Il avait mal au bras, mais il parlait normalement. Ensuite, les pompiers sont arrivés.",
      "explanation": "The imparfait paints the background (\"il était\", \"il pleuvait\", \"j'attendais\", \"roulait\") and the passé composé moves the story on (\"est sortie\", \"est tombé\", \"j'ai appelé\"). \"Roulait... quand une voiture est sortie\" is an action interrupted, and \"pendant dix minutes\" closes the period, so it takes the passé composé."
    }
  ],
  "a2-common-words-opinions": [
    {
      "type": "write",
      "prompt": "Last weekend you went to a concert with friends who didn't all agree about it. Write a short online review: what it was like, what happened, your opinion and how sure you are, and what a friend thought.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Gives opinions with \"à mon avis\", \"pour moi\" or \"je trouve que\".",
        "Says how sure you are (\"peut-être\", \"sans doute\", \"ça dépend\").",
        "Reports agreement or disagreement (\"il n'était pas d'accord\", \"il avait raison\").",
        "Uses the imparfait for description and the passé composé for events."
      ],
      "modelAnswer": "Samedi, je suis allée au concert de Lou Martin à Lyon avec deux amis. La salle était pleine et l'ambiance était géniale. Elle a chanté pendant deux heures et à la fin, tout le monde a dansé. À mon avis, c'était un concert magnifique. Mon ami Tom n'était pas d'accord : il trouve que le son était trop fort. Il avait peut-être raison, mais pour moi, ce n'est pas important !",
      "explanation": "Opinions use \"à mon avis\", \"pour moi\" and \"il trouve que\", and \"il avait peut-être raison\" admits doubt with avoir raison. The scene is in the imparfait (\"la salle était pleine\", \"c'était\"), the events in the passé composé (\"elle a chanté\", \"tout le monde a dansé\")."
    }
  ],
  "a2-depuis-present": [
    {
      "type": "write",
      "prompt": "A café in Nantes is looking for a waiter or waitress for the summer. Write a short cover letter: say what you do and how long you've been doing it, your experience, and when you're free.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses \"depuis\" + present for situations still going on (\"j'habite à Nantes depuis deux ans\").",
        "Uses \"ça fait... que\" + present at least once.",
        "Says when you're available (\"du... au...\").",
        "Uses a formal opening and closing (\"Madame, Monsieur\", \"Cordialement\")."
      ],
      "modelAnswer": "Madame, Monsieur, Je voudrais travailler comme serveur dans votre café cet été. J'habite à Nantes depuis deux ans et j'étudie le tourisme à l'université. Je travaille dans une boulangerie le samedi depuis six mois, donc je connais bien les clients difficiles ! Ça fait trois ans que je fais du théâtre. Je suis libre du premier juillet au trente et un août. Cordialement, Hugo Bernard",
      "explanation": "French uses the present with \"depuis\" where English says I have been doing: \"j'habite à Nantes depuis deux ans\", \"je travaille... depuis six mois\". \"Ça fait trois ans que je fais du théâtre\" means the same, and \"du premier juillet au trente et un août\" gives the dates."
    }
  ],
  "a2-mission-fait-divers": [
    {
      "type": "write",
      "prompt": "Write a short fait divers for a local news website about a dog that saved its owner. Say when and where it happened, set the scene, tell the events in order, and say how things ended.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Places the story in time with \"il y a\" + a length of time.",
        "Sets the scene in the imparfait and tells the events in the passé composé.",
        "Orders the events with connectors (\"tout à coup\", \"puis\", \"ensuite\").",
        "Uses \"pendant\" for a finished period."
      ],
      "modelAnswer": "UN CHIEN HÉROS À ANNECY\nIl y a trois jours, vers vingt heures, Mme Duval, quatre-vingts ans, marchait au bord du lac avec son chien, Max. Il faisait nuit. Tout à coup, elle a glissé et elle est tombée dans l'eau. Max a aboyé pendant dix minutes, puis un jeune homme est arrivé et il a sauvé la vieille dame. Ensuite, les pompiers ont emmené Mme Duval à l'hôpital. Elle va bien !",
      "explanation": "\"Il y a trois jours\" says when, the imparfait sets the scene (\"marchait\", \"il faisait nuit\"), and the passé composé moves the story on (\"a glissé\", \"est tombée\", \"est arrivé\"). \"Pendant dix minutes\" is a finished period, and \"tout à coup\", \"puis\" and \"ensuite\" order the events."
    }
  ],
  "a2-dop-me-te-nous-vous": [
    {
      "type": "write",
      "prompt": "You've just spent a month with a French host family, the Girards. Write them a thank-you card: thank them, say how they helped you and looked after you, and invite them to visit you, using me, te, nous and vous as object pronouns.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses vous, me or te as object pronouns before the verb (\"je vous remercie\", \"je vous invite\").",
        "Places the pronoun before the helper in the passé composé (\"vous m'avez accueilli\", \"tu m'as emmené\").",
        "Places a pronoun before an infinitive (\"je vais vous appeler\").",
        "Ends with an invitation and a warm closing (\"je vous attends\", \"je vous embrasse\")."
      ],
      "modelAnswer": "Chère famille Girard, Je vous remercie pour ce mois magnifique ! Vous m'avez accueilli comme un fils et vous m'avez beaucoup aidé avec mon français. Léo, tu m'as emmené au match de foot, et Chloé m'a attendu chaque soir à la gare. Je vais vous appeler bientôt, c'est promis. L'été prochain, je vous invite à Londres : je vous attends ! Je vous embrasse, Oliver",
      "explanation": "Object pronouns go before the verb (\"je vous remercie\", \"je vous invite\"), before the helper in the passé composé (\"vous m'avez accueilli\", \"tu m'as emmené\") and before an infinitive (\"je vais vous appeler\"). Remercier, aider, emmener and attendre all take a direct object, with no preposition."
    }
  ],
  "a2-dop-participle-agreement": [
    {
      "type": "write",
      "prompt": "This morning you had a job interview and couldn't find anything. Write a short anecdote about the chaos before you left: what you looked for, where you found each thing and what you forgot, using le, la, l' and les instead of repeating the nouns.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Replaces nouns with le, la, l' or les placed before the helper (\"je les ai cherchées\").",
        "Makes the participle agree with a feminine or plural pronoun before avoir (\"ma veste, je l'ai mise\").",
        "Includes a negative with the pronoun (\"je ne l'ai pas trouvé\").",
        "Uses the imparfait and the passé composé together to tell the story."
      ],
      "modelAnswer": "Ce matin, j'avais un entretien à neuf heures et c'était la panique ! Mes clés ? Je les ai cherchées partout et finalement, je les ai trouvées dans le frigo. Ma veste ? Je l'ai mise, puis je l'ai enlevée : elle était trop chaude. Ma lettre de motivation, je l'ai imprimée, mais je l'ai oubliée sur l'imprimante ! Et mon téléphone ? Je ne l'ai pas trouvé avant de partir.",
      "explanation": "With avoir, the participle agrees with a direct object pronoun placed before it: \"je les ai cherchées\" (les clés, feminine plural), \"je l'ai mise\", \"je l'ai imprimée\" (feminine). \"Mon téléphone\" is masculine, so \"je ne l'ai pas trouvé\" adds nothing, and ne...pas wraps the pronoun and the helper together."
    }
  ],
  "a2-contrast-aider-telephoner": [
    {
      "type": "write",
      "prompt": "You work at a hotel reception and had a difficult guest last night. Write a short email to your manager reporting what happened: what the guest needed, how you helped, who you phoned and what you advised, using le, la, lui and leur.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses le or la with aider, écouter, appeler or remercier (\"je l'ai aidée\").",
        "Uses lui or leur with téléphoner à, demander à or conseiller à (\"je leur ai demandé\", \"je lui ai conseillé\").",
        "Places the pronouns before the helper, with agreement only for a direct object.",
        "Opens and closes the email politely."
      ],
      "modelAnswer": "Bonjour Madame Roche, Hier soir, une cliente est venue à la réception : elle ne trouvait pas son passeport. Je l'ai écoutée, puis je l'ai aidée à chercher. Ensuite, j'ai téléphoné aux agents de sécurité et je leur ai demandé de vérifier les caméras. Finalement, son mari l'a appelée : le passeport était dans son sac ! Elle m'a remercié et je lui ai conseillé de le garder au coffre. Cordialement, Julien",
      "explanation": "Aider, écouter, appeler and remercier take a direct object, so \"je l'ai écoutée\", \"je l'ai aidée\" and \"son mari l'a appelée\" agree with the cliente. Téléphoner à, demander à and conseiller à take lui or leur, with no agreement: \"je leur ai demandé\", \"je lui ai conseillé\"."
    }
  ],
  "a2-plaire-manquer": [
    {
      "type": "write",
      "prompt": "You've been living in Montréal for a month. Write a postcard to your best friend back home: what you like about the city, what you don't like, and who and what you miss, using plaire à and manquer à.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses plaire à with the thing liked as subject (\"Montréal me plaît\", \"l'hiver ne me plaît pas\").",
        "Uses manquer à with the person or thing missed as subject (\"tu me manques\", \"mes parents me manquent\").",
        "Makes the verb agree with a plural subject (\"me plaisent\", \"me manquent\").",
        "Opens and closes like a postcard."
      ],
      "modelAnswer": "Salut Inès ! Montréal me plaît beaucoup : les gens sont sympas et les quartiers sont magnifiques. Par contre, l'hiver ne me plaît pas du tout : il fait moins vingt ! Mes colocataires me plaisent aussi. Mais tu me manques, et mes parents me manquent beaucoup. Le pain français me manque aussi ! Dis à Paul qu'il me manque. Je t'embrasse, Chloé",
      "explanation": "With plaire à and manquer à, the thing liked or missed is the subject and the verb agrees with it: \"Montréal me plaît\", \"mes colocataires me plaisent\", \"mes parents me manquent\". \"Tu me manques\" means I miss you: the person missed is the subject."
    }
  ],
  "a2-pronominal-verbs-1": [
    {
      "type": "write",
      "prompt": "Your local newspaper runs a series called 'Une journée avec...'. Write a short profile of a baker in your neighbourhood, describing his or her routine in the present, from getting up to going to bed.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses at least four pronominal verbs in the third person (\"il se lève\", \"il se douche\", \"il se couche\").",
        "Uses the article with a body part (\"il se lave les mains\").",
        "Uses s' before a vowel (\"il s'habille\").",
        "Gives times and orders the day (\"à trois heures\", \"l'après-midi\", \"le soir\")."
      ],
      "modelAnswer": "Karim est boulanger rue Victor-Hugo. Il se lève à trois heures du matin, quand tout le quartier dort. Il se douche, il s'habille en blanc et il part à la boulangerie. Là, il se lave les mains et il prépare le pain. À sept heures, sa femme ouvre la boutique. L'après-midi, Karim se repose. Le soir, il se couche à vingt heures. « Je ne m'ennuie jamais ! », dit-il.",
      "explanation": "Pronominal verbs keep a pronoun matching the subject: \"il se lève\", \"il se douche\", \"il se repose\", \"il se couche\", with s' before a vowel (\"il s'habille\") and \"je ne m'ennuie\" in the negative. Body parts take the article, not a possessive: \"il se lave les mains\"."
    }
  ],
  "a2-pronominal-reciprocal": [
    {
      "type": "write",
      "prompt": "Your best friends Sarah and Tom are getting married, and you're giving a short speech at the wedding. Tell the guests how they met, how they got to know each other and what they're like as a couple today, using reciprocal verbs.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses reciprocal verbs in the passé composé with être and agreement (\"ils se sont rencontrés\", \"ils se sont revus\").",
        "Includes a reciprocal verb with no agreement because it takes à (\"ils se sont parlé\", \"ils se sont écrit\").",
        "Uses reciprocal verbs in the present (\"ils s'aiment\", \"ils se comprennent\").",
        "Addresses the guests and ends with a toast (\"levons nos verres\", \"vive les mariés !\")."
      ],
      "modelAnswer": "Chers amis, Sarah et Tom se sont rencontrés il y a cinq ans, dans un train pour Bordeaux. Ils se sont parlé pendant tout le voyage. Ensuite, ils se sont écrit tous les jours et ils se sont revus un mois plus tard. Aujourd'hui, ils se comprennent sans parler, ils se disputent rarement et surtout, ils s'aiment ! Alors, levons nos verres à Sarah et Tom. Vive les mariés !",
      "explanation": "Reciprocal se means each other. \"Se rencontrer\" and \"se revoir\" have a direct object, so the participle agrees (\"se sont rencontrés\", \"se sont revus\"), but \"parler à\" and \"écrire à\" have an indirect one, so there's no agreement: \"ils se sont parlé\", \"ils se sont écrit\"."
    }
  ],
  "a2-comparisons-2": [
    {
      "type": "write",
      "prompt": "Write a short article for a student guide to your town: name the best café, the cheapest restaurant, the most beautiful park and the worst place to go on a Saturday night, and say why.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses at least two superlatives with the article repeated after the noun (\"le restaurant le moins cher\", \"le parc le plus beau\").",
        "Uses \"de\" after a superlative for 'in' (\"de la ville\").",
        "Uses \"le meilleur\" and \"le pire\" correctly.",
        "Includes at least one comparative with \"que\"."
      ],
      "modelAnswer": "Bienvenue à Rennes ! Le meilleur café de la ville, c'est Le Moka : le chocolat chaud est délicieux. Le restaurant le moins cher, c'est La Crêperie du Port, avec des galettes à six euros. Le parc le plus beau de Rennes, c'est le Thabor : il est plus grand et plus calme que les autres parcs. Et le pire endroit le samedi soir ? La rue Saint-Michel : trop de bruit, trop de monde !",
      "explanation": "The superlative repeats the article after the noun (\"le restaurant le moins cher\", \"le parc le plus beau\") and uses \"de\" for 'in' (\"de la ville\", \"de Rennes\"). Bon gives \"le meilleur\" and mauvais \"le pire\", and \"plus grand et plus calme que\" is a simple comparison."
    }
  ],
  "a2-drill-aussi-autant": [
    {
      "type": "write",
      "prompt": "Write a short description comparing yourself with a brother, sister or close friend: appearance, character, habits and hobbies. Use aussi, autant and plus or moins.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses \"aussi\" + adjective + \"que\" (\"il est aussi grand que moi\").",
        "Uses \"autant de\" + noun and verb + \"autant que\" (\"autant d'amis\", \"il joue autant que moi\").",
        "Uses \"plus de\" or \"moins de\" + noun.",
        "Uses stressed pronouns after que (\"que moi\", \"que lui\")."
      ],
      "modelAnswer": "Mon frère Théo et moi, nous sommes jumeaux, mais nous sommes très différents. Il est aussi grand que moi, mais il est beaucoup plus sportif. Il a autant d'amis que moi, mais il sort moins souvent. Moi, je lis plus de livres que lui, mais il joue autant que moi aux jeux vidéo. Il est moins bavard que moi et il est aussi plus patient. Finalement, nous nous entendons très bien !",
      "explanation": "\"Aussi\" goes with adjectives (\"aussi grand que moi\"), \"autant de\" with nouns (\"autant d'amis\") and \"autant que\" after a verb (\"il joue autant que moi\"). \"Plus de livres que lui\" compares quantities, and stressed pronouns follow que: \"que moi\", \"que lui\"."
    }
  ],
  "a2-futur-simple-2": [
    {
      "type": "write",
      "prompt": "You're standing for election as student representative at your language school. Write a short speech: introduce yourself and make at least four promises about what you will do, what there will be and what students will be able to do.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses at least four irregular future stems (\"je serai\", \"il y aura\", \"nous ferons\", \"vous pourrez\").",
        "Uses a spelling-change verb in the future (\"j'achèterai\", \"j'appellerai\").",
        "Includes \"si\" + present or \"quand\" + future.",
        "Addresses the audience with vous and ends with a call to vote."
      ],
      "modelAnswer": "Chers étudiants, je m'appelle Sofia et je veux être votre représentante. Si vous votez pour moi, je serai toujours à votre écoute. Il y aura une fête à la fin de chaque mois et nous ferons des sorties culturelles. Vous pourrez réserver les salles le soir pour étudier. J'achèterai une nouvelle machine à café pour la cafétéria ! Et quand vous aurez un problème, vous viendrez me voir. Alors, votez Sofia !",
      "explanation": "Irregular verbs put the future endings on a special stem: \"je serai\", \"il y aura\", \"nous ferons\", \"vous pourrez\", \"vous aurez\", \"vous viendrez\". \"Acheter\" takes è (\"j'achèterai\"); \"si\" is followed by the present (\"si vous votez\") but \"quand\" by the future (\"quand vous aurez\")."
    }
  ],
  "a2-mission-predictions": [
    {
      "type": "write",
      "prompt": "A friend's French magazine needs a horoscope column. Write next month's horoscope for one star sign, with predictions about love, work, money and health and at least one piece of advice.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Makes predictions in the futur simple with vous (\"vous rencontrerez\", \"vous recevrez\").",
        "Uses at least three irregular stems (\"vous verrez\", \"vous serez\", \"il faudra\", \"vous pourrez\").",
        "Includes \"si\" + present or \"quand\" + future.",
        "Covers several areas of life."
      ],
      "modelAnswer": "LION\nAmour : vous rencontrerez quelqu'un de spécial au début du mois. Quand vous le verrez, vous saurez tout de suite ! Travail : votre chef vous proposera un nouveau projet, mais il faudra travailler le week-end. Argent : vous recevrez une bonne nouvelle. Si vous faites attention, vous pourrez partir en vacances. Santé : vous serez un peu fatigué. Il faudra dormir plus !",
      "explanation": "Predictions use the futur simple, often with irregular stems: \"vous verrez\", \"vous saurez\", \"il faudra\", \"vous pourrez\", \"vous serez\". After \"quand\" French uses the future (\"quand vous le verrez\"), but after \"si\" the present (\"si vous faites attention\")."
    }
  ],
  "a2-pronoun-y-2": [
    {
      "type": "write",
      "prompt": "Write a short post for a French online forum about a hobby you're passionate about (chess, a sport, a game...). Say how you got interested in it, how often you play or think about it, and what you'll do next.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses y for à + a thing or idea (\"j'y joue\", \"j'y pense\").",
        "Places y before the helper and in a pronominal verb (\"je m'y suis intéressé\").",
        "Places y before an infinitive (\"je vais y participer\").",
        "Keeps à + stressed pronoun for a person (\"je pense à lui\")."
      ],
      "modelAnswer": "Salut tout le monde ! Ma passion, ce sont les échecs. Je m'y suis intéressé à douze ans, grâce à mon grand-père. J'y joue tous les soirs sur internet et j'y pense même au travail ! Mon grand-père est mort l'année dernière, et quand je joue, je pense souvent à lui. Le mois prochain, il y a un tournoi à Lille : je vais y participer pour la première fois. Vous y jouez aussi ?",
      "explanation": "Y replaces à + a thing: \"s'intéresser aux échecs\" → \"je m'y suis intéressé\", \"jouer aux échecs\" → \"j'y joue\", \"participer au tournoi\" → \"je vais y participer\". It goes before the helper and before an infinitive, but a person keeps à + stressed pronoun: \"je pense à lui\"."
    }
  ],
  "a2-y-set-expressions": [
    {
      "type": "write",
      "prompt": "Write a short dialogue between two friends getting ready to go to a concert: one is late, the tickets are missing, then everything is sorted. Use at least four set expressions with y.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses at least four set expressions with y (\"on y va\", \"ça y est\", \"vas-y\", \"je n'y peux rien\", \"je n'y crois pas\").",
        "Uses y for a place (\"on y va en métro ?\").",
        "Uses questions and the imperative to keep the dialogue moving.",
        "Sounds like natural spoken French, with reactions."
      ],
      "modelAnswer": "Julie : Tu es prête ? Le concert commence à vingt heures !\nEmma : Deux minutes ! Je cherche les billets...\nJulie : Quoi ? Tu ne sais pas où ils sont ? Je n'y crois pas !\nEmma : Ce n'est pas ma faute, le chat a joué avec mon sac. Je n'y peux rien !\nJulie : Vas-y, regarde dans ta veste.\nEmma : Ça y est, je les ai !\nJulie : Enfin ! Allez, on y va. On y va en métro ?\nEmma : Oui, c'est plus rapide.",
      "explanation": "\"Je n'y crois pas\" expresses disbelief, \"je n'y peux rien\" means it's not my fault, \"vas-y\" encourages and \"ça y est\" announces that something is done. \"On y va\" means let's go, and in \"on y va en métro ?\" y stands for the concert venue."
    }
  ],
  "a2-pronoun-en-2": [
    {
      "type": "write",
      "prompt": "You were at a meeting to organise your company's summer party. Write a short email to a colleague who missed it: what you discussed, who will take care of what, what you have and what you still need.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses en with verbs built with de (\"on en a discuté\", \"Marc s'en occupe\").",
        "Uses en with a number or quantity (\"on en a vingt\", \"il en faut cinquante\").",
        "Places en before the helper and before an infinitive (\"tu peux en demander\").",
        "Opens and closes the email appropriately."
      ],
      "modelAnswer": "Bonjour Nadia, Voici un résumé de la réunion d'hier. On a parlé de la date de la fête : on en a beaucoup discuté et on a choisi le 4 juillet. Pour la musique, Marc s'en occupe. On a des tables, on en a vingt, mais il manque des chaises : il en faut au moins cinquante. Tu peux en demander au service technique ? Et la décoration, tu peux t'en occuper ? Bonne journée, Alex",
      "explanation": "En replaces de + a thing: \"discuter de la date\" → \"on en a discuté\", \"s'occuper de la musique\" → \"Marc s'en occupe\". With a number, the number stays at the end (\"on en a vingt\", \"il en faut cinquante\"), and en goes before an infinitive: \"tu peux en demander\", \"tu peux t'en occuper\"."
    }
  ],
  "a2-common-words-feelings": [
    {
      "type": "write",
      "prompt": "Your company website has a 'Meet the team' page. Write a short description of a colleague you get on well with: their character, their good and bad sides, and a moment when you saw a strong feeling (fear, pride, shame).",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Describes character with at least four adjectives that agree (\"drôle\", \"gentille\", \"timide\", \"sympa\").",
        "Uses feeling expressions (\"avoir peur de\", \"avoir honte\", \"être fier de\").",
        "Uses en for de + a thing and de + stressed pronoun for a person (\"elle en est fière\", \"fiers d'elle\").",
        "Uses the passé composé and the imparfait for the moment you describe."
      ],
      "modelAnswer": "Ma collègue Inès est drôle, gentille et très sympa, mais un peu timide en réunion. Elle a peur de parler en public. Le mois dernier, elle a présenté notre projet devant toute l'entreprise. Elle était rouge et ses mains tremblaient, mais elle a réussi. Maintenant, elle en est très fière, et nous sommes fiers d'elle ! Son seul défaut ? Elle n'a jamais honte d'être en retard.",
      "explanation": "Adjectives agree with Inès (\"gentille\", \"fière\"), while \"drôle\", \"sympa\" and \"timide\" don't change. Feelings use \"avoir peur de\", \"avoir honte\" and \"être fier de\"; en replaces de + a thing (\"elle en est fière\"), but a person keeps de + stressed pronoun (\"fiers d'elle\")."
    }
  ],
  "a2-ne-que": [
    {
      "type": "write",
      "prompt": "It's the end of the month and you have almost no money left. Write a short diary entry about your day: what you only have, what you ate, and what you did to spend nothing.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses ne...que for 'only' at least twice, with que right before the word it limits (\"je n'ai que cinq euros\").",
        "Keeps the article after ne...que (\"je n'ai mangé que des pâtes\").",
        "Uses at least one other negative (\"ne...rien\", \"ne...personne\").",
        "Uses the passé composé for the day's events."
      ],
      "modelAnswer": "Cher journal, plus que trois jours avant mon salaire ! Je n'ai que cinq euros sur mon compte. Ce matin, je n'ai bu qu'un café à la maison et à midi, je n'ai mangé que des pâtes. Je n'ai rien acheté et je ne suis pas sortie. Le soir, je n'ai vu personne : je n'ai regardé qu'un vieux film à la télé. Vivement le début du mois !",
      "explanation": "Ne...que means only: ne goes before the verb or the helper and que right before the word it limits (\"je n'ai bu qu'un café\", \"je n'ai mangé que des pâtes\"). The article stays after que, unlike after pas. \"Je n'ai rien acheté\" puts rien before the participle, \"je n'ai vu personne\" puts personne after it."
    }
  ],
  "a2-quantities": [
    {
      "type": "write",
      "prompt": "Your French class is making a recipe book. Write the recipe for a simple dish you like: the ingredients with quantities, then the steps in order, with one tip about how much to use.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Lists ingredients with expressions of quantity + de and no article (\"un kilo de pommes\", \"200 grammes de farine\", \"un peu de sel\").",
        "Uses \"trop de\", \"assez de\" or \"beaucoup de\" in the steps or the tip.",
        "Uses the partitive where there is no quantity (\"du beurre\", \"de la cannelle\").",
        "Orders the steps with \"d'abord\", \"ensuite\", \"puis\" and \"enfin\"."
      ],
      "modelAnswer": "Tarte aux pommes\nPour six personnes, il faut un kilo de pommes, 200 grammes de farine, 100 grammes de beurre, trois cuillères de sucre et un peu de sel. D'abord, on fait la pâte avec la farine, le beurre et un peu d'eau. Ensuite, on coupe les pommes. Puis, on met les pommes sur la pâte avec du beurre et de la cannelle. Enfin, la tarte cuit quarante minutes. Attention : pas trop de sucre !",
      "explanation": "Expressions of quantity take de with no article: \"un kilo de pommes\", \"200 grammes de farine\", \"un peu de sel\", \"pas trop de sucre\". With no quantity, the partitive is used (\"du beurre\", \"de la cannelle\"), and \"on\" + present gives the steps in a neutral recipe style."
    }
  ],
  "a2-contrast-bon-bien": [
    {
      "type": "write",
      "prompt": "Last weekend you took a French cooking class. Write a short online review: how the chef taught, how well or badly you and the others cooked, whether the food was good, and whether you recommend it.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses bon or mauvais for nouns and bien or mal for actions (\"les plats étaient bons\", \"j'ai mal coupé\").",
        "Uses \"c'est bien\" or \"c'est bon\" correctly.",
        "Places at least two -ment adverbs after the verb (\"il explique clairement\", \"il parle lentement\").",
        "Gives a clear recommendation."
      ],
      "modelAnswer": "Super atelier ! Le chef, Paul, est très bon : il explique clairement et il parle lentement, donc on comprend tout. Moi, j'ai mal coupé les oignons et j'ai beaucoup pleuré ! Mon amie, elle, cuisine vraiment bien : sa sauce était même meilleure que la sauce du chef. À la fin, nous avons mangé ensemble. Les plats étaient très bons. C'est un peu cher, mais c'est bien pour apprendre. Je recommande !",
      "explanation": "Bon describes nouns (\"le chef est très bon\", \"les plats étaient très bons\") and bien describes actions (\"elle cuisine vraiment bien\"); mal is the adverb of mauvais (\"j'ai mal coupé\"). \"C'est bien pour apprendre\" judges the idea, and -ment adverbs follow the verb: \"il explique clairement\"."
    }
  ],
  "a2-asking-directions": [
    {
      "type": "write",
      "prompt": "You're in Bordeaux looking for the cathedral. Write a short dialogue: stop a passer-by politely, ask the way and whether it's far, check you've understood, and thank them.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Stops the stranger politely and asks the way (\"Excusez-moi\", \"pour aller à... ?\").",
        "Gives directions with vous imperatives (\"allez tout droit\", \"tournez à gauche\", \"prenez la deuxième rue\").",
        "Asks whether it's far or how long it takes, and checks understanding (\"vous avez dit à gauche ?\").",
        "Uses place words (\"jusqu'à\", \"en face de\", \"à côté de\")."
      ],
      "modelAnswer": "— Excusez-moi, madame. Pour aller à la cathédrale, s'il vous plaît ?\n— Alors, allez tout droit jusqu'à la place, puis tournez à gauche et prenez la deuxième rue à droite. La cathédrale est en face de l'hôtel de ville.\n— Vous avez dit à gauche, puis à droite ?\n— Oui, c'est ça.\n— C'est loin ? On peut y aller à pied ?\n— Oui, c'est à dix minutes à pied.\n— Merci beaucoup, bonne journée !\n— Je vous en prie.",
      "explanation": "\"Pour aller à... ?\" is the shortest polite way to ask the way. Directions use vous imperatives (\"allez\", \"tournez\", \"prenez\") with \"jusqu'à\" and \"en face de\", \"vous avez dit à gauche ?\" checks you understood, and \"on peut y aller à pied ?\" uses y for the place."
    }
  ],
  "a2-an-annee": [
    {
      "type": "write",
      "prompt": "It's 31 December. Write a short diary entry looking back on your year: the best day, how you spent your evenings and weekend mornings, and a plan for next year. Use an/année, jour/journée, soir/soirée and matin/matinée correctly.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses \"an\" with numbers and \"année\" for the period or with a determiner or adjective (\"deux ans\", \"cette année\", \"l'année prochaine\").",
        "Uses \"jour\" and \"journée\" correctly (\"le meilleur jour\", \"une journée magnifique\").",
        "Uses \"soir\"/\"soirée\" or \"matin\"/\"matinée\" correctly.",
        "Mixes the passé composé, the imparfait and the futur simple."
      ],
      "modelAnswer": "31 décembre. Quelle année ! Il y a deux ans, je ne parlais pas un mot de français, et cette année, j'ai habité six mois à Lyon. Le meilleur jour ? Le 14 juillet : une journée magnifique et une soirée inoubliable au bord du Rhône. Le soir, je sortais souvent avec mes collègues, et le dimanche, je passais la matinée au marché. L'année prochaine, je passerai le DELF B1. Bonne année à moi !",
      "explanation": "\"An\" counts (\"il y a deux ans\"), while \"année\" stresses the period or takes a determiner or adjective (\"quelle année\", \"cette année\", \"l'année prochaine\"). \"Jour\" is a date or a unit (\"le meilleur jour\"), \"journée\" the day as lived (\"une journée magnifique\"); \"soirée\" and \"matinée\" likewise mean the whole evening or morning."
    }
  ],
  "a2-apporter-amener": [
    {
      "type": "write",
      "prompt": "You're organising a surprise birthday picnic for your friend Zoé on Sunday. Write an invitation email to the group: where and when, what each person should bring, who they can bring along, and what to take home afterwards.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses \"apporter\" for things and \"amener\" for people (\"apportez des boissons\", \"amenez vos copains\").",
        "Uses \"emporter\" or \"emmener\" for taking something or someone away (\"emportez vos déchets\", \"j'emmènerai Zoé\").",
        "Uses vous imperatives, including a negative (\"n'oubliez pas\").",
        "Gives the time and place clearly."
      ],
      "modelAnswer": "Salut tout le monde ! Dimanche, on fête l'anniversaire de Zoé au parc de la Tête d'Or, à midi. C'est une surprise : j'emmènerai Zoé au parc sans rien dire ! Marc et Lina, apportez des boissons ; les autres, apportez un plat ou un dessert. Vous pouvez amener vos copains ou vos enfants. Et n'oubliez pas : à la fin, emportez vos déchets ! Bisous, Clara",
      "explanation": "Apporter and emporter are for things (\"apportez des boissons\", \"emportez vos déchets\"), amener and emmener for people (\"amener vos copains\", \"j'emmènerai Zoé\"). The a- verbs bring something to the event; the em- verbs take it away with you."
    }
  ],
  "a2-at-the-restaurant-2": [
    {
      "type": "write",
      "prompt": "Write a short dialogue in a restaurant: a customer orders a main course, says how the steak should be cooked, explains an allergy, then calls the waiter and asks for the bill.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Orders politely with \"je vais prendre\" or \"je voudrais\".",
        "Says how the meat should be cooked (\"saignant\", \"à point\", \"bien cuit\").",
        "Explains an allergy (\"je suis allergique aux noix\").",
        "Asks for the bill and how to pay (\"l'addition, s'il vous plaît\", \"par carte\")."
      ],
      "modelAnswer": "— Vous avez choisi ?\n— Oui, je vais prendre l'entrecôte avec des frites, s'il vous plaît.\n— Quelle cuisson ?\n— À point. Et attention, je suis allergique aux noix. Il y en a dans la sauce ?\n— Oui, mais je peux vous servir la viande sans sauce.\n— Parfait, merci.\n— Excusez-moi ! L'addition, s'il vous plaît.\n— Tout de suite. Vous payez comment ?\n— Par carte, c'est possible ?\n— Bien sûr.",
      "explanation": "\"Je vais prendre\" orders politely, and \"à point\" is medium (\"saignant\" rare, \"bien cuit\" well done). \"Je suis allergique aux noix\" explains the allergy, \"il y en a ?\" uses en for some nuts, and \"l'addition, s'il vous plaît\" asks for the bill."
    }
  ],
  "a2-story-cloze-worst-dinner": [
    {
      "type": "write",
      "prompt": "Write a short story about the worst restaurant dinner you've ever had: set the scene, tell what went wrong in order, and say how it ended.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Sets the scene in the imparfait (\"c'était l'anniversaire de...\", \"le restaurant était plein\").",
        "Tells the problems in the passé composé, in order (\"d'abord\", \"ensuite\", \"finalement\").",
        "Uses an object pronoun with agreement or en (\"le serveur l'a renversée\", \"il n'y en avait plus\").",
        "Ends with how the restaurant reacted or how people felt."
      ],
      "modelAnswer": "C'était l'anniversaire de ma mère et le restaurant était plein. D'abord, nous avons attendu notre table pendant quarante minutes. Ensuite, j'ai commandé le poisson du jour, mais il n'y en avait plus ! Mon père a pris une soupe : le serveur l'a renversée sur sa chemise. Finalement, le gâteau est arrivé sans bougies. Le patron s'est excusé et il nous a offert le dessert. Ma mère riait, mais nous, on ne riait pas !",
      "explanation": "The imparfait sets the scene (\"c'était\", \"était plein\", \"il n'y en avait plus\") and the passé composé tells the events (\"nous avons attendu\", \"a renversée\", \"est arrivé\"). \"L'a renversée\" agrees with \"la soupe\", placed before avoir, and en replaces \"du poisson\"."
    }
  ],
  "a2-survival-hotel": [
    {
      "type": "write",
      "prompt": "You stayed two nights at a hotel in Marseille and had several problems with your room. Write a short, polite email to the hotel: describe the problems, what happened when you contacted reception, and what you'd like now.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses a formal opening and closing (\"Madame, Monsieur\", \"Cordialement\").",
        "Describes the problems in the imparfait and the events in the passé composé (\"la climatisation ne marchait pas\", \"j'ai appelé la réception\").",
        "Uses hotel vocabulary (\"la chambre\", \"le wifi\", \"la réception\").",
        "Makes a polite request (\"je voudrais\", \"pourriez-vous...\")."
      ],
      "modelAnswer": "Madame, Monsieur, J'ai passé deux nuits dans votre hôtel, chambre 214, du 3 au 5 août. Malheureusement, la climatisation ne marchait pas et le wifi ne fonctionnait pas du tout. J'ai appelé la réception deux fois, mais personne n'est venu. Le deuxième soir, il y avait aussi beaucoup de bruit dans la rue. Je voudrais un remboursement partiel. Pourriez-vous me répondre rapidement ? Cordialement, Mark Evans",
      "explanation": "The imparfait describes ongoing problems (\"ne marchait pas\", \"ne fonctionnait pas\", \"il y avait\") and the passé composé the events (\"j'ai appelé\", \"personne n'est venu\"). \"Je voudrais\" and \"pourriez-vous\" keep the request polite, as a formal email needs."
    }
  ],
  "a2-survival-hairdresser": [
    {
      "type": "write",
      "prompt": "Write a short dialogue at the hairdresser's: a customer explains exactly what they want (the ends, the sides, the fringe), the hairdresser asks questions, and the customer reacts to the result and pays.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Explains the cut precisely (\"juste les pointes\", \"plus court sur les côtés\", \"la frange\").",
        "Uses a comparison or quantity (\"plus court\", \"un peu\", \"pas trop\").",
        "Uses polite requests (\"je voudrais\", \"vous pouvez...?\").",
        "Reacts to the result (\"c'est parfait\", \"ça me plaît\")."
      ],
      "modelAnswer": "— Bonjour, qu'est-ce que je vous fais aujourd'hui ?\n— Je voudrais juste couper les pointes, s'il vous plaît, mais plus court sur les côtés.\n— D'accord. Et la frange ?\n— Vous pouvez la raccourcir un peu ? Pas trop !\n— Je vous fais un shampooing avant ?\n— Oui, merci.\n— Voilà, regardez. Ça vous plaît ?\n— C'est parfait, ça me plaît beaucoup ! Je vous dois combien ?\n— Trente-cinq euros.",
      "explanation": "\"Couper les pointes\" is just the ends, and \"plus court sur les côtés\" compares the length. \"Je voudrais\" and \"vous pouvez...?\" keep requests polite, la replaces \"la frange\", and \"ça me plaît\" says you like the result."
    }
  ],
  "a2-word-web-work": [
    {
      "type": "write",
      "prompt": "You'd like a summer internship at a hotel in Annecy. Write a short application email: what you're studying, what jobs you've done, what you do now, and what you want to do in the future.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses job words with correct feminine forms where needed (\"serveuse\", \"vendeuse\", \"directrice\").",
        "Uses the passé composé for past experience (\"j'ai travaillé comme...\") and depuis + present for now.",
        "Describes career plans in the futur simple (\"je serai\", \"je travaillerai\").",
        "Uses a formal opening and closing."
      ],
      "modelAnswer": "Madame, Monsieur, Je suis étudiante en hôtellerie à Lausanne et je voudrais faire un stage dans votre hôtel cet été. L'année dernière, j'ai travaillé comme serveuse dans un restaurant, puis comme réceptionniste dans un camping. Depuis septembre, je suis vendeuse le samedi dans une librairie. Plus tard, je serai directrice d'hôtel et je travaillerai à l'étranger. Je suis disponible à partir du 1er juillet. Cordialement, Clara Weber",
      "explanation": "Feminine job forms: \"serveuse\", \"vendeuse\", \"directrice\", while \"réceptionniste\" doesn't change. Past experience is in the passé composé (\"j'ai travaillé comme serveuse\"), the current job uses depuis + present, and plans use the futur simple (\"je serai\", \"je travaillerai\")."
    }
  ],
  "a2-timeline-biography": [
    {
      "type": "write",
      "prompt": "Write a short biography of a famous French-speaking person (a singer, scientist, athlete...): their childhood, the key events of their life, and why they still matter today.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses the passé composé for the milestones (\"elle est née\", \"elle a écrit\", \"elle est morte\").",
        "Uses the imparfait for the background and childhood (\"sa famille était pauvre\", \"elle chantait\").",
        "Uses \"en\" + year and \"à\" + age (\"en 1935\", \"à 47 ans\").",
        "Ends in the present to say why the person still matters."
      ],
      "modelAnswer": "Édith Piaf est née en 1915 à Paris. Sa famille était très pauvre et, enfant, elle chantait dans les rues avec son père. En 1935, un patron de cabaret l'a découverte et elle est devenue célèbre. En 1945, elle a écrit les paroles de « La Vie en rose ». Ensuite, elle a chanté à New York et dans le monde entier. Elle est morte en 1963, à 47 ans. Aujourd'hui, on écoute encore ses chansons partout.",
      "explanation": "Milestones are in the passé composé (\"est née\", \"a écrit\", \"est morte\"), with être and agreement for naître, devenir and mourir, and the background is in the imparfait (\"était très pauvre\", \"chantait\"). \"L'a découverte\" agrees with Piaf, the direct object placed before avoir."
    }
  ],
  "a2-double-pronouns-le-lui": [
    {
      "type": "write",
      "prompt": "Two colleagues are organising a leaving present for their manager, Mme Garnier. Write a short dialogue in which they check who has done what (the present, the card, the invitation to the team, the flowers), using two pronouns together.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses le/la/les + lui or leur in that order (\"je le lui donnerai\", \"je la leur ai envoyée\").",
        "Uses me/te/nous/vous + le/la/les at least once (\"tu me la montres ?\").",
        "Places the pair before the helper or before an infinitive.",
        "Avoids repeating the nouns once they're known."
      ],
      "modelAnswer": "Alice : Tu as acheté le cadeau pour Mme Garnier ?\nNico : Oui, mais je ne le lui ai pas encore donné. Je vais le lui donner vendredi.\nAlice : Et la carte ? Tu me la montres ?\nNico : Tiens, la voilà. Tout le monde l'a signée.\nAlice : Super. Et l'invitation au pot de départ, tu l'as envoyée à l'équipe ?\nNico : Oui, je la leur ai envoyée hier.\nAlice : Et les fleurs ?\nNico : Le fleuriste va nous les apporter vendredi matin.",
      "explanation": "Me, te, nous and vous come before le, la, les (\"tu me la montres\", \"va nous les apporter\"), but le, la, les come before lui and leur (\"je ne le lui ai pas donné\", \"je la leur ai envoyée\"). The pair goes before the helper or the infinitive, and the participle agrees with a feminine direct object (\"signée\", \"envoyée\")."
    }
  ],
  "a2-double-pronouns-placement": [
    {
      "type": "write",
      "prompt": "Write a short anecdote about a time you lent something to a neighbour and had trouble getting it back: what you lent, what happened and how you finally got it back, using two pronouns together.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses two pronouns together in the passé composé (\"je la lui ai prêtée\", \"elle me l'a rendue\").",
        "Uses a pair in the negative (\"il ne me l'a pas rendue\").",
        "Uses a pair before an infinitive (\"je vais te la rendre\").",
        "Makes the participle agree with the direct object pronoun."
      ],
      "modelAnswer": "L'été dernier, mon voisin Hugo m'a demandé ma tente pour un festival. Je la lui ai prêtée avec plaisir. Un mois plus tard, il ne me l'a toujours pas rendue. Je la lui ai demandée trois fois et il m'a toujours répondu : « Je vais te la rendre demain ! » Finalement, je suis allé chez lui et sa femme me l'a rendue, toute sale. Maintenant, je ne lui prête plus rien !",
      "explanation": "The pair moves together: before the helper (\"je la lui ai prêtée\", \"sa femme me l'a rendue\"), inside the negative (\"il ne me l'a toujours pas rendue\") and before the infinitive (\"je vais te la rendre\"). The participles agree with \"la\" (ma tente): \"prêtée\", \"demandée\", \"rendue\"."
    }
  ],
  "a2-say-it-yourself-introduction": [
    {
      "type": "write",
      "prompt": "It's your first evening in a new French class in Bordeaux. Write the short self-introduction you'll give to the group: where you grew up and what it was like, a key move in your life, what you do now and since when, and what you will do next year.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Describes the past in the imparfait (\"quand j'étais petit, j'habitais...\").",
        "Gives a single past event in the passé composé (\"je suis parti\").",
        "Uses the present with \"depuis\" for what is still true.",
        "Says what you will do in the futur simple."
      ],
      "modelAnswer": "Bonsoir à tous ! Je m'appelle Ben et j'ai trente-deux ans. Quand j'étais petit, j'habitais à Leeds, une ville grise mais très animée. À dix-huit ans, je suis parti à Londres pour mes études. J'habite à Bordeaux depuis deux ans et je travaille dans une entreprise de vin. J'apprends le français depuis six mois. L'année prochaine, je passerai un examen et je parlerai enfin avec mes collègues sans dictionnaire !",
      "explanation": "Each tense has its job: the imparfait for how things were (\"j'habitais\", \"quand j'étais petit\"), the passé composé for a single event (\"je suis parti\"), the present with depuis for what is still true (\"j'habite à Bordeaux depuis deux ans\") and the futur simple for plans (\"je passerai\", \"je parlerai\")."
    }
  ],
  "a2-build-up-postcard": [
    {
      "type": "write",
      "prompt": "You're spending a week in Brittany. Write a postcard to a French friend: the place and the weather, what you did yesterday, a comparison with home, and a plan for the rest of the week.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Describes the place and the weather in the present.",
        "Tells what you did yesterday in the passé composé, with être or avoir as needed.",
        "Includes a comparison (\"meilleures que\", \"plus calme que\").",
        "Gives a plan in the futur simple, with y or en."
      ],
      "modelAnswer": "Chère Camille, Je t'écris de Saint-Malo ! Il fait beau, mais il y a beaucoup de vent. Hier, nous sommes allés au Mont-Saint-Michel et nous avons mangé des crêpes délicieuses. Les crêpes ici sont bien meilleures qu'à Londres ! La plage est plus belle et plus calme que chez nous. Demain, nous irons à Dinan : on y restera deux jours. Je te rapporterai du caramel au beurre salé ! Bises, Lucy",
      "explanation": "The present describes the scene (\"il fait beau\", \"il y a du vent\"), and the passé composé tells yesterday (\"nous sommes allés\" with être, \"nous avons mangé\" with avoir). \"Bien meilleures que\" and \"plus belle et plus calme que\" compare, \"nous irons\" is the future of aller, and y replaces \"à Dinan\"."
    }
  ],
  "a2-cumulative-circuit-6": [
    {
      "type": "write",
      "prompt": "You ordered a coat online and there were problems with both the delivery and the coat. Write a short, polite complaint email to the shop: what you ordered and when, what went wrong, and what you want them to do.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses the passé composé for events and the imparfait for the state of things (\"j'ai commandé\", \"le colis était abîmé\").",
        "Uses object pronouns to avoid repetition (\"je l'ai reçu\", \"je vous le renvoie\").",
        "Makes a polite request (\"pourriez-vous...\", \"je voudrais\").",
        "Uses a formal opening and closing."
      ],
      "modelAnswer": "Madame, Monsieur, Le 2 mars, j'ai commandé un manteau bleu en taille M sur votre site. Vous avez promis une livraison en trois jours, mais je l'ai reçu seulement hier, après deux semaines. Le colis était abîmé, et le manteau était noir, pas bleu ! En plus, il est trop petit. Je vous le renvoie aujourd'hui. Pourriez-vous me rembourser rapidement ? Cordialement, Sarah Collins",
      "explanation": "The passé composé gives the events (\"j'ai commandé\", \"je l'ai reçu\") and the imparfait the state of things on arrival (\"le colis était abîmé\"). \"Je vous le renvoie\" puts two pronouns in the right order, and \"pourriez-vous\" makes the request polite."
    }
  ],
  "a2-challenge-dialogue-marathon": [
    {
      "type": "write",
      "prompt": "You bump into an old school friend in a café after ten years. Write a short dialogue: you remember the past, ask each other what you've done and what you do now, and make a plan to meet again.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses the imparfait to remember the past (\"on était dans la même classe\").",
        "Asks and answers in the passé composé (\"qu'est-ce que tu as fait ?\", \"je suis parti\").",
        "Uses the present with \"depuis\" for now.",
        "Makes a plan in the futur simple or with on + present (\"on se voit samedi ?\", \"je t'appellerai\")."
      ],
      "modelAnswer": "— Julien ? C'est toi ? Ça alors !\n— Manon ! On était dans la même classe au lycée ! Qu'est-ce que tu as fait pendant dix ans ?\n— J'ai fait des études de médecine à Lille. Maintenant, je suis médecin à Nantes. Et toi ?\n— Moi, je suis parti au Canada, puis je suis rentré. J'habite ici depuis un an.\n— Génial ! On se voit samedi ? Je t'appellerai demain.\n— Avec plaisir !",
      "explanation": "The imparfait recalls a past situation (\"on était dans la même classe\"), the passé composé sums up the ten years (\"j'ai fait\", \"je suis parti\", \"je suis rentré\") and \"depuis un an\" + present describes now. \"On se voit samedi ?\" and \"je t'appellerai\" make the plan."
    }
  ]
});
