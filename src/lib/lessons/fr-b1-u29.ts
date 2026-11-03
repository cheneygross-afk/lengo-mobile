// Synced from cheneygross-afk/lengo:src/lib/lessons/fr-b1-u29.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// French B1, Unit 29: Survival Situations: Calls, Banks & Flats.

export const FR_B1_U29_WRITING: WriteExercise = {
  type: "write",
  prompt: "You are looking for a flat in Lyon. Write an email (80-150 words) to an estate agency about a furnished two-room flat you saw advertised. Introduce yourself politely, ask two or three questions (charges, deposit, the date of a visit), ask which documents you need to provide, and say what you will do if the flat is still available.",
  minWords: 80,
  maxWords: 150,
  rubric: [
    "Opens and closes formally (\"Madame, Monsieur\", \"Je vous prie d'agréer...\" or \"Cordialement\") and uses \"vous\" throughout",
    "Softens requests with the conditional (\"je voudrais\", \"j'aimerais savoir si\", \"pourriez-vous\", \"serait-il possible de\")",
    "Asks about documents with the subjunctive after \"il faut que\" (\"Quels documents faut-il que je fournisse ?\")",
    "Uses a si-clause with the present (\"Si l'appartement est toujours disponible, je...\") and flat vocabulary (\"le loyer\", \"les charges\", \"le dépôt de garantie\", \"meublé\")",
  ],
  modelAnswer: "Madame, Monsieur,\n\nJe me permets de vous écrire au sujet de l'annonce pour le T2 meublé situé rue Victor-Hugo. Je suis infirmière et je viens d'être embauchée à l'hôpital Édouard-Herriot. J'aimerais savoir si le loyer de 750 euros est charges comprises. Pourriez-vous aussi me dire quel est le montant du dépôt de garantie ? Par ailleurs, quels documents faut-il que je fournisse pour le dossier ? Mes parents se portent garants et peuvent vous envoyer leurs justificatifs. Si l'appartement est toujours disponible, je serais ravie de le visiter cette semaine, de préférence en fin de journée. Je vous remercie par avance de votre réponse.\n\nJe vous prie d'agréer, Madame, Monsieur, mes salutations distinguées.\n\nClaire Morel",
  explanation: "The conditional softens every request (\"j'aimerais savoir si\", \"pourriez-vous\", \"je serais ravie\"); \"il faut que\" takes the subjunctive (\"que je fournisse\"); \"si\" + present introduces a real possibility with a conditional or future result. \"Je me permets de vous écrire\" and \"Je vous prie d'agréer\" frame a formal letter.",
};

export const FR_B1_U29: Lesson[] = [
  {
    slug: "b1-survival-asking-politely",
    level: "FR-B1",
    number: 1,
    title: "Survival: Asking Politely",
    summary: "Soften requests with the conditional, apologise for disturbing someone, and choose tu or vous with strangers, staff and older people.",
    duration: "15 min",
    sections: [
      {
        heading: "The conditional softens everything",
        body: [
          "In French, a bare request in the present (\"Je veux un rendez-vous\", \"Vous pouvez m'aider ?\") is not rude among friends, but to a stranger or an employee it can sound abrupt. The conditional is the standard way to soften: \"je voudrais\" (I would like), \"j'aimerais\" (I'd like), \"pourriez-vous\" (could you), \"auriez-vous\" (would you have), \"serait-il possible de\" (would it be possible to). English does exactly the same with would and could, so the reflex transfers well.",
        ],
        examples: [
          { es: "Je voudrais prendre rendez-vous avec le docteur Lambert.", en: "I'd like to make an appointment with Dr Lambert." },
          { es: "Auriez-vous un stylo à me prêter ?", en: "Would you have a pen you could lend me?" },
          { es: "Serait-il possible de changer de chambre ?", en: "Would it be possible to change rooms?" },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "At a bakery you want a baguette. Which sounds natural and polite?", options: ["Je voudrais une baguette, s'il vous plaît.", "Je veux une baguette.", "Donnez une baguette.", "Je voulais une baguette, s'il te plaît."], correctIndex: 0, explanation: "\"Je voudrais\" is the standard polite request. \"Je veux\" sounds demanding, and \"s'il te plaît\" is for people you say tu to." },
          { type: "translate", direction: "en-es", prompt: "Make it more polite with the conditional.", source: "Je veux un rendez-vous demain.", answer: "Je voudrais un rendez-vous demain.", altAnswers: ["J'aimerais un rendez-vous demain.", "Je voudrais un rendez-vous pour demain.", "J'aimerais un rendez-vous pour demain."], explanation: "The conditional \"je voudrais\" (or \"j'aimerais\") turns a demand into a request, just as I'd like does in English." },
        ],
      },
      {
        heading: "Not je veux: je voudrais, j'aimerais savoir si",
        body: [
          "\"Je veux\" is the classic English-speaker slip: I want sounds childish or demanding in a shop or an office. Say \"je voudrais\" or \"j'aimerais\". For a question you are not sure the other person can answer, \"J'aimerais savoir si...\" (I'd like to know whether...) is the polite all-purpose opener, followed by an ordinary statement, not an inversion: \"J'aimerais savoir si le magasin est ouvert dimanche\".",
        ],
        examples: [
          { es: "J'aimerais savoir si le musée est ouvert le lundi.", en: "I'd like to know whether the museum is open on Mondays." },
          { es: "Je voudrais un café, s'il vous plaît.", en: "I'd like a coffee, please." },
          { es: "J'aimerais savoir si vous livrez à domicile.", en: "I'd like to know whether you deliver." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "J'aimerais savoir si le train part-il à midi.", answer: "J'aimerais savoir si le train part à midi.", explanation: "After \"j'aimerais savoir si\" comes an ordinary statement: no inversion and no extra \"il\"." },
        ],
      },
      {
        heading: "Inversion or intonation",
        body: [
          "Inversion (\"Pourriez-vous...\", \"Auriez-vous...\") is the most polished form and is perfect in an office or on the phone. \"Vous pourriez...\" with rising intonation is a notch more relaxed and still polite.",
        ],
        examples: [
          { es: "Pourriez-vous répéter plus lentement, s'il vous plaît ?", en: "Could you repeat that more slowly, please?" },
          { es: "Vous pourriez m'indiquer la gare, s'il vous plaît ?", en: "Could you tell me the way to the station, please?" },
          { es: "Vous auriez une minute ?", en: "Would you have a minute?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Turn it into a polished request with inversion.", source: "Vous pourriez m'appeler un taxi ?", answer: "Pourriez-vous m'appeler un taxi ?", explanation: "Inversion puts the verb before \"vous\" with a hyphen; the pronoun \"m'\" stays in front of the infinitive." },
        ],
      },
      {
        heading: "Ça vous dérangerait de... ?",
        body: [
          "When you ask someone to do something that costs them a little effort, French offers a set of very polite frames. \"Ça vous dérangerait de + infinitive ?\" (Would you mind ...ing?) and \"Est-ce que ça vous ennuierait de... ?\" are the commonest. Notice the structure: English mind + -ing becomes \"de\" + infinitive.",
        ],
        examples: [
          { es: "Ça vous dérangerait de fermer la fenêtre ?", en: "Would you mind closing the window?" },
          { es: "Est-ce que ça vous ennuierait de garder ma valise cinq minutes ?", en: "Would you mind keeping an eye on my suitcase for five minutes?" },
          { es: "Ça te dérangerait de baisser la musique ?", en: "Would you mind turning the music down?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Would you mind waiting a moment? (to a customer)", answer: "Ça vous dérangerait d'attendre un instant ?", altAnswers: ["Est-ce que ça vous dérangerait d'attendre un instant ?", "Ça vous ennuierait d'attendre un instant ?", "Ça vous dérangerait d'attendre un moment ?", "Est-ce que ça vous dérangerait d'attendre un moment ?"], explanation: "Would you mind + -ing = \"ça vous dérangerait de\" + infinitive; \"de\" elides before \"attendre\"." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Ça vous dérangerait pour ouvrir la porte ?", answer: "Ça vous dérangerait d'ouvrir la porte ?", altAnswers: ["Est-ce que ça vous dérangerait d'ouvrir la porte ?"], explanation: "The frame is \"déranger de\" + infinitive; English -ing never becomes \"pour\" here." },
        ],
      },
      {
        heading: "Answering: non, pas du tout",
        body: [
          "The answer to \"Ça vous dérangerait ?\" is tricky for English speakers, as it is in English: \"Non, pas du tout\" means no problem, I'll do it. Answering \"oui\" means yes, it would bother me!",
          "You can also add a condition: \"si ça ne vous dérange pas\" (if you don't mind) or \"si possible\". And \"Je peux vous demander un service ?\" (Can I ask you a favour?) announces the request before you make it. Note: \"un service\" here is a favour, not a service in a restaurant.",
        ],
        examples: [
          { es: "Non, pas du tout, allez-y.", en: "No, not at all, go ahead." },
          { es: "Je peux vous demander un service ?", en: "Can I ask you a favour?" },
          { es: "Si ça ne vous dérange pas, je vais m'asseoir ici.", en: "If you don't mind, I'll sit here." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "A colleague asks: \"Ça vous dérange si j'ouvre la fenêtre ?\" You're fine with it. What do you answer?", options: ["Non, pas du tout.", "Oui, beaucoup.", "Oui, ça me dérange.", "Si, allez-y."], correctIndex: 0, explanation: "The question is whether it bothers you, so no means go ahead: \"Non, pas du tout\". \"Oui, beaucoup\" and \"Oui, ça me dérange\" say it does bother you, and \"si\" only answers a negative question." },
        ],
      },
      {
        heading: "Excusez-moi de vous déranger",
        body: [
          "Before asking a stranger anything, French speakers almost always apologise first: \"Excusez-moi de vous déranger\" (Sorry to bother you), \"Pardon, madame\". Again the pattern is \"de\" + infinitive: \"Désolé de vous embêter\" (Sorry to bother you, more casual), \"Je suis désolé d'arriver en retard\".",
        ],
        examples: [
          { es: "Excusez-moi de vous déranger, vous avez l'heure ?", en: "Sorry to bother you, do you have the time?" },
          { es: "Désolé de t'embêter encore avec ça.", en: "Sorry to bother you with this again." },
          { es: "Désolée de vous faire attendre.", en: "Sorry to keep you waiting." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Sorry to interrupt you. Which is right?", options: ["Excusez-moi de vous interrompre.", "Excusez-moi pour vous interrompre.", "Excusez-moi vous interrompre.", "Excusez-moi que je vous interromps."], correctIndex: 0, explanation: "Apologies take \"de\" + infinitive: \"excusez-moi de vous interrompre\". \"Pour\" + infinitive is the English-speaker's slip." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Sorry to bother you, madam.", answer: "Excusez-moi de vous déranger, madame.", altAnswers: ["Désolé de vous déranger, madame.", "Désolée de vous déranger, madame.", "Pardon de vous déranger, madame.", "Excusez-moi de vous embêter, madame."], explanation: "\"Excusez-moi de\" + infinitive is the standard way to open a conversation with a stranger." },
        ],
      },
      {
        heading: "Sorry for what you've done",
        body: [
          "For something you have already done, use the past infinitive: \"désolé d'avoir oublié\" (sorry for forgetting / to have forgotten), \"excusez-moi d'être arrivé si tard\". English sorry for + -ing never becomes *pour* in French: *désolé pour arriver* is wrong. \"Désolé pour\" works only with a noun: \"désolé pour le retard\".",
          "\"Je vous prie de m'excuser\" (Please accept my apologies) is formal, used in letters or at work. Agreement matters in writing: a woman writes \"désolée\".",
        ],
        examples: [
          { es: "Je suis désolée d'avoir oublié ton anniversaire.", en: "I'm sorry I forgot your birthday." },
          { es: "Excusez-nous d'être arrivés si tard.", en: "Sorry we arrived so late." },
          { es: "Désolé pour le retard, il y avait des bouchons.", en: "Sorry for the delay, there were traffic jams." },
          { es: "Je vous prie de m'excuser pour ce malentendu.", en: "Please accept my apologies for this misunderstanding." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "Sorry [for forgetting] your keys. (to a friend)", sentence: "Désolé ___ tes clés.", answer: "d'avoir oublié", explanation: "Sorry for having done something = \"désolé de\" + past infinitive (\"avoir oublié\"); \"de\" elides before \"avoir\"." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Désolé pour arriver en retard.", answer: "Désolé d'arriver en retard.", altAnswers: ["Désolée d'arriver en retard.", "Désolé pour le retard.", "Désolée pour le retard.", "Désolé d'être en retard.", "Désolée d'être en retard."], explanation: "\"Désolé pour\" only works with a noun (\"désolé pour le retard\"); before a verb it's \"désolé de\" + infinitive." },
        ],
      },
      {
        heading: "Vous by default",
        body: [
          "The default with any adult you don't know is \"vous\": shop staff, officials, people in the street, a neighbour you've barely met, and anyone noticeably older than you. Switching to \"tu\" is the other person's offer to make, usually the older or more senior one: \"On peut se tutoyer ?\" (Shall we say tu?).",
        ],
        examples: [
          { es: "Bonjour monsieur, vous savez où se trouve la poste ?", en: "Hello, sir, do you know where the post office is?" },
          { es: "Madame, vous voulez que je vous aide à porter ça ?", en: "Madam, would you like me to help you carry that?" },
          { es: "On peut se tutoyer, si tu veux.", en: "We can say tu, if you like." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "An elderly man in the street looks lost. You want to ask if he needs help. What do you say?", options: ["Excusez-moi, monsieur, vous avez besoin d'aide ?", "Salut, t'as besoin d'aide ?", "Tu as besoin d'aide, monsieur ?", "Excuse-moi, tu veux de l'aide ?"], correctIndex: 0, explanation: "An older stranger gets \"vous\", and \"excusez-moi\" to open politely. \"Tu\" here would sound disrespectful." },
        ],
      },
      {
        heading: "When tu is normal",
        body: [
          "Young people of the same age often say \"tu\" to each other straight away, in a bar, at a party or online. Children are always \"tu\". In a call centre, at the bank, at the préfecture, \"vous\" never changes, even if the person is younger than you.",
          "When in doubt, \"vous\" is never wrong; an unwanted \"tu\" can sound condescending or overfamiliar.",
        ],
        examples: [
          { es: "Tu t'appelles comment ? Tu as quel âge ?", en: "What's your name? How old are you? (to a child)" },
          { es: "Je préfère qu'on se vouvoie au bureau.", en: "I prefer that we say vous at the office." },
          { es: "Salut, tu viens souvent ici ?", en: "Hi, do you come here often? (at a party, same age)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Change to tu (you're talking to a lost child).", source: "Vous avez besoin d'aide ?", answer: "Tu as besoin d'aide ?", explanation: "Children always get \"tu\": the verb changes with it, \"vous avez\" → \"tu as\"." },
          { type: "speak", text: "On se tutoie ?", prompt: "Suggest to a new colleague your age that you say tu to each other.", explanation: "\"Se tutoyer\" = to say tu to each other; with \"on\" the verb is singular: \"on se tutoie\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I'd like to know whether the shop is open on Sunday.", answer: "J'aimerais savoir si le magasin est ouvert le dimanche.", altAnswers: ["J'aimerais savoir si le magasin est ouvert dimanche.", "Je voudrais savoir si le magasin est ouvert le dimanche.", "Je voudrais savoir si le magasin est ouvert dimanche."], explanation: "\"J'aimerais savoir si\" + an ordinary statement: no inversion after \"si\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Would it be possible to pay by card?", answer: "Serait-il possible de payer par carte ?", altAnswers: ["Est-ce qu'il serait possible de payer par carte ?", "Est-ce que ce serait possible de payer par carte ?", "Ce serait possible de payer par carte ?", "Serait-il possible de payer avec une carte ?", "Est-ce qu'il serait possible de payer avec une carte ?"], explanation: "\"Serait-il possible de\" + infinitive is a very polite, slightly formal request; \"est-ce que ce serait possible\" is its everyday version." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "[Would you have] a room for tonight?", sentence: "___ une chambre pour ce soir ?", answer: "Auriez-vous", altAnswers: ["Vous auriez", "Est-ce que vous auriez"], explanation: "The conditional of \"avoir\" (\"auriez-vous\") is how hotel guests and customers ask whether something is available." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Sorry we're late. (a group of men and women)", answer: "Désolés d'être en retard.", altAnswers: ["Excusez-nous d'être en retard.", "Désolés pour le retard.", "Nous sommes désolés d'être en retard.", "On est désolés d'être en retard."], explanation: "\"Désolé de\" + infinitive, here \"être en retard\"; plural agreement \"désolés\" for a mixed group." },
      { type: "translate", direction: "en-es", prompt: "Change to vous (you're talking to a neighbour).", source: "Ça te dérangerait de fermer la porte ?", answer: "Ça vous dérangerait de fermer la porte ?", altAnswers: ["Est-ce que ça vous dérangerait de fermer la porte ?"], explanation: "With \"vous\" the indirect pronoun changes too: \"te\" → \"vous\". The rest of the frame stays." },
      { type: "word-order", prompt: "Put the words in order to say: Could you lend me your pen?", words: ["Pourriez-vous", "me", "prêter", "votre", "stylo ?"], translation: "Could you lend me your pen?", explanation: "The pronoun \"me\" goes before the infinitive it depends on: \"me prêter\"." },
      { type: "listen-choose", audio: "Mais non, pas du tout, je vous en prie.", question: "You asked a man whether it bothers him if you sit here. What does his answer mean?", options: ["Not at all, please do.", "Yes, it bothers me.", "No, please don't.", "Not now, maybe later."], correctIndex: 0, explanation: "The question was whether it bothers him, so \"non, pas du tout\" means go ahead; \"je vous en prie\" = please do." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I'm sorry I didn't call you back. (a woman speaking to a friend)", answer: "Je suis désolée de ne pas t'avoir rappelé.", altAnswers: ["Désolée de ne pas t'avoir rappelé.", "Je suis désolée de ne pas t'avoir rappelée.", "Désolée de ne pas t'avoir rappelée."], explanation: "Sorry for something you didn't do: \"de ne pas\" + past infinitive, with \"ne pas\" before the pronoun." },
      { type: "dictation", audio: "Excusez-moi de vous avoir fait attendre.", explanation: "Sorry for something already done: \"de\" + past infinitive \"avoir fait\"." },
      { type: "speak", text: "Pourriez-vous m'aider, s'il vous plaît ?", prompt: "Say it in French, to a stranger: Could you help me, please?", tip: "Pourriez-vous: three syllables, pou-rié-vous, with the r at the back of the throat.", explanation: "\"Pourriez-vous\" + infinitive is the polished polite request; \"m'aider\" puts the pronoun before the infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "If you don't mind, I'll open the window. (to a colleague)", answer: "Si ça ne vous dérange pas, je vais ouvrir la fenêtre.", altAnswers: ["Si ça ne vous dérange pas, j'ouvre la fenêtre.", "Si cela ne vous dérange pas, je vais ouvrir la fenêtre.", "Si cela ne vous dérange pas, j'ouvre la fenêtre."], explanation: "\"Si ça ne vous dérange pas\" = if you don't mind; the plan follows in the near future or present." },
    ],
  },
  {
    slug: "b1-transformation-chain-si-three-ways",
    level: "FR-B1",
    number: 2,
    title: "Transformation Chain: Si + Present Three Ways",
    summary: "Keep one real condition with si + present and change the result three ways: a present, a future and an imperative.",
    duration: "13 min",
    sections: [
      {
        heading: "One condition, three results",
        body: [
          "A real condition (something that may well happen) is \"si\" + present. The result clause then has three options, and each one changes the tone. Present: a general rule or an immediate arrangement (\"Si tu as besoin, tu m'appelles\": if you need anything, you call me). Future: a promise or prediction (\"tu m'appelleras\"). Imperative: an instruction (\"appelle-moi\").",
        ],
        examples: [
          { es: "Si tu as besoin de quelque chose, tu m'appelles.", en: "If you need anything, you call me." },
          { es: "Si tu as besoin de quelque chose, tu m'appelleras.", en: "If you need anything, you'll call me." },
          { es: "Si tu as besoin de quelque chose, appelle-moi.", en: "If you need anything, call me." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Which sentence gives an instruction?", options: ["Si tu sors, ferme la porte.", "Si tu sors, tu fermeras la porte.", "Si tu sors, tu fermes la porte.", "Si tu sortais, tu fermerais la porte."], correctIndex: 0, explanation: "The imperative \"ferme\" is the instruction. The future is a prediction or promise, the present an arrangement, and si + imparfait is an imagined situation." },
          { type: "translate", direction: "en-es", prompt: "Change the result to the future.", source: "Si tu as le temps, tu passes me voir.", answer: "Si tu as le temps, tu passeras me voir.", explanation: "Only the result changes: \"tu passes\" → \"tu passeras\". The si-clause stays in the present." },
        ],
      },
      {
        heading: "Which result, and what stays put",
        body: [
          "In everyday speech, the present in the result clause is extremely common for arrangements, where English would also say you call me or just call me. The future is a little more formal or emphatic; the imperative is the most direct.",
          "The condition itself never changes: it stays in the present whatever you do with the result. That is the whole point of this chain.",
        ],
        examples: [
          { es: "Si vous êtes en retard, vous prévenez le secrétariat.", en: "If you're late, you let the office know." },
          { es: "Si vous êtes en retard, prévenez le secrétariat.", en: "If you're late, let the office know." },
          { es: "Si nous partons à 8 heures, nous arriverons avant midi.", en: "If we leave at 8, we'll arrive before noon." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Change the result to an instruction.", source: "Si vous avez une question, vous levez la main.", answer: "Si vous avez une question, levez la main.", explanation: "The vous imperative is the present without the pronoun: \"levez\". The condition stays in the present." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "If it's sunny tomorrow, [we'll have] lunch outside.", sentence: "S'il fait beau demain, on ___ dehors.", answer: "déjeunera", altAnswers: ["déjeune"], explanation: "A prediction after a real condition: the future \"on déjeunera\". The present \"on déjeune\" is also fine for an arrangement." },
        ],
      },
      {
        heading: "The trap: never the future after si",
        body: [
          "English sometimes slips a will into the if-clause, and English speakers then write *si tu viendras*. In French the clause with \"si\" (meaning if) never takes the future or the conditional: \"Si tu viens demain, on ira au marché\", not *si tu viendras*.",
          "Remember the elision rule too: \"si\" becomes \"s'\" only before \"il\" and \"ils\": \"s'il pleut\", \"s'ils arrivent\", but \"si elle vient\", \"si on y va\".",
        ],
        examples: [
          { es: "S'il pleut demain, on restera à la maison.", en: "If it rains tomorrow, we'll stay at home." },
          { es: "S'ils arrivent avant nous, ils attendront devant la porte.", en: "If they get there before us, they'll wait outside the door." },
          { es: "Si on y va à pied, on arrivera en retard.", en: "If we walk there, we'll be late." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "If they're tired, they'll go to bed early. Which is right?", options: ["S'ils sont fatigués, ils se coucheront tôt.", "Si ils sont fatigués, ils se coucheront tôt.", "S'ils seront fatigués, ils se coucheront tôt.", "S'ils seraient fatigués, ils se coucheraient tôt."], correctIndex: 0, explanation: "\"Si\" elides before \"ils\" and takes the present. The future or conditional never follows \"si\" meaning if." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Si tu viendras samedi, on fera un gâteau.", answer: "Si tu viens samedi, on fera un gâteau.", explanation: "The if-clause stays in the present even when English means the future: \"si tu viens\"." },
        ],
      },
      {
        heading: "Pronouns in the instruction",
        body: [
          "Pronouns in the imperative result follow the affirmative order: \"Si tu le vois, dis-le-lui\" (If you see him, tell him). In the negative they go back in front: \"Si tu le vois, ne le lui dis pas\".",
        ],
        examples: [
          { es: "Si elle rappelle, dis-lui que je suis sorti.", en: "If she calls back, tell her I've gone out." },
          { es: "Si tu vois Karim, rends-lui son livre.", en: "If you see Karim, give him back his book." },
          { es: "Si tu le croises, ne le lui dis pas.", en: "If you bump into him, don't tell him." },
          { es: "Si le colis arrive, mettez-le dans le garage.", en: "If the parcel arrives, put it in the garage." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "If you find my keys, give them to me. Which is right?", options: ["Si tu trouves mes clés, donne-les-moi.", "Si tu trouves mes clés, donne-moi-les.", "Si tu trouves mes clés, me les donne.", "Si tu trouves mes clés, donnes-les-moi."], correctIndex: 0, explanation: "Affirmative imperative: direct object first, then \"moi\", after the verb. The tu imperative of an -er verb has no -s." },
          { type: "translate", direction: "en-es", prompt: "Make the result negative.", source: "Si tu vois Paul, invite-le.", answer: "Si tu vois Paul, ne l'invite pas.", explanation: "In a negative imperative the pronoun goes back in front of the verb: \"ne l'invite pas\"." },
        ],
      },
      {
        heading: "Running the chain",
        body: [
          "Now run each sentence through the three results yourself. Start from the present (\"Si tu as froid, tu mets un pull\"), turn it into a promise or prediction (\"tu mettras un pull\") and then into an order (\"mets un pull\"). With \"vous\", the imperative is the vous form without the pronoun: \"Si vous avez froid, mettez un pull\".",
          "Pronominal verbs keep their pronoun after the imperative, as \"toi\" or \"vous\": \"Si tu es fatigué, tu te reposes / tu te reposeras / repose-toi\". In the negative: \"ne te repose pas\".",
        ],
        examples: [
          { es: "Si tu as froid, mets un pull.", en: "If you're cold, put on a jumper." },
          { es: "Si vous avez froid, vous mettrez un pull.", en: "If you're cold, you'll put on a jumper." },
          { es: "Si tu es fatigué, repose-toi.", en: "If you're tired, have a rest." },
          { es: "Si vous êtes perdus, appelez-nous.", en: "If you're lost, call us." },
          { es: "Si tu finis tôt, tu pourras venir avec nous.", en: "If you finish early, you'll be able to come with us." },
          { es: "Si les enfants ont faim, donne-leur des fruits.", en: "If the children are hungry, give them some fruit." },
        ],
        checkpoint: [
          { type: "word-order", prompt: "Put the words in order to say: If you're thirsty, have some water.", words: ["Si", "tu", "as", "soif,", "bois", "de", "l'eau."], translation: "If you're thirsty, have some water.", explanation: "\"Si\" + present, then the imperative of \"boire\": \"bois\"." },
          { type: "translate", direction: "en-es", prompt: "Change the result to an instruction.", source: "Si tu es stressé, tu te calmes.", answer: "Si tu es stressé, calme-toi.", altAnswers: ["Si tu es stressée, calme-toi."], explanation: "A pronominal verb in the imperative keeps its pronoun after the verb, as \"toi\": \"calme-toi\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "If Julie calls, tell her I'm at the doctor's. (to a friend)", answer: "Si Julie appelle, dis-lui que je suis chez le médecin.", altAnswers: ["Si Julie appelle, tu lui diras que je suis chez le médecin.", "Si Julie appelle, tu lui dis que je suis chez le médecin."], explanation: "\"Si\" + present, then the imperative \"dis-lui\" with the pronoun after the verb." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "If it's cold tomorrow, we'll take the car.", answer: "S'il fait froid demain, on prendra la voiture.", altAnswers: ["S'il fait froid demain, nous prendrons la voiture.", "S'il fait froid demain, on prend la voiture."], explanation: "\"S'il\" + present, then the future for a prediction." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "If the plants are dry, [water them]. (to several people)", sentence: "Si les plantes sont sèches, ___.", answer: "arrosez-les", explanation: "Vous imperative with the object pronoun after it: \"arrosez-les\"." },
      { type: "translate", direction: "en-es", prompt: "Change the result to the future.", source: "Si vous êtes d'accord, signez ici.", answer: "Si vous êtes d'accord, vous signerez ici.", explanation: "The future needs its subject back: \"vous signerez\". The condition doesn't move." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Si vous auriez un problème, appelez le gardien.", answer: "Si vous avez un problème, appelez le gardien.", explanation: "No conditional after \"si\" in a real condition: \"si vous avez\"." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Si tu rencontres sa sœur, ne parle-lui-en pas.", answer: "Si tu rencontres sa sœur, ne lui en parle pas.", explanation: "In a negative imperative the pronouns go back before the verb: \"ne lui en parle pas\"." },
      { type: "multiple-choice", question: "A note for a babysitter you say vous to: If the baby cries, give him his bottle.", options: ["Si le bébé pleure, donnez-lui son biberon.", "Si le bébé pleurera, donnez-lui son biberon.", "Si le bébé pleure, donnez-le son biberon.", "Si le bébé pleure, lui donnez son biberon."], correctIndex: 0, explanation: "Present after \"si\"; the imperative takes the indirect pronoun \"lui\" (to him) after the verb." },
      { type: "word-order", prompt: "Put the words in order to say: If you go out, take an umbrella.", words: ["Si", "tu", "sors,", "prends", "un", "parapluie."], translation: "If you go out, take an umbrella.", explanation: "\"Si\" + present, then the tu imperative \"prends\"." },
      { type: "listen-choose", audio: "S'il fait beau, on ira à la plage.", question: "What does it mean?", options: ["If the weather's nice, we'll go to the beach.", "If the weather were nice, we'd go to the beach.", "When the weather was nice, we went to the beach.", "If it's nice, go to the beach."], correctIndex: 0, explanation: "\"S'il fait\" (present) + \"on ira\" (future): a real condition and a prediction." },
      { type: "speak", text: "Si vous avez des questions, écrivez-moi.", prompt: "Tell your students: if you have any questions, write to me.", explanation: "Real condition + vous imperative with \"moi\" after it." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "If you're hungry, there's some soup in the fridge. (to a friend)", answer: "Si tu as faim, il y a de la soupe dans le frigo.", altAnswers: ["Si tu as faim, il y a de la soupe dans le réfrigérateur.", "Si t'as faim, y a de la soupe dans le frigo."], explanation: "A real condition can be followed by a plain present statement." },
      { type: "dictation", audio: "S'ils ne viennent pas, nous partirons sans eux.", explanation: "\"S'ils\" + present, then the future \"partirons\"." },
    ],
  },
  {
    slug: "b1-themed-review-keep-going-or-turn-back",
    level: "FR-B1",
    number: 3,
    title: "Themed Review: Keep Going or Turn Back",
    summary: "Weigh up a hard decision on a mountain trail with hypotheses, suggestions and advice: si on continuait, il vaudrait mieux que, il faut savoir dire non.",
    duration: "14 min",
    sections: [
      {
        heading: "The situation",
        body: [
          "Inès, Hugo and Malik are hiking towards a mountain hut in the Alps. It's 3 p.m., the clouds are coming in, Malik has a sore ankle and the hut is still two hours away. This lesson recycles the language of description and the passé composé / imparfait while setting up the dilemma.",
        ],
        examples: [
          { es: "Malik s'est tordu la cheville en descendant un rocher.", en: "Malik twisted his ankle coming down a rock." },
          { es: "On marchait depuis six heures quand il a commencé à pleuvoir.", en: "We'd been walking for six hours when it started to rain." },
          { es: "On n'a presque plus d'eau.", en: "We've got almost no water left." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "When we reached the lake, the sun [was shining].", sentence: "Quand on est arrivés au lac, le soleil ___.", answer: "brillait", explanation: "The arrival is an event (passé composé); the weather at that moment is scenery, so the imparfait: \"brillait\"." },
        ],
      },
      {
        heading: "Mountain words",
        body: [
          "Useful words: \"le sentier\" (the path), \"le refuge\" (the mountain hut), \"le sommet\" (the summit), \"faire demi-tour\" (to turn back), \"le temps se gâte\" (the weather is turning bad), \"un orage\" (a thunderstorm), \"avoir mal à la cheville\" (to have a sore ankle), \"la nuit tombe\" (night is falling).",
        ],
        examples: [
          { es: "Le ciel se couvre et le temps se gâte.", en: "The sky is clouding over and the weather is turning bad." },
          { es: "Le refuge est encore à deux heures de marche.", en: "The hut is still two hours' walk away." },
          { es: "La nuit tombe vers sept heures en octobre.", en: "Night falls at around seven in October." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "What does « faire demi-tour » mean?", options: ["to turn back", "to go halfway", "to walk in circles", "to go on a tour"], correctIndex: 0, explanation: "\"Faire demi-tour\" = to turn round and go back the way you came. \"À mi-chemin\" is halfway." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The path is too narrow, and night is falling.", answer: "Le sentier est trop étroit, et la nuit tombe.", altAnswers: ["Le chemin est trop étroit, et la nuit tombe."], explanation: "\"Le sentier\" = the path; \"la nuit tombe\" = night is falling, in the present." },
        ],
      },
      {
        heading: "Si on continuait ? A suggestion",
        body: [
          "To put an idea on the table, French uses \"si\" + imparfait on its own, as a question: \"Si on continuait ?\" (What if we carried on? / How about carrying on?), \"Si on faisait demi-tour ?\". It's softer than an imperative.",
        ],
        examples: [
          { es: "Si on continuait encore un peu ?", en: "How about carrying on a bit longer?" },
          { es: "Si on s'arrêtait cinq minutes ?", en: "How about stopping for five minutes?" },
          { es: "Et si on appelait le refuge ?", en: "What if we called the hut?" },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "How about having a break? Which is the natural suggestion?", options: ["Si on faisait une pause ?", "Si on fera une pause ?", "Si on ferait une pause ?", "S'on faisait une pause ?"], correctIndex: 0, explanation: "A suggestion is \"si\" + imparfait on its own. Never the future or the conditional after \"si\", and \"si\" only elides before il / ils." },
        ],
      },
      {
        heading: "Imagining the consequences",
        body: [
          "To imagine the consequences, use \"si\" + imparfait + conditional: \"Si on continuait, on arriverait de nuit\" (If we carried on, we'd arrive in the dark). \"Si on faisait demi-tour, on serait au parking dans une heure\". Remember: never the conditional after \"si\" (*si on continuerait*).",
          "\"Risquer de\" + infinitive is very useful here: \"On risque de se perdre\" (We might get lost / There's a risk we'll get lost).",
        ],
        examples: [
          { es: "Si on faisait demi-tour maintenant, on serait au parking avant la nuit.", en: "If we turned back now, we'd be at the car park before dark." },
          { es: "Si on continuait, on arriverait au refuge de nuit.", en: "If we kept going, we'd reach the hut in the dark." },
          { es: "Avec l'orage, on risque de se perdre.", en: "With the storm, we might get lost." },
          { es: "Si Malik avait moins mal, on pourrait aller plus vite.", en: "If Malik's ankle hurt less, we could go faster." },
          { es: "Ce serait dommage de renoncer si près du but.", en: "It would be a shame to give up so close to the goal." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Si on partirait maintenant, on arriverait à temps.", answer: "Si on partait maintenant, on arriverait à temps.", altAnswers: ["Si nous partions maintenant, nous arriverions à temps."], explanation: "Never the conditional right after \"si\": si + imparfait (\"partait\"), then the conditional." },
          { type: "translate", direction: "en-es", prompt: "Change it to an imagined situation (si + imparfait).", source: "Si on prend le raccourci, on gagnera une heure.", answer: "Si on prenait le raccourci, on gagnerait une heure.", explanation: "Imagined: the si-clause moves to the imparfait (\"prenait\") and the result to the conditional (\"gagnerait\")." },
        ],
      },
      {
        heading: "Il vaudrait mieux que...",
        body: [
          "The group now needs advice. \"Il vaut mieux\" (it's better) becomes gentler in the conditional: \"il vaudrait mieux\". Followed by an infinitive it's general (\"Il vaudrait mieux redescendre\"); followed by \"que\" it needs the subjunctive: \"Il vaudrait mieux qu'on redescende\", \"qu'on fasse demi-tour\".",
        ],
        examples: [
          { es: "Il vaudrait mieux qu'on redescende tout de suite.", en: "We'd better go back down straight away." },
          { es: "Il vaudrait mieux que Malik ne porte plus son sac.", en: "It would be better if Malik didn't carry his bag any more." },
          { es: "Il vaudrait mieux partir avant l'orage.", en: "It would be better to leave before the storm." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "We'd better leave before dark. Which is right?", options: ["Il vaudrait mieux qu'on parte avant la nuit.", "Il vaudrait mieux qu'on part avant la nuit.", "Il vaudrait mieux qu'on partirait avant la nuit.", "Il vaudrait mieux de partir avant la nuit."], correctIndex: 0, explanation: "\"Il vaudrait mieux que\" + subjunctive (\"qu'on parte\"), or + a bare infinitive, never \"de\"." },
        ],
      },
      {
        heading: "Other ways to give advice",
        body: [
          "Other advice frames you know: \"tu devrais\" / \"vous devriez\", \"à ta place, je...\", \"tu ferais mieux de...\". And a piece of mountain wisdom: \"il faut savoir dire non\" (you have to know when to say no), \"il faut savoir renoncer\" (you have to know when to give up). \"La montagne sera toujours là\" (the mountain will always be there) is what guides say.",
        ],
        examples: [
          { es: "À ta place, je ne prendrais pas de risques.", en: "If I were you, I wouldn't take any risks." },
          { es: "Vous feriez mieux d'appeler le refuge pour les prévenir.", en: "You'd better call the hut to let them know." },
          { es: "Il faut savoir dire non, même près du sommet.", en: "You have to know when to say no, even near the summit." },
          { es: "La montagne sera toujours là l'année prochaine.", en: "The mountain will still be there next year." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "[You'd better] put on your raincoat. (to a friend)", sentence: "___ mettre ton imperméable.", answer: "Tu ferais mieux de", altAnswers: ["Tu devrais"], explanation: "\"Faire mieux de\" in the conditional + infinitive gives advice; \"tu devrais\" also works." },
        ],
      },
      {
        heading: "The decision, told afterwards",
        body: [
          "Back in the valley, Inès tells the story. The pasts work together: the passé composé for the events (\"on a fait demi-tour\"), the imparfait for the scene and feelings (\"il pleuvait\", \"j'étais déçue\"), and the plus-que-parfait for what had happened earlier (\"Malik s'était tordu la cheville\").",
          "\"Si on avait continué...\" is a sentence learners often want here. For now, use \"heureusement que\" + indicative to show relief: \"Heureusement qu'on a fait demi-tour !\" (Good thing we turned back!).",
        ],
        examples: [
          { es: "On a fait demi-tour parce que Malik s'était tordu la cheville.", en: "We turned back because Malik had twisted his ankle." },
          { es: "J'étais déçue, mais je savais que c'était la bonne décision.", en: "I was disappointed, but I knew it was the right decision." },
          { es: "Une heure plus tard, l'orage a éclaté.", en: "An hour later, the storm broke." },
          { es: "Heureusement qu'on a écouté le guide !", en: "Good thing we listened to the guide!" },
          { es: "On y retournera l'été prochain, c'est promis.", en: "We'll go back next summer, I promise." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Heureusement qu'on ait trouvé un abri !", answer: "Heureusement qu'on a trouvé un abri !", altAnswers: ["Heureusement que nous avons trouvé un abri !"], explanation: "\"Heureusement que\" is about something that really happened, so it takes the indicative: \"on a trouvé\"." },
          { type: "speak", text: "Quand on est arrivés au parking, il faisait déjà nuit.", prompt: "Say: when we got to the car park, it was already dark.", explanation: "Passé composé for the arrival, imparfait for the darkness at that moment." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "If we had a map, we wouldn't be lost.", answer: "Si on avait une carte, on ne serait pas perdus.", altAnswers: ["Si nous avions une carte, nous ne serions pas perdus.", "Si on avait une carte, on serait pas perdus.", "Si on avait une carte, on ne serait pas perdu."], explanation: "Si + imparfait (\"avait\"), then the conditional (\"serait\"); \"perdus\" agrees with the group behind \"on\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Hugo had forgotten the torch.", answer: "Hugo avait oublié la lampe de poche.", altAnswers: ["Hugo avait oublié la lampe torche."], explanation: "Plus-que-parfait for something that happened before the story: \"avait oublié\"." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "It would be better if you [took] my stick. (to a friend)", sentence: "Il vaudrait mieux que tu ___ mon bâton.", answer: "prennes", explanation: "\"Il vaudrait mieux que\" + present subjunctive: \"que tu prennes\", even where English uses a past form." },
      { type: "translate", direction: "en-es", prompt: "Change to vous.", source: "À ta place, je n'irais pas plus loin.", answer: "À votre place, je n'irais pas plus loin.", explanation: "Only the possessive changes: \"à ta place\" → \"à votre place\". The conditional stays." },
      { type: "multiple-choice", question: "Which sentence correctly says: We might miss the last bus?", options: ["On risque de rater le dernier bus.", "On risque rater le dernier bus.", "On risque à rater le dernier bus.", "On risquerait que rater le dernier bus."], correctIndex: 0, explanation: "\"Risquer de\" + infinitive: there's a risk that something bad happens." },
      { type: "word-order", prompt: "Put the words in order to say: We were cold and we had nothing left to eat.", words: ["On", "avait", "froid", "et", "on", "n'avait", "plus", "rien", "à", "manger."], translation: "We were cold and we had nothing left to eat.", explanation: "Imparfait for the state of things; \"ne... plus rien\" = nothing left." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Tu ferais mieux appeler les secours.", answer: "Tu ferais mieux d'appeler les secours.", explanation: "\"Faire mieux de\" needs \"de\" (d') before the infinitive." },
      { type: "listen-choose", audio: "Si on continuait, on risquerait de se perdre.", question: "What does it mean?", options: ["If we carried on, we might get lost.", "If we carry on, we'll get lost.", "We carried on and got lost.", "If we had carried on, we'd have got lost."], correctIndex: 0, explanation: "Si + imparfait + conditional: an imagined present or future. \"Risquerait de\" = might." },
      { type: "dictation", audio: "Heureusement que le guide connaissait un autre chemin.", explanation: "\"Heureusement que\" + indicative; imparfait \"connaissait\" for what the guide knew." },
      { type: "speak", text: "Et si on redescendait ?", prompt: "Suggest to your friends that you go back down.", explanation: "\"Si\" + imparfait alone, with a rising tone, is a suggestion." },
    ],
  },
  {
    slug: "b1-themed-review-volunteering",
    level: "FR-B1",
    number: 4,
    title: "Themed Review: Volunteering",
    summary: "Talk about volunteering: why people join an association, what they had done before, and what they hope for, with the plus-que-parfait and wishes.",
    duration: "14 min",
    sections: [
      {
        heading: "Être bénévole",
        body: [
          "France has a huge voluntary sector: about one adult in four gives time to \"une association\" (a charity, club or non-profit, governed by the 1901 law, hence \"une association loi 1901\"). A volunteer is \"un bénévole\" / \"une bénévole\", and the adjective is the same: \"un travail bénévole\" (unpaid work). \"Le bénévolat\" is volunteering. \"Un volontaire\" exists, but it means someone who volunteers for a task or a civic service, not a regular charity helper.",
        ],
        examples: [
          { es: "Je suis bénévole aux Restos du Cœur depuis trois ans.", en: "I've been volunteering at the Restos (a food charity) for three years." },
          { es: "L'association cherche des bénévoles pour la collecte de Noël.", en: "The charity is looking for volunteers for the Christmas collection." },
          { es: "Le bénévolat, c'est aussi une façon de rencontrer des gens.", en: "Volunteering is also a way of meeting people." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "What is 'une association' in this context?", options: ["A charity or non-profit organisation", "A business partnership", "A mental connection between ideas", "A trade union"], correctIndex: 0, explanation: "\"Une association\" is the standard word for a charity, club or non-profit; a trade union is \"un syndicat\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I've been a volunteer for two years.", answer: "Je suis bénévole depuis deux ans.", altAnswers: ["Ça fait deux ans que je suis bénévole.", "Il y a deux ans que je suis bénévole.", "Je fais du bénévolat depuis deux ans.", "Ça fait deux ans que je fais du bénévolat."], explanation: "Something still true now: present + \"depuis\" (or \"ça fait... que\"). No article before \"bénévole\", as with a job." },
        ],
      },
      {
        heading: "Associations and what volunteers do",
        body: [
          "Famous associations: \"les Restos du Cœur\" (founded by the comedian Coluche in 1985, they hand out free meals), \"le Secours populaire\", \"la Croix-Rouge\", \"Emmaüs\". Everyday verbs: \"distribuer des repas\", \"aider aux devoirs\" (help with homework), \"accompagner des personnes âgées\", \"collecter des dons\" (collect donations), \"faire une maraude\" (go round the streets at night to meet homeless people).",
        ],
        examples: [
          { es: "Elle donne deux heures par semaine à une association de quartier.", en: "She gives two hours a week to a local charity." },
          { es: "Le samedi matin, on distribue des repas aux familles.", en: "On Saturday mornings, we hand out meals to families." },
          { es: "Mon fils aide des collégiens à faire leurs devoirs.", en: "My son helps secondary school pupils with their homework." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "My sister collects donations for the Red Cross.", answer: "Ma sœur collecte des dons pour la Croix-Rouge.", altAnswers: ["Ma sœur fait la collecte de dons pour la Croix-Rouge.", "Ma sœur récolte des dons pour la Croix-Rouge."], explanation: "\"Collecter des dons\" = to collect donations; \"la Croix-Rouge\" takes the article." },
        ],
      },
      {
        heading: "Why I started: the plus-que-parfait",
        body: [
          "Volunteers often explain their motivation by going back to an earlier moment. The plus-que-parfait (imparfait of avoir / être + participle) sets that earlier event behind the main story: \"J'ai commencé parce que j'avais perdu mon travail et que je m'ennuyais\" (I started because I had lost my job and was bored).",
        ],
        examples: [
          { es: "J'ai commencé parce que j'avais perdu mon travail.", en: "I started because I had lost my job." },
          { es: "Quand je suis venu la première fois, ils avaient déjà tout préparé.", en: "When I came the first time, they had already got everything ready." },
          { es: "Un ami m'en avait parlé, alors j'ai voulu essayer.", en: "A friend had told me about it, so I wanted to give it a try." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "I signed up because my mother [had been] ill.", sentence: "Je me suis engagé parce que ma mère ___ malade.", answer: "avait été", altAnswers: ["était"], explanation: "The illness came before signing up, so the plus-que-parfait: \"avait été\"." },
          { type: "translate", direction: "en-es", prompt: "Change it so it happened earlier: use the plus-que-parfait.", source: "Il a quitté son travail.", answer: "Il avait quitté son travail.", explanation: "The plus-que-parfait is the imparfait of the auxiliary + the participle: \"a\" → \"avait\"." },
        ],
      },
      {
        heading: "Agreement and little words",
        body: [
          "Remember the agreement rules: with \"être\", the participle agrees with the subject (\"elle était arrivée en France seule\"); pronominal verbs too (\"nous nous étions installés à Lille\"). \"Déjà\", \"jamais\" and \"pas encore\" sit between the auxiliary and the participle: \"Je n'avais jamais fait de bénévolat\".",
        ],
        examples: [
          { es: "Je n'avais jamais fait de bénévolat avant mes quarante ans.", en: "I had never done any volunteering before I was forty." },
          { es: "Elle était arrivée en France seule, et une association l'avait aidée.", en: "She had arrived in France alone, and a charity had helped her." },
          { es: "Nous nous étions installés à Lille depuis peu et nous ne connaissions personne.", en: "We had recently moved to Lille and didn't know anyone." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "My cousins had never left their village. Which is right?", options: ["Mes cousins n'étaient jamais sortis de leur village.", "Mes cousins n'avaient jamais sortis de leur village.", "Mes cousins n'étaient sortis jamais de leur village.", "Mes cousins ne s'étaient jamais sortis de leur village."], correctIndex: 0, explanation: "\"Sortir\" (to go out) takes être, so \"étaient sortis\", agreeing with the subject; \"jamais\" sits between the auxiliary and the participle. It isn't pronominal." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Nous nous avions rencontrés à l'association.", answer: "Nous nous étions rencontrés à l'association.", altAnswers: ["Nous nous étions rencontrées à l'association."], explanation: "Pronominal verbs always take être in compound tenses: \"nous nous étions rencontrés\"." },
        ],
      },
      {
        heading: "Ça m'apporte, ça me permet de",
        body: [
          "To talk about what you gain, \"ça m'apporte\" (it gives me) and \"ça me permet de\" + infinitive (it allows me to) are very natural: \"Ça m'apporte beaucoup\", \"Ça me permet de me sentir utile\".",
        ],
        examples: [
          { es: "Ça m'apporte beaucoup plus que ce que je donne.", en: "It gives me much more than what I give." },
          { es: "Ça me permet de me sentir utile.", en: "It lets me feel useful." },
          { es: "Ce qui me plaît le plus, c'est le contact avec les gens.", en: "What I like most is the contact with people." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "It allows me to meet new people.", answer: "Ça me permet de rencontrer de nouvelles personnes.", altAnswers: ["Cela me permet de rencontrer de nouvelles personnes.", "Ça me permet de rencontrer des gens.", "Cela me permet de rencontrer des gens.", "Ça me permet de rencontrer de nouveaux gens."], explanation: "\"Ça me permet de\" + infinitive; \"des\" becomes \"de\" before an adjective in front of the noun." },
        ],
      },
      {
        heading: "Hopes: indicative or subjunctive?",
        body: [
          "For hopes, keep the moods apart: \"j'espère que\" takes the indicative (\"j'espère que l'association trouvera des locaux\"), but \"j'aimerais que\", \"je voudrais que\" and \"pourvu que\" take the subjunctive (\"j'aimerais que plus de jeunes viennent\", \"pourvu qu'on ait assez de dons\"). English speakers tend to put the subjunctive after espérer: avoid it.",
        ],
        examples: [
          { es: "J'espère que l'association trouvera de nouveaux locaux.", en: "I hope the charity will find new premises." },
          { es: "J'aimerais que plus de jeunes viennent nous aider.", en: "I'd like more young people to come and help us." },
          { es: "Pourvu qu'on ait assez de dons cet hiver !", en: "Let's hope we get enough donations this winter!" },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "I hope it won't rain on Saturday. Which is right?", options: ["J'espère qu'il ne pleuvra pas samedi.", "J'espère qu'il ne pleuve pas samedi.", "J'espère qu'il ne pleuvrait pas samedi.", "J'espère ne pas pleuvoir samedi."], correctIndex: 0, explanation: "\"Espérer que\" takes the indicative, here the future \"pleuvra\". The subjunctive after \"espérer\" is the classic English-speaker mistake." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Pourvu qu'il fait beau pour la fête !", answer: "Pourvu qu'il fasse beau pour la fête !", explanation: "\"Pourvu que\" always takes the subjunctive: \"qu'il fasse\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Every Tuesday, I help children with their homework.", answer: "Tous les mardis, j'aide des enfants à faire leurs devoirs.", altAnswers: ["Le mardi, j'aide des enfants à faire leurs devoirs.", "Tous les mardis, j'aide les enfants à faire leurs devoirs.", "Le mardi, j'aide les enfants à faire leurs devoirs."], explanation: "\"Aider quelqu'un à faire\": the verb takes \"à\" before the infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "When I arrived, the other volunteers had already left.", answer: "Quand je suis arrivé, les autres bénévoles étaient déjà partis.", altAnswers: ["Quand je suis arrivée, les autres bénévoles étaient déjà partis.", "Quand je suis arrivé, les autres bénévoles étaient déjà parties.", "Quand je suis arrivée, les autres bénévoles étaient déjà parties."], explanation: "Their leaving came first, so the plus-que-parfait \"étaient partis\" (être, plural agreement)." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "I'd like the town hall [to give] us a room.", sentence: "J'aimerais que la mairie nous ___ une salle.", answer: "donne", altAnswers: ["prête"], explanation: "\"J'aimerais que\" + subjunctive: \"donne\"." },
      { type: "translate", direction: "en-es", prompt: "Change \"J'espère que\" to \"J'aimerais que\".", source: "J'espère que tu viendras samedi.", answer: "J'aimerais que tu viennes samedi.", explanation: "\"Espérer que\" takes the indicative, but \"j'aimerais que\" needs the subjunctive: \"viendras\" → \"viennes\"." },
      { type: "word-order", prompt: "Put the words in order to say: What I like least is the paperwork.", words: ["Ce", "qui", "me", "plaît", "le", "moins,", "c'est", "la", "paperasse."], translation: "What I like least is the paperwork.", explanation: "\"Ce qui\" is the subject of \"plaît\"; \"c'est\" picks the sentence up." },
      { type: "listen-choose", audio: "Ça fait cinq ans que je fais des maraudes.", question: "What does it mean?", options: ["I've been doing night rounds for five years.", "I did night rounds five years ago.", "I'll do night rounds for five years.", "Night rounds take five hours."], correctIndex: 0, explanation: "\"Ça fait... que\" + present = something still going on: I've been doing it for five years." },
      { type: "multiple-choice", question: "Which word means a regular, unpaid charity helper?", options: ["un bénévole", "un volontaire", "un salarié", "un stagiaire"], correctIndex: 0, explanation: "\"Un bénévole\" helps a charity for free. \"Un volontaire\" volunteers for one task or a civic service; \"un salarié\" is paid and \"un stagiaire\" is an intern." },
      { type: "dictation", audio: "Grâce à l'association, il avait trouvé un logement.", explanation: "Plus-que-parfait \"avait trouvé\" for what had happened before the story." },
      { type: "speak", text: "Le bénévolat me permet de me sentir moins seul.", prompt: "Say that volunteering lets you feel less alone.", explanation: "\"Permettre de\" + infinitive; the reflexive pronoun matches the speaker: \"me sentir\"." },
    ],
  },
  {
    slug: "b1-survival-phone-calls",
    level: "FR-B1",
    number: 5,
    title: "Survival: Phone Calls",
    summary: "Make and take calls in French: answering, asking who's calling, putting someone through, leaving a message, spelling your name and giving numbers in pairs.",
    duration: "15 min",
    sections: [
      {
        heading: "Allô ? Starting a call",
        body: [
          "\"Allô ?\" is used only on the phone, by the person answering and by the caller to check the line works. In a business call, the receptionist answers with the company name: \"Cabinet Durand, bonjour !\". The caller then introduces themselves and asks for someone: \"Bonjour, c'est Marc Leroy à l'appareil. Je voudrais parler à Mme Petit, s'il vous plaît\".",
        ],
        examples: [
          { es: "Allô ? Oui, bonjour.", en: "Hello? Yes, hello." },
          { es: "Agence Immobilière du Centre, bonjour !", en: "Central Estate Agency, good morning!" },
          { es: "Bonjour, Marc Leroy à l'appareil.", en: "Hello, this is Marc Leroy speaking." },
          { es: "Je voudrais parler à Madame Petit, s'il vous plaît.", en: "I'd like to speak to Mrs Petit, please." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "You call a dentist's practice. What does the receptionist most likely say?", options: ["Cabinet dentaire du Parc, bonjour !", "Allô, c'est qui ?", "Salut, c'est moi !", "Ne quittez pas."], correctIndex: 0, explanation: "A business answers with its name + \"bonjour\". \"Allô, c'est qui ?\" and \"Salut, c'est moi\" are for friends; \"Ne quittez pas\" comes later, when you're put through." },
        ],
      },
      {
        heading: "À l'appareil, de la part de qui ?",
        body: [
          "\"À l'appareil\" (on the phone, literally on the device) is how you say who is speaking: \"C'est elle-même\" / \"C'est moi\" means speaking (when someone asks for you). \"C'est de la part de qui ?\" (Who's calling?, literally on whose behalf?) is the classic receptionist question. Answer: \"De la part de Marc Leroy\".",
          "Among friends: \"Allô, c'est moi !\", \"Salut, c'est Léa\".",
        ],
        examples: [
          { es: "C'est de la part de qui ?", en: "Who's calling, please?" },
          { es: "C'est elle-même.", en: "Speaking. (a woman answering)" },
          { es: "Salut, c'est Hugo, je te dérange ?", en: "Hi, it's Hugo, is this a bad time?" },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "The receptionist asks: \"C'est de la part de qui ?\" What does she want to know?", options: ["Who's calling", "Which department you want", "Why you're calling", "Who gave you the number"], correctIndex: 0, explanation: "\"C'est de la part de qui ?\" literally means on whose behalf, i.e. who's calling." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Hello, this is Camille Martin speaking.", answer: "Bonjour, Camille Martin à l'appareil.", altAnswers: ["Bonjour, c'est Camille Martin à l'appareil.", "Bonjour, ici Camille Martin.", "Bonjour, c'est Camille Martin."], explanation: "\"À l'appareil\" says who is speaking on the phone; \"ici\" + name is also used." },
        ],
      },
      {
        heading: "Ne quittez pas, je vous le passe",
        body: [
          "To put someone through: \"Ne quittez pas\" (Hold the line, literally don't leave), \"Je vous le passe\" / \"Je vous la passe\" (I'll put you through to him / her). Notice the double pronoun: \"passer quelqu'un à quelqu'un\" → \"je vous le passe\", in the order me/te/nous/vous before le/la.",
        ],
        examples: [
          { es: "Ne quittez pas, je vous le passe.", en: "Hold the line, I'll put you through to him." },
          { es: "Je vous passe le service client.", en: "I'll put you through to customer service." },
          { es: "Un instant, je vous passe sa collègue.", en: "One moment, I'll put you through to her colleague." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "One moment, [I'll put you through to them].", sentence: "Un instant, ___.", answer: "je vous les passe", explanation: "\"Passer quelqu'un à quelqu'un\": \"vous\" (to you) comes before \"les\" (them), both before the verb." },
        ],
      },
      {
        heading: "Not available: leave a message",
        body: [
          "If the person isn't available: \"Il est en ligne\" (He's on another call), \"Elle est en réunion\" (She's in a meeting), \"Il est absent aujourd'hui\", \"Elle n'est pas à son bureau\". Then the offer: \"Vous voulez laisser un message ?\", \"Voulez-vous qu'il vous rappelle ?\" (subjunctive after vouloir que).",
        ],
        examples: [
          { es: "Désolée, elle est en réunion jusqu'à 15 heures.", en: "Sorry, she's in a meeting until 3 p.m." },
          { es: "Il est en ligne, vous patientez ?", en: "He's on another call, will you hold?" },
          { es: "Vous voulez laisser un message ?", en: "Would you like to leave a message?" },
          { es: "Voulez-vous qu'elle vous rappelle ?", en: "Would you like her to call you back?" },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "The receptionist says: « Il est absent aujourd'hui. » What does it mean?", options: ["He's not in today.", "He's on another call.", "He's in a meeting.", "He's away from his desk."], correctIndex: 0, explanation: "\"Absent\" = not at work at all. On another call is \"en ligne\", in a meeting \"en réunion\", away from his desk \"pas à son bureau\"." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "Would you like him [to send] you an email?", sentence: "Voulez-vous qu'il vous ___ un mail ?", answer: "envoie", explanation: "\"Vouloir que\" + subjunctive: \"qu'il vous envoie\"." },
        ],
      },
      {
        heading: "Calling back",
        body: [
          "Callers say \"Pourriez-vous lui dire que j'ai appelé ?\", \"Je rappellerai plus tard\", \"Pourriez-vous rappeler plus tard ?\". Mind the spelling: \"rappeler\" doubles the l before a silent e (\"je rappelle\", \"je rappellerai\") but not in \"nous rappelons\".",
        ],
        examples: [
          { es: "Pourriez-vous lui dire que j'ai appelé ?", en: "Could you tell him I called?" },
          { es: "Je rappellerai dans l'après-midi.", en: "I'll call back in the afternoon." },
          { es: "Nous rappelons toujours nos clients.", en: "We always call our customers back." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Pourriez-vous dire-lui que j'ai appelé ?", answer: "Pourriez-vous lui dire que j'ai appelé ?", explanation: "The pronoun goes in front of the infinitive it belongs to: \"lui dire\"." },
        ],
      },
      {
        heading: "Numbers in pairs",
        body: [
          "French phone numbers have ten digits, read in pairs: 06 12 34 56 78 is \"zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit\". Mobile numbers start with 06 or 07, landlines with 01 to 05 depending on the region.",
        ],
        examples: [
          { es: "Mon numéro, c'est le 06 12 34 56 78.", en: "My number is 06 12 34 56 78." },
          { es: "Vous pouvez me joindre au 01 45 67 89 10.", en: "You can reach me on 01 45 67 89 10." },
          { es: "Mon fixe, c'est le 04 78 21 55 90.", en: "My landline is 04 78 21 55 90." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Mon numéro, c'est le zéro six, quarante-deux, dix-sept, quatre-vingt-trois, quinze.", question: "Which number did you hear?", options: ["06 42 17 83 15", "06 42 70 83 50", "06 24 17 63 15", "07 42 17 83 15"], correctIndex: 0, explanation: "Read in pairs: quarante-deux (42), dix-sept (17), quatre-vingt-trois (83), quinze (15)." },
        ],
      },
      {
        heading: "Spelling names",
        body: [
          "To spell a name, French uses first names as a code: \"A comme Anatole, B comme Berthe, D comme Désiré, M comme Marcel, N comme Nicolas, P comme Pierre, S comme Suzanne\". A double letter is \"deux L\", \"deux T\". Accents: \"e accent aigu\" (é), \"e accent grave\" (è). And watch the vowel names, which English speakers mix up: E sounds like 'euh', I like 'ee', and G and J swap compared with English (G is 'zhay', J is 'zhee').",
        ],
        examples: [
          { es: "Leroy, L-E-R-O-Y, L comme Louis.", en: "Leroy, L-E-R-O-Y, L as in Louis." },
          { es: "Mallet, avec deux L et deux T.", en: "Mallet, with two Ls and two Ts." },
          { es: "Hélène, avec un e accent aigu puis un e accent grave.", en: "With an acute accent on the first e, then a grave accent on the second." },
          { es: "Pouvez-vous m'épeler votre nom, s'il vous plaît ?", en: "Can you spell your name for me, please?" },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Dupuis, D comme Désiré, U, P comme Pierre, U, I, S comme Suzanne.", question: "Which name was spelt?", options: ["Dupuis", "Dupuy", "Dupont", "Dubuis"], correctIndex: 0, explanation: "Each letter is read out, with a first name to make it clear: P comme Pierre, S comme Suzanne. The name ends in -IS." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "Can you [spell] your first name for me?", sentence: "Pouvez-vous m'___ votre prénom ?", answer: "épeler", explanation: "To spell is \"épeler\"; \"m'\" (for me) goes before the infinitive." },
        ],
      },
      {
        heading: "Trouble on the line",
        body: [
          "Phone trouble: \"Ça a coupé\" (We got cut off), \"Je vous entends mal\" (I can't hear you well), \"Ça capte mal ici\" (The signal's bad here), \"Vous pouvez parler plus fort ?\", \"Je n'ai plus de batterie\". If you get the wrong number: \"Excusez-moi, je me suis trompé de numéro\". Note the structure \"se tromper de\" + noun with no article: to get the wrong something.",
        ],
        examples: [
          { es: "Allô ? Allô ? Ça a coupé.", en: "Hello? Hello? We've been cut off." },
          { es: "Je vous entends très mal, ça capte mal ici.", en: "I can hardly hear you, the signal's bad here." },
          { es: "Excusez-moi, je me suis trompée de numéro.", en: "Sorry, I've got the wrong number." },
          { es: "Je te rappelle dans cinq minutes, je n'ai plus de batterie.", en: "I'll call you back in five minutes, my battery's dead." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Pardon, j'ai trompé d'adresse.", answer: "Pardon, je me suis trompé d'adresse.", altAnswers: ["Pardon, je me suis trompée d'adresse."], explanation: "\"Se tromper de\" is pronominal: \"je me suis trompé\", with être in the passé composé." },
          { type: "speak", text: "Je vous entends mal, vous pouvez parler plus fort ?", tip: "Entends: the en is a nasal vowel; don't pronounce the d or s.", explanation: "\"Entendre mal\" is to hear badly; \"plus fort\" means louder." },
        ],
      },
      {
        heading: "Automatic menus",
        body: [
          "Automatic menus (\"un serveur vocal\") give instructions in the imperative: \"Tapez 1\" (Press 1), \"Tapez étoile\" (press star), \"dièse\" (hash), \"Restez en ligne\", \"Votre appel va être transféré\", \"Tous nos conseillers sont actuellement en ligne\" (all our advisers are busy).",
        ],
        examples: [
          { es: "Pour un rendez-vous, tapez 1 ; pour une réclamation, tapez 2.", en: "For an appointment, press 1; for a complaint, press 2." },
          { es: "Tous nos conseillers sont actuellement en ligne, merci de patienter.", en: "All our advisers are currently busy, please hold." },
          { es: "Pour joindre un conseiller, tapez étoile.", en: "To reach an adviser, press star." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "To speak to an adviser, [press] 3.", sentence: "Pour parler à un conseiller, ___ 3.", answer: "tapez", explanation: "Automatic menus use the vous imperative of \"taper\": \"tapez\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I'd like to speak to Mr Girard, please.", answer: "Je voudrais parler à Monsieur Girard, s'il vous plaît.", altAnswers: ["Je voudrais parler à M. Girard, s'il vous plaît.", "J'aimerais parler à Monsieur Girard, s'il vous plaît.", "J'aimerais parler à M. Girard, s'il vous plaît.", "Pourrais-je parler à Monsieur Girard, s'il vous plaît ?"], explanation: "\"Parler à\" + person; the conditional \"je voudrais\" keeps it polite." },
      { type: "translate", direction: "en-es", prompt: "Change to tu (you're calling a friend).", source: "Pourriez-vous me rappeler ce soir ?", answer: "Pourrais-tu me rappeler ce soir ?", altAnswers: ["Tu pourrais me rappeler ce soir ?", "Est-ce que tu pourrais me rappeler ce soir ?"], explanation: "The tu form of the conditional is \"pourrais\"; with intonation, \"tu pourrais\" is fine too." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "He's on another call, he'll call you back in ten minutes.", answer: "Il est en ligne, il vous rappelle dans dix minutes.", altAnswers: ["Il est en ligne, il vous rappellera dans dix minutes.", "Il est en ligne, il te rappelle dans dix minutes.", "Il est en ligne, il te rappellera dans dix minutes."], explanation: "\"En ligne\" on the phone = on a call. The present or future works for the promise." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "[We'll call] you back tomorrow.", sentence: "Nous vous ___ demain.", answer: "rappellerons", altAnswers: ["rappelons"], explanation: "\"Rappeler\" doubles the l before a silent e, as in the future: \"rappellerons\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Could you tell him that the meeting is cancelled?", answer: "Pourriez-vous lui dire que la réunion est annulée ?", altAnswers: ["Vous pourriez lui dire que la réunion est annulée ?", "Pouvez-vous lui dire que la réunion est annulée ?", "Pourriez-vous lui dire que la réunion a été annulée ?"], explanation: "\"Dire à quelqu'un\" → \"lui dire\", before the infinitive; \"annulée\" agrees with \"la réunion\"." },
      { type: "multiple-choice", question: "Someone calls and asks for Madame Roche. You are Madame Roche. What do you say?", options: ["C'est elle-même.", "C'est de la part de qui ?", "Ne quittez pas.", "Je vous la passe."], correctIndex: 0, explanation: "\"C'est elle-même\" (or \"lui-même\" for a man) means speaking." },
      { type: "matching", instructions: "Match the phone phrases with their meanings.", pairs: [{ left: "Ça a coupé.", right: "We got cut off." }, { left: "Il est en ligne.", right: "He's on another call." }, { left: "Tapez dièse.", right: "Press hash." }, { left: "Ne quittez pas.", right: "Hold the line." }, { left: "Ça capte mal.", right: "The signal is bad." }], explanation: "\"En ligne\" on the phone means on a call; \"capter\" is to get a signal." },
      { type: "dictation", audio: "Elle n'est pas à son bureau, voulez-vous patienter ?", explanation: "\"Pas à son bureau\" = away from her desk; \"patienter\" = to hold, wait." },
      { type: "word-order", prompt: "Put the words in order to say: Could you call back later?", words: ["Pourriez-vous", "rappeler", "plus", "tard ?"], translation: "Could you call back later?", explanation: "Polite conditional + infinitive: \"pourriez-vous rappeler\"." },
      { type: "speak", text: "Pourriez-vous me passer le service comptabilité, s'il vous plaît ?", prompt: "Ask the receptionist to put you through to the accounts department.", explanation: "\"Passer quelqu'un à quelqu'un\": \"me passer\" = put me through to." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The signal is bad, I'll call you back from the office. (to a friend)", answer: "Ça capte mal, je te rappelle du bureau.", altAnswers: ["Ça capte mal, je te rappellerai du bureau.", "Ça ne capte pas bien, je te rappelle du bureau.", "Ça capte mal, je te rappelle depuis le bureau."], explanation: "\"Ça capte mal\" = bad signal; the present \"je te rappelle\" is the natural promise." },
      { type: "word-order", prompt: "Put the words in order to say: She's in a meeting until noon.", words: ["Elle", "est", "en", "réunion", "jusqu'à", "midi."], translation: "She's in a meeting until noon.", explanation: "\"Être en réunion\", with no article; \"jusqu'à\" = until." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Speaking. (a man answering, when someone asks for him)", answer: "C'est lui-même.", altAnswers: ["C'est moi.", "C'est moi-même."], explanation: "A man says \"c'est lui-même\", a woman \"c'est elle-même\": speaking." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "My battery is dead, [I'll call you back] tonight. (to a friend)", sentence: "Je n'ai plus de batterie, ___ ce soir.", answer: "je te rappelle", altAnswers: ["je te rappellerai", "je vous rappelle", "je vous rappellerai"], explanation: "Present or future for a promise; \"te\" before the verb." },
    ],
  },
  {
    slug: "b1-cumulative-circuit-impersonals-pourvu-que",
    level: "FR-B1",
    number: 6,
    title: "Cumulative Circuit: Impersonals and Pourvu que",
    summary: "A spaced-review circuit of il est + adjective + que, il vaut mieux que and pourvu que, with the subjunctive and the indicative kept apart.",
    duration: "13 min",
    sections: [
      {
        heading: "Station 1: il est + adjective + que",
        body: [
          "Impersonal sentences with \"il est\" + adjective + \"que\" choose their mood by meaning. Necessity, judgement, emotion and possibility take the subjunctive: \"il est important / nécessaire / essentiel / normal / dommage / rare / possible que\" + subjunctive. Certainty and probability take the indicative: \"il est sûr / certain / évident / clair / probable / vrai que\" + indicative.",
        ],
        examples: [
          { es: "Il est important que vous arriviez à l'heure.", en: "It's important that you arrive on time." },
          { es: "Il est possible qu'il pleuve cet après-midi.", en: "It may rain this afternoon." },
          { es: "Il est évident qu'elle a raison.", en: "It's obvious she's right." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "It's clear that he's lying. Which is right?", options: ["Il est clair qu'il ment.", "Il est clair qu'il mente.", "Il est clair qu'il mentirait.", "Il est clair de mentir."], correctIndex: 0, explanation: "\"Clair\" expresses certainty, so the indicative: \"il ment\". The subjunctive \"mente\" is for necessity, judgement, emotion or possibility." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "It's essential that everyone [knows] the rules.", sentence: "Il est essentiel que tout le monde ___ les règles.", answer: "connaisse", explanation: "Necessity → subjunctive: \"connaître\" gives \"qu'il connaisse\"." },
        ],
      },
      {
        heading: "Possible or probable?",
        body: [
          "The pair that trips people up is \"il est possible que\" (subjunctive) vs \"il est probable que\" (indicative): the more likely something is, the closer it is to fact, and facts go in the indicative.",
          "In speech, \"c'est\" often replaces \"il est\": \"C'est normal que tu sois fatigué\". With no specific subject, use \"de\" + infinitive instead: \"Il est important de dormir\".",
        ],
        examples: [
          { es: "Il est probable qu'il pleuvra cet après-midi.", en: "It will probably rain this afternoon." },
          { es: "C'est dommage que tu ne puisses pas venir.", en: "It's a shame you can't come." },
          { es: "Il est essentiel de bien dormir avant un examen.", en: "It's essential to sleep well before an exam." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Which sentence says 'It's probable that the train will be late'?", options: ["Il est probable que le train aura du retard.", "Il est probable que le train ait du retard.", "Il est possible que le train aura du retard.", "Il est probable que le train avoir du retard."], correctIndex: 0, explanation: "\"Il est probable que\" takes the indicative (here the future). \"Il est possible que\" would need the subjunctive." },
          { type: "translate", direction: "en-es", prompt: "Change \"Il est probable\" to \"Il est possible\".", source: "Il est probable qu'elle viendra.", answer: "Il est possible qu'elle vienne.", explanation: "\"Possible\" is further from fact, so it takes the subjunctive: \"viendra\" → \"vienne\"." },
        ],
      },
      {
        heading: "Station 2: il vaut mieux (que)",
        body: [
          "\"Il vaut mieux\" (it's better) is followed by an infinitive for general advice (\"Il vaut mieux réserver\") or by \"que\" + subjunctive when you name a person: \"Il vaut mieux que tu réserves\". The conditional \"il vaudrait mieux\" makes it gentler.",
          "Unlike English, French doesn't say *c'est mieux de* in careful speech; \"il vaut mieux\" is the standard (\"c'est mieux\" is fine in casual speech). And don't confuse \"il vaut mieux\" with \"il faut\": \"il faut\" is an obligation, \"il vaut mieux\" a recommendation.",
        ],
        examples: [
          { es: "Il vaut mieux réserver, le restaurant est souvent complet.", en: "It's better to book, the restaurant is often full." },
          { es: "Il vaut mieux que tu prennes un parapluie.", en: "You'd better take an umbrella." },
          { es: "Il vaudrait mieux que nous partions avant les bouchons.", en: "It would be better if we left before the traffic jams." },
          { es: "Il vaut mieux ne pas dire ça devant ta mère.", en: "Better not to say that in front of your mother." },
          { es: "Il vaudrait mieux qu'ils sachent la vérité.", en: "It would be better if they knew the truth." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "You'd better not drive tonight. (to a friend)", options: ["Il vaut mieux que tu ne conduises pas ce soir.", "Il vaut mieux que tu ne conduis pas ce soir.", "Il vaut mieux de ne pas conduire ce soir.", "Il vaut mieux que tu conduiras pas ce soir."], correctIndex: 0, explanation: "\"Il vaut mieux que\" + subjunctive: \"conduises\". With an infinitive there's no \"de\"." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Il vaut mieux qu'il fait ses devoirs maintenant.", answer: "Il vaut mieux qu'il fasse ses devoirs maintenant.", explanation: "\"Il vaut mieux que\" + a named person takes the subjunctive: \"qu'il fasse\"." },
        ],
      },
      {
        heading: "Station 3: pourvu que",
        body: [
          "\"Pourvu que\" + subjunctive is an anxious wish about something you can't control: \"Pourvu qu'il fasse beau demain !\" (Let's hope it's nice tomorrow! / Fingers crossed it'll be nice!). It stands alone as an exclamation, with no main clause.",
          "Compare \"j'espère que\" + indicative, which is calmer and more neutral: \"J'espère qu'il fera beau\". Both are correct; they differ in mood and in emotional colour. \"Pourvu que\" can also mean provided that inside a sentence (\"Tu peux sortir, pourvu que tu rentres avant minuit\"), again with the subjunctive.",
        ],
        examples: [
          { es: "Pourvu qu'il fasse beau demain !", en: "Let's hope it's nice tomorrow!" },
          { es: "Pourvu que le train ne soit pas en retard !", en: "Fingers crossed the train isn't late!" },
          { es: "Pourvu qu'elle réussisse son examen !", en: "Let's hope she passes her exam!" },
          { es: "J'espère qu'il fera beau demain.", en: "I hope it'll be nice tomorrow." },
          { es: "Tu peux emprunter la voiture, pourvu que tu fasses le plein.", en: "You can borrow the car, provided you fill up the tank." },
          { es: "Pourvu qu'ils aient reçu notre message !", en: "Let's hope they got our message!" },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Pourvu qu'on trouve une place pour se garer !", question: "What does it mean?", options: ["Let's hope we find a parking space!", "Provided we find a parking space.", "We found a parking space!", "We must find a parking space."], correctIndex: 0, explanation: "Alone as an exclamation, \"pourvu que\" + subjunctive is an anxious hope." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Pourvu qu'il ne pleut pas ce week-end !", answer: "Pourvu qu'il ne pleuve pas ce week-end !", explanation: "\"Pourvu que\" always takes the subjunctive: \"pleuvoir\" → \"qu'il pleuve\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "It's normal that the children are tired.", answer: "Il est normal que les enfants soient fatigués.", altAnswers: ["C'est normal que les enfants soient fatigués."], explanation: "A judgement (\"normal\") takes the subjunctive: \"soient\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "It's true that the museum is closed on Tuesdays.", answer: "Il est vrai que le musée est fermé le mardi.", altAnswers: ["C'est vrai que le musée est fermé le mardi."], explanation: "\"Vrai\" states a fact, so the indicative \"est\"." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "It's rare for him [to be] on time.", sentence: "Il est rare qu'il ___ à l'heure.", answer: "soit", explanation: "\"Il est rare que\" is a judgement, so the subjunctive \"soit\"." },
      { type: "translate", direction: "en-es", prompt: "Change it so it names a person: start with \"Il vaut mieux que tu\".", source: "Il vaut mieux partir tôt.", answer: "Il vaut mieux que tu partes tôt.", explanation: "General advice uses the infinitive; once you name someone, \"que\" + subjunctive: \"que tu partes\"." },
      { type: "translate", direction: "en-es", prompt: "Change \"J'espère que\" to \"Pourvu que\".", source: "J'espère que le magasin sera ouvert.", answer: "Pourvu que le magasin soit ouvert !", altAnswers: ["Pourvu que le magasin soit ouvert."], explanation: "\"Espérer que\" takes the indicative (\"sera\"); \"pourvu que\" needs the subjunctive (\"soit\")." },
      { type: "multiple-choice", question: "Which sentence is a recommendation, not an obligation?", options: ["Il vaut mieux prendre un taxi.", "Il faut prendre un taxi.", "Tu dois prendre un taxi.", "Il est obligatoire de prendre un taxi."], correctIndex: 0, explanation: "\"Il vaut mieux\" recommends; \"il faut\", \"devoir\" and \"obligatoire\" all say you have no choice." },
      { type: "word-order", prompt: "Put the words in order to say: It's important to drink a lot of water.", words: ["Il", "est", "important", "de", "boire", "beaucoup", "d'eau."], translation: "It's important to drink a lot of water.", explanation: "No specific subject: \"il est\" + adjective + \"de\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "You can come, provided you bring a dessert. (to a friend)", answer: "Tu peux venir, pourvu que tu apportes un dessert.", altAnswers: ["Tu peux venir, à condition que tu apportes un dessert."], explanation: "Inside a sentence, \"pourvu que\" = provided that, still with the subjunctive." },
      { type: "dictation", audio: "Il est évident que tu as besoin de vacances.", explanation: "\"Évident\" states a certainty, so the indicative: \"tu as\"." },
      { type: "speak", text: "Pourvu que nos amis aient pensé au gâteau !", prompt: "Say: let's hope our friends remembered the cake!", explanation: "\"Pourvu que\" + past subjunctive: \"aient pensé\"." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Il est probable qu'il fasse beau demain.", answer: "Il est probable qu'il fera beau demain.", altAnswers: ["Il est probable qu'il fait beau demain."], explanation: "\"Probable\" is close to fact, so it takes the indicative, here the future \"fera\"." },
    ],
  },
  {
    slug: "b1-themed-review-future-of-energy",
    level: "FR-B1",
    number: 7,
    title: "Themed Review: The Energy of the Future",
    summary: "Debate nuclear, solar and wind power with the passive, on, doubt with the subjunctive and hypotheses with si + imparfait.",
    duration: "15 min",
    sections: [
      {
        heading: "Where electricity comes from",
        body: [
          "France gets about two-thirds of its electricity from \"le nucléaire\" (nuclear power, from \"les centrales nucléaires\"), the rest from \"l'hydraulique\" (hydro), \"l'éolien\" (wind, from \"les éoliennes\", wind turbines), \"le solaire\" (from \"les panneaux solaires\") and a little gas. These adjective-nouns are masculine: \"le solaire\", \"l'éolien\".",
        ],
        examples: [
          { es: "Le nucléaire reste la première source d'électricité en France.", en: "Nuclear power is still France's main source of electricity." },
          { es: "Il y a des éoliennes sur la colline derrière chez nous.", en: "There are wind turbines on the hill behind our house." },
          { es: "Le prix de l'énergie a beaucoup augmenté depuis deux ans.", en: "The price of energy has gone up a lot over the past two years." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "What is « une éolienne » ?", options: ["a wind turbine", "a solar panel", "a power station", "a dam"], correctIndex: 0, explanation: "\"Une éolienne\" is a wind turbine; \"l'éolien\" is wind power. A solar panel is \"un panneau solaire\", a power station \"une centrale\", a dam \"un barrage\"." },
        ],
      },
      {
        heading: "Describing a process",
        body: [
          "To describe a process, French has three tools you know: the passive (\"l'électricité est produite par des centrales\"), \"on\" (\"on produit l'électricité dans des centrales\") and the pronominal passive (\"l'énergie solaire se stocke difficilement\"). The passive is common in reports and the press; \"on\" is more natural in speech.",
        ],
        examples: [
          { es: "En France, la majorité de l'électricité est produite par des centrales nucléaires.", en: "In France, most electricity is produced by nuclear power stations." },
          { es: "On installe de plus en plus de panneaux solaires sur les toits.", en: "More and more solar panels are being installed on roofs." },
          { es: "Les éoliennes ont été construites au large de la Bretagne.", en: "The wind turbines were built off the coast of Brittany." },
          { es: "L'électricité se stocke encore difficilement.", en: "Electricity is still hard to store." },
          { es: "Les déchets nucléaires sont stockés pendant des milliers d'années.", en: "Nuclear waste is stored for thousands of years." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Which is the most natural spoken way to say 'Solar panels are being installed everywhere'?", options: ["On installe des panneaux solaires partout.", "Des panneaux solaires sont installant partout.", "Les panneaux solaires installent partout.", "On est installé des panneaux solaires partout."], correctIndex: 0, explanation: "In speech, \"on\" + active verb is the most natural way to avoid naming who does it." },
          { type: "translate", direction: "en-es", prompt: "Change it to the passive.", source: "On a fermé la centrale en 2020.", answer: "La centrale a été fermée en 2020.", explanation: "Passive: the object becomes the subject, \"être\" takes the tense (\"a été\") and the participle agrees: \"fermée\"." },
        ],
      },
      {
        heading: "Doubt and opinion",
        body: [
          "In a debate, mood carries meaning. \"Je pense que\", \"je crois que\", \"je suis sûr que\" take the indicative. In the negative or as a question they express doubt and take the subjunctive: \"Je ne pense pas que le nucléaire soit la solution\". \"Je doute que\", \"il est possible que\", \"il est peu probable que\" always take the subjunctive.",
        ],
        examples: [
          { es: "Je pense que le solaire est l'énergie de l'avenir.", en: "I think solar is the energy of the future." },
          { es: "Je ne pense pas que le nucléaire soit sans danger.", en: "I don't think nuclear power is free of danger." },
          { es: "Je doute qu'on puisse se passer du nucléaire avant 2050.", en: "I doubt we can do without nuclear power before 2050." },
          { es: "Il est possible que les prix baissent dans quelques années.", en: "Prices may come down in a few years." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Which sentence is correct?", options: ["Je doute que l'éolien suffise.", "Je doute que l'éolien suffit.", "Je doute que l'éolien suffira.", "Je doute de l'éolien suffise."], correctIndex: 0, explanation: "\"Douter que\" always takes the subjunctive: \"suffise\"." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Je ne crois pas que les prix vont baisser.", answer: "Je ne crois pas que les prix baissent.", altAnswers: ["Je ne pense pas que les prix baissent."], explanation: "A negative \"croire\" expresses doubt, so the subjunctive \"baissent\", not the near future." },
        ],
      },
      {
        heading: "Arguments for and against",
        body: [
          "Useful arguments: \"c'est une énergie propre / renouvelable / bon marché\", \"ça émet peu de CO2\" (it emits little CO2), \"c'est intermittent\" (it's intermittent: no wind, no electricity), \"le risque d'accident\", \"les déchets\", \"ça défigure le paysage\" (it spoils the landscape).",
        ],
        examples: [
          { es: "L'éolien est propre, mais c'est une énergie intermittente.", en: "Wind power is clean, but it's an intermittent source." },
          { es: "Beaucoup d'habitants trouvent que les éoliennes défigurent le paysage.", en: "Many residents feel that wind turbines spoil the landscape." },
          { es: "Le solaire ne coûte presque rien une fois installé.", en: "Solar costs almost nothing once it's installed." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Solar is clean, but it's expensive to install.", answer: "Le solaire est propre, mais c'est cher à installer.", altAnswers: ["L'énergie solaire est propre, mais c'est cher à installer.", "Le solaire est propre, mais ça coûte cher à installer.", "L'énergie solaire est propre, mais ça coûte cher à installer."], explanation: "\"Propre\" = clean; \"c'est cher à\" + infinitive = it's expensive to." },
        ],
      },
      {
        heading: "Imagining another energy policy",
        body: [
          "To propose a different future, use \"si\" + imparfait + conditional: \"Si on investissait davantage dans le solaire, on dépendrait moins du gaz\". And to say what would be needed, \"il faudrait que\" + subjunctive: \"Il faudrait que chaque maison soit mieux isolée\".",
          "Energy-saving verbs: \"consommer\" (to use, consume), \"économiser l'énergie\", \"éteindre la lumière\" (to switch off), \"baisser le chauffage\", \"isoler\" (to insulate). \"Une économie d'énergie\" is an energy saving.",
        ],
        examples: [
          { es: "Si on investissait davantage dans le solaire, on dépendrait moins du gaz.", en: "If we invested more in solar, we'd depend less on gas." },
          { es: "Il faudrait que chaque maison soit mieux isolée.", en: "Every house would need to be better insulated." },
          { es: "Si tout le monde baissait le chauffage d'un degré, on ferait de grosses économies.", en: "If everyone turned the heating down by one degree, we'd make big savings." },
          { es: "On consommerait moins si les appareils étaient plus efficaces.", en: "We'd use less if appliances were more efficient." },
          { es: "Éteins la lumière quand tu sors de la pièce !", en: "Switch the light off when you leave the room!" },
          { es: "Il faudrait que l'État aide les familles à changer de chauffage.", en: "The state should help families change their heating." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "We'd need everyone [to switch off] the lights.", sentence: "Il faudrait que tout le monde ___ la lumière.", answer: "éteigne", explanation: "\"Il faudrait que\" + subjunctive; \"éteindre\" gives \"qu'il éteigne\", and \"tout le monde\" is singular." },
          { type: "translate", direction: "en-es", prompt: "Change it to an imagined situation (si + imparfait).", source: "Si on isole la maison, on paiera moins.", answer: "Si on isolait la maison, on paierait moins.", altAnswers: ["Si on isolait la maison, on payerait moins."], explanation: "Imagined: si + imparfait (\"isolait\"), then the conditional (\"paierait\")." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The dam was built in 1960.", answer: "Le barrage a été construit en 1960.", altAnswers: ["On a construit le barrage en 1960."], explanation: "Passive in the passé composé: \"a été construit\", agreeing with \"le barrage\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Solar panels are sold everywhere now.", answer: "Les panneaux solaires se vendent partout maintenant.", altAnswers: ["On vend des panneaux solaires partout maintenant.", "Les panneaux solaires sont vendus partout maintenant.", "Maintenant, les panneaux solaires se vendent partout.", "Maintenant, on vend des panneaux solaires partout."], explanation: "The pronominal passive \"se vendent\" describes what is usual; \"on vend\" is the spoken alternative." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "I'm sure the bill [will go up].", sentence: "Je suis sûr que la facture ___.", answer: "augmentera", altAnswers: ["va augmenter"], explanation: "Certainty takes the indicative, here the future \"augmentera\"." },
      { type: "translate", direction: "en-es", prompt: "Make it negative.", source: "Je pense que l'éolien est la solution.", answer: "Je ne pense pas que l'éolien soit la solution.", explanation: "Once \"penser\" is negative it expresses doubt: \"est\" becomes the subjunctive \"soit\"." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Si on consommerait moins, on paierait moins.", answer: "Si on consommait moins, on paierait moins.", altAnswers: ["Si on consommait moins, on payerait moins."], explanation: "Never the conditional right after \"si\": si + imparfait (\"consommait\"), then the conditional." },
      { type: "multiple-choice", question: "Which argument is AGAINST wind turbines?", options: ["Elles défigurent le paysage.", "C'est une énergie renouvelable.", "Ça émet peu de CO2.", "C'est une énergie propre."], correctIndex: 0, explanation: "\"Défigurer le paysage\" = to spoil the landscape. The other three are arguments for." },
      { type: "word-order", prompt: "Put the words in order to say: We should use less energy.", words: ["Il", "faudrait", "qu'on", "consomme", "moins", "d'énergie."], translation: "We should use less energy.", explanation: "\"Il faudrait que\" + subjunctive \"consomme\"; \"moins de\" + noun." },
      { type: "listen-choose", audio: "Il est peu probable que les prix baissent cette année.", question: "What does it mean?", options: ["Prices are unlikely to fall this year.", "Prices will probably fall this year.", "Prices fell a little this year.", "Prices may rise this year."], correctIndex: 0, explanation: "\"Il est peu probable que\" = it's unlikely that, followed by the subjunctive \"baissent\"." },
      { type: "dictation", audio: "Chez nous, on a baissé le chauffage d'un degré.", explanation: "\"Baisser le chauffage\" = to turn the heating down; \"d'un degré\" = by one degree." },
      { type: "speak", text: "Si j'avais un jardin, j'installerais des panneaux solaires.", prompt: "Say that if you had a garden, you'd install solar panels.", explanation: "Si + imparfait, then the conditional \"installerais\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I doubt everyone agrees.", answer: "Je doute que tout le monde soit d'accord.", explanation: "\"Douter que\" always takes the subjunctive: \"soit\". \"Tout le monde\" is singular." },
    ],
  },
  {
    slug: "b1-quick-round-ai-avais-aurai",
    level: "FR-B1",
    number: 8,
    title: "Quick Round: J'ai fait, J'avais fait, J'aurai fait",
    summary: "A fast spaced review of the three compound tenses: passé composé, plus-que-parfait and futur antérieur, with avoir and être.",
    duration: "12 min",
    sections: [
      {
        heading: "Three tenses, one recipe",
        body: [
          "All three compound tenses are built the same way: auxiliary + past participle. Only the tense of the auxiliary changes. Present → passé composé (\"j'ai fait\", \"je suis parti\": I did, I've done). Imparfait → plus-que-parfait (\"j'avais fait\", \"j'étais parti\": I had done). Future → futur antérieur (\"j'aurai fait\", \"je serai parti\": I will have done).",
          "The auxiliary choice and agreement rules don't change: être verbs and pronominal verbs agree with the subject in all three tenses (\"elle était partie\", \"elles se seront couchées\").",
        ],
        examples: [
          { es: "J'ai fini le rapport ce matin.", en: "I finished the report this morning." },
          { es: "J'avais déjà fini le rapport quand le chef est arrivé.", en: "I had already finished the report when the boss arrived." },
          { es: "J'aurai fini le rapport avant vendredi.", en: "I'll have finished the report before Friday." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "I'll have left. Which is right?", options: ["Je serai parti.", "J'aurai parti.", "J'étais parti.", "Je suis parti."], correctIndex: 0, explanation: "\"Partir\" takes être, so the futur antérieur uses the future of être: \"je serai parti\". \"J'étais parti\" is had left, \"je suis parti\" I left." },
          { type: "translate", direction: "en-es", prompt: "Change it to the plus-que-parfait.", source: "Je me suis levé.", answer: "Je m'étais levé.", altAnswers: ["Je m'étais levée."], explanation: "Only the auxiliary changes tense: \"suis\" → \"étais\". A pronominal verb keeps être." },
        ],
      },
      {
        heading: "Each tense has its own job",
        body: [
          "Each tense has its own job. The passé composé tells what happened. The plus-que-parfait goes one step further back. The futur antérieur says what will be done before another future moment, typically after \"quand\", \"dès que\", \"une fois que\": \"Quand j'aurai fini, je t'appellerai\".",
        ],
        examples: [
          { es: "Elle est partie à 8 heures.", en: "She left at 8." },
          { es: "Elle était déjà partie quand j'ai appelé.", en: "She had already left when I called." },
          { es: "Elle sera partie avant ton arrivée.", en: "She'll have left before you arrive." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "When you [have read] the book, lend it to me.", sentence: "Quand tu ___ le livre, prête-le-moi.", answer: "auras lu", explanation: "After \"quand\" with a future meaning, something completed first goes in the futur antérieur: \"tu auras lu\"." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Quand j'arriverai, il est déjà parti.", answer: "Quand j'arriverai, il sera déjà parti.", explanation: "His leaving will be complete before a future moment, so the futur antérieur: \"il sera parti\"." },
        ],
      },
      {
        heading: "Quick round: avoir verbs",
        body: [
          "Fire through these: the irregular participles are the same in all three tenses (\"fait\", \"pris\", \"mis\", \"dit\", \"écrit\", \"vu\", \"lu\", \"reçu\", \"eu\", \"été\"). Watch the futur antérieur stems: \"j'aurai\", \"tu auras\", \"il aura\", \"nous aurons\", \"vous aurez\", \"ils auront\".",
          "With avoir, agreement happens only with a preceding direct object: \"Les photos ? Je les avais déjà vues\".",
        ],
        examples: [
          { es: "Nous avons pris le dernier train.", en: "We took the last train." },
          { es: "Nous avions pris nos billets à l'avance.", en: "We had bought our tickets in advance." },
          { es: "Dès que vous aurez reçu le dossier, envoyez-le-moi.", en: "As soon as you've received the file, send it to me." },
          { es: "Ils avaient tout lu avant l'examen.", en: "They had read everything before the exam." },
          { es: "Les photos ? Je les avais déjà vues.", en: "The photos? I'd already seen them." },
          { es: "Tu auras eu le temps de te reposer.", en: "You'll have had time to rest." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "The letters? She had already posted them. Which is right?", options: ["Les lettres ? Elle les avait déjà postées.", "Les lettres ? Elle les avait déjà postés.", "Les lettres ? Elle les avait déjà posté.", "Les lettres ? Elle avait les déjà postées."], correctIndex: 0, explanation: "\"Les\" (the letters, feminine plural) comes before \"avait\", so the participle agrees: \"postées\". The pronoun goes before the auxiliary." },
          { type: "translate", direction: "en-es", prompt: "Change it to the futur antérieur.", source: "Tu as écrit ta lettre.", answer: "Tu auras écrit ta lettre.", explanation: "The futur antérieur takes the future of avoir: \"tu auras\" + participle." },
        ],
      },
      {
        heading: "Quick round: être verbs and pronominal verbs",
        body: [
          "Être verbs: \"je suis venu\" → \"j'étais venu\" → \"je serai venu\". Pronominal: \"nous nous sommes levés\" → \"nous nous étions levés\" → \"nous nous serons levés\". The futur antérieur of être runs \"je serai, tu seras, il sera, nous serons, vous serez, ils seront\".",
          "Remember the verbs that switch to avoir when they have a direct object: \"elle est descendue\" but \"elle a descendu les valises\" → \"elle avait descendu les valises\".",
        ],
        examples: [
          { es: "Ils sont arrivés en retard.", en: "They arrived late." },
          { es: "Ils étaient arrivés avant nous.", en: "They had arrived before us." },
          { es: "Ils seront arrivés avant minuit.", en: "They'll have arrived before midnight." },
          { es: "Nous nous étions couchés très tard.", en: "We had gone to bed very late." },
          { es: "Quand tu te seras habitué, tu adoreras la ville.", en: "Once you've got used to it, you'll love the city." },
          { es: "Elle avait descendu les valises toute seule.", en: "She had carried the suitcases down by herself." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "She had carried the boxes up. Which is right?", options: ["Elle avait monté les cartons.", "Elle était montée les cartons.", "Elle avait montée les cartons.", "Elle était monté les cartons."], correctIndex: 0, explanation: "With a direct object, \"monter\" takes avoir, and the object comes after, so no agreement: \"avait monté\"." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "The children [will have gone to bed] before nine.", sentence: "Les enfants ___ avant neuf heures.", answer: "se seront couchés", explanation: "Futur antérieur of a pronominal verb: \"se seront\" + participle agreeing with the subject." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I'll have finished the washing-up before the film.", answer: "J'aurai fini la vaisselle avant le film.", altAnswers: ["J'aurai fait la vaisselle avant le film.", "J'aurai terminé la vaisselle avant le film."], explanation: "Futur antérieur: done before a future moment." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "We had already eaten when they arrived.", answer: "Nous avions déjà mangé quand ils sont arrivés.", altAnswers: ["On avait déjà mangé quand ils sont arrivés.", "Nous avions déjà mangé quand elles sont arrivées.", "On avait déjà mangé quand elles sont arrivées."], explanation: "Plus-que-parfait for the earlier action, passé composé for the arrival." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "He went out at noon.", answer: "Il est sorti à midi.", explanation: "Passé composé of \"sortir\" (no object) with être." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "As soon as she [has found] a flat, she'll move.", sentence: "Dès qu'elle ___ un appartement, elle déménagera.", answer: "aura trouvé", explanation: "\"Dès que\" + futur antérieur when the main verb is in the future." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Ils avaient arrivés en retard.", answer: "Ils étaient arrivés en retard.", altAnswers: ["Elles étaient arrivées en retard."], explanation: "\"Arriver\" takes être in every compound tense: \"ils étaient arrivés\"." },
      { type: "multiple-choice", question: "Which sentence means: When you've read it, you'll understand?", options: ["Quand tu l'auras lu, tu comprendras.", "Quand tu l'as lu, tu comprendras.", "Quand tu l'avais lu, tu comprendrais.", "Quand tu le liras, tu as compris."], correctIndex: 0, explanation: "Future main verb, earlier future action: \"quand\" + futur antérieur, \"tu l'auras lu\"." },
      { type: "word-order", prompt: "Put the words in order to say: They had seen the film twice.", words: ["Ils", "avaient", "vu", "le", "film", "deux", "fois."], translation: "They had seen the film twice.", explanation: "Plus-que-parfait: imparfait of avoir + participle." },
      { type: "listen-choose", audio: "Elles se seront reposées avant le match.", question: "What does it mean?", options: ["They'll have rested before the match.", "They had rested before the match.", "They rested before the match.", "They'll rest after the match."], correctIndex: 0, explanation: "\"Se seront reposées\": the future of être + participle, the futur antérieur." },
      { type: "dictation", audio: "Une fois que tu te seras installé, envoie-moi ton adresse.", altAnswers: ["Une fois que tu te seras installée, envoie-moi ton adresse."], explanation: "\"Une fois que\" + futur antérieur of a pronominal verb: \"tu te seras installé\"." },
      { type: "speak", text: "Quand j'aurai économisé assez d'argent, j'achèterai une voiture.", prompt: "Say: when I've saved enough money, I'll buy a car.", explanation: "\"Quand\" + futur antérieur, then the future." },
    ],
  },
  {
    slug: "b1-survival-bank-and-money",
    level: "FR-B1",
    number: 9,
    title: "Survival: The Bank and Money",
    summary: "Open a bank account, move money, deal with a swallowed or stolen card, and stop confusing la monnaie with l'argent.",
    duration: "15 min",
    sections: [
      {
        heading: "Opening an account",
        body: [
          "To live in France you need \"un compte bancaire\": \"un compte courant\" (a current account) and often \"un livret A\" (a tax-free savings account everyone has). You open an account (\"ouvrir un compte\") with \"un conseiller\" / \"une conseillère\" (your bank adviser), usually by appointment.",
        ],
        examples: [
          { es: "Je voudrais ouvrir un compte, s'il vous plaît.", en: "I'd like to open an account, please." },
          { es: "J'ai rendez-vous avec ma conseillère jeudi.", en: "I've got an appointment with my bank adviser on Thursday." },
          { es: "J'ai un compte courant et un livret A.", en: "I have a current account and a savings account." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "What is « un livret A » ?", options: ["a tax-free savings account", "a cheque book", "a current account", "a bank statement"], correctIndex: 0, explanation: "\"Un livret A\" is the tax-free savings account almost everyone in France has; a current account is \"un compte courant\"." },
        ],
      },
      {
        heading: "Documents, card and RIB",
        body: [
          "The bank will say \"Il faut que vous fournissiez une pièce d'identité et un justificatif de domicile\" (proof of address: an electricity bill or a rent receipt). Then you'll get \"une carte bancaire\" (often called \"une carte bleue\" or \"une CB\") with \"un code confidentiel\" (PIN), and your \"RIB\" (relevé d'identité bancaire), the sheet with your bank details. Every employer, landlord and utility company will ask you for \"votre RIB\".",
        ],
        examples: [
          { es: "Il faut que vous fournissiez un justificatif de domicile de moins de trois mois.", en: "You need to provide proof of address less than three months old." },
          { es: "Votre carte vous sera envoyée par courrier sous dix jours.", en: "Your card will be sent to you by post within ten days." },
          { es: "Vous recevrez votre code confidentiel séparément.", en: "You'll receive your PIN separately." },
          { es: "Mon employeur m'a demandé un RIB pour verser mon salaire.", en: "My employer asked me for my bank details to pay my salary." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "The bank wants me [to come back] with my passport.", sentence: "La banque veut que je ___ avec mon passeport.", answer: "revienne", explanation: "\"Vouloir que\" + subjunctive: \"revenir\" → \"que je revienne\"." },
          { type: "multiple-choice", question: "Your landlord asks for \"un RIB\". What does he want?", options: ["Your bank details", "A rent receipt", "Your ID card", "A reference from your employer"], correctIndex: 0, explanation: "\"Un RIB\" (relevé d'identité bancaire) is the document with your account details, needed for direct debits and salaries." },
        ],
      },
      {
        heading: "Moving money: virements and prélèvements",
        body: [
          "\"Un virement\" is a transfer (\"faire un virement\", \"virer de l'argent sur un compte\"). \"Un prélèvement\" is a direct debit: rent, electricity and phone bills are usually \"prélevés\" automatically. \"Retirer de l'argent\" is to withdraw money, at \"un distributeur\" (cash machine, officially \"un DAB\"). \"Déposer\" or \"encaisser un chèque\" is to pay in a cheque.",
          "Money problems: \"les frais\" (bank charges, always plural), \"le solde\" (balance), \"être à découvert\" (to be overdrawn), \"un découvert autorisé\" (an agreed overdraft). \"Les agios\" are the interest charges you pay when overdrawn.",
        ],
        examples: [
          { es: "Je vous fais un virement ce soir.", en: "I'll do a transfer to you tonight." },
          { es: "Le loyer est prélevé le 5 de chaque mois.", en: "The rent is taken by direct debit on the 5th of each month." },
          { es: "Il faut que je retire de l'argent avant le marché.", en: "I need to get some cash out before the market." },
          { es: "Je suis à découvert depuis le 20.", en: "I've been overdrawn since the 20th." },
          { es: "La banque m'a pris quinze euros de frais.", en: "The bank charged me fifteen euros in fees." },
          { es: "Vous pouvez consulter votre solde sur l'appli.", en: "You can check your balance on the app." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "\"Je suis à découvert.\" What's the situation?", options: ["My account is overdrawn.", "I've discovered a mistake.", "My card has been blocked.", "I've opened a new account."], correctIndex: 0, explanation: "\"Être à découvert\" means being overdrawn (literally uncovered)." },
          { type: "translate", direction: "en-es", prompt: "Change it to the passive.", source: "La banque prélève l'abonnement le 10.", answer: "L'abonnement est prélevé le 10.", altAnswers: ["L'abonnement est prélevé par la banque le 10.", "L'abonnement est prélevé le dix."], explanation: "Passive: the subscription becomes the subject, \"est prélevé\" agrees with it; the bank can be left out." },
        ],
      },
      {
        heading: "When things go wrong",
        body: [
          "\"Le distributeur a avalé ma carte\" (The cash machine swallowed my card) is a phrase every expat ends up needing. If your card is lost or stolen, you must \"faire opposition\" (block / cancel the card) at once, by calling the bank's emergency line: \"Je voudrais faire opposition sur ma carte\".",
        ],
        examples: [
          { es: "Le distributeur a avalé ma carte hier soir.", en: "The cash machine swallowed my card last night." },
          { es: "Je voudrais faire opposition sur ma carte, s'il vous plaît.", en: "I'd like to cancel my card, please." },
          { es: "Appelez tout de suite le numéro d'urgence de votre banque.", en: "Call your bank's emergency number straight away." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "My card was stolen, I need to cancel it.", answer: "On m'a volé ma carte, il faut que je fasse opposition.", altAnswers: ["Ma carte a été volée, il faut que je fasse opposition.", "On m'a volé ma carte, je dois faire opposition.", "Ma carte a été volée, je dois faire opposition.", "On m'a volé ma carte, il faut que je fasse opposition sur ma carte."], explanation: "\"Faire opposition\" = to block a card; \"il faut que\" + subjunctive \"fasse\". \"On m'a volé\" is the natural way to say was stolen." },
        ],
      },
      {
        heading: "Telling what happened",
        body: [
          "Explaining what happened mixes the pasts: \"Je retirais de l'argent quand la machine a avalé ma carte\". For something done to you, French often uses \"on\": \"On m'a volé mon portefeuille\" (My wallet was stolen, literally someone stole my wallet). Note \"un débit que je ne reconnais pas\" (a payment I don't recognise).",
        ],
        examples: [
          { es: "On m'a volé mon sac dans le métro.", en: "My bag was stolen on the metro." },
          { es: "Il y a un débit de 300 euros que je ne reconnais pas.", en: "There's a 300-euro payment I don't recognise." },
          { es: "Je retirais de l'argent quand l'écran s'est éteint.", en: "I was taking money out when the screen went off." },
          { es: "J'ai tapé trois fois le mauvais code et ma carte a été bloquée.", en: "I entered the wrong PIN three times and my card was blocked." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "My wallet was stolen.", answer: "On m'a volé mon portefeuille.", altAnswers: ["Mon portefeuille a été volé.", "Je me suis fait voler mon portefeuille."], explanation: "French prefers \"on m'a volé\" (someone stole from me) over the passive for this kind of event." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Je retirais de l'argent quand la machine avalait ma carte.", answer: "Je retirais de l'argent quand la machine a avalé ma carte.", altAnswers: ["Je retirais de l'argent quand le distributeur a avalé ma carte."], explanation: "The swallowing is a one-off event that interrupts, so the passé composé: \"a avalé\". The imparfait is for the action in progress." },
        ],
      },
      {
        heading: "The trap: la monnaie is not money",
        body: [
          "Money in general is \"l'argent\" (masculine, uncountable: \"de l'argent\"). \"La monnaie\" means change or coins: \"Vous avez de la monnaie ?\" (Have you got any change?), \"Gardez la monnaie\" (Keep the change), \"rendre la monnaie\" (to give change). It also means currency: \"l'euro est la monnaie de la France\".",
          "So I haven't got any money is \"Je n'ai pas d'argent\", never *je n'ai pas de monnaie* (which means I haven't got any change). In familiar French, money is also \"le fric\" or \"les sous\": \"Je n'ai plus de sous\".",
        ],
        examples: [
          { es: "Je n'ai pas d'argent sur moi.", en: "I haven't got any money on me." },
          { es: "Vous avez de la monnaie sur cinquante euros ?", en: "Have you got change for fifty euros?" },
          { es: "Gardez la monnaie.", en: "Keep the change." },
          { es: "Le serveur ne m'a pas rendu la monnaie.", en: "The waiter didn't give me my change." },
          { es: "Tu as de la monnaie pour le parking ?", en: "Have you got any coins for the parking?" },
          { es: "En fin de mois, je n'ai plus de sous.", en: "At the end of the month, I'm out of cash." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Je n'ai pas de monnaie pour payer le loyer.", answer: "Je n'ai pas d'argent pour payer le loyer.", explanation: "Money in general is \"l'argent\". \"La monnaie\" means change or coins, which you don't pay rent with." },
          { type: "speak", text: "Excusez-moi, vous pourriez me faire de la monnaie ?", prompt: "Ask a shopkeeper politely whether they could give you change.", explanation: "\"Faire de la monnaie\" = to give change for a note; \"la monnaie\" is change, not money." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Can you transfer the money to me before Friday? (to a friend)", answer: "Tu peux me virer l'argent avant vendredi ?", altAnswers: ["Tu peux me faire un virement avant vendredi ?", "Est-ce que tu peux me virer l'argent avant vendredi ?", "Tu pourrais me virer l'argent avant vendredi ?", "Est-ce que tu peux me faire un virement avant vendredi ?"], explanation: "\"Virer de l'argent à quelqu'un\" = to transfer; \"me\" goes before the infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I'd like to withdraw two hundred euros.", answer: "Je voudrais retirer deux cents euros.", altAnswers: ["J'aimerais retirer deux cents euros.", "Je voudrais retirer 200 euros.", "J'aimerais retirer 200 euros."], explanation: "\"Retirer de l'argent\" = to withdraw; \"deux cents\" takes an s when nothing follows the hundred." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "Sorry, I haven't got [any change], only a fifty-euro note.", sentence: "Désolé, je n'ai pas ___, seulement un billet de cinquante.", answer: "de monnaie", explanation: "Change is \"la monnaie\"; after a negative, \"de la\" becomes \"de\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "We've been overdrawn for a week.", answer: "Nous sommes à découvert depuis une semaine.", altAnswers: ["On est à découvert depuis une semaine."], explanation: "\"Être à découvert\" + \"depuis\" with the present: still overdrawn now." },
      { type: "multiple-choice", question: "Which word means bank charges?", options: ["les frais", "le solde", "le découvert", "le virement"], correctIndex: 0, explanation: "\"Les frais\" (always plural) are charges. \"Le solde\" is the balance, \"le découvert\" the overdraft, \"le virement\" a transfer." },
      { type: "word-order", prompt: "Put the words in order to say: My salary is paid on the last day of the month.", words: ["Mon", "salaire", "est", "versé", "le", "dernier", "jour", "du", "mois."], translation: "My salary is paid on the last day of the month.", explanation: "\"Verser un salaire\" = to pay a salary; passive \"est versé\"." },
      { type: "dictation", audio: "Je n'ai plus un sou jusqu'à la fin du mois.", explanation: "\"Un sou\" is familiar for money: \"je n'ai plus un sou\" = I'm broke." },
      { type: "speak", text: "Le distributeur ne marche pas, il faut que j'aille à l'agence.", prompt: "Say the cash machine isn't working, so you have to go to the branch.", explanation: "\"Il faut que\" + subjunctive \"aille\"; \"l'agence\" is the bank branch." },
      { type: "translate", direction: "en-es", prompt: "Change it to the passive.", source: "On vous enverra votre chéquier.", answer: "Votre chéquier vous sera envoyé.", explanation: "Future passive: \"sera envoyé\", agreeing with \"votre chéquier\"; \"vous\" stays before the verb." },
    ],
  },
  {
    slug: "b1-fix-the-paragraph-class-group-chat",
    level: "FR-B1",
    number: 10,
    title: "Fix the Paragraph: The Class Group Chat",
    summary: "Clean up a messy group chat for an evening French class: wrong register with the teacher, misordered pronouns and the wrong mood.",
    duration: "14 min",
    sections: [
      {
        heading: "Tom's message: off-register",
        body: [
          "The students of an evening class at the Alliance française in Bordeaux have a WhatsApp group that includes their teacher, Mme Garnier. Here's Tom's first message: \"Salut Garnier ! T'es dispo demain ? Tu peux m'envoyer le PDF, stp ?\" It's friendly, but completely off-register: you don't address a teacher by her surname alone, and a teacher you say vous to stays \"vous\" even in a chat.",
        ],
        examples: [
          { es: "Bonjour Madame Garnier, est-ce que vous seriez disponible demain ?", en: "Hello Mrs Garnier, would you be available tomorrow?" },
          { es: "Pourriez-vous m'envoyer le document, s'il vous plaît ?", en: "Could you send me the document, please?" },
          { es: "Merci beaucoup, bonne soirée !", en: "Thanks very much, have a good evening!" },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Tom wants to ask the teacher whether there's a class tomorrow. Which message fits?", options: ["Bonjour Madame, est-ce que le cours a lieu demain ?", "Salut Garnier, y a cours demain ?", "Coucou, cours demain ?", "Garnier, tu fais cours demain ?"], correctIndex: 0, explanation: "A teacher gets \"Bonjour Madame\" and \"vous\" (or a neutral question), even in a chat. A bare surname, \"coucou\" and \"tu\" are for friends." },
          { type: "translate", direction: "en-es", prompt: "Correct the message to the teacher.", source: "Salut Garnier, t'as reçu mon devoir ?", answer: "Bonjour Madame Garnier, avez-vous reçu mon devoir ?", altAnswers: ["Bonjour Madame Garnier, est-ce que vous avez reçu mon devoir ?", "Bonjour Madame Garnier, vous avez reçu mon devoir ?", "Bonjour Madame, avez-vous reçu mon devoir ?", "Bonjour Madame, est-ce que vous avez reçu mon devoir ?", "Bonjour Madame, vous avez reçu mon devoir ?"], explanation: "To the teacher: \"Bonjour Madame\" (+ surname), never the surname alone, and \"vous\" instead of \"t'as\"." },
        ],
      },
      {
        heading: "Match the person, not the medium",
        body: [
          "Corrected: \"Bonjour Madame Garnier, est-ce que vous seriez disponible demain ? Pourriez-vous m'envoyer le PDF, s'il vous plaît ?\" Messages to the other students can stay casual, with \"tu\", dropped \"ne\" and abbreviations; that's the point of register: matching the person, not the medium.",
          "Other register mistakes in the chat: \"Coucou madame\" (\"coucou\" is for friends and family), \"Merci beaucoup, bisous !\" to the teacher (use \"Bonne soirée\" or \"Merci beaucoup, bonne journée\").",
        ],
        examples: [
          { es: "Salut tout le monde, quelqu'un a les notes de mardi ?", en: "Hi everyone, has anyone got Tuesday's notes?" },
          { es: "Je sais pas si je pourrai venir, je vous dis ça demain.", en: "Dunno if I'll be able to come, I'll let you know tomorrow." },
          { es: "Merci beaucoup, bonne journée !", en: "Thanks very much, have a good day!" },
          { es: "Coucou les filles, ça va ?", en: "Hi girls, how's it going? (to friends)" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Turn it into a casual message to a classmate.", source: "Auriez-vous les notes du cours de jeudi ?", answer: "T'as les notes du cours de jeudi ?", altAnswers: ["Tu as les notes du cours de jeudi ?", "Est-ce que tu as les notes du cours de jeudi ?"], explanation: "To a classmate: \"tu\" (often \"t'as\" in a chat) and a plain intonation question." },
          { type: "multiple-choice", question: "Which sign-off is right in a message to the teacher?", options: ["Merci, bonne soirée !", "Bisous !", "Coucou !", "À plus !"], correctIndex: 0, explanation: "\"Bonne soirée\" is warm but respectful. \"Bisous\", \"coucou\" and \"à plus\" are for friends and family." },
        ],
      },
      {
        heading: "Le before lui",
        body: [
          "Next, Inès writes: \"Le livre de Julie ? Je lui le rends demain.\" The two pronouns are in the wrong order. Before the verb, the order is: me / te / se / nous / vous → le / la / les → lui / leur → y → en. So \"le\" comes before \"lui\": \"Je le lui rends demain\".",
        ],
        examples: [
          { es: "Le livre de Julie ? Je le lui rends demain.", en: "Julie's book? I'm giving it back to her tomorrow." },
          { es: "Les photos de la soirée, tu nous les montres ?", en: "The photos from the party, will you show them to us?" },
          { es: "Le code du wifi ? Je te l'ai déjà donné.", en: "The wifi code? I've already given it to you." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Her phone number? I gave it to them.", options: ["Son numéro ? Je le leur ai donné.", "Son numéro ? Je leur l'ai donné.", "Son numéro ? Je l'ai leur donné.", "Son numéro ? Je leur le ai donné."], correctIndex: 0, explanation: "Before the verb: \"le\" before \"leur\", both before the auxiliary." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Les clés de la salle ? Je lui les ai données.", answer: "Les clés de la salle ? Je les lui ai données.", explanation: "Third-person order: \"les\" before \"lui\"." },
        ],
      },
      {
        heading: "Imperatives, y and en",
        body: [
          "And Paul writes: \"Les exercices ? Envoie-moi-les !\" In an affirmative imperative, the direct object comes first: \"Envoie-les-moi !\" In the negative, the normal order comes back: \"Ne me les envoie pas\".",
          "Finally Sofia: \"Il y a des croissants ? Oui, j'en y ai apporté.\" \"Y\" and \"en\" together are always \"y en\" (\"il y en a\"), but here \"y\" isn't needed at all: \"Oui, j'en ai apporté\".",
        ],
        examples: [
          { es: "Les exercices ? Envoie-les-moi !", en: "The exercises? Send them to me!" },
          { es: "Ne me les envoie pas avant lundi.", en: "Don't send them to me before Monday." },
          { es: "Des croissants ? Oui, j'en ai apporté.", en: "Croissants? Yes, I brought some." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Le PDF ? Envoie-moi-le ce soir !", answer: "Le PDF ? Envoie-le-moi ce soir !", explanation: "Affirmative imperative: the direct object first, then \"moi\"." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "Water? Yes, [I brought some].", sentence: "De l'eau ? Oui, ___.", answer: "j'en ai apporté", altAnswers: ["j'en ai amené"], explanation: "\"En\" replaces \"de l'eau\"; no \"y\" is needed, and \"en\" never makes the participle agree." },
        ],
      },
      {
        heading: "Mood mistakes",
        body: [
          "The last messages: \"Il faut que tu viens à 18 h\" should be \"Il faut que tu viennes\" (subjunctive after \"il faut que\"). \"Si tu viendrais, apporte du pain\" should be \"Si tu viens, apporte du pain\" (never the conditional after si). \"Je pense que ce soit une bonne idée\" should be \"Je pense que c'est une bonne idée\" (affirmative \"penser\" takes the indicative). And \"J'espère que tu sois là\" should be \"J'espère que tu seras là\".",
        ],
        examples: [
          { es: "Il faut que tu viennes à 18 heures.", en: "You need to come at 6 p.m." },
          { es: "Si tu viens, apporte du pain.", en: "If you come, bring some bread." },
          { es: "Je pense que c'est une bonne idée.", en: "I think it's a good idea." },
          { es: "J'espère que tu seras là.", en: "I hope you'll be there." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Il faut que tu prends ton livre jeudi.", answer: "Il faut que tu prennes ton livre jeudi.", explanation: "\"Il faut que\" + subjunctive: \"que tu prennes\"." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Si tu pourrais venir plus tôt, ce serait super.", answer: "Si tu pouvais venir plus tôt, ce serait super.", explanation: "Never the conditional after \"si\": si + imparfait (\"pouvais\"), then the conditional (\"serait\")." },
        ],
      },
      {
        heading: "A quick test for the mood",
        body: [
          "A quick test: emotion, necessity, wish, doubt → subjunctive. Opinion stated as fact, hope (\"espérer\"), certainty → indicative. Si (if) → never the future or conditional.",
        ],
        examples: [
          { es: "Je ne crois pas que la salle soit libre jeudi.", en: "I don't think the room is free on Thursday." },
          { es: "Ça me ferait plaisir que vous veniez tous.", en: "I'd be happy if you all came." },
          { es: "Je suis certaine qu'elle a raison.", en: "I'm sure she's right." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "I hope the teacher is feeling better. Which is right?", options: ["J'espère que la prof va mieux.", "J'espère que la prof aille mieux.", "J'espère que la prof irait mieux.", "J'espère que la prof aller mieux."], correctIndex: 0, explanation: "A hope with \"espérer\" takes the indicative: \"va mieux\"." },
          { type: "translate", direction: "en-es", prompt: "Change \"Je pense\" to \"Je ne pense pas\".", source: "Je pense que le cours est annulé.", answer: "Je ne pense pas que le cours soit annulé.", explanation: "Negative opinion = doubt, so the subjunctive: \"est\" → \"soit\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Hello Mr Dupont, could you tell me the time of the exam?", answer: "Bonjour Monsieur Dupont, pourriez-vous me dire l'heure de l'examen ?", altAnswers: ["Bonjour Monsieur Dupont, est-ce que vous pourriez me dire l'heure de l'examen ?", "Bonjour Monsieur Dupont, vous pourriez me dire l'heure de l'examen ?", "Bonjour Monsieur Dupont, pouvez-vous me dire l'heure de l'examen ?"], explanation: "A teacher gets \"Monsieur\" + surname, \"vous\" and the polite conditional." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The slides? I've already sent them to you. (to a classmate)", answer: "Les diapos ? Je te les ai déjà envoyées.", altAnswers: ["Les diapositives ? Je te les ai déjà envoyées."], explanation: "\"Te\" before \"les\"; \"envoyées\" agrees with \"les diapos\" (feminine plural) placed before." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "The homework? Don't [show it to them]!", sentence: "Les devoirs ? Ne ___ montre pas !", answer: "les leur", explanation: "Negative imperative: normal order before the verb, \"les\" before \"leur\"." },
      { type: "word-order", prompt: "Put the words in order to say: I hope the teacher will reply soon.", words: ["J'espère", "que", "la", "prof", "répondra", "bientôt."], translation: "I hope the teacher will reply soon.", explanation: "\"Espérer que\" + indicative, here the future \"répondra\"." },
      { type: "translate", direction: "en-es", prompt: "Change it to tu (you're writing to a classmate).", source: "Pourriez-vous me prêter votre stylo demain ?", answer: "Tu pourrais me prêter ton stylo demain ?", altAnswers: ["Pourrais-tu me prêter ton stylo demain ?", "Tu peux me prêter ton stylo demain ?", "Est-ce que tu pourrais me prêter ton stylo demain ?"], explanation: "With \"tu\", the verb and the possessive change: \"tu pourrais\", \"ton stylo\"." },
      { type: "multiple-choice", question: "Sofia wrote « J'en y ai apporté ». What should she have written?", options: ["J'en ai apporté.", "J'y en ai apporté.", "J'y ai apporté.", "J'en ai y apporté."], correctIndex: 0, explanation: "Only \"en\" is needed for some (des croissants): \"j'en ai apporté\". \"Y\" would need a place, and it would come before \"en\"." },
      { type: "listen-choose", audio: "Je te l'envoie tout de suite.", question: "What does it mean?", options: ["I'll send it to you right away.", "Send it to me right away.", "I sent it to you yesterday.", "I'll send them to you right away."], correctIndex: 0, explanation: "\"Te\" (to you) before \"l'\" (it); the present here is an immediate promise." },
      { type: "dictation", audio: "Ça me ferait plaisir que tu viennes à la fête de fin d'année.", explanation: "\"Ça me ferait plaisir que\" + subjunctive \"viennes\"." },
      { type: "speak", text: "Désolé, je ne pourrai pas venir jeudi.", prompt: "Tell the group you're sorry, you won't be able to come on Thursday.", explanation: "Future of \"pouvoir\": \"je pourrai\" with a double r; \"ne... pas\" goes around it." },
    ],
  },
  {
    slug: "b1-survival-renting-a-flat",
    level: "FR-B1",
    number: 11,
    title: "Survival: Renting a Flat",
    summary: "Read French flat ads, visit a flat, ask the right questions about rent, charges and the deposit, and put together your rental dossier.",
    duration: "15 min",
    sections: [
      {
        heading: "Reading the ad",
        body: [
          "French flat ads have their own code. \"Un T2\" or \"un F2\" is a flat with two main rooms: a living room and one bedroom (kitchen and bathroom don't count). So \"un T1\" is a one-room flat and \"un studio\" a studio. \"Meublé\" means furnished, \"vide\" or \"non meublé\" unfurnished. \"Le loyer\" is the rent; \"les charges\" are service charges (building maintenance, sometimes water or heating). \"CC\" = \"charges comprises\" (charges included), \"HC\" = \"hors charges\" (charges excluded).",
        ],
        examples: [
          { es: "T2 meublé de 40 m², 750 euros charges comprises.", en: "Furnished one-bedroom flat of 40 m², 750 euros including charges." },
          { es: "Studio vide, 520 euros hors charges, libre au 1er mars.", en: "Unfurnished studio, 520 euros excluding charges, available from 1 March." },
          { es: "C'est un peu petit, mais la cuisine est équipée.", en: "It's a bit small, but the kitchen is fitted." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "An ad says \"T3, 900 € HC\". What does it mean?", options: ["A two-bedroom flat at 900 euros, charges not included", "A three-bedroom flat at 900 euros, charges included", "A flat on the third floor at 900 euros, heating included", "A three-room house at 900 euros a year"], correctIndex: 0, explanation: "T3 = three main rooms (living room + two bedrooms); HC = \"hors charges\", charges extra." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "A furnished studio, 600 euros including charges.", answer: "Un studio meublé, 600 euros charges comprises.", altAnswers: ["Studio meublé, 600 euros charges comprises.", "Un studio meublé à 600 euros charges comprises.", "Un studio meublé, 600 euros CC."], explanation: "\"Meublé\" = furnished; \"charges comprises\" (CC) = charges included, with \"comprises\" agreeing with \"charges\"." },
        ],
      },
      {
        heading: "Abbreviations and people",
        body: [
          "Other common abbreviations: \"m²\" (mètres carrés), \"sdb\" (salle de bains), \"cuis. équipée\" (fitted kitchen), \"4e ét. sans asc.\" (4th floor, no lift), \"proche commerces\" (near shops), \"libre au 1er mars\" (available from 1 March).",
          "\"La colocation\" is flat-sharing, \"un colocataire\" (familiarly \"un coloc\") a flatmate. \"Le propriétaire\" is the landlord, \"le locataire\" the tenant; \"une agence immobilière\" an estate agency.",
        ],
        examples: [
          { es: "L'appartement est au quatrième étage sans ascenseur.", en: "The flat is on the fourth floor with no lift." },
          { es: "On cherche une colocataire pour un T4 près de la fac.", en: "We're looking for a female flatmate for a three-bedroom flat near the university." },
          { es: "Le propriétaire habite au rez-de-chaussée.", en: "The landlord lives on the ground floor." },
          { es: "Deux pièces, 45 m², proche commerces, libre au 1er juin.", en: "Two rooms, 45 m², near shops, available from 1 June." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Who is « le locataire » ?", options: ["the tenant", "the landlord", "the estate agent", "the flatmate"], correctIndex: 0, explanation: "\"Le locataire\" rents the flat; \"le propriétaire\" owns it, \"l'agence\" lets it, \"le colocataire\" shares it." },
        ],
      },
      {
        heading: "The visit: asking the right questions",
        body: [
          "On the visit, ask with polite forms: \"Est-ce que les charges sont comprises ?\", \"Qu'est-ce qui est compris dans les charges ?\", \"Le chauffage est individuel ou collectif ?\" (own boiler or building heating), \"Le logement est disponible à partir de quand ?\", \"Le quartier est calme ?\".",
        ],
        examples: [
          { es: "Est-ce que les charges sont comprises dans le loyer ?", en: "Are the charges included in the rent?" },
          { es: "Le chauffage est individuel ou collectif ?", en: "Does the flat have its own heating or is it shared with the building?" },
          { es: "L'appartement est disponible à partir de quand ?", en: "From when is the flat available?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Turn it into a polite est-ce que question.", source: "Le quartier est calme ?", answer: "Est-ce que le quartier est calme ?", altAnswers: ["Le quartier est-il calme ?"], explanation: "\"Est-ce que\" in front of the statement makes a neutral, polite question." },
          { type: "multiple-choice", question: "At a visit, you want to know if heating is extra. What do you ask?", options: ["Est-ce que le chauffage est compris dans les charges ?", "Est-ce que le chauffage est comprendre dans les charges ?", "Est-ce que le chauffage est compris dans l'état des lieux ?", "Est-ce que le chauffage comprend les charges ?"], correctIndex: 0, explanation: "\"Être compris dans\" means to be included in; heating is often part of \"les charges\"." },
        ],
      },
      {
        heading: "Deposit, fees and guarantor",
        body: [
          "Money questions: \"le dépôt de garantie\" (security deposit, often called \"la caution\" in everyday speech; legally at most one month's rent excluding charges for unfurnished, two for furnished), \"les frais d'agence\" (agency fees). And: \"Est-ce qu'il faut un garant ?\" (Do I need a guarantor?). In France, \"un garant\" is someone, often a parent, who signs to pay the rent if you can't.",
          "Note the double meaning of \"la caution\": in everyday speech the deposit, but strictly speaking it's the guarantee given by the guarantor.",
        ],
        examples: [
          { es: "Le dépôt de garantie est d'un mois de loyer.", en: "The deposit is one month's rent." },
          { es: "Est-ce qu'il faut un garant ?", en: "Do I need a guarantor?" },
          { es: "Il y a des frais d'agence en plus ?", en: "Are there agency fees on top?" },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "The flat is furnished. What's the most the landlord can ask as a deposit?", options: ["two months' rent excluding charges", "one month's rent", "three months' rent", "two months' rent including charges"], correctIndex: 0, explanation: "\"Le dépôt de garantie\" is capped at one month's rent excluding charges for an unfurnished flat, two for a furnished one." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Do I need a guarantor who lives in France?", answer: "Est-ce qu'il faut un garant qui habite en France ?", altAnswers: ["Il faut un garant qui habite en France ?", "Faut-il un garant qui habite en France ?", "Est-ce qu'il faut un garant qui vit en France ?", "Il faut un garant qui vit en France ?"], explanation: "\"Il faut\" + noun = do I need; \"un garant\" is the person who guarantees the rent." },
        ],
      },
      {
        heading: "The dossier",
        body: [
          "In big cities, landlords choose between many candidates, so you need a complete \"dossier\": \"une pièce d'identité\", \"vos trois derniers bulletins de salaire\" (payslips), \"votre contrat de travail\", \"votre dernier avis d'imposition\" (tax notice), and the same for your guarantor. Ask: \"Quels documents faut-il que je fournisse ?\" (subjunctive after il faut que).",
        ],
        examples: [
          { es: "Quels documents faut-il que je fournisse ?", en: "Which documents do I need to provide?" },
          { es: "Il faut que votre garant gagne trois fois le montant du loyer.", en: "Your guarantor needs to earn three times the rent." },
          { es: "Mon dossier est complet, je l'envoie ce soir.", en: "My file is complete, I'm sending it tonight." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "Do I need [to send] my payslips?", sentence: "Est-ce qu'il faut que j'___ mes bulletins de salaire ?", answer: "envoie", explanation: "\"Il faut que\" + subjunctive: \"que j'envoie\"." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Il faut que mon garant a un CDI.", answer: "Il faut que mon garant ait un CDI.", explanation: "\"Il faut que\" takes the subjunctive: \"avoir\" → \"qu'il ait\". (\"Un CDI\" is a permanent job contract.)" },
        ],
      },
      {
        heading: "The lease, the inventory and notice",
        body: [
          "Then you sign \"le bail\" (the lease: usually three years unfurnished, one year furnished). On the day you move in and the day you leave, you do \"l'état des lieux\" (the inventory / check-in report) with the landlord: every scratch is noted, because it decides whether you get your deposit back.",
          "When leaving, you give \"un préavis\" (notice): \"donner son préavis\", usually one to three months.",
        ],
        examples: [
          { es: "On a signé le bail hier soir.", en: "We signed the lease last night." },
          { es: "L'état des lieux d'entrée est prévu samedi à 10 heures.", en: "The check-in inventory is scheduled for Saturday at 10." },
          { es: "Le propriétaire ne m'a pas rendu ma caution.", en: "The landlord didn't give me my deposit back." },
          { es: "J'ai donné mon préavis d'un mois.", en: "I've given my one month's notice." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "L'état des lieux de sortie s'est bien passé.", question: "What does it mean?", options: ["The check-out inventory went well.", "The check-in inventory went badly.", "We left the flat in a bad state.", "The landlord kept the deposit."], correctIndex: 0, explanation: "\"L'état des lieux de sortie\" is the inventory on the day you leave; \"s'est bien passé\" = went well." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "We'll do the inventory on Saturday morning.", answer: "On fera l'état des lieux samedi matin.", altAnswers: ["Nous ferons l'état des lieux samedi matin.", "On va faire l'état des lieux samedi matin.", "Nous allons faire l'état des lieux samedi matin."], explanation: "\"Faire l'état des lieux\" = to do the inventory with the landlord." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I'm looking for a furnished studio near the station.", answer: "Je cherche un studio meublé près de la gare.", altAnswers: ["Je cherche un studio meublé à côté de la gare.", "Je cherche un studio meublé proche de la gare."], explanation: "\"Meublé\" follows the noun and agrees with it; \"près de\" + \"la gare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The flat is available from 1 April.", answer: "L'appartement est libre au 1er avril.", altAnswers: ["L'appartement est disponible à partir du 1er avril.", "L'appartement est libre à partir du 1er avril.", "L'appartement est disponible au 1er avril."], explanation: "Ads say \"libre au\" + date; \"disponible à partir du\" is the full version." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "The landlord wants us [to repaint] the kitchen.", sentence: "Le propriétaire veut que nous ___ la cuisine.", answer: "repeignions", explanation: "\"Vouloir que\" + subjunctive: \"peindre\" has the stem \"peign-\", so \"que nous repeignions\"." },
      { type: "translate", direction: "en-es", prompt: "Change it to the passé composé.", source: "Nous signons le bail lundi.", answer: "Nous avons signé le bail lundi.", altAnswers: ["On a signé le bail lundi."], explanation: "Passé composé with avoir: \"avons signé\"." },
      { type: "matching", instructions: "Match the French with the English.", pairs: [{ left: "le loyer", right: "the rent" }, { left: "le bail", right: "the lease" }, { left: "l'état des lieux", right: "the inventory report" }, { left: "le locataire", right: "the tenant" }, { left: "le préavis", right: "the notice period" }], explanation: "The core vocabulary of renting. Don't confuse \"le locataire\" (tenant) with \"le propriétaire\" (landlord)." },
      { type: "word-order", prompt: "Put the words in order to say: The heating is not included in the charges.", words: ["Le", "chauffage", "n'est", "pas", "compris", "dans", "les", "charges."], translation: "The heating is not included in the charges.", explanation: "\"Être compris dans\" = to be included in; \"compris\" agrees with \"le chauffage\"." },
      { type: "dictation", audio: "Il faut que vous donniez votre préavis trois mois avant.", explanation: "\"Il faut que\" + subjunctive \"donniez\"; \"le préavis\" is your notice." },
      { type: "speak", text: "Est-ce qu'il y a un ascenseur ?", prompt: "Ask whether there's a lift.", explanation: "\"Est-ce qu'il y a\" = is there; \"un ascenseur\" = a lift." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Le locataire paie le loyer au locataire.", answer: "Le locataire paie le loyer au propriétaire.", explanation: "The tenant (\"le locataire\") pays the rent to the landlord, \"le propriétaire\"." },
    ],
  },
  {
    slug: "b1-transformation-chain-nouns-to-pronouns",
    level: "FR-B1",
    number: 12,
    title: "Transformation Chain: From Nouns to Pronouns",
    summary: "Replace noun phrases with pronouns step by step in a flat-hunting dialogue, in the present, the passé composé and the imperative.",
    duration: "14 min",
    sections: [
      {
        heading: "One pronoun at a time: le, la, lui",
        body: [
          "A flat-hunting dialogue is full of repeated nouns: the file, the agency, the keys, the landlord. In natural French they become pronouns as soon as they are known. Start with one: \"Vous avez envoyé le dossier ?\" → \"Vous l'avez envoyé ?\" (direct object \"le\"); \"Vous avez parlé à l'agence ?\" → \"Vous lui avez parlé ?\" (indirect \"lui\" for à + a person or organisation).",
        ],
        examples: [
          { es: "Vous avez envoyé le dossier ? Oui, je l'ai envoyé hier.", en: "Did you send the file? Yes, I sent it yesterday." },
          { es: "Tu as appelé la propriétaire ? Oui, je l'ai appelée ce matin.", en: "Did you call the landlady? Yes, I called her this morning." },
          { es: "Vous avez parlé à l'agent ? Non, je ne lui ai pas encore parlé.", en: "Have you spoken to the agent? No, I haven't spoken to him yet." },
          { es: "La quittance de loyer ? Je l'ai imprimée.", en: "The rent receipt? I printed it." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "« Vous avez répondu à la propriétaire ? » — Yes, I answered her.", options: ["Oui, je lui ai répondu.", "Oui, je l'ai répondu.", "Oui, je la ai répondu.", "Oui, je leur ai répondu."], correctIndex: 0, explanation: "\"Répondre à\" + person takes the indirect pronoun \"lui\" (to her). \"La\" would be a direct object, and \"leur\" means to them." },
          { type: "translate", direction: "en-es", prompt: "Change \"le contrat\" to a pronoun.", source: "J'ai lu le contrat.", answer: "Je l'ai lu.", explanation: "The direct object \"le\" (l' before a vowel) goes before the auxiliary." },
        ],
      },
      {
        heading: "Y, en and agreement",
        body: [
          "Then \"y\" and \"en\": \"Vous êtes allé à l'agence ?\" → \"Vous y êtes allé ?\" (y for à + a place); \"Vous avez des photos de l'appartement ?\" → \"Vous en avez ?\" (en for de / des + noun).",
          "In compound tenses the pronoun goes before the auxiliary, and with \"avoir\" the participle agrees with a preceding direct object: \"la lettre\" → \"Je l'ai envoyée\".",
        ],
        examples: [
          { es: "Tu es allée à l'agence ? Oui, j'y suis allée lundi.", en: "Did you go to the agency? Yes, I went there on Monday." },
          { es: "Ils ont des photos de la cuisine ? Oui, ils en ont mis trois.", en: "Have they got photos of the kitchen? Yes, they put up three." },
          { es: "Les clés ? Je les ai laissées chez la gardienne.", en: "The keys? I left them with the caretaker." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Change \"à la mairie\" to a pronoun.", source: "Je suis passé à la mairie.", answer: "J'y suis passé.", altAnswers: ["J'y suis passée."], explanation: "\"Y\" replaces à + a place and goes before the auxiliary." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "The photos? [I printed them].", sentence: "Les photos ? ___.", answer: "Je les ai imprimées", explanation: "\"Les\" before \"avoir\": the participle agrees with it, feminine plural \"imprimées\"." },
        ],
      },
      {
        heading: "Two pronouns: the fixed order",
        body: [
          "Now replace both objects: \"Vous avez envoyé le dossier à l'agence ?\" → \"Vous le lui avez envoyé ?\". The order before the verb is fixed: me / te / se / nous / vous → le / la / les → lui / leur → y → en.",
        ],
        examples: [
          { es: "Vous le lui avez envoyé ?", en: "Did you send it to them (the agency)?" },
          { es: "Vous me l'avez envoyé ? Je ne l'ai pas reçu.", en: "Did you send it to me? I haven't received it." },
          { es: "Elle ne nous en a pas parlé.", en: "She didn't tell us about it." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "« Tu as montré l'appartement à tes parents ? » — Yes, I showed it to them.", options: ["Oui, je le leur ai montré.", "Oui, je leur l'ai montré.", "Oui, je le leurs ai montré.", "Oui, je l'ai leur montré."], correctIndex: 0, explanation: "\"Le\" before \"leur\", both before the auxiliary; \"leur\" as a pronoun never takes an s." },
          { type: "translate", direction: "en-es", prompt: "Change \"la lettre\" and \"au propriétaire\" to pronouns.", source: "J'ai envoyé la lettre au propriétaire.", answer: "Je la lui ai envoyée.", explanation: "\"La\" before \"lui\"; \"envoyée\" agrees with \"la lettre\" placed before." },
        ],
      },
      {
        heading: "Longer chains",
        body: [
          "More chains: \"J'ai donné les clés aux nouveaux locataires\" → \"Je leur ai donné les clés\" → \"Je les leur ai données\" (agreement with \"les\" = les clés, feminine plural). \"Le propriétaire a parlé des travaux à Karim\" → \"Il lui en a parlé\". \"Vous m'avez envoyé le bail ?\" → \"Vous me l'avez envoyé ?\".",
        ],
        examples: [
          { es: "Je les leur ai données hier soir.", en: "I gave them (the keys) to them last night." },
          { es: "Le propriétaire lui en a parlé.", en: "The landlord told him about it." },
          { es: "L'agence nous les a montrées sur le site.", en: "The agency showed them (the photos) to us on the website." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Change \"des problèmes\" and \"à l'agence\" to pronouns.", source: "Nous avons parlé des problèmes à l'agence.", answer: "Nous lui en avons parlé.", altAnswers: ["Nous leur en avons parlé."], explanation: "\"À l'agence\" → \"lui\", \"des problèmes\" → \"en\"; the order is \"lui en\"." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Elle nous a les montrées.", answer: "Elle nous les a montrées.", explanation: "Both pronouns go before the auxiliary: \"nous les a\"." },
        ],
      },
      {
        heading: "Imperatives and infinitives",
        body: [
          "The chain continues in the imperative. Affirmative: verb + direct + indirect, with hyphens: \"Envoyez le dossier à l'agence\" → \"Envoyez-le-lui\". \"Donne-moi les clés\" → \"Donne-les-moi\". With \"en\": \"Donnez-m'en\" (\"moi\" becomes \"m'\" before \"en\"). Negative: back to the normal order before the verb: \"Ne le lui envoyez pas\".",
          "With an infinitive after \"devoir\", \"pouvoir\", \"aller\", \"vouloir\", the pronouns go before the infinitive: \"Je vais le lui envoyer\", \"Vous pouvez me les montrer ?\".",
        ],
        examples: [
          { es: "Envoyez-le-lui aujourd'hui.", en: "Send it to them today." },
          { es: "Ne le lui envoyez pas sans la signature.", en: "Don't send it to them without the signature." },
          { es: "Les clés ? Donne-les-moi, je descends.", en: "The keys? Give them to me, I'm going down." },
          { es: "Je vais le lui envoyer ce soir.", en: "I'm going to send it to him tonight." },
          { es: "Vous pouvez me les montrer, les chambres ?", en: "Can you show them to me, the bedrooms?" },
          { es: "Des photos ? Envoyez-m'en quelques-unes.", en: "Photos? Send me a few." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Change \"les documents\" and \"à Madame Roux\" to pronouns.", source: "Apportez les documents à Madame Roux.", answer: "Apportez-les-lui.", explanation: "Affirmative imperative: verb + direct + indirect, joined with hyphens." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "The keys? You can [give them to me] tomorrow.", sentence: "Les clés ? Vous pouvez ___ demain.", answer: "me les donner", altAnswers: ["me les rendre"], explanation: "With \"pouvoir\" + infinitive, the pronouns go before the infinitive: \"me les donner\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Have you visited the flat? Yes, I visited it on Saturday.", answer: "Vous avez visité l'appartement ? Oui, je l'ai visité samedi.", altAnswers: ["Tu as visité l'appartement ? Oui, je l'ai visité samedi.", "Est-ce que vous avez visité l'appartement ? Oui, je l'ai visité samedi."], explanation: "\"L'\" for \"l'appartement\" before \"ai\"." },
      { type: "translate", direction: "en-es", prompt: "Make it negative.", source: "Je lui en ai parlé.", answer: "Je ne lui en ai pas parlé.", explanation: "\"Ne\" goes before the pronoun block, \"pas\" after the auxiliary." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "Did they give you the receipts? Yes, they [gave them to me].", sentence: "Ils t'ont donné les reçus ? Oui, ils ___.", answer: "me les ont donnés", explanation: "\"Me\" before \"les\", both before \"ont\"; \"donnés\" agrees with \"les reçus\"." },
      { type: "translate", direction: "en-es", prompt: "Make it negative.", source: "Montrez-les-leur.", answer: "Ne les leur montrez pas.", explanation: "Negative imperative: back to the normal order before the verb." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Ce dossier ? Envoyez-lui-le demain.", answer: "Ce dossier ? Envoyez-le-lui demain.", explanation: "Affirmative imperative: direct object first, then indirect." },
      { type: "multiple-choice", question: "« Vous avez mis des photos sur le site ? » Which answer replaces des photos?", options: ["Oui, j'en ai mis cinq.", "Oui, je les ai mis cinq.", "Oui, j'y ai mis cinq.", "Oui, j'en ai mises cinq."], correctIndex: 0, explanation: "\"Des\" + noun becomes \"en\", the number stays at the end, and \"en\" never makes the participle agree." },
      { type: "word-order", prompt: "Put the words in order to say: I'm going to send it to them tomorrow.", words: ["Je", "vais", "le", "leur", "envoyer", "demain."], translation: "I'm going to send it to them tomorrow.", explanation: "With \"aller\" + infinitive, \"le leur\" goes before the infinitive." },
      { type: "listen-choose", audio: "Ne me les rendez pas avant lundi.", question: "What does it mean?", options: ["Don't give them back to me before Monday.", "Give them back to me before Monday.", "Don't give it back to him before Monday.", "I won't give them back before Monday."], correctIndex: 0, explanation: "Negative imperative: \"me les\" before the verb; \"rendre\" = to give back." },
      { type: "speak", text: "Je vais les lui donner demain.", prompt: "Tell a friend you'll give the keys to the landlord tomorrow, using pronouns.", explanation: "\"Les\" (the keys) before \"lui\" (the landlord), both before the infinitive." },
      { type: "dictation", audio: "Le propriétaire ne nous en a jamais parlé.", explanation: "\"Nous en\" before the auxiliary, inside \"ne... jamais\"." },
    ],
  },
];
