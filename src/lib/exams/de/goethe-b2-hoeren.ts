// Synced from cheneygross-afk/lengo:src/lib/exams/de/goethe-b2-hoeren.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// Goethe-Zertifikat B2 practice exam -- Hören.
// About 40 minutes, 4 parts, 30 items, as in the real exam: five short
// texts with two items each (heard once), a radio interview (heard
// twice), a radio discussion with three speakers (heard once, who says
// what?) and a short lecture (heard twice).
const RF = ["Richtig", "Falsch"];
const WER = ["A. Moderatorin", "B. Herr Albrecht", "C. Frau Yildiz"];

export const GOETHE_B2_HOEREN: ExamPaper = {
  id: "hoeren",
  kind: "listening",
  title: "Hören",
  minutes: 40,
  group: 1,
  tasks: [
    {
      title: "Teil 1",
      instructions:
        "Sie hören fünf kurze Texte. Sie hören jeden Text einmal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung. Lesen Sie zuerst die Aufgaben.",
      instructionsEn:
        "You'll hear five short texts, each only once. Each text has two questions: first true or false, then a, b or c. Read the questions first.",
      audio: [
        {
          label: "Text 1",
          plays: 1,
          lines: [
            {
              voice: "m",
              text: "Gute Nachrichten für alle, die das Auto öfter stehen lassen wollen: Ab dem ersten März fördert die Stadt den Kauf von Lastenrädern mit bis zu tausend Euro. Gefördert werden sowohl Privatpersonen als auch kleine Betriebe. Die Räder müssen allerdings bei einem Händler in der Region gekauft werden. Anträge können ausschließlich online gestellt werden. Das Budget ist begrenzt – wer zuerst kommt, mahlt zuerst.",
            },
          ],
        },
        {
          label: "Text 2",
          plays: 1,
          lines: [
            { voice: "m", text: "Sag mal, Steffi, gehst du morgen auch zu der Schulung über das neue Buchhaltungsprogramm?" },
            { voice: "f", text: "Eigentlich müsste ich, aber ich habe um zehn einen Termin mit einem Kunden, den kann ich nicht mehr verschieben." },
            { voice: "m", text: "Die Schulung wird doch aufgezeichnet. Du könntest sie dir später anschauen." },
            {
              voice: "f",
              text: "Ja, schon, aber dann kann ich keine Fragen stellen. Ich frage mal Herrn Kraus, ob es noch einen zweiten Termin gibt. Sonst muss mir eben jemand das Wichtigste erklären.",
            },
            { voice: "m", text: "Na, ich kann dir gern meine Notizen geben." },
          ],
        },
        {
          label: "Text 3",
          plays: 1,
          lines: [
            {
              voice: "f",
              text: "Und jetzt unser Kulturtipp für die Woche: Im Landesmuseum ist ab Freitag die Ausstellung „Unter der Stadt“ zu sehen. Gezeigt werden Funde, die beim Bau der neuen U-Bahn-Linie entdeckt wurden – darunter Münzen aus der Römerzeit und ein fast vollständig erhaltenes Holzboot. Besonders für Familien interessant: Kinder können in einem nachgebauten Grabungsfeld selbst nach Schätzen suchen. Die Ausstellung läuft bis Ende Januar; donnerstags ist sie bis zweiundzwanzig Uhr geöffnet.",
            },
          ],
        },
        {
          label: "Text 4",
          plays: 1,
          lines: [
            {
              voice: "m",
              text: "Guten Tag, Frau Yilmaz, hier spricht Thomas Brandl von der Hausverwaltung. Es geht um den Wasserschaden in Ihrem Bad. Der Gutachter war gestern da und hat festgestellt, dass ein Rohr in der Wand ausgetauscht werden muss. Die Arbeiten dauern voraussichtlich drei Tage, und in dieser Zeit können Sie das Bad leider nicht benutzen. Wir würden Ihnen für diese Tage ein Zimmer im Hotel Krone bezahlen. Bitte sagen Sie uns, ob Ihnen die Woche nach Ostern passt.",
            },
          ],
        },
        {
          label: "Text 5",
          plays: 1,
          lines: [
            {
              voice: "f",
              text: "Ich habe lange gedacht, mit über fünfzig lerne ich keine Sprache mehr. Dann hat mein Sohn eine Portugiesin geheiratet, und ich wollte mich mit ihrer Familie unterhalten können. Am Anfang war ich frustriert, weil ich mir die Wörter einfach nicht merken konnte. Geholfen hat mir dann ein Tandem mit einer Frau aus Lissabon, die Deutsch lernt. Wir telefonieren jede Woche eine Stunde – halb auf Portugiesisch, halb auf Deutsch. Inzwischen verstehe ich bei Familienfesten fast alles.",
            },
          ],
        },
      ],
      items: [
        {
          n: 1,
          source: 0,
          question: "Die Förderung gilt nur für Privatpersonen.",
          options: RF,
          answer: 1,
          explanation: "„Gefördert werden sowohl Privatpersonen als auch kleine Betriebe“: nicht nur Privatpersonen, sondern auch kleine Firmen.",
        },
        {
          n: 2,
          source: 0,
          question: "Was muss man beachten?",
          options: [
            "Man muss das Rad bei einem Händler aus der Region kaufen.",
            "Man kann den Antrag auch im Bürgerbüro stellen.",
            "Die Förderung gibt es nur für Elektroräder.",
          ],
          answer: 0,
          explanation: "„Die Räder müssen … bei einem Händler in der Region gekauft werden.“ Den Antrag stellt man ausschließlich online, nicht im Bürgerbüro.",
        },
        {
          n: 3,
          source: 1,
          question: "Steffi wird morgen nicht an der Schulung teilnehmen.",
          options: RF,
          answer: 0,
          explanation: "Sie hat um zehn einen Kundentermin, den sie nicht verschieben kann: „Eigentlich müsste ich, aber …“.",
        },
        {
          n: 4,
          source: 1,
          question: "Was will Steffi tun?",
          options: ["Den Kundentermin absagen.", "Fragen, ob die Schulung noch einmal stattfindet.", "Sich die Aufzeichnung anschauen."],
          answer: 1,
          explanation: "„Ich frage mal Herrn Kraus, ob es noch einen zweiten Termin gibt.“ Die Aufzeichnung will sie nicht, weil sie dann keine Fragen stellen kann.",
        },
        {
          n: 5,
          source: 2,
          question: "Die Gegenstände in der Ausstellung wurden bei Bauarbeiten gefunden.",
          options: RF,
          answer: 0,
          explanation: "„Funde, die beim Bau der neuen U-Bahn-Linie entdeckt wurden.“",
        },
        {
          n: 6,
          source: 2,
          question: "Was können Kinder in der Ausstellung machen?",
          options: ["Mit einem alten Boot fahren.", "Römische Münzen kaufen.", "Selbst wie Archäologen graben."],
          answer: 2,
          explanation: "„Kinder können in einem nachgebauten Grabungsfeld selbst nach Schätzen suchen“: Sie graben wie Archäologen.",
        },
        {
          n: 7,
          source: 3,
          question: "Die Reparatur im Bad ist in wenigen Stunden erledigt.",
          options: RF,
          answer: 1,
          explanation: "„Die Arbeiten dauern voraussichtlich drei Tage.“",
        },
        {
          n: 8,
          source: 3,
          question: "Was bietet die Hausverwaltung an?",
          options: ["Eine niedrigere Miete.", "Eine Unterkunft während der Arbeiten.", "Einen neuen Termin mit dem Gutachter."],
          answer: 1,
          explanation: "„Wir würden Ihnen für diese Tage ein Zimmer im Hotel Krone bezahlen.“ Der Gutachter war schon da.",
        },
        {
          n: 9,
          source: 4,
          question: "Die Sprecherin hat schon als junge Frau Portugiesisch gelernt.",
          options: RF,
          answer: 1,
          explanation: "Sie hat erst mit über fünfzig angefangen, als ihr Sohn eine Portugiesin geheiratet hat.",
        },
        {
          n: 10,
          source: 4,
          question: "Was hat ihr am meisten geholfen?",
          options: ["Eine Vokabel-App.", "Ein Intensivkurs in Lissabon.", "Regelmäßige Gespräche mit einer Tandempartnerin."],
          answer: 2,
          explanation: "„Geholfen hat mir dann ein Tandem“: jede Woche eine Stunde am Telefon, halb in jeder Sprache. In Lissabon wohnt nur ihre Tandempartnerin.",
        },
      ],
    },
    {
      title: "Teil 2",
      instructions:
        "Sie hören ein Interview. Sie hören den Text zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c. Lesen Sie jetzt die Aufgaben 11 bis 16. Dazu haben Sie 90 Sekunden Zeit.",
      instructionsEn: "You'll hear a radio interview with an urban planner about 'sponge cities', twice. For questions 11-16, choose a, b or c. You have 90 seconds to read the questions first.",
      audio: [
        {
          label: "Interview: Die Schwammstadt",
          lines: [
            {
              voice: "m",
              text: "Herzlich willkommen bei „Wissen am Mittag“. Hitzewellen im Sommer, Starkregen im Herbst – unsere Städte müssen sich auf den Klimawandel einstellen. Ein Stichwort, das man dabei immer häufiger hört, ist die „Schwammstadt“. Bei mir im Studio ist Doktor Katrin Seidel, Stadtplanerin an der Technischen Universität Dresden. Frau Seidel, was genau ist eine Schwammstadt?",
            },
            {
              voice: "f",
              text: "Die Idee ist eigentlich ganz einfach. Eine Stadt soll Regenwasser aufnehmen und speichern wie ein Schwamm, statt es so schnell wie möglich in die Kanalisation zu leiten. Bisher haben wir unsere Städte genau umgekehrt gebaut: Möglichst viel Fläche wurde versiegelt, also asphaltiert oder betoniert, und das Wasser verschwindet im Gully.",
            },
            { voice: "m", text: "Und was ist daran falsch?" },
            {
              voice: "f",
              text: "Zweierlei. Bei Starkregen ist die Kanalisation schnell überlastet, dann laufen Keller und Straßen voll. Und im Sommer fehlt das Wasser genau dort, wo wir es bräuchten: im Boden und bei den Bäumen. Die Bäume vertrocknen, und ohne ihren Schatten heizt sich die Stadt noch stärker auf.",
            },
            { voice: "m", text: "Wie sieht das konkret aus, wenn man eine Stadt zum Schwamm umbaut?" },
            {
              voice: "f",
              text: "Da gibt es viele kleine Bausteine. Begrünte Dächer zum Beispiel, die Wasser speichern und langsam wieder abgeben. Parkplätze mit durchlässigen Steinen statt Asphalt. Oder Mulden in Grünanlagen, in denen sich das Wasser bei Regen sammelt und langsam versickert. In Kopenhagen hat man sogar Plätze so gestaltet, dass sie bei extremem Regen bewusst überflutet werden. Sonst sind das ganz normale Sport- und Spielplätze.",
            },
            { voice: "m", text: "Das klingt teuer." },
            {
              voice: "f",
              text: "Am Anfang ja. Aber man muss die Kosten mit den Schäden vergleichen, die ohne solche Maßnahmen entstehen. Ein einziges Unwetter kann eine Stadt Hunderte Millionen Euro kosten. Außerdem müssen Straßen ohnehin regelmäßig saniert werden. Wenn man das dann gleich klimagerecht macht, sind die Mehrkosten oft überschaubar.",
            },
            { voice: "m", text: "Warum geht es dann so langsam voran?" },
            {
              voice: "f",
              text: "Ehrlich gesagt liegt es weniger am Geld als an den Zuständigkeiten. Für die Straße ist ein Amt zuständig, für die Grünflächen ein anderes, für das Abwasser ein drittes. Die müssen plötzlich gemeinsam planen, und das sind viele Verwaltungen nicht gewohnt.",
            },
            { voice: "m", text: "Was kann denn der Einzelne tun?" },
            {
              voice: "f",
              text: "Mehr, als man denkt. Wer einen Garten hat, kann eine Regentonne aufstellen oder den gepflasterten Hof wieder entsiegeln. Und Mieter können zum Beispiel eine Baumpatenschaft übernehmen und im Sommer einen Straßenbaum gießen. Das klingt nach wenig, aber für einen jungen Baum kann das über Leben und Tod entscheiden.",
            },
            { voice: "m", text: "Frau Seidel, vielen Dank für das Gespräch." },
          ],
        },
      ],
      items: [
        {
          n: 11,
          question: "Was ist die Grundidee der Schwammstadt?",
          options: [
            "Regenwasser soll möglichst schnell abfließen.",
            "Regenwasser soll in der Stadt gespeichert werden.",
            "Die Städte sollen mehr Trinkwasser sparen.",
          ],
          answer: 1,
          explanation: "„Eine Stadt soll Regenwasser aufnehmen und speichern wie ein Schwamm“, also genau das Gegenteil davon, es schnell abzuleiten, wie man Städte früher gebaut hat.",
        },
        {
          n: 12,
          question: "Welche Folge hat die Versiegelung im Sommer?",
          options: ["Die Kanalisation läuft über.", "Es gibt mehr Mücken.", "Die Bäume bekommen zu wenig Wasser."],
          answer: 2,
          explanation: "Im Sommer fehlt das Wasser „im Boden und bei den Bäumen“, die Bäume trocknen also aus. Überlaufende Kanäle sind das Problem bei Starkregen, nicht bei Sommerhitze.",
        },
        {
          n: 13,
          question: "Was hat man in Kopenhagen gemacht?",
          options: [
            "Man hat Plätze gebaut, die bei Starkregen absichtlich überflutet werden.",
            "Man hat alle Parkplätze begrünt.",
            "Man hat Sportplätze geschlossen.",
          ],
          answer: 0,
          explanation: "Die Plätze sind „so gestaltet, dass sie bei extremem Regen bewusst überflutet werden“; sonst sind es ganz normale Sport- und Spielplätze.",
        },
        {
          n: 14,
          question: "Wie beurteilt Frau Seidel die Kosten?",
          options: [
            "Sie sind für die meisten Städte zu hoch.",
            "Sie lohnen sich, wenn man sie mit möglichen Schäden vergleicht.",
            "Sie werden vollständig vom Bund übernommen.",
          ],
          answer: 1,
          explanation: "„Man muss die Kosten mit den Schäden vergleichen“: Ein einziges Unwetter kann Hunderte Millionen kosten, und die Mehrkosten bei ohnehin geplanten Straßenarbeiten sind „überschaubar“.",
        },
        {
          n: 15,
          question: "Warum geht der Umbau nur langsam voran?",
          options: ["Die Bürger sind dagegen.", "Es fehlen Fachleute.", "Verschiedene Ämter müssen zusammenarbeiten."],
          answer: 2,
          explanation: "„Weniger am Geld als an den Zuständigkeiten“: Straßen, Grünflächen und Abwasser gehören zu verschiedenen Ämtern, die jetzt gemeinsam planen müssen.",
        },
        {
          n: 16,
          question: "Was können Mieter tun?",
          options: ["Eine Regentonne aufstellen.", "Sich um einen Straßenbaum kümmern.", "Ihren Hof entsiegeln."],
          answer: 1,
          explanation: "Mieter können eine „Baumpatenschaft“ übernehmen und einen Straßenbaum gießen. Regentonne und Hof sind etwas für Leute mit eigenem Garten.",
        },
      ],
    },
    {
      title: "Teil 3",
      instructions:
        "Sie hören eine Diskussion. Sie hören den Text einmal. Wer sagt was? Ordnen Sie die Aussagen 17 bis 22 zu. Lesen Sie jetzt die Aussagen. Dazu haben Sie 60 Sekunden Zeit.",
      instructionsEn:
        "On the radio programme „Streitfrage“, the presenter discusses a social-media ban for under-16s with Prof. Albrecht, a child psychiatrist, and Ms Yildiz, a media educator. You hear it only once. Who says what? Choose A, B or C for statements 17-22. The presenter and Ms Yildiz are read by the same female voice here, so listen for who is being addressed.",
      audio: [
        {
          label: "Radiodiskussion: Soziale Medien erst ab 16?",
          plays: 1,
          lines: [
            {
              voice: "f",
              text: "Guten Abend und willkommen zur „Streitfrage“. Australien hat es vorgemacht: Dort dürfen Jugendliche unter sechzehn keine Konten in sozialen Netzwerken mehr haben. Auch in Deutschland wird über eine solche Altersgrenze diskutiert. Meine Gäste sind Professor Albrecht, Kinder- und Jugendpsychiater an der Uniklinik Freiburg, und Frau Yildiz, Medienpädagogin, die seit Jahren mit Schulklassen arbeitet. Herr Albrecht, Sie sind für eine Altersgrenze. Warum?",
            },
            {
              voice: "m",
              text: "Weil wir in unseren Kliniken sehen, was passiert. Die Zahl der Jugendlichen mit Angststörungen und Depressionen ist in den letzten Jahren deutlich gestiegen. Ich behaupte nicht, dass soziale Netzwerke allein daran schuld sind. Aber die Plattformen sind so gebaut, dass man nicht aufhören kann. Da kann man von einem Dreizehnjährigen keine Selbstkontrolle erwarten – die haben ja viele Erwachsene nicht.",
            },
            { voice: "f", text: "Frau Yildiz, Sie sehen das anders." },
            {
              voice: "f",
              text: "Ich teile die Sorge, aber nicht die Lösung. Ein Verbot klingt entschlossen, lässt sich aber kaum durchsetzen. Die Jugendlichen, mit denen ich arbeite, wissen genau, wie man ein falsches Geburtsdatum eingibt. Am Ende sind sie trotzdem auf den Plattformen – nur heimlich. Und dann trauen sie sich bei Problemen nicht mehr, mit ihren Eltern zu sprechen.",
            },
            {
              voice: "f",
              text: "Frau Yildiz, das Argument kennen wir auch vom Alkohol. Auch da halten sich nicht alle an die Altersgrenze, und trotzdem würde niemand sie abschaffen wollen.",
            },
            {
              voice: "m",
              text: "Genau. Kein Gesetz wird perfekt eingehalten. Aber es setzt eine Norm. Eltern können dann sagen: „Das ist nicht erlaubt“, statt jeden Abend neu zu verhandeln. Ich glaube, viele Eltern wären darüber sehr erleichtert.",
            },
            {
              voice: "f",
              text: "Nur verschiebt man das Problem um ein paar Jahre, Herr Albrecht. Mit sechzehn haben die Jugendlichen dann plötzlich vollen Zugang, ohne je gelernt zu haben, damit umzugehen. Ich wäre dafür, Medienkompetenz endlich als richtiges Schulfach einzuführen.",
            },
            { voice: "f", text: "Herr Albrecht, wäre das nicht auch in Ihrem Sinne?" },
            {
              voice: "m",
              text: "Natürlich, das eine schließt das andere ja nicht aus. Aber man kann die Verantwortung nicht nur den Schulen und Familien überlassen. Die Konzerne verdienen Milliarden mit der Aufmerksamkeit von Kindern. Die müssen wir in die Pflicht nehmen, zum Beispiel mit strengen Regeln für ihre Algorithmen.",
            },
            {
              voice: "f",
              text: "Da bin ich ausnahmsweise ganz bei Ihnen, Herr Albrecht. Wenn die Plattformen sicher gestaltet wären, bräuchten wir die ganze Debatte über Altersgrenzen gar nicht.",
            },
            {
              voice: "f",
              text: "Immerhin ein gemeinsamer Nenner. Ich selbst habe zwei Kinder im Teenageralter, und ich kann Ihnen sagen: Bei uns am Abendbrottisch wird über dieses Thema nicht weniger heftig gestritten als hier im Studio. Vielen Dank Ihnen beiden.",
            },
          ],
        },
      ],
      layout: "select",
      items: [
        {
          n: 17,
          question: "Eine Altersgrenze würde Eltern die Erziehung erleichtern.",
          options: WER,
          answer: 1,
          explanation: "Herr Albrecht (B): Eltern könnten sagen „Das ist nicht erlaubt“, statt jeden Abend neu zu verhandeln; viele wären erleichtert.",
        },
        {
          n: 18,
          question: "Jugendliche würden ein Verbot einfach umgehen.",
          options: WER,
          answer: 2,
          explanation: "Frau Yildiz (C): Jugendliche wissen, wie man ein falsches Geburtsdatum eingibt, und würden die Plattformen heimlich nutzen. Ein Verbot umgehen heißt: einen Weg darum herum finden.",
        },
        {
          n: 19,
          question: "Auch bei anderen Gefahren gibt es Altersgrenzen, die nicht immer eingehalten werden.",
          options: WER,
          answer: 0,
          explanation: "Die Moderatorin (A) vergleicht es mit Alkohol: Auch dort hält sich nicht jeder an die Altersgrenze, und trotzdem würde niemand sie abschaffen.",
        },
        {
          n: 20,
          question: "Der Umgang mit Medien sollte in der Schule systematisch unterrichtet werden.",
          options: WER,
          answer: 2,
          explanation: "Frau Yildiz (C) fordert „Medienkompetenz endlich als richtiges Schulfach“.",
        },
        {
          n: 21,
          question: "Die Unternehmen müssen stärker reguliert werden.",
          options: WER,
          answer: 1,
          explanation: "Herr Albrecht (B): Die Unternehmen verdienen Milliarden mit der Aufmerksamkeit von Kindern und müssen in die Pflicht genommen werden, zum Beispiel mit Regeln für Algorithmen. Frau Yildiz stimmt zu, aber er ist derjenige, der es sagt.",
        },
        {
          n: 22,
          question: "Das Thema sorgt auch in der eigenen Familie für Streit.",
          options: WER,
          answer: 0,
          explanation: "Die Moderatorin (A): Bei ihr zu Hause am Esstisch wird darüber genauso heftig gestritten wie im Studio.",
        },
      ],
    },
    {
      title: "Teil 4",
      instructions:
        "Sie hören einen Vortrag. Sie hören den Text zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c. Lesen Sie jetzt die Aufgaben 23 bis 30. Dazu haben Sie 90 Sekunden Zeit.",
      instructionsEn: "You'll hear a short lecture on procrastination, twice. For questions 23-30, choose a, b or c. You have 90 seconds to read the questions first.",
      audio: [
        {
          label: "Vortrag: Warum wir aufschieben",
          lines: [
            {
              voice: "m",
              text: "Meine sehr geehrten Damen und Herren, ich freue mich, dass Sie heute so zahlreich erschienen sind – obwohl viele von Ihnen sicher noch etwas anderes zu erledigen hätten. Damit sind wir schon beim Thema meines Vortrags: dem Aufschieben, in der Fachsprache Prokrastination genannt.",
            },
            {
              voice: "m",
              text: "Lassen Sie mich mit einem verbreiteten Irrtum beginnen. Viele halten Menschen, die Dinge aufschieben, für faul. Das ist falsch. Wer prokrastiniert, ist meistens sehr beschäftigt: Er räumt die Küche auf, beantwortet E-Mails oder sortiert seine Fotos. Er tut nur nicht das, was er eigentlich tun sollte.",
            },
            {
              voice: "m",
              text: "Warum ist das so? Die Forschung der letzten zwanzig Jahre zeigt: Aufschieben ist in erster Linie ein Problem der Gefühlsregulation, nicht des Zeitmanagements. Eine Aufgabe löst unangenehme Gefühle aus – Langeweile, Unsicherheit oder die Angst zu scheitern. Indem wir sie verschieben, fühlen wir uns kurzfristig besser. Das Gehirn belohnt uns also gewissermaßen für das Aufschieben, und genau deshalb wird es so schnell zur Gewohnheit.",
            },
            {
              voice: "m",
              text: "Besonders betroffen sind übrigens nicht, wie man vermuten könnte, die nachlässigen Menschen, sondern häufig Perfektionisten. Wer glaubt, eine Arbeit müsse von Anfang an perfekt sein, fängt lieber gar nicht erst an.",
            },
            {
              voice: "m",
              text: "Das Aufschieben hat Folgen, die über verpasste Abgabetermine hinausgehen. In einer Studie mit Studierenden zeigte sich, dass chronische Aufschieber häufiger unter Schlafproblemen und Stress litten – und zwar während des ganzen Semesters, nicht nur kurz vor den Prüfungen.",
            },
            {
              voice: "m",
              text: "Was hilft nun dagegen? Ratschläge wie „Reiß dich zusammen“ bringen erfahrungsgemäß wenig. Erfolgversprechender ist es, die Hürde für den Einstieg zu senken. Nehmen Sie sich nicht vor, „die Hausarbeit zu schreiben“, sondern „zehn Minuten lang Notizen zum ersten Kapitel zu machen“. Ist der Anfang einmal gemacht, arbeiten die meisten Menschen von selbst weiter.",
            },
            {
              voice: "m",
              text: "Ein zweiter, vielleicht überraschender Ansatz ist Selbstmitgefühl. Studien deuten darauf hin, dass Studierende, die sich das Aufschieben vor einer Prüfung verziehen hatten, vor der nächsten Prüfung weniger aufschoben als diejenigen, die sich heftige Vorwürfe gemacht hatten. Wer sich selbst bestraft, verbindet die Aufgabe nur noch stärker mit negativen Gefühlen.",
            },
            {
              voice: "m",
              text: "Zum Schluss noch ein Wort zur Umgebung. Das Smartphone ist wohl der wirksamste Helfer beim Aufschieben, den die Menschheit je erfunden hat. Studien legen nahe, dass schon ein Handy, das nur sichtbar auf dem Schreibtisch liegt, die Konzentration verringert. Legen Sie es also beim Arbeiten in einen anderen Raum – und zwar nicht erst morgen, sondern am besten gleich heute.",
            },
          ],
        },
      ],
      items: [
        {
          n: 23,
          question: "Der Redner stellt am Anfang fest, dass Menschen, die aufschieben, …",
          options: ["besonders faul sind.", "oft durchaus aktiv sind.", "sehr selten sind."],
          answer: 1,
          explanation: "„Wer prokrastiniert, ist meistens sehr beschäftigt“: aufräumen, E-Mails, Fotos, nur nicht die eigentliche Aufgabe. Dass Aufschieber faul sind, nennt der Redner einen verbreiteten Irrtum.",
        },
        {
          n: 24,
          question: "Laut der Forschung ist Aufschieben vor allem …",
          options: ["eine Frage schlechter Zeitplanung.", "eine angeborene Eigenschaft.", "ein Versuch, unangenehme Gefühle zu vermeiden."],
          answer: 2,
          explanation: "„In erster Linie ein Problem der Gefühlsregulation, nicht des Zeitmanagements.“",
        },
        {
          n: 25,
          question: "Warum wird Aufschieben leicht zur Gewohnheit?",
          options: ["Weil man sich danach kurzfristig besser fühlt.", "Weil man dabei Zeit spart.", "Weil andere es nicht bemerken."],
          answer: 0,
          explanation: "Wer die Aufgabe verschiebt, fühlt sich kurzfristig besser. Das Gehirn „belohnt uns … für das Aufschieben“, und so entsteht eine Gewohnheit.",
        },
        {
          n: 26,
          question: "Wer schiebt laut dem Vortrag häufig auf?",
          options: ["Menschen mit wenig Arbeit.", "Vor allem ältere Menschen.", "Menschen mit sehr hohen Ansprüchen an sich selbst."],
          answer: 2,
          explanation: "„Nicht … die nachlässigen Menschen, sondern häufig Perfektionisten“, die lieber gar nicht anfangen als unvollkommen.",
        },
        {
          n: 27,
          question: "Was zeigte die Studie mit Studierenden?",
          options: [
            "Aufschieber hatten nur vor Prüfungen Stress.",
            "Aufschieber schliefen während des ganzen Semesters schlechter.",
            "Aufschieber hatten am Ende bessere Noten.",
          ],
          answer: 1,
          explanation: "Mehr Schlafprobleme und Stress „während des ganzen Semesters, nicht nur kurz vor den Prüfungen“.",
        },
        {
          n: 28,
          question: "Welchen Rat gibt der Redner?",
          options: [
            "Sich selbst streng zu disziplinieren.",
            "Große Aufgaben in einem Stück zu erledigen.",
            "Mit einem sehr kleinen ersten Schritt zu beginnen.",
          ],
          answer: 2,
          explanation: "Die Einstiegshürde senken: sich nicht vornehmen, „die Hausarbeit zu schreiben“, sondern nur zehn Minuten Notizen zum ersten Kapitel zu machen. „Reiß dich zusammen“ hilft selten.",
        },
        {
          n: 29,
          question: "Was sagt der Redner über Selbstmitgefühl?",
          options: [
            "Wer sich verzeiht, schiebt beim nächsten Mal weniger auf.",
            "Selbstmitgefühl macht Menschen bequem.",
            "Es hilft nur Perfektionisten.",
          ],
          answer: 0,
          explanation: "Studierende, die sich selbst verziehen haben, haben vor der nächsten Prüfung weniger aufgeschoben als die, die sich Vorwürfe gemacht haben.",
        },
        {
          n: 30,
          question: "Was empfiehlt der Redner zum Smartphone?",
          options: [
            "Es nur stummzuschalten.",
            "Es beim Arbeiten in einem anderen Raum zu lassen.",
            "Eine App gegen Ablenkung zu installieren.",
          ],
          answer: 1,
          explanation: "Schon ein Handy, das sichtbar auf dem Schreibtisch liegt, verringert die Konzentration, deshalb: „Legen Sie es … in einen anderen Raum“.",
        },
      ],
    },
  ],
};
