// Synced from cheneygross-afk/lengo:src/lib/lessons/de-culture-writing.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { UnitWriting } from "./unitWriting";

// Extra writing tasks for this level's units, so every unit asks the learner to
// write at least three times: keyed by the lesson each is added to (see
// unitWriting.ts). Marked by the AI writing feedback like every writing task.
export const DE_CULTURE_WRITING: UnitWriting = {
  "culture-feste-traditionen-1": [
    {
      "type": "write",
      "prompt": "You spent the last days of Karneval in Cologne this year. Write a blog post in German about the experience: what happened on Weiberfastnacht and on Rosenmontag, the costumes, calls and sweets, and how the festival is celebrated differently in other regions (Fasching, Fasnacht).",
      "minWords": 150,
      "maxWords": 250,
      "rubric": [
        "Narrates the days in the written past (Präteritum), including strong verbs (\"saß\", \"stand\", \"rief\", \"fing\")",
        "Explains customs with the passive (\"An diesem Tag werden die Krawatten abgeschnitten\", \"Kamelle, die von den Wagen geworfen werden\")",
        "Uses the carnival vocabulary precisely (\"Weiberfastnacht\", \"Rosenmontagszug\", \"Jecken\", \"Kamelle\", \"Alaaf\" / \"Helau\", \"Aschermittwoch\")",
        "Contrasts the regions with \"während\", \"im Gegensatz zu\" or \"dagegen\""
      ],
      "modelAnswer": "Fünf Tage Ausnahmezustand: mein erster Kölner Karneval\n\nEhrlich gesagt hatte ich keine Ahnung, worauf ich mich einlasse. An Weiberfastnacht, dem Donnerstag vor Rosenmontag, saß ich um 11.11 Uhr noch nichtsahnend im Büro, als plötzlich drei als Hexen verkleidete Kolleginnen hereinstürmten und mir die Krawatte abschnitten. An diesem Tag werden traditionell die Krawatten der Männer abgeschnitten, als Zeichen dafür, dass die Frauen das Sagen haben. Danach wurde im Büro kaum noch gearbeitet.\n\nDer Höhepunkt war der Rosenmontagszug. Stundenlang standen wir als Piraten verkleidet am Straßenrand, riefen „Kölle Alaaf!“ und fingen Kamelle, also Bonbons, die von den Wagen in die Menge geworfen werden. Wildfremde Jecken hakten sich bei uns unter und schunkelten mit, und niemand fand das seltsam.\n\nSpannend fand ich, wie unterschiedlich die Regionen feiern. Während man in Köln „Alaaf“ ruft, heißt es in Düsseldorf und Mainz „Helau“. In Bayern spricht man dagegen von Fasching, und im Südwesten wird die schwäbisch-alemannische Fasnacht mit geschnitzten Holzmasken gefeiert, die deutlich älter und ein bisschen unheimlicher wirkt.\n\nAm Aschermittwoch war plötzlich alles vorbei. Ich bin heiser, erschöpft und finde immer noch Konfetti in meinen Taschen. Nächstes Jahr bin ich trotzdem wieder dabei!",
      "explanation": "The blog narrates in the Präteritum, the normal written past for a story (\"saß\", \"stürmten herein\", \"standen\", \"riefen\", \"fingen\"), with the impersonal passive \"wurde kaum noch gearbeitet\" for the general mood. Customs are explained with the passive (\"werden abgeschnitten\", \"geworfen werden\"), and \"Während\" and \"dagegen\" contrast Cologne's \"Alaaf\" with \"Helau\", Fasching and the Fasnacht."
    }
  ],
  "culture-essen-tischkultur-2": [
    {
      "type": "write",
      "prompt": "A German-language magazine for international students has asked you for a short article called \"Brot, Bier und Kuchen: ein kleiner Wegweiser\". Explain German bread culture, the Reinheitsgebot and the regional beers, the difference between Kuchen and Torte, and how the Pfand system works, with practical tips for newcomers.",
      "minWords": 150,
      "maxWords": 250,
      "rubric": [
        "Explains facts and processes with the passive (\"Bier durfte nur aus ... gebraut werden\", \"Das Pfand wird zurückerstattet\")",
        "Defines terms with relative clauses or appositions (\"Pfand, also ein Aufschlag, den man zurückbekommt\")",
        "Gives tips with generalising \"Wer ..., (der) ...\" and \"sollte\"",
        "Contrasts concepts precisely (\"Während ein Kuchen ..., ist eine Torte ...\", \"im Gegensatz zu\")"
      ],
      "modelAnswer": "Brot, Bier und Kuchen: ein kleiner Wegweiser\n\nWer zum ersten Mal vor der Theke einer deutschen Bäckerei steht, ist oft überfordert: Roggenbrot, Vollkornbrot, Dinkelbrötchen, Brezeln. Angeblich gibt es mehr als 3.000 Brotsorten, und die deutsche Brotkultur wurde 2014 sogar als immaterielles Kulturerbe anerkannt. Unser Tipp: Probieren Sie ein dunkles, kräftiges Roggenbrot, das man in kaum einem anderen Land so findet.\n\nAuch beim Bier nimmt man es genau. Nach dem Reinheitsgebot von 1516 durfte Bier nur aus Gerste, Hopfen und Wasser gebraut werden; die Hefe kam erst später dazu. Dabei ist jede Region stolz auf ihr eigenes Bier: In Köln trinkt man Kölsch, in Düsseldorf Alt, in Bayern Weißbier. Wer in Köln ein Alt bestellt, sollte sich auf böse Blicke gefasst machen.\n\nZum Nachmittagskaffee gibt es Kuchen oder Torte, und das ist nicht dasselbe. Während ein Kuchen eher einfach ist, etwa ein Apfelkuchen vom Blech, besteht eine Torte aus mehreren Schichten mit Sahne oder Creme und wird zu besonderen Anlässen serviert.\n\nZum Schluss noch ein Wort zum Pfand, also einem Aufschlag, den man beim Kauf vieler Flaschen und Dosen bezahlt. Bei Einwegflaschen sind es 25 Cent. Leere Flaschen bringt man in den Supermarkt zurück, wo sie in einen Automaten gesteckt werden. Den Bon löst man an der Kasse ein, und das Geld wird zurückerstattet.",
      "explanation": "Facts and procedures are given in the passive (\"wurde anerkannt\", \"durfte gebraut werden\", \"wird zurückerstattet\"), which keeps the focus on the custom rather than on who does it. Terms are defined with appositions and relative clauses (\"Pfand, also einem Aufschlag, den man ... bezahlt\"), \"Wer ..., sollte ...\" gives general advice, and \"Während ein Kuchen ..., besteht eine Torte ...\" sets the two concepts side by side."
    }
  ],
  "culture-fussball-metaphors-contrast": [
    {
      "type": "write",
      "prompt": "You lead a small project team at a German company, and the client has just rejected your first proposal. Write an email to your team: acknowledge the setback, motivate everyone using at least four football expressions common in German office language, and set out the next steps.",
      "minWords": 150,
      "maxWords": 250,
      "rubric": [
        "Uses at least four football metaphors correctly (\"am Ball bleiben\", \"ein Eigentor schießen\", \"den Ball flach halten\", \"im Abseits stehen\", \"in die Verlängerung gehen\")",
        "Makes suggestions and expresses regret with the Konjunktiv II (\"Wir hätten früher nachfragen sollen\", \"Es wäre gut, wenn ...\")",
        "Structures the next steps with connectors (\"zunächst\", \"anschließend\", \"während\", \"damit\")",
        "Keeps a collegial but professional register (subject line, \"Hallo zusammen\", \"ihr\")"
      ],
      "modelAnswer": "Betreff: Wie geht es weiter mit dem Projekt Nordlicht?\n\nHallo zusammen,\n\nwie ihr wisst, hat der Kunde unseren ersten Entwurf gestern abgelehnt. Das ist ärgerlich, aber kein Grund, die Köpfe hängen zu lassen. Nach dem Spiel ist vor dem Spiel!\n\nEhrlich gesagt haben wir uns mit dem knappen Zeitplan selbst ein Eigentor geschossen: Wir hätten früher nachfragen sollen, was dem Kunden wirklich wichtig ist. Jetzt gilt es, am Ball zu bleiben und gleichzeitig den Ball flach zu halten, also keine großen Versprechungen zu machen, sondern ein solides, realistisches Konzept vorzulegen.\n\nFür die nächsten Schritte schlage ich Folgendes vor: Zunächst würde ich gern am Donnerstag mit dem Kunden telefonieren, um seine Kritik genau zu verstehen. Anschließend überarbeiten Lena und Murat das Budget, während Jonas und ich die Präsentation neu aufbauen. Es wäre gut, wenn wir uns jeden Morgen zehn Minuten abstimmen könnten, damit niemand im Abseits steht.\n\nWir gehen also in die Verlängerung, aber wir sind eine starke Mannschaft. Ich bin sicher, dass wir den Kunden im zweiten Anlauf überzeugen.\n\nDanke für euren Einsatz!\nViele Grüße\nSarah",
      "explanation": "Football images are part of everyday office German: \"ein Eigentor schießen\" (to harm yourself), \"am Ball bleiben\" (to keep at it), \"den Ball flach halten\" (to keep things low-key), \"im Abseits stehen\" (to be left out) and \"in die Verlängerung gehen\" (to need extra time). The Konjunktiv II expresses self-criticism and suggestions politely (\"hätten nachfragen sollen\", \"würde gern\", \"Es wäre gut, wenn\"), and \"Zunächst\", \"Anschließend\", \"während\" and \"damit\" structure the plan."
    }
  ],
  "culture-deutscher-film": [
    {
      "type": "write",
      "prompt": "Write a review for a German culture blog of a German film you have seen. Summarise the plot without giving away the ending, judge the direction and the acting, say how you watched it, and recommend it to a particular kind of viewer.",
      "minWords": 150,
      "maxWords": 250,
      "rubric": [
        "Summarises the plot in the present tense, introducing characters with relative clauses or appositions",
        "Evaluates with nuanced, concessive language (\"zwar ..., aber\", \"gerade deshalb\", \"überzeugend\", \"langatmig\")",
        "Uses a comparative correlative or other C1 connector (\"je mehr ..., desto ...\", \"nicht umsonst\")",
        "Recommends with \"Wer ..., (der) sollte ...\" and ends with a clear verdict"
      ],
      "modelAnswer": "„Das Leben der Anderen“: leise, beklemmend, großartig\n\nOst-Berlin, 1984. Stasi-Hauptmann Gerd Wiesler, ein Mann, der fest an das System glaubt und kaum ein Privatleben hat, soll den Schriftsteller Georg Dreyman und dessen Freundin, die Schauspielerin Christa-Maria Sieland, überwachen. Tag für Tag sitzt er mit Kopfhörern auf dem Dachboden und hört mit. Doch je mehr er über das Leben der beiden erfährt, desto stärker gerät seine eigene Überzeugung ins Wanken.\n\nFlorian Henckel von Donnersmarck erzählt diese Geschichte erstaunlich ruhig. Es gibt kaum Action, und manche Szenen sind zwar etwas langatmig, aber gerade diese Stille macht den Film so beklemmend. Überzeugend ist vor allem Ulrich Mühe als Wiesler: Mit minimaler Mimik zeigt er, wie in einem verhärteten Menschen langsam Mitgefühl entsteht. Nicht umsonst hat der Film 2007 den Oscar als bester fremdsprachiger Film gewonnen.\n\nIch habe ihn auf Deutsch mit deutschen Untertiteln gesehen, was ich allen Deutschlernenden empfehlen würde. Die Dialoge sind klar und nicht zu schnell, und nebenbei lernt man viel über den Alltag in der DDR.\n\nFazit: Wer einen rasanten Thriller erwartet, wird enttäuscht sein. Wer sich aber für deutsche Geschichte interessiert, sollte sich diesen Film unbedingt ansehen. Von mir gibt es viereinhalb von fünf Sternen.",
      "explanation": "The plot summary is in the present tense, the usual tense for retelling a film, and characters are introduced with appositions and a relative clause (\"ein Mann, der fest an das System glaubt\"). The judgement is nuanced with \"zwar ..., aber gerade ...\", \"je mehr ..., desto ...\" shows the gradual change, and the two \"Wer ...\" sentences give a recommendation aimed at specific viewers."
    }
  ],
  "culture-ordnung-muss-sein-2": [
    {
      "type": "write",
      "prompt": "Your company is discussing whether to stop forwarding work emails to staff phones after 18:00 and at weekends, as some German firms do. Write a for-and-against essay for the staff magazine, weighing up both sides and ending with your own opinion.",
      "minWords": 150,
      "maxWords": 250,
      "rubric": [
        "Structures the argument with connectors (\"einerseits ... andererseits\", \"darüber hinaus\", \"außerdem\")",
        "Uses concessive structures (\"zwar ..., aber\", \"dennoch\", \"ohne dass\")",
        "Uses a formal, nominal register (\"die Erreichbarkeit\", \"die Erholung\", \"eine klare Vereinbarung\")",
        "Gives your opinion and a proposal with the Konjunktiv II (\"wäre zu starr\", \"Sinnvoller fände ich ...\", \"So bliebe ...\")"
      ],
      "modelAnswer": "Feierabend für E-Mails?\n\nIn vielen Firmen gehört es inzwischen zum Alltag, abends und am Wochenende noch schnell die dienstlichen E-Mails zu lesen. Manche deutschen Unternehmen leiten deshalb nach Feierabend keine Nachrichten mehr auf die Diensthandys weiter. Sollten wir diesem Beispiel folgen?\n\nEinerseits spricht vieles dafür. Der Feierabend ist in Deutschland nicht ohne Grund fast heilig: Wer ständig erreichbar ist, kann nicht abschalten, und auf Dauer leiden darunter die Gesundheit und das Familienleben. Darüber hinaus würde eine klare Regel den Druck nehmen, auf jede Nachricht sofort antworten zu müssen.\n\nAndererseits gibt es gute Gegenargumente. Zwar wünschen sich die meisten von uns mehr Ruhe, aber gerade Kolleginnen und Kollegen in Teilzeit oder mit kleinen Kindern schätzen die Freiheit, abends noch etwas zu erledigen. Außerdem arbeiten wir mit Kunden in anderen Zeitzonen, deren Anfragen nicht immer bis zum nächsten Morgen warten können.\n\nMeiner Meinung nach wäre eine technische Sperre um 18 Uhr zu starr. Sinnvoller fände ich eine klare Vereinbarung: Niemand muss nach Feierabend antworten, und wer dennoch abends schreibt, erwartet keine schnelle Reaktion. So bliebe die Erholung geschützt, ohne dass wir unsere Flexibilität verlieren.",
      "explanation": "\"Einerseits ... andererseits\" frames the two sides, and \"Darüber hinaus\" and \"Außerdem\" add arguments with the verb in second place. Concessions use \"Zwar ..., aber\", \"dennoch\" and \"ohne dass\", and the conclusion uses the Konjunktiv II (\"wäre zu starr\", \"fände ich\", \"bliebe\") to propose a compromise rather than state a fact."
    }
  ],
  "culture-du-sie-contrast": [
    {
      "type": "write",
      "prompt": "You've worked with your team leader, Herr Lorenz, for six months. At the office summer party he offers you the du. Write the dialogue: how he makes the offer, how you accept, how you both switch forms (including one slip back to Sie), and a question about who else you should now duzen.",
      "minWords": 150,
      "maxWords": 250,
      "rubric": [
        "Shows the switch from Sie to du with the right pronouns and verb forms (\"Ihnen\" → \"dir\", \"Sie haben\" → \"du hast\")",
        "Uses the set formulas for offering and accepting the du (\"Wollen wir uns nicht duzen?\", \"Ich bin der Thomas\", \"Sehr gern!\")",
        "Includes a slip and its correction (\"Und Ihnen? Oh, Entschuldigung, dir natürlich!\")",
        "Reflects the rules: the higher-ranking person offers the du, and it applies only between the two people"
      ],
      "modelAnswer": "Herr Lorenz: So, Frau Novak, jetzt arbeiten wir schon ein halbes Jahr zusammen. Darf ich Ihnen noch etwas zu trinken holen?\nIch: Gern, vielen Dank. Ein Glas Sekt wäre schön.\nHerr Lorenz: Hier, bitte. Sagen Sie mal, wollen wir uns nicht duzen? Ich bin der Thomas.\nIch: Oh, sehr gern! Ich bin Marta.\nThomas: Dann darauf: Prost, Marta! Und, wie gefällt dir unser Sommerfest?\nMarta: Sehr gut. Und Ihnen? Oh, Entschuldigung, dir natürlich! Daran muss ich mich erst gewöhnen.\nThomas: Kein Problem, das geht allen so. Am Anfang rutscht einem das Sie ständig heraus.\nMarta: Darf ich dich noch etwas fragen? Wie ist das mit den anderen Abteilungsleitern? Duze ich die jetzt auch?\nThomas: Nein, das gilt nur für uns beide. Bei Frau Dr. Weber bleibst du beim Sie, bis sie dir das Du anbietet.\nMarta: Verstehe. Und in Meetings mit Kunden?\nThomas: Da bleiben wir beim Du. Zurück zum Sie geht es nicht mehr, das wäre fast eine Beleidigung.\nMarta: Gut zu wissen. Danke, Thomas!",
      "explanation": "The offer comes from the higher-ranking person with the classic formula \"Wollen wir uns nicht duzen?\" and the first name with an article (\"Ich bin der Thomas\"). After the switch every form changes (\"dir\", \"dich\", \"du bleibst\"), the slip \"Und Ihnen?\" is corrected at once, and Thomas explains that the du applies only between the two of them and is not taken back."
    }
  ]
};
