// Synced from cheneygross-afk/lengo:src/lib/exams/fr/delf-a1-pe.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// DELF A1 practice exam -- Production écrite.
// 30 minutes, 2 exercises, marked out of 25: a form to fill in, then a
// short message of at least 40 words, as in the real exam.
export const DELF_A1_PE: ExamPaper = {
  id: "pe",
  kind: "writing",
  title: "Production écrite",
  minutes: 30,
  group: 2,
  tasks: [
    {
      title: "Exercice 1",
      instructions:
        "Vous êtes en France et vous voulez vous inscrire à la médiathèque de votre ville. Complétez la fiche d'inscription.",
      instructionsEn:
        "You're in France and want to join your town's media library. Fill in the registration form.",
      write: [
        {
          prompt:
            "Complétez la fiche : nom ; prénom ; nationalité ; date de naissance ; adresse en France ; numéro de téléphone ; profession ; langues parlées ; ce que vous aimez lire ou regarder.",
          input: {
            text: {
              title: "Médiathèque Jean-Moulin : fiche d'inscription",
              body:
                "Nom :\nPrénom :\nNationalité :\nDate de naissance :\nAdresse en France :\nNuméro de téléphone :\nProfession :\nLangues parlées :\nQu'est-ce que vous aimez lire ou regarder ?",
            },
          },
          minWords: 20,
          maxWords: 60,
          rubric: [
            "Fills in every field of the form with the right kind of information",
            "Writes the nationality with the right agreement (anglais / anglaise, américain / américaine)",
            "Writes the date of birth the French way (le 12 mars 1994)",
            "Gives the profession without an article (je suis infirmier, or just: infirmier)",
            "Answers the last question with a short sentence using j'aime + noun",
          ],
          modelAnswer:
            "Nom : Carter\nPrénom : Emily\nNationalité : britannique\nDate de naissance : le 12 mars 1994\nAdresse en France : 8, rue des Lilas, 69003 Lyon\nNuméro de téléphone : 06 23 45 67 89\nProfession : infirmière\nLangues parlées : anglais, français (un peu)\nQu'est-ce que vous aimez lire ou regarder ? J'aime les romans policiers et les films français.",
        },
      ],
    },
    {
      title: "Exercice 2",
      instructions:
        "Vous habitez en France depuis un mois. Vous écrivez un message à un ami français. Vous lui parlez de votre nouvel appartement et de votre quartier. Vous l'invitez chez vous. (40 mots minimum)",
      instructionsEn:
        "You've lived in France for a month. Write a message to a French friend about your new flat and your neighbourhood, and invite them round. (40 words minimum)",
      write: [
        {
          prompt:
            "Écrivez un message à votre ami Lucas : décrivez votre appartement et votre quartier, et invitez-le chez vous (jour, heure, activité).",
          minWords: 40,
          maxWords: 60,
          rubric: [
            "Greets the friend and signs off in an informal way (Salut, Bises, À bientôt)",
            "Describes the flat with c'est, il y a and agreeing adjectives",
            "Says what there is in the neighbourhood (il y a un parc, une boulangerie…)",
            "Invites the friend with a day, a time and an activity",
            "Uses simple sentences in the present tense, linked with et, mais, parce que",
          ],
          modelAnswer:
            "Salut Lucas !\n\nJ'habite maintenant à Lyon. Mon appartement est petit mais très clair. Il y a une chambre, une cuisine et un joli balcon. Mon quartier est calme : il y a un parc, une boulangerie et un marché le dimanche.\n\nTu veux venir dîner samedi soir, à 20 heures ? On peut regarder un film après.\n\nÀ bientôt !\nEmily",
        },
      ],
    },
  ],
};
