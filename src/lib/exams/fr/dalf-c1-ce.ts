// Synced from cheneygross-afk/lengo:src/lib/exams/fr/dalf-c1-ce.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// DALF C1 practice exam -- Compréhension des écrits.
// 50 minutes, 2 exercises, 22 items: one long article with
// multiple-choice questions, then three short opinion texts on one
// theme to compare, as in the real exam's current format.
const AUTHORS = [
  "A. Claire Vasseur (cheffe d'entreprise)",
  "B. Mehdi Karaoui (délégué syndical)",
  "C. Sophie Marchand (économiste)",
];

export const DALF_C1_CE: ExamPaper = {
  id: "ce",
  kind: "reading",
  title: "Compréhension des écrits",
  minutes: 50,
  group: 1,
  tasks: [
    {
      title: "Exercice 1",
      instructions:
        "Lisez l'article suivant, puis répondez aux questions (1-13). Choisissez la bonne réponse (A, B ou C).",
      texts: [
        {
          label: "Article",
          title: "Réparer, un geste ordinaire devenu politique",
          body:
            "Il y a encore une génération, faire ressemeler ses chaussures ou porter son grille-pain chez l'électricien du quartier n'avait rien d'exceptionnel. Puis le prix des appareils neufs a chuté, les boutiques de réparation ont fermé les unes après les autres, et jeter est devenu le réflexe le plus rationnel : pourquoi payer quatre-vingts euros pour faire réparer un lave-linge quand on en trouve un neuf pour trois cents ? Depuis quelques années pourtant, le vent semble tourner. Les ateliers de réparation bénévoles se multiplient, la loi impose désormais aux fabricants d'afficher un indice de réparabilité sur certains produits, et un « bonus réparation » permet de réduire la facture chez les artisans agréés. Faut-il y voir le début d'une véritable révolution des usages, ou une simple mode portée par une minorité de consommateurs déjà convaincus ?\n\n" +
            "Les chiffres invitent à la prudence. Selon les études publiées par les pouvoirs publics, moins de la moitié des appareils électriques tombés en panne font l'objet d'une tentative de réparation. Le premier obstacle reste le prix : tant que la main-d'œuvre coûtera plus cher ici que la fabrication à l'autre bout du monde, l'équation économique jouera contre le réparateur. Le bonus réparation, conçu pour corriger ce déséquilibre, a d'ailleurs connu des débuts laborieux : faute d'être connu du grand public et faute d'un nombre suffisant d'artisans agréés, une large part de l'enveloppe prévue est restée inutilisée la première année. Le montant de l'aide a depuis été revalorisé et la liste des appareils concernés élargie, mais il est encore trop tôt pour en mesurer les effets.\n\n" +
            "Le deuxième obstacle est plus discret, et sans doute plus profond : beaucoup de produits ne sont tout simplement pas conçus pour être réparés. Batteries collées, vis aux formats propriétaires, pièces détachées introuvables ou vendues à un prix dissuasif : les procédés qui empêchent d'ouvrir un appareil ne manquent pas. Les associations de consommateurs parlent volontiers d'« obsolescence programmée ». Les industriels récusent le terme, qui suppose une intention de nuire, et préfèrent invoquer des contraintes de miniaturisation ou d'étanchéité. La vérité se situe probablement entre les deux : nul besoin de prêter aux fabricants un plan machiavélique pour constater qu'ils n'ont, jusqu'ici, guère eu intérêt à prolonger la vie de ce qu'ils vendent.\n\n" +
            "C'est précisément ce que l'indice de réparabilité cherche à changer. En attribuant à chaque produit une note sur dix, calculée notamment d'après la facilité de démontage, la disponibilité des pièces et la documentation fournie, il ne contraint personne à réparer, mais il rend visible un critère jusque-là ignoré au moment de l'achat. Son effet le plus notable ne se situe d'ailleurs pas forcément là où on l'attendait. Les consommateurs le consultent encore assez peu ; en revanche, plusieurs fabricants ont modifié la conception de leurs modèles pour ne pas afficher une mauvaise note en rayon. Autrement dit, l'outil agit davantage sur l'offre que sur la demande. Ses détracteurs lui reprochent toutefois de reposer en grande partie sur les déclarations des fabricants eux-mêmes, les contrôles restant rares.\n\n" +
            "Reste la dimension culturelle, que les mesures réglementaires ne suffisent pas à transformer. Dans un atelier de réparation associatif de Villeurbanne, un samedi après-midi, une quinzaine de personnes attendent leur tour, une lampe, une cafetière ou un aspirateur sous le bras. « Les gens viennent d'abord pour économiser, reconnaît Hélène, ingénieure à la retraite et bénévole depuis six ans. Mais beaucoup reviennent pour autre chose : ils découvrent qu'un objet n'est pas une boîte noire, qu'on peut l'ouvrir, le comprendre. » Le principe de ces ateliers n'est en effet pas de réparer à la place des visiteurs, mais avec eux. Ce qui se transmet là, au-delà d'un savoir-faire, c'est un rapport aux objets que des décennies de consommation jetable avaient presque effacé.\n\n" +
            "Il serait naïf, pour autant, de faire reposer la transition sur la seule bonne volonté individuelle. Les ateliers bénévoles, aussi précieux soient-ils, ne traitent qu'une fraction infime des appareils en panne, et les réparateurs professionnels peinent à recruter : le métier, mal payé et peu valorisé, n'attire guère les jeunes. Pour de nombreux économistes, seule une combinaison de mesures (pièces détachées disponibles plus longtemps, fiscalité plus favorable à la main-d'œuvre, formation de nouveaux techniciens) pourrait faire de la réparation la norme plutôt que l'exception. La question n'est donc plus seulement de savoir si les consommateurs veulent réparer, mais si l'on veut, collectivement, leur en donner les moyens.",
        },
      ],
      items: [
        {
          n: 1,
          question: "Dans le premier paragraphe, l'auteur présente le fait de jeter les appareils en panne comme…",
          options: [
            "une habitude irresponsable des jeunes générations.",
            "un choix économiquement logique dans le contexte de l'époque.",
            "une conséquence des lois sur la consommation.",
          ],
          answer: 1,
          explanation:
            "Avec la baisse des prix du neuf, « jeter est devenu le réflexe le plus rationnel », comme le montre l'exemple du lave-linge.",
        },
        {
          n: 2,
          question: "La question qui clôt le premier paragraphe…",
          options: [
            "annonce que l'auteur va examiner la portée réelle du phénomène.",
            "montre que l'auteur est déjà convaincu d'une révolution des usages.",
            "suggère que les consommateurs refusent de réparer.",
          ],
          answer: 0,
          explanation:
            "L'alternative « révolution des usages » ou « simple mode » est la problématique de l'article ; la suite pèse les deux hypothèses (« Les chiffres invitent à la prudence »).",
        },
        {
          n: 3,
          question: "Selon le deuxième paragraphe, le bonus réparation a d'abord peu fonctionné parce que…",
          options: [
            "son montant était trop élevé pour l'État.",
            "les fabricants s'y sont opposés.",
            "il était mal connu et trop peu d'artisans étaient agréés.",
          ],
          answer: 2,
          explanation:
            "« Faute d'être connu du grand public et faute d'un nombre suffisant d'artisans agréés », une large part de l'enveloppe n'a pas été utilisée.",
        },
        {
          n: 4,
          question: "Que dit l'auteur des effets du bonus depuis sa revalorisation ?",
          options: [
            "Ils sont décevants.",
            "Il est encore impossible de les évaluer.",
            "Ils ont été spectaculaires.",
          ],
          answer: 1,
          explanation: "« Il est encore trop tôt pour en mesurer les effets. »",
        },
        {
          n: 5,
          question: "Pourquoi les industriels rejettent-ils l'expression « obsolescence programmée » ?",
          options: [
            "Parce qu'elle suppose une volonté délibérée de nuire.",
            "Parce qu'elle ne concerne que les batteries.",
            "Parce qu'elle a été inventée par la publicité.",
          ],
          answer: 0,
          explanation: "Ils « récusent le terme, qui suppose une intention de nuire ».",
        },
        {
          n: 6,
          question: "Quelle est la position de l'auteur dans ce débat ?",
          options: [
            "Il donne entièrement raison aux associations de consommateurs.",
            "Il juge les contraintes techniques invoquées par les industriels tout à fait convaincantes.",
            "Sans leur prêter de mauvaises intentions, il constate que les fabricants n'avaient pas intérêt à faire durer leurs produits.",
          ],
          answer: 2,
          explanation:
            "« La vérité se situe probablement entre les deux » : pas de « plan machiavélique », mais les fabricants n'ont « guère eu intérêt à prolonger la vie » de leurs produits.",
        },
        {
          n: 7,
          question: "D'après l'article, l'indice de réparabilité…",
          options: [
            "oblige les consommateurs à faire réparer leurs appareils.",
            "rend visible un critère qui était ignoré au moment de l'achat.",
            "est calculé par des organismes de contrôle indépendants.",
          ],
          answer: 1,
          explanation:
            "« Il ne contraint personne à réparer, mais il rend visible un critère jusque-là ignoré. » Il repose en partie sur les déclarations des fabricants, peu contrôlées.",
        },
        {
          n: 8,
          question: "Selon l'auteur, l'effet le plus net de cet indice concerne…",
          options: [
            "les fabricants, qui ont revu la conception de certains modèles.",
            "les consommateurs, qui le consultent avant chaque achat.",
            "les réparateurs, qui ont vu leur activité augmenter.",
          ],
          answer: 0,
          explanation:
            "Les consommateurs le consultent « encore assez peu », mais des fabricants ont modifié leurs modèles : « l'outil agit davantage sur l'offre que sur la demande ».",
        },
        {
          n: 9,
          question: "Quelle critique ses détracteurs adressent-ils à l'indice ?",
          options: [
            "Sa note est trop difficile à comprendre.",
            "Il ne concerne que les produits les plus chers.",
            "Il s'appuie largement sur des déclarations des fabricants rarement vérifiées.",
          ],
          answer: 2,
          explanation:
            "Il repose « en grande partie sur les déclarations des fabricants eux-mêmes, les contrôles restant rares ».",
        },
        {
          n: 10,
          question: "D'après Hélène, ce qui fait revenir les visiteurs de l'atelier, c'est…",
          options: [
            "la possibilité d'apprendre un métier.",
            "la découverte qu'un objet peut être ouvert et compris.",
            "les économies réalisées.",
          ],
          answer: 1,
          explanation:
            "Les gens viennent « d'abord pour économiser », mais « reviennent pour autre chose » : ils découvrent qu'un objet « n'est pas une boîte noire ».",
        },
        {
          n: 11,
          question: "Le principe des ateliers associatifs est de…",
          options: [
            "réparer gratuitement les appareils à la place de leurs propriétaires.",
            "former de futurs réparateurs professionnels.",
            "réparer avec les visiteurs, et non à leur place.",
          ],
          answer: 2,
          explanation: "« Le principe de ces ateliers n'est pas de réparer à la place des visiteurs, mais avec eux. »",
        },
        {
          n: 12,
          question: "Dans le dernier paragraphe, l'auteur soutient que…",
          options: [
            "faire de la réparation la norme exige plusieurs mesures collectives.",
            "la bonne volonté des consommateurs suffira à changer les habitudes.",
            "les ateliers bénévoles devraient remplacer les réparateurs professionnels.",
          ],
          answer: 0,
          explanation:
            "Il serait « naïf » de compter sur la seule bonne volonté : il faut « une combinaison de mesures » et se demander si l'on veut « collectivement » en donner les moyens.",
        },
        {
          n: 13,
          question: "Dans « Les ateliers bénévoles, aussi précieux soient-ils, ne traitent qu'une fraction infime des appareils », le passage « aussi précieux soient-ils » a un sens…",
          options: [
            "causal : parce qu'ils sont précieux.",
            "comparatif : autant que les réparateurs.",
            "concessif : même s'ils sont précieux.",
          ],
          answer: 2,
          explanation:
            "Aussi + adjectif + subjonctif (avec inversion du sujet) exprime la concession : « si précieux qu'ils soient », « bien qu'ils soient précieux ».",
        },
      ],
    },
    {
      title: "Exercice 2",
      instructions:
        "Lisez les trois textes ci-dessous, publiés dans un dossier consacré à la semaine de quatre jours. Pour chaque affirmation (14-22), indiquez à quel texte elle correspond (A, B ou C). Chaque texte peut être choisi plusieurs fois.",
      texts: [
        {
          label: "A",
          title: "Claire Vasseur, dirigeante d'une PME de logistique (80 salariés)",
          body:
            "Nous sommes passés à la semaine de quatre jours il y a dix-huit mois, sans baisse de salaire mais aussi sans réduction du temps de travail : nos équipes font trente-cinq heures en quatre journées. Je ne vais pas prétendre que ce fut un choix purement philanthropique. Nous avions du mal à recruter des préparateurs de commandes, et l'argument du vendredi libre a fait la différence face à nos concurrents. Le bilan est globalement positif : l'absentéisme a baissé de près d'un tiers. Mais je mets en garde ceux qui y verraient une recette universelle. Des journées de près de neuf heures dans un entrepôt, c'est éprouvant, et certains salariés plus âgés nous ont demandé de revenir à cinq jours. Nous leur laissons désormais le choix.",
        },
        {
          label: "B",
          title: "Mehdi Karaoui, délégué syndical dans la grande distribution",
          body:
            "On nous présente la semaine de quatre jours comme une conquête sociale. Je demande à voir. Quand on comprime trente-cinq heures en quatre jours, on ne travaille pas moins : on travaille plus intensément, avec des journées à rallonge qui rendent la vie de famille impossible, en particulier pour les parents seuls qui doivent récupérer leurs enfants à dix-huit heures. La vraie avancée, ce serait de réduire le temps de travail, par exemple à trente-deux heures payées trente-cinq. Là, on pourrait parler de progrès. En attendant, je constate que dans mon secteur, ce sont souvent les employeurs qui la proposent, et rarement par générosité : c'est une manière de faire accepter des horaires d'ouverture élargis sans embaucher.",
        },
        {
          label: "C",
          title: "Sophie Marchand, économiste du travail",
          body:
            "Les expérimentations menées à l'étranger ont produit des résultats souvent encourageants : des salariés moins stressés, une productivité stable, voire en hausse. Il faut toutefois les lire avec précaution. Les entreprises qui se portent volontaires sont rarement représentatives : ce sont souvent des structures de services, où le travail se prête à une réorganisation, et dont la direction est déjà acquise à l'idée. Il est donc hasardeux d'en tirer des conclusions pour l'ensemble de l'économie. Surtout, il faut distinguer deux modèles que le débat public confond allègrement : la semaine de quatre jours à temps de travail constant, qui n'est qu'un réaménagement des horaires, et la réduction effective de la durée du travail, dont les effets sur l'emploi et sur les comptes des entreprises sont tout autres.",
        },
      ],
      layout: "select",
      items: [
        {
          n: 14,
          question: "La mesure a d'abord répondu à une difficulté de recrutement.",
          options: AUTHORS,
          answer: 0,
          explanation: "Texte A : « Nous avions du mal à recruter des préparateurs de commandes. »",
        },
        {
          n: 15,
          question: "Seule une baisse réelle de la durée du travail constituerait un progrès.",
          options: AUTHORS,
          answer: 1,
          explanation: "Texte B : « La vraie avancée, ce serait de réduire le temps de travail. »",
        },
        {
          n: 16,
          question: "Les entreprises qui testent la mesure ne sont pas représentatives de l'ensemble de l'économie.",
          options: AUTHORS,
          answer: 2,
          explanation: "Texte C : « Les entreprises qui se portent volontaires sont rarement représentatives. »",
        },
        {
          n: 17,
          question: "Des journées plus longues pénalisent particulièrement les parents qui élèvent seuls leurs enfants.",
          options: AUTHORS,
          answer: 1,
          explanation: "Texte B : les journées à rallonge gênent « en particulier les parents seuls ».",
        },
        {
          n: 18,
          question: "Une partie du personnel a souhaité revenir à l'organisation précédente.",
          options: AUTHORS,
          answer: 0,
          explanation: "Texte A : « certains salariés plus âgés nous ont demandé de revenir à cinq jours ».",
        },
        {
          n: 19,
          question: "On mélange souvent deux dispositifs très différents.",
          options: AUTHORS,
          answer: 2,
          explanation: "Texte C : « deux modèles que le débat public confond allègrement ».",
        },
        {
          n: 20,
          question: "Certains employeurs se servent de la mesure pour étendre les heures d'ouverture.",
          options: AUTHORS,
          answer: 1,
          explanation: "Texte B : « une manière de faire accepter des horaires d'ouverture élargis sans embaucher ».",
        },
        {
          n: 21,
          question: "Les absences des salariés ont nettement diminué.",
          options: AUTHORS,
          answer: 0,
          explanation: "Texte A : « l'absentéisme a baissé de près d'un tiers ».",
        },
        {
          n: 22,
          question: "Le rendement des salariés ne baisse pas, et peut même progresser.",
          options: AUTHORS,
          answer: 2,
          explanation: "Texte C : « une productivité stable, voire en hausse ».",
        },
      ],
    },
  ],
};
