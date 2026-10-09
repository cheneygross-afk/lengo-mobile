// Synced from cheneygross-afk/lengo:src/lib/exams/fr/delf-b1-co.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// DELF B1 practice exam -- Compréhension de l'oral.
// About 25 minutes, 3 exercises, 19 items. Each recording is heard
// twice, as in the real exam.
export const DELF_B1_CO: ExamPaper = {
  id: "co",
  kind: "listening",
  title: "Compréhension de l'oral",
  minutes: 25,
  group: 1,
  tasks: [
    {
      title: "Exercice 1",
      instructions:
        "Vous allez entendre trois documents courts. Vous entendrez chaque document deux fois. Lisez d'abord les questions, puis écoutez et choisissez la bonne réponse (A, B ou C).",
      audio: [
        {
          label: "Document 1",
          lines: [
            {
              voice: "f",
              text: "Bonjour monsieur Lambert, c'est Élodie Perrin, de l'agence immobilière du Centre. Je vous appelle au sujet de l'appartement de la rue Victor-Hugo. Le propriétaire a accepté votre dossier, mais il demande un garant supplémentaire, parce que votre contrat de travail est encore en période d'essai. Est-ce que vous pourriez m'envoyer les documents de cette personne avant jeudi ? Sinon, il risque de choisir un autre candidat. Vous pouvez me rappeler au zéro quatre, soixante-dix-huit, trente-deux, quinze, zéro neuf. Bonne journée.",
            },
          ],
        },
        {
          label: "Document 2",
          lines: [
            {
              voice: "m",
              text: "Mesdames et messieurs, votre attention s'il vous plaît. En raison d'un incident technique sur la voie entre Dijon et Mâcon, le TER à destination de Lyon Part-Dieu, prévu au départ à quatorze heures douze, est supprimé. Les voyageurs sont invités à emprunter le car de remplacement, qui partira à quatorze heures trente devant la gare routière, sortie nord. Les billets restent valables. Nous vous prions de nous excuser pour la gêne occasionnée.",
            },
          ],
        },
        {
          label: "Document 3",
          lines: [
            { voice: "f", text: "Alors, Karim, tu as trouvé un cadeau pour l'anniversaire de ta mère ?" },
            { voice: "m", text: "Pas encore. J'avais pensé à un bon pour un restaurant, mais elle m'a dit qu'elle voulait faire attention à ce qu'elle mange en ce moment." },
            { voice: "f", text: "Et un cours de quelque chose ? Elle adore le jardinage, non ?" },
            { voice: "m", text: "Oui, mais elle s'y connaît mieux que n'importe quel prof ! Non, je crois que je vais lui offrir un week-end à la mer avec mon père. Ils ne sont pas partis depuis au moins deux ans." },
            { voice: "f", text: "Bonne idée. Et ça lui fera plaisir que tu t'occupes du chien pendant ce temps." },
          ],
        },
      ],
      layout: "choice",
      items: [
        {
          n: 1,
          source: 0,
          question: "Pourquoi Élodie Perrin appelle-t-elle M. Lambert ?",
          options: [
            "Pour lui annoncer que son dossier a été refusé.",
            "Pour lui demander un document complémentaire.",
            "Pour lui proposer un autre appartement.",
          ],
          answer: 1,
          explanation: "Le propriétaire accepte le dossier mais « demande un garant supplémentaire » : il faut envoyer les documents de cette personne.",
        },
        {
          n: 2,
          source: 0,
          question: "Que se passera-t-il si M. Lambert ne répond pas avant jeudi ?",
          options: [
            "Le loyer va augmenter.",
            "L'agence fermera son dossier.",
            "Le propriétaire pourra louer à quelqu'un d'autre.",
          ],
          answer: 2,
          explanation: "« Sinon, il risque de choisir un autre candidat. »",
        },
        {
          n: 3,
          source: 1,
          question: "Qu'est-ce qui est arrivé au train de 14 h 12 ?",
          options: ["Il est annulé.", "Il partira avec trente minutes de retard.", "Il part d'un autre quai."],
          answer: 0,
          explanation: "Le TER « est supprimé » à cause d'un incident technique.",
        },
        {
          n: 4,
          source: 1,
          question: "Que doivent faire les voyageurs ?",
          options: [
            "Acheter un nouveau billet au guichet.",
            "Prendre un car devant la gare routière.",
            "Attendre le train suivant à Mâcon.",
          ],
          answer: 1,
          explanation: "Ils doivent prendre le car de remplacement de 14 h 30 ; les billets restent valables.",
        },
        {
          n: 5,
          source: 2,
          question: "Pourquoi Karim n'offre-t-il pas un cours de jardinage à sa mère ?",
          options: [
            "Elle n'a pas le temps de suivre des cours.",
            "Elle n'aime pas le jardinage.",
            "Elle en sait déjà beaucoup sur le sujet.",
          ],
          answer: 2,
          explanation: "« Elle s'y connaît mieux que n'importe quel prof. »",
        },
        {
          n: 6,
          source: 2,
          question: "Qu'est-ce que Karim a finalement décidé ?",
          options: [
            "D'offrir un séjour à ses deux parents.",
            "D'inviter sa mère au restaurant.",
            "D'acheter un chien à sa mère.",
          ],
          answer: 0,
          explanation: "Il va offrir « un week-end à la mer avec mon père » ; lui gardera le chien.",
        },
      ],
    },
    {
      title: "Exercice 2",
      instructions:
        "Vous allez entendre une interview à la radio. Vous entendrez le document deux fois. Lisez d'abord les questions, puis écoutez et choisissez la bonne réponse (A, B ou C).",
      audio: [
        {
          label: "Interview",
          lines: [
            { voice: "m", text: "Bonjour à tous et bienvenue dans « Vivre ensemble ». Aujourd'hui, je reçois Sophie Garnier, qui a créé il y a trois ans un café pas comme les autres à Nantes : un café de la réparation. Sophie, expliquez-nous le principe." },
            { voice: "f", text: "Bonjour. Alors, le principe est très simple : une fois par semaine, le samedi après-midi, les gens viennent avec un objet cassé, un grille-pain, une lampe, un vélo, un vêtement, et des bénévoles les aident à le réparer. Attention, on ne répare pas à leur place : on répare avec eux. Le but, c'est qu'ils repartent en sachant faire." },
            { voice: "m", text: "Et c'est payant ?" },
            { voice: "f", text: "Non, c'est gratuit. On demande seulement une petite participation libre pour acheter les outils et les pièces. Et bien sûr, on offre le café !" },
            { voice: "m", text: "D'où vous est venue l'idée ?" },
            { voice: "f", text: "En fait, c'est mon lave-linge. Il est tombé en panne, le réparateur m'a dit que ça coûterait plus cher de le réparer que d'en racheter un neuf. Ça m'a mise en colère. J'ai regardé des vidéos, j'ai changé une petite pièce à huit euros, et il marche encore aujourd'hui. Je me suis dit que je ne devais pas être la seule dans ce cas." },
            { voice: "m", text: "Qui sont les bénévoles ?" },
            { voice: "f", text: "Il y a de tout. Beaucoup de retraités, d'anciens électriciens, une couturière, mais aussi des étudiants en école d'ingénieurs. Ce qui me plaît, c'est justement ce mélange des générations. Les jeunes apprennent des gestes que les anciens connaissent, et les anciens découvrent les tutoriels en ligne." },
            { voice: "m", text: "Est-ce que ça marche à tous les coups ?" },
            { voice: "f", text: "Non, et on le dit honnêtement. On arrive à réparer à peu près deux objets sur trois. Pour le reste, soit la pièce n'existe plus, soit l'objet a été fabriqué pour ne pas être ouvert. Ça, c'est vraiment notre combat." },
            { voice: "m", text: "Et quels sont vos projets ?" },
            { voice: "f", text: "On voudrait ouvrir un deuxième lieu, dans un quartier plus éloigné du centre, et proposer des ateliers dans les collèges. Si les enfants apprennent tôt qu'un objet se répare, ils ne jetteront pas de la même façon." },
          ],
        },
      ],
      layout: "choice",
      items: [
        {
          n: 7,
          source: 0,
          question: "Au café de la réparation, les bénévoles…",
          options: [
            "réparent les objets pendant que les gens prennent un café.",
            "aident les gens à réparer eux-mêmes leurs objets.",
            "vendent des objets réparés à petit prix.",
          ],
          answer: 1,
          explanation: "« On ne répare pas à leur place : on répare avec eux. »",
        },
        {
          n: 8,
          source: 0,
          question: "Combien faut-il payer ?",
          options: [
            "Rien, mais on peut donner ce qu'on veut.",
            "Huit euros par objet.",
            "Le prix des pièces nécessaires.",
          ],
          answer: 0,
          explanation: "C'est gratuit, avec « une petite participation libre ».",
        },
        {
          n: 9,
          source: 0,
          question: "Qu'est-ce qui a donné l'idée du projet à Sophie ?",
          options: [
            "Une vidéo qu'elle a vue sur internet.",
            "Le conseil d'un réparateur.",
            "Une expérience personnelle avec un appareil en panne.",
          ],
          answer: 2,
          explanation: "Son lave-linge est tombé en panne ; elle l'a réparé elle-même avec une pièce à huit euros.",
        },
        {
          n: 10,
          source: 0,
          question: "Qu'est-ce que Sophie apprécie particulièrement chez les bénévoles ?",
          options: [
            "Leur expérience professionnelle.",
            "Le fait qu'ils soient d'âges différents.",
            "Leur disponibilité le samedi.",
          ],
          answer: 1,
          explanation: "« Ce qui me plaît, c'est justement ce mélange des générations. »",
        },
        {
          n: 11,
          source: 0,
          question: "Selon Sophie, combien d'objets sont réparés ?",
          options: ["Presque tous.", "Environ la moitié.", "Environ deux sur trois."],
          answer: 2,
          explanation: "« On arrive à réparer à peu près deux objets sur trois. »",
        },
        {
          n: 12,
          source: 0,
          question: "Contre quoi Sophie dit-elle se battre ?",
          options: [
            "Les objets conçus pour ne pas être réparés.",
            "Le prix trop élevé des réparateurs.",
            "Le manque de bénévoles qualifiés.",
          ],
          answer: 0,
          explanation: "Les objets « fabriqués pour ne pas être ouverts » : « ça, c'est vraiment notre combat ».",
        },
        {
          n: 13,
          source: 0,
          question: "Pourquoi Sophie veut-elle intervenir dans les collèges ?",
          options: [
            "Pour trouver de nouveaux bénévoles.",
            "Pour changer le rapport des jeunes aux objets.",
            "Pour récupérer du matériel informatique.",
          ],
          answer: 1,
          explanation: "Si les enfants apprennent tôt qu'un objet se répare, « ils ne jetteront pas de la même façon ».",
        },
      ],
    },
    {
      title: "Exercice 3",
      instructions:
        "Vous allez entendre une conversation entre deux collègues. Vous entendrez le document deux fois. Lisez d'abord les questions, puis écoutez et choisissez la bonne réponse (A, B ou C).",
      audio: [
        {
          label: "Conversation",
          lines: [
            { voice: "f", text: "Salut Thomas ! Alors, ça y est, tu as rendu ta réponse pour le poste à Bordeaux ?" },
            { voice: "m", text: "Pas encore, je dois répondre lundi. Franchement, j'hésite. Le poste est intéressant, je serais responsable d'une équipe de six personnes, et le salaire est meilleur." },
            { voice: "f", text: "Alors qu'est-ce qui te retient ?" },
            { voice: "m", text: "Ma compagne, surtout. Elle vient d'être titularisée comme professeure ici, à Lille. Si elle demande sa mutation, elle n'est pas sûre de l'obtenir avant deux ou trois ans." },
            { voice: "f", text: "Ah oui, c'est compliqué. Et le télétravail, tu as demandé ?" },
            { voice: "m", text: "Oui, ils acceptent deux jours par semaine, pas plus. Je pourrais faire les allers-retours, mais il y a presque cinq heures de train. Je ne me vois pas faire ça toutes les semaines pendant des années." },
            { voice: "f", text: "Moi, à ta place, je négocierais. Tu pourrais leur proposer de commencer en septembre plutôt qu'en juin. Ça vous laisserait le temps de vous organiser." },
            { voice: "m", text: "C'est vrai que je n'y avais pas pensé. Le directeur m'a dit qu'ils avaient vraiment besoin de quelqu'un qui connaisse le logiciel, et à part moi, il n'y a pas beaucoup de candidats." },
            { voice: "f", text: "Tu vois ! Tu es en position de force. Et puis, si tu refuses, est-ce qu'il y aura d'autres occasions ici ?" },
            { voice: "m", text: "Peut-être, mais pas avant que Martine parte à la retraite, et ce n'est pas pour tout de suite. Bon, je vais en parler ce soir avec Julie, et je t'en reparle demain à la cantine." },
          ],
        },
      ],
      layout: "choice",
      items: [
        {
          n: 14,
          source: 0,
          question: "Quand Thomas doit-il donner sa réponse ?",
          options: ["Aujourd'hui.", "Lundi.", "En juin."],
          answer: 1,
          explanation: "« Je dois répondre lundi. »",
        },
        {
          n: 15,
          source: 0,
          question: "Quel est l'avantage du poste à Bordeaux, selon Thomas ?",
          options: [
            "Il travaillerait plus près de chez lui.",
            "Il aurait plus de jours de télétravail.",
            "Il aurait plus de responsabilités et un meilleur salaire.",
          ],
          answer: 2,
          explanation: "Il serait responsable d'une équipe de six personnes et « le salaire est meilleur ».",
        },
        {
          n: 16,
          source: 0,
          question: "Quel est le problème de la compagne de Thomas ?",
          options: [
            "Elle ne pourrait pas changer de ville rapidement.",
            "Elle vient de perdre son travail.",
            "Elle ne veut pas quitter sa famille.",
          ],
          answer: 0,
          explanation: "Sa mutation à Bordeaux pourrait prendre « deux ou trois ans ».",
        },
        {
          n: 17,
          source: 0,
          question: "Pourquoi Thomas n'aime-t-il pas l'idée des allers-retours ?",
          options: [
            "Les billets de train coûtent trop cher.",
            "Le trajet est trop long pour le faire chaque semaine.",
            "L'entreprise refuse le télétravail.",
          ],
          answer: 1,
          explanation: "Il y a presque cinq heures de train : « je ne me vois pas faire ça toutes les semaines ».",
        },
        {
          n: 18,
          source: 0,
          question: "Que lui conseille sa collègue ?",
          options: [
            "Refuser le poste pour rester à Lille.",
            "Demander une augmentation à son directeur actuel.",
            "Proposer de commencer plus tard.",
          ],
          answer: 2,
          explanation: "« Tu pourrais leur proposer de commencer en septembre plutôt qu'en juin. »",
        },
        {
          n: 19,
          source: 0,
          question: "Selon la collègue, pourquoi Thomas est-il « en position de force » ?",
          options: [
            "Parce que l'entreprise a peu de candidats qui maîtrisent le logiciel.",
            "Parce que Martine va bientôt partir à la retraite.",
            "Parce qu'il a déjà reçu une autre offre.",
          ],
          answer: 0,
          explanation: "L'entreprise cherche quelqu'un qui connaisse le logiciel et il y a peu de candidats à part lui.",
        },
      ],
    },
  ],
};
