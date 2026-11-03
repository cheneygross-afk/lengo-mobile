// Synced from cheneygross-afk/lengo:src/lib/lessons/fr-c2-u32.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// French C2, Unit 32: Creative Writing.

export const FR_C2_U32_WRITING: WriteExercise = {
  type: "write",
  prompt: "A literary magazine is running a short-story competition on the theme \"Le retour\". Write a complete short story with a title that matters, a striking incipit, at least one short dialogue exchange, a discreet clue planted early, an ellipsis, and an ending that is either open or a twist. Choose your narrative tense and point of view deliberately and keep them consistent.",
  minWords: 250,
  maxWords: 400,
  rubric: [
    "Uses a consistent narrative tense (\"passé simple\" with \"imparfait\", or the present) and a clear focalisation, with at least one passage of free indirect style",
    "Punctuates dialogue the French way (« », tirets, inverted incises such as « dit-elle », « murmura-t-il »)",
    "Plants an early clue that pays off at the end, and uses an ellipsis (« Trois ans passèrent. »)",
    "Includes at least one image (comparison, metaphor or synaesthesia) and avoids repetition through pronouns, synonyms or restructuring",
  ],
  modelAnswer: "La clé sous le pot\n\nLa maison n'avait pas changé : même volets bleus, même glycine épuisée contre la façade, même pot de géraniums sur la troisième marche. Hugo s'arrêta devant le portail. Vingt ans. Il avait gardé dans sa poche, pendant tout ce temps, une petite clé de cuivre qu'il n'avait jamais osé jeter.\n\nIl sonna. Une femme âgée ouvrit, le regard méfiant.\n\n« Vous désirez ?\n— Je... j'ai habité ici, autrefois. Je voulais simplement revoir le jardin.\n— Le jardin ? répéta-t-elle. Il n'y a plus grand-chose à voir, vous savez. »\n\nElle s'effaça pourtant pour le laisser passer. Le tilleul était toujours là, plus massif, plus sombre, et son parfum avait la couleur exacte des après-midi d'août. Hugo s'assit sur le banc. Sa mère y lisait le journal ; son père, lui, n'y venait jamais. Pourquoi était-il parti, ce soir-là, sans rien dire ? Pourquoi personne n'avait-il cherché à le retenir ?\n\nTrois heures passèrent. La vieille dame lui apporta un café, puis un deuxième, sans poser de questions. Au moment de partir, il désigna la porte de la cave.\n\n« Elle est toujours fermée ?\n— Depuis que je suis là. Je n'ai jamais trouvé la clé. »\n\nHugo sortit la petite clé de cuivre. Elle tourna dans la serrure avec un bruit de vieux souvenir. Dans la pénombre, sur une étagère, une boîte en fer attendait, son prénom écrit dessus à la craie, de la main de son père.\n\nIl ne l'ouvrit pas. Pas encore. Il la glissa sous son bras, remercia la vieille dame et referma le portail derrière lui.",
  explanation: "The story keeps the passé simple for events and the imparfait for background, with free indirect style (\"Pourquoi était-il parti, ce soir-là, sans rien dire ?\"). Dialogue uses « », tirets and inverted incises (\"répéta-t-elle\"). The clue (the copper key, mentioned in the first paragraph) pays off at the end; \"Trois heures passèrent\" is an ellipsis; the image \"son parfum avait la couleur exacte des après-midi d'août\" is a synaesthesia; the ending is open (\"Il ne l'ouvrit pas. Pas encore.\").",
};

export const FR_C2_U32: Lesson[] = [
  {
    slug: "c2-creative-writing-1",
    level: "FR-C2",
    number: 1,
    title: "L'Écriture Créative, Part 1 of 3",
    summary: "Narrative architecture: incipit, tension, analepse and prolepse, ellipse, climax, the chute of Maupassant's short stories, and the clues that make an ending both surprising and inevitable.",
    duration: "19 min",
    sections: [
      {
        heading: "Analepse and prolepse",
        body: [
          "A story rarely tells events in strict order. \"Une analepse\" (the critic's term for a flashback, \"un retour en arrière\") goes back in time: \"Elle se souvint de ce matin de 1998...\". \"Une prolepse\" (flash-forward) jumps ahead, often to create tension: \"Il ne savait pas encore que ce serait leur dernière conversation.\" Notice the conditional as future-in-the-past (\"ce serait\"): the classic grammar of the prolepse.",
        ],
        examples: [
          { es: "Elle se souvint soudain de ce matin de 1998 où tout avait commencé.", en: "She suddenly remembered that morning in 1998 when it had all begun." },
          { es: "Il ne savait pas encore que ce serait leur dernière conversation.", en: "He didn't know yet that it would be their last conversation." },
          { es: "Plus tard, elle comprendrait pourquoi il avait menti.", en: "Later, she would understand why he had lied." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "\"Elle repensa soudain à l'été de ses dix ans.\" What device is this?",
            options: ["une analepse", "une prolepse", "une ellipse", "une chute"],
            correctIndex: 0,
            explanation: "Going back to an earlier moment is \"une analepse\" (a flashback). \"Une prolepse\" would jump ahead, \"une ellipse\" skips time, and \"la chute\" is the final twist.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (literary narrative).",
            source: "She didn't know yet that she would never see him again.",
            answer: "Elle ne savait pas encore qu'elle ne le reverrait jamais.",
            altAnswers: ["Elle ignorait encore qu'elle ne le reverrait jamais.", "Elle ne savait pas encore qu'elle ne le reverrait plus jamais."],
            explanation: "A prolepse: conditional \"reverrait\" as the future in the past.",
          },
        ],
      },
      {
        heading: "Ellipse, sommaire, scène",
        body: [
          "\"Une ellipse\" skips time silently: \"Trois ans passèrent.\" or a simple line break. It is one of the writer's most powerful tools: what is left out makes the reader work. \"Un sommaire\" summarises a long period in a few lines; \"une scène\" slows down to show a moment in detail. Varying the speed of the narrative (\"le rythme\") is half of the craft.",
        ],
        examples: [
          { es: "Trois ans passèrent.", en: "Three years went by." },
          { es: "L'ellipse oblige le lecteur à combler lui-même les vides.", en: "The ellipsis forces the reader to fill in the gaps themselves." },
          { es: "Le reste de l'hiver tient en trois lignes : la neige, l'attente, le silence.", en: "The rest of the winter fits into three lines: snow, waiting, silence." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A novelist writes \"L'hiver passa.\" and moves straight on to spring. What device is this?",
            options: ["une ellipse", "une analepse", "une prolepse", "une scène"],
            correctIndex: 0,
            explanation: "Skipping a whole season in one sentence is \"une ellipse\". \"Une scène\" does the opposite: it slows down to show a moment in detail.",
          },
        ],
      },
      {
        heading: "How to write a prolepse",
        body: [
          "To write a prolepse elegantly in French, use \"il ne savait pas encore que\", \"plus tard, elle comprendrait que\", \"c'était la dernière fois que\", or the literary \"devait\" + infinitive: \"Il devait mourir six mois plus tard\" (he was to die six months later).",
        ],
        examples: [
          { es: "Il devait mourir six mois plus tard, loin de chez lui.", en: "He was to die six months later, far from home." },
          { es: "C'était la dernière fois qu'elle traversait ce pont.", en: "It was the last time she would cross that bridge." },
          { es: "Il ne se doutait pas encore de ce qui l'attendait.", en: "He had no idea yet of what lay ahead of him." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "They [were to] meet again in Rome twenty years later.",
            sentence: "Ils ___ se retrouver à Rome vingt ans plus tard.",
            answer: "devaient",
            explanation: "Literary \"devoir\" in the imperfect + infinitive announces what destiny holds: \"ils devaient se retrouver\", they were to meet again.",
          },
        ],
      },
      {
        heading: "Tension and climax",
        body: [
          "\"La tension narrative\" is what makes the reader turn the page: a question raised and held back. It builds through \"la montée en tension\" (rising action) to \"le climax\" (or \"le point culminant\"), then releases in \"le dénouement\". A story that loses tension \"s'essouffle\" (runs out of breath).",
        ],
        examples: [
          { es: "La tension monte à mesure que la nuit tombe.", en: "The tension rises as night falls." },
          { es: "Le climax survient dans la scène de l'incendie.", en: "The climax comes in the fire scene." },
          { es: "Au milieu du récit, l'intrigue s'essouffle.", en: "Halfway through the story, the plot runs out of steam." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which term names the moment of highest tension in a story?",
            options: ["le point culminant", "le dénouement", "la montée en tension", "l'incipit"],
            correctIndex: 0,
            explanation: "\"Le point culminant\" (or \"le climax\") is the peak. \"La montée en tension\" leads up to it, \"le dénouement\" releases the tension afterwards, and \"l'incipit\" is the opening.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Halfway through, the story [runs out of steam].",
            sentence: "À mi-parcours, le récit ___.",
            answer: "s'essouffle",
            explanation: "\"S'essouffler\" (to get out of breath) is the standard image for a story losing tension.",
          },
        ],
      },
      {
        heading: "La chute: Maupassant's twist",
        body: [
          "\"La chute\" (the fall) is the final twist of a short story, the last line that overturns everything. Maupassant is its French master. In \"La Parure\" (1884), Mathilde Loisel loses a borrowed diamond necklace, spends ten years of poverty repaying the replacement, then learns from her friend: « Oh ! ma pauvre Mathilde ! Mais la mienne était fausse. Elle valait au plus cinq cents francs !... » The story ends there: \"une nouvelle à chute\".",
        ],
        examples: [
          { es: "Mais la mienne était fausse. Elle valait au plus cinq cents francs !", en: "But mine was fake. It was worth five hundred francs at most!" },
          { es: "La chute renverse tout ce que le lecteur croyait savoir.", en: "The twist overturns everything the reader thought they knew." },
          { es: "La nouvelle se clôt sur une révélation qui change tout.", en: "The short story closes on a revelation that changes everything." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Tout était faux depuis le début.",
            question: "What does it mean?",
            options: ["It had all been fake from the start.", "It had all gone wrong from the start.", "Everything fell from the start.", "He had been wrong from the start."],
            correctIndex: 0,
            explanation: "\"Faux\" means fake or false; \"tout était faux\" is the kind of line a chute turns on. Falling would be \"tomber\", going wrong \"mal tourner\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The twist changes the meaning of the whole story.",
            answer: "La chute change le sens de toute la nouvelle.",
            altAnswers: ["La chute modifie le sens de toute la nouvelle.", "La chute bouleverse le sens de toute la nouvelle.", "La chute change le sens de toute l'histoire.", "La chute change le sens de tout le récit."],
            explanation: "\"La chute\" is the critic's word for a short story's final twist; \"toute la nouvelle\" (the whole short story).",
          },
        ],
      },
      {
        heading: "Surprising yet inevitable",
        body: [
          "A good chute is surprising yet inevitable: rereading, you find it was prepared. Maupassant plants the clue early: the friend lends the necklace very easily, without hesitation. A careless reader doesn't notice; an attentive one feels a faint unease.",
        ],
        examples: [
          { es: "En relisant, on s'aperçoit que tout était annoncé.", en: "On rereading, you notice that everything was foreshadowed." },
          { es: "Le lecteur attentif ressent un léger malaise.", en: "The attentive reader feels a slight unease." },
          { es: "Dès la première scène, l'amie prête le collier sans hésiter.", en: "From the first scene, the friend lends the necklace without hesitating." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What makes a chute both surprising and inevitable?",
            options: [
              "Clues planted earlier that the reader only notices on rereading.",
              "An event that has nothing to do with the rest of the story.",
              "Telling the ending in the first paragraph.",
              "A long explanation after the twist.",
            ],
            correctIndex: 0,
            explanation: "Discreet clues make the ending feel prepared without revealing it. An unrelated event feels arbitrary, and telling the ending early or explaining the twist kills the surprise.",
          },
        ],
      },
      {
        heading: "Sowing clues: indice, annonce, présage",
        body: [
          "To make an ending feel inevitable, writers \"semer des indices\" (sow clues). \"Un indice\" is a concrete detail with a later payoff (Chekhov's famous rule, known in French as \"le fusil de Tchekhov\": a gun on the wall in Act One must go off by Act Three). \"Une annonce\" or \"une préfiguration\" anticipates an event; \"un présage\" (an omen) gives it a symbolic, often ominous colour: a crow, a broken mirror, a sudden storm.",
        ],
        examples: [
          { es: "L'auteur sème des indices dès la première page.", en: "The author plants clues from the very first page." },
          { es: "Un fusil accroché au mur au premier acte doit servir au dernier.", en: "A gun hanging on the wall in the first act must be used in the last." },
          { es: "Le corbeau sur le toit est un présage que le lecteur n'oublie pas.", en: "The crow on the roof is an omen the reader doesn't forget." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Early in a story, a mirror cracks for no reason, hinting at misfortune. What is it?",
            options: ["un présage", "une ellipse", "une chute", "une analepse"],
            correctIndex: 0,
            explanation: "A sign with an ominous, symbolic colour is \"un présage\" (an omen). An ellipsis skips time, an analepse goes back, and the chute is the last twist.",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: The novelist slips an omen into the first chapter.",
            words: ["La romancière", "glisse", "un présage", "dans le", "premier chapitre."],
            translation: "The novelist slips an omen into the first chapter.",
            explanation: "\"Glisser\" (to slip in) is the verb for placing a clue discreetly; \"glisser quelque chose dans\".",
          },
        ],
      },
      {
        heading: "Dosage: not too visible, not too hidden",
        body: [
          "The art is dosage. Too visible, the clue \"vend la mèche\" (gives the game away, literally sells the fuse); too hidden, the ending seems arbitrary, \"tombe du ciel\". Good clues are disguised as description: the neighbour who always waters his plants at night, a character who checks the time too often.",
        ],
        examples: [
          { es: "Ce détail vend la mèche beaucoup trop tôt.", en: "That detail gives the game away far too early." },
          { es: "Sans préparation, la fin semble tomber du ciel.", en: "Without preparation, the ending seems to come out of nowhere." },
          { es: "L'indice est déguisé en simple description.", en: "The clue is disguised as plain description." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The blurb on the back cover gives the game away.",
            answer: "La quatrième de couverture vend la mèche.",
            altAnswers: ["La quatrième de couverture évente la surprise.", "Le texte de la quatrième de couverture vend la mèche."],
            explanation: "\"Vendre la mèche\": to give away a secret. The back-cover blurb is \"la quatrième de couverture\".",
          },
        ],
      },
      {
        heading: "Verbs for talking about your draft",
        body: [
          "Useful verbs for talking about your own draft: \"semer\", \"glisser\" (to slip in), \"distiller\", \"préparer\", \"annoncer\", \"laisser deviner\", \"éventer\" (to give away a secret: \"la surprise est éventée\").",
        ],
        examples: [
          { es: "Elle glisse l'indice au milieu d'une description anodine.", en: "She slips the clue into the middle of an innocuous description." },
          { es: "La romancière distille les informations au compte-gouttes.", en: "The novelist releases the information drop by drop." },
          { es: "Le titre laisse deviner le dénouement.", en: "The title hints at the ending." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into the passive.",
            source: "Un détail anodin évente la surprise.",
            answer: "La surprise est éventée par un détail anodin.",
            explanation: "In the passive the participle agrees with the new subject: \"la surprise est éventée\". The agent follows \"par\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Turn it into a prolepse with « plus tard ».",
        source: "Il comprit alors pourquoi elle était partie.",
        answer: "Plus tard, il comprendrait pourquoi elle était partie.",
        altAnswers: ["Plus tard, il comprendrait pourquoi elle s'en était allée."],
        explanation: "A prolepse looks ahead from the past, so the passé simple \"comprit\" becomes the conditional \"comprendrait\" (future in the past); the plus-que-parfait stays.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (literary narrative).",
        source: "Two winters went by without a letter.",
        answer: "Deux hivers passèrent sans une lettre.",
        altAnswers: ["Deux hivers passèrent sans la moindre lettre.", "Deux hivers s'écoulèrent sans une lettre.", "Deux hivers passèrent sans lettre.", "Deux hivers s'écoulèrent sans la moindre lettre."],
        explanation: "An ellipsis in the passé simple: one line for two winters.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Fear grows as the footsteps come closer.",
        answer: "La peur grandit à mesure que les pas se rapprochent.",
        altAnswers: ["La peur grandit au fur et à mesure que les pas se rapprochent.", "La peur monte à mesure que les pas se rapprochent.", "La peur croît à mesure que les pas se rapprochent."],
        explanation: "\"À mesure que\" + indicative links two progressions: the tension rises with each step.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Without clues, the ending comes out of nowhere.",
        answer: "Sans indices, la fin tombe du ciel.",
        altAnswers: ["Sans indice, la fin tombe du ciel.", "Sans indices, le dénouement tombe du ciel.", "Sans indices, la fin semble tomber du ciel."],
        explanation: "\"Tomber du ciel\": to come out of nowhere, arbitrary.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Elle se souvint soudain le jour où ils s'étaient rencontrés.",
        answer: "Elle se souvint soudain du jour où ils s'étaient rencontrés.",
        altAnswers: ["Elle se rappela soudain le jour où ils s'étaient rencontrés."],
        explanation: "\"Se souvenir\" takes \"de\": \"se souvenir du jour\". It is \"se rappeler\" that takes a direct object (\"se rappeler le jour\").",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: It was the last time she saw him.",
        words: ["C'était", "la dernière fois", "qu'elle", "le", "voyait."],
        translation: "It was the last time she saw him.",
        explanation: "\"C'était la dernière fois que\" + imperfect: a classic prolepse.",
      },
      {
        type: "dictation",
        audio: "Elle ne savait pas encore que ce voyage changerait sa vie.",
        explanation: "The conditional \"changerait\" as the future in the past: a prolepse.",
      },
      {
        type: "speak",
        text: "Oh ! ma pauvre Mathilde ! Mais la mienne était fausse.",
        tip: "Let the voice fall on \"fausse\": it is the whole story's punchline.",
        explanation: "The chute of Maupassant's \"La Parure\" (1884).",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Il ne savait pas encore que ce sera leur dernier été.",
        answer: "Il ne savait pas encore que ce serait leur dernier été.",
        explanation: "After a past tense (\"il ne savait pas\"), the future becomes the conditional: \"ce serait\". This future in the past is the grammar of the prolepse.",
      },
    ],
  },
  {
    slug: "c2-foreshadowing-style-workshop",
    level: "FR-C2",
    number: 2,
    title: "Style Workshop: Semer des Indices",
    summary: "Add discreet clues to a short story so that its ending is surprising but inevitable, and remove the clues that give it away too early.",
    duration: "18 min",
    sections: [
      {
        heading: "The story and its ending",
        body: [
          "Here is the ending of an original short story, « Le Voisin du dessous »: « Quand la police força la porte du troisième, elle trouva l'appartement vide depuis des années. Les meubles étaient couverts de draps. Sur la table, une pile de lettres jamais ouvertes, toutes adressées à Mme Vernet. Toutes signées de la même main. De la sienne. » The heroine, Mme Vernet, an elderly woman, had spent the story complaining about noise from the flat below, and the twist is that she has been writing to herself, alone, for years.",
        ],
        examples: [
          { es: "Quand la police força la porte, elle trouva l'appartement vide depuis des années.", en: "When the police forced the door, they found the flat had been empty for years." },
          { es: "Les meubles étaient couverts de draps.", en: "The furniture was covered with sheets." },
          { es: "Toutes signées de la même main. De la sienne.", en: "All signed in the same hand. Her own." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What does the last line, \"De la sienne.\", reveal?",
            options: [
              "Mme Vernet wrote all the letters herself.",
              "The neighbour wrote all the letters.",
              "The police officer signed the letters.",
              "The letters were written by her late husband.",
            ],
            correctIndex: 0,
            explanation: "\"La sienne\" refers back to \"la même main\": the hand is Mme Vernet's own. The flat below has been empty for years, so there is no neighbour, and nothing points to the police or her husband.",
          },
        ],
      },
      {
        heading: "The clue that gives everything away",
        body: [
          "Now the draft's first version gave the game away in the second paragraph: « Mme Vernet, qui perdait un peu la tête depuis la mort de son mari, entendait des bruits partout. » \"Qui perdait un peu la tête\" tells the reader everything. Our job: remove that explicit clue and replace it with discreet ones, disguised as description.",
        ],
        examples: [
          { es: "Mme Vernet perdait un peu la tête.", en: "Mme Vernet was losing her mind a little. (explicit: it says everything)" },
          { es: "Elle oubliait parfois d'éteindre le gaz.", en: "She sometimes forgot to turn off the gas. (a hint, not an explanation)" },
          { es: "Le narrateur explique tout : le lecteur n'a plus rien à deviner.", en: "The narrator explains everything: the reader has nothing left to guess." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence gives the twist away far too early?",
            options: [
              "Mme Vernet, qui perdait un peu la tête, entendait des bruits partout.",
              "C'était toujours ce même air de piano, à la même heure.",
              "Le facteur ne s'arrêtait plus devant sa porte.",
              "Sur le paillasson du dessous, la poussière formait une fine couche grise.",
            ],
            correctIndex: 0,
            explanation: "\"Qui perdait un peu la tête\" explains everything in the narrator's voice. The other three are details the reader registers without being told what they mean.",
          },
        ],
      },
      {
        heading: "Clues disguised as description",
        body: [
          "Discreet clues might be: the postman who no longer stops at her door; a neighbour who looks at her strangely when she mentions the man downstairs; her description of noises that are always the same (\"toujours ce même air de piano, à la même heure\"); the dust on the downstairs doormat she notices without understanding.",
        ],
        examples: [
          { es: "Le facteur ne s'arrêtait plus devant sa porte.", en: "The postman no longer stopped at her door." },
          { es: "La voisine la regarda d'un drôle d'air quand elle parla du monsieur du dessous.", en: "The neighbour gave her an odd look when she mentioned the man downstairs." },
          { es: "C'était toujours ce même air de piano, à la même heure.", en: "It was always that same piano tune, at the same time." },
          { es: "Sur le paillasson du dessous, la poussière formait une fine couche grise.", en: "On the doormat downstairs, the dust formed a thin grey layer." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (literary narrative).",
            source: "Nobody had rung her doorbell for months.",
            answer: "Personne n'avait sonné chez elle depuis des mois.",
            altAnswers: ["Personne n'avait sonné à sa porte depuis des mois.", "Cela faisait des mois que personne n'avait sonné chez elle.", "Personne ne sonnait plus chez elle depuis des mois."],
            explanation: "\"Personne ne\" as subject, with the plus-que-parfait and \"depuis\": a fact stated as plain description, which is what keeps the clue discreet.",
          },
        ],
      },
      {
        heading: "Bury the clue in secondary syntax",
        body: [
          "A clue is discreet when it is syntactically secondary. Put it in a subordinate clause, an apposition or a list, not in the main clause: « En rentrant, elle salua la concierge, qui ne lui répondit pas, et monta lentement l'escalier. » The silence of the concierge is buried between two actions; the reader registers it without stopping.",
        ],
        examples: [
          { es: "Elle salua la concierge, qui ne lui répondit pas, et monta lentement l'escalier.", en: "She greeted the concierge, who didn't answer, and slowly climbed the stairs." },
          { es: "Elle remarqua, sans s'y attarder, que la boîte aux lettres du dessous débordait.", en: "She noticed, without dwelling on it, that the letterbox downstairs was overflowing." },
          { es: "Il paya, salua le serveur, qui ne leva pas les yeux, et sortit.", en: "He paid, said goodbye to the waiter, who didn't look up, and left." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "How do you make a clue discreet?",
            options: [
              "Put it in a subordinate clause or an apposition, among other details.",
              "Put it in bold at the start of a chapter.",
              "Have the narrator announce that it is important.",
              "Repeat it in every paragraph unchanged.",
            ],
            correctIndex: 0,
            explanation: "A clue buried in secondary syntax is registered without being noticed. Bold type, an announcement by the narrator or blunt repetition all point the reader straight at it.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (literary narrative).",
            source: "She paid the baker, who didn't smile at her, and went home.",
            answer: "Elle paya la boulangère, qui ne lui sourit pas, et rentra chez elle.",
            altAnswers: ["Elle paya le boulanger, qui ne lui sourit pas, et rentra chez elle.", "Elle paya la boulangère, qui ne lui sourit pas, puis rentra chez elle.", "Elle paya le boulanger, qui ne lui sourit pas, puis rentra chez elle."],
            explanation: "The clue (no smile) sits in a relative clause between two actions in the passé simple, so the reader registers it without stopping. \"Sourire à quelqu'un\" takes \"lui\".",
          },
        ],
      },
      {
        heading: "An innocent explanation: free indirect style",
        body: [
          "Another technique is to give the clue an innocent explanation in the character's mind, through free indirect style: « La concierge ne répondit pas. Encore une de ses humeurs, sans doute. » The reader accepts the explanation as Mme Vernet does, until the end reveals it was wrong.",
        ],
        examples: [
          { es: "La concierge ne répondit pas. Encore une de ses humeurs, sans doute.", en: "The concierge didn't answer. Another of her moods, no doubt." },
          { es: "Rien d'étonnant : les gens ne lisent plus leur courrier, de nos jours.", en: "Nothing surprising: people don't read their post these days." },
          { es: "Le téléphone ne sonnait plus. Les enfants étaient si occupés, à leur âge.", en: "The phone didn't ring any more. The children were so busy, at their age." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Sans doute un retard de la poste.",
            question: "What does it mean?",
            options: ["Probably a delay at the post office.", "Without any doubt, the post was early.", "A late post, without question.", "No doubt she had posted it late."],
            correctIndex: 0,
            explanation: "\"Sans doute\" means probably, no doubt: the character's own innocent explanation, which the reader accepts as she does.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (literary narrative).",
            source: "Another of his whims, no doubt.",
            answer: "Encore un de ses caprices, sans doute.",
            altAnswers: ["Encore une de ses lubies, sans doute.", "Sans doute encore un de ses caprices."],
            explanation: "Free indirect style: the character's dismissive thought hides the clue. \"Un caprice\" is masculine, so \"encore un de ses caprices\".",
          },
        ],
      },
      {
        heading: "Repetition with variation",
        body: [
          "Finally, repetition with variation: the same detail returns three times, slightly changed each time (\"le même air de piano\", \"le piano, encore\", \"le silence, ce soir, au lieu du piano\"). The third occurrence prepares the climax.",
        ],
        examples: [
          { es: "Le piano, encore. Il jouait donc toutes les nuits ?", en: "The piano, again. So he played every night?" },
          { es: "Ce soir-là, au lieu du piano, il n'y eut que le silence.", en: "That evening, instead of the piano, there was only silence." },
          { es: "Le piano, plus doux ce soir, comme fatigué.", en: "The piano, softer tonight, as if tired." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "That night, [instead of the] neighbour's footsteps, she heard only the rain.",
            sentence: "Cette nuit-là, ___ pas du voisin, elle n'entendit que la pluie.",
            answer: "au lieu des",
            explanation: "\"Au lieu de\" + les contracts to \"au lieu des\" (\"les pas\" is plural); with a singular masculine noun it would be \"au lieu du\".",
          },
        ],
      },
      {
        heading: "The vocabulary of revision",
        body: [
          "Editing vocabulary: \"supprimer\" or \"couper\" (to cut) the explicit sentence, \"glisser\" (to slip in) a detail, \"déplacer\" (to move) a clue earlier or later, \"atténuer\" (to tone down) one that is too heavy, \"doser\" (to measure out) the clues. \"Trop appuyé\" (too heavy-handed) and \"trop discret\" (too subtle) are the two dangers.",
        ],
        examples: [
          { es: "Cet indice est trop appuyé : il faut l'atténuer.", en: "That clue is too heavy-handed: it needs toning down." },
          { es: "Je vais déplacer ce détail vers le début du récit.", en: "I'm going to move that detail toward the beginning of the story." },
          { es: "Il faut doser les indices avec soin.", en: "You have to measure out the clues carefully." },
          { es: "J'ai coupé la phrase qui expliquait tout.", en: "I cut the sentence that explained everything." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "I'm going to [tone down] that clue.",
            sentence: "Je vais ___ cet indice.",
            answer: "atténuer",
            altAnswers: ["estomper", "adoucir"],
            explanation: "\"Atténuer\": to tone down a clue that is too heavy.",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: This detail is far too subtle.",
            words: ["Ce", "détail", "est", "beaucoup", "trop", "discret."],
            translation: "This detail is far too subtle.",
            explanation: "\"Trop discret\" is the other danger, the opposite of \"trop appuyé\"; \"beaucoup trop\" intensifies it.",
          },
        ],
      },
      {
        heading: "Before and after",
        body: [
          "Revision of the opening paragraph: before, « Mme Vernet, qui perdait un peu la tête depuis la mort de son mari, entendait des bruits partout. » After, « Depuis la mort de son mari, Mme Vernet avait l'oreille plus fine. Elle entendait tout : le pas lourd du voisin du dessous, son piano, toujours le même air, à la même heure. Elle s'étonnait seulement que personne d'autre, dans l'immeuble, ne s'en plaigne. »",
        ],
        examples: [
          { es: "Depuis la mort de son mari, Mme Vernet avait l'oreille plus fine.", en: "Since her husband's death, Mme Vernet's hearing had grown sharper." },
          { es: "Elle entendait tout, même ce que les autres n'entendaient pas.", en: "She heard everything, even what the others didn't hear." },
          { es: "La nouvelle version ne dit rien d'explicite.", en: "The new version says nothing explicit." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Why is the revised opening better than the first draft?",
            options: [
              "It suggests without explaining, so the clues go unnoticed until the end.",
              "It explains Mme Vernet's illness more clearly.",
              "It removes every clue from the story.",
              "It reveals the twist in its first line.",
            ],
            correctIndex: 0,
            explanation: "The revision keeps the clues (the sharp hearing, the same tune, no one else complaining) but no longer explains them. Removing every clue would make the ending arbitrary.",
          },
        ],
      },
      {
        heading: "A clue disguised as surprise: s'étonner que",
        body: [
          "The revised version says nothing explicit, yet the last sentence (no one else complains) is a perfect clue: it is presented as her surprise, not as the narrator's warning. Note the subjunctive \"ne s'en plaigne\" after \"s'étonner que\".",
        ],
        examples: [
          { es: "Elle s'étonnait seulement que personne d'autre ne s'en plaigne.", en: "She was only surprised that no one else complained about it." },
          { es: "Il s'étonnait que la lumière reste allumée toute la nuit.", en: "He was surprised that the light stayed on all night." },
          { es: "Elle trouvait étrange que le courrier n'arrive plus.", en: "She found it strange that the post no longer came." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "He was surprised that the shutters stayed closed.",
            answer: "Il s'étonnait que les volets restent fermés.",
            altAnswers: ["Il s'étonna que les volets restent fermés.", "Il était étonné que les volets restent fermés.", "Il était surpris que les volets restent fermés.", "Il s'étonnait que les volets restassent fermés."],
            explanation: "\"S'étonner que\" + subjunctive: \"restent\" (or the literary imperfect subjunctive \"restassent\").",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Elle s'étonnait que l'immeuble est si calme.",
            answer: "Elle s'étonnait que l'immeuble soit si calme.",
            altAnswers: ["Elle s'étonnait que l'immeuble fût si calme."],
            explanation: "\"S'étonner que\" expresses a feeling, so the verb after it is in the subjunctive: \"soit\", not the indicative \"est\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (literary narrative).",
        source: "Every evening, the same smell of soup rose up the stairs.",
        answer: "Chaque soir, la même odeur de soupe montait dans l'escalier.",
        altAnswers: ["Tous les soirs, la même odeur de soupe montait dans l'escalier.", "Chaque soir, la même odeur de soupe montait par l'escalier."],
        explanation: "Imperfect for a repeated background detail: exactly the kind of clue that hides in description.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (literary narrative).",
        source: "The postman gave her an odd look.",
        answer: "Le facteur la regarda d'un drôle d'air.",
        altAnswers: ["Le facteur lui jeta un regard étrange.", "Le facteur lui lança un drôle de regard.", "Le facteur la regarda d'un air étrange."],
        explanation: "\"Regarder quelqu'un d'un drôle d'air\": a discreet clue in an ordinary gesture, in the passé simple.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Turn it into the passive.",
        source: "J'ai déplacé le détail du paillasson vers le début.",
        answer: "Le détail du paillasson a été déplacé vers le début.",
        explanation: "The object \"le détail du paillasson\" becomes the subject, and \"déplacé\" agrees with it (masculine singular). The writer disappears, as in an editor's note.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Quand la police arriva, ils fouillèrent la cave.",
        answer: "Quand la police arriva, elle fouilla la cave.",
        altAnswers: ["Lorsque la police arriva, elle fouilla la cave."],
        explanation: "\"La police\" is a singular feminine noun, so the pronoun and verb follow it: \"elle fouilla\". \"Ils\" would need \"les policiers\".",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: All addressed to the same woman.",
        words: ["Toutes", "adressées", "à la", "même", "femme."],
        translation: "All addressed to the same woman.",
        explanation: "A verbless sentence: \"toutes adressées\" agrees with \"les lettres\", understood.",
      },
      {
        type: "dictation",
        audio: "La boîte aux lettres du dessous débordait de prospectus.",
        explanation: "Imperfect for a background fact; \"déborder de\" (to overflow with) is the clue that no one lives there.",
      },
      {
        type: "speak",
        text: "Personne d'autre, dans l'immeuble, ne s'en plaignait.",
        tip: "Pause slightly around \"dans l'immeuble\": the inserted phrase is where the clue hides.",
        explanation: "\"Personne d'autre ne\" + verb; \"s'en plaindre\" (to complain about it).",
      },
    ],
  },
  {
    slug: "c2-creative-writing-2",
    level: "FR-C2",
    number: 3,
    title: "L'Écriture Créative, Part 2 of 3",
    summary: "Point of view and voice: internal, external and zero focalisation; narrator-character or outside narrator; tense as a choice; and French dialogue punctuation with inverted incises.",
    duration: "19 min",
    sections: [
      {
        heading: "Who sees, who tells",
        body: [
          "Before writing, choose your \"point de vue\". \"Un narrateur-personnage\" tells in the first person and knows only what he has lived through; \"un narrateur extérieur\" (third person) can be omniscient (\"focalisation zéro\"), stay with one character (\"focalisation interne\"), or show only the outside (\"focalisation externe\"). Each choice has a price: internal focalisation creates intimacy but limits information; external focalisation creates mystery but distance.",
        ],
        examples: [
          { es: "L'homme entra, posa son chapeau et s'assit sans un mot.", en: "The man came in, put down his hat and sat without a word." },
          { es: "Le narrateur omniscient connaît les pensées de tous les personnages.", en: "The omniscient narrator knows all the characters' thoughts." },
          { es: "Raconté à la première personne, le récit gagne en intimité.", en: "Told in the first person, the story gains in intimacy." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "\"La femme traversa la place, regarda sa montre et pressa le pas.\" Which focalisation is this?",
            options: ["externe", "interne", "zéro", "autofiction"],
            correctIndex: 0,
            explanation: "Only actions are shown, no thoughts or feelings: external focalisation, like a camera. Internal focalisation would give her thoughts, and zero focalisation would know everyone's.",
          },
        ],
      },
      {
        heading: "The shift in point of view",
        body: [
          "The most common beginner's error is \"la rupture de point de vue\": in a story told through Léa's eyes, suddenly writing what her brother thinks. If you are in internal focalisation, everything must pass through Léa: not \"Thomas était furieux\" but \"Thomas serrait les mâchoires ; il devait être furieux\" (what she sees, and her inference).",
        ],
        examples: [
          { es: "Thomas serrait les mâchoires ; il devait être furieux.", en: "Thomas was clenching his jaw; he must have been furious." },
          { es: "Attention à la rupture de point de vue au troisième paragraphe.", en: "Watch out for the shift in point of view in the third paragraph." },
          { es: "Léa vit son frère détourner les yeux ; il cachait quelque chose, sans doute.", en: "She saw her brother look away; he was hiding something, no doubt." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In a story told through the sister's eyes, which sentence breaks the point of view?",
            options: ["Thomas pensait qu'elle ne remarquerait rien.", "Thomas évitait son regard.", "Thomas semblait nerveux.", "Thomas devait être déçu."],
            correctIndex: 0,
            explanation: "The sister cannot know Thomas's thoughts, so \"Thomas pensait que\" breaks the point of view. Avoiding her gaze, seeming nervous and \"devait être déçu\" are what she sees or infers.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (literary narrative, internal focalisation through the narrator's eyes).",
            source: "He was clenching his fists; he must have been angry.",
            answer: "Il serrait les poings ; il devait être en colère.",
            altAnswers: ["Il serrait les poings ; il devait être furieux.", "Il serrait les poings, il devait être en colère."],
            explanation: "\"Devait être\": an inference from what is seen, keeping the point of view consistent.",
          },
        ],
      },
      {
        heading: "Free indirect style",
        body: [
          "Free indirect style (\"le style indirect libre\") is the great tool of internal focalisation in the third person: the character's thoughts in the narrator's grammar. \"Elle regarda l'horloge. Encore une heure. Comment allait-elle tenir ?\"",
        ],
        examples: [
          { es: "Elle regarda l'horloge. Encore une heure. Comment allait-elle tenir ?", en: "She looked at the clock. Another hour. How was she going to hold out?" },
          { es: "Il relut le message. Encore un refus. À quoi bon continuer ?", en: "He reread the message. Another rejection. What was the point of going on?" },
          { es: "Elle ferma les volets. Demain, tout irait mieux.", en: "She closed the shutters. Tomorrow, everything would be better." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (literary narrative, free indirect style).",
            source: "She checked her phone. Still nothing. Had he forgotten her?",
            answer: "Elle regarda son téléphone. Toujours rien. L'avait-il oubliée ?",
            altAnswers: ["Elle consulta son téléphone. Toujours rien. L'avait-il oubliée ?", "Elle regarda son portable. Toujours rien. L'avait-il oubliée ?", "Elle vérifia son téléphone. Toujours rien. L'avait-il oubliée ?", "Elle regarda son téléphone. Toujours rien. Est-ce qu'il l'avait oubliée ?"],
            explanation: "Third person and past tenses, but the question is the character's own: free indirect style. \"Oubliée\" agrees with the preceding direct object \"l'\" (her).",
          },
        ],
      },
      {
        heading: "Passé simple or narrative present",
        body: [
          "French narrative has a real choice of tenses, each with an effect. \"Le passé simple\" with \"l'imparfait\" is the classic literary pair: distance, completed action, a story already told. \"Le présent de narration\" gives immediacy and tension, very common in contemporary fiction (\"Il pousse la porte. La pièce est vide.\").",
        ],
        examples: [
          { es: "Il poussa la porte. La pièce était vide.", en: "He pushed the door. The room was empty. (simple past)" },
          { es: "Il pousse la porte. La pièce est vide.", en: "He pushes the door. The room is empty. (present)" },
          { es: "Le présent de narration rend la scène plus haletante.", en: "The narrative present makes the scene more breathless." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Elle ouvrit la fenêtre. Le jardin était désert.",
            question: "What did you hear?",
            options: [
              "Elle ouvrit la fenêtre. Le jardin était désert.",
              "Elle ouvre la fenêtre. Le jardin est désert.",
              "Elle a ouvert la fenêtre. Le jardin était désert.",
              "Elle ouvrait la fenêtre. Le jardin était désert.",
            ],
            correctIndex: 0,
            explanation: "\"Ouvrit\" is the passé simple (action), \"était\" the imperfect (description): the classic literary pair. \"Ouvrait\" would be imperfect, \"ouvre\" present.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "She closed the shutters; the street [was] silent.",
            sentence: "Elle ferma les volets ; la rue ___ silencieuse.",
            answer: "était",
            explanation: "Passé simple for the action (\"ferma\"), imperfect for the description (\"était\"). The passé simple \"fut\" would turn the silence into an event.",
          },
        ],
      },
      {
        heading: "The passé composé as an effect",
        body: [
          "\"Le passé composé\" in fiction is a deliberate effect. Camus's \"L'Étranger\" (1942) is famous for being written in the passé composé: it sounds like spoken testimony, flat and disconnected, each action set side by side without the narrative link of the passé simple. The critic Roland Barthes saw it as a kind of zero-degree writing. Since the novel is still under copyright, here is an original sentence in that manner: \"Ce matin, j'ai pris le bus. Il faisait chaud. J'ai pensé que je n'avais pas fermé la fenêtre.\"",
        ],
        examples: [
          { es: "Ce matin, j'ai pris le bus. Il faisait chaud.", en: "This morning I took the bus. It was hot. (perfect tense)" },
          { es: "Le passé composé donne au récit un ton de témoignage.", en: "The perfect tense gives the story the tone of a testimony." },
          { es: "Hier, je suis allé au cimetière. Personne ne m'a parlé.", en: "Yesterday I went to the cemetery. Nobody spoke to me." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which passage imitates the flat, testimony-like voice of \"L'Étranger\"?",
            options: [
              "Ce matin, j'ai ouvert la fenêtre. Il pleuvait. J'ai bu mon café.",
              "Ce matin, j'ouvris la fenêtre ; il pleuvait, et je bus mon café.",
              "Ce matin, j'ouvre la fenêtre. Il pleut.",
              "Ce matin, j'avais ouvert la fenêtre.",
            ],
            correctIndex: 0,
            explanation: "Short sentences in the passé composé, set side by side without links, sound like spoken testimony. The passé simple version is classic narrative, the present gives immediacy, and the plus-que-parfait looks back from another past.",
          },
        ],
      },
      {
        heading: "Choose a tense and keep it",
        body: [
          "Whatever you choose, keep it. Mixing passé simple and passé composé for the same narrative level is a classic error. The imparfait and plus-que-parfait combine with all three.",
        ],
        examples: [
          { es: "Ne mélangez pas passé simple et passé composé dans la même scène.", en: "Don't mix the simple past and the perfect tense in the same scene." },
          { es: "Il entra, salua tout le monde et s'assit.", en: "He came in, greeted everyone and sat down." },
          { es: "Elle avait déjà quitté la ville quand la lettre arriva.", en: "She had already left town when the letter arrived." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Il poussa la porte et il a allumé la lumière.",
            answer: "Il poussa la porte et alluma la lumière.",
            altAnswers: ["Il poussa la porte et il alluma la lumière.", "Il a poussé la porte et il a allumé la lumière.", "Il a poussé la porte et a allumé la lumière."],
            explanation: "Two actions on the same narrative level must share a tense: passé simple with passé simple (\"poussa... alluma\") or passé composé with passé composé, never a mix.",
          },
        ],
      },
      {
        heading: "Guillemets and tirets",
        body: [
          "French dialogue has its own typography. The exchange opens with « and closes with »; each change of speaker within it begins a new line with a dash (\"tiret\"). Example: « Tu viens ? / — Pas ce soir. / — Comme tu veux. » (each slash is a new line). Many contemporary novels use only dashes, without guillemets.",
        ],
        examples: [
          { es: "« Tu viens ? — Pas ce soir. — Comme tu veux. »", en: "'Are you coming?' 'Not tonight.' 'As you like.'" },
          { es: "« Tu as faim ? — Un peu. — Alors viens. »", en: "'Are you hungry?' 'A bit.' 'Come on, then.'" },
          { es: "— Où vas-tu ? demanda sa mère.", en: "'Where are you going?' her mother asked." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Inside a French dialogue in guillemets, what marks a change of speaker?",
            options: ["a new line starting with a dash", "a new pair of guillemets", "a semicolon", "single quotation marks"],
            correctIndex: 0,
            explanation: "The guillemets open and close the whole exchange; each new speaker starts a new line with a dash (\"un tiret\"). Opening fresh guillemets for each line is the English habit.",
          },
        ],
      },
      {
        heading: "The incise: always inverted",
        body: [
          "The reporting clause (\"l'incise\") requires subject-verb inversion: « Viens », dit-elle. « Je sais, répondit-il, mais c'est trop tard. » Never \"*elle dit\" after the quoted words. With a vowel-final verb, add -t-: « Déjà ? » s'étonna-t-elle. « Assez ! » cria-t-il. With a noun subject, inversion is simple: « Non », dit Marie.",
        ],
        examples: [
          { es: "« Viens », dit-elle.", en: "'Come,' she said." },
          { es: "« Je sais, répondit-il, mais c'est trop tard. »", en: "'I know,' he replied, 'but it's too late.'" },
          { es: "« Déjà ? » s'étonna-t-elle.", en: "'Already?' she said in surprise." },
          { es: "« Assez ! » cria-t-il.", en: "'Enough!' he shouted." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French with French dialogue punctuation.",
            source: "'Tomorrow?' he asked.",
            answer: "« Demain ? » demanda-t-il.",
            altAnswers: ["« Demain ? » s'étonna-t-il.", "« Demain ? » a-t-il demandé.", "« Demain ? » questionna-t-il."],
            explanation: "The incise is inverted, and \"demanda\" ends in a vowel, so -t- is added before \"il\": \"demanda-t-il\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "« Je pars », elle dit.",
            answer: "« Je pars », dit-elle.",
            altAnswers: ["« Je pars » dit-elle."],
            explanation: "After the quoted words, the reporting clause is always inverted: \"dit-elle\". \"Elle dit\" in that position is an English word order.",
          },
        ],
      },
      {
        heading: "Reporting verbs that carry tone",
        body: [
          "Vary the reporting verbs to carry tone: \"murmurer\", \"souffler\", \"lâcher\" (to let drop), \"rétorquer\", \"s'enquérir\", \"bougonner\" (to grumble), \"soupirer\". But don't overdo it: often \"dit-il\", or no incise at all, is best.",
        ],
        examples: [
          { es: "« Non », lâcha Marie sans lever les yeux.", en: "'No,' Marie let drop, without looking up." },
          { es: "« Encore la pluie », bougonna le vieil homme.", en: "'Rain again,' the old man grumbled." },
          { es: "« Et vous êtes ? » s'enquit l'infirmière.", en: "'And you are?' the nurse enquired." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: 'Maybe,' Hugo sighed.",
            words: ["« Peut-être »,", "soupira", "Hugo."],
            translation: "'Maybe,' Hugo sighed.",
            explanation: "\"Soupirer\" carries the tone; with a noun subject the inversion is simple: \"soupira Hugo\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Change it to the narrative present.",
        source: "Elle ouvrit la lettre. Ses mains tremblaient.",
        answer: "Elle ouvre la lettre. Ses mains tremblent.",
        explanation: "The present of narration replaces both tenses: the passé simple \"ouvrit\" becomes \"ouvre\", and the imperfect \"tremblaient\" becomes \"tremblent\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French with French dialogue punctuation.",
        source: "'Wait,' she whispered.",
        answer: "« Attends », murmura-t-elle.",
        altAnswers: ["« Attends », souffla-t-elle.", "« Attends » murmura-t-elle.", "« Attends », chuchota-t-elle.", "« Attendez », murmura-t-elle.", "« Attendez », souffla-t-elle."],
        explanation: "Inverted incise with -t- between two vowels: \"murmura-t-elle\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French with French dialogue punctuation.",
        source: "'No,' said Paul.",
        answer: "« Non », dit Paul.",
        altAnswers: ["« Non » dit Paul.", "« Non », répondit Paul."],
        explanation: "With a noun subject, simple inversion: \"dit Paul\".",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "'Get out!' [he shouted].",
        sentence: "« Dehors ! » ___.",
        answer: "cria-t-il",
        altAnswers: ["hurla-t-il", "s'écria-t-il"],
        explanation: "Inversion with -t- because the verb ends in a vowel: \"cria-t-il\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (narrative present).",
        source: "The train stops. Nobody gets off.",
        answer: "Le train s'arrête. Personne ne descend.",
        altAnswers: ["Le train s'arrête. Personne ne sort.", "Le train s'arrête. Personne ne descend du train."],
        explanation: "The narrative present: short sentences, immediate tension. \"Personne ne\" + verb as subject.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The narrative present leaves the reader no time to breathe.",
        answer: "Le présent de narration ne laisse pas au lecteur le temps de respirer.",
        altAnswers: ["Le présent de narration ne laisse pas le temps au lecteur de respirer.", "Le présent de narration ne laisse au lecteur aucun répit.", "Le présent narratif ne laisse pas au lecteur le temps de respirer."],
        explanation: "\"Laisser à quelqu'un le temps de\" + infinitive; \"le présent de narration\" is the critic's term.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: 'Yes,' she admitted, 'but not tonight.'",
        words: ["« Oui,", "admit-elle,", "mais", "pas", "ce soir. »"],
        translation: "'Yes,' she admitted, 'but not tonight.'",
        explanation: "An incise in the middle of the quote stays inside the guillemets, with inversion: \"admit-elle\" (no -t-, the verb already ends in t).",
      },
      {
        type: "dictation",
        audio: "« Plus tard », répondit-elle.",
        answer: "« Plus tard », répondit-elle.",
        altAnswers: ["Plus tard, répondit-elle.", "« Plus tard » répondit-elle."],
        explanation: "Inverted incise: \"répondit-elle\".",
      },
      {
        type: "speak",
        text: "Il descendit l'escalier. La maison dormait encore.",
        prompt: "Say it in French, in the passé simple: He went down the stairs. The house was still asleep.",
        explanation: "Passé simple for the action (\"descendit\"), imperfect for the description (\"dormait\").",
      },
    ],
  },
  {
    slug: "c2-imagery-transformations",
    level: "FR-C2",
    number: 4,
    title: "Transformations: De la Phrase Plate à l'Image Littéraire",
    summary: "Rewrite flat descriptive sentences with simile, metaphor, synaesthesia and personification, following Baudelaire's Correspondances, without overloading them.",
    duration: "18 min",
    sections: [
      {
        heading: "From statement to simile",
        body: [
          "Start with a flat sentence: \"Le lac était calme.\" A simile (\"une comparaison\") links it to something else through a tool word: \"Le lac était calme comme un miroir\" (the cliché), \"Le lac était lisse comme une vitre qu'on vient de laver\" (fresher). The tools: \"comme\", \"tel\" (literary, agreeing with the noun that follows it: \"telle une vitre\"), \"pareil à\", \"semblable à\", \"ainsi que\", \"on aurait dit\" (it looked like), \"avoir l'air de\".",
        ],
        examples: [
          { es: "Le lac était lisse comme une vitre qu'on vient de laver.", en: "The lake was as smooth as a freshly washed pane of glass." },
          { es: "Les toits, pareils à des écailles, brillaient sous la pluie.", en: "The roofs, like scales, shone in the rain." },
          { es: "Sa voix avait l'air de venir de très loin.", en: "Her voice seemed to come from very far away." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence contains a simile?",
            options: [
              "Les nuages, pareils à des moutons, filaient vers l'est.",
              "Les nuages filaient vers l'est.",
              "Les nuages gris filaient vers l'est.",
              "Les nuages filaient très vite vers l'est.",
            ],
            correctIndex: 0,
            explanation: "\"Pareils à\" is a tool word that links the clouds to something else (sheep): a simile. The other sentences only describe the clouds themselves.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (literary narrative).",
            source: "The square was as silent as a church.",
            answer: "La place était silencieuse comme une église.",
            altAnswers: ["La place était aussi silencieuse qu'une église.", "La place était silencieuse, telle une église.", "La place était silencieuse, pareille à une église."],
            explanation: "\"Silencieux comme\" + noun: the adjective agrees with \"la place\", and the tool word \"comme\" builds the simile.",
          },
        ],
      },
      {
        heading: "Tel and on aurait dit",
        body: [
          "\"Tel\" agrees with what follows it in modern usage when used without \"que\": \"Elle avançait, telle une ombre\" (tel + ombre, feminine). It gives a more elevated, literary tone than \"comme\". \"On aurait dit\" + noun is lively and conversational: \"On aurait dit un décor de théâtre.\"",
        ],
        examples: [
          { es: "Elle avançait dans le couloir, telle une ombre.", en: "She moved down the corridor like a shadow." },
          { es: "On aurait dit un décor de théâtre abandonné.", en: "It looked like an abandoned stage set." },
          { es: "Les arbres se dressaient, tels des soldats au garde-à-vous.", en: "The trees stood up straight like soldiers at attention." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, using \"tel\" or \"telle\".",
            source: "The boats slept in the harbour like tired animals.",
            answer: "Les barques dormaient dans le port, telles des bêtes fatiguées.",
            altAnswers: ["Les bateaux dormaient dans le port, tels des animaux fatigués.", "Les barques dormaient dans le port, telles des bêtes épuisées.", "Les bateaux dormaient dans le port, telles des bêtes fatiguées.", "Les barques dormaient dans le port telles des bêtes fatiguées."],
            explanation: "\"Tel\" agrees with the noun that follows it: \"telles des bêtes\" (feminine plural), \"tels des animaux\" (masculine plural).",
          },
        ],
      },
      {
        heading: "Fresh images, dead images",
        body: [
          "The rule of freshness: a comparison is only worth something if it is unexpected yet exact. \"Rouge comme une tomate\", \"doux comme un agneau\" are dead images (\"des clichés\", \"des images éculées\"). Look for the precise, observed detail.",
        ],
        examples: [
          { es: "« Rouge comme une tomate » est une image éculée.", en: "'Red as a tomato' is a worn-out image." },
          { es: "Il était têtu comme une mule.", en: "He was as stubborn as a mule. (a worn-out image)" },
          { es: "Ses joues avaient la couleur des briques mouillées.", en: "Her cheeks were the colour of wet bricks. (fresh and exact)" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which comparison is the freshest?",
            options: [
              "La mer était grise comme une lame de couteau.",
              "La mer était bleue comme le ciel.",
              "La mer était calme comme un lac.",
              "La mer était belle comme une carte postale.",
            ],
            correctIndex: 0,
            explanation: "The knife blade is unexpected yet exact: grey, flat, cold, dangerous. Blue as the sky, calm as a lake and pretty as a postcard are images everyone has read a thousand times.",
          },
        ],
      },
      {
        heading: "Metaphor: fusing the two terms",
        body: [
          "A metaphor removes the tool word and fuses the two terms: \"Le lac était un miroir\", or more subtly, through a verb or a complement: \"le miroir du lac\", \"le lac dormait\". The most elegant metaphors are often hidden in a verb: \"la ville avale les voyageurs\", \"le soir tombe\" (a metaphor so common we no longer see it).",
        ],
        examples: [
          { es: "La ville avale chaque matin des milliers de voyageurs.", en: "Every morning the city swallows thousands of commuters." },
          { es: "Le soir tombe sur la vallée.", en: "Evening is falling over the valley." },
          { es: "Le miroir du lac reflétait les nuages.", en: "The mirror of the lake reflected the clouds." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence hides its metaphor in a verb?",
            options: [
              "Le brouillard dévorait les collines.",
              "Le brouillard était épais comme de la laine.",
              "Le brouillard ressemblait à de la laine.",
              "On aurait dit de la laine.",
            ],
            correctIndex: 0,
            explanation: "\"Dévorer\" turns the fog into a beast without any tool word: a metaphor in the verb. The other three are similes, with \"comme\", \"ressembler à\" or \"on aurait dit\".",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The night [swallowed] the last car.",
            sentence: "La nuit ___ la dernière voiture.",
            answer: "avala",
            altAnswers: ["engloutit", "a avalé", "a englouti", "avale"],
            explanation: "A metaphor hidden in a verb: the night as a mouth. The passé simple \"avala\" suits a literary narrative.",
          },
        ],
      },
      {
        heading: "Personification",
        body: [
          "Personification gives human traits to a thing or an abstraction: \"la maison soupirait sous le vent\", \"les volets clos boudaient la rue\". In French, it often uses a pronominal verb or a verb of feeling: \"la ville s'endort\", \"le jardin s'impatiente\".",
        ],
        examples: [
          { es: "La maison soupirait sous le vent.", en: "The house sighed in the wind." },
          { es: "Les volets clos boudaient la rue.", en: "The closed shutters sulked at the street." },
          { es: "Le vieux quartier s'endort derrière ses grilles.", en: "The old neighbourhood falls asleep behind its gates." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Le vieux piano gémissait sous ses doigts.",
            question: "What does it mean?",
            options: [
              "The old piano groaned under her fingers.",
              "The old piano shook under her fingers.",
              "The old piano was out of tune.",
              "Her fingers moaned on the old piano.",
            ],
            correctIndex: 0,
            explanation: "\"Gémir\" (to groan, to moan) is a human sound given to the piano: personification.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The village wakes up slowly.",
            answer: "Le village s'éveille lentement.",
            altAnswers: ["Le village se réveille lentement.", "Le village s'éveille doucement.", "Le village se réveille doucement."],
            explanation: "Personification with a pronominal verb: \"s'éveiller\" or \"se réveiller\" gives the village a sleeper's body.",
          },
        ],
      },
      {
        heading: "One sentence, four versions",
        body: [
          "Transformation: flat \"Le vent était fort cette nuit-là\" → simile \"Le vent hurlait comme une bête blessée\" → metaphor \"Cette nuit-là, le vent était une bête blessée\" → personification \"Cette nuit-là, le vent rôdait autour de la maison et cognait aux volets.\" The last version is the most subtle: no explicit comparison, just verbs (\"rôder\", \"cogner\").",
        ],
        examples: [
          { es: "Le vent hurlait comme une bête blessée.", en: "The wind howled like a wounded animal. (simile)" },
          { es: "Cette nuit-là, le vent était une bête blessée.", en: "That night, the wind was a wounded animal. (metaphor)" },
          { es: "Cette nuit-là, le vent rôdait autour de la maison et cognait aux volets.", en: "That night the wind prowled round the house and knocked at the shutters." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the simile into a metaphor.",
            source: "La pluie tombait comme un rideau gris.",
            answer: "La pluie était un rideau gris.",
            altAnswers: ["La pluie formait un rideau gris.", "La pluie, un rideau gris, tombait."],
            explanation: "A metaphor drops the tool word \"comme\" and fuses the two terms: the rain is the curtain.",
          },
        ],
      },
      {
        heading: "Synaesthesia: Baudelaire's correspondences",
        body: [
          "\"La synesthésie\" mixes the senses: a sound with a colour, a smell with a texture. It is the poetic programme of Baudelaire's sonnet \"Correspondances\" (Les Fleurs du mal, 1857): « Les parfums, les couleurs et les sons se répondent. / Il est des parfums frais comme des chairs d'enfants, / Doux comme les hautbois, verts comme les prairies ». A perfume is cool like skin (touch), soft like an oboe (sound), green like meadows (sight).",
        ],
        examples: [
          { es: "Les parfums, les couleurs et les sons se répondent.", en: "Perfumes, colours and sounds answer one another." },
          { es: "Il est des parfums frais comme des chairs d'enfants.", en: "There are perfumes cool as children's flesh." },
          { es: "Le parfum du tilleul avait la douceur d'une caresse.", en: "The scent of the lime tree had the softness of a caress." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In \"des parfums doux comme les hautbois\", which sense is used to describe the perfume?",
            options: ["hearing", "sight", "touch", "taste"],
            correctIndex: 0,
            explanation: "The oboe is an instrument, so the smell is compared to a sound. \"Verts comme les prairies\" would be sight, and \"frais comme des chairs\" touch.",
          },
        ],
      },
      {
        heading: "Rimbaud, and il est des",
        body: [
          "Rimbaud pushed it further in \"Voyelles\" (1871), giving each vowel a colour: « A noir, E blanc, I rouge, U vert, O bleu : voyelles ». Note \"il est des\" in Baudelaire: the literary equivalent of \"il y a des\".",
        ],
        examples: [
          { es: "« A noir, E blanc, I rouge, U vert, O bleu : voyelles », écrit Rimbaud.", en: "'A black, E white, I red, U green, O blue: vowels,' writes Rimbaud." },
          { es: "Il est des silences plus éloquents que les mots.", en: "There are silences more eloquent than words." },
          { es: "Il est des villes qu'on n'oublie jamais.", en: "There are cities you never forget." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[There are] wounds that never heal.",
            sentence: "___ blessures qui ne guérissent jamais.",
            answer: "Il est des",
            altAnswers: ["Il y a des"],
            explanation: "\"Il est des\" is the literary form of \"il y a des\", as in Baudelaire; \"il\" stays singular whatever follows.",
          },
        ],
      },
      {
        heading: "Synaesthesia in small doses",
        body: [
          "In prose, synaesthesia works best in small doses: \"une voix rugueuse\" (a rough voice: touch for sound), \"un silence blanc\", \"une odeur chaude de pain\", \"des couleurs criardes\" (screaming colours: sound for sight), \"un rire acide\". The danger is overload: one striking image per paragraph is often enough. Revising means \"alléger\" (lighten) a sentence that piles up three metaphors.",
        ],
        examples: [
          { es: "Il avait une voix rugueuse, comme passée au papier de verre.", en: "He had a rough voice, as if sanded down." },
          { es: "Un silence blanc s'installa entre eux.", en: "A white silence settled between them." },
          { es: "Les néons jetaient sur la rue des couleurs criardes.", en: "The neon lights cast garish colours over the street." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "\"Une lumière bruyante envahit la cuisine.\" What figure is this?",
            options: ["synaesthesia", "a simile", "an ellipsis", "a prolepsis"],
            correctIndex: 0,
            explanation: "\"Bruyant\" (noisy) gives a sound quality to light: synaesthesia. There is no tool word, so it is not a simile, and nothing jumps in time.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "A bitter silence followed his answer.",
            answer: "Un silence amer suivit sa réponse.",
            altAnswers: ["Un silence amer a suivi sa réponse.", "Un silence amer suit sa réponse."],
            explanation: "Synaesthesia: a taste (\"amer\") given to the absence of sound. The adjective follows \"silence\" and agrees with it.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "On aurait dit à un décor de cinéma.",
        answer: "On aurait dit un décor de cinéma.",
        explanation: "\"On aurait dit\" takes the noun directly, with no preposition. The \"à\" comes from \"ressembler à\" (\"cela ressemblait à un décor\").",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The streetlamps kept watch over the empty square.",
        answer: "Les réverbères veillaient sur la place vide.",
        altAnswers: ["Les lampadaires veillaient sur la place vide.", "Les réverbères veillaient sur la place déserte."],
        explanation: "Personification: \"veiller sur\" (to watch over) gives the streetlamps a guardian's role.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "She had an acid laugh.",
        answer: "Elle avait un rire acide.",
        altAnswers: ["Elle avait un rire aigre.", "Elle avait le rire acide."],
        explanation: "Synaesthesia: a taste (\"acide\") applied to a sound.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: The rain knocked at the windowpanes.",
        words: ["La", "pluie", "frappait", "aux", "carreaux."],
        translation: "The rain knocked at the windowpanes.",
        explanation: "\"Frapper à\": personification through a human action; \"à\" + \"les\" contracts to \"aux\".",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Sounds and smells mingle in the evening air.",
        words: ["Les sons", "et les odeurs", "se mêlent", "dans", "l'air du soir."],
        translation: "Sounds and smells mingle in the evening air.",
        explanation: "A reciprocal pronominal verb, \"se mêler\", as in Baudelaire's \"se répondent\": the senses answer one another.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Turn the simile into one with « tel ».",
        source: "Elle avançait comme une somnambule.",
        answer: "Elle avançait, telle une somnambule.",
        altAnswers: ["Elle avançait telle une somnambule."],
        explanation: "\"Tel\" replaces \"comme\" and agrees with the noun after it: \"une somnambule\" is feminine, so \"telle\". The tone becomes more literary.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Il sont des chagrins qu'on ne dit à personne.",
        answer: "Il est des chagrins qu'on ne dit à personne.",
        altAnswers: ["Il y a des chagrins qu'on ne dit à personne."],
        explanation: "\"Il est des\" is an impersonal phrase, so the verb stays singular whatever follows: \"il est des chagrins\", just as \"il y a des chagrins\".",
      },
      {
        type: "dictation",
        audio: "Les toits luisaient, tels des miroirs.",
        explanation: "\"Tels\" agrees with \"des miroirs\" (masculine plural).",
      },
      {
        type: "speak",
        text: "Il est des parfums frais comme des chairs d'enfants, doux comme les hautbois, verts comme les prairies.",
        tip: "Three comparisons, three equal beats: \"frais\", \"doux\", \"verts\".",
        explanation: "Baudelaire's \"Correspondances\": touch, sound and sight for a smell.",
      },
    ],
  },
  {
    slug: "c2-creative-writing-3",
    level: "FR-C2",
    number: 5,
    title: "L'Écriture Créative, Part 3 of 3",
    summary: "Constraints and revision: the Oulipo, Queneau's Exercices de style and Perec's lipogram; rhythm and sensory detail; and the French editor's war on repetition: élaguer, resserrer, retravailler.",
    duration: "19 min",
    sections: [
      {
        heading: "The Oulipo: constraint as an engine",
        body: [
          "\"L'Oulipo\" (Ouvroir de littérature potentielle, workshop of potential literature) was founded in 1960 by the writer Raymond Queneau and the mathematician François Le Lionnais. Its idea: a formal constraint, far from limiting the writer, forces new ideas. Members included Georges Perec, Italo Calvino and Jacques Roubaud.",
        ],
        examples: [
          { es: "L'Oulipo a été fondé en 1960 par l'écrivain Raymond Queneau et le mathématicien François Le Lionnais.", en: "The Oulipo was founded in 1960 by the writer Raymond Queneau and the mathematician Le Lionnais." },
          { es: "La contrainte, loin de brider l'écrivain, le pousse à inventer.", en: "Far from restricting the writer, the constraint pushes him to invent." },
          { es: "Georges Perec et Italo Calvino ont rejoint l'Oulipo.", en: "Georges Perec and Italo Calvino joined the Oulipo." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Far from discouraging her, the rule forced her to look for new words.",
            answer: "Loin de la décourager, la règle l'a obligée à chercher de nouveaux mots.",
            altAnswers: ["Loin de la décourager, la règle l'a forcée à chercher de nouveaux mots.", "Loin de la décourager, la règle l'a poussée à chercher de nouveaux mots.", "La règle, loin de la décourager, l'a obligée à chercher de nouveaux mots.", "Loin de la décourager, la contrainte l'a obligée à chercher de nouveaux mots."],
            explanation: "\"Loin de\" + infinitive opens the sentence; \"obliger quelqu'un à\" + infinitive. The participle \"obligée\" agrees with the preceding direct object \"l'\" (her).",
          },
        ],
      },
      {
        heading: "Queneau's Exercices de style",
        body: [
          "Queneau's \"Exercices de style\" (1947) tells the same trivial anecdote (a man on a Paris bus, a dispute, a button on a coat) ninety-nine times in ninety-nine styles: official letter, dream, onomatopoeia, alexandrines, slang.",
        ],
        examples: [
          { es: "Queneau raconte la même anecdote dans des styles différents.", en: "Queneau tells the same anecdote in different styles." },
          { es: "Le sujet est banal ; seul le style change.", en: "The subject is trivial; only the style changes." },
          { es: "Une version est en alexandrins, une autre en argot.", en: "One version is in alexandrines, another in slang." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Queneau tells the anecdote [ninety-nine times].",
            sentence: "Queneau raconte l'anecdote ___.",
            answer: "quatre-vingt-dix-neuf fois",
            altAnswers: ["99 fois"],
            explanation: "Ninety-nine is \"quatre-vingt-dix-neuf\" in France (four-twenty-nineteen), with hyphens; \"fois\" for times.",
          },
        ],
      },
      {
        heading: "One anecdote, three styles",
        body: [
          "Here are original variations in that spirit, on our own anecdote. Neutral: \"Ce matin, dans le métro, un homme a marché sur le pied d'une dame, qui l'a traité de rustre.\" Telegraphic: \"Métro. Matin. Pied écrasé. Dame furieuse. Rustre.\" Formal: \"Il m'a été donné d'assister, ce jour, à un incident regrettable au cours duquel un voyageur a foulé le pied d'une passagère.\"",
        ],
        examples: [
          { es: "Ce matin, dans le métro, un homme a marché sur le pied d'une dame.", en: "This morning on the metro, a man stepped on a woman's foot. (neutral)" },
          { es: "Métro. Matin. Pied écrasé. Dame furieuse.", en: "Metro. Morning. Foot crushed. Woman furious." },
          { es: "Il m'a été donné d'assister à un incident regrettable.", en: "I happened to witness an unfortunate incident." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Two passengers argue on a bus. Which version is in the formal style?",
            options: [
              "Il m'a été donné d'observer un regrettable échange de propos entre deux voyageurs.",
              "Deux mecs se sont engueulés dans le bus.",
              "Bus. Midi. Dispute. Cris.",
              "Deux voyageurs se sont disputés dans le bus.",
            ],
            correctIndex: 0,
            explanation: "The formal style uses the impersonal \"il m'a été donné de\", learned nouns and a euphemism (\"un échange de propos\"). The second is slang, the third telegraphic, the fourth neutral.",
          },
        ],
      },
      {
        heading: "Perec's lipogram",
        body: [
          "Perec's novel \"La Disparition\" (1969) is a lipogram: some three hundred pages without a single letter e, the most frequent letter in French. Try it yourself; this original sentence contains no e: « Un soir, à Lyon, un garçon distrait sortit sans anorak. Il plut. Il courut jusqu'à son logis, trop tard : tout son habit gouttait. » The constraint forces surprising word choices: \"logis\" instead of \"maison\", \"habit\" instead of \"vêtements\".",
        ],
        examples: [
          { es: "La Disparition est un roman écrit sans la lettre e.", en: "Perec's novel is written without the letter e." },
          { es: "Un soir, à Lyon, un garçon distrait sortit sans anorak. Il plut.", en: "One evening in Lyon, an absent-minded boy went out without a coat. It rained." },
          { es: "Faute de « maison », Perec écrit « logis » ou « abri ».", en: "Without the French word for house, Perec writes words for dwelling or shelter." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What is a lipogram?",
            options: ["A text written without using a particular letter.", "A text that reads the same backwards.", "A poem in alexandrines.", "A story told ninety-nine times."],
            correctIndex: 0,
            explanation: "\"Un lipogramme\" omits a letter: Perec's \"La Disparition\" has no e.",
          },
          {
            type: "multiple-choice",
            question: "Which sentence could appear in a lipogram without the letter e?",
            options: ["Il partit sans un mot.", "Elle partit sans un mot.", "Il partit sans rien dire.", "Il quitta sa demeure."],
            correctIndex: 0,
            explanation: "\"Il partit sans un mot\" contains no e. \"Elle\", \"dire\" and \"demeure\" all contain one, which is exactly the kind of word Perec had to work around.",
          },
        ],
      },
      {
        heading: "The war on repetition",
        body: [
          "French editors and teachers are relentless about repetition: the same noun or verb twice in two sentences is marked as a fault, far more than in English. Three weapons: pronouns (\"La maison était vieille. La maison sentait l'humidité\" → \"La maison était vieille ; elle sentait l'humidité\"), synonyms and periphrases (\"la demeure\", \"la bâtisse\", \"le vieux logis\"), and restructuring (\"Vieille, la maison sentait l'humidité\").",
        ],
        examples: [
          { es: "La maison était vieille ; elle sentait l'humidité.", en: "The house was old; it smelled of damp." },
          { es: "Vieille, la maison sentait l'humidité.", en: "The old house smelled of damp." },
          { es: "La bâtisse dominait le village depuis trois siècles.", en: "The building had towered over the village for three centuries." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which revision best avoids repeating \"le jardin\"?",
            options: [
              "Le jardin était immense ; il descendait jusqu'à la rivière.",
              "Le jardin était immense ; le jardin descendait jusqu'à la rivière.",
              "Le jardin était immense ; le parc, l'enclos, le verger descendait jusqu'à la rivière.",
              "Il y avait un jardin qui était immense et qui descendait jusqu'à la rivière.",
            ],
            correctIndex: 0,
            explanation: "A pronoun is the simplest fix: \"il descendait\". Repeating the noun is the fault itself, piling up synonyms is the comic \"valse des synonymes\", and \"il y avait... qui\" adds lazy padding.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The car was new; [it shone] in the sun.",
            sentence: "La voiture était neuve ; ___ au soleil.",
            answer: "elle brillait",
            altAnswers: ["elle étincelait", "elle luisait"],
            explanation: "A pronoun replaces the repeated noun: \"la voiture\" becomes \"elle\".",
          },
        ],
      },
      {
        heading: "Lazy verbs",
        body: [
          "Beware of the lazy verbs: \"il y a\", \"être\", \"avoir\", \"faire\", \"mettre\", \"dire\". \"Il y avait un vieil homme qui marchait\" → \"Un vieil homme marchait\". \"Il a dit qu'il viendrait\" → \"Il a promis de venir\", \"il a assuré qu'il viendrait\". Each precise verb adds meaning.",
        ],
        examples: [
          { es: "Un vieil homme marchait le long du canal.", en: "An old man was walking along the canal." },
          { es: "Il a promis de venir avant midi.", en: "He promised to come before noon." },
          { es: "Elle a assuré qu'elle rembourserait tout.", en: "She gave her word that she would pay everything back." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it to remove « il y avait ».",
            source: "Il y avait une vieille femme qui nourrissait les pigeons.",
            answer: "Une vieille femme nourrissait les pigeons.",
            altAnswers: ["Une vieille dame nourrissait les pigeons.", "Une femme âgée nourrissait les pigeons."],
            explanation: "Remove the empty \"il y avait... qui\": the subject goes straight to the verb.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "He [admitted] that he had lied.",
            sentence: "Il a ___ qu'il avait menti.",
            answer: "avoué",
            altAnswers: ["reconnu", "admis", "confessé"],
            explanation: "A precise verb replaces the lazy \"il a dit qu'il avait menti\": \"avouer\" adds the idea of a confession.",
          },
        ],
      },
      {
        heading: "The synonym waltz",
        body: [
          "But be careful: the over-zealous search for synonyms produces \"la valse des synonymes\", the comic effect of calling a cat \"le félin\", \"l'animal\", \"le petit carnivore\" in successive lines. Sometimes the pronoun or the restructuring is better than a synonym.",
        ],
        examples: [
          { es: "Évitez la valse des synonymes : le félin, l'animal, le petit carnivore...", en: "Avoid the synonym waltz: the feline, the animal, the little carnivore..." },
          { es: "Le médecin entra. Le praticien posa sa sacoche ; l'homme de l'art soupira.", en: "The doctor came in. The practitioner put down his bag; the medical man sighed. (comic)" },
          { es: "Le médecin entra, posa sa sacoche et soupira.", en: "The doctor came in, put down his bag and sighed. (better)" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence: replace the comic synonym with a pronoun.",
            source: "Le chien aboya. Le canidé se recoucha.",
            answer: "Le chien aboya, puis il se recoucha.",
            altAnswers: ["Le chien aboya. Il se recoucha.", "Le chien aboya, puis se recoucha.", "Le chien aboya et se recoucha.", "Le chien aboya, et il se recoucha.", "Le chien aboya puis se recoucha."],
            explanation: "\"Le canidé\" is the synonym waltz: a learned word only to avoid repeating \"le chien\". A pronoun, or one subject for two verbs, is simpler.",
          },
        ],
      },
      {
        heading: "The verbs of revision",
        body: [
          "Revision verbs every French writer knows: \"élaguer\" (to prune: cut what is superfluous), \"resserrer\" (to tighten), \"retravailler\" (to rework), \"alléger\" (to lighten), \"étoffer\" (to flesh out a thin passage), \"remanier\" (to rework the structure). \"Un premier jet\" is a first draft; \"une ébauche\", a sketch.",
        ],
        examples: [
          { es: "Il faut élaguer ce paragraphe : il fait le double de la longueur nécessaire.", en: "You need to prune this paragraph: it's twice as long as it needs to be." },
          { es: "Ce n'est qu'un premier jet, je vais le retravailler.", en: "It's only a first draft; I'm going to rework it." },
          { es: "Le personnage de la mère mériterait d'être étoffé.", en: "The mother's character deserves to be fleshed out." },
        ],
        checkpoint: [
          {
            type: "matching",
            instructions: "Match each revision verb with its meaning.",
            pairs: [
              { left: "élaguer", right: "to prune" },
              { left: "resserrer", right: "to tighten" },
              { left: "étoffer", right: "to flesh out" },
              { left: "remanier", right: "to restructure" },
              { left: "alléger", right: "to lighten" },
            ],
            explanation: "The working vocabulary of revision.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "This chapter is only a sketch.",
            answer: "Ce chapitre n'est qu'une ébauche.",
            altAnswers: ["Ce chapitre n'est qu'un premier jet.", "Ce chapitre n'est qu'un brouillon.", "Ce chapitre est seulement une ébauche."],
            explanation: "\"Une ébauche\" is a sketch, \"un premier jet\" a first draft; \"ne... que\" means only.",
          },
        ],
      },
      {
        heading: "Rhythm: long then short, and threes",
        body: [
          "Rhythm comes from sentence length. A long, winding sentence followed by a very short one creates a shock: « Elle avait traversé la ville entière sous la pluie, sans parapluie, en se répétant ce qu'elle lui dirait, phrase après phrase, comme on répète un rôle. Il n'était pas là. » Ternary rhythms (three elements) give a sense of completion: \"Il pleuvait, il faisait nuit, elle était seule.\"",
        ],
        examples: [
          { es: "Elle avait traversé la ville entière sous la pluie. Il n'était pas là.", en: "She had crossed the whole city in the rain. He wasn't there." },
          { es: "Il pleuvait, il faisait nuit, elle était seule.", en: "It was raining, it was dark, she was alone." },
          { es: "Il attendit des heures, en relisant ses notes, en guettant chaque pas dans l'escalier. Personne.", en: "He waited for hours, rereading his notes, listening for every step on the stairs. Nobody." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: The wind was blowing, the sea was roaring, the harbour was asleep.",
            words: ["Le vent soufflait,", "la mer grondait,", "le port", "dormait."],
            translation: "The wind was blowing, the sea was roaring, the harbour was asleep.",
            explanation: "A ternary rhythm: three short clauses in the imperfect, the last one closing the picture.",
          },
        ],
      },
      {
        heading: "Show, don't tell",
        body: [
          "Sensory detail replaces abstraction. Not \"la cuisine était accueillante\" but \"ça sentait le café et le pain grillé, et la radio chantonnait près de l'évier\". Show, don't tell: in French workshops, \"montrer plutôt que dire\".",
        ],
        examples: [
          { es: "Ça sentait le café et le pain grillé, et la radio chantonnait près de l'évier.", en: "It smelled of coffee and toast, and the radio was humming by the sink." },
          { es: "Il était nerveux.", en: "He was nervous. (telling)" },
          { es: "Ses mains tremblaient en ouvrant l'enveloppe.", en: "His hands shook as he opened the envelope. (showing)" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence shows impatience instead of naming it?",
            options: ["Il tapotait la table et regardait sans cesse la porte.", "Il était impatient.", "Il était très impatient.", "Il se sentait impatient."],
            correctIndex: 0,
            explanation: "Tapping the table and watching the door are details the reader sees and interprets. The other three name the feeling, which is telling.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Show rather than tell.",
            answer: "Montrer plutôt que dire.",
            altAnswers: ["Il faut montrer plutôt que dire.", "Montrez plutôt que de dire.", "Montre plutôt que de dire."],
            explanation: "The workshop rule in French: \"montrer plutôt que dire\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "You need to tighten this dialogue.",
        answer: "Il faut resserrer ce dialogue.",
        altAnswers: ["Tu dois resserrer ce dialogue.", "Vous devez resserrer ce dialogue.", "Il faudrait resserrer ce dialogue."],
        explanation: "\"Resserrer\" (to tighten) a dialogue or a passage: cut the slack between the lines.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Change it to remove « il y avait ».",
        source: "Il y avait un chien qui aboyait dans la cour.",
        answer: "Un chien aboyait dans la cour.",
        explanation: "Drop the empty \"il y avait... qui\": a direct subject and a precise verb.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "La contrainte oblige l'écrivain d'inventer.",
        answer: "La contrainte oblige l'écrivain à inventer.",
        altAnswers: ["La contrainte force l'écrivain à inventer."],
        explanation: "\"Obliger quelqu'un à\" + infinitive (like \"forcer à\", \"pousser à\"). \"Obliger de\" survives only in the passive: \"être obligé de\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The shops were closed, the streets empty, the city silent.",
        answer: "Les magasins étaient fermés, les rues vides, la ville silencieuse.",
        altAnswers: ["Les boutiques étaient fermées, les rues vides, la ville silencieuse.", "Les magasins étaient fermés, les rues désertes, la ville silencieuse.", "Les magasins étaient fermés, les rues étaient vides, la ville était silencieuse."],
        explanation: "A ternary rhythm: the verb is given once and understood in the next two clauses, and each adjective agrees with its noun.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: It smelled of wax and old paper.",
        words: ["Ça", "sentait", "la cire", "et le", "vieux papier."],
        translation: "It smelled of wax and old paper.",
        explanation: "\"Sentir\" + noun with the definite article: to smell of. Sensory detail instead of an abstract adjective.",
      },
      {
        type: "dictation",
        audio: "Il plut. Il courut jusqu'à son logis.",
        explanation: "A lipogram without e: passé simple \"plut\" (pleuvoir) and \"courut\" (courir).",
      },
      {
        type: "speak",
        text: "Il avait tout préparé, les fleurs, le dîner, le discours. Elle ne vint pas.",
        tip: "Let the list of three run, then stop dead before the last sentence.",
        explanation: "A long sentence with a ternary list, then a very short one: the shock comes from the rhythm.",
      },
      {
        type: "listen-choose",
        audio: "Épuisé, le coureur s'assit sur le trottoir.",
        question: "What does it mean?",
        options: [
          "The exhausted runner sat down on the pavement.",
          "The runner exhausted himself on the pavement.",
          "The runner sat down to rest on the road.",
          "Exhausted, the pavement held the runner.",
        ],
        correctIndex: 0,
        explanation: "A detached adjective at the head of the sentence (\"Épuisé,\") replaces a second clause; it describes the runner, the subject.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: This passage deserves to be fleshed out.",
        words: ["Ce", "passage", "mériterait", "d'être", "étoffé."],
        translation: "This passage deserves to be fleshed out.",
        explanation: "\"Étoffer\" (from \"étoffe\", fabric): to add substance.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Ce personnage mériterait être étoffé.",
        answer: "Ce personnage mériterait d'être étoffé.",
        explanation: "\"Mériter de\" + infinitive: \"mériterait d'être étoffé\". Without \"de\", the infinitive cannot follow \"mériter\".",
      },
    ],
  },
  {
    slug: "c2-editor-writer-dialogue-lab",
    level: "FR-C2",
    number: 6,
    title: "Dialogue Lab: L'Éditrice et l'Écrivain",
    summary: "Receive and answer criticism of a draft: narrative tension, rhythm, dialogue and point of view; le passage s'essouffle, ce personnage manque d'épaisseur, je vais retravailler la fin.",
    duration: "18 min",
    sections: [
      {
        heading: "The verdict, wrapped in praise",
        body: [
          "Claire Morin, an editor, has read the manuscript of a first novel by Antoine Leroy. They meet at her office. « Antoine, je vais être franche avec vous : il y a dans ce manuscrit un vrai talent, une voix. Le début est remarquable, la scène de l'enterrement m'a beaucoup touchée. Mais en l'état, le texte n'est pas publiable. — Ah. Je m'en doutais un peu... — Ne faites pas cette tête. C'est un compliment, croyez-moi : je ne perdrais pas mon temps avec un texte qui ne m'intéresse pas. »",
        ],
        examples: [
          { es: "Je vais être franche avec vous.", en: "I'm going to be frank with you." },
          { es: "Il y a dans ce manuscrit un vrai talent, une voix.", en: "There's real talent in this manuscript, a voice." },
          { es: "En l'état, le texte n'est pas publiable.", en: "As it stands, the text isn't publishable." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "\"En l'état, ce manuscrit ne peut pas partir à l'imprimerie.\" What does \"en l'état\" mean here?",
            options: ["As it stands", "In the state of mind", "In this country", "In the end"],
            correctIndex: 0,
            explanation: "\"En l'état\": in its current state, as it stands, so it could change after revision. It has nothing to do with a country or a state of mind, and it does not mean finally.",
          },
        ],
      },
      {
        heading: "Praise, reservation, reassurance",
        body: [
          "Classic editorial diplomacy: praise first (\"un vrai talent, une voix\"), then the reservation (\"mais en l'état\", as it stands), then reassurance. \"Je vais être franche avec vous\" announces a difficult truth. \"Je m'en doutais\" (I suspected as much) uses \"se douter de\", a false friend: it means to suspect, not to doubt.",
        ],
        examples: [
          { es: "Je m'en doutais un peu.", en: "I rather suspected as much." },
          { es: "Je me doutais qu'il serait en retard.", en: "I suspected he'd be late." },
          { es: "Je doute qu'il vienne.", en: "I doubt he'll come." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Your colleague says: \"Je me doutais qu'il refuserait.\" What does she mean?",
            options: ["She suspected he would refuse.", "She doubted he would refuse.", "She was afraid he would refuse.", "She hoped he would refuse."],
            correctIndex: 0,
            explanation: "\"Se douter que\" is a false friend: it means to suspect. To doubt is \"douter que\", without the pronoun and followed by the subjunctive.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (Antoine speaking).",
            source: "We suspected he would leave.",
            answer: "Nous nous doutions qu'il partirait.",
            altAnswers: ["On se doutait qu'il partirait.", "Nous nous doutions qu'il s'en irait.", "On se doutait qu'il s'en irait."],
            explanation: "\"Se douter que\" + indicative (here the conditional as future in the past): to suspect. The pronoun follows the subject: \"nous nous doutions\".",
          },
        ],
      },
      {
        heading: "Warmth, and a hypothetical conditional",
        body: [
          "\"Ne faites pas cette tête\" (don't look like that) is a warm, slightly familiar phrase. The conditional \"je ne perdrais pas mon temps\" is hypothetical: if the text didn't interest me, I wouldn't waste my time.",
        ],
        examples: [
          { es: "Ne faites pas cette tête.", en: "Don't look like that." },
          { es: "Je ne perdrais pas mon temps avec un texte qui ne m'intéresse pas.", en: "I wouldn't waste my time on a text that didn't interest me." },
          { es: "Je ne vous aurais pas appelé si le texte était mauvais.", en: "I wouldn't have called you if the text were bad." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "The editor says: \"Je ne lirais pas la suite si le début ne me plaisait pas.\" What is she telling the writer?",
            options: ["She likes the beginning.", "She doesn't like the beginning.", "She has already read the rest.", "She refuses to read the rest."],
            correctIndex: 0,
            explanation: "The conditional describes an unreal situation: if she didn't like the beginning, she wouldn't read on. Since she is reading on, she likes it.",
          },
        ],
      },
      {
        heading: "Three criticisms",
        body: [
          "« Concrètement, trois choses. D'abord, le milieu du roman s'essouffle : à partir du chapitre six, on tourne en rond, la tension retombe. Ensuite, le personnage du frère manque d'épaisseur : il n'existe que pour servir l'intrigue. Enfin, vos dialogues sont trop écrits, personne ne parle comme ça. Et il y a un problème de point de vue : au chapitre neuf, on entre soudain dans la tête de la mère, alors que tout le reste est en focalisation interne sur le narrateur. »",
        ],
        examples: [
          { es: "Le milieu du roman s'essouffle.", en: "The middle of the novel runs out of steam." },
          { es: "À partir du chapitre six, on tourne en rond.", en: "From chapter six on, it goes round in circles." },
          { es: "Au chapitre neuf, on entre soudain dans la tête de la mère.", en: "In chapter nine, we suddenly enter the mother's head." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "From the second part on, the tension drops.",
            answer: "À partir de la deuxième partie, la tension retombe.",
            altAnswers: ["À partir de la seconde partie, la tension retombe.", "Dès la deuxième partie, la tension retombe.", "À partir de la deuxième partie, la tension baisse."],
            explanation: "\"La tension retombe\" (falls back) is the editor's phrase; \"à partir de\" + the point where it starts.",
          },
        ],
      },
      {
        heading: "The editor's key phrases",
        body: [
          "Key phrases: \"s'essouffler\" (to run out of breath), \"tourner en rond\" (to go round in circles), \"la tension retombe\" (falls back), \"manquer d'épaisseur\" (to lack depth), \"des dialogues trop écrits\" (too written: stilted, unnatural), \"un problème de point de vue\". The structure \"D'abord... Ensuite... Enfin\" organises the criticism.",
        ],
        examples: [
          { es: "Le personnage du frère manque d'épaisseur.", en: "The brother's character lacks depth." },
          { es: "Vos dialogues sont trop écrits, personne ne parle comme ça.", en: "Your dialogue is too stilted; nobody talks like that." },
          { es: "Ce chapitre tourne en rond.", en: "This chapter goes round in circles." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The scenes between the two sisters are [too stilted].",
            sentence: "Les scènes entre les deux sœurs sont ___.",
            answer: "trop écrites",
            altAnswers: ["trop artificielles", "trop littéraires", "trop guindées"],
            explanation: "\"Trop écrit\": it sounds like writing, not speech. The adjective agrees with \"les scènes\" (feminine plural): \"trop écrites\".",
          },
        ],
      },
      {
        heading: "Ne... que: a sharp criticism",
        body: [
          "\"Il n'existe que pour servir l'intrigue\": the restrictive \"ne... que\" is a sharp criticism: the character is a mere function. Compare with \"un personnage qui a sa vie propre\" (a character with a life of his own).",
        ],
        examples: [
          { es: "Il n'existe que pour servir l'intrigue.", en: "He only exists to serve the plot." },
          { es: "Cette scène n'a qu'une fonction : préparer la fin.", en: "This scene has only one purpose: to set up the ending." },
          { es: "Le grand-père, lui, a sa vie propre.", en: "The grandfather, on the other hand, has a life of his own." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Cette scène ne sert qu'à relancer l'intrigue.",
            question: "What does it mean?",
            options: [
              "This scene only serves to get the plot moving again.",
              "This scene doesn't serve the plot.",
              "This scene serves the plot, and something else.",
              "This scene relaunches the plot only once.",
            ],
            correctIndex: 0,
            explanation: "\"Ne... que\" = only: the scene is a mere device. Without \"que\", \"ne sert pas\" would mean it serves no purpose.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it a criticism with « ne... que ».",
            source: "La voisine sert à faire avancer l'intrigue.",
            answer: "La voisine ne sert qu'à faire avancer l'intrigue.",
            explanation: "\"Ne... que\" restricts: the neighbour does nothing else, she is a mere function. \"Que\" goes before what is restricted (\"à faire avancer\").",
          },
        ],
      },
      {
        heading: "Concede, then propose",
        body: [
          "Antoine answers: « Pour le milieu, vous avez raison, je le sentais en l'écrivant. Je vais resserrer, couper peut-être deux chapitres. Pour le frère, en revanche, je ne suis pas tout à fait d'accord : il est volontairement en retrait, c'est le sujet du livre. — Alors il faut que le lecteur le sente. Pour l'instant, il a l'air d'un oubli, pas d'un choix. — D'accord. Je vais retravailler ses scènes. Et la fin ? — La fin, je n'y toucherais pas. »",
        ],
        examples: [
          { es: "Vous avez raison, je le sentais en l'écrivant.", en: "You're right, I could feel it as I was writing it." },
          { es: "Je vais resserrer, couper peut-être deux chapitres.", en: "I'm going to tighten it, maybe cut two chapters." },
          { es: "Il faut que le lecteur le sente.", en: "The reader has to feel that." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Antoine disagrees with his editor about the brother. Which reply is the most professional?",
            options: [
              "Je ne suis pas tout à fait d'accord : il est volontairement en retrait.",
              "Vous n'avez rien compris à mon livre.",
              "C'est vous qui manquez d'épaisseur.",
              "D'accord, je supprime le personnage.",
            ],
            correctIndex: 0,
            explanation: "A softened disagreement (\"pas tout à fait\") with a reason keeps the conversation professional. Accusing the editor or insulting her is rude, and cutting the character at once gives up the argument.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (Antoine speaking to his editor).",
            source: "I'm going to rework the ending.",
            answer: "Je vais retravailler la fin.",
            altAnswers: ["Je vais reprendre la fin.", "Je vais remanier la fin.", "Je vais réécrire la fin."],
            explanation: "\"Retravailler\" is the writer's verb for reworking a passage.",
          },
        ],
      },
      {
        heading: "Defending a choice",
        body: [
          "A professional answer concedes (\"vous avez raison\"), proposes (\"je vais resserrer\"), and defends a choice with nuance (\"je ne suis pas tout à fait d'accord : il est volontairement en retrait\"). \"En retrait\" means in the background, held back. The editor's reply, \"il faut que le lecteur le sente\" (subjunctive), turns the disagreement into a solution.",
        ],
        examples: [
          { es: "Il est volontairement en retrait, c'est le sujet du livre.", en: "He's deliberately in the background; that's what the book is about." },
          { es: "Je tiens à garder cette scène : elle prépare la fin.", en: "I'm keen to keep this scene: it sets up the ending." },
          { es: "Je ne suis pas tout à fait d'accord sur ce point.", en: "I don't entirely agree on that point." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: The audience has to understand it.",
            words: ["Il faut", "que", "le public", "le", "comprenne."],
            translation: "The audience has to understand it.",
            explanation: "\"Il faut que\" + subjunctive: \"comprenne\". The object pronoun \"le\" goes before the verb.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Il faut que le lecteur comprend ce choix.",
            answer: "Il faut que le lecteur comprenne ce choix.",
            explanation: "\"Il faut que\" always takes the subjunctive: \"comprenne\", not the indicative \"comprend\".",
          },
        ],
      },
      {
        heading: "Advice phrased as preference",
        body: [
          "\"Il a l'air d'un oubli, pas d'un choix\" is a precise criticism: an absence that looks accidental rather than deliberate. And the last line, with the conditional \"je n'y toucherais pas\" (I wouldn't touch it), is advice phrased as a personal preference: elegant and firm.",
        ],
        examples: [
          { es: "Pour l'instant, il a l'air d'un oubli, pas d'un choix.", en: "For now it looks like an oversight, not a choice." },
          { es: "La fin, je n'y toucherais pas.", en: "As for the ending, I wouldn't touch it." },
          { es: "À votre place, je couperais ce chapitre.", en: "If I were you, I'd cut this chapter." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (the editor speaking).",
            source: "As for the title, I wouldn't change it.",
            answer: "Le titre, je ne le changerais pas.",
            altAnswers: ["Quant au titre, je ne le changerais pas.", "Pour le titre, je ne le changerais pas.", "Le titre, je n'y toucherais pas."],
            explanation: "The topic goes first (\"Le titre,\"), then a pronoun picks it up (\"le\"); the conditional \"changerais\" turns the advice into a personal preference.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (the editor speaking, formal).",
        source: "As it stands, the project is too expensive.",
        answer: "En l'état, le projet est trop cher.",
        altAnswers: ["En l'état, le projet coûte trop cher.", "Tel quel, le projet est trop cher.", "En l'état actuel, le projet est trop cher.", "En l'état, le projet est trop coûteux."],
        explanation: "\"En l'état\" = as it stands, in its present form.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Halfway through, the investigation goes round in circles.",
        answer: "À mi-parcours, l'enquête tourne en rond.",
        altAnswers: ["Au milieu du roman, l'enquête tourne en rond.", "À mi-chemin, l'enquête tourne en rond.", "Au milieu du livre, l'enquête tourne en rond."],
        explanation: "\"Tourner en rond\": to go round in circles, the image for a plot that no longer moves forward.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "The police inspector [lacks depth].",
        sentence: "Le commissaire ___.",
        answer: "manque d'épaisseur",
        altAnswers: ["manque de profondeur"],
        explanation: "\"Manquer d'épaisseur\": the standard editorial criticism of a flat character.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "He stays deliberately in the shadows.",
        answer: "Il reste volontairement dans l'ombre.",
        altAnswers: ["Il reste délibérément dans l'ombre.", "Il se tient volontairement dans l'ombre.", "Il reste volontairement en retrait."],
        explanation: "\"Rester dans l'ombre\" or \"en retrait\": held back, in the background, by choice (\"volontairement\").",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "For now, it looks like a mistake, not a decision.",
        answer: "Pour l'instant, ça a l'air d'une erreur, pas d'une décision.",
        altAnswers: ["Pour l'instant, cela a l'air d'une erreur, pas d'une décision.", "Pour le moment, ça a l'air d'une erreur, pas d'une décision.", "Pour l'instant, on dirait une erreur, pas une décision.", "Pour l'instant, cela ressemble à une erreur, pas à une décision."],
        explanation: "\"Avoir l'air de\" + noun, repeated in the contrast: \"pas d'une décision\".",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: I understood it as I reread it.",
        words: ["Je", "l'ai", "compris", "en", "le relisant."],
        translation: "I understood it as I reread it.",
        explanation: "The gérondif \"en le relisant\" expresses simultaneity; the pronoun goes between \"en\" and the participle.",
      },
      {
        type: "dictation",
        audio: "La tension retombe à partir du chapitre huit.",
        explanation: "\"La tension retombe\": the tension falls back; \"à partir du\" + chapter.",
      },
      {
        type: "speak",
        text: "Je vais être franche avec vous : en l'état, le texte n'est pas publiable.",
        prompt: "Say it in French (as the editor): I'm going to be frank with you: as it stands, the text isn't publishable.",
        explanation: "The announcement formula, then the verdict.",
      },
    ],
  },
  {
    slug: "c2-microfiction-mission",
    level: "FR-C2",
    number: 7,
    title: "Real-World Mission: Une Microfiction de 100 Mots",
    summary: "Write a microfiction with a meaningful title, an ellipsis, an open ending or a twist and one powerful image; then rewrite it under an Oulipo-style constraint.",
    duration: "19 min",
    sections: [
      {
        heading: "The brief: a whole story in a hundred words",
        body: [
          "Microfiction (\"la microfiction\", \"la nouvelle-éclair\") tells a whole story in about a hundred words. Every element must work twice: the title adds information, the ellipsis replaces pages, the image carries emotion, the last line reopens everything. Here is an original model, titled « Correspondance »:",
        ],
        examples: [
          { es: "La microfiction raconte une histoire entière en cent mots.", en: "Microfiction tells a whole story in a hundred words." },
          { es: "Chaque élément doit servir deux fois.", en: "Every element has to do two jobs." },
          { es: "Le titre ajoute une information.", en: "The title adds information." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In a microfiction, what should the title do?",
            options: ["Add information to the story.", "Name the subject plainly.", "Summarise the ending.", "Repeat the first line."],
            correctIndex: 0,
            explanation: "At a hundred words, every element works twice, so the title must add something. Naming the subject or summarising the ending wastes it, and repeating the first line adds nothing.",
          },
        ],
      },
      {
        heading: "The model: « Correspondance »",
        body: [
          "« Pendant quarante ans, il lui laissa chaque matin un mot sur le frigo. “Pense au pain.” “Il pleut, prends ton écharpe.” “Je t'aime, idiote.” Elle répondait dessous, de son écriture penchée. / Il mourut un mardi. / Trois mois plus tard, leur fille vint vider l'appartement. Les papiers jaunis couvraient la porte du frigo comme des écailles. Le plus récent, tout en haut, n'était pas de lui. Il datait de la veille. De l'écriture penchée : “Pense au pain.” » (each slash marks a new paragraph)",
        ],
        examples: [
          { es: "Pendant quarante ans, il lui laissa chaque matin un mot sur le frigo.", en: "For forty years he left her a note on the fridge every morning." },
          { es: "Elle répondait dessous, de son écriture penchée.", en: "She replied underneath, in her slanting handwriting." },
          { es: "Le plus récent, tout en haut, n'était pas de lui.", en: "The most recent, at the very top, wasn't from him." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In \"Correspondance\", what does the final line suggest?",
            options: ["The widow is still writing notes to her dead husband.", "The husband is still alive.", "The daughter wrote the note.", "The notes were never real."],
            correctIndex: 0,
            explanation: "The last note is in her slanting handwriting and dated the day before: she continues the ritual alone. Nothing suggests the husband is alive, and the daughter only finds the note.",
          },
        ],
      },
      {
        heading: "How the model works",
        body: [
          "Analyse it: the title plays on two meanings (letters exchanged, and Baudelaire's correspondences between things); \"Il mourut un mardi\" is a one-line paragraph that stands for grief; \"Trois mois plus tard\" is the ellipsis; \"comme des écailles\" is the image (forty years of notes as a creature's skin); and the chute shows, without saying it, that the widow still writes to him.",
        ],
        examples: [
          { es: "Il mourut un mardi.", en: "He died on a Tuesday." },
          { es: "Trois mois plus tard, leur fille vint vider l'appartement.", en: "Three months later their daughter came to clear out the flat." },
          { es: "Les papiers jaunis couvraient la porte du frigo comme des écailles.", en: "The yellowed notes covered the fridge door like scales." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which element of the model is the ellipsis?",
            options: ["Trois mois plus tard", "comme des écailles", "Il mourut un mardi.", "Correspondance"],
            correctIndex: 0,
            explanation: "\"Trois mois plus tard\" skips the months of grief in four words: the ellipsis. \"Comme des écailles\" is the image, \"Il mourut un mardi\" the one-line paragraph, and \"Correspondance\" the title.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (literary narrative).",
            source: "She left on a Sunday.",
            answer: "Elle partit un dimanche.",
            altAnswers: ["Elle est partie un dimanche."],
            explanation: "Passé simple \"partit\" for a single event; \"un dimanche\" takes no preposition, like \"un mardi\".",
          },
        ],
      },
      {
        heading: "A title that works",
        body: [
          "A meaningful title: avoid titles that simply name the subject (\"Le deuil\"). Prefer an object, a phrase from the text, or a double meaning: \"Pense au pain\", \"Correspondance\", \"Écailles\". The title is the first word of the story, not a label.",
        ],
        examples: [
          { es: "Le titre est le premier mot de l'histoire, pas une étiquette.", en: "The title is the first word of the story, not a label." },
          { es: "« Pense au pain » reprend une phrase du texte.", en: "The title borrows a line from the text itself." },
          { es: "Un titre comme « Le deuil » n'est qu'une étiquette.", en: "A title that just names grief is only a label." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which title for \"Correspondance\" would be the weakest?",
            options: ["Le deuil d'une veuve", "Pense au pain", "Écailles", "Correspondance"],
            correctIndex: 0,
            explanation: "\"Le deuil d'une veuve\" names the subject and gives the ending away: a label. The other three intrigue, through an object, a phrase from the text or a double meaning.",
          },
        ],
      },
      {
        heading: "Ellipsis, one image, an open ending",
        body: [
          "The ellipsis: one sentence or a blank line for years (\"Trois mois plus tard\", \"L'hiver passa\"). The image: one, precise, unexpected (\"comme des écailles\"); not three. The ending: either open (a question left hanging, a gesture not completed: \"Il ne l'ouvrit pas. Pas encore.\") or a chute (a fact that rereads everything).",
        ],
        examples: [
          { es: "L'hiver passa.", en: "Winter went by." },
          { es: "Il ne l'ouvrit pas. Pas encore.", en: "He didn't open it. Not yet." },
          { es: "Une seule image, mais juste.", en: "Just one image, but the right one." },
          { es: "Elle posa la main sur la poignée, puis la retira.", en: "She put her hand on the handle, then withdrew it." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Il prit le téléphone, puis le reposa sans appeler.",
            question: "What does it mean?",
            options: [
              "He picked up the phone, then put it down without calling.",
              "He took the phone and called again.",
              "He put the phone down after the call.",
              "He picked up the phone and waited for a call.",
            ],
            correctIndex: 0,
            explanation: "A suspended gesture: \"reposer\" (to put back down) and \"sans appeler\" leave the ending open.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French (literary narrative).",
            source: "He didn't answer. Not right away.",
            answer: "Il ne répondit pas. Pas tout de suite.",
            altAnswers: ["Il n'a pas répondu. Pas tout de suite.", "Il ne répondit pas. Pas immédiatement."],
            explanation: "An open ending: a gesture postponed. Passé simple \"répondit\", then a verbless fragment.",
          },
        ],
      },
      {
        heading: "Tense, and cutting to the bone",
        body: [
          "Tense: choose the passé simple for a tale-like distance, the present for urgency. And count: at 100 words, every \"il y a\", every adverb in -ment, every adjective must justify itself. The final step is \"élaguer\".",
        ],
        examples: [
          { es: "Chaque adjectif doit justifier sa présence.", en: "Every adjective has to justify its presence." },
          { es: "Un homme fumait devant la gare.", en: "A man was smoking outside the station. (no empty opening needed)" },
          { es: "Il entre. La cuisine est vide.", en: "He comes in. The kitchen is empty. (the present for urgency)" },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[A woman was waiting] on the platform.",
            sentence: "___ sur le quai.",
            answer: "Une femme attendait",
            altAnswers: ["Une dame attendait"],
            explanation: "At a hundred words, \"il y avait une femme qui attendait\" is a waste: the subject goes straight to the verb, in the imperfect for a background scene.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it to the present, for urgency.",
            source: "Elle ouvrit la porte. Personne.",
            answer: "Elle ouvre la porte. Personne.",
            explanation: "The passé simple \"ouvrit\" gives a tale-like distance; the present \"ouvre\" puts the reader in the moment.",
          },
        ],
      },
      {
        heading: "The abecedary constraint",
        body: [
          "Now rewrite the microfiction under a constraint. A simple one inspired by the Oulipo: the abecedary (\"l'abécédaire\"), where each sentence starts with the next letter of the alphabet. The constraint forces you to restructure every sentence, and often improves it.",
        ],
        examples: [
          { es: "Durant quarante ans, rien ne changea.", en: "For forty years, nothing changed." },
          { es: "Et puis, un mardi, il mourut.", en: "And then, one Tuesday, he died." },
          { es: "Chaque phrase commence par la lettre suivante de l'alphabet.", en: "Each sentence begins with the next letter of the alphabet." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "An abecedary story has just written its F sentence. Which sentence can come next?",
            options: ["Garde ton écharpe, il pleut.", "Fais attention à toi.", "Elle sortit sous la pluie.", "Hier, il avait neigé."],
            correctIndex: 0,
            explanation: "After F comes G, so the next sentence must start with G: \"Garde ton écharpe\". The others start with F, E and H.",
          },
        ],
      },
      {
        heading: "The rewritten version",
        body: [
          "« Au réveil, chaque matin, il collait un mot sur le frigo. “Bois ton café”, “Bonne journée”, “Bisous, idiote”. Chaque fois, elle répondait dessous, de son écriture penchée. Durant quarante ans, rien ne changea. Et puis, un mardi, il mourut. Feuilletant les papiers jaunis trois mois plus tard, leur fille trouva tout en haut un mot de la veille, de l'écriture penchée : “Bois ton café.” »",
        ],
        examples: [
          { es: "Au réveil, chaque matin, il collait un mot sur le frigo.", en: "Every morning when he woke up, he stuck a note on the fridge." },
          { es: "Feuilletant les papiers jaunis, leur fille trouva un mot de la veille.", en: "Leafing through the yellowed notes, their daughter found a note from the day before." },
          { es: "« Bois ton café » remplace « Pense au pain ».", en: "The new last note replaces the old one." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Why does the rewritten version open with \"Au réveil\" instead of \"Pendant quarante ans\"?",
            options: [
              "The first sentence must begin with A.",
              "The story now takes place only in the morning.",
              "\"Pendant\" is not correct French here.",
              "The title now begins with A.",
            ],
            correctIndex: 0,
            explanation: "The abecedary demands A for the first sentence, so the opening had to be restructured. \"Pendant quarante ans\" was perfectly correct; the constraint, not grammar, forced the change.",
          },
        ],
      },
      {
        heading: "Other constraints, and reporting on them",
        body: [
          "Other constraints to try: the lipogram (no e, or no a); \"la contrainte du prisonnier\" (no letters with ascenders or descenders); a story in a single sentence; a story with no verb. Report on your attempt: \"La contrainte m'a obligé(e) à...\", \"j'ai dû renoncer à...\", \"elle a fait surgir une image que je n'aurais pas trouvée seul(e)\".",
        ],
        examples: [
          { es: "La contrainte m'a obligée à restructurer chaque phrase.", en: "The constraint forced me to restructure every sentence." },
          { es: "J'ai dû renoncer à mon image préférée.", en: "I had to give up my favourite image." },
          { es: "Elle a fait surgir une idée que je n'aurais pas trouvée seul.", en: "It brought out an idea I wouldn't have found on my own." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The constraint forced us to cut every adverb.",
            answer: "La contrainte nous a obligés à couper chaque adverbe.",
            altAnswers: ["La contrainte nous a obligées à couper chaque adverbe.", "La contrainte nous a forcés à couper chaque adverbe.", "La contrainte nous a forcées à couper chaque adverbe.", "La contrainte nous a obligés à supprimer chaque adverbe.", "La contrainte nous a obligés à couper tous les adverbes."],
            explanation: "\"Obliger quelqu'un à\" + infinitive; the participle agrees with \"nous\", placed before the verb: \"obligés\" (or \"obligées\" for a group of women).",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "J'ai dû renoncer mon titre préféré.",
            answer: "J'ai dû renoncer à mon titre préféré.",
            explanation: "\"Renoncer\" takes \"à\" before what you give up: \"renoncer à mon titre\". Without \"à\", the sentence is ungrammatical.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Change it to the passé simple.",
        source: "Trois ans plus tard, son fils est venu vendre la maison.",
        answer: "Trois ans plus tard, son fils vint vendre la maison.",
        explanation: "The passé simple \"vint\" replaces the passé composé \"est venu\" for a tale-like distance; \"venir\" + infinitive takes no preposition.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French (literary narrative).",
        source: "The old letters filled the drawer like dead leaves.",
        answer: "Les vieilles lettres remplissaient le tiroir comme des feuilles mortes.",
        altAnswers: ["Les vieilles lettres emplissaient le tiroir comme des feuilles mortes.", "Les vieilles lettres remplissaient le tiroir, telles des feuilles mortes."],
        explanation: "One precise image: \"comme des feuilles mortes\", with the imperfect for a description.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "He signed [in his shaky handwriting].",
        sentence: "Il signa ___.",
        answer: "de son écriture tremblante",
        altAnswers: ["d'une écriture tremblante", "de son écriture tremblée"],
        explanation: "\"De son écriture\" + adjective: \"de\" introduces the manner, and the adjective follows the noun.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The ending is not an explanation.",
        answer: "La fin n'est pas une explication.",
        altAnswers: ["Le dénouement n'est pas une explication.", "La chute n'est pas une explication."],
        explanation: "A microfiction ending shows rather than explains; \"une explication\" is feminine.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Every adverb has to earn its place.",
        answer: "Chaque adverbe doit mériter sa place.",
        altAnswers: ["Tout adverbe doit mériter sa place.", "Chaque adverbe doit justifier sa place.", "Chaque adverbe doit justifier sa présence."],
        explanation: "\"Chaque\" + singular noun; \"mériter sa place\" (to earn its place).",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Only yesterday, she was still writing to him.",
        words: ["Hier", "encore,", "elle", "lui", "écrivait."],
        translation: "Only yesterday, she was still writing to him.",
        explanation: "\"Hier encore\": as recently as yesterday. The indirect pronoun \"lui\" goes before the verb.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: She reread the note, then crumpled it.",
        words: ["Elle", "relut", "le mot,", "puis", "le froissa."],
        translation: "She reread the note, then crumpled it.",
        explanation: "Two verbs in the passé simple; the object pronoun \"le\" goes before \"froissa\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Le lendemain, sa sœur vint à chercher les clés.",
        answer: "Le lendemain, sa sœur vint chercher les clés.",
        explanation: "\"Venir\" + infinitive takes no preposition when it means to come and do something: \"vint chercher\". \"Venir à\" + infinitive means to happen to.",
      },
      {
        type: "dictation",
        audio: "Le dernier mot, tout en bas, était de sa main.",
        explanation: "\"Tout en bas\": at the very bottom; \"de sa main\": in her own hand.",
      },
      {
        type: "speak",
        text: "Il datait de la veille. De l'écriture penchée : « Pense au pain. »",
        tip: "Slow down on the last three words: they carry the whole story.",
        explanation: "The chute of the model microfiction.",
      },
    ],
  },
  {
    slug: "c2-vocab-philosophy-thought",
    level: "FR-C2",
    number: 8,
    title: "Mastery Vocabulary: Philosophy and Thought",
    summary: "Ontologie, épistémologie, téléologie, aporie, solipsisme, dialectique, relativisme, nihilisme, sophisme, tautologie, maïeutique: the concepts for reading essays and debating ideas.",
    duration: "18 min",
    sections: [
      {
        heading: "Ontologie and épistémologie",
        body: [
          "\"L'ontologie\" is the study of being as such: what exists, and what it means to exist. \"Une question ontologique\" asks what something fundamentally is. \"L'épistémologie\" is, in French usage, the philosophy of science (how scientific knowledge is built and validated); in English philosophy, epistemology is the broader theory of knowledge, which French often calls \"la théorie de la connaissance\". A subtle false friend.",
        ],
        examples: [
          { es: "La question est moins morale qu'ontologique : qu'est-ce qu'une personne ?", en: "The question is less moral than ontological: what is a person?" },
          { es: "L'épistémologie s'intéresse à la manière dont la science valide ses résultats.", en: "The philosophy of science is concerned with how science validates its results." },
          { es: "Les épistémologues débattent du statut des sciences sociales.", en: "Philosophers of science debate the status of the social sciences." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "\"Qu'est-ce qu'une œuvre d'art ?\" What kind of question is this?",
            options: ["ontological", "about the philosophy of science", "teleological", "tautological"],
            correctIndex: 0,
            explanation: "Asking what something fundamentally is makes it \"une question ontologique\". The philosophy of science (\"l'épistémologie\") asks how knowledge is validated, and a teleological question asks what something is for.",
          },
          {
            type: "multiple-choice",
            question: "In French academic usage, \"l'épistémologie\" most often refers to...",
            options: ["the philosophy of science", "the study of being", "the study of ethics", "the study of language"],
            correctIndex: 0,
            explanation: "French \"épistémologie\" is mostly the philosophy of science, narrower than its English look-alike; the broad theory of knowledge is \"la théorie de la connaissance\". The study of being is \"l'ontologie\".",
          },
        ],
      },
      {
        heading: "La téléologie: explaining by the goal",
        body: [
          "\"La téléologie\" (from Greek telos, end, goal) explains things by their purpose: \"une vision téléologique de l'histoire\" sees history as moving toward a predetermined goal, like progress or the triumph of a class. Critics use it pejoratively: \"une lecture téléologique\" reads the past as if it necessarily led to the present.",
        ],
        examples: [
          { es: "Cette lecture téléologique de l'histoire fait de la Révolution une étape inévitable.", en: "This teleological reading of history makes the Revolution an inevitable stage." },
          { es: "Le darwinisme a rompu avec l'explication téléologique du vivant.", en: "Darwinism broke with the teleological explanation of living things." },
          { es: "Une lecture téléologique fait du passé une simple préparation du présent.", en: "A teleological reading turns the past into a mere preparation for the present." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "This is a teleological view of progress.",
            answer: "C'est une vision téléologique du progrès.",
            altAnswers: ["Il s'agit d'une vision téléologique du progrès.", "C'est une conception téléologique du progrès."],
            explanation: "\"Téléologique\": explaining by an end or purpose, here progress seen as heading toward a set goal. The adjective follows the noun.",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: This reading judges the past by the present.",
            words: ["Cette lecture", "juge", "le passé", "à l'aune", "du présent."],
            translation: "This reading judges the past by the present.",
            explanation: "\"À l'aune de\" (by the yardstick of) is the learned way to say by the standard of: exactly the fault of a teleological reading.",
          },
        ],
      },
      {
        heading: "Descartes and Pascal",
        body: [
          "Descartes grounded certainty in a famous sentence of the \"Discours de la méthode\" (1637): « Je pense, donc je suis. » Pascal answered with a different image of man in the \"Pensées\": « L'homme n'est qu'un roseau, le plus faible de la nature ; mais c'est un roseau pensant. »",
        ],
        examples: [
          { es: "Je pense, donc je suis.", en: "I think, therefore I am." },
          { es: "L'homme n'est qu'un roseau, le plus faible de la nature ; mais c'est un roseau pensant.", en: "Man is only a reed, the weakest thing in nature; but he is a thinking reed." },
          { es: "Le cogito fonde la certitude sur la pensée.", en: "The cogito grounds certainty in thought." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What does Pascal's thinking reed stand for?",
            options: ["Human fragility, redeemed by thought", "Human strength over nature", "The beauty of nature", "The weakness of thought"],
            correctIndex: 0,
            explanation: "Man is \"le plus faible de la nature\", a reed, \"mais c'est un roseau pensant\": thought is what gives him dignity. Pascal does not claim strength over nature, and thought is the strength, not the weakness.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into Pascal's grammar with « ne... que ».",
            source: "L'homme est seulement un roseau.",
            answer: "L'homme n'est qu'un roseau.",
            explanation: "\"Ne... que\" replaces \"seulement\": \"n'est qu'un roseau\", the restrictive construction Pascal uses.",
          },
        ],
      },
      {
        heading: "La dialectique",
        body: [
          "\"La dialectique\" is reasoning through opposition: in Plato, the art of dialogue that tests ideas; in Hegel and Marx, the movement of thesis, antithesis and synthesis. In French schools, \"le plan dialectique\" (thèse, antithèse, synthèse) is the classic structure of the dissertation. \"Dialectique\" is also an adjective: \"un rapport dialectique\" between two terms that shape each other.",
        ],
        examples: [
          { es: "Le plan dialectique oppose une thèse et une antithèse avant de les dépasser.", en: "The dialectical plan sets a thesis against an antithesis before going beyond them." },
          { es: "Entre l'individu et la société, le rapport est dialectique.", en: "The relationship between the individual and society is dialectical." },
          { es: "Hegel décrit l'histoire comme un mouvement dialectique.", en: "Hegel describes history as a dialectical movement." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The link between work and identity is [dialectical].",
            sentence: "Le lien entre travail et identité est ___.",
            answer: "dialectique",
            explanation: "\"Dialectique\" as an adjective: two terms that shape each other through opposition.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The dissertation follows a dialectical plan.",
            answer: "La dissertation suit un plan dialectique.",
            altAnswers: ["La dissertation adopte un plan dialectique.", "La dissertation obéit à un plan dialectique."],
            explanation: "\"Le plan dialectique\": thèse, antithèse, synthèse.",
          },
        ],
      },
      {
        heading: "La maïeutique",
        body: [
          "\"La maïeutique\" (from the Greek for midwifery) is Socrates's method: asking questions so that the other person \"gives birth\" to the truth they already carry. Teachers and coaches use the word for any approach that draws ideas out rather than imposing them.",
        ],
        examples: [
          { es: "Par la maïeutique, Socrate fait accoucher les esprits.", en: "Through his maieutic method, Socrates helps minds give birth to ideas." },
          { es: "Son enseignement relève davantage de la maïeutique que du cours magistral.", en: "Her teaching has more to do with Socratic questioning than with lecturing." },
          { es: "Ce coach pratique une forme de maïeutique.", en: "This coach practises a form of Socratic questioning." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Ce professeur procède par maïeutique.",
            question: "What does it mean?",
            options: [
              "This teacher draws ideas out by questioning.",
              "This teacher works as a midwife.",
              "This teacher lectures without questions.",
              "This teacher uses rhetoric to win arguments.",
            ],
            correctIndex: 0,
            explanation: "\"Procéder par maïeutique\": teaching by questions that draw the answer out of the student. The midwife is only the origin of the image.",
          },
        ],
      },
      {
        heading: "L'aporie",
        body: [
          "\"L'aporie\" (feminine) is an impasse in reasoning, a contradiction with no solution: many of Plato's early dialogues end in aporia. \"Aboutir à une aporie\", \"une situation aporétique\". It is stronger and more technical than \"une impasse\" or \"un paradoxe\".",
        ],
        examples: [
          { es: "Le dialogue s'achève sur une aporie.", en: "The dialogue ends in an aporia." },
          { es: "Ce débat aboutit à une impasse, voire à une véritable aporie.", en: "This debate ends in a deadlock, even a genuine aporia." },
          { es: "La discussion se révéla aporétique.", en: "The discussion turned out to be aporetic." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The reasoning leads to an aporia.",
            answer: "Le raisonnement aboutit à une aporie.",
            altAnswers: ["Le raisonnement mène à une aporie.", "Le raisonnement conduit à une aporie.", "Le raisonnement débouche sur une aporie."],
            explanation: "\"Une aporie\" is feminine; \"aboutir à\" or \"déboucher sur\" an impasse.",
          },
        ],
      },
      {
        heading: "Solipsisme, relativisme, nihilisme",
        body: [
          "\"Le solipsisme\" holds that only one's own mind is certain to exist; in everyday use, it criticises someone shut in their own world (\"un roman solipsiste\"). \"Le relativisme\" denies universal truths or values: everything depends on the point of view or the culture (\"le relativisme culturel\"). \"Le nihilisme\" rejects all values or meaning; Nietzsche analysed it as the crisis of modern Europe.",
        ],
        examples: [
          { es: "Le solipsisme affirme que seule ma conscience est certaine.", en: "Solipsism claims that only my own consciousness is certain." },
          { es: "Au nom du relativisme culturel, il refuse de juger quoi que ce soit.", en: "In the name of cultural relativism, he refuses to judge anything at all." },
          { es: "Nietzsche voyait dans le nihilisme la maladie de l'Europe moderne.", en: "Nietzsche saw nihilism as the sickness of modern Europe." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Someone argues that no value is better than another: it all depends on the culture. Which position is this?",
            options: ["le relativisme", "le nihilisme", "le solipsisme", "l'ontologie"],
            correctIndex: 0,
            explanation: "Values that depend on the culture or point of view: \"le relativisme\". \"Le nihilisme\" goes further and rejects all values, and \"le solipsisme\" doubts that anything but one's own mind exists.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Critics accuse her novel of solipsism.",
            answer: "Les critiques reprochent à son roman son solipsisme.",
            altAnswers: ["Les critiques accusent son roman de solipsisme.", "La critique reproche à son roman son solipsisme.", "La critique accuse son roman de solipsisme."],
            explanation: "In everyday criticism, \"le solipsisme\" means being shut in one's own world. \"Reprocher quelque chose à quelqu'un\" or \"accuser quelqu'un de\" + noun.",
          },
        ],
      },
      {
        heading: "Bad arguments: sophisme, paralogisme, tautologie",
        body: [
          "Bad arguments: \"un sophisme\" is a fallacious argument that looks valid, often deliberately (the Sophists taught persuasion); \"un paralogisme\" is the same error made in good faith. \"Une tautologie\" says the same thing twice, so it explains nothing: \"la guerre, c'est la guerre\", \"il est en retard parce qu'il n'est pas à l'heure\".",
        ],
        examples: [
          { es: "Ton raisonnement est un sophisme : il a l'air logique, mais il est faux.", en: "Your reasoning is a fallacy: it looks logical, but it's wrong." },
          { es: "« La guerre, c'est la guerre » : une tautologie qui prétend tout expliquer.", en: "'War is war': a tautology that claims to explain everything." },
          { es: "Il a commis un paralogisme sans s'en rendre compte.", en: "He made a logical error without realising it." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "\"Les enfants, ce sont des enfants.\" This sentence is...",
            options: ["a tautology", "an aporia", "a dialectic", "an ontology"],
            correctIndex: 0,
            explanation: "It explains children by the word itself: a tautology. An aporia is a dead end in reasoning, and a dialectic needs two opposing terms.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "His speech is full of fallacies.",
            answer: "Son discours est plein de sophismes.",
            altAnswers: ["Son discours est truffé de sophismes.", "Son discours regorge de sophismes.", "Son discours est rempli de sophismes."],
            explanation: "\"Un sophisme\" is a fallacious argument that looks valid, often deliberately; plural \"sophismes\".",
          },
        ],
      },
      {
        heading: "Que sais-je ?",
        body: [
          "Montaigne's motto, « Que sais-je ? », is the emblem of a different attitude: sceptical humility rather than relativism. The phrase is also the name of a famous French series of short introductory books.",
        ],
        examples: [
          { es: "« Que sais-je ? » demandait Montaigne.", en: "'What do I know?' Montaigne asked." },
          { es: "La collection « Que sais-je ? » compte des milliers de titres.", en: "The series of short introductory books has thousands of titles." },
          { es: "Le doute de Montaigne n'est pas du relativisme.", en: "Montaigne's doubt is not relativism." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Montaigne's motto is [What do I know?]",
            sentence: "La devise de Montaigne est « ___ »",
            answer: "Que sais-je ?",
            altAnswers: ["Que sais-je"],
            explanation: "\"Que sais-je ?\" inverts subject and verb (\"sais-je\") for the question: sceptical humility rather than a denial of truth.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The debate is about the philosophy of science, not morality.",
        answer: "Le débat est épistémologique, et non moral.",
        altAnswers: ["Le débat est épistémologique, pas moral.", "Le débat relève de l'épistémologie, et non de la morale.", "Le débat relève de l'épistémologie, pas de la morale."],
        explanation: "In French, \"épistémologique\" refers to the philosophy of science; \"et non\" contrasts it with the moral question.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "The debate ended in [an impasse].",
        sentence: "Le débat a abouti à ___.",
        answer: "une aporie",
        altAnswers: ["une impasse"],
        explanation: "\"Une aporie\" is a philosophical impasse with no solution.",
      },
      {
        type: "matching",
        instructions: "Match each concept with its definition.",
        pairs: [
          { left: "le solipsisme", right: "only my mind is certain" },
          { left: "le relativisme", right: "no universal truths" },
          { left: "le nihilisme", right: "rejection of all values" },
          { left: "la maïeutique", right: "drawing out truth by questioning" },
          { left: "la téléologie", right: "explanation by purpose" },
        ],
        explanation: "Key concepts for reading French essays.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "All our dignity lies in thought.",
        answer: "Toute notre dignité consiste en la pensée.",
        altAnswers: ["Toute notre dignité réside dans la pensée.", "Toute notre dignité consiste dans la pensée.", "Toute notre dignité est dans la pensée."],
        explanation: "Pascal's conclusion to the reed: \"toute notre dignité consiste en la pensée\". \"Toute\" agrees with \"dignité\".",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: The dialogue brings out a contradiction.",
        words: ["Le dialogue", "fait", "émerger", "une", "contradiction."],
        translation: "The dialogue brings out a contradiction.",
        explanation: "\"Faire émerger\" (to bring out): the Socratic dialogue reveals what was hidden, often an aporia.",
      },
      {
        type: "dictation",
        audio: "Montaigne préférait le doute à la certitude.",
        answer: "Montaigne préférait le doute à la certitude.",
        explanation: "\"Préférer A à B\": Montaigne's sceptical humility.",
      },
      {
        type: "speak",
        text: "Je pense, donc je suis : la certitude naît du doute.",
        tip: "Pause at the colon, then stress \"doute\".",
        explanation: "Descartes's cogito: certainty is founded on the very act of doubting and thinking.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Ce penseur, il est un vrai sophiste.",
        answer: "Ce penseur, c'est un vrai sophiste.",
        altAnswers: ["Ce penseur est un vrai sophiste."],
        explanation: "Before a noun with a determiner (\"un vrai sophiste\"), French uses \"c'est\", not \"il est\": \"c'est un roseau pensant\", \"c'est un sophiste\".",
      },
    ],
  },
  {
    slug: "c2-vocab-verbal-locutions",
    level: "FR-C2",
    number: 9,
    title: "Vocabulary in Context: Verbal Locutions with Mettre, Prendre, Tenir and Faire",
    summary: "Mettre en œuvre, mettre à mal, mettre en cause, prendre en compte, prendre acte de, prendre le pas sur, tenir compte de, tenir tête à, faire part de, faire fi de, donner lieu à, tirer parti de.",
    duration: "18 min",
    sections: [
      {
        heading: "Mettre en œuvre, mettre à mal",
        body: [
          "Verbal locutions (verb + noun, often without an article) are the backbone of formal French. \"Mettre en œuvre\" is to implement, put into practice: \"mettre en œuvre une réforme\", \"la mise en œuvre du plan\". \"Mettre à mal\" is to damage, undermine, put in difficulty: \"la crise a mis à mal la confiance des épargnants\".",
        ],
        examples: [
          { es: "Le gouvernement peine à mettre en œuvre la réforme.", en: "The government is struggling to implement the reform." },
          { es: "La crise a mis à mal la confiance des épargnants.", en: "The crisis has undermined savers' confidence." },
          { es: "La sécheresse a mis à mal les récoltes.", en: "The drought has damaged the harvests." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The strike has damaged the company's image.",
            answer: "La grève a mis à mal l'image de l'entreprise.",
            altAnswers: ["La grève a mis à mal l'image de la société.", "La grève a terni l'image de l'entreprise.", "La grève a écorné l'image de l'entreprise."],
            explanation: "\"Mettre à mal\": to damage, undermine. The noun part stays fixed: \"a mis à mal\".",
          },
        ],
      },
      {
        heading: "Mettre en cause, en évidence, en place",
        body: [
          "\"Mettre en cause\" has two senses: to call into question (\"mettre en cause la fiabilité des chiffres\") and to implicate someone (\"le ministre a été mis en cause dans l'affaire\"). Compare \"remettre en cause\" (to challenge, reconsider) and \"mettre en question\". \"Mettre en évidence\" (to highlight) and \"mettre en place\" (to set up) are equally frequent.",
        ],
        examples: [
          { es: "Le ministre a été mis en cause dans l'affaire.", en: "The minister was implicated in the affair." },
          { es: "Cette étude remet en cause des certitudes anciennes.", en: "This study challenges long-held certainties." },
          { es: "L'enquête met en évidence de graves dysfonctionnements.", en: "The investigation highlights serious failings." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "\"Plusieurs élus ont été mis en cause.\" What happened to them?",
            options: ["They were implicated.", "They were set up in office.", "They were highlighted as models.", "They were promoted."],
            correctIndex: 0,
            explanation: "\"Être mis en cause\" said of a person means being implicated, named as possibly responsible. Setting up is \"mettre en place\" and highlighting \"mettre en évidence\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Two directors were implicated in the fraud.",
            answer: "Deux directeurs ont été mis en cause dans la fraude.",
            altAnswers: ["Deux directeurs ont été mis en cause dans l'affaire de fraude.", "Deux directrices ont été mises en cause dans la fraude."],
            explanation: "\"Être mis en cause\": to be implicated. In the passive, \"mis\" agrees with the subject: \"mis\" for \"deux directeurs\", \"mises\" for women.",
          },
        ],
      },
      {
        heading: "Noun forms, and agreement of mis",
        body: [
          "The noun forms are just as useful: \"la mise en œuvre\", \"la mise en cause\", \"la mise en place\", \"la mise en évidence\". Note that the participle \"mis\" agrees in compound tenses: \"les mesures que nous avons mises en œuvre\".",
        ],
        examples: [
          { es: "Les mesures que nous avons mises en œuvre portent leurs fruits.", en: "The measures we have implemented are bearing fruit." },
          { es: "La mise en place du nouveau logiciel a pris six mois.", en: "Setting up the new software took six months." },
          { es: "La mise en évidence du problème a tout changé.", en: "Bringing the problem to light changed everything." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The reforms they [have implemented] are unpopular.",
            sentence: "Les réformes qu'ils ont ___ sont impopulaires.",
            answer: "mises en œuvre",
            explanation: "\"Mis\" agrees with the direct object \"que\" (= les réformes, feminine plural) placed before the verb: \"mises en œuvre\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it to use the noun « la mise en œuvre ».",
            source: "Mettre en œuvre la réforme prendra deux ans.",
            answer: "La mise en œuvre de la réforme prendra deux ans.",
            explanation: "The infinitive \"mettre en œuvre\" becomes the noun \"la mise en œuvre\", and its object follows with \"de\": dense, nominal style.",
          },
        ],
      },
      {
        heading: "Prendre en compte, tenir compte de",
        body: [
          "\"Prendre en compte\" and \"tenir compte de\" both mean to take into account; the first takes a direct object, the second \"de\": \"prendre en compte les remarques\" / \"tenir compte des remarques\". Mixing them (\"*tenir compte les remarques\") is a common error.",
        ],
        examples: [
          { es: "Nous avons pris en compte toutes vos remarques.", en: "We've taken all your comments into account." },
          { es: "Le rapport ne tient pas compte des chiffres de décembre.", en: "The report doesn't take December's figures into account." },
          { es: "Il faut tenir compte de la météo.", en: "You have to take the weather into account." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence is correct?",
            options: [
              "Il faut tenir compte de ces chiffres.",
              "Il faut tenir compte ces chiffres.",
              "Il faut prendre en compte de ces chiffres.",
              "Il faut prendre compte de ces chiffres.",
            ],
            correctIndex: 0,
            explanation: "\"Tenir compte de\" + noun, \"prendre en compte\" + direct object. \"Tenir compte ces chiffres\" drops the \"de\", \"prendre en compte de\" adds one, and \"prendre compte\" loses the \"en\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, using \"tenir compte de\".",
            source: "The budget doesn't take inflation into account.",
            answer: "Le budget ne tient pas compte de l'inflation.",
            altAnswers: ["Le budget ne prend pas en compte l'inflation."],
            explanation: "\"Tenir compte de\" + noun: \"de l'inflation\"; with \"prendre en compte\", the object comes directly.",
          },
        ],
      },
      {
        heading: "Prendre acte de, prendre le pas sur",
        body: [
          "\"Prendre acte de\" is to formally note, acknowledge something without necessarily approving it: \"le syndicat prend acte de la proposition\" (a cool, diplomatic phrase). \"Prendre le pas sur\" is to take precedence over, to overtake: \"l'émotion a pris le pas sur la raison\".",
        ],
        examples: [
          { es: "Le syndicat prend acte de la proposition, sans l'approuver.", en: "The union notes the proposal, without approving it." },
          { es: "Peu à peu, l'émotion a pris le pas sur la raison.", en: "Little by little, emotion took precedence over reason." },
          { es: "La direction a pris acte de la démission du comptable.", en: "Management formally noted the accountant's resignation." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "\"La mairie prend acte de la pétition.\" What is the town hall doing?",
            options: [
              "Formally noting the proposal, without endorsing it.",
              "Enthusiastically accepting the proposal.",
              "Rejecting the proposal outright.",
              "Acting on the proposal immediately.",
            ],
            correctIndex: 0,
            explanation: "\"Prendre acte de\": to acknowledge formally, a cool and diplomatic phrase that commits to nothing. It is neither an acceptance nor a refusal, and certainly not immediate action.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Profit has taken precedence over safety.",
            answer: "La rentabilité a pris le pas sur la sécurité.",
            altAnswers: ["Le profit a pris le pas sur la sécurité.", "La rentabilité l'a emporté sur la sécurité.", "Le profit l'a emporté sur la sécurité."],
            explanation: "\"Prendre le pas sur\": to take precedence over; the noun part \"le pas\" never changes.",
          },
        ],
      },
      {
        heading: "Tenir tête à, tenir à",
        body: [
          "\"Tenir tête à\" is to stand up to someone, resist: \"elle a tenu tête à son patron\". \"Tenir à\" + infinitive is to be keen to: \"je tiens à vous remercier\". \"Tenir lieu de\" (to serve as) you saw in film criticism.",
        ],
        examples: [
          { es: "Elle a tenu tête au directeur pendant toute la réunion.", en: "She stood up to the director throughout the meeting." },
          { es: "Je tiens à vous remercier pour votre patience.", en: "I'd like to thank you for your patience." },
          { es: "Ce vieux carnet lui tient lieu de journal.", en: "This old notebook serves as her diary." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Les habitants ont tenu tête au promoteur.",
            question: "What does it mean?",
            options: [
              "The residents stood up to the developer.",
              "The residents agreed with the developer.",
              "The residents kept the developer's attention.",
              "The residents headed the developer's project.",
            ],
            correctIndex: 0,
            explanation: "\"Tenir tête à\": to resist, stand up to someone. Nothing to do with heads or leading.",
          },
        ],
      },
      {
        heading: "Faire part de, faire fi de",
        body: [
          "\"Faire part de quelque chose à quelqu'un\" is to inform, announce: \"il m'a fait part de ses inquiétudes\"; \"un faire-part\" is a printed announcement of a birth, wedding or death. \"Faire fi de\" is to scorn, disregard, ignore (formal): \"faire fi des recommandations\", \"faire fi des règles\".",
        ],
        examples: [
          { es: "Il m'a fait part de ses inquiétudes concernant le projet.", en: "He told me about his concerns regarding the project." },
          { es: "Ils ont fait fi de toutes les recommandations de sécurité.", en: "They disregarded all the safety recommendations." },
          { es: "Nous avons reçu le faire-part de leur mariage.", en: "We received their wedding announcement." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which locution means to scorn, to ignore deliberately?",
            options: ["faire fi de", "faire part de", "prendre acte de", "tenir compte de"],
            correctIndex: 0,
            explanation: "\"Faire fi de\" is formal for to disregard, scorn. \"Faire part de\" is to inform, \"prendre acte de\" to note, and \"tenir compte de\" the very opposite: to take into account.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "We informed the board of our decision.",
            answer: "Nous avons fait part de notre décision au conseil.",
            altAnswers: ["Nous avons fait part au conseil de notre décision.", "Nous avons fait part de notre décision au conseil d'administration.", "On a fait part de notre décision au conseil."],
            explanation: "\"Faire part de quelque chose à quelqu'un\": the thing announced takes \"de\", the person informed takes \"à\".",
          },
        ],
      },
      {
        heading: "Donner lieu à, tirer parti de",
        body: [
          "\"Donner lieu à\" is to give rise to, lead to: \"la décision a donné lieu à de vifs débats\". It is more formal than \"provoquer\" and neutral in tone. \"Tirer parti de\" is to take advantage of, make the most of: \"tirer parti de la situation\", \"tirer parti de ses erreurs\". Compare \"tirer profit de\" (to profit from) and \"profiter de\".",
        ],
        examples: [
          { es: "La décision a donné lieu à de vifs débats.", en: "The decision gave rise to heated debate." },
          { es: "Elle a su tirer parti de ses erreurs.", en: "She managed to turn her mistakes to her advantage." },
          { es: "L'entreprise a tiré parti de la faiblesse de ses concurrents.", en: "The company took advantage of its competitors' weakness." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: The law gave rise to numerous demonstrations.",
            words: ["La loi", "a donné lieu", "à", "de nombreuses", "manifestations."],
            translation: "The law gave rise to numerous demonstrations.",
            explanation: "\"Donner lieu à\"; \"de\" replaces \"des\" before a plural adjective + noun.",
          },
        ],
      },
      {
        heading: "A frozen noun part",
        body: [
          "All these locutions are invariable in their noun part (no article, no plural): \"ils ont fait part\", \"elles ont tiré parti\". They make writing dense and precise, which is exactly what Mastery examiners expect.",
        ],
        examples: [
          { es: "Elles ont fait part de leur refus.", en: "They announced their refusal." },
          { es: "Ils ont tiré parti de la crise.", en: "They made the most of the crisis." },
          { es: "Nous avons pris acte de vos réserves.", en: "We have noted your reservations." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Ils ont tiré des partis de la situation.",
            answer: "Ils ont tiré parti de la situation.",
            altAnswers: ["Ils ont tiré profit de la situation."],
            explanation: "The noun part of a locution is frozen: no article, no plural. It is always \"tirer parti de\", whoever the subject.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The town hall is struggling to implement the plan.",
        answer: "La mairie peine à mettre en œuvre le plan.",
        altAnswers: ["La mairie a du mal à mettre en œuvre le plan.", "La mairie peine à mettre le plan en œuvre.", "La mairie a du mal à mettre le plan en œuvre."],
        explanation: "\"Mettre en œuvre\": to implement.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "They disregarded the rules.",
        answer: "Ils ont fait fi des règles.",
        altAnswers: ["Elles ont fait fi des règles.", "Ils n'ont pas tenu compte des règles.", "Ils ont ignoré les règles."],
        explanation: "\"Faire fi de\": formal for to disregard, scorn.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Nous avons tenu compte vos remarques.",
        answer: "Nous avons tenu compte de vos remarques.",
        altAnswers: ["Nous avons pris en compte vos remarques."],
        explanation: "\"Tenir compte\" needs \"de\" before what is taken into account: \"tenir compte de vos remarques\". Only \"prendre en compte\" takes a direct object.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The pupils stood up to the headmistress.",
        answer: "Les élèves ont tenu tête à la directrice.",
        altAnswers: ["Les élèves ont tenu tête à la principale.", "Les élèves ont tenu tête à la proviseure."],
        explanation: "\"Tenir tête à\" + person: \"à la directrice\" (with a masculine noun, \"au directeur\").",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "He knew how to make the most of the situation.",
        answer: "Il a su tirer parti de la situation.",
        altAnswers: ["Il a su tirer profit de la situation.", "Il a su profiter de la situation."],
        explanation: "\"Tirer parti de\": to make the most of; \"savoir\" in the passé composé = managed to.",
      },
      {
        type: "matching",
        instructions: "Match each locution with its meaning.",
        pairs: [
          { left: "mettre à mal", right: "to undermine" },
          { left: "prendre acte de", right: "to formally note" },
          { left: "donner lieu à", right: "to give rise to" },
          { left: "faire part de", right: "to inform of" },
          { left: "tenir tête à", right: "to stand up to" },
        ],
        explanation: "High-frequency locutions of formal French.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: The report highlights numerous gaps.",
        words: ["Le rapport", "met", "en évidence", "de nombreuses", "lacunes."],
        translation: "The report highlights numerous gaps.",
        explanation: "\"Mettre en évidence\": to highlight; \"de\" before a plural adjective + noun.",
      },
      {
        type: "dictation",
        audio: "Je tiens à vous faire part de ma gratitude.",
        explanation: "Two locutions: \"tenir à\" + infinitive (to be keen to) and \"faire part de\" (to express, to inform of).",
      },
      {
        type: "speak",
        text: "La direction prend acte de vos remarques, sans s'engager.",
        prompt: "Say it in French: Management notes your comments, without committing itself.",
        explanation: "\"Prendre acte de\": acknowledging without endorsing; \"s'engager\": to commit oneself.",
      },
    ],
  },
];
