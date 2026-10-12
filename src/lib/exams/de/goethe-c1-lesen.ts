// Synced from cheneygross-afk/lengo:src/lib/exams/de/goethe-c1-lesen.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// Goethe-Zertifikat C1 practice exam -- Lesen.
// 65 minutes, 4 parts, 31 items, modelled on the real exam's reading
// module: a gapped text testing vocabulary and fixed expressions, a long
// newspaper article with multiple-choice questions, four opinions to
// match with statements, and a popular-science text with
// Ja / Nein / Text sagt dazu nichts statements. All texts are original.
const PERSONEN = ["A. Jana Krüger", "B. Malte Becker", "C. Elif Aydın", "D. Thomas Wendt"];
const JNX = ["Ja", "Nein", "Text sagt dazu nichts"];

export const GOETHE_C1_LESEN: ExamPaper = {
  id: "lesen",
  kind: "reading",
  title: "Lesen",
  minutes: 65,
  group: 1,
  tasks: [
    {
      title: "Teil 1",
      instructions:
        "Lesen Sie den Text. Welches Wort passt in die Lücken (1–10)? Wählen Sie die richtige Lösung: a, b, c oder d.",
      texts: [
        {
          title: "Die Wiederentdeckung des Nachtzugs",
          body:
            "Lange galten Nachtzüge als Auslaufmodell. Noch vor wenigen Jahren hatten mehrere europäische Bahngesellschaften ihre Verbindungen eingestellt, weil sie sich angeblich nicht mehr (1) ___. Inzwischen hat sich das Blatt gewendet: Neue Linien werden eröffnet, und viele Züge sind in der Hauptreisezeit schon Wochen im Voraus (2) ___.\n\n" +
            "Dass die Nachfrage so stark gestiegen ist, hat mehrere Gründe. Zum einen (3) ___ immer mehr Reisende bewusst auf Kurzstreckenflüge, um ihren CO₂-Ausstoß zu verringern. Zum anderen schätzen viele, dass sie abends in der Innenstadt einsteigen und am nächsten Morgen ausgeruht am Ziel (4) ___, ohne lange Wege zum Flughafen und Sicherheitskontrollen in (5) ___ nehmen zu müssen.\n\n" +
            "Die Betreiber stehen allerdings vor erheblichen Schwierigkeiten. Neue Schlafwagen sind teuer, ihre Herstellung dauert Jahre, und auf vielen Strecken (6) ___ es an Kapazitäten, weil nachts auch Güterzüge unterwegs sind und Bauarbeiten stattfinden. Hinzu kommt, dass in jedem Land andere Vorschriften (7) ___, was die Planung grenzüberschreitender Verbindungen erschwert.\n\n" +
            "Kritiker wenden außerdem (8) ___, dass ein Nachtzug pro Fahrt nur einige hundert Fahrgäste befördere und daher im Verhältnis zum Aufwand wenig zur Verkehrswende beitrage. Befürworter halten dem entgegen, es gehe nicht nur um Zahlen: Der Nachtzug habe eine Symbolkraft, die man nicht (9) ___ dürfe. Ob er sich dauerhaft (10) ___ kann, wird letztlich davon abhängen, ob die Politik bereit ist, ihn langfristig zu fördern.",
        },
      ],
      items: [
        {
          n: 1,
          question: "",
          options: ["leisteten", "lohnten", "ergaben", "gelangen"],
          answer: 1,
          explanation:
            "sich lohnen = einen Nutzen bringen, die Mühe wert sein („Das lohnt sich nicht“ = Es bringt nichts). Sich etwas leisten heißt, genug Geld für etwas zu haben; sich ergeben heißt kapitulieren oder als Ergebnis folgen; gelingen ist nicht reflexiv.",
        },
        {
          n: 2,
          question: "",
          options: ["verbucht", "eingebucht", "ausgebucht", "abgebucht"],
          answer: 2,
          explanation:
            "ausgebucht = alle Plätze sind vergeben. Die Vorsilbe verändert die Bedeutung völlig: Geld wird vom Konto abgebucht, ein Betrag wird in der Buchhaltung verbucht, ein Handy bucht sich ins Netz ein (meldet sich dort an).",
        },
        {
          n: 3,
          question: "",
          options: ["verzichten", "verweigern", "entsagen", "unterlassen"],
          answer: 0,
          explanation:
            "verzichten auf + Akkusativ = etwas bewusst nicht tun oder nicht nutzen: auf Kurzstreckenflüge verzichten. Verweigern und unterlassen stehen mit direktem Objekt ohne Präposition, und das veraltete entsagen verlangt den Dativ.",
        },
        {
          n: 4,
          question: "",
          options: ["erreichen", "betreten", "ankommen", "anlegen"],
          answer: 2,
          explanation:
            "am Ziel ankommen = das Ziel erreichen. Erreichen bräuchte ein direktes Objekt ohne „am“ (das Ziel erreichen); betreten sagt man von einem Raum oder Gebäude, und anlegen tut ein Schiff im Hafen.",
        },
        {
          n: 5,
          question: "",
          options: ["Betracht", "Kauf", "Anspruch", "Acht"],
          answer: 1,
          explanation:
            "etwas in Kauf nehmen = einen Nachteil akzeptieren, weil man dafür etwas anderes bekommt. Vergleichen Sie: etwas in Anspruch nehmen (eine Leistung nutzen), etwas in Betracht ziehen (erwägen; mit ziehen, nicht nehmen) und sich in Acht nehmen (vorsichtig sein).",
        },
        {
          n: 6,
          question: "",
          options: ["handelt", "geht", "mangelt", "gilt"],
          answer: 2,
          explanation:
            "es mangelt an + Dativ = es gibt nicht genug von etwas (gleichbedeutend: es fehlt an). Die anderen unpersönlichen Wendungen haben eine andere Struktur: es handelt sich um, es geht um, es gilt + zu-Infinitiv.",
        },
        {
          n: 7,
          question: "",
          options: ["wirken", "gelten", "treffen", "halten"],
          answer: 1,
          explanation: "Vorschriften, Regeln und Gesetze gelten: Sie sind in Kraft und verbindlich. Hier: In jedem Land gelten andere Regeln.",
        },
        {
          n: 8,
          question: "",
          options: ["an", "vor", "ein", "zu"],
          answer: 2,
          explanation:
            "einwenden = einen Einwand, ein Gegenargument vorbringen. Die abtrennbare Vorsilbe steht am Ende des Hauptsatzes, direkt vor dem dass-Satz: Kritiker wenden ein, dass … Die Verben im Konjunktiv I (befördere, beitrage) kennzeichnen das Argument der Kritiker als indirekte Rede.",
        },
        {
          n: 9,
          question: "",
          options: ["unterbieten", "unterstellen", "unterlassen", "unterschätzen"],
          answer: 3,
          explanation:
            "unterschätzen = etwas für geringer halten, als es ist: eine symbolische Kraft, die man nicht unterschätzen sollte. Unterbieten heißt, einen niedrigeren Preis verlangen; unterstellen heißt, jemandem etwas Negatives vorwerfen; unterlassen heißt, etwas nicht tun.",
        },
        {
          n: 10,
          question: "",
          options: ["durchsetzen", "durchführen", "durchsehen", "durchziehen"],
          answer: 0,
          explanation:
            "sich durchsetzen = sich am Ende behaupten, sich (dauerhaft) etablieren. Durchführen heißt, einen Plan ausführen; durchsehen heißt, etwas prüfend lesen; durchziehen heißt, etwas bis zum Ende machen. Keines dieser Verben ist in dieser Bedeutung reflexiv.",
        },
      ],
    },
    {
      title: "Teil 2",
      instructions:
        "Lesen Sie den Text. Wählen Sie bei jeder Aufgabe (11–16) die richtige Lösung: a, b oder c.",
      texts: [
        {
          title: "Wenn die Stadt zum Backofen wird",
          body:
            "An heißen Sommertagen kann es in der Innenstadt bis zu zehn Grad wärmer sein als im Umland. Verantwortlich dafür ist der sogenannte Wärmeinseleffekt: Asphalt, Beton und dunkle Dächer speichern tagsüber die Sonnenenergie und geben sie nachts wieder ab. Gerade die fehlende nächtliche Abkühlung macht vielen Menschen zu schaffen, denn wer nicht schlafen kann, erholt sich nicht. Besonders gefährdet sind ältere und chronisch kranke Menschen, aber auch Kleinkinder und alle, die im Freien arbeiten.\n\n" +
            "Lange Zeit wurde das Problem in der Stadtplanung eher am Rande behandelt. Neue Wohnviertel sollten vor allem dicht bebaut sein, um Fläche zu sparen, und jeder freie Platz wurde als mögliches Bauland betrachtet. Erst die Hitzesommer der vergangenen Jahre haben ein Umdenken eingeleitet. Heute verfügen zahlreiche Kommunen über sogenannte Hitzeaktionspläne, die von Trinkwasserbrunnen über kühle, öffentlich zugängliche Räume in Rathäusern und Bibliotheken bis zu Telefonketten für allein lebende Seniorinnen und Senioren reichen.\n\n" +
            "Als wirksamstes Mittel gegen die Überhitzung gilt jedoch Grün. Ein großer Straßenbaum verdunstet an einem Sommertag mehrere hundert Liter Wasser und kühlt dadurch seine Umgebung spürbar. Doch ausgerechnet Stadtbäume leiden selbst unter den veränderten Bedingungen: Trockenheit, verdichtete Böden und Streusalz setzen ihnen zu, und viele Arten, die jahrzehntelang das Straßenbild prägten, kommen mit den heißen Sommern kaum noch zurecht. Gärtnerinnen und Gärtner experimentieren deshalb mit Baumarten aus Südosteuropa oder Nordamerika, die Hitze besser vertragen. Ganz unumstritten ist das nicht: Naturschützer befürchten, dass einheimische Insekten mit den fremden Arten wenig anfangen können, weil sie weder Nahrung noch Unterschlupf bieten.\n\n" +
            "Ein weiteres Stichwort lautet „Schwammstadt“. Gemeint ist eine Stadt, die Regenwasser nicht möglichst schnell in die Kanalisation ableitet, sondern es wie ein Schwamm aufnimmt und speichert – in begrünten Dächern, in Mulden, unter entsiegelten Plätzen. So steht das Wasser in Trockenperioden den Pflanzen zur Verfügung, und bei Starkregen werden die Kanäle entlastet. Das Prinzip ist einfach, seine Umsetzung in bestehenden Vierteln dagegen mühsam: Unter fast jeder Straße verlaufen Leitungen, und jede neue Baumgrube muss mit Versorgungsunternehmen, Verkehrsplanern und Anwohnern abgestimmt werden.\n\n" +
            "Fachleute warnen daher vor der Vorstellung, man könne das Problem allein mit technischen Lösungen in den Griff bekommen. Ebenso wichtig sei es, Gewohnheiten zu ändern: Arbeitszeiten im Sommer anzupassen, Baustellen in die frühen Morgenstunden zu verlegen und Nachbarschaften zu stärken, in denen man aufeinander achtet. „Die kühlste Stadt nützt wenig, wenn niemand merkt, dass die alte Dame im dritten Stock seit Tagen nicht mehr vor die Tür gegangen ist“, sagt eine Stadtklimatologin.",
        },
      ],
      items: [
        {
          n: 11,
          question: "Warum ist die Hitze in der Stadt nachts besonders belastend?",
          options: [
            "Weil Baumaterialien die tagsüber gespeicherte Wärme wieder abgeben.",
            "Weil nachts mehr Menschen im Freien arbeiten.",
            "Weil es nachts im Umland wärmer wird als in der Stadt.",
          ],
          answer: 0,
          explanation:
            "Asphalt, Beton und dunkle Dächer speichern tagsüber die Sonnenenergie „und geben sie nachts wieder ab“, sodass sich die Stadt nachts nicht abkühlt. Achtung: jemandem zu schaffen machen (jemanden belasten) ist etwas anderes als etwas schaffen (etwas bewältigen).",
        },
        {
          n: 12,
          question: "Welche Rolle spielte das Thema Hitze früher in der Stadtplanung?",
          options: [
            "Es stand im Mittelpunkt neuer Bauprojekte.",
            "Es wurde eher nebenbei behandelt.",
            "Es war ausschließlich Aufgabe der Bundesregierung.",
          ],
          answer: 1,
          explanation:
            "„Lange Zeit wurde das Problem in der Stadtplanung eher am Rande behandelt“: am Rande = nebenbei, nicht als Hauptthema. Wichtiger waren Verdichtung und sparsamer Flächenverbrauch.",
        },
        {
          n: 13,
          question: "Was gehört laut Text zu den Hitzeaktionsplänen?",
          options: [
            "Ein Bauverbot in dicht bebauten Vierteln.",
            "Klimaanlagen in allen Wohnungen von Seniorinnen und Senioren.",
            "Kühle Räume in öffentlichen Gebäuden, die jeder nutzen kann.",
          ],
          answer: 2,
          explanation:
            "Zu den Plänen gehören Trinkbrunnen, Telefonketten für allein lebende ältere Menschen und „kühle, öffentlich zugängliche Räume in Rathäusern und Bibliotheken“. Von Klimaanlagen ist keine Rede.",
        },
        {
          n: 14,
          question: "Warum ist das Pflanzen nicht einheimischer Baumarten umstritten?",
          options: [
            "Sie verdunsten weniger Wasser als einheimische Bäume.",
            "Sie bieten heimischen Insekten möglicherweise weder Nahrung noch Unterschlupf.",
            "Sie vertragen weder Streusalz noch verdichtete Böden.",
          ],
          answer: 1,
          explanation:
            "Naturschützer befürchten, dass einheimische Insekten „mit den fremden Arten wenig anfangen können, weil sie weder Nahrung noch Unterschlupf bieten“. Streusalz und verdichtete Böden schaden dagegen den vorhandenen Bäumen.",
        },
        {
          n: 15,
          question: "Was erschwert die „Schwammstadt“ in bestehenden Vierteln?",
          options: [
            "Unter den Straßen ist wenig Platz, und viele Beteiligte müssen sich abstimmen.",
            "Gespeichertes Regenwasser verschmutzt die Leitungen.",
            "Begrünte Dächer sind in vielen Städten verboten.",
          ],
          answer: 0,
          explanation:
            "„Unter fast jeder Straße verlaufen Leitungen, und jede neue Baumgrube muss mit Versorgungsunternehmen, Verkehrsplanern und Anwohnern abgestimmt werden.“ Das Prinzip ist einfach, die Umsetzung mühsam.",
        },
        {
          n: 16,
          question: "Welche Ansicht vertritt die zitierte Stadtklimatologin?",
          options: [
            "Bauliche Maßnahmen gegen Hitze sind überflüssig.",
            "Ältere Menschen sollten im Sommer die Stadt verlassen.",
            "Ohne nachbarschaftliche Aufmerksamkeit helfen auch die besten Maßnahmen wenig.",
          ],
          answer: 2,
          explanation:
            "„Die kühlste Stadt nützt wenig, wenn niemand merkt, dass die alte Dame im dritten Stock seit Tagen nicht mehr vor die Tür gegangen ist.“ Bauliche Maßnahmen hält niemand für überflüssig: Laut den Fachleuten ist es „ebenso wichtig“, auch Gewohnheiten zu ändern und Nachbarschaften zu stärken.",
        },
      ],
    },
    {
      title: "Teil 3",
      instructions:
        "Lesen Sie die Meinungen zum Thema „Sollen Museen keinen Eintritt mehr verlangen?“. Welche Aussage (17–24) passt zu welcher Person (A–D)? Jede Person kann mehrmals gewählt werden.",
      texts: [
        {
          label: "A",
          title: "Jana Krüger, Direktorin eines Stadtmuseums",
          body:
            "Seit zwei Jahren ist der Eintritt in unsere Dauerausstellung sonntags frei, und die Erfahrung ist eindeutig: An diesen Tagen kommen deutlich mehr Familien und Menschen aus Stadtteilen, die wir vorher kaum erreicht haben. Trotzdem wäre ich vorsichtig damit, den Eintritt ganz abzuschaffen. Die Einnahmen aus Tickets machen bei uns zwar nur einen kleinen Teil des Budgets aus, aber genau dieses Geld finanziert unsere Programme für Schulklassen. Fällt es weg, müsste die Stadt einspringen, und ob sie das auf Dauer tut, wage ich zu bezweifeln. Ein freier Tag pro Woche scheint mir ein guter Kompromiss.",
        },
        {
          label: "B",
          title: "Malte Becker, Kulturpolitiker",
          body:
            "Wir finanzieren Schwimmbäder, Bibliotheken und Theater mit Steuergeld – warum sollen ausgerechnet Museen, die das gemeinsame Erbe aller bewahren, Eintritt kosten? Der Preis ist sicher nicht das einzige Hindernis, aber er ist ein Signal: Er sagt, dieser Ort ist nicht für jeden. In mehreren europäischen Ländern sind die großen staatlichen Museen seit Jahren kostenlos, und die Besucherzahlen sind dort kräftig gestiegen. Die Kosten, die dadurch entstehen, sind im Verhältnis zum Gesamthaushalt gering. Es ist letztlich eine Frage des politischen Willens.",
        },
        {
          label: "C",
          title: "Dr. Elif Aydın, Kultursoziologin",
          body:
            "Die Debatte überschätzt die Wirkung des Eintrittspreises. Untersuchungen zu Museen, die ihren Eintritt abgeschafft haben, zeigen häufig: Es kommen zwar mehr Besuche zustande, aber überwiegend von denselben Leuten – gut gebildeten Menschen, die nun einfach öfter kommen. Wer bisher nicht ins Museum ging, tut das meist auch dann nicht, wenn es nichts kostet. Entscheidend ist, ob Menschen das Gefühl haben, dass dort etwas für sie stattfindet. Dafür braucht es Ausstellungen, die an ihren Alltag anknüpfen, Mehrsprachigkeit und Personal, das auf Leute zugeht. Das kostet Geld – vermutlich mehr als der freie Eintritt.",
        },
        {
          label: "D",
          title: "Thomas Wendt, Rentner und regelmäßiger Museumsbesucher",
          body:
            "Ich gehe gern ins Museum, aber vierzehn Euro für eine Sonderausstellung sind für mich viel Geld, besonders wenn ich nach einer Stunde müde werde. Am liebsten wäre mir, man könnte öfter für kurze Besuche kommen, ohne jedes Mal den vollen Preis zu zahlen. Eine Jahreskarte lohnt sich nur, wenn man in der Nähe wohnt. Dass alles kostenlos sein muss, finde ich gar nicht – wer es sich leisten kann, soll ruhig zahlen. Aber Ermäßigungen sollten nicht nur für Studierende gelten, sondern auch für Menschen mit kleiner Rente.",
        },
      ],
      layout: "select",
      items: [
        {
          n: 17,
          question: "Freier Eintritt ändert vor allem, wie oft das bisherige Publikum kommt.",
          options: PERSONEN,
          answer: 2,
          explanation: "C (Elif Aydın): mehr Besuche, „aber überwiegend von denselben Leuten … die nun einfach öfter kommen“.",
        },
        {
          n: 18,
          question: "Kostenlose Tage haben neue Besuchergruppen ins Haus gebracht.",
          options: PERSONEN,
          answer: 0,
          explanation: "A (Jana Krüger): An den kostenlosen Sonntagen „kommen deutlich mehr Familien und Menschen aus Stadtteilen, die wir vorher kaum erreicht haben“.",
        },
        {
          n: 19,
          question: "Ein Eintrittspreis vermittelt, dass nicht alle willkommen sind.",
          options: PERSONEN,
          answer: 1,
          explanation: "B (Malte Becker): Der Preis „ist ein Signal: Er sagt, dieser Ort ist nicht für jeden“.",
        },
        {
          n: 20,
          question: "Die Person wünscht sich günstigere Möglichkeiten für kurze Besuche.",
          options: PERSONEN,
          answer: 3,
          explanation: "D (Thomas Wendt): „Am liebsten wäre mir, man könnte öfter für kurze Besuche kommen, ohne jedes Mal den vollen Preis zu zahlen.“",
        },
        {
          n: 21,
          question: "Mit den Ticketeinnahmen werden Angebote für Schülerinnen und Schüler bezahlt.",
          options: PERSONEN,
          answer: 0,
          explanation: "A (Jana Krüger): Das Geld aus den Eintrittskarten „finanziert unsere Programme für Schulklassen“.",
        },
        {
          n: 22,
          question: "Andere Länder haben mit kostenlosen Museen gute Erfahrungen gemacht.",
          options: PERSONEN,
          answer: 1,
          explanation: "B (Malte Becker): In mehreren europäischen Ländern sind die großen staatlichen Museen kostenlos, „und die Besucherzahlen sind dort kräftig gestiegen“.",
        },
        {
          n: 23,
          question: "Wie Museen ihr Publikum ansprechen, ist wichtiger als der Preis.",
          options: PERSONEN,
          answer: 2,
          explanation:
            "C (Elif Aydın): Entscheidend ist, ob die Menschen das Gefühl haben, „dass dort etwas für sie stattfindet“: Ausstellungen mit Bezug zu ihrem Leben, mehrere Sprachen, Personal, das auf die Besucher zugeht.",
        },
        {
          n: 24,
          question: "Ermäßigungen sollten auch für ältere Menschen mit wenig Geld gelten.",
          options: PERSONEN,
          answer: 3,
          explanation: "D (Thomas Wendt): Ermäßigungen „nicht nur für Studierende …, sondern auch für Menschen mit kleiner Rente“.",
        },
      ],
    },
    {
      title: "Teil 4",
      instructions:
        "Lesen Sie den Text. Entscheiden Sie bei den Aussagen 25–31: Steht das im Text (Ja), steht das Gegenteil im Text (Nein), oder sagt der Text dazu nichts?",
      texts: [
        {
          title: "Was das Gehirn nachts erledigt",
          body:
            "Dass Schlaf für das Lernen wichtig ist, ahnten Forschende schon lange. Inzwischen weiß man genauer, was dabei geschieht. Während wir schlafen, werden Informationen, die tagsüber zunächst im Hippocampus zwischengespeichert wurden, mehrfach „abgespielt“ und nach und nach in die Großhirnrinde übertragen, wo sie langfristig erhalten bleiben. Besonders wichtig scheint dafür der Tiefschlaf zu sein, der vor allem in der ersten Nachthälfte auftritt.\n\n" +
            "In Experimenten lernen Versuchspersonen zum Beispiel am Abend Wortpaare und werden am nächsten Morgen abgefragt. Wer dazwischen geschlafen hat, erinnert sich deutlich besser als jemand, der die gleiche Zeit wach verbracht hat – und zwar auch dann, wenn die Wachgruppe morgens gelernt und am Abend geprüft wurde, also keineswegs übermüdet war. Interessanterweise profitiert nicht alles Gelernte gleichermaßen. Das Gehirn scheint bevorzugt zu festigen, was es für künftig bedeutsam hält: Sagt man den Teilnehmenden vor dem Einschlafen, dass sie später geprüft werden, fällt der Effekt stärker aus.\n\n" +
            "Für Schülerinnen und Schüler sowie Studierende ergeben sich daraus einige praktische Hinweise. Die Nacht vor einer Prüfung durchzulernen, ist ungefähr das Gegenteil dessen, was die Forschung nahelegt. Sinnvoller ist es, den Stoff über mehrere Tage zu verteilen und ihm jeweils eine Nacht Zeit zu geben, sich zu setzen. Auch ein kurzer Mittagsschlaf kann helfen, sofern er nicht so lange dauert, dass man danach benommen ist.\n\n" +
            "Weniger gesichert sind dagegen die Versprechen mancher Apps, die behaupten, man könne im Schlaf neue Vokabeln lernen, indem man sie sich nachts vorspielen lässt. Zwar gibt es Hinweise darauf, dass das Gehirn bereits Gelerntes besser behält, wenn es im Schlaf durch passende Geräusche daran „erinnert“ wird. Völlig Neues aufzunehmen, gelingt im Tiefschlaf nach heutigem Wissen jedoch nicht.",
        },
      ],
      items: [
        {
          n: 25,
          question: "Neue Informationen werden zunächst im Hippocampus gespeichert.",
          options: JNX,
          answer: 0,
          explanation: "Informationen werden „tagsüber zunächst im Hippocampus zwischengespeichert“ und erst später in die Großhirnrinde übertragen.",
        },
        {
          n: 26,
          question: "Tiefschlaf tritt vor allem in den Stunden vor dem Aufwachen auf.",
          options: JNX,
          answer: 1,
          explanation: "Der Text sagt das Gegenteil: Tiefschlaf tritt „vor allem in der ersten Nachthälfte“ auf.",
        },
        {
          n: 27,
          question: "Die Wachgruppe schnitt in den Experimenten schlechter ab, weil sie müde war.",
          options: JNX,
          answer: 1,
          explanation:
            "Der Text schließt das aus: Die Wachgruppe lernte morgens und wurde abends getestet, war „also keineswegs übermüdet“. Ihr schlechteres Ergebnis lässt sich also nicht mit Müdigkeit erklären.",
        },
        {
          n: 28,
          question: "Wer weiß, dass ein Test folgt, profitiert stärker vom Schlaf.",
          options: JNX,
          answer: 0,
          explanation: "Wenn man den Teilnehmenden vor dem Schlafen sagt, dass ein Test folgt, „fällt der Effekt stärker aus“.",
        },
        {
          n: 29,
          question: "Männer und Frauen profitieren unterschiedlich stark vom Schlaf.",
          options: JNX,
          answer: 2,
          explanation: "Der Text vergleicht Schlafende mit Personen, die wach geblieben sind, aber nie Männer mit Frauen. Dazu steht nichts im Text.",
        },
        {
          n: 30,
          question: "Ein Mittagsschlaf sollte höchstens zwanzig Minuten dauern.",
          options: JNX,
          answer: 2,
          explanation:
            "Der Text sagt nur, ein Mittagsschlaf solle nicht so lange dauern, dass man benommen aufwacht. Eine Zahl nennt er nicht, über zwanzig Minuten sagt der Text also nichts. Eine typische Falle: eine plausible Angabe, die nicht im Text steht.",
        },
        {
          n: 31,
          question: "Mit geeigneten Apps kann man im Tiefschlaf neue Vokabeln lernen.",
          options: JNX,
          answer: 1,
          explanation: "„Völlig Neues aufzunehmen, gelingt im Tiefschlaf nach heutigem Wissen jedoch nicht.“ Geräusche im Schlaf helfen höchstens bei bereits Gelerntem.",
        },
      ],
    },
  ],
};
