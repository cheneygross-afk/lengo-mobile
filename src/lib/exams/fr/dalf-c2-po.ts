// Synced from cheneygross-afk/lengo:src/lib/exams/fr/dalf-c2-po.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// DALF C2 practice exam -- Production orale.
// The second half of the real exam's first épreuve, "Compréhension et
// production orales": after hearing the recorded document twice (the
// Compréhension de l'oral paper, dalf-c2-co.ts), the candidate has one
// hour to prepare, then about 30 minutes with the jury in three stages:
// a compte rendu of the document, a personal argument on a question it
// raises, and a debate with the jury.
const CARD = {
  label: "Sujet",
  title: "La baisse de la natalité",
  body:
    "Document sonore : entretien radiophonique avec Étienne Morvan, démographe (voir l'épreuve de compréhension de l'oral). Appuyez-vous sur les notes prises pendant les deux écoutes.\n\n" +
    "Problématique proposée pour le développement personnel :\n« Face au recul des naissances, faut-il chercher à relancer la natalité, ou plutôt adapter la société au vieillissement de sa population ? »",
};

export const DALF_C2_PO: ExamPaper = {
  id: "po",
  kind: "speaking",
  title: "Production orale",
  minutes: 30,
  prepMinutes: 60,
  group: 2,
  tasks: [
    {
      title: "Partie 1 : compte rendu",
      instructions:
        "Vous disposez d'une heure pour préparer les parties 1 et 2. Dans un premier temps, vous présenterez au jury le contenu du document sonore que vous avez entendu, de manière structurée et fidèle, sans y ajouter vos propres opinions (5 à 10 minutes).",
      speak: {
        prompt: "Faites le compte rendu de l'entretien radiophonique sur la baisse de la natalité.",
        material: [CARD],
        points: [
          "Présenter le document : nature, thème, intervenants.",
          "Restituer les idées principales de façon organisée, sans suivre forcément l'ordre de l'entretien.",
          "Rendre compte des nuances et des positions de l'invité (concessions, réserves, réfutations).",
          "Reformuler avec ses propres mots, en employant des verbes introducteurs précis (souligner, nuancer, récuser, préconiser…).",
          "Ne donner aucun avis personnel dans cette partie.",
        ],
        prepMinutes: 60,
        speakMinutes: 10,
        modelAnswer:
          "Le document que j'ai entendu est un entretien radiophonique tiré de l'émission « Le Grand Entretien », au cours duquel la journaliste interroge Étienne Morvan, démographe spécialiste des comportements familiaux, sur la baisse de la natalité en France. Je présenterai d'abord le constat qu'il dresse, puis les causes qu'il avance, et enfin les conséquences du phénomène et les réponses qu'il juge pertinentes.\n\n" +
          "S'agissant du constat, l'invité confirme que la fécondité a nettement reculé : elle avoisine aujourd'hui 1,6 enfant par femme, contre près de 2 une quinzaine d'années plus tôt, et se situe donc en deçà du seuil de remplacement des générations. Il invite toutefois à relativiser ce chiffre à deux égards. D'une part, la France demeure l'un des pays les plus féconds d'Europe. D'autre part, l'indicateur annuel est sensible au calendrier des naissances : lorsque les femmes retardent leurs maternités, il baisse mécaniquement, alors que la descendance finale des générations recule beaucoup plus lentement. Ce qui l'interpelle davantage, c'est le recul, dans les enquêtes, du nombre d'enfants souhaités par les jeunes adultes : jusqu'ici, des obstacles expliquaient l'écart entre désir et réalité ; désormais, c'est le désir lui-même qui s'érode.\n\n" +
          "Quant aux causes, il récuse toute explication unique. Le facteur économique, notamment le coût du logement, joue un rôle, mais ne saurait tout expliquer, puisque les ménages aisés n'ont guère plus d'enfants que les autres. Il insiste sur l'inégal partage des tâches domestiques, en s'appuyant sur des comparaisons internationales, et évoque enfin une incertitude diffuse face à l'avenir. Le renoncement pour motif écologique, très médiatisé, pèserait selon lui moins qu'on ne le croit ; il en discute d'ailleurs le bien-fondé, l'empreinte d'une population dépendant surtout de sa consommation, tout en précisant qu'il respecte ce choix individuel.\n\n" +
          "Enfin, concernant les conséquences, il distingue la décroissance de la population, qui n'est pas à l'ordre du jour grâce à l'allongement de la vie et aux migrations, et le vieillissement, déjà inscrit dans la pyramide des âges. Outre la question des retraites, il souligne celle, plus négligée, de la prise en charge de la dépendance. Il se montre critique envers le discours sur le « réarmement démographique », dont il désapprouve le vocabulaire guerrier, et rappelle que les primes à la naissance modifient surtout le calendrier des naissances. Il préconise plutôt des mesures facilitant la conciliation entre vie familiale et vie professionnelle : crèches, congé parental mieux partagé, logement. L'immigration, selon lui, atténue le vieillissement sans pouvoir l'enrayer.\n\n" +
          "En conclusion, il invite à changer de question : plutôt que de vouloir relancer la natalité coûte que coûte, il s'agit d'organiser sereinement une société durablement plus âgée.",
      },
    },
    {
      title: "Partie 2 : développement personnel",
      instructions:
        "Dans un deuxième temps, vous présenterez au jury votre point de vue sur la problématique proposée, sous la forme d'un exposé argumenté et structuré (environ 10 minutes). Vous pouvez vous appuyer sur le document, mais aussi sur vos connaissances, vos expériences et des exemples tirés d'autres pays.",
      speak: {
        prompt:
          "« Face au recul des naissances, faut-il chercher à relancer la natalité, ou plutôt adapter la société au vieillissement de sa population ? »",
        material: [CARD],
        points: [
          "Introduire le sujet et reformuler la problématique.",
          "Annoncer un plan et le suivre, avec des transitions claires.",
          "Défendre une position nuancée, en examinant les arguments opposés.",
          "Illustrer par des exemples précis (pays, politiques, expériences personnelles).",
          "Conclure en répondant clairement à la question et en ouvrant le débat.",
        ],
        prepMinutes: 0,
        speakMinutes: 10,
        modelAnswer:
          "Il y a quelques années, l'école primaire du village où j'ai grandi a fermé, faute d'élèves. La même année, la commune a inauguré une résidence pour personnes âgées. Ce petit fait local résume assez bien la question qui nous est posée : face au recul des naissances, faut-il tenter d'inverser la tendance, ou bien prendre acte du vieillissement et y adapter nos sociétés ? Je soutiendrai que cette alternative est en partie trompeuse : s'il est vain de vouloir relancer la natalité par la contrainte ou l'incitation financière, une société peut légitimement aider ceux qui veulent des enfants à en avoir, tout en se préparant résolument au vieillissement.\n\n" +
          "Commençons par examiner l'option nataliste. Ses partisans ne manquent pas d'arguments : une population qui vieillit, c'est moins d'actifs pour financer les retraites, moins d'innovation peut-être, et des territoires qui se vident. Je comprends cette inquiétude. Mais l'histoire montre que les politiques natalistes volontaristes ont rarement tenu leurs promesses. Les primes à la naissance, comme le rappelait le démographe, avancent les naissances plus qu'elles ne les multiplient. Et lorsque des États sont allés plus loin, en restreignant l'accès à la contraception ou en exaltant la maternité comme un devoir national, ils ont porté atteinte à des libertés fondamentales, pour des résultats souvent dérisoires. Avoir un enfant relève de la décision la plus intime qui soit ; il n'appartient pas à l'État de la dicter.\n\n" +
          "Cela ne signifie pas pour autant que la puissance publique doive rester les bras croisés. Il existe une différence entre pousser les gens à avoir des enfants et leur permettre d'avoir ceux qu'ils désirent. Les pays nordiques en offrent une bonne illustration : en développant des services de garde accessibles et en incitant les pères à prendre un congé parental, ils ont longtemps maintenu une fécondité relativement élevée, sans discours culpabilisant. À l'inverse, certains pays d'Asie orientale, où les femmes doivent encore choisir entre carrière et famille, connaissent des taux de fécondité historiquement bas, malgré des aides financières considérables. La leçon est claire : ce n'est pas l'argent versé qui compte, c'est la possibilité de concilier les différentes dimensions de sa vie.\n\n" +
          "Reste qu'aucune politique familiale, même réussie, ne fera disparaître le vieillissement : il est déjà inscrit dans notre pyramide des âges. Il faut donc, et c'est là l'essentiel, adapter la société. Cela passe par la valorisation des métiers du soin, aujourd'hui mal payés et peu attractifs, alors que nous en aurons un besoin croissant. Cela passe aussi par un aménagement des villes et des logements qui permette aux personnes âgées de rester autonomes plus longtemps, et par un regard différent sur les seniors : au Japon, par exemple, de nombreuses personnes âgées continuent d'exercer une activité choisie, qui les maintient en lien avec les autres. Enfin, une politique migratoire assumée et une véritable politique d'intégration feront partie de la réponse, même si elles ne suffiront pas à elles seules.\n\n" +
          "En définitive, je crois qu'il faut renoncer à l'illusion d'un retour en arrière démographique et cesser de voir dans le vieillissement une catastrophe. Il s'agit plutôt d'une transformation, qui nous oblige à repenser la solidarité entre les générations. Mon ancienne école est aujourd'hui une maison des associations où les retraités du village aident les enfants à faire leurs devoirs. Ce n'est peut-être pas un modèle, mais c'est une piste : une société vieillissante n'est pas condamnée à être une société triste.",
      },
    },
    {
      title: "Partie 3 : débat avec le jury",
      instructions:
        "Dans un troisième temps, vous débattrez avec le jury (10 à 15 minutes). Le jury pourra vous demander de préciser, de justifier ou de défendre votre point de vue, et vous opposer des arguments contraires.",
      speak: {
        prompt: "Débat avec le jury à partir de votre développement personnel.",
        points: [
          "Défendre et préciser sa position avec des arguments et des exemples.",
          "Réagir aux objections : concéder, nuancer, réfuter.",
          "Faire preuve d'aisance dans l'interaction, en reformulant si nécessaire.",
          "Adapter son registre à un échange formel avec le jury.",
        ],
        examinerQuestions: [
          "Vous refusez que l'État dicte le choix d'avoir des enfants. Mais toute politique familiale n'est-elle pas déjà une forme d'incitation ?",
          "Vous citez les pays nordiques, dont la fécondité a pourtant fortement baissé elle aussi. Votre exemple tient-il encore ?",
          "Valoriser les métiers du soin coûte cher. Qui doit payer ?",
          "Travailler plus longtemps : n'est-ce pas une manière élégante de dire qu'on repousse l'âge de la retraite ?",
          "Une population plus âgée n'est-elle pas, politiquement, une population plus conservatrice ?",
          "Dans votre pays, la natalité est-elle un sujet de débat public ?",
        ],
        prepMinutes: 0,
        speakMinutes: 15,
        modelAnswer:
          "— Toute politique familiale n'est-elle pas une incitation ?\n— D'une certaine façon, si, je vous l'accorde. Mais il y a une différence de nature entre réduire le coût d'un choix et faire pression pour qu'on le fasse. Une place en crèche ne pousse personne à avoir un enfant ; elle permet simplement à ceux qui en veulent un de ne pas sacrifier leur emploi.\n\n" +
          "— Les pays nordiques ont eux aussi vu leur fécondité baisser.\n— C'est exact, et c'est un argument sérieux. Leur exemple ne prouve pas que ces politiques suffisent à maintenir la natalité ; il montre plutôt qu'elles permettent de mieux résister. Et cela confirme, au fond, ma thèse : on ne pourra pas éviter le vieillissement, il faut donc s'y préparer.\n\n" +
          "— Qui doit payer la revalorisation des métiers du soin ?\n— La collectivité, inévitablement. On peut débattre du mode de financement, impôt ou cotisation, mais pas de l'existence du besoin. Ne rien faire coûte aussi : des familles, souvent des femmes, renoncent à travailler pour s'occuper d'un parent âgé.\n\n" +
          "— Travailler plus longtemps, c'est reculer l'âge de la retraite ?\n— Pas nécessairement. Je parlais d'une activité choisie, éventuellement à temps partiel, et non d'une obligation uniforme. Un couvreur de soixante-deux ans et un professeur d'université ne sont pas dans la même situation, et toute réforme qui l'ignore me paraîtrait injuste.\n\n" +
          "— Une population âgée serait plus conservatrice ?\n— C'est une idée répandue, mais je m'en méfie. Les retraités d'aujourd'hui ont eu vingt ans dans les années soixante-dix ; ils ne sont pas tous hostiles au changement. Le vrai risque, à mon sens, serait plutôt un déséquilibre de représentation, si les jeunes votent beaucoup moins que leurs aînés.\n\n" +
          "— La natalité fait-elle débat dans votre pays ?\n— Beaucoup moins qu'en France. Le débat porte davantage sur l'immigration et le logement, mais au fond, ce sont des questions étroitement liées.",
      },
    },
  ],
};
