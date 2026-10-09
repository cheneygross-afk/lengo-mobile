// Synced from cheneygross-afk/lengo:src/lib/exams/fr/delf-a2-co.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// DELF A2 practice exam -- Compréhension de l'oral.
// About 25 minutes, 4 exercises, 21 items, marked out of 25. Each
// recording is heard twice, as in the real exam.
const ACTES = [
  "A. Féliciter quelqu'un",
  "B. S'excuser",
  "C. Refuser une invitation",
  "D. Demander un service",
  "E. Se plaindre",
  "F. Donner un conseil",
  "G. Demander un prix",
  "H. Prendre un rendez-vous",
];

export const DELF_A2_CO: ExamPaper = {
  id: "co",
  kind: "listening",
  title: "Compréhension de l'oral",
  minutes: 25,
  group: 1,
  tasks: [
    {
      title: "Exercice 1",
      instructions:
        "Vous allez entendre deux fois trois courts documents. Lisez les questions. Écoutez les documents puis répondez aux questions (1-6). Choisissez la bonne réponse.",
      instructionsEn:
        "You'll hear three short recordings, each twice. Read the questions, listen, then answer questions 1-6. Choose the right answer.",
      audio: [
        {
          label: "Document 1",
          lines: [
            {
              voice: "f",
              text: "Chers clients, le magasin fermera ses portes dans quinze minutes. Nous vous invitons à vous diriger vers les caisses. Nous vous rappelons que demain, jeudi, le magasin ouvrira exceptionnellement à dix heures au lieu de neuf heures, pour l'inventaire. Merci de votre visite.",
            },
          ],
        },
        {
          label: "Document 2",
          lines: [
            {
              voice: "m",
              text: "Bonjour, ici le garage Moreau. Votre voiture est prête, madame Girard. On a changé les deux pneus avant et fait la vidange. Vous pouvez venir la chercher cet après-midi jusqu'à dix-huit heures. Le garage est fermé samedi. Au revoir.",
            },
          ],
        },
        {
          label: "Document 3",
          lines: [
            {
              voice: "f",
              text: "Mesdames et messieurs, bienvenue à bord du vol AF trois cent douze à destination de Marseille. La durée du vol sera d'une heure dix. Pour votre confort, des boissons chaudes et froides vous seront servies gratuitement. Nous vous demandons d'éteindre vos téléphones portables pendant le décollage.",
            },
          ],
        },
      ],
      items: [
        { n: 1, source: 0, question: "Le magasin va fermer dans…", options: ["cinq minutes.", "quinze minutes.", "une heure."], answer: 1, explanation: "« Le magasin fermera ses portes dans quinze minutes. »" },
        { n: 2, source: 0, question: "Demain, le magasin ouvrira…", options: ["plus tard que d'habitude.", "plus tôt que d'habitude.", "à la même heure."], answer: 0, explanation: "« À dix heures au lieu de neuf heures »: an hour later than usual, because of the stocktake." },
        { n: 3, source: 1, question: "Qu'est-ce que le garage a fait ?", options: ["Il a réparé les freins.", "Il a lavé la voiture.", "Il a changé des pneus."], answer: 2, explanation: "« On a changé les deux pneus avant et fait la vidange » (oil change)." },
        { n: 4, source: 1, question: "Madame Girard peut chercher sa voiture…", options: ["samedi.", "aujourd'hui avant 18 h.", "demain matin."], answer: 1, explanation: "« Cet après-midi jusqu'à dix-huit heures. » The garage is closed on Saturday." },
        { n: 5, source: 2, question: "L'avion va à…", options: ["Marseille.", "Montpellier.", "Nice."], answer: 0, explanation: "« À destination de Marseille. »" },
        { n: 6, source: 2, question: "Pendant le vol, les boissons sont…", options: ["payantes.", "seulement froides.", "gratuites."], answer: 2, explanation: "« Des boissons chaudes et froides vous seront servies gratuitement. »" },
      ],
    },
    {
      title: "Exercice 2",
      instructions:
        "Vous allez entendre deux fois une information à la radio. Lisez les questions. Écoutez le document puis répondez aux questions (7-11). Choisissez la bonne réponse.",
      instructionsEn:
        "You'll hear a radio news item twice. Read the questions, listen, then answer questions 7-11. Choose the right answer.",
      audio: [
        {
          label: "Radio Bretagne Info",
          lines: [
            {
              voice: "m",
              text: "À Rennes, la mairie lance un nouveau service de vélos électriques. À partir du premier juin, deux cents vélos seront disponibles dans quarante stations de la ville. Pour les utiliser, il faut télécharger une application sur son téléphone. L'abonnement coûte quinze euros par mois, et c'est gratuit pour les étudiants pendant le premier mois. Selon la mairie, l'objectif est simple : moins de voitures dans le centre et un air plus propre. L'année dernière, le service de vélos classiques a eu beaucoup de succès : plus de dix mille personnes l'ont utilisé.",
            },
          ],
        },
      ],
      items: [
        { n: 7, question: "Ce nouveau service propose…", options: ["des bus électriques.", "des vélos électriques.", "des voitures électriques."], answer: 1, explanation: "« Un nouveau service de vélos électriques. »" },
        { n: 8, question: "Le service commence…", options: ["le 1er juin.", "le 1er juillet.", "l'année prochaine."], answer: 0, explanation: "« À partir du premier juin. »" },
        { n: 9, question: "Pour utiliser le service, il faut…", options: ["aller à la mairie.", "acheter une carte à la gare.", "télécharger une application."], answer: 2, explanation: "« Il faut télécharger une application sur son téléphone. »" },
        { n: 10, question: "Qui ne paie pas le premier mois ?", options: ["Les enfants.", "Les étudiants.", "Les personnes âgées."], answer: 1, explanation: "« C'est gratuit pour les étudiants pendant le premier mois. »" },
        { n: 11, question: "Pourquoi la mairie lance-t-elle ce service ?", options: ["Pour réduire les voitures en ville.", "Pour gagner de l'argent.", "Pour les touristes."], answer: 0, explanation: "« Moins de voitures dans le centre et un air plus propre. »" },
      ],
    },
    {
      title: "Exercice 3",
      instructions:
        "Vous allez entendre deux fois un message sur votre répondeur. Lisez les questions. Écoutez le document puis répondez aux questions (12-15). Choisissez la bonne réponse.",
      instructionsEn:
        "You'll hear a message on your answerphone twice. Read the questions, listen, then answer questions 12-15. Choose the right answer.",
      audio: [
        {
          label: "Message",
          lines: [
            {
              voice: "f",
              text: "Allô, c'est Mathilde. Écoute, j'ai un petit problème pour dimanche. Ma sœur arrive de Montréal samedi soir et elle reste chez moi toute la semaine. Alors je ne peux pas venir à la randonnée avec vous. Je suis vraiment désolée ! Par contre, est-ce que tu es libre mercredi soir ? On pourrait dîner toutes les trois au petit restaurant italien près de chez toi. Ma sœur adore les pâtes ! Envoie-moi un texto ce soir pour me dire si c'est possible. Bisous !",
            },
          ],
        },
      ],
      items: [
        { n: 12, question: "La sœur de Mathilde…", options: ["arrive dimanche.", "arrive du Canada.", "part au Canada."], answer: 1, explanation: "« Ma sœur arrive de Montréal samedi soir » — Montréal is in Canada — and she arrives on Saturday evening, not Sunday." },
        { n: 13, question: "Dimanche, Mathilde…", options: ["ne va pas à la randonnée.", "va à la randonnée avec sa sœur.", "va au restaurant."], answer: 0, explanation: "« Je ne peux pas venir à la randonnée avec vous. »" },
        { n: 14, question: "Qu'est-ce que Mathilde propose ?", options: ["Un pique-nique dimanche.", "Un cinéma samedi.", "Un dîner mercredi."], answer: 2, explanation: "« Est-ce que tu es libre mercredi soir ? On pourrait dîner… »" },
        { n: 15, question: "Comment faut-il répondre à Mathilde ?", options: ["Par courriel.", "Par téléphone, demain.", "Par SMS, ce soir."], answer: 2, explanation: "« Envoie-moi un texto ce soir » — un texto is a text message (SMS)." },
      ],
    },
    {
      title: "Exercice 4",
      instructions:
        "Vous allez entendre deux fois six petits dialogues. Associez chaque dialogue (16-21) à la situation correspondante (A-H). Attention : il y a deux situations en trop.",
      instructionsEn:
        "You'll hear six short dialogues, each twice. Match each dialogue (16-21) with what the speaker is doing (A-H). Two situations are not used.",
      audio: [
        {
          label: "Dialogue 1",
          lines: [
            { voice: "m", text: "Tu as eu ton permis de conduire ? Bravo, c'est génial !" },
            { voice: "f", text: "Merci ! Je suis tellement contente, c'était ma troisième fois !" },
          ],
        },
        {
          label: "Dialogue 2",
          lines: [
            { voice: "f", text: "Excuse-moi, je suis en retard, mon bus est tombé en panne." },
            { voice: "m", text: "Ce n'est pas grave, le film n'a pas encore commencé." },
          ],
        },
        {
          label: "Dialogue 3",
          lines: [
            { voice: "m", text: "Monsieur, ma soupe est froide et j'attends mon plat depuis quarante minutes. Ce n'est pas normal !" },
            { voice: "f", text: "Je suis désolée, monsieur, je vais voir en cuisine tout de suite." },
          ],
        },
        {
          label: "Dialogue 4",
          lines: [
            { voice: "f", text: "Dis, tu pourrais arroser mes plantes pendant mes vacances ? Je te laisse la clé." },
            { voice: "m", text: "Oui, pas de problème. Tu pars quand ?" },
          ],
        },
        {
          label: "Dialogue 5",
          lines: [
            { voice: "m", text: "Tu viens à mon concert vendredi soir ?" },
            { voice: "f", text: "Oh, c'est dommage, vendredi je ne peux pas, je travaille tard. Mais la prochaine fois, c'est promis !" },
          ],
        },
        {
          label: "Dialogue 6",
          lines: [
            { voice: "f", text: "J'ai mal au dos depuis une semaine." },
            { voice: "m", text: "Tu devrais aller voir un kiné. Et arrête de porter ton gros sac sur une seule épaule !" },
          ],
        },
      ],
      layout: "select",
      items: [
        { n: 16, question: "Dialogue 1", options: ACTES, answer: 0, source: 0, explanation: "« Bravo, c'est génial ! » after a driving test: congratulating (A)." },
        { n: 17, question: "Dialogue 2", options: ACTES, answer: 1, source: 1, explanation: "« Excuse-moi, je suis en retard »: apologising (B)." },
        { n: 18, question: "Dialogue 3", options: ACTES, answer: 4, source: 2, explanation: "Cold soup, a forty-minute wait, « ce n'est pas normal ! »: complaining (E)." },
        { n: 19, question: "Dialogue 4", options: ACTES, answer: 3, source: 3, explanation: "« Tu pourrais arroser mes plantes ? »: asking a favour (D)." },
        { n: 20, question: "Dialogue 5", options: ACTES, answer: 2, source: 4, explanation: "« Vendredi je ne peux pas »: turning down an invitation to a concert (C)." },
        { n: 21, question: "Dialogue 6", options: ACTES, answer: 5, source: 5, explanation: "« Tu devrais aller voir un kiné »: giving advice (F). G and H are not used." },
      ],
    },
  ],
};
