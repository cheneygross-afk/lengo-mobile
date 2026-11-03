// Synced from cheneygross-afk/lengo:src/lib/lessons/fr-c2-u16.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// French C2, Unit 16: Closing the Deal.

export const FR_C2_U16: Lesson[] = [
  {
    slug: "c2-presentations-negotiation-5",
    level: "FR-C2",
    number: 1,
    title: "Présentations et Négociation, Part 5 of 8",
    summary: "Voice and body: posture, eye contact, gesture, pace, intonation and silence; the French gestures that carry meaning (\"la moue\", the \"bof\" shrug, \"mon œil\", \"ras le bol\"); and the verbal tics to tame.",
    duration: "18 min",
    sections: [
      {
        heading: "The words for delivery",
        body: [
          "French has precise words for the components of delivery. \"Le débit\" is the rate of speech: \"un débit trop rapide\" is the most common fault of nervous speakers. \"L'intonation\" is the melody, \"la diction\" or \"l'articulation\" the clarity of each syllable, \"le volume\" or \"la projection\" the power of the voice. \"Marquer une pause\" or \"ménager un silence\" (to leave a deliberate silence) is a skill in itself.",
        ],
        examples: [
          {
            es: "Son débit était beaucoup trop rapide : on n'a rien retenu.",
            en: "She spoke much too fast: we didn't remember anything.",
          },
          {
            es: "Articulez, on ne vous entend pas au fond de la salle !",
            en: "Speak clearly, we can't hear you at the back of the room!",
          },
          { es: "Elle a une voix posée qui inspire confiance.", en: "She has a calm, measured voice that inspires confidence." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Slow down: your [rate of speech] is too fast.",
            sentence: "Ralentissez : votre ___ est trop rapide.",
            answer: "débit",
            explanation: "\"Le débit\" is the rate of speech; \"un débit trop rapide\" is the nervous speaker's commonest fault.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Speak more slowly and pronounce clearly.",
            answer: "Parlez plus lentement et articulez.",
            altAnswers: [
              "Parlez plus lentement et articulez bien.",
              "Parle plus lentement et articule.",
              "Parlez moins vite et articulez.",
            ],
            explanation: "\"Articuler\" (to pronounce each syllable clearly) is what \"la diction\" is about.",
          },
        ],
      },
      {
        heading: "French intonation",
        body: [
          "French intonation is flatter than English inside a sentence and rises at the end of each rhythmic group, then falls at the very end of a statement.",
        ],
        examples: [
          {
            es: "Les ventes augmentent, les coûts baissent, et le budget reste stable.",
            en: "Sales are rising, costs are falling, and the budget is stable.",
          },
          { es: "En deux mille vingt, notre chiffre d'affaires a doublé.", en: "In 2020, our turnover doubled." },
          {
            es: "La voix monte à la fin de chaque groupe, puis descend à la fin de la phrase.",
            en: "The voice rises at the end of each group, then falls at the end of the sentence.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In a French statement, where does the voice rise?",
            options: [
              "At the end of each rhythmic group, before falling at the very end",
              "On every important word",
              "Only on the first word",
              "Nowhere: French is completely flat",
            ],
            correctIndex: 0,
            explanation: "French is flatter inside a group, rises at the end of each rhythmic group and falls at the end of the statement.",
          },
        ],
      },
      {
        heading: "L'accent d'insistance",
        body: [
          "English speakers who stress individual words (this is VERY important) sound odd in French, where emphasis is better carried by word choice, a pause, or an emphatic stress near the start of the word, a feature called \"l'accent d'insistance\" (\"c'est IN-acceptable\" or \"c'est in-AC-ceptable\"; in words beginning with a vowel it often falls on the first syllable that starts with a consonant, as in \"c'est im-PO-ssible\").",
        ],
        examples: [
          { es: "C'est in-ac-cep-table !", en: "It's un-ac-cept-able! (emphatic stress)" },
          { es: "C'est im-PO-ssible !", en: "It's im-POSS-ible!" },
          { es: "C'est ab-SO-lument faux.", en: "That's ABSolutely wrong." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "How should an English speaker add emphasis in French?",
            options: [
              "With word choice, a pause, or a stress near the start of the word",
              "By stressing the last syllable as loudly as possible",
              "By raising the voice on every word",
              "By repeating the word three times",
            ],
            correctIndex: 0,
            explanation: "Stressing single words the English way sounds odd; French uses word choice, pauses or \"l'accent d'insistance\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change \"très important\" to a stronger single word, so the emphasis comes from word choice.",
            source: "Ce point est très important.",
            answer: "Ce point est essentiel.",
            altAnswers: ["Ce point est capital.", "Ce point est crucial.", "Ce point est primordial.", "Ce point est fondamental."],
            explanation: "Emphasis carried by vocabulary sounds natural in French: \"essentiel\", \"capital\", \"crucial\".",
          },
        ],
      },
      {
        heading: "The power of silence",
        body: [
          "Silences are powerful in French presentations: a pause before a key figure (\"le chiffre est le suivant... vingt pour cent\") or after a question creates attention. \"Il a su ménager ses effets\" is high praise for a speaker who controls his pauses.",
        ],
        examples: [
          { es: "Marquez une pause avant d'annoncer le chiffre clé.", en: "Pause before announcing the key figure." },
          {
            es: "Il a su ménager ses effets jusqu'à la dernière diapositive.",
            en: "He knew how to build suspense right up to the last slide.",
          },
          { es: "Le chiffre est le suivant... vingt pour cent.", en: "The figure is as follows... twenty per cent." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "She [left a deliberate silence] before answering.",
            sentence: "Elle a ___ avant de répondre.",
            answer: "ménagé un silence",
            altAnswers: ["marqué une pause", "marqué un silence"],
            explanation: "\"Ménager un silence\" or \"marquer une pause\": a deliberate silence creates attention.",
          },
        ],
      },
      {
        heading: "The body: posture, eyes, gestures",
        body: [
          "Body vocabulary: \"la posture\" (stance), \"se tenir droit\" (to stand up straight), \"le regard\" (eye contact: \"balayer la salle du regard\", to sweep the room with your eyes), \"la gestuelle\" (gestures as a whole), \"les mains\" (\"ne savoir que faire de ses mains\"), \"les déplacements\" (moving around). \"Avoir de la prestance\" means to have presence, a commanding bearing.",
        ],
        examples: [
          { es: "Tenez-vous droit et balayez la salle du regard.", en: "Stand up straight and sweep the room with your eyes." },
          { es: "Il ne savait pas quoi faire de ses mains.", en: "He didn't know what to do with his hands." },
          { es: "Elle a beaucoup de prestance sur scène.", en: "She has great presence on stage." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Sweep the room with your eyes before you begin.",
            answer: "Balayez la salle du regard avant de commencer.",
            altAnswers: ["Balayez la salle du regard avant de vous lancer.", "Balaie la salle du regard avant de commencer."],
            explanation: "\"Balayer la salle du regard\" (to sweep the room with your eyes): eye contact with everyone.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "This speaker [has real presence].",
            sentence: "Cet orateur ___.",
            answer: "a de la prestance",
            altAnswers: ["a beaucoup de prestance", "a une vraie prestance"],
            explanation: "\"Avoir de la prestance\" (to have presence, a commanding bearing).",
          },
        ],
      },
      {
        heading: "Restraint in a formal setting",
        body: [
          "French audiences expect a degree of restraint in a formal setting: gestures at chest height, open hands, few movements. Excessive enthusiasm can be read as \"un numéro\" (a show) or \"à l'américaine\", which is rarely a compliment. In a looser setting (a start-up, a creative agency), more energy is welcome.",
        ],
        examples: [
          {
            es: "Sa présentation tenait un peu trop du numéro à l'américaine.",
            en: "His presentation was a bit too much of an American-style show.",
          },
          { es: "Gardez les mains ouvertes, à hauteur de poitrine.", en: "Keep your hands open, at chest height." },
          { es: "Dans une start-up, on attend plus d'énergie.", en: "In a start-up, more energy is expected." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A French client calls your pitch « un vrai numéro à l'américaine ». What does he most likely mean?",
            options: [
              "It was too showy for a formal setting.",
              "It was perfectly professional.",
              "It was too short.",
              "It was full of American statistics.",
            ],
            correctIndex: 0,
            explanation: "\"Un numéro\" (a show) is rarely a compliment: French audiences expect restraint in a formal setting.",
          },
        ],
      },
      {
        heading: "Signs of nervousness",
        body: [
          "Signs of nervousness are named precisely: \"se balancer d'un pied sur l'autre\" (to shift from foot to foot), \"tripoter son stylo\" (to fiddle with one's pen), \"fuir le regard\" (to avoid eye contact), \"lire ses notes\", \"tourner le dos au public\" (to turn one's back to the audience, to read the slides).",
        ],
        examples: [
          {
            es: "Il se balançait d'un pied sur l'autre en tripotant son stylo.",
            en: "He was shifting from foot to foot, fiddling with his pen.",
          },
          {
            es: "Évitez de tourner le dos au public pour lire vos diapositives.",
            en: "Avoid turning your back on the audience to read your slides.",
          },
          { es: "Elle fuyait le regard du jury.", en: "She avoided the jury's eyes." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Le candidat tripotait nerveusement son téléphone.",
            question: "What impression did he give?",
            options: ["Nervousness", "Confidence", "Boredom", "Anger"],
            correctIndex: 0,
            explanation: "\"Tripoter\" (to fiddle with) is one of the named signs of nervousness, like \"se balancer d'un pied sur l'autre\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Arrête de tripoter avec ton stylo !",
            answer: "Arrête de tripoter ton stylo !",
            explanation: "\"Tripoter\" is transitive: \"tripoter son stylo\", with no \"avec\".",
          },
        ],
      },
      {
        heading: "Gestures: la moue and the shrug",
        body: [
          "Some French gestures carry meaning by themselves. \"La moue\": pushing the lips forward, often with a slight shrug, means doubt or indifference, the physical form of \"bof\". The full shrug with open palms says \"je n'y peux rien\" (nothing I can do).",
        ],
        examples: [
          { es: "Quand j'ai annoncé le prix, il a fait la moue.", en: "When I announced the price, he pulled a sceptical face." },
          {
            es: "Elle a haussé les épaules, l'air de dire : je n'y peux rien.",
            en: "She shrugged, as if to say: there's nothing I can do.",
          },
          { es: "Bof, je ne suis pas convaincu.", en: "Meh, I'm not convinced." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You announce your price and the buyer makes « la moue ». What does it signal?",
            options: ["Doubt or indifference", "Enthusiasm", "Anger", "Full agreement"],
            correctIndex: 0,
            explanation: "\"La moue\" (lips pushed forward, often with a slight shrug) is the physical form of \"bof\": doubt or indifference.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "When I mentioned the deadline, she pulled a sceptical face.",
            answer: "Quand j'ai évoqué le délai, elle a fait la moue.",
            altAnswers: [
              "Quand j'ai mentionné le délai, elle a fait la moue.",
              "Quand j'ai parlé du délai, elle a fait la moue.",
              "Lorsque j'ai évoqué le délai, elle a fait la moue.",
            ],
            explanation: "\"Faire la moue\" (to pout, to pull a sceptical face).",
          },
        ],
      },
      {
        heading: "Gestures: mon œil, ras le bol, oh là là",
        body: [
          "Pulling down the lower eyelid with a finger means \"mon œil !\" (my foot, I don't believe it). A flat hand passing over the top of the head means \"j'en ai ras le bol\" (I've had it up to here). Rubbing thumb and fingers means money, and waving a loose hand means \"oh là là\" (something is impressive, or a big problem).",
        ],
        examples: [
          { es: "Mon œil ! Il n'a jamais lu ce rapport.", en: "My foot! He's never read that report." },
          { es: "J'en ai ras le bol de ces réunions interminables.", en: "I've had it up to here with these endless meetings." },
          { es: "Oh là là, le budget a explosé !", en: "Oh dear, the budget has blown up!" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "During a negotiation, your counterpart pulls down his lower eyelid with one finger. What does it mean?",
            options: [
              "\"Mon œil !\" He doesn't believe you.",
              "He has something in his eye.",
              "He's tired and wants a break.",
              "He agrees completely.",
            ],
            correctIndex: 0,
            explanation: "The \"mon œil\" gesture means disbelief.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "I've [had it up to here] with these delays.",
            sentence: "J'en ai ___ de ces retards.",
            answer: "ras le bol",
            explanation: "\"En avoir ras le bol\" (to be fed up), with its gesture: a flat hand over the top of the head.",
          },
        ],
      },
      {
        heading: "Recognise them, don't make them",
        body: [
          "These gestures are informal; in a presentation they can be fatal if you do them unconsciously (a moue while a client speaks), but recognising them across the table is a real advantage in negotiation.",
        ],
        examples: [
          { es: "Il a fait la moue pendant que le client parlait.", en: "He pulled a face while the client was speaking." },
          {
            es: "Repérer ces signes chez l'autre partie est un atout.",
            en: "Spotting these signs in the other party is an asset.",
          },
          { es: "Évitez ces gestes en présentation.", en: "Avoid these gestures in a presentation." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Recognising [a pout] across the table is a real advantage.",
            sentence: "Repérer ___ en face est un vrai avantage.",
            answer: "une moue",
            explanation: "In a presentation an unconscious \"moue\" can be fatal; spotting one across the table helps you negotiate.",
          },
        ],
      },
      {
        heading: "Taming verbal tics",
        body: [
          "The verbal tics to tame: \"euh\" (the filler), \"voilà\" (used to end every sentence), \"du coup\" (so, constantly), \"en fait\" (actually, at the start of every answer), \"genre\" and \"en mode\" (among younger speakers), \"j'ai envie de dire\" (I'd be tempted to say). They are normal in conversation but, piled up, they make a speaker sound unprepared. Replace them with a silence: a pause sounds more confident than \"euh\".",
        ],
        examples: [
          {
            es: "Du coup, en fait, voilà, euh... c'est un peu compliqué.",
            en: "So, actually, well, er... it's a bit complicated. (tics to avoid)",
          },
          { es: "Remplacez les « euh » par un silence.", en: "Replace the ers with a silence." },
          { es: "Bonne question. (pause) La réponse est oui.", en: "Good question. (pause) The answer is yes." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it into a confident answer by removing the verbal tics.",
            source: "Euh, du coup, en fait, le projet est rentable.",
            answer: "Le projet est rentable.",
            explanation: "\"Euh\", \"du coup\" and \"en fait\" piled up make a speaker sound unprepared; a silence sounds more confident.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "matching",
        instructions: "Match each French gesture or word to its meaning.",
        pairs: [
          { left: "faire la moue", right: "to show doubt with a pout" },
          { left: "hausser les épaules", right: "to shrug" },
          { left: "mon œil !", right: "I don't believe it!" },
          { left: "le débit", right: "the rate of speech" },
          { left: "la gestuelle", right: "one's gestures as a whole" },
        ],
        explanation: "The vocabulary of non-verbal communication, useful on both sides of the table.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "She speaks too fast: nobody can follow her.",
        answer: "Son débit est trop rapide : personne ne peut la suivre.",
        altAnswers: [
          "Elle parle trop vite : personne ne peut la suivre.",
          "Son débit est trop rapide : personne ne la suit.",
          "Elle parle trop vite : personne ne la suit.",
        ],
        explanation: "\"Son débit est trop rapide\" names the fault precisely.",
      },
      {
        type: "multiple-choice",
        question: "Which answer sounds most confident in a presentation?",
        options: [
          "Bonne question. (pause) Le chiffre est de vingt pour cent.",
          "Euh, du coup, en fait, voilà, c'est vingt pour cent.",
          "Genre, vingt pour cent, en mode à peu près.",
          "J'ai envie de dire, euh, vingt pour cent, voilà.",
        ],
        correctIndex: 0,
        explanation: "A pause replaces the fillers and makes the answer sound prepared.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Avoid reading your slides aloud.",
        words: ["Évitez", "de lire", "vos diapositives", "à voix haute."],
        translation: "Avoid reading your slides aloud.",
        explanation: "\"Éviter de\" + infinitive: reading the slides means turning your back on the audience.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Il a haussé ses épaules.",
        answer: "Il a haussé les épaules.",
        explanation: "With parts of the body, French uses the definite article: \"hausser les épaules\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Don't fiddle with your glasses while you're speaking.",
        answer: "Ne tripotez pas vos lunettes pendant que vous parlez.",
        altAnswers: [
          "Ne tripote pas tes lunettes pendant que tu parles.",
          "Évitez de tripoter vos lunettes pendant que vous parlez.",
          "Ne touchez pas sans cesse vos lunettes pendant que vous parlez.",
        ],
        explanation: "\"Tripoter\" takes a direct object: \"tripoter ses lunettes\".",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "He [avoided the eyes] of the shareholders.",
        sentence: "Il ___ des actionnaires.",
        answer: "fuyait le regard",
        altAnswers: ["évitait le regard", "a fui le regard", "a évité le regard"],
        explanation: "\"Fuir le regard\" (to avoid eye contact) is a sign of nervousness.",
      },
      {
        type: "dictation",
        audio: "Il a su ménager un silence avant le chiffre clé.",
        explanation: "\"Ménager un silence\": the deliberate pause before a key figure.",
      },
      {
        type: "speak",
        text: "C'est absolument inacceptable.",
        prompt: "Say it in French, putting the emphasis on the word choice: It's absolutely unacceptable.",
        explanation: "\"Absolument\" carries the emphasis; add \"l'accent d'insistance\" on \"in-AC-ceptable\" if you like.",
      },
    ],
  },
  {
    slug: "c2-body-language-text-detective",
    level: "FR-C2",
    number: 2,
    title: "Text Detective: Le Langage Non Verbal",
    summary: "Read a journalist's account of a CEO's presentation and decide which gestures and habits convey confidence and which undermine it, justifying each with a quote.",
    duration: "18 min",
    sections: [
      {
        heading: "Your task",
        body: [
          "Read this extract from an (invented) business column describing the annual presentation of Hélios Énergie's CEO, Marc Duverger. Your task: sort what conveys confidence (\"ce qui inspire confiance\") from what undermines it (\"ce qui dessert l'orateur\"), quoting the text.",
        ],
        examples: [
          { es: "Ce qui inspire confiance : une démarche assurée.", en: "What inspires confidence: a confident stride." },
          { es: "Ce qui dessert l'orateur : un débit trop rapide.", en: "What undermines the speaker: speaking too fast." },
          { es: "Citez le texte pour justifier votre réponse.", en: "Quote the text to justify your answer." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What does « ce qui dessert l'orateur » mean?",
            options: [
              "What undermines the speaker",
              "What serves the speaker well",
              "What the speaker serves",
              "What the speaker says",
            ],
            correctIndex: 0,
            explanation: "\"Desservir quelqu'un\" means to do them a disservice, the opposite of \"servir\".",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "A monotonous voice [undermines] the speaker.",
            sentence: "Une voix monocorde ___ l'orateur.",
            answer: "dessert",
            explanation: "\"Desservir\" (to undermine, to do a disservice to), present \"il dessert\".",
          },
        ],
      },
      {
        heading: "Extract 1: the entrance",
        body: [
          "« Il est 10 heures précises lorsque Marc Duverger monte sur l'estrade. Démarche assurée, costume sombre sans cravate, il laisse passer trois longues secondes avant de prendre la parole, le regard posé sur les premiers rangs. Puis, d'une voix grave et posée : \"Mesdames et Messieurs, l'année a été difficile. Je ne vous dirai pas le contraire.\" Le ton est donné. »",
        ],
        examples: [
          {
            es: "Il est 10 heures précises lorsque Marc Duverger monte sur l'estrade.",
            en: "It is exactly 10 o'clock when Marc Duverger steps onto the platform.",
          },
          { es: "Démarche assurée, costume sombre sans cravate.", en: "Confident stride, dark suit, no tie." },
          {
            es: "Il laisse passer trois longues secondes avant de prendre la parole.",
            en: "He lets three long seconds pass before he speaks.",
          },
          { es: "Le regard posé sur les premiers rangs.", en: "His eyes resting on the front rows." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which detail of the entrance shows confidence through silence?",
            options: [
              "« il laisse passer trois longues secondes avant de prendre la parole »",
              "« costume sombre sans cravate »",
              "« il est 10 heures précises »",
              "« Mesdames et Messieurs »",
            ],
            correctIndex: 0,
            explanation: "A deliberate silence before speaking signals self-control.",
          },
        ],
      },
      {
        heading: "Analysis 1: what inspires confidence",
        body: [
          "Analysis: the confident entrance (\"démarche assurée\"), the silence before speaking (\"il laisse passer trois longues secondes\"), eye contact (\"le regard posé sur\") and the measured voice (\"d'une voix grave et posée\") all inspire confidence. The opening admits a difficulty frankly, which builds ethos. \"Le ton est donné\" (the tone is set) is the journalist's verdict.",
        ],
        examples: [
          {
            es: "D'une voix grave et posée, il reconnaît que l'année a été difficile.",
            en: "In a deep, measured voice, he admits the year has been difficult.",
          },
          { es: "Le ton est donné.", en: "The tone is set." },
          {
            es: "Elle reconnaît d'emblée ses erreurs, ce qui renforce son crédit.",
            en: "She admits her mistakes straight away, which strengthens her credibility.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "From the first sentence, the tone is set.",
            answer: "Dès la première phrase, le ton est donné.",
            altAnswers: ["Dès la première phrase, le ton est posé."],
            explanation: "\"Le ton est donné\" (the tone is set) is the journalist's verdict on an opening.",
          },
        ],
      },
      {
        heading: "Extract 2: the slip",
        body: [
          "« Les choses se gâtent lorsqu'il aborde les résultats financiers. Le dirigeant se tourne vers l'écran, lit ses diapositives à voix haute, et son débit s'accélère. À deux reprises, il s'interrompt pour chercher un chiffre dans ses notes. Ses mains, jusque-là immobiles, tripotent la télécommande. Un \"euh... en fait\" lui échappe. Dans la salle, quelques actionnaires échangent des regards. »",
        ],
        examples: [
          {
            es: "Les choses se gâtent lorsqu'il aborde les résultats financiers.",
            en: "Things go wrong when he gets to the financial results.",
          },
          {
            es: "Le dirigeant se tourne vers l'écran et lit ses diapositives à voix haute.",
            en: "The CEO turns to the screen and reads his slides aloud.",
          },
          {
            es: "À deux reprises, il s'interrompt pour chercher un chiffre dans ses notes.",
            en: "Twice he stops to look for a figure in his notes.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Twice], the minister lost his thread.",
            sentence: "___, le ministre a perdu le fil.",
            answer: "À deux reprises",
            explanation: "\"À deux reprises\" is the formal, journalistic way to say twice.",
          },
          {
            type: "listen-choose",
            audio: "Dans le public, certains regardent leur montre.",
            question: "What does this detail suggest?",
            options: [
              "The audience is getting impatient.",
              "The audience is punctual.",
              "The audience admires the speaker.",
              "The talk is about watches.",
            ],
            correctIndex: 0,
            explanation: "Like \"quelques actionnaires échangent des regards\", the audience's reaction shows attention slipping away.",
          },
        ],
      },
      {
        heading: "Analysis 2: what undermines him",
        body: [
          "Analysis: here everything undermines him. He turns to the screen and reads the slides (\"se tourne vers l'écran, lit ses diapositives\"), his pace speeds up (\"son débit s'accélère\"), he hesitates over figures (\"s'interrompt pour chercher un chiffre\"), fiddles with the remote (\"tripotent la télécommande\") and lets fillers slip out. The audience's reaction (\"échangent des regards\") confirms the loss of trust.",
        ],
        examples: [
          {
            es: "Ses mains, jusque-là immobiles, tripotent la télécommande.",
            en: "His hands, still until then, fiddle with the remote.",
          },
          { es: "Un « euh... en fait » lui échappe.", en: "An 'er... actually' slips out." },
          {
            es: "Dans la salle, quelques actionnaires échangent des regards.",
            en: "In the room, a few shareholders exchange glances.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Her pace speeds up and she reads her notes.",
            answer: "Son débit s'accélère et elle lit ses notes.",
            altAnswers: ["Son débit s'accélère et elle lit ses fiches."],
            explanation: "\"Son débit s'accélère\": the pronominal verb describes speech getting faster, a sign of lost control.",
          },
        ],
      },
      {
        heading: "The journalist's vocabulary",
        body: [
          "Note the journalist's vocabulary: \"les choses se gâtent\" (things go wrong), \"à deux reprises\" (twice, formally), \"jusque-là\" (until then), \"lui échappe\" (escapes him). The present tense (\"présent de narration\") makes the scene vivid, a common choice in reportage.",
        ],
        examples: [
          { es: "Jusque-là, tout allait bien.", en: "Until then, everything was going well." },
          { es: "Le match se gâte en seconde période.", en: "The match goes wrong in the second half." },
          { es: "Un soupir lui échappe.", en: "A sigh escapes him." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it to the présent de narration.",
            source: "Les choses se sont gâtées quand il a abordé le budget.",
            answer: "Les choses se gâtent quand il aborde le budget.",
            altAnswers: ["Les choses se gâtent lorsqu'il aborde le budget."],
            explanation: "The narrative present makes the scene vivid, as in reportage.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Un juron l'a échappé.",
            answer: "Un juron lui a échappé.",
            explanation: "\"Échapper à quelqu'un\" takes an indirect object: \"lui échappe\", \"lui a échappé\".",
          },
        ],
      },
      {
        heading: "Extract 3: the recovery",
        body: [
          "« Puis, comme s'il avait senti le vent tourner, Marc Duverger repose la télécommande, s'avance au bord de l'estrade et s'adresse directement à la salle : \"Je vais vous épargner les détails. Retenez une chose : nous avons tenu nos engagements sur l'emploi.\" Le silence qui suit vaut toutes les ovations. Il conclut sans notes, en balayant la salle du regard. À la sortie, un actionnaire résume : \"Il a eu un passage à vide, mais il a su se reprendre.\" »",
        ],
        examples: [
          {
            es: "Il s'avance au bord de l'estrade et s'adresse directement à la salle.",
            en: "He steps forward to the edge of the platform and speaks directly to the room.",
          },
          { es: "Je vais vous épargner les détails. Retenez une chose.", en: "I'll spare you the details. Remember one thing." },
          { es: "Le silence qui suit vaut toutes les ovations.", en: "The silence that follows is worth any standing ovation." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[I'll spare you] the figures.",
            sentence: "Je vais vous ___ les chiffres.",
            answer: "épargner",
            explanation: "\"Épargner quelque chose à quelqu'un\" (to spare someone something): the speaker simplifies to win the room back.",
          },
        ],
      },
      {
        heading: "Analysis 3: comme si + plus-que-parfait",
        body: [
          "Analysis: he recovers by abandoning the screen (\"repose la télécommande\"), coming closer (\"s'avance au bord de l'estrade\"), speaking directly (\"s'adresse directement à la salle\"), simplifying (\"retenez une chose\") and concluding without notes while making eye contact. \"Comme s'il avait senti le vent tourner\" uses \"comme si\" + plus-que-parfait, never the conditional.",
        ],
        examples: [
          {
            es: "Comme s'il avait senti le vent tourner, il repose la télécommande.",
            en: "As if he had sensed the tide turning, he puts down the remote.",
          },
          {
            es: "Il conclut sans notes, en balayant la salle du regard.",
            en: "He concludes without notes, sweeping the room with his eyes.",
          },
          { es: "Il parle comme s'il avait toujours connu la réponse.", en: "He speaks as if he had always known the answer." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Comme s'il aurait compris le danger, il change de ton.",
            answer: "Comme s'il avait compris le danger, il change de ton.",
            explanation: "\"Comme si\" never takes the conditional: \"comme s'il avait compris\" (plus-que-parfait).",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: She smiled as if she had won.",
            words: ["Elle a souri", "comme si", "elle avait", "gagné."],
            translation: "She smiled as if she had won.",
            explanation: "\"Comme si\" + plus-que-parfait for an earlier imagined event.",
          },
        ],
      },
      {
        heading: "The verdict",
        body: [
          "The shareholder's verdict uses two useful expressions: \"un passage à vide\" (a weak patch, a dip) and \"se reprendre\" (to pull oneself together, regain control). \"Le silence qui suit vaut toutes les ovations\" is a typical journalistic formula: a short sentence with a paradox.",
        ],
        examples: [
          {
            es: "Il a eu un passage à vide, mais il a su se reprendre.",
            en: "He had a weak patch, but he managed to pull himself together.",
          },
          {
            es: "Après un passage à vide en février, l'équipe s'est reprise.",
            en: "After a weak patch in February, the team pulled itself together.",
          },
          { es: "Le silence vaut parfois mieux qu'un long discours.", en: "Silence is sometimes worth more than a long speech." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "She had a weak patch in the middle of the speech.",
            answer: "Elle a eu un passage à vide au milieu du discours.",
            altAnswers: [
              "Elle a eu un passage à vide au milieu de son discours.",
              "Elle a connu un passage à vide au milieu du discours.",
              "Elle a connu un passage à vide au milieu de son discours.",
            ],
            explanation: "\"Un passage à vide\" (a weak patch, a dip).",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "multi-select",
        question: "Which details from the article convey confidence? (Choose all that apply.)",
        options: [
          "« démarche assurée »",
          "« le regard posé sur les premiers rangs »",
          "« son débit s'accélère »",
          "« tripotent la télécommande »",
          "« il conclut sans notes »",
        ],
        correctIndexes: [0, 1, 4],
        explanation: "A confident stride, steady eye contact and concluding without notes inspire trust; a faster pace and fiddling betray nerves.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "She puts down her notes and speaks directly to the jury.",
        answer: "Elle pose ses notes et s'adresse directement au jury.",
        altAnswers: [
          "Elle repose ses notes et s'adresse directement au jury.",
          "Elle pose ses notes et parle directement au jury.",
          "Elle laisse ses notes et s'adresse directement au jury.",
        ],
        explanation: "\"S'adresser à\": leaving the notes and facing the audience is how the CEO recovers.",
      },
      {
        type: "multiple-choice",
        question: "Why does the journalist write in the present tense?",
        options: [
          "It's the \"présent de narration\", which makes the scene vivid.",
          "Because the presentation hasn't happened yet.",
          "Because the passé composé is too formal for journalism.",
          "Because it is a direct quotation of the CEO.",
        ],
        correctIndex: 0,
        explanation: "The narrative present brings a past scene to life, a common choice in reportage.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "He managed [to pull himself together] after the first question.",
        sentence: "Il a su ___ après la première question.",
        answer: "se reprendre",
        explanation: "\"Se reprendre\" (to pull oneself together, regain control).",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Things went wrong when the questions started.",
        answer: "Les choses se sont gâtées quand les questions ont commencé.",
        altAnswers: [
          "Les choses se sont gâtées lorsque les questions ont commencé.",
          "Les choses se sont gâtées au moment des questions.",
        ],
        explanation: "\"Se gâter\" (to go wrong) takes \"être\" in the passé composé, with agreement.",
      },
      {
        type: "dictation",
        audio: "Le ton est donné dès les premières secondes.",
        explanation: "\"Le ton est donné\" and \"dès\" (from... on).",
      },
      {
        type: "speak",
        text: "Retenez une chose : nous avons tenu nos promesses.",
        prompt: "Say it in French: Remember one thing: we've kept our promises.",
        explanation: "\"Retenez une chose\" simplifies and wins the room back.",
      },
    ],
  },
  {
    slug: "c2-presentations-negotiation-6",
    level: "FR-C2",
    number: 3,
    title: "Présentations et Négociation, Part 6 of 8",
    summary: "Handling questions after a presentation: welcoming and clarifying, buying time, admitting you don't know and promising a follow-up, and redirecting without evading.",
    duration: "18 min",
    sections: [
      {
        heading: "Welcoming a question",
        body: [
          "The question session (\"la séance de questions\", \"les questions-réponses\", or simply \"l'échange avec la salle\") is where a presentation is won or lost. The opening formula is usually a brief acknowledgement: \"c'est une excellente question\", \"merci pour cette question\", \"vous mettez le doigt sur un point essentiel\" (you're putting your finger on a key point). Use them sparingly: praising every question sounds automatic.",
        ],
        examples: [
          {
            es: "C'est une excellente question, et je vous en remercie.",
            en: "That's an excellent question, and thank you for it.",
          },
          { es: "Vous mettez le doigt sur un point essentiel.", en: "You're putting your finger on a key point." },
          { es: "Je vais prendre les questions dans l'ordre.", en: "I'll take the questions in order." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Why should you not praise every question with « excellente question » ?",
            options: ["It sounds automatic.", "It is impolite in French.", "It is grammatically wrong.", "It ends the session."],
            correctIndex: 0,
            explanation: "A brief acknowledgement is welcome, but praising every question sounds automatic; use the formulas sparingly.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "You're [putting your finger on] a real problem.",
            sentence: "Vous ___ un vrai problème.",
            answer: "mettez le doigt sur",
            explanation: "\"Mettre le doigt sur\" (to put your finger on) acknowledges a pertinent question.",
          },
        ],
      },
      {
        heading: "Clarify before answering",
        body: [
          "Clarify before answering, especially when the question is long or loaded: \"si j'ai bien compris votre question, vous vous demandez si...\", \"vous voulez dire que...?\", \"pourriez-vous préciser ce que vous entendez par...?\". Reformulating also gives you a few seconds to think and lets you reframe a hostile question in neutral terms.",
        ],
        examples: [
          {
            es: "Si j'ai bien compris votre question, vous vous demandez si le budget sera tenu.",
            en: "If I've understood your question correctly, you're wondering whether the budget will be kept to.",
          },
          {
            es: "Pourriez-vous préciser ce que vous entendez par « rentabilité » ?",
            en: "Could you clarify what you mean by 'profitability'?",
          },
          { es: "Vous voulez dire que le projet est trop cher ?", en: "You mean the project is too expensive?" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "What exactly do you mean by 'risk'?",
            answer: "Qu'entendez-vous exactement par « risque » ?",
            altAnswers: [
              "Que voulez-vous dire exactement par « risque » ?",
              "Qu'entendez-vous exactement par risque ?",
              "Que voulez-vous dire exactement par risque ?",
              "Qu'entendez-vous par « risque », exactement ?",
            ],
            explanation: "\"Entendre par\" (to mean by) clarifies a loaded word and buys you a few seconds.",
          },
        ],
      },
      {
        heading: "The grammar of indirect questions",
        body: [
          "Note the grammar of indirect questions: \"vous vous demandez si nous avons...\" (no inversion, no \"est-ce que\"), \"vous voulez savoir pourquoi le projet a pris du retard\", \"ce que vous entendez par\". Learners often keep the direct-question order: \"*vous vous demandez est-ce que...\".",
        ],
        examples: [
          {
            es: "Vous voulez savoir pourquoi le projet a pris du retard.",
            en: "You want to know why the project has fallen behind.",
          },
          { es: "Elle veut savoir quand les travaux commenceront.", en: "She wants to know when the work will start." },
          { es: "Vous vous demandez combien coûtera le projet.", en: "You're wondering how much the project will cost." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which reformulation is grammatically correct?",
            options: [
              "Vous vous demandez si nous avons les moyens.",
              "Vous vous demandez est-ce que nous avons les moyens.",
              "Vous vous demandez avons-nous les moyens.",
              "Vous vous demandez que nous avons les moyens.",
            ],
            correctIndex: 0,
            explanation: "An indirect yes/no question uses \"si\" with statement word order.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the direct question into an indirect one, starting with \"Vous voulez savoir\".",
            source: "Pourquoi le chantier est-il arrêté ?",
            answer: "Vous voulez savoir pourquoi le chantier est arrêté.",
            explanation: "In an indirect question there is no inversion: \"pourquoi le chantier est arrêté\".",
          },
        ],
      },
      {
        heading: "Buying time honestly",
        body: [
          "To buy a few seconds: \"laissez-moi réfléchir un instant\", \"c'est une question complexe, qui mérite qu'on s'y arrête\", \"je vais tâcher d'être précis\". These are honest; what sounds evasive is a long answer that never arrives.",
        ],
        examples: [
          { es: "Laissez-moi réfléchir un instant.", en: "Let me think for a moment." },
          {
            es: "C'est une question complexe, qui mérite qu'on s'y arrête.",
            en: "It's a complex question that deserves some attention.",
          },
          { es: "Je vais tâcher d'être précis.", en: "I'll try to be precise." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which phrase honestly buys you a few seconds?",
            options: [
              "Laissez-moi réfléchir un instant.",
              "Ce n'est pas le sujet.",
              "Question suivante.",
              "Je n'ai rien à ajouter.",
            ],
            correctIndex: 0,
            explanation: "Asking for a moment is honest; what sounds evasive is dodging or a long answer that never arrives.",
          },
        ],
      },
      {
        heading: "Admitting you don't know",
        body: [
          "Admitting ignorance is acceptable in French professional culture if it comes with a commitment: \"Je n'ai pas le chiffre exact sous les yeux, mais je m'engage à vous le transmettre d'ici demain.\" \"Avoir sous les yeux\" (to have in front of you) and \"s'engager à\" (to commit to) make the admission sound responsible. Other forms: \"je ne voudrais pas vous dire de bêtise\" (I wouldn't want to tell you something wrong; slightly informal), \"je préfère vérifier avant de vous répondre\".",
        ],
        examples: [
          {
            es: "Je n'ai pas le chiffre exact sous les yeux, mais je m'engage à vous le transmettre d'ici demain.",
            en: "I don't have the exact figure in front of me, but I'll make sure to send it to you by tomorrow.",
          },
          { es: "Je ne voudrais pas vous dire de bêtise.", en: "I wouldn't want to tell you anything wrong." },
          { es: "Je préfère vérifier avant de vous répondre.", en: "I'd rather check before answering you." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I don't have the report in front of me.",
            answer: "Je n'ai pas le rapport sous les yeux.",
            altAnswers: ["Je n'ai pas le rapport devant moi."],
            explanation: "\"Avoir sous les yeux\" (to have in front of you) makes the admission sound precise and responsible.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "I [promise to] send you the figures by Friday.",
            sentence: "Je ___ vous envoyer les chiffres d'ici vendredi.",
            answer: "m'engage à",
            explanation: "\"S'engager à\" + infinitive turns an admission of ignorance into a commitment.",
          },
        ],
      },
      {
        heading: "Never bluff",
        body: [
          "Never bluff with an invented figure: in a French meeting, being caught is far worse than admitting you need to check. \"Je reviendrai vers vous\" (I'll get back to you) is common, though purists criticise it as a calque; \"je vous recontacterai\" or \"je vous ferai parvenir la réponse\" are irreproachable.",
        ],
        examples: [
          { es: "Je vous ferai parvenir la réponse par courriel.", en: "I'll send you the answer by email." },
          {
            es: "Je vous recontacterai dès que j'aurai les chiffres.",
            en: "I'll contact you again as soon as I have the figures.",
          },
          {
            es: "Inventer un chiffre, c'est risquer d'être pris en défaut.",
            en: "Inventing a figure means risking being caught out.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change the criticised calque to a form purists accept, with \"recontacter\".",
            source: "Je reviendrai vers vous la semaine prochaine.",
            answer: "Je vous recontacterai la semaine prochaine.",
            altAnswers: ["Je vous recontacte la semaine prochaine."],
            explanation: "\"Revenir vers quelqu'un\" is common but criticised as a calque; \"je vous recontacterai\" is irreproachable.",
          },
        ],
      },
      {
        heading: "Redirecting openly",
        body: [
          "Some questions are off-topic, too detailed or traps. Redirecting is legitimate if you say so openly: \"Permettez-moi de recentrer sur la question qui nous occupe\", \"c'est un vrai sujet, mais il dépasse le cadre de cette présentation\", \"je vous propose d'en discuter à l'issue de la séance\". \"Dépasser le cadre de\" (to go beyond the scope of) is the polite formula.",
        ],
        examples: [
          {
            es: "Permettez-moi de recentrer sur la question qui nous occupe.",
            en: "Allow me to bring us back to the question at hand.",
          },
          {
            es: "C'est un vrai sujet, mais il dépasse le cadre de cette présentation.",
            en: "That's a real issue, but it goes beyond the scope of this presentation.",
          },
          { es: "Je vous propose d'en discuter à l'issue de la séance.", en: "I suggest we discuss it after the session." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "This issue [goes beyond the scope of] our meeting.",
            sentence: "Cette question ___ notre réunion.",
            answer: "dépasse le cadre de",
            explanation: "\"Dépasser le cadre de\" is the polite formula for redirecting an off-topic question.",
          },
        ],
      },
      {
        heading: "Answer first, then redirect",
        body: [
          "What sounds evasive (\"la langue de bois\", wooden language, political doublespeak) is answering a different question without saying so, or drowning a question in generalities. The French are quick to call it out: \"vous ne répondez pas à ma question\". The honest structure is: short direct answer, then the redirection. \"Oui, le coût a augmenté de 12 %. Mais la vraie question, c'est ce que cet investissement va rapporter.\"",
        ],
        examples: [
          {
            es: "Oui, le coût a augmenté de 12 %. Mais la vraie question, c'est ce que cet investissement va rapporter.",
            en: "Yes, the cost rose by 12%. But the real question is what this investment will bring in.",
          },
          {
            es: "Vous ne répondez pas à ma question : c'est de la langue de bois.",
            en: "You're not answering my question: that's doublespeak.",
          },
          { es: "Le ministre a répondu à côté de la question.", en: "The minister didn't answer the question he was asked." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Vous ne répondez pas ma question.",
            answer: "Vous ne répondez pas à ma question.",
            explanation: "\"Répondre à\" + the question: the preposition is required.",
          },
        ],
      },
      {
        heading: "Check, then move on",
        body: [
          "Close each answer by checking: \"Est-ce que cela répond à votre question ?\" or \"J'espère avoir répondu à votre question.\" Then move on: \"Une autre question ? Oui, au fond de la salle.\"",
        ],
        examples: [
          { es: "Est-ce que cela répond à votre question ?", en: "Does that answer your question?" },
          { es: "J'espère avoir répondu à votre question.", en: "I hope I've answered your question." },
          { es: "Une autre question ? Oui, au fond de la salle.", en: "Another question? Yes, at the back of the room." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: I hope I've answered your concerns.",
            words: ["J'espère", "avoir répondu", "à vos", "inquiétudes."],
            translation: "I hope I've answered your concerns.",
            explanation: "\"Espérer\" + past infinitive (\"avoir répondu\") when the subject is the same.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "A shareholder asks a precise figure you don't know. What's the best reply?",
        options: [
          "Je n'ai pas le chiffre exact sous les yeux, mais je m'engage à vous le transmettre demain.",
          "C'est environ trente millions, je crois, à peu près.",
          "Ce n'est pas une question intéressante.",
          "Voilà, en fait, du coup, euh... je ne sais pas.",
        ],
        correctIndex: 0,
        explanation: "Admit and commit; bluffing or dismissing the question costs far more.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "You want to know when the factory will reopen.",
        answer: "Vous voulez savoir quand l'usine rouvrira.",
        altAnswers: [
          "Vous voulez savoir quand l'usine va rouvrir.",
          "Vous souhaitez savoir quand l'usine rouvrira.",
          "Vous voulez savoir quand l'usine réouvrira.",
        ],
        explanation: "Indirect question: no inversion after \"quand\", and the future for a future event.",
      },
      {
        type: "multiple-choice",
        question: "What is the honest structure for redirecting a tricky question?",
        options: [
          "A short direct answer first, then the redirection.",
          "A long answer about something else, without saying so.",
          "Ignore the question and take the next one.",
          "Ask the questioner to leave.",
        ],
        correctIndex: 0,
        explanation: "Answer briefly, then reframe openly; otherwise it sounds like \"langue de bois\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Je m'engage de vous répondre demain.",
        answer: "Je m'engage à vous répondre demain.",
        explanation: "\"S'engager à\" + infinitive, not \"de\".",
      },
      {
        type: "dictation",
        audio: "Je vous propose d'en reparler après la séance.",
        explanation: "\"Je vous propose d'en reparler\": a redirection that keeps the door open.",
      },
      {
        type: "speak",
        text: "Merci pour cette question. Si j'ai bien compris, vous vous demandez si les délais seront tenus.",
        prompt: "Say it in French: Thank you for this question. If I've understood correctly, you're wondering whether the deadlines will be met.",
        explanation: "Acknowledge, then reformulate with an indirect question: \"vous vous demandez si...\".",
      },
    ],
  },
  {
    slug: "c2-qa-session-dialogue-lab",
    level: "FR-C2",
    number: 4,
    title: "Dialogue Lab: La Séance de Questions",
    summary: "After presenting a hospital group's new digital patient record, answer three tough questioners, a hostile shareholder, a sceptical expert and a journalist, keeping your register and composure.",
    duration: "19 min",
    sections: [
      {
        heading: "The hostile shareholder",
        body: [
          "You are Nathalie Garnier, deputy director of a group of private clinics, and you have just presented the new digital patient record (\"le dossier patient numérique\"). The question session begins. First, a shareholder, M. Rocher, visibly irritated: « Quatorze millions d'euros pour un logiciel ! Et pendant ce temps, le dividende baisse. Vous vous moquez de nous ? »",
        ],
        examples: [
          {
            es: "M. Rocher : Quatorze millions d'euros pour un logiciel ! Vous vous moquez de nous ?",
            en: "Mr Rocher: Fourteen million euros for software! Are you making fun of us?",
          },
          {
            es: "Nathalie vient de présenter le dossier patient numérique.",
            en: "Nathalie has just presented the digital patient record.",
          },
          { es: "Un actionnaire prend la parole, visiblement agacé.", en: "A shareholder speaks up, visibly annoyed." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What is M. Rocher really complaining about?",
            options: [
              "The cost of the software while the dividend falls",
              "The quality of the clinics' care",
              "The length of the presentation",
              "The choice of supplier",
            ],
            correctIndex: 0,
            explanation: "Fourteen million for software while the dividend falls: the substance is money, whatever the tone.",
          },
        ],
      },
      {
        heading: "Acknowledge, answer, reframe",
        body: [
          "The trap: answering the tone instead of the substance. Nathalie acknowledges the frustration, answers the figure, then reframes: « Je comprends votre inquiétude, Monsieur. Ces quatorze millions sont étalés sur cinq ans. Et ce système nous fera économiser environ quatre millions par an dès la troisième année. Il ne s'agit donc pas d'une dépense, mais d'un investissement rentable. »",
        ],
        examples: [
          { es: "Nathalie : Je comprends votre inquiétude, Monsieur.", en: "Nathalie: I understand your concern, sir." },
          {
            es: "Nathalie : Ces quatorze millions sont étalés sur cinq ans.",
            en: "Nathalie: These fourteen million are spread over five years.",
          },
          {
            es: "Nathalie : Ce système nous fera économiser environ quatre millions par an dès la troisième année.",
            en: "Nathalie: This system will save us about four million a year from the third year.",
          },
          {
            es: "Nathalie : Il ne s'agit donc pas d'une dépense, mais d'un investissement rentable.",
            en: "Nathalie: So it's not an expense, but a profitable investment.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "M. Rocher asks angrily « Vous vous moquez de nous ? ». What is Nathalie's best first sentence?",
            options: [
              "Je comprends votre inquiétude, Monsieur.",
              "Non, je ne me moque pas de vous, calmez-vous.",
              "Je comprends votre colère, elle est légitime.",
              "Si vous n'êtes pas content, vendez vos actions.",
            ],
            correctIndex: 0,
            explanation: "Name the concern, not the anger, and don't repeat the insult.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The cost [is spread over] three years.",
            sentence: "Le coût ___ trois ans.",
            answer: "est étalé sur",
            explanation: "\"Être étalé sur\" (to be spread over) makes a large figure easier to accept.",
          },
        ],
      },
      {
        heading: "Why the answer works",
        body: [
          "Notice: \"je comprends votre inquiétude\" (not \"votre colère\", which would escalate), precise figures, the future of certainty (\"nous fera économiser\") and a reframing with \"il ne s'agit pas de... mais de\". She never repeats the insult (\"vous vous moquez de nous\").",
        ],
        examples: [
          { es: "M. Rocher : Rentable, c'est vous qui le dites.", en: "Mr Rocher: Profitable, so you say." },
          { es: "Il ne s'agit pas d'un coût, mais d'une économie.", en: "It's not a cost, but a saving." },
          {
            es: "Je comprends votre inquiétude, mais les chiffres sont clairs.",
            en: "I understand your concern, but the figures are clear.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into a reframing with \"Il ne s'agit pas de... mais de...\".",
            source: "Ce n'est pas une contrainte, c'est une chance.",
            answer: "Il ne s'agit pas d'une contrainte, mais d'une chance.",
            explanation: "\"Il ne s'agit pas de... mais de...\" reframes the question; \"de\" is repeated before each noun.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Il ne s'agit pas une dépense, mais un investissement.",
            answer: "Il ne s'agit pas d'une dépense, mais d'un investissement.",
            explanation: "\"Il s'agit de\" always takes \"de\", in both halves of the contrast.",
          },
        ],
      },
      {
        heading: "The sceptical expert",
        body: [
          "Second question, from Dr Lemaire, a cardiologist: « Avec tout le respect que je vous dois, ces systèmes promettent toujours monts et merveilles. Dans mon ancien hôpital, le logiciel a planté pendant trois jours. Qu'est-ce qui vous fait croire que ce sera différent ? » \"Avec tout le respect que je vous dois\" announces a strong criticism; \"promettre monts et merveilles\" means to promise the moon.",
        ],
        examples: [
          {
            es: "Dr Lemaire : Avec tout le respect que je vous dois, ces systèmes promettent toujours monts et merveilles.",
            en: "Dr Lemaire: With all due respect, these systems always promise the moon.",
          },
          {
            es: "Dr Lemaire : Dans mon ancien hôpital, le logiciel a planté pendant trois jours.",
            en: "Dr Lemaire: In my previous hospital, the software crashed for three days.",
          },
          {
            es: "Dr Lemaire : Qu'est-ce qui vous fait croire que ce sera différent ?",
            en: "Dr Lemaire: What makes you think it will be any different?",
          },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Avec tout le respect que je vous dois, vos chiffres sont faux.",
            question: "What is the speaker doing?",
            options: [
              "Making a strong criticism, politely framed",
              "Paying a compliment",
              "Apologising",
              "Asking for more figures",
            ],
            correctIndex: 0,
            explanation: "\"Avec tout le respect que je vous dois\" announces a strong criticism.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The advertisement [promises the moon].",
            sentence: "La publicité ___.",
            answer: "promet monts et merveilles",
            explanation: "\"Promettre monts et merveilles\" (to promise the moon), here in the present with a singular subject.",
          },
        ],
      },
      {
        heading: "Concede the limits, then give facts",
        body: [
          "An expert respects precision and honesty about limits. Nathalie: « Vous avez raison de soulever ce point, et je ne prétendrai pas que le risque est nul. Trois garanties, toutefois : un hébergement sur deux sites distincts, une procédure papier de secours, et un contrat qui impose au prestataire un délai de rétablissement de quatre heures. » She concedes (\"je ne prétendrai pas que\"), then gives three concrete facts.",
        ],
        examples: [
          { es: "Nathalie : Vous avez raison de soulever ce point.", en: "Nathalie: You're right to raise that point." },
          { es: "Nathalie : Je ne prétendrai pas que le risque est nul.", en: "Nathalie: I won't claim that the risk is zero." },
          {
            es: "Trois garanties, toutefois : deux sites, une procédure de secours, un contrat.",
            en: "Three guarantees, however: two sites, a backup procedure, a contract.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I won't claim the project is perfect.",
            answer: "Je ne prétendrai pas que le projet est parfait.",
            altAnswers: [
              "Je ne prétendrai pas que le projet soit parfait.",
              "Je ne vais pas prétendre que le projet est parfait.",
              "Je ne vais pas prétendre que le projet soit parfait.",
            ],
            explanation: "\"Je ne prétendrai pas que\" concedes the limits honestly before the concrete guarantees.",
          },
        ],
      },
      {
        heading: "Plain technical vocabulary",
        body: [
          "\"Le prestataire\" (the service provider), \"un délai de rétablissement\" (a recovery time), \"une procédure de secours\" (a backup procedure): technical but plain vocabulary shows command of the file without jargon.",
        ],
        examples: [
          {
            es: "Nathalie : Le contrat impose au prestataire un délai de rétablissement de quatre heures.",
            en: "Nathalie: The contract requires the provider to restore service within four hours.",
          },
          {
            es: "Le prestataire doit rétablir le service en quatre heures.",
            en: "The provider must restore service within four hours.",
          },
          { es: "Une procédure de secours sur papier est prévue.", en: "A paper backup procedure is planned." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Our [service provider] guarantees a recovery time of two hours.",
            sentence: "Notre ___ garantit un délai de rétablissement de deux heures.",
            answer: "prestataire",
            explanation: "\"Le prestataire\" (the service provider): technical but plain vocabulary.",
          },
        ],
      },
      {
        heading: "The journalist",
        body: [
          "Last, a journalist from the regional daily: « Une question simple : les données de santé des patients seront-elles stockées en France ? Et pouvez-vous garantir qu'elles ne seront jamais vendues ? » The journalist wants a quotable yes or no. Vague answers will be printed as evasion.",
        ],
        examples: [
          {
            es: "Le journaliste : Les données des patients seront-elles stockées en France ?",
            en: "The journalist: Will patients' data be stored in France?",
          },
          { es: "Une question simple : oui ou non ?", en: "A simple question: yes or no?" },
          { es: "Une réponse vague sera citée comme une esquive.", en: "A vague answer will be quoted as evasion." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into a formal question with complex inversion.",
            source: "Est-ce que les dossiers seront archivés à Lyon ?",
            answer: "Les dossiers seront-ils archivés à Lyon ?",
            explanation: "Complex inversion: the noun subject stays, and \"ils\" is added after the verb: \"seront-ils\".",
          },
        ],
      },
      {
        heading: "Short, quotable, checkable",
        body: [
          "Nathalie answers directly and precisely, then adds the legal frame: « Oui, les données seront hébergées en France, chez un hébergeur certifié pour les données de santé. Et non, elles ne seront jamais vendues : la loi l'interdit, et notre contrat le rappelle expressément. » Short, quotable, and checkable.",
        ],
        examples: [
          {
            es: "Nathalie : Oui, les données seront hébergées en France, chez un hébergeur certifié.",
            en: "Nathalie: Yes, the data will be hosted in France, by a certified host.",
          },
          {
            es: "Nathalie : Elles ne seront jamais vendues : la loi l'interdit.",
            en: "Nathalie: It will never be sold: the law forbids it.",
          },
          { es: "Nathalie : Notre contrat le rappelle expressément.", en: "Nathalie: Our contract states it explicitly." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Yes, the servers will be located in France.",
            answer: "Oui, les serveurs seront situés en France.",
            altAnswers: [
              "Oui, les serveurs seront installés en France.",
              "Oui, les serveurs se trouveront en France.",
              "Oui, les serveurs seront localisés en France.",
              "Oui, les serveurs seront hébergés en France.",
            ],
            explanation: "Answer yes or no first, then add the detail: quotable and checkable.",
          },
        ],
      },
      {
        heading: "Ending gracefully",
        body: [
          "She ends the session gracefully: « Je vois qu'il nous reste peu de temps. Je reste à votre disposition à l'issue de la séance pour toutes les questions auxquelles nous n'aurions pas pu répondre. Merci de votre attention. » Note \"auxquelles nous n'aurions pas pu répondre\": the conditional past makes the possibility polite.",
        ],
        examples: [
          {
            es: "Nathalie : Je reste à votre disposition à l'issue de la séance.",
            en: "Nathalie: I'm available after the session.",
          },
          {
            es: "Nathalie : Pour toutes les questions auxquelles nous n'aurions pas pu répondre.",
            en: "Nathalie: For any questions we may not have been able to answer.",
          },
          { es: "Il nous reste peu de temps.", en: "We have little time left." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Je reste à votre disposition pour les questions auxquels nous n'aurions pas pu répondre.",
            answer: "Je reste à votre disposition pour les questions auxquelles nous n'aurions pas pu répondre.",
            explanation: "\"Auxquelles\" agrees with \"les questions\" (feminine plural): \"répondre à\" + lesquelles.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "Cheap, [so you say].",
        sentence: "Bon marché, ___.",
        answer: "c'est vous qui le dites",
        explanation: "\"C'est vous qui le dites\" (so you say) signals open scepticism.",
      },
      {
        type: "multiple-choice",
        question: "The journalist asks: « Pouvez-vous garantir que les données ne seront jamais vendues ? » What is the best answer?",
        options: [
          "Non, elles ne seront jamais vendues : la loi l'interdit, et notre contrat le rappelle.",
          "C'est une question complexe qui dépasse le cadre de cette séance.",
          "Je ne voudrais pas vous dire de bêtise, on verra.",
          "Les données, vous savez, c'est un vaste sujet.",
        ],
        correctIndex: 0,
        explanation: "A journalist needs a clear, checkable answer; anything vague will be printed as evasion.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Thank you for your attention; I'm available afterwards.",
        words: ["Merci de votre attention ;", "je reste", "à votre disposition", "ensuite."],
        translation: "Thank you for your attention; I'm available afterwards.",
        explanation: "\"Rester à la disposition de\" closes the session gracefully.",
      },
      {
        type: "matching",
        instructions: "Match each questioner to the best strategy.",
        pairs: [
          { left: "the hostile shareholder", right: "acknowledge the concern, give figures, reframe" },
          { left: "the sceptical expert", right: "concede the limits, then give concrete guarantees" },
          { left: "the journalist", right: "answer yes or no clearly, then add the frame" },
          { left: "an off-topic question", right: "say it goes beyond the scope and offer to talk later" },
        ],
        explanation: "Each audience needs a different answer shape, with the same composure.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "What makes you think the price will fall?",
        answer: "Qu'est-ce qui vous fait croire que le prix va baisser ?",
        altAnswers: [
          "Qu'est-ce qui vous fait penser que le prix va baisser ?",
          "Qu'est-ce qui vous fait croire que le prix baissera ?",
          "Qu'est-ce qui vous fait penser que le prix baissera ?",
        ],
        explanation: "\"Qu'est-ce qui vous fait croire que\" + indicative: the expert's challenge.",
      },
      {
        type: "dictation",
        audio: "Le contrat le prévoit expressément.",
        explanation: "\"Expressément\" (explicitly) makes the answer checkable.",
      },
      {
        type: "speak",
        text: "Je comprends votre inquiétude, mais il s'agit d'un investissement, pas d'une dépense.",
        prompt: "Say it in French: I understand your concern, but this is an investment, not an expense.",
        explanation: "Acknowledge the concern, then reframe with \"il s'agit de\".",
      },
    ],
  },
  {
    slug: "c2-presentations-negotiation-7",
    level: "FR-C2",
    number: 5,
    title: "Présentations et Négociation, Part 7 of 8",
    summary: "Closing the deal (\"conclure\", \"finaliser\", \"les modalités\", \"le calendrier\", \"le protocole d'accord\", \"la lettre d'intention\") and the confirmation email, with the agreement rules of \"ci-joint\".",
    duration: "19 min",
    sections: [
      {
        heading: "The vocabulary of closing",
        body: [
          "Closing has its own vocabulary. \"Conclure un accord\" (to conclude a deal) or \"aboutir à un accord\" (to reach one); \"finaliser\" (to finalise; widely used, once criticised as an anglicism); \"arrêter les modalités\" (to settle the terms and arrangements); \"fixer le calendrier\" (to set the timetable). \"Les modalités\" is a key word: how something will be done (payment, delivery, review).",
        ],
        examples: [
          {
            es: "Après six mois de discussions, les deux groupes ont conclu un accord.",
            en: "After six months of talks, the two groups concluded a deal.",
          },
          { es: "Il nous reste à arrêter les modalités de paiement.", en: "We still have to settle the payment arrangements." },
          { es: "Fixons dès maintenant le calendrier de livraison.", en: "Let's set the delivery timetable right now." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "We still have to [set] the timetable.",
            sentence: "Il nous reste à ___ le calendrier.",
            answer: "fixer",
            altAnswers: ["arrêter"],
            explanation: "\"Fixer le calendrier\" (to set the timetable), like \"arrêter les modalités\" (to settle the terms).",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "The two companies reached an agreement.",
            answer: "Les deux entreprises ont abouti à un accord.",
            altAnswers: [
              "Les deux entreprises sont parvenues à un accord.",
              "Les deux sociétés ont abouti à un accord.",
              "Les deux entreprises ont conclu un accord.",
              "Les deux sociétés ont conclu un accord.",
              "Les deux sociétés sont parvenues à un accord.",
            ],
            explanation: "\"Aboutir à un accord\" (to reach) or \"conclure un accord\" (to conclude).",
          },
        ],
      },
      {
        heading: "Intermediate documents",
        body: [
          "Intermediate documents: \"une lettre d'intention\" (a letter of intent, non-binding or partly binding), \"un protocole d'accord\" (a memorandum of understanding), then \"le contrat\" itself. Saying \"nous avons un accord de principe\" means the main points are agreed, details to come.",
        ],
        examples: [
          {
            es: "Les deux parties ont signé un protocole d'accord.",
            en: "The two parties signed a memorandum of understanding.",
          },
          { es: "Nous avons signé une lettre d'intention.", en: "We signed a letter of intent." },
          {
            es: "Nous avons un accord de principe ; les détails suivront.",
            en: "We have an agreement in principle; the details will follow.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What does « nous avons un accord de principe » mean?",
            options: [
              "The main points are agreed, with details to come.",
              "The contract has been signed.",
              "There is no agreement at all.",
              "The deal fell through on a matter of principle.",
            ],
            correctIndex: 0,
            explanation: "An agreement in principle fixes the main points; the details and the contract come later.",
          },
        ],
      },
      {
        heading: "The verbal close",
        body: [
          "The verbal close: recap and confirm. \"Si je récapitule, nous nous sommes mis d'accord sur trois points.\" \"Nous sommes donc d'accord pour...\" \"Il ne nous reste plus qu'à formaliser tout cela par écrit.\" Note \"se mettre d'accord sur\" (to agree on) with \"être\" in the compound tenses: \"nous nous sommes mis d'accord\".",
        ],
        examples: [
          {
            es: "Si je récapitule, nous nous sommes mis d'accord sur trois points.",
            en: "To recap, we've agreed on three points.",
          },
          {
            es: "Il ne nous reste plus qu'à formaliser tout cela par écrit.",
            en: "All that remains is to put it all in writing.",
          },
          { es: "Nous sommes donc d'accord pour une livraison mensuelle.", en: "So we agree on a monthly delivery." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Nous nous avons mis d'accord sur le prix.",
            answer: "Nous nous sommes mis d'accord sur le prix.",
            explanation: "\"Se mettre d'accord\" is pronominal, so it takes \"être\" in compound tenses: \"nous nous sommes mis d'accord\".",
          },
        ],
      },
      {
        heading: "Opening the confirmation email",
        body: [
          "After the meeting, you confirm in writing, the same day if possible. The opening formulas: \"Suite à notre entretien de ce jour\" (following our meeting today; \"suite à\" is universal in business, though purists prefer \"à la suite de\"), \"Comme convenu\" (as agreed), \"Je me permets de vous confirmer\" (I am writing to confirm), \"Je reviens vers vous concernant\".",
        ],
        examples: [
          {
            es: "Suite à notre entretien de ce jour, je me permets de vous confirmer les termes de notre accord.",
            en: "Following our meeting today, I'm writing to confirm the terms of our agreement.",
          },
          { es: "Comme convenu, je vous adresse le devis.", en: "As agreed, I'm sending you the quote." },
          { es: "À la suite de notre réunion, voici le compte rendu.", en: "Following our meeting, here are the minutes." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change \"suite à\" to the form purists prefer.",
            source: "Suite à votre appel, je vous envoie le devis.",
            answer: "À la suite de votre appel, je vous envoie le devis.",
            explanation: "\"Suite à\" is universal in business, but purists prefer \"à la suite de\".",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[As agreed], here is the revised quote.",
            sentence: "___, voici le devis révisé.",
            answer: "Comme convenu",
            explanation: "\"Comme convenu\" (as agreed) recalls the meeting in two words.",
          },
        ],
      },
      {
        heading: "The body and the close",
        body: [
          "The body recaps the agreement in a structured way, often with a numbered list of nominal phrases: \"1. Prix unitaire : 4,20 euros HT. 2. Livraison : hebdomadaire, à compter du 1er mars.\" Then attachments: \"Vous trouverez ci-joint le protocole d'accord.\" And the close: \"Dans l'attente de votre retour\" (looking forward to hearing from you), \"Je reste à votre disposition pour tout complément d'information\", followed by \"Bien cordialement\" or \"Cordialement\" for an established professional relationship.",
        ],
        examples: [
          { es: "Prix unitaire : 4,20 euros HT.", en: "Unit price: 4.20 euros excluding tax." },
          { es: "Vous trouverez ci-joint le protocole d'accord.", en: "Please find attached the memorandum of understanding." },
          {
            es: "Dans l'attente de votre retour, je vous prie d'agréer mes salutations distinguées.",
            en: "Looking forward to hearing from you, yours faithfully.",
          },
          {
            es: "Je reste à votre disposition pour tout complément d'information.",
            en: "I remain at your disposal for any further information.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Looking forward to hearing from you], kind regards.",
            sentence: "___, bien cordialement.",
            answer: "Dans l'attente de votre retour",
            altAnswers: ["Dans l'attente de votre réponse"],
            explanation: "\"Dans l'attente de votre retour / réponse\": the standard closing line.",
          },
        ],
      },
      {
        heading: "HT, TTC, à compter du",
        body: [
          "\"HT\" (hors taxes, excluding tax) and \"TTC\" (toutes taxes comprises, including tax) are essential abbreviations in any commercial email; \"à compter du\" (as from) introduces the start date.",
        ],
        examples: [
          {
            es: "Comme convenu, la livraison sera hebdomadaire à compter du 1er mars.",
            en: "As agreed, delivery will be weekly as from 1 March.",
          },
          { es: "Prix total : 1 200 euros TTC.", en: "Total price: 1,200 euros including tax." },
          { es: "Le nouveau tarif s'applique à compter du 1er avril.", en: "The new rate applies as from 1 April." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Le montant s'élève à cinq cents euros hors taxes.",
            question: "What does it mean?",
            options: [
              "The amount is 500 euros excluding tax.",
              "The amount is 500 euros including tax.",
              "The amount is exempt from tax.",
              "The taxes come to 500 euros.",
            ],
            correctIndex: 0,
            explanation: "\"Hors taxes\" (HT) means excluding tax; \"toutes taxes comprises\" (TTC) means including tax.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The contract takes effect [as from] 1 June.",
            sentence: "Le contrat prend effet ___ 1er juin.",
            answer: "à compter du",
            altAnswers: ["à partir du"],
            explanation: "\"À compter du\" + date introduces the start date (\"de + le\" contracts to \"du\").",
          },
        ],
      },
      {
        heading: "Ci-joint: invariable",
        body: [
          "\"Ci-joint\" (attached, enclosed) is a classic trap even for natives. It is invariable at the start of a sentence: \"Ci-joint les documents demandés.\" It is invariable before a noun without article or determiner: \"Vous trouverez ci-joint copie du contrat.\" In these positions it works like an adverb.",
        ],
        examples: [
          { es: "Ci-joint les documents demandés.", en: "Attached are the documents requested." },
          { es: "Vous trouverez ci-joint copie du contrat signé.", en: "Please find attached a copy of the signed contract." },
          { es: "Ci-joint la liste des participants.", en: "Attached is the list of participants." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence is correct?",
            options: [
              "Vous trouverez ci-joint copie de la facture.",
              "Vous trouverez ci-jointe copie de la facture.",
              "Les factures ci-joint sont à régler sous trente jours.",
              "Ci-jointes les factures.",
            ],
            correctIndex: 0,
            explanation: "Before a noun without article, and at the start of a sentence, \"ci-joint\" is invariable; after the noun it agrees (\"factures ci-jointes\").",
          },
        ],
      },
      {
        heading: "Ci-joint: when it agrees",
        body: [
          "It agrees like an adjective when it follows the noun: \"les pièces ci-jointes\", \"la facture ci-jointe\", or when it is an attribute after \"être\": \"les documents sont ci-joints\". Before a noun with an article or determiner, both are accepted: \"Vous trouverez ci-joint la facture\" or \"ci-jointe la facture\"; the invariable form is more common in practice.",
        ],
        examples: [
          {
            es: "Merci de nous retourner les pièces ci-jointes avant le 15.",
            en: "Please return the attached documents before the 15th.",
          },
          {
            es: "La facture ci-jointe tient compte de la remise accordée.",
            en: "The attached invoice takes the agreed discount into account.",
          },
          { es: "Les justificatifs sont ci-joints.", en: "The supporting documents are attached." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Please sign [the attached] forms.",
            sentence: "Merci de signer les formulaires ___.",
            answer: "ci-joints",
            explanation: "After the noun, \"ci-joint\" agrees like an adjective: \"les formulaires ci-joints\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Les photos ci-joint montrent les dégâts.",
            answer: "Les photos ci-jointes montrent les dégâts.",
            explanation: "After the noun it agrees: \"les photos ci-jointes\" (feminine plural).",
          },
        ],
      },
      {
        heading: "Ci-inclus, ci-annexé, vous trouverez",
        body: [
          "\"Ci-inclus\" (enclosed) follows exactly the same rules, and so does \"ci-annexé\". \"Veuillez trouver ci-joint\" is common; purists prefer \"vous trouverez ci-joint\", since you are not really asking someone to find something.",
        ],
        examples: [
          { es: "Vous trouverez ci-inclus le calendrier de livraison.", en: "Enclosed please find the delivery timetable." },
          { es: "Les plans ci-annexés font partie du contrat.", en: "The appended plans form part of the contract." },
          { es: "Vous trouverez ci-inclus notre catalogue.", en: "Enclosed please find our catalogue." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change \"Veuillez trouver\" to the form purists prefer.",
            source: "Veuillez trouver ci-joint notre offre.",
            answer: "Vous trouverez ci-joint notre offre.",
            explanation: "Purists prefer \"vous trouverez ci-joint\": you are not really asking someone to find something.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Which is a non-binding first step toward a contract?",
        options: ["une lettre d'intention", "une mise en demeure", "une facture", "un avenant"],
        correctIndex: 0,
        explanation: "\"Une lettre d'intention\" signals intent before the contract; a \"mise en demeure\" is a formal notice to pay or act.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Please find attached the minutes of the meeting.",
        answer: "Vous trouverez ci-joint le compte rendu de la réunion.",
        altAnswers: [
          "Vous trouverez ci-joint le procès-verbal de la réunion.",
          "Veuillez trouver ci-joint le compte rendu de la réunion.",
          "Ci-joint le compte rendu de la réunion.",
          "Vous trouverez ci-joint le compte-rendu de la réunion.",
        ],
        explanation: "Before a noun with an article, \"ci-joint\" usually stays invariable.",
      },
      {
        type: "matching",
        instructions: "Match each email formula to its meaning.",
        pairs: [
          { left: "Comme convenu", right: "As agreed" },
          { left: "Suite à notre entretien", right: "Following our meeting" },
          { left: "Vous trouverez ci-joint", right: "Please find attached" },
          { left: "Dans l'attente de votre retour", right: "Looking forward to hearing from you" },
          { left: "À compter du", right: "As from (a date)" },
        ],
        explanation: "The building blocks of every confirmation email.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "All that remains is to sign the contract.",
        answer: "Il ne nous reste plus qu'à signer le contrat.",
        altAnswers: [
          "Il ne reste plus qu'à signer le contrat.",
          "Il ne nous reste qu'à signer le contrat.",
          "Il ne reste qu'à signer le contrat.",
        ],
        explanation: "\"Il ne nous reste plus qu'à\" + infinitive closes the meeting on the next step.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: We remain at your disposal for any question.",
        words: ["Nous restons", "à votre disposition", "pour toute", "question."],
        translation: "We remain at your disposal for any question.",
        explanation: "\"Rester à votre disposition\": the standard closing line of a business email.",
      },
      {
        type: "dictation",
        audio: "Comme convenu, la remise s'applique à compter du mois prochain.",
        explanation: "\"Comme convenu\" and \"à compter du\": two formulas of the confirmation email.",
      },
      {
        type: "speak",
        text: "Si je récapitule, nous sommes d'accord sur le prix et le calendrier.",
        prompt: "Say it in French: To recap, we agree on the price and the timetable.",
        explanation: "Recap and confirm: \"si je récapitule\", \"être d'accord sur\".",
      },
    ],
  },
  {
    slug: "c2-confirm-agreement-email-mission",
    level: "FR-C2",
    number: 6,
    title: "Real-World Mission: Confirmer l'Accord par Écrit",
    summary: "After a meeting with an events venue, write the email confirming what was agreed: a summary, each party's commitments, deadlines and next steps, in a professional register with the right greeting and closing.",
    duration: "19 min",
    sections: [
      {
        heading: "The mission",
        body: [
          "The mission: you are Sophie Marchand, event manager at an engineering firm in Nantes. This morning you met M. Kessler, sales manager of the Château de la Brosse, a venue for corporate seminars. You agreed on a two-day seminar for 80 people on 12 and 13 June, at a negotiated price. Now you write the confirmation email.",
        ],
        examples: [
          {
            es: "Le séminaire réunira 80 personnes les 12 et 13 juin.",
            en: "The seminar will bring together 80 people on 12 and 13 June.",
          },
          { es: "Le prix a été négocié ce matin.", en: "The price was negotiated this morning." },
          { es: "Sophie rédige maintenant le courriel de confirmation.", en: "Sophie is now writing the confirmation email." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "What is the purpose of Sophie's email?",
            options: [
              "To confirm in writing the terms agreed this morning",
              "To ask for a first quote",
              "To cancel the seminar",
              "To complain about the venue",
            ],
            correctIndex: 0,
            explanation: "The confirmation email puts the agreement reached at the meeting in writing, the same day if possible.",
          },
        ],
      },
      {
        heading: "Subject line and greeting",
        body: [
          "The subject line is a nominal phrase: \"Objet : confirmation de notre accord – séminaire des 12 et 13 juin\". The greeting depends on the relationship: after one meeting, \"Monsieur,\" is safe; if the tone was warm, \"Bonjour Monsieur Kessler,\" is now common in email. Avoid \"Cher Monsieur Kessler\" (too familiar and a calque).",
        ],
        examples: [
          {
            es: "Objet : confirmation de notre accord – séminaire des 12 et 13 juin",
            en: "Re: confirmation of our agreement – seminar on 12 and 13 June",
          },
          { es: "Bonjour Monsieur Kessler,", en: "Dear Mr Kessler, (warm but professional email)" },
          { es: "Objet : confirmation de réservation – salle du 3 mars", en: "Re: booking confirmation – room on 3 March" },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which greeting suits a first confirmation email after a warm meeting?",
            options: ["Bonjour Monsieur Kessler,", "Cher Monsieur Kessler,", "Salut Kessler,", "Hello Monsieur,"],
            correctIndex: 0,
            explanation: "\"Bonjour Monsieur Kessler,\" is professional and warm; \"Cher\" + surname is a calque.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Re]: confirmation of our order",
            sentence: "___ : confirmation de notre commande",
            answer: "Objet",
            explanation: "The subject line starts with \"Objet :\" followed by a nominal phrase.",
          },
        ],
      },
      {
        heading: "The opening sentence",
        body: [
          "The opening sentence links to the meeting and states the purpose: \"Je vous remercie pour notre échange de ce matin et me permets de vous confirmer, comme convenu, les termes de notre accord.\" Notice that \"me permets\" shares the subject \"je\" without repeating it: elegant and common in formal writing.",
        ],
        examples: [
          { es: "Je vous remercie pour notre échange de ce matin.", en: "Thank you for our conversation this morning." },
          {
            es: "Je me permets de vous confirmer, comme convenu, les termes de notre accord.",
            en: "As agreed, I'm writing to confirm the terms of our agreement.",
          },
          {
            es: "Je tiens à vous remercier pour la qualité de votre accueil.",
            en: "I'd like to thank you for your warm welcome.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it into one sentence, with \"me permets\" sharing the subject \"je\".",
            source: "Je vous remercie pour votre appel. Je me permets de vous confirmer notre commande.",
            answer: "Je vous remercie pour votre appel et me permets de vous confirmer notre commande.",
            explanation: "In formal writing, the second verb can share the subject without repeating \"je\": \"et me permets de\".",
          },
        ],
      },
      {
        heading: "What was agreed",
        body: [
          "Structure the body with headings or a numbered list. What was agreed: \"Prestation : location de la salle plénière et de trois salles de sous-commission, pension complète pour 80 personnes. Tarif : 245 euros HT par personne et par jour, soit 39 200 euros HT au total.\" \"Soit\" (that is, i.e.) introduces the total.",
        ],
        examples: [
          {
            es: "Tarif : 245 euros HT par personne et par jour, soit 39 200 euros HT au total.",
            en: "Rate: 245 euros excl. tax per person per day, i.e. 39,200 euros excl. tax in total.",
          },
          { es: "Prestation : location de deux salles et pause-café.", en: "Service: hire of two rooms and coffee break." },
          { es: "Trois nuits à 120 euros, soit 360 euros.", en: "Three nights at 120 euros, i.e. 360 euros." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Ten tickets at 30 euros, [that is] 300 euros.",
            sentence: "Dix billets à 30 euros, ___ 300 euros.",
            answer: "soit",
            explanation: "\"Soit\" (that is, i.e.) introduces the total in a recap.",
          },
        ],
      },
      {
        heading: "Commitments and deadlines",
        body: [
          "Each party's commitments, with the deontic future: \"De notre côté, nous vous communiquerons la liste définitive des participants au plus tard le 15 mai. Du vôtre, vous nous ferez parvenir le contrat de réservation d'ici le 30 avril.\" \"Au plus tard\" (at the latest) and \"d'ici le\" (by) are the deadline markers.",
        ],
        examples: [
          {
            es: "De notre côté, nous vous communiquerons la liste définitive des participants au plus tard le 15 mai.",
            en: "For our part, we will send you the final list of participants by 15 May at the latest.",
          },
          {
            es: "Du vôtre, vous nous ferez parvenir le contrat de réservation d'ici le 30 avril.",
            en: "For your part, you will send us the booking contract by 30 April.",
          },
          { es: "Merci de nous répondre au plus tard vendredi.", en: "Please reply by Friday at the latest." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "We will send you the programme by 10 May.",
            answer: "Nous vous ferons parvenir le programme d'ici le 10 mai.",
            altAnswers: [
              "Nous vous communiquerons le programme d'ici le 10 mai.",
              "Nous vous enverrons le programme d'ici le 10 mai.",
              "Nous vous ferons parvenir le programme avant le 10 mai.",
              "Nous vous enverrons le programme avant le 10 mai.",
            ],
            explanation: "The future states a commitment; \"d'ici le\" + date gives the deadline.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Vous nous enverrez le contrat au plus tard du 30 avril.",
            answer: "Vous nous enverrez le contrat au plus tard le 30 avril.",
            explanation: "\"Au plus tard\" + \"le\" + date: \"au plus tard le 30 avril\".",
          },
        ],
      },
      {
        heading: "Conditions and next steps",
        body: [
          "Conditions and next steps: \"Un acompte de 30 % sera versé à la signature du contrat.\" \"Toute annulation intervenant moins de trente jours avant la date sera facturée à 50 %.\" (any cancellation made... will be invoiced at 50%). The present participle \"intervenant\" replaces a relative clause, typical of contractual style.",
        ],
        examples: [
          {
            es: "Un acompte de 30 % sera versé à la signature du contrat.",
            en: "A 30% deposit will be paid on signature of the contract.",
          },
          {
            es: "Toute annulation intervenant moins de trente jours avant la date sera facturée à 50 %.",
            en: "Any cancellation made less than thirty days before the date will be invoiced at 50%.",
          },
          {
            es: "Une visite technique est prévue le 20 mai pour valider l'installation.",
            en: "A technical visit is planned for 20 May to approve the set-up.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change the relative clause to a present participle, in contractual style.",
            source: "Tout retard qui dépasse une semaine sera facturé.",
            answer: "Tout retard dépassant une semaine sera facturé.",
            explanation: "The present participle (\"dépassant\") replaces \"qui dépasse\": compact and typical of contracts.",
          },
          {
            type: "listen-choose",
            audio: "Le solde sera versé à la fin du séminaire.",
            question: "What does it mean?",
            options: [
              "The balance will be paid at the end of the seminar.",
              "The deposit was paid at the start of the seminar.",
              "The seminar will end with a sale.",
              "The seminar fee is waived.",
            ],
            correctIndex: 0,
            explanation: "\"Le solde\" is the balance still due after \"l'acompte\" (the deposit).",
          },
        ],
      },
      {
        heading: "A line of tact",
        body: [
          "Before closing, add a line that protects the relationship and invites correction: \"Je vous remercie de bien vouloir me signaler tout élément qui ne correspondrait pas à votre compréhension de notre échange.\" The conditional \"correspondrait\" makes the possibility of a misunderstanding polite and hypothetical.",
        ],
        examples: [
          {
            es: "Je vous remercie de bien vouloir me signaler tout élément qui ne correspondrait pas à votre compréhension de notre échange.",
            en: "Please let me know if anything does not match your understanding of our discussion.",
          },
          {
            es: "N'hésitez pas à me signaler toute erreur qui se serait glissée.",
            en: "Do let me know of any error that may have crept in.",
          },
          {
            es: "Tout point qui ne vous conviendrait pas pourra être revu.",
            en: "Any point that doesn't suit you can be reviewed.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Please let me know of any detail that [might not suit] you.",
            sentence: "Merci de me signaler tout détail qui ne vous ___ pas.",
            answer: "conviendrait",
            explanation: "The conditional (\"conviendrait\") makes a possible misunderstanding polite and hypothetical.",
          },
        ],
      },
      {
        heading: "The closing and sign-off",
        body: [
          "Then the closing: \"Dans l'attente de votre confirmation, je vous souhaite une excellente fin de journée.\" or \"Je reste à votre disposition pour tout complément.\" And the sign-off: \"Bien cordialement,\" for an established relationship; \"Cordialement,\" is neutral. In a formal letter, the long formula (\"je vous prie d'agréer...\") would be expected, but in professional email \"Bien cordialement\" is now standard.",
        ],
        examples: [
          {
            es: "Dans l'attente de votre confirmation, je vous souhaite une excellente fin de journée.",
            en: "Looking forward to your confirmation, I wish you a very good afternoon.",
          },
          { es: "Je reste à votre disposition pour tout complément.", en: "I remain available for any further details." },
          { es: "Bien cordialement,", en: "Kind regards," },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: Looking forward to your reply, I wish you a good day.",
            words: ["Dans l'attente", "de votre réponse,", "je vous souhaite", "une bonne journée."],
            translation: "Looking forward to your reply, I wish you a good day.",
            explanation: "\"Dans l'attente de\" + noun opens the closing line of a professional email.",
          },
        ],
      },
      {
        heading: "Attachments",
        body: [
          "Finally, attachments: \"P. J. : devis signé ; plan des salles\" at the bottom, or \"Vous trouverez ci-joint le devis signé\" in the body. Never write \"*ci-attaché\" (a calque).",
        ],
        examples: [
          { es: "P. J. : devis signé ; plan des salles", en: "Attachments: signed quote; floor plan" },
          { es: "P. J. : contrat de réservation", en: "Attachment: booking contract" },
          { es: "Vous trouverez ci-joint le plan d'accès.", en: "Please find attached the access map." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Vous trouverez ci-attaché le planning de la journée.",
            answer: "Vous trouverez ci-joint le planning de la journée.",
            explanation: "\"Ci-attaché\" is a calque of English; the French word is \"ci-joint\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "Please confirm [by] 2 June.",
        sentence: "Merci de confirmer ___ 2 juin.",
        answer: "d'ici le",
        altAnswers: ["avant le", "au plus tard le"],
        explanation: "\"D'ici le\" + date (by) marks the deadline.",
      },
      {
        type: "multiple-choice",
        question: "Which sentence is correct French for 'please find attached'?",
        options: [
          "Vous trouverez ci-joint le devis signé.",
          "Vous trouverez ci-attaché le devis signé.",
          "Veuillez trouver attaché le devis signé.",
          "Vous trouverez joint-ci le devis signé.",
        ],
        correctIndex: 0,
        explanation: "\"Ci-joint\"; \"ci-attaché\" and \"attaché\" are calques of attached.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Any cancellation will be invoiced in full.",
        answer: "Toute annulation sera facturée en totalité.",
        altAnswers: [
          "Toute annulation sera intégralement facturée.",
          "Toute annulation sera facturée intégralement.",
          "Toute annulation sera facturée en intégralité.",
        ],
        explanation: "\"Toute\" + singular noun (any) and the passive future: contractual style.",
      },
      {
        type: "multiple-choice",
        question: "Which sign-off suits a professional email after a successful meeting?",
        options: ["Bien cordialement,", "Bisous,", "Je vous prie de croire à mon amour,", "Ciao,"],
        correctIndex: 0,
        explanation: "\"Bien cordialement\" is the standard warm professional sign-off.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Thank you for your welcome this morning.",
        answer: "Je vous remercie pour votre accueil de ce matin.",
        altAnswers: [
          "Je vous remercie de votre accueil de ce matin.",
          "Merci pour votre accueil de ce matin.",
          "Merci de votre accueil de ce matin.",
          "Je vous remercie pour votre accueil ce matin.",
          "Je vous remercie de votre accueil ce matin.",
        ],
        explanation: "\"Je vous remercie pour\" or \"de\" + noun; \"de ce matin\" links to the meeting.",
      },
      {
        type: "dictation",
        audio: "Un acompte sera versé à la signature du devis.",
        explanation: "\"Un acompte\" (a deposit) is paid \"à la signature\" (on signature).",
      },
      {
        type: "speak",
        text: "Je reste à votre disposition pour tout complément d'information. Bien cordialement.",
        prompt: "Say it in French: I remain available for any further information. Kind regards.",
        explanation: "The closing line and the standard professional sign-off.",
      },
    ],
  },
  {
    slug: "c2-presentations-negotiation-8",
    level: "FR-C2",
    number: 7,
    title: "Présentations et Négociation, Part 8 of 8",
    summary: "Minutes and follow-up: \"le compte rendu\" vs \"le relevé de décisions\", their nominal and impersonal style (\"il a été convenu que\"), the action list (\"qui fait quoi, pour quand\") and the reminder email.",
    duration: "18 min",
    sections: [
      {
        heading: "Three kinds of minutes",
        body: [
          "French workplaces distinguish two kinds of minutes. \"Le compte rendu\" (CR) reports the discussion: who said what, the arguments, the points of disagreement, then the decisions. \"Le relevé de décisions\" records only what was decided and who must do what; it is shorter and increasingly preferred because people actually read it. \"Le procès-verbal\" (PV) is the formal, often legal record of a board or general meeting, approved and signed.",
        ],
        examples: [
          {
            es: "Le compte rendu de la réunion sera diffusé d'ici vendredi.",
            en: "The minutes of the meeting will be circulated by Friday.",
          },
          {
            es: "Je vous envoie le relevé de décisions de ce matin.",
            en: "I'm sending you the record of this morning's decisions.",
          },
          {
            es: "Le procès-verbal de l'assemblée générale a été approuvé et signé.",
            en: "The minutes of the general meeting were approved and signed.",
          },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Your manager wants only what was decided and who must do what. What do you write?",
            options: ["un relevé de décisions", "un compte rendu détaillé", "un procès-verbal signé", "une lettre d'intention"],
            correctIndex: 0,
            explanation: "\"Le relevé de décisions\" records only decisions and actions; \"le compte rendu\" reports the discussion; \"le procès-verbal\" is the formal, signed record.",
          },
        ],
      },
      {
        heading: "Impersonal, nominal style",
        body: [
          "Their style is impersonal and largely nominal. Present tense for what happens in the meeting: \"M. Dufour présente le budget. Mme Haddad souligne le retard du chantier.\" Impersonal passives for decisions: \"il a été décidé que\", \"il a été convenu que\", \"il est rappelé que\". Nominal phrases for items: \"validation du budget prévisionnel\", \"report de la livraison au 15 mars\", \"mise en place d'un comité de suivi\".",
        ],
        examples: [
          { es: "M. Dufour présente le budget prévisionnel.", en: "Mr Dufour presents the provisional budget." },
          {
            es: "Il a été convenu que la livraison serait reportée au 15 mars.",
            en: "It was agreed that delivery would be postponed to 15 March.",
          },
          { es: "Validation du budget prévisionnel à l'unanimité.", en: "Provisional budget approved unanimously." },
          { es: "Mise en place d'un comité de suivi mensuel.", en: "Setting up of a monthly monitoring committee." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it to the impersonal passive of minutes, starting with \"Il a été décidé que\".",
            source: "Nous avons décidé que le salon aurait lieu en octobre.",
            answer: "Il a été décidé que le salon aurait lieu en octobre.",
            explanation: "Minutes record decisions impersonally: \"il a été décidé que\", \"il a été convenu que\".",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[It is recalled that] the deadline is 15 June.",
            sentence: "___ la date limite est le 15 juin.",
            answer: "Il est rappelé que",
            explanation: "\"Il est rappelé que\": the impersonal present of minutes for a reminder.",
          },
        ],
      },
      {
        heading: "Precise reporting verbs",
        body: [
          "Reported speech uses precise verbs rather than \"dire\": \"rappelle\", \"souligne\", \"propose\", \"s'interroge sur\", \"fait observer que\", \"émet des réserves sur\". These verbs, which you have met in earlier units, also show the speaker's stance: \"émettre des réserves\" (to express reservations) is milder than \"s'opposer à\".",
        ],
        examples: [
          { es: "Mme Haddad émet des réserves sur le calendrier.", en: "Ms Haddad expresses reservations about the schedule." },
          { es: "M. Petit fait observer que le budget est serré.", en: "Mr Petit points out that the budget is tight." },
          { es: "Mme Leroy s'interroge sur le coût du projet.", en: "Ms Leroy raises questions about the cost of the project." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which verb shows milder disagreement than « s'opposer à » ?",
            options: ["émettre des réserves sur", "rejeter", "refuser catégoriquement", "condamner"],
            correctIndex: 0,
            explanation: "\"Émettre des réserves\" (to express reservations) is milder than \"s'opposer à\"; the others are stronger.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "M. Garnier s'interroge le coût du transport.",
            answer: "M. Garnier s'interroge sur le coût du transport.",
            explanation: "\"S'interroger sur\" (to raise questions about) needs its preposition.",
          },
        ],
      },
      {
        heading: "The action list",
        body: [
          "The heart of a \"relevé de décisions\" is \"le tableau des actions\" or \"la liste des actions\": \"qui fait quoi, pour quand\" (who does what, by when). Each line is a nominal phrase or an infinitive: \"Envoi du contrat au prestataire – S. Marchand – avant le 30 avril\", \"Relancer le service juridique – T. Lefort – semaine 18\".",
        ],
        examples: [
          {
            es: "Envoi du contrat au prestataire – S. Marchand – avant le 30 avril.",
            en: "Sending of contract to supplier – S. Marchand – before 30 April.",
          },
          {
            es: "Relance du service juridique – T. Lefort – semaine 18.",
            en: "Follow-up with legal department – T. Lefort – week 18.",
          },
          {
            es: "Vérification des devis – responsable : K. Benali – échéance : 10 mai.",
            en: "Checking of quotes – owner: K. Benali – deadline: 10 May.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Sending of the quote to the client – A. Martin – before 5 June.",
            answer: "Envoi du devis au client – A. Martin – avant le 5 juin.",
            altAnswers: [
              "Envoi du devis au client – A. Martin – avant le 5 juin",
              "Envoi du devis au client - A. Martin - avant le 5 juin.",
            ],
            explanation: "Each line of the action list: nominal phrase, owner, deadline.",
          },
        ],
      },
      {
        heading: "Nominalisation",
        body: [
          "Turning sentences into nominal phrases is the key skill (you practised nominalisation at the Advanced level): \"nous allons envoyer le contrat\" → \"envoi du contrat\"; \"on doit vérifier les devis\" → \"vérification des devis\"; \"le comité se réunira chaque mois\" → \"réunion mensuelle du comité\". Watch the noun forms: \"envoyer\" → \"l'envoi\", \"relancer\" → \"la relance\", \"valider\" → \"la validation\", \"reporter\" → \"le report\", \"mettre en place\" → \"la mise en place\".",
        ],
        examples: [
          { es: "Réunion mensuelle du comité de pilotage.", en: "Monthly meeting of the steering committee." },
          { es: "Report de la mise en service à septembre.", en: "Commissioning postponed to September." },
          { es: "Validation du devis par la direction.", en: "Approval of the quote by management." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "How would « Nous allons reporter la mise en service à septembre » appear in a \"relevé de décisions\"?",
            options: [
              "Report de la mise en service à septembre.",
              "Nous allons reporter la mise en service, voilà.",
              "Reporter, mise en service, septembre, nous.",
              "La mise en service, on la reporte, septembre.",
            ],
            correctIndex: 0,
            explanation: "Nominalisation: \"reporter\" → \"le report\"; a complete, compact noun phrase.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn the sentence into a nominal phrase for the action list.",
            source: "Nous allons relancer le fournisseur.",
            answer: "Relance du fournisseur.",
            altAnswers: ["Relance du fournisseur"],
            explanation: "\"Relancer\" becomes \"la relance\": the action list keeps only the noun and its complement.",
          },
        ],
      },
      {
        heading: "Owners and deadlines",
        body: [
          "Responsibility and deadlines have fixed forms: \"responsable :\" or \"pilote :\" (the owner), \"échéance :\" (deadline), \"pour le\" + date, \"au plus tard le\". In a meeting, the chair often closes with \"je propose qu'on fasse un tour de table des actions\" (go round the table on actions).",
        ],
        examples: [
          {
            es: "Faisons un tour de table des actions avant de nous quitter.",
            en: "Let's go round the table on actions before we leave.",
          },
          { es: "Pilote : M. Durand – échéance : fin juin.", en: "Owner: Mr Durand – deadline: end of June." },
          { es: "Rapport final pour le 1er juillet au plus tard.", en: "Final report by 1 July at the latest." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Owner: J. Morel – [deadline]: 12 March.",
            sentence: "Responsable : J. Morel – ___ : 12 mars.",
            answer: "échéance",
            explanation: "\"Échéance\" (deadline) and \"responsable\" or \"pilote\" (owner) are the fixed labels of an action list.",
          },
        ],
      },
      {
        heading: "The reminder: opening and recap",
        body: [
          "When an action is late, the reminder (\"la relance\") must be firm but courteous. The standard opening: \"Je me permets de revenir vers vous concernant...\" (I'm following up regarding...). Then a neutral recap: \"Lors de notre réunion du 3 avril, il avait été convenu que vous nous transmettriez le contrat avant le 30 avril.\" The plus-que-parfait (\"il avait été convenu\") places the agreement before the deadline; the conditional (\"transmettriez\") is the future in the past.",
        ],
        examples: [
          {
            es: "Je me permets de revenir vers vous concernant le contrat de réservation.",
            en: "I'm following up regarding the booking contract.",
          },
          {
            es: "Lors de notre réunion du 3 avril, il avait été convenu que vous nous transmettriez le contrat avant le 30 avril.",
            en: "At our meeting on 3 April, it was agreed that you would send us the contract before 30 April.",
          },
          {
            es: "Il avait été convenu que vous nous rappelleriez avant midi.",
            en: "It had been agreed that you would call us back before noon.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "It had been agreed that the supplier [would deliver] before Monday.",
            sentence: "Il avait été convenu que le fournisseur ___ avant lundi.",
            answer: "livrerait",
            explanation: "After a past main verb, the conditional (\"livrerait\") is the future in the past.",
          },
        ],
      },
      {
        heading: "The softened request",
        body: [
          "Then the request, softened: \"Sauf erreur de ma part, nous ne l'avons pas encore reçu.\" (meaning unless I am mistaken: a classic politeness formula that leaves the other person a way out.) \"Pourriez-vous me dire où en est ce dossier ?\" \"Je vous serais reconnaissante de bien vouloir me le faire parvenir d'ici vendredi.\"",
        ],
        examples: [
          {
            es: "Sauf erreur de ma part, nous ne l'avons pas encore reçu.",
            en: "Unless I'm mistaken, we haven't received it yet.",
          },
          { es: "Pourriez-vous me dire où en est ce dossier ?", en: "Could you tell me where things stand with this matter?" },
          {
            es: "Je vous serais reconnaissante de bien vouloir me le faire parvenir d'ici vendredi.",
            en: "I would be grateful if you could send it to me by Friday.",
          },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Unless I'm mistaken, the invoice hasn't been paid.",
            answer: "Sauf erreur de ma part, la facture n'a pas été réglée.",
            altAnswers: [
              "Sauf erreur de ma part, la facture n'a pas encore été réglée.",
              "Sauf erreur de ma part, la facture n'a pas été payée.",
              "Sauf erreur de ma part, la facture n'a pas encore été payée.",
            ],
            explanation: "\"Sauf erreur de ma part\" leaves the other person a way out.",
          },
          {
            type: "listen-choose",
            audio: "Pourriez-vous me dire où en est la commande ?",
            question: "What is the writer asking?",
            options: [
              "Where things stand with the order",
              "Where the order should be delivered",
              "Who placed the order",
              "Whether to cancel the order",
            ],
            correctIndex: 0,
            explanation: "\"Où en est\" + noun asks about progress: where things stand.",
          },
        ],
      },
      {
        heading: "A second reminder",
        body: [
          "If a second reminder is needed, the tone hardens through precision, not rudeness: \"Sans retour de votre part d'ici le 10 mai, nous serons contraints de reporter le séminaire.\" The consequence is stated as a fact, in the future.",
        ],
        examples: [
          {
            es: "Sans retour de votre part d'ici le 10 mai, nous serons contraints de reporter le séminaire.",
            en: "Without a reply from you by 10 May, we will have to postpone the seminar.",
          },
          {
            es: "Faute de réponse d'ici lundi, nous annulerons la commande.",
            en: "Failing a reply by Monday, we will cancel the order.",
          },
          { es: "Nous serons contraints de facturer des pénalités.", en: "We will be obliged to invoice penalties." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: Without a reply by Friday, we will have to cancel.",
            words: ["Sans retour", "d'ici vendredi,", "nous serons contraints", "d'annuler."],
            translation: "Without a reply by Friday, we will have to cancel.",
            explanation: "The tone hardens through precision: the consequence is stated as a fact, in the future.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "matching",
        instructions: "Match each verb to its noun, as used in minutes.",
        pairs: [
          { left: "envoyer", right: "l'envoi" },
          { left: "relancer", right: "la relance" },
          { left: "reporter", right: "le report" },
          { left: "valider", right: "la validation" },
          { left: "mettre en place", right: "la mise en place" },
        ],
        explanation: "Nominalisation turns sentences into compact action items.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The minutes will be sent to all participants.",
        answer: "Le compte rendu sera envoyé à tous les participants.",
        altAnswers: [
          "Le compte rendu sera diffusé à tous les participants.",
          "Le compte rendu sera adressé à tous les participants.",
          "Le compte-rendu sera envoyé à tous les participants.",
          "Le compte rendu sera transmis à tous les participants.",
        ],
        explanation: "\"Le compte rendu\" reports the discussion and is circulated after the meeting.",
      },
      {
        type: "multiple-choice",
        question: "What is the difference between a \"compte rendu\" and a \"relevé de décisions\"?",
        options: [
          "The \"compte rendu\" reports the discussion; the \"relevé\" lists only decisions and actions.",
          "They are exactly the same document.",
          "The \"relevé\" is a legal document signed by a notary.",
          "The \"compte rendu\" is only for informal meetings.",
        ],
        correctIndex: 0,
        explanation: "The \"relevé\" is shorter and action-focused; the \"procès-verbal\" is the formal legal record.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "I [would be grateful if you could] reply by Tuesday.",
        sentence: "Je vous ___ bien vouloir me répondre d'ici mardi.",
        answer: "serais reconnaissant de",
        altAnswers: ["serais reconnaissante de"],
        explanation: "\"Je vous serais reconnaissant(e) de bien vouloir\" softens the request in the conditional.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Il a été convenu que la réunion aura lieu jeudi.",
        answer: "Il a été convenu que la réunion aurait lieu jeudi.",
        explanation: "After a past main verb, the future becomes the conditional: \"aurait lieu\" (future in the past).",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Ms Blanc points out that the budget has been exceeded.",
        answer: "Mme Blanc fait observer que le budget a été dépassé.",
        altAnswers: [
          "Mme Blanc souligne que le budget a été dépassé.",
          "Mme Blanc fait remarquer que le budget a été dépassé.",
          "Mme Blanc observe que le budget a été dépassé.",
        ],
        explanation: "Minutes use precise reporting verbs in the present: \"fait observer que\", \"souligne que\".",
      },
      {
        type: "dictation",
        audio: "Report de la réunion au 12 juin.",
        explanation: "\"Le report\" (from \"reporter\"): a nominal phrase in the minutes.",
      },
      {
        type: "speak",
        text: "Je me permets de vous relancer concernant notre devis.",
        prompt: "Say it in French: I'm following up regarding our quote.",
        explanation: "\"Je me permets de\" + \"relancer\": firm but courteous.",
      },
    ],
  },
  {
    slug: "c2-negotiation-register-spiral",
    level: "FR-C2",
    number: 8,
    title: "Spiral Review: Négocier avec la Grammaire Avancée",
    summary: "The conditional of politeness, \"si\" + imparfait proposals, the subjunctive after \"à condition que\" and \"pour que\", and euphemism and attenuation: Advanced grammar at the service of agreement.",
    duration: "18 min",
    sections: [
      {
        heading: "The conditional of politeness",
        body: [
          "This review puts Advanced grammar to work in negotiation. The conditional softens requests and refusals: \"Nous souhaiterions\" (we would like) rather than \"nous voulons\"; \"Seriez-vous disposés à\" (would you be willing to); \"Il nous serait difficile de\" (it would be difficult for us to), a polite no.",
        ],
        examples: [
          { es: "Nous souhaiterions revoir les conditions de paiement.", en: "We would like to review the payment terms." },
          {
            es: "Seriez-vous disposés à prolonger le contrat d'un an ?",
            en: "Would you be willing to extend the contract by a year?",
          },
          { es: "Il nous serait difficile d'aller plus loin.", en: "It would be difficult for us to go any further." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it to the conditional of politeness.",
            source: "Nous voulons une remise.",
            answer: "Nous souhaiterions une remise.",
            altAnswers: ["Nous voudrions une remise.", "Nous aimerions une remise.", "Nous souhaiterions obtenir une remise."],
            explanation: "\"Nous souhaiterions\" (or \"nous voudrions\") softens the request; \"nous voulons\" sounds like a demand.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[Would you be willing to] deliver on Saturdays?",
            sentence: "___ livrer le samedi ?",
            answer: "Seriez-vous disposés à",
            altAnswers: ["Seriez-vous disposé à", "Seriez-vous disposées à", "Seriez-vous prêts à", "Seriez-vous prêt à"],
            explanation: "\"Seriez-vous disposés à\" + infinitive asks politely, in the conditional.",
          },
        ],
      },
      {
        heading: "Si + imparfait: a hypothesis to explore",
        body: [
          "\"Si\" + imparfait turns a proposal into a hypothesis the other side can explore without committing: \"Si nous acceptions vos délais, seriez-vous prêts à revoir le prix ?\" It invites a counter-move. Compare \"si\" + present (\"Si vous acceptez nos délais, nous baissons le prix\"), which sounds like a firm offer on the table. And \"et si\" + imparfait alone is a suggestion: \"Et si nous partagions les frais de transport ?\"",
        ],
        examples: [
          {
            es: "Si nous acceptions vos délais, seriez-vous prêts à revoir le prix ?",
            en: "If we accepted your deadlines, would you be ready to review the price?",
          },
          {
            es: "Si vous acceptez nos délais, nous baissons le prix de 5 %.",
            en: "If you accept our deadlines, we'll lower the price by 5%.",
          },
          { es: "Et si nous partagions les frais de transport ?", en: "What if we split the transport costs?" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "If we ordered more, would you lower the price?",
            answer: "Si nous commandions davantage, baisseriez-vous le prix ?",
            altAnswers: [
              "Si nous commandions plus, baisseriez-vous le prix ?",
              "Si nous commandions davantage, est-ce que vous baisseriez le prix ?",
              "Si nous commandions plus, est-ce que vous baisseriez le prix ?",
              "Si on commandait plus, est-ce que vous baisseriez le prix ?",
            ],
            explanation: "\"Si\" + imparfait, then the conditional: a hypothesis the other side can explore without committing.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Si le fournisseur aurait prévenu, nous aurions pu nous organiser.",
            answer: "Si le fournisseur avait prévenu, nous aurions pu nous organiser.",
            explanation: "Never the conditional after \"si\": the past condition takes the plus-que-parfait (\"avait prévenu\").",
          },
        ],
      },
      {
        heading: "Conditions and purposes take the subjunctive",
        body: [
          "Conditions and purposes take the subjunctive: \"à condition que\", \"pourvu que\", \"à moins que (ne)\", \"pour que\", \"afin que\", \"de sorte que\" (purpose). \"Nous pouvons avancer la livraison, à condition que vous confirmiez la commande cette semaine.\" \"Nous vous envoyons le devis aujourd'hui pour que vous puissiez le soumettre à votre direction.\"",
        ],
        examples: [
          {
            es: "Nous pouvons avancer la livraison, à condition que vous confirmiez la commande cette semaine.",
            en: "We can bring delivery forward, provided you confirm the order this week.",
          },
          {
            es: "Nous vous envoyons le devis aujourd'hui pour que vous puissiez le soumettre à votre direction.",
            en: "We're sending you the quote today so that you can submit it to your management.",
          },
          {
            es: "Nous ajusterons les volumes afin que vos stocks ne soient jamais à zéro.",
            en: "We'll adjust the volumes so that your stock is never at zero.",
          },
          {
            es: "Nous maintenons notre offre, à moins que vous ne trouviez mieux ailleurs.",
            en: "We're keeping our offer open, unless you find better elsewhere.",
          },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "We're sending the samples [so that] you can test them.",
            sentence: "Nous vous envoyons les échantillons ___ vous puissiez les tester.",
            answer: "pour que",
            altAnswers: ["afin que"],
            explanation: "\"Pour que\" (or \"afin que\") + subjunctive expresses purpose with a different subject.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Nous vous envoyons le dossier pour que le comité peut décider vendredi.",
            answer: "Nous vous envoyons le dossier pour que le comité puisse décider vendredi.",
            explanation: "\"Pour que\" takes the subjunctive: \"puisse\".",
          },
        ],
      },
      {
        heading: "Same subject: use the infinitive",
        body: [
          "With the same subject, the infinitive replaces the clause: \"à condition de confirmer\", \"pour soumettre\", \"afin de\". \"*Pour que je puisse\" with the same subject as the main clause (\"je vous appelle pour que je puisse...\") is a common error: \"je vous appelle pour pouvoir...\".",
        ],
        examples: [
          { es: "Je vous appelle pour pouvoir fixer une date.", en: "I'm calling you so I can set a date." },
          { es: "Nous accepterons, à condition de recevoir l'acompte.", en: "We'll accept, provided we receive the deposit." },
          { es: "Je vous écris afin de confirmer notre rendez-vous.", en: "I'm writing to confirm our appointment." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence is correct?",
            options: [
              "Je vous appelle pour pouvoir fixer une date.",
              "Je vous appelle pour que je puisse fixer une date.",
              "Je vous appelle pour que je peux fixer une date.",
              "Je vous appelle afin que pouvoir fixer une date.",
            ],
            correctIndex: 0,
            explanation: "Same subject: \"pour\" + infinitive, not \"pour que je\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it so an infinitive replaces the clause, since the subject is the same.",
            source: "Je vous écris pour que je puisse confirmer la date.",
            answer: "Je vous écris pour pouvoir confirmer la date.",
            altAnswers: [
              "Je vous écris pour confirmer la date.",
              "Je vous écris afin de pouvoir confirmer la date.",
              "Je vous écris afin de confirmer la date.",
            ],
            explanation: "Same subject: \"pour\" + infinitive, not \"pour que je puisse\".",
          },
        ],
      },
      {
        heading: "Euphemism",
        body: [
          "Negotiators soften bad news with euphemism and attenuation, the Advanced tools you learned for indirect language. \"Un léger décalage\" (a slight delay) for a three-week delay; \"un ajustement tarifaire\" for a price rise; \"des difficultés d'approvisionnement\" for a shortage; \"ce n'est pas tout à fait ce que nous espérions\" for this is bad.",
        ],
        examples: [
          { es: "Nous prévoyons un léger décalage de la livraison.", en: "We're anticipating a slight delay in delivery." },
          {
            es: "Un ajustement tarifaire de 4 % s'appliquera au 1er janvier.",
            en: "A 4% price adjustment will apply from 1 January.",
          },
          { es: "Ce n'est pas tout à fait ce que nous espérions.", en: "It's not quite what we were hoping for." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            audio: "Nous rencontrons quelques difficultés d'approvisionnement.",
            question: "What is the speaker really saying?",
            options: ["There is a shortage.", "Supplies are plentiful.", "They have found a new supplier.", "Prices are falling."],
            correctIndex: 0,
            explanation: "\"Des difficultés d'approvisionnement\" is the negotiator's euphemism for a shortage.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change \"une hausse des prix\" to the negotiators' euphemism.",
            source: "Une hausse des prix de 3 % s'appliquera en mars.",
            answer: "Un ajustement tarifaire de 3 % s'appliquera en mars.",
            explanation: "\"Un ajustement tarifaire\" softens a price rise without hiding it.",
          },
        ],
      },
      {
        heading: "Attenuators",
        body: [
          "Attenuators: \"peut-être\", \"un peu\", \"légèrement\", \"il se pourrait que\" + subjunctive, \"nous craignons que\" + subjunctive (often with the expletive \"ne\": \"nous craignons que les délais ne soient difficiles à tenir\"), litotes (\"ce n'est pas négligeable\" for it's significant). Use them to protect the relationship, never to hide facts the other side will discover anyway.",
        ],
        examples: [
          { es: "Il se pourrait que nous ayons besoin d'un délai supplémentaire.", en: "We may need a little more time." },
          { es: "Nous craignons que les délais ne soient difficiles à tenir.", en: "We fear the deadlines may be hard to meet." },
          { es: "L'écart n'est pas négligeable.", en: "The gap is not insignificant." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Why use attenuators in a negotiation?",
            options: [
              "To protect the relationship, without hiding facts",
              "To hide facts the other side will discover",
              "To sound uncertain about everything",
              "To end the negotiation quickly",
            ],
            correctIndex: 0,
            explanation: "Attenuators protect the relationship; using them to hide facts backfires when the other side finds out.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "[It may be that] the delivery is late.",
            sentence: "___ la livraison soit en retard.",
            answer: "Il se pourrait que",
            explanation: "\"Il se pourrait que\" + subjunctive (\"soit\") announces bad news gently.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Which sentence presents a firm offer rather than an exploratory hypothesis?",
        options: [
          "Si vous acceptez nos délais, nous baissons le prix de 5 %.",
          "Si nous acceptions vos délais, seriez-vous prêts à revoir le prix ?",
          "Et si nous partagions les frais ?",
          "Que diriez-vous d'un partage des frais ?",
        ],
        correctIndex: 0,
        explanation: "\"Si\" + present with a present or future main clause is an offer on the table; the others explore.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "It would be difficult for us to accept these terms.",
        answer: "Il nous serait difficile d'accepter ces conditions.",
        altAnswers: [
          "Il nous serait difficile d'accepter ces termes.",
          "Il nous serait difficile d'accepter de telles conditions.",
        ],
        explanation: "\"Il nous serait difficile de\": a polite no in the conditional.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: We fear the costs may rise.",
        words: ["Nous craignons", "que les coûts", "n'augmentent."],
        translation: "We fear the costs may rise.",
        explanation: "\"Craindre que\" + subjunctive, often with the expletive \"ne\", which is not a negation.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "We would like to postpone the meeting.",
        answer: "Nous souhaiterions reporter la réunion.",
        altAnswers: [
          "Nous voudrions reporter la réunion.",
          "Nous aimerions reporter la réunion.",
          "Nous souhaiterions repousser la réunion.",
          "Nous voudrions repousser la réunion.",
        ],
        explanation: "The conditional of politeness: \"nous souhaiterions\" rather than \"nous voulons\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Nous craignons que les délais ne sont trop courts.",
        answer: "Nous craignons que les délais ne soient trop courts.",
        explanation: "\"Craindre que\" takes the subjunctive: \"soient\". The \"ne\" is expletive.",
      },
      {
        type: "dictation",
        audio: "Seriez-vous disposés à revoir votre calendrier ?",
        explanation: "\"Seriez-vous disposés à\": the conditional of politeness in a question.",
      },
      {
        type: "speak",
        text: "Il se pourrait que nous devions revoir nos prix.",
        prompt: "Say it in French: We may have to review our prices.",
        explanation: "\"Il se pourrait que\" + subjunctive (\"devions\") attenuates bad news.",
      },
    ],
  },
  {
    slug: "c2-vocab-paronyms",
    level: "FR-C2",
    number: 9,
    title: "Mastery Vocabulary: Paronyms That Fool Even Natives",
    summary: "\"Recouvrer\" / \"recouvrir\", \"inclinaison\" / \"inclination\", \"éruption\" / \"irruption\", \"prolongation\" / \"prolongement\", \"allocution\" / \"allocation\", \"évoquer\" / \"invoquer\", \"notable\" / \"notoire\", \"opprimer\" / \"oppresser\".",
    duration: "19 min",
    sections: [
      {
        heading: "Recouvrer gets back, recouvrir covers",
        body: [
          "Paronyms are words that look and sound alike but mean different things. These pairs trip up educated native speakers too, which is why getting them right marks real mastery. \"Recouvrer\" means to recover, to get back: \"recouvrer la santé\", \"recouvrer la vue\", \"recouvrer ses esprits\", and in finance \"recouvrer une créance\" (to recover a debt; \"le recouvrement\"). \"Recouvrir\" means to cover (again), to cover completely: \"la neige recouvre la plaine\", \"recouvrir un fauteuil\".",
        ],
        examples: [
          { es: "Après des mois de rééducation, il a recouvré l'usage de sa main.", en: "After months of rehabilitation, he regained the use of his hand." },
          { es: "Le service chargé du recouvrement des créances a relancé le client.", en: "The debt-collection department chased the customer." },
          { es: "Le sol était recouvert de feuilles mortes.", en: "The ground was covered with dead leaves." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "How do you say: They covered the old sofa with velvet.",
            options: ["Ils ont recouvert le vieux canapé de velours.", "Ils ont recouvré le vieux canapé de velours.", "Ils ont recouvri le vieux canapé de velours.", "Ils ont couvré le vieux canapé de velours."],
            correctIndex: 0,
            explanation: "Covering something completely is \"recouvrir\", past participle \"recouvert\". \"Recouvré\" comes from \"recouvrer\" (to get back) and would mean they recovered the sofa; \"recouvri\" and \"couvré\" are not French forms.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "It took her a week to [get her strength back].",
            sentence: "Il lui a fallu une semaine pour ___ ses forces.",
            answer: "recouvrer",
            explanation: "Getting back something you had lost (health, sight, strength, a debt) is \"recouvrer\". \"Recouvrir\" would mean to cover her strength.",
          },
        ],
      },
      {
        heading: "The participle trap",
        body: [
          "The confusion is worst in the past participle: \"il a recouvré la vue\" (he got his sight back) vs \"le sol est recouvert de feuilles\" (covered with leaves). \"*Il a recouvert la santé\" is a common mistake even in the press. Note also that \"recouvrir\" can mean to encompass: \"ce terme recouvre des réalités très différentes\" (this term covers very different realities).",
        ],
        examples: [
          { es: "Ce terme recouvre des réalités très différentes.", en: "This term covers very different realities." },
          { es: "Elle a recouvré son calme après quelques minutes.", en: "She regained her composure after a few minutes." },
          { es: "Les murs ont été recouverts d'une peinture grise.", en: "The walls were covered with grey paint." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it to the passé composé.",
            source: "Le malade recouvre peu à peu la mémoire.",
            answer: "Le malade a peu à peu recouvré la mémoire.",
            altAnswers: ["Le malade a recouvré peu à peu la mémoire."],
            explanation: "In the passé composé \"recouvrer\" gives \"a recouvré\" (regular -er participle). \"A recouvert\" belongs to \"recouvrir\" and would mean he covered his memory: the classic slip.",
          },
        ],
      },
      {
        heading: "Éruption bursts out, irruption bursts in",
        body: [
          "\"Une éruption\" bursts out from inside: \"une éruption volcanique\", \"une éruption de boutons\" (a rash). \"Une irruption\" bursts in from outside: \"faire irruption dans une pièce\" (to burst into a room), \"l'irruption du numérique dans nos vies\". Think: e- = out, ir- (in-) = in.",
        ],
        examples: [
          { es: "L'éruption du volcan a contraint des milliers d'habitants à fuir.", en: "The volcano's eruption forced thousands of residents to flee." },
          { es: "Des manifestants ont fait irruption dans la salle du conseil.", en: "Demonstrators burst into the council chamber." },
          { es: "L'irruption de l'intelligence artificielle bouleverse le métier de traducteur.", en: "The sudden arrival of AI is upending the translator's profession." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "How do you say: The police burst into the flat at dawn.",
            options: ["La police a fait irruption dans l'appartement à l'aube.", "La police a fait éruption dans l'appartement à l'aube.", "La police est entrée en éruption dans l'appartement à l'aube.", "La police a fait une interruption dans l'appartement à l'aube."],
            correctIndex: 0,
            explanation: "Bursting in from outside is \"faire irruption dans\" (ir- = in). \"Éruption\" bursts out from inside, like lava or a rash, and \"interruption\" is a break.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The [eruption] of Etna disrupted flights across Sicily.",
            sentence: "L'___ de l'Etna a perturbé les vols dans toute la Sicile.",
            answer: "éruption",
            explanation: "A volcano throws matter out from inside, so \"éruption\" (e- = out), not \"irruption\".",
          },
        ],
      },
      {
        heading: "Inclinaison is a tilt, inclination a liking",
        body: [
          "\"L'inclinaison\" is physical: a slope or tilt (\"l'inclinaison du toit\", \"l'inclinaison de la Terre\"). \"L'inclination\" is moral or emotional: a liking, a tendency (\"une inclination pour la musique\", \"suivre son inclination\"), or a bow of the head (\"une inclination de tête\").",
        ],
        examples: [
          { es: "L'inclinaison du toit permet à la neige de glisser.", en: "The slope of the roof lets the snow slide off." },
          { es: "Elle a toujours eu une inclination pour les langues anciennes.", en: "She has always had a liking for ancient languages." },
          { es: "Une légère inclination de tête suffit pour saluer.", en: "A slight nod is enough as a greeting." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which word fits: « L'___ de la tour de Pise attire les touristes du monde entier. »",
            options: ["inclinaison", "inclination", "inclinement", "déclinaison"],
            correctIndex: 0,
            explanation: "The tower's tilt is physical, so \"l'inclinaison\". \"L'inclination\" is a liking or a bow of the head; \"inclinement\" does not exist, and \"déclinaison\" is a grammar term.",
          },
        ],
      },
      {
        heading: "Prolongation in time, prolongement in space",
        body: [
          "\"La prolongation\" extends something in time: \"la prolongation d'un délai\", \"la prolongation d'un contrat\", and \"les prolongations\" in football (extra time). \"Le prolongement\" extends something in space (\"le prolongement de la ligne 14 du métro\") or names a consequence (\"les prolongements de l'affaire\"). \"Dans le prolongement de\" means in line with, following on from.",
        ],
        examples: [
          { es: "Nous avons obtenu une prolongation du délai de deux semaines.", en: "We obtained a two-week extension of the deadline." },
          { es: "Le match s'est joué aux prolongations.", en: "The match was decided in extra time." },
          { es: "Le prolongement de la ligne de tramway est prévu pour 2028.", en: "The extension of the tram line is planned for 2028." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The club has asked for an [extension] of the coach's contract.",
            sentence: "Le club a demandé la ___ du contrat de l'entraîneur.",
            answer: "prolongation",
            explanation: "A contract runs in time, so its extension is \"la prolongation\". \"Le prolongement\" extends something in space, like a road or a metro line.",
          },
        ],
      },
      {
        heading: "Allocution is a speech, allocation a benefit",
        body: [
          "\"Une allocution\" is a short formal speech (\"l'allocution du président\"). \"Une allocation\" is a benefit or allowance (\"les allocations familiales\", \"l'allocation chômage\") or an allotment of resources (\"l'allocation des ressources\"). A head of state gives \"une allocution télévisée\"; the CAF pays \"une allocation\".",
        ],
        examples: [
          { es: "Le président a prononcé une brève allocution télévisée.", en: "The president gave a short televised address." },
          { es: "Ils perçoivent des allocations familiales depuis la naissance de leur troisième enfant.", en: "They've been receiving family allowance since their third child was born." },
          { es: "L'allocation des crédits entre les régions fait débat.", en: "How the funding is allotted between the regions is under debate." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Since they moved, they have been receiving a [housing benefit].",
            sentence: "Depuis leur déménagement, ils touchent une ___ logement.",
            answer: "allocation",
            explanation: "Money paid out as a benefit is \"une allocation\" (\"l'allocation logement\"). \"Une allocution\" is a short formal speech, which nobody receives every month.",
          },
        ],
      },
      {
        heading: "Évoquer mentions, invoquer calls upon",
        body: [
          "\"Évoquer\" means to mention, to call to mind: \"il a évoqué ses souvenirs\", \"le rapport évoque plusieurs pistes\". \"Invoquer\" means to call upon (a god, a spirit) or to cite as a justification: \"invoquer un article de loi\", \"invoquer la force majeure\", \"invoquer un prétexte\". In a negotiation, you \"invoque\" a clause to justify a refusal; you \"évoque\" a topic you mention.",
        ],
        examples: [
          { es: "Le rapport évoque plusieurs pistes de réforme.", en: "The report mentions several possible reforms." },
          { es: "Le fournisseur a invoqué la force majeure pour justifier le retard.", en: "The supplier cited force majeure to justify the delay." },
          { es: "Ces photos évoquent mon enfance à Marseille.", en: "These photos call my childhood in Marseille to mind." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "The minister [cited] professional secrecy to avoid answering.",
            sentence: "Le ministre a ___ le secret professionnel pour ne pas répondre.",
            answer: "invoqué",
            explanation: "Citing something as a justification is \"invoquer\". \"Évoquer\" would only mean he mentioned professional secrecy, without using it as a shield.",
          },
        ],
      },
      {
        heading: "Notable is significant, notoire is well known",
        body: [
          "\"Notable\" means noteworthy, significant: \"une amélioration notable\", and \"un notable\" is a local dignitary. \"Notoire\" means well known, often for something bad: \"un escroc notoire\", \"il est notoire que\" (it is common knowledge that). \"Une amélioration notoire\" is a mistake for \"notable\".",
        ],
        examples: [
          { es: "On constate une amélioration notable des résultats.", en: "There's a significant improvement in the results." },
          { es: "C'est un escroc notoire, connu de tous les services de police.", en: "He's a notorious swindler, known to every police department." },
          { es: "Les notables de la ville étaient tous invités au banquet.", en: "The town's dignitaries were all invited to the banquet." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "How do you say: It is common knowledge that the building is falling apart.",
            options: ["Il est notoire que le bâtiment tombe en ruine.", "Il est notable que le bâtiment tombe en ruine.", "Il est notoirement que le bâtiment tombe en ruine.", "C'est un notable que le bâtiment tombe en ruine."],
            correctIndex: 0,
            explanation: "\"Il est notoire que\" means it is common knowledge that. \"Notable\" means significant and does not build this phrase; \"notoirement\" is an adverb and cannot follow \"il est\".",
          },
        ],
      },
      {
        heading: "Opprimer a people, oppresser a person",
        body: [
          "\"Opprimer\" means to oppress a people or a group by force: \"un régime qui opprime les minorités\". \"Oppresser\" means to weigh on someone physically or emotionally, to make breathless: \"une angoisse l'oppressait\", \"une chaleur oppressante\". The adjective \"oppressant\" (stifling) is common; \"opprimé\" (oppressed) describes victims of oppression.",
        ],
        examples: [
          { es: "Ce régime opprime les minorités depuis des décennies.", en: "This regime has oppressed minorities for decades." },
          { es: "Une angoisse sourde l'oppressait depuis le matin.", en: "A dull anxiety had been weighing on her since the morning." },
          { es: "Les peuples opprimés réclament leurs droits.", en: "Oppressed peoples demand their rights." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "How do you say: The silence in the room was stifling.",
            options: ["Le silence de la salle était oppressant.", "Le silence de la salle était opprimant.", "Le silence de la salle était opprimé.", "Le silence de la salle était oppressé."],
            correctIndex: 0,
            explanation: "Something that weighs on you and makes you breathless is \"oppressant\", from \"oppresser\". \"Opprimer\" is what a regime does to a group; \"opprimant\" is not used, and \"opprimé\" or \"oppressé\" would describe the victim.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "matching",
        instructions: "Match each word to its meaning.",
        pairs: [
          { left: "recouvrer", right: "to get back, recover" },
          { left: "recouvrir", right: "to cover completely" },
          { left: "une allocution", right: "a short formal speech" },
          { left: "une allocation", right: "a benefit, an allowance" },
          { left: "notoire", right: "well known, often for bad reasons" },
          { left: "notable", right: "noteworthy, significant" },
        ],
        explanation: "Paronyms differ by a letter or two and mean very different things.",
      },
      {
        type: "multiple-choice",
        question: "Which sentence is correct?",
        options: ["Après l'opération, elle a recouvré la vue.", "Après l'opération, elle a recouvert la vue.", "Après l'opération, elle a recouvri la vue.", "Après l'opération, elle s'est recouvrée la vue."],
        correctIndex: 0,
        explanation: "To get back one's sight: \"recouvrer la vue\", past participle \"recouvré\".",
      },
      {
        type: "listen-choose",
        audio: "Des manifestants ont fait irruption dans la salle.",
        question: "What did you hear?",
        options: ["ont fait irruption", "ont fait éruption", "ont fait une interruption", "ont fait une irritation"],
        correctIndex: 0,
        explanation: "\"Faire irruption\" (to burst in): ir-, not é-.",
      },
      {
        type: "listen-choose",
        audio: "Son inclination pour la solitude inquiétait ses parents.",
        question: "What does it mean?",
        options: ["His liking for solitude worried his parents.", "His stooping posture worried his parents.", "His habit of getting lost worried his parents.", "His bows to strangers worried his parents."],
        correctIndex: 0,
        explanation: "\"L'inclination\" is a moral leaning, a liking: \"une inclination pour la solitude\". A physical tilt or posture would be \"l'inclinaison\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "After the war, the country regained its independence.",
        answer: "Après la guerre, le pays a recouvré son indépendance.",
        altAnswers: ["Après la guerre, le pays a recouvré l'indépendance."],
        explanation: "Getting back something lost is \"recouvrer\", participle \"recouvré\". \"A recouvert son indépendance\" would mean the country covered it up.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The table was covered with a white cloth.",
        answer: "La table était recouverte d'une nappe blanche.",
        altAnswers: ["La table était recouverte par une nappe blanche.", "La table était recouverte avec une nappe blanche."],
        explanation: "Covering completely is \"recouvrir\", participle \"recouvert\", agreeing with \"la table\": \"recouverte\". After a participle of state, \"de\" introduces what covers it.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Le nouveau directeur a fait éruption dans mon bureau sans frapper.",
        answer: "Le nouveau directeur a fait irruption dans mon bureau sans frapper.",
        explanation: "Bursting into a room from outside is \"faire irruption\" (ir- = in). \"Éruption\" bursts out from inside, like a volcano.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Le prolongement du délai nous laisse jusqu'à vendredi.",
        answer: "La prolongation du délai nous laisse jusqu'à vendredi.",
        explanation: "A deadline is extended in time, so \"la prolongation\" (feminine). \"Le prolongement\" extends something in space or names a consequence.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Depuis la réforme, on observe une baisse notoire du chômage.",
        answer: "Depuis la réforme, on observe une baisse notable du chômage.",
        explanation: "A significant fall is \"notable\". \"Notoire\" means well known, usually for something bad, so a notorious fall in unemployment makes no sense.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Change it to the passé composé.",
        source: "Les avocats invoquent la légitime défense.",
        answer: "Les avocats ont invoqué la légitime défense.",
        explanation: "Passé composé of \"invoquer\": \"ont invoqué\". It is \"invoquer\", not \"évoquer\", because self-defence is cited as a justification, not just mentioned.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "A [notorious] tax evader was arrested in Nice.",
        sentence: "Un fraudeur ___ a été arrêté à Nice.",
        answer: "notoire",
        explanation: "Well known for something bad is \"notoire\" (\"un escroc notoire\", \"un fraudeur notoire\"). \"Notable\" would only mean noteworthy.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: The minister mentioned a possible tax cut.",
        words: ["La ministre", "a évoqué", "une possible", "baisse", "d'impôts."],
        translation: "The minister mentioned a possible tax cut.",
        explanation: "Mentioning a topic is \"évoquer\". \"Invoquer une baisse d'impôts\" would mean citing it as a justification for something else.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "The people of the region were oppressed for centuries.",
        answer: "Les habitants de la région ont été opprimés pendant des siècles.",
        altAnswers: ["La population de la région a été opprimée pendant des siècles.", "Le peuple de la région a été opprimé pendant des siècles.", "Les habitants de la région ont été opprimés durant des siècles.", "La population de la région a été opprimée durant des siècles."],
        explanation: "A group crushed by force is \"opprimé\", from \"opprimer\". \"Oppressé\" describes a person who can hardly breathe, from anguish or heat.",
      },
      {
        type: "speak",
        text: "L'inclinaison de la pente rend la montée difficile.",
        prompt: "Say it in French: The steepness of the slope makes the climb difficult.",
        explanation: "A physical angle is \"l'inclinaison\", not \"l'inclination\", which is a liking or a tendency.",
      },
    ],
  },
];

export const FR_C2_U16_WRITING: WriteExercise = {
  type: "write",
  prompt: "You are the project manager of a software company. This morning you met the IT director of a regional hospital and agreed on the deployment of your scheduling software. Write the confirmation email: subject line, greeting, the terms agreed (price, timetable, training), each party's commitments with deadlines, conditions, attachments (with \"ci-joint\" used correctly), a tactful line inviting corrections, and a professional closing.",
  minWords: 250,
  maxWords: 400,
  rubric: [
    "Professional frame: \"Objet :\" with a nominal phrase, an appropriate greeting, and openers such as \"suite à notre entretien de ce jour\", \"comme convenu\", \"je me permets de vous confirmer\".",
    "A structured recap in nominal style (\"déploiement\", \"formation\", \"mise en service\"), figures in French format (\"HT\", \"24 500 euros\", \"soit\") and deadlines (\"au plus tard le\", \"d'ici le\", \"à compter du\").",
    "Each party's commitments in the future, at least one condition with the subjunctive (\"à condition que\", \"pour que\") and one tactful conditional (\"tout élément qui ne correspondrait pas\").",
    "\"Ci-joint\" used correctly (invariable before a noun without article or at the start, agreeing after the noun) and a closing such as \"dans l'attente de votre retour\" + \"Bien cordialement\".",
  ],
  modelAnswer: "Objet : confirmation de notre accord – déploiement du logiciel Planéo\n\nBonjour Monsieur Arnaud,\n\nJe vous remercie pour notre entretien de ce matin et me permets de vous confirmer, comme convenu, les principaux termes de notre accord.\n\n1. Périmètre : déploiement du logiciel de planification Planéo dans les services de cardiologie, de pneumologie et des urgences, soit environ 350 utilisateurs.\n2. Tarif : licence annuelle de 24 500 euros HT, maintenance comprise, auxquels s'ajoutent 6 000 euros HT de frais d'installation, facturés une seule fois.\n3. Calendrier : installation technique à compter du 2 septembre ; mise en service progressive entre le 16 septembre et le 4 octobre.\n4. Formation : six sessions d'une demi-journée pour les cadres de santé et les secrétariats, organisées dans vos locaux au cours de la semaine du 9 septembre.\n\nDe notre côté, nous vous ferons parvenir le contrat définitif au plus tard le 15 juillet et désignerons un chef de projet dédié, joignable du lundi au vendredi. Du vôtre, vous nous transmettrez d'ici le 31 juillet la liste des utilisateurs ainsi que les accès nécessaires à vos serveurs, de sorte que nos équipes puissent préparer l'installation pendant l'été.\n\nComme nous l'avons évoqué, la date de mise en service ne pourra être tenue qu'à condition que ces accès nous soient communiqués dans les délais. Toute modification du périmètre intervenant après la signature fera l'objet d'un avenant.\n\nVous trouverez ci-joint le planning détaillé ainsi que la proposition commerciale mise à jour. Les fiches de formation ci-jointes pourront être diffusées dès à présent aux équipes concernées.\n\nJe vous remercie de bien vouloir me signaler tout élément qui ne correspondrait pas à votre compréhension de notre échange.\n\nDans l'attente de votre retour, je reste à votre disposition pour tout complément d'information.\n\nBien cordialement,\n\nÉlise Fournier\nCheffe de projet, Planéo Santé\n\nP. J. : planning détaillé ; proposition commerciale ; fiches de formation",
  explanation: "The email opens with the standard formulas (\"je vous remercie pour notre entretien de ce matin et me permets de vous confirmer, comme convenu\"), then recaps in a numbered list of nominal phrases with French figures (\"24 500 euros HT\", \"soit environ 350 utilisateurs\") and deadline markers (\"à compter du\", \"au plus tard le\", \"d'ici le\"). Commitments use the future (\"nous vous ferons parvenir\", \"vous nous transmettrez\"); conditions and purposes take the subjunctive (\"à condition que ces accès nous soient communiqués\", \"de sorte que nos équipes puissent\"); the contractual participle \"intervenant\" replaces a relative clause. \"Ci-joint\" is invariable before \"le planning\" (both forms are accepted with an article) and agrees after the noun (\"les fiches ci-jointes\"). The tactful conditional (\"qui ne correspondrait pas\") and \"Bien cordialement\" close the email professionally.",
};
