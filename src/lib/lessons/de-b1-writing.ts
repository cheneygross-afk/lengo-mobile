// Synced from cheneygross-afk/lengo:src/lib/lessons/de-b1-writing.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { UnitWriting } from "./unitWriting";

// Extra writing tasks for this level's units, so every unit asks the learner to
// write at least three times: keyed by the lesson each is added to (see
// unitWriting.ts). Marked by the AI writing feedback like every writing task.
export const DE_B1_WRITING: UnitWriting = {
  "b1-talk-about-you-warst-du-schon-mal": [
    {
      "type": "write",
      "prompt": "A language-exchange app asks you to complete the profile section \"Warst du schon mal...?\". Write a short text about your experiences: two things you have already done, two things you have never done, and one thing you haven't done yet but want to do soon. End with a question for your future tandem partner.",
      "minWords": 60,
      "maxWords": 110,
      "rubric": [
        "Uses \"schon (mal)\" + Perfekt for experiences you have had.",
        "Uses \"noch nie\" for things you have never done and \"noch nicht\" for something still to come.",
        "Chooses the right auxiliary: \"sein\" for movement and change (\"bin geflogen\", \"bin gewesen\"), \"haben\" for the rest.",
        "Asks a question with \"Warst du schon mal...?\" or \"Hast du schon mal...?\"."
      ],
      "modelAnswer": "Hallo! Ich heiße Sofia und komme aus Valencia. Ich bin schon zweimal in Deutschland gewesen: Vor drei Jahren bin ich nach Berlin geflogen, und letzten Sommer habe ich einen Sprachkurs in München gemacht. Ich habe auch schon mal in einem Chor gesungen, das war toll! Aber ich bin noch nie Ski gefahren, weil ich ein bisschen Angst vor Bergen habe. Und ich habe noch nie Sauerkraut gegessen. Den Hamburger Hafen habe ich noch nicht gesehen, aber das möchte ich nächstes Jahr unbedingt machen. Warst du schon mal in Spanien?",
      "explanation": "\"Schon\" + Perfekt presents experiences (\"bin gewesen\", \"habe gesungen\"), \"noch nie\" says it has never happened and \"noch nicht\" implies it still might. \"Fliegen\" and \"fahren\" take \"sein\" because they are movement, while \"singen\", \"essen\" and \"sehen\" take \"haben\"."
    }
  ],
  "b1-dialogue-lab-wie-war-dein-wochenende": [
    {
      "type": "write",
      "prompt": "It's Monday morning at work. Write a short dialogue between you and a colleague: the colleague asks about your weekend, you tell what happened in order, and the colleague reacts to your story.",
      "minWords": 70,
      "maxWords": 130,
      "rubric": [
        "Tells the events in the Perfekt with the right auxiliary (\"bin gefahren\", \"haben besichtigt\").",
        "Orders the story with \"zuerst\", \"dann\" and \"danach\", each followed directly by the verb.",
        "Uses \"war\", \"hatte\" or \"es gab\" to describe what it was like.",
        "Includes reactions such as \"Echt?\", \"Das klingt toll!\" or \"Oh nein!\"."
      ],
      "modelAnswer": "Lukas: Morgen, Anna! Wie war dein Wochenende?\nAnna: Ach, ziemlich chaotisch! Am Samstag bin ich mit meiner Schwester nach Köln gefahren. Zuerst haben wir den Dom besichtigt, dann sind wir am Rhein spazieren gegangen.\nLukas: Das klingt doch schön!\nAnna: Ja, aber danach hat es plötzlich geregnet, und wir hatten keinen Schirm dabei.\nLukas: Oh nein! Was habt ihr dann gemacht?\nAnna: Wir sind in ein Café gegangen. Es gab dort leckeren Apfelkuchen, und wir sind zwei Stunden geblieben.\nLukas: Echt? Dann war der Regen ja gar nicht so schlimm!\nAnna: Genau! Und wie war dein Wochenende?",
      "explanation": "Anna tells the actions in the Perfekt, with \"sein\" for movement (\"bin gefahren\", \"sind gegangen\", \"sind geblieben\") and \"haben\" for the rest, while \"war\", \"hatten\" and \"es gab\" describe the situation. \"Zuerst\", \"dann\" and \"danach\" take position 1, so the auxiliary follows straight after them."
    }
  ],
  "b1-pattern-praeteritum-strong-verbs": [
    {
      "type": "write",
      "prompt": "A German children's magazine is collecting new fairy tales from readers. Write a short fairy tale in the Präteritum that begins with \"Es war einmal...\". Include a magic animal or object and a clear ending.",
      "minWords": 70,
      "maxWords": 120,
      "rubric": [
        "Opens with \"Es war einmal...\" and tells the whole story in the Präteritum.",
        "Uses at least four strong verbs with a vowel change and no ending in the er-form (\"ging\", \"sah\", \"sprach\", \"nahm\", \"fand\").",
        "Uses weak verbs with -te (\"wünschte\", \"erzählte\", \"lachte\").",
        "Moves the story on with time words (\"Eines Morgens\", \"Plötzlich\", \"Am nächsten Tag\") followed by the verb."
      ],
      "modelAnswer": "Es war einmal ein armer Fischer. Eines Morgens ging er wie immer zum See und warf sein Netz ins Wasser. Plötzlich sah er einen goldenen Fisch. Der Fisch sprach: „Lass mich frei, dann bekommst du drei Wünsche.“ Der Fischer nahm den Fisch vorsichtig und ließ ihn zurück ins Wasser. Dann lief er nach Hause und erzählte seiner Frau alles. Sie wünschte sich zuerst ein neues Haus, dann ein Schloss und schließlich eine Krone. Doch am nächsten Morgen fand der Fischer nur seine alte Hütte. Seine Frau weinte, aber der Fischer lachte, denn er hatte ja seinen See.",
      "explanation": "Written fairy tales use the Präteritum throughout. Strong verbs change their vowel and add nothing in the er-form (\"ging\", \"warf\", \"sah\", \"sprach\", \"nahm\", \"ließ\", \"lief\", \"fand\"), while weak verbs add -te (\"erzählte\", \"wünschte\", \"weinte\", \"lachte\"). Every fronted time word is followed directly by the verb."
    }
  ],
  "b1-praeteritum-writing-2": [
    {
      "type": "write",
      "prompt": "Write a diary entry about your first day at a new job or school. Write it in the Präteritum, as German diaries do: when you got up, how you got there, who you met and what you thought.",
      "minWords": 70,
      "maxWords": 120,
      "rubric": [
        "Writes the whole entry in the Präteritum, not the Perfekt.",
        "Uses at least two mixed verbs (\"brachte\", \"dachte\", \"kannte\", \"wusste\").",
        "Splits separable verbs in main clauses (\"stand ... auf\", \"kam ... an\", \"rief ... an\").",
        "Includes a subordinate clause (weil, dass) with the verb at the end."
      ],
      "modelAnswer": "Montag, 3. März\n\nHeute war mein erster Tag im neuen Büro. Ich stand schon um sechs Uhr auf, weil ich so nervös war. Ich fuhr mit dem Bus und kam um halb acht an. Meine Chefin brachte mich zu meinem Schreibtisch und stellte mich den Kollegen vor. Ich kannte niemanden, aber alle waren sehr freundlich. Am Vormittag verstand ich fast nichts, und ich wusste nicht einmal, wo die Küche war. Ich dachte: Das schaffe ich nie! Mittags lud mich ein Kollege zum Essen ein. Am Abend rief ich meine Mutter an und erzählte ihr alles.",
      "explanation": "A diary is written German, so every verb is in the Präteritum. Mixed verbs change their vowel and add -te (\"brachte\", \"kannte\", \"wusste\", \"dachte\"), and separable verbs split in main clauses (\"stand ... auf\", \"stellte ... vor\", \"lud ... ein\", \"rief ... an\"). \"Weil\" and \"wo\" send the verb to the end."
    }
  ],
  "b1-plusquamperfekt-2": [
    {
      "type": "write",
      "prompt": "A German blog has a column called \"Mein Pechtag\" (my unlucky day). Write a short anecdote about a day when everything went wrong because of something you had (or hadn't) done earlier. Order the events with nachdem.",
      "minWords": 70,
      "maxWords": 120,
      "rubric": [
        "Uses the Plusquamperfekt (hatte/war + participle) for what had happened before.",
        "Uses at least two nachdem-clauses with the Plusquamperfekt and the verb at the end.",
        "Puts the main verb straight after the comma when the nachdem-clause comes first.",
        "Tells the main story in the Präteritum."
      ],
      "modelAnswer": "Letzten Freitag hatte ich einen echten Pechtag. Am Abend vorher hatte ich lange gearbeitet und meinen Wecker nicht gestellt. Am Morgen wachte ich erst um halb neun auf. Nachdem ich schnell geduscht hatte, lief ich zur Haltestelle. Aber der Bus war schon abgefahren. Ich nahm ein Taxi, und nachdem ich endlich im Büro angekommen war, merkte ich, dass ich meinen Laptop zu Hause vergessen hatte. Mein Chef war nicht begeistert, denn er hatte die Besprechung extra für mich organisiert. Nachdem ich den Laptop geholt hatte, war es schon Mittag. Seit diesem Tag stelle ich jeden Abend zwei Wecker!",
      "explanation": "The Plusquamperfekt marks what happened earlier: \"hatte gearbeitet\", \"hatte vergessen\", but \"war abgefahren\" and \"war angekommen\" with \"sein\" for movement. \"Nachdem\" takes the Plusquamperfekt with the verb last, while the main clause stays in the Präteritum and starts with its verb (\"Nachdem ich ... hatte, lief ich...\")."
    }
  ],
  "b1-vocabulary-practice-1": [
    {
      "type": "write",
      "prompt": "You arrived very late at a friend's birthday party yesterday because of train problems. Write a text message to your friend: apologise and explain what had happened on the journey.",
      "minWords": 50,
      "maxWords": 100,
      "rubric": [
        "Uses the Plusquamperfekt for what had already happened (\"war schon abgefahren\", \"waren schon gegangen\").",
        "Uses travel verbs such as \"abfahren\", \"ankommen\", \"umsteigen\", \"Verspätung haben\".",
        "Tells the rest in the Perfekt or with \"war\", \"hatte\" and the modals in the Präteritum.",
        "Apologises and suggests making up for it."
      ],
      "modelAnswer": "Hi Lena, sorry noch mal wegen gestern! Ich wollte pünktlich bei dir sein und war extra früh losgefahren. Leider hatte mein ICE in Frankfurt eine Stunde Verspätung, und mein Anschlusszug war natürlich schon abgefahren. Ich bin dann mit dem Regionalzug weitergefahren und musste noch zweimal umsteigen. Erst um elf bin ich angekommen. Da waren die meisten Gäste schon gegangen. Schade, ich hatte mich so auf die Party gefreut! Darf ich dich nächste Woche zum Essen einladen? LG, Tom",
      "explanation": "\"War losgefahren\", \"war abgefahren\" and \"waren gegangen\" are Plusquamperfekt: they happened before the moment Tom is describing, and they take \"sein\" because they are movement. The main events stay in the spoken Perfekt (\"bin weitergefahren\", \"bin angekommen\") with \"wollte\", \"hatte\" and \"musste\" in the Präteritum."
    }
  ],
  "b1-circuit-verb-comma-verb": [
    {
      "type": "write",
      "prompt": "A travel blog is collecting stories about readers' first trips abroad. Write a short anecdote about your first trip: what happened when you arrived, what you always did when..., and how it ended. Start at least three sentences with the time clause.",
      "minWords": 70,
      "maxWords": 120,
      "rubric": [
        "Uses \"als\" for single events or periods in the past.",
        "Uses \"(immer) wenn\" for things that happened repeatedly.",
        "Starts at least three sentences with the time clause, with the main verb straight after the comma.",
        "Tells the story in the Präteritum."
      ],
      "modelAnswer": "Als ich sechzehn war, durfte ich zum ersten Mal allein ins Ausland fahren. Ich besuchte eine Gastfamilie in Bologna. Als ich am Bahnhof ankam, wartete niemand auf mich, und ich hatte große Angst. Nach einer halben Stunde kam endlich meine Gastmutter. Die Familie war sehr nett. Immer wenn wir zusammen aßen, erklärte mir der Vater neue Wörter. Wenn es regnete, spielten wir abends Karten. Als ich nach drei Wochen nach Hause fuhr, weinte ich im Zug. Ich hatte dort echte Freunde gefunden.",
      "explanation": "\"Als\" marks one event or period (\"Als ich sechzehn war\", \"Als ich ankam\"), while \"immer wenn\" and \"wenn\" mark things that happened again and again. When the clause comes first it fills position 1, so the main verb follows the comma directly (\"..., wartete niemand\", \"..., erklärte mir der Vater\")."
    }
  ],
  "b1-als-wenn-wann-2": [
    {
      "type": "write",
      "prompt": "A German friend is coming to visit you next month. Write an email: ask when exactly they arrive and leave, say what you will do together when they're there, and what you'll do if the weather is bad.",
      "minWords": 60,
      "maxWords": 110,
      "rubric": [
        "Uses \"wann\" in direct questions and in indirect questions (\"Weißt du schon, wann...?\").",
        "Uses \"wenn\" + present tense for future events and for conditions.",
        "Puts the verb at the end of every wann- and wenn-clause.",
        "Starts the main clause with its verb after a fronted wenn-clause."
      ],
      "modelAnswer": "Liebe Clara,\n\nich freue mich so, dass du nächsten Monat kommst! Weißt du schon, wann dein Flug ankommt? Wenn du mir die Uhrzeit schreibst, hole ich dich am Flughafen ab. Wenn du da bist, zeige ich dir zuerst die Altstadt. Am Wochenende können wir ans Meer fahren, wenn das Wetter schön ist. Wenn es regnet, gehen wir ins Museum oder kochen zusammen. Sag mir bitte auch, wann du wieder zurückfliegen musst. Und wann hast du eigentlich Geburtstag? Im Mai, oder?\n\nBis bald!\nDeine Marta",
      "explanation": "\"Wann\" only asks a question, either directly (\"Wann hast du Geburtstag?\") or indirectly with the verb at the end (\"Weißt du schon, wann dein Flug ankommt?\"). For future visits and conditions German uses \"wenn\" + present, and after a fronted wenn-clause the main verb comes first (\"Wenn es regnet, gehen wir...\")."
    }
  ],
  "b1-bis-seitdem-sobald": [
    {
      "type": "write",
      "prompt": "Write a short blog post about a change in your daily life (a new way to get to work, a new hobby, a new city). Say how things have been since the change, what you do while..., and what you'll do as soon as / until something happens.",
      "minWords": 70,
      "maxWords": 120,
      "rubric": [
        "Uses \"seitdem\" (or \"seit\") + present tense for something that is still going on.",
        "Uses \"während\" for two things happening at the same time.",
        "Uses \"sobald\" and \"bis\" with the verb at the end of the clause.",
        "Puts the main verb straight after a fronted time clause."
      ],
      "modelAnswer": "Seitdem ich mit dem Fahrrad zur Arbeit fahre, fühle ich mich viel fitter. Früher saß ich jeden Morgen im Stau, bis ich endlich im Büro war. Heute brauche ich nur zwanzig Minuten. Während ich fahre, höre ich Podcasts oder denke über den Tag nach. Natürlich ist es nicht immer leicht: Wenn es regnet, komme ich manchmal nass an. Aber sobald ich geduscht habe, ist alles wieder gut. Ich fahre so lange mit dem Rad, bis es im Winter zu kalt wird. Und sobald der Frühling kommt, hole ich es wieder aus dem Keller!",
      "explanation": "\"Seitdem\" takes the present because the habit is still going on (\"Seitdem ich ... fahre, fühle ich mich...\"). \"Während\" links two actions at the same time, \"bis\" marks the end point and \"sobald\" means as soon as; all of them send the verb to the end, and a fronted clause is followed directly by the main verb."
    }
  ],
  "b1-real-world-mission-anleitung": [
    {
      "type": "write",
      "prompt": "A new flatmate is moving in while you're away. Write a note to leave on the kitchen table explaining how to use the washing machine and the heating and what to do with the rubbish, in the right order.",
      "minWords": 60,
      "maxWords": 110,
      "rubric": [
        "Orders the steps with \"bevor\", \"sobald\", \"nachdem\" and \"während\", each with the verb at the end.",
        "Uses the Perfekt in the nachdem-clause and the present in the main clause.",
        "Gives instructions with the du-imperative (\"dreh\", \"mach\", \"stell\").",
        "Uses \"bis\" for a time limit."
      ],
      "modelAnswer": "Hallo Jonas,\n\nherzlich willkommen in der WG! Hier ein paar Tipps:\nBevor du die Waschmaschine anmachst, musst du den Wasserhahn hinter der Maschine aufdrehen. Sobald die Wäsche fertig ist, dreh ihn bitte wieder zu. Die Heizung im Bad funktioniert nur, wenn du den kleinen Knopf links drückst. Während du duschst, mach bitte das Fenster zu. Den Müll trennen wir in Papier, Plastik und Restmüll. Nachdem du den Müll rausgebracht hast, stell die Eimer bitte wieder unter die Spüle. Bis ich am Sonntag zurück bin, kannst du gern mein Fahrrad benutzen.\n\nViele Grüße\nMia",
      "explanation": "The connectors put the steps in order: \"bevor\" for the step before, \"sobald\" for as soon as, \"während\" for at the same time and \"bis\" for the time limit, all with the verb at the end. \"Nachdem\" moves one tense back, so the Perfekt (\"rausgebracht hast\") pairs with a present-tense instruction."
    }
  ],
  "b1-pattern-ich-wuerde-gern": [
    {
      "type": "write",
      "prompt": "A travel website is running a competition called \"Mein Traumurlaub\". The photo shows a small red wooden house by a lake, with a boat and a forest. Write a description of the picture and say what you would do if you could spend two weeks there.",
      "minWords": 60,
      "maxWords": 110,
      "rubric": [
        "Describes what you see in the picture in the present indicative.",
        "Uses \"würde (gern)\" + infinitive at the end of the clause for imagined actions.",
        "Uses \"wäre\" and \"hätte\" instead of \"würde sein\" / \"würde haben\".",
        "Uses at least one modal in the Konjunktiv II (\"könnte\", \"müsste\")."
      ],
      "modelAnswer": "Auf dem Bild sieht man ein kleines rotes Holzhaus an einem See. Vor dem Haus liegt ein Boot, und hinter dem Haus ist ein großer Wald. Dort würde ich gern zwei Wochen Urlaub machen. Morgens würde ich im See schwimmen und danach auf der Terrasse frühstücken. Mittags würde ich mit dem Boot zum anderen Ufer fahren. Ich hätte kein Handy dabei, und niemand könnte mich anrufen. Abends würde ich am Feuer sitzen und lesen. Ich müsste nicht arbeiten und hätte endlich Zeit für mich. Das wäre perfekt!",
      "explanation": "The picture itself is real, so it is described in the indicative (\"sieht man\", \"liegt\", \"ist\"). Everything imagined is Konjunktiv II: \"würde\" + infinitive at the end for most verbs, but the one-word forms \"wäre\", \"hätte\", \"könnte\" and \"müsste\" for sein, haben and the modals."
    }
  ],
  "b1-real-world-mission-wishes-for-everyone": [
    {
      "type": "write",
      "prompt": "Write short New Year's messages to three people: a friend, an older relative and a colleague you call Sie. For each one, add a wish and a gentle suggestion for the new year.",
      "minWords": 60,
      "maxWords": 110,
      "rubric": [
        "Uses \"wäre\" and \"hätte\" for wishes (\"Es wäre schön, wenn...\").",
        "Makes suggestions with \"könnte\" / \"könnten\" (\"Vielleicht könnten wir...\").",
        "Gives gentle advice with \"solltest\" or \"Wie wäre es mit...?\".",
        "Uses du and Sie correctly, with the right greeting for each person."
      ],
      "modelAnswer": "Liebe Anna,\nfrohes neues Jahr! Es wäre so schön, wenn wir uns öfter sehen könnten. Vielleicht könnten wir jeden Monat zusammen kochen?\n\nLieber Opa,\nalles Gute für das neue Jahr! Ich hoffe, du bleibst gesund. Du solltest aber wirklich nicht mehr so viel im Garten arbeiten. Wie wäre es mit einer Woche Urlaub an der Ostsee?\n\nLiebe Frau Weber,\nich wünsche Ihnen ein gutes neues Jahr und danke Ihnen für Ihre Hilfe! Ich hätte eine Idee für das neue Jahr: Vielleicht könnten wir im Team öfter zusammen Mittag essen?",
      "explanation": "\"Wäre\" and \"hätte\" express wishes and ideas politely, \"könnte\" turns a suggestion into a soft question, and \"solltest\" and \"Wie wäre es mit...?\" give friendly advice. The register changes with the person: \"du\" and \"dir\" for friends and family, \"Ihnen\" and \"Ihre\" for the colleague."
    }
  ],
  "b1-wishes-ich-wuenschte": [
    {
      "type": "write",
      "prompt": "Write a diary entry at the end of a stressful week. Describe what is going wrong at the moment and say what you wish were different, but also say what you realistically hope for.",
      "minWords": 70,
      "maxWords": 120,
      "rubric": [
        "Uses \"Ich wünschte, ...\" + Konjunktiv II (\"hätte\", \"wäre\", \"könnte\").",
        "Uses \"Wenn ... doch nur ...!\" with the verb at the end.",
        "Describes the real situation in the present indicative.",
        "Contrasts an unreal wish with a realistic hope (\"Ich hoffe, dass...\" + indicative)."
      ],
      "modelAnswer": "Freitag, 22 Uhr\n\nWas für eine Woche! Ich arbeite jeden Tag bis acht und habe keine Zeit für meine Freunde. Ich wünschte, ich hätte einen anderen Job. Mein Chef ist nie zufrieden, und die Kollegen sind auch gestresst. Wenn ich doch nur mehr Geduld hätte! Und meine Wohnung ist zu klein und zu laut. Ich wünschte, ich könnte in einem Haus mit Garten wohnen. Seit zehn Tagen regnet es auch noch. Wenn doch nur endlich die Sonne scheinen würde! Aber ich hoffe, dass das Wochenende ruhiger wird. Morgen treffe ich Lisa, das tut mir bestimmt gut.",
      "explanation": "The real situation is in the indicative (\"arbeite\", \"ist\", \"regnet\"), while unreal wishes use \"Ich wünschte\" + Konjunktiv II (\"hätte\", \"könnte\") and \"Wenn ... doch nur\" with the verb last. \"Ich hoffe, dass...\" stays in the indicative because the hope is realistic."
    }
  ],
  "b1-dialogue-lab-am-schalter": [
    {
      "type": "write",
      "prompt": "Your train to Munich has been cancelled and you need to get there today. Write a dialogue at the station ticket counter: ask politely for help and for alternatives, clear up a misunderstanding about the time, and thank the clerk.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Makes polite requests with \"Könnten Sie...?\", \"Hätten Sie...?\" or \"Dürfte ich...?\".",
        "Asks for alternatives with \"Gäbe es auch...?\".",
        "Clears up a misunderstanding (\"Entschuldigung, um ... oder um ...?\").",
        "Thanks the clerk and uses Sie throughout."
      ],
      "modelAnswer": "Sie: Guten Tag! Könnten Sie mir bitte helfen? Mein Zug nach München ist ausgefallen.\nMitarbeiter: Das tut mir leid. Der nächste ICE fährt um 15:10 Uhr.\nSie: Gäbe es auch eine frühere Verbindung? Ich müsste spätestens um sechs in München sein.\nMitarbeiter: Es gibt einen Regionalzug um 13:40 Uhr, aber da müssen Sie zweimal umsteigen.\nSie: Das ist kein Problem. Dürfte ich mit meinem Ticket auch diesen Zug nehmen?\nMitarbeiter: Ja, Ihr Ticket gilt heute für alle Züge. Der Zug fährt um 14:40 Uhr ab Gleis 5.\nSie: Entschuldigung, um 14:40 oder um 13:40?\nMitarbeiter: Oh, Verzeihung, um 13:40 Uhr natürlich.\nSie: Alles klar. Vielen Dank, Sie waren sehr freundlich!",
      "explanation": "The traveller softens every request with the Konjunktiv II: \"Könnten Sie...?\", \"Gäbe es...?\", \"Ich müsste...\" and \"Dürfte ich...?\". The clerk answers with facts in the indicative (\"Es gibt\", \"fährt\"), and the misunderstanding is cleared up with a short polite question."
    }
  ],
  "b1-minimal-pairs-wenn-ich-habe-haette": [
    {
      "type": "write",
      "prompt": "A friend has invited you to a barbecue on Saturday, but you're not sure you can come. Write a text message reply: say under which real conditions you'll come, and what you would do if things were different.",
      "minWords": 50,
      "maxWords": 100,
      "rubric": [
        "Uses \"wenn\" or \"falls\" + present indicative for real possibilities.",
        "Uses \"wenn\" + \"hätte\" / \"wäre\" with \"würde\" or \"könnte\" for unreal conditions.",
        "Puts the verb at the end of the condition and first in the main clause after it.",
        "Includes \"Wenn ich du wäre, ...\" or another unreal suggestion."
      ],
      "modelAnswer": "Hi Paul, danke für die Einladung! Ich weiß noch nicht genau, ob ich kommen kann. Wenn ich am Samstag früh mit der Arbeit fertig bin, komme ich gern. Falls es später wird, schreibe ich dir. Wenn ich ein Auto hätte, wäre alles einfacher, dann könnte ich auch Getränke mitbringen. Mit dem Bus dauert es leider über eine Stunde. Grillt ihr auch, wenn es regnet? Und wenn ich du wäre, würde ich auch Lena einladen. Sie hätte bestimmt Lust! LG, Sara",
      "explanation": "Real, likely conditions take the indicative (\"Wenn ich fertig bin, komme ich\", \"Falls es später wird, schreibe ich\"), while unreal ones take the Konjunktiv II in both halves (\"Wenn ich ein Auto hätte, wäre alles einfacher\"). After a fronted condition, the main clause starts with its verb."
    }
  ],
  "b1-dialogue-lab-im-reisebuero": [
    {
      "type": "write",
      "prompt": "You want a week's holiday by the sea in October. Write a dialogue in a travel agency: ask about options and prices, react to the offers with real and unreal conditions, and make a decision.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses \"wenn\" and \"falls\" + indicative for real options (\"Falls Sie früher buchen, ...\").",
        "Uses \"wenn\" + Konjunktiv II for an unreal condition (\"Wenn es ... gäbe, würde ich...\").",
        "Makes polite requests and questions with \"Was würde ... kosten?\" or \"Könnten Sie...?\".",
        "Ends with a decision."
      ],
      "modelAnswer": "Kundin: Guten Tag, ich suche eine Reise ans Meer im Oktober, für eine Woche.\nMitarbeiter: Gern. Wenn Sie Sonne möchten, empfehle ich Ihnen Mallorca oder Kreta.\nKundin: Was würde eine Woche auf Kreta kosten?\nMitarbeiter: Mit Flug und Hotel ungefähr 900 Euro. Falls Sie diese Woche buchen, bekommen Sie zehn Prozent Rabatt.\nKundin: Das ist mir ein bisschen zu teuer. Wenn es ein günstigeres Hotel gäbe, würde ich sofort buchen.\nMitarbeiter: Es gibt eine kleine Pension direkt am Strand für 750 Euro.\nKundin: Perfekt! Könnten Sie mir das Angebot bis morgen reservieren? Falls mein Mann nicht mitkommen kann, rufe ich Sie an.\nMitarbeiter: Natürlich, kein Problem.",
      "explanation": "The agent's options are real, so they use \"wenn\" / \"falls\" + indicative (\"Falls Sie diese Woche buchen, bekommen Sie...\"). The customer's \"Wenn es ein günstigeres Hotel gäbe, würde ich sofort buchen\" is unreal at that moment, so both halves are Konjunktiv II, and \"Was würde ... kosten?\" and \"Könnten Sie...?\" keep the requests polite."
    }
  ],
  "b1-pattern-join-nom-akk": [
    {
      "type": "write",
      "prompt": "You've found an old class photo from primary school. Write a description of it for a friend: who and what can be seen, joining the details with relative clauses instead of starting a new sentence each time.",
      "minWords": 60,
      "maxWords": 110,
      "rubric": [
        "Uses nominative relative pronouns (\"der\", \"die\", \"das\") for the subject of the clause.",
        "Uses accusative relative pronouns (\"den\", \"die\", \"das\") for the object.",
        "Puts the conjugated verb at the end of every relative clause.",
        "Puts commas around every relative clause."
      ],
      "modelAnswer": "Auf dem Foto sieht man meine Klasse im Jahr 2005. Der Junge, der ganz links steht, ist mein bester Freund Tim. Das Mädchen, das neben ihm sitzt, heißt Sara. Sie trägt den roten Pullover, den ihre Oma gestrickt hat. In der Mitte steht unsere Lehrerin Frau Klein, die wir alle sehr mochten. Den Ball, den ich in der Hand halte, hat mir mein Vater geschenkt. Im Hintergrund sieht man die alte Schule, die es heute leider nicht mehr gibt. Die Kinder, die hinten stehen, kenne ich nicht mehr.",
      "explanation": "Each relative pronoun takes gender and number from its noun and case from its role in the clause: subject \"der\" / \"das\" / \"die\" (\"der Junge, der ... steht\"), object \"den\" / \"die\" (\"den Pullover, den ihre Oma gestrickt hat\", \"die wir ... mochten\"). The verb always goes to the end, and commas close off the clause."
    }
  ],
  "b1-themed-review-learning-to-drive": [
    {
      "type": "write",
      "prompt": "Write a short anecdote about how you learned to drive, ride a bike or swim. Describe the people who helped you and what happened, using relative clauses in the dative and genitive as well as the nominative and accusative.",
      "minWords": 70,
      "maxWords": 120,
      "rubric": [
        "Uses dative relative pronouns (\"dem\", \"der\", \"denen\") after verbs such as \"helfen\", \"danken\" or \"erzählen\".",
        "Uses \"dessen\" or \"deren\" for whose, with no article after it.",
        "Uses nominative and accusative relative pronouns with the verb at the end.",
        "Tells the story in the past (Präteritum or Perfekt)."
      ],
      "modelAnswer": "Autofahren habe ich mit achtzehn gelernt. Mein Fahrlehrer war Herr Braun, ein ruhiger Mann, dessen Auto immer nach Kaffee roch. In der ersten Stunde fuhr ich fast gegen einen Baum, aber er blieb ganz ruhig. Meine Mutter, der ich das später erzählte, hatte mehr Angst als er. Am Wochenende übte ich mit meinem Onkel, dem ich bis heute dankbar bin. Er hatte einen alten VW, dessen Bremsen nicht gut funktionierten. Die Prüfung, die ich im Mai machte, bestand ich beim ersten Mal. Die Freunde, denen ich sofort davon erzählte, wollten natürlich gleich mitfahren.",
      "explanation": "Dative relatives follow dative verbs and adjectives: \"der ich das erzählte\", \"dem ich dankbar bin\", \"denen ich ... erzählte\". \"Dessen\" means whose and is followed directly by the noun (\"dessen Auto\", \"dessen Bremsen\"), and every relative clause ends with its verb."
    }
  ],
  "b1-wo-was-wer": [
    {
      "type": "write",
      "prompt": "Your German course is ending and there's a small farewell party. Write a short speech: thank the teacher and the group, and say what you will remember about the course and the places where you met.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Uses \"was\" after \"alles\", \"nichts\" or a superlative (\"das Beste, was...\").",
        "Uses \"wo\" (or a preposition + relative pronoun) for a place.",
        "Uses \"Wer ..., (der) ...\" for whoever.",
        "Addresses the audience with a suitable greeting and closing."
      ],
      "modelAnswer": "Liebe Frau Schmidt, liebe Freundinnen und Freunde,\n\nheute ist unser letzter Kurstag, und ich möchte kurz Danke sagen. Alles, was ich auf Deutsch sagen kann, habe ich hier gelernt. Das Beste, was mir in diesem Jahr passiert ist, war dieser Kurs. Ich werde den kleinen Raum, wo wir jeden Dienstag gesessen haben, sehr vermissen. Es gibt nichts, was Sie uns nicht erklärt haben, Frau Schmidt! Und wer einmal Ihre Grammatikspiele gespielt hat, der vergisst den Dativ nie wieder. Ich hoffe, wir sehen uns bald wieder in dem Café, in dem wir nach dem Kurs immer Kuchen gegessen haben.\n\nVielen Dank!",
      "explanation": "After \"alles\", \"nichts\" and the superlative \"das Beste\" the relative word is \"was\", not \"das\". \"Wo\" (or \"in dem\") refers to a place, and \"Wer ..., der ...\" makes a general statement about whoever does something; in every case the verb goes to the end."
    }
  ],
  "b1-themed-review-group-work": [
    {
      "type": "write",
      "prompt": "Your university group has just finished a project. Write a short report for your tutor: what the topic was, who you worked with, where you worked, what problem you had and how the result was received.",
      "minWords": 70,
      "maxWords": 120,
      "rubric": [
        "Uses at least three preposition + relative pronoun clauses (\"mit denen\", \"über das\", \"in der\").",
        "Lets the preposition decide the case and the noun decide the gender and number.",
        "Puts the verb at the end of every relative clause.",
        "Reports the events in the Perfekt or Präteritum in a neutral style."
      ],
      "modelAnswer": "Bericht über unser Gruppenprojekt\n\nUnser Projekt hatte das Thema „Fahrrad in der Stadt“, über das wir drei Wochen lang recherchiert haben. Ich habe mit zwei Kommilitonen gearbeitet, mit denen ich mich sehr gut verstanden habe. Wir haben meistens in der Bibliothek gearbeitet, in der es ruhige Gruppenräume gibt. Die Umfrage, für die wir fünfzig Radfahrer interviewt haben, war der wichtigste Teil. Leider ist der Laptop, auf dem alle Daten waren, in der zweiten Woche kaputtgegangen. Zum Glück hatte Jana vorher eine Kopie gemacht. Die Präsentation, an der wir lange gearbeitet haben, hat am Ende allen gut gefallen.",
      "explanation": "The preposition comes first and decides the case, while the noun decides gender and number: \"das Thema, über das\" (accusative), \"Kommilitonen, mit denen\" (dative plural), \"der Laptop, auf dem\" (dative), \"die Präsentation, an der\" (arbeiten an + dative). The conjugated verb closes each clause."
    }
  ],
  "b1-zu-infinitive-2": [
    {
      "type": "write",
      "prompt": "Write a short anecdote about a morning when you were in a terrible hurry and did everything wrong. Say what you did to achieve something, what you did without doing something else, and what you did instead of something.",
      "minWords": 70,
      "maxWords": 120,
      "rubric": [
        "Uses \"um ... zu\" to say why you did something.",
        "Uses \"ohne ... zu\" and \"statt ... zu\".",
        "Puts \"zu\" inside separable verbs (\"mitzunehmen\", \"zurückzufahren\", \"anzurufen\").",
        "Puts the zu-infinitive at the very end of its clause, separated by a comma."
      ],
      "modelAnswer": "Letzten Montag habe ich verschlafen. Statt in Ruhe zu frühstücken, habe ich nur schnell einen Kaffee getrunken. Ich bin aus dem Haus gerannt, ohne meine Jacke mitzunehmen, und es war natürlich eiskalt. Um den Bus noch zu erreichen, bin ich die ganze Straße entlanggelaufen. Im Bus habe ich gemerkt, dass ich mein Handy vergessen hatte. Statt zurückzufahren, bin ich weiter ins Büro gefahren. Dort habe ich versucht, meine Chefin vom Festnetz anzurufen, um ihr alles zu erklären. Aber ich kannte ihre Nummer nicht auswendig! Am Ende habe ich den ganzen Tag ohne Handy gearbeitet, und es war eigentlich sehr entspannt.",
      "explanation": "\"Um ... zu\" gives the purpose, \"ohne ... zu\" what was not done and \"statt ... zu\" what was done instead; each has its infinitive at the very end. With separable verbs, \"zu\" goes between prefix and stem (\"mitzunehmen\", \"zurückzufahren\", \"anzurufen\")."
    }
  ],
  "b1-qa-hast-du-lust": [
    {
      "type": "write",
      "prompt": "A friend writes to you: \"Hast du Lust, am Samstag mit mir wandern zu gehen?\" Write a short chat exchange (five or six messages) in which you turn down the day with a reason, suggest an alternative, and agree on a plan.",
      "minWords": 60,
      "maxWords": 110,
      "rubric": [
        "Uses phrases with zu + infinitive such as \"Hast du Lust, ... zu ...?\", \"Ich habe keine Zeit, ... zu ...\", \"Es macht mir Spaß, ... zu ...\".",
        "Uses verbs that take zu, such as \"versprechen\" or \"vergessen\".",
        "Puts \"zu\" inside separable verbs (\"aufzustehen\", \"loszufahren\").",
        "Uses no \"zu\" after modal verbs."
      ],
      "modelAnswer": "Mia: Hast du Lust, am Samstag mit mir wandern zu gehen?\nIch: Leider habe ich am Samstag keine Zeit. Ich habe meiner Mutter versprochen, ihr beim Umzug zu helfen.\nMia: Schade! Und am Sonntag?\nIch: Sonntag passt! Aber ich habe keine Lust, so früh aufzustehen. Wäre es okay, erst um zehn loszufahren?\nMia: Klar! Vergiss nicht, gute Schuhe anzuziehen. Der Weg ist ziemlich steil.\nIch: Mach ich. Es macht mir Spaß, neue Wege kennenzulernen. Ich kann auch Brötchen mitbringen!",
      "explanation": "Nouns and phrases like \"Lust haben\", \"keine Zeit haben\" and \"Es macht Spaß\", and verbs like \"versprechen\" and \"vergessen\", are followed by a zu-infinitive at the end of the sentence. Separable verbs take \"zu\" in the middle (\"aufzustehen\", \"loszufahren\", \"anzuziehen\"), but after a modal there is no \"zu\" (\"Ich kann ... mitbringen\")."
    }
  ],
  "b1-talk-about-you-warum-deutsch": [
    {
      "type": "write",
      "prompt": "You're applying for a scholarship for a summer language course in Germany. Write a short formal letter of motivation: explain why you are learning German, what you want to achieve on the course, and why the scholarship would help.",
      "minWords": 70,
      "maxWords": 120,
      "rubric": [
        "Uses \"um ... zu\" when you are the subject of both parts.",
        "Uses \"damit\" when the subject changes, with the verb at the end.",
        "Uses \"für\" + noun for a purpose (\"für meine Bewerbung\").",
        "Follows formal letter conventions (Sehr geehrte..., Mit freundlichen Grüßen, Sie)."
      ],
      "modelAnswer": "Sehr geehrte Damen und Herren,\n\nhiermit bewerbe ich mich um ein Stipendium für Ihren Sommerkurs in Leipzig. Ich lerne seit zwei Jahren Deutsch, um später in Deutschland als Ingenieurin zu arbeiten. Im Kurs möchte ich vor allem viel sprechen, um im Beruf sicherer zu werden. Außerdem brauche ich ein Zertifikat für meine Bewerbung bei einer deutschen Firma. Ein Stipendium wäre eine große Hilfe, damit meine Eltern nicht alle Kosten tragen müssen. Über eine positive Antwort würde ich mich sehr freuen.\n\nMit freundlichen Grüßen\nLucía Fernández",
      "explanation": "\"Um ... zu\" is used when the writer is also the one who acts (\"Ich lerne ..., um ... zu arbeiten\"), while \"damit\" introduces a new subject with the verb at the end (\"damit meine Eltern ... tragen müssen\"). \"Für\" + noun expresses a purpose without a verb (\"für meine Bewerbung\")."
    }
  ],
  "b1-damit-um-zu-2": [
    {
      "type": "write",
      "prompt": "Write an online customer review of a household gadget you bought recently (a robot vacuum, a coffee machine, a bread maker...). Say what it's for, why you bought it, what the result is, and one problem.",
      "minWords": 60,
      "maxWords": 110,
      "rubric": [
        "Uses \"zum\" + noun from a verb (\"zum Kochen\", \"zum Planen\") or \"für\" + noun for purpose.",
        "Uses \"um ... zu\" or \"damit\" to explain why.",
        "Uses \"sodass\" or \"so ..., dass\" for the result, with the verb at the end.",
        "Gives a clear overall opinion."
      ],
      "modelAnswer": "Praktisch, aber laut – vier von fünf Sternen\n\nIch habe den Saugroboter gekauft, um weniger Zeit mit Putzen zu verbringen. Er ist ideal für kleine Wohnungen. Die App ist super zum Planen: Ich starte den Roboter morgens, damit die Wohnung sauber ist, wenn ich nach Hause komme. Das funktioniert sehr gut, sodass ich jetzt nur noch einmal pro Woche selbst putzen muss. Leider ist das Gerät so laut, dass meine Katze jedes Mal unter das Bett läuft. Trotzdem empfehle ich ihn allen, die wenig Zeit haben.",
      "explanation": "\"Um ... zu\" and \"damit\" give the purpose, \"zum Planen\" (zum + capitalised verb) and \"für kleine Wohnungen\" do the same with a noun. \"Sodass\" and \"so laut, dass\" introduce the result, with the verb at the end of the clause."
    }
  ],
  "b1-talk-about-you-wishes-this-year": [
    {
      "type": "write",
      "prompt": "Write a letter to yourself that you will open in one year. Say what you wish were different now, what you hope will have happened, and what you're planning to do to get there.",
      "minWords": 70,
      "maxWords": 130,
      "rubric": [
        "Uses \"Ich wünschte, ...\" + Konjunktiv II for unreal wishes.",
        "Uses \"Ich hoffe, dass ...\" + indicative for realistic hopes.",
        "Uses \"Ich habe vor\" / \"Ich habe mir vorgenommen\" + zu-infinitive, and \"um ... zu\".",
        "Includes one real condition (wenn / falls + indicative) and one unreal one (wenn + Konjunktiv II)."
      ],
      "modelAnswer": "Liebe Ana,\n\nwenn du diesen Brief liest, ist ein Jahr vorbei. Im Moment bin ich nicht ganz zufrieden. Ich wünschte, ich hätte mehr Zeit für Sport und für meine Freunde. Ich wünschte auch, mein Deutsch wäre schon besser. Ich hoffe, dass du inzwischen eine neue Stelle gefunden hast. Ich habe vor, jeden Tag zwanzig Minuten Deutsch zu lernen, um im Sommer die B1-Prüfung zu machen. Außerdem habe ich mir vorgenommen, weniger Kaffee zu trinken. Falls du das alles nicht geschafft hast, sei nicht traurig! Wenn ich du wäre, würde ich einfach weitermachen.\n\nAlles Liebe\nAna",
      "explanation": "Unreal wishes take \"Ich wünschte\" + Konjunktiv II (\"hätte\", \"wäre\"), while \"Ich hoffe, dass...\" stays in the indicative because it can happen. Plans use \"vorhaben\" / \"sich vornehmen\" + zu-infinitive, and the letter contrasts a real condition (\"Falls du ... nicht geschafft hast\") with an unreal one (\"Wenn ich du wäre, würde ich...\")."
    }
  ],
  "b1-vocabulary-practice-5": [
    {
      "type": "write",
      "prompt": "You want to apply for a residents' parking permit (Anwohnerparkausweis). Write a formal email to your town's citizens' office: say what you want, ask which documents you need and how high the fee is, and ask whether you can get an appointment soon.",
      "minWords": 70,
      "maxWords": 130,
      "rubric": [
        "Uses polite Konjunktiv II forms (\"hätte\", \"Könnten Sie...?\", \"Wäre es möglich, ...?\").",
        "Uses \"falls\" + indicative for a possibility.",
        "Uses \"um ... zu\" and \"damit\" correctly.",
        "Uses vocabulary such as \"der Antrag\", \"beantragen\", \"das Formular\", \"die Gebühr\", \"die Unterlagen\"."
      ],
      "modelAnswer": "Sehr geehrte Damen und Herren,\n\nich möchte einen Anwohnerparkausweis beantragen und hätte dazu einige Fragen. Welche Unterlagen brauche ich, um den Antrag zu stellen? Könnten Sie mir außerdem sagen, wie hoch die Gebühr ist? Falls man das Formular auch online ausfüllen kann, würde ich das gern tun. Unten finden Sie meine Adresse, damit Sie prüfen können, ob ich in der Parkzone wohne. Wäre es möglich, noch in diesem Monat einen Termin zu bekommen? Mein alter Ausweis ist nämlich nur bis zum 30. November gültig.\n\nVielen Dank im Voraus.\n\nMit freundlichen Grüßen\nTom Becker",
      "explanation": "Polite Konjunktiv II forms (\"hätte\", \"Könnten Sie\", \"würde\", \"Wäre es möglich\") keep the tone formal. \"Um ... zu\" is used because the writer is the one who submits the application, while \"damit\" introduces the office as a new subject. \"Falls\" + indicative covers a real possibility."
    }
  ],
  "b1-pattern-wird-werden": [
    {
      "type": "write",
      "prompt": "You work at a youth hostel. Write an information sheet for new guests explaining what is done when and where: breakfast, cleaning, towels, the front door, bikes and rubbish.",
      "minWords": 50,
      "maxWords": 100,
      "rubric": [
        "Uses \"wird\" + participle for singular subjects and \"werden\" + participle for plural subjects.",
        "Puts the participle at the very end of the clause.",
        "Leaves out who does the action, because the action is what matters.",
        "Adds times and places for each piece of information."
      ],
      "modelAnswer": "Herzlich willkommen in der Jugendherberge Bergblick!\n\nDas Frühstück wird von 7 bis 9 Uhr im Speisesaal serviert. Lunchpakete werden nur auf Bestellung gemacht. Die Zimmer werden jeden Tag um 11 Uhr geputzt, und die Handtücher werden zweimal pro Woche gewechselt. Die Haustür wird um 23 Uhr abgeschlossen. Wenn Sie später kommen, bekommen Sie an der Rezeption einen Code. Fahrräder werden im Keller abgestellt. Der Müll wird getrennt: Die Tonnen stehen hinter dem Haus.\n\nWir wünschen Ihnen einen schönen Aufenthalt!",
      "explanation": "The present passive is a form of \"werden\" + participle at the end: \"wird\" for a singular subject (\"Das Frühstück wird ... serviert\") and \"werden\" for a plural one (\"Die Zimmer werden ... geputzt\"). Nobody is named, because for guests only the action matters."
    }
  ],
  "b1-story-detective-wer-war-es": [
    {
      "type": "write",
      "prompt": "Write a short mystery story in the Präteritum: something valuable was stolen from an office, the police investigated, and at the end the reader finds out who was really responsible.",
      "minWords": 70,
      "maxWords": 120,
      "rubric": [
        "Uses \"wurde\" / \"wurden\" + participle for what was done.",
        "Names the agent with \"von\" + dative (\"vom Hund\", \"von der Putzfrau\").",
        "Chooses singular or plural correctly (\"wurde gefunden\", \"wurden befragt\").",
        "Uses the active Präteritum for background and the ending."
      ],
      "modelAnswer": "Am Montagmorgen wurde im Büro von Frau Lang eine wertvolle Uhr gestohlen. Die Polizei wurde sofort gerufen, und alle Mitarbeiter wurden befragt. Aber niemand hatte etwas gesehen. Dann wurde unter dem Schreibtisch ein Schlüssel gefunden. Die Fingerabdrücke wurden genau untersucht, aber sie passten zu keinem Kollegen. Am Abend wurde die Uhr endlich entdeckt: in der Tasche des neuen Praktikanten! Doch der Praktikant war unschuldig. Die Uhr wurde nämlich vom Hund der Chefin in seine Tasche gelegt. Und der Schlüssel? Er wurde von der Putzfrau verloren.",
      "explanation": "The Präteritum passive is \"wurde\" (singular) or \"wurden\" (plural) + participle at the end: \"eine Uhr wurde gestohlen\", \"alle Mitarbeiter wurden befragt\". When the doer finally matters, it is added with \"von\" + dative (\"vom Hund der Chefin\", \"von der Putzfrau\")."
    }
  ],
  "b1-von-or-durch": [
    {
      "type": "write",
      "prompt": "A storm hit your town last night. Write a short news item for the local newspaper's website: what was damaged and by what, what has already been done, and what still has to be done.",
      "minWords": 60,
      "maxWords": 120,
      "rubric": [
        "Uses the Perfekt passive with \"ist / sind ... worden\" for what has been done.",
        "Uses the passive with a modal verb (\"muss repariert werden\", \"darf nicht betreten werden\").",
        "Uses \"durch\" + accusative for causes and \"von\" + dative for people or organisations.",
        "Writes in a neutral news style."
      ],
      "modelAnswer": "Sturm über Lindenfeld\n\nIn der Nacht zum Dienstag sind in Lindenfeld viele Häuser durch einen schweren Sturm beschädigt worden. Auf der Hauptstraße wurden zwei Autos durch einen umgestürzten Baum zerstört. Verletzt wurde zum Glück niemand. Die Straße ist inzwischen von der Feuerwehr freigeräumt worden, und auch der Strom ist am Morgen wieder eingeschaltet worden. Die Grundschule muss allerdings bis Freitag geschlossen bleiben, weil ihr Dach repariert werden muss. Der Stadtpark darf vorerst nicht betreten werden.",
      "explanation": "\"Sind ... beschädigt worden\" and \"ist ... freigeräumt worden\" are the Perfekt passive, with \"worden\", never \"geworden\". Causes take \"durch\" + accusative (\"durch einen schweren Sturm\"), while people and organisations take \"von\" + dative (\"von der Feuerwehr\"); with a modal, the passive infinitive goes to the end (\"repariert werden muss\")."
    }
  ],
  "b1-frequent-words-work-organisation": [
    {
      "type": "write",
      "prompt": "You're organising a company party next Friday. Write a status update for your team chat: what has already been done, what has been postponed or cancelled, and what still needs to be done by when.",
      "minWords": 50,
      "maxWords": 100,
      "rubric": [
        "Uses the Perfekt passive (\"ist gebucht worden\", \"sind verschickt worden\").",
        "Uses modal + passive infinitive for what still has to be done (\"muss bestellt werden\").",
        "Uses work vocabulary such as \"verschieben\", \"absagen\", \"erledigen\", \"die Besprechung\", \"die Frist\".",
        "Ends with a request or a thank-you to the team."
      ],
      "modelAnswer": "Hallo zusammen, kurzes Update zur Firmenfeier am Freitag: Der Raum ist gebucht worden, und die Einladungen sind schon am Montag verschickt worden. Das Essen ist auch bestellt worden. Leider ist der Termin mit dem Fotografen abgesagt worden, deshalb muss noch jemand für die Fotos gefunden werden. Die Getränke müssen bis Mittwoch bestellt werden, das ist die Frist. Die Besprechung zum Programm ist auf Donnerstag verschoben worden. Wer kann sich um die Deko kümmern? Danke euch! Nina",
      "explanation": "What is already finished is in the Perfekt passive (\"ist gebucht worden\", \"sind verschickt worden\", \"ist verschoben worden\"), and what is still open uses a modal + participle + \"werden\" (\"müssen ... bestellt werden\"). The passive keeps the focus on the tasks, not on who did them."
    }
  ],
  "b1-themed-review-new-job": [
    {
      "type": "write",
      "prompt": "Write a diary entry at the end of your first week in a new job: what you were afraid of, who took care of you, what you still need to get used to, what you're happy or annoyed about, and what you're looking forward to.",
      "minWords": 70,
      "maxWords": 120,
      "rubric": [
        "Uses verbs with prepositions + accusative (\"sich gewöhnen an\", \"sich kümmern um\", \"sich freuen auf\", \"sich ärgern über\").",
        "Uses expressions with prepositions + dative (\"Angst haben vor\", \"zufrieden sein mit\").",
        "Uses the right case and article after each preposition.",
        "Tells the week in the past and the feelings now in the present."
      ],
      "modelAnswer": "Freitag, 14. Februar\n\nDie erste Woche ist vorbei! Am Montag hatte ich noch große Angst vor dem ersten Meeting, aber alle waren sehr nett. Meine Kollegin Ayşe hat sich die ganze Woche um mich gekümmert und mir viel erklärt. An die langen Arbeitszeiten muss ich mich noch gewöhnen. Mit meinem Büro bin ich sehr zufrieden, denn es ist hell und ruhig. Nur über den Kaffee ärgere ich mich: Er schmeckt furchtbar! Ich interessiere mich sehr für das neue Projekt, und ich freue mich schon auf nächste Woche. Dann darf ich zum ersten Mal mit Kunden sprechen.",
      "explanation": "Each verb comes with its own preposition and case: accusative after \"sich kümmern um\", \"sich gewöhnen an\", \"sich ärgern über\", \"sich interessieren für\" and \"sich freuen auf\", dative after \"Angst haben vor\" and \"zufrieden sein mit\". Fronting the prepositional phrase (\"An die langen Arbeitszeiten muss ich...\") keeps the verb in second position."
    }
  ],
  "b1-themed-review-planning-a-party": [
    {
      "type": "write",
      "prompt": "Some friends are organising a surprise party for Leon's 30th birthday. Write a message to the group chat: who is taking care of what, who you're relying on, what nobody should talk to Leon about, and what you'll all do at the party.",
      "minWords": 60,
      "maxWords": 110,
      "rubric": [
        "Uses \"sich kümmern um\" and \"sich verlassen auf\" + accusative.",
        "Uses \"gratulieren zu\" and \"sich bedanken für\" with the right case.",
        "Uses \"einladen zu\" or \"sprechen über / mit\".",
        "Asks the group at least one question."
      ],
      "modelAnswer": "Hallo Leute! Kurzes Update zur Überraschungsparty für Leon: Ich kümmere mich um das Essen, und Sara sorgt für die Musik. Tim, kannst du dich um die Getränke kümmern? Wir haben schon dreißig Leute zur Party eingeladen. Am Samstag habe ich wenig Zeit, also verlasse ich mich auf euch! Bitte sprecht mit Leon auf keinen Fall über die Party. Er denkt, dass wir nur zusammen essen gehen. Um zehn wollen wir ihm alle zusammen zum Geburtstag gratulieren und uns bei seiner Freundin für die tolle Idee bedanken. Wer hilft mir beim Dekorieren?",
      "explanation": "The prepositions are fixed parts of the verbs: \"sich kümmern um\" + accusative, \"sich verlassen auf\" + accusative, \"einladen zu\" + dative and \"gratulieren zu\" + dative (\"zum Geburtstag\"). \"Sich bedanken\" takes \"bei\" for the person and \"für\" for the thing, and \"sprechen\" takes \"mit\" for the person and \"über\" for the topic."
    }
  ],
  "b1-themed-review-der-jakobsweg": [
    {
      "type": "write",
      "prompt": "You're on a long walking holiday. Write a postcard to a friend: tell them how it's going, what you've got used to, what you think about a lot, what annoys you and what you're looking forward to. Refer back to things with da-compounds.",
      "minWords": 60,
      "maxWords": 110,
      "rubric": [
        "Uses da-compounds to refer to things (\"daran\", \"darüber\", \"darauf\").",
        "Uses a da-compound that points forward to a zu-infinitive or dass-clause (\"Ich freue mich darauf, ... zu ...\").",
        "Keeps preposition + pronoun for people (\"mit ihr\", \"über ihn\").",
        "Uses verbs with prepositions (\"sich gewöhnen an\", \"nachdenken über\", \"sich ärgern über\")."
      ],
      "modelAnswer": "Liebe Jana,\n\nviele Grüße vom Jakobsweg! Ich bin jetzt seit einer Woche unterwegs und laufe jeden Tag fünfundzwanzig Kilometer. Am Anfang war das hart, aber ich habe mich schnell daran gewöhnt. Gestern habe ich eine Frau aus Kanada kennengelernt. Mit ihr spreche ich oft über das Leben, und abends denke ich lange darüber nach. Nur die vielen Mücken nerven: Darüber ärgere ich mich jeden Abend! Meine Füße tun weh, aber ich denke nicht daran aufzuhören. Jetzt freue ich mich schon darauf, in Santiago anzukommen.\n\nBis bald\ndein Max",
      "explanation": "Da-compounds replace preposition + thing: \"daran\" (an das Laufen), \"darüber\" (über das Leben, über die Mücken). \"Darauf, in Santiago anzukommen\" points forward to a zu-infinitive, while for a person the preposition keeps its pronoun (\"mit ihr\")."
    }
  ],
  "b1-real-world-mission-the-group-poll": [
    {
      "type": "write",
      "prompt": "Your German course is planning an outing in June. Write a message to the course group chat: ask what people are interested in, say what you're for and against, ask who will take care of what, and remind everyone to answer.",
      "minWords": 60,
      "maxWords": 110,
      "rubric": [
        "Uses wo-compounds to ask about things (\"Wofür...?\", \"Woran...?\").",
        "Uses preposition + \"wen\" / \"wem\" to ask about people (\"Mit wem...?\").",
        "Uses \"dafür\" / \"dagegen\" and a da-compound + zu-infinitive or dass-clause.",
        "Uses verbs with prepositions correctly (\"sich interessieren für\", \"sich kümmern um\", \"denken an\")."
      ],
      "modelAnswer": "Hallo zusammen! Wir wollen im Juni einen Ausflug machen. Wofür interessiert ihr euch mehr: für ein Museum oder für eine Wanderung? Ich bin dafür, eine Wanderung zu machen, denn wir sitzen sowieso jeden Tag im Kursraum. Ich bin aber nicht dagegen, ins Museum zu gehen, falls es regnet. Mit wem kann ich die Zugtickets organisieren? Und wer kümmert sich um das Picknick? Woran erinnert ihr euch noch vom letzten Ausflug? Ich erinnere mich vor allem daran, dass wir uns verlaufen haben! Bitte denkt daran, bis Freitag zu antworten.",
      "explanation": "For things the questions use wo-compounds (\"Wofür interessiert ihr euch?\", \"Woran erinnert ihr euch?\"), but for people the preposition stays with the question word (\"Mit wem...?\"). \"Dafür\", \"dagegen\" and \"daran\" point forward to a zu-infinitive or a dass-clause."
    }
  ],
  "b1-cumulative-circuit-at-the-doctors": [
    {
      "type": "write",
      "prompt": "Write a dialogue at the doctor's: you describe your symptoms and how long you've had them, explain what happened, and the doctor gives advice and instructions. Ask the doctor for something at the end.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses \"seit\" + present for how long you've had the problem.",
        "Uses the Perfekt for what happened.",
        "Includes the doctor's advice with \"Sie sollten...\" and an instruction with the Sie-imperative.",
        "Uses subordinate clauses (nachdem, wenn, relative clauses) with the verb at the end."
      ],
      "modelAnswer": "Ärztin: Guten Tag, was fehlt Ihnen denn?\nPatient: Ich habe seit drei Tagen starke Rückenschmerzen.\nÄrztin: Ist etwas passiert?\nPatient: Ja, am Wochenende bin ich umgezogen und habe viele schwere Kisten getragen. Seitdem kann ich kaum sitzen.\nÄrztin: Haben Sie schon etwas dagegen genommen?\nPatient: Nur eine Tablette, die mir meine Nachbarin gegeben hat.\nÄrztin: Sie sollten sich ein paar Tage ausruhen und nichts Schweres heben. Nehmen Sie diese Tabletten zweimal täglich, aber immer erst, nachdem Sie gegessen haben.\nPatient: Könnten Sie mir auch eine Krankmeldung für die Arbeit geben?\nÄrztin: Natürlich. Wenn es in einer Woche nicht besser ist, kommen Sie bitte wieder.",
      "explanation": "\"Seit drei Tagen\" + present (\"habe\") says the pain is still going on, and the Perfekt tells what caused it (\"bin umgezogen\", \"habe getragen\"). The doctor advises with \"Sie sollten\" and instructs with \"Nehmen Sie\", and the relative, nachdem- and wenn-clauses all end with their verb."
    }
  ],
  "b1-themed-review-family-reunion": [
    {
      "type": "write",
      "prompt": "Write a short story about a big family gathering you went to: what was happening when you arrived, who you talked to and about what, what people were pleased or annoyed about, and what you wish for the family now.",
      "minWords": 70,
      "maxWords": 120,
      "rubric": [
        "Uses \"als\"-clauses for single past events.",
        "Uses at least one relative clause.",
        "Uses verbs with prepositions and a da-compound + dass-clause (\"Ich habe mich darüber gefreut, dass...\").",
        "Ends with a wish in the Konjunktiv II (\"Ich wünschte, ...\")."
      ],
      "modelAnswer": "Letzten Sommer hat meine Oma ihren neunzigsten Geburtstag gefeiert. Als wir ankamen, saßen schon dreißig Verwandte im Garten. Mein Onkel Peter, den ich seit zehn Jahren nicht gesehen hatte, hat mich sofort umarmt. Wir haben lange über seine Reise nach Kanada gesprochen. Meine Cousinen haben sich die ganze Zeit über das Essen beschwert, aber ich habe mich vor allem darüber gefreut, dass alle da waren. Als die Torte kam, hat Oma vor Freude geweint. Ich wünschte, wir könnten uns öfter so treffen. Vielleicht organisiere ich nächstes Jahr selbst ein Familienfest!",
      "explanation": "\"Als\" marks the single moments of the day (\"Als wir ankamen\", \"Als die Torte kam\"), and the relative clause \"den ich ... nicht gesehen hatte\" adds detail about the uncle. \"Sprechen über\" and \"sich beschweren über\" take the accusative, \"darüber, dass...\" points forward to the reason, and \"Ich wünschte, wir könnten...\" expresses an unreal wish."
    }
  ],
  "b1-pattern-dative-adjectives": [
    {
      "type": "write",
      "prompt": "You're meeting a German pen friend for the first time at a busy station tomorrow. Write a text message describing what you look like, what you'll be wearing and carrying, and exactly where you'll wait, so that they recognise you.",
      "minWords": 50,
      "maxWords": 100,
      "rubric": [
        "Uses accusative endings after ein-words (\"einen langen Mantel\", \"eine schwarze Brille\").",
        "Uses dative endings after \"mit\", \"vor\" or \"neben\" (\"mit einem roten Schal\", \"vor dem großen Café\").",
        "Uses strong endings for plurals with no article (\"kurze, dunkle Haare\", \"weiße Turnschuhe\").",
        "Gives a precise meeting place."
      ],
      "modelAnswer": "Hallo Katrin, ich freue mich schon auf morgen! Damit du mich am Bahnhof erkennst: Ich bin ziemlich groß und habe kurze, dunkle Haare. Ich trage einen langen grauen Mantel mit einem roten Schal und eine schwarze Brille. In der Hand habe ich eine kleine blaue Tasche mit einem gelben Anhänger. Ich warte mit meinem kleinen Bruder vor dem großen Café neben Gleis 3. Er trägt eine grüne Mütze und weiße Turnschuhe. Wenn du uns nicht findest, ruf mich einfach an! Bis morgen, Elena",
      "explanation": "After ein-words in the accusative the adjective shows the gender (\"einen langen grauen Mantel\", \"eine schwarze Brille\"), while in the dative every ending is -en (\"mit einem roten Schal\", \"mit meinem kleinen Bruder\", \"vor dem großen Café\"). Plurals with no article take the strong ending -e (\"kurze, dunkle Haare\", \"weiße Turnschuhe\")."
    }
  ],
  "b1-themed-review-new-country": [
    {
      "type": "write",
      "prompt": "You moved to Germany a month ago. Write an email to your grandparents: describe your new flat, your neighbours and one strange custom you've noticed, and say how you like the town.",
      "minWords": 70,
      "maxWords": 120,
      "rubric": [
        "Uses adjective endings after der-words, ein-words and with no article.",
        "Uses dative endings after prepositions (\"in einem alten Haus\", \"mit zwei kleinen Kindern\").",
        "Uses a genitive phrase with an adjective (\"wegen des schlechten Wetters\").",
        "Writes an informal email with a suitable greeting and closing."
      ],
      "modelAnswer": "Liebe Oma, lieber Opa,\n\nseit einem Monat wohne ich jetzt in Freiburg. Ich habe eine kleine Wohnung in einem alten Haus mit einem schönen Garten gefunden. Meine Nachbarin ist eine freundliche ältere Dame, die mir am ersten Tag frischen Kuchen gebracht hat. Im ersten Stock wohnt eine junge Familie mit zwei kleinen Kindern. Eine seltsame Sitte habe ich auch schon entdeckt: Am Sonntag ist es überall ganz still, und man darf nicht einmal leere Flaschen in den Container werfen! Wegen des schlechten Wetters war ich noch nicht oft draußen, aber die Stadt gefällt mir sehr.\n\nViele liebe Grüße\neure Lucía",
      "explanation": "The endings follow the article: mixed after ein-words (\"eine kleine Wohnung\", \"eine freundliche ältere Dame\"), -en in every dative (\"in einem alten Haus\", \"mit zwei kleinen Kindern\") and strong with no article (\"frischen Kuchen\", \"leere Flaschen\"). After \"wegen\" both article and adjective are genitive (\"des schlechten Wetters\")."
    }
  ],
  "b1-das-gute-etwas-neues": [
    {
      "type": "write",
      "prompt": "Write an online review of a café or restaurant you visited recently: what was the best thing, what was special and what was nothing special, and finish with a wish for the owners.",
      "minWords": 60,
      "maxWords": 110,
      "rubric": [
        "Uses neuter nominalised adjectives such as \"das Beste\" or \"das Wichtigste\".",
        "Uses \"etwas\" / \"nichts\" + capitalised adjective with -es (\"etwas Besonderes\", \"nichts Neues\").",
        "Uses at least one participle as an adjective (\"hausgemachte\", \"geschlagener\").",
        "Ends with \"alles Gute\" or a similar wish."
      ],
      "modelAnswer": "Vier Sterne für das Café Linde\n\nLetzten Samstag waren wir im neuen Café Linde in der Altstadt. Das Beste war der hausgemachte Apfelkuchen mit frisch geschlagener Sahne. Auch die Atmosphäre ist etwas Besonderes: alte Möbel, viele Bücher und leise Musik. Die Bedienung war freundlich, aber nicht besonders schnell. Das Frühstück war leider nichts Besonderes: Brötchen, Käse, Marmelade, nichts Neues. Das Wichtigste für mich ist aber, dass man dort stundenlang sitzen und lesen kann. Ich wünsche den Besitzern alles Gute!",
      "explanation": "Adjectives used as neuter nouns are capitalised: \"das Beste\" and \"das Wichtigste\" with weak endings, \"etwas Besonderes\" and \"nichts Neues\" with -es. \"Hausgemachte\" and \"geschlagener\" are past participles used as adjectives, with normal endings."
    }
  ],
  "b1-circuit-job-ads": [
    {
      "type": "write",
      "prompt": "Your small company is looking for a new employee. Write a job advertisement for a German website: describe the company, the tasks, what the applicant should bring and what you offer.",
      "minWords": 50,
      "maxWords": 100,
      "rubric": [
        "Uses nominalised adjectives for people (\"Angestellte\", \"Auszubildende\", \"Interessierte\").",
        "Uses participles as adjectives (\"abgeschlossene Ausbildung\", \"wachsendes Team\").",
        "Uses correct adjective endings, including strong endings with no article.",
        "Follows the usual structure of a German job ad (Wir suchen..., Sie bringen mit..., Wir bieten...)."
      ],
      "modelAnswer": "Wir suchen ab sofort eine engagierte Reiseberaterin oder einen engagierten Reiseberater (m/w/d) für unser Büro in Bremen.\n\nWir sind ein kleines, wachsendes Reisebüro mit zwölf Angestellten.\n\nSie bringen mit: eine abgeschlossene Ausbildung im Tourismus, gute Englischkenntnisse und Freude am Kontakt mit Menschen.\n\nWir bieten: ein motiviertes Team, flexible Arbeitszeiten und ein gutes Gehalt. Auch Auszubildende sind bei uns herzlich willkommen!\n\nInteressierte schicken ihre Bewerbung bitte per E-Mail an Frau Wolf.",
      "explanation": "\"Angestellten\", \"Auszubildende\" and \"Interessierte\" are adjectives used as nouns, so they keep adjective endings (dative plural \"mit zwölf Angestellten\"). \"Wachsendes\" (Partizip I), \"abgeschlossene\" and \"motiviertes\" (Partizip II) work like normal adjectives, and with no article they take strong endings (\"gute Englischkenntnisse\", \"flexible Arbeitszeiten\")."
    }
  ],
  "b1-genitive-in-full-1": [
    {
      "type": "write",
      "prompt": "For a family-history project, write a short description of an old family photo: who the people are and how they are related to you, and where the photo was taken.",
      "minWords": 60,
      "maxWords": 110,
      "rubric": [
        "Uses genitive articles and endings (\"meines Großvaters\", \"meiner Mutter\", \"des Dorfes\").",
        "Uses a name with -s and no apostrophe (\"Evas Mann\").",
        "Uses at least one weak noun outside the nominative (\"den Nachbarn\", \"Herrn Schulz\", \"des Kollegen\").",
        "Describes positions in the picture (in der Mitte, links, im Hintergrund)."
      ],
      "modelAnswer": "Dieses Foto wurde am Geburtstag meines Großvaters gemacht. In der Mitte sitzt Opa Karl, neben ihm die Schwester meiner Mutter, Tante Eva. Der Mann mit der Brille ist Evas Mann, ein Kollege meines Vaters. Links stehen die Kinder meines Onkels, Max und Lina. Der kleine Junge auf dem Schoß ist der Sohn meiner Cousine. Hinter ihnen sieht man den Nachbarn meiner Großeltern, Herrn Schulz, der fast jeden Sonntag zum Kaffee kam. Im Hintergrund sieht man das Haus meiner Großeltern am Rand des Dorfes.",
      "explanation": "The genitive follows the noun it describes: masculine and neuter add -s or -es (\"meines Großvaters\", \"meines Vaters\", \"des Dorfes\"), feminine and plural only change the article (\"meiner Mutter\", \"meiner Großeltern\"). Names take -s without an apostrophe (\"Evas Mann\"), and the weak nouns \"Nachbar\" and \"Herr\" add -n outside the nominative."
    }
  ],
  "b1-genitive-time-expressions": [
    {
      "type": "write",
      "prompt": "A German writing competition asks for a short story that begins with \"Eines Abends...\". Write it in the Präteritum, using genitive prepositions and at least one more fixed genitive expression.",
      "minWords": 70,
      "maxWords": 120,
      "rubric": [
        "Begins with \"Eines Abends\" and uses another fixed genitive phrase (\"letzten Endes\", \"eines Tages\").",
        "Uses at least three genitive prepositions (\"trotz\", \"während\", \"wegen\", \"statt\") with genitive articles.",
        "Uses correct adjective endings in the genitive (\"des starken Regens\").",
        "Tells the story in the Präteritum."
      ],
      "modelAnswer": "Eines Abends im November ging ich trotz des starken Regens noch schnell zum Supermarkt. Während des Einkaufs bemerkte ich einen alten Mann, der vor dem Regal stand und nicht weiterwusste. Wegen seiner schlechten Augen konnte er die Preise nicht lesen. Ich half ihm, und wir unterhielten uns lange. Er hatte früher als Lehrer gearbeitet und erzählte viele lustige Geschichten. Statt eines Taxis nahmen wir zusammen den Bus, denn er wohnte in meiner Straße. Seit diesem Abend trinken wir jeden Freitag zusammen Kaffee. Letzten Endes war dieser nasse Novemberabend einer der schönsten Abende des Jahres.",
      "explanation": "\"Eines Abends\" and \"letzten Endes\" are fixed genitive time and opinion phrases. \"Trotz\", \"während\", \"wegen\" and \"statt\" take the genitive, so articles and adjectives change too (\"des starken Regens\", \"seiner schlechten Augen\", \"eines Taxis\"), and \"einer der schönsten Abende des Jahres\" adds two more genitives."
    }
  ],
  "b1-vocabulary-practice-8": [
    {
      "type": "write",
      "prompt": "You've seen a job advert for an office assistant at a German company. Write a short cover letter (Anschreiben): say which job you're applying for, describe your training and current job, your strengths, and ask for an interview.",
      "minWords": 60,
      "maxWords": 110,
      "rubric": [
        "Uses work vocabulary such as \"sich bewerben um\", \"die Ausbildung\", \"zuständig sein für\", \"die Frist\", \"das Vorstellungsgespräch\".",
        "Uses at least one relative clause.",
        "Uses a polite Konjunktiv II closing (\"Über eine Einladung ... würde ich mich sehr freuen\").",
        "Follows formal letter conventions."
      ],
      "modelAnswer": "Sehr geehrte Frau Hoffmann,\n\nmit großem Interesse habe ich Ihre Anzeige gelesen, und ich bewerbe mich hiermit um die Stelle als Büroassistentin. Ich habe eine abgeschlossene Ausbildung als Bürokauffrau und arbeite seit drei Jahren bei einer Firma, die Möbel exportiert. Dort bin ich für Termine, Besprechungen und den Kontakt mit Kunden zuständig. Ich arbeite gern im Team und kann auch unter Zeitdruck Fristen einhalten. Über eine Einladung zu einem Vorstellungsgespräch würde ich mich sehr freuen.\n\nMit freundlichen Grüßen\nSofia Romero",
      "explanation": "A German cover letter uses fixed work phrases: \"sich bewerben um\" + accusative, \"zuständig sein für\" and \"Fristen einhalten\". The relative clause \"die Möbel exportiert\" describes the company, and \"würde ich mich sehr freuen\" (sich freuen über) is the standard polite closing."
    }
  ],
  "b1-frequent-words-outdoors": [
    {
      "type": "write",
      "prompt": "Write a short article for a hiking blog about a walk you did recently: where you went, what the path and the landscape were like, a problem you had on the way, and the view at the end. Finish with a tip for readers.",
      "minWords": 70,
      "maxWords": 120,
      "rubric": [
        "Uses hiking vocabulary (\"die Wanderung\", \"der Gipfel\", \"das Ufer\", \"steil\", \"sich verlaufen\", \"die Hütte\", \"die Aussicht\").",
        "Uses correct adjective endings in different cases.",
        "Uses at least one genitive (\"wegen des Nebels\", \"zum Gipfel des...\").",
        "Tells the walk in the past and ends with a tip."
      ],
      "modelAnswer": "Letzten Sonntag sind wir zum Gipfel des Feldbergs gewandert. Die Wanderung begann an einem kleinen See, an dessen Ufer schon viele Familien zelteten. Zuerst ging der Weg durch einen dunklen Wald, danach wurde er ziemlich steil. Wegen des dichten Nebels haben wir uns leider einmal verlaufen, aber ein freundlicher Wanderer hat uns den richtigen Weg gezeigt. Nach vier Stunden kamen wir endlich an der Hütte an. Die Aussicht war fantastisch: Man konnte bis zu den Alpen sehen! Mein Tipp: Nehmt gute Schuhe und warme Kleidung mit, denn oben ist es oft kalt.",
      "explanation": "The outdoor words carry the story (\"Gipfel\", \"Ufer\", \"steil\", \"sich verlaufen\", \"Hütte\", \"Aussicht\"). Adjective endings follow the case (\"an einem kleinen See\", \"durch einen dunklen Wald\", \"ein freundlicher Wanderer\"), and the genitive appears in \"des Feldbergs\", \"des dichten Nebels\" and \"an dessen Ufer\"."
    }
  ],
  "b1-circuit-weder-noch-never-nicht": [
    {
      "type": "write",
      "prompt": "Write a negative online review of a holiday flat you rented. Describe what was missing and what was wrong, mention something positive, and say what the owner should do.",
      "minWords": 60,
      "maxWords": 110,
      "rubric": [
        "Uses \"weder ... noch\" for two missing things.",
        "Uses \"nicht nur ... sondern auch\".",
        "Uses \"zwar ... aber\" for a concession.",
        "Uses \"entweder ... oder\" for a choice."
      ],
      "modelAnswer": "Leider eine Enttäuschung\n\nDie Fotos im Internet sahen toll aus, aber die Wohnung war eine Katastrophe. Es gab weder Handtücher noch Bettwäsche. Die Küche war nicht nur schmutzig, sondern auch viel zu klein. Wir konnten dort weder kochen noch in Ruhe frühstücken. Der Vermieter war zwar freundlich, aber er hat erst nach zwei Tagen auf unsere Nachrichten geantwortet. Die Lage ist zwar gut, aber für 120 Euro pro Nacht erwartet man mehr. Entweder renoviert der Vermieter die Wohnung bald, oder er muss den Preis senken.",
      "explanation": "\"Weder ... noch\" replaces \"kein ... und kein\" and \"nicht ... und nicht\" (\"weder Handtücher noch Bettwäsche\", \"weder kochen noch frühstücken\"). \"Nicht nur ... sondern auch\" adds a second problem, \"zwar ... aber\" admits a positive point, and \"Entweder ... oder\" gives the owner a choice."
    }
  ],
  "b1-themed-review-first-business": [
    {
      "type": "write",
      "prompt": "You've just opened a small café in your town. Write a short speech for the opening party: welcome and thank people, say briefly how the idea came about, and explain what makes the café special.",
      "minWords": 70,
      "maxWords": 120,
      "rubric": [
        "Uses \"nicht nur ... sondern auch\" and \"sowohl ... als auch\".",
        "Uses \"zwar ... aber\" for a concession.",
        "Uses \"je + comparative ..., desto + comparative ...\" with the verb at the end of the first part and straight after \"desto\" in the second.",
        "Addresses the audience directly with a welcome and thanks."
      ],
      "modelAnswer": "Liebe Freundinnen und Freunde, liebe Nachbarn,\n\nherzlich willkommen im Café Sonnenblume! Vor einem Jahr hatte ich nur eine Idee, und heute stehe ich in meinem eigenen Café. Der Weg war zwar nicht leicht, aber er hat sich gelohnt. Ich möchte nicht nur meiner Familie danken, sondern auch euch allen, die beim Renovieren geholfen haben. Bei uns gibt es sowohl Kuchen nach Omas Rezept als auch vegane Snacks. Und je mehr Gäste kommen, desto mehr Konzerte und Lesungen können wir hier veranstalten. Also: Kommt oft und bringt eure Freunde mit!\n\nVielen Dank!",
      "explanation": "\"Nicht nur ... sondern auch\" and \"sowohl ... als auch\" link two people or things, while \"zwar ... aber\" admits a difficulty before the positive point. In \"je mehr Gäste kommen, desto mehr ... können wir\", the verb goes to the end of the je-part and straight after \"desto\" + comparative in the second part."
    }
  ],
  "b1-adverb-connectors-2": [
    {
      "type": "write",
      "prompt": "A friend has asked you to help them move flat next Saturday, but you hurt your back yesterday. Write an email: explain the situation, offer to do something else instead, mention one more way you can help, and give a friendly warning.",
      "minWords": 60,
      "maxWords": 110,
      "rubric": [
        "Uses \"deshalb\" and \"trotzdem\" with the verb straight after them.",
        "Uses \"stattdessen\" to offer an alternative.",
        "Uses \"außerdem\" to add a point.",
        "Uses \"sonst\" for a warning about what will happen otherwise."
      ],
      "modelAnswer": "Hallo Jonas,\n\nes tut mir wirklich leid, aber ich kann dir am Samstag nicht beim Umzug helfen. Ich habe mir gestern beim Sport den Rücken verletzt, deshalb darf ich nichts Schweres tragen. Ich möchte trotzdem etwas für dich tun. Stattdessen könnte ich am Freitag Kisten packen oder am Samstag für alle kochen. Außerdem kann ich dir das Auto meines Bruders leihen. Bitte bestell bald einen Transporter, sonst bekommst du am Wochenende keinen mehr. Und frag genug Freunde, sonst seid ihr bis Mitternacht beschäftigt!\n\nViele Grüße\nLena",
      "explanation": "Connector adverbs fill position 1 of their clause, so the verb comes straight after them: \"deshalb darf ich\", \"trotzdem\" in \"Ich möchte trotzdem\" (or \"Trotzdem möchte ich\"), \"Stattdessen könnte ich\", \"Außerdem kann ich\" and \"sonst bekommst du\". \"Sonst\" introduces the consequence if the advice is not followed."
    }
  ],
  "b1-themed-review-nature-in-the-city": [
    {
      "type": "write",
      "prompt": "There's an ugly, almost empty car park in your street. Write a short proposal to the town council suggesting it be turned into a community garden: what should be done, why, and what would happen without the council's help.",
      "minWords": 70,
      "maxWords": 120,
      "rubric": [
        "Uses connector adverbs with the verb in second position (\"deshalb\", \"außerdem\", \"trotzdem\", \"sonst\").",
        "Uses the passive, including the passive with a modal (\"könnten ... gebaut werden\").",
        "Uses the Konjunktiv II for the proposal (\"es gäbe\", \"wären\", \"würden\").",
        "Weighs the costs with \"zwar ... aber\"."
      ],
      "modelAnswer": "Vorschlag: Ein Gemeinschaftsgarten in der Lindenstraße\n\nDer Parkplatz in der Lindenstraße wird seit Jahren kaum benutzt. Deshalb schlagen wir vor, dort einen Gemeinschaftsgarten anzulegen. Es könnten Hochbeete gebaut und Bäume gepflanzt werden. Außerdem gäbe es dann einen Treffpunkt für Familien und ältere Menschen. Die Kosten wären zwar nicht gering, aber viele Nachbarn würden mithelfen. Trotzdem brauchen wir die Unterstützung der Stadt, sonst kann das Projekt nicht umgesetzt werden. Im Sommer wird es in unserer Straße sehr heiß, deshalb ist mehr Grün dringend nötig.\n\nDie Anwohner der Lindenstraße",
      "explanation": "\"Deshalb\", \"Außerdem\", \"Trotzdem\" and \"sonst\" are followed directly by the verb. The passive keeps the focus on the work (\"wird ... benutzt\", \"könnten ... gebaut werden\", \"kann ... umgesetzt werden\"), and the Konjunktiv II (\"gäbe\", \"wären\", \"würden\") presents the plan as a proposal."
    }
  ],
  "b1-fill-the-story-house-swap": [
    {
      "type": "write",
      "prompt": "Your family is swapping homes with a German family for the summer. Write a note to leave for them in your flat: what to do if something goes wrong, who can help, and a few tips about the house.",
      "minWords": 60,
      "maxWords": 110,
      "rubric": [
        "Uses \"man\" for general instructions, with \"einem\" or \"einen\" in other cases.",
        "Uses \"jemand\" / \"niemand\" with the right endings (\"jemanden\", \"niemandem\").",
        "Uses \"etwas\" and \"nichts\".",
        "Uses ihr and euch consistently for the family."
      ],
      "modelAnswer": "Liebe Familie Wagner,\n\nherzlich willkommen! Hier ein paar Tipps für euch: Wenn man die Haustür abschließt, muss man den Schlüssel zweimal drehen. Falls etwas kaputtgeht, ruft bitte jemanden aus dem Haus an. Frau Ruiz im zweiten Stock hilft einem immer gern. Nachts ist es hier sehr ruhig, und niemand stört euch. Im Kühlschrank haben wir etwas Obst und Käse für euch gelassen. Im Schrank im Flur ist nichts Wichtiges, ihr könnt ihn also benutzen. Wenn jemand nach uns fragt, sagt einfach, dass wir Ende August zurück sind.\n\nViel Spaß in unserer Stadt!\nMarta und Luis",
      "explanation": "\"Man\" gives general instructions and becomes \"einem\" in the dative (\"hilft einem\"). \"Jemand\" adds -en in the accusative (\"ruft jemanden an\"), \"niemand\" is the subject in \"niemand stört euch\", and \"etwas\" / \"nichts\" can be followed by a noun or a capitalised adjective (\"nichts Wichtiges\")."
    }
  ],
  "b1-word-formation-2": [
    {
      "type": "write",
      "prompt": "Your flat-share is looking for a new flatmate. Write an ad for a German website describing the room, the people who live there and the kind of person you're looking for.",
      "minWords": 60,
      "maxWords": 110,
      "rubric": [
        "Uses adjectives with -lich, -ig and -isch (\"gemütlich\", \"zuverlässig\", \"musikalisch\").",
        "Uses adjectives with -bar and -los (\"verfügbar\", \"bezahlbar\", \"humorlos\").",
        "Uses at least one adjective with the prefix un- (\"unordentlich\", \"unglaublich\").",
        "Uses \"jemanden, der...\" to describe the person you're looking for."
      ],
      "modelAnswer": "Nette WG sucht neue Mitbewohnerin oder neuen Mitbewohner!\n\nWir sind drei Studierende in einer gemütlichen Altbauwohnung in Köln-Ehrenfeld. Das freie Zimmer ist hell, ruhig und ab sofort verfügbar. Lukas ist sehr musikalisch und spielt abends Gitarre, aber nie zu laut. Merve ist unglaublich hilfsbereit und kocht leidenschaftlich gern. Ich, Ben, bin eher ruhig, manchmal etwas unordentlich, aber immer ehrlich. Wir suchen jemanden, der zuverlässig, freundlich und nicht ganz humorlos ist. Die Miete ist bezahlbar: 420 Euro warm.",
      "explanation": "Many adjectives are built from other words: -lich and -ig (\"gemütlich\", \"ehrlich\", \"zuverlässig\"), -isch (\"musikalisch\"), -bar for what can be done (\"verfügbar\", \"bezahlbar\") and -los for without (\"humorlos\"). The prefix un- negates (\"unordentlich\"), and \"jemanden, der...\" describes the person wanted."
    }
  ],
  "b1-timeline-elifs-story": [
    {
      "type": "write",
      "prompt": "Write a short biography of an older person in your family (or an imagined person) for a family album. Tell the important events of their life in order.",
      "minWords": 70,
      "maxWords": 120,
      "rubric": [
        "Tells the life events in the Präteritum.",
        "Uses \"als\" for single events and periods in the past.",
        "Uses \"nachdem\" + Plusquamperfekt for the earlier of two events.",
        "Ends with the present situation."
      ],
      "modelAnswer": "Meine Großmutter Elena wurde 1948 in einem kleinen Dorf in Galicien geboren. Als sie sechzehn war, musste sie die Schule verlassen und in einer Fabrik arbeiten. Nachdem sie ein paar Jahre Geld gespart hatte, zog sie 1968 nach Stuttgart. Dort lernte sie meinen Großvater kennen, der als Mechaniker arbeitete. Sie heirateten 1971, und zwei Jahre später kam meine Mutter auf die Welt. Als die Kinder groß waren, machte Oma endlich ihren Schulabschluss nach. Nachdem Opa gestorben war, ging sie zurück nach Spanien. Heute lebt sie wieder in ihrem Dorf und erzählt gern von ihrer Zeit in Deutschland.",
      "explanation": "A written biography uses the Präteritum (\"wurde geboren\", \"zog\", \"lernte kennen\", \"heirateten\"). \"Als\" marks single events and periods (\"Als sie sechzehn war\"), and \"nachdem\" takes the Plusquamperfekt for the earlier event (\"gespart hatte\", \"gestorben war\") with the main verb right after the comma."
    }
  ],
  "b1-vocabulary-practice-9": [
    {
      "type": "write",
      "prompt": "A German online magazine asks: \"Sollten Kinder unter zwölf ein eigenes Smartphone haben?\" Write a short for-and-against essay: give arguments on both sides and end with your own opinion.",
      "minWords": 70,
      "maxWords": 120,
      "rubric": [
        "Uses at least four abstract nouns in -ung, -heit or -keit with the feminine article (\"die Sicherheit\", \"die Abhängigkeit\", \"die Lösung\").",
        "Weighs both sides with \"einerseits ... andererseits\" or connectors such as \"außerdem\" and \"deshalb\".",
        "Keeps the verb in second position after connectors and \"Meiner Meinung nach\".",
        "Ends with a clear conclusion."
      ],
      "modelAnswer": "Viele Eltern stellen sich heute diese Frage. Einerseits bedeutet ein Smartphone mehr Sicherheit, denn Kinder können ihre Eltern jederzeit erreichen. Außerdem fördert es die Selbstständigkeit, und es gibt viele nützliche Apps zum Lernen. Andererseits ist die Gefahr einer Abhängigkeit groß. Viele Kinder verbringen zu viel Zeit online, und das kann zu Konzentrationsproblemen führen. Auch für die Gesundheit ist zu viel Bildschirmzeit nicht gut. Meiner Meinung nach brauchen Kinder vor allem Freiheit zum Spielen. Ein einfaches Handy ohne Internet wäre deshalb die beste Lösung.",
      "explanation": "The essay relies on feminine abstract nouns: \"die Sicherheit\", \"die Selbstständigkeit\", \"die Abhängigkeit\", \"die Gesundheit\", \"die Freiheit\" and \"die Lösung\". \"Einerseits ... andererseits\" balances the arguments, and \"Außerdem\", \"Andererseits\" and \"Meiner Meinung nach\" are each followed directly by the verb."
    }
  ],
  "b1-themed-review-stress-and-rest": [
    {
      "type": "write",
      "prompt": "Write a short dialogue between two friends: one is very stressed at work, and the other reacts and gives friendly advice the way people really talk.",
      "minWords": 60,
      "maxWords": 110,
      "rubric": [
        "Uses \"denn\" to make a question friendly (\"Was ist denn los?\").",
        "Uses \"ja\" for surprise or shared knowledge.",
        "Uses \"doch\", \"mal\" or \"doch mal\" in imperatives and advice.",
        "Uses spoken forms such as \"ich hab\" or \"geht nicht\"."
      ],
      "modelAnswer": "Tom: Hey Lisa, was ist denn los? Du siehst ja total müde aus.\nLisa: Ach, ich hab gerade so viel Stress im Büro. Ich arbeite jeden Tag bis neun.\nTom: Das geht doch nicht! Mach doch mal ein paar Tage Urlaub.\nLisa: Geht nicht, wir haben ja gerade das große Projekt.\nTom: Dann geh wenigstens mal früher nach Hause. Du hast doch auch ein Leben!\nLisa: Ja, ja, ich weiß.\nTom: Komm, ruf mich am Freitag mal an, dann gehen wir zusammen schwimmen. Das tut dir bestimmt gut.\nLisa: Okay, gute Idee. Danke dir!",
      "explanation": "\"Denn\" softens the question, \"ja\" signals surprise (\"Du siehst ja total müde aus\") or something both already know (\"wir haben ja ... das große Projekt\"), and \"doch\" and \"mal\" make the advice urgent but friendly (\"Mach doch mal...\", \"ruf mich ... mal an\"). Dropped endings such as \"ich hab\" make it sound spoken."
    }
  ],
  "b1-spoken-german-2": [
    {
      "type": "write",
      "prompt": "A friend has left you a voice message saying you didn't come to their birthday party. Write the text of your voice message reply: contradict them, explain why you were late, and check a few things with tag questions.",
      "minWords": 60,
      "maxWords": 110,
      "rubric": [
        "Uses stressed \"doch\" to contradict a negative statement.",
        "Uses \"halt\" or \"eben\" for that's just how it is.",
        "Uses at least two tag questions (\"ne?\", \"oder?\", \"weißt du?\").",
        "Uses spoken forms such as \"ich hab\", \"gibt's\" or \"erzähl ich\"."
      ],
      "modelAnswer": "Hey Max, ich hab deine Nachricht gerade gehört. Du denkst, ich war nicht auf deiner Party? Doch, natürlich war ich da! Nur halt erst um elf. Ich musste noch arbeiten, das ist eben so in der Gastro. Du warst da schon auf der Tanzfläche, ne? Deshalb hast du mich wohl nicht gesehen. Ich hab dir sogar ein Geschenk auf den Tisch gelegt, das blaue Paket, weißt du? Na ja, egal. Wir sehen uns ja am Sonntag beim Fußball, oder? Dann erzähl ich dir alles. Bis dann!",
      "explanation": "\"Doch\" contradicts the friend's negative idea (\"ich war nicht ...? – Doch!\"), while \"halt\" and \"eben\" present the late shift as something that can't be changed. Tag questions (\"ne?\", \"weißt du?\", \"oder?\") and reductions like \"ich hab\" and \"erzähl ich\" give the message its spoken tone."
    }
  ],
  "b1-themed-review-forming-a-band": [
    {
      "type": "write",
      "prompt": "You want to start a band. Write a notice for the noticeboard at a music school: introduce yourselves, say what kind of musicians you're looking for and what music you play, and say when and where you rehearse.",
      "minWords": 60,
      "maxWords": 110,
      "rubric": [
        "Uses \"jemanden, der...\" or \"eine Person, die...\" to describe who you're looking for.",
        "Uses a preposition + relative pronoun (\"an denen\", \"in dem\").",
        "Uses the Konjunktiv II (\"wäre\", \"hättest\").",
        "Uses \"zwar ... aber\"."
      ],
      "modelAnswer": "Musikerinnen und Musiker gesucht!\n\nWir sind zwei Freunde aus Leipzig, die seit einem Jahr zusammen Musik machen: Ich spiele Gitarre, und Paul singt. Jetzt wollen wir eine richtige Band gründen. Wir suchen jemanden, der Schlagzeug spielt, und eine Person, die Bass spielen kann. Wir spielen vor allem Rock und eigene Lieder, an denen wir gerade arbeiten. Erfahrung wäre zwar schön, aber Spaß ist wichtiger. Wir proben jeden Donnerstagabend in einem Keller, der zum Glück schallisoliert ist. Hättest du Lust mitzumachen? Dann schreib uns einfach eine Nachricht!\n\nJonas und Paul",
      "explanation": "\"Jemanden, der...\" and \"eine Person, die...\" describe the musicians wanted, and \"an denen wir ... arbeiten\" puts the preposition of \"arbeiten an\" in front of the relative pronoun. \"Wäre\" and \"Hättest du Lust\" keep the tone friendly, and \"zwar ... aber\" sets experience against fun."
    }
  ],
  "b1-themed-review-unverpackt": [
    {
      "type": "write",
      "prompt": "Write a short review for a city blog about a zero-waste shop (Unverpackt-Laden) you visited: how things are sold there, why people shop there, what you bought and what you think of it.",
      "minWords": 60,
      "maxWords": 110,
      "rubric": [
        "Uses the present passive to describe how things are done (\"wird verkauft\", \"werden gewogen\").",
        "Uses \"um ... zu\" and \"damit\" correctly.",
        "Uses adjective endings with materials (\"aus echtem Holz\", \"aus großen Glasbehältern\").",
        "Gives a clear opinion with \"zwar ... aber\" or a connector."
      ],
      "modelAnswer": "Endlich ohne Plastik einkaufen!\n\nLetzte Woche war ich zum ersten Mal im neuen Unverpackt-Laden in der Südstadt. Hier werden Nudeln, Reis und Nüsse aus großen Glasbehältern verkauft. Man bringt eigene Dosen oder Stoffbeutel mit, um Verpackung zu sparen. Die leeren Dosen werden an der Kasse gewogen, damit man nur das Essen bezahlt. Besonders schön fand ich die Seife aus reinem Olivenöl und die Bürsten aus echtem Holz. Die Preise sind zwar etwas höher als im Supermarkt, aber die Qualität ist sehr gut. Ich komme bestimmt wieder!",
      "explanation": "The present passive describes how the shop works (\"werden ... verkauft\", \"werden ... gewogen\"). \"Um ... zu\" is used when the customer acts in both parts, \"damit\" when the subject is different, and after \"aus\" adjectives take strong dative endings (\"aus großen Glasbehältern\", \"aus reinem Olivenöl\", \"aus echtem Holz\")."
    }
  ],
  "b1-survival-phone-calls": [
    {
      "type": "write",
      "prompt": "Your internet hasn't worked for three days. Write a phone conversation with your internet provider's customer service: introduce yourself, say why you're calling, spell your surname with the German spelling alphabet, and arrange a visit from a technician.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses phone phrases such as \"Hier ist...\" and \"Ich rufe wegen ... an\".",
        "Spells a name with the German spelling alphabet (\"A wie Anton\").",
        "Uses polite Konjunktiv II forms (\"Könnten Sie...?\", \"Wäre es möglich...?\").",
        "Ends the call with \"Auf Wiederhören\"."
      ],
      "modelAnswer": "Mitarbeiterin: NetzPlus, Kundenservice, Sie sprechen mit Frau Krüger. Was kann ich für Sie tun?\nKunde: Guten Tag, hier ist Daniel Ortega. Ich rufe wegen meines Internets an. Es funktioniert seit drei Tagen nicht.\nMitarbeiterin: Das tut mir leid. Könnten Sie mir bitte Ihren Nachnamen buchstabieren?\nKunde: Ja, gern: O wie Otto, R wie Richard, T wie Theodor, E wie Emil, G wie Gustav, A wie Anton.\nMitarbeiterin: Danke. In Ihrer Straße gibt es leider eine Störung. Ein Techniker könnte am Donnerstag vorbeikommen.\nKunde: Wäre es auch am Mittwoch möglich? Am Donnerstag arbeite ich bis sechs.\nMitarbeiterin: Mittwoch zwischen acht und zwölf, passt das?\nKunde: Ja, perfekt. Vielen Dank, auf Wiederhören!",
      "explanation": "On the phone you name yourself with \"Hier ist...\" and give the reason with \"Ich rufe wegen\" + genitive \"an\". The surname is spelled with the German spelling alphabet, polite requests use \"Könnten Sie\" and \"Wäre es ... möglich\", and \"Auf Wiederhören\" is the phone version of goodbye."
    }
  ],
  "b1-themed-review-energiewende": [
    {
      "type": "write",
      "prompt": "A German forum asks: \"Solaranlagen auf jedes Dach: Pflicht oder freie Entscheidung?\" Write a post giving your opinion, with reasons, one exception and a conclusion.",
      "minWords": 60,
      "maxWords": 110,
      "rubric": [
        "Uses the passive, including the passive with a modal (\"muss verbrannt werden\", \"sollten unterstützt werden\").",
        "Uses \"je + comparative ..., desto + comparative ...\".",
        "Uses connectors such as \"außerdem\" and \"stattdessen\" with the verb second, and \"denn\" with normal word order.",
        "Ends with a clear opinion."
      ],
      "modelAnswer": "Ich finde, dass Solaranlagen auf neuen Häusern Pflicht sein sollten. In meiner Stadt werden schon viele Dächer genutzt, um Strom zu produzieren. Je mehr Strom so erzeugt wird, desto weniger Kohle muss verbrannt werden. Außerdem werden die Anlagen immer billiger. Für ältere Häuser sollte es allerdings keine Pflicht geben, denn dort sind die Kosten oft zu hoch. Stattdessen sollten die Besitzer vom Staat unterstützt werden. Meiner Meinung nach ist die Energiewende nur möglich, wenn alle mitmachen.",
      "explanation": "The passive keeps the focus on the process (\"werden ... genutzt\", \"erzeugt wird\", \"muss verbrannt werden\", \"sollten ... unterstützt werden\"). In \"Je mehr Strom ... erzeugt wird, desto weniger Kohle muss...\" the verb goes last in the first part and straight after the desto-phrase in the second, while \"Außerdem\" and \"Stattdessen\" are followed directly by the verb."
    }
  ],
  "b1-mixed-practice-advice-column": [
    {
      "type": "write",
      "prompt": "A reader writes to a magazine's advice column: \"Ich bin 25, arbeite seit drei Jahren im Büro und langweile mich. Mein Traum ist es, ein Jahr zu reisen, aber meine Eltern finden das verrückt.\" Write the columnist's reply.",
      "minWords": 70,
      "maxWords": 130,
      "rubric": [
        "Gives advice with the Konjunktiv II (\"An Ihrer Stelle würde ich...\", \"Sie sollten...\", \"Es wäre gut, ...\").",
        "Uses zu-infinitives, including \"um ... zu\" or \"ohne ... zu\".",
        "Uses connector adverbs (\"deshalb\", \"trotzdem\", \"außerdem\") with the verb second.",
        "Addresses the reader with Sie throughout."
      ],
      "modelAnswer": "Liebe Lea,\n\nvielen Dank für Ihren Brief. Ich verstehe gut, dass Sie sich im Büro langweilen. An Ihrer Stelle würde ich zuerst mit Ihrem Chef sprechen. Vielleicht wäre es möglich, ein Sabbatjahr zu nehmen, ohne die Stelle zu kündigen. Sie sollten außerdem genug Geld sparen, um auf der Reise keine Sorgen zu haben. Ihre Eltern machen sich wahrscheinlich nur Sorgen um Sie. Deshalb wäre es gut, ihnen Ihren Plan genau zu erklären. Mit 25 hat man noch viel Zeit, trotzdem sollte man seine Träume nicht zu lange verschieben.\n\nIch wünsche Ihnen viel Mut!\nIhre Dr. Weber",
      "explanation": "The advice is softened with the Konjunktiv II: \"An Ihrer Stelle würde ich\", \"Sie sollten\", \"wäre es möglich\" and \"wäre es gut\". Zu-infinitives go to the end (\"ohne die Stelle zu kündigen\", \"um ... keine Sorgen zu haben\"), and \"Deshalb\" and \"trotzdem\" are followed directly by the verb."
    }
  ],
  "b1-survival-job-interview": [
    {
      "type": "write",
      "prompt": "Write a short job interview between an interviewer and an applicant for a job at a software company: the applicant talks about their education and experience, their strengths and a weakness, why they want the job, and asks a question at the end.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Tells the CV in the Perfekt or Präteritum with the right auxiliaries.",
        "Names a strength and a weakness (\"Eine Schwäche ist, dass...\").",
        "Uses the Konjunktiv II for wishes (\"Ich würde gern...\").",
        "Asks a polite indirect question (\"Könnten Sie mir sagen, wie lange...?\")."
      ],
      "modelAnswer": "Frau Berger: Guten Tag, Herr Silva. Erzählen Sie doch bitte etwas über sich.\nHerr Silva: Gern. Ich habe in Lissabon Informatik studiert und danach drei Jahre bei einer Softwarefirma gearbeitet. Vor zwei Jahren bin ich nach Deutschland gezogen.\nFrau Berger: Was sind Ihre Stärken?\nHerr Silva: Ich bin sehr zuverlässig und arbeite gern im Team. Eine Schwäche ist, dass ich manchmal zu ungeduldig bin.\nFrau Berger: Warum möchten Sie bei uns arbeiten?\nHerr Silva: Ihre Firma entwickelt Apps für Krankenhäuser, und das finde ich sehr spannend. Ich würde gern an solchen Projekten mitarbeiten.\nFrau Berger: Haben Sie noch Fragen an uns?\nHerr Silva: Ja. Könnten Sie mir sagen, wie lange die Probezeit dauert?",
      "explanation": "The applicant tells his CV in the Perfekt, with \"sein\" for the move (\"bin gezogen\") and \"haben\" for the rest. \"Eine Schwäche ist, dass...\" sends the verb to the end, \"Ich würde gern...\" expresses a wish politely, and the indirect question \"Könnten Sie mir sagen, wie lange ... dauert?\" ends with its verb."
    }
  ],
  "b1-word-web-emotions": [
    {
      "type": "write",
      "prompt": "Write an email to a friend about a week full of different feelings: something that made you angry, something you were nervous about and then relieved, someone who disappointed you, and some great news.",
      "minWords": 70,
      "maxWords": 130,
      "rubric": [
        "Uses emotion nouns and adjectives (\"wütend\", \"nervös\", \"die Erleichterung\", \"enttäuscht von\").",
        "Uses verbs with prepositions for feelings (\"sich ärgern über\", \"sich freuen über\").",
        "Uses \"Das macht mich...\" or \"... hat mich ... gemacht\".",
        "Uses a da-compound (\"darüber\") to refer back."
      ],
      "modelAnswer": "Liebe Nora,\n\nwas für eine Woche! Am Montag hat mich mein Vermieter total wütend gemacht: Er will die Miete schon wieder erhöhen. Darüber ärgere ich mich immer noch. Am Mittwoch hatte ich dann meine Führerscheinprüfung, und ich war furchtbar nervös. Was für eine Erleichterung, als ich das Ergebnis hörte: bestanden! Ein bisschen enttäuscht bin ich von meinem Bruder, denn er hat meinen Geburtstag vergessen. Aber am Freitag kam eine tolle Nachricht: Ich habe die Stelle in Hamburg bekommen! Ich freue mich riesig darüber.\n\nUnd wie geht es dir?\nLiebe Grüße\nSam",
      "explanation": "Feelings are named with adjectives (\"wütend\", \"nervös\", \"enttäuscht von\" + dative) and nouns (\"die Erleichterung\"), and \"hat mich wütend gemacht\" says who caused them. \"Sich ärgern über\" and \"sich freuen über\" take the accusative, and \"darüber\" refers back to the rent and the news."
    }
  ],
  "b1-word-web-nature-environment": [
    {
      "type": "write",
      "prompt": "Your company held its first \"Green Week\" to protect the environment. Write a short report for the company newsletter: what was done, what the results were, and what is planned next.",
      "minWords": 70,
      "maxWords": 120,
      "rubric": [
        "Uses environment vocabulary (\"die Mülltrennung\", \"das Pfand\", \"Energie sparen\", \"nachhaltig\", \"erneuerbare Energien\").",
        "Uses the passive in the Präteritum for what was done (\"wurden aufgestellt\").",
        "Uses \"damit\" or \"um ... zu\" for a purpose.",
        "Reports results with figures and ends with plans."
      ],
      "modelAnswer": "Rückblick: Unsere Grüne Woche\n\nVom 3. bis 7. Juni fand in unserer Firma die erste Grüne Woche statt. In allen Büros wurden neue Mülleimer für die Mülltrennung aufgestellt. Außerdem wurde jeden Tag ein vegetarisches Mittagessen angeboten. Viele Kolleginnen und Kollegen kamen mit dem Fahrrad zur Arbeit, und wir haben über 200 Pfandflaschen gesammelt. Das Ergebnis: In einer Woche haben wir rund 15 Prozent Energie gespart. Wir wollen aber noch nachhaltiger werden. Ab Herbst wird deshalb eine Solaranlage auf das Dach gebaut, damit wir erneuerbare Energien nutzen können.",
      "explanation": "The report uses the environment vocabulary of the unit (\"Mülltrennung\", \"Pfandflaschen\", \"Energie gespart\", \"nachhaltiger\", \"erneuerbare Energien\"). The Präteritum passive (\"wurden ... aufgestellt\", \"wurde ... angeboten\") focuses on what was done, and \"damit\" gives the purpose of the new solar panels."
    }
  ],
  "b1-word-web-money": [
    {
      "type": "write",
      "prompt": "Write a short article for a student magazine with five money-saving tips for students.",
      "minWords": 60,
      "maxWords": 110,
      "rubric": [
        "Uses money vocabulary (\"ausgeben\", \"sparen\", \"bar bezahlen\", \"die Schulden\", \"leihen\", \"das Konto\").",
        "Gives tips with du-imperatives.",
        "Uses \"Wer ..., (der) ...\" or a wenn-clause for a general statement.",
        "Orders the tips (erstens, zweitens...) with the verb after each."
      ],
      "modelAnswer": "Fünf Spartipps für Studierende\n\nAm Monatsende ist dein Konto leer? Das muss nicht sein! Erstens: Schreib auf, wofür du dein Geld ausgibst. Oft verschwindet viel Geld für Kaffee und Snacks. Zweitens: Koch selbst und nimm dein Essen mit in die Uni. Drittens: Bezahl lieber bar, dann siehst du genau, wie viel Geld du noch hast. Viertens: Kauf Bücher gebraucht oder leih sie in der Bibliothek aus. Und fünftens: Leih dir kein Geld von Freunden, sonst hast du schnell Schulden. Wer jeden Monat nur 50 Euro spart, hat nach einem Jahr 600 Euro mehr!",
      "explanation": "The money words are used in context: \"Geld ausgeben\", \"bar bezahlen\", \"Schulden haben\" and \"sparen\", plus \"ausleihen\" and \"sich Geld leihen\" for borrowing. The tips are du-imperatives, and \"Wer ... spart, hat...\" makes a general statement."
    }
  ],
  "b1-word-web-life-experiences": [
    {
      "type": "write",
      "prompt": "Your grandfather is celebrating his 80th birthday. Write a short speech for the party that tells the main milestones of his life.",
      "minWords": 70,
      "maxWords": 120,
      "rubric": [
        "Uses life-milestone vocabulary (\"geboren werden\", \"aufwachsen\", \"eine Ausbildung machen\", \"umziehen\", \"heiraten\", \"in Rente gehen\").",
        "Uses the Perfekt for the spoken story, with the right auxiliaries.",
        "Uses \"wurde ... geboren\" for birth.",
        "Opens and closes the speech with a greeting and good wishes."
      ],
      "modelAnswer": "Lieber Opa, liebe Familie,\n\nheute feiern wir den achtzigsten Geburtstag eines ganz besonderen Menschen. Opa wurde 1946 in einem kleinen Dorf an der Mosel geboren und ist dort aufgewachsen. Nach der Schule hat er eine Ausbildung als Tischler gemacht. Mit fünfundzwanzig ist er nach Köln umgezogen, wo er Oma kennengelernt hat. Sie haben 1972 geheiratet und drei Kinder bekommen. Vierzig Jahre lang hat Opa in seiner eigenen Werkstatt gearbeitet, bevor er in Rente gegangen ist. Heute baut er Spielzeug für seine Enkel. Lieber Opa, wir sind so stolz auf dich!\n\nAlles Gute zum Geburtstag!",
      "explanation": "A speech is spoken German, so the milestones are in the Perfekt: \"sein\" for change and movement (\"ist aufgewachsen\", \"ist umgezogen\", \"in Rente gegangen ist\") and \"haben\" for the rest (\"hat gemacht\", \"haben geheiratet\"). Birth is always the passive \"wurde ... geboren\"."
    }
  ],
  "b1-word-web-the-city": [
    {
      "type": "write",
      "prompt": "Write a short section for a city guide for new international students: how to get around your city, which districts are good to live in, and one thing to avoid.",
      "minWords": 60,
      "maxWords": 110,
      "rubric": [
        "Uses city vocabulary (\"die Innenstadt\", \"der Stadtteil\", \"die Fußgängerzone\", \"umsteigen\", \"der Stau\", \"die Baustelle\", \"der Radweg\").",
        "Uses \"man\" or \"Wer ..., ...\" for general statements.",
        "Uses at least one relative clause or \"wo\" for a place.",
        "Gives a tip with a reason."
      ],
      "modelAnswer": "Unterwegs in Leipzig\n\nLeipzig ist eine Fahrradstadt: Es gibt viele Radwege, und man ist schnell in der Innenstadt. Die Fußgängerzone rund um den Markt ist das Herz der Stadt. Dort stehen auch das Alte Rathaus und viele Cafés. Wer kein Fahrrad hat, fährt mit der Straßenbahn. Am Hauptbahnhof kann man in fast alle Linien umsteigen. Beliebte Stadtteile für Studierende sind Connewitz und Plagwitz, wo die Mieten noch relativ günstig sind. Ein Tipp: Morgens sollte man den Ring meiden, denn dort gibt es fast immer Stau und im Moment auch eine große Baustelle.",
      "explanation": "The text uses the city words of the unit (\"Radwege\", \"Innenstadt\", \"Fußgängerzone\", \"Rathaus\", \"umsteigen\", \"Stau\", \"Baustelle\"). \"Man\" and \"Wer ..., fährt...\" give general advice, and \"wo die Mieten ... sind\" is a relative clause for a place."
    }
  ],
  "b1-word-web-world-of-work": [
    {
      "type": "write",
      "prompt": "You started a new job three months ago. Write an email to a friend: how the probation period is going, what the working hours and overtime are like, what you think about your salary, and whether you'll stay.",
      "minWords": 70,
      "maxWords": 120,
      "rubric": [
        "Uses work vocabulary (\"die Probezeit\", \"die Überstunden\", \"krankgeschrieben\", \"das Gehalt\", \"verhandeln\", \"kündigen\").",
        "Uses \"seit\" + present for how long you've worked there.",
        "Uses the Konjunktiv II for a wish or plan (\"würde gern\").",
        "Uses connectors or subordinate clauses with the right word order."
      ],
      "modelAnswer": "Hallo Felix,\n\nlange nichts gehört! Seit drei Monaten arbeite ich jetzt bei einer Versicherung in Mannheim. Die Probezeit ist bald vorbei, und mein Chef ist zum Glück zufrieden mit mir. Die Arbeit macht Spaß, aber ich mache ziemlich viele Überstunden. Letzte Woche war ich sogar zwei Tage krankgeschrieben, weil ich total erschöpft war. Das Gehalt ist okay, aber im Herbst möchte ich über eine Erhöhung verhandeln. Trotzdem würde ich gern länger hier arbeiten, denn die Kollegen sind super. Kündigen werde ich also erst mal nicht!\n\nUnd wie läuft's bei dir?\nViele Grüße\nMira",
      "explanation": "The email uses the work vocabulary of the unit: \"Probezeit\", \"Überstunden\", \"krankgeschrieben\", \"über eine Erhöhung verhandeln\" and \"kündigen\". \"Seit drei Monaten arbeite ich\" uses the present for something still going on, \"weil\" sends the verb to the end, and \"Trotzdem würde ich gern...\" adds a wish with the verb second."
    }
  ],
  "b1-cumulative-circuit-before-or-after": [
    {
      "type": "write",
      "prompt": "Write a short anecdote about a journey that didn't go to plan but ended well. Order the events with bevor, nachdem, als, während, sobald and bis.",
      "minWords": 80,
      "maxWords": 130,
      "rubric": [
        "Uses at least five of \"bevor\", \"nachdem\", \"als\", \"während\", \"sobald\" and \"bis\" with the verb at the end.",
        "Uses \"nachdem\" with the Plusquamperfekt.",
        "Tells the story in the Präteritum.",
        "Puts the main verb straight after a fronted time clause."
      ],
      "modelAnswer": "Letzten Sommer wollte ich mit dem Zug nach Wien fahren. Bevor ich losfuhr, hatte ich alles genau geplant. Aber als ich in München ankam, war mein Anschlusszug schon weg. Während ich am Schalter wartete, lernte ich eine Studentin aus Graz kennen. Sie schlug vor, zusammen einen Fernbus zu nehmen. Nachdem wir die Tickets gekauft hatten, mussten wir noch zwei Stunden warten, bis der Bus endlich kam. Sobald wir in Wien angekommen waren, gingen wir zusammen essen. Seitdem sind wir gute Freundinnen, und ich bin froh, dass ich damals den Zug verpasst habe!",
      "explanation": "Each connector expresses a different time relation: \"bevor\" (earlier plan), \"als\" (a single moment), \"während\" (at the same time), \"nachdem\" + Plusquamperfekt (\"gekauft hatten\"), \"bis\" (end point) and \"sobald\" (as soon as). All send the verb to the end, and after a fronted clause the main verb comes first (\"..., lernte ich\", \"..., mussten wir\")."
    }
  ],
  "b1-comprehensive-review-2": [
    {
      "type": "write",
      "prompt": "You'd like to do an intensive German course in Germany next summer. Write a formal email to a language school: say why you want to come, what kind of course you're interested in, and ask about times and accommodation.",
      "minWords": 80,
      "maxWords": 140,
      "rubric": [
        "Uses verbs with prepositions (\"sich interessieren für\", \"sich freuen auf\").",
        "Uses at least one relative clause, including one with a preposition (\"in dem\", \"bei der\").",
        "Uses the passive, including in an indirect question (\"ob ... angeboten werden\").",
        "Uses \"um ... zu\" or another zu-infinitive."
      ],
      "modelAnswer": "Sehr geehrte Damen und Herren,\n\nich interessiere mich für einen Intensivkurs an Ihrer Schule im Juli. Ich lerne seit zwei Jahren Deutsch und möchte nach Deutschland kommen, um vor allem mein Sprechen zu verbessern. Am liebsten hätte ich einen Kurs, in dem viel diskutiert wird. Könnten Sie mir bitte sagen, ob die Kurse auch am Nachmittag angeboten werden? Außerdem suche ich eine Gastfamilie, bei der ich wohnen kann. So hätte ich auch zu Hause die Möglichkeit, Deutsch zu sprechen. Muss die Unterkunft direkt bei Ihnen gebucht werden?\n\nIch freue mich auf Ihre Antwort.\n\nMit freundlichen Grüßen\nAna López",
      "explanation": "\"Sich interessieren für\" and \"sich freuen auf\" take the accusative, and \"in dem\" and \"bei der\" are relative pronouns after a preposition. The passive appears in the relative clause (\"diskutiert wird\"), the indirect question (\"ob ... angeboten werden\") and with a modal (\"gebucht werden\"), and \"um ... zu\" gives the purpose of the trip."
    }
  ],
  "b1-challenge-a-week-in-hamburg-2": [
    {
      "type": "write",
      "prompt": "Exam-style task (Goethe B1, Schreiben, part 1): you've just spent your first week living in Hamburg. Write an email to your friend Paula (about 80 words): describe what you did this week, say what problem you had, and suggest when she could visit you.",
      "minWords": 80,
      "maxWords": 120,
      "rubric": [
        "Covers all three content points.",
        "Uses the Perfekt for actions and \"war\", \"hatte\" and the modals in the Präteritum.",
        "Uses a relative clause or a weil-clause with the verb at the end.",
        "Makes a suggestion with the Konjunktiv II and a zu-infinitive (\"Hättest du Lust, ... zu ...?\")."
      ],
      "modelAnswer": "Liebe Paula,\n\njetzt bin ich schon eine Woche in Hamburg! Am Montag habe ich mich beim Bürgeramt angemeldet, und am Mittwoch habe ich endlich ein Konto eröffnet. Leider hatte ich am Donnerstag ein Problem: Der Wasserkocher, den ich gekauft hatte, war kaputt. Ich musste ihn zurückbringen, aber das ging zum Glück schnell. Gestern war ich beim Arzt, weil ich erkältet war. Meine Nachbarn sind echt nett und haben mich schon zum Kaffee eingeladen. Hättest du Lust, mich im Mai zu besuchen? Dann könnten wir zusammen an die Elbe fahren.\n\nLiebe Grüße\nSara",
      "explanation": "The email answers all three points in the order of the task. Actions are in the Perfekt (\"habe mich angemeldet\", \"habe eröffnet\"), while \"hatte\", \"war\" and \"musste\" are Präteritum, and the relative clause \"den ich gekauft hatte\" uses the Plusquamperfekt for the earlier purchase. \"Hättest du Lust, ... zu besuchen?\" and \"könnten\" make a friendly suggestion."
    }
  ],
  "b1-challenge-schreiben": [
    {
      "type": "write",
      "prompt": "Exam-style task (Goethe B1, Schreiben, part 3): you had an appointment with your course leader, Frau Dr. Keller, tomorrow at 10, but you can't come. Write her a short email (about 40 words): apologise politely, give a reason and suggest a new time.",
      "minWords": 35,
      "maxWords": 60,
      "rubric": [
        "Uses a formal greeting and closing (\"Sehr geehrte Frau Dr. Keller\", \"Mit freundlichen Grüßen\").",
        "Apologises and gives a reason with \"weil\" and the verb at the end.",
        "Suggests a new time politely with the Konjunktiv II (\"Wäre es möglich, ... zu ...?\").",
        "Uses Sie consistently."
      ],
      "modelAnswer": "Sehr geehrte Frau Dr. Keller,\n\nleider kann ich morgen nicht zu unserem Termin um 10 Uhr kommen, weil ich krank bin. Das tut mir sehr leid. Wäre es möglich, das Gespräch auf nächsten Dienstag zu verschieben? Am Vormittag hätte ich jederzeit Zeit.\n\nMit freundlichen Grüßen\nTomás Silva",
      "explanation": "A Teil 3 email is short and formal: \"Sehr geehrte...\" and \"Mit freundlichen Grüßen\" frame it, and \"Sie\" forms are used throughout. \"Weil\" sends the verb to the end (\"krank bin\"), and \"Wäre es möglich, ... zu verschieben?\" and \"hätte ich ... Zeit\" make the new suggestion polite."
    }
  ]
};
