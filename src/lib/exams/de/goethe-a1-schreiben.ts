// Synced from cheneygross-afk/lengo:src/lib/exams/de/goethe-a1-schreiben.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// Goethe-Zertifikat A1 (Start Deutsch 1) practice exam -- Schreiben.
// 20 minutes, 2 parts, as in the real exam: filling in a form for
// someone else from a short text, then a short message of about 30
// words covering three points.
export const GOETHE_A1_SCHREIBEN: ExamPaper = {
  id: "schreiben",
  kind: "writing",
  title: "Schreiben",
  minutes: 20,
  group: 2,
  tasks: [
    {
      title: "Teil 1",
      instructions:
        "Ihr Freund Ahmet Yilmaz möchte einen Sportkurs im Sportverein machen. Er spricht noch nicht gut Deutsch. Helfen Sie ihm und schreiben Sie die fünf fehlenden Informationen in das Formular.",
      instructionsEn:
        "Your friend Ahmet Yilmaz wants to join a course at a sports club but doesn't speak much German yet. Read about him and fill in the five missing details on the form.",
      write: [
        {
          prompt:
            "Lesen Sie den Text über Ahmet. Ergänzen Sie dann im Formular: Geburtsdatum, Wohnort (Postleitzahl und Stadt), Familienstand, Kurs und Tag.",
          input: {
            text: {
              title: "Über Ahmet",
              body:
                "Ahmet Yilmaz ist am 14. Mai 1996 geboren. Er wohnt in der Gartenstraße 12 in 50667 Köln. Er ist verheiratet und hat eine Tochter. Er möchte Volleyball spielen, aber er arbeitet am Montag und am Mittwoch bis 20 Uhr. Am Donnerstag hat er Zeit.\n\n" +
                "Sportverein Köln-Mitte: Anmeldung\nName: Yilmaz\nVorname: Ahmet\nGeburtsdatum: …\nStraße, Hausnummer: Gartenstraße 12\nPostleitzahl, Wohnort: …\nFamilienstand: ledig / verheiratet / geschieden …\nKurs (Fußball, Volleyball, Schwimmen): …\nTag (Montag, Mittwoch, Donnerstag): …",
            },
          },
          minWords: 5,
          maxWords: 20,
          rubric: [
            "Fills in all five missing details from the text, and nothing invented",
            "Writes the date of birth correctly (14.05.1996 or 14. Mai 1996)",
            "Puts the postcode before the town, as on German forms (50667 Köln)",
            "Picks the right Familienstand (verheiratet) and the course and day that fit Ahmet's week",
          ],
          modelAnswer:
            "Geburtsdatum: 14.05.1996\nPostleitzahl, Wohnort: 50667 Köln\nFamilienstand: verheiratet\nKurs: Volleyball\nTag: Donnerstag",
        },
      ],
    },
    {
      title: "Teil 2",
      instructions:
        "Sie möchten einen Deutschkurs machen. Schreiben Sie eine E-Mail an die Sprachschule Hansa. Schreiben Sie zu jedem Punkt ein bis zwei Sätze (circa 30 Wörter). Vergessen Sie nicht die Anrede und den Gruß.",
      instructionsEn:
        "You want to take a German course. Write an email to the Hansa language school. Write one or two sentences on each point (about 30 words), and don't forget the greeting and the sign-off.",
      write: [
        {
          prompt:
            "Schreiben Sie an die Sprachschule Hansa: Warum möchten Sie Deutsch lernen? Wann haben Sie Zeit für den Kurs? Fragen Sie: Was kostet der Kurs?",
          minWords: 25,
          maxWords: 45,
          rubric: [
            "Covers all three points: why you're learning German, when you have time, the question about the price",
            "Uses a formal greeting and sign-off (Sehr geehrte Damen und Herren, … Mit freundlichen Grüßen)",
            "Uses Sie forms throughout, not du",
            "Puts the verb in second place in statements and first in yes/no questions (Am Abend habe ich Zeit. Haben Sie …?)",
            "Asks the price correctly (Was kostet der Kurs? / Wie viel kostet der Kurs?)",
          ],
          modelAnswer:
            "Sehr geehrte Damen und Herren,\n\nich wohne seit März in Hamburg und arbeite hier in einem Hotel. Darum möchte ich Deutsch lernen. Ich habe am Dienstag und am Donnerstag ab 18 Uhr Zeit. Was kostet der Kurs?\n\nMit freundlichen Grüßen\nLaura Smith",
        },
      ],
    },
  ],
};
