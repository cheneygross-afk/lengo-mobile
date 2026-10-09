// Synced from cheneygross-afk/lengo:src/lib/exams/fr/delf-b2-pe.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// DELF B2 practice exam -- Production écrite.
// 60 minutes, one task: an argued text (formal letter, opinion article,
// essay) of at least 250 words, as in the real exam.
export const DELF_B2_PE: ExamPaper = {
  id: "pe",
  kind: "writing",
  title: "Production écrite",
  minutes: 60,
  group: 2,
  tasks: [
    {
      title: "Exercice 1",
      instructions:
        "Prise de position personnelle argumentée. Lisez la situation suivante et rédigez une lettre formelle. Vous écrirez un texte construit et cohérent de 250 mots minimum.",
      write: [
        {
          prompt:
            "Vous habitez dans la commune de Valmont. Vous avez lu l'article ci-dessous dans le bulletin municipal. Vous écrivez au maire pour lui donner votre avis argumenté sur ce projet. Vous présentez au moins trois arguments, illustrés par des exemples, et vous faites une ou plusieurs propositions.",
          input: {
            text: {
              title: "Bulletin municipal de Valmont",
              body:
                "La bibliothèque municipale va fermer ses portes en juin. La fréquentation a baissé de 30 % en dix ans, et la plupart des livres sont aujourd'hui disponibles en version numérique. Le conseil municipal propose de remplacer la bibliothèque par une plateforme de prêt de livres électroniques, accessible gratuitement à tous les habitants. Le bâtiment, situé en plein centre-ville, sera vendu ; l'argent servira à rénover le gymnase. Une réunion publique aura lieu le 12 mars.",
            },
          },
          minWords: 250,
          maxWords: 320,
          rubric: [
            "Respecte le genre de la lettre formelle : coordonnées, objet, formule d'appel (Monsieur le Maire), formule de politesse finale adaptée.",
            "Prend clairement position sur le projet dès l'introduction.",
            "Développe au moins trois arguments distincts, illustrés par des exemples concrets.",
            "Fait une ou plusieurs propositions réalistes (subjonctif, conditionnel : il serait souhaitable que…, ne pourrait-on pas…).",
            "Articule le texte avec des connecteurs logiques variés (certes… mais, en outre, par ailleurs, en effet, c'est pourquoi, en définitive).",
            "Lexique précis (fréquentation, lien social, fracture numérique, patrimoine) et maîtrise des structures complexes au niveau B2.",
          ],
          modelAnswer:
            "Objet : projet de fermeture de la bibliothèque municipale\n\nMonsieur le Maire,\n\nJ'ai pris connaissance, dans le dernier bulletin municipal, du projet de fermeture de notre bibliothèque. Habitante de Valmont depuis douze ans, je tiens à vous faire part de mon profond désaccord.\n\nCertes, la fréquentation a diminué, mais faut-il en conclure que la bibliothèque est devenue inutile ? Je ne le crois pas. En effet, elle ne se limite pas au prêt de livres : c'est l'un des rares lieux du centre-ville où l'on peut entrer sans rien acheter. Chaque mercredi, j'y croise des retraités qui lisent la presse, des lycéens qui révisent faute de calme chez eux, des parents qui assistent à l'heure du conte.\n\nPar ailleurs, une plateforme numérique exclurait précisément ceux qui ont le plus besoin de ce service. Tout le monde ne possède pas une liseuse ou une connexion fiable, et beaucoup de personnes âgées ne sont pas à l'aise avec ces outils. Supprimer la bibliothèque, ce serait aggraver la fracture numérique.\n\nEnfin, vendre un bâtiment situé en plein centre reviendrait à perdre définitivement un espace public. Une fois cédé, il ne sera jamais récupéré.\n\nPlutôt que de fermer, ne pourrait-on pas transformer la bibliothèque en médiathèque plus vivante ? Il serait souhaitable qu'elle ouvre le samedi après-midi, qu'elle propose des ateliers numériques pour les seniors et qu'elle accueille les associations locales. Le prêt de livres électroniques pourrait d'ailleurs compléter l'offre au lieu de la remplacer.\n\nJe serai présente à la réunion du 12 mars et souhaite vivement que l'avis des habitants soit pris en compte.\n\nJe vous prie d'agréer, Monsieur le Maire, l'expression de mes salutations respectueuses.\n\nCamille Rousseau",
        },
      ],
    },
  ],
};
