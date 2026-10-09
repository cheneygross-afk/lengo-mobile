// Synced from cheneygross-afk/lengo:src/lib/exams/fr/delf-a2-pe.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// DELF A2 practice exam -- Production écrite.
// 45 minutes, 2 exercises of 60 words minimum, marked out of 25: telling
// about an event or experience, then a message that invites, thanks,
// apologises, accepts or refuses, as in the real exam.
export const DELF_A2_PE: ExamPaper = {
  id: "pe",
  kind: "writing",
  title: "Production écrite",
  minutes: 45,
  group: 2,
  tasks: [
    {
      title: "Exercice 1",
      instructions:
        "Vous avez passé un week-end dans une ville française. Sur votre blog, vous racontez ce week-end : où vous êtes allé(e), avec qui, ce que vous avez fait et ce que vous avez aimé ou pas aimé. (60 mots minimum)",
      instructionsEn:
        "You spent a weekend in a French town. On your blog, tell about the weekend: where you went, who with, what you did, and what you liked or didn't like. (60 words minimum)",
      write: [
        {
          prompt:
            "Écrivez un article de blog sur votre week-end dans une ville française : le lieu, les personnes, les activités et vos impressions.",
          minWords: 60,
          maxWords: 80,
          rubric: [
            "Tells a coherent story of the weekend in the past",
            "Uses the passé composé with avoir and être correctly (nous sommes allés, j'ai visité), with agreement after être",
            "Uses the imparfait for description (il faisait beau, c'était magnifique)",
            "Gives impressions and opinions (j'ai adoré, je n'ai pas aimé, c'était un peu cher)",
            "Links ideas with time words and connectors (d'abord, ensuite, le soir, mais, parce que)",
          ],
          modelAnswer:
            "Ce week-end, je suis allée à Strasbourg avec ma copine Sarah. Nous sommes arrivées samedi matin en train. D'abord, nous avons visité la cathédrale : elle est magnifique ! Ensuite, nous avons fait une promenade en bateau. Il faisait beau et le quartier de la Petite France était très joli. Le soir, nous avons mangé une choucroute. J'ai adoré la ville, mais les restaurants étaient un peu chers.",
        },
      ],
    },
    {
      title: "Exercice 2",
      instructions:
        "Vous recevez ce message de votre collègue Antoine. Vous lui répondez : vous le remerciez, vous refusez l'invitation et vous expliquez pourquoi. Vous proposez une autre sortie. (60 mots minimum)",
      instructionsEn:
        "You receive this message from your colleague Antoine. Reply: thank him, turn down the invitation and explain why, then suggest another outing. (60 words minimum)",
      write: [
        {
          prompt:
            "Répondez à Antoine : remerciez-le, refusez l'invitation en expliquant pourquoi et proposez une autre sortie (quoi, quand, où).",
          input: {
            text: {
              title: "Message d'Antoine",
              body:
                "Salut !\n\nSamedi prochain, c'est mon anniversaire : j'organise un barbecue chez moi, à la campagne, à partir de midi. Il y aura toute l'équipe du bureau. Tu peux venir ? Si tu veux, je peux venir te chercher en voiture.\n\nAntoine",
            },
          },
          minWords: 60,
          maxWords: 80,
          rubric: [
            "Uses the right format and register for a message to a colleague (Salut / Bonjour Antoine, À lundi, Bonne journée)",
            "Thanks Antoine for the invitation and wishes him a happy birthday",
            "Turns down the invitation politely and gives a clear reason (je ne peux pas parce que…, je suis désolé(e) mais…)",
            "Suggests another outing with a time and place (on pourrait…, ça te dit de… ?, tu es libre… ?)",
            "Uses future forms correctly (je vais partir, je serai…)",
          ],
          modelAnswer:
            "Salut Antoine,\n\nMerci beaucoup pour ton invitation et bon anniversaire en avance ! Malheureusement, je ne peux pas venir samedi : mes parents arrivent d'Angleterre ce week-end et je vais leur faire visiter Paris. Je suis vraiment désolée !\n\nMais on pourrait fêter ton anniversaire autrement. Ça te dit d'aller boire un verre jeudi soir, après le travail, au café en face du bureau ? Je t'invite !\n\nÀ lundi,\nEmily",
        },
      ],
    },
  ],
};
