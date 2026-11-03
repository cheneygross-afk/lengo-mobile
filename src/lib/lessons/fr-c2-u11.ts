// Synced from cheneygross-afk/lengo:src/lib/lessons/fr-c2-u11.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// French C2, Unit 11: Listening & Reading Strategies.

export const FR_C2_U11: Lesson[] = [
  {
    slug: "c2-comprehension-strategies-1",
    level: "FR-C2",
    number: 1,
    title: "Stratégies de Compréhension, Part 1 of 8",
    summary: "Infer the meaning of a word you have never met from its parts (in-dé-boulonn-able), the context, the tone and the type of text, and decide when a word is worth stopping for.",
    duration: "18 min",
    sections: [
      {
        heading: "Taking a word apart",
        body: [
          "At the Mastery level you will still meet unknown words in every newspaper and every novel, often invented for the occasion. Native readers rarely reach for a dictionary: they take the word apart. Consider \"indéboulonnable\": \"in-\" (not) + \"dé-\" (undo) + \"boulon\" (a bolt) + \"-able\" (that can be). Something that cannot be unbolted: a politician or manager who cannot be removed from office. You can understand it without ever having seen it.",
        ],
        examples: [
          { es: "Le directeur semble indéboulonnable malgré les critiques.", en: "The director seems impossible to remove despite the criticism." },
          { es: "Le gouvernement a mésestimé l'ampleur de la colère.", en: "The government underestimated the extent of the anger." },
          { es: "Les hôpitaux de la région restent sous-dotés en personnel.", en: "The region's hospitals remain understaffed." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A newspaper describes a minister as « indéboulonnable ». What does it mean?",
            options: ["Impossible to remove from office", "Impossible to understand", "Impossible to bribe", "Impossible to replace because of talent"],
            correctIndex: 0,
            explanation: "\"In-\" (not) + \"dé-\" (undo) + \"boulon\" (bolt) + \"-able\": he can't be unbolted from his seat.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "We [underestimated] the difficulty.",
            sentence: "Nous avons ___ la difficulté.",
            answer: "mésestimé",
            altAnswers: ["sous-estimé"],
            explanation: "\"Més-\" (badly) + \"estimer\"; \"sous-estimer\" is the everyday equivalent.",
          },
        ],
      },
      {
        heading: "The prefixes and suffixes that pay",
        body: [
          "The key prefixes: \"in-/im-/il-/ir-\" (not: \"irremplaçable\"), \"dé-/dés-\" (undo, remove: \"déverrouiller\"), \"re-/ré-\" (again: \"reconstruire\"), \"mé-/més-\" (badly: \"mésestimer\"), \"sur-\" (over: \"surestimer\"), \"sous-\" (under: \"sous-financé\"), \"a-/an-\" (without: \"apolitique\"), \"anti-\", \"contre-\". The key suffixes: \"-able/-ible\" (can be), \"-age\" and \"-tion\" (action), \"-ité\" and \"-isme\" (quality, doctrine), \"-iser\" (make), \"-ment\" (adverb or action noun), \"-eur/-euse\" (agent).",
        ],
        examples: [
          { es: "Ce document est irremplaçable pour les historiens.", en: "This document is irreplaceable for historians." },
          { es: "Il faut déverrouiller la porte avant de pousser.", en: "You have to unlock the door before pushing." },
          { es: "Son discours était totalement apolitique.", en: "His speech was completely apolitical." },
        ],
        checkpoint: [
          {
            type: "matching",
            instructions: "Match each prefix with its meaning.",
            pairs: [
              { left: "mé- / més-", right: "badly" },
              { left: "dé- / dés-", right: "undo, remove" },
              { left: "sous-", right: "under, insufficiently" },
              { left: "in- / ir- / il-", right: "not" },
              { left: "a- / an-", right: "without" },
            ],
            explanation: "Prefixes are the first tool for inferring unknown words.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The schools in this area are underfunded.",
            answer: "Les écoles de ce quartier sont sous-financées.",
            altAnswers: ["Les écoles du quartier sont sous-financées.", "Les écoles de cette zone sont sous-financées.", "Les écoles de ce secteur sont sous-financées.", "Les établissements scolaires de ce quartier sont sous-financés.", "Les écoles de cette région sont sous-financées."],
            explanation: "\"Sous-\" (under) + \"financé\": the prefix builds the meaning exactly as in English.",
          },
        ],
      },
      {
        heading: "Press coinages built the same way",
        body: [
          "Press French loves coinages built this way: \"la dédiabolisation\" of a party (making it seem less diabolical), \"la démondialisation\", \"l'infaisabilité\", \"les invisibilisés\". Decomposing them is not just a trick for learners; it is how the French themselves read them, and journalists count on it.",
        ],
        examples: [
          { es: "Le parti poursuit sa stratégie de dédiabolisation.", en: "The party is pursuing its strategy of detoxifying its image." },
          { es: "Certains économistes prônent la démondialisation.", en: "Some economists advocate deglobalisation." },
          { es: "L'infaisabilité technique du projet était évidente dès le départ.", en: "The technical unfeasibility of the project was obvious from the start." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "« Une politique de dédiabolisation » refers to:",
            options: ["making something seem less evil", "fighting against evil", "demonising an opponent", "a religious policy"],
            correctIndex: 0,
            explanation: "\"Dé-\" (undo) + \"diabol(e)\" + \"-isation\": undoing the diabolical image.",
          },
        ],
      },
      {
        heading: "Context gives the category",
        body: [
          "When morphology fails, the sentence and the text help. Context gives the category: in \"il a renversé son verre de vin sur la nappe en dentelle\", \"nappe\" must be something on a table that wine can stain; you don't need 'tablecloth' to keep reading. Look for definitions, synonyms and contrasts that writers slip in: \"un individu louche, pour ne pas dire suspect\" tells you \"louche\" means shady.",
        ],
        examples: [
          { es: "Il a renversé son verre de vin sur la nappe en dentelle.", en: "He spilt his glass of wine on the lace tablecloth." },
          { es: "C'était un individu louche, pour ne pas dire suspect.", en: "He was a shady character, not to say suspicious." },
          { es: "Il parlait un anglais approximatif, un véritable sabir.", en: "He spoke approximate English, a real pidgin." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "He's a shady character.",
            answer: "C'est un individu louche.",
            altAnswers: ["C'est un type louche.", "C'est un personnage louche.", "Il est louche.", "C'est un individu suspect."],
            explanation: "\"Louche\" means shady, suspicious; context like \"pour ne pas dire suspect\" often reveals it.",
          },
        ],
      },
      {
        heading: "Tone and text type",
        body: [
          "Tone tells you the attitude. In \"le ministre s'est fendu d'une déclaration laconique\", even if you don't know \"se fendre de\" (to make an effort to produce, ironically) or \"laconique\" (terse), the irony of the sentence suggests the statement was disappointing. Text type narrows the field: in a recipe, \"émincer\" will be a way of cutting; in a court report, \"débouter\" a legal decision.",
        ],
        examples: [
          { es: "Le ministre s'est fendu d'une déclaration laconique.", en: "The minister managed a terse statement." },
          { es: "Émincez finement les oignons et faites-les revenir.", en: "Slice the onions thinly and fry them gently." },
          { es: "Le tribunal a débouté le plaignant de toutes ses demandes.", en: "The court dismissed all the plaintiff's claims." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Le ministre s'est fendu d'une déclaration laconique.",
            question: "What is the journalist's attitude?",
            options: ["Ironic: the statement was disappointingly brief.", "Admiring: the statement was clear.", "Neutral: the statement was official.", "Angry: the statement was insulting."],
            correctIndex: 0,
            explanation: "\"Se fendre de\" mocks a minimal effort, and \"laconique\" means very brief.",
          },
          {
            type: "multiple-choice",
            question: "« Le rapport, d'une prolixité décourageante, compte huit cents pages. » What does « prolixité » most likely mean?",
            options: ["Excessive wordiness", "Great precision", "Lack of evidence", "Beautiful style"],
            correctIndex: 0,
            explanation: "\"Décourageante\" and \"huit cents pages\" point to excessive length: \"prolixe\" means wordy.",
          },
        ],
      },
      {
        heading: "Deciding whether to stop",
        body: [
          "Context also tells you how much you need. In a novel, a precise plant name in a description can be skipped; in a contract, every word counts. Strategy: keep going if the word is decorative, stop if it carries the argument (a verb in the main clause, a word that is repeated, a word in a title).",
        ],
        examples: [
          { es: "Dans un roman, un nom de plante peut être sauté sans dommage.", en: "In a novel, the name of a plant can be skipped safely." },
          { es: "Dans un contrat, chaque mot compte.", en: "In a contract, every word counts." },
          { es: "Un mot répété ou placé dans un titre porte l'argument.", en: "A word repeated, or placed in a title, carries the argument." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You meet an unknown word in the main verb of a newspaper headline. What should you do?",
            options: ["Stop and work it out: it carries the argument.", "Skip it: headlines are decorative.", "Replace it with a synonym and read on.", "Look only at the photograph."],
            correctIndex: 0,
            explanation: "A word in a title, in a main clause, or repeated carries the argument; a decorative word in a description can be skipped.",
          },
        ],
      },
      {
        heading: "Inference and false friends",
        body: [
          "Inference is powerful but dangerous with words that look like English. \"Un mémoire de fin d'études\" is a dissertation, not a memory; \"il a été licencié\" means he was dismissed, not licensed; \"la lecture\" is reading, not a lecture (\"un cours magistral\", \"une conférence\"). If your guess makes the sentence strange, the word may be a false friend.",
        ],
        examples: [
          { es: "Elle rédige son mémoire de master sur Simone Weil.", en: "She's writing her master's dissertation on Simone Weil." },
          { es: "Après vingt ans dans l'usine, il a été licencié.", en: "After twenty years at the factory, he was laid off." },
          { es: "La lecture du rapport m'a pris deux heures.", en: "Reading the report took me two hours." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "She's writing her dissertation.",
            answer: "Elle rédige son mémoire.",
            altAnswers: ["Elle écrit son mémoire.", "Elle est en train de rédiger son mémoire.", "Elle est en train d'écrire son mémoire."],
            explanation: "\"Un mémoire\" (masculine) is a dissertation; \"la mémoire\" (feminine) is memory.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Reading the contract took me an hour.",
            answer: "La lecture du contrat m'a pris une heure.",
            altAnswers: ["La lecture du contrat m'a pris une heure entière.", "Lire le contrat m'a pris une heure."],
            explanation: "\"La lecture\" is reading; a lecture is \"un cours magistral\" or \"une conférence\".",
          },
        ],
      },
      {
        heading: "Checking the guess against the context",
        body: [
          "Always check the guess against the whole context. \"À l'issue du procès, il a été relaxé\" might suggest he relaxed; in a legal context it means he was acquitted. \"Les candidats ont été achevés par l'épreuve de maths\": \"achever\" here jokes on 'finish off', which only makes sense if you know \"achever\" means both to complete and to kill.",
        ],
        examples: [
          { es: "Faute de preuves, le prévenu a été relaxé.", en: "For lack of evidence, the defendant was acquitted." },
          { es: "L'épreuve de maths a achevé les candidats.", en: "The maths exam finished the candidates off." },
          { es: "J'assiste au cours magistral du professeur Martin le lundi.", en: "I go to Professor Martin's lecture on Mondays." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The defendant was acquitted.",
            answer: "Le prévenu a été relaxé.",
            altAnswers: ["Le prévenu a été acquitté.", "L'accusé a été acquitté.", "La prévenue a été relaxée."],
            explanation: "\"Relaxer\" means to acquit \"un prévenu\" (tribunal correctionnel or de police); at the cour d'assises, \"l'accusé\" is \"acquitté\". The press often uses \"acquitté\" for both.",
          },
        ],
      },
      {
        heading: "A routine for reading on",
        body: [
          "A useful routine: guess, reread the sentence with your guess, check the next sentence for confirmation, and note the word if it comes back. Only reach for the dictionary when the word is central and your guess remains doubtful.",
        ],
        examples: [
          { es: "Devinez, relisez la phrase avec votre hypothèse, puis vérifiez la suivante.", en: "Guess, reread the sentence with your hypothesis, then check the next one." },
          { es: "Notez le mot s'il revient dans le texte.", en: "Note the word if it comes back in the text." },
          { es: "Le dictionnaire attend que le mot soit central et le doute persistant.", en: "The dictionary waits until the word is central and the doubt remains." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Faute de preuve, le prévenu a été relaxé par le tribunal qui a débouté le plaignant de tous ses demandes.",
            answer: "Faute de preuve, le prévenu a été relaxé par le tribunal qui a débouté le plaignant de toutes ses demandes.",
            explanation: "\"Une demande\" is feminine, so the determiner is \"toutes ses demandes\". The legal verbs \"relaxer\" (to acquit) and \"débouter\" (to dismiss a claim) are both correct here.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "This player is irreplaceable.",
        answer: "Ce joueur est irremplaçable.",
        altAnswers: ["Cette joueuse est irremplaçable."],
        explanation: "\"Ir-\" (not) + \"remplaçable\": the prefix assimilates before r.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The government overestimated growth.",
        answer: "Le gouvernement a surestimé la croissance.",
        explanation: "\"Sur-\" (over) + \"estimer\".",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "[Thinly slice] the shallots.",
        sentence: "___ finement les échalotes.",
        answer: "Émincez",
        altAnswers: ["Emincez", "Émince", "Coupez"],
        explanation: "\"Émincer\" (to slice thinly): in a recipe, the text type tells you it's a way of cutting.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "He was laid off after ten years.",
        answer: "Il a été licencié après dix ans.",
        altAnswers: ["Il a été licencié au bout de dix ans.", "On l'a licencié après dix ans.", "On l'a licencié au bout de dix ans."],
        explanation: "\"Licencier\" is to dismiss; a false friend for 'license'.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The court dismissed his claim.",
        answer: "Le tribunal l'a débouté de sa demande.",
        altAnswers: ["Le tribunal a rejeté sa demande.", "Le tribunal l'a débouté."],
        explanation: "\"Débouter quelqu'un de sa demande\" is the legal formula; text type tells you it is a court decision.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: The mayor managed a terse communiqué.",
        words: ["Le maire", "s'est fendu", "d'un communiqué", "laconique."],
        translation: "The mayor managed a terse communiqué.",
        explanation: "\"Se fendre de\" is ironic: it presents a minimal effort as a great one. \"Laconique\" = terse.",
      },
      {
        type: "dictation",
        audio: "Le directeur semble indéboulonnable.",
        explanation: "\"Indéboulonnable\": in + dé + boulon + able.",
      },
      {
        type: "speak",
        text: "La dédiabolisation du parti a pris des années.",
        prompt: "Say it in French: Detoxifying the party's image took years.",
        explanation: "\"Dé- + diabolisation\": the press builds nouns like this constantly, and readers decode them by parts.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Rewrite it with a verb built on « estimer » and a prefix.",
        source: "La mairie a mal évalué le coût des travaux.",
        answer: "La mairie a mésestimé le coût des travaux.",
        altAnswers: ["La mairie a sous-estimé le coût des travaux."],
        explanation: "\"Mé-\" means badly, so \"mésestimer\" is to misjudge; \"sous-\" would say he judged it too low.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The unfeasibility of the plan was obvious to the engineers.",
        answer: "L'infaisabilité du projet était évidente pour les ingénieurs.",
        altAnswers: ["L'infaisabilité du plan était évidente pour les ingénieurs."],
        explanation: "\"In- + faisable + -ité\": a coinage any French reader decodes on the spot.",
      },
    ],
  },
  {
    slug: "c2-infer-unknown-word-text-detective",
    level: "FR-C2",
    number: 2,
    title: "Text Detective: Deviner le Mot Inconnu",
    summary: "Rare words inside real sentences (un baragouin, s'esbaudir, une gabegie...): deduce their meaning from context, morphology and tone, and justify your guess.",
    duration: "17 min",
    sections: [
      {
        heading: "Text 1: the grandmother's letter",
        body: [
          "Read this original passage and try to guess the words in bold before reading the explanation. « Ton cousin est rentré de Londres avec un accent impossible. À table, il nous a servi un baragouin mi-anglais mi-français auquel personne n'a rien compris. Ton grand-père, qui est un peu dur d'oreille, l'a fait répéter trois fois, puis il a marmonné que de son temps, on parlait le français ou on se taisait. »",
        ],
        examples: [
          { es: "Il nous a servi un baragouin mi-anglais mi-français.", en: "He served us up some half-English, half-French gibberish." },
          { es: "De son temps, on parlait le français ou on se taisait.", en: "In his day, you spoke French or kept quiet." },
          { es: "Il l'a fait répéter trois fois.", en: "He made him repeat it three times." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In the letter, what does « un baragouin » mean, and what clue proves it?",
            options: ["Gibberish: \"personne n'a rien compris\"", "A dessert: \"à table\"", "A loud voice: \"dur d'oreille\"", "A long speech: \"trois fois\""],
            correctIndex: 0,
            explanation: "The mixture of languages and the fact that nobody understood point to gibberish.",
          },
        ],
      },
      {
        heading: "Baragouin, dur d'oreille: the clues",
        body: [
          "\"Un baragouin\": the context (\"mi-anglais mi-français\", \"personne n'a rien compris\") tells you it's an incomprehensible mixture of languages, gibberish. \"Baragouiner\" is the verb: \"il baragouine un peu d'italien\" (he speaks broken Italian). \"Dur d'oreille\": the grandfather makes him repeat three times, so it means hard of hearing.",
        ],
        examples: [
          { es: "Je baragouine un peu d'espagnol, assez pour commander au restaurant.", en: "I speak broken Spanish, enough to order in a restaurant." },
          { es: "Ton grand-père est un peu dur d'oreille.", en: "Your grandfather is a bit hard of hearing." },
          { es: "Personne n'a rien compris à son discours.", en: "Nobody understood a thing of his speech." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I speak broken German.",
            answer: "Je baragouine l'allemand.",
            altAnswers: ["Je baragouine un peu l'allemand.", "Je baragouine un peu d'allemand.", "Je parle un allemand approximatif.", "Je parle un mauvais allemand."],
            explanation: "\"Baragouiner une langue\": to speak it badly.",
          },
        ],
      },
      {
        heading: "The method, step by step",
        body: [
          "Notice the method: identify the grammatical category (\"un baragouin\" is a noun, object of \"servir\"), use what is said around it, and check against the tone (gentle mockery). Then confirm with the next mention: \"personne n'a rien compris\".",
        ],
        examples: [
          { es: "Identifiez d'abord la catégorie grammaticale du mot.", en: "First identify the word's part of speech." },
          { es: "Servez-vous de ce qui est dit autour.", en: "Use what is said around it." },
          { es: "Confirmez avec la mention suivante.", en: "Confirm with the next mention." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What is the first step of the method?",
            options: ["Decide what part of speech the word is.", "Translate the sentence into English.", "Look the word up at once.", "Skip the whole sentence."],
            correctIndex: 0,
            explanation: "Knowing that \"un baragouin\" is a noun and the object of \"servir\" already tells you what kind of guess to make.",
          },
        ],
      },
      {
        heading: "Text 2: the ironic chronicle",
        body: [
          "Now a newspaper chronicle, also original. « Le conseil municipal s'est esbaudi devant la nouvelle fontaine, un monument de deux millions d'euros qui ne fonctionne que trois mois par an. Les contribuables, eux, s'esbaudissent moins. L'opposition dénonce une gabegie sans précédent et réclame un audit des finances de la ville. »",
        ],
        examples: [
          { es: "Le conseil municipal s'est esbaudi devant la nouvelle fontaine.", en: "The town council went into raptures over the new fountain." },
          { es: "L'opposition dénonce une gabegie sans précédent.", en: "The opposition is denouncing unprecedented waste." },
          { es: "Une fontaine qui ne fonctionne que trois mois par an.", en: "A fountain that only works three months a year." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Les contribuables, eux, s'esbaudissent moins.",
            question: "What does the sentence imply?",
            options: ["Taxpayers are far from delighted.", "Taxpayers are paying less.", "Taxpayers are more numerous.", "Taxpayers are better informed."],
            correctIndex: 0,
            explanation: "\"S'esbaudir\" is to marvel; \"moins\" is an ironic understatement: they are not pleased at all.",
          },
        ],
      },
      {
        heading: "S'esbaudir, une gabegie: the clues",
        body: [
          "\"S'esbaudir\" (literary, jocular): the council admires the fountain, the taxpayers less so. The structure \"X s'est esbaudi... les contribuables s'esbaudissent moins\" contrasts enthusiasm with its absence, so it means to marvel, to be delighted, here with irony. \"Une gabegie\": the opposition denounces it after a two-million-euro fountain that rarely works, so it means waste, financial mismanagement.",
        ],
        examples: [
          { es: "Les contribuables, eux, s'esbaudissent moins.", en: "The taxpayers, for their part, are less delighted." },
          { es: "Elle réclame un audit des finances de la ville.", en: "She is calling for an audit of the town's finances." },
          { es: "Quelle gabegie, tous ces repas jetés à la poubelle !", en: "What a waste, all these meals thrown in the bin!" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The opposition denounces scandalous waste.",
            answer: "L'opposition dénonce une gabegie scandaleuse.",
            altAnswers: ["L'opposition dénonce un gaspillage scandaleux.", "L'opposition dénonce une gabegie.", "L'opposition dénonce un gâchis scandaleux."],
            explanation: "\"Une gabegie\" is waste through bad management, a word of the press and politics.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The fountain [only works] three months a year.",
            sentence: "La fontaine ___ trois mois par an.",
            answer: "ne fonctionne que",
            altAnswers: ["ne marche que"],
            explanation: "\"Ne... que\" = only; a crucial clue to the irony of the passage.",
          },
        ],
      },
      {
        heading: "Tone decides the meaning",
        body: [
          "Tone is decisive here: the chronicler uses a rare, old-fashioned verb on purpose to mock the council's naive admiration. If you read \"s'esbaudir\" as neutral, you miss the joke.",
        ],
        examples: [
          { es: "Le chroniqueur choisit un verbe vieilli pour se moquer.", en: "The chronicler picks an old-fashioned verb in order to mock." },
          { es: "Lire « s'esbaudir » au premier degré, c'est rater la plaisanterie.", en: "Reading \"s'esbaudir\" literally means missing the joke." },
          { es: "Le contraste entre les deux phrases porte l'ironie.", en: "The contrast between the two sentences carries the irony." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "« Il parle un sabir où se mêlent arabe, italien et français. » What is « un sabir »?",
            options: ["A mixed language, a pidgin", "A regional accent", "A secret code", "A song"],
            correctIndex: 0,
            explanation: "\"Où se mêlent\" three languages: a mixed contact language, a pidgin.",
          },
        ],
      },
      {
        heading: "Justifying a guess in French",
        body: [
          "In a DALF oral, you may be asked to explain a word from a document. Useful formulas: \"d'après le contexte, ce mot doit signifier...\", \"on peut déduire du contexte que...\", \"le préfixe in- indique une négation\", \"le ton ironique laisse penser que...\", \"ce terme désigne vraisemblablement...\".",
        ],
        examples: [
          { es: "D'après le contexte, ce mot doit signifier « gaspillage ».", en: "From the context, this word must mean 'waste'." },
          { es: "Le préfixe « in- » indique une négation.", en: "The prefix 'in-' indicates a negation." },
          { es: "Le ton ironique laisse penser que l'auteur désapprouve.", en: "The ironic tone suggests that the author disapproves." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[One can deduce from] the text that the author is ironic.",
            sentence: "___ texte que l'auteur est ironique.",
            answer: "On peut déduire du",
            altAnswers: ["Il ressort du"],
            explanation: "\"Déduire de\" + noun: \"de + le\" contracts to \"du\".",
          },
        ],
      },
      {
        heading: "Guess, evidence, limit",
        body: [
          "A good justification has three parts: the guess, the evidence (morphology, context, tone), and the limit of your certainty: \"je ne connais pas ce mot, mais vu qu'il s'agit d'un gaspillage d'argent public, il doit désigner une mauvaise gestion\".",
        ],
        examples: [
          { es: "On peut déduire du contexte qu'il s'agit d'une langue incompréhensible.", en: "One can deduce from the context that it is an incomprehensible language." },
          { es: "Ce terme désigne vraisemblablement une forme d'admiration.", en: "This term probably refers to a form of admiration." },
          { es: "Il s'agirait d'un verbe ancien, employé ici avec humour.", en: "It would seem to be an old verb, used humorously here." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "From the context, this word must refer to a tool.",
            answer: "D'après le contexte, ce mot doit désigner un outil.",
            altAnswers: ["D'après le contexte, ce mot doit désigner une sorte d'outil."],
            explanation: "\"Devoir\" + infinitive marks strong inference, and \"désigner\" is the verb for what a term refers to.",
          },
        ],
      },
      {
        heading: "Devoir, the conditional, vraisemblablement",
        body: [
          "Use the modal verb \"devoir\" for strong inference (\"ce mot doit vouloir dire...\"), the conditional for caution (\"il s'agirait de...\") and \"vraisemblablement\" or \"selon toute vraisemblance\" for formal probability.",
        ],
        examples: [
          { es: "Ce mot doit vouloir dire « mélange de langues ».", en: "This word must mean 'mixture of languages'." },
          { es: "Selon toute vraisemblance, il s'agit d'un terme régional.", en: "In all likelihood, it is a regional term." },
          { es: "Il s'agirait peut-être d'un régionalisme du Nord.", en: "It might perhaps be a regionalism from the North." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: The ironic tone suggests that the author is mocking the council.",
            words: ["Le ton ironique", "laisse penser", "que l'auteur", "se moque du conseil."],
            translation: "The ironic tone suggests that the author is mocking the council.",
            explanation: "\"Laisser penser que\" + indicative introduces an inference drawn from the tone.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Rewrite the guess more cautiously (use the conditional).",
            source: "C'est une invention du journaliste.",
            answer: "Il s'agirait d'une invention du journaliste.",
            altAnswers: ["Ce serait une invention du journaliste."],
            explanation: "The conditional \"il s'agirait de\" marks a guess rather than a statement, which is what an examiner wants to hear.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "He's a bit hard of hearing.",
        answer: "Il est un peu dur d'oreille.",
        altAnswers: ["Il est un peu sourd.", "Elle est un peu dure d'oreille."],
        explanation: "\"Dur d'oreille\" (hard of hearing): the context of repetition reveals it.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The tourists marvelled at the cathedral.",
        answer: "Les touristes se sont esbaudis devant la cathédrale.",
        altAnswers: ["Les touristes se sont extasiés devant la cathédrale.", "Les touristes se sont émerveillés devant la cathédrale.", "Les touristes s'esbaudissaient devant la cathédrale.", "Les touristes s'extasiaient devant la cathédrale."],
        explanation: "\"S'esbaudir devant\" (literary, often ironic) or \"s'extasier devant\"; agreement with \"les touristes\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "This term probably refers to a kind of tool.",
        answer: "Ce terme désigne vraisemblablement une sorte d'outil.",
        altAnswers: ["Ce terme désigne probablement une sorte d'outil.", "Ce terme doit désigner une sorte d'outil.", "Ce mot désigne vraisemblablement une sorte d'outil.", "Ce terme désigne sans doute une sorte d'outil."],
        explanation: "\"Vraisemblablement\" expresses formal probability.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "What a waste of public money!",
        answer: "Quelle gabegie d'argent public !",
        altAnswers: ["Quel gaspillage d'argent public !", "Quel gâchis d'argent public !", "Quelle gabegie !"],
        explanation: "\"Gabegie\" (formal, critical) or \"gaspillage\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "It would seem to be an old word, used humorously.",
        answer: "Il s'agirait d'un mot ancien, employé avec humour.",
        altAnswers: ["Il s'agirait d'un vieux mot, employé avec humour.", "Il s'agirait d'un mot ancien, utilisé avec humour.", "Il s'agirait d'un mot ancien employé avec humour."],
        explanation: "The conditional \"il s'agirait\" expresses a cautious hypothesis.",
      },
      {
        type: "matching",
        instructions: "Match each rare word with its meaning.",
        pairs: [
          { left: "un baragouin", right: "gibberish" },
          { left: "s'esbaudir", right: "to marvel, often ironically" },
          { left: "une gabegie", right: "wasteful mismanagement" },
          { left: "un sabir", right: "a pidgin" },
          { left: "laconique", right: "terse" },
        ],
        explanation: "Each meaning can be deduced from context, then confirmed.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Nobody understood a thing.",
        words: ["Personne", "n'a", "rien", "compris."],
        translation: "Nobody understood a thing.",
        explanation: "Double negation \"personne... rien\" without \"pas\".",
      },
      {
        type: "dictation",
        audio: "L'opposition réclame un audit des finances.",
        explanation: "\"Réclamer\" = to demand, to call for; the context of waste makes \"gabegie\" guessable in the same chronicle.",
      },
      {
        type: "speak",
        text: "On peut déduire du contexte qu'il s'agit d'une forme de gaspillage.",
        prompt: "Say it in French: One can deduce from the context that it is a kind of waste.",
        explanation: "\"Déduire de\" + \"il s'agit de\": the standard way to justify a guess aloud.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "On peut déduire du contexte qu'il s'agisse d'un gaspillage d'argent public.",
        answer: "On peut déduire du contexte qu'il s'agit d'un gaspillage d'argent public.",
        explanation: "\"Déduire que\" states a conclusion, so it takes the indicative: \"qu'il s'agit\", not the subjunctive.",
      },
    ],
  },
  {
    slug: "c2-comprehension-strategies-2",
    level: "FR-C2",
    number: 3,
    title: "Stratégies de Compréhension, Part 2 of 8",
    summary: "Register shifts and what they mean: switching between \"tu\" and \"vous\", dropping or restoring \"ne\", \"bagnole\" vs \"véhicule\", \"on\" vs \"nous\"; register as a signal of closeness, irony, anger or authority.",
    duration: "18 min",
    sections: [
      {
        heading: "Tu and vous: switching is a message",
        body: [
          "In French, the choice of \"tu\" or \"vous\" is not just politeness: a change in mid-relationship is an event. Moving from \"vous\" to \"tu\" (\"on peut se tutoyer ?\") signals closeness, and it is usually proposed by the older or senior person. Moving back from \"tu\" to \"vous\" is a cold shower: a couple arguing, a manager reasserting authority, a friend who has been offended.",
        ],
        examples: [
          { es: "On se connaît depuis six mois, on peut peut-être se tutoyer ?", en: "We've known each other for six months, shall we use \"tu\"?" },
          { es: "Écoutez, Thomas, je vous ai déjà dit que ce n'était pas négociable.", en: "Listen, Thomas, I've already told you it's not negotiable." },
          { es: "Après leur dispute, elle s'est remise à le vouvoyer.", en: "After their argument, she went back to calling him \"vous\"." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Your manager, who has always used « tu » with you, suddenly says: « Vous voudrez bien me rendre ce rapport ce soir. » What is she signalling?",
            options: ["Displeasure and a return to formal authority", "That she has forgotten your name", "That she wants to be friends", "That the report is optional"],
            correctIndex: 0,
            explanation: "Switching back to \"vous\" creates distance: it marks authority or annoyance.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Shall we use \"tu\" with each other?",
            answer: "On se tutoie ?",
            altAnswers: ["On peut se tutoyer ?", "Et si on se tutoyait ?", "On pourrait se tutoyer ?", "Ça vous dérange si on se tutoie ?", "Est-ce qu'on peut se tutoyer ?"],
            explanation: "\"Se tutoyer\" / \"se vouvoyer\": French has verbs for the choice itself.",
          },
        ],
      },
      {
        heading: "The ironic vous, the aggressive tu",
        body: [
          "Some \"vous\" are ironic or affectionate: an old married couple who \"se vouvoient\" by tradition, or a friend who says \"vous êtes trop aimable, Madame\" as a joke. Conversely, an unsolicited \"tu\" from a stranger can be aggressive (a road-rage \"tu vas avancer, oui ?\") or a sign of a shared community (young people, sport, some professions).",
        ],
        examples: [
          { es: "Mes grands-parents se sont vouvoyés toute leur vie.", en: "My grandparents called each other \"vous\" all their lives." },
          { es: "Tu vas avancer, oui ?", en: "Are you going to move or what?" },
          { es: "Vous êtes trop aimable, chère amie !", en: "You're too kind, my dear!" },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Après la dispute, elle s'est remise à le vouvoyer.",
            question: "What happened?",
            options: ["She went back to the formal \"vous\" with him.", "She started to call him \"tu\".", "She stopped speaking to him.", "She called him by his surname."],
            correctIndex: 0,
            explanation: "\"Se remettre à vouvoyer\": returning to \"vous\", a sign of coldness.",
          },
          {
            type: "listen-choose",
            audio: "On peut se tutoyer ?",
            question: "What is the speaker proposing?",
            options: ["To use the informal \"tu\"", "To use the formal \"vous\"", "To meet again", "To speak English"],
            correctIndex: 0,
            explanation: "\"Se tutoyer\": to use \"tu\" with each other.",
          },
        ],
      },
      {
        heading: "Tracking pronouns as you listen",
        body: [
          "When you listen to French films, interviews or dialogues in novels, track the pronouns: the switch often marks the turning point of a scene, and the author expects you to notice.",
        ],
        examples: [
          { es: "Dans les films, le passage au vous marque le tournant de la scène.", en: "In films, the switch to \"vous\" marks the turning point of the scene." },
          { es: "L'auteur compte sur vous pour le remarquer.", en: "The author is counting on you to notice it." },
          { es: "Notez qui propose le tutoiement : souvent l'aîné.", en: "Note who proposes the \"tu\": usually the elder." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "After the argument, he went back to using \"vous\" with her.",
            answer: "Après la dispute, il s'est remis à la vouvoyer.",
            altAnswers: ["Après la dispute, il a recommencé à la vouvoyer.", "Après leur dispute, il s'est remis à la vouvoyer.", "Après leur dispute, il a recommencé à la vouvoyer."],
            explanation: "\"Se remettre à\" + infinitive: to start again.",
          },
        ],
      },
      {
        heading: "Ne and on: two markers that move",
        body: [
          "Three other markers move with register. The negation: \"ne\" is dropped in almost all relaxed speech (\"je sais pas\"); restoring it in conversation (\"je ne sais pas\", stressed) sounds deliberate, cool or insistent. \"On\" replaces \"nous\" in speech; a speaker who suddenly uses \"nous\" may be speaking on behalf of an institution: \"nous ne pouvons pas accepter\".",
        ],
        examples: [
          { es: "Je sais pas, on verra demain.", en: "Dunno, we'll see tomorrow." },
          { es: "Je ne sais pas, et je ne veux pas le savoir.", en: "I do not know, and I do not want to know." },
          { es: "Nous ne pouvons pas accepter ces conditions.", en: "We cannot accept these conditions." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[I don't know], I'll ask tomorrow. (casual speech)",
            sentence: "___, je demanderai demain.",
            answer: "Je sais pas",
            altAnswers: ["J'sais pas"],
            explanation: "Relaxed speech drops the \"ne\": \"je sais pas\".",
          },
          {
            type: "multiple-choice",
            question: "In a friendly chat, your colleague suddenly says: « Je ne suis pas d'accord. Je ne suis pas d'accord du tout. » with every « ne » pronounced. What does it signal?",
            options: ["Firmness and controlled irritation", "Shyness", "A joke", "Indifference"],
            correctIndex: 0,
            explanation: "Restoring \"ne\" in casual speech makes the statement deliberate and insistent.",
          },
        ],
      },
      {
        heading: "Parallel series of words, and questions",
        body: [
          "Vocabulary has parallel series: \"bagnole / voiture / véhicule\", \"boulot / travail / emploi\", \"flic / policier / fonctionnaire de police\", \"bouffer / manger / se restaurer\". A police report says \"le véhicule\", a friend says \"la bagnole\". Questions too: \"tu viens ?\" (intonation), \"est-ce que tu viens ?\" (neutral), \"viens-tu ?\" (formal or literary).",
        ],
        examples: [
          { es: "Il a garé sa bagnole n'importe comment.", en: "He parked his car any old how." },
          { es: "Le véhicule était stationné sur un emplacement réservé.", en: "The vehicle was parked in a reserved space." },
          { es: "Viens-tu dîner samedi ?", en: "Will you come to dinner on Saturday?" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French. (police report)",
            source: "The vehicle was parked on the pavement.",
            answer: "Le véhicule était stationné sur le trottoir.",
            altAnswers: ["Le véhicule était garé sur le trottoir.", "Le véhicule se trouvait stationné sur le trottoir."],
            explanation: "Official register: \"véhicule\" and \"stationné\" rather than \"bagnole\" and \"garé\".",
          },
          {
            type: "matching",
            instructions: "Match each word with its register.",
            pairs: [
              { left: "le boulot", right: "familiar" },
              { left: "le travail", right: "neutral" },
              { left: "l'emploi", right: "formal or administrative" },
              { left: "le flic", right: "familiar for a police officer" },
              { left: "le fonctionnaire de police", right: "official for a police officer" },
            ],
            explanation: "Vocabulary series signal register as clearly as pronouns and negation.",
          },
        ],
      },
      {
        heading: "Reading the combination",
        body: [
          "Read the combination: a speaker who uses \"on\", drops \"ne\" and says \"bagnole\" is relaxed. If halfway through they switch to \"nous\", restore \"ne\" and say \"véhicule\", something has changed: they are now speaking officially, or are angry and controlling it.",
        ],
        examples: [
          { es: "On, pas de « ne », « bagnole » : le locuteur est détendu.", en: "\"On\", no \"ne\", \"bagnole\": the speaker is relaxed." },
          { es: "Nous, « ne » rétabli, « véhicule » : il parle au nom d'une institution.", en: "\"Nous\", the \"ne\" restored, \"véhicule\": he is speaking for an institution." },
          { es: "Le même locuteur peut passer de l'un à l'autre en deux phrases.", en: "The same speaker can move from one to the other in two sentences." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Rewrite it in the register of a police report.",
            source: "Il a garé sa bagnole sur un passage piéton.",
            answer: "Le véhicule était stationné sur un passage piéton.",
            altAnswers: ["Le véhicule a été stationné sur un passage piéton.", "Son véhicule était stationné sur un passage piéton."],
            explanation: "The official register changes the noun (\"le véhicule\"), the verb (\"stationner\") and removes the agent.",
          },
        ],
      },
      {
        heading: "Register as irony",
        body: [
          "Register shifts are also a tool of irony. A teenager who answers his mother \"Fort bien, Mère, je m'en vais de ce pas ranger ma chambre\" is mocking her with an absurdly formal register. A journalist who writes \"le ministre a piqué une colère\" (threw a tantrum) instead of \"a exprimé son mécontentement\" is taking sides.",
        ],
        examples: [
          { es: "Fort bien, Mère, je m'en vais de ce pas ranger ma chambre.", en: "Very well, Mother, I shall go forthwith and tidy my room." },
          { es: "Le ministre a piqué une colère devant les caméras.", en: "The minister threw a tantrum in front of the cameras." },
          { es: "Le ministre a exprimé son mécontentement.", en: "The minister expressed his displeasure." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A journalist writes: « Le ministre a piqué une colère. » What does the register reveal?",
            options: ["The journalist is mocking the minister.", "The journalist is neutral.", "The journalist admires the minister.", "The minister used colloquial language."],
            correctIndex: 0,
            explanation: "Colloquial \"piquer une colère\" (throw a tantrum) belittles him; a neutral report would say \"a exprimé son mécontentement\".",
          },
        ],
      },
      {
        heading: "Register as authority",
        body: [
          "Authority uses the opposite move: from a friendly \"on\" to an impersonal \"il est demandé à chacun de\", from \"tu\" to \"vous\", from \"ça\" to \"cela\". Teachers, parents and managers all do it: \"Bon, les enfants, on range ?\" becomes, three minutes later, \"Je vous demande de ranger immédiatement.\"",
        ],
        examples: [
          { es: "Bon, les enfants, on range ?", en: "Right, kids, shall we tidy up?" },
          { es: "Je vous demande de ranger immédiatement.", en: "I am asking you to tidy up immediately." },
          { es: "Il est demandé à chacun de respecter les horaires.", en: "Everyone is asked to respect the timetable." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French. (formal notice)",
            source: "Everyone is asked to switch off their phone.",
            answer: "Il est demandé à chacun d'éteindre son téléphone.",
            altAnswers: ["Il est demandé à chacun d'éteindre son portable.", "Chacun est prié d'éteindre son téléphone.", "Chacun est prié d'éteindre son portable.", "Il est demandé à tous d'éteindre leur téléphone."],
            explanation: "The impersonal passive \"il est demandé à chacun de\" removes the person and adds authority.",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: Visitors are asked not to touch the works.",
            words: ["Il est demandé", "aux visiteurs", "de ne pas", "toucher les œuvres."],
            translation: "Visitors are asked not to touch the works.",
            explanation: "The impersonal passive of a public notice: nobody is named as asking.",
          },
        ],
      },
      {
        heading: "Three questions when the register moves",
        body: [
          "As a listener, ask three questions when register changes: who is speaking now (a person or a role)? to whom (friend, subordinate, public)? with what attitude (warmth, irony, anger, authority)? Responding at the right register is the next step, practised in the dialogue lab.",
        ],
        examples: [
          { es: "Qui parle maintenant : une personne ou un rôle ?", en: "Who is speaking now: a person or a role?" },
          { es: "À qui : un ami, un subordonné, le public ?", en: "To whom: a friend, a subordinate, the public?" },
          { es: "Avec quelle attitude : chaleur, ironie, colère, autorité ?", en: "With what attitude: warmth, irony, anger, authority?" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A colleague moves from « on y va ? » to « nous vous prions de bien vouloir patienter ». What has changed?",
            options: ["He is now speaking as the institution, not as himself.", "He has become friendlier.", "He is making a joke about politeness.", "He is speaking to one person instead of several."],
            correctIndex: 0,
            explanation: "\"Nous\" plus the formula \"prier quelqu'un de bien vouloir\" belongs to the institution's voice; the person has stepped into a role.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "My grandparents always called each other \"vous\".",
        answer: "Mes grands-parents se sont toujours vouvoyés.",
        altAnswers: ["Mes grands-parents se vouvoyaient toujours.", "Mes grands-parents se sont toujours dit vous.", "Mes grands-parents se vouvoyaient."],
        explanation: "\"Se vouvoyer\": reciprocal pronominal verb with être; the participle agrees.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French. (formal)",
        source: "We cannot accept this offer.",
        answer: "Nous ne pouvons pas accepter cette offre.",
        altAnswers: ["Nous ne pouvons accepter cette offre.", "Nous ne sommes pas en mesure d'accepter cette offre."],
        explanation: "\"Nous\" and full negation mark the institutional voice; \"ne pouvoir\" can even drop \"pas\" in formal style.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "He left his [car] in the middle of the street. (casual)",
        sentence: "Il a laissé sa ___ au milieu de la rue.",
        answer: "bagnole",
        altAnswers: ["caisse"],
        explanation: "\"Bagnole\" (and \"caisse\") are the familiar words for a car; a report would say \"le véhicule\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Right, children, time to tidy up, isn't it?",
        answer: "Bon, les enfants, on range, d'accord ?",
        altAnswers: ["Bon, les enfants, on range maintenant ?"],
        explanation: "\"On\" plus a question with intonation is the friendly register a parent or teacher starts with.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "I am asking you to leave the room immediately.",
        answer: "Je vous demande de quitter la salle immédiatement.",
        altAnswers: ["Je vous demande de sortir de la salle immédiatement."],
        explanation: "\"Vous\" plus \"je vous demande de\" is the authority register the same speaker shifts into.",
      },
      {
        type: "speak",
        text: "La ministre a exprimé son désaccord.",
        prompt: "Say it in French, neutrally: The minister expressed her disagreement.",
        explanation: "The neutral verb reports without taking sides, unlike \"piquer une colère\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Ses parents se sont vouvoyé pendant cinquante ans.",
        answer: "Ses parents se sont vouvoyés pendant cinquante ans.",
        explanation: "With a reciprocal pronominal verb, the participle agrees with the subject when the pronoun is the direct object: \"ils se sont vouvoyés\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Dunno, I'll see tomorrow.",
        answer: "Je sais pas, je verrai demain.",
        altAnswers: ["J'sais pas, je verrai demain."],
        explanation: "Relaxed speech drops the \"ne\" entirely: \"je sais pas\". Restoring it would sound deliberate or cold.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "[Everyone is asked] to keep the hall clean. (notice in a building)",
        sentence: "___ de maintenir le hall propre.",
        answer: "Il est demandé à chacun",
        altAnswers: ["Il est demandé à tous"],
        explanation: "The impersonal \"il est demandé à chacun de\" removes both the speaker and the person addressed: the voice of a notice.",
      },
    ],
  },
  {
    slug: "c2-register-shift-dialogue-lab",
    level: "FR-C2",
    number: 4,
    title: "Dialogue Lab: Repérer le Changement de Registre",
    summary: "Mid-conversation someone switches from \"tu\" to \"vous\" or from slang to formal French: work out what they are communicating (coldness, a joke, a threat, a return to business) and respond accordingly.",
    duration: "18 min",
    sections: [
      {
        heading: "Scene 1: the friendly boss",
        body: [
          "Julien, a web developer in a small Bordeaux agency, has been on \"tu\" terms with his boss Hélène for two years. Friday afternoon: « Hélène : Julien, t'as deux minutes ? Julien : Ouais, bien sûr, qu'est-ce qui se passe ? Hélène : C'est le site de la mairie.",
        ],
        examples: [
          { es: "Julien, t'as deux minutes ?", en: "Julien, have you got a minute?" },
          { es: "Bah, c'est rien, je corrige ça lundi.", en: "Oh, it's nothing, I'll fix it on Monday." },
          { es: "Ouais, bien sûr, qu'est-ce qui se passe ?", en: "Yeah, sure, what's up?" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French. (casual)",
            source: "You haven't seen my keys, have you?",
            answer: "T'aurais pas vu mes clés ?",
            altAnswers: ["Tu n'aurais pas vu mes clés ?", "Tu aurais pas vu mes clés ?", "Vous n'auriez pas vu mes clés ?", "Tu n'aurais pas vu mes clefs ?", "T'aurais pas vu mes clefs ?"],
            explanation: "The negative conditional question is the polite-casual way to ask; \"t'aurais\" is the spoken contraction.",
          },
        ],
      },
      {
        heading: "Scene 1: the boss turns formal",
        body: [
          "Le client a appelé, il est furieux. Julien : Ah, les bugs du formulaire ? Bah, c'est rien, je corrige ça lundi. Hélène : Non, Julien. Vous allez corriger ça ce soir. Et vous m'enverrez un compte rendu écrit de ce qui s'est passé. »",
        ],
        examples: [
          { es: "Non, Julien. Vous allez corriger ça ce soir.", en: "No, Julien. You are going to fix it tonight." },
          { es: "Vous m'enverrez un compte rendu écrit.", en: "You will send me a written report." },
          { es: "Le client a appelé, il est furieux.", en: "The client called; he is furious." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Non, Julien. Vous allez corriger ça ce soir.",
            question: "What does the switch to « vous » communicate?",
            options: ["This is now an official, serious demand.", "She has forgotten they use \"tu\".", "She's joking.", "She is talking to several people."],
            correctIndex: 0,
            explanation: "Switching from \"tu\" to \"vous\" marks a reprimand.",
          },
        ],
      },
      {
        heading: "What triggered the switch",
        body: [
          "Hélène switches from \"t'as deux minutes ?\" (familiar, ne-less) to \"vous allez corriger ça ce soir\": the switch to \"vous\", together with the future tense and the precise demand (\"un compte rendu écrit\"), signals that this is now an official reprimand. Julien's casual \"bah, c'est rien\" was the trigger.",
        ],
        examples: [
          { es: "Le futur « vous m'enverrez » rend la demande officielle.", en: "The future \"vous m'enverrez\" makes the demand official." },
          { es: "« Bah, c'est rien » a déclenché le changement.", en: "\"Bah, c'est rien\" triggered the change." },
          { es: "La demande devient précise : un écrit, ce soir.", en: "The demand becomes precise: in writing, tonight." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Hélène has switched to « vous ». Which reply is the most appropriate?",
            options: ["Entendu. Je m'en occupe tout de suite.", "T'inquiète, c'est réglé lundi.", "Bah, pourquoi tu me vouvoies ?", "Ouais, ouais, je verrai."],
            correctIndex: 0,
            explanation: "Mirroring the formal register shows you have understood that this is now serious.",
          },
        ],
      },
      {
        heading: "Mirroring her register",
        body: [
          "The right response is to follow her into the formal register, without sulking or switching back to jokes: « Entendu. Je m'en occupe tout de suite et je vous envoie le compte rendu avant vingt heures. » Mirroring the register shows you have understood the seriousness.",
        ],
        examples: [
          { es: "Entendu. Je m'en occupe tout de suite.", en: "Understood. I'll deal with it right away." },
          { es: "Je vous envoie le compte rendu avant vingt heures.", en: "I'll send you the report before 8 pm." },
          { es: "Je vous tiens au courant dès que le correctif est en ligne.", en: "I'll keep you informed as soon as the fix is live." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French. (formal reply to your manager)",
            source: "Understood, I'll fix it this evening.",
            answer: "C'est entendu, je corrige cela ce soir.",
            altAnswers: ["Entendu, je corrige cela ce soir.", "C'est entendu, je règle cela ce soir."],
            explanation: "The formal register keeps \"cela\" rather than \"ça\" and states a precise commitment.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French. (to your manager, formally)",
            source: "I'll send you the report before six.",
            answer: "Je vous envoie le compte rendu avant dix-huit heures.",
            altAnswers: ["Je vous enverrai le compte rendu avant dix-huit heures.", "Je vous envoie le compte rendu avant 18 heures.", "Je vous enverrai le compte rendu avant 18 heures.", "Je vous envoie le rapport avant dix-huit heures.", "Je vous enverrai le rapport avant dix-huit heures.", "Je vous envoie le compte rendu avant 18 h."],
            explanation: "Formal mirroring: \"vous\" and the 24-hour clock of professional French.",
          },
        ],
      },
      {
        heading: "Scene 2: the joke vous",
        body: [
          "Two flatmates in Lyon, Inès and Karim: « Karim : Inès, t'aurais pas vu mon chargeur ? Inès : Votre chargeur, très cher ? Il gît sur la table basse, là où Monsieur l'a abandonné hier soir. Karim : Ah, merci. Inès : Et Monsieur voudrait-il, par la même occasion, sortir les poubelles, qui l'attendent depuis trois jours ? »",
        ],
        examples: [
          { es: "T'aurais pas vu mon chargeur ?", en: "You haven't seen my charger, have you?" },
          { es: "Votre chargeur, très cher ? Il gît sur la table basse.", en: "Your charger, my dear? It lies upon the coffee table." },
          { es: "Là où Monsieur l'a abandonné hier soir.", en: "Where His Lordship abandoned it last night." },
          { es: "Monsieur voudrait-il sortir les poubelles ?", en: "Would His Lordship care to take the bins out?" },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Monsieur voudrait-il sortir les poubelles ?",
            question: "What is the tone?",
            options: ["Teasing mock-formality", "Genuine respect", "Fear", "Indifference"],
            correctIndex: 0,
            explanation: "Third-person \"Monsieur\" and inversion addressed to a flatmate are a joke.",
          },
        ],
      },
      {
        heading: "Why it is teasing, not coldness",
        body: [
          "Here \"vous\", \"très cher\", \"Monsieur\" in the third person, the verb \"gésir\" and the inversion \"voudrait-il\" are not coldness but mock-formality: Inès is teasing Karim about his laziness. The exaggeration is the clue: nobody really speaks like a butler to a flatmate.",
        ],
        examples: [
          { es: "Personne ne parle comme un majordome à son colocataire.", en: "Nobody talks like a butler to a flatmate." },
          { es: "L'exagération est l'indice : « très cher », « gît », « voudrait-il ».", en: "The exaggeration is the clue: \"très cher\", \"gît\", \"voudrait-il\"." },
          { es: "Elle se moque gentiment de la paresse de son colocataire.", en: "She is gently mocking her flatmate's laziness." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Why does Inès use « vous » and « Monsieur »?",
            options: ["To tease Karim with mock formality", "Because she is angry and wants distance", "Because they have just met", "Because Karim is older than her"],
            correctIndex: 0,
            explanation: "Exaggerated formality between flatmates is ironic, not cold.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Would His Lordship care to] help me? (teasing)",
            sentence: "___ m'aider ?",
            answer: "Monsieur voudrait-il",
            altAnswers: ["Monsieur daignerait-il", "Monsieur aurait-il l'amabilité de"],
            explanation: "Third person + conditional inversion: ironic mock-formality.",
          },
        ],
      },
      {
        heading: "Playing along",
        body: [
          "The best response plays along or concedes with humour: « Monsieur s'exécute, Madame. » or simply « Ok, ok, j'y vais ! » Taking the \"vous\" literally (\"Pourquoi tu me vouvoies ?\") would show you missed the joke.",
        ],
        examples: [
          { es: "Monsieur s'exécute, Madame.", en: "His Lordship obeys, Madam." },
          { es: "Ok, ok, j'y vais !", en: "OK, OK, I'm going!" },
          { es: "Madame est trop bonne, j'y vais de ce pas.", en: "Madam is too kind; I shall go at once." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French. (casual, to a flatmate)",
            source: "All right, all right, I'm taking the bins out!",
            answer: "Bon, bon, je sors les poubelles !",
            altAnswers: ["Ok, ok, je sors les poubelles !"],
            explanation: "Playing along in the casual register: the joke needs no explanation, just the action.",
          },
        ],
      },
      {
        heading: "Scene 3: from slang to threat",
        body: [
          "At a neighbourhood meeting, a resident, Marc, shouts at the building manager: « Marc : Ça fait trois mois que l'ascenseur est en rade, vous vous foutez de nous ou quoi ? Le gestionnaire : Monsieur, je comprends votre colère, mais je vous demanderai de rester courtois. Marc : Courtois ? Très bien. Dans ce cas, je vous informe que nous saisirons le tribunal si les travaux ne sont pas réalisés sous quinze jours. »",
        ],
        examples: [
          { es: "Ça fait trois mois que l'ascenseur est en rade.", en: "The lift has been out of order for three months." },
          { es: "Je comprends votre colère, mais je vous demanderai de rester courtois.", en: "I understand your anger, but I must ask you to remain polite." },
          { es: "Je vous informe que nous saisirons le tribunal.", en: "I am informing you that we will take the matter to court." },
          { es: "Si les travaux ne sont pas réalisés sous quinze jours...", en: "If the work is not carried out within a fortnight..." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The lift has been [out of order] for a week. (casual)",
            sentence: "L'ascenseur est ___ depuis une semaine.",
            answer: "en rade",
            altAnswers: ["en panne", "HS", "hors service"],
            explanation: "\"En rade\" is familiar; \"en panne\" neutral; \"hors service\" official.",
          },
        ],
      },
      {
        heading: "Why the formal register is the more dangerous",
        body: [
          "Marc moves from slang (\"en rade\", broken down; \"vous vous foutez de nous\", vulgar) to formal administrative French (\"je vous informe que nous saisirons le tribunal\"). The second register is more threatening than the first: formal language announces legal action. The manager's \"je vous demanderai de rester courtois\" (the future of politeness) is the classic way to call someone to order.",
        ],
        examples: [
          { es: "La langue administrative annonce une action en justice.", en: "Administrative language announces legal action." },
          { es: "« Je vous demanderai de » est un futur de politesse qui rappelle à l'ordre.", en: "\"Je vous demanderai de\" is a future of politeness that calls someone to order." },
          { es: "Le vouvoiement de Marc est plus menaçant que ses insultes.", en: "Marc's switch to \"vous\" is more threatening than his insults." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French. (formal)",
            source: "I must ask you to remain polite.",
            answer: "Je vous demanderai de rester courtois.",
            altAnswers: ["Je vous demanderai de rester courtoise.", "Je vous demanderai de rester poli.", "Je vous demanderai de rester polie.", "Je vous demande de rester courtois.", "Je vous prierai de rester courtois."],
            explanation: "The future \"je vous demanderai\" is a polite but firm formula for calling someone to order.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French. (formal)",
            source: "We will take the matter to court.",
            answer: "Nous saisirons le tribunal.",
            altAnswers: ["Nous saisirons la justice.", "Nous allons saisir le tribunal.", "Nous porterons l'affaire devant le tribunal.", "Nous allons saisir la justice."],
            explanation: "\"Saisir le tribunal\" is the formal expression for bringing a case; the switch to it is a threat.",
          },
        ],
      },
      {
        heading: "De-escalating without changing sides",
        body: [
          "To de-escalate, the manager should stay in neutral-formal and propose something concrete: « Je prends note. Je vous propose de faire un point écrit avec l'ascensoriste d'ici vendredi. » Getting dragged into slang (\"calmez-vous, on n'est pas au marché\") would escalate.",
        ],
        examples: [
          { es: "Je prends note de votre demande.", en: "I'm making a note of your request." },
          { es: "Je vous propose de faire un point écrit d'ici vendredi.", en: "I suggest we put a written update together by Friday." },
          { es: "Je vous propose un rendez-vous avec l'ascensoriste mardi.", en: "I suggest a meeting with the lift engineer on Tuesday." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I'm making a note of your complaint.",
            answer: "Je prends note de votre réclamation.",
            altAnswers: ["Je prends note de votre plainte."],
            explanation: "\"Prendre note de\" is the neutral-formal way to receive a complaint without conceding anything yet.",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: I suggest we have a meeting on Friday.",
            words: ["Je", "vous", "propose", "de", "faire", "un", "point", "vendredi."],
            translation: "I suggest we have a meeting on Friday.",
            explanation: "\"Je vous propose de\" + infinitive: a neutral, constructive proposal.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "I understand your anger.",
        answer: "Je comprends votre colère.",
        altAnswers: ["Je comprends ta colère.", "Je comprends que vous soyez en colère.", "Je comprends que tu sois en colère."],
        explanation: "Acknowledging the emotion before the request is the de-escalation move.",
      },
      {
        type: "multiple-choice",
        question: "A friend who has always said « tu » writes: « Je vous remercie de ne plus me contacter. » What is happening?",
        options: ["She is ending the friendship coldly.", "She is joking.", "She is asking you to phone her instead.", "She is being extra polite."],
        correctIndex: 0,
        explanation: "A sudden formal \"vous\" in writing from a close friend is a deliberate break.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French. (formal)",
        source: "If the work is not done within a fortnight, we will take legal action.",
        answer: "Si les travaux ne sont pas réalisés sous quinze jours, nous saisirons la justice.",
        altAnswers: ["Si les travaux ne sont pas effectués sous quinze jours, nous saisirons la justice.", "Si les travaux ne sont pas réalisés sous quinze jours, nous saisirons le tribunal.", "Si les travaux ne sont pas réalisés d'ici quinze jours, nous saisirons la justice.", "Si les travaux ne sont pas réalisés sous quinzaine, nous saisirons la justice.", "Si les travaux ne sont pas réalisés sous quinze jours, nous engagerons des poursuites."],
        explanation: "\"Sous quinze jours\" (within a fortnight) and \"saisir la justice\" belong to the formal register of threats.",
      },
      {
        type: "matching",
        instructions: "Match each register shift with what it usually signals.",
        pairs: [
          { left: "tu → vous from a manager", right: "an official reprimand" },
          { left: "exaggerated vous between friends", right: "teasing" },
          { left: "slang → legal language", right: "a threat of action" },
          { left: "vous → tu proposed by an elder", right: "growing closeness" },
          { left: "tu → vous from a close friend in writing", right: "a cold break" },
        ],
        explanation: "The switch, not the register itself, carries the message.",
      },
      {
        type: "speak",
        text: "J'en prends note et je reviens vers vous vendredi.",
        prompt: "Say it in French: I'm making a note of it and I'll come back to you on Friday.",
        explanation: "Neutral-formal register plus a concrete date: the de-escalation move.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Rewrite the reply so it follows your manager into the formal register.",
        source: "T'inquiète, c'est réglé lundi.",
        answer: "Entendu, je règle cela ce soir et je vous envoie un compte rendu.",
        altAnswers: ["Entendu, je règle cela ce soir et je vous fais un compte rendu écrit."],
        explanation: "Mirroring the register means \"vous\", a full verb and a precise commitment; \"t'inquiète\" would sound as if you had not understood.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Je vous informe que nous saisirons le tribunal si les travaux ne sont pas réalisé sous quinze jours.",
        answer: "Je vous informe que nous saisirons le tribunal si les travaux ne sont pas réalisés sous quinze jours.",
        explanation: "In the passive, the participle agrees with the subject: \"les travaux... ne sont pas réalisés\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "I understand your irritation, but I must ask you to wait.",
        answer: "Je comprends votre agacement, mais je vous demanderai de patienter.",
        altAnswers: ["Je comprends votre agacement, mais je vous demanderai d'attendre."],
        explanation: "The future of politeness \"je vous demanderai de\" calls someone to order without raising the voice.",
      },
    ],
  },
  {
    slug: "c2-comprehension-strategies-3",
    level: "FR-C2",
    number: 5,
    title: "Stratégies de Compréhension, Part 3 of 8",
    summary: "Implicit logical links: cause, consequence, opposition and concession expressed by juxtaposition, the colon, the gérondif, the participle, \"or\" and simple order; rebuild the hidden connector to check your understanding.",
    duration: "19 min",
    sections: [
      {
        heading: "Two sentences, one hidden link",
        body: [
          "Good French prose often leaves out connectors. Two sentences side by side force the reader to supply the link: \"Il pleuvait. Le match a été annulé.\" (cause → consequence: so).",
        ],
        examples: [
          { es: "Il pleuvait depuis l'aube. Le match a été annulé.", en: "It had been raining since dawn, so the match was called off." },
          { es: "Elle a travaillé jour et nuit. Elle a échoué.", en: "She worked day and night. Yet she failed." },
          { es: "Ils avaient tout prévu. Rien ne s'est passé comme prévu.", en: "They had planned everything. And yet nothing went to plan." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Elle a tout donné. Elle a perdu.",
            question: "What is the implicit link between the two sentences?",
            options: ["Opposition: she gave everything, yet she lost.", "Cause: she lost because she gave everything.", "Time: she lost, then gave everything.", "Condition: if she gives everything, she'll lose."],
            correctIndex: 0,
            explanation: "The juxtaposition implies \"pourtant\": a result contrary to expectation.",
          },
        ],
      },
      {
        heading: "The reader supplies the connector",
        body: [
          "\"Elle a travaillé jour et nuit. Elle a échoué.\" (opposition: yet). The reader rebuilds \"donc\" or \"pourtant\" from the content. Style manuals praise this sobriety; it is everywhere in journalism and literature.",
        ],
        examples: [
          { es: "Le verglas couvrait la chaussée. Le car est resté au dépôt.", en: "Ice covered the roadway. The coach stayed in the depot." },
          { es: "Deux phrases côte à côte suffisent : le lecteur ajoute le lien.", en: "Two sentences side by side are enough: the reader adds the link." },
          { es: "Les manuels de style appellent cela de la sobriété.", en: "Style manuals call that sobriety." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Rewrite the two sentences as one, with « donc ».",
            source: "La route était verglacée. Le car n'est pas parti.",
            answer: "La route était verglacée, donc le car n'est pas parti.",
            altAnswers: ["La route était verglacée ; donc le car n'est pas parti."],
            explanation: "The reader of the juxtaposed version already supplies \"donc\"; writing it out only makes the consequence visible. \"Car\" would reverse the logic.",
          },
        ],
      },
      {
        heading: "The colon, the French connector",
        body: [
          "The colon (les deux-points) is the French connector par excellence, used much more than in English. It can announce a cause (\"Il est resté chez lui : il était malade\", because), a consequence (\"Il était malade : il est resté chez lui\", so), an explanation or an example. The order of the clauses tells you which.",
        ],
        examples: [
          { es: "Il est resté chez lui : il avait de la fièvre.", en: "He stayed at home because he had a temperature." },
          { es: "Les loyers ont doublé : les familles quittent le centre-ville.", en: "Rents have doubled, so families are leaving the town centre." },
          { es: "Le constat est simple : nous dépensons plus que nous ne gagnons.", en: "The conclusion is simple: we spend more than we earn." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "« Les loyers ont doublé : les familles quittent le centre-ville. » What link does the colon express?",
            options: ["Consequence (so)", "Concession (although)", "Opposition (but)", "Time (when)"],
            correctIndex: 0,
            explanation: "The first fact causes the second: \"donc\", \"si bien que\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, using a colon instead of 'because'.",
            source: "He stayed in bed because he was ill.",
            answer: "Il est resté au lit : il était malade.",
            altAnswers: ["Il est resté couché : il était malade.", "Il est resté au lit : il était souffrant."],
            explanation: "After the colon, the second clause explains the first: the implicit link is \"car\".",
          },
        ],
      },
      {
        heading: "Which connector could you insert?",
        body: [
          "Reading strategy: when you meet a full stop or a colon between two ideas, ask which connector you could insert (\"car\", \"donc\", \"mais\", \"pourtant\", \"c'est-à-dire\") without changing the meaning. If two connectors are possible, the ambiguity may be deliberate.",
        ],
        examples: [
          { es: "Entre deux idées, essayez « car », puis « donc ».", en: "Between two ideas, try \"car\", then \"donc\"." },
          { es: "Si les deux fonctionnent, l'ambiguïté est peut-être voulue.", en: "If both work, the ambiguity may be deliberate." },
          { es: "Le point et les deux-points posent la même question au lecteur.", en: "The full stop and the colon ask the reader the same question." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, with a colon instead of 'so'.",
            source: "The bridge was closed, so we took the ferry.",
            answer: "Le pont était fermé : nous avons pris le bac.",
            altAnswers: ["Le pont était fermé : on a pris le bac.", "Le pont était fermé : nous avons pris le ferry.", "Le pont était fermé : on a pris le ferry."],
            explanation: "The colon carries the consequence; no connector needed.",
          },
        ],
      },
      {
        heading: "The gérondif and its logical values",
        body: [
          "The gérondif (\"en\" + present participle) has a basic meaning of simultaneity, but context often adds a logical value. Means: \"c'est en forgeant qu'on devient forgeron\" (by doing). Cause: \"en voulant bien faire, il a tout gâché\" (because he wanted).",
        ],
        examples: [
          { es: "En voulant bien faire, il a tout gâché.", en: "By trying to do the right thing, he ruined everything." },
          { es: "En partant maintenant, tu arriveras à l'heure.", en: "If you leave now, you'll get there on time." },
          { es: "Tout en reconnaissant ses torts, il refuse de s'excuser.", en: "Although he admits he was wrong, he refuses to apologise." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "« Tout en dénonçant la réforme, le syndicat a signé l'accord. » What does « tout en » add?",
            options: ["Concession: although it denounced the reform", "Cause: because it denounced the reform", "Time: after denouncing the reform", "Condition: if it denounced the reform"],
            correctIndex: 0,
            explanation: "\"Tout en\" + participle marks a contradiction between the two actions.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French with a gérondif.",
            source: "If you book today, you'll get a seat.",
            answer: "En réservant aujourd'hui, tu auras une place.",
            altAnswers: ["En réservant aujourd'hui, vous aurez une place."],
            explanation: "The gérondif plus a future main verb reads as a condition: \"en réservant\" = \"si tu réserves\".",
          },
        ],
      },
      {
        heading: "Tout en: admitting and refusing at once",
        body: [
          "Condition: \"en partant maintenant, tu arriveras à l'heure\" (if you leave now). Concession, often with \"tout\": \"tout en reconnaissant ses torts, il refuse de s'excuser\" (while admitting / although he admits).",
        ],
        examples: [
          { es: "Tout en souriant, elle a refusé net.", en: "While smiling, she flatly refused." },
          { es: "Tout en approuvant le projet, la mairie en repousse le financement.", en: "While approving the project, the council is putting off its funding." },
          { es: "Sans « tout », la forme marque surtout la simultanéité.", en: "Without \"tout\", the form mainly marks things happening at the same time." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Although she admits] the problem, she won't change anything.",
            sentence: "___ le problème, elle ne changera rien.",
            answer: "Tout en reconnaissant",
            altAnswers: ["Tout en admettant"],
            explanation: "\"Tout en\" + participle adds concession: although.",
          },
        ],
      },
      {
        heading: "The participial clause, more written",
        body: [
          "The participial clause (without \"en\") is more written and often expresses cause: \"Constatant l'absence de quorum, le président a levé la séance\" (Since he noted / because). \"Ayant perdu ses clés, elle a dû appeler un serrurier\" (Having lost / because she had lost). With its own subject, the absolute participle is very formal: \"Le contrat signé, chacun est rentré chez soi\" (once the contract was signed).",
        ],
        examples: [
          { es: "Constatant l'absence de quorum, le président a levé la séance.", en: "Noting the lack of a quorum, the chairman closed the meeting." },
          { es: "Ayant perdu ses clés, elle a dû appeler un serrurier.", en: "Having lost her keys, she had to call a locksmith." },
          { es: "Le contrat signé, chacun est rentré chez soi.", en: "Once the contract was signed, everyone went home." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "« Ayant raté le dernier métro, ils sont rentrés à pied. » What is the implicit link?",
            options: ["Cause: because they had missed the last metro", "Concession: although they had missed it", "Condition: if they missed it", "Purpose: in order to miss it"],
            correctIndex: 0,
            explanation: "The compound participle gives the prior cause: \"comme ils avaient raté\".",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Noting] the lack of a quorum, the chair closed the meeting.",
            sentence: "___ l'absence de quorum, la présidente a levé la séance.",
            answer: "Constatant",
            altAnswers: ["Ayant constaté"],
            explanation: "The present participle at the head of the sentence gives the cause.",
          },
        ],
      },
      {
        heading: "Turning the participle into a full clause",
        body: [
          "To check understanding, turn the participle into a full clause: \"comme il constatait\", \"parce qu'elle avait perdu\", \"une fois que le contrat a été signé\". If you can do it, you've read the link correctly.",
        ],
        examples: [
          { es: "« Constatant » se relit « comme il constatait ».", en: "\"Constatant\" can be reread as \"comme il constatait\"." },
          { es: "« Ayant perdu » devient « parce qu'elle avait perdu ».", en: "\"Ayant perdu\" becomes \"parce qu'elle avait perdu\"." },
          { es: "Si la réécriture tient, le lien est bien lu.", en: "If the rewriting works, you have read the link correctly." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Once the agreement was signed, the strike ended.",
            answer: "L'accord signé, la grève a pris fin.",
            altAnswers: ["Une fois l'accord signé, la grève a pris fin.", "L'accord signé, la grève s'est terminée.", "Une fois l'accord signé, la grève s'est terminée.", "Une fois que l'accord a été signé, la grève a pris fin."],
            explanation: "The absolute participle (\"l'accord signé\") expresses prior time, very formal.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Rewrite it with a full clause instead of the participle.",
            source: "Ayant oublié son badge, il a attendu à l'accueil.",
            answer: "Comme il avait oublié son badge, il a attendu à l'accueil.",
            altAnswers: ["Parce qu'il avait oublié son badge, il a attendu à l'accueil."],
            explanation: "The participle hides a cause, so the full clause takes \"comme\" or \"parce que\" plus the pluperfect; a present tense would lose the order of events.",
          },
        ],
      },
      {
        heading: "Or: the turn of the argument",
        body: [
          "\"Or\" is a tiny word with a big logical role, and English speakers often skip it. It introduces a new fact that moves the argument forward, often a turning point or the minor premise of a syllogism: \"Tous les candidats devaient rendre leur dossier avant lundi. Or, le sien est arrivé mardi.\" (Now, however, his arrived on Tuesday.) It is not 'gold' and not 'or'.",
        ],
        examples: [
          { es: "Tous les dossiers devaient arriver lundi. Or, le sien est arrivé mardi.", en: "All the applications were due on Monday. His, however, arrived on Tuesday." },
          { es: "Tout homme est mortel. Or, Socrate est un homme.", en: "All men are mortal. Now, Socrates is a man." },
          { es: "Le gouvernement promettait une baisse des impôts. Or, la dette explose.", en: "The government was promising tax cuts. But debt is now soaring." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, using « or ».",
            source: "The meeting was set for nine. However, nobody came.",
            answer: "La réunion était prévue à neuf heures. Or, personne n'est venu.",
            altAnswers: ["La réunion était fixée à neuf heures. Or, personne n'est venu.", "La réunion était prévue à 9 heures. Or, personne n'est venu.", "La réunion était prévue à neuf heures. Or personne n'est venu."],
            explanation: "\"Or\" introduces the new fact that changes the situation.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, using « or ».",
            source: "The law requires a permit. Now, they never asked for one.",
            answer: "La loi exige un permis. Or, ils n'en ont jamais demandé.",
            altAnswers: ["La loi impose un permis. Or, ils n'en ont jamais demandé.", "La loi exige un permis. Or ils n'en ont jamais demandé.", "La loi exige une autorisation. Or, ils n'en ont jamais demandé.", "La loi exige un permis. Or, elles n'en ont jamais demandé."],
            explanation: "\"Or\" brings in the decisive fact; \"en\" replaces \"un permis\".",
          },
        ],
      },
      {
        heading: "The detached adjective",
        body: [
          "Simple order can also hide concession. \"Riche, il vivait pourtant comme un moine\" (although he was rich). \"Malade, elle est venue quand même.\" An adjective in front position, detached by a comma, often has a causal or concessive value that \"pourtant\" or \"quand même\" makes explicit.",
        ],
        examples: [
          { es: "Riche, il vivait pourtant comme un moine.", en: "Although he was rich, he lived like a monk." },
          { es: "Malade, elle est venue quand même.", en: "Though she was ill, she came all the same." },
          { es: "Épuisés, les coureurs ont abandonné au trentième kilomètre.", en: "Exhausted, the runners dropped out at the thirtieth kilometre." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: Although she was tired, she kept going.",
            words: ["Fatiguée,", "elle", "a", "pourtant", "continué."],
            translation: "Although she was tired, she kept going.",
            explanation: "Detached adjective + \"pourtant\": implicit concession made explicit.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Although he was famous, he lived simply.",
            answer: "Célèbre, il vivait pourtant simplement.",
            altAnswers: ["Bien qu'il fût célèbre, il vivait simplement.", "Bien qu'il soit célèbre, il vivait simplement.", "Quoique célèbre, il vivait simplement.", "Bien que célèbre, il vivait simplement.", "Célèbre, il vivait pourtant modestement."],
            explanation: "A detached adjective + \"pourtant\", or \"bien que\" + subjunctive.",
          },
        ],
      },
      {
        heading: "When the devices combine",
        body: [
          "In complex press texts, these devices combine: \"Le gouvernement promettait une baisse des impôts. Or, la dette explose : la promesse paraît intenable.\" Read: 'The government promised... But now, debt is exploding, so the promise seems untenable.' Rebuilding the hidden logic is the surest way to summarise a text correctly.",
        ],
        examples: [
          { es: "Dans la presse, ces procédés se cumulent.", en: "In the press, these devices pile up." },
          { es: "Une promesse, puis « or », puis des deux-points : trois liens en deux phrases.", en: "A promise, then \"or\", then a colon: three links in two sentences." },
          { es: "Reconstituer la logique cachée, c'est résumer juste.", en: "Rebuilding the hidden logic is the way to summarise correctly." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "« La ville annonçait des pistes cyclables. Or, le budget a été gelé : les travaux attendront. » Which links does the paragraph hide?",
            options: ["Opposition, then consequence.", "Cause, then condition.", "Consequence, then concession.", "Time, then purpose."],
            correctIndex: 0,
            explanation: "\"Or\" introduces the fact that contradicts the announcement, and the colon then announces its consequence; no condition or purpose is expressed anywhere.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French with a gérondif.",
        source: "By trying to help, he made things worse.",
        answer: "En voulant aider, il a aggravé les choses.",
        altAnswers: ["En voulant aider, il a empiré les choses.", "En essayant d'aider, il a aggravé les choses.", "En voulant aider, il a aggravé la situation.", "En essayant d'aider, il a aggravé la situation."],
        explanation: "The gérondif expresses cause or means.",
      },
      {
        type: "matching",
        instructions: "Match each implicit structure with the connector it hides.",
        pairs: [
          { left: "Il pleuvait : on est restés.", right: "donc" },
          { left: "On est restés : il pleuvait.", right: "car" },
          { left: "Il a tout donné. Il a perdu.", right: "pourtant" },
          { left: "En partant tôt, tu l'auras.", right: "si" },
          { left: "Tout en l'aimant, il est parti.", right: "bien que" },
        ],
        explanation: "Clause order, punctuation and \"tout en\" signal the hidden link.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Having lost her keys, she called a locksmith.",
        words: ["Ayant", "perdu", "ses", "clés,", "elle", "a", "appelé", "un", "serrurier."],
        translation: "Having lost her keys, she called a locksmith.",
        explanation: "The compound participle expresses a prior cause.",
      },
      {
        type: "dictation",
        audio: "Or, personne n'est venu.",
        explanation: "\"Or\" (however, now) introduces a decisive fact.",
      },
      {
        type: "speak",
        text: "C'est en forgeant qu'on devient forgeron.",
        prompt: "Say it in French: It is by practising that one learns.",
        explanation: "The proverb is the clearest case of the gérondif of means: \"en forgeant\" = by doing the work.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Fatigué, les coureurs ont pourtant terminé la course.",
        answer: "Fatigués, les coureurs ont pourtant terminé la course.",
        explanation: "A detached adjective in front position still agrees with the subject: \"fatigués, les coureurs\". The comma does not cut the agreement.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Change the sentence so that the colon announces the cause.",
        source: "La salle était pleine : nous sommes repartis.",
        answer: "Nous sommes repartis : la salle était pleine.",
        altAnswers: ["Nous sommes repartis : il n'y avait plus de place."],
        explanation: "With a colon the order decides the relation: effect first, then colon, gives the cause; the original order gave the consequence.",
      },
    ],
  },
  {
    slug: "c2-implicit-connectors-transformations",
    level: "FR-C2",
    number: 6,
    title: "Transformations: Expliciter les Liens Implicites",
    summary: "Take juxtaposed sentences with no connectors, find the hidden relation, rewrite with the right connector (car, si bien que, alors que, pourtant, dès lors), then compress back into an elegant implicit version.",
    duration: "18 min",
    sections: [
      {
        heading: "Step 1: add the connector the writer left out",
        body: [
          "This workshop goes both ways. First, expand: add the connector that the writer left out. The choice of connector also brings grammar with it. \"Car\" (for, because) joins two main clauses and never starts a sentence answering 'why'. \"Si bien que\"",
        ],
        examples: [
          { es: "Le prix du gaz a triplé, si bien que les usines ferment.", en: "The price of gas has tripled, with the result that factories are closing." },
          { es: "Les usines ferment, car le prix du gaz a triplé.", en: "Factories are closing, because the price of gas has tripled." },
          { es: "Le témoin s'est rétracté. Dès lors, l'accusation s'effondre.", en: "The witness has retracted. Consequently, the prosecution's case collapses." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "« Il travaille beaucoup. Il gagne peu. » Which connector makes the link explicit without changing the meaning?",
            options: ["Il travaille beaucoup, pourtant il gagne peu.", "Il travaille beaucoup, donc il gagne peu.", "Il travaille beaucoup, car il gagne peu.", "Il travaille beaucoup, si bien qu'il gagne peu."],
            correctIndex: 0,
            explanation: "The expected result (high pay) doesn't follow: opposition, \"pourtant\". \"Car\" would be a possible but different reading: he works a lot because he earns little.",
          },
        ],
      },
      {
        heading: "Each connector brings its own grammar",
        body: [
          "(so that, with the result that) takes the indicative. \"Alors que\" (whereas) contrasts two facts. \"Pourtant\" (yet) is an adverb, so it can move. \"Dès lors\" (consequently, from then on) is formal.",
        ],
        examples: [
          { es: "Il a révisé tout l'été ; pourtant, il a échoué.", en: "He revised all summer; yet he failed." },
          { es: "Elle adore la montagne, alors que son mari préfère la mer.", en: "She loves the mountains, whereas her husband prefers the sea." },
          { es: "Bien que le prix ait triplé, l'usine tient bon.", en: "Although the price has tripled, the factory is holding on." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, with « si bien que ».",
            source: "It snowed all night, so the roads were closed.",
            answer: "Il a neigé toute la nuit, si bien que les routes ont été fermées.",
            altAnswers: ["Il a neigé toute la nuit, si bien que les routes étaient fermées.", "Il a neigé toute la nuit si bien que les routes ont été fermées.", "Il a neigé pendant toute la nuit, si bien que les routes ont été fermées."],
            explanation: "\"Si bien que\" + indicative expresses the consequence.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The witness lied. [Consequently], the trial must start again.",
            sentence: "Le témoin a menti. ___, le procès doit reprendre.",
            answer: "Dès lors",
            altAnswers: ["Par conséquent", "De ce fait"],
            explanation: "\"Dès lors\" (formal) expresses a consequence that follows from a fact.",
          },
        ],
      },
      {
        heading: "Two directions, two emphases",
        body: [
          "Example: \"Le prix du gaz a triplé. Les usines ferment.\" → \"Le prix du gaz a triplé, si bien que les usines ferment.\" Or, with a cause first: \"Les usines ferment, car le prix du gaz a triplé.\" Both are correct; the first emphasises the consequence, the second the explanation.",
        ],
        examples: [
          { es: "La conséquence d'abord : « si bien que » la met en valeur.", en: "Consequence first: \"si bien que\" highlights it." },
          { es: "L'explication d'abord : « car » répond à la question posée.", en: "The explanation first: \"car\" answers the question asked." },
          { es: "Les deux versions sont correctes ; l'accent change.", en: "Both versions are correct; the emphasis changes." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Rewrite it so the cause comes second, with « car ».",
            source: "Le prix du blé a doublé, si bien que le pain augmente.",
            answer: "Le pain augmente, car le prix du blé a doublé.",
            altAnswers: ["Le pain augmente car le prix du blé a doublé."],
            explanation: "Putting the consequence first and \"car\" second turns the sentence into an explanation; \"donc\" would state the consequence twice.",
          },
        ],
      },
      {
        heading: "Concession takes the subjunctive, contrast does not",
        body: [
          "Watch the subjunctive: \"bien que\" and \"quoique\" (concession) take it, \"alors que\" and \"tandis que\" (contrast) don't. \"Bien que le prix ait triplé, les usines tiennent\" but \"alors que le prix a triplé, les usines tiennent\".",
        ],
        examples: [
          { es: "Quoique la salle soit petite, l'acoustique y est excellente.", en: "Although the hall is small, the acoustics in it are excellent." },
          { es: "Tandis que les prix montent, les salaires stagnent.", en: "While prices are rising, wages are stagnating." },
          { es: "Alors que la loi existe, personne ne l'applique.", en: "Even though the law exists, nobody applies it." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Although] the shop is small, it sells everything.",
            sentence: "___ le magasin soit petit, on y trouve de tout.",
            answer: "Bien que",
            altAnswers: ["Quoique"],
            explanation: "\"Bien que\" + subjunctive (\"soit\") for concession.",
          },
          {
            type: "multiple-choice",
            question: "Which sentence is grammatically correct?",
            options: ["Bien qu'il soit riche, il vit simplement.", "Bien qu'il est riche, il vit simplement.", "Alors qu'il soit riche, il vit simplement.", "Si bien qu'il soit riche, il vit simplement."],
            correctIndex: 0,
            explanation: "\"Bien que\" takes the subjunctive; \"alors que\" and \"si bien que\" take the indicative.",
          },
        ],
      },
      {
        heading: "Step 2: compressing with a participle",
        body: [
          "Now the reverse: a heavy sentence full of connectors can be made more elegant. \"Comme il avait raté son train, et parce qu'il ne voulait pas être en retard, il a pris un taxi\" → \"Ayant raté son train, il a pris un taxi pour ne pas être en retard.\" The participle absorbs the cause, \"pour\" the purpose.",
        ],
        examples: [
          { es: "Ayant raté son train, il a pris un taxi pour ne pas être en retard.", en: "Having missed his train, he took a taxi so as not to be late." },
          { es: "Ayant terminé son rapport, elle a éteint la lumière.", en: "Having finished her report, she turned off the light." },
          { es: "Le participe absorbe la cause, « pour » exprime le but.", en: "The participle absorbs the cause, \"pour\" expresses the purpose." },
          { es: "Le bail expiré, l'entreprise a quitté les locaux.", en: "When the lease expired, the company left the premises." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, with a participle.",
            source: "Since he had lost his passport, he couldn't fly.",
            answer: "Ayant perdu son passeport, il n'a pas pu prendre l'avion.",
            altAnswers: ["Ayant perdu son passeport, il n'a pas pu embarquer.", "Ayant perdu son passeport, il n'a pas pu partir en avion.", "Ayant perdu son passeport, il ne pouvait pas prendre l'avion."],
            explanation: "The compound participle absorbs \"comme il avait perdu\".",
          },
        ],
      },
      {
        heading: "The colon, the noun phrase, the adjective",
        body: [
          "Other compression tools: the colon (\"il n'est pas venu parce qu'il était malade\" → \"il n'est pas venu : il était malade\"), a nominal phrase (\"parce que les pluies ont été abondantes\" → \"en raison de pluies abondantes\"; \"parce qu'il n'a pas plu\" → \"faute de pluie\"), a detached adjective (\"bien qu'elle fût épuisée\" → \"épuisée, elle continuait\").",
        ],
        examples: [
          { es: "Il n'est pas venu : il était malade.", en: "He didn't come; he was ill." },
          { es: "En raison de pluies abondantes, la récolte a été retardée.", en: "Owing to heavy rain, the harvest was delayed." },
          { es: "Faute de pluie, les champs sont brûlés.", en: "For lack of rain, the fields are scorched." },
          { es: "Épuisée, elle continuait pourtant à marcher.", en: "Exhausted though she was, she kept on walking." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, using « faute de ».",
            source: "For lack of money, the project was abandoned.",
            answer: "Faute d'argent, le projet a été abandonné.",
            altAnswers: ["Faute de moyens, le projet a été abandonné.", "Faute de financement, le projet a été abandonné.", "Faute d'argent, on a abandonné le projet.", "Faute de fonds, le projet a été abandonné."],
            explanation: "\"Faute de\" + noun compresses a negative cause into a phrase.",
          },
          {
            type: "listen-choose",
            audio: "Faute de pluie, les champs sont brûlés.",
            question: "What does it mean?",
            options: ["Because there has been no rain, the fields are scorched.", "Because of the rain, the fields are flooded.", "Although it rained, the fields are dry.", "The rain is to blame for the burnt fields."],
            correctIndex: 0,
            explanation: "\"Faute de\" = for lack of: a cause expressed by a phrase.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, with « en raison de ».",
            source: "Owing to the strike, the train is cancelled.",
            answer: "En raison de la grève, le train est supprimé.",
            altAnswers: ["En raison de la grève, le train est annulé.", "En raison d'une grève, le train est supprimé.", "En raison d'une grève, le train est annulé."],
            explanation: "\"En raison de\" + noun compresses a causal clause.",
          },
        ],
      },
      {
        heading: "Compress, but keep the structure readable",
        body: [
          "Compression is a mark of Mastery writing, but don't overdo it: a text where every link is implicit becomes hard to follow. In a DALF synthesis, the logical structure must stay clear; use implicit links inside paragraphs and explicit connectors between them.",
        ],
        examples: [
          { es: "Un texte entièrement implicite devient illisible.", en: "A text in which everything is implicit becomes unreadable." },
          { es: "Gardez les connecteurs explicites entre les paragraphes.", en: "Keep the explicit connectors between paragraphs." },
          { es: "À l'intérieur d'un paragraphe, l'implicite allège le style.", en: "Inside a paragraph, implicit links lighten the style." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In a synthesis, where should the connectors stay explicit?",
            options: ["Between the paragraphs, so the structure stays visible.", "Nowhere: implicit links are always more elegant.", "In every single sentence of the text.", "Only in the opening sentence."],
            correctIndex: 0,
            explanation: "The marker has to see the plan, so the links between paragraphs are spelled out; inside a paragraph the implicit version is still more elegant.",
          },
        ],
      },
      {
        heading: "Step 3: the press paragraph, implicit",
        body: [
          "Original paragraph (implicit): « Les centres-villes se vident. Les loyers y ont doublé en dix ans ; les commerces de proximité ferment les uns après les autres. Les municipalités multiplient les annonces. Rien ne change. »",
        ],
        examples: [
          { es: "Les commerces de proximité ferment les uns après les autres.", en: "Local shops are closing one after another." },
          { es: "Les loyers ont doublé ; dès lors, les jeunes familles partent.", en: "Rents have doubled; consequently, young families are leaving." },
          { es: "Les loyers ayant doublé, les familles partent.", en: "With rents having doubled, families are leaving." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: The rent having tripled, the baker gave up.",
            words: ["Le loyer", "ayant triplé,", "le boulanger", "a renoncé."],
            translation: "The rent having tripled, the baker gave up.",
            explanation: "The absolute participle has its own subject (\"le loyer\") and compresses a whole cause clause into three words.",
          },
        ],
      },
      {
        heading: "The same paragraph, explicit",
        body: [
          "Explicit version: « Les centres-villes se vident, car les loyers y ont doublé en dix ans, si bien que les commerces de proximité ferment les uns après les autres. Les municipalités multiplient les annonces ; pourtant, rien ne change. » Every link is now visible: cause (car), consequence (si bien que), opposition (pourtant).",
        ],
        examples: [
          { es: "Les centres-villes se vident, car les loyers y ont doublé en dix ans.", en: "Town centres are emptying because rents there have doubled in ten years." },
          { es: "Les municipalités multiplient les annonces ; pourtant, rien ne change.", en: "Councils keep making announcements; yet nothing changes." },
          { es: "Les annonces se multiplient, alors que les résultats se font attendre.", en: "Announcements are multiplying, whereas results are slow to come." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Councils are promising a plan; yet the shops keep closing.",
            answer: "Les municipalités promettent un plan ; pourtant, les commerces continuent de fermer.",
            altAnswers: ["Les municipalités promettent un plan ; pourtant, les commerces ferment toujours."],
            explanation: "\"Pourtant\" is an adverb, so it sits after the semicolon with a comma; the opposition is between the promise and the facts.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, with « alors que ».",
            source: "He loves jazz, whereas his wife hates it.",
            answer: "Il adore le jazz, alors que sa femme le déteste.",
            altAnswers: ["Il adore le jazz alors que sa femme le déteste.", "Il adore le jazz, tandis que sa femme le déteste.", "Il aime le jazz, alors que sa femme le déteste.", "Il adore le jazz, alors que sa femme a horreur de ça."],
            explanation: "\"Alors que\" (whereas) + indicative contrasts two facts.",
          },
        ],
      },
      {
        heading: "Choosing which version to produce",
        body: [
          "The implicit version is more forceful and more journalistic; the explicit version is clearer for a summary or a synthesis. At the Mastery level you should be able to read the first and produce either, depending on the task.",
        ],
        examples: [
          { es: "La version implicite frappe plus fort.", en: "The implicit version hits harder." },
          { es: "La version explicite se résume plus facilement.", en: "The explicit version is easier to summarise." },
          { es: "L'épreuve demande parfois l'une, parfois l'autre.", en: "The exam asks sometimes for one, sometimes for the other." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Les loyers ayant doublés, les familles s'éloignent du centre.",
            answer: "Les loyers ayant doublé, les familles s'éloignent du centre.",
            explanation: "In this absolute construction the participle of an intransitive verb conjugated with \"avoir\" stays invariable: \"les loyers ayant doublé\". Only the subject of \"s'éloigner\" governs its own verb.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, with « car ».",
        source: "The shop closed because the rent was too high.",
        answer: "Le magasin a fermé, car le loyer était trop élevé.",
        altAnswers: ["Le magasin a fermé car le loyer était trop élevé.", "La boutique a fermé, car le loyer était trop élevé.", "Le magasin a fermé, car le loyer était trop cher."],
        explanation: "\"Car\" joins the explanation after a comma.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, with a colon.",
        source: "She didn't come; she was working.",
        answer: "Elle n'est pas venue : elle travaillait.",
        altAnswers: ["Elle n'est pas venue : elle était au travail.", "Elle n'est pas venue : elle bossait."],
        explanation: "The colon carries the cause; the imparfait gives the background.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, with a detached adjective.",
        source: "Though she was exhausted, she kept working.",
        answer: "Épuisée, elle a pourtant continué à travailler.",
        altAnswers: ["Épuisée, elle continuait pourtant à travailler.", "Bien qu'épuisée, elle a continué à travailler.", "Bien qu'elle soit épuisée, elle a continué à travailler.", "Épuisée, elle a quand même continué à travailler.", "Bien qu'elle fût épuisée, elle a continué à travailler."],
        explanation: "The detached adjective + \"pourtant\" compresses \"bien qu'elle fût épuisée\".",
      },
      {
        type: "matching",
        instructions: "Match each connector with the relation it expresses.",
        pairs: [
          { left: "car", right: "cause" },
          { left: "si bien que", right: "consequence" },
          { left: "alors que", right: "contrast" },
          { left: "bien que", right: "concession" },
          { left: "dès lors", right: "formal consequence" },
        ],
        explanation: "Each connector also brings its grammar: \"bien que\" + subjunctive, the others + indicative.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: For lack of time, we gave up.",
        words: ["Faute", "de", "temps,", "nous", "avons", "renoncé."],
        translation: "For lack of time, we gave up.",
        explanation: "\"Faute de\" + noun without article.",
      },
      {
        type: "dictation",
        audio: "Il a neigé, si bien que l'école est fermée.",
        explanation: "\"Si bien que\" + indicative: consequence.",
      },
      {
        type: "speak",
        text: "Ayant perdu le contrat, l'entreprise a réduit ses dépenses.",
        prompt: "Say it in French: Having lost the contract, the firm cut its costs.",
        explanation: "The participle at the front absorbs the cause, which is the compression move of this workshop.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Rewrite it without a connector, using a colon.",
        source: "Le musée a fermé parce que le toit menaçait de s'effondrer.",
        answer: "Le musée a fermé : le toit menaçait de s'effondrer.",
        altAnswers: ["Le musée a fermé : son toit menaçait de s'effondrer."],
        explanation: "The colon carries the cause on its own, so \"parce que\" can go; keeping both would state the link twice.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Faute de preuves, le juge a classé l'affaire, si bien que la plainte soit restée sans suite.",
        answer: "Faute de preuves, le juge a classé l'affaire, si bien que la plainte est restée sans suite.",
        explanation: "\"Si bien que\" states a real result, so it takes the indicative: \"est restée\". Only \"bien que\" would call for the subjunctive.",
      },
    ],
  },
  {
    slug: "c2-comprehension-strategies-4",
    level: "FR-C2",
    number: 7,
    title: "Stratégies de Compréhension, Part 4 of 8",
    summary: "Fast, unscripted speech: schwa deletion (j'te l'dis), reductions (chais pas, chuis, t'as, y a, p't-être, 'fin), dropped liaisons, fillers and tics (du coup, en fait, genre, en mode, bah, quoi, tu vois), and overlapping turns on radio and TV.",
    duration: "19 min",
    sections: [
      {
        heading: "The mute e disappears",
        body: [
          "The biggest gap between textbook French and real speech is the mute e (the schwa, as in \"le\", \"de\", \"je\", \"petit\"). In normal conversation most of them disappear: \"je te le dis\" becomes \"j'te l'dis\", \"tu ne le sais pas\" becomes \"tu l'sais pas\", \"petit\" becomes \"p'tit\", \"maintenant\" becomes \"maint'nant\".",
        ],
        examples: [
          { es: "J'te l'dis, il viendra pas.", en: "I'm telling you, he won't come." },
          { es: "Chais pas où j'ai mis mes clés.", en: "Dunno where I put my keys." },
          { es: "Chuis crevé, j'vais m'coucher.", en: "I'm knackered, I'm going to bed." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Chais pas où il est.",
            question: "What does it mean?",
            options: ["I don't know where he is.", "I know where he is.", "He doesn't know where it is.", "Look where he is."],
            correctIndex: 0,
            explanation: "\"Chais pas\" is \"je ne sais pas\": ne drops, and je + sais fuse into ch.",
          },
        ],
      },
      {
        heading: "Never three consonants in a row",
        body: [
          "The rule of thumb is that French avoids three consonants in a row, so one e is kept in a chain: \"je ne te le dis pas\" → \"j'te l'dis pas\" or \"je t'le dis pas\".",
        ],
        examples: [
          { es: "« Je ne te le dis pas » devient « j'te l'dis pas ».", en: "\"Je ne te le dis pas\" becomes \"j'te l'dis pas\"." },
          { es: "Le français évite trois consonnes de suite.", en: "French avoids three consonants in a row." },
          { es: "Un seul e muet survit dans la chaîne.", en: "A single mute e survives in the chain." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Say it as fast speech would.",
            source: "Je ne te le demande pas.",
            answer: "J'te l'demande pas.",
            altAnswers: ["Je t'le demande pas."],
            explanation: "One mute e has to survive so that three consonants never meet: \"j'te l'demande pas\" or \"je t'le demande pas\", but never both e sounds dropped at once.",
          },
        ],
      },
      {
        heading: "Spellings that have become conventional",
        body: [
          "Some reductions are so common that they have conventional spellings in comics, chats and dialogue: \"chais pas\" or \"j'sais pas\" (je ne sais pas, with je + s fusing into ch), \"chuis\" (je suis), \"t'as\" (tu as), \"t'es\" (tu es), \"y a\" (il y a), \"faut\"",
        ],
        examples: [
          { es: "T'as vu l'heure ? Faut y aller !", en: "Have you seen the time? We've got to go!" },
          { es: "Y a personne au bureau aujourd'hui.", en: "There's nobody at the office today." },
          { es: "P't-être qu'il a raté son train, 'fin j'sais pas.", en: "Maybe he missed his train, well, I don't know." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words, as a friend would say them.",
            en: "[I'm] exhausted, I'm going to bed.",
            sentence: "___ crevé, je vais me coucher.",
            answer: "Chuis",
            altAnswers: ["Je suis", "J'suis"],
            explanation: "\"Chuis\" is the spoken fusion of \"je suis\".",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words, as a friend would say them.",
            en: "[There's] nobody here.",
            sentence: "___ personne ici.",
            answer: "Y a",
            altAnswers: ["Il y a", "Il n'y a"],
            explanation: "\"Y a\" is the spoken \"il y a\"; with \"personne\", the written form is \"il n'y a personne\".",
          },
        ],
      },
      {
        heading: "Pronouns shrink too",
        body: [
          "(il faut), \"p't-être\" (peut-être), \"'fin\" (enfin), \"m'enfin\". Pronouns shrink too: \"il\" before a consonant often becomes \"i\" (\"i'vient\"), \"elle\" becomes \"è\" in very fast speech.",
        ],
        examples: [
          { es: "I'vient ce soir, i'me l'a promis.", en: "He's coming tonight; he promised me." },
          { es: "Devant une consonne, « il » se réduit souvent à « i ».", en: "Before a consonant, \"il\" is often reduced to \"i\"." },
          { es: "En parler très rapide, « elle » devient « è ».", en: "In very fast speech, \"elle\" becomes \"è\"." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Write the full standard French for the casual sentence: \"Y a plus d'pain.\" (There's no bread left.)",
            source: "There's no bread left.",
            answer: "Il n'y a plus de pain.",
            altAnswers: ["Il ne reste plus de pain."],
            explanation: "\"Y a\" ← \"il y a\", with \"ne\" dropped and the e of \"de\" swallowed.",
          },
        ],
      },
      {
        heading: "Rebuilding the written form",
        body: [
          "You don't need to speak like this, but you must understand it. A good exercise is to take a sentence of fast speech and rebuild the full written form: \"chais pas s'il vient, faut qu't'y d'mandes\" → \"je ne sais pas s'il vient, il faut que tu lui demandes\".",
        ],
        examples: [
          { es: "Reconstituer la forme écrite est un bon exercice.", en: "Rebuilding the written form is a good exercise." },
          { es: "« Faut qu't'y d'mandes » devient « il faut que tu lui demandes ».", en: "\"Faut qu't'y d'mandes\" becomes \"il faut que tu lui demandes\"." },
          { es: "Vous n'avez pas à parler ainsi, mais à comprendre.", en: "You do not have to speak like this, only to understand it." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Write the full standard French for the casual sentence: \"J'te l'dis, i'viendra pas.\"",
            source: "I'm telling you, he won't come.",
            answer: "Je te le dis, il ne viendra pas.",
            explanation: "Restore the schwas (\"je te le\"), \"il\" and the \"ne\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Write the full standard French for the casual sentence: \"Faut qu't'y ailles.\"",
            source: "You have to go.",
            answer: "Il faut que tu y ailles.",
            explanation: "\"Faut\" ← \"il faut\"; \"qu't'y\" ← \"que tu y\"; subjunctive \"ailles\".",
          },
        ],
      },
      {
        heading: "Du coup, en fait, bah, quoi",
        body: [
          "Unscripted speech is padded with discourse markers that carry little content but a lot of attitude. \"Du coup\" (so, as a result) is now used everywhere, often meaninglessly, as a link: \"du coup, j'ai appelé\". \"En fait\" (actually) corrects or introduces:",
        ],
        examples: [
          { es: "Le train était annulé, du coup j'ai pris un covoiturage.", en: "The train was cancelled, so I got a car share." },
          { es: "En fait, c'est plus compliqué que ça.", en: "Actually, it's more complicated than that." },
          { es: "Bah oui, évidemment qu'il est au courant.", en: "Well yes, of course he knows." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "« C'était nul, quoi. » What does « quoi » do here?",
            options: ["It sums up with a shrug, like 'you know'.", "It asks a question: 'what?'", "It expresses surprise.", "It introduces a new topic."],
            correctIndex: 0,
            explanation: "Final \"quoi\" is a discourse tic that rounds off a judgement.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Actually, it's simpler than that.",
            answer: "En fait, c'est plus simple que ça.",
            altAnswers: ["En fait, c'est plus simple que cela.", "En réalité, c'est plus simple que ça."],
            explanation: "\"En fait\" corrects an assumption, like 'actually'.",
          },
        ],
      },
      {
        heading: "Tu vois: checking you are still there",
        body: [
          "\"en fait, c'est plus compliqué\". \"Bah\" or \"ben\" opens a reply: \"bah oui\". \"Quoi\" at the end sums up or shrugs: \"c'était nul, quoi\". \"Tu vois\" checks understanding, like 'you know'.",
        ],
        examples: [
          { es: "Tu vois, c'est toujours la même histoire.", en: "You know, it's always the same story." },
          { es: "« Bah » et « ben » ouvrent une réponse.", en: "\"Bah\" and \"ben\" open a reply." },
          { es: "Ces mots portent une attitude, pas une information.", en: "These words carry an attitude, not information." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French as a friend would say it.",
            source: "The bus didn't come, so I walked.",
            answer: "Le bus est pas venu, du coup j'ai marché.",
            altAnswers: ["Le bus n'est pas venu, du coup j'ai marché.", "Le bus est pas venu, du coup je suis venu à pied.", "Le bus n'est pas venu, du coup je suis venu à pied.", "Le bus est pas venu, du coup je suis venue à pied.", "Le bus n'est pas venu, du coup je suis venue à pied.", "Le bus est pas passé, du coup j'ai marché.", "Le bus n'est pas passé, du coup j'ai marché."],
            explanation: "\"Du coup\" is the everyday spoken 'so'; in writing use \"donc\" or \"par conséquent\".",
          },
        ],
      },
      {
        heading: "Genre, en mode, grave",
        body: [
          "Among younger speakers: \"genre\" (like: \"il était genre super énervé\", or as a quotative: \"et lui, genre, « c'est pas moi »\"), \"en mode\" (in X mode: \"il est en mode vacances\", \"j'étais en mode panique\"), \"grave\" (totally), \"trop\" (really), \"de ouf\" (crazy, verlan of fou). These tics are mocked by older speakers and in the press, but they are part of the French you will hear.",
        ],
        examples: [
          { es: "C'était long, quoi. Trois heures de discours.", en: "It was long, you know. Three hours of speeches." },
          { es: "Il était genre super vexé.", en: "He was, like, really offended." },
          { es: "Depuis vendredi, il est en mode vacances.", en: "Since Friday, he's been in holiday mode." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A teenager says: « Il était en mode panique. » What does she mean?",
            options: ["He was panicking.", "He was fashionable.", "He was in panic room.", "He was making panic fashionable."],
            correctIndex: 0,
            explanation: "\"En mode\" + noun describes someone's state or behaviour.",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: He was in panic mode all morning.",
            words: ["Il était", "en mode panique", "toute la matinée."],
            translation: "He was in panic mode all morning.",
            explanation: "\"En mode\" + noun is the young speakers' way of describing a state: here, panicking.",
          },
        ],
      },
      {
        heading: "Hearing the fillers as punctuation",
        body: [
          "Listening strategy: fillers are not information. Learn to hear them as punctuation, and focus on the verbs and nouns around them. But do notice them: a speaker who says \"en fait\" three times in a sentence is probably hesitating or correcting a misunderstanding.",
        ],
        examples: [
          { es: "Les tics servent de ponctuation à l'oral.", en: "The tics act as punctuation in speech." },
          { es: "Écoutez les verbes et les noms autour d'eux.", en: "Listen to the verbs and the nouns around them." },
          { es: "Trois « en fait » dans une phrase trahissent l'hésitation.", en: "Three \"en fait\" in one sentence give away the hesitation." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French as a friend would say it.",
            source: "Maybe he's sick, well, I don't know.",
            answer: "P't-être qu'il est malade, 'fin j'sais pas.",
            altAnswers: ["Peut-être qu'il est malade, enfin je sais pas.", "Peut-être qu'il est malade, enfin je ne sais pas.", "P't-être qu'il est malade, enfin chais pas.", "Peut-être qu'il est malade, enfin chais pas.", "Il est peut-être malade, enfin je sais pas.", "Il est peut-être malade, enfin je ne sais pas."],
            explanation: "\"P't-être que\" + indicative; \"'fin\" ← \"enfin\" as a hedge.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Elle m'a dit qu'è viendrait pas, du coup j'ai rien préparé.",
            answer: "Elle m'a dit qu'elle ne viendrait pas, du coup je n'ai rien préparé.",
            altAnswers: ["Elle m'a dit qu'elle ne viendrait pas, donc je n'ai rien préparé."],
            explanation: "Written French restores both the pronoun \"elle\" and the two \"ne\"; \"du coup\" itself is acceptable in a written note, so it is not the mistake.",
          },
        ],
      },
      {
        heading: "Optional liaisons go missing",
        body: [
          "Liaisons are fewer in speech than in reading aloud. Required ones stay (\"les enfants\", \"on a\", \"vous êtes\"), but optional ones (\"ils sont arrivés\", \"je suis allé\", \"pas encore\") are often dropped in casual talk; pronouncing all of them sounds like a news anchor or a poetry reading. Politicians often over-pronounce them to sound educated; you will hear \"je suis_allé\" in a speech and \"j'suis allé\" in the café.",
        ],
        examples: [
          { es: "J'suis allé au marché, y avait un monde fou.", en: "I went to the market, it was packed." },
          { es: "Ils sont pas encore arrivés, enfin, pas que je sache.", en: "They haven't arrived yet, well, not that I know of." },
          { es: "Les liaisons obligatoires restent : « les enfants », « on a ».", en: "The compulsory liaisons stay: \"les enfants\", \"on a\"." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A politician pronounces every optional liaison. How does that sound?",
            options: ["Formal, like a speech or a news bulletin.", "Casual, like a conversation in a café.", "Incorrect: optional liaisons are forbidden.", "Regional, like speech from the south."],
            correctIndex: 0,
            explanation: "Over-pronouncing the optional liaisons is the mark of the lectern, not of error: they are optional, so dropping them is equally correct and simply more casual.",
          },
        ],
      },
      {
        heading: "Overlapping turns in a debate",
        body: [
          "On radio and TV debates, turns overlap: people start before the other has finished, interrupt (\"pardon, je vous coupe\", \"laissez-moi finir\"), and talk over each other (\"si je peux me permettre\"). The host regains control with \"on va laisser parler...\" or \"une seconde\". Following such talk is a DALF C2 listening skill.",
        ],
        examples: [
          { es: "Pardon, je vous coupe, mais ce chiffre est faux.", en: "Sorry to interrupt, but that figure is wrong." },
          { es: "Laissez-moi finir, s'il vous plaît.", en: "Let me finish, please." },
          { es: "Si je peux me permettre, vous oubliez un détail.", en: "If I may, you're forgetting one detail." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French. (in a debate, politely)",
            source: "Sorry to interrupt, but that's not true.",
            answer: "Pardon, je vous coupe, mais ce n'est pas vrai.",
            altAnswers: ["Pardon de vous interrompre, mais ce n'est pas vrai.", "Excusez-moi de vous interrompre, mais ce n'est pas vrai.", "Pardon, je vous interromps, mais ce n'est pas vrai.", "Excusez-moi, je vous coupe, mais c'est faux.", "Pardon, je vous coupe, mais c'est faux."],
            explanation: "\"Je vous coupe\" is the standard broadcast formula for interrupting.",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: One moment, let the witness speak.",
            words: ["Une seconde,", "laissez parler", "le témoin."],
            translation: "One moment, let the witness speak.",
            explanation: "The host regains control with \"une seconde\" and then an imperative naming who has the floor.",
          },
        ],
      },
      {
        heading: "Following who attacks and who defends",
        body: [
          "Strategy: identify the speakers by voice and stance, not by every word. Track who is attacking and who is defending, and listen for the formulas of interruption, which tell you where the argument turns.",
        ],
        examples: [
          { es: "Une seconde, on va laisser parler Mme Garnier.", en: "One moment, let's let Mrs Garnier speak." },
          { es: "Repérez qui attaque et qui se défend.", en: "Spot who is attacking and who is defending." },
          { es: "Les formules d'interruption marquent les tournants.", en: "The formulas of interruption mark the turning points." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French. (in a debate)",
            source: "If I may, you're forgetting something.",
            answer: "Si je peux me permettre, vous oubliez quelque chose.",
            altAnswers: ["Si je puis me permettre, vous oubliez quelque chose.", "Si vous me permettez, vous oubliez quelque chose.", "Si je peux me permettre, vous oubliez un détail."],
            explanation: "\"Si je peux me permettre\" (or the formal \"si je puis\") softens an interruption.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French as a friend would say it.",
        source: "Have you seen the time?",
        answer: "T'as vu l'heure ?",
        altAnswers: ["Tu as vu l'heure ?", "As-tu vu l'heure ?", "Tu as vu l'heure qu'il est ?", "T'as vu l'heure qu'il est ?"],
        explanation: "\"T'as\" is the spoken \"tu as\".",
      },
      {
        type: "matching",
        instructions: "Match each spoken form with its full written form.",
        pairs: [
          { left: "chuis", right: "je suis" },
          { left: "t'es", right: "tu es" },
          { left: "faut", right: "il faut" },
          { left: "p't-être", right: "peut-être" },
          { left: "'fin", right: "enfin" },
        ],
        explanation: "Reduced forms come from schwa deletion, fusion and dropped pronouns.",
      },
      {
        type: "dictation",
        audio: "Une seconde, je n'ai pas terminé.",
        explanation: "The formulas that take a turn back are short and set: \"une seconde\", then the reason.",
      },
      {
        type: "speak",
        text: "En fait, c'est plus simple qu'il n'y paraît.",
        prompt: "Say it in French: Actually, it's simpler than it looks.",
        tip: "Most speakers sound the final t of \"en fait\" ([ɑ̃fɛt]), as if it were spelt \"en fète\", in every register; [ɑ̃fɛ] is also heard.",
        explanation: "\"En fait\" corrects what has just been said or assumed, which is its real job in speech.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Rewrite the voice message in standard written French.",
        source: "Chuis en retard, j'te rappelle d'main.",
        answer: "Je suis en retard, je te rappelle demain.",
        altAnswers: ["Je suis en retard ; je te rappelle demain."],
        explanation: "\"Chuis\" is the fusion of \"je suis\" and \"d'main\" a schwa deletion; the written form restores every vowel.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Il a dit qu'i'passerait, mais j'ai rien entendu depuis.",
        answer: "Il a dit qu'il passerait, mais je n'ai rien entendu depuis.",
        altAnswers: ["Il a dit qu'il passerait, mais je n'ai plus rien entendu depuis."],
        explanation: "The written form restores the \"l\" of \"il\" and the \"ne\" of the negation; the conditional \"passerait\" was already correct.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Well, he may have forgotten, I don't know.",
        answer: "Bah, il a peut-être oublié, j'sais pas.",
        altAnswers: ["Ben, il a peut-être oublié, j'sais pas."],
        explanation: "\"Bah\" opens the reply and \"j'sais pas\" closes it with a shrug: the two commonest markers of spoken French.",
      },
    ],
  },
  {
    slug: "c2-fast-speech-word-web",
    level: "FR-C2",
    number: 8,
    title: "Word Web: Le Français Parlé Rapide",
    summary: "Sort reduced spoken forms by where they come from (chais pas ← je ne sais pas, m'a dit ← il m'a dit, faut ← il faut, y a ← il y a) and by register, then rebuild the full written sentence from rapid speech.",
    duration: "16 min",
    sections: [
      {
        heading: "Remember the rule",
        body: [
          "Fast French does three things at once: it drops whole words, it swallows sounds inside the words that remain, and it changes register. Each of the three can be undone, and that is what rebuilding a sentence means. Work through the three families below in that order: missing words first, then missing sounds, then the register of the whole message.",
        ],
        examples: [
          { es: "Trois procédés : mots supprimés, sons avalés, registre déplacé.", en: "Three processes: words dropped, sounds swallowed, register shifted." },
          { es: "« Je ne sais pas » perd d'abord son « ne », puis son « je ».", en: "\"Je ne sais pas\" first loses its \"ne\", then its \"je\"." },
          { es: "Reconstituer, c'est rendre chaque mot à sa place.", en: "Rebuilding means giving every word back its place." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which three processes turn written French into fast speech?",
            options: ["Words dropped, sounds swallowed, register shifted.", "Spelling mistakes, slang and borrowings.", "Longer vowels, added syllables and extra liaisons.", "New verb tenses invented by young speakers."],
            correctIndex: 0,
            explanation: "The three families are losses of words, losses of sounds and a change of register; nothing new is invented and no sound is added.",
          },
        ],
      },
      {
        heading: "Family 1: ne goes, and the impersonal il",
        body: [
          "The first family of reductions drops whole words. \"Ne\" disappears in almost all speech: \"je sais pas\", \"c'est pas grave\", \"y a rien\". The impersonal \"il\" disappears in fixed expressions: \"faut\" (il faut), \"y a\" (il y a), \"paraît que\"",
        ],
        examples: [
          { es: "Y a rien à manger dans ce frigo.", en: "There's nothing to eat in this fridge." },
          { es: "Faut pas t'inquiéter, ça va aller.", en: "Don't worry, it'll be fine." },
          { es: "C'est pas grave, on recommencera.", en: "It doesn't matter, we'll start again." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Write the full standard French for the casual sentence: \"Y a rien à faire.\"",
            source: "There's nothing to be done.",
            answer: "Il n'y a rien à faire.",
            explanation: "Restore \"il\" and \"ne\": \"il n'y a rien\".",
          },
        ],
      },
      {
        heading: "When even the subject vanishes",
        body: [
          "(il paraît que), \"suffit de\" (il suffit de), \"s'agit de\" (il s'agit de). Even a personal subject can vanish in narrative speech: \"m'a dit qu'il viendrait\" (il m'a dit).",
        ],
        examples: [
          { es: "Paraît qu'il va neiger ce week-end.", en: "Apparently it's going to snow this weekend." },
          { es: "Suffit de demander, c'est pas compliqué.", en: "You just have to ask, it's not complicated." },
          { es: "M'a dit qu'il passerait ce soir.", en: "He told me he'd drop by tonight." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Write the full standard French for the casual sentence: \"Paraît qu'il pleut à Brest.\"",
            source: "Apparently it's raining in Brest.",
            answer: "Il paraît qu'il pleut à Brest.",
            explanation: "\"Paraît que\" ← \"il paraît que\": the impersonal subject is dropped.",
          },
        ],
      },
      {
        heading: "Who may drop what",
        body: [
          "Register: dropping \"ne\" is normal for everyone in casual speech, including teachers and executives. Dropping \"il\" is more casual. Dropping a personal subject is very colloquial and typical of quick storytelling.",
        ],
        examples: [
          { es: "Un cadre dira « j'sais pas » sans se faire remarquer.", en: "An executive will say \"j'sais pas\" and nobody will notice." },
          { es: "« Faut y aller » est plus familier que « je sais pas ».", en: "\"Faut y aller\" is more casual than \"je sais pas\"." },
          { es: "Supprimer le sujet appartient au récit rapide entre amis.", en: "Dropping the subject belongs to quick storytelling among friends." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which of these reductions is the most colloquial?",
            options: ["« M'a dit qu'il viendrait », with no subject at all.", "« Je sais pas », with the ne dropped.", "« C'est pas grave », with the ne dropped.", "« Faut pas t'inquiéter », with no il."],
            correctIndex: 0,
            explanation: "Everyone drops the ne, and the impersonal il goes in set phrases; losing a personal subject is the one reduction that marks very casual storytelling.",
          },
        ],
      },
      {
        heading: "Rebuilding: find each verb's subject",
        body: [
          "To rebuild: for each verb, ask what its subject is and whether a negation (\"pas\", \"rien\", \"jamais\", \"plus\", \"personne\") needs its \"ne\".",
        ],
        examples: [
          { es: "Pour chaque verbe, demandez-vous quel est son sujet.", en: "For each verb, ask yourself what its subject is." },
          { es: "Si une négation apparaît, rendez-lui son « ne ».", en: "If a negation turns up, give it back its \"ne\"." },
          { es: "« Jamais vu ça » devient « je n'ai jamais vu cela ».", en: "\"Jamais vu ça\" becomes \"je n'ai jamais vu cela\"." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Write the full standard French for the casual sentence: \"Suffit d'appuyer là.\"",
            source: "You just have to press there.",
            answer: "Il suffit d'appuyer là.",
            altAnswers: ["Il suffit d'appuyer ici."],
            explanation: "\"Suffit de\" ← \"il suffit de\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Rewrite the sentence in full standard French.",
            source: "Faut qu'on y aille, y a plus de bus après.",
            answer: "Il faut que nous y allions, il n'y a plus de bus après.",
            altAnswers: ["Il faut qu'on y aille, il n'y a plus de bus après."],
            explanation: "Two impersonal subjects come back (\"il faut\", \"il y a\") and the negation gets its \"ne\"; the subjunctive \"allions\" was already there in the spoken form.",
          },
        ],
      },
      {
        heading: "Family 2: swallowed schwas and fusions",
        body: [
          "The second family keeps the words but swallows sounds. Schwa deletion: \"p'tit\", \"d'main\", \"j'te\", \"l'matin\", \"ch'veux\". Fusion, when a consonant meets another: \"je sais\" → \"chais\", \"je suis\" → \"chuis\", \"je crois\" → \"j'crois\". Vowel loss in \"tu\": \"t'as\", \"t'es\", \"t'avais\", \"t'sais\" (tu sais).",
        ],
        examples: [
          { es: "T'sais, c'est pas facile tous les jours.", en: "You know, it's not easy every day." },
          { es: "J'te rappelle d'main matin.", en: "I'll call you back tomorrow morning." },
          { es: "L'matin, j'prends toujours l'même train.", en: "In the morning, I always take the same train." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words, as a friend would say them.",
            en: "[You know], it's not easy.",
            sentence: "___, c'est pas facile.",
            answer: "T'sais",
            altAnswers: ["Tu sais", "Tsais"],
            explanation: "\"T'sais\" is the spoken \"tu sais\", a filler like 'you know'.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words, as a friend would say them.",
            en: "[And then] we went home.",
            sentence: "___ on est rentrés.",
            answer: "Et pis",
            altAnswers: ["Et puis", "Puis"],
            explanation: "\"Et pis\" is the very colloquial pronunciation of \"et puis\".",
          },
        ],
      },
      {
        heading: "I for il, è for elle, pis for puis",
        body: [
          "\"Il\" and \"ils\" before a consonant become \"i\": \"i'sont partis\", \"i'faut\"; before a vowel the l survives, sometimes as a liaison: \"i'zont\" (ils ont). \"Elle\" becomes \"è\" or \"a\" in very colloquial Parisian speech: \"è m'a dit\". \"Puis\" becomes \"pis\": \"et pis\" (and then).",
        ],
        examples: [
          { es: "J'crois qu'i'sont déjà partis.", en: "I think they've already left." },
          { es: "Et pis après, on est allés au ciné.", en: "And then afterwards, we went to the cinema." },
          { es: "I'faut qu'on parle, toi et moi.", en: "We need to talk, you and me." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "J'crois qu'i'sont partis.",
            question: "What does it mean?",
            options: ["I think they've left.", "I believe he's leaving.", "I think he's gone out.", "I believe they're coming."],
            correctIndex: 0,
            explanation: "\"I'sont\" is \"ils sont\": the plural shows only in the verb.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words, as a friend would say them.",
            answer: "i'viennent",
            altAnswers: ["i viennent"],
            explanation: "Before a consonant \"ils\" is heard as \"i\"; the verb ending still tells you it is plural.",
            en: "Are you sure [they're coming]?",
            sentence: "T'es sûr qu'___ ?",
          },
        ],
      },
      {
        heading: "Say it slowly, restore the vowels",
        body: [
          "Register: schwa deletion is universal; fusions like \"chais\", \"chuis\" are casual; \"è\" for \"elle\" and \"pis\" are very colloquial. Rebuilding: say the sentence slowly, restoring each vowel, and check the grammar.",
        ],
        examples: [
          { es: "T'avais dit qu'tu viendrais !", en: "You said you'd come!" },
          { es: "Dites la phrase lentement, voyelle par voyelle.", en: "Say the sentence slowly, vowel by vowel." },
          { es: "Si la grammaire tient, votre reconstitution est bonne.", en: "If the grammar works, your rebuilding is right." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Write the full standard French for the casual sentence: \"T'avais dit qu'tu viendrais !\"",
            source: "You said you'd come!",
            answer: "Tu avais dit que tu viendrais !",
            altAnswers: ["Tu m'avais dit que tu viendrais !"],
            explanation: "Restore \"tu\" and the e of \"que\"; the conditional \"viendrais\" is the future in the past.",
          },
        ],
      },
      {
        heading: "A voice message, as it is spoken",
        body: [
          "Here is a transcript of a voice message, in the spelling French people use to imitate speech: « Ouais, salut, c'est Karim. Bon, chais pas si t'as vu, y a grève demain, du coup j'pourrai pas passer. 'Fin, p't-être en fin d'aprèm, mais faut pas trop compter dessus. M'a dit, Sophie, qu'è pourrait t'déposer les clés. Bref, tu m'rappelles, quoi. Bisous. »",
        ],
        examples: [
          { es: "Chais pas si t'as vu, y a grève demain.", en: "Dunno if you saw, there's a strike tomorrow." },
          { es: "Du coup j'pourrai pas passer.", en: "So I won't be able to drop by." },
          { es: "Peut-être en fin d'aprèm, mais faut pas trop compter dessus.", en: "Maybe late afternoon, but don't count on it too much." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Write the full standard French for the casual sentence: \"Chais pas si t'as vu, y a grève demain.\"",
            source: "I don't know if you saw, there's a strike tomorrow.",
            answer: "Je ne sais pas si tu as vu, il y a grève demain.",
            altAnswers: ["Je ne sais pas si tu as vu, il y a une grève demain."],
            explanation: "Restore \"je ne sais pas\", \"tu as\" and \"il y a\".",
          },
        ],
      },
      {
        heading: "The same message, written out",
        body: [
          "Full written version: « Oui, salut, c'est Karim. Bon, je ne sais pas si tu as vu, il y a grève demain, donc je ne pourrai pas passer. Enfin, peut-être en fin d'après-midi, mais il ne faut pas trop compter dessus. Sophie m'a dit qu'elle pourrait te déposer les clés. Bref, rappelle-moi. Bisous. »",
        ],
        examples: [
          { es: "Sophie m'a dit qu'elle pourrait te déposer les clés.", en: "Sophie told me she could drop the keys off for you." },
          { es: "Bref, tu m'rappelles, quoi.", en: "Anyway, call me back, yeah?" },
          { es: "Je ne pourrai donc pas passer.", en: "I therefore won't be able to come by." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Write the full standard French for the casual sentence: \"M'a dit, Sophie, qu'è pourrait passer.\"",
            source: "Sophie told me she could come by.",
            answer: "Sophie m'a dit qu'elle pourrait passer.",
            explanation: "Put the dislocated subject back and restore \"elle\".",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: He told me he would bring the keys back.",
            words: ["Il m'a dit", "qu'il rapporterait", "les clés."],
            translation: "He told me he would bring the keys back.",
            explanation: "Written out, the subject comes back in front of the verb and the conditional stays as it was.",
          },
        ],
      },
      {
        heading: "More than phonetics: a register shift",
        body: [
          "Notice what changes besides spelling: \"du coup\" becomes \"donc\", the right-dislocated subject (\"m'a dit, Sophie\") returns to its place, \"aprèm\" is expanded, \"quoi\" disappears, and \"tu m'rappelles\" (present for a request) becomes the imperative. Rebuilding isn't only phonetic: it is a register transposition.",
        ],
        examples: [
          { es: "« Du coup » redevient « donc » à l'écrit.", en: "\"Du coup\" becomes \"donc\" again in writing." },
          { es: "Le sujet disloqué retrouve sa place devant le verbe.", en: "The dislocated subject goes back in front of the verb." },
          { es: "« Tu m'rappelles » devient un impératif : « rappelle-moi ».", en: "\"Tu m'rappelles\" becomes an imperative: \"rappelle-moi\"." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Write the full standard French for the casual sentence: \"Bref, tu m'rappelles, quoi.\"",
            source: "Anyway, call me back.",
            answer: "Bref, rappelle-moi.",
            altAnswers: ["Bref, tu me rappelles.", "Bref, rappelle-moi, s'il te plaît."],
            explanation: "In writing, the spoken request \"tu me rappelles\" becomes an imperative and \"quoi\" disappears.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Il ne faut pas trop compter dessus, è pourrait oublier.",
            answer: "Il ne faut pas trop compter dessus, elle pourrait oublier.",
            explanation: "Writing restores \"elle\": the reduced \"è\" exists only in speech. The rest of the sentence is already standard, so nothing else changes.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words, as a friend would say them.",
        answer: "J'me lève",
        altAnswers: ["Je m'lève"],
        explanation: "Two schwas go: \"je me\" becomes \"j'me\" and \"demain\" becomes \"d'main\".",
        en: "[I'm getting up] early tomorrow, so I'm off to bed.",
        sentence: "___ tôt d'main, donc j'vais m'coucher.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words, as a friend would say them.",
        answer: "Faut pas",
        explanation: "The impersonal \"il\" goes and so does the \"ne\": \"il ne faut pas\" becomes \"faut pas\".",
        en: "[There's no need] to worry.",
        sentence: "___ s'inquiéter.",
        altAnswers: ["Y a pas à"],
      },
      {
        type: "multiple-choice",
        question: "Which reduced form comes from « il paraît que »?",
        options: ["paraît que", "parce que", "pas que", "p'têt que"],
        correctIndex: 0,
        explanation: "The impersonal \"il\" drops: \"paraît que\".",
      },
      {
        type: "matching",
        instructions: "Match each reduced form with the process that produced it.",
        pairs: [
          { left: "je sais pas", right: "dropped ne" },
          { left: "y a", right: "dropped impersonal il" },
          { left: "p'tit", right: "schwa deletion" },
          { left: "chais", right: "consonant fusion" },
          { left: "t'as", right: "vowel loss in tu" },
        ],
        explanation: "Sorting reductions by origin makes them easier to undo.",
      },
      {
        type: "listen-choose",
        audio: "Y a rien à manger.",
        question: "What did you hear?",
        options: ["Y a rien à manger.", "Il a rien mangé.", "Y a rien à changer.", "On va rien manger."],
        correctIndex: 0,
        explanation: "\"Y a\" (il y a) + \"rien à\" + infinitive: there's nothing to eat.",
      },
      {
        type: "speak",
        text: "Il paraît que les magasins sont fermés demain.",
        prompt: "Say it in French: Apparently the shops are closed tomorrow.",
        explanation: "Spoken, this begins \"paraît que\"; written, the impersonal \"il\" has to be there.",
      },
    ],
  },
];

export const FR_C2_U11_WRITING: WriteExercise = {
  type: "write",
  prompt: "You overheard (or recorded, with permission) a fast, casual conversation between two French colleagues about a change at work, during which one of them suddenly switches register. Write a 250-400 word account for a French-speaking friend: first quote three or four lines of the exchange in spoken style, then retell it in standard written French, explaining what the register shift meant and making the implicit logical links explicit.",
  minWords: 250,
  maxWords: 400,
  rubric: [
    "Quotes a few lines in spoken style with reduced forms and fillers (e.g. \"chais pas\", \"y a\", \"t'as\", \"du coup\", \"en fait\") and rewrites them in full standard French",
    "Identifies a register shift (tu → vous, ne restored, slang → formal vocabulary) and explains what it signals (\"le passage au vouvoiement marque...\")",
    "Uses implicit links (colon, gérondif, participle, \"or\") and makes at least two of them explicit with connectors (\"car\", \"si bien que\", \"alors que\", \"pourtant\", \"dès lors\")",
    "Infers or explains at least one unfamiliar word from context or morphology (\"d'après le contexte, ce mot doit signifier...\")",
  ],
  modelAnswer: "Chère Anna,\n\nJe te raconte une scène à laquelle j'ai assisté hier à la cafétéria, parce qu'elle illustre parfaitement ce qu'on étudie en ce moment. Deux collègues, Malik et Sandrine, discutaient de la nouvelle organisation des équipes. Voici à peu près ce que j'ai entendu :\n\n« – T'as vu le mail de la direction ? Y a encore une réorg.\n– Ouais, chais pas c'qu'i'veulent, du coup on change de bureau en janvier.\n– En fait, c'est toi qui as proposé ça, non ?\n– Je vous demanderai de ne pas répéter ce genre de rumeur. »\n\nEn français écrit standard, cela donnerait : « As-tu vu le courriel de la direction ? Il y a encore une réorganisation. – Oui, je ne sais pas ce qu'ils veulent : nous changeons donc de bureau en janvier. – En réalité, c'est toi qui as proposé ce changement, n'est-ce pas ? – Je vous demanderai de ne pas répéter ce genre de rumeur. »\n\nLe plus intéressant, c'est la dernière réplique. Sandrine tutoyait Malik depuis des années ; en passant brusquement au vouvoiement, elle a rétabli une distance glaciale. Le « ne » réapparaît, le futur de politesse aussi : le message est clair, la plaisanterie est terminée. Elle ne l'a pas dit explicitement, mais elle était manifestement vexée, car Malik l'accusait, devant témoins, d'être à l'origine d'une décision impopulaire.\n\nRemarque aussi les liens implicites. Quand Sandrine dit qu'elle ne comprend pas la direction et qu'on change de bureau, le seul lien est un « du coup » de remplissage ; or, la vraie relation logique est ailleurs : la réorganisation a été décidée, si bien que tout le monde déménage. De même, Sandrine a quitté la table sans un mot, laissant son café à moitié plein : elle était furieuse, alors que quelques secondes plus tôt elle riait encore.\n\nUn dernier détail : Malik a qualifié la réunion de la veille de « gabegie ». Je ne connaissais pas ce mot, mais d'après le contexte, il devait signifier un gaspillage de temps et d'argent, ce que le dictionnaire m'a confirmé.\n\nBref, une minute de conversation, et toute une leçon de sociolinguistique !\n\nJe t'embrasse,\nClaire",
  explanation: "The model quotes reduced spoken forms (\"t'as\", \"y a\", \"chais pas\", \"i'veulent\", \"du coup\", \"en fait\") and restores them (\"il y a\", \"je ne sais pas\", \"donc\", \"en réalité\"). It interprets the switch from \"tu\" to \"vous\" with restored \"ne\" as a deliberate distancing, makes implicit links explicit with \"or\", \"si bien que\", \"car\" and \"alors que\", uses a participle (\"laissant son café\") and the colon, and justifies an inference with \"d'après le contexte, il devait signifier\".",
};
