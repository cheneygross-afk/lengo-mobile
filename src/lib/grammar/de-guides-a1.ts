// Synced from cheneygross-afk/lengo:src/lib/grammar/de-guides-a1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { DeGrammarGuide } from "./de-types";

// German grammar guides, A1 (see ./de-types.ts for the shape and conventions).
export const DE_A1_GUIDES: DeGrammarGuide[] = [
  {
    slug: "der-die-das-gender",
    title: "Gender and Articles: Der, Die, Das",
    description:
      "How German noun gender works, the articles der, die, das and ein, eine, the endings that predict gender, and why every noun should be learned with its article.",
    level: "A1",
    intro: [
      `Every German noun belongs to one of three genders: masculine, feminine or neuter. The gender shows up in the little word in front of the noun: "der Tisch" (the table, masculine), "die Lampe" (the lamp, feminine), "das Bett" (the bed, neuter). English lost its genders centuries ago, so this is the first real surprise of German.`,
      `Gender is grammatical, not biological. A girl is neuter ("das Mädchen"), a spoon is masculine ("der Löffel"), a fork is feminine ("die Gabel"). You cannot reason your way to most genders, but there are endings that predict them reliably, and the article you learn with each noun will pay off in every later topic: cases, pronouns and adjective endings all build on it.`,
    ],
    sections: [
      {
        heading: `The definite and indefinite articles`,
        body: [
          `The definite article (the) has three singular forms, "der", "die" and "das", and one plural form, "die", for all genders. The indefinite article (a, an) is "ein" for masculine and neuter and "eine" for feminine. There is no plural of "ein": "ein Buch" becomes simply "Bücher" (books).`,
          `Nouns are always written with a capital letter in German, wherever they are in the sentence: "das Haus", "ich habe einen Hund". This is a useful clue when you read: a capitalised word in the middle of a sentence is a noun.`,
        ],
        table: {
          headers: ["", "Masculine", "Feminine", "Neuter", "Plural"],
          rows: [
            ["the", "der Mann", "die Frau", "das Kind", "die Kinder"],
            ["a, an", "ein Mann", "eine Frau", "ein Kind", "Kinder"],
            ["not a, no", "kein Mann", "keine Frau", "kein Kind", "keine Kinder"],
          ],
        },
        examples: [
          { de: "Der Kaffee ist heiß.", en: "The coffee is hot." },
          { de: "Die Wohnung ist klein, aber schön.", en: "The flat is small but nice." },
          { de: "Das Wetter ist gut.", en: "The weather is good." },
          { de: "Das ist ein Problem.", en: "That's a problem." },
          { de: "Hier ist eine Apotheke.", en: "There's a pharmacy here." },
        ],
      },
      {
        heading: `Endings that predict the gender`,
        body: [
          `Many endings tell you the gender with almost no exceptions. Learn these and a large share of new nouns sorts itself. Words for male people are usually masculine ("der Vater", "der Lehrer") and female people feminine ("die Mutter", "die Lehrerin"), with "-in" turning a masculine job title into a feminine one.`,
          `Compound nouns take the gender of their last part: "die Tür" + "der Schlüssel" = "der Türschlüssel" (the door key). "Das Haus" + "die Tür" = "die Haustür" (the front door). This rule has no exceptions, and German makes compounds constantly.`,
        ],
        table: {
          headers: ["Gender", "Typical endings and groups", "Examples"],
          rows: [
            ["der", "-er (people, tools), -ling, -ismus; days, months, seasons", "der Lehrer, der Montag, der Winter"],
            ["die", "-ung, -heit, -keit, -schaft, -ion, -tät, -in; most nouns in -e", "die Zeitung, die Freiheit, die Information, die Lampe"],
            ["das", "-chen, -lein (small things), -ment, -um; verbs used as nouns", "das Mädchen, das Zentrum, das Essen"],
          ],
        },
        examples: [
          { de: "die Wohnung, die Meinung, die Rechnung", en: "the flat, the opinion, the bill" },
          { de: "das Mädchen, das Brötchen, das Häuschen", en: "the girl, the bread roll, the little house" },
          { de: "der Kühlschrank, der Bahnhof, der Geburtstag", en: "the fridge, the station, the birthday" },
          { de: "die Freundschaft, die Möglichkeit, die Nation", en: "the friendship, the possibility, the nation" },
        ],
      },
      {
        heading: `"Er", "sie" and "es" follow the noun`,
        body: [
          `When a pronoun replaces a noun, it follows the noun's grammatical gender, not its meaning. "Der Tisch" is "er" (he), "die Lampe" is "sie" (she), "das Bett" is "es" (it). English speakers reach for it every time, but German only uses "es" for neuter nouns.`,
          `This is why learning the article matters so much: the moment you say "the table is new" and then "it is expensive", you need the gender again. "Der Tisch ist neu. Er ist teuer."`,
        ],
        examples: [
          { de: "Wo ist der Schlüssel? Er ist in der Tasche.", en: "Where's the key? It's in the bag." },
          { de: "Die Suppe ist gut. Sie ist auch heiß.", en: "The soup is good. It's hot too." },
          { de: "Das Auto ist alt, aber es fährt gut.", en: "The car is old, but it runs well." },
          { de: "Wo ist das Messer? Es ist in der Schublade.", en: "Where's the knife? It's in the drawer." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Der Mädchen ist nett.",
        right: "Das Mädchen ist nett.",
        why: `Every noun ending in "-chen" is neuter, even when it refers to a girl.`,
      },
      {
        wrong: "Der Tisch ist neu. Es ist teuer.",
        right: "Der Tisch ist neu. Er ist teuer.",
        why: `The pronoun copies the noun's gender. "Der Tisch" is masculine, so it is "er".`,
      },
      {
        wrong: "Ich habe ein Bücher.",
        right: "Ich habe Bücher.",
        why: `"Ein" has no plural. Plural nouns simply drop the article when they are indefinite.`,
      },
      {
        wrong: "Ich trinke einen tee.",
        right: "Ich trinke einen Tee.",
        why: `All nouns are capitalised in German, not only names.`,
      },
      {
        wrong: "Der Zeitung ist auf dem Tisch.",
        right: "Die Zeitung ist auf dem Tisch.",
        why: `Nouns ending in "-ung" are always feminine.`,
      },
    ],
    faqs: [
      {
        q: `Is there a trick for guessing the gender?`,
        a: `The endings in the table above cover a lot. Beyond that, the honest answer is to learn every noun with its article, as one unit: not "Tisch, table" but "der Tisch". Many learners colour-code their notes (blue for der, red for die, green for das), which helps visual memory.`,
      },
      {
        q: `Why is "die" both feminine and plural?`,
        a: `Historically the forms merged. In practice the noun's ending usually shows which one you have: "die Frau" (one woman), "die Frauen" (women). Later, in other cases, the two separate again: the dative is "der Frau" but "den Frauen".`,
      },
      {
        q: `Do Germans ever get gender wrong?`,
        a: `Rarely with everyday words, but a few nouns vary by region, such as "der" or "das Joghurt" (both are accepted), and some loanwords waver: "die E-Mail" in Germany, "das E-Mail" in parts of Austria and Switzerland.`,
      },
    ],
    related: ["german-noun-plurals", "nominative-accusative", "possessive-articles"],
    lessons: ["a1-gender-articles-1", "a1-gender-articles-2", "a1-contrast-articles"],
  },
  {
    slug: "german-noun-plurals",
    title: "Noun Plurals: The Patterns Behind -e, -er, -n and -s",
    description:
      "German has several plural endings, often with an umlaut. Learn the five main patterns, which nouns tend to take which, and why the plural article is always die.",
    level: "A1",
    intro: [
      `English adds -s to almost everything. German has five main plural patterns, and some of them add an umlaut too: "der Tisch, die Tische", "das Buch, die Bücher", "die Lampe, die Lampen", "das Auto, die Autos", and "der Lehrer, die Lehrer", which does not change at all.`,
      `Plurals are less chaotic than they first look. The gender and ending of a noun predict its plural quite well, and the article in the plural is always the same: "die". Learn each new noun with its article and plural, the way dictionaries list it: "der Tisch, -e".`,
    ],
    sections: [
      {
        heading: `The five patterns`,
        body: [
          `Dictionaries show the plural in short form: "-e" means add -e, "¨-e" means add -e and an umlaut, "-" means no change. The umlaut always goes on the stressed vowel: a becomes ä, o becomes ö, u becomes ü, au becomes äu.`,
        ],
        table: {
          headers: ["Pattern", "Typical nouns", "Examples"],
          rows: [
            ["-e (often with umlaut)", "many masculine nouns, one-syllable nouns", "der Tag, die Tage; der Stuhl, die Stühle"],
            ["-(e)n", "almost all feminine nouns", "die Frau, die Frauen; die Lampe, die Lampen"],
            ["-er (with umlaut if possible)", "many short neuter nouns", "das Kind, die Kinder; das Haus, die Häuser"],
            ["no ending (sometimes umlaut)", "masculine and neuter in -er, -el, -en; -chen, -lein", "der Lehrer, die Lehrer; der Vater, die Väter"],
            ["-s", "words ending in a vowel other than -e, loanwords", "das Auto, die Autos; das Handy, die Handys"],
          ],
        },
        examples: [
          { de: "Die Kinder spielen im Garten.", en: "The children are playing in the garden." },
          { de: "Ich brauche zwei Stühle.", en: "I need two chairs." },
          { de: "Die Zimmer sind groß.", en: "The rooms are big." },
          { de: "Wir haben drei Katzen.", en: "We have three cats." },
          { de: "Die Hotels sind voll.", en: "The hotels are full." },
        ],
      },
      {
        heading: `Rules of thumb that work`,
        body: [
          `Feminine nouns: about nine in ten take "-n" or "-en", and never an umlaut in that pattern. "Die Zeitung, die Zeitungen", "die Tür, die Türen". Feminine nouns in "-in" double the n: "die Lehrerin, die Lehrerinnen".`,
          `Nouns ending in "-chen" and "-lein" never change: "das Mädchen, die Mädchen". Neither do most masculine and neuter nouns ending in "-er", "-el" and "-en", although some add an umlaut: "der Apfel, die Äpfel", "der Bruder, die Brüder". In these cases only the article tells you singular from plural, so listen for "die".`,
          `The "-s" plural is for words that sound foreign or end in a full vowel: "das Café, die Cafés", "die Oma, die Omas", "das Kino, die Kinos". It is less common than English speakers expect, so do not use it as a default.`,
        ],
        examples: [
          { de: "eine Freundin, zwei Freundinnen", en: "one (female) friend, two (female) friends" },
          { de: "ein Apfel, drei Äpfel", en: "one apple, three apples" },
          { de: "das Zimmer, die Zimmer", en: "the room, the rooms" },
          { de: "ein Brötchen, zehn Brötchen", en: "one bread roll, ten bread rolls" },
        ],
      },
      {
        heading: `The plural article and pronoun`,
        body: [
          `Whatever the gender in the singular, the plural takes "die", "keine" and possessives ending in "-e" ("meine Kinder"). The pronoun for any plural is "sie" (they), with a plural verb: "Die Äpfel sind frisch. Sie sind lecker."`,
        ],
        examples: [
          { de: "Der Bus kommt. Die Busse kommen.", en: "The bus is coming. The buses are coming." },
          { de: "Das Buch ist neu. Die Bücher sind neu.", en: "The book is new. The books are new." },
          { de: "Ich habe keine Geschwister.", en: "I don't have any brothers or sisters." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ich habe zwei Kinds.",
        right: "Ich habe zwei Kinder.",
        why: `"-s" is not the default plural in German. "Das Kind" takes "-er": "die Kinder".`,
      },
      {
        wrong: "Die Lehrerins sind nett.",
        right: "Die Lehrerinnen sind nett.",
        why: `Feminine nouns in "-in" form the plural with "-nen".`,
      },
      {
        wrong: "Das Bücher ist teuer.",
        right: "Die Bücher sind teuer.",
        why: `Every plural takes "die" and a plural verb.`,
      },
      {
        wrong: "Ich kaufe drei Apfel.",
        right: "Ich kaufe drei Äpfel.",
        why: `"Der Apfel" adds an umlaut in the plural, with no ending. Without the umlaut you have said one apple.`,
      },
    ],
    faqs: [
      {
        q: `Do I really have to learn every plural?`,
        a: `For the common nouns, yes, but the patterns above mean you will often guess right, especially for feminine nouns. Learn new nouns in a set of three: "der Stuhl, die Stühle". After a few hundred nouns, your guesses for new ones will become reliable.`,
      },
      {
        q: `Why do some plurals have umlauts?`,
        a: `It is a sound change from older German, the same one that gave English foot and feet, mouse and mice. German kept far more of these pairs. The umlaut changes the pronunciation, so practise hearing the difference between "Mutter" and "Mütter".`,
      },
    ],
    related: ["der-die-das-gender", "nominative-accusative", "numbers-time-dates"],
    lessons: ["a1-noun-plurals", "a1-contrast-articles", "a1-transform-number-person"],
  },
  {
    slug: "sein-haben-du-sie",
    title: "Sein, Haben and the Choice of Du or Sie",
    description:
      "The German subject pronouns, the irregular present of sein (to be) and haben (to have), and when to say du, ihr or Sie.",
    level: "A1",
    intro: [
      `German has three words for you: "du" for one person you know well, "ihr" for several such people, and "Sie" for anyone you address formally, one person or many. Choosing correctly is part of being polite, and it changes the verb form too.`,
      `The two verbs you need from day one, "sein" (to be) and "haben" (to have), are both irregular. Learn them as blocks: they are the most frequent verbs in the language, and later they also build the past tense.`,
    ],
    sections: [
      {
        heading: `The pronouns with "sein" and "haben"`,
        body: [
          `Notice the three meanings of "sie": "sie ist" (she is), "sie sind" (they are), and with a capital S, "Sie sind" (you are, formal). The verb ending and the capital letter tell them apart. Formal "Sie" always takes the same verb form as "they".`,
          `"Ich" is only capitalised at the start of a sentence, unlike English I. "Ich bin" is I am; "ich habe" is I have, often shortened to "ich hab" in speech.`,
        ],
        table: {
          headers: ["Pronoun", "Meaning", "sein", "haben"],
          rows: [
            ["ich", "I", "ich bin", "ich habe"],
            ["du", "you (one person, informal)", "du bist", "du hast"],
            ["er / sie / es", "he / she / it", "er ist", "er hat"],
            ["wir", "we", "wir sind", "wir haben"],
            ["ihr", "you (several, informal)", "ihr seid", "ihr habt"],
            ["sie", "they", "sie sind", "sie haben"],
            ["Sie", "you (formal, one or more)", "Sie sind", "Sie haben"],
          ],
        },
        examples: [
          { de: "Ich bin Anna und ich komme aus Leeds.", en: "I'm Anna and I'm from Leeds." },
          { de: "Bist du müde?", en: "Are you tired?" },
          { de: "Wir sind in Berlin.", en: "We're in Berlin." },
          { de: "Habt ihr Zeit?", en: "Do you (all) have time?" },
          { de: "Haben Sie eine Frage?", en: "Do you have a question?" },
        ],
      },
      {
        heading: `"Du" or "Sie"?`,
        body: [
          `Use "Sie" with adults you do not know: in shops, offices, with your landlord, the doctor, colleagues in traditional workplaces and anyone older or senior. Use "du" with friends, family, children, and among students and young people. Many modern offices, start-ups and online communities default to "du".`,
          `When unsure, start with "Sie". The offer to switch usually comes from the older or more senior person: "Wollen wir uns duzen?" (shall we say du?). Saying "du" to a stranger can sound rude; "Sie" to a child just sounds stiff. Your choice changes other words too: "Wie geht es dir?" vs "Wie geht es Ihnen?".`,
        ],
        examples: [
          { de: "Entschuldigung, sind Sie Frau Becker?", en: "Excuse me, are you Ms Becker?" },
          { de: "Hallo Tim, hast du heute Abend Zeit?", en: "Hi Tim, are you free this evening?" },
          { de: "Kinder, seid ihr fertig?", en: "Kids, are you ready?" },
          { de: "Wollen wir uns duzen?", en: "Shall we say du to each other?" },
        ],
      },
      {
        heading: `Where German uses "haben" and English uses be`,
        body: [
          `Several everyday feelings are expressed with "haben" in German: "Ich habe Hunger" (I'm hungry), "Ich habe Durst" (I'm thirsty), "Ich habe Angst" (I'm afraid), "Ich habe keine Zeit" (I'm busy, I don't have time). Saying "ich bin hungrig" is grammatical but sounds bookish.`,
          `Age goes the other way: German uses "sein" like English. "Ich bin dreißig (Jahre alt)." Never "ich habe dreißig Jahre".`,
        ],
        examples: [
          { de: "Ich habe Hunger. Hast du auch Hunger?", en: "I'm hungry. Are you hungry too?" },
          { de: "Er hat heute Geburtstag.", en: "It's his birthday today." },
          { de: "Wir haben recht.", en: "We're right." },
          { de: "Meine Tochter ist sieben.", en: "My daughter is seven." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Guten Tag, Herr Schmidt. Wie geht es dir?",
        right: "Guten Tag, Herr Schmidt. Wie geht es Ihnen?",
        why: `Someone you address as "Herr" or "Frau" gets "Sie" and its forms ("Ihnen").`,
      },
      {
        wrong: "Ihr sind sehr nett.",
        right: "Ihr seid sehr nett.",
        why: `The informal plural "ihr" has its own form of sein: "seid".`,
      },
      {
        wrong: "Ich habe dreißig Jahre.",
        right: "Ich bin dreißig Jahre alt.",
        why: `Age uses "sein" in German, as in English.`,
      },
      {
        wrong: "Ich bin Hunger.",
        right: "Ich habe Hunger.",
        why: `Hunger and thirst are nouns you have: "Ich habe Hunger", "ich habe Durst".`,
      },
      {
        wrong: "Haben sie Zeit, Frau Weber?",
        right: "Haben Sie Zeit, Frau Weber?",
        why: `Formal you is always written with a capital S; lower-case "sie" means she or they.`,
      },
    ],
    faqs: [
      {
        q: `How do I tell "sie" (she), "sie" (they) and "Sie" (you) apart?`,
        a: `The verb ending helps: "sie ist" is she, "sie sind" is they or formal you. In writing, the capital letter marks formal you. In speech, context does the rest: if someone looks at you and says "Sind Sie fertig?", it is you.`,
      },
      {
        q: `Is "du" rude in writing?`,
        a: `Not in messages to friends, and many companies and websites now use "du" with customers. In formal letters and emails to people you do not know, use "Sie". When writing "du" in letters, both "du" and "Du" are correct.`,
      },
    ],
    related: ["german-present-tense", "der-die-das-gender", "verb-second-word-order"],
    lessons: ["a1-greetings-pronouns", "a1-sein-present", "a1-sein-articles-extra-4", "a1-haben-1", "a1-haben-2"],
  },
  {
    slug: "german-present-tense",
    title: "The Present Tense and Stem-Changing Verbs",
    description:
      "German present-tense endings, the verbs whose vowel changes with du and er (fahren, fährt; sprechen, spricht), and why one tense covers I do, I am doing and even I will do.",
    level: "A1",
    intro: [
      `The German present tense does the work of several English tenses. "Ich arbeite" means I work, I am working and, with a time word, I will work: "Ich arbeite morgen" (I'm working tomorrow). There is no German equivalent of the -ing form, so you never need "ich bin arbeiten".`,
      `The endings are regular for almost every verb. The challenge is a group of common verbs that change their stem vowel in the du and er/sie/es forms: "ich fahre" but "du fährst", "ich spreche" but "er spricht".`,
    ],
    sections: [
      {
        heading: `The regular endings`,
        body: [
          `Take the infinitive, remove "-en" (or "-n"), and add the ending for each person. The wir, sie and Sie forms look like the infinitive. If the stem ends in -t or -d, add an extra -e- before endings that start with a consonant: "du arbeitest", "er findet". If it ends in -s, -ß or -z, the du form only adds -t: "du heißt", "du tanzt".`,
        ],
        table: {
          headers: ["Person", "Ending", "wohnen (to live)", "arbeiten (to work)"],
          rows: [
            ["ich", "-e", "ich wohne", "ich arbeite"],
            ["du", "-st", "du wohnst", "du arbeitest"],
            ["er / sie / es", "-t", "er wohnt", "er arbeitet"],
            ["wir", "-en", "wir wohnen", "wir arbeiten"],
            ["ihr", "-t", "ihr wohnt", "ihr arbeitet"],
            ["sie / Sie", "-en", "sie wohnen", "sie arbeiten"],
          ],
        },
        examples: [
          { de: "Ich wohne in Hamburg.", en: "I live in Hamburg." },
          { de: "Was machst du gerade?", en: "What are you doing right now?" },
          { de: "Sie arbeitet bei einer Bank.", en: "She works at a bank." },
          { de: "Wir lernen seit drei Monaten Deutsch.", en: "We've been learning German for three months." },
          { de: "Morgen spielen wir Fußball.", en: "We're playing football tomorrow." },
        ],
      },
      {
        heading: `Stem-changing verbs`,
        body: [
          `Some strong verbs change their vowel only in the du and er/sie/es forms. The other four forms are regular. There are three main patterns: a becomes ä, e becomes i, and e becomes ie. Dictionaries mark these verbs, and you should learn the er form with the infinitive: "fahren, er fährt".`,
          `"Nehmen" also changes its consonants: "du nimmst, er nimmt". "Werden" is irregular in the same two forms: "du wirst, er wird". "Wissen" (to know a fact) is irregular in all the singular: "ich weiß, du weißt, er weiß".`,
        ],
        table: {
          headers: ["Change", "Infinitive", "du", "er / sie / es"],
          rows: [
            ["a → ä", "fahren (to drive, go)", "du fährst", "er fährt"],
            ["a → ä", "schlafen (to sleep)", "du schläfst", "er schläft"],
            ["au → äu", "laufen (to run, walk)", "du läufst", "er läuft"],
            ["e → i", "sprechen (to speak)", "du sprichst", "er spricht"],
            ["e → i", "essen (to eat)", "du isst", "er isst"],
            ["e → i", "nehmen (to take)", "du nimmst", "er nimmt"],
            ["e → ie", "lesen (to read)", "du liest", "er liest"],
            ["e → ie", "sehen (to see)", "du siehst", "er sieht"],
          ],
        },
        examples: [
          { de: "Fährst du mit dem Bus?", en: "Are you going by bus?" },
          { de: "Mein Sohn schläft noch.", en: "My son is still asleep." },
          { de: "Sprichst du Englisch?", en: "Do you speak English?" },
          { de: "Sie liest gern Krimis.", en: "She likes reading crime novels." },
          { de: "Er nimmt den Zug um acht.", en: "He's taking the eight o'clock train." },
          { de: "Wir fahren nach München.", en: "We're going to Munich." },
        ],
      },
      {
        heading: `One tense, several English meanings`,
        body: [
          `German has no continuous tense, so "Ich lese" answers both What do you do in the evenings? and What are you doing right now? To stress that something is happening right now, add "gerade": "Ich lese gerade".`,
          `With "seit" (since, for), German uses the present for something that started in the past and is still going on, where English needs have been: "Ich wohne seit 2020 hier" (I've lived here since 2020).`,
        ],
        examples: [
          { de: "Ich koche gerade.", en: "I'm cooking right now." },
          { de: "Am Wochenende besuche ich meine Eltern.", en: "I'm visiting my parents at the weekend." },
          { de: "Er wartet seit einer Stunde.", en: "He's been waiting for an hour." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ich bin arbeiten.",
        right: "Ich arbeite.",
        why: `There is no continuous form. The simple present means I'm working.`,
      },
      {
        wrong: "Er fahrt nach Berlin.",
        right: "Er fährt nach Berlin.",
        why: `"Fahren" is a stem-changing verb: a becomes ä in the du and er forms.`,
      },
      {
        wrong: "Ich spreche Deutsch und er sprecht Englisch.",
        right: "Ich spreche Deutsch und er spricht Englisch.",
        why: `"Sprechen" changes e to i in the du and er forms only.`,
      },
      {
        wrong: "Wir fährt zusammen.",
        right: "Wir fahren zusammen.",
        why: `The vowel change only happens in du and er/sie/es. Wir, ihr and sie are regular.`,
      },
      {
        wrong: "Du arbeitst zu viel.",
        right: "Du arbeitest zu viel.",
        why: `Stems ending in -t or -d add an -e- before -st and -t, so the ending can be heard.`,
      },
      {
        wrong: "Ich habe seit drei Jahren hier gewohnt.",
        right: "Ich wohne seit drei Jahren hier.",
        why: `With "seit", German uses the present for something still true now.`,
      },
    ],
    faqs: [
      {
        q: `How do I know if a verb changes its stem?`,
        a: `You cannot tell from the infinitive alone. Learn the er form of every strong verb as you meet it: "lesen, er liest". There are only about thirty common ones, and you will meet them constantly.`,
      },
      {
        q: `How do I talk about the future?`,
        a: `Usually with the present tense plus a time word: "Ich rufe dich morgen an" (I'll call you tomorrow). German also has a future with "werden" ("Ich werde dich anrufen"), but in everyday speech the present is more common when the time is clear.`,
      },
    ],
    related: ["sein-haben-du-sie", "verb-second-word-order", "separable-verbs"],
    lessons: [
      "a1-present-regular-1",
      "a1-present-regular-2",
      "a1-stem-changing-verbs-1",
      "a1-stem-changing-verbs-2",
      "a1-werden-present",
      "a1-wissen-kennen",
    ],
  },
  {
    slug: "verb-second-word-order",
    title: "Verb-Second Word Order",
    description:
      "In a German main clause the conjugated verb is always the second element. What counts as an element, why the subject moves after the verb, and the words that do not count.",
    level: "A1",
    intro: [
      `The single most important rule of German word order: in a statement, the conjugated verb is the second element. Not necessarily the second word, but the second building block of the sentence. "Ich fahre morgen nach Berlin" and "Morgen fahre ich nach Berlin" both keep "fahre" in second place.`,
      `English does this too, in a few fossils (Never have I seen..., Here comes the bus), but German does it in every main clause. Once you feel the rule, it becomes a tool: you can start a sentence with time, place or an object, for emphasis or flow, and the verb still knows where to go.`,
    ],
    sections: [
      {
        heading: `Position 1, the verb, then the rest`,
        body: [
          `Position 1 can hold one element of any size: the subject, a time expression, a place, an object, even a whole clause. The conjugated verb comes next. If the subject was not in position 1, it comes straight after the verb.`,
          `Germans often start with the time or the topic already under discussion, so inversion is everyday German, not a literary device. Starting every sentence with "ich" sounds flat and repetitive.`,
        ],
        table: {
          headers: ["Position 1", "Verb", "Rest"],
          rows: [
            ["Ich", "trinke", "morgens Kaffee."],
            ["Morgens", "trinke", "ich Kaffee."],
            ["Kaffee", "trinke", "ich morgens."],
            ["Am Wochenende", "besuchen", "wir meine Oma."],
            ["In Berlin", "gibt", "es viele Museen."],
          ],
        },
        examples: [
          { de: "Heute habe ich keine Zeit.", en: "I don't have time today." },
          { de: "Nach der Arbeit gehe ich ins Fitnessstudio.", en: "After work I go to the gym." },
          { de: "Den Film kenne ich schon.", en: "I already know that film." },
          { de: "Leider kann ich nicht kommen.", en: "Unfortunately I can't come." },
          { de: "Im Sommer fahren wir an die Ostsee.", en: "In summer we go to the Baltic coast." },
        ],
      },
      {
        heading: `Words that stand outside the count`,
        body: [
          `A few short words join two sentences without taking position 1. The most important are "und" (and), "aber" (but), "oder" (or), "denn" (because) and "sondern" (but rather). After them, the next sentence counts from zero, so the verb is still second: "Ich bin müde, aber ich gehe nicht ins Bett."`,
          `Words like "ja", "nein" and a name or "also" set off by a comma also stand outside: "Ja, ich komme." "Anna, kommst du?" By contrast, "dann", "deshalb", "trotzdem" and "leider" are adverbs that take position 1 themselves: "Dann gehen wir."`,
        ],
        table: {
          headers: ["Position 0", "Position 1", "Verb", "Rest"],
          rows: [
            ["und", "wir", "gehen", "nach Hause."],
            ["aber", "morgen", "habe", "ich Zeit."],
            ["denn", "ich", "bin", "krank."],
            ["", "Dann", "gehen", "wir nach Hause."],
          ],
        },
        examples: [
          { de: "Ich habe Hunger, und dann esse ich.", en: "I'm hungry, and then I eat." },
          { de: "Sie kommt nicht, denn sie ist krank.", en: "She isn't coming, because she's ill." },
          { de: "Es regnet, aber wir gehen trotzdem spazieren.", en: "It's raining, but we're going for a walk anyway." },
          { de: "Ja, das stimmt.", en: "Yes, that's right." },
        ],
      },
      {
        heading: `Verb-second and the sentence bracket`,
        body: [
          `When a sentence has two verb parts, only the conjugated one sits in position 2. The other part (an infinitive after a modal, a separable prefix, later a past participle) goes to the very end. The two form a bracket around the rest: "Ich kann heute nicht kommen", "Der Zug fährt um acht ab".`,
          `This is the second big rule of German word order, and it explains why Germans sometimes wait until the end of a long sentence to hear what actually happened.`,
        ],
        examples: [
          { de: "Ich muss morgen früh arbeiten.", en: "I have to work early tomorrow." },
          { de: "Morgen rufe ich dich an.", en: "I'll call you tomorrow." },
          { de: "Heute will ich nicht kochen.", en: "I don't want to cook today." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Morgen ich fahre nach Köln.",
        right: "Morgen fahre ich nach Köln.",
        why: `"Morgen" takes position 1, so the verb must come next and the subject follows it.`,
      },
      {
        wrong: "Leider ich habe keine Zeit.",
        right: "Leider habe ich keine Zeit.",
        why: `"Leider" is an adverb and counts as position 1. The verb comes straight after it.`,
      },
      {
        wrong: "Ich bin müde, aber habe ich keine Zeit.",
        right: "Ich bin müde, aber ich habe keine Zeit.",
        why: `"Aber" stands outside the count, so the subject can take position 1 normally.`,
      },
      {
        wrong: "Am Samstag wir spielen Tennis.",
        right: "Am Samstag spielen wir Tennis.",
        why: `A time phrase, however long, is one element. The verb follows it.`,
      },
      {
        wrong: "Ich kann kommen nicht heute.",
        right: "Ich kann heute nicht kommen.",
        why: `The infinitive goes to the end of the clause, closing the bracket.`,
      },
    ],
    faqs: [
      {
        q: `Does verb-second apply to questions?`,
        a: `W-questions follow it: the question word is position 1 ("Wann kommst du?"). Yes/no questions put the verb first instead ("Kommst du?"), and so do commands ("Komm!").`,
      },
      {
        q: `Does it apply in every clause?`,
        a: `Only in main clauses. After "weil", "dass", "wenn" and other subordinating conjunctions, the verb goes to the end: "..., weil ich krank bin". That is the third word-order rule, taught in the Elementary level.`,
      },
    ],
    related: ["german-questions-doch", "german-modal-verbs", "separable-verbs"],
    lessons: ["a1-verb-second", "a1-koennen-sentence-bracket", "a1-core-words-time-linking"],
  },
  {
    slug: "german-questions-doch",
    title: "Questions: W-Words, Yes/No Questions and Doch",
    description:
      "How to ask questions in German without do or does: the W-question words, verb-first yes/no questions, and doch, the yes that contradicts a negative.",
    level: "A1",
    intro: [
      `German has no helper verb for questions. Where English says Do you live here?, German simply moves the verb to the front: "Wohnst du hier?". Where English says Where do you live?, German puts the question word first and the verb second: "Wo wohnst du?".`,
      `German also has a third answer besides yes and no: "doch", which means yes after a negative question or statement. It is small, but you will hear it every day.`,
    ],
    sections: [
      {
        heading: `W-questions: the question word, then the verb`,
        body: [
          `Most German question words begin with W, which is pronounced like English v: "wer", "was", "wo". The question word takes position 1, the conjugated verb follows, then the subject. Be careful with false friends: "wer" means who (not where), "wo" means where, and "wie" means how.`,
          `"Wo" asks about location, "wohin" about the destination and "woher" about the origin: "Wo wohnst du?", "Wohin fährst du?", "Woher kommst du?". In speech the "hin" and "her" often split off and go to the end: "Wo kommst du her?".`,
        ],
        table: {
          headers: ["Question word", "Meaning", "Example"],
          rows: [
            ["wer", "who", "Wer ist das?"],
            ["was", "what", "Was machst du?"],
            ["wo", "where (location)", "Wo ist der Bahnhof?"],
            ["wohin", "where to", "Wohin fahrt ihr?"],
            ["woher", "where from", "Woher kommen Sie?"],
            ["wann", "when", "Wann beginnt der Kurs?"],
            ["wie", "how", "Wie heißt du?"],
            ["warum", "why", "Warum lernst du Deutsch?"],
            ["wie viel / wie viele", "how much / how many", "Wie viele Geschwister hast du?"],
            ["welcher / welche / welches", "which", "Welche Farbe magst du?"],
          ],
        },
        examples: [
          { de: "Wie geht es dir?", en: "How are you?" },
          { de: "Wann fährt der nächste Zug?", en: "When does the next train leave?" },
          { de: "Was kostet das?", en: "How much does that cost?" },
          { de: "Wie alt bist du?", en: "How old are you?" },
          { de: "Woher kommst du?", en: "Where are you from?" },
        ],
      },
      {
        heading: `Yes/no questions: the verb first`,
        body: [
          `To ask a question that expects yes or no, put the conjugated verb in position 1 and the subject right after it. Any second verb part still goes to the end: "Kannst du mir helfen?", "Kommst du mit?".`,
        ],
        examples: [
          { de: "Hast du Geschwister?", en: "Do you have any brothers or sisters?" },
          { de: "Sprechen Sie Englisch?", en: "Do you speak English?" },
          { de: "Ist das Ihr Koffer?", en: "Is that your suitcase?" },
          { de: "Kannst du morgen kommen?", en: "Can you come tomorrow?" },
        ],
      },
      {
        heading: `"Ja", "nein" and "doch"`,
        body: [
          `After a negative question, "ja" is ambiguous, so German uses "doch" to contradict the negative. "Kommst du nicht?" (Aren't you coming?) – "Doch, ich komme!" (Yes, I am!). Answering "Nein" agrees with the negative: no, I'm not coming.`,
          `"Doch" also contradicts a negative statement: "Das stimmt nicht." – "Doch!" (Yes it is!). It is one of the words that make German sound natural, and English has no single equivalent.`,
        ],
        table: {
          headers: ["Question", "Yes", "No"],
          rows: [
            ["Hast du Zeit?", "Ja, ich habe Zeit.", "Nein, ich habe keine Zeit."],
            ["Hast du keine Zeit?", "Doch, ich habe Zeit.", "Nein, ich habe keine Zeit."],
          ],
        },
        examples: [
          { de: "Du hast keinen Hunger? – Doch, großen Hunger!", en: "You're not hungry? – Yes I am, very!" },
          { de: "Ist das nicht dein Handy? – Doch, danke!", en: "Isn't that your phone? – Yes, it is, thanks!" },
          { de: "Kommst du nicht mit? – Nein, ich bleibe hier.", en: "Aren't you coming? – No, I'm staying here." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Wo du wohnst?",
        right: "Wo wohnst du?",
        why: `In a W-question, the verb comes straight after the question word, before the subject.`,
      },
      {
        wrong: "Tust du sprechen Deutsch?",
        right: "Sprichst du Deutsch?",
        why: `German has no do-support. Put the main verb first.`,
      },
      {
        wrong: "Wer wohnst du? (meaning where)",
        right: "Wo wohnst du?",
        why: `"Wer" is who. Where is "wo".`,
      },
      {
        wrong: "Hast du kein Auto? – Ja, ich habe ein Auto.",
        right: "Hast du kein Auto? – Doch, ich habe ein Auto.",
        why: `To contradict a negative question, answer "doch", not "ja".`,
      },
    ],
    faqs: [
      {
        q: `Can I ask a question just with intonation?`,
        a: `Yes, in speech: "Du kommst aus Kanada?" with rising intonation is a common way to check something you think you heard. For real questions, especially in writing, use the verb-first order.`,
      },
      {
        q: `What is the difference between "wie viel" and "wie viele"?`,
        a: `"Wie viel" goes with things you cannot count ("Wie viel Zeit hast du?") and asks for prices ("Wie viel kostet das?"). "Wie viele" goes with plural nouns you can count ("Wie viele Kinder haben Sie?").`,
      },
    ],
    related: ["verb-second-word-order", "nicht-vs-kein", "sein-haben-du-sie"],
    lessons: ["a1-w-questions-1", "a1-w-questions-2", "a1-yes-no-questions-doch", "a1-answer-first-build-question"],
  },
  {
    slug: "nominative-accusative",
    title: "Nominative vs Accusative: Der Becomes Den",
    description:
      "The first two German cases: who does the action (nominative) and what it is done to (accusative). Why only the masculine changes, es gibt, and the accusative pronouns.",
    level: "A1",
    intro: [
      `English shows who does what to whom mainly by word order: The dog bites the man is not The man bites the dog. German marks it on the articles instead, with cases. The subject is in the nominative, the direct object in the accusative.`,
      `The good news for beginners: only the masculine singular changes. "Der" becomes "den", "ein" becomes "einen", "kein" becomes "keinen". Feminine, neuter and plural look the same in both cases. English still has a trace of this system in he and him, she and her.`,
    ],
    sections: [
      {
        heading: `The articles in two cases`,
        body: [
          `Ask yourself who or what is doing the action: that is the nominative ("wer?" or "was?"). Then ask who or what it is done to: that is the accusative ("wen?" or "was?"). In "Der Hund sieht den Mann", the dog is doing the seeing, so it is "der Hund"; the man is being seen, so he is "den Mann".`,
          `Because the case is marked, German can move the object to the front for emphasis without changing the meaning: "Den Mann sieht der Hund" still means the dog sees the man.`,
        ],
        table: {
          headers: ["Case", "Masculine", "Feminine", "Neuter", "Plural"],
          rows: [
            ["Nominative", "der / ein / kein Tisch", "die / eine / keine Lampe", "das / ein / kein Bett", "die / keine Stühle"],
            ["Accusative", "den / einen / keinen Tisch", "die / eine / keine Lampe", "das / ein / kein Bett", "die / keine Stühle"],
          ],
        },
        examples: [
          { de: "Ich brauche einen Stift.", en: "I need a pen." },
          { de: "Hast du den Schlüssel?", en: "Have you got the key?" },
          { de: "Wir kaufen eine Lampe und ein Sofa.", en: "We're buying a lamp and a sofa." },
          { de: "Er hat keinen Bruder.", en: "He hasn't got a brother." },
          { de: "Den Film finde ich langweilig.", en: "I find that film boring." },
        ],
      },
      {
        heading: `"Sein" takes the nominative on both sides`,
        body: [
          `"Sein" (to be) does not have an object: it links two things that are the same. Both sides stay in the nominative: "Das ist der Lehrer", "Er ist ein guter Freund". The same goes for "werden" (to become) and "heißen" (to be called).`,
          `"Es gibt" (there is, there are) always takes the accusative: "Es gibt einen Park hier" (there's a park here). Whatever exists is grammatically the object of "gibt".`,
        ],
        examples: [
          { de: "Das ist ein Problem.", en: "That's a problem." },
          { de: "Das ist mein Mann.", en: "This is my husband." },
          { de: "Es gibt einen Supermarkt in der Nähe.", en: "There's a supermarket nearby." },
          { de: "Gibt es hier keinen Bäcker?", en: "Isn't there a bakery here?" },
        ],
      },
      {
        heading: `Pronouns in the accusative`,
        body: [
          `Personal pronouns have their own accusative forms, and here most persons change, not only the masculine. Notice that "ihn" (him) also means it when it replaces a masculine noun: "Der Kaffee? Ich trinke ihn schwarz."`,
          `The prepositions "für", "ohne", "durch", "gegen" and "um" are always followed by the accusative: "für dich", "ohne mich", "für den Chef".`,
        ],
        table: {
          headers: ["Nominative", "Accusative", "Example"],
          rows: [
            ["ich", "mich", "Siehst du mich?"],
            ["du", "dich", "Ich liebe dich."],
            ["er", "ihn", "Ich kenne ihn nicht."],
            ["sie", "sie", "Ich rufe sie an."],
            ["es", "es", "Ich nehme es."],
            ["wir", "uns", "Besuchst du uns?"],
            ["ihr", "euch", "Ich höre euch nicht."],
            ["sie / Sie", "sie / Sie", "Ich verstehe Sie nicht."],
          ],
        },
        examples: [
          { de: "Der Pullover ist schön. Ich nehme ihn.", en: "The jumper is nice. I'll take it." },
          { de: "Das Geschenk ist für dich.", en: "The present is for you." },
          { de: "Ohne dich gehe ich nicht.", en: "I'm not going without you." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ich habe ein Hund.",
        right: "Ich habe einen Hund.",
        why: `"Der Hund" is masculine and the object of "haben", so "ein" becomes "einen".`,
      },
      {
        wrong: "Das ist einen Tisch.",
        right: "Das ist ein Tisch.",
        why: `"Sein" takes the nominative on both sides. There is no object here.`,
      },
      {
        wrong: "Es gibt ein Park hier.",
        right: "Es gibt einen Park hier.",
        why: `"Es gibt" always takes the accusative, and "der Park" is masculine.`,
      },
      {
        wrong: "Ich kaufe den Lampe.",
        right: "Ich kaufe die Lampe.",
        why: `Only masculine articles change in the accusative. Feminine stays "die".`,
      },
      {
        wrong: "Der Wein ist gut. Ich trinke es gern.",
        right: "Der Wein ist gut. Ich trinke ihn gern.",
        why: `"Der Wein" is masculine, so as an object the pronoun is "ihn", even though English says it.`,
      },
    ],
    faqs: [
      {
        q: `How do I find the subject when the word order changes?`,
        a: `Look at the verb ending and the articles. In "Den Kuchen backt meine Oma", "den" is accusative, so the cake is the object, and "backt" matches a singular subject: my grandma is baking the cake.`,
      },
      {
        q: `How many cases are there?`,
        a: `Four: nominative, accusative, dative and genitive. The dative (to or for someone, and after prepositions such as "mit" and "bei") comes next, in the Elementary level. The genitive is mostly for written and formal German.`,
      },
    ],
    related: ["der-die-das-gender", "nicht-vs-kein", "dative-case"],
    lessons: ["a1-accusative-1", "a1-accusative-2", "a1-es-gibt", "a1-accusative-pronouns-1", "a1-accusative-pronouns-2"],
  },
  {
    slug: "nicht-vs-kein",
    title: "Negation: Nicht vs Kein",
    description:
      "German has two words for not: kein negates nouns that would take ein or no article, nicht negates everything else. Where nicht goes in the sentence, and nie, nichts, niemand.",
    level: "A1",
    intro: [
      `English negates with not and no: I'm not tired, I have no time. German divides the work in a similar way. "Kein" goes in front of a noun, like no or not a: "Ich habe keine Zeit". "Nicht" negates verbs, adjectives, adverbs and nouns with a definite article: "Ich bin nicht müde".`,
      `The tricky parts are knowing which one a noun needs, and where "nicht" goes. Both follow clear rules.`,
    ],
    sections: [
      {
        heading: `"Kein": the negative of "ein" and of no article`,
        body: [
          `Use "kein" when the positive sentence would have "ein" or no article at all: "Ich habe ein Auto" becomes "Ich habe kein Auto"; "Ich habe Zeit" becomes "Ich habe keine Zeit"; "Wir haben Kinder" becomes "Wir haben keine Kinder".`,
          `"Kein" takes exactly the same endings as "ein", and has a plural form, "keine". In the accusative masculine it is "keinen": "Ich habe keinen Hunger".`,
        ],
        table: {
          headers: ["Positive", "Negative", "Meaning"],
          rows: [
            ["Ich habe einen Bruder.", "Ich habe keinen Bruder.", "I don't have a brother."],
            ["Das ist eine gute Idee.", "Das ist keine gute Idee.", "That's not a good idea."],
            ["Er trinkt Kaffee.", "Er trinkt keinen Kaffee.", "He doesn't drink coffee."],
            ["Wir haben Kinder.", "Wir haben keine Kinder.", "We don't have children."],
          ],
        },
        examples: [
          { de: "Ich habe heute keine Zeit.", en: "I don't have time today." },
          { de: "Das ist kein Problem.", en: "That's no problem." },
          { de: "Sie spricht kein Englisch.", en: "She doesn't speak English." },
          { de: "Es gibt keinen Zucker mehr.", en: "There's no sugar left." },
        ],
      },
      {
        heading: `"Nicht" and where it goes`,
        body: [
          `Use "nicht" for everything else: verbs, adjectives, adverbs, nouns with "der", "die", "das" or a possessive, and names. "Das ist nicht mein Auto." "Ich kenne den Mann nicht."`,
          `To negate the whole sentence, "nicht" goes near the end: after the subject, the conjugated verb, the objects and time expressions, but before adjectives after sein, places, and the second verb part. "Ich arbeite heute nicht." "Ich bin nicht müde." "Ich fahre nicht nach Berlin." "Ich kann heute nicht kommen."`,
          `To negate only one element, put "nicht" right before it, often followed by "sondern" (but rather): "Ich fahre nicht heute, sondern morgen."`,
        ],
        table: {
          headers: ["Rule", "Example"],
          rows: [
            ["After the verb and the object", "Ich verstehe die Frage nicht."],
            ["After time expressions", "Er kommt heute nicht."],
            ["Before adjectives", "Das Essen ist nicht schlecht."],
            ["Before places and directions", "Wir wohnen nicht in Köln."],
            ["Before the second verb part", "Ich will nicht gehen."],
            ["Before the element you contrast", "Nicht ich, sondern mein Bruder."],
          ],
        },
        examples: [
          { de: "Ich weiß es nicht.", en: "I don't know." },
          { de: "Das Hotel ist nicht teuer.", en: "The hotel isn't expensive." },
          { de: "Wir gehen heute nicht ins Kino.", en: "We're not going to the cinema today." },
          { de: "Das ist nicht der Bus nach Hamburg.", en: "That's not the bus to Hamburg." },
          { de: "Sie kommt nicht aus Österreich, sondern aus der Schweiz.", en: "She's not from Austria, but from Switzerland." },
        ],
      },
      {
        heading: `Other negative words`,
        body: [
          `German does not use double negatives: one negative word per idea is enough. "Ich sehe niemanden" means I don't see anybody, with no "nicht".`,
        ],
        table: {
          headers: ["Word", "Meaning", "Example"],
          rows: [
            ["nie / niemals", "never", "Ich trinke nie Alkohol."],
            ["nichts", "nothing, not anything", "Ich habe nichts gesagt."],
            ["niemand", "nobody, not anybody", "Niemand ist zu Hause."],
            ["nirgends / nirgendwo", "nowhere", "Ich finde meine Brille nirgends."],
            ["noch nicht", "not yet", "Er ist noch nicht da."],
            ["nicht mehr / kein ... mehr", "no longer, no more", "Ich habe kein Geld mehr."],
          ],
        },
        examples: [
          { de: "Ich habe nichts gegessen.", en: "I haven't eaten anything." },
          { de: "Er wohnt nicht mehr hier.", en: "He doesn't live here any more." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ich habe nicht ein Auto.",
        right: "Ich habe kein Auto.",
        why: `"Nicht ein" is only used for emphasis (not a single one). Normally "ein" becomes "kein".`,
      },
      {
        wrong: "Ich habe nicht Zeit.",
        right: "Ich habe keine Zeit.",
        why: `Nouns without an article are negated with "kein".`,
      },
      {
        wrong: "Ich nicht verstehe.",
        right: "Ich verstehe nicht.",
        why: `"Nicht" never goes between the subject and the conjugated verb in a main clause.`,
      },
      {
        wrong: "Ich kenne nicht den Mann.",
        right: "Ich kenne den Mann nicht.",
        why: `To negate the whole sentence, "nicht" comes after a definite object.`,
      },
      {
        wrong: "Ich sehe nicht niemand.",
        right: "Ich sehe niemanden.",
        why: `German has no double negatives. "Niemand" already says not anybody.`,
      },
    ],
    faqs: [
      {
        q: `Why is it "Ich spreche kein Deutsch" but "Ich spreche nicht gut Deutsch"?`,
        a: `In the first, the noun "Deutsch" is negated, so it takes "kein". In the second, you negate the adverb "gut", so "nicht" goes in front of it. Both are correct, and both are useful sentences for beginners.`,
      },
      {
        q: `Is "nicht" placement really that strict?`,
        a: `The basic rule (late in the sentence, but before adjectives, places and the second verb part) covers almost everything you will say. Getting it slightly wrong rarely causes confusion, but it does sound foreign, so it is worth practising with whole sentences.`,
      },
    ],
    related: ["nominative-accusative", "german-questions-doch", "german-modal-verbs"],
    lessons: ["a1-nicht-kein", "a1-yes-no-questions-doch", "a1-negation-in-depth"],
  },
  {
    slug: "german-modal-verbs",
    title: "Modal Verbs: Können, Müssen, Wollen, Dürfen, Sollen, Mögen",
    description:
      "The six German modal verbs and möchte, their irregular singular, the infinitive at the end of the sentence, and the false friends will, muss nicht and darf nicht.",
    level: "A1",
    intro: [
      `Modal verbs say whether you can, must, want or may do something. German has six: "können", "müssen", "wollen", "dürfen", "sollen" and "mögen", plus the very common "möchte" (would like). They work like English modals in one way: they combine with another verb in the infinitive.`,
      `They differ from English in two important ways. The infinitive goes to the end of the sentence, forming a bracket: "Ich kann heute nicht kommen". And two of them are dangerous false friends: "ich will" means I want, not I will, and "du musst nicht" means you don't have to, not you mustn't.`,
    ],
    sections: [
      {
        heading: `The forms`,
        body: [
          `Modal verbs are irregular in the singular: "ich" and "er" have the same form, with no ending, and most change their vowel. The plural is regular. "Möchte" is a form of "mögen" (the Konjunktiv II) used on its own as a polite want.`,
        ],
        table: {
          headers: ["", "können", "müssen", "wollen", "dürfen", "sollen", "möchten"],
          rows: [
            ["ich", "kann", "muss", "will", "darf", "soll", "möchte"],
            ["du", "kannst", "musst", "willst", "darfst", "sollst", "möchtest"],
            ["er / sie / es", "kann", "muss", "will", "darf", "soll", "möchte"],
            ["wir", "können", "müssen", "wollen", "dürfen", "sollen", "möchten"],
            ["ihr", "könnt", "müsst", "wollt", "dürft", "sollt", "möchtet"],
            ["sie / Sie", "können", "müssen", "wollen", "dürfen", "sollen", "möchten"],
          ],
        },
        examples: [
          { de: "Kannst du schwimmen?", en: "Can you swim?" },
          { de: "Ich muss jetzt gehen.", en: "I have to go now." },
          { de: "Wir wollen nach Wien fahren.", en: "We want to go to Vienna." },
          { de: "Darf ich hier rauchen?", en: "May I smoke here?" },
          { de: "Du sollst den Arzt anrufen.", en: "You're supposed to call the doctor." },
          { de: "Ich möchte einen Kaffee, bitte.", en: "I'd like a coffee, please." },
        ],
      },
      {
        heading: `The sentence bracket`,
        body: [
          `The modal verb is conjugated and stands in position 2; the main verb goes to the very end in the infinitive, without "zu". Everything else goes between them. In questions the modal moves to the front, but the infinitive still waits at the end.`,
        ],
        table: {
          headers: ["Position 1", "Modal", "Middle", "Infinitive"],
          rows: [
            ["Ich", "kann", "heute leider nicht", "kommen."],
            ["Morgen", "müssen", "wir früh", "aufstehen."],
            ["", "Willst", "du einen Kaffee", "trinken?"],
            ["Wann", "darf", "ich nach Hause", "gehen?"],
          ],
        },
        examples: [
          { de: "Ich kann dir morgen helfen.", en: "I can help you tomorrow." },
          { de: "Am Samstag will sie ihre Eltern besuchen.", en: "She wants to visit her parents on Saturday." },
          { de: "Musst du heute arbeiten?", en: "Do you have to work today?" },
        ],
      },
      {
        heading: `What each one means, and the false friends`,
        body: [
          `"Können" is ability and possibility (can). "Müssen" is necessity (must, have to). "Wollen" is a firm wish or plan (want to). "Dürfen" is permission (may, be allowed to). "Sollen" is an obligation from someone else, an instruction or advice (should, be supposed to). "Mögen" alone means to like: "Ich mag Katzen". "Möchte" is the polite way to say what you want.`,
          `In the negative, "müssen" and "dürfen" separate. "Du musst nicht kommen" means you don't have to come (it's optional). "Du darfst nicht kommen" means you must not come (it's forbidden). English must not is "nicht dürfen".`,
          `"Ich will" is always want. The future is formed with "werden": "Ich werde kommen" (I will come).`,
        ],
        examples: [
          { de: "Du musst nicht warten.", en: "You don't have to wait." },
          { de: "Hier darf man nicht parken.", en: "You mustn't park here." },
          { de: "Ich will Ärztin werden.", en: "I want to become a doctor." },
          { de: "Soll ich das Fenster aufmachen?", en: "Shall I open the window?" },
          { de: "Ich mag keinen Fisch.", en: "I don't like fish." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ich kann kommen nicht morgen.",
        right: "Ich kann morgen nicht kommen.",
        why: `The infinitive goes to the very end; "nicht" and time words go in the middle.`,
      },
      {
        wrong: "Er kannt gut kochen.",
        right: "Er kann gut kochen.",
        why: `Modal verbs have no ending in the "er" form, just like "ich".`,
      },
      {
        wrong: "Ich will dich morgen anrufen. (meaning I'll call you)",
        right: "Ich rufe dich morgen an. / Ich werde dich morgen anrufen.",
        why: `"Will" means want. For a simple future, use the present or "werden".`,
      },
      {
        wrong: "Du musst nicht hier rauchen. (meaning it's forbidden)",
        right: "Du darfst hier nicht rauchen.",
        why: `"Nicht müssen" means there is no need. Prohibition is "nicht dürfen".`,
      },
      {
        wrong: "Ich möchte zu gehen.",
        right: "Ich möchte gehen.",
        why: `Modal verbs take a bare infinitive, never "zu".`,
      },
    ],
    faqs: [
      {
        q: `What is the difference between "ich will" and "ich möchte"?`,
        a: `Both express a wish. "Ich möchte" is softer and polite, the normal choice when ordering or asking for something. "Ich will" is direct and determined; in a shop, "Ich will ein Brot" sounds demanding. Among friends, "will" is fine for plans: "Ich will am Wochenende wandern."`,
      },
      {
        q: `Can a modal verb stand alone?`,
        a: `Yes, when the main verb is obvious: "Ich kann Deutsch" (I can speak German), "Ich muss nach Hause" (I have to go home), "Das darf man nicht" (you're not allowed to do that).`,
      },
    ],
    related: ["verb-second-word-order", "nicht-vs-kein", "separable-verbs"],
    lessons: [
      "a1-moegen-moechte",
      "a1-koennen-sentence-bracket",
      "a1-muessen-wollen",
      "a1-duerfen-sollen",
      "a1-contrast-modals",
    ],
  },
  {
    slug: "separable-verbs",
    title: "Separable Verbs: Anrufen, Aufstehen, Einkaufen",
    description:
      "Why German splits verbs like anrufen into ruft ... an, which prefixes separate and which never do, and how separable verbs behave with modals and in the imperative.",
    level: "A1",
    intro: [
      `Many German verbs have a prefix that breaks off in the present tense and goes to the end of the clause: "anrufen" (to call) becomes "Ich rufe dich morgen an". English has the same idea in phrasal verbs (call up, get up, put on), but German moves the particle all the way to the end, however long the sentence.`,
      `Separable verbs are everywhere in daily life: getting up, shopping, arriving, leaving, switching things on. Once you recognise the pattern, you will start listening for the end of the sentence, because the prefix can change the meaning completely: "Ich mache die Tür zu" (I close the door), "Ich mache die Tür auf" (I open the door).`,
    ],
    sections: [
      {
        heading: `How they split`,
        body: [
          `In a main clause in the present, the conjugated stem takes position 2 and the prefix goes to the very end. In the infinitive (after a modal verb), the verb stays together. In speech, the prefix carries the stress: "ANrufen", "AUFstehen".`,
        ],
        table: {
          headers: ["Infinitive", "Meaning", "Present", "With a modal"],
          rows: [
            ["aufstehen", "to get up", "Ich stehe um sieben auf.", "Ich muss um sieben aufstehen."],
            ["anrufen", "to call", "Er ruft seine Mutter an.", "Er will seine Mutter anrufen."],
            ["einkaufen", "to shop", "Wir kaufen am Samstag ein.", "Wir können am Samstag einkaufen."],
            ["fernsehen", "to watch TV", "Siehst du oft fern?", "Darfst du heute fernsehen?"],
            ["mitkommen", "to come along", "Kommst du mit?", "Möchtest du mitkommen?"],
          ],
        },
        examples: [
          { de: "Der Zug kommt um 14 Uhr an.", en: "The train arrives at 2 p.m." },
          { de: "Wann fängt der Film an?", en: "When does the film start?" },
          { de: "Ich räume heute mein Zimmer auf.", en: "I'm tidying my room today." },
          { de: "Mach bitte das Licht aus!", en: "Please turn the light off!" },
          { de: "Wir laden euch zum Essen ein.", en: "We're inviting you to dinner." },
        ],
      },
      {
        heading: `Which prefixes separate`,
        body: [
          `Prefixes that are also words on their own usually separate: "an", "auf", "aus", "ein", "mit", "nach", "vor", "zu", "zurück", "weg", "fern", "los". These are stressed.`,
          `Some prefixes never separate, and are never stressed: "be-", "ver-", "er-", "ent-", "emp-", "ge-", "miss-" and "zer-". "Ich bezahle", "ich verstehe", "ich bekomme". These verbs stay in one piece in every form.`,
        ],
        table: {
          headers: ["Separable (stressed prefix)", "Inseparable (unstressed prefix)"],
          rows: [
            ["anfangen: Ich fange an.", "bezahlen: Ich bezahle."],
            ["aussteigen: Wir steigen aus.", "verstehen: Ich verstehe das nicht."],
            ["zumachen: Er macht die Tür zu.", "bekommen: Sie bekommt ein Paket."],
            ["zurückkommen: Sie kommt bald zurück.", "erzählen: Er erzählt eine Geschichte."],
          ],
        },
        examples: [
          { de: "Ich bekomme morgen mein Paket.", en: "I'm getting my parcel tomorrow." },
          { de: "Wo steigen wir aus?", en: "Where do we get off?" },
          { de: "Verstehst du mich?", en: "Do you understand me?" },
        ],
      },
      {
        heading: `In commands and questions`,
        body: [
          `In the imperative and in yes/no questions, the verb comes first and the prefix still goes to the end: "Ruf mich an!", "Steh auf!", "Kommst du mit?". The bracket around the sentence is the same.`,
        ],
        examples: [
          { de: "Ruf mich heute Abend an!", en: "Call me this evening!" },
          { de: "Steht ihr morgen früh auf?", en: "Are you getting up early tomorrow?" },
          { de: "Bitte füllen Sie das Formular aus.", en: "Please fill in the form." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ich anrufe dich morgen.",
        right: "Ich rufe dich morgen an.",
        why: `In a main clause the prefix separates and goes to the end.`,
      },
      {
        wrong: "Ich muss um sechs stehen auf.",
        right: "Ich muss um sechs aufstehen.",
        why: `After a modal, the infinitive stays in one piece at the end.`,
      },
      {
        wrong: "Ich stehe auf um sieben Uhr.",
        right: "Ich stehe um sieben Uhr auf.",
        why: `The prefix goes to the very end of the clause, after time and place.`,
      },
      {
        wrong: "Ich stehe ver das nicht.",
        right: "Ich verstehe das nicht.",
        why: `"Ver-" is an inseparable prefix. The verb never splits.`,
      },
    ],
    faqs: [
      {
        q: `How do I know a verb is separable when I hear it?`,
        a: `Listen for the stress: separable prefixes are stressed ("EINkaufen"), inseparable ones are not ("beKOMmen"). Dictionaries often mark separable verbs with a dot or bar: "an|rufen".`,
      },
      {
        q: `What happens in the past tense?`,
        a: `The participle puts "-ge-" between the prefix and the stem: "angerufen", "aufgestanden", "eingekauft". You will learn this with the Perfekt in the Elementary level.`,
      },
    ],
    related: ["german-modal-verbs", "verb-second-word-order", "german-imperative"],
    lessons: ["a1-separable-verbs-1", "a1-separable-verbs-2", "a1-daily-routine"],
  },
  {
    slug: "possessive-articles",
    title: "Possessive Articles: Mein, Dein, Sein, Ihr",
    description:
      "My, your, his, her, our, their in German: the forms, the endings they share with ein and kein, the sein vs ihr choice, and Annas Auto without an apostrophe.",
    level: "A1",
    intro: [
      `German possessives work like "ein": they sit in front of the noun and take the same endings. "Ein Bruder", "mein Bruder"; "eine Schwester", "meine Schwester"; "einen Hund", "meinen Hund". If you know the endings of "ein" and "kein", you already know them.`,
      `Two things trip up English speakers. First, the ending depends on the thing owned, not on the owner: a man says "meine Frau" because "Frau" is feminine. Second, "sein" (his) and "ihr" (her) are chosen by the owner, just like in English, but "ihr" also means their and, with a capital, your (formal).`,
    ],
    sections: [
      {
        heading: `The possessive stems`,
        body: [
          `Choose the stem by the owner, then add the ending for the noun's gender and case. "Euer" drops its second e when it takes an ending: "eure Kinder", not "euere".`,
        ],
        table: {
          headers: ["Owner", "Stem", "Masc.", "Fem.", "Neut.", "Plural"],
          rows: [
            ["ich", "mein (my)", "mein Vater", "meine Mutter", "mein Kind", "meine Eltern"],
            ["du", "dein (your)", "dein Vater", "deine Mutter", "dein Kind", "deine Eltern"],
            ["er / es", "sein (his, its)", "sein Vater", "seine Mutter", "sein Kind", "seine Eltern"],
            ["sie", "ihr (her)", "ihr Vater", "ihre Mutter", "ihr Kind", "ihre Eltern"],
            ["wir", "unser (our)", "unser Vater", "unsere Mutter", "unser Kind", "unsere Eltern"],
            ["ihr", "euer (your)", "euer Vater", "eure Mutter", "euer Kind", "eure Eltern"],
            ["sie", "ihr (their)", "ihr Vater", "ihre Mutter", "ihr Kind", "ihre Eltern"],
            ["Sie", "Ihr (your, formal)", "Ihr Vater", "Ihre Mutter", "Ihr Kind", "Ihre Eltern"],
          ],
        },
        examples: [
          { de: "Das ist mein Bruder und das ist meine Schwester.", en: "This is my brother and this is my sister." },
          { de: "Ist das dein Handy?", en: "Is that your phone?" },
          { de: "Unsere Wohnung ist klein.", en: "Our flat is small." },
          { de: "Wie ist Ihr Name?", en: "What's your name?" },
          { de: "Wo sind eure Koffer?", en: "Where are your suitcases?" },
        ],
      },
      {
        heading: `The accusative: "meinen", "deinen", "seinen"`,
        body: [
          `Like "einen", a possessive before a masculine object adds "-en": "Ich suche meinen Schlüssel". Feminine, neuter and plural forms are the same as in the nominative.`,
        ],
        examples: [
          { de: "Ich besuche meinen Opa.", en: "I'm visiting my grandad." },
          { de: "Hast du deinen Pass?", en: "Have you got your passport?" },
          { de: "Sie liebt ihren Job.", en: "She loves her job." },
          { de: "Wir verkaufen unser Auto.", en: "We're selling our car." },
        ],
      },
      {
        heading: `"Sein" or "ihr"? And names with -s`,
        body: [
          `As in English, the owner decides: Tom's mother is "seine Mutter", Lisa's father is "ihr Vater". Then the noun decides the ending: Lisa's mother is "ihre Mutter" (feminine owner, feminine noun), Tom's car is "sein Auto".`,
          `With names, German adds "-s" with no apostrophe: "Annas Auto", "Peters Wohnung". In speech, "von" is common too: "das Auto von Anna".`,
        ],
        examples: [
          { de: "Peter wohnt bei seiner Schwester. Seine Schwester ist Ärztin.", en: "Peter lives with his sister. His sister is a doctor." },
          { de: "Lisa und ihr Mann kommen heute.", en: "Lisa and her husband are coming today." },
          { de: "Die Kinder spielen mit ihrem Hund.", en: "The children are playing with their dog." },
          { de: "Das ist Annas Fahrrad.", en: "That's Anna's bike." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Lisa besucht seine Mutter.",
        right: "Lisa besucht ihre Mutter.",
        why: `The owner is Lisa, so the stem is "ihr". "Sein" would mean another man's mother.`,
      },
      {
        wrong: "Ich suche mein Schlüssel.",
        right: "Ich suche meinen Schlüssel.",
        why: `"Der Schlüssel" is masculine and the object, so the possessive takes "-en".`,
      },
      {
        wrong: "Mein Schwester heißt Jana.",
        right: "Meine Schwester heißt Jana.",
        why: `The ending follows the noun owned: "die Schwester" is feminine.`,
      },
      {
        wrong: "Das ist Anna's Auto.",
        right: "Das ist Annas Auto.",
        why: `German writes the possessive -s without an apostrophe.`,
      },
      {
        wrong: "Wo sind euere Taschen?",
        right: "Wo sind eure Taschen?",
        why: `"Euer" drops its second e when an ending is added.`,
      },
    ],
    faqs: [
      {
        q: `"Ihr" means so many things. How do I tell them apart?`,
        a: `Before a noun it is a possessive: her, their, or, with a capital, your (formal). The context makes clear who the owner is. As a pronoun on its own before a verb ("ihr seid", "ihr habt"), it means you, plural.`,
      },
      {
        q: `Do possessives change in other cases?`,
        a: `Yes, exactly like "ein" and "kein". In the dative you will meet "meinem", "meiner", "meinen": "mit meinem Bruder", "bei meiner Mutter".`,
      },
    ],
    related: ["nominative-accusative", "der-die-das-gender", "dative-case"],
    lessons: ["a1-possessives-1", "a1-possessives-2", "a1-word-web-family"],
  },
  {
    slug: "numbers-time-dates",
    title: "Numbers, Time and Dates",
    description:
      "German numbers (einundzwanzig: the ones before the tens), the decimal comma, telling the time with halb drei, and saying dates with ordinals: am dritten Mai.",
    level: "A1",
    intro: [
      `German numbers have one big surprise: from 21 to 99 you say the ones before the tens, like the old English four-and-twenty. 21 is "einundzwanzig" (one-and-twenty), 85 is "fünfundachtzig". Long numbers are written as a single word.`,
      `Telling the time has a surprise too: "halb drei" means half past two, not half past three. It means half way to three. With these two habits in place, numbers, prices, times and dates become straightforward.`,
    ],
    sections: [
      {
        heading: `Numbers`,
        body: [
          `Learn 0 to 12 as words, then the teens add "-zehn": "dreizehn", "vierzehn". Note the shortened "sechzehn" and "siebzehn". Tens end in "-zig", except "dreißig" with ß. For 21 to 99, put the ones first, then "und", then the tens: "zweiunddreißig" (32).`,
          `Hundreds and thousands are simple: "hundert", "tausend", "zweihundertfünfzig" (250), "dreitausend" (3,000). German writes a decimal comma and uses a full stop (or a space) for thousands: "2,5" (two point five), "1.000" (one thousand). Prices: "3,50 €" is "drei Euro fünfzig".`,
          `"Eins" is used for counting; before a noun it becomes the article: "ein Kaffee", "eine Stunde". In phone numbers and on the phone, Germans often say "zwo" for 2 to avoid confusion with "drei".`,
        ],
        table: {
          headers: ["Number", "German", "Number", "German"],
          rows: [
            ["1", "eins", "16", "sechzehn"],
            ["2", "zwei", "17", "siebzehn"],
            ["3", "drei", "20", "zwanzig"],
            ["6", "sechs", "21", "einundzwanzig"],
            ["7", "sieben", "30", "dreißig"],
            ["11", "elf", "47", "siebenundvierzig"],
            ["12", "zwölf", "100", "hundert"],
            ["13", "dreizehn", "1999", "neunzehnhundertneunundneunzig"],
          ],
        },
        examples: [
          { de: "Das kostet vierundzwanzig Euro neunzig.", en: "That costs 24 euros 90." },
          { de: "Meine Nummer ist null eins sieben sechs ...", en: "My number is 0176 ..." },
          { de: "Ich wohne in der Goethestraße dreiundfünfzig.", en: "I live at 53 Goethestraße." },
        ],
      },
      {
        heading: `Telling the time`,
        body: [
          `Ask "Wie spät ist es?" or "Wie viel Uhr ist es?". In everyday speech Germans use a twelve-hour clock with "nach" (past), "vor" (to), "Viertel" (quarter) and "halb" (half way to the next hour). For timetables, appointments and anything official, they use the 24-hour clock with "Uhr": "Der Zug fährt um 17:45 Uhr" ("siebzehn Uhr fünfundvierzig").`,
          `"Um" gives the time something happens: "um acht Uhr" (at eight o'clock). "Gegen acht" means around eight.`,
        ],
        table: {
          headers: ["Time", "Everyday", "Official"],
          rows: [
            ["3:00", "drei Uhr", "drei Uhr / fünfzehn Uhr"],
            ["3:10", "zehn nach drei", "drei Uhr zehn"],
            ["3:15", "Viertel nach drei", "drei Uhr fünfzehn"],
            ["3:30", "halb vier", "drei Uhr dreißig"],
            ["3:45", "Viertel vor vier", "fünfzehn Uhr fünfundvierzig"],
            ["3:50", "zehn vor vier", "drei Uhr fünfzig"],
            ["3:25", "fünf vor halb vier", "drei Uhr fünfundzwanzig"],
          ],
        },
        examples: [
          { de: "Es ist halb acht.", en: "It's half past seven." },
          { de: "Wir treffen uns um Viertel nach sechs.", en: "We're meeting at quarter past six." },
          { de: "Der Kurs beginnt um 18 Uhr.", en: "The class starts at 6 p.m." },
        ],
      },
      {
        heading: `Days, months and dates`,
        body: [
          `Days, months and seasons are all masculine and take "am" (days) and "im" (months and seasons): "am Montag", "im Juli", "im Winter". Years are said in hundreds up to 1999 ("neunzehnhundertachtzig") and as thousands from 2000 ("zweitausendvierundzwanzig"). There is no "in" before a bare year: "Ich bin 1990 geboren", or "im Jahr 1990".`,
          `Dates use ordinal numbers, written with a full stop: "der 3. Mai" is "der dritte Mai". Ordinals add "-te" up to 19 and "-ste" from 20 (with the irregular "erste", "dritte", "siebte"). After "am" they take "-ten": "am dritten Mai", "am zwanzigsten Juni".`,
        ],
        table: {
          headers: ["Written", "Said", "Meaning"],
          rows: [
            ["der 1. März", "der erste März", "the 1st of March"],
            ["am 3. Oktober", "am dritten Oktober", "on the 3rd of October"],
            ["am 7. Juli", "am siebten Juli", "on the 7th of July"],
            ["am 24.12.", "am vierundzwanzigsten Zwölften", "on the 24th of December"],
          ],
        },
        examples: [
          { de: "Heute ist der zweite April.", en: "Today is the 2nd of April." },
          { de: "Ich habe am elften November Geburtstag.", en: "My birthday is on the 11th of November." },
          { de: "Im Sommer fahren wir in Urlaub.", en: "We're going on holiday in the summer." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "zwanzigeins",
        right: "einundzwanzig",
        why: `From 21 to 99, the ones come first, joined by "und".`,
      },
      {
        wrong: "Es ist halb drei. (meaning 3:30)",
        right: "Es ist halb vier.",
        why: `"Halb" counts towards the next hour: "halb vier" is 3:30.`,
      },
      {
        wrong: "Ich bin in 1995 geboren.",
        right: "Ich bin 1995 geboren.",
        why: `A bare year takes no preposition in German; "im Jahr 1995" is also correct.`,
      },
      {
        wrong: "am drei Mai",
        right: "am dritten Mai",
        why: `Dates use ordinal numbers, with "-ten" after "am".`,
      },
      {
        wrong: "Das kostet 2.50 €.",
        right: "Das kostet 2,50 €.",
        why: `German uses a decimal comma.`,
      },
    ],
    faqs: [
      {
        q: `Is "Viertel vor" used everywhere?`,
        a: `"Viertel nach" and "Viertel vor" are understood everywhere. In parts of the east and south you will also hear "viertel vier" for 3:15 and "dreiviertel vier" for 3:45, again counting towards the next hour.`,
      },
      {
        q: `How do Germans write dates?`,
        a: `Day, month, year, separated by full stops: "03.10.2025" is the 3rd of October 2025. Never month first.`,
      },
    ],
    related: ["german-noun-plurals", "verb-second-word-order", "possessive-articles"],
    lessons: [
      "a1-numbers-1",
      "a1-numbers-2",
      "a1-telling-time-1",
      "a1-telling-time-2",
      "a1-days-months-seasons",
      "a1-ordinal-dates",
    ],
  },
];
