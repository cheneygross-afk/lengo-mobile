// Synced from cheneygross-afk/lengo:src/lib/lessons/de-b2-writing.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { UnitWriting } from "./unitWriting";

// Extra writing tasks for this level's units, so every unit asks the learner to
// write at least three times: keyed by the lesson each is added to (see
// unitWriting.ts). Marked by the AI writing feedback like every writing task.
export const DE_B2_WRITING: UnitWriting = {
  "b2-pattern-wenn-ich-das-gewusst-haette": [
    {
      "type": "write",
      "prompt": "Write a diary entry about a day when everything went wrong because you didn't know something in time: a cancelled train, a closed shop, a changed meeting room. Say what happened and what you would have done differently if you had known.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Tells what really happened in the Perfekt or Präteritum (\"ich bin ... gefahren\", \"der Laden war zu\").",
        "Uses at least three unreal past conditions with \"Wenn ich das gewusst hätte, ...\" and \"hätte\" / \"wäre\" + participle in the main clause.",
        "Chooses \"wäre\" for movement or change of state (\"wäre ich zu Hause geblieben\") and \"hätte\" for other verbs (\"hätte ich angerufen\").",
        "Ends with a short reflection on the day."
      ],
      "modelAnswer": "Montag, 14. März\n\nWas für ein Tag! Heute Morgen bin ich um halb sieben aufgestanden und zum Bahnhof gelaufen, aber mein Zug nach Köln ist ausgefallen. Niemand hatte mir Bescheid gesagt. Wenn ich das gewusst hätte, wäre ich mit dem Auto gefahren.\n\nAls ich endlich im Büro ankam, war die Besprechung schon vorbei. Sie hatte im dritten Stock stattgefunden, nicht im Erdgeschoss wie sonst. Wenn ich die E-Mail gelesen hätte, hätte ich den richtigen Raum gefunden.\n\nAm Abend wollte ich noch Brot kaufen, aber die Bäckerei war wegen Krankheit geschlossen. Wenn ich das gewusst hätte, wäre ich gar nicht erst hingegangen und hätte mir den Weg im Regen gespart.\n\nMorgen schaue ich zuerst in die App und dann in mein Postfach!",
      "explanation": "The real events are in the indicative (\"ist ausgefallen\", \"war vorbei\", \"war geschlossen\"), while the alternatives repeat the frame \"Wenn ich das gewusst hätte\" with the verb at the end. \"Fahren\" and \"hingehen\" take \"wäre\" because they express movement, while \"finden\" and \"sich sparen\" take \"hätte\"."
    }
  ],
  "b2-qa-was-haettest-du-gemacht": [
    {
      "type": "write",
      "prompt": "In an online forum, someone writes: ‘My best friend asked me to lend her 2,000 euros. I said no, and now she isn't speaking to me. What would you have done in my place?’ Write a reply giving your opinion.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Answers the question with \"An deiner Stelle hätte ich ... / wäre ich ...\".",
        "Uses at least one unreal past condition with \"wenn\" or with the verb first (\"Hätte sie mir alles erklärt, ...\").",
        "Includes a mixed conditional with a present result (\"... wärt ihr jetzt noch befreundet\", \"... hättest du jetzt ...\").",
        "Asks a follow-up question or gives advice for the future."
      ],
      "modelAnswer": "Hallo Jule,\n\nich verstehe dich gut, das ist eine schwierige Situation. An deiner Stelle hätte ich auch nicht sofort Ja gesagt, denn 2.000 Euro sind viel Geld. Allerdings hätte ich ihr in Ruhe erklärt, warum ich zögere, und sie gefragt, wofür sie das Geld braucht. Vielleicht wäre ich dann sogar zu ihrer Bank mitgegangen.\n\nHätte sie mir ihre Lage genau beschrieben, hätte ich ihr vielleicht einen kleineren Betrag geliehen. Und wenn ihr ehrlich miteinander gesprochen hättet, wärt ihr jetzt bestimmt nicht so zerstritten.\n\nMein Tipp: Schreib ihr eine kurze Nachricht und schlag ein Treffen vor. Was hat sie dir denn genau gesagt, als du abgelehnt hast?\n\nViele Grüße\nTarek",
      "explanation": "\"An deiner Stelle hätte ich ... gesagt / wäre ich ... mitgegangen\" answers the forum question directly, with \"wäre\" for the movement verb \"mitgehen\". The verb-first clause \"Hätte sie mir ... beschrieben\" replaces \"wenn\", and the mixed conditional \"wenn ihr ... gesprochen hättet, wärt ihr jetzt ...\" links a past condition to a present result."
    }
  ],
  "b2-contrast-solltest-haettest-sollen": [
    {
      "type": "write",
      "prompt": "You missed the deadline for an important report at work and didn't tell your manager in advance. Write a formal email to her: apologise, admit what you should have done, explain what you could have done differently, and say what she should do now if she needs the figures urgently.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Admits mistakes with \"hätte\" + double infinitive (\"Ich hätte Sie früher informieren sollen\").",
        "Says what would have been possible with \"hätte ... können\" (\"Ich hätte einen Kollegen um Hilfe bitten können\").",
        "Contrasts past regret with present advice using \"sollten\" / \"könnten\" (\"Sie sollten ... \", \"Falls Sie ... brauchen, könnten Sie ...\").",
        "Uses a formal register with \"Sie\", a formal greeting and closing."
      ],
      "modelAnswer": "Sehr geehrte Frau Dr. Brandt,\n\nleider habe ich den Quartalsbericht gestern nicht wie vereinbart abgegeben. Dafür möchte ich mich aufrichtig entschuldigen.\n\nIch hätte Sie schon letzte Woche informieren sollen, als ich gemerkt habe, dass die Zahlen aus dem Vertrieb fehlen. Außerdem hätte ich Herrn Wolf um Hilfe bitten können, denn er kennt die Daten sehr gut. Stattdessen habe ich zu lange allein daran gearbeitet.\n\nDer Bericht wird morgen bis 12 Uhr fertig sein. Falls Sie die wichtigsten Zahlen schon heute brauchen, sollten Sie am besten Frau Kaya anrufen, die die Tabellen vorbereitet hat. Ich schicke Ihnen außerdem heute Abend eine kurze Zusammenfassung.\n\nEs tut mir wirklich leid.\n\nMit freundlichen Grüßen\nJonas Becker",
      "explanation": "The regrets use \"hätte\" + infinitive + \"sollen\" / \"können\" with both infinitives at the end (\"hätte ... informieren sollen\", \"hätte ... bitten können\"). Present advice uses \"sollten\" instead, which shows the contrast between past reproach and what to do now; \"Sie\", \"Sehr geehrte\" and \"Mit freundlichen Grüßen\" keep the register formal."
    }
  ],
  "b2-story-gaps-die-verpasste-hochzeit": [
    {
      "type": "write",
      "prompt": "Write a short story about someone who missed an important family event, such as a wedding, a birthday or a funeral. Tell what happened, what other people reproached them for, and what they regretted afterwards.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Tells the story in the Präteritum (\"er verschlief\", \"der Zug fuhr ab\").",
        "Reports reproaches from other people with \"du hättest ... sollen / können\".",
        "Expresses the character's regrets with \"hätte\" + double infinitive, including \"nicht ... müssen\" or \"nicht ... sollen\".",
        "Uses at least one unreal past condition with \"wenn\" or \"wäre\"."
      ],
      "modelAnswer": "Am Morgen der Hochzeit seiner Schwester wachte Paul in einem Hotel in Leipzig auf und sah auf die Uhr: halb elf. Die Trauung hatte schon um zehn begonnen. Er war am Abend zu lange mit alten Freunden unterwegs gewesen und hatte vergessen, den Wecker zu stellen.\n\nAls er endlich in der Kirche ankam, standen alle schon draußen. Seine Mutter sah ihn nur an und sagte: „Du hättest gestern früher ins Bett gehen sollen.“ Sein Vater meinte, er hätte wenigstens anrufen können.\n\nAm Abend saß Paul allein an der Bar. Er hätte nicht so viel trinken sollen, und er hätte den Wecker zweimal stellen müssen. Wenn er pünktlich gewesen wäre, hätte er die Ringe überreicht. Jetzt hatte das sein Cousin gemacht.",
      "explanation": "The narrative is in the Präteritum, and the reproaches (\"Du hättest ... gehen sollen\", \"hätte ... anrufen können\") and Paul's regrets (\"hätte nicht ... trinken sollen\", \"hätte ... stellen müssen\") all put two infinitives at the end. \"Wenn er pünktlich gewesen wäre\" uses \"wäre\" because \"sein\" forms its past with \"sein\"."
    }
  ],
  "b2-pattern-er-sagt-er-sei": [
    {
      "type": "write",
      "prompt": "You work at a hotel reception. Before you go home, write a note for the colleague on the next shift, passing on what three guests told you during the day: complaints, requests and plans.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Reports each guest's statement with \"sagt / meint, er / sie ...\" and Konjunktiv I (\"sei\", \"habe\", \"komme\", \"müsse\").",
        "Shifts the person correctly (\"ich\" → \"er / sie\", \"mein\" → \"sein / ihr\").",
        "Uses at least one \"dass\"-clause with Konjunktiv I and the verb at the end.",
        "Ends with what the colleague should do, in the indicative."
      ],
      "modelAnswer": "Hallo Sabine,\n\nhier kurz die Infos von heute:\n\nFrau Lindner (Zimmer 214) sagt, die Heizung in ihrem Zimmer sei kaputt und es sei sehr kalt. Sie habe schon zweimal angerufen. Der Techniker kommt morgen um acht.\n\nHerr Okafor (Zimmer 108) meint, er komme heute erst gegen Mitternacht zurück, weil er noch einen Termin in Frankfurt habe. Er müsse aber morgen früh um sechs ein Taxi zum Flughafen haben.\n\nDie Familie aus Zimmer 305 hat erzählt, dass ihr Sohn Geburtstag habe. Die Mutter sagt, sie wolle ihn mit einem Kuchen beim Frühstück überraschen.\n\nKannst du bitte das Taxi bestellen und mit der Küche sprechen?\n\nDanke und einen ruhigen Abend!\nMarc",
      "explanation": "Each statement is reported in Konjunktiv I (\"sei\", \"habe\", \"komme\", \"müsse\", \"wolle\"), which shows that these are the guests' words. The person shifts from \"ich\" and \"mein\" to \"er / sie\" and \"ihr\", and the final request to the colleague is in the indicative because it is the writer's own words."
    }
  ],
  "b2-reporting-verbs": [
    {
      "type": "write",
      "prompt": "A famous football coach gave a press conference after his team lost an important match. Write a short article for a sports website reporting what he claimed, stressed, admitted and denied.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses at least four different reporting verbs (\"behaupten\", \"betonen\", \"zugeben\", \"bestreiten\", \"versichern\").",
        "Reports statements in Konjunktiv I (\"er sei\", \"die Mannschaft habe\").",
        "Uses at least one reporting verb with a zu-infinitive (\"Er bestritt, Fehler gemacht zu haben\").",
        "Keeps a neutral, journalistic register."
      ],
      "modelAnswer": "Trainer Weber: „Die Mannschaft hat gekämpft“\n\nNach der 0:3-Niederlage gegen Bremen stellte sich Trainer Frank Weber am Samstagabend den Fragen der Journalisten. Er behauptete, seine Mannschaft sei in der ersten Halbzeit klar besser gewesen. Der Schiedsrichter habe jedoch einen klaren Elfmeter nicht gegeben.\n\nWeber betonte, die Spieler hätten bis zur letzten Minute gekämpft. Er gab allerdings zu, dass die Abwehr nach der Pause zu unkonzentriert gewesen sei. Vorwürfe, er habe die falsche Aufstellung gewählt, wies er zurück. Er bestritt außerdem, Streit mit dem Kapitän gehabt zu haben.\n\nZum Schluss versicherte der Trainer, das Team werde sich am Mittwoch im Pokal anders präsentieren. Über seine Zukunft im Verein wollte er nicht sprechen.",
      "explanation": "Each reporting verb shows what the coach was doing: claiming (\"behauptete\"), stressing (\"betonte\"), admitting (\"gab zu\"), denying (\"bestritt\") and assuring (\"versicherte\"). The content is in Konjunktiv I (\"sei gewesen\", \"habe gewählt\", \"werde präsentieren\"), with \"hätten\" replacing \"haben\", which would look like the indicative, and \"bestreiten\" takes a zu-infinitive."
    }
  ],
  "b2-transformations-sprachnachrichten": [
    {
      "type": "write",
      "prompt": "While your flatmate was away for the weekend, three people left voicemails on the landline: the landlord, a dentist's office and your flatmate's grandmother. Write a note to leave on the kitchen table, passing on the messages.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Reports statements with Konjunktiv I or the substitute forms (\"sie sei\", \"er komme\").",
        "Reports yes/no questions with \"ob\" and W-questions with the question word, with the verb at the end.",
        "Reports requests and commands with \"sollen\" (\"du sollst / solltest zurückrufen\") or \"bitten\".",
        "Shifts person and time words correctly (\"morgen\" → \"am Montag\", \"ich\" → \"er / sie\")."
      ],
      "modelAnswer": "Hallo Mia,\n\nwillkommen zurück! Am Wochenende hast du drei Nachrichten bekommen:\n\n1. Herr Krüger, der Vermieter, hat angerufen. Er sagt, der Handwerker komme am Dienstag um neun, um das Fenster zu reparieren. Er fragt, ob jemand von uns zu Hause sei. Du sollst ihn bis Montagabend zurückrufen.\n\n2. Die Zahnarztpraxis hat gefragt, wann du einen neuen Termin möchtest, weil Dr. Ahmadi am Donnerstag krank sei. Sie bitten dich, online einen Termin zu buchen.\n\n3. Deine Oma hat sich gemeldet. Sie wollte wissen, ob du am Sonntag zum Mittagessen kommst und was du mitbringen möchtest. Du sollst sie unbedingt heute noch anrufen!\n\nBis später,\nLukas",
      "explanation": "Statements are in Konjunktiv I (\"komme\", \"sei\"), questions use \"ob\" and \"wann\" / \"was\" with the verb at the end, and requests are reported with \"sollen\" or \"bitten ... zu\". In an informal note, the indicative after \"wissen, ob\" (\"ob du ... kommst\") is also natural."
    }
  ],
  "b2-circuit-laut-zufolge-angeblich": [
    {
      "type": "write",
      "prompt": "Write a short news report for a local radio station's website about an incident in your town: a fire, an accident or a power cut. Report what the police, the fire service and witnesses said.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Attributes information with at least three news phrases (\"laut Polizei\", \"dem Bericht zufolge\", \"nach Angaben der Feuerwehr\", \"wie ... mitteilte\").",
        "Reports statements in Konjunktiv I or the substitute form.",
        "Marks unconfirmed information with \"angeblich\" or \"soll\".",
        "Uses a neutral news register in the Präteritum or Perfekt."
      ],
      "modelAnswer": "Brand in Lagerhalle: Keine Verletzten\n\nIn einer Lagerhalle im Gewerbegebiet Nord ist am Dienstagabend ein Feuer ausgebrochen. Laut Polizei wurde niemand verletzt. Nach Angaben der Feuerwehr waren rund 60 Einsatzkräfte vor Ort. Der Brand sei gegen 23 Uhr unter Kontrolle gewesen.\n\nWie ein Sprecher der Stadt mitteilte, mussten die Anwohner ihre Fenster wegen des starken Rauchs geschlossen halten. Inzwischen bestehe aber keine Gefahr mehr.\n\nDie Ursache ist noch unklar. Einem Zeugen zufolge soll es kurz vor dem Feuer einen lauten Knall gegeben haben. Angeblich wurden in der Halle Farben und Lacke gelagert. Die Polizei bittet weitere Zeugen, sich zu melden. Den Schaden schätzt sie auf mehrere hunderttausend Euro.",
      "explanation": "The sources are named with typical news phrases: \"laut Polizei\" (dative or no article), \"nach Angaben der Feuerwehr\", \"wie ein Sprecher mitteilte\" and \"einem Zeugen zufolge\" with the dative before \"zufolge\". Statements are in Konjunktiv I (\"sei gewesen\", \"bestehe\"), and \"soll ... gegeben haben\" and \"angeblich\" mark information that hasn't been confirmed."
    }
  ],
  "b2-circuit-schon-erledigt": [
    {
      "type": "write",
      "prompt": "You are organising your company's summer party, which takes place next Friday. Write a short progress report for your team: say what is already done, what has been done recently, and what still needs to be done.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Describes finished results with the Zustandspassiv (\"Der Saal ist gebucht\", \"Die Einladungen sind verschickt\").",
        "Tells the Zustandspassiv apart from the Perfekt passive at least once (\"ist repariert worden\").",
        "Says what still has to be done with \"muss noch ... werden\" or \"ist noch zu ...\".",
        "Is organised clearly, for example with short paragraphs or a list."
      ],
      "modelAnswer": "Sommerfest am 21. Juni – Stand der Vorbereitungen\n\nLiebe Kolleginnen und Kollegen,\n\ndie meisten Aufgaben sind schon erledigt. Der Garten des Restaurants „Am See“ ist für 80 Personen reserviert, und die Einladungen sind seit Montag verschickt. Auch die Band ist gebucht, und der Vertrag ist unterschrieben.\n\nGestern ist außerdem die Musikanlage im Gemeinschaftsraum repariert worden, sodass sie jetzt wieder benutzt werden kann. Die Getränke sind bestellt, aber noch nicht bezahlt.\n\nFolgendes muss noch erledigt werden:\n- Das Buffet muss noch mit dem Restaurant abgestimmt werden.\n- Die Rechnung für die Getränke ist bis Mittwoch zu bezahlen.\n- Für die Tombola sind noch Preise zu besorgen.\n\nWer kann helfen? Bitte meldet euch bis Dienstag bei mir.\n\nViele Grüße\nNadine",
      "explanation": "The Zustandspassiv (\"ist reserviert\", \"sind verschickt\", \"ist unterschrieben\") describes results that are already in place, whereas \"ist ... repariert worden\" reports the action of repairing as an event. What remains is expressed with \"muss noch ... werden\" and \"ist / sind ... zu\", which both mean that something has to be done."
    }
  ],
  "b2-passive-alternatives-2": [
    {
      "type": "write",
      "prompt": "Write an online review of a product you bought recently, for example a backpack, a coffee machine or a folding bike. Describe what it can and can't do and how it was delivered, and give a recommendation.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses at least two adjectives in \"-bar\", \"-lich\" or \"-fähig\" (\"waschbar\", \"verstellbar\", \"unverständlich\").",
        "Uses the reflexive middle (\"Der Rucksack trägt sich bequem\", \"Das Fach öffnet sich leicht\") or \"sich lassen\".",
        "Uses the bekommen-passive at least once (\"Ich habe ... geliefert bekommen\").",
        "Ends with a clear verdict or recommendation."
      ],
      "modelAnswer": "Praktisch, aber nicht perfekt – 4 von 5 Sternen\n\nIch habe den Rucksack „Urban 25“ vor drei Wochen bestellt und ihn schon nach zwei Tagen geliefert bekommen. Der erste Eindruck war sehr gut: Er sieht schick aus und ist trotzdem robust.\n\nDie Träger sind verstellbar und gut gepolstert, deshalb trägt sich der Rucksack auch mit Laptop sehr bequem. Das Material ist wasserabweisend und bei 30 Grad waschbar. Das Hauptfach öffnet sich leicht, und alles ist schnell erreichbar.\n\nNicht so gut: Die Anleitung für den Regenschutz ist fast unverständlich, und das kleine Seitenfach lässt sich nur schwer schließen. Außerdem ist der Rucksack nicht reparaturfähig, wenn der Reißverschluss kaputtgeht.\n\nFazit: Für den Alltag in der Stadt kann ich ihn empfehlen, für lange Wanderungen eher nicht.",
      "explanation": "Adjectives like \"verstellbar\", \"waschbar\", \"erreichbar\", \"unverständlich\" and \"reparaturfähig\" express what can or cannot be done without a passive. \"Trägt sich bequem\" and \"öffnet sich leicht\" are the reflexive middle, \"lässt sich nur schwer schließen\" expresses possibility, and \"geliefert bekommen\" is the bekommen-passive with the receiver as subject."
    }
  ],
  "b2-talk-about-you-hausregeln": [
    {
      "type": "write",
      "prompt": "You let your flat to holiday guests. Write the house rules (Hausordnung) that you leave on the kitchen table: what has to be done, what is not allowed and what guests may do.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Gives obligations with \"sein + zu\" (\"Der Müll ist zu trennen\") or \"muss ... werden\".",
        "States prohibitions and permissions formally (\"ist nicht gestattet\", \"ist erlaubt\", \"darf nicht\").",
        "Uses \"man\" or \"sich lassen\" for general information (\"Die Heizung lässt sich ... regeln\").",
        "Uses a polite, neutral register suitable for a notice."
      ],
      "modelAnswer": "Herzlich willkommen in unserer Wohnung!\n\nDamit sich alle wohlfühlen, bitten wir Sie, folgende Regeln zu beachten:\n\n- Rauchen ist in der ganzen Wohnung nicht gestattet. Auf dem Balkon ist es erlaubt.\n- Zwischen 22 und 7 Uhr ist Ruhe zu halten, denn die Wände sind dünn.\n- Der Müll ist zu trennen. Die Tonnen befinden sich im Hof.\n- Haustiere dürfen leider nicht mitgebracht werden.\n- Die Heizung lässt sich mit dem Regler im Flur einstellen. Bitte lassen Sie die Fenster nicht gekippt, wenn die Heizung läuft.\n- Handtücher und Bettwäsche können Sie gern benutzen. Das Geschirr ist vor der Abreise zu spülen.\n- Der Schlüssel ist am Abreisetag bis 11 Uhr in den Briefkasten zu werfen.\n\nVielen Dank und einen schönen Aufenthalt!\nFamilie Huber",
      "explanation": "Obligations are written with \"sein + zu\" (\"ist Ruhe zu halten\", \"ist zu trennen\", \"ist ... zu werfen\"), the typical form for notices. Prohibitions and permissions use \"ist nicht gestattet\", \"ist erlaubt\" and \"dürfen nicht mitgebracht werden\", and \"lässt sich ... einstellen\" says what is possible without addressing anyone directly."
    }
  ],
  "b2-qa-was-ist-zu-tun": [
    {
      "type": "write",
      "prompt": "A friend from abroad is moving to Germany next month and asks you how to register her new address (Anmeldung). Write her an informal email explaining what she has to bring, what has to be done and what can be done online.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Explains obligations with \"sein + zu\" or \"muss ... werden\" (\"Das Formular ist auszufüllen\").",
        "Says what is possible with \"sich lassen\" or \"man kann\" (\"Der Termin lässt sich online buchen\").",
        "Uses the Zustandspassiv at least once (\"Wenn alles ausgefüllt ist, ...\").",
        "Keeps an informal tone with \"du\" and a friendly opening and closing."
      ],
      "modelAnswer": "Liebe Ana,\n\nschön, dass du bald kommst! Die Anmeldung ist zum Glück nicht so kompliziert.\n\nDu musst dich innerhalb von zwei Wochen nach dem Umzug beim Bürgeramt anmelden. Einen Termin bekommt man am schnellsten online, er lässt sich aber auch telefonisch vereinbaren. Mitzubringen sind dein Pass, das Anmeldeformular und die Wohnungsgeberbestätigung. Die muss von deinem Vermieter unterschrieben werden, also frag ihn rechtzeitig danach!\n\nDas Formular kann man im Internet herunterladen. Es ist vorher auszufüllen, sonst dauert es länger. Wenn alles ausgefüllt und unterschrieben ist, geht es ganz schnell. Du bekommst dann sofort eine Bestätigung.\n\nWenn du Hilfe brauchst, komme ich gern mit.\n\nLiebe Grüße\nKatrin",
      "explanation": "Obligations appear as \"sind mitzubringen\", \"ist auszufüllen\" and \"muss ... unterschrieben werden\", while possibility is expressed with \"lässt sich ... vereinbaren\" and \"kann man ... herunterladen\". \"Wenn alles ausgefüllt und unterschrieben ist\" is the Zustandspassiv, describing the finished state of the form."
    }
  ],
  "b2-thematic-review-die-stillgelegte-zeche": [
    {
      "type": "write",
      "prompt": "Write a short entry for a travel blog about a visit to a former industrial site that is now used for something else, for example a mine, a factory or a harbour turned into a museum or a park.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses at least three extended participle attributes with their own additions (\"die 1986 stillgelegte Zeche\", \"der von Künstlern gestaltete Park\").",
        "Uses both Partizip II (completed or passive) and Partizip I (ongoing or active) as attributes (\"die rostenden Maschinen\").",
        "Gives the participles the correct adjective endings.",
        "Describes the place and gives a personal impression."
      ],
      "modelAnswer": "Von der Zeche zum Kulturzentrum\n\nGestern war ich auf dem Gelände der 1986 stillgelegten Zeche Zollverein in Essen. Wo früher Tausende Bergleute arbeiteten, findet man heute ein Museum, Restaurants und viel Grün.\n\nAm meisten beeindruckt hat mich die riesige, aus Stahl gebaute Kohlenwäsche. Über eine lange, orange beleuchtete Rolltreppe fährt man hinauf ins Ruhr Museum. Dort erzählen alte Fotos und originale Werkzeuge vom harten Leben der unter Tage arbeitenden Männer.\n\nDraußen kann man durch den von Birken und Gras überwachsenen Park spazieren. Zwischen den langsam rostenden Maschinen spielen Kinder, und auf der Kokerei läuft man im Winter sogar Schlittschuh.\n\nMein Tipp: Nehmt euch einen ganzen Tag Zeit und bleibt bis zum Abend, wenn die Anlage beleuchtet ist!",
      "explanation": "Partizip II attributes describe completed or passive actions (\"der 1986 stillgelegten Zeche\", \"die aus Stahl gebaute Kohlenwäsche\", \"den ... überwachsenen Park\"), while Partizip I describes ongoing activity (\"der unter Tage arbeitenden Männer\", \"den langsam rostenden Maschinen\"). The additions stand between the article and the participle, and the participle takes the normal adjective ending."
    }
  ],
  "b2-partizipialattribute-2": [
    {
      "type": "write",
      "prompt": "You are going on holiday for three weeks and a colleague will take over your project. Write a handover note explaining the tasks that have been completed, the tasks still to be done and the documents she will need.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses the gerundive zu + Partizip I at least twice (\"die noch zu erledigenden Aufgaben\", \"die bis Freitag zu prüfenden Angebote\").",
        "Uses at least two extended Partizip II attributes (\"die bereits unterschriebenen Verträge\").",
        "Includes at least one stacked attribute with an adjective and a participle phrase.",
        "Is organised clearly and stays in a neutral working register."
      ],
      "modelAnswer": "Übergabe Projekt „Neue Website“\n\nHallo Lea,\n\nvielen Dank, dass du das Projekt während meines Urlaubs übernimmst. Hier der aktuelle Stand:\n\nErledigt:\nDie mit der Agentur vereinbarten Texte sind fertig, und die bereits unterschriebenen Verträge liegen im blauen Ordner. Auch die von der Geschäftsführung gewünschten Änderungen am Logo sind umgesetzt.\n\nNoch zu tun:\nDie bis Freitag zu prüfenden Angebote für das Hosting findest du im Projektordner. Außerdem gibt es noch einige zu übersetzende Seiten, vor allem die neue, im März geplante Produktseite.\n\nAlle noch zu erledigenden Aufgaben habe ich in der beigefügten Liste markiert. Bei Fragen hilft dir Herr Yilmaz, der das Projekt von Anfang an begleitet.\n\nDanke und bis in drei Wochen!\nSven",
      "explanation": "The gerundive (\"die bis Freitag zu prüfenden Angebote\", \"zu übersetzende Seiten\", \"alle noch zu erledigenden Aufgaben\") expresses what must still be done, while Partizip II attributes such as \"die bereits unterschriebenen Verträge\" describe completed results. \"Die neue, im März geplante Produktseite\" stacks an adjective and a participle phrase before the noun, with the same ending on both."
    }
  ],
  "b2-participle-adverbs-clauses": [
    {
      "type": "write",
      "prompt": "Write a short anecdote about arriving late at night in a city you didn't know: at a station, an airport or a hotel. Tell what happened and how people reacted.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses at least two Partizip I forms as adverbs of manner (\"lächelnd\", \"zögernd\", \"gähnend\").",
        "Uses at least one short participle clause, separated by a comma (\"Am Bahnhof angekommen, ...\").",
        "Uses at least two nominalised participles with the right endings (\"die Reisenden\", \"ein Angestellter\").",
        "Tells the anecdote in the Präteritum."
      ],
      "modelAnswer": "Es war schon nach Mitternacht, als mein Zug endlich in Lyon hielt. Völlig erschöpft stieg ich aus und suchte ein Taxi, aber der Platz vor dem Bahnhof war leer. Nur ein paar andere Reisende standen frierend an der Haltestelle.\n\nIm Hotel angekommen, merkte ich, dass meine Reservierung fehlte. Der Angestellte an der Rezeption sah mich gähnend an und schüttelte den Kopf. „Kein Zimmer mehr frei“, sagte er bedauernd.\n\nZögernd fragte ich, ob es nicht wenigstens ein Sofa gebe. Da kam eine ältere Dame aus dem Büro, die Chefin des Hotels. Lächelnd gab sie mir den Schlüssel zu einem kleinen Zimmer unter dem Dach. Erleichtert fiel ich ins Bett. Am nächsten Morgen bekam ich sogar ein kostenloses Frühstück.",
      "explanation": "\"Frierend\", \"gähnend\", \"bedauernd\", \"zögernd\" and \"lächelnd\" are Partizip I forms used as adverbs of manner, and \"Im Hotel angekommen\" is a participle clause followed by a comma and the verb. \"Die Reisenden\" and \"der Angestellte\" are nominalised participles that take adjective endings."
    }
  ],
  "b2-talk-about-you-ueberraschend": [
    {
      "type": "write",
      "prompt": "Write a diary entry about a day full of surprises: a job interview, a first date or a concert. Describe what was exciting, surprising or disappointing and how you felt.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses at least three -end / -t pairs correctly: the thing with -end (\"spannend\", \"überraschend\", \"enttäuschend\") and the person with -t (\"gespannt\", \"überrascht\", \"enttäuscht\").",
        "Uses \"langweilig\" / \"gelangweilt\" or \"interessant\" / \"interessiert\" correctly.",
        "Uses at least one participle as an attribute with the right ending (\"die überraschende Nachricht\").",
        "Describes events in the past and ends with a personal comment."
      ],
      "modelAnswer": "Samstag, 8. Juli\n\nWas für ein Abend! Ich war schon den ganzen Tag gespannt, denn ich hatte Karten für das Konzert meiner Lieblingsband in der Waldbühne.\n\nDie Vorband war leider ziemlich langweilig. Nach drei Liedern war ich so gelangweilt, dass ich mir etwas zu trinken geholt habe. Dann kam die Band auf die Bühne, und die ersten zwanzig Minuten waren unglaublich spannend.\n\nPlötzlich hörte die Musik auf, und der Sänger sprach von einem technischen Problem. Alle waren total enttäuscht, und das Warten im Regen war ziemlich anstrengend. Doch nach einer halben Stunde kam die überraschende Nachricht: Die Band spielte das ganze Konzert unplugged! Ich war völlig überrascht, wie gut das klang.\n\nAm Ende war ich zwar nass, aber begeistert.",
      "explanation": "The thing that causes a feeling takes Partizip I or a similar adjective (\"spannend\", \"anstrengend\", \"langweilig\", \"die überraschende Nachricht\"), while the person who has the feeling takes Partizip II (\"gespannt\", \"gelangweilt\", \"enttäuscht\", \"überrascht\", \"begeistert\"). Mixing them up would mean the writer was boring, not bored."
    }
  ],
  "b2-circuit-weil-wegen-als-bei": [
    {
      "type": "write",
      "prompt": "The building you manage will be renovated next month. Write a notice for the residents' notice board explaining the works, the reasons, the dates and what residents should do.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses at least three nominal prepositional phrases instead of clauses (\"wegen der Renovierung\", \"bei Regen\", \"nach Abschluss der Arbeiten\", \"trotz\", \"während\").",
        "Uses the genitive correctly after the prepositions and in noun phrases (\"des Treppenhauses\", \"der Arbeiten\").",
        "Uses nouns formed from verbs (\"die Erneuerung\", \"die Sperrung\", \"die Nutzung\").",
        "Keeps the formal, impersonal register of a notice."
      ],
      "modelAnswer": "Information für alle Mieterinnen und Mieter\n\nRenovierung des Treppenhauses vom 3. bis 21. Juni\n\nSehr geehrte Bewohnerinnen und Bewohner,\n\nwegen der Erneuerung der Elektroleitungen wird das Treppenhaus im Juni renoviert. Während der Arbeiten ist der Aufzug außer Betrieb. Bei schweren Einkäufen hilft Ihnen der Hausmeister gern.\n\nZur Vermeidung von Unfällen ist das Treppenhaus an zwei Tagen gesperrt: am 10. und am 11. Juni. Während der Sperrung ist die Nutzung des Hintereingangs möglich.\n\nTrotz der Lärmbelästigung bitten wir um Ihr Verständnis. Die Arbeiten finden nur werktags zwischen 8 und 17 Uhr statt.\n\nNach Abschluss der Arbeiten erhalten alle Haushalte neue Briefkastenschlüssel.\n\nBei Fragen wenden Sie sich bitte an die Hausverwaltung, Tel. 0351 44 72 10.\n\nMit freundlichen Grüßen\nIhre Hausverwaltung Schulze",
      "explanation": "Instead of clauses with \"weil\", \"wenn\" or \"nachdem\", the notice uses prepositional phrases: \"wegen der Erneuerung\", \"während der Arbeiten\", \"bei schweren Einkäufen\", \"trotz der Lärmbelästigung\" and \"nach Abschluss der Arbeiten\", with the genitive after \"wegen\", \"während\" and \"trotz\". Nominalisations such as \"die Sperrung\", \"die Nutzung\" and \"die Vermeidung\" give the text its formal style."
    }
  ],
  "b2-talk-about-you-dein-arbeitsalltag": [
    {
      "type": "write",
      "prompt": "You are applying for a job in a German-speaking company. Write the middle part of your cover letter (Anschreiben), describing your current job and your main responsibilities.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Lists responsibilities as nominalisations with a genitive or \"von\" (\"die Planung von Projekten\", \"die Betreuung der Kunden\").",
        "Uses at least one nominal phrase in place of a clause (\"seit meinem Abschluss\", \"nach meiner Ausbildung\").",
        "Combines noun style with at least two full sentences explaining achievements.",
        "Uses a formal register suitable for an application."
      ],
      "modelAnswer": "Seit meinem Abschluss in Betriebswirtschaft vor vier Jahren arbeite ich als Projektkoordinatorin bei der Firma Lumen GmbH in Hannover. Zu meinen Hauptaufgaben gehören die Planung und Durchführung von Kundenprojekten, die Betreuung unserer internationalen Partner sowie die Erstellung von Berichten für die Geschäftsleitung.\n\nDarüber hinaus bin ich für die Einarbeitung neuer Kolleginnen und Kollegen verantwortlich. Im letzten Jahr habe ich die Einführung einer neuen Projektsoftware geleitet. Dadurch konnten wir die Bearbeitungszeit unserer Aufträge um zwanzig Prozent verkürzen.\n\nBei der Zusammenarbeit mit Kunden aus Frankreich und Spanien kommen mir meine Sprachkenntnisse zugute. Nach vier spannenden Jahren suche ich nun eine neue Herausforderung mit mehr Verantwortung.",
      "explanation": "The responsibilities are listed as nominalisations (\"die Planung und Durchführung von Kundenprojekten\", \"die Betreuung unserer Partner\", \"die Erstellung von Berichten\"), the usual style for a CV or cover letter. Phrases like \"seit meinem Abschluss\" and \"bei der Zusammenarbeit\" replace clauses, while full sentences such as \"Im letzten Jahr habe ich ... geleitet\" make the achievements concrete."
    }
  ],
  "b2-funktionsverbgefuege": [
    {
      "type": "write",
      "prompt": "You are a student and can't finish your thesis on time because you were ill. Write a formal letter to the examinations office (Prüfungsamt) asking for an extension.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses at least four Funktionsverbgefüge (\"einen Antrag stellen\", \"in Anspruch nehmen\", \"zur Verfügung stellen\", \"in Betracht ziehen\", \"eine Entscheidung treffen\").",
        "Uses the correct preposition and article in each fixed combination.",
        "Explains the situation and makes a clear request.",
        "Uses a formal register with \"Sehr geehrte Damen und Herren\" and \"Mit freundlichen Grüßen\"."
      ],
      "modelAnswer": "Sehr geehrte Damen und Herren,\n\nhiermit stelle ich einen Antrag auf Verlängerung der Bearbeitungszeit meiner Bachelorarbeit. Der Abgabetermin ist der 15. Mai.\n\nIm März war ich drei Wochen krank und musste ärztliche Hilfe in Anspruch nehmen. Ein ärztliches Attest füge ich bei. In dieser Zeit konnte ich die geplanten Interviews nicht durchführen, sodass ich mit der Auswertung der Daten erst jetzt beginnen kann.\n\nMein Betreuer, Prof. Dr. Lange, hat bereits seine Zustimmung gegeben und stellt Ihnen gern eine Stellungnahme zur Verfügung. Ich bitte Sie daher, eine Verlängerung um vier Wochen in Betracht zu ziehen.\n\nIch wäre Ihnen sehr dankbar, wenn Sie bald eine Entscheidung treffen könnten. Für Rückfragen stehe ich Ihnen jederzeit zur Verfügung.\n\nMit freundlichen Grüßen\nMarie Schäfer\nMatrikelnummer 482915",
      "explanation": "Formal letters rely on fixed noun + verb combinations: \"einen Antrag auf ... stellen\", \"Hilfe in Anspruch nehmen\", \"seine Zustimmung geben\", \"eine Stellungnahme zur Verfügung stellen\", \"in Betracht ziehen\" and \"eine Entscheidung treffen\". The noun carries the meaning and the weak verb the grammar, and \"Für Rückfragen stehe ich Ihnen zur Verfügung\" is a standard closing formula."
    }
  ],
  "b2-qa-kommt-das-in-frage": [
    {
      "type": "write",
      "prompt": "Two colleagues are planning a training day for their department. Write their dialogue: they discuss which rooms and money are available, which options are possible and what they still need to raise with their boss.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses at least four Funktionsverbgefüge (\"in Frage kommen\", \"zur Verfügung stehen\", \"zur Sprache bringen\", \"in Kauf nehmen\", \"eine Rolle spielen\").",
        "Asks and answers about options (\"Kommt ... in Frage?\", \"Das kommt nicht in Frage.\").",
        "Distinguishes the active and resultative members of a pair at least once (\"stellen\" / \"stehen\", \"bringen\" / \"kommen\").",
        "Sounds like a natural conversation between colleagues."
      ],
      "modelAnswer": "Tim: Also, für den Schulungstag im Oktober müssen wir einen Raum finden. Kommt der große Konferenzraum in Frage?\nNora: Leider nicht, der steht im Oktober nicht zur Verfügung. Die Geschäftsleitung braucht ihn.\nTim: Und ein Hotel? Dafür müssten wir aber eine höhere Rechnung in Kauf nehmen.\nNora: Das Geld spielt eine große Rolle. Für den ganzen Tag stehen uns nur 1.500 Euro zur Verfügung.\nTim: Hm. Dann kommt eigentlich nur das Gemeindezentrum in Frage. Das ist günstig.\nNora: Gute Idee. Kann die Firma uns einen Beamer zur Verfügung stellen?\nTim: Bestimmt. Aber wir sollten auch das Mittagessen zur Sprache bringen.\nNora: Stimmt, das Thema kommt morgen in der Besprechung mit Frau Berger sicher zur Sprache.",
      "explanation": "The colleagues discuss options with \"in Frage kommen\" and \"in Kauf nehmen\", and resources with \"zur Verfügung stehen\" (resultative: something is available) versus \"zur Verfügung stellen\" (active: someone provides it). In the same way, you \"bringen\" a topic \"zur Sprache\", and the topic \"kommt zur Sprache\"."
    }
  ],
  "b2-thematic-review-die-baeckerei": [
    {
      "type": "write",
      "prompt": "Your parents want you to take over the family business (a bakery, a shop or a small hotel), but you also have a good job in the city. Write an email to your best friend explaining your dilemma.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses \"obwohl\" with the verb at the end at least twice.",
        "Uses \"trotzdem\" with the verb in second position.",
        "Uses \"trotz\" with the genitive (\"trotz der langen Arbeitszeiten\").",
        "Says what you are thinking of doing and asks for your friend's opinion."
      ],
      "modelAnswer": "Liebe Svenja,\n\nich brauche deinen Rat. Meine Eltern wollen die Bäckerei im nächsten Jahr abgeben und haben mich gefragt, ob ich sie übernehmen will.\n\nObwohl ich in Stuttgart einen tollen Job habe, denke ich wirklich darüber nach. Ich bin in der Backstube aufgewachsen und liebe den Geruch von frischem Brot. Trotz der langen Arbeitszeiten und des frühen Aufstehens hat mir die Arbeit dort immer Spaß gemacht.\n\nAndererseits verdiene ich jetzt gut, und ich habe hier alle meine Freunde. Obwohl das Geschäft gut läuft, kommen immer weniger Kunden aus dem Dorf. Trotzdem glaube ich, dass man mit neuen Ideen viel erreichen könnte, zum Beispiel mit einem kleinen Café.\n\nIch muss mich bis Weihnachten entscheiden. Was würdest du an meiner Stelle tun?\n\nLiebe Grüße\nAnna",
      "explanation": "\"Obwohl\" starts a subordinate clause with the verb at the end (\"obwohl ich ... habe\", \"obwohl das Geschäft gut läuft\"), \"trotzdem\" is an adverb in position 1 followed by the verb (\"Trotzdem glaube ich\"), and \"trotz\" is a preposition with the genitive (\"trotz der langen Arbeitszeiten und des frühen Aufstehens\")."
    }
  ],
  "b2-concessive-adversative-2": [
    {
      "type": "write",
      "prompt": "Write a blog post comparing two places you have lived in, for example a big city and a village, or your home town and a city abroad.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Contrasts the places with \"während\" or \"wohingegen\" and the verb at the end.",
        "Uses \"dagegen\" or \"hingegen\" as an adverb in a main clause.",
        "Uses \"im Gegensatz zu\" with the dative.",
        "Ends with a personal conclusion."
      ],
      "modelAnswer": "Zwei Städte, zwei Leben\n\nSeit drei Jahren lebe ich in Hamburg, aber aufgewachsen bin ich in einem kleinen Dorf im Schwarzwald. Die beiden Orte könnten kaum unterschiedlicher sein.\n\nWährend im Dorf jeder jeden kennt, bleibt man in Hamburg oft anonym. Im Gegensatz zu meinem Dorf gibt es hier aber unzählige Konzerte, Museen und Restaurants. Im Schwarzwald fährt der Bus nur jede Stunde, in Hamburg dagegen kommt die U-Bahn alle fünf Minuten.\n\nDie Mieten in der Stadt sind sehr hoch, wohingegen meine Eltern für ein ganzes Haus weniger bezahlen als ich für zwei Zimmer. Auf dem Land hat man außerdem viel Natur vor der Tür. In Hamburg hingegen muss ich erst eine halbe Stunde fahren, um im Grünen zu sein.\n\nIch vermisse die Ruhe, aber im Moment passt die Stadt besser zu mir.",
      "explanation": "\"Während\" and \"wohingegen\" are subordinating conjunctions, so the verb goes to the end (\"jeder jeden kennt\", \"weniger bezahlen\"). \"Dagegen\" and \"hingegen\" are adverbs that stand inside a main clause, and \"im Gegensatz zu\" takes the dative (\"zu meinem Dorf\")."
    }
  ],
  "b2-indem-ohne-dass-anstatt-dass": [
    {
      "type": "write",
      "prompt": "Write a short article for a student magazine with the title \"So habe ich meine Energiekosten halbiert\". Explain how you saved energy and money, and what you did instead of your old habits.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Explains methods with \"indem\" or \"dadurch, dass\" and the verb at the end.",
        "Uses \"ohne dass\" or \"ohne ... zu\" correctly, depending on the subject.",
        "Uses \"anstatt dass\" or \"anstatt ... zu\" for what you do instead.",
        "Gives the article a clear structure with an introduction and a short conclusion."
      ],
      "modelAnswer": "So habe ich meine Energiekosten halbiert\n\nLetzten Winter kam eine Nachzahlung von 400 Euro. Da wusste ich: Es muss sich etwas ändern.\n\nStrom spare ich vor allem, indem ich alle Geräte nachts komplett ausschalte. Früher liefen Fernseher und Router rund um die Uhr, ohne dass ich darüber nachdachte. Anstatt die Wäsche in den Trockner zu stecken, hänge ich sie jetzt auf dem Balkon auf.\n\nAuch beim Heizen hat sich viel verändert. Dadurch, dass ich die Temperatur um zwei Grad gesenkt habe, spare ich jeden Monat Geld. Anstatt dass die Heizung den ganzen Tag läuft, steuert ein Thermostat sie jetzt automatisch.\n\nDas Beste: Ich habe ohne großen Aufwand und ohne zu frieren fast die Hälfte gespart. Probiert es aus!",
      "explanation": "\"Indem\" and \"dadurch, dass\" say how the result was achieved, with the verb at the end. \"Ohne ... zu\" and \"anstatt ... zu\" are used when the subject is the same as in the main clause (\"ohne zu frieren\", \"Anstatt die Wäsche ... zu stecken\"), and \"ohne dass\" / \"anstatt dass\" when it changes (\"ohne dass ich ...\", \"Anstatt dass die Heizung ...\")."
    }
  ],
  "b2-fix-paragraph-beschwerde-an-die-bahn": [
    {
      "type": "write",
      "prompt": "You commute two hours a day to work. Write a diary entry about a particularly bad day of commuting: what went wrong, why, and what the consequences were.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Gives a known reason with \"da\" in front position and an extra reason with \"zumal\".",
        "Gives consequences with \"sodass\" or \"so ... dass\".",
        "Uses at least one other causal or consequential connector (\"weil\", \"denn\", \"deshalb\", \"infolgedessen\").",
        "Is written in the first person as a personal diary entry."
      ],
      "modelAnswer": "Donnerstag, 23. November\n\nHeute war wieder einer dieser Tage. Da es seit gestern stürmt, fielen schon am Morgen zwei Züge zwischen Mannheim und Frankfurt aus. Der nächste Zug war so voll, dass ich die ganze Fahrt im Gang stehen musste.\n\nIn Frankfurt kam ich vierzig Minuten zu spät an, sodass ich die Übergabe im Krankenhaus verpasst habe. Meine Kollegin war verärgert, zumal sie selbst schon seit sechs Uhr da war. Ich kann sie verstehen.\n\nAm Abend dasselbe Spiel: Weil ein Signal gestört war, standen wir eine Stunde vor Darmstadt. Ich war erst um halb zehn zu Hause und so müde, dass ich nicht einmal mehr essen wollte.\n\nIch muss mir wirklich überlegen, ob ich näher an Frankfurt ziehe. Denn so kann es nicht weitergehen.",
      "explanation": "\"Da\" introduces a reason the reader can easily accept and often comes first, while \"zumal\" adds an extra, stronger reason; both send the verb to the end. \"So voll, dass\", \"sodass\" and \"so müde, dass\" express consequences, and \"denn\" at the end gives a reason in a main clause with normal word order."
    }
  ],
  "b2-pattern-er-tut-so-als-ob": [
    {
      "type": "write",
      "prompt": "Your new flatmate pretends to do everything right, but you have doubts. Write a text message to a friend describing how they behave.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses \"tut so, als ob\" or \"tut so, als\" at least three times.",
        "Puts the verb at the end after \"als ob\" and straight after \"als\" (\"als wäre er ...\").",
        "Uses Konjunktiv II forms after \"als ob\" (\"wäre\", \"hätte\", \"wüsste\", \"würde ... spülen\").",
        "Sounds like an informal message to a friend."
      ],
      "modelAnswer": "Hey Leni, ich muss dir was über meinen neuen Mitbewohner erzählen\n\nJonas tut immer so, als ob er total ordentlich wäre. Wenn ich in die Küche komme, steht er sofort auf und tut so, als würde er gerade spülen. Aber die Teller stehen seit drei Tagen da!\n\nUnd beim Putzplan tut er so, als hätte er ihn noch nie gesehen, obwohl er direkt neben seiner Tür hängt. Gestern hat er sogar so getan, als ob er kein Geld für den Strom hätte. Am Abend kam er dann mit einem neuen Handy nach Hause.\n\nAm meisten nervt mich, dass er immer so tut, als wüsste er alles besser. Was soll ich machen? Mit ihm reden?",
      "explanation": "\"Als ob\" sends the verb to the end (\"als ob er total ordentlich wäre\"), while \"als\" alone puts it straight after (\"als würde er spülen\", \"als hätte er ...\", \"als wüsste er ...\"). The unreal comparison takes Konjunktiv II because the writer believes the opposite is true."
    }
  ],
  "b2-als-ob-2": [
    {
      "type": "write",
      "prompt": "You are on holiday in a place you had heard a lot about. Write a postcard to a friend, comparing the place with what you had expected.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses comparison clauses with \"als\" + Plusquamperfekt (\"schöner, als ich gedacht hatte\").",
        "Uses \"je ... desto\" with the correct word order.",
        "Uses at least one unreal comparison with \"als ob\" or \"als\" about the past (\"als ob sie nie ... gewesen wäre\").",
        "Includes typical postcard features: greeting, a few details, closing."
      ],
      "modelAnswer": "Liebe Clara,\n\nviele Grüße aus Dubrovnik! Die Stadt ist noch schöner, als ich gedacht hatte. Die Mauern sind höher, als ich erwartet hatte, und das Meer ist unglaublich klar.\n\nAllerdings ist es auch voller, als mir alle erzählt hatten. Je später es wird, desto mehr Touristen kommen von den Kreuzfahrtschiffen. Deshalb stehe ich jetzt jeden Tag um sechs auf. Am frühen Morgen sieht die Altstadt aus, als ob nie ein Mensch hier gewesen wäre.\n\nGestern habe ich eine alte Fischerin kennengelernt. Sie hat mir gezeigt, wie man Muscheln kocht, als hätten wir uns schon ewig gekannt.\n\nJe länger ich hier bin, desto weniger will ich nach Hause!\n\nBis bald\nDeine Mira",
      "explanation": "Comparisons with expectations use the Plusquamperfekt after \"als\" (\"schöner, als ich gedacht hatte\"), because the expectations came before the visit. \"Je später ..., desto mehr ...\" puts the verb at the end of the je-part and inverts after \"desto\", and the past unreal comparisons use \"gewesen wäre\" and \"hätten ... gekannt\"."
    }
  ],
  "b2-pattern-sie-muss-krank-sein": [
    {
      "type": "write",
      "prompt": "Two flatmates come home and find the kitchen in a strange state: the window is open, there's a half-eaten cake on the table and the third flatmate's bag is gone. Write their dialogue as they try to work out what has happened.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Draws conclusions with \"muss\" (sure), \"dürfte\" (probably) and \"könnte\" / \"kann\" (possible).",
        "Excludes a possibility with \"kann nicht\".",
        "Uses at least two of these modals with a perfect infinitive to talk about the past (\"muss ... gegangen sein\", \"kann nicht ... gegessen haben\").",
        "Chooses \"haben\" or \"sein\" correctly in the perfect infinitive."
      ],
      "modelAnswer": "Ole: Was ist denn hier passiert? Das Fenster ist offen, und Tinas Tasche ist weg.\nPia: Sie muss schnell weggegangen sein. Sie lässt das Fenster sonst nie offen.\nOle: Und der Kuchen? Den hat sie bestimmt nicht allein gegessen.\nPia: Nein, das kann nicht sie gewesen sein, sie mag keine Schokolade. Es dürfte Besuch da gewesen sein.\nOle: Ihr Bruder könnte vorbeigekommen sein. Der isst immer alles.\nPia: Schau mal, ihr Handy liegt noch hier! Dann muss sie es in der Eile vergessen haben.\nOle: Vielleicht ist etwas mit ihrer Oma. Die könnte ins Krankenhaus gekommen sein.\nPia: Das kann nicht sein, ihre Oma war gestern noch hier. Ich rufe einfach ihren Bruder an.",
      "explanation": "The flatmates rate their guesses: \"muss ... weggegangen sein\" and \"muss ... vergessen haben\" are near certain, \"dürfte ... gewesen sein\" is probable, \"könnte ... vorbeigekommen sein\" is possible, and \"kann nicht ... gewesen sein\" rules something out. The perfect infinitive takes \"sein\" for verbs of movement and change (\"weggehen\", \"kommen\") and \"haben\" for the rest."
    }
  ],
  "b2-story-gaps-der-museumseinbruch": [
    {
      "type": "write",
      "prompt": "Write a short detective story about a theft in a small town: a stolen painting, a missing bike or an empty till. Include what witnesses claim, what people say, and what the detective concludes.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Reports a witness's own claim with \"will\" (\"Der Hausmeister will nichts gehört haben\").",
        "Passes on rumours with \"soll\" (\"Der Dieb soll ... sein\").",
        "Shows the detective's conclusions with \"muss\", \"kann nicht\" or \"dürfte\" + infinitive.",
        "Tells the story mainly in the Präteritum."
      ],
      "modelAnswer": "Am Montagmorgen fehlte im Stadtmuseum von Meißen eine wertvolle Porzellanfigur. Kommissarin Brandt sah sich die leere Vitrine genau an.\n\nDer Nachtwächter will die ganze Nacht wach gewesen sein und nichts gehört haben. Eine Nachbarin will um drei Uhr ein Auto gesehen haben. Im Dorf erzählte man sich schon Gerüchte: Der Dieb soll ein ehemaliger Mitarbeiter sein, und das Museum soll seit Monaten keine funktionierende Alarmanlage gehabt haben.\n\nDie Kommissarin bemerkte, dass die Vitrine nicht beschädigt war. „Der Täter muss einen Schlüssel gehabt haben“, sagte sie. „Von außen kann er nicht gekommen sein, die Fenster sind alle verschlossen.“\n\nAls sie den Nachtwächter noch einmal befragte, wurde er nervös. „Sie dürften mehr wissen, als Sie sagen“, meinte Brandt ruhig.",
      "explanation": "\"Will ... gewesen sein\" and \"will ... gesehen haben\" show that the speaker claims something about himself or herself, which the narrator doubts, while \"soll\" passes on rumours from other people. The detective's conclusions range from certain (\"muss ... gehabt haben\") to impossible (\"kann nicht gekommen sein\") and probable (\"dürften ... wissen\")."
    }
  ],
  "b2-pattern-bis-dahin": [
    {
      "type": "write",
      "prompt": "Your team wants to introduce a new booking system for customers. Write a short project proposal for your manager, explaining what will have been done by each stage and when the system will be ready.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses Futur II at least three times to say what will have been done by a certain time (\"Bis Ende März werden wir ... getestet haben\").",
        "Uses time expressions such as \"bis dahin\", \"bis Ende ...\", \"spätestens\" or \"nach ... Wochen\".",
        "Chooses \"haben\" or \"sein\" correctly (\"wird ... umgestiegen sein\").",
        "Ends with a clear request or recommendation."
      ],
      "modelAnswer": "Vorschlag: Neues Online-Buchungssystem\n\nSehr geehrte Frau Neumann,\n\nunser Team schlägt vor, im Frühjahr ein neues Buchungssystem für unsere Kunden einzuführen. Hier der geplante Zeitplan:\n\nBis Ende Januar werden wir drei Anbieter verglichen und ein Angebot ausgewählt haben. Bis Mitte Februar wird die IT-Abteilung das System installiert und an unsere Website angepasst haben.\n\nIm März testen wir das System mit einer kleinen Kundengruppe. Bis dahin werden alle Kolleginnen und Kollegen an einer Schulung teilgenommen haben.\n\nSpätestens am 1. April werden wir vollständig auf das neue System umgestiegen sein. Nach drei Monaten werden wir die ersten Ergebnisse ausgewertet haben und Ihnen einen Bericht vorlegen.\n\nWir würden uns freuen, wenn Sie dem Vorschlag in der nächsten Sitzung zustimmen könnten.\n\nMit freundlichen Grüßen\nDaniel Kraus",
      "explanation": "Futur II (\"werden ... ausgewählt haben\", \"wird ... angepasst haben\", \"werden ... teilgenommen haben\") presents each step as completed by a deadline, which is marked with \"bis Ende Januar\", \"bis dahin\" or \"spätestens\". \"Umsteigen\" forms its perfect with \"sein\", so the Futur II is \"werden ... umgestiegen sein\", and the March test is in the present because it is a simple plan."
    }
  ],
  "b2-futur-ii-2": [
    {
      "type": "write",
      "prompt": "You and two friends are waiting for a fourth friend at a restaurant. She is forty minutes late and isn't answering her phone. Write the group chat in which you guess what has happened.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses Futur II with \"wohl\" to guess about the past (\"Sie wird wohl den Bus verpasst haben\").",
        "Uses Futur I with \"wohl\" to guess about the present (\"Sie wird wohl noch im Büro sein\").",
        "Uses at least two probability adverbs (\"vermutlich\", \"bestimmt\", \"sicher\", \"wahrscheinlich\") in the right position.",
        "Reads like a real chat with short messages from different people."
      ],
      "modelAnswer": "Ben: Wo bleibt Mia? Es ist schon halb neun.\nLara: Keine Ahnung. Sie wird wohl wieder länger im Büro geblieben sein.\nJan: Oder sie wird den Bus verpasst haben. Der fährt abends nur alle zwanzig Minuten.\nBen: Ich habe sie gerade angerufen, aber sie geht nicht ran.\nLara: Ihr Handy wird bestimmt leer sein. Das passiert ihr ständig.\nJan: Vielleicht hat sie unser Treffen vergessen? Sie wird doch nicht schon zu Hause sitzen?\nBen: Nein, sie hat mir heute Mittag noch geschrieben. Sie wird vermutlich im Stau stehen.\nLara: Hat sie überhaupt die richtige Adresse? Wir haben das Restaurant ja am Donnerstag noch geändert.\nJan: Oh nein. Sie wird wohl im alten Restaurant gewartet haben!\nBen: Ich schreibe ihr sofort die neue Adresse.",
      "explanation": "Guesses about the past use Futur II (\"wird ... geblieben sein\", \"wird ... verpasst haben\", \"wird ... gewartet haben\"), and guesses about the present use Futur I (\"wird ... leer sein\", \"wird ... im Stau stehen\"). \"Wohl\", \"bestimmt\" and \"vermutlich\" stand in the middle of the sentence after the finite verb and show how sure the speaker is."
    }
  ],
  "b2-thematic-review-zurueck-im-alltag": [
    {
      "type": "write",
      "prompt": "Tomorrow you go back to your old job after a year abroad. Write a diary entry: what will probably have changed, what you've heard from colleagues, and what you regret not having done during the year.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Guesses about changes with Futur II and \"wohl\" or with \"dürfte\" + perfect infinitive.",
        "Passes on what you have heard with \"soll\" (\"Der neue Chef soll sehr streng sein\").",
        "Expresses at least one regret with \"hätte\" + double infinitive (\"Ich hätte mich öfter melden sollen\").",
        "Is written as a personal diary entry."
      ],
      "modelAnswer": "Sonntag, 3. September\n\nMorgen ist mein erster Arbeitstag nach einem Jahr in Kanada. Ich bin ziemlich nervös.\n\nIm Büro wird sich wohl einiges verändert haben. Die Abteilung dürfte inzwischen in das neue Gebäude umgezogen sein, und meine Kollegin Sara wird ihre Elternzeit schon begonnen haben. Laut Marco soll der neue Chef sehr streng sein. Er soll sogar die Homeoffice-Tage gestrichen haben. Hoffentlich stimmt das nicht!\n\nIch hätte mich während des Jahres öfter bei meinem Team melden sollen. Dann wüsste ich jetzt, was mich erwartet. Und ich hätte meinen Schreibtisch vor der Abreise aufräumen sollen. Den wird inzwischen jemand anders benutzt haben.\n\nNa ja. Morgen früh nehme ich Kuchen mit, das hilft immer.",
      "explanation": "Guesses about what has happened in her absence use Futur II with \"wohl\" (\"wird sich wohl ... verändert haben\") or \"dürfte\" + perfect infinitive (\"dürfte ... umgezogen sein\"). \"Soll ... sein\" and \"soll ... gestrichen haben\" pass on what other people say, and the regrets use \"hätte\" + infinitive + \"sollen\" at the end of the clause."
    }
  ],
  "b2-contrast-soll-will-sei": [
    {
      "type": "write",
      "prompt": "Write a short article for the gossip page of a local paper about a famous person who has supposedly bought a house in your town. Report the rumours, the person's own claims and the official statement.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses \"soll\" for rumours from other people (\"Er soll ... gekauft haben\").",
        "Uses \"will\" for the person's own doubtful claims (\"Sie will nichts davon gewusst haben\").",
        "Reports an official statement neutrally in Konjunktiv I (\"Der Bürgermeister sagte, es gebe ...\").",
        "Keeps a light journalistic style with a headline."
      ],
      "modelAnswer": "Wohnt bald ein Star am Marktplatz?\n\nIn Bamberg wird seit Tagen über nichts anderes gesprochen: Der Schauspieler Tom Reuter soll die alte Villa am Marktplatz gekauft haben. Nachbarn zufolge soll er schon zweimal mit einem Architekten da gewesen sein. Er soll sogar einen Pool im Garten planen.\n\nReuter selbst will davon nichts gehört haben. In einem Interview sagte er, er sei nur für Dreharbeiten in der Stadt gewesen. Er will die Villa nie von innen gesehen haben.\n\nDie Stadtverwaltung äußerte sich vorsichtig. Ein Sprecher erklärte, es gebe einen neuen Eigentümer, man dürfe den Namen aber nicht nennen. Die Umbauarbeiten würden im Frühjahr beginnen.\n\nWir bleiben dran!",
      "explanation": "\"Soll\" reports what other people are saying (\"soll ... gekauft haben\", \"soll ... planen\"), while \"will\" marks a claim the subject makes about himself that the writer doubts (\"will ... nie ... gesehen haben\"). The city's statement is in neutral Konjunktiv I (\"es gebe\", \"man dürfe\"), with \"würden\" replacing \"werden\", which would look like the indicative."
    }
  ],
  "b2-thematic-review-ausbildung-oder-studium": [
    {
      "type": "write",
      "prompt": "Your younger cousin is finishing school and can't decide between an apprenticeship (Ausbildung) and a university degree. Write him an email giving your advice.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses \"jedoch\" in position 1 or in the Mittelfeld with the correct word order.",
        "Uses \"allerdings\" to admit a limitation and \"dennoch\" for \"nevertheless\".",
        "Uses at least one consequence connector (\"deshalb\", \"daher\", \"folglich\") with inversion.",
        "Gives a clear piece of advice in an informal tone."
      ],
      "modelAnswer": "Hallo Leon,\n\ndeine Mutter hat mir erzählt, dass du dich zwischen einer Ausbildung und einem Studium entscheiden musst. Hier ein paar Gedanken von mir.\n\nEine Ausbildung bei Siemens hat viele Vorteile: Du verdienst von Anfang an Geld und lernst die Praxis kennen. Daher bist du nach drei Jahren schon ziemlich selbstständig. Ein Studium dauert jedoch länger und kostet mehr, bietet aber später oft bessere Aufstiegschancen.\n\nIch habe selbst studiert. Allerdings habe ich in den ersten Semestern oft gezweifelt, weil mir die Praxis fehlte. Dennoch würde ich es wieder tun, denn mein Beruf macht mir heute großen Spaß.\n\nMein Rat: Mach im Sommer ein Praktikum. Dann weißt du besser, was zu dir passt.\n\nViele Grüße\nJulia",
      "explanation": "\"Jedoch\" stands in the Mittelfeld after the verb (\"dauert jedoch länger\"), and \"allerdings\" and \"dennoch\" in position 1 are followed directly by the verb (\"Allerdings habe ich\", \"Dennoch würde ich\"). \"Daher\" in position 1 also triggers inversion (\"Daher wärst du\")."
    }
  ],
  "b2-advanced-connectors-2": [
    {
      "type": "write",
      "prompt": "You are a member of a sports club. Write a proposal to the club's board suggesting a new activity, for example a youth team, a cycling group or a club festival.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Adds arguments with \"zudem\", \"darüber hinaus\" or \"ferner\".",
        "Uses \"stattdessen\" or \"andernfalls\" to present alternatives or consequences.",
        "Uses \"nämlich\" in the Mittelfeld to give a reason, or \"insofern ... als\" for a restriction.",
        "Has a clear structure: proposal, reasons, practical details and a request."
      ],
      "modelAnswer": "Vorschlag: Gründung einer Jugendmannschaft\n\nLiebe Mitglieder des Vorstands,\n\nich möchte vorschlagen, ab dem nächsten Schuljahr eine Jugendmannschaft im Volleyball zu gründen.\n\nIn unserem Stadtteil gibt es nämlich kaum Angebote für Jugendliche. Viele Eltern haben schon nach einem Training gefragt. Zudem würde der Verein dadurch langfristig neue Mitglieder gewinnen. Darüber hinaus könnten wir Zuschüsse von der Stadt beantragen.\n\nDie Halle ist dienstags ab 17 Uhr frei. Ein zusätzlicher Trainer ist insofern nicht nötig, als zwei unserer Spielerinnen bereits eine Trainerlizenz haben.\n\nWir sollten schnell handeln, andernfalls vergibt die Stadt die Hallenzeiten an einen anderen Verein. Teure Werbeflyer brauchen wir nicht. Stattdessen könnten wir beim Schulfest ein Probetraining anbieten.\n\nIch freue mich auf Ihre Rückmeldung.\n\nMit sportlichen Grüßen\nKatharina Vogel",
      "explanation": "\"Zudem\" and \"darüber hinaus\" add arguments in position 1 with inversion, and \"nämlich\" gives a reason from inside the Mittelfeld, never in position 1. \"Insofern ... als\" limits a statement to one respect, and \"andernfalls\" says what happens if the proposal isn't accepted."
    }
  ],
  "b2-mixed-practice-beschwerdebrief": [
    {
      "type": "write",
      "prompt": "You cancelled your fitness studio contract three months ago, but the studio is still taking money from your account. Write a formal complaint.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Describes the facts in a clear order with dates.",
        "Insists politely but firmly, using Konjunktiv II politeness (\"Ich wäre Ihnen dankbar, wenn ...\") and a formal connector (\"jedoch\", \"dennoch\", \"folglich\").",
        "Makes clear demands with a deadline (\"Ich fordere Sie auf, ... bis zum ... zu ...\").",
        "Uses a formal register throughout."
      ],
      "modelAnswer": "Sehr geehrte Damen und Herren,\n\nam 15. Januar habe ich meinen Vertrag (Mitgliedsnummer 20417) fristgerecht zum 31. März gekündigt. Die Kündigung habe ich per Einschreiben geschickt, und Ihr Studio hat den Empfang am 18. Januar bestätigt.\n\nDennoch wurden im April, Mai und Juni jeweils 39,90 Euro von meinem Konto abgebucht. Ich habe Sie bereits zweimal telefonisch darauf hingewiesen, jedoch ohne Erfolg.\n\nFolglich fordere ich Sie auf, mir die zu Unrecht abgebuchten 119,70 Euro bis zum 15. Juli zurückzuzahlen. Darüber hinaus wäre ich Ihnen dankbar, wenn Sie mir die Beendigung des Vertrags schriftlich bestätigen könnten.\n\nSollte ich bis zu diesem Datum keine Antwort erhalten, werde ich mich an die Verbraucherzentrale wenden.\n\nMit freundlichen Grüßen\nAndreas Lorenz",
      "explanation": "The complaint first states the facts with dates, then uses \"dennoch\", \"jedoch\" and \"folglich\" to link them to the demand. \"Ich fordere Sie auf, ... zurückzuzahlen\" sets a clear deadline, while \"Ich wäre Ihnen dankbar, wenn Sie ... könnten\" and the conditional \"Sollte ich ... keine Antwort erhalten\" keep the tone polite but firm."
    }
  ],
  "b2-thematic-review-digitaler-nachlass": [
    {
      "type": "write",
      "prompt": "Write a short article for a consumer magazine about what happens to people's online accounts when they die, and what readers should do now.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses passive alternatives with \"sich lassen\" or \"sein + zu\" (\"Viele Konten lassen sich nicht einfach löschen\").",
        "Links ideas with at least three formal connectors (\"zudem\", \"jedoch\", \"folglich\", \"daher\").",
        "Uses Futur II at least once (\"Bis dahin werden ... haben\").",
        "Gives practical advice to readers."
      ],
      "modelAnswer": "Was bleibt von uns im Netz?\n\nE-Mails, Fotos, soziale Netzwerke: Fast jeder hat heute Dutzende Online-Konten. Was mit ihnen nach dem Tod passiert, wissen jedoch die wenigsten.\n\nViele Konten lassen sich nicht einfach löschen. Die Erben brauchen dafür oft eine Sterbeurkunde, und manche Anbieter verlangen zudem einen Erbschein. Ohne Passwörter ist der Zugang folglich sehr schwierig.\n\nExperten schätzen, dass es auf manchen Plattformen bald mehr Profile von Verstorbenen als von Lebenden geben wird. Bis 2070 werden Millionen Nutzer ihre digitalen Spuren hinterlassen haben.\n\nDaher sollte jeder rechtzeitig vorsorgen: Eine Liste aller Konten ist anzulegen und an einem sicheren Ort aufzubewahren. Außerdem lässt sich bei vielen Diensten eine Vertrauensperson angeben.",
      "explanation": "Passive alternatives make the article impersonal: \"lassen sich nicht ... löschen\" and \"lässt sich ... angeben\" express possibility, and \"ist anzulegen und ... aufzubewahren\" expresses what must be done. \"Jedoch\", \"zudem\", \"folglich\" and \"daher\" link the ideas, and \"werden ... hinterlassen haben\" is a Futur II prediction about a future point in time."
    }
  ],
  "b2-pattern-tekamolo": [
    {
      "type": "write",
      "prompt": "Write a short anecdote about a journey that didn't go as planned: a missed ferry, a lost suitcase or a wrong turn. Give exact details of when, why, how and where things happened.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Puts adverbials in the order time, cause, manner, place (\"am Samstag wegen des Sturms mit Verspätung in Kiel\").",
        "Puts pronouns before nouns and dative nouns before accusative nouns in the Mittelfeld (\"gab ihn mir\", \"gab der Frau den Koffer\").",
        "Places \"nicht\" correctly, late in the Mittelfeld or before the negated element.",
        "Tells the anecdote in the past."
      ],
      "modelAnswer": "Letzten Sommer wollten meine Freundin und ich mit der Fähre von Kiel nach Oslo fahren. Leider kamen wir am Samstag wegen eines Unfalls auf der Autobahn mit zwei Stunden Verspätung in Kiel an. Die Fähre war schon weg.\n\nEine Mitarbeiterin am Hafen hatte Mitleid mit uns. Sie gab uns sofort zwei Plätze auf der Fähre am nächsten Tag. Leider hatte ich meinen Koffer im Taxi vergessen. Ich rief am Abend aus lauter Verzweiflung bei der Taxizentrale an.\n\nAm nächsten Morgen brachte ihn uns der Fahrer persönlich zum Hafen. Ich wollte ihm ein Trinkgeld geben, aber er nahm es nicht an. Er gab meiner Freundin nur seine Karte und sagte: „Gute Reise!“",
      "explanation": "The adverbials follow the order time, cause, manner, place: \"am Samstag – wegen eines Unfalls – mit zwei Stunden Verspätung – in Kiel\" and \"am Abend – aus lauter Verzweiflung – bei der Taxizentrale\". Pronouns come before nouns (\"gab uns sofort zwei Plätze\", \"brachte ihn uns der Fahrer\"), the accusative pronoun comes before the dative pronoun (\"ihn uns\"), the dative noun comes before the accusative noun (\"gab meiner Freundin ... seine Karte\"), and \"nicht\" stands just before the separable prefix (\"nahm es nicht an\")."
    }
  ],
  "b2-transformations-move-it-to-the-front": [
    {
      "type": "write",
      "prompt": "Your best friend is celebrating her 30th birthday. Write a short speech (a toast) for the party, telling the guests what makes her special.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Starts at least three sentences with something other than the subject: a time, an object or a judgement (\"Vor zwanzig Jahren ...\", \"Ihren Humor ...\").",
        "Uses the Vorfeld to create a contrast (\"Pünktlich ist sie nicht, aber ...\").",
        "Has only one element before the finite verb in every main clause.",
        "Addresses the guests and ends with a toast."
      ],
      "modelAnswer": "Liebe Gäste, liebe Hanna,\n\nvor zweiundzwanzig Jahren habe ich Hanna kennengelernt, an unserem ersten Schultag in Münster. Ihr Pausenbrot hat sie mir damals sofort geschenkt, weil ich meins vergessen hatte. Seitdem sind wir unzertrennlich.\n\nPünktlich ist Hanna nicht, das wisst ihr alle. Zuverlässig ist sie aber wie kein anderer Mensch. Wenn man sie nachts um drei anruft, kommt sie. Ihren Humor bewundere ich besonders. Selbst nach meiner schlimmsten Trennung hat sie mich zum Lachen gebracht.\n\nUnvergesslich bleibt für mich unsere Reise nach Portugal, als wir ohne Hotel in Lissabon ankamen. Eine Lösung hat Hanna natürlich gefunden.\n\nUnd jetzt bitte ich euch, die Gläser zu heben. Auf Hanna und die nächsten dreißig Jahre!",
      "explanation": "Different elements fill position 1 to add emphasis: a time (\"vor zweiundzwanzig Jahren\"), objects (\"Ihr Pausenbrot\", \"Ihren Humor\", \"Eine Lösung\") and adjectives (\"Pünktlich\", \"Zuverlässig\", \"Unvergesslich\"). \"Pünktlich ist Hanna nicht ... Zuverlässig ist sie aber\" uses the Vorfeld for contrast, and in each main clause the finite verb comes directly after that one element."
    }
  ],
  "b2-circuit-exclamatives": [
    {
      "type": "write",
      "prompt": "You are spending a few days in the mountains and everything is amazing. Write a postcard to a friend full of enthusiasm.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses exclamations with \"was für ein\" and \"wie\" with the verb at the end (\"Wie schön es hier ist!\").",
        "Uses at least one verb-first exclamation (\"War das ein Abend!\").",
        "Uses modal particles such as \"aber\", \"ja\" or \"vielleicht\" in exclamations (\"Das ist aber ein Ausblick!\").",
        "Includes typical postcard features: greeting, a few details, closing."
      ],
      "modelAnswer": "Liebe Nele,\n\nwas für eine Aussicht! Ich sitze gerade auf der Terrasse unserer Hütte im Kleinwalsertal und schaue auf die Berge. Wie schön es hier ist!\n\nGestern sind wir zum ersten Mal auf den Gipfel gestiegen. War das anstrengend! Aber oben war der Himmel so klar, dass wir bis zur Zugspitze sehen konnten. Das war vielleicht ein Moment!\n\nAm Abend hat uns der Wirt einen Kaiserschmarrn gemacht. Der war ja so lecker! Und was für ein Sternenhimmel danach! Wie viele Sterne man hier sieht, ist unglaublich.\n\nDu musst unbedingt nächstes Jahr mitkommen.\n\nGanz liebe Grüße aus den Bergen\nPaula",
      "explanation": "\"Was für eine Aussicht!\" and \"was für ein Sternenhimmel\" are noun exclamations, while \"Wie schön es hier ist!\" and \"Wie viele Sterne man hier sieht\" send the verb to the end. \"War das anstrengend!\" is a verb-first exclamation, and the particles \"vielleicht\" and \"ja\" turn ordinary statements into exclamations."
    }
  ],
  "b2-thematic-review-street-art-in-berlin": [
    {
      "type": "write",
      "prompt": "Choose a mural, a photo or a painting you like. Write a description of it for an art blog, saying what you see and what makes it special for you.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses at least one cleft-like structure (\"Was mich besonders beeindruckt, ist ...\", \"Es ist die Farbe, die ...\").",
        "Uses the placeholder \"es\" in position 1 (\"Es stehen zwei Figuren ...\") or the correlate \"es\" before a dass-clause.",
        "Uses focus particles such as \"gerade\", \"sogar\", \"vor allem\" or \"nur\".",
        "Describes the position of things in the picture (\"im Vordergrund\", \"links\", \"im Hintergrund\")."
      ],
      "modelAnswer": "Das Wandbild an der Oberbaumbrücke\n\nAn einer Hauswand in Kreuzberg gibt es ein riesiges Wandbild, an dem ich fast jeden Tag vorbeigehe. Im Vordergrund sieht man zwei Kinder, die einen Drachen steigen lassen. Im Hintergrund ist die Spree mit der Oberbaumbrücke zu sehen.\n\nWas mich besonders beeindruckt, sind die Farben. Es ist vor allem das kräftige Orange des Drachens, das sofort ins Auge fällt. Links am Rand stehen sogar ein paar Wörter, aber nur wer genau hinschaut, kann sie lesen: „Die Stadt gehört allen.“\n\nEs gefällt mir, dass das Bild so fröhlich wirkt, obwohl die Mieten im Viertel immer weiter steigen. Gerade deshalb ist es für mich ein Zeichen der Hoffnung.",
      "explanation": "\"Was mich besonders beeindruckt, sind die Farben\" and \"Es ist ... das kräftige Orange ..., das ...\" put the focus on one element, and \"Es gefällt mir, dass ...\" uses \"es\" as a correlate for the dass-clause. Focus particles like \"vor allem\", \"sogar\", \"nur\" and \"gerade\" stand right before the word they highlight."
    }
  ],
  "b2-pattern-aufgrund-des": [
    {
      "type": "write",
      "prompt": "Your town is celebrating its 750th anniversary with a street festival. Write an official announcement for the town's website with the key information and any changes to the programme.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses at least four genitive prepositions (\"anlässlich\", \"aufgrund\", \"innerhalb\", \"außerhalb\", \"während\", \"infolge\").",
        "Uses the correct genitive endings, including adjectives without an article (\"aufgrund starken Regens\").",
        "Gives practical information: date, place, times and changes.",
        "Uses the formal register of an official announcement."
      ],
      "modelAnswer": "Bekanntmachung der Stadt Lindau\n\nAnlässlich des 750-jährigen Stadtjubiläums findet am 14. und 15. Juni ein großes Straßenfest in der Altstadt statt. Alle Bürgerinnen und Bürger sind herzlich eingeladen.\n\nWährend des Festes ist die Altstadt für den Autoverkehr gesperrt. Parkplätze stehen außerhalb des Stadtzentrums zur Verfügung. Ein kostenloser Busshuttle fährt alle fünfzehn Minuten.\n\nAufgrund der großen Nachfrage wird der historische Umzug am Sonntag um eine Stunde verlängert. Infolge der Bauarbeiten am Hafen findet das Feuerwerk dieses Jahr auf der Seebühne statt.\n\nBei schlechtem Wetter gilt: Aufgrund starken Regens oder Sturms können einzelne Veranstaltungen kurzfristig abgesagt werden. Aktuelle Informationen finden Sie innerhalb des Festgeländes an den Infoständen.\n\nIhre Stadtverwaltung",
      "explanation": "\"Anlässlich\", \"während\", \"außerhalb\", \"aufgrund\", \"infolge\" and \"innerhalb\" all take the genitive, as in \"des Stadtjubiläums\" and \"der großen Nachfrage\". Without an article, the adjective carries the genitive ending \"-en\" and the noun keeps its \"-s\" (\"aufgrund starken Regens oder Sturms\")."
    }
  ],
  "b2-circuit-mit-deren-hilfe": [
    {
      "type": "write",
      "prompt": "Your company newsletter has a section called ‘Colleague of the Month’. Write a short portrait of a colleague who has helped you and others a lot.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses at least two genitive relative clauses with \"dessen\" or \"deren\" (\"eine Kollegin, deren Ideen ...\").",
        "Uses at least one preposition + \"dessen\" / \"deren\" (\"mit deren Hilfe\", \"in dessen Team\").",
        "Puts the verb at the end of each relative clause.",
        "Describes the person's work and qualities in a friendly, slightly formal style."
      ],
      "modelAnswer": "Kollegin des Monats: Fatma Arslan\n\nIm Oktober möchten wir Fatma Arslan vorstellen, deren Arbeit für unsere Abteilung unverzichtbar ist. Fatma arbeitet seit acht Jahren im Kundenservice, dessen Leitung sie im letzten Jahr übernommen hat.\n\nViele neue Kolleginnen und Kollegen kennen sie als Mentorin, mit deren Hilfe sie sich schnell eingearbeitet haben. Auch unser neues Ticketsystem, dessen Einführung anfangs viele Probleme machte, läuft dank ihrer Geduld inzwischen reibungslos.\n\nBesonders schätzen wir ihre ruhige Art. Kunden, deren Beschwerden andere vielleicht ungeduldig machen würden, behandelt sie immer freundlich und fair.\n\nIn ihrer Freizeit trainiert Fatma eine Mädchen-Fußballmannschaft, in deren Spielen sie lauter jubelt als alle Eltern.\n\nHerzlichen Glückwunsch, Fatma!",
      "explanation": "\"Dessen\" refers back to a masculine or neuter noun (\"im Kundenservice, dessen Leitung\", \"Ticketsystem, dessen Einführung\"), and \"deren\" to a feminine or plural noun (\"Fatma Arslan, deren Arbeit\", \"Kunden, deren Beschwerden\"). After a preposition, the preposition comes first (\"mit deren Hilfe\", \"in deren Spielen\"), and the verb always goes to the end of the relative clause."
    }
  ],
  "b2-thematic-review-das-weingut": [
    {
      "type": "write",
      "prompt": "Write a short portrait for a regional magazine of a young person who has taken over a family business, such as a vineyard, a farm or a workshop.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses at least two relative clauses with \"dessen\" or \"deren\", one of them after a preposition.",
        "Reports a regret with \"hätte\" + double infinitive (\"Ich hätte früher ... sollen\").",
        "Uses Futur II for a plan or prediction (\"Bis 2030 wird sie ... umgestellt haben\").",
        "Keeps a journalistic style that mixes description and short quotations."
      ],
      "modelAnswer": "Neuer Wein von der Mosel\n\nLena Brück ist 29 und leitet seit zwei Jahren das Weingut ihrer Familie in Bernkastel-Kues, dessen Geschichte bis ins Jahr 1820 zurückgeht. Ihr Vater, mit dessen Unterstützung sie den Betrieb übernommen hat, hilft noch bei der Ernte.\n\nIhre ersten Monate waren nicht leicht. „Ich hätte früher in die Praxis gehen sollen, anstatt so lange zu studieren“, sagt sie lachend. Heute arbeitet sie mit vier Mitarbeiterinnen, deren Erfahrung sie sehr schätzt.\n\nLena setzt auf Nachhaltigkeit. Die steilen Weinberge, an deren Hängen schon ihr Urgroßvater Riesling anbaute, werden inzwischen ohne Pestizide bewirtschaftet. „Bis 2030 werden wir den ganzen Betrieb auf Bio umgestellt haben“, erklärt sie.\n\nIhr neuer Riesling wurde im Frühjahr schon prämiert.",
      "explanation": "\"Dessen Geschichte\" refers back to \"das Weingut\" and \"mit dessen Unterstützung\" to \"ihr Vater\", while \"deren Erfahrung\" and \"an deren Hängen\" refer to plural nouns. The regret \"hätte ... gehen sollen\" puts both infinitives at the end, and \"werden ... umgestellt haben\" is a Futur II prediction with a deadline."
    }
  ],
  "b2-thematic-review-pflegeroboter": [
    {
      "type": "write",
      "prompt": "Care homes are starting to use robots that keep residents company and help the staff. Write a for-and-against essay on the question: \"Sollten Pflegeroboter in Altenheimen eingesetzt werden?\"",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Presents arguments on both sides with formal connectors (\"zum einen ... zum anderen\", \"zudem\", \"jedoch\", \"allerdings\").",
        "Uses passive alternatives (\"lässt sich\", \"ist zu\", \"-bar\") at least twice.",
        "Uses at least one subjective modal for a supposition (\"Das dürfte ...\", \"Roboter können ... nicht ersetzen\").",
        "Ends with a balanced conclusion stating your own view."
      ],
      "modelAnswer": "Sollten Pflegeroboter in Altenheimen eingesetzt werden?\n\nIn vielen Pflegeheimen fehlt Personal. Deshalb werden dort zunehmend Roboter getestet, die mit den Bewohnern sprechen, spielen oder Getränke bringen.\n\nFür den Einsatz spricht zum einen, dass sich viele Routineaufgaben leicht automatisieren lassen. Die Pflegekräfte hätten folglich mehr Zeit für die Menschen. Zum anderen sind Roboter rund um die Uhr verfügbar. Für einsame Bewohner dürfte das eine echte Hilfe sein.\n\nAllerdings ist zu bedenken, dass alte Menschen vor allem menschliche Nähe brauchen. Ein Roboter kann ein Gespräch mit einer Pflegerin nicht ersetzen. Zudem sind die Geräte teuer, und es ist unklar, was mit den gesammelten Daten passiert.\n\nMeiner Meinung nach sollten Roboter das Personal nur unterstützen, jedoch nie ersetzen.",
      "explanation": "The essay balances the arguments with \"zum einen ... zum anderen\", \"allerdings\" and \"zudem\", and ends with a clear position introduced by \"Meiner Meinung nach\". \"Lassen sich ... automatisieren\", \"ist zu bedenken\" and \"verfügbar\" are passive alternatives, and \"dürfte ... sein\" is a cautious supposition."
    }
  ],
  "b2-thematic-review-lernen-beim-meister": [
    {
      "type": "write",
      "prompt": "You are a master carpenter. A new apprentice starts on Monday. Write a note with instructions for her first week in the workshop.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Gives instructions with passive alternatives (\"ist zu tragen\", \"lässt sich\", \"man\", \"muss ... werden\").",
        "Uses at least two extended participle attributes (\"die frisch geölten Bretter\", \"das im Regal liegende Werkzeug\").",
        "Uses an emphatic structure at least once (\"Was mir am wichtigsten ist, ist ...\", \"Es ist die Sicherheit, die ...\").",
        "Addresses the apprentice in a friendly but clear way."
      ],
      "modelAnswer": "Liebe Emma,\n\nherzlich willkommen in unserer Werkstatt! Hier ein paar wichtige Hinweise für deine erste Woche:\n\nWas mir am wichtigsten ist, ist die Sicherheit. An den Maschinen sind immer eine Schutzbrille und Gehörschutz zu tragen. Die Kreissäge darf in der ersten Woche nur zusammen mit mir benutzt werden.\n\nDas im Regal liegende Werkzeug ist für dich. Die Hobel lassen sich leicht einstellen, ich zeige es dir am Montag. Die frisch geölten Bretter an der hinteren Wand dürfen nicht angefasst werden, sie müssen noch zwei Tage trocknen.\n\nAm Ende jedes Tages wird die Werkstatt gemeinsam aufgeräumt. Späne und Holzreste kommen in die grüne Tonne.\n\nBei Fragen kannst du mich oder Herrn Kühn jederzeit ansprechen.\n\nBis Montag!\nMeister Hoffmann",
      "explanation": "Instructions use \"sind ... zu tragen\", \"darf ... benutzt werden\", \"lassen sich ... einstellen\" and the passive \"wird ... aufgeräumt\", so the rules sound general rather than personal. \"Das im Regal liegende Werkzeug\" and \"die frisch geölten Bretter\" are participle attributes, and \"Was mir am wichtigsten ist, ist die Sicherheit\" puts the key point in focus."
    }
  ],
  "b2-thematic-review-ueberwachung": [
    {
      "type": "write",
      "prompt": "Your city wants to install more video cameras at the main station. Write a post for a local online forum giving your opinion.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "States your opinion clearly and supports it with at least two arguments linked by connectors (\"zudem\", \"jedoch\", \"dennoch\", \"folglich\").",
        "Uses the Zustandspassiv at least once (\"Der Bahnhof ist bereits ... ausgestattet\").",
        "Uses nominal style in at least two phrases (\"die Erhöhung der Sicherheit\", \"zur Aufklärung von Straftaten\").",
        "Admits a counter-argument before concluding."
      ],
      "modelAnswer": "Mehr Kameras am Hauptbahnhof? Ja, aber mit Grenzen\n\nIch fahre jeden Tag mit dem Zug zur Arbeit und finde, dass mehr Videoüberwachung am Hauptbahnhof sinnvoll ist.\n\nZum einen kann sie zur Aufklärung von Straftaten beitragen. Bei Diebstählen oder Angriffen ist die Polizei auf Bildmaterial angewiesen. Zudem fühlen sich viele Menschen abends sicherer, wenn sie wissen, dass der Bahnsteig überwacht ist.\n\nAllerdings ist der Bahnhof schon heute mit über dreißig Kameras ausgestattet, und die Zahl der Straftaten ist dennoch kaum gesunken. Eine Erhöhung der Sicherheit erreicht man folglich nicht nur durch Technik, sondern vor allem durch mehr Personal.\n\nMein Fazit: Neue Kameras ja, aber die Daten müssen nach wenigen Tagen gelöscht werden. Der Schutz der Privatsphäre darf nicht vergessen werden.",
      "explanation": "\"Ist ... überwacht\" and \"ist ... ausgestattet\" are the Zustandspassiv, describing a state rather than an action. Nominal phrases like \"zur Aufklärung von Straftaten\", \"eine Erhöhung der Sicherheit\" and \"der Schutz der Privatsphäre\" give the post a formal tone, and \"allerdings\", \"dennoch\" and \"folglich\" introduce the counter-argument and its consequence."
    }
  ],
  "b2-word-web-politics": [
    {
      "type": "write",
      "prompt": "You are standing for election to your city's youth council (Jugendparlament). Write a short campaign speech for a school assembly.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses at least four political terms (\"die Wahl\", \"der Antrag\", \"die Stimme\", \"der Gemeinderat\", \"die Abgeordneten\", \"durchsetzen\").",
        "Uses the passive or a passive alternative to describe decisions (\"Das muss beschlossen werden\", \"wurde abgelehnt\").",
        "Makes promises with Futur I or Futur II (\"Bis zum Sommer werden wir ... erreicht haben\").",
        "Addresses the audience directly and ends with an appeal."
      ],
      "modelAnswer": "Liebe Mitschülerinnen und Mitschüler,\n\nam 12. Mai wählen wir ein neues Jugendparlament, und ich bitte euch um eure Stimme.\n\nWarum ich kandidiere? Weil Jugendliche in unserer Stadt zu selten gehört werden. Letztes Jahr wurde der Antrag für einen neuen Skatepark im Gemeinderat abgelehnt, ohne dass auch nur ein Jugendlicher gefragt wurde. Das darf nicht wieder passieren.\n\nMeine drei Ziele: günstigere Bustickets für Schüler, mehr Räume für Jugendgruppen und endlich den Skatepark. Ich werde mich dafür einsetzen, dass diese Themen im Stadtrat diskutiert werden. Bis zum Ende der Amtszeit werden wir mindestens zwei dieser Ziele durchgesetzt haben, das verspreche ich euch.\n\nDemokratie beginnt nicht erst mit achtzehn. Geht am 12. Mai wählen!",
      "explanation": "Political vocabulary such as \"die Stimme\", \"der Antrag\", \"der Gemeinderat\", \"die Amtszeit\" and \"durchsetzen\" fits the topic, and passives like \"wurde ... abgelehnt\" and \"gehört werden\" describe what institutions do. The promises use Futur I (\"Ich werde mich ... einsetzen\") and Futur II (\"werden ... durchgesetzt haben\")."
    }
  ],
  "b2-word-web-dreams": [
    {
      "type": "write",
      "prompt": "Write a diary entry about a strange dream you had last night, and what you think it might mean.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses vocabulary from the topic (\"der Albtraum\", \"träumen von\", \"sich einbilden\", \"sich etwas vorstellen\").",
        "Uses \"als ob\" or \"so tun, als ob\" with the Konjunktiv II.",
        "Uses at least one unreal condition or wish in the Konjunktiv II.",
        "Tells the dream in the past and ends with a personal reflection."
      ],
      "modelAnswer": "Dienstag, 6. Februar\n\nHeute Nacht habe ich wieder von meiner alten Schule geträumt. Es war kein richtiger Albtraum, aber ziemlich unheimlich.\n\nIch stand in meinem alten Klassenzimmer, und alle taten so, als ob ich nie weg gewesen wäre. Meine Mathelehrerin gab mir eine Prüfung, aber die Aufgaben waren auf Japanisch. Ich konnte nichts lesen. Plötzlich verwandelte sich die Tafel in ein Fenster, und draußen war das Meer. Es fühlte sich an, als könnte ich fliegen.\n\nAls ich aufwachte, bildete ich mir einen Moment lang ein, ich müsste wirklich zur Schule. Ich kann mir gut vorstellen, dass der Traum mit meiner Prüfung nächste Woche zu tun hat.\n\nWenn ich doch nur wirklich fliegen könnte! Dann wäre ich jetzt am Meer.",
      "explanation": "\"Träumen von\", \"der Albtraum\", \"sich einbilden\" and \"sich vorstellen\" come from the word web, and \"taten so, als ob ich nie weg gewesen wäre\" and \"als könnte ich fliegen\" are unreal comparisons. The entry ends with a wish in the Konjunktiv II (\"Wenn ich doch nur ... könnte!\") and its unreal consequence (\"Dann wäre ich ...\")."
    }
  ],
  "b2-thematic-review-wer-sitzt-am-anderen-ende": [
    {
      "type": "write",
      "prompt": "Your friend has been chatting online for weeks with someone she has never met, and you suspect the profile is fake. Write her a message explaining your doubts.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Expresses suppositions with subjective modals (\"Das muss ... sein\", \"Er könnte ...\", \"Das kann nicht ...\").",
        "Uses \"als ob\" or \"als\" + Konjunktiv II for how something seems (\"Es klingt, als ob ...\").",
        "Uses Futur II with \"wohl\" to guess about the past (\"Er wird die Fotos wohl ... kopiert haben\").",
        "Gives advice in a caring, informal tone."
      ],
      "modelAnswer": "Liebe Sophie,\n\nich muss dir was sagen, auch wenn es dir vielleicht nicht gefällt. Ich habe mir das Profil von „Lukas“ noch einmal genau angesehen, und irgendwas stimmt da nicht.\n\nSeine Fotos sehen aus, als ob sie aus einer Werbung wären. Ich habe eins davon im Internet gesucht: Es gehört einem Model aus Schweden! Er wird die Bilder wohl einfach kopiert haben. Und dass er nie Zeit für einen Videoanruf hat, kann kein Zufall sein.\n\nAußerdem klingen seine Nachrichten manchmal, als hätte sie jemand übersetzt. Es könnte sogar sein, dass mehrere Leute hinter dem Profil stecken. Wenn er bald nach Geld fragt, muss es ein Betrüger sein.\n\nBitte schick ihm kein Geld und triff ihn nur an einem öffentlichen Ort. Ich mache mir Sorgen um dich!\n\nDeine Marie",
      "explanation": "\"Sehen aus, als ob sie aus einer Werbung wären\" and \"klingen, als hätte sie jemand übersetzt\" describe how things seem with the Konjunktiv II. \"Wird ... wohl ... kopiert haben\" is a Futur II guess about the past, and \"kann kein Zufall sein\", \"könnte sein\" and \"muss ... sein\" show different degrees of certainty."
    }
  ],
  "b2-spiral-mixed-der-kummerkasten": [
    {
      "type": "write",
      "prompt": "You write an advice column for a magazine. A reader has written to you about a problem with a colleague who takes credit for her work. Write your answer: summarise her letter and give advice.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Summarises the reader's letter in indirect speech with Konjunktiv I (\"Sie schreiben, Ihre Kollegin sei ...\").",
        "Gives advice with the Konjunktiv II (\"An Ihrer Stelle würde ich ...\", \"Sie könnten ...\").",
        "Uses \"als ob\" at least once.",
        "Structures the advice with connectors (\"zunächst\", \"zudem\", \"allerdings\", \"andernfalls\")."
      ],
      "modelAnswer": "Liebe Frau K.,\n\nSie schreiben, Ihre Kollegin präsentiere Ihre Ideen in Besprechungen als ihre eigenen. Ihr Chef merke davon nichts, und Sie hätten Angst, als Petze zu gelten.\n\nIch verstehe Ihren Ärger gut. Es ist unfair, wenn jemand so tut, als ob er die ganze Arbeit allein gemacht hätte.\n\nAn Ihrer Stelle würde ich zunächst das direkte Gespräch mit der Kollegin suchen. Vielleicht ist ihr gar nicht bewusst, wie ihr Verhalten wirkt. Zudem könnten Sie Ihre Ideen in Zukunft per E-Mail an das ganze Team schicken. So ist immer klar, von wem sie stammen.\n\nAllerdings sollten Sie nicht zu lange warten, andernfalls wird sich das Verhalten Ihrer Kollegin kaum ändern. Hilft das Gespräch nicht, sollten Sie mit Ihrem Chef sprechen, und zwar sachlich und mit Beispielen.\n\nIch wünsche Ihnen viel Erfolg!",
      "explanation": "The reader's account is summarised in Konjunktiv I (\"präsentiere\", \"merke\"), with \"hätten\" replacing \"haben\", which would look like the indicative. The advice uses the Konjunktiv II (\"würde ich ... suchen\", \"könnten Sie ... schicken\"), \"so tut, als ob er ... gemacht hätte\" describes the colleague's behaviour, and \"zunächst\", \"zudem\" and \"allerdings\" structure the answer."
    }
  ],
  "b2-word-web-personal-growth": [
    {
      "type": "write",
      "prompt": "Write a letter to yourself to open in one year. Describe the goals you have set, the setbacks you expect, and what you will have achieved by then.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses vocabulary of personal growth (\"sich Ziele setzen\", \"Fortschritte machen\", \"durchhalten\", \"der Rückschlag\", \"sich weiterentwickeln\").",
        "Uses Futur II at least twice for what will have been achieved (\"Bis dahin wirst du ... bestanden haben\").",
        "Links ideas with at least two connectors (\"zudem\", \"allerdings\", \"trotzdem\", \"deshalb\").",
        "Addresses your future self as \"du\"."
      ],
      "modelAnswer": "Liebe Elif in einem Jahr,\n\nheute ist der 1. Januar, und ich habe mir drei Ziele gesetzt.\n\nErstens möchte ich die C1-Prüfung in Deutsch bestehen. Bis du diesen Brief öffnest, wirst du hoffentlich jeden Tag gelernt und große Fortschritte gemacht haben. Zweitens will ich einen Halbmarathon laufen. Drittens möchte ich mich beruflich weiterentwickeln und eine Weiterbildung im Projektmanagement anfangen.\n\nAllerdings weiß ich, dass es Rückschläge geben wird. Vielleicht wirst du krank gewesen sein oder die Motivation verloren haben. Trotzdem hoffe ich, dass du durchgehalten hast. Vergiss außerdem nicht: Auch kleine Schritte zählen.\n\nWenn du nur eines der Ziele erreicht hast, sei bitte trotzdem stolz auf dich. Genau deshalb schreibe ich dir diesen Brief: Du sollst sehen, wie weit du gekommen bist.\n\nAlles Liebe\nElif von heute",
      "explanation": "The letter uses the vocabulary of growth: \"sich Ziele setzen\", \"Fortschritte machen\", \"sich weiterentwickeln\", \"Rückschläge\" and \"durchhalten\". Futur II (\"wirst ... gelernt und ... gemacht haben\", \"wirst ... krank gewesen sein\") looks back from the moment the letter is opened, and \"allerdings\", \"trotzdem\", \"außerdem\" and \"deshalb\" link the ideas."
    }
  ],
  "b2-word-web-performing-arts": [
    {
      "type": "write",
      "prompt": "Write a review of a play, opera or dance performance you have seen (or would like to see) for a student newspaper.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses vocabulary of the performing arts (\"die Aufführung\", \"die Inszenierung\", \"die Bühne\", \"das Publikum\", \"der Beifall\", \"die Zugabe\").",
        "Uses at least two participle attributes (\"das begeisterte Publikum\", \"die mit Spiegeln verkleidete Bühne\").",
        "Uses an emphatic structure (\"Was mich am meisten überzeugt hat, war ...\", \"Es war vor allem ..., die ...\").",
        "Ends with a clear recommendation."
      ],
      "modelAnswer": "„Faust“ im Stadttheater: Mutig und modern\n\nAm Samstag habe ich die neue Inszenierung von Goethes „Faust“ im Stadttheater gesehen. Schon die Bühne war eine Überraschung: Statt eines Studierzimmers sah man einen dunklen, mit Bildschirmen gefüllten Raum.\n\nWas mich am meisten überzeugt hat, war die Darstellung des Mephisto. Es war vor allem die junge Schauspielerin Mara Lenz, die mit ihrer leisen, fast freundlichen Art das Publikum fesselte. Faust selbst wirkte dagegen manchmal etwas blass.\n\nNicht alles hat funktioniert. Die zahlreichen Videoeinspielungen störten in der zweiten Hälfte eher. Trotzdem gab es am Ende minutenlangen Beifall vom begeisterten Publikum.\n\nMein Fazit: Eine mutige Aufführung, die man gesehen haben sollte, auch wenn man den Klassiker schon kennt. Karten gibt es noch für die Vorstellungen im März.",
      "explanation": "Theatre vocabulary such as \"die Inszenierung\", \"die Bühne\", \"die Aufführung\", \"die Vorstellung\", \"das Publikum\" and \"der Beifall\" fits the genre. \"Einen dunklen, mit Bildschirmen gefüllten Raum\" and \"vom begeisterten Publikum\" are participle attributes, and \"Was mich am meisten überzeugt hat, war ...\" and \"Es war vor allem ..., die ...\" put the focus on the strongest point."
    }
  ],
  "b2-spiral-mixed-welt-des-konjunktivs": [
    {
      "type": "write",
      "prompt": "Write a short life story of one of your grandparents or another older person you know. Include what they told you about their life, what would have happened if things had gone differently, and what they wish.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Reports what the person told you in Konjunktiv I (\"Sie erzählte, sie sei ... gewesen\").",
        "Uses at least one unreal past condition with \"hätte\" / \"wäre\" + participle.",
        "Uses \"als ob\" or \"als\" + Konjunktiv II at least once.",
        "Narrates the facts in the Präteritum."
      ],
      "modelAnswer": "Meine Großmutter Hilde wurde 1941 in einem Dorf in Ostpreußen geboren. Als sie vier Jahre alt war, floh die Familie nach Westen. Sie erzählte mir oft, sie habe auf der Flucht ihre Puppe verloren und tagelang geweint.\n\nIn Hannover lernte sie Schneiderin und eröffnete später ein kleines Geschäft. Eigentlich wollte sie Lehrerin werden. Sie sagte, ihr Vater habe das nicht erlaubt, weil Mädchen damals nicht studieren sollten. Wenn sie studiert hätte, wäre sie vielleicht nie nach Hannover gekommen und hätte meinen Großvater nicht kennengelernt.\n\nHeute ist sie 84, aber sie redet manchmal, als wäre sie noch zwanzig. Sie meint, sie würde gern noch einmal das Dorf ihrer Kindheit sehen. Nächsten Sommer fahren wir zusammen hin.",
      "explanation": "The facts of her life are in the Präteritum (\"wurde geboren\", \"floh\", \"eröffnete\"), and what she told the writer is reported in Konjunktiv I (\"sie habe ... verloren\", \"ihr Vater habe ... erlaubt\"). \"Wenn sie studiert hätte, wäre sie ... gekommen\" imagines a different past, and \"als wäre sie noch zwanzig\" is an unreal comparison."
    }
  ],
  "b2-comprehensive-review-3": [
    {
      "type": "write",
      "prompt": "A colleague who has worked with you for many years is retiring. Write a short farewell speech for her leaving party.",
      "minWords": 80,
      "maxWords": 150,
      "rubric": [
        "Uses at least two formal connectors (\"zudem\", \"jedoch\", \"darüber hinaus\", \"nämlich\").",
        "Uses a relative clause with \"dessen\" or \"deren\" and at least one genitive preposition (\"während\", \"anlässlich\", \"aufgrund\").",
        "Uses emphasis in the Vorfeld or a cleft-like structure (\"Was wir an dir am meisten schätzen, ist ...\").",
        "Addresses the colleague and the guests and ends with good wishes."
      ],
      "modelAnswer": "Liebe Kolleginnen und Kollegen, liebe Gisela,\n\nanlässlich deines Abschieds möchte ich ein paar Worte sagen. Fast dreißig Jahre warst du in unserer Firma, deren Entwicklung du wie kaum jemand sonst geprägt hast.\n\nWährend deiner Zeit in der Buchhaltung hast du drei Chefs, zwei Umzüge und unzählige Computerprogramme erlebt. Deine Ruhe hast du dabei nie verloren. Was wir an dir am meisten schätzen, ist jedoch etwas anderes: Du hattest immer ein offenes Ohr für alle. Viele von uns, deren erste Tage hier nicht leicht waren, haben bei dir Rat gefunden. Darüber hinaus hast du uns jeden Freitag mit deinem Apfelkuchen verwöhnt.\n\nWir werden dich sehr vermissen. Ganz verlieren wir dich aber nicht, du hast nämlich versprochen, uns oft zu besuchen.\n\nAlles Gute für deinen Ruhestand, liebe Gisela!",
      "explanation": "\"Anlässlich deines Abschieds\" and \"während deiner Zeit\" are genitive prepositions, and \"deren Entwicklung\" and \"deren erste Tage\" are genitive relatives referring to a feminine and a plural noun. \"Deine Ruhe hast du ... nie verloren\" puts the object in the Vorfeld for emphasis, \"Was wir an dir am meisten schätzen, ist ...\" focuses on the key point, and \"jedoch\", \"darüber hinaus\" and \"nämlich\" link the ideas."
    }
  ]
};
