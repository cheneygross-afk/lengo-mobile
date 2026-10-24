// Synced from cheneygross-afk/lengo:src/lib/exams/de/goethe-a1-hoeren.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// Goethe-Zertifikat A1 (Start Deutsch 1) practice exam -- Hören.
// About 20 minutes, 3 parts, 15 items, as in the real exam: short
// everyday dialogues (heard twice), announcements (heard once, true or
// false) and phone messages (heard twice). The real exam answers part 1
// with pictures; here the options describe them in words.
const RF = ["Richtig", "Falsch"];

export const GOETHE_A1_HOEREN: ExamPaper = {
  id: "hoeren",
  kind: "listening",
  title: "Hören",
  minutes: 20,
  group: 1,
  tasks: [
    {
      title: "Teil 1",
      instructions:
        "Sie hören sechs kurze Gespräche. Sie hören jeden Text zweimal. Lesen Sie zuerst die Aufgabe. Kreuzen Sie dann an: a, b oder c.",
      instructionsEn:
        "You'll hear six short conversations, each twice. Read the question first, then choose a, b or c.",
      audio: [
        {
          label: "Gespräch 1",
          lines: [
            { voice: "f", text: "Entschuldigung, wie viel kosten die Äpfel?" },
            { voice: "m", text: "Ein Kilo kostet zwei Euro fünfzig." },
            { voice: "f", text: "Dann nehme ich zwei Kilo, bitte." },
            { voice: "m", text: "Gern. Das macht dann fünf Euro." },
          ],
        },
        {
          label: "Gespräch 2",
          lines: [
            { voice: "m", text: "Hallo Sabine, wann fängt der Film heute Abend an?" },
            { voice: "f", text: "Um Viertel nach acht. Wir treffen uns um acht vor dem Kino, okay?" },
            { voice: "m", text: "Okay, bis dann!" },
          ],
        },
        {
          label: "Gespräch 3",
          lines: [
            { voice: "f", text: "Entschuldigung, wo ist hier die Toilette?" },
            { voice: "m", text: "Gehen Sie die Treppe hoch, im ersten Stock gleich rechts." },
            { voice: "f", text: "Vielen Dank!" },
          ],
        },
        {
          label: "Gespräch 4",
          lines: [
            { voice: "m", text: "Guten Tag, ich möchte eine Fahrkarte nach Hamburg." },
            { voice: "f", text: "Für heute?" },
            { voice: "m", text: "Nein, für morgen früh. Und bitte mit Rückfahrt am Sonntag." },
            { voice: "f", text: "Gern. Das macht neunundachtzig Euro." },
          ],
        },
        {
          label: "Gespräch 5",
          lines: [
            { voice: "f", text: "Was trinkst du, Paul? Kaffee?" },
            { voice: "m", text: "Nein danke, Kaffee trinke ich am Abend nicht. Hast du einen Tee?" },
            { voice: "f", text: "Ja, natürlich. Und ein Glas Wasser dazu?" },
            { voice: "m", text: "Nein, danke. Nur den Tee, bitte." },
          ],
        },
        {
          label: "Gespräch 6",
          lines: [
            { voice: "m", text: "Frau Berger, Ihr Termin beim Zahnarzt ist am Donnerstag." },
            { voice: "f", text: "Am Donnerstag? Nicht am Mittwoch?" },
            { voice: "m", text: "Nein, der Doktor ist am Mittwoch nicht da. Donnerstag um zehn Uhr, geht das?" },
            { voice: "f", text: "Ja, das geht." },
          ],
        },
      ],
      items: [
        {
          n: 1,
          question: "Wie viel bezahlt die Frau?",
          options: ["2,50 €", "5,00 €", "4,50 €"],
          answer: 1,
          source: 0,
          explanation: "One kilo costs €2.50 and she takes two kilos: \"Das macht dann fünf Euro.\"",
        },
        {
          n: 2,
          question: "Wann beginnt der Film?",
          options: ["Um 20:00 Uhr.", "Um 20:15 Uhr.", "Um 19:45 Uhr."],
          answer: 1,
          source: 1,
          explanation:
            "\"Um Viertel nach acht\" is 8:15 pm, 20:15. They meet at eight, which is the trap. \"Viertel nach\" = quarter past, \"Viertel vor\" = quarter to.",
        },
        {
          n: 3,
          question: "Wo ist die Toilette?",
          options: ["Im Erdgeschoss links.", "Im ersten Stock rechts.", "Im zweiten Stock rechts."],
          answer: 1,
          source: 2,
          explanation:
            "\"Im ersten Stock gleich rechts.\" Careful: German counts floors like British English, so \"der erste Stock\" is the floor above the ground floor (\"das Erdgeschoss\").",
        },
        {
          n: 4,
          question: "Wann fährt der Mann nach Hamburg?",
          options: ["Heute.", "Morgen früh.", "Am Sonntag."],
          answer: 1,
          source: 3,
          explanation: "\"Nein, für morgen früh.\" Sunday is the day he comes back (\"die Rückfahrt\").",
        },
        {
          n: 5,
          question: "Was trinkt Paul?",
          options: ["Kaffee.", "Wasser.", "Tee."],
          answer: 2,
          source: 4,
          explanation: "He doesn't drink coffee in the evening and asks \"Hast du einen Tee?\", then refuses the water: \"Nur den Tee, bitte.\"",
        },
        {
          n: 6,
          question: "Wann ist der Termin beim Zahnarzt?",
          options: ["Am Mittwoch um 10 Uhr.", "Am Donnerstag um 10 Uhr.", "Am Donnerstag um 12 Uhr."],
          answer: 1,
          source: 5,
          explanation: "\"Donnerstag um zehn Uhr, geht das?\" – \"Ja, das geht.\" The dentist isn't there on Wednesday.",
        },
      ],
    },
    {
      title: "Teil 2",
      instructions:
        "Sie hören vier Ansagen. Sie hören jeden Text einmal. Kreuzen Sie an: Richtig oder Falsch?",
      instructionsEn:
        "You'll hear four announcements, each only once. Mark each statement \"Richtig\" (true) or \"Falsch\" (false).",
      audio: [
        {
          label: "Ansage 1",
          plays: 1,
          lines: [
            {
              voice: "f",
              text: "Liebe Kundinnen und Kunden, heute haben wir ein Sonderangebot: Alle Schuhe im zweiten Stock kosten nur die Hälfte. Das Angebot gilt nur heute bis achtzehn Uhr.",
            },
          ],
        },
        {
          label: "Ansage 2",
          plays: 1,
          lines: [
            {
              voice: "m",
              text: "Achtung am Gleis vier: Der Regionalexpress nach Leipzig, Abfahrt zehn Uhr zwölf, fährt heute von Gleis sieben. Ich wiederhole: Der Zug nach Leipzig fährt heute von Gleis sieben.",
            },
          ],
        },
        {
          label: "Ansage 3",
          plays: 1,
          lines: [
            {
              voice: "f",
              text: "Liebe Fluggäste, der Flug LH zweihundertdreißig nach Wien hat dreißig Minuten Verspätung. Neue Abflugzeit: vierzehn Uhr fünfzig. Bitte warten Sie an Ausgang B neun.",
            },
          ],
        },
        {
          label: "Ansage 4",
          plays: 1,
          lines: [
            {
              voice: "m",
              text: "Liebe Besucher, das Schwimmbad schließt heute schon um neunzehn Uhr, nicht um einundzwanzig Uhr. Morgen sind wir wieder von sieben bis einundzwanzig Uhr für Sie da.",
            },
          ],
        },
      ],
      items: [
        {
          n: 7,
          question: "Heute sind alle Schuhe billiger.",
          options: RF,
          answer: 0,
          source: 0,
          explanation: "\"Alle Schuhe … kosten nur die Hälfte\" – half price, so cheaper (\"billiger\") today.",
        },
        {
          n: 8,
          question: "Der Zug nach Leipzig fährt heute von Gleis 4.",
          options: RF,
          answer: 1,
          source: 1,
          explanation: "The announcement is made at platform 4, but the train leaves \"heute von Gleis sieben\".",
        },
        {
          n: 9,
          question: "Der Flug nach Wien ist pünktlich.",
          options: RF,
          answer: 1,
          source: 2,
          explanation: "\"… hat dreißig Minuten Verspätung\": it's 30 minutes late. \"pünktlich\" = on time.",
        },
        {
          n: 10,
          question: "Das Schwimmbad ist heute nur bis 19 Uhr offen.",
          options: RF,
          answer: 0,
          source: 3,
          explanation: "\"Das Schwimmbad schließt heute schon um neunzehn Uhr.\" Here \"schon\" means 'as early as': the pool closes earlier than it usually does.",
        },
      ],
    },
    {
      title: "Teil 3",
      instructions:
        "Sie hören fünf Nachrichten auf dem Anrufbeantworter. Sie hören jeden Text zweimal. Kreuzen Sie an: a, b oder c.",
      instructionsEn:
        "You'll hear five answerphone messages, each twice. Choose a, b or c.",
      audio: [
        {
          label: "Nachricht 1",
          lines: [
            {
              voice: "f",
              text: "Hallo Tom, hier ist Lisa. Ich kann heute leider nicht zum Deutschkurs kommen. Ich bin krank. Kannst du mir bitte die Hausaufgaben schicken? Danke und tschüss!",
            },
          ],
        },
        {
          label: "Nachricht 2",
          lines: [
            {
              voice: "m",
              text: "Guten Tag, Herr Schulz. Hier ist die Autowerkstatt Meier. Ihr Auto ist fertig. Sie können es morgen ab neun Uhr abholen. Es kostet dreihundertzwanzig Euro. Auf Wiederhören.",
            },
          ],
        },
        {
          label: "Nachricht 3",
          lines: [
            {
              voice: "f",
              text: "Hallo Mama, ich bin's, Anna. Ich komme heute später nach Hause, so um sieben. Ich gehe nach der Schule noch mit Mia in die Bibliothek. Bis heute Abend!",
            },
          ],
        },
        {
          label: "Nachricht 4",
          lines: [
            {
              voice: "m",
              text: "Hallo, hier ist Jonas. Am Samstag mache ich eine Party. Ich habe Geburtstag! Kannst du einen Salat mitbringen? Getränke und Kuchen habe ich schon. Die Party beginnt um acht.",
            },
          ],
        },
        {
          label: "Nachricht 5",
          lines: [
            {
              voice: "f",
              text: "Guten Tag, hier ist die Praxis Dr. Wolf. Sie haben morgen um elf Uhr einen Termin. Bitte bringen Sie Ihre Versichertenkarte mit. Vielen Dank.",
            },
          ],
        },
      ],
      items: [
        {
          n: 11,
          question: "Was soll Tom machen?",
          options: ["Lisa die Hausaufgaben schicken.", "Lisa zum Kurs bringen.", "Den Lehrer anrufen."],
          answer: 0,
          source: 0,
          explanation: "\"Kannst du mir bitte die Hausaufgaben schicken?\" Lisa is ill and can't come to class.",
        },
        {
          n: 12,
          question: "Wann kann Herr Schulz das Auto abholen?",
          options: ["Heute um 9 Uhr.", "Morgen ab 9 Uhr.", "Morgen ab 3 Uhr."],
          answer: 1,
          source: 1,
          explanation: "\"Sie können es morgen ab neun Uhr abholen.\" \"ab\" = from (a time) onwards.",
        },
        {
          n: 13,
          question: "Wohin geht Anna nach der Schule?",
          options: ["Nach Hause.", "Zu Mia nach Hause.", "In die Bibliothek."],
          answer: 2,
          source: 2,
          explanation: "\"Ich gehe nach der Schule noch mit Mia in die Bibliothek.\" She goes home later, at about seven.",
        },
        {
          n: 14,
          question: "Was soll man zur Party mitbringen?",
          options: ["Getränke.", "Einen Salat.", "Einen Kuchen."],
          answer: 1,
          source: 3,
          explanation: "\"Kannst du einen Salat mitbringen? Getränke und Kuchen habe ich schon.\"",
        },
        {
          n: 15,
          question: "Was muss man zum Arzt mitbringen?",
          options: ["Die Versichertenkarte.", "Das Rezept.", "Den Ausweis."],
          answer: 0,
          source: 4,
          explanation: "\"Bitte bringen Sie Ihre Versichertenkarte mit\": the health insurance card every patient in Germany shows at the doctor's.",
        },
      ],
    },
  ],
};
