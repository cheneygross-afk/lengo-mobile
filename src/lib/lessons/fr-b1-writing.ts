// Synced from cheneygross-afk/lengo:src/lib/lessons/fr-b1-writing.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { UnitWriting } from "./unitWriting";
import { spaced } from "./fr-units";

// Extra writing tasks for this level's units, so every unit asks the learner to
// write at least three times: keyed by the lesson each is added to (see
// unitWriting.ts). Marked by the AI writing feedback like every writing task.
export const FR_B1_WRITING: UnitWriting = spaced({
  "b1-talk-about-you-tu-as-deja": [
    {
      "type": "write",
      "prompt": "A French language-exchange website has a forum thread called « Ce que j'ai déjà fait… et ce que je n'ai jamais fait ». Write your post (80-140 words): say three things you have already done, two things you have never done, one thing you haven't done yet but would like to, and ask the other members a question.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses \"déjà\" with the passé composé and places it between the auxiliary and the participle (\"j'ai déjà vu\", \"je suis déjà monté(e)\")",
        "Uses \"ne... jamais\" and \"ne... pas encore\" around the auxiliary (\"je n'ai jamais pris\", \"je ne suis pas encore allé(e)\")",
        "Chooses the right auxiliary and makes the participle agree after être",
        "Ends with a question with \"Vous avez déjà...?\" or \"Est-ce que vous avez déjà...?\""
      ],
      "modelAnswer": "Bonjour à tous ! Alors moi, j'ai déjà fait pas mal de choses un peu folles. J'ai déjà sauté en parachute, il y a trois ans, en Bretagne. Je suis déjà monté en haut de la tour Eiffel à pied, et j'ai déjà mangé des escargots, que j'ai d'ailleurs bien aimés ! Par contre, je n'ai jamais pris l'avion seul et je n'ai jamais vu la neige, parce que j'ai toujours vécu au bord de la mer. Je ne suis pas encore allé au Québec, mais j'en rêve depuis longtemps. Et vous, vous avez déjà fait quelque chose d'incroyable ? Qu'est-ce que vous n'avez jamais osé faire ?",
      "explanation": "Short adverbs go between the auxiliary and the participle (\"j'ai déjà sauté\", \"je suis déjà monté\"), and the negation surrounds the auxiliary (\"je n'ai jamais pris\", \"je ne suis pas encore allé\"). \"Monter\" and \"aller\" take être, while \"sauter\", \"manger\" and \"vivre\" take avoir."
    }
  ],
  "b1-depuis-il-y-a-pendant": [
    {
      "type": "write",
      "prompt": "Your French class magazine is publishing portraits of « une personne qui compte pour moi ». Write a short description (80-140 words) of a friend or neighbour you have known for a long time: how long you have known each other, when and how you met, how long you did something together, and what they are like now.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses \"depuis\" or \"ça fait... que\" + present for something still going on (\"je la connais depuis quinze ans\")",
        "Uses \"il y a\" + passé composé for a moment in the past (\"on s'est rencontrés il y a...\")",
        "Uses \"pendant\" + passé composé for a closed period (\"on a habité ensemble pendant deux ans\")",
        "Describes the person with the present and the past with the imparfait (\"elle était timide\", \"maintenant elle est...\")"
      ],
      "modelAnswer": "Ma voisine Odile a quatre-vingts ans et je la connais depuis quinze ans. On s'est rencontrées il y a quinze ans, le jour de mon déménagement : je portais un énorme carton et elle m'a ouvert la porte de l'immeuble. Quand j'étais étudiante, je l'aidais à faire ses courses et elle me préparait des tartes aux pommes. Pendant trois ans, nous avons pris le thé ensemble tous les dimanches. Elle est toujours très curieuse et elle adore raconter sa jeunesse. Ça fait deux ans qu'elle apprend l'anglais sur internet, et elle fait des progrès incroyables ! Depuis qu'elle a eu son petit-fils, elle sort moins, mais je passe la voir chaque semaine.",
      "explanation": "\"Depuis\" and \"ça fait... que\" go with the present for situations that are still true (\"je la connais depuis quinze ans\", \"ça fait deux ans qu'elle apprend\"). \"Il y a\" + passé composé places a moment in the past, \"pendant\" + passé composé measures a finished period, and the imparfait describes past habits (\"je l'aidais\", \"elle me préparait\")."
    }
  ],
  "b1-pattern-subjunctive-ir-re-verbs": [
    {
      "type": "write",
      "prompt": "You're the captain of an amateur five-a-side football team that is playing in a tournament on Saturday. Write an email (80-140 words) to your teammates telling them what each of them has to do before and during the day. Use \"il faut que\" with -ir and -re verbs such as finir, choisir, réfléchir, répondre, attendre, descendre and prendre.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses \"il faut que\" + subjunctive at least five times with different persons",
        "Uses at least three -ir or -re verbs in the subjunctive with the audible consonant (\"finisse\", \"choisisse\", \"réponde\", \"attende\")",
        "Uses the correct ils form (\"qu'ils répondent\", \"qu'ils choisissent\")",
        "Organises the instructions clearly with \"d'abord\", \"ensuite\", \"pendant le match\""
      ],
      "modelAnswer": "Salut l'équipe ! Samedi, c'est le grand jour, alors voici le programme. D'abord, il faut que tout le monde réponde à ce mail avant jeudi. Karim, il faut que tu choisisses les nouveaux maillots et que tu finisses la liste des joueurs. Léa et Hugo habitent près du stade, donc il faut qu'ils prennent les ballons et qu'ils nous attendent devant le gymnase à huit heures. Pendant le match, il faut que chacun réfléchisse avant de tirer ! Et il ne faut pas que les remplaçants descendent sur le terrain sans mon signal. Enfin, il faut que nous rendions les clés du vestiaire avant de partir. Allez, on va gagner ! Thomas",
      "explanation": "After \"il faut que\" the subjunctive is built on the ils stem of the present, so the final consonant you can't hear in \"il finit\" or \"il répond\" comes back: \"qu'il finisse\", \"qu'il réponde\", \"qu'il attende\", \"qu'il choisisse\". The nous and vous forms add -ions and -iez (\"que nous rendions\")."
    }
  ],
  "b1-subjunctive-forms-2": [
    {
      "type": "write",
      "prompt": "You're leading a group of French-speaking hikers on a day walk in the mountains. Write the short speech (80-140 words) you give at the start: say what the group has to do and not do, using \"il faut que nous...\" and \"il faut que vous...\", and finish with a word of encouragement.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses \"il faut que nous\" + subjunctive in -ions at least twice (\"que nous marchions\", \"que nous restions\")",
        "Uses \"il faut que vous\" + subjunctive in -iez at least twice (\"que vous portiez\", \"que vous appeliez\")",
        "Spells the double i correctly where the stem ends in i or y (\"que nous étudiions\", \"que vous envoyiez\", \"que vous oubliiez\")",
        "Uses at least one negative \"il ne faut pas que\""
      ],
      "modelAnswer": "Bonjour à tous et bienvenue ! Aujourd'hui, nous montons jusqu'au lac Blanc, à 2 300 mètres. Avant de partir, quelques règles. D'abord, il faut que nous restions ensemble : il ne faut pas que vous dépassiez le guide. Il faut que nous marchions lentement au début, parce que la montée est longue. Il faut que vous portiez de bonnes chaussures et que vous remplissiez vos gourdes à la fontaine. Si quelqu'un a un problème, il faut que vous m'appeliez tout de suite. Il ne faut pas que vous oubliiez votre crème solaire, le soleil est fort ici ! Enfin, il faut que nous rentrions avant dix-sept heures. Allez, bonne marche à tous !",
      "explanation": "The nous and vous forms of the subjunctive look like the imparfait: -ions and -iez on the nous stem (\"que nous restions\", \"que vous remplissiez\"). Verbs whose stem ends in i keep both i's (\"que vous oubliiez\"), and \"appeler\" keeps a single l in \"que vous appeliez\"."
    }
  ],
  "b1-subjunctive-irregulars-2": [
    {
      "type": "write",
      "prompt": "Saturday is a busy day for you and your flatmate: shopping, a parcel to collect, a birthday party in the evening. Write a dialogue (80-140 words) in which you organise the day together. Use \"il faut que\" with irregular subjunctives such as aille, fasse, puisse, sache, veuille, soit and ait.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses at least four different irregular subjunctives after \"il faut que\" or \"il vaut mieux que\" (\"que j'aille\", \"que tu fasses\", \"qu'on puisse\", \"que tu saches\")",
        "Uses the forms of être and avoir correctly (\"qu'on soit\", \"que tu aies\")",
        "Sets out the dialogue with alternating speakers and natural reactions (\"D'accord\", \"Pas de problème\")"
      ],
      "modelAnswer": "— Bon, samedi, on a beaucoup de choses à faire. Il faut que j'aille à la poste avant midi pour récupérer le colis.\n— D'accord. Et moi, il faut que je fasse les courses pour le gâteau d'anniversaire.\n— Tu sais qu'il faut que tu aies ta carte de fidélité, sinon tu paies plus cher ?\n— Oui, oui. Mais il faut que tu saches une chose : le supermarché ferme à dix-neuf heures.\n— Pas de problème. Il vaut mieux qu'on soit prêts à vingt heures pour la fête.\n— Et il faut qu'on puisse y aller en voiture : il faut que Paul veuille bien nous la prêter !\n— Je l'appelle tout de suite.",
      "explanation": "Aller, faire, pouvoir, savoir and vouloir have irregular subjunctive stems: \"que j'aille\", \"que tu fasses\", \"qu'on puisse\", \"que tu saches\", \"qu'il veuille\". Être and avoir are irregular too, with \"qu'on soit\" and \"que tu aies\" (no final s pronounced, spelled -ies after tu)."
    }
  ],
  "b1-frequent-words-crime-danger": [
    {
      "type": "write",
      "prompt": "There has been a burglary in your building. Write a notice (80-140 words) for the residents' noticeboard: explain what happened, then say what everyone must do from now on to stay safe. Use crime vocabulary (un cambriolage, un voleur, porter plainte, la police) and \"il faut que\" + irregular subjunctives.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Explains what happened with crime vocabulary and the passé composé (\"un cambriolage a eu lieu\", \"les voleurs sont entrés\", \"j'ai porté plainte\")",
        "Uses at least three irregular subjunctives after \"il faut que\" or \"il est important que\" (\"que nous soyons\", \"que chacun ait\", \"que vous fassiez\")",
        "Uses a formal register with vous and a polite closing"
      ],
      "modelAnswer": "Chers voisins,\nDans la nuit de mardi à mercredi, un cambriolage a eu lieu au troisième étage. Les voleurs sont entrés par la porte du parking, qui ne fermait pas bien, et ils ont pris un ordinateur et des bijoux. La police est venue et les propriétaires ont porté plainte. Pour notre sécurité, il faut que nous soyons tous plus vigilants. Il faut que chacun ait sa propre clé du parking et que personne ne la prête. Il est important que vous fassiez attention aux inconnus dans l'escalier et que vous alliez voir le gardien si quelque chose vous paraît bizarre. Merci de votre aide.\nLe conseil syndical",
      "explanation": "The facts are told in the passé composé with the imparfait for the background (\"qui ne fermait pas bien\"). The rules use irregular subjunctives after \"il faut que\" and \"il est important que\": \"que nous soyons\", \"que chacun ait\", \"que vous fassiez\", \"que vous alliez\"."
    }
  ],
  "b1-circuit-emotion-triggers": [
    {
      "type": "write",
      "prompt": "It's Sunday evening. Write a diary entry (80-140 words) about the past week: react to three or four things that other people did or that are happening around you, good and bad. Use emotion triggers with \"que\" + subjunctive.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses at least four emotion triggers + que + subjunctive (\"je suis content(e) que\", \"je suis déçu(e) que\", \"ça m'énerve que\", \"j'ai peur que\")",
        "Uses a variety of subjunctive forms, including at least one irregular (\"qu'elle soit\", \"qu'il fasse\", \"qu'ils puissent\")",
        "Uses the diary conventions: date, first person, informal tone"
      ],
      "modelAnswer": "Dimanche 14 mars\nQuelle semaine ! D'abord, je suis ravie que ma sœur vienne vivre à Lyon le mois prochain : on va enfin pouvoir se voir tous les week-ends. Au travail, en revanche, je suis déçue que mon chef ne fasse jamais attention à mes idées. Ça m'énerve aussi que les collègues partent à dix-sept heures et que je finisse toujours seule le soir. Mon voisin m'a dit qu'il déménageait : je suis triste qu'il s'en aille, il était vraiment sympa. Et maman a encore mal au dos. J'ai peur qu'elle soit malade, mais je suis contente qu'elle prenne enfin rendez-vous chez le médecin. Demain, une nouvelle semaine commence !",
      "explanation": "Emotion triggers with a different subject take the subjunctive: \"ravie que ma sœur vienne\", \"déçue que mon chef ne fasse\", \"ça m'énerve que les collègues partent\", \"j'ai peur qu'elle soit\". The adjective agrees with the writer (\"ravie\", \"déçue\", \"contente\")."
    }
  ],
  "b1-subjunctive-wishes-emotion-2": [
    {
      "type": "write",
      "prompt": "Last summer you took a two-week French course at a language school in Montpellier. Write a formal email (80-140 words) to the school's director: say how you feel about the course, what you regret, and what you would like the school to change for future students.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses de + infinitive when the subject doesn't change (\"je suis heureux d'avoir suivi\", \"je regrette de ne pas être resté\")",
        "Uses que + subjunctive when the subject changes (\"je regrette que les cours soient\", \"je souhaite que l'école propose\")",
        "Uses at least one wish verb (\"souhaiter\", \"aimer\", \"préférer\") + que",
        "Uses formal openings and closings (\"Madame la Directrice\", \"Je vous prie d'agréer...\")"
      ],
      "modelAnswer": "Madame la Directrice,\nJe suis heureux d'avoir suivi le cours intensif de juillet dans votre école. Je suis ravi que les professeurs aient été si patients, et je suis content d'avoir fait de vrais progrès à l'oral. Je regrette seulement de ne pas être resté plus longtemps. Je regrette aussi que les cours de l'après-midi soient un peu trop longs pour des débutants. Pour les futurs étudiants, je souhaiterais que l'école propose plus de sorties culturelles et que les familles d'accueil soient plus proches du centre. Je serais très content de revenir l'année prochaine.\nJe vous prie d'agréer, Madame la Directrice, mes salutations distinguées.\nDaniel Moore",
      "explanation": "When the person feeling and the person acting are the same, French uses de + infinitive (\"heureux d'avoir suivi\", \"je regrette de ne pas être resté\"); when they differ, que + subjunctive (\"ravi que les professeurs aient été\", \"je regrette que les cours soient\", \"je souhaiterais que l'école propose\")."
    }
  ],
  "b1-real-world-mission-reacting-to-news": [
    {
      "type": "write",
      "prompt": "Three French friends have sent you news today: Léo got the job he wanted, Inès and her boyfriend have broken up, and Sami failed his driving test. Write three short text messages (80-140 words in total), one to each friend, reacting to their news.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Reacts with emotion triggers + subjunctive (\"je suis trop content que tu aies...\", \"je suis désolé(e) que...\", \"c'est dommage que...\")",
        "Uses a wish with que + subjunctive or \"j'espère que\" + indicative (\"j'espère que tu vas mieux\")",
        "Uses de + infinitive when the subject is the same (\"je suis fier de toi\", \"j'ai hâte de fêter ça\")",
        "Adapts the tone to each piece of news (congratulations, comfort, encouragement)"
      ],
      "modelAnswer": "Léo : Bravo !!! Je suis trop contente que tu aies enfin le poste que tu voulais, tu le mérites vraiment. J'ai hâte de fêter ça avec toi samedi !\n\nInès : Oh non, je suis vraiment désolée que vous vous soyez séparés. C'est normal que tu sois triste. Si tu veux parler, je suis là. J'espère que tu vas un peu mieux ce soir. Je t'embrasse fort.\n\nSami : Ah, c'est dommage que tu n'aies pas réussi, surtout après tous ces efforts ! Mais ne t'inquiète pas, beaucoup de gens le ratent la première fois. Je souhaite que tu le repasses vite et que tu l'aies cette fois !",
      "explanation": "Each reaction uses an emotion trigger + subjunctive (\"contente que tu aies\", \"désolée que vous vous soyez séparés\", \"dommage que tu n'aies pas réussi\"), while \"j'espère que\" keeps the indicative (\"tu vas mieux\") and the same subject takes de + infinitive (\"j'ai hâte de fêter ça\")."
    }
  ],
  "b1-vocabulary-practice-2": [
    {
      "type": "write",
      "prompt": "Write a short story (80-140 words) about two friends who fell out and then made up. Say what happened, how each of them felt, and how they got back together. Use feelings and relationship vocabulary such as déçu, vexé, gêné, fier, se disputer and se réconcilier.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses at least four words from the unit's feelings and relationships vocabulary (\"se disputer\", \"vexé(e)\", \"déçu(e)\", \"se réconcilier\")",
        "Tells the events in the passé composé and describes feelings in the imparfait",
        "Uses at least one emotion or fear trigger + subjunctive (\"elle avait peur que Julie ne veuille plus...\")",
        "Ends the story with the reconciliation"
      ],
      "modelAnswer": "Julie et Margot étaient amies depuis le lycée. Un soir, Margot a oublié l'anniversaire de Julie, et le lendemain, elles se sont disputées au téléphone. Julie était vexée et très déçue : elle ne comprenait pas que sa meilleure amie oublie une date si importante. Margot, elle, était gênée, mais elle était aussi trop fière pour s'excuser. Pendant deux semaines, elles ne se sont pas parlé. Puis Margot a eu peur que Julie ne veuille plus jamais la voir. Elle lui a écrit une longue lettre et elle a préparé un gâteau. Quand Julie a ouvert la porte, elle a souri. Ce soir-là, elles se sont réconciliées autour du gâteau.",
      "explanation": "The events are in the passé composé (\"se sont disputées\", \"a écrit\") and the feelings in the imparfait (\"était vexée\", \"était gênée\"). \"Avoir peur que\" takes the subjunctive (\"ne veuille plus\"), and \"ne pas comprendre que\" can too (\"qu'elle oublie\"); with \"se parler\" the participle doesn't agree because se is an indirect object."
    }
  ],
  "b1-pattern-il-est-important-que": [
    {
      "type": "write",
      "prompt": "Your language school is welcoming new international students next week. Write a short guide (80-140 words) for its website with tips for their first days: what is essential, important, useful or better to do. Use \"il est + adjective\" with que + subjunctive and with de + infinitive.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses \"il est + adjective + que\" + subjunctive for specific people (\"il est important que vous ayez...\")",
        "Uses \"il est + adjective + de\" + infinitive for general advice (\"il est utile d'acheter...\")",
        "Uses at least four different adjectives (\"essentiel\", \"important\", \"utile\", \"préférable\", \"indispensable\")",
        "Addresses the readers with vous throughout"
      ],
      "modelAnswer": "Bienvenue à l'école ! Voici quelques conseils pour bien commencer. Il est essentiel que vous arriviez lundi à neuf heures pour le test de niveau. Il est important que vous ayez votre passeport et une photo d'identité pour la carte d'étudiant. Pour vous déplacer, il est utile d'acheter un abonnement de bus au mois : c'est beaucoup moins cher. Il est préférable que vous ouvriez un compte en banque dès la première semaine. Le soir, il est agréable de se promener sur les quais, mais il est indispensable que vous fassiez attention à vos affaires. Enfin, il est normal de se sentir un peu perdu au début : n'hésitez pas à nous poser vos questions !",
      "explanation": "\"Il est + adjective\" takes que + subjunctive when the advice is for a specific person (\"il est essentiel que vous arriviez\", \"il est indispensable que vous fassiez\") and de + infinitive when it is general (\"il est utile d'acheter\", \"il est normal de se sentir\")."
    }
  ],
  "b1-real-world-mission-wishes-for-everyone": [
    {
      "type": "write",
      "prompt": "Your colleague Nadia is leaving the company to open her own bakery. Write a message (80-140 words) for her leaving card: thank her, recall something she did for the team, and give her your wishes for the future with que + subjunctive and pourvu que.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses at least two wishes with que + subjunctive (\"que ta boulangerie soit...\", \"que tes clients viennent...\")",
        "Uses \"pourvu que\" + subjunctive (\"pourvu que tu gardes...\")",
        "Uses \"j'espère que\" + indicative at least once",
        "Includes a thank-you and a shared memory in the past"
      ],
      "modelAnswer": "Chère Nadia,\nMerci pour ces six années passées ensemble ! Je n'oublierai jamais le jour où tu as apporté tes premiers croissants au bureau : toute l'équipe en parle encore. Tu nous as appris qu'on peut travailler dur et rire en même temps. Maintenant, c'est ton tour de réaliser ton rêve. Que ta boulangerie soit la plus belle du quartier, que tes clients viennent de toute la ville et que tes journées ne soient pas trop longues ! Pourvu que tu gardes un peu de temps pour nous. J'espère que tu nous inviteras à l'inauguration et que tu nous feras goûter tes pains au chocolat. Bonne chance et à très bientôt !\nCamille",
      "explanation": "Wishes on their own use que + subjunctive (\"que ta boulangerie soit\", \"que tes clients viennent\"), and \"pourvu que\" adds a note of hope and worry (\"pourvu que tu gardes\"). \"J'espère que\" takes the indicative, here the future (\"tu nous inviteras\")."
    }
  ],
  "b1-talk-about-you-hopes-and-doubts": [
    {
      "type": "write",
      "prompt": "It's the first of January. Write a letter to yourself (80-140 words) that you will open in a year: say what you hope will happen this year, what you doubt will happen, and what you don't think will change.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses \"j'espère que\" + indicative, often the future (\"j'espère que je trouverai...\")",
        "Uses \"je doute que\" and \"je ne pense pas que\" / \"je ne crois pas que\" + subjunctive",
        "Uses \"je pense que\" or \"je crois que\" + indicative to contrast with the negative",
        "Speaks to yourself with tu and dates the letter"
      ],
      "modelAnswer": "Le 1er janvier\nCher moi du futur,\nJ'espère que tu vas bien et que cette année a été bonne. J'espère surtout que tu as trouvé un appartement plus grand et que tu parles enfin bien français ! Je pense que tu as fait des progrès, parce que tu travailles tous les jours. Par contre, je doute que tu sois devenu champion de tennis, et je ne crois pas que tu te lèves plus tôt le matin. Je ne pense pas non plus que ton chef soit plus sympa. Mais je crois que tu es plus patient qu'avant. Et si tu n'as pas réalisé tous ces projets, ce n'est pas grave : il reste encore beaucoup d'années !\nÀ dans un an,\nMoi",
      "explanation": "\"J'espère que\" and \"je pense / crois que\" express what you consider likely or real, so they take the indicative (\"tu as trouvé\", \"tu as fait\", \"tu es\"). Doubt and negative opinion take the subjunctive: \"je doute que tu sois devenu\", \"je ne crois pas que tu te lèves\", \"je ne pense pas que ton chef soit\"."
    }
  ],
  "b1-frequent-words-beliefs-legends": [
    {
      "type": "write",
      "prompt": "A French blog about traditions around the world is collecting short articles on local legends and superstitions. Write your article (80-140 words) about a legend or superstition from your country or region: tell what people believe and say what you yourself believe or doubt.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses \"croire à\", \"croire en\" or \"croire que\" correctly",
        "Uses legend and belief vocabulary (\"une légende\", \"un fantôme\", \"une superstition\", \"porter malheur\")",
        "Gives your own view with \"je ne pense pas que\" / \"il est possible que\" + subjunctive and \"je suis sûr(e) que\" + indicative"
      ],
      "modelAnswer": "Dans mon village, en Écosse, il y a une vieille légende. On raconte qu'un fantôme vit dans le château au bord du lac. Selon les habitants, c'est une jeune femme qui attend toujours son mari, parti à la guerre il y a trois siècles. Les nuits de brouillard, certains disent qu'ils l'entendent chanter. Ma grand-mère y croit complètement, et elle n'aime pas passer devant le château le soir. Moi, je ne crois pas aux fantômes et je ne pense pas que cette histoire soit vraie. Mais il est possible que le vent fasse des bruits bizarres dans les vieilles pierres. En tout cas, je suis sûr que la légende attire beaucoup de touristes !",
      "explanation": "\"Croire à\" is used for things you believe exist (\"croire aux fantômes\", \"y croire\"), while \"croire en\" is for people or God. \"Je ne pense pas que\" and \"il est possible que\" take the subjunctive (\"soit\", \"fasse\"); \"je suis sûr que\" keeps the indicative (\"attire\")."
    }
  ],
  "b1-circuit-formal-instructions": [
    {
      "type": "write",
      "prompt": "You rent out a gîte (a holiday cottage) in the countryside. Write the instructions sheet (80-140 words) that guests find on the kitchen table when they arrive: how to use the house, what is not allowed, and what to do before leaving. Use formal instructions.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses vous imperatives, affirmative and negative (\"fermez\", \"ne laissez pas\")",
        "Uses \"veuillez\" + infinitive at least twice",
        "Uses at least one irregular imperative (\"ayez\", \"soyez\", \"sachez\")",
        "Organises the sheet clearly (arrival, during the stay, departure)"
      ],
      "modelAnswer": "Bienvenue au gîte des Tilleuls !\nÀ votre arrivée, veuillez lire ces quelques consignes. Le chauffage s'allume avec le bouton gris dans l'entrée : ne le mettez pas au-dessus de 20 degrés. Fermez bien le portail derrière vous, car les chevaux du voisin aiment se promener. Il est interdit de fumer dans la maison ; ne jetez pas vos mégots dans le jardin non plus. Soyez prudents avec le barbecue et ayez toujours un seau d'eau à côté. Sachez que le marché a lieu le jeudi matin sur la place de l'église.\nAvant votre départ, veuillez sortir les poubelles, laisser les clés dans la boîte aux lettres et vérifier que toutes les fenêtres sont fermées. Bon séjour !",
      "explanation": "Formal instructions use the vous imperative (\"fermez\", \"ne jetez pas\") and \"veuillez\" + infinitive for polite orders (\"veuillez lire\", \"veuillez sortir\"). Être, avoir and savoir have irregular imperatives that come from the subjunctive: \"soyez\", \"ayez\", \"sachez\"."
    }
  ],
  "b1-imperative-in-full-2": [
    {
      "type": "write",
      "prompt": "Your French friend Lucas has a big job interview tomorrow morning and he is very nervous. Write him a text message (80-140 words) to encourage him: tell him what to do tonight and tomorrow morning, what not to do, and suggest something you can do together afterwards.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses at least three affirmative pronominal imperatives with tu (\"couche-toi\", \"détends-toi\", \"lève-toi\")",
        "Uses at least two negative pronominal imperatives with te before the verb (\"ne t'inquiète pas\", \"ne te couche pas tard\")",
        "Uses \"sois\" or \"aie\" and a nous imperative for a suggestion (\"allons boire un verre\")"
      ],
      "modelAnswer": "Salut Lucas ! Je pense à toi pour demain. Ce soir, détends-toi : regarde un bon film et ne te couche pas trop tard. Demain matin, lève-toi tôt, prépare-toi tranquillement et prends un vrai petit-déjeuner. Habille-toi simplement, ta chemise bleue est parfaite. Ne t'inquiète pas si tu as un peu le trac, c'est normal. Pendant l'entretien, assieds-toi bien droit, sois toi-même et aie confiance en toi : tu connais ton métier mieux que personne ! Et ne te dépêche pas pour répondre aux questions. Après, appelle-moi tout de suite et allons boire un verre pour fêter ça. Je suis sûr que ça va bien se passer !",
      "explanation": "In affirmative commands, the pronoun of a pronominal verb goes after the verb with a hyphen and te becomes toi (\"détends-toi\", \"lève-toi\", \"assieds-toi\"); in the negative it goes back before the verb (\"ne te couche pas\", \"ne t'inquiète pas\"). \"Sois\" and \"aie\" are the irregular tu imperatives of être and avoir, and \"allons\" makes a suggestion."
    }
  ],
  "b1-vas-y-manges-en": [
    {
      "type": "write",
      "prompt": "You and a French friend are at a market in Provence. Your friend can't decide what to taste and buy. Write a dialogue (80-140 words) between you: encourage them to try things and to go to different stalls, using imperatives with y and en.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses imperatives with en, with the -s brought back where needed (\"goûtes-en\", \"prends-en\", \"achètes-en\")",
        "Uses imperatives with y (\"vas-y\", \"restons-y\", \"allons-y\")",
        "Uses at least one negative command with y or en (\"n'en prends pas trop\", \"n'y va pas\")",
        "Alternates two speakers naturally"
      ],
      "modelAnswer": "— Regarde ces fraises, elles ont l'air délicieuses !\n— Goûtes-en une, le vendeur en offre.\n— Mmm, elles sont parfaites. J'en achète combien ?\n— Achètes-en deux barquettes, on les mangera ce soir.\n— Et ce fromage de chèvre ? Je n'ose pas en demander.\n— Mais si, vas-y ! Demande-lui un petit morceau.\n— D'accord. Et les olives, j'en prends aussi ?\n— Oui, prends-en un peu, mais n'en prends pas trop, elles sont chères ici.\n— Et le stand de savons, là-bas ?\n— N'y va pas maintenant, il y a trop de monde. Allons d'abord au café, et retournons-y après !",
      "explanation": "With y and en, the tu imperative of -er verbs and aller gets its -s back for the liaison: \"goûtes-en\", \"achètes-en\", \"vas-y\". The pronoun follows the verb in the affirmative (\"prends-en\", \"retournons-y\") and goes before it in the negative (\"n'en prends pas\", \"n'y va pas\")."
    }
  ],
  "b1-talk-about-you-advice-for-a-newcomer": [
    {
      "type": "write",
      "prompt": "Your French friend Élise is moving to your city next month and has asked for practical tips. Write her an informal email (80-140 words) about the places, services and things she will need: where to shop, how to get around, which places to visit or avoid. Use commands with pronouns instead of repeating nouns.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses at least four affirmative imperatives with an object pronoun (\"achète-la\", \"essaie-le\", \"vas-y\", \"demande-leur\")",
        "Uses at least one negative imperative with a pronoun before the verb (\"ne la prends pas\", \"n'y va pas\")",
        "Uses at least one double pronoun or moi/m' after a command (\"envoie-le-moi\", \"donne-m'en des nouvelles\")",
        "Has the shape of an informal email with greeting and sign-off"
      ],
      "modelAnswer": "Salut Élise !\nTrop contente que tu viennes vivre ici ! Voici mes conseils. Pour les transports, prends la carte mensuelle : achète-la au guichet de la gare, c'est moins cher qu'en ligne. Le vélo, c'est pratique aussi, mais ne le laisse jamais dehors la nuit. Pour les courses, il y a un marché super le dimanche matin : vas-y tôt, avant la foule. La boulangerie Martin fait le meilleur pain du quartier, essaie-le ! Le grand centre commercial, en revanche, n'y va pas le samedi. Et pour trouver un médecin, va voir mes voisins, les Dupont : demande-leur conseil de ma part. Si tu as ta nouvelle adresse, envoie-la-moi !\nBises, Hannah",
      "explanation": "In affirmative commands the object pronoun follows the verb with a hyphen (\"achète-la\", \"essaie-le\", \"demande-leur\"), and with two pronouns the direct one comes first (\"envoie-la-moi\"). In the negative the pronoun goes back before the verb (\"ne le laisse jamais\", \"n'y va pas\"), and \"vas-y\" gets its -s back before y."
    }
  ],
  "b1-dictation-dreams-and-wishes": [
    {
      "type": "write",
      "prompt": "A French home magazine is running a competition called « La maison de mes rêves ». Write your entry (80-140 words): describe the house you would love to live in, where it would be, what there would be inside and outside, and what you and your family would do there.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses the conditional to describe an imagined place (\"elle serait\", \"il y aurait\", \"on pourrait\")",
        "Uses \"j'aimerais\" or \"je voudrais\" + infinitive",
        "Uses at least two irregular conditional stems (\"serait\", \"aurait\", \"pourrait\", \"ferait\", \"viendrait\")",
        "Uses descriptive vocabulary for rooms and surroundings"
      ],
      "modelAnswer": "La maison de mes rêves serait au bord de la mer, en Bretagne, tout près d'une petite plage. Ce serait une vieille maison en pierre avec des volets bleus. Il y aurait une grande cuisine où on pourrait manger tous ensemble, et une bibliothèque avec une cheminée. J'aimerais avoir une chambre sous le toit, avec une fenêtre sur l'océan. Dehors, il y aurait un jardin plein de fleurs et un potager. Le matin, je ferais du yoga sur la terrasse, et l'après-midi, mes enfants iraient se baigner. Nos amis viendraient souvent le week-end et on ferait de longs dîners dehors. Je voudrais y vivre toute l'année !",
      "explanation": "The conditional (future stem + imparfait endings) describes an imagined situation: \"serait\", \"il y aurait\", \"on pourrait\", \"je ferais\", \"iraient\", \"viendraient\". \"J'aimerais\" and \"je voudrais\" + infinitive express wishes politely."
    }
  ],
  "b1-themed-review-life-without-tech": [
    {
      "type": "write",
      "prompt": "A French blog asks its readers: « Et si on vivait une semaine sans téléphone ni internet ? » Write a blog post (80-140 words) imagining that week: what would change, what would be better, what would be difficult, and whether you would like to try it.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses the conditional to imagine consequences (\"on lirait plus\", \"je m'ennuierais\")",
        "Uses at least three different persons in the conditional (je, on / nous, les gens)",
        "Gives both advantages and difficulties (\"ce serait plus calme, mais ce serait difficile de...\")",
        "Ends with a personal wish with \"j'aimerais\" or \"je voudrais\""
      ],
      "modelAnswer": "Une semaine sans téléphone ni internet ? Au début, ce serait très difficile pour moi ! Je ne saurais pas l'heure du bus, je devrais demander mon chemin et je ne pourrais pas envoyer de messages à mes amis. Mais je crois que la vie serait plus calme. On lirait plus de livres, on se parlerait davantage pendant les repas et on dormirait mieux. Les gens se regarderaient dans les yeux au lieu de regarder leur écran. Le soir, nous jouerions aux cartes en famille. Par contre, au travail, ce serait une catastrophe ! Mais pour les vacances, j'aimerais vraiment essayer. Et vous, vous tiendriez combien de jours ?",
      "explanation": "The conditional imagines a hypothetical week: irregular stems such as \"serait\", \"saurais\", \"devrais\", \"pourrais\" and \"tiendriez\", and regular ones such as \"lirait\", \"dormirait\" and \"jouerions\". \"J'aimerais\" softens the final wish."
    }
  ],
  "b1-conditional-of-hearsay": [
    {
      "type": "write",
      "prompt": "Write a short news brief (80-140 words) for a French local news website about an unusual event that has not been confirmed yet: for example, a famous actor seen in your town, or a rare animal spotted in a park. Report the information with the conditional of hearsay and name your sources.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses the conditional for unconfirmed information (\"l'acteur serait\", \"il aurait été vu\")",
        "Names sources with \"selon\" or \"d'après\" (\"selon des témoins\", \"d'après la mairie\")",
        "Uses the indicative for confirmed facts, to contrast with the conditional",
        "Uses a neutral journalistic tone with a short headline"
      ],
      "modelAnswer": "Un loup dans la forêt de Fontainebleau ?\nUn loup se promènerait dans la forêt de Fontainebleau depuis plusieurs jours. Selon deux randonneurs, l'animal aurait traversé un chemin dimanche matin, près des rochers. D'après un photographe amateur, il serait jeune et en bonne santé, et il viendrait probablement de l'est de la France. L'Office national des forêts a confirmé avoir reçu plusieurs appels, mais aucune photo n'a encore été vérifiée. Pour l'instant, les experts ne pensent pas qu'il y ait de danger pour les promeneurs. Selon la mairie, une enquête serait en cours. Les habitants sont invités à signaler toute observation.",
      "explanation": "The conditional presents information as reported but not confirmed: \"un loup se promènerait\", \"il serait jeune\", \"il viendrait\", and the past conditional \"l'animal aurait traversé\". \"Selon\" and \"d'après\" name the source, while confirmed facts stay in the indicative (\"a confirmé\", \"aucune photo n'a encore été vérifiée\")."
    }
  ],
  "b1-talk-about-you-ideal-week": [
    {
      "type": "write",
      "prompt": "A French radio show is asking listeners: « Décrivez votre semaine idéale ». Write your answer (80-140 words): describe the week you would love to have, day by day or moment by moment, saying where you would be, what you would do and with whom.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses the conditional throughout for an imagined week (\"je me lèverais\", \"j'irais\", \"on mangerait\")",
        "Uses at least one pronominal verb in the conditional (\"je me lèverais\", \"on se retrouverait\")",
        "Uses at least three irregular conditional stems (\"irais\", \"ferais\", \"verrais\", \"aurais\", \"serait\")",
        "Organises the week with time expressions (\"le lundi\", \"en milieu de semaine\", \"le week-end\")"
      ],
      "modelAnswer": "Ma semaine idéale commencerait le lundi à Paris. Je me lèverais tard, vers dix heures, et je prendrais mon café en terrasse. L'après-midi, j'irais voir une exposition au musée d'Orsay. Le mardi, je partirais en train pour la Normandie, où je ferais du vélo au bord de la mer. En milieu de semaine, je n'aurais rien à faire : je lirais dans un hamac. Le jeudi, mes meilleurs amis me rejoindraient et on se retrouverait dans une petite auberge. Le vendredi soir, on irait à un concert de jazz. Et le week-end, je verrais toute ma famille pour un grand repas au soleil. Ce serait parfait !",
      "explanation": "The whole week is imagined, so every verb is in the conditional, including pronominal verbs (\"je me lèverais\", \"on se retrouverait\"). Irregular stems come from the future: \"j'irais\", \"je ferais\", \"je n'aurais\", \"je verrais\", \"ce serait\"."
    }
  ],
  "b1-pattern-si-present-futur": [
    {
      "type": "write",
      "prompt": "You are organising a garden party at your house on Saturday. Write the invitation (80-140 words) that you send to your French-speaking neighbours: give the time and place, and the practical details that depend on conditions (the weather, transport, children, food).",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses si + present followed by the future at least three times (\"s'il pleut, on mangera dedans\")",
        "Uses si + present followed by an imperative at least once (\"si vous venez en voiture, garez-vous...\")",
        "Never uses the future or the conditional after si",
        "Includes the invitation details and a polite request to reply"
      ],
      "modelAnswer": "Chers voisins,\nNous organisons une fête dans notre jardin samedi 21 juin, à partir de dix-huit heures, et nous serions très heureux de vous y voir ! S'il fait beau, nous mangerons dehors autour du barbecue. S'il pleut, nous installerons les tables dans le garage. Si vous venez avec vos enfants, ils pourront jouer sur la pelouse : il y aura des jeux pour eux. Si vous venez en voiture, garez-vous plutôt sur la place, la rue est étroite. Si vous voulez, apportez un dessert, mais ce n'est pas obligatoire ! Si vous pouvez venir, répondez-nous avant mercredi, s'il vous plaît.\nÀ samedi !\nAnna et Marc (n° 12)",
      "explanation": "Real conditions use si + present, and the result is in the future (\"s'il pleut, nous installerons\") or the imperative (\"si vous venez en voiture, garez-vous\"). The future never follows si directly, and si becomes s' only before il and ils."
    }
  ],
  "b1-if-clauses-2": [
    {
      "type": "write",
      "prompt": "Your French class is holding a mock election, and you are a candidate for mayor of your town. Write the short speech (80-140 words) you will give: say what you would do if you were elected, what you would change and what life would be like in the town.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses si + imparfait followed by the conditional at least three times (\"si j'étais maire, je...\")",
        "Never uses the conditional after si",
        "Uses at least two irregular conditional stems (\"ferais\", \"aurait\", \"pourrait\", \"serait\")",
        "Uses features of a speech: addressing the audience, a strong opening and a closing appeal"
      ],
      "modelAnswer": "Chers habitants,\nSi j'étais maire de notre ville, je changerais beaucoup de choses. D'abord, si nous avions plus de pistes cyclables, les enfants pourraient aller à l'école à vélo. Je ferais aussi planter des arbres dans toutes les rues. Si le centre-ville était piéton le week-end, les familles se promèneraient plus tranquillement et les petits commerces auraient plus de clients. Si j'avais assez d'argent, j'ouvrirais une nouvelle piscine municipale et je rénoverais la bibliothèque. Notre ville serait plus verte, plus calme et plus vivante. Alors, si vous voulez une ville comme celle-là, vous savez pour qui voter !\nMerci de votre attention.",
      "explanation": "Unreal or imagined situations use si + imparfait with the conditional in the result: \"si j'étais maire, je changerais\", \"si nous avions..., les enfants pourraient\", \"si j'avais assez d'argent, j'ouvrirais\". The conditional is never used after si."
    }
  ],
  "b1-quick-round-si-present-imperative": [
    {
      "type": "write",
      "prompt": "The tourist office of your town is preparing a leaflet in French called « Bien profiter de notre ville ». Write the text (80-140 words): give visitors practical tips that depend on the situation (the weather, the day of the week, their budget, children, transport), using si + present and an imperative.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses si + present followed by a vous imperative at least four times (\"si vous avez faim, allez...\")",
        "Uses at least two imperatives with a pronoun (\"réservez-la\", \"allez-y\", \"profitez-en\")",
        "Uses at least one negative imperative (\"si vous êtes en voiture, ne vous garez pas...\")",
        "Addresses visitors with vous in a friendly but neutral tone"
      ],
      "modelAnswer": "Bienvenue à Annecy !\nSi vous arrivez en train, achetez un pass touristique à la gare : il est valable dans tous les bus. Si vous êtes en voiture, ne vous garez pas dans la vieille ville, les parkings y sont très chers. S'il fait beau, louez un vélo et faites le tour du lac. S'il pleut, allez au musée du château : la vue sur les toits est magnifique. Si vous voyagez avec des enfants, emmenez-les au parc de l'Impérial, ils vont l'adorer. Si vous aimez le fromage, le marché du dimanche est fait pour vous : allez-y avant dix heures. Et si vous avez un petit budget, profitez-en pour pique-niquer au bord de l'eau !",
      "explanation": "Each tip pairs a real condition in si + present with a vous imperative in the result: \"si vous arrivez en train, achetez\", \"s'il pleut, allez\". Pronouns follow an affirmative command (\"emmenez-les\", \"allez-y\", \"profitez-en\") and go before a negative one (\"ne vous garez pas\")."
    }
  ],
  "b1-vocabulary-practice-5": [
    {
      "type": "write",
      "prompt": "Your neighbourhood has a problem that worries the residents (for example, noise, pollution, a lack of housing or of public transport). Write a formal letter (80-140 words) to the mayor: describe the problem, explain its consequences, and suggest solutions politely.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses society vocabulary from the unit (\"le logement\", \"la pollution\", \"les transports en commun\", \"la sécurité\")",
        "Makes polite requests and suggestions with the conditional (\"il faudrait\", \"pourriez-vous\", \"je vous serais reconnaissant(e) de...\")",
        "Uses si + present + future or si + imparfait + conditional to explain consequences",
        "Uses formal letter conventions (\"Monsieur le Maire\", \"Je vous prie d'agréer...\")"
      ],
      "modelAnswer": "Monsieur le Maire,\nJe vous écris au nom des habitants de la rue des Lilas. Depuis l'ouverture du nouveau centre commercial, la circulation a beaucoup augmenté et la pollution est devenue un vrai problème de santé publique : plusieurs enfants du quartier souffrent d'asthme. De plus, il n'y a qu'un bus par heure, donc beaucoup de gens prennent leur voiture. Si rien ne change, la situation sera bientôt insupportable. À notre avis, il faudrait limiter la vitesse à 30 km/h et améliorer les transports en commun. Si la ligne 5 passait toutes les quinze minutes, les habitants laisseraient leur voiture au garage. Pourriez-vous recevoir une délégation du quartier ?\nJe vous prie d'agréer, Monsieur le Maire, mes salutations distinguées.\nSarah Klein",
      "explanation": "The polite conditional softens suggestions and requests (\"il faudrait limiter\", \"pourriez-vous recevoir\"). Real consequences use si + present + future (\"si rien ne change, la situation sera\"), and hypotheses use si + imparfait + conditional (\"si la ligne 5 passait..., les habitants laisseraient\")."
    }
  ],
  "b1-timeline-what-happened-first": [
    {
      "type": "write",
      "prompt": "You missed an important meeting at work this morning. Write a formal email (80-140 words) to your manager to apologise and explain what happened: what had already gone wrong before you left home, what had happened when you arrived, and what you will do now.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses the plus-que-parfait for events that came before another past event (\"mon réveil n'avait pas sonné\", \"la réunion avait déjà commencé\")",
        "Uses the passé composé for the main events and the imparfait for the background",
        "Uses both auxiliaries in the plus-que-parfait, with agreement after être (\"le train était parti\", \"les collègues étaient déjà partis\")",
        "Uses a formal register (vous, \"Je vous prie de m'excuser\")"
      ],
      "modelAnswer": "Madame Lefèvre,\nJe vous prie de m'excuser pour mon absence à la réunion de ce matin. Hier soir, il y avait eu une coupure de courant dans mon immeuble, et mon réveil n'avait pas sonné. Je me suis réveillé à huit heures et demie. Quand je suis arrivé à la gare, mon train était déjà parti, et j'avais oublié mon téléphone à la maison, donc je n'ai pas pu vous prévenir. Quand je suis enfin arrivé au bureau, la réunion était déjà finie et mes collègues étaient partis déjeuner. J'ai lu le compte rendu et je vous enverrai mes chiffres cet après-midi.\nCordialement,\nPaul Martin",
      "explanation": "The plus-que-parfait marks what had happened before another past moment: \"mon réveil n'avait pas sonné\", \"mon train était déjà parti\", \"j'avais oublié\", \"mes collègues étaient partis\". It is formed with the imparfait of avoir or être, and the participle agrees after être."
    }
  ],
  "b1-story-detective-past-before-past": [
    {
      "type": "write",
      "prompt": "Write the opening of a short detective story (80-140 words). An inspector arrives at a house where something strange has happened. Describe the scene, say what the inspector notices and what he or she realises had happened before he or she arrived.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Sets the scene with the imparfait (\"il pleuvait\", \"la porte était ouverte\")",
        "Tells the inspector's actions in the passé composé (\"elle est entrée\", \"elle a remarqué\")",
        "Uses the plus-que-parfait at least four times for earlier events (\"quelqu'un avait cassé\", \"le voleur était sorti\")",
        "Uses at least one plus-que-parfait with déjà, jamais or pas encore"
      ],
      "modelAnswer": "Il était minuit et il pleuvait sur le village. Quand l'inspectrice Morel est arrivée devant la maison du docteur Lambert, la porte d'entrée était grande ouverte. Elle est entrée doucement. Dans le salon, les tiroirs étaient vides et une fenêtre était cassée. Elle a remarqué des traces de boue sur le tapis : quelqu'un était entré par le jardin. Sur la table, il y avait deux tasses de thé froid. Le docteur avait donc reçu un visiteur, et ils avaient bu le thé ensemble. Pourtant, la femme de ménage avait dit qu'il n'avait jamais d'invités. Morel a souri : le voleur n'était pas un inconnu, et il n'avait pas encore quitté le village.",
      "explanation": "The imparfait sets the scene (\"il pleuvait\", \"la porte était ouverte\"), the passé composé moves the story on (\"elle est entrée\", \"elle a remarqué\"), and the plus-que-parfait looks further back: \"quelqu'un était entré\", \"le docteur avait reçu\", \"ils avaient bu\", \"il n'avait pas encore quitté\"."
    }
  ],
  "b1-talk-about-you-first-time": [
    {
      "type": "write",
      "prompt": "A French friend is interviewing people for a podcast about « les premières fois ». Write the dialogue (80-140 words) in which your friend asks you about a first time (your first flight, your first drive, your first time living abroad) and you answer: how old you were, what had happened before, what happened and how you felt.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Answers with the passé composé for events and the imparfait for feelings and background",
        "Uses the plus-que-parfait for what had (or hadn't) happened before (\"je n'avais jamais pris l'avion\")",
        "Uses \"venir de\" in the imparfait or \"être en train de\" at least once (\"on venait de décoller\")",
        "Alternates questions and answers naturally"
      ],
      "modelAnswer": "— Alors, c'était quand, ton premier vol ?\n— J'avais dix-sept ans. Je partais en Espagne avec ma classe.\n— Tu avais peur ?\n— Oui, très peur ! Je n'avais jamais pris l'avion, et la veille, j'avais regardé un film catastrophe. Quelle idée !\n— Et pendant le vol, comment ça s'est passé ?\n— On venait de décoller quand l'avion a commencé à bouger dans tous les sens. J'ai pris la main de ma voisine, une dame que je ne connaissais pas !\n— Et elle a réagi comment ?\n— Elle a ri et elle m'a raconté sa vie pendant deux heures. Finalement, j'ai adoré ce voyage. Depuis, je prends l'avion sans problème.",
      "explanation": "The imparfait gives the background and feelings (\"j'avais dix-sept ans\", \"je ne connaissais pas\"), the passé composé tells the events (\"a commencé\", \"j'ai pris\"), the plus-que-parfait goes back further (\"je n'avais jamais pris\", \"j'avais regardé\"), and \"on venait de décoller\" is the recent past seen from the past."
    }
  ],
  "b1-frequent-words-work-organisation": [
    {
      "type": "write",
      "prompt": "A project at your work is behind schedule. Write a short report (80-140 words) for your manager: say what had been planned, what happened, why the deadline was missed, and what you propose now. Use work-organisation vocabulary such as une réunion, un délai, une échéance, un dossier and prévoir.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses at least four work-organisation words from the lesson (\"la réunion\", \"le délai\", \"l'échéance\", \"le dossier\", \"prévoir\")",
        "Uses the plus-que-parfait for what had been planned or done before (\"nous avions prévu\", \"le fournisseur n'avait pas envoyé\")",
        "Uses the passé composé and the imparfait to report what happened",
        "Ends with a proposal using the future or the conditional (\"nous pourrions\", \"nous livrerons\")"
      ],
      "modelAnswer": "Objet : retard du projet « Nouveau site »\nLors de la réunion de mars, nous avions prévu de mettre le nouveau site en ligne le 15 mai. Malheureusement, nous n'avons pas pu respecter ce délai, car l'équipe était trop petite. Le graphiste a été malade pendant deux semaines, et le fournisseur n'avait pas envoyé les photos avant l'échéance. De plus, le client avait changé trois fois le contenu du dossier. Entre-temps, l'équipe a terminé la partie technique, qui fonctionne très bien. Je propose un nouveau calendrier : nous pourrions présenter une version test le 30 mai et mettre le site en ligne le 10 juin. Je reste à votre disposition pour en discuter.\nKarim Benali",
      "explanation": "The plus-que-parfait explains what had been planned or had gone wrong earlier (\"nous avions prévu\", \"le fournisseur n'avait pas envoyé\", \"le client avait changé\"), while the passé composé and the imparfait report the period itself (\"nous n'avons pas pu\", \"le graphiste a été malade\", \"l'équipe était trop petite\"). The conditional makes the proposal sound tactful (\"nous pourrions\")."
    }
  ],
  "b1-themed-review-group-work": [
    {
      "type": "write",
      "prompt": "You're working on a group project at a French university and it's going badly. Write a formal email (80-140 words) to your tutor explaining the situation: the student who never comes, the work that you had prepared, the meeting where nothing was decided, and what you would like the tutor to do.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses qui and que correctly, with que never dropped (\"l'étudiant qui ne vient jamais\", \"les diapositives que nous avions préparées\")",
        "Makes the past participle agree after que with avoir (\"les recherches que j'ai faites\")",
        "Uses où for a place or a moment (\"la réunion où...\", \"le jour où...\")",
        "Uses a formal register and a polite request (\"Pourriez-vous...\", \"Je vous serais reconnaissante de...\")"
      ],
      "modelAnswer": "Madame,\nJe me permets de vous écrire au sujet de notre projet d'économie. Notre groupe a un problème : un étudiant qui est inscrit avec nous n'est jamais venu aux réunions. Les diapositives que nous avions préparées ensemble ne sont pas finies, parce qu'il devait faire la partie sur les chiffres. Les recherches que j'ai faites sur ce sujet ne suffisent pas. La semaine dernière, nous avons organisé une réunion où rien n'a été décidé, car il n'a pas répondu à nos messages. Le jour où nous devons présenter approche. Pourriez-vous nous conseiller ou nous accorder une semaine de plus ?\nJe vous remercie par avance.\nCordialement,\nEmma Wilson",
      "explanation": "Qui is the subject of the relative clause (\"un étudiant qui est inscrit\"), que the direct object (\"les diapositives que nous avions préparées\"), and où replaces a place or a moment (\"une réunion où rien n'a été décidé\", \"le jour où\"). After que, the participle of an avoir verb agrees with the noun that comes before it (\"préparées\", \"faites\")."
    }
  ],
  "b1-relative-pronouns-2": [
    {
      "type": "write",
      "prompt": "A French culture website asks readers to review a book or a film that everyone is talking about. Write your review (80-140 words): present the story and the main character, say what you liked and what you didn't, and whether you recommend it. Use dont at least twice.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses dont after a verb or expression with de (\"le livre dont tout le monde parle\", \"ce dont j'avais besoin\")",
        "Uses dont to replace a possessive de (\"une femme dont le mari...\")",
        "Uses qui, que and où correctly in the same text",
        "Gives a clear opinion and a recommendation"
      ],
      "modelAnswer": "« La Vie devant soi » est un roman dont tout le monde parle en ce moment, et que j'ai enfin lu cet été. L'histoire se passe à Paris, dans un quartier populaire où vit Momo, un jeune garçon qui est élevé par Madame Rosa. C'est une vieille dame dont le passé est très douloureux et dont Momo s'occupe jusqu'à la fin. Ce que j'ai aimé, c'est la voix de Momo : il raconte des choses tristes avec beaucoup d'humour. La fin, dont je ne vous dirai rien, m'a fait pleurer. Le seul défaut, c'est que certains passages sont un peu longs. Mais c'est un livre dont on se souvient longtemps : je vous le recommande !",
      "explanation": "Dont replaces de + noun after verbs and expressions built with de (\"parler de\" → \"dont tout le monde parle\", \"s'occuper de\" → \"dont Momo s'occupe\", \"se souvenir de\" → \"dont on se souvient\") and replaces a possessive (\"une dame dont le passé est douloureux\"). Qui, que and où keep their usual roles."
    }
  ],
  "b1-talk-about-you-people-and-places": [
    {
      "type": "write",
      "prompt": "Your French teacher is retiring after thirty years, and you have been asked to say a few words at the farewell party. Write your short speech (80-140 words): say what you remember about her classes, what you admire about her, and what she taught you. Use ce qui, ce que and the highlighting structures.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses \"ce qui\" and \"ce que\" at least twice each (\"ce qui m'a marqué\", \"ce que j'admire\")",
        "Uses the highlighting structure \"ce que / ce qui..., c'est...\" (\"Ce que je retiens, c'est...\")",
        "Uses qui, que and où to describe people, places or moments (\"la salle où...\", \"le jour où...\")",
        "Uses features of a speech: addressing the audience and the teacher, a closing toast or thanks"
      ],
      "modelAnswer": "Chère Madame Duval, chers collègues, chers amis,\nJe suis très ému de prendre la parole aujourd'hui. Ce qui m'a marqué dans vos cours, c'est votre énergie : on n'avait jamais le temps de s'ennuyer ! Ce que j'admire chez vous, c'est votre patience avec les élèves qui avaient des difficultés, comme moi. Je me souviens encore de la petite salle où vous nous faisiez chanter Brassens. Ce que vous nous avez appris, ce n'est pas seulement la grammaire, c'est aussi le goût des livres. Ce qui nous attend maintenant sans vous, je ne le sais pas, mais je sais ce que je vais vous dire : merci pour tout. Bonne retraite !",
      "explanation": "Ce qui is the subject (\"ce qui m'a marqué\", \"ce qui nous attend\") and ce que the object (\"ce que j'admire\", \"ce que vous nous avez appris\"). Put at the start of the sentence and taken up by \"c'est\", they highlight the key idea (\"Ce que j'admire chez vous, c'est votre patience\")."
    }
  ],
  "b1-real-world-mission-describe-without-saying": [
    {
      "type": "write",
      "prompt": "You're shopping in a French town but you've forgotten the words for three things you need: a bottle opener, a phone charger and a hot-water bottle. Write a text message (80-140 words) to a French friend asking where you can buy them, describing each thing without naming it.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Describes objects with \"c'est un truc qui sert à...\" or \"ça sert à...\"",
        "Uses \"c'est ce qu'on utilise pour...\" or \"c'est ce dont on a besoin pour...\"",
        "Uses qui, que, où and dont in the descriptions",
        "Ends with a clear question for the friend"
      ],
      "modelAnswer": "Salut Clémence ! Je suis au centre-ville et j'ai besoin de ton aide : j'ai oublié trois mots ! D'abord, je cherche un petit truc qui sert à ouvrir les bouteilles de vin, tu sais, avec une sorte de vis en métal. Ensuite, il me faut le câble dont on a besoin pour recharger un téléphone, celui que j'ai oublié chez toi samedi. Et enfin, je veux le truc en caoutchouc qu'on remplit d'eau chaude et qu'on met dans le lit quand il fait froid. C'est ce que ma grand-mère utilisait tout le temps ! Tu connais un magasin où je peux trouver tout ça ? Merci !!",
      "explanation": "When a word is missing, relatives let you describe it: \"un truc qui sert à ouvrir\", \"le câble dont on a besoin\", \"le truc qu'on remplit d'eau chaude\", \"c'est ce que ma grand-mère utilisait\", \"un magasin où je peux trouver tout ça\"."
    }
  ],
  "b1-cumulative-circuit-vous-at-the-hotel": [
    {
      "type": "write",
      "prompt": "Write a dialogue (80-140 words) between a hotel receptionist and a guest who has several problems with their room (the noise, the heating, the Wi-Fi). The guest complains politely and the receptionist gives instructions and offers solutions.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "The guest uses the polite conditional (\"pourriez-vous\", \"je voudrais\", \"ce serait possible de...\")",
        "The receptionist uses vous imperatives and \"veuillez\" + infinitive",
        "Uses at least two imperatives with pronouns (\"suivez-moi\", \"donnez-la-moi\", \"appelez-nous\")",
        "Uses a wish or necessity with que + subjunctive (\"je voudrais que vous changiez...\", \"il faut que vous redémarriez...\")"
      ],
      "modelAnswer": "— Bonsoir, excusez-moi de vous déranger. Je suis dans la chambre 214 et j'ai quelques problèmes.\n— Bien sûr, madame. Que se passe-t-il ?\n— D'abord, le chauffage ne marche pas. Ensuite, la chambre donne sur la rue et c'est très bruyant. Je voudrais que vous me changiez de chambre, si c'est possible.\n— Je suis désolé. Donnez-moi votre clé, s'il vous plaît, et veuillez patienter un instant. J'ai une chambre plus calme au cinquième étage, côté jardin.\n— Parfait. Et pourriez-vous me donner le code du wifi ? Celui qui est sur la carte ne fonctionne pas.\n— Le voici. S'il ne marche toujours pas, il faudra que vous redémarriez la box ; sinon, appelez-nous. Suivez-moi, je vous accompagne.",
      "explanation": "The guest softens her requests with the conditional (\"pourriez-vous\", \"je voudrais que vous me changiez\" + subjunctive). The receptionist gives formal instructions with vous imperatives and \"veuillez patienter\", with pronouns after the affirmative command (\"donnez-moi\", \"appelez-nous\", \"suivez-moi\")."
    }
  ],
  "b1-themed-review-family-reunion": [
    {
      "type": "write",
      "prompt": "Your family is organising a big Sunday lunch for your grandparents' wedding anniversary. Write a message (80-140 words) for the family group chat giving everyone a job and saying what you would like and hope for the day.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses tu and vous imperatives to give tasks, with at least one pronoun (\"Apporte le dessert\", \"Achetez-les\")",
        "Uses \"je voudrais que\" or \"j'aimerais que\" + subjunctive",
        "Uses \"pourvu que\" or \"il faut que\" + subjunctive",
        "Names a job for at least four people"
      ],
      "modelAnswer": "Coucou la famille ! Dimanche, c'est les 50 ans de mariage de papi et mamie, alors on s'organise. Tante Sophie, apporte ton fameux gâteau au chocolat, mamie l'adore. Marc et Julie, achetez les fleurs samedi et cachez-les chez vous. Lucas, prends ta guitare : je voudrais que tu joues leur chanson préférée. Maman, ne prépare pas tout toute seule, demande de l'aide ! Il faut que tout le monde soit là à midi, avant qu'ils arrivent. J'aimerais aussi que chacun écrive un petit mot pour l'album. Pourvu qu'il fasse beau, on pourra manger dans le jardin. Répondez-moi vite !",
      "explanation": "Tasks are given with imperatives, with the pronoun after an affirmative command (\"cachez-les\", \"répondez-moi\") and the tu form of -er verbs without s (\"apporte\", \"demande\"). Wishes and necessity take que + subjunctive: \"je voudrais que tu joues\", \"il faut que tout le monde soit\", \"j'aimerais que chacun écrive\", \"pourvu qu'il fasse beau\"."
    }
  ],
  "b1-talk-about-you-your-city": [
    {
      "type": "write",
      "prompt": "A French travel blog is publishing short articles called « Chez nous, on fait comme ça ». Write your article (80-140 words) about the customs in your town or country: meal times, greetings, shopping, going out. Use on as general \"people\" and ‘you’.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses on as a general subject at least five times (\"chez nous, on dîne tard\", \"on se fait la bise\")",
        "Uses at least one pronominal verb with on (\"on se serre la main\", \"on se retrouve\")",
        "Contrasts your customs with French ones (\"alors qu'en France...\", \"contrairement aux Français\")",
        "Describes general habits in the present"
      ],
      "modelAnswer": "Chez nous, à Séville, on vit un peu à l'envers ! On déjeune vers quinze heures et on dîne rarement avant vingt-deux heures, alors qu'en France, on se met à table beaucoup plus tôt. L'été, il fait trop chaud l'après-midi, donc on reste à la maison et on sort le soir. Quand on rencontre quelqu'un, on se fait deux bises, comme en France, mais on commence par la joue droite. Le dimanche, on se retrouve en famille chez les grands-parents. Dans les bars, on ne paie pas chacun son verre : on paie une tournée pour tout le monde. Et si on vous invite, on ne vous laisse jamais repartir le ventre vide !",
      "explanation": "On is the most natural way to talk about what people in general do: \"on déjeune\", \"on sort le soir\", \"on paie une tournée\". With pronominal verbs it takes se (\"on se fait deux bises\", \"on se retrouve\"), and its object form is vous (\"si on vous invite, on ne vous laisse jamais...\")."
    }
  ],
  "b1-real-world-mission-signs-and-ads": [
    {
      "type": "write",
      "prompt": "You're moving abroad and want to sell some of your things. Write a small ad (80-140 words) for a French classifieds website selling one or two items (a bike, a sofa, a desk): describe them, say what has been done to them, what is included, and the conditions of sale. Use the passive.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses the passive in the present and the passé composé with agreement (\"le vélo a été révisé\", \"les pneus ont été changés\")",
        "Uses the passive with \"par\" at least once, or a passive notice formula (\"il est vendu avec...\", \"les chèques ne sont pas acceptés\")",
        "Gives practical details in the concise style of an ad (price, state, contact)"
      ],
      "modelAnswer": "À vendre : vélo de ville femme, très bon état, 150 €\nCe vélo a été acheté neuf il y a deux ans. Il a été révisé le mois dernier par un professionnel : les freins ont été réglés et les deux pneus ont été changés. Il est vendu avec un panier, un antivol et deux lumières. Il y a une petite rayure sur le cadre, mais elle se voit à peine.\nÀ vendre aussi : bureau en bois, 40 €. Les tiroirs ont été repeints en blanc.\nLes objets doivent être récupérés avant le 30 juin, car je déménage. Les paiements par chèque ne sont pas acceptés. Contactez-moi par message.",
      "explanation": "The passive is formed with être + a past participle that agrees with the subject: \"ce vélo a été acheté\", \"les freins ont été réglés\", \"les tiroirs ont été repeints\". \"Par\" introduces the agent (\"par un professionnel\"), and notices often use the present passive (\"il est vendu avec...\", \"les paiements ne sont pas acceptés\")."
    }
  ],
  "b1-se-faire-infinitive": [
    {
      "type": "write",
      "prompt": "Write a funny anecdote (80-140 words) for a French blog about a day when everything went wrong at the hairdresser's, the garage or the dentist's. Use se faire + infinitive to say what you had done (or what happened to you).",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses se faire + infinitive in the passé composé at least three times (\"je me suis fait couper les cheveux\", \"je me suis fait voler...\")",
        "Uses être as the auxiliary with se faire and leaves the participle fait unchanged",
        "Uses faire + infinitive for something you had someone do (\"j'ai fait réparer ma voiture\")",
        "Tells the story with the passé composé and the imparfait"
      ],
      "modelAnswer": "Samedi dernier, j'avais un mariage, alors je me suis fait couper les cheveux chez un nouveau coiffeur. Il parlait au téléphone en même temps et, résultat, il m'a coupé les cheveux beaucoup trop court ! Ensuite, je suis allée chercher ma voiture au garage, où j'avais fait réparer les freins. Le garagiste m'a dit que la pièce n'était pas arrivée. J'ai pris le bus, et dans le bus, je me suis fait voler mon portefeuille. Le soir, au mariage, ma cousine m'a regardée et m'a demandé : « Tu t'es fait faire une nouvelle coupe ? » J'ai répondu que je m'étais fait attaquer par des ciseaux. Tout le monde a ri, même moi !",
      "explanation": "Se faire + infinitive says that you had something done (\"je me suis fait couper les cheveux\") or that something happened to you (\"je me suis fait voler mon portefeuille\"). It takes être, but the participle fait never agrees, even for a woman. Faire + infinitive without se means having someone do something (\"j'avais fait réparer les freins\")."
    }
  ],
  "b1-fill-the-story-annual-report": [
    {
      "type": "write",
      "prompt": "You're the secretary of a small association (a sports club, a choir, a community garden). Write the summary of the annual report (80-140 words) that you will read at the general meeting: what was done this year, how things went, and what will be done next year. Use the passive, on and the pronominal passive.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses the passive in the passé composé and the future (\"trois concerts ont été organisés\", \"un nouveau local sera loué\")",
        "Uses on to avoid naming the agent (\"on a acheté\", \"on a accueilli\")",
        "Uses the pronominal passive at least once (\"les inscriptions se font en ligne\")",
        "Uses figures and the vocabulary of results (\"augmenter\", \"multiplier par deux\", \"le budget\")"
      ],
      "modelAnswer": "Rapport annuel de la chorale « Les Voix du Rhône »\nCette année a été très positive. Le nombre de membres a été multiplié par deux : nous sommes maintenant quarante. Trois concerts ont été organisés, dont un à la cathédrale, et plus de six cents billets ont été vendus. Grâce à une subvention de la mairie, on a acheté un piano d'occasion et on a accueilli un nouveau chef de chœur. Le budget a été respecté. Depuis septembre, les inscriptions se font en ligne, ce qui est beaucoup plus simple. L'année prochaine, un week-end de chant sera organisé en montagne, et un nouveau répertoire sera choisi en janvier. Merci à tous les bénévoles !",
      "explanation": "The passive presents the results without focusing on who did them: \"a été multiplié\", \"ont été organisés\", \"ont été vendus\", \"sera organisé\", with the participle agreeing with the subject. On is the natural spoken alternative (\"on a acheté\"), and the pronominal passive describes a routine (\"les inscriptions se font en ligne\")."
    }
  ],
  "b1-periphrases-sur-le-point-de": [
    {
      "type": "write",
      "prompt": "Tomorrow is a big day for you: an exam, a move, a first day at a new job or a long journey. Write a diary entry (80-140 words) for this evening: say what you have just done, what you are in the middle of doing, what you are about to do, and what you have started, stopped or started again recently.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses \"être sur le point de\" + infinitive",
        "Uses at least two verb + infinitive phrases for stages (\"commencer à\", \"se mettre à\", \"arrêter de\", \"continuer à\", \"recommencer à\")",
        "Uses \"venir de\" and \"être en train de\" + infinitive",
        "Uses the diary conventions: date, first person, informal tone"
      ],
      "modelAnswer": "Jeudi 2 septembre, 22 heures\nDemain, je commence mon nouveau travail à Bordeaux ! Je viens de finir mes valises et je suis en train d'écrire ces lignes dans un appartement presque vide. Je suis sur le point d'aller me coucher, mais je n'arrive pas à dormir. Depuis une semaine, j'ai arrêté de boire du café le soir, et je me suis remise à courir le matin pour être moins stressée. Hier, j'ai commencé à lire le dossier de l'entreprise, mais il fait deux cents pages ! Je continuerai à le lire dans le train. Bon, j'arrête d'écrire maintenant : le réveil va sonner à six heures.",
      "explanation": "Verb + infinitive phrases describe the stage of an action: \"je suis sur le point d'aller\" (about to), \"j'ai commencé à lire\", \"je me suis remise à courir\" (started again), \"j'ai arrêté de boire\", \"je continuerai à\". \"Je viens de finir\" and \"je suis en train d'écrire\" give the recent past and the action in progress."
    }
  ],
  "b1-avant-de-apres-avoir": [
    {
      "type": "write",
      "prompt": "A French website is collecting short biographies of « des gens ordinaires qui m'inspirent ». Write a short biography (80-140 words) of someone you admire (a relative, a teacher, a neighbour): the main stages of their life, in order. Use avant de + infinitive and après avoir / après être + past participle.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses \"avant de\" + infinitive at least twice (\"avant de devenir médecin\")",
        "Uses \"après avoir\" + past participle and \"après être\" + past participle with agreement (\"après être arrivée en France\")",
        "Uses the passé composé for the stages of the life and the present for today",
        "Uses dates or time markers to order the events"
      ],
      "modelAnswer": "Ma tante Amina est née en 1965 au Maroc. Avant de venir en France, elle a travaillé dix ans comme couturière à Casablanca. Après être arrivée à Lille en 1990, elle a appris le français le soir, après avoir fini sa journée à l'usine. Avant d'avoir ses enfants, elle a passé un diplôme d'infirmière. Après avoir travaillé vingt ans à l'hôpital, elle a pris sa retraite en 2020. Mais avant de se reposer, elle a voulu aider les autres : aujourd'hui, elle donne des cours de français aux femmes qui viennent d'arriver dans le quartier. Elle dit toujours : « Avant de dire que c'est impossible, essaie ! »",
      "explanation": "When the same person does two things, \"avant de\" + infinitive introduces the later action (\"avant de venir en France\") and \"après avoir / après être\" + past participle the earlier one (\"après avoir fini\", \"après être arrivée\"). With être the participle agrees with the subject."
    }
  ],
  "b1-vocabulary-practice-8": [
    {
      "type": "write",
      "prompt": "You've just moved to a French town and want to join a local leisure club (music, sport or drama). Write a formal email (80-140 words) to the club: introduce yourself, say which activities you do or have done, ask two or three questions about joining (times, price, level), and close politely.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses \"faire de\" + activity with the right article (\"je fais du théâtre\", \"j'ai fait de la natation\")",
        "Distinguishes \"jouer de\" + instrument and \"jouer à\" + game or sport (\"je joue du piano\", \"je jouais au volley\")",
        "Uses club vocabulary (\"s'inscrire\", \"une cotisation\", \"un cours d'essai\", \"un adhérent\")",
        "Uses formal email conventions and polite questions (\"Pourriez-vous m'indiquer...\")"
      ],
      "modelAnswer": "Madame, Monsieur,\nJe viens de m'installer à Annecy et je souhaiterais m'inscrire dans votre association. Je joue de la guitare depuis dix ans et je fais aussi du chant. Quand j'étais étudiant, je jouais dans un petit groupe de rock, je faisais du théâtre et je jouais aussi au volley dans l'équipe de mon université. Pourriez-vous m'indiquer les jours et les horaires des ateliers de musique ? Quel est le montant de la cotisation annuelle ? Enfin, est-il possible de faire un cours d'essai avant de devenir adhérent ?\nJe vous remercie par avance de votre réponse.\nCordialement,\nTom Becker",
      "explanation": "\"Faire de\" + activity contracts with the article (\"je fais du chant\", \"je faisais du théâtre\"). An instrument takes \"jouer de\" (\"je joue de la guitare\") and a game or sport \"jouer à\" (\"je jouais au volley\"). The questions are softened with the conditional (\"je souhaiterais\", \"pourriez-vous m'indiquer\")."
    }
  ],
  "b1-frequent-words-outdoors": [
    {
      "type": "write",
      "prompt": "You're on a hiking and camping holiday in the mountains. Write a postcard (80-140 words) to a French friend: describe the landscape and the weather, tell what you did and what happened (for example a storm), and say what you are going to do next.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses at least five words for nature and the outdoors (\"un sentier\", \"un sommet\", \"une tente\", \"un orage\", \"un lac\")",
        "Describes the setting and the weather with the imparfait and tells events with the passé composé",
        "Uses the near future or the future for plans",
        "Has the shape of a postcard: greeting, short sentences, friendly sign-off"
      ],
      "modelAnswer": "Chère Lucie,\nUn petit bonjour des Pyrénées ! Nous campons au bord d'un lac magnifique, à 1 800 mètres. Hier, nous avons pris un sentier très raide jusqu'au sommet du pic. La vue était incroyable : on voyait toute la vallée et les glaciers. Mais en redescendant, le ciel est devenu noir et un orage a éclaté. Il pleuvait tellement que nous nous sommes abrités sous un rocher pendant une heure ! Le soir, la tente était trempée, mais on a fait un feu et on a bien ri. Demain, on va partir vers la forêt et dormir dans un refuge. Je t'embrasse,\nNadia",
      "explanation": "Nature vocabulary (\"sentier\", \"sommet\", \"orage\", \"tente\", \"refuge\") fits a postcard. The imparfait paints the setting (\"la vue était\", \"il pleuvait\") and the passé composé tells what happened (\"un orage a éclaté\", \"nous nous sommes abrités\"); \"on va partir\" gives the next plan."
    }
  ],
  "b1-themed-review-rumours-and-truths": [
    {
      "type": "write",
      "prompt": "There's a rumour going round the office that your colleague Julien is leaving the company. Write a dialogue (80-140 words) between two colleagues who are discussing it: who told whom, what was said, and whether it's true. Use object pronouns and double pronouns in the passé composé.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses object pronouns before the auxiliary in the passé composé (\"il me l'a dit\", \"je lui ai demandé\")",
        "Uses at least three double pronouns in the right order (\"me l'a dit\", \"le lui a annoncé\", \"la leur a donnée\")",
        "Makes the participle agree with a preceding direct object pronoun (\"la nouvelle, qui te l'a apprise ?\")",
        "Uses the conditional of hearsay or \"il paraît que\" at least once"
      ],
      "modelAnswer": "— Tu as entendu ? Il paraît que Julien quitte l'entreprise !\n— Non ! Qui te l'a dit ?\n— C'est Sophie qui me l'a dit ce matin, à la machine à café.\n— Et elle, qui la lui a apprise, cette nouvelle ?\n— Le chef, apparemment. Julien la lui aurait annoncée hier soir.\n— Je n'y crois pas. Je lui ai parlé vendredi et il ne m'en a rien dit.\n— Il avait peut-être ses raisons... Sa lettre de démission, il l'a donnée aux RH lundi.\n— Tu l'as vue ?\n— Non, mais Marc me l'a confirmé.\n— Bon, je vais le lui demander directement à midi !",
      "explanation": "In compound tenses, object pronouns go before the auxiliary (\"il me l'a dit\", \"je lui ai parlé\"), with me / te before le / la and le / la before lui (\"qui la lui a apprise\", \"je vais le lui demander\"). The participle agrees with a direct object pronoun placed before it (\"la lui a apprise\", \"il l'a donnée\", \"tu l'as vue\")."
    }
  ],
  "b1-themed-review-long-distance-family": [
    {
      "type": "write",
      "prompt": "Your grandmother lives in another country and you haven't seen her for a long time. Write her a letter (80-140 words): tell her about a parcel you sent her and the one she sent you, give news of the family, and tell her how much you miss her. Use pronouns in different tenses and manquer à.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses \"manquer à\" correctly (\"tu me manques\", \"tu nous manques\")",
        "Uses object pronouns, y and en in at least three different tenses (\"je te l'ai envoyé\", \"je vais t'en envoyer\", \"on y pense\")",
        "Makes the participle agree with a preceding direct object (\"la lettre que tu m'as écrite\", \"je les ai reçues\")",
        "Has the shape of an affectionate letter, with an opening and a closing"
      ],
      "modelAnswer": "Ma chère mamie,\nMerci pour ton colis ! Je l'ai reçu mardi, et les confitures sont délicieuses : on en mange tous les matins. Et la lettre que tu m'as écrite m'a beaucoup touchée. Je t'ai envoyé un paquet la semaine dernière, avec des photos de Léa : est-ce que tu l'as reçu ? Elle a commencé l'école et elle y va avec plaisir. Papa a eu une promotion, il te le racontera au téléphone dimanche. Tu nous manques beaucoup, surtout à Noël. On pense souvent à ta maison et au jardin : on y retournera cet été, c'est promis ! Je vais t'envoyer d'autres photos bientôt.\nJe t'embrasse très fort,\nClara",
      "explanation": "\"Manquer à\" works the other way round from English: \"tu nous manques\" means we miss you. Pronouns go before the auxiliary in the passé composé (\"je l'ai reçu\", \"je t'ai envoyé\") and before the verb in other tenses (\"on en mange\", \"il te le racontera\", \"on y retournera\"); the participle agrees with a preceding direct object (\"la lettre que tu m'as écrite\", \"m'a touchée\")."
    }
  ],
  "b1-sentence-by-sentence-je-viens-de-le-lui-dire": [
    {
      "type": "write",
      "prompt": "Your manager has sent you a list of questions about tasks for an important client: the contract, the invoices, the presentation, the meeting room. Write a reply email (80-140 words) saying where you are with each task. Use pronouns with venir de, être en train de, aller and être sur le point de.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Places pronouns before the infinitive in periphrases (\"je viens de le lui envoyer\", \"je vais les appeler\")",
        "Uses at least two double pronouns (\"le lui\", \"les leur\", \"vous l'\")",
        "Uses at least three of \"venir de\", \"être en train de\", \"aller\" and \"être sur le point de\"",
        "Uses a professional but friendly register with vous"
      ],
      "modelAnswer": "Bonjour Madame Roche,\nVoici où j'en suis pour le dossier Duval. Le contrat ? Je viens de le lui envoyer par mail, il devrait le signer aujourd'hui. Les factures de mars, je suis en train de les vérifier : je vais vous les transmettre avant midi. Pour la présentation, je suis sur le point de la terminer ; je vais la montrer à Antoine cet après-midi avant de vous l'envoyer. Quant à la salle de réunion, je viens de la réserver pour jeudi. Les clients ont besoin du plan d'accès : je vais le leur envoyer demain matin.\nBonne journée,\nLéa Moreau",
      "explanation": "With a conjugated verb + infinitive, the pronouns belong to the infinitive and go just before it: \"je viens de le lui envoyer\", \"je suis en train de les vérifier\", \"je vais vous les transmettre\", \"je suis sur le point de la terminer\". With two third-person pronouns, le / la / les come before lui / leur (\"le leur envoyer\")."
    }
  ],
  "b1-themed-review-nature-in-the-city": [
    {
      "type": "write",
      "prompt": "Write a short article (80-140 words) for a French town magazine about an urban garden, a green roof or a new park in your city. Describe the place, explain what people do there and how it was created, and say what will happen next. Use y and en, and pronouns with infinitives and imperatives.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses y for the place at least twice (\"on y cultive\", \"les habitants y viennent\")",
        "Uses en with quantities or de-verbs at least twice (\"la mairie en a planté vingt\", \"on en parle\")",
        "Uses a pronoun before an infinitive (\"pour s'en occuper\", \"venez y participer\") and an imperative with a pronoun (\"allez-y\", \"profitez-en\")",
        "Uses the passive or on to say how the place was created"
      ],
      "modelAnswer": "Un jardin sur le toit de la gare\nDepuis le printemps, le toit de la gare de Lille est devenu un jardin partagé. Le projet a été lancé par une association de quartier, et la mairie y a installé quarante bacs en bois. Aujourd'hui, on y cultive des tomates, des salades et des herbes aromatiques. Des ruches ont aussi été posées : les abeilles en produisent déjà du miel ! Une vingtaine de bénévoles viennent tous les samedis pour s'en occuper, et les écoles du quartier y organisent des ateliers. L'an prochain, la mairie en ouvrira deux autres. Vous aimez jardiner ? Allez-y le samedi matin, et profitez-en pour goûter les fraises !",
      "explanation": "Y replaces the place (\"on y cultive\", \"les écoles y organisent\", \"allez-y\") and en replaces de + noun or a quantity (\"les abeilles en produisent\", \"s'en occuper\", \"la mairie en ouvrira deux autres\"). Pronouns go before an infinitive (\"pour s'en occuper\") and after an affirmative imperative (\"profitez-en\")."
    }
  ],
  "b1-demonstrative-pronouns-1": [
    {
      "type": "write",
      "prompt": "You've just bought a new phone after comparing several models in a shop. Write a review (80-140 words) for a French shopping website: say which models you compared, why you chose this one, and what you think of it now. Use celui, celle, ceux and celles.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses celui-ci / celui-là or celle-ci / celle-là to compare (\"celui-ci était trop cher\")",
        "Uses celui / celle + de (\"celui de ma sœur\")",
        "Uses celui / celle + qui or que (\"celui que j'ai choisi\", \"ceux qui aiment les photos\")",
        "Gives a clear opinion and a recommendation"
      ],
      "modelAnswer": "J'ai hésité entre trois modèles. Le premier était très beau, mais celui-ci coûtait plus de mille euros. Le deuxième, celui que le vendeur me conseillait, avait une batterie trop faible. Finalement, j'ai pris le troisième, le même que celui de ma sœur, parce qu'elle en est très contente. Après un mois, je ne le regrette pas. L'écran est plus grand que celui de mon ancien téléphone et les photos sont meilleures que celles de mon appareil photo ! Le seul défaut, ce sont les écouteurs : ceux qui sont fournis ne sont pas confortables. Je le recommande à ceux qui veulent un bon téléphone sans se ruiner.",
      "explanation": "Demonstrative pronouns replace a noun already mentioned and agree with it: \"celui que le vendeur me conseillait\" (le modèle), \"celles de mon appareil photo\" (les photos), \"ceux qui sont fournis\" (les écouteurs). They are always followed by -ci / -là, de + noun, or a relative clause."
    }
  ],
  "b1-real-world-mission-lost-property": [
    {
      "type": "write",
      "prompt": "You left your bag on a train between Lyon and Marseille. Write a formal email (80-140 words) to the SNCF lost property office: say when and where you lost it, describe it and its contents precisely, explain how to tell it apart from other bags, and say how you can collect it.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses possessive pronouns (\"le mien\", \"la mienne\", \"les miens\") to identify your things",
        "Uses demonstrative pronouns with de or a relative (\"celui de mon fils\", \"celui qui...\")",
        "Describes the bag precisely with adjectives and relative clauses (\"un sac à dos noir qui...\")",
        "Uses a formal register (\"Madame, Monsieur\", \"Je vous serais reconnaissant(e) de...\")"
      ],
      "modelAnswer": "Madame, Monsieur,\nLe vendredi 12 avril, j'ai oublié mon sac à dos dans le TGV 6171, entre Lyon et Marseille, voiture 14, place 52. C'est un sac noir de marque Eastpak, avec une poche rouge sur le devant. Il y a beaucoup de sacs noirs, mais le mien est facile à reconnaître : il porte un porte-clés en forme de tour Eiffel. À l'intérieur, il y a un ordinateur gris, un livre et deux paires de lunettes : la mienne, dans un étui bleu, et celle de mon fils, dans un étui vert. Il y a aussi un portefeuille, mais ce n'est pas le mien, c'est celui de mon mari. Je vous serais reconnaissante de me contacter au 06 12 34 56 78.\nCordialement,\nSophie Durand",
      "explanation": "Possessive pronouns replace possessive adjective + noun and agree with the thing owned: \"le mien\" (mon sac), \"la mienne\" (ma paire de lunettes). Demonstratives with de say whose it is (\"celle de mon fils\", \"celui de mon mari\")."
    }
  ],
  "b1-timeline-elodies-story": [
    {
      "type": "write",
      "prompt": "Write the story (80-140 words) of how two people in your family (your parents, grandparents, or an aunt and uncle) met and built their life together. Use the four pasts: the passé composé, the imparfait, the plus-que-parfait and venir de in the imparfait.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses the passé composé for the main events and the imparfait for the background",
        "Uses the plus-que-parfait for events before the main story (\"il avait déjà quitté...\")",
        "Uses \"venir de\" in the imparfait (\"elle venait d'arriver\")",
        "Uses time markers to order events (\"à l'époque\", \"deux ans plus tard\", \"depuis\")"
      ],
      "modelAnswer": "Mes grands-parents se sont rencontrés en 1968, à Marseille. À l'époque, mon grand-père était marin et il avait déjà fait trois fois le tour du monde. Ma grand-mère, elle, venait d'arriver d'Italie et elle travaillait dans une boulangerie du port. Un matin, il est entré pour acheter du pain et il a oublié son portefeuille sur le comptoir. Elle a couru derrière lui dans la rue pour le lui rendre. Il n'avait jamais vu une fille aussi rapide ! Deux ans plus tard, ils se sont mariés. Ils ont ouvert leur propre boulangerie, et depuis cinquante ans, ils se disputent pour savoir qui a vu l'autre en premier.",
      "explanation": "The passé composé carries the main events (\"se sont rencontrés\", \"il est entré\", \"se sont mariés\"), the imparfait the background (\"était marin\", \"elle travaillait\"), the plus-que-parfait what had happened before (\"il avait déjà fait\", \"il n'avait jamais vu\") and \"venait d'arriver\" the recent past seen from the past."
    }
  ],
  "b1-vocabulary-practice-9": [
    {
      "type": "write",
      "prompt": "Your building's shared cellar is full of things nobody has claimed, and it is going to be cleared out. Write a notice (80-140 words) for the residents: describe some of the objects, say whose you think they are, ask people to collect theirs, and explain what will happen to the rest. Use possessive and demonstrative pronouns.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses possessive pronouns (\"le vôtre\", \"les leurs\", \"le nôtre\")",
        "Uses demonstrative pronouns with de, a relative or -ci / -là (\"celui des Martin\", \"ceux qui sont près de la porte\")",
        "Uses vocabulary for belongings and tidying (\"ranger\", \"vider\", \"débarrasser\", \"un carton\", \"prêter / emprunter\")",
        "Gives a clear deadline and instructions with vous"
      ],
      "modelAnswer": "Chers voisins,\nLa cave commune sera entièrement vidée le samedi 5 octobre. Il y a beaucoup d'objets sans nom ! Trois vélos sont attachés au mur : celui qui est rouge serait celui des Martin, mais les deux autres ? Si ce sont les vôtres, venez les chercher. Il y a aussi des cartons de livres : ceux qui sont près de la porte sont les nôtres, nous les débarrasserons cette semaine. Une poussette bleue a été prêtée par Mme Roux il y a deux ans : si vous l'avez empruntée, rendez-la-lui ! Merci de ranger vos affaires avant le 5. Après cette date, tout ce qui reste sera donné à une association.\nLe syndic",
      "explanation": "Possessive pronouns agree with the object owned (\"les vôtres\" for the bikes, \"les nôtres\" for the boxes), and demonstratives identify which one with a relative or de (\"celui qui est rouge\", \"celui des Martin\", \"ceux qui sont près de la porte\"). Prêter means to lend and emprunter to borrow."
    }
  ],
  "b1-themed-review-tenants-rights": [
    {
      "type": "write",
      "prompt": "The lift in your building has been broken for a month and the landlord has done nothing. On behalf of all the tenants, write a formal letter (80-140 words) to the landlord: describe the problem and its consequences, say what you have already done, and demand a repair. Use formal written French: full negatives, nous and vous, no contractions.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses full negatives with ne (\"nous n'avons reçu aucune réponse\", \"elle ne peut plus sortir\")",
        "Uses nous (not on) and vous throughout",
        "Makes a firm request with the polite conditional or the subjunctive (\"nous vous serions reconnaissants de...\", \"nous exigeons que...\")",
        "Uses formal letter conventions and no spoken forms"
      ],
      "modelAnswer": "Monsieur,\nNous vous écrivons au nom des locataires du 15, rue Victor-Hugo. L'ascenseur de l'immeuble ne fonctionne plus depuis le 3 mars. Cette panne pose de graves problèmes : Mme Garnier, qui a quatre-vingt-cinq ans et habite au sixième étage, ne peut plus sortir de chez elle, et les familles avec de jeunes enfants doivent porter les poussettes dans l'escalier. Nous vous avons déjà téléphoné deux fois et nous vous avons envoyé un courriel le 10 mars, mais nous n'avons reçu aucune réponse. Nous exigeons que l'ascenseur soit réparé avant la fin du mois.\nVeuillez agréer, Monsieur, l'expression de nos salutations distinguées.\nLes locataires",
      "explanation": "Formal written French keeps the ne of the negation (\"ne fonctionne plus\", \"ne peut plus\", \"n'avons reçu aucune réponse\"), uses nous rather than on, and avoids contractions. \"Nous exigeons que\" takes the subjunctive (\"soit réparé\"), and \"veuillez agréer\" closes the letter."
    }
  ],
  "b1-dialogue-lab-entre-potes": [
    {
      "type": "write",
      "prompt": "Write a dialogue (80-140 words) in relaxed spoken French between three friends planning a party for Saturday: where, who's coming, what to bring. Write it the way people actually talk.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Drops ne in negatives (\"je sais pas\", \"c'est pas grave\")",
        "Uses on instead of nous and ça instead of cela",
        "Asks questions with intonation or with the question word at the end (\"Tu viens ?\", \"On fait ça où ?\")",
        "Uses fillers and spoken contractions (\"bah\", \"du coup\", \"en fait\", \"t'as\", \"y a\")"
      ],
      "modelAnswer": "Julie : Bon, samedi, on fait ça où, la fête ?\nMaxime : Bah, chez moi, si tu veux. Mes parents sont pas là.\nSarah : Trop bien ! Et on invite qui ?\nJulie : Je sais pas… Les gens de la classe, du coup ?\nMaxime : Ouais, mais pas tout le monde, hein. Mon appart, il est pas immense.\nSarah : T'inquiète, on sera une quinzaine, max.\nJulie : Et qui apporte à boire ?\nMaxime : Moi, je m'occupe des boissons. T'as une enceinte, Sarah ?\nSarah : Ouais, je la ramène. En fait, y a aussi mon cousin qui fait des pizzas, je lui demande ?\nJulie : Carrément ! Ça, c'est une super idée.",
      "explanation": "Spoken French drops ne (\"sont pas là\", \"je sais pas\", \"il est pas immense\"), uses on for nous and ça for cela, puts the question word at the end (\"on fait ça où ?\", \"on invite qui ?\") and uses fillers and contractions (\"bah\", \"du coup\", \"en fait\", \"t'as\", \"y a\")."
    }
  ],
  "b1-themed-review-forming-a-band": [
    {
      "type": "write",
      "prompt": "You and two friends want to start a band and you need a drummer. Write a small ad (80-140 words) for a French music website: describe the band and the musician you're looking for, say what you would do together if they joined, and how to contact you.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses relative pronouns to describe the musician and the band (\"un batteur qui...\", \"le style que nous jouons\", \"une salle où...\", \"le matériel dont nous avons besoin\")",
        "Uses si + imparfait + conditional or si + present + future (\"si tu nous rejoignais, on pourrait...\")",
        "Uses at least one subjunctive after a wish or necessity (\"il faut que tu sois libre\", \"nous aimerions que tu aies...\")",
        "Gives practical details (place, rehearsal times, contact) in the concise style of an ad"
      ],
      "modelAnswer": "Groupe de rock cherche batteur !\nNous sommes trois amis de Nantes (guitare, basse et chant) qui jouent ensemble depuis un an. Le style que nous préférons, c'est le rock des années 90. Nous cherchons un batteur ou une batteuse qui a au moins deux ans d'expérience et qui aime l'improvisation. Il faut que tu sois libre le mardi soir pour les répétitions : nous avons une salle où on peut jouer fort. Nous aimerions aussi que tu aies ta propre batterie, car c'est le matériel dont nous avons le plus besoin. Si tu nous rejoignais, on pourrait faire nos premiers concerts dans les bars cet été ! Écris-nous à rocknantes@mail.fr.",
      "explanation": "Relatives describe the band and the musician (\"trois amis qui jouent\", \"le style que nous préférons\", \"une salle où\", \"le matériel dont nous avons besoin\"). Necessity and wishes take the subjunctive (\"il faut que tu sois\", \"nous aimerions que tu aies\"), and si + imparfait + conditional imagines the future together (\"si tu nous rejoignais, on pourrait\")."
    }
  ],
  "b1-themed-review-plastic-free-shopping": [
    {
      "type": "write",
      "prompt": "A new bulk shop (une épicerie en vrac) has opened near you and you've tried it. Write a review (80-140 words) for a French local website: explain how shopping works there, what you bought, and what you liked or didn't. Use the pronominal passive, vous imperatives and en.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses the pronominal passive at least twice (\"les pâtes se vendent au poids\", \"ça se fait facilement\")",
        "Uses vous imperatives to explain how it works (\"apportez vos bocaux\", \"pesez-les\")",
        "Uses en with quantities (\"j'en ai pris 500 grammes\", \"il y en a beaucoup\")",
        "Gives a personal opinion and a final rating or recommendation"
      ],
      "modelAnswer": "Enfin une épicerie en vrac dans le quartier ! Le principe est simple : ici, tout se vend au poids, et rien ne se jette. Apportez vos bocaux ou vos sacs en tissu, pesez-les vides à l'entrée, puis remplissez-les. Les pâtes, le riz et les lentilles se servent avec de grandes cuillères. J'ai acheté du café : j'en ai pris 250 grammes, et c'était moins cher qu'au supermarché. Il y a aussi des produits d'entretien, et il y en a beaucoup que je ne connaissais pas. Le seul problème, c'est qu'on ne trouve pas de produits frais. Mais allez-y, vous ne le regretterez pas ! Note : 4 sur 5.",
      "explanation": "The pronominal passive describes how things are normally done (\"tout se vend au poids\", \"rien ne se jette\", \"les pâtes se servent\"). Vous imperatives explain the steps, with the pronoun after the verb (\"pesez-les\", \"remplissez-les\", \"allez-y\"), and en replaces a quantity (\"j'en ai pris 250 grammes\", \"il y en a beaucoup\")."
    }
  ],
  "b1-survival-phone-calls": [
    {
      "type": "write",
      "prompt": "You call a dentist's surgery in France to make an appointment because you have toothache, but the dentist you want is not available. Write the phone conversation (80-140 words) between you and the receptionist, from the greeting to the goodbye.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses phone formulas (\"Allô\", \"C'est de la part de qui ?\", \"Ne quittez pas\", \"Je peux laisser un message ?\")",
        "Makes polite requests with the conditional (\"je voudrais\", \"est-ce qu'il serait possible de...\", \"pourriez-vous\")",
        "Uses vous throughout and spells out or confirms a detail (a name, a number, a time)",
        "Ends the call with appropriate closing formulas"
      ],
      "modelAnswer": "— Cabinet dentaire du docteur Bernard, bonjour.\n— Bonjour madame. Je voudrais prendre rendez-vous avec le docteur Bernard, s'il vous plaît. J'ai très mal à une dent depuis hier.\n— C'est de la part de qui ?\n— De Mark Evans. E-V-A-N-S.\n— Ne quittez pas, je regarde… Je suis désolée, le docteur Bernard est en vacances jusqu'au 20.\n— Ah… Est-ce qu'il serait possible de voir un autre dentiste ?\n— Oui, le docteur Morin pourrait vous recevoir demain à 9 h 30.\n— Parfait. Pourriez-vous aussi lui laisser un message pour dire que c'est urgent ?\n— Bien sûr. Vous pouvez me donner votre numéro ?\n— C'est le 06 45 12 89 30.\n— C'est noté. À demain, monsieur.\n— Merci, au revoir.",
      "explanation": "The call uses standard phone formulas (\"c'est de la part de qui ?\", \"ne quittez pas\", \"c'est noté\") and softens each request with the conditional (\"je voudrais\", \"est-ce qu'il serait possible de\", \"pourriez-vous\"). Spelling out a name letter by letter is normal on the phone."
    }
  ],
  "b1-survival-bank-and-money": [
    {
      "type": "write",
      "prompt": "This morning a cash machine swallowed your bank card, and then you had problems at the bank. Write a text message (80-140 words) to a French friend telling the story: what happened at the machine, what the bank told you, what you had to do and whether you can still pay for things.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses banking vocabulary from the lesson (\"le distributeur\", \"avaler la carte\", \"faire opposition\", \"un virement\", \"le code\", \"le compte\")",
        "Tells the story with the passé composé and the imparfait",
        "Uses at least one plus-que-parfait or \"venir de\" in the imparfait (\"j'avais tapé le mauvais code\")",
        "Uses an informal register suitable for a text message"
      ],
      "modelAnswer": "Tu vas pas croire ce qui m'est arrivé ce matin ! J'étais au distributeur devant la gare et je venais de taper mon code quand la machine a avalé ma carte. En fait, j'avais tapé le mauvais code trois fois ! Je suis entrée dans l'agence, mais le conseiller m'a dit que la carte serait détruite et qu'il fallait en commander une nouvelle. Comme le distributeur ne me la rendait pas, j'ai préféré faire opposition. Résultat : je vais attendre ma nouvelle carte une semaine… Heureusement, je peux encore payer avec mon téléphone et faire des virements sur l'appli. Tu me prêtes 20 euros pour ce soir ?",
      "explanation": "Banking vocabulary (\"le distributeur\", \"a avalé ma carte\", \"faire opposition\", \"des virements\") carries the story. The imparfait sets the scene (\"j'étais au distributeur\"), \"je venais de taper\" gives the moment just before, the plus-que-parfait explains the cause (\"j'avais tapé le mauvais code\"), and the passé composé tells what happened."
    }
  ],
  "b1-mixed-practice-advice-column": [
    {
      "type": "write",
      "prompt": "Write a letter (80-140 words) to the advice column of a French magazine. Explain a problem you have at work or with your family, say what you have already tried, what you are afraid of, and ask for advice.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Explains the background with the present, the passé composé and depuis (\"je travaille ici depuis...\", \"j'ai essayé de...\")",
        "Uses emotion or fear triggers with que + subjunctive (\"j'ai peur que mon chef me renvoie\", \"ça m'énerve qu'il fasse...\")",
        "Uses the conditional for what you would like or would do (\"je voudrais\", \"est-ce que je devrais...\")",
        "Ends with a direct request for advice"
      ],
      "modelAnswer": "Chère Hélène,\nJe travaille dans une petite agence de voyages depuis trois ans et j'aime beaucoup mon métier. Le problème, c'est ma nouvelle collègue. Elle arrive toujours en retard et elle me demande de faire son travail. Ça m'énerve qu'elle prenne tout le mérite devant notre directrice ! J'ai déjà essayé de lui en parler gentiment, mais elle a ri et elle n'a rien changé. Je voudrais en parler à la directrice, mais j'ai peur qu'elle me trouve jalouse ou que l'ambiance devienne encore pire. Est-ce que je devrais attendre ou agir tout de suite ? Que feriez-vous à ma place ?\nMerci de votre aide,\nMarion, 29 ans",
      "explanation": "Depuis + present describes the ongoing situation (\"je travaille... depuis trois ans\"), emotion and fear triggers take the subjunctive (\"ça m'énerve qu'elle prenne\", \"j'ai peur qu'elle me trouve... ou que l'ambiance devienne\"), and the conditional asks for advice tactfully (\"je voudrais\", \"est-ce que je devrais\", \"que feriez-vous\")."
    }
  ],
  "b1-survival-job-interview": [
    {
      "type": "write",
      "prompt": "You've seen an ad for a summer job as a receptionist in a hotel in Nice. Write a cover letter (80-140 words): introduce yourself, explain why you are applying, describe your experience and qualities, say when you are available and ask for an interview.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses the conventions of a French cover letter (\"Madame, Monsieur\", \"Je me permets de vous adresser ma candidature...\", \"Veuillez agréer...\")",
        "Uses job vocabulary from the lesson (\"le poste\", \"un CDD\", \"une expérience\", \"un entretien\", \"disponible\")",
        "Describes past experience with the passé composé and depuis + present",
        "Uses the conditional for politeness (\"je serais ravi(e) de...\", \"je souhaiterais\")"
      ],
      "modelAnswer": "Madame, Monsieur,\nSuite à votre annonce parue sur le site de l'office du tourisme, je me permets de vous adresser ma candidature pour le poste de réceptionniste en CDD pour l'été. Je suis étudiant en tourisme à Bristol et j'apprends le français depuis six ans. L'été dernier, j'ai travaillé deux mois dans un hôtel à Londres, où j'ai accueilli des clients du monde entier et géré les réservations. Je suis souriant, organisé et je parle anglais, français et espagnol. Je suis disponible du 15 juin au 31 août. Je serais ravi de vous rencontrer lors d'un entretien.\nVeuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.\nJames Carter",
      "explanation": "A French cover letter follows fixed formulas (\"je me permets de vous adresser ma candidature\", \"veuillez agréer...\"). Depuis + present gives an ongoing situation (\"j'apprends le français depuis six ans\"), the passé composé lists past experience (\"j'ai travaillé\", \"j'ai accueilli\"), and the conditional adds politeness (\"je serais ravi\")."
    }
  ],
  "b1-themed-review-memories-of-a-father": [
    {
      "type": "write",
      "prompt": "A French magazine is publishing readers' short texts called « Quelqu'un qui m'a marqué(e) ». Write a portrait (80-140 words) of an older person who was important in your childhood (a parent, a grandparent, a teacher): describe their habits and personality, a memory you share, and how you feel when you think of them now.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Describes past habits and personality with the imparfait (\"il se levait toujours à six heures\")",
        "Uses relative pronouns to describe (\"l'atelier où il travaillait\", \"les histoires qu'il racontait\", \"le jardin dont il était si fier\")",
        "Uses emotion vocabulary and at least one emotion trigger + subjunctive or de + infinitive (\"je regrette qu'il ne soit plus là\", \"je suis fière d'avoir...\")",
        "Tells one specific memory in the passé composé"
      ],
      "modelAnswer": "Mon grand-père Henri était menuisier. Il se levait toujours à six heures et il passait ses journées dans l'atelier où il fabriquait des tables et des chaises. C'était un homme calme et patient, qui parlait peu mais qui riait beaucoup. Le soir, il me racontait des histoires qu'il inventait pour moi. Je me souviens surtout du jour où il m'a appris à planter un clou : je me suis tapé sur le doigt et il m'a dit en souriant que les vrais menuisiers commencent tous comme ça. Aujourd'hui, je suis émue quand je pense à lui. Je regrette qu'il ne soit plus là pour voir la petite étagère que j'ai faite, mais je suis fière d'avoir gardé ses outils.",
      "explanation": "The imparfait paints habits and personality (\"il se levait\", \"il passait\", \"il me racontait\"), and the passé composé tells the single memory (\"il m'a appris\", \"je me suis tapé\"). Relatives link the details (\"l'atelier où\", \"des histoires qu'il inventait\", \"le jour où\"), and emotion takes the subjunctive or de + infinitive (\"je regrette qu'il ne soit plus là\", \"fière d'avoir gardé\")."
    }
  ],
  "b1-word-web-nature-environment": [
    {
      "type": "write",
      "prompt": "Your company (or school) has asked staff to suggest ideas to protect the environment. Write a short proposal (80-140 words) to the management: describe the current situation, suggest three concrete measures, and explain their benefits. Use environment vocabulary.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses at least five environment words from the lesson (\"le gaspillage\", \"les déchets\", \"le tri sélectif\", \"réduire\", \"les émissions\", \"recycler\")",
        "Makes proposals with the conditional or with il faudrait que + subjunctive (\"nous pourrions\", \"il faudrait que chacun...\")",
        "Explains benefits with si + present + future or si + imparfait + conditional",
        "Organises the proposal clearly (situation, measures, conclusion)"
      ],
      "modelAnswer": "Proposition : un bureau plus vert\nAujourd'hui, notre entreprise produit beaucoup de déchets : des centaines de gobelets en plastique sont jetés chaque semaine, et il n'y a pas de tri sélectif. Je propose trois mesures. D'abord, nous pourrions remplacer les gobelets par des tasses : si chacun apporte la sienne, nous réduirons le gaspillage. Ensuite, il faudrait que des poubelles de recyclage soient installées à chaque étage. Enfin, l'entreprise pourrait encourager le vélo en créant un parking sécurisé. Si plus de salariés venaient à vélo, les émissions de CO2 baisseraient et tout le monde serait en meilleure forme. Ces mesures coûtent peu et elles amélioreraient aussi l'image de l'entreprise.",
      "explanation": "The proposals are softened with the conditional (\"nous pourrions\", \"l'entreprise pourrait\") and \"il faudrait que\" + subjunctive (\"soient installées\"). Si + present + future gives a likely result (\"si chacun apporte..., nous réduirons\"), and si + imparfait + conditional a hypothetical one (\"si plus de salariés venaient..., les émissions baisseraient\")."
    }
  ],
  "b1-word-web-money": [
    {
      "type": "write",
      "prompt": "A French blog about travel on a budget is asking readers: « Comment avez-vous financé votre grand voyage ? » Write your post (80-140 words): explain how you saved, what you gave up, whether you borrowed money and how you paid it back, and give one piece of advice.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses at least five money words from the lesson (\"économiser\", \"faire des économies\", \"épargner\", \"emprunter\", \"rembourser\", \"être fauché\", \"un salaire\")",
        "Uses \"faire des économies\" or \"économiser\" correctly, and not \"l'économie\" for savings",
        "Tells the story with the passé composé and the imparfait",
        "Gives advice with the imperative, \"il faut\" or the conditional"
      ],
      "modelAnswer": "Il y a deux ans, j'ai fait le tour de l'Asie pendant six mois. Pour le financer, j'ai économisé pendant presque deux ans. Je travaillais dans un café, et chaque mois, je mettais un tiers de mon salaire sur un compte d'épargne. J'ai arrêté de sortir le samedi soir et je préparais mes repas moi-même. Ma sœur m'a aussi prêté 1 000 euros, que je lui ai remboursés en rentrant. Pendant le voyage, je dépensais environ vingt euros par jour. À mon retour, j'étais complètement fauché, mais je ne regrette rien ! Mon conseil : faites un budget précis et ouvrez un compte réservé au voyage, comme ça, vous ne serez pas tenté de dépenser cet argent.",
      "explanation": "Money vocabulary carries the post: \"économiser\" (to save money) is different from \"l'économie\" (the economy), and \"prêter\" (lend) contrasts with \"rembourser\" (pay back). The imparfait describes the saving habits (\"je mettais\", \"je dépensais\"), the passé composé the key events, and the imperative gives the advice."
    }
  ],
  "b1-word-web-life-experiences": [
    {
      "type": "write",
      "prompt": "Your grandmother is celebrating her 80th birthday and you are giving a short speech (80-140 words) at the party. Go through the main stages of her life (birth, studies, work, marriage, children, retirement) and end with a toast.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses life-stage vocabulary from the lesson (\"naître\", \"grandir\", \"faire ses études\", \"se marier\", \"prendre sa retraite\")",
        "Uses the passé composé with the right auxiliary for life events (\"elle est née\", \"elle a pris sa retraite\")",
        "Uses \"depuis\" or \"ça fait... que\" + present for what is still true",
        "Uses features of a speech: addressing the guests, a toast at the end"
      ],
      "modelAnswer": "Chère mamie, chers amis,\nIl y a quatre-vingts ans, le 3 mai 1945, une petite fille est née dans un village de Normandie : c'était toi ! Tu as grandi dans une ferme, puis tu es partie à Rouen pour faire tes études d'institutrice. Tu as enseigné pendant trente-cinq ans, et des centaines d'enfants ont appris à lire grâce à toi. En 1968, tu t'es mariée avec papi, et vous avez eu trois enfants. Tu as pris ta retraite en 2005, mais tu ne t'es jamais arrêtée : ça fait vingt ans que tu fais du bénévolat à la bibliothèque. Aujourd'hui, nous sommes tous là pour toi. Levons nos verres : joyeux anniversaire, mamie !",
      "explanation": "Life events are in the passé composé, with être for naître, partir and pronominal verbs (\"tu es née\", \"tu es partie\", \"tu t'es mariée\") and avoir for the others (\"tu as grandi\", \"tu as pris ta retraite\"). \"Ça fait vingt ans que\" + present describes what is still going on, and \"levons nos verres\" introduces the toast."
    }
  ],
  "b1-word-web-the-city": [
    {
      "type": "write",
      "prompt": "You're having a party at your flat on Saturday and a French friend who has never been there is coming by public transport. Write a text message (80-140 words) explaining how to get to your place from the main station: which lines to take, where to change, where to get off, and what to do if there's a problem.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses public transport vocabulary from the lesson (\"la ligne\", \"une correspondance\", \"changer à\", \"descendre à\", \"un arrêt\", \"une station\")",
        "Gives directions with tu imperatives (\"prends\", \"descends\", \"tourne\")",
        "Uses si + present + imperative or future for a possible problem (\"si le métro est en panne, prends le bus\")",
        "Uses place prepositions (\"en face de\", \"à côté de\", \"au coin de\")"
      ],
      "modelAnswer": "Coucou Inès ! Pour venir samedi, c'est facile. À la gare, prends le métro ligne A direction Vaulx-en-Velin. Descends à Hôtel de Ville, puis prends la correspondance avec la ligne C et descends à Croix-Rousse, c'est le terminus. En sortant de la station, tourne à gauche et va tout droit jusqu'à la place. Mon immeuble est au coin de la rue, juste en face de la boulangerie. Le code de la porte, c'est 2846, et c'est au troisième étage. Si le métro est en panne, prends le bus 45 : l'arrêt est à côté de la gare. Et si tu te perds, appelle-moi ! À samedi !",
      "explanation": "Directions use tu imperatives (\"prends\", \"descends\", \"tourne\", \"va tout droit\"), with transport vocabulary (\"la correspondance\", \"le terminus\", \"l'arrêt\") and place prepositions (\"au coin de\", \"en face de\", \"à côté de\"). Si + present + imperative handles possible problems (\"si le métro est en panne, prends le bus\")."
    }
  ],
  "b1-word-web-world-of-work": [
    {
      "type": "write",
      "prompt": "You have decided to leave your job to start a training course. Write a formal resignation letter (80-140 words) to your employer: say that you are resigning, give the reason and the date of your departure, mention your notice period and any leave remaining, and thank them.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses work vocabulary from the lesson (\"démissionner\", \"le préavis\", \"les congés payés\", \"une formation\", \"le contrat\")",
        "Uses the formal conventions of a letter (\"Madame la Directrice\", \"Je vous prie d'agréer...\")",
        "Uses the future and the futur antérieur or the passé composé to give dates and plans",
        "Uses a polite request with the conditional (\"je vous serais reconnaissant(e) de...\")"
      ],
      "modelAnswer": "Madame la Directrice,\nPar la présente, je vous informe de ma décision de démissionner de mon poste d'assistante commerciale, que j'occupe depuis quatre ans. J'ai en effet été acceptée dans une formation de développeuse web qui commencera en septembre. Conformément à mon contrat, j'effectuerai un préavis d'un mois : mon dernier jour de travail sera donc le 31 juillet. Il me reste six jours de congés payés ; je vous serais reconnaissante de me dire si je peux les prendre avant mon départ. Je tiens à vous remercier pour tout ce que j'ai appris dans l'entreprise.\nJe vous prie d'agréer, Madame la Directrice, l'expression de mes salutations distinguées.\nLaura Petit",
      "explanation": "A resignation letter uses fixed formal formulas (\"par la présente\", \"je vous prie d'agréer\") and work vocabulary (\"démissionner\", \"le préavis\", \"les congés payés\", \"une formation\"). The future gives the dates (\"j'effectuerai\", \"sera\"), and the conditional makes the request polite (\"je vous serais reconnaissante\")."
    }
  ],
  "b1-comprehensive-review-2": [
    {
      "type": "write",
      "prompt": "A French tourist website is publishing short articles about little-known places. Write an article (80-140 words) about a monument, a building or a site in your region: its history, what had happened there before, what it is used for today, and why visitors should go there. Use relative pronouns, the passive and the plus-que-parfait.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses at least three different relative pronouns (\"qui\", \"que\", \"où\", \"dont\")",
        "Uses the passive in at least two tenses (\"il a été construit\", \"il est géré par\", \"il sera rénové\")",
        "Uses the plus-que-parfait for an earlier past (\"le bâtiment avait été abandonné\")",
        "Ends with a recommendation to the reader"
      ],
      "modelAnswer": "Le moulin de Saint-Rémy\nAu bord de la rivière, à cinq kilomètres du village, se trouve un vieux moulin que peu de touristes connaissent. Il a été construit en 1750 par une famille de meuniers dont les descendants vivent encore dans la région. Pendant deux siècles, on y fabriquait la farine de toute la vallée. Après la guerre, le moulin avait été abandonné et le toit s'était effondré. En 2010, il a été racheté par une association qui l'a entièrement restauré. Aujourd'hui, il est géré par des bénévoles et on peut y voir la grande roue qui tourne encore. Allez-y au printemps, quand la rivière est haute : c'est un endroit où le temps semble s'arrêter.",
      "explanation": "Relatives link the information (\"un moulin que peu de touristes connaissent\", \"une famille dont les descendants\", \"une association qui\", \"un endroit où\"). The passive presents the history (\"il a été construit\", \"il a été racheté\", \"il est géré\"), and the plus-que-parfait goes further back (\"avait été abandonné\", \"s'était effondré\")."
    }
  ],
  "b1-challenge-dialogue-marathon": [
    {
      "type": "write",
      "prompt": "You've just moved into a flat in France and the water heater has stopped working. Write a phone dialogue (80-140 words) between you and your landlord or landlady: explain the problem, what you had already tried, ask for a repair, and agree on a time for a plumber to come.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses polite formulas and the conditional (\"je suis désolé(e) de vous déranger\", \"pourriez-vous...\", \"ce serait possible...\")",
        "Uses the plus-que-parfait for what you had already done (\"j'avais déjà vérifié...\")",
        "Uses object pronouns or y / en in at least two different tenses (\"je l'ai rallumé\", \"il y passera\", \"je vais l'appeler\")",
        "Uses si + present + future to agree on the arrangement"
      ],
      "modelAnswer": "— Allô, madame Leroy ? Bonjour, c'est Ana Silva, votre locataire du 8, rue des Écoles. Je suis désolée de vous déranger un dimanche.\n— Bonjour, Ana. Qu'est-ce qui se passe ?\n— Le chauffe-eau ne marche plus depuis ce matin. Hier soir, il faisait un bruit bizarre. J'avais déjà vérifié les fusibles, puis je l'ai éteint et rallumé, mais il n'y a toujours pas d'eau chaude.\n— Ah, c'est embêtant. Je vais appeler le plombier demain matin.\n— Merci beaucoup. Pourriez-vous lui demander de passer le soir ? Je travaille toute la journée.\n— Je vais le lui demander. S'il est libre, il y passera vers dix-huit heures.\n— Parfait. Si je ne suis pas là, ma voisine lui ouvrira.\n— Très bien. Bonne soirée !",
      "explanation": "Polite formulas and the conditional keep the call courteous (\"je suis désolée de vous déranger\", \"pourriez-vous\"). The plus-que-parfait explains what had been tried before (\"j'avais déjà vérifié\"), pronouns appear in several tenses (\"je l'ai éteint\", \"je vais le lui demander\", \"il y passera\"), and si + present + future fixes the arrangement."
    }
  ],
  "b1-challenge-past-tenses": [
    {
      "type": "write",
      "prompt": "Write a short story (80-140 words) that begins with this sentence: « Ce soir-là, quand je suis rentré(e) chez moi, la porte était ouverte. » Tell what happened, using all the past tenses you know.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses the imparfait for the scene and the passé composé for the events",
        "Uses the plus-que-parfait for what had happened before (\"quelqu'un était entré\")",
        "Uses \"venir de\" or \"être en train de\" in the imparfait",
        "Makes participles agree after être and after a preceding direct object (\"elle était partie\", \"les clés que j'avais perdues\")"
      ],
      "modelAnswer": "Ce soir-là, quand je suis rentrée chez moi, la porte était ouverte. Il faisait nuit et toutes les lumières étaient éteintes. J'avais très peur : quelqu'un était entré pendant mon absence ! J'ai pris mon téléphone et j'étais en train d'appeler la police quand j'ai entendu de la musique dans le salon. J'ai allumé la lumière… et vingt personnes ont crié « Surprise ! ». Mes amis venaient d'installer des ballons partout. En fait, ma sœur avait retrouvé les clés que j'avais perdues la semaine précédente, et elle avait organisé une fête pour mon anniversaire, que j'avais complètement oublié. Je n'avais jamais eu une aussi belle surprise !",
      "explanation": "The imparfait sets the scene (\"il faisait nuit\", \"j'avais très peur\"), the passé composé tells the events (\"j'ai pris\", \"ont crié\"), \"j'étais en train d'appeler\" and \"venaient d'installer\" give the action in progress and the recent past, and the plus-que-parfait goes further back (\"était entré\", \"avait retrouvé les clés que j'avais perdues\")."
    }
  ],
  "b1-challenge-a-week-in-marseille-2": [
    {
      "type": "write",
      "prompt": "You're spending a week in Marseille and today was eventful: you had to see a doctor, return a faulty purchase and you met your neighbours. Write a travel diary entry (80-140 words) about your day: what happened, what people told you to do, how you felt, and what you plan for tomorrow.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Tells the day with the passé composé and the imparfait, with correct auxiliaries and agreement",
        "Reports instructions or advice with dire de + infinitive or il faut que + subjunctive (\"le médecin m'a dit de...\", \"il faut que je reprenne...\")",
        "Uses at least one object pronoun with a compound tense (\"je l'ai rapporté\", \"ils m'ont invité(e)\")",
        "Ends with plans in the future or the near future"
      ],
      "modelAnswer": "Mercredi, Marseille\nQuelle journée ! Ce matin, j'avais mal à la gorge, alors je suis allé chez un médecin du Vieux-Port. Il m'a dit de boire beaucoup d'eau et de me reposer, et il m'a prescrit des pastilles. Ensuite, j'ai rapporté le chargeur que j'avais acheté lundi, parce qu'il ne marchait pas. Le vendeur ne voulait pas me le rembourser, mais il me l'a échangé contre un autre. Ce soir, j'ai enfin rencontré mes voisins, un couple très sympa qui habite ici depuis trente ans. Ils m'ont invité à prendre l'apéritif sur leur terrasse et m'ont conseillé plein d'endroits. Demain, il faut que je me repose un peu, mais j'irai quand même voir les calanques !",
      "explanation": "The passé composé tells the day's events (\"je suis allé\", \"j'ai rapporté\", \"ils m'ont invité\") and the imparfait the background (\"j'avais mal\", \"il ne marchait pas\"). Advice is reported with dire de + infinitive (\"il m'a dit de boire\"), pronouns go before the auxiliary (\"il me l'a échangé\"), and \"il faut que je me repose\" and the future give tomorrow's plans."
    }
  ]
});
