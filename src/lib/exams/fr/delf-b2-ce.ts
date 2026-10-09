// Synced from cheneygross-afk/lengo:src/lib/exams/fr/delf-b2-ce.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// DELF B2 practice exam -- Compréhension des écrits.
// 60 minutes, 2 exercises on two long texts (one informative, one
// argumentative), 18 items, as in the real exam.
export const DELF_B2_CE: ExamPaper = {
  id: "ce",
  kind: "reading",
  title: "Compréhension des écrits",
  minutes: 60,
  group: 1,
  tasks: [
    {
      title: "Exercice 1",
      instructions:
        "Lisez l'article suivant, puis répondez aux questions en choisissant la bonne réponse (A, B ou C).",
      texts: [
        {
          title: "Les supermarchés coopératifs : faire ses courses autrement",
          body:
            "Trois heures de travail par mois : c'est le prix à payer pour faire ses courses à La Louve, à Paris, ou dans l'un des quelque quarante supermarchés coopératifs qui ont ouvert en France depuis 2016. Le principe, importé de New York, où la Park Slope Food Coop fonctionne depuis les années 1970, repose sur un double engagement. Chaque client est à la fois copropriétaire du magasin, puisqu'il achète des parts sociales en entrant, et employé bénévole : il tient la caisse, range les rayons ou réceptionne les livraisons. En contrepartie, il bénéficie de prix inférieurs de 15 à 20 % à ceux de la grande distribution, le magasin n'ayant presque pas de salaires à verser.\n\n" +
            "Mais réduire ces coopératives à une affaire de prix serait passer à côté de l'essentiel. Ce sont les coopérateurs eux-mêmes qui choisissent, lors d'assemblées générales, les produits vendus et les fournisseurs. Résultat : une forte présence de produits bio et locaux, une attention portée à la rémunération des agriculteurs, et l'absence de certains produits jugés contraires aux valeurs du collectif. « Ici, personne ne cherche à me faire acheter plus que ce dont j'ai besoin, explique Hélène, membre depuis cinq ans. Il n'y a ni promotions agressives ni têtes de gondole. »\n\n" +
            "Le modèle séduit, mais il a ses limites. La première tient à la sociologie des membres. Malgré des tarifs réduits pour les foyers modestes, les coopérateurs restent majoritairement des diplômés urbains, disposant de temps libre et d'une certaine aisance avec la vie associative. « Trois heures par mois, c'est peu pour un cadre en télétravail, beaucoup pour une mère seule qui enchaîne deux emplois », résume un sociologue qui a étudié le phénomène.\n\n" +
            "La seconde limite est organisationnelle. Faire tourner un magasin avec des centaines de bénévoles qui changent chaque semaine exige une coordination considérable. Plusieurs coopératives ont dû fermer après quelques années, faute d'un nombre suffisant de membres actifs : lorsque l'enthousiasme du départ retombe, les créneaux restent vides et les rayons aussi. Les projets qui durent sont généralement ceux qui ont prévu dès le départ quelques salariés pour assurer la continuité.\n\n" +
            "Reste que ces supermarchés jouent un rôle qui dépasse leur poids économique, encore marginal. Ils servent de laboratoire : certaines enseignes classiques s'en inspirent déjà, en développant les circuits courts ou en associant leurs clients au choix de quelques produits. Et pour leurs membres, ils sont souvent bien plus qu'un magasin : un lieu de rencontre, dans des quartiers où l'on ne connaît pas toujours ses voisins.",
        },
      ],
      layout: "choice",
      items: [
        {
          n: 1,
          question: "Dans un supermarché coopératif, chaque client…",
          options: [
            "paie une cotisation mensuelle à la place de ses courses.",
            "est à la fois propriétaire d'une partie du magasin et travailleur bénévole.",
            "est salarié du magasin trois heures par mois.",
          ],
          answer: 1,
          explanation: "Il est « copropriétaire du magasin » (il achète des parts sociales) et « employé bénévole ».",
        },
        {
          n: 2,
          question: "Pourquoi les prix y sont-ils plus bas qu'en grande surface ?",
          options: [
            "Parce que le magasin n'a presque pas de salaires à payer.",
            "Parce que les produits viennent directement de New York.",
            "Parce que l'État subventionne ces magasins.",
          ],
          answer: 0,
          explanation: "« Le magasin n'ayant presque pas de salaires à verser. »",
        },
        {
          n: 3,
          question: "Selon l'auteur, l'essentiel du modèle coopératif réside dans…",
          options: [
            "la qualité exceptionnelle des produits.",
            "les économies réalisées par les membres.",
            "le pouvoir des membres de décider ce qui est vendu.",
          ],
          answer: 2,
          explanation: "« Réduire ces coopératives à une affaire de prix serait passer à côté de l'essentiel » : ce sont les coopérateurs qui choisissent produits et fournisseurs.",
        },
        {
          n: 4,
          question: "Qu'est-ce qu'Hélène apprécie dans sa coopérative ?",
          options: [
            "Les nombreuses promotions.",
            "L'absence de techniques pour pousser à la consommation.",
            "Les horaires d'ouverture.",
          ],
          answer: 1,
          explanation: "« Personne ne cherche à me faire acheter plus que ce dont j'ai besoin » : ni promotions agressives ni têtes de gondole.",
        },
        {
          n: 5,
          question: "Quelle est la première limite du modèle ?",
          options: [
            "Les membres sont surtout des personnes aisées et diplômées.",
            "Les tarifs restent trop élevés pour la plupart des familles.",
            "Les produits bio sont difficiles à trouver.",
          ],
          answer: 0,
          explanation: "Les coopérateurs « restent majoritairement des diplômés urbains, disposant de temps libre ».",
        },
        {
          n: 6,
          question: "La citation du sociologue montre que l'obligation de travailler trois heures…",
          options: [
            "est trop faible pour faire fonctionner un magasin.",
            "n'a pas le même poids selon la situation de chacun.",
            "décourage surtout les cadres.",
          ],
          answer: 1,
          explanation: "« C'est peu pour un cadre en télétravail, beaucoup pour une mère seule qui enchaîne deux emplois. »",
        },
        {
          n: 7,
          question: "Pourquoi certaines coopératives ont-elles fermé ?",
          options: [
            "Les fournisseurs ont refusé de travailler avec elles.",
            "La grande distribution leur a fait concurrence.",
            "Elles n'ont plus eu assez de membres actifs.",
          ],
          answer: 2,
          explanation: "Elles ont fermé « faute d'un nombre suffisant de membres actifs ».",
        },
        {
          n: 8,
          question: "Quels projets durent le plus longtemps ?",
          options: [
            "Ceux qui emploient quelques salariés dès le début.",
            "Ceux qui comptent le plus grand nombre de membres.",
            "Ceux qui sont installés dans les grandes villes.",
          ],
          answer: 0,
          explanation: "Ce sont « ceux qui ont prévu dès le départ quelques salariés pour assurer la continuité ».",
        },
        {
          n: 9,
          question: "Dans le dernier paragraphe, l'auteur affirme que ces coopératives…",
          options: [
            "vont bientôt remplacer les supermarchés classiques.",
            "ont une influence supérieure à leur importance économique.",
            "ne servent qu'à leurs propres membres.",
          ],
          answer: 1,
          explanation: "Elles jouent « un rôle qui dépasse leur poids économique, encore marginal » : elles servent de laboratoire.",
        },
      ],
    },
    {
      title: "Exercice 2",
      instructions:
        "Lisez le texte suivant, puis répondez aux questions en choisissant la bonne réponse (A, B ou C).",
      texts: [
        {
          title: "Tribune : « Rendons aux enfants le droit de se perdre »",
          body:
            "Quand j'avais neuf ans, je partais seul à vélo le mercredi après-midi, avec pour seule consigne de rentrer « avant la nuit ». Mes parents ne savaient ni où j'étais ni avec qui. Aujourd'hui, la même scène vaudrait sans doute un signalement aux services sociaux. En une génération, le rayon dans lequel un enfant peut se déplacer seul autour de son domicile a été divisé par quatre ou cinq, selon les études. Nos enfants grandissent sous surveillance, et nous trouvons cela normal.\n\n" +
            "On objectera que le monde est devenu plus dangereux. C'est faux. Les accidents graves et les enlèvements d'enfants sont plus rares aujourd'hui qu'il y a trente ans. Ce qui a changé, ce n'est pas le danger, c'est notre perception du danger, nourrie par des chaînes d'information qui transforment chaque fait divers en drame national. La seule menace qui ait réellement augmenté est la circulation automobile ; mais plutôt que de rendre la rue aux enfants, nous avons choisi de les en retirer.\n\n" +
            "Le prix de cette prudence est rarement évoqué. Un enfant qui ne se déplace jamais seul n'apprend pas à s'orienter, à évaluer un risque, à se débrouiller face à un imprévu. Il ne connaît pas non plus ce plaisir particulier de l'aventure, ce sentiment d'avoir accompli quelque chose sans l'aide d'un adulte. Les psychologues observent chez les adolescents une montée de l'anxiété que certains relient, au moins en partie, à ce manque d'autonomie dans l'enfance.\n\n" +
            "Je ne reproche rien aux parents, dont je fais partie. Nous subissons une pression sociale considérable : celui qui laisse son enfant aller seul à l'école passe pour irresponsable aux yeux des autres. C'est précisément pour cela que la solution ne peut pas être seulement individuelle. Il faut que les villes aménagent des rues apaisées autour des écoles, que les établissements encouragent les trajets à pied en groupe, que les parents s'organisent entre eux pour que leurs enfants retrouvent, à plusieurs, le chemin du parc.\n\n" +
            "Il ne s'agit évidemment pas de laisser un enfant de cinq ans traverser seul une avenue. Il s'agit de lui accorder, progressivement, la liberté qui correspond à son âge. Car un enfant que l'on protège de tout risque n'est pas un enfant en sécurité : c'est un adulte qui, un jour, ne saura pas quoi faire.",
        },
      ],
      layout: "choice",
      items: [
        {
          n: 10,
          question: "Pourquoi l'auteur commence-t-il par un souvenir d'enfance ?",
          options: [
            "Pour regretter l'imprudence de ses parents.",
            "Pour montrer l'écart entre la liberté d'hier et la surveillance d'aujourd'hui.",
            "Pour expliquer pourquoi il est devenu cycliste.",
          ],
          answer: 1,
          explanation: "Il oppose sa liberté passée à la situation actuelle, où « nos enfants grandissent sous surveillance ».",
        },
        {
          n: 11,
          question: "Selon les études citées, la zone dans laquelle un enfant circule seul…",
          options: [
            "est restée la même.",
            "a doublé grâce aux nouveaux aménagements.",
            "est devenue beaucoup plus petite.",
          ],
          answer: 2,
          explanation: "Ce rayon « a été divisé par quatre ou cinq » en une génération.",
        },
        {
          n: 12,
          question: "Comment l'auteur répond-il à l'argument selon lequel le monde est plus dangereux ?",
          options: [
            "Il le rejette en affirmant que c'est surtout la perception du danger qui a changé.",
            "Il l'accepte entièrement.",
            "Il dit qu'il manque de statistiques pour juger.",
          ],
          answer: 0,
          explanation: "« C'est faux » : « ce qui a changé, ce n'est pas le danger, c'est notre perception du danger ».",
        },
        {
          n: 13,
          question: "Quel danger a réellement augmenté, selon lui ?",
          options: ["Les enlèvements.", "La circulation automobile.", "Les agressions entre enfants."],
          answer: 1,
          explanation: "« La seule menace qui ait réellement augmenté est la circulation automobile. »",
        },
        {
          n: 14,
          question: "Que reproche-t-il à la société face à ce danger ?",
          options: [
            "D'avoir retiré les enfants de la rue au lieu de la rendre plus sûre.",
            "De ne pas avoir construit assez de pistes cyclables.",
            "D'avoir interdit les voitures près des écoles.",
          ],
          answer: 0,
          explanation: "« Plutôt que de rendre la rue aux enfants, nous avons choisi de les en retirer. »",
        },
        {
          n: 15,
          question: "D'après le troisième paragraphe, le manque d'autonomie peut avoir pour conséquence…",
          options: [
            "de meilleurs résultats scolaires.",
            "une dépendance aux écrans.",
            "une plus grande anxiété à l'adolescence.",
          ],
          answer: 2,
          explanation: "Les psychologues relient en partie « une montée de l'anxiété » chez les adolescents à ce manque d'autonomie.",
        },
        {
          n: 16,
          question: "Quelle est l'attitude de l'auteur envers les parents ?",
          options: [
            "Il les accuse d'être égoïstes.",
            "Il les comprend, car ils subissent une forte pression sociale.",
            "Il leur demande de laisser leurs enfants totalement libres.",
          ],
          answer: 1,
          explanation: "« Je ne reproche rien aux parents » : ils subissent « une pression sociale considérable ».",
        },
        {
          n: 17,
          question: "Pourquoi, selon lui, la solution ne peut-elle pas être seulement individuelle ?",
          options: [
            "Parce que les enfants refusent de sortir seuls.",
            "Parce que la loi interdit aux enfants de circuler seuls.",
            "Parce qu'un parent isolé est jugé par les autres ; il faut une action collective.",
          ],
          answer: 2,
          explanation: "Le parent qui laisse son enfant seul « passe pour irresponsable » : villes, écoles et parents doivent agir ensemble.",
        },
        {
          n: 18,
          question: "Quelle idée résume la conclusion du texte ?",
          options: [
            "Trop protéger un enfant le prépare mal à sa vie d'adulte.",
            "Les jeunes enfants doivent pouvoir tout faire seuls.",
            "Les parents d'aujourd'hui sont trop permissifs.",
          ],
          answer: 0,
          explanation: "« Un enfant que l'on protège de tout risque [...] c'est un adulte qui, un jour, ne saura pas quoi faire. »",
        },
      ],
    },
  ],
};
