// Synced from cheneygross-afk/lengo:src/lib/exams/fr/dalf-c1-co.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// DALF C1 practice exam -- Compréhension de l'oral.
// 40 minutes, 2 exercises, 18 items, as in the real exam's current
// format: one long document heard twice, then several short radio
// documents heard once.
export const DALF_C1_CO: ExamPaper = {
  id: "co",
  kind: "listening",
  title: "Compréhension de l'oral",
  minutes: 40,
  group: 1,
  tasks: [
    {
      title: "Exercice 1",
      instructions:
        "Vous allez entendre un document long (entretien radiophonique). Vous entendrez le document deux fois. Vous avez d'abord trois minutes pour lire les questions. Après la première écoute, vous aurez trois minutes pour commencer à répondre ; après la seconde écoute, vous aurez cinq minutes pour compléter vos réponses. Choisissez la bonne réponse (A, B ou C).",
      audio: [
        {
          label: "Document long : les tiers-lieux à la campagne",
          lines: [
            {
              voice: "f",
              text: "Bonjour et bienvenue dans « Territoires », l'émission qui prend le temps d'aller voir ce qui se passe loin des métropoles. Ces dernières années, on a vu fleurir dans les villages des lieux un peu inclassables : un ancien café devenu à la fois épicerie, atelier de réparation et espace de travail partagé, une gare désaffectée transformée en atelier de fabrication numérique… On les appelle des tiers-lieux. Mon invité, Bastien Leroy, est sociologue, et il a passé deux ans à enquêter dans une trentaine d'entre eux. Bastien Leroy, bonjour. Première question, toute simple : qu'est-ce qu'un tiers-lieu ?",
            },
            {
              voice: "m",
              text: "Bonjour. Toute simple en apparence, parce que justement, il n'existe pas de définition qui fasse consensus. Le terme vient d'un sociologue américain qui, dans les années quatre-vingt, désignait par là les endroits où l'on se retrouve en dehors de la maison, le premier lieu, et du travail, le deuxième : le café, le salon de coiffure, la bibliothèque. En France, le mot a pris un sens plus militant. Ce qui caractérise un tiers-lieu, à mes yeux, ce n'est pas ce qu'on y fait, c'est la manière dont il est gouverné : ce sont les usagers eux-mêmes qui décident des activités, et le programme évolue en fonction de leurs besoins plutôt que d'un plan décidé d'en haut.",
            },
            {
              voice: "f",
              text: "Et pourquoi ce phénomène prend-il autant d'ampleur à la campagne ? On l'associait plutôt aux quartiers branchés des grandes villes.",
            },
            {
              voice: "m",
              text: "C'est vrai que les premiers sont apparus à Paris ou à Nantes. Mais aujourd'hui, près de la moitié se situent hors des grandes agglomérations. Il y a d'abord une raison très concrète : dans beaucoup de bourgs, le dernier commerce a fermé, la poste n'ouvre plus que deux matinées par semaine, et les habitants n'ont tout simplement plus d'endroit où se croiser. Le tiers-lieu vient combler ce vide. Ensuite, il y a eu l'effet de la crise sanitaire : un certain nombre de cadres sont venus s'installer à la campagne en gardant leur emploi en ville, et ils avaient besoin d'une connexion correcte et d'un bureau qui ne soit pas leur cuisine. Enfin, l'État a lancé un programme de soutien qui a financé plusieurs centaines de projets. Cela dit, je voudrais nuancer : l'argent public a accéléré le mouvement, il ne l'a pas créé. La plupart des lieux que j'ai visités existaient avant d'avoir touché la moindre subvention.",
            },
            {
              voice: "f",
              text: "Justement, on entend parfois que ces lieux sont surtout fréquentés par des néoruraux, des citadins installés depuis peu. Est-ce que votre enquête le confirme ?",
            },
            {
              voice: "m",
              text: "En partie, et c'est sans doute le point le plus délicat. Au départ, les fondateurs sont très souvent des nouveaux arrivants, diplômés, qui ont l'habitude de monter des projets associatifs. Et certains habitants de longue date regardent ça avec méfiance : ils ont le sentiment qu'on vient leur expliquer comment animer leur propre village. J'ai vu des lieux s'enfermer dans l'entre-soi, avec des ateliers de poterie et des conférences sur la permaculture qui n'attiraient que les mêmes vingt personnes. Mais j'ai vu aussi l'inverse. Ceux qui réussissent sont ceux qui ont accepté de commencer par des services très prosaïques : un point relais pour les colis, une aide pour remplir sa déclaration d'impôts en ligne, un repas partagé le jeudi. C'est souvent par là que les anciens poussent la porte, et une fois qu'ils sont là, ils proposent eux-mêmes des activités. Dans un village de la Creuse, ce sont des agriculteurs retraités qui animent aujourd'hui l'atelier de réparation de matériel.",
            },
            {
              voice: "f",
              text: "Il y a quand même la question du modèle économique. Un lieu ouvert à tous, avec des activités souvent gratuites, comment est-ce que ça tient ?",
            },
            {
              voice: "m",
              text: "Mal, très souvent, et il ne faut pas se le cacher. La plupart combinent plusieurs sources de revenus : la location des bureaux, un peu de restauration, des formations, et des subventions qui restent indispensables. Le problème, c'est que ces subventions sont presque toujours attachées à des projets, rarement au fonctionnement. On trouve facilement de l'argent pour acheter une imprimante 3D, beaucoup plus difficilement pour payer la personne qui ouvre la porte tous les matins. Résultat : une bonne partie de l'activité repose sur des bénévoles, qui finissent par s'épuiser. Sur les trente lieux de mon enquête, quatre ont fermé pendant que je travaillais, et dans trois cas, c'est l'épuisement de l'équipe qui en était la cause, pas le manque de public.",
            },
            { voice: "f", text: "Que faudrait-il faire, alors ?" },
            {
              voice: "m",
              text: "Je ne crois pas qu'il faille transformer les tiers-lieux en service public : ce serait contraire à leur principe même. Mais les communes et les départements pourraient reconnaître qu'ils rendent des services d'intérêt général et les financer dans la durée, avec des conventions de trois ou cinq ans, plutôt qu'au coup par coup. Et puis il faudrait arrêter de les évaluer uniquement au nombre de bureaux loués. Ce qu'ils produisent de plus précieux, du lien, de la confiance, ça ne se mesure pas facilement dans un tableau.",
            },
            { voice: "f", text: "Dernière question : êtes-vous optimiste ?" },
            {
              voice: "m",
              text: "Prudemment. Je me méfie des discours qui présentent les tiers-lieux comme la solution miracle à la désertification rurale. Ils ne remplaceront ni un médecin ni une ligne de train. En revanche, là où ils fonctionnent, ils redonnent aux habitants une chose qu'on avait un peu oubliée : la possibilité de décider ensemble de ce dont leur village a besoin. Et ça, ce n'est pas rien.",
            },
            { voice: "f", text: "Merci, Bastien Leroy." },
          ],
        },
      ],
      items: [
        {
          n: 1,
          source: 0,
          question: "Selon Bastien Leroy, ce qui définit avant tout un tiers-lieu, c'est…",
          options: [
            "la diversité des activités qu'on y propose.",
            "le fait que les usagers décident eux-mêmes de son fonctionnement.",
            "sa situation entre le domicile et le lieu de travail.",
          ],
          answer: 1,
          explanation:
            "« Ce n'est pas ce qu'on y fait, c'est la manière dont il est gouverné : ce sont les usagers eux-mêmes qui décident. » La définition « entre domicile et travail » est celle d'origine, pas la sienne.",
        },
        {
          n: 2,
          source: 0,
          question: "D'après l'invité, aujourd'hui, les tiers-lieux…",
          options: [
            "restent concentrés dans les quartiers des grandes villes.",
            "sont nés pour la plupart grâce aux subventions.",
            "se trouvent pour près de moitié hors des grandes agglomérations.",
          ],
          answer: 2,
          explanation: "« Aujourd'hui, près de la moitié se situent hors des grandes agglomérations. »",
        },
        {
          n: 3,
          source: 0,
          question: "Quel rôle attribue-t-il au programme de soutien de l'État ?",
          options: [
            "Il a accéléré un mouvement qui existait déjà.",
            "Il est à l'origine du phénomène.",
            "Il a surtout profité aux tiers-lieux urbains.",
          ],
          answer: 0,
          explanation: "« L'argent public a accéléré le mouvement, il ne l'a pas créé. »",
        },
        {
          n: 4,
          source: 0,
          question: "Quel risque évoque-t-il à propos des lieux fondés par des néoruraux ?",
          options: [
            "Que les fondateurs repartent en ville après la crise sanitaire.",
            "Que le lieu ne s'adresse qu'à un petit cercle de personnes semblables.",
            "Que les habitants de longue date en prennent le contrôle.",
          ],
          answer: 1,
          explanation:
            "Il parle de lieux qui « s'enferment dans l'entre-soi », avec des activités qui n'attirent « que les mêmes vingt personnes ».",
        },
        {
          n: 5,
          source: 0,
          question: "Selon lui, les lieux qui parviennent à attirer les habitants de longue date…",
          options: [
            "commencent par proposer des services pratiques du quotidien.",
            "organisent des conférences sur l'agriculture.",
            "confient leur direction à la mairie.",
          ],
          answer: 0,
          explanation:
            "Ils acceptent « de commencer par des services très prosaïques » : point relais colis, aide aux démarches en ligne, repas partagé.",
        },
        {
          n: 6,
          source: 0,
          question: "L'exemple du village de la Creuse montre que…",
          options: [
            "les retraités sont les principaux usagers des tiers-lieux.",
            "le matériel agricole y est réparé gratuitement.",
            "les habitants de longue date peuvent devenir eux-mêmes animateurs.",
          ],
          answer: 2,
          explanation:
            "Une fois entrés, les anciens « proposent eux-mêmes des activités » : des agriculteurs retraités animent l'atelier de réparation.",
        },
        {
          n: 7,
          source: 0,
          question: "Quel est, d'après lui, le principal défaut des financements publics ?",
          options: [
            "Ils sont trop faibles pour acheter du matériel.",
            "Ils financent des projets ponctuels plutôt que le fonctionnement courant.",
            "Ils sont réservés aux lieux qui louent des bureaux.",
          ],
          answer: 1,
          explanation:
            "Les subventions sont « attachées à des projets, rarement au fonctionnement » : on paie l'imprimante 3D, pas la personne qui ouvre le lieu.",
        },
        {
          n: 8,
          source: 0,
          question: "Pourquoi trois des lieux étudiés ont-ils fermé ?",
          options: [
            "Parce que leurs équipes, souvent bénévoles, étaient épuisées.",
            "Parce qu'ils n'attiraient pas assez de public.",
            "Parce que leurs subventions avaient été supprimées.",
          ],
          answer: 0,
          explanation: "« Dans trois cas, c'est l'épuisement de l'équipe qui en était la cause, pas le manque de public. »",
        },
        {
          n: 9,
          source: 0,
          question: "Que propose-t-il aux collectivités locales ?",
          options: [
            "Faire des tiers-lieux de véritables services publics.",
            "Les évaluer en fonction du nombre de bureaux loués.",
            "Les soutenir par des conventions de plusieurs années.",
          ],
          answer: 2,
          explanation:
            "Il propose de les financer « dans la durée, avec des conventions de trois ou cinq ans », et refuse explicitement d'en faire un service public.",
        },
        {
          n: 10,
          source: 0,
          question: "Comment peut-on qualifier sa conclusion ?",
          options: [
            "Enthousiaste : les tiers-lieux peuvent remplacer les services disparus.",
            "Nuancée : leur apport est réel mais limité.",
            "Pessimiste : la plupart sont condamnés à fermer.",
          ],
          answer: 1,
          explanation:
            "Il est « prudemment » optimiste : ils ne remplaceront « ni un médecin ni une ligne de train », mais redonnent aux habitants un pouvoir de décision collective.",
        },
      ],
    },
    {
      title: "Exercice 2",
      instructions:
        "Vous allez entendre plusieurs documents radiophoniques courts. Vous entendrez chaque document une seule fois. Avant chaque document, vous aurez le temps de lire les questions correspondantes. Choisissez la bonne réponse (A, B ou C).",
      audio: [
        {
          label: "Document 1 : chronique environnement",
          lines: [
            {
              voice: "m",
              text: "Il est huit heures quarante, place à notre chronique environnement. Dans la cour de l'école Jules-Ferry de Villeneuve, le bitume a disparu cet été. À la place : de la terre, des copeaux de bois, une quarantaine d'arbres et une petite noue qui recueille l'eau de pluie. Ces « cours oasis », lancées il y a quelques années à Paris, se multiplient désormais dans les villes moyennes. L'objectif premier est climatique : lors des canicules, un sol bitumé peut dépasser cinquante degrés, alors qu'un sol végétalisé reste une vingtaine de degrés plus frais. Mais les enseignants constatent un autre effet, qu'ils n'avaient pas anticipé : la répartition de l'espace a changé. Autrefois, le terrain de foot occupait le centre, et ceux qui n'y jouaient pas, bien souvent les filles, se retrouvaient sur les bords. Avec des espaces plus variés, les jeux se mélangent davantage. Tout n'est pas rose pour autant : certains parents se plaignent des vêtements boueux, et l'entretien des plantations demande un budget que toutes les communes n'avaient pas prévu.",
            },
          ],
        },
        {
          label: "Document 2 : le sommeil des adolescents",
          lines: [
            {
              voice: "f",
              text: "Les adolescents dorment-ils assez ? Selon une enquête publiée ce matin, un lycéen sur trois dort moins de sept heures par nuit en semaine. Le docteur Karim Saïdi est spécialiste du sommeil.",
            },
            {
              voice: "m",
              text: "Le chiffre n'est pas surprenant, mais il est préoccupant. À l'adolescence, l'horloge biologique se décale naturellement : on a sommeil plus tard le soir, ce n'est pas de la mauvaise volonté. Les écrans aggravent le phénomène, mais ils n'en sont pas la cause première. Le vrai problème, c'est que les cours commencent à huit heures, à un moment où le cerveau d'un adolescent est encore, en quelque sorte, en pleine nuit. Certains pays ont retardé l'heure d'entrée au lycée et ont observé moins d'absences et de meilleurs résultats. Chez nous, on en parle, mais on ne bouge pas, parce que cela bouleverserait les transports scolaires et l'organisation des familles.",
            },
          ],
        },
        {
          label: "Document 3 : billet d'humeur",
          lines: [
            {
              voice: "f",
              text: "Quand vous êtes-vous vraiment ennuyé pour la dernière fois ? Je ne parle pas de ces trente secondes d'attente devant la machine à café, aussitôt comblées par un coup d'œil à votre téléphone. Je parle de l'ennui véritable, celui des dimanches après-midi de l'enfance, quand il pleuvait et qu'il n'y avait rien à faire. On nous répète que c'est un fléau, qu'il faut occuper les enfants, multiplier les activités, rentabiliser chaque minute. Or les psychologues sont de plus en plus nombreux à penser le contraire : c'est dans ces moments creux que l'esprit vagabonde, fait des liens inattendus, invente. Je ne prétends pas qu'il faille jeter nos téléphones dans la Seine. Mais peut-être pourrions-nous, de temps en temps, accepter de ne rien faire, sans culpabiliser. Ce serait déjà une petite révolution.",
            },
          ],
        },
      ],
      items: [
        {
          n: 11,
          source: 0,
          question: "Quel est l'objectif premier des « cours oasis » ?",
          options: [
            "Mieux partager l'espace entre filles et garçons.",
            "Protéger les élèves de la chaleur lors des canicules.",
            "Réduire les dépenses d'entretien des écoles.",
          ],
          answer: 1,
          explanation:
            "« L'objectif premier est climatique. » Le meilleur partage de l'espace est un effet que les enseignants « n'avaient pas anticipé ».",
        },
        {
          n: 12,
          source: 0,
          question: "Qu'est-ce qui a surpris les enseignants ?",
          options: [
            "Les plaintes des parents.",
            "La baisse importante des températures.",
            "Une occupation plus équilibrée de la cour.",
          ],
          answer: 2,
          explanation:
            "Avant, le foot occupait le centre et les autres élèves les bords ; désormais « les jeux se mélangent davantage ».",
        },
        {
          n: 13,
          source: 0,
          question: "Quelle limite le chroniqueur signale-t-il ?",
          options: [
            "Le coût de l'entretien, que certaines communes n'avaient pas prévu.",
            "Le manque d'arbres adaptés au climat.",
            "L'opposition des enseignants au projet.",
          ],
          answer: 0,
          explanation:
            "« L'entretien des plantations demande un budget que toutes les communes n'avaient pas prévu. » Les enseignants, eux, en voient les bénéfices.",
        },
        {
          n: 14,
          source: 1,
          question: "Selon le médecin, le manque de sommeil des lycéens s'explique d'abord par…",
          options: [
            "leur manque de discipline.",
            "l'usage excessif des écrans.",
            "un décalage naturel de leur horloge biologique.",
          ],
          answer: 2,
          explanation:
            "« L'horloge biologique se décale naturellement » ; les écrans « aggravent le phénomène, mais n'en sont pas la cause première ».",
        },
        {
          n: 15,
          source: 1,
          question: "Quelle mesure le médecin évoque-t-il ?",
          options: [
            "Faire commencer les cours plus tard le matin.",
            "Interdire les écrans le soir.",
            "Allonger les vacances scolaires.",
          ],
          answer: 0,
          explanation: "Des pays « ont retardé l'heure d'entrée au lycée » avec de bons résultats.",
        },
        {
          n: 16,
          source: 1,
          question: "Pourquoi cette mesure n'est-elle pas appliquée en France, d'après lui ?",
          options: [
            "Les résultats obtenus à l'étranger sont décevants.",
            "Elle poserait des problèmes d'organisation pratique.",
            "Les médecins y sont opposés.",
          ],
          answer: 1,
          explanation: "« Cela bouleverserait les transports scolaires et l'organisation des familles. »",
        },
        {
          n: 17,
          source: 2,
          question: "Quelle est l'idée principale de la chroniqueuse ?",
          options: [
            "L'ennui peut favoriser l'imagination et la créativité.",
            "Les enfants s'ennuient davantage qu'autrefois.",
            "Il faut occuper les enfants le dimanche.",
          ],
          answer: 0,
          explanation:
            "« C'est dans ces moments creux que l'esprit vagabonde, fait des liens inattendus, invente. »",
        },
        {
          n: 18,
          source: 2,
          question: "Quelle position adopte-t-elle à l'égard du téléphone ?",
          options: [
            "Elle conseille de s'en débarrasser.",
            "Elle refuse toute critique de son usage.",
            "Elle n'en rejette pas l'usage mais invite à faire des pauses.",
          ],
          answer: 2,
          explanation:
            "« Je ne prétends pas qu'il faille jeter nos téléphones dans la Seine » : elle propose seulement d'accepter, de temps en temps, de ne rien faire.",
        },
      ],
    },
  ],
};
