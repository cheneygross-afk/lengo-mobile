// Synced from cheneygross-afk/lengo:src/lib/lessons/de-a2-writing.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { UnitWriting } from "./unitWriting";

// Extra writing tasks for this level's units, so every unit asks the learner to
// write at least three times: keyed by the lesson each is added to (see
// unitWriting.ts). Marked by the AI writing feedback like every writing task.
export const DE_A2_WRITING: UnitWriting = {
  "a2-perfekt-haben-2": [
    {
      "type": "write",
      "prompt": "Write a diary entry about a long day at work or university today: what you worked on, what you waited for, what you opened or answered, and what you did in the evening.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses the Perfekt with \"haben\" and regular participles",
        "Includes at least three participles in -et (\"gearbeitet\", \"gewartet\", \"geöffnet\", \"geantwortet\")",
        "Puts \"haben\" second and the participle at the end, also after a time word (\"Am Morgen habe ich...\")",
        "Starts like a diary (\"Liebes Tagebuch\") and gives a feeling about the day"
      ],
      "modelAnswer": "Liebes Tagebuch, heute war ein langer Tag! Am Morgen habe ich eine Stunde auf den Bus gewartet. Im Büro habe ich zuerst meine E-Mails geöffnet und vielen Kunden geantwortet. Dann habe ich bis sieben Uhr an einem Projekt gearbeitet. Mittags habe ich nur einen Apfel gekauft. Am Abend habe ich zu Hause gekocht und ein bisschen Musik gehört. Jetzt bin ich sehr müde!",
      "explanation": "Stems ending in -t, -d or a consonant cluster add -et: \"gewartet\", \"geöffnet\", \"geantwortet\", \"gearbeitet\". After a time word (\"Am Morgen\", \"Dann\", \"Am Abend\") \"habe\" stays in second place and the participle goes to the end."
    }
  ],
  "a2-dialogue-wochenende": [
    {
      "type": "write",
      "prompt": "It's Monday morning at work. Write a short dialogue between you and a colleague in the kitchen: ask each other about the weekend, say what you did and didn't do, and react to what you hear.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Asks W- and yes/no questions in the Perfekt (\"Was hast du gemacht?\", \"Hast du...?\")",
        "Answers with \"haben\" + a participle at the end of the sentence",
        "Includes a negative with \"nicht\" or \"kein\" and an adverb such as \"schon\", \"noch nicht\" or \"lange\"",
        "Reacts to the news (\"Echt?\", \"Super!\", \"Schade!\")"
      ],
      "modelAnswer": "Lena: Morgen, Tom! Wie war dein Wochenende?\nTom: Gut! Am Samstag haben wir Annas Geburtstag gefeiert und bis zwei Uhr getanzt.\nLena: Super! Hast du am Sonntag Fußball gespielt?\nTom: Nein, ich habe die Wohnung geputzt. Und was hast du gemacht?\nLena: Ich habe gearbeitet und keine Pause gemacht. Ich habe noch nicht mal gekocht.\nTom: Oh, schade!",
      "explanation": "Questions in the Perfekt start with the auxiliary (\"Hast du...?\") or a question word (\"Was hast du gemacht?\"). The participle always closes the sentence (\"gefeiert\", \"getanzt\", \"geputzt\"), with \"kein\" before a noun and \"noch nicht\" inside the bracket."
    }
  ],
  "a2-irregular-participles-2": [
    {
      "type": "write",
      "prompt": "Your German class visited a museum last week. Write a short report for the language school's newsletter: which museum you visited, what the guide explained, what you saw and understood, and what you thought of the visit.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses participles without ge-: inseparable verbs (\"besucht\", \"erklärt\", \"verstanden\") and -ieren verbs (\"fotografiert\", \"diskutiert\")",
        "Uses at least two strong participles in -en (\"gesehen\", \"gesprochen\", \"gegessen\")",
        "Writes in the wir form with \"haben\" in second place",
        "Gives a short opinion at the end (\"Der Besuch hat uns gefallen\", \"Es war toll\")"
      ],
      "modelAnswer": "Letzten Freitag hat unsere Klasse das Mercedes-Benz-Museum in Stuttgart besucht. Eine Führerin hat uns viel über die Geschichte von Mercedes erklärt. Sie hat langsam gesprochen, und wir haben fast alles verstanden. Wir haben sehr alte Autos gesehen und viel fotografiert. Danach haben wir im Café über das Museum diskutiert und Kuchen gegessen. Der Besuch hat allen gefallen!",
      "explanation": "Verbs with an inseparable prefix and verbs in -ieren take no ge-: \"besucht\", \"erklärt\", \"verstanden\", \"fotografiert\", \"diskutiert\". Strong verbs end in -en (\"gesprochen\", \"gesehen\", \"gegessen\"), and every participle goes to the end of the sentence."
    }
  ],
  "a2-contrast-gewusst-gekannt": [
    {
      "type": "write",
      "prompt": "Write a short anecdote about a party where someone said hello to you but you didn't recognise them. Say what you knew and didn't know about this person, and how the story ended.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses \"gewusst\" for facts (\"Ich habe nicht gewusst, wer...\") and \"gekannt\" for people and places",
        "Uses at least three irregular or mixed participles (\"gesehen\", \"gesprochen\", \"getrunken\", \"erkannt\")",
        "Tells the events in order with \"zuerst\", \"dann\" or \"am Ende\"",
        "Uses the Perfekt with \"haben\" throughout (\"war\" and \"hatte\" are fine for states)"
      ],
      "modelAnswer": "Am Samstag habe ich auf einer Party eine Frau gesehen. Sie hat \"Hallo, Sam!\" gerufen, aber ich habe sie nicht erkannt. Zuerst habe ich nur gelächelt. Dann haben wir lange gesprochen und Saft getrunken. Ich habe ihren Namen nicht gewusst! Am Ende hat sie gesagt: \"Ich bin Julia, wir haben zusammen in Leeds studiert!\" Ich habe sie vor zehn Jahren gut gekannt. Wie peinlich!",
      "explanation": "\"Gewusst\" (from wissen) is for facts such as a name, \"gekannt\" (from kennen) is for people: \"Ich habe ihren Namen nicht gewusst\", \"Ich habe sie gut gekannt\". Both are mixed verbs with -t, like \"erkannt\", while \"gesprochen\" and \"getrunken\" are strong."
    }
  ],
  "a2-perfekt-sein-2": [
    {
      "type": "write",
      "prompt": "Write a diary entry about a terrible night and morning: when you went to bed, when you fell asleep and woke up, what happened, and how the day turned out.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses the Perfekt with \"sein\" for change of state (\"eingeschlafen\", \"aufgewacht\", \"geworden\")",
        "Uses \"ist passiert\", \"bin geblieben\" or \"bin gewesen\" correctly with \"sein\"",
        "Uses at least two verbs with \"haben\" to contrast (\"Ich habe gelesen\")",
        "Puts the ge- of separable verbs in the middle (\"eingeschlafen\", \"aufgestanden\")"
      ],
      "modelAnswer": "Liebes Tagebuch, was für eine Nacht! Ich bin um elf ins Bett gegangen, aber ich bin erst um zwei eingeschlafen. Ich habe lange gelesen. Um fünf bin ich aufgewacht, denn der Hund von nebenan hat gebellt. Dann ist etwas Dummes passiert: Ich bin wieder eingeschlafen und erst um neun aufgestanden! Ich bin zu spät zur Arbeit gekommen, und mein Chef ist sauer geworden.",
      "explanation": "Verbs for a change of state take \"sein\": \"bin eingeschlafen\", \"bin aufgewacht\", \"ist sauer geworden\", and so do \"passieren\" and movement verbs (\"bin gegangen\", \"bin gekommen\"). \"Lesen\" and \"bellen\" take \"haben\", and separable verbs put ge- in the middle (\"eingeschlafen\", \"aufgestanden\")."
    }
  ],
  "a2-contrast-gefahren-haben-sein": [
    {
      "type": "write",
      "prompt": "You rented a car last weekend and brought it back two hours late. Write a short email to the rental company (Sie): explain where you drove, what happened on the way back, and apologise.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses \"sein\" with fahren for a journey (\"Wir sind nach Köln gefahren\") and \"haben\" when there is an object (\"Ich habe das Auto gefahren\")",
        "Uses at least one other sein-verb (\"ist passiert\", \"sind angekommen\", \"bin geblieben\")",
        "Writes in the Sie form with a formal greeting and closing",
        "Apologises politely (\"Es tut mir leid\", \"Entschuldigen Sie bitte\")"
      ],
      "modelAnswer": "Sehr geehrte Damen und Herren,\nam Samstag habe ich bei Ihnen einen VW Golf gemietet. Wir sind nach Köln gefahren und dort zwei Tage geblieben. Am Sonntag ist auf der Autobahn ein Unfall passiert, und wir haben drei Stunden im Stau gestanden. Meine Frau hat das Auto am Ende gefahren. Ich war sehr müde. Wir sind erst um 20 Uhr angekommen. Es tut mir sehr leid!\nMit freundlichen Grüßen\nDaniel Weber",
      "explanation": "\"Fahren\" takes \"sein\" for the journey (\"Wir sind nach Köln gefahren\") but \"haben\" with a direct object (\"Meine Frau hat das Auto gefahren\"). \"Bleiben\", \"passieren\" and \"ankommen\" also take \"sein\", and the formal email opens with \"Sehr geehrte Damen und Herren\"."
    }
  ],
  "a2-es-gab-hunger-hatte": [
    {
      "type": "write",
      "prompt": "You stayed in a cheap hostel last month. Write an online review: say what the room and the breakfast were like, what there was and wasn't, and what you had problems with.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Describes the past with \"war\" and \"waren\" (\"Das Zimmer war klein\")",
        "Says what there was with \"es gab\" + accusative (\"Es gab keinen Fernseher\")",
        "Uses \"hatte\" / \"hatten\" for what you had (\"Wir hatten kein WLAN\", \"Ich hatte Hunger\")",
        "Ends with a clear recommendation (\"Ich empfehle das Hostel (nicht)\")"
      ],
      "modelAnswer": "Zwei von fünf Sternen. Das Hostel war billig und zentral, aber leider nicht sehr sauber. Das Zimmer war klein, und es gab keinen Schrank. Die Betten waren hart. Wir hatten zwei Tage kein WLAN und kein warmes Wasser. Das Frühstück war okay: Es gab Brot, Käse und Kaffee, aber kein Obst. Um neun Uhr gab es nichts mehr, und ich hatte großen Hunger. Ich empfehle das Hostel nicht.",
      "explanation": "In both speech and writing the past of \"sein\", \"haben\" and \"es gibt\" is usually the Präteritum: \"war\", \"waren\", \"hatten\", \"es gab\". \"Es gab\" takes the accusative, like \"es gibt\" (\"keinen Schrank\"), and \"Hunger haben\" becomes \"ich hatte Hunger\"."
    }
  ],
  "a2-contrast-could-had-to": [
    {
      "type": "write",
      "prompt": "You missed your German class yesterday. Write a short email to your teacher, Frau Roth: explain why you couldn't come, what you had to do instead, and ask what you should do for homework.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses \"konnte\" for couldn't (\"Ich konnte nicht kommen\")",
        "Uses \"musste\" for had to and, if needed, \"durfte\" for was (not) allowed to",
        "Asks about homework with \"sollen\" (\"Was soll ich machen?\") ",
        "Writes in the Sie form with a polite greeting and closing"
      ],
      "modelAnswer": "Liebe Frau Roth,\nleider konnte ich gestern nicht zum Kurs kommen. Mein Sohn war krank und musste zum Arzt. Mein Mann hatte keine Zeit, also musste ich mit ihm gehen. Wir mussten eine Stunde warten. Mein Sohn durfte danach nicht in den Kindergarten gehen, deshalb war ich den ganzen Tag zu Hause. Was sollen wir für Donnerstag machen? Können Sie mir die Hausaufgaben schicken?\nViele Grüße\nAna Silva",
      "explanation": "The past of the modal verbs drops the umlaut and adds -te: \"konnte\", \"musste\", \"durfte\". The second verb still goes to the end (\"Ich konnte nicht kommen\"), and \"Was sollen wir machen?\" asks what the teacher wants you to do."
    }
  ],
  "a2-story-detective-fahrrad": [
    {
      "type": "write",
      "prompt": "Your bike was stolen outside the station yesterday. Write a short statement for the police: when and where you left the bike, what it looks like, what you saw, and what you did afterwards.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses the Perfekt for actions (\"Ich habe das Fahrrad abgeschlossen\", \"Ich bin ... gegangen\")",
        "Uses \"war\" and \"konnte\" (or \"hatte\") in the Präteritum for states and modals",
        "Gives times and places precisely (\"gestern um 8 Uhr\", \"vor dem Bahnhof\")",
        "Writes in the first person in a factual, neutral style"
      ],
      "modelAnswer": "Gestern um 7.45 Uhr habe ich mein Fahrrad vor dem Hauptbahnhof abgeschlossen. Es ist ein rotes Damenrad mit einem schwarzen Korb. Dann bin ich mit dem Zug nach Bonn gefahren. Um 18 Uhr war das Fahrrad weg, nur das Schloss war noch da. Ein Mann hat gesagt, er hat am Nachmittag zwei junge Männer am Fahrradständer gesehen. Ich konnte niemanden finden und bin sofort zur Polizei gegangen.",
      "explanation": "In a spoken-style statement most verbs are in the Perfekt (\"habe abgeschlossen\", \"bin gefahren\", \"hat gesehen\"), but \"sein\", \"haben\" and the modals use the Präteritum: \"war weg\", \"war noch da\", \"konnte niemanden finden\". Exact times and places make the statement useful."
    }
  ],
  "a2-common-words-opinions": [
    {
      "type": "write",
      "prompt": "A German travel forum asks: ‘Summer holiday or winter holiday: which is better?’ Write a short comment with your opinion, how sure you are, and an example from a past holiday.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Gives an opinion with \"ich finde\", \"ich glaube\", \"ich denke\" or \"ich meine\"",
        "Says how sure you are with \"vielleicht\", \"wahrscheinlich\" or \"bestimmt\"",
        "Tells a past example with the Perfekt and \"war\" / \"hatte\"",
        "Ends with a question or a conclusion for other readers"
      ],
      "modelAnswer": "Ich finde Winterurlaub besser! Im Sommer ist es überall voll und teuer. Letztes Jahr waren wir im Februar in Österreich. Wir sind jeden Tag Ski gefahren und haben abends Käsefondue gegessen. Das Wetter war kalt, aber sonnig, und wir hatten viel Spaß. Für Familien ist Sommerurlaub vielleicht praktischer, das glaube ich schon. Aber im Winter ist es bestimmt ruhiger. Was meint ihr?",
      "explanation": "\"Ich finde\" gives an opinion, while \"ich glaube\" and \"ich denke\" are a little less sure; \"vielleicht\" softens a claim. The example uses the Perfekt for actions (\"sind gefahren\", \"haben gegessen\") and the Präteritum for \"waren\" and \"hatten\"."
    }
  ],
  "a2-seit-present": [
    {
      "type": "write",
      "prompt": "Write a profile for a German language-exchange website: say where you live and work and how long you've done each, how long you've been learning German, and since when you've had your favourite hobby.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses \"seit\" + dative with the present tense for things still going on (\"Ich wohne seit zwei Jahren in...\")",
        "Uses the correct dative after seit (\"seit einem Jahr\", \"seit drei Monaten\", \"seit dem Sommer\")",
        "Includes one finished event with \"vor\" + dative (\"vor fünf Jahren\")",
        "Gives at least four facts about yourself in the first person"
      ],
      "modelAnswer": "Hallo! Ich heiße Priya und komme aus Indien. Ich wohne seit drei Jahren in Frankfurt und arbeite seit einem Jahr als Ingenieurin. Deutsch lerne ich seit zwei Jahren, aber ich spreche noch nicht so gut. Vor fünf Jahren habe ich mit Yoga angefangen, und seit dem Sommer gehe ich auch klettern. Ich suche einen Tandempartner. Schreib mir!",
      "explanation": "German uses the present tense with \"seit\" for anything that is still true: \"Ich wohne seit drei Jahren\", not a past tense. \"Seit\" and \"vor\" take the dative, so plurals add -n (\"seit drei Jahren\", \"vor fünf Jahren\")."
    }
  ],
  "a2-mission-zeitungsmeldung": [
    {
      "type": "write",
      "prompt": "Write a short news item for a local newspaper about something that happened in your town yesterday (an escaped animal, a fire, a lucky find...). Say what happened, where and when, in the right order.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses the Präteritum of sein and haben and the Perfekt or Präteritum of other verbs in a news style",
        "Gives the time and place in the first sentence (\"Am Montagmorgen ...\")",
        "Orders the events with \"zuerst\", \"dann\", \"später\" or \"schließlich\"",
        "Uses precise time phrases (\"gegen 8 Uhr\", \"nach einer Stunde\")"
      ],
      "modelAnswer": "Kuh im Supermarkt\nAm Dienstagmorgen hat eine Kuh in Neustadt für viel Aufregung gesorgt. Das Tier ist gegen 8 Uhr von einem Bauernhof weggelaufen. Zuerst war es auf der Hauptstraße, dann ist es durch die offene Tür in einen Supermarkt gegangen. Die Kunden hatten große Angst. Schließlich hat der Bauer die Kuh nach einer Stunde gefunden. Sie war ruhig und hatte keine Verletzungen.",
      "explanation": "A news item opens with when and where (\"Am Dienstagmorgen\", \"in Neustadt\"). The events follow in order with \"Zuerst\", \"dann\" and \"Schließlich\", each with the verb second; \"war\" and \"hatte\" describe states, and the Perfekt reports the actions."
    }
  ],
  "a2-dative-verbs": [
    {
      "type": "write",
      "prompt": "You spent your first day as a volunteer at a children's library. Write a diary entry: who you helped, what questions you answered, who thanked you, and what you liked.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses dative verbs with a dative object: \"helfen\", \"danken\", \"antworten\", \"gefallen\"",
        "Uses dative articles and endings correctly (\"dem Jungen\", \"der Bibliothekarin\", \"den Kindern\")",
        "Uses dative pronouns (\"mir\", \"ihm\", \"ihr\", \"ihnen\")",
        "Writes in the Perfekt about the day"
      ],
      "modelAnswer": "Liebes Tagebuch, heute war mein erster Tag in der Kinderbibliothek. Am Morgen habe ich der Bibliothekarin geholfen. Dann sind zwei Kinder gekommen und haben viele Fragen gestellt. Ich habe ihnen geantwortet und ihnen ein Buch über Dinosaurier gezeigt. Einem Jungen habe ich eine Geschichte vorgelesen. Am Ende hat er mir gedankt und gesagt: \"Du liest gut!\" Die Arbeit hat mir sehr gefallen.",
      "explanation": "\"Helfen\", \"antworten\", \"danken\" and \"gefallen\" take a dative object where English uses a direct object: \"der Bibliothekarin geholfen\", \"ihnen geantwortet\", \"hat mir gedankt\". The dative plural pronoun is \"ihnen\", and masculine nouns take \"einem\" (\"einem Jungen\")."
    }
  ],
  "a2-gefallen-schmecken-gehoeren": [
    {
      "type": "write",
      "prompt": "Write an online review of a new café in your town: what you ate and drank, what you liked and didn't like, and who the café belongs to.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses \"gefallen\" and \"schmecken\" with the person in the dative (\"Der Kuchen hat mir geschmeckt\")",
        "Makes the thing the subject, so the verb agrees with it (\"Die Stühle gefallen mir nicht\")",
        "Uses \"gehören\" + dative (\"Das Café gehört einer Familie aus...\")",
        "Gives a clear overall opinion or rating"
      ],
      "modelAnswer": "Vier Sterne! Das Café Linde ist neu und gehört zwei Schwestern aus Wien. Ich war am Sonntag mit meinem Freund dort. Der Apfelstrudel hat uns sehr gut geschmeckt, und der Kaffee war auch prima. Die Musik hat mir gut gefallen, aber die Stühle gefallen mir nicht: Sie sind sehr hart. Meinem Freund hat die heiße Schokolade nicht geschmeckt, sie war zu süß. Trotzdem komme ich bald wieder!",
      "explanation": "With \"gefallen\", \"schmecken\" and \"gehören\" the thing is the subject and the person is dative: \"Der Apfelstrudel hat uns geschmeckt\", \"Die Stühle gefallen mir nicht\", \"Das Café gehört zwei Schwestern\". The verb agrees with the thing, so a plural subject needs \"gefallen\"."
    }
  ],
  "a2-two-objects-1": [
    {
      "type": "write",
      "prompt": "Write a short blog post about the presents you gave your family and friends last Christmas or for a birthday: what you gave to whom, and one present you got.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses verbs with two objects: the person in the dative, the thing in the accusative (\"Ich habe meiner Mutter einen Schal geschenkt\")",
        "Uses at least four different dative people (\"meinem Vater\", \"meiner Schwester\", \"den Kindern\")",
        "Uses \"schenken\", \"geben\", \"kaufen\" or \"schicken\" in the Perfekt",
        "Says what someone gave you with a dative pronoun (\"Meine Freundin hat mir ... geschenkt\")"
      ],
      "modelAnswer": "Weihnachten ist vorbei, und hier sind meine Geschenke! Meiner Mutter habe ich einen Schal geschenkt. Meinem Vater habe ich ein Kochbuch gekauft, denn er kocht so gern. Meiner Schwester habe ich ein Spiel gegeben, und den Kindern von meinem Bruder habe ich Süßigkeiten geschickt. Und ich? Meine Freundin hat mir einen Gutschein für ein Konzert geschenkt. Super!",
      "explanation": "With two objects the person is dative (wem?) and the thing accusative (was?): \"Meiner Mutter habe ich einen Schal geschenkt\". Plural datives add -n (\"den Kindern\"), and the pronoun \"mir\" replaces the person who receives something."
    }
  ],
  "a2-dative-expressions": [
    {
      "type": "write",
      "prompt": "You feel ill and can't go to your Saturday German lesson. Write a short email to your private teacher, Herr Wolf: apologise, say how you feel, and suggest another day.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses fixed dative expressions: \"Es tut mir leid\", \"Es geht mir nicht gut\", \"Mir ist schlecht / kalt\"",
        "Uses \"Ihnen\" for the teacher (\"Passt Ihnen ...?\", \"Ich danke Ihnen\")",
        "Suggests another day with a question",
        "Writes in the Sie form with a polite greeting and closing"
      ],
      "modelAnswer": "Lieber Herr Wolf,\nes tut mir leid, aber ich kann am Samstag leider nicht zum Unterricht kommen. Es geht mir seit gestern nicht gut. Mir ist schlecht und mir ist immer kalt, und der Kopf tut mir weh. Der Arzt hat gesagt, ich soll im Bett bleiben. Passt Ihnen vielleicht Mittwoch um 17 Uhr? Ich danke Ihnen für Ihr Verständnis!\nViele Grüße\nSofia Rossi",
      "explanation": "Many everyday expressions use the dative with no English parallel: \"Es tut mir leid\", \"Es geht mir nicht gut\", \"Mir ist schlecht\", \"Der Kopf tut mir weh\". The polite \"Ihnen\" is the dative of \"Sie\" (\"Passt Ihnen...?\", \"Ich danke Ihnen\")."
    }
  ],
  "a2-reflexive-verbs-2": [
    {
      "type": "write",
      "prompt": "You've joined an online club for people who love cooking. Write a short introduction post: say what you're interested in, what you look forward to, what annoys you in the kitchen, and what you're happy about.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses reflexive verbs with fixed prepositions: \"sich interessieren für\", \"sich freuen auf / über\", \"sich ärgern über\"",
        "Uses the accusative after these prepositions (\"für Gerichte\", \"über den Abwasch\", \"auf unser Treffen\")",
        "Uses the right reflexive pronoun (\"ich ... mich\", \"wir ... uns\")",
        "Ends with a greeting or question to the group"
      ],
      "modelAnswer": "Hallo zusammen! Ich bin Mark und koche seit zehn Jahren. Ich interessiere mich vor allem für Gerichte aus Asien. Ich ärgere mich immer über den Abwasch, aber das gehört dazu! Ich freue mich sehr über eure Rezepte hier im Forum. Am Wochenende probiere ich ein Curry aus. Und ich freue mich schon auf unser Kochtreffen im Mai. Wofür interessiert ihr euch?",
      "explanation": "Reflexive verbs often come with a fixed preposition + accusative: \"sich interessieren für\", \"sich ärgern über\", \"sich freuen über\" (something that is here now) and \"sich freuen auf\" (something in the future). The pronoun matches the subject: \"ich ... mich\", \"ihr ... euch\"."
    }
  ],
  "a2-reflexive-reciprocal": [
    {
      "type": "write",
      "prompt": "Write a short story about how two friends or a couple you know met: where they first saw each other, how they got to know each other, and how things are now.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses reciprocal \"sich\" / \"uns\" for each other (\"Sie haben sich kennengelernt\", \"Sie treffen sich\")",
        "Uses reflexive verbs in the Perfekt with \"haben\" (\"sie haben sich verliebt\", \"sie haben sich gestritten\")",
        "Puts the reflexive pronoun right after the conjugated verb, also after a time word (\"Am Anfang haben sie sich...\")",
        "Tells the story in order from the first meeting to now"
      ],
      "modelAnswer": "Meine Eltern haben sich vor dreißig Jahren in einem Zug kennengelernt. Der Zug hatte Verspätung, und sie haben sich zwei Stunden lang unterhalten. Danach haben sie sich jeden Tag geschrieben. Nach drei Monaten haben sie sich verliebt. Am Anfang haben sie sich oft gestritten, denn mein Vater war immer unpünktlich. Heute verstehen sie sich sehr gut und treffen sich jeden Freitag im selben Café.",
      "explanation": "\"Sich\" can mean each other: \"Sie haben sich kennengelernt\", \"sie treffen sich\". Reflexive verbs take \"haben\" in the Perfekt, and the pronoun comes straight after the conjugated verb and subject, even after a time word (\"Danach haben sie sich jeden Tag geschrieben\")."
    }
  ],
  "a2-comparisons-2": [
    {
      "type": "write",
      "prompt": "Write a review for a German city guide website comparing three cafés in your town: which is the cheapest, the cosiest and the best, and which one you like most.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses comparatives with \"als\" (\"Das Café Mond ist billiger als ...\")",
        "Uses superlatives with \"am\" (\"am billigsten\", \"am gemütlichsten\")",
        "Uses the irregular forms \"besser\" / \"am besten\" or \"lieber\" / \"am liebsten\"",
        "Uses comparatives without a second part when the comparison is clear (\"Im Café Sonne ist es ruhiger\")"
      ],
      "modelAnswer": "Ich kenne drei schöne Cafés in Freiburg. Das Café Mond ist billiger als die anderen, aber es ist auch lauter. Im Café Sonne ist es ruhiger, und die Sessel sind bequemer. Am gemütlichsten ist aber das Café Stern. Dort ist der Kaffee am teuersten, aber er schmeckt am besten. Auch der Kuchen ist besser als im Café Mond. Ich gehe am liebsten ins Café Stern.",
      "explanation": "Comparatives add -er + \"als\" (\"billiger als\"), and after a verb the superlative is \"am -sten\" (\"am gemütlichsten\", \"am teuersten\"). \"Gut\" and \"gern\" are irregular: \"besser\", \"am besten\", \"am liebsten\"."
    }
  ],
  "a2-drill-besser-lieber-mehr": [
    {
      "type": "write",
      "prompt": "You and a friend are planning Saturday. Write a short dialogue: compare two or three ideas (cinema, a bike tour, a museum) and agree on one.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses \"lieber\" for preference (\"Ich gehe lieber ins Kino\")",
        "Uses \"besser\" for quality (\"Das Wetter ist morgen besser\")",
        "Uses \"mehr\" for quantity (\"Das kostet mehr\", \"mehr Zeit\")",
        "Uses at least one comparison with \"als\" or \"so ... wie\""
      ],
      "modelAnswer": "Jan: Was machen wir am Samstag? Gehen wir ins Kino?\nEva: Ich mache lieber eine Radtour. Das Wetter soll am Samstag besser sein als heute.\nJan: Aber eine Radtour ist anstrengender als ein Film.\nEva: Ja, aber das Kino kostet mehr, und das Museum ist nicht so interessant wie die Natur.\nJan: Na gut, eine Radtour ist besser für die Gesundheit. Und danach essen wir Pizza!\nEva: Super!",
      "explanation": "\"Lieber\" says what you prefer to do, \"besser\" says something is of higher quality, and \"mehr\" is about amount (\"kostet mehr\"). Comparisons take \"als\" after a comparative and \"so ... wie\" for equality, here in the negative (\"nicht so interessant wie\")."
    }
  ],
  "a2-wechselpraepositionen-1": [
    {
      "type": "write",
      "prompt": "Your German teacher has shown you a picture of a park on a Sunday afternoon. Write a description of the picture: where the people, animals and things are and what they're doing.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses at least five two-way prepositions with the dative for location (\"auf der Wiese\", \"unter dem Baum\", \"neben dem See\")",
        "Uses position verbs: \"stehen\", \"liegen\", \"sitzen\", \"hängen\"",
        "Uses the contractions \"im\" and \"am\" correctly",
        "Describes from one part of the picture to another (\"vorne\", \"hinten\", \"links\", \"rechts\")"
      ],
      "modelAnswer": "Auf dem Bild sieht man einen Park im Sommer. Vorne liegt eine Familie auf einer Decke unter einem Baum. Ein Kind sitzt auf dem Fahrrad, und der Vater steht neben ihm. Links ist ein See. Am Ufer sitzt ein Mann auf einer Bank und liest. Zwischen zwei Bäumen hängt eine Hängematte. Hinten spielen junge Leute im Gras Fußball, und ein Hund liegt hinter dem Tor.",
      "explanation": "Location answers the question wo? with the dative: \"auf einer Decke\", \"unter einem Baum\", \"zwischen zwei Bäumen\", \"hinter dem Tor\". \"Im\" and \"am\" are contractions of \"in dem\" and \"an dem\", and the position verbs \"liegen\", \"sitzen\", \"stehen\" and \"hängen\" describe where things are."
    }
  ],
  "a2-qa-wo-ist-mein-schluessel": [
    {
      "type": "write",
      "prompt": "You're late and can't find your keys or your phone. Write a short dialogue with your flatmate: ask where things are, answer, and tell each other where to put them from now on.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Asks \"Wo ist ...?\" and answers with the dative (\"auf dem Sofa\", \"in der Küche\")",
        "Says where to put things with \"Wohin\" and the accusative (\"Leg ihn auf den Tisch!\", \"in die Schale\")",
        "Uses both an action verb (\"legen\", \"stellen\", \"hängen\") and a position verb (\"liegen\", \"stehen\", \"hängen\")",
        "Uses \"im\", \"am\", \"ins\" or \"ans\" correctly"
      ],
      "modelAnswer": "Max: Ich finde meinen Schlüssel nicht! Wo ist er?\nLea: Vielleicht in der Jacke? Die Jacke hängt an der Tür.\nMax: Nein, da ist er nicht. Und mein Handy?\nLea: Das liegt auf dem Sofa, unter dem Kissen.\nMax: Danke! Ah, und der Schlüssel liegt im Bad!\nLea: Leg ihn doch immer in die Schale neben der Tür. Und häng die Jacke an den Haken!\nMax: Gute Idee!",
      "explanation": "\"Wo?\" asks about location and takes the dative (\"an der Tür\", \"auf dem Sofa\", \"im Bad\"), while putting something somewhere answers \"wohin?\" with the accusative (\"in die Schale\", \"an den Haken\"). \"Legen\" and \"hängen\" describe the action, \"liegen\" and \"hängen\" the position."
    }
  ],
  "a2-adjective-endings-weak-2": [
    {
      "type": "write",
      "prompt": "You've just come back from a weekend in a hotel in Dresden. Write an online review of the hotel: the room, the staff, the breakfast and the location.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses adjectives after der, die, das in the nominative and accusative (\"das große Zimmer\", \"die ganze Altstadt\", \"den letzten Abend\")",
        "Uses -en endings in the dative (\"mit dem frischen Brot\", \"vom kleinen Balkon\")",
        "Uses -en endings in the plural (\"die netten Mitarbeiter\")",
        "Gives an overall opinion with a recommendation"
      ],
      "modelAnswer": "Ein tolles Wochenende im Hotel Elbblick! Das große Zimmer im dritten Stock war sauber und ruhig, und vom kleinen Balkon sieht man die ganze Altstadt. Den letzten Abend haben wir in der gemütlichen Hotelbar verbracht. Die netten Mitarbeiter an der Rezeption haben uns viele Tipps gegeben. Das große Frühstück mit dem frischen Brot war super. Vom zentralen Hotel ist man in fünf Minuten im historischen Zentrum. Wir kommen gern wieder!",
      "explanation": "After der, die, das the adjective takes -e in the five basic singular forms (\"das große Zimmer\", \"das große Frühstück\") and -en everywhere else: in the masculine accusative (\"den letzten Abend\"), the dative (\"vom kleinen Balkon\", \"mit dem frischen Brot\") and the plural (\"die netten Mitarbeiter\")."
    }
  ],
  "a2-pattern-dieser-jeder-welcher": [
    {
      "type": "write",
      "prompt": "You're at a flea market looking for a present for your sister. Write a short dialogue with the seller: ask about several things with dieser and welcher, compare them, and buy one.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses \"dieser / diese / dieses\" + adjective with the right ending (\"diese alte Tasche\", \"diesen blauen Schal\")",
        "Asks with \"welcher / welche / welches\" and answers with the adjective alone (\"Welche? Die rote.\")",
        "Uses accusative endings after der-words (\"Ich nehme den roten Schal\")",
        "Asks about the price and agrees a deal"
      ],
      "modelAnswer": "Ich: Guten Tag! Was kostet diese alte Tasche?\nVerkäuferin: Welche? Die braune oder die rote?\nIch: Die rote.\nVerkäuferin: Zwanzig Euro. Jede alte Tasche hier ist aus Italien.\nIch: Und dieser blaue Schal?\nVerkäuferin: Der kostet fünf Euro.\nIch: Hm, ich nehme den blauen Schal und diese rote Tasche. Geht das für zwanzig Euro?\nVerkäuferin: Na gut, für zwanzig!",
      "explanation": "Der-words (\"dieser\", \"jeder\", \"welcher\") work like \"der\": the adjective after them takes -e or -en (\"diese alte Tasche\", \"jede alte Tasche\", \"den blauen Schal\"). When the noun is clear you can drop it and keep the ending (\"Die rote\")."
    }
  ],
  "a2-adjective-endings-mixed-2": [
    {
      "type": "write",
      "prompt": "You're looking for a room in a shared flat. Write a short ad for an online noticeboard: describe yourself and what kind of room and flatmates you're looking for.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses adjectives with no article and the der-ending (\"ruhiges Zimmer\", \"nette Leute\", \"mit großem Fenster\")",
        "Uses adjectives after ein / kein / mein (\"ein kleines Zimmer\", \"einen festen Job\")",
        "Uses the ad style of short phrases (\"Suche...\", \"ab sofort\")",
        "Gives contact details or a request at the end"
      ],
      "modelAnswer": "Suche ruhiges Zimmer in netter WG in Bremen, ab 1. März!\nIch bin Tom, 26 Jahre alt, und habe einen festen Job als Krankenpfleger. Ich bin ordentlich, koche gern und spiele Gitarre (aber leise!). Ich suche ein helles Zimmer mit großem Fenster und nette Leute mit guter Laune. Einen kleinen Balkon brauche ich nicht. Maximal 450 Euro warm. Schreibt mir bitte über die Website!",
      "explanation": "With no article the adjective carries the der-ending itself: \"ruhiges Zimmer\", \"in netter WG\", \"mit großem Fenster\", \"mit guter Laune\". After \"ein\" it takes -er or -es only where \"ein\" has no ending (\"ein helles Zimmer\"), and -en in the masculine accusative (\"einen festen Job\", \"einen kleinen Balkon\")."
    }
  ],
  "a2-common-words-character": [
    {
      "type": "write",
      "prompt": "A German magazine has a column called \"Mein bester Freund / Meine beste Freundin\". Write a short text describing your best friend: what they look like, what they're like as a person, and why you like them.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses character adjectives such as \"ehrlich\", \"lustig\", \"schüchtern\", \"neugierig\", \"zuverlässig\"",
        "Uses adjectives with endings after ein / mein (\"ein ehrlicher Mensch\", \"meine beste Freundin\", \"einen tollen Humor\")",
        "Uses adjectives after sein with no ending (\"Sie ist sehr hilfsbereit\")",
        "Gives a reason with \"denn\" or an example"
      ],
      "modelAnswer": "Meine beste Freundin heißt Clara. Wir kennen uns seit der Schule. Sie hat lange, dunkle Haare und braune Augen. Clara ist ein ehrlicher und sehr hilfsbereiter Mensch. Am Anfang ist sie ein bisschen schüchtern, aber eigentlich ist sie lustig und hat einen tollen Humor. Sie ist auch sehr neugierig und stellt immer viele Fragen. Ich mag sie, denn ich kann ihr alles erzählen.",
      "explanation": "Before a noun the adjective needs an ending: after \"ein\" in the masculine nominative it's -er (\"ein ehrlicher Mensch\"), in the accusative -en (\"einen tollen Humor\"), and with no article it carries the ending itself (\"lange, dunkle Haare\"). After \"sein\" there is no ending (\"Sie ist schüchtern\")."
    }
  ],
  "a2-subordinate-clauses-2": [
    {
      "type": "write",
      "prompt": "You can't decide whether to accept a job in another city. Write a post for a German advice forum: explain the situation, say what happens if you go and if you stay, and ask for advice.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses \"wenn\" for conditions with the verb at the end (\"Wenn ich nach Hamburg gehe, ...\")",
        "Uses \"ob\" for whether (\"Ich weiß nicht, ob ...\")",
        "Starts at least one sentence with the clause, giving verb-comma-verb (\"Wenn ich bleibe, habe ich ...\")",
        "Uses \"weil\" or \"dass\" at least once"
      ],
      "modelAnswer": "Hallo zusammen, ich brauche euren Rat! Ich habe ein Jobangebot in Hamburg bekommen, aber ich weiß nicht, ob ich es annehmen soll. Wenn ich nach Hamburg gehe, verdiene ich mehr Geld. Aber meine Familie und meine Freunde wohnen hier in Stuttgart. Wenn ich bleibe, habe ich keinen neuen Job, aber ich bin glücklich. Ich glaube, dass ich Angst vor der großen Stadt habe. Was soll ich machen?",
      "explanation": "\"Wenn\" and \"ob\" send the verb to the end of their clause (\"wenn ich nach Hamburg gehe\", \"ob ich es annehmen soll\"). When the clause comes first, the main verb follows straight after the comma: \"Wenn ich bleibe, habe ich ...\"."
    }
  ],
  "a2-indirect-questions": [
    {
      "type": "write",
      "prompt": "You want to do a German course this summer. Write a polite email to a language school in Munich asking for information: dates, prices, levels and accommodation. Use indirect questions.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses indirect questions with the verb at the end (\"Können Sie mir sagen, wann der Kurs beginnt?\")",
        "Uses \"ob\" for a yes/no indirect question (\"Ich möchte wissen, ob ...\")",
        "Gives a short reason with \"weil\" or \"dass\"",
        "Writes in the formal register with \"Sehr geehrte Damen und Herren\" and \"Mit freundlichen Grüßen\""
      ],
      "modelAnswer": "Sehr geehrte Damen und Herren,\nich interessiere mich für einen Deutschkurs im Juli, weil ich im Herbst in München studieren möchte. Können Sie mir sagen, wann die Kurse beginnen und wie viel ein Kurs kostet? Ich möchte auch wissen, ob es einen Kurs für das Niveau A2 gibt. Außerdem habe ich gelesen, dass Sie Zimmer bei Gastfamilien anbieten. Wissen Sie, ob noch ein Zimmer frei ist?\nMit freundlichen Grüßen\nLaura Martín",
      "explanation": "Indirect questions are polite: the question word or \"ob\" starts a subordinate clause and the verb goes to the end (\"wann die Kurse beginnen\", \"ob es einen Kurs ... gibt\"). \"Weil\" and \"dass\" also send the verb to the end."
    }
  ],
  "a2-future-werden": [
    {
      "type": "write",
      "prompt": "It's New Year's Eve. Write a short diary entry with your resolutions for next year and a few predictions: what you will do, what you won't do, and what you think will happen.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses \"werden\" + infinitive for resolutions and promises (\"Ich werde mehr Sport machen\")",
        "Uses \"werden\" for predictions (\"Es wird ein gutes Jahr\", \"Ich werde bestimmt ...\")",
        "Puts the infinitive at the end of the clause",
        "Uses at least one future time expression (\"nächstes Jahr\", \"im Frühling\", \"jeden Tag\")"
      ],
      "modelAnswer": "Liebes Tagebuch, morgen beginnt das neue Jahr. Ich habe drei Vorsätze: Ich werde jeden Morgen joggen, ich werde weniger Schokolade essen und ich werde endlich Spanisch lernen. Ich werde auch nicht mehr so viel am Handy sein. Im Sommer werden meine Freunde und ich nach Portugal fahren. Ich glaube, das wird ein gutes Jahr! Aber wahrscheinlich werde ich im Februar schon wieder Schokolade essen.",
      "explanation": "\"Werden\" + infinitive expresses resolutions, promises and predictions: \"Ich werde jeden Morgen joggen\", \"das wird ein gutes Jahr\". \"Werden\" is conjugated in second place and the infinitive goes to the end, while time words like \"Im Sommer\" push \"werden\" before the subject."
    }
  ],
  "a2-common-words-goals-rules": [
    {
      "type": "write",
      "prompt": "You're in charge of a new shared kitchen at your office. Write a short notice for the wall with the rules: what is allowed, forbidden, possible and necessary, and the goal of the rules.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses rule words: \"erlaubt\", \"verboten\", \"möglich\", \"nötig\" or \"notwendig\"",
        "Uses \"man darf / man muss / man kann\" or infinitive instructions (\"Bitte Geschirr spülen\")",
        "States the goal with \"Unser Ziel ist ...\" or \"damit\" / \"weil\"",
        "Uses a heading and a polite closing"
      ],
      "modelAnswer": "Regeln für unsere Küche\nUnser Ziel: eine saubere Küche für alle!\nKaffee und Tee sind kostenlos. Es ist erlaubt, eigenes Essen in den Kühlschrank zu stellen, aber bitte mit Namen. Rauchen ist in der Küche verboten. Nach dem Essen muss man das Geschirr spülen. Freitags ist es möglich, Kuchen mitzubringen. Es ist nötig, den Kühlschrank jeden Freitag aufzuräumen. Vielen Dank! Ihr Küchenteam",
      "explanation": "Notices state rules impersonally with \"man darf / man muss\" and with adjectives such as \"verboten\", \"möglich\" and \"nötig\". After \"Es ist möglich\" or \"Es ist nötig\" the action follows as \"zu\" + infinitive, which is split in separable verbs (\"mitzubringen\", \"aufzuräumen\")."
    }
  ],
  "a2-imperative-2": [
    {
      "type": "write",
      "prompt": "A German friend loved the dish you cooked last week and wants the recipe. Write the recipe for a simple dish: the ingredients, and the steps as instructions.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses infinitive instructions in the recipe style (\"Zwiebeln schneiden\", \"Wasser kochen\")",
        "Adds a personal tip to your friend with a du imperative softened with \"mal\", \"doch\" or \"bitte\" (\"Probier doch mal ...!\")",
        "Uses the right du imperative forms, including a stem change (\"Nimm ...!\", \"Probier ...!\")",
        "Lists ingredients with quantities"
      ],
      "modelAnswer": "Nudeln mit Tomatensoße (für 2 Personen)\nZutaten: 250 g Nudeln, 1 Zwiebel, 1 Dose Tomaten, Öl, Salz, Pfeffer, Basilikum\nZuerst die Zwiebel klein schneiden und in Öl braten. Dann die Tomaten dazugeben und zehn Minuten kochen. Mit Salz und Pfeffer würzen. Die Nudeln in Salzwasser kochen.\nMein Tipp: Nimm frisches Basilikum, das schmeckt viel besser! Und probier doch mal ein bisschen Chili dazu. Guten Appetit!",
      "explanation": "Recipes give instructions with the infinitive at the end (\"die Zwiebel klein schneiden\", \"die Tomaten dazugeben\"). Personal advice uses the du imperative (\"Nimm\", \"probier\"), and \"doch mal\" makes it sound friendly rather than bossy."
    }
  ],
  "a2-lernen-lehren-studieren": [
    {
      "type": "write",
      "prompt": "Write a short blog post called \"Wie ich Deutsch lerne\": say what you studied or study, how and where you learn German, who teaches you, and give two tips to other learners.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses \"lernen\" for learning and revising, and \"studieren\" only for university",
        "Uses \"lehren\" or \"unterrichten\" for teaching (\"Meine Lehrerin unterrichtet ...\")",
        "Gives tips with du imperatives (\"Hör ...!\", \"Lies ...!\")",
        "Mixes the present and the Perfekt correctly"
      ],
      "modelAnswer": "Wie ich Deutsch lerne\nIch habe in Madrid Informatik studiert. Jetzt arbeite ich und lerne seit einem Jahr Deutsch. Zweimal pro Woche gehe ich zur Volkshochschule. Meine Lehrerin, Frau Hahn, unterrichtet dort seit zwanzig Jahren, und sie erklärt alles sehr gut. Zu Hause lerne ich jeden Tag zehn neue Wörter. Meine Tipps: Hör deutsche Podcasts beim Kochen! Und lies Kinderbücher, denn sie sind einfach und lustig.",
      "explanation": "\"Studieren\" is only for university (\"Ich habe Informatik studiert\"), while \"lernen\" is for learning and revising (\"Ich lerne Deutsch\", \"zehn neue Wörter\"). Teachers \"unterrichten\" or \"lehren\", and the tips use du imperatives, with the stem change in \"lies\"."
    }
  ],
  "a2-pattern-ordering-politely": [
    {
      "type": "write",
      "prompt": "You're in a restaurant in Munich with a friend. Write a short dialogue with the waiter: order drinks, a starter and main courses politely, and ask one question about the menu.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Orders with \"Ich hätte gern\" or \"Ich nehme\" + accusative (\"einen großen Salat\")",
        "Uses adjective endings after ein / einen (\"ein kleines Bier\", \"eine große Apfelschorle\")",
        "Asks a polite question about the food (\"Was können Sie empfehlen?\", \"Ist ... scharf?\")",
        "Uses the waiter's typical phrases (\"Was darf es sein?\", \"Gern\", \"Kommt sofort\")"
      ],
      "modelAnswer": "Kellner: Guten Abend! Was darf es sein?\nAnna: Ich hätte gern eine große Apfelschorle, bitte.\nBen: Und für mich ein kleines Bier.\nKellner: Gern. Und zum Essen?\nAnna: Was können Sie empfehlen?\nKellner: Der Schweinebraten ist heute sehr gut.\nAnna: Dann nehme ich den Schweinebraten mit Knödeln.\nBen: Ich hätte gern einen gemischten Salat als Vorspeise und dann das Schnitzel.\nKellner: Kommt sofort!",
      "explanation": "\"Ich hätte gern\" and \"Ich nehme\" are polite ways to order and take the accusative: \"einen gemischten Salat\", \"eine große Apfelschorle\", \"ein kleines Bier\". \"Was können Sie empfehlen?\" is the classic question to the waiter."
    }
  ],
  "a2-at-the-restaurant-2": [
    {
      "type": "write",
      "prompt": "You had a lovely dinner at a small restaurant last Friday. Write a positive online review: what you ate, how the service was, how you paid and what you tipped.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses the paying vocabulary: \"die Rechnung\", \"zusammen / getrennt bezahlen\", \"mit Karte / bar\", \"das Trinkgeld\"",
        "Uses the Perfekt for what happened and \"war\" for descriptions",
        "Uses at least two adjectives with the right endings (\"eine leckere Suppe\", \"einen guten Wein\")",
        "Gives a rating or recommendation"
      ],
      "modelAnswer": "Fünf Sterne für das Gasthaus Krone! Wir waren am Freitag zu viert dort. Ich habe eine leckere Kartoffelsuppe und danach ein Schnitzel gegessen, alles war frisch und hat super geschmeckt. Der Kellner war sehr freundlich und hat uns einen guten Wein empfohlen. Am Ende haben wir nach der Rechnung gefragt und getrennt bezahlt. Ich habe mit Karte bezahlt und fünf Euro Trinkgeld gegeben. Sehr empfehlenswert!",
      "explanation": "The Perfekt tells what happened (\"haben ... getrennt bezahlt\", \"hat empfohlen\"), and \"war\" describes. Paying phrases such as \"nach der Rechnung fragen\", \"getrennt bezahlen\", \"mit Karte\" and \"Trinkgeld geben\" are essential, and adjectives after \"ein\" take mixed endings (\"eine leckere Kartoffelsuppe\", \"einen guten Wein\")."
    }
  ],
  "a2-survival-hotel": [
    {
      "type": "write",
      "prompt": "You're staying at a hotel and several things are wrong with your room. Write a short, polite email to the reception: say who you are and your room number, describe two or three problems, and ask for help.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Describes problems with \"funktioniert nicht\", \"ist kaputt\" or \"geht nicht\"",
        "Makes polite requests with \"Könnten Sie ...?\" or \"Ich hätte gern ...\"",
        "Gives name, room number and time information",
        "Writes in the formal register with an appropriate greeting and closing"
      ],
      "modelAnswer": "Sehr geehrte Damen und Herren,\nmein Name ist Peter Clark, ich wohne seit gestern in Zimmer 214. Leider gibt es ein paar Probleme. Die Heizung funktioniert nicht, und das Zimmer ist sehr kalt. Außerdem geht das WLAN seit heute Morgen nicht. Im Bad ist auch die Lampe kaputt. Könnten Sie bitte heute jemanden schicken? Ich bin ab 17 Uhr wieder im Hotel.\nMit freundlichen Grüßen\nPeter Clark",
      "explanation": "Problems are described with \"funktioniert nicht\", \"geht nicht\" and \"ist kaputt\". \"Könnten Sie bitte ...?\" makes the request polite, and \"seit gestern\" / \"seit heute Morgen\" with the present tense say how long the problem has existed."
    }
  ],
  "a2-survival-emergencies-lost-things": [
    {
      "type": "write",
      "prompt": "You lost your backpack on the tram yesterday. Write a notice for a lost-and-found website: describe the backpack and what was in it, say when and where you lost it, and offer a reward.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Describes the item with adjective endings (\"ein schwarzer Rucksack\", \"mit einem roten Anhänger\")",
        "Lists the contents with the right case (\"Darin waren ein Laptop, mein Schlüssel ...\")",
        "Says when and where with the Perfekt (\"Ich habe ihn gestern in der Linie 4 verloren\")",
        "Gives contact details and offers a reward (\"Finderlohn\")"
      ],
      "modelAnswer": "Rucksack verloren!\nIch habe gestern gegen 18 Uhr in der Straßenbahn Linie 4 (Richtung Zentrum) meinen Rucksack verloren. Es ist ein schwarzer Rucksack mit einem roten Anhänger. Darin waren ein grauer Laptop, eine blaue Brille und mein Schlüssel. Der Laptop ist für mich sehr wichtig! Wer hat ihn gefunden? Es gibt 50 Euro Finderlohn. Bitte rufen Sie mich an: 0151 234 5678.",
      "explanation": "The item is described with mixed endings after \"ein\" (\"ein schwarzer Rucksack\", \"ein grauer Laptop\") and dative after \"mit\" (\"mit einem roten Anhänger\"). The Perfekt says what happened (\"habe ... verloren\", \"hat ... gefunden\"), and \"Finderlohn\" is the usual word for the reward."
    }
  ],
  "a2-word-web-health": [
    {
      "type": "write",
      "prompt": "Last month you had an accident and hurt yourself. Write a diary entry looking back: what happened, where it hurt, what the doctor said and how you are now.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses health vocabulary: \"sich verletzen\", \"wehtun\", \"gebrochen\", \"die Praxis\", \"das Krankenhaus\"",
        "Says what hurts with the dative (\"Mir tut das Knie weh\")",
        "Uses the Perfekt and Präteritum to tell what happened",
        "Says how you are now with the present and \"seit\" or \"wieder\""
      ],
      "modelAnswer": "Liebes Tagebuch, vor einem Monat bin ich beim Fußball hingefallen und habe mich am Bein verletzt. Das Knie hat sehr wehgetan, und ich konnte nicht mehr laufen. Mein Freund hat mich ins Krankenhaus gebracht. Die Ärztin hat gesagt: \"Zum Glück ist nichts gebrochen, aber Sie müssen sich zwei Wochen ausruhen.\" Seit einer Woche gehe ich wieder ohne Krücken. Heute tut mir das Knie nur noch ein bisschen weh.",
      "explanation": "The story mixes the Perfekt (\"bin hingefallen\", \"habe mich verletzt\", \"hat gebracht\") with \"konnte\" in the Präteritum. Pain uses the dative (\"mir tut das Knie weh\"), and \"seit\" + present shows that the recovery is still going on."
    }
  ],
  "a2-word-web-work": [
    {
      "type": "write",
      "prompt": "You've seen an ad for a summer job in a café in Berlin. Write a short application email: say who you are, what you've studied and worked as, why you want the job, and when you can start.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses work vocabulary: \"die Stelle\", \"sich bewerben\", \"die Erfahrung\", \"arbeiten als\"",
        "Says what you work or worked as with \"als\" and no article (\"Ich habe als Kellner gearbeitet\")",
        "Gives a reason with \"weil\" or \"denn\"",
        "Uses a formal greeting and closing and the Sie form"
      ],
      "modelAnswer": "Sehr geehrte Frau Becker,\nich habe Ihre Anzeige gelesen und möchte mich um die Stelle als Aushilfe im Café bewerben. Ich heiße Lucas, bin 22 Jahre alt und studiere Wirtschaft in Lyon. Letzten Sommer habe ich zwei Monate als Kellner in einem Restaurant gearbeitet, deshalb habe ich schon Erfahrung. Ich möchte diesen Job, weil ich mein Deutsch verbessern will. Ich kann ab dem 1. Juli anfangen.\nMit freundlichen Grüßen\nLucas Moreau",
      "explanation": "\"Als\" + a job takes no article (\"als Kellner\", \"als Aushilfe\"), and \"sich bewerben um\" is the standard phrase for applying. \"Weil\" sends the verb to the end (\"weil ich mein Deutsch verbessern will\"), and the formal frame is \"Sehr geehrte Frau ...\" / \"Mit freundlichen Grüßen\"."
    }
  ],
  "a2-dative-prepositions": [
    {
      "type": "write",
      "prompt": "Write a short post for your class blog called \"Mein Weg zur Arbeit\" (or \"zur Uni\"): describe how you get there every day, who you go with, and what you do after work or university.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses the dative prepositions \"aus\", \"bei\", \"mit\", \"nach\", \"seit\", \"von\" and \"zu\"",
        "Uses the contractions \"zum\", \"zur\" and \"vom\" or \"beim\"",
        "Uses the correct dative articles and endings (\"mit dem Bus\", \"mit meiner Kollegin\")",
        "Uses time words with the verb in second place"
      ],
      "modelAnswer": "Mein Weg zur Arbeit\nJeden Morgen gehe ich um halb acht aus dem Haus. Zuerst gehe ich zu Fuß zur Haltestelle. Dann fahre ich mit dem Bus zum Bahnhof und vom Bahnhof mit der S-Bahn weiter. Seit einem Monat fahre ich mit meiner Kollegin Ines zusammen. Wir arbeiten bei einer Firma in der Stadtmitte. Nach der Arbeit gehe ich manchmal zum Sport, und dann fahre ich nach Hause.",
      "explanation": "\"Aus, bei, mit, nach, seit, von, zu\" always take the dative, even with movement: \"aus dem Haus\", \"mit dem Bus\", \"mit meiner Kollegin\", \"nach der Arbeit\". \"Zum\", \"zur\" and \"vom\" are contractions of \"zu dem\", \"zu der\" and \"von dem\"."
    }
  ],
  "a2-wegen-trotz": [
    {
      "type": "write",
      "prompt": "You organise the summer party of your sports club. Write a short email to all the members: because of the bad weather forecast the party has to move indoors. Explain why and give the new plan.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses \"wegen\" + genitive for the reason (\"wegen des Regens\", \"wegen der Baustelle\")",
        "Uses \"trotz\" + genitive for a contrast (\"trotz des Wetters\")",
        "Uses at least one genitive with a name or noun (\"Peters Garten\", \"die Halle des Vereins\")",
        "Gives the new date, time and place clearly"
      ],
      "modelAnswer": "Liebe Mitglieder,\nleider können wir das Sommerfest am Samstag nicht im Park feiern. Wegen des Regens und wegen der Gewitterwarnung ist es draußen zu gefährlich. Wir feiern deshalb in der Halle des Vereins. Trotz des schlechten Wetters gibt es Grillwürstchen, denn Peters Grill steht unter dem Dach. Wir beginnen wie geplant um 15 Uhr. Bringt bitte gute Laune mit!\nViele Grüße\nEuer Vorstand",
      "explanation": "\"Wegen\" (because of) and \"trotz\" (despite) take the genitive in writing: \"wegen des Regens\", \"wegen der Gewitterwarnung\", \"trotz des schlechten Wetters\". Masculine and neuter nouns add -s or -es (\"des Regens\", \"des Vereins\"), and names take -s with no apostrophe (\"Peters Grill\")."
    }
  ],
  "a2-fix-paragraph-email": [
    {
      "type": "write",
      "prompt": "In a month you're going to stay with a host family in Heidelberg. Write a first email to the family (Familie Braun): introduce yourself, say what you've done to prepare, what you like and don't like, and ask two questions.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Writes in the Sie / Ihnen form with \"Liebe Familie Braun\"",
        "Uses the Perfekt with the right auxiliary (\"Ich habe ... gelernt\", \"Ich bin ... gereist\")",
        "Uses at least one subordinate clause with the verb at the end (\"weil\", \"dass\", \"ob\")",
        "Asks two polite questions, one of them indirect (\"Können Sie mir sagen, ob ...?\")"
      ],
      "modelAnswer": "Liebe Familie Braun,\nich heiße Emily, bin 19 Jahre alt und komme aus Leeds. Ich freue mich sehr, dass ich im August bei Ihnen wohne! Ich habe zwei Jahre Deutsch in der Schule gelernt und bin letztes Jahr schon einmal nach Berlin gereist. Ich esse gern Gemüse, aber kein Fleisch, weil ich Vegetarierin bin. Haben Sie Haustiere? Und können Sie mir sagen, ob es in der Nähe ein Schwimmbad gibt?\nViele Grüße\nEmily",
      "explanation": "The email keeps the Sie form (\"bei Ihnen\", \"Haben Sie ...?\"). \"Lernen\" takes \"haben\" but \"reisen\" takes \"sein\" because it is movement. \"Dass\", \"weil\" and the indirect \"ob\" all send the verb to the end of the clause."
    }
  ],
  "a2-story-cloze-wochenmarkt": [
    {
      "type": "write",
      "prompt": "Write a short story about a Saturday morning at a market where something funny or surprising happened. Say what you bought, who you met and what happened.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses the Perfekt for events and \"war\" / \"hatte\" / \"es gab\" for the background",
        "Uses adjective endings with the things you bought (\"frische Erdbeeren\", \"einen großen Kürbis\")",
        "Orders the events with connectors (\"zuerst\", \"dann\", \"plötzlich\", \"am Ende\")",
        "Uses at least one dative (\"meiner Nachbarin\", \"mit dem Verkäufer\")"
      ],
      "modelAnswer": "Am Samstag war ich auf dem Wochenmarkt. Es war sonnig, und es gab viele Leute. Zuerst habe ich frische Erdbeeren und einen großen Kürbis gekauft. Dann habe ich meine Nachbarin getroffen, und wir haben mit dem Verkäufer über das Wetter geredet. Plötzlich ist ein kleiner Hund gekommen und hat meine Erdbeeren gefressen! Alle haben gelacht. Am Ende hat mir der Verkäufer neue Erdbeeren geschenkt.",
      "explanation": "The background is in the Präteritum (\"war\", \"es gab\"), the events in the Perfekt, including \"ist gekommen\" with sein. Adjectives with no article or after \"ein\" carry the ending (\"frische Erdbeeren\", \"einen großen Kürbis\"), and \"Plötzlich\" marks the turning point with the verb straight after it."
    }
  ],
  "a2-cumulative-circuit-5": [
    {
      "type": "write",
      "prompt": "Write a short text for your town's website comparing what the town was like twenty years ago with what it's like today.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses the Präteritum of sein and haben and \"es gab\" for the past (\"Früher gab es keinen Bahnhof\")",
        "Uses comparatives (\"größer\", \"lauter\", \"teurer als früher\")",
        "Uses adjective endings in descriptions (\"ein kleines Kino\", \"viele neue Häuser\")",
        "Contrasts then and now with \"früher\" and \"heute\""
      ],
      "modelAnswer": "Früher war Tannheim ein ruhiger Ort. Vor zwanzig Jahren gab es nur eine kleine Bäckerei, ein altes Kino und viele Bauernhöfe. Die Leute hatten wenig Geld, aber viel Zeit. Heute ist die Stadt größer und lauter. Es gibt einen modernen Bahnhof, viele neue Häuser und zwei Supermärkte. Die Wohnungen sind teurer als früher, aber das Leben ist bequemer. Nur das alte Kino gibt es immer noch!",
      "explanation": "\"Früher\" goes with the Präteritum (\"war\", \"gab es\", \"hatten\"), \"heute\" with the present, and comparatives show the change (\"größer\", \"teurer als früher\"). Adjectives take mixed endings after \"ein\" (\"ein ruhiger Ort\", \"einen modernen Bahnhof\") and strong endings with no article (\"viele neue Häuser\")."
    }
  ],
  "a2-challenge-dialogue-marathon": [
    {
      "type": "write",
      "prompt": "You arrive at your hotel late at night and there's a problem with your booking. Write a short dialogue between you and the receptionist: explain, react, and find a solution.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses polite phrases and requests (\"Entschuldigung\", \"Könnten Sie ...?\", \"Ich hätte gern ...\")",
        "Uses the Perfekt to explain what you did (\"Ich habe ... gebucht\")",
        "Uses a subordinate clause with \"weil\", \"dass\" or \"ob\"",
        "Uses a comparison or the dative in the solution (\"ein größeres Zimmer\", \"Das passt mir\")"
      ],
      "modelAnswer": "Rezeption: Guten Abend! Wie kann ich Ihnen helfen?\nGast: Guten Abend, ich habe ein Einzelzimmer für zwei Nächte gebucht. Mein Name ist Lee.\nRezeption: Hm, ich finde Ihre Buchung leider nicht. Sind Sie sicher, dass Sie bei uns gebucht haben?\nGast: Ja, hier ist die E-Mail.\nRezeption: Oh, Entschuldigung! Das Einzelzimmer ist leider schon weg. Aber ich kann Ihnen ein größeres Zimmer zum gleichen Preis geben.\nGast: Das passt mir gut. Vielen Dank!",
      "explanation": "The guest explains with the Perfekt (\"ich habe gebucht\"), and the receptionist checks with a \"dass\"-clause that sends the verb to the end (\"dass Sie bei uns gebucht haben\"). The solution uses a comparative with an adjective ending (\"ein größeres Zimmer\") and the dative with \"passen\" (\"Das passt mir\")."
    }
  ],
  "a2-challenge-berlin-2": [
    {
      "type": "write",
      "prompt": "Imagine your wallet was stolen on your second day in a new city. Write a diary entry about that day: what happened, what you did at the police station, and someone who helped you.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses the Perfekt with \"haben\" and \"sein\" and the Präteritum of sein, haben and the modals",
        "Uses at least one subordinate clause (\"als\", \"weil\", \"dass\")",
        "Uses the dative after verbs and prepositions (\"Er hat mir ... geschenkt\", \"aus dem Café\")",
        "Ends with a feeling or reflection about the day"
      ],
      "modelAnswer": "Liebes Tagebuch, heute war ein schrecklicher Tag! Als ich in der U-Bahn war, hat jemand mein Portemonnaie gestohlen. Ich hatte kein Geld und keine Fahrkarte mehr. Ich bin sofort zur Polizei gegangen, aber ich musste eine Stunde warten. Der Polizist war sehr nett und hat alles aufgeschrieben. Ein Mann aus dem Café gegenüber hat mir einen Kaffee geschenkt, weil ich so traurig war. Ich finde, Berlin ist trotzdem toll!",
      "explanation": "The diary mixes the Perfekt for events (\"hat gestohlen\", \"bin gegangen\") with the Präteritum of \"sein\", \"haben\" and the modals (\"war\", \"hatte\", \"musste\"). \"Als\" introduces a single moment in the past and \"weil\" a reason, both with the verb at the end, and \"helfen\" or \"schenken\" take the person in the dative (\"hat mir einen Kaffee geschenkt\")."
    }
  ],
  "a2-challenge-clauses-future-comparisons": [
    {
      "type": "write",
      "prompt": "A German online magazine asks its readers: ‘Where will you live in ten years: in a big city or in the countryside?’ Write a short opinion post with your answer and your reasons.",
      "minWords": 40,
      "maxWords": 90,
      "rubric": [
        "Uses \"werden\" + infinitive for the future (\"In zehn Jahren werde ich ... wohnen\")",
        "Gives reasons and opinions with \"weil\" and \"dass\" (verb at the end)",
        "Uses a condition with \"wenn\"",
        "Compares the two options with comparatives or superlatives"
      ],
      "modelAnswer": "In zehn Jahren werde ich bestimmt auf dem Land wohnen. Jetzt lebe ich in Köln, weil ich hier studiere. Die Stadt ist interessanter als ein Dorf, aber sie ist auch lauter und teurer. Ich glaube, dass das Leben auf dem Land gesünder ist. Wenn ich Kinder habe, möchte ich einen Garten und mehr Ruhe. Am wichtigsten ist für mich aber eine gute Verbindung in die Stadt. Ich werde also nicht zu weit wegziehen.",
      "explanation": "\"Werden\" + infinitive makes the prediction (\"werde ich wohnen\", \"werde ... wegziehen\"). \"Weil\", \"dass\" and \"wenn\" send the verb to the end, and comparatives (\"interessanter als\", \"gesünder\") and a superlative (\"am wichtigsten\") weigh up the options."
    }
  ]
};
