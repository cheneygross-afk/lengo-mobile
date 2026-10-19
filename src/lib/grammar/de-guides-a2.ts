// Synced from cheneygross-afk/lengo:src/lib/grammar/de-guides-a2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { DeGrammarGuide } from "./de-types";

// German grammar guides, A2 (see ./de-types.ts for the shape and conventions).
export const DE_A2_GUIDES: DeGrammarGuide[] = [
  {
    slug: "perfekt-haben-sein",
    title: "The Perfekt: Haben or Sein + Participle",
    description:
      "How to talk about the past in spoken German: the Perfekt with haben or sein, regular and irregular participles, verbs without ge-, and the sentence bracket.",
    level: "A2",
    intro: [
      `The Perfekt is the past tense of everyday spoken German. "Ich habe gestern Pizza gemacht" covers I made pizza yesterday, I have made pizza and I did make pizza: German does not split these the way English does. If you can build the Perfekt, you can tell almost any story in conversation.`,
      `It has two parts: a helper verb ("haben" or "sein") in the present tense, conjugated for the subject, and a past participle ("gemacht", "gegangen") that never changes. The helper sits in position 2, the participle goes to the very end, and everything else is packed in between.`,
    ],
    sections: [
      {
        heading: `Building the participle`,
        body: [
          `Regular (weak) verbs take "ge-" + stem + "-t": "machen" becomes "gemacht", "kaufen" becomes "gekauft". If the stem ends in -t or -d, or in a hard-to-say cluster, add "-et": "gearbeitet", "gewartet", "geöffnet".`,
          `Irregular (strong) verbs take "ge-" + stem + "-en", often with a vowel change you have to learn: "gegessen", "getrunken", "geschrieben", "gesprochen". A small group of mixed verbs combines a vowel change with "-t": "gebracht", "gedacht", "gewusst", "gekannt".`,
          `Two groups take no "ge-" at all: verbs with an inseparable prefix ("be-", "ver-", "er-", "ent-", "emp-", "ge-", "zer-") such as "besucht", "verstanden", "bekommen", and verbs ending in "-ieren" such as "studiert" and "telefoniert". Separable verbs put "ge" between the prefix and the stem: "eingekauft", "aufgestanden", "angerufen".`,
        ],
        table: {
          headers: ["Type", "Pattern", "Examples"],
          rows: [
            ["regular", "ge- ... -t / -et", "gemacht, gekauft, gearbeitet"],
            ["irregular", "ge- ... -en (vowel may change)", "gegessen, getrunken, geschrieben"],
            ["mixed", "ge- ... -t with vowel change", "gebracht, gedacht, gewusst"],
            ["inseparable prefix", "no ge-", "besucht, verstanden, vergessen"],
            ["-ieren", "no ge-, ends in -t", "studiert, fotografiert"],
            ["separable", "prefix + ge + stem", "eingekauft, angerufen"],
          ],
        },
        examples: [
          { de: "Ich habe die ganze Woche gearbeitet.", en: "I worked all week." },
          { de: "Wir haben im Restaurant gegessen.", en: "We ate at the restaurant." },
          { de: "Hast du das gewusst?", en: "Did you know that?" },
          { de: "Sie hat Medizin studiert.", en: "She studied medicine." },
          { de: "Ich habe dich nicht verstanden.", en: "I didn't understand you." },
        ],
      },
      {
        heading: `"Haben" or "sein"?`,
        body: [
          `Most verbs use "haben". A smaller but very common group uses "sein": verbs of movement from A to B ("gehen", "fahren", "fliegen", "kommen", "laufen") and verbs of change of state ("aufstehen", "einschlafen", "aufwachen", "werden", "sterben"). Add "sein" and "bleiben" themselves, and "passieren".`,
          `A quick test: if the verb cannot take a direct object and describes moving somewhere or becoming something different, it takes "sein". "Ich bin nach Berlin gefahren" (I travelled to Berlin) but "Ich habe das Auto gefahren" (I drove the car): with a direct object, "fahren" switches to "haben".`,
        ],
        table: {
          headers: ["", "haben", "sein"],
          rows: [
            ["ich", "habe gemacht", "bin gegangen"],
            ["du", "hast gemacht", "bist gegangen"],
            ["er, sie, es", "hat gemacht", "ist gegangen"],
            ["wir", "haben gemacht", "sind gegangen"],
            ["ihr", "habt gemacht", "seid gegangen"],
            ["sie, Sie", "haben gemacht", "sind gegangen"],
          ],
        },
        examples: [
          { de: "Ich bin um sieben aufgestanden.", en: "I got up at seven." },
          { de: "Wir sind mit dem Zug nach Hamburg gefahren.", en: "We went to Hamburg by train." },
          { de: "Er ist zu Hause geblieben.", en: "He stayed at home." },
          { de: "Was ist passiert?", en: "What happened?" },
          { de: "Sie ist Ärztin geworden.", en: "She became a doctor." },
        ],
      },
      {
        heading: `The sentence bracket`,
        body: [
          `The helper verb is the conjugated verb, so it takes position 2, exactly like any verb in a main clause. The participle goes to the very end. Time phrases, objects, "nicht" and adverbs all go inside the bracket. English speakers instinctively put the participle next to the helper ("I have bought a book"), which German does not allow.`,
          `In a question the helper moves to position 1 (yes/no questions) or follows the question word. In a subordinate clause with "weil" or "dass", the helper goes to the very end, after the participle: "..., weil ich lange gearbeitet habe".`,
        ],
        examples: [
          { de: "Ich habe gestern mit meiner Schwester telefoniert.", en: "I phoned my sister yesterday." },
          { de: "Am Samstag haben wir die Wohnung geputzt.", en: "On Saturday we cleaned the flat." },
          { de: "Hast du schon gegessen?", en: "Have you eaten yet?" },
          { de: "Ich habe den Film noch nicht gesehen.", en: "I haven't seen the film yet." },
          { de: "Ich bin müde, weil ich schlecht geschlafen habe.", en: "I'm tired because I slept badly." },
        ],
      },
      {
        heading: `One German tense, several English ones`,
        body: [
          `The Perfekt translates the English simple past (I went), the present perfect (I have gone) and the emphatic past (I did go). There is no separate form for "did": "Hast du angerufen?" is did you call, and "Ich habe angerufen" can be I called or I did call.`,
          `Be careful in the other direction. English uses the present perfect for something still going on (I have lived here for two years); German uses the present tense with "seit" for that: "Ich wohne seit zwei Jahren hier". The Perfekt is only for finished actions.`,
        ],
        examples: [
          { de: "Ich habe ihn letzte Woche getroffen.", en: "I met him last week." },
          { de: "Ich habe ihn schon getroffen.", en: "I've already met him." },
          { de: "Ich wohne seit zwei Jahren in Köln.", en: "I've been living in Cologne for two years." },
          { de: "Hast du die Tür abgeschlossen?", en: "Did you lock the door?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ich habe gekauft ein Buch.",
        right: "Ich habe ein Buch gekauft.",
        why: `The participle goes to the end of the clause; the object sits inside the bracket.`,
      },
      {
        wrong: "Ich habe nach Hause gegangen.",
        right: "Ich bin nach Hause gegangen.",
        why: `Movement from one place to another takes "sein".`,
      },
      {
        wrong: "Er hat das getrinkt.",
        right: "Er hat das getrunken.",
        why: `"Trinken" is irregular: the participle is "getrunken". Strong participles have to be learned.`,
      },
      {
        wrong: "Ich habe Oma gebesucht.",
        right: "Ich habe Oma besucht.",
        why: `Verbs with an inseparable prefix like "be-" never take "ge-".`,
      },
      {
        wrong: "Ich habe hier seit zwei Jahren gewohnt.",
        right: "Ich wohne seit zwei Jahren hier.",
        why: `For something that is still true, German uses the present tense with "seit".`,
      },
    ],
    faqs: [
      {
        q: `Is the Perfekt the same as the English present perfect?`,
        a: `It looks the same (helper + participle) but works differently. The German Perfekt is the normal spoken past for finished actions, whether or not they connect to the present. "Ich bin gestern ins Kino gegangen" is perfectly normal, even though "I have gone to the cinema yesterday" is wrong in English.`,
      },
      {
        q: `How do I learn which participles are irregular?`,
        a: `Learn the common ones in vowel families: ei to ie ("geschrieben", "geblieben"), i to u ("getrunken", "gefunden"), e to o ("gesprochen", "geholfen"). About fifty verbs cover almost everything you will say at this level.`,
      },
      {
        q: `Do Germans in the south use "sein" with "sitzen" and "stehen"?`,
        a: `Yes. In southern Germany, Austria and Switzerland you will hear "ich bin gesessen" and "ich bin gestanden". In the north and in the exam, "ich habe gesessen" and "ich habe gestanden" are standard. Both are correct German.`,
      },
    ],
    related: ["praeteritum-sein-haben-modals", "separable-verbs", "german-praeteritum", "weil-dass-verb-final"],
    lessons: [
      "a2-perfekt-haben-1",
      "a2-perfekt-satzklammer",
      "a2-perfekt-haben-2",
      "a2-irregular-participles-1",
      "a2-irregular-participles-2",
      "a2-perfekt-sein-1",
      "a2-perfekt-sein-2",
      "a2-separable-participles",
      "a2-choose-haben-or-sein",
    ],
  },
  {
    slug: "praeteritum-sein-haben-modals",
    title: "War, Hatte, Konnte: The Präteritum of Sein, Haben and the Modals",
    description:
      "Why Germans say ich war and ich hatte instead of the Perfekt, the Präteritum of the modal verbs, es gab, and when to use Perfekt or Präteritum in speech.",
    level: "A2",
    intro: [
      `German has a second past tense, the Präteritum (also called the simple past). In writing it is the normal narrative tense, but in conversation Germans use it mainly for a handful of very common verbs: "sein", "haben", the modal verbs and "es gibt". "Ich war gestern im Kino" sounds natural; "ich bin gestern im Kino gewesen" is correct but heavier.`,
      `So at this level the rule of thumb is simple: Perfekt for most verbs, Präteritum for "war", "hatte", "konnte", "musste", "wollte", "durfte", "sollte" and "es gab".`,
    ],
    sections: [
      {
        heading: `"Sein" and "haben"`,
        body: [
          `"Sein" becomes "war", "haben" becomes "hatte". The "ich" and "er/sie/es" forms are identical, with no personal ending, which is true of every verb in the Präteritum.`,
        ],
        table: {
          headers: ["", "sein", "haben"],
          rows: [
            ["ich", "war", "hatte"],
            ["du", "warst", "hattest"],
            ["er, sie, es", "war", "hatte"],
            ["wir", "waren", "hatten"],
            ["ihr", "wart", "hattet"],
            ["sie, Sie", "waren", "hatten"],
          ],
        },
        examples: [
          { de: "Ich war letztes Jahr in Wien.", en: "I was in Vienna last year." },
          { de: "Wo warst du gestern Abend?", en: "Where were you last night?" },
          { de: "Wir hatten keine Zeit.", en: "We didn't have time." },
          { de: "Das Wetter war schön und wir hatten viel Spaß.", en: "The weather was nice and we had a lot of fun." },
        ],
      },
      {
        heading: `The modal verbs`,
        body: [
          `The modals take "-te" endings and drop their umlaut: "können" becomes "konnte", "müssen" becomes "musste", "dürfen" becomes "durfte". "Wollen" and "sollen" have no umlaut to drop: "wollte", "sollte". "Mögen" becomes "mochte".`,
          `The Perfekt of modals ("ich habe arbeiten müssen") exists but is clumsy, so Germans almost always use the Präteritum. Watch the trap with "sollte": in the past it means was supposed to, but "Du solltest mehr schlafen" in the present means you should sleep more. Context and time words tell you which.`,
        ],
        table: {
          headers: ["", "können", "müssen", "wollen", "dürfen"],
          rows: [
            ["ich", "konnte", "musste", "wollte", "durfte"],
            ["du", "konntest", "musstest", "wolltest", "durftest"],
            ["er, sie, es", "konnte", "musste", "wollte", "durfte"],
            ["wir", "konnten", "mussten", "wollten", "durften"],
            ["ihr", "konntet", "musstet", "wolltet", "durftet"],
            ["sie, Sie", "konnten", "mussten", "wollten", "durften"],
          ],
        },
        examples: [
          { de: "Ich konnte nicht kommen, ich musste arbeiten.", en: "I couldn't come, I had to work." },
          { de: "Als Kind wollte ich Pilot werden.", en: "As a child I wanted to be a pilot." },
          { de: "Wir durften nicht im Haus rauchen.", en: "We weren't allowed to smoke in the house." },
          { de: "Er mochte keinen Fisch.", en: "He didn't like fish." },
        ],
      },
      {
        heading: `"Es gab" and other useful chunks`,
        body: [
          `"Es gibt" (there is, there are) becomes "es gab" in the past. A few other Präteritum forms are so common in speech that they are worth learning as chunks now: "ich wusste" (I knew), "es ging" (it went, it was okay), "ich dachte" (I thought).`,
        ],
        examples: [
          { de: "Früher gab es hier ein Kino.", en: "There used to be a cinema here." },
          { de: "Es gab nur noch kalte Pizza.", en: "There was only cold pizza left." },
          { de: "Das wusste ich nicht.", en: "I didn't know that." },
          { de: "Ich dachte, du kommst heute.", en: "I thought you were coming today." },
        ],
      },
      {
        heading: `Perfekt or Präteritum?`,
        body: [
          `In speech, mix them the way Germans do: Präteritum for "sein", "haben", modals and "es gab", Perfekt for everything else. "Ich war müde, deshalb bin ich früh ins Bett gegangen." Both tenses mean the same thing; the choice is about style, not time.`,
          `In written stories, news and books, the Präteritum is used for all verbs ("Er ging nach Hause und kochte"). You will meet that in reading; producing it comes at the next level. In the north of Germany the Präteritum is a bit more common in speech than in the south, where some speakers barely use it at all.`,
        ],
        examples: [
          { de: "Ich hatte Hunger, also habe ich gekocht.", en: "I was hungry, so I cooked." },
          { de: "Wir wollten ins Kino, aber es hat geregnet.", en: "We wanted to go to the cinema, but it rained." },
          { de: "Die Party war super, wir haben viel getanzt.", en: "The party was great, we danced a lot." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ich konntete nicht kommen.",
        right: "Ich konnte nicht kommen.",
        why: `The modal stem already ends in "t": "konn-" + "-te" gives "konnte".`,
      },
      {
        wrong: "Ich könnte gestern nicht kommen.",
        right: "Ich konnte gestern nicht kommen.",
        why: `"Könnte" with an umlaut means could (hypothetically). The past drops the umlaut: "konnte".`,
      },
      {
        wrong: "Er warte zu Hause.",
        right: "Er war zu Hause.",
        why: `"War" is irregular and takes no "-te". ("Er wartete" means he waited.)`,
      },
      {
        wrong: "Gestern es gab ein Konzert.",
        right: "Gestern gab es ein Konzert.",
        why: `Verb second: after a time phrase in position 1, "gab" comes before "es".`,
      },
      {
        wrong: "Ich habe Hunger gehabt, also habe ich gegessen.",
        right: "Ich hatte Hunger, also habe ich gegessen.",
        why: `"Ich habe ... gehabt" is correct but sounds heavy. Germans prefer "ich hatte" in speech.`,
      },
    ],
    faqs: [
      {
        q: `Is it wrong to say "ich bin gewesen"?`,
        a: `No, it is correct, and southern speakers use it a lot. But "ich war" is shorter and more common across Germany, and it is the safer default.`,
      },
      {
        q: `What is the difference between "musste" and "müsste"?`,
        a: `"Musste" is the past: I had to. "Müsste" with an umlaut is the Konjunktiv II: I would have to, I ought to. The same goes for "konnte" (could, was able to) and "könnte" (could, might).`,
      },
    ],
    related: ["perfekt-haben-sein", "german-modal-verbs", "german-praeteritum", "konjunktiv-ii"],
    lessons: [
      "a2-praeteritum-1",
      "a2-es-gab-hunger-hatte",
      "a2-praeteritum-2",
      "a2-minimal-pairs-kann-konnte",
      "a2-contrast-could-had-to",
      "a2-perfekt-vs-praeteritum-1",
      "a2-perfekt-vs-praeteritum-2",
    ],
  },
  {
    slug: "dative-case",
    title: "The Dative Case: Dem, Der, Den",
    description:
      "What the dative does, the dative articles and pronouns, verbs like helfen and gefallen, the plural -n, and the prepositions that always take the dative.",
    level: "A2",
    intro: [
      `The dative is the third German case. Its core job is the indirect object, the person something is given to, shown to or done for: "Ich gebe dem Kind ein Buch" (I give the child a book). English marks this with word order or with "to"; German marks it with the article.`,
      `The dative also follows a set of very common prepositions ("mit", "bei", "zu", "von", "aus", "nach", "seit") and a group of verbs that take a dative where English has a plain object ("helfen", "danken", "gefallen"). Since these are everywhere, the dative turns up in almost every German sentence.`,
    ],
    sections: [
      {
        heading: `The dative articles`,
        body: [
          `Masculine and neuter both become "dem", feminine becomes "der", and the plural becomes "den", with an extra "-n" on the noun itself if it does not already end in -n or -s: "die Kinder" becomes "den Kindern". "Ein", "kein" and the possessives follow the same pattern: "einem", "einer", "meinem", "meiner", "meinen".`,
        ],
        table: {
          headers: ["", "Masculine", "Feminine", "Neuter", "Plural"],
          rows: [
            ["nominative", "der Mann", "die Frau", "das Kind", "die Kinder"],
            ["accusative", "den Mann", "die Frau", "das Kind", "die Kinder"],
            ["dative", "dem Mann", "der Frau", "dem Kind", "den Kindern"],
            ["dative (ein)", "einem Mann", "einer Frau", "einem Kind", "Kindern"],
            ["dative (mein)", "meinem Mann", "meiner Frau", "meinem Kind", "meinen Kindern"],
          ],
        },
        examples: [
          { de: "Ich schenke meiner Mutter Blumen.", en: "I'm giving my mother flowers." },
          { de: "Er zeigt dem Kunden das Zimmer.", en: "He shows the customer the room." },
          { de: "Wir schreiben den Großeltern eine Karte.", en: "We're writing the grandparents a card." },
          { de: "Sie erklärt einem Freund den Weg.", en: "She explains the way to a friend." },
        ],
      },
      {
        heading: `Dative pronouns`,
        body: [
          `The pronouns have their own dative forms: "mir", "dir", "ihm", "ihr", "ihm", "uns", "euch", "ihnen", "Ihnen". You need them constantly: "Wie geht es dir?" (how are you, literally how goes it to you?) is already a dative.`,
          `Many feelings and states use a dative person and no real subject: "Mir ist kalt" (I'm cold), "Mir ist schlecht" (I feel sick), "Es tut mir leid" (I'm sorry).`,
        ],
        table: {
          headers: ["Nominative", "Accusative", "Dative"],
          rows: [
            ["ich", "mich", "mir"],
            ["du", "dich", "dir"],
            ["er", "ihn", "ihm"],
            ["sie", "sie", "ihr"],
            ["es", "es", "ihm"],
            ["wir", "uns", "uns"],
            ["ihr", "euch", "euch"],
            ["sie, Sie", "sie, Sie", "ihnen, Ihnen"],
          ],
        },
        examples: [
          { de: "Kannst du mir helfen?", en: "Can you help me?" },
          { de: "Ich gebe dir morgen das Geld.", en: "I'll give you the money tomorrow." },
          { de: "Es tut mir leid.", en: "I'm sorry." },
          { de: "Mir ist kalt.", en: "I'm cold." },
        ],
      },
      {
        heading: `Verbs that take the dative`,
        body: [
          `A group of everyday verbs take a dative object even though English uses a plain object: "helfen" (help), "danken" (thank), "antworten" (answer), "gratulieren" (congratulate), "gehören" (belong to), "passen" (fit, suit), "schmecken" (taste good to), "gefallen" (please). Learn them as "jemandem helfen", with the dative built in.`,
          `"Gefallen" is the one to master: the thing you like is the subject, and you are the dative. "Der Film gefällt mir" means I like the film (literally the film pleases me). With a plural thing, the verb is plural: "Die Schuhe gefallen mir".`,
        ],
        examples: [
          { de: "Ich helfe dir gern.", en: "I'm happy to help you." },
          { de: "Wem gehört die Jacke?", en: "Whose jacket is this?" },
          { de: "Die Wohnung gefällt uns sehr.", en: "We really like the flat." },
          { de: "Schmeckt dir die Suppe?", en: "Do you like the soup?" },
          { de: "Ich danke Ihnen für Ihre Hilfe.", en: "Thank you for your help." },
        ],
      },
      {
        heading: `Prepositions that always take the dative`,
        body: [
          `Seven very common prepositions always take the dative, whatever the verb: "aus", "bei", "mit", "nach", "seit", "von", "zu". Some contract with the article: "bei dem" becomes "beim", "von dem" becomes "vom", "zu dem" becomes "zum", "zu der" becomes "zur".`,
        ],
        table: {
          headers: ["Preposition", "Meaning", "Example"],
          rows: [
            ["aus", "out of, from (origin)", "aus der Schweiz"],
            ["bei", "at (someone's place), near", "beim Arzt, bei meinen Eltern"],
            ["mit", "with, by (transport)", "mit dem Bus"],
            ["nach", "after, to (cities, countries, home)", "nach dem Essen, nach Hause"],
            ["seit", "since, for (up to now)", "seit einem Jahr"],
            ["von", "from, of, by", "vom Bahnhof"],
            ["zu", "to (people, places)", "zum Bäcker, zur Arbeit"],
          ],
        },
        examples: [
          { de: "Ich fahre mit dem Fahrrad zur Arbeit.", en: "I cycle to work." },
          { de: "Sie kommt aus der Türkei.", en: "She comes from Turkey." },
          { de: "Nach dem Kurs gehen wir zum Italiener.", en: "After the class we're going to the Italian restaurant." },
          { de: "Ich lerne seit drei Monaten Deutsch.", en: "I've been learning German for three months." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ich helfe dich.",
        right: "Ich helfe dir.",
        why: `"Helfen" takes the dative: "dir", not the accusative "dich".`,
      },
      {
        wrong: "Ich mag der Film. / Der Film gefällt ich.",
        right: "Der Film gefällt mir.",
        why: `With "gefallen", the liked thing is the subject and the person is dative.`,
      },
      {
        wrong: "Ich fahre mit der Bus.",
        right: "Ich fahre mit dem Bus.",
        why: `"Der Bus" is masculine, and "mit" takes the dative: "dem Bus".`,
      },
      {
        wrong: "Ich spiele mit den Kinder.",
        right: "Ich spiele mit den Kindern.",
        why: `Dative plural nouns add "-n" if they do not already end in -n or -s.`,
      },
      {
        wrong: "Wie geht es du?",
        right: "Wie geht es dir?",
        why: `The person in "Wie geht es ...?" is dative.`,
      },
    ],
    faqs: [
      {
        q: `How do I know when to use the dative instead of the accusative?`,
        a: `Three triggers cover most cases: the indirect object (the receiver), a dative preposition ("mit", "bei", "zu" and the rest), and a dative verb ("helfen", "gefallen", "danken"). Two-way prepositions such as "in" and "auf" are a separate story, covered in their own guide.`,
      },
      {
        q: `Is the dative dying out?`,
        a: `No. You may have heard the joke book title "Der Dativ ist dem Genitiv sein Tod" (the dative is the death of the genitive): in casual speech the dative is replacing the genitive, not the other way round. The dative itself is fully alive.`,
      },
      {
        q: `What does "wem" mean?`,
        a: `It is the dative of "wer" (who): to whom, for whom. "Wem gehört das?" (whose is that, literally to whom does that belong?), "Wem hilfst du?" (who are you helping?).`,
      },
    ],
    related: ["nominative-accusative", "german-personal-pronouns", "two-way-prepositions", "german-case-prepositions"],
    lessons: [
      "a2-dative-case-1",
      "a2-dative-pattern-dem-der-den",
      "a2-dative-qa-mir-dir",
      "a2-dative-verbs",
      "a2-dative-case-2",
      "a2-gefallen-schmecken-gehoeren",
      "a2-dative-expressions",
      "a2-dative-prepositions",
    ],
  },
  {
    slug: "two-way-prepositions",
    title: "Two-Way Prepositions: Wo or Wohin?",
    description:
      "The nine German prepositions that take the accusative for movement and the dative for location, plus the verb pairs stellen/stehen, legen/liegen, setzen/sitzen, hängen.",
    level: "A2",
    intro: [
      `Nine prepositions can take either the accusative or the dative: "an", "auf", "hinter", "in", "neben", "über", "unter", "vor", "zwischen". The case is not random: it answers a question. Movement towards a place ("wohin?", where to?) takes the accusative. Being at a place ("wo?", where?) takes the dative.`,
      `"Ich gehe in den Park" (I'm going into the park: accusative) versus "Ich bin im Park" (I'm in the park: dative). English uses into/in or onto/on for some of this, but mostly says "in" for both, so the article is doing work English leaves to context.`,
    ],
    sections: [
      {
        heading: `"Wohin" takes the accusative, "wo" takes the dative`,
        body: [
          `Ask yourself whether something is moving to a new place or is already there. Movement within a place does not count: "Ich laufe im Park" (I'm running in the park, going round inside it) is dative, because you are not changing location.`,
          `Common contractions: "in dem" becomes "im", "in das" becomes "ins", "an dem" becomes "am", "an das" becomes "ans". So "im" and "am" are always dative, "ins" and "ans" always accusative.`,
        ],
        table: {
          headers: ["Preposition", "Wohin? (accusative)", "Wo? (dative)"],
          rows: [
            ["in", "Ich gehe ins Kino.", "Ich bin im Kino."],
            ["an", "Ich hänge das Bild an die Wand.", "Das Bild hängt an der Wand."],
            ["auf", "Ich lege das Buch auf den Tisch.", "Das Buch liegt auf dem Tisch."],
            ["unter", "Die Katze läuft unter das Bett.", "Die Katze schläft unter dem Bett."],
            ["neben", "Ich setze mich neben dich.", "Ich sitze neben dir."],
            ["zwischen", "Stell die Lampe zwischen die Stühle.", "Die Lampe steht zwischen den Stühlen."],
          ],
        },
        examples: [
          { de: "Wir fahren am Wochenende in die Berge.", en: "We're going to the mountains at the weekend." },
          { de: "Wir wandern am Wochenende in den Bergen.", en: "We're hiking in the mountains at the weekend." },
          { de: "Ich gehe ins Bett.", en: "I'm going to bed." },
          { de: "Ich liege noch im Bett.", en: "I'm still in bed." },
          { de: "Häng die Jacke an den Haken!", en: "Hang the jacket on the hook!" },
        ],
      },
      {
        heading: `Putting and being: the verb pairs`,
        body: [
          `German does not have one verb for put. It distinguishes standing things, lying things and sitting, and has a pair of verbs for each: an action verb (with an object, accusative after the preposition) and a position verb (no object, dative after the preposition).`,
          `"Stellen" is for upright things (a bottle, a lamp, a chair), "legen" for flat things (a book, a phone, a towel), "setzen" for people sitting down, "hängen" for both hanging and being hung. The action verbs are regular ("gestellt", "gelegt"); the position verbs are irregular ("gestanden", "gelegen", "gesessen"); "hängen" has both participles: "gehängt" (hung something up) and "gehangen" (was hanging).`,
        ],
        table: {
          headers: ["Action (wohin? + accusative)", "Position (wo? + dative)"],
          rows: [
            ["stellen: Ich stelle die Flasche auf den Tisch.", "stehen: Die Flasche steht auf dem Tisch."],
            ["legen: Ich lege das Handy auf das Sofa.", "liegen: Das Handy liegt auf dem Sofa."],
            ["setzen: Ich setze das Kind auf den Stuhl.", "sitzen: Das Kind sitzt auf dem Stuhl."],
            ["hängen: Ich hänge das Bild an die Wand.", "hängen: Das Bild hängt an der Wand."],
          ],
        },
        examples: [
          { de: "Wo ist mein Schlüssel? Er liegt auf dem Schreibtisch.", en: "Where's my key? It's on the desk." },
          { de: "Ich habe die Milch in den Kühlschrank gestellt.", en: "I put the milk in the fridge." },
          { de: "Die Milch steht im Kühlschrank.", en: "The milk is in the fridge." },
          { de: "Setz dich doch aufs Sofa!", en: "Go on, sit down on the sofa!" },
        ],
      },
      {
        heading: `Time and fixed uses`,
        body: [
          `With time expressions these prepositions usually take the dative: "am Montag", "im Sommer", "vor einer Woche" (a week ago), "in zwei Tagen". The main exception is "über" with the accusative: "übers Wochenende" (over the weekend).`,
          `Several prepositions also combine with verbs in fixed phrases where the case has to be learned, for example "warten auf" + accusative or "Angst haben vor" + dative. Those belong with verbs with prepositions, which you meet later.`,
        ],
        examples: [
          { de: "Am Freitag gehe ich ins Theater.", en: "On Friday I'm going to the theatre." },
          { de: "Im Winter ist es hier sehr kalt.", en: "In winter it's very cold here." },
          { de: "Vor dem Essen wasche ich mir die Hände.", en: "Before eating I wash my hands." },
          { de: "Ich warte auf den Bus.", en: "I'm waiting for the bus." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ich gehe im Kino.",
        right: "Ich gehe ins Kino.",
        why: `Going somewhere is movement ("wohin?"): "in das", contracted to "ins".`,
      },
      {
        wrong: "Das Buch liegt auf den Tisch.",
        right: "Das Buch liegt auf dem Tisch.",
        why: `"Liegen" describes position ("wo?"), so the dative: "dem Tisch".`,
      },
      {
        wrong: "Ich lege die Flasche in den Kühlschrank.",
        right: "Ich stelle die Flasche in den Kühlschrank.",
        why: `A bottle stands upright, so German uses "stellen".`,
      },
      {
        wrong: "Ich habe das Handy auf den Tisch gelegen.",
        right: "Ich habe das Handy auf den Tisch gelegt.",
        why: `The action verb is "legen" (participle "gelegt"); "gelegen" is from "liegen".`,
      },
      {
        wrong: "Ich wohne in die Stadt.",
        right: "Ich wohne in der Stadt.",
        why: `"Wohnen" is location, not movement: dative.`,
      },
    ],
    faqs: [
      {
        q: `Why "nach Hause" but "zu Hause"?`,
        a: `These are fixed expressions with the dative-only prepositions "nach" and "zu", not two-way prepositions. "Ich gehe nach Hause" (I'm going home), "Ich bin zu Hause" (I'm at home).`,
      },
      {
        q: `What about going to a city or a country?`,
        a: `Cities and most countries take "nach": "nach Berlin", "nach Spanien". Countries with an article take "in" + accusative: "in die Schweiz", "in die USA". People and shops take "zu": "zum Arzt", "zu Anna".`,
      },
    ],
    related: ["dative-case", "nominative-accusative", "german-case-prepositions", "verbs-with-prepositions"],
    lessons: [
      "a2-wechselpraepositionen-1",
      "a2-drill-im-am-ins-ans",
      "a2-wechselpraepositionen-2",
      "a2-contrast-stellen-stehen",
      "a2-choose-wo-wohin",
    ],
  },
  {
    slug: "german-personal-pronouns",
    title: "Personal Pronouns in Every Case: Ich, Mich, Mir",
    description:
      "The full table of German personal pronouns in the nominative, accusative and dative, how to choose between ihn and ihm or mich and mir, and the order of two pronouns.",
    level: "A2",
    intro: [
      `English has two forms of most pronouns (I/me, he/him, she/her). German has three, one for each case you use daily: nominative for the subject, accusative for the direct object, dative for the indirect object and after dative prepositions and verbs. Some forms overlap, which helps and confuses in equal measure.`,
      `The pairs that cause most trouble are "mich" and "mir", "dich" and "dir", and "ihn" and "ihm". Each is decided by the verb or preposition in front of it, never by the meaning in English.`,
    ],
    sections: [
      {
        heading: `The full table`,
        body: [
          `Read the table by columns. Notice that "uns" and "euch" are the same in the accusative and dative, and that "sie" can be she, they or (capitalised) formal you. In the dative, she becomes "ihr" (which is also the nominative of you all) and they becomes "ihnen".`,
        ],
        table: {
          headers: ["Nominative", "Accusative", "Dative", "English"],
          rows: [
            ["ich", "mich", "mir", "I, me"],
            ["du", "dich", "dir", "you"],
            ["er", "ihn", "ihm", "he, him (or it)"],
            ["sie", "sie", "ihr", "she, her (or it)"],
            ["es", "es", "ihm", "it"],
            ["wir", "uns", "uns", "we, us"],
            ["ihr", "euch", "euch", "you (plural)"],
            ["sie", "sie", "ihnen", "they, them"],
            ["Sie", "Sie", "Ihnen", "you (formal)"],
          ],
        },
        examples: [
          { de: "Ich sehe ihn jeden Tag.", en: "I see him every day." },
          { de: "Ich gebe ihm das Buch.", en: "I'm giving him the book." },
          { de: "Kennst du sie?", en: "Do you know her? / Do you know them?" },
          { de: "Ich rufe Sie morgen an.", en: "I'll call you tomorrow." },
          { de: "Wir besuchen euch im Sommer.", en: "We'll visit you in the summer." },
        ],
      },
      {
        heading: `Choosing the case`,
        body: [
          `Accusative after a direct object verb ("sehen", "kennen", "besuchen", "fragen", "anrufen") and after "für", "ohne", "gegen", "durch", "um". Dative after the dative verbs ("helfen", "danken", "gefallen", "gehören") and after "mit", "bei", "von", "zu", "aus", "nach", "seit".`,
          `Watch "fragen" and "anrufen": English speakers expect a dative (ask to someone?), but both take the accusative: "Ich frage dich", "Ich rufe dich an". And watch "helfen": it feels like a direct object in English, but it is "Ich helfe dir".`,
        ],
        examples: [
          { de: "Das ist für dich.", en: "This is for you." },
          { de: "Kommst du mit mir?", en: "Are you coming with me?" },
          { de: "Ich habe ihn gefragt.", en: "I asked him." },
          { de: "Ich habe ihm geholfen.", en: "I helped him." },
          { de: "Ohne euch ist es langweilig.", en: "It's boring without you." },
        ],
      },
      {
        heading: `Pronouns stand in for things too`,
        body: [
          `Because every noun has a gender, "ihn" and "ihm" also mean it for masculine things, and "sie" and "ihr" mean it for feminine things. "Der Kuchen ist lecker. Ich esse ihn gern." (The cake is tasty. I like eating it.)`,
        ],
        examples: [
          { de: "Wo ist der Löffel? Ich brauche ihn.", en: "Where's the spoon? I need it." },
          { de: "Die Jacke ist schön. Ich kaufe sie.", en: "The jacket's nice. I'll buy it." },
          { de: "Das Fahrrad ist alt, aber ich mag es.", en: "The bike is old, but I like it." },
        ],
      },
      {
        heading: `Two objects: which comes first?`,
        body: [
          `With verbs like "geben", "schenken", "zeigen", "erklären", there are two objects, a person (dative) and a thing (accusative). Three rules settle the order. Two nouns: dative before accusative. A pronoun and a noun: the pronoun first. Two pronouns: accusative before dative.`,
          `The last rule is the trap: English says I give it to him or I give him it; German says "Ich gebe es ihm", accusative "es" first.`,
        ],
        table: {
          headers: ["Objects", "Order", "Example"],
          rows: [
            ["two nouns", "dative, accusative", "Ich gebe dem Mann das Geld."],
            ["pronoun + noun", "pronoun first", "Ich gebe ihm das Geld. / Ich gebe es dem Mann."],
            ["two pronouns", "accusative, dative", "Ich gebe es ihm."],
          ],
        },
        examples: [
          { de: "Kannst du mir das Salz geben?", en: "Can you pass me the salt?" },
          { de: "Ich zeige es dir später.", en: "I'll show it to you later." },
          { de: "Sie hat ihrer Schwester das Auto geliehen.", en: "She lent her sister the car." },
          { de: "Sie hat es ihr geliehen.", en: "She lent it to her." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ich helfe ihn.",
        right: "Ich helfe ihm.",
        why: `"Helfen" takes the dative: "ihm".`,
      },
      {
        wrong: "Ich rufe dir morgen an.",
        right: "Ich rufe dich morgen an.",
        why: `"Anrufen" takes the accusative in German.`,
      },
      {
        wrong: "Ich gebe ihm es.",
        right: "Ich gebe es ihm.",
        why: `With two pronouns, the accusative comes first.`,
      },
      {
        wrong: "Der Film ist gut. Ich habe es gesehen.",
        right: "Der Film ist gut. Ich habe ihn gesehen.",
        why: `"Der Film" is masculine, so the pronoun is "ihn", not "es".`,
      },
      {
        wrong: "Das ist für mir.",
        right: "Das ist für mich.",
        why: `"Für" always takes the accusative.`,
      },
    ],
    faqs: [
      {
        q: `How do I tell "sie" (she), "sie" (they) and "Sie" (you) apart?`,
        a: `In writing, the capital marks formal "Sie". For she and they, look at the verb: "sie kommt" (she's coming), "sie kommen" (they're coming). In the dative they separate clearly: "ihr" (to her), "ihnen" (to them), "Ihnen" (to you).`,
      },
      {
        q: `Is there a genitive pronoun too?`,
        a: `Technically yes ("meiner", "deiner"), but it is rare and formal. For possession you use the possessive articles "mein", "dein", "sein", "ihr" instead.`,
      },
    ],
    related: ["dative-case", "nominative-accusative", "reflexive-verbs", "word-order-time-manner-place"],
    lessons: [
      "a1-accusative-pronouns-1",
      "a1-accusative-pronouns-2",
      "a2-dative-qa-mir-dir",
      "a2-two-objects-1",
      "a2-minimal-pairs-ihn-ihm",
      "a2-two-objects-2",
      "a2-contrast-fragen-anrufen-helfen",
    ],
  },
  {
    slug: "weil-dass-verb-final",
    title: "Weil, Dass, Wenn: Sending the Verb to the End",
    description:
      "How subordinate clauses work in German: weil, dass, wenn, ob and other conjunctions push the conjugated verb to the end, with the comma rules and the denn/weil contrast.",
    level: "A2",
    intro: [
      `German main clauses put the verb second. Subordinate clauses, introduced by words like "weil" (because), "dass" (that), "wenn" (if, when) and "ob" (whether), send the conjugated verb to the very end. "Ich bleibe zu Hause, weil ich krank bin" (I'm staying at home because I'm ill).`,
      `This is the single biggest word-order difference from English after verb-second, and it is the one that makes German sentences feel like you are waiting for the verb. Once you have it, your sentences can grow as long as you like.`,
    ],
    sections: [
      {
        heading: `The conjugated verb goes last`,
        body: [
          `After the conjunction comes the subject, then everything else, then the conjugated verb. If there are other verb parts (an infinitive with a modal, a participle in the Perfekt), they come just before it, so the conjugated verb is normally the very last word.`,
          `Separable verbs join back together at the end: "Ich weiß, dass du früh aufstehst." A comma always separates the subordinate clause from the main clause.`,
        ],
        table: {
          headers: ["Main clause", "Subordinate clause"],
          rows: [
            ["Ich bin müde.", "..., weil ich müde bin."],
            ["Er kann nicht kommen.", "..., dass er nicht kommen kann."],
            ["Sie hat angerufen.", "..., weil sie angerufen hat."],
            ["Du stehst früh auf.", "..., wenn du früh aufstehst."],
          ],
        },
        examples: [
          { de: "Ich lerne Deutsch, weil ich in Berlin arbeite.", en: "I'm learning German because I work in Berlin." },
          { de: "Ich glaube, dass er recht hat.", en: "I think he's right." },
          { de: "Wenn es regnet, bleiben wir zu Hause.", en: "If it rains, we'll stay at home." },
          { de: "Weißt du, ob der Laden heute offen ist?", en: "Do you know whether the shop is open today?" },
          { de: "Sie ist sauer, weil ich sie nicht angerufen habe.", en: "She's annoyed because I didn't call her." },
        ],
      },
      {
        heading: `The subordinate clause first: verb, comma, verb`,
        body: [
          `A subordinate clause can come first. Then the whole clause counts as position 1 of the main clause, so the main verb comes immediately after the comma. The result is two verbs side by side with a comma between them: "Wenn ich Zeit habe, komme ich".`,
        ],
        examples: [
          { de: "Weil es spät war, sind wir nach Hause gegangen.", en: "Because it was late, we went home." },
          { de: "Wenn du Hilfe brauchst, ruf mich an!", en: "If you need help, call me!" },
          { de: "Dass du kommst, freut mich sehr.", en: "I'm really glad you're coming." },
        ],
      },
      {
        heading: `"Weil" or "denn"?`,
        body: [
          `"Denn" also means because, but it is a coordinating conjunction: it does not count as a position and does not move the verb. "Ich bleibe zu Hause, denn ich bin krank." Same meaning as "weil", normal word order. "Denn" cannot start an answer to "warum?"; "weil" can: "Warum bist du nicht gekommen? Weil ich krank war."`,
          `The other words that leave word order untouched are "und", "aber", "oder" and "sondern". Everything else that links clauses either sends the verb to the end ("weil", "dass", "wenn", "ob", "als", "obwohl") or takes position 1 and pulls the verb in after it ("deshalb", "trotzdem", "dann").`,
          `In casual speech you will hear "weil" with verb-second ("weil ich hab keine Zeit"). It is common, but it is not standard written German, so avoid it in writing and in the exam.`,
        ],
        examples: [
          { de: "Ich nehme den Bus, denn mein Auto ist kaputt.", en: "I'm taking the bus because my car is broken." },
          { de: "Ich nehme den Bus, weil mein Auto kaputt ist.", en: "I'm taking the bus because my car is broken." },
          { de: "Mein Auto ist kaputt, deshalb nehme ich den Bus.", en: "My car is broken, so I'm taking the bus." },
        ],
      },
      {
        heading: `"Dass" or "das"? Indirect questions`,
        body: [
          `"Dass" (with ss) is the conjunction that: "Ich hoffe, dass es klappt". "Das" (one s) is the article or the pronoun: "das Buch", "Das stimmt". If you can replace the word with "dieses" or "welches", it is "das".`,
          `Indirect questions work like subordinate clauses: a question word or "ob" (for yes/no questions), then the verb at the end. They are the polite way to ask for information: "Können Sie mir sagen, wo der Bahnhof ist?"`,
        ],
        examples: [
          { de: "Ich weiß, dass das Konzert ausverkauft ist.", en: "I know that the concert is sold out." },
          { de: "Wissen Sie, wann der Zug fährt?", en: "Do you know when the train leaves?" },
          { de: "Ich frage mich, ob sie noch kommt.", en: "I wonder whether she's still coming." },
          { de: "Kannst du mir sagen, wie viel das kostet?", en: "Can you tell me how much that costs?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "..., weil ich habe keine Zeit.",
        right: "..., weil ich keine Zeit habe.",
        why: `After "weil" the conjugated verb goes to the end.`,
      },
      {
        wrong: "Wenn ich Zeit habe, ich komme.",
        right: "Wenn ich Zeit habe, komme ich.",
        why: `The fronted clause is position 1, so the main verb comes straight after the comma.`,
      },
      {
        wrong: "..., dass er nicht kann kommen.",
        right: "..., dass er nicht kommen kann.",
        why: `The conjugated verb is the very last word, after the infinitive.`,
      },
      {
        wrong: "Ich hoffe, das du kommst.",
        right: "Ich hoffe, dass du kommst.",
        why: `The conjunction is spelled "dass" with ss.`,
      },
      {
        wrong: "Wissen Sie, wo ist der Bahnhof?",
        right: "Wissen Sie, wo der Bahnhof ist?",
        why: `In an indirect question the verb goes to the end.`,
      },
    ],
    faqs: [
      {
        q: `What is the difference between "wenn" and "ob"? Both can mean if.`,
        a: `"Wenn" is if in the sense of a condition or whenever: "Wenn es regnet, ...". "Ob" is if in the sense of whether, after verbs like "wissen", "fragen", "nicht sicher sein": "Ich weiß nicht, ob es regnet."`,
      },
      {
        q: `Can I leave out "dass" like English leaves out that?`,
        a: `Yes, after verbs of saying and thinking, but then the clause has main-clause order: "Ich glaube, er hat recht" equals "Ich glaube, dass er recht hat".`,
      },
    ],
    related: ["verb-second-word-order", "als-wenn-wann", "relative-clauses", "two-part-connectors"],
    lessons: [
      "a2-subordinate-clauses-1",
      "a2-subordinate-clauses-2",
      "a2-contrast-denn-weil",
      "a2-pattern-verb-final-complex",
      "a2-indirect-questions",
      "a2-das-or-dass",
    ],
  },
  {
    slug: "reflexive-verbs",
    title: "Reflexive Verbs: Sich Waschen, Sich Freuen",
    description:
      "German reflexive verbs and their pronouns, mich or mir, verbs that are always reflexive, reciprocal sich, and verbs that change meaning with sich.",
    level: "A2",
    intro: [
      `A reflexive verb has an object that refers back to the subject: "Ich wasche mich" (I wash myself). German uses reflexive verbs far more than English, including for things English says without myself: "sich freuen" (to be happy), "sich setzen" (to sit down), "sich beeilen" (to hurry).`,
      `The reflexive pronoun changes with the subject, and in some sentences it is accusative ("mich") and in others dative ("mir"). Both are covered below.`,
    ],
    sections: [
      {
        heading: `The reflexive pronouns`,
        body: [
          `For "ich", "du", "wir" and "ihr", the reflexive pronouns are the ordinary object pronouns. For everyone in the third person, and for formal "Sie", the reflexive pronoun is "sich", always lower case, even with formal "Sie".`,
        ],
        table: {
          headers: ["", "Accusative", "Dative"],
          rows: [
            ["ich", "mich", "mir"],
            ["du", "dich", "dir"],
            ["er, sie, es", "sich", "sich"],
            ["wir", "uns", "uns"],
            ["ihr", "euch", "euch"],
            ["sie, Sie", "sich", "sich"],
          ],
        },
        examples: [
          { de: "Ich freue mich auf das Wochenende.", en: "I'm looking forward to the weekend." },
          { de: "Setz dich!", en: "Sit down!" },
          { de: "Er rasiert sich jeden Morgen.", en: "He shaves every morning." },
          { de: "Wir müssen uns beeilen.", en: "We have to hurry." },
          { de: "Interessieren Sie sich für Kunst?", en: "Are you interested in art?" },
        ],
      },
      {
        heading: `"Mich" or "mir"?`,
        body: [
          `If the sentence has no other direct object, the reflexive pronoun is accusative: "Ich wasche mich". If there is another direct object (often a body part or a piece of clothing), that takes the accusative and the reflexive pronoun becomes dative: "Ich wasche mir die Hände" (I wash my hands).`,
          `Note that German uses the reflexive dative plus the definite article ("die", "das"), not a possessive, for body parts: literally I wash to myself the hands. The difference only shows with "ich" and "du": "mich/mir", "dich/dir".`,
        ],
        examples: [
          { de: "Ich ziehe mich an.", en: "I get dressed." },
          { de: "Ich ziehe mir eine Jacke an.", en: "I put on a jacket." },
          { de: "Putz dir die Zähne!", en: "Brush your teeth!" },
          { de: "Ich habe mir das Bein gebrochen.", en: "I broke my leg." },
          { de: "Ich kaufe mir ein neues Handy.", en: "I'm buying myself a new phone." },
        ],
      },
      {
        heading: `Always reflexive, sometimes reflexive`,
        body: [
          `Some verbs are always reflexive: "sich beeilen" (hurry), "sich erholen" (recover, relax), "sich verlieben" (fall in love), "sich bedanken" (say thank you). Others can take a normal object or a reflexive one: "Ich wasche das Auto" (I wash the car) versus "Ich wasche mich".`,
          `A few change meaning with "sich": "vorstellen" (introduce someone) versus "sich etwas vorstellen" (imagine something); "ärgern" (annoy someone) versus "sich ärgern" (be annoyed); "fühlen" (feel something) versus "sich fühlen" (feel, as in a state).`,
          `In the plural, "sich" and "uns" can mean each other: "Wir treffen uns um acht" (we're meeting at eight), "Sie lieben sich" (they love each other).`,
        ],
        examples: [
          { de: "Ich fühle mich heute nicht gut.", en: "I don't feel well today." },
          { de: "Kannst du dir das vorstellen?", en: "Can you imagine that?" },
          { de: "Ärgere dich nicht!", en: "Don't get annoyed!" },
          { de: "Wir kennen uns seit der Schule.", en: "We've known each other since school." },
        ],
      },
      {
        heading: `Where does "sich" go?`,
        body: [
          `The reflexive pronoun sits as early as possible after the conjugated verb, usually right after it, or right after a pronoun subject that follows the verb: "Heute freue ich mich", "Morgen trifft sich die Gruppe". In the Perfekt, reflexive verbs take "haben": "Ich habe mich gefreut".`,
        ],
        examples: [
          { de: "Gestern habe ich mich sehr geärgert.", en: "I was really annoyed yesterday." },
          { de: "Hast du dich schon angemeldet?", en: "Have you registered yet?" },
          { de: "Ich weiß, dass er sich verliebt hat.", en: "I know he's fallen in love." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ich freue auf den Urlaub.",
        right: "Ich freue mich auf den Urlaub.",
        why: `"Sich freuen" needs its reflexive pronoun.`,
      },
      {
        wrong: "Ich wasche mich die Hände.",
        right: "Ich wasche mir die Hände.",
        why: `With another direct object ("die Hände"), the reflexive pronoun is dative.`,
      },
      {
        wrong: "Wir treffen um acht.",
        right: "Wir treffen uns um acht.",
        why: `Meeting each other is reflexive in German: "sich treffen".`,
      },
      {
        wrong: "Setzen Sie Sich!",
        right: "Setzen Sie sich!",
        why: `"Sich" is never capitalised, even with formal "Sie".`,
      },
      {
        wrong: "Ich bin mich gestern beeilt.",
        right: "Ich habe mich gestern beeilt.",
        why: `Reflexive verbs form the Perfekt with "haben".`,
      },
    ],
    faqs: [
      {
        q: `Is "sich" the same as "himself"?`,
        a: `Often, but much more often it has no English equivalent at all. "Ich setze mich" is simply I sit down. Learn reflexive verbs with "sich" attached, as "sich setzen", and the pronoun will come automatically.`,
      },
      {
        q: `What is the difference between "sich setzen" and "sitzen"?`,
        a: `"Sich setzen" is the movement (sit down), "sitzen" is the state (be sitting). The same pattern as "stellen/stehen" and "legen/liegen" with two-way prepositions: "Ich setze mich auf den Stuhl", "Ich sitze auf dem Stuhl".`,
      },
    ],
    related: ["german-personal-pronouns", "dative-case", "verbs-with-prepositions", "two-way-prepositions"],
    lessons: [
      "a2-reflexive-verbs-1",
      "a2-reflexive-pattern-present",
      "a2-reflexive-verbs-2",
      "a2-choose-mir-or-mich",
      "a2-reflexive-reciprocal",
      "a2-contrast-reflexive-meaning",
    ],
  },
  {
    slug: "comparatives-superlatives",
    title: "Comparatives and Superlatives: Größer Als, Am Größten",
    description:
      "How to compare in German: -er + als, so ... wie, the superlative with am -sten, the umlaut in short adjectives, and the irregular gut, viel and gern.",
    level: "A2",
    intro: [
      `German compares the way English does with short adjectives, and almost never the way English does with long ones. Every adjective, however long, adds "-er" for the comparative and "-sten" for the superlative: "schneller" (faster), "interessanter" (more interesting). There is no German equivalent of more interesting built with "mehr".`,
      `The two pitfalls are the umlaut that many short adjectives add ("alt", "älter") and the word for than, which is "als", not "wie".`,
    ],
    sections: [
      {
        heading: `The comparative: -er + "als"`,
        body: [
          `Add "-er" to the adjective and use "als" for than. Many one-syllable adjectives with a, o or u take an umlaut: "alt, älter", "groß, größer", "jung, jünger", "kurz, kürzer", "warm, wärmer". Adjectives ending in -el drop the e ("dunkel, dunkler"), and so do those in -er after "au" or "eu" ("teuer, teurer", "sauer, saurer").`,
          `To say as ... as, use "so ... wie" with the plain adjective: "Er ist so groß wie sein Vater". "Nicht so ... wie" is not as ... as.`,
        ],
        examples: [
          { de: "Berlin ist größer als München.", en: "Berlin is bigger than Munich." },
          { de: "Mein Bruder ist zwei Jahre älter als ich.", en: "My brother is two years older than me." },
          { de: "Dieses Buch ist interessanter als der Film.", en: "This book is more interesting than the film." },
          { de: "Die Wohnung ist teurer, aber heller.", en: "The flat is more expensive, but brighter." },
          { de: "Heute ist es nicht so kalt wie gestern.", en: "It's not as cold today as yesterday." },
        ],
      },
      {
        heading: `The superlative: "am" -sten`,
        body: [
          `After a verb, the superlative is "am" + adjective + "-sten": "am schnellsten", "am ältesten". Short adjectives ending in -d, -t, -s, -ß, -sch, -z add "-esten" so you can pronounce them: "am ältesten", "am kürzesten", "am heißesten". "Groß" is the exception: "am größten".`,
          `Before a noun, the superlative takes an article and an adjective ending, like any adjective: "der schnellste Zug", "die älteste Stadt", "das größte Zimmer".`,
        ],
        table: {
          headers: ["Adjective", "Comparative", "Superlative"],
          rows: [
            ["schnell", "schneller", "am schnellsten"],
            ["alt", "älter", "am ältesten"],
            ["groß", "größer", "am größten"],
            ["teuer", "teurer", "am teuersten"],
            ["gut", "besser", "am besten"],
            ["viel", "mehr", "am meisten"],
            ["gern", "lieber", "am liebsten"],
            ["hoch", "höher", "am höchsten"],
            ["nah", "näher", "am nächsten"],
          ],
        },
        examples: [
          { de: "Der ICE ist am schnellsten.", en: "The ICE is the fastest." },
          { de: "Das ist der höchste Berg in Deutschland.", en: "That's the highest mountain in Germany." },
          { de: "Im August ist es am heißesten.", en: "It's hottest in August." },
          { de: "Sie hat das größte Zimmer.", en: "She has the biggest room." },
        ],
      },
      {
        heading: `"Gut", "viel" and "gern"`,
        body: [
          `The three irregulars you need daily: "gut, besser, am besten", "viel, mehr, am meisten", "gern, lieber, am liebsten". "Gern" turns any verb into liking: "Ich trinke gern Tee" (I like tea), "Ich trinke lieber Kaffee" (I prefer coffee), "Am liebsten trinke ich Wasser" (most of all I like water).`,
          `"Mehr" never changes its form: "mehr Zeit", "mehr Geld", "mehr Leute".`,
        ],
        examples: [
          { de: "Ich spiele gern Tennis, aber lieber Fußball.", en: "I like playing tennis, but I prefer football." },
          { de: "Was machst du am liebsten?", en: "What do you like doing most?" },
          { de: "Du sprichst besser Deutsch als ich.", en: "You speak German better than I do." },
          { de: "Wir brauchen mehr Zeit.", en: "We need more time." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Berlin ist größer wie München.",
        right: "Berlin ist größer als München.",
        why: `After a comparative, than is "als". "Wie" goes with "so ... wie". (Some speakers say "größer wie", but it is not standard.)`,
      },
      {
        wrong: "Das ist mehr interessant.",
        right: "Das ist interessanter.",
        why: `Every German adjective takes "-er", however long it is.`,
      },
      {
        wrong: "Er ist alter als ich.",
        right: "Er ist älter als ich.",
        why: `Short adjectives with a, o, u usually take an umlaut: "älter".`,
      },
      {
        wrong: "Er läuft der schnellste.",
        right: "Er läuft am schnellsten.",
        why: `With a verb such as "laufen" (how someone does something), only "am" + "-sten" works. After "sein", "Er ist am schnellsten" and "Er ist der Schnellste" are both correct.`,
      },
      {
        wrong: "Ich mag besser Kaffee.",
        right: "Ich trinke lieber Kaffee.",
        why: `Preferring is "lieber" (from "gern") with the verb, not "besser".`,
      },
    ],
    faqs: [
      {
        q: `How do I know which adjectives take an umlaut?`,
        a: `Mostly common one-syllable words with a, o or u: "alt", "arm", "groß", "hoch", "jung", "kalt", "klug", "kurz", "lang", "oft", "stark", "warm". Several do not, such as "klar", "voll", "toll", "froh". Learn the frequent ones; when unsure, no umlaut is the safer guess for less common words.`,
      },
      {
        q: `How do I say just as ... as, or the same as?`,
        a: `Add "genauso" for an equal degree: "Ich bin genauso müde wie du" (I'm just as tired as you). For the same thing, use "das Gleiche wie" or "dasselbe wie": "Ich nehme das Gleiche wie du" (I'll have the same as you).`,
      },
    ],
    related: ["adjective-endings-intro", "adjective-endings-complete", "weil-dass-verb-final"],
    lessons: [
      "a2-comparisons-1",
      "a2-comparisons-pattern",
      "a2-comparisons-2",
      "a2-contrast-als-wie",
      "a2-drill-besser-lieber-mehr",
    ],
  },
  {
    slug: "adjective-endings-intro",
    title: "Adjective Endings: A First Look",
    description:
      "Why German adjectives take endings before a noun, the pattern after der, die, das, the pattern after ein, and the simple rule that tells you which ending to use.",
    level: "A2",
    intro: [
      `After a verb, a German adjective has no ending: "Der Pullover ist rot". Before a noun it almost always has one: "der rote Pullover", "ein roter Pullover". The ending depends on the gender, the case and the word in front of it. That sounds like a huge table, but at this level two patterns and one principle cover most of what you say.`,
      `The principle: the gender and case have to be shown once, by the article or by the adjective. If the article already shows it clearly, the adjective takes a plain "-e" or "-en". If the article does not, the adjective has to show it.`,
    ],
    sections: [
      {
        heading: `After "der", "die", "das": -e or -en`,
        body: [
          `After the definite article (and after "dieser", "jeder", "welcher", which work the same way), the adjective takes only two endings. It is "-e" in five places (all three nominative singulars, and the feminine and neuter accusative), and "-en" everywhere else: every dative, every plural, and the masculine accusative.`,
        ],
        table: {
          headers: ["", "Masculine", "Feminine", "Neuter", "Plural"],
          rows: [
            ["nominative", "der rote Pullover", "die rote Jacke", "das rote Hemd", "die roten Schuhe"],
            ["accusative", "den roten Pullover", "die rote Jacke", "das rote Hemd", "die roten Schuhe"],
            ["dative", "dem roten Pullover", "der roten Jacke", "dem roten Hemd", "den roten Schuhen"],
          ],
        },
        examples: [
          { de: "Der neue Kollege ist sehr nett.", en: "The new colleague is very nice." },
          { de: "Ich nehme die blaue Tasche.", en: "I'll take the blue bag." },
          { de: "Wir helfen dem alten Mann.", en: "We're helping the old man." },
          { de: "Welchen Mantel möchten Sie? Den schwarzen.", en: "Which coat would you like? The black one." },
          { de: "Die deutschen Städte sind sehr grün.", en: "German cities are very green." },
        ],
      },
      {
        heading: `After "ein", "kein", "mein": the adjective steps in`,
        body: [
          `"Ein" has no ending in three places: masculine nominative, and neuter nominative and accusative. There the article does not show the gender, so the adjective does: "ein roter Pullover" (the -er of "der"), "ein rotes Hemd" (the -es of "das"). Everywhere else, the pattern is the same as after "der".`,
          `"Kein" and the possessives ("mein", "dein", "unser") follow exactly the same pattern as "ein", and they have a plural, which takes "-en": "meine alten Freunde".`,
        ],
        table: {
          headers: ["", "Masculine", "Feminine", "Neuter", "Plural"],
          rows: [
            ["nominative", "ein roter Pullover", "eine rote Jacke", "ein rotes Hemd", "keine roten Schuhe"],
            ["accusative", "einen roten Pullover", "eine rote Jacke", "ein rotes Hemd", "keine roten Schuhe"],
            ["dative", "einem roten Pullover", "einer roten Jacke", "einem roten Hemd", "keinen roten Schuhen"],
          ],
        },
        examples: [
          { de: "Das ist ein guter Plan.", en: "That's a good plan." },
          { de: "Sie hat ein kleines Auto.", en: "She has a small car." },
          { de: "Ich suche eine günstige Wohnung.", en: "I'm looking for an affordable flat." },
          { de: "Er wohnt mit seinem besten Freund zusammen.", en: "He lives with his best friend." },
        ],
      },
      {
        heading: `No article at all`,
        body: [
          `With no article in front, the adjective carries the article's ending itself: "kalter Kaffee" (like "der"), "frische Milch" (like "die"), "kaltes Wasser" (like "das"), "frische Brötchen" (like plural "die"). In the dative it takes "-em", "-er", "-em", "-en": "mit frischem Brot". You meet this on menus and in advertisements constantly. The full system, including the genitive, comes at the next level.`,
        ],
        examples: [
          { de: "Ich trinke gern kalten Tee.", en: "I like drinking cold tea." },
          { de: "Frisches Obst ist gesund.", en: "Fresh fruit is healthy." },
          { de: "Viele Grüße und schönes Wochenende!", en: "Best wishes and have a nice weekend!" },
          { de: "Brot mit frischer Butter", en: "bread with fresh butter" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Der Pullover ist roter.",
        right: "Der Pullover ist rot.",
        why: `After "sein" the adjective has no ending.`,
      },
      {
        wrong: "ein rote Pullover",
        right: "ein roter Pullover",
        why: `"Ein" does not show masculine, so the adjective takes "-er".`,
      },
      {
        wrong: "Ich kaufe den rote Pullover.",
        right: "Ich kaufe den roten Pullover.",
        why: `Masculine accusative after "den" takes "-en".`,
      },
      {
        wrong: "Ich habe ein neue Handy.",
        right: "Ich habe ein neues Handy.",
        why: `Neuter after "ein" needs "-es" on the adjective.`,
      },
      {
        wrong: "mit meinem neue Fahrrad",
        right: "mit meinem neuen Fahrrad",
        why: `Every dative after an article takes "-en".`,
      },
    ],
    faqs: [
      {
        q: `Do Germans really get these right in speech?`,
        a: `Native speakers do, effortlessly. Learners make slips for years, and people will understand you anyway. Aim to get the high-frequency patterns ("einen guten", "ein gutes", "mit dem neuen") automatic first.`,
      },
      {
        q: `What about two adjectives in a row?`,
        a: `They both take the same ending: "ein kleines, altes Haus", "der alte braune Tisch".`,
      },
    ],
    related: ["adjective-endings-complete", "nominative-accusative", "dative-case", "comparatives-superlatives"],
    lessons: [
      "a2-adjective-endings-weak-1",
      "a2-adjective-endings-weak-2",
      "a2-pattern-dieser-jeder-welcher",
      "a2-adjective-endings-mixed-1",
      "a2-adjective-endings-mixed-2",
      "a2-contrast-der-ein-nothing",
    ],
  },
  {
    slug: "german-imperative",
    title: "The Imperative: Komm! Kommt! Kommen Sie!",
    description:
      "How to give instructions and make requests in German: the du, ihr and Sie forms of the imperative, separable verbs, sein, and how to soften a command with bitte, doch and mal.",
    level: "A2",
    intro: [
      `German has three imperative forms, because it has three ways to say you: "du" (one person you know well), "ihr" (several people you know well) and "Sie" (polite, one or more). Choosing the right one matters more than in English, where come here! is the same for everyone.`,
      `On their own, German imperatives can sound abrupt to English ears. Germans soften them with "bitte" and with the little words "mal" and "doch", which turn an order into a friendly request.`,
    ],
    sections: [
      {
        heading: `The three forms`,
        body: [
          `The "du" form is the "du" present tense without "du" and without the "-st": "du kommst" becomes "Komm!", "du machst" becomes "Mach!". Verbs that change e to i or ie keep that change: "du nimmst" becomes "Nimm!", "du liest" becomes "Lies!". Verbs that add an umlaut in the "du" present drop it: "du fährst" becomes "Fahr!".`,
          `The "ihr" form is just the "ihr" present without "ihr": "Kommt!", "Macht!", "Nehmt!". The "Sie" form is the "Sie" present with the verb first: "Kommen Sie!", "Nehmen Sie Platz!".`,
        ],
        table: {
          headers: ["Infinitive", "du", "ihr", "Sie"],
          rows: [
            ["kommen", "Komm!", "Kommt!", "Kommen Sie!"],
            ["warten", "Warte!", "Wartet!", "Warten Sie!"],
            ["nehmen", "Nimm!", "Nehmt!", "Nehmen Sie!"],
            ["lesen", "Lies!", "Lest!", "Lesen Sie!"],
            ["fahren", "Fahr!", "Fahrt!", "Fahren Sie!"],
            ["sein", "Sei!", "Seid!", "Seien Sie!"],
            ["haben", "Hab!", "Habt!", "Haben Sie!"],
          ],
        },
        examples: [
          { de: "Komm bitte her!", en: "Come here, please!" },
          { de: "Nimm doch noch ein Stück Kuchen!", en: "Go on, have another piece of cake!" },
          { de: "Seid bitte leise!", en: "Please be quiet, everyone!" },
          { de: "Warten Sie bitte einen Moment!", en: "Please wait a moment." },
          { de: "Sei nicht so streng!", en: "Don't be so strict!" },
        ],
      },
      {
        heading: `Separable verbs, reflexive verbs and negation`,
        body: [
          `The prefix of a separable verb goes to the end, as in any main clause: "Ruf mich an!", "Steht bitte auf!", "Machen Sie das Fenster zu!". Reflexive verbs keep their pronoun: "Beeil dich!", "Setzt euch!", "Setzen Sie sich!".`,
          `"Nicht" usually goes near the end: "Vergiss das nicht!". To say don't do that with a noun, use "kein": "Mach keinen Lärm!" (don't make any noise).`,
        ],
        examples: [
          { de: "Ruf mich morgen an!", en: "Call me tomorrow!" },
          { de: "Beeil dich, der Zug fährt gleich!", en: "Hurry up, the train's about to leave!" },
          { de: "Machen Sie bitte die Tür zu.", en: "Please close the door." },
          { de: "Vergiss den Schlüssel nicht!", en: "Don't forget the key!" },
        ],
      },
      {
        heading: `Softening: "bitte", "mal", "doch"`,
        body: [
          `"Bitte" (please) can go almost anywhere: "Bitte setzen Sie sich", "Setzen Sie sich bitte". "Mal" makes a request casual and quick: "Komm mal her!" (come here a sec). "Doch" adds encouragement, often like go on or why don't you: "Komm doch mit!" (why don't you come along?).`,
          `Combined, they are very natural: "Sag doch mal!" (go on, tell me). In very polite situations, Germans often avoid the imperative entirely and use a question: "Könnten Sie mir bitte helfen?"`,
          `A neutral instruction to everyone (in recipes, signs and instructions) often uses the plain infinitive: "Bitte nicht rauchen", "Zwiebeln klein schneiden".`,
        ],
        examples: [
          { de: "Schau mal!", en: "Look!" },
          { de: "Ruf doch mal an!", en: "Give me a call some time!" },
          { de: "Bitte langsam fahren.", en: "Please drive slowly." },
          { de: "Könnten Sie das bitte wiederholen?", en: "Could you repeat that, please?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Kommst her!",
        right: "Komm her!",
        why: `The "du" imperative drops the "-st" ending as well as the pronoun.`,
      },
      {
        wrong: "Nehm das!",
        right: "Nimm das!",
        why: `Verbs with an e to i change keep it in the "du" imperative.`,
      },
      {
        wrong: "Fähr langsam!",
        right: "Fahr langsam!",
        why: `The umlaut of "du fährst" disappears in the imperative.`,
      },
      {
        wrong: "Anrufen Sie mich!",
        right: "Rufen Sie mich an!",
        why: `The separable prefix goes to the end.`,
      },
      {
        wrong: "Bist leise!",
        right: "Sei leise!",
        why: `"Sein" has irregular imperatives: "Sei!", "Seid!", "Seien Sie!".`,
      },
    ],
    faqs: [
      {
        q: `Should it be "Komm!" or "Komme!"?`,
        a: `Both exist; the "-e" is old-fashioned or formal for most verbs. Use the short form. The "-e" is needed only when the stem ends in -t or -d ("Warte!", "Finde!") or in some clusters ("Öffne!", "Atme!").`,
      },
      {
        q: `Is there a "wir" form?`,
        a: `Yes, for let's: the "wir" present with the verb first, "Gehen wir!" (let's go), "Fangen wir an!" (let's start). "Lass uns gehen" is a common alternative.`,
      },
    ],
    related: ["sein-haben-du-sie", "separable-verbs", "german-present-tense", "reflexive-verbs"],
    lessons: ["a1-imperative-1", "a1-imperative-2", "a2-imperative-1", "a2-imperative-2"],
  },
  {
    slug: "german-case-prepositions",
    title: "Prepositions and Their Cases: Für, Mit, Wegen",
    description:
      "Which German prepositions always take the accusative, which always take the dative, the two-way group, and the genitive prepositions wegen and trotz.",
    level: "A2",
    intro: [
      `Every German preposition decides the case of the noun after it. That is one of the biggest helps in German: if you know the preposition, you know the case, whatever the verb or meaning. There are four groups: accusative only, dative only, two-way (accusative or dative) and genitive.`,
      `The accusative and dative groups are short enough to learn by heart, and many learners memorise them as little chants: "durch, für, gegen, ohne, um" and "aus, bei, mit, nach, seit, von, zu".`,
    ],
    sections: [
      {
        heading: `Always accusative: "durch", "für", "gegen", "ohne", "um"`,
        body: [
          `These five always take the accusative. Only the masculine shows a change ("den", "einen", "meinen"); feminine, neuter and plural look the same as the nominative. Common contractions: "durchs", "fürs", "ums".`,
        ],
        table: {
          headers: ["Preposition", "Meaning", "Example"],
          rows: [
            ["durch", "through", "durch den Park"],
            ["für", "for", "für meinen Vater"],
            ["gegen", "against; around (time)", "gegen den Wind, gegen acht Uhr"],
            ["ohne", "without", "ohne einen Cent"],
            ["um", "around; at (clock time)", "um den See, um acht Uhr"],
          ],
        },
        examples: [
          { de: "Wir gehen durch den Wald.", en: "We walk through the woods." },
          { de: "Das Geschenk ist für dich.", en: "The present is for you." },
          { de: "Ich trinke Kaffee ohne Zucker.", en: "I drink coffee without sugar." },
          { de: "Der Film beginnt um acht.", en: "The film starts at eight." },
        ],
      },
      {
        heading: `Always dative: "aus", "bei", "mit", "nach", "seit", "von", "zu"`,
        body: [
          `These seven always take the dative, even when movement is involved: "Ich gehe zum Arzt" is movement, but "zu" is dative-only, so it stays dative. Common contractions: "beim", "vom", "zum", "zur". "Gegenüber" (opposite) also takes the dative.`,
        ],
        examples: [
          { de: "Ich komme gerade vom Bahnhof.", en: "I've just come from the station." },
          { de: "Wir fahren zu meinen Eltern.", en: "We're going to my parents'." },
          { de: "Sie wohnt noch bei ihrer Mutter.", en: "She still lives at her mother's." },
          { de: "Nach der Arbeit gehe ich zum Sport.", en: "After work I go and do some sport." },
        ],
      },
      {
        heading: `Two-way: "an", "auf", "hinter", "in", "neben", "über", "unter", "vor", "zwischen"`,
        body: [
          `These nine take the accusative for movement to a place ("wohin?") and the dative for location ("wo?"). They have their own guide; the key contrast is "Ich gehe in den Garten" (accusative, movement) versus "Ich bin im Garten" (dative, location).`,
        ],
        examples: [
          { de: "Ich lege das Buch auf den Tisch.", en: "I put the book on the table." },
          { de: "Das Buch liegt auf dem Tisch.", en: "The book is on the table." },
        ],
      },
      {
        heading: `Genitive: "wegen", "trotz", "während", "statt"`,
        body: [
          `A few prepositions take the genitive, especially in writing: "wegen" (because of), "trotz" (despite), "während" (during), "statt" (instead of). Masculine and neuter nouns take "des" and add "-s" or "-es" to the noun: "wegen des Wetters". Feminine and plural take "der": "trotz der Kälte".`,
          `In everyday speech many Germans use the dative after "wegen" and "trotz" ("wegen dem Wetter"). You will hear it all the time, but write the genitive.`,
        ],
        examples: [
          { de: "Wegen des Regens bleiben wir zu Hause.", en: "Because of the rain we're staying at home." },
          { de: "Trotz der Kälte gehen wir spazieren.", en: "Despite the cold we're going for a walk." },
          { de: "Während des Films hat sein Handy geklingelt.", en: "His phone rang during the film." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ich gehe zu der Arzt.",
        right: "Ich gehe zum Arzt.",
        why: `"Zu" always takes the dative: "zu dem", contracted to "zum".`,
      },
      {
        wrong: "Das ist für meinem Bruder.",
        right: "Das ist für meinen Bruder.",
        why: `"Für" always takes the accusative.`,
      },
      {
        wrong: "Ich fahre mit meine Freunde.",
        right: "Ich fahre mit meinen Freunden.",
        why: `"Mit" takes the dative: "meinen" plus the plural "-n" on the noun.`,
      },
      {
        wrong: "Ich wohne hier seit zwei Jahre.",
        right: "Ich wohne hier seit zwei Jahren.",
        why: `"Seit" is dative, so the plural noun takes "-n".`,
      },
      {
        wrong: "ohne mir",
        right: "ohne mich",
        why: `"Ohne" takes the accusative.`,
      },
    ],
    faqs: [
      {
        q: `Why is "nach" sometimes after and sometimes to?`,
        a: `"Nach" means after in time ("nach dem Essen") and to with cities, countries without an article and home ("nach Wien", "nach Hause"). It also means according to when it follows the noun: "meiner Meinung nach" (in my opinion). The case is always dative.`,
      },
      {
        q: `"Bei" or "mit"? Both can be with.`,
        a: `"Mit" is with in the sense of together with or using ("mit dem Bus"). "Bei" is at someone's place, near or while doing ("bei meinen Eltern", "beim Essen"). "Ich wohne bei meiner Tante" means I live at my aunt's.`,
      },
    ],
    related: ["dative-case", "two-way-prepositions", "nominative-accusative", "genitive-case"],
    lessons: [
      "a2-accusative-prepositions",
      "a2-dative-prepositions",
      "a2-pattern-fuer-dich-mit-dir",
      "a2-genitive-basics",
      "a2-wegen-trotz",
      "a2-choose-preposition-case",
    ],
  },
  {
    slug: "word-order-time-manner-place",
    title: "Word Order in the Middle: Time, Manner, Place",
    description:
      "Where everything goes between the verb and the end of a German sentence: time before manner before place, the order of objects, and where nicht goes.",
    level: "A2",
    intro: [
      `Verb second and verb last fix the two ends of a German sentence. Between them is the middle field, and it has its own order. The best-known rule is time, manner, place (often learned as "TeKaMoLo": "temporal, kausal, modal, lokal"): when, why, how, where.`,
      `English tends to do the reverse, putting place before time (I'm going to the cinema tonight). German says "Ich gehe heute Abend ins Kino": time first.`,
    ],
    sections: [
      {
        heading: `Time, (reason), manner, place`,
        body: [
          `When several adverbial phrases appear, the usual order is: time ("wann?"), reason ("warum?"), manner ("wie?"), place ("wo?", "wohin?"). You rarely need all four, but the time-before-place habit is the one to build.`,
          `Any one of them can move to position 1 for emphasis, and then the verb comes next: "Heute Abend gehe ich mit Freunden ins Kino". The rest keep their order.`,
        ],
        table: {
          headers: ["Time", "Reason", "Manner", "Place"],
          rows: [
            ["morgen", "", "mit dem Zug", "nach Hamburg"],
            ["heute", "wegen des Regens", "", "zu Hause"],
            ["am Wochenende", "", "mit Freunden", "in die Berge"],
          ],
        },
        examples: [
          { de: "Ich fahre morgen mit dem Zug nach Hamburg.", en: "I'm going to Hamburg by train tomorrow." },
          { de: "Wir bleiben heute wegen des Regens zu Hause.", en: "We're staying at home today because of the rain." },
          { de: "Sie geht jeden Morgen zu Fuß zur Arbeit.", en: "She walks to work every morning." },
          { de: "Am Wochenende fahren wir mit Freunden in die Berge.", en: "At the weekend we're going to the mountains with friends." },
        ],
      },
      {
        heading: `Objects in the middle`,
        body: [
          `Pronoun objects come very early, right after the verb (or after a subject that follows the verb). Noun objects come later: a dative noun before an accusative noun, and the accusative noun often after the time phrase. "Ich habe ihr gestern das Buch gegeben."`,
          `A useful habit: short and already-known things early, new and important information late. The end of the middle field is the natural spot for the news of the sentence.`,
        ],
        examples: [
          { de: "Ich gebe dir morgen das Geld zurück.", en: "I'll give you the money back tomorrow." },
          { de: "Hast du ihn gestern im Büro gesehen?", en: "Did you see him in the office yesterday?" },
          { de: "Er hat seiner Freundin zum Geburtstag Blumen geschenkt.", en: "He gave his girlfriend flowers for her birthday." },
        ],
      },
      {
        heading: `Where does "nicht" go?`,
        body: [
          `To negate the whole sentence, "nicht" goes after the objects and time phrases, but before manner and place phrases and before the parts at the end (participle, infinitive, separable prefix, predicate adjective). "Ich habe den Film gestern nicht gesehen."`,
          `To negate one specific part, put "nicht" directly in front of it, often with "sondern" to give the correction: "Ich fahre nicht morgen, sondern übermorgen."`,
        ],
        examples: [
          { de: "Ich kenne den Mann nicht.", en: "I don't know the man." },
          { de: "Wir fahren heute nicht nach Berlin.", en: "We're not going to Berlin today." },
          { de: "Er ist gestern nicht mit dem Auto gekommen.", en: "He didn't come by car yesterday." },
          { de: "Ich rufe dich heute nicht an.", en: "I won't call you today." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ich gehe ins Kino heute Abend.",
        right: "Ich gehe heute Abend ins Kino.",
        why: `Time comes before place in the middle field.`,
      },
      {
        wrong: "Ich fahre nach Berlin mit dem Zug.",
        right: "Ich fahre mit dem Zug nach Berlin.",
        why: `Manner (how) comes before place (where to).`,
      },
      {
        wrong: "Ich habe gestern ihm geholfen.",
        right: "Ich habe ihm gestern geholfen.",
        why: `Pronoun objects come right after the verb, before the time phrase.`,
      },
      {
        wrong: "Ich nicht verstehe das.",
        right: "Ich verstehe das nicht.",
        why: `"Nicht" never goes between the subject and the conjugated verb in a main clause; for the whole sentence it goes after the object.`,
      },
      {
        wrong: "Ich habe nicht den Film gesehen.",
        right: "Ich habe den Film nicht gesehen.",
        why: `To negate the whole sentence, "nicht" follows the object. "Nicht den Film" only works with a correction: "nicht den Film, sondern die Serie".`,
      },
    ],
    faqs: [
      {
        q: `Is time-manner-place a strict rule?`,
        a: `It is the neutral default. Native speakers shift things for emphasis, and the end of the middle field gets the stress. If you follow time-manner-place, you will always sound natural; deviations will sound marked rather than wrong.`,
      },
      {
        q: `Does the same order apply in subordinate clauses?`,
        a: `Yes. Only the verb moves: "..., weil ich morgen mit dem Zug nach Berlin fahre".`,
      },
    ],
    related: ["verb-second-word-order", "nicht-vs-kein", "german-personal-pronouns", "weil-dass-verb-final"],
    lessons: ["a2-perfekt-short-adverbs", "a2-two-objects-1", "a2-two-objects-2", "a2-time-expressions"],
  },
];
