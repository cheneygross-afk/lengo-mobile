// Synced from cheneygross-afk/lengo:src/lib/lessons/fr-b1-u25.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// French B1, Unit 25: Possessive & Demonstrative Pronouns.

export const FR_B1_U25_WRITING: WriteExercise = {
  type: "write",
  prompt: "You've just come back from a house swap with a French family. Write an email (80-150 words) to a French friend comparing their home and yours: the rooms, the garden, the cars or bikes, the neighbours. Say which things you preferred and why, and mention one thing you lost or mixed up during the stay.",
  minWords: 80,
  maxWords: 150,
  rubric: [
    "Uses at least three possessive pronouns that agree with the thing owned (\"la nôtre\", \"le leur\", \"les leurs\", \"la mienne\")",
    "Uses demonstrative pronouns with -ci / -là, de or a relative (\"celle de\", \"celui qui\", \"ceux que\")",
    "Shows ownership with \"être à\" + a stressed pronoun at least once (\"il était à eux\")",
    "Uses \"ça\" or \"c'est\" for an idea, and the passé composé and imparfait to tell the stay",
  ],
  modelAnswer: "Salut Camille,\n\nNous sommes rentrés hier de notre échange de maisons avec les Moreau. Leur maison était beaucoup plus grande que la nôtre, et leur jardin aussi ! Le nôtre est minuscule à côté du leur. En revanche, notre cuisine est plus moderne que la leur. Les enfants ont adoré les vélos des Moreau : ceux de leurs fils étaient tout neufs. Ma fille a trouvé une chambre qu'elle a préférée à la sienne : celle qui donnait sur le lac. Le seul problème, c'est que j'ai pris le chargeur de leur ordinateur en partant. Je croyais que c'était le mien, mais il était à eux ! Je vais le leur renvoyer demain. Ça m'a fait rire, mais c'était un peu gênant.\n\nBises,\nJulie",
  explanation: "Possessive pronouns agree with the thing owned (\"la nôtre\" for la maison, \"du leur\" for le jardin, \"la sienne\" for la chambre). Demonstratives are never alone: \"ceux de leurs fils\", \"celle qui donnait sur le lac\". \"Il était à eux\" shows ownership with être à, and \"ça\" refers to the whole situation.",
};

export const FR_B1_U25: Lesson[] = [
  {
    slug: "b1-possessive-pronouns",
    level: "FR-B1",
    number: 1,
    title: "Possessive Pronouns",
    summary: "Say mine, yours, his, hers, ours and theirs with le mien, la tienne, les nôtres, le leur, and make them agree with the thing owned.",
    duration: "15 min",
    sections: [
      {
        heading: "Le mien, la mienne: agree with the thing",
        body: [
          "A possessive pronoun replaces a possessive adjective and its noun: \"mon vélo\" becomes \"le mien\", \"ta valise\" becomes \"la tienne\". English has one word, mine; French has four, because the pronoun takes the gender and number of the thing owned: \"le mien\", \"la mienne\", \"les miens\", \"les miennes\".",
        ],
        examples: [
          { es: "Ce n'est pas mon parapluie, le mien est bleu.", en: "That's not my umbrella, mine is blue." },
          { es: "Tes enfants ont quel âge ? Les miens ont six et neuf ans.", en: "How old are your kids? Mine are six and nine." },
          { es: "Ces lunettes ne sont pas les miennes.", en: "These glasses aren't mine." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Someone picks up a scarf (une écharpe) that belongs to you. What do you say? It's mine!", options: ["C'est la mienne !", "C'est le mien !", "C'est mienne !", "C'est les miennes !"], correctIndex: 0, explanation: "\"Écharpe\" is feminine singular, so mine is \"la mienne\". The article is part of the pronoun, and \"les miennes\" would be plural." },
          { type: "listen-choose", audio: "Ce sont les miennes.", question: "What does it mean?", options: ["They're mine.", "They're yours.", "It's mine.", "They're hers."], correctIndex: 0, explanation: "\"Ce sont\" is plural (they are) and \"les miennes\" is mine, for feminine plural things such as des clés or des lunettes." },
        ],
      },
      {
        heading: "Le tien, le sien, and the sound of -ienne",
        body: [
          "The same pattern gives \"le tien\" (yours, to someone you call tu) and \"le sien\" (his or hers). The article is part of the pronoun and is never dropped: \"c'est le mien\" ('it's mine'), never *c'est mien.",
          "Listen to the ending: \"le mien\" ends in a nasal vowel, like \"bien\", but in the feminine \"la mienne\" the vowel opens and the n is pronounced, like \"italienne\". The same goes for \"tien / tienne\" and \"sien / sienne\".",
        ],
        examples: [
          { es: "J'ai oublié ma clé. Tu peux me prêter la tienne ?", en: "I've forgotten my key. Can you lend me yours?" },
          { es: "Mes chaussures sont sales, mais les tiennes sont propres.", en: "My shoes are dirty, but yours are clean." },
          { es: "Karim a vendu sa voiture, mais Léa garde la sienne.", en: "Karim has sold his car, but Lea is keeping hers." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "My suitcase is black. And yours? (to a friend)", answer: "Ma valise est noire. Et la tienne ?", explanation: "\"Valise\" is feminine, so yours is \"la tienne\"; to a friend you use the tu form." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "I've forgotten my keys. Can you lend me [yours]? (to a friend)", sentence: "J'ai oublié mes clés. Tu peux me prêter ___ ?", answer: "les tiennes", explanation: "\"Les clés\" is feminine plural, so \"les tiennes\". The pronoun copies the noun it replaces, not the speaker." },
        ],
      },
      {
        heading: "His or hers? Look at the thing, not the owner",
        body: [
          "English picks his or hers by looking at the owner. French looks only at the thing owned: \"le sien\" if it's masculine, \"la sienne\" if it's feminine, whoever the owner is. Paul's car is \"la sienne\" (une voiture), Marie's phone is \"le sien\" (un téléphone).",
        ],
        examples: [
          { es: "Paul a pris sa voiture, et Marie a pris la sienne.", en: "Paul took his car, and Marie took hers." },
          { es: "Marie cherche son téléphone. C'est le sien, sur la table ?", en: "Marie's looking for her phone. Is that hers on the table?" },
          { es: "Mon frère a ses idées, et ma sœur a les siennes.", en: "My brother has his ideas, and my sister has hers." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Is it hers? (Marie's phone)", answer: "C'est le sien ?", altAnswers: ["Est-ce le sien ?", "Est-ce que c'est le sien ?"], explanation: "\"Téléphone\" is masculine, so hers is \"le sien\": the owner being a woman changes nothing." },
          { type: "multiple-choice", question: "How do you say: Paul took his bike, and Marie took hers.", options: ["Paul a pris son vélo, et Marie a pris le sien.", "Paul a pris son vélo, et Marie a pris la sienne.", "Paul a pris son vélo, et Marie a pris sien.", "Paul a pris son vélo, et Marie a pris le leur."], correctIndex: 0, explanation: "\"Vélo\" is masculine, so \"le sien\", even though Marie is a woman. The article is never dropped." },
        ],
      },
      {
        heading: "Same logic as son and sa",
        body: [
          "It's the same logic as \"son\" and \"sa\", which you already use: \"sa voiture\" is his car or her car. The classic mistake is to say \"la sienne\" for anything that belongs to a woman. Ask yourself: what's the noun?",
          "So \"le sien\" can mean his, hers or its. Usually the context decides; when it doesn't, French adds \"à lui\" / \"à elle\" or says \"celui de Marie\", which you'll practise later in this unit.",
        ],
        examples: [
          { es: "J'ai mon billet, mais Hugo ne trouve pas le sien.", en: "I've got my ticket, but Hugo can't find his." },
          { es: "Moi, j'ai mes problèmes, et elle a les siens.", en: "I've got my problems, and she's got hers." },
          { es: "Elle a pris mon parapluie et j'ai pris le sien.", en: "She took my umbrella and I took hers." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Hugo has his ideas and his sister has hers.", answer: "Hugo a ses idées et sa sœur a les siennes.", explanation: "\"Les idées\" is feminine plural, so hers is \"les siennes\"." },
        ],
      },
      {
        heading: "Le nôtre, le vôtre, le leur: several owners",
        body: [
          "With several owners there are only two forms each, because masculine and feminine look the same: \"le nôtre / la nôtre / les nôtres\", \"le vôtre / la vôtre / les vôtres\", \"le leur / la leur / les leurs\".",
          "\"Le vôtre\" is also the polite yours for one person: \"C'est le vôtre, madame ?\". And \"leur\" takes an -s only in the plural: \"le leur\", \"la leur\", but \"les leurs\".",
        ],
        examples: [
          { es: "Votre jardin est magnifique ! Le nôtre est tout petit.", en: "Your garden's gorgeous! Ours is tiny." },
          { es: "Excusez-moi, madame, ce manteau, c'est le vôtre ?", en: "Excuse me, madam, is this coat yours?" },
          { es: "Nos voisins ont refait leur cuisine, et nous voulons refaire la nôtre.", en: "Our neighbours have redone their kitchen, and we want to redo ours." },
          { es: "Nos enfants jouent avec les leurs tous les week-ends.", en: "Our kids play with theirs every weekend." },
          { es: "Ce n'est pas notre problème, c'est le leur.", en: "It's not our problem, it's theirs." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "It's not my fault, it's theirs.", answer: "Ce n'est pas ma faute, c'est la leur.", explanation: "\"Faute\" is feminine singular, so theirs is \"la leur\", with no -s: \"leur\" only takes -s in the plural." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "Your garden is really pretty! [Ours] is tiny. (to a friend)", sentence: "Ton jardin est très joli ! ___ est tout petit.", answer: "Le nôtre", explanation: "\"Jardin\" is masculine: \"le nôtre\", with a circumflex and a closed o." },
        ],
      },
      {
        heading: "Nôtre, vôtre: the circumflex you can hear",
        body: [
          "The circumflex shows a sound difference. \"Notre\" and \"votre\" (adjectives, before a noun) have an open o, as in \"pomme\". \"Le nôtre\" and \"le vôtre\" (pronouns, standing alone) have a closed o, as in \"eau\", and always carry the ^.",
        ],
        examples: [
          { es: "Vos idées sont meilleures que les nôtres.", en: "Your ideas are better than ours." },
          { es: "Votre fils et le nôtre sont dans la même classe.", en: "Your son and ours are in the same class." },
          { es: "Notre chat adore le vôtre.", en: "Our cat loves yours." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "C'est le nôtre, pas le vôtre.", question: "What did you hear?", options: ["C'est le nôtre, pas le vôtre.", "C'est notre, pas votre.", "C'est le leur, pas le vôtre.", "C'est le nôtre, pas le tien."], correctIndex: 0, explanation: "The pronouns need their article and have a closed o: \"le nôtre\", \"le vôtre\". *C'est notre is not French." },
          { type: "speak", text: "Ce n'est pas le nôtre, c'est le vôtre.", tip: "Close the o in nôtre and vôtre, as in eau.", explanation: "The pronouns \"le nôtre\" and \"le vôtre\" have a closed o; the adjectives \"notre\" and \"votre\" have an open one." },
        ],
      },
      {
        heading: "Au mien, du sien: contractions",
        body: [
          "The article inside the pronoun contracts with \"à\" and \"de\" just like an ordinary article: à + le mien = \"au mien\", à + les leurs = \"aux leurs\", de + le sien = \"du sien\", de + les nôtres = \"des nôtres\". The feminine \"la\" doesn't change: \"à la tienne\", \"de la sienne\".",
          "You need these after verbs and phrases built with à or de: \"penser à\", \"ressembler à\", \"préférer... à\", \"parler de\", \"se servir de\", \"avoir besoin de\".",
        ],
        examples: [
          { es: "Je pense souvent à mes grands-parents. Et toi, tu penses aux tiens ?", en: "I often think about my grandparents. Do you think about yours?" },
          { es: "Mon ordinateur ne marche plus. Je peux me servir du tien ?", en: "My computer's stopped working. Can I use yours?" },
          { es: "Ils parlent de leurs vacances ; nous parlons des nôtres.", en: "They're talking about their holiday; we're talking about ours." },
          { es: "Ma fille ressemble beaucoup à la tienne.", en: "My daughter looks a lot like yours." },
          { es: "Je préfère ton idée à la mienne.", en: "I prefer your idea to mine." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "My bike has a flat tyre. Can I use [yours]? (to a friend)", sentence: "Mon vélo est crevé. Je peux me servir ___ ?", answer: "du tien", explanation: "\"Se servir de\" + \"le tien\" contracts to \"du tien\", like de + le = du." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I prefer your plan to mine. (to a friend)", answer: "Je préfère ton projet au mien.", altAnswers: ["Je préfère ton plan au mien."], explanation: "\"Préférer A à B\"; \"projet\" is masculine, so à + le mien contracts to \"au mien\"." },
        ],
      },
      {
        heading: "À la tienne !",
        body: [
          "A set phrase to know: \"À la tienne !\" or \"À la vôtre !\" is the reply to \"Santé !\" when you raise a glass. The hidden noun is \"la santé\", so it's feminine.",
        ],
        examples: [
          { es: "Santé ! — À la tienne !", en: "Cheers! — Cheers! (to a friend)" },
          { es: "Santé, madame ! — Merci, à la vôtre !", en: "Cheers, madam! — Thank you, cheers!" },
          { es: "À nos vacances ! — À la nôtre !", en: "To our holiday! — To us!" },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Your manager raises her glass and says « Santé ! ». What do you reply?", options: ["À la vôtre !", "À la tienne !", "Au vôtre !", "À votre !"], correctIndex: 0, explanation: "The hidden noun is \"la santé\" (feminine), so \"à la\", with no contraction; \"vôtre\" because you say vous to your manager." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Ce sac n'est pas mien.", answer: "Ce sac n'est pas le mien.", altAnswers: ["Ce sac, ce n'est pas le mien."], explanation: "The article is part of the pronoun and is never dropped: \"le mien\"." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Paul a oublié son écharpe, alors Marie lui a prêté le sien.", answer: "Paul a oublié son écharpe, alors Marie lui a prêté la sienne.", explanation: "The pronoun agrees with the thing, not the owner: \"une écharpe\" is feminine, so \"la sienne\"." },
      { type: "translate", direction: "en-es", prompt: "Replace « mon vélo » with a possessive pronoun.", source: "Je préfère ton vélo à mon vélo.", answer: "Je préfère ton vélo au mien.", explanation: "\"Mon vélo\" → \"le mien\", and à + le mien contracts to \"au mien\"." },
      { type: "translate", direction: "en-es", prompt: "Change « la mienne » to ours.", source: "Votre maison est plus grande que la mienne.", answer: "Votre maison est plus grande que la nôtre.", explanation: "Ours for a feminine singular thing: \"la nôtre\", with a circumflex." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Lucas has his keys, but Julie has lost hers.", answer: "Lucas a ses clés, mais Julie a perdu les siennes.", explanation: "Hers agrees with \"les clés\" (feminine plural): \"les siennes\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Your kids are older than ours. (to friends)", answer: "Vos enfants sont plus âgés que les nôtres.", altAnswers: ["Vos enfants sont plus grands que les nôtres."], explanation: "\"Les nôtres\" (plural, closed o, circumflex) after \"plus... que\"." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "We talk about our holidays and they talk about [theirs].", sentence: "Nous parlons de nos vacances et ils parlent ___.", answer: "des leurs", explanation: "\"Parler de\" + \"les leurs\" contracts to \"des leurs\"." },
      { type: "multiple-choice", question: "Your friend asks whose phone this is. It's Marie's. What do you say?", options: ["C'est le sien.", "C'est la sienne.", "C'est sien.", "C'est le leur."], correctIndex: 0, explanation: "\"Le téléphone\" is masculine, so \"le sien\", even for a woman's phone. \"Le leur\" would mean several owners." },
      { type: "word-order", prompt: "Put the words in order to say: Our flat is smaller than yours.", words: ["Notre", "appartement", "est", "plus", "petit", "que", "le vôtre."], translation: "Our flat is smaller than yours.", explanation: "\"Notre\" (adjective, no accent) before the noun; \"le vôtre\" (pronoun, circumflex) on its own." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Cheers! (to a friend who has just said Santé !)", answer: "À la tienne !", explanation: "\"À la tienne\" (to a friend) or \"à la vôtre\" (polite or plural); the hidden noun is \"la santé\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Excuse me, sir, is this umbrella yours?", answer: "Excusez-moi, monsieur, ce parapluie, c'est le vôtre ?", altAnswers: ["Excusez-moi, monsieur, ce parapluie est le vôtre ?", "Excusez-moi, monsieur, est-ce que ce parapluie est le vôtre ?", "Excusez-moi, monsieur, c'est votre parapluie ?", "Excusez-moi, monsieur, ce parapluie est à vous ?"], explanation: "Polite \"vous\" to a stranger: \"le vôtre\" agrees with \"le parapluie\"." },
      { type: "speak", text: "Mon train part à huit heures. Et le tien ?", prompt: "Say it in French: My train leaves at eight. And yours? (to a friend)", tip: "Le tien ends in a nasal vowel, like bien.", explanation: "\"Le tien\" agrees with \"le train\" (masculine), so the n is not pronounced." },
      { type: "dictation", audio: "Elle se sert du sien depuis hier.", explanation: "\"Se servir de\" + \"le sien\" = \"du sien\"." },
    ],
  },
  {
    slug: "b1-pattern-le-mien-la-mienne",
    level: "FR-B1",
    number: 2,
    title: "Pattern Practice: Le mien, La mienne, Les miens",
    summary: "Run one frame through every person, gender and number until the right possessive pronoun comes out automatically.",
    duration: "12 min",
    sections: [
      {
        heading: "The frame: Ma valise est rouge, et la tienne ?",
        body: [
          "One short exchange, repeated with every noun: \"Ma valise est rouge, et la tienne ? — La mienne est noire.\" The question picks up the gender of the noun, and the answer repeats it. Change the noun and both pronouns change with it.",
          "Work in two steps: first find the gender and number of the noun (\"un sac\", \"une valise\", \"des gants\", \"des bottes\"), then choose the owner (mien, tien, sien...). English only does the second step, which is why the first one is easy to forget.",
        ],
        examples: [
          { es: "Mon sac est lourd, et le tien ? — Le mien est léger.", en: "My bag is heavy, what about yours? — Mine's light." },
          { es: "Ma chambre est au premier, et la tienne ? — La mienne est au deuxième.", en: "My room's on the first floor, what about yours? — Mine's on the second." },
          { es: "Mes gants sont en laine, et les tiens ? — Les miens sont en cuir.", en: "My gloves are wool, what about yours? — Mine are leather." },
          { es: "Mes bottes sont trop petites, et les tiennes ? — Les miennes sont parfaites.", en: "My boots are too small, what about yours? — Mine are perfect." },
          { es: "Ton train part à quelle heure ? Le mien part à huit heures.", en: "What time does your train leave? Mine leaves at eight." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "A friend says: Ma veste est trop grande, et la tienne ? You answer: Mine's perfect.", options: ["La mienne est parfaite.", "Le mien est parfait.", "La mien est parfaite.", "Les miennes sont parfaites."], correctIndex: 0, explanation: "\"Veste\" is feminine singular, so the answer keeps the gender of the question: \"la tienne\" → \"la mienne\"." },
          { type: "translate", direction: "en-es", prompt: "Change « sac » to « valise » and follow the ripple.", source: "Mon sac est lourd, et le tien ?", answer: "Ma valise est lourde, et la tienne ?", explanation: "A feminine noun changes every word that agrees with it: \"ma\", \"lourde\" and \"la tienne\"." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "Your room is on the first floor; [mine] is on the second, said Nina.", sentence: "Ta chambre est au premier ; ___ est au deuxième, a dit Nina.", answer: "la mienne", explanation: "\"Chambre\" is feminine: \"la mienne\". Nina's own gender plays no part." },
        ],
      },
      {
        heading: "Third persons and plural owners",
        body: [
          "With a third person the frame becomes a comparison: \"Mon vélo est neuf, mais le sien est vieux\" means his or hers, depending on who we're talking about. The gender of \"vélo\" decides \"le sien\"; the owner doesn't.",
          "With several owners: \"notre maison / la nôtre\", \"vos billets / les vôtres\", \"leur voiture / la leur\", \"leurs enfants / les leurs\". Don't add an -s to \"leur\" when the thing is singular, even if the owners are many: \"leur voiture, la leur\".",
        ],
        examples: [
          { es: "Mon vélo est neuf, mais le sien est très vieux.", en: "My bike is new, but his is really old." },
          { es: "Notre maison est petite, et la leur est immense.", en: "Our house is small, and theirs is huge." },
          { es: "Nos billets sont en ligne. Et les vôtres ?", en: "Our tickets are online. What about yours?" },
          { es: "Leurs enfants vont à l'école à pied, les nôtres prennent le bus.", en: "Their kids walk to school; ours take the bus." },
          { es: "Ma sœur a déjà fini ses devoirs, mais mon frère n'a pas commencé les siens.", en: "My sister's already finished her homework, but my brother hasn't started his." },
          { es: "Votre chien est adorable. Le nôtre aboie tout le temps.", en: "Your dog is adorable. Ours barks all the time." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Our car is old, and theirs is new.", answer: "Notre voiture est vieille, et la leur est neuve.", explanation: "\"Voiture\" is feminine singular, so \"la leur\" with no -s, even with several owners." },
          { type: "listen-choose", audio: "Notre chien aboie, le leur est calme.", question: "What does it mean?", options: ["Our dog barks; theirs is calm.", "Their dog barks; ours is calm.", "Our dog barks; yours is calm.", "Our dogs bark; theirs are calm."], correctIndex: 0, explanation: "\"Notre chien\" is our dog; \"le leur\" (singular) is theirs." },
        ],
      },
      {
        heading: "Set phrases with possessive pronouns",
        body: [
          "A few fixed expressions use these pronouns without a noun in sight. \"À la tienne !\" / \"À la vôtre !\" answer \"Santé !\" when you clink glasses.",
          "\"Les miens\", \"les tiens\", \"les siens\" can mean my, your, his or her family: \"Il passe Noël avec les siens\" ('with his family'). \"Y mettre du sien\" means to make an effort, to do your bit, and \"faire des siennes\" means to play up, to misbehave (of a child, a machine or the weather).",
        ],
        examples: [
          { es: "Santé ! — À la vôtre !", en: "Cheers! — Cheers!" },
          { es: "Pour Noël, il rentre toujours chez les siens.", en: "At Christmas he always goes home to his family." },
          { es: "Si chacun y met du sien, on finira avant midi.", en: "If everyone does their bit, we'll finish before noon." },
          { es: "Mon imprimante fait encore des siennes.", en: "My printer is playing up again." },
          { es: "Elle pense souvent aux siens, restés au Maroc.", en: "She often thinks of her family, who stayed in Morocco." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "A friend clinks glasses with you: « Santé ! ». What do you answer?", options: ["À la tienne !", "Au tien !", "À ta !", "À la sienne !"], correctIndex: 0, explanation: "The hidden noun is \"la santé\" (feminine), so \"à la tienne\" to a friend; \"à la sienne\" would be to his or her health." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The weather is playing up again.", answer: "Le temps fait encore des siennes.", altAnswers: ["La météo fait encore des siennes."], explanation: "\"Faire des siennes\" is fixed: always \"des siennes\", whatever the subject." },
        ],
      },
    ],
    exercises: [
      { type: "multiple-choice", question: "Our neighbours have a garden too. Theirs is bigger than ours. Which is right?", options: ["Le leur est plus grand que le nôtre.", "Le leurs est plus grand que le nôtre.", "La leur est plus grande que la nôtre.", "Le leur est plus grand que notre."], correctIndex: 0, explanation: "\"Jardin\" is masculine singular: \"le leur\" (no -s) and \"le nôtre\" (with its article)." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "My scarf is grey. What about yours? (to a friend)", answer: "Mon écharpe est grise. Et la tienne ?", explanation: "\"Écharpe\" is feminine (\"mon\" only because of the vowel), so \"grise\" and \"la tienne\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "My flight leaves at ten. And yours? (to a colleague)", answer: "Mon vol part à dix heures. Et le vôtre ?", altAnswers: ["Mon vol part à 10 heures. Et le vôtre ?", "Mon vol part à 10 h. Et le vôtre ?"], explanation: "\"Le vol\" is masculine; a colleague you call vous gets \"le vôtre\"." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "Their parents live in Lyon; [ours] live in Nice.", sentence: "Leurs parents habitent à Lyon ; ___ habitent à Nice.", answer: "les nôtres", explanation: "Plural \"parents\": \"les nôtres\", with a circumflex." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Ma voiture est rouge, et le tien ?", answer: "Ma voiture est rouge, et la tienne ?", explanation: "The pronoun copies the noun from the question: \"voiture\" is feminine, so \"la tienne\"." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Paul cherche sa montre. C'est le sien, sur la table ?", answer: "Paul cherche sa montre. C'est la sienne, sur la table ?", explanation: "\"Montre\" is feminine, so \"la sienne\", even though Paul is a man." },
      { type: "translate", direction: "en-es", prompt: "Make it plural: bikes.", source: "Notre vélo est neuf, mais le leur est vieux.", answer: "Nos vélos sont neufs, mais les leurs sont vieux.", explanation: "Plural things: \"nos\", \"les leurs\" (now with -s), and the verb and adjectives follow." },
      { type: "word-order", prompt: "Put the words in order to say: Your cat is shy; ours is very curious.", words: ["Votre", "chat", "est", "timide ;", "le nôtre", "est", "très", "curieux."], translation: "Your cat is shy; ours is very curious.", explanation: "Adjective \"votre\" before the noun, pronoun \"le nôtre\" on its own." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "She spends the holidays with her family.", answer: "Elle passe les vacances avec les siens.", altAnswers: ["Elle passe les vacances avec sa famille."], explanation: "\"Les siens\" can mean his or her family; \"sa famille\" is also fine." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "You have to make an effort too! (to a friend)", answer: "Il faut que tu y mettes du tien aussi !", altAnswers: ["Tu dois y mettre du tien aussi !", "Il faut y mettre du tien aussi !", "Il faut que tu y mettes du tien, toi aussi !"], explanation: "\"Y mettre du sien\" changes with the person: \"du tien\" for tu." },
      { type: "matching", instructions: "Match each French phrase to its meaning.", pairs: [{ left: "la tienne", right: "yours (a feminine thing, to a friend)" }, { left: "les leurs", right: "theirs (plural things)" }, { left: "le sien", right: "his or hers (a masculine thing)" }, { left: "les nôtres", right: "ours (plural things)" }, { left: "la vôtre", right: "yours (a feminine thing, polite)" }], explanation: "The pronoun shows who owns (tien, leur, sien...) and the gender and number of the thing (le, la, les)." },
      { type: "dictation", audio: "Vos valises sont plus lourdes que les nôtres.", explanation: "\"Vos\" (adjective) and \"les nôtres\" (pronoun, feminine plural, circumflex)." },
      { type: "speak", text: "Mes lunettes sont cassées, et les tiennes ?", prompt: "Say it in French: My glasses are broken, what about yours? (to a friend)", tip: "Les tiennes: pronounce the n.", explanation: "\"Les lunettes\" is feminine plural, so \"les tiennes\"." },
    ],
  },
  {
    slug: "b1-fill-the-story-house-swap",
    level: "FR-B1",
    number: 3,
    title: "Fill the Story: The House Swap",
    summary: "Two families swap homes for the summer; fill in the possessive pronouns as they compare kitchens, cars, kids and gardens.",
    duration: "14 min",
    sections: [
      {
        heading: "Before the swap: the emails",
        body: [
          "Sophie Moreau lives in Lyon with her husband and two children. For the summer, they've arranged a house swap with the Garnier family from La Rochelle. Before leaving, the two mothers exchange emails, written in polite \"vous\" because they've never met.",
          "Every comparison needs a possessive pronoun: \"votre maison\" vs \"la nôtre\", \"nos enfants\" vs \"les vôtres\". Watch the circumflex: adjective \"notre\" before a noun, pronoun \"la nôtre\" on its own.",
        ],
        examples: [
          { es: "Votre maison a l'air plus grande que la nôtre !", en: "Your house looks bigger than ours!" },
          { es: "Nos enfants ont neuf et douze ans. Et les vôtres ?", en: "Our kids are nine and twelve. What about yours?" },
          { es: "Les nôtres ont dix et quatorze ans.", en: "Ours are ten and fourteen." },
          { es: "Vous préférez prendre notre voiture ou garder la vôtre ?", en: "Would you rather take our car or keep yours?" },
          { es: "Notre chat reste à la maison. J'espère que ça ne vous dérange pas.", en: "Our cat is staying at home. I hope you don't mind." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "Our flat has three bedrooms. How many does [yours] have?", sentence: "Notre appartement a trois chambres. Combien de chambres a ___ ?", answer: "le vôtre", explanation: "Polite \"vous\" between strangers; \"appartement\" is masculine singular, so \"le vôtre\", with a circumflex." },
          { type: "multiple-choice", question: "Sophie writes: Our neighbours are very nice. I hope yours are too. Which is right?", options: ["J'espère que les vôtres aussi.", "J'espère que vos aussi.", "J'espère que le vôtre aussi.", "J'espère que les leurs aussi."], correctIndex: 0, explanation: "\"Voisins\" is plural and she's talking to Mme Garnier (vous): \"les vôtres\". \"Vos\" is an adjective and can't stand alone." },
        ],
      },
      {
        heading: "Arrival in La Rochelle",
        body: [
          "The Moreaus arrive and explore. Now the other family is absent, so Sophie talks about their things: \"leur cuisine\", \"la leur\", \"leurs vélos\", \"les leurs\". Remember: no -s on \"leur\" for one thing, even with several owners.",
          "The children compare bedrooms. Léo, aged twelve, says \"La chambre de leur fils est plus grande que la mienne\", and his sister answers \"Et la sienne a un balcon !\" (his room, meaning the Garniers' son's: \"chambre\" is feminine whoever sleeps in it).",
        ],
        examples: [
          { es: "Leur cuisine est deux fois plus grande que la nôtre.", en: "Their kitchen is twice as big as ours." },
          { es: "Ils nous ont laissé leurs vélos, mais les leurs sont trop grands pour les enfants.", en: "They've left us their bikes, but theirs are too big for the kids." },
          { es: "La chambre de leur fils est plus grande que la mienne !", en: "Their son's room is bigger than mine!" },
          { es: "Et la sienne a un balcon avec vue sur la mer.", en: "And his has a balcony with a sea view." },
          { es: "Notre jardin est joli, mais le leur est vraiment magnifique.", en: "Our garden is nice, but theirs is really stunning." },
          { es: "Leur voiture est électrique ; la nôtre roule encore au diesel.", en: "Their car is electric; ours still runs on diesel." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Their fridge is bigger than ours. Which is right?", options: ["Leur frigo est plus grand que le nôtre.", "Leur frigo est plus grand que la nôtre.", "Leurs frigo est plus grand que le nôtre.", "Leur frigo est plus grand que notre."], correctIndex: 0, explanation: "\"Frigo\" is masculine singular: \"leur\" with no -s, and \"le nôtre\" with its article." },
          { type: "translate", direction: "en-es", prompt: "Make it plural: bedrooms.", source: "Leur chambre est plus grande que la nôtre.", answer: "Leurs chambres sont plus grandes que les nôtres.", explanation: "Plural things: \"leurs\", \"sont\", \"grandes\" and \"les nôtres\" all change together." },
          { type: "listen-choose", audio: "Leur voiture est électrique, la nôtre roule au diesel.", question: "What does it mean?", options: ["Their car is electric; ours runs on diesel.", "Our car is electric; theirs runs on diesel.", "Their car is electric; yours runs on diesel.", "Their cars are electric; ours run on diesel."], correctIndex: 0, explanation: "\"Leur voiture\" is their car; \"la nôtre\" is ours." },
        ],
      },
      {
        heading: "Going home: whose is whose?",
        body: [
          "At the end of August each family goes home. Sophie finds a jumper in the wardrobe: \"Ce pull n'est pas le nôtre, ce doit être le leur.\" And the Garniers have left a message: their daughter has taken a phone charger that wasn't hers.",
          "This is where \"le sien\" earns its keep: \"Leur fille a pris un chargeur qu'elle croyait être le sien\" (that she thought was hers). The pronoun follows \"chargeur\", masculine, not the girl.",
        ],
        examples: [
          { es: "Ce pull n'est pas le nôtre, ce doit être le leur.", en: "This jumper isn't ours; it must be theirs." },
          { es: "Leur fille a pris un chargeur qu'elle croyait être le sien.", en: "Their daughter took a charger she thought was hers." },
          { es: "Je le leur renverrai par la poste.", en: "I'll post it back to them." },
          { es: "En rentrant, on a retrouvé notre maison, et nos enfants ont retrouvé leurs chambres.", en: "When we got home, we found our house again, and the kids got their rooms back." },
          { es: "Finalement, je préfère notre petite cuisine à la leur.", en: "In the end, I prefer our little kitchen to theirs." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "These sunglasses aren't ours; they must be theirs.", answer: "Ces lunettes de soleil ne sont pas les nôtres, ça doit être les leurs.", altAnswers: ["Ces lunettes de soleil ne sont pas les nôtres, ce doivent être les leurs.", "Ces lunettes de soleil ne sont pas à nous, ça doit être les leurs."], explanation: "\"Lunettes\" is feminine plural: \"les nôtres\", \"les leurs\" (with -s, because the thing is plural)." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "Honestly, I prefer their beach to [ours].", sentence: "Franchement, je préfère leur plage ___.", answer: "à la nôtre", explanation: "\"Préférer A à B\": à + \"la nôtre\", no contraction in the feminine." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Your garden looks bigger than ours! (polite)", answer: "Votre jardin a l'air plus grand que le nôtre !", altAnswers: ["Votre jardin semble plus grand que le nôtre !"], explanation: "\"Jardin\" is masculine: \"grand\" and \"le nôtre\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "They left us their keys, and we left them ours.", answer: "Ils nous ont laissé leurs clés, et nous leur avons laissé les nôtres.", altAnswers: ["Ils nous ont laissé leurs clés, et on leur a laissé les nôtres."], explanation: "\"Leurs clés\" (adjective, plural), \"leur\" (to them, never with -s) and \"les nôtres\" (pronoun)." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Leur fils a pris un livre qu'il croyait être la sienne.", answer: "Leur fils a pris un livre qu'il croyait être le sien.", explanation: "The pronoun follows the thing: \"livre\" is masculine, so \"le sien\"." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Nos enfants ont dix ans. Et vos ?", answer: "Nos enfants ont dix ans. Et les vôtres ?", explanation: "\"Vos\" is an adjective and needs a noun; standing alone, yours is the pronoun \"les vôtres\"." },
      { type: "multiple-choice", question: "Sophie's son finds a cap that belongs to the Garniers' son. How does he say: It's his, not mine?", options: ["C'est la sienne, pas la mienne.", "C'est le sien, pas le mien.", "C'est la leur, pas la mienne.", "C'est sienne, pas mienne."], correctIndex: 0, explanation: "\"Une casquette\" is feminine, so \"la sienne\" and \"la mienne\"; the owner being a boy changes nothing." },
      { type: "word-order", prompt: "Put the words in order to say: Our garden is smaller than theirs.", words: ["Notre", "jardin", "est", "plus petit", "que", "le leur."], translation: "Our garden is smaller than theirs.", explanation: "\"Le leur\" for a masculine singular thing, no -s." },
      { type: "translate", direction: "en-es", prompt: "Change « nous » to « ils » and follow the ripple.", source: "Nous avons échangé notre maison contre la leur.", answer: "Ils ont échangé leur maison contre la nôtre.", explanation: "Swap the owners: \"notre\" becomes \"leur\", and theirs (\"la leur\") becomes ours (\"la nôtre\")." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Their dog sleeps in the kitchen; ours sleeps in the garden.", answer: "Leur chien dort dans la cuisine ; le nôtre dort dans le jardin.", explanation: "\"Le nôtre\" for the masculine \"chien\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Our daughter prefers their son's room to hers.", answer: "Notre fille préfère la chambre de leur fils à la sienne.", explanation: "\"La sienne\" agrees with \"chambre\"; here it means hers, the daughter's." },
      { type: "dictation", audio: "Leurs voisins sont plus bruyants que les nôtres.", explanation: "\"Leurs\" (adjective, plural) and \"les nôtres\" (pronoun, circumflex)." },
      { type: "speak", text: "Leur plage est magnifique, mais je préfère la nôtre.", prompt: "Say it in French: Their beach is stunning, but I prefer ours.", tip: "La nôtre: closed o, as in eau.", explanation: "\"La nôtre\" for the feminine \"plage\"." },
    ],
  },
  {
    slug: "b1-demonstrative-pronouns-1",
    level: "FR-B1",
    number: 4,
    title: "Demonstrative Pronouns, Part 1 of 2: Celui, Celle, Ceux, Celles",
    summary: "Say this one, that one, Marie's and the one I want with celui, celle, ceux and celles, which never stand alone.",
    duration: "15 min",
    sections: [
      {
        heading: "Celui, celle, ceux, celles: the one, the ones",
        body: [
          "A demonstrative pronoun replaces \"ce / cette / ces\" + noun so you don't have to repeat the noun. It agrees with that noun: \"celui\" (masculine singular), \"celle\" (feminine singular), \"ceux\" (masculine plural), \"celles\" (feminine plural).",
          "English says the one; the beginner's mistake is to translate it word for word as *le un. The one = \"celui\" or \"celle\", the ones = \"ceux\" or \"celles\".",
        ],
        examples: [
          { es: "J'aime bien cette robe, mais je préfère celle de la vitrine.", en: "I like this dress, but I prefer the one in the window." },
          { es: "Ces chaussures sont belles, mais celles que j'ai vues hier étaient moins chères.", en: "These shoes are nice, but the ones I saw yesterday were cheaper." },
          { es: "Les films d'aujourd'hui sont moins drôles que ceux des années 80.", en: "Today's films are less funny than the ones from the eighties." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "These suitcases are heavy, but the ones in the car are light. Which word fits? Ces valises sont lourdes, mais ___ de la voiture sont légères.", options: ["celles", "ceux", "celle", "les unes"], correctIndex: 0, explanation: "\"Valises\" is feminine plural, so the ones = \"celles\". \"Ceux\" is masculine plural, and *les unes copies the English word for word." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "This lamp is ugly, but [the one] in the living room is pretty.", sentence: "Cette lampe est moche, mais ___ du salon est jolie.", answer: "celle", explanation: "\"Lampe\" is feminine singular: \"celle\", followed here by \"du salon\"." },
        ],
      },
      {
        heading: "The golden rule: never alone",
        body: [
          "The golden rule: these pronouns never stand alone. They're always followed by one of three things: \"-ci\" or \"-là\", a phrase with \"de\", or a relative pronoun (\"qui\", \"que\", \"dont\", \"où\"). *Je prends celui. is not French.",
        ],
        examples: [
          { es: "Quel gâteau tu veux ? — Celui-ci.", en: "Which cake do you want? — This one." },
          { es: "Quel pull ? — Celui de mon frère.", en: "Which jumper? — My brother's." },
          { es: "Ce n'est pas le bon bus. Il faut prendre celui qui va à la gare.", en: "It's not the right bus. We need to take the one that goes to the station." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Which sentence is correct French?", options: ["Je prends celui qui est rouge.", "Je prends celui.", "Je prends le un qui est rouge.", "Je prends celui est rouge."], correctIndex: 0, explanation: "\"Celui\" must be followed by -ci / -là, de or a relative: \"celui qui est rouge\"." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Quel pull tu veux ? Je prends celui.", answer: "Quel pull tu veux ? Je prends celui-ci.", altAnswers: ["Quel pull tu veux ? Je prends celui-là."], explanation: "\"Celui\" never ends a sentence on its own: add \"-ci\" or \"-là\" to point at it." },
        ],
      },
      {
        heading: "Celui-ci, celui-là: this one, that one",
        body: [
          "Add \"-ci\" (here) or \"-là\" (there) to point: \"celui-ci\" (this one), \"celle-là\" (that one), \"ceux-ci\" (these), \"celles-là\" (those). Always with a hyphen.",
          "In everyday speech the distinction is loose: people often say \"celui-là\" for the one they're pointing at, near or far. Use \"-ci\" and \"-là\" together when you contrast two things: \"Celui-ci est trop cher, celui-là est trop petit.\"",
          "\"Celui-là\" and \"celle-là\" can also sound a little scornful about people: \"Oh, celle-là, elle exagère !\" ('honestly, that woman!').",
        ],
        examples: [
          { es: "Celui-ci est trop cher, celui-là est trop petit.", en: "This one's too expensive, that one's too small." },
          { es: "Quelles pommes vous voulez ? — Celles-là, au fond.", en: "Which apples would you like? — Those ones, at the back." },
          { es: "Tu préfères ces lunettes-ci ou celles-là ?", en: "Do you prefer these glasses or those?" },
          { es: "J'ai deux bonnes nouvelles. Celle-ci d'abord : j'ai trouvé un appart !", en: "I've got two pieces of good news. This one first: I've found a flat!" },
          { es: "Ah, celui-là, il n'est jamais à l'heure !", en: "Oh, that guy, he's never on time!" },
          { es: "Ces deux vélos ? Ceux-ci sont à louer, ceux-là sont à vendre.", en: "These two bikes? These are for hire, those are for sale." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "This one's too expensive and that one's too small. (two jackets: une veste)", answer: "Celle-ci est trop chère et celle-là est trop petite.", explanation: "\"Veste\" is feminine: \"celle-ci\", \"celle-là\", and the adjectives agree too." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "Which grapes would you like? [These ones], please.", sentence: "Quels raisins voulez-vous ? ___, s'il vous plaît.", answer: "Ceux-ci", altAnswers: ["Ceux-là"], explanation: "\"Raisins\" is masculine plural: \"ceux-ci\", with a hyphen." },
          { type: "listen-choose", audio: "Je prends ceux-là.", question: "What did you hear?", options: ["Je prends ceux-là.", "Je prends celui-là.", "Je prends celle-là.", "Je prends ça."], correctIndex: 0, explanation: "\"Ceux\" (one syllable, like \"ce\" with rounded lips) is plural; \"celui\" has two syllables." },
        ],
      },
      {
        heading: "Celui de: Marie's, yesterday's",
        body: [
          "English uses 's or of: Marie's, my brother's, yesterday's, the one on the left. French uses \"celui de\" / \"celle de\": \"celle de Marie\" (Marie's), \"ceux de mon frère\" (my brother's), \"le journal d'hier\" → \"celui d'hier\" (yesterday's).",
          "So when someone asks whose phone it is and it's Marie's, you say \"C'est celui de Marie.\" There's no 's in French: the owner always comes after \"de\". \"De\" contracts as usual: \"celle du voisin\", \"ceux des enfants\".",
          "\"De\" also gives position and origin: \"celui de gauche\" (the one on the left), \"celle du haut\" (the top one), \"ceux de Lyon\" (the ones from Lyon).",
        ],
        examples: [
          { es: "Ce n'est pas mon téléphone, c'est celui de Marie.", en: "That's not my phone, it's Marie's." },
          { es: "Ma voiture est en panne, je prends celle de mon frère.", en: "My car's broken down; I'm taking my brother's." },
          { es: "Le journal d'aujourd'hui n'est pas arrivé, mais j'ai celui d'hier.", en: "Today's paper hasn't come, but I've got yesterday's." },
          { es: "Quel tiroir ? — Celui de gauche.", en: "Which drawer? — The one on the left." },
          { es: "Ces jouets sont ceux des enfants du voisin.", en: "These toys are the neighbour's children's." },
          { es: "Les fromages de Normandie sont aussi bons que ceux d'Auvergne.", en: "Normandy cheeses are as good as the ones from Auvergne." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "These aren't my keys, they're Julien's.", answer: "Ce ne sont pas mes clés, ce sont celles de Julien.", altAnswers: ["Ce ne sont pas mes clés, c'est celles de Julien.", "Ce ne sont pas mes clés, ce sont les clés de Julien."], explanation: "Julien's = \"celles de Julien\": \"clés\" is feminine plural, and the owner comes after \"de\"." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "This week's menu is better than [last week's].", sentence: "Le menu de cette semaine est meilleur que ___.", answer: "celui de la semaine dernière", explanation: "\"Menu\" is masculine: \"celui de la semaine dernière\"." },
        ],
      },
      {
        heading: "Celui qui, celle que, ceux dont: the one who, the one that",
        body: [
          "With a relative pronoun, \"celui\" means the one who / the one that, and the relative follows its usual rules: \"qui\" for the subject (\"celui qui parle\"), \"que\" for the object (\"celle que je préfère\"), \"dont\" with verbs taking de (\"ceux dont je t'ai parlé\"), \"où\" for place or time (\"celui où on a dîné\").",
        ],
        examples: [
          { es: "C'est celui qui parle avec Thomas ?", en: "Is it the one who's talking to Thomas?" },
          { es: "De toutes ses chansons, c'est celle que je préfère.", en: "Of all her songs, that's the one I like best." },
          { es: "Voilà les livres dont je t'ai parlé. — Ceux dont tu m'as parlé hier ?", en: "Here are the books I told you about. — The ones you told me about yesterday?" },
          { es: "Le restaurant ? C'est celui où on a fêté ton anniversaire.", en: "The restaurant? It's the one where we celebrated your birthday." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "The film? It's the one I told you about. Which is right?", options: ["Le film ? C'est celui dont je t'ai parlé.", "Le film ? C'est celui que je t'ai parlé.", "Le film ? C'est celui qui je t'ai parlé.", "Le film ? C'est celui où je t'ai parlé."], correctIndex: 0, explanation: "\"Parler de\" takes \"de\", so the relative is \"dont\": \"celui dont je t'ai parlé\". \"Que\" is only for a direct object." },
          { type: "translate", direction: "en-es", prompt: "Turn the two sentences into one with « celle que ».", source: "C'est la chanson. Je la chante tout le temps.", answer: "C'est celle que je chante tout le temps.", altAnswers: ["C'est la chanson que je chante tout le temps."], explanation: "\"La\" is the object of \"chante\", so the relative is \"que\"; \"celle\" replaces \"la chanson\"." },
        ],
      },
      {
        heading: "Celle que j'ai prise, ceux qui veulent",
        body: [
          "After \"que\", a passé composé with avoir agrees with \"celle\" or \"ceux\": \"la robe ? C'est celle que j'ai achetée\". You hear it only with participles ending in a consonant (\"mise\", \"prise\", \"faite\").",
          "\"Ceux qui\" also works for people in general: \"Ceux qui veulent partir peuvent partir\" (those who want to leave can leave), a very common structure in rules and announcements.",
        ],
        examples: [
          { es: "Quelle valise ? Celle que j'ai prise à Rome.", en: "Which suitcase? The one I took to Rome." },
          { es: "La robe ? C'est celle que j'ai mise hier.", en: "The dress? It's the one I wore yesterday." },
          { es: "Ceux qui ont fini peuvent partir.", en: "Those who have finished can leave." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Those who want to come can sign up here.", answer: "Ceux qui veulent venir peuvent s'inscrire ici.", explanation: "\"Ceux qui\" = those who, for people in general; \"qui\" is the subject of \"veulent\"." },
          { type: "speak", text: "Quelle photo ? Celle que j'ai faite à Nice.", prompt: "Say it in French: Which photo? The one I took in Nice.", tip: "You hear the t of faite: it agrees with celle.", explanation: "\"Celle que j'ai faite\": the participle agrees with \"celle\" (la photo), placed before avoir." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "My laptop's broken, so I'm using my sister's.", answer: "Mon ordinateur est en panne, alors j'utilise celui de ma sœur.", altAnswers: ["Mon ordinateur est en panne, donc j'utilise celui de ma sœur.", "Mon ordinateur est cassé, alors j'utilise celui de ma sœur.", "Mon ordinateur portable est en panne, alors j'utilise celui de ma sœur."], explanation: "My sister's = \"celui de ma sœur\" (\"ordinateur\" is masculine)." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Which shelf? The top one.", answer: "Quelle étagère ? Celle du haut.", explanation: "\"Étagère\" is feminine: \"celle du haut\" (de + le = du)." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "Here are the photos. Are these [the ones] you need?", sentence: "Voilà les photos. Ce sont ___ dont tu as besoin ?", answer: "celles", explanation: "\"Photos\" is feminine plural: \"celles\", followed by \"dont\" (avoir besoin de)." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The hotel? It's the one where we spent our honeymoon.", answer: "L'hôtel ? C'est celui où nous avons passé notre lune de miel.", altAnswers: ["L'hôtel ? C'est celui où on a passé notre lune de miel."], explanation: "\"Celui où\" for a place; \"hôtel\" is masculine." },
      { type: "multiple-choice", question: "In a shop, you point at some biscuits (des biscuits) on a high shelf. What do you say?", options: ["Je voudrais ceux-là, s'il vous plaît.", "Je voudrais celles-là, s'il vous plaît.", "Je voudrais ceux, s'il vous plaît.", "Je voudrais les uns-là, s'il vous plaît."], correctIndex: 0, explanation: "\"Biscuits\" is masculine plural: \"ceux-là\". The pronoun can't stand alone." },
      { type: "word-order", prompt: "Put the words in order to say: Take the one that's on the table.", words: ["Prends", "celui", "qui", "est", "sur", "la", "table."], translation: "Take the one that's on the table. (le livre, to a friend)", explanation: "\"Celui qui\" + verb: \"qui\" is the subject." },
      { type: "translate", direction: "en-es", prompt: "Make it plural: coats.", source: "Ce manteau est chaud, mais celui que j'ai essayé ce matin était plus léger.", answer: "Ces manteaux sont chauds, mais ceux que j'ai essayés ce matin étaient plus légers.", explanation: "Plural: \"ceux\", and the participle agrees with it because \"que\" comes before avoir: \"essayés\"." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Quelle voiture ? Celui de mon père.", answer: "Quelle voiture ? Celle de mon père.", explanation: "\"Voiture\" is feminine, so the one is \"celle\", not \"celui\"." },
      { type: "listen-choose", audio: "Ce n'est pas le mien, c'est celui de Paul.", question: "What does it mean?", options: ["It's not mine, it's Paul's.", "It's not mine, it's this one.", "It's not Paul's, it's mine.", "It's not his, it's Paul's."], correctIndex: 0, explanation: "\"Le mien\" is mine; \"celui de Paul\" is Paul's." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Spanish oranges are sweeter than the ones from Morocco.", answer: "Les oranges d'Espagne sont plus sucrées que celles du Maroc.", altAnswers: ["Les oranges espagnoles sont plus sucrées que celles du Maroc."], explanation: "\"Celles du Maroc\" avoids repeating \"les oranges\" (feminine plural)." },
      { type: "dictation", audio: "Je préfère celles de ta grand-mère.", explanation: "\"Celles de\" + owner: feminine plural." },
      { type: "speak", text: "Ce ne sont pas mes lunettes, ce sont celles de Paul.", prompt: "Say it in French: They're not my glasses, they're Paul's.", explanation: "Paul's = \"celles de Paul\" (\"lunettes\" is feminine plural)." },
    ],
  },
  {
    slug: "b1-minimal-pairs-mon-le-mien-a-moi",
    level: "FR-B1",
    number: 5,
    title: "Minimal Pairs: C'est mon livre / C'est le mien / Il est à moi",
    summary: "Three ways to say something is yours: a possessive adjective, a possessive pronoun, or être à + a stressed pronoun.",
    duration: "12 min",
    sections: [
      {
        heading: "Three ways to claim it",
        body: [
          "\"C'est mon livre\" (it's my book) puts the possessive adjective before a noun. \"C'est le mien\" (it's mine) replaces the noun with a possessive pronoun. \"Il est à moi\" (it belongs to me) uses \"être à\" + a stressed pronoun: \"à moi, à toi, à lui, à elle, à nous, à vous, à eux, à elles\".",
        ],
        examples: [
          { es: "C'est mon livre, pas le tien.", en: "It's my book, not yours." },
          { es: "Ce livre est à moi.", en: "This book belongs to me." },
          { es: "Ce sac est à toi ? — Oui, il est à moi.", en: "Is this bag yours? — Yes, it's mine." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Someone asks « À qui est ce parapluie ? ». It belongs to you. Which answer is NOT correct?", options: ["C'est mien.", "Il est à moi.", "C'est le mien.", "C'est mon parapluie."], correctIndex: 0, explanation: "The pronoun needs its article: \"le mien\". The other three are the three correct shapes: \"être à\", pronoun, adjective + noun." },
          { type: "translate", direction: "en-es", prompt: "Change it to « être à ».", source: "Cette valise est la mienne.", answer: "Cette valise est à moi.", explanation: "\"Être à\" + stressed pronoun: \"la mienne\" becomes \"à moi\", with no agreement to worry about." },
        ],
      },
      {
        heading: "Which one when?",
        body: [
          "The first two need gender agreement with the thing; \"être à\" doesn't, which makes it the safest choice when you're unsure of the noun's gender: \"C'est à moi !\" works for anything.",
          "\"Être à\" focuses on ownership, so it's what you use to answer \"À qui est... ?\" (whose is...?). \"Le mien\" is more natural when you're comparing or choosing between several things.",
        ],
        examples: [
          { es: "Ces vélos sont à eux, pas à nous.", en: "These bikes are theirs, not ours." },
          { es: "La voiture rouge est à elle.", en: "The red car is hers." },
          { es: "Ne touche pas, c'est à moi !", en: "Don't touch, it's mine!" },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "This tent is [ours], not theirs.", sentence: "Cette tente est ___, pas à eux.", answer: "à nous", altAnswers: ["la nôtre"], explanation: "\"Être à\" + stressed pronoun: \"à nous\", matching \"à eux\". No agreement needed with \"être à\"." },
        ],
      },
      {
        heading: "À qui est... ? Whose is it?",
        body: [
          "French has no word for whose in questions; it says to whom: \"À qui est ce manteau ?\" (whose coat is this?) or, more casually, \"C'est à qui, ce manteau ?\". With a plural: \"À qui sont ces clés ?\".",
          "The answer can take all three shapes: \"Il est à moi\", \"C'est le mien\", \"C'est celui de Paul\" (it's Paul's). With a name, \"être à\" works too: \"Il est à Paul.\"",
        ],
        examples: [
          { es: "À qui est ce manteau ?", en: "Whose coat is this?" },
          { es: "C'est à qui, ces clés ?", en: "Whose keys are these?" },
          { es: "Il est à Paul, je crois.", en: "It's Paul's, I think." },
          { es: "À qui sont ces lunettes ? — Elles sont à Mme Dubois.", en: "Whose glasses are these? — They're Mme Dubois's." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Whose scarf is this?", answer: "À qui est cette écharpe ?", altAnswers: ["C'est à qui, cette écharpe ?", "Cette écharpe est à qui ?", "C'est l'écharpe de qui ?"], explanation: "Whose = \"à qui\" + être; French never says *dont écharpe." },
          { type: "listen-choose", audio: "Elles sont à elle.", question: "What does it mean?", options: ["They're hers.", "They're theirs.", "It's hers.", "They're for her."], correctIndex: 0, explanation: "\"Elles sont\" (they are, feminine plural things) + \"à elle\" (hers)." },
        ],
      },
      {
        heading: "C'est à toi de... : your turn",
        body: [
          "Careful: \"C'est à moi de...\" + infinitive means it's my turn or it's up to me: \"C'est à toi de jouer\" (your turn), \"C'est à vous de décider\" (it's up to you).",
        ],
        examples: [
          { es: "C'est à toi de jouer !", en: "It's your turn!" },
          { es: "C'est à vous de décider.", en: "It's up to you." },
          { es: "Ce soir, c'est à moi de payer.", en: "Tonight it's my turn to pay." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "What does « C'est à nous de payer » mean?", options: ["It's our turn to pay.", "We have to be paid.", "This money is ours.", "They're paying for us."], correctIndex: 0, explanation: "\"C'est à\" + person + \"de\" + infinitive = it's that person's turn or job, not ownership." },
        ],
      },
      {
        heading: "A friend of mine: un de mes amis, un ami à moi",
        body: [
          "English a friend of mine has no word-for-word French equivalent. Say \"un de mes amis\" or \"une de mes amies\" (one of my friends), or, more casually, \"un ami à moi\". Never *un ami de le mien.",
          "The same pattern works for any person: \"un collègue à elle\" (a colleague of hers), \"une cousine à nous\" (a cousin of ours). In writing, \"un de ses collègues\" sounds more polished.",
        ],
        examples: [
          { es: "Un de mes amis habite à Bordeaux.", en: "A friend of mine lives in Bordeaux." },
          { es: "C'est une amie à moi, elle s'appelle Inès.", en: "She's a friend of mine; her name's Ines." },
          { es: "Un collègue à elle cherche un appartement.", en: "A colleague of hers is looking for a flat." },
          { es: "Une de nos voisines garde notre chat.", en: "A neighbour of ours looks after our cat." },
          { es: "C'est un vieux copain à lui.", en: "He's an old mate of his." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "A cousin of mine works in Toulouse.", answer: "Une de mes cousines travaille à Toulouse.", altAnswers: ["Un de mes cousins travaille à Toulouse.", "Une cousine à moi travaille à Toulouse.", "Un cousin à moi travaille à Toulouse."], explanation: "A cousin of mine = \"un de mes cousins\" / \"une de mes cousines\", or casually \"un cousin à moi\"." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Un ami de le mien arrive demain.", answer: "Un de mes amis arrive demain.", altAnswers: ["Un ami à moi arrive demain.", "Une de mes amies arrive demain.", "Une amie à moi arrive demain."], explanation: "A friend of mine is never built with \"le mien\": say \"un de mes amis\" or \"un ami à moi\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "It's my umbrella, not his.", answer: "C'est mon parapluie, pas le sien.", altAnswers: ["C'est mon parapluie, ce n'est pas le sien.", "C'est mon parapluie, pas le sien !"], explanation: "Adjective \"mon\" before the noun, then the pronoun \"le sien\" (parapluie is masculine)." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Whose gloves are these?", answer: "À qui sont ces gants ?", altAnswers: ["C'est à qui, ces gants ?", "Ces gants sont à qui ?", "Ce sont les gants de qui ?"], explanation: "Plural: \"À qui sont...\"; \"c'est à qui\" is the casual version." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "The blue bike is [his].", sentence: "Le vélo bleu est ___.", answer: "à lui", altAnswers: ["le sien"], explanation: "\"Être à lui\" is the clearest; \"le sien\" works but could also mean hers." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "It's your turn to choose. (to a friend)", answer: "C'est à toi de choisir.", explanation: "\"C'est à toi de\" + infinitive = it's your turn, it's up to you." },
      { type: "multiple-choice", question: "Your little brother grabs your phone. What do you say?", options: ["Rends-le-moi, il est à moi !", "Rends-le-moi, il est mien !", "Rends-le-moi, il est le moi !", "Rends-le-moi, il est de moi !"], correctIndex: 0, explanation: "Ownership with \"être à\" + stressed pronoun: \"il est à moi\". \"Mien\" never stands without its article." },
      { type: "word-order", prompt: "Put the words in order to say: An old friend of ours is coming tonight.", words: ["Un", "vieil", "ami", "à", "nous", "vient", "ce", "soir."], translation: "An old friend of ours is coming tonight.", explanation: "\"Un ami à nous\": casual French for a friend of ours; \"vieil\" before a vowel." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "These keys aren't ours, they're theirs.", answer: "Ces clés ne sont pas à nous, elles sont à eux.", altAnswers: ["Ces clés ne sont pas à nous, elles sont à elles.", "Ces clés ne sont pas les nôtres, ce sont les leurs.", "Ce ne sont pas nos clés, ce sont les leurs."], explanation: "\"Être à nous / à eux\", or the pronouns \"les nôtres / les leurs\"." },
      { type: "listen-choose", audio: "C'est à vous, ce chien ?", question: "What did you hear?", options: ["C'est à vous, ce chien ?", "C'est à vous de choisir ?", "C'est votre chien ?", "C'est à nous, ce chien ?"], correctIndex: 0, explanation: "\"C'est à vous, ce chien ?\": is this dog yours?" },
      { type: "translate", direction: "en-es", prompt: "Change it to the casual « à » form.", source: "C'est une de mes collègues.", answer: "C'est une collègue à moi.", explanation: "Casual French: \"une collègue à moi\" instead of \"une de mes collègues\"." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Dont est ce sac ?", answer: "À qui est ce sac ?", altAnswers: ["C'est à qui, ce sac ?", "Ce sac est à qui ?"], explanation: "\"Dont\" is never whose in a question: French asks to whom, \"à qui\"." },
      { type: "speak", text: "Cette valise est à vous ? — Oui, elle est à moi.", prompt: "Ask a stranger if this suitcase is theirs, then answer yes, it's mine.", explanation: "\"Être à\" + stressed pronoun: \"à vous\", \"à moi\"." },
      { type: "dictation", audio: "À qui sont ces clés ?", explanation: "\"À qui sont\" (plural) for whose... are these." },
    ],
  },
  {
    slug: "b1-choose-explain-qui-que-ou-dont",
    level: "FR-B1",
    number: 6,
    title: "Choose and Explain: Qui, Que, Où or Dont?",
    summary: "Pick the right relative after celui, celle, ceux and celles, and say why: subject, object, de, or place and time.",
    duration: "14 min",
    sections: [
      {
        heading: "Celui qui or celui que? Look at what follows",
        body: [
          "After \"celui\", the relative pronoun follows the rules you learned in Unit 16. The quickest test: if a verb comes straight after, you need \"qui\" (it's the subject): \"celui qui parle\". If a subject and a verb follow, you need \"que\" (it's the object): \"celui que tu as acheté\".",
        ],
        examples: [
          { es: "Le serveur ? C'est celui qui porte une chemise blanche.", en: "The waiter? He's the one wearing a white shirt." },
          { es: "Ce gâteau est meilleur que celui que tu as acheté hier.", en: "This cake is better than the one you bought yesterday." },
          { es: "Les étudiants ? Ceux qui arrivent en retard n'entreront pas.", en: "The students? Those who arrive late won't be let in." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "C'est celle qui chante.", question: "What does it mean?", options: ["She's the one who's singing.", "It's the one she's singing.", "He's the one who's singing.", "It's the song he sings."], correctIndex: 0, explanation: "\"Qui\" + verb: the subject. \"Celle qu'il chante\" would mean the one he sings." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "The red coat? It's [the one that] my sister lent me.", sentence: "Le manteau rouge ? C'est ___ ma sœur m'a prêté.", answer: "celui que", explanation: "A subject (\"ma sœur\") follows, so \"que\" (object). \"Manteau\" is masculine: \"celui\"." },
        ],
      },
      {
        heading: "Never drop que; agree after it",
        body: [
          "English often drops that in the second case (the one I bought), but French never drops \"que\". \"Que\" becomes \"qu'\" before a vowel; \"qui\" never elides: \"celle qu'il aime\", but \"celle qui aime\".",
          "Agreement reminder: with \"que\" + passé composé, the participle agrees with \"celle / ceux / celles\" because the object comes first: \"Quelles photos ? Celles que j'ai prises à Nice.\"",
        ],
        examples: [
          { es: "Quelles photos ? Celles que j'ai prises à Nice.", en: "Which photos? The ones I took in Nice." },
          { es: "La chanson qui passe à la radio, c'est celle qu'il chantait toujours.", en: "The song on the radio is the one he always used to sing." },
          { es: "C'est celle que j'ai vue au marché.", en: "That's the one I saw at the market." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "C'est la robe j'ai choisie.", answer: "C'est la robe que j'ai choisie.", altAnswers: ["C'est celle que j'ai choisie."], explanation: "French never drops \"que\", even where English drops that (the dress I chose)." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Which letters? The ones I wrote last summer.", answer: "Quelles lettres ? Celles que j'ai écrites l'été dernier.", explanation: "\"Celles que\" + \"écrites\": the participle agrees with the feminine plural object placed before it, and you hear the t." },
        ],
      },
      {
        heading: "Ceux dont: when the verb takes de",
        body: [
          "Use \"dont\" when the verb or adjective is built with \"de\": \"parler de\", \"avoir besoin de\", \"avoir envie de\", \"se souvenir de\", \"s'occuper de\", \"être fier de\". \"Les livres dont j'ai besoin\" → \"ceux dont j'ai besoin\".",
          "Check by rebuilding the sentence: j'ai besoin DE ces livres → \"ceux dont j'ai besoin\". English ends with a stranded preposition (the ones I need, the one I told you about); French moves it to the front as \"dont\".",
        ],
        examples: [
          { es: "Voilà les outils dont j'ai besoin. Ceux dont tu as besoin sont dans le garage.", en: "Here are the tools I need. The ones you need are in the garage." },
          { es: "C'est le film dont tout le monde parle ? — Oui, celui dont je t'ai parlé.", en: "Is that the film everyone's talking about? — Yes, the one I told you about." },
          { es: "Cette recette, c'est celle dont je me souviens le mieux.", en: "This recipe is the one I remember best." },
          { es: "Les dossiers urgents sont ceux dont Karim s'occupe.", en: "The urgent files are the ones Karim deals with." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The suitcase? It's the one I need for Monday.", answer: "La valise ? C'est celle dont j'ai besoin pour lundi.", explanation: "\"Avoir besoin de\" → \"dont\"; \"valise\" is feminine, so \"celle\"." },
        ],
      },
      {
        heading: "Celle dont le fils...: whose",
        body: [
          "\"Dont\" also means whose: \"Ma voisine ? Celle dont le fils est pompier.\" Word order stays normal after it: \"dont\" + subject + verb + rest.",
        ],
        examples: [
          { es: "Ma voisine ? C'est celle dont le fils est pompier.", en: "My neighbour? She's the one whose son is a firefighter." },
          { es: "Le prof ? C'est celui dont la femme est médecin.", en: "The teacher? He's the one whose wife is a doctor." },
          { es: "Ce sont les voisins dont le chien aboie toute la nuit.", en: "They're the neighbours whose dog barks all night." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "My colleague? He's the one whose wife is Spanish. Which is right?", options: ["Mon collègue ? C'est celui dont la femme est espagnole.", "Mon collègue ? C'est celui que la femme est espagnole.", "Mon collègue ? C'est celui qui la femme est espagnole.", "Mon collègue ? C'est celui dont sa femme est espagnole."], correctIndex: 0, explanation: "Whose = \"dont\" + the noun with its article (\"la femme\", not \"sa femme\")." },
        ],
      },
      {
        heading: "Celui où, celle avec qui: place, time and prepositions",
        body: [
          "\"Où\" covers both place and time: \"l'hôtel où on a dormi\" → \"celui où on a dormi\"; \"le jour où je suis né\" → \"celui où je suis né\". English when after a time word is \"où\" in French, never *quand.",
          "With other prepositions, a person takes \"qui\" after the preposition: \"la collègue avec qui je travaille\" → \"celle avec qui je travaille\", \"l'ami à qui j'ai prêté ma voiture\" → \"celui à qui j'ai prêté ma voiture\".",
        ],
        examples: [
          { es: "Quel hôtel ? Celui où on a dormi l'an dernier.", en: "Which hotel? The one where we stayed last year." },
          { es: "Le meilleur jour de ma vie, c'est celui où ma fille est née.", en: "The best day of my life is the one when my daughter was born." },
          { es: "Ma collègue préférée, c'est celle avec qui je déjeune.", en: "My favourite colleague is the one I have lunch with." },
          { es: "C'est celui à qui j'ai prêté ma voiture.", en: "He's the one I lent my car to." },
          { es: "Les années où on vivait à Marseille étaient les plus belles.", en: "The years when we lived in Marseille were the best." },
          { es: "Le café ? Celui où on s'est rencontrés a fermé.", en: "The cafe? The one where we met has closed." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The worst year was the one when I lost my job.", answer: "La pire année, c'est celle où j'ai perdu mon travail.", altAnswers: ["La pire année a été celle où j'ai perdu mon travail.", "La pire année, c'est celle où j'ai perdu mon emploi.", "La pire année a été celle où j'ai perdu mon emploi.", "La pire année était celle où j'ai perdu mon travail."], explanation: "After a time word, when = \"où\", never *quand; \"année\" is feminine, so \"celle\"." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "My best friend is [the one I go on holiday with].", sentence: "Ma meilleure amie, c'est ___ je pars en vacances.", answer: "celle avec qui", explanation: "The preposition goes in front: \"celle avec qui\", never stranded at the end." },
          { type: "speak", text: "Quel jour ? Celui où on s'est mariés.", prompt: "Say it in French: Which day? The one when we got married.", tip: "Celui où: glide the two vowels together, no pause.", explanation: "\"Celui où\" for a time; \"mariés\" agrees with on (two people)." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The singer? She's the one wearing a red dress.", answer: "La chanteuse ? C'est celle qui porte une robe rouge.", altAnswers: ["La chanteuse ? C'est celle avec la robe rouge.", "La chanteuse ? C'est celle en robe rouge."], explanation: "\"Celle qui\" + verb: \"qui\" is the subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The ones I'm proud of are on the wall. (the photos)", answer: "Celles dont je suis fier sont au mur.", altAnswers: ["Celles dont je suis fière sont au mur.", "Celles dont je suis fier sont sur le mur.", "Celles dont je suis fière sont sur le mur."], explanation: "\"Être fier de\" → \"dont\"; \"photos\" is feminine plural, so \"celles\"." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "Which beach? [The one where] we swam yesterday.", sentence: "Quelle plage ? ___ on s'est baignés hier.", answer: "Celle où", explanation: "A place: \"où\". \"Plage\" is feminine: \"celle\"." },
      { type: "multiple-choice", question: "Which sentence means: That's the one he loves?", options: ["C'est celle qu'il aime.", "C'est celle qui aime.", "C'est celle dont il aime.", "C'est celle où il aime."], correctIndex: 0, explanation: "A subject follows (\"il\"), so \"que\", elided to \"qu'\". \"Celle qui aime\" = the one who loves." },
      { type: "translate", direction: "en-es", prompt: "Turn the two sentences into one with « celui dont ».", source: "C'est le livre. Je me souviens de ce livre.", answer: "C'est celui dont je me souviens.", altAnswers: ["C'est le livre dont je me souviens."], explanation: "\"Se souvenir de\" → \"dont\" replaces \"de ce livre\"." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "C'est celui que je t'ai parlé.", answer: "C'est celui dont je t'ai parlé.", explanation: "\"Parler de\" takes \"de\", so the relative is \"dont\", not \"que\"." },
      { type: "word-order", prompt: "Put the words in order to say: She's the one I wrote to.", words: ["C'est", "celle", "à qui", "j'ai", "écrit."], translation: "She's the one I wrote to.", explanation: "\"Écrire à quelqu'un\": the preposition comes first, \"celle à qui\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Those who want dessert can stay.", answer: "Ceux qui veulent un dessert peuvent rester.", altAnswers: ["Ceux qui veulent du dessert peuvent rester."], explanation: "\"Ceux qui\" + verb for people in general." },
      { type: "listen-choose", audio: "Ce sont ceux dont j'ai besoin.", question: "What does it mean?", options: ["They're the ones I need.", "They're the ones who need me.", "They're the ones I want.", "It's the one I need."], correctIndex: 0, explanation: "\"Ceux dont j'ai besoin\": avoir besoin de → \"dont\"." },
      { type: "speak", text: "Mon oncle ? C'est celui dont la maison est au bord de la mer.", prompt: "Say it in French: My uncle? He's the one whose house is by the sea.", explanation: "Whose = \"dont\" + \"la maison\" (article, not \"sa\")." },
      { type: "dictation", audio: "Ce sont celles qu'il a choisies.", explanation: "\"Choisies\" agrees with \"celles\", the object placed before avoir." },
    ],
  },
  {
    slug: "b1-demonstrative-pronouns-2",
    level: "FR-B1",
    number: 7,
    title: "Demonstrative Pronouns, Part 2 of 2: Ça, Cela, Ceci",
    summary: "Use the neutral demonstratives ça, cela and ceci for ideas and unnamed things, c'est vs ça a été, and celui-ci for the latter.",
    duration: "15 min",
    sections: [
      {
        heading: "Ça and cela: no gender, no noun",
        body: [
          "\"Celui\" and \"celle\" replace a specific noun. When there's no noun, because you're pointing at something you can't name or referring to a whole idea, French uses the neutral \"ça\" / \"cela\": \"Qu'est-ce que c'est, ça ?\", \"Ça m'énerve\", \"Cela ne nous concerne pas\".",
          "\"Ça\" often refers back to a whole sentence: \"Il a démissionné ? Ça ne m'étonne pas.\" English uses it or that; French uses \"ça\", never \"il\", for an idea.",
        ],
        examples: [
          { es: "Qu'est-ce que c'est, ça ?", en: "What's that?" },
          { es: "Il a démissionné ? Ça ne m'étonne pas.", en: "He's quit? That doesn't surprise me." },
          { es: "Je ne mange pas ça, je suis végétarienne.", en: "I don't eat that, I'm vegetarian." },
          { es: "Ça dépend du temps.", en: "It depends on the weather." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "He's late again? That annoys me.", answer: "Il est encore en retard ? Ça m'énerve.", altAnswers: ["Il est encore en retard ? Cela m'énerve.", "Il est de nouveau en retard ? Ça m'énerve."], explanation: "\"Ça\" refers to the whole situation (him being late again), not to a noun." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Elle a gagné ? Il ne me surprend pas.", answer: "Elle a gagné ? Ça ne me surprend pas.", altAnswers: ["Elle a gagné ? Cela ne me surprend pas.", "Elle a gagné ? Ça ne m'étonne pas."], explanation: "For a whole idea (her winning), French uses \"ça\" or \"cela\", never \"il\"." },
        ],
      },
      {
        heading: "Ça or cela? Speech and writing",
        body: [
          "\"Ça\" and \"cela\" mean the same thing. \"Ça\" (no accent!) is the spoken form, and it's everywhere in conversation. \"Cela\" belongs to careful writing: a formal email, a letter, an essay. Don't confuse \"ça\" with \"sa\" (his or her), which sounds the same.",
        ],
        examples: [
          { es: "Ça me fait plaisir de te voir.", en: "It's lovely to see you." },
          { es: "Cela ne nous concerne pas.", en: "That doesn't concern us." },
          { es: "Ça, c'est sa veste.", en: "That's his jacket." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "You're writing a formal email. Which is the best way to say: That doesn't concern our department?", options: ["Cela ne concerne pas notre service.", "Ça concerne pas notre service.", "Celui ne concerne pas notre service.", "Il ne concerne pas notre service."], correctIndex: 0, explanation: "Formal writing prefers \"cela\" and keeps \"ne\". \"Celui\" needs a noun; \"il\" can't stand for an idea." },
        ],
      },
      {
        heading: "Ceci: what's coming next",
        body: [
          "\"Ceci\" is rarer. In writing, it announces what comes next, while \"cela\" points back: \"Retenez bien ceci : ...\" (remember this:). In speech, \"ça\" does both jobs.",
          "Two set phrases are worth knowing: \"cela dit\" or \"ceci dit\" (that said, having said that), and \"à part ça\" (apart from that). You'll also see \"ceci\" on labels and in instructions: \"Ceci n'est pas un jouet\".",
        ],
        examples: [
          { es: "Retenez bien ceci : le dossier doit être complet.", en: "Remember this: the file must be complete." },
          { es: "Ceci n'est pas un jouet.", en: "This is not a toy." },
          { es: "C'est cher. Cela dit, la qualité est excellente.", en: "It's expensive. That said, the quality is excellent." },
          { es: "J'ai été malade lundi, mais à part ça, tout va bien.", en: "I was ill on Monday, but apart from that, everything's fine." },
          { es: "Lisez ceci avant de signer.", en: "Read this before you sign." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The flat is small. That said, it's very bright.", answer: "L'appartement est petit. Cela dit, il est très lumineux.", altAnswers: ["L'appartement est petit. Ceci dit, il est très lumineux."], explanation: "\"Cela dit\" (or \"ceci dit\") = that said, having said that." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "The train was late, but [apart from that], the trip was great.", sentence: "Le train était en retard, mais ___, le voyage était super.", answer: "à part ça", altAnswers: ["à part cela"], explanation: "\"À part ça\" = apart from that, very common in speech." },
          { type: "listen-choose", audio: "Lisez ceci avant de signer.", question: "What does it mean?", options: ["Read this before you sign.", "Read that after you sign.", "Read this while you sign.", "Sign this before you read it."], correctIndex: 0, explanation: "\"Ceci\" points to what's in front of you; \"avant de\" + infinitive = before ...ing." },
        ],
      },
      {
        heading: "C'est, never *ça est",
        body: [
          "Before the verb \"être\" in simple tenses, \"ça\" shrinks to \"ce\": \"c'est\", \"c'était\", \"ce sera\", \"ce serait\". *Ça est and *ça était are classic learner errors.",
          "But when \"être\" is a past participle or an infinitive, or when another verb comes first, \"ça\" stays: \"ça a été\" (it was / it's been), \"ça va être\" (it's going to be), \"ça doit être\" (it must be), \"ça peut être\". With every other verb it's \"ça\": \"ça marche\", \"ça coûte cher\".",
        ],
        examples: [
          { es: "C'est vrai, ça ?", en: "Is that true?" },
          { es: "Ça va être génial, tu verras.", en: "It's going to be great, you'll see." },
          { es: "Ça doit être sa sœur.", en: "That must be her sister." },
          { es: "Ce serait dommage de rater ça.", en: "It would be a shame to miss that." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "It's going to be difficult, I know.", answer: "Ça va être difficile, je sais.", altAnswers: ["Ce sera difficile, je sais.", "Ça va être difficile, je le sais.", "Ce sera difficile, je le sais."], explanation: "\"Ça\" stays before \"va être\"; with the future alone it's \"ce sera\"." },
          { type: "translate", direction: "en-es", prompt: "Change it to « aller » + infinitive: it's going to be...", source: "C'est compliqué.", answer: "Ça va être compliqué.", explanation: "Once another verb (\"va\") comes before \"être\", \"ce\" goes back to \"ça\": \"ça va être\"." },
        ],
      },
      {
        heading: "Ça a été or c'était?",
        body: [
          "\"Ça a été\" is the natural spoken past for a one-off experience: \"L'entretien ? Ça a été dur.\" Compare \"C'était dur\" for a description.",
        ],
        examples: [
          { es: "L'entretien ? Ça a été plus facile que prévu.", en: "The interview? It was easier than expected." },
          { es: "C'était trop tard.", en: "It was too late." },
          { es: "Le voyage ? Ça a été long, mais c'était beau.", en: "The trip? It was long, but it was beautiful." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "The exam? [It was] really hard.", sentence: "L'examen ? ___ vraiment dur.", answer: "Ça a été", altAnswers: ["C'était", "Cela a été"], explanation: "\"Ça a été\": ça stays before the auxiliary. \"C'était\" is also fine, but never *ça était." },
        ],
      },
      {
        heading: "Celui-ci = the latter",
        body: [
          "In writing, \"celui-ci\" / \"celle-ci\" often means the latter, the last person mentioned. It removes the ambiguity of \"il\" or \"elle\": \"Marie a appelé sa mère ; celle-ci était malade\" makes it clear that the mother was ill, not Marie.",
          "\"Celui-là\" / \"celle-là\" can mean the former, but that's rare and formal. In speech, French just repeats the noun or rephrases.",
        ],
        examples: [
          { es: "Marie a appelé sa mère ; celle-ci était malade.", en: "Marie called her mother, who was ill." },
          { es: "Le directeur a reçu Paul. Celui-ci lui a présenté son projet.", en: "The director saw Paul. Paul presented his project to him." },
          { es: "J'ai écrit au propriétaire, mais celui-ci ne m'a jamais répondu.", en: "I wrote to the landlord, but he never replied." },
          { es: "Léa a prêté sa voiture à Sophie ; celle-ci l'a rendue le lendemain.", en: "Lea lent her car to Sophie; Sophie returned it the next day." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French (in writing).", source: "Paul called his brother, but the latter didn't answer.", answer: "Paul a appelé son frère, mais celui-ci n'a pas répondu.", altAnswers: ["Paul a appelé son frère, mais celui-ci ne lui a pas répondu."], explanation: "\"Celui-ci\" = the latter: clearly the brother. \"Il\" could be Paul or his brother." },
          { type: "speak", text: "Julie a écrit à sa tante ; celle-ci lui a répondu tout de suite.", prompt: "Say it in French: Julie wrote to her aunt; the aunt answered her straight away.", tip: "Celle-ci: two syllables, sel-si.", explanation: "\"Celle-ci\" points to the last woman mentioned, the aunt." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Who did that? (to children)", answer: "Qui a fait ça ?", altAnswers: ["Qui est-ce qui a fait ça ?", "C'est qui qui a fait ça ?"], explanation: "\"Ça\" for an unnamed thing or action." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "That must be the postman.", answer: "Ça doit être le facteur.", altAnswers: ["Ce doit être le facteur.", "C'est sûrement le facteur."], explanation: "\"Ça\" before \"doit être\"; \"ce doit être\" is the written variant." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "[That] surprises me a great deal. (formal letter)", sentence: "___ me surprend beaucoup.", answer: "Cela", explanation: "\"Cela\" is the written form of \"ça\"." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["C'était trop tard.", "Ça était trop tard.", "Ça est trop tard.", "C'étais trop tard."], correctIndex: 0, explanation: "Before \"être\" in a simple tense, \"ça\" becomes \"ce\": \"c'était\", never *ça était." },
      { type: "translate", direction: "en-es", prompt: "Change it to the conditional.", source: "C'est dommage de partir si tôt.", answer: "Ce serait dommage de partir si tôt.", altAnswers: ["Ça serait dommage de partir si tôt."], explanation: "\"Ce serait\": \"ce\" before a simple tense of être; \"ça serait\" is common in speech." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "It depends on the price.", answer: "Ça dépend du prix.", altAnswers: ["Cela dépend du prix."], explanation: "\"Ça dépend de\" + noun; \"de + le\" contracts to \"du\"." },
      { type: "word-order", prompt: "Put the words in order to say: This is not an exit.", words: ["Ceci", "n'est", "pas", "une", "sortie."], translation: "This is not an exit. (a sign)", explanation: "\"Ceci\" on signs and labels: this." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "It's lovely to hear from you. (to a friend)", answer: "Ça me fait plaisir d'avoir de tes nouvelles.", altAnswers: ["Cela me fait plaisir d'avoir de tes nouvelles.", "Ça fait plaisir d'avoir de tes nouvelles."], explanation: "\"Ça me fait plaisir de\" + infinitive: a warm everyday phrase." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Ça était une très bonne soirée.", answer: "C'était une très bonne soirée.", altAnswers: ["Ça a été une très bonne soirée."], explanation: "Before a simple tense of être, \"ça\" becomes \"ce\": \"c'était\"." },
      { type: "listen-choose", audio: "Ça a été dur.", question: "What did you hear?", options: ["Ça a été dur.", "C'était dur.", "Ça va être dur.", "Ça été dur."], correctIndex: 0, explanation: "\"Ça a été\": you hear the auxiliary \"a\" between \"ça\" and \"été\"." },
      { type: "speak", text: "Ça, c'est une bonne idée !", prompt: "Say it in French: Now that's a good idea!", explanation: "\"Ça\" points at the idea, then \"c'est\" before être." },
    ],
  },
  {
    slug: "b1-real-world-mission-lost-property",
    level: "FR-B1",
    number: 8,
    title: "Real-World Mission: Lost Property",
    summary: "Get your bag back from the lost property office: describe it, pick yours out from the others and fill in the declaration form.",
    duration: "14 min",
    sections: [
      {
        heading: "At the counter: describing what you lost",
        body: [
          "You left your bag on a train arriving at Lyon Part-Dieu. You go to the \"bureau des objets trouvés\" (lost property office). The agent uses \"vous\" and asks you to describe the bag: \"Il est comment, votre sac ?\", \"Qu'est-ce qu'il y avait dedans ?\".",
          "Describe it with relatives and \"celui\": \"C'est un sac à dos noir, celui qui a une étiquette rouge\", \"Il y avait dedans un ordinateur et le chargeur, celui que j'utilise pour le travail\". Use the passé composé for what happened and the imparfait for the situation: \"Je l'ai oublié dans le train de 18 h ; j'étais pressé.\"",
        ],
        examples: [
          { es: "Bonjour, j'ai perdu mon sac dans le train de Marseille.", en: "Hello, I lost my bag on the train from Marseille." },
          { es: "Il est comment, votre sac ?", en: "What does your bag look like?" },
          { es: "C'est un sac à dos noir, celui qui a une étiquette rouge.", en: "It's a black rucksack, the one with a red tag." },
          { es: "Qu'est-ce qu'il y avait dedans ?", en: "What was in it?" },
          { es: "Il y avait mon ordinateur et des papiers importants.", en: "My computer and some important papers were in it." },
          { es: "Je l'ai oublié sous le siège, j'étais pressé.", en: "I left it under the seat; I was in a hurry." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "The agent asks: « Il est comment, votre sac ? » Which answer is right?", options: ["C'est un sac en cuir marron, celui qui a deux poches.", "C'est un sac en cuir marron, celui que a deux poches.", "C'est un sac en cuir marron, celle qui a deux poches.", "C'est un sac en cuir marron, celui dont a deux poches."], correctIndex: 0, explanation: "A verb follows straight away, so \"qui\" (subject); \"sac\" is masculine, so \"celui\"." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "I left it at the cafe; [I was tired].", sentence: "Je l'ai oublié au café, ___.", answer: "j'étais fatigué", altAnswers: ["j'étais fatiguée"], explanation: "Passé composé for what happened (\"je l'ai oublié\"), imparfait for the situation (\"j'étais fatigué\")." },
        ],
      },
      {
        heading: "Which one is yours?",
        body: [
          "The agent brings out three black rucksacks. Now you need possessive and demonstrative pronouns: \"C'est lequel, le vôtre ?\" — \"Ce n'est pas celui-ci... Non, ce n'est pas le mien non plus. C'est celui-là, à droite !\"",
          "To be sure, the agent checks: \"Vous pouvez me dire ce qu'il y a dans la poche avant ?\" You reply: \"Mes clés, celles de mon bureau, et une carte de bibliothèque.\" When you see it: \"Oui, c'est bien le mien !\" (\"bien\" = indeed, definitely).",
        ],
        examples: [
          { es: "Ce n'est pas celui-ci, il est trop petit.", en: "It's not this one, it's too small." },
          { es: "Non, ce n'est pas le mien non plus.", en: "No, that's not mine either." },
          { es: "C'est celui-là, à droite !", en: "It's that one, on the right!" },
          { es: "Dans la poche, il y a mes clés, celles de mon bureau.", en: "In the pocket there are my keys, the ones for my office." },
          { es: "Oui, c'est bien le mien, merci beaucoup !", en: "Yes, that's definitely mine, thanks so much!" },
          { es: "Le mien est plus usé, avec une fermeture cassée.", en: "Mine is more worn, with a broken zip." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "It's not that one, mine has a broken zip.", answer: "Ce n'est pas celui-là, le mien a une fermeture cassée.", altAnswers: ["Ce n'est pas celui-là, le mien a une fermeture éclair cassée."], explanation: "\"Celui-là\" points at the bag; \"le mien\" = mine (un sac, masculine)." },
          { type: "multiple-choice", question: "Another day, another loss: the agent holds up your suitcase (une valise). What do you say?", options: ["Oui, c'est bien la mienne !", "Oui, c'est bien le mien !", "Oui, c'est bien mienne !", "Oui, c'est bien celle !"], correctIndex: 0, explanation: "\"Valise\" is feminine: \"la mienne\". \"Celle\" can't stand alone, and \"mienne\" needs its article." },
          { type: "listen-choose", audio: "C'est celui-là, à droite.", question: "What does it mean?", options: ["It's that one, on the right.", "It's this one, on the left.", "It's the one there, straight on.", "They're those, on the right."], correctIndex: 0, explanation: "\"Celui-là\" = that one; \"à droite\" = on the right." },
        ],
      },
      {
        heading: "Filling in the form",
        body: [
          "If your bag hasn't been found yet, you fill in a \"déclaration de perte\". Forms give instructions with the infinitive (\"Indiquer la date\", \"Décrire l'objet\") and ask for: \"nature de l'objet\", \"date et lieu de la perte\", \"description\", \"contenu\", \"coordonnées\" (contact details).",
          "In the description, keep sentences short and precise: \"Sac à dos noir, marque X, étiquette rouge. Contenu : un ordinateur portable, celui de mon entreprise, et un portefeuille marron.\" If you're contacted later, the agent might say \"On a retrouvé un sac qui pourrait être le vôtre.\"",
        ],
        examples: [
          { es: "Nature de l'objet : sac à dos.", en: "Type of item: rucksack." },
          { es: "Date et lieu de la perte : le 12 mars, dans le TGV Marseille-Lyon.", en: "Date and place of loss: 12 March, on the Marseille-Lyon TGV." },
          { es: "Contenu : un ordinateur portable, celui de mon entreprise.", en: "Contents: a laptop, my company's." },
          { es: "Indiquer vos coordonnées ci-dessous.", en: "Give your contact details below." },
          { es: "On a retrouvé un sac qui pourrait être le vôtre.", en: "We've found a bag that could be yours." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Turn it into a form instruction with the infinitive.", source: "Vous décrivez l'objet.", answer: "Décrire l'objet.", explanation: "Forms give instructions with the bare infinitive: \"Décrire l'objet\", \"Indiquer la date\"." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "Contents: a wallet, [my wife's].", sentence: "Contenu : un portefeuille, ___.", answer: "celui de ma femme", explanation: "My wife's = \"celui de ma femme\": no 's in French, and \"portefeuille\" is masculine." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Hello, I left my umbrella on the bus this morning.", answer: "Bonjour, j'ai oublié mon parapluie dans le bus ce matin.", altAnswers: ["Bonjour, j'ai laissé mon parapluie dans le bus ce matin."], explanation: "Passé composé for the event; \"dans le bus\" = on the bus." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "What colour is your suitcase? (the agent, polite)", answer: "Elle est de quelle couleur, votre valise ?", altAnswers: ["De quelle couleur est votre valise ?", "Votre valise est de quelle couleur ?"], explanation: "\"Être de quelle couleur\"; \"elle\" because \"valise\" is feminine." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "It's not this one; [mine] is bigger.", sentence: "Ce n'est pas celui-ci ; ___ est plus grand.", answer: "le mien", explanation: "\"Le mien\" for a masculine object (le sac)." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "In the side pocket there's a pen, my father's.", answer: "Dans la poche de côté, il y a un stylo, celui de mon père.", explanation: "My father's = \"celui de mon père\" (\"stylo\" is masculine)." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "C'est celui-là, la valise bleue.", answer: "C'est celle-là, la valise bleue.", explanation: "\"Valise\" is feminine, so that one is \"celle-là\"." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Le sac noir ? Ce n'est pas mien.", answer: "Le sac noir ? Ce n'est pas le mien.", altAnswers: ["Le sac noir ? Il n'est pas à moi."], explanation: "The possessive pronoun always keeps its article: \"le mien\"." },
      { type: "translate", direction: "en-es", prompt: "Change it to the agent's polite « vous ».", source: "Qu'est-ce que tu as perdu ?", answer: "Qu'est-ce que vous avez perdu ?", explanation: "The agent speaks to a stranger: \"vous avez\"." },
      { type: "word-order", prompt: "Put the words in order to say: This one, is it yours, madam?", words: ["Celui-ci,", "c'est", "le", "vôtre,", "madame ?"], translation: "This one, is it yours, madam?", explanation: "\"Celui-ci\" to point, \"le vôtre\" for polite yours." },
      { type: "multiple-choice", question: "The form says « Indiquer vos coordonnées ». What should you write?", options: ["Your name, phone number and address", "The colour and size of the object", "The date and place of the loss", "What was inside the bag"], correctIndex: 0, explanation: "\"Les coordonnées\" are your contact details; forms use the infinitive for instructions." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "There was my laptop in it, the one I use for work.", answer: "Il y avait mon ordinateur portable dedans, celui que j'utilise pour le travail.", altAnswers: ["Il y avait dedans mon ordinateur portable, celui que j'utilise pour le travail.", "Il y avait mon ordinateur dedans, celui que j'utilise pour le travail.", "Il y avait mon ordinateur portable dedans, celui que j'utilise pour mon travail."], explanation: "\"Il y avait\" for what was there (imparfait); \"celui que\" because \"je\" is the subject." },
      { type: "listen-choose", audio: "La mienne est plus grande, avec des roulettes.", question: "What does it mean?", options: ["Mine is bigger, with wheels.", "Mine is smaller, with wheels.", "Yours is bigger, with wheels.", "Mine is bigger, with straps."], correctIndex: 0, explanation: "\"La mienne\" = mine (a feminine thing such as une valise); \"des roulettes\" = wheels." },
      { type: "speak", text: "C'est une valise grise, celle qui a un ruban jaune.", prompt: "Describe your suitcase: a grey suitcase, the one with a yellow ribbon.", explanation: "\"Celle qui a\" = the one with; \"valise\" is feminine." },
      { type: "dictation", audio: "On a peut-être retrouvé la vôtre.", explanation: "\"La vôtre\" with a circumflex: polite yours, feminine." },
    ],
  },
  {
    slug: "b1-mixed-practice-residents-meeting",
    level: "FR-B1",
    number: 9,
    title: "Mixed Practice: The Residents' Meeting",
    summary: "At a réunion de copropriété, sort out whose bikes block the hall, whose parking space is whose and who said what.",
    duration: "15 min",
    sections: [
      {
        heading: "Bikes in the hall",
        body: [
          "Once a year, the owners of a French block of flats meet at the \"réunion de copropriété\". The \"syndic\" (property manager), M. Lambert, chairs; the neighbours use \"vous\" with each other. First item: bikes blocking the entrance hall.",
          "Expect a cascade of possessives and demonstratives: \"À qui sont ces vélos ?\", \"Ceux-ci sont à nous, mais ceux-là, je ne sais pas\", \"Le vélo bleu, c'est celui de la famille Roux\", \"Les nôtres sont à la cave\".",
        ],
        examples: [
          { es: "À qui sont les vélos dans le hall ?", en: "Whose are the bikes in the hall?" },
          { es: "Ceux-ci sont à nous, mais ceux-là, je ne sais pas.", en: "These ones are ours, but those, I don't know." },
          { es: "Le vélo bleu, c'est celui de la famille Roux.", en: "The blue bike is the Roux family's." },
          { es: "Les nôtres sont à la cave depuis l'an dernier.", en: "Ours have been in the cellar since last year." },
          { es: "Il faudrait que chacun range le sien.", en: "Everyone ought to put theirs away." },
          { es: "Ceux qui ne seront pas rangés seront enlevés.", en: "Those that aren't put away will be removed." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "M. Lambert asks whose pushchair (une poussette) is in the hall. It's the Roux family's. Which is right?", options: ["C'est celle de la famille Roux.", "C'est celui de la famille Roux.", "C'est la sienne de la famille Roux.", "C'est celle la famille Roux."], correctIndex: 0, explanation: "French has no 's: the owner comes after \"de\", and \"poussette\" is feminine, so \"celle de\"." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "Each resident must take [theirs] down to the cellar. (their bike)", sentence: "Chaque résident doit descendre ___ à la cave.", answer: "le sien", explanation: "After \"chaque\" or \"chacun\", the possessive is \"le sien\" (vélo is masculine); English says theirs." },
        ],
      },
      {
        heading: "Parking spaces",
        body: [
          "Second item: someone keeps parking in the wrong space. Spaces are \"places\" (feminine), so everything turns feminine: \"la mienne\", \"la vôtre\", \"celle du fond\", \"celle qui est près de l'ascenseur\".",
          "Mme Roux complains politely with the conditional: \"Je voudrais savoir qui se gare sur ma place.\" M. Petit realises his mistake: \"Ah, je croyais que la 12 était la mienne ! La mienne, c'est celle d'à côté ?\"",
        ],
        examples: [
          { es: "Je voudrais savoir qui se gare sur ma place.", en: "I'd like to know who's parking in my space." },
          { es: "La place 12, c'est la vôtre ? — Non, la nôtre, c'est celle du fond.", en: "Is space 12 yours? — No, ours is the one at the back." },
          { es: "Je croyais que celle-ci était la mienne !", en: "I thought this one was mine!" },
          { es: "La sienne, c'est celle qui est près de l'ascenseur.", en: "His is the one near the lift." },
          { es: "Les places des visiteurs sont celles qui sont marquées en jaune.", en: "The visitors' spaces are the ones marked in yellow." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Our space is the one next to the bins.", answer: "Notre place, c'est celle qui est à côté des poubelles.", altAnswers: ["Notre place est celle qui est à côté des poubelles.", "Notre place, c'est celle à côté des poubelles.", "Notre place est celle à côté des poubelles.", "La nôtre, c'est celle qui est à côté des poubelles."], explanation: "\"Place\" is feminine: \"celle qui est\"; \"à côté de + les\" contracts to \"des\"." },
          { type: "translate", direction: "en-es", prompt: "Change « place » to « garage » and follow the ripple.", source: "La mienne, c'est celle du fond.", answer: "Le mien, c'est celui du fond.", explanation: "\"Garage\" is masculine, so both pronouns switch: \"le mien\", \"celui\"." },
          { type: "listen-choose", audio: "La sienne, c'est celle qui est près de l'ascenseur.", question: "What does it mean?", options: ["His (or hers) is the one near the lift.", "Ours is the one near the lift.", "This one is near the lift.", "Theirs is the one near the stairs."], correctIndex: 0, explanation: "\"La sienne\" = his or hers; \"celle qui est près de\" = the one near." },
        ],
      },
      {
        heading: "Who said what",
        body: [
          "Afterwards, two neighbours, Nadia and Hugo, chat on the landing and go over who said what. They identify people by what they do or have: \"celui qui habite au troisième\", \"celle dont le chien aboie la nuit\", \"ceux qui viennent d'emménager\".",
          "They also use \"ce qui\" and \"ce que\" (Unit 17) for whole ideas, and \"ça\" to comment: \"Ce qui m'a surpris, c'est que personne n'a parlé du bruit. — Oui, ça m'a étonné aussi.\"",
        ],
        examples: [
          { es: "C'est celui qui habite au troisième qui s'est plaint.", en: "It was the man on the third floor who complained." },
          { es: "Et celle dont le chien aboie la nuit n'est pas venue.", en: "And the woman whose dog barks at night didn't come." },
          { es: "Ceux qui viennent d'emménager ont l'air sympas.", en: "The people who've just moved in seem nice." },
          { es: "Ce qui m'a surpris, c'est que personne n'a parlé du bruit.", en: "What surprised me is that nobody mentioned the noise." },
          { es: "Oui, ça m'a étonné aussi.", en: "Yes, that surprised me too." },
          { es: "Ce que le syndic a dit sur les travaux, je ne l'ai pas compris.", en: "What the manager said about the building work, I didn't understand." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The man whose car is red parks badly.", answer: "Celui dont la voiture est rouge se gare mal.", altAnswers: ["L'homme dont la voiture est rouge se gare mal.", "Le monsieur dont la voiture est rouge se gare mal."], explanation: "Whose = \"dont\" + \"la voiture\" (article, not \"sa\"); \"celui\" for the man." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "La voisine que la fille joue du piano est très gentille.", answer: "La voisine dont la fille joue du piano est très gentille.", explanation: "Whose is \"dont\", never \"que\": \"la voisine dont la fille...\"." },
          { type: "speak", text: "Ce qui m'énerve, c'est le bruit des travaux.", prompt: "Say it in French: What annoys me is the noise of the building work.", explanation: "\"Ce qui\" (subject) for a whole idea, picked up by \"c'est\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "The red scooter is the Martins'.", answer: "Le scooter rouge, c'est celui des Martin.", altAnswers: ["Le scooter rouge est celui des Martin.", "Le scooter rouge est aux Martin.", "Le scooter rouge, c'est celui de la famille Martin."], explanation: "The Martins' = \"celui des Martin\" (de + les); family names don't take -s in French." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Theirs have been in the courtyard since Monday. (bikes)", answer: "Les leurs sont dans la cour depuis lundi.", explanation: "\"Depuis\" + present for something still true; \"les leurs\" (with -s) for plural things." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "The bins for glass are [the ones] near the gate.", sentence: "Les poubelles pour le verre sont ___ qui sont près du portail.", answer: "celles", explanation: "\"Poubelles\" is feminine plural: \"celles\"." },
      { type: "translate", direction: "en-es", prompt: "Make it more polite with the conditional.", source: "Je veux savoir qui laisse ses sacs dans l'escalier.", answer: "Je voudrais savoir qui laisse ses sacs dans l'escalier.", altAnswers: ["J'aimerais savoir qui laisse ses sacs dans l'escalier."], explanation: "\"Je voudrais\" (conditional) softens a complaint at a meeting." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Cette place est la de Mme Roux.", answer: "Cette place est celle de Mme Roux.", explanation: "Mme Roux's = \"celle de Mme Roux\": the article alone can't replace the noun." },
      { type: "multiple-choice", question: "Which sentence means: It was the woman on the first floor who complained?", options: ["C'est celle qui habite au premier qui s'est plainte.", "C'est celle que habite au premier qui s'est plainte.", "C'est celle dont habite au premier qui s'est plainte.", "C'est celui qui habite au premier qui s'est plainte."], correctIndex: 0, explanation: "Both relatives are subjects of their verbs, so \"qui... qui\"; \"celle\" for a woman." },
      { type: "word-order", prompt: "Put the words in order to say: Those who live on the ground floor are against it.", words: ["Ceux", "qui", "habitent", "au", "rez-de-chaussée", "sont", "contre."], translation: "Those who live on the ground floor are against it.", explanation: "\"Ceux qui\" + verb for people." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Hers is the one opposite the entrance. (her letterbox: sa boîte aux lettres)", answer: "La sienne, c'est celle en face de l'entrée.", altAnswers: ["La sienne est celle en face de l'entrée.", "La sienne, c'est celle qui est en face de l'entrée.", "La sienne est celle qui est en face de l'entrée."], explanation: "\"Boîte\" is feminine: \"la sienne\", \"celle\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "What I didn't understand is the price of the work.", answer: "Ce que je n'ai pas compris, c'est le prix des travaux.", explanation: "\"Ce que\" (object of \"compris\") for an idea, then \"c'est\"." },
      { type: "listen-choose", audio: "Ceux-ci sont à nous, ceux-là sont aux Martin.", question: "What does it mean?", options: ["These are ours, those are the Martins'.", "These are the Martins', those are ours.", "This one is ours, that one is the Martins'.", "These are for us, those are for the Martins."], correctIndex: 0, explanation: "\"Être à\" shows ownership: \"à nous\", \"aux Martin\"." },
      { type: "speak", text: "Ces poubelles, ce sont les vôtres ?", prompt: "Ask a neighbour politely if these bins are theirs.", explanation: "\"Les vôtres\" agrees with \"les poubelles\" (feminine plural)." },
      { type: "dictation", audio: "Ceux du troisième ne sont pas venus.", explanation: "\"Ceux du troisième\" = the people on the third floor." },
    ],
  },
  {
    slug: "b1-contrast-clinic-mon-le-mien-ce-celui",
    level: "FR-B1",
    number: 10,
    title: "Contrast Clinic: Mon / Le mien, Ce / Celui",
    summary: "Keep adjectives and pronouns apart: mon vélo vs le mien, cette robe vs celle-ci, ces gens vs ceux-là, and ça vs celui.",
    duration: "13 min",
    sections: [
      {
        heading: "Mon vélo / le mien",
        body: [
          "\"Mon, ma, mes\" are adjectives: they always sit before a noun. \"Le mien, la mienne...\" are pronouns: they replace the noun and stand alone with their article. You can't mix them: *le mien vélo, *c'est mien, *ce vélo est mon are all wrong.",
          "English has the same split (my bike / mine), so the trap isn't the idea, it's the shape: the pronoun has an article and agrees with the thing, the adjective has no article. Before a feminine noun starting with a vowel, the adjective is \"mon\" (\"mon amie\"), but the pronoun stays feminine: \"la mienne\".",
        ],
        examples: [
          { es: "C'est mon vélo. — Non, c'est le mien !", en: "It's my bike. — No, it's mine!" },
          { es: "Mon amie Clara vient ce soir. Et la tienne ?", en: "My friend Clara's coming tonight. What about yours?" },
          { es: "Ta solution est meilleure que la mienne.", en: "Your solution is better than mine." },
          { es: "Ses parents sont plus stricts que les miens.", en: "His parents are stricter than mine." },
          { es: "Notre appartement est au cinquième ; le leur est au rez-de-chaussée.", en: "Our flat is on the fifth floor; theirs is on the ground floor." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Which sentence is correct?", options: ["Ce vélo est le mien.", "Ce vélo est mon.", "C'est le mien vélo.", "Ce vélo est mien."], correctIndex: 0, explanation: "On its own, the pronoun needs its article: \"le mien\". \"Mon\" must be followed by a noun." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "C'est le mien sac.", answer: "C'est mon sac.", altAnswers: ["C'est le mien."], explanation: "Before a noun you need the adjective \"mon\"; \"le mien\" only stands alone." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Your car is faster than mine. (to a friend)", answer: "Ta voiture est plus rapide que la mienne.", explanation: "Adjective \"ta\" before the noun; pronoun \"la mienne\" (feminine, like \"voiture\") on its own." },
        ],
      },
      {
        heading: "Cette robe / celle-ci",
        body: [
          "\"Ce, cet, cette, ces\" are demonstrative adjectives: \"cette robe\" (this dress). \"Celui, celle, ceux, celles\" are pronouns: \"celle-ci\" (this one). The adjective needs a noun; the pronoun needs -ci / -là, de or a relative.",
          "To make the adjective precise, add -ci or -là to the noun: \"cette robe-ci\", \"ce jour-là\". So \"-ci / -là\" can follow both, but *ce-ci and *Je veux cette. are impossible.",
          "Keep \"ces\" and \"ceux\" apart: \"ces gens\" (these people), \"ceux-là\" (those ones). They sound different: \"ces\" rhymes with \"les\", \"ceux\" with \"deux\".",
        ],
        examples: [
          { es: "Cette robe est jolie, mais celle-ci est plus élégante.", en: "This dress is pretty, but this one's more elegant." },
          { es: "Ce jour-là, il pleuvait.", en: "That day, it was raining." },
          { es: "Ces gens sont gentils, mais ceux-là sont bruyants.", en: "These people are nice, but those ones are noisy." },
          { es: "Cet hôtel est complet ; essaie celui d'en face.", en: "This hotel is full; try the one opposite." },
          { es: "Je ne connais pas ces chansons, mais celles d'hier étaient super.", en: "I don't know these songs, but yesterday's were great." },
          { es: "Ces chaussures-ci ou celles-là ?", en: "These shoes or those ones?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "This restaurant is closed; try the one next door. (to a friend)", answer: "Ce restaurant est fermé ; essaie celui d'à côté.", altAnswers: ["Ce restaurant est fermé, essaie celui d'à côté.", "Ce restaurant est fermé ; essaye celui d'à côté."], explanation: "\"Ce\" + noun (adjective); \"celui d'à côté\" (pronoun + de) for the one next door." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "These glasses are too big, but [those ones] are perfect.", sentence: "Ces lunettes sont trop grandes, mais ___ sont parfaites.", answer: "celles-là", explanation: "\"Ces\" + noun is the adjective; \"celles-là\" is the pronoun for feminine plural things." },
          { type: "listen-choose", audio: "Ceux-là sont bruyants.", question: "What did you hear?", options: ["Ceux-là sont bruyants.", "Ces gens sont bruyants.", "Celui-là est bruyant.", "Ces deux sont bruyants."], correctIndex: 0, explanation: "\"Ceux\" has the vowel of \"deux\"; \"ces\" has the vowel of \"les\"." },
        ],
      },
      {
        heading: "Ça or celui?",
        body: [
          "If there's a noun in mind, use the agreeing pronoun: \"Quel gâteau ? — Celui-là.\" If there's no noun, because you don't know the name of the thing or you're talking about an idea, use the neutral \"ça\": \"Je voudrais ça, s'il vous plaît\" (pointing at a pastry you can't name).",
          "\"C'est celui-là\" picks one item out of several of the same kind; \"C'est ça\" means that's it, that's right: \"Vous habitez au 12 ? — C'est ça.\"",
        ],
        examples: [
          { es: "Je voudrais ça, s'il vous plaît, le gâteau vert.", en: "I'd like that, please, the green cake." },
          { es: "Quel gâteau ? — Celui-là, à côté des tartes.", en: "Which cake? — That one, next to the tarts." },
          { es: "Vous habitez au 12 ? — C'est ça.", en: "You live at number 12? — That's right." },
          { es: "J'adore ça !", en: "I love it!" },
          { es: "De ces deux appartements, je préfère celui-ci.", en: "Of these two flats, I prefer this one." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "A friend checks: « Tu pars lundi ? » That's right. What do you say?", options: ["C'est ça.", "C'est celui-là.", "C'est celui.", "C'est le mien."], correctIndex: 0, explanation: "\"C'est ça\" = that's right. \"Celui-là\" would pick out one thing from several." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Of these two films, I prefer that one.", answer: "De ces deux films, je préfère celui-là.", explanation: "A specific noun (\"film\") is in mind, so \"celui-là\", not \"ça\"." },
          { type: "speak", text: "Du café ? Non merci, je n'aime pas ça.", prompt: "Say it in French: Coffee? No thanks, I don't like it.", tip: "Je n'aime pas ça: stress the last syllable.", explanation: "For something in general (coffee as a drink), French uses \"ça\", not \"le\" or \"celui\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Her brothers are taller than mine.", answer: "Ses frères sont plus grands que les miens.", explanation: "\"Ses\" (adjective) + noun; \"les miens\" (pronoun) for masculine plural." },
      { type: "translate", direction: "en-es", prompt: "Replace the second « pull » with a pronoun.", source: "Ce pull est chaud, mais ce pull-ci est plus doux.", answer: "Ce pull est chaud, mais celui-ci est plus doux.", explanation: "\"Ce pull-ci\" (adjective + noun + ci) becomes the pronoun \"celui-ci\"." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "[My] school is far away. What about yours?", sentence: "___ école est loin. Et la tienne ?", answer: "Mon", explanation: "Before a feminine noun starting with a vowel, the adjective is \"mon\"; the pronoun stays \"la tienne\"." },
      { type: "multiple-choice", question: "At the bakery you point at a pastry whose name you don't know. What do you say?", options: ["Je voudrais ça, s'il vous plaît.", "Je voudrais celui, s'il vous plaît.", "Je voudrais cette, s'il vous plaît.", "Je voudrais le mien, s'il vous plaît."], correctIndex: 0, explanation: "No noun in mind: neutral \"ça\". \"Celui\" and \"cette\" can't stand alone." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "That evening, we were tired.", answer: "Ce soir-là, nous étions fatigués.", altAnswers: ["Ce soir-là, on était fatigués.", "Ce soir-là, nous étions fatiguées.", "Ce soir-là, on était fatiguées."], explanation: "Adjective \"ce\" + noun + \"-là\" = that evening; imparfait for the state." },
      { type: "word-order", prompt: "Put the words in order to say: Our flat is bigger than theirs.", words: ["Notre", "appartement", "est", "plus grand", "que", "le leur."], translation: "Our flat is bigger than theirs.", explanation: "Adjective \"notre\" + noun, pronoun \"le leur\"." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Je veux cette, pas celle-là.", answer: "Je veux celle-ci, pas celle-là.", explanation: "\"Cette\" is an adjective and needs a noun; on its own, this one is \"celle-ci\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "This bag or that one?", answer: "Ce sac-ci ou celui-là ?", altAnswers: ["Ce sac ou celui-là ?"], explanation: "Adjective + noun (+ \"-ci\"), then the pronoun \"celui-là\"." },
      { type: "listen-choose", audio: "C'est celui-là.", question: "What does it mean?", options: ["It's that one.", "That's right.", "It's mine.", "It's that day."], correctIndex: 0, explanation: "\"Celui-là\" = that one (masculine). That's right would be \"c'est ça\"." },
      { type: "speak", text: "Ces gâteaux-ci ou ceux-là ?", prompt: "Ask in French: These cakes or those ones?", tip: "Ces rhymes with les; ceux rhymes with deux.", explanation: "Adjective \"ces\" + noun, then the pronoun \"ceux-là\"." },
      { type: "dictation", audio: "Ces gens-là sont plus bruyants que ceux d'en haut.", explanation: "\"Ces\" (adjective) vs \"ceux\" (pronoun) sound different." },
    ],
  },
  {
    slug: "b1-quick-round-le-lui-la-leur",
    level: "FR-B1",
    number: 11,
    title: "Quick Round: Le lui, La leur, Les leur",
    summary: "Fire through double object pronouns in every tense, and learn to tell le leur (it to them) from le leur (theirs).",
    duration: "12 min",
    sections: [
      {
        heading: "Le lui, la leur, les leur at speed",
        body: [
          "A quick reminder of Unit 23: with third persons, the direct object comes first: \"le / la / les\" + \"lui / leur\". In compound tenses both go before the auxiliary, and the participle agrees with \"la\" or \"les\": \"Je la lui ai envoyée\", \"Je les leur ai rendus\".",
          "\"Leur\" as an indirect pronoun (to them) never takes an -s, even when \"les\" is next to it: \"Je les leur ai donnés\", never *les leurs.",
        ],
        examples: [
          { es: "La lettre ? Je la lui ai envoyée hier.", en: "The letter? I sent it to him yesterday." },
          { es: "Les clés ? Je les leur ai rendues ce matin.", en: "The keys? I gave them back to them this morning." },
          { es: "Le cadeau, je le lui donnerai demain.", en: "The present, I'll give it to her tomorrow." },
          { es: "Les photos, tu les leur as montrées ?", en: "Did you show them the photos?" },
          { es: "Je ne le lui ai pas encore dit.", en: "I haven't told him yet." },
          { es: "Je vais la leur expliquer.", en: "I'm going to explain it to them." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "The tickets (les billets)? I gave them to them yesterday. Which is right?", options: ["Les billets ? Je les leur ai donnés hier.", "Les billets ? Je les leurs ai donnés hier.", "Les billets ? Je leur les ai donnés hier.", "Les billets ? Je les leur ai donné hier."], correctIndex: 0, explanation: "\"Les\" before \"leur\"; \"leur\" (to them) never takes -s; \"donnés\" agrees with \"les billets\", placed before the auxiliary." },
          { type: "translate", direction: "en-es", prompt: "Change it to the passé composé. (la = la recette)", source: "Je la lui explique.", answer: "Je la lui ai expliquée.", explanation: "The pair \"la lui\" goes before the auxiliary, and the participle agrees with \"la\": \"expliquée\"." },
        ],
      },
      {
        heading: "Me le, te la, nous les: first and second persons",
        body: [
          "With me, te, nous, vous, the order flips: the indirect pronoun comes first. \"Il me l'a prêté\", \"Je te la rendrai\", \"Elle nous les a montrées\", \"Je vous l'envoie\".",
          "In the negative, \"ne\" goes before the whole block and \"pas\" after the auxiliary or the verb: \"Il ne me l'a pas rendu\". Before an infinitive, the block goes before the infinitive: \"Je peux te le prêter\".",
        ],
        examples: [
          { es: "Mon livre ? Il ne me l'a pas rendu.", en: "My book? He hasn't given it back to me." },
          { es: "Ta veste, je te la rendrai samedi.", en: "Your jacket, I'll give it back to you on Saturday." },
          { es: "Elle nous les a montrées, ses photos de vacances.", en: "She showed us her holiday photos." },
          { es: "Je vous l'envoie tout de suite.", en: "I'll send it to you right away." },
          { es: "Si tu veux mon vélo, je peux te le prêter.", en: "If you want my bike, I can lend it to you." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Your notes? I'll send them to you tonight. (to a friend)", answer: "Tes notes ? Je te les envoie ce soir.", altAnswers: ["Tes notes ? Je te les enverrai ce soir.", "Tes notes ? Je vais te les envoyer ce soir."], explanation: "With \"te\", the indirect pronoun comes first: \"te les\"." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Il le m'a prêté.", answer: "Il me l'a prêté.", explanation: "With me, te, nous, vous, the order flips: \"me\" comes before \"le\", which elides to \"l'\"." },
          { type: "listen-choose", audio: "Je te la rendrai samedi.", question: "What does it mean?", options: ["I'll give it back to you on Saturday.", "I gave it back to you on Saturday.", "I'll give it back to her on Saturday.", "You'll give it back to me on Saturday."], correctIndex: 0, explanation: "\"Te\" = to you, \"la\" = it; \"rendrai\" is the future." },
        ],
      },
      {
        heading: "Le leur: it to them, or theirs?",
        body: [
          "\"Le leur\" can be two very different things. Before a conjugated verb or an auxiliary, it's two object pronouns: \"Je le leur ai dit\" (I told them). After a verb, after \"c'est\" or as a subject, it's the possessive pronoun theirs: \"C'est le leur\", \"Le leur est plus grand\".",
          "The plural shows the difference in writing: the possessive is \"les leurs\" (theirs, plural things), but the pronoun pair is always \"les leur\" (them to them): \"Ces vélos ? Ce sont les leurs.\" vs \"Ces vélos ? Je les leur ai vendus.\"",
        ],
        examples: [
          { es: "Le code ? Je le leur ai envoyé par SMS.", en: "The code? I sent it to them by text." },
          { es: "Ce chien, c'est le leur.", en: "This dog is theirs." },
          { es: "Ces vélos ? Ce sont les leurs.", en: "These bikes? They're theirs." },
          { es: "Ces vélos ? Je les leur ai vendus.", en: "These bikes? I sold them to them." },
          { es: "Notre jardin est petit, le leur est immense.", en: "Our garden is small; theirs is huge." },
          { es: "Leur maison ? Ils ne nous la louent pas, ils la leur louent.", en: "Their house? They're not renting it to us, they're renting it to them." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "These chairs? I lent them to them. Which is right?", options: ["Ces chaises ? Je les leur ai prêtées.", "Ces chaises ? Je les leurs ai prêtées.", "Ces chaises ? Je leur les ai prêtées.", "Ces chaises ? Ce sont les leurs prêtées."], correctIndex: 0, explanation: "Before the auxiliary, \"les leur\" are object pronouns, and \"leur\" never takes -s. \"Les leurs\" would mean theirs." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "This car? It's theirs.", answer: "Cette voiture ? C'est la leur.", altAnswers: ["Cette voiture ? Elle est à eux.", "Cette voiture ? Elle est à elles."], explanation: "After \"c'est\", \"la leur\" is the possessive pronoun: theirs, feminine like \"voiture\"." },
          { type: "speak", text: "Je le leur ai expliqué hier.", prompt: "Say it in French: I explained it to them yesterday.", tip: "Le leur: two short syllables, no pause between them.", explanation: "Two object pronouns before the auxiliary: it, to them." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Did you give them the keys? (to a friend)", answer: "Tu leur as donné les clés ?", altAnswers: ["Les clés, tu les leur as données ?", "Est-ce que tu leur as donné les clés ?", "Tu les leur as données, les clés ?"], explanation: "\"Leur\" = to them; with \"les\" too: \"tu les leur as données\" (agreement with \"les clés\")." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "I haven't sent it to her yet. (the file: le dossier)", answer: "Je ne le lui ai pas encore envoyé.", altAnswers: ["Je ne lui ai pas encore envoyé."], explanation: "\"Le lui\" before the auxiliary; \"ne... pas encore\" around it." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "The cake, [I'll bring it to them] tonight.", sentence: "Le gâteau, ___ ce soir.", answer: "je le leur apporterai", altAnswers: ["je vais le leur apporter", "je le leur apporte"], explanation: "\"Le\" before \"leur\" with third persons; future \"apporterai\"." },
      { type: "multiple-choice", question: "What does « C'est le leur » mean?", options: ["It's theirs.", "It's for them.", "Give it to them.", "I told them."], correctIndex: 0, explanation: "After \"c'est\", \"le leur\" is the possessive pronoun: theirs." },
      { type: "translate", direction: "en-es", prompt: "Change it to « pouvoir » + infinitive: I can...", source: "Je te la prête.", answer: "Je peux te la prêter.", explanation: "With \"pouvoir\" + infinitive, the block \"te la\" moves before the infinitive." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Je leur la donnerai demain.", answer: "Je la leur donnerai demain.", explanation: "With third persons the direct object comes first: \"la leur\", never \"leur la\"." },
      { type: "word-order", prompt: "Put the words in order to say: We're going to give them back to you.", words: ["On", "va", "vous", "les", "rendre."], translation: "We're going to give them back to you.", explanation: "Before the infinitive: \"vous\" then \"les\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Our car is old; theirs is brand new.", answer: "Notre voiture est vieille ; la leur est toute neuve.", altAnswers: ["Notre voiture est vieille, la leur est toute neuve.", "Notre voiture est vieille ; la leur est neuve."], explanation: "As a subject, \"la leur\" is the possessive: theirs." },
      { type: "listen-choose", audio: "Je les leur ai vendus.", question: "What does it mean?", options: ["I sold them to them.", "They're theirs.", "I sold theirs.", "They sold them to me."], correctIndex: 0, explanation: "Before the auxiliary, \"les leur\" are object pronouns: them, to them." },
      { type: "speak", text: "Cette maison, c'est la leur.", prompt: "Say it in French: This house is theirs.", explanation: "After \"c'est\", \"la leur\" = theirs." },
      { type: "dictation", audio: "Les photos, je les leur ai montrées.", explanation: "\"Leur\" without -s; \"montrées\" agrees with \"les photos\"." },
    ],
  },
  {
    slug: "b1-choose-explain-le-sien-or-celui-de",
    level: "FR-B1",
    number: 12,
    title: "Choose and Explain: Le sien or Celui de Marie?",
    summary: "When le sien could mean his or hers, clear it up with celui de Marie or le sien à elle, and choose the clearest version every time.",
    duration: "13 min",
    sections: [
      {
        heading: "When le sien is ambiguous",
        body: [
          "\"Le sien\" agrees with the thing, so it says nothing about the owner's gender. Usually context is enough. But when two people of different sexes are in the sentence, it can be unclear: \"Paul a pris la voiture de Marie parce que la sienne était en panne\" — whose car had broken down? Logically Paul's, but a listener may hesitate.",
          "The fix is to name the owner with \"celui de\" / \"celle de\": \"Paul a pris la voiture de Marie parce que celle de Paul était en panne\", or rephrase: \"parce que sa propre voiture était en panne\" (\"propre\" = own).",
        ],
        examples: [
          { es: "Paul a emprunté la voiture de Marie parce que la sienne était en panne.", en: "Paul borrowed Marie's car because his had broken down." },
          { es: "Paul a pris sa propre voiture, pas celle de Marie.", en: "Paul took his own car, not Marie's." },
          { es: "Léa a corrigé le rapport de Hugo, puis le sien.", en: "Lea corrected Hugo's report, then her own." },
          { es: "Thomas a apporté son gâteau et celui de sa sœur.", en: "Thomas brought his cake and his sister's." },
          { es: "Ce n'est pas le livre de Karim, c'est celui de Sophie.", en: "It's not Karim's book, it's Sophie's." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Inès brought her salad and her brother's. Which is clearest?", options: ["Inès a apporté sa salade et celle de son frère.", "Inès a apporté sa salade et la sienne.", "Inès a apporté sa salade et le sien.", "Inès a apporté sa salade et celui de son frère."], correctIndex: 0, explanation: "\"La sienne\" can't say whose; \"celle de son frère\" names the owner. \"Salade\" is feminine, so \"celle\", not \"celui\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Léa used her own laptop, not Hugo's.", answer: "Léa a utilisé son propre ordinateur, pas celui de Hugo.", altAnswers: ["Léa a utilisé son propre ordinateur portable, pas celui de Hugo.", "Léa a utilisé son ordinateur à elle, pas celui de Hugo."], explanation: "\"Son propre ordinateur\" (her own) and \"celui de Hugo\" (Hugo's) leave no doubt." },
        ],
      },
      {
        heading: "Le sien à lui, le sien à elle",
        body: [
          "In speech, French often adds \"à lui\" or \"à elle\" to a possessive to make the owner explicit: \"C'est son idée à elle, pas la sienne à lui\" (it's her idea, not his). It works with adjectives too: \"sa voiture à elle\".",
          "This is also how French adds emphasis where English stresses the word: \"C'est MON idée !\" can be \"C'est mon idée à moi !\". With \"leur\", use \"à eux\" / \"à elles\": \"leur maison à eux\".",
        ],
        examples: [
          { es: "C'est son idée à elle, pas la sienne à lui.", en: "It's her idea, not his." },
          { es: "Ils ont pris sa voiture à elle.", en: "They took her car." },
          { es: "Chacun a sa chambre : la sienne à lui est au rez-de-chaussée.", en: "Each has their own room: his is on the ground floor." },
          { es: "C'est mon idée à moi !", en: "It's MY idea!" },
          { es: "Ils ont enfin leur maison à eux.", en: "They finally have a house of their own." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "It's his flat, not hers.", answer: "C'est son appartement à lui, pas le sien à elle.", altAnswers: ["C'est son appartement à lui, pas son appartement à elle.", "C'est son appartement à lui, pas le sien."], explanation: "\"À lui\" and \"à elle\" make the owner explicit when \"son\" and \"le sien\" can't." },
          { type: "fill-blank", prompt: "Write the French for the bold words.", en: "We finally have a garden [of our own].", sentence: "Nous avons enfin notre jardin ___.", answer: "à nous", explanation: "\"À nous\" after the possessive stresses the owners: our own." },
          { type: "listen-choose", audio: "Elle a pris son vélo à lui.", question: "What does it mean?", options: ["She took his bike.", "She took her bike.", "She took their bike.", "She took the bike to him."], correctIndex: 0, explanation: "\"À lui\" tells you the bike is his, even though \"son\" alone could mean his or hers." },
        ],
      },
      {
        heading: "Choosing the clearest version",
        body: [
          "Rule of thumb: if only one possible owner of that gender and number is around, \"le sien\" is perfect and the most natural. If two people could be meant, name the owner (\"celui de Marie\") or add \"à lui / à elle\". In formal writing, prefer naming or \"propre\" over \"à lui\".",
          "Don't over-correct: \"Marie a perdu son téléphone, alors elle a emprunté celui de sa mère\" is ideal, but \"Marie a oublié son parapluie, alors elle a pris le mien\" needs no clarification at all.",
        ],
        examples: [
          { es: "Marie a perdu son téléphone, alors elle a emprunté celui de sa mère.", en: "Marie lost her phone, so she borrowed her mother's." },
          { es: "J'ai oublié mon parapluie, alors j'ai pris le sien.", en: "I forgot my umbrella, so I took his." },
          { es: "Hugo et Léa ont chacun un vélo ; celui de Léa est neuf.", en: "Hugo and Lea each have a bike; Lea's is new." },
          { es: "Le directeur a lu le rapport de Mme Roux, puis celui de M. Petit.", en: "The director read Mme Roux's report, then M. Petit's." },
          { es: "Elle préfère sa propre cuisine à celle de sa belle-mère.", en: "She prefers her own cooking to her mother-in-law's." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Karim and Julie each have a car; Julie's is red.", answer: "Karim et Julie ont chacun une voiture ; celle de Julie est rouge.", altAnswers: ["Karim et Julie ont chacun une voiture, celle de Julie est rouge."], explanation: "Two possible owners, so name her: \"celle de Julie\"." },
          { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Marie a oublié son écharpe, alors elle a pris le de sa sœur.", answer: "Marie a oublié son écharpe, alors elle a pris celle de sa sœur.", explanation: "Her sister's = \"celle de sa sœur\": the article alone can't stand for the noun, and \"écharpe\" is feminine." },
          { type: "speak", text: "Il a emprunté celle de son père.", prompt: "Say it in French: He borrowed his father's. (the car)", tip: "Celle de: two quick syllables, sel-de.", explanation: "\"Celle de son père\" = his father's; \"voiture\" is feminine." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "It's not Julien's jacket, it's Camille's.", answer: "Ce n'est pas la veste de Julien, c'est celle de Camille.", explanation: "Camille's = \"celle de Camille\" (\"veste\" is feminine)." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "Hugo broke his glasses, so he borrowed his brother's.", answer: "Hugo a cassé ses lunettes, alors il a emprunté celles de son frère.", altAnswers: ["Hugo a cassé ses lunettes, donc il a emprunté celles de son frère."], explanation: "\"Celles de son frère\" names the owner; \"lunettes\" is feminine plural." },
      { type: "fill-blank", prompt: "Write the French for the bold words.", en: "He prefers his own bike to [his cousin's].", sentence: "Il préfère son propre vélo ___.", answer: "à celui de son cousin", altAnswers: ["à celui de sa cousine"], explanation: "\"Préférer A à B\", with \"celui de\" for the masculine \"vélo\"." },
      { type: "multiple-choice", question: "Hugo read Léa's message, then his own. Which is right and clear?", options: ["Hugo a lu le message de Léa, puis le sien.", "Hugo a lu le message de Léa, puis la sienne.", "Hugo a lu le message de Léa, puis celui.", "Hugo a lu le message de Léa, puis le leur."], correctIndex: 0, explanation: "\"Message\" is masculine: \"le sien\". After \"puis\" it can only be Hugo's own, so it's clear." },
      { type: "translate", direction: "en-es", prompt: "Make it emphatic with « à moi ».", source: "C'est ma place !", answer: "C'est ma place à moi !", explanation: "\"À moi\" after the noun adds the stress English gives with its voice: it's MY seat!" },
      { type: "translate", direction: "en-es", prompt: "Change « le sien » so it's clear the bike is Marie's.", source: "Marie a pris le vélo de Lucas parce que le sien était crevé.", answer: "Marie a pris le vélo de Lucas parce que son propre vélo était crevé.", altAnswers: ["Marie a pris le vélo de Lucas parce que celui de Marie était crevé.", "Marie a pris le vélo de Lucas parce que son vélo à elle était crevé."], explanation: "With two possible owners, \"le sien\" is unclear: \"son propre vélo\" or \"son vélo à elle\" settles it." },
      { type: "translate", direction: "en-es", prompt: "Correct the sentence.", source: "Paul a apporté son vin et la de son voisin.", answer: "Paul a apporté son vin et celui de son voisin.", explanation: "His neighbour's = \"celui de son voisin\" (\"vin\" is masculine)." },
      { type: "word-order", prompt: "Put the words in order to say: It's their house, not ours.", words: ["C'est", "leur", "maison", "à eux,", "pas", "la", "nôtre."], translation: "It's their house, not ours.", explanation: "\"Leur maison à eux\" stresses the owners; \"la nôtre\" for the feminine \"maison\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into French.", source: "My parents finally have a garden of their own.", answer: "Mes parents ont enfin leur jardin à eux.", altAnswers: ["Mes parents ont enfin leur propre jardin."], explanation: "\"Leur jardin à eux\" or \"leur propre jardin\" = of their own." },
      { type: "listen-choose", audio: "C'est son idée à elle, pas la sienne à lui.", question: "What does it mean?", options: ["It's her idea, not his.", "It's his idea, not hers.", "It's their idea, not his.", "It's her idea, not hers."], correctIndex: 0, explanation: "\"À elle\" and \"à lui\" mark the owners." },
      { type: "speak", text: "C'est son bureau à elle, pas le tien.", prompt: "Say it in French: It's her desk, not yours. (to a friend)", explanation: "\"Son bureau à elle\" makes the owner clear; \"le tien\" = yours." },
    ],
  },
];
