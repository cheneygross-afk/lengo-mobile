// Synced from cheneygross-afk/lengo:src/lib/exams/fr/delf-b2-co.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// DELF B2 practice exam -- Compréhension de l'oral.
// About 30 minutes, 3 exercises, 19 items. The long documents are heard
// twice and the short ones once, as in the real exam.
export const DELF_B2_CO: ExamPaper = {
  id: "co",
  kind: "listening",
  title: "Compréhension de l'oral",
  minutes: 30,
  group: 1,
  tasks: [
    {
      title: "Exercice 1",
      instructions:
        "Vous allez entendre un entretien radiophonique. Vous aurez d'abord une minute pour lire les questions. Vous entendrez le document deux fois. Après la première écoute, vous aurez trois minutes pour commencer à répondre ; après la seconde écoute, encore cinq minutes pour compléter vos réponses. Choisissez la bonne réponse (A, B ou C).",
      audio: [
        {
          label: "Entretien",
          lines: [
            { voice: "f", text: "Bonsoir et bienvenue dans « Le Monde qui vient ». Mon invité ce soir est Paul Mercier, sociologue, qui publie une enquête sur les jeunes actifs qui quittent les grandes villes pour s'installer dans des villes moyennes. Paul Mercier, est-ce qu'on assiste vraiment à un exode urbain, comme on l'a beaucoup dit après la crise sanitaire ?" },
            { voice: "m", text: "Bonsoir. Je crois qu'il faut nuancer. Le mot « exode » laisse penser que les grandes métropoles se vident, ce qui n'est pas du tout le cas. Ce qu'on observe, c'est plutôt un déplacement assez modeste en volume, mais très visible, parce qu'il concerne une population qui parle beaucoup d'elle-même : des cadres, des diplômés, souvent trentenaires." },
            { voice: "f", text: "Et qu'est-ce qui les pousse à partir ?" },
            { voice: "m", text: "Le premier facteur, et de loin, c'est le logement. Dans les entretiens que nous avons menés, presque tous évoquent le moment où ils ont eu un enfant et où ils ont compris qu'ils ne pourraient jamais acheter plus de quarante mètres carrés à Paris ou à Lyon. Le télétravail n'a pas créé ce désir, il l'a simplement rendu possible." },
            { voice: "f", text: "Est-ce que ces départs se passent bien ?" },
            { voice: "m", text: "Pour la majorité, oui, mais avec des déceptions que les gens n'avaient pas anticipées. La plus fréquente concerne la vie sociale. On imagine qu'on va recréer facilement un cercle d'amis, et on découvre que, dans une ville de trente mille habitants, les réseaux sont déjà constitués depuis l'enfance. Plusieurs personnes m'ont dit s'être senties seules la première année, alors même que leur qualité de vie matérielle s'était améliorée." },
            { voice: "f", text: "Et comment les habitants voient-ils l'arrivée de ces nouveaux venus ?" },
            { voice: "m", text: "C'est ambivalent. Les élus sont en général ravis : ces familles remplissent les écoles et font vivre les commerces. Mais une partie des habitants leur reproche de faire monter les prix de l'immobilier. Dans certaines villes de Bretagne ou du Sud-Ouest, les jeunes du coin n'arrivent plus à se loger, ce qui crée de vraies tensions." },
            { voice: "f", text: "Votre livre s'achève sur une note plutôt optimiste, pourtant." },
            { voice: "m", text: "Oui, parce que je pense que ce mouvement peut être une chance, à condition qu'il soit accompagné. Si les villes moyennes construisent des logements accessibles et si les nouveaux arrivants s'engagent dans la vie locale, dans les associations par exemple, au lieu de vivre en circuit fermé, alors on peut rééquilibrer un pays qui s'est beaucoup trop concentré autour de quelques métropoles." },
          ],
        },
      ],
      layout: "choice",
      items: [
        {
          n: 1,
          source: 0,
          question: "Selon Paul Mercier, le terme d'« exode urbain »…",
          options: [
            "décrit bien la situation actuelle.",
            "exagère un phénomène limité mais très médiatisé.",
            "concerne surtout les personnes âgées.",
          ],
          answer: 1,
          explanation: "Il faut « nuancer » : le déplacement est « assez modeste en volume, mais très visible ».",
        },
        {
          n: 2,
          source: 0,
          question: "Quelle est, d'après lui, la raison principale de ces départs ?",
          options: [
            "Le développement du télétravail.",
            "Le désir de vivre près de la nature.",
            "La difficulté à se loger dans les grandes villes.",
          ],
          answer: 2,
          explanation: "« Le premier facteur, et de loin, c'est le logement. »",
        },
        {
          n: 3,
          source: 0,
          question: "Quel rôle a joué le télétravail ?",
          options: [
            "Il a permis de réaliser un souhait qui existait déjà.",
            "Il a fait naître l'envie de quitter la ville.",
            "Il n'a eu aucune influence.",
          ],
          answer: 0,
          explanation: "« Le télétravail n'a pas créé ce désir, il l'a simplement rendu possible. »",
        },
        {
          n: 4,
          source: 0,
          question: "Quelle déception les nouveaux arrivants évoquent-ils le plus souvent ?",
          options: [
            "Le manque de services publics.",
            "La difficulté à se faire des amis.",
            "Une baisse de leur niveau de vie.",
          ],
          answer: 1,
          explanation: "La déception « la plus fréquente concerne la vie sociale » : les réseaux sont déjà constitués.",
        },
        {
          n: 5,
          source: 0,
          question: "Qu'est-ce que les élus locaux apprécient dans ces arrivées ?",
          options: [
            "Elles font vivre les écoles et les commerces.",
            "Elles font baisser le chômage local.",
            "Elles attirent des touristes.",
          ],
          answer: 0,
          explanation: "« Ces familles remplissent les écoles et font vivre les commerces. »",
        },
        {
          n: 6,
          source: 0,
          question: "Que reprochent certains habitants aux nouveaux venus ?",
          options: [
            "De ne pas respecter les traditions locales.",
            "D'occuper les emplois des gens du coin.",
            "De provoquer une hausse des prix des logements.",
          ],
          answer: 2,
          explanation: "On leur reproche « de faire monter les prix de l'immobilier ».",
        },
        {
          n: 7,
          source: 0,
          question: "À quelle condition ce mouvement peut-il être positif, selon le sociologue ?",
          options: [
            "Si l'État finance le télétravail.",
            "Si les grandes métropoles limitent les loyers.",
            "Si l'on construit des logements abordables et si les arrivants s'impliquent localement.",
          ],
          answer: 2,
          explanation: "Il faut des « logements accessibles » et que les nouveaux arrivants « s'engagent dans la vie locale ».",
        },
      ],
    },
    {
      title: "Exercice 2",
      instructions:
        "Vous allez entendre une chronique radiophonique. Vous aurez d'abord une minute pour lire les questions. Vous entendrez le document deux fois. Choisissez la bonne réponse (A, B ou C).",
      audio: [
        {
          label: "Chronique",
          lines: [
            {
              voice: "f",
              text: "Dans notre chronique « Sciences en poche » aujourd'hui : l'ennui. Oui, l'ennui, ce sentiment que nous faisons tout pour éviter, téléphone à la main dès qu'on attend plus de trente secondes un bus ou un café. Et pourtant, de plus en plus de chercheurs pensent que nous avons tort. Une équipe britannique a mené une expérience désormais célèbre : elle a demandé à un premier groupe de participants de recopier pendant un quart d'heure des numéros de téléphone dans un annuaire, une tâche parfaitement ennuyeuse, puis de trouver le plus d'usages possibles pour deux gobelets en plastique. Un second groupe passait directement à l'exercice des gobelets. Résultat : ceux qui s'étaient ennuyés ont trouvé des idées plus nombreuses et plus originales. L'explication avancée, c'est que l'esprit, privé de stimulation, se met à vagabonder, et que c'est précisément dans ces moments que se font des associations inattendues. Attention, cela ne veut pas dire que tout ennui est bon. Quand il dure, quand il est subi, au travail par exemple, il est associé au stress et même à des troubles de la santé. Les chercheurs distinguent donc l'ennui chronique de ces petites pauses vides, que nos écrans ont presque fait disparaître. Leur conseil est simple : la prochaine fois que vous attendez quelque part, laissez votre téléphone dans votre poche, et regardez par la fenêtre. Votre cerveau, lui, ne perdra pas son temps.",
            },
          ],
        },
      ],
      layout: "choice",
      items: [
        {
          n: 8,
          source: 0,
          question: "Selon la chroniqueuse, quelle est notre attitude habituelle face à l'ennui ?",
          options: [
            "Nous cherchons à l'éviter à tout prix.",
            "Nous l'acceptons comme une pause nécessaire.",
            "Nous n'en avons pas conscience.",
          ],
          answer: 0,
          explanation: "Nous faisons « tout pour éviter » l'ennui, téléphone à la main dès qu'on attend.",
        },
        {
          n: 9,
          source: 0,
          question: "Dans l'expérience, que devait faire d'abord le premier groupe ?",
          options: [
            "Inventer des usages pour des gobelets.",
            "Accomplir une tâche répétitive et sans intérêt.",
            "Attendre sans rien faire dans une salle vide.",
          ],
          answer: 1,
          explanation: "Ils recopiaient des numéros de téléphone dans un annuaire, « une tâche parfaitement ennuyeuse ».",
        },
        {
          n: 10,
          source: 0,
          question: "Quel a été le résultat de l'expérience ?",
          options: [
            "Les deux groupes ont obtenu des résultats identiques.",
            "Le second groupe a été plus rapide.",
            "Le groupe qui s'était ennuyé s'est montré plus créatif.",
          ],
          answer: 2,
          explanation: "Ceux qui s'étaient ennuyés ont trouvé des idées « plus nombreuses et plus originales ».",
        },
        {
          n: 11,
          source: 0,
          question: "Comment les chercheurs expliquent-ils ce résultat ?",
          options: [
            "Sans stimulation, l'esprit vagabonde et fait des liens inattendus.",
            "La fatigue rend les participants moins prudents.",
            "Les participants avaient déjà vu l'exercice.",
          ],
          answer: 0,
          explanation: "« L'esprit, privé de stimulation, se met à vagabonder », d'où des « associations inattendues ».",
        },
        {
          n: 12,
          source: 0,
          question: "Quelle nuance la chroniqueuse apporte-t-elle ?",
          options: [
            "L'ennui n'est utile que chez les enfants.",
            "Un ennui long et subi peut nuire à la santé.",
            "Les résultats de l'expérience sont contestés.",
          ],
          answer: 1,
          explanation: "Quand il dure et qu'il est subi, l'ennui est « associé au stress et même à des troubles de la santé ».",
        },
        {
          n: 13,
          source: 0,
          question: "Que conseillent les chercheurs ?",
          options: [
            "Utiliser des applications de méditation.",
            "S'ennuyer volontairement un quart d'heure par jour au travail.",
            "Profiter des moments d'attente sans regarder son téléphone.",
          ],
          answer: 2,
          explanation: "« Laissez votre téléphone dans votre poche, et regardez par la fenêtre. »",
        },
      ],
    },
    {
      title: "Exercice 3",
      instructions:
        "Vous allez entendre trois documents courts. Vous entendrez chaque document une seule fois. Avant chaque document, vous aurez trente secondes pour lire les questions. Choisissez la bonne réponse (A, B ou C).",
      audio: [
        {
          label: "Document 1",
          lines: [
            {
              voice: "m",
              text: "Info trafic. La grève des contrôleurs aériens annoncée pour jeudi est maintenue, malgré une nouvelle réunion hier soir au ministère. La direction générale de l'aviation civile demande aux compagnies de réduire d'un tiers leurs vols au départ de Paris et de Marseille. Les passagers concernés seront prévenus directement par leur compagnie et pourront se faire rembourser ou reporter leur voyage sans frais. Il leur est vivement conseillé de ne pas se rendre à l'aéroport sans avoir vérifié l'état de leur vol.",
            },
          ],
        },
        {
          label: "Document 2",
          lines: [
            { voice: "f", text: "Franchement, cette réforme des rythmes scolaires, je n'en vois pas l'intérêt. On raccourcit les journées, d'accord, mais on rajoute le mercredi matin. Résultat, les enfants sont aussi fatigués qu'avant, et nous, les parents, on doit tout réorganiser." },
            { voice: "m", text: "Je ne suis pas tout à fait d'accord. Ma fille finit à quinze heures trente maintenant, et elle fait du théâtre à l'école après les cours, gratuitement. Avant, on n'aurait jamais eu les moyens de lui payer ça. Le problème, c'est plutôt que ça n'est pas pareil dans toutes les communes." },
          ],
        },
        {
          label: "Document 3",
          lines: [
            {
              voice: "f",
              text: "Vous avez entre dix-huit et trente ans et vous avez envie de vous rendre utile ? Le service civique vous propose des missions de six à douze mois dans une association, une collectivité ou un établissement public, en France ou à l'étranger. Aucun diplôme n'est demandé : ce qui compte, c'est votre motivation. Vous recevez une indemnité mensuelle d'environ six cents euros et votre engagement est reconnu dans votre parcours, par exemple pour valider certaines formations. Toutes les missions sont sur le site du service civique.",
            },
          ],
        },
      ],
      layout: "choice",
      items: [
        {
          n: 14,
          source: 0,
          question: "Qu'est-ce qui se passera jeudi ?",
          options: [
            "Tous les vols seront annulés à Paris et à Marseille.",
            "Une partie des vols sera supprimée.",
            "Les aéroports seront fermés au public.",
          ],
          answer: 1,
          explanation: "Les compagnies doivent réduire « d'un tiers » leurs vols.",
        },
        {
          n: 15,
          source: 0,
          question: "Que recommande-t-on aux passagers ?",
          options: [
            "De vérifier leur vol avant de partir à l'aéroport.",
            "D'arriver à l'aéroport trois heures à l'avance.",
            "De réserver dès maintenant un autre moyen de transport.",
          ],
          answer: 0,
          explanation: "Il est conseillé « de ne pas se rendre à l'aéroport sans avoir vérifié l'état de leur vol ».",
        },
        {
          n: 16,
          source: 1,
          question: "Que reproche la femme à la réforme ?",
          options: [
            "Elle coûte trop cher aux familles.",
            "Elle supprime les activités du mercredi.",
            "Elle ne diminue pas la fatigue des enfants.",
          ],
          answer: 2,
          explanation: "« Les enfants sont aussi fatigués qu'avant. »",
        },
        {
          n: 17,
          source: 1,
          question: "Quel est l'avis de l'homme ?",
          options: [
            "Il partage entièrement l'avis de la femme.",
            "Il y voit un avantage, mais regrette des inégalités entre communes.",
            "Il pense que la réforme est parfaite.",
          ],
          answer: 1,
          explanation: "Sa fille fait du théâtre gratuitement, mais « ça n'est pas pareil dans toutes les communes ».",
        },
        {
          n: 18,
          source: 2,
          question: "Pour faire un service civique, il faut…",
          options: [
            "avoir au moins le baccalauréat.",
            "avoir déjà travaillé dans une association.",
            "avoir entre 18 et 30 ans et être motivé.",
          ],
          answer: 2,
          explanation: "« Aucun diplôme n'est demandé : ce qui compte, c'est votre motivation. »",
        },
        {
          n: 19,
          source: 2,
          question: "Qu'est-ce que le volontaire reçoit en échange de sa mission ?",
          options: [
            "Une indemnité et une reconnaissance de son engagement.",
            "Un salaire équivalent au salaire minimum.",
            "Un logement gratuit à l'étranger.",
          ],
          answer: 0,
          explanation: "Une indemnité d'environ six cents euros et un engagement « reconnu dans votre parcours ».",
        },
      ],
    },
  ],
};
