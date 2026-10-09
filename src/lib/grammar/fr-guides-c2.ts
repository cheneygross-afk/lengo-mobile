// Synced from cheneygross-afk/lengo:src/lib/grammar/fr-guides-c2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { FrGrammarGuide } from "./fr-types";

// French grammar guides, C2 (see ./fr-types.ts and docs/french-course/guide-brief.md).
export const FR_C2_GUIDES: FrGrammarGuide[] = [
  {
    slug: "french-legal-and-administrative-style",
    title: "The Grammar of Legal and Administrative French",
    description:
      "Reading and writing French contracts, official letters and decisions: je soussigné, vu / considérant / attendu que, the deontic present and future, ledit and susmentionné, impersonal passives, absolute participles and legal conditions (à défaut de, sous peine de).",
    level: "C2",
    intro: [
      "Legal and administrative French is a register with its own grammar. A lease, a letter from the tax office, a court decision or a town-hall order uses fixed formulas (\"je soussigné\", \"il est convenu ce qui suit\"), present and future tenses that express obligation rather than time, demonstratives like \"ledit\" that English contracts would express with the said, and long sentences held together by participles and nominalisations.",
      "None of it is optional decoration. These forms exist to be precise, impersonal and binding, and they're the same across France, Belgium, Switzerland and Québec with small local variations. At C2 you're expected to read them without help and to write a correct formal request or a simple clause yourself.",
      "This guide covers the grammar rather than the vocabulary: how these texts are built, what each structure commits the reader to, and how to rephrase them in plain French when you need to explain them.",
    ],
    sections: [
      {
        heading: "Frozen formulas: je soussigné, vu, considérant",
        body: [
          "Official declarations open with \"Je soussigné(e)\" + name, followed by a verb: \"Je soussignée Claire Martin, demeurant au 12 rue des Lilas à Nantes, certifie sur l'honneur que...\" \"Soussigné\" agrees with the signatory. Contracts introduce their terms with \"Il a été convenu ce qui suit\" or \"Il est convenu et arrêté ce qui suit\", a frozen relative with \"ce qui\" and no antecedent.",
          "Decisions by administrations and courts list their grounds before the decision itself, each in a fixed form: \"Vu\" + the laws relied on (invariable, with no verb), \"Considérant que\" + indicative for each reason, and in court judgments \"Attendu que\". Then comes the operative part, often in capitals: \"ARRÊTE\", \"DÉCIDE\", \"PAR CES MOTIFS\".",
        ],
        examples: [
          { fr: "Je soussigné Paul Durand déclare avoir pris connaissance du règlement.", en: "I, the undersigned Paul Durand, declare that I have read the regulations." },
          { fr: "Il a été convenu ce qui suit.", en: "It has been agreed as follows." },
          { fr: "Vu le Code général des collectivités territoriales,", en: "Having regard to the General Code of Local Authorities," },
          { fr: "Considérant que les travaux présentent un danger pour la circulation,", en: "Whereas the works pose a danger to traffic," },
          { fr: "Le maire arrête : la rue Victor-Hugo sera fermée du 3 au 7 mai.", en: "The mayor orders: Rue Victor-Hugo will be closed from 3 to 7 May." },
        ],
      },
      {
        heading: "The deontic present and future: obligation without devoir",
        body: [
          "In contracts and regulations, the present and the future express obligations, not facts or predictions. \"Le locataire s'engage à entretenir le logement\" and \"Le preneur devra s'acquitter du loyer le 5 de chaque mois\" both bind the tenant. \"Le présent contrat prend effet le 1er mars\" is a decision, not a description.",
          "This is why English shall has no direct equivalent: French uses the plain present (\"le vendeur garantit\"), the future (\"le prestataire fournira\"), \"devoir\" in the future (\"devra\") or \"est tenu de\" (is required to). Prohibitions use \"il est interdit de\" or \"ne pourra\" + infinitive.",
        ],
        examples: [
          { fr: "Le locataire s'engage à souscrire une assurance habitation.", en: "The tenant undertakes to take out home insurance." },
          { fr: "Le loyer est payable d'avance le 5 de chaque mois.", en: "Rent is payable in advance on the 5th of each month." },
          { fr: "Le prestataire devra remettre son rapport avant le 30 juin.", en: "The contractor shall submit the report before 30 June." },
          { fr: "L'employeur est tenu d'informer le salarié par écrit.", en: "The employer is required to inform the employee in writing." },
          { fr: "Aucune modification ne pourra être apportée sans l'accord écrit des parties.", en: "No amendment may be made without the written agreement of the parties." },
        ],
      },
      {
        heading: "Ledit, susmentionné and the impersonal passive",
        body: [
          "To refer back without ambiguity, legal French fuses the article with \"dit\": \"ledit\", \"ladite\", \"lesdits\", \"lesdites\", and with \"à\" or \"de\": \"audit\", \"auxdits\", \"dudit\", \"desdites\". It means the said or the aforementioned and agrees like an adjective: \"ladite convention\", \"le délai prévu audit article\". \"Susmentionné\", \"susvisé\" and \"précité\" do the same job after the noun. Outside legal texts, \"ledit\" is used humorously.",
          "Administrations speak impersonally. The impersonal passive puts \"il\" in subject position and the content after the verb: \"il est porté à votre connaissance que\" (you are hereby informed that), \"il a été procédé à la vérification de votre dossier\", \"il est rappelé que\". Combined with nominalisation (\"procéder à la vérification\" rather than \"vérifier\"), it removes any human agent.",
        ],
        examples: [
          { fr: "Ladite convention entrera en vigueur le 1er janvier.", en: "The said agreement will come into force on 1 January." },
          { fr: "Les sommes dues au titre dudit contrat seront remboursées.", en: "Sums owed under the said contract will be refunded." },
          { fr: "Il est porté à votre connaissance que votre demande a été rejetée.", en: "Please be advised that your application has been rejected." },
          { fr: "Il a été procédé à la vérification de votre déclaration.", en: "Your return has been checked." },
          { fr: "Le bien susmentionné est libre de toute occupation.", en: "The aforementioned property is unoccupied." },
        ],
      },
      {
        heading: "Conditions and consequences in legal style",
        body: [
          "Legal French expresses conditions with compact prepositional phrases rather than \"si\". \"À défaut de\" + noun (failing), \"faute de\" + noun or infinitive (for lack of), \"sous réserve de\" (subject to), \"sous peine de\" (on pain of), \"faute de quoi\" or \"à défaut\" (failing which). In clauses, \"à moins que\" + subjunctive (with optional \"ne\") and \"sauf si\" + indicative mark the exception.",
          "Absolute participle clauses set out conditions or time limits concisely: \"le délai expiré\", \"la présente ayant été notifiée\", \"le préavis respecté\". The pronominal passive states automatic effects: \"Le contrat se renouvelle par tacite reconduction.\"",
        ],
        examples: [
          { fr: "À défaut de paiement dans les trente jours, des pénalités seront appliquées.", en: "Failing payment within thirty days, penalties will be applied." },
          { fr: "Le dossier doit être complet, faute de quoi il ne sera pas instruit.", en: "The file must be complete, failing which it will not be processed." },
          { fr: "Vous êtes tenu de répondre sous peine d'une amende de 135 euros.", en: "You are required to reply, on pain of a 135-euro fine." },
          { fr: "Le délai de rétractation expiré, la vente devient définitive.", en: "Once the cooling-off period has expired, the sale becomes final." },
          { fr: "Le contrat se renouvelle par tacite reconduction, sauf si l'une des parties le résilie.", en: "The contract renews automatically unless one of the parties terminates it." },
          { fr: "Sous réserve de l'accord de la banque, la vente aura lieu en juin.", en: "Subject to the bank's approval, the sale will take place in June." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Je soussigné, Marie Lefèvre, je certifie que...",
        right: "Je soussignée Marie Lefèvre certifie que...",
        why: "\"Je\" is already the subject; don't repeat it. \"Soussigné\" agrees with the signatory, so a woman writes \"soussignée\".",
      },
      {
        wrong: "le dit contrat",
        right: "ledit contrat",
        why: "\"Ledit\", \"ladite\", \"lesdits\" are written as one word, and contract with \"à\" and \"de\": \"audit\", \"dudit\".",
      },
      {
        wrong: "Le locataire doit payer le loyer ASAP.",
        right: "Le locataire devra s'acquitter du loyer dans les meilleurs délais.",
        why: "Anglicisms and abbreviations have no place in a legal text, and the future with a precise verb (\"s'acquitter de\") is the expected register.",
      },
      {
        wrong: "Considérant que les travaux soient dangereux,",
        right: "Considérant que les travaux sont dangereux,",
        why: "\"Considérant que\" states a ground as established fact, so it takes the indicative.",
      },
    ],
    faqs: [
      {
        q: "Is \"vu\" an agreeing participle in \"vu les circonstances\"?",
        a: "No. Placed before the noun, \"vu\" works as a preposition (given, in view of) and is invariable, like \"excepté\" and \"y compris\".",
      },
      {
        q: "How do I explain a legal sentence in plain French?",
        a: "Put the agent back and turn nouns into verbs: \"il a été procédé à la vérification de votre dossier\" becomes \"nous avons vérifié votre dossier\". \"Ledit\" becomes \"ce\".",
      },
      {
        q: "Should I use the future or the present in a contract I'm drafting?",
        a: "Both are correct and binding. The present (\"le prestataire s'engage à\") sounds more immediate and is the most common for commitments; the future (\"le prestataire devra\") is common for duties that apply later.",
      },
    ],
    related: ["impersonal-constructions-and-passive-alternatives", "nominalisation-in-french", "french-registers-spoken-to-soutenu"],
    lessons: [
      "c2-legal-french-1",
      "c2-legal-french-2",
      "c2-legal-french-3",
      "c2-legal-french-4",
      "c2-legal-french-5",
      "c2-spiral-legal-grammar",
    ],
  },
  {
    slug: "grammar-of-french-proverbs",
    title: "The Grammar of French Proverbs: Pierre Qui Roule, Qui Vivra Verra",
    description:
      "Why French proverbs drop articles, use qui without an antecedent, keep ne without pas and invert their word order, how the generic present and future work, and how to slip a proverb into conversation naturally.",
    level: "C2",
    intro: [
      "French proverbs are fossils. \"Pierre qui roule n'amasse pas mousse\", \"Qui vivra verra\", \"Il n'est pire sourd que celui qui ne veut pas entendre\": each preserves grammar that was normal several centuries ago and has since disappeared from ordinary French. Nouns appear without articles, \"qui\" stands alone meaning whoever, \"ne\" works without \"pas\", and word order follows rhythm rather than modern rules.",
      "Recognising these structures matters for two reasons. First, they let you understand proverbs you've never met, and the many newspaper headlines and adverts that twist them (\"Qui ne risque rien n'a rien\" becomes any number of slogans). Second, they stop you from correcting them: a proverb must be quoted exactly, with its old grammar intact.",
      "This guide also covers the present and future of general truth that proverbs rely on, the \"il faut / il ne faut pas\" pattern of advice, and how to introduce a proverb in conversation without sounding like a schoolbook.",
    ],
    sections: [
      {
        heading: "Nouns without articles",
        body: [
          "Modern French almost always needs an article before a noun. Proverbs keep the older freedom to drop it, which gives them a generic, timeless meaning: \"Pierre qui roule n'amasse pas mousse\" (a rolling stone gathers no moss), \"Chose promise, chose due\" (a promise is a promise), \"Noblesse oblige\", \"Bien mal acquis ne profite jamais.\"",
          "The same feature survives in set pairs and legal or commercial formulas (\"faute de mieux\", \"sans foi ni loi\", \"à bon port\"). In a proverb, adding the article would be a mistake: \"*La pierre qui roule\" is not the proverb.",
        ],
        examples: [
          { fr: "Pierre qui roule n'amasse pas mousse.", en: "A rolling stone gathers no moss." },
          { fr: "Chose promise, chose due.", en: "A promise is a promise." },
          { fr: "Bien mal acquis ne profite jamais.", en: "Ill-gotten gains never prosper." },
          { fr: "Chat échaudé craint l'eau froide.", en: "Once bitten, twice shy." },
          { fr: "Prudence est mère de sûreté.", en: "Better safe than sorry." },
        ],
      },
      {
        heading: "Qui without an antecedent",
        body: [
          "In proverbs, \"qui\" often stands alone and means \"celui qui\" (whoever, he who): \"Qui vivra verra\" (time will tell), \"Qui ne dit mot consent\" (silence gives consent), \"Qui va à la chasse perd sa place.\" This independent relative was normal in classical French and survives in a few modern expressions too: \"qui plus est\" (what's more), \"qui mieux est\", \"comme qui dirait\" (as you might say).",
          "Many proverbs have a balanced two-part structure built on this \"qui\": \"Qui sème le vent récolte la tempête\", \"Qui aime bien châtie bien.\" The second half has no subject pronoun because \"qui\" clause is itself the subject.",
        ],
        examples: [
          { fr: "Qui vivra verra.", en: "Time will tell." },
          { fr: "Qui ne dit mot consent.", en: "Silence gives consent." },
          { fr: "Qui sème le vent récolte la tempête.", en: "Sow the wind and reap the whirlwind." },
          { fr: "Qui ne risque rien n'a rien.", en: "Nothing ventured, nothing gained." },
          { fr: "Il est compétent et, qui plus est, très sympathique.", en: "He's competent and, what's more, very nice." },
        ],
      },
      {
        heading: "Ne without pas, and archaic word order",
        body: [
          "Older French could negate with \"ne\" alone, and proverbs keep it: \"Il n'est pire sourd que celui qui ne veut pas entendre\" (there's none so deaf as those who will not hear), \"Il n'est pire eau que l'eau qui dort.\" Here \"il n'est\" means \"il n'y a\". The same literary \"ne\" survives in modern formal French with a few verbs, covered in the guide to the ne explétif and literary negation.",
          "Word order may also be inverted for rhythm or emphasis: \"À bon entendeur, salut\" (a word to the wise), \"À cœur vaillant rien d'impossible\", \"Tel père, tel fils\", \"Autres temps, autres mœurs.\" Many proverbs have no verb at all and rely on the parallel between two halves.",
        ],
        examples: [
          { fr: "Il n'est pire sourd que celui qui ne veut pas entendre.", en: "There's none so deaf as those who will not hear." },
          { fr: "Il n'est pire eau que l'eau qui dort.", en: "Still waters run deep." },
          { fr: "À bon entendeur, salut.", en: "A word to the wise." },
          { fr: "Tel père, tel fils.", en: "Like father, like son: the son takes after the father." },
          { fr: "Autres temps, autres mœurs.", en: "Other times, other customs." },
        ],
      },
      {
        heading: "The generic present and future, and il faut / il ne faut pas",
        body: [
          "Proverbs state timeless truths in the present: \"L'habit ne fait pas le moine\", \"Les chiens aboient, la caravane passe.\" Some use the future in the same generic sense, often in a two-part structure: \"Rira bien qui rira le dernier\" (he who laughs last laughs best, with inversion), \"Qui vivra verra.\"",
          "Advice proverbs are built on \"il faut\" or \"il ne faut pas\" + infinitive: \"Il ne faut pas vendre la peau de l'ours avant de l'avoir tué\", \"Il faut battre le fer pendant qu'il est chaud\", \"Il ne faut jamais dire : Fontaine, je ne boirai pas de ton eau.\" In speech, \"il\" is often dropped: \"Faut pas vendre la peau de l'ours...\"",
        ],
        examples: [
          { fr: "L'habit ne fait pas le moine.", en: "Don't judge a book by its cover." },
          { fr: "Rira bien qui rira le dernier.", en: "He who laughs last laughs best." },
          { fr: "Il ne faut pas vendre la peau de l'ours avant de l'avoir tué.", en: "Don't count your chickens before they hatch." },
          { fr: "Il faut battre le fer pendant qu'il est chaud.", en: "Strike while the iron is hot." },
          { fr: "Les chiens aboient, la caravane passe.", en: "Let them talk; we carry on regardless." },
        ],
      },
      {
        heading: "Quoting a proverb naturally",
        body: [
          "To introduce a proverb: \"comme dit le proverbe\", \"comme on dit\", \"tu sais ce qu'on dit\", or more formally \"selon l'adage\". Natives very often quote only the first half and let the listener finish: \"Bon, quand le chat n'est pas là...\" (the mice will play), \"Enfin, qui sème le vent...\"",
          "Proverbs are also playfully distorted in headlines and adverts, which assumes you know the original: \"Qui ne risque rien n'a rien\" becomes \"Qui ne teste rien n'a rien\". At C2, spotting the twist is part of understanding the text.",
        ],
        examples: [
          { fr: "Comme dit le proverbe, l'appétit vient en mangeant.", en: "As the saying goes, the more you have, the more you want." },
          { fr: "Tu sais ce qu'on dit : loin des yeux, loin du cœur.", en: "You know what they say: out of sight, out of mind." },
          { fr: "Bon, quand le chat n'est pas là...", en: "Well, when the cat's away..." },
          { fr: "Selon l'adage, nul n'est censé ignorer la loi.", en: "As the maxim has it, ignorance of the law is no excuse." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "La pierre qui roule n'amasse pas de mousse.",
        right: "Pierre qui roule n'amasse pas mousse.",
        why: "Proverbs keep their archaic grammar: no article, and no \"de\" after the negation. Don't modernise them.",
      },
      {
        wrong: "Celui qui vivra, il verra.",
        right: "Qui vivra verra.",
        why: "The fixed form uses \"qui\" without an antecedent and no resumptive pronoun.",
      },
      {
        wrong: "Il ne faut pas vendre la peau de l'ours avant de le tuer.",
        right: "Il ne faut pas vendre la peau de l'ours avant de l'avoir tué.",
        why: "The proverb uses the past infinitive. Proverbs are quoted word for word.",
      },
    ],
    faqs: [
      {
        q: "What's the difference between a proverbe, a dicton and a maxime?",
        a: "A \"proverbe\" states a general piece of wisdom (\"Tel père, tel fils\"). A \"dicton\" is often tied to the weather, the calendar or a region (\"En avril, ne te découvre pas d'un fil\"). A \"maxime\" is a sentence with a known author, like La Rochefoucauld's.",
      },
      {
        q: "Do French people really use proverbs in conversation?",
        a: "Yes, but lightly: often half-quoted, often with irony. Using one apt proverb sounds natural; stringing several together sounds like a parody.",
      },
      {
        q: "Can I use \"qui\" without an antecedent in my own sentences?",
        a: "Only in the fixed expressions that survive: \"qui plus est\", \"qui mieux est\", \"comme qui dirait\", and in literary style. Otherwise use \"celui qui\" or \"quiconque\".",
      },
    ],
    related: ["ne-expletif-and-literary-negation", "french-registers-spoken-to-soutenu", "french-exclamations"],
    lessons: [
      "c2-proverbs-1",
      "c2-proverbs-complete-transformations",
      "c2-proverbs-2",
      "c2-proverbs-quote-dialogue-lab",
      "c2-proverbs-3",
    ],
  },
  {
    slug: "euphemism-and-tactful-french",
    title: "The Grammar of Tact: Je Voulais Vous Demander, Ce N'est Pas Très Réussi, Des Erreurs Ont Été Commises",
    description:
      "How French softens requests, criticism and bad news through grammar: the imparfait and conditional of politeness, negation and litotes as softeners, the agentless passive and on, the subjunctive in empathetic formulas, and corporate euphemism.",
    level: "C2",
    intro: [
      "Tact in French depends less on vocabulary than on grammar. The same request moves from blunt to delicate when \"je veux\" becomes \"je voulais\" or \"je voudrais\"; the same criticism softens when \"c'est raté\" becomes \"ce n'est pas très réussi\"; the same admission becomes evasive when \"nous avons fait des erreurs\" becomes \"des erreurs ont été commises\".",
      "A C2 speaker needs to do two things with these tools: use them to be polite without being vague, and decode them when others use them, whether in a manager's feedback, a condolence card or a company press release. \"Il faudrait peut-être revoir certains points\" can be a gentle suggestion or a serious warning, and only context and grammar tell you which.",
      "This guide covers the grammatical devices of indirectness one by one, with the registers they belong to and the point at which tact turns into \"langue de bois\".",
    ],
    sections: [
      {
        heading: "The imparfait and conditional of politeness",
        body: [
          "The imparfait distances a request in time, as if it had been formed a moment ago and could still be withdrawn: \"Je voulais vous demander un service\", \"Je venais pour l'annonce\", \"Je me demandais si vous seriez disponible.\" It's extremely common in shops, on the phone and at work.",
          "The conditional distances it in reality, as if it were only a possibility: \"Je voudrais\", \"Pourriez-vous...\", \"Est-ce que ça vous dérangerait de...\", \"Auriez-vous l'amabilité de...\" (formal). Combined with \"peut-être\", \"un peu\" or \"éventuellement\", it can soften even a firm instruction: \"Il faudrait peut-être revoir la conclusion.\"",
        ],
        examples: [
          { fr: "Je voulais vous demander si vous aviez reçu mon dossier.", en: "I wanted to ask whether you'd received my file." },
          { fr: "Je me demandais si on pourrait décaler la réunion.", en: "I was wondering if we could move the meeting." },
          { fr: "Est-ce que ça vous dérangerait de baisser un peu la musique ?", en: "Would you mind turning the music down a little?" },
          { fr: "Il faudrait peut-être revoir certains chiffres.", en: "It might be worth reviewing some of the figures." },
          { fr: "Auriez-vous l'amabilité de me rappeler avant midi ?", en: "Would you be so kind as to call me back before noon?" },
        ],
      },
      {
        heading: "Negation and litotes as softeners",
        body: [
          "French often criticises by negating the opposite: \"ce n'est pas très réussi\" (it's not good), \"ce n'est pas tout à fait ce qu'on attendait\" (it's wrong), \"je ne suis pas sûr que ce soit la meilleure idée\" (it's a bad idea). The negation lowers the temperature while the message stays clear to a native ear.",
          "The same mechanism works for praise (\"ce n'est pas mal du tout\" is a real compliment) and for indirect refusal: \"on verra\" usually means probably not, \"pourquoi pas\" is a lukewarm yes, and \"c'est intéressant...\" with a pause often signals disagreement. Learning to hear these is as important as producing them.",
        ],
        examples: [
          { fr: "Ce n'est pas tout à fait ce que nous avions demandé.", en: "This isn't quite what we asked for." },
          { fr: "Je ne suis pas certain que ce soit le bon moment.", en: "I'm not sure this is the right time." },
          { fr: "Votre présentation n'était pas inintéressante, mais elle manquait de structure.", en: "Your presentation was not without interest, but it lacked structure." },
          { fr: "On verra, je ne promets rien.", en: "We'll see, I'm not promising anything." },
          { fr: "Il fait un peu chaud ici, non ?", en: "It's a bit warm in here, isn't it? (= could you open the window?)" },
        ],
      },
      {
        heading: "Hiding the agent: the passive, on and impersonal il",
        body: [
          "Removing the person responsible is the most powerful euphemism of all. \"Des erreurs ont été commises\" admits a fault without saying whose. \"On a décidé de revoir l'organisation\" spreads responsibility. \"Il semblerait que des informations aient circulé\" turns an accusation into an observation.",
          "Corporate and political French combine this with nominalisation and abstract nouns: \"un plan de sauvegarde de l'emploi\" for layoffs, \"un ajustement tarifaire\" for a price rise, \"se séparer de\" for fire, \"dans un contexte économique difficile, la direction a engagé une réflexion\". Pushed too far, it becomes \"la langue de bois\", the wooden language French satire loves to mock.",
        ],
        examples: [
          { fr: "Des erreurs ont été commises dans le traitement de votre dossier.", en: "Mistakes were made in handling your file." },
          { fr: "L'entreprise a décidé de se séparer de cinquante collaborateurs.", en: "The company has decided to let fifty employees go." },
          { fr: "Il semblerait que certaines consignes n'aient pas été respectées.", en: "It would appear that some instructions were not followed." },
          { fr: "Un ajustement tarifaire interviendra au 1er janvier.", en: "A price adjustment will take effect on 1 January." },
          { fr: "On m'a fait savoir que mon poste serait supprimé.", en: "I was informed that my position would be eliminated." },
        ],
      },
      {
        heading: "The subjunctive of empathy",
        body: [
          "Acknowledging someone's feelings uses verbs of feeling and judgement + subjunctive, which present the other person's reaction as legitimate without necessarily agreeing with the facts: \"Je comprends que vous soyez déçu\", \"Je regrette que vous ayez eu cette impression\", \"Il est normal que tu sois en colère.\"",
          "These formulas are the backbone of mediation, customer service and difficult conversations. Combined with a past infinitive for apologies (\"je suis désolé de vous avoir fait attendre\") and \"cela dit\" or \"pour autant\" to move on, they let you acknowledge without conceding.",
        ],
        examples: [
          { fr: "Je comprends tout à fait que vous soyez déçu.", en: "I fully understand that you're disappointed." },
          { fr: "Je regrette sincèrement que la situation se soit envenimée.", en: "I sincerely regret that the situation has got worse." },
          { fr: "Il est légitime que vous vous posiez la question.", en: "It's perfectly reasonable for you to ask that question." },
          { fr: "Je suis désolée de vous avoir fait attendre.", en: "I'm sorry to have kept you waiting." },
          { fr: "Il est normal que tu sois frustré ; pour autant, la décision est prise.", en: "It's natural that you're frustrated; even so, the decision has been made." },
        ],
      },
      {
        heading: "Euphemisms for death, illness and age",
        body: [
          "Announcements of death use set euphemisms with specific grammar: \"il nous a quittés\" (passé composé, agreeing with the subject), \"elle s'est éteinte\", \"il est décédé des suites d'une longue maladie\". \"Décéder\" is administrative and takes \"être\". \"Mort\" is not rude, simply direct, and is normal in news and literature.",
          "Age and disability have their own polite terms: \"les seniors\", \"les aînés\", \"une personne âgée\", \"malvoyant\", \"malentendant\", \"une personne en situation de handicap\". Note that \"disparu\" can mean either dead (\"notre regretté collègue, disparu en mars\") or missing, depending on context.",
        ],
        examples: [
          { fr: "Notre collègue Jean nous a quittés hier soir.", en: "Our colleague Jean passed away last night." },
          { fr: "Elle s'est éteinte paisiblement, entourée des siens.", en: "She passed away peacefully, surrounded by her family." },
          { fr: "Il est décédé des suites d'une longue maladie.", en: "He died after a long illness." },
          { fr: "Je vous adresse mes sincères condoléances.", en: "Please accept my sincere condolences." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Je veux un rendez-vous avec le directeur.",
        right: "Je voudrais un rendez-vous avec le directeur. / Je souhaiterais obtenir un rendez-vous...",
        why: "\"Je veux\" sounds like a demand to French ears. Use the conditional, or the imparfait \"je voulais\", for any request.",
      },
      {
        wrong: "Je comprends que vous êtes déçu.",
        right: "Je comprends que vous soyez déçu.",
        why: "Here \"comprendre que\" means to find understandable, which takes the subjunctive. With the indicative it would mean I realise you're disappointed, which sounds cold.",
      },
      {
        wrong: "Notre directrice nous a quitté la semaine dernière.",
        right: "Notre directrice nous a quittés la semaine dernière.",
        why: "\"Nous\" is the direct object of \"quitter\" and comes before \"avoir\", so the participle agrees with it: \"quittés\".",
      },
      {
        wrong: "Je suis désolé de vous faire attendre hier.",
        right: "Je suis désolé de vous avoir fait attendre hier.",
        why: "For a completed action, the apology takes the past infinitive.",
      },
    ],
    faqs: [
      {
        q: "Is the imparfait of politeness grammatically past?",
        a: "Only in form. \"Je voulais vous demander\" refers to a present request; the past tense creates distance, just as English I was wondering does.",
      },
      {
        q: "How do I tell tact from vagueness?",
        a: "Soften the form, not the content. \"Il faudrait revoir la conclusion, qui ne répond pas à la question posée\" is tactful and clear. \"Il y aurait peut-être des choses à voir\" is merely vague.",
      },
      {
        q: "Is \"décéder\" more polite than \"mourir\"?",
        a: "It's more administrative than polite. In a personal message, \"nous a quittés\" or \"s'est éteint\" are warmer; \"mourir\" is neutral and perfectly acceptable in most contexts.",
      },
    ],
    related: ["french-legal-and-administrative-style", "french-registers-spoken-to-soutenu", "conjecture-future-perfect-and-conditional"],
    lessons: [
      "c2-euphemisms-1",
      "c2-euphemisms-2",
      "c2-implicature-contrast",
      "c2-euphemisms-3",
      "c2-conflict-resolution-2",
      "c2-conflict-resolution-4",
    ],
  },
  {
    slug: "french-exclamations",
    title: "French Exclamations: Quel, Que de, Ce Que, Comme, Et Dire Que and Il Est d'un Ennuyeux !",
    description:
      "The grammar of French exclamatives: quel + noun, que de, ce que / qu'est-ce que / comme + clause and their registers, si tu savais, et dire que, pourvu que + subjunctive, the infinitive exclamation (moi, mentir !) and être d'un + adjective.",
    level: "C2",
    intro: [
      "English exclaims with what and how: What a day! How beautiful! French has more structures, and they differ in grammar and register. \"Quel\" goes before a noun and agrees with it. \"Comme\", \"que\", \"ce que\" and \"qu'est-ce que\" introduce a whole clause, each at a different level of formality. And word order never inverts: \"Comme c'est beau !\", not \"*Comme beau c'est !\"",
      "Beyond these basics, spoken French has expressive patterns with no English equivalent: \"Il est d'un ennuyeux !\" (he's so boring!), \"Moi, mentir !\" (Me, lie? Never!), \"Et dire que je l'ai cru !\" (And to think I believed him!), \"Pourvu qu'il fasse beau !\" (Let's hope it's sunny!).",
      "Reacting naturally is a big part of sounding native, and these structures are the grammar behind it. This guide sets them out with their register, so you can choose \"que de monde !\" for a formal letter and \"qu'est-ce qu'il y a comme monde !\" for a chat with friends.",
    ],
    sections: [
      {
        heading: "Quel + noun, que de + noun",
        body: [
          "\"Quel\" + noun exclaims about a thing or person and agrees in gender and number: \"Quel temps !\", \"Quelle chance !\", \"Quels idiots !\", \"Quelles belles photos !\" There's no article: English what a day is \"quelle journée\", never \"*quelle une journée\". An adjective can sit before or after the noun as usual.",
          "\"Que de\" + noun exclaims about a quantity: \"Que de monde !\" (So many people!), \"Que de temps perdu !\" It's slightly literary; in speech people say \"Qu'est-ce qu'il y a comme monde !\" or \"Il y a un monde fou !\"",
        ],
        examples: [
          { fr: "Quelle belle surprise !", en: "What a lovely surprise!" },
          { fr: "Quel dommage que tu ne puisses pas venir !", en: "What a shame you can't come!" },
          { fr: "Quels souvenirs !", en: "What memories!" },
          { fr: "Que de temps perdu en réunions inutiles !", en: "So much time wasted in pointless meetings!" },
          { fr: "Qu'est-ce qu'il y avait comme monde au marché !", en: "There were so many people at the market!" },
        ],
      },
      {
        heading: "Comme, que, ce que, qu'est-ce que + clause",
        body: [
          "To exclaim about a whole statement (how beautiful it is, how fast he runs), French puts an exclamative word at the start and keeps normal word order. The choice is mostly a matter of register: \"que\" is literary (\"Que c'est beau !\"), \"comme\" is neutral (\"Comme c'est beau !\"), \"qu'est-ce que\" and \"ce que\" are spoken and familiar (\"Qu'est-ce que c'est beau !\", \"Ce que c'est beau !\").",
          "The adjective or adverb stays in its normal place after the verb, unlike English how beautiful it is. \"Si\" and \"tellement\" do a similar job inside a statement: \"C'est tellement beau !\", \"Il est si gentil !\"",
        ],
        table: {
          headers: ["Structure", "Register", "Example"],
          rows: [
            ["que + clause", "literary, formal", "Que la vie est belle !"],
            ["comme + clause", "neutral", "Comme il a grandi !"],
            ["qu'est-ce que + clause", "spoken", "Qu'est-ce qu'il fait froid !"],
            ["ce que + clause", "spoken, familiar", "Ce qu'il est bête !"],
          ],
        },
        examples: [
          { fr: "Comme il a grandi !", en: "How he's grown!" },
          { fr: "Qu'est-ce qu'il fait froid ce matin !", en: "It's so cold this morning!" },
          { fr: "Ce qu'elle peut être agaçante !", en: "She can be so annoying!" },
          { fr: "Que la vie est belle !", en: "How beautiful life is!" },
          { fr: "Comme c'est gentil de votre part !", en: "How kind of you!" },
        ],
      },
      {
        heading: "Il est d'un ennuyeux ! and other intensifying patterns",
        body: [
          "\"Être d'un\" + adjective (or \"d'une\" if the subject is feminine, in careful speech) is a spoken intensifier that leaves the sentence hanging: \"Il est d'un ennuyeux !\" (he's incredibly boring), \"Ce film est d'un long !\" The adjective is masculine singular after \"d'un\" because it's being used as a noun.",
          "Other open-ended exclamations: \"Si tu savais !\" (If only you knew!), \"Tu parles d'une surprise !\" (some surprise that was, ironic), \"Il fait une de ces chaleurs !\" (it's incredibly hot), \"J'ai une de ces faims !\" Each leaves the listener to fill in how much.",
        ],
        examples: [
          { fr: "Ce type est d'un prétentieux !", en: "That guy is so full of himself!" },
          { fr: "La conférence était d'un ennui !", en: "The lecture was so boring!" },
          { fr: "Si tu savais ce qui m'est arrivé !", en: "If only you knew what happened to me!" },
          { fr: "J'ai une de ces migraines !", en: "I've got the most awful headache!" },
          { fr: "Tu parles d'une soirée ! Tout le monde est parti à dix heures.", en: "Some party that was! Everyone left at ten." },
        ],
      },
      {
        heading: "Et dire que, moi + infinitive, pourvu que",
        body: [
          "\"Et dire que\" + indicative expresses regret or amazement at a contrast: \"Et dire que j'ai failli ne pas venir !\" (and to think I almost didn't come!). The infinitive exclamation rejects an idea with indignation: \"Moi, mentir ? Jamais !\", \"Lui, s'excuser ? Tu rêves !\"",
          "\"Pourvu que\" + subjunctive, standing alone, expresses a hope or a worry: \"Pourvu qu'il ne pleuve pas !\" (let's hope it doesn't rain). It's the everyday way to say fingers crossed. The literary \"Puisse-t-il réussir !\" (may he succeed) uses an inverted subjunctive of \"pouvoir\" for the same purpose.",
        ],
        examples: [
          { fr: "Et dire que je l'ai cru pendant toutes ces années !", en: "And to think I believed him all those years!" },
          { fr: "Moi, abandonner ? Certainement pas !", en: "Me, give up? Certainly not!" },
          { fr: "Pourvu qu'il fasse beau samedi !", en: "Let's hope it's sunny on Saturday!" },
          { fr: "Pourvu qu'elle n'ait rien entendu !", en: "I hope she didn't hear anything!" },
          { fr: "Puissiez-vous trouver le bonheur !", en: "May you find happiness!" },
        ],
      },
      {
        heading: "Si! and other reactions",
        body: [
          "\"Si\" is the yes that contradicts a negative question or statement: \"Tu ne viens pas ? — Si !\" Using \"oui\" there sounds wrong. \"Mais si !\" and \"Que si !\" strengthen it. The negative equivalent is \"Mais non !\"",
          "Many reactions are fixed exclamations whose meaning isn't literal: \"Tu m'étonnes !\" (no kidding, of course, ironic), \"Ben voyons !\" (yeah, right), \"Mon œil !\" (my foot!), \"Tu parles !\" (as if!), \"Et comment !\" (and how!). Their intonation matters as much as their words.",
        ],
        examples: [
          { fr: "Tu n'as pas fini ? — Si, j'ai fini depuis une heure !", en: "Haven't you finished? — Yes, I finished an hour ago!" },
          { fr: "Il dit qu'il était malade. — Mon œil !", en: "He says he was ill. — My foot!" },
          { fr: "Il était fatigué après le marathon ? — Tu m'étonnes !", en: "He was tired after the marathon? — No kidding!" },
          { fr: "Tu as aimé le concert ? — Et comment !", en: "Did you enjoy the concert? — And how!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Quelle une belle journée !",
        right: "Quelle belle journée !",
        why: "\"Quel\" replaces the article. There's no \"un / une\" after it.",
      },
      {
        wrong: "Comme beau c'est !",
        right: "Comme c'est beau !",
        why: "French exclamatives keep normal word order: the adjective stays after the verb.",
      },
      {
        wrong: "Tu ne m'aimes pas ? — Oui, je t'aime !",
        right: "Tu ne m'aimes pas ? — Si, je t'aime !",
        why: "To contradict a negative, French uses \"si\", not \"oui\".",
      },
      {
        wrong: "Pourvu qu'il fait beau !",
        right: "Pourvu qu'il fasse beau !",
        why: "\"Pourvu que\" always takes the subjunctive.",
      },
    ],
    faqs: [
      {
        q: "Is \"qu'est-ce que c'est beau !\" correct French?",
        a: "Yes, it's standard spoken French. It's just not used in formal writing, where \"comme\" or \"que\" is preferred.",
      },
      {
        q: "Should I write \"elle est d'un ennuyeux\" or \"d'une ennuyeuse\"?",
        a: "\"D'un ennuyeux\" is the usual form, with the adjective in the masculine whatever the subject. \"D'une ennuyeuse\" is heard too, but the invariable form is more common and safer.",
      },
      {
        q: "Can \"comme\" exclamations be used in formal writing?",
        a: "Yes, sparingly. \"Comme il est difficile de...\" is fine in an essay or a speech. Avoid \"ce que\" and \"qu'est-ce que\" there.",
      },
    ],
    related: ["french-registers-spoken-to-soutenu", "grammar-of-french-proverbs", "rhetorical-questions-and-emphatic-inversion"],
    lessons: [
      "c2-exclamations-1",
      "c2-exclamations-function-word-web",
      "c2-exclamations-2",
      "c2-exclamations-dialogue-lab",
    ],
  },
  {
    slug: "french-registers-spoken-to-soutenu",
    title: "French Registers: Familier, Courant, Soutenu and the Grammar That Signals Them",
    description:
      "How register shows up in French grammar, not just vocabulary: negation, the three ways to ask a question, on vs nous, ça vs cela, the reduced forms of fast speech (chais pas, chuis, y a), tu/vous shifts, and the markers of soutenu style.",
    level: "C2",
    intro: [
      "Every French sentence carries a register label. \"J'sais pas\", \"je ne sais pas\" and \"je l'ignore\" say the same thing at three levels: \"familier\", \"courant\" and \"soutenu\". English signals formality mostly through vocabulary; French does it just as much through grammar, in the way you negate, ask questions, choose between \"on\" and \"nous\" or \"ça\" and \"cela\", and pick your tenses.",
      "At C2 the challenge isn't knowing that registers exist but controlling them: holding a register consistently through a whole text, shifting deliberately when the situation demands it, and reading what a shift means when someone else makes it. A colleague who suddenly switches from \"tu\" to \"vous\", or restores the \"ne\" he usually drops, is telling you something.",
      "This guide maps the main grammatical markers on one scale, with the reduced forms of fast speech that are hard to catch by ear and the features that only appear in careful writing.",
    ],
    sections: [
      {
        heading: "The grammatical markers on one scale",
        body: [
          "Most register markers come in sets of two or three. Spoken everyday French drops the \"ne\" of negation, uses \"on\" for we, \"ça\" for that, and asks questions with rising intonation. Careful French keeps \"ne\", uses \"nous\" more, prefers \"cela\", and asks with \"est-ce que\" or inversion. Literary French adds tenses and forms nobody uses in speech: the passé simple, the imperfect subjunctive, \"ne\" without \"pas\".",
          "None of these forms is wrong; each is right in its place. The error is mixing them: \"Chais pas si vous pourriez m'envoyer ledit document\" combines a reduced familiar form with a legal one. Consistency is what reads as mastery.",
        ],
        table: {
          headers: ["Feature", "Familier", "Courant", "Soutenu"],
          rows: [
            ["negation", "j'sais pas", "je ne sais pas", "je ne sais / je l'ignore"],
            ["question", "tu viens ?", "est-ce que tu viens ?", "viens-tu ? / venez-vous ?"],
            ["we", "on y va", "on y va / nous y allons", "nous y allons"],
            ["that", "ça", "ça / cela", "cela"],
            ["there is", "y a", "il y a", "il y a / il existe"],
            ["past narrative", "passé composé", "passé composé", "passé simple"],
          ],
        },
        examples: [
          { fr: "J'sais pas c'qu'il veut.", en: "Dunno what he wants. (familier)" },
          { fr: "Je ne sais pas ce qu'il veut.", en: "I don't know what he wants. (courant)" },
          { fr: "J'ignore ce qu'il souhaite.", en: "I do not know what he wishes. (soutenu)" },
          { fr: "Vous partez quand ? / Quand est-ce que vous partez ? / Quand partez-vous ?", en: "When are you leaving? (three registers)" },
          { fr: "Cela ne me concerne pas.", en: "That does not concern me. (careful)" },
        ],
      },
      {
        heading: "The reduced forms of fast speech",
        body: [
          "Unscripted French compresses common sequences, and these reductions are the main reason learners understand written French but lose the thread in films. The mute \"e\" disappears (\"j'te l'dis\", \"p'tit\"), subject pronouns merge with verbs (\"chuis\" for je suis, \"chais pas\" for je ne sais pas, \"t'as\" for tu as, \"t'es\" for tu es), and \"il\" vanishes from impersonal phrases (\"faut\", \"y a\", \"paraît que\").",
          "Recognising these is essential for comprehension. Writing them is only appropriate in dialogue, texting or deliberate stylistic effect. When you take notes or summarise what someone said, rebuild the full written form.",
        ],
        table: {
          headers: ["Heard", "Full form"],
          rows: [
            ["chais pas / ché pas", "je ne sais pas"],
            ["chuis", "je suis"],
            ["t'as / t'es", "tu as / tu es"],
            ["y a / y avait", "il y a / il y avait"],
            ["faut / fallait", "il faut / il fallait"],
            ["m'a dit", "il / elle m'a dit"],
            ["p't-être / 'fin", "peut-être / enfin"],
          ],
        },
        examples: [
          { fr: "Chuis crevé, j'te jure.", en: "I'm knackered, I swear." },
          { fr: "Y a pas de souci, t'inquiète.", en: "No problem, don't worry." },
          { fr: "Faut qu'on parte, là.", en: "We need to go now." },
          { fr: "T'as vu c'qu'il a écrit ?", en: "Did you see what he wrote?" },
          { fr: "M'a dit qu'elle passerait p't-être demain.", en: "She told me she might drop by tomorrow." },
        ],
      },
      {
        heading: "Tu, vous and the meaning of a shift",
        body: [
          "The choice between \"tu\" and \"vous\" sets the relationship, and switching it mid-conversation is never neutral. Moving from \"vous\" to \"tu\" is usually proposed (\"on se tutoie ?\"), often by the older or senior person. Moving back from \"tu\" to \"vous\" signals coldness, anger or a return to official roles: a manager who has always said \"tu\" and suddenly says \"Je vous demanderai de...\" is giving a warning.",
          "When you switch, everything has to follow: pronouns, possessives, imperatives and agreements. \"Vous\" for one person keeps singular agreement on adjectives and participles: \"Vous êtes bien arrivée, Madame ?\"",
        ],
        examples: [
          { fr: "On peut se tutoyer, si tu veux.", en: "We can say tu to each other, if you like." },
          { fr: "Écoutez, monsieur Martin, je vous prie de baisser le ton.", en: "Listen, Mr Martin, I'd ask you to lower your voice. (a deliberate switch to vous)" },
          { fr: "Vous êtes satisfaite de votre séjour, madame ?", en: "Are you happy with your stay, madam?" },
          { fr: "Assieds-toi, prends ton temps. → Asseyez-vous, prenez votre temps.", en: "Sit down, take your time. (tu → vous)" },
        ],
      },
      {
        heading: "Vocabulary triplets and the markers of soutenu",
        body: [
          "Many everyday ideas have a three-level set of words: \"bosser / travailler / œuvrer\", \"la bagnole / la voiture / le véhicule\", \"le fric / l'argent / les fonds\", \"se planter / se tromper / commettre une erreur\", \"commencer / débuter / entamer\". Choosing the verb is as much a register decision as choosing the grammar.",
          "Soutenu writing has its own grammatical signature: inversion after \"aussi\", \"peut-être\" and \"sans doute\"; \"l'on\" after \"si\" and \"où\"; \"ne\" alone with \"pouvoir\", \"savoir\" and \"oser\"; \"cela\" rather than \"ça\"; \"dont\" and \"lequel\" handled with ease; nominal style; and, in literature, the passé simple and the imperfect subjunctive. Each of these is covered in its own guide.",
        ],
        examples: [
          { fr: "Il bosse comme un dingue en ce moment.", en: "He's working like crazy at the moment. (familier)" },
          { fr: "Il travaille énormément en ce moment.", en: "He's working a great deal at the moment. (courant)" },
          { fr: "Il œuvre sans relâche à ce projet.", en: "He is working tirelessly on this project. (soutenu)" },
          { fr: "Je ne saurais vous dire à quelle heure il rentrera.", en: "I could not tell you what time he will be back. (soutenu)" },
          { fr: "Peut-être aurait-il fallu consulter les usagers.", en: "Perhaps the users ought to have been consulted. (soutenu)" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Bonjour Madame, chuis désolé pour le retard du dossier.",
        right: "Bonjour Madame, je suis désolé pour le retard pris par le dossier.",
        why: "Reduced forms like \"chuis\" belong to fast speech and casual texting. In an email to someone you call \"Madame\", write the full forms.",
      },
      {
        wrong: "Vous êtes contents, Monsieur Dubois ?",
        right: "Vous êtes content, Monsieur Dubois ?",
        why: "Polite \"vous\" for one person keeps singular agreement on adjectives and participles.",
      },
      {
        wrong: "Je vous saurais gré de m'envoyer le truc dont on a parlé.",
        right: "Je vous saurais gré de me faire parvenir le document évoqué lors de notre entretien.",
        why: "A formal formula followed by \"le truc\" and \"on\" is a register clash. Keep the whole sentence at the same level.",
      },
      {
        wrong: "Ça étant dit, nous pouvons conclure.",
        right: "Cela étant dit, nous pouvons conclure.",
        why: "Fixed formal phrases keep \"cela\": \"cela étant\", \"cela dit\" (also \"ceci dit\"). \"Ça\" belongs to the spoken register.",
      },
    ],
    faqs: [
      {
        q: "Is dropping \"ne\" a mistake?",
        a: "Not in speech, where nearly everyone drops it most of the time. It's a register marker: keep it in writing and in formal speech, and notice when a speaker deliberately restores it for emphasis.",
      },
      {
        q: "Is inversion in questions too formal for conversation?",
        a: "With pronouns in short set questions (\"Voulez-vous...\", \"Pouvez-vous...\") it's normal in polite speech. Inversion with a noun subject (\"Votre mère vient-elle ?\") sounds written.",
      },
      {
        q: "How do I know which register to use in a DALF task?",
        a: "Read the instruction: the recipient and the genre decide. A letter to an institution is \"soutenu\"; an article for a general audience is \"courant\" with some \"soutenu\" features; a dialogue role-play can be \"courant\". \"Familier\" is almost never the target in an exam.",
      },
    ],
    related: ["euphemism-and-tactful-french", "french-exclamations", "ne-expletif-and-literary-negation"],
    lessons: [
      "c2-comprehension-strategies-2",
      "c2-register-shift-dialogue-lab",
      "c2-comprehension-strategies-4",
      "c2-fast-speech-word-web",
      "c2-vocab-register-synonyms",
      "c2-challenge-register-chameleon",
    ],
  },
  {
    slug: "rhetorical-questions-and-emphatic-inversion",
    title: "Rhetorical Questions and Emphatic Inversion: Faut-il Rappeler Que, À Peine Était-il Arrivé",
    description:
      "The grammar of persuasion in French: rhetorical questions and their reversed polarity, formal inversion (faut-il, est-ce à dire que), interrogative infinitives (à quoi bon ?), indirect questions without inversion, and inversion after à peine, sans doute, peut-être, ainsi and encore.",
    level: "C2",
    intro: [
      "French public speech, from parliamentary debate to the dissertation, relies heavily on questions that don't expect an answer. \"Faut-il rappeler que...?\", \"Qui pourrait le nier ?\", \"À quoi bon insister ?\" each assert something more forcefully than a statement would. Their grammar is formal: inversion, the interrogative infinitive, the conditional of feigned doubt.",
      "The same register uses inversion outside questions. After \"à peine\", \"sans doute\", \"peut-être\", \"aussi\", \"ainsi\" and \"encore\" at the head of a sentence, careful written French inverts the subject and verb: \"Sans doute a-t-il raison\", \"À peine était-il élu qu'il trahissait ses promesses.\" Mastering this is one of the clearest markers of C2 writing.",
      "This guide also covers the reverse case, which trips up many advanced learners: indirect questions, where inversion and \"est-ce que\" are not allowed. \"Je me demande ce qu'il veut\", never \"*je me demande qu'est-ce qu'il veut\" in writing.",
    ],
    sections: [
      {
        heading: "How rhetorical questions assert",
        body: [
          "A rhetorical question reverses its polarity. A negative question asserts a positive (\"N'est-ce pas évident ?\" = it is obvious), and a positive question asserts a negative (\"Qui pourrait le nier ?\" = nobody can). The stock formulas of formal French all work this way: \"faut-il rappeler que...\" (need I remind you that...), \"qui ne connaît pas...\", \"comment ne pas...\", \"que dire de...\".",
          "After \"qui pourrait nier que\" and \"peut-on douter que\", careful style uses the subjunctive (the verb is formally a doubt), but the indicative is common because the speaker is in fact asserting: \"Qui pourrait nier que la situation soit / est grave ?\"",
        ],
        examples: [
          { fr: "Faut-il rappeler que cette loi a été votée à l'unanimité ?", en: "Need I remind you that this law was passed unanimously?" },
          { fr: "Qui pourrait sérieusement contester ces chiffres ?", en: "Who could seriously dispute these figures?" },
          { fr: "N'est-ce pas là l'essentiel ?", en: "Isn't that what really matters?" },
          { fr: "Qui ne connaît pas cette chanson ?", en: "Who doesn't know this song?" },
          { fr: "Que dire de la réaction du gouvernement ?", en: "And what can one say about the government's reaction?" },
        ],
      },
      {
        heading: "Formal inversion and hypophora",
        body: [
          "Formal questions invert the subject pronoun and verb, with \"-t-\" between vowels: \"Faut-il...?\", \"Peut-on...?\", \"Est-ce à dire que...?\" (does that mean that...?), \"Serait-ce que...?\" (could it be that...?). With a noun subject, French keeps the noun first and adds a pronoun: \"Le gouvernement a-t-il tenu ses promesses ?\"",
          "Hypophora means asking a question and answering it yourself, a classic structure in speeches and essays: \"Pourquoi ? Parce que...\", \"Que faut-il en retenir ? Deux choses.\", \"Est-ce à dire que tout est perdu ? Certainement pas.\" Questions also serve as transitions in writing: \"Mais qu'en est-il réellement ?\"",
        ],
        examples: [
          { fr: "Le gouvernement a-t-il tenu ses promesses ?", en: "Has the government kept its promises?" },
          { fr: "Est-ce à dire que tout est perdu ? Certainement pas.", en: "Does that mean all is lost? Certainly not." },
          { fr: "Serait-ce que nous avons peur du changement ?", en: "Could it be that we're afraid of change?" },
          { fr: "Que faut-il en retenir ? Essentiellement deux choses.", en: "What should we take from this? Essentially two things." },
          { fr: "Mais qu'en est-il réellement ?", en: "But what is the real situation?" },
        ],
      },
      {
        heading: "Interrogative infinitives and questions of outrage",
        body: [
          "A question with an infinitive and no subject expresses deliberation or helplessness: \"Que faire ?\", \"Où aller ?\", \"À quoi bon insister ?\" (what's the point of insisting?), \"Comment ne pas s'indigner ?\" (how can one not be outraged?). It's impersonal, and therefore well suited to formal argument.",
          "Series of questions with the same opening (anaphora) build indignation: \"Combien de rapports faudra-t-il ? Combien de victimes ?\" The model is Cicero's \"Jusqu'à quand, Catilina, abuseras-tu de notre patience ?\" In conversation, rhetorical questions of reproach are everywhere and carried by intonation: \"Tu ne pouvais pas prévenir ?\", \"Tu crois que j'ai que ça à faire ?\"",
        ],
        examples: [
          { fr: "Que faire face à une telle injustice ?", en: "What can be done in the face of such injustice?" },
          { fr: "À quoi bon discuter s'il ne veut rien entendre ?", en: "What's the point of discussing it if he won't listen?" },
          { fr: "Comment ne pas être touché par ce témoignage ?", en: "How can anyone not be moved by this testimony?" },
          { fr: "Combien de temps faudra-t-il encore attendre ?", en: "How much longer will we have to wait?" },
          { fr: "Tu ne pouvais pas prévenir que tu rentrais tard ?", en: "Couldn't you have let me know you'd be late?" },
        ],
      },
      {
        heading: "Indirect questions: no inversion, no est-ce que",
        body: [
          "When a question is embedded after a verb like \"se demander\", \"savoir\", \"ignorer\" or \"s'interroger\", it loses all question markers. \"Qu'est-ce que\" becomes \"ce que\", \"qu'est-ce qui\" becomes \"ce qui\", \"est-ce que\" becomes \"si\", and there's no inversion: \"Je me demande ce qu'il veut\", \"On peut s'interroger sur ce qui a motivé cette décision.\"",
          "This is the standard way to frame a problématique in a dissertation: \"Il convient de se demander si...\", \"On peut se demander dans quelle mesure...\" Forms like \"*je me demande qu'est-ce qu'il veut\" are heard in speech but are colloquial and wrong in writing.",
        ],
        table: {
          headers: ["Direct question", "Indirect question"],
          rows: [
            ["Qu'est-ce qu'il veut ?", "Je me demande ce qu'il veut."],
            ["Qu'est-ce qui se passe ?", "Je ne sais pas ce qui se passe."],
            ["Est-ce que la réforme est utile ?", "Il convient de se demander si la réforme est utile."],
            ["Où va-t-il ?", "J'ignore où il va."],
          ],
        },
        examples: [
          { fr: "Je me demande ce qu'il veut vraiment.", en: "I wonder what he really wants." },
          { fr: "On peut s'interroger sur ce qui a motivé ce choix.", en: "One may well ask what motivated this choice." },
          { fr: "Il convient de se demander si cette mesure est efficace.", en: "We should ask whether this measure is effective." },
          { fr: "Nous verrons dans quelle mesure ces critiques sont fondées.", en: "We will see to what extent these criticisms are justified." },
        ],
      },
      {
        heading: "Inversion after à peine, sans doute, peut-être, ainsi, encore",
        body: [
          "When certain adverbs open a sentence in writing, the subject pronoun goes after the verb: \"À peine était-il élu qu'il...\", \"Sans doute a-t-il raison\", \"Peut-être viendra-t-elle\", \"Ainsi s'achève notre enquête\", \"Encore faut-il en avoir les moyens\" (but you still need the means). With a noun subject, add a pronoun: \"Sans doute le ministre a-t-il raison.\"",
          "If you don't want inversion, move the adverb (\"Il a sans doute raison\") or, with \"peut-être\" and \"sans doute\", add \"que\": \"Peut-être qu'elle viendra.\" The \"que\" version is spoken; the inverted version is written. Note \"encore\" at the start means even so or provided that, and \"aussi\" means therefore.",
        ],
        examples: [
          { fr: "À peine était-il arrivé qu'on lui demandait déjà de repartir.", en: "No sooner had he arrived than they were asking him to leave again." },
          { fr: "Sans doute le ministre a-t-il voulu calmer les esprits.", en: "The minister probably wanted to calm things down." },
          { fr: "Peut-être aurions-nous dû attendre.", en: "Perhaps we should have waited." },
          { fr: "Ainsi se termine notre exposé.", en: "This concludes our presentation." },
          { fr: "C'est une bonne idée ; encore faut-il la financer.", en: "It's a good idea; it still has to be funded, though." },
          { fr: "Non seulement il a menti, mais encore il s'en vante.", en: "Not only did he lie, but he boasts about it too." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Je me demande qu'est-ce qu'il veut.",
        right: "Je me demande ce qu'il veut.",
        why: "Indirect questions drop \"est-ce que\" forms: \"qu'est-ce que\" becomes \"ce que\".",
      },
      {
        wrong: "Peut-être il viendra demain.",
        right: "Peut-être viendra-t-il demain. / Peut-être qu'il viendra demain. / Il viendra peut-être demain.",
        why: "\"Peut-être\" at the head of a sentence needs inversion in writing, or \"que\" in speech.",
      },
      {
        wrong: "Il convient de se demander si est-ce que cette réforme est utile.",
        right: "Il convient de se demander si cette réforme est utile.",
        why: "\"Si\" replaces \"est-ce que\" in an indirect question; the two never combine.",
      },
      {
        wrong: "Sans doute le ministre a raison.",
        right: "Sans doute le ministre a-t-il raison.",
        why: "With a noun subject, inversion after \"sans doute\" keeps the noun first and adds a pronoun after the verb.",
      },
    ],
    faqs: [
      {
        q: "Is inversion after \"peut-être\" required?",
        a: "Only when \"peut-être\" opens a written sentence. Placing it after the verb avoids the question entirely: \"Il viendra peut-être.\"",
      },
      {
        q: "Can I use rhetorical questions in a DALF essay?",
        a: "Yes, sparingly. One well-placed question in the introduction (the problématique) or as a transition is effective. A series of them reads as a speech, not an essay.",
      },
      {
        q: "What's the difference between \"à quoi bon\" and \"pourquoi\"?",
        a: "\"À quoi bon\" + infinitive or noun asks what's the use, and almost always implies the answer: none. \"Pourquoi\" is a genuine question about reasons.",
      },
    ],
    related: ["emphasis-pseudo-clefts-and-inversion", "french-discourse-markers", "french-registers-spoken-to-soutenu"],
    lessons: [
      "c2-rhetorical-questions-1",
      "c2-rhetorical-questions-2",
      "c2-rhetorical-questions-3",
      "c2-rhetorical-questions-5",
      "c2-rhetorical-questions-6",
      "c2-rhetorical-questions-7",
    ],
  },
  {
    slug: "historical-narrative-tenses",
    title: "Tenses of Historical Narrative: Imparfait Narratif, Présent de Narration and Futur Historique",
    description:
      "How French history books and retrospectives tell the past: passé simple vs passé composé by genre, the imparfait narratif (deux jours plus tard, le roi abdiquait), the présent de narration, the futur historique (il mourra en 1821), the futur dans le passé, and après que + indicative.",
    level: "C2",
    intro: [
      "Read three French accounts of the same event, in a textbook, a newspaper retrospective and a novel, and you'll find three different tense systems. French historical writing has more ways to narrate the past than English, and several of them use tenses in ways that look illogical at first: an imperfect that narrates a single event, a present that describes 1789, a future that tells you what happened in 1821.",
      "Each of these is a stylistic choice with a precise effect. The imparfait narratif slows down and highlights a decisive moment; the présent de narration puts the reader in the middle of events; the futur historique steps forward from the narrative present to reveal what was coming. A C2 reader recognises them instantly; a C2 writer can use them without losing coherence.",
      "This guide assumes you can recognise the passé simple and the passé antérieur (covered in the C1 guide on literary tenses) and focuses on how the whole system fits together, including the rule natives most often break: \"après que\" takes the indicative.",
    ],
    sections: [
      {
        heading: "Passé simple or passé composé: a question of genre",
        body: [
          "History books, biographies and encyclopaedias traditionally narrate in the passé simple: \"Louis XVI fut guillotiné le 21 janvier 1793.\" It presents events as closed and distant from the present. Journalism, school textbooks aimed at younger readers and spoken history (documentaries, podcasts) use the passé composé, which links events to the present: \"Louis XVI a été guillotiné le 21 janvier 1793.\"",
          "Chronologies and timelines use the present (\"1793 : exécution de Louis XVI\" or \"Louis XVI est guillotiné\"). In all three systems the imparfait still provides the background. Whatever you choose, keep the narrative layer consistent within the passage.",
        ],
        examples: [
          { fr: "Louis XVI fut guillotiné le 21 janvier 1793.", en: "Louis XVI was guillotined on 21 January 1793. (history book)" },
          { fr: "Il y a deux cents ans, Napoléon a perdu la bataille de Waterloo.", en: "Two hundred years ago, Napoleon lost the Battle of Waterloo. (newspaper)" },
          { fr: "1789 : les états généraux se réunissent à Versailles.", en: "1789: the Estates-General meet at Versailles. (chronology)" },
          { fr: "La population souffrait de la faim ; le peuple se souleva.", en: "The people were suffering from hunger; they rose up." },
          { fr: "Charles de Gaulle naquit à Lille en 1890.", en: "Charles de Gaulle was born in Lille in 1890." },
        ],
      },
      {
        heading: "The imparfait narratif",
        body: [
          "Normally the imparfait describes a background. In historical and journalistic writing it can also narrate a single, completed event, where you'd expect a passé simple: \"Deux jours plus tard, le roi abdiquait.\" This imparfait narratif (or \"de rupture\") almost always comes with a precise time adverbial (\"deux jours plus tard\", \"en 1905\", \"le lendemain\"), often at the end of a sequence.",
          "Its effect is to freeze the moment, as if the camera slowed down on a decisive event. To tell it from the background imparfait, ask whether the event is a single, dated action that moves the story forward. If it is, it's narrative.",
        ],
        examples: [
          { fr: "Deux jours plus tard, le roi abdiquait.", en: "Two days later, the king abdicated." },
          { fr: "En 1905, la loi de séparation des Églises et de l'État était votée.", en: "In 1905, the law separating Church and State was passed." },
          { fr: "Le lendemain, il quittait la France pour toujours.", en: "The next day, he left France for ever." },
          { fr: "Quelques mois plus tard, la guerre éclatait.", en: "A few months later, war broke out." },
          { fr: "À 20 h 15, le dernier train quittait la gare.", en: "At 8.15 pm the last train pulled out of the station." },
        ],
      },
      {
        heading: "Présent de narration and futur historique",
        body: [
          "The présent de narration tells past events in the present to make them vivid: \"En 1789, le peuple prend la Bastille.\" It's very common in history writing and documentaries. Once you're in it, background events go into the present too, earlier events into the passé composé, and later events into the future.",
          "That future is the futur historique: from the narrative present, the writer looks ahead to what was still to come. \"Napoléon est exilé à Sainte-Hélène ; il y mourra six ans plus tard.\" It's a very French device; English uses was to or would. The main pitfall is drifting back into the past halfway through the paragraph.",
        ],
        table: {
          headers: ["Relation to the narrative moment", "Past narrative", "Présent de narration"],
          rows: [
            ["the event itself", "passé simple: il partit", "présent: il part"],
            ["background", "imparfait: il pleuvait", "présent: il pleut"],
            ["earlier", "plus-que-parfait: il avait signé", "passé composé: il a signé"],
            ["later", "conditional / devait: il ne reviendrait jamais", "futur: il ne reviendra jamais"],
          ],
        },
        examples: [
          { fr: "Le 14 juillet 1789, la foule prend la Bastille.", en: "On 14 July 1789 the crowd storms the Bastille." },
          { fr: "Napoléon est exilé à Sainte-Hélène ; il y mourra en 1821.", en: "Napoleon is exiled to Saint Helena; he will die there in 1821." },
          { fr: "Marie Curie arrive à Paris en 1891 ; elle recevra deux prix Nobel.", en: "Marie Curie arrives in Paris in 1891; she will go on to win two Nobel Prizes." },
          { fr: "Le traité, que les deux pays ont signé la veille, entre en vigueur.", en: "The treaty, which the two countries signed the day before, comes into force." },
          { fr: "Personne ne le sait encore, mais ce discours changera tout.", en: "Nobody knows it yet, but this speech will change everything." },
        ],
      },
      {
        heading: "The futur dans le passé: il ne reverrait jamais Paris",
        body: [
          "In a past narrative, the same look ahead uses the present conditional: \"Il quitta Paris en 1815 ; il ne reverrait jamais la France.\" (he would never see France again). An alternative is \"devoir\" in the imparfait, which is common in historical writing: \"Il devait mourir six ans plus tard\" (he was to die six years later). The past conditional covers an event completed before a later point: \"il aurait fini son œuvre avant sa mort.\"",
          "This narrator who knows the ending is typical of historians: \"Ce jour-là, sans le savoir, il signait son arrêt de mort.\" Switching from a past narrative to the présent de narration turns every conditional into a future.",
        ],
        examples: [
          { fr: "Il quitta Paris en 1815 ; il ne reverrait jamais la France.", en: "He left Paris in 1815; he would never see France again." },
          { fr: "Rimbaud cessa d'écrire à vingt ans ; il devait mourir à trente-sept.", en: "Rimbaud stopped writing at twenty; he was to die at thirty-seven." },
          { fr: "Ce jour-là, sans le savoir, il signait son arrêt de mort.", en: "That day, without knowing it, he was signing his own death warrant." },
          { fr: "Elle ignorait encore que ce voyage changerait sa vie.", en: "She didn't yet know that this journey would change her life." },
        ],
      },
      {
        heading: "Après que + indicative",
        body: [
          "\"Après que\" introduces an event that has really happened, so the rule is the indicative: \"Après qu'il eut signé le traité, il quitta Paris\" (passé antérieur in a passé simple narrative), \"après qu'il a signé\" or \"après qu'il avait signé\" in other contexts. Under the influence of \"avant que\" + subjunctive, most native speakers now say \"après qu'il ait signé\", and you'll see it in the press. It remains an error in exams and careful writing.",
          "The simplest way to avoid the problem when the subject is the same is \"après\" + past infinitive or a noun: \"Après avoir signé le traité, il quitta Paris\", \"Après la signature du traité...\"",
        ],
        examples: [
          { fr: "Après qu'il eut signé le traité, il quitta Paris.", en: "After he had signed the treaty, he left Paris." },
          { fr: "Après que les troupes se furent retirées, la ville fut reconstruite.", en: "After the troops had withdrawn, the town was rebuilt." },
          { fr: "Après que le jury aura délibéré, le verdict sera annoncé.", en: "Once the jury has deliberated, the verdict will be announced." },
          { fr: "Après avoir signé le traité, il quitta Paris.", en: "After signing the treaty, he left Paris." },
          { fr: "Dès la signature de l'armistice, les soldats rentrèrent chez eux.", en: "As soon as the armistice was signed, the soldiers went home." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Après qu'il soit parti, la situation s'aggrava.",
        right: "Après qu'il fut parti, la situation s'aggrava.",
        why: "\"Après que\" takes the indicative; in a passé simple narrative, the passé antérieur.",
      },
      {
        wrong: "En 1789, le peuple prend la Bastille ; Louis XVI fut exécuté quatre ans plus tard.",
        right: "En 1789, le peuple prend la Bastille ; Louis XVI sera exécuté quatre ans plus tard.",
        why: "In a présent de narration, a later event goes into the futur historique, not back into the past.",
      },
      {
        wrong: "Il partit en 1815 ; il ne reverra jamais la France.",
        right: "Il partit en 1815 ; il ne reverrait jamais la France.",
        why: "In a past narrative, the future seen from the past is the conditional. The future belongs to a présent de narration.",
      },
      {
        wrong: "Deux jours plus tard, le roi abdiquait, et il partait et il s'installait à Londres.",
        right: "Deux jours plus tard, le roi abdiquait. Il partit ensuite pour Londres, où il s'installa.",
        why: "The imparfait narratif highlights one decisive moment. Chaining it for a whole sequence blurs the narrative.",
      },
    ],
    faqs: [
      {
        q: "Is the imparfait narratif a mistake for the passé simple?",
        a: "No. It's a deliberate stylistic choice, frequent in history writing and journalism, that slows down a decisive event. The time adverbial is the clue.",
      },
      {
        q: "Which system should I use in a DALF historical summary?",
        a: "Either the passé composé (neutral, safe) or the présent de narration with futur historique (lively, common in synthesis). Use the passé simple only if you're comfortable with it, and don't mix systems.",
      },
      {
        q: "Is \"après qu'il ait\" really wrong if everyone says it?",
        a: "It's extremely widespread, and some grammarians tolerate it, but official norms and exam correctors still expect the indicative. Using \"après\" + past infinitive or a noun avoids the issue.",
      },
    ],
    related: ["passe-simple-and-literary-narration", "imperfect-subjunctive", "french-participle-and-infinitive-clauses"],
    lessons: [
      "c2-historical-narrative-1",
      "c2-same-event-four-genres-contrast",
      "c2-historical-narrative-2",
      "c2-historical-narrative-3",
      "c2-historical-narrative-4",
      "c2-historical-present-future-contrast",
    ],
  },
  {
    slug: "imperfect-subjunctive",
    title: "The Imperfect and Pluperfect Subjunctive: Qu'il Fût, Qu'il Eût Fait, On Eût Dit",
    description:
      "Recognising the French imparfait du subjonctif (qu'il fût, qu'il vînt, qu'elle fît) and plus-que-parfait du subjonctif (qu'il eût compris, j'eusse aimé), the sequence of tenses in classical French, and the expressions that keep them alive today: fût-ce, ne serait-ce que, qui l'eût cru.",
    level: "C2",
    intro: [
      "Modern French uses two subjunctive tenses, present and past. Literary French has two more: the imparfait du subjonctif (\"qu'il fût\", \"qu'il vînt\") and the plus-que-parfait du subjonctif (\"qu'il eût compris\"). They have almost vanished from speech, but they fill classic novels, older texts, some formal speeches, and still turn up in the most careful contemporary prose.",
      "You need to recognise them, not to produce them in everyday writing. Recognition is easy once you know the pattern: the third person singular, which accounts for most occurrences, looks like the passé simple with a circumflex and a \"t\" (\"il fut\" → \"qu'il fût\", \"il vint\" → \"qu'il vînt\", \"il parla\" → \"qu'il parlât\").",
      "A handful of expressions keep these forms alive in modern French, and a C2 speaker uses them naturally: \"fût-ce\", \"ne fût-ce que\", \"qui l'eût cru ?\", \"on eût dit\". This guide shows how the forms are built, when they're used, and how to translate them into modern French.",
    ],
    sections: [
      {
        heading: "Forming the imparfait du subjonctif",
        body: [
          "Take the passé simple, drop the ending, and add the endings \"-sse\", \"-sses\", circumflex + \"-t\", \"-ssions\", \"-ssiez\", \"-ssent\" to the passé simple vowel. \"Il parla\" gives \"que je parlasse, qu'il parlât\"; \"il finit\" gives \"qu'il finît\"; \"il fut\" gives \"qu'il fût\"; \"il vint\" gives \"qu'il vînt\".",
          "In practice, you'll meet the third person singular far more than any other form, because the first and second persons (\"que je parlasse\", \"que vous fussiez\") sounded affected even in the nineteenth century and are often used for comic effect today. The circumflex is what distinguishes \"qu'il fût\" (subjunctive) from \"il fut\" (passé simple).",
        ],
        table: {
          headers: ["Verb", "Passé simple", "Imparfait du subjonctif (il / elle)", "Modern equivalent"],
          rows: [
            ["être", "il fut", "qu'il fût", "qu'il soit"],
            ["avoir", "il eut", "qu'il eût", "qu'il ait"],
            ["faire", "il fit", "qu'il fît", "qu'il fasse"],
            ["venir", "il vint", "qu'il vînt", "qu'il vienne"],
            ["aller", "il alla", "qu'il allât", "qu'il aille"],
            ["pouvoir", "il put", "qu'il pût", "qu'il puisse"],
          ],
        },
        examples: [
          { fr: "Il fallait qu'il partît avant l'aube.", en: "He had to leave before dawn." },
          { fr: "Bien qu'elle fût fatiguée, elle continua à écrire.", en: "Although she was tired, she went on writing." },
          { fr: "Je voulais qu'il vînt me voir.", en: "I wanted him to come and see me." },
          { fr: "Il attendit que la pluie cessât.", en: "He waited for the rain to stop." },
          { fr: "Elle craignait qu'on ne la reconnût.", en: "She was afraid someone might recognise her." },
        ],
      },
      {
        heading: "The classical sequence of tenses",
        body: [
          "In classical French, the tense of the subjunctive followed the tense of the main verb. After a present or future main verb, you used the present or past subjunctive, as today. After a past or conditional main verb, you used the imperfect subjunctive for a simultaneous or later action and the pluperfect subjunctive for an earlier one: \"Je voulais qu'il vînt\", \"Je doutais qu'il eût compris.\"",
          "Modern French has abandoned this sequence and uses the present and past subjunctive whatever the main verb: \"Je voulais qu'il vienne\", \"Je doutais qu'il ait compris.\" When you read a classic text, mentally replace \"fût\" with \"soit\" and \"eût compris\" with \"ait compris\" and the meaning is identical.",
        ],
        table: {
          headers: ["Main verb", "Simultaneous or later", "Earlier"],
          rows: [
            ["present / future", "qu'il vienne", "qu'il soit venu"],
            ["past (classical)", "qu'il vînt", "qu'il fût venu"],
            ["past (modern)", "qu'il vienne", "qu'il soit venu"],
          ],
        },
        examples: [
          { fr: "Je doutais qu'il eût compris la leçon.", en: "I doubted he had understood the lesson." },
          { fr: "Elle partit sans qu'on l'eût remarquée.", en: "She left without anyone having noticed her." },
          { fr: "Il était le seul qui pût la consoler.", en: "He was the only one who could comfort her." },
          { fr: "Il aurait fallu qu'elle le sût plus tôt.", en: "She should have known it earlier." },
        ],
      },
      {
        heading: "The plus-que-parfait du subjonctif as conditionnel passé",
        body: [
          "The pluperfect subjunctive (\"avoir\" or \"être\" in the imperfect subjunctive + participle) has a second job in literary French: it can replace the past conditional, in which case grammars call it the \"conditionnel passé deuxième forme\". \"J'eusse aimé vous rencontrer\" means \"j'aurais aimé vous rencontrer\"; \"on eût dit un fantôme\" means \"on aurait dit un fantôme\".",
          "It can even appear in both halves of a past hypothesis: \"S'il l'eût su, il fût venu\" (if he had known, he would have come). With inversion and no \"si\", it gives a literary conditional clause: \"Eût-il su la vérité, il aurait agi autrement\" (had he known the truth...).",
        ],
        examples: [
          { fr: "J'eusse aimé vous connaître plus tôt.", en: "I should have liked to meet you sooner." },
          { fr: "On eût dit qu'elle avait vu un fantôme.", en: "You'd have thought she'd seen a ghost." },
          { fr: "S'il l'eût su, il fût venu.", en: "Had he known, he would have come." },
          { fr: "Eût-il été prévenu, il aurait refusé.", en: "Had he been warned, he would have refused." },
          { fr: "Il eût mieux valu se taire.", en: "It would have been better to keep quiet." },
        ],
      },
      {
        heading: "Survivals in modern French",
        body: [
          "A few fixed expressions keep the imperfect subjunctive in everyday educated French. \"Fût-ce\" and \"ne fût-ce que\" mean even if only (\"ne serait-ce que\" is the more common modern equivalent). \"Qui l'eût cru ?\" means who'd have thought it? \"Il eût fallu\" and \"il eût mieux valu\" appear in formal speeches and editorials. \"Soit... soit\" (either... or) and \"ainsi soit-il\" are present subjunctives frozen in the same way.",
          "These expressions are perfectly natural in a formal register. Outside them, using the imperfect subjunctive in a modern email or essay sounds affected, or ironic.",
        ],
        examples: [
          { fr: "Il refuse toute aide, fût-ce celle de sa propre famille.", en: "He refuses all help, even from his own family." },
          { fr: "Accordez-moi ne fût-ce qu'une minute.", en: "Give me just one minute." },
          { fr: "Ne serait-ce que pour le paysage, le voyage vaut la peine.", en: "If only for the scenery, the trip is worth it." },
          { fr: "Il a fini premier. Qui l'eût cru ?", en: "He came first. Who'd have thought it?" },
          { fr: "Il eût fallu agir dès les premiers signes de crise.", en: "Action should have been taken at the first signs of crisis." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Bien qu'il fut malade, il travailla.",
        right: "Bien qu'il fût malade, il travailla.",
        why: "\"Bien que\" needs the subjunctive. Without the circumflex, \"fut\" is the passé simple.",
      },
      {
        wrong: "Il partit avant qu'elle n'arriva.",
        right: "Il partit avant qu'elle n'arrivât. / Il est parti avant qu'elle (n')arrive.",
        why: "\"Avant que\" needs the subjunctive; \"arriva\" is the passé simple. In a literary narrative use \"arrivât\", in modern French the present subjunctive.",
      },
      {
        wrong: "Je voulais que vous vinssiez demain à la réunion.",
        right: "Je voulais que vous veniez demain à la réunion.",
        why: "First- and second-person forms of the imperfect subjunctive sound affected or comic in modern usage. Use the present subjunctive.",
      },
      {
        wrong: "Qui l'eut cru ?",
        right: "Qui l'eût cru ?",
        why: "The fixed expression uses the pluperfect subjunctive \"eût\", with a circumflex.",
      },
    ],
    faqs: [
      {
        q: "Do I ever need to write the imperfect subjunctive?",
        a: "Not in ordinary modern French. Use it only in fixed expressions (\"fût-ce\", \"qui l'eût cru\"), in pastiche, or in very literary writing where the rest of the text is in the passé simple.",
      },
      {
        q: "How can I quickly tell \"il fût\" from \"il fut\"?",
        a: "The circumflex marks the subjunctive. Also check for a trigger: \"que\", \"bien que\", \"avant que\" or a verb of wish or doubt points to the subjunctive.",
      },
      {
        q: "Is \"on eût dit\" still used?",
        a: "Yes, in literary and journalistic writing, as an elegant version of \"on aurait dit\". In speech, \"on aurait dit\" is the norm.",
      },
    ],
    related: ["historical-narrative-tenses", "passe-simple-and-literary-narration", "french-subjunctive-advanced"],
    lessons: [
      "c2-historical-narrative-5",
      "c2-comprehensive-review-1",
    ],
  },
  {
    slug: "ne-expletif-and-literary-negation",
    title: "Ne Explétif and Literary Negation: Avant Qu'il Ne Parte, Je Ne Saurais, Ne... Point",
    description:
      "The ne that doesn't negate (avant qu'il ne parte, je crains qu'il ne soit trop tard, plus cher que je ne pensais), the literary ne without pas (je ne saurais dire, il n'osait répondre), and the old negations ne... point and ne... guère.",
    level: "C2",
    intro: [
      "French has a \"ne\" that looks negative but isn't. In \"Partez avant qu'il ne pleuve\", nobody is saying it won't rain: the sentence means leave before it rains. This \"ne explétif\" appears after verbs of fear, certain conjunctions and comparisons of inequality. It's optional, it's a marker of careful style, and misreading it as a negation is a classic C2 comprehension trap.",
      "French also has the opposite case: a \"ne\" that does negate on its own, without \"pas\". \"Je ne saurais vous dire\", \"Il n'osait répondre\", \"Je ne peux vous aider\" are fully negative. This literary \"ne\" survives with a handful of verbs and is very much alive in formal speech and writing.",
      "Add the old negations \"ne... point\" and \"ne... guère\", and you have the full set of negations that separate everyday French from the French of literature, law and formal correspondence.",
    ],
    sections: [
      {
        heading: "Where the ne explétif appears",
        body: [
          "The ne explétif appears in subordinate clauses where the idea is implicitly negative: something feared, something to be avoided, something not yet true. The main contexts are verbs and nouns of fear (\"craindre que\", \"avoir peur que\", \"de peur que\", \"de crainte que\"), the conjunctions \"avant que\" and \"à moins que\", and verbs of avoiding or preventing (\"éviter que\", \"empêcher que\"). All of these take the subjunctive.",
          "It also appears after comparisons of inequality with a clause, where it takes the indicative: \"C'est plus cher que je ne pensais\", \"Il est moins bête qu'il n'en a l'air.\" And after \"douter\" and \"nier\" when they are themselves negated: \"Je ne doute pas qu'il ne vienne\", which is literary.",
        ],
        table: {
          headers: ["Context", "Example", "Meaning"],
          rows: [
            ["craindre que, avoir peur que", "Je crains qu'il ne soit trop tard.", "I'm afraid it's too late."],
            ["de peur que, de crainte que", "Parle bas, de peur qu'on ne nous entende.", "Speak quietly in case someone hears us."],
            ["avant que", "Rentrons avant qu'il ne pleuve.", "Let's go home before it rains."],
            ["à moins que", "Je viendrai, à moins qu'il ne neige.", "I'll come, unless it snows."],
            ["éviter que, empêcher que", "Évitez qu'il ne se blesse.", "Make sure he doesn't get hurt."],
            ["plus / moins... que + clause", "C'est plus loin que je ne croyais.", "It's further than I thought."],
          ],
        },
        examples: [
          { fr: "Je crains qu'il ne soit déjà trop tard.", en: "I'm afraid it's already too late." },
          { fr: "Finissons avant que la nuit ne tombe.", en: "Let's finish before night falls." },
          { fr: "Nous partirons demain, à moins qu'il ne fasse mauvais.", en: "We'll leave tomorrow, unless the weather's bad." },
          { fr: "Il a fermé la porte de peur qu'on ne l'entende.", en: "He shut the door in case anyone heard him." },
          { fr: "Le projet a coûté plus cher qu'on ne l'avait prévu.", en: "The project cost more than had been expected." },
        ],
      },
      {
        heading: "Optional, and not a negation",
        body: [
          "The ne explétif is never required. \"Avant qu'il parte\" and \"avant qu'il ne parte\" mean exactly the same; the second is more formal. In speech it's often dropped; in careful writing and formal speech, it's expected. Grammars disagree on whether it's recommended after \"avant que\"; after verbs of fear and \"à moins que\", it's the elegant choice.",
          "The trap is in reading. To express a real negation in these contexts you need \"ne... pas\": \"Je crains qu'il ne vienne\" (I'm afraid he'll come) versus \"Je crains qu'il ne vienne pas\" (I'm afraid he won't come). Never use the ne explétif after \"sans que\", which already means without; \"sans qu'il le sache\" is the correct form.",
        ],
        examples: [
          { fr: "J'ai peur qu'il ne vienne.", en: "I'm afraid he'll come." },
          { fr: "J'ai peur qu'il ne vienne pas.", en: "I'm afraid he won't come." },
          { fr: "Partez avant qu'il (ne) soit trop tard.", en: "Leave before it's too late." },
          { fr: "Il est parti sans que personne le remarque.", en: "He left without anyone noticing." },
          { fr: "Elle est plus jeune qu'elle n'en a l'air.", en: "She's younger than she looks." },
        ],
      },
      {
        heading: "Ne alone: je ne saurais, il n'osait",
        body: [
          "In formal French, four verbs can be negated with \"ne\" alone, without \"pas\": \"pouvoir\", \"savoir\", \"oser\" and \"cesser\", usually when followed by an infinitive. \"Je ne peux vous répondre\", \"Il n'osait le dire\", \"Elle ne cesse de se plaindre\". \"Ne cesser de\" in particular is very common in modern writing: \"Le chômage ne cesse d'augmenter.\"",
          "\"Je ne saurais\" + infinitive is a polite, formal way to say I couldn't: \"Je ne saurais vous dire\", \"Je ne saurais trop vous remercier\" (I can't thank you enough). Other survivals: \"si je ne m'abuse\" (if I'm not mistaken), \"n'importe\", \"qu'à cela ne tienne\" (no matter), \"il n'est que de\" (one need only), and \"ne\" alone after \"si\" in expressions like \"si ce n'est\" (except).",
        ],
        examples: [
          { fr: "Je ne saurais vous dire à quelle heure il arrivera.", en: "I couldn't tell you what time he'll arrive." },
          { fr: "Il n'osait lever les yeux.", en: "He didn't dare look up." },
          { fr: "Les prix ne cessent d'augmenter.", en: "Prices just keep going up." },
          { fr: "Je ne peux vous aider davantage.", en: "I cannot help you further." },
          { fr: "C'était mardi, si je ne m'abuse.", en: "It was Tuesday, if I'm not mistaken." },
          { fr: "Il ne lui reste rien, si ce n'est sa maison.", en: "He has nothing left except his house." },
        ],
      },
      {
        heading: "Ne... point, ne... guère and litotes",
        body: [
          "\"Ne... point\" is an old, stronger form of \"ne... pas\". It survives in classical texts (\"Va, je ne te hais point\", Corneille), in some regional speech, and in modern French for an archaic or ironic effect. \"Ne... guère\" means hardly, scarcely, and is still used in careful writing: \"Il n'a guère d'amis\", \"Ce n'est guère surprenant.\"",
          "These negations often serve litotes, where a negative understatement conveys a strong positive. Corneille's line is the textbook case: I don't hate you, meaning I love you. Modern French does the same with \"ce n'est pas sans intérêt\", \"il n'est pas sans savoir\", \"ce n'est guère encourageant\" (it's discouraging).",
        ],
        examples: [
          { fr: "Va, je ne te hais point.", en: "Go, I do not hate you. (= I love you; Corneille)" },
          { fr: "Il n'a guère le temps de lire.", en: "He hardly has time to read." },
          { fr: "Ces résultats ne sont guère encourageants.", en: "These results are hardly encouraging." },
          { fr: "Je n'en ai point entendu parler.", en: "I've heard nothing whatsoever about it. (archaic or ironic)" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "À moins qu'il ne pleut, nous irons à la plage.",
        right: "À moins qu'il ne pleuve, nous irons à la plage.",
        why: "The ne explétif doesn't change the mood: \"à moins que\" still takes the subjunctive. And it doesn't negate either: the sentence means unless it rains.",
      },
      {
        wrong: "Il est parti sans que personne ne le remarque.",
        right: "Il est parti sans que personne le remarque.",
        why: "\"Sans que\" already expresses absence; style guides advise against adding \"ne\", especially with \"personne\" or \"rien\".",
      },
      {
        wrong: "Les prix ne cessent pas d'augmenter.",
        right: "Les prix ne cessent d'augmenter.",
        why: "\"Ne cesser de\" (keep on) is normally used without \"pas\". With \"pas\", it's still correct but less idiomatic in writing.",
      },
      {
        wrong: "C'est plus difficile que je pensais pas.",
        right: "C'est plus difficile que je ne pensais.",
        why: "The comparison takes an optional ne explétif, never \"pas\". In casual speech, just \"que je pensais\".",
      },
    ],
    faqs: [
      {
        q: "Should I use the ne explétif in my own writing?",
        a: "Yes, in formal writing after verbs of fear, \"à moins que\" and \"de peur que\". After \"avant que\" it's optional and both forms are accepted. In speech you can leave it out.",
      },
      {
        q: "Is \"je ne sais\" without \"pas\" correct?",
        a: "Yes, in formal or literary style, especially before an infinitive or an indirect question: \"je ne sais que faire\", \"je ne sais s'il viendra\". In conversation, say \"je ne sais pas\".",
      },
      {
        q: "Is \"ne... point\" still used?",
        a: "Rarely, and mostly for effect: archaism, humour or quotations. You need to understand it in classic literature; you don't need to produce it.",
      },
    ],
    related: ["french-subjunctive-advanced", "imperfect-subjunctive", "grammar-of-french-proverbs"],
    lessons: [
      "c2-proverbs-2",
      "c2-figurative-language-2",
      "c2-historical-narrative-5",
      "c2-comprehensive-review-1",
    ],
  },
];
