// Synced from cheneygross-afk/lengo:src/lib/lessons/fr-c2-u20.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// French C2, Unit 20: Rhetorical Questions in Speeches.

export const FR_C2_U20: Lesson[] = [
  {
    slug: "c2-rhetorical-questions-5",
    level: "FR-C2",
    number: 1,
    title: "Questions Rhétoriques et Structures d'Emphase, Part 5 of 7",
    summary: "Rhetorical questions in everyday conflict: reproach and exasperation (tu ne pouvais pas prévenir ?, tu te rends compte ?, tu crois que j'ai que ça à faire ?, c'est une blague ?, qu'est-ce que j'en sais, moi ?) and the intonation that marks them.",
    duration: "17 min",
    sections: [
      {
        heading: "The reproach as a question",
        body: [
          "In everyday French, especially between people who say \"tu\", reproaches very often come as questions. \"Tu ne pouvais pas prévenir ?\" (couldn't you have let me know?) is not a request for information about your abilities: it means you should have. The negative imparfait of \"pouvoir\" is the classic reproach; the past conditional \"tu n'aurais pas pu...?\" is a little more measured.",
        ],
        examples: [
          { es: "Tu ne pouvais pas prévenir que tu rentrerais tard ?", en: "Couldn't you have said you'd be home late?" },
          { es: "Tu n'aurais pas pu me demander avant d'inviter tes parents ?", en: "Couldn't you have asked me before inviting your parents?" },
          { es: "Tu ne pouvais pas me le dire plus tôt ?", en: "Couldn't you have told me sooner?" },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Tu ne pouvais pas fermer la porte à clé ?",
            question: "What is the speaker saying?",
            options: ["You should have locked the door.", "Were you able to lock the door?", "You couldn't find the key.", "Can you lock the door next time?"],
            correctIndex: 0,
            explanation: "The negative imparfait of \"pouvoir\" is the classic reproach: not a question about ability, but a statement that you should have done it.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make the reproach more measured with the past conditional.",
            source: "Tu ne pouvais pas appeler ?",
            answer: "Tu n'aurais pas pu appeler ?",
            explanation: "\"Tu ne pouvais pas...?\" (imparfait) is the blunt reproach; the past conditional \"tu n'aurais pas pu...?\" softens it a little.",
          },
        ],
      },
      {
        heading: "Stock reproaches",
        body: [
          "Other stock reproaches: \"C'était trop demander ?\" (was that too much to ask?), \"Tu le fais exprès ?\" (are you doing it on purpose?), \"Combien de fois faudra-t-il que je te le dise ?\" (how many times do I have to tell you?), \"Tu as vu l'heure ?\", \"Tu n'as rien de mieux à faire ?\".",
        ],
        examples: [
          { es: "Ranger tes chaussures, c'était trop demander ?", en: "Putting your shoes away, was that too much to ask?" },
          { es: "Tu le fais exprès, ou quoi ?", en: "Are you doing it on purpose, or what?" },
          { es: "Combien de fois faudra-t-il que je te le dise ?", en: "How many times do I have to tell you?" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You come home at 3 a.m. and your flatmate says « Tu as vu l'heure ? ». What does she mean?",
            options: ["You are back far too late", "She wants to know the time", "Her watch has stopped", "She is glad to see you"],
            correctIndex: 0,
            explanation: "\"Tu as vu l'heure ?\" is a stock reproach: it asks nothing, it says you are late.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Closing the fridge, [was that too much to ask]?",
            sentence: "Fermer le frigo, ___ ?",
            answer: "c'était trop demander",
            altAnswers: ["est-ce que c'était trop demander"],
            explanation: "\"C'était trop demander ?\" follows the detached task (an infinitive) and means it was the least you could do.",
          },
        ],
      },
      {
        heading: "Drop the ne to sound natural",
        body: [
          "In speech, the \"ne\" usually disappears (\"tu pouvais pas prévenir ?\"), as you learnt in the units on spoken French. Keep it when you write these lines in a story or a dialogue meant to sound careful; drop it to sound natural.",
        ],
        examples: [
          { es: "T'as rien de mieux à faire que de critiquer ?", en: "Haven't you got anything better to do than criticise?" },
          { es: "Tu pouvais pas prévenir ?", en: "Couldn't you have let me know? (spoken)" },
          { es: "T'aurais pas pu demander ?", en: "Couldn't you have asked? (spoken)" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You are writing a careful dialogue for a novel. Which version keeps the full negation?",
            options: ["Tu ne pouvais pas attendre ?", "Tu pouvais pas attendre ?", "T'pouvais pas attendre ?", "Pouvais pas attendre ?"],
            correctIndex: 0,
            explanation: "In careful writing keep \"ne\": \"tu ne pouvais pas\". Speech drops it (\"tu pouvais pas\"), and very relaxed speech drops even more.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (to your partner, as a reproach).",
            source: "Couldn't you have waited five minutes?",
            answer: "Tu ne pouvais pas attendre cinq minutes ?",
            altAnswers: ["Tu pouvais pas attendre cinq minutes ?", "Tu n'aurais pas pu attendre cinq minutes ?", "T'aurais pas pu attendre cinq minutes ?", "Vous ne pouviez pas attendre cinq minutes ?"],
            explanation: "The reproach uses the negative imparfait of \"pouvoir\"; with or without \"ne\" depending on how careful you want to sound.",
          },
        ],
      },
      {
        heading: "Disbelief and rejected assumptions",
        body: [
          "\"Tu te rends compte ?\" (do you realise?) asks the listener to share your amazement or outrage: \"Il m'a demandé de refaire tout le dossier. Tu te rends compte ?\". \"C'est une blague ?\" and \"Tu plaisantes ?\" express disbelief. \"Tu me prends pour qui ?\" (who do you take me for?) and \"J'ai une tête à...?\" (do I look like someone who...?) reject an assumption: \"J'ai une tête à faire le ménage pour tout l'immeuble ?\".",
        ],
        examples: [
          { es: "Il m'a demandé de refaire tout le dossier. Tu te rends compte ?", en: "He asked me to redo the whole file. Can you believe it?" },
          { es: "J'ai une tête à faire le ménage pour tout l'immeuble ?", en: "Do I look like someone who cleans for the whole building?" },
          { es: "Encore une réunion à dix-neuf heures ? C'est une blague ?", en: "Another meeting at 7 p.m.? Is this a joke?" },
          { es: "Tu me prends pour qui ?", en: "Who do you take me for?" },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "On m'a supprimé mes congés d'été. Tu te rends compte ?",
            question: "What does the speaker want from the listener?",
            options: ["To share her outrage", "To check whether the listener understood", "To ask the listener to take her holiday", "To find out if the listener has an account"],
            correctIndex: 0,
            explanation: "\"Tu te rends compte ?\" asks the listener to share your amazement or outrage, not to confirm understanding.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Do I look like someone who] works for free?",
            sentence: "___ travailler gratuitement ?",
            answer: "J'ai une tête à",
            explanation: "\"J'ai une tête à\" + infinitive rejects an assumption: do I look like someone who would?",
          },
        ],
      },
      {
        heading: "Tu crois que j'ai que ça à faire ?",
        body: [
          "\"Tu crois que j'ai que ça à faire ?\" (do you think I've got nothing better to do?) is built on \"n'avoir que ça à faire\" (to have nothing else to do), with the \"ne\" dropped in speech. The formal version, \"Croyez-vous que je n'aie que cela à faire ?\", takes the subjunctive after \"croire\" in a question, but nobody under pressure speaks like that.",
        ],
        examples: [
          { es: "Tu crois que j'ai que ça à faire ?", en: "Do you think I've got nothing better to do?" },
          { es: "Croyez-vous que je n'aie que cela à faire ?", en: "Do you think I have nothing else to do? (formal)" },
          { es: "Il croit que j'ai que ça à faire, lui !", en: "He thinks I've got nothing else to do!" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it formal: vous, inversion, and the subjunctive.",
            source: "Tu crois que je suis payé pour ça ?",
            answer: "Croyez-vous que je sois payé pour cela ?",
            altAnswers: ["Croyez-vous que je sois payé pour ça ?", "Croyez-vous que je sois payée pour cela ?", "Croyez-vous que je sois payée pour ça ?"],
            explanation: "In a formal inverted question, \"croire que\" takes the subjunctive: \"croyez-vous que je sois\". \"Ça\" becomes \"cela\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (to a friend, spoken style).",
            source: "Does he think we've got nothing better to do?",
            answer: "Il croit qu'on a que ça à faire ?",
            altAnswers: ["Il croit qu'on n'a que ça à faire ?", "Il croit que nous n'avons que ça à faire ?", "Il pense qu'on a que ça à faire ?", "Il pense qu'on n'a que ça à faire ?", "Il croit que nous n'avons que cela à faire ?"],
            explanation: "Built on \"n'avoir que ça à faire\"; in speech the \"ne\" drops: \"on a que ça à faire\".",
          },
        ],
      },
      {
        heading: "With vous: more veiled",
        body: [
          "These are all familier or courant. With a colleague you say \"vous\" to, the same reproach becomes more veiled: \"Vous vous rendez compte de ce que cela implique ?\" or simply \"Vous êtes sérieux ?\".",
        ],
        examples: [
          { es: "Vous vous rendez compte de ce que cela implique ?", en: "Do you realise what that implies?" },
          { es: "Vous êtes sérieux ?", en: "Are you serious?" },
          { es: "Vous plaisantez, j'espère ?", en: "You're joking, I hope?" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A colleague (vous) has scheduled a meeting at 7 p.m. on a Friday. Which reaction is exasperated but still acceptable at work?",
            options: ["Vous êtes sérieux ?", "Tu me prends pour qui ?", "T'as rien de mieux à faire ?", "J'ai une tête à rester jusqu'à vingt heures ?"],
            correctIndex: 0,
            explanation: "\"Vous êtes sérieux ?\" keeps \"vous\" and stays short; the others are familiar and personal.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (to a colleague, vous).",
            source: "Do you realise the risk you are taking?",
            answer: "Vous vous rendez compte du risque que vous prenez ?",
            altAnswers: ["Vous rendez-vous compte du risque que vous prenez ?", "Vous vous rendez compte des risques que vous prenez ?"],
            explanation: "With \"vous\", the reproach is veiled: \"vous vous rendez compte de\" + noun (\"du risque\").",
          },
        ],
      },
      {
        heading: "Deflecting responsibility",
        body: [
          "Some rhetorical questions refuse a responsibility: \"Qu'est-ce que j'en sais, moi ?\" (how should I know?), \"Comment veux-tu que je le sache ?\" (how do you expect me to know? + subjunctive), \"Et moi, je suis quoi, là ?\" (and what am I, then? = you're forgetting me), \"Pourquoi c'est toujours moi qui... ?\".",
        ],
        examples: [
          { es: "Comment veux-tu que je le sache ? Je n'étais pas là.", en: "How do you expect me to know? I wasn't there." },
          { es: "Pourquoi c'est toujours moi qui sors la poubelle ?", en: "Why is it always me who takes the bin out?" },
          { es: "Comment veux-tu que je m'en souvienne ?", en: "How do you expect me to remember?" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into a deflecting question with comment veux-tu que.",
            source: "Je ne peux pas le deviner.",
            answer: "Comment veux-tu que je le devine ?",
            altAnswers: ["Comment veux-tu que je le devine, moi ?"],
            explanation: "\"Comment veux-tu que\" refuses responsibility and takes the subjunctive: \"que je le devine\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Comment veux-tu qu'il le sait, lui ?",
            answer: "Comment veux-tu qu'il le sache, lui ?",
            explanation: "\"Vouloir que\" takes the subjunctive, even in a deflecting question: \"qu'il le sache\", not the indicative \"sait\".",
          },
        ],
      },
      {
        heading: "The detached moi and là",
        body: [
          "The detached \"moi\" at the end (\"qu'est-ce que j'en sais, moi ?\") is typical of spoken French: it adds emphasis and irritation. So does \"là\" (\"je suis quoi, là ?\").",
        ],
        examples: [
          { es: "Où sont les clés ? — Qu'est-ce que j'en sais, moi ?", en: "Where are the keys? — How should I know?" },
          { es: "Vous êtes tous invités ? Et moi, je suis quoi, là ?", en: "You're all invited? And what am I, then?" },
          { es: "J'en sais rien, moi !", en: "I've no idea!" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "\"Où sont les clés ? — Qu'est-ce que j'en sais, moi ?\" What does the second speaker mean?",
            options: ["I have no idea, and it's not my job to know.", "I know exactly where they are.", "What do I know about keys in general?", "Tell me what you know."],
            correctIndex: 0,
            explanation: "A deflecting rhetorical question: it refuses the responsibility, with irritation.",
          },
        ],
      },
      {
        heading: "Intonation gives it away",
        body: [
          "Intonation is the decisive clue. A real question rises on the last syllable. A reproach or exasperated question often starts high and falls, with stress on the key word (\"tu te RENDS compte ?\"), or ends on a flat, drawn-out note. Practise saying the same words both ways, and you'll hear the difference between asking and accusing.",
        ],
        examples: [
          { es: "Tu te rends compte ? Trois heures d'attente pour un formulaire !", en: "Can you believe it? Three hours' wait for a form!" },
          { es: "Tu viens ce soir ?", en: "Are you coming tonight? (rising: a real question)" },
          { es: "Tu as encore oublié ?", en: "You forgot again? (falling: an accusation)" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which intonation usually marks a reproach rather than a real question?",
            options: ["It starts high and falls, stressing the key word", "It rises on the last syllable", "It stays at a whisper throughout", "It rises on every word"],
            correctIndex: 0,
            explanation: "A real question rises at the end; a reproach often starts high and falls, with stress on the key word, or ends flat and drawn out.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (to a flatmate).",
        source: "Couldn't you have asked me before taking my car?",
        answer: "Tu n'aurais pas pu me demander avant de prendre ma voiture ?",
        altAnswers: ["Tu ne pouvais pas me demander avant de prendre ma voiture ?", "T'aurais pas pu me demander avant de prendre ma voiture ?", "Tu pouvais pas me demander avant de prendre ma voiture ?"],
        explanation: "The past conditional \"tu n'aurais pas pu\" is a measured reproach; \"avant de\" + infinitive.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (to a friend).",
        source: "Who does he take us for?",
        answer: "Il nous prend pour qui ?",
        altAnswers: ["Pour qui il nous prend ?", "Pour qui nous prend-il ?"],
        explanation: "\"Prendre quelqu'un pour qui ?\" rejects an insulting assumption; spoken French puts \"pour qui\" at the end.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (to a friend).",
        source: "Are you doing it on purpose?",
        answer: "Tu le fais exprès ?",
        altAnswers: ["Tu fais exprès ?", "Est-ce que tu le fais exprès ?", "Tu le fais exprès ou quoi ?"],
        explanation: "\"Faire exprès\" = to do on purpose; as a question it is a reproach.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Why is it always me who does the washing-up?",
        words: ["Pourquoi", "c'est toujours moi", "qui fais", "la vaisselle ?"],
        translation: "Why is it always me who does the washing-up?",
        explanation: "After \"c'est moi qui\", the verb agrees with \"moi\": \"qui fais\", first person.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "A test on Monday morning? Are you kidding?",
        answer: "Un contrôle lundi matin ? Tu plaisantes ?",
        altAnswers: ["Un contrôle lundi matin ? C'est une blague ?", "Un examen lundi matin ? Tu plaisantes ?", "Un contrôle lundi matin ? Tu rigoles ?", "Un examen lundi matin ? C'est une blague ?"],
        explanation: "\"Tu plaisantes ?\" or \"c'est une blague ?\" express disbelief rather than ask.",
      },
      {
        type: "dictation",
        audio: "Tu n'as vraiment rien de mieux à faire ?",
        explanation: "A stock reproach: you should be doing something useful.",
      },
      {
        type: "speak",
        text: "On m'a refusé le remboursement. Tu te rends compte ?",
        prompt: "Say it in French: They refused my refund. Can you believe it?",
        tip: "Stress \"rends\" and let the voice fall: you want sympathy, not an answer.",
        explanation: "Stress \"rends\" and let the voice fall: you are sharing outrage, not asking.",
      },
      {
        type: "fill-blank",
        explanation: "\"Compter pour du beurre\" (to count for nothing) in a deflecting question; the detached \"là\" adds irritation.",
        prompt: "Write the French for the bold words.",
        en: "And me, [I count for nothing], then?",
        sentence: "Et moi, je ___, là ?",
        answer: "compte pour du beurre",
        altAnswers: ["ne compte pour rien", "compte pour rien"],
      },
    ],
  },
  {
    slug: "c2-reply-rhetorical-question-dialogue-lab",
    level: "FR-C2",
    number: 2,
    title: "Dialogue Lab: Répondre à une Question Rhétorique",
    summary: "Three scenes where someone throws a loaded rhetorical question at you (at home, in a meeting, in a public debate): choose whether to ignore it, answer it literally or defuse it, and find the French that keeps your composure.",
    duration: "19 min",
    sections: [
      {
        heading: "Scene 1: the snap at home",
        body: [
          "Thomas comes home to find the dishwasher still full. He asks Léa to empty it. Léa, who has just finished a twelve-hour shift, snaps: « Tu crois que j'ai que ça à faire ? »",
        ],
        examples: [
          { es: "Tu crois que j'ai que ça à faire ?", en: "Do you think I've got nothing better to do?" },
          { es: "Thomas demande à Léa de vider le lave-vaisselle.", en: "Thomas asks Lea to empty the dishwasher." },
          { es: "Léa sort d'une garde de douze heures.", en: "Lea has just finished a twelve-hour shift." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What does Lea's « Tu crois que j'ai que ça à faire ? » really mean?",
            options: ["I'm exhausted and you're not seeing it", "She wants to know what Thomas believes", "She has nothing else to do", "She is asking for a list of chores"],
            correctIndex: 0,
            explanation: "A rhetorical question of exasperation asks nothing: it expresses an emotion, here exhaustion and the feeling of not being seen.",
          },
        ],
      },
      {
        heading: "Ignore, answer literally, or defuse",
        body: [
          "Three options. Ignore it and repeat the request (escalation guaranteed). Answer it literally (\"Non, je ne crois pas que tu n'aies que ça à faire\"): technically correct, perceived as sarcastic. Or defuse it by answering the emotion behind it: the question means I'm exhausted and you're not seeing it. The best reply acknowledges that and offers something: « Non, pardon, tu as eu une journée épuisante. Je m'en occupe. »",
        ],
        examples: [
          { es: "Non, pardon, tu as eu une journée épuisante. Je m'en occupe.", en: "No, sorry, you've had an exhausting day. I'll deal with it." },
          { es: "Tu as raison, j'aurais dû le faire avant de partir.", en: "You're right, I should have done it before I left." },
          { es: "Non, je ne crois pas que tu n'aies que ça à faire.", en: "No, I don't think you've got nothing else to do. (literal, sounds sarcastic)" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Léa snaps \"Tu crois que j'ai que ça à faire ?\" Which reply defuses best?",
            options: ["Non, pardon, tu as eu une journée épuisante. Je m'en occupe.", "Non, je ne crois pas que tu n'aies que ça à faire.", "Bon, tu le vides, ce lave-vaisselle ?", "Et moi, tu crois que j'ai que ça à faire ?"],
            correctIndex: 0,
            explanation: "Answer the emotion (exhaustion), not the literal question; the literal answer sounds sarcastic and the counter-question escalates.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Je ne crois pas que tu as le temps ce soir.",
            answer: "Je ne crois pas que tu aies le temps ce soir.",
            explanation: "A negative \"croire que\" (\"je ne crois pas que\") takes the subjunctive: \"tu aies\", as in the literal reply \"que tu n'aies que ça à faire\".",
          },
        ],
      },
      {
        heading: "Defusing phrases at home",
        body: [
          "Useful defusing phrases in a close relationship: \"Je ne dis pas ça\", \"Je vois que tu es à bout\", \"On en reparle à tête reposée ?\" (shall we talk about it when we're calmer?), \"Tu as raison, je m'en occupe\".",
        ],
        examples: [
          { es: "Je ne dis pas ça, je demandais juste un coup de main.", en: "I'm not saying that, I was just asking for a hand." },
          { es: "Je vois que tu es à bout. On en reparle à tête reposée ?", en: "I can see you're at the end of your tether. Shall we talk about it when we're calmer?" },
          { es: "Tu as raison, je m'en occupe.", en: "You're right, I'll take care of it." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (to your partner).",
            source: "Shall we talk about it tomorrow, when we're calmer?",
            answer: "On en reparle demain, à tête reposée ?",
            altAnswers: ["On en reparle demain à tête reposée ?", "On en reparlera demain, à tête reposée ?", "On en reparle demain, quand on sera plus calmes ?"],
            explanation: "\"On en reparle à tête reposée ?\" defuses by postponing: \"en\" stands for the dispute, \"à tête reposée\" means once calm.",
          },
        ],
      },
      {
        heading: "Scene 2: the sigh in the meeting",
        body: [
          "Monday, team meeting at a Lyon marketing agency. The director, Mme Perrin, sighs: « Est-ce que quelqu'un, dans cette équipe, lit encore ses mails ? » Everyone looks at the table. You were the one who didn't answer her Friday message.",
        ],
        examples: [
          { es: "Est-ce que quelqu'un, dans cette équipe, lit encore ses mails ?", en: "Does anyone in this team still read their emails?" },
          { es: "Tout le monde regarde la table.", en: "Everyone looks at the table." },
          { es: "Je n'ai pas répondu à son message de vendredi.", en: "I didn't answer her Friday message." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Why is the director's « Est-ce que quelqu'un, dans cette équipe, lit encore ses mails ? » rhetorical?",
            options: ["It is a reproach aimed at whoever ignored her message", "She is surveying the team's email habits", "She wants a show of hands", "She is proposing a new email system"],
            correctIndex: 0,
            explanation: "The question expects no answer: it is a public reproach to the person who didn't reply.",
          },
        ],
      },
      {
        heading: "Answer it literally, with facts",
        body: [
          "Here the best strategy is often to answer it literally, calmly and with facts, which turns the rhetorical question back into a real one and removes its sting: « Oui, je les lis. Si vous parlez de votre message de vendredi, je n'ai pas pu y répondre avant ce matin, parce que j'étais chez le client. Je vous envoie les chiffres dans l'heure. »",
        ],
        examples: [
          { es: "Oui, je les lis. Si vous parlez de votre message de vendredi, je vous réponds dans l'heure.", en: "Yes, I read them. If you mean your Friday message, I'll reply within the hour." },
          { es: "Je n'ai pas pu répondre plus tôt, j'étais chez le client.", en: "I couldn't reply sooner, I was at the client's." },
          { es: "Oui, je l'ai lu. Je vous réponds avant midi.", en: "Yes, I read it. I'll reply before noon." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Mme Perrin: \"Est-ce que quelqu'un, dans cette équipe, lit encore ses mails ?\" Which reply is the most professional?",
            options: ["Oui, je les lis. Si vous parlez de votre message de vendredi, je vous envoie les chiffres dans l'heure.", "Et vous, vous lisez les nôtres ?", "(silence)", "C'est une blague ?"],
            correctIndex: 0,
            explanation: "Answering literally with facts and a commitment removes the sting; counter-attack or silence makes things worse.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (to your manager).",
            source: "I couldn't answer on Friday, I was ill.",
            answer: "Je n'ai pas pu répondre vendredi, j'étais malade.",
            altAnswers: ["Je n'ai pas pu y répondre vendredi, j'étais malade.", "Je n'ai pas pu répondre vendredi : j'étais malade.", "Je n'ai pas pu vous répondre vendredi, j'étais malade."],
            explanation: "A literal, factual answer removes the sting: passé composé for the event (\"je n'ai pas pu\"), imparfait for the circumstance (\"j'étais malade\").",
          },
        ],
      },
      {
        heading: "Workplace phrases",
        body: [
          "Workplace phrases: \"si vous faites allusion à...\" (if you're referring to...), \"je comprends votre agacement\", \"je m'en charge\", \"vous aurez la réponse d'ici midi\". Avoid both the counter-attack (\"Et vous, vous lisez les nôtres ?\") and silence, which lets the reproach stand.",
        ],
        examples: [
          { es: "Si vous faites allusion au dossier Martin, c'est moi qui m'en occupe.", en: "If you're referring to the Martin file, I'm the one handling it." },
          { es: "Je comprends votre agacement ; vous aurez les chiffres d'ici midi.", en: "I understand your annoyance; you'll have the figures by noon." },
          { es: "Je m'en charge dès cet après-midi.", en: "I'll take care of it this afternoon." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (to your manager, vous).",
            source: "If you're referring to the delay, it's down to the supplier.",
            answer: "Si vous faites allusion au retard, il est dû au fournisseur.",
            altAnswers: ["Si vous faites allusion au retard, c'est la faute du fournisseur.", "Si vous parlez du retard, il est dû au fournisseur.", "Si vous faites allusion au retard, il vient du fournisseur.", "Si vous faites allusion au retard, il est imputable au fournisseur."],
            explanation: "\"Faire allusion à\" + noun (\"au retard\") names the hidden target of the reproach; \"dû à\" gives the cause calmly.",
          },
          {
            type: "listen-choose",
            audio: "Je comprends votre inquiétude ; vous aurez le rapport demain.",
            question: "What does it mean?",
            options: ["I understand your concern; you'll have the report tomorrow.", "I understand your question; the report was yesterday.", "I'm worried too; the report is late.", "I understand the report; you'll have it at noon."],
            correctIndex: 0,
            explanation: "\"Je comprends votre inquiétude\" acknowledges the emotion, then a concrete commitment closes the matter.",
          },
        ],
      },
      {
        heading: "Scene 3: the public challenge",
        body: [
          "A public meeting on a new tram line in Bordeaux. An opponent rises: « Qui peut croire sérieusement que ce projet est financé ? » The room murmurs. You are the project's spokesperson.",
        ],
        examples: [
          { es: "Qui peut croire sérieusement que ce projet est financé ?", en: "Who can seriously believe this project is funded?" },
          { es: "Le projet est financé à hauteur de quarante millions d'euros.", en: "The project is funded to the tune of forty million euros." },
          { es: "Vous êtes le porte-parole du projet.", en: "You are the project's spokesperson." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Who can [seriously believe] that this bridge is safe?",
            sentence: "Qui peut ___ que ce pont est sûr ?",
            answer: "croire sérieusement",
            explanation: "\"Qui peut croire sérieusement que...?\" is a loaded rhetorical question: it implies nobody can.",
          },
        ],
      },
      {
        heading: "Answer, reframe, or turn it back",
        body: [
          "Three classic replies. Take it up and answer it: « Vous posez la question, je vais y répondre : le financement est inscrit au budget 2027, à hauteur de 40 millions. » Reframe it: « La question n'est pas là. La vraie question, c'est de savoir combien nous coûtera l'absence de tram. » Or turn it back: « Je vous retourne la question : qui peut croire qu'on désengorgera la rocade sans transports en commun ? »",
        ],
        examples: [
          { es: "Vous posez la question, je vais y répondre : le financement est inscrit au budget 2027.", en: "You ask the question, so I'll answer it: the funding is in the 2027 budget." },
          { es: "La question n'est pas là. La vraie question, c'est le coût de l'inaction.", en: "That's not the question. The real question is the cost of doing nothing." },
          { es: "Je vous retourne la question : qui peut croire qu'on désengorgera la rocade sans tram ?", en: "I'll turn the question back on you: who can believe we'll ease congestion on the ring road without a tram?" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (in a public debate).",
            source: "You raise the question, so I'll answer it: the budget has been voted.",
            answer: "Vous soulevez la question, je vais y répondre : le budget a été voté.",
            altAnswers: ["Vous posez la question, je vais y répondre : le budget a été voté.", "Vous soulevez la question, je vais y répondre : le budget est voté.", "Vous soulevez la question, j'y réponds : le budget a été voté."],
            explanation: "Taking the question up: \"répondre à\" becomes \"y répondre\", and the facts follow the colon.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "That's not the problem. The real problem is safety.",
            answer: "Là n'est pas le problème. Le vrai problème, c'est la sécurité.",
            altAnswers: ["Le problème n'est pas là. Le vrai problème, c'est la sécurité.", "Là n'est pas le problème. Le véritable problème, c'est la sécurité."],
            explanation: "Reframing: dismiss the question (\"là n'est pas le problème\"), then put yours with the emphatic \"le vrai problème, c'est...\".",
          },
        ],
      },
      {
        heading: "Which reply, when",
        body: [
          "The first is the strongest when you have the facts; the second when the question is a trap; the third is effective but combative, best used once. In all three, keep \"vous\", stay calm, and never match the aggressive tone of the question you were thrown.",
        ],
        examples: [
          { es: "Quand on a les chiffres, on répond.", en: "When you have the figures, you answer." },
          { es: "Face à un piège, on recadre la question.", en: "Faced with a trap, you reframe the question." },
          { es: "On ne retourne la question qu'une fois.", en: "You turn the question back only once." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In a public debate, someone asks \"Qui peut croire que ce projet est financé ?\" and you have the exact figures. Which strategy is strongest?",
            options: ["Take it up and answer with the figures.", "Ignore it completely.", "Reply « Et alors ? »", "Ask « C'est une blague ? »"],
            correctIndex: 0,
            explanation: "When you have the facts, treating the rhetorical question as a real one (\"vous posez la question, je vais y répondre\") disarms it.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (to your partner).",
        source: "You're right, I should have warned you.",
        answer: "Tu as raison, j'aurais dû te prévenir.",
        altAnswers: ["Tu as raison, j'aurais dû te le dire.", "T'as raison, j'aurais dû te prévenir."],
        explanation: "Defuse by conceding: \"tu as raison\" + the past conditional of \"devoir\" (\"j'aurais dû\").",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (to your partner).",
        source: "I'm not criticising you, I just want to help.",
        answer: "Je ne te critique pas, je veux juste t'aider.",
        altAnswers: ["Je ne te reproche rien, je veux juste t'aider.", "Je ne te critique pas, je voudrais juste t'aider.", "Je ne te critique pas, je veux seulement t'aider."],
        explanation: "\"Je ne te critique pas\" answers the emotion behind the question rather than its words.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (to your manager).",
        source: "I understand your frustration; you'll have an answer by this evening.",
        answer: "Je comprends votre frustration ; vous aurez une réponse d'ici ce soir.",
        altAnswers: ["Je comprends votre frustration ; vous aurez une réponse avant ce soir.", "Je comprends votre frustration, vous aurez une réponse d'ici ce soir.", "Je comprends votre agacement ; vous aurez une réponse d'ici ce soir."],
        explanation: "At work: acknowledge the feeling, then commit to a deadline with \"d'ici\" (by).",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "[I'll turn the question back on you]: who can believe that?",
        sentence: "___ : qui peut croire cela ?",
        answer: "Je vous retourne la question",
        explanation: "\"Retourner la question à quelqu'un\": the combative reply to a rhetorical question.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The works are funded to the tune of twelve million euros.",
        answer: "Les travaux sont financés à hauteur de douze millions d'euros.",
        altAnswers: ["Les travaux sont financés à hauteur de 12 millions d'euros."],
        explanation: "\"À hauteur de\" (to the tune of) gives the hard figure that answers a loaded question.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: I can see you're tired; I'll take care of it.",
        words: ["Je vois", "que tu es fatigué ;", "je m'en occupe."],
        translation: "I can see you're tired; I'll take care of it.",
        explanation: "Name the emotion (\"je vois que\"), then offer something (\"je m'en occupe\").",
      },
      {
        type: "fill-blank",
        explanation: "\"Là n'est pas la question\" sets the loaded question aside so you can reframe.",
        prompt: "Write the French for the bold words.",
        en: "[That's not the point]; let's talk about the budget.",
        sentence: "___ ; parlons du budget.",
        answer: "Là n'est pas la question",
        altAnswers: ["La question n'est pas là"],
      },
      {
        type: "dictation",
        audio: "Je comprends la question, et j'y réponds volontiers.",
        explanation: "\"Y\" stands for \"à la question\": taking it up calmly, with \"volontiers\".",
      },
      {
        type: "speak",
        text: "Pardon, je n'avais pas vu que tu étais épuisée.",
        prompt: "Say it in French, to your partner: Sorry, I hadn't seen that you were exhausted.",
        explanation: "The plus-que-parfait \"je n'avais pas vu\" admits what the snap was really about.",
      },
      {
        type: "speak",
        text: "Je vous retourne la question : qui paiera si nous ne faisons rien ?",
        tip: "Calm, even tone: the words are combative enough.",
        explanation: "Turning the question back is effective but combative: use it once, calmly.",
        prompt: "Say it in French: I'll turn the question back on you: who will pay if we do nothing?",
      },
    ],
  },
  {
    slug: "c2-rhetorical-questions-6",
    level: "FR-C2",
    number: 3,
    title: "Questions Rhétoriques et Structures d'Emphase, Part 6 of 7",
    summary: "Questions in written argument: the problématique as a direct or indirect question, questions as transitions (mais qu'en est-il réellement ?), and indirect questions without inversion. Trap: « je me demande qu'est-ce que » is colloquial; write « je me demande ce que ».",
    duration: "19 min",
    sections: [
      {
        heading: "The problématique: one open question",
        body: [
          "The French dissertation, and most argued academic writing, turns its subject into \"une problématique\": the question the whole essay answers. You met it at the Advanced level. At the Mastery level the expectation is a question that is genuinely open, precise, and not answerable by yes or no in one line.",
        ],
        examples: [
          { es: "Dans quelle mesure la gratuité des transports publics peut-elle réduire la place de la voiture en ville ?", en: "To what extent can free public transport reduce the role of the car in cities?" },
          { es: "Faut-il voir dans le télétravail une libération ou une nouvelle forme de contrôle ?", en: "Should remote work be seen as a liberation or a new form of control?" },
          { es: "Le télétravail existe-t-il ?", en: "Does remote work exist? (too closed for a research question)" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which is the best problématique for an essay on remote work?",
            options: ["Faut-il voir dans le télétravail une libération ou une nouvelle forme de contrôle ?", "Le télétravail existe-t-il ?", "Qu'est-ce que le télétravail ? Qui le pratique ? Depuis quand ? Où ? Pourquoi ?", "Le télétravail, c'est bien ?"],
            correctIndex: 0,
            explanation: "One open question with built-in tension; not a yes/no triviality, not a list.",
          },
        ],
      },
      {
        heading: "Direct or indirect form",
        body: [
          "Two forms are acceptable. Direct: \"Dans quelle mesure la gratuité des transports publics peut-elle réduire la place de la voiture en ville ?\", \"En quoi le roman réaliste est-il aussi une œuvre d'imagination ?\". Indirect, more measured: \"Il convient dès lors de se demander dans quelle mesure la gratuité peut réduire...\", \"On peut s'interroger sur ce qui distingue...\".",
        ],
        examples: [
          { es: "En quoi le roman réaliste est-il aussi une œuvre d'imagination ?", en: "In what way is the realist novel also a work of imagination?" },
          { es: "Il convient dès lors de se demander si la croissance peut être compatible avec la sobriété.", en: "We must therefore ask whether growth can be compatible with restraint." },
          { es: "On peut s'interroger sur ce qui pousse les électeurs à s'abstenir.", en: "One may ask what drives voters to abstain." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the direct problématique into an indirect one with Il convient de se demander.",
            source: "Dans quelle mesure l'école peut-elle corriger les inégalités ?",
            answer: "Il convient de se demander dans quelle mesure l'école peut corriger les inégalités.",
            altAnswers: ["Il convient dès lors de se demander dans quelle mesure l'école peut corriger les inégalités."],
            explanation: "In the indirect form the question depends on \"se demander\": the inversion (\"peut-elle\") and the question mark disappear.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (a direct problématique).",
            source: "To what extent can social networks inform citizens?",
            answer: "Dans quelle mesure les réseaux sociaux peuvent-ils informer les citoyens ?",
            altAnswers: ["Dans quelle mesure les réseaux sociaux sont-ils capables d'informer les citoyens ?"],
            explanation: "A direct problématique with a noun subject uses complex inversion: \"les réseaux sociaux peuvent-ils\".",
          },
        ],
      },
      {
        heading: "Tension, one question, the right place",
        body: [
          "Rules of thumb: one main question (a list of five questions is not a problématique), formulated with tension (\"si... alors que...\", \"faut-il... ou bien...\"), and placed at the end of the introduction, just before the announcement of the plan.",
        ],
        examples: [
          { es: "Faut-il protéger les langues régionales ou bien laisser faire l'usage ?", en: "Should regional languages be protected, or should usage decide?" },
          { es: "Si la ville attire, pourquoi ses habitants la quittent-ils ?", en: "If the city attracts people, why do its residents leave it?" },
          { es: "La problématique se place à la fin de l'introduction, avant l'annonce du plan.", en: "The \"problématique\" comes at the end of the introduction, before the plan is announced." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Where does the problématique go in a dissertation?",
            options: ["At the end of the introduction, just before the plan", "In the very first sentence", "In the conclusion", "At the start of each part"],
            correctIndex: 0,
            explanation: "One main question, built on a tension, placed at the end of the introduction just before the announcement of the plan.",
          },
        ],
      },
      {
        heading: "Indirect questions: si, ce que, ce qui",
        body: [
          "When a question depends on a verb (\"se demander\", \"s'interroger sur\", \"savoir\", \"ignorer\", \"examiner\"), it becomes indirect and changes form. \"Est-ce que\" disappears and yes/no questions take \"si\": \"La réforme est-elle juste ?\" → \"on peut se demander si la réforme est juste\". \"Qu'est-ce que\" and \"que\" become \"ce que\"; \"qu'est-ce qui\" becomes \"ce qui\"; other question words stay (\"où\", \"quand\", \"comment\", \"pourquoi\", \"dans quelle mesure\", \"en quoi\", \"à quoi\", \"lequel\").",
        ],
        examples: [
          { es: "Je me demande ce que l'auteur a voulu dire.", en: "I wonder what the author meant." },
          { es: "Il faudra examiner en quoi ces deux textes se répondent.", en: "We will have to examine how these two texts echo each other." },
          { es: "Reste à savoir à quoi serviront ces crédits.", en: "It remains to be seen what these funds will be used for." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it into an indirect question after on peut se demander.",
            source: "Cette loi est-elle efficace ?",
            answer: "On peut se demander si cette loi est efficace.",
            explanation: "An indirect yes/no question takes \"si\", with normal word order and no question mark.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Nobody knows [what] will happen next.",
            sentence: "Personne ne sait ___ va se passer ensuite.",
            answer: "ce qui",
            explanation: "\"Qu'est-ce qui\" (subject) becomes \"ce qui\" in an indirect question: \"personne ne sait ce qui va se passer\".",
          },
        ],
      },
      {
        heading: "No inversion of a pronoun subject",
        body: [
          "No inversion of a pronoun subject: \"*je me demande pourquoi a-t-il refusé*\" is wrong; write \"je me demande pourquoi il a refusé\". With a noun subject, a stylistic inversion is possible but not compulsory: \"on ignore où mène cette réforme\" or \"on ignore où cette réforme mène\".",
        ],
        examples: [
          { es: "Je me demande pourquoi il a refusé.", en: "I wonder why he refused." },
          { es: "On ignore où mène cette réforme.", en: "Nobody knows where this reform is leading." },
          { es: "On ignore quand le chantier commencera.", en: "Nobody knows when the works will start." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Je me demande comment elle a réussi.",
            question: "What did you hear?",
            options: ["Je me demande comment elle a réussi.", "Je me demande comment a-t-elle réussi.", "Je me demande comment est-ce qu'elle a réussi.", "Je me demande qu'est-ce qu'elle a réussi."],
            correctIndex: 0,
            explanation: "In an indirect question the pronoun subject is not inverted: \"comment elle a réussi\", never \"comment a-t-elle\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Je me demande pourquoi ont-ils voté contre.",
            answer: "Je me demande pourquoi ils ont voté contre.",
            explanation: "After \"je me demande pourquoi\", a pronoun subject keeps normal order: \"ils ont voté\", not \"ont-ils\".",
          },
        ],
      },
      {
        heading: "The trap: qu'est-ce que in writing",
        body: [
          "The trap the syllabus warns about: \"*je me demande qu'est-ce que tu veux*\" and \"*il ne sait pas qu'est-ce qui se passe*\" are extremely common in speech, even among educated natives, but they are colloquial. In writing, and in any formal speech: \"je me demande ce que tu veux\", \"il ne sait pas ce qui se passe\".",
        ],
        examples: [
          { es: "Je me demande ce que tu veux.", en: "I wonder what you want." },
          { es: "Il ne sait pas ce qui se passe.", en: "He doesn't know what's going on." },
          { es: "Dites-moi ce qui vous inquiète.", en: "Tell me what worries you." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence is correct in a dissertation?",
            options: ["On peut s'interroger sur ce qui pousse les électeurs à s'abstenir.", "On peut se demander qu'est-ce qui pousse les électeurs à s'abstenir.", "On peut se demander qu'est-ce que les électeurs font.", "On peut se demander pourquoi les électeurs s'abstiennent-ils."],
            correctIndex: 0,
            explanation: "\"Ce qui\" in an indirect question; no \"qu'est-ce qui\", no inversion of the pronoun.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Je me demande qu'est-ce que les lecteurs retiendront.",
            answer: "Je me demande ce que les lecteurs retiendront.",
            explanation: "\"Qu'est-ce que\" after \"se demander\" is colloquial. In writing the indirect form is \"ce que\".",
          },
        ],
      },
      {
        heading: "Questions as transitions",
        body: [
          "Within an essay, a well-placed question moves the reader from one part to the next: \"Mais qu'en est-il réellement ?\" (but what is the reality?), \"Reste à savoir si...\" (it remains to be seen whether...), \"Encore faut-il se demander si...\" (one must still ask whether...: note the inversion after \"encore\"), \"Une question demeure : ...\", \"Dès lors, comment expliquer que... ?\" (+ subjunctive).",
        ],
        examples: [
          { es: "On présente souvent la ville comme plus sûre qu'avant. Mais qu'en est-il réellement ?", en: "The city is often presented as safer than before. But what is the reality?" },
          { es: "Reste à savoir si ces mesures seront appliquées.", en: "It remains to be seen whether these measures will be applied." },
          { es: "Encore faut-il se demander qui en profitera.", en: "One must still ask who will benefit from it." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "It remains to be seen whether the government will listen.",
            answer: "Reste à savoir si le gouvernement écoutera.",
            altAnswers: ["Reste à savoir si le gouvernement va écouter.", "Il reste à savoir si le gouvernement écoutera.", "Reste à savoir si le gouvernement entendra."],
            explanation: "\"Reste à savoir si\" (it remains to be seen whether) announces what the next part will examine; no \"il\" is needed.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[One must still ask] whether the funding will follow.",
            sentence: "___ si les financements suivront.",
            answer: "Encore faut-il se demander",
            explanation: "\"Encore\" at the head of the sentence triggers inversion: \"encore faut-il\", not \"encore il faut\".",
          },
        ],
      },
      {
        heading: "Signposts, not oratory",
        body: [
          "These are not rhetorical in the oratorical sense: they announce what the next part will answer, like signposts. One per transition is enough; a paragraph that ends with three questions leaves the reader dizzy.",
        ],
        examples: [
          { es: "Une question demeure : qui financera la transition ?", en: "One question remains: who will fund the transition?" },
          { es: "Mais qu'en est-il dans les zones rurales ?", en: "But what about rural areas?" },
          { es: "Une seule question par transition suffit.", en: "One question per transition is enough." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "How many questions should close a transition paragraph?",
            options: ["One", "Three", "As many as possible", "Five, one per argument"],
            correctIndex: 0,
            explanation: "A transition question is a signpost announcing the next part. One is enough; three leave the reader dizzy.",
          },
        ],
      },
      {
        heading: "Comment expliquer que + subjunctive",
        body: [
          "\"Comment expliquer que\" takes the subjunctive, because the fact is presented as something to be explained, not asserted: \"Comment expliquer que l'abstention progresse malgré l'enjeu ?\".",
        ],
        examples: [
          { es: "Dès lors, comment expliquer que l'abstention progresse malgré l'enjeu ?", en: "How then can we explain that abstention is rising despite what is at stake?" },
          { es: "Comment expliquer que les loyers baissent si peu ?", en: "How can one explain that rents are falling so little?" },
          { es: "Comment expliquer que personne ne soit venu ?", en: "How can one explain that nobody came?" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "How can one explain that the town has lost so many residents?",
            answer: "Comment expliquer que la ville ait perdu autant d'habitants ?",
            altAnswers: ["Comment expliquer que la ville ait perdu tant d'habitants ?", "Dès lors, comment expliquer que la ville ait perdu autant d'habitants ?", "Comment expliquer que la ville ait perdu tant de résidents ?"],
            explanation: "\"Comment expliquer que\" takes the subjunctive, because the fact is presented as something to explain: \"ait perdu\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (an indirect problématique).",
        source: "We must therefore ask whether tourism benefits the region.",
        answer: "Il convient dès lors de se demander si le tourisme profite à la région.",
        altAnswers: ["Il convient donc de se demander si le tourisme profite à la région.", "Il faut dès lors se demander si le tourisme profite à la région.", "On peut dès lors se demander si le tourisme profite à la région.", "Il convient dès lors de se demander si le tourisme bénéficie à la région."],
        explanation: "An indirect problématique: \"se demander si\" + indicative, normal word order.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (written style).",
        source: "I wonder why she resigned.",
        answer: "Je me demande pourquoi elle a démissionné.",
        altAnswers: ["Je me demande pour quelle raison elle a démissionné."],
        explanation: "No inversion in an indirect question: \"pourquoi elle a démissionné\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (a direct problématique).",
        source: "In what way is the city also a character in the novel?",
        answer: "En quoi la ville est-elle aussi un personnage du roman ?",
        altAnswers: ["En quoi la ville est-elle également un personnage du roman ?", "En quoi la ville est-elle aussi un personnage dans le roman ?"],
        explanation: "\"En quoi... ?\" opens a direct problématique; the noun subject takes complex inversion: \"la ville est-elle\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "One question remains: how should teachers be trained?",
        answer: "Une question demeure : comment former les enseignants ?",
        altAnswers: ["Une question demeure : comment former les professeurs ?", "Une question reste : comment former les enseignants ?"],
        explanation: "\"Une question demeure :\" + a direct question, here an infinitive one, signposts the next part.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Nobody knows when the bridge will reopen.",
        words: ["On ignore", "quand", "le pont", "rouvrira."],
        translation: "Nobody knows when the bridge will reopen.",
        explanation: "Indirect question after \"ignorer\": \"quand\" + subject + verb, no inversion.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (written style).",
        source: "He doesn't know what the committee decided.",
        answer: "Il ne sait pas ce que le comité a décidé.",
        altAnswers: ["Il ignore ce que le comité a décidé.", "Il ne sait pas ce que la commission a décidé.", "Il ignore ce que la commission a décidé.", "Il ne sait pas ce qu'a décidé le comité."],
        explanation: "\"Ce que\" + normal order or stylistic inversion with the noun subject; never \"qu'est-ce que\" in writing.",
      },
      {
        type: "listen-choose",
        audio: "Reste à savoir qui paiera la facture.",
        question: "What does it mean?",
        options: ["It remains to be seen who will pay the bill.", "We know who will pay the bill.", "Stay to find out who paid the bill.", "The bill that remains will be paid."],
        correctIndex: 0,
        explanation: "\"Reste à savoir\" = it remains to be seen; the indirect question \"qui paiera\" follows without inversion.",
      },
      {
        type: "dictation",
        audio: "En quoi cette réforme est-elle nouvelle ?",
        explanation: "\"En quoi... ?\" with complex inversion: a direct problématique.",
      },
      {
        type: "speak",
        text: "Dès lors, comment expliquer que la confiance recule ?",
        prompt: "Say it in French: How then can we explain that trust is declining?",
        explanation: "\"Comment expliquer que\" + subjunctive (\"recule\") works as a transition.",
      },
      {
        type: "speak",
        text: "Mais qu'en est-il réellement ?",
        tip: "A rising, slightly suspended intonation: you're about to answer.",
        explanation: "\"Qu'en est-il ?\" turns from a received idea to the facts.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (written style).",
        source: "We do not know what the jury expects.",
        answer: "Nous ne savons pas ce que le jury attend.",
        altAnswers: ["On ne sait pas ce que le jury attend.", "Nous ignorons ce que le jury attend.", "On ignore ce que le jury attend.", "Nous ne savons pas ce qu'attend le jury."],
        explanation: "\"Qu'est-ce que\" (object) becomes \"ce que\" in an indirect question: \"ce que le jury attend\".",
      },
    ],
  },
  {
    slug: "c2-one-minute-speech-mission",
    level: "FR-C2",
    number: 4,
    title: "Real-World Mission: Un Discours d'Une Minute",
    summary: "Write and deliver a one-minute speech against the closure of your neighbourhood médiathèque, using at least four emphasis devices: hypophora, an interrogative series, an interpellation and a cleft sentence.",
    duration: "21 min",
    sections: [
      {
        heading: "The brief",
        body: [
          "The situation: the town council of a district of Nantes plans to close the médiathèque Jules-Verne to save 180,000 euros a year. At the public meeting, each resident has exactly one minute at the microphone. You have prepared nothing yet; you have tonight.",
        ],
        examples: [
          { es: "Le conseil envisage de fermer la médiathèque pour économiser 180 000 euros par an.", en: "The council is considering closing the library to save 180,000 euros a year." },
          { es: "Chaque intervenant dispose d'une minute au micro.", en: "Each speaker has one minute at the microphone." },
          { es: "Chaque habitant a exactement une minute.", en: "Each resident has exactly one minute." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Each candidate [has] ten minutes to present themselves.",
            sentence: "Chaque candidat ___ de dix minutes pour se présenter.",
            answer: "dispose",
            explanation: "\"Disposer de\" (to have at one's disposal) takes \"de\": \"chaque candidat dispose de dix minutes\".",
          },
        ],
      },
      {
        heading: "One minute, five moves",
        body: [
          "One minute of spoken French is about 130 to 150 words at a calm pace. That is five or six sentences, so every one must work. A proven plan: (1) an opening hypophora that states the stakes; (2) one or two concrete facts; (3) a short interrogative series; (4) an interpellation of the decision-makers; (5) a closing cleft sentence that sums up your demand.",
        ],
        examples: [
          { es: "Une minute de parole, c'est environ cent cinquante mots.", en: "One minute of speaking is about one hundred and fifty words." },
          { es: "D'abord une hypophore, ensuite un ou deux faits.", en: "First a hypophora, then one or two facts." },
          { es: "On termine sur une phrase clivée.", en: "You finish on a cleft sentence." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In the proven one-minute plan, what comes last?",
            options: ["A cleft sentence that sums up your demand", "An opening hypophora", "One or two concrete facts", "A short series of questions"],
            correctIndex: 0,
            explanation: "The plan runs hypophora, facts, series, interpellation, and ends on a cleft sentence that sums up the demand.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Two minutes of speaking is about three hundred words.",
            answer: "Deux minutes de parole, c'est environ trois cents mots.",
            altAnswers: ["Deux minutes de parole, ça fait environ trois cents mots.", "Deux minutes de parole représentent environ trois cents mots.", "Deux minutes de parole, c'est environ 300 mots."],
            explanation: "The detached subject + \"c'est\" is the spoken way to give a measure; \"trois cents\" takes an s when nothing follows the number.",
          },
        ],
      },
      {
        heading: "Write for the ear",
        body: [
          "Write for the ear: short sentences, concrete nouns, figures rounded (\"près de 2 000 inscrits\" rather than \"1 947\"), and no subordinate clause longer than a breath.",
        ],
        examples: [
          { es: "La médiathèque compte près de 2 000 inscrits, dont la moitié ont moins de dix-huit ans.", en: "The library has nearly 2,000 members, half of whom are under eighteen." },
          { es: "Écrivez pour l'oreille : des phrases courtes et des noms concrets.", en: "Write for the ear: short sentences and concrete nouns." },
          { es: "Près de 500 familles, plutôt que 487.", en: "Nearly 500 families, rather than 487." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it easier on the ear: round the figure with près de.",
            source: "La salle accueille 1 947 visiteurs par mois.",
            answer: "La salle accueille près de 2 000 visiteurs par mois.",
            altAnswers: ["La salle accueille près de deux mille visiteurs par mois."],
            explanation: "Write for the ear: a rounded figure with \"près de\" is easier to hear and remember than an exact one.",
          },
        ],
      },
      {
        heading: "Opening hypophora",
        body: [
          "Opening hypophora: \"Pourquoi fermer la médiathèque ? Pour économiser 180 000 euros. C'est le prix d'un rond-point.\" The answer comes fast, and the comparison does the arguing.",
        ],
        examples: [
          { es: "Pourquoi fermer la médiathèque ? Pour économiser 180 000 euros. C'est le prix d'un rond-point.", en: "Why close the library? To save 180,000 euros. That's the price of a roundabout." },
          { es: "Pourquoi supprimer la ligne 12 ? Pour gagner trois minutes.", en: "Why cut bus line 12? To save three minutes." },
          { es: "Combien coûte ce projet ? Le prix de deux écoles.", en: "How much does this project cost? The price of two schools." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (hypophora).",
            source: "Why close the pool? To save 90,000 euros.",
            answer: "Pourquoi fermer la piscine ? Pour économiser 90 000 euros.",
            altAnswers: ["Pourquoi fermer la piscine ? Pour faire une économie de 90 000 euros.", "Pourquoi fermer la piscine ? Pour économiser quatre-vingt-dix mille euros."],
            explanation: "The hypophora asks with an infinitive (\"pourquoi fermer\") and answers at once with \"pour\" + infinitive.",
          },
        ],
      },
      {
        heading: "Series and interpellation",
        body: [
          "Series and interpellation: \"Où iront les collégiens qui y font leurs devoirs ? Où iront les retraités qui y lisent le journal ? Et vous, mesdames et messieurs les élus, quand y êtes-vous entrés pour la dernière fois ?\". The interpellation turns the series into a challenge.",
        ],
        examples: [
          { es: "Où iront les collégiens qui y font leurs devoirs ?", en: "Where will the schoolchildren who do their homework there go?" },
          { es: "Et vous, mesdames et messieurs les élus, quand y êtes-vous entrés pour la dernière fois ?", en: "And you, councillors, when did you last go in there?" },
          { es: "Et vous, monsieur le directeur, quand avez-vous visité l'atelier pour la dernière fois ?", en: "And you, Director, when did you last visit the workshop?" },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Et vous, monsieur le maire, quand y avez-vous emmené vos enfants pour la dernière fois ?",
            question: "What is the speaker implying?",
            options: ["The mayor hardly ever takes his children there.", "The mayor goes there with his children every week.", "The speaker wants to know the children's ages.", "The mayor arrived late with his children."],
            correctIndex: 0,
            explanation: "\"Quand... pour la dernière fois ?\" in an interpellation implies the answer is shameful: not for a long time.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Where will the children who [play there] on Wednesdays go?",
            sentence: "Où iront les enfants qui ___ le mercredi ?",
            answer: "y jouent",
            explanation: "\"Y\" replaces the place (\"à la médiathèque\") and goes before the verb: \"qui y jouent\".",
          },
        ],
      },
      {
        heading: "Cleft sentences give the weight",
        body: [
          "Cleft sentences, which you studied at the Advanced level, give the closing its weight: \"Ce n'est pas une dépense, c'est un investissement.\" \"Ce que nous demandons, c'est un sursis d'un an et une vraie concertation.\" \"C'est ici que nos enfants ont appris à aimer lire.\" The structure \"ce n'est pas... c'est...\" corrects a frame; \"ce que... c'est...\" builds suspense before the key words.",
        ],
        examples: [
          { es: "Ce n'est pas une dépense, c'est un investissement.", en: "It's not an expense, it's an investment." },
          { es: "Ce que nous demandons, c'est un sursis d'un an et une vraie concertation.", en: "What we're asking for is a one-year reprieve and genuine consultation." },
          { es: "C'est ici que nos enfants ont appris à aimer lire.", en: "It's here that our children learnt to love reading." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence is a cleft (phrase clivée)?",
            options: ["C'est ici que nos enfants ont appris à lire.", "Nos enfants ont appris à lire ici.", "Ici, nos enfants apprennent à lire.", "Où nos enfants apprendront-ils à lire ?"],
            correctIndex: 0,
            explanation: "\"C'est... que\" extracts one element (\"ici\") to put it in focus.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Ce sont les élus qui a décidé de fermer la médiathèque.",
            answer: "Ce sont les élus qui ont décidé de fermer la médiathèque.",
            altAnswers: ["C'est les élus qui ont décidé de fermer la médiathèque."],
            explanation: "In a cleft \"ce sont... qui\", the verb agrees with the highlighted noun: \"les élus qui ont décidé\".",
          },
        ],
      },
      {
        heading: "The model: opening and facts",
        body: [
          "Here is a model of about 140 words, in three movements. It opens with the address, the hypophora and the facts: \"Madame la maire, mesdames et messieurs les élus, pourquoi fermer la médiathèque Jules-Verne ? Pour économiser 180 000 euros par an. C'est le prix d'un rond-point. Or cette médiathèque, ce sont près de 2 000 inscrits, dont la moitié ont moins de dix-huit ans.\"",
        ],
        examples: [
          { es: "Or cette médiathèque, ce sont près de 2 000 inscrits.", en: "Yet this library means nearly 2,000 members." },
          { es: "Madame la maire, mesdames et messieurs les élus, bonsoir.", en: "Madam Mayor, councillors, good evening." },
          { es: "Or ce quartier, ce sont trois écoles et un seul lieu de lecture.", en: "Yet this neighbourhood means three schools and only one place to read." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Yet] this park means a thousand children every Sunday.",
            sentence: "___ ce parc, ce sont mille enfants chaque dimanche.",
            answer: "Or",
            explanation: "\"Or\" (yet, now) introduces the fact that turns the argument against the decision.",
          },
        ],
      },
      {
        heading: "The model: series and interpellation",
        body: [
          "Then comes the series, closed by the interpellation: \"Où iront les collégiens qui y font leurs devoirs le soir ? Où iront les retraités qui y lisent le journal au chaud ? Où iront les familles qui n'ont pas de livres à la maison ? Et vous, mesdames et messieurs les élus, quand y êtes-vous entrés pour la dernière fois ?\"",
        ],
        examples: [
          { es: "Le soir, les collégiens y font leurs devoirs.", en: "In the evening, schoolchildren do their homework there." },
          { es: "Les retraités y lisent le journal au chaud.", en: "Pensioners read the paper there in the warm." },
          { es: "Trois questions, puis on se tourne vers les élus.", en: "Three questions, then you turn to the councillors." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Where will the families who have no books at home go?",
            answer: "Où iront les familles qui n'ont pas de livres à la maison ?",
            altAnswers: ["Où iront les familles qui n'ont aucun livre à la maison ?", "Où iront les familles qui n'ont pas de livres chez elles ?", "Où vont aller les familles qui n'ont pas de livres à la maison ?"],
            explanation: "The third question of the series names the most vulnerable group: escalation.",
          },
        ],
      },
      {
        heading: "The model: the close",
        body: [
          "And the clefts close it: \"Ce n'est pas une dépense, c'est un investissement. Ce que nous demandons, c'est un sursis d'un an et une vraie concertation. Car c'est ici, dans ce quartier, que nos enfants ont appris à aimer lire.\"",
        ],
        examples: [
          { es: "Car c'est ici, dans ce quartier, que nos enfants ont appris à aimer lire.", en: "For it is here, in this neighbourhood, that our children learnt to love reading." },
          { es: "Ce qui compte, c'est l'avenir de ces enfants.", en: "What matters is these children's future." },
          { es: "C'est ensemble que nous la sauverons.", en: "It is together that we will save it." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (the closing line).",
            source: "For it is in this library that I learnt French.",
            answer: "Car c'est dans cette médiathèque que j'ai appris le français.",
            altAnswers: ["Car c'est dans cette bibliothèque que j'ai appris le français.", "C'est dans cette médiathèque que j'ai appris le français.", "Car c'est dans cette médiathèque que j'ai appris à parler français."],
            explanation: "\"C'est... que\" highlights the place; \"car\" links the closing line to the demand before it.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into a cleft with ce n'est pas... c'est...",
            source: "Cette ligne de bus est une nécessité, pas un caprice.",
            answer: "Ce n'est pas un caprice, c'est une nécessité.",
            altAnswers: ["Cette ligne de bus, ce n'est pas un caprice, c'est une nécessité."],
            explanation: "\"Ce n'est pas X, c'est Y\" corrects a frame: reject the opponents' word first, then put yours.",
          },
        ],
      },
      {
        heading: "Delivery",
        body: [
          "Delivery: look up at the councillors for the interpellation; pause after each question in the series (one second); slow down on the final cleft sentence and stop. Don't add \"voilà\" or \"merci\" too quickly: let the last words sit for a moment, then thank the chair.",
        ],
        examples: [
          { es: "Laissez les derniers mots résonner un instant avant de remercier.", en: "Let the last words ring for a moment before thanking." },
          { es: "Je vous remercie de votre attention.", en: "Thank you for your attention." },
          { es: "Regardez les élus au moment de l'interpellation.", en: "Look at the councillors at the moment of the interpellation." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What should you do right after your final cleft sentence?",
            options: ["Stop and let the last words sit, then thank the chair", "Immediately add a quick thank-you", "Ask one more question", "Speed up to finish within the minute"],
            correctIndex: 0,
            explanation: "Slow down on the final cleft and stop: the silence lets it sink in. Thanks come a moment later.",
          },
        ],
      },
      {
        heading: "Count your devices",
        body: [
          "Count your devices: hypophora (pourquoi fermer... ? pour économiser...), series with anaphora (où iront...), interpellation (et vous, mesdames et messieurs les élus), clefts (ce n'est pas... c'est..., ce que... c'est..., c'est ici que...). Mission accomplished.",
        ],
        examples: [
          { es: "Hypophore, série, interpellation, phrases clivées : le compte est bon.", en: "Hypophora, series, interpellation, cleft sentences: all present." },
          { es: "Quatre procédés en une minute, c'est assez.", en: "Four devices in one minute is enough." },
          { es: "Une phrase clivée ferme le discours.", en: "A cleft sentence closes the speech." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "« Et vous, mesdames et messieurs les élus, quand y êtes-vous entrés pour la dernière fois ? » Which device is it?",
            options: ["An interpellation", "A hypophora", "A cleft sentence", "A prétérition"],
            correctIndex: 0,
            explanation: "It addresses the decision-makers directly, by title, with a question: an interpellation.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The pool has nearly 3,000 members, a third of whom are over sixty.",
        answer: "La piscine compte près de 3 000 inscrits, dont un tiers ont plus de soixante ans.",
        altAnswers: ["La piscine compte près de 3 000 inscrits, dont un tiers a plus de soixante ans.", "La piscine compte près de trois mille inscrits, dont un tiers ont plus de soixante ans.", "La piscine compte près de 3 000 adhérents, dont un tiers ont plus de soixante ans."],
        explanation: "\"Compter\" (to have, to number) + a rounded figure; \"dont\" introduces the part of the whole.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "That's the price of a car park.",
        answer: "C'est le prix d'un parking.",
        explanation: "A short comparison after the hypophora does the arguing for you.",
        altAnswers: ["C'est le prix d'un parc de stationnement."],
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (a cleft sentence).",
        source: "It is in this room that everything started.",
        answer: "C'est dans cette salle que tout a commencé.",
        altAnswers: ["C'est dans cette pièce que tout a commencé.", "C'est dans cette salle que tout a débuté."],
        explanation: "The cleft \"c'est... que\" puts the place in the spotlight.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (a pseudo-cleft).",
        source: "What we want is a public debate.",
        answer: "Ce que nous voulons, c'est un débat public.",
        altAnswers: ["Ce que nous demandons, c'est un débat public.", "Ce que nous souhaitons, c'est un débat public.", "Ce qu'on veut, c'est un débat public."],
        explanation: "The pseudo-cleft \"ce que... c'est...\" builds suspense before the key words.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (interpellation).",
        source: "And you, Madam Mayor, when did you last take this bus?",
        answer: "Et vous, madame la maire, quand avez-vous pris ce bus pour la dernière fois ?",
        altAnswers: ["Et vous, madame la maire, quand avez-vous pris ce bus la dernière fois ?", "Et vous, madame le maire, quand avez-vous pris ce bus pour la dernière fois ?"],
        explanation: "Interpellation: \"Et vous\" + title, then a question whose answer is presumed embarrassing.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: What we refuse is a closure without debate.",
        words: ["Ce que nous refusons,", "c'est", "une fermeture", "sans débat."],
        translation: "What we refuse is a closure without debate.",
        explanation: "Pseudo-cleft: \"ce que nous refusons\" first, then \"c'est\" and the key words.",
      },
      {
        type: "listen-choose",
        audio: "Ce n'est pas un luxe, c'est un droit.",
        question: "What does it mean?",
        options: ["It's not a luxury, it's a right.", "It's not a right, it's a luxury.", "It's neither a luxury nor a right.", "This luxury is not a right."],
        correctIndex: 0,
        explanation: "\"Ce n'est pas X, c'est Y\": the speaker rejects one frame and imposes another.",
      },
      {
        type: "dictation",
        audio: "Ce sont les habitants qui paieront la fermeture.",
        explanation: "Cleft \"ce sont... qui\": the verb agrees with \"les habitants\".",
      },
      {
        type: "speak",
        text: "Où iront les collégiens qui y font leurs devoirs ? Où iront les retraités qui y lisent le journal ? Et vous, mesdames et messieurs les élus, quand y êtes-vous entrés pour la dernière fois ?",
        prompt: "Say it in French: Where will the schoolchildren who do their homework there go? Where will the pensioners who read the paper there go? And you, councillors, when did you last go in there?",
        tip: "One second of silence after each question; look up at the councillors on \"Et vous\".",
        explanation: "Series with anaphora, then interpellation: the series becomes a challenge.",
      },
      {
        type: "speak",
        text: "Ce que nous demandons, c'est un sursis d'un an et une vraie concertation. Car c'est ici que nos enfants ont appris à aimer lire.",
        prompt: "Deliver the closing in French: What we're asking for is a one-year reprieve and genuine consultation. For it is here that our children learnt to love reading.",
        tip: "Slow down on the last sentence and stop dead after \"lire\".",
        explanation: "Two clefts in a row: the pseudo-cleft states the demand, the cleft anchors it in the place.",
      },
    ],
  },
  {
    slug: "c2-rhetorical-questions-7",
    level: "FR-C2",
    number: 5,
    title: "Questions Rhétoriques et Structures d'Emphase, Part 7 of 7",
    summary: "Emphasis beyond questions: inversion after à peine, sans doute, peut-être, aussi, ainsi and encore (à peine était-il élu qu'il... ; sans doute a-t-il raison), clefts (c'est... que, ce n'est pas... c'est...), non seulement... mais encore, and voilà ce qui.",
    duration: "21 min",
    sections: [
      {
        heading: "Adverb first, subject after",
        body: [
          "When certain adverbs open a sentence in formal French, the subject pronoun moves after the verb, as in a question: \"Sans doute a-t-il raison.\" \"Peut-être faut-il attendre.\" \"À peine était-il élu qu'il trahissait ses promesses.\" With a noun subject, the inversion is complex: the noun stays in front and a pronoun is added: \"Sans doute le ministre a-t-il raison.\" You saw the mechanism at the Advanced level; at the Mastery level you use it to give rhythm and authority to argument.",
        ],
        examples: [
          { es: "À peine était-il élu qu'il renonçait à ses promesses.", en: "Hardly had he been elected when he gave up his promises." },
          { es: "Sans doute le ministre a-t-il raison sur le fond.", en: "The minister is probably right on the substance." },
          { es: "Peut-être faut-il attendre les résultats de l'enquête.", en: "Perhaps we should wait for the results of the inquiry." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it formal: put sans doute first and invert.",
            source: "Les électeurs ont sans doute compris.",
            answer: "Sans doute les électeurs ont-ils compris.",
            explanation: "With \"sans doute\" at the head and a noun subject, the inversion is complex: the noun stays first and \"-ils\" is added to the auxiliary.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Hardly had she sat down] when the phone rang.",
            sentence: "___ que le téléphone sonna.",
            answer: "À peine s'était-elle assise",
            altAnswers: ["À peine était-elle assise"],
            explanation: "\"À peine\" at the head triggers inversion (\"s'était-elle assise\"), and the second event follows with \"que\".",
          },
        ],
      },
      {
        heading: "The list to master",
        body: [
          "The list to master: \"à peine... que\" (hardly... when), \"sans doute\" (probably), \"peut-être\" (perhaps), \"aussi\" (therefore, NOT also, at the head of a clause), \"ainsi\" (thus, optional inversion), \"encore\" (still, yet, and \"encore faut-il que\" + subjunctive = but only if), \"du moins\" (at least), \"tout au plus\" (at most), \"à plus forte raison\" (all the more so).",
        ],
        examples: [
          { es: "Les crédits ont été gelés ; aussi la médiathèque a-t-elle dû réduire ses horaires.", en: "The funds were frozen; the library therefore had to cut its opening hours." },
          { es: "La réforme est utile ; encore faut-il qu'elle soit financée.", en: "The reform is useful, but only if it is funded." },
          { es: "Ainsi s'achève la première partie de notre réflexion.", en: "Thus ends the first part of our reflection." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "\"Les crédits ont été gelés ; aussi la médiathèque a-t-elle fermé le samedi.\" What does \"aussi\" mean here?",
            options: ["therefore", "also", "too much", "as well as"],
            correctIndex: 0,
            explanation: "At the head of a clause with inversion, \"aussi\" means therefore, a classic trap for English speakers.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (formal).",
            source: "Prices rose; consumption therefore fell.",
            answer: "Les prix ont augmenté ; aussi la consommation a-t-elle baissé.",
            altAnswers: ["Les prix ont augmenté ; aussi la consommation a-t-elle diminué.", "Les prix ont grimpé ; aussi la consommation a-t-elle baissé.", "Les prix ont augmenté, aussi la consommation a-t-elle baissé."],
            explanation: "\"Aussi\" at the head of a clause means therefore and triggers complex inversion: \"la consommation a-t-elle\".",
          },
        ],
      },
      {
        heading: "If you don't want the inversion",
        body: [
          "If you don't want the inversion, move the adverb (\"il a sans doute raison\") or use \"que\" with \"peut-être\" and \"sans doute\" (\"peut-être qu'il faut attendre\", more spoken). What you cannot do in careful writing is keep the adverb at the head without inverting: \"*Sans doute il a raison*\" is heard in speech but marked as incorrect in an essay.",
        ],
        examples: [
          { es: "Elle a sans doute oublié.", en: "She has probably forgotten. (adverb moved)" },
          { es: "Peut-être qu'il faut attendre.", en: "Maybe we should wait. (more spoken)" },
          { es: "Sans doute qu'elle viendra.", en: "She'll probably come. (spoken)" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Peut-être nous devrions refuser cette offre.",
            answer: "Peut-être devrions-nous refuser cette offre.",
            altAnswers: ["Nous devrions peut-être refuser cette offre.", "Peut-être que nous devrions refuser cette offre."],
            explanation: "In careful writing, \"peut-être\" at the head requires inversion (\"devrions-nous\"). Otherwise move the adverb or add \"que\".",
          },
        ],
      },
      {
        heading: "Ce n'est pas... c'est...: correcting a frame",
        body: [
          "The cleft sentence \"c'est... qui / que\" isolates the element you want in focus: \"C'est la ministre qui a signé\" (she, not someone else). At the Mastery level, its negative and explanatory variants matter most in argument. \"Ce n'est pas... c'est...\" corrects a frame: \"Ce n'est pas l'argent qui manque, c'est la volonté.\"",
        ],
        examples: [
          { es: "Ce n'est pas l'argent qui manque, c'est la volonté.", en: "It's not money that's lacking, it's will." },
          { es: "C'est la ministre elle-même qui a signé le décret.", en: "It was the minister herself who signed the decree." },
          { es: "C'est en 1905 que la loi de séparation des Églises et de l'État a été votée.", en: "It was in 1905 that the law separating Church and State was passed." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into a correcting cleft with ce n'est pas... c'est...",
            source: "Le temps manque, pas l'envie.",
            answer: "Ce n'est pas l'envie qui manque, c'est le temps.",
            explanation: "\"Ce n'est pas X qui..., c'est Y\" rejects the assumed cause first, then puts the true one in focus.",
          },
        ],
      },
      {
        heading: "Ce n'est pas que + subjunctive",
        body: [
          "\"Ce n'est pas que\" + subjunctive denies a possible explanation, and \"c'est que\" + indicative gives the true one: \"Ce n'est pas que je refuse de vous aider ; c'est que je n'ai pas le temps.\" (It's not that I refuse..., it's that...). The mood difference is significant: the rejected reason is in the subjunctive.",
        ],
        examples: [
          { es: "Ce n'est pas que je refuse de vous aider ; c'est que je n'ai pas le temps.", en: "It's not that I refuse to help you; it's that I don't have time." },
          { es: "Ce n'est pas qu'il soit paresseux ; c'est qu'il est épuisé.", en: "It's not that he's lazy; it's that he's exhausted." },
          { es: "Ce n'est pas que le projet soit mauvais ; c'est qu'il arrive trop tôt.", en: "It's not that the project is bad; it's that it comes too early." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Ce n'est pas qu'il fait froid ; c'est que le chauffage est en panne.",
            answer: "Ce n'est pas qu'il fasse froid ; c'est que le chauffage est en panne.",
            explanation: "The rejected reason after \"ce n'est pas que\" takes the subjunctive (\"fasse\"); the true reason after \"c'est que\" stays in the indicative (\"est\").",
          },
        ],
      },
      {
        heading: "Voilà ce qui, voilà pourquoi",
        body: [
          "\"Voilà ce qui\" / \"voilà pourquoi\" sum up what precedes with force: \"Des promesses non tenues, des services fermés, des élus absents : voilà ce qui nourrit la colère.\" The list comes first; \"voilà\" gathers it and names the consequence.",
        ],
        examples: [
          { es: "Des promesses non tenues, des services fermés : voilà ce qui nourrit la colère.", en: "Broken promises, closed services: that's what feeds the anger." },
          { es: "Voilà pourquoi nous voterons contre ce texte.", en: "That is why we will vote against this bill." },
          { es: "Des loyers trop chers, des écoles fermées : voilà pourquoi les familles partent.", en: "Rents too high, schools closed: that's why families are leaving." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Fewer buses, more cars: [that's what] worries the residents.",
            sentence: "Moins de bus, plus de voitures : ___ inquiète les habitants.",
            answer: "voilà ce qui",
            explanation: "The list comes first; \"voilà ce qui\" gathers it as the subject of the consequence (\"ce qui inquiète\").",
          },
        ],
      },
      {
        heading: "Non seulement... mais encore",
        body: [
          "\"Non seulement... mais (encore / aussi / en outre)...\" builds an escalation in two steps: \"Cette réforme est non seulement injuste, mais encore inefficace.\" \"Mais encore\" is more emphatic and formal than \"mais aussi\"; \"mais en outre\" is formal and slightly administrative.",
        ],
        examples: [
          { es: "Cette réforme est non seulement injuste, mais encore inefficace.", en: "This reform is not only unfair but also ineffective." },
          { es: "Le projet coûte non seulement de l'argent, mais aussi du temps.", en: "The project costs not only money but also time." },
          { es: "Il convient non seulement de consulter les habitants, mais en outre de publier leurs avis.", en: "One must not only consult residents but also publish their opinions." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Ce plan est non seulement coûteux, mais encore dangereux.",
            question: "What does it mean?",
            options: ["This plan is not only costly but also dangerous.", "This plan is costly only because it is dangerous.", "This plan is not costly, but it is still dangerous.", "Only this plan is costly and dangerous."],
            correctIndex: 0,
            explanation: "\"Non seulement... mais encore\" builds a two-step escalation: costly, and on top of that dangerous.",
          },
        ],
      },
      {
        heading: "Keep the two halves parallel",
        body: [
          "Place \"non seulement\" just before the element it modifies, and make the two halves parallel: \"non seulement injuste, mais encore inefficace\" (two adjectives), \"non seulement elle coûte cher, mais encore elle ne sert à rien\" (two clauses).",
        ],
        examples: [
          { es: "Non seulement la médiathèque prête des livres, mais elle accueille aussi des ateliers d'écriture.", en: "Not only does the library lend books, it also hosts writing workshops." },
          { es: "Non seulement elle coûte cher, mais encore elle ne sert à rien.", en: "Not only is it expensive, it is also useless." },
          { es: "Il est non seulement compétent, mais encore disponible.", en: "He is not only competent but also available." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence keeps the two halves parallel?",
            options: ["Elle est non seulement drôle, mais encore généreuse.", "Non seulement elle est drôle, mais encore généreuse.", "Elle est non seulement drôle, mais encore elle aide tout le monde.", "Elle non seulement est drôle, mais encore généreuse."],
            correctIndex: 0,
            explanation: "Place \"non seulement\" just before the element it modifies, and match it on the other side: two adjectives (\"drôle\", \"généreuse\"), or two full clauses.",
          },
        ],
      },
      {
        heading: "The English trap: no inversion",
        body: [
          "Trap: English inverts after a fronted not only (not only did he lie, but...). French does NOT: \"Non seulement il a menti, mais encore il a accusé les autres.\" Writing \"*Non seulement a-t-il menti*\" is an anglicism a French reader will notice, even though French does invert after \"à peine\", \"sans doute\" and \"aussi\".",
        ],
        examples: [
          { es: "Non seulement il a menti, mais encore il a accusé ses collaborateurs.", en: "Not only did he lie, but he also blamed his staff." },
          { es: "Non seulement elle a gagné, mais encore elle a battu le record.", en: "Not only did she win, she also broke the record." },
          { es: "À peine était-elle arrivée qu'on l'appela.", en: "Hardly had she arrived when she was called." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence is correct French?",
            options: ["Non seulement il a menti, mais encore il a accusé les autres.", "Non seulement a-t-il menti, mais encore il a accusé les autres.", "Non seulement il a menti, mais encore a-t-il accusé les autres.", "Non il a seulement menti, mais encore accusé les autres."],
            correctIndex: 0,
            explanation: "French doesn't invert after \"non seulement\"; inverting is an anglicism.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Not only did they arrive late, but they also left early.",
            answer: "Non seulement ils sont arrivés en retard, mais encore ils sont partis tôt.",
            altAnswers: ["Non seulement ils sont arrivés en retard, mais en plus ils sont partis tôt.", "Non seulement ils sont arrivés en retard, mais aussi ils sont partis tôt.", "Non seulement ils sont arrivés en retard, mais ils sont aussi partis tôt.", "Non seulement ils sont arrivés en retard, mais encore ils sont repartis tôt."],
            explanation: "English inverts after a fronted not only; French does not: \"non seulement ils sont arrivés\", never \"sont-ils arrivés\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (formal, adverb first).",
        source: "He is probably right.",
        answer: "Sans doute a-t-il raison.",
        altAnswers: ["Probablement a-t-il raison."],
        explanation: "\"Sans doute\" (probably) at the head triggers inversion: \"a-t-il\". \"Il a sans doute raison\" is also correct, but it is not the formal adverb-first order the task asks for; \"sans doute qu'il a raison\" is spoken.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The plan is good, but only if it is applied.",
        answer: "Le plan est bon ; encore faut-il qu'il soit appliqué.",
        altAnswers: ["Le plan est bon, encore faut-il qu'il soit appliqué.", "Le plan est bon ; encore faut-il qu'il soit mis en œuvre.", "Ce plan est bon ; encore faut-il qu'il soit appliqué."],
        explanation: "\"Encore faut-il que\" + subjunctive (but only if): inversion after \"encore\", subjunctive after \"il faut que\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (a cleft).",
        source: "It was the mayor himself who opened the debate.",
        answer: "C'est le maire lui-même qui a ouvert le débat.",
        altAnswers: ["C'était le maire lui-même qui a ouvert le débat.", "C'est le maire lui-même qui avait ouvert le débat."],
        explanation: "The cleft \"c'est... qui\" puts the agent in focus; \"lui-même\" reinforces him.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Hardly had he arrived when the meeting began.",
        words: ["À peine", "était-il", "arrivé", "que", "la réunion commença."],
        translation: "Hardly had he arrived when the meeting began.",
        explanation: "\"À peine\" + inversion + \"que\"; the passé simple suits the literary narration.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "That is why we are asking for a delay.",
        answer: "Voilà pourquoi nous demandons un délai.",
        altAnswers: ["Voilà pourquoi nous demandons un report.", "C'est pourquoi nous demandons un délai.", "Voilà pourquoi nous réclamons un délai."],
        explanation: "\"Voilà pourquoi\" sums up the reasons just given and names the consequence.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The new building is not only ugly but also impractical.",
        answer: "Le nouveau bâtiment est non seulement laid, mais encore peu pratique.",
        altAnswers: ["Le nouveau bâtiment est non seulement laid, mais aussi peu pratique.", "Le nouveau bâtiment est non seulement laid, mais encore malcommode.", "Le nouveau bâtiment est non seulement laid, mais en plus peu pratique."],
        explanation: "\"Non seulement\" sits just before the first adjective, \"mais encore\" before the second: parallel halves.",
      },
      {
        type: "dictation",
        audio: "Ce n'est pas que je refuse ; c'est que je n'ai pas le temps.",
        explanation: "\"Ce n'est pas que\" + subjunctive, \"c'est que\" + indicative.",
      },
      {
        type: "speak",
        text: "Ce n'est pas le talent qui manque, c'est le travail.",
        prompt: "Say it in French: It's not talent that's lacking, it's work.",
        tip: "Stress \"argent\" and \"volonté\": the two poles of the correction.",
        explanation: "\"Ce n'est pas... c'est...\" corrects a frame: stress \"talent\", pause, then \"travail\".",
      },
      {
        type: "speak",
        text: "Peut-être la mairie a-t-elle oublié les familles.",
        prompt: "Say it in French, formally: Perhaps the town hall has forgotten the families.",
        tip: "\"A-t-il\" is said as one unit: a-til.",
        explanation: "\"Peut-être\" at the head with a noun subject: complex inversion, \"la mairie a-t-elle\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (polite vous).",
        source: "It's not that I don't like the film; it's that it's too long.",
        answer: "Ce n'est pas que je n'aime pas le film ; c'est qu'il est trop long.",
        altAnswers: ["Ce n'est pas que le film me déplaise ; c'est qu'il est trop long.", "Ce n'est pas que je n'aime pas le film, c'est qu'il est trop long."],
        explanation: "\"Ce n'est pas que\" + subjunctive rejects a reason; \"c'est que\" + indicative gives the real one.",
      },
    ],
  },
  {
    slug: "c2-rhetorical-figures-spiral",
    level: "FR-C2",
    number: 6,
    title: "Spiral Review: Les Figures Rhétoriques",
    summary: "Metaphor, hyperbole, anaphora, hypophora, interpellation, antithesis, chiasmus and prétérition: identify each figure in short extracts from classic texts, speeches and editorials, and say what it does.",
    duration: "19 min",
    sections: [
      {
        heading: "Métaphore and comparaison",
        body: [
          "\"La métaphore\" names one thing by another without \"comme\": Pascal's « roseau pensant » makes man both fragile (the reed) and great (thinking). \"La comparaison\" keeps the tool word (\"fragile comme un roseau\"). In editorials, metaphors often come in families: \"le navire\" of State, \"la tempête\" of the markets, \"le cap\" to hold.",
        ],
        examples: [
          { es: "L'homme n'est qu'un roseau, le plus faible de la nature ; mais c'est un roseau pensant.", en: "Man is but a reed, the weakest in nature; but he is a thinking reed. (Pascal, metaphor)" },
          { es: "Le gouvernement prétend tenir le cap au milieu de la tempête.", en: "The government claims to hold its course in the middle of the storm. (extended metaphor)" },
          { es: "Il est fragile comme un roseau.", en: "He is as fragile as a reed. (comparison)" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which is a metaphor rather than a comparison?",
            options: ["Le navire de l'État prend l'eau.", "Il est fragile comme un roseau.", "Elle court tel un lièvre.", "Il est rusé comme un renard."],
            correctIndex: 0,
            explanation: "A metaphor names one thing by another with no tool word; \"comme\" or \"tel\" make the other three comparisons.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The minister wants to steer the ship through the storm.",
            answer: "Le ministre veut mener le navire à travers la tempête.",
            altAnswers: ["Le ministre veut conduire le navire à travers la tempête.", "La ministre veut mener le navire à travers la tempête.", "Le ministre veut guider le navire à travers la tempête."],
            explanation: "An extended metaphor: the State is a ship (\"le navire\"), the crisis a storm (\"la tempête\").",
          },
        ],
      },
      {
        heading: "Hyperbole and gradation",
        body: [
          "\"L'hyperbole\" exaggerates for effect (\"je vous l'ai dit mille fois\", \"un océan de paperasse\"). \"La gradation\" arranges terms in rising (or falling) intensity. Rostand's Cyrano combines both in the famous tirade on his own nose: « C'est un roc !... c'est un pic !... c'est un cap ! / Que dis-je, c'est un cap ?... C'est une péninsule ! »",
        ],
        examples: [
          { es: "C'est un roc !... c'est un pic !... c'est un cap ! Que dis-je, c'est un cap ?... C'est une péninsule !", en: "It's a rock!... a peak!... a cape! What am I saying, a cape?... It's a peninsula! (Rostand, gradation and hyperbole)" },
          { es: "Les PME se noient dans un océan de paperasse.", en: "Small businesses are drowning in an ocean of paperwork. (hyperbole, metaphor)" },
          { es: "Je vous l'ai dit mille fois !", en: "I've told you a thousand times! (hyperbole)" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "\"C'est un roc !... c'est un pic !... c'est un cap ! Que dis-je, c'est un cap ?... C'est une péninsule !\" What do the terms form?",
            options: ["a rising gradation ending in hyperbole", "a chiasmus", "a prétérition", "an interpellation"],
            correctIndex: 0,
            explanation: "Each term is bigger than the last; \"que dis-je\" corrects upwards to the absurd \"péninsule\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Teachers are collapsing under a mountain of forms.",
            answer: "Les enseignants croulent sous une montagne de formulaires.",
            altAnswers: ["Les professeurs croulent sous une montagne de formulaires.", "Les enseignants s'effondrent sous une montagne de formulaires."],
            explanation: "Hyperbole exaggerates for effect: \"crouler sous une montagne de\" turns a pile of forms into a landslide.",
          },
        ],
      },
      {
        heading: "L'épanorthose: que dis-je",
        body: [
          "That \"que dis-je\" is itself a figure, \"l'épanorthose\": the speaker corrects himself to go further. It is a favourite of French speakers: \"C'est une erreur, que dis-je, une faute.\"",
        ],
        examples: [
          { es: "C'est une erreur, que dis-je, une faute.", en: "It's a mistake, what am I saying, a blunder. (self-correction)" },
          { es: "C'est un retard, que dis-je, un fiasco.", en: "It's a delay, what am I saying, a fiasco." },
          { es: "Il est prudent, que dis-je, timoré.", en: "He is cautious, what am I saying, timid." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "C'est une maladresse, que dis-je, une provocation.",
            question: "Which figure do you hear?",
            options: ["épanorthose: the speaker corrects himself upwards", "prétérition", "chiasmus", "hypophora"],
            correctIndex: 0,
            explanation: "\"Que dis-je\" marks the épanorthose: the speaker corrects himself upwards, from a clumsy act to a provocation.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into an épanorthose with que dis-je, going further with ruineux.",
            source: "Ce projet est coûteux.",
            answer: "Ce projet est coûteux, que dis-je, ruineux.",
            explanation: "In an épanorthose the speaker corrects himself upwards: the first word, then \"que dis-je\", then a stronger one.",
          },
        ],
      },
      {
        heading: "L'anaphore",
        body: [
          "\"L'anaphore\" repeats words at the head of successive units. Zola's J'accuse (1898) ends with a series of paragraphs that all begin « J'accuse... » (« J'accuse le lieutenant-colonel du Paty de Clam... », « J'accuse le général Mercier... »), hammering each name. You built anaphoric questions in Unit 19.",
        ],
        examples: [
          { es: "J'accuse le lieutenant-colonel du Paty de Clam d'avoir été l'ouvrier diabolique de l'erreur judiciaire.", en: "I accuse Lieutenant-Colonel du Paty de Clam of having been the diabolical agent of the miscarriage of justice. (Zola, the first of the J'accuse paragraphs)" },
          { es: "J'accuse le général Mercier.", en: "I accuse General Mercier." },
          { es: "Nous voulons des écoles. Nous voulons des médecins. Nous voulons être entendus.", en: "We want schools. We want doctors. We want to be heard." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (a commentary sentence).",
            source: "The anaphora hammers home the names of the accused.",
            answer: "L'anaphore martèle les noms des accusés.",
            altAnswers: ["L'anaphore met en relief les noms des accusés.", "L'anaphore fait résonner les noms des accusés.", "L'anaphore martèle le nom des accusés."],
            explanation: "\"Marteler\" (to hammer) is the classic verb for the effect of an anaphora, as in Zola's repeated \"J'accuse\".",
          },
        ],
      },
      {
        heading: "L'antithèse",
        body: [
          "\"L'antithèse\" brings opposites together in a balanced structure: Corneille's « À vaincre sans péril, on triomphe sans gloire » (Le Cid) sets danger against glory; Hugo's poetry is full of light and shadow, the sublime and the grotesque. In editorials: \"une loi votée dans l'urgence, appliquée dans la confusion\".",
        ],
        examples: [
          { es: "À vaincre sans péril, on triomphe sans gloire.", en: "To conquer without danger is to triumph without glory. (Corneille, antithesis)" },
          { es: "Une loi votée dans l'urgence, appliquée dans la confusion.", en: "A law passed in haste, applied in confusion. (parallelism)" },
          { es: "Grand par ses ambitions, petit par ses moyens.", en: "Great in its ambitions, small in its means." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "\"À vaincre sans péril, on triomphe sans gloire.\" Which figure dominates?",
            options: ["antithesis (danger vs glory in a balanced line)", "prétérition", "interpellation", "hypophora"],
            correctIndex: 0,
            explanation: "Two balanced halves oppose the absence of danger and the absence of glory.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The text is rich in promises [and poor in deeds].",
            sentence: "Le texte est riche en promesses ___.",
            answer: "et pauvre en actes",
            altAnswers: ["mais pauvre en actes"],
            explanation: "An antithesis balances opposites in parallel halves: \"riche en promesses\" / \"pauvre en actes\".",
          },
        ],
      },
      {
        heading: "Le chiasme",
        body: [
          "\"Le chiasme\" crosses the terms in an ABBA pattern: Molière's miser hears « il faut manger pour vivre, et non pas vivre pour manger » (L'Avare). Chiasmus makes a line memorable and often reverses a priority. Political speeches love it: \"Il ne s'agit pas de vivre pour travailler, mais de travailler pour vivre.\"",
        ],
        examples: [
          { es: "Il faut manger pour vivre, et non pas vivre pour manger.", en: "One must eat to live, not live to eat. (from The Miser: chiasmus)" },
          { es: "Il ne s'agit pas de vivre pour travailler, mais de travailler pour vivre.", en: "It's not about living to work, but working to live. (chiasmus)" },
          { es: "Un roi qui sert, un serviteur qui règne.", en: "A king who serves, a servant who reigns." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which line is a chiasmus (ABBA)?",
            options: ["Il faut vivre pour aimer, et non aimer pour vivre.", "Une loi votée dans l'urgence, appliquée dans la confusion.", "C'est un roc, c'est un pic, c'est un cap.", "Je ne parlerai pas des frais de réception."],
            correctIndex: 0,
            explanation: "A chiasmus crosses the terms: vivre (A), aimer (B), then aimer (B), vivre (A). The others are a parallelism, a gradation and a prétérition.",
          },
        ],
      },
      {
        heading: "Figures of address",
        body: [
          "You know these from Unit 19. \"L'hypophore\" asks and answers (Beaumarchais: « Qu'avez-vous fait pour tant de biens ? Vous vous êtes donné la peine de naître, et rien de plus. »). \"L'interpellation\" turns to a named target (« Et vous, monsieur le ministre... »). \"La prétérition\" says what it claims to leave unsaid (\"je ne parlerai pas de...\"). And \"la question rhétorique\" asserts by asking.",
        ],
        examples: [
          { es: "L'interpellation implique directement le ministre dans le débat.", en: "The interpellation directly involves the minister in the debate." },
          { es: "La question rhétorique crée une connivence avec le lecteur.", en: "The rhetorical question creates complicity with the reader." },
          { es: "Je ne parlerai pas du coût des travaux.", en: "I won't mention the cost of the works. (paralipsis)" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (a commentary sentence).",
            source: "The interpellation directly targets the mayor.",
            answer: "L'interpellation vise directement le maire.",
            altAnswers: ["L'interpellation cible directement le maire.", "L'interpellation vise directement la maire."],
            explanation: "An interpellation turns to a named target; \"viser\" (to target) is a useful commentary verb.",
          },
        ],
      },
      {
        heading: "Real texts mix figures",
        body: [
          "The Beaumarchais line is a good test: it is at once an interpellation (addressed to the count), a hypophora (question and answer), and an antithesis (birth vs merit). Real texts mix figures; your commentary should name the dominant one and say what it does: \"l'hypophore permet à Figaro de...\", \"l'antithèse oppose...\", \"la prétérition souligne, sous couvert de le taire, ...\".",
        ],
        examples: [
          { es: "L'hypophore permet à Figaro de répondre lui-même à la question qu'il pose.", en: "The hypophora lets Figaro answer the question he himself asks." },
          { es: "L'antithèse oppose la naissance au mérite.", en: "The antithesis sets birth against merit." },
          { es: "La prétérition souligne, sous couvert de le taire, le coût du projet.", en: "The paralipsis highlights the project's cost while claiming to keep quiet about it." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In « Vous vous êtes donné la peine de naître, et rien de plus », what does the antithesis oppose?",
            options: ["Birth and merit", "Wealth and poverty", "The count and the king", "Speech and silence"],
            correctIndex: 0,
            explanation: "Figaro sets the count's only effort, being born, against the merit he lacks: birth versus merit.",
          },
        ],
      },
      {
        heading: "Verbs for commenting",
        body: [
          "Useful verbs for commenting: \"souligner\", \"mettre en relief\", \"créer un effet de\", \"renforcer\", \"opposer\", \"interpeller\", \"impliquer le lecteur\".",
        ],
        examples: [
          { es: "La métaphore met en relief la fragilité de l'homme.", en: "The metaphor highlights man's fragility." },
          { es: "L'anaphore crée un effet d'insistance.", en: "The anaphora creates an effect of insistence." },
          { es: "La question rhétorique implique le lecteur.", en: "The rhetorical question involves the reader." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The hyperbole [highlights] the absurdity of the situation.",
            sentence: "L'hyperbole ___ l'absurdité de la situation.",
            answer: "met en relief",
            altAnswers: ["souligne", "met en évidence"],
            explanation: "\"Mettre en relief\" (to highlight) says what a figure does, which is what a commentary must name.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "L'antithèse oppose la richesse avec la pauvreté.",
            answer: "L'antithèse oppose la richesse à la pauvreté.",
            explanation: "\"Opposer\" takes \"à\": \"opposer A à B\", never \"avec\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "matching",
        instructions: "Match each extract with its figure.",
        pairs: [
          { left: "un roseau pensant", right: "metaphor" },
          { left: "un océan de paperasse", right: "hyperbole" },
          { left: "un roc, un pic, un cap, une péninsule", right: "gradation" },
          { left: "C'est une erreur, que dis-je, une faute.", right: "self-correction that goes further (épanorthose)" },
        ],
        explanation: "Image (metaphor), exaggeration (hyperbole), rising sequence (gradation), self-correction (épanorthose).",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (a commentary sentence).",
        source: "The paralipsis draws attention to what it claims to hide.",
        answer: "La prétérition attire l'attention sur ce qu'elle prétend cacher.",
        altAnswers: ["La prétérition attire l'attention sur ce qu'elle prétend taire.", "La prétérition attire l'attention sur ce qu'elle feint de cacher."],
        explanation: "\"Attirer l'attention sur\" + \"ce que\": the prétérition says what it pretends to leave out.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "A promise made in spring, forgotten in autumn.",
        answer: "Une promesse faite au printemps, oubliée à l'automne.",
        altAnswers: ["Une promesse faite au printemps, oubliée en automne."],
        explanation: "A parallelism in two balanced halves, each a participle + a time phrase.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: The chiasmus makes the line memorable.",
        words: ["Le chiasme", "rend", "la formule", "mémorable."],
        translation: "The chiasmus makes the line memorable.",
        explanation: "\"Rendre\" + noun + adjective (to make something memorable): a key commentary structure.",
      },
      {
        type: "fill-blank",
        explanation: "\"Que dis-je\" signals the épanorthose: the speaker corrects himself to go further.",
        prompt: "Write the French for the bold words.",
        en: "[What am I saying], it's a peninsula!",
        sentence: "___, c'est une péninsule !",
        answer: "Que dis-je",
      },
      {
        type: "speak",
        text: "Je ne parlerai pas de ses absences répétées.",
        prompt: "Say it in French: I won't mention his repeated absences.",
        tip: "Stress the crossed words: VIVRE... TRAVAILLER / TRAVAILLER... VIVRE.",
        explanation: "A prétérition: announcing you won't mention something, and mentioning it.",
      },
      {
        type: "fill-blank",
        explanation: "The chiasmus crosses the terms: servir/gouverner, then gouverner/servir.",
        prompt: "Write the French for the bold words.",
        en: "One must serve in order to govern, [and not govern in order to serve].",
        sentence: "Il faut servir pour gouverner, ___.",
        answer: "et non gouverner pour servir",
        altAnswers: ["et non pas gouverner pour servir"],
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (keep the chiasmus).",
        source: "The chiasmus reverses the priority.",
        answer: "Le chiasme inverse la priorité.",
        altAnswers: ["Le chiasme renverse la priorité.", "Le chiasme inverse l'ordre des priorités.", "Le chiasme inverse les priorités."],
        explanation: "A chiasmus often reverses a priority: \"inverser\" is the verb to name that effect.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (a commentary sentence).",
        source: "The metaphor turns the State into a ship.",
        answer: "La métaphore fait de l'État un navire.",
        altAnswers: ["La métaphore transforme l'État en navire.", "La métaphore fait de l'État un bateau."],
        explanation: "\"Faire de A un B\" (to turn A into B) describes what a metaphor does.",
      },
      {
        type: "speak",
        text: "Qu'avez-vous fait pour tant de biens ? Vous vous êtes donné la peine de naître, et rien de plus.",
        tip: "A pause after the question, then a dry, cutting answer; slow down on \"et rien de plus\".",
        explanation: "Interpellation, hypophora and antithesis in one of the most famous lines of French theatre.",
      },
    ],
  },
  {
    slug: "c2-vocab-economics-fine",
    level: "FR-C2",
    number: 7,
    title: "Mastery Vocabulary: Fine Economic Vocabulary",
    summary: "The vocabulary of economic news with its exact nuances: déflation and stagflation, rebond and bulle, écart de taux, liquidité and solvabilité, plan de sauvetage, décote, impayés, droits de douane, travail au noir and pouvoir d'achat.",
    duration: "21 min",
    sections: [
      {
        heading: "Inflation, désinflation, déflation",
        body: [
          "\"L'inflation\" is a general rise in prices; \"la désinflation\" is a slowing of that rise (prices still go up, but less fast); \"la déflation\" is a general fall in prices, feared because households postpone purchases. Journalists often confuse désinflation and déflation; a Mastery reader doesn't.",
        ],
        examples: [
          { es: "Avec la désinflation, les prix augmentent encore, mais moins vite.", en: "With disinflation, prices still rise, but more slowly." },
          { es: "La déflation pousse les ménages à reporter leurs achats.", en: "Deflation leads households to put off their purchases." },
          { es: "L'inflation a atteint 6 % l'an dernier.", en: "Inflation reached 6% last year." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Prices rose 5% last year and 2% this year. What is this?",
            options: ["la désinflation", "la déflation", "la stagflation", "la récession"],
            correctIndex: 0,
            explanation: "Prices are still rising, only more slowly: désinflation. Déflation would mean falling prices.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Les prix montent moins vite : c'est la déflation.",
            answer: "Les prix montent moins vite : c'est la désinflation.",
            explanation: "Prices that still rise, only more slowly, mean \"la désinflation\". \"La déflation\" would mean that prices actually fall.",
          },
        ],
      },
      {
        heading: "Stagflation, récession, rebond, reprise",
        body: [
          "\"La stagflation\" combines stagnation (weak growth, high unemployment) and inflation, the nightmare of the 1970s oil shocks. \"La récession\" is a fall in output (technically two consecutive quarters of negative growth); \"le rebond\" (rebound) or \"la reprise\" (recovery) follows. A rebound is a short technical bounce; a recovery is lasting.",
        ],
        examples: [
          { es: "Les années 1970 ont été marquées par la stagflation.", en: "The 1970s were marked by stagflation." },
          { es: "Après la récession, l'économie a connu un rebond technique, mais pas encore une véritable reprise.", en: "After the recession, the economy saw a technical rebound, but not yet a real recovery." },
          { es: "La reprise se confirme depuis six mois.", en: "The recovery has been confirmed for six months." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "After two bad quarters, the stock market saw a [technical rebound].",
            sentence: "Après deux mauvais trimestres, la Bourse a connu un ___.",
            answer: "rebond technique",
            explanation: "A short bounce after a fall is \"un rebond technique\"; a lasting improvement would be \"une reprise\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The country went into recession in the spring.",
            answer: "Le pays est entré en récession au printemps.",
            altAnswers: ["Le pays est tombé en récession au printemps.", "Le pays a basculé dans la récession au printemps."],
            explanation: "\"Entrer en récession\": a fall in output, technically two consecutive quarters of negative growth.",
          },
        ],
      },
      {
        heading: "Bubbles swell and burst",
        body: [
          "\"Une bulle\" (spéculative, immobilière) is a rise in asset prices far beyond their real value; it \"gonfle\" (swells) and then \"éclate\" (bursts): \"l'éclatement de la bulle internet\".",
        ],
        examples: [
          { es: "La bulle immobilière a fini par éclater.", en: "The housing bubble eventually burst." },
          { es: "L'éclatement de la bulle internet a ruiné de nombreux épargnants.", en: "The bursting of the dotcom bubble ruined many savers." },
          { es: "La bulle spéculative continue de gonfler.", en: "The speculative bubble keeps swelling." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The tech bubble burst in 2000.",
            answer: "La bulle technologique a éclaté en 2000.",
            altAnswers: ["La bulle technologique a éclaté en l'an 2000.", "La bulle des valeurs technologiques a éclaté en 2000.", "La bulle internet a éclaté en 2000."],
            explanation: "A bubble \"gonfle\" and then \"éclate\": the verb is intransitive, so \"la bulle a éclaté\".",
          },
        ],
      },
      {
        heading: "L'écart de taux",
        body: [
          "\"L'écart de taux\" (the spread) is the difference between the interest rates at which two States borrow; when the gap between France and Germany widens, the press speaks of markets losing confidence. Rates \"se tendent\" (rise) or \"se détendent\" (fall).",
        ],
        examples: [
          { es: "L'écart de taux entre la France et l'Allemagne s'est creusé.", en: "The spread between France and Germany has widened." },
          { es: "Les taux se tendent après l'annonce du déficit.", en: "Rates are rising after the deficit announcement." },
          { es: "Les taux italiens se détendent enfin.", en: "Italian rates are finally easing." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "The press writes that rates « se tendent ». What is happening?",
            options: ["They are rising", "They are falling", "They are stable", "They are being abolished"],
            correctIndex: 0,
            explanation: "Rates \"se tendent\" when they rise and \"se détendent\" when they fall.",
          },
          {
            type: "listen-choose",
            audio: "L'écart de taux entre l'Italie et l'Allemagne se réduit.",
            question: "What does it mean?",
            options: ["The spread between Italy and Germany is narrowing.", "The exchange rate between Italy and Germany is rising.", "Italy and Germany are cutting their taxes.", "The gap in growth rates has widened."],
            correctIndex: 0,
            explanation: "\"L'écart de taux\" is the spread between borrowing rates; \"se réduire\" means it is narrowing, a sign of returning confidence.",
          },
        ],
      },
      {
        heading: "Liquidité or solvabilité",
        body: [
          "Two words that a bank crisis forces you to separate: \"la liquidité\" is having cash available now; \"la solvabilité\" is having more assets than debts overall. A bank can be solvent but illiquid (a run on deposits), or liquid for now but insolvent (hidden losses). The adjective: \"solvable\" / \"insolvable\".",
        ],
        examples: [
          { es: "La banque était solvable, mais elle manquait de liquidités.", en: "The bank was solvent, but it was short of cash." },
          { es: "Une entreprise insolvable doit plus qu'elle ne possède.", en: "An insolvent company owes more than it owns." },
          { es: "Les déposants ont tous retiré leur argent le même jour.", en: "The depositors all withdrew their money on the same day." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A bank has more assets than debts but cannot pay depositors who all want their money today. It is...",
            options: ["solvable, mais en manque de liquidités", "insolvable et liquide", "en déflation", "en stagflation"],
            correctIndex: 0,
            explanation: "Solvency is the overall balance; liquidity is cash available now.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The company is liquid for now, but insolvent.",
            answer: "L'entreprise est liquide pour l'instant, mais insolvable.",
            altAnswers: ["L'entreprise dispose de liquidités pour l'instant, mais elle est insolvable.", "La société est liquide pour le moment, mais insolvable.", "L'entreprise est liquide pour le moment, mais insolvable."],
            explanation: "Liquidity is cash now; solvency is assets above debts overall. A firm can have cash today and still be \"insolvable\".",
          },
        ],
      },
      {
        heading: "Sauvetage, décote, impayés, créance",
        body: [
          "\"Un plan de sauvetage\" is a bailout; \"une décote\" is a discount on a value (a haircut on debt: \"une décote de 50 % sur la dette grecque\", or a markdown on a property); \"les impayés\" are unpaid bills or rents; \"une créance\" is a debt seen from the creditor's side.",
        ],
        examples: [
          { es: "L'État a adopté un plan de sauvetage de plusieurs milliards d'euros.", en: "The State adopted a bailout worth several billion euros." },
          { es: "Les créanciers ont accepté une décote de 50 % sur la dette.", en: "The creditors accepted a 50% haircut on the debt." },
          { es: "Les bailleurs sociaux signalent une hausse des impayés de loyer.", en: "Social landlords report a rise in unpaid rent." },
          { es: "Cette maison s'est vendue avec une décote de 15 % en raison des travaux.", en: "This house sold at a 15% discount because of the work needed." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The flat was sold at a 10% [discount].",
            sentence: "L'appartement s'est vendu avec une ___ de 10 %.",
            answer: "décote",
            explanation: "\"Une décote\" is a discount on a value, whether a haircut on debt or a markdown on a property.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The bank holds a [claim] on the company.",
            sentence: "La banque détient une ___ sur l'entreprise.",
            answer: "créance",
            explanation: "\"Une créance\" is a debt seen from the creditor's side: the bank is owed the money.",
          },
        ],
      },
      {
        heading: "Le pouvoir d'achat",
        body: [
          "\"Le pouvoir d'achat\" (purchasing power) is the central topic of French political debate: it \"progresse\", \"recule\", \"s'érode\". It depends on wages, prices and \"les prestations sociales\" (benefits).",
        ],
        examples: [
          { es: "Le pouvoir d'achat des retraités s'est érodé avec l'inflation.", en: "Pensioners' purchasing power has been eroded by inflation." },
          { es: "Le pouvoir d'achat a progressé de 1 % cette année.", en: "Purchasing power rose 1% this year." },
          { es: "Les prestations sociales soutiennent le pouvoir d'achat.", en: "Social benefits support purchasing power." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change the verb to say it is falling, with reculer.",
            source: "Le pouvoir d'achat des jeunes progresse.",
            answer: "Le pouvoir d'achat des jeunes recule.",
            explanation: "Purchasing power \"progresse\" (rises), \"recule\" (falls) or \"s'érode\" (is gradually worn away).",
          },
        ],
      },
      {
        heading: "Droits de douane, not tarifs",
        body: [
          "\"Les droits de douane\" are customs duties (tariffs): a government \"relève\" (raises) or \"abaisse\" them, and trade partners respond with \"des mesures de rétorsion\" (retaliatory measures). \"Les tarifs douaniers\" exists, but \"les tarifs\" on its own usually means prices (\"les tarifs de la SNCF\").",
        ],
        examples: [
          { es: "Washington a relevé les droits de douane sur l'acier européen.", en: "Washington raised tariffs on European steel." },
          { es: "Bruxelles prépare des mesures de rétorsion.", en: "Brussels is preparing retaliatory measures." },
          { es: "Les tarifs de l'électricité augmenteront de 4 % en février.", en: "Electricity prices will go up by 4% in February." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence is about customs duties rather than prices?",
            options: ["Paris abaisse les droits de douane sur le vin.", "Les tarifs de la SNCF augmentent.", "Les tarifs du train baissent en été.", "Le tarif réduit s'applique aux étudiants."],
            correctIndex: 0,
            explanation: "Customs duties are \"les droits de douane\"; \"les tarifs\" on its own usually means prices.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The EU lowered customs duties on Chinese cars.",
            answer: "L'UE a abaissé les droits de douane sur les voitures chinoises.",
            altAnswers: ["L'Union européenne a abaissé les droits de douane sur les voitures chinoises.", "L'UE a baissé les droits de douane sur les voitures chinoises."],
            explanation: "A government \"relève\" (raises) or \"abaisse\" (lowers) \"les droits de douane\".",
          },
        ],
      },
      {
        heading: "Le travail au noir",
        body: [
          "\"Le travail au noir\" (or \"le travail dissimulé\" in legal language) is undeclared work: \"être payé au noir\", \"travailler au noir\". It deprives the State of \"cotisations sociales\" (social contributions) and leaves the worker without protection.",
        ],
        examples: [
          { es: "Il a été payé au noir pendant deux ans, sans aucune cotisation.", en: "He was paid cash in hand for two years, without any contributions." },
          { es: "Le travail dissimulé prive l'État de recettes considérables.", en: "Undeclared work deprives the State of considerable revenue." },
          { es: "Elle a travaillé au noir dans un restaurant.", en: "She worked off the books in a restaurant." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "They hired three workers off the books.",
            answer: "Ils ont embauché trois ouvriers au noir.",
            altAnswers: ["Ils ont employé trois ouvriers au noir.", "Ils ont embauché trois ouvriers non déclarés.", "Ils ont embauché trois travailleurs au noir."],
            explanation: "\"Au noir\" (undeclared) follows the verb or noun; the legal term is \"le travail dissimulé\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Deflation weighs on investment.",
        answer: "La déflation pèse sur l'investissement.",
        altAnswers: ["La déflation pèse sur les investissements."],
        explanation: "Falling prices make people wait, so \"la déflation pèse sur\" spending and investment.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Unpaid bills are piling up.",
        answer: "Les impayés s'accumulent.",
        altAnswers: ["Les factures impayées s'accumulent.", "Les impayés s'empilent."],
        explanation: "\"Les impayés\" is a plural noun: unpaid bills or rents.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The bank received a bailout from the State.",
        answer: "La banque a bénéficié d'un plan de sauvetage de l'État.",
        altAnswers: ["La banque a reçu un plan de sauvetage de l'État.", "La banque a bénéficié d'un plan de sauvetage public."],
        explanation: "A bailout is \"un plan de sauvetage\"; \"bénéficier de\" takes \"de\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Gas prices will fall by 2% in March.",
        answer: "Les tarifs du gaz baisseront de 2 % en mars.",
        altAnswers: ["Les prix du gaz baisseront de 2 % en mars.", "Les tarifs du gaz vont baisser de 2 % en mars."],
        explanation: "\"Les tarifs\" alone means prices; the change is expressed with \"de\" + percentage.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Beijing announced retaliatory measures.",
        words: ["Pékin", "a annoncé", "des mesures", "de rétorsion."],
        translation: "Beijing announced retaliatory measures.",
        explanation: "\"Des mesures de rétorsion\" answer a rise in customs duties.",
      },
      {
        type: "listen-choose",
        audio: "Avec la déflation, les ménages attendent avant d'acheter.",
        question: "What does it mean?",
        options: ["With deflation, households wait before buying.", "With inflation, households buy faster.", "Without deflation, households stop buying.", "Households are waiting for inflation to end."],
        correctIndex: 0,
        explanation: "Deflation is feared because households postpone purchases, expecting lower prices.",
      },
      {
        type: "dictation",
        audio: "L'entreprise manquait de liquidités, mais restait solvable.",
        explanation: "\"Manquer de liquidités\" (short of cash) while \"solvable\" (assets above debts).",
      },
      {
        type: "speak",
        text: "Les créanciers ont renoncé à une partie de leur créance.",
        prompt: "Say it in French: The creditors gave up part of their claim.",
        tip: "Read 50 % as \"cinquante pour cent\".",
        explanation: "\"Une créance\" is the debt from the creditor's side; giving part of it up is a haircut.",
      },
      {
        type: "speak",
        text: "Le pouvoir d'achat des salariés s'érode depuis deux ans.",
        prompt: "Say it in French: Employees' purchasing power has been eroding for two years.",
        tip: "\"S'est érodé\": three syllables in \"érodé\", é-ro-dé.",
        explanation: "\"S'éroder\" describes a slow loss of purchasing power; \"depuis\" + present for an ongoing process.",
      },
    ],
  },
  {
    slug: "c2-vocab-scientific-method",
    level: "FR-C2",
    number: 8,
    title: "Mastery Vocabulary: The Scientific Method",
    summary: "Read and discuss science precisely: l'échantillon, le groupe témoin, l'essai clinique, le placebo, la corrélation and la causalité, le biais, la marge d'erreur, la significativité statistique, la reproductibilité, l'évaluation par les pairs, extrapoler. Trap: une expérience is both an experiment and an experience.",
    duration: "21 min",
    sections: [
      {
        heading: "Hypothèse, protocole, échantillon",
        body: [
          "A study starts from \"une hypothèse\" and follows \"un protocole\" (the precise procedure). It works on \"un échantillon\" (a sample), which must be \"représentatif\" of the population studied; its size is \"la taille de l'échantillon\". Results are compared with \"un groupe témoin\" (a control group), which does not receive the treatment.",
        ],
        examples: [
          { es: "L'échantillon comprend 2 000 adultes représentatifs de la population française.", en: "The sample comprises 2,000 adults representative of the French population." },
          { es: "Le groupe témoin n'a reçu aucun traitement.", en: "The control group received no treatment." },
          { es: "Le protocole a été validé avant le début de l'étude.", en: "The protocol was approved before the study began." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The control group received a placebo.",
            answer: "Le groupe témoin a reçu un placebo.",
            explanation: "\"Témoin\" (witness) works as an adjective here: \"un groupe témoin\", plural \"des groupes témoins\".",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The sample must be [representative] of the population.",
            sentence: "L'échantillon doit être ___ de la population.",
            answer: "représentatif",
            explanation: "\"Représentatif de\" agrees with \"l'échantillon\" (masculine singular): a sample that mirrors the population studied.",
          },
        ],
      },
      {
        heading: "The randomised double-blind trial",
        body: [
          "In medicine, the gold standard is \"l'essai clinique randomisé en double aveugle\" (the randomised double-blind clinical trial): participants are assigned by chance (\"tirés au sort\"), and neither they nor the doctors know who gets the treatment and who gets \"le placebo\". \"L'effet placebo\" is the improvement produced by belief alone.",
        ],
        examples: [
          { es: "Il s'agit d'un essai clinique randomisé en double aveugle.", en: "It is a randomised double-blind clinical trial." },
          { es: "Les participants ont été tirés au sort.", en: "The participants were randomly assigned." },
          { es: "L'effet placebo explique une partie de l'amélioration.", en: "The placebo effect explains part of the improvement." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In a double-blind trial, who knows which participants get the placebo?",
            options: ["Nobody: neither the participants nor the doctors", "Only the doctors", "Only the participants", "Everyone involved"],
            correctIndex: 0,
            explanation: "\"En double aveugle\": neither side knows who gets the treatment and who gets \"le placebo\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Half the patients received the placebo.",
            answer: "La moitié des patients a reçu le placebo.",
            altAnswers: ["La moitié des patients ont reçu le placebo.", "La moitié des patients a reçu un placebo.", "La moitié des patients ont reçu un placebo."],
            explanation: "\"Le placebo\" is the inactive substance; \"la moitié des\" + plural can take a singular or plural verb.",
          },
        ],
      },
      {
        heading: "The trap: expérience",
        body: [
          "Now the trap: \"une expérience\" means both an experiment (\"une expérience de chimie\") and an experience (\"une expérience inoubliable\", \"dix ans d'expérience\"). Context decides; to remove ambiguity, scientists often say \"une expérimentation\" or \"un essai\". And \"expérimenter\" means to test, to try out, not to experience (\"vivre\", \"connaître\", \"éprouver\").",
        ],
        examples: [
          { es: "Nous avons réalisé une expérience sur des souris.", en: "We carried out an experiment on mice." },
          { es: "Cette année à l'étranger a été une expérience inoubliable.", en: "This year abroad was an unforgettable experience." },
          { es: "Il a vingt ans d'expérience dans l'industrie.", en: "He has twenty years' experience in industry." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "\"Elle a dix ans d'expérience en laboratoire.\" What does \"expérience\" mean here?",
            options: ["experience (professional practice)", "experiment", "experimentation on animals", "an expert report"],
            correctIndex: 0,
            explanation: "\"Dix ans d'expérience\" = ten years' experience; an experiment would be \"une expérience\" with an article and a topic (\"une expérience sur...\").",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Nous avons expérimenté une grande joie.",
            answer: "Nous avons éprouvé une grande joie.",
            altAnswers: ["Nous avons ressenti une grande joie.", "Nous avons connu une grande joie."],
            explanation: "\"Expérimenter\" means to test or try out. To experience a feeling is \"éprouver\", \"ressentir\" or \"connaître\".",
          },
        ],
      },
      {
        heading: "Corrélation n'est pas causalité",
        body: [
          "\"Une corrélation\" between two variables means they vary together; \"une causalité\" (or \"un lien de causalité\") means one causes the other. \"Corrélation n'est pas causalité\" is the scientist's mantra: towns with more fire stations have more fires, but the stations don't cause the fires. You met this as a fallacy in Unit 13.",
        ],
        examples: [
          { es: "L'étude montre une corrélation, pas un lien de causalité.", en: "The study shows a correlation, not a causal link." },
          { es: "Corrélation n'est pas causalité.", en: "Correlation is not causation." },
          { es: "Les villes qui ont plus de casernes de pompiers ont plus d'incendies.", en: "Towns with more fire stations have more fires." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Towns with more fire stations have more fires. What would a scientist say?",
            options: ["Corrélation n'est pas causalité.", "C'est statistiquement impossible.", "Le groupe témoin est biaisé.", "L'expérience est inoubliable."],
            correctIndex: 0,
            explanation: "The two vary together because both depend on town size: a correlation, not a cause.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Ice-cream sales and drownings are correlated, but there is no causal link.",
            answer: "Les ventes de glaces et les noyades sont corrélées, mais il n'y a pas de lien de causalité.",
            altAnswers: ["Les ventes de glaces et les noyades sont corrélées, mais il n'y a aucun lien de causalité.", "Les ventes de glace et les noyades sont corrélées, mais il n'y a pas de lien de causalité.", "Les ventes de glaces et les noyades sont corrélées, mais sans lien de causalité."],
            explanation: "Two variables that vary together are \"corrélées\"; a cause would be \"un lien de causalité\". Here summer heat explains both.",
          },
        ],
      },
      {
        heading: "Biais and marge d'erreur",
        body: [
          "\"Un biais\" is a systematic distortion: \"le biais de sélection\" (the sample isn't representative), \"le biais de confirmation\" (seeing only what confirms your hypothesis), \"le biais du survivant\". A result is \"biaisé\". Every survey has \"une marge d'erreur\" (\"plus ou moins trois points\").",
        ],
        examples: [
          { es: "L'échantillon, recruté sur internet, présente un biais de sélection.", en: "The sample, recruited online, has a selection bias." },
          { es: "Le sondage a une marge d'erreur de plus ou moins trois points.", en: "The poll has a margin of error of plus or minus three points." },
          { es: "Il est tombé dans le biais de confirmation.", en: "He fell into confirmation bias." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The survey's [margin of error] is two points.",
            sentence: "La ___ de l'enquête est de deux points.",
            answer: "marge d'erreur",
            explanation: "Every survey has \"une marge d'erreur\", given in points (\"plus ou moins deux points\").",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it to use the adjective: le résultat est...",
            source: "Ce résultat présente un biais.",
            answer: "Ce résultat est biaisé.",
            explanation: "The adjective from \"un biais\" is \"biaisé\": a result with a systematic distortion.",
          },
        ],
      },
      {
        heading: "Significatif, extrapoler",
        body: [
          "\"La significativité statistique\" (statistical significance) says whether a result is unlikely to be due to chance: a result is \"statistiquement significatif\". Beware: in everyday French \"significatif\" means meaningful or substantial, as in English. Finally, \"extrapoler\" is to extend a result beyond the data or population studied, often wrongly: \"on ne peut pas extrapoler ces résultats à l'être humain\".",
        ],
        examples: [
          { es: "La différence entre les deux groupes n'est pas statistiquement significative.", en: "The difference between the two groups is not statistically significant." },
          { es: "On ne peut pas extrapoler ces résultats à l'être humain.", en: "These results cannot be extrapolated to humans." },
          { es: "C'est un progrès significatif pour les patients.", en: "It is a substantial advance for patients. (everyday sense)" },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "L'écart observé est statistiquement significatif.",
            question: "What does it mean?",
            options: ["The observed gap is unlikely to be due to chance.", "The observed gap is large and important.", "The statistics show no gap.", "The gap was observed by statisticians."],
            correctIndex: 0,
            explanation: "\"Statistiquement significatif\" means unlikely to be due to chance, not necessarily large or important.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "One must not [extrapolate] these data to the whole country.",
            sentence: "Il ne faut pas ___ ces données à tout le pays.",
            answer: "extrapoler",
            altAnswers: ["généraliser"],
            explanation: "\"Extrapoler à\" is to extend results beyond the population studied, often wrongly.",
          },
        ],
      },
      {
        heading: "Peer review and preprints",
        body: [
          "A study is published after \"l'évaluation par les pairs\" (peer review): anonymous experts, \"les relecteurs\" or \"les rapporteurs\", read it and recommend acceptance, revision or rejection. Before that, it may circulate as \"une prépublication\" (a preprint), which has not yet been reviewed, a distinction journalists sometimes forget.",
        ],
        examples: [
          { es: "L'article a été soumis à l'évaluation par les pairs.", en: "The article was submitted for peer review." },
          { es: "Attention : il s'agit d'une prépublication, non encore relue par des pairs.", en: "Careful: this is a preprint, not yet peer-reviewed." },
          { es: "Les rapporteurs ont demandé une révision.", en: "The reviewers requested a revision." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "This preprint has not been peer-reviewed yet.",
            answer: "Cette prépublication n'a pas encore été relue par des pairs.",
            altAnswers: ["Cette prépublication n'a pas encore été évaluée par des pairs.", "Cette prépublication n'a pas encore fait l'objet d'une évaluation par les pairs.", "Cette prépublication n'a pas encore été relue par les pairs."],
            explanation: "\"Une prépublication\" circulates before \"l'évaluation par les pairs\"; \"pas encore\" stresses the missing step.",
          },
        ],
      },
      {
        heading: "Reproductibilité and rétractation",
        body: [
          "\"La reproductibilité\" is the possibility for other teams to obtain the same results by repeating the protocol; \"la crise de la reproductibilité\" in psychology and medicine has shown that many published results do not survive replication. An article found to be flawed or fraudulent can be \"rétracté\" or \"retiré\" by the journal (\"une rétractation\").",
        ],
        examples: [
          { es: "Aucune équipe n'a réussi à reproduire ces résultats.", en: "No team has managed to replicate these results." },
          { es: "La revue a retiré l'article après la découverte de données falsifiées.", en: "The journal retracted the article after falsified data were discovered." },
          { es: "La crise de la reproductibilité touche aussi la médecine.", en: "The replication crisis also affects medicine." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: Three teams replicated the experiment.",
            words: ["Trois équipes", "ont", "reproduit", "l'expérience."],
            translation: "Three teams replicated the experiment.",
            explanation: "\"Reproduire\" an experiment is to replicate it; here \"expérience\" clearly means experiment.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The article was retracted after an investigation.",
            answer: "L'article a été rétracté après une enquête.",
            altAnswers: ["L'article a été retiré après une enquête.", "L'article a été rétracté à la suite d'une enquête.", "L'article a été retiré à la suite d'une enquête."],
            explanation: "A journal \"rétracte\" or \"retire\" a flawed article: \"une rétractation\".",
          },
        ],
      },
      {
        heading: "Étayer, infirmer, mettre en évidence",
        body: [
          "Useful verbs for discussing a study precisely: \"mettre en évidence\" (to show, to bring to light), \"étayer\" (to support), \"infirmer\" (to disprove) vs \"confirmer\", \"nuancer\", \"reproduire\". \"Infirmer une hypothèse\" is the exact scientific term; \"invalider\" is also common.",
        ],
        examples: [
          { es: "Ces nouvelles données infirment l'hypothèse initiale.", en: "These new data disprove the initial hypothesis." },
          { es: "Les auteurs étayent leur conclusion par trois séries de mesures.", en: "The authors support their conclusion with three sets of measurements." },
          { es: "L'étude met en évidence un effet du sommeil sur la mémoire.", en: "The study brings to light an effect of sleep on memory." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Ces mesures étayent l'hypothèse des chercheurs.",
            question: "What does it mean?",
            options: ["These measurements support the researchers' hypothesis.", "These measurements disprove the researchers' hypothesis.", "These measurements were made by the researchers.", "The researchers doubt these measurements."],
            correctIndex: 0,
            explanation: "\"Étayer\" means to support; its opposite is \"infirmer\" (to disprove).",
          },
          {
            type: "multiple-choice",
            question: "Which verb means to disprove a hypothesis?",
            options: ["infirmer", "confirmer", "étayer", "mettre en évidence"],
            correctIndex: 0,
            explanation: "\"Infirmer une hypothèse\" is the exact scientific term for disproving it; \"étayer\" supports, \"confirmer\" confirms.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The study suffers from survivorship bias.",
        answer: "L'étude souffre d'un biais du survivant.",
        altAnswers: ["L'étude présente un biais du survivant.", "L'étude souffre du biais du survivant."],
        explanation: "\"Le biais du survivant\": only the cases that survived are counted.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "They carried out a chemistry experiment.",
        answer: "Ils ont réalisé une expérience de chimie.",
        altAnswers: ["Ils ont fait une expérience de chimie.", "Elles ont réalisé une expérience de chimie.", "Elles ont fait une expérience de chimie."],
        explanation: "\"Une expérience de chimie\" is an experiment: context decides between experiment and experience.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The authors support their hypothesis with new data.",
        answer: "Les auteurs étayent leur hypothèse par de nouvelles données.",
        altAnswers: ["Les auteurs étayent leur hypothèse avec de nouvelles données."],
        explanation: "\"Étayer\" (to support) + \"par\" for the evidence.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Working in a hospital was an enriching experience.",
        answer: "Travailler dans un hôpital a été une expérience enrichissante.",
        altAnswers: ["Travailler à l'hôpital a été une expérience enrichissante.", "Travailler dans un hôpital fut une expérience enrichissante."],
        explanation: "Here \"une expérience\" is something lived through, not a test.",
      },
      {
        type: "dictation",
        audio: "Les relecteurs ont recommandé le rejet de l'article.",
        explanation: "\"Les relecteurs\" (reviewers) recommend acceptance, revision or \"le rejet\".",
      },
      {
        type: "speak",
        text: "Une corrélation ne prouve pas une causalité.",
        prompt: "Say it in French: A correlation does not prove causation.",
        tip: "No articles: it's a maxim. Stress the last syllables: corrélaTION, causaliTÉ.",
        explanation: "The scientist's mantra, with \"prouver\": variables that move together are not cause and effect.",
      },
      {
        type: "speak",
        text: "Ces résultats nuancent les conclusions de l'étude précédente.",
        prompt: "Say it in French: These results qualify the conclusions of the previous study.",
        explanation: "\"Nuancer\" (to qualify) sits between confirming and disproving.",
      },
    ],
  },
];

export const FR_C2_U20_WRITING: WriteExercise = {
  type: "write",
  prompt: "Write the introduction and one part of a short argued essay (dissertation-style) on the question of whether a government should fund only research that has immediate economic benefits. Formulate a problématique as a question (direct or indirect), use questions as transitions, and give emphasis with inversion after an adverb, a cleft sentence and non seulement... mais encore. Use precise vocabulary of economics and the scientific method.",
  minWords: 250,
  maxWords: 400,
  rubric: [
    "A problématique as a question: \"dans quelle mesure... ?\", \"en quoi... ?\" or indirect \"il convient de se demander si...\", with no inversion in the indirect form and \"ce que\" rather than \"qu'est-ce que\".",
    "At least one transition question (\"mais qu'en est-il réellement ?\", \"reste à savoir si\", \"encore faut-il se demander...\").",
    "Emphasis structures: inversion after \"sans doute\", \"peut-être\", \"aussi\" or \"à peine\"; a cleft (\"ce n'est pas... c'est...\", \"c'est... que\"); \"non seulement... mais encore\".",
    "Precise vocabulary: \"la croissance\", \"le rebond\", \"les retombées\", \"l'essai clinique\", \"la reproductibilité\", \"l'évaluation par les pairs\", \"extrapoler\".",
  ],
  modelAnswer: "En période de déficit, la tentation est forte de ne financer que la recherche dont les retombées économiques sont immédiates : un nouveau médicament, une batterie plus performante, un logiciel exportable. Pourquoi l'État paierait-il des chercheurs pour étudier des galaxies lointaines ou des langues mortes ? La question semble de bon sens. Il convient pourtant de se demander dans quelle mesure une politique de recherche fondée sur la seule rentabilité à court terme sert réellement l'intérêt général. Nous verrons d'abord ce que la recherche appliquée apporte à l'économie, avant d'examiner ce que la recherche fondamentale lui apporte, souvent sans le savoir.\n\nSans doute les partisans d'une recherche « utile » ont-ils raison sur un point : un essai clinique réussi ou un brevet industriel produisent des effets mesurables sur l'emploi et la croissance. Aussi les gouvernements successifs ont-ils multiplié les appels à projets orientés vers l'innovation. Mais qu'en est-il réellement ? L'histoire des sciences montre que les découvertes décisives naissent rarement là où on les attend. Ce n'est pas en cherchant à améliorer la bougie qu'on a inventé l'ampoule, c'est en étudiant l'électricité pour elle-même. De même, les vaccins à ARN messager reposent sur des décennies de travaux fondamentaux longtemps jugés sans débouchés.\n\nUne recherche soumise à la seule logique du rendement est non seulement moins féconde, mais encore moins fiable : pressés de publier des résultats spectaculaires, les chercheurs négligent la reproductibilité, extrapolent à partir d'échantillons trop petits, et l'évaluation par les pairs ne suffit plus à filtrer les erreurs. Reste à savoir si un État endetté peut se permettre cette patience ; encore faut-il se demander s'il peut se permettre de s'en passer.",
  explanation: "The introduction poses a direct rhetorical question, then an indirect problématique (\"il convient de se demander dans quelle mesure...\") with normal word order, and announces the plan with indirect questions (\"ce que la recherche appliquée apporte\"). The development uses inversion after \"sans doute\" and \"aussi\" (therefore), a transition question (\"qu'en est-il réellement ?\"), a correcting cleft (\"ce n'est pas en..., c'est en...\"), \"non seulement... mais encore\" without inversion, and closes with \"reste à savoir si\" and \"encore faut-il\" + inversion. Economic and scientific terms are used precisely (\"retombées\", \"essai clinique\", \"reproductibilité\", \"extrapolent\", \"évaluation par les pairs\").",
};
