// Synced from cheneygross-afk/lengo:src/lib/exams/fr/delf-a1-po.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// DELF A1 practice exam -- Production orale.
// 5 to 7 minutes with the examiner, after 10 minutes to prepare parts 2
// and 3. Three parts, marked out of 25, as in the real exam. (The real
// part 2 uses cards with one word each and part 3 uses pictures of
// objects with prices; here they're given as text.)
export const DELF_A1_PO: ExamPaper = {
  id: "po",
  kind: "speaking",
  title: "Production orale",
  minutes: 7,
  prepMinutes: 10,
  group: 2,
  tasks: [
    {
      title: "Partie 1 : Entretien dirigé",
      instructions:
        "Vous répondez aux questions de l'examinateur sur vous, votre famille, vos goûts, vos activités. Durée : environ 1 minute. Pas de préparation.",
      instructionsEn:
        "Answer the examiner's questions about yourself, your family, your likes and your activities. About 1 minute, no preparation.",
      speak: {
        prompt: "Parlez de vous.",
        points: [
          "Votre nom et votre âge.",
          "Votre nationalité et la ville où vous habitez.",
          "Votre profession ou vos études.",
          "Votre famille.",
          "Ce que vous aimez faire le week-end.",
        ],
        examinerQuestions: [
          "Comment vous appelez-vous ?",
          "Quel âge avez-vous ?",
          "Vous habitez où ?",
          "Qu'est-ce que vous faites dans la vie ?",
          "Vous avez des frères et sœurs ?",
          "Qu'est-ce que vous aimez faire le week-end ?",
        ],
        prepMinutes: 0,
        speakMinutes: 1,
        modelAnswer:
          "— Comment vous appelez-vous ?\n— Je m'appelle Daniel Brooks.\n— Quel âge avez-vous ?\n— J'ai trente et un ans.\n— Vous habitez où ?\n— J'habite à Manchester, en Angleterre. Je suis anglais.\n— Qu'est-ce que vous faites dans la vie ?\n— Je suis professeur de musique dans une école.\n— Vous avez des frères et sœurs ?\n— Oui, j'ai une sœur. Elle s'appelle Kate et elle habite à Londres.\n— Qu'est-ce que vous aimez faire le week-end ?\n— J'aime faire du vélo et aller au cinéma avec mes amis.",
      },
    },
    {
      title: "Partie 2 : Échange d'informations",
      instructions:
        "Vous tirez des cartes avec un mot. Vous posez des questions à l'examinateur à partir de ces mots. Durée : environ 2 minutes.",
      instructionsEn:
        "You draw cards with one word on each. Ask the examiner questions using these words. About 2 minutes.",
      speak: {
        prompt: "Posez des questions à l'examinateur avec les mots des cartes.",
        material: [
          {
            label: "Cartes",
            body: "Sport ?\nFamille ?\nCuisine ?\nVacances ?\nAnimal ?\nMatin ?",
          },
        ],
        points: [
          "Posez une question pour chaque carte.",
          "Utilisez des questions variées : est-ce que…, qu'est-ce que…, où…, quand…, combien….",
          "Choisissez tu ou vous et gardez le même pronom.",
        ],
        prepMinutes: 5,
        speakMinutes: 2,
        modelAnswer:
          "Sport : Est-ce que vous faites du sport ?\nFamille : Vous avez des enfants ?\nCuisine : Qu'est-ce que vous aimez manger ? Vous faites la cuisine ?\nVacances : Où est-ce que vous allez en vacances cet été ?\nAnimal : Vous avez un chat ou un chien ?\nMatin : À quelle heure est-ce que vous vous levez le matin ?",
      },
    },
    {
      title: "Partie 3 : Dialogue simulé",
      instructions:
        "Vous jouez une scène avec l'examinateur. Vous êtes au marché. Vous achetez des fruits et des légumes pour un pique-nique. Vous demandez les prix et vous payez. Durée : environ 2 minutes.",
      instructionsEn:
        "Role-play with the examiner: you're at a market buying fruit and vegetables for a picnic. Ask the prices and pay. About 2 minutes.",
      speak: {
        prompt: "Au marché : vous achetez des fruits et des légumes. L'examinateur est le vendeur.",
        material: [
          {
            label: "Le stand",
            body: "Tomates : 3 € le kilo\nPommes : 2,50 € le kilo\nFraises : 4 € la barquette\nSalade : 1,20 € la pièce\nMelon : 2 € la pièce\n\nVous avez un billet de 20 €.",
          },
        ],
        points: [
          "Saluez le vendeur.",
          "Demandez deux ou trois produits avec les quantités (un kilo de…, une barquette de…).",
          "Demandez les prix.",
          "Payez et vérifiez la monnaie.",
          "Remerciez et dites au revoir.",
        ],
        examinerQuestions: [
          "Bonjour ! Qu'est-ce que je vous sers ?",
          "Et avec ça ?",
          "C'est tout ?",
          "Ça fait huit euros vingt, s'il vous plaît.",
        ],
        prepMinutes: 5,
        speakMinutes: 2,
        modelAnswer:
          "— Bonjour monsieur !\n— Bonjour ! Qu'est-ce que je vous sers ?\n— Je voudrais un kilo de tomates, s'il vous plaît.\n— Voilà. Et avec ça ?\n— Les fraises, c'est combien ?\n— Quatre euros la barquette.\n— Alors une barquette de fraises et une salade, s'il vous plaît.\n— C'est tout ?\n— Oui, c'est tout. Ça fait combien ?\n— Ça fait huit euros vingt.\n— Voilà vingt euros.\n— Merci. Et voilà votre monnaie : onze euros quatre-vingts.\n— Merci beaucoup. Au revoir, bonne journée !",
      },
    },
  ],
};
