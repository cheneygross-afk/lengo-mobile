// Synced from cheneygross-afk/lengo:src/lib/exams/fr/delf-a1-ce.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// DELF A1 practice exam -- Compréhension des écrits.
// 30 minutes, 4 exercises, 18 items, marked out of 25, as in the real
// exam's mix of short everyday documents.
const ANNONCES = [
  "A. Cours de guitare",
  "B. Club de randonnée",
  "C. Vends vélo",
  "D. Garde d'enfants",
  "E. Cours de cuisine",
  "F. Chambre à louer",
  "G. Piscine municipale",
];

export const DELF_A1_CE: ExamPaper = {
  id: "ce",
  kind: "reading",
  title: "Compréhension des écrits",
  minutes: 30,
  group: 1,
  tasks: [
    {
      title: "Exercice 1",
      instructions:
        "Vous recevez ce courriel d'une amie française. Lisez le document puis répondez aux questions (1-4). Choisissez la bonne réponse.",
      instructionsEn:
        "You receive this email from a French friend. Read it, then answer questions 1-4. Choose the right answer.",
      texts: [
        {
          title: "De : Camille — Objet : Week-end à Annecy",
          body:
            "Salut !\n\nTu es libre le week-end prochain ? Avec Hugo, on va chez mes parents à Annecy. Ils ont une petite maison près du lac. Tu veux venir avec nous ?\n\nOn part samedi matin en voiture, à 8 heures. Le samedi, on fait une promenade en bateau sur le lac et le soir, ma mère prépare une fondue. Le dimanche, on va au marché de la vieille ville. On rentre dimanche soir.\n\nPrends un maillot de bain et des chaussures de marche ! Il fait chaud, mais le soir il fait frais : prends aussi un pull.\n\nRéponds-moi avant jeudi, s'il te plaît.\n\nBises,\nCamille",
        },
      ],
      items: [
        {
          n: 1,
          question: "Camille vous invite…",
          options: ["chez ses parents.", "dans un hôtel.", "chez Hugo."],
          answer: 0,
          explanation: "« On va chez mes parents à Annecy… Tu veux venir avec nous ? »",
        },
        {
          n: 2,
          question: "Comment voyagez-vous ?",
          options: ["En train.", "En bateau.", "En voiture."],
          answer: 2,
          explanation: "« On part samedi matin en voiture. » The boat is for a trip on the lake once there.",
        },
        {
          n: 3,
          question: "Qu'est-ce que vous faites dimanche ?",
          options: ["Une promenade en bateau.", "Le marché.", "Une fondue."],
          answer: 1,
          explanation: "« Le dimanche, on va au marché de la vieille ville. » The boat and the fondue are on Saturday.",
        },
        {
          n: 4,
          question: "Qu'est-ce que vous devez prendre ?",
          options: ["Un parapluie et un manteau.", "Un manteau et des bottes.", "Un maillot de bain et un pull."],
          answer: 2,
          explanation: "« Prends un maillot de bain et des chaussures de marche… prends aussi un pull. »",
        },
      ],
    },
    {
      title: "Exercice 2",
      instructions:
        "Vous habitez dans un immeuble en France. Vous lisez cette affiche dans le hall. Lisez le document puis répondez aux questions (5-8). Choisissez la bonne réponse.",
      instructionsEn:
        "You live in a block of flats in France and read this notice in the entrance hall. Read it, then answer questions 5-8. Choose the right answer.",
      texts: [
        {
          title: "Fête des voisins",
          body:
            "Chers voisins,\n\nLa fête des voisins, c'est le vendredi 29 mai, à partir de 19 heures, dans le jardin de l'immeuble. S'il pleut, la fête est dans la salle commune, au rez-de-chaussée.\n\nChaque famille apporte un plat ou une boisson. Nous avons déjà beaucoup de desserts : apportez plutôt une salade ou une quiche !\n\nPour participer, écrivez votre nom et votre numéro d'appartement sur la liste, à côté des boîtes aux lettres.\n\nMme Dupont, appartement 14",
        },
      ],
      items: [
        {
          n: 5,
          question: "La fête des voisins commence à quelle heure ?",
          options: ["À 14 heures.", "À 19 heures.", "À 21 heures."],
          answer: 1,
          explanation: "« À partir de 19 heures. » 29 is the date and 14 is Mme Dupont's flat.",
        },
        {
          n: 6,
          question: "S'il pleut, la fête est…",
          options: ["dans la salle commune.", "chez Mme Dupont.", "dans le jardin."],
          answer: 0,
          explanation: "« S'il pleut, la fête est dans la salle commune, au rez-de-chaussée. »",
        },
        {
          n: 7,
          question: "Qu'est-ce qu'on demande d'apporter ?",
          options: ["Un dessert.", "Des boissons seulement.", "Une salade ou une quiche."],
          answer: 2,
          explanation: "« Nous avons déjà beaucoup de desserts : apportez plutôt une salade ou une quiche ! »",
        },
        {
          n: 8,
          question: "Pour participer, il faut…",
          options: ["téléphoner à Mme Dupont.", "écrire son nom sur une liste.", "envoyer un courriel."],
          answer: 1,
          explanation: "« Écrivez votre nom et votre numéro d'appartement sur la liste. »",
        },
      ],
    },
    {
      title: "Exercice 3",
      instructions:
        "Vous êtes en vacances à La Rochelle. Vous lisez ce programme à l'office de tourisme. Lisez le document puis répondez aux questions (9-13). Choisissez la bonne réponse.",
      instructionsEn:
        "You're on holiday in La Rochelle and read this programme at the tourist office. Read it, then answer questions 9-13. Choose the right answer.",
      texts: [
        {
          title: "La Rochelle : programme de la semaine",
          body:
            "Lundi : visite guidée de la vieille ville. Départ à 10 h devant l'office de tourisme. 8 €.\n\nMardi : aquarium. Ouvert de 9 h à 20 h. Adultes : 19 €, enfants : 13 €.\n\nMercredi : balade à vélo jusqu'à l'île de Ré. Départ à 9 h 30 sur le port. Location de vélo comprise. 25 €.\n\nJeudi : concert de jazz gratuit sur le Vieux-Port, à 21 h.\n\nVendredi : marché de produits régionaux, place du Marché, de 8 h à 13 h.\n\nSamedi et dimanche : musée maritime, entrée gratuite pour les moins de 18 ans.",
        },
      ],
      items: [
        {
          n: 9,
          question: "La visite de la vieille ville commence…",
          options: ["sur le port.", "à l'aquarium.", "devant l'office de tourisme."],
          answer: 2,
          explanation: "« Départ à 10 h devant l'office de tourisme. »",
        },
        {
          n: 10,
          question: "Vous voulez faire du vélo. Vous choisissez quel jour ?",
          options: ["Mercredi.", "Lundi.", "Vendredi."],
          answer: 0,
          explanation: "« Mercredi : balade à vélo jusqu'à l'île de Ré. »",
        },
        {
          n: 11,
          question: "Quelle activité est gratuite pour tout le monde ?",
          options: ["Le musée maritime.", "Le concert de jazz.", "L'aquarium."],
          answer: 1,
          explanation: "« Concert de jazz gratuit. » The museum is free only for under-18s.",
        },
        {
          n: 12,
          question: "Le marché est ouvert…",
          options: ["le soir.", "l'après-midi.", "le matin."],
          answer: 2,
          explanation: "« De 8 h à 13 h »: in the morning.",
        },
        {
          n: 13,
          question: "Combien coûte l'aquarium pour un adulte ?",
          options: ["13 €.", "19 €.", "25 €."],
          answer: 1,
          explanation: "« Adultes : 19 €, enfants : 13 €. »",
        },
      ],
    },
    {
      title: "Exercice 4",
      instructions:
        "Vous lisez ces petites annonces dans le journal du quartier. Associez chaque personne (14-18) à l'annonce qui correspond (A-G). Attention : il y a deux annonces en trop.",
      instructionsEn:
        "Read these small ads in the local paper. Match each person (14-18) with the right ad (A-G). Two ads are not used.",
      texts: [
        {
          label: "Personnes",
          body:
            "14. Nadia : J'aime beaucoup la musique et je voudrais apprendre à jouer d'un instrument.\n\n" +
            "15. Paul : Je suis étudiant, j'arrive à Nantes en septembre et je cherche un logement pas cher.\n\n" +
            "16. Mme Leroy : Je travaille le mercredi et je cherche une personne pour s'occuper de mes deux enfants.\n\n" +
            "17. Ahmed : J'adore la nature et je voudrais marcher en montagne avec d'autres personnes.\n\n" +
            "18. Sophie : Je voudrais nager le soir après le travail.",
        },
        { label: "A", title: "Cours de guitare", body: "Professeur donne des cours de guitare pour débutants. Le samedi matin. 20 € l'heure. Tél. : 06 45 12 78 90." },
        { label: "B", title: "Club de randonnée", body: "Vous aimez marcher ? Notre club organise une sortie en montagne chaque dimanche. Ambiance sympa !" },
        { label: "C", title: "Vends vélo", body: "Vends vélo de ville bleu, très bon état. 80 €. Appeler le soir." },
        { label: "D", title: "Garde d'enfants", body: "Étudiante sérieuse, 22 ans, garde vos enfants le mercredi et le samedi. Expérience." },
        { label: "E", title: "Cours de cuisine", body: "Apprenez à faire la cuisine française ! Petit groupe, le jeudi soir." },
        { label: "F", title: "Chambre à louer", body: "Chambre meublée chez une dame âgée, centre de Nantes, 300 € par mois. Idéal pour étudiant." },
        { label: "G", title: "Piscine municipale", body: "Nouveaux horaires : la piscine est ouverte du lundi au vendredi de 12 h à 21 h." },
      ],
      layout: "select",
      items: [
        { n: 14, question: "Nadia", options: ANNONCES, answer: 0, explanation: "She wants to learn an instrument: guitar lessons (A)." },
        { n: 15, question: "Paul", options: ANNONCES, answer: 5, explanation: "A cheap room in Nantes, « idéal pour étudiant » (F)." },
        { n: 16, question: "Mme Leroy", options: ANNONCES, answer: 3, explanation: "A student who looks after children on Wednesdays (D)." },
        { n: 17, question: "Ahmed", options: ANNONCES, answer: 1, explanation: "Walking in the mountains with a club (B)." },
        { n: 18, question: "Sophie", options: ANNONCES, answer: 6, explanation: "The pool is open until 21 h on weekdays, so after work (G). C and E are not used." },
      ],
    },
  ],
};
