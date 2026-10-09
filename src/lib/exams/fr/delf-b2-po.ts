// Synced from cheneygross-afk/lengo:src/lib/exams/fr/delf-b2-po.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// DELF B2 practice exam -- Production orale.
// 20 minutes with the examiners after 30 minutes of preparation: the
// candidate draws a short document, presents a point of view on the
// issue it raises, then defends it in a debate with the examiner. The
// real exam is one exercise; here its two phases are two tasks.
const DOCUMENT = {
  title: "Faut-il interdire les vols intérieurs quand le train existe ?",
  body:
    "Depuis 2023, la France interdit les vols intérieurs lorsqu'un trajet équivalent existe en train en moins de deux heures trente. Pour ses partisans, la mesure est un signal fort en faveur du climat : l'avion émet, par passager, jusqu'à cinquante fois plus de CO2 que le TGV. Ses détracteurs jugent au contraire qu'elle est surtout symbolique, puisqu'elle ne concerne qu'une poignée de lignes, et qu'elle pénalise les régions mal desservies. Certains écologistes demandent désormais d'étendre l'interdiction aux trajets de moins de quatre heures, tandis que les compagnies aériennes rappellent que le train reste souvent plus cher que l'avion.",
};

export const DELF_B2_PO: ExamPaper = {
  id: "po",
  kind: "speaking",
  title: "Production orale",
  minutes: 20,
  prepMinutes: 30,
  group: 2,
  tasks: [
    {
      title: "Partie 1 : Exposé",
      instructions:
        "Défense d'un point de vue argumenté. Préparation : 30 minutes. Vous tirez au sort un court document qui vous servira de déclencheur. Vous dégagez le problème soulevé par le document, puis vous présentez votre opinion sous la forme d'un exposé personnel de 5 à 7 minutes, construit et argumenté.",
      speak: {
        prompt: "Dégagez la problématique du document et présentez votre point de vue de manière structurée.",
        material: [DOCUMENT],
        points: [
          "Introduisez le thème et formulez la problématique.",
          "Annoncez votre plan.",
          "Défendez votre position avec au moins trois arguments illustrés d'exemples.",
          "Prenez en compte au moins un argument contraire et réfutez-le ou nuancez-le.",
          "Concluez en reprenant votre position, éventuellement avec une ouverture.",
        ],
        prepMinutes: 30,
        speakMinutes: 7,
        modelAnswer:
          "Le document que j'ai tiré évoque une mesure adoptée en France en 2023 : l'interdiction des vols intérieurs lorsqu'il existe une alternative en train de moins de deux heures et demie. Il présente à la fois les arguments de ceux qui la soutiennent, au nom du climat, et de ceux qui la jugent purement symbolique. La question que je voudrais poser est donc la suivante : faut-il aller plus loin et limiter davantage l'avion au profit du train ?\n\nJe défendrai l'idée que oui, à condition que le train devienne réellement accessible. J'évoquerai d'abord l'argument écologique, puis l'argument pratique, avant de répondre à l'objection du prix.\n\nD'abord, l'enjeu climatique est considérable. Si un trajet en avion émet jusqu'à cinquante fois plus qu'un trajet en TGV, il est difficile de justifier qu'on prenne l'avion pour faire Paris-Lyon. On demande aux citoyens de trier leurs déchets ou de baisser le chauffage ; il serait incohérent de ne rien exiger du transport aérien.\n\nEnsuite, sur des distances moyennes, le train est souvent aussi rapide que l'avion, si l'on compte tout le trajet. Il y a deux ans, j'ai fait Paris-Bordeaux en train : deux heures, de centre-ville à centre-ville, en travaillant sur mon ordinateur. En avion, entre le trajet jusqu'à l'aéroport, les contrôles et l'attente, j'aurais mis plus de temps.\n\nOn m'objectera, à juste titre, que le train coûte souvent plus cher. C'est un vrai problème, mais je pense qu'il faut le régler en agissant sur les prix, pas en renonçant à la mesure. Il suffirait par exemple de taxer davantage le kérosène, qui est aujourd'hui très peu taxé, et d'utiliser cet argent pour baisser le prix des billets de train et rouvrir des lignes dans les régions oubliées.\n\nEn conclusion, je crois que la limitation des vols courts est une bonne mesure, mais qu'elle n'aura de sens que si elle s'accompagne d'un véritable investissement dans le rail. Sinon, elle restera, comme le disent ses détracteurs, un simple symbole.",
      },
    },
    {
      title: "Partie 2 : Débat",
      instructions:
        "L'examinateur vous pose des questions sur votre exposé et peut prendre une position opposée à la vôtre. Vous défendez votre point de vue, vous nuancez si nécessaire et vous réagissez à ses arguments. Durée : environ 10 à 13 minutes.",
      speak: {
        prompt: "Débattez avec l'examinateur sur la limitation des vols intérieurs et, plus largement, sur les transports et l'écologie.",
        material: [DOCUMENT],
        points: [
          "Répondez précisément aux questions et aux objections.",
          "Défendez votre position avec de nouveaux exemples.",
          "Concédez quand l'argument est juste, puis nuancez (certes…, il n'en reste pas moins que…).",
          "Exprimez l'accord, le désaccord, le doute et l'hypothèse avec des structures variées.",
        ],
        examinerQuestions: [
          "Vous ne pensez pas que c'est aux individus de choisir leur moyen de transport, et pas à l'État ?",
          "Pour quelqu'un qui habite dans une région sans TGV, cette mesure est injuste, non ?",
          "L'aviation ne représente qu'une petite partie des émissions. Pourquoi s'attaquer à elle en priorité ?",
          "Si le prix des billets d'avion augmentait, seuls les riches pourraient voyager. Qu'en pensez-vous ?",
          "Et vous, seriez-vous prêt(e) à renoncer à l'avion pour vos vacances ?",
        ],
        prepMinutes: 0,
        speakMinutes: 12,
        modelAnswer:
          "— Ce n'est pas aux individus de choisir leur moyen de transport ?\n— Je comprends l'argument de la liberté, mais l'État encadre déjà beaucoup de choix individuels : la vitesse sur la route, par exemple. Quand un choix a des conséquences pour tout le monde, comme le climat, il me semble légitime que la collectivité fixe des limites.\n— Pour les régions sans TGV, c'est injuste, non ?\n— Vous avez raison, et c'est d'ailleurs pour ça que la loi ne concerne que les trajets où une vraie alternative existe. Il n'est pas question de couper Clermont-Ferrand du reste du pays. En revanche, il faudrait que l'État investisse pour que ces régions aient enfin un train digne de ce nom.\n— L'aviation, c'est une petite partie des émissions.\n— Certes, mais c'est la partie qui augmente le plus vite. Et puis, si chacun dit « ce n'est pas moi le problème principal », personne ne fera jamais rien. Cela dit, je suis d'accord qu'il faut agir en même temps sur le chauffage, l'agriculture, l'industrie.\n— Si l'avion devenait plus cher, seuls les riches voyageraient.\n— C'est un risque réel. C'est pourquoi je ne suis pas favorable à une taxe identique pour tous. On pourrait imaginer une taxe progressive : le premier vol de l'année serait peu taxé, mais les voyageurs très fréquents paieraient beaucoup plus. Ce sont souvent les mêmes personnes, d'ailleurs, qui prennent l'avion très souvent.\n— Et vous, seriez-vous prêt(e) à renoncer à l'avion ?\n— Pour les vacances en Europe, je le fais déjà : l'an dernier, je suis allée en Italie en train de nuit, et c'était une très belle expérience. En revanche, je ne vous cache pas que pour rendre visite à ma famille au Canada, je continuerai à prendre l'avion. Je pense que l'objectif n'est pas de ne plus jamais voler, mais de voler moins et mieux.",
      },
    },
  ],
};
