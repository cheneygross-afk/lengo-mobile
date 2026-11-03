// Synced from cheneygross-afk/lengo:src/lib/lessons/fr-b2-u01.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// French B2, Unit 1: Subjunctive in Relative Clauses.

export const FR_B2_U01_WRITING: WriteExercise = {
  type: "write",
  prompt: "You are moving to Lyon for a new job and need a flatmate and a flat. Write a post for a flat-sharing website: describe the flat you want and the flatmate you are looking for (the qualities they must have and what you can't stand), then say what kind of person you already are and what friends you have in the city.",
  minWords: 120,
  maxWords: 220,
  rubric: [
    "Describes the flat and flatmate you are looking for with a subjunctive relative: \"je cherche un appartement qui soit...\", \"quelqu'un qui sache / puisse / ait...\"",
    "Uses at least one negated antecedent: \"il n'y a rien qui...\", \"je ne connais personne qui...\" + subjunctive",
    "Uses \"le seul\" or a superlative with a subjunctive relative (\"le meilleur quartier que je connaisse\")",
    "Contrasts with real people or things in the indicative: \"j'ai un ami qui habite...\", \"je connais quelqu'un qui...\"",
  ],
  modelAnswer: "Bonjour à tous ! Je m'appelle Camille, j'ai vingt-huit ans et je commence un nouveau travail à Lyon en septembre. Je cherche un appartement qui soit assez grand pour deux, avec deux vraies chambres, et qui ne soit pas trop loin de la Part-Dieu. Idéalement, je voudrais un logement qui ait un balcon, parce que j'adore prendre mon café dehors. Je cherche aussi une ou un colocataire qui soit calme en semaine, qui sache cuisiner (ou qui ait envie d'apprendre !) et qui puisse partager équitablement les tâches ménagères. Il n'y a rien qui m'énerve plus que la vaisselle sale dans l'évier ! Pour moi, la Croix-Rousse est le quartier le plus agréable que je connaisse, mais je suis ouverte à d'autres idées. Quant à moi, je suis plutôt sociable : j'ai une amie qui habite à Villeurbanne et un cousin qui travaille dans le Vieux Lyon, donc je ne serai pas toujours à la maison. Si vous connaissez quelqu'un qui puisse être intéressé, n'hésitez pas à m'écrire !",
  explanation: "The subjunctive appears in every relative clause describing what Camille wants but hasn't found (\"un appartement qui soit\", \"une colocataire qui sache\"), after the negated \"il n'y a rien qui\" and after the superlative \"le plus agréable que je connaisse\". The people she already knows take the indicative: \"une amie qui habite\", \"un cousin qui travaille\".",
};

export const FR_B2_U01: Lesson[] = [
  {
    slug: "b2-subjunctive-relatives-1",
    level: "FR-B2",
    number: 1,
    title: "The Subjunctive in Relative Clauses, Part 1 of 2",
    summary: "Je connais quelqu'un qui sait or je cherche quelqu'un qui sache: the mood in a relative clause tells whether the thing you describe exists.",
    duration: "15 min",
    sections: [
      {
        heading: "Someone who knows: two moods where English has one",
        body: [
          "In English, 'I know someone who speaks Russian' and 'I'm looking for someone who speaks Russian' use exactly the same verb. French splits them. When the person or thing described by the relative clause really exists and you could point to it, the verb is in the indicative: \"Je connais quelqu'un qui sait coder.\" When you are only describing what you want, and you don't know whether it exists, the verb goes into the subjunctive: \"Je cherche quelqu'un qui sache coder.\"",
        ],
        examples: [
          { es: "Je connais quelqu'un qui sait coder.", en: "I know someone who can code." },
          { es: "Je cherche quelqu'un qui sache coder.", en: "I'm looking for someone who can code." },
          { es: "J'ai une collègue qui peut te remplacer lundi.", en: "I have a colleague who can stand in for you on Monday." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You want to recommend your own plumber, Karim, to a friend. Which sentence fits?",
            options: ["J'ai un plombier qui est vraiment sérieux.", "J'ai un plombier qui soit vraiment sérieux.", "Je cherche un plombier qui est vraiment sérieux.", "J'ai un plombier qui sois vraiment sérieux."],
            correctIndex: 0,
            explanation: "Karim exists and you know him, so the indicative \"qui est\" is right. \"Qui soit\" would describe a plumber you only hope to find.",
          },
          {
            type: "listen-choose",
            question: "What does it mean?",
            audio: "Je cherche une voiture qui soit fiable.",
            options: ["I'm looking for a car that's reliable.", "I've found a car that's reliable.", "I have a car that's reliable.", "I'm selling a car that's reliable."],
            correctIndex: 0,
            explanation: "\"Je cherche\" + \"qui soit\": a car you want, not one you have. The subjunctive \"soit\" confirms it is only a requirement.",
          },
        ],
      },
      {
        heading: "The antecedent: does it exist?",
        body: [
          "The noun that the relative clause describes is called the antecedent. Ask one question about it: does it exist in the speaker's world, or only in the speaker's wishes? Existing, identified → indicative. Wanted, imagined, required → subjunctive. The subjunctive is doing the same job it did after \"je veux que\" at the Intermediate level: it marks something that is not (yet) a fact.",
        ],
        examples: [
          { es: "Il me faut une collègue qui puisse me remplacer lundi.", en: "I need a colleague who can stand in for me on Monday." },
          { es: "Nous avons un appartement qui est lumineux et calme.", en: "We have a flat that's bright and quiet." },
          { es: "Nous voulons un appartement qui soit lumineux et calme.", en: "We want a flat that's bright and quiet." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change it so the mechanic is only wanted: start with \"Je cherche\".",
            source: "Je connais un mécanicien qui fait des prix honnêtes.",
            answer: "Je cherche un mécanicien qui fasse des prix honnêtes.",
            explanation: "Once the mechanic is only wanted, the clause describes a requirement: \"fait\" becomes the subjunctive \"fasse\". Keeping \"fait\" would suggest a particular mechanic.",
          },
        ],
      },
      {
        heading: "Why the indicative sounds off in an ad",
        body: [
          "Because English gives you no clue, English speakers default to the indicative. A French recruiter reading \"nous cherchons un développeur qui sait parler anglais\" understands you, but it sounds slightly off, as if you already had a particular developer in mind. In job ads, flat-share posts and formal requests, the subjunctive is the expected choice.",
        ],
        examples: [
          { es: "Nous cherchons un développeur qui sache parler anglais.", en: "We're looking for a developer who can speak English." },
          { es: "Nous recherchons une vendeuse qui ait de l'expérience.", en: "We're looking for a sales assistant with experience." },
          { es: "On cherche un colocataire qui soit non-fumeur.", en: "We're looking for a non-smoking flatmate." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence for a job ad.",
            source: "Nous cherchons un comptable qui sait parler allemand.",
            answer: "Nous cherchons un comptable qui sache parler allemand.",
            explanation: "In a job ad the accountant is a requirement, not a known person, so \"savoir\" takes the subjunctive \"sache\".",
          },
        ],
      },
      {
        heading: "Clue 1: the article",
        body: [
          "Two things in the main clause usually tell you which mood to use. First, the article. \"Le\", \"la\", \"ce\", \"mon\" point to something already identified, so the relative clause describes a fact: \"Je cherche le stagiaire qui parle allemand\" (he exists, I just can't find him in the building). \"Un\", \"une\", \"des\" after a verb of searching usually introduce something not yet identified: \"Je cherche un stagiaire qui parle allemand\" (any intern, as long as he speaks German).",
        ],
        examples: [
          { es: "Je cherche le stagiaire qui parle allemand. Tu l'as vu ?", en: "I'm looking for the intern who speaks German. Have you seen him?" },
          { es: "Je cherche la collègue qui connaît le dossier.", en: "I'm looking for the colleague who knows the file." },
          { es: "Je cherche une collègue qui connaisse le dossier.", en: "I'm looking for a colleague who knows the file." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "\"Je cherche le stagiaire qui parle allemand.\" What does \"le\" tell you?",
            options: ["He exists; I just can't find him.", "Any intern who speaks German will do.", "I'm not sure he speaks German.", "I want to hire an intern."],
            correctIndex: 0,
            explanation: "\"Le\" points to someone already identified, so the clause is a fact and takes the indicative. \"Un stagiaire\" would mean any intern.",
          },
        ],
      },
      {
        heading: "Clue 2: verbs that create a search",
        body: [
          "Second, the verb. Some verbs create a search by their meaning: \"chercher\", \"vouloir\", \"avoir besoin de\", \"il me faut\", \"rêver de\", \"souhaiter\", \"demander\", \"exiger\". After them, a relative clause describing a requirement takes the subjunctive. After verbs that state a fact (\"avoir\", \"connaître\", \"trouver\" in the past, \"voir\", \"habiter\"), the indicative is normal.",
        ],
        examples: [
          { es: "On a besoin d'une baby-sitter qui puisse venir le mercredi.", en: "We need a babysitter who can come on Wednesdays." },
          { es: "Elle rêve d'une maison qui ait un grand jardin.", en: "She dreams of a house with a big garden." },
          { es: "Mon frère a une maison qui a un grand jardin.", en: "My brother has a house with a big garden." },
          { es: "Ils veulent un médecin qui fasse des visites à domicile.", en: "They want a doctor who does home visits." },
          { es: "Nous avons trouvé un médecin qui fait des visites à domicile.", en: "We've found a doctor who does home visits." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "We need a nurse [who can] work at night.",
            sentence: "On a besoin d'une infirmière ___ travailler la nuit.",
            answer: "qui puisse",
            explanation: "\"Avoir besoin de\" + \"une\": the nurse is not found yet, so \"pouvoir\" goes into the subjunctive, \"puisse\", not \"peut\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "She dreams of a job that lets her travel.",
            answer: "Elle rêve d'un travail qui lui permette de voyager.",
            altAnswers: ["Elle rêve d'un emploi qui lui permette de voyager.", "Elle rêve d'un métier qui lui permette de voyager.", "Elle rêve d'un boulot qui lui permette de voyager."],
            explanation: "\"Rêver de\" creates a wish, so the relative takes the subjunctive \"permette\"; \"permet\" would describe a job she has.",
          },
        ],
      },
      {
        heading: "Chercher + indicative: a nuance",
        body: [
          "A nuance worth knowing: with \"chercher un...\", the indicative is not impossible. \"Je cherche un hôtel qui a une piscine\" presents the pool as a feature of hotels you know exist. The subjunctive \"qui ait une piscine\" presents it as your condition. In writing, ads and anything formal, use the subjunctive for requirements; it is what an examiner expects.",
        ],
        examples: [
          { es: "Je cherche un hôtel qui a une piscine.", en: "I'm looking for a hotel that has a pool." },
          { es: "Je cherche un hôtel qui ait une piscine.", en: "I'm looking for a hotel with a pool (that's my condition)." },
          { es: "Nous recherchons un candidat qui ait le permis B.", en: "We're looking for a candidate with a driving licence." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "\"Je cherche un hôtel qui ait une piscine.\" What does the subjunctive \"ait\" add?",
            options: ["The pool is my condition.", "I know this hotel has a pool.", "The hotel used to have a pool.", "Any hotel will do."],
            correctIndex: 0,
            explanation: "The subjunctive presents the pool as a requirement. The indicative \"a\" would present it as a feature of hotels you know exist.",
          },
        ],
      },
      {
        heading: "Where the mood becomes visible",
        body: [
          "For regular -er verbs, the subjunctive in the je, tu, il and ils forms looks and sounds like the present: \"qui parle\", \"qui travaille\". The mood only becomes visible with irregular verbs, so these are the ones to have at your fingertips: \"savoir\" → \"sache\", \"pouvoir\" → \"puisse\", \"être\" → \"soit\", \"avoir\" → \"ait\", \"faire\" → \"fasse\", \"vouloir\" → \"veuille\", \"aller\" → \"aille\".",
        ],
        examples: [
          { es: "Je cherche un plombier qui soit disponible ce week-end.", en: "I'm looking for a plumber who's available this weekend." },
          { es: "Ils cherchent une colocataire qui ait un emploi stable.", en: "They're looking for a flatmate who has a steady job." },
          { es: "L'association cherche des bénévoles qui veuillent bien aider le samedi.", en: "The association is looking for volunteers who are willing to help on Saturdays." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "We're looking for a flat [that has] a lift.",
            sentence: "Nous cherchons un appartement ___ un ascenseur.",
            answer: "qui ait",
            explanation: "\"Avoir\" in the subjunctive is \"ait\". \"Qui a\" would describe a flat you already know.",
          },
          {
            type: "speak",
            prompt: "Say it in French: I'm looking for a garage that's open on Sundays.",
            text: "Je cherche un garage qui soit ouvert le dimanche.",
            tip: "\"Soit\" rhymes with \"moi\"; the t is silent.",
            explanation: "\"Qui soit\": the subjunctive of être for a garage you haven't found yet.",
          },
        ],
      },
      {
        heading: "Other stems and plural endings",
        body: [
          "Verbs with a different ils stem also show the mood: \"connaître\" → \"connaisse\", \"prendre\" → \"prenne\", \"venir\" → \"vienne\", \"finir\" → \"finisse\", \"écrire\" → \"écrive\". In the plural, watch the endings: \"des gens qui sachent\", \"des clients qui soient\", \"des voisins qui aient\".",
        ],
        examples: [
          { es: "Il nous faut un traducteur qui connaisse bien le vocabulaire juridique.", en: "We need a translator who knows legal vocabulary well." },
          { es: "Je voudrais un coiffeur qui prenne des rendez-vous le soir.", en: "I'd like a hairdresser who takes appointments in the evening." },
          { es: "On cherche des clients qui soient fidèles.", en: "We're looking for loyal customers." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I'd like a teacher who knows the region well.",
            answer: "Je voudrais un professeur qui connaisse bien la région.",
            altAnswers: ["Je voudrais une professeure qui connaisse bien la région.", "J'aimerais un professeur qui connaisse bien la région.", "Je voudrais un prof qui connaisse bien la région.", "J'aimerais un prof qui connaisse bien la région."],
            explanation: "A teacher you want, not one you have: \"connaître\" → \"connaisse\", from the ils stem \"connaiss-\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it plural: \"des clients\".",
            source: "On cherche un client qui soit sérieux.",
            answer: "On cherche des clients qui soient sérieux.",
            explanation: "In the plural, the subjunctive of être is \"soient\", and the adjective takes -s.",
          },
        ],
      },
      {
        heading: "A habit to build",
        body: [
          "A useful habit: when you write \"je cherche / il me faut / on veut + un(e)... qui\", stop and check the next verb. If it is one of these, it needs its subjunctive form.",
        ],
        examples: [
          { es: "Je cherche un sentier qui aille directement à la plage.", en: "I'm looking for a path that goes straight to the beach." },
          { es: "Il me faut une imprimante qui fasse aussi scanner.", en: "I need a printer that scans too." },
          { es: "On veut un quartier qui soit animé le soir.", en: "We want a neighbourhood that's lively in the evening." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Il me faut un ordinateur qui peut tourner toute la nuit.",
            answer: "Il me faut un ordinateur qui puisse tourner toute la nuit.",
            explanation: "After \"il me faut un...\", the next verb describes a requirement: \"pouvoir\" → \"puisse\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "I know someone who can fix bikes.",
        answer: "Je connais quelqu'un qui sait réparer les vélos.",
        altAnswers: ["Je connais quelqu'un qui sait réparer des vélos.", "Je connais une personne qui sait réparer les vélos.", "Je connais quelqu'un qui peut réparer les vélos.", "Je connais quelqu'un qui peut réparer des vélos."],
        explanation: "You know this person, so the clause states a fact: indicative \"sait\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "I'm looking for someone who can fix bikes.",
        answer: "Je cherche quelqu'un qui sache réparer les vélos.",
        altAnswers: ["Je cherche quelqu'un qui sache réparer des vélos.", "Je cherche une personne qui sache réparer les vélos.", "Je cherche quelqu'un qui puisse réparer les vélos.", "Je cherche quelqu'un qui puisse réparer des vélos."],
        explanation: "Same clause, but the person is only wanted: subjunctive \"sache\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "We want a flat that's near the metro.",
        answer: "Nous voulons un appartement qui soit près du métro.",
        altAnswers: ["On veut un appartement qui soit près du métro.", "Nous voulons un appartement qui soit proche du métro.", "On veut un appartement qui soit proche du métro."],
        explanation: "\"Vouloir un...\": a requirement, so \"être\" becomes \"soit\".",
      },
      {
        type: "multiple-choice",
        question: "An agency is writing a job ad. Which sentence is correct?",
        options: ["Nous cherchons une assistante qui sache parler espagnol.", "Nous cherchons une assistante qui sait parler espagnol.", "Nous cherchons une assistante qui saches parler espagnol.", "Nous cherchons une assistante qui sachent parler espagnol."],
        correctIndex: 0,
        explanation: "The assistant isn't hired yet: third-person singular subjunctive \"sache\". \"Saches\" is the tu form and \"sachent\" the plural.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "I have a neighbour [who is] a nurse.",
        sentence: "J'ai une voisine ___ infirmière.",
        answer: "qui est",
        explanation: "Your neighbour exists, so the indicative \"est\" is right; \"qui soit\" would be wrong here.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "They need a doctor who speaks English.",
        answer: "Ils ont besoin d'un médecin qui parle anglais.",
        altAnswers: ["Elles ont besoin d'un médecin qui parle anglais.", "Il leur faut un médecin qui parle anglais.", "Ils ont besoin d'une médecin qui parle anglais.", "Elles ont besoin d'une médecin qui parle anglais.", "Il leur faut une médecin qui parle anglais."],
        explanation: "Grammatically this is a subjunctive, but \"parle\" has the same form in both moods, so nothing changes on the page.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "My sister has a boss who wants to do everything himself.",
        answer: "Ma sœur a un patron qui veut tout faire lui-même.",
        altAnswers: ["Ma sœur a un chef qui veut tout faire lui-même."],
        explanation: "A real boss, described as he is: indicative \"veut\". The subjunctive would be \"veuille\".",
      },
      {
        type: "dictation",
        audio: "Je cherche quelqu'un qui puisse m'aider.",
        explanation: "\"Qui puisse\": the subjunctive of pouvoir, with a double s.",
      },
      {
        type: "speak",
        prompt: "Say it in French: We're looking for someone who's patient.",
        text: "Nous cherchons quelqu'un qui soit patient.",
        explanation: "\"Nous cherchons quelqu'un qui soit patient\": an unknown person, so \"soit\".",
      },
      {
        type: "listen-choose",
        question: "What did you hear?",
        audio: "Je cherche un vendeur qui sache l'anglais.",
        options: ["Je cherche un vendeur qui sache l'anglais.", "Je cherche un vendeur qui sait l'anglais.", "Je cherche le vendeur qui sait l'anglais.", "J'ai un vendeur qui sait l'anglais."],
        correctIndex: 0,
        explanation: "\"Sache\" ends in a sh sound; \"sait\" ends in an open è sound. You also heard \"un vendeur\", a salesperson not yet found.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: I'm looking for a car that's reliable.",
        words: ["Je cherche", "une voiture", "qui", "soit", "fiable."],
        translation: "I'm looking for a car that's reliable.",
        explanation: "Verb of searching + \"une\" + \"qui soit\": the car is a requirement, not yet a fact.",
      },
    ],
  },
  {
    slug: "b2-pattern-je-cherche-quelquun-qui",
    level: "FR-B2",
    number: 2,
    title: "Pattern Practice: Je cherche quelqu'un qui...",
    summary: "Drill one frame with many verbs: chercher, vouloir, avoir besoin de or rêver de + un(e) + noun + qui / que + subjunctive.",
    duration: "13 min",
    sections: [
      {
        heading: "The frame with qui",
        body: [
          "This lesson drills a single frame until it is automatic: a verb of wanting or searching, an indefinite noun, then \"qui\" + subjunctive. \"Je cherche un appartement qui soit lumineux.\" \"Il me faut un collègue qui puisse me remplacer.\" \"On rêve d'un quartier qui ait du caractère.\"",
        ],
        examples: [
          { es: "Je cherche un appartement qui soit lumineux.", en: "I'm looking for a flat that's bright." },
          { es: "Il me faut un collègue qui puisse me remplacer en août.", en: "I need a colleague who can cover for me in August." },
          { es: "Nous voudrions une voiture qui consomme peu.", en: "We'd like a car that uses little fuel." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into a search: start with \"Je cherche\".",
            source: "J'ai un vélo qui est solide.",
            answer: "Je cherche un vélo qui soit solide.",
            explanation: "\"Je cherche un...\" turns the bike into a requirement, so \"est\" becomes the subjunctive \"soit\".",
          },
        ],
      },
      {
        heading: "The first slot: verbs of wanting",
        body: [
          "The first slot can be filled by \"chercher\", \"vouloir\" (often \"je voudrais\"), \"avoir besoin de\", \"il me faut\", \"rêver de\", \"souhaiter\". With \"avoir besoin de\" and \"rêver de\", remember the \"de\": \"j'ai besoin d'un ordinateur qui soit léger\", \"elle rêve d'un travail qui lui laisse du temps\".",
          "With \"qui\", the person or thing is the subject of the subjunctive verb, so the verb agrees with it: \"des collègues qui puissent\", \"une voiture qui consomme peu\".",
        ],
        examples: [
          { es: "J'ai besoin d'un ordinateur qui soit léger et rapide.", en: "I need a computer that's light and fast." },
          { es: "Elle rêve d'un travail qui lui laisse du temps libre.", en: "She dreams of a job that leaves her some free time." },
          { es: "Ils cherchent des stagiaires qui sachent utiliser Excel.", en: "They're looking for interns who know how to use Excel." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "I need a bag [that is] waterproof.",
            sentence: "J'ai besoin d'un sac ___ imperméable.",
            answer: "qui soit",
            explanation: "\"Avoir besoin d'un...\" describes a requirement: \"qui soit\", not the indicative \"qui est\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "She dreams of a flat that has a terrace.",
            answer: "Elle rêve d'un appartement qui ait une terrasse.",
            altAnswers: ["Elle rêve d'un appart qui ait une terrasse."],
            explanation: "\"Rêver de\" keeps its \"de\", and the relative takes the subjunctive \"ait\" because the flat is only imagined.",
          },
        ],
      },
      {
        heading: "The frame with que",
        body: [
          "The same logic works when the relative pronoun is \"que\" (the object). Now a new subject appears inside the clause, and it is that subject's verb that goes into the subjunctive: \"Je cherche un livre que je puisse lire en une soirée\", \"Il nous faut une date que tout le monde puisse retenir.\"",
        ],
        examples: [
          { es: "Je cherche un livre que je puisse lire en une soirée.", en: "I'm looking for a book I can read in one evening." },
          { es: "Il nous faut une date que tout le monde puisse retenir.", en: "We need a date everyone can remember." },
          { es: "Je voudrais un manteau que je puisse mettre au travail.", en: "I'd like a coat I can wear to work." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            question: "What does it mean?",
            audio: "Je voudrais un manteau que je puisse mettre au travail.",
            options: ["I'd like a coat I can wear to work.", "I'd like the coat I wore to work.", "I have a coat I can wear to work.", "I'd like a coat I could take off at work."],
            correctIndex: 0,
            explanation: "\"Je voudrais un manteau\": a coat you want. \"Mettre\" a piece of clothing is to put on or wear it.",
          },
          {
            type: "word-order",
            prompt: "Put the words in order to say: I'd like a film we can watch with the children.",
            words: ["Je voudrais", "un film", "que", "nous puissions", "regarder", "avec les enfants."],
            translation: "I'd like a film we can watch with the children.",
            explanation: "With \"que\", the new subject \"nous\" gets the subjunctive: \"nous puissions\".",
          },
        ],
      },
      {
        heading: "Never drop que",
        body: [
          "English often drops the relative pronoun ('a book I can read in one evening'); French never does. Before \"il\", \"elle\", \"on\" and a vowel, \"que\" becomes \"qu'\": \"je cherche un cadeau qu'elle aime vraiment\" (here \"aime\" is subjunctive, but looks like the present).",
          "Another common variant uses \"où\" for places: \"un café où on puisse travailler\". You will drill that more in Unit 2.",
        ],
        examples: [
          { es: "Elle veut offrir un cadeau qui lui fasse vraiment plaisir.", en: "She wants to give him a present that will really please him." },
          { es: "On cherche une recette que les enfants aiment.", en: "We're looking for a recipe the kids will like." },
          { es: "Ils ont besoin d'un logiciel que leurs clients sachent utiliser.", en: "They need software their clients know how to use." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Je cherche un roman je puisse lire en vacances.",
            answer: "Je cherche un roman que je puisse lire en vacances.",
            explanation: "English can drop the relative pronoun; French never can, so \"que\" must introduce the clause.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "We need a place where we can work.",
            answer: "Il nous faut un endroit où on puisse travailler.",
            altAnswers: ["Nous avons besoin d'un endroit où nous puissions travailler.", "On a besoin d'un endroit où on puisse travailler.", "Il nous faut un lieu où on puisse travailler.", "Il nous faut un endroit où nous puissions travailler."],
            explanation: "A place takes \"où\", and the wanted place puts \"pouvoir\" in the subjunctive, \"puisse\".",
          },
        ],
      },
      {
        heading: "Adding a negative: qui ne soit pas...",
        body: [
          "Requirements are often negative: you want a neighbour who doesn't make noise, a flatmate who isn't too talkative. The \"ne... pas\" simply wraps the subjunctive verb: \"quelqu'un qui ne soit pas trop bavard\", \"des voisins qui ne fassent pas de bruit\".",
          "Remember that \"pas de\" replaces \"du / de la / des\" after a negative: \"qui ne fasse pas de bruit\", \"qui n'ait pas d'animaux\".",
        ],
        examples: [
          { es: "Je cherche quelqu'un qui ne soit pas trop bavard.", en: "I'm looking for someone who isn't too talkative." },
          { es: "On rêve de voisins qui ne fassent pas de bruit le soir.", en: "We dream of neighbours who don't make noise in the evening." },
          { es: "Il veut un colocataire qui n'ait pas d'animaux.", en: "He wants a flatmate who doesn't have pets." },
          { es: "J'ai besoin d'un téléphone qui ne soit pas trop cher.", en: "I need a phone that isn't too expensive." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "We want neighbours who don't have a dog.",
            answer: "Nous voulons des voisins qui n'aient pas de chien.",
            altAnswers: ["On veut des voisins qui n'aient pas de chien.", "Nous voudrions des voisins qui n'aient pas de chien."],
            explanation: "\"Ne... pas\" wraps the plural subjunctive \"aient\", and \"un\" becomes \"de\" after the negative.",
          },
          {
            type: "speak",
            prompt: "Say it in French: I need a car that isn't too big.",
            text: "Il me faut une voiture qui ne soit pas trop grande.",
            explanation: "\"Qui ne soit pas\": the negative wraps the subjunctive of être.",
          },
        ],
      },
      {
        heading: "Stacking requirements",
        body: [
          "You can stack several requirements, repeating \"qui\" each time; that is exactly how French ads read: \"une colocataire qui soit calme, qui ne fume pas et qui ait un emploi stable\".",
        ],
        examples: [
          { es: "Nous cherchons une colocataire qui soit calme, qui ne fume pas et qui ait un emploi stable.", en: "We're looking for a flatmate who's quiet, doesn't smoke and has a steady job." },
          { es: "On cherche un local qui soit grand, qui ait une vitrine et qui ne coûte pas trop cher.", en: "We're looking for premises that are big, have a shop window and don't cost too much." },
          { es: "Je veux un vélo qui soit léger et qui ait de bons freins.", en: "I want a bike that's light and has good brakes." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "We're looking for a nanny who's patient, who speaks English and who can drive.",
            answer: "Nous cherchons une nounou qui soit patiente, qui parle anglais et qui sache conduire.",
            altAnswers: ["On cherche une nounou qui soit patiente, qui parle anglais et qui sache conduire.", "Nous cherchons une baby-sitter qui soit patiente, qui parle anglais et qui sache conduire.", "On cherche une baby-sitter qui soit patiente, qui parle anglais et qui sache conduire."],
            explanation: "Repeat \"qui\" for each requirement, and use the subjunctive each time: \"soit\", \"parle\", \"sache\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "I'd like a phone that takes good photos.",
        answer: "Je voudrais un téléphone qui fasse de belles photos.",
        altAnswers: ["Je voudrais un téléphone qui prenne de belles photos.", "Je voudrais un téléphone qui fasse de bonnes photos.", "Je voudrais un téléphone qui prenne de bonnes photos.", "J'aimerais un téléphone qui fasse de belles photos."],
        explanation: "A phone you want, not one you own: \"faire\" → \"fasse\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "We need a manager who knows the team.",
        answer: "Il nous faut un responsable qui connaisse l'équipe.",
        altAnswers: ["Nous avons besoin d'un responsable qui connaisse l'équipe.", "On a besoin d'un responsable qui connaisse l'équipe.", "Il nous faut une responsable qui connaisse l'équipe."],
        explanation: "\"Il nous faut un...\" + subjunctive \"connaisse\".",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "He wants a job [that allows him] to work from home.",
        sentence: "Il veut un travail ___ de travailler chez lui.",
        answer: "qui lui permette",
        explanation: "\"Permettre à quelqu'un de\" → \"lui\"; a wanted job takes the subjunctive \"permette\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "I'm looking for a song my grandmother knows.",
        answer: "Je cherche une chanson que ma grand-mère connaisse.",
        explanation: "With \"que\", the subject inside the clause is \"ma grand-mère\", and her verb goes into the subjunctive: \"connaisse\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "We'd like a present she can use every day.",
        answer: "Nous voudrions un cadeau qu'elle puisse utiliser tous les jours.",
        altAnswers: ["On voudrait un cadeau qu'elle puisse utiliser tous les jours.", "Nous aimerions un cadeau qu'elle puisse utiliser tous les jours."],
        explanation: "\"Que\" elides before \"elle\"; \"pouvoir\" → \"puisse\" because the present isn't chosen yet.",
      },
      {
        type: "multiple-choice",
        question: "Which sentence asks for neighbours who don't make noise?",
        options: ["Je voudrais des voisins qui ne fassent pas de bruit.", "Je voudrais des voisins qui ne font pas de bruit.", "Je voudrais des voisins qui ne fassent pas du bruit.", "Je voudrais des voisins qui fassent pas de bruit."],
        correctIndex: 0,
        explanation: "Subjunctive \"fassent\", full \"ne... pas\" in written French, and \"pas de\" after the negative.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "I'd like a hairdresser [who is] open on Mondays.",
        sentence: "Je voudrais un coiffeur ___ ouvert le lundi.",
        answer: "qui soit",
        explanation: "\"Je voudrais un...\" + \"qui soit\": the subjunctive of être for a requirement.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: She's looking for a flat that isn't too far from work.",
        words: ["Elle cherche", "un appartement", "qui ne soit pas", "trop loin", "de son travail."],
        translation: "She's looking for a flat that isn't too far from work.",
        explanation: "\"Ne... pas\" wraps the subjunctive \"soit\".",
      },
      {
        type: "dictation",
        audio: "Il nous faut des bénévoles qui aient du temps le week-end.",
        explanation: "Plural subjunctive of avoir: \"aient\", pronounced like \"ait\".",
      },
      {
        type: "speak",
        prompt: "Say it in French: We're looking for a day when everyone can come.",
        text: "On cherche un jour où tout le monde puisse venir.",
        explanation: "\"Où\" after a time noun; \"puisse\" because the day isn't fixed yet.",
      },
    ],
  },
  {
    slug: "b2-minimal-pairs-jai-un-ami-je-cherche-un-ami",
    level: "FR-B2",
    number: 3,
    title: "Minimal Pairs: J'ai un ami qui... / Je cherche un ami qui...",
    summary: "The same relative clause in both moods: when the difference is invisible, when you can hear it, and why nous and vous give it away.",
    duration: "13 min",
    sections: [
      {
        heading: "Invisible pairs: qui parle / qui parle",
        body: [
          "Put \"J'ai un voisin qui parle russe\" next to \"Je cherche un voisin qui parle russe\". The first \"parle\" is indicative, the second subjunctive, and they are spelled and pronounced identically. For every regular -er verb, and for many others, the singular and the ils forms are the same in both moods.",
        ],
        examples: [
          { es: "J'ai un voisin qui parle russe.", en: "I have a neighbour who speaks Russian." },
          { es: "Je cherche un voisin qui parle russe.", en: "I'm looking for a neighbour who speaks Russian." },
          { es: "Nous avons une nounou qui habite à côté.", en: "We have a nanny who lives next door." },
          { es: "Nous voulons une nounou qui habite à côté.", en: "We want a nanny who lives next door." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Change \"J'ai\" to \"Je cherche\".",
            source: "J'ai une voisine qui chante bien.",
            answer: "Je cherche une voisine qui chante bien.",
            explanation: "\"Chante\" is now subjunctive, but for a regular -er verb the singular form doesn't change, so only \"je cherche\" moves.",
          },
        ],
      },
      {
        heading: "Why you still need the rule",
        body: [
          "That's good news for speaking: with \"travailler\", \"habiter\", \"aimer\", \"parler\", \"jouer\", \"chanter\", \"accepter\" you cannot get the mood wrong in the singular. But the grammar is still there, and it will surface the moment the verb is irregular. That is why you need to feel the rule, not just memorise forms.",
        ],
        examples: [
          { es: "Ils ont un gardien qui accepte les colis.", en: "They have a caretaker who accepts parcels." },
          { es: "Ils cherchent un gardien qui accepte les colis.", en: "They're looking for a caretaker who accepts parcels." },
          { es: "Je cherche une chorale qui chante du jazz.", en: "I'm looking for a choir that sings jazz." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "In which pair are the two verbs spelled differently?",
            options: ["J'ai un ami qui sait nager. / Je cherche un ami qui sache nager.", "J'ai un ami qui joue au tennis. / Je cherche un ami qui joue au tennis.", "J'ai un ami qui aime cuisiner. / Je cherche un ami qui aime cuisiner.", "J'ai un ami qui parle chinois. / Je cherche un ami qui parle chinois."],
            correctIndex: 0,
            explanation: "Only irregular \"savoir\" shows the mood: \"sait\" vs \"sache\". The -er verbs look the same in both moods.",
          },
        ],
      },
      {
        heading: "Audible pairs: qui sait / qui sache",
        body: [
          "With irregular verbs, the two moods sound different and you must choose: \"qui sait\" / \"qui sache\", \"qui peut\" / \"qui puisse\", \"qui est\" / \"qui soit\", \"qui a\" / \"qui ait\", \"qui fait\" / \"qui fasse\", \"qui va\" / \"qui aille\", \"qui veut\" / \"qui veuille\".",
        ],
        examples: [
          { es: "J'ai une amie qui sait réparer les ordinateurs.", en: "I have a friend who can fix computers." },
          { es: "Je cherche quelqu'un qui sache réparer mon ordinateur.", en: "I'm looking for someone who can fix my computer." },
          { es: "Elle a une collègue qui fait du japonais.", en: "She has a colleague who studies Japanese." },
          { es: "Elle cherche une collègue qui fasse du japonais avec elle.", en: "She's looking for a colleague to study Japanese with her." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Je cherche quelqu'un qui sait garder mon chat.",
            answer: "Je cherche quelqu'un qui sache garder mon chat.",
            altAnswers: ["Je cherche quelqu'un qui puisse garder mon chat."],
            explanation: "The person is only wanted, so the irregular \"savoir\" must show the subjunctive: \"sache\", not \"sait\".",
          },
        ],
      },
      {
        heading: "Listen for the endings",
        body: [
          "Listen for the endings. \"Sache\", \"puisse\", \"fasse\", \"aille\", \"veuille\" all end in a pronounced consonant sound; their indicatives end in a vowel. \"A\" and \"ait\" are a pure vowel contrast: \"a\" as in the English 'ah', \"ait\" as in \"est\". And \"soit\" (rhymes with \"moi\") cannot be confused with \"est\".",
        ],
        examples: [
          { es: "Nous avons un garage qui est ouvert le dimanche.", en: "We have a garage that's open on Sundays." },
          { es: "Nous cherchons un garage qui soit ouvert le dimanche.", en: "We're looking for a garage that's open on Sundays." },
          { es: "Il me faut une salle qui ait un projecteur.", en: "I need a room with a projector." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            question: "What did you hear?",
            audio: "Nous cherchons un garage qui soit ouvert le dimanche.",
            options: ["Nous cherchons un garage qui soit ouvert le dimanche.", "Nous cherchons un garage qui est ouvert le dimanche.", "Nous connaissons un garage qui est ouvert le dimanche.", "Nous cherchons le garage qui est ouvert le dimanche."],
            correctIndex: 0,
            explanation: "\"Soit\" (rhymes with \"moi\") is the subjunctive; \"est\" would be the indicative. The sentence describes a garage they hope to find.",
          },
        ],
      },
      {
        heading: "Long ils stems",
        body: [
          "Verbs with a long ils stem work the same way: \"qui connaît\" / \"qui connaisse\", \"qui prend\" / \"qui prenne\", \"qui vient\" / \"qui vienne\", \"qui finit\" / \"qui finisse\".",
        ],
        examples: [
          { es: "Je connais un taxi qui vient vite.", en: "I know a taxi driver who comes quickly." },
          { es: "Il me faut un taxi qui vienne tout de suite.", en: "I need a taxi that can come right away." },
          { es: "On cherche une gardienne qui prenne les colis.", en: "We're looking for a caretaker who takes in parcels." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "I'm looking for a course [that finishes] before six.",
            sentence: "Je cherche un cours ___ avant dix-huit heures.",
            answer: "qui finisse",
            explanation: "A course you want: \"finir\" → \"finisse\", from the ils stem \"finiss-\". \"Qui finit\" would describe a course you know.",
          },
        ],
      },
      {
        heading: "Nous and vous give the mood away",
        body: [
          "Even regular verbs show the subjunctive in the nous and vous forms: the endings are \"-ions\" and \"-iez\", like the imparfait. Compare \"un logiciel que vous connaissez\" (software you know) with \"un logiciel que vous connaissiez\" (software you might know).",
        ],
        examples: [
          { es: "J'utilise un logiciel que vous connaissez déjà.", en: "I use software you already know." },
          { es: "Il me faut un logiciel que vous connaissiez déjà.", en: "I need software you already know." },
          { es: "Je cherche un film que nous n'ayons pas encore vu.", en: "I'm looking for a film we haven't seen yet." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Your company already uses a piece of software and you mention it to a client. Which sentence fits?",
            options: ["Nous utilisons un logiciel que vous connaissez sûrement.", "Nous utilisons un logiciel que vous connaissiez sûrement.", "Nous cherchons un logiciel que vous connaissez sûrement.", "Nous utilisons un logiciel que vous connaissez sûrs."],
            correctIndex: 0,
            explanation: "The software is real and in use, so indicative \"connaissez\". \"Connaissiez\" would be subjunctive (or imparfait), wrong here.",
          },
        ],
      },
      {
        heading: "Where careful writers get caught",
        body: [
          "So a relative clause with nous or vous inside is where careful writers are caught out: \"Trouvons une date qui vous convienne\" (let's find a date that suits you) vs \"J'ai trouvé une date qui vous convient\" (I found a date that suits you). For \"être\" and \"avoir\" the forms are \"soyons / soyez\" and \"ayons / ayez\", with no i.",
        ],
        examples: [
          { es: "J'ai trouvé une date qui vous convient.", en: "I've found a date that suits you." },
          { es: "Trouvons une date qui vous convienne.", en: "Let's find a date that suits you." },
          { es: "On cherche un restaurant où nous puissions parler tranquillement.", en: "We're looking for a restaurant where we can talk in peace." },
          { es: "Je voudrais un créneau où vous soyez tous libres.", en: "I'd like a time slot when you're all free." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Let's choose a restaurant [that suits you].",
            sentence: "Choisissons un restaurant ___.",
            answer: "qui vous convienne",
            explanation: "The restaurant isn't chosen yet, so \"convenir\" takes the subjunctive \"convienne\"; \"convient\" would describe one already found.",
          },
          {
            type: "speak",
            prompt: "Say it in French: Let's find a hotel where we can be in peace.",
            text: "Trouvons un hôtel où nous soyons au calme.",
            explanation: "\"Soyons\": the nous subjunctive of être, with no i.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "We're looking for a pharmacy that's open at night.",
        answer: "Nous cherchons une pharmacie qui soit ouverte la nuit.",
        altAnswers: ["On cherche une pharmacie qui soit ouverte la nuit."],
        explanation: "A pharmacy you want: \"soit\", and \"ouverte\" agrees with \"la pharmacie\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "I know a bakery that's open on Mondays.",
        answer: "Je connais une boulangerie qui est ouverte le lundi.",
        altAnswers: ["Je connais une boulangerie qui est ouverte les lundis."],
        explanation: "A bakery you know exists: indicative \"est\".",
      },
      {
        type: "listen-choose",
        question: "What did you hear?",
        audio: "J'ai un voisin qui a une perceuse.",
        options: ["J'ai un voisin qui a une perceuse.", "Je cherche un voisin qui ait une perceuse.", "J'ai un voisin qui ait une perceuse.", "J'avais un voisin qui a une perceuse."],
        correctIndex: 0,
        explanation: "\"Qui a\" (an 'ah' sound) with \"j'ai\": a neighbour you have, so the indicative.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "I'm looking for a neighbour who has a drill.",
        answer: "Je cherche un voisin qui ait une perceuse.",
        altAnswers: ["Je cherche une voisine qui ait une perceuse."],
        explanation: "\"Ait\" sounds like \"est\": the subjunctive of avoir for a neighbour you haven't found.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "She's looking for a colleague who goes to work by bike.",
        answer: "Elle cherche un collègue qui aille au travail à vélo.",
        altAnswers: ["Elle cherche une collègue qui aille au travail à vélo.", "Elle cherche un collègue qui aille au bureau à vélo.", "Elle cherche une collègue qui aille au bureau à vélo."],
        explanation: "\"Aller\" in the subjunctive: \"aille\". With a known colleague: \"qui va au travail à vélo\".",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "My brother has a dog [that is] afraid of cats.",
        sentence: "Mon frère a un chien ___ peur des chats.",
        answer: "qui a",
        explanation: "\"Avoir peur\": a real dog, so the indicative \"a\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Change it so the room is only wanted: start with \"Je cherche\".",
        source: "J'ai une salle où vous êtes tous à l'aise.",
        answer: "Je cherche une salle où vous soyez tous à l'aise.",
        explanation: "Once the room is only wanted, \"vous êtes\" becomes the subjunctive \"vous soyez\".",
      },
      {
        type: "dictation",
        audio: "Je connais quelqu'un qui sait le faire.",
        explanation: "\"Je connais\" + \"qui sait\": someone you know, so the indicative.",
      },
      {
        type: "speak",
        prompt: "Say it in French: I need someone who does the shopping for me.",
        text: "Il me faut quelqu'un qui fasse les courses pour moi.",
        explanation: "\"Fasse\": the subjunctive of faire, with a pronounced s sound.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: She has a colleague who knows the boss.",
        words: ["Elle a", "une collègue", "qui", "connaît", "le patron."],
        translation: "She has a colleague who knows the boss.",
        explanation: "A colleague she has: indicative \"connaît\", not \"connaisse\".",
      },
    ],
  },
  {
    slug: "b2-circuit-il-ny-a-personne-qui",
    level: "FR-B2",
    number: 4,
    title: "Circuit: Il n'y a personne qui..., Je ne connais rien qui...",
    summary: "When the antecedent doesn't exist at all (personne, rien, aucun), the relative clause takes the subjunctive.",
    duration: "14 min",
    sections: [
      {
        heading: "Station 1: Il n'y a personne qui puisse...",
        body: [
          "If something doesn't exist, the relative clause describing it can't state a fact, so it takes the subjunctive. The most common frame is \"il n'y a personne qui\" + subjunctive: \"Il n'y a personne qui puisse m'aider\" (there's nobody who can help me).",
        ],
        examples: [
          { es: "Il n'y a personne qui puisse m'aider.", en: "There's nobody who can help me." },
          { es: "Il n'y a personne ici qui soit au courant.", en: "There's nobody here who knows about it." },
          { es: "Il n'y a personne dans l'équipe qui ait le permis poids lourd.", en: "There's nobody on the team who has an HGV licence." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "There's nobody who knows the code.",
            answer: "Il n'y a personne qui connaisse le code.",
            altAnswers: ["Il n'y a personne qui sache le code."],
            explanation: "Nobody fits the description, so the clause can't state a fact: subjunctive \"connaisse\" (or \"sache\").",
          },
        ],
      },
      {
        heading: "Personne, without pas",
        body: [
          "\"Personne\" is the negative itself: it pairs with \"ne\" and never with \"pas\". English speakers, thinking 'there isn't anybody', write \"il n'y a pas personne\", which is wrong. Say \"il n'y a personne\", \"je ne connais personne\", \"je n'ai vu personne\".",
          "The same works with \"je ne connais personne qui...\", \"je n'ai trouvé personne qui...\". In speech you will hear \"y a personne qui sache\", with \"il\" and \"ne\" dropped; write the full form.",
        ],
        examples: [
          { es: "Je ne connais personne qui sache jouer du violon.", en: "I don't know anyone who can play the violin." },
          { es: "Nous n'avons trouvé personne qui veuille reprendre le magasin.", en: "We haven't found anyone who wants to take over the shop." },
          { es: "Je ne vois personne qui fasse mieux que lui.", en: "I can't see anyone who does better than him." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence is correct?",
            options: ["Je ne connais personne qui sache jouer du violon.", "Je ne connais pas personne qui sache jouer du violon.", "Je ne connais personne qui sait jouer du violon.", "Je connais personne qui sache jouer au violon."],
            correctIndex: 0,
            explanation: "\"Ne... personne\" without \"pas\", then the subjunctive \"sache\". Instruments take \"jouer de\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Il n'y a pas personne qui veuille venir.",
            answer: "Il n'y a personne qui veuille venir.",
            explanation: "\"Personne\" is the negative itself and pairs with \"ne\" alone; adding \"pas\" copies the English not anybody.",
          },
        ],
      },
      {
        heading: "Station 2: Il n'y a rien qui...",
        body: [
          "\"Rien\" works like \"personne\": \"ne... rien\", no \"pas\", and a subjunctive in the relative clause. \"Il n'y a rien qui me fasse peur\" (nothing scares me), \"Je n'ai rien trouvé qui me plaise\" (I didn't find anything I liked).",
        ],
        examples: [
          { es: "Il n'y a rien qui me fasse peur.", en: "There's nothing that scares me." },
          { es: "Il n'y a rien dans ce contrat qui soit illégal.", en: "There's nothing in this contract that's illegal." },
          { es: "Elle ne dit rien qui puisse blesser les autres.", en: "She never says anything that could hurt others." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            question: "What does it mean?",
            audio: "Il n'y a rien qui me fasse peur.",
            options: ["Nothing scares me.", "There's something that scares me.", "Nobody scares me.", "Nothing scared me."],
            correctIndex: 0,
            explanation: "\"Il n'y a rien qui me fasse peur\": literally there's nothing that makes me afraid.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it negative with \"rien\".",
            source: "Il y a quelque chose qui peut l'aider.",
            answer: "Il n'y a rien qui puisse l'aider.",
            explanation: "\"Ne... rien\" replaces \"quelque chose\", and the thing no longer exists, so \"peut\" becomes \"puisse\".",
          },
        ],
      },
      {
        heading: "Rien and personne in the passé composé",
        body: [
          "Notice the word order in the passé composé: \"rien\" comes before the past participle (\"je n'ai rien trouvé\"), while \"personne\" comes after it (\"je n'ai trouvé personne\"). The relative clause follows immediately after \"rien\" or \"personne\" when possible, or at the end of the sentence.",
          "With \"que\": \"Il n'y a rien que je puisse faire\" (there's nothing I can do). This is one of the most useful sentences of the unit.",
        ],
        examples: [
          { es: "Je n'ai rien trouvé qui me plaise dans ce magasin.", en: "I didn't find anything I liked in that shop." },
          { es: "Il n'y a rien que je puisse faire.", en: "There's nothing I can do." },
          { es: "Nous n'avons rien vu qui vaille le prix du billet.", en: "We didn't see anything worth the price of the ticket." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which word order is right?",
            options: ["Je n'ai rien vu qui me plaise.", "Je n'ai vu rien qui me plaise.", "Je n'ai personne vu qui me plaise.", "Je n'ai pas rien vu qui me plaise."],
            correctIndex: 0,
            explanation: "\"Rien\" goes before the past participle, \"personne\" after it, and neither takes \"pas\".",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "We [didn't see anyone] we knew.",
            sentence: "Nous ___ que nous connaissions.",
            answer: "n'avons vu personne",
            explanation: "\"Personne\" comes after the past participle: \"n'avons vu personne\", unlike \"rien\", which comes before it.",
          },
        ],
      },
      {
        heading: "Station 3: aucun, aucune",
        body: [
          "\"Aucun\" / \"aucune\" ('not a single', 'no') is the third negative antecedent. It agrees with its noun in gender and is almost always singular: \"aucun hôtel\", \"aucune pharmacie\", never \"aucuns hôtels\". The verb that follows is singular too.",
          "Again, no \"pas\": \"je ne connais aucun hôtel qui soit ouvert en janvier\". As a subject, \"aucun\" still needs \"ne\": \"Aucune boulangerie n'est ouverte\", but inside our frame it is usually the object of \"connaître\", \"trouver\" or \"il y a\".",
        ],
        examples: [
          { es: "Je ne connais aucun hôtel qui soit ouvert en janvier.", en: "I don't know any hotel that's open in January." },
          { es: "Il n'y a aucune pharmacie qui soit de garde ce soir.", en: "There's no pharmacy on duty tonight." },
          { es: "Nous n'avons trouvé aucun appartement qui corresponde à notre budget.", en: "We haven't found a single flat that fits our budget." },
          { es: "Il n'y a aucun candidat qui ait l'expérience demandée.", en: "There isn't one candidate who has the required experience." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I haven't found a single bookshop that sells this book.",
            answer: "Je n'ai trouvé aucune librairie qui vende ce livre.",
            altAnswers: ["Je n'ai trouvé aucun magasin qui vende ce livre.", "Je n'ai trouvé aucune librairie qui vende ce livre-là."],
            explanation: "\"Aucune\" agrees with \"librairie\" and stays singular; \"vendre\" goes into the subjunctive, \"vende\".",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Je ne connais aucuns restaurants qui soient ouverts.",
            answer: "Je ne connais aucun restaurant qui soit ouvert.",
            explanation: "\"Aucun\" is almost always singular, and the verb and adjective follow it: \"qui soit ouvert\".",
          },
        ],
      },
      {
        heading: "Pas de: a little less emphatic",
        body: [
          "A plain \"pas de\" works too and is a little less emphatic: \"Il n'y a pas de pharmacie qui soit ouverte la nuit.\"",
          "It takes the same subjunctive after \"qui\".",
        ],
        examples: [
          { es: "Il n'y a pas de bus qui aille jusqu'au village le dimanche.", en: "There's no bus that goes as far as the village on Sundays." },
          { es: "Je ne vois aucune solution qui satisfasse tout le monde.", en: "I can't see any solution that satisfies everyone." },
          { es: "Il n'y a pas de train qui parte avant six heures.", en: "There's no train that leaves before six." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: There's no flat that has a garden.",
            words: ["Il n'y a pas", "d'appartement", "qui", "ait", "un jardin."],
            translation: "There's no flat that has a garden.",
            explanation: "\"Pas de\" becomes \"pas d'\" before a vowel; the missing flat takes the subjunctive \"ait\".",
          },
        ],
      },
      {
        heading: "Station 4: the three traps",
        body: [
          "Three mistakes account for nearly all errors in this pattern. One: adding \"pas\" (\"il n'y a pas personne\", \"je ne connais pas aucun\"). Two: putting \"aucun\" in the plural. Three: keeping the indicative because the English verb is a plain present.",
        ],
        examples: [
          { es: "Je ne connais aucun médecin qui soit libre samedi.", en: "I don't know any doctor who's free on Saturday." },
          { es: "Il n'y a personne qui veuille partir.", en: "There's nobody who wants to leave." },
          { es: "Je n'ai rien vu qui me plaise.", en: "I didn't see anything I liked." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Je ne connais pas aucun voisin qui puisse m'aider.",
            answer: "Je ne connais aucun voisin qui puisse m'aider.",
            explanation: "\"Aucun\" already carries the negation, so \"pas\" must go.",
          },
        ],
      },
      {
        heading: "Positive and negative side by side",
        body: [
          "Compare the positive and negative versions side by side: \"Il y a quelqu'un qui peut t'aider\" (a fact) → \"Il n'y a personne qui puisse t'aider\". \"Je connais un hôtel qui est ouvert\" → \"Je ne connais aucun hôtel qui soit ouvert\". \"Il y a quelque chose qui me dérange\" → \"Il n'y a rien qui me dérange\" (\"dérange\": same form in both moods).",
        ],
        examples: [
          { es: "Il y a quelqu'un qui peut t'aider.", en: "There's someone who can help you." },
          { es: "Il n'y a personne qui puisse t'aider.", en: "There's nobody who can help you." },
          { es: "Je connais un hôtel qui est ouvert toute l'année.", en: "I know a hotel that's open all year." },
          { es: "Je ne connais aucun hôtel qui soit ouvert toute l'année.", en: "I don't know any hotel that's open all year." },
          { es: "Il y a quelque chose qui me dérange.", en: "There's something that bothers me." },
          { es: "Il n'y a rien qui me dérange.", en: "There's nothing that bothers me." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "There's nobody here who has a car.",
            answer: "Il n'y a personne ici qui ait une voiture.",
            altAnswers: ["Personne ici n'a de voiture."],
            explanation: "\"Personne\" with \"ne\" only; the clause takes \"ait\", the subjunctive of avoir.",
          },
          {
            type: "speak",
            prompt: "Say it in French: There's nothing that can make him change his mind.",
            text: "Il n'y a rien qui puisse le faire changer d'avis.",
            explanation: "\"Rien\" as antecedent: subjunctive \"puisse\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Make it negative with \"personne\".",
        source: "Je connais quelqu'un qui sait nager.",
        answer: "Je ne connais personne qui sache nager.",
        explanation: "\"Quelqu'un\" becomes \"personne\" with \"ne\", and the person no longer exists, so \"sait\" becomes \"sache\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "There's no restaurant here that does vegan food.",
        answer: "Il n'y a aucun restaurant ici qui fasse de la cuisine végane.",
        altAnswers: ["Il n'y a aucun restaurant ici qui fasse de la cuisine vegan.", "Il n'y a pas de restaurant ici qui fasse de la cuisine végane.", "Ici, il n'y a aucun restaurant qui fasse de la cuisine végane."],
        explanation: "\"Aucun\" + singular noun, then the subjunctive \"fasse\".",
      },
      {
        type: "multiple-choice",
        question: "Which sentence is correct?",
        options: ["Nous n'avons trouvé aucun appartement qui corresponde à notre budget.", "Nous n'avons trouvé aucuns appartements qui correspondent à notre budget.", "Nous n'avons pas trouvé aucun appartement qui corresponde à notre budget.", "Nous n'avons trouvé aucun appartement qui correspond à notre budget."],
        correctIndex: 0,
        explanation: "\"Aucun\" stays singular, never takes \"pas\", and is followed by the subjunctive.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "We haven't met anyone who speaks Greek.",
        answer: "Nous n'avons rencontré personne qui parle grec.",
        altAnswers: ["On n'a rencontré personne qui parle grec."],
        explanation: "\"Personne\" after the participle; \"parle\" is subjunctive, though it looks like the present.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "There's nothing on TV tonight [that is] interesting.",
        sentence: "Il n'y a rien à la télé ce soir ___ intéressant.",
        answer: "qui soit",
        explanation: "\"Rien\" as antecedent: the relative takes the subjunctive \"soit\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "There isn't a single student who knows the answer.",
        answer: "Il n'y a aucun étudiant qui sache la réponse.",
        altAnswers: ["Il n'y a aucun étudiant qui connaisse la réponse.", "Il n'y a aucun élève qui sache la réponse.", "Il n'y a aucun élève qui connaisse la réponse."],
        explanation: "\"Aucun\" + singular, then the subjunctive \"sache\" (or \"connaisse\").",
      },
      {
        type: "listen-choose",
        question: "What does it mean?",
        audio: "Je ne vois aucune solution qui satisfasse tout le monde.",
        options: ["I can't see any solution that satisfies everyone.", "I can see a solution that satisfies everyone.", "Nobody sees a solution that satisfies me.", "I see that no solution satisfied anyone."],
        correctIndex: 0,
        explanation: "\"Aucune solution qui satisfasse\": not one solution, so the subjunctive of satisfaire.",
      },
      {
        type: "dictation",
        audio: "Je ne connais personne qui veuille déménager.",
        explanation: "\"Veuille\": the subjunctive of vouloir after the negative antecedent \"personne\".",
      },
      {
        type: "speak",
        prompt: "Say it in French: I can't see anything that's broken.",
        text: "Je ne vois rien qui soit cassé.",
        explanation: "\"Rien\" + \"qui soit\": nothing fits, so the subjunctive.",
      },
    ],
  },
  {
    slug: "b2-subjunctive-relatives-2",
    level: "FR-B2",
    number: 5,
    title: "The Subjunctive in Relative Clauses, Part 2 of 2",
    summary: "Questions about existence, le seul and le premier, and superlatives: when they take the subjunctive and when a plain fact keeps the indicative.",
    duration: "15 min",
    sections: [
      {
        heading: "Asking whether something exists",
        body: [
          "When you ask whether such a person or thing exists, you don't know the answer, so the relative clause can take the subjunctive: \"Connais-tu quelqu'un qui puisse garder mon chat ?\", \"Est-ce qu'il y a un magasin qui soit ouvert à cette heure-ci ?\"",
        ],
        examples: [
          { es: "Connais-tu quelqu'un qui puisse garder mon chat ?", en: "Do you know anyone who could look after my cat?" },
          { es: "Est-ce qu'il y a un magasin qui soit ouvert à cette heure-ci ?", en: "Is there a shop that's open at this time?" },
          { es: "Connaissez-vous un avocat qui soit spécialisé en droit du travail ?", en: "Do you know a lawyer who specialises in employment law?" },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            question: "What does it mean?",
            audio: "Y a-t-il quelqu'un qui sache parler portugais ?",
            options: ["Is there anyone who can speak Portuguese?", "There's someone who speaks Portuguese.", "Does he know anyone who speaks Portuguese?", "Is there anyone who wants to speak Portuguese?"],
            correctIndex: 0,
            explanation: "\"Y a-t-il\" is the inverted form of \"il y a\"; \"sache\" asks about an ability that may not exist in the room.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Do you know a plumber who could come today? (polite)",
            answer: "Connaissez-vous un plombier qui puisse venir aujourd'hui ?",
            altAnswers: ["Est-ce que vous connaissez un plombier qui puisse venir aujourd'hui ?", "Vous connaissez un plombier qui puisse venir aujourd'hui ?", "Connaissez-vous un plombier qui pourrait venir aujourd'hui ?"],
            explanation: "You don't know whether such a plumber exists, so the subjunctive \"puisse\" marks the doubt.",
          },
        ],
      },
      {
        heading: "The indicative in relaxed questions",
        body: [
          "In relaxed speech many French people use the indicative in these questions (\"Tu connais quelqu'un qui peut garder mon chat ?\"), and it is not a mistake. The subjunctive stresses your doubt; it is the better choice in writing, in formal requests and whenever you really suspect the answer is no.",
          "All three question forms work: intonation (\"Tu connais quelqu'un qui...\"), \"est-ce que\" (\"Est-ce que tu connais...\") and inversion (\"Connais-tu...\", \"Connaissez-vous...\").",
        ],
        examples: [
          { es: "Y a-t-il quelqu'un qui sache parler portugais ?", en: "Is there anyone who can speak Portuguese?" },
          { es: "Tu as un ami qui ait une camionnette ?", en: "Have you got a friend who has a van?" },
          { es: "Tu connais quelqu'un qui peut me prêter une échelle ?", en: "Do you know anyone who can lend me a ladder?" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Rewrite it for a formal email: use inversion and the subjunctive.",
            source: "Vous connaissez quelqu'un qui peut traduire ce document ?",
            answer: "Connaissez-vous quelqu'un qui puisse traduire ce document ?",
            altAnswers: ["Connaîtriez-vous quelqu'un qui puisse traduire ce document ?"],
            explanation: "Inversion and the subjunctive \"puisse\" suit a formal email; the indicative \"peut\" is fine only in relaxed speech.",
          },
        ],
      },
      {
        heading: "Le seul, l'unique: a judgement",
        body: [
          "After \"le seul\", \"l'unique\", \"le premier\" and \"le dernier\" the relative clause usually takes the subjunctive: \"C'est le seul restaurant qui soit ouvert le lundi.\" The subjunctive here adds a note of judgement: the speaker presents the uniqueness as their assessment, something remarkable.",
        ],
        examples: [
          { es: "C'est le seul restaurant du quartier qui soit ouvert le lundi.", en: "It's the only restaurant in the area that's open on Mondays." },
          { es: "Tu es la seule personne qui puisse le convaincre.", en: "You're the only person who can convince him." },
          { es: "C'est l'unique hôtel qui accepte les chiens.", en: "It's the only hotel that accepts dogs." },
          { es: "Elle est la première femme qui soit à la tête de cette usine.", en: "She's the first woman to head this factory." },
          { es: "C'est le dernier train qui parte ce soir pour Nantes.", en: "It's the last train leaving for Nantes tonight." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "It's the only bakery in town [that] still [makes] its own bread.",
            sentence: "C'est la seule boulangerie de la ville ___ encore son propre pain.",
            answer: "qui fasse",
            altAnswers: ["qui fait"],
            explanation: "After \"la seule\", presented as your assessment, the relative takes the subjunctive: \"qui fasse\".",
          },
        ],
      },
      {
        heading: "Reporting a fact: the indicative",
        body: [
          "When you simply state a fact, especially a past event, the indicative is used: \"C'est le seul qui est venu\" (he's the only one who came, that's just what happened), \"Il a été le premier qui a répondu\". The choice is real, not a rule to apply blindly: subjunctive = evaluation, 'as far as I can tell'; indicative = objective fact.",
          "For an Upper-intermediate learner, a safe guide: present tense + an opinion or a recommendation → subjunctive. A past event that you are reporting → indicative.",
        ],
        examples: [
          { es: "Paul est le seul qui est venu à la réunion.", en: "Paul's the only one who came to the meeting." },
          { es: "C'est le seul élève qui a réussi l'examen hier.", en: "He's the only pupil who passed the exam yesterday." },
          { es: "Elle a été la dernière qui est partie.", en: "She was the last one to leave." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You're reporting what happened: only Paul came to the meeting. Which sentence is the most natural?",
            options: ["Paul est le seul qui est venu à la réunion.", "Paul est le seul qui vienne à la réunion.", "Paul est le seul qui soit venir à la réunion.", "Paul est le seul qu'est venu à la réunion."],
            correctIndex: 0,
            explanation: "A plain past fact keeps the indicative: \"qui est venu\". The present subjunctive \"vienne\" doesn't fit a finished event.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "She was the first one who arrived.",
            answer: "Elle a été la première qui est arrivée.",
            altAnswers: ["Elle a été la première à arriver.", "C'est la première qui est arrivée.", "Elle était la première qui est arrivée."],
            explanation: "A past event you are reporting: the indicative \"est arrivée\", with agreement for être.",
          },
        ],
      },
      {
        heading: "Superlatives: as far as I know",
        body: [
          "A superlative is a kind of uniqueness, so the same logic applies: \"C'est le meilleur restaurant que je connaisse\", \"C'est la ville la plus agréable que je connaisse.\" The subjunctive implies 'as far as I know': your experience is limited, the claim is subjective.",
        ],
        examples: [
          { es: "C'est le meilleur restaurant que je connaisse.", en: "It's the best restaurant I know." },
          { es: "Lyon est la ville la plus agréable que je connaisse.", en: "Lyon is the nicest city I know." },
          { es: "C'est la personne la plus généreuse qui soit.", en: "She's the most generous person there is." },
          { es: "C'est le moins cher que vous puissiez trouver.", en: "It's the cheapest you can find." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "It's the most beautiful beach I know.",
            answer: "C'est la plus belle plage que je connaisse.",
            altAnswers: ["C'est la plage la plus belle que je connaisse."],
            explanation: "A superlative is a subjective claim, so \"connaître\" goes into the subjunctive: \"que je connaisse\".",
          },
        ],
      },
      {
        heading: "Que j'aie jamais vu",
        body: [
          "One very common chunk uses a tense you will study in Unit 5: \"C'est le plus beau film que j'aie jamais vu\" (the best film I've ever seen). For now learn \"que j'aie jamais vu\", \"que j'aie jamais lu\", \"que j'aie jamais mangé\" as fixed phrases: \"aie\" is the subjunctive of avoir.",
          "Note \"jamais\" here has no \"ne\": in this phrase it means 'ever', not 'never'.",
        ],
        examples: [
          { es: "C'est le plus beau film que j'aie jamais vu.", en: "It's the most beautiful film I've ever seen." },
          { es: "C'est le livre le plus drôle que j'aie jamais lu.", en: "It's the funniest book I've ever read." },
          { es: "C'est le meilleur gâteau que j'aie jamais mangé.", en: "It's the best cake I've ever eaten." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "C'est le meilleur livre que je n'aie jamais lu.",
            answer: "C'est le meilleur livre que j'aie jamais lu.",
            explanation: "In this phrase \"jamais\" means ever and takes no \"ne\"; with \"ne\" it would mean never.",
          },
          {
            type: "speak",
            prompt: "Say it in French: It's the worst series I've ever watched.",
            text: "C'est la pire série que j'aie jamais regardée.",
            explanation: "\"Que j'aie jamais\" + participle; \"regardée\" agrees with \"que\" = la série.",
          },
        ],
      },
      {
        heading: "Que + subjunctive for requirements",
        body: [
          "The \"que\" relative also takes the subjunctive when the antecedent is a requirement: \"Choisissons un endroit que tout le monde connaisse\" (let's pick a place everyone knows), \"Il faut un titre que les lecteurs retiennent.\"",
        ],
        examples: [
          { es: "Choisissons un endroit que tout le monde connaisse.", en: "Let's pick a place everyone knows." },
          { es: "Il faut un titre que les lecteurs retiennent.", en: "We need a title readers will remember." },
          { es: "Donne-moi un exemple que je puisse comprendre.", en: "Give me an example I can understand." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "We need a password [that I can] remember.",
            sentence: "Il nous faut un mot de passe ___ retenir.",
            answer: "que je puisse",
            explanation: "The password is a requirement, so the new subject \"je\" gets the subjunctive \"puisse\".",
          },
        ],
      },
      {
        heading: "Still choosing, or already a fact?",
        body: [
          "This is the same rule as in Part 1, seen from the object side. The test is unchanged: does the place, the title, the date already exist as a fact for you? If you are still choosing or inventing it, use the subjunctive.",
        ],
        examples: [
          { es: "On a rendez-vous dans un café que tout le monde connaît.", en: "We're meeting at a cafe everyone knows." },
          { es: "Je voudrais offrir un vin que mon père ne connaisse pas encore.", en: "I'd like to give a wine my father doesn't know yet." },
          { es: "On a choisi un titre que tout le monde aime.", en: "We've chosen a title everyone likes." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence is about a café that already exists for you?",
            options: ["On se voit dans un café que tout le monde connaît.", "On cherche un café que tout le monde connaisse.", "Choisissons un café que tout le monde connaisse.", "Il nous faut un café que tout le monde connaisse."],
            correctIndex: 0,
            explanation: "A café you are already meeting in is a fact: indicative \"connaît\". The others are still being chosen.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "It's the most comfortable hotel I know.",
        answer: "C'est l'hôtel le plus confortable que je connaisse.",
        altAnswers: ["C'est le plus confortable hôtel que je connaisse."],
        explanation: "Superlative + \"que je connaisse\": as far as I know.",
      },
      {
        type: "multiple-choice",
        question: "Which sentence presents a uniqueness as the speaker's judgement?",
        options: ["C'est le seul hôtel qui soit vraiment calme.", "C'est le seul hôtel qui est vraiment calme.", "C'est un hôtel qui est vraiment calme.", "C'est le seul hôtel qui sera vraiment calme."],
        correctIndex: 0,
        explanation: "\"Le seul... qui soit\": the subjunctive frames it as an evaluation. The indicative would present it as a plain, checkable fact.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "Is there a bus [that goes] to the airport?",
        sentence: "Est-ce qu'il y a un bus ___ à l'aéroport ?",
        answer: "qui aille",
        altAnswers: ["qui va"],
        explanation: "In a question about existence, the subjunctive \"aille\" marks your doubt; the indicative \"va\" is accepted in speech.",
      },
      {
        type: "listen-choose",
        question: "What does it mean?",
        audio: "C'est le moins cher que vous puissiez trouver.",
        options: ["It's the cheapest you can find.", "It's the most expensive you can find.", "It's cheaper than what you found.", "You can find it cheaper."],
        correctIndex: 0,
        explanation: "\"Le moins cher\" is the least expensive, the cheapest; \"que vous puissiez trouver\" takes the subjunctive after the superlative.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: It's the only shop that sells this cheese.",
        words: ["C'est", "le seul magasin", "qui", "vende", "ce fromage."],
        translation: "It's the only shop that sells this cheese.",
        explanation: "\"Le seul\" + subjunctive \"vende\" presents it as your judgement.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Change it to a requirement: start with \"Il faut\".",
        source: "On a un logo que tout le monde reconnaît.",
        answer: "Il faut un logo que tout le monde reconnaisse.",
        altAnswers: ["Il nous faut un logo que tout le monde reconnaisse."],
        explanation: "A logo still to be created is a requirement, so \"reconnaît\" becomes \"reconnaisse\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "À mon avis, c'est le seul musée qui est vraiment gratuit.",
        answer: "À mon avis, c'est le seul musée qui soit vraiment gratuit.",
        explanation: "\"À mon avis\" makes it a judgement, so after \"le seul\" the subjunctive \"soit\" is expected.",
      },
      {
        type: "dictation",
        audio: "C'est la seule solution qui soit raisonnable.",
        explanation: "\"La seule\" + \"qui soit\": the speaker's assessment.",
      },
      {
        type: "speak",
        prompt: "Say it in French: You're the only person who knows the truth.",
        text: "Vous êtes la seule personne qui sache la vérité.",
        explanation: "\"La seule personne qui sache\": subjunctive of savoir after \"la seule\".",
      },
    ],
  },
  {
    slug: "b2-qa-connais-tu-quelquun-qui",
    level: "FR-B2",
    number: 6,
    title: "Questions and Answers: Connais-tu quelqu'un qui... ?",
    summary: "Ask whether someone exists with the subjunctive, then answer yes with the indicative or no with personne and the subjunctive.",
    duration: "13 min",
    sections: [
      {
        heading: "The question: doubt opens the subjunctive",
        body: [
          "This lesson works on a tiny conversation that you will have dozens of times: you need someone or something and ask around. The question takes the subjunctive because you don't know the answer: \"Connais-tu quelqu'un qui sache réparer les vélos ?\", \"Est-ce qu'il y a une boulangerie qui soit ouverte le dimanche ?\"",
        ],
        examples: [
          { es: "Tu connais quelqu'un qui sache réparer les vélos ?", en: "Do you know anyone who can fix bikes?" },
          { es: "Est-ce qu'il y a une boulangerie qui soit ouverte le dimanche ?", en: "Is there a bakery that's open on Sundays?" },
          { es: "Il y a quelqu'un ici qui ait un chargeur ?", en: "Is there anyone here who has a charger?" },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            question: "What does it mean?",
            audio: "Il y a quelqu'un ici qui ait un chargeur ?",
            options: ["Is there anyone here who has a charger?", "Someone here has a charger.", "Is there a charger here?", "Has anyone here seen my charger?"],
            correctIndex: 0,
            explanation: "Rising intonation makes it a question; \"qui ait\" asks about a person you aren't sure exists.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Is there a hotel that has a pool? (to a friend)",
            answer: "Il y a un hôtel qui ait une piscine ?",
            altAnswers: ["Est-ce qu'il y a un hôtel qui ait une piscine ?", "Y a-t-il un hôtel qui ait une piscine ?"],
            explanation: "You don't know the answer, so the relative takes the subjunctive \"ait\".",
          },
        ],
      },
      {
        heading: "Polite forms of the question",
        body: [
          "With a friend, \"Tu connais quelqu'un qui...\" is the everyday form; with a stranger or a colleague, \"Vous connaissez...\" or \"Connaissez-vous...\". \"Sauriez-vous si...\" and \"Auriez-vous...\" make it even more polite.",
        ],
        examples: [
          { es: "Connaissez-vous un dentiste qui prenne de nouveaux patients ?", en: "Do you know a dentist who's taking new patients?" },
          { es: "Vous avez un collègue qui puisse me renseigner ?", en: "Do you have a colleague who could give me some information?" },
          { es: "Sauriez-vous s'il y a une pharmacie qui soit de garde ?", en: "Would you know if there's a pharmacy on duty?" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it polite, for a stranger.",
            source: "Tu connais un garage qui puisse réparer ma voiture ?",
            answer: "Connaissez-vous un garage qui puisse réparer ma voiture ?",
            altAnswers: ["Vous connaissez un garage qui puisse réparer ma voiture ?", "Est-ce que vous connaissez un garage qui puisse réparer ma voiture ?"],
            explanation: "A stranger gets \"vous\"; inversion makes it more polite. The subjunctive \"puisse\" stays, since the doubt hasn't changed.",
          },
        ],
      },
      {
        heading: "Answering yes: back to the indicative",
        body: [
          "If the answer is yes, the person now exists for you, so the mood switches back to the indicative: \"Oui, je connais quelqu'un qui sait réparer les vélos.\" Repeating the subjunctive in a yes-answer (\"je connais quelqu'un qui sache\") is a frequent overcorrection.",
        ],
        examples: [
          { es: "Oui, je connais quelqu'un qui sait réparer les vélos.", en: "Yes, I know someone who can fix bikes." },
          { es: "Oui, il y a une boulangerie qui est ouverte le dimanche matin.", en: "Yes, there's a bakery that's open on Sunday mornings." },
          { es: "Oui, je connais une prof qui donne des cours le soir.", en: "Yes, I know a teacher who gives evening classes." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "A friend asks: « Tu connais quelqu'un qui sache coudre ? » Your sister can sew. What do you answer?",
            options: ["Oui, ma sœur sait coudre.", "Oui, ma sœur sache coudre.", "Non, je ne connais personne qui sait coudre.", "Oui, je connais quelqu'un qui sache coudre."],
            correctIndex: 0,
            explanation: "Your sister exists and can sew: the indicative \"sait\". The subjunctive belonged to the question only.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Oui, je connais un électricien qui puisse venir demain.",
            answer: "Oui, je connais un électricien qui peut venir demain.",
            explanation: "Once the answer is yes, the electrician exists for you: indicative \"peut\". Keeping the subjunctive is an overcorrection.",
          },
        ],
      },
      {
        heading: "Adding a detail, or using en",
        body: [
          "Real answers usually add a detail, and the detail is a fact, in the indicative: \"Oui, mon voisin Hugo, il a un atelier qui est juste en bas de chez moi.\" You can also shorten with a pronoun: \"Oui, j'en connais un\" (yes, I know one).",
        ],
        examples: [
          { es: "Oui, j'en connais un qui prend encore des patients.", en: "Yes, I know one who's still taking patients." },
          { es: "Oui, ma collègue Sarah peut vous renseigner.", en: "Yes, my colleague Sarah can give you information." },
          { es: "Oui, j'ai un ami qui a une camionnette, je te donne son numéro.", en: "Yes, I've got a friend who has a van; I'll give you his number." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Yes, I know one who lives near you. (to a friend)",
            answer: "Oui, j'en connais un qui habite près de chez toi.",
            altAnswers: ["Oui, j'en connais une qui habite près de chez toi.", "Oui, j'en connais un qui habite à côté de chez toi."],
            explanation: "\"En\" replaces the noun and \"un\" stays at the end; the detail is a fact, so the indicative \"habite\".",
          },
        ],
      },
      {
        heading: "Answering no: the subjunctive stays",
        body: [
          "If the answer is no, the antecedent is negated, so the subjunctive stays: \"Non, je ne connais personne qui sache le faire.\" \"Non, il n'y a aucune boulangerie qui soit ouverte le dimanche ici.\"",
        ],
        examples: [
          { es: "Non, je ne connais personne qui sache le faire.", en: "No, I don't know anyone who can do it." },
          { es: "Non, il n'y a aucune boulangerie qui soit ouverte le dimanche ici.", en: "No, there's no bakery open on Sundays around here." },
          { es: "Non, désolé, il n'y a personne ici qui ait un chargeur.", en: "No, sorry, nobody here has a charger." },
          { es: "Je ne connais aucun dentiste qui prenne de nouveaux patients en ce moment.", en: "I don't know any dentist taking new patients at the moment." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Answer no, using \"personne\".",
            source: "Tu connais quelqu'un qui sait jouer du piano ?",
            answer: "Non, je ne connais personne qui sache jouer du piano.",
            explanation: "A negated antecedent keeps the subjunctive: \"personne qui sache\", not \"sait\".",
          },
          {
            type: "speak",
            prompt: "Say it in French: No, there's no hotel that's free tonight.",
            text: "Non, il n'y a aucun hôtel qui soit libre ce soir.",
            explanation: "\"Aucun\" + \"qui soit\": nothing fits, so the subjunctive.",
          },
        ],
      },
      {
        heading: "A softer no: both moods together",
        body: [
          "A softer no often uses \"pas vraiment\" or a restriction, and then the indicative comes back for the fact you do know: \"Pas vraiment... mais j'ai une cousine qui fait de la couture.\" Good conversation mixes both moods in a few seconds.",
        ],
        examples: [
          { es: "Pas vraiment, mais j'ai une cousine qui fait de la couture.", en: "Not really, but I have a cousin who does sewing." },
          { es: "Pas vraiment, mais mon frère connaît quelqu'un qui pourrait t'aider.", en: "Not really, but my brother knows someone who could help you." },
          { es: "Pas ici, mais il y a un café en face qui a le wifi.", en: "Not here, but there's a coffee shop opposite that has wifi." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Not really, but I have a neighbour [who knows] a lot about cars.",
            sentence: "Pas vraiment, mais j'ai un voisin ___ beaucoup de choses sur les voitures.",
            answer: "qui sait",
            explanation: "The neighbour exists, so the indicative \"sait\"; \"sache\" would only fit a neighbour you are looking for.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Is there a park nearby where the kids can play?",
        answer: "Est-ce qu'il y a un parc près d'ici où les enfants puissent jouer ?",
        altAnswers: ["Il y a un parc près d'ici où les enfants puissent jouer ?", "Y a-t-il un parc près d'ici où les enfants puissent jouer ?", "Est-ce qu'il y a un parc près d'ici où les enfants peuvent jouer ?", "Il y a un parc près d'ici où les enfants peuvent jouer ?"],
        explanation: "A question about existence: the subjunctive \"puissent\" marks your doubt; \"où\" for a place.",
      },
      {
        type: "multiple-choice",
        question: "At a hotel reception you ask whether any staff member speaks English. What do you say?",
        options: ["Y a-t-il quelqu'un qui parle anglais ?", "Y a-t-il personne qui parle anglais ?", "Il n'y a quelqu'un qui parle anglais ?", "Y a-t-il quelqu'un qu'il parle anglais ?"],
        correctIndex: 0,
        explanation: "\"Y a-t-il quelqu'un qui...\": the polite inverted question. \"Parle\" looks the same in both moods.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "Do you know a shop [that sells] stamps? (polite)",
        sentence: "Vous connaissez un magasin ___ des timbres ?",
        answer: "qui vende",
        altAnswers: ["qui vend"],
        explanation: "In the question the shop may not exist, so the subjunctive \"vende\" is the careful choice; \"vend\" is common in speech.",
      },
      {
        type: "listen-choose",
        question: "What did you hear?",
        audio: "Oui, j'ai un ami qui a une camionnette.",
        options: ["Oui, j'ai un ami qui a une camionnette.", "Oui, j'ai un ami qui ait une camionnette.", "Non, je n'ai aucun ami qui ait une camionnette.", "Oui, j'avais un ami qui avait une camionnette."],
        correctIndex: 0,
        explanation: "\"Qui a\" (an 'ah' sound): a yes-answer about a real friend, in the indicative.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Non, je ne connais personne qui fait du ski.",
        answer: "Non, je ne connais personne qui fasse du ski.",
        explanation: "After a negated antecedent the subjunctive stays: \"fasse\", not the indicative \"fait\".",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Do you know anyone who could lend me a tent?",
        words: ["Tu connais", "quelqu'un", "qui", "puisse", "me prêter", "une tente ?"],
        translation: "Do you know anyone who could lend me a tent?",
        explanation: "A question about existence: subjunctive \"puisse\"; \"me\" before the infinitive.",
      },
      {
        type: "dictation",
        audio: "Est-ce qu'il y a quelqu'un qui puisse m'aider ?",
        explanation: "\"Puisse\" with a double s: the subjunctive of pouvoir in a question about existence.",
      },
      {
        type: "speak",
        prompt: "Say it in French: Would you have a room that looks out on the sea?",
        text: "Auriez-vous une chambre qui donne sur la mer ?",
        explanation: "\"Auriez-vous\" is extra polite; \"donne\" is subjunctive here but looks like the present.",
      },
    ],
  },
  {
    slug: "b2-choose-explain-nimporte-qui",
    level: "FR-B2",
    number: 7,
    title: "Choose and Explain: N'importe qui, Qui que ce soit, Tout ce que",
    summary: "Say 'anyone', 'anything' and 'whatever' the French way: n'importe qui / quoi, qui que ce soit, quoi que ce soit, and tout ce que + future.",
    duration: "14 min",
    sections: [
      {
        heading: "N'importe + a question word",
        body: [
          "\"N'importe\" + a question word means 'any... at all, it doesn't matter which': \"n'importe qui\" (anyone at all), \"n'importe quoi\" (anything), \"n'importe où\" (anywhere), \"n'importe quand\" (any time), \"n'importe comment\" (any old how), \"n'importe quel\" + noun (any... you like). The verb after it is a normal indicative: \"N'importe qui peut le faire.\"",
        ],
        examples: [
          { es: "N'importe qui peut faire ce travail.", en: "Anyone can do this job." },
          { es: "Tu peux m'appeler n'importe quand.", en: "You can call me any time." },
          { es: "Pose ton sac n'importe où.", en: "Put your bag down anywhere." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Anyone can learn to swim.",
            answer: "N'importe qui peut apprendre à nager.",
            altAnswers: ["Tout le monde peut apprendre à nager."],
            explanation: "Affirmative any = no matter who: \"n'importe qui\", followed by a normal indicative \"peut\".",
          },
        ],
      },
      {
        heading: "N'importe quel, and two judgements",
        body: [
          "\"N'importe quel\" agrees with the noun: \"n'importe quel livre\", \"n'importe quelle couleur\", \"n'importe quels jours\". Without a noun, use \"n'importe lequel\" / \"laquelle\" ('any one of them').",
          "Two of these carry a judgement: \"Il dit n'importe quoi\" (he's talking nonsense) and \"C'est fait n'importe comment\" (it's done sloppily). \"N'importe quoi !\" on its own is a dismissive 'rubbish!'.",
        ],
        examples: [
          { es: "Prends n'importe quelle chaise, elles sont toutes libres.", en: "Take any chair, they're all free." },
          { es: "Il raconte n'importe quoi depuis ce matin.", en: "He's been talking nonsense since this morning." },
          { es: "Ce meuble a été monté n'importe comment.", en: "This piece of furniture was put together any old how." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "You can choose [any] colour.",
            sentence: "Tu peux choisir ___ couleur.",
            answer: "n'importe quelle",
            explanation: "\"N'importe quel\" agrees with its noun: \"couleur\" is feminine, so \"quelle\".",
          },
        ],
      },
      {
        heading: "Qui que ce soit, quoi que ce soit",
        body: [
          "\"Qui que ce soit\" and \"quoi que ce soit\" are frozen expressions containing the subjunctive \"soit\". You don't conjugate them; you drop them in where English says 'anyone (at all)' or 'anything (at all)' in a negative, a question, or after \"sans\" or \"si\".",
        ],
        examples: [
          { es: "Si tu as besoin de quoi que ce soit, appelle-moi.", en: "If you need anything at all, call me." },
          { es: "Avant de signer quoi que ce soit, lisez bien le contrat.", en: "Before you sign anything at all, read the contract carefully." },
          { es: "Si quoi que ce soit ne va pas, dites-le-moi.", en: "If anything at all is wrong, tell me." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            question: "What does it mean?",
            audio: "Il est parti sans rien dire à qui que ce soit.",
            options: ["He left without saying anything to anyone.", "He left without telling anyone who it was.", "He left and said something to everyone.", "Whoever it was left without a word."],
            correctIndex: 0,
            explanation: "\"Sans rien dire à qui que ce soit\": without saying anything to anyone at all.",
          },
        ],
      },
      {
        heading: "Stronger than personne",
        body: [
          "\"Je n'en ai pas parlé à qui que ce soit\" (I haven't spoken about it to anyone at all) is stronger than \"je n'en ai parlé à personne\". \"Si tu as besoin de quoi que ce soit, appelle-moi\" (if you need anything at all, call me) is a very common, warm offer. \"Il est parti sans rien dire à qui que ce soit\" (without saying anything to anyone).",
        ],
        examples: [
          { es: "Je n'en ai pas parlé à qui que ce soit.", en: "I haven't mentioned it to anyone at all." },
          { es: "Il est parti sans rien dire à qui que ce soit.", en: "He left without saying anything to anyone." },
          { es: "Si vous voyez qui que ce soit, prévenez-moi.", en: "If you see anyone at all, let me know." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Make it stronger with \"qui que ce soit\".",
            source: "Je n'ai vu personne.",
            answer: "Je n'ai pas vu qui que ce soit.",
            altAnswers: ["Je n'ai vu qui que ce soit."],
            explanation: "\"Qui que ce soit\" isn't a negative word, so \"ne... pas\" comes back; \"personne\" disappears.",
          },
        ],
      },
      {
        heading: "Keep ne... pas; whoever it is",
        body: [
          "Unlike \"personne\" and \"rien\", these phrases are not negative words themselves, so everyday French keeps the full \"ne... pas\": \"je n'en ai pas parlé à qui que ce soit\", \"ne touchez pas à quoi que ce soit\". You will also meet \"ne\" alone in more literary writing (\"je n'en ai parlé à qui que ce soit\"). In an affirmative sentence they mean 'whoever it is' / 'whatever it is': \"Qui que ce soit, je ne suis pas là\" (whoever it is, I'm not in).",
        ],
        examples: [
          { es: "Qui que ce soit, dis-lui que je suis en réunion.", en: "Whoever it is, tell them I'm in a meeting." },
          { es: "Ne touchez pas à quoi que ce soit avant l'arrivée de la police.", en: "Don't touch anything at all before the police arrive." },
          { es: "Qui que ce soit, je ne veux pas être dérangé.", en: "Whoever it is, I don't want to be disturbed." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "Which sentence means 'Whoever it is, tell them I'm in a meeting'?",
            options: ["Qui que ce soit, dis-lui que je suis en réunion.", "N'importe qui, dis-lui que je suis en réunion.", "Quoi que ce soit, dis-lui que je suis en réunion.", "Qui que c'est, dis-lui que je suis en réunion."],
            correctIndex: 0,
            explanation: "'Whoever it is' is the frozen subjunctive \"qui que ce soit\"; \"quoi que ce soit\" is for things, and \"c'est\" is impossible in this phrase.",
          },
        ],
      },
      {
        heading: "The anyone trap",
        body: [
          "English 'anyone' has three French translations depending on the sentence. In an affirmative it means 'whoever you like' → \"n'importe qui\": \"N'importe qui peut s'inscrire.\" In a negative → \"personne\" with \"ne\": \"Je ne connais personne ici.\" In a question → usually \"quelqu'un\": \"Tu connais quelqu'un ici ?\"",
        ],
        examples: [
          { es: "N'importe qui peut s'inscrire, c'est gratuit.", en: "Anyone can sign up, it's free." },
          { es: "Je ne connais personne dans cette ville.", en: "I don't know anyone in this town." },
          { es: "Tu connais quelqu'un qui parle grec ?", en: "Do you know anyone who speaks Greek?" },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I didn't see anyone at the party.",
            answer: "Je n'ai vu personne à la fête.",
            altAnswers: ["Je n'ai vu personne à la soirée."],
            explanation: "In a negative, anyone = \"personne\" with \"ne\", after the participle; \"n'importe qui\" would mean any random person.",
          },
        ],
      },
      {
        heading: "The same split for anything",
        body: [
          "The same split exists for 'anything': \"n'importe quoi\" (affirmative), \"rien\" (negative: \"je n'ai rien mangé\"), \"quelque chose\" (question: \"tu veux quelque chose ?\").",
          "Saying \"je ne connais n'importe qui\" is a typical mistake, and \"je connais n'importe qui\" means something odd ('I know any random person'). When in doubt, ask whether the English 'any' means 'no matter which' (n'importe) or simply stands in for 'no / some'.",
        ],
        examples: [
          { es: "Je n'ai rien acheté au marché.", en: "I didn't buy anything at the market." },
          { es: "Tu veux quelque chose à boire ?", en: "Do you want anything to drink?" },
          { es: "Ne mange pas n'importe quoi avant le match.", en: "Don't eat just anything before the match." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Je ne connais n'importe qui dans ce club.",
            answer: "Je ne connais personne dans ce club.",
            explanation: "In a negative, anyone is \"personne\"; \"n'importe qui\" means no matter who and doesn't combine with \"ne\".",
          },
        ],
      },
      {
        heading: "Tout ce que + future",
        body: [
          "\"Tout ce qui\" / \"tout ce que\" (everything that, whatever) refers to a real set of things, so it takes the indicative. When the action is in the future, French uses the future tense where English uses the present: \"Tu pourras prendre tout ce que tu voudras\" (you can take whatever you want).",
        ],
        examples: [
          { es: "Tu pourras prendre tout ce que tu voudras.", en: "You'll be able to take whatever you want." },
          { es: "Je ferai tout ce qui sera nécessaire.", en: "I'll do whatever is necessary." },
          { es: "On t'expliquera tout ce que tu devras savoir.", en: "We'll explain everything you'll need to know." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "She'll eat whatever you cook.",
            answer: "Elle mangera tout ce que tu prépareras.",
            altAnswers: ["Elle mangera tout ce que tu cuisineras.", "Elle mangera tout ce que tu feras."],
            explanation: "A future action: the future in both clauses, \"prépareras\", where English uses the present.",
          },
        ],
      },
      {
        heading: "Not the subjunctive",
        body: [
          "This mirrors \"quand\" + future, which you met at the Intermediate level: French is logical about time, and a future wish is put in the future. Learners who have just learned the relative subjunctive often write \"tout ce que tu veuilles\"; that is wrong.",
          "In the present, the present indicative is fine: \"Fais tout ce que tu veux\" (do whatever you like), \"Je mange tout ce qu'on me donne\".",
        ],
        examples: [
          { es: "Fais tout ce que tu veux, c'est ton anniversaire.", en: "Do whatever you like, it's your birthday." },
          { es: "Commandez tout ce qui vous fait envie.", en: "Order whatever you fancy." },
          { es: "Je mange tout ce qu'on me donne.", en: "I eat whatever I'm given." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Tu pourras emporter tout ce que tu veuilles.",
            answer: "Tu pourras emporter tout ce que tu voudras.",
            explanation: "\"Tout ce que\" refers to a real set of things, so no subjunctive; a future wish takes the future \"voudras\".",
          },
          {
            type: "speak",
            prompt: "Say it in French: Do whatever makes you happy.",
            text: "Fais tout ce qui te fait plaisir.",
            explanation: "\"Tout ce qui\" + indicative in the present.",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Your guest asks what to bring to dinner. You want to say 'Bring whatever you like'. What do you say?",
        options: ["Apporte ce que tu veux.", "Apporte ce que tu veuilles.", "Apporte n'importe qui.", "Apporte quoi que ce soit."],
        correctIndex: 0,
        explanation: "\"Ce que tu veux\": a relative referring to whatever they choose, in the indicative. The subjunctive \"veuilles\" is wrong here.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "Don't buy [anything at all] without asking me.",
        sentence: "N'achète pas ___ sans me demander.",
        answer: "quoi que ce soit",
        explanation: "\"Quoi que ce soit\" = anything at all, with the full \"ne... pas\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Is there anyone at home?",
        answer: "Il y a quelqu'un à la maison ?",
        altAnswers: ["Est-ce qu'il y a quelqu'un à la maison ?", "Y a-t-il quelqu'un à la maison ?"],
        explanation: "In a question, anyone = \"quelqu'un\", not \"personne\" or \"n'importe qui\".",
      },
      {
        type: "listen-choose",
        question: "What does it mean?",
        audio: "Je n'ai rien acheté au marché.",
        options: ["I didn't buy anything at the market.", "I bought anything at the market.", "I bought something at the market.", "Nobody bought anything at the market."],
        correctIndex: 0,
        explanation: "\"Ne... rien\" with the passé composé: \"rien\" before the participle.",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: You can sit anywhere you like.",
        words: ["Tu peux", "t'asseoir", "n'importe où."],
        translation: "You can sit anywhere you like.",
        explanation: "\"N'importe où\" = anywhere at all, in an affirmative sentence.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Whatever it is, it can wait until tomorrow.",
        answer: "Quoi que ce soit, ça peut attendre demain.",
        altAnswers: ["Quoi que ce soit, cela peut attendre demain.", "Quoi que ce soit, ça peut attendre jusqu'à demain."],
        explanation: "Affirmative \"quoi que ce soit\" = whatever it is; the frozen \"soit\" never changes.",
      },
      {
        type: "dictation",
        audio: "Qui que ce soit, je ne suis pas là.",
        explanation: "\"Qui que ce soit\": whoever it is. Three short words and the frozen subjunctive \"soit\".",
      },
      {
        type: "speak",
        prompt: "Say it in French: Don't say anything to anyone at all.",
        text: "Ne dites rien à qui que ce soit.",
        explanation: "\"Qui que ce soit\" strengthens anyone; \"ne... rien\" keeps its own negative.",
      },
    ],
  },
  {
    slug: "b2-mission-petites-annonces",
    level: "FR-B2",
    number: 8,
    title: "Real-World Mission: Petites Annonces",
    summary: "Read and write French classified ads for a flatshare, a babysitter and a used car, with their abbreviations and telegraphic style.",
    duration: "15 min",
    sections: [
      {
        heading: "The telegraphic style of French ads",
        body: [
          "French classified ads (\"petites annonces\") on sites like Leboncoin or on a supermarket noticeboard drop everything they can. The subject \"je\" or \"nous\" disappears and the verb stays in the je form: \"Cherche personne qui puisse garder deux enfants le mercredi.\" \"Recherche colocataire qui soit non-fumeur.\" \"Vends vélo enfant, très bon état.\"",
        ],
        examples: [
          { es: "Cherche personne qui puisse garder deux enfants le mercredi.", en: "Looking for someone who can look after two children on Wednesdays." },
          { es: "Recherche colocataire qui soit non-fumeur.", en: "Seeking a non-smoking flatmate." },
          { es: "Vends vélo enfant, TBE, 40 €.", en: "Child's bike for sale, very good condition, €40." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French, in the style of an ad (no subject pronoun).",
            source: "Seeking a flatmate who doesn't smoke.",
            answer: "Recherche colocataire qui ne fume pas.",
            altAnswers: ["Cherche colocataire qui ne fume pas.", "Recherche colocataire non-fumeur.", "Cherche colocataire non-fumeur.", "Recherche colocataire qui soit non-fumeur.", "Cherche colocataire qui soit non-fumeur."],
            explanation: "Ads drop \"je\" and the article; the requirement is still a subjunctive (\"fume\" looks the same in both moods).",
          },
        ],
      },
      {
        heading: "The subjunctive survives the shortening",
        body: [
          "Notice that the subjunctive survives the shortening: a wanted person or flat is still a requirement, so \"qui soit\", \"qui puisse\", \"qui ait\". What you are selling, on the other hand, is described as a fact: \"Vends Clio qui a 98 000 km.\"",
        ],
        examples: [
          { es: "JF, 25 ans, cherche T2 qui soit proche de la gare.", en: "Young woman, 25, seeking a one-bedroom flat close to the station." },
          { es: "Urgent : cherche garage qui accepte un camping-car.", en: "Urgent: looking for a garage that will take a camper van." },
          { es: "Vends Renault qui a 120 000 km.", en: "Renault for sale, 120,000 km on the clock." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into an ad: drop the subject pronoun and the article.",
            source: "Je cherche une nounou qui puisse travailler le samedi.",
            answer: "Cherche nounou qui puisse travailler le samedi.",
            altAnswers: ["Cherche une nounou qui puisse travailler le samedi."],
            explanation: "Ads drop the subject pronoun (and often the article) but keep the je form and the subjunctive \"puisse\".",
          },
        ],
      },
      {
        heading: "Ad abbreviations",
        body: [
          "Ads also use set abbreviations. \"JF\" / \"JH\" (jeune femme / jeune homme), \"T2\" or \"F2\" (a flat with two main rooms: a living room and one bedroom), \"cc.\" (charges comprises: bills or service charges included), \"réf. exigées\" (references required), \"TBE\" (très bon état), \"urgent\".",
        ],
        examples: [
          { es: "Loue T2 lumineux, 650 € cc.", en: "One-bedroom flat to rent, bright, €650 bills included." },
          { es: "JH, 30 ans, cherche studio, réf. exigées.", en: "Young man, 30, seeking a studio flat, references required." },
          { es: "Vends canapé TBE, urgent.", en: "Sofa for sale, very good condition, urgent." },
        ],
        checkpoint: [
          {
            type: "matching",
            explanation: "These are the standard shorthand of French property and second-hand ads.",
            instructions: "Match each abbreviation with its meaning.",
            pairs: [{ left: "JF", right: "young woman" }, { left: "T2", right: "living room + one bedroom" }, { left: "cc.", right: "charges included" }, { left: "TBE", right: "very good condition" }, { left: "réf. exigées", right: "references required" }],
          },
        ],
      },
      {
        heading: "Ad 1: the flatshare",
        body: [
          "Here is a typical flatshare ad, line by line: \"Coloc à Bordeaux, quartier Saint-Michel. Grande maison, 3 chambres. Cherchons 3e colocataire qui soit sérieux mais sympa, qui ait un emploi ou soit étudiant, et qui ne fasse pas la fête tous les soirs. Loyer 480 € cc. Libre au 1er septembre.\"",
        ],
        examples: [
          { es: "Cherchons troisième colocataire qui soit sérieux mais sympa.", en: "Looking for a third flatmate who's serious but friendly." },
          { es: "Nous préférons quelqu'un qui ne fasse pas la fête tous les soirs.", en: "We'd rather have someone who doesn't party every night." },
          { es: "La chambre est libre au 1er septembre.", en: "The room is available from 1 September." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            question: "What does it mean?",
            audio: "Nous avons déjà un colocataire qui joue du piano.",
            options: ["We already have a flatmate who plays the piano.", "We're looking for a flatmate who plays the piano.", "We don't want a flatmate who plays the piano.", "Our flatmate used to play the piano."],
            correctIndex: 0,
            explanation: "\"Nous avons déjà\": a real flatmate, described in the indicative.",
          },
        ],
      },
      {
        heading: "Cherchons: the nous form",
        body: [
          "The writers are a group, so the verb is \"cherchons\" (nous form, pronoun dropped). Every condition is a subjunctive: \"soit\", \"ait\", \"ne fasse pas\". The facts about the house, on the other hand, need no verb at all.",
          "\"Coloc\" is the everyday short form of both \"colocation\" (the flatshare) and \"colocataire\" (the flatmate).",
        ],
        examples: [
          { es: "Nous voulons quelqu'un qui ait un emploi ou qui soit étudiant.", en: "We want someone who has a job or is a student." },
          { es: "Nous avons déjà un colocataire qui joue du piano.", en: "We already have a flatmate who plays the piano." },
          { es: "Cherchons coloc qui aime cuisiner.", en: "Looking for a flatmate who likes cooking." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Cherchons colocataire qui a un emploi stable.",
            answer: "Cherchons colocataire qui ait un emploi stable.",
            explanation: "The flatmate is a requirement, so even in a shortened ad the verb is the subjunctive \"ait\".",
          },
        ],
      },
      {
        heading: "Ad 2: the babysitter",
        body: [
          "Childcare ads are full of requirements: \"Famille à Nantes cherche baby-sitter qui puisse récupérer deux enfants (6 et 9 ans) à l'école le mercredi midi et les garder jusqu'à 18 h. Nous cherchons quelqu'un qui soit patient, qui ait de l'expérience et qui sache faire des activités créatives. Réf. exigées.\"",
          "\"Récupérer\" (to pick up) and \"garder\" (to look after) are the key verbs. Note \"jusqu'à 18 h\": French ads write times on the 24-hour clock with \"h\".",
        ],
        examples: [
          { es: "Cherche baby-sitter qui puisse récupérer deux enfants à l'école.", en: "Looking for a babysitter who can pick up two children from school." },
          { es: "Nous cherchons quelqu'un qui soit patient et qui ait de l'expérience.", en: "We're looking for someone who's patient and has experience." },
          { es: "Il nous faut une personne qui sache faire des activités créatives.", en: "We need someone who knows how to do creative activities." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Family looking for a nanny who speaks English.",
            answer: "Famille cherche nounou qui parle anglais.",
            altAnswers: ["Famille cherche une nounou qui parle anglais.", "Famille cherche baby-sitter qui parle anglais."],
            explanation: "Ad style: no article, no pronoun; \"parle\" is subjunctive, though it looks like the present.",
          },
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "Looking for someone [who has] a car.",
            sentence: "Cherche personne ___ une voiture.",
            answer: "qui ait",
            explanation: "A requirement: the subjunctive \"ait\", not \"a\".",
          },
        ],
      },
      {
        heading: "Answering the ad: back to the indicative",
        body: [
          "If you are the babysitter answering, you switch to the indicative, because you describe yourself: \"Je suis étudiante, j'ai trois ans d'expérience et je sais faire des gâteaux !\"",
        ],
        examples: [
          { es: "Je suis étudiante et j'ai trois ans d'expérience.", en: "I'm a student and I have three years' experience." },
          { es: "J'ai une amie qui garde déjà des enfants dans votre quartier.", en: "I have a friend who already babysits in your area." },
          { es: "Je sais nager et j'ai le permis.", en: "I can swim and I have a driving licence." },
        ],
        checkpoint: [
          {
            type: "multiple-choice",
            question: "You're answering a babysitting ad. Which line describes you?",
            options: ["J'ai une voiture et je sais cuisiner.", "J'aie une voiture et je sache cuisiner.", "Cherche voiture et sache cuisiner.", "Que j'aie une voiture et que je sache cuisiner."],
            correctIndex: 0,
            explanation: "You describe yourself, a real person, so the indicative: \"j'ai\", \"je sais\".",
          },
        ],
      },
      {
        heading: "Ad 3: selling a car",
        body: [
          "When you sell, you describe something real, so the indicative is back: \"Vends Peugeot 208, 2018, 75 000 km, CT OK, TBE. Voiture qui a toujours dormi au garage, qui consomme peu. Prix à débattre.\" (\"CT\": contrôle technique, the roadworthiness test; \"à débattre\": negotiable.)",
        ],
        examples: [
          { es: "Vends Peugeot 208, 75 000 km, prix à débattre.", en: "Peugeot 208 for sale, 75,000 km, price negotiable." },
          { es: "C'est une voiture qui a toujours dormi au garage.", en: "It's a car that has always been kept in a garage." },
          { es: "Le contrôle technique est OK et les pneus sont neufs.", en: "The MOT is fine and the tyres are new." },
        ],
        checkpoint: [
          {
            type: "speak",
            prompt: "Say it in French: Scooter for sale, very low mileage.",
            text: "Vends scooter qui a très peu roulé.",
            explanation: "You're selling something real: indicative \"a roulé\".",
          },
        ],
      },
      {
        heading: "Buyers go back to the subjunctive",
        body: [
          "Buyers' ads, by contrast, go back to the subjunctive: \"Recherche petite voiture qui ait moins de 100 000 km et qui soit économique.\" Writing both sides is the best test of whether you really feel the difference.",
        ],
        examples: [
          { es: "Recherche petite voiture qui ait moins de 100 000 km.", en: "Wanted: small car with under 100,000 km." },
          { es: "Je cherche une voiture qui soit économique et facile à garer.", en: "I'm looking for a car that's cheap to run and easy to park." },
          { es: "Recherche vélo qui soit léger et pas trop cher.", en: "Wanted: bike that's light and not too expensive." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "Wanted: washing machine in good condition.",
            answer: "Recherche machine à laver qui soit en bon état.",
            altAnswers: ["Cherche machine à laver qui soit en bon état.", "Recherche lave-linge qui soit en bon état.", "Recherche machine à laver en bon état."],
            explanation: "A buyer's ad describes a requirement: \"qui soit\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "You are selling your bike. Which line belongs in your ad?",
        options: ["Vends vélo qui a deux ans, TBE.", "Vends vélo qui ait deux ans, TBE.", "Cherche vélo qui a deux ans, TBE.", "Vends vélo qu'il a deux ans, TBE."],
        correctIndex: 0,
        explanation: "A seller describes a real object: indicative \"qui a\". The subjunctive belongs in a buyer's ad.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "Studio to rent, €500 [bills included].",
        sentence: "Loue studio, 500 € ___.",
        answer: "cc",
        altAnswers: ["charges comprises"],
        explanation: "\"Cc\" = \"charges comprises\"; \"hc\" would mean bills extra.",
      },
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "Seeking a flatmate, [references required].",
        sentence: "Cherche colocataire, ___.",
        answer: "réf. exigées",
        altAnswers: ["références exigées", "ref. exigées"],
        explanation: "\"Réf. exigées\" = \"références exigées\", the standard ad abbreviation.",
      },
      {
        type: "listen-choose",
        question: "What did you hear?",
        audio: "Cherche baby-sitter qui sache nager.",
        options: ["Cherche baby-sitter qui sache nager.", "Cherche baby-sitter qui sait nager.", "Cherche baby-sitter qui sachent nager.", "Cherche la baby-sitter qui sait nager."],
        correctIndex: 0,
        explanation: "\"Sache\" ends in a sh sound: the subjunctive in an ad looking for someone.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Young man, 23, seeking a flatshare that's close to the university.",
        answer: "JH, 23 ans, cherche colocation qui soit proche de l'université.",
        altAnswers: ["JH, 23 ans, cherche colocation proche de l'université.", "Jeune homme, 23 ans, cherche colocation qui soit proche de l'université.", "Jeune homme, 23 ans, cherche colocation proche de l'université.", "JH, 23 ans, cherche colocation qui soit près de l'université.", "Jeune homme, 23 ans, cherche colocation qui soit près de l'université."],
        explanation: "\"JH\" = jeune homme; the ad style drops the article; \"qui soit\" for the requirement (or just the adjective).",
      },
      {
        type: "word-order",
        prompt: "Put the words in order to say: Looking for a flat that has a balcony.",
        words: ["Cherche", "appartement", "qui", "ait", "un balcon."],
        translation: "Looking for a flat that has a balcony.",
        explanation: "Buyer's ad: no pronoun, no article, and the subjunctive \"ait\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Vends Clio qui ait 98 000 km.",
        answer: "Vends Clio qui a 98 000 km.",
        explanation: "What you sell is real, so the indicative \"a\"; the subjunctive is only for what you're looking for.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "Couple seeking a house that has a garden.",
        answer: "Couple cherche maison qui ait un jardin.",
        altAnswers: ["Couple cherche une maison qui ait un jardin."],
        explanation: "Ad style with the subjunctive \"ait\" for the requirement.",
      },
      {
        type: "dictation",
        audio: "Vends poussette qui a servi deux fois.",
        explanation: "Selling: indicative \"a servi\", a real pushchair.",
      },
      {
        type: "speak",
        prompt: "Say it in French: I have two years' experience and I can swim.",
        text: "J'ai deux ans d'expérience et je sais nager.",
        explanation: "Answering an ad: you describe yourself in the indicative.",
      },
    ],
  },
  {
    slug: "b2-talk-about-you-la-personne-que-tu-cherches",
    level: "FR-B2",
    number: 9,
    title: "Talk About Yourself: La Personne que Tu Cherches",
    summary: "Describe a flatmate, a colleague or a partner you haven't met yet, and contrast them with people you already know.",
    duration: "14 min",
    sections: [
      {
        heading: "The ideal flatmate",
        body: [
          "This lesson pulls the unit together around one personal topic: the people you are looking for. Start with a flatmate. List what you need with \"je cherche quelqu'un qui...\", \"j'aimerais vivre avec quelqu'un qui...\", always with the subjunctive: \"qui soit ordonné\", \"qui ait le sens de l'humour\", \"qui ne soit pas trop bavard le matin\".",
        ],
        examples: [
          { es: "Je cherche quelqu'un qui ait le sens de l'humour.", en: "I'm looking for someone with a sense of humour." },
          { es: "J'aimerais vivre avec quelqu'un qui soit ordonné.", en: "I'd like to live with someone who's tidy." },
          { es: "Il me faut un colocataire qui ne soit pas trop bavard le matin.", en: "I need a flatmate who isn't too chatty in the morning." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Turn it into a wish: start with \"Je cherche quelqu'un qui\".",
            source: "Mon colocataire est très discret.",
            answer: "Je cherche quelqu'un qui soit très discret.",
            altAnswers: ["Je cherche quelqu'un qui soit discret."],
            explanation: "A person you're looking for is a requirement, so \"est\" becomes the subjunctive \"soit\".",
          },
        ],
      },
      {
        heading: "Softening, and words to have ready",
        body: [
          "\"J'aimerais\" and \"je voudrais\" soften the demands. \"Le sens de l'humour\" (a sense of humour) and \"ordonné\" (tidy) are useful words to have ready, along with \"bordélique\" (messy, colloquial), \"discret\", \"arrangeant\" (easy-going, accommodating), \"fiable\" (reliable).",
        ],
        examples: [
          { es: "Je voudrais quelqu'un qui fasse la vaisselle tout de suite après le repas.", en: "I'd like someone who does the washing-up straight after the meal." },
          { es: "Mon ancien colocataire était très arrangeant, mais un peu bordélique.", en: "My old flatmate was very easy-going, but a bit messy." },
          { es: "J'aimerais un colocataire qui soit fiable et arrangeant.", en: "I'd like a flatmate who's reliable and easy-going." },
        ],
        checkpoint: [
          {
            type: "fill-blank",
            prompt: "Write the French for the bold words.",
            en: "I'd like someone [who is] reliable.",
            sentence: "Je voudrais quelqu'un ___ fiable.",
            answer: "qui soit",
            explanation: "\"Je voudrais quelqu'un qui\" + subjunctive: \"soit\", not \"est\".",
          },
        ],
      },
      {
        heading: "The ideal colleague or boss",
        body: [
          "At work, you can describe the team you would like to join: \"Je voudrais travailler avec des collègues qui soient motivés\", \"J'aimerais avoir un manager qui sache écouter\", \"Je cherche une entreprise qui me fasse confiance.\"",
        ],
        examples: [
          { es: "Je voudrais travailler avec des collègues qui soient motivés.", en: "I'd like to work with colleagues who are motivated." },
          { es: "J'aimerais avoir un manager qui sache écouter.", en: "I'd like to have a manager who knows how to listen." },
          { es: "Je cherche une entreprise qui me fasse confiance.", en: "I'm looking for a company that trusts me." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I'm looking for a team that knows how to work together.",
            answer: "Je cherche une équipe qui sache travailler ensemble.",
            altAnswers: ["Je cherche une équipe qui sache travailler en équipe."],
            explanation: "A team you want to join: \"savoir\" → \"sache\".",
          },
        ],
      },
      {
        heading: "Wish against reality",
        body: [
          "Contrast immediately with your real situation in the indicative: \"Pour l'instant, j'ai une cheffe qui ne sait pas déléguer.\" (\"Une cheffe\" is now the standard feminine of \"chef\" in France.) That back-and-forth between wish and reality is exactly what DELF B2 oral tasks reward.",
        ],
        examples: [
          { es: "Pour l'instant, j'ai une cheffe qui ne sait pas déléguer.", en: "At the moment I have a boss who doesn't know how to delegate." },
          { es: "Dans mon équipe, il y a un collègue qui m'aide toujours.", en: "In my team there's a colleague who always helps me." },
          { es: "Il n'y a personne dans mon service qui veuille changer les choses.", en: "There's nobody in my department who wants to change things." },
        ],
        checkpoint: [
          {
            type: "listen-choose",
            question: "What does it mean?",
            audio: "Il n'y a personne dans mon service qui veuille changer les choses.",
            options: ["There's nobody in my department who wants to change things.", "Somebody in my department wants to change things.", "Nobody in my department has changed anything.", "There's someone in my department who could change things."],
            correctIndex: 0,
            explanation: "\"Personne... qui veuille\": a negated antecedent with the subjunctive of vouloir.",
          },
          {
            type: "translate",
            direction: "en-es",
            prompt: "Correct the sentence.",
            source: "Pour l'instant, j'ai un chef qui ne sache pas écouter.",
            answer: "Pour l'instant, j'ai un chef qui ne sait pas écouter.",
            explanation: "Your real boss exists, so the indicative \"sait\"; the subjunctive belongs to the boss you wish for.",
          },
        ],
      },
      {
        heading: "The ideal partner: avec qui",
        body: [
          "The most personal version: \"Je cherche quelqu'un qui me fasse rire\", \"qui aime voyager\", \"qui ne soit pas jaloux\", \"avec qui je puisse parler de tout\". \"Avec qui\" is the preposition + qui you met at the Intermediate level, and it takes the subjunctive too.",
        ],
        examples: [
          { es: "Je cherche quelqu'un qui me fasse rire.", en: "I'm looking for someone who makes me laugh." },
          { es: "J'aimerais rencontrer quelqu'un avec qui je puisse parler de tout.", en: "I'd like to meet someone I can talk to about anything." },
          { es: "Je ne veux pas quelqu'un qui soit jaloux.", en: "I don't want someone who's jealous." },
        ],
        checkpoint: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Translate into French.",
            source: "I'm looking for someone I can go hiking with.",
            answer: "Je cherche quelqu'un avec qui je puisse faire de la randonnée.",
            altAnswers: ["Je cherche quelqu'un avec qui je puisse faire des randonnées.", "Je cherche quelqu'un avec qui je puisse randonner."],
            explanation: "French puts the preposition first, \"avec qui\", and the wish takes the subjunctive \"puisse\".",
          },
        ],
      },
      {
        heading: "Emphasis, then the people you know",
        body: [
          "Add a superlative or a \"seul\" for emphasis: \"Tu es la personne la plus drôle que je connaisse\", \"C'est le seul qui me comprenne vraiment.\" And finish with real people in the indicative: \"J'ai une amie qui a rencontré son mari sur une appli.\"",
        ],
        examples: [
          { es: "Tu es la personne la plus drôle que je connaisse.", en: "You're the funniest person I know." },
          { es: "C'est le seul qui me comprenne vraiment.", en: "He's the only one who really understands me." },
          { es: "J'ai une amie qui a rencontré son mari sur une appli.", en: "I have a friend who met her husband on an app." },
        ],
        checkpoint: [
          {
            type: "word-order",
            prompt: "Put the words in order to say: It's the most beautiful city I know.",
            words: ["C'est", "la ville", "la plus belle", "que", "je connaisse."],
            translation: "It's the most beautiful city I know.",
            explanation: "A superlative is a personal claim: \"que je connaisse\".",
          },
          {
            type: "multiple-choice",
            question: "Which sentence talks about a real person?",
            options: ["J'ai une amie qui sait parler cinq langues.", "Je cherche une amie qui sache parler cinq langues.", "Je ne connais personne qui sache parler cinq langues.", "Connais-tu quelqu'un qui sache parler cinq langues ?"],
            correctIndex: 0,
            explanation: "Only \"j'ai une amie qui sait\" describes someone who exists; the others are sought, negated or questioned, hence \"sache\".",
          },
        ],
      },
    ],
    exercises: [
      {
        type: "fill-blank",
        prompt: "Write the French for the bold words.",
        en: "She's the only one [who knows] the truth.",
        sentence: "C'est la seule ___ la vérité.",
        answer: "qui sache",
        explanation: "After \"la seule\", as your judgement, the subjunctive \"sache\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Correct the sentence.",
        source: "Je ne veux pas quelqu'un qui est trop sérieux.",
        answer: "Je ne veux pas quelqu'un qui soit trop sérieux.",
        explanation: "The person is only imagined, so the subjunctive \"soit\".",
      },
      {
        type: "listen-choose",
        question: "What does it mean?",
        audio: "J'ai une amie qui a rencontré son mari sur une appli.",
        options: ["I have a friend who met her husband on an app.", "I'm looking for a friend who met her husband on an app.", "My friend wants to meet a husband on an app.", "I met my friend's husband on an app."],
        correctIndex: 0,
        explanation: "\"J'ai une amie qui a rencontré\": a real friend and a past fact, in the indicative.",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "I'd like to live with people who are calm.",
        answer: "J'aimerais vivre avec des gens qui soient calmes.",
        altAnswers: ["Je voudrais vivre avec des gens qui soient calmes.", "J'aimerais vivre avec des personnes qui soient calmes."],
        explanation: "Plural subjunctive of être: \"soient\".",
      },
      {
        type: "translate",
        direction: "en-es",
        prompt: "Translate into French.",
        source: "My best friend is someone who always tells the truth.",
        answer: "Ma meilleure amie est quelqu'un qui dit toujours la vérité.",
        altAnswers: ["Mon meilleur ami est quelqu'un qui dit toujours la vérité."],
        explanation: "A real person: indicative \"dit\".",
      },
      {
        type: "dictation",
        audio: "J'ai un frère qui me fait toujours rire.",
        explanation: "A real brother: indicative \"fait\".",
      },
      {
        type: "speak",
        prompt: "Say it in French: I'm looking for someone with a sense of humour who isn't too talkative.",
        text: "Je cherche quelqu'un qui ait le sens de l'humour et qui ne soit pas trop bavard.",
        explanation: "Two subjunctive requirements: \"ait\" and \"ne soit pas\".",
      },
    ],
  },
];
