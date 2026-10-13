// Synced from cheneygross-afk/lengo:src/lib/lessons/fr-b2-writing.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { UnitWriting } from "./unitWriting";
import { spaced } from "./fr-units";

// Extra writing tasks for this level's units, so every unit asks the learner to
// write at least three times: keyed by the lesson each is added to (see
// unitWriting.ts). Marked by the AI writing feedback like every writing task.
export const FR_B2_WRITING: UnitWriting = spaced({
  "b2-pattern-je-cherche-quelquun-qui": [
    {
      "type": "write",
      "prompt": "You run a small bakery in Nantes and need a weekend sales assistant. Write a formal email to the local employment agency describing the person you are looking for: the skills and qualities they must have, what you need them to be able to do, and the colleagues they would work with.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Describes the person you want with \"je cherche / nous recherchons quelqu'un qui\" + subjunctive (\"qui sache\", \"qui puisse\", \"qui soit\")",
        "Uses at least two other frames of wish or need with a subjunctive relative: \"j'ai besoin d'un(e)... qui\", \"je voudrais un(e)... qui\", \"il me faut quelqu'un que...\"",
        "Describes the existing staff with the indicative (\"j'ai une collègue qui travaille...\")",
        "Uses a formal opening and closing formula"
      ],
      "modelAnswer": "Madame, Monsieur,\n\nJe tiens une petite boulangerie dans le centre de Nantes et je recherche un vendeur ou une vendeuse pour le week-end. J'ai besoin de quelqu'un qui soit disponible le samedi et le dimanche matin, dès six heures et demie. Je voudrais une personne qui sache gérer la caisse et qui puisse garder son calme quand la file d'attente s'allonge. Il me faut aussi quelqu'un qui ait le sens du contact, car nos clients sont souvent des habitués. Idéalement, je cherche un candidat qui connaisse un peu les produits de boulangerie, mais je peux former une personne motivée.\n\nLe nouveau vendeur travaillerait avec Sophie, qui est chez nous depuis cinq ans et qui connaît tous les clients par leur prénom.\n\nJe vous remercie par avance de votre aide.\n\nVeuillez agréer, Madame, Monsieur, mes salutations distinguées.\n\nPaul Leroux",
      "explanation": "Every relative clause describing the assistant Paul hasn't found yet takes the subjunctive (\"quelqu'un qui soit\", \"une personne qui sache\", \"un candidat qui connaisse\") after je recherche, j'ai besoin de, je voudrais and il me faut. Sophie really exists, so her relatives stay in the indicative: \"qui est\", \"qui connaît\"."
    }
  ],
  "b2-subjunctive-relatives-2": [
    {
      "type": "write",
      "prompt": "A French food blog asks readers to recommend their favourite café or restaurant in their town. Write your review: explain why it is the best place you know, what makes it unique, and ask readers whether they know anywhere else like it.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses a superlative + subjunctive relative (\"le meilleur café que je connaisse\", \"le plus beau que j'aie jamais vu\")",
        "Uses \"le seul\", \"l'unique\" or \"le premier\" + subjunctive relative",
        "Asks a question about existence with the subjunctive (\"Connaissez-vous un endroit qui soit...?\", \"Y a-t-il un restaurant qui...?\")",
        "Keeps the indicative for at least one plain fact (\"c'est le café qui se trouve...\")"
      ],
      "modelAnswer": "Chez Mado, c'est le café qui se trouve juste derrière le marché, et c'est sans doute le meilleur endroit que je connaisse à Rennes. C'est le seul café du quartier où l'on puisse encore lire tranquillement pendant deux heures sans qu'on vous apporte l'addition. Mado prépare elle-même ses gâteaux : sa tarte aux pommes est la meilleure que j'aie jamais goûtée, et son chocolat chaud est le premier qui m'ait vraiment rappelé celui de ma grand-mère.\n\nLa salle est petite, mais c'est l'endroit le plus chaleureux qui existe en ville l'hiver. Le seul défaut que je lui trouve, c'est qu'il ferme à dix-huit heures.\n\nEt vous, connaissez-vous un café qui ait la même ambiance ? Y a-t-il un endroit dans votre ville qui soit aussi accueillant ? Dites-le-moi en commentaire !",
      "explanation": "After superlatives and \"le seul\" / \"le premier\", the subjunctive presents the judgement as personal (\"le meilleur endroit que je connaisse\", \"le seul café où l'on puisse\", \"le premier qui m'ait rappelé\"); questions about existence also take it (\"un café qui ait\"). The plain location fact keeps the indicative: \"le café qui se trouve derrière le marché\"."
    }
  ],
  "b2-lequel-auquel-duquel": [
    {
      "type": "write",
      "prompt": "You have found an old photo of your grandparents' house. Write a description of the picture for a family album: describe the house, the garden and the objects you can see, and say what memories they bring back.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses at least three preposition + lequel / laquelle / lesquels structures (\"la table sur laquelle\", \"le mur contre lequel\")",
        "Uses at least one contracted form: \"auquel\", \"à laquelle\", \"auxquels\" or \"duquel\" (with près de, au bout de, à côté de...)",
        "Uses one subjunctive relative for something that no longer exists or that you can't find (\"il n'y a plus rien qui...\")",
        "Describes positions in the picture (au premier plan, au fond, à gauche...)"
      ],
      "modelAnswer": "Sur cette photo, prise vers 1990, on voit la maison de mes grands-parents à Annecy. Au premier plan, il y a le vieux banc en bois sur lequel mon grand-père lisait son journal chaque matin. Derrière, on reconnaît la grande table sous laquelle nous nous cachions, mes cousins et moi, pendant les repas de famille. À gauche, il y a le cerisier au pied duquel ma grand-mère avait planté des roses, et à droite, la porte du garage, à côté de laquelle on garait nos vélos.\n\nAu fond, on aperçoit la fenêtre de la cuisine, devant laquelle ma grand-mère passait des heures. C'est une maison à laquelle je pense souvent. Aujourd'hui, elle a été vendue, et il n'y a plus rien qui me rappelle aussi bien mon enfance que cette photo.",
      "explanation": "The preposition comes first and lequel agrees with the noun it replaces: \"le banc sur lequel\", \"la table sous laquelle\", \"devant laquelle\". With à and de it contracts: \"le cerisier au pied duquel\", \"une maison à laquelle je pense\" (penser à). \"Il n'y a plus rien qui me rappelle\" takes the subjunctive because the antecedent is negated."
    }
  ],
  "b2-story-gaps-la-galerie": [
    {
      "type": "write",
      "prompt": "Write a short anecdote about a time you searched for something rare: a record, a book, a piece of furniture or a gift. Explain what you were looking for, where you searched, and how the search ended.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Describes the object you were looking for with a subjunctive relative (\"je cherchais un disque qui soit...\")",
        "Switches to the indicative once the object is found (\"j'ai trouvé un disque qui était...\")",
        "Uses at least two preposition + lequel / auquel / duquel structures",
        "Uses \"personne\" or \"aucun\" + subjunctive relative at least once"
      ],
      "modelAnswer": "L'année dernière, pour l'anniversaire de mon père, je cherchais un vieux vinyle de Jacques Brel qui soit en bon état et qui contienne la chanson « Les Bourgeois ». Je suis allé dans tous les magasins de disques de Lille, mais il n'y avait aucun vendeur qui puisse m'aider. Je ne connaissais personne qui ait une collection de vinyles.\n\nUn samedi, je suis entré par hasard dans une petite boutique au fond de laquelle s'entassaient des centaines de cartons. Le propriétaire, avec lequel j'ai discuté pendant une heure, m'a montré une étagère sur laquelle il gardait ses disques les plus rares. Et là, j'ai trouvé un album qui était exactement celui que je voulais, avec la pochette originale. Mon père, auquel j'ai offert le disque une semaine plus tard, en a eu les larmes aux yeux.",
      "explanation": "While the record is only wanted, the relatives are subjunctive (\"un vinyle qui soit... et qui contienne\"), as they are after the negated antecedents \"aucun vendeur qui puisse\" and \"personne qui ait\". Once it is found, the indicative returns: \"un album qui était\". Preposition + lequel joins the places and people: \"au fond de laquelle\", \"avec lequel\", \"sur laquelle\", \"auquel j'ai offert\"."
    }
  ],
  "b2-pattern-pour-que": [
    {
      "type": "write",
      "prompt": "You are going out for the evening and a babysitter is looking after your two children for the first time. Write the note you leave on the kitchen table: what to do and when, and why each instruction matters.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Explains purposes with \"pour que\" / \"afin que\" + subjunctive when the subject changes",
        "Uses \"pour\" / \"afin de\" + infinitive when the subject stays the same",
        "Uses at least two time conjunctions with the subjunctive: \"avant que\", \"jusqu'à ce que\", \"en attendant que\"",
        "Gives instructions in a friendly but clear register (imperative, tu or vous used consistently)"
      ],
      "modelAnswer": "Bonsoir Manon,\n\nMerci de garder Léa et Hugo ce soir ! Voici quelques consignes pour que tout se passe bien.\n\nLes enfants peuvent jouer dans le salon en attendant que le dîner soit prêt. Le gratin est dans le four : il suffit de le réchauffer vingt minutes. Après le repas, donne-leur leur bain avant qu'ils soient trop fatigués, sinon Hugo pleure.\n\nLéa doit être couchée à vingt heures trente. Lis-lui une histoire pour qu'elle s'endorme plus facilement, et laisse la lumière du couloir allumée afin qu'elle n'ait pas peur. Hugo, lui, peut lire dans son lit jusqu'à ce que tu viennes éteindre, vers vingt et une heures.\n\nJ'ai noté mon numéro sur le frigo pour que tu puisses m'appeler à tout moment. Nous rentrerons vers minuit.\n\nBonne soirée !\nClaire",
      "explanation": "\"Pour que\" and \"afin que\" take the subjunctive because the subject changes (\"pour qu'elle s'endorme\", \"afin qu'elle n'ait pas peur\", \"pour que tu puisses\"); with the same subject the infinitive is used (\"il suffit de le réchauffer\"). \"En attendant que\", \"avant que\" and \"jusqu'à ce que\" always take the subjunctive: \"soit prêt\", \"soient\", \"viennes\"."
    }
  ],
  "b2-subjunctive-conjunctions-2": [
    {
      "type": "write",
      "prompt": "You want to adopt a cat, but your lease doesn't allow pets. Write a dialogue between you and your landlord in which you negotiate: he raises his fears, and you each set conditions until you reach an agreement.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Sets conditions with \"à condition que\" / \"pourvu que\" + subjunctive",
        "Uses \"à moins que\" (with or without the ne explétif) and \"sans que\" + subjunctive",
        "Uses \"de peur que\" / \"de crainte que\" + subjunctive",
        "Uses at least one infinitive partner when the subject is the same (\"à condition de\", \"sans\", \"de peur de\")"
      ],
      "modelAnswer": "— Monsieur Garnier, j'aimerais adopter un chat. Est-ce que ce serait possible ?\n— Hum… Je n'aime pas trop l'idée, de peur qu'il abîme le parquet.\n— Je comprends. Je pourrais acheter un griffoir, pour qu'il fasse ses griffes ailleurs.\n— Et les voisins ? Je ne veux pas de problèmes.\n— Un chat ne fait presque pas de bruit. Il peut vivre ici sans que personne s'en rende compte.\n— D'accord, mais à condition que vous preniez une assurance supplémentaire.\n— Bien sûr, à condition de pouvoir la choisir moi-même.\n— Très bien. Et je viendrai vérifier l'appartement une fois par an, à moins que vous ne préfériez m'envoyer des photos.\n— Les photos, c'est parfait ! Pourvu que le chat veuille bien poser…\n— Ha ! Alors c'est entendu. Je vous envoie un avenant au bail cette semaine.",
      "explanation": "Condition, negation and fear conjunctions all take the subjunctive when the subject changes: \"de peur qu'il abîme\", \"sans que personne s'en rende compte\", \"à condition que vous preniez\", \"à moins que vous ne préfériez\" (with the optional ne explétif), \"pourvu que le chat veuille\". With the same subject, \"à condition de pouvoir\" takes the infinitive."
    }
  ],
  "b2-story-gaps-debat-logement": [
    {
      "type": "write",
      "prompt": "Your town council is debating a proposal to turn an empty office building into social housing. Write the short speech you give at the public meeting, either for or against the project: answer the other side's arguments and set your conditions.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Contrasts or gives reasons with indicative conjunctions: \"alors que\", \"tandis que\", \"puisque\", \"parce que\"",
        "Concedes with \"bien que\" + subjunctive and sets a condition with \"à condition que\" + subjunctive",
        "Uses \"après que\" + indicative and \"avant que\" + subjunctive",
        "Uses a formal speech register (Mesdames et Messieurs, nous, vous)"
      ],
      "modelAnswer": "Mesdames et Messieurs,\n\nCe bâtiment est vide depuis six ans, alors que des centaines de familles attendent un logement. Puisque la ville en est propriétaire, pourquoi ne pas le transformer ? Certains disent que le quartier n'a pas besoin de nouveaux habitants, tandis que les commerçants de la rue ferment les uns après les autres faute de clients.\n\nBien que le projet coûte cher, il sera en grande partie financé par l'État. Je le soutiens donc, mais à condition que la mairie crée aussi une crèche et des places de stationnement, pour que les nouveaux habitants soient bien accueillis.\n\nAprès que le conseil aura voté, il faudra consulter les riverains. Il faut agir avant que le bâtiment ne se dégrade davantage. Je vous remercie.",
      "explanation": "\"Alors que\", \"tandis que\" and \"puisque\" express contrast and known causes, so they take the indicative; \"après que\" also takes the indicative, here the futur antérieur (\"aura voté\"). \"Bien que\", \"à condition que\", \"pour que\" and \"avant que\" (with the optional ne explétif) require the subjunctive: \"coûte\", \"crée\", \"soient\", \"se dégrade\"."
    }
  ],
  "b2-talk-about-you-plans-conditions": [
    {
      "type": "write",
      "prompt": "Write a diary entry about your plans for the next two years (studies, work, travel or a move): say what you will do as soon as certain things happen, what you won't do as long as others haven't happened, and what could change your plans.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses \"quand\", \"dès que\" or \"une fois que\" + futur or futur antérieur for future events (never the present)",
        "Uses \"tant que\" + futur (often with a negation)",
        "Uses \"à moins que\" and \"avant que\" or \"jusqu'à ce que\" + subjunctive",
        "Writes in the first person in a personal, reflective tone"
      ],
      "modelAnswer": "Dimanche 3 mars\n\nCe soir, j'ai enfin fait le point sur mes projets. Dès que j'aurai obtenu mon master en juin, je chercherai un poste dans une ONG à Bruxelles. Une fois que j'aurai trouvé un travail, je pourrai louer mon propre appartement, au lieu de vivre en colocation.\n\nTant que je n'aurai pas assez d'économies, je ne partirai pas en voyage. Pourtant, je rêve de traverser le Canada en train ! Je le ferai quand j'aurai trente ans, à moins que je ne trouve un emploi là-bas avant.\n\nIl faut aussi que je parle à Thomas avant qu'il signe son nouveau contrat à Lyon. Je ne veux pas prendre de décision jusqu'à ce que nous sachions où nous voulons vivre tous les deux. Bref, beaucoup de « si » !",
      "explanation": "Time conjunctions about the future take the indicative future: \"dès que j'aurai obtenu\", \"une fois que j'aurai trouvé\", \"quand j'aurai\", \"tant que je n'aurai pas\" (futur antérieur for an action completed first). \"À moins que\", \"avant que\" and \"jusqu'à ce que\" take the subjunctive: \"je ne trouve\", \"il signe\", \"nous sachions\"."
    }
  ],
  "b2-pattern-que-jaie-que-je-sois": [
    {
      "type": "write",
      "prompt": "You work for an online furniture shop. A customer, Mme Lefèvre, received her table two weeks late and with a scratched leg. Write a formal email to apologise: react to what happened, explain what went wrong, and say what you are doing about it.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Reacts to completed events with an emotion + past subjunctive (\"nous sommes désolés que vous ayez dû...\", \"nous regrettons que la table soit arrivée...\")",
        "Uses both auxiliaries in the past subjunctive (avoir and être), with correct agreement",
        "Uses the present subjunctive for something still to come (\"nous souhaitons que vous soyez satisfaite\")",
        "Uses formal register: vous, a formal opening and closing formula"
      ],
      "modelAnswer": "Madame Lefèvre,\n\nNous avons bien reçu votre message et nous sommes sincèrement désolés que votre commande soit arrivée avec deux semaines de retard. Nous regrettons également que vous ayez dû attendre sans recevoir aucune information de notre part.\n\nIl est inacceptable que la table ait été livrée avec un pied rayé. Il semble que le colis soit tombé pendant le transport, et nous sommes surpris que notre transporteur ne nous ait pas signalé l'incident.\n\nNous vous proposons de remplacer le pied endommagé gratuitement, ou de vous rembourser vingt pour cent du prix. Nous souhaitons que vous soyez pleinement satisfaite de votre achat et que vous nous fassiez de nouveau confiance.\n\nNous vous prions d'agréer, Madame, l'expression de nos salutations distinguées.\n\nJulien Marchal\nService client",
      "explanation": "Emotions about things already done take the past subjunctive: \"que votre commande soit arrivée\" (être, agreeing with commande), \"que vous ayez dû\", \"que la table ait été livrée\", \"que notre transporteur ne nous ait pas signalé\". The wish about the future keeps the present subjunctive: \"que vous soyez satisfaite\", \"que vous nous fassiez\"."
    }
  ],
  "b2-story-gaps-le-reve-de-julia": [
    {
      "type": "write",
      "prompt": "Write a short life story (real or invented) about what your parents wanted for you when you were young, the choices you actually made, and how they reacted to them.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses a past main verb + present subjunctive for what they wanted (\"ils voulaient que je fasse...\", \"il fallait que...\")",
        "Uses the past subjunctive for reactions to completed choices (\"ils ont été déçus que j'aie abandonné...\")",
        "Uses at least one past subjunctive with être and correct agreement",
        "Narrates in the past with the passé composé and imparfait"
      ],
      "modelAnswer": "Quand j'étais petite, mes parents voulaient que je devienne médecin, comme mon grand-père. Il fallait que je travaille dur à l'école et que je sois toujours la première de la classe. Mon père aurait aimé que je fasse du latin, et ma mère souhaitait que j'apprenne le piano.\n\nMais à dix-huit ans, j'ai choisi d'étudier le théâtre. Au début, mes parents ont été très déçus que j'aie abandonné la médecine. Ma mère était triste que je sois partie à Paris si jeune, et mon père ne comprenait pas que j'aie refusé une place à la faculté.\n\nAujourd'hui, j'ai trente-cinq ans et je dirige une petite compagnie. L'année dernière, ils sont venus voir mon spectacle. Mon père m'a dit qu'il était fier que j'aie suivi mon propre chemin.",
      "explanation": "What the parents wanted is in the present subjunctive even after past main verbs (\"ils voulaient que je devienne\", \"il fallait que je travaille\"), because modern French doesn't shift the subjunctive. Their reactions to choices already made take the past subjunctive: \"que j'aie abandonné\", \"que je sois partie\" (agreeing with the female narrator), \"que j'aie suivi\"."
    }
  ],
  "b2-choose-explain-esperer-souhaiter": [
    {
      "type": "write",
      "prompt": "A French forum asks: « Les voitures vont-elles disparaître des centres-villes d'ici vingt ans ? » Write your post: say what you think, what seems likely or only possible, and what you hope or wish will happen.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Contrasts \"je pense / je crois que\" + indicative with \"je ne pense pas que\" / \"je doute que\" + subjunctive",
        "Contrasts \"il est probable que\" + indicative with \"il est possible que\" + subjunctive",
        "Contrasts \"j'espère que\" + indicative with \"je souhaite que\" + subjunctive",
        "Uses \"il me semble que\" (indicative) or \"il semble que\" (subjunctive) correctly"
      ],
      "modelAnswer": "Je pense que les voitures vont devenir beaucoup plus rares dans les centres-villes, mais je ne crois pas qu'elles disparaissent complètement. Il est probable que les grandes villes comme Paris ou Lyon interdiront bientôt les moteurs thermiques. En revanche, il est possible que les petites villes gardent leurs parkings encore longtemps, parce que les transports en commun y sont insuffisants.\n\nIl me semble que les mentalités ont déjà changé : mes amis utilisent le vélo ou l'autopartage. Pourtant, il semble que beaucoup de gens aient encore besoin d'une voiture pour travailler.\n\nPersonnellement, j'espère que nos centres-villes seront plus calmes et plus verts. Je souhaite surtout que les personnes âgées et handicapées puissent toujours se déplacer facilement. Et vous, qu'en pensez-vous ?",
      "explanation": "Certainty takes the indicative (\"je pense que... vont\", \"il est probable que... interdiront\", \"il me semble que... ont changé\", \"j'espère que... seront\"), while doubt, mere possibility and wishes take the subjunctive (\"je ne crois pas qu'elles disparaissent\", \"il est possible que... gardent\", \"il semble que... aient\", \"je souhaite que... puissent\")."
    }
  ],
  "b2-mixed-practice-politeness-subjunctive": [
    {
      "type": "write",
      "prompt": "You are about to present an important project to a client, and you need help from your manager, Mme Rousseau. Write her a polite email asking for several things (documents, a meeting, feedback) and suggesting how to organise the presentation.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Makes polite requests with the conditional + subjunctive: \"je voudrais que\", \"j'aimerais que\", \"ce serait bien que\"",
        "Makes a suggestion with \"il vaudrait mieux que\" / \"il serait préférable que\" + subjunctive",
        "Uses \"ça me ferait plaisir que\" / \"je serais ravi(e) que\" or a similar emotion + subjunctive",
        "Keeps a polite professional register with vous throughout"
      ],
      "modelAnswer": "Bonjour Madame Rousseau,\n\nComme vous le savez, je présente le projet Delta au client jeudi prochain. Pour bien me préparer, je voudrais que vous m'envoyiez les chiffres du dernier trimestre, si possible avant mercredi. J'aimerais aussi que nous fassions un point ensemble demain après-midi, pour que vous puissiez relire mes diapositives.\n\nPar ailleurs, il vaudrait mieux que Karim soit présent jeudi, puisqu'il connaît bien la partie technique. Ce serait bien qu'il prenne la parole pendant une dizaine de minutes.\n\nEnfin, je serais ravi que vous assistiez à la présentation, même seulement au début : cela rassurerait certainement le client.\n\nJe vous remercie par avance de votre aide.\n\nBien cordialement,\nThomas",
      "explanation": "The conditional softens each request, and the verb that follows takes the subjunctive: \"je voudrais que vous m'envoyiez\", \"j'aimerais que nous fassions\", \"il vaudrait mieux que Karim soit\", \"ce serait bien qu'il prenne\", \"je serais ravi que vous assistiez\". \"Pour que vous puissiez\" adds a purpose."
    }
  ],
  "b2-pattern-si-javais": [
    {
      "type": "write",
      "prompt": "A French blog asks its readers: « Que feriez-vous si vous aviez une année entière de liberté, payée ? » Write your blog post imagining how you would spend it, month by month or step by step.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses \"si\" + imparfait + conditionnel présent, never a conditional after si",
        "Uses at least four different irregular conditional stems (ser-, aur-, fer-, ir-, pourr-, voudr-, devr-, viendr-...)",
        "Uses at least one real condition with \"si\" + présent for comparison",
        "Organises the post clearly (d'abord, ensuite, enfin...)"
      ],
      "modelAnswer": "Si j'avais une année entière de liberté, je ne resterais certainement pas chez moi ! D'abord, j'irais en Amérique du Sud. Je ferais un cours d'espagnol intensif à Buenos Aires, et si j'avais encore de l'énergie, je voudrais traverser la Patagonie à pied.\n\nEnsuite, je rentrerais en France pour faire les vendanges en Bourgogne. Ce serait dur, mais je pourrais enfin comprendre comment on fait le vin. Mes amis viendraient sûrement me rejoindre pour quelques jours.\n\nEnfin, si j'avais le courage, j'écrirais un livre sur ce voyage. Évidemment, je devrais apprendre à être patient, ce qui n'est pas mon point fort !\n\nBon, cette année de liberté n'arrivera sans doute jamais. Mais si je trouve deux semaines de vacances cet été, je commencerai par l'Espagne !",
      "explanation": "Every hypothesis uses si + imparfait followed by the conditional (\"si j'avais..., j'irais\"), with irregular stems: ir-, fer-, voudr-, ser-, pourr-, viendr-, devr-. The last sentence contrasts a real, possible condition: si + présent → futur (\"si je trouve..., je commencerai\")."
    }
  ],
  "b2-circuit-comme-si": [
    {
      "type": "write",
      "prompt": "Describe a person you know (a colleague, a neighbour, a relative) who behaves in a surprising or annoying way. Use comparisons with things that are not true to show what they are like.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses \"comme si\" + imparfait for a simultaneous comparison (\"il parle comme s'il savait tout\")",
        "Uses \"comme si\" + plus-que-parfait for an earlier event (\"comme s'il ne m'avait jamais vu\")",
        "Uses \"comme si\" after main verbs in different tenses (present and past)",
        "Includes physical and character description"
      ],
      "modelAnswer": "Mon voisin du troisième, Gérard, est un personnage étonnant. Il a une soixantaine d'années, une moustache grise et il porte toujours un costume, même le dimanche, comme s'il allait à un rendez-vous important.\n\nGérard parle de tout comme s'il était expert : la politique, la médecine, le football… Quand je lui ai dit que j'étais architecte, il m'a expliqué comment construire un immeuble, comme si j'avais fait mes études pour rien !\n\nCe qui est encore plus bizarre, c'est qu'il me salue certains jours comme si nous étions de vieux amis, et d'autres jours il passe à côté de moi comme s'il ne m'avait jamais vu. Pourtant, il est gentil : l'hiver dernier, il a déneigé tout le trottoir, comme si c'était son travail. Je crois qu'au fond, il se sent un peu seul.",
      "explanation": "\"Comme si\" never takes a future or conditional: + imparfait for something imagined at the same time (\"comme s'il allait\", \"comme s'il était expert\", \"comme si nous étions\"), + plus-que-parfait for something imagined before (\"comme si j'avais fait\", \"comme s'il ne m'avait jamais vu\"), whatever the tense of the main verb."
    }
  ],
  "b2-story-gaps-debat-ia": [
    {
      "type": "write",
      "prompt": "A student magazine asks: « Et si l'intelligence artificielle écrivait toutes nos lettres et nos devoirs ? » Write a short article imagining the consequences, good and bad, and give your opinion.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Imagines consequences with \"si\" + imparfait + conditionnel",
        "Uses \"même si\" + imparfait at least once",
        "Uses \"et si\" + imparfait to open or relaunch a hypothesis",
        "Gives a personal conclusion with a real condition (si + présent) or advice"
      ],
      "modelAnswer": "Et si demain, les machines écrivaient toutes nos lettres et nos dissertations ? À première vue, ce serait formidable : les élèves gagneraient des heures, et personne n'aurait plus peur de la page blanche.\n\nMais si l'intelligence artificielle faisait tout à notre place, nous perdrions peu à peu l'habitude de réfléchir. Une lettre d'amour n'aurait plus la même valeur si elle était rédigée par un logiciel. Et les professeurs ne sauraient plus qui a vraiment compris le cours.\n\nMême si l'IA pouvait écrire mieux que nous, elle ne pourrait pas dire ce que nous ressentons vraiment. Écrire, c'est aussi apprendre à se connaître.\n\nÀ mon avis, si nous utilisons ces outils intelligemment, pour corriger ou pour chercher des idées, ils nous aideront. Mais il ne faut pas leur laisser le dernier mot.",
      "explanation": "Unreal hypotheses use si + imparfait + conditionnel (\"si l'IA faisait..., nous perdrions\"); \"et si\" + imparfait opens the scenario as a suggestion, and \"même si\" + imparfait concedes a hypothesis (\"même si l'IA pouvait\"). The conclusion switches to a real condition, si + présent → futur (\"si nous utilisons..., ils nous aideront\")."
    }
  ],
  "b2-talk-about-you-si-tu-pouvais": [
    {
      "type": "write",
      "prompt": "Write a diary entry in which you imagine two other versions of your life: in another city or country, and in another job. Then come back to reality and say what you will really do if certain things happen.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Imagines another life with \"si\" + imparfait + conditionnel (\"si je vivais ailleurs...\")",
        "Uses at least one \"si j'étais...\" or \"si je pouvais...\"",
        "Contrasts with real conditions: \"si\" + présent + futur or présent",
        "Uses a reflective first-person diary tone"
      ],
      "modelAnswer": "Mardi soir\n\nAujourd'hui, en rentrant du bureau sous la pluie, je me suis demandé à quoi ressemblerait ma vie si je vivais ailleurs. Si j'habitais à Lisbonne, par exemple, je prendrais mon café au soleil tous les matins et j'irais à la plage après le travail. Je parlerais portugais et j'aurais sûrement d'autres amis.\n\nEt si j'étais boulangère au lieu de comptable ? Je me lèverais à quatre heures, mais je ferais quelque chose de concret avec mes mains. Si je pouvais tout recommencer, je choisirais peut-être ce métier.\n\nBon, revenons à la réalité. Si mon entreprise accepte le télétravail en septembre, je passerai un mois au Portugal. Et si j'ai du temps le week-end, je m'inscrirai à un atelier de pâtisserie. On verra bien !",
      "explanation": "The imagined lives use si + imparfait + conditionnel (\"si j'habitais..., je prendrais\", \"si j'étais boulangère\", \"si je pouvais..., je choisirais\"). Back in reality, conditions that may really happen take si + présent and the future: \"si mon entreprise accepte..., je passerai\"."
    }
  ],
  "b2-pattern-si-javais-su": [
    {
      "type": "write",
      "prompt": "Write a short anecdote about a day when everything went wrong (a missed train, a lost key, a forgotten appointment). Tell what happened, then imagine what would have happened if you had done things differently.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses \"si\" + plus-que-parfait + conditionnel passé at least three times",
        "Uses both avoir and être verbs in the conditionnel passé, with correct agreement",
        "Uses at least one negative past hypothesis (\"si je n'avais pas...\")",
        "Narrates the facts with the passé composé and imparfait"
      ],
      "modelAnswer": "Le mois dernier, j'avais un entretien d'embauche important à Paris. La veille, je me suis couchée tard et j'ai oublié de mettre mon réveil. Le matin, je me suis réveillée à huit heures, alors que mon train partait à huit heures et quart !\n\nJ'ai couru jusqu'à la gare, mais le train était déjà parti. Si je m'étais couchée plus tôt, je ne me serais pas réveillée en retard. Et si j'avais mis mon réveil, je serais arrivée à l'heure à la gare.\n\nJ'ai appelé l'entreprise pour m'excuser. Si je n'avais pas appelé, ils m'auraient sûrement oubliée. Heureusement, la directrice a accepté de me recevoir l'après-midi. Si j'avais su que tout finirait bien, je n'aurais pas autant paniqué !",
      "explanation": "Each unreal past condition uses si + plus-que-parfait (\"si je m'étais couchée\", \"si j'avais mis\") and the conditionnel passé (\"je ne me serais pas réveillée\", \"je serais arrivée\", \"ils m'auraient oubliée\"). Être verbs and pronominal verbs agree with the female narrator, and the negative \"si je n'avais pas appelé\" imagines the opposite of what happened."
    }
  ],
  "b2-story-gaps-deux-amis-decisions": [
    {
      "type": "write",
      "prompt": "Two friends, Lucas and Inès, meet again ten years after university. Write their dialogue: they compare the choices they made and imagine their other lives, now and in the past.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses past hypotheticals: \"si\" + plus-que-parfait + conditionnel passé",
        "Uses at least two mixed hypotheticals: \"si\" + plus-que-parfait + conditionnel présent (\"si j'avais accepté, je vivrais...\")",
        "Uses \"si seulement\" + plus-que-parfait or \"comme si\" + plus-que-parfait",
        "Uses a natural spoken register (questions, reactions, tu)"
      ],
      "modelAnswer": "— Inès ! Dix ans déjà… Tu es toujours à Marseille ?\n— Oui, toujours. Si j'avais accepté ce poste à Montréal, je vivrais au Canada aujourd'hui. Parfois, j'y pense.\n— Et pourquoi tu as refusé ?\n— Ma mère était malade. Si elle n'avait pas été malade, je serais partie sans hésiter. Et toi, tu ne regrettes pas d'avoir quitté la médecine ?\n— Pas du tout. Si j'avais continué, je serais peut-être médecin maintenant, mais je serais malheureux. Avec mon restaurant, je suis libre.\n— Tu parles comme si tu avais toujours su ce que tu voulais !\n— Ha ! Pas vraiment. Si tu ne m'avais pas encouragé à l'époque, je n'aurais jamais osé.\n— Si seulement on s'était revus plus tôt ! On aurait pu ouvrir le restaurant ensemble.",
      "explanation": "Mixed hypotheticals join a past condition to a present result: \"si j'avais accepté, je vivrais\", \"si j'avais continué, je serais... malheureux\". Fully past ones use the conditionnel passé (\"je serais partie\", \"je n'aurais jamais osé\", \"on aurait pu\"). \"Comme si tu avais toujours su\" and \"si seulement on s'était revus\" take the plus-que-parfait for something unreal in the past."
    }
  ],
  "b2-regrets-reproaches": [
    {
      "type": "write",
      "prompt": "You moved house last month and the removal company you hired did a bad job: they arrived late, broke a mirror and left boxes in the wrong rooms. Write an online review of the company: say what they should or could have done, and what you regret yourself.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Makes reproaches with \"ils auraient dû\" / \"ils auraient pu\" + infinitive",
        "Uses \"il aurait fallu\" + infinitive or \"il aurait fallu que\" + subjunctive",
        "Expresses your own regret with \"j'aurais mieux fait de\" or \"je regrette de\" + past infinitive",
        "Uses the register of an online review (title, rating or recommendation)"
      ],
      "modelAnswer": "Déménagement raté – 1 étoile sur 5\n\nJ'ai fait appel à DéménaVite pour mon déménagement à Toulouse le mois dernier, et je ne les recommande pas. Les déménageurs sont arrivés avec trois heures de retard. Ils auraient au moins pu nous prévenir par téléphone !\n\nEnsuite, ils ont cassé le grand miroir de ma grand-mère. Ils auraient dû l'emballer dans une couverture, comme je le leur avais demandé. Il aurait aussi fallu lire les étiquettes : nous avons retrouvé les cartons de la cuisine dans la chambre et ceux du salon dans la salle de bains.\n\nJe regrette de ne pas avoir comparé plusieurs devis. J'aurais mieux fait de choisir une entreprise un peu plus chère, mais sérieuse. Bref, si vous déménagez, évitez cette société !",
      "explanation": "Reproaches use the conditionnel passé of devoir and pouvoir + infinitive (\"ils auraient dû l'emballer\", \"ils auraient pu nous prévenir\") and \"il aurait fallu\" + infinitive. The writer's own regrets use \"je regrette de ne pas avoir comparé\" (past infinitive) and \"j'aurais mieux fait de choisir\"."
    }
  ],
  "b2-chain-histoire-alternative": [
    {
      "type": "write",
      "prompt": "A history magazine runs a column called « Et si… ? ». Choose one historical event or invention (the printing press, the first flight, the internet...) and write a short article imagining what would have happened if it had never existed, and how our lives would be different today.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Chains past consequences with \"si\" + plus-que-parfait + conditionnel passé",
        "Brings the consequences to the present with mixed hypotheticals (si + plus-que-parfait + conditionnel présent)",
        "Uses \"ça aurait pu\" / \"on aurait pu\" or \"il aurait fallu\" for a missed possibility",
        "Uses a clear article structure with a title and a conclusion"
      ],
      "modelAnswer": "Et si Gutenberg n'avait jamais inventé l'imprimerie ?\n\nSi Gutenberg n'avait pas mis au point l'imprimerie vers 1450, les livres seraient restés très rares et très chers. Seuls les moines et les nobles auraient appris à lire. Les idées de la Réforme ne se seraient pas diffusées aussi vite, et l'histoire de l'Europe aurait sans doute été très différente.\n\nSans livres imprimés, la science aurait progressé plus lentement. Il aurait fallu recopier chaque traité à la main, et beaucoup de découvertes auraient pu disparaître.\n\nEt aujourd'hui ? Si l'imprimerie n'avait pas existé, nous n'aurions peut-être pas d'école pour tous, et beaucoup de gens ne sauraient pas lire. Internet lui-même serait peut-être encore un rêve.\n\nUne simple machine a donc changé le monde.",
      "explanation": "The chain of past consequences uses si + plus-que-parfait (\"si Gutenberg n'avait pas mis au point\") with the conditionnel passé (\"seraient restés\", \"auraient appris\", \"auraient pu disparaître\"). The last paragraph switches to mixed hypotheticals with a present result: \"si l'imprimerie n'avait pas existé, nous n'aurions pas\", \"ne sauraient pas\"."
    }
  ],
  "b2-reporting-verbs": [
    {
      "type": "write",
      "prompt": "You are a journalist for a local newspaper. Yesterday the coach of your town's football club gave an interview after a heavy defeat. Write a short article reporting what he said, using precise reporting verbs rather than just « dire ».",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses at least four different reporting verbs (affirmer, expliquer, reconnaître, avouer, promettre, ajouter, prétendre, annoncer...)",
        "Shifts tenses correctly after a past reporting verb (présent → imparfait, passé composé → plus-que-parfait, futur → conditionnel)",
        "Uses \"nier que\" + subjunctive",
        "Uses a neutral journalistic register (third person, no direct address)"
      ],
      "modelAnswer": "Après la défaite 4-0 de l'US Villeneuve samedi soir, l'entraîneur Marc Delorme a accepté de répondre aux questions des journalistes.\n\nIl a d'abord reconnu que son équipe avait très mal joué et il a avoué qu'il était lui-même déçu. Il a expliqué que deux joueurs importants étaient blessés depuis trois semaines et que les remplaçants manquaient d'expérience.\n\nInterrogé sur les rumeurs de départ, il a nié qu'il y ait eu un conflit avec le président du club. Il a affirmé que l'ambiance restait bonne dans le vestiaire.\n\nEnfin, il a promis aux supporters que l'équipe se battrait jusqu'à la fin de la saison et il a ajouté qu'il ne démissionnerait pas. Prochain match : samedi, à domicile.",
      "explanation": "Each reporting verb says how something was said: \"a reconnu\", \"a avoué\", \"a expliqué\", \"a affirmé\", \"a promis\", \"a ajouté\". After a past reporting verb the tenses shift (\"avait mal joué\", \"était déçu\", \"se battrait\", \"ne démissionnerait pas\"), while \"nier que\" takes the subjunctive (\"qu'il y ait eu\")."
    }
  ],
  "b2-reported-speech-2": [
    {
      "type": "write",
      "prompt": "A classmate missed yesterday's lecture on climate and agriculture. Write a summary of what the lecturer said, without quoting every sentence, so that your classmate can catch up.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Summarises with \"selon lui / elle\" or \"d'après lui / elle\" instead of quoting",
        "Uses reported speech with correct backshift, and keeps the present for a general truth that is still valid",
        "Shifts time and demonstrative words (ce jour-là, le lendemain, cette semaine-là...)",
        "Reports several ideas smoothly with connecting reporting verbs (ajouter, préciser, conclure...)"
      ],
      "modelAnswer": "Salut Chloé,\n\nVoici un résumé du cours d'hier. Le professeur Martin a parlé de l'impact du climat sur l'agriculture en France. Selon lui, les sécheresses sont devenues deux fois plus fréquentes en trente ans. Il a expliqué que les agriculteurs du Sud avaient déjà commencé à cultiver d'autres plantes, comme le sorgho, qui a besoin de moins d'eau.\n\nIl a précisé que l'eau est une ressource limitée et que l'irrigation ne pourrait pas tout résoudre. D'après lui, la solution viendrait plutôt de la diversité des cultures.\n\nEnfin, il a annoncé qu'il mettrait les diapositives en ligne le lendemain et que l'examen porterait surtout sur ce chapitre. Il a conclu en disant qu'il fallait lire l'article de Dupont avant le cours suivant.\n\nBon courage !\nMaxime",
      "explanation": "\"Selon lui\" and \"d'après lui\" summarise the lecturer's ideas without long quotes. After past reporting verbs the tenses shift (\"étaient devenues\", \"avaient commencé\", \"ne pourrait pas\", \"mettrait\"), but a general truth keeps the present (\"l'eau est une ressource limitée\"). Time words shift too: \"le lendemain\", \"le cours suivant\"."
    }
  ],
  "b2-transformations-messages-vocaux": [
    {
      "type": "write",
      "prompt": "Your flatmate Alex is away for the weekend, and four people left voicemails on the landline for them (their mother, their boss, a friend, the plumber). Write Alex a text message passing on each message: what they said, asked and told Alex to do.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Reports statements with \"il / elle a dit que\" and backshift",
        "Reports yes/no questions with \"si\" and open questions with a question word or \"ce que\"",
        "Reports orders and requests with \"de\" + infinitive and \"de ne pas\" + infinitive",
        "Changes pronouns correctly from the speaker's point of view to yours (je → il / elle, tu → Alex)"
      ],
      "modelAnswer": "Salut Alex ! Plein de messages pour toi ce week-end !\n\nTa mère a appelé samedi. Elle a dit qu'elle viendrait à Paris le mois prochain et elle voulait savoir si tu pourrais l'héberger.\n\nTon chef a laissé un message. Il t'a demandé de le rappeler avant lundi et de ne pas oublier le rapport pour la réunion.\n\nSarah a téléphoné aussi : elle se demandait ce que tu faisais vendredi soir et où tu voulais fêter ton anniversaire.\n\nEnfin, le plombier a dit qu'il passerait mardi matin. Il a demandé qu'on laisse la clé chez la gardienne.\n\nBisous et bon retour !",
      "explanation": "Statements shift tense (\"elle viendrait\", \"il passerait\"); questions become \"si tu pourrais\", \"ce que tu faisais\", \"où tu voulais\", with no inversion or est-ce que; orders become \"de le rappeler\" and \"de ne pas oublier\". \"Il a demandé qu'on laisse\" uses the subjunctive because the request has its own subject."
    }
  ],
  "b2-qa-il-ma-demande-si": [
    {
      "type": "write",
      "prompt": "Write a short anecdote about a time you were questioned at length: at customs, at a police check, or in a job interview. Report the questions you were asked and the instructions you were given, and say how it ended.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Reports yes/no questions with \"si\" and open questions with où, quand, pourquoi, combien...",
        "Uses \"ce que\" and \"ce qui\" correctly for indirect questions (never \"qu'est-ce que\" in reported speech)",
        "Reports orders with \"demander / dire de\" + infinitive",
        "Backshifts tenses after a past reporting verb"
      ],
      "modelAnswer": "L'été dernier, en arrivant à l'aéroport de Montréal, j'ai été arrêtée au contrôle des douanes. Le douanier m'a d'abord demandé d'où je venais et combien de temps je comptais rester au Canada. Puis il a voulu savoir si je voyageais seule et pourquoi j'avais une valise aussi lourde.\n\nIl m'a demandé d'ouvrir ma valise et de ne pas toucher à mes affaires. Il m'a demandé ce que contenaient les bocaux enveloppés dans mes pulls. Je lui ai expliqué que c'était de la confiture faite par ma grand-mère pour ma cousine. Il m'a demandé ce qui me faisait rire, car je n'arrivais pas à rester sérieuse !\n\nFinalement, il m'a dit que je pouvais garder la confiture, mais que je devais la déclarer la prochaine fois.",
      "explanation": "Indirect questions keep normal word order: \"d'où je venais\", \"combien de temps je comptais\", \"si je voyageais\", \"pourquoi j'avais\". \"Ce que\" replaces the object (\"ce que contenaient les bocaux\") and \"ce qui\" the subject (\"ce qui me faisait rire\"); orders become \"de\" + infinitive (\"d'ouvrir\", \"de ne pas toucher\")."
    }
  ],
  "b2-minimal-pairs-en-tout-en": [
    {
      "type": "write",
      "prompt": "Write a short anecdote telling how you met someone important in your life (a best friend, a partner, a mentor): where you were, what you were both doing, and what happened next.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses the gérondif (en + -ant) to say when or how something happened, with the same subject as the main verb",
        "Uses \"tout en\" + -ant at least twice, for simultaneous actions or a contrast",
        "Includes at least one irregular or spelling-trap form (en faisant, en sachant, en mangeant, en commençant...)",
        "Narrates in the past with the passé composé and imparfait"
      ],
      "modelAnswer": "J'ai rencontré ma meilleure amie, Léa, il y a dix ans, en faisant la queue devant un cinéma à Bordeaux. Il pleuvait, et j'avais oublié mon parapluie. En me voyant trempée, elle m'a proposé de partager le sien.\n\nEn attendant l'ouverture des portes, nous avons parlé de films. Tout en discutant, j'ai compris que nous aimions exactement les mêmes réalisateurs. Elle m'a dit, tout en riant, qu'elle venait voir ce film pour la troisième fois !\n\nAprès la séance, nous sommes allées boire un chocolat chaud. En sortant du café, nous avons échangé nos numéros. Depuis, nous nous voyons chaque semaine. Tout en habitant maintenant dans deux villes différentes, nous restons très proches. En y repensant, je suis contente d'avoir oublié mon parapluie ce jour-là !",
      "explanation": "The gérondif always shares the subject of the main verb: \"j'ai rencontré... en faisant la queue\", \"en me voyant, elle m'a proposé\". \"Tout en\" stresses two simultaneous actions (\"tout en discutant\", \"tout en riant\") or a contrast (\"tout en habitant dans deux villes différentes, nous restons proches\")."
    }
  ],
  "b2-gerondif-participe-present-2": [
    {
      "type": "write",
      "prompt": "Write a short news item (fait divers) for a local newspaper about an unusual event in your town: an escaped animal, a rescue, a lost object returned. Use the formal written style of the press.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses the present participle without \"en\" to replace a relative clause (\"les passants voyant la scène\" = qui voyaient)",
        "Uses the present participle or \"ayant / étant\" + past participle to give a cause",
        "Uses at least one agreeing adjectif verbal (\"une situation surprenante\", \"des passants hésitants\")",
        "Uses a factual journalistic register (third person, title, place and time)"
      ],
      "modelAnswer": "Une vache en promenade dans le centre-ville\n\nMardi matin, les habitants de Saint-Lô ont assisté à une scène surprenante. Une vache, s'étant échappée d'une ferme voisine, s'est promenée pendant une heure dans la rue principale.\n\nLes automobilistes, ne sachant pas comment réagir, se sont arrêtés au milieu de la chaussée. Plusieurs passants voyant la scène ont filmé l'animal avec leur téléphone. Ayant été prévenus par un commerçant, les pompiers sont arrivés vers neuf heures.\n\nL'opération, assez amusante pour les spectateurs, a duré une vingtaine de minutes. L'animal, ne présentant aucune blessure, a été ramené à la ferme. Le propriétaire, se disant très embarrassé, a promis de réparer sa clôture. Aucun dégât n'a été signalé.",
      "explanation": "The present participle without \"en\" belongs to written French: it replaces a relative clause (\"plusieurs passants voyant la scène\") or gives a cause (\"ne sachant pas comment réagir\", \"ayant été prévenus\", \"s'étant échappée\"), and it never agrees. The adjectifs verbaux agree like adjectives: \"une scène surprenante\", \"assez amusante\"."
    }
  ],
  "b2-story-gaps-chez-la-psy": [
    {
      "type": "write",
      "prompt": "Write a diary entry about a difficult, busy week: describe your moods, your habits and how you coped, and what made the week tiring or exciting.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses the gérondif to say how you coped or what triggered a mood (\"en rentrant\", \"en écoutant de la musique\")",
        "Uses \"tout en\" + -ant for simultaneous actions or a contrast",
        "Uses at least three adjectifs verbaux that agree (fatigant, stressante, épuisants, encourageante...)",
        "Spells the participle / adjective pairs correctly where they differ (fatiguant / fatigant, convainquant / convaincant)"
      ],
      "modelAnswer": "Vendredi 14 octobre\n\nQuelle semaine épuisante ! Lundi, en arrivant au bureau, j'ai appris que mon collègue était malade et que je devais finir son dossier en plus du mien. Les journées ont été longues et stressantes.\n\nTout en travaillant jusqu'à vingt heures, j'ai essayé de garder un peu de temps pour moi. En rentrant le soir, j'écoutais de la musique en préparant le dîner, et ça m'aidait à me calmer. Mercredi, en voulant tout faire en même temps, j'ai oublié une réunion importante ! Ma cheffe, tout en restant calme, m'a fait comprendre que ce n'était pas acceptable.\n\nHeureusement, jeudi, elle m'a laissé une note très encourageante sur mon travail. Les arguments de mon rapport étaient convaincants, paraît-il. Ce week-end, je dors !",
      "explanation": "The gérondif gives the moment or manner with the same subject (\"en arrivant\", \"en rentrant\", \"en préparant\"), and \"tout en\" adds simultaneity or contrast (\"tout en restant calme\"). The adjectifs verbaux agree with their nouns (\"épuisante\", \"stressantes\", \"encourageante\", \"convaincants\"), and \"convaincants\" is spelled with -c-, unlike the participle convainquant."
    }
  ],
  "b2-talk-about-you-comment-tu-fais": [
    {
      "type": "write",
      "prompt": "Your younger cousin is starting university and has written to ask how you managed to study, work part-time and still have a social life. Write an informal email explaining your methods and routines.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Explains methods with the gérondif (\"c'est en faisant des listes que...\", \"en me levant tôt, je...\")",
        "Uses \"tout en\" + -ant for juggling two things at once",
        "Uses at least one gérondif to express a condition (\"en travaillant un peu chaque jour, tu...\")",
        "Uses an informal, encouraging register (tu, friendly opening and closing)"
      ],
      "modelAnswer": "Salut Jules,\n\nFélicitations pour ton entrée à la fac ! Tu me demandes comment je faisais pour tout gérer. Franchement, ce n'était pas toujours facile, mais j'avais quelques astuces.\n\nD'abord, je m'organisais en faisant une liste chaque dimanche soir. En notant tout ce que je devais faire, je stressais beaucoup moins. Ensuite, je révisais dans le bus, en écoutant mes cours enregistrés : c'est fou ce qu'on peut apprendre en une demi-heure de trajet !\n\nJe travaillais au café le samedi, tout en gardant mes soirées du vendredi pour mes amis. Et c'est en me couchant à des heures raisonnables que j'ai réussi à tenir toute l'année.\n\nCrois-moi : en travaillant un peu chaque jour, tu éviteras la panique avant les examens.\n\nBon courage, et appelle-moi si tu as besoin !\nCamille",
      "explanation": "The gérondif explains the method (\"en faisant une liste\", \"c'est en me couchant à des heures raisonnables que\") and the condition (\"en travaillant un peu chaque jour, tu éviteras\"), always with the subject of the main verb. \"Tout en gardant\" shows two things managed at the same time."
    }
  ],
  "b2-pattern-faire-faire": [
    {
      "type": "write",
      "prompt": "You are renovating your new flat while your partner is away on a work trip. Write them a text message explaining what you have had done, what you are going to have done this week, and one thing you had done for yourself.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Uses \"faire\" + infinitive for services (\"j'ai fait réparer\", \"je vais faire installer\")",
        "Places pronouns before \"faire\" (\"je l'ai fait repeindre\", \"je vais les faire livrer\") with no agreement of \"fait\"",
        "Uses \"se faire\" + infinitive for something done to yourself (\"je me suis fait couper les cheveux\")",
        "Introduces the agent with \"par\" or \"à\" at least once"
      ],
      "modelAnswer": "Coucou mon cœur ! Les travaux avancent bien !\n\nLundi, j'ai fait réparer la fuite dans la salle de bains par le plombier. La cuisine était trop sombre, alors je l'ai fait repeindre en jaune clair. Hier, j'ai fait faire un devis pour le parquet, mais c'est cher, on en reparlera.\n\nCette semaine, je vais faire installer la nouvelle douche, et j'ai commandé les meubles : je vais les faire livrer jeudi. J'ai fait monter le canapé par les voisins, ils ont été adorables !\n\nEt pour finir, je me suis fait couper les cheveux… tu vas voir, ça change !\n\nTu me manques. Bisous",
      "explanation": "\"Faire\" + infinitive says that someone else does the work (\"j'ai fait réparer\", \"je vais faire installer\", \"j'ai fait faire un devis\"); pronouns go before faire (\"je l'ai fait repeindre\", \"je vais les faire livrer\") and \"fait\" never agrees. \"Par\" introduces the agent, and \"se faire couper\" is a service done to oneself."
    }
  ],
  "b2-minimal-pairs-faire-laisser": [
    {
      "type": "write",
      "prompt": "Write a dialogue between a 16-year-old and their parent arguing about the rules at home: going out, screens, chores. Each side says what the other makes them do or doesn't let them do.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses \"faire\" + infinitive to force (\"tu me fais rentrer à dix heures\")",
        "Uses \"laisser\" + infinitive to allow or not allow (\"tu ne me laisses jamais sortir\")",
        "Places object pronouns correctly before faire and laisser, including in the imperative (\"laisse-moi sortir\")",
        "Uses a natural spoken register with questions and reactions"
      ],
      "modelAnswer": "— Maman, tu ne me laisses jamais sortir le samedi soir ! Tous mes copains vont à la fête de Lucas.\n— Je te laisse sortir, mais je te fais rentrer à onze heures. C'est différent.\n— Onze heures ! Tu me fais passer pour un bébé.\n— Et toi, tu me fais attendre chaque fois que je te demande de ranger ta chambre.\n— Parce que tu me fais tout faire à la maison : la vaisselle, les poubelles…\n— Tu exagères ! Et ton téléphone, je te le laisse toute la journée, non ?\n— Oui, mais tu me le fais éteindre à vingt-deux heures.\n— D'accord. Écoute, laisse-moi réfléchir. Si tu ranges ta chambre ce soir, je te laisse rentrer à minuit.\n— Vrai de vrai ? Laisse-moi t'embrasser !",
      "explanation": "\"Faire\" + infinitive forces someone (\"je te fais rentrer\", \"tu me fais attendre\", \"tu me fais tout faire\"), while \"laisser\" + infinitive allows (\"tu ne me laisses jamais sortir\", \"je te laisse rentrer\"). Pronouns go before faire and laisser (\"tu me le fais éteindre\"), but after them in the affirmative imperative (\"laisse-moi réfléchir\")."
    }
  ],
  "b2-thematic-review-retour-a-la-routine": [
    {
      "type": "write",
      "prompt": "You have just come back from six months travelling (or volunteering abroad), and everyday life feels strange. Write a diary entry describing your first days back: what has changed around you, how you have changed, and how you feel.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses at least three verbs of change (devenir, rendre + adjective, se mettre à, finir par, an -ir verb such as grossir or vieillir)",
        "Uses \"comme si\" + imparfait or plus-que-parfait to describe the strange feeling",
        "Uses at least one gérondif",
        "Contrasts before and after with the imparfait and passé composé"
      ],
      "modelAnswer": "Jeudi, une semaine après mon retour\n\nC'est étrange : tout est pareil, et pourtant rien n'est pareil. En rentrant dans mon appartement, j'ai eu l'impression que le temps s'était arrêté. Mes plantes, elles, ont jauni, et ma rue est devenue plus bruyante qu'avant, ou alors c'est moi qui ai changé.\n\nAu bureau, mes collègues me parlent comme si j'étais partie deux jours. Personne ne me pose de questions sur le Pérou ! Ça me rend un peu triste. Je regarde mon ordinateur comme si je ne l'avais jamais vu.\n\nPendant ces six mois, je suis devenue plus patiente. J'ai maigri, j'ai bruni, et je me suis mise à cuisiner tous les soirs. Je crois que je finirai par me réhabituer, mais je veux garder cette curiosité. Demain, je m'inscris à un cours d'espagnol !",
      "explanation": "Verbs of change describe the transformation precisely: \"est devenue plus bruyante\", \"ça me rend triste\", \"je me suis mise à cuisiner\", \"je finirai par\", and the -ir verbs \"jaunir\", \"maigrir\", \"brunir\". \"Comme si j'étais partie deux jours\" and \"comme si je ne l'avais jamais vu\" use the plus-que-parfait for an imagined earlier event."
    }
  ],
  "b2-contrast-faire-rendre-laisser": [
    {
      "type": "write",
      "prompt": "Write a review for a film website of a film or series that moved you deeply. Describe the effect it had on you and on the characters, and say who you would recommend it to.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses \"faire\" + infinitive for an effect that is an action (\"ce film m'a fait pleurer / rire\")",
        "Uses \"rendre\" + adjective for an effect that is a state (\"la fin m'a rendu triste\"), with agreement",
        "Uses \"laisser\" + infinitive or \"laisser\" + adjective (\"le film nous laisse imaginer\", \"il m'a laissé perplexe\")",
        "Uses the conventions of a review (title, opinion, recommendation)"
      ],
      "modelAnswer": "« Petite Maman » : un bijou de douceur\n\nJe suis allée voir « Petite Maman » de Céline Sciamma sans rien savoir de l'histoire, et ce film m'a fait pleurer du début à la fin. Nelly, huit ans, vient de perdre sa grand-mère. Dans la forêt, elle rencontre une petite fille qui lui ressemble étrangement…\n\nLa mort de la grand-mère rend la mère de Nelly silencieuse et distante. Mais la rencontre entre les deux fillettes les rend toutes les deux plus fortes. Le film ne donne pas d'explication : il nous laisse imaginer ce qui s'est passé. Certains spectateurs trouvent ça frustrant ; moi, ça m'a fait réfléchir pendant des jours.\n\nLa fin m'a laissée sans voix. Je recommande ce film à tous ceux qui ont perdu quelqu'un, et aux parents qui veulent le partager avec leurs enfants.",
      "explanation": "\"Faire\" + infinitive describes an effect that is an action (\"m'a fait pleurer\", \"m'a fait réfléchir\"), \"rendre\" + adjective an effect that is a state, with the adjective agreeing (\"rend la mère silencieuse\", \"les rend plus fortes\"). \"Laisser\" lets something happen (\"nous laisse imaginer\") or leaves someone in a state (\"m'a laissée sans voix\", agreeing with the female writer)."
    }
  ],
  "b2-minimal-pairs-pourtant-en-revanche": [
    {
      "type": "write",
      "prompt": "Your company is choosing between two cities, Lyon and Bordeaux, for a new office. Write a short comparative report for your manager presenting the advantages and drawbacks of each, and make a recommendation.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Compares two items with \"en revanche\" (and \"par contre\" only if the register allows)",
        "Expresses a surprising contrast with \"pourtant\"",
        "Uses \"cependant\", \"toutefois\" or \"néanmoins\" for a neutral limitation",
        "Uses \"certes... mais\" to concede before a recommendation"
      ],
      "modelAnswer": "Objet : choix de la ville pour le nouveau bureau\n\nLyon présente plusieurs avantages. La ville est très bien reliée à Paris et à la Suisse, et le marché de l'emploi y est dynamique. Les loyers de bureaux sont cependant assez élevés dans le centre.\n\nBordeaux, en revanche, offre des loyers plus raisonnables et une qualité de vie très appréciée des salariés. Pourtant, malgré cet atout, elle attire moins d'entreprises technologiques que Lyon. Les liaisons ferroviaires vers l'est restent toutefois limitées.\n\nCertes, Bordeaux plairait davantage à notre équipe actuelle, mais Lyon nous permettrait de recruter plus facilement et de nous rapprocher de nos clients suisses. Je recommande donc Lyon, en négociant néanmoins un bureau en périphérie pour réduire les coûts.",
      "explanation": "\"En revanche\" compares the two cities point by point; \"pourtant\" marks a surprising contrast with what you would expect from Bordeaux's reputation; \"cependant\", \"toutefois\" and \"néanmoins\" add neutral limits. \"Certes... mais\" grants a point before the recommendation."
    }
  ],
  "b2-circuit-cause-consequence": [
    {
      "type": "write",
      "prompt": "A local magazine asks why so many shops in the centre of your town have closed in recent years. Write a short article explaining the causes and the consequences, and suggest one solution.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Expresses cause with at least three of \"car\", \"puisque\", \"comme\" (at the start), \"étant donné que\", \"en raison de\"",
        "Distinguishes \"grâce à\" (positive) and \"à cause de\" (negative)",
        "Expresses consequence with \"donc\" (inside the clause), \"c'est pourquoi\", \"par conséquent\" or \"si bien que\"",
        "Has a clear article structure: introduction, causes, consequences, solution"
      ],
      "modelAnswer": "Pourquoi notre centre-ville se vide-t-il ?\n\nEn dix ans, une boutique sur quatre a fermé dans le centre de Vierzon. Comment l'expliquer ?\n\nComme les loyers ont fortement augmenté, beaucoup de petits commerçants ne peuvent plus payer. De plus, le centre commercial ouvert en 2015 attire les clients, car il propose un grand parking gratuit. Les achats en ligne ont aussi pris une place énorme, à cause de leurs prix bas.\n\nLes conséquences sont visibles : les rues sont moins animées, si bien que les cafés perdent eux aussi leurs clients. Les habitants âgés, qui ne conduisent pas, ont donc plus de mal à faire leurs courses.\n\nPourtant, certaines villes ont réussi à inverser la tendance grâce à des loyers plafonnés. Étant donné que la mairie possède plusieurs locaux, elle pourrait en faire autant. C'est pourquoi nous lui demandons d'agir rapidement.",
      "explanation": "Causes are introduced with \"comme\" at the start of the sentence, \"car\" after the main clause and \"étant donné que\" for an accepted fact; \"à cause de\" gives a negative cause and \"grâce à\" a positive one. Consequences use \"si bien que\" + indicative, \"donc\" placed after the verb, and \"c'est pourquoi\"."
    }
  ],
  "b2-transformations-informal-to-formal": [
    {
      "type": "write",
      "prompt": "Your team would like to try a four-day working week. Write a formal proposal to the management, presenting the idea, its advantages, the possible problems and how you would solve them.",
      "minWords": 100,
      "maxWords": 180,
      "rubric": [
        "Uses formal connectors instead of spoken ones: \"cependant\" (not mais at the start), \"étant donné que\" (not parce que), \"par conséquent\" (not alors), \"de plus / en outre\" (not en plus)",
        "Structures the proposal with \"tout d'abord\", \"par ailleurs\", \"enfin\" or similar",
        "Concedes a drawback with \"certes\" or \"bien que\" + subjunctive",
        "Uses an impersonal or formal register (nous, il est proposé de, il convient de...)"
      ],
      "modelAnswer": "Objet : proposition d'expérimentation de la semaine de quatre jours\n\nMadame la Directrice,\n\nL'équipe du service marketing souhaiterait expérimenter la semaine de quatre jours pendant six mois, à partir de janvier.\n\nTout d'abord, plusieurs études montrent que cette organisation améliore la concentration des salariés. Étant donné que notre service connaît actuellement un taux d'absentéisme élevé, une telle mesure pourrait le réduire. De plus, elle rendrait l'entreprise plus attractive pour les jeunes diplômés.\n\nCertes, il faudra veiller à ce que les clients puissent nous joindre du lundi au vendredi. Cependant, ce problème peut être résolu par un système de rotation au sein de l'équipe. Par ailleurs, les horaires quotidiens seraient légèrement allongés, si bien que le volume de travail resterait le même.\n\nPar conséquent, nous vous proposons de lancer un test, évalué au bout de trois mois.\n\nNous vous prions d'agréer, Madame la Directrice, nos salutations respectueuses.",
      "explanation": "Spoken links are replaced by their formal equivalents: \"étant donné que\" for parce que, \"de plus\" for en plus, \"cependant\" for mais, \"par conséquent\" for alors. \"Certes... cependant\" concedes a drawback before answering it, and \"tout d'abord\" and \"par ailleurs\" structure the argument."
    }
  ],
  "b2-sentence-by-sentence-essai": [
    {
      "type": "write",
      "prompt": "Write a short DELF B2-style essay on this question: « Les réseaux sociaux rapprochent-ils vraiment les gens ? » Present a problématique, arguments on both sides and a reasoned conclusion.",
      "minWords": 120,
      "maxWords": 200,
      "rubric": [
        "Opens with a problématique (a question that frames the debate)",
        "Presents arguments on both sides with \"d'une part... d'autre part\" or \"en revanche\"",
        "Uses at least one concession (\"certes... mais\", \"bien que\" + subjunctive, \"il n'en reste pas moins que\")",
        "Concludes with \"en somme\", \"en définitive\" or \"pour conclure\" and a clear personal position"
      ],
      "modelAnswer": "Aujourd'hui, plus de quatre milliards de personnes utilisent les réseaux sociaux. On les présente souvent comme un moyen de rester proches de ceux qu'on aime. Mais ces outils nous rapprochent-ils vraiment, ou nous isolent-ils davantage ?\n\nD'une part, les réseaux sociaux permettent de garder le contact avec des amis ou des proches qui vivent loin. Une grand-mère peut ainsi voir grandir ses petits-enfants installés à l'étranger. En outre, ils aident des personnes isolées à trouver une communauté qui partage leurs passions.\n\nD'autre part, bien que nous ayons des centaines « d'amis » en ligne, beaucoup de jeunes déclarent se sentir seuls. Les échanges restent souvent superficiels, et le temps passé devant l'écran remplace les vraies rencontres. Certes, une vidéo vaut mieux que rien ; il n'en reste pas moins qu'elle ne remplace pas un repas partagé.\n\nEn somme, les réseaux sociaux ne rapprochent les gens qu'à condition qu'on les utilise pour préparer de vraies rencontres, et non pour les remplacer.",
      "explanation": "The essay follows the DELF structure: a problématique as a question, \"d'une part / d'autre part\" for the two sides, \"en outre\" to add an argument, and a concession with \"bien que\" + subjunctive and \"certes... il n'en reste pas moins que\". \"En somme\" introduces a nuanced conclusion, with \"à condition que\" + subjunctive."
    }
  ],
  "b2-pattern-dislocation": [
    {
      "type": "write",
      "prompt": "Two flatmates, Hugo and Nina, argue about the housework: the dishes, the shopping, the bathroom and the noise. Write their dialogue in natural spoken French, using emphasis to show who does (or doesn't do) what.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses stressed pronouns for contrast (\"moi, je...\", \"toi, tu...\", \"lui, il...\")",
        "Uses left dislocation with a resumptive pronoun (\"la vaisselle, je la fais tous les soirs\"), including at least one with \"en\" or \"y\"",
        "Uses right dislocation at least once (\"je l'ai déjà sortie, la poubelle\")",
        "Uses a natural spoken register (questions, exclamations, interruptions)"
      ],
      "modelAnswer": "— Nina, la vaisselle, tu la fais quand ? Ça fait trois jours qu'elle attend.\n— Moi ? La vaisselle, je l'ai faite hier soir ! Toi, tu ne la fais jamais.\n— N'importe quoi. Les courses, c'est moi qui les fais chaque samedi.\n— Les courses, d'accord, mais la salle de bains, tu y entres sans jamais la nettoyer.\n— Je l'ai nettoyée dimanche, la salle de bains ! Tu n'as pas remarqué ?\n— Et la poubelle ? Tu l'as sortie, au moins ?\n— Ah, la poubelle… Non, je l'ai oubliée.\n— Et du café, il en reste ?\n— Non, il n'y en a plus. Le café, c'est toujours moi qui l'achète !\n— Bon, écoute, faisons un planning. Toi, tu fais la cuisine et la vaisselle, et moi, je m'occupe du ménage et des poubelles.\n— Parfait. Et le planning, c'est toi qui l'écris !",
      "explanation": "Stressed pronouns mark contrast between the speakers (\"Moi ?\", \"Toi, tu...\"). Left dislocation puts the topic first and takes it up with a pronoun: \"la vaisselle, je l'ai faite\" (with agreement after l'), \"la salle de bains, tu y entres\", \"du café, il en reste\". Right dislocation adds the topic at the end: \"Je l'ai nettoyée dimanche, la salle de bains !\""
    }
  ],
  "b2-emphasis-word-order-2": [
    {
      "type": "write",
      "prompt": "You are applying for a job as a project coordinator for a cultural festival. Write the main part of your cover letter: what motivates you, what you have already achieved, and what you would bring to the team. Use clefts and pseudo-clefts to highlight your strengths.",
      "minWords": 100,
      "maxWords": 180,
      "rubric": [
        "Uses \"c'est moi qui\" / \"c'est nous qui\" with correct verb agreement",
        "Uses \"c'est... que\" with a repeated preposition (\"c'est à ce poste que...\", \"c'est grâce à... que\")",
        "Uses at least two pseudo-clefts: \"ce qui..., c'est\", \"ce que..., c'est\", \"ce dont..., c'est\"",
        "Uses the formal register of a cover letter, with a formal closing"
      ],
      "modelAnswer": "Madame, Monsieur,\n\nC'est avec un grand intérêt que j'ai lu votre offre de coordinatrice pour le festival Jazz en Loire. Ce qui me motive avant tout, c'est de contribuer à un événement qui rend la culture accessible à tous.\n\nDepuis trois ans, je travaille pour l'association Musiques du Monde à Tours. C'est moi qui ai organisé notre festival d'été en 2023, et c'est nous qui avons obtenu, pour la première fois, le soutien de la Région. C'est grâce à ce projet que j'ai appris à gérer un budget et à coordonner une équipe de quarante bénévoles.\n\nCe que je pourrais apporter à votre équipe, c'est une grande capacité d'organisation et un vrai sens du contact. Ce dont je suis le plus fière, c'est d'avoir fait venir un public qui n'allait jamais au concert.\n\nJe serais ravie de vous rencontrer pour un entretien.\n\nVeuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.\n\nLéa Moreau",
      "explanation": "\"C'est moi qui ai organisé\" and \"c'est nous qui avons obtenu\" show that the verb agrees with the pronoun before qui. \"C'est avec un grand intérêt que\" and \"c'est grâce à ce projet que\" keep the preposition inside the cleft. The pseudo-clefts \"ce qui me motive, c'est\", \"ce que je pourrais apporter, c'est\" and \"ce dont je suis le plus fière, c'est\" put the key information at the end."
    }
  ],
  "b2-circuit-exclamatives": [
    {
      "type": "write",
      "prompt": "You are spending a few days somewhere that amazes you (a mountain village, a seaside town, a big city). Write a postcard to a friend full of enthusiasm: describe the place, the food and the people.",
      "minWords": 50,
      "maxWords": 100,
      "rubric": [
        "Uses at least two different exclamative structures: \"qu'est-ce que\", \"comme\", \"que\" or \"ce que\" + clause",
        "Uses \"quel / quelle / quels / quelles\" + noun with correct agreement",
        "Uses \"tellement\" or \"si\" + adjective or adverb",
        "Uses the conventions of a postcard (greeting, short sentences, closing)"
      ],
      "modelAnswer": "Chère Julie,\n\nJe t'écris d'Étretat, et qu'est-ce que c'est beau ! Quelles falaises ! Elles sont tellement hautes qu'on a le vertige rien qu'en les regardant. Comme la mer est changeante ici : bleue le matin, grise à midi, dorée le soir.\n\nEt quel accueil ! Les gens sont si gentils. Hier, un pêcheur nous a offert des moules, et ce qu'elles étaient bonnes ! Que j'aimerais rester une semaine de plus…\n\nJe pense fort à toi. Il faudra qu'on vienne ensemble l'année prochaine !\n\nGros bisous,\nMarion",
      "explanation": "The postcard varies exclamations of degree: \"qu'est-ce que c'est beau\", \"comme la mer est changeante\", \"ce qu'elles étaient bonnes\" and \"que j'aimerais\" + clause, \"quelles falaises\" and \"quel accueil\" with agreement, and \"tellement hautes\", \"si gentils\" before adjectives. No exclamation uses *comment."
    }
  ],
  "b2-choose-explain-neutral-emphatic": [
    {
      "type": "write",
      "prompt": "A rumour is going round your group of friends: people think you cancelled the weekend trip, forgot the reservation and lost the deposit. In fact, others were responsible. Write an email to the group to correct each misunderstanding and say what really happened.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Corrects information with \"ce n'est pas... qui / que, c'est...\"",
        "Uses \"c'est... qui\" with correct verb agreement (\"c'est Paul et Léo qui ont...\")",
        "Uses \"c'est... que\" to highlight a time, place or reason",
        "Mixes neutral sentences with emphatic ones where emphasis is needed (not every sentence)"
      ],
      "modelAnswer": "Salut tout le monde,\n\nJ'ai entendu dire que j'avais annulé le week-end à Biarritz. Je voudrais remettre les choses au clair.\n\nCe n'est pas moi qui ai annulé le séjour, c'est le propriétaire de la maison. Il m'a appelée mardi pour me dire que le toit avait été endommagé par la tempête.\n\nEnsuite, la réservation : ce n'est pas moi qui devais la confirmer, ce sont Paul et Léo qui s'en occupaient. Je leur avais envoyé tous les documents.\n\nQuant à l'acompte, nous ne l'avons pas perdu. C'est hier que j'ai reçu le remboursement, et c'est sur le compte commun que je l'ai versé.\n\nBref, ne vous inquiétez pas. Je propose qu'on choisisse une autre date en juin. Qui est partant ?\n\nBises,\nAmélie",
      "explanation": "\"Ce n'est pas moi qui ai annulé..., c'est le propriétaire\" corrects the subject, with the verb agreeing with moi; \"ce sont Paul et Léo qui s'en occupaient\" uses the plural form. \"C'est hier que\" and \"c'est sur le compte commun que\" highlight the time and the place. The other sentences stay neutral, so the emphasis stands out where a correction is needed."
    }
  ],
  "b2-pattern-dont-le": [
    {
      "type": "write",
      "prompt": "A French literary website asks readers to present an author, musician or artist they admire. Write a short portrait of this person: their life, their work and why they matter to you.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses \"dont\" + noun for English \"whose\" at least twice, with normal word order (\"un auteur dont j'adore les romans\")",
        "Uses \"dont\" with a verb or adjective + de (parler de, être fier de, se souvenir de, avoir besoin de)",
        "Uses at least one preposition + lequel / laquelle",
        "Combines facts about the person's life with a personal opinion"
      ],
      "modelAnswer": "Annie Ernaux est une écrivaine dont les livres ont changé ma façon de lire. Née en 1940 en Normandie, elle a grandi dans une famille dont les parents tenaient un café-épicerie. C'est ce monde populaire, dont elle s'est éloignée en devenant professeure, qu'elle raconte dans presque tous ses récits.\n\nSon style, dont beaucoup de critiques ont souligné la simplicité, est sec et précis. Dans « La Place », un livre dont je me souviens encore parfaitement, elle parle de son père avec une distance qui m'a bouleversée. « Les Années » est l'œuvre dans laquelle elle mêle sa vie à l'histoire de la France.\n\nEn 2022, elle a reçu le prix Nobel de littérature, dont elle a dit être très fière. C'est une autrice dont je recommande les livres à tous mes amis.",
      "explanation": "\"Dont\" replaces de + noun and keeps normal word order: \"une écrivaine dont les livres\", \"une autrice dont je recommande les livres\". It also follows verbs and adjectives built with de: \"dont elle s'est éloignée\" (s'éloigner de), \"dont je me souviens\" (se souvenir de), \"dont elle a dit être fière\". \"Dans laquelle\" takes over after the preposition dans."
    }
  ],
  "b2-dont-duquel-lequel-2": [
    {
      "type": "write",
      "prompt": "A friend is about to move to the city where you live. Write them an informal email explaining what they will need, what they should think about before arriving, and describing the neighbourhood where you advise them to live.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses \"ce dont\" (\"ce dont tu auras besoin, c'est...\")",
        "Uses \"ce à quoi\" or preposition + \"quoi\" (\"ce à quoi il faut penser\", \"sans quoi\")",
        "Chooses between \"où\" and preposition + \"lequel\" (\"le quartier où\", \"la rue dans laquelle\")",
        "Uses \"à qui\" for a person (\"la voisine à qui tu peux demander...\")"
      ],
      "modelAnswer": "Salut Marco,\n\nSuper nouvelle, ton arrivée à Strasbourg ! Voici quelques conseils.\n\nCe dont tu auras besoin en premier, c'est d'un bon vélo : ici, tout le monde se déplace à vélo. Ce à quoi il faut penser avant d'arriver, c'est le logement, car les appartements partent très vite en septembre. Inscris-toi vite sur les sites de location, sans quoi tu risques de chercher longtemps.\n\nÀ ta place, je choisirais la Krutenau, le quartier où j'habite. C'est un quartier étudiant au bord de l'eau, avec une rue principale dans laquelle il y a des dizaines de cafés et de petits restaurants. Je connais une agente immobilière à qui tu peux demander conseil, et une boulangerie près de laquelle se trouve un marché le samedi.\n\nCe que je te souhaite, c'est de te sentir chez toi très vite !\n\nÀ bientôt,\nÉlise",
      "explanation": "\"Ce dont\" is used because the verb is avoir besoin de, and \"ce à quoi\" because it is penser à; \"sans quoi\" means otherwise. \"Où\" is natural for a place (\"le quartier où j'habite\"), but \"dans laquelle\" and \"près de laquelle\" are needed after a preposition. A person after à takes \"à qui\"."
    }
  ],
  "b2-thematic-review-heritage": [
    {
      "type": "write",
      "prompt": "You have inherited an old object from a relative (a clock, a piece of jewellery, a desk, a camera). A local auction house asks for a description for its catalogue. Write it: describe the object, its history and the people to whom it belonged.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses \"dont\" at least twice (whose, or a verb with de)",
        "Uses a compound preposition + duquel / de laquelle / desquels (\"au centre duquel\", \"à l'intérieur de laquelle\")",
        "Uses the passive at least once (\"a été fabriquée\", \"fut offerte\")",
        "Uses a formal, descriptive register"
      ],
      "modelAnswer": "Pendule de cheminée, vers 1890\n\nCette pendule en bronze doré a été fabriquée à Paris par l'atelier Lemoine, dont les horlogers étaient réputés pour la finesse de leur travail. Elle se compose d'un cadran en émail blanc, au centre duquel figure une petite rose peinte à la main. De chaque côté se dressent deux colonnes, le long desquelles grimpent des feuilles de vigne.\n\nLa pendule fut offerte en 1902 à Marguerite Dumas, une institutrice de Rouen dont le mari était cheminot. Elle a ensuite été transmise de génération en génération, jusqu'à son arrière-petit-fils, qui la met aujourd'hui en vente.\n\nLe mécanisme, à l'intérieur duquel quelques pièces ont été remplacées en 1975, fonctionne encore parfaitement. Il s'agit d'un objet dont la valeur sentimentale égale la valeur artistique.",
      "explanation": "\"Dont\" replaces de + noun and keeps normal word order: \"l'atelier Lemoine, dont les horlogers\", \"une institutrice dont le mari\", \"un objet dont la valeur\". After compound prepositions dont is impossible, so duquel and its forms take over, agreeing with the noun: \"au centre duquel\" (le cadran), \"le long desquelles\" (les colonnes), \"à l'intérieur duquel\" (le mécanisme). The passive (\"a été fabriquée\", \"fut offerte\", \"a été transmise\") suits a catalogue."
    }
  ],
  "b2-thematic-review-solitude-robots": [
    {
      "type": "write",
      "prompt": "A magazine asks: « Faut-il confier les personnes âgées à des robots de compagnie ? » Write a short for-and-against essay, then give your own opinion.",
      "minWords": 100,
      "maxWords": 180,
      "rubric": [
        "Presents arguments on both sides with formal connectors (d'une part / d'autre part, en revanche, de plus...)",
        "Uses the subjunctive after opinion or emotion (\"il est inquiétant que\", \"je ne pense pas que\", \"il faut que\")",
        "Uses at least one hypothesis with \"si\" + imparfait + conditionnel",
        "Uses at least one formal relative (dont, lequel / laquelle after a preposition)"
      ],
      "modelAnswer": "En France, des milliers de personnes âgées vivent seules et ne reçoivent presque jamais de visites. Certains proposent de leur confier des robots de compagnie. Est-ce une bonne idée ?\n\nD'une part, ces robots présentent de vrais avantages. Ils rappellent l'heure des médicaments, alertent les secours en cas de chute et peuvent même faire la conversation. Pour une personne dont les enfants vivent loin, c'est une présence rassurante. De plus, si chaque maison de retraite en avait, le personnel pourrait consacrer plus de temps aux soins.\n\nD'autre part, il est inquiétant que nous confiions nos aînés à des machines. Un robot ne remplacera jamais la main sur laquelle on s'appuie ni le regard d'un proche.\n\nPour ma part, je ne pense pas que la technologie soit le problème. Il faut simplement qu'elle complète les visites humaines, au lieu de les remplacer.",
      "explanation": "\"D'une part / d'autre part\" and \"de plus\" structure the essay. Opinion and emotion take the subjunctive: \"il est inquiétant que nous confiions\", \"je ne pense pas que la technologie soit\", \"il faut qu'elle complète\". \"Si chaque maison en avait, le personnel pourrait\" is an unreal hypothesis, and \"dont les enfants\" and \"sur laquelle\" are formal relatives."
    }
  ],
  "b2-thematic-review-apprenti": [
    {
      "type": "write",
      "prompt": "Write a short memoir about a person who taught you a skill or a craft (cooking, music, carpentry, a sport...): how they taught you, what they made you do and told you, and how you changed thanks to them.",
      "minWords": 100,
      "maxWords": 180,
      "rubric": [
        "Uses causative \"faire\" + infinitive for what the teacher made you do (\"il me faisait recommencer\")",
        "Reports their advice and orders in indirect speech (\"il me disait de...\", \"il m'a expliqué que...\")",
        "Uses at least two verbs of change (devenir, rendre + adjective, se mettre à, finir par)",
        "Narrates in the past with the imparfait for habits and the passé composé for events"
      ],
      "modelAnswer": "J'avais quinze ans quand j'ai commencé à travailler l'été dans l'atelier de Monsieur Bernard, un ébéniste de mon village. Il avait soixante-dix ans et des mains énormes, mais d'une précision incroyable.\n\nLe premier mois, il ne m'a laissé toucher aucun outil. Il me faisait balayer l'atelier et ranger les planches. Puis il m'a appris à poncer. Il me faisait recommencer dix fois la même pièce, et il me disait de ne jamais me presser. Un jour, il m'a expliqué qu'un bon meuble devait durer plus longtemps que celui qui l'avait fabriqué.\n\nPeu à peu, je me suis mis à aimer ce silence et cette lenteur. Son exigence m'a rendu patient. J'ai fini par fabriquer seul une petite table, dont il a été fier. Je ne suis pas devenu ébéniste, mais je pense à lui chaque fois que je dois faire un travail soigné.",
      "explanation": "\"Il me faisait balayer / recommencer\" and \"il ne m'a laissé toucher aucun outil\" are the causatives of an apprenticeship. His advice is reported with backshift (\"il me disait de ne jamais me presser\", \"il m'a expliqué qu'un bon meuble devait\"), and the narrator's change is told with \"je me suis mis à\", \"m'a rendu patient\", \"j'ai fini par\" and \"je ne suis pas devenu\"."
    }
  ],
  "b2-thematic-review-surveillance": [
    {
      "type": "write",
      "prompt": "Your city plans to install facial-recognition cameras in the metro to improve security. Write an opinion article for a local news website weighing the arguments and taking a position.",
      "minWords": 100,
      "maxWords": 180,
      "rubric": [
        "Uses formal connectors of contrast and consequence (certes, néanmoins, en revanche, par conséquent...)",
        "Uses the subjunctive after concession or opinion (\"bien que\", \"il est essentiel que\", \"je doute que\")",
        "Uses hypotheses with \"si\" + imparfait + conditionnel or \"au cas où\" + conditionnel",
        "Uses at least one passive or reported statement (\"selon la mairie\", \"il a été annoncé que\")"
      ],
      "modelAnswer": "Reconnaissance faciale dans le métro : jusqu'où sommes-nous prêts à aller ?\n\nLa mairie a annoncé la semaine dernière que des caméras de reconnaissance faciale seraient installées dans le métro dès l'an prochain. Selon elle, elles permettraient d'identifier rapidement les personnes recherchées.\n\nCertes, la sécurité des voyageurs est une priorité. Bien que les agressions restent rares, beaucoup d'usagers ont peur le soir. Néanmoins, je doute que ces caméras soient vraiment efficaces : les délinquants n'auraient qu'à porter une capuche.\n\nEn revanche, le risque pour nos libertés est réel. Si chaque trajet était enregistré, n'importe quelle autorité pourrait savoir où nous allons et avec qui. Au cas où ces données seraient piratées, les conséquences seraient graves.\n\nPar conséquent, il est essentiel que les citoyens soient consultés avant toute décision. La sécurité ne doit pas se payer au prix de notre vie privée.",
      "explanation": "The article weighs both sides with \"certes\", \"néanmoins\", \"en revanche\" and \"par conséquent\". Concession and doubt take the subjunctive (\"bien que les agressions restent\", \"je doute que ces caméras soient\", \"il est essentiel que les citoyens soient consultés\"); hypotheses use si + imparfait + conditionnel and \"au cas où\" + conditionnel; the mayor's plan is reported with backshift (\"seraient installées\")."
    }
  ],
  "b2-word-web-politics": [
    {
      "type": "write",
      "prompt": "Write a short news report for a French-language radio website about a new law that has just been voted on (for example on rents, cycling or the right to disconnect from work emails). Explain what the law says, who supported or opposed it, and how people reacted.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses precise political vocabulary (un projet de loi, voter, adopter, l'Assemblée nationale, un député, l'opposition, une manifestation...)",
        "Uses the passive to report decisions (\"la loi a été adoptée\", \"le texte a été voté\")",
        "Uses at least one conjunction with the subjunctive (\"pour que\", \"bien que\", \"à condition que\")",
        "Reports positions with reporting verbs (affirmer, dénoncer, estimer, regretter...)"
      ],
      "modelAnswer": "Droit à la déconnexion : la loi a été adoptée\n\nMardi soir, le projet de loi sur le droit à la déconnexion a été adopté par l'Assemblée nationale, par 312 voix contre 205. Le texte prévoit que les salariés ne seront plus obligés de répondre à leurs courriels professionnels après dix-neuf heures.\n\nLa ministre du Travail a affirmé que cette mesure était nécessaire pour que les salariés puissent vraiment se reposer. Bien que la majorité ait soutenu le texte, plusieurs députés de l'opposition ont dénoncé une loi « trop rigide » pour les petites entreprises.\n\nLes syndicats, eux, ont salué une avancée historique. En revanche, certains patrons estiment que la loi sera difficile à appliquer. Une manifestation de soutien a été organisée devant l'Assemblée pendant le vote.\n\nLa loi entrera en vigueur en janvier, à condition que le Sénat l'approuve.",
      "explanation": "The passive reports institutional decisions (\"a été adopté par l'Assemblée nationale\", \"a été organisée\"). Reporting verbs give each side's position (\"a affirmé\", \"ont dénoncé\", \"ont salué\", \"estiment\"), and \"pour que\", \"bien que\" and \"à condition que\" take the subjunctive (\"puissent\", \"ait soutenu\", \"approuve\")."
    }
  ],
  "b2-word-web-dreams": [
    {
      "type": "write",
      "prompt": "Write a diary entry about a strange dream (or nightmare) you had last night: tell what happened in it, how you felt, and what you think it might mean.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses dream vocabulary precisely: rêver de / rêver que, un rêve, un cauchemar, se réveiller, s'imaginer...",
        "Uses \"comme si\" + imparfait or plus-que-parfait to describe the dream's strangeness",
        "Uses \"faire semblant de\" correctly (not prétendre)",
        "Uses \"si\" + imparfait + conditionnel to imagine or interpret"
      ],
      "modelAnswer": "Samedi matin\n\nCette nuit, j'ai fait un rêve très bizarre. J'ai rêvé que je passais mon examen de piano au milieu d'une gare, devant des centaines de voyageurs. Le piano n'avait plus de touches noires, mais tout le monde agissait comme si c'était normal.\n\nJ'ai fait semblant de jouer, en bougeant les mains au-dessus du clavier. Le jury m'applaudissait comme si j'avais joué un chef-d'œuvre ! Puis le train est entré dans la gare, et le rêve s'est transformé en cauchemar : je courais derrière le train sans jamais l'attraper.\n\nJe me suis réveillée en sursaut, le cœur battant. Si je croyais aux interprétations des rêves, je dirais que j'ai peur de manquer une occasion importante. En réalité, je crois que je m'imagine déjà en train de rater mon entretien de lundi !",
      "explanation": "\"Rêver que\" + indicative tells the content of the dream, and \"faire semblant de\" means to pretend (prétendre means to claim). \"Comme si c'était normal\" and \"comme si j'avais joué\" describe the dream's strangeness with the imparfait and the plus-que-parfait, and \"si je croyais..., je dirais\" interprets it hypothetically."
    }
  ],
  "b2-word-web-decisions-regrets": [
    {
      "type": "write",
      "prompt": "After months of hesitation, you have finally made an important decision (changing jobs, moving, ending a project, going back to university). Write a letter to an old friend telling them about it: how long you hesitated, what you gave up, and whether you have any regrets.",
      "minWords": 100,
      "maxWords": 180,
      "rubric": [
        "Uses decision vocabulary with the right prepositions: hésiter à, se décider à, renoncer à, regretter de, prendre une décision",
        "Uses \"regretter de\" + past infinitive or \"j'aurais dû\" / \"j'aurais pu\" for a regret",
        "Uses at least one past or mixed hypothetical (\"si j'avais attendu, je...\")",
        "Uses the warm register of a personal letter"
      ],
      "modelAnswer": "Chère Anne,\n\nJe t'écris pour t'annoncer une grande nouvelle : j'ai quitté mon poste à la banque pour reprendre des études d'infirmière !\n\nTu sais combien j'ai hésité à prendre cette décision. Pendant plus d'un an, j'ai repoussé le moment de démissionner. J'avais peur de renoncer à un bon salaire et à la sécurité. C'est finalement après la naissance de ma nièce, à l'hôpital, que je me suis décidée à franchir le pas.\n\nBien sûr, j'ai dû faire des sacrifices : j'ai renoncé à mon appartement en centre-ville et je vis maintenant en colocation. Mais je ne regrette pas d'avoir pris ce risque. Je regrette seulement de ne pas l'avoir fait plus tôt. Si j'avais osé il y a cinq ans, je serais déjà diplômée !\n\nViens me voir bientôt, j'ai tellement de choses à te raconter.\n\nJe t'embrasse,\nSophie",
      "explanation": "Each decision verb keeps its preposition: \"hésiter à prendre\", \"renoncer à\", \"se décider à franchir le pas\", \"repousser le moment de\". Regrets use \"regretter de\" + past infinitive (\"d'avoir pris\", \"de ne pas l'avoir fait\"), and \"si j'avais osé..., je serais déjà diplômée\" is a mixed hypothetical with a present result."
    }
  ],
  "b2-word-web-media": [
    {
      "type": "write",
      "prompt": "Choose a news story that was in the press this week (real or invented). Write a short summary for a French class newsletter: where it was published, what the article said, which sources it cited, and what you think of the way it was reported.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses media vocabulary precisely: un quotidien, un hebdomadaire, la une, un article, une source, un journaliste, une infox / fake news...",
        "Reports what the article said with reported speech and backshift",
        "Uses \"selon\" / \"d'après\" to attribute information to a source",
        "Gives a personal opinion on the reporting with a connector of contrast (cependant, toutefois, en revanche...)"
      ],
      "modelAnswer": "Cette semaine, une information a fait la une de plusieurs quotidiens régionaux : une loutre a été aperçue dans la Seine, en plein Paris, pour la première fois depuis un siècle.\n\nSelon l'article publié lundi par un grand quotidien parisien, un promeneur avait filmé l'animal près du pont de Bercy. La journaliste expliquait que la qualité de l'eau s'était beaucoup améliorée depuis les Jeux olympiques. D'après un biologiste interrogé, d'autres loutres pourraient s'installer dans la ville.\n\nCependant, un hebdomadaire a ensuite affirmé que la vidéo était peut-être truquée. Il précisait que les sources n'avaient pas encore été vérifiées. À mon avis, certains médias ont publié la nouvelle trop vite, sans attendre la confirmation des scientifiques. C'est ainsi que naissent les infox : une belle histoire se partage plus vite qu'une vérification.",
      "explanation": "Media vocabulary situates the story (\"a fait la une\", \"quotidiens\", \"un hebdomadaire\", \"les sources\", \"les infox\"). \"Selon\" and \"d'après\" attribute information, and reported speech backshifts after past verbs (\"avait filmé\", \"s'était améliorée\", \"était peut-être truquée\", \"n'avaient pas été vérifiées\"). \"Cependant\" introduces the contrasting version."
    }
  ],
  "b2-word-web-personal-growth": [
    {
      "type": "write",
      "prompt": "Write a letter to yourself, to be opened in one year: describe the goals you are setting, the habits you want to build, the difficulties you expect and how you hope to have grown by then.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses personal-growth vocabulary precisely: se fixer un objectif, progresser, se dépasser, prendre confiance en soi, surmonter, s'épanouir...",
        "Uses \"quand\" or \"dès que\" + futur or futur antérieur",
        "Uses \"j'espère que\" + indicative and \"je souhaite que\" / \"j'aimerais que\" + subjunctive",
        "Addresses your future self directly with tu"
      ],
      "modelAnswer": "Chère moi,\n\nQuand tu liras cette lettre, une année aura passé. Aujourd'hui, je me suis fixé trois objectifs.\n\nD'abord, je veux prendre confiance en moi au travail. J'ai toujours peur de prendre la parole en réunion. J'aimerais que tu oses enfin présenter tes idées, même si ta voix tremble.\n\nEnsuite, je veux progresser en espagnol, à raison de vingt minutes par jour. Ce sera difficile de garder cette habitude, mais dès que j'aurai atteint le niveau B1, je partirai un mois à Séville.\n\nEnfin, je souhaite que tu prennes soin de toi : moins d'écrans, plus de marche. Je sais que tu devras surmonter la fatigue et le découragement.\n\nJ'espère que tu seras fière de tes progrès, même petits. Se dépasser, ce n'est pas devenir quelqu'un d'autre : c'est s'épanouir un peu plus chaque jour.\n\nÀ dans un an !",
      "explanation": "Growth vocabulary carries the letter: \"se fixer des objectifs\", \"prendre confiance en soi\", \"progresser\", \"surmonter\", \"se dépasser\", \"s'épanouir\". \"Quand tu liras\" and \"dès que j'aurai atteint\" use the future after time conjunctions; \"j'espère que tu seras\" takes the indicative, while \"j'aimerais que tu oses\" and \"je souhaite que tu prennes\" take the subjunctive."
    }
  ],
  "b2-word-web-performing-arts": [
    {
      "type": "write",
      "prompt": "You have just seen a play, a dance show or a concert on its opening night. Write a review for a cultural website: describe the staging, the performers and the audience's reaction, and give your verdict.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses performing-arts vocabulary precisely: la mise en scène, un comédien / une comédienne, une première, une salle comble, faire un tabac, les décors...",
        "Uses at least one emphatic structure (\"ce qui m'a frappé, c'est...\", \"c'est... qui\", dislocation)",
        "Uses at least one exclamation or a superlative + subjunctive relative",
        "Gives a clear, argued verdict"
      ],
      "modelAnswer": "« Le Malade imaginaire » au Théâtre de la Ville : un triomphe\n\nHier soir, c'était la première du « Malade imaginaire » mis en scène par Claire Dumont, et la salle était comble. Ce qui m'a frappée d'abord, c'est la mise en scène : les décors, très simples, se transforment sous nos yeux en chambre, en rue, puis en hôpital moderne.\n\nArgan, c'est Marc Lavigne qui l'interprète, et quel comédien ! Il passe du rire à l'angoisse avec une aisance incroyable. La jeune comédienne qui joue Toinette, elle, a fait rire toute la salle à chaque apparition.\n\nÀ la fin, le public s'est levé pour applaudir pendant dix minutes. C'est sans doute la meilleure adaptation de Molière que j'aie vue depuis des années. Si ça continue, cette pièce va faire un tabac tout l'hiver. Courez-y !",
      "explanation": "The review uses precise theatre vocabulary (\"la première\", \"mise en scène\", \"la salle était comble\", \"les décors\", \"comédien\", \"faire un tabac\"). Emphasis highlights the key points: the pseudo-cleft \"ce qui m'a frappée, c'est\", the dislocation \"Argan, c'est Marc Lavigne qui l'interprète\" and \"quel comédien !\". The superlative takes the subjunctive: \"la meilleure adaptation que j'aie vue\"."
    }
  ],
  "b2-comprehensive-review-2": [
    {
      "type": "write",
      "prompt": "Your company sent you to a one-day training course on public speaking. Write a short report for your manager: summarise what the trainer said and asked you to do, how the participants practised, what changed for you, and what you recommend.",
      "minWords": 100,
      "maxWords": 180,
      "rubric": [
        "Reports statements, questions and instructions with backshift (\"elle a expliqué que...\", \"elle nous a demandé de...\", \"elle voulait savoir si...\")",
        "Uses the gérondif and at least one causative (\"elle nous a fait répéter\")",
        "Uses formal connectors to structure the report (tout d'abord, par ailleurs, en revanche, en conclusion...)",
        "Uses at least one emphatic structure (\"ce qui a été le plus utile, c'est...\")"
      ],
      "modelAnswer": "Objet : compte rendu de la formation « Prendre la parole en public » du 12 mai\n\nTout d'abord, la formatrice, Mme Perrin, nous a expliqué que la plupart des gens avaient peur de parler en public et que ce trac pouvait devenir une force. Elle nous a demandé de nous présenter en une minute, puis elle voulait savoir ce qui nous mettait le plus mal à l'aise.\n\nPar ailleurs, elle nous a fait répéter nos présentations plusieurs fois, en nous filmant. En nous regardant à l'écran, nous avons compris nos défauts : je parlais trop vite et je ne regardais jamais le public.\n\nCe qui a été le plus utile, c'est l'exercice d'improvisation de l'après-midi. En revanche, la partie théorique était un peu longue.\n\nEn conclusion, je me sens plus sûr de moi. Je recommande cette formation à toute l'équipe commerciale, à condition qu'elle soit organisée en petits groupes.",
      "explanation": "The trainer's words are reported with backshift (\"avaient peur\", \"pouvait devenir\"), her questions with \"ce qui\" and her instructions with \"de\" + infinitive. \"Elle nous a fait répéter\" is a causative and \"en nous filmant\", \"en nous regardant\" are gérondifs. The report is structured with \"tout d'abord\", \"par ailleurs\", \"en revanche\" and \"en conclusion\", and \"ce qui a été le plus utile, c'est\" adds emphasis."
    }
  ],
  "b2-challenge-dialogue-marathon": [
    {
      "type": "write",
      "prompt": "Two former classmates, Karim and Julie, meet by chance after fifteen years in a café. Write their dialogue: they tell each other how their lives have changed, what they regret, and pass on news about other classmates.",
      "minWords": 100,
      "maxWords": 180,
      "rubric": [
        "Uses verbs of change (devenir, se mettre à, finir par, rendre + adjective)",
        "Expresses regret with \"j'aurais dû\", \"si seulement\" or \"si\" + plus-que-parfait + conditionnel passé",
        "Reports news about others in indirect speech with backshift",
        "Uses a natural spoken register with exclamations and questions"
      ],
      "modelAnswer": "— Julie ? Ce n'est pas possible ! Ça fait quoi, quinze ans ?\n— Karim ! Tu n'as pas changé… enfin, un peu. Qu'est-ce que tu deviens ?\n— Je suis devenu prof de maths, figure-toi. Moi qui détestais l'école !\n— Ha ! Moi, j'ai fini par reprendre la pharmacie de mes parents. Je me suis mise à la course à pied, aussi.\n— Tu es heureuse ?\n— Oui, mais j'aurais dû voyager avant. Si j'étais partie un an en Australie comme je le voulais, je n'aurais pas autant de regrets aujourd'hui.\n— Moi, si seulement j'avais gardé contact avec tout le monde… Tu as des nouvelles de Marc ?\n— Oui ! Il m'a dit l'an dernier qu'il s'était marié et qu'il vivait à Montréal. Et Léa m'a raconté qu'elle avait ouvert un restaurant à Nantes.\n— Incroyable. La vie nous a rendus plus sages, finalement.\n— Plus sages, je ne sais pas. Mais plus vieux, ça, c'est sûr !",
      "explanation": "Verbs of change describe their paths: \"je suis devenu\", \"j'ai fini par reprendre\", \"je me suis mise à\", \"la vie nous a rendus plus sages\" (agreeing with nous). Regret uses \"j'aurais dû\", \"si seulement j'avais gardé\" and the mixed hypothetical \"si j'étais partie..., je n'aurais pas autant de regrets aujourd'hui\". News is reported with backshift: \"qu'il s'était marié\", \"qu'il vivait\", \"qu'elle avait ouvert\"."
    }
  ]
});
