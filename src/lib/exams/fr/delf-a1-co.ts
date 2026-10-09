// Synced from cheneygross-afk/lengo:src/lib/exams/fr/delf-a1-co.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// DELF A1 practice exam -- Compréhension de l'oral.
// About 20 minutes, 4 exercises, 17 items, marked out of 25. Each
// recording is heard twice, as in the real exam. (The real exam often
// answers with pictures; here the options describe them in words.)
const SITUATIONS = [
  "A. Acheter un billet de train",
  "B. Demander son chemin",
  "C. Commander au café",
  "D. Prendre un rendez-vous chez le médecin",
  "E. Acheter des vêtements",
  "F. Réserver une chambre d'hôtel",
];

export const DELF_A1_CO: ExamPaper = {
  id: "co",
  kind: "listening",
  title: "Compréhension de l'oral",
  minutes: 20,
  group: 1,
  tasks: [
    {
      title: "Exercice 1",
      instructions:
        "Vous allez entendre deux fois un message sur un répondeur téléphonique. Lisez les questions. Écoutez le document puis répondez aux questions (1-4). Choisissez la bonne réponse.",
      instructionsEn:
        "You'll hear a voicemail message twice. Read the questions, listen, then answer questions 1-4. Choose the right answer.",
      audio: [
        {
          label: "Message",
          lines: [
            {
              voice: "f",
              text: "Salut Thomas, c'est Julie. Samedi, c'est l'anniversaire de Léa. On va au cinéma et après, on mange une pizza. Rendez-vous à six heures et demie devant la gare. Tu peux apporter un gâteau au chocolat ? Moi, j'achète le cadeau. Rappelle-moi au zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit. Bisous !",
            },
          ],
        },
      ],
      items: [
        {
          n: 1,
          question: "Samedi, c'est…",
          options: ["l'anniversaire de Julie.", "l'anniversaire de Léa.", "la fête de Thomas."],
          answer: 1,
          explanation: "« Samedi, c'est l'anniversaire de Léa. » Julie is the caller and Thomas is the listener.",
        },
        {
          n: 2,
          question: "Le rendez-vous est à quelle heure ?",
          options: ["16 h 30.", "18 h 00.", "18 h 30."],
          answer: 2,
          explanation: "« Six heures et demie » in the evening is 18 h 30. French times often use the 24-hour clock in writing.",
        },
        {
          n: 3,
          question: "Le rendez-vous est…",
          options: ["devant la gare.", "devant le cinéma.", "à la pizzeria."],
          answer: 0,
          explanation: "« Rendez-vous… devant la gare. » The cinema and the pizza come later.",
        },
        {
          n: 4,
          question: "Qu'est-ce que Thomas doit apporter ?",
          options: ["Un cadeau.", "Des pizzas.", "Un gâteau."],
          answer: 2,
          explanation: "« Tu peux apporter un gâteau au chocolat ? » Julie buys the present herself.",
        },
      ],
    },
    {
      title: "Exercice 2",
      instructions:
        "Vous allez entendre deux fois une annonce dans une gare. Lisez les questions. Écoutez le document puis répondez aux questions (5-8). Choisissez la bonne réponse.",
      instructionsEn:
        "You'll hear an announcement in a train station twice. Read the questions, listen, then answer questions 5-8. Choose the right answer.",
      audio: [
        {
          label: "Annonce",
          lines: [
            {
              voice: "m",
              text: "Mesdames et messieurs, votre attention, s'il vous plaît. Le train TGV numéro six mille deux cent quatorze, à destination de Lyon, partira avec un retard de vingt minutes. Il partira à dix heures quarante-cinq, voie sept. La voiture-bar se trouve en voiture quatre. Nous vous prions de nous excuser pour ce retard.",
            },
          ],
        },
      ],
      items: [
        {
          n: 5,
          question: "Le train va à…",
          options: ["Lille.", "Lyon.", "Lens."],
          answer: 1,
          explanation: "« À destination de Lyon. »",
        },
        {
          n: 6,
          question: "Le train a un retard de…",
          options: ["20 minutes.", "45 minutes.", "10 minutes."],
          answer: 0,
          explanation: "« Un retard de vingt minutes. » Quarante-cinq is part of the new departure time.",
        },
        {
          n: 7,
          question: "Le train part de quelle voie ?",
          options: ["Voie 4.", "Voie 14.", "Voie 7."],
          answer: 2,
          explanation: "« Voie sept. » Four is the number of the buffet car (voiture quatre).",
        },
        {
          n: 8,
          question: "Où est la voiture-bar ?",
          options: ["En voiture 4.", "En voiture 7.", "En voiture 2."],
          answer: 0,
          explanation: "« La voiture-bar se trouve en voiture quatre. »",
        },
      ],
    },
    {
      title: "Exercice 3",
      instructions:
        "Vous allez entendre deux fois un message. Lisez les questions. Écoutez le document puis répondez aux questions (9-12). Choisissez la bonne réponse.",
      instructionsEn:
        "You'll hear a message twice. Read the questions, listen, then answer questions 9-12. Choose the right answer.",
      audio: [
        {
          label: "Message de l'école de langues",
          lines: [
            {
              voice: "m",
              text: "Bonjour, ici l'école de langues Bonjour Paris. C'est un message pour les étudiants du cours de français du mardi soir. Cette semaine, le cours n'est pas mardi, il est jeudi, à la même heure, à dix-neuf heures. Attention, la salle change : c'est la salle douze, au deuxième étage. N'oubliez pas votre livre et votre dictionnaire. Merci et à jeudi !",
            },
          ],
        },
      ],
      items: [
        {
          n: 9,
          question: "Cette semaine, le cours de français est…",
          options: ["mardi.", "mercredi.", "jeudi."],
          answer: 2,
          explanation: "« Le cours n'est pas mardi, il est jeudi. »",
        },
        {
          n: 10,
          question: "Le cours commence à…",
          options: ["9 h.", "19 h.", "12 h."],
          answer: 1,
          explanation: "« À dix-neuf heures » (7 pm), the same time as usual.",
        },
        {
          n: 11,
          question: "La salle de cours est…",
          options: ["au deuxième étage.", "au rez-de-chaussée.", "au douzième étage."],
          answer: 0,
          explanation: "« La salle douze, au deuxième étage. » Twelve is the room number, not the floor.",
        },
        {
          n: 12,
          question: "Les étudiants doivent apporter…",
          options: ["un cahier et un stylo.", "un livre et un dictionnaire.", "un ordinateur."],
          answer: 1,
          explanation: "« N'oubliez pas votre livre et votre dictionnaire. »",
        },
      ],
    },
    {
      title: "Exercice 4",
      instructions:
        "Vous allez entendre deux fois cinq petits dialogues correspondant à cinq situations différentes. Associez chaque dialogue (13-17) à la situation correspondante (A-F). Attention : il y a six situations mais seulement cinq dialogues.",
      instructionsEn:
        "You'll hear five short dialogues, each twice. Match each dialogue (13-17) with its situation (A-F). There are six situations but only five dialogues.",
      audio: [
        {
          label: "Dialogue 1",
          lines: [
            { voice: "f", text: "Bonjour madame, je voudrais un aller-retour pour Bordeaux, s'il vous plaît." },
            { voice: "m", text: "Pour quel jour ?" },
            { voice: "f", text: "Pour vendredi matin, et retour dimanche soir." },
            { voice: "m", text: "Alors, ça fait quatre-vingt-cinq euros." },
          ],
        },
        {
          label: "Dialogue 2",
          lines: [
            { voice: "m", text: "Excusez-moi, madame, la poste, c'est loin ?" },
            { voice: "f", text: "Non, c'est tout près. Vous allez tout droit et vous tournez à gauche après la boulangerie." },
            { voice: "m", text: "Merci beaucoup !" },
          ],
        },
        {
          label: "Dialogue 3",
          lines: [
            { voice: "f", text: "Bonjour, je peux essayer ce pantalon ?" },
            { voice: "m", text: "Oui, bien sûr. Vous faites quelle taille ?" },
            { voice: "f", text: "Du trente-huit." },
            { voice: "m", text: "Voilà. La cabine est au fond, à droite." },
          ],
        },
        {
          label: "Dialogue 4",
          lines: [
            { voice: "m", text: "Cabinet du docteur Martin, bonjour." },
            { voice: "f", text: "Bonjour monsieur, je voudrais voir le docteur, s'il vous plaît. J'ai mal à la gorge." },
            { voice: "m", text: "Demain à quatorze heures, ça vous va ?" },
            { voice: "f", text: "Oui, parfait, merci." },
          ],
        },
        {
          label: "Dialogue 5",
          lines: [
            { voice: "m", text: "Bonsoir, vous avez une chambre pour deux personnes, pour ce soir ?" },
            { voice: "f", text: "Oui, il nous reste une chambre avec salle de bains. C'est quatre-vingt-dix euros la nuit, petit-déjeuner compris." },
            { voice: "m", text: "Très bien, je la prends." },
          ],
        },
      ],
      layout: "select",
      items: [
        { n: 13, question: "Dialogue 1", options: SITUATIONS, answer: 0, source: 0, explanation: "« Un aller-retour pour Bordeaux »: a return train ticket (A)." },
        { n: 14, question: "Dialogue 2", options: SITUATIONS, answer: 1, source: 1, explanation: "« La poste, c'est loin ? … tout droit… à gauche »: asking the way (B)." },
        { n: 15, question: "Dialogue 3", options: SITUATIONS, answer: 4, source: 2, explanation: "« Je peux essayer ce pantalon ? … quelle taille ? »: buying clothes (E)." },
        { n: 16, question: "Dialogue 4", options: SITUATIONS, answer: 3, source: 3, explanation: "« Je voudrais voir le docteur… Demain à quatorze heures »: a doctor's appointment (D)." },
        { n: 17, question: "Dialogue 5", options: SITUATIONS, answer: 5, source: 4, explanation: "« Une chambre pour deux personnes, pour ce soir »: booking a hotel room (F). C, the café, is not used." },
      ],
    },
  ],
};
