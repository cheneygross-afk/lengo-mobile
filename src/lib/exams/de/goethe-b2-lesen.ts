// Synced from cheneygross-afk/lengo:src/lib/exams/de/goethe-b2-lesen.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// Goethe-Zertifikat B2 practice exam -- Lesen.
// 65 minutes, 5 parts, 30 items, as in the real exam: four people's
// posts matched to nine statements, a press article with six missing
// sentences, a longer article (a, b or c), readers' comments matched to
// six headings, and the paragraphs of a set of rules matched to
// headings.
const PERSONEN = ["A. Hannes", "B. Renate", "C. Deniz", "D. Melanie"];

const SAETZE = [
  "A. Solche Maßnahmen sind allerdings teuer und aufwendig.",
  "B. Vor allem im Süden des Landes ist der Wolf heute weit verbreitet.",
  "C. Seitdem breiten sich die Tiere stetig aus.",
  "D. Ob das die Probleme wirklich löst, ist unter Fachleuten jedoch umstritten.",
  "E. Eltern fragen sich, ob ihre Kinder noch allein durch den Wald zur Schule gehen können.",
  "F. Davon profitiert nach Ansicht von Förstern auch der Wald selbst.",
  "G. Herdenschutzhunde gelten jedoch als gefährlich für Wanderer und werden deshalb kaum eingesetzt.",
  "H. Manche von ihnen haben ihre Herden nach mehreren Angriffen sogar ganz aufgegeben.",
];

const KOMMENTARE = ["A. Jens", "B. Claudia", "C. Tobias", "D. Ursula", "E. Mehmet", "F. Karin", "G. Felix", "H. Sonja"];

const UEBERSCHRIFTEN = [
  "A. Anmeldung und Ausweis",
  "B. Wenn man Medien zu spät zurückbringt",
  "C. Essen und Trinken in den Räumen",
  "D. Wer für beschädigte Medien aufkommt",
  "E. Kopieren und Drucken",
  "F. Wie lange man Medien behalten darf",
  "G. Veranstaltungen für Kinder",
  "H. Kosten für einen Ersatzausweis",
];

export const GOETHE_B2_LESEN: ExamPaper = {
  id: "lesen",
  kind: "reading",
  title: "Lesen",
  minutes: 65,
  group: 1,
  tasks: [
    {
      title: "Teil 1",
      instructions:
        "Sie lesen in einem Forum, wie Menschen über ihr ehrenamtliches Engagement berichten. Auf welche der vier Personen treffen die Aussagen 1 bis 9 zu? Die Personen können mehrmals gewählt werden. Arbeitszeit: etwa 18 Minuten.",
      instructionsEn:
        "Four people write in a forum about their volunteering. Which person (A-D) does each statement 1-9 fit? A person can be chosen more than once. About 18 minutes.",
      texts: [
        {
          label: "A",
          title: "Hannes, 34",
          body:
            "Seit drei Jahren gebe ich jeden Dienstagabend Nachhilfe in Mathematik für Kinder aus Familien, die sich keinen Privatunterricht leisten können. Ursprünglich wollte ich nur etwas Sinnvolles neben meinem Bürojob tun, doch inzwischen ist daraus viel mehr geworden. Einer meiner ersten Schüler hat im Sommer sein Abitur bestanden – mit einer Zwei in Mathe. Als er mir das erzählt hat, war ich stolzer als bei jeder Beförderung. Natürlich gibt es auch frustrierende Abende, wenn die Kinder müde sind und einfach keine Lust haben. Aber dann denke ich daran, wie viel ich selbst damals von meinen Lehrern bekommen habe. Das möchte ich weitergeben.",
        },
        {
          label: "B",
          title: "Renate, 67",
          body:
            "Nach meiner Pensionierung fiel mir regelrecht die Decke auf den Kopf. Vierzig Jahre lang hatte ich als Krankenschwester gearbeitet, und plötzlich wusste ich nicht mehr, wozu ich morgens aufstehen sollte. Eine Nachbarin hat mich dann zur Tafel mitgenommen, wo wir Lebensmittel an Bedürftige verteilen. Dort habe ich nicht nur eine Aufgabe, sondern auch neue Freundinnen gefunden. Was mich allerdings ärgert: Die Politik verlässt sich viel zu sehr darauf, dass Ehrenamtliche die Lücken füllen. Dass es in einem reichen Land wie unserem überhaupt Tafeln braucht, ist eigentlich ein Skandal.",
        },
        {
          label: "C",
          title: "Deniz, 22",
          body:
            "Ich bin bei der Freiwilligen Feuerwehr in meinem Dorf, wie schon mein Vater und mein Großvater. Für mich war das nie eine Frage. Viele meiner Freunde von der Uni verstehen nicht, warum ich nachts aufstehe, wenn der Alarm losgeht, ohne dafür einen Cent zu bekommen. Ich erkläre es ihnen so: Wenn es bei euch brennt, wollt ihr ja auch, dass jemand kommt. Schwierig wird es nur in der Prüfungszeit – meine Professoren zeigen leider nicht immer Verständnis, wenn ich nach einem Einsatz morgens im Hörsaal fehle.",
        },
        {
          label: "D",
          title: "Melanie, 41",
          body:
            "Ich habe mich jahrelang in einem Tierheim engagiert, bis ich vor einem Jahr aufgehört habe. Die Arbeit mit den Tieren habe ich geliebt, aber im Verein gab es ständig Streit. Zum Schluss hatte ich das Gefühl, mehr Zeit in Sitzungen zu verbringen als mit den Hunden. Außerdem mussten immer weniger Leute immer mehr Aufgaben übernehmen. Heute spende ich lieber Geld. Ich weiß, das ist nicht dasselbe, aber ich muss auch auf mich selbst achten. Ein Ehrenamt darf nicht krank machen.",
        },
      ],
      layout: "select",
      items: [
        { n: 1, question: "Wer hat durch das Ehrenamt neue Freundschaften geschlossen?", options: PERSONEN, answer: 1, explanation: "Renate: „Dort habe ich nicht nur eine Aufgabe, sondern auch neue Freundinnen gefunden.“" },
        { n: 2, question: "Wer setzt eine Familientradition fort?", options: PERSONEN, answer: 2, explanation: "Deniz ist bei der Freiwilligen Feuerwehr, „wie schon mein Vater und mein Großvater“." },
        {
          n: 3,
          question: "Wer kritisiert, dass der Staat Aufgaben auf Freiwillige abwälzt?",
          options: PERSONEN,
          answer: 1,
          explanation: "Renate: „Die Politik verlässt sich viel zu sehr darauf, dass Ehrenamtliche die Lücken füllen.“ Etwas auf andere abwälzen heißt: eine Aufgabe, die man selbst erledigen müsste, auf andere schieben.",
        },
        { n: 4, question: "Wer engagiert sich nicht mehr ehrenamtlich?", options: PERSONEN, answer: 3, explanation: "Melanie hat aufgehört („bis ich vor einem Jahr aufgehört habe“) und spendet jetzt stattdessen Geld." },
        {
          n: 5,
          question: "Wer freut sich über den Erfolg eines Menschen, den er oder sie unterstützt hat?",
          options: PERSONEN,
          answer: 0,
          explanation: "Hannes: Einer seiner ersten Schüler hat das Abitur mit einer Zwei in Mathe bestanden, und er war „stolzer als bei jeder Beförderung“.",
        },
        {
          n: 6,
          question: "Wer hat Schwierigkeiten, das Ehrenamt mit dem Studium zu vereinbaren?",
          options: PERSONEN,
          answer: 2,
          explanation: "Deniz: Die Prüfungszeit ist schwierig, und seine Professoren haben nicht immer Verständnis, wenn er nach einem Einsatz eine Vorlesung verpasst.",
        },
        {
          n: 7,
          question: "Wer fand die Organisation im Verein belastend?",
          options: PERSONEN,
          answer: 3,
          explanation: "Melanie: ständiger Streit im Verein und mehr Zeit in Sitzungen als mit den Hunden.",
        },
        {
          n: 8,
          question: "Wer möchte etwas zurückgeben, was er oder sie selbst bekommen hat?",
          options: PERSONEN,
          answer: 0,
          explanation: "Hannes denkt daran, „wie viel ich selbst damals von meinen Lehrern bekommen habe. Das möchte ich weitergeben.“",
        },
        {
          n: 9,
          question: "Wer hatte nach dem Ende des Berufslebens keine richtige Aufgabe mehr?",
          options: PERSONEN,
          answer: 1,
          explanation: "Renate nach dem Ruhestand: „fiel mir regelrecht die Decke auf den Kopf“ (sie fühlte sich zu Hause eingesperrt und unruhig), und sie wusste nicht mehr, wofür sie morgens aufstehen sollte.",
        },
      ],
    },
    {
      title: "Teil 2",
      instructions:
        "Sie lesen in einer Zeitschrift einen Artikel über die Rückkehr der Wölfe nach Deutschland. Wählen Sie die passenden Sätze für die Lücken 10 bis 15. Zwei Sätze bleiben übrig. Arbeitszeit: etwa 12 Minuten.",
      instructionsEn:
        "Read a magazine article about wolves returning to Germany. Choose the right sentence (A-H) for each gap 10-15. Two sentences are not used. About 12 minutes.",
      texts: [
        {
          title: "Der Wolf ist zurück – und mit ihm der Streit",
          body:
            "Mehr als hundert Jahre lang galt der Wolf in Deutschland als ausgerottet. Um das Jahr 2000 wanderten die ersten Tiere aus Polen in die Lausitz ein und gründeten dort ein Rudel. (10) ___ Heute leben wieder weit über tausend Wölfe im Land, vor allem im Norden und Osten.\n\n" +
            "Für Naturschützer ist das eine Erfolgsgeschichte. Der Wolf reguliert die Bestände von Rehen und Wildschweinen, die in vielen Wäldern junge Bäume abfressen. (11) ___\n\n" +
            "Ganz anders sehen das viele Schäfer und Landwirte. Sie berichten von gerissenen Schafen und Ziegen und fühlen sich von der Politik im Stich gelassen. (12) ___ Zwar zahlen die Bundesländer Entschädigungen, wenn nachgewiesen ist, dass ein Wolf die Tiere getötet hat. Doch das Verfahren dauert oft Monate, und für den Ärger und die zusätzliche Arbeit bekommt niemand Geld.\n\n" +
            "Hinzu kommt die Angst vieler Menschen auf dem Land. (13) ___ Fachleute betonen zwar, dass gesunde Wölfe Menschen in der Regel meiden. Doch solche Hinweise beruhigen nicht jeden.\n\n" +
            "Als Lösung empfehlen Experten vor allem einen besseren Schutz der Herden: hohe Elektrozäune und speziell ausgebildete Herdenschutzhunde. (14) ___ Viele Schäfer, die ohnehin wenig verdienen, können sich diese Kosten ohne staatliche Hilfe nicht leisten.\n\n" +
            "Seit einiger Zeit wird deshalb diskutiert, einzelne Wölfe, die immer wieder Zäune überwinden, gezielt zu schießen. (15) ___ Klar ist nur: Die Debatte über den Wolf wird so schnell nicht enden.",
        },
      ],
      layout: "select",
      items: [
        {
          n: 10,
          question: "",
          options: SAETZE,
          answer: 2,
          explanation: "„Seitdem breiten sich die Tiere stetig aus“ verbindet das erste Rudel um 2000 mit den heute weit über tausend Wölfen. Satz B widerspricht dem Text: „vor allem im Norden und Osten“.",
        },
        {
          n: 11,
          question: "",
          options: SAETZE,
          answer: 5,
          explanation: "Weniger Rehe fressen die jungen Bäume, also: „Davon profitiert … auch der Wald selbst.“ „Davon“ verweist auf die Wirkung des Wolfs auf Rehe und Wildschweine.",
        },
        {
          n: 12,
          question: "",
          options: SAETZE,
          answer: 7,
          explanation: "„Manche von ihnen“ bezieht sich auf die Schäfer und Landwirte, die nach Angriffen ihre Herden aufgegeben haben.",
        },
        {
          n: 13,
          question: "",
          options: SAETZE,
          answer: 4,
          explanation: "Der Absatz handelt von der Angst auf dem Land. Die Eltern, die sich um den Schulweg ihrer Kinder durch den Wald sorgen, sind das konkrete Beispiel dafür.",
        },
        {
          n: 14,
          question: "",
          options: SAETZE,
          answer: 0,
          explanation: "„Solche Maßnahmen“ sind die eben genannten Zäune und Hunde; „teuer“ führt zu „diese Kosten“ im nächsten Satz. Satz G passt nicht, weil die Fachleute gerade empfehlen, solche Hunde einzusetzen.",
        },
        {
          n: 15,
          question: "",
          options: SAETZE,
          answer: 3,
          explanation: "Nach der Idee, einzelne Wölfe abzuschießen: „Ob das die Probleme wirklich löst, ist … umstritten“. Das passt zu „Klar ist nur …“ im folgenden Satz.",
        },
      ],
    },
    {
      title: "Teil 3",
      instructions:
        "Sie lesen in einer Zeitung einen Artikel über Repair-Cafés. Wählen Sie bei den Aufgaben 16 bis 21 die richtige Lösung a, b oder c. Arbeitszeit: etwa 12 Minuten.",
      instructionsEn: "Read a newspaper article about repair cafés. For questions 16-21, choose a, b or c. About 12 minutes.",
      texts: [
        {
          title: "Reparieren statt wegwerfen",
          body:
            "Samstagnachmittag im Gemeindesaal einer Kirche in Hamburg-Altona. An langen Tischen sitzen Menschen über Toaster, Nähmaschinen und Kaffeemaschinen gebeugt, es riecht nach Lötzinn und frischem Kuchen. Willkommen im Repair-Café, einer Idee, die vor über zehn Jahren aus den Niederlanden nach Deutschland kam und inzwischen in fast jeder größeren Stadt zu finden ist.\n\n" +
            "Das Prinzip: Wer ein kaputtes Gerät hat, bringt es mit und repariert es gemeinsam mit einem ehrenamtlichen Helfer. Bezahlt wird nichts, eine Spende ist aber willkommen. „Wir sind kein kostenloser Reparaturservice“, betont Organisatorin Britta Hansen. „Die Leute sollen nicht ihr Gerät abgeben und einen Kaffee trinken gehen, sondern mitmachen und dabei etwas lernen.“\n\n" +
            "Die Erfolgsquote kann sich sehen lassen: Etwa zwei Drittel der Geräte verlassen das Café wieder funktionsfähig. Oft ist der Fehler banal – ein loses Kabel, eine verstopfte Düse, eine durchgebrannte Sicherung. Schwieriger wird es bei modernen Geräten. „Viele Hersteller verkleben die Gehäuse, statt sie zu verschrauben“, klagt der pensionierte Elektriker Werner Lüdtke, der seit der ersten Stunde dabei ist. „Und Ersatzteile gibt es entweder gar nicht, oder sie kosten fast so viel wie ein neues Gerät.“\n\n" +
            "Genau hier setzt inzwischen die Politik an. Die Europäische Union hat ein sogenanntes „Recht auf Reparatur“ beschlossen: Hersteller bestimmter Geräte sollen künftig über viele Jahre Ersatzteile anbieten und Reparaturen zu einem angemessenen Preis ermöglichen. Hansen begrüßt das, bleibt aber skeptisch. „Gesetze sind das eine. Solange ein neuer Wasserkocher zwanzig Euro kostet, werden die meisten Leute den alten trotzdem wegwerfen.“\n\n" +
            "Für viele Besucher geht es ohnehin um mehr als ums Geld. Die Rentnerin Gisela M. hat heute die Stehlampe mitgebracht, die schon im Wohnzimmer ihrer Eltern stand. „Die ist doch nicht einfach irgendein Gegenstand“, sagt sie, während Lüdtke vorsichtig den Schalter austauscht. „Da hängen Erinnerungen dran.“ Und manche kommen inzwischen auch ganz ohne kaputtes Gerät – einfach wegen des Kuchens und der Gespräche.",
        },
      ],
      items: [
        {
          n: 16,
          question: "Was erfährt man über die Repair-Cafés?",
          options: ["Sie wurden in Hamburg erfunden.", "Es gibt sie heute in vielen deutschen Städten.", "Sie finden immer in Kirchen statt."],
          answer: 1,
          explanation: "Die Idee kommt aus den Niederlanden, und Repair-Cafés gibt es heute „in fast jeder größeren Stadt“. Der Gemeindesaal einer Kirche ist nur der Ort dieses einen Cafés.",
        },
        {
          n: 17,
          question: "Britta Hansen erwartet von den Besuchern, dass sie …",
          options: ["sich aktiv an der Reparatur beteiligen.", "für die Reparatur bezahlen.", "ihre Geräte abgeben und später abholen."],
          answer: 0,
          explanation: "„Die Leute sollen … mitmachen und dabei etwas lernen“, also nicht das Gerät abgeben und so lange Kaffee trinken gehen. Bezahlen muss man nicht, es gibt nur eine freiwillige Spende.",
        },
        {
          n: 18,
          question: "Wie viele Geräte können im Repair-Café repariert werden?",
          options: ["Fast alle.", "Etwa die Hälfte.", "Ungefähr zwei von drei."],
          answer: 2,
          explanation: "„Etwa zwei Drittel der Geräte verlassen das Café wieder funktionsfähig.“ „Die Erfolgsquote kann sich sehen lassen“ heißt: Das Ergebnis ist beeindruckend.",
        },
        {
          n: 19,
          question: "Werner Lüdtke kritisiert, dass …",
          options: ["die jungen Helfer zu wenig Erfahrung haben.", "moderne Geräte oft schwer zu öffnen sind.", "die Besucher zu ungeduldig sind."],
          answer: 1,
          explanation: "Die Hersteller verkleben die Gehäuse, statt sie zu verschrauben („verkleben … statt sie zu verschrauben“), und Ersatzteile fehlen oder sind teuer.",
        },
        {
          n: 20,
          question: "Wie beurteilt Britta Hansen das „Recht auf Reparatur“?",
          options: [
            "Sie hält es für überflüssig.",
            "Sie glaubt, dass es das Problem allein lösen wird.",
            "Sie findet es gut, bezweifelt aber seine Wirkung.",
          ],
          answer: 2,
          explanation: "„Hansen begrüßt das, bleibt aber skeptisch“: Solange ein neuer Wasserkocher 20 Euro kostet, werfen die Leute den alten trotzdem weg.",
        },
        {
          n: 21,
          question: "Was zeigt das Beispiel von Gisela M.?",
          options: [
            "Manche Gegenstände haben für ihre Besitzer einen persönlichen Wert.",
            "Alte Lampen sind besonders schwer zu reparieren.",
            "Viele Rentner können sich keine neuen Geräte leisten.",
          ],
          answer: 0,
          explanation: "Die Lampe stand im Wohnzimmer ihrer Eltern: „Da hängen Erinnerungen dran.“ Der Absatz beginnt mit „Für viele Besucher geht es ohnehin um mehr als ums Geld.“",
        },
      ],
    },
    {
      title: "Teil 4",
      instructions:
        "Sie lesen in einer Zeitschrift Kommentare zum Thema „Soll Homeoffice ein gesetzliches Recht werden?“. Wählen Sie für die Aussagen 22 bis 27 den passenden Kommentar. Jeder Kommentar kann nur einmal gewählt werden. Der Kommentar aus dem Beispiel kann nicht mehr gewählt werden. Ein Kommentar bleibt übrig. Arbeitszeit: etwa 12 Minuten.\n\nBeispiel: 0. Mehr Zeit für die Familie – Lösung: A",
      instructionsEn:
        "Readers comment on whether working from home should be a legal right. Match each heading 22-27 to a comment (B-H). Comment A is the example (0) and can't be used again; one more comment is left over. About 12 minutes.",
      texts: [
        {
          label: "A",
          title: "Jens",
          body: "Seit der Pandemie arbeite ich drei Tage pro Woche von zu Hause. Ich spare jeden Tag fast zwei Stunden Pendelzeit, die ich jetzt mit meinen Kindern verbringe. Ein Zurück ins Büro an fünf Tagen kann ich mir nicht mehr vorstellen.",
        },
        {
          label: "B",
          title: "Claudia",
          body: "Als Krankenpflegerin kann ich über diese Diskussion nur lachen. Ein Gesetz für das Homeoffice würde wieder nur den Büroangestellten nützen. Wer im Krankenhaus, im Supermarkt oder auf dem Bau arbeitet, hätte gar nichts davon – im Gegenteil, die Kluft zwischen den Berufsgruppen würde noch größer.",
        },
        {
          label: "C",
          title: "Tobias",
          body: "Ich habe mein erstes Jahr im neuen Job fast nur zu Hause verbracht. Die Kollegen kannte ich nur als kleine Gesichter auf dem Bildschirm. Wie es in der Firma wirklich läuft, habe ich erst verstanden, als ich wieder regelmäßig ins Büro gegangen bin. Gerade Berufseinsteiger brauchen den persönlichen Kontakt.",
        },
        {
          label: "D",
          title: "Ursula",
          body: "Ich leite ein Team von zwölf Leuten, und ehrlich gesagt sind die meisten zu Hause produktiver als im Großraumbüro. Mein Problem ist ein anderes: Ich merke viel schlechter, wenn es jemandem nicht gut geht. Am Telefon sagt jeder, dass alles in Ordnung ist.",
        },
        {
          label: "E",
          title: "Mehmet",
          body: "Mein Arbeitszimmer ist gleichzeitig unser Schlafzimmer, der Schreibtisch steht direkt neben dem Bett. Bevor man über ein Recht auf Homeoffice spricht, sollte man klären, wer die Kosten für einen vernünftigen Arbeitsplatz zu Hause trägt – vom Bürostuhl bis zur Stromrechnung.",
        },
        {
          label: "F",
          title: "Karin",
          body: "Unser Ort hat jahrelang darunter gelitten, dass jeden Morgen fast alle in die Großstadt gependelt sind. Seit viele von zu Hause arbeiten, haben die Bäckerei und das Café bei uns wieder Kundschaft. Ein Recht auf Homeoffice wäre auch ein Gewinn für das Leben auf dem Land.",
        },
        {
          label: "G",
          title: "Felix",
          body: "Ein Gesetz halte ich für überflüssig. Firmen, die ihren Mitarbeitern kein Homeoffice erlauben, werden auf Dauer ohnehin keine guten Leute mehr finden. Das regelt der Arbeitsmarkt ganz von selbst.",
        },
        {
          label: "H",
          title: "Sonja",
          body: "Ich arbeite gern im Büro, weil ich dort Arbeit und Freizeit klar trennen kann. Zu Hause sitze ich auch um zehn Uhr abends noch am Laptop. Trotzdem fände ich es richtig, wenn jeder selbst wählen dürfte. Was für mich nicht passt, kann für andere ideal sein.",
        },
      ],
      layout: "select",
      items: [
        { n: 22, question: "Der Markt regelt das von allein", options: KOMMENTARE, answer: 6, explanation: "Felix (G): Ein Gesetz ist unnötig, „Das regelt der Arbeitsmarkt ganz von selbst.“" },
        {
          n: 23,
          question: "Wer bezahlt das Büro zu Hause?",
          options: KOMMENTARE,
          answer: 4,
          explanation: "Mehmet (E): Zuerst muss man klären, „wer die Kosten für einen vernünftigen Arbeitsplatz zu Hause trägt“.",
        },
        {
          n: 24,
          question: "Ein Vorteil nur für manche Berufe",
          options: KOMMENTARE,
          answer: 1,
          explanation: "Claudia (B): Ein Gesetz würde nur Büroangestellten helfen; Pflegekräfte, Verkäuferinnen und Bauarbeiter hätten nichts davon.",
        },
        {
          n: 25,
          question: "Wie es den Mitarbeitern geht, merkt man aus der Ferne kaum",
          options: KOMMENTARE,
          answer: 3,
          explanation: "Ursula (D) ist Teamleiterin und merkt viel schwerer, wenn es jemandem nicht gut geht: „Am Telefon sagt jeder, dass alles in Ordnung ist.“",
        },
        {
          n: 26,
          question: "Neues Leben für kleine Orte",
          options: KOMMENTARE,
          answer: 5,
          explanation: "Karin (F): Seit die Leute von zu Hause arbeiten, haben die Bäckerei und das Café im Dorf wieder Kundschaft.",
        },
        {
          n: 27,
          question: "Wer neu anfängt, braucht die Kollegen vor Ort",
          options: KOMMENTARE,
          answer: 2,
          explanation: "Tobias (C): Erst wieder im Büro hat er verstanden, wie die Firma funktioniert; „Gerade Berufseinsteiger brauchen den persönlichen Kontakt.“ Sonjas Kommentar (H) bleibt übrig.",
        },
      ],
    },
    {
      title: "Teil 5",
      instructions:
        "Sie lesen die Benutzungsordnung einer Stadtbücherei. Welche Überschrift passt zu welchem Paragrafen? Vier Überschriften bleiben übrig. Die Überschrift aus dem Beispiel kann nicht mehr gewählt werden. Arbeitszeit: etwa 6 Minuten.\n\nBeispiel: § 1 – Lösung: A",
      instructionsEn:
        "Read a town library's rules. Choose the heading (A-H) that fits each paragraph 28-30. § 1 is the example (heading A). Four headings are left over. About 6 minutes.",
      texts: [
        {
          title: "Benutzungsordnung der Stadtbücherei Lindenau (Auszug)",
          body:
            "§ 1 (Beispiel)\nDie Stadtbücherei steht allen Bürgerinnen und Bürgern offen. Für die Ausleihe ist ein gültiger Bibliotheksausweis erforderlich, der gegen Vorlage eines Personalausweises ausgestellt wird. Kinder unter 14 Jahren benötigen die schriftliche Einverständniserklärung eines Erziehungsberechtigten.\n\n" +
            "§ 2 (Aufgabe 28)\nDie Leihfrist beträgt für Bücher vier Wochen, für DVDs und Zeitschriften eine Woche. Sie kann bis zu zweimal verlängert werden, sofern das Medium nicht von einer anderen Person vorgemerkt ist. Die Verlängerung ist online, telefonisch oder vor Ort möglich.\n\n" +
            "§ 3 (Aufgabe 29)\nFür Medien, die nach Ablauf der Leihfrist nicht zurückgegeben werden, wird pro Medium und angefangener Woche eine Gebühr von 1 Euro erhoben. Nach drei Wochen erhält die Nutzerin bzw. der Nutzer eine schriftliche Mahnung. Solange Gebühren offen sind, ist keine weitere Ausleihe möglich.\n\n" +
            "§ 4 (Aufgabe 30)\nDie Nutzerinnen und Nutzer sind verpflichtet, die entliehenen Medien sorgfältig zu behandeln und vor Verlust und Beschädigung zu schützen. Für verlorene oder beschädigte Medien ist Ersatz zu leisten; die Höhe richtet sich nach dem Wiederbeschaffungswert.",
        },
      ],
      layout: "select",
      items: [
        {
          n: 28,
          question: "§ 2",
          options: UEBERSCHRIFTEN,
          answer: 5,
          explanation: "§ 2 regelt die Leihfrist und das Verlängern, also wie lange man Medien behalten darf (F).",
        },
        {
          n: 29,
          question: "§ 3",
          options: UEBERSCHRIFTEN,
          answer: 1,
          explanation: "§ 3: Nach dem Ende der Leihfrist zahlt man pro Medium und Woche eine Gebühr, danach kommt eine Mahnung (B). Überschrift H handelt von einem Ersatzausweis, nicht von zu später Rückgabe.",
        },
        {
          n: 30,
          question: "§ 4",
          options: UEBERSCHRIFTEN,
          answer: 3,
          explanation: "§ 4: Für verlorene oder beschädigte Medien „ist Ersatz zu leisten“, man zahlt also den Wiederbeschaffungswert (D). Für etwas aufkommen heißt: dafür bezahlen, dafür verantwortlich sein.",
        },
      ],
    },
  ],
};
