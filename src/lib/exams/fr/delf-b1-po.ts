// Synced from cheneygross-afk/lengo:src/lib/exams/fr/delf-b1-po.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// DELF B1 practice exam -- Production orale.
// About 15 minutes with the examiners, in three parts, after 10 minutes
// to prepare part 3 only (parts 1 and 2 are done without preparation).
export const DELF_B1_PO: ExamPaper = {
  id: "po",
  kind: "speaking",
  title: "Production orale",
  minutes: 15,
  prepMinutes: 10,
  group: 2,
  tasks: [
    {
      title: "Partie 1 : Entretien dirigé",
      instructions:
        "Sans préparation. Vous parlez de vous, de vos activités, de vos centres d'intérêt. Vous parlez de votre passé, de votre présent et de vos projets. L'examinateur commence l'entretien par une question. Durée : 2 à 3 minutes.",
      speak: {
        prompt: "Présentez-vous et répondez aux questions de l'examinateur sur votre vie, vos goûts et vos projets.",
        points: [
          "Qui vous êtes : nom, âge, ville, situation familiale.",
          "Ce que vous faites : études, travail, loisirs.",
          "Votre parcours : ce que vous avez fait avant.",
          "Vos projets : ce que vous aimeriez faire dans les prochaines années.",
        ],
        examinerQuestions: [
          "Bonjour. Pouvez-vous vous présenter ?",
          "Qu'est-ce que vous faites dans la vie ? Ça vous plaît ?",
          "Pourquoi avez-vous commencé à apprendre le français ?",
          "Qu'est-ce que vous faites pendant votre temps libre ?",
          "Quels sont vos projets pour les années à venir ?",
        ],
        prepMinutes: 0,
        speakMinutes: 3,
        modelAnswer:
          "— Bonjour. Pouvez-vous vous présenter ?\n— Bonjour. Je m'appelle Hannah, j'ai vingt-neuf ans et je suis anglaise. J'habite à Manchester depuis cinq ans avec mon compagnon et notre chat.\n— Qu'est-ce que vous faites dans la vie ?\n— Je suis infirmière dans un hôpital pour enfants. C'est un métier fatigant, avec des horaires de nuit, mais j'adore le contact avec les familles.\n— Pourquoi avez-vous commencé à apprendre le français ?\n— Quand j'étais étudiante, j'ai passé un été à Montpellier pour garder des enfants. Je ne parlais presque pas, et ça m'a frustrée. Depuis, j'ai pris des cours le soir et je regarde beaucoup de séries françaises.\n— Et pendant votre temps libre ?\n— Je fais de la course à pied et je chante dans une chorale le mercredi.\n— Quels sont vos projets ?\n— J'aimerais travailler un ou deux ans dans un hôpital en France, peut-être à Lyon. C'est pour ça que je passe le DELF : il faut que je prouve mon niveau.",
      },
    },
    {
      title: "Partie 2 : Exercice en interaction",
      instructions:
        "Sans préparation. Vous tirez au sort un sujet et vous jouez la situation avec l'examinateur. Vous devez montrer que vous savez faire face à une situation de la vie quotidienne, même si elle est un peu inhabituelle. Durée : 3 à 4 minutes.",
      speak: {
        prompt:
          "Vous partagez un appartement avec un(e) colocataire. Depuis quelques semaines, il/elle invite souvent des amis tard le soir, laisse la cuisine sale et oublie de payer sa part des courses. Vous lui en parlez pour trouver une solution. L'examinateur joue le rôle du/de la colocataire.",
        points: [
          "Exposez calmement les problèmes en donnant des exemples précis.",
          "Expliquez les conséquences pour vous (sommeil, travail, argent).",
          "Écoutez ses arguments et réagissez.",
          "Proposez des solutions concrètes et négociez un compromis.",
        ],
        examinerQuestions: [
          "Salut ! Tu voulais me parler ? Il y a un problème ?",
          "Ah bon, on fait trop de bruit ? Mais on finit toujours avant minuit !",
          "La vaisselle, je la fais le lendemain matin, ce n'est pas grave, non ?",
          "Les courses ? Je pensais t'avoir remboursé(e) la semaine dernière…",
          "Bon, qu'est-ce que tu proposes ?",
        ],
        prepMinutes: 0,
        speakMinutes: 4,
        modelAnswer:
          "— Salut ! Tu voulais me parler ?\n— Oui, j'aimerais qu'on discute de quelques petites choses, sans se fâcher. Depuis trois semaines, tes amis viennent presque tous les soirs, et mardi dernier, ils sont partis à une heure du matin. Moi, je me lève à six heures pour aller travailler.\n— Mais on finit toujours avant minuit !\n— Pas toujours, je t'assure. Et même avant minuit, les murs sont fins, j'entends tout. Je ne te demande pas d'arrêter d'inviter des gens, mais en semaine, est-ce que vous pourriez baisser la musique à partir de vingt-deux heures ?\n— La vaisselle, je la fais le lendemain.\n— Le problème, c'est que le matin, je ne peux pas préparer mon petit déjeuner. Je te propose qu'on fasse un planning : chacun nettoie la cuisine le soir même, à tour de rôle.\n— Les courses ? Je pensais t'avoir remboursé(e).\n— Je crois que tu as oublié les deux dernières fois. Ce n'est pas grave, mais on pourrait ouvrir une cagnotte en ligne : on met chacun cinquante euros par mois et comme ça, plus besoin de faire les comptes.\n— D'accord, ça me va.\n— Super, merci. Et le week-end, invite qui tu veux, je viendrai peut-être même boire un verre avec vous !",
      },
    },
    {
      title: "Partie 3 : Expression d'un point de vue",
      instructions:
        "Préparation : 10 minutes. Vous tirez au sort un document. Vous dégagez le thème soulevé par le document et vous présentez votre opinion de manière claire et organisée. L'examinateur pourra ensuite vous poser quelques questions. Durée : 5 à 7 minutes.",
      speak: {
        prompt: "Dégagez le thème du document et donnez votre point de vue sur la question, en l'illustrant par des exemples.",
        material: [
          {
            title: "Les villes ferment leur centre aux voitures",
            body:
              "De plus en plus de villes européennes interdisent les voitures dans leur centre historique. Pour les mairies, c'est une façon de réduire la pollution et le bruit, et de rendre les rues aux piétons et aux cyclistes. Mais les commerçants s'inquiètent : selon eux, les clients qui viennent de la campagne ne peuvent plus accéder facilement aux magasins, et préfèrent se rendre dans les centres commerciaux en périphérie. Les personnes âgées ou handicapées se plaignent aussi de difficultés à se déplacer.",
          },
        ],
        points: [
          "Présentez le thème du document en une ou deux phrases.",
          "Donnez votre opinion clairement.",
          "Développez au moins deux arguments, avec des exemples tirés de votre expérience.",
          "Tenez compte des arguments opposés.",
          "Concluez.",
        ],
        examinerQuestions: [
          "Dans votre ville, est-ce que le centre est fermé aux voitures ?",
          "Vous dites que les transports en commun sont une solution. Mais à la campagne, comment faire ?",
          "Que pourrait-on faire pour aider les commerçants ?",
          "Et vous, comment vous déplacez-vous au quotidien ?",
        ],
        prepMinutes: 10,
        speakMinutes: 6,
        modelAnswer:
          "Le document parle d'une tendance actuelle : beaucoup de villes européennes interdisent les voitures dans leur centre. La question est de savoir si c'est une bonne solution pour tout le monde.\n\nPersonnellement, je suis plutôt favorable à cette mesure, mais à certaines conditions.\n\nD'abord, je pense que la qualité de vie s'améliore vraiment. Il y a trois ans, je suis allée à Pontevedra, en Espagne, où le centre est piéton depuis longtemps. Les enfants jouaient dans la rue, on entendait les gens parler, et l'air était beaucoup plus agréable. Ça m'a beaucoup marquée.\n\nEnsuite, c'est bon pour la santé : quand on ne peut pas prendre la voiture, on marche ou on fait du vélo, et on bouge davantage sans s'en rendre compte.\n\nCependant, je comprends l'inquiétude des commerçants et des personnes âgées. Si la mairie ferme le centre sans proposer d'alternative, les gens iront effectivement faire leurs courses dans les centres commerciaux. Il faut donc que la ville crée des parkings à l'entrée du centre, avec des navettes gratuites, et qu'elle autorise les véhicules des personnes handicapées et les livraisons à certaines heures.\n\nPour conclure, je crois que fermer le centre aux voitures est une bonne idée, à condition de ne laisser personne de côté.",
      },
    },
  ],
};
