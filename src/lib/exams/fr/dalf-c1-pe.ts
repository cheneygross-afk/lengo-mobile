// Synced from cheneygross-afk/lengo:src/lib/exams/fr/dalf-c1-pe.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// DALF C1 practice exam -- Production écrite.
// 2 h 30, 2 exercises, as in the real exam: a synthesis of two
// documents (about 220 words), then an argued essay on the same theme
// (at least 250 words). The real exam lets the candidate choose between
// two domains (lettres et sciences humaines, or sciences); this practice
// exam gives one dossier, in lettres et sciences humaines.
const DOSSIER = {
  label: "Dossier",
  title: "Le surtourisme",
  body:
    "DOCUMENT 1 — Sites naturels : l'heure des quotas\n\n" +
    "Il est sept heures du matin et le parking est déjà plein. Il y a quelques années encore, c'était le quotidien de l'une des criques les plus photographiées d'un parc national méditerranéen : jusqu'à deux mille cinq cents randonneurs par jour en été sur un sentier conçu pour quelques centaines, des racines mises à nu, des déchets abandonnés et des riverains excédés. Depuis que l'accès est soumis à une réservation gratuite en ligne, la fréquentation a été divisée par cinq les jours d'affluence, et les botanistes observent déjà le retour de la végétation sur les talus piétinés.\n\n" +
    "L'exemple a fait des émules. Îles, cols de montagne, villages perchés : de plus en plus de sites expérimentent des jauges, des navettes obligatoires ou des péages. Il faut dire que le phénomène est massif. Selon les estimations des professionnels du secteur, environ quatre-vingts pour cent de la fréquentation touristique se concentrent sur moins de vingt pour cent du territoire, et sur quelques semaines de l'année. Dans certaines communes du littoral, la population est multipliée par dix en août, avec ce que cela implique pour l'eau potable, la gestion des déchets ou les urgences médicales.\n\n" +
    "Les villes ne sont pas épargnées. Plusieurs métropoles ont relevé leur taxe de séjour et durci les règles applicables aux meublés de tourisme, accusés de vider les centres historiques de leurs habitants permanents et de faire flamber les loyers. Dans certains quartiers, un logement sur cinq serait désormais loué à la nuitée.\n\n" +
    "Ces mesures ne font cependant pas l'unanimité. Les commerçants redoutent une baisse de leur chiffre d'affaires, et plusieurs associations soulignent que la réservation obligatoire pénalise ceux qui sont peu à l'aise avec internet ou qui ne peuvent pas planifier leurs loisirs plusieurs semaines à l'avance. « On protège un site, mais on change aussi le public qui y a accès », résume un géographe spécialiste du tourisme. Les gestionnaires des espaces naturels, eux, assument : sans régulation, disent-ils, il n'y aurait bientôt plus rien à protéger, ni à visiter.\n\n" +
    "D'après un article de presse quotidienne régionale\n\n" +
    "DOCUMENT 2 — Le tourisme n'est pas un luxe\n\n" +
    "Il est devenu de bon ton, dans certains milieux, de dénoncer le « tourisme de masse ». L'expression elle-même n'est pas innocente : elle désigne toujours les autres, ceux qui voyagent en groupe, en camping-car ou en vol à bas prix, jamais le voyageur cultivé qui se croit différent. N'oublions pas que les congés payés, conquis en 1936, ont permis pour la première fois à des millions d'ouvriers de voir la mer. Le droit aux vacances est une conquête sociale ; il serait paradoxal d'en faire aujourd'hui un problème.\n\n" +
    "Je ne nie pas que certains lieux souffrent d'une fréquentation excessive. Mais le remède qu'on nous propose risque d'être pire que le mal. Relever les prix, multiplier les péages et les réservations, c'est réserver les plus beaux sites à ceux qui ont les moyens, le temps et les outils pour s'organiser. Un cadre réservera sans difficulté son créneau trois semaines à l'avance ; une famille qui ne connaît ses dates de congés qu'au dernier moment restera à la porte.\n\n" +
    "Le vrai problème n'est d'ailleurs pas le nombre de touristes, mais leur concentration. Tout le monde part en même temps, vers les mêmes endroits, parce que les calendriers scolaires et professionnels l'imposent et parce que les réseaux sociaux mettent en avant toujours les mêmes images. Agissons donc sur ces causes : étalons davantage les vacances, développons les transports collectifs vers des destinations moins connues, valorisons ces territoires de l'intérieur qui rêvent d'accueillir des visiteurs et voient leurs commerces fermer faute de clients.\n\n" +
    "Enfin, rappelons que le tourisme fait vivre des centaines de milliers de personnes, souvent dans des régions où il n'existe guère d'autre activité. Le réguler, oui ; le traiter comme une nuisance, non. Plutôt que de fermer des portes, ouvrons-en d'autres.\n\n" +
    "Tribune d'un élu d'un département rural, publiée dans un hebdomadaire national",
};

export const DALF_C1_PE: ExamPaper = {
  id: "pe",
  kind: "writing",
  title: "Production écrite",
  minutes: 150,
  group: 2,
  tasks: [
    {
      title: "Exercice 1 : synthèse",
      instructions:
        "Domaine : lettres et sciences humaines. Vous ferez une synthèse des documents proposés, en 220 mots environ (entre 200 et 240 mots). Pour cela, vous dégagerez les idées et les informations essentielles qu'ils contiennent, vous les regrouperez et les classerez en fonction du thème commun à tous ces documents, et vous les présenterez avec vos propres mots, sans ajouter d'autres idées ou informations, ni faire de commentaires personnels. Vous pouvez bien entendu réutiliser les « mots-clés » des documents, mais non des phrases ou des passages entiers. Donnez un titre à votre synthèse.",
      write: [
        {
          prompt:
            "Rédigez la synthèse des deux documents du dossier « Le surtourisme ». Votre texte doit comporter un titre, une introduction présentant la problématique commune, un développement organisé par thèmes (et non document par document) et une brève conclusion.",
          input: { text: DOSSIER },
          minWords: 200,
          maxWords: 240,
          rubric: [
            "Respecte la consigne : titre, longueur (220 mots ± 10 %), aucune opinion ni information extérieure aux documents.",
            "Dégage les informations essentielles des deux documents : saturation des sites et des villes, mesures de régulation, risque d'exclusion sociale, concentration des flux, solutions alternatives, poids économique du tourisme.",
            "Organise la synthèse par thèmes en confrontant les documents (points communs, divergences), avec une problématique et un plan clairs.",
            "Reformule avec ses propres mots, sans recopier de phrases ; utilise des articulateurs logiques variés (tandis que, en revanche, de même, quant à…).",
            "Maîtrise de la langue de niveau C1 : syntaxe complexe, nominalisations, lexique précis, orthographe et accords corrects.",
          ],
          modelAnswer:
            "Surtourisme : restreindre l'accès ou mieux répartir les visiteurs ?\n\n" +
            "Face à l'afflux de visiteurs sur certains sites, faut-il en limiter l'accès ou repenser la répartition des flux ? Les deux documents partagent le même constat, mais divergent sur les remèdes.\n\n" +
            "Tous deux reconnaissent que certains lieux sont saturés. Le premier évoque des espaces naturels dégradés, des communes littorales dont la population décuple en été et des centres-villes que les meublés de tourisme vident de leurs habitants. Le second admet lui aussi cette fréquentation excessive, mais l'attribue avant tout à la concentration des départs, imposée par les calendriers et amplifiée par les réseaux sociaux.\n\n" +
            "C'est sur les solutions que les points de vue s'opposent. Le premier texte présente favorablement les quotas, les réservations et la hausse des taxes, dont les effets écologiques sont encourageants, tout en mentionnant l'inquiétude des commerçants et le risque d'écarter certains publics. Le second fait de ce risque son argument central : de telles mesures réserveraient les plus beaux sites aux plus aisés et aux mieux organisés, au détriment d'un droit aux vacances conquis de haute lutte.\n\n" +
            "Son auteur préconise donc d'agir sur les causes : étaler les congés, développer les transports collectifs et mettre en valeur des territoires délaissés. Il rappelle enfin que de nombreuses régions vivent du tourisme, qu'il convient de réguler sans le traiter en nuisance.",
        },
      ],
    },
    {
      title: "Exercice 2 : essai argumenté",
      instructions:
        "Domaine : lettres et sciences humaines. Vous rédigerez un texte argumenté de 250 mots minimum, en réponse à la situation proposée. Votre texte doit présenter une argumentation claire et organisée, illustrée d'exemples.",
      write: [
        {
          prompt:
            "La municipalité de la ville où vous habitez envisage de limiter fortement la location de logements meublés aux touristes pour de courtes durées. Les avis des habitants sont partagés. Vous écrivez une lettre ouverte au maire, publiée sur le site de l'association des habitants de votre quartier, dans laquelle vous exposez votre point de vue de manière argumentée.",
          minWords: 250,
          maxWords: 350,
          rubric: [
            "Respecte le genre de la lettre ouverte : destinataire, formules d'appel et de congé adaptées, registre soutenu, présentation de l'auteur et de l'objet.",
            "Prend clairement position et développe au moins trois arguments, illustrés d'exemples précis.",
            "Prend en compte les arguments adverses (concession, réfutation) et propose éventuellement des solutions.",
            "Le texte est structuré en paragraphes, avec une progression logique et des articulateurs variés.",
            "Maîtrise de la langue de niveau C1 : subjonctif, concession (bien que, certes… mais, aussi… que), lexique précis, peu d'erreurs.",
          ],
          modelAnswer:
            "Monsieur le Maire,\n\n" +
            "Habitante du quartier Saint-Paul depuis quinze ans, je souhaite vous faire part de mon soutien au projet de limitation des meublés de tourisme, tout en vous soumettant quelques propositions pour qu'il atteigne réellement son but.\n\n" +
            "Je ne suis pas de ceux qui voient dans chaque touriste un intrus. Les visiteurs font vivre nos commerces et nos restaurants, et beaucoup d'entre nous louent ponctuellement leur appartement pendant leurs propres vacances, ce qui leur procure un complément de revenu bienvenu. Il serait injuste de les pénaliser.\n\n" +
            "Force est pourtant de constater que la situation a changé de nature. Dans ma rue, sur une trentaine de logements, neuf sont désormais loués à la nuitée toute l'année, souvent par des sociétés qui en possèdent plusieurs. Les conséquences sont visibles : l'école a fermé une classe à la rentrée, la boulangerie a cédé la place à une boutique de souvenirs, et les jeunes couples qui voudraient s'installer ne trouvent rien à un loyer abordable. Un quartier sans habitants n'est plus un quartier : c'est un décor.\n\n" +
            "C'est pourquoi je vous invite à distinguer clairement deux situations. D'un côté, le particulier qui loue sa résidence principale quelques semaines par an doit pouvoir continuer à le faire librement. De l'autre, la location permanente de logements entiers à des fins commerciales devrait être soumise à une autorisation strictement encadrée. Encore faudra-t-il se donner les moyens de contrôler : sans agents chargés de vérifier les annonces, la meilleure des réglementations resterait lettre morte.\n\n" +
            "Je suis convaincue qu'une telle mesure, loin de nuire à l'attractivité de notre ville, la préserverait. Les visiteurs viennent chercher un lieu vivant ; encore faut-il qu'il reste des gens pour le faire vivre.\n\n" +
            "Je vous prie d'agréer, Monsieur le Maire, l'expression de ma considération distinguée.\n\n" +
            "Camille Ferrand",
        },
      ],
    },
  ],
};
