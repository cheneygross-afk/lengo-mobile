// Synced from cheneygross-afk/lengo:src/lib/exams/fr/dalf-c2-pe.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";
import { DALF_C2_DOSSIER } from "./dalf-c2-ce";

// DALF C2 practice exam -- Production écrite.
// The second half of the real exam's second épreuve, "Compréhension et
// production écrites" (3 h 30 in all): from the dossier read in the
// Compréhension des écrits paper (dalf-c2-ce.ts), the candidate writes
// a structured text of about 700 words in a given genre and situation.
// The real exam offers two domains; this practice exam gives one
// dossier, in lettres et sciences humaines. About 2 h 30 of the 3 h 30.
const DOSSIER_TEXT = {
  label: "Dossier",
  title: "La forêt face au changement climatique",
  body: DALF_C2_DOSSIER.map((d) => `${d.label?.toUpperCase()} — ${d.title}\n\n${d.body}`).join("\n\n"),
};

export const DALF_C2_PE: ExamPaper = {
  id: "pe",
  kind: "writing",
  title: "Production écrite",
  minutes: 150,
  group: 2,
  tasks: [
    {
      title: "Production d'un texte structuré",
      instructions:
        "Domaine : lettres et sciences humaines. À partir des documents du dossier, vous rédigerez un texte structuré d'environ 700 mots, en respectant le genre et la situation indiqués. Vous utiliserez les informations et les arguments du dossier, mais sans recopier de passages entiers, et vous les intégrerez à votre propre réflexion.",
      write: [
        {
          prompt:
            "Vous êtes adjoint(e) au maire chargé(e) de l'environnement dans une commune de moyenne montagne, propriétaire d'une forêt communale de 400 hectares. Sur l'un des versants, une quarantaine d'hectares d'épicéas ont été tués par les scolytes. Le conseil municipal doit choisir entre deux options : couper l'ensemble des parcelles touchées et les replanter en une essence à croissance rapide, avec l'aide de financements publics, ou adopter une gestion progressive, à couvert continu, fondée sur le mélange des essences. Dans l'éditorial du bulletin municipal, vous présentez aux habitants les enjeux de cette décision et vous défendez, de façon argumentée, l'option que vous soutiendrez au conseil.",
          input: { text: DOSSIER_TEXT },
          minWords: 630,
          maxWords: 850,
          rubric: [
            "Respecte la situation et le genre de l'éditorial de bulletin municipal : titre, adresse aux habitants, registre soutenu mais accessible, signature, longueur (environ 700 mots).",
            "Présente les enjeux de façon claire et honnête, y compris les arguments de l'option qu'il ne retient pas.",
            "Exploite le dossier avec pertinence (dépérissement, diversité des essences, sols, gibier, usages, filière bois) sans le recopier ni le résumer document par document.",
            "Développe une argumentation personnelle, rigoureuse et nuancée, qui débouche sur des propositions concrètes.",
            "Texte structuré et cohérent : progression, transitions, paragraphes équilibrés, conclusion qui élargit.",
            "Maîtrise de la langue de niveau C2 : précision lexicale, richesse syntaxique, variété stylistique, quasi-absence d'erreurs.",
          ],
          modelAnswer:
            "Notre forêt, un héritage à transmettre\n\n" +
            "Chères habitantes, chers habitants,\n\n" +
            "Il suffit de monter au col de la Croix pour le constater : sur le versant nord de notre forêt communale, les épicéas plantés par nos grands-parents ont viré au gris. En trois étés, les scolytes ont gagné une quarantaine d'hectares. Ce spectacle, beaucoup d'entre vous me l'ont dit, serre le cœur. Il nous oblige surtout à prendre une décision qui engagera la commune pour un siècle. Le conseil municipal en débattra le mois prochain ; je souhaite, d'ici là, vous en exposer les enjeux en toute transparence, et vous dire quelle option je défendrai.\n\n" +
            "Deux voies s'offrent à nous. La première consiste à couper l'ensemble des parcelles touchées, puis à les replanter en une essence à croissance rapide, avec l'appui d'aides publiques qui couvriraient l'essentiel des frais. Elle a le mérite de la simplicité : dans quarante ans, la commune disposerait à nouveau d'une ressource exploitable. La seconde consiste à ne couper que les arbres morts ou condamnés, à conserver le couvert forestier partout où c'est possible et à miser sur un mélange d'essences, en combinant régénération naturelle et plantations ponctuelles d'essences plus résistantes à la sécheresse. Plus lente, elle exige davantage de suivi et rapportera moins dans l'immédiat.\n\n" +
            "Je ne caricaturerai pas la première option. Ceux qui la soutiennent au sein du conseil ont raison de rappeler que notre forêt n'est pas un décor : elle a financé, pendant des décennies, une bonne part de l'entretien de nos routes et de notre école, et le bois est un matériau d'avenir, renouvelable, qui stocke le carbone lorsqu'il sert à construire. Renoncer à toute exploitation serait une faute, et personne ici ne le propose.\n\n" +
            "Mais nous ne pouvons pas répéter l'erreur qui nous a menés là où nous en sommes. Si nos épicéas meurent aujourd'hui, c'est parce qu'on les a plantés en masse, tous ensemble, loin des conditions qui leur conviennent. Remplacer une monoculture par une autre, ce serait parier tout l'avenir de notre forêt sur une seule essence, dans un climat que nul ne peut prévoir. Les forestiers que nous avons consultés le disent sans détour : face à l'incertitude, la diversité est la meilleure des assurances. Une forêt mélangée produit peut-être un peu moins, mais elle ne s'effondre pas d'un seul coup.\n\n" +
            "Il y a aussi la question des sols. Une coupe rase sur nos pentes exposerait la terre au ruissellement, avec des conséquences que les riverains du ruisseau des Granges connaissent bien depuis les orages de l'an dernier. Les jeunes plants, privés d'ombre, souffriraient davantage des sécheresses, et les échecs de plantation se multiplient. Économiser aujourd'hui pour replanter deux fois demain ne serait pas une bonne affaire.\n\n" +
            "Je proposerai donc au conseil d'adopter la seconde voie, assortie de trois engagements. D'abord, nous solliciterons les aides qui soutiennent la diversification et la gestion à couvert continu : elles existent, même si elles sont moins connues. Ensuite, nous traiterons sans attendre la question du gibier : sans un plan de chasse adapté, établi avec l'association communale, aucun jeune arbre ne dépassera le stade de la pousse. Enfin, nous créerons un comité ouvert aux habitants, aux propriétaires forestiers voisins et à l'école, afin de suivre l'évolution des parcelles et d'expliquer chaque intervention avant qu'elle n'ait lieu. Trop souvent, une coupe incomprise suscite la colère de promeneurs qui ignorent tout du travail forestier ; nous avons tout à gagner à faire de notre forêt un sujet de discussion plutôt que de soupçon.\n\n" +
            "Je mesure ce que ce choix a d'inconfortable. Il nous demande de la patience, alors que les arbres morts sont sous nos yeux. Il nous demande d'accepter une part d'incertitude et des recettes moindres pendant quelques années. Mais une forêt ne se gère pas à l'échelle d'un mandat. Ceux qui ont planté les épicéas du col de la Croix pensaient bien faire, et ils ne les ont jamais vus adultes. À notre tour, nous plantons pour des habitants que nous ne connaîtrons pas. La moindre des choses est de leur laisser une forêt capable de résister à ce que nous ne savons pas encore prévoir.\n\n" +
            "Je vous invite à venir nombreux à la réunion publique qui se tiendra à la salle des fêtes avant le vote, pour en débattre avec les techniciens forestiers et l'ensemble du conseil.\n\n" +
            "Hélène Garnier, adjointe au maire chargée de l'environnement",
        },
      ],
    },
  ],
};
