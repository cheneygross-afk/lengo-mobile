// Synced from cheneygross-afk/lengo:src/lib/exams/fr/dalf-c2-co.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// DALF C2 practice exam -- Compréhension de l'oral.
// The real DALF C2 has no separate listening paper: its first épreuve,
// "Compréhension et production orales", starts with a long recorded
// document (a radio interview or debate) heard twice, on which the
// candidate takes notes, then reports it to the jury and debates it
// (see dalf-c2-po.ts). Here that listening stage is a paper of its own:
// the same document, heard twice, with 14 multiple-choice items that
// check the understanding a compte rendu needs. About 30 minutes.
export const DALF_C2_CO: ExamPaper = {
  id: "co",
  kind: "listening",
  title: "Compréhension de l'oral",
  minutes: 30,
  group: 1,
  tasks: [
    {
      title: "Document sonore",
      instructions:
        "Vous allez entendre un document long (entretien radiophonique). Vous entendrez le document deux fois. Prenez des notes pendant les écoutes : ce document servira de base à l'épreuve de production orale (compte rendu, développement personnel et débat). Après la seconde écoute, répondez aux questions (1-14) en choisissant la bonne réponse (A, B, C ou D).",
      audio: [
        {
          label: "Entretien : la baisse de la natalité",
          lines: [
            {
              voice: "f",
              text: "Bonsoir à toutes et à tous, et bienvenue dans « Le Grand Entretien ». Ce soir, nous allons parler d'un sujet qui s'est invité dans le débat public ces dernières années : la baisse de la natalité. Longtemps présentée comme une exception en Europe, la France voit à son tour le nombre de naissances reculer d'année en année. Faut-il s'en inquiéter ? Faut-il au contraire s'en réjouir, comme le pensent certains, au nom de l'écologie ? Pour en parler, j'ai le plaisir de recevoir Étienne Morvan, démographe, qui a consacré l'essentiel de ses travaux aux comportements familiaux. Étienne Morvan, bonsoir.",
            },
            { voice: "m", text: "Bonsoir, et merci de l'invitation." },
            { voice: "f", text: "Commençons par le constat. Où en est-on exactement ?" },
            {
              voice: "m",
              text: "Le constat est assez net. La fécondité, c'est-à-dire le nombre moyen d'enfants par femme, tourne aujourd'hui autour de un virgule six, alors qu'elle frôlait encore deux il y a une quinzaine d'années. Pour situer les choses, le seuil de remplacement des générations, celui qui permet à une population de se maintenir sans apport extérieur, se situe à environ deux virgule un. Donc oui, nous sommes en dessous, et nettement. Mais je voudrais tout de suite mettre ce chiffre en perspective. D'abord, la France reste parmi les pays les plus féconds d'Europe : l'Italie ou l'Espagne sont autour de un virgule deux, et la Corée du Sud est même passée sous la barre de un. Ensuite, et c'est un point technique mais essentiel, l'indicateur que l'on cite tous les ans est sensible au calendrier des naissances. Si les femmes ont leurs enfants plus tard, l'indicateur baisse mécaniquement pendant quelques années, même si, au bout du compte, elles en ont autant. Le vrai juge de paix, c'est la descendance finale, c'est-à-dire le nombre d'enfants qu'une génération a eus à la fin de sa vie féconde. Et celle-là baisse beaucoup plus lentement.",
            },
            { voice: "f", text: "Donc on se ferait peur pour rien ?" },
            {
              voice: "m",
              text: "Non, je ne dirais pas ça. Je dis qu'il faut se méfier des lectures précipitées. Ce qui est nouveau, et qui m'interpelle bien davantage que le chiffre de l'année, c'est que dans les enquêtes, le nombre d'enfants que les jeunes adultes déclarent souhaiter commence lui aussi à baisser. Pendant des décennies, les Français disaient vouloir en moyenne un peu plus de deux enfants, et ils en avaient un peu moins : l'écart s'expliquait par des obstacles, le logement, le travail, la difficulté à trouver le bon partenaire. Aujourd'hui, c'est le désir lui-même qui s'érode, légèrement, mais de façon assez nette chez les moins de trente ans.",
            },
            { voice: "f", text: "Comment l'expliquez-vous ?" },
            {
              voice: "m",
              text: "Il n'y a pas d'explication unique, et je me méfie de ceux qui en proposent une. On entend souvent que c'est une question d'argent. C'est en partie vrai : le coût du logement dans les grandes villes pèse sur la décision d'avoir un deuxième ou un troisième enfant. Mais si l'argent expliquait tout, les ménages aisés auraient beaucoup plus d'enfants que les autres, et ce n'est pas vraiment le cas. Il y a aussi la question de l'égalité entre les femmes et les hommes. Les femmes ont gagné en autonomie professionnelle, mais dans beaucoup de couples, l'essentiel des tâches domestiques et des soins aux enfants leur incombe toujours. Les comparaisons internationales sont assez parlantes : ce sont souvent les pays où les femmes travaillent beaucoup, mais où le partage des tâches reste très inégal, qui ont la fécondité la plus faible. Enfin, il y a un facteur plus diffus, qu'on a du mal à mesurer : une forme d'incertitude sur l'avenir. Le climat, la précarité de l'emploi en début de carrière, le sentiment que le monde devient instable.",
            },
            {
              voice: "f",
              text: "L'inquiétude climatique, justement : on lit beaucoup que des jeunes renoncent à avoir des enfants pour des raisons écologiques.",
            },
            {
              voice: "m",
              text: "C'est un argument que l'on entend beaucoup, surtout dans les médias, et qui est bien réel chez une partie des jeunes diplômés. Mais quand on regarde les enquêtes à grande échelle, il pèse moins qu'on ne le croit. Il est cité, mais rarement comme raison principale. J'ajouterais, sur le fond, que l'argument mérite d'être discuté. L'empreinte écologique d'une population dépend bien davantage de son mode de consommation que de sa taille. Et les effets d'une baisse de la natalité sur les émissions ne se feraient sentir que dans plusieurs décennies, alors que l'urgence climatique, elle, se joue maintenant. Cela dit, je respecte tout à fait ce choix sur le plan individuel. Ce n'est pas au démographe de dire aux gens combien d'enfants ils devraient avoir.",
            },
            {
              voice: "f",
              text: "Venons-en aux conséquences. Une population qui fait moins d'enfants, c'est une population qui vieillit. Est-ce que c'est grave ?",
            },
            {
              voice: "m",
              text: "Il faut distinguer deux choses que le débat public confond souvent : la décroissance de la population et son vieillissement. La population française ne va pas s'effondrer dans les prochaines années. Grâce à l'allongement de l'espérance de vie et aux migrations, elle devrait rester à peu près stable pendant encore un bon moment. En revanche, le vieillissement, lui, est certain, et il est d'ailleurs déjà largement inscrit dans notre pyramide des âges : les générations nombreuses de l'après-guerre arrivent au grand âge. Les conséquences sont bien connues : le financement des retraites, puisque le rapport entre actifs et retraités se dégrade, mais aussi, et on en parle beaucoup moins, la prise en charge de la dépendance. Qui s'occupera des personnes très âgées dans vingt ans ? On manque déjà d'aides-soignants et d'aides à domicile. C'est là, à mon sens, que se situe le défi le plus concret.",
            },
            {
              voice: "f",
              text: "Face à cela, certains responsables politiques plaident pour une politique nataliste beaucoup plus volontariste. On a même entendu parler de « réarmement démographique ». Qu'en pensez-vous ?",
            },
            {
              voice: "m",
              text: "Je dirais d'abord que le vocabulaire guerrier me paraît malheureux. Faire des enfants n'est pas un devoir patriotique, et ce genre de discours a, historiquement, des antécédents peu glorieux. Sur le fond, l'expérience internationale montre que les primes à la naissance, les chèques versés aux familles, ont des effets faibles et souvent temporaires : elles avancent parfois la date d'une naissance, sans augmenter le nombre total d'enfants. On ne fait pas faire des enfants par décret. Ce qui fonctionne mieux, sur le long terme, ce sont les politiques qui permettent de concilier vie professionnelle et vie familiale : des places en crèche en nombre suffisant, un congé parental mieux rémunéré et mieux partagé entre les deux parents, une vraie politique du logement. Autrement dit, il ne s'agit pas de convaincre les gens de vouloir des enfants, mais de lever les obstacles pour ceux qui en veulent.",
            },
            {
              voice: "f",
              text: "Et l'immigration ? Elle est souvent présentée comme la solution évidente au vieillissement.",
            },
            {
              voice: "m",
              text: "C'est une partie de la réponse, et les chiffres le montrent : sans les migrations, plusieurs pays européens auraient déjà vu leur population diminuer. Mais il faut être honnête : l'immigration ne peut pas, à elle seule, enrayer le vieillissement. Les personnes qui arrivent vieillissent à leur tour, et pour maintenir constant le rapport entre actifs et retraités, il faudrait des flux d'une ampleur qu'aucun pays, politiquement, n'est prêt à accepter. L'immigration atténue donc le phénomène ; elle ne le supprime pas.",
            },
            { voice: "f", text: "Alors, au bout du compte, que faut-il faire ?" },
            {
              voice: "m",
              text: "Je crois qu'il faut changer de question. Plutôt que de se demander comment faire remonter la natalité coûte que coûte, demandons-nous comment organiser une société où il y aura durablement plus de personnes âgées. Cela suppose de repenser le travail des seniors, l'aménagement des villes, le logement, le financement de la dépendance. Ce n'est pas une fatalité, c'est un choix de société. Et c'est un choix que nous ferons d'autant mieux que nous le ferons sereinement, sans céder ni au catastrophisme ni au déni.",
            },
            { voice: "f", text: "Étienne Morvan, merci." },
          ],
        },
      ],
      items: [
        {
          n: 1,
          question: "Selon l'invité, la fécondité actuelle de la France…",
          options: [
            "a atteint le seuil de remplacement des générations.",
            "est désormais la plus faible d'Europe.",
            "reste supérieure à celle de nombreux pays européens, malgré sa baisse.",
            "est comparable à celle de la Corée du Sud.",
          ],
          answer: 2,
          explanation:
            "Autour de 1,6, elle est sous le seuil de 2,1, mais « la France reste parmi les pays les plus féconds d'Europe » (Italie et Espagne autour de 1,2 ; Corée du Sud sous 1).",
        },
        {
          n: 2,
          question: "Pourquoi l'indicateur annuel de fécondité doit-il être interprété avec prudence ?",
          options: [
            "Il baisse mécaniquement quand les naissances sont retardées, même si le nombre final d'enfants ne change pas.",
            "Il ne tient pas compte des naissances chez les femmes immigrées.",
            "Il n'est calculé que tous les dix ans.",
            "Il surestime le nombre d'enfants des femmes diplômées.",
          ],
          answer: 0,
          explanation:
            "L'indicateur est « sensible au calendrier des naissances » ; le « vrai juge de paix » est la descendance finale, qui baisse beaucoup plus lentement.",
        },
        {
          n: 3,
          question: "Qu'est-ce qui interpelle le plus le démographe ?",
          options: [
            "La forte baisse de la descendance finale.",
            "La hausse de l'âge moyen des mères.",
            "Le coût du logement dans les grandes villes.",
            "Le recul du nombre d'enfants que souhaitent les jeunes adultes.",
          ],
          answer: 3,
          explanation:
            "« Ce qui m'interpelle bien davantage que le chiffre de l'année », c'est que le nombre d'enfants souhaités « commence lui aussi à baisser ». La descendance finale, elle, baisse lentement.",
        },
        {
          n: 4,
          question: "Pendant des décennies, l'écart entre le nombre d'enfants désirés et le nombre d'enfants réels s'expliquait selon lui par…",
          options: [
            "un désintérêt croissant pour la vie de famille.",
            "des obstacles matériels et personnels.",
            "les insuffisances de la politique familiale.",
            "l'inquiétude face au changement climatique.",
          ],
          answer: 1,
          explanation:
            "« L'écart s'expliquait par des obstacles, le logement, le travail, la difficulté à trouver le bon partenaire. »",
        },
        {
          n: 5,
          question: "Quel argument oppose-t-il à l'idée que la baisse de la natalité serait avant tout une question d'argent ?",
          options: [
            "Les ménages aisés n'ont pas sensiblement plus d'enfants que les autres.",
            "Le logement coûte moins cher qu'autrefois.",
            "Les aides aux familles ont fortement augmenté.",
            "Les pays les plus riches ont la fécondité la plus élevée.",
          ],
          answer: 0,
          explanation:
            "« Si l'argent expliquait tout, les ménages aisés auraient beaucoup plus d'enfants que les autres, et ce n'est pas vraiment le cas. »",
        },
        {
          n: 6,
          question: "D'après les comparaisons internationales qu'il cite, la fécondité est souvent la plus faible dans les pays où…",
          options: [
            "les femmes travaillent peu.",
            "les politiques familiales sont les plus généreuses.",
            "les femmes travaillent beaucoup, mais où le partage des tâches reste très inégal.",
            "l'âge moyen au mariage est le plus élevé.",
          ],
          answer: 2,
          explanation:
            "Ce sont « les pays où les femmes travaillent beaucoup, mais où le partage des tâches reste très inégal, qui ont la fécondité la plus faible ».",
        },
        {
          n: 7,
          question: "Que pense-t-il du renoncement à avoir des enfants pour des raisons écologiques ?",
          options: [
            "C'est la cause principale de la baisse de la natalité.",
            "Ce motif existe, mais pèse moins dans les grandes enquêtes que dans les médias.",
            "C'est un choix individuel qu'il juge irresponsable.",
            "C'est un phénomène que les enquêtes n'ont jamais observé.",
          ],
          answer: 1,
          explanation:
            "L'argument est « bien réel chez une partie des jeunes diplômés », mais « il pèse moins qu'on ne le croit » et il dit respecter ce choix individuel.",
        },
        {
          n: 8,
          question: "Comment discute-t-il, sur le fond, le raisonnement écologique ?",
          options: [
            "Les enfants consomment moins que les adultes.",
            "Les émissions françaises sont négligeables à l'échelle mondiale.",
            "La population mondiale va bientôt diminuer d'elle-même.",
            "L'empreinte d'une population dépend surtout de sa consommation, et les effets d'une baisse des naissances seraient très tardifs.",
          ],
          answer: 3,
          explanation:
            "L'empreinte « dépend bien davantage de son mode de consommation que de sa taille », et les effets ne se feraient sentir « que dans plusieurs décennies ».",
        },
        {
          n: 9,
          question: "Quelle distinction juge-t-il indispensable ?",
          options: [
            "Entre la décroissance de la population, qui n'est pas imminente, et son vieillissement, qui est certain.",
            "Entre la natalité des villes et celle des campagnes.",
            "Entre le financement des retraites et celui de la santé.",
            "Entre les migrations temporaires et les migrations définitives.",
          ],
          answer: 0,
          explanation:
            "« La population française ne va pas s'effondrer » ; « en revanche, le vieillissement, lui, est certain ».",
        },
        {
          n: 10,
          question: "Quelle conséquence du vieillissement lui paraît la plus concrète, alors qu'on en parle peu ?",
          options: [
            "Le financement des retraites.",
            "La baisse de la consommation des ménages.",
            "La prise en charge des personnes très âgées dépendantes.",
            "La fermeture des écoles dans les campagnes.",
          ],
          answer: 2,
          explanation:
            "Les retraites sont « bien connues » ; « on en parle beaucoup moins » : la dépendance, avec un manque d'aides-soignants et d'aides à domicile, est « le défi le plus concret ».",
        },
        {
          n: 11,
          question: "Que reproche-t-il à l'expression « réarmement démographique » ?",
          options: [
            "Son caractère trop technique.",
            "Son vocabulaire guerrier, qui présente la naissance comme un devoir.",
            "Le fait qu'elle sous-estime le problème.",
            "Le fait qu'elle soit empruntée à un autre pays.",
          ],
          answer: 1,
          explanation:
            "« Le vocabulaire guerrier me paraît malheureux. Faire des enfants n'est pas un devoir patriotique. »",
        },
        {
          n: 12,
          question: "D'après l'expérience internationale, les primes à la naissance…",
          options: [
            "augmentent durablement le nombre d'enfants par femme.",
            "n'ont strictement aucun effet.",
            "coûtent moins cher que la création de crèches.",
            "modifient surtout le moment des naissances, pas leur nombre total.",
          ],
          answer: 3,
          explanation:
            "Leurs effets sont « faibles et souvent temporaires » : elles « avancent parfois la date d'une naissance, sans augmenter le nombre total d'enfants ».",
        },
        {
          n: 13,
          question: "Quelle est sa position sur l'immigration ?",
          options: [
            "Elle atténue le vieillissement sans pouvoir l'enrayer à elle seule.",
            "Elle est la solution évidente au vieillissement.",
            "Elle accélère le vieillissement.",
            "Elle n'a aucun effet sur l'évolution de la population.",
          ],
          answer: 0,
          explanation: "« L'immigration atténue donc le phénomène ; elle ne le supprime pas. »",
        },
        {
          n: 14,
          question: "Quelle conclusion tire-t-il de l'entretien ?",
          options: [
            "Il faut faire remonter la natalité coûte que coûte.",
            "Le vieillissement est une fatalité contre laquelle on ne peut rien.",
            "Il faut adapter la société au vieillissement, sans catastrophisme ni déni.",
            "Il faut miser avant tout sur l'immigration.",
          ],
          answer: 2,
          explanation:
            "Il propose de « changer de question » : organiser une société où il y aura durablement plus de personnes âgées, « ce n'est pas une fatalité, c'est un choix de société ».",
        },
      ],
    },
  ],
};
