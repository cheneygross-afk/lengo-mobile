// Synced from cheneygross-afk/lengo:src/lib/exams/fr/dalf-c1-po.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// DALF C1 practice exam -- Production orale.
// One hour to prepare, then about 30 minutes with the jury, as in the
// real exam: an exposé built from a short dossier of documents
// (8 to 10 minutes), then a discussion with the jury. The real exam
// offers two domains; this practice exam gives one dossier, in lettres
// et sciences humaines.
export const DALF_C1_PO: ExamPaper = {
  id: "po",
  kind: "speaking",
  title: "Production orale",
  minutes: 30,
  prepMinutes: 60,
  group: 2,
  tasks: [
    {
      title: "Exercice 1 : exposé",
      instructions:
        "Domaine : lettres et sciences humaines. Vous disposez d'une heure pour préparer cette épreuve. À partir des documents proposés, vous préparerez un exposé sur le thème indiqué. Vous dégagerez une problématique et présenterez votre point de vue de manière argumentée et organisée, en vous appuyant sur les documents et sur vos propres connaissances ou expériences. Votre exposé durera de 8 à 10 minutes ; le jury ne vous interrompra pas.",
      speak: {
        prompt: "Thème : apprendre une langue étrangère à l'heure de la traduction automatique.",
        material: [
          {
            label: "Document 1",
            title: "Les langues vivantes perdent des étudiants",
            body:
              "Les filières de langues étrangères des universités voient leurs effectifs fondre. Dans certaines formations de langues dites « rares », le nombre d'inscrits en première année a baissé de près de moitié en dix ans, et plusieurs établissements ont choisi de fermer des parcours entiers. Parallèlement, les outils de traduction automatique ont fait des progrès spectaculaires : ils produisent en quelques secondes des textes fluides, traduisent une conversation en temps réel et s'intègrent désormais aux téléphones, aux navigateurs et aux messageries. « Beaucoup de parents se demandent si cela vaut encore la peine de pousser leurs enfants à apprendre l'allemand ou le chinois, puisque leur téléphone le fera pour eux », observe une conseillère d'orientation. Les entreprises, elles, envoient des signaux contradictoires : si certaines réduisent leurs budgets de formation linguistique, la maîtrise d'une langue étrangère reste citée parmi les compétences les plus recherchées dans les offres d'emploi à l'international.\n\nD'après un article de presse",
          },
          {
            label: "Document 2",
            title: "« Une langue n'est pas un code »",
            body:
              "— La traduction automatique rend-elle l'apprentissage des langues inutile ?\n— Elle le rend différent, pas inutile. Pour lire un mode d'emploi ou réserver une chambre d'hôtel, ces outils suffisent largement, et c'est un progrès formidable. Mais une langue n'est pas un code qu'on remplacerait par un autre. Quand vous apprenez une langue, vous découvrez une autre manière de découper le monde, d'être poli, de plaisanter, de dire non. Aucune machine ne fera à votre place l'effort de vous décentrer. Par ailleurs, ces outils se trompent, et plus le texte est subtil, plus ils se trompent : l'ironie, les sous-entendus, les références culturelles leur échappent encore largement. Le risque, c'est de ne plus savoir repérer ces erreurs. Paradoxalement, pour bien utiliser un traducteur automatique, il faut connaître la langue.\n\nEntretien avec une linguiste, extrait d'un magazine culturel",
          },
        ],
        points: [
          "Présenter brièvement le thème et les deux documents.",
          "Dégager une problématique (par exemple : la traduction automatique rend-elle l'apprentissage des langues superflu ?).",
          "Annoncer un plan et le suivre (deux ou trois parties).",
          "Défendre un point de vue argumenté, en s'appuyant sur les documents sans les résumer, et sur des exemples personnels ou culturels.",
          "Conclure en répondant à la problématique et, éventuellement, en ouvrant la réflexion.",
        ],
        prepMinutes: 60,
        speakMinutes: 10,
        modelAnswer:
          "Il y a quelques années, quand j'ai passé un semestre à Séoul, je n'avais qu'une application de traduction pour me débrouiller. Elle m'a permis de commander au restaurant, de lire les panneaux et même de louer une chambre. Mais quand ma logeuse m'a raconté, un soir, l'histoire de sa famille, l'application ne m'a été d'aucun secours. C'est de ce décalage que j'aimerais partir aujourd'hui.\n\n" +
          "Les deux documents dont je dispose abordent précisément cette question. Le premier, un article de presse, constate que les filières universitaires de langues perdent des étudiants au moment même où la traduction automatique fait des progrès spectaculaires. Le second, un entretien avec une linguiste, soutient qu'une langue n'est pas un simple code et que la machine ne remplace pas l'apprentissage. On peut donc se demander si la traduction automatique rend superflu l'apprentissage des langues étrangères, ou si elle en transforme seulement les finalités.\n\n" +
          "Pour y répondre, je montrerai d'abord que ces outils satisfont réellement une partie de nos besoins, avant d'expliquer pourquoi ils ne sauraient remplacer la connaissance d'une langue, et enfin de proposer quelques pistes pour repenser son enseignement.\n\n" +
          "Premièrement, il serait malhonnête de nier l'utilité de ces outils. Comme le reconnaît la linguiste elle-même, pour un mode d'emploi ou une réservation d'hôtel, ils suffisent largement. Ils permettent à un touriste de voyager plus sereinement, à un chercheur de lire un article publié en japonais, à un réfugié de communiquer avec l'administration dès son arrivée. Dans ces situations, la langue est un instrument de communication pratique, et la machine fait le travail mieux et plus vite que la plupart d'entre nous. On comprend dès lors que certains parents, cités dans le premier document, s'interrogent sur l'intérêt de faire apprendre l'allemand ou le chinois à leurs enfants.\n\n" +
          "Pourtant, et c'est ma deuxième partie, réduire une langue à un outil, c'est oublier l'essentiel. D'abord, la machine se trompe, surtout là où le sens est subtil : l'ironie, les sous-entendus, les références culturelles. Or, comme le souligne la linguiste, il faut connaître la langue pour repérer ces erreurs. Ensuite, et surtout, apprendre une langue, c'est apprendre à se décentrer. En coréen, par exemple, on ne s'adresse pas de la même manière à un aîné et à un ami : apprendre ces formes, c'est comprendre une conception des relations humaines. Aucune application ne fait cet effort à notre place. Enfin, les entreprises ne s'y trompent pas : d'après le premier document, la maîtrise d'une langue étrangère reste l'une des compétences les plus recherchées à l'international. Négocier un contrat ou gagner la confiance d'un partenaire, cela ne passe pas par un écran interposé.\n\n" +
          "Dès lors, plutôt que d'opposer l'apprentissage et la machine, il faudrait sans doute repenser l'enseignement des langues. On pourrait consacrer moins de temps aux exercices de traduction mécanique, que la machine accomplit très bien, et davantage à l'oral, à l'interaction et à la culture. On pourrait aussi apprendre aux élèves à utiliser intelligemment les traducteurs, en vérifiant et en corrigeant ce qu'ils produisent. Quant aux langues rares, dont les filières ferment, leur sauvegarde relève peut-être d'une décision politique : une université ne devrait pas seulement répondre à la demande, mais aussi préserver des savoirs.\n\n" +
          "Pour conclure, je dirais que la traduction automatique ne rend pas l'apprentissage des langues inutile ; elle le débarrasse de ce qu'il avait de plus mécanique et nous oblige à nous concentrer sur ce qui fait sa valeur : la rencontre avec l'autre. Ma logeuse de Séoul, je n'ai pu vraiment la comprendre que l'année suivante, une fois capable de lui parler dans sa langue. La question qui se pose désormais est peut-être celle-ci : saurons-nous encore faire cet effort, quand une solution plus facile est à portée de main ?",
      },
    },
    {
      title: "Exercice 2 : entretien avec le jury",
      instructions:
        "Après votre exposé, le jury vous posera des questions pendant 15 à 20 minutes. Il pourra vous demander de préciser, de nuancer ou de défendre votre point de vue, et élargir la discussion à des sujets voisins.",
      speak: {
        prompt: "Entretien avec le jury sur l'apprentissage des langues et la traduction automatique.",
        points: [
          "Répondre avec précision, en développant et en illustrant ses réponses.",
          "Défendre son point de vue face aux objections, tout en sachant concéder et nuancer.",
          "Reformuler ou préciser une idée lorsque le jury le demande.",
          "Gérer l'interaction : demander une précision, reprendre la parole, conclure une réponse.",
        ],
        examinerQuestions: [
          "Vous dites que la machine ne permet pas de se décentrer. Mais lire des traductions de romans étrangers, n'est-ce pas déjà une forme de décentrement ?",
          "Si les outils continuent de progresser, l'argument des erreurs de traduction ne risque-t-il pas de disparaître ?",
          "Faut-il, selon vous, continuer d'imposer deux langues vivantes à tous les élèves ?",
          "Vous avez parlé des langues rares : est-ce vraiment le rôle de l'État de financer des formations qui attirent peu d'étudiants ?",
          "L'anglais n'est-il pas en train de devenir une langue universelle qui rendrait les autres moins nécessaires ?",
          "Quelle a été, pour vous, l'expérience la plus marquante dans l'apprentissage du français ?",
        ],
        prepMinutes: 0,
        speakMinutes: 20,
        modelAnswer:
          "— Lire des romans traduits, n'est-ce pas déjà se décentrer ?\n— Vous avez raison, en partie. Les traducteurs littéraires font un travail remarquable, et je n'aurais jamais lu Dostoïevski sans eux. Mais justement, ce sont des humains qui ont fait l'effort de passer d'une culture à l'autre, et ils le disent souvent eux-mêmes : certaines choses restent intraduisibles. Lire une traduction, c'est bénéficier du décentrement de quelqu'un d'autre ; apprendre la langue, c'est le vivre soi-même.\n\n" +
          "— Et si les outils deviennent parfaits ?\n— C'est possible pour les textes simples, et j'admets que mon argument perdrait alors de sa force. Mais je doute qu'une machine puisse un jour décider seule si une plaisanterie est appropriée dans une réunion à Tokyo ou à Berlin. Et quand bien même elle y parviendrait, l'enjeu principal resterait : le rapport que l'on construit avec quelqu'un dont on a fait l'effort d'apprendre la langue.\n\n" +
          "— Faut-il maintenir deux langues vivantes pour tous ?\n— Je le crois, à condition de changer la manière de les enseigner. Si l'objectif est seulement de réussir des exercices écrits, je comprends que les élèves se découragent. En revanche, des échanges, des projets avec une classe étrangère, des séjours, même courts, donnent du sens à cet apprentissage.\n\n" +
          "— L'État doit-il financer les langues rares ?\n— Oui, même si cela paraît peu rentable. Ce n'est pas le nombre d'étudiants qui fait la valeur d'un savoir. Le jour où l'on aura besoin de diplomates ou de chercheurs qui parlent une langue rare, on ne pourra pas les former en six mois.\n\n" +
          "— L'anglais ne suffit-il pas ?\n— Il est indispensable, je ne le conteste pas. Mais parler anglais avec un Brésilien, c'est se rencontrer en terrain neutre ; lui parler portugais, c'est aller vers lui. Ce n'est pas du tout la même relation.\n\n" +
          "— Votre expérience la plus marquante en français ?\n— Le jour où j'ai compris une blague de mes collègues sans qu'on me l'explique. J'ai eu l'impression de passer de l'autre côté de la vitre.",
      },
    },
  ],
};
