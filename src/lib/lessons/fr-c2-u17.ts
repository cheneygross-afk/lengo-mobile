// Synced from cheneygross-afk/lengo:src/lib/lessons/fr-c2-u17.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// French C2, Unit 17: Citations & References.

export const FR_C2_U17: Lesson[] = [
  {
    slug: "c2-citations-1",
    level: "FR-C2",
    number: 1,
    title: "Citer et Référencer, Part 1 of 8",
    summary: "Quote the French way: guillemets with their spaces, nested quotes, cuts and [sic], titles of works, punctuation inside or outside, and quotations woven into your own syntax.",
    duration: "19 min",
    sections: [
      {
        heading: "Les guillemets français",
        body: [
          "French marks a quotation with \"les guillemets\" « », the angled chevrons, never with the English curly quotes. In print there is a narrow non-breaking space inside each chevron: « Je pense, donc je suis. » A French reader spots a quotation in English marks at once, and in a French text it looks foreign. (In this course you type an ordinary space; the build turns it into a non-breaking one.)",
        ],
        examples: [
          { es: "Pascal l'a résumé en une phrase : « Le cœur a ses raisons que la raison ne connaît point. »", en: "Pascal summed it up in one sentence: 'The heart has its reasons which reason knows nothing of.'" },
          { es: "Comme l'écrit Boileau, « ce que l'on conçoit bien s'énonce clairement ».", en: "As Boileau writes, 'what is well conceived is clearly expressed'." },
          { es: "La formule de Voltaire, « il faut cultiver notre jardin », est devenue proverbiale.", en: "Voltaire's phrase, 'we must cultivate our garden', has become proverbial." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which line follows French typographic conventions?",
            options: ["Rousseau écrit : « L'homme est né libre. »", "Rousseau écrit: \"L'homme est né libre.\"", "Rousseau écrit : “L'homme est né libre”.", "Rousseau écrit :«L'homme est né libre.»"],
            correctIndex: 0,
            explanation: "Space before the colon, chevrons « » with a space inside each one, and the full stop inside because the quotation is a complete sentence introduced by a colon.",
          },
        ],
      },
      {
        heading: "A space before : ; ? and !",
        body: [
          "The same spacing logic applies to the high punctuation marks: French puts a space before \":\", \";\", \"?\" and \"!\" and inside « ». Forgetting the space before the colon that introduces a quotation (\"Pascal écrit :\") is the commonest typographic slip of English writers, and in an academic text it looks careless.",
        ],
        examples: [
          { es: "Rousseau ouvre ainsi le premier chapitre : « L'homme est né libre, et partout il est dans les fers. »", en: "Rousseau opens the first chapter thus: 'Man is born free, and everywhere he is in chains.'" },
          { es: "Le ministre s'interroge : « Faut-il tout recommencer ? »", en: "The minister wonders: 'Should we start all over again?'" },
          { es: "Elle n'a dit qu'un mot : « Courage ! »", en: "She said only one word: 'Courage!'" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which line is spaced the French way?",
            options: ["Le juge demande : « Qui était présent ? »", "Le juge demande: « Qui était présent? »", "Le juge demande : «Qui était présent?»", "Le juge demande:« Qui était présent ? »"],
            correctIndex: 0,
            explanation: "French puts a space before the colon and the question mark and inside each chevron. Every other line drops at least one of those spaces, as English typography does.",
          },
        ],
      },
      {
        heading: "Quotes inside quotes, and long quotations",
        body: [
          "A quotation inside a quotation takes the English-style marks “ ” in French typography (the Imprimerie nationale rule), or a second pair of chevrons in some publishing houses: « Le témoin affirme : “Je n'ai rien vu.” » Choose one system and keep it throughout the document.",
          "Long quotations (more than about three lines) are not put in guillemets at all: they are set apart as a block quotation (\"une citation détachée\" or \"en retrait\"), indented and often in a smaller font, introduced by a colon. The indentation itself is the quotation mark.",
        ],
        examples: [
          { es: "Le rapport cite un riverain : « Le maire nous a dit : “Vous serez consultés.” Nous ne l'avons jamais été. »", en: "The report quotes a local resident: 'The mayor told us: “You will be consulted.” We never were.'" },
          { es: "Ma grand-mère racontait : « Mon père répétait : “Le travail, c'est la santé.” Il est mort à quarante ans. »", en: "My grandmother used to say: 'My father kept repeating: “Work is health.” He died at forty.'" },
          { es: "Montaigne affirme que « chaque homme porte la forme entière de l'humaine condition ».", en: "Montaigne asserts that 'every man bears the whole form of the human condition'." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The witness declares: 'The driver shouted: “Get out!”'",
            answer: "Le témoin déclare : « Le conducteur a crié : “Sortez !” »",
            altAnswers: ["Le témoin déclare : « Le chauffeur a crié : “Sortez !” »", "Le témoin déclare : « Le conducteur a crié : “Descendez !” »", "Le témoin déclare : « Le conducteur a hurlé : “Sortez !” »"],
            explanation: "A quotation within a quotation: chevrons outside, “ ” inside, with the spaces before \":\" and \"!\".",
          },
        ],
      },
      {
        heading: "Cuts: [...]",
        body: [
          "A quotation must be exact, letter for letter. When you leave words out, mark the cut with an ellipsis in square brackets: \"[...]\" (in print […], one character). Some French publishers use (...) in round brackets, but in academic writing the square brackets are standard, because round brackets could belong to the original text.",
        ],
        examples: [
          { es: "« Tant qu'il existera [...] une damnation sociale [...], des livres de la nature de celui-ci pourront ne pas être inutiles. »", en: "'So long as there shall exist [...] a social condemnation [...], books like this one may not be useless.' (Hugo, preface to his great novel of 1862)" },
          { es: "Selon le rapport, « les communes rurales [...] restent les grandes oubliées de la réforme ».", en: "According to the report, 'rural municipalities [...] remain the forgotten ones of the reform'." },
          { es: "Selon la préfecture, « les travaux [...] dureront deux ans ».", en: "According to the prefecture, 'the works [...] will last two years'." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You quote « Le chantier, malgré trois mois de retard, sera livré en mai » and leave out the middle. How do you write it in an academic text?",
            options: ["« Le chantier [...] sera livré en mai »", "« Le chantier (...) sera livré en mai »", "« Le chantier ... sera livré en mai »", "« Le chantier – sera livré en mai »"],
            correctIndex: 0,
            explanation: "A cut in a quotation is marked \"[...]\" in square brackets. Round brackets could belong to the original text, and a bare ellipsis or dash does not show that words were removed.",
          },
        ],
      },
      {
        heading: "Additions in square brackets",
        body: [
          "Anything you add or change inside a quotation goes in square brackets too: a word that restores the grammar (« il [le ministre] a reconnu son erreur »), a changed tense or pronoun so the quotation fits your sentence, or a comment such as \"[nous soulignons]\" when you put words in italics that were not in italics in the original (the English equivalent is emphasis added).",
        ],
        examples: [
          { es: "Le préfet a précisé qu'« il [le projet] ne serait pas abandonné ».", en: "The prefect stated that 'it [the project] would not be abandoned'." },
          { es: "L'auteur parle d'une « crise *morale* avant d'être économique » [nous soulignons].", en: "The author speaks of a 'crisis that is *moral* before it is economic' [emphasis added]." },
          { es: "Elle écrit que « [sa] mère ne parlait jamais de la guerre ».", en: "She writes that '[her] mother never spoke about the war'." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The minister said that 'it [the reform] would be fair'.",
            answer: "Le ministre a déclaré qu'« elle [la réforme] serait juste ».",
            altAnswers: ["Le ministre a dit qu'« elle [la réforme] serait juste ».", "Le ministre a affirmé qu'« elle [la réforme] serait juste »."],
            explanation: "The pronoun in the source (\"elle\") is clarified in square brackets; \"que\" elides before the guillemet: \"qu'« elle »\". \"Réforme\" is feminine, so the pronoun is \"elle\".",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The tenants' letter speaks of 'unacceptable' conditions [emphasis added].",
            sentence: "La lettre des locataires parle de conditions « inacceptables » [___].",
            answer: "nous soulignons",
            altAnswers: ["c'est nous qui soulignons"],
            explanation: "When you italicise words that were not in italics in the source, you say so in square brackets: \"[nous soulignons]\", the French for emphasis added.",
          },
        ],
      },
      {
        heading: "[sic], used sparingly",
        body: [
          "\"[sic]\" (Latin for thus, in italics in print) signals that an error, an odd spelling or a shocking word really is in the source and is not yours: « Les résultats sont encourageant [sic] ». Use it sparingly: a string of [sic] after a political opponent's every slip reads as a sneer, and French readers notice the intention.",
        ],
        examples: [
          { es: "Le communiqué évoque « une baisse des effectifs sans précédant [sic] ».", en: "The press release mentions 'an unprecedented [sic] fall in staff numbers', with the misspelling in the original." },
          { es: "Le panneau annonçait « fermeture exeptionnelle [sic] ».", en: "The sign announced an 'exeptional [sic] closure'." },
          { es: "Le tract parle de « milliers de manifestant [sic] ».", en: "The leaflet speaks of 'thousands of protester [sic]'." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The mayor's letter states that the works will end 'en Juin' [sic].",
            sentence: "La lettre du maire précise que les travaux s'achèveront « en Juin » [___].",
            answer: "sic",
            explanation: "\"[sic]\" shows the error (a capital on a month, wrong in French) is in the source. It goes in square brackets right after the faulty word or phrase.",
          },
        ],
      },
      {
        heading: "Inside or outside?",
        body: [
          "French has a simple logic for the final punctuation. A complete quoted sentence introduced by a colon keeps its own punctuation inside the guillemets and starts with a capital: Pascal écrit : « L'homme n'est qu'un roseau, le plus faible de la nature. » A fragment integrated into your syntax starts with a small letter and your own punctuation goes outside: Pascal voit dans l'homme « le plus faible de la nature ». English, which often puts the full stop inside the quotation marks whatever happens, is not a model here.",
        ],
        examples: [
          { es: "Pascal écrit : « L'homme n'est qu'un roseau, le plus faible de la nature ; mais c'est un roseau pensant. »", en: "Pascal writes: 'Man is but a reed, the weakest in nature; but he is a thinking reed.'" },
          { es: "Pour Pascal, l'homme n'est qu'« un roseau pensant ».", en: "For Pascal, man is only 'a thinking reed'." },
          { es: "Camus écrit : « Il faut imaginer Sisyphe heureux. »", en: "Camus writes: 'One must imagine Sisyphus happy.'" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which line is punctuated correctly?",
            options: ["Selon Camus, il faut imaginer Sisyphe « heureux ».", "Selon Camus, il faut imaginer Sisyphe « heureux. »", "Selon Camus, il faut imaginer Sisyphe « Heureux ».", "Selon Camus : « il faut imaginer Sisyphe heureux ». "],
            correctIndex: 0,
            explanation: "A fragment woven into your sentence starts with a small letter and your full stop goes outside the guillemets. A full sentence after a colon would start with a capital and keep its stop inside: « Il faut imaginer Sisyphe heureux. »",
          },
        ],
      },
      {
        heading: "Weaving it into your sentence",
        body: [
          "When you weave a quotation into your own sentence, the whole must be grammatical, as if the guillemets were invisible. That often means choosing the cut carefully, or adapting a verb or pronoun in square brackets: Rousseau soutient que l'homme « est né libre » mais qu'il est « partout [...] dans les fers ». The classic introductions are \"comme le souligne X\", \"comme l'écrit X\", \"pour reprendre les mots de X\", \"selon la formule de X\", \"ce que X appelle\".",
        ],
        examples: [
          { es: "Pour reprendre les mots de La Fontaine, « la raison du plus fort est toujours la meilleure ».", en: "To borrow La Fontaine's words, 'might is always right' (literally the reason of the strongest is always the best)." },
          { es: "Ce que Montaigne appelle « l'humaine condition » n'est pas une abstraction, mais l'expérience de chacun.", en: "What Montaigne calls 'the human condition' is not an abstraction but each person's experience." },
          { es: "Selon la formule de Simone Veil, « l'avortement doit rester l'exception ».", en: "In Simone Veil's words, 'abortion must remain the exception'." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: To borrow Montaigne's words, ...",
            words: ["Pour", "reprendre", "les", "mots", "de", "Montaigne,"],
            translation: "To borrow Montaigne's words, ...",
            explanation: "\"Pour reprendre les mots de X\" (literally to take up again the words of X) is a classic way to introduce a quotation.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "As Descartes writes, 'good sense is the best shared thing in the world'.",
            answer: "Comme l'écrit Descartes, « le bon sens est la chose du monde la mieux partagée ».",
            altAnswers: ["Comme Descartes l'écrit, « le bon sens est la chose du monde la mieux partagée ».", "Comme l'écrit Descartes, « le bon sens est la chose la mieux partagée du monde »."],
            explanation: "\"Comme l'écrit X\" introduces a fragment woven into your sentence: no colon, a small letter inside the guillemets, your own punctuation outside. Note the inversion after \"comme\": \"comme l'écrit Descartes\".",
          },
        ],
      },
      {
        heading: "Titles of works",
        body: [
          "Titles of works go in italics in print, not in guillemets: Les Misérables, Du contrat social. Guillemets are for the title of a part (an article, a chapter, a poem in a collection): le chapitre « Une tempête sous un crâne » des Misérables. Handwritten or on a plain keyboard, underline the title or, at worst, use guillemets consistently.",
        ],
        examples: [
          { es: "Dans le chapitre « Une tempête sous un crâne », Hugo plonge dans la conscience de Jean Valjean.", en: "In the chapter 'A Tempest in a Skull', Hugo plunges into Jean Valjean's conscience." },
          { es: "Le titre même de Candide annonce l'ironie du conte.", en: "The very title Candide announces the irony of the tale." },
          { es: "Dans son article « La fin du travail ? », l'économiste nuance sa thèse.", en: "In his article 'The End of Work?', the economist qualifies his thesis." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You can't use italics. Which line marks the titles correctly?",
            options: ["Dans « Le Lac », poème des Méditations poétiques, Lamartine chante le temps qui fuit.", "Dans Le Lac, poème des « Méditations poétiques », Lamartine chante le temps qui fuit.", "Dans « Le Lac », poème des « Méditations poétiques », Lamartine chante le temps qui fuit.", "Dans “Le Lac”, poème des “Méditations poétiques”, Lamartine chante le temps qui fuit."],
            correctIndex: 0,
            explanation: "A poem inside a collection is a part, so it takes guillemets: « Le Lac ». The collection is a whole work, so it goes in italics in print (here it stays plain), not in guillemets.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Turn it into a direct quotation introduced by a colon.",
        source: "Le maire a affirmé que la piscine rouvrirait en juin.",
        answer: "Le maire a affirmé : « La piscine rouvrira en juin. »",
        explanation: "A direct quotation is introduced by a colon, opens with a capital and keeps its own full stop inside the guillemets. The speaker's own words go back to his tense: the conditional \"rouvrirait\" becomes the future \"rouvrira\".",
        altAnswers: ["Le maire a affirmé : « La piscine va rouvrir en juin. »", "Le maire a déclaré : « La piscine rouvrira en juin. »"],
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "As Montesquieu writes, 'power checks power'.",
        answer: "Comme l'écrit Montesquieu, « le pouvoir arrête le pouvoir ».",
        altAnswers: ["Comme Montesquieu l'écrit, « le pouvoir arrête le pouvoir »."],
        explanation: "A fragment woven into your sentence: no colon, small letter, full stop outside. \"Comme l'écrit X\" puts the subject after the verb.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "[As Hugo emphasises], poverty is a 'social condemnation'.",
        sentence: "___, la misère est une « damnation sociale ».",
        answer: "Comme le souligne Hugo",
        altAnswers: ["Comme Hugo le souligne"],
        explanation: "\"Comme le souligne X\": after \"comme\" the subject is inverted and \"le\" stands for the idea. The fragment is woven in, so the full stop stays outside.",
      },
      {
        type: "multiple-choice",
        question: "You quote a mayor's letter that misspells a word and you want readers to know the error is not yours. What do you add after the word?",
        options: ["[sic]", "[...]", "[nous soulignons]", "(sic !)"],
        correctIndex: 0,
        explanation: "\"[sic]\" (thus) certifies the error is in the source. \"[nous soulignons]\" is for emphasis you added; \"[...]\" marks a cut; an exclamation mark adds a sneer.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "What La Fontaine calls 'the reason of the strongest' is simply force.",
        answer: "Ce que La Fontaine appelle « la raison du plus fort » n'est que la force.",
        altAnswers: ["Ce que La Fontaine appelle « la raison du plus fort » n'est rien d'autre que la force.", "Ce que La Fontaine appelle « la raison du plus fort », c'est simplement la force.", "Ce que La Fontaine nomme « la raison du plus fort » n'est que la force."],
        explanation: "\"Ce que X appelle « ... »\" introduces a coined phrase; simply is best rendered by \"ne... que\" or \"rien d'autre que\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "In the poem \"Chanson d'automne\", Verlaine compares himself to a dead leaf.",
        answer: "Dans le poème « Chanson d'automne », Verlaine se compare à une feuille morte.",
        explanation: "A poem is part of a collection, so its title goes in guillemets. A whole book would be in italics in print.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: The mayor stated that 'it [the bridge] would be rebuilt'.",
        words: ["Le maire", "a affirmé", "qu'« il", "[le pont]", "serait", "reconstruit »."],
        translation: "The mayor stated that 'it [the bridge] would be rebuilt'.",
        explanation: "A pronoun cut off from its antecedent is clarified in square brackets: \"il [le pont]\". The quotation is woven into the sentence after \"que\", so the full stop stays outside.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "La ministre a reconnu qu'« il [la réforme] serait difficile à appliquer ».",
        answer: "La ministre a reconnu qu'« elle [la réforme] serait difficile à appliquer ».",
        explanation: "The bracketed noun must match the pronoun in the quotation: \"la réforme\" is feminine, so the original said \"elle\". A quotation has to stay exact and grammatical.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "[What Bergson calls] 'the vital impulse' drives evolution.",
        sentence: "___ « l'élan vital » anime l'évolution.",
        answer: "Ce que Bergson appelle",
        explanation: "\"Ce que X appelle\" introduces a term coined by an author, in guillemets because the words are his.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "According to the report, 'young people [...] are reading less and less'.",
        answer: "Selon le rapport, « les jeunes [...] lisent de moins en moins ».",
        altAnswers: ["D'après le rapport, « les jeunes [...] lisent de moins en moins »."],
        explanation: "The cut is marked \"[...]\" in square brackets; the fragment is woven into your sentence, so it starts with a small letter and the full stop goes outside.",
      },
      {
        type: "listen-choose",
        audio: "Pour reprendre les mots de Pascal, l'homme n'est qu'un roseau pensant.",
        question: "What does it mean?",
        options: ["To borrow Pascal's words, man is but a thinking reed.", "To contradict Pascal, man is more than a thinking reed.", "Pascal took back his words: man is not a reed.", "To sum up Pascal, man thinks like a reed."],
        correctIndex: 0,
        explanation: "\"Pour reprendre les mots de\" = to borrow the words of; \"ne... qu'un\" = only / but a.",
      },
      {
        type: "dictation",
        audio: "Comme le souligne Montaigne, chaque homme porte la forme entière de l'humaine condition.",
        explanation: "\"Comme le souligne\" + subject inverted; note the archaic order \"l'humaine condition\" (adjective first), which you never modernise inside a quotation.",
      },
      {
        type: "speak",
        text: "Comme le dit Montesquieu, « une injustice faite à un seul est une menace faite à tous ».",
        prompt: "Say it in French: As Montesquieu says, 'an injustice done to one is a threat to all'.",
        explanation: "\"Comme le dit X\" weaves the quotation into your sentence: no colon, small letter, full stop outside the guillemets.",
      },
      {
        type: "speak",
        text: "Comme le souligne Rousseau, « l'homme est né libre ».",
        tip: "Read the guillemets as a slight pause and a change of voice; don't say the punctuation.",
        explanation: "\"Comme le souligne X\" with inversion of the subject after \"comme\" is the most common way to introduce a quotation in French academic prose.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French, with French quotation marks.",
        source: "As Pascal writes, 'the heart has its reasons which reason knows nothing of'.",
        answer: "Comme l'écrit Pascal, « le cœur a ses raisons que la raison ne connaît point ».",
        altAnswers: ["Comme l'écrit Pascal, « le cœur a ses raisons que la raison ne connaît pas ».", "Comme Pascal l'écrit, « le cœur a ses raisons que la raison ne connaît point ».", "Comme Pascal l'écrit, « le cœur a ses raisons que la raison ne connaît pas »."],
        explanation: "\"Comme l'écrit X\" uses the neuter \"l'\" (as he writes it) and inverts the subject. The quotation is woven into the sentence, so it starts with a small letter and the full stop goes outside the guillemets.",
      },
    ],
  },
  {
    slug: "c2-direct-to-indirect-quote-transformations",
    level: "FR-C2",
    number: 2,
    title: "Transformations: De la Citation Directe à la Citation Indirecte",
    summary: "Turn a quotation into attributed paraphrase and back: tense agreement after a past verb, shifting pronouns and time words, questions and orders, and a reporting verb that says more than \"dire\".",
    duration: "19 min",
    sections: [
      {
        heading: "After a past verb, the tenses step back",
        body: [
          "When you report what someone said with a verb in the past (\"a déclaré\", \"affirmait\", \"avait annoncé\"), French moves every tense of the quotation one step back, exactly as careful English does: présent → imparfait, passé composé → plus-que-parfait, futur → conditionnel présent, futur antérieur → conditionnel passé. The imparfait, the plus-que-parfait, the conditional and the subjunctive stay as they are.",
        ],
        examples: [
          { es: "« Je ne céderai pas », a déclaré la ministre. → La ministre a déclaré qu'elle ne céderait pas.", en: "'I will not give in,' the minister said. → The minister said she would not give in." },
          { es: "« Nous avons reçu les résultats », ont annoncé les chercheurs. → Les chercheurs ont annoncé qu'ils avaient reçu les résultats.", en: "'We have received the results,' the researchers announced. → The researchers announced they had received the results." },
          { es: "« Le projet sera terminé quand les fonds auront été versés. » → Il assurait que le projet serait terminé quand les fonds auraient été versés.", en: "'The project will be finished when the funds have been paid.' → He assured us the project would be finished when the funds had been paid." },
          { es: "« Je pensais que tout était réglé. » → Elle a reconnu qu'elle pensait que tout était réglé.", en: "'I thought it was all settled.' → She admitted she had thought it was all settled." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The researchers announced that they [had found] an error.",
            sentence: "Les chercheurs ont annoncé qu'ils ___ une erreur.",
            answer: "avaient trouvé",
            altAnswers: ["avaient découvert", "avaient relevé"],
            explanation: "The passé composé of the original (\"nous avons trouvé\") moves back to the plus-que-parfait after a past reporting verb.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (indirect speech).",
            source: "The mayor announced that the library would close in June.",
            answer: "Le maire a annoncé que la médiathèque fermerait en juin.",
            altAnswers: ["Le maire a annoncé que la bibliothèque fermerait en juin.", "La maire a annoncé que la médiathèque fermerait en juin.", "La maire a annoncé que la bibliothèque fermerait en juin."],
            explanation: "After a past verb, the future of the original (\"fermera\") becomes the conditional \"fermerait\". Months take no capital.",
          },
        ],
      },
      {
        heading: "A present reporting verb moves nothing",
        body: [
          "If the reporting verb is in the present or the future (\"le rapport affirme que\", \"elle dira que\"), nothing moves: Le ministre affirme : « La réforme sera appliquée » → Le ministre affirme que la réforme sera appliquée. This is why academic French so often reports sources in the present: \"Rousseau soutient que\", \"Tocqueville observe que\". It saves you the ripple and presents the idea as still alive.",
        ],
        examples: [
          { es: "Tocqueville observe que l'égalité des conditions transforme les mœurs.", en: "Tocqueville observes that equality of conditions transforms manners." },
          { es: "Le rapport affirme que la pauvreté recule.", en: "The report states that poverty is falling." },
          { es: "Elle dira sans doute qu'elle n'était pas au courant.", en: "She'll no doubt say she didn't know." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "The report says: « Les inégalités augmentent. » You write: « Le rapport affirme que... ». How does it go on?",
            options: ["les inégalités augmentent", "les inégalités augmentaient", "les inégalités augmenteraient", "les inégalités avaient augmenté"],
            correctIndex: 0,
            explanation: "\"Affirme\" is in the present, so nothing moves: the present stays the present. The step back only happens after a past reporting verb such as \"a affirmé\".",
          },
        ],
      },
      {
        heading: "A general truth may keep its present",
        body: [
          "A general truth may keep its present after a past verb: Galilée soutenait que la Terre tourne autour du Soleil. Keeping the present tells the reader you, the writer, also hold it true; shifting it (\"tournait\") simply reports. At the Mastery level this choice is a quiet statement of stance.",
        ],
        examples: [
          { es: "Galilée soutenait que la Terre tourne autour du Soleil.", en: "Galileo maintained that the Earth goes round the Sun." },
          { es: "Darwin a montré que les espèces évoluent.", en: "Darwin showed that species evolve." },
          { es: "Le professeur nous a rappelé que l'eau bout à cent degrés.", en: "The teacher reminded us that water boils at a hundred degrees." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (keep the general truth in the present).",
            source: "Copernicus maintained that the Earth is not the centre of the universe.",
            answer: "Copernic soutenait que la Terre n'est pas le centre de l'univers.",
            altAnswers: ["Copernic affirmait que la Terre n'est pas le centre de l'univers.", "Copernic soutenait que la Terre n'était pas le centre de l'univers.", "Copernic affirmait que la Terre n'était pas le centre de l'univers."],
            explanation: "After the past \"soutenait\", keeping the present \"n'est pas\" presents the claim as a truth you share; \"n'était pas\" simply reports it. Both are correct French.",
          },
        ],
      },
      {
        heading: "Pronouns shift",
        body: [
          "The quotation's \"je\" and \"nous\" become \"il\", \"elle\", \"ils\"; \"mon\", \"notre\" become \"son\", \"leur\"; and the person spoken to (\"vous\") often becomes \"lui\" or \"leur\". Reread every pronoun: a forgotten \"nous\" turns the paraphrase into a claim of yours.",
        ],
        examples: [
          { es: "« Je vous rendrai votre manuscrit la semaine prochaine. » → L'éditeur lui a promis de lui rendre son manuscrit la semaine suivante.", en: "'I'll give your manuscript back next week.' → The publisher promised to give him his manuscript back the following week." },
          { es: "« Mon fils est malade », a expliqué la voisine. → La voisine a expliqué que son fils était malade.", en: "'My son is ill,' the neighbour explained. → The neighbour explained that her son was ill." },
          { es: "« Nous vous remercions », ont écrit les élèves. → Les élèves lui ont écrit qu'ils le remerciaient.", en: "'We thank you,' the pupils wrote. → The pupils wrote to him that they thanked him." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Original: « Notre équipe vous enverra le contrat. » Report: La directrice a promis à M. Roux que...",
            options: ["son équipe lui enverrait le contrat.", "notre équipe vous enverrait le contrat.", "son équipe vous enverra le contrat.", "leur équipe lui envoyait le contrat."],
            correctIndex: 0,
            explanation: "\"Notre\" becomes \"son\" (her team), \"vous\" becomes \"lui\" (M. Roux), and the future steps back to the conditional. Keeping \"notre\" and \"vous\" would turn the report into your own promise.",
          },
        ],
      },
      {
        heading: "Time and place words are re-anchored",
        body: [
          "Words that point to the moment and place of speaking (the deictics) must be re-anchored when the report is made at another time: \"aujourd'hui\" → \"ce jour-là\", \"hier\" → \"la veille\", \"demain\" → \"le lendemain\", \"la semaine prochaine\" → \"la semaine suivante\", \"il y a deux ans\" → \"deux ans plus tôt\", \"dans trois jours\" → \"trois jours plus tard\", \"maintenant\" → \"alors\" or \"à ce moment-là\", \"ici\" → \"là\" or the place named.",
        ],
        examples: [
          { es: "« Je partirai demain », a dit Zola. → Zola a dit qu'il partirait le lendemain.", en: "'I'll leave tomorrow,' Zola said. → Zola said he would leave the next day." },
          { es: "« Nous avons signé hier », ont confirmé les syndicats. → Les syndicats ont confirmé qu'ils avaient signé la veille.", en: "'We signed yesterday,' the unions confirmed. → The unions confirmed they had signed the day before." },
          { es: "« Ici, rien n'a changé depuis dix ans. » → Le maire a affirmé que là-bas, rien n'avait changé depuis dix ans.", en: "'Nothing has changed here for ten years.' → The mayor stated that nothing had changed there for ten years." },
          { es: "« Il y a deux ans, notre entreprise était au bord de la faillite. » → La PDG a rappelé que deux ans plus tôt, son entreprise était au bord de la faillite.", en: "'Two years ago our company was on the brink of bankruptcy.' → The CEO recalled that two years earlier her company had been on the brink of bankruptcy." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In 2026 you report a speech of 1998: \"Nous voterons cette loi l'an prochain.\" Which version is right?",
            options: ["L'oratrice affirmait qu'ils voteraient cette loi l'année suivante.", "L'oratrice affirmait que nous voterons cette loi l'an prochain.", "L'oratrice affirmait qu'ils voteront cette loi l'an prochain.", "L'oratrice affirmait qu'ils votaient cette loi l'année suivante."],
            correctIndex: 0,
            explanation: "Three shifts: \"nous\" → \"ils\", future → conditional \"voteraient\", \"l'an prochain\" → \"l'année suivante\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (a historical report).",
            source: "The general said that he would attack the next day.",
            answer: "Le général a dit qu'il attaquerait le lendemain.",
            altAnswers: ["Le général a déclaré qu'il attaquerait le lendemain.", "Le général a affirmé qu'il attaquerait le lendemain.", "Le général annonça qu'il attaquerait le lendemain.", "Le général dit qu'il attaquerait le lendemain."],
            explanation: "\"Demain\" becomes \"le lendemain\" when the report is set in the past, and the future becomes the conditional \"attaquerait\".",
          },
        ],
      },
      {
        heading: "Don't shift mechanically",
        body: [
          "Don't shift mechanically: if you report today something said this morning, \"demain\" is still tomorrow. The rule is about the reader's point of view. In a history essay, though, the shift is almost always needed: \"le lendemain\", \"la veille\", \"l'année suivante\" are the backbone of historical narrative.",
        ],
        examples: [
          { es: "Ce matin, Hugo m'a dit qu'il viendrait demain.", en: "This morning Hugo told me he would come tomorrow." },
          { es: "Tout à l'heure, le médecin a dit qu'il repasserait ce soir.", en: "Earlier on, the doctor said he would come back this evening." },
          { es: "Le 17 juin, l'officier écrivit qu'il partirait le lendemain.", en: "On 17 June the officer wrote that he would leave the next day." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "This morning Ines told you: « Je passerai demain. » You tell a colleague at lunch the same day. Which is right?",
            options: ["Inès m'a dit qu'elle passerait demain.", "Inès m'a dit qu'elle passerait le lendemain.", "Inès m'a dit qu'elle passait demain.", "Inès m'a dit qu'elle était passée la veille."],
            correctIndex: 0,
            explanation: "You report on the same day, so tomorrow is still \"demain\": the shift to \"le lendemain\" is for a report made at another time. The tense still steps back: future → conditional \"passerait\".",
          },
        ],
      },
      {
        heading: "Reported questions: si, ce que, ce qui",
        body: [
          "Reported questions lose their inversion and their question mark. A yes/no question becomes \"si\" (\"Viendrez-vous ?\" → elle lui a demandé s'il viendrait); a question word stays (\"où\", \"quand\", \"pourquoi\", \"comment\"); \"qu'est-ce que\" and \"que\" become \"ce que\", \"qu'est-ce qui\" becomes \"ce qui\". \"*Il a demandé qu'est-ce qu'il fallait faire*\" is spoken French at best; write \"il a demandé ce qu'il fallait faire\".",
        ],
        examples: [
          { es: "« Viendrez-vous à la soutenance ? » → Elle m'a demandé si je viendrais à la soutenance.", en: "'Will you come to the viva?' → She asked me whether I would come to the viva." },
          { es: "« Qu'est-ce qui vous a convaincu ? » → Le journaliste lui a demandé ce qui l'avait convaincu.", en: "'What convinced you?' → The journalist asked him what had convinced him." },
          { es: "« Comment a-t-on pu en arriver là ? » → L'éditorialiste se demande comment on a pu en arriver là.", en: "'How could it come to this?' → The editorialist wonders how it could have come to this." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "He asked [what] had to be done.",
            sentence: "Il a demandé ___ qu'il fallait faire.",
            answer: "ce",
            explanation: "In an indirect question, \"qu'est-ce que\" becomes \"ce que\". \"Il a demandé qu'est-ce qu'il fallait faire\" is colloquial.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into indirect speech (he was asking us).",
            source: "« Qu'est-ce que vous cherchez ? » a demandé le vigile.",
            answer: "Le vigile nous a demandé ce que nous cherchions.",
            altAnswers: ["Le vigile nous a demandé ce qu'on cherchait."],
            explanation: "\"Qu'est-ce que\" becomes \"ce que\", the inversion and the question mark go, \"vous\" becomes \"nous\" and the present steps back to the imparfait: \"ce que nous cherchions\".",
          },
        ],
      },
      {
        heading: "Orders become de + infinitive",
        body: [
          "Orders and requests become \"de\" + infinitive: « Partez ! » → il leur a ordonné de partir; « Ne signez rien » → elle nous a conseillé de ne rien signer. The negation \"ne... rien\", \"ne pas\" goes in a block before the infinitive.",
        ],
        examples: [
          { es: "« Ne signez rien avant lundi. » → L'avocate nous a conseillé de ne rien signer avant le lundi suivant.", en: "'Don't sign anything before Monday.' → The lawyer advised us not to sign anything before the following Monday." },
          { es: "« Asseyez-vous ! » → Le juge lui a ordonné de s'asseoir.", en: "'Sit down!' → The judge ordered him to sit down." },
          { es: "« N'oubliez pas vos papiers. » → Elle nous a rappelé de ne pas oublier nos papiers.", en: "'Don't forget your papers.' → She reminded us not to forget our papers." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into indirect speech with ordonner.",
            source: "« Fermez la porte ! » m'a dit le directeur.",
            answer: "Le directeur m'a ordonné de fermer la porte.",
            explanation: "An imperative becomes \"de\" + infinitive after the reporting verb: \"ordonner à quelqu'un de faire\", so \"m'a ordonné de fermer\".",
          },
        ],
      },
      {
        heading: "Choose a verb that says more than dire",
        body: [
          "Above all, a Mastery report rarely uses \"dire\". The reporting verb carries information the quotation implied: \"promettre de\", \"reconnaître que\", \"nier\" or \"démentir\" (+ subjunctive or indicative), \"s'engager à\", \"menacer de\", \"exhorter à\", \"s'étonner que\" (+ subjunctive), \"se demander si\". Choosing it well is half the paraphrase: « Bon, d'accord, j'ai eu tort » → il a reconnu qu'il avait eu tort.",
        ],
        examples: [
          { es: "« Je n'ai jamais touché cet argent ! » → Le député a nié avoir touché cet argent.", en: "'I never received that money!' → The MP denied having received the money." },
          { es: "« Si vous ne baissez pas les prix, nous changerons de fournisseur. » → Le client a menacé de changer de fournisseur si les prix ne baissaient pas.", en: "'If you don't lower prices, we'll change supplier.' → The client threatened to change supplier if prices didn't come down." },
          { es: "« Je vous rembourserai, c'est promis. » → Il s'est engagé à me rembourser.", en: "'I'll pay you back, I promise.' → He undertook to pay me back." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Original: \"Bon, d'accord, nous avons sous-estimé les coûts.\" Which report captures the tone best?",
            options: ["Les dirigeants ont reconnu qu'ils avaient sous-estimé les coûts.", "Les dirigeants ont prétendu qu'ils avaient sous-estimé les coûts.", "Les dirigeants ont exigé qu'ils aient sous-estimé les coûts.", "Les dirigeants ont dit que nous avons sous-estimé les coûts."],
            correctIndex: 0,
            explanation: "\"Bon, d'accord\" signals a reluctant admission: \"reconnaître que\". \"Prétendre\" casts doubt; the last option forgets the shifts.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            answer: "a promis de",
            altAnswers: ["s'est engagé à"],
            explanation: "A precise reporting verb carries the commitment: \"promettre de\" + infinitive (or \"s'engager à\"). \"A dit qu'il réformerait\" is correct but flat.",
            en: "The minister [promised to] reform the law before the summer.",
            sentence: "Le ministre ___ réformer la loi avant l'été.",
          },
        ],
      },
      {
        heading: "Back again: restoring the direct quotation",
        body: [
          "The reverse transformation is a classic DALF exercise and a good test of comprehension: from \"Elle a assuré qu'elle remettrait son rapport le lendemain\" you rebuild « Je remettrai mon rapport demain. » Undo every step: conditional → future, plus-que-parfait → passé composé, third person → first, \"le lendemain\" → \"demain\", \"si\" → inversion or \"est-ce que\".",
        ],
        examples: [
          { es: "Elle a assuré qu'elle remettrait son rapport le lendemain. → « Je remettrai mon rapport demain. »", en: "She assured us she'd hand in her report the next day. → 'I'll hand in my report tomorrow.'" },
          { es: "Il m'a demandé si j'avais lu sa thèse. → « Avez-vous lu ma thèse ? »", en: "He asked me if I'd read his thesis. → 'Have you read my thesis?'" },
          { es: "Elle m'a demandé pourquoi j'étais parti. → « Pourquoi êtes-vous parti ? »", en: "She asked me why I had left. → 'Why did you leave?'" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it back into the original direct words (vous).",
            source: "Il m'a demandé si j'avais fini le dossier.",
            answer: "Avez-vous fini le dossier ?",
            altAnswers: ["Est-ce que vous avez fini le dossier ?", "Vous avez fini le dossier ?"],
            explanation: "Undo each step: \"si\" → a direct question (inversion, est-ce que or intonation), plus-que-parfait \"aviez fini\" → passé composé \"avez fini\", \"je\" → \"vous\".",
          },
        ],
      },
      {
        heading: "The reporting verb gives the tone",
        body: [
          "The reporting verb tells you the tone of the original: \"a reconnu que\" implies a grudging admission (« Bon, c'est vrai... »), \"s'est indignée que\" an exclamation, \"a exhorté les élus à\" an imperative (« Mesdames et messieurs les élus, agissez ! »). A good restoration reproduces that tone, not just the content.",
        ],
        examples: [
          { es: "La présidente a exhorté les élus à agir. → « Agissez ! »", en: "The president urged the councillors to act. → 'Act!'" },
          { es: "Le maire a reconnu qu'il s'était trompé. → « C'est vrai, je me suis trompé. »", en: "The mayor admitted he had been wrong. → 'It's true, I was wrong.'" },
          { es: "Elle s'est indignée qu'on ait fermé l'école. → « Comment a-t-on pu fermer cette école ! »", en: "She was outraged that the school had been closed. → 'How could they close this school!'" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            explanation: "\"Reconnaître que\" signals a grudging admission, so the original sounds like « C'est vrai... », in the present that the imparfait stepped back from. A question would be reported with \"se demander si\", an order with \"de\" + infinitive.",
            question: "Report: Le ministre a reconnu que les chiffres étaient décevants. What did he most likely say?",
            options: ["« C'est vrai, les chiffres sont décevants. »", "« Les chiffres sont-ils décevants ? »", "« Soyez déçus par ces chiffres ! »", "« Les chiffres seront décevants. »"],
            correctIndex: 0,
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Turn it into indirect speech.",
        source: "« Nous ne reculerons pas », ont déclaré les grévistes.",
        answer: "Les grévistes ont déclaré qu'ils ne reculeraient pas.",
        explanation: "After the past \"ont déclaré\", the future \"reculerons\" steps back to the conditional \"reculeraient\", and \"nous\" becomes \"ils\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Turn it into indirect speech for a history essay.",
        source: "« J'ai rencontré le roi hier », écrivit l'ambassadeur.",
        answer: "L'ambassadeur écrivit qu'il avait rencontré le roi la veille.",
        altAnswers: ["L'ambassadeur a écrit qu'il avait rencontré le roi la veille."],
        explanation: "Passé composé → plus-que-parfait (\"avait rencontré\"), \"je\" → \"il\", and in a historical report \"hier\" is re-anchored as \"la veille\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Il a demandé qu'est-ce qu'il fallait apporter.",
        answer: "Il a demandé ce qu'il fallait apporter.",
        explanation: "In a reported question \"qu'est-ce que\" becomes \"ce que\". \"Il a demandé qu'est-ce que\" is spoken French at best.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: She asked me whether I would come the next day.",
        words: ["Elle", "m'a demandé", "si", "je", "viendrais", "le lendemain."],
        translation: "She asked me whether I would come the next day.",
        explanation: "\"Si\" for a yes/no question, conditional \"viendrais\" for the shifted future, \"le lendemain\" for the re-anchored \"demain\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Elle m'a ordonné que je parte.",
        answer: "Elle m'a ordonné de partir.",
        explanation: "A reported order is \"de\" + infinitive: \"ordonner à quelqu'un de partir\". With the indirect object \"m'\", \"que je parte\" doubles the person; \"ordonner que\" + subjunctive is only used without it (\"elle a ordonné que je parte\").",
      },
      {
        type: "dictation",
        audio: "La directrice nous a demandé si nous avions terminé l'inventaire.",
        explanation: "A reported yes/no question uses \"si\" and loses its inversion; the passé composé steps back to \"avions terminé\".",
      },
      {
        type: "speak",
        text: "Le président a promis qu'il reviendrait l'année suivante.",
        prompt: "Say it in French: The president promised he would come back the following year.",
        tip: "\"Céderait\": the middle e is usually silent and the ending -rait is an open è: cé-d'rè.",
        explanation: "\"Promettre que\" + conditional after a past verb, and \"l'année prochaine\" re-anchored as \"l'année suivante\".",
      },
      {
        type: "listen-choose",
        audio: "La porte-parole a confirmé qu'ils avaient conclu l'accord la veille.",
        question: "What does it mean?",
        options: ["The spokeswoman confirmed they had reached the agreement the day before.", "The spokeswoman confirmed they would reach the agreement the next day.", "The spokeswoman confirmed they had reached the agreement two days before.", "The spokeswoman confirmed they were reaching the agreement that evening."],
        correctIndex: 0,
        explanation: "\"Avaient conclu\" (plus-que-parfait) is the shifted passé composé, and \"la veille\" is the re-anchored \"hier\": the day before.",
      },
    ],
  },
  {
    slug: "c2-citations-2",
    level: "FR-C2",
    number: 3,
    title: "Citer et Référencer, Part 2 of 8",
    summary: "Attribution verbs that carry a stance (affirmer, avancer, souligner, reconnaître, déplorer, prétendre), selon / d'après / pour, and the hearsay conditional as a statement of doubt.",
    duration: "21 min",
    sections: [
      {
        heading: "The neutral core",
        body: [
          "Every time you attribute an idea, the verb you choose says something about the source and about you. The neutral core: \"affirmer\" (to assert), \"déclarer\" (for a public statement), \"indiquer\" and \"préciser\" (to state, to specify), \"observer\", \"noter\", \"constater\" (to note a fact). They report without judging.",
        ],
        examples: [
          { es: "Tocqueville observe que les peuples démocratiques ont un goût ardent pour l'égalité.", en: "Tocqueville observes that democratic peoples have an ardent taste for equality." },
          { es: "Le préfet a précisé que l'arrêté entrerait en vigueur le lendemain.", en: "The prefect specified that the order would come into force the next day." },
          { es: "La Cour des comptes constate que les dépenses ont dérapé.", en: "The Court of Audit notes that spending has gone off course." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The report [notes] that the deficit has doubled.",
            sentence: "Le rapport ___ que le déficit a doublé.",
            answer: "constate",
            altAnswers: ["observe", "note", "indique", "relève"],
            explanation: "To report a fact without judging, use a neutral verb: \"constater\", \"observer\", \"noter\", \"indiquer\". \"Démontre\" would endorse it, \"prétend\" would doubt it.",
          },
        ],
      },
      {
        heading: "Verbs that quietly endorse",
        body: [
          "Some verbs quietly endorse the content: \"souligner\" (to stress something that deserves stressing), \"rappeler\" (to remind us of something true and known), \"montrer\" and \"démontrer\" (to show, to prove), \"établir\" (to establish). If you write \"X démontre que...\", you accept the result; you cannot follow it with \"mais il se trompe\". The English demonstrate has the same force, but French writers use \"montrer\" far more often and keep \"démontrer\" for real proof.",
        ],
        examples: [
          { es: "L'enquête de l'Insee montre que les écarts de revenus se sont creusés.", en: "The INSEE survey shows that income gaps have widened." },
          { es: "Pasteur démontre que la génération spontanée n'existe pas.", en: "Pasteur proves that spontaneous generation does not exist." },
          { es: "La rapporteuse souligne l'urgence d'une réforme du financement.", en: "The rapporteur stresses the urgency of a funding reform." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You consider an author's result proven and want your verb to say so. Which do you write?",
            options: ["L'auteur démontre que...", "L'auteur prétend que...", "L'auteur avance que...", "L'auteur se demande si..."],
            correctIndex: 0,
            explanation: "\"Démontrer\" endorses the result as proof. \"Prétendre\" distances, \"avancer\" presents a hypothesis.",
          },
        ],
      },
      {
        heading: "Rappeler: what the reader should know",
        body: [
          "\"Rappeler\" is particularly French in academic prose: \"comme le rappelle Durkheim\" presents the idea as something the reader should already know. Overusing it can sound condescending; use it for genuinely established points.",
        ],
        examples: [
          { es: "Comme le rappelle Durkheim, le suicide est aussi un fait social.", en: "As Durkheim reminds us, suicide is also a social fact." },
          { es: "Comme le rappelle la Constitution, la France est une République laïque.", en: "As the Constitution reminds us, France is a secular Republic." },
          { es: "Il faut rappeler que le vote des femmes date de 1944.", en: "It is worth remembering that women's suffrage dates from 1944." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "As Weber reminds us, the state holds the monopoly of legitimate violence.",
            answer: "Comme le rappelle Weber, l'État détient le monopole de la violence légitime.",
            altAnswers: ["Comme Weber le rappelle, l'État détient le monopole de la violence légitime.", "Comme le rappelle Weber, l'État a le monopole de la violence légitime."],
            explanation: "\"Comme le rappelle X\" presents the idea as established knowledge the reader should share. Note the inversion after \"comme\": \"comme le rappelle Weber\".",
          },
        ],
      },
      {
        heading: "Putting forward a hypothesis",
        body: [
          "To present an idea as tentative: \"avancer\" (to put forward), \"suggérer\", \"émettre l'hypothèse que\", \"supposer\". Mood matters: \"suggérer que\" + indicative means to hint that something is so (\"les données suggèrent que le climat a joué un rôle\"), + subjunctive means to propose that something be done (\"elle suggère qu'on revoie le protocole\").",
        ],
        examples: [
          { es: "Certains historiens avancent que la famine a précipité la Révolution.", en: "Some historians suggest that the famine hastened the Revolution." },
          { es: "Les premières données suggèrent que le vaccin protège aussi les personnes âgées.", en: "The first data suggest that the vaccine also protects older people." },
          { es: "Le rapport suggère que l'on revoie entièrement le calendrier.", en: "The report proposes that the schedule be entirely revised." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The committee proposes that the rules [be simplified].",
            sentence: "Le comité suggère que les règles ___.",
            answer: "soient simplifiées",
            explanation: "\"Suggérer que\" + subjunctive proposes that something be done: \"soient simplifiées\", agreeing with \"les règles\". With the indicative it would hint that they are already simpler.",
          },
        ],
      },
      {
        heading: "Granting a point",
        body: [
          "To show the author granting a point, often against their own side: \"reconnaître\" (to acknowledge), \"concéder\", \"admettre\". These are gold in a synthesis because they reveal nuance: \"Même Keynes reconnaît que...\". Again, \"admettre que\" + indicative is to concede a fact, + subjunctive is to accept something as acceptable or possible (\"il admet qu'on puisse en douter\").",
        ],
        examples: [
          { es: "L'économiste reconnaît que son modèle néglige les inégalités régionales.", en: "The economist acknowledges that her model overlooks regional inequalities." },
          { es: "Même ses adversaires concèdent que la réforme a réduit la dette.", en: "Even her opponents concede that the reform has reduced the debt." },
          { es: "Il admet qu'on puisse contester ses chiffres.", en: "He accepts that his figures may be disputed." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change the verb to show the author granting the point.",
            source: "L'historien affirme que ses sources sont incomplètes.",
            answer: "L'historien reconnaît que ses sources sont incomplètes.",
            altAnswers: ["L'historien admet que ses sources sont incomplètes.", "L'historien concède que ses sources sont incomplètes."],
            explanation: "\"Reconnaître\", \"admettre\" and \"concéder\" show the author granting a point against their own interest; \"affirmer\" only asserts. With a fact, they take the indicative.",
          },
        ],
      },
      {
        heading: "Regrets, warnings and questions",
        body: [
          "To report an emotion or a question: \"déplorer\", \"regretter\" and \"s'indigner\" (+ que + subjunctive, or + noun), \"s'interroger sur\", \"se demander si\", \"mettre en garde contre\", \"plaider pour\". Notice that \"s'interroger\" takes \"sur\" + noun: \"l'auteur s'interroge sur les causes de la crise\".",
        ],
        examples: [
          { es: "Zola s'indigne qu'un innocent soit condamné au nom de la raison d'État.", en: "Zola is outraged that an innocent man should be condemned for reasons of state." },
          { es: "L'autrice s'interroge sur la place du travail dans nos vies.", en: "The author reflects on the place of work in our lives." },
          { es: "Le Conseil d'État met en garde contre une application trop rapide de la loi.", en: "The Council of State warns against applying the law too hastily." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Le philosophe s'interroge sur le sens du progrès.",
            question: "What does it mean?",
            options: ["The philosopher reflects on the meaning of progress.", "The philosopher is questioned about the meaning of progress.", "The philosopher denies that progress has any meaning.", "The philosopher interrupts a debate on progress."],
            correctIndex: 0,
            explanation: "\"S'interroger sur\" + noun means to reflect on, to question. Being questioned by someone would be \"être interrogé\".",
          },
          {
            type: "translate",
            prompt: "Correct the sentence.",
            explanation: "\"S'interroger\" is pronominal and takes \"sur\" + noun: \"s'interroger sur les effets\". Without \"sur\" the noun has no link to the verb.",
            direction: "en-es",
            source: "La sociologue s'interroge les effets du télétravail.",
            answer: "La sociologue s'interroge sur les effets du télétravail.",
          },
        ],
      },
      {
        heading: "Prétendre: a claim you doubt",
        body: [
          "\"Prétendre\" is a famous false friend: it does not mean to pretend (\"faire semblant\") but to claim, with a strong suggestion that the claim is false. \"Il prétend avoir tout lu\" = he claims to have read everything (and I doubt it). Writing \"X prétend que\" about a scholar you respect is a small insult. \"Alléguer\" (to allege) and \"se targuer de\" (to pride oneself on) also distance.",
        ],
        examples: [
          { es: "Il prétend avoir lu l'intégralité de La Comédie humaine en un été.", en: "He claims to have read the whole of Balzac's Human Comedy in one summer." },
          { es: "La société se targue d'être la première à avoir supprimé le plastique.", en: "The company prides itself on being the first to have eliminated plastic." },
          { es: "Le suspect allègue qu'il dormait chez lui.", en: "The suspect alleges that he was asleep at home." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A respected historian states a well-documented fact. Which verb would be a small insult?",
            options: ["prétend", "rappelle", "souligne", "observe"],
            correctIndex: 0,
            explanation: "\"Prétendre\" implies the claim is false. The others report neutrally or approvingly.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (show doubt with the verb).",
            source: "She claims she has never seen the contract.",
            answer: "Elle prétend n'avoir jamais vu le contrat.",
            altAnswers: ["Elle prétend ne jamais avoir vu le contrat.", "Elle prétend qu'elle n'a jamais vu le contrat."],
            explanation: "\"Prétendre\" means to claim, with a hint of doubt (not to pretend, which is \"faire semblant\"). With the same subject it takes the past infinitive: \"n'avoir jamais vu\".",
          },
        ],
      },
      {
        heading: "Selon, d'après, pour, à en croire",
        body: [
          "Prepositions of attribution: \"selon X\" and \"d'après X\" (according to X) are neutral; \"pour X\" (for X, in X's view) presents a viewpoint and is very common in essays (\"pour Sartre, l'existence précède l'essence\"). \"À en croire X\" (if X is to be believed) is openly sceptical. \"Selon moi\" exists, but in academic French one prefers \"à notre sens\" or an impersonal turn.",
        ],
        examples: [
          { es: "À en croire la direction, aucun licenciement n'est prévu.", en: "If management is to be believed, no redundancies are planned." },
          { es: "Pour Sartre, l'existence précède l'essence.", en: "For Sartre, existence precedes essence." },
          { es: "D'après l'Insee, le pouvoir d'achat a progressé de 1,2 % en 2025.", en: "According to INSEE, purchasing power rose by 1.2% in 2025." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "À en croire le ministre, la réforme ne coûterait rien.",
            question: "What does it mean?",
            options: ["If the minister is to be believed, the reform would cost nothing.", "The minister believes the reform will be expensive.", "According to the minister, the reform cost a great deal.", "The minister doesn't believe the reform is free."],
            correctIndex: 0,
            explanation: "\"À en croire\" + the conditional \"coûterait\": a double signal that the writer doubts the claim.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "For Pascal, man is a thinking reed.",
            answer: "Pour Pascal, l'homme est un roseau pensant.",
            altAnswers: ["Selon Pascal, l'homme est un roseau pensant.", "D'après Pascal, l'homme est un roseau pensant."],
            explanation: "\"Pour X\" presents the author's viewpoint, the standard essay formula; \"selon\" and \"d'après\" work too.",
          },
        ],
      },
      {
        heading: "The hearsay conditional",
        body: [
          "You met the journalistic conditional at the Advanced level. In attribution it becomes a precise tool: \"Selon le ministère, le chômage aurait baissé\" means the ministry says so and I am not vouching for it. \"Selon le ministère, le chômage a baissé\" simply reports. The conditional is a statement of doubt, or at least of non-commitment, so it cannot be used for something you have verified, and it never appears after \"que\" with a reporting verb: \"le ministère affirme que le chômage a baissé\", not \"aurait baissé\".",
        ],
        examples: [
          { es: "Selon plusieurs témoins, le conducteur aurait pris la fuite à pied.", en: "According to several witnesses, the driver allegedly fled on foot." },
          { es: "D'après la police, l'incendie serait d'origine criminelle.", en: "According to the police, the fire is thought to be arson." },
          { es: "Le ministère affirme que la fraude a reculé.", en: "The ministry states that fraud has fallen." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (you don't vouch for the figure).",
            source: "According to the union, two hundred jobs are allegedly under threat.",
            answer: "Selon le syndicat, deux cents emplois seraient menacés.",
            altAnswers: ["D'après le syndicat, deux cents emplois seraient menacés.", "Selon le syndicat, deux cents postes seraient menacés.", "D'après le syndicat, deux cents postes seraient menacés."],
            explanation: "After \"selon\", the conditional \"seraient menacés\" marks the claim as unverified: allegedly. The present \"sont menacés\" would simply report it as fact.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Le ministère affirme que les prix auraient baissé.",
            answer: "Le ministère affirme que les prix ont baissé.",
            altAnswers: ["Le ministère affirme que les prix baissent."],
            explanation: "The hearsay conditional never follows \"que\" after a reporting verb: the verb already attributes the claim. Use the indicative (\"ont baissé\"), or write \"selon le ministère, les prix auraient baissé\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Make it sceptical with à en croire.",
        source: "Selon le maire, les travaux seront finis en mai.",
        answer: "À en croire le maire, les travaux seront finis en mai.",
        altAnswers: ["À en croire le maire, les travaux seraient finis en mai.", "À en croire le maire, les travaux seront terminés en mai."],
        explanation: "\"Selon\" is neutral; \"à en croire X\" (if X is to be believed) is openly sceptical. The rest of the sentence can stay as it is.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "According to the press, the singer [is said to have cancelled] her tour.",
        sentence: "Selon la presse, la chanteuse ___ sa tournée.",
        answer: "aurait annulé",
        explanation: "The past conditional \"aurait annulé\" reports an unconfirmed past fact: is said to have cancelled. \"A annulé\" would vouch for it.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The figures suggest that the drought played a role.",
        answer: "Les chiffres suggèrent que la sécheresse a joué un rôle.",
        altAnswers: ["Les données suggèrent que la sécheresse a joué un rôle.", "Les chiffres laissent penser que la sécheresse a joué un rôle."],
        explanation: "\"Suggérer que\" + indicative hints that something is so (\"a joué\"). With a subjunctive it would propose that something be done.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The union deplores the fact that the factory is closing.",
        answer: "Le syndicat déplore que l'usine ferme.",
        altAnswers: ["Le syndicat regrette que l'usine ferme.", "Le syndicat déplore la fermeture de l'usine.", "Le syndicat déplore le fait que l'usine ferme."],
        explanation: "\"Déplorer que\" expresses a regret, so it takes the subjunctive: \"que l'usine ferme\" (the same form as the indicative here). \"Déplorer\" + noun also works.",
      },
      {
        type: "matching",
        instructions: "Match each reporting verb with its stance.",
        pairs: [
          { left: "prétendre", right: "to claim (and I doubt it)" },
          { left: "démontrer", right: "to prove (and I accept it)" },
          { left: "avancer", right: "to put forward a hypothesis" },
          { left: "reconnaître", right: "to acknowledge, to admit" },
          { left: "déplorer", right: "to deplore, to regret" },
        ],
        explanation: "The verb reports both what the source said and how you, the writer, position yourself.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The minister prides himself on never having lied.",
        answer: "Le ministre se targue de n'avoir jamais menti.",
        altAnswers: ["Le ministre se targue de ne jamais avoir menti."],
        explanation: "\"Se targuer de\" + infinitive (to pride oneself on) distances you from a boast. With a past infinitive the negation wraps \"avoir\": \"n'avoir jamais menti\".",
      },
      {
        type: "speak",
        text: "D'après la presse locale, le maire serait candidat.",
        prompt: "Say it in French: According to the local press, the mayor is apparently standing.",
        tip: "\"Aurait\" sounds like \"au-rè\": the conditional ending -ait is an open è.",
        explanation: "\"D'après\" + hearsay conditional (\"serait candidat\") reports a claim you don't vouch for.",
      },
      {
        type: "dictation",
        audio: "La chercheuse concède que son échantillon est trop réduit.",
        explanation: "\"Concéder que\" + indicative: the author grants a weakness in her own study.",
      },
    ],
  },
  {
    slug: "c2-attribution-verbs-contrast",
    level: "FR-C2",
    number: 4,
    title: "Contrast Clinic: Affirme, Soutient, Suggère, Prétend, Reconnaît",
    summary: "Five reporting verbs that look interchangeable and are not: what each says about the source's attitude and yours, and how one quotation can be reported neutrally, approvingly or sceptically.",
    duration: "19 min",
    sections: [
      {
        heading: "Affirme or soutient?",
        body: [
          "\"Affirmer\" presents a statement as firmly asserted: the source says it is so, full stop. It is the default neutral verb, slightly stronger than \"dire\" or \"indiquer\".",
          "\"Soutenir\" means to maintain, to defend a position, and implies that the position is debatable and that the author argues for it, often against others. It is the verb of the thesis: a doctoral candidate \"soutient sa thèse\" at \"la soutenance\". \"Keynes soutient que la demande fait l'emploi\" tells the reader this is one side of a debate.",
        ],
        examples: [
          { es: "Le ministère affirme que les délais seront tenus.", en: "The ministry states that the deadlines will be met." },
          { es: "Rousseau soutient que la propriété est à l'origine de l'inégalité.", en: "Rousseau maintains that property is the origin of inequality." },
          { es: "Contre l'avis de ses pairs, elle soutient que la crise était prévisible.", en: "Against her peers' opinion, she maintains that the crisis was foreseeable." },
          { es: "Ils soutiennent mordicus que la Terre est plate.", en: "They stubbornly maintain that the Earth is flat." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A student is about to defend her doctoral thesis. What is the event called?",
            options: ["la soutenance", "l'affirmation", "la suggestion", "la prétention"],
            correctIndex: 0,
            explanation: "\"Soutenir une thèse\" gives \"la soutenance\": the verb is about defending a position.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (a debated thesis).",
            source: "Keynes maintains that demand creates employment.",
            answer: "Keynes soutient que la demande crée l'emploi.",
            altAnswers: ["Keynes soutient que la demande fait l'emploi.", "Keynes soutient que la demande crée de l'emploi.", "Keynes soutient que c'est la demande qui crée l'emploi."],
            explanation: "\"Soutenir que\" presents a position defended in a debate. \"Affirme\" would be acceptable but flatter.",
          },
        ],
      },
      {
        heading: "A figure or a thesis",
        body: [
          "So \"l'Insee affirme que le chômage a baissé\" (a stated figure) sounds right, while \"l'Insee soutient que le chômage a baissé\" suggests a controversy over the figure. Conversely, \"Rousseau affirme que la propriété est à l'origine de l'inégalité\" is acceptable, but \"soutient\" captures better that it is a thesis argued over a whole Discours.",
        ],
        examples: [
          { es: "Le témoin affirme avoir vu deux hommes s'enfuir.", en: "The witness states that he saw two men run away." },
          { es: "L'Insee affirme que l'inflation a ralenti.", en: "INSEE states that inflation has slowed." },
          { es: "Marx soutient que l'histoire est celle de la lutte des classes.", en: "Marx maintains that history is the history of class struggle." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "The ministry publishes an official figure. Which verb reports it without hinting at a controversy?",
            options: ["Le ministère affirme que les exportations ont progressé.", "Le ministère soutient que les exportations ont progressé.", "Le ministère prétend que les exportations ont progressé.", "Le ministère avoue que les exportations ont progressé."],
            correctIndex: 0,
            explanation: "A stated figure is simply asserted: \"affirme\". \"Soutient\" suggests a debated thesis, \"prétend\" casts doubt, and \"avoue\" implies an embarrassing confession.",
          },
        ],
      },
      {
        heading: "Avancer or suggérer",
        body: [
          "\"Avancer\" puts forward an idea openly, as a hypothesis or an argument: \"elle avance une explication\", \"il avance que la crise est d'abord politique\". The author takes responsibility for it.",
          "\"Suggérer\" is softer: the source hints, or the data point in a direction without proving it. It is the honest verb for correlations: \"ces chiffres suggèrent un lien\". \"Laisser entendre\" (to imply, to let it be understood) goes further: the idea is never stated, only insinuated, and the verb often hints at a manoeuvre: \"le ministre a laissé entendre qu'il pourrait démissionner\".",
        ],
        examples: [
          { es: "L'historienne avance une hypothèse audacieuse sur l'origine du manuscrit.", en: "The historian puts forward a bold hypothesis on the origin of the manuscript." },
          { es: "Ces chiffres suggèrent un lien entre isolement et dépression.", en: "These figures suggest a link between isolation and depression." },
          { es: "Certains chercheurs avancent que le rythme scolaire nuit à l'apprentissage.", en: "Some researchers argue that the school timetable hinders learning." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "These figures [suggest] a link between noise and stress.",
            sentence: "Ces chiffres ___ un lien entre le bruit et le stress.",
            answer: "suggèrent",
            altAnswers: ["laissent supposer", "laissent penser"],
            explanation: "\"Suggérer\" is the honest verb for data that point somewhere without proving it; note the grave accent in \"suggèrent\".",
          },
        ],
      },
      {
        heading: "Laisser entendre, and the English trap",
        body: [
          "English writers tend to overuse suggest where French expects \"avancer\" (an explicit claim) or \"montrer\" (a solid result). Check whether the author actually said it (avancer), merely implied it (laisser entendre), or whether the evidence points to it (suggérer).",
        ],
        examples: [
          { es: "Le ministre a laissé entendre qu'il pourrait démissionner.", en: "The minister implied that he might resign." },
          { es: "Sans le dire explicitement, l'auteur laisse entendre que son maître s'est trompé.", en: "Without saying so explicitly, the author implies that his teacher was wrong." },
          { es: "Sans rien promettre, la directrice a laissé entendre qu'il y aurait des primes.", en: "Without promising anything, the director implied there would be bonuses." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change the verb: the mayor only insinuated it.",
            source: "Le maire a déclaré qu'il se représenterait.",
            answer: "Le maire a laissé entendre qu'il se représenterait.",
            explanation: "An idea that is never stated, only hinted at, is reported with \"laisser entendre\". \"Déclarer\" says he announced it openly.",
          },
        ],
      },
      {
        heading: "Reconnaît or prétend?",
        body: [
          "These two are opposites in what they imply about truth. \"Reconnaître que\" (to acknowledge) presupposes the content is true and that admitting it costs the speaker something: \"le PDG reconnaît que des erreurs ont été commises\". \"Prétendre que\" presupposes the content is doubtful or false: \"le PDG prétend qu'aucune erreur n'a été commise\".",
        ],
        examples: [
          { es: "Le PDG reconnaît que des erreurs ont été commises.", en: "The CEO acknowledges that mistakes were made." },
          { es: "Le PDG prétend qu'aucune erreur n'a été commise.", en: "The CEO claims that no mistakes were made." },
          { es: "La ministre reconnaît que la réforme a été mal expliquée.", en: "The minister acknowledges that the reform was badly explained." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Le fabricant prétend que son moteur ne pollue pas.",
            question: "What does the writer imply?",
            options: ["The maker claims its engine doesn't pollute, and the writer doubts it.", "The maker admits its engine pollutes.", "The maker pretends its engine is broken.", "The writer confirms the engine doesn't pollute."],
            correctIndex: 0,
            explanation: "\"Prétendre que\" means to claim, and presupposes the claim is doubtful. It is not to pretend (\"faire semblant\"), and an admission would be \"reconnaître\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Le directeur prétend de ne rien savoir.",
            answer: "Le directeur prétend ne rien savoir.",
            altAnswers: ["Le directeur prétend qu'il ne sait rien."],
            explanation: "\"Prétendre\" takes a bare infinitive, with no \"de\": \"prétendre ne rien savoir\". The negation \"ne rien\" goes as a block before the infinitive.",
          },
        ],
      },
      {
        heading: "Admettre, concéder, avouer",
        body: [
          "In between: \"admettre\" (to admit, often more neutral), \"concéder\" (to concede a point in an argument, then usually move on: \"il concède que... mais...\"). \"Avouer\" is to confess, suggesting guilt or embarrassment.",
        ],
        examples: [
          { es: "L'auteur concède que l'échantillon est réduit, mais maintient ses conclusions.", en: "The author concedes the sample is small but stands by his conclusions." },
          { es: "Elle a fini par avouer qu'elle n'avait pas lu le rapport.", en: "She eventually confessed that she hadn't read the report." },
          { es: "Le maire admet que le chantier a pris du retard.", en: "The mayor admits that the building work has fallen behind schedule." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "He [confessed] that he had copied the answers.",
            sentence: "Il a ___ qu'il avait copié les réponses.",
            answer: "avoué",
            altAnswers: ["reconnu"],
            explanation: "Admitting something you are guilty of or embarrassed by is \"avouer\". \"Concéder\" grants a point in an argument; \"reconnaître\" would also be possible but less guilty-sounding.",
          },
        ],
      },
      {
        heading: "Presuppositions used as weapons",
        body: [
          "Because these verbs carry presuppositions, they can be used to manipulate. A journalist who writes \"le maire reconnaît que le projet a pris du retard\" makes the delay a fact; \"le maire prétend que le projet n'a pas pris de retard\" makes the denial suspect. At the Mastery level you read them that way, and you use them deliberately.",
        ],
        examples: [
          { es: "Le club reconnaît que l'entraîneur a été maladroit.", en: "The club acknowledges that the coach was clumsy." },
          { es: "Le club prétend que l'entraîneur n'a rien dit de choquant.", en: "The club claims the coach said nothing shocking." },
          { es: "Le gouvernement reconnaît que le chômage remonte.", en: "The government acknowledges that unemployment is rising again." },
        ],
        checkpoint: [
          {
            type: "matching",
            instructions: "Match each report with what it implies.",
            pairs: [
              { left: "Le maire reconnaît que le projet a du retard.", right: "The delay is real, and he admits it." },
              { left: "Le maire prétend que le projet n'a pas de retard.", right: "He denies a delay, and the writer doubts him." },
              { left: "Le maire laisse entendre que le projet aura du retard.", right: "He hints at a delay without saying it." },
              { left: "Le maire soutient que le retard est inévitable.", right: "He defends a debatable position." },
            ],
            explanation: "Each verb carries its own presupposition about truth and attitude.",
          },
        ],
      },
      {
        heading: "One quotation, three reports",
        body: [
          "Take one sentence from a fictional study: « L'usage des écrans le soir réduit la durée du sommeil des adolescents. » Neutral report: \"L'étude indique que l'usage des écrans le soir réduit...\" Approving: \"L'étude montre (établit) que...\", or \"comme le montre l'étude...\". Sceptical: \"L'étude prétend que...\", \"À en croire l'étude, l'usage des écrans réduirait...\", or the ironic \"L'étude affirme, sans convaincre, que...\".",
        ],
        examples: [
          { es: "L'étude indique que l'usage des écrans le soir réduit la durée du sommeil.", en: "The study indicates that evening screen use reduces sleep time." },
          { es: "Comme le montre l'étude, l'usage des écrans le soir réduit la durée du sommeil.", en: "As the study shows, evening screen use reduces sleep time." },
          { es: "À en croire l'étude, l'usage des écrans le soir réduirait la durée du sommeil.", en: "If the study is to be believed, evening screen use reduces sleep time." },
          { es: "L'étude prétend, sans convaincre, que les écrans sont seuls responsables.", en: "The study claims, unconvincingly, that screens are solely responsible." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (approving report).",
            source: "As the survey shows, teenagers read less.",
            answer: "Comme le montre l'enquête, les adolescents lisent moins.",
            altAnswers: ["Comme le montre l'enquête, les ados lisent moins.", "Comme l'enquête le montre, les adolescents lisent moins."],
            explanation: "\"Comme le montre X\" reports approvingly: you accept the result. Note the inversion after \"comme\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it sceptical with à en croire.",
            source: "L'étude indique que le café allonge la vie.",
            answer: "À en croire l'étude, le café allongerait la vie.",
            altAnswers: ["À en croire cette étude, le café allongerait la vie."],
            explanation: "\"À en croire\" openly distances you, and the hearsay conditional \"allongerait\" goes with it. \"Indique\" was a neutral report.",
          },
        ],
      },
      {
        heading: "In a synthesis, stay neutral",
        body: [
          "In a DALF synthesis you must stay neutral about the documents: \"le document 1 indique / souligne / avance\" are safe, \"prétend\" is a mistake because it slips your opinion into a task that forbids it. In an essay or an op-ed, the stance verb is a legitimate weapon.",
        ],
        examples: [
          { es: "Le document 2 souligne en revanche le rôle du stress scolaire.", en: "Document 2, by contrast, stresses the role of school stress." },
          { es: "Le document 3 rappelle le contexte historique.", en: "Document 3 recalls the historical context." },
          { es: "Le document 1 indique que les loyers ont doublé.", en: "Document 1 indicates that rents have doubled." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In a DALF synthesis (which must be neutral), which sentence is acceptable?",
            options: ["Le document 1 souligne le coût de la mesure.", "Le document 1 prétend que la mesure coûte cher.", "Le document 1 a raison de dire que la mesure coûte cher.", "Le document 1 se trompe sur le coût de la mesure."],
            correctIndex: 0,
            explanation: "The synthesis forbids your opinion: \"souligner\" reports. \"Prétend\", \"a raison\" and \"se trompe\" all judge.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (sceptical report).",
        source: "The company claims that its products are harmless.",
        answer: "L'entreprise prétend que ses produits sont inoffensifs.",
        altAnswers: ["La société prétend que ses produits sont inoffensifs.", "L'entreprise prétend que ses produits sont sans danger.", "La société prétend que ses produits sont sans danger."],
        explanation: "\"Prétendre que\" + indicative distances the writer from the claim.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (a debated position).",
        source: "Rousseau maintains that society corrupts man.",
        answer: "Rousseau soutient que la société corrompt l'homme.",
        altAnswers: ["Rousseau soutient que la société pervertit l'homme."],
        explanation: "\"Soutenir que\" signals a thesis defended against others. \"Corrompre\" keeps its p: \"il corrompt\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The minister concedes that the measure is unpopular.",
        answer: "Le ministre concède que la mesure est impopulaire.",
        altAnswers: ["La ministre concède que la mesure est impopulaire.", "Le ministre admet que la mesure est impopulaire.", "La ministre admet que la mesure est impopulaire.", "Le ministre reconnaît que la mesure est impopulaire.", "La ministre reconnaît que la mesure est impopulaire."],
        explanation: "\"Concéder que\" + indicative grants a point, usually before moving on to a \"mais\".",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "The coach [implied] that he would leave the club.",
        sentence: "L'entraîneur a ___ qu'il quitterait le club.",
        answer: "laissé entendre",
        altAnswers: ["sous-entend", "insinue"],
        explanation: "He never said it; he let it be understood: \"laisser entendre\". \"Suggérer\" is for data pointing somewhere, \"avancer\" for an explicit claim.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Il a avoué d'avoir menti à ses parents.",
        answer: "Il a avoué avoir menti à ses parents.",
        altAnswers: ["Il a avoué qu'il avait menti à ses parents."],
        explanation: "\"Avouer\" takes a bare infinitive, without \"de\": \"avouer avoir menti\" (past infinitive for an earlier action).",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Some researchers argue that the crisis is political.",
        words: ["Certains", "chercheurs", "avancent", "que la crise", "est politique."],
        translation: "Some researchers argue that the crisis is political.",
        explanation: "\"Avancer que\" puts forward an explicit claim or hypothesis.",
      },
      {
        type: "listen-choose",
        audio: "La chercheuse concède que ses données sont anciennes, mais elle maintient sa thèse.",
        question: "What does it mean?",
        options: ["The researcher concedes her data is old but stands by her thesis.", "The researcher refuses to update her data and drops her thesis.", "The researcher confesses she made up her data.", "The researcher claims her data is recent."],
        correctIndex: 0,
        explanation: "\"Concéder que... mais...\" grants a weakness and then moves on: the typical pattern of a nuanced argument.",
      },
      {
        type: "dictation",
        audio: "Le document trois avance une explication plus politique.",
        explanation: "\"Avancer\" puts forward an explicit idea: a safe, neutral verb in a synthesis.",
      },
      {
        type: "speak",
        text: "La direction reconnaît que la communication a été insuffisante.",
        prompt: "Say it in French: Management acknowledges that communication was inadequate.",
        tip: "Say the letters of PDG: pé-dé-gé.",
        explanation: "\"Reconnaître que\" makes the content a fact the speaker admits, at some cost.",
      },
      {
        type: "speak",
        text: "À en croire l'étude, les écrans réduiraient la durée du sommeil.",
        prompt: "Say it in French, sceptically: If the study is to be believed, screens reduce sleep time.",
        explanation: "\"À en croire\" + the conditional \"réduiraient\": double distance from the claim.",
      },
    ],
  },
  {
    slug: "c2-citations-3",
    level: "FR-C2",
    number: 5,
    title: "Citer et Référencer, Part 3 of 8",
    summary: "The critical apparatus of French academic writing: footnotes, ibid., id., op. cit., cf., et al., p., s. d., coll., and the French bibliography format with small capitals.",
    duration: "19 min",
    sections: [
      {
        heading: "La note de bas de page",
        body: [
          "The French humanities (history, literature, philosophy, law) still reference mainly through \"la note de bas de page\" (the footnote), numbered by a superscript after the quotation and before the punctuation: « ... »¹. The author-date system (Durkheim, 1897) dominates in the sciences and much of the social sciences, but a mémoire in lettres modernes will usually expect footnotes.",
        ],
        examples: [
          { es: "¹ Émile Durkheim, Le Suicide. Étude de sociologie, Paris, Félix Alcan, 1897, p. 5.", en: "Footnote 1: the full first reference to Durkheim's Suicide." },
          { es: "⁴ Alexis de Tocqueville, De la démocratie en Amérique, Paris, Charles Gosselin, 1835.", en: "Footnote 4: a new author." },
          { es: "L'appel de note se place avant le point : « ... la société »⁶.", en: "The note number goes before the full stop." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Where does the note number go after a quotation that ends your sentence?",
            options: ["« ... la nation »⁷.", "« ... la nation. »⁷", "⁷« ... la nation ».", "« ... la nation »., ⁷"],
            correctIndex: 0,
            explanation: "The note number (\"l'appel de note\") comes right after the closing guillemet and before the final punctuation: »⁷. Putting it after the full stop is the English habit.",
          },
        ],
      },
      {
        heading: "Ibid. and id.",
        body: [
          "The first time a work appears, the note gives the full reference. After that, Latin abbreviations save space, and each has a precise use. \"Ibid.\" (ibidem, in the same place) means the very same work as the note immediately before, possibly another page: \"Ibid., p. 47.\" \"Id.\" (idem, the same) means the same author, another work.",
        ],
        examples: [
          { es: "² Ibid., p. 12.", en: "Footnote 2: the same work as note 1, page 12." },
          { es: "³ Id., Les Règles de la méthode sociologique, Paris, Félix Alcan, 1895.", en: "Footnote 3: the same author, another work." },
          { es: "⁹ Id., L'Ancien Régime et la Révolution, Paris, Michel Lévy, 1856.", en: "Footnote 9: the same author as note 8, Tocqueville, another work." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Note 7 cites Tocqueville's book, page 30. Note 8 cites the same book, page 41. What is note 8?",
            options: ["Ibid., p. 41.", "Id., p. 41.", "Op. cit., p. 41.", "Cf. p. 41."],
            correctIndex: 0,
            explanation: "\"Ibid.\" = the same work as the note immediately before. \"Id.\" would be the same author but another work.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change the note: it cites the same book as the note just before.",
            source: "Tocqueville, De la démocratie en Amérique, p. 52.",
            answer: "Ibid., p. 52.",
            altAnswers: ["Ibid. p. 52"],
            explanation: "When a note cites the very same work as the note immediately before it, \"ibid.\" replaces author and title; only the page changes.",
          },
        ],
      },
      {
        heading: "Op. cit., art. cit., loc. cit.",
        body: [
          "\"Op. cit.\" (opere citato, in the work cited) refers back to a book cited earlier, not just before: \"Durkheim, op. cit., p. 12.\" \"Art. cit.\" does the same for an article, and \"loc. cit.\" (loco citato) points to the same passage already cited.",
        ],
        examples: [
          { es: "⁵ Durkheim, op. cit., p. 47.", en: "Footnote 5: back to the Durkheim book cited earlier, page 47." },
          { es: "¹¹ Leroux, art. cit., p. 21.", en: "Footnote 11: back to the Leroux article cited earlier, page 21." },
          { es: "¹² Tocqueville, loc. cit.", en: "Footnote 12: the very passage of Tocqueville already cited." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change the note: the book was already cited in full three notes earlier.",
            source: "Durkheim, Le Suicide. Étude de sociologie, Paris, Félix Alcan, 1897, p. 63.",
            answer: "Durkheim, op. cit., p. 63.",
            explanation: "A book cited earlier, but not in the note just before, is recalled with the author's name + \"op. cit.\" + the page. \"Ibid.\" only works for the immediately preceding note.",
          },
        ],
      },
      {
        heading: "Italics, two-work notes and short titles",
        body: [
          "Two French conventions: these abbreviations are written in italics in print (they are Latin), and \"ibid.\" can never follow a note that cites two works, because the reader would not know which one you mean. Many publishers now prefer a short title over \"op. cit.\": \"Durkheim, Le Suicide, p. 12\". Follow your department's style sheet (\"la charte de présentation\").",
        ],
        examples: [
          { es: "¹⁴ Durkheim, Le Suicide, p. 12.", en: "Footnote 14: a short title instead of op. cit." },
          { es: "¹⁵ Voir Mauss, Essai sur le don, et Durkheim, Le Suicide.", en: "Footnote 15: two works in one note." },
          { es: "¹⁶ Durkheim, Le Suicide, p. 30.", en: "Footnote 16: not ibid., since note 15 cites two works." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change op. cit. to the short title Essai sur le don.",
            source: "Mauss, op. cit., p. 8.",
            answer: "Mauss, Essai sur le don, p. 8.",
            explanation: "Many publishers prefer author + short title to \"op. cit.\": the reader sees at once which work you mean. It is also what you write after a note that cites two works, where \"ibid.\" would be ambiguous.",
          },
        ],
      },
      {
        heading: "Pointing: cf., voir, supra, infra, passim",
        body: [
          "\"Cf.\" (confer, compare) sends the reader to another source or passage for comparison: \"cf. Tocqueville, op. cit., chap. 2\". \"Voir\" (or \"v.\") is a plain see. \"Supra\" (above) and \"infra\" (below) point inside your own text: \"voir infra, p. 32\". \"Passim\" means here and there throughout the work.",
        ],
        examples: [
          { es: "Cf. Tocqueville, op. cit., t. II, chap. 4.", en: "Compare Tocqueville, work cited, volume II, chapter 4." },
          { es: "Nous reviendrons sur ce point (voir infra, p. 32).", en: "We will come back to this point (see below, p. 32)." },
          { es: "Comme nous l'avons montré supra, la source est postérieure à 1850.", en: "As we showed above, the source dates from after 1850." },
          { es: "L'idée de déclin apparaît passim dans la correspondance.", en: "The idea of decline appears here and there throughout the correspondence." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The theme of exile recurs [here and there throughout] the novel.",
            sentence: "Le thème de l'exil revient ___ dans le roman.",
            answer: "passim",
            explanation: "\"Passim\" (here and there throughout) says the idea is scattered across the work rather than on one page.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (in the body of a thesis).",
            source: "On this point, see below, page 54.",
            answer: "Sur ce point, voir infra, p. 54.",
            altAnswers: ["Sur ce point, voir plus bas, p. 54.", "Sur ce point, voir ci-dessous, p. 54.", "Sur ce point, voir infra, page 54.", "Sur ce point, voir plus loin, p. 54."],
            explanation: "\"Infra\" (below) points to a later passage of your own text; \"supra\" points back. Pages are abbreviated \"p.\".",
          },
        ],
      },
      {
        heading: "Et al., p., n., t.",
        body: [
          "\"Et al.\" (et alii, and others) follows the first author when there are more than three: \"Martin et al., 2024\". Pages are \"p.\" in French for one or several pages: \"p. 12\", \"p. 12-15\" (\"pp.\" also exists but \"p.\" is now standard). \"N.\" is a note (\"p. 47, n. 3\"), \"t.\" a tome, \"vol.\" a volume, \"chap.\" a chapter, \"fig.\" a figure.",
        ],
        examples: [
          { es: "Martin et al. observent une baisse de 12 % des inscriptions.", en: "Martin et al. observe a 12% fall in enrolments." },
          { es: "Voir p. 112-118, n. 4.", en: "See pages 112 to 118, note 4." },
          { es: "Dupont et al., 2022, t. II, chap. 3.", en: "Dupont and others, 2022, volume II, chapter 3." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Garnier et al. show that rents have doubled.",
            answer: "Garnier et al. montrent que les loyers ont doublé.",
            altAnswers: ["Garnier et al. ont montré que les loyers ont doublé.", "Garnier et al. montrent que les loyers ont été multipliés par deux."],
            explanation: "\"Et al.\" stands for several authors, so the verb is plural: \"montrent\". The abbreviation itself never changes.",
          },
        ],
      },
      {
        heading: "Éd., dir., trad., coll., s. d.",
        body: [
          "For the publication itself: \"éd.\" (édition or éditeur), \"dir.\" (sous la direction de, for an edited volume: \"Martin (dir.)\"), \"trad.\" (traduit par), \"coll.\" (collection, the publisher's series, in guillemets: coll. « Points Essais »), \"s. d.\" (sans date, no date) and \"s. l.\" (sans lieu, no place). Note the space in \"s. d.\" and the full stop after each abbreviated word.",
        ],
        examples: [
          { es: "Recueil de chansons populaires du Berry, s. l., s. d.", en: "A collection of folk songs from the Berry, no place, no date." },
          { es: "Platon, La République, trad. Georges Leroux, Paris, Flammarion, 2002.", en: "Plato, The Republic, translated by Georges Leroux." },
          { es: "Sophie Martin (dir.), Les Lecteurs urbains, Lyon, Presses universitaires, 2021.", en: "Sophie Martin (ed.), an edited volume. (Fictional entry.)" },
        ],
        checkpoint: [
          {
            type: "matching",
            instructions: "Match each abbreviation with its meaning.",
            pairs: [
              { left: "cf.", right: "compare, see also" },
              { left: "et al.", right: "and other authors" },
              { left: "s. d.", right: "no date of publication" },
              { left: "dir.", right: "edited by (an edited volume)" },
              { left: "trad.", right: "translated by" },
            ],
            explanation: "Each abbreviation keeps its full stop; \"s. d.\" (sans date) has a space between the two letters.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "This edition has no date and no place of publication.",
            answer: "Cette édition est sans date ni lieu de publication.",
            altAnswers: ["Cette édition ne comporte ni date ni lieu de publication.", "Cette édition n'a ni date ni lieu de publication.", "Cette édition ne porte ni date ni lieu de publication."],
            explanation: "In a reference this becomes \"s. l., s. d.\" (sans lieu, sans date); \"sans... ni...\" joins the two negatives.",
          },
        ],
      },
      {
        heading: "A book entry",
        body: [
          "A French bibliography entry for a book: SURNAME (in small capitals) First name, Title in italics, place of publication, publisher, collection if any, year, number of pages if required. For example: DURKHEIM Émile, Le Suicide. Étude de sociologie, Paris, Félix Alcan, 1897. The commas separate the elements; no full stop in the middle; the first name is often given in full.",
        ],
        examples: [
          { es: "DURKHEIM Émile, Le Suicide. Étude de sociologie, Paris, Félix Alcan, 1897.", en: "A book entry: surname in small capitals, first name, title, place, publisher, year." },
          { es: "TOCQUEVILLE Alexis de, De la démocratie en Amérique, Paris, Charles Gosselin, 1835.", en: "A book with a particle: the particle de follows the first name." },
          { es: "GARNIER Paul, Histoire des cafés parisiens, Paris, Éditions du Marais, 2019.", en: "A book entry with no collection. (Fictional entry.)" },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to build the French bibliography entry for Julie Lambert's book \"Les Jardins ouvriers\" (Lille, 2016).",
            words: ["LAMBERT Julie,", "Les Jardins ouvriers,", "Lille,", "Éditions du Nord,", "2016."],
            translation: "Julie Lambert's book, as a French bibliography entry.",
            explanation: "French humanities order: SURNAME First name, Title, place, publisher, year, all separated by commas, with the year at the end.",
          },
        ],
      },
      {
        heading: "Articles and chapters",
        body: [
          "An article: SURNAME First name, « Title of the article », Title of the journal in italics, vol. or n°, year, p. x-y. A chapter in an edited volume: SURNAME First name, « Chapter », in SURNAME First name (dir.), Title of the volume, place, publisher, year, p. x-y. The French \"in\" (in italics) introduces the volume, like English in.",
        ],
        examples: [
          { es: "LEROUX Claire, « Les bibliothèques de quartier face au numérique », Revue des sciences sociales, n° 42, 2023, p. 15-38.", en: "An article: title in guillemets, journal in italics, issue, year, pages. (Fictional entry.)" },
          { es: "BENALI Karim, « Lire en ville », in MARTIN Sophie (dir.), Les Lecteurs urbains, Lyon, Presses universitaires, 2021, p. 45-60.", en: "A chapter in an edited volume, with in and dir. (Fictional entry.)" },
          { es: "MOREAU Lucie, « Le roman et la ville », Cahiers du roman, n° 19, 2018, p. 77-94.", en: "An article: title in guillemets, journal in italics. (Fictional entry.)" },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "LEROY Anne, « La ville lue », [in] DUPUIS Marc (dir.), Lire Paris, Paris, Belin, 2020, p. 9-30.",
            sentence: "LEROY Anne, « La ville lue », ___ DUPUIS Marc (dir.), Lire Paris, Paris, Belin, 2020, p. 9-30.",
            answer: "in",
            explanation: "A chapter in an edited volume: the chapter title in guillemets, then the Latin \"in\" (in italics in print) before the editor's name and \"(dir.)\".",
          },
        ],
      },
      {
        heading: "French format, APA and MLA",
        body: [
          "Compared with APA: APA puts the year right after the author and uses initials; the French humanities put the year at the end, give the place of publication, and use small capitals rather than full capitals for surnames. Compared with MLA: the French order is similar, but the place of publication remains standard and the punctuation is commas rather than full stops. In your mémoire, consistency matters more than the system.",
        ],
        examples: [
          { es: "La bibliographie est classée par ordre alphabétique des noms d'auteurs.", en: "The bibliography is arranged in alphabetical order of authors' surnames." },
          { es: "En sciences sociales, on cite souvent ainsi : (Durkheim, 1897, p. 5).", en: "In the social sciences, you often cite like this: (Durkheim, 1897, p. 5)." },
          { es: "Le lieu d'édition figure toujours dans la référence.", en: "The place of publication always appears in the reference." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            explanation: "APA puts the year after the author and uses initials; the French humanities give the full first name, the place and the publisher, and end with the year. Surnames go in small capitals.",
            question: "What does the French humanities format do differently from APA?",
            options: ["It puts the year at the end and gives the place of publication.", "It puts the year right after the author's name.", "It gives only the author's initials.", "It writes surnames in full capitals and leaves out the publisher."],
            correctIndex: 0,
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "As we showed above, the letter is a forgery.",
        answer: "Comme nous l'avons montré supra, la lettre est un faux.",
        altAnswers: ["Comme nous l'avons montré plus haut, la lettre est un faux.", "Comme nous l'avons montré ci-dessus, la lettre est un faux.", "Ainsi que nous l'avons montré plus haut, la lettre est un faux."],
        explanation: "\"Supra\" or \"plus haut\" refers back in your own text; \"un faux\" is a forgery.",
      },
      {
        type: "fill-blank",
        explanation: "\"Id.\" (idem) replaces the author's name when the previous note cited another work by the same author. \"Ibid.\" would mean the same work.",
        prompt: "Write the French for the bold words.",
        en: "Note 4, the author of note 3 again, another book: [Same author], De la division du travail social, 1893.",
        sentence: "___, De la division du travail social, 1893.",
        answer: "Id.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The note number is placed after the closing quotation mark.",
        answer: "L'appel de note se place après le guillemet fermant.",
        altAnswers: ["L'appel de note est placé après le guillemet fermant.", "L'appel de note se met après le guillemet fermant.", "L'appel de note se place après les guillemets fermants."],
        explanation: "\"L'appel de note\" sits after the closing guillemet and before your punctuation: « ... »¹.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Durand et al. a montré que les loyers ont doublé.",
        answer: "Durand et al. ont montré que les loyers ont doublé.",
        explanation: "\"Et al.\" means and others: the subject is plural, so the auxiliary is \"ont\", not \"a\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "This edited volume was translated from German.",
        answer: "Cet ouvrage collectif a été traduit de l'allemand.",
        altAnswers: ["Cet ouvrage collectif est traduit de l'allemand.", "Ce volume collectif a été traduit de l'allemand."],
        explanation: "An edited volume is \"un ouvrage collectif\" (marked \"dir.\" in references); translated from is \"traduit de\" + language with the article.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: See also Martin et al., pages 12 to 15.",
        words: ["Voir", "aussi", "Martin", "et al.,", "p. 12-15."],
        translation: "See also Martin et al., pages 12 to 15.",
        explanation: "French uses \"p.\" for one page or several (\"p. 12-15\"), and \"voir\" for a plain see.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "The first edition appeared [with no date] and no place of publication.",
        sentence: "La première édition a paru ___ ni lieu.",
        answer: "sans date",
        explanation: "\"S. d.\" (sans date) and \"s. l.\" (sans lieu) record that the book gives no date or place; \"sans... ni...\" joins the two.",
      },
      {
        type: "listen-choose",
        audio: "Ibid., page douze.",
        question: "What does it mean in a footnote?",
        options: ["Same work as the previous note, page 12.", "Same author, another work, page 12.", "Compare page 12.", "See page 12 below."],
        correctIndex: 0,
        explanation: "\"Ibid.\" always refers to the work in the note just before.",
      },
      {
        type: "dictation",
        audio: "Cf. Durkheim, op. cit., chapitre deux.",
        answer: "Cf. Durkheim, op. cit., chapitre 2.",
        altAnswers: ["Cf. Durkheim, op. cit., chap. 2."],
        explanation: "\"Cf.\" (compare) sends the reader to another source; \"op. cit.\" recalls a book cited earlier.",
      },
      {
        type: "speak",
        text: "Comme nous le verrons plus loin, l'auteur a changé d'avis.",
        prompt: "Say it in French: As we will see further on, the author changed his mind.",
        tip: "Say 1850 as \"mille huit cent cinquante\".",
        explanation: "In the body of a text, \"plus loin\" or \"infra\" points ahead; \"plus haut\" or \"supra\" points back.",
      },
      {
        type: "speak",
        text: "Durkheim, op. cit., page quarante-sept.",
        tip: "Read the Latin as French: \"op. cit.\" is said \"op-sit\", and \"p.\" is read \"page\".",
        explanation: "Reading a note aloud, you expand \"p.\" to \"page\" and say \"op. cit.\" as the two syllables op-sit.",
      },
      {
        type: "multiple-choice",
        question: "Which entry follows the French humanities format?",
        options: ["DURKHEIM Émile, Le Suicide, Paris, Félix Alcan, 1897.", "Durkheim, E. (1897). Le Suicide. Félix Alcan.", "Le Suicide, by Émile Durkheim (Alcan 1897).", "Émile DURKHEIM. 1897. Le Suicide. Paris: Alcan."],
        correctIndex: 0,
        explanation: "Surname in capitals (small capitals in print), first name, title, place, publisher, year at the end, separated by commas. The second option is APA.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Each note begins with a capital letter and ends with a full stop.",
        answer: "Chaque note commence par une majuscule et se termine par un point.",
        altAnswers: ["Chaque note commence par une majuscule et finit par un point.", "Toute note commence par une majuscule et se termine par un point."],
        explanation: "A footnote is a sentence of its own: \"commencer par une majuscule\", \"se terminer par un point\", even when it only says \"Ibid., p. 12.\"",
      },
    ],
  },
  {
    slug: "c2-critical-apparatus-word-web",
    level: "FR-C2",
    number: 6,
    title: "Word Web: L'Appareil Critique",
    summary: "Sort the abbreviations, signs and words of the critical apparatus by what they do, from ibid. and cf. to [N.d.T.] and the exergue, and read a dense footnote aloud.",
    duration: "17 min",
    sections: [
      {
        heading: "Repeating a reference, by distance",
        body: [
          "Group one does a single job: avoid rewriting a reference. Order them by distance. \"Ibid.\" is the closest (the work of the note just before), \"loc. cit.\" goes back to the very passage already cited, \"op. cit.\" and \"art. cit.\" go back to a book or an article cited somewhere earlier, always after the author's name, and \"id.\" replaces the author's name for another of his or her works.",
        ],
        examples: [
          { es: "⁸ Ibid., p. 112.", en: "Note 8: same work as note 7, page 112." },
          { es: "⁹ Leroux, art. cit., p. 20.", en: "Note 9: the Leroux article cited earlier, page 20." },
          { es: "¹¹ Tocqueville, op. cit., t. II, p. 54.", en: "Note 11: Tocqueville's book cited earlier, volume II, page 54." },
          { es: "¹² Loc. cit.", en: "Note 12: the same passage as already cited." },
        ],
        checkpoint: [
          {
            type: "matching",
            instructions: "Match each abbreviation with its job.",
            pairs: [
              { left: "ibid.", right: "same work as the previous note" },
              { left: "id.", right: "same author, different work" },
              { left: "op. cit.", right: "a book cited earlier" },
              { left: "art. cit.", right: "an article cited earlier" },
            ],
            explanation: "All four save rewriting a reference; they differ by what they repeat (work, author, book, article) and how far back they point.",
          },
        ],
      },
      {
        heading: "How to remember them",
        body: [
          "A good way to remember: \"op.\" is \"opus\", a work; \"art.\" is \"article\"; \"loc.\" is \"locus\", a place; \"ibi\" is there. French academics read them aloud as French words: \"ibid\", \"idem\", \"op-cit\", \"art-cit\".",
        ],
        examples: [
          { es: "¹⁰ Id., Lire et écrire en ville, Lyon, Presses universitaires, 2019.", en: "Note 10: another book by the same author." },
          { es: "« Ibid. » vient du latin ibidem, « au même endroit ».", en: "'Ibid.' comes from the Latin ibidem, in the same place." },
          { es: "« Loc. cit. » renvoie au passage exact déjà cité.", en: "'Loc. cit.' points back to the exact passage already cited." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The same work is cited in the previous note.",
            answer: "Le même ouvrage est cité dans la note précédente.",
            altAnswers: ["Le même ouvrage est cité à la note précédente.", "Le même livre est cité dans la note précédente."],
            explanation: "That's what \"ibid.\" says. In academic French a book is usually \"un ouvrage\".",
          },
        ],
      },
      {
        heading: "Pointing, intervening, describing",
        body: [
          "Group two points the reader somewhere: \"cf.\" (compare), \"voir\" (see), \"supra\" and \"infra\" (above, below in your text), \"passim\" (throughout). Group three marks your interventions in someone else's text: \"[...]\" (a cut), \"[sic]\" (an error in the original), \"[nous soulignons]\" (emphasis added), and words in square brackets that you inserted.",
          "Group four describes the publication: \"et al.\", \"dir.\", \"trad.\", \"éd.\", \"coll.\", \"s. l.\", \"s. d.\", \"t.\", \"vol.\", \"n°\", \"p.\".",
        ],
        examples: [
          { es: "Cf. le chapitre 3, où la question est traitée plus en détail.", en: "Compare chapter 3, where the question is dealt with in more detail." },
          { es: "« Le pays tout entier [la France] retenait son souffle. »", en: "'The whole country [France] held its breath.' (an insertion in brackets)" },
          { es: "Les thèmes de l'exil et de la mer reviennent passim.", en: "The themes of exile and the sea recur throughout." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You insert a word of your own into a quotation to make it clear. What goes around it?",
            options: ["square brackets: [ ]", "round brackets: ( )", "guillemets: « »", "nothing, just italics"],
            correctIndex: 0,
            explanation: "Anything you add inside someone else's text goes in square brackets, like \"[...]\" and \"[sic]\". Round brackets could belong to the original.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change the pointer: the passage is earlier in your own text.",
            source: "Voir infra, p. 45.",
            answer: "Voir supra, p. 45.",
            altAnswers: ["Voir plus haut, p. 45.", "Voir ci-dessus, p. 45."],
            explanation: "\"Supra\" (above) points back to an earlier page of your own text; \"infra\" (below) points ahead.",
          },
        ],
      },
      {
        heading: "Who wrote the note",
        body: [
          "Three notes are signed by who wrote them: \"N.d.T.\" (note du traducteur, translator's note), \"N.d.É.\" (note de l'éditeur) and \"N.d.A.\" (note de l'auteur). In the press you'll also see \"N.D.L.R.\" (note de la rédaction, an editor's note in a newspaper): \"(N.D.L.R. : le ministre a depuis démissionné.)\". Note that \"éditeur\" in French is the publisher; the person who prepares a critical edition is also called \"l'éditeur scientifique\".",
        ],
        examples: [
          { es: "(N.d.T. : jeu de mots intraduisible en français.)", en: "(Translator's note: an untranslatable pun in French.)" },
          { es: "(N.D.L.R. : le ministre a depuis démissionné.)", en: "(Editor's note: the minister has since resigned.)" },
          { es: "L'éditeur a refusé le manuscrit.", en: "The publisher turned down the manuscript." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In a French newspaper, the editors add a clarification inside an interview. How is it signed?",
            options: ["N.D.L.R.", "N.d.T.", "[sic]", "Ibid."],
            correctIndex: 0,
            explanation: "\"N.D.L.R.\" = note de la rédaction, the newsroom's note. \"N.d.T.\" is a translator's note.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "([Translator's note]: an untranslatable pun.)",
            sentence: "(___ : jeu de mots intraduisible.)",
            answer: "N.d.T.",
            altAnswers: ["NdT", "N.D.T.", "Note du traducteur"],
            explanation: "\"N.d.T.\" = note du traducteur; its sisters are \"N.d.A.\" (author) and \"N.d.É.\" (publisher).",
          },
        ],
      },
      {
        heading: "Around the notes",
        body: [
          "Around the notes: \"la note de fin\" (endnote), \"l'annexe\" (appendix, feminine: une annexe), \"l'index\" (index of names or notions), \"la table des matières\" (table of contents, at the end of the book in many French editions), \"la citation en exergue\" or \"l'épigraphe\" (the quotation at the head of a book or chapter), \"la sitographie\" (list of websites), \"les sources primaires\" (archives, original texts) and \"les sources secondaires\" (studies about them).",
        ],
        examples: [
          { es: "La table des matières se trouve à la fin du volume.", en: "The table of contents is at the end of the volume." },
          { es: "Le corpus complet figure en annexe.", en: "The full corpus is given in the appendix." },
          { es: "Le roman porte en exergue une phrase de Pascal.", en: "The novel bears an epigraph from Pascal." },
          { es: "Nos sources primaires sont les registres paroissiaux de 1780 à 1820.", en: "Our primary sources are the parish registers from 1780 to 1820." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The index of names is at the end of the second volume.",
            answer: "L'index des noms se trouve à la fin du deuxième volume.",
            altAnswers: ["L'index des noms est à la fin du deuxième volume.", "L'index des noms se trouve à la fin du second volume.", "L'index des noms est à la fin du second volume.", "L'index des noms se trouve à la fin du tome deux."],
            explanation: "\"L'index\" is masculine; \"se trouver\" is the usual verb for where a part of a book is. Like the table of contents, it often comes at the end in French editions.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "We consulted the [primary sources] in the departmental archives.",
            sentence: "Nous avons consulté les ___ aux archives départementales.",
            answer: "sources primaires",
            explanation: "Archives and original documents are \"les sources primaires\"; studies written about them are \"les sources secondaires\".",
          },
        ],
      },
      {
        heading: "Reading a reference aloud",
        body: [
          "When you present your work orally (a soutenance, a conference), you sometimes read a reference aloud. Expand the abbreviations as words: \"page\", \"tome deux\", \"chapitre trois\", \"sous la direction de\", \"traduit par\"; read \"op. cit.\" and \"ibid.\" as they are. And signal the boundaries of a quotation: \"je cite\" before, \"fin de citation\" after.",
        ],
        examples: [
          { es: "Je cite : « Le moi est haïssable. » Fin de citation.", en: "I quote: 'The self is hateful.' End of quote." },
          { es: "Martin, sous la direction de Benali, tome deux, page quarante.", en: "Martin, edited by Benali, volume two, page forty (read aloud)." },
          { es: "Durkheim, op. cit., chapitre trois, page dix-huit.", en: "Durkheim, op. cit., chapter three, page eighteen (read aloud)." },
        ],
        checkpoint: [
          {
            type: "speak",
            text: "Tocqueville, op. cit., tome un, page cinquante-quatre.",
            prompt: "Read this note aloud in French: Tocqueville, op. cit., t. I, p. 54.",
            tip: "Expand t. and p. to \"tome\" and \"page\"; read \"op. cit.\" as op-sit.",
            explanation: "Reading references aloud, abbreviations of words are expanded, Latin abbreviations are read as written.",
          },
          {
            type: "speak",
            text: "Je cite : « Il faut cultiver notre jardin. » Fin de citation.",
            tip: "\"Haïssable\": the tréma means a and ï are two syllables, a-ï-ssable; the h is aspirated, so no liaison.",
            explanation: "Aloud, guillemets become words: \"je cite\" before the quotation and \"fin de citation\" after it.",
            prompt: "Say it in French, marking the quotation aloud: I quote: 'We must cultivate our garden.' End of quote.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        answer: "une épigraphe",
        altAnswers: ["une citation en exergue"],
        explanation: "The quotation at the head of a book or chapter is \"une épigraphe\" (feminine) or \"une citation en exergue\".",
        en: "Each chapter opens with [an epigraph] from Montaigne.",
        sentence: "Chaque chapitre s'ouvre sur ___ de Montaigne.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Our primary sources are the town council's minutes.",
        answer: "Nos sources primaires sont les procès-verbaux du conseil municipal.",
        altAnswers: ["Nos sources primaires sont les comptes rendus du conseil municipal.", "Nos sources primaires sont les délibérations du conseil municipal."],
        explanation: "\"Sources primaires\" vs \"sources secondaires\"; minutes are \"les procès-verbaux\" or \"les comptes rendus\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Les sources secondaires sont les archives originales que nous avons dépouillées.",
        answer: "Les sources primaires sont les archives originales que nous avons dépouillées.",
        explanation: "Original archives are primary sources (\"sources primaires\"); secondary sources are the studies written about them.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The words in square brackets were added by the translator.",
        answer: "Les mots entre crochets ont été ajoutés par le traducteur.",
        altAnswers: ["Les mots entre crochets ont été ajoutés par la traductrice.", "Les mots entre crochets sont des ajouts du traducteur.", "Les mots entre crochets sont des ajouts de la traductrice."],
        explanation: "Square brackets are \"les crochets\" (round ones are \"les parenthèses\"); \"ajoutés\" agrees with \"les mots\".",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: (Editor's note: the minister has since resigned.)",
        words: ["(N.D.L.R. :", "le ministre", "a", "depuis", "démissionné.)"],
        translation: "(Editor's note: the minister has since resigned.)",
        explanation: "\"Depuis\" alone means since then and sits between the auxiliary and the participle.",
      },
      {
        type: "multiple-choice",
        question: "Which word is a false friend in academic French?",
        options: ["éditeur (= publisher)", "annexe (= appendix)", "index (= index)", "corpus (= corpus)"],
        correctIndex: 0,
        explanation: "\"Éditeur\" is the publisher; an editor who corrects texts is \"un correcteur\" or \"un rédacteur\".",
      },
      {
        type: "listen-choose",
        audio: "Les documents d'archives figurent en annexe.",
        question: "What does it mean?",
        options: ["The archive documents are given in the appendix.", "The archive documents are listed in the index.", "The archive documents appear in the annual report.", "The archive documents were added to the table of contents."],
        correctIndex: 0,
        explanation: "\"Figurer en annexe\" means to be given in the appendix; \"une annexe\" is feminine and is not the index.",
      },
      {
        type: "dictation",
        audio: "Voir l'index des notions, à la fin du volume.",
        explanation: "\"L'index des notions\" lists the concepts discussed; \"voir\" is the plain see.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The publisher is preparing a critical edition of the letters.",
        answer: "L'éditeur prépare une édition critique des lettres.",
        altAnswers: ["La maison d'édition prépare une édition critique des lettres.", "L'éditeur prépare une édition critique de la correspondance."],
        explanation: "\"L'éditeur\" is the publisher, a false friend for the English editor; \"une édition critique\" is a scholarly edition with notes.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Change it to the way you would read it aloud.",
        source: "Martin, op. cit., t. II, p. 40.",
        answer: "Martin, op. cit., tome deux, page quarante.",
        altAnswers: ["Martin, op cit, tome 2, page 40"],
        explanation: "Aloud, the abbreviations are expanded (\"tome\", \"page\") and numbers are said in full, while \"op. cit.\" is read as it is.",
      },
    ],
  },
  {
    slug: "c2-citations-4",
    level: "FR-C2",
    number: 7,
    title: "Citer et Référencer, Part 4 of 8",
    summary: "Paraphrase without plagiarising: the vocabulary of plagiat, emprunt and reprise, and the four techniques of honest reformulation (synonymy, change of structure, nominalisation, reordering), always with the source named.",
    duration: "21 min",
    sections: [
      {
        heading: "Le plagiat: a fraud",
        body: [
          "\"Le plagiat\" is presenting someone else's words or ideas as your own. French universities treat it as \"une fraude\" judged by \"la section disciplinaire\", with sanctions up to exclusion, and most now run every mémoire through \"un logiciel anti-plagiat\" that highlights matching passages. \"Plagier\" is the verb, \"un plagiaire\" the culprit.",
        ],
        examples: [
          { es: "Le logiciel anti-plagiat a signalé plusieurs passages identiques à un article en ligne.", en: "The anti-plagiarism software flagged several passages identical to an online article." },
          { es: "L'étudiant a été convoqué devant la section disciplinaire pour plagiat.", en: "The student was summoned before the disciplinary board for plagiarism." },
          { es: "Un plagiaire risque l'exclusion de toutes les universités.", en: "A plagiarist risks exclusion from every university." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            answer: "logiciel anti-plagiat",
            explanation: "\"Un logiciel anti-plagiat\" compares a text with millions of sources and highlights matching passages. \"Au\" = \"à le\", so the article is already in the sentence.",
            en: "The professor ran the dissertation through [the anti-plagiarism software].",
            sentence: "Le professeur a passé le mémoire au ___.",
          },
        ],
      },
      {
        heading: "The forms it takes",
        body: [
          "The forms they list: \"le copier-coller\" (pasting without quotation marks), \"la paraphrase servile\" (changing a few words while keeping the original's structure, sometimes called \"le plagiat par paraphrase\"), \"l'emprunt non signalé\" (borrowing an idea without naming its author), \"la traduction non référencée\" (translating an English article without citing it: a classic trap for bilingual students), and \"l'autoplagiat\" (reusing your own earlier work without saying so).",
        ],
        examples: [
          { es: "Traduire un article anglais sans le citer, c'est du plagiat.", en: "Translating an English article without citing it is plagiarism." },
          { es: "Une paraphrase servile reste un plagiat, même si aucune phrase n'est identique.", en: "A slavish paraphrase is still plagiarism, even if no sentence is identical." },
          { es: "Coller un paragraphe d'un site sans guillemets, c'est du copier-coller.", en: "Pasting a paragraph from a website without quotation marks is copy-and-paste plagiarism." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Reusing your own work without saying so is [self-plagiarism].",
            sentence: "Réutiliser ses propres travaux sans le dire, c'est de l'___.",
            answer: "autoplagiat",
            explanation: "\"L'autoplagiat\" (one word, masculine) is listed as fraud by most French universities.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "She translated a German thesis without citing it.",
            answer: "Elle a traduit une thèse allemande sans la citer.",
            altAnswers: ["Elle a traduit une thèse allemande sans la mentionner.", "Elle a traduit une thèse en allemand sans la citer."],
            explanation: "This is \"la traduction non référencée\", a classic form of plagiarism. \"Sans\" + infinitive, with the pronoun \"la\" (la thèse) before the infinitive.",
          },
        ],
      },
      {
        heading: "The legitimate counterparts",
        body: [
          "The legitimate counterparts: \"la citation\" (exact words in guillemets, with the reference), \"la reformulation\" or \"la paraphrase\" (the idea in your own words, with the reference), \"l'emprunt\" acknowledged (\"nous empruntons à X la notion de...\"), and \"la reprise\" (taking up and developing someone's idea, named). The rule fits in one line: you may change the words, never the ownership.",
        ],
        examples: [
          { es: "Nous empruntons à Bourdieu la notion de capital culturel.", en: "We borrow from Bourdieu the notion of cultural capital." },
          { es: "Cette thèse reprend et prolonge les travaux de son directeur, qu'elle cite abondamment.", en: "This thesis takes up and extends her supervisor's work, which she cites extensively." },
          { es: "Nous reprenons ici l'analyse de Leroux, en la prolongeant.", en: "Here we take up Leroux's analysis and extend it." },
        ],
        checkpoint: [
          {
            type: "matching",
            instructions: "Match each term with its meaning.",
            pairs: [
              { left: "le copier-coller", right: "pasting text without quotation marks" },
              { left: "l'emprunt non signalé", right: "using an idea without naming its author" },
              { left: "la reformulation", right: "the idea in your own words, source named" },
              { left: "la reprise", right: "taking up and developing an acknowledged idea" },
            ],
            explanation: "The first two are forms of plagiarism; the last two are legitimate.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "We borrow from Weber the notion of disenchantment.",
            answer: "Nous empruntons à Weber la notion de désenchantement.",
            altAnswers: ["Nous empruntons la notion de désenchantement à Weber.", "J'emprunte à Weber la notion de désenchantement."],
            explanation: "An acknowledged borrowing: \"emprunter quelque chose à quelqu'un\", with \"à\" for the source. Naming Weber is what makes it legitimate.",
          },
        ],
      },
      {
        heading: "Same skeleton, new words: still copying",
        body: [
          "A real paraphrase changes both the words and the architecture. Take an original (fictional) sentence: « Les bibliothèques de quartier, longtemps considérées comme des lieux de silence, sont devenues des espaces de sociabilité. » Changing only the words (\"Les médiathèques de proximité, considérées depuis longtemps comme des endroits silencieux, se sont transformées en lieux de rencontre\") keeps the skeleton: that is the paraphrase servile a professor will spot, even when the logiciel anti-plagiat does not.",
        ],
        examples: [
          { es: "Original : « Les bibliothèques de quartier, longtemps considérées comme des lieux de silence, sont devenues des espaces de sociabilité. »", en: "Original: 'Neighbourhood libraries, long regarded as places of silence, have become spaces of sociability.' (fictional)" },
          { es: "Paraphrase servile : « Les médiathèques de proximité, considérées depuis longtemps comme des endroits silencieux, se sont transformées en lieux de rencontre. »", en: "Slavish paraphrase: same skeleton, different words." },
          { es: "Garder la même syntaxe en changeant les mots, c'est encore copier.", en: "Keeping the same syntax while changing the words is still copying." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Original: \"Les réseaux sociaux ont profondément modifié la manière dont les jeunes s'informent.\" Which rewrite is a legitimate paraphrase?",
            options: ["Selon Martin, les jeunes ne s'informent plus du tout comme avant depuis l'essor des réseaux sociaux.", "Les réseaux sociaux ont fortement changé la façon dont les jeunes s'informent.", "Les réseaux sociaux ont profondément modifié la manière dont les adolescents s'informent.", "Les médias sociaux ont nettement transformé la façon dont les jeunes s'informent (Martin)."],
            correctIndex: 0,
            explanation: "Only the first changes structure (the young become the subject, the networks a complement) and names the source. The others swap words in the same skeleton; adding a name to a servile paraphrase doesn't fix it.",
          },
        ],
      },
      {
        heading: "Change the structure",
        body: [
          "Change the structure as well. Turn the subject into a complement, an adjective into a clause, active into passive or the reverse, a main clause into a subordinate: \"Ce que l'on venait autrefois chercher dans les bibliothèques de quartier, c'était le silence ; on y cherche aujourd'hui la compagnie des autres (Leroux, 2023).\" Same idea, new syntax, new rhythm, source named.",
        ],
        examples: [
          { es: "Paraphrase acceptable : selon Leroux, ce qu'on cherchait autrefois en bibliothèque, c'était le silence ; on y cherche aujourd'hui la compagnie des autres.", en: "Acceptable paraphrase: according to Leroux, what people once sought in libraries was silence; today they seek the company of others there." },
          { es: "Les élus ont adopté la réforme. → La réforme a été adoptée par les élus.", en: "The councillors adopted the reform. → The reform was adopted by the councillors." },
          { es: "Le chômage, qui frappe surtout les jeunes, s'est aggravé. → Les jeunes sont les premiers touchés par un chômage en hausse.", en: "Unemployment, which mainly hits the young, has worsened. → The young are the first affected by rising unemployment." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it passive.",
            source: "Le conseil municipal a voté le budget.",
            answer: "Le budget a été voté par le conseil municipal.",
            explanation: "Active to passive is one way to change a sentence's architecture: the object becomes the subject, \"avoir voté\" becomes \"a été voté\", and the agent comes after \"par\".",
          },
        ],
      },
      {
        heading: "Synonyms must be exact",
        body: [
          "Synonyms in French academic prose need care: they must be exact in register and meaning. \"Lieu\", \"espace\", \"endroit\" are not interchangeable (\"endroit\" is too everyday), and a thesaurus swap can distort the claim (\"sociabilité\" is not \"convivialité\", which adds warmth). Paraphrase the idea, not the dictionary.",
        ],
        examples: [
          { es: "Ce lieu de mémoire attire des milliers de visiteurs.", en: "This place of remembrance draws thousands of visitors." },
          { es: "La ville a aménagé un espace de travail partagé.", en: "The town has set up a shared workspace." },
          { es: "On a trouvé un endroit sympa pour déjeuner.", en: "We found a nice spot for lunch." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In an academic paraphrase of « un lieu de culture », which word can replace « lieu »?",
            options: ["espace", "endroit", "coin", "truc"],
            correctIndex: 0,
            explanation: "\"Un espace de culture\" keeps the register and the meaning. \"Endroit\" is too everyday for academic prose, and \"coin\" and \"truc\" are informal.",
          },
        ],
      },
      {
        heading: "Nominalisation",
        body: [
          "Nominalisation, which you practised at the Advanced level, is the most efficient paraphrase tool in French: a verb clause becomes a noun phrase and the whole sentence reorganises around it. « Les prix ont augmenté brutalement, si bien que la consommation a chuté » → \"La brutale augmentation des prix a entraîné une chute de la consommation\". The reverse (de-nominalising) works just as well when the source is heavy.",
        ],
        examples: [
          { es: "« Les prix ont augmenté brutalement, si bien que la consommation a chuté. » → La brutale augmentation des prix a entraîné une chute de la consommation.", en: "'Prices rose sharply, so consumption fell.' → The sharp rise in prices led to a fall in consumption." },
          { es: "« On a fermé l'usine en 2019 ; depuis, le village se vide. » → Depuis la fermeture de l'usine en 2019, le village se dépeuple.", en: "'The factory was closed in 2019; since then the village has been emptying.' → Since the factory's closure in 2019, the village has been losing its population." },
          { es: "« Les loyers ont flambé. » → La flambée des loyers...", en: "'Rents soared.' → The surge in rents..." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the first clause into a noun phrase.",
            source: "Les salaires ont stagné, si bien que l'épargne a reculé.",
            answer: "La stagnation des salaires a entraîné un recul de l'épargne.",
            altAnswers: ["La stagnation des salaires a provoqué un recul de l'épargne.", "La stagnation des salaires a entraîné une baisse de l'épargne.", "La stagnation des salaires a provoqué une baisse de l'épargne.", "La stagnation des salaires a fait reculer l'épargne."],
            explanation: "\"Ont stagné\" becomes the noun \"la stagnation\", and \"si bien que\" becomes a verb of cause such as \"entraîner\": the sentence reorganises around the noun.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Since the opening of] the motorway, the town has been growing.",
            sentence: "___ l'autoroute, la ville s'agrandit.",
            answer: "Depuis l'ouverture de",
            explanation: "The clause « on a ouvert l'autoroute » becomes the noun phrase \"l'ouverture de l'autoroute\" after \"depuis\".",
          },
        ],
      },
      {
        heading: "Reordering the ideas",
        body: [
          "Reordering means changing the order of ideas, not only of words: start with the consequence, then give the cause; begin with the example, then the general claim. It is often what makes a paraphrase genuinely yours, because the logic is presented as your argument needs it.",
        ],
        examples: [
          { es: "La chute de la consommation, que l'auteur attribue à la hausse des prix, a touché d'abord les ménages modestes.", en: "The fall in consumption, which the author attributes to rising prices, first hit low-income households." },
          { es: "Les ménages modestes ont été les premiers touchés : les prix avaient flambé.", en: "Low-income households were hit first: prices had soared." },
          { es: "Prenons l'exemple de Lyon : la ville a perdu dix librairies en cinq ans.", en: "Take Lyon: the city lost ten bookshops in five years." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Original: « Les prix ont augmenté, donc les ventes ont baissé. » Which rewrite reorders the ideas?",
            options: ["Si les ventes ont baissé, c'est que les prix avaient augmenté.", "Les prix ont augmenté, donc les ventes ont diminué.", "Les tarifs ont augmenté, donc les ventes ont baissé.", "Les prix ont monté, alors les ventes ont baissé."],
            correctIndex: 0,
            explanation: "Starting with the consequence and then giving the cause changes the logic of the presentation. The other three only swap a word and keep the original order: a slavish paraphrase.",
          },
        ],
      },
      {
        heading: "The source never disappears",
        body: [
          "And the attribution never disappears: \"selon X\", \"comme le montre X\", \"X souligne que\", or a footnote after the paraphrase. A paraphrase with no source is a plagiarism, however well rewritten. If a distinctive phrase of the author survives (a coined term, a striking image), put that phrase in guillemets inside your paraphrase.",
        ],
        examples: [
          { es: "Comme le montre Leroux, la baisse des inscriptions s'explique d'abord par la fermeture du dimanche.", en: "As Leroux shows, the fall in enrolments is explained first of all by Sunday closing." },
          { es: "Leroux voit dans la bibliothèque un « salon public » où se croisent les générations.", en: "Leroux sees the library as a 'public living room' where the generations meet." },
          { es: "Selon Martin, la lecture numérique favorise le survol plutôt que l'attention.", en: "According to Martin, reading on screen encourages skimming rather than attention." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In your paraphrase, the author's coined phrase 'salon public' survives. What do you do?",
            options: ["Keep it in guillemets inside the paraphrase.", "Replace it with a synonym so it isn't detected.", "Remove the author's name since the rest is yours.", "Translate it into English."],
            correctIndex: 0,
            explanation: "A distinctive phrase stays the author's: put it in « » even inside your own reformulation.",
          },
          {
            type: "listen-choose",
            audio: "Une paraphrase sans source reste un plagiat, même bien réécrite.",
            question: "What does it mean?",
            options: ["A paraphrase without a source is still plagiarism, even if well rewritten.", "A paraphrase with a source is never plagiarism.", "A well-written paraphrase doesn't need a source.", "Plagiarism means rewriting your own sources."],
            correctIndex: 0,
            explanation: "\"Reste\" = remains, is still; \"même bien réécrite\" = even well rewritten.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The software only detects identical passages.",
        answer: "Le logiciel ne détecte que les passages identiques.",
        altAnswers: ["Le logiciel détecte seulement les passages identiques.", "Le logiciel ne repère que les passages identiques."],
        explanation: "\"Ne... que\" = only. That is why a slavish paraphrase can escape the software but not the professor.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Nous empruntons de Bourdieu la notion d'habitus.",
        answer: "Nous empruntons à Bourdieu la notion d'habitus.",
        altAnswers: ["Nous empruntons la notion d'habitus à Bourdieu."],
        explanation: "You borrow something \"à\" someone in French: \"emprunter à Bourdieu\". \"Emprunter de\" is an English calque of to borrow from.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "She was excluded from the university for plagiarism.",
        answer: "Elle a été exclue de l'université pour plagiat.",
        altAnswers: ["Elle a été exclue de l'université pour cause de plagiat.", "Elle a été renvoyée de l'université pour plagiat."],
        explanation: "\"Pour plagiat\" with no article, as in \"pour fraude\". The participle agrees: \"exclue\".",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: You may change the words, never the ownership.",
        words: ["On peut", "changer", "les mots,", "jamais", "la paternité."],
        translation: "You may change the words, never the ownership.",
        explanation: "\"La paternité\" of a text or idea is its authorship; impersonal \"on\" states a general rule.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "We take up Leroux's idea and apply it to rural libraries.",
        answer: "Nous reprenons l'idée de Leroux et l'appliquons aux bibliothèques rurales.",
        altAnswers: ["Nous reprenons l'idée de Leroux pour l'appliquer aux bibliothèques rurales.", "Nous reprenons l'idée de Leroux et nous l'appliquons aux bibliothèques rurales."],
        explanation: "\"Reprendre\" an idea, named, and develop it: \"la reprise\" is legitimate because the source stays visible.",
      },
      {
        type: "translate",
        explanation: "Exact words go \"entre guillemets\" with their reference; only the idea, reformulated and attributed, can go without them.",
        direction: "en-es",
        answer: "Une citation doit toujours être mise entre guillemets.",
        altAnswers: ["Une citation doit toujours être placée entre guillemets.", "Une citation doit toujours figurer entre guillemets."],
        prompt: "Translate into French.",
        source: "A quotation must always be put in quotation marks.",
      },
      {
        type: "speak",
        text: "Selon Leroux, la bibliothèque est devenue un lieu de rencontre.",
        prompt: "Say it in French: According to Leroux, the library has become a meeting place.",
        explanation: "A paraphrase always keeps its attribution: \"selon Leroux\".",
      },
    ],
  },
  {
    slug: "c2-paraphrase-or-plagiarism-error-hunt",
    level: "FR-C2",
    number: 8,
    title: "Error Hunt: Paraphrase ou Plagiat",
    summary: "Compare an original passage with six student rewrites, decide which are honest paraphrases and which are disguised plagiarism or distortions, and fix the faulty ones.",
    duration: "19 min",
    sections: [
      {
        heading: "The original",
        body: [
          "Here is the source, a passage from a (fictional) sociology article by Hélène Garnier, 2022: « Le télétravail, longtemps réservé à une minorité de cadres, s'est imposé en quelques semaines comme une norme pour des millions de salariés. Mais cette généralisation brutale a révélé de profondes inégalités : entre ceux qui disposaient d'un bureau calme et ceux qui travaillaient sur un coin de table de cuisine, l'expérience n'avait rien de commun. »",
        ],
        examples: [
          { es: "Le télétravail, longtemps réservé à une minorité de cadres, s'est imposé comme une norme.", en: "Remote work, long reserved for a minority of managers, became the norm. (original)" },
          { es: "Cette généralisation a mis en lumière des écarts considérables entre salariés.", en: "This spread brought to light considerable gaps between employees." },
          { es: "Garnier distingue deux expériences très différentes du télétravail.", en: "Garnier distinguishes two very different experiences of remote work." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "According to Garnier's original, what did the sudden spread of remote work do?",
            options: ["It revealed deep inequalities that were already there.", "It created new inequalities between employees.", "It put an end to inequalities between managers.", "It stayed limited to a minority of managers."],
            correctIndex: 0,
            explanation: "Garnier's verb is \"a révélé\": the inequalities existed and the crisis showed them. Keep that exact claim in mind; it decides whether the rewrites are faithful.",
          },
        ],
      },
      {
        heading: "Rewrite 1: the copy in disguise",
        body: [
          "Rewrite 1, from a student's dossier: \"Le travail à distance, pendant longtemps limité à quelques cadres, est devenu en quelques semaines une norme pour des millions d'employés. Mais cette extension soudaine a mis au jour de grandes inégalités.\" Verdict: paraphrase servile, and no source. Every clause follows the original in order, each word is swapped for a near-synonym. The logiciel anti-plagiat may miss it; your reader won't.",
        ],
        examples: [
          { es: "Le travail à distance, pendant longtemps limité à quelques cadres, est devenu une norme.", en: "Same skeleton, synonyms swapped: a servile paraphrase." },
          { es: "Changer « salariés » en « employés » ne change pas la phrase.", en: "Changing \"salariés\" into \"employés\" does not change the sentence." },
          { es: "Chaque proposition suit l'original dans le même ordre.", en: "Each clause follows the original in the same order." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Why is rewrite 1 plagiarism even though no sentence is identical?",
            options: ["It keeps the original's structure and order, swaps words, and names no source.", "It uses the word cadres.", "It is shorter than the original.", "It is written in the present tense."],
            correctIndex: 0,
            explanation: "A paraphrase servile with no source: same skeleton, new words, stolen ownership.",
          },
        ],
      },
      {
        heading: "The fix: new structure, named source",
        body: [
          "The fix is not more synonyms. Rebuild the sentence around another subject and logic, and name the source: \"Pour Hélène Garnier (2022), la crise sanitaire a fait du télétravail, jusque-là privilège de quelques cadres, l'ordinaire de millions de salariés, tout en mettant en lumière des écarts considérables entre eux.\"",
        ],
        examples: [
          { es: "Pour Hélène Garnier, la crise a fait du télétravail l'ordinaire de millions de salariés.", en: "For Garnier, the crisis made remote work the everyday reality of millions of employees." },
          { es: "Jusque-là privilège de quelques cadres, le télétravail s'est banalisé en quelques semaines, observe Garnier.", en: "Until then a privilege of a few managers, remote work became commonplace within weeks, Garnier observes." },
          { es: "Selon Garnier, la crise a banalisé une pratique jusque-là réservée aux cadres.", en: "According to Garnier, the crisis made commonplace a practice until then reserved for managers." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence: it uses Garnier's idea, so name her with selon.",
            source: "En quelques semaines, le télétravail est devenu la norme pour des millions de salariés.",
            answer: "Selon Garnier, en quelques semaines, le télétravail est devenu la norme pour des millions de salariés.",
            altAnswers: ["Selon Garnier, le télétravail est devenu en quelques semaines la norme pour des millions de salariés.", "Selon Garnier (2022), en quelques semaines, le télétravail est devenu la norme pour des millions de salariés."],
            explanation: "However well rewritten, a paraphrase with no source is plagiarism: the idea belongs to Garnier, so \"selon Garnier\" (or a note) must stay.",
          },
        ],
      },
      {
        heading: "Rewrite 2: named, but no guillemets",
        body: [
          "Rewrite 2: \"Comme le montre Hélène Garnier, cette généralisation brutale a révélé de profondes inégalités.\" Verdict: the source is named, but the words are hers, word for word, without guillemets. That is still a fault: a named source does not license an unmarked quotation. Fix: \"Comme le montre Hélène Garnier, « cette généralisation brutale a révélé de profondes inégalités ».\" Or paraphrase it properly.",
        ],
        examples: [
          { es: "Comme le montre Hélène Garnier, « cette généralisation brutale a révélé de profondes inégalités ».", en: "As Garnier shows, 'this sudden spread revealed deep inequalities'." },
          { es: "La source est citée, mais les guillemets manquent.", en: "The source is cited, but the quotation marks are missing." },
          { es: "Comme le note Garnier, l'expérience « n'avait rien de commun ».", en: "As Garnier notes, the experience 'had nothing in common'." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            explanation: "Naming the source does not license an unmarked quotation: exact words must go \"entre guillemets\". Changing \"selon\" to \"pour\" would not fix anything.",
            question: "A student writes: Selon Garnier, le télétravail s'est imposé comme une norme. These are Garnier's exact words. What must change?",
            options: ["Put her words in guillemets.", "Nothing: the source is named.", "Add [sic] after norme.", "Replace selon with pour."],
            correctIndex: 0,
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (a teacher's comment).",
            source: "The author is named, but her words are copied without quotation marks.",
            answer: "L'autrice est nommée, mais ses mots sont recopiés sans guillemets.",
            altAnswers: ["L'auteure est nommée, mais ses mots sont recopiés sans guillemets.", "L'autrice est citée, mais ses mots sont recopiés sans guillemets.", "L'autrice est nommée, mais ses mots sont copiés sans guillemets."],
            explanation: "A teacher's comment: \"sans guillemets\" with no article. Note \"l'autrice\" (or \"l'auteure\") and the agreement \"nommée\".",
          },
        ],
      },
      {
        heading: "Rewrite 3: an unreferenced translation",
        body: [
          "Rewrite 3: \"Remote work exposed inequalities\" translated by a student from an English blog: \"Le télétravail a exposé les inégalités au grand jour, en particulier entre cadres et employés.\" Verdict: a translation with no reference to the blog is plagiarism (la traduction non référencée). Also \"exposer\" in this sense is an anglicism; French says \"mettre au jour\", \"révéler\", \"mettre en lumière\".",
        ],
        examples: [
          { es: "Le télétravail a mis au jour des inégalités, notamment entre cadres et employés.", en: "Remote work brought inequalities to light, notably between managers and employees." },
          { es: "Ce passage traduit un blog anglais sans le mentionner.", en: "This passage translates an English blog without mentioning it." },
          { es: "Ce rapport met en lumière les écarts entre régions.", en: "This report brings to light the gaps between regions." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The survey [brought] the problem [to light].",
            sentence: "L'enquête a ___ le problème.",
            answer: "mis au jour",
            altAnswers: ["mis en lumière", "révélé"],
            explanation: "French says \"mettre au jour\", \"mettre en lumière\" or \"révéler\"; \"exposer\" in this sense is an anglicism.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "La crise a exposé les failles du système.",
            answer: "La crise a révélé les failles du système.",
            altAnswers: ["La crise a mis au jour les failles du système.", "La crise a mis en lumière les failles du système."],
            explanation: "\"Exposer\" for to reveal is a calque of the English expose. French uses \"révéler\", \"mettre au jour\" or \"mettre en lumière\".",
          },
        ],
      },
      {
        heading: "Rewrite 4: short and clean",
        body: [
          "Rewrite 4: \"Dès 2020, le télétravail a concerné des millions de salariés, mais pas dans les mêmes conditions (Garnier, 2022).\" Verdict: a legitimate paraphrase: new structure, condensed, source given. Short is fine; a good paraphrase often is.",
        ],
        examples: [
          { es: "Dès 2020, le télétravail a concerné des millions de salariés, mais pas dans les mêmes conditions (Garnier, 2022).", en: "From 2020, remote work concerned millions of employees, but not in the same conditions (Garnier, 2022)." },
          { es: "Tous les salariés n'ont pas télétravaillé dans les mêmes conditions (Garnier, 2022).", en: "Not all employees worked from home in the same conditions (Garnier, 2022)." },
          { es: "Une bonne paraphrase est souvent plus courte que l'original.", en: "A good paraphrase is often shorter than the original." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "In short, remote work spread, but unequally (Garnier, 2022).",
            answer: "Bref, le télétravail s'est généralisé, mais de manière inégale (Garnier, 2022).",
            altAnswers: ["Bref, le télétravail s'est généralisé, mais inégalement (Garnier, 2022).", "En bref, le télétravail s'est généralisé, mais de manière inégale (Garnier, 2022).", "Bref, le télétravail s'est répandu, mais de manière inégale (Garnier, 2022)."],
            explanation: "A condensed paraphrase with its own structure and the source in brackets is clean. \"De manière inégale\" or \"inégalement\" turns the adjective into a manner.",
          },
        ],
      },
      {
        heading: "Rewrite 5: a distortion",
        body: [
          "Rewrite 5: \"Selon Garnier, le télétravail a créé de profondes inégalités entre les salariés.\" Verdict: the source is named and the words are new, but the meaning has shifted. Garnier says the spread of remote work \"a révélé\" (revealed) inequalities that existed already; \"a créé\" (created) makes her claim something else. In French academic jargon this is \"un contresens\" (the opposite or a serious misreading) or at least \"un faux-sens\" (a shift in meaning). An honest paraphrase must be faithful before it is elegant.",
        ],
        examples: [
          { es: "Selon Garnier, le télétravail a révélé des inégalités qui existaient déjà.", en: "According to Garnier, remote work revealed inequalities that already existed." },
          { es: "Écrire « a créé » au lieu de « a révélé », c'est commettre un contresens.", en: "Writing 'created' instead of 'revealed' is a serious misreading." },
          { es: "Ce n'est pas un contresens, mais un faux-sens : la nuance de l'auteur a disparu.", en: "It isn't a complete misreading but a shift in meaning: the author's nuance has disappeared." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Selon Garnier, le télétravail a créé des inégalités.",
            question: "Garnier wrote that remote work \"a révélé\" (revealed) inequalities. What's wrong with this paraphrase?",
            options: ["It says created instead of revealed: the meaning is distorted.", "It forgets the source.", "It quotes her without guillemets.", "Nothing, it is faithful."],
            correctIndex: 0,
            explanation: "\"Créé\" vs \"révélé\": a paraphrase that changes the claim is a faux-sens or contresens.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence: Martin wrote that the reform \"a accéléré\" closures that were already under way.",
            source: "Selon Martin, la réforme a provoqué la fermeture des petites écoles.",
            answer: "Selon Martin, la réforme a accéléré la fermeture des petites écoles.",
            explanation: "Martin says the closures were already happening; \"a provoqué\" makes the reform their cause. That is a \"faux-sens\": the paraphrase must keep \"a accéléré\".",
          },
        ],
      },
      {
        heading: "Rewrite 6: a striking image survives",
        body: [
          "Rewrite 6: \"Garnier oppose les salariés installés dans un bureau calme à ceux qui travaillaient sur un coin de table de cuisine.\" Verdict: well built and attributed, but the striking image \"sur un coin de table de cuisine\" is the author's. Keep it in guillemets: ...à ceux qui travaillaient « sur un coin de table de cuisine ».",
        ],
        examples: [
          { es: "Garnier oppose les salariés installés dans un bureau calme à ceux qui travaillaient « sur un coin de table de cuisine ».", en: "Garnier contrasts employees set up in a quiet office with those who worked 'on a corner of the kitchen table'." },
          { es: "Pour Garnier, certains salariés vivaient « sur un coin de table de cuisine ».", en: "For Garnier, some employees lived 'on a corner of the kitchen table'." },
          { es: "L'expression « salon public » appartient à Leroux : gardez les guillemets.", en: "The phrase 'salon public' belongs to Leroux: keep the quotation marks." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (keep the author's image in guillemets).",
            source: "Some employees worked 'on a corner of the kitchen table', Garnier notes.",
            answer: "Certains salariés travaillaient « sur un coin de table de cuisine », note Garnier.",
            altAnswers: ["Certains salariés travaillaient « sur un coin de table de cuisine », relève Garnier.", "Certains salariés travaillaient « sur un coin de table de cuisine », observe Garnier.", "Certains employés travaillaient « sur un coin de table de cuisine », note Garnier.", "Certains salariés travaillaient « sur un coin de table de cuisine », souligne Garnier."],
            explanation: "The striking image keeps its guillemets; the incise \"note Garnier\" inverts the subject.",
          },
        ],
      },
      {
        heading: "The five-question checklist",
        body: [
          "Use this checklist for each rewrite: Is the source named? Are exact words in guillemets? Is the structure genuinely mine? Is the meaning faithful? Do striking phrases keep their quotation marks? Five yeses, and the paraphrase is clean.",
        ],
        examples: [
          { es: "Une paraphrase doit être fidèle avant d'être élégante.", en: "A paraphrase must be faithful before it is elegant." },
          { es: "La structure est-elle vraiment la mienne ?", en: "Is the structure really mine?" },
          { es: "Cinq oui, et la paraphrase est propre.", en: "Five yeses, and the paraphrase is clean." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: Are exact words in quotation marks?",
            words: ["Les mots", "exacts", "sont-ils", "entre", "guillemets ?"],
            translation: "Are exact words in quotation marks?",
            explanation: "Complex inversion: noun subject + \"sont-ils\"; \"entre guillemets\" = in quotation marks.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Is the meaning faithful to the original?",
            answer: "Le sens est-il fidèle à l'original ?",
            altAnswers: ["Est-ce que le sens est fidèle à l'original ?", "Le sens est-il fidèle au texte original ?", "Le sens est-il fidèle au texte source ?"],
            explanation: "\"Fidèle à\" = faithful to; complex inversion with a noun subject is the written-style question.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "This paraphrase is faithful but too close to the original.",
        answer: "Cette paraphrase est fidèle, mais trop proche de l'original.",
        altAnswers: ["Cette paraphrase est fidèle mais trop proche du texte original.", "Cette paraphrase est fidèle, mais elle est trop proche de l'original."],
        explanation: "Faithful is necessary but not enough: \"trop proche de l'original\" describes a paraphrase that keeps the source's skeleton.",
      },
      {
        type: "multiple-choice",
        question: "\"Le télétravail a exposé les inégalités au grand jour.\" What is the main problem if this sentence translates an uncited English blog?",
        options: ["It is plagiarism (an unreferenced translation), and \"exposer\" is a calque.", "It should use the passé simple.", "It needs [sic] after inégalités.", "Nothing: translation is always original work."],
        correctIndex: 0,
        explanation: "Translating a source without naming it is plagiarism; \"mettre au jour\" or \"révéler\" is the idiomatic verb.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The student translated a Spanish study without citing it.",
        answer: "L'étudiant a traduit une étude espagnole sans la citer.",
        altAnswers: ["L'étudiante a traduit une étude espagnole sans la citer.", "L'étudiant a traduit une étude espagnole sans la mentionner.", "L'étudiante a traduit une étude espagnole sans la mentionner."],
        explanation: "An unreferenced translation is plagiarism. \"Sans la citer\": the pronoun \"la\" (l'étude) goes before the infinitive.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "Translating 'revealed' as 'created' is not a shift in meaning but [a complete misreading].",
        sentence: "Traduire « révélé » par « créé », ce n'est pas un faux-sens mais ___.",
        answer: "un contresens",
        explanation: "\"Un contresens\" is a serious misreading that reverses or betrays the meaning; \"un faux-sens\" is a smaller shift.",
      },
      {
        type: "dictation",
        audio: "Les mots de l'autrice sont repris sans guillemets.",
        explanation: "\"Repris sans guillemets\": exact words reused unmarked, the fault of rewrite 2.",
      },
      {
        type: "speak",
        text: "Garnier montre que tous les salariés n'ont pas télétravaillé dans les mêmes conditions.",
        prompt: "Say it in French: Garnier shows that not all employees worked from home in the same conditions.",
        explanation: "\"Tous... ne... pas\" means not all; \"Garnier montre que\" keeps the attribution.",
      },
      {
        type: "speak",
        text: "Une bonne paraphrase change la structure, pas seulement les mots.",
        prompt: "Say it in French: A good paraphrase changes the structure, not just the words.",
        explanation: "The core of the lesson: rebuild the architecture, not only the vocabulary.",
      },
    ],
  },
];

export const FR_C2_U17_WRITING: WriteExercise = {
  type: "write",
  prompt: "You are writing one paragraph of a mémoire on public libraries. Using two sources (you may invent them, or use Pascal and Rousseau if you prefer a philosophical angle), write a paragraph that quotes one source directly with correct French typography, paraphrases the other faithfully, reports both with attribution verbs that show stance, and ends with a footnote-style reference.",
  minWords: 250,
  maxWords: 400,
  rubric: [
    "One direct quotation with French typography: \"« ... »\", with a cut \"[...]\" or a clarification in square brackets, woven into a grammatical sentence (\"comme le souligne...\").",
    "One faithful paraphrase that changes structure (nominalisation, reordering) and names its source (\"selon\", \"pour\", \"d'après\").",
    "Reporting verbs chosen for stance: at least three of \"affirmer\", \"soutenir\", \"avancer\", \"reconnaître\", \"prétendre\", \"souligner\", plus the hearsay conditional once.",
    "A reference in French format (\"NOM Prénom, Titre, lieu, éditeur, année, p.\") or a note using \"ibid.\" or \"op. cit.\".",
  ],
  modelAnswer: "Longtemps conçue comme un sanctuaire du silence, la bibliothèque de quartier a profondément changé de vocation au cours des deux dernières décennies. Claire Leroux, qui a enquêté dans une vingtaine d'établissements lyonnais, souligne que « les usagers ne viennent plus [...] chercher seulement des livres, mais la présence des autres »¹. Elle va jusqu'à qualifier la médiathèque de « salon public », formule qui a fait date. Cette lecture ne fait pourtant pas l'unanimité. Pour Karim Benali, la transformation des bibliothèques en lieux de sociabilité serait moins le fruit d'une demande des habitants que d'une politique municipale soucieuse de justifier ses budgets². L'auteur reconnaît certes que la fréquentation a augmenté depuis l'ouverture le dimanche, mais il avance que cette hausse concerne surtout les publics déjà familiers des lieux. Le désaccord porte donc moins sur les faits que sur leur interprétation : là où Leroux voit l'expression d'un besoin collectif, Benali discerne une stratégie institutionnelle. Il nous semble que ces deux analyses, loin de s'exclure, se complètent : la demande de lien social existe, mais l'offre la façonne autant qu'elle y répond. Encore faudrait-il, pour trancher, disposer d'enquêtes portant sur les non-usagers, qu'aucune des deux études ne prend en compte.\n\n¹ LEROUX Claire, « Les bibliothèques de quartier face au numérique », Revue des sciences sociales, n° 42, 2023, p. 21.\n² BENALI Karim, « Lire en ville », in MARTIN Sophie (dir.), Les Lecteurs urbains, Lyon, Presses universitaires, 2021, p. 58-60.",
  explanation: "The quotation is woven into the sentence with « » and a cut [...]; the note call follows the closing guillemet. Benali's view is paraphrased with nominalisation (\"la transformation des bibliothèques\") and the hearsay conditional \"serait\" to report a claim without endorsing it. Stance verbs vary (\"souligne\", \"reconnaît\", \"avance\"), and the footnotes follow the French format with surnames in capitals.",
};
