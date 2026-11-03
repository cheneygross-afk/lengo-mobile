// Synced from cheneygross-afk/lengo:src/lib/lessons/fr-c2-u18.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// French C2, Unit 18: Paraphrase & Literature Reviews.

export const FR_C2_U18: Lesson[] = [
  {
    slug: "c2-citations-5",
    level: "FR-C2",
    number: 1,
    title: "Citer et Référencer, Part 5 of 8",
    summary: "Summarising the French way: the résumé (the author's order, a set length, no quotation, no opinion), the synthèse of several documents, the compte rendu, what to cut and how words are counted.",
    duration: "21 min",
    sections: [
      {
        heading: "A fixed length, the author's order",
        body: [
          "In French schools, prépas and competitive exams, \"le résumé\" is a codified exercise, much stricter than an English summary. You reduce a text to a fixed length (often a quarter or a tenth of the original, with a tolerance of about ten per cent), and you must follow the author's order and logic: same steps, same connections, in the same sequence.",
        ],
        examples: [
          { es: "Résumez ce texte de 600 mots en 150 mots, avec une marge de plus ou moins 10 %.", en: "Summarise this 600-word text in 150 words, with a margin of plus or minus 10%." },
          { es: "Le résumé suit l'ordre du texte et en restitue l'enchaînement logique.", en: "The summary follows the text's order and restores its logical sequence." },
          { es: "Le candidat indiquera le nombre de mots utilisés à la fin de sa copie.", en: "Candidates will state the number of words used at the end of their paper." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A 900-word text must be summarised to a sixth of its length, plus or minus 10%. Which length is acceptable?",
            options: ["160 words", "120 words", "200 words", "300 words"],
            correctIndex: 0,
            explanation: "A sixth of 900 is 150 words; 10% either way gives 135 to 165. Only 160 falls inside the tolerance.",
          },
        ],
      },
      {
        heading: "Three prohibitions",
        body: [
          "Three prohibitions: no quotations (every word must be reformulated, apart from technical terms that have no equivalent), no opinion of yours, and, in the classic résumé, no \"l'auteur dit que\" or \"selon le texte\". You write as if you were the author, in a condensed voice: if the author writes \"je\" or \"nous\", you may keep it. You don't summarise what the text says; you say it again, shorter.",
        ],
        examples: [
          { es: "Les citations sont proscrites, de même que tout commentaire personnel.", en: "Quotations are forbidden, as is any personal comment." },
          { es: "On ne résume pas ce que dit le texte : on le redit, en plus court.", en: "You don't summarise what the text says: you say it again, shorter." },
          { es: "Dans le résumé, on peut garder le « nous » de l'auteur.", en: "In the summary you may keep the author's \"nous\"." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which opening is acceptable in a classic French résumé?",
            options: ["Malgré la croissance urbaine, certains quartiers se dépeuplent.", "L'auteur affirme que certains quartiers se dépeuplent.", "Selon le texte, « nombre de quartiers se vident ».", "Je pense que l'auteur a raison : les quartiers se vident."],
            correctIndex: 0,
            explanation: "The résumé speaks as the author, without \"l'auteur dit\", quotations or your opinion.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence: a résumé speaks in the author's voice.",
            source: "L'auteur affirme que la ville doit protéger ses commerces.",
            answer: "La ville doit protéger ses commerces.",
            explanation: "In a classic résumé you don't write \"l'auteur affirme que\" or \"selon le texte\": you say the idea again, shorter, as if you were the author.",
          },
        ],
      },
      {
        heading: "Connectors are the spine",
        body: [
          "The logical connectors are the spine of a résumé. The original's \"or\", \"pourtant\", \"c'est pourquoi\" must survive, often made more explicit, because they carry the argument. A list of ideas without connectors fails even if every idea is present.",
        ],
        examples: [
          { es: "Original : « Il est vrai que les villes ont gagné des habitants. Pourtant, nombre de quartiers se vident. » → Résumé : Malgré la croissance urbaine, certains quartiers se dépeuplent.", en: "Original: 'Cities have gained inhabitants, it is true. Yet many districts are emptying.' → Summary: Despite urban growth, some districts are losing population." },
          { es: "Or, ces mesures n'ont pas suffi.", en: "Yet these measures were not enough." },
          { es: "C'est pourquoi l'État doit intervenir.", en: "That is why the State must step in." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make the logical link explicit with pourtant.",
            source: "Les villes ont gagné des habitants. Certains quartiers se vident.",
            answer: "Les villes ont gagné des habitants ; pourtant, certains quartiers se vident.",
            altAnswers: ["Les villes ont gagné des habitants, pourtant certains quartiers se vident.", "Les villes ont gagné des habitants, mais pourtant certains quartiers se vident."],
            explanation: "The concession is part of the argument, so the connector must survive in the résumé: \"pourtant\" shows that the second fact runs against the first.",
          },
        ],
      },
      {
        heading: "What to cut, what to keep",
        body: [
          "Cut: examples and anecdotes (unless an example is the argument itself), repetitions, rhetorical flourishes, quotations the author uses, digressions. Keep: the thesis, each step of the argument, the concessions (they're part of the logic), and the conclusion.",
          "Watch the trap of \"copier-réduire\": keeping the author's sentences and just deleting words. The result is a paraphrase servile in miniature, and examiners penalise it. Reformulate everything.",
        ],
        examples: [
          { es: "Certes, le numérique facilite l'accès au savoir ; il n'en fragilise pas moins l'attention.", en: "Granted, digital technology makes knowledge easier to access; it nonetheless weakens attention." },
          { es: "Il faut donc repenser l'école plutôt que d'y interdire les écrans.", en: "School must therefore be rethought rather than screens banned from it." },
          { es: "L'anecdote du voisin de l'auteur disparaît du résumé.", en: "The anecdote about the author's neighbour disappears from the summary." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which element do you cut from a résumé?",
            options: ["An anecdote about the author's neighbour", "The author's concession", "The thesis", "The conclusion"],
            correctIndex: 0,
            explanation: "Anecdotes and examples go (unless the example is the argument). The thesis, each step, the concessions and the conclusion are the logic of the text and must stay.",
          },
        ],
      },
      {
        heading: "Condense: nominalise and generalise",
        body: [
          "Condense with the tools of the Advanced level and Unit 17: nominalisation (\"le fait que les prix aient augmenté\" → \"la hausse des prix\"), generic words that cover a list (\"les loisirs\" for le cinéma, le théâtre, les concerts), and one connector where the author used a paragraph. A sentence like \"Prenons l'exemple de Lyon, de Lille et de Nantes, où...\" usually disappears entirely, or becomes \"dans plusieurs grandes villes\".",
        ],
        examples: [
          { es: "« Le cinéma, le théâtre, les concerts, tout a souffert. » → Les loisirs culturels ont tous pâti de la crise.", en: "'Cinema, theatre, concerts, everything suffered.' → Cultural leisure activities all suffered from the crisis." },
          { es: "« Prenons l'exemple de Lyon, de Lille et de Nantes, où les loyers ont doublé. » → Dans plusieurs grandes villes, les loyers ont doublé.", en: "'Take Lyon, Lille and Nantes, where rents have doubled.' → In several large cities, rents have doubled." },
          { es: "« Le fait que les prix aient augmenté a découragé les ménages. » → La hausse des prix a découragé les ménages.", en: "'The fact that prices rose discouraged households.' → The price rise discouraged households." },
        ],
        checkpoint: [
          {
            type: "translate",
            prompt: "Turn the clause into a noun phrase.",
            answer: "La fermeture des usines a frappé la région.",
            explanation: "Nominalisation condenses: \"le fait que les usines aient fermé\" becomes \"la fermeture des usines\", and the subjunctive disappears with the clause.",
            direction: "en-es",
            source: "Le fait que les usines aient fermé a frappé la région.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, condensing the list into one generic word.",
            source: "Football, tennis and swimming all lost members.",
            answer: "Tous les sports ont perdu des adhérents.",
            altAnswers: ["Les sports ont tous perdu des adhérents.", "Les clubs sportifs ont tous perdu des adhérents.", "Toutes les disciplines sportives ont perdu des adhérents.", "Tous les clubs sportifs ont perdu des adhérents."],
            explanation: "A generic word covers the list: \"les sports\" or \"les clubs sportifs\" for football, tennis and swimming. That is how a résumé saves words without losing an idea.",
          },
        ],
      },
      {
        heading: "La synthèse",
        body: [
          "\"La synthèse\" (the DALF C2 and BTS exercise, the \"note de synthèse\" of administrative exams) combines several documents around a theme. It has its own plan (not document by document), a title, an introduction and a conclusion, and stays objective. Here you do name the sources: \"le document 1\", \"l'article du Monde\", \"selon l'économiste interrogé\".",
        ],
        examples: [
          { es: "La synthèse confronte les documents au lieu de les résumer l'un après l'autre.", en: "The synthesis brings the documents together instead of summarising them one after the other." },
          { es: "Selon le document 3, la mesure aurait eu peu d'effet sur l'emploi.", en: "According to document 3, the measure reportedly had little effect on employment." },
          { es: "Les documents 1 et 3 s'accordent sur le constat, mais divergent sur les remèdes.", en: "Documents 1 and 3 agree on the diagnosis but differ on the remedies." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In a DALF synthèse of three documents, which plan is expected?",
            options: ["A thematic plan that confronts the documents, with a title.", "Document 1, then document 2, then document 3.", "A list of quotations from each document.", "Your opinion first, then the documents that support it."],
            correctIndex: 0,
            explanation: "The synthèse is organised by ideas, not by documents, and stays objective.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Documents 2 and 4 agree on the causes but not on the solutions.",
            answer: "Les documents 2 et 4 s'accordent sur les causes, mais pas sur les solutions.",
            altAnswers: ["Les documents 2 et 4 sont d'accord sur les causes, mais pas sur les solutions.", "Les documents 2 et 4 s'accordent sur les causes mais non sur les solutions."],
            explanation: "A synthèse confronts the documents and names them: \"les documents 2 et 4 s'accordent sur...\" (\"s'accorder sur\" = to agree on).",
          },
        ],
      },
      {
        heading: "Le compte rendu",
        body: [
          "\"Le compte rendu\" reports a single text, a book or a meeting, and refers to it explicitly: \"l'auteur montre que\", \"dans un premier temps, elle analyse...\". A \"compte rendu critique\" (a review) adds your evaluation at the end. Note the spelling: \"un compte rendu\" without a hyphen, plural \"des comptes rendus\".",
        ],
        examples: [
          { es: "Dans un premier temps, l'autrice analyse les causes de la désindustrialisation.", en: "First, the author analyses the causes of deindustrialisation." },
          { es: "Le compte rendu de la réunion a été diffusé à tous les participants.", en: "The minutes of the meeting were sent to all the participants." },
          { es: "Les comptes rendus des séances sont archivés.", en: "The minutes of the sessions are archived." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "How do you write the plural of compte rendu?",
            options: ["des comptes rendus", "des compte-rendus", "des comptes-rendus", "des compte rendus"],
            correctIndex: 0,
            explanation: "\"Un compte rendu\" has no hyphen, and both words take the plural: \"des comptes rendus\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The minutes of the board meeting will be sent on Monday.",
            answer: "Le compte rendu du conseil d'administration sera envoyé lundi.",
            altAnswers: ["Le compte rendu du conseil d'administration sera diffusé lundi.", "Le compte rendu de la réunion du conseil d'administration sera envoyé lundi."],
            explanation: "Minutes of a meeting are \"le compte rendu\" (no hyphen), and it refers to the meeting explicitly, unlike a résumé.",
          },
        ],
      },
      {
        heading: "Counting words",
        body: [
          "Counting words follows a convention given in the instructions, often: a word is whatever stands between two spaces, an apostrophe or a hyphen counts as a separator, so \"l'homme\" is two words and \"c'est-à-dire\" four, but \"aujourd'hui\" is one; a number is one word, an acronym is one word. Write the total at the end (\"nombre de mots : 152\") and mark every fifty words in the margin if asked. Lying about the count is severely penalised.",
        ],
        examples: [
          { es: "« L'homme » compte pour deux mots, « aujourd'hui » pour un seul.", en: "'L'homme' counts as two words, 'aujourd'hui' as just one." },
          { es: "Nombre de mots : 152.", en: "Number of words: 152." },
          { es: "« C'est-à-dire » compte pour quatre mots.", en: "\"C'est-à-dire\" counts as four words." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Under the usual convention, how many words is « l'école d'aujourd'hui »?",
            options: ["4", "2", "3", "5"],
            correctIndex: 0,
            explanation: "The apostrophe after \"l'\" and \"d'\" separates words: l' + école + d' + aujourd'hui = 4. \"Aujourd'hui\" itself counts as one word.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "A number counts as one word.",
            answer: "Un nombre compte pour un seul mot.",
            altAnswers: ["Un nombre compte pour un mot.", "Un chiffre compte pour un seul mot.", "Un chiffre compte pour un mot.", "Un nombre vaut un mot."],
            explanation: "\"Compter pour\" = to count as. By the usual convention a number, like an acronym, is one word.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The summary keeps the author's concessions.",
        answer: "Le résumé conserve les concessions de l'auteur.",
        altAnswers: ["Le résumé garde les concessions de l'auteur.", "Le résumé maintient les concessions de l'auteur."],
        explanation: "Concessions are part of the author's logic, so a résumé keeps them; only examples, repetitions and flourishes go.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (condense with a generic word).",
        source: "Trains, buses and trams were all late.",
        answer: "Les transports en commun ont tous été en retard.",
        altAnswers: ["Tous les transports en commun ont été en retard.", "Les transports publics ont tous été en retard.", "Tous les transports publics ont été en retard."],
        explanation: "\"Les transports en commun\" covers the whole list in one generic term, the résumé's way of saving words.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "Summarise this text [in 200 words, plus or minus] 10%.",
        sentence: "Résumez ce texte ___ 10 %.",
        answer: "en 200 mots, à plus ou moins",
        altAnswers: ["en 150 mots, avec une marge de plus ou moins", "en 150 mots à plus ou moins"],
        explanation: "The instruction gives a fixed length (\"en 200 mots\") and a tolerance (\"à plus ou moins 10 %\").",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Granted, telework saves time; it nonetheless isolates employees.",
        answer: "Certes, le télétravail fait gagner du temps ; il n'en isole pas moins les salariés.",
        altAnswers: ["Certes, le télétravail fait gagner du temps ; il isole néanmoins les salariés.", "Certes, le télétravail fait gagner du temps, mais il isole les salariés.", "Certes, le télétravail fait gagner du temps ; il n'en isole pas moins les employés."],
        explanation: "\"Certes... il n'en... pas moins\" keeps the concession and its counter-argument in one sentence: exactly the logic a résumé must preserve.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Connectors carry the author's argument.",
        words: ["Les connecteurs", "portent", "l'argumentation", "de l'auteur."],
        translation: "Connectors carry the author's argument.",
        explanation: "The connectors (\"or\", \"pourtant\", \"c'est pourquoi\") are the spine of a résumé.",
      },
      {
        type: "fill-blank",
        explanation: "\"Ne... ni... ni...\" negates both items, with no article: \"ni citation ni commentaire\".",
        prompt: "Write the French for the bold words.",
        en: "The summary contains [neither quotations nor] personal comment.",
        sentence: "Le résumé ne contient ___ commentaire personnel.",
        answer: "ni citation ni",
      },
      {
        type: "speak",
        text: "Malgré la hausse des loyers, les familles restent dans le centre.",
        prompt: "Say it in French: Despite rising rents, families are staying in the centre.",
        explanation: "\"Malgré\" + noun condenses a concession into a few words, ideal in a résumé.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Next, the author proposes solutions.",
        explanation: "A compte rendu names the author and the steps: \"dans un premier temps... dans un second temps\".",
        words: ["Dans un second temps,", "l'auteur", "propose", "des solutions."],
        translation: "Next, the author proposes solutions.",
      },
      {
        type: "listen-choose",
        audio: "Certes, la voiture électrique pollue moins ; elle n'en reste pas moins chère.",
        question: "What does it mean?",
        options: ["Granted, the electric car pollutes less; it is nonetheless still expensive.", "The electric car pollutes less and costs less.", "The electric car is expensive and pollutes more.", "Certainly, the cheaper electric car pollutes less."],
        correctIndex: 0,
        explanation: "\"Certes... n'en... pas moins\" concedes a point and then maintains the objection.",
      },
    ],
  },
  {
    slug: "c2-citations-6",
    level: "FR-C2",
    number: 2,
    title: "Citer et Référencer, Part 6 of 8",
    summary: "Map a field in an état de la question: present the established work, group schools and disagreements with dense relative clauses, name the gap (une lacune, un angle mort) and position your own contribution.",
    duration: "21 min",
    sections: [
      {
        heading: "L'état de la question",
        body: [
          "\"L'état de la question\" (humanities) or \"l'état de l'art\" (sciences, engineering) is the part of a mémoire, thesis or article that maps what has already been written on your subject. Its sentences have recognisable shapes, and using them signals that you know the genre.",
        ],
        examples: [
          { es: "Plusieurs enquêtes récentes ont mis en évidence un recul de la lecture chez les adolescents.", en: "Several recent surveys have highlighted a decline in reading among teenagers." },
          { es: "Il est désormais admis que le sommeil joue un rôle dans la mémorisation.", en: "It is now accepted that sleep plays a role in memorisation." },
          { es: "Le premier chapitre dresse l'état de la question.", en: "The first chapter sets out the state of research." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In an engineering thesis, what is the review of existing work usually called?",
            options: ["l'état de l'art", "l'état de la question", "la bibliographie", "le compte rendu"],
            correctIndex: 0,
            explanation: "The sciences and engineering say \"l'état de l'art\"; the humanities say \"l'état de la question\". A bibliography only lists the sources.",
          },
        ],
      },
      {
        heading: "Established results and traditions",
        body: [
          "To present established results: \"les travaux de X ont montré que\" (note \"les travaux\", plural, for a body of research), \"depuis les travaux pionniers de X\", \"il est désormais établi que\", \"X a mis en évidence\", \"on doit à X d'avoir montré que\". To place a scholar in a tradition: \"dans le sillage de X\" (in the wake of), \"dans la lignée de X\", \"s'inscrire dans\" (to belong to, to follow): \"ces recherches s'inscrivent dans le sillage de Bourdieu\".",
        ],
        examples: [
          { es: "Les travaux de Durkheim ont montré que le suicide obéit à des causes sociales.", en: "Durkheim's work showed that suicide has social causes." },
          { es: "Depuis les travaux pionniers de Pasteur, il est établi que les microbes ne naissent pas spontanément.", en: "Since Pasteur's pioneering work, it has been established that microbes do not arise spontaneously." },
          { es: "On doit à Tocqueville d'avoir montré le lien entre démocratie et individualisme.", en: "We owe Tocqueville the demonstration of the link between democracy and individualism." },
          { es: "Ces recherches s'inscrivent dans le sillage de la sociologie de Bourdieu.", en: "This research follows in the wake of Bourdieu's sociology." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "This thesis follows in the wake of Foucault's work.",
            answer: "Cette thèse s'inscrit dans le sillage des travaux de Foucault.",
            altAnswers: ["Cette thèse s'inscrit dans la lignée des travaux de Foucault.", "Cette thèse s'inscrit dans le sillage de Foucault.", "Cette thèse s'inscrit dans la lignée de Foucault."],
            explanation: "\"S'inscrire dans le sillage de\" (or \"dans la lignée de\") places research in a tradition; \"les travaux\" is plural for a body of work.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[We owe Marie Curie] the discovery of radium.",
            sentence: "___ la découverte du radium.",
            answer: "On doit à Marie Curie",
            altAnswers: ["Nous devons à Marie Curie"],
            explanation: "\"On doit à X\" + noun (or \"d'avoir\" + participle) credits a scholar with a result: \"on doit à Marie Curie la découverte du radium\".",
          },
        ],
      },
      {
        heading: "Which tense?",
        body: [
          "Tense: the passé composé for results (\"ont montré\"), the present for the state of knowledge (\"il est établi\"), and the present for what authors argue in their texts (\"X soutient\"). Avoid the English-style past simple everywhere (X showed... X argued...): French presents ideas as alive.",
        ],
        examples: [
          { es: "Bourdieu a montré que l'école reproduit les inégalités.", en: "Bourdieu showed that school reproduces inequalities." },
          { es: "Il est établi que la pauvreté pèse sur la réussite scolaire.", en: "It is established that poverty weighs on success at school." },
          { es: "Dans cet essai, Leroux soutient que la lecture est un acte social.", en: "In this essay, Leroux argues that reading is a social act." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it to the present, as French presents ideas as alive.",
            source: "Dans ce livre, Martin soutenait que la ville isole les individus.",
            answer: "Dans ce livre, Martin soutient que la ville isole les individus.",
            explanation: "What an author argues in a text is reported in the present (\"soutient\"); the English-style past (\"soutenait\") makes the idea sound dead. Results take the passé composé: \"a montré\".",
          },
        ],
      },
      {
        heading: "Grouping and contrasting",
        body: [
          "A literature review groups authors into currents and shows where they diverge: \"deux courants s'opposent\", \"contrairement à X, Y estime que\", \"à rebours de\" (going against), \"une autre approche consiste à\", \"X et Y divergent quant à\". Never simply list: each author should be placed in relation to the others.",
        ],
        examples: [
          { es: "Contrairement à Leroux, Benali estime que la demande précède l'offre.", en: "Unlike Leroux, Benali considers that demand comes before supply." },
          { es: "À rebours d'une tradition bien établie, certains historiens réhabilitent le Directoire.", en: "Going against a well-established tradition, some historians are rehabilitating the Directory." },
          { es: "Deux courants s'opposent sur la question des origines.", en: "Two schools of thought clash over the question of origins." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Unlike Martin, Durand thinks the crisis could have been avoided.",
            answer: "Contrairement à Martin, Durand estime que la crise aurait pu être évitée.",
            altAnswers: ["Contrairement à Martin, Durand pense que la crise aurait pu être évitée.", "Contrairement à Martin, Durand estime que la crise était évitable.", "Contrairement à Martin, Durand pense que la crise était évitable."],
            explanation: "\"Contrairement à X, Y estime que\" places one author against another instead of listing them.",
          },
        ],
      },
      {
        heading: "Selon laquelle and dont",
        body: [
          "This is where academic French piles up its relative pronouns. \"Selon laquelle\" introduces the content of a hypothesis or a thesis: \"l'hypothèse selon laquelle les écrans nuiraient à l'attention\" (often with the hearsay conditional, because it's someone's claim). \"Dont\" replaces \"de\" + noun: \"le débat dont cette étude est issue\", \"un phénomène dont l'ampleur reste discutée\".",
        ],
        examples: [
          { es: "L'hypothèse selon laquelle les écrans nuiraient à l'attention reste débattue.", en: "The hypothesis that screens harm attention is still debated." },
          { es: "C'est un phénomène dont l'ampleur reste discutée.", en: "It is a phenomenon whose extent is still disputed." },
          { es: "La thèse selon laquelle l'impôt découragerait le travail ne fait pas l'unanimité.", en: "The thesis that taxation discourages work is not unanimously accepted." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "C'est une hypothèse dont la validité reste à démontrer.",
            question: "What does it mean?",
            options: ["It is a hypothesis whose validity has yet to be shown.", "It is a hypothesis that has been proved valid.", "It is a valid hypothesis that nobody has shown.", "It is a hypothesis about which validity is shown."],
            correctIndex: 0,
            explanation: "\"Dont\" replaces \"de\" + noun: \"la validité de l'hypothèse\" → \"une hypothèse dont la validité\". \"Reste à démontrer\" = has yet to be shown.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the two sentences into one with dont.",
            source: "C'est une réforme. Ses effets restent incertains.",
            answer: "C'est une réforme dont les effets restent incertains.",
            explanation: "\"Ses effets\" = \"les effets de la réforme\", so \"de\" + noun becomes \"dont\": \"une réforme dont les effets\".",
          },
        ],
      },
      {
        heading: "Auquel, sur lesquels: check the preposition",
        body: [
          "\"Auquel\", \"à laquelle\", \"auxquels\" replace \"à\" + noun: \"la question à laquelle nous tentons de répondre\". After a compound preposition: \"le cadre au sein duquel\", \"les travaux à partir desquels\".",
          "Check each relative pronoun against the verb or noun it depends on: \"répondre à\" → \"à laquelle\"; \"être issu de\" → \"dont\"; \"s'appuyer sur\" → \"sur lesquels\". A wrong preposition (\"la question que nous tentons de répondre\") is one of the most visible errors in advanced writing.",
        ],
        examples: [
          { es: "Telle est la question à laquelle nous tentons de répondre.", en: "Such is the question we are trying to answer." },
          { es: "Les enquêtes sur lesquelles s'appuie l'auteur datent des années 1990.", en: "The surveys on which the author relies date from the 1990s." },
          { es: "Le cadre au sein duquel s'inscrit l'enquête est européen.", en: "The framework within which the survey takes place is European." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence is correct?",
            options: ["Telle est la question à laquelle nous répondons.", "Telle est la question que nous répondons.", "Telle est la question dont nous répondons.", "Telle est la question laquelle nous répondons."],
            correctIndex: 0,
            explanation: "\"Répondre à\" requires \"à laquelle\"; \"que\" would make \"question\" a direct object.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The surveys [on which] the author relies are old.",
            sentence: "Les enquêtes ___ s'appuie l'auteur sont anciennes.",
            answer: "sur lesquelles",
            explanation: "\"S'appuyer sur\" → \"sur lesquelles\" (enquêtes, feminine plural). Note the stylistic inversion \"s'appuie l'auteur\".",
          },
        ],
      },
      {
        heading: "Naming the gap",
        body: [
          "The review exists to reach a gap. \"Peu d'études se sont intéressées à...\" (few studies have looked at), \"cette question reste dans l'ombre\", \"une lacune\" (a gap), \"un angle mort\" (a blind spot), \"le parent pauvre de la recherche\" (the poor relation), \"à notre connaissance, aucune étude n'a encore...\" (to our knowledge, no study has yet...). Note \"aucune étude n'a\": \"aucun\" + \"ne\", singular verb.",
        ],
        examples: [
          { es: "Peu d'études se sont intéressées aux lecteurs des petites villes.", en: "Few studies have looked at readers in small towns." },
          { es: "La question du genre reste l'angle mort de ces enquêtes.", en: "The question of gender remains the blind spot of these surveys." },
          { es: "Longtemps parent pauvre de la recherche, l'histoire des femmes ouvrières connaît un renouveau.", en: "Long the poor relation of research, the history of women factory workers is undergoing a revival." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Few historians have looked at the women of the Resistance.",
            answer: "Peu d'historiens se sont intéressés aux femmes de la Résistance.",
            altAnswers: ["Peu d'historiens se sont penchés sur les femmes de la Résistance.", "Peu d'historiens ont étudié les femmes de la Résistance."],
            explanation: "\"Peu de... se sont intéressés à\" names a gap; the participle agrees with \"historiens\", and \"à les\" contracts to \"aux\".",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "To our knowledge, [no study has] yet measured this effect.",
            sentence: "À notre connaissance, ___ encore mesuré cet effet.",
            answer: "aucune étude n'a",
            explanation: "\"Aucun\" goes with \"ne\" and a singular verb: \"aucune étude n'a\", never \"n'ont\".",
          },
        ],
      },
      {
        heading: "Positioning your contribution",
        body: [
          "Then position your contribution, modestly: \"c'est à cette lacune que la présente étude entend remédier\" (a cleft that links the gap to your work), \"notre travail se propose de\", \"nous voudrions montrer que\", \"il s'agira ici de\". \"La présente étude\" (the present study) is the standard self-reference; \"présent\" before the noun means this one.",
        ],
        examples: [
          { es: "C'est à cette lacune que la présente étude entend remédier.", en: "It is this gap that the present study intends to address." },
          { es: "Il s'agira ici de montrer que la fermeture du dimanche pénalise d'abord les familles.", en: "The aim here will be to show that Sunday closing penalises families first." },
          { es: "À notre connaissance, aucune étude n'a encore porté sur les non-usagers.", en: "To our knowledge, no study has yet focused on non-users." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            explanation: "\"La présente étude\" (\"présent\" before the noun = this one) is the standard modest way to refer to your own work.",
            en: "[The present study] intends to fill this gap.",
            sentence: "___ entend combler cette lacune.",
            answer: "La présente étude",
          },
        ],
      },
      {
        heading: "The whole movement in one line",
        body: [
          "The whole movement, in one line: what is known (les travaux de X) → where the debate lies (contrairement à Y) → what is missing (une lacune) → what I do (la présente étude). It is the same in a ten-page article and in a 300-page thesis.",
        ],
        examples: [
          { es: "Les travaux de Garnier ont montré l'essor du télétravail.", en: "Garnier's work has shown the rise of remote work." },
          { es: "Contrairement à elle, Roux insiste sur ses effets positifs.", en: "Unlike her, Roux stresses its positive effects." },
          { es: "Les salariés à temps partiel restent l'angle mort de ces enquêtes.", en: "Part-time employees remain the blind spot of these surveys." },
        ],
        checkpoint: [
          {
            type: "matching",
            instructions: "Match each phrase with its role in a literature review.",
            pairs: [
              { left: "les travaux de X ont montré que", right: "presenting an established result" },
              { left: "dans le sillage de", right: "placing research in a tradition" },
              { left: "contrairement à", right: "contrasting two authors" },
              { left: "une lacune", right: "naming what is missing" },
              { left: "la présente étude", right: "referring to your own work" },
            ],
            explanation: "Known → debate → gap → contribution: the four moves of an état de la question.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Aucune étude n'ont encore porté sur les petites villes.",
        answer: "Aucune étude n'a encore porté sur les petites villes.",
        explanation: "\"Aucun(e)\" is singular: \"aucune étude n'a\". The plural \"n'ont\" is a frequent slip under the influence of the English no studies have.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Housing remains the poor relation of research on poverty.",
        answer: "Le logement reste le parent pauvre de la recherche sur la pauvreté.",
        altAnswers: ["Le logement demeure le parent pauvre de la recherche sur la pauvreté."],
        explanation: "\"Le parent pauvre de\" (the poor relation of) names a neglected area, a classic way to point to a gap.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "It is now established that noise harms concentration.",
        answer: "Il est désormais établi que le bruit nuit à la concentration.",
        altAnswers: ["Il est maintenant établi que le bruit nuit à la concentration.", "Il est désormais admis que le bruit nuit à la concentration."],
        explanation: "The present \"il est établi que\" states the current state of knowledge; \"nuire à\" takes \"à\".",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Our work sets out to fill this gap.",
        words: ["Notre travail", "se propose", "de combler", "cette lacune."],
        translation: "Our work sets out to fill this gap.",
        explanation: "\"Se proposer de\" + infinitive positions your contribution modestly.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "It is a theory whose origins are often forgotten.",
        answer: "C'est une théorie dont les origines sont souvent oubliées.",
        altAnswers: ["C'est une théorie dont on oublie souvent les origines."],
        explanation: "\"Les origines de la théorie\" → \"une théorie dont les origines\": \"dont\" replaces \"de\" + noun.",
      },
      {
        type: "dictation",
        audio: "Peu de chercheurs se sont intéressés à cette question.",
        explanation: "\"Peu de chercheurs se sont intéressés à\": the participle agrees with the plural subject.",
      },
      {
        type: "speak",
        text: "Contrairement à une idée reçue, la lecture ne recule pas partout.",
        prompt: "Say it in French: Contrary to a common belief, reading is not declining everywhere.",
        explanation: "\"Contrairement à\" sets your point against a received idea, a typical move in a literature review.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Voici le problème que nous nous intéressons.",
        answer: "Voici le problème auquel nous nous intéressons.",
        explanation: "\"S'intéresser à\" takes \"à\", so the relative is \"auquel\" (\"à\" + \"lequel\"), not \"que\".",
      },
    ],
  },
  {
    slug: "c2-literature-review-mission",
    level: "FR-C2",
    number: 3,
    title: "Real-World Mission: Un Paragraphe d'État de la Question",
    summary: "Integrate three sources on the four-day school week into one coherent paragraph: where they agree, where they part ways, and the gap your own research will fill.",
    duration: "21 min",
    sections: [
      {
        heading: "Your mission",
        body: [
          "Your mission: you are writing a master's mémoire in education sciences on \"la semaine de quatre jours\" in French primary schools (since 2017 most communes have returned to four days of school, with Wednesday off). Your supervisor wants one paragraph of état de la question integrating three (fictional) sources, ending on the gap your study addresses.",
        ],
        examples: [
          { es: "Les activités du mercredi sont payantes et ne sont pas accessibles à toutes les familles.", en: "Wednesday activities cost money and are not accessible to all families." },
          { es: "Je rédige une fiche de lecture pour chaque source avant d'écrire.", en: "I write a reading card for each source before I start writing." },
          { es: "Depuis 2017, la plupart des communes sont revenues à quatre jours d'école.", en: "Since 2017, most communes have gone back to four days of school." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What must your paragraph end on?",
            options: ["The gap that your own study addresses", "A summary of source C", "Your personal opinion on the four-day week", "A list of the three sources in date order"],
            correctIndex: 0,
            explanation: "An état de la question integrates the sources and leads to what is missing: the gap that justifies your research.",
          },
        ],
      },
      {
        heading: "The three sources",
        body: [
          "Source A, Moreau (2019), a chronobiologist: the four-day week lengthens the school day, and the long Wednesday break disrupts children's rhythms; tiredness is measurable on Thursdays. Source B, Lambert (2021), a national survey of 4,000 families: a large majority of parents prefer four days, and no measurable effect on results in French and maths appears after two years. Source C, Nguyen (2023), interviews with 60 teachers: the four-day week lightens the organisation for teachers but reduces time for the arts and sport, now pushed to Wednesday activities that not all families can pay for.",
        ],
        examples: [
          { es: "Moreau (2019) : allongement de la journée, rythmes perturbés, fatigue mesurable le jeudi.", en: "Moreau (2019): longer school day, disrupted rhythms, measurable tiredness on Thursdays." },
          { es: "Lambert (2021) : forte adhésion des parents, absence d'effet mesurable sur les résultats.", en: "Lambert (2021): strong support from parents, no measurable effect on results." },
          { es: "Nguyen (2023) : allègement pour les enseignants, recul des pratiques artistiques et sportives.", en: "Nguyen (2023): lighter load for teachers, decline of arts and sport." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Lambert's survey covers 4,000 families.",
            answer: "L'enquête de Lambert porte sur 4 000 familles.",
            altAnswers: ["L'enquête de Lambert concerne 4 000 familles.", "L'enquête de Lambert porte sur 4000 familles.", "L'enquête de Lambert concerne 4000 familles."],
            explanation: "\"Porter sur\" says what a study covers or deals with. French writes 4 000 with a space, not a comma.",
          },
        ],
      },
      {
        heading: "Index cards in a nominal style",
        body: [
          "Before writing, note your sources in French in a nominal style, as you would on index cards (\"fiches de lecture\"): it forces you to reformulate and prepares the paraphrase.",
        ],
        examples: [
          { es: "Hausse des inscriptions, baisse des abandons.", en: "Rise in enrolments, fall in drop-outs." },
          { es: "Fatigue accrue le jeudi.", en: "Increased tiredness on Thursdays." },
          { es: "Absence de données sur les écoles rurales.", en: "No data on rural schools." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into a nominal note for your index card.",
            source: "La fréquentation des cantines a baissé.",
            answer: "Baisse de la fréquentation des cantines.",
            altAnswers: ["Recul de la fréquentation des cantines.", "Diminution de la fréquentation des cantines."],
            explanation: "A reading card condenses each finding into a noun phrase: the verb \"a baissé\" becomes the noun \"baisse\", which forces you to reformulate.",
          },
        ],
      },
      {
        heading: "Find the axis of comparison",
        body: [
          "Don't summarise A, then B, then C. Look for the axis of comparison. Here the three sources talk about different things: children's fatigue (A), learning outcomes and parents' opinion (B), the content of the school week (C). Their real point of contact: all three suggest that the effects of the four-day week are not where the public debate looks for them (results), but in rhythms and inequalities.",
        ],
        examples: [
          { es: "Les trois études s'accordent sur un point : l'enjeu n'est pas là où le débat public le place.", en: "The three studies agree on one point: what is at stake is not where public debate places it." },
          { es: "Alors que Moreau mesure une fatigue accrue, Lambert ne relève aucun effet sur les résultats.", en: "Whereas Moreau measures increased fatigue, Lambert finds no effect on results." },
          { es: "Nguyen nuance ce constat en montrant que la semaine allégée appauvrit l'offre artistique.", en: "Nguyen qualifies this finding by showing that the lighter week impoverishes the arts on offer." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence avoids source-by-source juxtaposition?",
            options: ["Alors que Moreau mesure une fatigue accrue, Lambert ne relève aucun effet sur les résultats.", "Moreau parle de fatigue. Lambert parle de résultats. Nguyen parle des enseignants.", "Le premier auteur est Moreau. Le deuxième auteur est Lambert.", "Moreau a écrit en 2019, Lambert en 2021 et Nguyen en 2023."],
            correctIndex: 0,
            explanation: "\"Alors que\" relates the sources; the others merely list them.",
          },
        ],
      },
      {
        heading: "Convergence, divergence, nuance",
        body: [
          "Phrases of convergence: \"X et Y s'accordent sur\", \"convergent\", \"rejoignent\", \"vont dans le même sens\", \"corroborer\" (to corroborate). Divergence: \"divergent quant à\", \"alors que X..., Y...\", \"à l'inverse\", \"en revanche\". Complementarity: \"compléter\", \"éclairer\", \"nuancer\" (to qualify): \"Nguyen nuance ce constat\".",
        ],
        examples: [
          { es: "Les auteurs divergent quant aux effets à long terme.", en: "The authors differ as to the long-term effects." },
          { es: "Ces observations corroborent les mesures de Moreau.", en: "These observations corroborate Moreau's measurements." },
          { es: "Les données de Nguyen complètent celles de Lambert.", en: "Nguyen's data complement Lambert's." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            answer: "nuancent",
            explanation: "\"Nuancer\" (to qualify) presents a source as refining another, neither agreeing fully nor contradicting it.",
            en: "Nguyen's results [qualify] Lambert's findings.",
            sentence: "Les résultats de Nguyen ___ les constats de Lambert.",
          },
        ],
      },
      {
        heading: "Quant à, never quand à",
        body: [
          "\"Quant à\" (as for, concerning) is invariable in form but contracts: \"quant au\", \"quant aux\". Don't confuse it with \"quand\" (when): \"*quand à moi*\" is a classic native-speaker spelling mistake that a jury will notice.",
        ],
        examples: [
          { es: "Quant aux enseignants, ils y voient surtout un allègement de leur organisation.", en: "As for teachers, they see it mainly as a lightening of their organisation." },
          { es: "Quant au maire, il refuse de trancher.", en: "As for the mayor, he refuses to decide." },
          { es: "Quant à moi, je reste sceptique.", en: "As for me, I remain sceptical." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which spelling is correct?",
            options: ["Quant aux enseignants, ils sont satisfaits.", "Quand aux enseignants, ils sont satisfaits.", "Quant à les enseignants, ils sont satisfaits.", "Quand à les enseignants, ils sont satisfaits."],
            correctIndex: 0,
            explanation: "\"Quant à\" (as for) with a t, and \"à + les\" contracts to \"aux\".",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[As for] the parents, they prefer four days.",
            sentence: "___ parents, ils préfèrent quatre jours.",
            answer: "Quant aux",
            explanation: "\"Quant à\" contracts with \"les\": \"quant aux parents\". It is spelt with a t; \"quand\" means when.",
          },
        ],
      },
      {
        heading: "The gap and your contribution",
        body: [
          "What none of the three studies looks at: rural schools, where children often spend an hour a day on the school bus and where Wednesday activities hardly exist. That is your gap: \"aucune de ces études ne porte sur les écoles rurales\", and your contribution: \"c'est précisément ce terrain que la présente enquête se propose d'explorer\".",
        ],
        examples: [
          { es: "Aucune de ces études ne porte sur les écoles rurales.", en: "None of these studies deals with rural schools." },
          { es: "C'est précisément ce terrain que la présente enquête se propose d'explorer.", en: "It is precisely this terrain that the present study sets out to explore." },
          { es: "Aucun de ces travaux n'interroge les élèves eux-mêmes.", en: "None of this research asks the pupils themselves." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "None of these surveys deals with lower secondary schools.",
            answer: "Aucune de ces enquêtes ne porte sur les collèges.",
            altAnswers: ["Aucune de ces enquêtes ne concerne les collèges.", "Aucune de ces enquêtes ne porte sur le collège."],
            explanation: "\"Aucune de ces enquêtes ne porte sur\": \"aucun\" agrees with the noun, goes with \"ne\", and takes a singular verb.",
          },
        ],
      },
      {
        heading: "The model paragraph: framing and contrast",
        body: [
          "Here is a model paragraph: \"Le retour massif à la semaine de quatre jours a suscité des travaux aux conclusions en apparence divergentes. Alors que Moreau (2019) mesure une fatigue accrue des élèves en début de semaine, qu'il impute à l'allongement de la journée, l'enquête de Lambert (2021) ne relève aucun effet significatif sur les résultats et fait apparaître une forte adhésion des familles. Nguyen (2023) nuance ces deux constats : selon les enseignants interrogés, la réforme aurait surtout appauvri l'offre artistique et sportive, désormais renvoyée à des activités du mercredi inégalement accessibles.",
        ],
        examples: [
          { es: "Le retour à la semaine de quatre jours a suscité des travaux aux conclusions divergentes.", en: "The return to the four-day week has prompted studies with divergent conclusions." },
          { es: "Moreau impute cette fatigue à l'allongement de la journée.", en: "Moreau attributes this tiredness to the longer school day." },
          { es: "Ces travaux aboutissent à des conclusions en apparence divergentes.", en: "This research reaches conclusions that seem to diverge." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (report without endorsing).",
            source: "According to the mayors interviewed, the reform has allegedly cost the communes a great deal.",
            answer: "Selon les maires interrogés, la réforme aurait coûté cher aux communes.",
            altAnswers: ["D'après les maires interrogés, la réforme aurait coûté cher aux communes.", "Selon les maires interrogés, la réforme aurait beaucoup coûté aux communes.", "D'après les maires interrogés, la réforme aurait beaucoup coûté aux communes."],
            explanation: "The past conditional \"aurait coûté\" reports the mayors' claim without endorsing it, as the model does with \"aurait surtout appauvri\".",
          },
        ],
      },
      {
        heading: "The model paragraph: synthesis, gap, contribution",
        body: [
          "Ces trois études s'accordent ainsi à déplacer le débat des résultats scolaires vers les rythmes et les inégalités. Aucune, en revanche, ne porte sur les écoles rurales, où les temps de transport et la rareté de l'offre périscolaire pourraient amplifier ces effets. C'est précisément ce terrain que la présente enquête se propose d'explorer.\"",
          "Notice the moves: an opening that frames the debate, sources set against each other in pairs, a hearsay conditional for a claim we report without endorsing (\"aurait surtout appauvri\"), a synthesis sentence (\"s'accordent ainsi à\"), the gap, the contribution.",
        ],
        examples: [
          { es: "Ces études s'accordent à déplacer le débat vers les rythmes et les inégalités.", en: "These studies agree in shifting the debate towards rhythms and inequalities." },
          { es: "Ces trois études convergent ainsi vers une même conclusion.", en: "These three studies thus converge on the same conclusion." },
          { es: "C'est cette question que le présent mémoire se propose d'éclairer.", en: "It is this question that the present dissertation sets out to shed light on." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In the model, why is « aurait surtout appauvri » in the conditional?",
            options: ["The writer reports the teachers' claim without endorsing it.", "It describes something that might happen in the future.", "It is a polite form addressed to the supervisor.", "It follows si, so the conditional is required."],
            correctIndex: 0,
            explanation: "This is the hearsay conditional: the impoverishment is what the teachers interviewed say, and the writer does not vouch for it.",
          },
          {
            type: "speak",
            text: "C'est précisément cette lacune que notre enquête entend combler.",
            prompt: "Say it in French: It is precisely this gap that our survey intends to fill.",
            explanation: "The cleft \"c'est... que\" links the gap to your contribution; \"entendre\" + infinitive = to intend to.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Lambert attributes this support to the free Wednesday.",
        answer: "Lambert impute cette adhésion au mercredi libéré.",
        altAnswers: ["Lambert attribue cette adhésion au mercredi libre.", "Lambert impute cette adhésion au mercredi libre.", "Lambert attribue cette adhésion au mercredi libéré."],
        explanation: "\"Imputer\" or \"attribuer quelque chose à\" names a cause; \"à le\" contracts to \"au\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Nguyen qualifies these two findings.",
        answer: "Nguyen nuance ces deux constats.",
        altAnswers: ["Nguyen vient nuancer ces deux constats.", "Nguyen nuance ces deux conclusions."],
        explanation: "\"Nuancer\" = to qualify, to add nuance; \"un constat\" = a finding, an observation.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Aucune de ces études n'ont porté sur les activités du mercredi.",
        answer: "Aucune de ces études n'a porté sur les activités du mercredi.",
        explanation: "\"Aucune de ces études\" is a singular subject: \"n'a porté\", not \"n'ont porté\".",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: These interviews corroborate the parents' testimony.",
        words: ["Ces entretiens", "corroborent", "les témoignages", "des parents."],
        translation: "These interviews corroborate the parents' testimony.",
        explanation: "\"Corroborer\" (to corroborate) marks convergence between two sources.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The two surveys agree on the causes.",
        answer: "Les deux enquêtes s'accordent sur les causes.",
        altAnswers: ["Les deux enquêtes sont d'accord sur les causes.", "Les deux études s'accordent sur les causes."],
        explanation: "\"S'accorder sur\" = to agree on: a phrase of convergence.",
      },
      {
        type: "translate",
        explanation: "\"Aucune, en revanche, ne porte sur\" names the gap: the pronoun \"aucune\" stands for \"aucune de ces études\".",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "None of them, however, deals with schools in the overseas departments.",
        answer: "Aucune, en revanche, ne porte sur les écoles d'outre-mer.",
        altAnswers: ["Aucune ne porte cependant sur les écoles d'outre-mer.", "Aucune, en revanche, ne porte sur les écoles des départements d'outre-mer.", "Aucune, toutefois, ne porte sur les écoles d'outre-mer."],
      },
      {
        type: "dictation",
        audio: "Ces trois études s'accordent à déplacer le débat.",
        explanation: "\"S'accorder à\" + infinitive = to agree in doing something.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "Index card: [rise in the cost] of Wednesday activities.",
        sentence: "Fiche : ___ des activités du mercredi.",
        answer: "hausse du coût",
        altAnswers: ["augmentation du coût"],
        explanation: "On a reading card the finding becomes a noun phrase: \"hausse du coût\" rather than \"le coût a augmenté\".",
      },
      {
        type: "speak",
        text: "En revanche, aucune étude ne s'intéresse aux écoles de montagne.",
        prompt: "Say it in French: On the other hand, no study looks at mountain schools.",
        explanation: "\"En revanche\" marks the contrast that leads to the gap; \"aucune étude ne\" + singular verb.",
      },
    ],
  },
  {
    slug: "c2-citations-7",
    level: "FR-C2",
    number: 4,
    title: "Citer et Référencer, Part 7 of 8",
    summary: "The author's voice in academic French: the nous de modestie and its singular agreement, on and impersonal constructions, hedging (il semble que, il apparaît que, nous serions tenté de), and when je is acceptable.",
    duration: "19 min",
    sections: [
      {
        heading: "Le nous de modestie",
        body: [
          "A single author writing an academic text in French traditionally says \"nous\", not \"je\": \"nous avons montré\", \"nous nous proposons d'examiner\". It is called \"le nous de modestie\" (or \"nous d'auteur\"): the author effaces the self behind a collective voice of reason, and it also includes the reader in the reasoning (\"nous voyons ici que...\").",
          "Possessives follow the plural form: \"notre hypothèse\", \"nos résultats\", \"notre propos\" (our aim, our argument).",
        ],
        examples: [
          { es: "Nous avons montré, dans la première partie, que la réforme n'a pas atteint ses objectifs.", en: "In the first part, I showed that the reform did not achieve its aims." },
          { es: "Notre propos n'est pas de juger, mais de comprendre.", en: "My aim is not to judge, but to understand." },
          { es: "Nous voyons ici que l'argument se retourne contre son auteur.", en: "We see here that the argument turns against its author." },
          { es: "Nous nous proposons d'examiner trois cas.", en: "I propose to examine three cases." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it to the nous de modestie.",
            source: "J'ai examiné trois cas et j'en tire une hypothèse.",
            answer: "Nous avons examiné trois cas et nous en tirons une hypothèse.",
            altAnswers: ["Nous avons examiné trois cas et en tirons une hypothèse."],
            explanation: "A single academic author traditionally writes \"nous\": the verbs go into the plural (\"avons examiné\", \"tirons\"), and \"en\" stays before the verb.",
          },
        ],
      },
      {
        heading: "Plural verb, singular agreement",
        body: [
          "The trap is agreement. The verb is plural (\"nous sommes\"), but adjectives and past participles agree with the real person, who is one man or one woman: \"nous sommes convaincu\" (a male author), \"nous sommes convaincue\" (a female author), \"nous nous sommes efforcée de\" (a woman). Writing \"nous sommes convaincus\" makes you sound like a research team. The same rule holds for the \"vous de politesse\": \"vous êtes certaine, madame ?\".",
        ],
        examples: [
          { es: "Nous sommes convaincu que ces deux phénomènes sont liés.", en: "I am convinced that these two phenomena are linked. (male author)" },
          { es: "Nous nous sommes efforcée de rester au plus près des sources.", en: "I have tried to stay as close as possible to the sources. (female author)" },
          { es: "Nous sommes reconnaissante à nos collègues de leur aide.", en: "I am grateful to my colleagues for their help. (female author)" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A male author writes alone. Which sentence is correct?",
            options: ["Nous sommes persuadé de l'importance de ce corpus.", "Nous sommes persuadés de l'importance de ce corpus.", "Nous suis persuadé de l'importance de ce corpus.", "Nous est persuadé de l'importance de ce corpus."],
            correctIndex: 0,
            explanation: "Nous de modestie: plural verb, singular agreement with the real author.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (a female author, nous de modestie).",
            source: "I am aware of the limits of this study.",
            answer: "Nous sommes consciente des limites de cette étude.",
            altAnswers: ["Nous sommes consciente des limites de ce travail."],
            explanation: "\"Nous sommes\" (plural verb), but the adjective agrees with the one real author, a woman: \"consciente\", singular feminine. \"Conscientes\" would suggest a team.",
          },
        ],
      },
      {
        heading: "On: the neutral voice",
        body: [
          "\"On\" is the other way to efface the author, more neutral and slightly less formal: \"on peut considérer que\", \"on le voit\", \"on remarquera que\" (the future of polite instruction to the reader). It is also useful for general statements that include the scientific community.",
        ],
        examples: [
          { es: "On remarquera que l'auteur ne cite jamais ses sources.", en: "It will be noted that the author never cites his sources." },
          { es: "On peut considérer que la crise commence en 1929.", en: "The crisis can be considered to begin in 1929." },
          { es: "On le voit, la question reste ouverte.", en: "As we can see, the question remains open." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "On notera que les chiffres de 2020 sont exceptionnels.",
            question: "What does it mean?",
            options: ["It should be noted that the 2020 figures are exceptional.", "We will write down the exceptional 2020 figures.", "Someone noticed the 2020 figures were exceptional.", "The 2020 figures will be noted as an exception next year."],
            correctIndex: 0,
            explanation: "\"On notera que\" is the future of polite instruction to the reader: it should be noted that.",
          },
        ],
      },
      {
        heading: "Impersonal constructions",
        body: [
          "Impersonal constructions remove the subject completely and are the backbone of academic prose: \"il apparaît que\" (it appears that, + indicative), \"il ressort de cette analyse que\" (it emerges from this analysis that), \"il convient de\" (it is appropriate to), \"il s'agit de\", \"il importe de souligner que\", \"il en résulte que\". They make a claim sound like a conclusion drawn from the evidence rather than from the writer.",
        ],
        examples: [
          { es: "Il ressort de cette analyse que les petites communes sont les plus touchées.", en: "It emerges from this analysis that small municipalities are the hardest hit." },
          { es: "Il convient de distinguer deux périodes.", en: "Two periods should be distinguished." },
          { es: "Il en résulte que la comparaison entre les deux pays est délicate.", en: "As a result, comparing the two countries is tricky." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it impersonal with il convient de.",
            source: "Nous devons distinguer trois étapes.",
            answer: "Il convient de distinguer trois étapes.",
            explanation: "\"Il convient de\" + infinitive removes the subject: the step looks required by the analysis, not chosen by the writer.",
          },
        ],
      },
      {
        heading: "Il apparaît que or il semble que?",
        body: [
          "A note on \"il apparaît que\" vs \"il semble que\": \"il apparaît que\" (it emerges that) takes the indicative and is quite assertive, while \"il semble que\" (it seems that) usually takes the subjunctive in careful style (\"il semble que la méthode soit fiable\"), unless it has an indirect object: \"il me semble que la méthode est fiable\" + indicative.",
        ],
        examples: [
          { es: "Il apparaît que les données de 2010 sont incomplètes.", en: "It appears that the 2010 data are incomplete." },
          { es: "Il semble que la méthode soit fiable, du moins pour les grands échantillons.", en: "It seems that the method is reliable, at least for large samples." },
          { es: "Il me semble que l'argument est fragile.", en: "It seems to me that the argument is weak." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "It seems that the sample [is] too small.",
            sentence: "Il semble que l'échantillon ___ trop réduit.",
            answer: "soit",
            explanation: "In careful style \"il semble que\" takes the subjunctive: \"soit\". With an indirect object (\"il me semble que\") it takes the indicative.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Il apparaît que les résultats soient fragiles.",
            answer: "Il apparaît que les résultats sont fragiles.",
            explanation: "\"Il apparaît que\" (it emerges that) is assertive and takes the indicative: \"sont\". The subjunctive belongs after \"il semble que\".",
          },
        ],
      },
      {
        heading: "Hedging tools",
        body: [
          "Academic French hedges with care. Verbs: \"sembler\", \"paraître\", \"tendre à\" (\"ces résultats tendent à montrer que\"). The conditional: \"nous serions tenté de penser que\" (I would be tempted to think, with singular agreement again), \"on pourrait objecter que\". Adverbs and phrases: \"vraisemblablement\", \"sans doute\" (which means probably, not without doubt!), \"dans une certaine mesure\", \"selon toute vraisemblance\".",
        ],
        examples: [
          { es: "Ces résultats tendent à montrer que l'effet est durable.", en: "These results tend to show that the effect is lasting." },
          { es: "Nous serions tenté de penser que la crise a surtout servi de prétexte.", en: "I would be tempted to think the crisis was mainly a pretext." },
          { es: "La lettre date sans doute de 1793.", en: "The letter probably dates from 1793." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What does \"Le manuscrit date sans doute du XVIIe siècle\" mean?",
            options: ["The manuscript probably dates from the 17th century.", "The manuscript undoubtedly dates from the 17th century.", "The manuscript dates from the 17th century without any doubt.", "Nobody doubts the manuscript's date."],
            correctIndex: 0,
            explanation: "\"Sans doute\" = probably. Certainty is \"sans aucun doute\" or \"assurément\".",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "I [would be tempted] to think that the crisis was a pretext. (female author, nous)",
            sentence: "Nous ___ de penser que la crise a servi de prétexte.",
            answer: "serions tentée",
            explanation: "Conditional \"serions\" (plural verb) + \"tentée\" (one woman): the hedged nous de modestie.",
          },
        ],
      },
      {
        heading: "Softening double negatives",
        body: [
          "Double negatives that soften: \"il n'est pas exclu que\" + subjunctive (it cannot be ruled out that), \"il n'est pas impossible que\", \"on ne saurait affirmer que\" (one could not claim that). These litotes are typical of French caution and can sound evasive in English translation, where you'd say perhaps.",
        ],
        examples: [
          { es: "Il n'est pas exclu que d'autres facteurs aient joué.", en: "It cannot be ruled out that other factors played a part." },
          { es: "On ne saurait affirmer que la mesure a échoué.", en: "One could not claim that the measure failed." },
          { es: "Il n'est pas impossible que le texte soit un faux.", en: "The text may well be a forgery." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "It cannot be ruled out that the letter was rewritten.",
            answer: "Il n'est pas exclu que la lettre ait été réécrite.",
            altAnswers: ["Il n'est pas exclu que la lettre ait été récrite.", "On ne peut pas exclure que la lettre ait été réécrite."],
            explanation: "\"Il n'est pas exclu que\" + subjunctive; the past subjunctive passive is \"ait été réécrite\", agreeing with \"la lettre\".",
          },
        ],
      },
      {
        heading: "Hedge in proportion",
        body: [
          "Hedge in proportion. A paper that hedges everything (\"il semblerait peut-être que, dans une certaine mesure...\") says nothing; one that hedges nothing claims too much. The rule: assert what your data show (\"nos résultats montrent que\"), hedge what you infer from them (\"ils suggèrent que\").",
        ],
        examples: [
          { es: "Nos résultats montrent une baisse ; ils suggèrent qu'elle est liée au prix.", en: "Our results show a fall; they suggest it is linked to price." },
          { es: "Nos données montrent une hausse des inscriptions.", en: "Our data show a rise in enrolments." },
          { es: "Elles suggèrent que la gratuité a joué un rôle.", en: "They suggest that free admission played a part." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Your figures show a fall in attendance, and you infer its cause. Which version hedges in proportion?",
            options: ["Nos chiffres montrent une baisse de la fréquentation ; ils suggèrent qu'elle tient aux horaires.", "Il semblerait peut-être que nos chiffres montrent, dans une certaine mesure, une baisse.", "Nos chiffres prouvent que la baisse est due aux horaires.", "On ne saurait affirmer que nos chiffres montrent une baisse."],
            correctIndex: 0,
            explanation: "Assert what the data show (\"montrent\"), hedge what you infer (\"suggèrent\"). Hedging the data itself says nothing; \"prouvent\" claims too much about the cause.",
          },
        ],
      },
      {
        heading: "When je is acceptable",
        body: [
          "The \"nous de modestie\" is receding. In the social sciences, especially in anthropology and sociology based on fieldwork, \"je\" is now common where the researcher's presence matters: \"lorsque je suis arrivée sur le terrain, les habitants se méfiaient\". In a mémoire's acknowledgements or foreword (\"avant-propos\"), \"je\" is normal. In the hard sciences, \"nous\" often refers to a real team.",
        ],
        examples: [
          { es: "Lorsque je suis arrivée sur le terrain, les habitants se méfiaient de moi.", en: "When I arrived in the field, the residents were wary of me." },
          { es: "Je remercie ma directrice de recherche pour sa patience.", en: "I thank my research supervisor for her patience." },
          { es: "Dans cet avant-propos, je voudrais expliquer l'origine de ce travail.", en: "In this foreword, I would like to explain the origin of this work." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "When I began this survey, I knew nobody in the village.",
            answer: "Lorsque j'ai commencé cette enquête, je ne connaissais personne dans le village.",
            altAnswers: ["Quand j'ai commencé cette enquête, je ne connaissais personne dans le village.", "Lorsque j'ai commencé cette enquête, je ne connaissais personne au village.", "Quand j'ai commencé cette enquête, je ne connaissais personne au village."],
            explanation: "In fieldwork, where the researcher's presence matters, \"je\" is now common. Passé composé for the event, imparfait for the background state.",
          },
        ],
      },
      {
        heading: "Never switch voices",
        body: [
          "What is never acceptable is switching back and forth in the same text. Choose \"je\" or \"nous\" and keep it, with the matching agreement. When in doubt, follow your supervisor, and read three recent theses in your field: their voice is your model.",
        ],
        examples: [
          { es: "Il ne faut pas passer du « je » au « nous » dans le même texte.", en: "You must not switch from 'je' to 'nous' in the same text." },
          { es: "Dans tout ce mémoire, nous employons le « nous » de modestie.", en: "Throughout this dissertation, I use the \"nous\" of modesty." },
          { es: "J'ai choisi le « je » : je le garde jusqu'à la conclusion.", en: "I chose \"je\": I keep it until the conclusion." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Nous avons interrogé vingt familles, et j'ai constaté leur méfiance.",
            answer: "Nous avons interrogé vingt familles, et nous avons constaté leur méfiance.",
            altAnswers: ["Nous avons interrogé vingt familles et avons constaté leur méfiance."],
            explanation: "Switching from \"nous\" to \"je\" in the same text is never acceptable: keep one voice throughout.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (a male author, nous de modestie).",
        source: "I was surprised by these results.",
        answer: "Nous avons été surpris par ces résultats.",
        altAnswers: ["Nous avons été surpris de ces résultats.", "Ces résultats nous ont surpris."],
        explanation: "\"Nous avons été\", plural verb; the participle agrees with the single male author: \"surpris\" (here singular and plural look the same).",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (academic style).",
        source: "It is important to stress that the sample is small.",
        answer: "Il importe de souligner que l'échantillon est réduit.",
        altAnswers: ["Il convient de souligner que l'échantillon est réduit.", "Il est important de souligner que l'échantillon est réduit.", "Il importe de souligner que l'échantillon est petit."],
        explanation: "\"Il importe de\" + infinitive is an impersonal frame that makes the point sound required by the argument.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "These figures tend to show that prices are falling.",
        answer: "Ces chiffres tendent à montrer que les prix baissent.",
        altAnswers: ["Ces chiffres tendent à montrer que les prix diminuent."],
        explanation: "\"Tendre à montrer\" hedges: the figures point in a direction without proving it.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        answer: "On ne saurait affirmer",
        altAnswers: ["On ne peut affirmer"],
        explanation: "\"On ne saurait\" + infinitive (conditional of \"savoir\", with \"ne\" alone) is a formal, cautious one could not.",
        en: "[One could not claim] that the reform succeeded.",
        sentence: "___ que la réforme a réussi.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Our aim here is to compare two cities.",
        words: ["Notre propos", "est ici", "de comparer", "deux villes."],
        translation: "Our aim here is to compare two cities.",
        explanation: "With the nous de modestie, possessives are plural too: \"notre propos\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "It appears that the data are incomplete.",
        answer: "Il apparaît que les données sont incomplètes.",
        altAnswers: ["Il apparaît que les données sont lacunaires.", "Il semble que les données soient incomplètes."],
        explanation: "\"Il apparaît que\" + indicative; \"les données\" is plural, so the adjective is too.",
      },
      {
        type: "listen-choose",
        audio: "Nous serions tentée de voir dans ce texte une parodie.",
        question: "What does it mean?",
        options: ["I (a woman) would be tempted to see this text as a parody.", "We women were tempted to write a parody.", "This text tempts us to parody it.", "We would never see this text as a parody."],
        correctIndex: 0,
        explanation: "\"Nous serions tentée\": hedging conditional, nous de modestie, and singular feminine agreement for one female author.",
      },
      {
        type: "dictation",
        audio: "Il en résulte que les deux corpus ne sont pas comparables.",
        explanation: "\"Il en résulte que\" + indicative draws a conclusion from the evidence.",
      },
      {
        type: "speak",
        text: "Il n'est pas impossible que l'auteur ait connu ce texte.",
        prompt: "Say it in French: The author may well have known this text.",
        explanation: "The litotes \"il n'est pas impossible que\" + past subjunctive (\"ait connu\") is a typically French hedge.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The manuscript was probably copied in Lyon.",
        answer: "Le manuscrit a sans doute été copié à Lyon.",
        altAnswers: ["Le manuscrit a probablement été copié à Lyon.", "Le manuscrit a vraisemblablement été copié à Lyon."],
        explanation: "\"Sans doute\" means probably, not without doubt: a hedge. Without a doubt would be \"sans aucun doute\".",
      },
      {
        type: "speak",
        text: "Il convient d'abord de définir nos termes.",
        prompt: "Say it in French, academic style: First, our terms should be defined.",
        tip: "No liaison in \"trois cas\": the s of trois is silent before a consonant.",
        explanation: "\"Il convient de\" + infinitive, and the plural possessive \"nos\" of the nous de modestie.",
      },
    ],
  },
  {
    slug: "c2-citations-8",
    level: "FR-C2",
    number: 5,
    title: "Citer et Référencer, Part 8 of 8",
    summary: "Confront sources instead of lining them up: the language of convergence (s'accorder sur, se rejoindre), divergence (diverger quant à, là où... , à l'inverse) and complement (nuancer, compléter), organised around axes as a synthèse or a mémoire demands.",
    duration: "21 min",
    sections: [
      {
        heading: "Juxtaposition is not synthesis",
        body: [
          "The most common weakness in advanced syntheses, and the one DALF examiners and thesis supervisors comment on most, is \"la juxtaposition\": one paragraph per source, each beginning \"Le document 1...\", \"Le document 2...\". The reader has to do the comparison. A synthesis does it for them: each paragraph is built around an idea (an axis), and the sources appear inside it, in relation to each other.",
        ],
        examples: [
          { es: "Le document 1 explique que la voiture électrique pollue moins. Le document 2 parle des batteries.", en: "Document 1 explains that electric cars pollute less. Document 2 talks about batteries. (juxtaposition)" },
          { es: "Chaque paragraphe s'organise autour d'une idée, non d'un document.", en: "Each paragraph is organised around an idea, not a document." },
          { es: "Chaque document est résumé à son tour : c'est une juxtaposition.", en: "Each document is summarised in turn: that is juxtaposition." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence confronts the sources rather than juxtaposing them?",
            options: ["Là où le document 1 voit une avancée, le document 3 dénonce un recul.", "Le document 1 parle d'une avancée. Le document 3 parle d'un recul.", "Le document 1 est un article. Le document 3 est un entretien.", "Voici ce que disent les documents 1 et 3."],
            correctIndex: 0,
            explanation: "\"Là où X..., Y...\" sets the two sources against each other in one sentence.",
          },
        ],
      },
      {
        heading: "One sentence, several sources",
        body: [
          "Compare. Juxtaposition: \"Le document 1 explique que les voitures électriques polluent moins. Le document 2 parle des batteries. Le document 3 évoque le prix.\" Confrontation: \"Si les documents 1 et 3 s'accordent à reconnaître l'avantage écologique de la voiture électrique à l'usage, le document 2 en relativise la portée en rappelant le coût environnemental de la fabrication des batteries.\" One sentence, three sources, one idea.",
        ],
        examples: [
          { es: "Si les documents 1 et 3 reconnaissent l'avantage écologique de la voiture électrique, le document 2 en relativise la portée.", en: "While documents 1 and 3 acknowledge the electric car's ecological advantage, document 2 plays down its significance. (confrontation)" },
          { es: "Le document 2 rappelle le coût environnemental de la fabrication des batteries.", en: "Document 2 points out the environmental cost of making the batteries." },
          { es: "Si l'article 1 salue la réforme, l'entretien 2 en souligne les limites.", en: "While article 1 welcomes the reform, interview 2 stresses its limits." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the two sentences into one with là où.",
            source: "Le document 1 voit dans le télétravail une liberté. Le document 2 y voit une solitude.",
            answer: "Là où le document 1 voit dans le télétravail une liberté, le document 2 y voit une solitude.",
            altAnswers: ["Là où le document 1 voit une liberté dans le télétravail, le document 2 y voit une solitude.", "Là où le document 1 voit dans le télétravail une liberté, le document 2, lui, y voit une solitude."],
            explanation: "\"Là où X voit..., Y voit...\" puts two sources face to face in one sentence: the reader no longer has to do the comparison.",
          },
        ],
      },
      {
        heading: "The reorder test",
        body: [
          "The test: if you can reorder your paragraphs without changing anything, you have juxtaposed. In a real synthesis, the order of ideas carries an argument.",
        ],
        examples: [
          { es: "L'ordre des idées porte à lui seul une argumentation.", en: "The order of the ideas carries an argument in itself." },
          { es: "Le premier axe porte sur les coûts, le second sur les usages.", en: "The first axis deals with costs, the second with uses." },
          { es: "Chaque partie prépare la suivante.", en: "Each part prepares the next." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            explanation: "In a real synthesis the order of ideas carries an argument, so moving a paragraph breaks it. If nothing breaks, you have only lined the sources up.",
            question: "How can you tell that your synthesis only juxtaposes the documents?",
            options: ["You could reorder its paragraphs without changing anything.", "It quotes each document at least once.", "It has a title and a conclusion.", "It is shorter than the documents."],
            correctIndex: 0,
          },
        ],
      },
      {
        heading: "Convergence",
        body: [
          "To show that sources agree: \"X et Y s'accordent sur\" + noun (agree on), \"s'accordent à\" + infinitive (agree in doing: \"s'accordent à reconnaître\"), \"se rejoignent sur\", \"convergent\", \"vont dans le même sens\", \"X corrobore\" or \"confirme\" Y. To group them: \"tous deux\", \"l'un comme l'autre\", \"de même que X, Y...\", \"à l'instar de X\" (like X, following X's example).",
        ],
        examples: [
          { es: "Les deux auteurs s'accordent à reconnaître l'urgence de la situation.", en: "Both authors agree in recognising the urgency of the situation." },
          { es: "À l'instar de l'Insee, l'OCDE observe un ralentissement de la croissance.", en: "Like INSEE, the OECD observes a slowdown in growth." },
          { es: "Les témoignages recueillis corroborent les chiffres officiels.", en: "The testimonies gathered corroborate the official figures." },
          { es: "Ces deux enquêtes vont dans le même sens.", en: "These two surveys point in the same direction." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Like] the Court of Audit, the senators criticise the cost.",
            sentence: "___ la Cour des comptes, les sénateurs critiquent le coût.",
            answer: "À l'instar de",
            altAnswers: ["Comme"],
            explanation: "\"À l'instar de\" (like, following the example of) groups two sources that agree.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Les deux rapports s'accordent de reconnaître le problème.",
            answer: "Les deux rapports s'accordent à reconnaître le problème.",
            explanation: "\"S'accorder à\" + infinitive (agree in doing), \"s'accorder sur\" + noun. \"S'accorder de\" does not exist in this sense.",
          },
        ],
      },
      {
        heading: "Partial agreement",
        body: [
          "Agreement is rarely total, and saying so is a mark of finesse: \"X et Y s'accordent sur le constat, mais non sur ses causes\". This partial agreement is often the most interesting thing a synthesis can show.",
        ],
        examples: [
          { es: "Ils s'accordent sur le constat, mais non sur ses causes.", en: "They agree on the diagnosis, but not on its causes." },
          { es: "L'un comme l'autre dénoncent la lenteur des procédures.", en: "Both of them denounce the slowness of the procedures." },
          { es: "Les deux enquêtes se rejoignent sur les chiffres, mais non sur leur interprétation.", en: "The two surveys meet on the figures, but not on their interpretation." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The two historians agree on the facts but not on their meaning.",
            answer: "Les deux historiens s'accordent sur les faits, mais non sur leur sens.",
            altAnswers: ["Les deux historiens s'accordent sur les faits, mais pas sur leur sens.", "Les deux historiens s'accordent sur les faits, mais non sur leur signification.", "Les deux historiens s'accordent sur les faits, mais pas sur leur signification."],
            explanation: "Partial agreement is a mark of finesse: \"s'accorder sur\" + noun, then \"mais non sur\" to limit it.",
          },
        ],
      },
      {
        heading: "Divergence",
        body: [
          "To set sources against each other: \"X et Y divergent quant à\", \"s'opposent sur\", \"alors que X..., Y...\", \"tandis que\", \"là où X voit..., Y voit...\", \"à l'inverse\", \"au contraire\", \"si X..., Y, en revanche, ...\". Note the concessive \"si\" (while, whereas), which takes the indicative and no conditional: \"si le premier insiste sur les coûts, le second privilégie les bénéfices\".",
        ],
        examples: [
          { es: "Si le premier insiste sur les coûts, le second privilégie les bénéfices à long terme.", en: "While the first insists on the costs, the second puts the long-term benefits first." },
          { es: "Là où la ministre voit un progrès, les syndicats dénoncent une régression.", en: "Where the minister sees progress, the unions denounce a step backwards." },
          { es: "À l'inverse, l'éditorialiste du Figaro juge la réforme trop timide.", en: "Conversely, the Figaro's editorialist judges the reform too timid." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Si le maire défend le projet, l'opposition, en revanche, le juge ruineux.",
            question: "What does it mean?",
            options: ["While the mayor defends the project, the opposition considers it ruinously expensive.", "If the mayor defends the project, the opposition will ruin it.", "The mayor and the opposition both consider the project too expensive.", "If the mayor had defended the project, the opposition would have accepted it."],
            correctIndex: 0,
            explanation: "Concessive \"si\" + indicative means while, whereas: it sets two positions against each other, it is not a condition.",
          },
          {
            type: "multiple-choice",
            question: "Which sentence uses concessive si correctly?",
            options: ["Si le premier insiste sur les coûts, le second privilégie les bénéfices.", "Si le premier insisterait sur les coûts, le second privilégie les bénéfices.", "Si le premier insiste sur les coûts, le second privilégierait les bénéfices.", "Si le premier insiste sur les coûts, le second privilégie-t-il les bénéfices."],
            correctIndex: 0,
            explanation: "Concessive \"si\" takes the indicative in both clauses; never the conditional after \"si\".",
          },
        ],
      },
      {
        heading: "Complement",
        body: [
          "Sources often neither agree nor disagree but complement each other: \"Y complète\", \"prolonge\", \"éclaire\" (sheds light on), \"nuance\" (qualifies), \"relativise\" (puts into perspective), \"apporte un éclairage différent\". These verbs are the most valuable in a synthesis, because they show you understand how pieces of evidence fit together.",
        ],
        examples: [
          { es: "L'entretien avec la maire éclaire les chiffres sous un jour nouveau.", en: "The interview with the mayor sheds new light on the figures." },
          { es: "Le document 4 relativise ce constat en le replaçant dans une perspective européenne.", en: "Document 4 puts this finding into perspective by placing it in a European context." },
          { es: "Cet entretien apporte un éclairage différent sur la crise.", en: "This interview offers a different perspective on the crisis." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Document 4 [puts this finding into perspective].",
            sentence: "Le document 4 ___.",
            answer: "relativise ce constat",
            altAnswers: ["nuance ce constat", "relativise cette constatation"],
            explanation: "\"Relativiser\" = to put into perspective, reduce the absolute weight of a claim.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The second article extends the first one's analysis.",
            answer: "Le second article prolonge l'analyse du premier.",
            altAnswers: ["Le deuxième article prolonge l'analyse du premier.", "Le second article complète l'analyse du premier.", "Le deuxième article complète l'analyse du premier."],
            explanation: "\"Prolonger\" (to extend) and \"compléter\" show complementarity; \"second\" is common when there are only two.",
          },
        ],
      },
      {
        heading: "Say what the disagreement is about",
        body: [
          "Be precise about what the disagreement is on: facts, causes, remedies or values. \"Les deux économistes divergent moins sur le diagnostic que sur les remèdes\" is a far richer sentence than \"ils ne sont pas d'accord\".",
        ],
        examples: [
          { es: "Les deux économistes divergent moins sur le diagnostic que sur les remèdes.", en: "The two economists differ less on the diagnosis than on the remedies." },
          { es: "Les deux philosophes divergent sur les valeurs plus que sur les faits.", en: "The two philosophers differ on values more than on facts." },
          { es: "Ils s'opposent sur les causes du chômage.", en: "They clash over the causes of unemployment." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The two candidates differ less on the goals than on the means.",
            answer: "Les deux candidats divergent moins sur les objectifs que sur les moyens.",
            altAnswers: ["Les deux candidates divergent moins sur les objectifs que sur les moyens.", "Les deux candidats s'opposent moins sur les objectifs que sur les moyens."],
            explanation: "\"Diverger moins sur... que sur...\" says exactly where the disagreement lies, far richer than \"ils ne sont pas d'accord\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Both reports agree in denouncing the delays.",
        answer: "Les deux rapports s'accordent à dénoncer les retards.",
        altAnswers: ["Les deux rapports s'accordent pour dénoncer les retards.", "L'un comme l'autre, les rapports dénoncent les retards."],
        explanation: "\"S'accorder à\" + infinitive = to agree in doing something.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The photos gathered corroborate the witnesses' accounts.",
        answer: "Les photos recueillies corroborent les récits des témoins.",
        altAnswers: ["Les photos recueillies corroborent les témoignages.", "Les photographies recueillies corroborent les récits des témoins."],
        explanation: "\"Corroborer\" = to confirm independently; \"recueillies\" agrees with \"les photos\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The survey sheds new light on the strike.",
        answer: "L'enquête éclaire la grève sous un jour nouveau.",
        altAnswers: ["L'enquête éclaire la grève d'un jour nouveau.", "L'enquête jette un éclairage nouveau sur la grève.", "L'enquête apporte un éclairage nouveau sur la grève."],
        explanation: "\"Éclairer sous un jour nouveau\" presents a source as complementing the others.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Conversely, the second author considers the tax too low.",
        answer: "À l'inverse, le second auteur juge l'impôt trop faible.",
        altAnswers: ["À l'inverse, le deuxième auteur juge l'impôt trop faible.", "Au contraire, le second auteur juge l'impôt trop faible.", "À l'inverse, le second auteur estime l'impôt trop faible."],
        explanation: "\"À l'inverse\" introduces the opposing view; \"juger\" + noun + adjective = to consider something too...",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: The two studies point in opposite directions.",
        words: ["Les deux études", "vont", "dans des sens", "opposés."],
        translation: "The two studies point in opposite directions.",
        explanation: "\"Aller dans le même sens\" marks convergence; \"aller dans des sens opposés\" marks divergence.",
      },
      {
        type: "matching",
        instructions: "Match each phrase with the relationship it expresses.",
        pairs: [
          { left: "s'accordent sur", right: "agreement" },
          { left: "divergent quant à", right: "disagreement on a point" },
          { left: "nuance", right: "qualification" },
          { left: "corrobore", right: "independent confirmation" },
          { left: "prolonge", right: "extension of an analysis" },
        ],
        explanation: "A synthesis lives on these relational verbs, not on \"dit\" and \"parle de\".",
      },
      {
        type: "dictation",
        audio: "Les deux rapports se rejoignent sur l'essentiel.",
        explanation: "\"Se rejoindre sur\" = to meet, to agree on.",
      },
      {
        type: "speak",
        text: "Là où l'un voit une crise, l'autre voit une chance.",
        prompt: "Say it in French: Where one sees a crisis, the other sees an opportunity.",
        explanation: "\"Là où l'un..., l'autre...\" confronts two views in one sentence.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Si la première enquête serait optimiste, la seconde est plus réservée.",
        answer: "Si la première enquête est optimiste, la seconde est plus réservée.",
        explanation: "Concessive \"si\" (while, whereas) takes the indicative, never the conditional: \"si la première enquête est optimiste\".",
      },
    ],
  },
  {
    slug: "c2-quoting-reported-speech-spiral",
    level: "FR-C2",
    number: 6,
    title: "Spiral Review: Citer, C'est Rapporter",
    summary: "Indirect quotation is reported speech: practise the Advanced rules (tense agreement, the mood each reporting verb demands, deictic shifts, indirect questions and commands) on fresh academic and press sentences.",
    duration: "19 min",
    sections: [
      {
        heading: "Remember: the tenses step back",
        body: [
          "Nothing new here, only precision. After a past reporting verb, shift the tenses one step back (présent → imparfait, passé composé → plus-que-parfait, futur → conditionnel, futur antérieur → conditionnel passé); after a present one, keep them. In academic writing the present (\"Tocqueville observe que\") avoids the ripple; in historical narrative, the past makes it obligatory.",
        ],
        examples: [
          { es: "« La loi sera votée en mars. » → Le ministre a annoncé que la loi serait votée en mars.", en: "'The law will be passed in March.' → The minister announced the law would be passed in March." },
          { es: "Montesquieu observe que tout homme qui a du pouvoir est porté à en abuser.", en: "Montesquieu observes that every man who has power is inclined to abuse it." },
          { es: "Elle a reconnu qu'elle avait sous-estimé la difficulté de la tâche.", en: "She acknowledged that she had underestimated the difficulty of the task." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into indirect speech.",
            source: "« Nous aurons terminé le chantier avant Noël », a assuré l'entrepreneur.",
            answer: "L'entrepreneur a assuré qu'ils auraient terminé le chantier avant Noël.",
            altAnswers: ["L'entrepreneur a assuré qu'il aurait terminé le chantier avant Noël."],
            explanation: "After the past \"a assuré\", the futur antérieur \"aurons terminé\" steps back to the conditionnel passé \"auraient terminé\", and \"nous\" becomes \"ils\".",
          },
        ],
      },
      {
        heading: "Two subtle cases",
        body: [
          "Two subtle cases. A future that is still future at the time of reporting may stay future in journalism (\"le ministre a annoncé que la loi sera votée en mars\", when March hasn't come), though careful style prefers the conditional. And a hearsay conditional in the original cannot shift further: it stays as it is.",
        ],
        examples: [
          { es: "« Nous aurons fini avant l'été. » → Les ouvriers assuraient qu'ils auraient fini avant l'été.", en: "'We'll have finished before summer.' → The workers assured us they would have finished before summer." },
          { es: "« Le coupable aurait quitté le pays. » → Le journal affirmait que le coupable aurait quitté le pays.", en: "'The culprit has reportedly left the country.' → The paper claimed the culprit had reportedly left the country." },
          { es: "La porte-parole a précisé que le sommet aura lieu en juin.", en: "The spokeswoman said the summit will take place in June (June is still to come)." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Original: « Le suspect aurait fui en Espagne. » Which past report is right?",
            options: ["La police affirmait que le suspect aurait fui en Espagne.", "La police affirmait que le suspect aura fui en Espagne.", "La police affirmait que le suspect fuirait en Espagne.", "La police affirmait que le suspect ait fui en Espagne."],
            correctIndex: 0,
            explanation: "A hearsay conditional in the original cannot shift any further: \"aurait fui\" stays as it is after a past reporting verb.",
          },
        ],
      },
      {
        heading: "Opinion verbs: indicative or subjunctive",
        body: [
          "Verbs of saying and believing take the indicative in the affirmative (\"il affirme que\", \"elle pense que\", \"ils espèrent que\"). Negated or questioned, verbs of opinion usually take the subjunctive (\"il ne pense pas que la réforme soit utile\"; \"pense-t-elle que ce soit possible ?\").",
        ],
        examples: [
          { es: "Je ne pense pas que cette lecture soit fidèle au texte.", en: "I don't think this reading is faithful to the text." },
          { es: "Elle espère que la commission tiendra compte de ses remarques.", en: "She hopes the committee will take her remarks into account." },
          { es: "Croyez-vous que ce soit la bonne méthode ?", en: "Do you think this is the right method?" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it negative.",
            source: "Je pense que cette hypothèse est solide.",
            answer: "Je ne pense pas que cette hypothèse soit solide.",
            explanation: "Affirmative \"penser que\" takes the indicative (\"est\"); negated, a verb of opinion takes the subjunctive: \"je ne pense pas qu'elle soit\".",
          },
        ],
      },
      {
        heading: "Doubt and denial",
        body: [
          "Verbs of doubt and denial take the subjunctive: \"douter que\", \"nier que\", \"contester que\", \"démentir que\" (\"le ministre dément que des fonds aient été détournés\"). With \"nier\" the indicative is possible when the writer holds the fact as real: \"il nie qu'il a menti\" suggests he did lie.",
        ],
        examples: [
          { es: "Le ministre dément que des fonds aient été détournés.", en: "The minister denies that funds were misappropriated." },
          { es: "L'auteur doute que la croissance puisse durer.", en: "The author doubts that growth can last." },
          { es: "Il nie qu'il a menti.", en: "He denies that he lied (and the writer thinks he did)." },
          { es: "Le rapporteur conteste que l'échantillon soit représentatif.", en: "The rapporteur disputes that the sample is representative." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Elle nie qu'elle a copié ce passage.",
            question: "What does the indicative suggest?",
            options: ["She denies copying the passage, but the writer believes she did.", "She denies copying the passage, and the writer believes her.", "She admits that she copied the passage.", "She wonders whether she copied the passage."],
            correctIndex: 0,
            explanation: "\"Nier que\" normally takes the subjunctive; the indicative \"a copié\" signals that the writer holds the fact as real.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The director doubts that the project [will be] finished in time.",
            sentence: "La directrice doute que le projet ___ fini à temps.",
            answer: "soit",
            explanation: "\"Douter que\" takes the subjunctive, even for a future event: \"soit fini\". The subjunctive has no future tense.",
          },
        ],
      },
      {
        heading: "Dire and prétendre change with the mood",
        body: [
          "\"Dire\" changes meaning with the mood: \"il dit que tu viens\" (he says you're coming, a statement), \"il dit que tu viennes\" (he says you should come, an order, rarer and literary; normally \"il te dit de venir\"). Likewise \"prétendre que\" + indicative = to claim, + subjunctive = to demand, in literary style (\"il prétend qu'on lui obéisse\", he demands to be obeyed).",
        ],
        examples: [
          { es: "Il dit que tu viens ce soir.", en: "He says you're coming tonight." },
          { es: "Il te dit de venir ce soir.", en: "He's telling you to come tonight." },
          { es: "Le tyran prétend qu'on lui obéisse.", en: "The tyrant demands to be obeyed." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "« Elle dit que tu viennes. » What does it mean?",
            options: ["She says you should come.", "She says you are coming.", "She says you came.", "She asks whether you are coming."],
            correctIndex: 0,
            explanation: "With the subjunctive, \"dire que\" gives an order (literary): she says you should come. With the indicative (\"que tu viens\") it would be a statement.",
          },
        ],
      },
      {
        heading: "Questions, commands, deictics",
        body: [
          "Indirect questions: \"si\" for yes/no, \"ce que\" / \"ce qui\" for \"qu'est-ce que\" / \"qu'est-ce qui\", question words unchanged, no inversion, no question mark. Commands: \"de\" + infinitive (\"il nous a priés de\", \"elle leur a ordonné de\"), or \"à\" after verbs such as \"exhorter\" (\"elle les a exhortés à\"). Deictics: \"la veille\", \"le lendemain\", \"ce jour-là\", \"la semaine suivante\", \"deux ans plus tôt\".",
        ],
        examples: [
          { es: "« Pourquoi avez-vous quitté le parti ? » → La journaliste lui a demandé pourquoi il avait quitté le parti.", en: "'Why did you leave the party?' → The journalist asked him why he had left the party." },
          { es: "« Qu'est-ce qui a changé depuis hier ? » → Elle voulait savoir ce qui avait changé depuis la veille.", en: "'What has changed since yesterday?' → She wanted to know what had changed since the day before." },
          { es: "« Votez cette loi ! » → L'oratrice a exhorté les députés à voter la loi.", en: "'Pass this law!' → The speaker urged the MPs to pass the law." },
          { es: "« Nous reviendrons dans deux jours. » → Ils ont promis qu'ils reviendraient deux jours plus tard.", en: "'We'll be back in two days.' → They promised they would come back two days later." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which indirect question is correct in written French?",
            options: ["Il se demande ce que l'auteur a voulu dire.", "Il se demande qu'est-ce que l'auteur a voulu dire.", "Il se demande ce que l'auteur a-t-il voulu dire.", "Il se demande que l'auteur a voulu dire."],
            correctIndex: 0,
            explanation: "\"Ce que\" + normal word order; \"qu'est-ce que\" belongs to the direct question.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "She said she would call back [the following week].",
            sentence: "Elle a dit qu'elle rappellerait ___.",
            answer: "la semaine suivante",
            altAnswers: ["deux jours après"],
            explanation: "In a past report, \"la semaine prochaine\" is re-anchored as \"la semaine suivante\".",
          },
        ],
      },
      {
        heading: "Se demander dans quelle mesure",
        body: [
          "In academic prose, the indirect question often follows \"s'interroger sur\" + noun or \"se demander si / comment / dans quelle mesure\": \"l'autrice se demande dans quelle mesure la réforme a profité aux plus modestes\". Remember: no inversion after the question word in an indirect question (\"*dans quelle mesure la réforme a-t-elle profité*\" is wrong here).",
        ],
        examples: [
          { es: "L'autrice se demande dans quelle mesure la réforme a profité aux plus modestes.", en: "The author asks to what extent the reform has benefited the poorest." },
          { es: "Le rapport s'interroge sur l'efficacité des contrôles.", en: "The report questions the effectiveness of the checks." },
          { es: "On peut se demander comment la ville a financé ces travaux.", en: "One may wonder how the town paid for this work." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Le chercheur se demande dans quelle mesure les écrans nuisent-ils au sommeil.",
            answer: "Le chercheur se demande dans quelle mesure les écrans nuisent au sommeil.",
            explanation: "An indirect question has no inversion: after \"se demander dans quelle mesure\", the subject comes before the verb and \"-ils\" disappears.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "He wanted to know what had happened the day before.",
        answer: "Il voulait savoir ce qui s'était passé la veille.",
        explanation: "\"Qu'est-ce qui\" becomes \"ce qui\"; the passé composé steps back to the plus-que-parfait, and \"hier\" becomes \"la veille\".",
        altAnswers: ["Il voulait savoir ce qui était arrivé la veille."],
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The president urged the citizens to vote.",
        answer: "La présidente a exhorté les citoyens à voter.",
        altAnswers: ["Le président a exhorté les citoyens à voter."],
        explanation: "\"Exhorter quelqu'un à\" + infinitive: a reported command with \"à\", not \"de\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Make it negative.",
        source: "Je crois que ce témoignage est fiable.",
        answer: "Je ne crois pas que ce témoignage soit fiable.",
        explanation: "Negated \"croire que\" expresses doubt, so the subjunctive follows: \"soit\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The union disputes that the figures are accurate.",
        answer: "Le syndicat conteste que les chiffres soient exacts.",
        altAnswers: ["Le syndicat conteste que les chiffres soient justes."],
        explanation: "\"Contester que\" denies, so it takes the subjunctive: \"soient\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Elle nous a exhortés de rester calmes.",
        answer: "Elle nous a exhortés à rester calmes.",
        explanation: "Most verbs of command take \"de\" + infinitive, but \"exhorter\" takes \"à\": \"exhorter quelqu'un à faire\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "They hope the court will hear their arguments.",
        answer: "Ils espèrent que le tribunal entendra leurs arguments.",
        altAnswers: ["Elles espèrent que le tribunal entendra leurs arguments."],
        explanation: "\"Espérer que\" takes the indicative, here the future: \"entendra\".",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: She begged them not to leave.",
        words: ["Elle", "les a suppliés", "de ne pas", "partir."],
        translation: "She begged them not to leave.",
        explanation: "A reported request: \"supplier quelqu'un de\" + infinitive, with \"ne pas\" together before the infinitive.",
      },
      {
        type: "listen-choose",
        audio: "Elle se demandait si la commission tiendrait compte de ses remarques.",
        question: "What does it mean?",
        options: ["She wondered whether the committee would take her remarks into account.", "She asked the committee to take her remarks into account.", "She knew the committee would ignore her remarks.", "She wondered why the committee had taken her remarks into account."],
        correctIndex: 0,
        explanation: "\"Se demander si\" + conditional: a reported yes/no question in the past.",
      },
      {
        type: "dictation",
        audio: "Le maire dément que la piscine doive fermer.",
        explanation: "\"Démentir que\" takes the subjunctive: \"doive\".",
      },
      {
        type: "speak",
        text: "Rousseau soutient que l'homme naît bon.",
        prompt: "Say it in French: Rousseau maintains that man is born good.",
        explanation: "A present reporting verb keeps the present: nothing shifts.",
      },
      {
        type: "speak",
        text: "Le journaliste lui a demandé s'il comptait se représenter.",
        prompt: "Say it in French: The journalist asked him whether he intended to stand again.",
        explanation: "A yes/no question becomes \"si\"; \"si il\" elides to \"s'il\"; the present steps back to the imparfait.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The company denies that the data were sold.",
        answer: "L'entreprise dément que les données aient été vendues.",
        altAnswers: ["L'entreprise nie que les données aient été vendues.", "La société dément que les données aient été vendues.", "La société nie que les données aient été vendues."],
        explanation: "\"Démentir que\" and \"nier que\" take the subjunctive: past passive \"aient été vendues\", agreeing with \"les données\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Tocqueville notes that equality is changing customs.",
        answer: "Tocqueville constate que l'égalité transforme les mœurs.",
        altAnswers: ["Tocqueville observe que l'égalité transforme les mœurs.", "Tocqueville note que l'égalité transforme les mœurs.", "Tocqueville constate que l'égalité change les mœurs."],
        explanation: "With a present reporting verb, the present stays: academic French reports authors this way.",
      },
    ],
  },
  {
    slug: "c2-vocab-politics",
    level: "FR-C2",
    number: 7,
    title: "Mastery Vocabulary: The Language of Politics",
    summary: "The vocabulary of the French political press: the legal names of corruption (trafic d'influence, prise illégale d'intérêts, abus de biens sociaux), the mechanics of government (motion de censure, 49.3, remaniement) and press favourites like pantouflage and cohabitation.",
    duration: "21 min",
    sections: [
      {
        heading: "Corruption has legal names",
        body: [
          "Where English newspapers often say corruption or misconduct, French ones name the offence, because each is a distinct charge in the Code pénal. \"Le détournement de fonds publics\" is the misappropriation of public money by an official. \"L'abus de biens sociaux\" (ABS, often said aloud as \"a-bé-esse\") is the use of a company's assets by its director for personal ends: it concerns companies, not the State. \"Les emplois fictifs\" (fictitious jobs) are salaries paid for work never done.",
        ],
        examples: [
          { es: "L'ancien maire est mis en examen pour détournement de fonds publics.", en: "The former mayor has been charged with misappropriation of public funds." },
          { es: "Le dirigeant a utilisé la carte bancaire de l'entreprise pour ses vacances : c'est un abus de biens sociaux.", en: "The executive used the company card for his holidays: that's misuse of company assets." },
          { es: "Elle touchait un salaire sans jamais venir travailler : un emploi fictif.", en: "She drew a salary without ever coming to work: a fictitious job." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A company boss pays for his villa with the company's money. Which offence is it?",
            options: ["l'abus de biens sociaux", "le détournement de fonds publics", "le trafic d'influence", "le népotisme"],
            correctIndex: 0,
            explanation: "Company assets used by the director for himself: \"l'abus de biens sociaux\". \"Le détournement de fonds publics\" concerns public money and an official, not a private company.",
          },
        ],
      },
      {
        heading: "Interest, influence, bribes",
        body: [
          "\"La prise illégale d'intérêts\" is when an official takes a personal interest in an operation he or she oversees (awarding a contract to a cousin's firm). \"Le trafic d'influence\" is selling one's real or supposed influence to obtain a decision. \"La corruption\" in the legal sense is narrower: offering or accepting a bribe (\"un pot-de-vin\") for an act of one's office.",
        ],
        examples: [
          { es: "L'adjointe a attribué le marché à l'entreprise de son frère, d'où une enquête pour prise illégale d'intérêts.", en: "The deputy mayor awarded the contract to her brother's firm, hence an investigation for illegal conflict of interest." },
          { es: "Il aurait monnayé ses relations au ministère : on parle de trafic d'influence.", en: "He allegedly sold his connections at the ministry: people are talking about influence peddling." },
          { es: "Accepter un pot-de-vin, c'est de la corruption au sens strict.", en: "Accepting a bribe is corruption in the strict sense." },
        ],
        checkpoint: [
          {
            type: "matching",
            instructions: "Match each offence with its definition.",
            pairs: [
              { left: "l'abus de biens sociaux", right: "a director using company assets for himself" },
              { left: "la prise illégale d'intérêts", right: "an official benefiting from a deal he oversees" },
              { left: "le trafic d'influence", right: "selling one's influence to obtain a decision" },
              { left: "les emplois fictifs", right: "salaries paid for work never done" },
            ],
            explanation: "French press reports name the precise charge rather than a generic corruption.",
          },
        ],
      },
      {
        heading: "Clientélisme and népotisme",
        body: [
          "Two softer but damning words: \"le clientélisme\" (trading favours, jobs or subsidies for votes and loyalty) and \"le népotisme\" (favouring relatives). Neither is necessarily a crime, but both are accusations that end careers.",
        ],
        examples: [
          { es: "Le clientélisme local se nourrit de petites faveurs : un logement, un emploi, une subvention.", en: "Local patronage feeds on small favours: a flat, a job, a subsidy." },
          { es: "Embaucher son neveu comme directeur de cabinet, c'est du népotisme.", en: "Hiring your nephew as chief of staff is nepotism." },
          { es: "Le maire attribuait des logements sociaux à ses fidèles.", en: "The mayor allocated council flats to his loyal supporters." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Promoting his own daughter to the board? That's [nepotism].",
            sentence: "Nommer sa propre fille au conseil d'administration ? C'est du ___.",
            answer: "népotisme",
            explanation: "Favouring relatives is \"le népotisme\"; trading favours for votes and loyalty is \"le clientélisme\".",
          },
        ],
      },
      {
        heading: "Censure and confidence",
        body: [
          "Under the Fifth Republic, the government is answerable to the Assemblée nationale. Deputies can bring it down with \"une motion de censure\", which must win an absolute majority of the members. The Prime Minister can seek the Assembly's support on the government's programme with \"la question de confiance\" (\"engager la responsabilité du gouvernement\").",
        ],
        examples: [
          { es: "L'opposition a déposé une motion de censure contre le gouvernement.", en: "The opposition has tabled a motion of no confidence in the government." },
          { es: "La motion de censure a été rejetée à quelques voix près.", en: "The no-confidence motion was defeated by a handful of votes." },
          { es: "La Première ministre a engagé la responsabilité de son gouvernement.", en: "The Prime Minister made it a question of confidence in her government." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The motion of no confidence was passed: the government falls.",
            answer: "La motion de censure a été adoptée : le gouvernement tombe.",
            explanation: "\"Une motion de censure\" adopted by an absolute majority brings the government down. A motion is \"adoptée\" or \"votée\"; if it fails, it is \"rejetée\".",
            altAnswers: ["La motion de censure a été votée : le gouvernement tombe.", "La motion de censure a été adoptée : le gouvernement est renversé.", "La motion de censure a été votée : le gouvernement est renversé."],
          },
        ],
      },
      {
        heading: "The 49.3",
        body: [
          "\"Le 49.3\" (said \"quarante-neuf trois\"), from article 49, paragraph 3 of the Constitution, lets the government pass a bill without a vote: the text is considered adopted unless a motion de censure, tabled within 24 hours, is voted. Since 2008 it can be used without limit only for budget and social-security bills, and for one other text per session. Its use is always controversial, and the press speaks of \"dégainer le 49.3\" (to draw the 49.3, like a weapon) or \"passer en force\".",
        ],
        examples: [
          { es: "La Première ministre a dégainé le 49.3 pour faire adopter le budget.", en: "The Prime Minister used article 49.3 to force the budget through." },
          { es: "L'opposition dénonce un passage en force.", en: "The opposition condemns the bill being forced through." },
          { es: "Le texte est considéré comme adopté sans vote.", en: "The bill is deemed adopted without a vote." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Le gouvernement a dégainé le quarante-neuf trois.",
            question: "What does it mean?",
            options: ["The government used article 49.3 to pass a bill without a vote.", "The government lost 49 to 3.", "The government withdrew 49 bills.", "The government called elections for the 3rd."],
            correctIndex: 0,
            explanation: "\"Dégainer le 49.3\": to resort to the constitutional article that adopts a text without a vote.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Lacking a majority, the government forced the bill through.",
            answer: "Faute de majorité, le gouvernement est passé en force.",
            altAnswers: ["Faute de majorité, le gouvernement a fait passer le texte en force.", "Faute de majorité, le gouvernement a fait adopter le texte en force.", "Faute de majorité, le gouvernement a dégainé le 49.3."],
            explanation: "\"Passer en force\" is what the press says when the government uses the 49.3; \"faute de\" + noun = for lack of.",
          },
        ],
      },
      {
        heading: "Reshuffle and dissolution",
        body: [
          "\"Un remaniement\" (ministériel) is a cabinet reshuffle; a minister may be \"reconduit\" (kept on), \"promu\" or \"écarté\". \"La dissolution\" of the Assemblée nationale is the President's power to call early legislative elections.",
        ],
        examples: [
          { es: "Le remaniement attendu depuis des semaines a finalement eu lieu.", en: "The reshuffle expected for weeks finally took place." },
          { es: "Le ministre de l'Intérieur a été reconduit dans ses fonctions.", en: "The Interior Minister was kept on in his post." },
          { es: "Le président a prononcé la dissolution de l'Assemblée nationale.", en: "The President dissolved the National Assembly." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The Finance Minister was [kept on] in the reshuffle.",
            sentence: "Le ministre des Finances a été ___ lors du remaniement.",
            answer: "reconduit",
            altAnswers: ["maintenu"],
            explanation: "A minister kept in post is \"reconduit\"; one dropped is \"écarté\", one moved up \"promu\".",
          },
        ],
      },
      {
        heading: "Le pantouflage",
        body: [
          "\"Le pantouflage\" (from \"pantoufle\", slipper) is when a senior civil servant, often trained in the grandes écoles, leaves the State for a well-paid job in the private sector, sometimes in a company he or she used to regulate. \"Pantoufler\" is the verb, and the reverse move is \"le rétropantouflage\".",
        ],
        examples: [
          { es: "Après dix ans à Bercy, il a pantouflé dans une grande banque d'affaires.", en: "After ten years at the Finance Ministry, he left for a big investment bank." },
          { es: "Le rétropantouflage ramène des cadres du privé vers l'État.", en: "Reverse pantouflage brings private-sector executives back to the State." },
          { es: "Le mot vient de « pantoufle » : un emploi confortable.", en: "The word comes from \"pantoufle\", slipper: a comfortable job." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it to the passé composé.",
            source: "Elle pantoufle dans un groupe pharmaceutique.",
            answer: "Elle a pantouflé dans un groupe pharmaceutique.",
            explanation: "\"Pantoufler\" is a regular -er verb: \"elle a pantouflé\". It names a senior civil servant leaving the State for the private sector.",
          },
        ],
      },
      {
        heading: "Cohabitation is not a coalition",
        body: [
          "\"La cohabitation\" is the situation where the President and the Prime Minister come from opposing camps, because the legislative majority differs from the President's: France has had three (1986-1988, 1993-1995, 1997-2002). It is not a coalition, which is \"une coalition\".",
        ],
        examples: [
          { es: "La cohabitation oblige le président et le Premier ministre à partager le pouvoir.", en: "Cohabitation forces the President and the Prime Minister to share power." },
          { es: "De 1997 à 2002, Jacques Chirac a cohabité avec Lionel Jospin.", en: "From 1997 to 2002, Jacques Chirac governed in cohabitation with Lionel Jospin." },
          { es: "En Allemagne, les gouvernements de coalition sont fréquents.", en: "In Germany, coalition governments are common." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "The President is on the left; after legislative elections the Prime Minister comes from the right. What is this called?",
            options: ["la cohabitation", "la coalition", "le remaniement", "le parachutage"],
            correctIndex: 0,
            explanation: "\"La cohabitation\": President and Prime Minister from opposing camps. A coalition is several parties governing together.",
          },
        ],
      },
      {
        heading: "The style of politics",
        body: [
          "And the style of politics: \"la langue de bois\" (literally the wooden tongue: empty, evasive political language), \"une petite phrase\" (a short provocative remark that the media pick up), \"un élément de langage\" (a talking point), \"le parachutage\" (sending a national figure to stand in a constituency where he or she has no roots), \"le cumul des mandats\" (holding several elected offices at once).",
        ],
        examples: [
          { es: "Interrogée sur le scandale, la porte-parole a répondu par la langue de bois.", en: "Asked about the scandal, the spokeswoman answered with empty political jargon." },
          { es: "Sa petite phrase sur les chômeurs a fait le tour des réseaux sociaux.", en: "His throwaway remark about the unemployed went all round social media." },
          { es: "Les ministres ont reçu des éléments de langage pour défendre la réforme.", en: "The ministers were given talking points to defend the reform." },
          { es: "Les électeurs ont mal vécu ce parachutage d'un ministre parisien.", en: "Voters resented this parachuting-in of a Parisian minister." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            answer: "parachuté",
            explanation: "\"Parachuter\" a national figure is to send them to stand where they have no roots: \"le parachutage\".",
            en: "The candidate was [parachuted into] a constituency in Brittany.",
            sentence: "Le candidat a été ___ dans une circonscription bretonne.",
          },
          {
            type: "speak",
            text: "Le député refuse le cumul des mandats.",
            prompt: "Say it in French: The MP refuses to hold several offices at once.",
            explanation: "\"Le cumul des mandats\" = holding several elected offices at the same time.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Le directeur a payé sa villa avec l'argent de l'entreprise : c'est un détournement de fonds publics.",
        answer: "Le directeur a payé sa villa avec l'argent de l'entreprise : c'est un abus de biens sociaux.",
        explanation: "A company's money used by its director is \"un abus de biens sociaux\"; \"le détournement de fonds publics\" concerns the State's money.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "The firm paid [a bribe] to win the contract.",
        sentence: "L'entreprise a versé ___ pour obtenir le marché.",
        answer: "un pot-de-vin",
        explanation: "\"Un pot-de-vin\" (plural \"des pots-de-vin\") is a bribe; offering or accepting it for an official act is \"la corruption\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Her throwaway remark made the front pages.",
        answer: "Sa petite phrase a fait la une des journaux.",
        altAnswers: ["Sa petite phrase a fait la une.", "Sa petite phrase a fait la une de la presse."],
        explanation: "\"Une petite phrase\" is a short provocative remark the media pick up; \"faire la une\" = to make the front page.",
      },
      {
        type: "translate",
        prompt: "Correct the sentence.",
        explanation: "The President can dissolve only the Assemblée nationale, which triggers early legislative elections; the Sénat cannot be dissolved.",
        source: "Après la motion de censure, le président a dissous le Sénat.",
        answer: "Après la motion de censure, le président a dissous l'Assemblée nationale.",
        direction: "en-es",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The reshuffle finally took place.",
        answer: "Le remaniement a finalement eu lieu.",
        altAnswers: ["Le remaniement ministériel a finalement eu lieu.", "Le remaniement a enfin eu lieu."],
        explanation: "\"Un remaniement (ministériel)\" = a reshuffle. \"Finalement\" = in the end; \"enfin\" adds relief.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The deputy mayor has been charged with influence peddling.",
        answer: "L'adjoint au maire est mis en examen pour trafic d'influence.",
        altAnswers: ["L'adjoint au maire a été mis en examen pour trafic d'influence.", "L'adjointe au maire est mise en examen pour trafic d'influence.", "L'adjointe au maire a été mise en examen pour trafic d'influence."],
        explanation: "\"Être mis en examen pour\" + the offence, with no article: \"pour trafic d'influence\", selling one's influence to obtain a decision.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Patronage and nepotism are not always crimes.",
        answer: "Le clientélisme et le népotisme ne sont pas toujours des délits.",
        altAnswers: ["Le clientélisme et le népotisme ne sont pas toujours des crimes.", "Le clientélisme et le népotisme ne sont pas toujours des infractions."],
        explanation: "Neither is necessarily an offence in the Code pénal, but both are damning accusations.",
      },
      {
        type: "listen-choose",
        audio: "Elle est soupçonnée de prise illégale d'intérêts.",
        question: "What does it mean?",
        options: ["She is suspected of an illegal conflict of interest.", "She is suspected of charging illegal interest.", "She is suspected of losing interest in politics.", "She is suspected of taking illegal drugs."],
        correctIndex: 0,
        explanation: "\"Prise illégale d'intérêts\": an official taking a personal stake in a matter under her authority; nothing to do with bank interest.",
      },
      {
        type: "dictation",
        audio: "Le ministre a été écarté lors du remaniement.",
        explanation: "\"Écarté\" = dropped from the government in a reshuffle.",
      },
      {
        type: "speak",
        text: "La dissolution a provoqué des élections anticipées.",
        prompt: "Say it in French: The dissolution triggered early elections.",
        tip: "\"Dissolution\" has a double s, pronounced as a hard s: di-sso-lu-tion.",
        explanation: "\"Des élections anticipées\" = early elections, the consequence of \"la dissolution\".",
      },
    ],
  },
  {
    slug: "c2-vocab-gender-changes-meaning",
    level: "FR-C2",
    number: 8,
    title: "Vocabulary in Context: When Gender Changes the Meaning",
    summary: "Nouns whose gender changes their meaning (le livre / la livre, le poste / la poste, le mémoire / la mémoire, le critique / la critique...) and amour, délice and orgue, which turn feminine in the literary plural.",
    duration: "19 min",
    sections: [
      {
        heading: "Two words, one spelling: livre, tour",
        body: [
          "Some French nouns are really two words that happen to share a spelling, and the article tells them apart. \"Le livre\" is the book, \"la livre\" the pound (half a kilo at the market, or sterling: \"la livre sterling\"). \"Le tour\" is a turn, a tour or a trick (\"le Tour de France\", \"un tour de magie\", \"c'est ton tour\"), \"la tour\" is a tower (\"la tour Eiffel\").",
        ],
        examples: [
          { es: "J'ai acheté une livre de cerises et un livre de recettes.", en: "I bought a pound of cherries and a recipe book." },
          { es: "Après un tour de la ville, nous sommes montés en haut de la tour.", en: "After a tour of the town, we went up to the top of the tower." },
          { es: "La livre sterling est la monnaie du Royaume-Uni.", en: "The pound sterling is the currency of the United Kingdom." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Give me [a pound] of tomatoes, please.",
            sentence: "Donnez-moi ___ de tomates, s'il vous plaît.",
            answer: "une livre",
            explanation: "Half a kilo at the market is feminine: \"une livre\". \"Un livre\" is a book.",
          },
        ],
      },
      {
        heading: "Poste, mode, manche",
        body: [
          "\"Le poste\" is a job, a position or a set (\"un poste de directeur\", \"le poste de police\", \"un poste de radio\"), \"la poste\" is the post office. \"Le mode\" is a way or method (\"le mode d'emploi\", \"le mode de vie\", and the grammatical mood: \"le mode subjonctif\"), \"la mode\" is fashion. \"Le manche\" is a handle (\"le manche d'un couteau\"), \"la manche\" a sleeve, a round in a match, and, with a capital, the English Channel (\"la Manche\").",
        ],
        examples: [
          { es: "Elle a obtenu le poste, mais la poste a perdu son contrat.", en: "She got the job, but the post office lost her contract." },
          { es: "Lisez le mode d'emploi avant de suivre la mode.", en: "Read the instructions before following fashion." },
          { es: "Il a remonté ses manches et a pris le manche de la pioche.", en: "He rolled up his sleeves and grabbed the handle of the pickaxe." },
          { es: "Ils ont traversé la Manche à la nage.", en: "They swam across the Channel." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence is correct?",
            options: ["Le poste de police est au coin de la rue.", "La poste de police est au coin de la rue.", "Le poste de police est fermée.", "La poste de police est fermé."],
            correctIndex: 0,
            explanation: "\"Le poste de police\": masculine \"poste\" for a station or post; adjectives agree in the masculine.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Read [the instructions] carefully.",
            sentence: "Lisez attentivement ___.",
            answer: "le mode d'emploi",
            altAnswers: ["la notice"],
            explanation: "\"Le mode\" (masculine) = the way, the method; \"la mode\" is fashion.",
          },
        ],
      },
      {
        heading: "Beware of autopilot",
        body: [
          "The trap for advanced learners is not ignorance but autopilot: \"*la mode d'emploi*\" or \"*le poste est fermée*\" slip out under pressure. Learn them as fixed collocations rather than as rules.",
        ],
        examples: [
          { es: "La poste est fermée le dimanche.", en: "The post office is closed on Sundays." },
          { es: "C'est la mode des années 80.", en: "It's the fashion of the eighties." },
          { es: "Le poste de radio est cassé.", en: "The radio set is broken." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Cette mode d'emploi est incompréhensible.",
            answer: "Ce mode d'emploi est incompréhensible.",
            explanation: "\"Le mode\" (a way, a method) is masculine: \"ce mode d'emploi\". \"La mode\" is fashion.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The police station is next to the post office.",
            answer: "Le poste de police est à côté de la poste.",
            altAnswers: ["Le commissariat est à côté de la poste."],
            explanation: "\"Le poste de police\" (masculine: a post, a station) and \"la poste\" (the post office): the article does all the work.",
          },
        ],
      },
      {
        heading: "Le mémoire, la mémoire",
        body: [
          "These pairs matter in academic and cultural French. \"Le mémoire\" is a dissertation (a master's thesis: \"un mémoire de master\") or a statement of a case; \"la mémoire\" is memory. \"Les Mémoires\" (masculine plural, with a capital) are memoirs: \"les Mémoires d'outre-tombe\" of Chateaubriand.",
        ],
        examples: [
          { es: "Je soutiens mon mémoire en juin, si ma mémoire ne me trahit pas.", en: "I defend my dissertation in June, if my memory serves me right." },
          { es: "Chateaubriand a consacré trente ans à ses Mémoires.", en: "Chateaubriand devoted thirty years to his memoirs." },
          { es: "Elle a une mémoire d'éléphant.", en: "She has a memory like an elephant." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "My dissertation is about Chateaubriand's memoirs.",
            answer: "Mon mémoire porte sur les Mémoires de Chateaubriand.",
            altAnswers: ["Mon mémoire porte sur les mémoires de Chateaubriand.", "Mon mémoire traite des Mémoires de Chateaubriand."],
            explanation: "\"Le mémoire\" is a dissertation; \"les Mémoires\" (masculine plural) are memoirs. Memory would be \"la mémoire\".",
          },
        ],
      },
      {
        heading: "Le critique, la critique; le physique, la physique",
        body: [
          "\"Le critique\" is the critic (a person: \"le critique du Monde\"; a woman is \"la critique\" too, which is why context matters), \"la critique\" is criticism or a review (\"une critique élogieuse\"). \"Le physique\" is someone's physique, appearance (\"avoir le physique de l'emploi\", to look the part); \"la physique\" is physics.",
        ],
        examples: [
          { es: "Le critique a publié une critique assassine du film.", en: "The critic published a scathing review of the film." },
          { es: "Il a le physique de l'emploi, mais il a échoué en physique.", en: "He looks the part, but he failed physics." },
          { es: "Elle enseigne la physique quantique.", en: "She teaches quantum physics." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A newspaper headline reads \"Une critique élogieuse\". What is it?",
            options: ["A glowing review", "A flattering female critic", "A critical eulogy", "A complaint about praise"],
            correctIndex: 0,
            explanation: "\"Une critique\" + adjective about praise: a review. The female critic is possible in theory, but \"élogieuse\" makes the review reading obvious.",
          },
          {
            type: "listen-choose",
            audio: "Cette actrice n'a pas vraiment le physique du rôle.",
            question: "What does it mean?",
            options: ["This actress doesn't really look the part.", "This actress doesn't really understand physics.", "This actress isn't really fit enough for the role.", "This actress has no physical role."],
            correctIndex: 0,
            explanation: "\"Le physique\" is appearance: \"avoir le physique du rôle\" = to look the part. Physics is \"la physique\".",
          },
        ],
      },
      {
        heading: "Le voile, la voile; le moule, la moule",
        body: [
          "\"Le voile\" is a veil (\"lever le voile sur\", to lift the veil on); \"la voile\" is a sail and sailing (\"faire de la voile\"). \"Le moule\" is a mould (\"un moule à gâteau\", and figuratively \"sortir du même moule\"); \"la moule\" is a mussel (\"des moules-frites\").",
        ],
        examples: [
          { es: "Cette enquête lève le voile sur les pratiques du groupe.", en: "This investigation lifts the veil on the group's practices." },
          { es: "Les deux frères sortent du même moule ; ils adorent tous les deux les moules-frites.", en: "The two brothers are cut from the same cloth; both love mussels and chips." },
          { es: "Le bateau a hissé la grand-voile.", en: "The boat hoisted the mainsail." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "We went sailing in Brittany this summer.",
            answer: "Nous avons fait de la voile en Bretagne cet été.",
            altAnswers: ["On a fait de la voile en Bretagne cet été.", "Cet été, nous avons fait de la voile en Bretagne.", "Cet été, on a fait de la voile en Bretagne."],
            explanation: "\"Faire de la voile\" = to go sailing, with the feminine \"la voile\".",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The report [lifts the veil on] the club's finances.",
            sentence: "Le rapport ___ les finances du club.",
            answer: "lève le voile sur",
            explanation: "\"Lever le voile sur\" uses \"le voile\" (masculine, a veil); \"la voile\" is a sail.",
          },
        ],
      },
      {
        heading: "Amour, délice, orgue",
        body: [
          "Three nouns are masculine in the singular and may become feminine in the plural, in literary or elevated style. \"Un amour\", but \"de folles amours\", \"des amours enfantines\" (the feminine plural is literary; the masculine plural is also correct: \"des amours passagers\"). \"Un délice\", but \"des délices infinies\", \"faire ses délices de\" (to delight in). \"Un orgue\", but \"les grandes orgues\" of a cathedral, when the plural designates one majestic instrument.",
        ],
        examples: [
          { es: "Le poète chante ses premières amours.", en: "The poet sings of his first loves." },
          { es: "C'est un délice ; ces pâtisseries sont de pures délices.", en: "It's a delight; these pastries are pure delights." },
          { es: "Les grandes orgues de Notre-Dame ont résonné pendant la messe.", en: "The great organ of Notre-Dame rang out during Mass." },
          { es: "Cet orgue baroque a été restauré l'an dernier.", en: "This baroque organ was restored last year." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            explanation: "\"Un orgue\" is masculine, but the plural designating one majestic instrument is feminine: \"les grandes orgues\".",
            question: "Which phrase names the majestic organ of a cathedral?",
            options: ["les grandes orgues", "les grands orgues", "la grande orgue", "le grande orgue"],
            correctIndex: 0,
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it plural, in literary style.",
            source: "C'est un amour fou.",
            answer: "Ce sont de folles amours.",
            altAnswers: ["Ce sont des amours folles.", "Ce sont des amours fous."],
            explanation: "\"Un amour\" is masculine, but in the literary plural it may turn feminine: \"de folles amours\" (\"des\" becomes \"de\" before an adjective).",
          },
        ],
      },
      {
        heading: "Where you meet them",
        body: [
          "You will meet these feminine plurals in poetry, novels, sermons and wine reviews more than in conversation. Recognising them avoids reading a misprint where there is none; using one at the right moment is a Mastery flourish.",
        ],
        examples: [
          { es: "Ce lecteur fait ses délices des romans de Balzac.", en: "This reader delights in Balzac's novels." },
          { es: "Ce roman raconte de tristes amours.", en: "This novel tells of sad loves." },
          { es: "Les délices de la campagne lui manquaient.", en: "He missed the delights of the countryside." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In a novel you read « des délices infinies ». What is it?",
            options: ["A correct literary feminine plural", "A misprint for délices infinis", "A regional form", "A grammar mistake by the author"],
            correctIndex: 0,
            explanation: "\"Un délice\" is masculine, but \"délices\" is feminine in the plural in elevated style. Recognising it avoids reading a misprint where there is none.",
          },
        ],
      },
      {
        heading: "Gens: feminine before, masculine after",
        body: [
          "One more famous case: \"gens\" makes adjectives placed before it feminine (\"de vieilles gens\") but after it masculine (\"des gens heureux\"). It belongs to the same family of grammatical oddities that natives enjoy getting right.",
        ],
        examples: [
          { es: "De vieilles gens attendaient devant la mairie.", en: "Some old people were waiting outside the town hall." },
          { es: "Ce sont des gens très heureux.", en: "They are very happy people." },
          { es: "Toutes les vieilles gens du village sont venues.", en: "All the old people of the village came." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "They are [good] people.",
            sentence: "Ce sont de ___ gens.",
            answer: "bonnes",
            explanation: "An adjective placed before \"gens\" is feminine: \"de bonnes gens\". After it, it is masculine: \"des gens bons\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The pound fell sharply after the referendum.",
        answer: "La livre a fortement baissé après le référendum.",
        altAnswers: ["La livre a chuté après le référendum.", "La livre sterling a fortement baissé après le référendum.", "La livre a beaucoup baissé après le référendum."],
        explanation: "The currency is feminine: \"la livre\" (sterling). \"Le livre\" is a book.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Criticism of the reform is growing.",
        answer: "La critique de la réforme s'amplifie.",
        altAnswers: ["Les critiques contre la réforme se multiplient.", "La critique de la réforme grandit.", "Les critiques de la réforme se multiplient."],
        explanation: "Criticism is \"la critique\"; \"le critique\" would be a person, the critic.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The ferry crosses the Channel in ninety minutes.",
        answer: "Le ferry traverse la Manche en quatre-vingt-dix minutes.",
        altAnswers: ["Le ferry traverse la Manche en 90 minutes.", "Le bac traverse la Manche en quatre-vingt-dix minutes."],
        explanation: "\"La Manche\" (with a capital) is the English Channel; \"le manche\" is a handle.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: All these novels come out of the same mould.",
        words: ["Tous ces romans", "sortent", "du même", "moule."],
        translation: "All these novels come out of the same mould.",
        explanation: "\"Sortir du même moule\" uses \"le moule\" (a mould); \"la moule\" is a mussel.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "This veil hides the actress's face.",
        answer: "Ce voile cache le visage de l'actrice.",
        explanation: "A veil is masculine: \"ce voile\". \"Cette voile\" would be a sail.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Her memory is failing her more and more.",
        answer: "Sa mémoire la trahit de plus en plus.",
        altAnswers: ["Sa mémoire lui fait défaut de plus en plus.", "Sa mémoire la lâche de plus en plus."],
        explanation: "Memory is \"la mémoire\" (feminine); \"le mémoire\" would be a dissertation.",
      },
      {
        type: "listen-choose",
        audio: "Il rédige un mémoire sur la mémoire collective.",
        question: "What does it mean?",
        options: ["He is writing a dissertation on collective memory.", "He is writing his memoirs about collective memory.", "He remembers a collective dissertation.", "He is writing a memo about memory loss."],
        correctIndex: 0,
        explanation: "\"Un mémoire\" (masculine) is a dissertation; \"la mémoire collective\" is collective memory.",
      },
      {
        type: "dictation",
        audio: "Elle a obtenu un poste à la mairie.",
        explanation: "\"Un poste\" (masculine) is a job; \"la poste\" is the post office.",
      },
      {
        type: "speak",
        text: "Il se souvient de ses amours de jeunesse.",
        prompt: "Say it in French: He remembers the loves of his youth.",
        explanation: "\"Amours\" in the plural is often feminine in literary style, but no adjective here shows the gender.",
      },
      {
        type: "speak",
        text: "Ces pâtisseries sont un vrai délice.",
        prompt: "Say it in French: These pastries are a real delight.",
        explanation: "In the singular \"délice\" is masculine: \"un vrai délice\".",
      },
    ],
  },
];

export const FR_C2_U18_WRITING: WriteExercise = {
  type: "write",
  prompt: "Write the état de la question section of an article on a topic of your choice (for example the four-day school week, remote work or neighbourhood libraries). Integrate at least three sources (you may invent them), confront them rather than listing them, use the nous de modestie with correct agreement, hedge your inferences, and end with the gap your own study addresses.",
  minWords: 250,
  maxWords: 400,
  rubric: [
    "Sources confronted, not juxtaposed: \"s'accordent sur\", \"divergent quant à\", \"alors que\", \"là où\", \"nuance\", \"corrobore\".",
    "Dense academic relatives used correctly: \"selon laquelle\", \"dont\", \"à laquelle\", \"sur lesquels\".",
    "The author's voice: \"nous\" de modestie with singular agreement (\"nous sommes convaincu(e)\"), impersonal turns (\"il ressort de\", \"il apparaît que\") and hedging (\"il semble que\" + subjunctive, \"il n'est pas exclu que\").",
    "A gap and a contribution: \"peu d'études\", \"une lacune\", \"un angle mort\", \"c'est à cette lacune que la présente étude...\".",
  ],
  modelAnswer: "Le télétravail, longtemps marginal en France, a suscité depuis 2020 une abondante littérature, dont les conclusions ne convergent qu'en partie. Les premiers travaux, conduits dans l'urgence de la crise sanitaire, ont surtout mesuré ses effets sur la productivité. Si l'enquête de Garnier (2022) fait apparaître un maintien, voire une légère hausse, de la productivité déclarée, Roux (2023) nuance ce constat : selon lui, ces chiffres reposeraient sur l'auto-évaluation des salariés, dont la fiabilité reste discutée. Les deux auteurs s'accordent en revanche sur un point, à savoir l'ampleur des inégalités que le télétravail a révélées entre ceux qui disposaient d'un espace dédié et les autres.\n\nUne seconde vague de recherches s'est déplacée vers la santé. Dans le sillage des travaux de Moreau sur les rythmes de vie, plusieurs études ont mis en évidence un allongement de la journée de travail et un brouillage des frontières entre vie professionnelle et vie privée. L'hypothèse selon laquelle le télétravail réduirait le stress, avancée au début de la crise, semble ainsi devoir être relativisée. Il n'est pas exclu, toutefois, que ces effets varient fortement selon les secteurs.\n\nIl ressort de cet état de la question que la quasi-totalité des enquêtes porte sur les cadres des grandes métropoles. Peu d'études se sont intéressées aux employés des villes moyennes, pour lesquels le télétravail, quand il existe, prend des formes très différentes. C'est à cette lacune que la présente étude entend remédier. Nous sommes convaincue qu'elle permettra de nuancer une image du télétravail largement construite à partir d'une minorité de salariés.",
  explanation: "The sources are confronted (\"si... nuance\", \"s'accordent sur un point\") rather than listed; relatives carry the density (\"dont la fiabilité\", \"l'hypothèse selon laquelle\", \"pour lesquels\"). Claims reported without endorsement use the conditional (\"reposeraient\", \"réduirait\"), inferences are hedged (\"semble devoir être relativisée\", \"il n'est pas exclu que\" + subjunctive), and the single female author writes \"nous sommes convaincue\" with singular agreement. The paragraph ends on the gap and the contribution.",
};
