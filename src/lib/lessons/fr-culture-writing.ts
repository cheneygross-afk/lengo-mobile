// Synced from cheneygross-afk/lengo:src/lib/lessons/fr-culture-writing.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { UnitWriting } from "./unitWriting";
import { spaced } from "./fr-units";

// Extra writing tasks for this level's units, so every unit asks the learner to
// write at least three times: keyed by the lesson each is added to (see
// unitWriting.ts). Marked by the AI writing feedback like every writing task.
export const FR_CULTURE_WRITING: UnitWriting = spaced({
  "culture-mission-explain-a-fete": [
    {
      "type": "write",
      "prompt": "Your company's international newsletter has asked you to explain a French tradition to colleagues from abroad. Write a short article about la galette des rois: when and how it is eaten, where the custom comes from, what the fève and the crown are for, and what really matters in the ritual.",
      "minWords": 100,
      "maxWords": 200,
      "rubric": [
        "Explains the tradition with \"c'est une tradition qui...\" and \"à l'origine\" or \"ça remonte à...\"",
        "Picks out what matters with \"ce qui compte, c'est...\"",
        "Describes the custom impersonally with the pronominal passive or \"on\" (\"elle se partage\", \"on la mange\")",
        "Uses the key vocabulary accurately: \"l'Épiphanie\", \"la fève\", \"la couronne\", \"le roi\" or \"la reine\""
      ],
      "modelAnswer": "La galette des rois, c'est une tradition qui revient chaque mois de janvier en France. Officiellement, on la mange pour l'Épiphanie, le 6 janvier, mais en pratique, elle se partage tout le mois, en famille comme au bureau. Dans le Nord, c'est une pâte feuilletée à la frangipane ; dans le Sud, on préfère le gâteau des rois, une brioche en couronne.\n\nÀ l'origine, la fève était une vraie fève : la coutume remonte aux Saturnales romaines, où l'on tirait au sort un « roi » d'un jour. Aujourd'hui, c'est une petite figurine en porcelaine cachée dans la galette.\n\nLe rituel est simple : le plus jeune se glisse sous la table et décide qui reçoit chaque part. Celui ou celle qui trouve la fève devient le roi ou la reine, porte la couronne en papier et choisit son roi ou sa reine.\n\nMais ce qui compte, ce n'est pas la frangipane : c'est le moment partagé. Et au bureau, une règle tacite : le roi apporte la prochaine galette !",
      "explanation": "The tradition is framed with \"c'est une tradition qui\", \"à l'origine\" and \"la coutume remonte aux Saturnales\", and \"ce qui compte, c'est le moment partagé\" picks out what matters. The pronominal passive (\"elle se partage\") and \"on\" (\"on la mange\", \"on préfère\") describe the custom impersonally, and \"l'Épiphanie\", \"la fève\" and \"la couronne\" appear in context."
    }
  ],
  "culture-table-etiquette-error-hunt": [
    {
      "type": "write",
      "prompt": "Last night you had dinner at a French colleague's home and, looking back, you made several gaffes. Write a diary entry: tell what you did wrong from your arrival to dessert, say what you should have done, and note the rules for next time.",
      "minWords": 100,
      "maxWords": 200,
      "rubric": [
        "States rules with \"ça ne se fait pas de\" + infinitive and \"il vaut mieux\" + infinitive",
        "Tells the evening in the passé composé, with the imparfait for the background",
        "Expresses regret with \"j'aurais dû\" or \"j'aurais mieux fait de\" + infinitive",
        "Quotes a host line or a food idiom in context (\"reprends-en\", \"sers-toi\", \"ce n'est pas de la tarte\")"
      ],
      "modelAnswer": "Cher journal,\n\nQuelle soirée ! Chez Antoine, j'ai fait gaffe sur gaffe. D'abord, je suis arrivé à vingt heures pile, alors que sa femme était encore sous la douche : en France, il vaut mieux arriver avec un petit quart d'heure de retard. Ensuite, j'ai offert une bouteille de vin, qu'Antoine s'est senti obligé d'ouvrir. J'aurais dû apporter des fleurs ou un dessert.\n\nÀ table, j'ai gardé les mains sur les genoux et j'ai commencé à manger avant tout le monde. Ça ne se fait pas de commencer avant la maîtresse de maison ! Au dessert, quand elle m'a dit « reprends-en », j'ai répondu « non merci, je suis plein » et Antoine a éclaté de rire. J'aurais mieux fait de dire « c'était délicieux, mais je n'ai plus faim ».\n\nBref, les codes de la table française, ce n'est pas de la tarte. La prochaine fois, j'arriverai en retard, les mains sur la table et sans bouteille !",
      "explanation": "The rules are stated with \"il vaut mieux\" + infinitive and \"ça ne se fait pas de\" + infinitive, and the regrets with \"j'aurais dû\" and \"j'aurais mieux fait de\". The passé composé tells the gaffes and the imparfait the background (\"sa femme était encore sous la douche\"); the host's \"reprends-en\" and the idiom \"ce n'est pas de la tarte\" are used in context."
    }
  ],
  "culture-foot-metaphors-contrast": [
    {
      "type": "write",
      "prompt": "Your team has just delivered a difficult project after a tense meeting that ran very late. Write a short email to your colleagues to thank them, sum up what happened and suggest a fresh start, using at least four football metaphors from everyday French.",
      "minWords": 100,
      "maxWords": 200,
      "rubric": [
        "Uses at least four football metaphors with their figurative meaning (\"mouiller le maillot\", \"jouer les prolongations\", \"renvoyer la balle\", \"remettre la balle au centre\", \"marquer des points\")",
        "Includes a metaphor for being left out (\"être sur la touche\", \"être hors-jeu\")",
        "Sums up in the passé composé and suggests the next step with \"je vous propose de\" + infinitive",
        "Keeps a friendly professional register (\"Bonjour à tous\", vous to the team, \"Merci encore\")"
      ],
      "modelAnswer": "Bonjour à tous,\n\nC'est fini : le dossier Morel est parti ce matin chez le client ! Je tiens à vous remercier, parce que tout le monde a vraiment mouillé le maillot ces dernières semaines.\n\nJe sais que la réunion de jeudi a été tendue. Elle a joué les prolongations jusqu'à vingt et une heures, chaque service a renvoyé la balle à l'autre, et certains se sont sentis un peu sur la touche. Ce n'était agréable pour personne.\n\nMais la présentation de Léa a marqué des points auprès du client, et c'est ce qui compte. Alors je vous propose de remettre la balle au centre : on se retrouve vendredi midi pour un déjeuner d'équipe, et on prépare ensemble le prochain projet. Sans carton rouge, cette fois !\n\nMerci encore à toutes et à tous,\nNicolas",
      "explanation": "Each metaphor keeps its figurative meaning: \"mouiller le maillot\" (give your all), \"jouer les prolongations\" (run over time), \"renvoyer la balle\" (pass the buck), \"être sur la touche\" (feel sidelined), \"marquer des points auprès de\" (impress) and \"remettre la balle au centre\" (start afresh). The passé composé sums up, and \"je vous propose de\" + infinitive suggests the next step."
    }
  ],
  "culture-chanson-identite-1": [
    {
      "type": "write",
      "prompt": "Your French conversation club is holding a 'soirée chanson française'. Write the short speech you'll give to open the evening: introduce two great singers of the tradition, say what makes each one special, and explain the difference between la chanson à texte and la variété.",
      "minWords": 100,
      "maxWords": 200,
      "rubric": [
        "Presents two artists with accurate details (\"Brel n'était pas français, il était belge\", \"Piaf incarne la chanson réaliste\")",
        "Uses the vocabulary of song: \"les paroles\", \"la voix\", \"un auteur-compositeur-interprète\"",
        "Contrasts \"la chanson à texte\" and \"la variété\"",
        "Addresses the audience directly and ends with an invitation to listen or sing"
      ],
      "modelAnswer": "Bonsoir à toutes et à tous, et bienvenue à notre soirée chanson française !\n\nCe soir, nous allons écouter deux géants. D'abord, Édith Piaf, la petite chanteuse des rues de Paris à la voix immense. Elle incarne la chanson réaliste : l'amour, la pauvreté, les cœurs brisés. Ensuite, Jacques Brel. Attention au piège : Brel n'était pas français, il était belge ! Auteur-compositeur-interprète, il chantait avec tout son corps, avec sa sueur et ses grands gestes.\n\nPourquoi ces deux artistes ? Parce qu'en France, on distingue la chanson à texte, où les paroles comptent autant que la musique, et la variété, plus légère, faite pour la radio et la télé. Dire de quelqu'un que c'est « un chanteur à texte », c'est un compliment.\n\nAlors ce soir, écoutez bien les paroles : vous les trouverez sur vos tables. Et à la fin, on chantera tous ensemble « La Vie en rose » !",
      "explanation": "The speech presents each artist with an accurate detail (\"Piaf incarne la chanson réaliste\", \"Brel n'était pas français, il était belge\") and the vocabulary of song (\"la voix\", \"les paroles\", always plural, \"auteur-compositeur-interprète\"). It contrasts \"la chanson à texte\" with \"la variété\", and closes with vous imperatives and the futur simple (\"écoutez\", \"on chantera\")."
    }
  ],
  "culture-superstitions-croyances-2": [
    {
      "type": "write",
      "prompt": "Write a short anecdote for a French friend's blog about a day when you had terrible luck that turned out well in the end. Use the everyday vocabulary of luck, a superstition or two, and at least one wish.",
      "minWords": 100,
      "maxWords": 200,
      "rubric": [
        "Uses at least three expressions of luck (\"avoir la scoumoune\", \"porter la poisse\", \"avoir du pot\", \"avoir du bol\", \"avoir de la veine\")",
        "Uses a superstition phrase in context (\"ça porte malheur\", \"je touche du bois\", \"je croise les doigts\")",
        "Includes a wish with \"pourvu que\" + subjunctive or \"que ça te porte bonheur\"",
        "Tells the story in the passé composé and the imparfait"
      ],
      "modelAnswer": "Le vendredi 13 du mois dernier, j'avais un entretien d'embauche à Paris. Le matin, un chat noir a traversé la rue devant moi. Je me suis dit : « Ça porte malheur, cette journée va mal finir. » Et en effet, j'avais la scoumoune : mon train a été annulé, il pleuvait des cordes et j'ai cassé mon parapluie. J'étais sûr que ce chat m'avait porté la poisse !\n\nPourtant, sur le quai, j'ai rencontré un homme qui allait au même endroit que moi. On a partagé un taxi... et c'était le directeur qui devait me faire passer l'entretien ! On a ri de nos malheurs pendant tout le trajet. Quel pot !\n\nJ'ai commencé lundi. Je touche du bois : pour l'instant, tout se passe bien. Ma nouvelle collègue m'a même offert un petit trèfle à quatre feuilles en me disant : « Que ça te porte bonheur ! » Pourvu que ma chance dure !",
      "explanation": "Bad luck is expressed with \"avoir la scoumoune\" and \"porter la poisse\", good luck with \"quel pot !\". The black cat with \"ça porte malheur\" and \"je touche du bois\" show superstitions in use, and the wishes \"que ça te porte bonheur\" and \"pourvu que ma chance dure\" take the subjunctive. The imparfait sets the scene and the passé composé moves the story on."
    }
  ],
  "culture-compliments-ping-pong": [
    {
      "type": "write",
      "prompt": "On a French forum for expats, someone asks: \"Should I say tu or vous to my new colleagues?\" Write a reply giving your opinion and advice: the default rules, who proposes the switch, a mixed case such as vous + first name, and a faux pas you made yourself.",
      "minWords": 100,
      "maxWords": 200,
      "rubric": [
        "Explains who gets \"tu\" and who gets \"vous\" by default (colleagues, managers, shopkeepers, in-laws)",
        "Says who proposes the switch and quotes the formula (\"on peut se tutoyer ?\")",
        "Mentions a mixed code such as \"vous\" + prénom at work",
        "Gives an opinion (\"à mon avis\", \"je trouve que\") and tells a personal faux pas in the past"
      ],
      "modelAnswer": "Bonjour,\n\nÀ mon avis, il vaut mieux commencer par « vous » avec tout le monde, puis s'adapter. Entre collègues du même âge, on se tutoie vite, surtout dans les start-up. Mais avec votre manager, les clients, les commerçants ou vos futurs beaux-parents, restez au « vous ».\n\nLa règle d'or : c'est la personne la plus âgée ou la plus haut placée qui propose de passer au « tu », avec un simple « on peut se tutoyer ? ». Ne le proposez pas vous-même à votre chef !\n\nAttention aussi au code mixte : dans beaucoup d'entreprises, on se vouvoie mais on s'appelle par le prénom : « Julie, vous avez vu le rapport ? » Ce n'est ni froid ni familier.\n\nMoi, ma première semaine, j'ai tutoyé la directrice financière à la machine à café. Elle m'a répondu en me vouvoyant, très poliment... J'ai compris tout de suite. Je trouve que c'est la meilleure méthode : observer qui tutoie qui, et suivre le mouvement !",
      "explanation": "The advice uses \"il vaut mieux\" + infinitive and vous imperatives (\"restez au vous\", \"ne le proposez pas\"). It explains who proposes the switch (\"la personne la plus haut placée\", \"on peut se tutoyer ?\"), illustrates the mixed code of vous + prénom, and tells the faux pas in the passé composé (\"j'ai tutoyé\", \"elle m'a répondu en me vouvoyant\")."
    }
  ]
});
