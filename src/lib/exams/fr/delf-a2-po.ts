// Synced from cheneygross-afk/lengo:src/lib/exams/fr/delf-a2-po.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// DELF A2 practice exam -- Production orale.
// 6 to 8 minutes with the examiner, after 10 minutes to prepare parts 2
// and 3. Three parts, marked out of 25, as in the real exam. (In the
// real exam the candidate draws two subjects for parts 2 and 3 and
// keeps one; here one subject is set for each.)
export const DELF_A2_PO: ExamPaper = {
  id: "po",
  kind: "speaking",
  title: "Production orale",
  minutes: 8,
  prepMinutes: 10,
  group: 2,
  tasks: [
    {
      title: "Partie 1 : Entretien dirigé",
      instructions:
        "Vous saluez l'examinateur et vous parlez de vous, de votre famille, de vos amis, de vos études ou de votre travail, de vos goûts. L'examinateur vous pose ensuite des questions. Durée : environ 1 minute 30. Pas de préparation.",
      instructionsEn:
        "Greet the examiner and talk about yourself, your family, friends, studies or work and likes. The examiner then asks you questions. About 1 minute 30, no preparation.",
      speak: {
        prompt: "Présentez-vous.",
        points: [
          "Saluez l'examinateur.",
          "Votre nom, votre âge, votre ville.",
          "Votre famille et vos amis.",
          "Vos études ou votre travail.",
          "Vos goûts et vos loisirs.",
        ],
        examinerQuestions: [
          "Depuis combien de temps apprenez-vous le français ?",
          "Pourquoi est-ce que vous apprenez le français ?",
          "Qu'est-ce que vous avez fait le week-end dernier ?",
          "Comment est une journée normale pour vous ?",
          "Qu'est-ce que vous allez faire pendant les prochaines vacances ?",
        ],
        prepMinutes: 0,
        speakMinutes: 1.5,
        modelAnswer:
          "Bonjour madame. Je m'appelle Daniel, j'ai trente et un ans et j'habite à Manchester, en Angleterre. Je suis marié et j'ai une petite fille de trois ans, Lily. Je suis professeur de musique dans un collège. Le week-end, j'aime faire du vélo à la campagne et cuisiner pour mes amis.\n\n— Depuis combien de temps apprenez-vous le français ?\n— Depuis deux ans. Je prends des cours le mardi soir.\n— Pourquoi est-ce que vous apprenez le français ?\n— Parce que la famille de ma femme habite à Nantes et je veux parler avec eux.\n— Qu'est-ce que vous avez fait le week-end dernier ?\n— Samedi, je suis allé au parc avec ma fille, et dimanche, nous avons déjeuné chez mes parents.",
      },
    },
    {
      title: "Partie 2 : Monologue suivi",
      instructions:
        "Vous parlez du sujet choisi pendant environ 2 minutes. L'examinateur peut ensuite vous poser quelques questions.",
      instructionsEn:
        "Talk about the subject for about 2 minutes. The examiner may then ask you a few questions.",
      speak: {
        prompt: "Parlez d'une fête importante dans votre pays ou dans votre famille. Comment est-ce qu'on la fête ? Racontez la dernière fois que vous l'avez fêtée.",
        points: [
          "Le nom de la fête et sa date.",
          "Ce qu'on fait ce jour-là : repas, cadeaux, traditions.",
          "Avec qui vous la fêtez.",
          "La dernière fois : où, avec qui, ce qui s'est passé.",
          "Ce que vous aimez dans cette fête.",
        ],
        examinerQuestions: [
          "Est-ce que vous préférez cette fête quand vous étiez enfant ou maintenant ?",
          "Est-ce qu'il y a une fête française que vous connaissez ?",
          "Qu'est-ce que vous allez faire pour la prochaine fête ?",
        ],
        prepMinutes: 5,
        speakMinutes: 2,
        modelAnswer:
          "Dans mon pays, en Angleterre, la fête la plus importante pour ma famille, c'est Noël, le vingt-cinq décembre. Ce jour-là, on ouvre les cadeaux le matin, puis on prépare un grand repas : de la dinde, des légumes et un gâteau spécial, le Christmas pudding. L'après-midi, on regarde le discours du roi à la télé et on joue à des jeux de société.\n\nD'habitude, je fête Noël chez mes parents, avec mon frère et ma sœur. L'année dernière, c'était différent : nous sommes allés chez la famille de ma femme, en France. On a mangé le soir du vingt-quatre, très tard, avec des huîtres et une bûche de Noël. C'était très sympa, mais j'étais fatigué parce qu'on a fini à deux heures du matin !\n\nCe que j'aime dans cette fête, c'est que toute la famille est ensemble. Quand j'étais petit, je préférais les cadeaux, mais maintenant je préfère le repas.",
      },
    },
    {
      title: "Partie 3 : Exercice en interaction",
      instructions:
        "Vous jouez la situation avec l'examinateur. Vous êtes en France. Vous voulez louer un vélo pour trois jours. Vous allez dans un magasin de location : vous demandez des informations (prix, horaires, équipement) et vous choisissez un vélo. L'examinateur joue le rôle du vendeur. Durée : 3 à 4 minutes.",
      instructionsEn:
        "Role-play with the examiner: you're in France and want to rent a bike for three days. In the rental shop, ask for information (prices, opening hours, equipment) and choose a bike. The examiner plays the shop assistant. 3-4 minutes.",
      speak: {
        prompt: "Dans un magasin de location de vélos : vous louez un vélo pour trois jours.",
        material: [
          {
            label: "Tarifs affichés",
            body:
              "Vélo de ville : 12 € / jour\nVélo électrique : 25 € / jour\nVTT : 18 € / jour\nCasque : gratuit — Antivol : 2 € / jour\nCaution : 200 € (carte bancaire)\nOuvert tous les jours de 9 h à 19 h",
          },
        ],
        points: [
          "Saluez et dites ce que vous voulez.",
          "Demandez les différences entre les vélos et les prix.",
          "Posez des questions sur les horaires et l'équipement.",
          "Choisissez un vélo et dites pourquoi.",
          "Demandez comment payer, puis remerciez.",
        ],
        examinerQuestions: [
          "Bonjour, je peux vous aider ?",
          "Vous voulez faire quel genre de balade ?",
          "Vous avez besoin d'un antivol ?",
          "Il faut laisser une caution de deux cents euros. Vous avez une carte bancaire ?",
        ],
        prepMinutes: 5,
        speakMinutes: 4,
        modelAnswer:
          "— Bonjour, je peux vous aider ?\n— Bonjour monsieur. Je voudrais louer un vélo pour trois jours, de vendredi à dimanche.\n— Bien sûr. Vous voulez faire quel genre de balade ?\n— Je voudrais aller jusqu'aux plages, à environ quarante kilomètres. Quelle est la différence entre le vélo de ville et le vélo électrique ?\n— Le vélo électrique vous aide dans les montées. C'est plus confortable pour les longues distances, mais c'est plus cher : vingt-cinq euros par jour.\n— Et le vélo de ville, c'est douze euros, c'est ça ?\n— Oui, c'est ça.\n— Il y a des collines sur la route ?\n— Oui, quelques-unes.\n— Alors je préfère le vélo électrique, parce que je ne suis pas très sportif. Est-ce que le casque est compris ?\n— Oui, le casque est gratuit. Vous avez besoin d'un antivol ?\n— Oui, je vais prendre un antivol aussi. Ça fait combien en tout ?\n— Soixante-quinze euros pour le vélo et six euros pour l'antivol : quatre-vingt-un euros. Il faut aussi laisser une caution de deux cents euros. Vous avez une carte bancaire ?\n— Oui, voilà. Et dimanche, je dois rapporter le vélo à quelle heure ?\n— Avant dix-neuf heures, on est ouverts tous les jours.\n— Parfait. Merci beaucoup, au revoir !",
      },
    },
  ],
};
