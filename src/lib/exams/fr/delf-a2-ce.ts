// Synced from cheneygross-afk/lengo:src/lib/exams/fr/delf-a2-ce.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// DELF A2 practice exam -- Compréhension des écrits.
// 30 minutes, 4 exercises, 21 items, marked out of 25, as in the real
// exam's mix of everyday documents: ads, a message, instructions and a
// short article.
const ATELIERS = [
  "A. Atelier théâtre",
  "B. Cours de yoga",
  "C. Club photo",
  "D. Atelier jardinage",
  "E. Cours de natation",
  "F. Atelier couture",
  "G. Chorale",
  "H. Club d'échecs",
];

export const DELF_A2_CE: ExamPaper = {
  id: "ce",
  kind: "reading",
  title: "Compréhension des écrits",
  minutes: 30,
  group: 1,
  tasks: [
    {
      title: "Exercice 1",
      instructions:
        "Vous lisez le programme de la Maison des associations de votre ville. Associez chaque personne (1-5) à l'activité qui lui convient (A-H). Attention : il y a trois activités en trop.",
      instructionsEn:
        "Read the programme of your town's community centre. Match each person (1-5) with the activity that suits them (A-H). Three activities are not used.",
      texts: [
        {
          label: "Personnes",
          body:
            "1. Élodie travaille toute la journée devant un ordinateur. Elle a souvent mal au dos et elle voudrait se détendre le soir.\n\n" +
            "2. Bernard est à la retraite. Il habite en appartement, mais il rêve de cultiver ses propres légumes.\n\n" +
            "3. Inès a 16 ans. Elle est un peu timide et voudrait apprendre à parler devant un public.\n\n" +
            "4. Karim a acheté un bel appareil photo, mais il ne sait pas bien l'utiliser.\n\n" +
            "5. Martine aime beaucoup la mode. Elle voudrait fabriquer elle-même ses vêtements.",
        },
        { label: "A", title: "Atelier théâtre", body: "Pour les 14-18 ans. Exercices de voix, improvisation et spectacle en fin d'année. Le mercredi de 14 h à 16 h." },
        { label: "B", title: "Cours de yoga", body: "Respiration, étirements, relaxation : idéal contre le stress et les douleurs de dos. Le mardi et le jeudi, de 19 h à 20 h." },
        { label: "C", title: "Club photo", body: "Vous avez un appareil mais vous ne connaissez pas toutes ses fonctions ? Nos membres vous expliquent tout, puis sortie photo en ville le samedi." },
        { label: "D", title: "Atelier jardinage", body: "Le jardin partagé du quartier cherche des participants. Chacun a sa petite parcelle pour planter tomates, salades et herbes aromatiques." },
        { label: "E", title: "Cours de natation", body: "Cours pour adultes débutants à la piscine Saint-Pierre. Le lundi soir." },
        { label: "F", title: "Atelier couture", body: "Apprenez à utiliser une machine à coudre et créez votre première jupe ou votre premier sac. Machines fournies." },
        { label: "G", title: "Chorale", body: "Vous aimez chanter ? Notre chorale prépare un concert pour Noël. Pas besoin de savoir lire la musique." },
        { label: "H", title: "Club d'échecs", body: "Tous niveaux, tous âges. Tournoi amical chaque premier dimanche du mois." },
      ],
      layout: "select",
      items: [
        { n: 1, question: "Élodie", options: ATELIERS, answer: 1, explanation: "She has back pain and wants to relax in the evening: yoga « contre le stress et les douleurs de dos », 19 h-20 h (B)." },
        { n: 2, question: "Bernard", options: ATELIERS, answer: 3, explanation: "He has no garden but wants to grow vegetables: a plot in the shared garden (D)." },
        { n: 3, question: "Inès", options: ATELIERS, answer: 0, explanation: "She's 16 and wants to speak in front of an audience: the theatre workshop for 14-18s (A)." },
        { n: 4, question: "Karim", options: ATELIERS, answer: 2, explanation: "He doesn't know how to use his camera: « Nos membres vous expliquent tout » (C)." },
        { n: 5, question: "Martine", options: ATELIERS, answer: 5, explanation: "She wants to make her own clothes: sewing workshop, « créez votre première jupe » (F). E, G and H are not used." },
      ],
    },
    {
      title: "Exercice 2",
      instructions:
        "Vous recevez ce courriel. Lisez le document puis répondez aux questions (6-10). Choisissez la bonne réponse.",
      instructionsEn:
        "You receive this email. Read it, then answer questions 6-10. Choose the right answer.",
      texts: [
        {
          title: "De : Nathalie Roche — Objet : Votre séjour chez nous",
          body:
            "Bonjour,\n\nNous sommes très contents de vous accueillir dans notre famille pendant votre stage de français à Tours, du 3 au 24 juillet.\n\nNous habitons une maison à dix minutes à pied du centre-ville. Votre chambre est au premier étage : elle est petite mais calme, avec un bureau et une vue sur le jardin. Vous allez partager la salle de bains avec notre fils Julien, qui a 19 ans.\n\nLe petit-déjeuner et le dîner sont compris. Le dîner est à 19 h 30. Si vous rentrez plus tard, prévenez-nous par SMS, s'il vous plaît. Le midi, vous pouvez manger à la cantine de l'école de langues, c'est moins cher qu'au restaurant.\n\nNous avons un chat, Minou. Vous m'avez écrit que vous êtes allergique aux chiens : pas de problème, nous n'en avons pas !\n\nMon mari viendra vous chercher à la gare le 3 juillet. Envoyez-nous l'heure d'arrivée de votre train.\n\nÀ bientôt,\nNathalie Roche",
        },
      ],
      items: [
        { n: 6, question: "Combien de temps dure votre séjour ?", options: ["Une semaine.", "Trois semaines.", "Un mois."], answer: 1, explanation: "« Du 3 au 24 juillet »: three weeks." },
        { n: 7, question: "Votre chambre…", options: ["est grande et donne sur la rue.", "est au rez-de-chaussée.", "est calme et donne sur le jardin."], answer: 2, explanation: "« Elle est petite mais calme… une vue sur le jardin. » It's on the first floor." },
        { n: 8, question: "Si vous rentrez après 19 h 30, vous devez…", options: ["envoyer un message.", "manger au restaurant.", "prendre la clé."], answer: 0, explanation: "« Si vous rentrez plus tard, prévenez-nous par SMS. »" },
        { n: 9, question: "Le midi, Nathalie vous conseille de manger…", options: ["à la maison.", "à la cantine de l'école.", "au restaurant."], answer: 1, explanation: "« Vous pouvez manger à la cantine de l'école de langues, c'est moins cher qu'au restaurant. »" },
        { n: 10, question: "Qu'est-ce que vous devez faire avant le 3 juillet ?", options: ["Réserver un taxi.", "Acheter un cadeau pour Julien.", "Donner l'heure d'arrivée du train."], answer: 2, explanation: "« Envoyez-nous l'heure d'arrivée de votre train. » Her husband will meet you at the station." },
      ],
    },
    {
      title: "Exercice 3",
      instructions:
        "Vous logez dans une auberge de jeunesse. Vous lisez ce règlement dans votre chambre. Lisez le document puis répondez aux questions (11-15). Choisissez la bonne réponse.",
      instructionsEn:
        "You're staying in a youth hostel and read these rules in your room. Read them, then answer questions 11-15. Choose the right answer.",
      texts: [
        {
          title: "Auberge de jeunesse du Vieux-Port : informations pratiques",
          body:
            "Arrivée et départ : les chambres sont disponibles à partir de 15 h. Le jour du départ, libérez votre chambre avant 10 h. Vous pouvez laisser vos bagages gratuitement à l'accueil jusqu'à 18 h.\n\n" +
            "Petit-déjeuner : servi de 7 h à 9 h 30 dans la salle du rez-de-chaussée. Il n'est pas compris dans le prix de la chambre : 6 € par personne.\n\n" +
            "Cuisine : une cuisine est à votre disposition de 8 h à 22 h. Lavez votre vaisselle après utilisation et notez votre nom sur vos aliments dans le réfrigérateur.\n\n" +
            "Calme : silence dans les couloirs et les chambres après 23 h.\n\n" +
            "Draps : ils sont fournis. Les serviettes de toilette sont en location à l'accueil (2 €).\n\n" +
            "Wi-Fi : gratuit. Le code est affiché à l'accueil.",
        },
      ],
      items: [
        { n: 11, question: "Le jour du départ, vous devez quitter votre chambre…", options: ["avant 10 h.", "avant 15 h.", "avant 18 h."], answer: 0, explanation: "« Le jour du départ, libérez votre chambre avant 10 h. » 18 h is the deadline for collecting left luggage." },
        { n: 12, question: "Le petit-déjeuner…", options: ["est compris dans le prix.", "coûte 6 €.", "est servi jusqu'à 10 h."], answer: 1, explanation: "« Il n'est pas compris dans le prix de la chambre : 6 € par personne. » It ends at 9 h 30." },
        { n: 13, question: "Dans la cuisine, il faut…", options: ["demander la clé à l'accueil.", "payer 2 €.", "écrire son nom sur ses aliments."], answer: 2, explanation: "« Notez votre nom sur vos aliments dans le réfrigérateur. »" },
        { n: 14, question: "Vous avez oublié votre serviette. Qu'est-ce que vous faites ?", options: ["Vous en louez une à l'accueil.", "Vous utilisez les draps.", "Vous en demandez une gratuite."], answer: 0, explanation: "« Les serviettes de toilette sont en location à l'accueil (2 €). »" },
        { n: 15, question: "Pour avoir le code du Wi-Fi, vous…", options: ["payez à l'accueil.", "regardez le panneau à l'accueil.", "demandez à votre voisin de chambre."], answer: 1, explanation: "« Le code est affiché à l'accueil » — it's displayed there, and the Wi-Fi is free." },
      ],
    },
    {
      title: "Exercice 4",
      instructions:
        "Vous lisez cet article dans un magazine. Lisez le document puis répondez aux questions (16-21). Choisissez la bonne réponse.",
      instructionsEn:
        "Read this magazine article, then answer questions 16-21. Choose the right answer.",
      texts: [
        {
          title: "Une épicerie pas comme les autres",
          body:
            "Dans le petit village de Saint-Aubin, en Normandie, le dernier commerce a fermé il y a cinq ans. Pour faire leurs courses, les 400 habitants devaient prendre la voiture et aller au supermarché, à quinze kilomètres. Pour les personnes âgées qui ne conduisent pas, c'était un vrai problème.\n\n" +
            "Alors, l'année dernière, un groupe d'habitants a eu une idée : ouvrir une épicerie participative. Le principe est simple : les clients sont aussi les vendeurs. Chaque membre paie 10 euros par an et travaille trois heures par mois dans le magasin. Il n'y a pas de patron et pas de salarié.\n\n" +
            "On y trouve du pain, des fruits, des légumes, du fromage et de la viande. La plupart des produits viennent des fermes de la région, à moins de trente kilomètres. « Les prix sont un peu plus élevés qu'au supermarché, mais la qualité est bien meilleure », explique Jeanne, 72 ans, membre depuis le début.\n\n" +
            "Aujourd'hui, l'épicerie compte 120 membres. Elle est ouverte quatre jours par semaine, du mercredi au samedi. Le samedi matin, on y sert aussi le café : « C'est devenu le lieu où tout le monde se retrouve », sourit Jeanne. Le mois prochain, les bénévoles vont organiser leur premier marché de Noël.",
        },
      ],
      items: [
        { n: 16, question: "Avant l'ouverture de l'épicerie, les habitants…", options: ["faisaient leurs courses dans le village.", "allaient au supermarché en voiture.", "achetaient tout sur Internet."], answer: 1, explanation: "« Les habitants devaient prendre la voiture et aller au supermarché, à quinze kilomètres. »" },
        { n: 17, question: "Dans cette épicerie, qui vend les produits ?", options: ["Les membres.", "Un patron et deux salariés.", "Les agriculteurs de la région."], answer: 0, explanation: "« Les clients sont aussi les vendeurs… Il n'y a pas de patron et pas de salarié. »" },
        { n: 18, question: "Pour être membre, il faut…", options: ["habiter à Saint-Aubin depuis cinq ans.", "travailler trois heures par semaine.", "payer 10 euros par an."], answer: 2, explanation: "« Chaque membre paie 10 euros par an et travaille trois heures par mois » — per month, not per week." },
        { n: 19, question: "D'où viennent la plupart des produits ?", options: ["De fermes proches.", "Du supermarché.", "De toute la France."], answer: 0, explanation: "« La plupart des produits viennent des fermes de la région, à moins de trente kilomètres. »" },
        { n: 20, question: "Selon Jeanne, les produits de l'épicerie sont…", options: ["moins chers qu'au supermarché.", "de meilleure qualité qu'au supermarché.", "les mêmes qu'au supermarché."], answer: 1, explanation: "« Les prix sont un peu plus élevés… mais la qualité est bien meilleure. »" },
        { n: 21, question: "Le samedi matin, l'épicerie…", options: ["est fermée.", "organise un marché de Noël.", "sert aussi le café."], answer: 2, explanation: "« Le samedi matin, on y sert aussi le café. » The Christmas market is a one-off next month." },
      ],
    },
  ],
};
