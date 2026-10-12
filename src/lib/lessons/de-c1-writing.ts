// Synced from cheneygross-afk/lengo:src/lib/lessons/de-c1-writing.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { UnitWriting } from "./unitWriting";

// Extra writing tasks for this level's units, so every unit asks the learner to
// write at least three times: keyed by the lesson each is added to (see
// unitWriting.ts). Marked by the AI writing feedback like every writing task.
export const DE_C1_WRITING: UnitWriting = {
  "c1-konjunktiv-nuances-2": [
    {
      "type": "write",
      "prompt": "A new colleague, Herr Brandt, joined your department three weeks ago and already behaves as if he ran the place. Write a diary entry about today's team meeting: describe how he acts, how he talks about projects he has only just joined, and how the others react.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses als ob / als wenn with the verb at the end (\"als ob ihm das Stockwerk gehörte\")",
        "Uses als + verb directly after it (\"als käme er ...\", \"als hätte er ... erfunden\")",
        "Distinguishes present and past comparisons (\"als wäre er ...\" vs \"als ob er ... gearbeitet hätte\")",
        "Writes as a diary entry: date, first person, personal reaction and a resolution at the end"
      ],
      "modelAnswer": "Donnerstag, 14. März\n\nLiebes Tagebuch,\n\nseit drei Wochen ist Herr Brandt jetzt in unserer Abteilung, und ich weiß immer noch nicht, was ich von ihm halten soll. Er tut so, als ob ihm das ganze Stockwerk gehörte.\n\nMorgens betritt er das Büro, als käme er gerade von einer Pressekonferenz, und grüßt uns mit einem knappen Nicken, als wären wir seine Angestellten. Heute in der Teambesprechung war es besonders schlimm. Frau Lorenz stellte die neuen Zahlen vor, und Herr Brandt unterbrach sie, als hätte er das Projekt selbst erfunden. Dabei ist er doch erst seit Anfang des Monats hier! Er redete über unsere Kunden, als ob er seit zehn Jahren mit ihnen zusammengearbeitet hätte. Niemand sagte etwas. Jonas starrte auf seinen Laptop, als wenn ihn das alles nichts anginge, und die Chefin lächelte nur, als hätte sie nichts gehört.\n\nVielleicht bin ich ungerecht. Manchmal kommt es mir so vor, als wäre er eigentlich unsicher und würde das nur überspielen. Trotzdem: Morgen sage ich in der Besprechung etwas, auch wenn mir dabei das Herz bis zum Hals schlägt. Es fühlt sich an, als hätte ich schon viel zu lange geschwiegen.",
      "explanation": "\"Als ob\" and \"als wenn\" send the verb to the end (\"als ob ihm das Stockwerk gehörte\", \"als wenn ihn das nichts anginge\"), while \"als\" alone pulls it up directly after it (\"als käme er\", \"als wären wir\", \"als hätte er ... erfunden\"). The present Konjunktiv II (\"wäre\", \"käme\") describes an impression at the same time; the past form (\"als ob er ... zusammengearbeitet hätte\", \"als hätte ich ... geschwiegen\") refers to something that supposedly happened before."
    }
  ],
  "c1-konjunktiv-nuances-6": [
    {
      "type": "write",
      "prompt": "Your flatmate Lena is moving from your shared flat in Hamburg to Lisbon, and you are giving a short, humorous speech at her farewell party. Present part of it as a 'recipe' for the perfect flatmate, wish her well, and end with a toast.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Gives the 'recipe' with the instruction Konjunktiv I (\"Man nehme ...\", \"Man füge ... hinzu\", \"Man lasse ...\")",
        "Expresses wishes with Konjunktiv I formulas (\"Möge ...\", \"Gott sei Dank\", \"Es lebe ...\")",
        "Uses at least two fixed phrases (\"es sei denn\", \"wie dem auch sei\", \"koste es, was es wolle\")",
        "Is shaped as a speech: addresses the audience, keeps a light tone and ends with a toast"
      ],
      "modelAnswer": "Liebe Freunde, liebe Lena,\n\nkeine Sorge, ich halte mich kurz, es sei denn, jemand bringt mir noch ein Glas Sekt.\n\nFünf Jahre haben Lena und ich zusammen in dieser Wohnung gewohnt, und heute verrate ich euch endlich das Rezept für die perfekte Mitbewohnerin. Man nehme eine große Portion Geduld, vor allem morgens vor dem ersten Kaffee. Man füge eine kräftige Prise Humor hinzu, denn ohne Humor übersteht niemand unseren Putzplan. Dazu gebe man die Bereitschaft, nachts um zwei über das Leben zu diskutieren, und eine Schwäche für schlechte Musik aus den Neunzigern. Man lasse das Ganze fünf Jahre lang ziehen, und fertig ist Lena.\n\nGott sei Dank musste ich dieses Rezept nie selbst nachkochen: Ich hatte ja das Original. Nun zieht sie nach Lissabon, und ich muss mir eine neue Mitbewohnerin suchen. Wie dem auch sei, so gut wie Lena wird keine.\n\nLiebe Lena, möge dir in Lissabon immer die Sonne scheinen, mögest du nette Nachbarn finden und eine Wohnung mit funktionierender Heizung. Und besuch uns, koste es, was es wolle!\n\nBitte hebt eure Gläser: Es lebe Lena, es lebe unsere alte WG!",
      "explanation": "The recipe uses the instruction Konjunktiv I with \"man\" (\"Man nehme\", \"Man füge ... hinzu\", \"gebe man\", \"Man lasse\"), the classic style of old cookbooks. Wishes take the formulaic Konjunktiv I: \"möge dir ... scheinen\", \"mögest du ... finden\", \"Es lebe Lena\", \"Gott sei Dank\". \"Es sei denn\", \"wie dem auch sei\" and \"koste es, was es wolle\" are frozen Konjunktiv I phrases that fit a playful speech."
    }
  ],
  "c1-concession-2": [
    {
      "type": "write",
      "prompt": "Your friend Jonas has just failed the practical part of his driving test for the second time and has written to you that he wants to give up. Write him an encouraging informal email.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses concessive generalisers with auch (\"wie sehr ... auch\", \"so schwer ... auch\", \"wie lange ... auch\")",
        "Uses at least two 'whatever' clauses (\"was auch immer\", \"wer auch immer\", \"wann auch immer\")",
        "Keeps the normal word order in the main clause after the concessive clause (\"Wie sehr du dich auch ärgerst, du bist ...\")",
        "Uses an informal, encouraging register (du, a concrete suggestion, a friendly closing)"
      ],
      "modelAnswer": "Hallo Jonas,\n\nich habe gerade deine Nachricht gelesen und musste sofort antworten. Ich weiß, wie frustriert du bist. Aber aufgeben? Kommt nicht in Frage!\n\nWie sehr du dich jetzt auch ärgerst, du bist kein schlechter Fahrer. Ich bin oft genug mit dir gefahren, um das beurteilen zu können. Was auch immer der Prüfer gesagt hat, zwei kleine Fehler an einem einzigen Tag sagen nichts über dein Können aus. So schwer es dir im Moment auch fällt, versuch, das Ganze nicht persönlich zu nehmen. Weißt du noch, wie oft ich bei der Theorieprüfung durchgefallen bin? Wie peinlich das damals auch war, heute lache ich darüber.\n\nMein Vorschlag: Nimm noch zwei, drei Fahrstunden, am besten bei einem anderen Fahrlehrer. Wer auch immer dich das letzte Mal so nervös gemacht hat, beim dritten Versuch kennst du die Strecke schon. Und wann auch immer du üben willst, ich leihe dir gern mein Auto, solange du nicht wieder rückwärts gegen meinen Briefkasten fährst.\n\nWie lange es auch dauert, irgendwann hast du den Führerschein in der Hand, und dann fahren wir zusammen an die Ostsee.\n\nKopf hoch und bis bald,\ndeine Sara",
      "explanation": "\"Wie sehr ... auch\", \"so schwer ... auch\", \"wie peinlich ... auch\" and \"wie lange ... auch\" generalise a concession (however much, however hard), and \"was / wer / wann auch immer\" mean whatever, whoever, whenever. Because these clauses do not take the place of the Vorfeld, the following main clause keeps its normal order: \"Wie sehr du dich auch ärgerst, du bist ...\", \"..., heute lache ich darüber\"."
    }
  ],
  "c1-mission-differenzierte-rezension": [
    {
      "type": "write",
      "prompt": "You spent a weekend at a much-praised spa hotel in the Black Forest, and it didn't fully live up to its reputation. Write a balanced review for a travel website: acknowledge its strengths before criticising, and say exactly which guests you would (and wouldn't) recommend it to.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Concedes before criticising with \"zwar ... aber\", \"zugegeben\" or \"das mag ..., nur ...\"",
        "Uses at least one formal concessive conjunction (\"obgleich\", \"wenngleich\", \"auch wenn\") with the verb at the end",
        "Restricts the recommendation with \"es sei denn\", \"sofern\" or \"vorausgesetzt, dass\"",
        "Limits and weighs with \"immerhin\", \"allenfalls\", \"zumindest\", \"höchstens\" or \"wenigstens\""
      ],
      "modelAnswer": "Schöne Aussicht, schwacher Service\n\nDas Hotel Tannenhof bei Freudenstadt wird in vielen Reiseführern als Geheimtipp gefeiert, und zugegeben, die Lage ist traumhaft. Vom Balkon unseres Zimmers blickten wir direkt auf bewaldete Hügel, und der Wellnessbereich ist zwar klein, aber geschmackvoll eingerichtet.\n\nObgleich wir Monate im Voraus gebucht hatten, war unser Zimmer bei der Ankunft noch nicht fertig. Das mag an einem vollen Wochenende vorkommen, nur entschuldigte sich niemand dafür. Auch das Abendessen enttäuschte: Die Zutaten stammen zwar aus der Region, die Portionen erinnerten aber eher an Kostproben. Für 45 Euro pro Menü ist das allenfalls durchschnittlich.\n\nImmerhin war das Frühstück hervorragend, und das Personal im Spa nahm sich viel Zeit für uns. Die Massage war wenigstens ihr Geld wert.\n\nWürde ich wiederkommen? Höchstens für eine Nacht, und zwar im Winter, wenn die Landschaft verschneit ist. Familien mit kleinen Kindern rate ich eher ab, es sei denn, sie legen mehr Wert auf Natur als auf Service. Wer dagegen vor allem Ruhe sucht, wird sich hier wohlfühlen, vorausgesetzt, dass er keine großen Ansprüche an die Küche stellt.\n\nFazit: drei von fünf Sternen. Zumindest für die Aussicht lohnt sich die Reise.",
      "explanation": "The review concedes first (\"zugegeben\", \"zwar klein, aber geschmackvoll\", \"Das mag ... vorkommen, nur ...\") and then criticises, with the formal \"obgleich\" sending the verb to the end. \"Es sei denn\" and \"vorausgesetzt, dass\" restrict the recommendation to particular guests, and \"immerhin\", \"wenigstens\", \"allenfalls\", \"höchstens\" and \"zumindest\" weigh how much praise or blame each point deserves."
    }
  ],
  "c1-nominalization-2": [
    {
      "type": "write",
      "prompt": "Your former intern, Mira Klein, is applying for a trainee position at a publishing house and has asked you for a letter of recommendation. Write it, describing her qualities and achievements mainly with nouns derived from adjectives and verbs.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses at least five abstract nouns from adjectives with -heit, -keit, -igkeit, -ität or -e (\"Zuverlässigkeit\", \"Offenheit\", \"Kreativität\", \"die Stärke\")",
        "Uses -ung nouns and nominalised infinitives with the correct gender (\"die Betreuung\", \"das Formulieren\")",
        "Uses at least one nominalised adjective (\"das Wesentliche\", \"etwas Neues\")",
        "Follows the conventions of a formal reference: formal opening, tasks, qualities and an explicit recommendation"
      ],
      "modelAnswer": "Empfehlungsschreiben für Frau Mira Klein\n\nSehr geehrte Damen und Herren,\n\nFrau Mira Klein absolvierte von März bis August 2026 ein Praktikum in unserer Redaktion. Gern empfehle ich sie Ihnen für die ausgeschriebene Traineestelle.\n\nZu ihren Aufgaben gehörten die Betreuung unserer Social-Media-Kanäle, die Recherche für Reportagen und die Korrektur von Manuskripten. Besonders beeindruckt hat mich ihre Zuverlässigkeit: Termine hielt sie stets ein, auch in Zeiten hoher Arbeitsbelastung. Ihre Sorgfalt beim Redigieren und ihre Genauigkeit im Umgang mit Quellen waren für das gesamte Team eine große Hilfe.\n\nDarüber hinaus zeichnet sich Frau Klein durch Kreativität und Offenheit aus. Sie brachte regelmäßig neue Ideen ein und hatte ein sicheres Gespür für das Wesentliche einer Geschichte. Ihre besondere Stärke liegt im Schreiben kurzer, pointierter Texte; das Formulieren von Überschriften fiel ihr auffallend leicht. Ihre Freundlichkeit und Hilfsbereitschaft machten sie im Kollegium sehr beliebt.\n\nIch bin überzeugt, dass Frau Klein mit ihrer Neugier und ihrer Begeisterung für Literatur eine Bereicherung für Ihr Haus sein wird, und empfehle sie ohne jede Einschränkung.\n\nFür Rückfragen stehe ich Ihnen gern zur Verfügung.\n\nMit freundlichen Grüßen\nDr. Thomas Weber\nChefredakteur, Stadtmagazin Kassel",
      "explanation": "Her qualities appear as feminine nouns from adjectives: \"die Zuverlässigkeit\", \"die Genauigkeit\", \"die Offenheit\", \"die Kreativität\", \"die Freundlichkeit\", \"die Hilfsbereitschaft\" and \"die Stärke\". Tasks are feminine -ung nouns (\"die Betreuung\", \"die Arbeitsbelastung\"), and activities are neuter nominalised infinitives (\"beim Redigieren\", \"im Schreiben\", \"das Formulieren\"). \"Das Wesentliche\" is a nominalised adjective, typical of the dense, noun-based style of a formal reference."
    }
  ],
  "c1-nominalization-5": [
    {
      "type": "write",
      "prompt": "The student council at your university has run a survey on student housing. Write a short report on the results for the university newsletter, giving figures and describing changes, demands and criticism in a nominal style.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses noun + preposition combinations correctly (\"die Forderung nach\", \"die Kritik an\", \"der Bedarf an\", \"der Einfluss auf\")",
        "Describes figures with \"der Anstieg um / auf\", \"der Rückgang um\" and \"von ... auf\"",
        "Names a relationship with \"der Zusammenhang zwischen\" or \"die Abhängigkeit von\"",
        "Keeps an impersonal report style with a title and no first-person opinions"
      ],
      "modelAnswer": "Wohnen im Studium: Ergebnisse der Umfrage 2026\n\nAn der Umfrage des Studierendenrats nahmen im Mai rund 1.200 Studierende teil. Das wichtigste Ergebnis: Der Anstieg der Mieten belastet die meisten Befragten stark. Für ein WG-Zimmer zahlen sie inzwischen durchschnittlich 480 Euro, was einem Anstieg um zwölf Prozent gegenüber dem Vorjahr entspricht. Der Anteil der Studierenden, die bei ihren Eltern wohnen, stieg von 18 auf 24 Prozent.\n\nGleichzeitig verzeichnet die Umfrage einen Rückgang der Zufriedenheit mit den Wohnheimen um fast ein Drittel. Besonders groß ist der Bedarf an günstigen Einzelzimmern in Campusnähe. Viele Befragte üben Kritik an den langen Wartezeiten für einen Wohnheimplatz, die derzeit bis zu drei Semester betragen.\n\nAuffällig ist zudem der Zusammenhang zwischen Wohnsituation und Studienerfolg: Wer mehr als zwanzig Stunden pro Woche arbeiten muss, um die Miete zu bezahlen, berichtet deutlich häufiger von Prüfungsangst und Verzögerungen im Studium. Auch der Einfluss der Wohnkosten auf die Wahl des Studienorts wächst.\n\nDer Studierendenrat erneuert daher seine Forderung nach dem Bau eines neuen Wohnheims und nach einer Erhöhung der Mietzuschüsse. Ein Gespräch mit der Stadt ist für Juli geplant.",
      "explanation": "Each noun keeps the preposition of its verb or adjective: \"die Forderung nach\", \"Kritik an\", \"der Bedarf an\", \"der Einfluss auf\", \"die Zufriedenheit mit\". Figures use \"der Anstieg um\" for the size of the change and \"von 18 auf 24 Prozent\" for start and end point, and \"der Zusammenhang zwischen\" links two factors. Genitive chains (\"der Anstieg der Mieten\", \"der Bau eines neuen Wohnheims\") keep the report impersonal and compact."
    }
  ],
  "c1-participles-infinitives-2": [
    {
      "type": "write",
      "prompt": "Write a short anecdote for your blog about a chaotic first day at a new job, from leaving home in the morning to getting back in the evening. Use participial phrases instead of full clauses to keep the story compact.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses at least three participial phrases as adverbials (\"Am Bahnhof angekommen, ...\", \"Laut fluchend ...\", \"Völlig erschöpft ...\")",
        "Keeps the same subject in the participial phrase and the main clause (no dangling participles)",
        "Uses at least one extended participial attribute (\"ein mit alten Katalogen überfüllter Schreibtisch\")",
        "Narrates in the past with a clear sequence of events and a pointed ending"
      ],
      "modelAnswer": "Mein erster Arbeitstag\n\nAm Montag sollte mein neues Leben als Grafikerin in Köln beginnen. Pünktlich aufgestanden und bestens gelaunt, verließ ich um halb acht die Wohnung. Am Bahnhof angekommen, stellte ich fest, dass meine S-Bahn ausfiel. Laut fluchend lief ich zur Bushaltestelle, nur um zu sehen, wie mein Bus gerade abfuhr.\n\nMit zwanzig Minuten Verspätung und völlig außer Atem betrat ich schließlich das Büro. Freundlich lächelnd führte mich meine neue Chefin zu meinem Platz: einem mit alten Katalogen überfüllten Schreibtisch direkt neben der Kaffeemaschine. Von den vielen neuen Namen leicht überfordert, nickte ich bei jeder Vorstellung nur höflich.\n\nDer Vormittag verging mit Passwörtern, die nicht funktionierten, und einem ständig abstürzenden Computer. In der Mittagspause, endlich etwas zur Ruhe gekommen, verschüttete ich meinen Kaffee über die soeben ausgedruckte Präsentation meiner Kollegin. Vor Scham errötend, entschuldigte ich mich gefühlte hundert Mal.\n\nUm sechs Uhr, todmüde, aber irgendwie glücklich, machte ich mich auf den Heimweg. Zu Hause angekommen, schlief ich sofort auf dem Sofa ein. Am nächsten Morgen stellte ich mir zwei Wecker.",
      "explanation": "Participial phrases replace whole clauses: \"Am Bahnhof angekommen\" (Partizip II, completed action), \"Laut fluchend\" and \"Vor Scham errötend\" (Partizip I, simultaneous action). In each case the narrator is also the subject of the main clause, so nothing dangles. Extended attributes such as \"einem mit alten Katalogen überfüllten Schreibtisch\" and \"die soeben ausgedruckte Präsentation\" pack a relative clause into the noun phrase."
    }
  ],
  "c1-participles-infinitives-4": [
    {
      "type": "write",
      "prompt": "You have just been elected chair of your local sports club, TSV Grünwald. Write the short thank-you speech you give at the general meeting: thank the members and your predecessor, and say what you want to achieve.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses zu-infinitives in the past (\"behauptet, nichts geleistet zu haben\", \"sagen können, ... gemacht zu haben\")",
        "Uses a passive zu-infinitive (\"froh, gewählt worden zu sein\", \"hoffe, unterstützt zu werden\")",
        "Introduces a zu-infinitive with a correlate or an impersonal phrase (\"Ich lege Wert darauf, ...\", \"Es ist mir wichtig, ...\")",
        "Is shaped as a speech: greeting, thanks, plans and a closing"
      ],
      "modelAnswer": "Liebe Mitglieder, liebe Freundinnen und Freunde des TSV Grünwald,\n\nich bin ehrlich gesagt noch etwas überwältigt. Ich hatte zwar gehofft, gewählt zu werden, aber ich bin wirklich froh, mit einer so deutlichen Mehrheit gewählt worden zu sein. Herzlichen Dank für Ihr Vertrauen!\n\nMein besonderer Dank gilt Gerd Hoffmann, der den Verein zwölf Jahre lang geführt hat. Gerd behauptet zwar gern, nichts Besonderes geleistet zu haben, aber wir alle wissen es besser: Ohne ihn hätten wir weder die neue Halle noch die Jugendabteilung. Ich freue mich, ihn auch künftig als Berater an meiner Seite zu wissen.\n\nFür die nächsten drei Jahre habe ich mir einiges vorgenommen. Es ist mir wichtig, mehr junge Menschen für das Ehrenamt zu gewinnen. Außerdem lege ich großen Wert darauf, die Finanzen des Vereins transparent darzustellen. Ich hoffe, dabei von möglichst vielen von Ihnen unterstützt zu werden, denn ein Verein lebt von denen, die mit anpacken.\n\nAm Ende meiner Amtszeit möchte ich sagen können, den Verein ein Stück offener und jünger gemacht zu haben.\n\nUnd jetzt freue ich mich darauf, mit Ihnen anzustoßen. Vielen Dank!",
      "explanation": "The zu-infinitive carries tense and voice: \"nichts geleistet zu haben\" and \"gemacht zu haben\" look back, \"gewählt zu werden\" and \"unterstützt zu werden\" are passive, and \"gewählt worden zu sein\" is a completed passive. All of them work because the subject of the infinitive is the same as that of the main verb. \"Es ist mir wichtig, ...\" and \"Ich lege Wert darauf, ...\" announce the infinitive clause with an impersonal subject or the correlate \"darauf\"."
    }
  ],
  "c1-passive-impersonal-2": [
    {
      "type": "write",
      "prompt": "You spent the weekend at a wine festival in a village on the Mosel. Write an informal email to a friend describing what went on, focusing on the activities rather than on who did them.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses subjectless passives for activities (\"Es wurde getanzt\", \"Bis Mitternacht wurde gesungen\")",
        "Puts another element in first position so that the placeholder es disappears (\"Auf dem Marktplatz wurde getanzt\")",
        "Keeps a dative in a subjectless passive (\"Mir wurde geholfen\", \"Uns wurde gratuliert\")",
        "Uses an informal register with a greeting, personal comments and a sign-off"
      ],
      "modelAnswer": "Liebe Clara,\n\nviele Grüße von der Mosel! Ich bin gerade aus Bernkastel zurück, wo am Wochenende das große Weinfest stattfand, und ich muss dir unbedingt davon erzählen.\n\nEs wurde drei Tage lang gefeiert, und zwar fast ohne Pause. Schon am Freitagabend wurde auf dem Marktplatz getanzt, während auf der Bühne eine Blaskapelle spielte. In den engen Gassen wurde überall gelacht, gegessen und natürlich viel probiert. Getrunken wurde allerdings vernünftiger, als ich dachte, denn an jedem Stand gab es kostenloses Wasser.\n\nAm Samstag wurde die neue Weinkönigin gekrönt, und danach wurde bis tief in die Nacht gesungen. Leider hatte ich meinen Geldbeutel im Hotel vergessen, aber mir wurde von einer netten Winzerin sofort geholfen: Sie lud mich einfach auf ein Glas Riesling ein. Am Sonntag wurde dann nur noch lange gefrühstückt und gefaulenzt.\n\nÜbrigens wird hier nicht über das Wetter geklagt. Als es am Samstag kurz regnete, wurde unter den Sonnenschirmen einfach weitergefeiert.\n\nNächstes Jahr musst du unbedingt mitkommen! Ich habe dir zwei Flaschen mitgebracht. Wann wird bei dir probiert?\n\nHerzliche Grüße\ndeine Anna",
      "explanation": "Subjectless passives describe what happened without saying who did it: \"Es wurde ... gefeiert\", \"wurde ... getanzt\", \"wurde ... gesungen\". The placeholder \"es\" appears only when nothing else fills the first position; as soon as a time, place or the participle itself comes first (\"Am Samstag wurde ...\", \"Getrunken wurde ...\"), it disappears. With verbs that take a dative, the dative survives without becoming a subject: \"mir wurde ... geholfen\"."
    }
  ],
  "c1-passive-impersonal-6": [
    {
      "type": "write",
      "prompt": "An English-language expat magazine is running a German page and has asked you for a short, light-hearted article on the unwritten rules of German-speaking offices. Explain what is expected and what is frowned upon, without naming who expects it.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "States norms with \"man\" and its case forms \"einem / einen\" (\"Man duzt die Chefin nicht einfach\", \"Das sagt einem niemand\")",
        "Uses \"Das macht man nicht\", \"Das gehört sich nicht\" or \"Es gehört sich, ... zu\"",
        "Uses middle constructions with sich (\"Die Regeln lernen sich schnell\", \"Das lässt sich leicht merken\")",
        "Uses at least one passive for what is generally done (\"In vielen Firmen wird gemeinsam gegessen\")"
      ],
      "modelAnswer": "Pünktlich, aber bitte nicht zu früh: Ungeschriebene Regeln im Büro\n\nWer neu in einem deutschen Büro anfängt, bekommt viele Regeln erklärt, aber die wichtigsten sagt einem niemand. Zum Glück lernen sie sich schnell.\n\nErstens: Man duzt die Chefin nicht einfach, auch wenn sie jung und locker wirkt. Das Du wird angeboten, und zwar in der Regel von der älteren oder ranghöheren Person. Wer es sich einfach nimmt, macht einen schlechten ersten Eindruck. Das gehört sich nicht.\n\nZweitens: die Pünktlichkeit. Zu Besprechungen kommt man nicht irgendwann, sondern um Punkt zehn. Fünf Minuten Verspätung? Das macht man höchstens einmal.\n\nDrittens: das Mittagessen. In vielen Firmen wird gemeinsam gegessen, oft schon um halb zwölf. Es gehört sich, zu fragen, ob man sich dazusetzen darf, und allen „Mahlzeit“ zu wünschen, auch wenn einen das anfangs irritiert.\n\nUnd schließlich der Geburtstag: Hier bringt das Geburtstagskind den Kuchen mit, nicht umgekehrt. Diese Regel lässt sich leicht merken, und ein Blechkuchen backt sich schneller, als man denkt.\n\nKeine Sorge: In den ersten Wochen werden Neuen kleine Fehler verziehen. Danach allerdings nicht mehr.",
      "explanation": "Norms are stated impersonally with \"man\" (\"Man duzt ... nicht\", \"Das macht man ...\"), whose dative and accusative forms are \"einem\" and \"einen\" (\"sagt einem niemand\", \"auch wenn einen das irritiert\"). \"Das gehört sich nicht\" and \"Es gehört sich, ... zu\" express what is proper, while the middle constructions \"lernen sich schnell\", \"lässt sich leicht merken\" and \"backt sich schneller\" describe how things behave. The passives \"wird angeboten\", \"wird gemeinsam gegessen\" and \"werden ... verziehen\" keep the agent out of view."
    }
  ],
  "c1-literary-narration-3": [
    {
      "type": "write",
      "prompt": "Your town museum is preparing an exhibition on people who shaped local history. Write a short biography of a real or invented person for the exhibition booklet.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Narrates the life in the Präteritum, including strong and mixed verbs (\"wuchs auf\", \"verließ\", \"brachte\")",
        "Uses the Plusquamperfekt for events before the main storyline (\"Ihr Vater war früh gestorben\", \"nachdem sie ... übergeben hatte\")",
        "Structures the life with dates and time expressions (\"1895\", \"drei Jahre später\", \"jahrzehntelang\")",
        "Uses at least one rare strong form or strong/weak doublet correctly (\"schuf\", \"hing\", \"erschrak\")"
      ],
      "modelAnswer": "Margarete Hoffmann (1871–1943)\n\nMargarete Hoffmann wuchs als jüngste Tochter eines Webers in Bielefeld auf. Ihr Vater war früh gestorben, und die Familie hatte kaum genug Geld, um die Kinder zur Schule zu schicken. Mit vierzehn Jahren begann Margarete in einer Leinenfabrik zu arbeiten, wo sie täglich zwölf Stunden an den Maschinen stand.\n\n1895 verließ sie die Fabrik. Sie hatte in den Jahren zuvor abends Buchhaltung gelernt und fand nun eine Stelle in einem Handelskontor. Drei Jahre später gründete sie mit zwei Freundinnen eine Schule für Arbeitertöchter, die erste ihrer Art in der Stadt. Die Behörden begegneten dem Projekt zunächst mit Misstrauen, doch Margarete ließ sich nicht entmutigen. Sie schrieb Briefe, sprach mit Fabrikbesitzern und brachte schließlich sogar den Bürgermeister auf ihre Seite.\n\nMit der Schule schuf sie für Hunderte junger Frauen die Möglichkeit, einen Beruf zu erlernen. Nachdem sie die Leitung 1925 an ihre Nichte übergeben hatte, zog sie sich in ein kleines Haus am Stadtrand zurück. Dort starb sie im Winter 1943. Ihr Porträt hing jahrzehntelang im Eingang der Schule, die heute ihren Namen trägt.",
      "explanation": "The life is told in the Präteritum, the written tense of biographies, with strong and mixed forms such as \"wuchs auf\", \"stand\", \"verließ\", \"fand\" and \"sprach\", and the mixed verb \"brachte\". The Plusquamperfekt marks what lay before each stage (\"war früh gestorben\", \"hatte ... gelernt\", \"nachdem sie ... übergeben hatte\"). \"Schuf\" (created, from schaffen) and intransitive \"hing\" are the strong members of their doublets, unlike \"schaffte\" (managed) and \"hängte\" (hung something up)."
    }
  ],
  "c1-literary-narration-6": [
    {
      "type": "write",
      "prompt": "At your grandmother's birthday dinner last Sunday, your uncle and your cousin had a heated argument about her plan to drop out of university. Write a personal letter to a friend telling her what happened, quoting the key exchanges as direct speech.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses precise reporting verbs instead of sagen (\"entgegnete\", \"erwiderte\", \"wandte ein\", \"gestand\", \"flüsterte\", \"seufzte\")",
        "Uses the inverted inquit after direct speech (\"„...“, erwiderte sie.\") and splits a quotation with an inquit at least once",
        "Punctuates direct speech correctly with German quotation marks and the comma after the closing mark",
        "Narrates the evening in the Präteritum within an informal letter frame"
      ],
      "modelAnswer": "Liebe Johanna,\n\ndu glaubst nicht, was am Sonntag beim Geburtstagsessen meiner Oma los war. Wir saßen gerade beim Nachtisch, als meine Cousine Lea verkündete, sie werde ihr Jurastudium abbrechen und Tischlerin werden.\n\nOnkel Peter legte langsam die Gabel hin. „Das ist doch nicht dein Ernst“, sagte er leise.\n\n„Doch“, entgegnete Lea ruhig. „Ich habe lange genug darüber nachgedacht.“\n\n„Nach fünf Semestern?“, rief er. „Weißt du, was uns das alles gekostet hat?“\n\n„Darum geht es doch gar nicht“, erwiderte sie, „es geht um mein Leben.“\n\nTante Ruth wandte vorsichtig ein, man könne ja erst einmal ein Praktikum machen, aber niemand hörte ihr zu. Eine Weile war es still. Dann gestand Lea, dass sie seit Monaten kaum noch in die Vorlesungen ging und nachts nicht schlafen konnte. Da wurde Onkel Peter plötzlich ganz blass.\n\n„Warum hast du nie etwas gesagt?“, fragte er.\n\n„Weil ich wusste, wie du reagieren würdest“, flüsterte sie.\n\nEr seufzte nur. Am Ende umarmten sich die beiden, und Oma meinte trocken, das sei der spannendste Geburtstag seit Jahren gewesen.\n\nIch halte dich auf dem Laufenden!\n\nLiebe Grüße\nMiriam",
      "explanation": "Instead of repeating \"sagen\", the letter uses verbs that show how something was said: \"entgegnete\", \"rief\", \"erwiderte\", \"wandte ein\", \"gestand\", \"flüsterte\", \"seufzte\". After a quotation the inquit is inverted (\"„Doch“, entgegnete Lea\"), and a comma follows the closing quotation mark even after a question mark (\"„Nach fünf Semestern?“, rief er\"). \"„Darum geht es doch gar nicht“, erwiderte sie, „es geht ...“\" shows a quotation split by its inquit."
    }
  ],
  "c1-prepositions-precision-3": [
    {
      "type": "write",
      "prompt": "You are updating your profile on a professional networking site. Write the 'About me' section in German: your studies, the companies and institutions you have worked for, what you do now and what you are looking for.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses the right prepositions with companies and institutions (\"bei Bosch\", \"an der Universität\", \"am Lehrstuhl\", \"in einem Unternehmen\")",
        "Uses \"auf\" for trade fairs and conferences and \"im Homeoffice\" / \"vor Ort\" correctly",
        "Gives time spans with precise prepositions (\"seit 2022\", \"von 2014 bis 2019\", \"ab Januar\")",
        "Keeps a concise, professional first-person register"
      ],
      "modelAnswer": "Über mich\n\nIch bin Wirtschaftsingenieurin mit Schwerpunkt Logistik und arbeite seit 2022 als Projektmanagerin bei der Bosch GmbH in Stuttgart. Studiert habe ich an der Technischen Universität München, wo ich von 2014 bis 2019 auch als studentische Hilfskraft am Lehrstuhl für Supply Chain Management tätig war.\n\nMeine ersten Berufserfahrungen sammelte ich bei einer mittelständischen Spedition in Augsburg. Dort war ich zunächst in der Disposition, später in der Kundenbetreuung tätig und vertrat die Firma regelmäßig auf Fachmessen wie der transport logistic in München.\n\nBei Bosch koordiniere ich heute internationale Projekte zur Optimierung von Lieferketten. Ich arbeite zwei Tage pro Woche im Homeoffice und bin an den übrigen Tagen im Werk oder bei unseren Zulieferern vor Ort. Besonders schätze ich die Zusammenarbeit mit den Kolleginnen und Kollegen an unseren Standorten in Polen und in der Türkei.\n\nAb Januar 2027 suche ich eine neue Herausforderung, idealerweise in einem Unternehmen, das sich für nachhaltige Logistik engagiert. Gern tausche ich mich auch auf Konferenzen oder bei einem Kaffee über Themen wie Kreislaufwirtschaft aus.",
      "explanation": "Employers take \"bei\" (\"bei der Bosch GmbH\", \"bei einer Spedition\", \"bei unseren Zulieferern\"), universities and their chairs take \"an\" (\"an der Technischen Universität\", \"am Lehrstuhl\"), and departments take \"in\" (\"in der Disposition\"). Trade fairs and conferences take \"auf\", and \"im Homeoffice\", \"im Werk\" and \"vor Ort\" name the place of work. \"Seit\", \"von ... bis\" and \"ab\" mark exactly when each stage begins and ends."
    }
  ],
  "c1-prepositions-precision-5": [
    {
      "type": "write",
      "prompt": "A travel magazine has asked readers to describe their most memorable round trip. Write a short article about a three-week trip through Germany, Austria and Switzerland (real or imagined): where you went, how you got there and where you stayed.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses \"in\" + article with countries that have one (\"in die Schweiz\", \"in der Schweiz\", \"in die Niederlande\") and \"nach\" with the others (\"nach Österreich\", \"nach Bayern\")",
        "Uses \"auf\" for islands and mountains and \"an\" for lakes and coasts (\"auf Rügen\", \"auf die Zugspitze\", \"am Bodensee\", \"an der Ostsee\")",
        "Distinguishes location and direction consistently (\"im Schwarzwald\" vs \"in die Alpen\", \"auf dem Land\")",
        "Gives the article a title and a clear route"
      ],
      "modelAnswer": "Drei Länder, drei Wochen, ein Interrail-Pass\n\nUnsere Reise begann an der Ostsee. Nach zwei Tagen auf Rügen, wo wir am Strand von Binz die ersten Sonnenstrahlen genossen, fuhren wir mit dem Zug nach Berlin und von dort weiter nach Bayern. In München blieben wir nur eine Nacht, denn unser eigentliches Ziel waren die Berge: Mit der Zahnradbahn ging es auf die Zugspitze, wo wir mitten im Juli im Schnee standen.\n\nDanach reisten wir nach Österreich. In der Nähe von Salzburg wohnten wir bei Freunden auf dem Land und unternahmen Ausflüge an den Wolfgangsee und in die Alpen. Von Innsbruck aus fuhren wir schließlich in die Schweiz. Am Bodensee legten wir einen Zwischenstopp ein, bevor wir eine Woche bei meiner Tante in Zürich verbrachten. In der Schweiz ist zwar alles teuer, aber die Zugfahrt über den Gotthard war jeden Franken wert.\n\nDen letzten Abschnitt verbrachten wir im Schwarzwald. Wir wanderten durch dichte Wälder, übernachteten auf einem Bauernhof und fuhren am Ende müde, aber glücklich nach Hause, in die Niederlande.",
      "explanation": "Countries with an article take \"in\" (\"in die Schweiz\" for direction, \"in der Schweiz\" for location, \"in die Niederlande\"), while Austria, Bavaria and cities take \"nach\". Islands and mountains take \"auf\" (\"auf Rügen\", \"auf die Zugspitze\"), lakes and seas take \"an\" (\"an der Ostsee\", \"an den Wolfgangsee\", \"am Bodensee\"), and regions with an article take \"in\" (\"im Schwarzwald\", \"in die Alpen\"). The accusative marks each Wohin?, the dative each Wo?."
    }
  ],
  "c1-sein-haben-machen-2": [
    {
      "type": "write",
      "prompt": "Your flatmate Tim has been complaining for weeks about his job at a call centre and is thinking of quitting. Write the conversation the two of you have in the kitchen one evening about his situation and his plans.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses at least five haben idioms (\"es satt haben\", \"es schwer haben\", \"es eilig haben\", \"recht haben\", \"etwas vorhaben\")",
        "Uses \"etwas / nichts davon haben\" and \"zu tun haben mit\" correctly",
        "Uses at least one of \"es in sich haben\" or \"etwas gegen jemanden haben\"",
        "Writes a natural, colloquial dialogue in which the speakers react to each other"
      ],
      "modelAnswer": "Tim: Ich hab's echt satt. Heute haben mich wieder zwanzig Leute angeschrien, nur weil ihr Internet nicht funktioniert.\nLara: Das klingt furchtbar. Du hast es da wirklich nicht leicht.\nTim: Nicht leicht? Ich hab's richtig schwer! Und das Schlimmste ist: Mit dem eigentlichen Problem habe ich gar nichts zu tun. Ich darf nur Tickets weiterleiten.\nLara: Und was sagt dein Chef dazu?\nTim: Der hat es immer eilig. Fünf Minuten pro Gespräch, mehr nicht. Ich glaube, der hat was gegen mich.\nLara: Ach, das glaube ich nicht. Aber hast du schon mal überlegt, was du stattdessen machen willst?\nTim: Ehrlich gesagt, ja. Ich habe vor, mich bei der Stadtbibliothek zu bewerben. Die suchen jemanden für den IT-Support.\nLara: Das ist doch super! Da hättest du wenigstens mit netteren Menschen zu tun.\nTim: Schon, aber da verdiene ich weniger. Was habe ich davon, wenn ich am Ende die Miete nicht zahlen kann?\nLara: Da hast du natürlich recht. Aber was hast du von mehr Geld, wenn du jeden Abend so fertig bist?\nTim: Hm. Die Frage hat es in sich.\nLara: Eben. Schreib die Bewerbung, ich lese sie morgen Korrektur. Abgemacht?\nTim: Abgemacht.",
      "explanation": "The dialogue is built on haben idioms: \"es satt haben\" (to be fed up), \"es schwer / nicht leicht haben\", \"es eilig haben\", \"etwas gegen jemanden haben\", \"vorhaben\" + zu-infinitive and \"recht haben\" (where English uses be right). \"Was habe ich davon?\" asks what you gain, \"(nichts) zu tun haben mit\" means to deal with or have nothing to do with, and \"Die Frage hat es in sich\" means it is tougher than it looks."
    }
  ],
  "c1-sein-haben-machen-4": [
    {
      "type": "write",
      "prompt": "You had your car serviced at a garage in Hannover. You were charged for work you hadn't asked for, and the fault you had reported wasn't fixed. Write a formal letter of complaint to the garage.",
      "minWords": 120,
      "maxWords": 230,
      "rubric": [
        "Uses causative lassen, including the double infinitive in the Perfekt (\"Ich habe meinen Wagen warten lassen\")",
        "Chooses correctly between mich and mir with lassen (\"Ich habe mir die Rechnung erklären lassen\")",
        "Uses sich lassen for possibility (\"Das lässt sich leicht feststellen\") and lassen in another sense (\"Das lasse ich mir nicht gefallen\", \"dalassen\")",
        "Keeps a formal, firm register with facts, a clear demand and a deadline"
      ],
      "modelAnswer": "Beschwerde über Ihre Rechnung Nr. 4471 vom 2. Oktober\n\nSehr geehrte Damen und Herren,\n\nam 30. September habe ich meinen VW Golf (Kennzeichen H-KM 482) in Ihrer Werkstatt warten lassen. Bei der Auftragsannahme hatte ich ausdrücklich darauf hingewiesen, dass die Bremsen beim Anhalten quietschen, und darum gebeten, dies prüfen zu lassen. Weitere Arbeiten sollten nur nach Rücksprache durchgeführt werden.\n\nAuf der Rechnung waren jedoch neue Scheibenwischer, ein Ölwechsel mit Premiumöl und eine Klimareinigung aufgeführt, insgesamt 286 Euro mehr als vereinbart. Ich habe mir die Positionen von Ihrem Mitarbeiter erklären lassen, eine Begründung konnte er mir allerdings nicht geben. Das Quietschen der Bremsen ist dagegen unverändert. Das lässt sich bei einer kurzen Probefahrt leicht feststellen.\n\nIch habe die Rechnung nur unter Vorbehalt bezahlt, weil ich den Wagen dringend brauchte. Nicht beauftragte Arbeiten lasse ich mir jedoch nicht in Rechnung stellen. Ich bitte Sie daher, mir 286 Euro bis zum 20. Oktober zu erstatten und die Bremsen kostenlos zu überprüfen. Den Wagen lasse ich Ihnen dafür gern einen Tag lang da.\n\nSollte ich bis dahin nichts von Ihnen hören, werde ich mich an die Verbraucherzentrale wenden.\n\nMit freundlichen Grüßen\nKatrin Meyer",
      "explanation": "Causative lassen means having something done: \"habe ... warten lassen\" uses the double infinitive instead of a participle in the Perfekt. When the person who benefits is also there, she appears in the dative: \"Ich habe mir ... erklären lassen\", \"lasse ich mir nicht in Rechnung stellen\". \"Das lässt sich ... feststellen\" expresses possibility (it can be checked), and \"den Wagen dalassen\" is lassen in the sense of leave."
    }
  ],
  "c1-verb-prepositions-3": [
    {
      "type": "write",
      "prompt": "On a German online forum, someone asks: 'Would a four-day working week be good for everyone?' Write your reply post, giving your opinion and drawing on your own experience.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses at least three verbs whose meaning changes with the preposition (\"halten von\" / \"halten für\", \"leiden an\" / \"leiden unter\", \"sich freuen auf\" / \"über\", \"bestehen aus\" / \"auf\", \"ankommen auf\")",
        "Uses the correct case after each preposition",
        "Uses da-compounds for things and preposition + pronoun for people (\"darüber\" vs \"mit ihr\")",
        "Gives a clear opinion supported by a personal example and ends by addressing other users"
      ],
      "modelAnswer": "Was ich von der Vier-Tage-Woche halte? Sehr viel, allerdings nicht für alle Berufe.\n\nUnsere Firma hat sie vor einem Jahr eingeführt, und zwar auf Wunsch des Betriebsrats, der lange darauf bestanden hatte. Anfangs hielten viele das Ganze für eine Schnapsidee. Inzwischen freuen sich die meisten jede Woche auf den freien Freitag, und ich freue mich vor allem darüber, dass ich endlich mehr Zeit für meine Kinder habe. Meine Woche besteht jetzt aus vier langen, aber konzentrierten Tagen.\n\nMan sollte trotzdem nicht verschweigen, dass manche darunter leiden. Meine Kollegin im Kundenservice zum Beispiel leidet unter dem Druck, in vier Tagen genauso viele Anfragen zu erledigen wie früher in fünf. Ich habe lange mit ihr darüber gesprochen, und sie meinte, es komme eben auf die Organisation an.\n\nIn der Pflege oder im Handel sieht das sicher anders aus. Wo ohnehin Personal fehlt, würden mit einer Vier-Tage-Woche noch mehr Menschen an Erschöpfung leiden. Auf diese Idee würde ich in einem Krankenhaus also nicht kommen.\n\nMein Fazit: Ich halte die Vier-Tage-Woche für ein gutes Modell, wenn man sie flexibel gestaltet. Wie ist es bei euch?",
      "explanation": "The post plays with verbs that change meaning with their preposition: \"halten von\" (have an opinion of) vs \"halten für\" (consider to be), \"sich freuen auf\" (look forward to) vs \"sich freuen über\" (be glad about), \"bestehen auf\" (insist on) vs \"bestehen aus\" (consist of), \"leiden unter\" (suffer because of circumstances) vs \"leiden an\" (suffer from a condition), and \"ankommen auf\" (depend on) vs \"kommen auf\" (think of). Things become da-compounds (\"darauf\", \"darüber\", \"darunter\"), while the colleague stays \"mit ihr\"."
    }
  ],
  "c1-verb-prepositions-6": [
    {
      "type": "write",
      "prompt": "Your team has been arguing about how home-office days are organised, and your manager has asked you to draft new rules. Write a short proposal to the team as an internal memo.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses correlates that announce a dass-clause (\"darauf achten, dass\", \"dafür sorgen, dass\", \"Ärger darüber, dass\")",
        "Uses correlates that announce a zu-infinitive (\"daran denken, ... zu\", \"darum bitten, ... zu\", \"sich darauf einigen, ... zu\")",
        "Uses \"Es kommt darauf an, ob / dass ...\" or \"Es hängt davon ab, ob / wie ...\"",
        "Is structured as a proposal: reason, numbered rules and a request for feedback"
      ],
      "modelAnswer": "Vorschlag: Neue Regeln für das Homeoffice\n\nLiebe Kolleginnen und Kollegen,\n\nin den letzten Wochen gab es mehrfach Ärger darüber, dass bei wichtigen Besprechungen kaum jemand im Büro war. Frau Albers hat mich deshalb darum gebeten, einen Vorschlag für klarere Regeln auszuarbeiten.\n\n1. Feste Bürotage: Ich schlage vor, dass wir uns darauf einigen, dienstags und donnerstags alle im Büro zu sein. An diesen Tagen finden auch die Teamsitzungen statt.\n\n2. Planung: Wer an anderen Tagen ins Büro kommen möchte, sollte daran denken, sich im gemeinsamen Kalender einzutragen. So können wir dafür sorgen, dass immer genug Schreibtische frei sind.\n\n3. Erreichbarkeit: Im Homeoffice sollten alle darauf achten, dass sie zwischen 9 und 15 Uhr per Telefon und Chat erreichbar sind. Wann jemand darüber hinaus arbeitet, hängt natürlich davon ab, wie er seinen Tag organisiert.\n\n4. Ausnahmen: Ob Ausnahmen möglich sind, kommt darauf an, ob die Vertretung geklärt ist. Solche Fälle sollten wir unkompliziert im Team besprechen.\n\nIch bitte euch darum, mir bis Freitag Rückmeldung zu geben. Mir kommt es vor allem darauf an, dass wir eine Lösung finden, mit der alle leben können.\n\nViele Grüße\nDaniel",
      "explanation": "Each verb with a fixed preposition announces its clause with a da-compound, the Korrelat: \"Ärger darüber, dass ...\", \"darauf achten, dass ...\", \"dafür sorgen, dass ...\" before a dass-clause, and \"darum bitten, ... zu ...\", \"daran denken, ... zu ...\", \"sich darauf einigen, ... zu ...\" before a zu-infinitive. \"Es kommt darauf an, ob / dass ...\" and \"hängt davon ab, wie ...\" express what something depends on; with these verbs the correlate is obligatory."
    }
  ],
  "c1-mission-bericht-kernpunkte": [
    {
      "type": "write",
      "prompt": "Your company ran an anonymous staff survey on its new flexible working hours (Gleitzeit). Write a short summary report for your manager, Frau Neumann, highlighting the key results and ending with a recommendation.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Highlights key points with \"Hervorzuheben ist, dass ...\", \"Bemerkenswert ist ...\" or \"Es zeigt sich, dass ...\"",
        "Singles out details with \"insbesondere\", \"vor allem\" or \"und zwar\"",
        "Structures the report with sequencing markers (\"zunächst\", \"darüber hinaus\", \"ferner\")",
        "Concludes with a formal concluding marker (\"zusammenfassend lässt sich sagen\", \"alles in allem\") and a recommendation"
      ],
      "modelAnswer": "Betreff: Ergebnisse der Mitarbeiterbefragung zur Gleitzeit\n\nSehr geehrte Frau Neumann,\n\nanbei fasse ich die wichtigsten Ergebnisse unserer Befragung zur neuen Gleitzeitregelung zusammen. Von 140 Beschäftigten haben 112 teilgenommen.\n\nZunächst zur allgemeinen Zufriedenheit: 78 Prozent bewerten die Regelung positiv. Hervorzuheben ist, dass die Zufriedenheit in allen Altersgruppen ähnlich hoch ist. Besonders geschätzt wird die Möglichkeit, Arzttermine oder Kinderbetreuung besser mit der Arbeit zu vereinbaren.\n\nDarüber hinaus zeigt sich, dass die Kernzeit von 10 bis 15 Uhr als zu lang empfunden wird, und zwar vor allem von Eltern kleiner Kinder. Bemerkenswert ist ferner, dass 40 Prozent angeben, häufiger Überstunden zu machen als vor der Umstellung. Insbesondere im Vertrieb scheint die Zeiterfassung nicht zuverlässig zu funktionieren.\n\nKritisch äußerten sich einige Teilnehmende außerdem zur Abstimmung im Team: Besprechungen sind offenbar schwieriger zu planen, wenn alle zu unterschiedlichen Zeiten arbeiten.\n\nZusammenfassend lässt sich sagen, dass die Gleitzeit gut angenommen wird. Ich empfehle allerdings, die Kernzeit zu verkürzen und die Zeiterfassung im Vertrieb zu überprüfen.\n\nMit freundlichen Grüßen\nJan Hoffmann",
      "explanation": "\"Hervorzuheben ist, dass ...\", \"Bemerkenswert ist ferner, dass ...\" and \"zeigt sich, dass ...\" put the key findings in the spotlight, and \"und zwar vor allem\" and \"insbesondere\" narrow a point down to a group. \"Zunächst\", \"darüber hinaus\", \"ferner\" and \"außerdem\" guide the reader through the results, and \"Zusammenfassend lässt sich sagen\" introduces the conclusion, with \"allerdings\" adding the necessary qualification."
    }
  ],
  "c1-discourse-markers-5": [
    {
      "type": "write",
      "prompt": "Your friend Sophie wants to know how your first week at your new job went. Write out the voice message you send her, just as you would actually speak it.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses spoken markers to structure and hedge (\"also\", \"na ja\", \"sozusagen\", \"quasi\", \"irgendwie\")",
        "Uses tags and feedback words (\"ne\", \"oder\", \"genau\", \"ach so\")",
        "Uses weil with the verb in second position at least once, as in spoken German (\"weil, die Bahn fährt ...\")",
        "Uses halt or eben for things that can't be changed"
      ],
      "modelAnswer": "Hey Sophie, also, du wolltest ja wissen, wie meine erste Woche war. Na ja, wo fange ich an?\n\nAlso, die Leute sind echt nett, das muss ich sagen. Mein Chef ist so ein bisschen chaotisch, aber irgendwie sympathisch, weißt du? Am ersten Tag hatte er quasi vergessen, dass ich anfange. Ich stand da am Empfang, und keiner wusste Bescheid. Na ja, ist halt so, die hatten gerade ein großes Projekt.\n\nMein Job ist sozusagen eine Mischung aus Marketing und Kundenbetreuung. Genau, also das, was ich eigentlich immer machen wollte, ne? Das Einzige, was nervt, ist der Weg. Ich brauche fast eine Stunde, weil, die Bahn fährt halt nur alle zwanzig Minuten. Aber gut, dann höre ich eben Podcasts.\n\nAch so, und am Donnerstag waren wir alle zusammen essen. Da hab ich die Leute aus der Grafik kennengelernt, und die sind irgendwie total witzig. Ich glaube, da finde ich schnell Anschluss, oder?\n\nOkay, genau, das war's erst mal. Wollen wir am Wochenende telefonieren? Dann erzähle ich dir mehr. Bis dann, tschüss!",
      "explanation": "\"Also\" opens and resumes topics, \"na ja\" signals hesitation or acceptance, and \"sozusagen\", \"quasi\" and \"irgendwie\" hedge. \"Ne?\", \"oder?\" and \"weißt du?\" ask for agreement, \"genau\" closes a point, and \"ach so\" brings up something forgotten. In speech, \"weil\" is often followed by a pause and verb-second order (\"weil, die Bahn fährt halt ...\"), and \"halt\" and \"eben\" present things as unchangeable."
    }
  ],
  "c1-emphasis-focus-2": [
    {
      "type": "write",
      "prompt": "Everything went wrong on the day of your important job interview. Write a diary entry about the day.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses \"ausgerechnet\" for 'of all ...' at least twice",
        "Uses \"gerade\" and \"eben\" for 'just (now)' and \"genau\" for 'precisely'",
        "Uses \"nicht gerade\" as an understatement",
        "Is shaped as a diary entry: date, first person, feelings and a reflection at the end"
      ],
      "modelAnswer": "Dienstag, 8. April\n\nLiebes Tagebuch,\n\nausgerechnet heute, am Tag meines Vorstellungsgesprächs bei der Stadtbibliothek, ist alles schiefgegangen. Ich bin gerade erst nach Hause gekommen und muss das sofort aufschreiben.\n\nZuerst hat mein Wecker nicht geklingelt. Ausgerechnet der Wecker, den ich mir extra neu gekauft hatte! Als ich aus der Tür rannte, fing es an zu regnen, und mein Schirm lag natürlich noch im Büro. Die Straßenbahn war eben abgefahren, als ich an der Haltestelle ankam.\n\nIm Gespräch selbst lief es dann auch nicht gerade glänzend. Gleich die erste Frage war genau die, vor der ich mich am meisten gefürchtet hatte: warum ich meine jetzige Stelle schon nach einem Jahr verlassen will. Ich habe irgendetwas von neuen Herausforderungen gestammelt, und die Leiterin hat mich angeschaut, als hätte ich gerade einen Witz erzählt. Und ausgerechnet in diesem Moment hat mein Handy geklingelt.\n\nEben habe ich eine Mail bekommen: Sie melden sich in zwei Wochen. Genau das hat meine Mutter auch gesagt: abwarten. Vielleicht war es ja doch nicht so schlimm, wie es sich anfühlt. Morgen sehe ich das bestimmt gelassener.",
      "explanation": "\"Ausgerechnet\" (of all days, of all moments) stresses that something happened at the worst possible point, and it stands right before the element it focuses. \"Gerade\" and \"eben\" mean just or a moment ago (\"bin gerade erst ... gekommen\", \"war eben abgefahren\", \"Eben habe ich ... bekommen\"), while \"genau die\" and \"Genau das\" mean precisely that one. \"Nicht gerade glänzend\" is an understatement for badly."
    }
  ],
  "c1-emphasis-focus-5": [
    {
      "type": "write",
      "prompt": "Your local newspaper reported that the new community garden in your district was an idea of the mayor's office. In fact, residents started it. Write a letter to the editor setting the record straight.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses cleft-like structures (\"Es waren die Anwohner, die ...\", \"Was wir brauchen, ist ...\", \"Das Einzige, was ...\")",
        "Uses demonstrative der / die / das for emphasis (\"Die hat ...\", \"Das haben wir ...\")",
        "Puts contrastive information in the Vorfeld (\"Nicht die Stadt hat ..., sondern ...\")",
        "Follows the form of a letter to the editor: reference to the article, polite but firm correction, name and district"
      ],
      "modelAnswer": "Zum Artikel „Stadt eröffnet Gemeinschaftsgarten“ vom 3. Juni\n\nMit Freude habe ich Ihren Bericht über den neuen Gemeinschaftsgarten in der Südstadt gelesen. Eine Sache muss ich allerdings richtigstellen: Es war nicht das Rathaus, das die Idee dazu hatte. Es waren die Anwohnerinnen und Anwohner, die vor zwei Jahren die ersten Beete angelegt haben.\n\nAngefangen hat alles mit Frau Yıldız aus der Hausnummer 12. Die hat damals die Brachfläche hinter dem Supermarkt entdeckt und die Nachbarschaft zusammengetrommelt. Was uns fehlte, war nicht der Wille, sondern das Geld. Das haben wir mit Flohmärkten und Spenden gesammelt. Nicht die Stadt hat die Hochbeete gebaut, sondern eine Gruppe von Rentnern und Schülern, an vielen Wochenenden.\n\nDas Einzige, was die Stadt beigetragen hat, war die Genehmigung, und die hat über ein Jahr gedauert. Dafür sind wir durchaus dankbar, aber es wirkt schon etwas merkwürdig, wenn der Bürgermeister bei der Eröffnung das Band durchschneidet, als wäre der Garten sein Projekt.\n\nWas wir jetzt brauchen, ist kein Lob, sondern ein Wasseranschluss. Vielleicht kann die Stadt ja dabei helfen.\n\nThomas Berger, Südstadt",
      "explanation": "The cleft \"Es war nicht das Rathaus, das ...\" / \"Es waren die Anwohner, die ...\" singles out the real agent; the verb agrees with the plural noun. Pseudo-clefts (\"Was uns fehlte, war ...\", \"Was wir jetzt brauchen, ist ...\") and \"Das Einzige, was ...\" build up to the key information. Demonstratives in the Vorfeld (\"Die hat ...\", \"Das haben wir ...\", \"die hat ...\") pick up what was just mentioned, and \"Nicht die Stadt hat ..., sondern ...\" places the contrast in first position."
    }
  ],
  "c1-supposition-2": [
    {
      "type": "write",
      "prompt": "You and two friends arrive at your rented holiday cottage two hours late and find the door open, the lights on and half a cake on the table, but nobody there. Write the dialogue in which you speculate about what has happened.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Grades certainty with modal verbs (\"muss\", \"dürfte\", \"müsste\", \"kann nicht\", \"könnte\", \"mag\")",
        "Uses modals with the perfect infinitive for the past (\"Das muss der Vermieter gewesen sein\", \"Er könnte Besuch gehabt haben\")",
        "Uses Futur II with wohl for a guess about the past (\"Er wird wohl zu Fuß gekommen sein\")",
        "Writes a natural dialogue in which the speakers test and reject each other's guesses"
      ],
      "modelAnswer": "Jonas: Moment mal, die Tür ist offen. Und das Licht brennt!\nMira: Das muss der Vermieter gewesen sein. Er wollte doch heute die Heizung kontrollieren.\nJonas: Und der Kuchen? Der Vermieter bringt doch keinen Kuchen mit.\nMira: Stimmt. Der Kuchen dürfte von seiner Frau sein. Die backt doch ständig.\nLea: Aber warum ist dann die Hälfte weg? Die beiden können doch nicht einfach hier Kuchen gegessen haben.\nJonas: Wieso nicht? Vielleicht haben sie auf uns gewartet. Wir sind ja zwei Stunden zu spät.\nLea: Dann müsste sein Auto aber noch vor der Tür stehen. Da steht keins.\nMira: Er wird wohl zu Fuß gekommen sein. Er wohnt ja nur drei Häuser weiter.\nJonas: Und hier stehen vier Kaffeetassen. Er könnte Besuch gehabt haben.\nLea: Moment, seht mal, hier liegt ein Zettel: „Herzlich willkommen! Bedient euch!“\nMira: Das mag ja eine nette Geste sein, aber wer hat dann die Hälfte gegessen?\nJonas: Ich fürchte, das wird für immer ein Geheimnis bleiben.",
      "explanation": "The modals grade certainty: \"muss\" (almost certain), \"dürfte\" (probable), \"müsste\" (it should be so, if the guess is right), \"können nicht\" (impossible), \"könnte\" (possible) and concessive \"mag\". For the past, the modal combines with the perfect infinitive (\"muss ... gewesen sein\", \"können ... gegessen haben\", \"könnte ... gehabt haben\"), and Futur II with \"wohl\" (\"wird wohl ... gekommen sein\") is another way to guess about the past."
    }
  ],
  "c1-supposition-4": [
    {
      "type": "write",
      "prompt": "Since a new neighbour moved into the top-floor flat, everyone in your building has been gossiping about him. Write an informal email to a friend who used to live there, passing on the rumours while making clear that you don't believe all of them.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Reports what others say with hearsay sollen, including the past (\"Er soll Schriftsteller sein\", \"soll ... aufgetreten sein\")",
        "Reports someone's own claim with wollen (\"Sie will ihn gesehen haben\", \"Er will nichts gehört haben\")",
        "Distances yourself with \"angeblich\", \"laut ...\", \"wie es heißt\" or \"dem Vernehmen nach\"",
        "Keeps an informal, slightly ironic tone with your own comments"
      ],
      "modelAnswer": "Hallo Paula,\n\ndu glaubst nicht, was hier im Haus gerade los ist! Seit Anfang des Monats wohnt in deiner alten Wohnung unterm Dach ein gewisser Herr Falk, und alle reden über nichts anderes.\n\nEr soll Schriftsteller sein, und zwar ein ziemlich bekannter. Laut Frau Kowalski aus dem Erdgeschoss soll er sogar schon im Fernsehen aufgetreten sein. Sie will ihn in einer Talkshow gesehen haben, ist sich aber nicht ganz sicher, ob er es wirklich war. Herr Bauer behauptet, er arbeite nachts und schlafe tagsüber, was die Schreibmaschine um drei Uhr morgens erklären würde.\n\nAngeblich hat er auch einen Papagei, der Goethe zitieren kann. Den hat allerdings noch niemand gesehen, nur gehört. Und wie es heißt, soll er die Miete gleich für ein Jahr im Voraus bezahlt haben. Das halte ich für ein Gerücht.\n\nGestern habe ich ihn dann im Treppenhaus getroffen und vorsichtig nach dem Lärm gefragt. Er will nichts gehört haben, keine Schreibmaschine, keinen Papagei. Dabei hat er gelächelt, als wüsste er ganz genau, worüber alle reden.\n\nIch halte dich auf dem Laufenden!\n\nLiebe Grüße\nSanne",
      "explanation": "Hearsay \"sollen\" passes on what people say (\"Er soll Schriftsteller sein\"), with the perfect infinitive for the past (\"soll ... aufgetreten sein\", \"soll ... bezahlt haben\"). \"Wollen\" reports a person's own claim that the writer doubts (\"Sie will ihn ... gesehen haben\", \"Er will nichts gehört haben\"). \"Laut Frau Kowalski\", \"angeblich\" and \"wie es heißt\" add distance, and \"behauptet, er arbeite\" uses the Konjunktiv I of reported speech."
    }
  ],
  "c1-registers-2": [
    {
      "type": "write",
      "prompt": "A reader has written to the advice column of a magazine for newcomers to Germany: everyone in her new team says du to each other, but she doesn't know whether to say du to her boss and to an older colleague in accounting. Write the columnist's reply.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Explains who offers das Du (the older or higher-ranking person) and how (\"Wollen wir uns duzen?\")",
        "Contrasts at least three settings (start-up, bank or public office, sports club or mountain hut)",
        "Shows how to decline the Du gracefully with a ready-made phrase",
        "Addresses the reader with Sie in the warm, advisory tone of a column"
      ],
      "modelAnswer": "Liebe Frau Okafor,\n\nIhre Unsicherheit ist völlig verständlich, denn selbst Deutsche sind sich beim Duzen nicht immer sicher.\n\nDie Grundregel lautet: Das Du bietet die ältere oder ranghöhere Person an. Ihre Chefin sollte also den ersten Schritt machen, etwa mit der Frage „Wollen wir uns nicht duzen?“. Solange das nicht passiert, bleiben Sie beim Sie, auch wenn das Team untereinander locker ist. Bei der älteren Kollegin in der Buchhaltung gilt dasselbe: Warten Sie ab, ob sie Ihnen das Du anbietet.\n\nVieles hängt allerdings von der Branche ab. In Start-ups und Werbeagenturen duzen sich oft alle vom ersten Tag an, bis hinauf zur Geschäftsführung. In Banken, Behörden oder Kanzleien ist das Sie dagegen nach wie vor üblich. Im Sportverein und auf der Berghütte wiederum duzt man sich fast immer.\n\nUnd falls Ihnen jemand das Du anbietet, Sie sich damit aber nicht wohlfühlen? Dann dürfen Sie freundlich ablehnen: „Das ist sehr nett, aber ich bleibe im Beruf lieber beim Sie.“ Das wird Ihnen niemand übelnehmen.\n\nIch wünsche Ihnen einen guten Start im neuen Team!\n\nIhre Claudia Brenner",
      "explanation": "The reply states the rule that the older or higher-ranking person offers the Du (\"Wollen wir uns nicht duzen?\") and then shows how much it depends on the setting: du from day one in start-ups, Sie in banks and offices, du in clubs and mountain huts. \"Ich bleibe im Beruf lieber beim Sie\" is a polite way to decline, and the columnist herself uses Sie and \"Ihre\" throughout."
    }
  ],
  "c1-registers-4": [
    {
      "type": "write",
      "prompt": "You would like to install a small plug-in solar system (Balkonkraftwerk) on the balcony of your rented flat. Write a formal letter to your landlord, Dr. Lindner, asking for permission, using the politeness formulas of formal written German.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses formal politeness formulas (\"Ich wäre Ihnen sehr verbunden, wenn ...\", \"Dürfte ich Sie bitten, ...?\")",
        "Softens requests and offers with Konjunktiv II and words like \"gegebenenfalls\", \"selbstverständlich\", \"gern\"",
        "Chooses formal vocabulary over neutral or colloquial equivalents (\"beabsichtigen\", \"Genehmigung erteilen\", \"zukommen lassen\")",
        "Follows the conventions of a formal letter (subject line, formal salutation and closing)"
      ],
      "modelAnswer": "Anfrage: Genehmigung für ein Balkonkraftwerk\n\nSehr geehrter Herr Dr. Lindner,\n\nich wohne seit 2021 in Ihrer Wohnung in der Gartenstraße 14, 2. OG links, und wende mich heute mit einer Bitte an Sie.\n\nIch beabsichtige, auf meinem Balkon ein kleines Balkonkraftwerk mit zwei Solarmodulen zu installieren. Die Module würden innen am Geländer befestigt, sodass die Fassade nicht beschädigt würde und von der Straße aus kaum etwas zu sehen wäre. Die Anlage ist zertifiziert und wird über eine gewöhnliche Steckdose angeschlossen; die Anmeldung beim Netzbetreiber würde ich selbstverständlich übernehmen.\n\nIch wäre Ihnen sehr verbunden, wenn Sie mir hierfür Ihre Genehmigung erteilen könnten. Gern lasse ich Ihnen vorab das Datenblatt der Anlage zukommen. Dürfte ich Sie zudem bitten, mir mitzuteilen, ob Sie besondere Anforderungen an die Befestigung haben? Sollten Sie Bedenken haben, könnten wir die Angelegenheit gegebenenfalls bei einem kurzen Termin vor Ort besprechen.\n\nFür Ihre Mühe danke ich Ihnen im Voraus und würde mich freuen, bald von Ihnen zu hören.\n\nMit freundlichen Grüßen\nElena Petrova",
      "explanation": "\"Ich wäre Ihnen sehr verbunden, wenn ...\" and \"Dürfte ich Sie ... bitten, ...?\" are the high-register request formulas, and the Konjunktiv II (\"würden ... befestigt\", \"könnten wir ... besprechen\", \"würde mich freuen\") keeps every proposal tentative. Formal verbs replace everyday ones: \"beabsichtigen\" instead of vorhaben, \"die Genehmigung erteilen\" instead of erlauben, \"zukommen lassen\" instead of schicken, and \"sich mit einer Bitte an jemanden wenden\"."
    }
  ],
  "c1-german-world-2": [
    {
      "type": "write",
      "prompt": "A Vienna city guide invites readers to review their favourite traditional coffee house. Write your review in Austrian Standard German, as a Viennese writer would.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses at least five Austrian words (\"heuer\", \"Jänner\", \"Obers\", \"Paradeiser\", \"Erdäpfel\", \"Sessel\", \"Polster\", \"Kassa\")",
        "Uses the Austrian Perfekt with sein for sitzen, stehen or liegen (\"ich bin ... gesessen\")",
        "Uses Austrian coffee-house conventions and forms of address (\"Grüß Gott\", \"der Herr Ober\", \"Melange\")",
        "Gives a balanced judgement with a clear recommendation"
      ],
      "modelAnswer": "Café Rainer: Hier hat Zeit noch einen Wert\n\nSeit ich heuer im Jänner in die Josefstadt gezogen bin, bin ich fast jeden Samstag im Café Rainer gesessen, und ich habe es noch keinen einzigen Tag bereut.\n\nSchon beim Eintreten fühlt man sich in eine andere Zeit versetzt: dunkles Holz, kleine Marmortische, rote Polster auf den alten Sesseln und ein Stapel Zeitungen, durch den man sich stundenlang lesen darf. Der Herr Ober grüßt mit einem knappen „Grüß Gott, der Herr“ und bringt die Melange, ohne zu fragen, sobald er einen kennt. Dazu gibt es selbstverständlich ein Glas Wasser, das unaufgefordert nachgefüllt wird.\n\nDie Mehlspeisen sind hervorragend. Der Topfenstrudel kommt noch warm auf den Tisch, und zu den Marillenknödeln gehört eine ordentliche Portion Schlagobers. Zu Mittag gibt es auch ein kleines Menü, etwa Faschiertes mit Erdäpfelpüree oder einen Paradeisersalat.\n\nEin bisserl Geduld sollte man allerdings mitbringen. Wer zahlen will, muss oft eine Viertelstunde warten, bis der Ober wieder vorbeischaut, und an der Kassa nimmt man nur Bargeld. Aber auch das gehört nun einmal zum Wiener Kaffeehaus.\n\nMein Fazit: Wer Hektik sucht, ist hier falsch. Wer einen Nachmittag lang einfach nur dasitzen will, ist im Café Rainer goldrichtig.",
      "explanation": "The review is written in Austrian Standard German: \"heuer\" (this year), \"Jänner\", \"Polster\" and \"Sessel\" (cushions and chairs), \"Obers\", \"Topfen\", \"Marillen\", \"Faschiertes\", \"Erdäpfel\", \"Paradeiser\", \"Kassa\" and \"ein bisserl\". \"Ich bin ... gesessen\" is the Austrian Perfekt of sitzen with sein, and \"Grüß Gott, der Herr\", \"der Herr Ober\" and the \"Melange\" with its glass of water belong to the coffee-house ritual."
    }
  ],
  "c1-german-world-4": [
    {
      "type": "write",
      "prompt": "A culture magazine has asked you for a short article about a region outside Germany, Austria and Switzerland where German is spoken. Write about South Tyrol: its history, how German and Italian coexist today and what visitors notice about the language.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Gives factual background with dates and figures (\"seit 1919\", \"etwa zwei Drittel\")",
        "Explains how the language groups coexist (bilingual signs, separate schools, the Proporz, the bilingualism exam)",
        "Names at least two features of South Tyrolean German, such as Italian loans (\"das Patent\", \"die Targa\", \"die Bar\") and the dialect",
        "Gives the article a title and an engaging opening"
      ],
      "modelAnswer": "Deutsch unter italienischer Sonne\n\nWer in Bozen aus dem Zug steigt, liest zuerst „Bolzano“ und gleich daneben „Bozen“. Schon am Bahnhof wird klar: Hier leben zwei Sprachen nebeneinander, manchmal sogar drei.\n\nSüdtirol gehörte jahrhundertelang zu Tirol und damit zu Österreich, bevor es 1919 Italien zugesprochen wurde. Heute sprechen etwa zwei Drittel der rund halben Million Einwohner Deutsch als Muttersprache, ein Viertel Italienisch und eine kleine Gruppe Ladinisch. Deutsch und Italienisch sind gleichberechtigte Amtssprachen, und alle Ortsnamen stehen in beiden Sprachen auf den Schildern.\n\nDer Alltag ist nach Sprachgruppen organisiert. Die Kinder besuchen deutsch- oder italienischsprachige Schulen, und wer im öffentlichen Dienst arbeiten will, muss die Zweisprachigkeitsprüfung ablegen. Öffentliche Stellen werden nach dem sogenannten Proporz verteilt, also nach der Größe der einzelnen Sprachgruppen.\n\nBesucher aus Deutschland bemerken schnell, dass das Südtiroler Hochdeutsch dem österreichischen ähnelt, aber auch italienische Wörter enthält. Man macht hier nicht den Führerschein, sondern das Patent, das Nummernschild heißt Targa, und auf einen Kaffee geht man in die Bar. Auf der Straße hört man dagegen vor allem Tiroler Dialekt, den selbst Bayern nicht immer sofort verstehen.\n\nEin Besuch lohnt sich also nicht nur wegen der Dolomiten, sondern auch für alle, die sich für Sprache interessieren.",
      "explanation": "The article gives the key facts of South Tyrol's history and language situation (Italian since 1919, about two thirds German speakers, two official languages, separate schools, the Proporz and the Zweisprachigkeitsprüfung). It then names typical South Tyrolean words borrowed from Italian, \"das Patent\" for Führerschein, \"die Targa\" for Nummernschild and \"die Bar\" for café, and contrasts the written standard with the spoken dialect."
    }
  ],
  "c1-regional-vocabulary-1": [
    {
      "type": "write",
      "prompt": "Write a short anecdote for a language-learning blog about a misunderstanding at a bakery somewhere in the German-speaking world, for example ordering a 'Berliner' in Berlin or 'Brötchen' in Munich.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses at least four regional bakery words and makes their meaning clear (\"Rundstück\", \"Schrippe\", \"Semmel\", \"Weckle\"; \"Berliner\", \"Pfannkuchen\", \"Krapfen\"; \"Sahne\", \"Schlagobers\")",
        "Places each word in the right city or region",
        "Narrates in the Präteritum with direct speech at the bakery counter",
        "Ends with what you learned from the misunderstanding"
      ],
      "modelAnswer": "Pfannkuchen ist nicht gleich Pfannkuchen\n\nAls ich nach dem Abitur von Hamburg nach Berlin zog, glaubte ich, dieselbe Sprache zu sprechen wie die Berliner. Am ersten Morgen ging ich in die Bäckerei um die Ecke und bestellte wie zu Hause „zwei Rundstücke, bitte“. Die Verkäuferin sah mich an, als käme ich vom Mond. „Sie meinen Schrippen?“, fragte sie schließlich. Ich nickte, obwohl ich keine Ahnung hatte.\n\nDann zeigte ich auf die runden, mit Marmelade gefüllten Teilchen in der Vitrine. „Und einen Berliner, bitte.“ „Det is 'n Pfannkuchen“, korrigierte sie mich, diesmal mit einem Lächeln. In Berlin heißt das Gebäck, das im übrigen Deutschland Berliner genannt wird, nämlich Pfannkuchen.\n\nEin Jahr später besuchte ich eine Freundin in München und wollte mit meinem neuen Wissen glänzen. In der Bäckerei verlangte ich selbstbewusst einen Pfannkuchen und erntete nur einen ratlosen Blick. In Bayern heißt das Ding nämlich Krapfen, und die Brötchen heißen Semmeln. Ein Pfannkuchen ist dort etwas Flaches aus der Pfanne.\n\nSeitdem frage ich in jeder neuen Stadt zuerst, wie man dort Brötchen sagt. In Stuttgart sind es Weckle, in Wien Semmeln, und zum Kaffee bestellt man in Wien keine Sahne, sondern Schlagobers.",
      "explanation": "The anecdote maps the bakery words onto their regions: \"Rundstück\" (Hamburg), \"Schrippe\" (Berlin), \"Semmel\" (Bavaria and Austria) and \"Weckle\" (Swabia) all mean Brötchen; the jam doughnut is a \"Berliner\" in most of Germany, a \"Pfannkuchen\" in Berlin and a \"Krapfen\" in Bavaria and Austria; and cream is \"Sahne\" in Germany but \"Schlagobers\" in Vienna. The story is told in the Präteritum with direct speech, and the baker's „Det is 'n Pfannkuchen“ adds a touch of Berlin dialect."
    }
  ],
  "c1-regional-vocabulary-4": [
    {
      "type": "write",
      "prompt": "You have been working in Zurich for a month. Write a letter to your grandparents in Germany about your everyday life, using the Swiss words you have picked up and writing as the Swiss do.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses at least six Swiss words (\"Velo\", \"Trottoir\", \"Billett\", \"Znüni\", \"Zvieri\", \"Glace\", \"Poulet\", \"Rüebli\", \"zügeln\", \"Abwart\", \"Natel\")",
        "Writes ss instead of ß throughout, as in Swiss Standard German (\"Grüsse\", \"grösser\")",
        "Uses Swiss verbs and grammar where natural (\"grillieren\", \"zügeln\", \"das Tram\")",
        "Uses the conventions of an informal letter (greeting, news, closing)"
      ],
      "modelAnswer": "Liebe Oma, lieber Opa,\n\nviele Grüsse aus Zürich! Seit vier Wochen wohne ich jetzt hier, und langsam gewöhne ich mich an mein neues Leben, auch an die Sprache.\n\nIns Büro fahre ich jeden Morgen mit dem Velo, allerdings auf dem Velostreifen und nie auf dem Trottoir, das sieht man hier gar nicht gern. Wenn es regnet, nehme ich das Tram. Das Billett muss man vorher am Automaten lösen, sonst wird es teuer.\n\nDas Schönste am Arbeitstag ist der Znüni um halb zehn: Alle treffen sich in der Küche, essen ein Gipfeli und plaudern. Am Nachmittag gibt es dann noch den Zvieri. Meine Kolleginnen sind sehr nett, nur verstehe ich ihr Schweizerdeutsch noch kaum. Wenn sie merken, dass ich nicht mitkomme, sagen sie „Exgüsi“ und wechseln ins Hochdeutsche.\n\nAm Samstag haben wir am See grilliert: Poulet, Rüebli und viel zu viel Brot. Danach gab es Glace aus der Badi.\n\nNächsten Monat zügle ich in eine grössere Wohnung in Oerlikon. Der Abwart dort hat mir schon genau erklärt, wann ich den Kehricht hinausstellen darf. Ihr seht: Ordnung muss sein, auch in der Schweiz.\n\nRuft mich doch mal auf dem Natel an!\n\nHerzliche Grüsse\neure Lena",
      "explanation": "The letter uses everyday Helvetisms: \"Velo\" (Fahrrad), \"Trottoir\" (Bürgersteig), \"das Tram\" (neuter in Switzerland), \"Billett\", \"Znüni\" and \"Zvieri\" (mid-morning and afternoon snacks), \"Gipfeli\", \"Poulet\", \"Rüebli\", \"Glace\", \"Badi\", \"Abwart\", \"Kehricht\" and \"Natel\". The verbs \"grillieren\" and \"zügeln\" (to move house) are Swiss too, and Swiss Standard German has no ß, so the letter writes \"Grüsse\" and \"grössere\"."
    }
  ],
  "c1-colloquial-german-1": [
    {
      "type": "write",
      "prompt": "Write a WhatsApp chat between you and a friend arranging to go to a concert tonight, where one of you has a problem with tickets or transport. Write it the way people really type when they chat.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses reduced spoken forms („hab“, „is“, „nich“, „'n“, „ham“, „haste“, „kannste“, „geht's“, „gibt's“)",
        "Drops subjects or objects as in speech („Kenn ich.“, „Weiß nich.“, „Mach ich.“, „Passt.“)",
        "Uses the am-progressive („Ich bin grad am Kochen“)",
        "Keeps the chat natural, with short turns and a clear outcome"
      ],
      "modelAnswer": "Jana: Hey, haste heut Abend Zeit? Die Band aus Leipzig spielt im Lido.\nTom: Kenn ich! Die sind echt gut. Aber ich hab kein Ticket mehr gekriegt.\nJana: Kein Ding, ich hab zwei. Meine Schwester kann nich, die is krank.\nTom: Oh, gute Besserung an sie! Wann geht's los?\nJana: Einlass is um acht. Kannste mich abholen? Mein Fahrrad hat 'n Platten.\nTom: Hm, mein Auto is grad in der Werkstatt. Die ham's noch nich fertig.\nJana: Mist. Dann nehmen wir halt die U-Bahn, ne?\nTom: Klar. Ich bin aber grad noch am Kochen. Treffen wir uns um halb acht am Kotti?\nJana: Passt. Ich bring die Tickets mit.\nTom: Super. Gibt's da eigentlich was zu essen?\nJana: Weiß nich genau. Iss lieber vorher was.\nTom: Mach ich. Und danach noch 'n Bier?\nJana: Mal sehen, ich muss morgen früh raus. Bis gleich!\nTom: Bis gleich!",
      "explanation": "The chat is written as people speak: „haste“, „kannste“, „hab“, „is“, „nich“, „'n“, „ham's“, „geht's“ and „gibt's“ are the reduced forms of habe, ist, nicht, ein, haben es and gibt es. Subjects and objects are dropped where the context makes them clear („Kenn ich“, „Weiß nich genau“, „Mach ich“, „Passt“), and „Ich bin grad noch am Kochen“ is the colloquial am-progressive. None of this belongs in neutral written German."
    }
  ],
  "c1-colloquial-german-6": [
    {
      "type": "write",
      "prompt": "Write a diary entry about a really bad week, in relaxed, colloquial German, the way you would only write for yourself.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses at least five colloquial idioms („die Nase voll haben“, „jdn versetzen“, „jdm auf den Keks gehen“, „sich den Kopf zerbrechen“, „null Bock haben“, „Kohldampf haben“, „Schwein haben“, „Das ist mir Wurst“)",
        "Uses the idioms with the right grammar („geht mir auf den Keks“, „hat mich versetzt“, „hab mir den Kopf zerbrochen“)",
        "Keeps a consistent colloquial register without vulgar words",
        "Gives the week a structure (day by day) and ends with a turning point"
      ],
      "modelAnswer": "Freitag, spät abends\n\nWas für eine Woche! Ich hab echt die Nase voll.\n\nAm Montag hat mich Lukas versetzt. Wir waren um sieben vorm Kino verabredet, und ich stand eine halbe Stunde allein da. Seine Ausrede am nächsten Tag: Er hätte es total verpeilt. Na super.\n\nAm Dienstag ging dann der Stress im Büro los. Mein neuer Teamleiter geht mir so was von auf den Keks: Ständig will er wissen, woran ich gerade sitze, und jede Mail liest er dreimal. Ich hab mir die halbe Nacht den Kopf darüber zerbrochen, ob ich mit ihm reden soll.\n\nMittwoch und Donnerstag hatte ich null Bock auf irgendwas. Nicht mal auf Sport. Abends hatte ich zwar Kohldampf, aber keine Lust zu kochen, also gab's zweimal Pizza vom Lieferdienst.\n\nUnd heute? Heute hatte ich zur Abwechslung mal Schwein: Die Präsentation, vor der ich solche Panik hatte, ist ausgefallen, weil der Beamer nicht ging. Und mein Teamleiter hat sich sogar für sein Gemecker entschuldigt.\n\nOb Lukas sich noch meldet, ist mir inzwischen ehrlich gesagt Wurst. Morgen schlaf ich erst mal aus. Danach sieht die Welt bestimmt wieder anders aus.",
      "explanation": "Colloquial idioms carry the entry: „die Nase voll haben“ (be fed up), „jemanden versetzen“ (stand someone up), „jemandem auf den Keks gehen“ (with the dative), „sich den Kopf zerbrechen“, „null Bock haben auf“, „Kohldampf haben“ (be starving), „Schwein haben“ (be lucky) and „Das ist mir Wurst“ (I couldn't care less). Reduced forms like „hab“, „vorm“, „gab's“ and „schlaf“ fit the private register, and nothing slides into vulgar language."
    }
  ],
  "c1-transform-einleitungssatz": [
    {
      "type": "write",
      "prompt": "You are moving to Canada and want to cancel your gym membership (contract number FS-20817) at FitStar GmbH in Cologne early. Yesterday an employee confirmed on the phone that a move abroad allows this. Write the formal cancellation letter.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Opens without starting with ich, using \"wie telefonisch besprochen\", \"Bezug nehmend auf\" or \"vielen Dank für\"",
        "States the cancellation unambiguously with \"hiermit\" and a date (\"kündige ich hiermit ... zum ...\")",
        "Refers to enclosures (\"beigefügt\", \"Anlage\") and asks for written confirmation",
        "Follows German letter conventions: place and date, subject line without the word Betreff, salutation followed by lowercase, formal closing"
      ],
      "modelAnswer": "Köln, 12. Oktober 2026\n\nKündigung meiner Mitgliedschaft, Vertragsnummer FS-20817\n\nSehr geehrte Damen und Herren,\n\nwie gestern mit Ihrer Mitarbeiterin Frau Schulz telefonisch besprochen, kündige ich hiermit meine Mitgliedschaft in Ihrem Studio in Köln-Ehrenfeld außerordentlich zum 30. November 2026.\n\nGrund für die vorzeitige Kündigung ist mein Umzug nach Kanada, wo ich am 1. Dezember eine neue Stelle antrete. Eine Nutzung Ihrer Angebote ist mir danach nicht mehr möglich. Laut Ziffer 7 Ihrer Allgemeinen Geschäftsbedingungen berechtigt ein Umzug ins Ausland zur Kündigung mit einer Frist von einem Monat. Eine Kopie meines neuen Arbeitsvertrags habe ich diesem Schreiben beigefügt; die Abmeldebescheinigung reiche ich nach.\n\nBitte bestätigen Sie mir den Eingang dieser Kündigung und das Vertragsende schriftlich. Darüber hinaus bitte ich Sie, ab Dezember keine Beiträge mehr von meinem Konto abzubuchen.\n\nFür die angenehme Zeit in Ihrem Studio bedanke ich mich herzlich.\n\nMit freundlichen Grüßen\n\nDaniel Wolf\n\nAnlage\nArbeitsvertrag (Kopie)",
      "explanation": "The letter opens with \"wie ... telefonisch besprochen\" instead of a sentence starting with ich, and \"kündige ich hiermit ... zum 30. November 2026\" makes the cancellation legally unambiguous. \"Diesem Schreiben beigefügt\" and the \"Anlage\" line refer to the enclosure. As in DIN 5008, the subject line has no \"Betreff\", the text after the salutation begins in lowercase, and \"Mit freundlichen Grüßen\" closes the letter."
    }
  ],
  "c1-formal-correspondence-5": [
    {
      "type": "write",
      "prompt": "After two interviews, a logistics company in Bremen has offered you a job, but you have accepted another offer. Write a professional email to the HR manager, Herr Brandt, declining politely and leaving the door open for the future.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Thanks and acknowledges first (\"vielen Dank für Ihr Angebot vom ...\", \"Ich habe mich sehr darüber gefreut, dass ...\")",
        "Declines politely with a softened formula (\"Nach reiflicher Überlegung muss ich Ihnen leider mitteilen, dass ...\")",
        "Gives a brief, tactful reason and expresses regret (\"Ich bedaure, ...\")",
        "Leaves the door open and closes with a suitable formula"
      ],
      "modelAnswer": "Betreff: Ihr Stellenangebot als Logistikplanerin\n\nSehr geehrter Herr Brandt,\n\nvielen Dank für Ihr Angebot vom 6. Oktober und für die angenehmen Gespräche in den vergangenen Wochen. Ich habe mich sehr darüber gefreut, dass Sie mir die Stelle als Logistikplanerin anbieten.\n\nNach reiflicher Überlegung muss ich Ihnen jedoch leider mitteilen, dass ich das Angebot nicht annehmen kann. Parallel zu unserem Gespräch lief ein weiteres Bewerbungsverfahren, und ich habe mich inzwischen für eine Position entschieden, die näher an meinem bisherigen Schwerpunkt im Einkauf liegt. Diese Entscheidung ist mir nicht leichtgefallen, denn Ihr Team und die Aufgaben in Bremen haben mich sehr überzeugt.\n\nIch bedaure, Ihnen keine positivere Nachricht geben zu können, und hoffe, dass Sie die Stelle bald passend besetzen. Für Ihre Zeit und das Vertrauen, das Sie mir entgegengebracht haben, danke ich Ihnen herzlich.\n\nIch würde mich freuen, wenn sich unsere Wege in Zukunft noch einmal kreuzen. Gern bleibe ich mit Ihnen in Kontakt.\n\nMit freundlichen Grüßen\nSofia Marković",
      "explanation": "The email thanks and acknowledges before it refuses (\"vielen Dank für Ihr Angebot vom ...\", \"Ich habe mich sehr darüber gefreut, dass ...\"). The refusal itself is softened with \"Nach reiflicher Überlegung\", \"jedoch leider\" and \"muss ich Ihnen mitteilen\", followed by a short reason and \"Ich bedaure, ... zu können\". \"Ich würde mich freuen, wenn sich unsere Wege ... kreuzen\" keeps the relationship open."
    }
  ],
  "c1-academic-writing-4": [
    {
      "type": "write",
      "prompt": "Your seminar tutor has asked you to summarise a newspaper article, 'Lesen Kinder heute weniger?' by the education researcher Karin Lehmann (invent its content). Write a Zusammenfassung that names the source, reproduces the author's main points in your own words, and ends with a brief comparison with your own country.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Opens with a sentence naming the source, author, date and topic (\"In ihrem Artikel ..., erschienen am ..., befasst sich ... mit der Frage, ...\")",
        "Reports the author's views in the Konjunktiv I, with Konjunktiv II or würde where Konjunktiv I is not distinct (\"sie läsen\", \"es nehme ab\")",
        "Uses varied reporting verbs (\"stellt fest\", \"weist darauf hin\", \"betont\", \"fordert\")",
        "Keeps your own opinion out of the summary and adds a short comparison at the end"
      ],
      "modelAnswer": "In ihrem Artikel „Lesen Kinder heute weniger?“, erschienen am 14. Mai 2026 in der Rheinischen Rundschau, befasst sich die Bildungsforscherin Karin Lehmann mit der Frage, wie sich das Leseverhalten von Kindern verändert hat.\n\nDie Autorin stellt zunächst fest, dass Kinder heute keineswegs weniger lesen als vor zwanzig Jahren. Sie läsen jedoch anders: kürzere Texte, häufiger auf dem Bildschirm und seltener am Stück. Lehmann weist darauf hin, dass vor allem die Fähigkeit abnehme, längere Texte konzentriert zu verstehen. Laut einer Studie ihres Instituts verbringe ein zehnjähriges Kind im Durchschnitt nur noch zwanzig Minuten pro Woche mit einem gedruckten Buch.\n\nDie Ursache sieht die Autorin nicht allein in den digitalen Medien. Sie betont, dass auch Eltern seltener vorläsen und viele Schulen kaum noch Zeit für freies Lesen einplanen würden. Kritisch sieht sie zudem den Einsatz von Lern-Apps: Dieser mache das Lesen vor allem zu einem Wettbewerb um Punkte.\n\nAbschließend fordert Lehmann, in Grundschulen feste Lesezeiten einzuführen und Bibliotheken stärker zu fördern.\n\nIn meinem Heimatland Polen wird ähnlich diskutiert. Auch dort zeigen Studien, dass Kinder viel am Bildschirm lesen; feste Lesezeiten gibt es an manchen Schulen bereits.",
      "explanation": "The opening sentence names the article, the date, the newspaper, the author and the question. The author's views are in the Konjunktiv I (\"abnehme\", \"verbringe\", \"mache\"), and where the Konjunktiv I would look like the indicative, the summary switches to the Konjunktiv II or würde (\"sie läsen\", \"vorläsen\", \"einplanen würden\"). \"Stellt fest\", \"weist darauf hin\", \"betont\", \"sieht kritisch\" and \"fordert\" vary the reporting verbs, and the comparison is kept separate in the last paragraph."
    }
  ],
  "c1-academic-writing-7": [
    {
      "type": "write",
      "prompt": "For the speaking part of a Goethe C1-style exam, you have to give a short presentation on the question 'Should local public transport be free?'. Write out what you would say, including your answer to the first question from the audience.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Signposts the structure (\"Ich möchte zunächst ..., anschließend ...\", \"Damit komme ich zu ...\", \"Zum Schluss ...\")",
        "Presents arguments for and against with reasons and an example",
        "Ends the talk and invites questions (\"Vielen Dank für Ihre Aufmerksamkeit\", \"Gibt es Fragen?\")",
        "Responds to a question politely and disagrees in part (\"Das ist ein berechtigter Einwand\", \"Da muss ich Ihnen teilweise widersprechen\")"
      ],
      "modelAnswer": "Sehr geehrte Damen und Herren,\n\nin meiner kurzen Präsentation geht es um die Frage, ob der öffentliche Nahverkehr kostenlos sein sollte. Ich möchte zunächst die Ausgangslage schildern, anschließend die wichtigsten Argumente dafür und dagegen vorstellen und zum Schluss meine eigene Position darlegen.\n\nZur Ausgangslage: In Deutschland kostet das Deutschlandticket inzwischen deutlich über fünfzig Euro im Monat. Luxemburg dagegen hat Busse und Bahnen bereits 2020 für alle kostenlos gemacht.\n\nDamit komme ich zu den Argumenten. Für einen kostenlosen Nahverkehr spricht vor allem der Klimaschutz: Wenn mehr Menschen das Auto stehen lassen, sinken die Emissionen. Außerdem würden Menschen mit geringem Einkommen entlastet. Dagegen spricht in erster Linie die Finanzierung. Fallen die Ticketeinnahmen weg, fehlt das Geld für neue Linien und mehr Personal.\n\nZum Schluss meine Position: Ich halte einen kostenlosen Nahverkehr für sinnvoll, aber nur, wenn gleichzeitig das Angebot ausgebaut wird. Ein Gratisbus, der einmal pro Stunde fährt, überzeugt niemanden.\n\nVielen Dank für Ihre Aufmerksamkeit. Gibt es Fragen?\n\nFrage: Wäre es nicht besser, das Geld direkt in neue Strecken zu investieren?\n\nDas ist ein berechtigter Einwand. Da muss ich Ihnen allerdings teilweise widersprechen: Neue Strecken allein bringen wenig, wenn die Preise viele Menschen abschrecken. Beides gehört meiner Meinung nach zusammen.",
      "explanation": "The talk announces its structure (\"Ich möchte zunächst ..., anschließend ... und zum Schluss ...\") and marks each step (\"Zur Ausgangslage\", \"Damit komme ich zu ...\", \"Zum Schluss\"). Arguments are introduced with \"Für ... spricht vor allem\" and \"Dagegen spricht in erster Linie\", each with a reason. The question is acknowledged (\"Das ist ein berechtigter Einwand\") before the speaker disagrees in part (\"Da muss ich Ihnen allerdings teilweise widersprechen\")."
    }
  ],
  "c1-challenge-konjunktiv-no-net": [
    {
      "type": "write",
      "prompt": "A blog for people living abroad has asked readers for a short personal essay: 'What if I had stayed at home?' Write about how your life would be different if you had never moved to a German-speaking country (real or imagined).",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Uses past unreal conditions with and without wenn (\"Wenn ich ... geblieben wäre, ...\", \"Hätte ich ... nicht angenommen, ...\")",
        "Mixes time levels correctly (past condition, present consequence: \"..., wäre ich heute ...\")",
        "Uses fast / beinahe + past Konjunktiv II and an unreal comparison with als or als ob",
        "Reports what someone said at the time in the Konjunktiv I"
      ],
      "modelAnswer": "Was wäre, wenn ich geblieben wäre?\n\nVor sieben Jahren bekam ich ein Angebot aus Graz: eine Stelle als Ingenieurin bei einem Autozulieferer. Ich hätte beinahe abgelehnt. Meine Mutter sagte damals, ich sei verrückt, in Porto hätte ich doch alles, was ich brauche. Mein Chef meinte, eine solche Chance komme nie wieder. Am Ende entschied eine Münze.\n\nWenn ich in Porto geblieben wäre, wäre ich heute vermutlich Abteilungsleiterin in derselben Firma. Ich würde jeden Sonntag bei meinen Eltern essen und hätte nie gelernt, was ein Krapfen ist. Hätte ich das Angebot nicht angenommen, hätte ich auch meinen Mann nicht kennengelernt, denn wir sind uns im Deutschkurs begegnet. Unsere Tochter gäbe es nicht.\n\nManchmal, wenn ich im Winter um halb fünf im Dunkeln nach Hause gehe, fühle ich mich, als hätte ich einen Teil von mir am Atlantik zurückgelassen. Dann vermisse ich das Licht und das Meer so sehr, als wäre ich erst gestern abgereist.\n\nAber würde ich es wieder tun? Ohne Zögern. Wäre ich damals geblieben, wüsste ich heute nicht, wie viel ich mir selbst zutrauen kann. Und das wäre der größte Verlust gewesen.",
      "explanation": "Past unreal conditions appear with \"wenn\" (\"Wenn ich ... geblieben wäre\") and verb-first without it (\"Hätte ich ... nicht angenommen\", \"Wäre ich damals geblieben\"), and the consequences switch between present (\"wäre ich heute\", \"würde ... essen\", \"gäbe es nicht\", \"wüsste ich heute\") and past (\"hätte ... kennengelernt\"). \"Ich hätte beinahe abgelehnt\" is a near miss, \"als hätte ich ... zurückgelassen\" and \"als wäre ich ... abgereist\" are unreal comparisons, and the mother's and boss's words are reported with \"ich sei\" and \"komme\", with \"hätte\" replacing the indistinct Konjunktiv I \"habe\"."
    }
  ],
  "c1-challenge-literary-text-detective": [
    {
      "type": "write",
      "prompt": "A literary magazine is collecting the opening pages of short stories. Write the opening of a story in which a woman returns to the village where she grew up after thirty years away.",
      "minWords": 120,
      "maxWords": 220,
      "rubric": [
        "Narrates in the Präteritum with at least two literary strong forms (\"verklang\", \"schritt\", \"verblich\", \"glomm\")",
        "Uses inversion for effect (\"Still war es, als ...\", \"Nie hätte sie gedacht, ...\")",
        "Includes a passage of erlebte Rede (third person and Präteritum carrying her questions, particles and würde for the future)",
        "Uses the Plusquamperfekt for what happened before the story begins"
      ],
      "modelAnswer": "Die Rückkehr\n\nStill war es, als Martha aus dem Bus stieg. Der Fahrer nickte ihr zu, dann schloss sich die Tür, und das Brummen des Motors verklang hinter der Kurve.\n\nDreißig Jahre war sie nicht mehr hier gewesen. Damals, an einem Morgen im März, hatte sie ihren Koffer gepackt und war gegangen, ohne sich von irgendjemandem zu verabschieden. Nie hätte sie gedacht, dass sie zurückkommen würde.\n\nLangsam schritt sie die Dorfstraße hinunter. Die Bäckerei gab es nicht mehr; im Schaufenster verblich ein Plakat für ein Fest, das längst vorbei war. Im Gasthof „Zur Linde“ glomm noch ein Licht hinter den Gardinen.\n\nOb die alte Frau Berger noch lebte? Unsinn, sie musste inzwischen weit über neunzig sein. Und wer würde sie überhaupt erkennen, mit den grauen Haaren und dem Mantel aus der Stadt? Vielleicht war es doch ein Fehler gewesen. Morgen würde sie den ersten Bus zurück nehmen, ja, genau das würde sie tun.\n\nDann sah sie das Haus. Die Fensterläden hingen schief, der Garten war verwildert, aber die Bank neben der Tür stand noch da. Auf ihr saß ein Mann. Er hob den Kopf, und Martha blieb stehen.\n\n„Ich hab gewusst, dass du kommst“, sagte er leise.",
      "explanation": "The story is told in the Präteritum with literary strong forms such as \"verklang\", \"schritt\", \"verblich\", \"glomm\" and intransitive \"hingen\". Inversion places the mood or the negation first (\"Still war es\", \"Dreißig Jahre war sie ...\", \"Nie hätte sie gedacht\"), and the Plusquamperfekt (\"hatte ... gepackt und war gegangen\") reaches back to her departure. The paragraph beginning \"Ob die alte Frau Berger noch lebte?\" is erlebte Rede: her own questions and \"Unsinn\", \"ja\", told in the third person with \"würde\" as the future in the past."
    }
  ]
};
