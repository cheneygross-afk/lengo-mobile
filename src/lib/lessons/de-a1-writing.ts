// Synced from cheneygross-afk/lengo:src/lib/lessons/de-a1-writing.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { UnitWriting } from "./unitWriting";

// Extra writing tasks for this level's units, so every unit asks the learner to
// write at least three times: keyed by the lesson each is added to (see
// unitWriting.ts). Marked by the AI writing feedback like every writing task.
export const DE_A1_WRITING: UnitWriting = {
  "a1-dialogue-erstes-treffen": [
    {
      "type": "write",
      "prompt": "It's your first day at a new job in Vienna. Write the short dialogue between you and your new boss, Frau Keller, when you meet in the office: greet each other, give your names, ask how she is, and say where you are both from. Use Sie throughout.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Greets with a time-of-day greeting (\"Guten Morgen\", \"Guten Tag\") and gives names with \"Ich bin...\" or \"Ich heiße...\"",
        "Uses the Sie form of sein (\"Sind Sie...?\", \"Sie sind...\") and \"Wie geht es Ihnen?\"",
        "Asks and answers where someone is from (\"Woher kommen Sie?\", \"Ich bin aus...\")",
        "Answers how you are with a short reply (\"Danke, gut. Und Ihnen?\")"
      ],
      "modelAnswer": "Frau Keller: Guten Morgen! Sind Sie Herr Brown?\nTom: Ja, guten Morgen! Ich heiße Tom Brown.\nFrau Keller: Herzlich willkommen! Ich bin Anna Keller. Wie geht es Ihnen?\nTom: Danke, gut. Und Ihnen?\nFrau Keller: Sehr gut, danke. Woher kommen Sie?\nTom: Ich bin aus Manchester. Und Sie?\nFrau Keller: Ich bin aus Graz.",
      "explanation": "With a new boss you use Sie: \"Sind Sie...?\", \"Wie geht es Ihnen?\", \"Und Ihnen?\" and \"Woher kommen Sie?\". \"Guten Morgen\" fits the start of the working day, and \"Ich bin aus...\" answers the question about where you're from."
    }
  ],
  "a1-predicate-adjectives": [
    {
      "type": "write",
      "prompt": "A friend has sent you a photo of a café in Berlin. Write a short description of the photo in German: say what the café is called, describe the room, the tables or chairs and one person in it, using sein and adjectives.",
      "minWords": 20,
      "maxWords": 50,
      "rubric": [
        "Introduces the place with \"Das ist...\" and describes it with sein + adjective (\"Das Café ist klein\")",
        "Uses \"sehr\", \"ziemlich\" or \"nicht so\" to soften or strengthen an adjective",
        "Refers back to a noun with the matching pronoun, including plural \"sie\" (\"Die Stühle sind rot. Sie sind alt.\")",
        "Keeps the adjective after sein without an ending"
      ],
      "modelAnswer": "Das ist das Café Rosa in Berlin. Es ist klein, aber sehr gemütlich. Der Tisch ist rund und ziemlich alt. Die Stühle sind rot. Sie sind schön, aber unbequem. Die Lampe ist modern. Das ist die Kellnerin. Sie ist jung und sehr freundlich. Der Kaffee ist super!",
      "explanation": "Each description uses sein + an adjective with no ending (\"Es ist klein\", \"Der Tisch ist rund\"). The pronoun matches the noun: \"das Café → es\", \"die Kellnerin → sie\" and the plural \"die Stühle → sie\". \"Sehr\" and \"ziemlich\" make the adjectives stronger or softer."
    }
  ],
  "a1-sounds-umlauts": [
    {
      "type": "write",
      "prompt": "You've just moved into a shared flat in Munich. Write a short text message to a German friend about the flat and your new flatmate. Use at least five words with ä, ö or ü (for example schön, müde, Küche, Grüße), spelled correctly.",
      "minWords": 20,
      "maxWords": 50,
      "rubric": [
        "Uses at least five words with ä, ö or ü, each spelled with the umlaut (not a, o, u)",
        "Describes the flat and one room with sein + adjective (\"Die Küche ist groß\")",
        "Introduces the flatmate with his or her name, where they're from and their job, with no article before the job",
        "Opens and closes the message with a greeting (\"Hallo...\", \"Grüße\")"
      ],
      "modelAnswer": "Hallo Jörg! Die Wohnung in München ist schön. Mein Zimmer ist klein, aber hell. Die Küche ist groß. Mein Mitbewohner heißt Jürgen. Er ist aus Lübeck. Er ist Bäcker und sehr nett, aber jetzt ist er müde. Grüße, Max",
      "explanation": "The umlauts change the sound and sometimes the meaning, so they must be written: \"schön\", \"München\", \"Küche\", \"Lübeck\", \"Bäcker\", \"müde\", \"Grüße\". The flatmate is introduced with \"heißt\", \"ist aus\" and a job with no article (\"Er ist Bäcker\")."
    }
  ],
  "a1-sounds-ei-ie-diphthongs": [
    {
      "type": "write",
      "prompt": "You're on a short holiday in Leipzig. Write a postcard to a German friend: say where you are, describe the city, the hotel and the weather, and say who is with you. Use at least six words with ei, ie, eu or au (for example klein, viel, neu, Haus).",
      "minWords": 20,
      "maxWords": 50,
      "rubric": [
        "Uses at least six words with ei, ie, eu or au, spelled correctly (\"klein\", \"hier\", \"neu\", \"auch\")",
        "Never mixes up ei and ie (\"mein\", not \"mien\"; \"Bier\", not \"Beir\")",
        "Describes the city and the hotel with sein + adjective",
        "Uses a postcard greeting and closing (\"Liebe...\", \"Viele Grüße aus...\", \"Bis bald\")"
      ],
      "modelAnswer": "Liebe Heike, viele Grüße aus Leipzig! Die Stadt ist klein, aber sehr schön. Das Hotel ist neu und ziemlich teuer. Das Wetter ist heiß. Mein Freund Dieter ist auch hier. Er ist heute leider müde. Das Bier ist super! Bis bald, deine Paula",
      "explanation": "The rule of thumb is that you say the second letter: \"ei\" sounds like English eye (\"Leipzig\", \"klein\", \"heiß\", \"leider\"), \"ie\" like English ee (\"viele\", \"hier\", \"Dieter\", \"Bier\"). \"Eu\" in \"neu\" and \"heute\" sounds like oy, and \"au\" in \"auch\" like ow."
    }
  ],
  "a1-mission-week-planner": [
    {
      "type": "write",
      "prompt": "A German student is going to be your tandem partner. Write a short email about your normal week: say what you do on at least four different days (work, study, sport, friends) and ask what your partner does at the weekend.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Uses regular present-tense verbs with the right endings (\"ich arbeite\", \"wir kochen\", \"du machst\")",
        "Gives days with \"am\" (\"am Montag\", \"am Mittwoch\")",
        "Keeps the verb in second place after a day at the start (\"Am Dienstag lerne ich...\")",
        "Ends with a du-question (\"Was machst du am Wochenende?\")"
      ],
      "modelAnswer": "Hallo Clara, meine Woche ist voll! Am Montag und am Mittwoch arbeite ich im Büro. Am Dienstag lerne ich Deutsch. Am Donnerstag spiele ich Tennis mit Paul. Am Freitag kochen meine Freunde und ich zusammen. Am Samstag besuche ich meine Oma. Und du? Was machst du am Wochenende? Liebe Grüße, Sam",
      "explanation": "Regular verbs add the endings to the stem (\"arbeite\", \"lerne\", \"spiele\", \"kochen\", \"machst\"). When a day comes first, the verb stays second and the subject follows it: \"Am Dienstag lerne ich Deutsch\"."
    }
  ],
  "a1-haben-2": [
    {
      "type": "write",
      "prompt": "You're on your way home after a long day. Write a short text message to your flatmate: say how you feel with haben expressions (hungry, thirsty, no time...), ask what you both have at home, and agree with something your flatmate said this morning.",
      "minWords": 20,
      "maxWords": 50,
      "rubric": [
        "Uses at least three haben + noun expressions (\"Ich habe Hunger\", \"Durst\", \"keine Zeit\", \"Glück\")",
        "Asks a question with haben (\"Haben wir noch Brot?\", \"Hast du...?\")",
        "Uses \"Du hast recht\" to agree",
        "Uses the right forms of haben (\"ich habe\", \"du hast\", \"wir haben\")"
      ],
      "modelAnswer": "Hallo Ben! Ich komme jetzt. Ich habe Hunger und Durst! Haben wir noch Brot und Käse? Du hast recht, der Kühlschrank ist fast leer. Hast du heute Abend Zeit? Wir kochen zusammen, ja? Ich habe Glück, der Bus ist pünktlich. Bis gleich! Lea",
      "explanation": "German says you have hunger, thirst or luck: \"Ich habe Hunger\", \"Durst\", \"Glück\", with no article. \"Du hast recht\" means you're right, and questions put haben first (\"Haben wir...?\", \"Hast du...?\")."
    }
  ],
  "a1-moegen-moechte": [
    {
      "type": "write",
      "prompt": "You're meeting a friend in a café in Hamburg. Write a short dialogue between you, your friend and the waiter: say what you like and don't like, then order politely.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Says what you like and dislike with mögen (\"Ich mag Kaffee\", \"Magst du Tee?\")",
        "Orders politely with möchte (\"Ich möchte einen Tee, bitte\")",
        "Uses a question form for the waiter (\"Was möchten Sie?\") and du between the friends",
        "Ends the order with a thank-you or \"bitte\""
      ],
      "modelAnswer": "Kellner: Guten Tag! Was möchten Sie?\nLina: Mia, magst du Apfelkuchen?\nMia: Nein, ich mag Apfelkuchen nicht so. Ich mag Schokolade!\nLina: Dann möchte ich einen Kaffee und ein Stück Apfelkuchen, bitte.\nMia: Und ich möchte einen Tee und ein Stück Schokoladenkuchen.\nKellner: Gern!",
      "explanation": "\"Mögen\" says what you like in general (\"Ich mag Schokolade\", \"Magst du...?\"), while \"möchte\" is the polite way to order (\"Ich möchte einen Kaffee\"). The waiter uses Sie (\"Was möchten Sie?\"), the friends use du."
    }
  ],
  "a1-duerfen-sollen": [
    {
      "type": "write",
      "prompt": "A friend is staying in your flat while you're away. Write a short note with the house rules: what your friend may and may not do, what they should do, and one rule of the building with man.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Gives permission with \"du darfst\" and forbids with \"du darfst nicht\"",
        "Passes on instructions with \"du sollst\" (\"Du sollst die Blumen gießen\")",
        "States a general rule with \"man darf\" or \"man soll\"",
        "Puts the infinitive at the end of the sentence"
      ],
      "modelAnswer": "Hallo Paul! Willkommen! Du darfst alles essen und trinken. Du darfst auch mein Fahrrad nehmen. Aber du darfst hier nicht rauchen. Du sollst jeden Tag die Blumen gießen. Meine Nachbarin, Frau Kurz, ist sehr nett, aber nach zehn Uhr darf man nicht laut sein. Viel Spaß! Anna",
      "explanation": "\"Dürfen\" gives permission and \"nicht dürfen\" forbids, while \"sollen\" passes on what someone else wants you to do. \"Man darf\" states a general rule, and in every sentence the second verb goes to the end (\"Du darfst mein Fahrrad nehmen\")."
    }
  ],
  "a1-yes-no-questions-doch": [
    {
      "type": "write",
      "prompt": "Your friend Max thinks your new home town is boring. Write a short dialogue: Max asks yes/no questions and makes negative comments, and you answer with ja, nein and doch.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Asks yes/no questions with the verb first (\"Hast du...?\", \"Ist die Stadt...?\")",
        "Contradicts a negative question or statement with \"doch\"",
        "Answers other questions with \"ja\" or \"nein\" and a full sentence",
        "Uses \"nicht\" or \"kein\" in at least one negative question"
      ],
      "modelAnswer": "Max: Ist deine Stadt nicht langweilig?\nIch: Nein, sie ist super!\nMax: Gibt es kein Kino?\nIch: Doch, es gibt zwei Kinos.\nMax: Hast du keine Freunde dort?\nIch: Doch, ich habe viele Freunde.\nMax: Ist die Wohnung groß?\nIch: Ja, sie ist groß und hell.\nMax: Kommst du am Samstag?\nIch: Ja, gern!",
      "explanation": "Yes/no questions start with the verb (\"Hast du...?\", \"Ist die Wohnung...?\"). After a negative question you contradict with \"doch\" (\"Gibt es kein Kino? Doch!\"), while a positive question gets \"ja\" or \"nein\"."
    }
  ],
  "a1-es-gibt": [
    {
      "type": "write",
      "prompt": "Write a short description of your neighbourhood for a German website where people swap flats for the holidays. Say what there is and what there isn't nearby (shops, a park, a station, a cinema...).",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Uses \"es gibt\" + accusative (\"Es gibt einen Park\", \"einen Supermarkt\")",
        "Says what isn't there with \"es gibt keinen / keine / kein\"",
        "Keeps \"gibt\" singular even with plural nouns (\"Es gibt viele Cafés\")",
        "Gives at least one opinion with sein + adjective"
      ],
      "modelAnswer": "Meine Wohnung ist in Köln-Ehrenfeld. Das Viertel ist laut, aber sehr schön. Hier gibt es einen Supermarkt, eine Bäckerei und viele Cafés. Es gibt auch einen Park. Er ist klein, aber grün. Es gibt keinen Bahnhof, aber die U-Bahn ist nah. Ein Kino gibt es leider nicht.",
      "explanation": "\"Es gibt\" always takes the accusative, so masculine nouns change: \"einen Supermarkt\", \"einen Park\", \"keinen Bahnhof\". \"Gibt\" stays singular even before a plural (\"Es gibt viele Cafés\"), and \"es gibt ... nicht\" or \"kein\" says what is missing."
    }
  ],
  "a1-possessives-2": [
    {
      "type": "write",
      "prompt": "Your shared flat's kitchen is a mess. Write a note for the fridge door telling your flatmates whose things are whose and what they should tidy, using possessives like unser, euer and Annas.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Uses \"unser\" and \"euer\" with the right endings (\"unsere Küche\", \"eure Teller\")",
        "Says whose something is with -s or von (\"Annas Tasse\", \"die Jacke von Tom\")",
        "Uses at least one possessive in the accusative (\"Bitte nehmt euren Käse\")",
        "Addresses the flatmates with ihr"
      ],
      "modelAnswer": "Hallo Leute! Unsere Küche ist ein Chaos! Annas Tasse ist auf dem Tisch. Die Jacke von Tom ist hier. Ist das euer Käse? Er ist sehr alt! Bitte nehmt eure Teller und euren Käse. Mein Kaffee ist im Schrank. Danke! Eure Mia",
      "explanation": "\"Unser\" and \"euer\" take the same endings as \"ein\": \"unsere Küche\", \"euer Käse\", and in the accusative \"euren Käse\". \"Euer\" drops its e before an ending (\"eure\", not \"euere\"), and ownership uses -s with no apostrophe (\"Annas Tasse\") or \"von\"."
    }
  ],
  "a1-numbers-2": [
    {
      "type": "write",
      "prompt": "You're moving out and want to sell three things. Write a short ad for the noticeboard in your building: say what you're selling, how old each thing is, what it costs, and give your phone number.",
      "minWords": 20,
      "maxWords": 50,
      "rubric": [
        "Gives prices in euros, written in words or with a decimal comma (\"25 Euro\", \"9,50 Euro\")",
        "Says how old things are (\"Es ist zwei Jahre alt\")",
        "Gives a phone number and a name",
        "Describes each thing with sein + adjective"
      ],
      "modelAnswer": "Ich verkaufe: ein Fahrrad, sehr gut, drei Jahre alt, 120 Euro. Einen Tisch, ziemlich klein, aus 2019, nur 35 Euro. Eine Lampe, neu, 12,50 Euro. Interesse? Meine Nummer ist 0176 452 318. Viele Grüße, Jonas",
      "explanation": "Prices use \"Euro\" in the singular and a decimal comma (\"12,50 Euro\"), and age is \"drei Jahre alt\". A year after \"aus\" is read as a number (\"zweitausendneunzehn\"), and phone numbers are read in single digits or pairs."
    }
  ],
  "a1-weather": [
    {
      "type": "write",
      "prompt": "You're on holiday at the Baltic Sea. Write a postcard to a German friend: say where you are, describe the weather today and what it's usually like in summer there, and say how you feel (cold, warm...).",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Describes the weather with impersonal \"es\" (\"Es regnet\", \"Es ist windig\", \"Es sind 18 Grad\")",
        "Says how you feel with \"mir ist kalt\" or \"mir ist warm\"",
        "Uses a season or month with \"im\" (\"im Sommer\", \"im Juli\")",
        "Uses a postcard greeting and closing"
      ],
      "modelAnswer": "Liebe Sara, viele Grüße aus Warnemünde! Das Meer ist toll, aber das Wetter ist schlecht. Heute regnet es und es ist windig. Es sind nur 16 Grad und mir ist kalt! Im Sommer ist es hier oft sonnig und warm, aber nicht heiß. Morgen scheint die Sonne. Bis bald! Dein Leo",
      "explanation": "Weather verbs take \"es\": \"es regnet\", \"es ist windig\", \"es sind 16 Grad\". To say you feel cold, German uses \"mir ist kalt\", not \"ich bin kalt\", and seasons and months take \"im\"."
    }
  ],
  "a1-word-web-countries-languages": [
    {
      "type": "write",
      "prompt": "Your German course is making a poster of the class. Write a short profile of a classmate: their name, where they come from, where they live now, which languages they speak and which country they'd like to visit.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Uses \"kommt aus\" with a country or city, and \"aus der\" with country names that have an article (\"aus der Schweiz\", \"aus der Türkei\")",
        "Says where the person lives with \"wohnt in\"",
        "Names at least two languages with \"spricht\" (\"Sie spricht Spanisch und Englisch\")",
        "Uses a nationality noun (\"Sie ist Spanierin\", \"Er ist Italiener\")"
      ],
      "modelAnswer": "Das ist Lucía. Sie ist Spanierin und kommt aus Sevilla. Jetzt wohnt sie in Hamburg. Sie ist Studentin. Lucía spricht Spanisch, Englisch und ein bisschen Deutsch. Ihr Freund ist Schweizer, er kommt aus der Schweiz. Lucía möchte gern nach Österreich fahren.",
      "explanation": "\"Kommen aus\" gives origin, and countries with an article take it after \"aus\" (\"aus der Schweiz\"). Languages have no article (\"Sie spricht Spanisch\"), nationalities have a feminine form in -in (\"Spanierin\"), and \"nach\" is used for countries without an article (\"nach Österreich\")."
    }
  ],
  "a1-likes-gern-2": [
    {
      "type": "write",
      "prompt": "Write a short profile for a German language-exchange website about your hobbies: say what you like doing, what you prefer and what you like doing best of all, and what you don't like doing.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Says what you like doing with verb + \"gern\" (\"Ich lese gern\")",
        "Says what you prefer with \"lieber\" (\"Ich schwimme lieber\")",
        "Says what you like best with \"am liebsten\"",
        "Says what you don't like doing with \"nicht gern\""
      ],
      "modelAnswer": "Hallo! Ich bin Kim und ich bin 25. Ich lese gern und ich koche gern. Ich spiele gern Fußball, aber ich schwimme lieber. Am liebsten wandere ich in den Bergen. Ich tanze nicht gern und ich putze nicht gern. Was machst du gern?",
      "explanation": "Liking an activity is the verb + \"gern\" (\"Ich lese gern\"); \"lieber\" means you prefer something and \"am liebsten\" that you like it best. When \"Am liebsten\" opens the sentence the verb comes next (\"Am liebsten wandere ich\"), and \"nicht gern\" says you don't like doing it."
    }
  ],
  "a1-daily-routine": [
    {
      "type": "write",
      "prompt": "Write a diary entry about a normal weekday: when you get up, what you do in the morning, when you go shopping or meet friends, and when you go to bed. Use at least four separable verbs and words like zuerst, dann and danach.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Uses at least four separable verbs with the prefix at the end (\"Ich stehe um sieben Uhr auf\")",
        "Gives times with \"um\" (\"um halb acht\", \"um 22 Uhr\")",
        "Orders the day with \"zuerst\", \"dann\" and \"danach\", with the verb in second place",
        "Writes in the first person with correct present-tense forms"
      ],
      "modelAnswer": "Liebes Tagebuch, mein Tag ist immer gleich. Ich stehe um sieben Uhr auf. Zuerst trinke ich einen Kaffee, dann fahre ich zur Arbeit. Um zwölf Uhr rufe ich meine Mutter an. Danach arbeite ich bis fünf. Am Abend kaufe ich ein und koche. Um elf Uhr sehe ich ein bisschen fern und schlafe ein.",
      "explanation": "Separable verbs split: the verb goes second and the prefix to the very end (\"Ich stehe um sieben Uhr auf\", \"Ich kaufe ein\", \"ich sehe fern\"). After \"Zuerst\", \"dann\", \"Danach\" or a time the verb stays in second place."
    }
  ],
  "a1-dieser-jeder-2": [
    {
      "type": "write",
      "prompt": "You're at a flea market with a friend, looking for a lamp and a chair for your new flat. Write a short dialogue between you and the seller: point things out, ask which one costs what, and decide.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Points things out the spoken way with \"der hier\", \"die da\" or \"das da\"",
        "Asks \"welcher?\", \"welche?\" or \"welches?\" with the right ending",
        "Uses \"dieser / diese / dieses\" at least once",
        "Asks and answers about the price (\"Was kostet...?\", \"Wie viel...?\")"
      ],
      "modelAnswer": "Ich: Entschuldigung, was kostet die Lampe?\nVerkäufer: Welche? Die hier?\nIch: Nein, die da. Die rote.\nVerkäufer: Die kostet zehn Euro.\nIch: Und dieser Stuhl?\nVerkäufer: Welcher? Der da ist alt, aber gut. Fünfzehn Euro.\nIch: Und der hier?\nVerkäufer: Acht Euro.\nIch: Gut, ich nehme die Lampe und diesen Stuhl.",
      "explanation": "In speech Germans point with the article and \"hier\" or \"da\" (\"die hier\", \"der da\"). \"Welcher?\" and \"dieser\" take the endings of der, die, das, so the masculine object becomes \"diesen Stuhl\" in the accusative."
    }
  ],
  "a1-asking-the-way": [
    {
      "type": "write",
      "prompt": "A German friend is visiting you for the first time and arrives at the station. Write a short email explaining how to walk from the station to your flat, and say how far it is.",
      "minWords": 25,
      "maxWords": 60,
      "rubric": [
        "Gives directions with \"geradeaus\", \"links\", \"rechts\" and \"die erste / zweite Straße\"",
        "Says how far or how long with \"Es ist nicht weit\" or \"zehn Minuten zu Fuß\"",
        "Uses the du imperative or \"du gehst...\" for each step",
        "Names at least one landmark with a place preposition (\"neben dem Supermarkt\", \"gegenüber\")"
      ],
      "modelAnswer": "Hallo Nora, es ist nicht weit, nur zehn Minuten zu Fuß. Vor dem Bahnhof gehst du links. Dann gehst du geradeaus bis zur Kirche. Dort nimmst du die zweite Straße rechts. Das ist die Gartenstraße. Mein Haus ist Nummer 12, neben dem Supermarkt. Bis Samstag! Lukas",
      "explanation": "Directions use \"links\", \"rechts\", \"geradeaus\" and ordinals for streets (\"die zweite Straße rechts\"). Each step uses \"du gehst\" or \"du nimmst\" with the verb second, and \"zehn Minuten zu Fuß\" says how far it is."
    }
  ]
};
