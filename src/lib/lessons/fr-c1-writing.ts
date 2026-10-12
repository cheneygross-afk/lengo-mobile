// Synced from cheneygross-afk/lengo:src/lib/lessons/fr-c1-writing.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { UnitWriting } from "./unitWriting";
import { spaced } from "./fr-units";

// Extra writing tasks for this level's units, so every unit asks the learner to
// write at least three times: keyed by the lesson each is added to (see
// unitWriting.ts). Marked by the AI writing feedback like every writing task.
export const FR_C1_WRITING: UnitWriting = spaced({
  "c1-subjunctive-nuances-1": [
    {
      "type": "write",
      "prompt": "A book-lovers' website asks members to recommend 'the book that changed my life'. Write your post: present the book, say why it is the best (or the most unsettling) one you have ever read and what makes it unique. Use the subjunctive after superlatives, le seul / le premier and negative antecedents, and keep the indicative where you state an objective fact.",
      "minWords": 120,
      "maxWords": 200,
      "rubric": [
        "Uses a superlative + subjunctive for a subjective judgement (\"le roman le plus déroutant que j'aie jamais lu\")",
        "Uses le seul / l'unique + subjunctive (\"le seul personnage qui m'ait mis mal à l'aise\")",
        "Uses a negative or indefinite antecedent + subjunctive (\"il n'y a personne qui puisse\", \"je ne connais aucun écrivain qui dise\", \"un roman qui vous fasse réfléchir\")",
        "Keeps the indicative for an objective fact after le premier or a superlative (\"le premier roman que notre professeur nous avait demandé de lire\")"
      ],
      "modelAnswer": "Le livre qui a changé ma vie ? Sans hésiter, L'Étranger d'Albert Camus. C'est sans doute le roman le plus déroutant que j'aie jamais lu, et pourtant c'est celui que je relis chaque été.\n\nJe l'ai découvert à dix-sept ans, en terminale. C'était le premier roman que notre professeur nous avait demandé de lire en entier, et je m'attendais à m'ennuyer. Au contraire : Meursault est le seul personnage de fiction qui m'ait vraiment mis mal à l'aise. Il n'y a personne, dans mon entourage, qui puisse rester indifférent à sa froideur.\n\nCe qui rend ce livre unique, c'est son style. Je ne connais aucun écrivain qui dise autant de choses avec des phrases aussi simples. Camus a d'ailleurs été l'un des plus jeunes lauréats du prix Nobel de littérature, et on comprend pourquoi.\n\nSi vous cherchez un roman court qui vous fasse réfléchir longtemps, c'est le meilleur conseil que je puisse vous donner.",
      "explanation": "Subjective superlatives and le seul take the subjunctive (\"le plus déroutant que j'aie jamais lu\", \"le seul personnage qui m'ait mis mal à l'aise\", \"le meilleur conseil que je puisse\"), as do negative antecedents and wished-for qualities (\"il n'y a personne qui puisse\", \"aucun écrivain qui dise\", \"un roman qui vous fasse réfléchir\"). \"Le premier roman que notre professeur nous avait demandé de lire\" stays in the indicative because it states a chronological fact, not a judgement."
    }
  ],
  "c1-transform-qui-que-quoi-que": [
    {
      "type": "write",
      "prompt": "Your best friend is leaving to work abroad for two years. Write the short farewell speech you will give at her leaving party: recall a memory, praise her and send her off with your wishes. Use qui que, quoi que, où que and their set phrases (quoi qu'il arrive, qui que ce soit, coûte que coûte), and show that you can tell quoi que from quoique.",
      "minWords": 120,
      "maxWords": 200,
      "rubric": [
        "Uses où que / quoi que / qui que + subjunctive (\"où que tu ailles\", \"quoi que tu fasses\", \"qui que tu rencontres\")",
        "Uses at least two set phrases: \"quoi qu'il arrive\", \"qui que ce soit\", \"quoi que ce soit\", \"coûte que coûte\"",
        "Uses quoique (although) + subjunctive correctly alongside quoi que (whatever)",
        "Has the structure of a speech: address to the audience, a memory, wishes and a toast"
      ],
      "modelAnswer": "Chers amis, chère Léa,\n\nJe ne serai pas long, promis : je sais que le buffet vous attend.\n\nLéa, je te connais depuis la maternelle. Je me souviens encore du jour où tu as décidé, à huit ans, d'apprendre le chinois avec un vieux dictionnaire trouvé au grenier. Tout le monde riait, mais toi, tu as continué coûte que coûte. Aujourd'hui, tu pars travailler deux ans à Shanghai, et personne ici n'en est surpris.\n\nQuoique je sois triste de te voir partir, je suis surtout fier de toi. Où que tu ailles, tu sauras te faire une place. Qui que tu rencontres là-bas, tu trouveras le moyen de le faire rire. Et quoi que tu fasses, n'oublie pas que tu as ici une bande d'amis qui t'attend.\n\nSi tu as besoin de quoi que ce soit, appelle-nous, à n'importe quelle heure, quoi qu'il arrive. Et ne laisse jamais qui que ce soit te dire que c'est impossible.\n\nAlors levons nos verres : à Léa, et à ses prochaines aventures !",
      "explanation": "The universal relatives take the subjunctive: \"où que tu ailles\", \"qui que tu rencontres\", \"quoi que tu fasses\". The set phrases \"coûte que coûte\", \"quoi que ce soit\", \"quoi qu'il arrive\" and \"qui que ce soit\" are frozen and very frequent. \"Quoique je sois triste\", written as one word, means although and also takes the subjunctive."
    }
  ],
  "c1-concession-2": [
    {
      "type": "write",
      "prompt": "You run an amateur choir in your town and want new members. Write the text of a flyer inviting everyone to join: who can come, what the choir does and the practical details. Use quel que soit several times with correct agreement, plus at least one other concessive structure with the right mood.",
      "minWords": 120,
      "maxWords": 200,
      "rubric": [
        "Uses quel / quelle / quels / quelles que soit / soient, agreeing with the noun (\"quel que soit votre âge\", \"quelle que soit votre expérience\", \"quelles que soient vos préférences\")",
        "Adds another concessive structure with the right mood: invariable quelque + adjective + que + subjunctive, bien que + subjunctive, or même si + indicative",
        "Addresses readers with vous and imperatives, as a flyer does",
        "Gives practical details (place, times, cost)"
      ],
      "modelAnswer": "Vous aimez chanter ? Rejoignez la chorale Les Voix du Canal !\n\nQuel que soit votre âge, quelle que soit votre expérience, vous êtes les bienvenus. Notre chorale réunit une trentaine de personnes de 18 à 82 ans : étudiants, retraités, infirmières, boulangers… Quelles que soient vos préférences musicales, vous trouverez votre bonheur dans notre répertoire, qui va de la chanson française au gospel en passant par Mozart.\n\nVous ne savez pas lire une partition ? Aucun problème. Bien que certains d'entre nous aient étudié la musique, la plupart ont appris en chantant. Quelque timides que vous soyez, notre cheffe de chœur saura vous mettre à l'aise.\n\nLes répétitions ont lieu tous les mardis, de 19 h 30 à 21 h, à la salle des fêtes, place de la Mairie. La cotisation annuelle est de 60 euros (tarif réduit pour les étudiants), et la première séance est gratuite.\n\nVenez nous écouter lors de notre concert du 14 décembre, quel que soit le temps !",
      "explanation": "Quel que agrees with the noun that follows être: \"quel que soit votre âge\", \"quelle que soit votre expérience\", \"quelles que soient vos préférences\". \"Quelque timides que vous soyez\" uses invariable quelque before an adjective, and \"bien que certains d'entre nous aient étudié\" takes the subjunctive."
    }
  ],
  "c1-concession-4": [
    {
      "type": "write",
      "prompt": "For a week you've been trying to fix a problem that refuses to go away (a leak in your flat, a broken laptop, a noisy neighbour: you choose). Write a diary entry about it: what you tried, why nothing worked and how you feel. Use avoir beau + infinitive and quand bien même + conditional, plus at least one other concessive structure.",
      "minWords": 120,
      "maxWords": 200,
      "rubric": [
        "Uses avoir beau + infinitive at least twice, in different tenses (\"j'ai beau appeler\", \"il avait beau jurer\")",
        "Uses quand bien même + conditional (\"quand bien même le syndic me rappellerait demain, j'enverrai...\")",
        "Adds another concessive or opposition marker: \"malgré\" + noun, \"même si\" + indicative, \"pourtant\"",
        "Follows diary conventions: a date, the first person and personal reactions"
      ],
      "modelAnswer": "Le 12 octobre\n\nCinq jours que ça dure. Cinq jours que le plafond de la salle de bains goutte dans un seau que je vide matin et soir.\n\nJ'ai beau appeler le syndic deux fois par jour, je tombe toujours sur un répondeur. J'ai eu beau laisser des messages de plus en plus polis, puis de moins en moins polis, personne ne m'a rappelée. Quant au voisin du dessus, il avait beau jurer lundi qu'il n'y avait aucune fuite chez lui, j'ai bien vu le plombier sortir de son appartement mardi soir.\n\nMalgré ma patience légendaire, je commence à craquer. Même si je sais que ce n'est pas un drame, j'ai du mal à dormir avec ce « plic, plic » dans le noir.\n\nCe soir, j'ai pris une décision : quand bien même le syndic me rappellerait demain avec mille excuses, j'enverrai une lettre recommandée. Et quand bien même cela ne servirait à rien, au moins j'aurai essayé.\n\nPourtant, en écrivant ces lignes, je ris un peu. Dans un an, ce sera une bonne anecdote.",
      "explanation": "\"J'ai beau appeler\", \"j'ai eu beau laisser\" and \"il avait beau jurer\" express effort that changes nothing: avoir is conjugated and the infinitive stays invariable. \"Quand bien même le syndic me rappellerait\" takes the conditional even though the main clause is in the future. \"Malgré ma patience\" and \"même si je sais\" (indicative) add further concession."
    }
  ],
  "c1-transform-verb-to-noun": [
    {
      "type": "write",
      "prompt": "You work for a regional tourist office. Write the short summary of last summer's figures for the board's report: how visitor numbers, spending, hotel occupancy and the use of public transport changed, with one or two likely reasons. Turn clauses into noun phrases wherever a report would.",
      "minWords": 120,
      "maxWords": 200,
      "rubric": [
        "Turns clauses into noun phrases: the subject becomes de + noun and the adverb an adjective (\"une nette progression de la fréquentation\", \"un léger recul des dépenses\")",
        "Uses nouns of change with the right gender: la hausse, la baisse, le recul, l'augmentation, la progression, la croissance",
        "Keeps each noun's preposition (\"une hausse de 8 %\", \"le recours aux transports en commun\")",
        "Keeps a neutral, impersonal report register (no je, precise figures, causes with \"lié à\" or \"s'explique par\")"
      ],
      "modelAnswer": "Bilan de la saison estivale\n\nLa saison a été marquée par une nette progression de la fréquentation touristique : le nombre de visiteurs a enregistré une hausse de 8 % par rapport à l'an dernier. Cette augmentation s'explique en grande partie par le retour de la clientèle étrangère, en particulier belge et néerlandaise, ainsi que par la réouverture du musée des Beaux-Arts.\n\nEn revanche, on observe un léger recul des dépenses moyennes par visiteur (- 3 %), lié à la hausse des prix de l'hébergement et à la multiplication des séjours courts. Le taux d'occupation hôtelière, quant à lui, est resté stable, à 74 %, malgré l'ouverture de deux nouveaux établissements en centre-ville.\n\nEnfin, il convient de souligner la forte croissance du recours aux transports en commun : la fréquentation des navettes gratuites entre la gare et le littoral a progressé de 15 %. La prolongation de ce service jusqu'à fin octobre est à l'étude.",
      "explanation": "The summary uses noun phrases where everyday French would use verbs: \"une nette progression de la fréquentation\" (la fréquentation a nettement progressé), \"un léger recul des dépenses\", \"la forte croissance du recours aux transports\". Adverbs become adjectives (nettement → nette, fortement → forte), subjects become de + noun, and nouns keep their prepositions (\"une hausse de 8 %\", \"le recours à\")."
    }
  ],
  "c1-nominalization-5": [
    {
      "type": "write",
      "prompt": "Your neighbourhood association is applying to the town hall for a grant. Write the short project proposal for making the local library more accessible (to elderly people, families and people with disabilities): the current situation, the aims, the planned actions and the expected results. Use nouns with their correct prepositions throughout.",
      "minWords": 120,
      "maxWords": 200,
      "rubric": [
        "Uses nouns followed by their correct preposition (\"l'accès à\", \"la lutte contre\", \"la participation à\", \"le recours à\", \"l'intérêt pour\", \"le respect de\")",
        "Presents aims and actions as noun phrases (\"amélioration de l'accès\", \"installation d'un ascenseur\", \"création d'un service\")",
        "Organises the proposal under clear headings: constat, objectifs, actions prévues, résultats attendus",
        "Keeps a formal, compact register"
      ],
      "modelAnswer": "Projet « Une bibliothèque pour tous »\n\nConstat\nLa bibliothèque du quartier Saint-Michel souffre d'un manque de visibilité et d'une fréquentation en baisse. L'accès au premier étage reste impossible aux personnes à mobilité réduite, et l'intérêt des familles pour les animations proposées est faible, faute d'horaires adaptés.\n\nObjectifs\n– la lutte contre l'isolement des personnes âgées ;\n– l'amélioration de l'accès aux collections pour les personnes handicapées ;\n– une plus large participation des familles à la vie culturelle du quartier.\n\nActions prévues\n– installation d'un ascenseur et d'une rampe d'accès ;\n– ouverture de la bibliothèque le samedi après-midi ;\n– création d'un service de portage de livres à domicile, en partenariat avec le centre social ;\n– recours à des bénévoles pour l'animation d'ateliers de lecture.\n\nRésultats attendus\nUne hausse de 20 % de la fréquentation d'ici deux ans, une diversification du public et le respect des normes d'accessibilité en vigueur. L'association sollicite une subvention de 15 000 euros pour la réalisation de ce projet.",
      "explanation": "The proposal builds its sections on noun phrases (\"installation d'un ascenseur\", \"création d'un service\", \"ouverture de la bibliothèque\"), and each noun takes its own preposition: \"l'accès à\", \"la lutte contre\", \"l'intérêt pour\", \"la participation à\", \"le recours à\", \"le respect de\". This compact nominal style is what French administrative proposals expect."
    }
  ],
  "c1-participles-infinitives-2": [
    {
      "type": "write",
      "prompt": "Write a short anecdote for a travel blog about an evening abroad when things didn't go to plan (a missed last train, a storm, a closed hotel). Tell it compactly, with absolute participial clauses (le dîner terminé...), perfect participles (ayant compris...) and at least one gérondif whose subject is the subject of the main clause.",
      "minWords": 120,
      "maxWords": 200,
      "rubric": [
        "Uses absolute participial clauses with their own subject (\"le dîner terminé\", \"les guichets fermés\", \"le jour à peine levé\")",
        "Uses the perfect participle with ayant / étant and correct agreement (\"ayant mal lu\", \"étant arrivée la première\")",
        "Uses gérondifs and participles whose implied subject is the subject of the main clause (no dangling participles)",
        "Tells a coherent story with a beginning, a turning point and an ending"
      ],
      "modelAnswer": "La nuit où nous avons dormi à la gare\n\nC'était notre dernier soir à Turin. Le dîner terminé, nous avons flâné dans les rues sans regarder l'heure. Ayant mal lu les horaires, nous sommes arrivés à la gare à 23 h 10 : le dernier train pour Milan était parti cinq minutes plus tôt.\n\nLes guichets fermés, les taxis introuvables, il ne nous restait qu'une solution : attendre le premier train du matin. Étant arrivée la première sur le quai, ma sœur s'est installée sur un banc avec nos sacs. En fouillant dans mon sac à dos, j'ai trouvé un paquet de biscuits et un jeu de cartes. La partie commencée, nous avons vite oublié le froid.\n\nVers deux heures, un agent de sécurité, nous ayant vus grelotter, nous a ouvert la salle d'attente chauffée. La fatigue aidant, nous nous sommes endormis sur les sièges en plastique.\n\nLe jour à peine levé, nous avons pris le train de 6 h 10, épuisés mais ravis. C'est sans doute le meilleur souvenir de ce voyage.",
      "explanation": "Absolute clauses with their own subject (\"le dîner terminé\", \"les guichets fermés\", \"la partie commencée\", \"le jour à peine levé\") compress the time line. Perfect participles express an earlier cause (\"ayant mal lu\", \"étant arrivée\", agreeing with ma sœur), and the gérondif \"en fouillant\" shares its subject with the main verb. In \"nous ayant vus grelotter\", vus agrees because nous are the ones shivering."
    }
  ],
  "c1-participles-infinitives-6": [
    {
      "type": "write",
      "prompt": "A creative-writing website asks readers to describe 'five minutes in my street'. Write a description of what you see, hear and smell from your window or balcony at a particular moment of the day. Use verbs of perception and laisser + infinitive, with correct word order, pronoun placement and participle agreement.",
      "minWords": 120,
      "maxWords": 200,
      "rubric": [
        "Uses perception verbs + infinitive in both word orders (\"je vois passer les cyclistes\", \"je regarde la rue se réveiller\")",
        "Uses laisser + infinitive (\"pour laisser entrer l'air frais\", \"je me laisse bercer\")",
        "Places object pronouns before the perception verb (\"je les entends rire\", \"je l'entends monter\")",
        "Includes a compound tense with the participle agreeing before an infinitive (\"la voisine, que j'ai vue partir\")"
      ],
      "modelAnswer": "Sept heures du matin, rue des Tanneurs. De mon balcon, je regarde la rue se réveiller.\n\nEn bas, j'entends le rideau de fer de la boulangerie se lever dans un grincement familier. Le boulanger sort, pose deux cagettes de croissants sur le comptoir et ouvre grand la porte pour laisser entrer l'air frais. Bientôt, je sens monter jusqu'à moi l'odeur du pain chaud.\n\nAu coin de la rue, je vois passer les premiers cyclistes, emmitouflés jusqu'aux yeux. Deux écoliers attendent le bus en se chamaillant ; je les entends rire et se disputer une carte à collectionner. Leur mère, qui hésitait à les laisser partir seuls, les surveille discrètement depuis sa fenêtre.\n\nPuis la voisine du troisième, que j'ai vue partir hier soir avec une grosse valise, revient en taxi, l'air épuisé. Je l'entends monter l'escalier en soupirant.\n\nJe bois mon café sans bouger. Je me laisse bercer par ce petit théâtre ordinaire, jusqu'à ce que les cloches de Saint-Pierre sonnent la demie.",
      "explanation": "Perception verbs take a bare infinitive whose subject can come before or after it (\"je vois passer les premiers cyclistes\", \"je regarde la rue se réveiller\"), and object pronouns go before the perception verb (\"je les entends rire\", \"je l'entends monter\"). \"Que j'ai vue partir\" agrees because the neighbour does the leaving, and \"pour laisser entrer l'air frais\" and \"je me laisse bercer\" show laisser + infinitive."
    }
  ],
  "c1-passive-impersonal-2": [
    {
      "type": "write",
      "prompt": "A new flatmate is moving in while you are away for a week. Write the note you leave on the kitchen table explaining how the flat works: keys, heating, rubbish, what's left in the fridge and what's missing, the neighbours. Use the impersonal frames il s'agit de, il suffit de, il reste, il manque, il arrive que and il paraît que.",
      "minWords": 100,
      "maxWords": 180,
      "rubric": [
        "Uses il s'agit de with impersonal il (\"il s'agit de la petite clé ronde\", never \"la clé s'agit de\")",
        "Uses il suffit de, il reste and il manque with the real subject after a singular verb (\"il reste des légumes\", \"il manque du café\")",
        "Uses il arrive que + subjunctive and il paraît que + indicative",
        "Keeps the friendly tone of a note (tu, short sections, a sign-off)"
      ],
      "modelAnswer": "Salut Mehdi,\n\nBienvenue ! Je pars une semaine à Lisbonne, alors voici quelques infos pour que tu te sentes chez toi.\n\nLes clés : il y en a deux sur le trousseau. Pour la porte de l'immeuble, il s'agit de la petite clé ronde ; l'autre ouvre la cave. Pour l'interphone, il suffit d'appuyer deux fois sur le bouton.\n\nLe chauffage : il arrive que la chaudière se mette en sécurité quand il fait très froid. Pas de panique, il suffit de la relancer avec le bouton rouge.\n\nLes poubelles : les jaunes sortent le mardi soir, les autres le jeudi soir.\n\nDans le frigo, il reste des légumes et une soupe, sers-toi ! En revanche, il manque du café et du papier toilette : il y a une supérette juste en face.\n\nLes voisins sont adorables, mais il paraît que celui du deuxième n'aime pas le bruit après 22 h.\n\nS'il y a le moindre problème, il te suffit de m'envoyer un texto.\n\nÀ dimanche !\nCamille",
      "explanation": "Impersonal il lets the note talk about things without a personal subject: \"il s'agit de la petite clé ronde\", \"il suffit d'appuyer\", \"il te suffit de\". With il reste and il manque the real subject comes after the verb, which stays singular (\"il reste des légumes\", \"il manque du café\"). \"Il arrive que\" takes the subjunctive (\"se mette\"), while \"il paraît que\" takes the indicative."
    }
  ],
  "c1-passive-impersonal-5": [
    {
      "type": "write",
      "prompt": "Last weekend everything went wrong on a trip to Marseille: your bag was stolen, you were refused entry to a bar and you were overcharged in a restaurant. Write a post for a travel forum warning other travellers. Use se faire + infinitive for what happened to you and se voir + infinitive for what you were refused or offered.",
      "minWords": 120,
      "maxWords": 200,
      "rubric": [
        "Uses se faire + infinitive for things that happened to you, with fait invariable (\"je me suis fait voler mon sac\", \"nous nous sommes fait avoir\")",
        "Uses se voir + infinitive for being refused or offered something (\"je me suis vu refuser l'entrée\", \"nous nous sommes vu proposer\")",
        "Uses at least one ordinary passive with an agent (\"la scène avait été filmée par une caméra\")",
        "Ends with practical advice for other travellers"
      ],
      "modelAnswer": "Marseille : trois pièges à éviter\n\nJe reviens d'un week-end à Marseille et je voudrais vous éviter les mésaventures que j'ai vécues.\n\nD'abord, samedi midi, je me suis fait voler mon sac à dos sur le Vieux-Port, en pleine foule, pendant que je prenais une photo. Passeport, carte bancaire, tout y était. Au commissariat, on m'a dit que la scène avait sans doute été filmée par une caméra, mais je n'ai jamais eu de nouvelles.\n\nEnsuite, le soir, je me suis vu refuser l'entrée d'un bar, faute de pièce d'identité. Logique, me direz-vous, mais le videur aurait pu être plus aimable.\n\nEnfin, dimanche, mon ami et moi, nous nous sommes fait avoir dans un restaurant du Panier : 38 euros pour deux bols de soupe de poissons ! Nous nous étions vu proposer « la spécialité du jour » sans que le prix soit annoncé.\n\nMes conseils : gardez vos papiers dans une poche intérieure, demandez toujours les prix et ne vous laissez pas faire.\n\nMalgré tout, j'y retournerai : la ville est magnifique.",
      "explanation": "Se faire + infinitive presents the speaker as the victim (\"je me suis fait voler mon sac\", \"nous nous sommes fait avoir\"), and fait never agrees. Se voir + infinitive expresses what someone is refused or offered (\"je me suis vu refuser l'entrée\", \"nous nous étions vu proposer\"), with vu invariable because the subject does not perform the infinitive. \"Avait été filmée par une caméra\" is an ordinary passive with a named agent."
    }
  ],
  "c1-literary-tenses-2": [
    {
      "type": "write",
      "prompt": "A local heritage website is publishing short biographies of the people who gave their names to the town's streets. Write the entry for a real or invented figure (a doctor, a scientist, an artist...). Narrate the key events of the life in the passé simple, with irregular forms such as naquit, fut, eut, vint, dut, vécut, mourut, and use the imparfait for background.",
      "minWords": 120,
      "maxWords": 200,
      "rubric": [
        "Narrates the key events in the passé simple, including irregular forms (\"naquit\", \"obtint\", \"vint\", \"dut\", \"fut\", \"mourut\")",
        "Uses the imparfait for background and description (\"son père était cordonnier\")",
        "Uses at least one plural passé simple form (\"elles eurent\", \"ils durent\")",
        "Keeps the neutral, informative register of a biographical entry"
      ],
      "modelAnswer": "Rue Jeanne-Morel (1872-1951)\n\nJeanne Morel naquit à Limoges en 1872, dans une famille modeste : son père était cordonnier et sa mère faisait des ménages. Élève brillante, elle obtint une bourse et vint à Paris à dix-huit ans pour étudier la médecine, à une époque où les femmes étaient encore très rares dans les amphithéâtres.\n\nElle dut affronter l'hostilité de certains professeurs, mais elle ne renonça jamais. En 1899, elle fut l'une des premières femmes à soutenir une thèse de médecine en France. Elle revint alors à Limoges, où elle ouvrit un dispensaire gratuit pour les enfants des quartiers ouvriers.\n\nPendant la Première Guerre mondiale, elle dirigea un hôpital militaire. Ses infirmières et elle eurent à soigner des milliers de blessés ; beaucoup lui durent la vie.\n\nElle vécut le reste de sa vie dans le quartier du Pont-Neuf et mourut en 1951. La ville lui rendit hommage en donnant son nom à la rue où se trouvait son dispensaire.",
      "explanation": "The key events are in the passé simple, with many irregular forms (\"naquit\", \"obtint\", \"vint\", \"dut\", \"fut\", \"revint\", \"eurent\", \"durent\", \"vécut\", \"mourut\"), while the imparfait gives the background (\"son père était cordonnier\", \"les femmes étaient encore très rares\"). This is the standard tense pattern of written biographies and encyclopaedia entries."
    }
  ],
  "c1-contrast-narrative-tenses": [
    {
      "type": "write",
      "prompt": "Your town's magazine is running a series on local history. Write a short article about a dramatic event in the town's past (a fire, a flood, a famous visit: real or invented). Tell it in the présent de narration, as French historians and journalists do, with the passé composé for earlier events, the future for later consequences, and one narrative imparfait (Deux ans plus tard, ...) to close.",
      "minWords": 120,
      "maxWords": 200,
      "rubric": [
        "Narrates the main events in the présent de narration (\"un feu se déclare\", \"les habitants forment une chaîne\")",
        "Places other events relative to that present: passé composé for what came before, future for what followed (\"la reconstruction prendra dix ans\")",
        "Uses a narrative imparfait with a time marker for a single completed event (\"Deux ans plus tard, la halle ouvrait ses portes\")",
        "Makes the chronology clear with dates and time markers"
      ],
      "modelAnswer": "L'incendie de 1887\n\nLe 14 août 1887, il fait une chaleur écrasante à Saint-Aubin. Depuis trois semaines, il n'est pas tombé une goutte de pluie, et le bois des vieilles maisons du centre est sec comme de l'amadou.\n\nVers dix heures du soir, un feu se déclare dans l'atelier d'un menuisier, rue des Tonneliers. Le vent du sud, qui s'est levé dans l'après-midi, pousse les flammes vers la place du marché. En moins d'une heure, une vingtaine de maisons brûlent. Les habitants forment une chaîne jusqu'à la rivière, mais les seaux ne suffisent pas.\n\nAu petit matin, le bilan est lourd : quarante-trois maisons détruites, deux cents sans-abri, mais, miracle, aucune victime. Le préfet vient sur place le jour même et promet des aides.\n\nLa reconstruction prendra dix ans. Elle donnera à Saint-Aubin le visage qu'on lui connaît aujourd'hui : des maisons en pierre, des rues plus larges et une caserne de pompiers. Deux ans après l'incendie, la nouvelle halle en fonte ouvrait déjà ses portes sur la place du marché.",
      "explanation": "The présent de narration makes the past event vivid (\"il fait\", \"un feu se déclare\", \"le préfet vient\"), with the passé composé for what came before (\"il n'est pas tombé\", \"qui s'est levé\") and the future for what came after (\"la reconstruction prendra\", \"elle donnera\"). The final narrative imparfait (\"la nouvelle halle ouvrait déjà ses portes\") presents a single completed event as a scene, a common closing device in history writing and journalism."
    }
  ],
  "c1-contrast-contract-prepositions": [
    {
      "type": "write",
      "prompt": "You run a small bike-rental business in Annecy. Write the 'Conditions de location' section for your website: deposit, booking, late return, damage, cancellation and prices. Use the formal prepositional phrases of contracts: à titre de, sous réserve de, à défaut de, faute de, en cas de, conformément à, en vertu de.",
      "minWords": 120,
      "maxWords": 200,
      "rubric": [
        "Uses at least four contract prepositions with the right complement (\"en cas de retard\", \"conformément aux tarifs\", \"sous réserve de son bon état\", \"en vertu de l'article 4\")",
        "Uses à défaut de and faute de (quoi) for what happens when something is missing",
        "Uses à titre de for the status of a sum or information (\"à titre de caution\", \"à titre indicatif\")",
        "Keeps the impersonal register of terms and conditions: numbered points, le locataire, the passive"
      ],
      "modelAnswer": "Conditions de location\n\n1. Caution. Une somme de 300 euros est demandée à titre de caution lors de la remise du vélo. Elle est restituée au retour du matériel, sous réserve de son bon état.\n\n2. Réservation. Toute réservation n'est confirmée qu'à réception d'un acompte de 30 %. À défaut de paiement dans les 48 heures, la réservation est annulée.\n\n3. Retard. En cas de retard supérieur à une heure, une journée supplémentaire est facturée au locataire, conformément aux tarifs affichés en magasin.\n\n4. Dommages. Le locataire est responsable du vélo pendant toute la durée de la location. En cas de vol ou de dégradation, la caution peut être conservée en tout ou en partie, en vertu de l'article 4 du contrat.\n\n5. Annulation. Toute annulation doit être signalée par écrit au plus tard 24 heures avant la date prévue, faute de quoi l'acompte reste acquis à l'entreprise.\n\n6. Tarifs. Les prix figurant sur ce site sont communiqués à titre indicatif et peuvent évoluer. Les vélos sont loués sous réserve de disponibilité.",
      "explanation": "Contract French relies on fixed prepositional phrases: \"à titre de caution\" and \"à titre indicatif\" give the status of a sum or a piece of information, \"sous réserve de\" sets a condition, \"à défaut de paiement\" and \"faute de quoi\" state what happens if something is missing, and \"en cas de\", \"conformément à\" and \"en vertu de\" link each rule to its trigger or legal basis. The passive (\"est facturée\", \"peut être conservée\") keeps the text impersonal."
    }
  ],
  "c1-prepositions-precision-5": [
    {
      "type": "write",
      "prompt": "You've just finished a two-week work trip that took you from Québec to the Caribbean via mainland France and Corsica. Write a post for your personal travel blog summarising the itinerary: the countries, regions, islands and cities you visited and how you travelled between them. Choose every preposition of place and transport deliberately.",
      "minWords": 120,
      "maxWords": 200,
      "rubric": [
        "Uses en / au / aux / à correctly with countries, provinces, regions and cities (\"au Québec\", \"en Gaspésie\", \"au Nouveau-Brunswick\", \"aux Antilles\", \"à Montréal\")",
        "Uses the right preposition with islands and departments (\"en Corse\", \"en Guadeloupe\", \"à la Martinique\", \"dans le Var\")",
        "Uses transport prepositions: en for vehicles you sit inside (\"en voiture\", \"en car\"), à for those you sit on and for walking (\"à vélo\", \"à pied\")",
        "Keeps a personal, lively blog register"
      ],
      "modelAnswer": "Quinze jours de mission, de Montréal à la Martinique\n\nMe voilà rentrée à Lyon après deux semaines de mission qui m'ont fait traverser une bonne partie du monde francophone.\n\nTout a commencé au Québec. J'ai atterri à Montréal, où j'ai passé trois jours en réunion, avant de partir en voiture vers la Gaspésie. Ensuite, direction le Nouveau-Brunswick, en car cette fois, pour rencontrer nos partenaires acadiens à Moncton.\n\nDe là, j'ai pris l'avion pour Paris, puis le TGV jusqu'à Marseille. J'ai passé un week-end dans le Var chez des amis, à vélo la plupart du temps, puis j'ai rejoint la Corse en ferry. À Ajaccio, j'ai loué un scooter pour aller à Porto, sur la côte ouest.\n\nLa dernière étape m'a menée aux Antilles : deux jours en Guadeloupe et un jour à la Martinique, où j'ai visité Saint-Pierre à pied.\n\nLe trajet le plus pénible ? Le vol retour, dans un avion plein d'enfants surexcités. Mais j'ai déjà envie de repartir, peut-être en Belgique ou au Sénégal l'an prochain !",
      "explanation": "Feminine countries and regions take en (\"en Gaspésie\", \"en Guadeloupe\", \"en Corse\", \"en Belgique\"), masculine ones au (\"au Québec\", \"au Nouveau-Brunswick\", \"au Sénégal\"), plurals aux (\"aux Antilles\") and cities à. French departments take dans le (\"dans le Var\"), and some islands traditionally take à la (\"à la Martinique\"). For transport, en is used for vehicles you sit inside (\"en voiture\", \"en car\", \"en ferry\") and à for those you sit on or for walking (\"à vélo\", \"à pied\")."
    }
  ],
  "c1-etre-avoir-faire-3": [
    {
      "type": "write",
      "prompt": "You moved to Paris three weeks ago for a new job. Write an informal email to a friend back home about how you're settling in: what you're getting used to, what drives you mad and a funny moment at work. Use idioms with faire, and some with avoir and être.",
      "minWords": 120,
      "maxWords": 200,
      "rubric": [
        "Uses at least three faire idioms (\"ça fait trois semaines que\", \"se faire à\", \"faire la queue\", \"faire semblant\", \"faire exprès\", \"ne t'en fais pas\")",
        "Uses at least two avoir idioms (\"avoir du mal à\", \"avoir tendance à\", \"en avoir marre\", \"avoir l'air\" with the right agreement)",
        "Uses at least one être idiom (\"ça y est\", \"où en es-tu ?\", \"c'est à toi de\")",
        "Keeps an informal register with tu"
      ],
      "modelAnswer": "Salut Léo,\n\nÇa fait déjà trois semaines que je suis à Paris, et je commence enfin à m'y faire. Ça y est, j'ai un appartement : vingt-deux mètres carrés sous les toits, mais avec vue sur les cheminées !\n\nLe plus dur, c'est le métro. Je n'arrive pas à me faire à la ligne 13 aux heures de pointe : on est tellement serrés que j'ai du mal à respirer. Et j'en ai un peu marre de faire la queue partout, à la boulangerie comme au musée.\n\nAu bureau, mes collègues ont l'air sympas. J'ai tendance à trop parler en réunion, mais personne ne me fait la tête pour l'instant.\n\nLe moment le plus drôle ? Lundi, j'ai salué ma directrice d'un « Salut ! » en croyant que c'était la stagiaire. J'ai fait comme si de rien n'était, et elle a fait semblant de ne pas entendre. Je te jure que je ne l'ai pas fait exprès !\n\nNe t'en fais pas pour moi, tout va bien. Et toi, où en es-tu avec ton projet de déménagement ? C'est à toi de venir me voir maintenant !\n\nBises,\nInès",
      "explanation": "The email weaves in faire idioms (\"ça fait trois semaines que\", \"m'y faire\", \"faire la queue\", \"faire la tête\", \"faire semblant\", \"faire exprès\", \"ne t'en fais pas\"), avoir idioms (\"j'ai du mal à\", \"j'en ai marre\", \"ont l'air sympas\" agreeing with the subject, \"j'ai tendance à\") and être idioms (\"ça y est\", \"où en es-tu\", \"c'est à toi de\"), all in a relaxed tu register."
    }
  ],
  "c1-etre-avoir-faire-6": [
    {
      "type": "write",
      "prompt": "You've just had your kitchen renovated by a local company. Write an online review: what you had done, how the work went, what pleased you and what drove you mad. Use faire faire and se faire faire for work done by others, rendre + adjective for effects, and place the pronouns correctly with faire + infinitive.",
      "minWords": 120,
      "maxWords": 200,
      "rubric": [
        "Uses faire + infinitive for work you had done (\"j'ai fait refaire ma cuisine\"), with pronouns before faire (\"je la lui ai fait changer\")",
        "Uses se faire + infinitive for services to yourself, with fait invariable (\"je me suis fait conseiller\", \"je me suis fait livrer\")",
        "Uses rendre + adjective rather than faire + adjective (\"le blanc la rend lumineuse\", \"les délais m'ont rendue folle\")",
        "Gives a balanced verdict, as a review does (strengths, weaknesses, a recommendation)"
      ],
      "modelAnswer": "★★★★☆ Beau travail, mais patience indispensable\n\nAu printemps, j'ai fait refaire entièrement ma cuisine par une entreprise du quartier. Je me suis d'abord fait conseiller par leur décoratrice, qui m'a proposé un plan de travail en chêne et des placards blancs. Résultat : la pièce, autrefois sombre, est méconnaissable. Le blanc la rend lumineuse et la fait paraître plus grande.\n\nLes artisans étaient compétents et soigneux. Le plombier a déplacé l'évier sous la fenêtre comme je le souhaitais, et l'électricien m'a fait remarquer qu'une prise n'était pas aux normes. Je la lui ai fait changer sans frais supplémentaires.\n\nEn revanche, les délais m'ont rendue folle. Le chantier devait durer trois semaines ; il en a duré six. Je me suis fait livrer le four avec quinze jours de retard, et j'ai dû me faire inviter chez mes voisins pour pouvoir cuisiner.\n\nBilan : un très beau résultat et des prix raisonnables, mais prévoyez une marge pour les retards.",
      "explanation": "Faire + infinitive shows that someone else did the work (\"j'ai fait refaire ma cuisine\"), with both pronouns before faire (\"je la lui ai fait changer\"). Se faire + infinitive covers services to oneself (\"je me suis fait conseiller\", \"je me suis fait livrer\"), and fait stays invariable. Rendre + adjective expresses an effect (\"le blanc la rend lumineuse\", \"les délais m'ont rendue folle\", agreeing with the preceding me), where faire + adjective would be wrong."
    }
  ],
  "c1-verb-prepositions-3": [
    {
      "type": "write",
      "prompt": "Your closest friend moved to Québec six months ago. Write her a personal letter telling her how much you miss her, what you're doing with the things she left behind, and what's new in your life. Use verbs that change meaning with their preposition: manquer à / de, tenir à / de, servir à / de, penser à / de.",
      "minWords": 120,
      "maxWords": 200,
      "rubric": [
        "Uses manquer à for missing someone (\"tu me manques\") and manquer de for lacking or almost doing (\"elle ne manque de rien\", \"j'ai manqué de tomber\")",
        "Uses tenir à (to care about / be keen to) and tenir de (to take after)",
        "Uses servir à (to be useful for) and servir de (to serve as)",
        "Uses penser à vs penser de correctly (\"je pense à toi\", \"que penses-tu de...\")"
      ],
      "modelAnswer": "Ma chère Sophie,\n\nSix mois déjà que tu es partie à Québec, et tu me manques terriblement. Nos cafés du dimanche me manquent aussi : personne ne sait se plaindre de la vie aussi bien que toi !\n\nJe tiens à te rassurer : je prends grand soin de ta plante verte. Elle ne manque de rien, je l'arrose tous les trois jours. Ton vieux vélo, lui, sert enfin à quelque chose : je le prends tous les matins pour aller au travail. Et ton grand carton de livres, que tu tenais tant à garder, me sert de table de nuit en attendant ton retour.\n\nCôté nouvelles, j'ai commencé l'escalade. La semaine dernière, j'ai manqué de tomber du haut du mur, mais le moniteur dit que j'ai de bons réflexes. Ma mère prétend que je tiens de mon grand-père, qui était alpiniste.\n\nJe pense souvent à toi, surtout quand je passe devant notre librairie préférée. Et toi, que penses-tu de ta nouvelle vie ? L'hiver ne te fait pas trop peur ?\n\nÉcris-moi vite. Je t'embrasse fort,\nClara",
      "explanation": "Each verb changes meaning with its preposition: \"tu me manques\" (manquer à, with the person missed as subject) vs \"elle ne manque de rien\" and \"j'ai manqué de tomber\"; \"je tiens à te rassurer\" vs \"je tiens de mon grand-père\"; \"le vélo sert à quelque chose\" vs \"le carton me sert de table de nuit\"; \"je pense à toi\" vs \"que penses-tu de ta nouvelle vie\"."
    }
  ],
  "c1-verb-prepositions-5": [
    {
      "type": "write",
      "prompt": "You are the director of a summer camp for teenagers. Write the internal memo to the team of instructors before the season starts: what you expect from them, what they must make sure of during the stay, and what parents complained about last year. Use s'attendre à ce que, tenir à ce que, veiller à ce que + subjunctive and se plaindre de ce que.",
      "minWords": 120,
      "maxWords": 200,
      "rubric": [
        "Uses verb + à ce que + subjunctive: \"je tiens à ce que\", \"je m'attends à ce que\", \"veillez à ce que\", \"je m'oppose à ce que\"",
        "Uses se plaindre de ce que to report a complaint",
        "Uses verb + preposition + infinitive (\"s'efforcer de\", \"hésiter à\", \"éviter de\")",
        "Follows memo conventions: À / De / Objet, vous, a neutral professional register"
      ],
      "modelAnswer": "À : l'équipe d'animation\nDe : Nathalie Roux, directrice\nObjet : consignes pour la saison\n\nBonjour à toutes et à tous,\n\nÀ quelques jours de l'arrivée des premiers jeunes, je souhaite rappeler quelques règles.\n\nJe tiens tout d'abord à ce que chaque animateur connaisse parfaitement le règlement intérieur avant le 1er juillet. Je m'attends également à ce que vous soyez tous présents à la réunion de préparation du 28 juin.\n\nPendant le séjour, veillez à ce que les adolescents ne quittent jamais le centre sans autorisation et à ce que les téléphones soient rangés pendant les repas. Lors des activités nautiques, efforcez-vous de vérifier le port du gilet à chaque sortie.\n\nL'an dernier, plusieurs parents se sont plaints de ce que leurs enfants ne donnaient pas de nouvelles. Je m'oppose à ce que les téléphones soient confisqués toute la semaine, mais je vous demande d'organiser un appel collectif tous les deux soirs.\n\nEnfin, n'hésitez pas à me contacter en cas de difficulté : mieux vaut éviter de laisser un problème s'installer.\n\nMerci à tous pour votre engagement.\n\nNathalie Roux",
      "explanation": "When a verb built with à governs a whole clause, French inserts ce: \"je tiens à ce que chaque animateur connaisse\", \"je m'attends à ce que vous soyez\", \"veillez à ce que les adolescents ne quittent\", \"je m'oppose à ce que les téléphones soient\", all with the subjunctive. \"Se sont plaints de ce que leurs enfants ne donnaient pas\" uses the indicative to report a fact, and \"efforcez-vous de\", \"n'hésitez pas à\" and \"éviter de\" show verb + preposition + infinitive."
    }
  ],
  "c1-discourse-markers-3": [
    {
      "type": "write",
      "prompt": "A project you are in charge of at work (a new website, a move to new offices, a product launch) is two months late. Write the short report to the management committee explaining the causes, the consequences and what happens next. Use formal markers of cause and consequence with their correct constructions.",
      "minWords": 120,
      "maxWords": 200,
      "rubric": [
        "Uses formal markers of cause: \"étant donné que\" / \"dans la mesure où\" + clause, \"du fait de\" / \"en raison de\" / \"faute de\" + noun",
        "Uses markers of consequence with the right construction: \"si bien que\" / \"de sorte que\" + indicative, \"d'où\" + noun",
        "Uses \"aussi\" with subject-verb inversion at the head of a sentence (\"Aussi proposons-nous...\")",
        "Keeps an impersonal report register (nous, the passive, no slang)"
      ],
      "modelAnswer": "Objet : retard du lancement du nouveau site internet\n\nLe lancement du nouveau site, initialement prévu le 1er mars, a été reporté au 2 mai. Le présent rapport en expose les causes et les conséquences.\n\nLe retard s'explique d'abord par le départ de notre développeur principal en janvier. Faute de remplaçant immédiat, plusieurs fonctionnalités n'ont pas pu être terminées à temps. Par ailleurs, du fait de la nouvelle réglementation sur les données personnelles, le module de paiement a dû être entièrement revu.\n\nÉtant donné que les tests de sécurité ne peuvent commencer qu'une fois ce module achevé, l'ensemble du calendrier a été décalé, si bien que la campagne publicitaire prévue en mars a dû être annulée. D'où un surcoût d'environ 8 000 euros.\n\nDans la mesure où les principales difficultés sont désormais résolues, l'équipe est en mesure de respecter la nouvelle échéance. Aussi proposons-nous de maintenir le lancement au 2 mai et de reporter la campagne à juin, en raison de la forte activité commerciale attendue à cette période.\n\nNous restons à la disposition du comité pour toute précision.",
      "explanation": "Cause is expressed with nouns after \"faute de\", \"du fait de\" and \"en raison de\", and with clauses after \"étant donné que\" and \"dans la mesure où\". Consequence comes through \"si bien que\" + indicative, \"d'où\" + noun, and \"aussi\" with subject-verb inversion at the head of a sentence (\"Aussi proposons-nous\"), a formal construction typical of reports."
    }
  ],
  "c1-discourse-markers-6": [
    {
      "type": "write",
      "prompt": "Write a short dialogue between two flatmates who have to decide whether to adopt a cat from a shelter. Make it sound like real spoken French by using the little words of conversation (bon, ben, alors, enfin, quoi, du coup, en fait, genre, bref, tu vois), each with its real function.",
      "minWords": 100,
      "maxWords": 180,
      "rubric": [
        "Uses at least six spoken markers (\"bon\", \"ben\", \"alors\", \"du coup\", \"en fait\", \"genre\", \"quoi\", \"enfin\", \"tu vois\", \"bref\")",
        "Uses each marker with its real function: \"en fait\" for a change of mind, \"enfin\" to self-correct, \"du coup\" for a consequence, \"bref\" to cut short, \"quoi\" to round off",
        "Uses features of spoken grammar: dropped ne, on for nous, ça",
        "Presents the dialogue with dashes and reaches a clear outcome"
      ],
      "modelAnswer": "— Bon, alors, ce chat, on le prend ou pas ?\n— Ben, je sais pas. En fait, j'ai réfléchi cette nuit, et je suis plus trop sûre.\n— Attends, c'est toi qui voulais un chat depuis six mois !\n— Oui, enfin, je voulais un chaton, pas un matou de trois ans qui griffe tout le monde, quoi.\n— Il griffe pas tout le monde. Il était stressé, genre il venait d'arriver au refuge.\n— Mouais. Et qui va s'en occuper quand on part en vacances ?\n— Ma sœur habite à côté. Du coup, elle pourra passer le nourrir.\n— Ta sœur qui oublie déjà d'arroser ses plantes ?\n— Elle a changé, je te jure. Bref, c'est pas le problème. Tu vois, ce qui me plaît, c'est qu'il a l'air d'avoir vraiment besoin de nous.\n— Bon… c'est vrai qu'il a une bonne tête.\n— Alors ?\n— Alors d'accord. Mais c'est toi qui changes la litière, hein.\n— Marché conclu !",
      "explanation": "The markers carry the conversation: \"bon\" and \"alors\" open and push for a decision, \"ben\" signals hesitation, \"en fait\" introduces a change of mind, \"enfin\" corrects what was just said, \"quoi\" and \"genre\" round off or approximate, \"du coup\" draws a consequence and \"bref\" cuts a digression short. Dropped ne (\"je sais pas\", \"il griffe pas\") and on for nous complete the spoken register."
    }
  ],
  "c1-emphasis-focus-2": [
    {
      "type": "write",
      "prompt": "A city-guide website asks residents to describe 'my neighbourhood in a nutshell'. Write a description of your neighbourhood (real or invented) for visitors: what strikes you first, what you love, what surprises newcomers and what it lacks. Build suspense with pseudo-cleft sentences: ce qui..., c'est...; ce que..., c'est...; ce dont..., c'est de...; ce à quoi..., c'est à...",
      "minWords": 120,
      "maxWords": 200,
      "rubric": [
        "Uses pseudo-clefts with ce qui and ce que (\"ce qui frappe d'abord, c'est...\", \"ce que j'aime le plus, c'est...\")",
        "Repeats the preposition after c'est in pseudo-clefts with ce dont and ce à quoi (\"ce dont le quartier aurait besoin, c'est de...\", \"ce à quoi on ne s'attend pas, c'est à...\")",
        "Uses ce qui m'étonne, c'est que + subjunctive",
        "Gives a vivid description with concrete details"
      ],
      "modelAnswer": "La Croix-Rousse en quelques mots\n\nCe qui frappe d'abord, quand on arrive à la Croix-Rousse, c'est la pente. Pour y monter depuis le centre de Lyon, il faut grimper des escaliers interminables ou emprunter les traboules, ces passages qui traversent les immeubles.\n\nCe que j'aime le plus, c'est le marché du boulevard, le matin. On y croise des producteurs de la région, des familles avec leurs poussettes et des retraités qui refont le monde au même comptoir depuis quarante ans.\n\nCe à quoi les nouveaux venus ne s'attendent pas, c'est à l'esprit de village. Ici, le boulanger connaît votre prénom au bout d'une semaine. Ce qui m'étonne toujours, c'est que ce quartier ouvrier, celui des canuts, soit devenu si recherché sans perdre son âme.\n\nCe dont le quartier aurait besoin, en revanche, c'est de places de stationnement : se garer le samedi relève de l'exploit. Mais ce dont on se souvient en repartant, c'est surtout de la vue depuis le Gros Caillou, sur le Rhône et les toits de la ville.",
      "explanation": "Each paragraph opens with a pseudo-cleft that delays the key information: \"ce qui frappe d'abord, c'est la pente\", \"ce que j'aime le plus, c'est...\". When the verb takes à or de, the preposition is repeated after c'est (\"ce à quoi... ne s'attendent pas, c'est à l'esprit de village\", \"ce dont le quartier aurait besoin, c'est de places\"). \"Ce qui m'étonne, c'est que\" is followed by the subjunctive (\"soit devenu\") because it expresses a reaction."
    }
  ],
  "c1-emphasis-focus-6": [
    {
      "type": "write",
      "prompt": "You went to see a much-hyped play that left you with mixed feelings. Write a review for a culture blog. Use emphatic negation (ne... guère, nullement, pas le moins du monde, ne... rien de) and litotes (ce n'est pas mal, il n'est pas sans talent, je ne vous le déconseillerais pas) to nuance your judgement.",
      "minWords": 120,
      "maxWords": 200,
      "rubric": [
        "Uses at least two emphatic negations: \"ne... guère\", \"nullement\", \"pas le moins du monde\", \"n'avoir rien de\"",
        "Uses at least two litotes (\"ils ne sont pas sans talent\", \"ce n'est pas mal du tout\", \"la soirée n'a pas été désagréable\", \"je ne vous le déconseillerais pas\")",
        "Gives a balanced judgement with strengths and weaknesses",
        "Uses the vocabulary of theatre criticism (comédiens, mise en scène, décor, réplique)"
      ],
      "modelAnswer": "« Le Dernier Été » : beau, mais trop sage\n\nOn nous avait promis l'événement théâtral de la rentrée. Disons-le d'emblée : on en est loin, même si la soirée n'a pas été désagréable.\n\nLes comédiens ne sont pas sans talent. Dans le rôle de la mère, Claire Delmas est même bouleversante, et sa dernière scène n'a rien de ridicule, contrairement à ce que laissaient craindre les premières minutes. Le décor, une maison de vacances qui se vide peu à peu, n'est pas mal du tout.\n\nLe problème vient du texte. L'auteur ne prend guère de risques : chaque conflit est annoncé, chaque réplique attendue. Je n'espérais pas le moins du monde une révolution, mais j'attendais au moins une surprise. Quant à la mise en scène, elle n'est nullement indigne, mais elle reste d'une prudence qui finit par endormir.\n\nFaut-il y aller ? Je ne vous le déconseillerais pas, ne serait-ce que pour la performance de Claire Delmas. Mais pour un « événement », on repassera.",
      "explanation": "Emphatic negations (\"ne prend guère de risques\", \"pas le moins du monde\", \"n'est nullement indigne\", \"n'a rien de ridicule\") make the criticism precise, and litotes let the reviewer praise without enthusiasm: \"les comédiens ne sont pas sans talent\", \"n'est pas mal du tout\", \"la soirée n'a pas été désagréable\", \"je ne vous le déconseillerais pas\". This understatement is typical of French critical writing."
    }
  ],
  "c1-transform-probably-to-conjecture": [
    {
      "type": "write",
      "prompt": "You come home and find your flat in a strange state: the window is wide open, the cat's bowl is empty, there's an unknown umbrella in the hall and half the cake you made has disappeared. Write a text message to your flatmate, who is away, guessing what has happened. Use the futur antérieur and simple future of probability, devoir of deduction and adverbs of probability rather than 'probablement' every time.",
      "minWords": 100,
      "maxWords": 180,
      "rubric": [
        "Uses the futur antérieur for a guess about the past (\"tu auras oublié de la fermer\", \"elle sera passée\")",
        "Uses the simple future for a guess about the present (\"ce sera celui de ta sœur\")",
        "Uses devoir of deduction in the present and past (\"elle doit être\", \"quelqu'un a dû le nourrir\")",
        "Varies the degree of certainty with adverbs and phrases (\"à tous les coups\", \"sans doute\")"
      ],
      "modelAnswer": "Salut Julie ! Je viens de rentrer et il s'est passé des trucs bizarres ici. Mène l'enquête avec moi :\n\n1) La fenêtre du salon est grande ouverte. Tu auras oublié de la fermer ce matin, comme d'habitude !\n\n2) La gamelle du chat est vide, et lui dort sur le canapé, l'air très satisfait. Quelqu'un a dû le nourrir… ou alors il aura trouvé le jambon que j'avais laissé sur la table.\n\n3) Il y a un grand parapluie rouge dans l'entrée. Ce sera celui de ta sœur : elle a les clés, non ? Elle sera passée chercher son pull.\n\n4) Et surtout, la moitié de mon gâteau au chocolat a disparu. À tous les coups, c'est encore ta sœur. Elle doit être sur le chemin du retour, le ventre bien plein !\n\nBref, rien de grave, mais tu me confirmes ? Et si ce n'est pas elle, on a sans doute un cambrioleur très gourmand…",
      "explanation": "The futur antérieur expresses a guess about something already done (\"tu auras oublié\", \"il aura trouvé\", \"elle sera passée\"), and the simple future a guess about the present (\"ce sera celui de ta sœur\"). Devoir carries deduction in the past (\"quelqu'un a dû le nourrir\") and the present (\"elle doit être sur le chemin\"), while \"à tous les coups\" and \"sans doute\" vary the degree of certainty."
    }
  ],
  "c1-conjecture-6": [
    {
      "type": "write",
      "prompt": "For the third time this month, a neighbour has parked in front of your garage and blocked your car. Write a note to leave on his windscreen: express surprise and annoyance with the conditional of indignation in questions, and make a firm but polite request with the future of attenuation (je vous demanderai de...). Stay courteous.",
      "minWords": 100,
      "maxWords": 180,
      "rubric": [
        "Uses the conditional of surprise or indignation in questions (\"Auriez-vous oublié que...?\", \"Penseriez-vous que...?\")",
        "Uses the future of attenuation for firm but polite statements and requests (\"je vous avouerai que\", \"je vous rappellerai que\", \"je vous demanderai de\")",
        "Contrasts it with an ordinary softening conditional (\"je vous serais reconnaissant de\")",
        "Keeps the courteous vous register of a note to a stranger"
      ],
      "modelAnswer": "Monsieur,\n\nC'est la troisième fois ce mois-ci que votre voiture est garée devant mon garage, et je vous avouerai que ma patience commence à s'épuiser.\n\nCe matin encore, j'ai dû appeler un taxi pour me rendre à un rendez-vous médical, faute de pouvoir sortir mon véhicule. Auriez-vous oublié que cet emplacement est signalé par un panneau « Sortie de garage » ? Ou penseriez-vous qu'un garage reste toujours vide en semaine ?\n\nJe ne doute pas que vous ayez vos raisons, et je sais que les places sont rares dans la rue. Je vous rappellerai toutefois que le stationnement devant une sortie de garage est interdit et passible d'une amende.\n\nJe vous demanderai donc, à l'avenir, de bien vouloir vous garer ailleurs. Je vous serais également reconnaissant de me prévenir en cas d'empêchement : mon numéro figure au dos de ce mot.\n\nJe préfère régler les choses à l'amiable, sans faire appel à la fourrière.\n\nVotre voisin du 14",
      "explanation": "The conditional in questions voices indignation without a direct accusation (\"Auriez-vous oublié que...?\", \"penseriez-vous que...?\"). The future of attenuation makes statements and requests polite but firm (\"je vous avouerai\", \"je vous rappellerai\", \"je vous demanderai de\"), unlike the softer, more hesitant conditional of politeness (\"je vous serais reconnaissant\")."
    }
  ],
  "c1-registers-2": [
    {
      "type": "write",
      "prompt": "An expat magazine has asked you for a short advice article for English speakers who have just moved to France: 'Tu ou vous ? Petit guide de survie'. Cover work, in-laws, neighbours and the internet, and explain how to propose or politely decline the switch to tu. Write in a neutral, courant register and quote the real French formulas.",
      "minWords": 120,
      "maxWords": 200,
      "rubric": [
        "Explains the tu / vous choice in several contexts (work, in-laws, neighbours, online)",
        "Quotes formulas for proposing tu (\"On peut se tutoyer ?\", \"Tu peux me tutoyer\")",
        "Quotes a polite way to decline or delay the switch (\"je préfère qu'on se vouvoie encore un peu\")",
        "Uses the register of a magazine article: a title, advice to the reader with vous and imperatives, impersonal on"
      ],
      "modelAnswer": "Tu ou vous ? Petit guide de survie\n\nAu bureau, les habitudes ont changé : dans beaucoup d'entreprises, surtout dans les start-up, on se tutoie dès le premier jour, patron compris. Dans une banque ou un cabinet d'avocats, en revanche, mieux vaut vouvoyer tout le monde et attendre qu'on vous propose le tutoiement. En cas de doute, observez vos collègues.\n\nAvec la belle-famille, c'est plus délicat. Certains beaux-parents tutoient leur gendre mais attendent d'être vouvoyés : cet usage asymétrique reste courant.\n\nAvec les voisins, on commence par « vous », puis on passe souvent au « tu » après quelques apéritifs. Sur les réseaux sociaux, enfin, le tutoiement est presque général.\n\nComment faire le pas ? Les formules les plus naturelles sont : « On peut se tutoyer, non ? » ou « Tu peux me tutoyer, tu sais. » Et si vous préférez garder vos distances, répondez simplement : « Si ça ne vous ennuie pas, je préfère qu'on se vouvoie encore un peu. »\n\nRetenez une règle d'or : c'est généralement la personne la plus âgée ou la plus haut placée qui propose le « tu ».",
      "explanation": "The article uses a courant register suited to a magazine: advice with vous and imperatives (\"observez\", \"répondez\", \"retenez\"), impersonal on and \"mieux vaut\". It quotes the real formulas for proposing tu (\"On peut se tutoyer, non ?\", \"Tu peux me tutoyer\") and for declining politely (\"je préfère qu'on se vouvoie\", with the subjunctive), and names the asymmetric use found in families and hierarchies."
    }
  ],
  "c1-registers-6": [
    {
      "type": "write",
      "prompt": "You are looking for a job in sustainable tourism in France. Write a LinkedIn message to someone you don't know, Marc Dupuis, a project manager at a travel agency in Bordeaux, asking whether he would agree to a 20-minute call to tell you about his job. Be polite and professional without sounding stiff: no heavy letter formulas and no texting abbreviations.",
      "minWords": 100,
      "maxWords": 180,
      "rubric": [
        "Uses an opening and closing suited to LinkedIn (\"Bonjour Monsieur Dupuis\", \"Bien cordialement\", \"Belle fin de semaine\")",
        "Makes the request with a softening conditional (\"Accepteriez-vous de...\", \"je souhaiterais\", \"je comprendrais tout à fait que\" + subjunctive)",
        "Avoids stiff letter formulas (no \"Veuillez agréer...\") and texting abbreviations",
        "Briefly explains who you are and why you are writing to this particular person"
      ],
      "modelAnswer": "Bonjour Monsieur Dupuis,\n\nJe me permets de vous contacter après avoir lu votre article sur le tourisme durable en Nouvelle-Aquitaine, que j'ai trouvé passionnant.\n\nJe m'appelle Laura Martin et je termine un master en gestion du tourisme à Toulouse. Je souhaiterais travailler dans la conception de voyages responsables, et votre parcours, de guide de randonnée à chef de projet, m'intéresse beaucoup.\n\nAccepteriez-vous de m'accorder une vingtaine de minutes, par téléphone ou en visio, pour me parler de votre métier ? J'aimerais notamment savoir comment vous travaillez avec les hébergeurs locaux et quelles compétences vous semblent les plus utiles pour débuter.\n\nJe suis disponible la semaine prochaine, au moment qui vous conviendra le mieux. Bien sûr, je comprendrais tout à fait que votre emploi du temps ne vous le permette pas.\n\nMerci d'avance pour votre réponse, et belle fin de semaine !\n\nBien cordialement,\nLaura Martin",
      "explanation": "The message sits between registers, as LinkedIn requires: \"je me permets de\" and the conditional (\"je souhaiterais\", \"accepteriez-vous\", \"je comprendrais que\" + subjunctive) keep it courteous, while short paragraphs, \"en visio\" and \"belle fin de semaine\" avoid the stiffness of a formal letter. \"Bien cordialement\" is the standard professional closing for a first contact."
    }
  ],
  "c1-francophonie-3": [
    {
      "type": "write",
      "prompt": "You're spending a weekend at a friend's chalet near Québec City. Write a short dialogue in which your friend's uncle, a Quebecer, invites you to a get-together tonight. Make his lines sound like spoken Québec French (interrogative -tu, chu, pis, là, à soir, être après + infinitive, tu for everyone) and keep your own lines in standard French.",
      "minWords": 100,
      "maxWords": 180,
      "rubric": [
        "Gives the uncle yes/no questions with interrogative -tu (\"Tu viens-tu ?\")",
        "Uses Québec spoken forms in the uncle's lines: \"chu\", \"pis\", \"là\" as a filler, \"à soir\"",
        "Uses être après + infinitive for an action in progress (\"chu après faire une tourtière\")",
        "Contrasts the uncle's Québec French with standard French in your replies, including the switch from vous to tu"
      ],
      "modelAnswer": "— Pis, as-tu bien dormi, là ?\n— Très bien, merci ! Le chalet est magnifique.\n— Ah, ça me fait plaisir. Écoute, à soir, on va chez mon chum Réjean, en bas du lac. Tu viens-tu avec nous autres ?\n— Avec plaisir. C'est loin ?\n— Non, non, c'est à cinq minutes en char. On va faire un feu pis jaser un peu.\n— Je dois apporter quelque chose ?\n— Ben non, voyons. Chu après faire une tourtière, là, on va l'apporter. Ma blonde s'occupe du dessert.\n— Vous êtes sûr ? Je peux au moins acheter du vin.\n— Tu peux me dire tu, hein ! Icitte, tout le monde se tutoie. Mais si tu veux du vin, y a un dépanneur au village.\n— D'accord, je te tutoie, alors. On part à quelle heure ?\n— Vers sept heures, là. Habille-toi chaudement, il fait frette le soir.\n— Promis. Merci pour l'invitation !",
      "explanation": "The uncle's lines show the main features of spoken Québec French: -tu as a yes/no question marker (\"Tu viens-tu ?\"), \"chu\" for je suis, \"pis\" for puis / et, \"là\" as a filler, \"à soir\" for ce soir and être après + infinitive (\"chu après faire une tourtière\") for an action in progress, plus the wide use of tu. The visitor's replies stay in standard French, which switches from vous to tu when invited to."
    }
  ],
  "c1-francophonie-4": [
    {
      "type": "write",
      "prompt": "You're spending a week in Brussels and Lausanne. Write a postcard to your grandmother in France telling her about the little differences in the French you've heard. Quote at least four Belgian or Swiss expressions in the situations where you heard them, and say what they mean in the French of France.",
      "minWords": 100,
      "maxWords": 180,
      "rubric": [
        "Quotes at least four Belgian or Swiss features (\"s'il vous plaît\" when handing something over, \"savoir\" for \"pouvoir\", \"à tantôt\", \"service !\", \"ça joue ?\", \"septante\", \"huitante\")",
        "Explains each one with its equivalent in the French of France",
        "Follows postcard conventions: place and date, a warm opening, short news and a closing",
        "Writes the card itself in standard French with tu"
      ],
      "modelAnswer": "Lausanne, le 12 octobre\n\nChère Mamie,\n\nMe voici à Lausanne après trois jours à Bruxelles ! Tu avais raison : on parle bien français ici, mais avec mille petites surprises.\n\nÀ Bruxelles, le serveur m'a tendu mon café en disant « s'il vous plaît », là où on dirait « voilà » à Paris. Le lendemain, une dame m'a demandé : « Vous savez m'indiquer la gare ? » Ici, « savoir » veut souvent dire « pouvoir ». Et en partant, mon logeur m'a lancé : « À tantôt ! », c'est-à-dire « à tout à l'heure ».\n\nEn Suisse, à la boulangerie, quand j'ai dit merci, la vendeuse m'a répondu « Service ! », l'équivalent de « je vous en prie ». Mon collègue, lui, me demande sans cesse : « Ça joue ? » pour savoir si tout me convient. Et ici, on compte en « septante » et « huitante » : j'ai payé mon croissant « un franc huitante » !\n\nJe te raconterai tout ça à mon retour.\n\nJe t'embrasse très fort,\nLucie",
      "explanation": "The postcard quotes each regional feature in a real situation and gives its equivalent in the French of France: Belgian \"s'il vous plaît\" for voilà, \"savoir\" for pouvoir and \"à tantôt\" for à tout à l'heure; Swiss \"service !\" for je vous en prie, \"ça joue ?\", and \"septante\" and \"huitante\" for soixante-dix and quatre-vingts. The card itself is written in warm, standard French with tu."
    }
  ],
  "c1-regional-vocabulary-3": [
    {
      "type": "write",
      "prompt": "You're on an exchange in Montréal. Write a diary entry about your first winter weekend there, using at least six everyday Québec words in context (for example fin de semaine, magasiner, tuque, chandail, bas, char, stationnement, dépanneur, piastre, blonde, c'est plate).",
      "minWords": 120,
      "maxWords": 200,
      "rubric": [
        "Uses at least six Québec words in natural contexts (\"fin de semaine\", \"magasiner\", \"tuque\", \"chandail\", \"bas\", \"dépanneur\")",
        "Uses each word with its Québec meaning, not the France one (\"bas\" = socks, \"char\" = car, \"blonde\" = girlfriend)",
        "Follows diary conventions: place and date, the first person, personal impressions",
        "Keeps standard grammar in the narrative, so the regional colour comes from the vocabulary"
      ],
      "modelAnswer": "Montréal, le 15 janvier\n\nPremière vraie fin de semaine d'hiver à Montréal ! Samedi matin, il faisait moins vingt-deux. Mon colocataire, Maxime, m'a regardé partir en blouson et m'a dit en riant : « T'as pas de tuque ? Tu vas geler ! »\n\nIl avait raison. Nous sommes donc allés magasiner au centre-ville avec sa blonde, Audrey. J'ai acheté une tuque en laine, un gros chandail et trois paires de bas chauds. Audrey m'a aussi conseillé des bottes, mais elles coûtaient cent vingt piastres, alors j'ai préféré attendre les soldes.\n\nL'après-midi, Maxime a voulu prendre son char pour aller patiner au parc La Fontaine, mais trouver du stationnement après une tempête, c'est mission impossible. On a fini par y aller en métro.\n\nLe soir, en rentrant, on s'est arrêtés au dépanneur du coin pour acheter du lait et des croustilles. Aujourd'hui, il neige sans arrêt et je n'ai pas mis le nez dehors. C'est plate, mais avec mon nouveau chandail, au moins, j'ai chaud !",
      "explanation": "The Québec words appear where Quebecers use them: \"fin de semaine\" (week-end), \"magasiner\" (faire les magasins), \"tuque\" (bonnet), \"chandail\" (pull), \"bas\" (chaussettes), \"piastres\" (dollars), \"char\" (voiture), \"stationnement\" (place de parking), \"dépanneur\" (épicerie de quartier), \"croustilles\" (chips), \"blonde\" (petite amie) and \"c'est plate\" (c'est ennuyeux). The grammar of the entry stays standard, so the regional colour comes from the vocabulary alone."
    }
  ],
  "c1-regional-vocabulary-7": [
    {
      "type": "write",
      "prompt": "A francophone language forum asks: 'Should we use the official replacements for anglicisms (courriel, mot-dièse, infox, divulgâcher) or keep the English words?' Write your contribution: give your opinion, compare France and Québec, and quote examples.",
      "minWords": 120,
      "maxWords": 200,
      "rubric": [
        "Quotes at least four anglicisms and their official replacements (\"courriel\" / \"e-mail\", \"divulgâcher\" / \"spoiler\", \"mot-dièse\" / \"hashtag\", \"infox\" / \"fake news\")",
        "Compares France and Québec (Québec's stricter official policy vs its spoken anglicisms)",
        "States and justifies a personal position with argumentative connectors (\"d'un côté... de l'autre\", \"à mon avis\")",
        "Uses the register of a thoughtful forum post"
      ],
      "modelAnswer": "Je suis plutôt partagée sur la question.\n\nD'un côté, certaines créations sont de vraies réussites. « Courriel », proposé au Québec, s'est imposé dans les administrations des deux côtés de l'Atlantique, et « divulgâcher », lui aussi né au Québec, est à la fois drôle et parfaitement clair. Pourquoi dire « spoiler » quand on dispose d'un mot aussi savoureux ?\n\nDe l'autre, beaucoup de termes officiels restent lettre morte. En France, presque personne ne dit « mot-dièse » au lieu de « hashtag », et « infox » peine à remplacer « fake news », même dans la presse.\n\nCe qui m'amuse, c'est le paradoxe québécois : l'Office québécois de la langue française est bien plus strict que les autorités françaises, mais à l'oral, les Québécois emploient volontiers des anglicismes comme « checker » ou « c'est le fun ». Les Français, eux, écrivent « week-end » et « parking » sans le moindre complexe.\n\nÀ mon avis, il ne faut ni imposer ni refuser ces mots par principe. Une proposition s'impose quand elle est courte, claire et amusante ; pour le reste, c'est l'usage qui décide.",
      "explanation": "The post weighs both sides with \"d'un côté... de l'autre\", quotes official replacements next to the anglicisms they target (\"courriel\", \"divulgâcher\" / \"spoiler\", \"mot-dièse\" / \"hashtag\", \"infox\" / \"fake news\") and contrasts Québec's strict official policy with its spoken anglicisms (\"checker\", \"c'est le fun\"). The pseudo-cleft \"ce qui m'amuse, c'est...\" and \"à mon avis\" mark the writer's own position."
    }
  ],
  "c1-colloquial-french-4": [
    {
      "type": "write",
      "prompt": "Write a short dialogue between two students who meet in a university corridor on a Friday afternoon and plan their weekend. Make it sound natural with truncations (la fac, le prof, l'appart, la coloc, le resto, l'apéro, d'acc, à plus) and everyday sigles (TD, BU, CDD, RER).",
      "minWords": 100,
      "maxWords": 180,
      "rubric": [
        "Uses at least six truncations (\"la fac\", \"le prof\", \"l'apéro\", \"l'appart\", \"la coloc\", \"un resto\", \"d'acc\", \"à plus\")",
        "Uses at least two everyday sigles (\"le TD\", \"la BU\", \"un CDD\", \"le RER\")",
        "Uses spoken grammar: dropped ne, y a, on for nous, questions without inversion",
        "Keeps a natural, familiar exchange between friends"
      ],
      "modelAnswer": "— Salut Inès ! Tu sors d'où, là ?\n— Du TD de stats. Le prof nous a rendu les partiels… Laisse tomber.\n— Aïe. Bon, on oublie la fac pour ce week-end. Tu fais quoi ce soir ?\n— Je bosse à la BU jusqu'à six heures, et après je suis libre.\n— Parfait ! On fait un apéro à l'appart avec ma coloc. Tu viens ?\n— Carrément. J'apporte quoi ?\n— Des chips, si tu veux. Et demain midi, on se fait un resto ? Y a un petit libanais sympa près de la gare.\n— Demain, je peux pas, je bosse. J'ai trouvé un CDD dans une librairie, le samedi.\n— Sérieux ? Trop bien ! Dimanche, alors ? On pourrait prendre le RER et aller se balader à Saint-Germain-en-Laye.\n— D'acc pour dimanche. Mais pas trop tôt, hein, je suis crevée.\n— Onze heures à la gare ?\n— Ça marche. Allez, je file, j'ai mon bus. À plus !\n— À ce soir !",
      "explanation": "The dialogue relies on the truncations of everyday speech (\"la fac\", \"le prof\", \"un apéro\", \"l'appart\", \"ma coloc\", \"un resto\", \"d'acc\", \"à plus\") and on sigles (\"le TD\", \"la BU\", \"un CDD\", \"le RER\"). Dropped ne (\"je peux pas\"), y a, on for nous and questions without inversion (\"Tu fais quoi ce soir ?\") complete the familiar register."
    }
  ],
  "c1-colloquial-french-6": [
    {
      "type": "write",
      "prompt": "Write a post for your personal blog telling, in a relaxed and humorous tone, the story of a day when everything went wrong (a friend stood you up, a bus strike, a lost bank card...). Use the colloquial idioms of everyday life: avoir la flemme, poser un lapin, avoir la dalle, c'est la galère, ça me saoule, se prendre la tête and others.",
      "minWords": 120,
      "maxWords": 200,
      "rubric": [
        "Uses at least five colloquial idioms in context (\"avoir la flemme\", \"poser un lapin\", \"avoir la dalle\", \"c'est la galère\", \"ça m'a saoulé\", \"se prendre la tête\")",
        "Uses colloquial grammar: dislocation (\"moi, j'avais...\"), on for nous, dropped ne, verbless sentences",
        "Tells the story in a clear sequence with a humorous ending",
        "Stays familiar but never vulgar, as suits a public blog"
      ],
      "modelAnswer": "Le samedi le plus pourri de l'année\n\nSamedi, j'avais prévu une journée tranquille : brunch avec Julien à midi, ciné l'après-midi. Facile, non ?\n\nSauf que. Le matin, j'avais tellement la flemme de me lever que j'ai traîné au lit jusqu'à 11 h 30. J'arrive au café en courant… et pas de Julien. Je l'appelle : messagerie. Une heure plus tard, toujours rien. Il m'avait posé un lapin, tout simplement !\n\nMoi, j'avais la dalle, donc j'ai commandé un brunch pour un. Mais au moment de payer, impossible de trouver ma carte bleue. La galère. J'ai dû appeler ma sœur pour qu'elle vienne me dépanner. Elle m'a fait la morale pendant vingt minutes, ça m'a saoulé.\n\nPour finir en beauté, grève des bus : retour à pied, sous la pluie, évidemment.\n\nEt Julien, dans tout ça ? Il m'a envoyé un texto à 18 h : « Désolé, j'ai cru que c'était dimanche. » J'ai décidé de pas me prendre la tête, et on a remis ça à samedi prochain. Mais cette fois, c'est lui qui paie.",
      "explanation": "The post strings together everyday idioms (\"j'avais la flemme\", \"il m'avait posé un lapin\", \"j'avais la dalle\", \"la galère\", \"ça m'a saoulé\", \"pas me prendre la tête\") with colloquial grammar: dislocation (\"Moi, j'avais la dalle\"), the narrative present, dropped ne and verbless sentences (\"La galère.\", \"Sauf que.\"). The tone stays familiar but never vulgar, which suits a public blog."
    }
  ],
  "c1-formal-correspondence-4": [
    {
      "type": "write",
      "prompt": "You work for a company in Lille and would like to take three months of unpaid leave to look after your mother abroad after an operation. Write the formal letter to the HR director (a woman) requesting it: the dates, the reason (briefly), how your work could be covered, and a request for a meeting. Use the formulas of formal requests, including je souhaiterais que + subjunctive.",
      "minWords": 120,
      "maxWords": 200,
      "rubric": [
        "Uses the layout of a formal letter: objet, appel (\"Madame la Directrice\") and a closing formula that repeats it",
        "Makes the request with formal formulas: \"j'ai l'honneur de solliciter\", \"je me permets de\", \"je vous saurais gré de bien vouloir\"",
        "Uses je souhaiterais que + subjunctive (\"je souhaiterais que mes dossiers soient confiés à...\")",
        "Gives precise dates with the right prepositions (\"du 1er mars au 31 mai\", \"d'ici fin février\")"
      ],
      "modelAnswer": "Objet : demande de congé sans solde\n\nMadame la Directrice,\n\nJ'ai l'honneur de solliciter un congé sans solde de trois mois, du 1er mars au 31 mai prochains.\n\nMa mère, qui réside au Portugal, doit subir une intervention chirurgicale en février, et sa convalescence nécessitera une présence quotidienne à ses côtés. Étant sa seule fille, je souhaiterais pouvoir l'accompagner pendant cette période.\n\nAfin de ne pas perturber le fonctionnement du service, je me permets de vous soumettre quelques propositions. Je souhaiterais que mes dossiers en cours soient confiés à M. Lefort, avec qui je travaille étroitement depuis deux ans, et je m'engage à le former d'ici fin février.\n\nJe vous saurais gré de bien vouloir m'accorder un entretien afin que nous puissions examiner ensemble les modalités de ce congé. Je me tiens à votre disposition à la date qui vous conviendra.\n\nDans l'attente de votre réponse, je vous prie d'agréer, Madame la Directrice, l'expression de mes salutations respectueuses.\n\nClaire Vasseur",
      "explanation": "The letter uses the formulas of a formal request (\"j'ai l'honneur de solliciter\", \"je me permets de vous soumettre\", \"je vous saurais gré de bien vouloir\") and the softening conditional with the subjunctive (\"je souhaiterais que mes dossiers soient confiés\", \"afin que nous puissions\"). The appel \"Madame la Directrice\" is repeated in the closing formula, as French convention requires."
    }
  ],
  "c1-formal-correspondence-6": [
    {
      "type": "write",
      "prompt": "You work in customer service for a mail-order clothing company. A customer, M. Bernard, has written to complain that his order arrived two weeks late and that his jacket was the wrong size; he demands a refund of the whole order. Write the formal reply: acknowledge and apologise, explain briefly, offer a solution and a geste commercial, and tactfully refuse the full refund.",
      "minWords": 120,
      "maxWords": 200,
      "rubric": [
        "Acknowledges the complaint with formal formulas (\"Nous avons bien reçu votre courriel du...\")",
        "Apologises formally (\"Nous vous prions de bien vouloir nous excuser\", \"Nous regrettons que\" + subjunctive)",
        "Offers a remedy and a geste commercial (\"à titre de geste commercial\", \"un bon d'achat\")",
        "Refuses tactfully (\"nous ne sommes malheureusement pas en mesure de\") and closes with the right formula"
      ],
      "modelAnswer": "Objet : votre réclamation – commande n° 48312\n\nMonsieur,\n\nNous avons bien reçu votre courriel du 4 novembre et vous remercions d'avoir pris le temps de nous faire part de votre mécontentement.\n\nNous vous prions de bien vouloir nous excuser pour le retard de livraison de votre commande. Celui-ci est dû à un incident chez notre transporteur, qui a touché plusieurs centaines de colis. Nous regrettons également qu'une erreur de taille se soit produite lors de la préparation de votre veste.\n\nNous vous proposons d'échanger gratuitement cette veste contre la taille commandée : les frais de retour sont à notre charge, et vous trouverez ci-joint une étiquette de retour prépayée.\n\nEn revanche, nous ne sommes malheureusement pas en mesure de rembourser l'intégralité de votre commande, les autres articles vous étant parvenus conformes. À titre de geste commercial, nous avons toutefois le plaisir de vous offrir un bon d'achat de 20 euros, valable six mois sur notre site.\n\nEn vous renouvelant nos excuses, nous vous prions d'agréer, Monsieur, l'expression de nos salutations distinguées.\n\nLe service client",
      "explanation": "The reply moves through the stages of a formal answer to a complaint: acknowledgement (\"nous avons bien reçu votre courriel\"), apology (\"nous vous prions de bien vouloir nous excuser\", \"nous regrettons qu'une erreur se soit produite\" with the subjunctive), remedy, then a tactful refusal softened by a concession (\"nous ne sommes malheureusement pas en mesure de... À titre de geste commercial, nous avons toutefois le plaisir de...\"). The closing repeats the appel and renews the apology."
    }
  ],
  "c1-transform-depersonalize": [
    {
      "type": "write",
      "prompt": "You carried out a small survey of 120 students at your university about their reading habits. Write the 'Résultats et analyse' section of your report for a sociology course. Present the findings in academic French without je: use the passive, impersonal il, on, the nous of modesty and nominalization, and hedge your interpretation.",
      "minWords": 140,
      "maxWords": 220,
      "rubric": [
        "Avoids je: uses the nous of modesty, on and impersonal il (\"nous proposons\", \"il ressort de\", \"on observe\")",
        "Uses the passive to foreground the method and results (\"l'enquête a été menée\", \"ces résultats doivent être nuancés\")",
        "Uses nominalizations to condense findings (\"une nette baisse de la lecture\", \"le recours aux livres audio\")",
        "Reports figures precisely and hedges the interpretation (\"il convient de rappeler\", \"ne permet pas de généraliser\")"
      ],
      "modelAnswer": "Résultats et analyse\n\nL'enquête a été menée en mars auprès de 120 étudiants de licence, toutes disciplines confondues. Les réponses ont été recueillies au moyen d'un questionnaire en ligne anonyme.\n\nIl ressort tout d'abord de cette enquête une nette baisse de la lecture de loisir au cours des études : si 68 % des étudiants interrogés déclarent avoir lu au moins un livre par mois au lycée, ils ne sont plus que 31 % à le faire aujourd'hui. Le manque de temps est la raison la plus souvent invoquée, devant la fatigue liée aux écrans.\n\nOn observe en outre des écarts importants selon les disciplines : les étudiants de lettres lisent en moyenne quatre fois plus que ceux de sciences. Plus inattendu, le recours aux livres audio progresse : près d'un étudiant sur quatre déclare en écouter régulièrement.\n\nCes résultats doivent toutefois être nuancés. La taille de l'échantillon ne permet pas de généraliser, et il convient de rappeler que les pratiques déclarées ne correspondent pas toujours aux pratiques réelles. Nous proposons donc de compléter cette enquête par une série d'entretiens.",
      "explanation": "The section avoids je throughout: the passive (\"l'enquête a été menée\", \"les réponses ont été recueillies\", \"doivent être nuancés\"), impersonal il (\"il ressort de\", \"il convient de\"), on (\"on observe\") and the nous of modesty (\"nous proposons\"). Nominalizations such as \"une nette baisse de la lecture\" and \"le recours aux livres audio\" condense the findings, and the last paragraph hedges the conclusions, as academic writing expects."
    }
  ],
  "c1-academic-writing-7": [
    {
      "type": "write",
      "prompt": "You are preparing the DALF C1 oral. Your dossier, two press documents, is about the four-day working week. Write the script of the first part of your exposé: greet the jury, present the documents, state your problématique, announce your plan and begin your first part, using the oral signposting expected in a French exposé.",
      "minWords": 140,
      "maxWords": 220,
      "rubric": [
        "Greets the jury and presents the dossier (\"Le dossier qui m'a été remis porte sur...\", \"le premier document... le second...\")",
        "States a problématique as a question with inversion and announces a two-part plan (\"dans un premier temps..., avant d'examiner...\")",
        "Uses oral signposting (\"J'en viens donc à\", \"Pour illustrer ce point\", \"Comme je l'ai annoncé\")",
        "Refers to the sources precisely (\"selon le premier document\", \"l'auteur en souligne les limites\")"
      ],
      "modelAnswer": "Bonjour Madame, bonjour Monsieur.\n\nLe dossier qui m'a été remis porte sur la semaine de quatre jours, une organisation du travail que plusieurs entreprises françaises expérimentent depuis peu. Le premier document, un article de presse, présente les résultats d'une expérience menée au Royaume-Uni ; le second, la tribune d'un économiste, en souligne les limites.\n\nJe m'interrogerai donc sur la question suivante : la semaine de quatre jours constitue-t-elle un véritable progrès social, ou risque-t-elle d'accroître la pression sur les salariés ?\n\nPour y répondre, j'évoquerai dans un premier temps les bénéfices observés, avant d'examiner les difficultés que pose sa généralisation.\n\nJ'en viens donc à ma première partie. Selon le premier document, la plupart des entreprises ayant participé à l'expérience britannique ont choisi de la prolonger. Les salariés y déclarent moins de stress et un meilleur équilibre entre vie professionnelle et vie privée. Pour illustrer ce point, je prendrai un exemple personnel : une amie qui travaille dans une mairie m'a confié qu'elle avait enfin retrouvé le temps de faire du sport.\n\nComme je l'ai annoncé, ce bilan mérite toutefois d'être nuancé.",
      "explanation": "The script follows the structure of a DALF exposé: a formal greeting, a presentation of the documents, a problématique phrased as a direct question with inversion (\"constitue-t-elle... ou risque-t-elle...?\") and an announced plan (\"dans un premier temps..., avant d'examiner...\"). Oral signposts (\"J'en viens donc à\", \"Pour illustrer ce point\", \"Comme je l'ai annoncé\") guide the jury, and sources are cited precisely (\"selon le premier document\")."
    }
  ],
  "c1-challenge-connector-chain": [
    {
      "type": "write",
      "prompt": "A travel magazine asks its readers: 'Night trains: a real alternative to the plane?' Write a short for-and-against essay. Link your ideas with the full range of connectors (addition, nuance, cause, consequence, concession and conclusion), each with its correct syntax and mood.",
      "minWords": 140,
      "maxWords": 220,
      "rubric": [
        "Uses connectors of addition and nuance (\"en outre\", \"de surcroît\", \"voire\", \"cela dit\")",
        "Uses cause and consequence markers with the right syntax (\"dans la mesure où\" + indicative, \"en raison de\" + noun, \"si bien que\")",
        "Uses concession with the right mood (\"bien que\" + subjunctive, \"même si\" + indicative, \"il n'en reste pas moins que\")",
        "Concludes with \"en définitive\" or \"somme toute\" and a clear answer to the question"
      ],
      "modelAnswer": "Les trains de nuit : une vraie alternative à l'avion ?\n\nLongtemps jugés dépassés, les trains de nuit font leur retour en Europe. Peuvent-ils pour autant concurrencer l'avion ?\n\nD'une part, leurs atouts sont réels. Dans la mesure où un trajet en train émet beaucoup moins de CO2 qu'un vol, ils répondent aux attentes des voyageurs soucieux de l'environnement. En outre, ils permettent d'économiser une nuit d'hôtel et d'arriver en centre-ville dès le matin. De surcroît, le voyage lui-même devient une expérience, voire un plaisir.\n\nD'autre part, bien que l'offre se soit développée, elle reste limitée. En raison du manque de lignes et de matériel, les billets sont souvent rares et chers, si bien que beaucoup de voyageurs se rabattent sur l'avion. Cela dit, même si un trajet de nuit dure souvent plus de dix heures, certains passagers y voient justement un avantage.\n\nIl n'en reste pas moins que, sans investissements publics massifs, le train de nuit restera un produit de niche.\n\nEn définitive, il s'agit moins d'une alternative à l'avion que d'un complément précieux, à condition que les États lui en donnent les moyens.",
      "explanation": "Each connector carries its own syntax: \"dans la mesure où\" and \"même si\" take the indicative, \"bien que\" and \"à condition que\" the subjunctive (\"se soit développée\", \"donnent\"), \"en raison de\" a noun, and \"si bien que\" introduces a consequence. \"En outre\", \"de surcroît\" and \"voire\" add and intensify, \"cela dit\" and \"il n'en reste pas moins que\" nuance, and \"en définitive\" concludes with a clear answer."
    }
  ],
  "c1-challenge-prepositions-no-hints": [
    {
      "type": "write",
      "prompt": "Write a short literary scene set in Rouen (or another old French town) in the nineteenth century: a character waits for someone who doesn't come. Use the passé simple and the imparfait, at least one passé antérieur, a short passage of free indirect style, and one imperfect or pluperfect subjunctive as a literary touch.",
      "minWords": 140,
      "maxWords": 220,
      "rubric": [
        "Narrates events in the passé simple against an imparfait background",
        "Uses the passé antérieur (\"quand elle eut compté\", \"à peine se fut-elle avancée... que\")",
        "Includes a passage of free indirect style with the character's questions or exclamations and no reporting verb",
        "Uses at least one literary subjunctive (\"elle eût voulu que\", \"qu'il ne la trouvât jamais\")"
      ],
      "modelAnswer": "Ce soir-là, Rouen s'endormait sous une pluie fine. Les cloches de la cathédrale avaient sonné sept heures depuis longtemps, et Adèle attendait toujours sous le porche de l'église Saint-Maclou, son ombrelle inutile à la main.\n\nElle avait reçu le billet le matin même : « Ce soir, à sept heures. Je vous dirai tout. » Elle l'avait relu vingt fois.\n\nQuand elle eut compté pour la troisième fois les pavés de la place, elle comprit qu'il ne viendrait pas. Pourtant, elle ne bougea pas. Comment avait-il pu ? Lui qui jurait, la veille encore, qu'il ne craignait rien ni personne ! Avait-il eu peur de son père ? Ou bien s'était-il moqué d'elle depuis le début ?\n\nUn fiacre passa, puis un autre. À peine se fut-elle avancée vers la rue qu'une voiture s'arrêta devant elle. Son cœur bondit ; mais ce n'était que le cocher de sa tante, envoyé à sa recherche.\n\nElle monta sans un mot. Elle eût voulu que ce cocher ne la trouvât jamais, et que la nuit durât assez longtemps pour qu'elle pût encore espérer.",
      "explanation": "The scene uses the passé simple for events (\"comprit\", \"passa\", \"s'arrêta\", \"monta\") against an imparfait background (\"s'endormait\", \"attendait\"). The passé antérieur marks actions completed just before the next one (\"quand elle eut compté\", \"à peine se fut-elle avancée... qu'\"). The questions and exclamation of the third paragraph are free indirect style, and \"elle eût voulu que ce cocher ne la trouvât jamais\" adds the literary pluperfect and imperfect subjunctives."
    }
  ]
});
