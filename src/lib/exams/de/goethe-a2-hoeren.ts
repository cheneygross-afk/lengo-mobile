// Synced from cheneygross-afk/lengo:src/lib/exams/de/goethe-a2-hoeren.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// Goethe-Zertifikat A2 practice exam -- Hören.
// About 30 minutes, 4 parts, 20 items, as in the real exam: short radio
// texts and phone messages (heard twice), a conversation matched to the
// days of the week (heard once), short everyday dialogues (heard once)
// and a radio interview (heard twice, ja or nein). The real exam answers
// part 2 with pictures; here the options name them.
const TAETIGKEITEN = [
  "A. Schwimmen gehen",
  "B. Zum Arzt gehen",
  "C. Die Großeltern besuchen",
  "D. Ins Konzert gehen",
  "E. Fußball spielen",
  "F. Einkaufen",
  "G. Für eine Prüfung lernen",
  "H. Fahrrad reparieren",
];
const JN = ["Ja", "Nein"];

export const GOETHE_A2_HOEREN: ExamPaper = {
  id: "hoeren",
  kind: "listening",
  title: "Hören",
  minutes: 30,
  group: 1,
  tasks: [
    {
      title: "Teil 1",
      instructions: "Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Wählen Sie für die Aufgaben 1 bis 5 die richtige Lösung a, b oder c.",
      instructionsEn: "You'll hear five short texts, each twice. For questions 1-5, choose a, b or c.",
      audio: [
        {
          label: "Text 1",
          lines: [
            {
              voice: "m",
              text: "Und jetzt das Wetter für morgen, Dienstag: Am Vormittag ist es im ganzen Land noch freundlich und sonnig, bei Temperaturen bis zweiundzwanzig Grad. Am Nachmittag kommen von Westen Wolken und es beginnt zu regnen. Am Abend kann es auch Gewitter geben.",
            },
          ],
        },
        {
          label: "Text 2",
          lines: [
            {
              voice: "f",
              text: "Hallo Herr Neumann, hier ist Petra Klein vom Fitnessstudio Aktiv. Ihr Yogakurs am Donnerstag fällt diese Woche leider aus, die Trainerin ist krank. Sie können aber gern am Freitag um achtzehn Uhr in den Kurs von Frau Berg kommen. Bitte rufen Sie uns kurz zurück. Danke!",
            },
          ],
        },
        {
          label: "Text 3",
          lines: [
            {
              voice: "m",
              text: "Liebe Fahrgäste, wegen Bauarbeiten fährt die Straßenbahn Linie vier heute nur bis zum Rathaus. Vom Rathaus bis zum Zoo fahren Busse. Bitte rechnen Sie mit etwa fünfzehn Minuten Verspätung. Ab Montag fährt die Linie vier wieder normal.",
            },
          ],
        },
        {
          label: "Text 4",
          lines: [
            {
              voice: "f",
              text: "Hallo Mehmet, hier ist Sandra. Du, wegen heute Abend: Das Restaurant am Markt ist leider schon voll. Ich habe jetzt einen Tisch im Restaurant Sonne reserviert, in der Bergstraße. Die Zeit bleibt gleich, halb acht. Bis später!",
            },
          ],
        },
        {
          label: "Text 5",
          lines: [
            {
              voice: "m",
              text: "Sie hören Radio Hansa mit dem Veranstaltungstipp für das Wochenende: Am Samstag ist im Stadtpark wieder der große Flohmarkt, von acht bis sechzehn Uhr. Der Eintritt ist frei. Wer selbst etwas verkaufen möchte, muss sich bis Donnerstag im Internet anmelden.",
            },
          ],
        },
      ],
      items: [
        {
          n: 1,
          source: 0,
          question: "Wie ist das Wetter morgen Nachmittag?",
          options: ["Sonnig und warm.", "Es regnet.", "Es schneit."],
          answer: 1,
          explanation: "\"Am Nachmittag kommen von Westen Wolken und es beginnt zu regnen.\" The sunshine is only in the morning (\"am Vormittag\").",
        },
        {
          n: 2,
          source: 1,
          question: "Was soll Herr Neumann machen?",
          options: ["Am Donnerstag kommen.", "Im Fitnessstudio anrufen.", "Die Trainerin besuchen."],
          answer: 1,
          explanation: "\"Bitte rufen Sie uns kurz zurück\": \"zurückrufen\" = to call back. Thursday's class is cancelled (\"fällt aus\").",
        },
        {
          n: 3,
          source: 2,
          question: "Wie kommt man heute vom Rathaus zum Zoo?",
          options: ["Mit der Straßenbahn.", "Mit dem Bus.", "Zu Fuß."],
          answer: 1,
          explanation: "\"Vom Rathaus bis zum Zoo fahren Busse.\" The tram only goes as far as the town hall today.",
        },
        {
          n: 4,
          source: 3,
          question: "Was ist neu?",
          options: ["Das Restaurant.", "Die Uhrzeit.", "Der Tag."],
          answer: 0,
          explanation: "Sandra booked a table at a different restaurant, \"Restaurant Sonne\". \"Die Zeit bleibt gleich\": the time stays the same, half past seven.",
        },
        {
          n: 5,
          source: 4,
          question: "Was muss man machen, wenn man auf dem Flohmarkt etwas verkaufen will?",
          options: ["Eintritt bezahlen.", "Um acht Uhr da sein.", "Sich vorher online anmelden."],
          answer: 2,
          explanation: "\"Wer selbst etwas verkaufen möchte, muss sich bis Donnerstag im Internet anmelden.\" Entry is free for visitors, so a is wrong, and the market opens at eight but that isn't a rule for sellers.",
        },
      ],
    },
    {
      title: "Teil 2",
      instructions:
        "Sie hören ein Gespräch. Sie hören den Text einmal. Was macht Jonas an welchem Tag? Wählen Sie für die Aufgaben 6 bis 10 die passende Aktivität aus A bis H. Wählen Sie jeden Buchstaben nur einmal.",
      instructionsEn:
        "You'll hear a conversation once. What does Jonas do on which day? For items 6-10, choose the right activity from A-H. Use each letter only once; three are not used.",
      audio: [
        {
          label: "Gespräch",
          plays: 1,
          lines: [
            { voice: "f", text: "Hallo Jonas! Hast du nächste Woche mal Zeit? Ich möchte so gern mit dir ins Kino gehen." },
            { voice: "m", text: "Hallo Mira! Hm, nächste Woche ist schwierig. Am Montag muss ich zum Zahnarzt, um vier." },
            { voice: "f", text: "Und am Dienstag?" },
            { voice: "m", text: "Am Dienstag spiele ich immer Fußball mit meinen Kollegen. Das mache ich jede Woche." },
            { voice: "f", text: "Ach ja, stimmt. Mittwoch?" },
            { voice: "m", text: "Mittwoch fahre ich zu Oma und Opa. Oma hat Geburtstag, sie wird achtzig." },
            { voice: "f", text: "Oh, schön! Dann vielleicht Donnerstag?" },
            { voice: "m", text: "Am Donnerstag habe ich Karten für ein Konzert. Die habe ich schon vor drei Monaten gekauft. Und am Freitag muss ich lernen, ich habe am Samstag eine Prüfung." },
            { voice: "f", text: "Und am Samstag nach der Prüfung?" },
            { voice: "m", text: "Am Samstag habe ich Zeit! Lass uns am Samstagabend ins Kino gehen." },
          ],
        },
      ],
      layout: "select",
      items: [
        { n: 6, source: 0, question: "Montag", options: TAETIGKEITEN, answer: 1, explanation: "\"Am Montag muss ich zum Zahnarzt\": \"der Zahnarzt\" is a dentist, so a doctor's appointment (B)." },
        { n: 7, source: 0, question: "Dienstag", options: TAETIGKEITEN, answer: 4, explanation: "\"Am Dienstag spiele ich immer Fußball mit meinen Kollegen\" (E)." },
        { n: 8, source: 0, question: "Mittwoch", options: TAETIGKEITEN, answer: 2, explanation: "\"Mittwoch fahre ich zu Oma und Opa\": his grandparents (C). \"Oma\" and \"Opa\" are the everyday words for \"Großmutter\" and \"Großvater\"." },
        { n: 9, source: 0, question: "Donnerstag", options: TAETIGKEITEN, answer: 3, explanation: "\"Am Donnerstag habe ich Karten für ein Konzert\" (D)." },
        { n: 10, source: 0, question: "Freitag", options: TAETIGKEITEN, answer: 6, explanation: "\"Am Freitag muss ich lernen, ich habe am Samstag eine Prüfung\" (G). A, F and H aren't mentioned." },
      ],
    },
    {
      title: "Teil 3",
      instructions: "Sie hören fünf kurze Gespräche. Sie hören jeden Text einmal. Wählen Sie für die Aufgaben 11 bis 15 die richtige Lösung a, b oder c.",
      instructionsEn: "You'll hear five short conversations, each only once. For questions 11-15, choose a, b or c.",
      audio: [
        {
          label: "Gespräch 1",
          plays: 1,
          lines: [
            { voice: "f", text: "Guten Tag, ich suche einen Pullover für meinen Mann. In Größe L, bitte." },
            { voice: "m", text: "In Größe L haben wir ihn in Blau und in Grau. In Grün leider nur noch in M." },
            { voice: "f", text: "Grün gefällt mir am besten, aber M ist zu klein. Dann nehme ich den blauen." },
          ],
        },
        {
          label: "Gespräch 2",
          plays: 1,
          lines: [
            { voice: "m", text: "Entschuldigung, wie komme ich zur Post?" },
            { voice: "f", text: "Gehen Sie hier geradeaus bis zur Ampel. Dann links, und nach hundert Metern sehen Sie die Post auf der rechten Seite, neben der Apotheke." },
            { voice: "m", text: "Also an der Ampel links. Vielen Dank!" },
          ],
        },
        {
          label: "Gespräch 3",
          plays: 1,
          lines: [
            { voice: "f", text: "Wie war dein Urlaub in Italien, Felix?" },
            { voice: "m", text: "Das Essen war super und das Hotel auch. Aber das Wetter! Es hat fast jeden Tag geregnet." },
            { voice: "f", text: "Oh nein! Und was habt ihr dann gemacht?" },
            { voice: "m", text: "Wir waren viel im Museum." },
          ],
        },
        {
          label: "Gespräch 4",
          plays: 1,
          lines: [
            { voice: "m", text: "Frau Schröder, können wir das Meeting auf morgen verschieben? Ich muss heute früher gehen, mein Sohn ist krank." },
            { voice: "f", text: "Morgen Vormittag habe ich leider keine Zeit. Geht es um vierzehn Uhr?" },
            { voice: "m", text: "Ja, vierzehn Uhr passt gut. Danke!" },
          ],
        },
        {
          label: "Gespräch 5",
          plays: 1,
          lines: [
            { voice: "f", text: "Was kostet die Fahrkarte nach Dresden?" },
            { voice: "m", text: "Normal kostet sie neununddreißig Euro. Mit der BahnCard zahlen Sie die Hälfte." },
            { voice: "f", text: "Eine BahnCard habe ich leider nicht. Aber ich bin Studentin." },
            { voice: "m", text: "Da gibt es leider keinen Rabatt. Also neununddreißig Euro." },
          ],
        },
      ],
      items: [
        {
          n: 11,
          source: 0,
          question: "Welchen Pullover kauft die Frau?",
          options: ["Den grünen.", "Den grauen.", "Den blauen."],
          answer: 2,
          explanation: "She likes green best, but it's only left in M: \"Dann nehme ich den blauen.\"",
        },
        {
          n: 12,
          source: 1,
          question: "Wo ist die Post?",
          options: ["Neben der Apotheke.", "An der Ampel.", "Gegenüber der Apotheke."],
          answer: 0,
          explanation: "\"Auf der rechten Seite, neben der Apotheke.\" At the traffic lights (\"die Ampel\") you turn left.",
        },
        {
          n: 13,
          source: 2,
          question: "Was war in Felix' Urlaub nicht gut?",
          options: ["Das Essen.", "Das Wetter.", "Das Hotel."],
          answer: 1,
          explanation: "\"Aber das Wetter! Es hat fast jeden Tag geregnet.\" The food and the hotel were great.",
        },
        {
          n: 14,
          source: 3,
          question: "Wann ist das Meeting?",
          options: ["Heute.", "Morgen Vormittag.", "Morgen Nachmittag."],
          answer: 2,
          explanation: "Not tomorrow morning: \"Geht es um vierzehn Uhr?\" – \"Ja, vierzehn Uhr passt gut.\" \"14 Uhr\" is 2 pm.",
        },
        {
          n: 15,
          source: 4,
          question: "Wie viel bezahlt die Frau?",
          options: ["19,50 €.", "39 €.", "Nichts."],
          answer: 1,
          explanation: "She has no BahnCard and there's no student discount (\"kein Rabatt\"), so she pays the full 39 euros.",
        },
      ],
    },
    {
      title: "Teil 4",
      instructions:
        "Sie hören ein Interview. Sie hören den Text zweimal. Wählen Sie für die Aufgaben 16 bis 20 Ja oder Nein.",
      instructionsEn: "You'll hear an interview, twice. For statements 16-20, choose \"Ja\" (yes, it's right) or \"Nein\" (no).",
      audio: [
        {
          label: "Interview",
          lines: [
            { voice: "f", text: "Herzlich willkommen bei „Menschen in unserer Stadt“. Heute ist Tobias Wendt bei uns. Herr Wendt, Sie sind Bäcker. Wann fängt Ihr Arbeitstag an?" },
            { voice: "m", text: "Sehr früh! Ich stehe um zwei Uhr auf und um drei bin ich in der Backstube. Um sechs öffnet der Laden, dann müssen die Brötchen fertig sein." },
            { voice: "f", text: "Ist das nicht anstrengend?" },
            { voice: "m", text: "Am Anfang war es schwer, ja. Aber jetzt mache ich das schon fünfzehn Jahre. Ich gehe um acht Uhr abends ins Bett, dann geht das." },
            { voice: "f", text: "Was gefällt Ihnen an Ihrem Beruf?" },
            { voice: "m", text: "Ich arbeite gern mit den Händen. Und ich finde es schön, dass die Leute am Morgen frisches Brot von uns essen. Wir backen alles selbst, nichts kommt aus der Fabrik." },
            { voice: "f", text: "Viele Bäckereien finden keine Auszubildenden. Wie ist das bei Ihnen?" },
            { voice: "m", text: "Das ist leider auch bei uns ein Problem. Dieses Jahr haben wir niemanden gefunden. Junge Leute wollen nicht so früh aufstehen." },
            { voice: "f", text: "Und was machen Sie am Nachmittag?" },
            { voice: "m", text: "Nach der Arbeit schlafe ich eine Stunde. Danach gehe ich oft mit meiner Tochter auf den Spielplatz. Am Sonntag ist die Bäckerei zu, dann habe ich den ganzen Tag frei." },
          ],
        },
      ],
      items: [
        {
          n: 16,
          source: 0,
          question: "Herr Wendt beginnt um drei Uhr mit der Arbeit.",
          options: JN,
          answer: 0,
          explanation: "He gets up at two and \"um drei bin ich in der Backstube\": at three he's in the bakehouse.",
        },
        {
          n: 17,
          source: 0,
          question: "Herr Wendt findet das frühe Aufstehen heute noch sehr schwer.",
          options: JN,
          answer: 1,
          explanation: "\"Am Anfang war es schwer\": it was hard at the beginning; after fifteen years \"dann geht das\", it's fine.",
        },
        {
          n: 18,
          source: 0,
          question: "Die Bäckerei kauft einen Teil der Brötchen in einer Fabrik.",
          options: JN,
          answer: 1,
          explanation: "\"Wir backen alles selbst, nichts kommt aus der Fabrik.\"",
        },
        {
          n: 19,
          source: 0,
          question: "Die Bäckerei hat dieses Jahr keinen neuen Auszubildenden.",
          options: JN,
          answer: 0,
          explanation: "\"Dieses Jahr haben wir niemanden gefunden.\" An \"Auszubildender\" (\"Azubi\" for short) is an apprentice or trainee.",
        },
        {
          n: 20,
          source: 0,
          question: "Herr Wendt arbeitet auch am Sonntag.",
          options: JN,
          answer: 1,
          explanation: "\"Am Sonntag ist die Bäckerei zu, dann habe ich den ganzen Tag frei.\" \"zu\" = closed (\"geschlossen\").",
        },
      ],
    },
  ],
};
