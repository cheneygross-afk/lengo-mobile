// Synced from cheneygross-afk/lengo:src/lib/exams/de/goethe-b1-lesen.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// Goethe-Zertifikat B1 practice exam -- Lesen.
// 65 minutes, 5 parts, 30 items, as in the real exam: a blog post (true
// or false), two press articles (a, b or c), ten small ads for seven
// situations (one situation has no matching ad), seven readers' letters
// (is the writer for or against?) and a set of house rules (a, b or c).
const RF = ["Richtig", "Falsch"];
const JN = ["Ja", "Nein"];

const ANZEIGEN = [
  "A. Spanisch für Anfänger (VHS)",
  "B. Smartphone-Sprechstunde in der Stadtbibliothek",
  "C. Waldentdecker-Tag mit dem Förster",
  "D. Rückenfit",
  "E. Selbsthilfe-Fahrradwerkstatt",
  "F. Fahrradverleih am Hauptbahnhof",
  "G. Sozialkaufhaus „Zweite Chance“",
  "H. Gemüse statt Fleisch: Kochkurs",
  "I. Italienisch kompakt am Wochenende",
  "J. Seepferdchen-Kurs im Hallenbad",
  "K. Keine Anzeige passt.",
];

export const GOETHE_B1_LESEN: ExamPaper = {
  id: "lesen",
  kind: "reading",
  title: "Lesen",
  minutes: 65,
  group: 1,
  tasks: [
    {
      title: "Teil 1",
      instructions:
        "Lesen Sie den Text und die Aufgaben 1 bis 6. Wählen Sie: Sind die Aussagen richtig oder falsch? Arbeitszeit: etwa 10 Minuten.",
      instructionsEn: "Read Miriam's blog post. Are statements 1-6 true (Richtig) or false (Falsch)? About 10 minutes.",
      texts: [
        {
          title: "Mein Sommer auf der Alm – ein Blog von Miriam",
          body:
            "Hallo ihr Lieben,\n\n" +
            "endlich bin ich wieder zu Hause in Leipzig und habe Zeit, euch von meinem Sommer zu erzählen. Wie ihr wisst, habe ich im Frühling meinen Job im Büro gekündigt. Ich wollte einfach mal etwas ganz anderes machen. Meine Freundin Katrin hat mir dann von einer Familie in Tirol erzählt, die jedes Jahr Helfer für ihre Alm sucht. Ich habe sofort geschrieben, und zwei Wochen später saß ich schon im Zug nach Innsbruck.\n\n" +
            "Die Arbeit war viel härter, als ich gedacht hatte. Wir sind jeden Morgen um halb fünf aufgestanden, um die Kühe zu melken. Danach habe ich meistens in der Küche geholfen, denn die Familie verkauft Käse und Kuchen an Wanderer. Am Anfang hatte ich ziemlichen Muskelkater, und einmal wollte ich sogar nach Hause fahren. Aber Frau Hofer, die Bäuerin, hat mir Mut gemacht: „Die erste Woche ist immer die schwerste“, hat sie gesagt. Und sie hatte recht.\n\n" +
            "Am meisten hat mir die Ruhe gefallen. Auf der Alm gab es kein Internet, und das Handy hatte nur auf einem Hügel hinter dem Stall Empfang. Abends haben wir zusammen gegessen, Karten gespielt oder einfach die Sterne angeschaut. Ich habe in diesen drei Monaten mehr Bücher gelesen als in den letzten fünf Jahren.\n\n" +
            "Jetzt suche ich wieder eine Stelle, aber nicht mehr unbedingt im Büro. Vielleicht mache ich eine Ausbildung zur Köchin – das Kochen für zwanzig hungrige Wanderer hat mir nämlich richtig Spaß gemacht. Nächsten Sommer möchte ich aber auf jeden Fall wieder auf die Alm, wenn auch nur für ein paar Wochen.\n\n" +
            "Eure Miriam",
        },
      ],
      items: [
        {
          n: 1,
          question: "Miriam hat ihre Arbeit im Büro selbst beendet.",
          options: RF,
          answer: 0,
          explanation: "„Ich habe im Frühling meinen Job im Büro gekündigt“: Wer kündigt, beendet die Arbeit selbst. Miriam hat die Stelle also selbst aufgegeben.",
        },
        {
          n: 2,
          question: "Miriam hat die Stelle auf der Alm im Internet gefunden.",
          options: RF,
          answer: 1,
          explanation: "Ihre Freundin Katrin hat ihr von der Familie erzählt („Meine Freundin Katrin hat mir … erzählt“). Vom Internet steht nichts im Text.",
        },
        {
          n: 3,
          question: "In der ersten Zeit war die Arbeit für Miriam sehr anstrengend.",
          options: RF,
          answer: 0,
          explanation: "„Die Arbeit war viel härter, als ich gedacht hatte“: Sie hatte Muskelkater und wollte einmal sogar nach Hause fahren.",
        },
        {
          n: 4,
          question: "Auf der Alm konnte Miriam überall mit dem Handy telefonieren.",
          options: RF,
          answer: 1,
          explanation: "„Das Handy hatte nur auf einem Hügel hinter dem Stall Empfang“: Telefonieren konnte sie also nur an einer Stelle, nicht überall.",
        },
        {
          n: 5,
          question: "In ihrer Freizeit hat Miriam auf der Alm viel gelesen.",
          options: RF,
          answer: 0,
          explanation: "„Ich habe in diesen drei Monaten mehr Bücher gelesen als in den letzten fünf Jahren.“",
        },
        {
          n: 6,
          question: "Miriam will auf keinen Fall wieder im Büro arbeiten.",
          options: RF,
          answer: 1,
          explanation:
            "„Nicht mehr unbedingt im Büro“ heißt: vielleicht im Büro, vielleicht auch nicht. „Nicht unbedingt“ ist viel schwächer als „auf keinen Fall“. Das ist eine typische Falle.",
        },
      ],
    },
    {
      title: "Teil 2",
      instructions:
        "Lesen Sie die Texte aus der Presse und die Aufgaben 7 bis 12. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c. Arbeitszeit: etwa 20 Minuten.",
      instructionsEn: "Read the two press articles. For questions 7-12, choose a, b or c. Questions 7-9 are about the first text, 10-12 about the second. About 20 minutes.",
      texts: [
        {
          label: "Text 1",
          title: "Offene Bücherschränke: Nehmen, lesen, zurückbringen",
          body:
            "Wer in diesen Tagen durch Bonn, Hannover oder Kassel spaziert, entdeckt sie immer häufiger: alte Telefonzellen oder Holzschränke voller Bücher. Das Prinzip ist einfach. Jeder darf ein Buch herausnehmen, es behalten oder später zurückbringen – und wer zu Hause zu viele Bücher hat, stellt einfach welche hinein. Eine Anmeldung braucht man nicht, und Geld kostet es auch nichts.\n\n" +
            "In Deutschland gibt es inzwischen mehrere tausend solcher Schränke. Meistens kümmern sich Vereine oder Nachbarn ehrenamtlich darum. Einer von ihnen ist der Rentner Klaus Wegener aus Kassel. Zweimal pro Woche sieht er nach „seinem“ Schrank, sortiert alte Zeitschriften aus und bringt nasse Bücher weg. „Leider stellen manche Leute auch Sachen hinein, die niemand mehr lesen kann“, erzählt er. „Ein Bücherschrank ist kein Altpapiercontainer.“\n\n" +
            "Trotzdem ist Wegener von der Idee begeistert. Am Schrank kommt er oft mit Fremden ins Gespräch, und viele Kinder holen sich hier ihre ersten eigenen Bücher. Die Stadt plant deshalb, im nächsten Jahr drei weitere Schränke aufzustellen – diesmal auch in Stadtteilen, in denen es keine Bibliothek gibt.",
        },
        {
          label: "Text 2",
          title: "Mittagsschlaf im Büro? Ja, bitte!",
          body:
            "Nach dem Mittagessen werden viele Menschen müde. Die Augen fallen zu, die Konzentration lässt nach. In Deutschland trinkt man dann meistens einen Kaffee. In einer Softwarefirma in Stuttgart gibt es seit einem Jahr eine andere Lösung: einen Ruheraum mit bequemen Liegen, in dem sich die Angestellten bis zu zwanzig Minuten hinlegen dürfen.\n\n" +
            "„Am Anfang hatten viele Kollegen Angst, dass man sie für faul hält“, erzählt die Personalchefin Sandra Kühn. „Deshalb hat sich der Chef in der ersten Woche ganz bewusst selbst hingelegt, damit es alle sehen.“ Inzwischen ist der Raum fast immer besetzt, und man muss ihn über eine App reservieren.\n\n" +
            "Schlafforscher sehen den Trend positiv. Ein kurzer Schlaf am Mittag kann die Leistung am Nachmittag deutlich verbessern. Wichtig ist allerdings, nicht länger als etwa zwanzig bis dreißig Minuten zu schlafen. Wer zu lange schläft, fällt in den Tiefschlaf und ist danach oft noch müder als vorher.",
        },
      ],
      items: [
        {
          n: 7,
          source: 0,
          question: "In einem offenen Bücherschrank …",
          options: ["muss man sich zuerst anmelden.", "kann man Bücher kostenlos mitnehmen.", "darf man nur ein Buch pro Woche ausleihen."],
          answer: 1,
          explanation: "„Jeder darf ein Buch herausnehmen, es behalten …“ und „Geld kostet es auch nichts“. Man muss sich nicht anmelden, und es gibt keine Regel „ein Buch pro Woche“.",
        },
        {
          n: 8,
          source: 0,
          question: "Klaus Wegener ärgert sich, weil …",
          options: [
            "manche Leute unbrauchbare Dinge in den Schrank stellen.",
            "zu wenige Leute den Schrank benutzen.",
            "die Stadt ihm nicht hilft.",
          ],
          answer: 0,
          explanation: "„Leider stellen manche Leute auch Sachen hinein, die niemand mehr lesen kann … kein Altpapiercontainer“: Der Schrank ist kein Platz für altes Papier.",
        },
        {
          n: 9,
          source: 0,
          question: "Die Stadt Kassel will …",
          options: [
            "die Bibliotheken durch Bücherschränke ersetzen.",
            "nur noch Kinderbücher in die Schränke stellen.",
            "neue Schränke auch in Stadtteilen ohne Bibliothek aufstellen.",
          ],
          answer: 2,
          explanation: "„… drei weitere Schränke aufzustellen – diesmal auch in Stadtteilen, in denen es keine Bibliothek gibt.“ Dass die Schränke Bibliotheken ersetzen sollen, steht nirgends.",
        },
        {
          n: 10,
          source: 1,
          question: "In der Stuttgarter Firma …",
          options: [
            "bekommen die Angestellten nach dem Essen kostenlosen Kaffee.",
            "dürfen sich die Angestellten mittags kurz hinlegen.",
            "muss jeder Mitarbeiter mittags schlafen.",
          ],
          answer: 1,
          explanation: "Es gibt einen Ruheraum, in dem sich die Angestellten „bis zu zwanzig Minuten hinlegen dürfen“. Sie dürfen, sie müssen aber nicht. Vom Kaffee spricht der Text nur als übliche Alternative.",
        },
        {
          n: 11,
          source: 1,
          question: "Warum hat sich der Chef in den Ruheraum gelegt?",
          options: [
            "Er war nach dem Mittagessen immer sehr müde.",
            "Er wollte den Raum testen, bevor er ihn öffnet.",
            "Er wollte zeigen, dass ein Mittagsschlaf in Ordnung ist.",
          ],
          answer: 2,
          explanation: "Die Angestellten hatten Angst, dass man sie für faul hält. Deshalb hat sich der Chef „ganz bewusst … damit es alle sehen“ hingelegt: Er wollte zeigen, dass das in Ordnung ist.",
        },
        {
          n: 12,
          source: 1,
          question: "Was sagen Schlafforscher?",
          options: [
            "Ein Mittagsschlaf sollte nicht zu lang sein.",
            "Man sollte mittags mindestens eine Stunde schlafen.",
            "Kaffee hilft besser als ein kurzer Schlaf.",
          ],
          answer: 0,
          explanation: "Nicht länger als etwa 20 bis 30 Minuten, sonst kommt man in den Tiefschlaf und wacht noch müder auf.",
        },
      ],
    },
    {
      title: "Teil 3",
      instructions:
        "Lesen Sie die Situationen 13 bis 19 und die Anzeigen A bis J. Wählen Sie: Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Für eine Situation gibt es keine passende Anzeige. In diesem Fall wählen Sie K. Arbeitszeit: etwa 10 Minuten.",
      instructionsEn:
        "Your friends and acquaintances are looking for courses and offers. Match each situation (13-19) to an ad (A-J). Each ad can be used once; one situation has no matching ad, so choose K for it. About 10 minutes.",
      texts: [
        { label: "A", title: "Spanisch für Anfänger", body: "Volkshochschule Mitte. Lernen Sie in entspannter Atmosphäre die ersten Schritte auf Spanisch. Dienstags und donnerstags, 18:00–19:30 Uhr, 12 Wochen, 96 €." },
        { label: "B", title: "Smartphone-Sprechstunde", body: "Stadtbibliothek, jeden Mittwoch 15–17 Uhr. Schülerinnen und Schüler erklären Seniorinnen und Senioren Schritt für Schritt: Nachrichten schreiben, Fotos verschicken, Videoanrufe. Kostenlos, ohne Anmeldung." },
        { label: "C", title: "Waldentdecker-Tag", body: "Mit dem Förster durch den Stadtwald: Tierspuren suchen, Hütten bauen, am Feuer Stockbrot backen. Für Familien mit Kindern ab 5 Jahren. Sonntags 10–13 Uhr, Treffpunkt Waldparkplatz." },
        { label: "D", title: "Rückenfit", body: "Gymnastik für einen starken, gesunden Rücken. Unter Leitung einer erfahrenen Physiotherapeutin. Montags 19 Uhr, Turnhalle der Goetheschule. Schnupperstunde gratis!" },
        { label: "E", title: "Selbsthilfe-Fahrradwerkstatt", body: "Platten? Bremse quietscht? Werkzeug ist da – unsere Ehrenamtlichen zeigen dir, wie du dein Rad selbst wieder fit machst. Jeden Freitag ab 16 Uhr im Jugendzentrum." },
        { label: "F", title: "Fahrradverleih am Hauptbahnhof", body: "E-Bikes, Tourenräder und Kinderanhänger ab 12 € pro Tag. Geführte Radtouren durch die Altstadt am Wochenende. Online buchen und Zeit sparen." },
        { label: "G", title: "Sozialkaufhaus „Zweite Chance“", body: "Schränke, Tische, Betten, Lampen und Geschirr aus zweiter Hand zu kleinen Preisen. Lieferung gegen geringe Gebühr möglich. Mo–Sa 10–18 Uhr." },
        { label: "H", title: "Gemüse statt Fleisch", body: "Vegetarische Küche aus aller Welt: von indischem Linsencurry bis zur italienischen Gemüselasagne. Kochkurs donnerstags 18:30–21:30 Uhr, Familienzentrum Süd." },
        { label: "I", title: "Italienisch kompakt am Wochenende", body: "Intensivkurs für Anfänger mit Vorkenntnissen: samstags 9–13 Uhr, sechs Wochen. Kleine Gruppen, muttersprachliche Lehrerin." },
        { label: "J", title: "Seepferdchen-Kurs", body: "Schwimmen lernen für Kinder ab 5 Jahren im Hallenbad am Ring. Mittwochs 16 Uhr, 10 Termine. Eltern warten bitte in der Cafeteria." },
      ],
      layout: "select",
      items: [
        {
          n: 13,
          question: "Ihre Nachbarin (72) möchte lernen, wie man mit dem Handy Fotos an die Enkel schickt.",
          options: ANZEIGEN,
          answer: 1,
          explanation: "Anzeige B: Schülerinnen und Schüler erklären älteren Menschen das Smartphone, auch „Fotos verschicken“.",
        },
        {
          n: 14,
          question: "Ein Kollege möchte am Wochenende mit seinen Kindern (6 und 8) etwas in der Natur unternehmen.",
          options: ANZEIGEN,
          answer: 2,
          explanation: "Anzeige C: sonntags im Wald, für Familien mit Kindern ab 5 Jahren. Der Schwimmkurs (J) ist mittwochs und im Hallenbad, also nicht am Wochenende in der Natur.",
        },
        {
          n: 15,
          question: "Eine Freundin möchte Spanisch lernen, hat aber nur samstags Zeit.",
          options: ANZEIGEN,
          answer: 10,
          explanation: "Der Spanischkurs (A) ist dienstags und donnerstags abends, und der Kurs am Samstag (I) ist Italienisch. Für die Freundin passt also keine Anzeige: K.",
        },
        {
          n: 16,
          question: "Ihr Bruder hat oft Rückenschmerzen und sucht einen passenden Sportkurs.",
          options: ANZEIGEN,
          answer: 3,
          explanation: "Anzeige D: Rückenfit, Gymnastik für den Rücken mit einer Physiotherapeutin.",
        },
        {
          n: 17,
          question: "Ein Freund möchte lernen, wie er sein Fahrrad selbst reparieren kann.",
          options: ANZEIGEN,
          answer: 4,
          explanation: "Anzeige E: In der Selbsthilfe-Werkstatt zeigen Ehrenamtliche, wie man das Rad selbst repariert. Beim Fahrradverleih (F) kann man Räder nur mieten.",
        },
        {
          n: 18,
          question: "Ihre Mitbewohnerin braucht günstige Möbel für ihr neues Zimmer.",
          options: ANZEIGEN,
          answer: 6,
          explanation: "Anzeige G: Schränke, Tische und Betten aus zweiter Hand „zu kleinen Preisen“. Günstig heißt: Es kostet nicht viel.",
        },
        {
          n: 19,
          question: "Ein Bekannter isst kein Fleisch und möchte abends einen Kochkurs machen.",
          options: ANZEIGEN,
          answer: 7,
          explanation: "Anzeige H: vegetarisch kochen, donnerstags am Abend.",
        },
      ],
    },
    {
      title: "Teil 4",
      instructions:
        "Lesen Sie die Texte 20 bis 26. Wählen Sie: Ist die Person für Hunde im Büro? Arbeitszeit: etwa 15 Minuten.",
      instructionsEn:
        "In a magazine's readers' letters page, seven people write about whether dogs should be allowed in the office. For each one (20-26), choose Ja if the person is in favour and Nein if not. About 15 minutes.",
      texts: [
        {
          label: "Leserbriefe",
          title: "Dürfen Hunde mit ins Büro?",
          body:
            "20. Lena: Ich arbeite in einer kleinen Werbeagentur, und seit zwei Jahren bringt unser Chef seinen Hund Bruno mit ins Büro. Seitdem ist die Stimmung viel entspannter. Wenn ich gestresst bin, gehe ich kurz mit Bruno um den Block – danach habe ich wieder einen klaren Kopf.\n\n" +
            "21. Markus: Ich habe eine starke Tierhaarallergie. Für mich wäre ein Hund im Büro eine Katastrophe. Ich finde, man muss auch an die Kollegen denken, die gesundheitliche Probleme oder einfach Angst vor Hunden haben.\n\n" +
            "22. Aylin: Natürlich liebe ich Hunde, ich habe selbst zwei. Aber ins Büro gehören sie trotzdem nicht. Ein Hund braucht Bewegung und Ruhe, und beides hat er in einem Großraumbüro mit klingelnden Telefonen nicht. Meine Hunde bleiben tagsüber lieber bei meiner Mutter.\n\n" +
            "23. Thomas: Viele Leute schaffen sich keinen Hund an, weil sie den ganzen Tag arbeiten. Wenn mehr Firmen Hunde erlauben würden, müssten die Tiere nicht acht Stunden allein zu Hause sitzen. Wenn es klare Regeln gibt, sehe ich darin nur Vorteile.\n\n" +
            "24. Petra: Am Anfang war ich skeptisch, als meine Kollegin ihren Dackel mitgebracht hat. Ich dachte, er würde bellen und stören. Aber er schläft fast den ganzen Tag unter ihrem Schreibtisch. Heute würde ich ihn richtig vermissen.\n\n" +
            "25. Jan: In unserem Büro empfangen wir jeden Tag Kunden. Nicht jeder Kunde findet es angenehm, wenn ihm ein Hund entgegenläuft. Ein Büro ist ein Arbeitsplatz und kein Hundepark.\n\n" +
            "26. Sabine: Ich verstehe die Bedenken, aber man könnte doch einfach ausprobieren, ob es funktioniert. In unserer Firma gibt es freitags einen „Hundetag“, und bisher hat sich noch niemand beschwert. Ich wäre sogar für mehr solche Tage.",
        },
      ],
      items: [
        { n: 20, question: "Lena", options: JN, answer: 0, explanation: "Seit der Hund des Chefs ins Büro kommt, ist die Stimmung entspannter, und ein Spaziergang mit Bruno macht ihr den Kopf frei. Sie ist also dafür." },
        { n: 21, question: "Markus", options: JN, answer: 1, explanation: "Er hat eine starke Allergie gegen Tierhaare: Für ihn wäre das „eine Katastrophe“." },
        {
          n: 22,
          question: "Aylin",
          options: JN,
          answer: 1,
          explanation: "Vorsicht: Sie liebt Hunde, aber „ins Büro gehören sie trotzdem nicht“, weil ein Großraumbüro für den Hund nicht gut ist.",
        },
        { n: 23, question: "Thomas", options: JN, answer: 0, explanation: "Die Hunde wären nicht den ganzen Tag allein zu Hause. Mit klaren Regeln sieht er „nur Vorteile“." },
        {
          n: 24,
          question: "Petra",
          options: JN,
          answer: 0,
          explanation: "Am Anfang war sie skeptisch, aber heute würde sie den Dackel vermissen. Jetzt ist sie also dafür. Achten Sie darauf, wenn sich eine Meinung mit der Zeit ändert.",
        },
        { n: 25, question: "Jan", options: JN, answer: 1, explanation: "Die Kunden finden das vielleicht nicht gut: „Ein Büro ist ein Arbeitsplatz und kein Hundepark.“" },
        {
          n: 26,
          question: "Sabine",
          options: JN,
          answer: 0,
          explanation: "Sie versteht die Bedenken, möchte es aber ausprobieren und hätte sogar gern mehr Hundetage. Sie ist also dafür.",
        },
      ],
    },
    {
      title: "Teil 5",
      instructions:
        "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c. Arbeitszeit: etwa 10 Minuten.",
      instructionsEn: "You've just moved into a block of flats and read the rules for the laundry room. For questions 27-30, choose a, b or c. About 10 minutes.",
      texts: [
        {
          title: "Hausordnung – Benutzung der Waschküche (Wohnanlage Lindenhof)",
          body:
            "1. Die Waschküche im Keller steht allen Mieterinnen und Mietern montags bis samstags von 7 bis 21 Uhr zur Verfügung. An Sonn- und Feiertagen bleibt sie geschlossen.\n\n" +
            "2. Bitte tragen Sie sich vorher in den Plan an der Tür ein. Jede Wohnung darf die Waschmaschinen pro Woche höchstens zweimal für jeweils drei Stunden reservieren. Wer einen reservierten Termin nicht braucht, streicht bitte seinen Namen, damit andere Hausbewohner die Zeit nutzen können.\n\n" +
            "3. Die Waschmaschinen und Trockner werden mit einer Waschkarte bezahlt. Die Karten können beim Hausmeister, Herrn Kowalski, aufgeladen werden (dienstags und donnerstags, 16–18 Uhr).\n\n" +
            "4. Nach dem Waschen reinigen Sie bitte das Flusensieb des Trockners und wischen den Boden, falls er nass geworden ist.\n\n" +
            "5. Wäsche, die länger als 24 Stunden im Trockenraum hängt, wird vom Hausmeister abgenommen und in eine Kiste neben der Tür gelegt.\n\n" +
            "6. Teppiche und Turnschuhe dürfen nicht in den Maschinen gewaschen werden.\n\n" +
            "Bei Störungen wenden Sie sich bitte an den Hausmeister oder, außerhalb seiner Sprechzeiten, an die Notrufnummer der Hausverwaltung.",
        },
      ],
      items: [
        {
          n: 27,
          question: "Wann kann man die Waschküche benutzen?",
          options: ["Jeden Tag von 7 bis 21 Uhr.", "Von Montag bis Samstag.", "Nur dienstags und donnerstags."],
          answer: 1,
          explanation: "Montags bis samstags, 7–21 Uhr. Sonntags und an Feiertagen ist geschlossen, also nicht jeden Tag. Dienstag und Donnerstag sind nur die Zeiten, in denen der Hausmeister die Karten auflädt.",
        },
        {
          n: 28,
          question: "Was muss man tun, wenn man einen reservierten Termin nicht braucht?",
          options: ["Den Hausmeister anrufen.", "Nichts, der Termin verfällt automatisch.", "Den eigenen Namen im Plan streichen."],
          answer: 2,
          explanation: "Regel 2: „… streicht bitte seinen Namen“, damit andere den Termin nutzen können.",
        },
        {
          n: 29,
          question: "Wie bezahlt man die Waschmaschinen?",
          options: ["Mit einer Karte, die man beim Hausmeister aufladen kann.", "Mit Münzen.", "Über die Nebenkosten."],
          answer: 0,
          explanation: "Regel 3: mit einer Waschkarte, die man beim Hausmeister aufladen kann.",
        },
        {
          n: 30,
          question: "Was passiert mit Wäsche, die zu lange im Trockenraum hängt?",
          options: ["Sie wird weggeworfen.", "Der Hausmeister legt sie in eine Kiste.", "Man muss eine Strafe bezahlen."],
          answer: 1,
          explanation: "Regel 5: Nach 24 Stunden nimmt der Hausmeister die Wäsche ab und legt sie in eine Kiste neben der Tür.",
        },
      ],
    },
  ],
};
