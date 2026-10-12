// Synced from cheneygross-afk/lengo:src/lib/exams/de/goethe-a2-lesen.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// Goethe-Zertifikat A2 practice exam -- Lesen.
// 30 minutes, 4 parts, 20 items, as in the real exam: a short newspaper
// article, a store directory, an email (all a, b or c) and matching
// people to ads, with one ad left over.
const ANZEIGEN = [
  "A. Kochkurs für Männer",
  "B. Gebrauchte Kinderfahrräder",
  "C. Wandergruppe 60 plus",
  "D. Nachhilfe in Mathematik",
  "E. Zimmer in einer WG",
  "F. Hundepension Waldblick",
];

export const GOETHE_A2_LESEN: ExamPaper = {
  id: "lesen",
  kind: "reading",
  title: "Lesen",
  minutes: 30,
  group: 1,
  tasks: [
    {
      title: "Teil 1",
      instructions: "Sie lesen in einer Zeitung diesen Text. Wählen Sie für die Aufgaben 1 bis 5 die richtige Lösung a, b oder c.",
      instructionsEn: "You read this text in a newspaper. For questions 1-5, choose the right answer: a, b or c.",
      texts: [
        {
          title: "Ein Café, in dem man reparieren kann",
          body:
            "Jeden ersten Samstag im Monat ist das Gemeindehaus in Kassel-Nord voll. Dann gibt es dort ein Reparatur-Café. Die Leute bringen kaputte Toaster, Lampen, Fahrräder oder Hosen mit. Zehn Helferinnen und Helfer reparieren die Sachen zusammen mit den Besitzern. Sie bekommen dafür kein Geld.\n\n" +
            "„Wir wollen nicht alles wegwerfen“, sagt Rolf Becker. Der 67-Jährige war früher Elektriker und hat das Café vor drei Jahren zusammen mit seiner Nachbarin gegründet. „Viele Geräte sind gar nicht richtig kaputt. Oft ist nur ein kleines Teil defekt.“\n\n" +
            "Die Reparatur ist kostenlos. Wer möchte, kann aber etwas Geld in eine Kasse legen. Davon kauft das Team Werkzeug und Ersatzteile. Und natürlich gibt es auch Kaffee und Kuchen: Den Kuchen backen die Besucher selbst.\n\n" +
            "Nicht alles klappt: Ungefähr ein Drittel der Geräte kann das Team nicht reparieren. „Aber auch dann lernen die Leute etwas“, sagt Becker. Das nächste Reparatur-Café ist am 6. April von 14 bis 18 Uhr.",
        },
      ],
      items: [
        {
          n: 1,
          question: "Das Reparatur-Café gibt es …",
          options: ["jeden Samstag.", "einmal im Monat.", "nur im April."],
          answer: 1,
          explanation: "„Jeden ersten Samstag im Monat“: the first Saturday of every month, so once a month.",
        },
        {
          n: 2,
          question: "Die Helfer …",
          options: ["arbeiten ohne Bezahlung.", "sind alle Elektriker.", "reparieren die Sachen allein."],
          answer: 0,
          explanation: "„Sie bekommen dafür kein Geld“: they're volunteers. They repair things together with the owners (zusammen mit den Besitzern), not alone.",
        },
        {
          n: 3,
          question: "Rolf Becker …",
          options: ["arbeitet jetzt als Elektriker.", "hat das Café allein gegründet.", "meint, dass viele Geräte nur einen kleinen Fehler haben."],
          answer: 2,
          explanation: "„Oft ist nur ein kleines Teil defekt.“ He WAS an electrician (war früher) and founded the café with his neighbour.",
        },
        {
          n: 4,
          question: "Mit dem Geld aus der Kasse …",
          options: ["bezahlt das Team den Kuchen.", "kauft das Team Werkzeug.", "bezahlt man die Reparatur."],
          answer: 1,
          explanation: "„Davon kauft das Team Werkzeug und Ersatzteile.“ The repair itself is free, and visitors bake the cakes themselves.",
        },
        {
          n: 5,
          question: "Was sagt der Text?",
          options: ["Das Team kann fast alles reparieren.", "Manche Sachen kann man nicht mehr reparieren.", "Man muss sich für den 6. April anmelden."],
          answer: 1,
          explanation: "„Ungefähr ein Drittel der Geräte kann das Team nicht reparieren“: about a third can't be fixed. Nothing is said about registering.",
        },
      ],
    },
    {
      title: "Teil 2",
      instructions: "Sie sind in einem Kaufhaus. Lesen Sie die Aufgaben 6 bis 10 und die Informationstafel. In welchen Stock gehen Sie? Wählen Sie die richtige Lösung a, b oder c.",
      instructionsEn: "You're in a department store. Read questions 6-10 and the store directory. Which floor do you go to? Choose a, b or c.",
      texts: [
        {
          title: "Kaufhaus Lindner: Informationstafel",
          body:
            "4. Stock: Restaurant mit Dachterrasse · Kundenservice · Toiletten · Reisebüro\n\n" +
            "3. Stock: Spielwaren · Kinderkleidung · Babyartikel · Schreibwaren und Bücher\n\n" +
            "2. Stock: Elektro: Fernseher, Computer, Handys · Küchengeräte · Lampen\n\n" +
            "1. Stock: Damenmode · Herrenmode · Sportkleidung · Schuhe\n\n" +
            "Erdgeschoss: Parfümerie · Uhren und Schmuck · Taschen · Zeitschriften · Geldautomat\n\n" +
            "Untergeschoss: Lebensmittel · Getränke · Bäckerei · Fotoservice",
        },
      ],
      items: [
        {
          n: 6,
          question: "Ihre Tochter hat bald Geburtstag. Sie möchten ihr ein Spiel schenken.",
          options: ["Erdgeschoss", "3. Stock", "4. Stock"],
          answer: 1,
          explanation: "Spielwaren (toys and games) are on the 3rd floor.",
        },
        {
          n: 7,
          question: "Sie haben Ihre Jacke im Kaufhaus vergessen und möchten fragen, ob jemand sie gefunden hat.",
          options: ["Erdgeschoss", "1. Stock", "4. Stock"],
          answer: 2,
          explanation: "Der Kundenservice (customer service), where you ask about lost things, is on the 4th floor.",
        },
        {
          n: 8,
          question: "Sie möchten eine neue Kaffeemaschine kaufen.",
          options: ["Untergeschoss", "2. Stock", "3. Stock"],
          answer: 1,
          explanation: "A coffee machine is a Küchengerät (kitchen appliance): 2nd floor. Coffee itself would be in the Untergeschoss with the food.",
        },
        {
          n: 9,
          question: "Sie brauchen Laufschuhe für den Sport.",
          options: ["Erdgeschoss", "1. Stock", "3. Stock"],
          answer: 1,
          explanation: "Schuhe and Sportkleidung are both on the 1st floor.",
        },
        {
          n: 10,
          question: "Sie möchten Brot und Wasser für ein Picknick kaufen.",
          options: ["Untergeschoss", "Erdgeschoss", "4. Stock"],
          answer: 0,
          explanation: "Lebensmittel, Getränke and the Bäckerei are in the Untergeschoss (basement). Remember: das Erdgeschoss is the ground floor, and der 1. Stock is one floor up.",
        },
      ],
    },
    {
      title: "Teil 3",
      instructions: "Sie lesen eine E-Mail. Wählen Sie für die Aufgaben 11 bis 15 die richtige Lösung a, b oder c.",
      instructionsEn: "You read an email. For questions 11-15, choose the right answer: a, b or c.",
      texts: [
        {
          title: "Von: Jana · An: Lukas · Betreff: Umzug",
          body:
            "Hallo Lukas,\n\nwie du weißt, ziehe ich nächsten Monat um. Die neue Wohnung ist größer und hat endlich eine richtige Küche. Sie liegt aber im vierten Stock und das Haus hat keinen Aufzug!\n\n" +
            "Der Umzug ist am Samstag, den 15. Juni. Kannst du mir helfen? Mein Bruder bringt einen Transporter mit, aber wir brauchen noch Leute für die Möbel. Wir fangen um neun Uhr an. Für Brötchen und Kaffee sorge ich, und am Abend bestellen wir Pizza für alle.\n\n" +
            "Am Freitag davor muss ich noch die alte Wohnung putzen. Wenn du Zeit hast, kannst du auch da gern vorbeikommen, aber das ist nicht so wichtig.\n\n" +
            "Die neue Adresse ist Lindenweg 3. Mit der Straßenbahn sind das nur zwei Haltestellen von dir aus.\n\n" +
            "Sag mir bitte bis Mittwoch Bescheid.\n\nLiebe Grüße\nJana",
        },
      ],
      items: [
        {
          n: 11,
          question: "Was gefällt Jana an der neuen Wohnung?",
          options: ["Sie hat einen Aufzug.", "Sie hat eine gute Küche.", "Sie liegt im Erdgeschoss."],
          answer: 1,
          explanation: "„Hat endlich eine richtige Küche“: at last a proper kitchen. The flat is on the 4th floor and there's no lift.",
        },
        {
          n: 12,
          question: "Was soll Lukas am Samstag machen?",
          options: ["Die Möbel tragen.", "Den Transporter fahren.", "Pizza mitbringen."],
          answer: 0,
          explanation: "„Wir brauchen noch Leute für die Möbel“: people to carry the furniture. Her brother brings the van, and she orders the pizza.",
        },
        {
          n: 13,
          question: "Wer kümmert sich um das Frühstück?",
          options: ["Janas Bruder.", "Lukas.", "Jana."],
          answer: 2,
          explanation: "„Für Brötchen und Kaffee sorge ich“: für etwas sorgen = to take care of something, to provide it.",
        },
        {
          n: 14,
          question: "Am Freitag …",
          options: ["muss Lukas unbedingt kommen.", "putzt Jana ihre alte Wohnung.", "fängt der Umzug an."],
          answer: 1,
          explanation: "„Am Freitag davor muss ich noch die alte Wohnung putzen“, and Lukas's help then is „nicht so wichtig“.",
        },
        {
          n: 15,
          question: "Lukas soll …",
          options: ["bis Mittwoch antworten.", "die neue Adresse suchen.", "eine Straßenbahnkarte kaufen."],
          answer: 0,
          explanation: "„Sag mir bitte bis Mittwoch Bescheid“: jemandem Bescheid sagen = to let someone know.",
        },
      ],
    },
    {
      title: "Teil 4",
      instructions:
        "Fünf Personen suchen im Internet nach Angeboten. Lesen Sie die Aufgaben 16 bis 20 und die Anzeigen A bis F. Welche Anzeige passt zu welcher Person? Eine Anzeige brauchen Sie nicht.",
      instructionsEn:
        "Five people are looking for offers online. Read items 16-20 and ads A-F. Which ad fits which person? One ad is not used.",
      texts: [
        {
          label: "Personen",
          body:
            "16. Frau Krüger ist Rentnerin und möchte am Wochenende mit anderen Leuten in der Natur sein.\n\n" +
            "17. Thomas fängt im Oktober sein Studium in Leipzig an und sucht eine günstige Wohnung.\n\n" +
            "18. Familie Schulte fährt zwei Wochen in Urlaub und kann ihren Hund nicht mitnehmen.\n\n" +
            "19. Herr Wagner möchte für seine Familie kochen, aber er kann es noch nicht.\n\n" +
            "20. Lena ist zwölf und hat schlechte Noten in Mathe. Ihre Eltern suchen Hilfe.",
        },
        { label: "A", title: "Kochkurs für Männer", body: "Spaghetti, Suppe, Salat: Lernen Sie einfache Rezepte für jeden Tag! Für Anfänger. Fünf Abende, immer dienstags." },
        { label: "B", title: "Gebrauchte Kinderfahrräder", body: "Wir verkaufen drei Kinderfahrräder, sechs bis zehn Jahre alt, in gutem Zustand. Nur Abholung in Leipzig-Süd." },
        { label: "C", title: "Wandergruppe 60 plus", body: "Jeden Sonntag wandern wir zehn bis zwölf Kilometer rund um Leipzig. Danach essen wir zusammen. Neue Mitglieder sind herzlich willkommen!" },
        { label: "D", title: "Nachhilfe in Mathematik", body: "Lehramtsstudentin gibt Nachhilfe für Schüler der Klassen 5 bis 10. Bei Ihnen zu Hause, 15 Euro pro Stunde." },
        { label: "E", title: "Zimmer in einer WG", body: "Ab 1. Oktober frei: 14 m² in einer netten Dreier-WG, fünf Minuten zur Uni. 290 Euro warm." },
        { label: "F", title: "Hundepension Waldblick", body: "Sie fahren in Urlaub? Wir passen auf Ihren Hund auf – ein Wochenende oder mehrere Wochen. Großer Garten, lange Spaziergänge." },
      ],
      layout: "select",
      items: [
        { n: 16, question: "Frau Krüger", options: ANZEIGEN, answer: 2, explanation: "A walking group for over-60s every Sunday (C): retired, at the weekend, in nature, with others." },
        { n: 17, question: "Thomas", options: ANZEIGEN, answer: 4, explanation: "A cheap room in a flatshare (WG = Wohngemeinschaft) near the university, free from 1 October (E)." },
        { n: 18, question: "Familie Schulte", options: ANZEIGEN, answer: 5, explanation: "A boarding kennel (die Hundepension) that looks after dogs while their owners are on holiday (F). auf etwas aufpassen = to look after something." },
        { n: 19, question: "Herr Wagner", options: ANZEIGEN, answer: 0, explanation: "A cooking course for beginners (A): he wants to cook but can't yet." },
        { n: 20, question: "Lena", options: ANZEIGEN, answer: 3, explanation: "Maths tutoring (Nachhilfe) for pupils in years 5-10 (D). B, the children's bikes, isn't used." },
      ],
    },
  ],
};
