// Synced from cheneygross-afk/lengo:src/lib/exams/fr/dalf-c2-ce.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper, ExamText } from "../types";

// DALF C2 practice exam -- Compréhension des écrits.
// The real DALF C2 has no separate reading paper: its second épreuve,
// "Compréhension et production écrites" (3 h 30), gives a dossier of
// texts of about 2,000 words from which the candidate writes a
// structured text of about 700 words (see dalf-c2-pe.ts). Here the
// reading of the dossier is a paper of its own: the same five
// documents, with 17 multiple-choice items that check the detailed,
// critical understanding the writing task needs. About 60 minutes.
export const DALF_C2_DOSSIER: ExamText[] = [
  {
    label: "Document 1",
    title: "La forêt française à l'épreuve du climat",
    body:
      "Pendant un siècle et demi, la forêt française n'a cessé de s'étendre. Couvrant à peine un huitième du territoire au milieu du XIXe siècle, elle en occupe aujourd'hui près d'un tiers, à la faveur de l'exode rural et de la déprise agricole, mais aussi de grands programmes de reboisement. Cette progression, discrète mais continue, a longtemps nourri une forme de tranquillité : quels que soient les débats sur la déforestation tropicale, la forêt métropolitaine, elle, se portait bien.\n\n" +
      "Cette certitude s'est fissurée en quelques années. Les sécheresses à répétition qu'a connues le pays depuis la fin des années 2010 ont affaibli des peuplements entiers, les rendant vulnérables à des ravageurs qu'ils toléraient jusque-là. Dans le Nord-Est, les épicéas, plantés en masse après-guerre bien en dessous de leur altitude naturelle, ont été décimés par les scolytes, de petits coléoptères qui creusent leurs galeries sous l'écorce : des versants entiers, rougis puis gris, ont dû être coupés en urgence. Les frênes succombent à un champignon venu d'Asie, la chalarose ; les hêtres de plaine montrent des signes de souffrance, et même certains chênes, réputés robustes, dépérissent dans les secteurs les plus secs.\n\n" +
      "Les chiffres de l'inventaire forestier national donnent la mesure du phénomène. La mortalité des arbres a fortement augmenté en une décennie, tandis que leur croissance ralentissait. Conséquence directe : la quantité de carbone absorbée chaque année par la forêt, sur laquelle la France comptait pour atteindre ses objectifs climatiques, a été pratiquement divisée par deux en une dizaine d'années. Le puits de carbone forestier, présenté comme un allié naturel, pourrait même, dans les scénarios les plus sombres, cesser de jouer son rôle.\n\n" +
      "À ces maux s'ajoute le feu. Longtemps cantonnés au pourtour méditerranéen, les grands incendies touchent désormais des régions jusque-là épargnées, des Landes à la Bretagne, en passant par le Jura. Or les forêts du Nord et de l'Ouest n'ont ni les équipements de surveillance ni la culture du risque de celles du Sud.\n\n" +
      "Faut-il pour autant parler de catastrophe ? Les forestiers rappellent que la forêt a toujours évolué et qu'elle dispose de capacités d'adaptation considérables. Mais ils soulignent aussi que la vitesse du changement climatique est sans précédent : les arbres que l'on plante aujourd'hui atteindront leur maturité vers la fin du siècle, dans un climat que personne ne peut décrire avec précision. C'est ce pari sur l'avenir, plus que la crise elle-même, qui divise aujourd'hui la profession.\n\n" +
      "D'après un article d'un magazine de vulgarisation scientifique",
  },
  {
    label: "Document 2",
    title: "« Nous plantons pour un climat que nous ne connaissons pas »",
    body:
      "Technicien forestier dans l'Est de la France depuis vingt-cinq ans, Marc Delorme gère plusieurs forêts communales durement touchées par les scolytes.\n\n" +
      "— Comment remplacer les peuplements qui disparaissent ?\n" +
      "— Toute la difficulté est là. Pendant des décennies, on a raisonné à partir d'un climat stable : on savait quelle essence convenait à quel sol, à quelle altitude. Aujourd'hui, ces repères ne valent plus. Nous expérimentons donc, sur de petites parcelles que nous appelons des « îlots d'avenir », des essences venues de régions plus chaudes et plus sèches : le cèdre de l'Atlas, certains pins méditerranéens, des chênes du Sud. C'est ce qu'on appelle la migration assistée : on aide les espèces à se déplacer plus vite qu'elles ne le feraient naturellement.\n\n" +
      "— N'est-ce pas risqué ?\n" +
      "— Si, bien sûr. Une essence adaptée à la sécheresse peut très bien ne pas supporter une gelée tardive, et nos hivers restent rudes. Sans compter les parasites qu'on pourrait introduire sans le vouloir. C'est pourquoi la règle d'or, pour moi, c'est la diversité. Un peuplement composé de cinq ou six essences n'aura peut-être pas le meilleur rendement, mais si l'une d'elles dépérit, les autres prendront le relais. C'est une assurance. L'erreur de l'après-guerre a été de tout miser sur une seule espèce ; ne la reproduisons pas avec une autre.\n\n" +
      "— Faut-il forcément replanter ?\n" +
      "— Pas toujours, loin de là. Quand il reste des semenciers, la forêt se régénère souvent d'elle-même, et ces jeunes arbres issus du milieu sont généralement plus vigoureux que des plants de pépinière. Le problème, c'est que nous ne les laissons pas grandir. Les populations de cerfs et de chevreuils ont explosé en quarante ans ; ils broutent les jeunes pousses, préférentiellement celles des essences les plus rares, précisément celles qui nous intéressent. Sur certaines parcelles, sans clôture, rien ne pousse. Et une clôture coûte parfois plus cher que la plantation elle-même. On parle beaucoup du climat, à juste titre, mais l'équilibre entre la forêt et le gibier est, à court terme, notre premier sujet de préoccupation.\n\n" +
      "Propos recueillis par un quotidien régional",
  },
  {
    label: "Document 3",
    title: "Ne transformons pas nos forêts en champs d'arbres",
    body:
      "Sous couvert d'adapter la forêt au changement climatique, on est en train de la livrer à une logique industrielle qui risque d'aggraver le mal qu'elle prétend combattre. Les aides publiques au renouvellement forestier ont trop souvent financé des coupes rases de peuplements jugés « dépérissants » ou « pauvres », remplacés par des plantations monospécifiques d'essences à croissance rapide, alignées au cordeau. Certaines de ces parcelles n'étaient pourtant ni malades ni improductives : elles étaient simplement moins rentables à court terme.\n\n" +
      "Une coupe rase n'est pas un acte anodin. Elle met le sol à nu, l'expose au soleil et à l'érosion, libère une partie du carbone qu'il contenait et détruit en quelques jours un écosystème qui avait mis des décennies à se constituer. Les jeunes plants, privés de l'ombre de leurs aînés, souffrent davantage des sécheresses ; les échecs de plantation se multiplient d'ailleurs ces dernières années. Quant à la biodiversité, elle ne survit pas dans des rangées d'arbres du même âge, sans bois mort ni vieux arbres à cavités.\n\n" +
      "Il existe pourtant une autre voie, pratiquée de longue date par certains forestiers : la sylviculture dite « à couvert continu ». Elle consiste à prélever les arbres un par un ou par petits groupes, en maintenant en permanence un couvert forestier, en mélangeant les essences et les âges, et en s'appuyant autant que possible sur la régénération naturelle. Moins spectaculaire qu'un chantier de plantation, elle demande davantage de savoir-faire et de patience. Mais elle produit du bois de qualité, préserve les sols et rend les peuplements plus résistants aux aléas.\n\n" +
      "Nous ne demandons pas de mettre la forêt sous cloche : le bois est un matériau précieux, renouvelable, qu'il serait absurde de remplacer par du béton ou de l'acier. Nous demandons que l'argent public cesse de financer des pratiques qui fragilisent les forêts, et qu'il soit conditionné à des critères écologiques exigeants. La forêt n'est pas un simple stock de carbone ou de matière première : c'est un milieu vivant, dont nous ne connaissons encore qu'imparfaitement le fonctionnement. Face à l'incertitude, l'humilité devrait être notre premier principe de gestion.\n\n" +
      "Tribune signée par un collectif de naturalistes, de forestiers et de scientifiques, publiée dans un quotidien national",
  },
  {
    label: "Document 4",
    title: "Repères : la forêt et la filière bois en France",
    body:
      "• Surface : la forêt couvre environ 31 % du territoire métropolitain, ce qui en fait l'un des pays les plus boisés d'Europe occidentale. Elle est composée majoritairement de feuillus (chênes, hêtres, châtaigniers), les résineux étant concentrés en montagne et dans quelques grands massifs plantés.\n\n" +
      "• Propriété : environ trois quarts de la forêt métropolitaine appartiennent à des propriétaires privés, au nombre de plus de trois millions. La plupart d'entre eux possèdent moins de quatre hectares, souvent hérités, et n'en assurent aucune gestion suivie. Le quart restant est public : forêts domaniales (propriété de l'État) et forêts des collectivités, essentiellement communales.\n\n" +
      "• Économie : la filière forêt-bois emploie environ 400 000 personnes, de la sylviculture à l'ameublement en passant par la construction et le papier. Paradoxalement, malgré l'étendue de sa forêt, la France importe une large part des produits bois transformés qu'elle consomme, et sa balance commerciale dans ce secteur est déficitaire : elle exporte des grumes brutes et réimporte des produits à plus forte valeur ajoutée.\n\n" +
      "• Usages : le bois récolté sert principalement à la construction et à l'ameublement (bois d'œuvre), à l'industrie du papier et des panneaux (bois d'industrie) et au chauffage (bois énergie). Les usages de longue durée, comme la construction, permettent de stocker le carbone pendant plusieurs décennies.\n\n" +
      "• Politiques publiques : un objectif de plantation d'un milliard d'arbres en dix ans a été annoncé au début des années 2020. Il fait l'objet de débats, tant sur sa faisabilité (disponibilité des plants, main-d'œuvre, réussite des plantations) que sur les pratiques qu'il encourage.\n\n" +
      "Synthèse établie à partir de données publiques",
  },
  {
    label: "Document 5",
    title: "À qui appartient la forêt ?",
    body:
      "On a longtemps parlé de la forêt comme d'un espace de production. Elle est devenue, pour beaucoup de Français, un espace de loisir et presque de refuge. Selon les enquêtes, une large majorité d'entre eux s'y rendent au moins une fois par an, et les confinements successifs ont renforcé cet attachement : privés de mouvement, nombre de citadins ont redécouvert le bois le plus proche comme on redécouvre un jardin oublié. Des pratiques nouvelles sont apparues, de la « sylvothérapie », qui prête aux arbres des vertus apaisantes, aux bivouacs, aux courses d'orientation ou au VTT de descente.\n\n" +
      "Cette affection nouvelle n'est pas sans ambiguïté. Le promeneur aime la forêt, mais il aime une certaine forêt : celle des grands arbres, des sentiers ombragés, du silence. Le bruit d'une abatteuse, la vue d'une parcelle exploitée, les ornières laissées par les engins le heurtent, comme si l'on portait atteinte à un bien qui lui appartient. Il ignore souvent que la forêt qu'il parcourt est, aux trois quarts, une propriété privée, et que les arbres qu'il admire ont été plantés, éclaircis, sélectionnés par des générations de forestiers. De leur côté, les gestionnaires vivent mal d'être perçus comme des saccageurs, alors qu'ils ont le sentiment de faire précisément ce qui maintient la forêt en état.\n\n" +
      "Les conflits d'usage se multiplient : chasseurs et randonneurs se disputent les week-ends d'automne, les propriétaires se plaignent des déchets et des chemins défoncés, les associations dénoncent des coupes qu'elles jugent excessives. Derrière ces querelles se profile une question plus profonde : à qui appartient la forêt ? Juridiquement, la réponse est simple. Symboliquement, elle l'est beaucoup moins. Pour une part croissante de la population, la forêt relève d'un patrimoine commun, au même titre que les paysages ou l'air que l'on respire, et l'idée qu'on puisse en disposer sans rendre de comptes paraît de moins en moins acceptable.\n\n" +
      "Il serait vain de vouloir trancher ce débat une fois pour toutes. Mais on peut au moins souhaiter que ceux qui aiment la forêt et ceux qui en vivent apprennent à se parler. Expliquer une coupe avant de la réaliser, associer les habitants aux choix de gestion, ouvrir les chantiers au public : ces gestes simples, encore rares, feraient sans doute davantage pour la forêt que bien des plans nationaux.\n\n" +
      "Extrait d'un essai consacré aux relations entre les Français et leurs paysages",
  },
];

export const DALF_C2_CE: ExamPaper = {
  id: "ce",
  kind: "reading",
  title: "Compréhension des écrits",
  minutes: 60,
  group: 1,
  tasks: [
    {
      title: "Dossier : la forêt face au changement climatique",
      instructions:
        "Lisez attentivement les cinq documents du dossier. Ce dossier servira de base à l'épreuve de production écrite. Répondez ensuite aux questions (1-17) en choisissant la bonne réponse (A, B, C ou D).",
      texts: DALF_C2_DOSSIER,
      items: [
        {
          n: 1,
          source: 0,
          question: "Selon le document 1, la progression de la forêt française depuis le XIXe siècle…",
          options: [
            "s'explique uniquement par les programmes de reboisement.",
            "a longtemps donné le sentiment que la forêt métropolitaine ne courait aucun danger.",
            "s'est brutalement interrompue à la fin des années 2010.",
            "a été freinée par la déforestation tropicale.",
          ],
          answer: 1,
          explanation:
            "« Cette progression […] a longtemps nourri une forme de tranquillité : […] la forêt métropolitaine, elle, se portait bien. » Elle tient à plusieurs causes, pas seulement au reboisement.",
        },
        {
          n: 2,
          source: 0,
          question: "Pourquoi les épicéas du Nord-Est ont-ils été particulièrement touchés ?",
          options: [
            "Ils avaient été plantés en dehors de leurs conditions naturelles, puis affaiblis par les sécheresses.",
            "Ils ont été victimes d'un champignon venu d'Asie.",
            "Ils ont été détruits par des incendies.",
            "Ils étaient trop vieux pour résister aux tempêtes.",
          ],
          answer: 0,
          explanation:
            "Plantés « bien en dessous de leur altitude naturelle », affaiblis par les sécheresses, ils ont été décimés par les scolytes. Le champignon (chalarose) touche les frênes.",
        },
        {
          n: 3,
          source: 0,
          question: "Pourquoi l'évolution du puits de carbone forestier est-elle préoccupante ?",
          options: [
            "Parce que la forêt émet désormais plus de carbone qu'elle n'en absorbe.",
            "Parce que la récolte de bois a été divisée par deux.",
            "Parce que la France comptait sur lui pour tenir ses engagements climatiques.",
            "Parce que l'inventaire forestier a cessé de le mesurer.",
          ],
          answer: 2,
          explanation:
            "Le carbone absorbé, « sur laquelle la France comptait pour atteindre ses objectifs climatiques », a presque été divisé par deux. Que la forêt cesse de jouer son rôle n'est envisagé que dans « les scénarios les plus sombres ».",
        },
        {
          n: 4,
          source: 0,
          question: "D'après le document 1, ce qui divise aujourd'hui les forestiers, c'est surtout…",
          options: [
            "la réalité de la crise sanitaire des forêts.",
            "la responsabilité des ravageurs.",
            "le financement de la lutte contre les incendies.",
            "la manière de parier sur un climat futur incertain.",
          ],
          answer: 3,
          explanation:
            "« C'est ce pari sur l'avenir, plus que la crise elle-même, qui divise aujourd'hui la profession. »",
        },
        {
          n: 5,
          source: 1,
          question: "Qu'est-ce que la « migration assistée » évoquée par Marc Delorme ?",
          options: [
            "Le déplacement des forestiers vers les régions les plus touchées.",
            "L'introduction d'essences venues de régions plus chaudes pour accélérer leur déplacement naturel.",
            "Le transport des grumes vers les scieries étrangères.",
            "Le retour des essences locales sur leurs terres d'origine.",
          ],
          answer: 1,
          explanation:
            "« On aide les espèces à se déplacer plus vite qu'elles ne le feraient naturellement », en plantant cèdres, pins méditerranéens ou chênes du Sud.",
        },
        {
          n: 6,
          source: 1,
          question: "Pourquoi Marc Delorme fait-il de la diversité des essences sa « règle d'or » ?",
          options: [
            "Parce qu'elle permet de limiter les risques si une essence dépérit.",
            "Parce qu'elle offre le meilleur rendement possible.",
            "Parce qu'elle est imposée par la réglementation.",
            "Parce qu'elle empêche toute introduction de parasites.",
          ],
          answer: 0,
          explanation:
            "Un peuplement mélangé « n'aura peut-être pas le meilleur rendement », mais si une essence dépérit, « les autres prendront le relais. C'est une assurance. »",
        },
        {
          n: 7,
          source: 1,
          question: "Quelle « erreur de l'après-guerre » le technicien redoute-t-il de voir se reproduire ?",
          options: [
            "La plantation d'essences venues de l'étranger.",
            "L'abandon de la régénération naturelle.",
            "La dépendance à une seule essence.",
            "La coupe des forêts anciennes.",
          ],
          answer: 2,
          explanation:
            "« L'erreur de l'après-guerre a été de tout miser sur une seule espèce ; ne la reproduisons pas avec une autre. »",
        },
        {
          n: 8,
          source: 1,
          question: "Selon Marc Delorme, quel est à court terme le principal obstacle au renouvellement des forêts ?",
          options: [
            "Le prix élevé des plants de pépinière.",
            "Le manque de semenciers.",
            "Les gelées tardives.",
            "La surpopulation de cerfs et de chevreuils.",
          ],
          answer: 3,
          explanation:
            "Les cervidés broutent les jeunes pousses : « l'équilibre entre la forêt et le gibier est, à court terme, notre premier sujet de préoccupation ».",
        },
        {
          n: 9,
          source: 2,
          question: "Que reprochent les auteurs du document 3 aux aides publiques au renouvellement forestier ?",
          options: [
            "D'être trop faibles pour être efficaces.",
            "D'avoir financé le remplacement de peuplements parfois sains par des monocultures.",
            "D'avoir interdit les coupes rases.",
            "D'avoir favorisé les propriétaires publics au détriment des privés.",
          ],
          answer: 1,
          explanation:
            "Elles ont financé des coupes rases suivies de « plantations monospécifiques », alors que certaines parcelles « n'étaient ni malades ni improductives ».",
        },
        {
          n: 10,
          source: 2,
          question: "Parmi les effets des coupes rases, le document 3 ne mentionne PAS…",
          options: [
            "l'exposition du sol à l'érosion.",
            "la libération d'une partie du carbone du sol.",
            "l'augmentation du risque d'incendie.",
            "la fragilité accrue des jeunes plants face aux sécheresses.",
          ],
          answer: 2,
          explanation:
            "La tribune cite l'érosion, le carbone libéré, la destruction de l'écosystème et la vulnérabilité des jeunes plants privés d'ombre, mais pas le risque d'incendie.",
        },
        {
          n: 11,
          source: 2,
          question: "La sylviculture « à couvert continu » consiste notamment à…",
          options: [
            "maintenir en permanence un couvert forestier en prélevant les arbres de façon sélective.",
            "planter des essences à croissance rapide sous les arbres existants.",
            "interdire toute exploitation du bois.",
            "replanter immédiatement après chaque coupe.",
          ],
          answer: 0,
          explanation:
            "Elle prélève « les arbres un par un ou par petits groupes, en maintenant en permanence un couvert forestier », avec des essences et des âges mélangés.",
        },
        {
          n: 12,
          source: 2,
          question: "Quelle est la position des auteurs de la tribune sur l'exploitation du bois ?",
          options: [
            "Ils souhaitent la suspendre tant que la forêt n'est pas rétablie.",
            "Ils la jugent incompatible avec la protection de la biodiversité.",
            "Ils veulent la réserver aux forêts publiques.",
            "Ils l'approuvent, à condition qu'elle respecte des critères écologiques exigeants.",
          ],
          answer: 3,
          explanation:
            "« Nous ne demandons pas de mettre la forêt sous cloche : le bois est un matériau précieux » ; ils demandent que l'argent public soit « conditionné à des critères écologiques exigeants ».",
        },
        {
          n: 13,
          question: "Sur quel point les documents 2 et 3 se rejoignent-ils ?",
          options: [
            "L'intérêt de la régénération naturelle et du mélange des essences.",
            "La nécessité d'introduire massivement des essences méditerranéennes.",
            "Le caractère prioritaire de la lutte contre les incendies.",
            "L'efficacité des plantations en ligne.",
          ],
          answer: 0,
          explanation:
            "Le technicien défend la diversité et les jeunes arbres « issus du milieu » ; la tribune prône le mélange des essences et la régénération naturelle.",
        },
        {
          n: 14,
          source: 3,
          question: "Quel paradoxe le document 4 met-il en évidence ?",
          options: [
            "La forêt française recule alors que la filière bois embauche.",
            "La France possède une grande forêt mais importe une large part de ses produits bois transformés.",
            "Les forêts publiques sont plus étendues que les forêts privées.",
            "Le bois énergie stocke plus de carbone que le bois d'œuvre.",
          ],
          answer: 1,
          explanation:
            "« Paradoxalement, malgré l'étendue de sa forêt, la France importe une large part des produits bois transformés » : elle exporte des grumes et réimporte des produits à plus forte valeur ajoutée.",
        },
        {
          n: 15,
          source: 3,
          question: "D'après le document 4, quelle caractéristique de la propriété forestière complique la gestion des forêts ?",
          options: [
            "La forêt appartient majoritairement à l'État.",
            "Les forêts communales sont trop vastes pour être gérées.",
            "Beaucoup de petits propriétaires privés n'assurent aucune gestion suivie de leur parcelle.",
            "Les propriétaires privés sont trop peu nombreux.",
          ],
          answer: 2,
          explanation:
            "Trois quarts de la forêt sont privés, répartis entre plus de trois millions de propriétaires, dont la plupart possèdent moins de quatre hectares et « n'en assurent aucune gestion suivie ».",
        },
        {
          n: 16,
          source: 4,
          question: "Selon le document 5, l'attachement croissant des Français à la forêt…",
          options: [
            "les conduit à mieux comprendre le travail des forestiers.",
            "s'accompagne souvent d'une méconnaissance de la propriété et de la gestion forestières.",
            "s'est affaibli depuis la fin des confinements.",
            "concerne surtout les propriétaires forestiers.",
          ],
          answer: 1,
          explanation:
            "Le promeneur « ignore souvent » que la forêt est aux trois quarts privée et que les arbres qu'il admire ont été « plantés, éclaircis, sélectionnés » par des forestiers.",
        },
        {
          n: 17,
          source: 4,
          question: "Que préconise l'auteur du document 5 pour apaiser les conflits d'usage ?",
          options: [
            "Interdire la chasse pendant les week-ends.",
            "Clarifier le statut juridique des forêts.",
            "Adopter un nouveau plan national pour la forêt.",
            "Instaurer un dialogue entre usagers et gestionnaires, par exemple en expliquant les coupes.",
          ],
          answer: 3,
          explanation:
            "Il souhaite que ceux qui aiment la forêt et ceux qui en vivent « apprennent à se parler » : expliquer une coupe, associer les habitants, ouvrir les chantiers. Ces gestes feraient plus « que bien des plans nationaux ».",
        },
      ],
    },
  ],
};
