// Synced from cheneygross-afk/lengo:src/lib/grammar/fr-guides-a1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { FrGrammarGuide } from "./fr-types";

// French grammar guides, A1 (see ./fr-types.ts and docs/french-course/guide-brief.md).
export const FR_A1_GUIDES: FrGrammarGuide[] = [
  {
    slug: "subject-pronouns-tu-vous",
    title: "Subject Pronouns, Tu vs Vous, and On",
    description:
      "The French subject pronouns and the present of être, when to say tu and when to say vous, why ils covers mixed groups, and how on quietly replaces nous in everyday speech.",
    level: "A1",
    intro: [
      `English has one word for you and one word for it. French splits both. "Tu" and "vous" both mean you, and choosing between them tells the other person how close you are. And there is no "it" at all: every noun is masculine or feminine, so a table is "elle" and a book is "il".`,
      `This guide covers the eight subject pronouns, the present of "être" (to be) that you will use with them from the first day, the tu/vous choice, and "on", the small pronoun that does the work of we, you and people in general. Get these right and every later verb table becomes a pattern you already know.`,
    ],
    sections: [
      {
        heading: `The pronouns and "être"`,
        body: [
          `French has a pronoun for each person, and the verb changes with it. "Être" is irregular, so learn it as a block: it is the most frequent verb in the language. Notice that "est" and "es" sound the same, and that the final consonants of "suis", "sommes" and "sont" are silent.`,
          `"Je" loses its e before a vowel or a mute h: "j'habite", "j'aime". That is not optional or casual; "je aime" is simply wrong. "Je" is also never capitalised in the middle of a sentence, unlike English I.`,
        ],
        table: {
          headers: ["Pronoun", "Meaning", "Être"],
          rows: [
            ["je", "I", "je suis"],
            ["tu", "you (one person, familiar)", "tu es"],
            ["il / elle", "he, it / she, it", "il est / elle est"],
            ["on", "we (spoken), one, people", "on est"],
            ["nous", "we", "nous sommes"],
            ["vous", "you (polite, or more than one)", "vous êtes"],
            ["ils / elles", "they (masc. or mixed / fem.)", "ils sont / elles sont"],
          ],
        },
        examples: [
          { fr: "Je suis anglaise, je suis de Londres.", en: "I'm English, I'm from London." },
          { fr: "Tu es où ?", en: "Where are you?" },
          { fr: "Nous sommes en retard.", en: "We're late." },
          { fr: "Vous êtes très gentil, merci.", en: "You're very kind, thank you." },
          { fr: "Ils sont à la maison.", en: "They're at home." },
        ],
      },
      {
        heading: `"Il" and "elle" also mean it`,
        body: [
          `Because every noun has a gender, the pronoun for a thing follows the noun, not the nature of the thing. "La voiture" is feminine, so the car is "elle". "Le livre" is masculine, so the book is "il". English speakers instinctively reach for a neutral word and there isn't one.`,
          `In the plural, "elles" is only for groups that are entirely feminine. One masculine noun or one man in the group and it becomes "ils". This is a grammatical rule, not a statement about who matters: "ils" is simply the default form.`,
        ],
        examples: [
          { fr: "J'ai une voiture. Elle est vieille.", en: "I have a car. It's old." },
          { fr: "Le musée ? Il est fermé le lundi.", en: "The museum? It's closed on Mondays." },
          { fr: "Léa et Chloé ? Elles sont au cinéma.", en: "Léa and Chloé? They're at the cinema." },
          { fr: "Léa, Chloé et Thomas ? Ils sont au cinéma.", en: "Léa, Chloé and Thomas? They're at the cinema." },
          { fr: "Les clés ? Elles sont sur la table.", en: "The keys? They're on the table." },
        ],
      },
      {
        heading: `"Tu" or "vous"?`,
        body: [
          `"Vous" is always the word for you when you speak to more than one person. For a single person it is the polite form: use it with anyone you don't know, with shop staff, older people, your doctor, your landlord, and in most first contacts at work. "Tu" is for friends, family, children, pets, and people your own age in relaxed settings, especially young people.`,
          `When in doubt, start with "vous". The switch to "tu" is usually offered by the older or more senior person: "On peut se tutoyer ?" (can we say tu?). Saying "tu" to a stranger can sound rude or overfamiliar; saying "vous" to a child sounds odd but never offends. Your choice also changes other words: "s'il te plaît" vs "s'il vous plaît", "et toi ?" vs "et vous ?".`,
        ],
        examples: [
          { fr: "Bonjour madame, vous avez l'heure, s'il vous plaît ?", en: "Hello, do you have the time, please?" },
          { fr: "Salut Karim, tu es libre ce soir ?", en: "Hi Karim, are you free tonight?" },
          { fr: "Les enfants, vous êtes prêts ?", en: "Kids, are you ready? (plural, so vous)" },
          { fr: "On peut se tutoyer, si tu veux.", en: "We can say tu to each other, if you like." },
          { fr: "Je m'appelle Hugo. Et vous ?", en: "My name is Hugo. And you?" },
        ],
      },
      {
        heading: `"On": the everyday we`,
        body: [
          `"On" originally means one or people in general, and it still does: "on parle français ici" means French is spoken here. But in everyday conversation French speakers use it constantly for we, far more often than "nous". "On y va ?" is the normal way to say shall we go?`,
          `Grammatically "on" is always third person singular, like "il": "on est", "on a", "on parle". When it means we, an adjective after it can agree with the real people: "on est contents" (we're happy). In formal writing, use "nous".`,
        ],
        examples: [
          { fr: "On est en vacances !", en: "We're on holiday!" },
          { fr: "On mange ensemble ce soir ?", en: "Shall we eat together tonight?" },
          { fr: "En France, on dit bonjour en entrant dans un magasin.", en: "In France, people say hello when they go into a shop." },
          { fr: "Ici, on parle anglais.", en: "English is spoken here." },
          { fr: "Avec Julie, on est très contentes.", en: "Julie and I are very happy. (two women)" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Bonjour monsieur, tu es d'où ?",
        right: "Bonjour monsieur, vous êtes d'où ?",
        why: `A stranger, and a man addressed as "monsieur", gets "vous". "Tu" is for people you know well or who have invited you to use it.`,
      },
      {
        wrong: "J'ai une maison. Il est grande.",
        right: "J'ai une maison. Elle est grande.",
        why: `There is no neutral it. "Maison" is feminine, so the pronoun is "elle", and the adjective agrees too.`,
      },
      {
        wrong: "On sommes à Paris.",
        right: "On est à Paris.",
        why: `Even when it means we, "on" takes the same verb form as "il" and "elle".`,
      },
      {
        wrong: "Marie et Paul ? Elles sont en retard.",
        right: "Marie et Paul ? Ils sont en retard.",
        why: `A group with at least one man or one masculine noun is "ils". "Elles" is only for all-feminine groups.`,
      },
      {
        wrong: "Je aime Paris.",
        right: "J'aime Paris.",
        why: `"Je" becomes "j'" before a vowel or a mute h. This élision is compulsory in writing and in speech.`,
      },
    ],
    faqs: [
      {
        q: `Is "vous" plural or polite?`,
        a: `Both. With several people it is always "vous", whether you know them or not. With one person it signals politeness or distance. The verb form is the same either way ("vous êtes"), but an adjective shows the difference: "vous êtes prêt ?" to one man, "vous êtes prêts ?" to a group.`,
      },
      {
        q: `When can I switch from "vous" to "tu"?`,
        a: `When the other person suggests it, or when it is obviously the norm (among students, in many start-ups, in sports clubs). If someone says "tu" to you first, you can usually answer with "tu". With in-laws, bosses and older people, wait to be asked.`,
      },
      {
        q: `Is "on" slang?`,
        a: `No. "On" for we is ordinary spoken French at every level of society, and it appears in emails and messages too. It is only in formal writing (reports, official letters, essays) that "nous" is expected.`,
      },
      {
        q: `Why isn't "je" capitalised?`,
        a: `French only capitalises the first word of a sentence and proper nouns. "Je", days of the week, months and nationality adjectives ("anglais") are all written in lower case.`,
      },
    ],
    related: ["french-articles-gender", "cest-vs-il-est", "avoir-expressions"],
    lessons: ["a1-greetings-etre-1", "a1-greetings-etre-2", "a1-dialogue-first-meetings"],
  },
  {
    slug: "french-articles-gender",
    title: "Gender and Articles: Le, La, Un, Une, Des",
    description:
      "How French noun gender works, the definite and indefinite articles, élision with l', plurals, and why French needs an article where English has none.",
    level: "A1",
    intro: [
      `Every French noun is either masculine or feminine, and almost every noun comes with a little word in front of it that shows which: "le" or "un" for masculine, "la" or "une" for feminine. Gender is mostly arbitrary. A table is feminine ("la table"), a book is masculine ("le livre"), and nothing about tables or books explains it.`,
      `That sounds like a memory burden, and it is, but there is a simple habit that solves most of it: never learn a noun on its own. Learn "la clé", not clé. This guide shows the articles, the endings that predict gender, how plurals work (mostly silently), and the big difference from English: French rarely lets a noun appear bare.`,
    ],
    sections: [
      {
        heading: "The articles at a glance",
        body: [
          `The definite article (the) is "le", "la" or "les". The indefinite article (a, an, some) is "un", "une" or "des". In the plural, gender disappears from the article: "les" and "des" serve both genders.`,
          `Before a vowel or a mute h, "le" and "la" both shrink to "l'": "l'ami", "l'école", "l'hôtel". This means "l'" hides the gender, so learn such nouns with "un" or "une": "un hôtel", "une école".`,
        ],
        table: {
          headers: ["", "Masculine", "Feminine", "Plural"],
          rows: [
            ["the", "le livre, l'ami", "la table, l'école", "les livres, les tables"],
            ["a / some", "un livre", "une table", "des livres, des tables"],
          ],
        },
        examples: [
          { fr: "le train, la gare", en: "the train, the station" },
          { fr: "un café et une bière, s'il vous plaît", en: "a coffee and a beer, please" },
          { fr: "l'hôtel est près de l'église", en: "the hotel is near the church" },
          { fr: "J'ai des amis à Lyon.", en: "I have friends in Lyon." },
          { fr: "Les enfants sont à l'école.", en: "The children are at school." },
        ],
      },
      {
        heading: "Endings that predict gender",
        body: [
          `You can guess a noun's gender from its ending surprisingly often. Words in "-tion", "-sion", "-té" and "-ure" are nearly always feminine. Words in "-age", "-ment", "-eau" and "-isme" are nearly always masculine. A final "-e" leans feminine, but there are hundreds of exceptions ("le musée", "le problème", "le fromage").`,
          `A few very common exceptions are worth learning on sight: "la plage", "la page", "l'image" (f.) and "l'eau" (f.) despite their masculine-looking endings. For people, the gender usually matches the person: "un étudiant", "une étudiante".`,
        ],
        examples: [
          { fr: "la question, la télévision, la liberté, la voiture", en: "the question, the television, freedom, the car" },
          { fr: "le fromage, le moment, le bureau, le tourisme", en: "the cheese, the moment, the office, tourism" },
          { fr: "la plage, l'eau froide", en: "the beach, cold water (both feminine)" },
          { fr: "un ami, une amie", en: "a friend (man), a friend (woman)" },
          { fr: "le problème, le musée", en: "the problem, the museum (masculine despite the -e)" },
        ],
      },
      {
        heading: "Plurals you see but don't hear",
        body: [
          `Most nouns add "-s" in the plural, and that "-s" is silent. "Le livre" and "les livres" sound different only because of the article: you hear "le" vs "lé". That is one reason French keeps its articles: they carry the number your ears can't get from the noun.`,
          `Nouns in "-eau" take "-x" ("les gâteaux"), most nouns in "-al" become "-aux" ("un journal, des journaux"), and nouns already ending in "-s", "-x" or "-z" don't change ("un bus, des bus"). In liaison, the "-s" of "les" and "des" is pronounced as a z before a vowel: "les amis" sounds like lé-z-ami.`,
        ],
        examples: [
          { fr: "un livre, des livres", en: "a book, books" },
          { fr: "un gâteau, des gâteaux", en: "a cake, cakes" },
          { fr: "un animal, des animaux", en: "an animal, animals" },
          { fr: "un prix, des prix", en: "a price, prices" },
          { fr: "les enfants, les hôtels", en: "the children, the hotels (with a z sound in liaison)" },
        ],
      },
      {
        heading: "Where French needs an article and English doesn't",
        body: [
          `English often uses a bare noun: I have friends, cats are cute, I like coffee. French almost never does. For an unspecified number of things, use "des": "j'ai des amis". For things in general, use the definite article: "les chats sont mignons", "j'aime le café". If you remove the article from a French sentence, it nearly always becomes ungrammatical.`,
          `The main exception at this level is jobs, nationalities and religions after "être": "je suis professeur", "elle est française", with no article. (Add an adjective and you need "c'est un...": see the c'est vs il est guide.)`,
        ],
        examples: [
          { fr: "Il y a des chaises dans la cuisine.", en: "There are chairs in the kitchen." },
          { fr: "Les chiens aiment les enfants.", en: "Dogs like children." },
          { fr: "J'adore la musique.", en: "I love music." },
          { fr: "La vie est belle.", en: "Life is beautiful." },
          { fr: "Elle est médecin.", en: "She's a doctor." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "J'ai amis à Paris.",
        right: "J'ai des amis à Paris.",
        why: `Where English drops the article for an indefinite plural, French uses "des". A bare noun after a verb almost never works.`,
      },
      {
        wrong: "J'aime chocolat.",
        right: "J'aime le chocolat.",
        why: `Things in general take the definite article in French: chocolate as a whole is "le chocolat".`,
      },
      {
        wrong: "le hôtel, la école",
        right: "l'hôtel, l'école",
        why: `"Le" and "la" become "l'" before a vowel or a mute h. This is compulsory, not a matter of style.`,
      },
      {
        wrong: "un plage",
        right: "une plage",
        why: `"Plage" ends in "-age" but is one of the famous feminine exceptions, along with "page" and "image". Learn every noun with its article.`,
      },
    ],
    faqs: [
      {
        q: "Is there a trick to learn gender?",
        a: `Learn each noun with "un" or "une" (not "le" or "l'", which can hide it), use the ending rules for new words, and say phrases aloud with an adjective ("une belle plage") so the gender sticks. After a few hundred nouns your instinct starts to work.`,
      },
      {
        q: "Does a wrong gender change the meaning?",
        a: `Usually it just sounds foreign; people will understand you. A few pairs really differ: "le livre" (book) vs "la livre" (pound), "le tour" (turn, tour) vs "la tour" (tower), "le poste" (job, set) vs "la poste" (post office).`,
      },
      {
        q: `What is the h aspiré?`,
        a: `A small group of words starting with h behave as if the h were a consonant: no élision and no liaison. You say "le héros", "la honte", "les haricots" (no z sound). Dictionaries mark them, often with an asterisk. Most h-words, like "l'homme" and "l'hôtel", have a mute h.`,
      },
    ],
    related: ["french-adjective-agreement", "french-partitive-articles", "cest-vs-il-est"],
    lessons: ["a1-gender-number-articles-1", "a1-gender-number-articles-2", "a1-contrast-articles", "a1-sounds-liaison-elision"],
  },
  {
    slug: "french-adjective-agreement",
    title: "Adjective Agreement and Placement",
    description:
      "How French adjectives change for masculine, feminine and plural, the irregular forms, why most adjectives go after the noun, and the BAGS adjectives that go before.",
    level: "A1",
    intro: [
      `English adjectives never change: a tall man, a tall woman, tall people. French adjectives agree with the noun they describe, taking a feminine form and a plural form. So "grand" becomes "grande", "grands" and "grandes". In writing this is constant; in speech, the feminine is often audible ("grand" ends in a silent d, "grande" sounds the d), while the plural -s is usually silent.`,
      `The second difference is position. Most French adjectives come after the noun: "un film intéressant", literally a film interesting. A short list of very common adjectives comes before. This guide covers both, plus the handful of special forms like "bel" and "vieil" that exist only to avoid two vowels colliding.`,
    ],
    sections: [
      {
        heading: "The basic rule: add -e, add -s",
        body: [
          `Start from the masculine singular, which is the dictionary form. Add "-e" for the feminine and "-s" for the plural; the feminine plural gets both, "-es". If the masculine already ends in an unaccented "-e", the feminine doesn't change ("rouge", "rouge"). If it already ends in "-s" or "-x", the masculine plural doesn't change ("français", "heureux").`,
          `Listen for the difference: adding "-e" often makes a silent final consonant pronounced. "Petit" ends in a vowel sound; "petite" ends in a t. "Français" vs "française", "grand" vs "grande". For a mixed group, use the masculine plural.`,
        ],
        table: {
          headers: ["", "Masculine", "Feminine"],
          rows: [
            ["singular", "petit, rouge, français", "petite, rouge, française"],
            ["plural", "petits, rouges, français", "petites, rouges, françaises"],
          ],
        },
        examples: [
          { fr: "Mon frère est grand. Ma sœur est grande.", en: "My brother is tall. My sister is tall." },
          { fr: "des chaussures noires", en: "black shoes" },
          { fr: "Paul et Léa sont fatigués.", en: "Paul and Léa are tired. (mixed group, masculine plural)" },
          { fr: "une maison rouge, des voitures rouges", en: "a red house, red cars" },
          { fr: "Elle est française, il est français.", en: "She's French, he's French." },
        ],
      },
      {
        heading: "Feminine forms that change more",
        body: [
          `Several groups follow their own pattern. These are regular in the sense that whole families behave the same way, so learn the pattern rather than the individual words.`,
          `A few very common adjectives are fully irregular in the feminine: "blanc / blanche", "frais / fraîche", "long / longue", "doux / douce", "faux / fausse".`,
        ],
        table: {
          headers: ["Ending", "Masculine → feminine", "Example"],
          rows: [
            ["-eux → -euse", "heureux → heureuse", "une femme heureuse"],
            ["-if → -ive", "sportif → sportive", "une fille sportive"],
            ["-er → -ère", "cher → chère", "une robe chère"],
            ["-en, -on → -enne, -onne", "italien → italienne, bon → bonne", "une bonne idée"],
            ["-el → -elle", "naturel → naturelle", "une couleur naturelle"],
            ["-al → -aux (masc. plural)", "national → nationaux", "des journaux nationaux"],
          ],
        },
        examples: [
          { fr: "Elle est très sérieuse.", en: "She's very serious." },
          { fr: "C'est une ville ancienne.", en: "It's an old town." },
          { fr: "une chemise blanche", en: "a white shirt" },
          { fr: "Ma grand-mère est très active.", en: "My grandmother is very active." },
          { fr: "une longue journée", en: "a long day" },
        ],
      },
      {
        heading: "Most adjectives go after the noun",
        body: [
          `The default position is after the noun, the opposite of English. This covers colours, nationalities, shapes, most adjectives of two or more syllables, and past participles used as adjectives: "un pull bleu", "un restaurant italien", "une table ronde", "une porte fermée".`,
          `It helps to think of the noun as the main information and the adjective as the detail that narrows it down: first the thing, then which kind.`,
        ],
        examples: [
          { fr: "un chat noir", en: "a black cat" },
          { fr: "une voiture allemande", en: "a German car" },
          { fr: "un livre intéressant", en: "an interesting book" },
          { fr: "des gens sympathiques", en: "nice people" },
          { fr: "une fenêtre ouverte", en: "an open window" },
        ],
      },
      {
        heading: "BAGS: the adjectives that go before",
        body: [
          `A small group of short, very common adjectives goes before the noun. The usual memory aid is BAGS: Beauty ("beau", "joli"), Age ("jeune", "vieux", "nouveau"), Goodness ("bon", "mauvais"), Size ("grand", "petit", "gros"). Ordinal numbers ("premier", "deuxième") also go before.`,
          `"Beau", "nouveau" and "vieux" have a special masculine form before a vowel or mute h: "bel", "nouvel", "vieil". It sounds like the feminine and avoids a vowel clash: "un bel appartement", "un nouvel ami", "un vieil homme". And when a plural adjective comes before the noun, "des" usually becomes "de" in careful French: "de belles photos".`,
        ],
        table: {
          headers: ["Masculine", "Before a vowel", "Feminine", "Masc. plural"],
          rows: [
            ["beau", "bel", "belle", "beaux"],
            ["nouveau", "nouvel", "nouvelle", "nouveaux"],
            ["vieux", "vieil", "vieille", "vieux"],
          ],
        },
        examples: [
          { fr: "un petit appartement", en: "a small flat" },
          { fr: "une jolie maison", en: "a pretty house" },
          { fr: "un bel homme", en: "a handsome man" },
          { fr: "C'est mon nouvel ordinateur.", en: "It's my new computer." },
          { fr: "Ils ont de beaux enfants.", en: "They have beautiful children." },
          { fr: "C'est une bonne idée.", en: "It's a good idea." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "une robe noir",
        right: "une robe noire",
        why: `"Robe" is feminine, so the adjective takes "-e". It's silent here, but it must be written.`,
      },
      {
        wrong: "un rouge pull",
        right: "un pull rouge",
        why: `Colours always come after the noun in French.`,
      },
      {
        wrong: "un beau appartement",
        right: "un bel appartement",
        why: `Before a masculine noun starting with a vowel or mute h, "beau", "nouveau" and "vieux" become "bel", "nouvel", "vieil".`,
      },
      {
        wrong: "Ma mère est heureux.",
        right: "Ma mère est heureuse.",
        why: `Adjectives agree after "être" too. "-eux" becomes "-euse" in the feminine.`,
      },
    ],
    faqs: [
      {
        q: "Can an adjective change meaning depending on its position?",
        a: `Yes, a few common ones do: "un grand homme" is a great man, "un homme grand" a tall man; "mon ancien appartement" is my former flat, "un appartement ancien" an old one; "ma propre chambre" is my own room, "ma chambre propre" my clean room. You will meet more at higher levels.`,
      },
      {
        q: "What about adjectives with two nouns of different genders?",
        a: `Use the masculine plural: "une chemise et un pantalon blancs". To avoid an odd sound, put the masculine noun next to the adjective.`,
      },
      {
        q: "Do colours always agree?",
        a: `Most do. But colours that are really nouns, like "orange" and "marron", don't change: "des chaussures marron". Nor do compound colours: "une veste bleu foncé" (a dark blue jacket).`,
      },
    ],
    related: ["french-articles-gender", "subject-pronouns-tu-vous", "cest-vs-il-est"],
    lessons: ["a1-adjective-agreement", "a1-adjective-placement", "a1-transform-agreement", "a1-spiral-articles-adjectives-etre"],
  },
  {
    slug: "french-present-tense-er-verbs",
    title: "The Present Tense of -ER Verbs",
    description:
      "How to conjugate regular -er verbs in the French present, why five of the six forms sound the same, how one French present covers three English ones, and the spelling-change verbs like manger and acheter.",
    level: "A1",
    intro: [
      `About nine French verbs in ten end in "-er", and almost all of them are regular. Learn one, such as "parler" (to speak), and you can conjugate thousands: "aimer", "habiter", "travailler", "regarder", "écouter". New verbs that enter the language ("googler", "liker") join this group too.`,
      `The good news for listening is that the present tense of these verbs has only three spoken forms, even though it has six written ones. The thing to learn is that French has just one present tense where English has three: "je parle" is I speak, I am speaking, and I do speak.`,
    ],
    sections: [
      {
        heading: "Stem + ending",
        body: [
          `Remove "-er" from the infinitive to get the stem ("parl-"), then add the ending for each person: "-e", "-es", "-e", "-ons", "-ez", "-ent". The "-ent" of "ils parlent" is completely silent; it is the most common pronunciation trap for English speakers.`,
          `So "je parle", "tu parles", "il parle" and "ils parlent" all sound identical. Only "nous parlons" and "vous parlez" sound different. If the verb starts with a vowel, "je" becomes "j'" and liaison links the plural pronouns: "nous aimons", "ils aiment" (with a z sound).`,
        ],
        table: {
          headers: ["Person", "parler (to speak)", "aimer (to like, love)"],
          rows: [
            ["je / j'", "je parle", "j'aime"],
            ["tu", "tu parles", "tu aimes"],
            ["il / elle / on", "il parle", "elle aime"],
            ["nous", "nous parlons", "nous aimons"],
            ["vous", "vous parlez", "vous aimez"],
            ["ils / elles", "ils parlent", "elles aiment"],
          ],
        },
        examples: [
          { fr: "Je travaille à Lyon.", en: "I work in Lyon." },
          { fr: "Tu habites où ?", en: "Where do you live?" },
          { fr: "Nous regardons un film.", en: "We're watching a film." },
          { fr: "Vous parlez anglais ?", en: "Do you speak English?" },
          { fr: "Ils écoutent la radio.", en: "They're listening to the radio." },
        ],
      },
      {
        heading: "One present, three English meanings",
        body: [
          `French has no separate continuous tense and no "do" auxiliary. "Je mange" covers I eat, I'm eating and I do eat. Context does the work. Don't try to translate "am" or "do": "je suis manger" and "je fais manger" are both wrong.`,
          `If you really need to stress that something is in progress right now, French has "être en train de" + infinitive: "je suis en train de manger" (I'm in the middle of eating). It's useful, but much less frequent than the English -ing form. The French present is also often used for the near future: "je travaille demain" (I'm working tomorrow).`,
        ],
        examples: [
          { fr: "Je mange une pomme.", en: "I'm eating an apple." },
          { fr: "Je mange de la viande.", en: "I eat meat." },
          { fr: "Mais si, j'aime le jazz !", en: "But I do like jazz!" },
          { fr: "Tu cherches quelque chose ?", en: "Are you looking for something?" },
          { fr: "Je suis en train de cuisiner.", en: "I'm busy cooking right now." },
          { fr: "On arrive demain soir.", en: "We're arriving tomorrow evening." },
        ],
      },
      {
        heading: "Spelling-change verbs",
        body: [
          `A few groups of -er verbs change their spelling to keep the pronunciation regular. Verbs in "-ger" add an "e" before "-ons" so the g stays soft: "nous mangeons". Verbs in "-cer" use "ç" before "-ons": "nous commençons".`,
          `Verbs like "acheter" and "préférer" change their vowel when the ending is silent: "j'achète", "je préfère", but "nous achetons", "nous préférons". Verbs like "appeler" double the consonant instead: "j'appelle", "nous appelons". The pattern is a "boot": the four forms with silent endings (je, tu, il, ils) change, "nous" and "vous" don't.`,
        ],
        table: {
          headers: ["Person", "manger", "acheter", "préférer", "appeler"],
          rows: [
            ["je", "mange", "achète", "préfère", "appelle"],
            ["tu", "manges", "achètes", "préfères", "appelles"],
            ["il / elle", "mange", "achète", "préfère", "appelle"],
            ["nous", "mangeons", "achetons", "préférons", "appelons"],
            ["vous", "mangez", "achetez", "préférez", "appelez"],
            ["ils / elles", "mangent", "achètent", "préfèrent", "appellent"],
          ],
        },
        examples: [
          { fr: "Nous mangeons à midi.", en: "We eat at noon." },
          { fr: "Nous commençons à huit heures.", en: "We start at eight." },
          { fr: "J'achète du pain.", en: "I'm buying some bread." },
          { fr: "Tu préfères le thé ou le café ?", en: "Do you prefer tea or coffee?" },
          { fr: "Je m'appelle Camille.", en: "My name is Camille." },
        ],
      },
      {
        heading: "Saying no: ne...pas",
        body: [
          `To make the verb negative, wrap it in "ne" ... "pas": "je ne parle pas". "Ne" becomes "n'" before a vowel: "je n'aime pas". The two parts sandwich the conjugated verb.`,
          `In everyday speech the "ne" is very often dropped: "j'aime pas", "je travaille pas demain". That is normal spoken French, but write both parts. More negative words are covered in the questions and negation guide.`,
        ],
        examples: [
          { fr: "Je ne travaille pas le samedi.", en: "I don't work on Saturdays." },
          { fr: "Il n'habite pas ici.", en: "He doesn't live here." },
          { fr: "Nous ne regardons pas la télé.", en: "We don't watch TV." },
          { fr: "J'aime pas trop ça.", en: "I don't really like that. (casual speech)" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Je suis manger.",
        right: "Je mange.",
        why: `There is no be + -ing in French. The simple present already means I'm eating.`,
      },
      {
        wrong: "Ils parle français.",
        right: "Ils parlent français.",
        why: `The "-ent" ending is silent, so "il parle" and "ils parlent" sound the same, but it must be written. And never pronounce it: that is the most common accent mistake with this tense.`,
      },
      {
        wrong: "nous mangons",
        right: "nous mangeons",
        why: `Without the "e", the g would sound hard as in "gone". Verbs in "-ger" keep the soft sound with "-geons".`,
      },
      {
        wrong: "Tu achetes du pain ?",
        right: "Tu achètes du pain ?",
        why: `"Acheter" takes "è" in the four forms with a silent ending (je, tu, il, ils). Without the accent the e would be swallowed.`,
      },
      {
        wrong: "Je ne aime pas le café.",
        right: "Je n'aime pas le café.",
        why: `"Ne" becomes "n'" before a vowel or mute h.`,
      },
    ],
    faqs: [
      {
        q: `Is "aller" an -er verb?`,
        a: `It ends in "-er" but it is the one completely irregular verb in the group: "je vais", "tu vas", "il va", "nous allons", "vous allez", "ils vont". Learn it separately; you need it for the near future.`,
      },
      {
        q: "How do I say I've been living here for two years?",
        a: `French uses the present with "depuis": "j'habite ici depuis deux ans". The action is still going on, so French keeps the present tense where English uses the present perfect.`,
      },
      {
        q: "Do I need to learn the vous form if I always use tu?",
        a: `Yes. "Vous" is the plural you as well as the polite one, so you will use it with groups of friends too. Its ending, "-ez", is also the one you meet in instructions and signs.`,
      },
    ],
    related: ["subject-pronouns-tu-vous", "avoir-expressions", "french-questions-and-negation"],
    lessons: ["a1-er-verbs-1", "a1-er-verbs-2", "a1-negation-ne-pas", "a1-spelling-change-verbs-1", "a1-spelling-change-verbs-2"],
  },
  {
    slug: "avoir-expressions",
    title: "Avoir and Avoir Expressions: J'ai Faim, J'ai 20 Ans",
    description:
      "The verb avoir in the present, and the many everyday expressions where French says to have and English says to be: age, hunger, thirst, cold, fear and need.",
    level: "A1",
    intro: [
      `"Avoir" means to have, and on its own it works much as in English: "j'ai une voiture", "tu as un stylo ?". The surprise is that French uses "avoir" in a whole set of expressions where English uses to be. You aren't hungry in French, you have hunger: "j'ai faim". You aren't twenty, you have twenty years: "j'ai vingt ans".`,
      `These expressions are among the most frequent in the language and the most common source of beginner errors, because the English sentence pushes you straight towards "être". This guide gives you the conjugation, the list to learn, and the few "être" sentences that look similar but aren't.`,
    ],
    sections: [
      {
        heading: `"Avoir" in the present`,
        body: [
          `"Avoir" is irregular and must be learned by heart. Note the élision "j'ai", and the liaison in the plural: "nous avons", "vous avez", "ils ont" with a z sound. That z is the only thing that distinguishes "ils ont" (they have) from "ils sont" (they are) in speech, so listen for it.`,
          `With "avoir", "un", "une" and "des" become "de" or "d'" after a negative: "j'ai un chien" but "je n'ai pas de chien".`,
        ],
        table: {
          headers: ["Person", "avoir", "Negative"],
          rows: [
            ["je", "j'ai", "je n'ai pas"],
            ["tu", "tu as", "tu n'as pas"],
            ["il / elle / on", "il a", "il n'a pas"],
            ["nous", "nous avons", "nous n'avons pas"],
            ["vous", "vous avez", "vous n'avez pas"],
            ["ils / elles", "ils ont", "ils n'ont pas"],
          ],
        },
        examples: [
          { fr: "J'ai deux frères.", en: "I have two brothers." },
          { fr: "Tu as un stylo ?", en: "Have you got a pen?" },
          { fr: "Nous avons une réunion à dix heures.", en: "We have a meeting at ten." },
          { fr: "Ils ont une maison à la campagne.", en: "They have a house in the country." },
          { fr: "Je n'ai pas de voiture.", en: "I don't have a car." },
        ],
      },
      {
        heading: "Have, not be: the core expressions",
        body: [
          `In these expressions "avoir" is followed by a bare noun, with no article: "faim" (hunger), "soif" (thirst), "chaud" (heat), "froid" (cold), "peur" (fear), "sommeil" (sleepiness), "raison" (rightness), "tort" (wrongness). Because they are nouns, they don't agree: a woman says "j'ai froid", not "j'ai froide".`,
          `To say very, use "très" ("j'ai très faim") or, more casually, "trop" in speech among young people. "Avoir chaud / froid" is about how a person feels; for the weather use "il fait chaud / froid".`,
        ],
        table: {
          headers: ["French", "English"],
          rows: [
            ["avoir faim / soif", "to be hungry / thirsty"],
            ["avoir chaud / froid", "to be (feel) hot / cold"],
            ["avoir peur (de)", "to be afraid (of)"],
            ["avoir sommeil", "to be sleepy"],
            ["avoir raison / tort", "to be right / wrong"],
            ["avoir ... ans", "to be ... years old"],
          ],
        },
        examples: [
          { fr: "J'ai très faim, on mange ?", en: "I'm really hungry, shall we eat?" },
          { fr: "Tu as froid ? Je ferme la fenêtre.", en: "Are you cold? I'll close the window." },
          { fr: "Ma fille a peur des chiens.", en: "My daughter is afraid of dogs." },
          { fr: "Vous avez raison.", en: "You're right." },
          { fr: "Il fait froid aujourd'hui.", en: "It's cold today. (weather: faire)" },
        ],
      },
      {
        heading: "Age: j'ai vingt ans",
        body: [
          `Age always uses "avoir" and the word "ans" (years), which you cannot leave out: "j'ai trente ans", never "je suis trente". To ask, say "tu as quel âge ?" or, politely, "quel âge avez-vous ?".`,
          `"An" also appears in "un an" (one year). The z of liaison links the number: "deux ans", "trois ans", "dix ans" (z sound), "neuf ans" (v sound), "vingt ans" (t sound).`,
        ],
        examples: [
          { fr: "J'ai vingt-cinq ans.", en: "I'm twenty-five." },
          { fr: "Tu as quel âge ?", en: "How old are you?" },
          { fr: "Mon fils a trois ans.", en: "My son is three." },
          { fr: "Quel âge a ta grand-mère ?", en: "How old is your grandmother?" },
          { fr: "Elle a un an aujourd'hui.", en: "She's one today." },
        ],
      },
      {
        heading: "Need, want and pain",
        body: [
          `Two more "avoir" expressions take "de" + a noun or infinitive: "avoir besoin de" (to need) and "avoir envie de" (to feel like, to want). "J'ai besoin d'un café", "j'ai envie de dormir". They are very common in speech and softer than "vouloir".`,
          `To say something hurts, use "avoir mal à" + the body part, with the contractions "au" and "aux": "j'ai mal à la tête", "j'ai mal au dos", "j'ai mal aux dents".`,
        ],
        examples: [
          { fr: "J'ai besoin d'aide.", en: "I need help." },
          { fr: "On a besoin de pain.", en: "We need bread." },
          { fr: "Tu as envie d'aller au cinéma ?", en: "Do you feel like going to the cinema?" },
          { fr: "J'ai mal à la tête.", en: "I've got a headache." },
          { fr: "Il a mal au dos.", en: "His back hurts." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Je suis faim.",
        right: "J'ai faim.",
        why: `Hunger, thirst, heat, cold and fear are things you have in French, not states you are.`,
      },
      {
        wrong: "Je suis vingt ans.",
        right: "J'ai vingt ans.",
        why: `Age uses "avoir", and "ans" is compulsory.`,
      },
      {
        wrong: "Il est froid, il veut un pull.",
        right: "Il a froid, il veut un pull.",
        why: `"Il est froid" describes the person as cold to the touch, or cold in character. For feeling cold, use "avoir".`,
      },
      {
        wrong: "J'ai froide.",
        right: "J'ai froid.",
        why: `"Froid" here is a noun (the cold), so it never agrees with the speaker.`,
      },
      {
        wrong: "Je n'ai pas un chien.",
        right: "Je n'ai pas de chien.",
        why: `After a negative, "un", "une" and "des" become "de".`,
      },
    ],
    faqs: [
      {
        q: `Is "je suis chaud" ever correct?`,
        a: `Only with a different meaning. "Il fait chaud" is the weather, "j'ai chaud" is how you feel, and "je suis chaud" in casual speech means I'm up for it, keen (and in some contexts it has a sexual sense). Stick to "j'ai chaud".`,
      },
      {
        q: `How do I hear "ils ont" vs "ils sont"?`,
        a: `"Ils ont" has a z sound from liaison (il-zon); "ils sont" has an s sound (il-son). It's a small difference that changes the verb, so practise saying both.`,
      },
      {
        q: `Can I use "vouloir" instead of "avoir envie de"?`,
        a: `Yes, "je veux dormir" is fine, but "vouloir" in the present can sound blunt. "J'ai envie de" expresses a feeling, and "je voudrais" is the polite way to ask for something.`,
      },
    ],
    related: ["french-present-tense-er-verbs", "subject-pronouns-tu-vous", "french-questions-and-negation"],
    lessons: ["a1-avoir-1", "a1-avoir-2", "a1-contrast-etre-avoir", "a1-word-web-body"],
  },
  {
    slug: "pouvoir-vouloir-devoir",
    title: "Pouvoir, Vouloir, Devoir: Can, Want, Must",
    description:
      "The three French modal verbs pouvoir, vouloir and devoir: their irregular present, how they take a bare infinitive, polite je voudrais and pourriez-vous, and what je ne dois pas really means.",
    level: "A1",
    intro: [
      `"Pouvoir" (can, to be able to), "vouloir" (to want) and "devoir" (must, to have to) are the verbs you lean on most once you start doing things in French. "Je peux payer par carte ?", "je veux partir", "je dois travailler". Each is followed directly by an infinitive, with no "à" or "de" in between, just like English can and must.`,
      `They are irregular, but they share a pattern: a short stem in the singular and in "ils", a different one for "nous" and "vous". They also carry politeness. A bare "je veux" can sound demanding, and French softens it with "je voudrais" (I'd like) and "pourriez-vous" (could you), forms you can use as set phrases long before you learn the conditional.`,
    ],
    sections: [
      {
        heading: "The present of the three verbs",
        body: [
          `Look at the pattern rather than learning eighteen forms separately. The singular forms end in "-x", "-x", "-t" (or "-s", "-s", "-t" for "devoir") and all sound the same within each verb: "je peux", "tu peux", "il peut". "Nous" and "vous" go back to the infinitive's stem ("pouvons", "voulons", "devons"). "Ils" has its own form with a pronounced consonant: "ils peuvent", "ils veulent", "ils doivent".`,
          `That last point matters for listening: "il peut" and "ils peuvent" sound different, unlike regular -er verbs, so you can hear whether one person or several are meant.`,
        ],
        table: {
          headers: ["Person", "pouvoir", "vouloir", "devoir"],
          rows: [
            ["je", "je peux", "je veux", "je dois"],
            ["tu", "tu peux", "tu veux", "tu dois"],
            ["il / elle / on", "il peut", "elle veut", "on doit"],
            ["nous", "nous pouvons", "nous voulons", "nous devons"],
            ["vous", "vous pouvez", "vous voulez", "vous devez"],
            ["ils / elles", "ils peuvent", "elles veulent", "ils doivent"],
          ],
        },
        examples: [
          { fr: "Je peux entrer ?", en: "Can I come in?" },
          { fr: "Tu veux un café ?", en: "Do you want a coffee?" },
          { fr: "On doit partir à huit heures.", en: "We have to leave at eight." },
          { fr: "Vous pouvez répéter, s'il vous plaît ?", en: "Could you repeat that, please?" },
          { fr: "Les enfants veulent aller à la plage.", en: "The children want to go to the beach." },
        ],
      },
      {
        heading: "Modal + infinitive",
        body: [
          `The second verb stays in the infinitive and follows directly: "je peux venir", "elle veut dormir", "nous devons travailler". Don't add a preposition, and don't conjugate the second verb. English want to has a "to", but French "vouloir" doesn't: "je veux partir".`,
          `In the negative, "ne...pas" goes around the modal, the conjugated verb: "je ne peux pas venir", "il ne veut pas manger". Object pronouns go before the infinitive, because they belong to it: "je peux le faire", "tu dois l'appeler".`,
        ],
        examples: [
          { fr: "Je veux apprendre le français.", en: "I want to learn French." },
          { fr: "Il ne peut pas venir ce soir.", en: "He can't come tonight." },
          { fr: "Nous devons acheter du pain.", en: "We have to buy some bread." },
          { fr: "Tu peux m'aider ?", en: "Can you help me?" },
          { fr: "Elle ne veut pas sortir.", en: "She doesn't want to go out." },
        ],
      },
      {
        heading: "Politeness: je voudrais, pourriez-vous",
        body: [
          `In a shop, café or office, "je veux" sounds blunt, like I want rather than I'd like. Use "je voudrais" instead: "je voudrais un croissant, s'il vous plaît". It is the conditional of "vouloir", but at this level just treat it as a fixed polite phrase. Similarly, "vous pouvez...?" is fine, and "pourriez-vous...?" or "est-ce que vous pourriez...?" is extra polite.`,
          `Among friends, "tu veux...?" is perfectly normal for offers and invitations: "tu veux venir ?". It's only when you are asking for something for yourself that "je veux" can sound rude.`,
        ],
        examples: [
          { fr: "Je voudrais une baguette, s'il vous plaît.", en: "I'd like a baguette, please." },
          { fr: "Je voudrais réserver une table pour deux.", en: "I'd like to book a table for two." },
          { fr: "Pourriez-vous m'aider ?", en: "Could you help me?" },
          { fr: "Est-ce que je peux payer par carte ?", en: "Can I pay by card?" },
          { fr: "Tu veux venir avec nous ?", en: "Do you want to come with us?" },
        ],
      },
      {
        heading: "Must, must not, don't have to",
        body: [
          `"Devoir" covers must and have to. Be careful in the negative: "je ne dois pas" means I must not (it's forbidden or a bad idea), not I don't have to. For I don't have to, say "je ne suis pas obligé de" or "ce n'est pas la peine de".`,
          `"Devoir" can also express probability, like English must: "il doit être fatigué" (he must be tired). And "pouvoir" covers permission (can I?) and possibility; knowing how to do something is "savoir": "je sais nager".`,
        ],
        examples: [
          { fr: "Tu ne dois pas fumer ici.", en: "You mustn't smoke here." },
          { fr: "Tu n'es pas obligé de venir.", en: "You don't have to come." },
          { fr: "Il doit être malade.", en: "He must be ill." },
          { fr: "On peut se garer ici ?", en: "Can we park here?" },
          { fr: "Je dois réviser pour mon examen.", en: "I've got to revise for my exam." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Je peux à venir demain.",
        right: "Je peux venir demain.",
        why: `Modal verbs take the infinitive directly, with no preposition.`,
      },
      {
        wrong: "Je veux que je pars.",
        right: "Je veux partir.",
        why: `When the person who wants and the person who acts are the same, use "vouloir" + infinitive.`,
      },
      {
        wrong: "Bonjour, je veux un café.",
        right: "Je voudrais un café, s'il vous plaît.",
        why: `Said to a waiter or shop assistant, "je veux" sounds demanding; "je voudrais" is the polite norm.`,
      },
      {
        wrong: "Tu ne dois pas venir, c'est optionnel.",
        right: "Tu n'es pas obligé de venir, c'est optionnel.",
        why: `"Ne pas devoir" means must not. For not having to, use "ne pas être obligé de".`,
      },
      {
        wrong: "Ils peut venir.",
        right: "Ils peuvent venir.",
        why: `The "ils" form is different and audible: "peuvent", "veulent", "doivent".`,
      },
    ],
    faqs: [
      {
        q: `What's the difference between "pouvoir" and "savoir"?`,
        a: `"Pouvoir" is being able to or being allowed to at a given moment; "savoir" + infinitive is a learned skill. "Je sais conduire, mais je ne peux pas : j'ai bu."`,
      },
      {
        q: `Is "il faut" the same as "devoir"?`,
        a: `Close. "Il faut partir" (we've got to go, one must go) is impersonal and very common in speech; "je dois partir" says who has to. Both take a bare infinitive.`,
      },
      {
        q: `Can "vouloir" be used for offers?`,
        a: `Yes, in questions: "vous voulez un thé ?" is a normal, friendly offer. "Voulez-vous...?" is more formal, and "vous voulez bien...?" is a polite way of asking someone to do something.`,
      },
    ],
    related: ["savoir-vs-connaitre", "futur-proche-venir-de", "french-questions-and-negation"],
    lessons: ["a1-modal-verbs-infinitive"],
  },
  {
    slug: "savoir-vs-connaitre",
    title: "Savoir vs Connaître",
    description:
      "French has two verbs for to know. Savoir is for facts and skills, connaître for people, places and things you are familiar with. The rule, the conjugations and the traps.",
    level: "A1",
    intro: [
      `English uses to know for everything: I know the answer, I know Paris, I know how to swim, I know your sister. French divides this between two verbs. "Savoir" is knowing information or knowing how to do something. "Connaître" is being acquainted or familiar with someone or something.`,
      `A practical test that works almost every time: look at what comes after the verb. If it is a person, a place, a book or a film, it's "connaître". If it is a clause ("que...", "où...", "si...", "comment..."), an infinitive, or a piece of information, it's "savoir".`,
    ],
    sections: [
      {
        heading: "The two conjugations",
        body: [
          `Both verbs are irregular. "Savoir" has a short singular ("je sais", "tu sais", "il sait", all pronounced alike) and a longer plural with a v. "Connaître" keeps its circumflex only where the "i" comes before a "t": "il connaît". Since the 1990 spelling reform "il connait" without the circumflex is also accepted, but the traditional spelling is still the norm in most texts.`,
        ],
        table: {
          headers: ["Person", "savoir", "connaître"],
          rows: [
            ["je", "je sais", "je connais"],
            ["tu", "tu sais", "tu connais"],
            ["il / elle / on", "il sait", "il connaît"],
            ["nous", "nous savons", "nous connaissons"],
            ["vous", "vous savez", "vous connaissez"],
            ["ils / elles", "ils savent", "ils connaissent"],
          ],
        },
        examples: [
          { fr: "Je sais.", en: "I know." },
          { fr: "Tu connais Marseille ?", en: "Do you know Marseille? (Have you been there?)" },
          { fr: "Nous ne savons pas.", en: "We don't know." },
          { fr: "Vous connaissez ma femme ?", en: "Have you met my wife?" },
        ],
      },
      {
        heading: `"Savoir": facts, clauses and skills`,
        body: [
          `Use "savoir" for a fact you have in your head, and especially before a clause: "je sais que...", "tu sais où...", "il ne sait pas si...". Use it alone for I know / I don't know: "je sais", "je ne sais pas" (often "je sais pas" or even "chais pas" in speech).`,
          `"Savoir" + infinitive means to know how to, a learned skill: "je sais nager". English often says can here, but "pouvoir" means being able or allowed to at a given moment, while "savoir" is the skill itself: "je sais nager, mais je ne peux pas aujourd'hui" (I can swim, but I can't today).`,
        ],
        examples: [
          { fr: "Je sais qu'il est malade.", en: "I know he's ill." },
          { fr: "Tu sais où est la gare ?", en: "Do you know where the station is?" },
          { fr: "Je ne sais pas s'il vient.", en: "I don't know if he's coming." },
          { fr: "Elle sait parler trois langues.", en: "She can speak three languages." },
          { fr: "Vous savez à quelle heure le film commence ?", en: "Do you know what time the film starts?" },
        ],
      },
      {
        heading: `"Connaître": people, places and things`,
        body: [
          `Use "connaître" with a direct noun object: people ("je connais Paul"), places ("je connais bien Lyon"), works ("tu connais ce film ?"), and things you are familiar with ("je connais ce restaurant"). It is never followed by "que" or an infinitive.`,
          `"Connaître" is also the polite way to ask whether someone has heard of or tried something: "vous connaissez la tarte Tatin ?". With a person, it means you have met them, not that you know facts about them.`,
        ],
        examples: [
          { fr: "Je connais bien ce quartier.", en: "I know this neighbourhood well." },
          { fr: "Tu connais Thomas ?", en: "Do you know Thomas?" },
          { fr: "Je ne connais pas cette chanson.", en: "I don't know this song." },
          { fr: "Vous connaissez un bon restaurant près d'ici ?", en: "Do you know a good restaurant near here?" },
          { fr: "Ils se connaissent depuis l'école.", en: "They've known each other since school." },
        ],
      },
      {
        heading: "The borderline cases",
        body: [
          `With a noun that stands for information, such as "la réponse", "la date", "l'adresse" or "son nom", both verbs are possible. "Savoir" means you can produce the answer; "connaître" means it is familiar to you. In everyday French "je connais la réponse" and "je sais la réponse" are both common, with "connaître" slightly more usual before a noun.`,
          `Learning something by heart is "savoir": "je sais ma leçon", "il sait le poème par cœur". When you want to say you know whether, how, why, or what, it's always "savoir".`,
        ],
        examples: [
          { fr: "Tu sais son nom ? / Tu connais son nom ?", en: "Do you know her name?" },
          { fr: "Je connais la réponse.", en: "I know the answer." },
          { fr: "Il sait sa leçon par cœur.", en: "He knows his lesson by heart." },
          { fr: "Je ne sais pas comment il s'appelle.", en: "I don't know what he's called." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Je sais Paris.",
        right: "Je connais Paris.",
        why: `A place you are familiar with takes "connaître". "Savoir" can't be followed directly by a place or a person.`,
      },
      {
        wrong: "Je connais qu'il est là.",
        right: "Je sais qu'il est là.",
        why: `"Connaître" never introduces a clause. Before "que", "où", "si" or "comment", use "savoir".`,
      },
      {
        wrong: "Tu sais Marie ?",
        right: "Tu connais Marie ?",
        why: `People are always "connaître".`,
      },
      {
        wrong: "Je connais nager.",
        right: "Je sais nager.",
        why: `Knowing how to do something is "savoir" + infinitive.`,
      },
    ],
    faqs: [
      {
        q: `What's the difference between "je sais nager" and "je peux nager"?`,
        a: `"Je sais nager" means I know how to swim, a skill. "Je peux nager" means I am able or allowed to swim right now: the pool is open, my injury has healed. English uses can for both.`,
      },
      {
        q: `What does "tu sais" mean in conversation?`,
        a: `Like English you know, it is a filler and a way to bring the listener in: "c'était difficile, tu sais". "Tu vois" (you see) does the same job.`,
      },
      {
        q: `Is "connaître" ever used for skills?`,
        a: `Yes, with a noun for a field: "il connaît bien l'informatique" (he knows a lot about computing). With a verb, it's "savoir": "il sait programmer".`,
      },
    ],
    related: ["pouvoir-vouloir-devoir", "french-questions-and-negation", "futur-proche-venir-de"],
    lessons: ["a1-savoir-connaitre", "a1-savoir-connaitre-mastery-check"],
  },
  {
    slug: "french-questions-and-negation",
    title: "Asking Questions and Saying No",
    description:
      "The three ways to ask a question in French (intonation, est-ce que, inversion), the question words and quel, ne...pas and the other negatives, and when to answer si instead of oui.",
    level: "A1",
    intro: [
      `English builds questions with do and does: do you speak French? French has no such helper. Instead it has three ways to ask the same question, and they differ in register rather than meaning: "tu parles français ?" (rising voice, everyday speech), "est-ce que tu parles français ?" (neutral, works everywhere), and "parles-tu français ?" (inversion, written or formal).`,
      `Negation is similarly compact. French wraps the verb in two words, "ne" and "pas", or swaps "pas" for another word to mean never, no longer, nothing or nobody. And it has a special word, "si", for contradicting a negative question. This guide covers both halves of a basic conversation: asking and denying.`,
    ],
    sections: [
      {
        heading: "Three ways to ask a yes/no question",
        body: [
          `Intonation: keep the sentence as it is and raise your voice at the end. This is by far the most common in conversation. "Est-ce que" (literally is it that) placed in front turns any statement into a question without changing word order; it becomes "est-ce qu'" before a vowel.`,
          `Inversion puts the pronoun after the verb with a hyphen: "parlez-vous", "aimes-tu". If the verb ends in a vowel and the pronoun is "il", "elle" or "on", add "-t-" for sound: "parle-t-il ?", "a-t-elle ?". Inversion is normal in writing, in set phrases ("comment allez-vous ?", "quelle heure est-il ?") and in formal speech, but sounds stiff in casual conversation. Avoid inverting with "je" except in fixed forms like "puis-je".`,
        ],
        table: {
          headers: ["Style", "Example", "Register"],
          rows: [
            ["Intonation", "Vous avez une chambre ?", "everyday speech"],
            ["Est-ce que", "Est-ce que vous avez une chambre ?", "neutral, spoken and written"],
            ["Inversion", "Avez-vous une chambre ?", "formal, written"],
          ],
        },
        examples: [
          { fr: "Tu viens ce soir ?", en: "Are you coming tonight?" },
          { fr: "Est-ce qu'il y a une pharmacie près d'ici ?", en: "Is there a chemist's near here?" },
          { fr: "Parlez-vous anglais ?", en: "Do you speak English?" },
          { fr: "Habite-t-elle à Nice ?", en: "Does she live in Nice?" },
          { fr: "Est-ce que vous acceptez les cartes ?", en: "Do you take cards?" },
        ],
      },
      {
        heading: "Question words and quel",
        body: [
          `The main question words are "où" (where), "quand" (when), "comment" (how), "combien" (how much, how many), "pourquoi" (why), "qui" (who) and "que / quoi" (what). With "est-ce que" they go first: "où est-ce que tu habites ?". In casual speech they often go at the end: "tu habites où ?", "c'est combien ?". "Que" becomes "quoi" at the end of a sentence or after a preposition: "qu'est-ce que tu fais ?" but "tu fais quoi ?".`,
          `"Quel" means which or what before a noun and agrees with it: "quel", "quelle", "quels", "quelles", all pronounced the same. Use it for what whenever English what is followed by a noun or by "is": "quel est ton nom ?", "quelle heure est-il ?".`,
        ],
        examples: [
          { fr: "Où est-ce que vous habitez ?", en: "Where do you live?" },
          { fr: "Qu'est-ce que tu fais ce week-end ?", en: "What are you doing this weekend?" },
          { fr: "Ça coûte combien ?", en: "How much does it cost?" },
          { fr: "Pourquoi est-ce qu'il est en retard ?", en: "Why is he late?" },
          { fr: "Quelle est ton adresse ?", en: "What's your address?" },
          { fr: "Tu préfères quels films ?", en: "Which films do you prefer?" },
        ],
      },
      {
        heading: `"Ne...pas" and the other negatives`,
        body: [
          `"Ne" goes before the conjugated verb and the second word after it. Swap "pas" for "jamais" (never), "plus" (no longer, not any more), "rien" (nothing) or "personne" (nobody). With a question by inversion, the pair wraps the whole verb-pronoun block: "ne parlez-vous pas français ?".`,
          `After any of these negatives, "un", "une", "des", "du", "de la" become "de": "je n'ai plus de pain". In everyday speech, "ne" is usually dropped ("je sais pas", "il mange jamais"), but in writing and careful speech keep it.`,
        ],
        table: {
          headers: ["Negative", "Meaning", "Example"],
          rows: [
            ["ne...pas", "not", "Je ne fume pas."],
            ["ne...jamais", "never", "Je ne fume jamais."],
            ["ne...plus", "not any more", "Je ne fume plus."],
            ["ne...rien", "nothing", "Je ne vois rien."],
            ["ne...personne", "nobody", "Je ne vois personne."],
          ],
        },
        examples: [
          { fr: "Il ne mange jamais de viande.", en: "He never eats meat." },
          { fr: "Elle n'habite plus à Paris.", en: "She doesn't live in Paris any more." },
          { fr: "Je ne comprends rien.", en: "I don't understand anything." },
          { fr: "Il n'y a personne.", en: "There's nobody here." },
          { fr: "Je sais pas.", en: "I dunno. (casual speech)" },
        ],
      },
      {
        heading: `"Oui", "non" and "si"`,
        body: [
          `To contradict a negative question or statement, French uses "si" instead of "oui". "Tu ne viens pas ?" "Si !" means yes I am (coming). "Oui" here would sound confused. English does this with stress (yes I AM); French has a dedicated word.`,
          `For short agreement, "moi aussi" means me too and "moi non plus" means me neither (agreeing with a negative). To disagree: "moi si" (I do) and "pas moi" (not me).`,
        ],
        examples: [
          { fr: "Tu n'aimes pas le fromage ? Si, j'adore ça !", en: "Don't you like cheese? Yes, I love it!" },
          { fr: "Vous n'êtes pas française ? Si, je suis de Lille.", en: "You're not French? Yes I am, I'm from Lille." },
          { fr: "J'aime le jazz. Moi aussi.", en: "I like jazz. Me too." },
          { fr: "Je ne fume pas. Moi non plus.", en: "I don't smoke. Me neither." },
          { fr: "Je n'aime pas le thé. Moi si.", en: "I don't like tea. I do." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Est-ce que où tu habites ?",
        right: "Où est-ce que tu habites ?",
        why: `The question word comes first, then "est-ce que", then the normal statement order.`,
      },
      {
        wrong: "Quoi est ton nom ?",
        right: "Quel est ton nom ?",
        why: `Before "être" + a noun, English what is "quel", which agrees with the noun.`,
      },
      {
        wrong: "Parle il français ?",
        right: "Parle-t-il français ?",
        why: `Inversion needs a hyphen, and a "-t-" between a vowel ending and "il", "elle" or "on".`,
      },
      {
        wrong: "Je ne mange pas jamais.",
        right: "Je ne mange jamais.",
        why: `"Jamais", "plus", "rien" and "personne" replace "pas". You don't use both.`,
      },
      {
        wrong: "Tu n'as pas faim ? Oui, j'ai faim.",
        right: "Tu n'as pas faim ? Si, j'ai faim.",
        why: `To answer yes to a negative question, French says "si".`,
      },
    ],
    faqs: [
      {
        q: "Which question form should I use?",
        a: `For speaking, intonation or "est-ce que". Both are natural with anyone, including strangers. Use inversion for writing (emails, forms) and in fixed phrases like "comment allez-vous ?". Getting a form "wrong" won't block communication; it just changes the tone.`,
      },
      {
        q: `Is dropping "ne" incorrect?`,
        a: `In speech it is the norm: most French people drop it most of the time. In writing it is a mistake, except when you are deliberately reproducing speech (dialogue, messages to friends). As a learner, write it and recognise its absence when you hear it.`,
      },
      {
        q: `Where does "pas" go with an infinitive?`,
        a: `Both words go before it: "je préfère ne pas savoir" (I'd rather not know). With a conjugated verb + infinitive, the pair wraps the conjugated verb: "je ne veux pas partir".`,
      },
      {
        q: `What is the difference between "qu'est-ce que" and "qu'est-ce qui"?`,
        a: `"Qu'est-ce que" asks about the object (what are you doing?); "qu'est-ce qui" asks about the subject: "qu'est-ce qui se passe ?" (what's happening?). At this level, "qu'est-ce qui se passe ?" is worth learning as a set phrase.`,
      },
    ],
    related: ["french-present-tense-er-verbs", "cest-vs-il-est", "french-partitive-articles"],
    lessons: ["a1-yes-no-questions", "a1-inversion", "a1-question-words-1", "a1-question-words-2", "a1-negation-beyond-pas", "a1-dialogue-moi-aussi"],
  },
  {
    slug: "cest-vs-il-est",
    title: "C'est vs Il Est",
    description:
      "When to say c'est and when to say il est or elle est: the noun-or-adjective rule, jobs and nationalities, general comments, and the stressed pronouns after c'est.",
    level: "A1",
    intro: [
      `"C'est" and "il est" / "elle est" can all translate as it is, he is or she is. French speakers choose between them automatically, but the choice follows a rule that English gives you no feeling for. Use the wrong one and the sentence sounds off, even if it is perfectly understandable.`,
      `The core rule is about what follows. Before a noun with a determiner (an article, a possessive, a demonstrative), use "c'est". Before a bare adjective describing a specific person or thing already mentioned, use "il est" or "elle est". Most of the other cases follow from that.`,
    ],
    sections: [
      {
        heading: `"C'est" + a noun with a determiner`,
        body: [
          `When you identify or present something, this is, that is, it's, he's a..., and a noun follows with "un", "le", "mon", "ce" and so on, use "c'est". The plural is "ce sont", though "c'est" is common in speech: "ce sont mes parents" / "c'est mes parents".`,
          `This applies to people too: "c'est mon frère", "c'est un ami". "Il est mon frère" sounds wrong to a French ear in most contexts.`,
        ],
        examples: [
          { fr: "C'est un bon restaurant.", en: "It's a good restaurant." },
          { fr: "C'est ma sœur, Inès.", en: "This is my sister, Inès." },
          { fr: "Qui est-ce ? C'est le nouveau prof.", en: "Who's that? He's the new teacher." },
          { fr: "Ce sont mes amis de Nantes.", en: "They're my friends from Nantes." },
          { fr: "C'est une question difficile.", en: "That's a difficult question." },
        ],
      },
      {
        heading: `"Il est / elle est" + an adjective`,
        body: [
          `To describe a specific person or thing you have already mentioned, with an adjective alone, use "il est", "elle est", "ils sont", "elles sont". The pronoun matches the noun's gender and number, and so does the adjective: "ta robe ? Elle est jolie."`,
          `Jobs, nationalities and religions behave like adjectives after "être": no article and "il est" / "elle est". "Il est médecin", "elle est italienne". But as soon as you add an adjective or other detail to the job, it becomes a noun phrase and switches to "c'est un / une": "c'est un médecin excellent".`,
        ],
        table: {
          headers: ["Bare job or nationality", "With an article or adjective"],
          rows: [
            ["Il est médecin.", "C'est un très bon médecin."],
            ["Elle est professeure.", "C'est la professeure de mon fils."],
            ["Il est italien.", "C'est un Italien de Naples."],
          ],
        },
        examples: [
          { fr: "Mon frère ? Il est très sympa.", en: "My brother? He's really nice." },
          { fr: "La soupe ? Elle est froide.", en: "The soup? It's cold." },
          { fr: "Elle est infirmière.", en: "She's a nurse." },
          { fr: "Ils sont canadiens.", en: "They're Canadian." },
          { fr: "C'est une infirmière formidable.", en: "She's a wonderful nurse." },
        ],
      },
      {
        heading: `"C'est" + an adjective: comments on a whole situation`,
        body: [
          `"C'est" can also be followed by an adjective, but then the adjective is always masculine singular and it doesn't describe a particular noun. It comments on a situation, an idea, or a thing in general: "c'est beau !" (that's beautiful), "c'est cher, Paris" (Paris is expensive).`,
          `Compare "la ville est belle" / "elle est belle" (this particular city is beautiful) with "c'est beau, Venise" (Venice, it's beautiful: a general reaction). Exclamations of opinion are almost always "c'est": "c'est génial !", "c'est nul", "c'est pas grave".`,
        ],
        examples: [
          { fr: "C'est super !", en: "That's great!" },
          { fr: "C'est difficile, le français.", en: "French is hard." },
          { fr: "Ce n'est pas grave.", en: "It doesn't matter." },
          { fr: "Ta robe ? Elle est belle.", en: "Your dress? It's beautiful." },
          { fr: "C'est vrai ?", en: "Really? Is that true?" },
        ],
      },
      {
        heading: `"C'est moi": stressed pronouns`,
        body: [
          `After "c'est", personal pronouns take their stressed form: "moi", "toi", "lui", "elle", "nous", "vous", "eux", "elles". "C'est moi" is it's me; "c'est lui" is it's him. The same forms appear alone ("moi ?") and after prepositions ("avec toi", "chez eux").`,
          `For third person plural, "ce sont eux" is the written form, but "c'est eux" is normal in speech.`,
        ],
        table: {
          headers: ["Subject", "Stressed form", "Example"],
          rows: [
            ["je", "moi", "C'est moi."],
            ["tu", "toi", "C'est toi ?"],
            ["il / elle", "lui / elle", "C'est lui, mon père."],
            ["nous / vous", "nous / vous", "C'est vous, Mme Martin ?"],
            ["ils / elles", "eux / elles", "Ce sont eux."],
          ],
        },
        examples: [
          { fr: "Qui est là ? C'est moi, Lucas.", en: "Who's there? It's me, Lucas." },
          { fr: "C'est toi sur la photo ?", en: "Is that you in the photo?" },
          { fr: "C'est elle, la nouvelle voisine.", en: "That's her, the new neighbour." },
          { fr: "Moi, je suis anglais. Et toi ?", en: "I'm English. What about you?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Il est un bon ami.",
        right: "C'est un bon ami.",
        why: `Before an article + noun, use "c'est", even for a person.`,
      },
      {
        wrong: "C'est professeur.",
        right: "Il est professeur. / C'est un professeur.",
        why: `A bare job goes with "il est" / "elle est". With "c'est", you need the article.`,
      },
      {
        wrong: "Le film ? C'est intéressante.",
        right: "Le film ? Il est intéressant.",
        why: `To describe a specific noun, use "il" or "elle" with an agreeing adjective. After "c'est" the adjective is always masculine.`,
      },
      {
        wrong: "C'est je.",
        right: "C'est moi.",
        why: `After "c'est", use the stressed pronoun.`,
      },
    ],
    faqs: [
      {
        q: `Can I say "c'est beau" about a specific thing?`,
        a: `Yes, as a general reaction: looking at a view, "c'est beau !" is perfect. If you are describing one named thing in a sentence, "elle est belle, ta maison" ties the adjective to it. In speech, "c'est" is often the safer, more natural choice for reactions.`,
      },
      {
        q: `What about "il est" for time and weather?`,
        a: `That "il" is impersonal and has nothing to do with this rule: "il est huit heures", "il fait beau", "il pleut". It never means he.`,
      },
      {
        q: `Is "ce sont" required in the plural?`,
        a: `In writing and careful speech, yes: "ce sont mes enfants". In conversation, "c'est mes enfants" is extremely common and not considered a real error.`,
      },
    ],
    related: ["subject-pronouns-tu-vous", "french-adjective-agreement", "french-articles-gender"],
    lessons: ["a1-cest-vs-il-est-1", "a1-cest-vs-il-est-2", "a1-spiral-questions-negation-cest"],
  },
  {
    slug: "possessives-and-demonstratives",
    title: "Possessives and Demonstratives: Mon, Ma, Son, Ce, Cette",
    description:
      "French possessive adjectives (mon, ma, mes, son, sa, leur) and demonstratives (ce, cet, cette, ces): why son can mean his or her, mon amie, and how to say this one and that one.",
    level: "A1",
    intro: [
      `Possessives (my, your, his) and demonstratives (this, that) sit in front of the noun like an article, and like articles they agree with the noun. That is where English speakers trip up: in French, the possessive agrees with the thing owned, not with the owner. "Sa voiture" can be his car or her car, because "voiture" is feminine; the owner's gender plays no part.`,
      `Demonstratives are simpler than in English in one way: French doesn't distinguish this from that by default. "Ce livre" is this book or that book, and you add "-ci" or "-là" only when you need the contrast.`,
    ],
    sections: [
      {
        heading: "The possessive adjectives",
        body: [
          `Choose the possessive by the owner (my, your, his...) and then the form by the noun owned (masculine, feminine, plural). "Notre", "votre" and "leur" have only a singular and a plural form, with no gender difference.`,
          `"Leur" (their) takes "-s" only when the thing owned is plural: "leur maison" (their house), "leurs enfants" (their children). Don't confuse "votre" (your, one thing) with "vos" (your, several things).`,
        ],
        table: {
          headers: ["Owner", "Masc. noun", "Fem. noun", "Plural noun"],
          rows: [
            ["my", "mon", "ma", "mes"],
            ["your (tu)", "ton", "ta", "tes"],
            ["his / her / its", "son", "sa", "ses"],
            ["our", "notre", "notre", "nos"],
            ["your (vous)", "votre", "votre", "vos"],
            ["their", "leur", "leur", "leurs"],
          ],
        },
        examples: [
          { fr: "mon père, ma mère, mes parents", en: "my father, my mother, my parents" },
          { fr: "C'est votre valise, madame ?", en: "Is this your suitcase?" },
          { fr: "Nos voisins sont très gentils.", en: "Our neighbours are very nice." },
          { fr: "Ils adorent leur appartement.", en: "They love their flat." },
          { fr: "Les enfants sont avec leurs grands-parents.", en: "The children are with their grandparents." },
        ],
      },
      {
        heading: `"Son" and "sa": his or her`,
        body: [
          `"Son", "sa" and "ses" each mean his, her or its. The form depends only on the noun: "son frère" is his brother or her brother; "sa sœur" is his sister or her sister. Context usually makes the owner clear.`,
          `When it really is ambiguous, add "à lui" (his) or "à elle" (hers): "c'est sa voiture à elle". This also gives you the way to say whose: "c'est à qui ?" (whose is it?), "c'est à moi" (it's mine).`,
        ],
        examples: [
          { fr: "Paul cherche sa clé.", en: "Paul is looking for his key." },
          { fr: "Marie aime son travail.", en: "Marie loves her job." },
          { fr: "Thomas et sa femme", en: "Thomas and his wife" },
          { fr: "Ce sac, c'est à qui ? C'est à moi.", en: "Whose is this bag? It's mine." },
          { fr: "le vélo de Julien", en: "Julien's bike" },
        ],
      },
      {
        heading: `"Mon amie": the vowel rule`,
        body: [
          `Before a feminine noun starting with a vowel or mute h, "ma", "ta" and "sa" become "mon", "ton" and "son": "mon amie", "ton école", "son histoire". This is purely for sound, like "l'" for "la": "ma amie" would make two vowels collide.`,
          `The noun stays feminine, so its adjectives still agree: "mon amie est française". There is no possessive's in French: use "de" + the owner, "la voiture de Sophie".`,
        ],
        examples: [
          { fr: "mon amie Clara", en: "my friend Clara" },
          { fr: "Ton école est loin ?", en: "Is your school far?" },
          { fr: "son adresse e-mail", en: "his / her email address" },
          { fr: "C'est la maison de mes grands-parents.", en: "It's my grandparents' house." },
        ],
      },
      {
        heading: "This and that: ce, cet, cette, ces",
        body: [
          `The demonstrative adjective agrees with the noun: "ce" (masculine), "cet" (masculine before a vowel or mute h, pronounced like "cette"), "cette" (feminine) and "ces" (plural). Each means either this or that.`,
          `To contrast two things, add "-ci" (here, this) or "-là" (there, that) to the noun: "ce pull-ci ou ce pull-là ?". In speech, "-là" is much more common, often with no idea of distance. On its own, that is "ça": "ça coûte combien ?", "j'aime ça".`,
        ],
        table: {
          headers: ["Form", "Used with", "Example"],
          rows: [
            ["ce", "masculine noun", "ce livre"],
            ["cet", "masculine noun + vowel or mute h", "cet hôtel"],
            ["cette", "feminine noun", "cette rue"],
            ["ces", "any plural noun", "ces chaussures"],
          ],
        },
        examples: [
          { fr: "Ce restaurant est excellent.", en: "This restaurant is excellent." },
          { fr: "Cet homme est mon voisin.", en: "That man is my neighbour." },
          { fr: "Cette semaine, je travaille beaucoup.", en: "This week I'm working a lot." },
          { fr: "Je prends ces chaussures-là.", en: "I'll take those shoes." },
          { fr: "Qu'est-ce que c'est, ça ?", en: "What's that?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Marie aime sa mari.",
        right: "Marie aime son mari.",
        why: `"Mari" is masculine, so the possessive is "son", even though the owner is a woman.`,
      },
      {
        wrong: "ma amie",
        right: "mon amie",
        why: `Before a feminine noun starting with a vowel, use "mon", "ton", "son".`,
      },
      {
        wrong: "ce hôtel",
        right: "cet hôtel",
        why: `Before a masculine noun starting with a vowel or mute h, "ce" becomes "cet".`,
      },
      {
        wrong: "Ils aiment leurs maison.",
        right: "Ils aiment leur maison.",
        why: `"Leur" takes "-s" only when the thing owned is plural. One house, even for several owners, is "leur maison".`,
      },
      {
        wrong: "Votre parents sont là ?",
        right: "Vos parents sont là ?",
        why: `"Votre" is for one thing owned; with a plural noun use "vos". The same goes for "notre" and "nos".`,
      },
    ],
    faqs: [
      {
        q: "How do I say mine, yours, his?",
        a: `The simplest way is "c'est à moi / à toi / à lui / à elle". French also has possessive pronouns ("le mien", "la tienne", "les siens"), which you will learn later.`,
      },
      {
        q: `Do I say "votre" to one person?`,
        a: `Yes, if you say "vous" to them. "Votre" goes with "vous", "ton / ta / tes" with "tu". Keep them consistent: "vous avez votre billet ?" not "vous avez ton billet ?".`,
      },
      {
        q: "Do body parts take a possessive?",
        a: `Less often than in English. With "avoir mal à" and with pronominal verbs French uses the article: "j'ai mal à la tête", "je me lave les mains".`,
      },
    ],
    related: ["french-articles-gender", "cest-vs-il-est", "french-adjective-agreement"],
    lessons: ["a1-possessives-1", "a1-possessives-2", "a1-transform-possessives", "a1-demonstratives-1", "a1-demonstratives-2"],
  },
  {
    slug: "french-partitive-articles",
    title: "The Partitive: Du, De la, Des",
    description:
      "How French says some with du, de la, de l' and des, why it changes to de after a negative and after quantities, and the key contrast between j'aime le café and je bois du café.",
    level: "A1",
    intro: [
      `English can say I'm drinking coffee or I'm drinking some coffee, and often uses no word at all. French must put something in front of the noun, and for an unspecified amount of something you can't count, that something is the partitive article: "du", "de la", "de l'". "Je bois du café", "on mange de la soupe", "il y a de l'eau".`,
      `Two rules make the partitive tricky. First, it shrinks to plain "de" after a negative and after words of quantity. Second, verbs of liking ("aimer", "adorer", "détester", "préférer") take the definite article instead, because you like coffee in general, not some coffee. Master those two switches and you have the whole system.`,
    ],
    sections: [
      {
        heading: "Du, de la, de l', des",
        body: [
          `The partitive is "de" + the definite article, with the usual contractions: "de + le" becomes "du", "de + la" stays "de la", "de + l'" stays "de l'". For plural nouns, the form is "des", which is also the plural of "un" and "une".`,
          `Use it for an indefinite quantity of something uncountable: food and drink, materials, abstract qualities ("du courage", "de la patience"), and activities with "faire": "faire du sport", "faire de la guitare".`,
        ],
        table: {
          headers: ["Noun", "Partitive", "Example"],
          rows: [
            ["masculine", "du", "du pain, du fromage"],
            ["feminine", "de la", "de la viande, de la musique"],
            ["vowel or mute h", "de l'", "de l'eau, de l'huile"],
            ["plural", "des", "des pâtes, des légumes"],
          ],
        },
        examples: [
          { fr: "Je voudrais du pain, s'il vous plaît.", en: "I'd like some bread, please." },
          { fr: "Tu veux de l'eau ?", en: "Do you want some water?" },
          { fr: "Il y a de la place.", en: "There's room." },
          { fr: "On mange des pâtes ce soir.", en: "We're having pasta tonight." },
          { fr: "Elle fait du yoga le mardi.", en: "She does yoga on Tuesdays." },
        ],
      },
      {
        heading: `"Le" or "du"? Liking vs having`,
        body: [
          `Ask yourself whether you mean the thing in general or some of it. "J'aime le café" is about coffee as a whole. "Je bois du café" is about some coffee. That is why verbs of preference ("aimer", "adorer", "détester", "préférer") almost always take "le", "la", "les", while verbs of eating, drinking, buying and having take the partitive.`,
          `The two often appear side by side: "j'adore le fromage, alors j'achète du fromage tous les jours". Use "un" / "une" when you mean one unit or one portion: "un café" in a bar is one cup of coffee.`,
        ],
        examples: [
          { fr: "J'aime le thé, mais aujourd'hui je bois du café.", en: "I like tea, but today I'm drinking coffee." },
          { fr: "Les enfants détestent les épinards.", en: "Children hate spinach." },
          { fr: "Tu prends de la salade ?", en: "Are you having some salad?" },
          { fr: "Un café et deux croissants, s'il vous plaît.", en: "A coffee and two croissants, please." },
          { fr: "Je préfère la musique classique.", en: "I prefer classical music." },
        ],
      },
      {
        heading: "After a negative: pas de",
        body: [
          `After "ne...pas", "ne...plus", "ne...jamais" and the other negatives, "du", "de la", "des", "un" and "une" all become "de" (or "d'" before a vowel). The logic: you are talking about zero quantity, so there is no amount to specify. "Je bois du vin" becomes "je ne bois pas de vin".`,
          `This does not apply with "être" ("ce n'est pas du vin, c'est du jus") or to the definite article: "je n'aime pas le vin" keeps "le", because liking is about wine in general.`,
        ],
        examples: [
          { fr: "Je ne mange pas de viande.", en: "I don't eat meat." },
          { fr: "Il n'y a plus de lait.", en: "There's no milk left." },
          { fr: "Nous n'avons pas d'enfants.", en: "We don't have children." },
          { fr: "Je n'aime pas le poisson.", en: "I don't like fish. (le stays)" },
          { fr: "Ce n'est pas de l'eau, c'est de la vodka !", en: "It's not water, it's vodka! (être: no change)" },
        ],
      },
      {
        heading: "After quantities: beaucoup de, un kilo de",
        body: [
          `Words and expressions of quantity are followed by plain "de", with no article: "beaucoup de", "un peu de", "trop de", "assez de", "un kilo de", "une bouteille de", "un verre de". "Beaucoup du pain" is wrong; "beaucoup de pain" is right.`,
          `Numbers work like English, with no "de": "deux pommes". But "la plupart" (most) and "bien" (many) take "des": "la plupart des gens".`,
        ],
        examples: [
          { fr: "Il y a beaucoup de monde.", en: "There are a lot of people." },
          { fr: "Un kilo de tomates, s'il vous plaît.", en: "A kilo of tomatoes, please." },
          { fr: "Tu veux un peu de sucre ?", en: "Do you want a bit of sugar?" },
          { fr: "J'ai trop de travail.", en: "I have too much work." },
          { fr: "Une bouteille d'eau minérale.", en: "A bottle of mineral water." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Je mange pain.",
        right: "Je mange du pain.",
        why: `French needs an article before the noun. For an unspecified amount, that's the partitive.`,
      },
      {
        wrong: "J'aime du chocolat.",
        right: "J'aime le chocolat.",
        why: `Verbs of liking talk about something in general, so they take the definite article.`,
      },
      {
        wrong: "Je n'ai pas du temps.",
        right: "Je n'ai pas de temps.",
        why: `After a negative, the partitive becomes "de".`,
      },
      {
        wrong: "beaucoup des amis",
        right: "beaucoup d'amis",
        why: `Expressions of quantity take plain "de" (or "d'" before a vowel), with no article.`,
      },
    ],
    faqs: [
      {
        q: `Is "des" the plural of "un" or the partitive?`,
        a: `Both, and it doesn't matter which you call it: "des pommes" (some apples) and "des pâtes" (some pasta) behave the same way, including becoming "de" after a negative.`,
      },
      {
        q: `Why "faire du sport" but "jouer au foot"?`,
        a: `"Faire" + partitive is for activities in general ("faire du vélo", "faire de la natation"). "Jouer à" is for games and sports you play ("jouer au tennis"), "jouer de" for instruments ("jouer du piano"). The partitive here works like any "de" + article.`,
      },
      {
        q: "Does the partitive have anything to do with en?",
        a: `Yes. Later you will replace "du café" with the pronoun "en": "j'en bois". The partitive is what makes "en" possible, so it pays to get it right now.`,
      },
    ],
    related: ["french-articles-gender", "french-questions-and-negation", "french-prepositions-cities-countries"],
    lessons: ["a1-partitive-1", "a1-partitive-2", "a1-contrast-aimer-partitive", "a1-likes-1", "a1-likes-2"],
  },
  {
    slug: "french-prepositions-cities-countries",
    title: "À, En, Au: Cities, Countries and Contractions",
    description:
      "How to say in or to a city or country in French (à Paris, en France, au Japon, aux États-Unis), how to say from, and the contractions au, aux, du and des.",
    level: "A1",
    intro: [
      `English uses in and to for every place: in Paris, in France, to Japan. French chooses the preposition by the kind of place and, for countries, by its gender: "à Paris", "en France", "au Japon", "aux États-Unis". The same word covers both in and to, so "je vais à Lyon" and "j'habite à Lyon" use the same "à".`,
      `Behind all this are two tiny contractions that run through the whole language: "à + le" becomes "au" and "de + le" becomes "du". Once you see those, the place rules are almost automatic.`,
    ],
    sections: [
      {
        heading: "The contractions au, aux, du, des",
        body: [
          `"À" (to, at, in) and "de" (of, from) merge with the masculine and plural definite articles. With "la" and "l'" they stay separate.`,
          `These are not optional. "À le" and "de le" never occur in French. You meet the contractions everywhere: "au restaurant", "aux toilettes", "la fin du film", "le prix des billets".`,
        ],
        table: {
          headers: ["", "+ le", "+ la", "+ l'", "+ les"],
          rows: [
            ["à", "au", "à la", "à l'", "aux"],
            ["de", "du", "de la", "de l'", "des"],
          ],
        },
        examples: [
          { fr: "Je vais au cinéma.", en: "I'm going to the cinema." },
          { fr: "Elle est à la piscine.", en: "She's at the pool." },
          { fr: "On parle aux enfants.", en: "We're talking to the children." },
          { fr: "C'est le livre du professeur.", en: "It's the teacher's book." },
          { fr: "Il rentre de l'école à cinq heures.", en: "He comes home from school at five." },
        ],
      },
      {
        heading: "Cities: à",
        body: [
          `For cities, use "à", whether you mean in or to: "j'habite à Marseille", "je vais à Rome". Cities normally have no article. A few have one built into the name, and it contracts as usual: "Le Havre" gives "au Havre", "Le Caire" gives "au Caire".`,
        ],
        examples: [
          { fr: "J'habite à Bordeaux.", en: "I live in Bordeaux." },
          { fr: "Ce week-end, on va à Londres.", en: "This weekend we're going to London." },
          { fr: "Elle travaille à Genève.", en: "She works in Geneva." },
          { fr: "Le bateau arrive au Havre.", en: "The boat arrives at Le Havre." },
        ],
      },
      {
        heading: "Countries: en, au, aux",
        body: [
          `Countries have a gender. Most ending in "-e" are feminine ("la France", "l'Italie", "la Chine"), and the rest are masculine ("le Canada", "le Japon", "le Brésil"); "le Mexique" and "le Cambodge" are the well-known exceptions. Feminine countries take "en". Masculine countries take "au". Plural countries take "aux".`,
          `Masculine countries that start with a vowel also take "en", for sound: "en Iran", "en Irak", "en Israël". Continents are all feminine and take "en": "en Europe", "en Afrique".`,
        ],
        table: {
          headers: ["Type", "In / to", "Examples"],
          rows: [
            ["city", "à", "à Paris, à Tokyo"],
            ["feminine country", "en", "en France, en Espagne, en Chine"],
            ["masc. country + vowel", "en", "en Iran, en Équateur"],
            ["masculine country", "au", "au Canada, au Japon, au Maroc"],
            ["plural country", "aux", "aux États-Unis, aux Pays-Bas"],
          ],
        },
        examples: [
          { fr: "Je suis né en Écosse.", en: "I was born in Scotland." },
          { fr: "Mes cousins habitent au Canada.", en: "My cousins live in Canada." },
          { fr: "On part en Italie cet été.", en: "We're going to Italy this summer." },
          { fr: "Il travaille aux États-Unis.", en: "He works in the United States." },
          { fr: "Vous allez au Mexique ?", en: "Are you going to Mexico?" },
        ],
      },
      {
        heading: "From: de, du, des",
        body: [
          `To say from, use "de" for cities and feminine countries ("je viens de Lyon", "il rentre d'Espagne"), "du" for masculine countries ("du Japon") and "des" for plural ones ("des États-Unis"). "Je suis de Londres" is the usual way to say where you're from.`,
        ],
        examples: [
          { fr: "Je suis de Manchester.", en: "I'm from Manchester." },
          { fr: "Elle vient d'Allemagne.", en: "She comes from Germany." },
          { fr: "Ils rentrent du Portugal demain.", en: "They're coming back from Portugal tomorrow." },
          { fr: "Mon collègue vient des Pays-Bas.", en: "My colleague comes from the Netherlands." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Je vais à France.",
        right: "Je vais en France.",
        why: `"La France" is feminine, so in or to is "en". "À" is for cities.`,
      },
      {
        wrong: "J'habite en Canada.",
        right: "J'habite au Canada.",
        why: `"Le Canada" is masculine and starts with a consonant, so it takes "au".`,
      },
      {
        wrong: "Je vais à le marché.",
        right: "Je vais au marché.",
        why: `"À + le" always contracts to "au".`,
      },
      {
        wrong: "Il vient de le Japon.",
        right: "Il vient du Japon.",
        why: `"De + le" always contracts to "du".`,
      },
      {
        wrong: "Je suis en Paris.",
        right: "Je suis à Paris.",
        why: `Cities take "à", never "en".`,
      },
    ],
    faqs: [
      {
        q: "How do I know a country's gender?",
        a: `Check the ending: "-e" usually means feminine. Then learn the exceptions you need, like "le Mexique" and "le Cambodge". Saying the country with its article when you learn it ("le Portugal", "la Suisse") makes the preposition automatic.`,
      },
      {
        q: "What about islands and US states?",
        a: `Small islands usually take "à" like cities: "à Malte", "à Cuba". US states vary: feminine ones take "en" ("en Californie", "en Floride"); masculine ones usually "au" ("au Texas") or "dans l'État de" ("dans l'État de New York").`,
      },
      {
        q: `Is it "en ville" or "à la ville"?`,
        a: `"En ville" means in town, downtown: "je vais en ville". "À la ville" is used in contrast with the countryside: "la vie à la ville et à la campagne".`,
      },
    ],
    related: ["french-partitive-articles", "french-articles-gender", "futur-proche-venir-de"],
    lessons: ["a1-contractions-au-du", "a1-cities-countries-1", "a1-cities-countries-2", "a1-word-web-countries"],
  },
  {
    slug: "futur-proche-venir-de",
    title: "Futur Proche and Venir De: Going to Do, Just Did",
    description:
      "How to talk about the near future with aller + infinitive (je vais partir) and the recent past with venir de + infinitive (je viens de manger), with the conjugations and the traps.",
    level: "A1",
    intro: [
      `Before you learn any real past or future tense, French gives you two shortcuts built on verbs you already need. "Aller" (to go) + an infinitive makes the near future: "je vais manger", I'm going to eat. "Venir de" (to come from) + an infinitive makes the recent past: "je viens de manger", I've just eaten.`,
      `The future one maps neatly onto English going to. The past one doesn't map onto anything: English uses just and a perfect tense, French uses come from. That mismatch is why "venir de" catches so many learners out.`,
    ],
    sections: [
      {
        heading: `"Aller" and "venir" in the present`,
        body: [
          `Both verbs are irregular and very frequent, so they repay learning by heart. "Aller" is the one -er verb that is completely irregular. "Venir" has the "-ien-" stem in the singular and in "ils viennent" (with a double n).`,
        ],
        table: {
          headers: ["Person", "aller", "venir"],
          rows: [
            ["je", "je vais", "je viens"],
            ["tu", "tu vas", "tu viens"],
            ["il / elle / on", "il va", "il vient"],
            ["nous", "nous allons", "nous venons"],
            ["vous", "vous allez", "vous venez"],
            ["ils / elles", "ils vont", "ils viennent"],
          ],
        },
        examples: [
          { fr: "Je vais à la gare.", en: "I'm going to the station." },
          { fr: "Tu viens avec nous ?", en: "Are you coming with us?" },
          { fr: "Ils vont au marché le dimanche.", en: "They go to the market on Sundays." },
          { fr: "Elles viennent de Belgique.", en: "They come from Belgium." },
        ],
      },
      {
        heading: "The near future: aller + infinitive",
        body: [
          `Conjugate "aller" and add the verb in the infinitive: "je vais travailler", "on va voir". It is used for plans and intentions and for things about to happen, exactly like going to. In spoken French it is far more common than the futur simple, which you will learn later.`,
          `In the negative, "ne...pas" wraps "aller", not the infinitive: "je ne vais pas sortir". Pronouns go before the infinitive: "je vais le faire", "on va se coucher". And "aller aller" is fine: "je vais aller à Paris" means I'm going to go to Paris.`,
        ],
        examples: [
          { fr: "Je vais appeler ma mère ce soir.", en: "I'm going to call my mum tonight." },
          { fr: "Attention, il va pleuvoir !", en: "Watch out, it's going to rain!" },
          { fr: "On va manger au restaurant samedi.", en: "We're going to eat out on Saturday." },
          { fr: "Nous n'allons pas partir en vacances cette année.", en: "We're not going away on holiday this year." },
          { fr: "Tu vas aller à la fête ?", en: "Are you going to go to the party?" },
        ],
      },
      {
        heading: "The recent past: venir de + infinitive",
        body: [
          `Conjugate "venir" in the present, add "de" (or "d'" before a vowel) and the infinitive: "je viens de finir", I've just finished. Even though the action is past, the verb "venir" is in the present: you are, right now, just coming from doing it.`,
          `Without "de", "venir" + infinitive means to come and do something: "je viens manger" is I'm coming to eat. That one little word reverses the time direction, so don't drop it.`,
        ],
        examples: [
          { fr: "Je viens de finir mon travail.", en: "I've just finished my work." },
          { fr: "Le train vient de partir.", en: "The train has just left." },
          { fr: "Ils viennent d'arriver.", en: "They've just arrived." },
          { fr: "Elle vient d'avoir un bébé.", en: "She's just had a baby." },
          { fr: "Tu viens manger ce soir ?", en: "Are you coming to eat tonight? (no de: not the past)" },
        ],
      },
      {
        heading: "Past, present, future with one verb",
        body: [
          `Put together, these give you a full timeline with only the present tense: "je viens de manger" (just ate), "je mange" (eating), "je vais manger" (going to eat). This is how French speakers talk about the immediate past and future in everyday conversation, even after they know the other tenses.`,
        ],
        table: {
          headers: ["Just did", "Doing", "Going to do"],
          rows: [
            ["je viens de manger", "je mange", "je vais manger"],
            ["il vient de sortir", "il sort", "il va sortir"],
            ["nous venons d'arriver", "nous arrivons", "nous allons arriver"],
          ],
        },
        examples: [
          { fr: "Je viens de rentrer, je vais prendre une douche.", en: "I've just got home, I'm going to take a shower." },
          { fr: "Le film vient de commencer.", en: "The film has just started." },
          { fr: "Elle va avoir trente ans.", en: "She's going to be thirty." },
          { fr: "On vient de se rencontrer.", en: "We've only just met." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Je vais à manger.",
        right: "Je vais manger.",
        why: `The near future is "aller" + infinitive directly, with no "à" (unlike English going to).`,
      },
      {
        wrong: "Je suis venu de manger.",
        right: "Je viens de manger.",
        why: `"Venir" stays in the present in this construction; the meaning is already past.`,
      },
      {
        wrong: "Je viens manger, je n'ai plus faim.",
        right: "Je viens de manger, je n'ai plus faim.",
        why: `Without "de", "venir" + infinitive means coming to do something.`,
      },
      {
        wrong: "Je vais ne pas sortir.",
        right: "Je ne vais pas sortir.",
        why: `The negation wraps the conjugated verb, "aller".`,
      },
    ],
    faqs: [
      {
        q: "Futur proche or futur simple?",
        a: `In conversation the futur proche is the default for plans and predictions. The futur simple ("je partirai") is more common in writing, in promises, and for the more distant or less certain future. You'll learn it at the next level.`,
      },
      {
        q: `Can "aller" + infinitive mean go and do?`,
        a: `Yes, when there is real movement: "je vais chercher le pain" means I'm going (out) to get the bread. Context tells you whether it's movement or simply future.`,
      },
      {
        q: `How do I say I was about to?`,
        a: `"J'allais partir" (I was going to leave) uses the imparfait of "aller", which you will see at the next level. Similarly, "je venais de partir" means I had just left.`,
      },
    ],
    related: ["french-present-tense-er-verbs", "french-prepositions-cities-countries", "french-questions-and-negation"],
    lessons: ["a1-aller", "a1-venir-prendre", "a1-futur-proche", "a1-venir-de", "a1-transform-past-present-future"],
  },
];
