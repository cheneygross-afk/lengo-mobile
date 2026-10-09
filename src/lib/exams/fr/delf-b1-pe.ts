// Synced from cheneygross-afk/lengo:src/lib/exams/fr/delf-b1-pe.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// DELF B1 practice exam -- Production écrite.
// 45 minutes, one task: a personal, argued text (essay, letter,
// article or forum post) of at least 160 words, as in the real exam.
export const DELF_B1_PE: ExamPaper = {
  id: "pe",
  kind: "writing",
  title: "Production écrite",
  minutes: 45,
  group: 2,
  tasks: [
    {
      title: "Exercice 1",
      instructions:
        "Expression d'une attitude personnelle sur un thème général. Lisez le message suivant et répondez sur le forum. Vous écrirez un texte construit et cohérent de 160 mots minimum.",
      write: [
        {
          prompt:
            "Vous avez lu ce message sur le forum du site « Parents & Ados ». Vous répondez à Laurence : vous racontez votre propre expérience (ou celle d'une personne que vous connaissez), vous donnez votre opinion sur la question en l'illustrant par des exemples précis et vous lui donnez des conseils.",
          input: {
            text: {
              title: "Forum « Parents & Ados » : Un téléphone portable à 11 ans ?",
              body:
                "Bonjour à tous,\n\nMon fils Théo entre au collège en septembre et il me demande un smartphone. Il dit que tous ses copains en ont un et qu'il va être exclu du groupe s'il n'en a pas. Moi, j'ai peur qu'il passe ses soirées sur les réseaux sociaux au lieu de dormir et de faire ses devoirs. Mais je comprends aussi qu'il veuille faire comme les autres, et ce serait pratique pour le joindre. Qu'est-ce que vous en pensez ? Qu'est-ce que vous avez fait avec vos enfants ?\n\nLaurence",
            },
          },
          minWords: 160,
          maxWords: 200,
          rubric: [
            "Respecte la consigne : répond au message de Laurence sur un forum, longueur d'au moins 160 mots.",
            "Raconte une expérience personnelle (passé composé et imparfait bien employés).",
            "Exprime clairement une opinion et la justifie avec au moins deux arguments et des exemples.",
            "Donne des conseils (vous devriez, je vous conseille de, il faudrait que + subjonctif, si j'étais vous…).",
            "Texte organisé en paragraphes et relié par des articulateurs (d'abord, en revanche, par exemple, c'est pourquoi, enfin).",
            "Vocabulaire adapté (réseaux sociaux, écran, règles, confiance) et syntaxe correcte au niveau B1.",
          ],
          modelAnswer:
            "Bonjour Laurence,\n\nVotre message m'a rappelé ce que j'ai vécu il y a deux ans avec ma fille Inès. Elle avait onze ans, elle aussi, et elle répétait qu'elle était la seule de sa classe sans téléphone. J'ai fini par céder, mais je n'avais fixé aucune règle, et je l'ai vite regretté : elle se couchait tard et ses notes ont baissé.\n\nÀ mon avis, le problème n'est pas le téléphone lui-même, mais la façon dont on l'utilise. D'un côté, c'est vrai qu'il est rassurant de pouvoir joindre son enfant quand il rentre seul du collège. De l'autre, un enfant de cet âge n'a pas encore la maturité nécessaire pour gérer les réseaux sociaux.\n\nSi j'étais vous, je lui achèterais d'abord un téléphone simple, juste pour appeler et envoyer des messages. Ensuite, quand il aura montré qu'il est responsable, vous pourrez passer au smartphone. Surtout, il faudrait que vous décidiez ensemble de quelques règles : pas d'écran dans la chambre la nuit, par exemple.\n\nBon courage !\nSylvie",
        },
      ],
    },
  ],
};
