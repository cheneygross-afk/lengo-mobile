// Synced from cheneygross-afk/lengo:src/lib/exams/fr/delf-b1-ce.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// DELF B1 practice exam -- Compréhension des écrits.
// 35 minutes, 3 exercises, 18 items.
const OFFERS = [
  "A. Gîte « Les Hirondelles »",
  "B. Camping « La Pinède »",
  "C. Auberge de jeunesse du Vieux-Port",
  "D. Chambres d'hôtes « Le Moulin »",
  "E. Hôtel « Le Grand Large »",
  "F. Refuge du Lac Blanc",
  "G. Village vacances « Les Oliviers »",
];

export const DELF_B1_CE: ExamPaper = {
  id: "ce",
  kind: "reading",
  title: "Compréhension des écrits",
  minutes: 35,
  group: 1,
  tasks: [
    {
      title: "Exercice 1",
      instructions:
        "Vous lisez les messages de cinq personnes qui cherchent un hébergement pour les vacances et sept annonces. Associez chaque personne (1-5) à l'hébergement qui lui convient le mieux (A-G). Deux annonces ne sont pas utilisées.",
      texts: [
        {
          label: "Personnes",
          body:
            "1. CLAIRE : Nous partons à quatre avec nos deux enfants de 6 et 9 ans. On voudrait une piscine, des activités pour les petits et, surtout, ne pas avoir à cuisiner tous les soirs.\n\n" +
            "2. MATHIEU : Je randonne seul pendant une semaine en haute montagne. Il me faut juste un lit et un repas chaud le soir, rien de luxueux.\n\n" +
            "3. NADIA : Je viens à Marseille pour un concours et j'ai un tout petit budget. L'idéal serait d'être près du centre et de pouvoir rencontrer d'autres jeunes.\n\n" +
            "4. ROBERT ET MONIQUE : Pour nos quarante ans de mariage, nous cherchons un endroit calme à la campagne, avec un accueil chaleureux et de bons petits déjeuners maison. Pas d'enfants, de préférence !\n\n" +
            "5. LES DUBOIS : Nous partons à trois familles, soit onze personnes, et nous voulons une grande maison pour nous seuls, où l'on puisse cuisiner ensemble. Nous venons avec notre chien.",
        },
        {
          label: "A",
          title: "Gîte « Les Hirondelles »",
          body: "Ancienne ferme rénovée en Dordogne, entièrement louée à un seul groupe : six chambres, 12 couchages, grande cuisine équipée, jardin clos. Animaux acceptés. Location à la semaine.",
        },
        {
          label: "B",
          title: "Camping « La Pinède »",
          body: "Emplacements pour tentes et caravanes sous les pins, à 300 m de la plage. Sanitaires rénovés, épicerie. Ouvert de mai à septembre. Animaux non admis en juillet-août.",
        },
        {
          label: "C",
          title: "Auberge de jeunesse du Vieux-Port",
          body: "Lits en dortoir à partir de 24 € la nuit, petit déjeuner compris. À cinq minutes à pied du Vieux-Port. Cuisine partagée, soirées d'accueil le jeudi pour faire connaissance.",
        },
        {
          label: "D",
          title: "Chambres d'hôtes « Le Moulin »",
          body: "Trois chambres dans un moulin du XVIIIe siècle au bord de la rivière, loin de toute route. Confitures et pain maison au petit déjeuner. Maison réservée aux adultes.",
        },
        {
          label: "E",
          title: "Hôtel « Le Grand Large »",
          body: "Hôtel 4 étoiles face à la mer, centre de bien-être, restaurant gastronomique. Idéal pour les voyages d'affaires : salles de réunion et navette pour l'aéroport.",
        },
        {
          label: "F",
          title: "Refuge du Lac Blanc",
          body: "À 2 350 m d'altitude, accessible uniquement à pied (3 h de marche). 40 places en dortoir, demi-pension obligatoire : dîner et petit déjeuner. Réservation conseillée.",
        },
        {
          label: "G",
          title: "Village vacances « Les Oliviers »",
          body: "Appartements tout équipés et formule demi-pension au restaurant. Piscine chauffée, club enfants de 4 à 12 ans, animations en soirée.",
        },
      ],
      layout: "select",
      items: [
        { n: 1, question: "Claire", options: OFFERS, answer: 6, explanation: "Piscine, club enfants de 4 à 12 ans et demi-pension au restaurant : pas besoin de cuisiner." },
        { n: 2, question: "Mathieu", options: OFFERS, answer: 5, explanation: "Refuge de haute montagne, dortoir simple et dîner compris (demi-pension)." },
        { n: 3, question: "Nadia", options: OFFERS, answer: 2, explanation: "Prix bas, près du Vieux-Port et soirées pour faire connaissance." },
        { n: 4, question: "Robert et Monique", options: OFFERS, answer: 3, explanation: "Moulin isolé, petit déjeuner maison, maison réservée aux adultes." },
        { n: 5, question: "Les Dubois", options: OFFERS, answer: 0, explanation: "Maison louée à un seul groupe, 12 couchages, grande cuisine, animaux acceptés." },
      ],
    },
    {
      title: "Exercice 2",
      instructions:
        "Lisez l'article puis répondez aux questions en choisissant la bonne réponse (A, B ou C).",
      texts: [
        {
          title: "Quatre jours par semaine : une mairie tente l'expérience",
          body:
            "Depuis le mois de janvier, les quarante agents de la mairie de Saint-Aubin-sur-Loire ne travaillent plus que quatre jours par semaine. Attention : ils ne travaillent pas moins. Les 35 heures hebdomadaires sont simplement réparties sur quatre journées plus longues, de 8 heures à 17 h 45. Chacun choisit son jour de repos, à condition que les services restent ouverts du lundi au vendredi.\n\n" +
            "L'idée vient du maire, Jean-Pierre Collet, qui avait du mal à recruter. « Nous sommes une petite commune, nous ne pouvons pas proposer les mêmes salaires qu'une grande ville. Il fallait trouver autre chose pour attirer les candidats. » Le pari semble réussi : pour le dernier poste de secrétaire, la mairie a reçu vingt-trois candidatures, contre trois l'année précédente.\n\n" +
            "Du côté des employés, les avis sont plutôt positifs. Sandrine, agente d'accueil, a choisi le mercredi : « Je passe la journée avec mes enfants et j'économise une journée de garde. » Pour Ahmed, jardinier municipal, c'est le temps de trajet qui compte : il habite à quarante kilomètres et fait désormais une journée de route en moins chaque semaine.\n\n" +
            "Tout n'est pas parfait pour autant. Certains reconnaissent que les journées sont fatigantes, surtout en fin de semaine. « Le jeudi après 16 heures, je suis moins efficace », admet un employé du service de l'urbanisme. Les habitants, eux, ont parfois du mal à joindre la bonne personne : comme chacun a un jour de repos différent, il faut parfois revenir le lendemain pour un dossier.\n\n" +
            "La mairie a prévu de faire le bilan en décembre, avec un questionnaire anonyme pour les agents et une enquête auprès des habitants. Si les résultats sont bons, l'organisation sera maintenue. D'autres communes de la région ont déjà demandé à venir observer l'expérience.",
        },
      ],
      layout: "choice",
      items: [
        {
          n: 6,
          question: "Avec la nouvelle organisation, les agents de la mairie…",
          options: [
            "travaillent moins d'heures qu'avant.",
            "travaillent le même nombre d'heures en quatre jours.",
            "ont tous leur jour de repos le vendredi.",
          ],
          answer: 1,
          explanation: "« Ils ne travaillent pas moins » : les 35 heures sont réparties sur quatre journées plus longues.",
        },
        {
          n: 7,
          question: "Pourquoi le maire a-t-il proposé ce changement ?",
          options: [
            "Pour faire des économies d'énergie.",
            "Parce que les employés étaient trop fatigués.",
            "Pour rendre les postes de la mairie plus attirants.",
          ],
          answer: 2,
          explanation: "La mairie avait du mal à recruter et ne pouvait pas offrir de meilleurs salaires.",
        },
        {
          n: 8,
          question: "Quel résultat montre que l'idée du maire a fonctionné ?",
          options: [
            "La mairie a reçu beaucoup plus de candidatures.",
            "Les salaires ont augmenté.",
            "Plus aucun agent n'a démissionné.",
          ],
          answer: 0,
          explanation: "Vingt-trois candidatures pour le dernier poste, contre trois l'année précédente.",
        },
        {
          n: 9,
          question: "Pour Sandrine, l'avantage principal est…",
          options: [
            "d'avoir moins de trajets.",
            "de passer du temps avec ses enfants et de dépenser moins.",
            "de pouvoir partir plus souvent en week-end.",
          ],
          answer: 1,
          explanation: "Elle passe le mercredi avec ses enfants et économise une journée de garde.",
        },
        {
          n: 10,
          question: "Pourquoi Ahmed est-il satisfait ?",
          options: [
            "Il a pu déménager plus près de la mairie.",
            "Il travaille maintenant en plein air.",
            "Il passe moins de temps sur la route.",
          ],
          answer: 2,
          explanation: "Il habite à quarante kilomètres et fait une journée de trajet en moins par semaine.",
        },
        {
          n: 11,
          question: "Quel inconvénient les employés mentionnent-ils ?",
          options: [
            "La fatigue liée aux longues journées.",
            "La baisse de leur salaire.",
            "Les conflits pour choisir le jour de repos.",
          ],
          answer: 0,
          explanation: "« Les journées sont fatigantes, surtout en fin de semaine. »",
        },
        {
          n: 12,
          question: "Quel problème rencontrent certains habitants ?",
          options: [
            "La mairie est fermée le mercredi.",
            "La personne qui s'occupe de leur dossier n'est pas toujours présente.",
            "Les horaires d'ouverture ont été réduits.",
          ],
          answer: 1,
          explanation: "Chaque agent a un jour de repos différent : il faut parfois revenir le lendemain.",
        },
        {
          n: 13,
          question: "Que va-t-il se passer en décembre ?",
          options: [
            "L'expérience va s'arrêter.",
            "D'autres communes vont adopter le même système.",
            "Les agents et les habitants vont donner leur avis.",
          ],
          answer: 2,
          explanation: "Le bilan se fera avec un questionnaire pour les agents et une enquête auprès des habitants.",
        },
      ],
    },
    {
      title: "Exercice 3",
      instructions:
        "Vous êtes inscrit(e) à la médiathèque de votre ville. Lisez ce règlement puis répondez aux questions en choisissant la bonne réponse (A, B ou C).",
      texts: [
        {
          title: "Médiathèque Jules-Verne : ce qui change au 1er septembre",
          body:
            "Chers usagers,\n\n" +
            "À partir du 1er septembre, l'inscription à la médiathèque devient gratuite pour tous les habitants de la commune, quel que soit leur âge. Les personnes qui habitent hors de la commune paieront 15 € par an.\n\n" +
            "Chaque carte permet d'emprunter jusqu'à 12 documents pour une durée de quatre semaines : livres, revues, DVD, jeux de société. Les nouveautés, signalées par une pastille rouge, ne peuvent être empruntées que deux semaines.\n\n" +
            "Les prolongations se font désormais uniquement en ligne, depuis votre compte, une seule fois par document et à condition qu'il ne soit pas réservé par un autre usager.\n\n" +
            "En cas de retard, il n'y aura plus d'amende. En revanche, votre carte sera bloquée jusqu'au retour de tous les documents. Un document perdu ou abîmé devra être remplacé ou remboursé.\n\n" +
            "Enfin, la boîte de retour située à l'entrée du parking est désormais accessible 24 heures sur 24, sauf pour les jeux de société, qui doivent être rendus à l'accueil afin que nous puissions vérifier qu'il ne manque aucune pièce.\n\n" +
            "L'équipe de la médiathèque",
        },
      ],
      layout: "choice",
      items: [
        {
          n: 14,
          question: "Qui doit payer l'inscription à partir de septembre ?",
          options: [
            "Les adultes de la commune.",
            "Les personnes qui ne vivent pas dans la commune.",
            "Personne : elle est gratuite pour tout le monde.",
          ],
          answer: 1,
          explanation: "Gratuite pour les habitants ; 15 € par an pour les personnes qui habitent hors de la commune.",
        },
        {
          n: 15,
          question: "Vous empruntez un roman marqué d'une pastille rouge. Vous pouvez le garder…",
          options: ["une semaine.", "deux semaines.", "quatre semaines."],
          answer: 1,
          explanation: "Les nouveautés (pastille rouge) ne s'empruntent que deux semaines.",
        },
        {
          n: 16,
          question: "Comment peut-on prolonger un prêt ?",
          options: [
            "Sur internet, si personne n'a réservé le document.",
            "Par téléphone ou à l'accueil.",
            "Autant de fois qu'on le souhaite.",
          ],
          answer: 0,
          explanation: "Uniquement en ligne, une seule fois, si le document n'est pas réservé.",
        },
        {
          n: 17,
          question: "Si vous rendez vos documents en retard…",
          options: [
            "vous devrez payer une amende.",
            "votre inscription sera annulée.",
            "vous ne pourrez plus emprunter jusqu'à leur retour.",
          ],
          answer: 2,
          explanation: "Plus d'amende, mais la carte est bloquée jusqu'au retour de tous les documents.",
        },
        {
          n: 18,
          question: "Pourquoi faut-il rendre les jeux de société à l'accueil ?",
          options: [
            "Pour que le personnel vérifie qu'ils sont complets.",
            "Parce qu'ils sont trop grands pour la boîte de retour.",
            "Parce que la boîte de retour est fermée la nuit.",
          ],
          answer: 0,
          explanation: "« Afin que nous puissions vérifier qu'il ne manque aucune pièce. »",
        },
      ],
    },
  ],
};
