// Synced from cheneygross-afk/lengo:src/lib/lessons/fr-a1-writing.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { UnitWriting } from "./unitWriting";
import { spaced } from "./fr-units";

// Extra writing tasks for this level's units, so every unit asks the learner to
// write at least three times: keyed by the lesson each is added to (see
// unitWriting.ts). Marked by the AI writing feedback like every writing task.
export const FR_A1_WRITING: UnitWriting = spaced({
  "a1-gender-number-articles-2": [
    {
      "type": "write",
      "prompt": "You're making a page of photos from your French summer course. Write a caption for one group photo: say who each person is (student, teacher, friend), where they're from and their nationality, using plural nouns and feminine forms.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Point out the people with \"voici\".",
        "Use plural nouns with \"les\" or \"des\" and the plural of être (\"ils sont\", \"elles sont\").",
        "Make the words for women feminine (\"étudiantes\", \"amies\", \"italiennes\").",
        "Put no article before a job after être (\"il est professeur\")."
      ],
      "modelAnswer": "Voici une photo de la classe de français. Voici Anna et Sofia, des amies de Rome : elles sont étudiantes et elles sont italiennes. Voici Tom et Ben : ils sont étudiants aussi, mais ils sont américains. Et voici Monsieur Roux : il est professeur. Il est français, de Nice.",
      "explanation": "\"Voici\" points out each person. Plurals take \"des\" or \"les\" and a silent -s (\"des amies\", \"étudiants\"), and words for women add -e, doubling the n in \"italiennes\". Jobs and nationalities after être take no article: \"il est professeur\", \"ils sont américains\"."
    }
  ],
  "a1-adjective-agreement": [
    {
      "type": "write",
      "prompt": "You're on holiday in Nice with a friend. Write a postcard to your French teacher describing the city, the beach, the sea, your hotel and the people, with at least one adjective for each.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Say where you are with \"nous sommes\" or \"je suis\".",
        "Describe at least four things or people with être + an adjective.",
        "Make every adjective agree in gender and number with its noun (\"la mer est bleue\", \"les gens sont sympas\").",
        "Open and close like a postcard (\"Bonjour Madame...\", \"À bientôt\")."
      ],
      "modelAnswer": "Bonjour Madame Leroy ! Nous sommes à Nice, Paul et moi. La ville est belle et très animée. La plage est grande et la mer est bleue et chaude. L'hôtel est petit, mais il est confortable. Les gens sont sympas et les serveuses sont souriantes. Nous sommes très contents ! À bientôt, Emma",
      "explanation": "Each adjective takes the gender and number of its noun: \"belle\", \"animée\", \"grande\", \"bleue\" and \"chaude\" are feminine, \"petit\" is masculine, and \"sympas\", \"souriantes\" and \"contents\" are plural. \"Nous\" is Emma and Paul together, so \"contents\" is masculine plural; \"confortable\" already ends in -e."
    }
  ],
  "a1-sounds-nasal-vowels": [
    {
      "type": "write",
      "prompt": "For your pronunciation class, write a short description of a photo of a picnic with two friends and their children. Use at least five words with a nasal vowel (un, grand, bon, blanc, enfant, vin, content...) and one feminine form where the nasal disappears (bonne, canadienne, américaine).",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Use at least five words with a nasal vowel (\"grand\", \"enfants\", \"bon\", \"vin\", \"blanc\").",
        "Include a masculine-feminine pair where the nasal disappears (\"canadien\" / \"canadienne\", \"bon\" / \"bonne\").",
        "Describe the people and the food with être and adjectives that agree.",
        "Point things out with \"voici\" and the right articles."
      ],
      "modelAnswer": "Voici un pique-nique dans un grand jardin. Voici Vincent, un ami canadien, et Florence, une amie canadienne. Ils sont avec Simon et Jean, deux enfants très contents. Le pain est bon, le vin blanc est excellent et la tarte est très bonne !",
      "explanation": "Nasal vowels are in \"un\", \"grand\", \"jardin\", \"Vincent\", \"canadien\", \"Simon\", \"Jean\", \"enfants\", \"contents\", \"pain\", \"bon\", \"vin\" and \"blanc\", with no n or g said at the end. When a vowel follows the n, the nasal disappears and the n is heard: \"canadienne\", \"bonne\"."
    }
  ],
  "a1-sounds-liaison-elision": [
    {
      "type": "write",
      "prompt": "Write a short dialogue between two people meeting at a party in Paris. They greet each other, give their names, say where they're from and what they do, and talk about two friends who are there. Use élision (je m'appelle, d'où, l'ami) and the required liaisons (vous êtes, les amis, un ami).",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Use élision with an apostrophe at least three times (\"m'appelle\", \"d'où\", \"d'Avignon\").",
        "Include at least three required liaisons: \"vous êtes\", \"les amis\", \"des étudiants\", \"un ami\".",
        "Give nationality or origin and job with être and no article before the job.",
        "Write it as a dialogue, with a greeting and \"Enchanté(e)\"."
      ],
      "modelAnswer": "— Bonsoir ! Je m'appelle Hélène. Et vous ?\n— Je m'appelle Arnaud. Enchanté !\n— Enchantée ! Vous êtes d'où ?\n— Je suis d'Avignon. Je suis architecte. Et vous ?\n— Je suis de Lyon. Je suis étudiante. Voici les amis de Marc, Luca et Giulia.\n— Ils sont étudiants ?\n— Oui, ce sont des étudiants italiens. Luca est un ami de Marc.",
      "explanation": "Élision replaces a final e with an apostrophe before a vowel: \"je m'appelle\", \"d'où\", \"d'Avignon\". Liaison links a silent final consonant to the next vowel: \"vous‿êtes\" and \"les‿amis\", \"des‿étudiants\" with a z sound, \"un‿ami\" with an n. Hélène, a woman, writes \"Enchantée\"."
    }
  ],
  "a1-er-verbs-2": [
    {
      "type": "write",
      "prompt": "Your French teacher asks how life in your new flatshare is going. Write her a short email: say where you and your flatmate live, what each of you does in the day, and what you do together in the evening and at the weekend. Use nous, on and vous.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Use the nous form of -er verbs (\"nous habitons\", \"nous dansons\").",
        "Use \"on\" with the il/elle form for everyday \"we\" (\"on cuisine\", \"on regarde\").",
        "Ask your teacher one question with \"vous\" + -ez (\"vous habitez... ?\").",
        "Open and close the email politely (\"Bonjour Madame...\", \"À bientôt\")."
      ],
      "modelAnswer": "Bonjour Madame Petit, Nous habitons à Lille, dans un petit appartement. Léa étudie à l'université et moi, je travaille dans un café. Le soir, on cuisine et on regarde un film. Le samedi, nous dansons ou nous visitons la région. Et vous, vous habitez à Paris ? À bientôt, Sam",
      "explanation": "-Er verbs take -ons with nous (\"nous habitons\", \"nous dansons\") and -ez with vous (\"vous habitez\"), while everyday \"on\" uses the il form (\"on cuisine\", \"on regarde\"). One present tense covers ‘we cook’ and ‘we're cooking’."
    }
  ],
  "a1-avoir-2": [
    {
      "type": "write",
      "prompt": "You're at a music festival with a friend. Write a short diary entry that evening: say who you're with and how old they are, what you're listening to, and how you both feel, using at least three avoir expressions.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Use at least three avoir expressions (\"j'ai froid\", \"il a faim\", \"il a soif\", \"j'ai sommeil\").",
        "Give an age with avoir (\"il a dix-neuf ans\").",
        "Say what you need with \"avoir besoin de\".",
        "Keep être for adjectives (\"je suis fatiguée\") next to avoir for states (\"j'ai sommeil\")."
      ],
      "modelAnswer": "Cher journal, je suis au festival de musique avec Lucas. Il a dix-neuf ans et il adore le rock. Nous écoutons des groupes super, mais j'ai froid ! Lucas a faim et il a soif. Moi, je suis fatiguée et j'ai sommeil. Nous avons besoin d'un café !",
      "explanation": "Where English uses be, French uses avoir for age and physical states: \"il a dix-neuf ans\", \"j'ai froid\", \"il a faim\", \"il a soif\", \"j'ai sommeil\". \"Avoir besoin de\" + noun says what you need (\"d'un café\"), while the adjective \"fatiguée\" stays with être."
    }
  ],
  "a1-faire": [
    {
      "type": "write",
      "prompt": "Your French school's magazine has a page called 'Le samedi chez nous'. Write a short article about a typical Saturday in your home: who does the shopping, the cooking and the washing-up, and who does some sport.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Use at least four forms of faire, including \"nous faisons\" or \"ils font\".",
        "Use at least three faire chunks (\"faire les courses\", \"faire la cuisine\", \"faire la vaisselle\", \"faire du sport\").",
        "Say when with \"le matin\", \"l'après-midi\" or \"le soir\".",
        "End with a question to the readers with \"vous faites\"."
      ],
      "modelAnswer": "Le samedi, chez nous, nous faisons beaucoup de choses ! Le matin, Papa fait les courses et Maman fait du sport. L'après-midi, je fais la cuisine : une tarte aux pommes. Le soir, Léo et Zoé font la vaisselle. Ils ne sont pas contents ! Et vous, vous faites quoi le samedi ?",
      "explanation": "Faire is irregular: \"je fais\", \"il fait\", \"nous faisons\", \"vous faites\", \"ils font\". It builds the everyday chunks \"faire les courses\", \"faire du sport\", \"faire la cuisine\" and \"faire la vaisselle\", and \"le samedi\" means every Saturday."
    }
  ],
  "a1-savoir-connaitre": [
    {
      "type": "write",
      "prompt": "A French family in Lyon is looking for a student to look after their children this summer. Write a short application: introduce yourself, say three things you know how to do, and say which places and people you know in Lyon.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Use \"je sais\" + infinitive for skills (\"je sais nager\", \"je sais cuisiner\").",
        "Use \"je connais\" for places and people (\"je connais Lyon\").",
        "Include one negative with ne...pas around savoir (\"je ne sais pas conduire\").",
        "Use a formal greeting and sign-off (\"Madame, Monsieur\", \"Cordialement\")."
      ],
      "modelAnswer": "Madame, Monsieur, Je m'appelle Lucie, j'ai vingt ans et je suis étudiante. Je sais nager, je sais cuisiner et je parle anglais. Je connais bien Lyon et je connais les parcs de la ville. Je connais aussi les enfants de Madame Blanc. Je ne sais pas conduire, mais je prends le bus. Cordialement, Lucie Martin",
      "explanation": "Savoir + infinitive says what you know how to do (\"je sais nager\"), and connaître is for places and people you're familiar with (\"je connais Lyon\", \"je connais les enfants de Madame Blanc\"). In the negative, ne...pas wraps the conjugated verb: \"je ne sais pas conduire\"."
    }
  ],
  "a1-inversion": [
    {
      "type": "write",
      "prompt": "You'd like to take a French course at a language school in Montpellier. Write a short, formal email to the school: introduce yourself and ask four questions about the course, using inversion.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Ask at least three questions with inversion and a hyphen (\"Proposez-vous...?\", \"Parlez-vous...?\").",
        "Add -t- between two vowels in one question (\"commence-t-il\").",
        "Use one question word (\"combien\", \"quand\", \"où\").",
        "Use vous and a formal greeting and sign-off."
      ],
      "modelAnswer": "Madame, Monsieur, Je m'appelle Daniel Reed. Je suis irlandais et je parle un peu français. Proposez-vous des cours le soir ? Combien coûte le cours ? Quand commence-t-il ? Les professeurs parlent-ils anglais ? Merci beaucoup ! Cordialement, Daniel Reed",
      "explanation": "Inversion swaps the verb and the pronoun with a hyphen (\"Proposez-vous\"), with -t- between two vowels (\"commence-t-il\"). With a noun subject, the noun stays first and a pronoun follows the verb: \"Les professeurs parlent-ils anglais ?\". Inversion suits a formal email."
    }
  ],
  "a1-negation-beyond-pas": [
    {
      "type": "write",
      "prompt": "You've just spent a terrible night at the Hôtel du Lac. Write a short online review: say what there is and isn't in the room, and complain about the reception, the staff and the breakfast using never, no longer, nothing and nobody.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Use at least three of \"ne...jamais\", \"ne...plus\", \"ne...rien\" and \"ne...personne\".",
        "Use \"il y a\" in the negative (\"il n'y a personne\", \"il n'y a pas de télévision\").",
        "Use \"c'est\" + article + noun and \"il est\" + adjective correctly.",
        "Give a clear verdict (\"Une catastrophe !\", \"Je ne recommande pas.\")."
      ],
      "modelAnswer": "Hôtel du Lac : une catastrophe ! Il n'y a personne à la réception le soir. Dans la chambre, il n'y a pas de télévision et la douche ne marche plus. Il n'y a rien pour le petit déjeuner. Le serveur n'est jamais poli. C'est un hôtel cher et il est très sale. Je ne recommande pas !",
      "explanation": "The new negatives replace pas around the verb: \"ne marche plus\" (no longer), \"n'est jamais\" (never), and with il y a: \"il n'y a personne\", \"il n'y a rien\". After a negative, \"une télévision\" becomes \"pas de télévision\". \"C'est un hôtel cher\" (c'est + article + noun) contrasts with \"il est très sale\" (il est + adjective)."
    }
  ],
  "a1-word-web-family": [
    {
      "type": "write",
      "prompt": "You're showing a French friend a photo from your sister's wedding. Write a short description of the photo: who each person is, using family words and possessives, with a detail or two (age, appearance).",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Use at least four family words (\"sœur\", \"mari\", \"parents\", \"neveu\", \"filles\"...).",
        "Use possessives that agree with the noun, including son/sa or leur(s) (\"son mari\", \"leurs filles\").",
        "Use de instead of 's (\"les parents de Karim\").",
        "Give an age with avoir (\"il a cinq ans\")."
      ],
      "modelAnswer": "Voici une photo du mariage de ma sœur Julie. C'est Julie et son mari, Karim. À gauche, ce sont mes parents : mon père est grand et ma mère est blonde. À droite, il y a les parents de Karim et leurs deux filles. Devant, c'est mon neveu, Hugo. Il a cinq ans.",
      "explanation": "Possessives agree with the thing owned: \"ma sœur\", \"son mari\" (Julie's husband), \"mes parents\", and \"leurs filles\" for the daughters of Karim's parents. \"Les parents de Karim\" uses de where English uses 's, and ages take avoir: \"il a cinq ans\"."
    }
  ],
  "a1-telling-time-2": [
    {
      "type": "write",
      "prompt": "Your evening French class starts at 18h30, but you finish work too late to get there on time. Write a short email to the language school: give your working hours and the time your bus arrives, and ask whether there is a later class. Write the times in words, using the 24-hour clock.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Give times with the 24-hour clock (\"à dix-huit heures quarante-cinq\").",
        "Use \"de... à...\" for your working hours.",
        "Say you're late with \"en retard\".",
        "Ask a polite question with \"est-ce qu'il y a\" or \"à quelle heure\"."
      ],
      "modelAnswer": "Bonjour Madame, Je travaille de neuf heures à dix-huit heures. Mon bus arrive à l'école à dix-huit heures quarante-cinq, alors je suis toujours en retard pour le cours de dix-huit heures trente. Est-ce qu'il y a un cours à dix-neuf heures trente ? Merci ! Cordialement, Ben Taylor",
      "explanation": "Timetables use the 24-hour clock: \"dix-huit heures quarante-cinq\" rather than \"sept heures moins le quart\". \"De neuf heures à dix-huit heures\" gives a span, \"en retard\" means late, and \"est-ce qu'il y a\" asks politely whether something exists."
    }
  ],
  "a1-word-web-weather": [
    {
      "type": "write",
      "prompt": "A French school magazine asks students from abroad to describe the seasons where they live. Write a short article about the weather in your country in three seasons: the temperature, what people wear and what they do.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Describe the weather with \"il fait\", \"il pleut\", \"il neige\" or \"il y a du soleil\".",
        "Name at least three seasons with the right preposition (\"en hiver\", \"au printemps\", \"en été\").",
        "Give a temperature in degrees (\"il fait moins vingt degrés\").",
        "Say what people wear or do in a season (\"on porte un manteau\")."
      ],
      "modelAnswer": "Au Canada, l'hiver est très long. Il neige souvent et il fait moins vingt degrés ! On porte un manteau et des bottes, et on fait du ski. Au printemps, il pleut beaucoup. En été, il fait chaud et il y a du soleil : on va à la plage. C'est ma saison préférée !",
      "explanation": "Weather uses impersonal il: \"il neige\", \"il pleut\", \"il fait chaud\", \"il fait moins vingt degrés\", \"il y a du soleil\". Seasons take \"en\" (\"en été\") except \"au printemps\", and \"on\" says what people in general do."
    }
  ],
  "a1-word-web-countries": [
    {
      "type": "write",
      "prompt": "Your French class in Brussels is very international. Write a short description of three classmates for the school website: the country each one comes from, their nationality and the languages they speak, and where you all live now.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Use \"venir de\" with the right form: \"de\" for feminine countries, \"du\" or \"des\" for masculine and plural ones.",
        "Give nationalities as adjectives with no capital letter and the right agreement (\"elle est portugaise\").",
        "Name languages with \"parler\" (\"il parle allemand\").",
        "Say where you live with \"à\" + city and \"en\", \"au\" or \"aux\" + country."
      ],
      "modelAnswer": "Dans ma classe, il y a des étudiants très sympas. Ana vient du Portugal : elle est portugaise et elle parle portugais. Kofi vient de Côte d'Ivoire. Il est ivoirien et il parle français. Lukas vient de Suisse : il est suisse et il parle allemand. Maintenant, nous habitons tous à Bruxelles, en Belgique.",
      "explanation": "\"Venir de\" changes with the country: \"du Portugal\" (masculine), \"de Côte d'Ivoire\" and \"de Suisse\" (feminine). Nationalities are adjectives with no capital and agree (\"portugaise\"), languages are masculine nouns (\"il parle allemand\"), and \"à Bruxelles, en Belgique\" gives the city and the feminine country."
    }
  ],
  "a1-futur-proche": [
    {
      "type": "write",
      "prompt": "Your French class is going to Paris next weekend. Write the programme for the class newsletter: what the group is going to do on Saturday and Sunday, at what time, and one thing you're not going to do.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Use aller + infinitive at least four times (\"nous allons prendre\", \"on va visiter\").",
        "Put one sentence in the negative with ne...pas around aller (\"on ne va pas aller...\").",
        "Use time words such as \"ce week-end\", \"samedi\", \"le soir\" and give one time.",
        "Use both \"nous\" and \"on\" correctly."
      ],
      "modelAnswer": "Ce week-end, la classe va visiter Paris ! Samedi, nous allons prendre le train à huit heures. L'après-midi, on va visiter le Louvre et le soir, nous allons manger au restaurant. Dimanche, on va faire une promenade à Montmartre. On ne va pas aller à la tour Eiffel : il y a trop de monde !",
      "explanation": "The near future is aller in the present + an infinitive: \"nous allons prendre\", \"on va visiter\". In the negative, ne...pas wraps aller only: \"on ne va pas aller\". \"Samedi\" with no article means this coming Saturday."
    }
  ],
  "a1-word-web-body": [
    {
      "type": "write",
      "prompt": "You're ill and can't come to your French class tomorrow. Write a short email to your teacher: apologise, say what hurts and how you feel, what you've just done and what you're going to do.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Say what hurts with \"avoir mal à\" + the right article (\"à la tête\", \"au ventre\", \"aux dents\").",
        "Say how you feel with \"je suis malade\" or another adjective with être.",
        "Say what you've just done with venir de + infinitive.",
        "Say what you're going to do with aller + infinitive, including \"aller chez le médecin\"."
      ],
      "modelAnswer": "Bonjour Madame Dubois, Je suis désolée, mais je ne vais pas venir au cours demain. Je suis malade : j'ai mal à la tête et j'ai mal au ventre. Je viens de prendre un médicament et je vais aller chez le médecin cet après-midi. À jeudi, j'espère ! Cordialement, Sophie",
      "explanation": "\"Avoir mal à\" contracts with the article: \"à la tête\" but \"au ventre\" (à + le). \"Je viens de prendre\" is the recent past and \"je vais aller chez le médecin\" the near future, with \"chez\" for a person's place."
    }
  ],
  "a1-daily-routine": [
    {
      "type": "write",
      "prompt": "Your French class blog has a series called 'Ma journée'. Write a short post describing a normal weekday for you, from waking up to going to bed, with times.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Use at least four routine verbs with me (\"je me réveille\", \"je me lève\", \"je me douche\", \"je me couche\").",
        "Give at least three times (\"à sept heures\", \"à six heures et demie\").",
        "Order the day with \"d'abord\", \"puis\", \"ensuite\" or \"le soir\".",
        "Add at least two other everyday verbs (\"je prends\", \"je pars\", \"je regarde\")."
      ],
      "modelAnswer": "Ma journée ? Je me réveille à six heures et demie, mais je me lève à sept heures ! D'abord, je me douche, puis je prends un café. Je pars au travail à huit heures. Le soir, je rentre à dix-huit heures, je fais la cuisine et je regarde la télé. Je me couche à vingt-trois heures.",
      "explanation": "Routine verbs take a pronoun matching the subject: \"je me réveille\", \"je me lève\", \"je me douche\", \"je me couche\". Times use \"à\" + heures, with \"et demie\" for half past, and \"d'abord\" and \"puis\" put the morning in order."
    }
  ],
  "a1-mission-clothes-shopping": [
    {
      "type": "write",
      "prompt": "Write a short dialogue in a clothes shop in Lyon. A customer asks for a jacket in a colour and size, compares two jackets using demonstratives, tries one on, asks the price and pays.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Ask politely with \"je cherche\" or \"je voudrais\" and a colour that agrees (\"une veste noire\").",
        "Compare two items with demonstratives and -ci / -là (\"cette veste-ci\", \"cette veste-là\").",
        "Ask the price with \"combien\" and give it in euros.",
        "Write it as a dialogue with polite formulas (\"s'il vous plaît\", \"merci\", \"bonne journée\")."
      ],
      "modelAnswer": "— Bonjour, je cherche une veste noire en 40, s'il vous plaît.\n— Voilà. Cette veste-ci est en laine et cette veste-là est en coton.\n— Je peux essayer cette veste-ci ?\n— Bien sûr.\n— Elle est parfaite ! Elle coûte combien ?\n— Quatre-vingt-dix euros.\n— Je prends cette veste. Merci, bonne journée !",
      "explanation": "\"Cette\" points to a feminine noun, and -ci / -là contrast the two jackets: \"cette veste-ci\" (this one) and \"cette veste-là\" (that one). The colour agrees with \"veste\" (\"noire\"), and \"Elle coûte combien ?\" asks the price."
    }
  ]
});
