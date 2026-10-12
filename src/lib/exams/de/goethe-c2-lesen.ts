// Synced from cheneygross-afk/lengo:src/lib/exams/de/goethe-c2-lesen.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// Goethe-Zertifikat C2 (Großes Deutsches Sprachdiplom) practice exam --
// Lesen. 80 minutes, 4 parts, 31 items, modelled on the real exam's
// reading module: a gapped essay testing idiomatic vocabulary, a
// feature with missing sentences to put back, a long essay with
// multiple-choice questions, and a commentary with
// Ja / Nein / Text sagt dazu nichts statements. All texts are original.
const SAETZE = [
  "A. Dauerhafte Langeweile kann durchaus krank machen.",
  "B. Smartphones sind deshalb in vielen Wartezimmern inzwischen verboten.",
  "C. Denn die leeren Momente, in denen früher Langeweile entstand, sind weitgehend aus unserem Alltag verschwunden.",
  "D. Diejenigen, die sich vorher gelangweilt hatten, waren dabei deutlich einfallsreicher als eine Vergleichsgruppe.",
  "E. Auf den Bus warten, aus dem Fenster schauen, die Gedanken schweifen lassen.",
  "F. Ein Zusammenhang mit der vorherigen Aufgabe ließ sich dabei allerdings nicht feststellen.",
  "G. Dabei erfüllt sie eine durchaus nützliche Funktion.",
  "H. Ganz so leicht fällt es uns allerdings nicht, uns auf die Leere einzulassen.",
];
const JNX = ["Ja", "Nein", "Text sagt dazu nichts"];

export const GOETHE_C2_LESEN: ExamPaper = {
  id: "lesen",
  kind: "reading",
  title: "Lesen",
  minutes: 80,
  group: 1,
  tasks: [
    {
      title: "Teil 1",
      instructions:
        "Lesen Sie den Text. Welches Wort passt in die Lücken (1–10)? Wählen Sie die richtige Lösung: a, b, c oder d.",
      texts: [
        {
          title: "Lob des Fragments",
          body:
            "Es gehört zu den Eigentümlichkeiten unserer Kultur, dass sie dem Abgeschlossenen einen höheren Wert (1) ___ als dem Unvollendeten. Ein Roman, dessen letztes Kapitel fehlt, eine Sinfonie, die nach zwei Sätzen abbricht – solche Werke gelten gemeinhin als Torsi, als Zeugnisse eines Scheiterns, das man allenfalls mit Wehmut zur (2) ___ nimmt.\n\n" +
            "Dabei lässt sich mit guten Gründen die Gegenthese (3) ___. Gerade weil das Fragment nicht alles ausspricht, nimmt es den Leser oder Hörer in die (4) ___: Er muss ergänzen, weiterdenken, sich selbst ein Ende ausmalen. Die Romantiker haben daraus sogar ein Programm gemacht. Für sie war das Bruchstück keine Notlösung, sondern die einzig angemessene Form, um einem unendlichen Gegenstand (5) ___ zu werden.\n\n" +
            "Nicht immer freilich war das Unvollendete gewollt. Oft hat schlicht der Tod dem Schaffen ein Ende (6) ___, oder äußere Umstände – Geldnot, Krieg, Zensur – haben die Arbeit zum (7) ___ gebracht. Dass Nachlassverwalter solche Texte dennoch veröffentlichten, mitunter gegen den ausdrücklichen Willen ihrer Verfasser, ist ein Dilemma, das die Literaturwissenschaft bis heute (8) ___.\n\n" +
            "Vielleicht liegt der Reiz des Fragments letztlich darin, dass es uns an etwas erinnert, das wir gern (9) ___: dass auch unser eigenes Leben selten zu einem runden Abschluss kommt. Wer das Unvollendete zu schätzen weiß, (10) ___ sich womöglich leichter mit den eigenen offenen Enden.",
        },
      ],
      items: [
        {
          n: 1,
          question: "",
          options: ["zumutet", "beimisst", "abverlangt", "einbringt"],
          answer: 1,
          explanation:
            "einer Sache Wert oder Bedeutung beimessen = sie für wertvoll oder wichtig halten. Jemandem etwas zumuten heißt, etwas Unzumutbares von ihm erwarten; jemandem etwas abverlangen heißt, es von ihm fordern; etwas einbringen heißt, etwas beitragen oder als Ertrag liefern.",
        },
        {
          n: 2,
          question: "",
          options: ["Rede", "Last", "Kenntnis", "Brust"],
          answer: 2,
          explanation:
            "etwas zur Kenntnis nehmen = etwas registrieren, wahrnehmen. Vergleichen Sie: jemanden zur Rede stellen (Rechenschaft von ihm verlangen), jemandem zur Last fallen (ihm eine Bürde sein) und umgangssprachlich sich jemanden zur Brust nehmen (ihm gehörig die Meinung sagen).",
        },
        {
          n: 3,
          question: "",
          options: ["vertreten", "vertragen", "verhalten", "verweisen"],
          answer: 0,
          explanation:
            "eine These oder Meinung vertreten = sie haben und argumentativ verteidigen. Vertragen heißt aushalten, sich verhalten heißt sich benehmen, verweisen auf heißt auf etwas hinweisen.",
        },
        {
          n: 4,
          question: "",
          options: ["Schuld", "Pflicht", "Ruhe", "Irre"],
          answer: 1,
          explanation:
            "jemanden in die Pflicht nehmen = jemanden an seine Verantwortung erinnern, Forderungen an ihn stellen. Das Fragment verpflichtet den Leser, es zu ergänzen. Keines der anderen Nomen bildet mit „in die … nehmen“ eine feste Wendung: „in die Irre“ verbindet sich mit führen (täuschen).",
        },
        {
          n: 5,
          question: "",
          options: ["gewachsen", "gemäß", "gewogen", "gerecht"],
          answer: 3,
          explanation:
            "einer Sache gerecht werden = ihr angemessen sein, ihr in vollem Umfang entsprechen. Einer Sache gewachsen sein (sie bewältigen können) steht mit sein, nicht mit werden; gemäß ist eine Präposition, und jemandem gewogen sein heißt, ihm wohlgesinnt zu sein.",
        },
        {
          n: 6,
          question: "",
          options: ["gestellt", "gesetzt", "gelegt", "gegeben"],
          answer: 1,
          explanation:
            "einer Sache ein Ende setzen = sie beenden. Bei solchen Funktionsverbgefügen ist das Deutsche streng: Man setzt ein Ende, stellt eine Frage, legt einen Grundstein.",
        },
        {
          n: 7,
          question: "",
          options: ["Abschied", "Einhalt", "Verzicht", "Erliegen"],
          answer: 3,
          explanation:
            "etwas zum Erliegen bringen = etwas zum Stillstand bringen (ebenso: zum Erliegen kommen). Einhalt verbindet sich mit gebieten (einer Sache Einhalt gebieten), nie mit „zum … bringen“.",
        },
        {
          n: 8,
          question: "",
          options: ["beschäftigt", "befasst", "bemüht", "begegnet"],
          answer: 0,
          explanation:
            "Das Dilemma beschäftigt die Literaturwissenschaft: Es hält sie gedanklich in Atem. Befassen und bemühen brauchen ein Reflexivpronomen und eine Präposition (sich befassen mit, sich bemühen um), und begegnen verlangt den Dativ (der Literaturwissenschaft), nicht den Akkusativ wie hier.",
        },
        {
          n: 9,
          question: "",
          options: ["versäumen", "verweigern", "verdrängen", "vertreiben"],
          answer: 2,
          explanation:
            "etwas verdrängen = etwas aus dem Bewusstsein schieben, nicht wahrhaben wollen. Versäumen heißt, eine Gelegenheit verpassen; verweigern heißt ablehnen; vertreiben heißt, Menschen oder Tiere verjagen (oder: sich die Zeit vertreiben, gegen die Langeweile).",
        },
        {
          n: 10,
          question: "",
          options: ["verbündet", "versöhnt", "entschuldigt", "beruhigt"],
          answer: 1,
          explanation:
            "sich mit etwas versöhnen = seinen Frieden mit etwas machen, es innerlich annehmen (ähnlich: sich mit etwas abfinden). Sich mit jemandem verbünden heißt, ein Bündnis mit ihm eingehen.",
        },
      ],
    },
    {
      title: "Teil 2",
      instructions:
        "Lesen Sie den Text. In den Text wurden sechs Sätze entfernt (11–16). Welcher Satz (A–H) passt in welche Lücke? Zwei Sätze passen nicht. Jeder Satz kann nur einmal verwendet werden.",
      texts: [
        {
          title: "Lob der Langeweile",
          body:
            "Wann haben Sie sich zuletzt gelangweilt? Für viele Menschen ist diese Frage erstaunlich schwer zu beantworten. (11) Ob an der Bushaltestelle, im Wartezimmer oder in der Schlange an der Supermarktkasse – sobald sich eine Lücke auftut, greifen wir zum Smartphone.\n\n" +
            "Psychologen beobachten diese Entwicklung mit gemischten Gefühlen. Langeweile gilt gemeinhin als lästig, ja als Zeichen eines leeren Lebens. (12) Sie signalisiert uns, dass unsere gegenwärtige Tätigkeit uns nicht ausfüllt, und drängt uns dazu, nach etwas Sinnvollerem zu suchen. Wer dieses Signal jedes Mal sofort mit Ablenkung beantwortet, nimmt sich die Gelegenheit, ihm nachzugehen.\n\n" +
            "Hinzu kommt ein zweiter Effekt. In einer viel zitierten Versuchsreihe mussten Teilnehmende zunächst eine besonders eintönige Aufgabe erledigen – etwa Nummern aus einem Telefonbuch abschreiben – und anschließend möglichst viele Verwendungsmöglichkeiten für einen gewöhnlichen Gegenstand finden. (13) Die Forscher vermuten, dass der Geist in Phasen der Unterforderung zu wandern beginnt und dabei Verbindungen herstellt, auf die er unter Anspannung nicht käme.\n\n" +
            "(14) Andere Studien legen nahe, dass sich manche Menschen lieber einen leichten Stromschlag versetzen, als eine Viertelstunde lang allein mit ihren Gedanken in einem Raum zu sitzen. Das Unbehagen an der Leere sitzt offenbar tief.\n\n" +
            "Daraus folgt freilich nicht, dass man Langeweile verklären sollte. (15) Wer chronisch unterfordert ist, etwa in einer Arbeit ohne jeden Gestaltungsspielraum, leidet häufiger an Erschöpfung und Niedergeschlagenheit. Es kommt also auf das Maß an.\n\n" +
            "Was bleibt, ist ein bescheidener Vorschlag: hin und wieder nichts zu tun, ohne sich dafür zu rechtfertigen. (16) Vielleicht ist es gerade das, was uns heute am schwersten fällt.",
        },
      ],
      layout: "select",
      items: [
        {
          n: 11,
          question: "",
          options: SAETZE,
          answer: 2,
          explanation:
            "C erklärt, warum die Frage schwer zu beantworten ist (Denn …), und der folgende Satz nennt Beispiele für die verschwundenen leeren Momente: Bushaltestelle, Wartezimmer, Schlange an der Kasse.",
        },
        {
          n: 12,
          question: "",
          options: SAETZE,
          answer: 6,
          explanation:
            "G leitet mit „Dabei“ eine Wende ein: Langeweile gilt als lästig, hat aber einen Nutzen. Der nächste Satz benennt diesen Nutzen, und „sie“ bezieht sich weiterhin auf die Langeweile.",
        },
        {
          n: 13,
          question: "",
          options: SAETZE,
          answer: 3,
          explanation:
            "D nennt das Ergebnis des Experiments, das die Forscher anschließend deuten (Die Forscher vermuten …). F widerspräche dieser Deutung: Gäbe es keinen Zusammenhang mit der eintönigen Aufgabe, gäbe es nichts zu erklären.",
        },
        {
          n: 14,
          question: "",
          options: SAETZE,
          answer: 7,
          explanation:
            "H eröffnet einen neuen Absatz mit einer Einschränkung (allerdings), und „Andere Studien“ zeigen dann, wie schwer Menschen leere Zeit ertragen: Manche versetzen sich lieber einen Stromschlag, als mit ihren Gedanken allein zu sein.",
        },
        {
          n: 15,
          question: "",
          options: SAETZE,
          answer: 0,
          explanation:
            "Nach „dass man Langeweile verklären sollte“ (sie schönreden, idealisieren) nennt A die Schattenseite, und der nächste Satz veranschaulicht sie mit chronischer Unterforderung im Beruf.",
        },
        {
          n: 16,
          question: "",
          options: SAETZE,
          answer: 4,
          explanation:
            "E ist eine Aufzählung ohne Verb, mit Beispielen für das Nichtstun; sie zeigt, was mit dem bescheidenen Vorschlag gemeint ist, und „gerade das“ im letzten Satz greift sie wieder auf. B (Handyverbot in Wartezimmern) passt nirgends in den Text.",
        },
      ],
    },
    {
      title: "Teil 3",
      instructions:
        "Lesen Sie den Text. Wählen Sie bei jeder Aufgabe (17–22) die richtige Lösung: a, b oder c.",
      texts: [
        {
          title: "Die Sehnsucht nach der alten Stadt",
          body:
            "Kaum ein Thema spaltet die Architekturdebatte so zuverlässig wie die Rekonstruktion verlorener Bauten. Wo im Krieg zerstörte Altstädte, Schlösser oder Kirchen wiedererrichtet werden, stehen sich zwei Lager gegenüber, die einander wenig zu sagen haben. Die einen sprechen von Heilung, von der Rückgewinnung eines Gedächtnisses, das die Bomben ausgelöscht haben. Die anderen sehen darin Kulissenbau, eine Flucht in eine geschönte Vergangenheit, die es so nie gegeben hat.\n\n" +
            "Auffällig ist zunächst, wie populär solche Projekte sind. Bürgerinitiativen sammeln Spenden in Millionenhöhe, Fördervereine verkaufen symbolisch einzelne Steine, und die fertigen Bauten ziehen Besucher in Scharen an. Manche Fachleute reagieren darauf mit einer gewissen Herablassung: Das Publikum wolle eben Postkartenmotive, und die Politik gebe dem Druck nach. Doch diese Erklärung greift zu kurz. Wer mit Unterstützern spricht, hört selten etwas über Postkarten, aber viel über das Gefühl, in Städten zu leben, deren Nachkriegsarchitektur ihnen fremd geblieben ist. Die Rekonstruktion ist insofern auch ein Urteil über die Moderne – und zwar ein ziemlich hartes.\n\n" +
            "Die Einwände der Denkmalpflege sind gleichwohl ernst zu nehmen. Ein Denkmal, so lautet ihr Grundsatz, beglaubigt die Vergangenheit durch seine materielle Substanz: durch die Steine, die Generationen berührt haben, durch die Spuren von Umbauten und Beschädigungen. Eine Kopie mag dem Original noch so ähnlich sehen – diese Zeugenschaft besitzt sie nicht. Hinzu kommt, dass Rekonstruktionen in der Regel einen bestimmten Zeitpunkt auswählen, meist den einer Blütezeit, und alles, was davor und danach geschah, stillschweigend tilgen. Auch die Zerstörung selbst, die ja ebenfalls zur Geschichte des Ortes gehört, wird auf diese Weise unsichtbar.\n\n" +
            "Bemerkenswert ist, dass sich die Fronten in jüngerer Zeit etwas aufgelöst haben. Zahlreiche neuere Projekte bemühen sich um Zwischenlösungen: Fassaden werden originalgetreu wiederhergestellt, während das Innere offen zeigt, dass es von heute ist; Fragmente des alten Baus werden sichtbar in den neuen integriert; Brüche werden markiert statt kaschiert. Kritiker halten auch das für einen faulen Kompromiss, doch es spricht einiges dafür, dass gerade solche Lösungen dem Bedürfnis nach Vertrautheit gerecht werden, ohne die Geschichte zu verfälschen.\n\n" +
            "Letztlich verweist der Streit auf eine Frage, die über die Architektur hinausreicht: Wem gehört die Stadt, und wer entscheidet, an welche Vergangenheit sie erinnern soll? Dass diese Frage heute öffentlich und leidenschaftlich verhandelt wird, statt allein in Fachgremien, ist vielleicht der wichtigste Ertrag der Debatte – unabhängig davon, wie man zu einzelnen Bauten steht.",
        },
      ],
      items: [
        {
          n: 17,
          question: "Wie beschreibt der Autor das Verhältnis der beiden Lager?",
          options: [
            "Sie haben sich inzwischen weitgehend geeinigt.",
            "Sie verständigen sich kaum miteinander.",
            "Sie streiten vor allem über die Finanzierung.",
          ],
          answer: 1,
          explanation:
            "Zwei Lager, „die einander wenig zu sagen haben“: Sie verständigen sich kaum. Die Fronten haben sich zwar etwas aufgeweicht (vierter Absatz), eine Einigung gibt es aber nicht.",
        },
        {
          n: 18,
          question: "Wie bewertet der Autor die Erklärung, das Publikum wolle „Postkartenmotive“?",
          options: [
            "Er hält sie für unzureichend.",
            "Er schließt sich ihr ausdrücklich an.",
            "Er hält sie für eine Erfindung der Politik.",
          ],
          answer: 0,
          explanation:
            "„Doch diese Erklärung greift zu kurz“: zu kurz greifen = nicht weit genug gehen, unzureichend sein. Die Reaktion der Fachleute beschreibt er zudem als Herablassung.",
        },
        {
          n: 19,
          question: "Was treibt laut Text viele Unterstützer von Rekonstruktionen an?",
          options: [
            "Die Hoffnung auf mehr Einnahmen aus dem Tourismus.",
            "Die Ablehnung jeder Form moderner Kunst.",
            "Ein Gefühl der Fremdheit gegenüber der Nachkriegsarchitektur ihrer Städte.",
          ],
          answer: 2,
          explanation:
            "Unterstützer sprechen davon, in Städten zu leben, „deren Nachkriegsarchitektur ihnen fremd geblieben ist“. Deshalb nennt der Autor die Rekonstruktion ein hartes Urteil über die Moderne, und zwar in der Architektur, nicht über moderne Kunst insgesamt.",
        },
        {
          n: 20,
          question: "Worauf beruht nach Auffassung der Denkmalpflege der Wert eines Denkmals?",
          options: [
            "Auf seiner Schönheit und Bekanntheit.",
            "Auf seiner historischen Substanz mit allen Spuren der Zeit.",
            "Auf der genauen Übereinstimmung mit dem ursprünglichen Bauplan.",
          ],
          answer: 1,
          explanation:
            "Ein Denkmal „beglaubigt die Vergangenheit durch seine materielle Substanz“: die Steine selbst mit den Spuren von Umbauten und Schäden. Einer Kopie fehlt, so ähnlich sie auch sein mag, diese Zeugenschaft.",
        },
        {
          n: 21,
          question: "Welchen weiteren Einwand gegen Rekonstruktionen nennt der Text?",
          options: [
            "Sie blenden spätere Veränderungen und die Zerstörung selbst aus.",
            "Sie sind teurer als vergleichbare Neubauten.",
            "Sie werden selten vollständig fertiggestellt.",
          ],
          answer: 0,
          explanation:
            "Rekonstruktionen wählen einen einzigen Moment, meist eine Blütezeit, und „alles, was davor und danach geschah, stillschweigend tilgen“; sogar die Zerstörung wird unsichtbar. Tilgen heißt auslöschen.",
        },
        {
          n: 22,
          question: "Worin sieht der Autor den wichtigsten Gewinn der Debatte?",
          options: [
            "Darin, dass mehr historische Bauten rekonstruiert werden.",
            "Darin, dass wieder Fachleute allein über Bauprojekte entscheiden.",
            "Darin, dass die Gesellschaft öffentlich darüber streitet, woran ihre Städte erinnern sollen.",
          ],
          answer: 2,
          explanation:
            "Dass die Frage „öffentlich und leidenschaftlich …, statt allein in Fachgremien“ verhandelt wird, ist „vielleicht der wichtigste Ertrag der Debatte“. Antwort b ist das Gegenteil dessen, was er sagt.",
        },
      ],
    },
    {
      title: "Teil 4",
      instructions:
        "Lesen Sie den Kommentar. Entscheiden Sie bei den Aussagen 23–31: Entspricht die Aussage dem Text (Ja), widerspricht sie dem Text (Nein), oder sagt der Text dazu nichts?",
      texts: [
        {
          title: "Feierabend ist Feierabend – oder?",
          body:
            "Die Klage ist inzwischen so verbreitet, dass sie fast schon banal wirkt: Seit dienstliche E-Mails auf dem privaten Handy landen, hört die Arbeit für viele Beschäftigte nie ganz auf. Einige europäische Länder haben darauf mit Gesetzen reagiert, die Arbeitnehmern ein „Recht auf Nichterreichbarkeit“ zusichern. In Deutschland setzt man bislang eher auf Vereinbarungen zwischen Unternehmen und Betriebsräten.\n\n" +
            "Man mag das für zu zaghaft halten. Doch ein pauschales Gesetz hätte seine Tücken. Die Arbeitswelt ist zu vielfältig, als dass eine Regel für alle passen könnte: Was für die Sachbearbeiterin in einer Behörde sinnvoll ist, kann für den Softwareentwickler, der mit Kollegen in drei Zeitzonen zusammenarbeitet, eine Zumutung sein. Manche Beschäftigte schätzen es ausdrücklich, nachmittags die Kinder abzuholen und abends noch eine Stunde zu arbeiten. Ein starres Verbot würde ausgerechnet ihnen die Flexibilität nehmen, die sie sich erkämpft haben.\n\n" +
            "Das Problem liegt ohnehin weniger im Gesetzbuch als in der Kultur. Formal ist in vielen Firmen niemand verpflichtet, abends Nachrichten zu beantworten. Tatsächlich aber wissen alle, wer schnell reagiert und wer nicht, und wer Karriere machen will, zieht seine Schlüsse daraus. Studien zeigen, dass schon die bloße Erwartung, erreichbar sein zu müssen, das Wohlbefinden beeinträchtigt – auch wenn am Ende gar keine Nachricht kommt.\n\n" +
            "Entscheidend ist deshalb das Vorbild der Führungskräfte. Eine Abteilungsleiterin, die nachts um elf Mails verschickt, mag noch so oft betonen, dass niemand antworten müsse: Die Botschaft, die ankommt, ist eine andere. Einige Unternehmen stellen Mails, die nach Dienstschluss eingehen, inzwischen automatisch erst am nächsten Morgen zu. Das ist technisch simpel und wirkt, wie Beschäftigte berichten, Wunder.\n\n" +
            "Ein Gesetz kann solche Lösungen nicht ersetzen. Es könnte allerdings einen Rahmen setzen, der Unternehmen verpflichtet, überhaupt Regeln zu vereinbaren. Das wäre weniger spektakulär als ein Verbot – und vermutlich wirksamer.",
        },
      ],
      items: [
        {
          n: 23,
          question: "In Deutschland garantiert bereits ein Gesetz das Recht, nach Feierabend nicht erreichbar zu sein.",
          options: JNX,
          answer: 1,
          explanation:
            "Einige andere europäische Länder haben solche Gesetze; in Deutschland „setzt man bislang eher auf Vereinbarungen zwischen Unternehmen und Betriebsräten“, also nicht auf ein Gesetz.",
        },
        {
          n: 24,
          question: "Der Autor hält eine einheitliche Regelung für alle Berufe für problematisch.",
          options: JNX,
          answer: 0,
          explanation:
            "„Die Arbeitswelt ist zu vielfältig, als dass eine Regel für alle passen könnte.“ Beachten Sie die Struktur zu … als dass + Konjunktiv II: etwas ist so stark ausgeprägt, dass etwas anderes nicht möglich ist.",
        },
        {
          n: 25,
          question: "Manche Beschäftigte arbeiten bewusst lieber abends, um tagsüber Zeit für die Familie zu haben.",
          options: JNX,
          answer: 0,
          explanation:
            "Manche Beschäftigte schätzen es, nachmittags ihre Kinder abzuholen und abends noch eine Stunde zu arbeiten; ein starres Verbot würde ihnen diese Flexibilität nehmen.",
        },
        {
          n: 26,
          question: "In vielen Firmen sind Beschäftigte formal verpflichtet, abends erreichbar zu sein.",
          options: JNX,
          answer: 1,
          explanation:
            "Das Gegenteil: „Formal ist in vielen Firmen niemand verpflichtet, abends Nachrichten zu beantworten.“ Der Druck ist informell, eine Frage der Unternehmenskultur.",
        },
        {
          n: 27,
          question: "Schon die Erwartung, erreichbar sein zu müssen, kann belasten.",
          options: JNX,
          answer: 0,
          explanation:
            "„… dass schon die bloße Erwartung, erreichbar sein zu müssen, das Wohlbefinden beeinträchtigt – auch wenn am Ende gar keine Nachricht kommt.“",
        },
        {
          n: 28,
          question: "Jüngere Beschäftigte leiden stärker unter der ständigen Erreichbarkeit als ältere.",
          options: JNX,
          answer: 2,
          explanation: "Der Kommentar vergleicht nie Altersgruppen. Nichts im Text stützt oder widerlegt diese Aussage.",
        },
        {
          n: 29,
          question: "Führungskräfte, die nachts Mails verschicken, werden in manchen Firmen abgemahnt.",
          options: JNX,
          answer: 2,
          explanation:
            "Der Text sagt, dass das Vorbild der Führungskräfte entscheidend ist und dass manche Firmen späte Mails erst verzögert zustellen. Von Abmahnungen für Führungskräfte steht dort nichts.",
        },
        {
          n: 30,
          question: "Mails erst am nächsten Morgen zuzustellen, ist technisch aufwendig.",
          options: JNX,
          answer: 1,
          explanation: "„Das ist technisch simpel“, also das Gegenteil von aufwendig.",
        },
        {
          n: 31,
          question: "Der Autor befürwortet ein Gesetz, das Unternehmen verpflichtet, eigene Regeln zu vereinbaren.",
          options: JNX,
          answer: 0,
          explanation:
            "Ein Gesetz könnte einen Rahmen setzen, „der Unternehmen verpflichtet, überhaupt Regeln zu vereinbaren“; das hält der Autor für „vermutlich wirksamer“ als ein Verbot.",
        },
      ],
    },
  ],
};
