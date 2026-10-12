// Synced from cheneygross-afk/lengo:src/lib/exams/de/goethe-a1-sprechen.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// Goethe-Zertifikat A1 (Start Deutsch 1) practice exam -- Sprechen.
// About 15 minutes, 3 parts, as in the real exam. The real test is taken
// in a small group with no preparation time; here the examiner's
// questions stand in for the other candidates, and the real
// exam's word cards and picture cards are given as text.
export const GOETHE_A1_SPRECHEN: ExamPaper = {
  id: "sprechen",
  kind: "speaking",
  title: "Sprechen",
  minutes: 15,
  group: 2,
  tasks: [
    {
      title: "Teil 1: Sich vorstellen",
      instructions:
        "Stellen Sie sich vor. Sprechen Sie über die Punkte auf der Karte. Dann buchstabieren Sie Ihren Namen und sagen eine Zahl, zum Beispiel Ihre Telefonnummer.",
      instructionsEn:
        "Introduce yourself, covering the points on the card. Then the examiner asks you to spell your name and to say a number, such as your phone number.",
      speak: {
        prompt: "Stellen Sie sich vor.",
        points: ["Name?", "Alter?", "Land?", "Wohnort?", "Sprachen?", "Beruf?", "Hobby?"],
        examinerQuestions: [
          "Wie schreibt man Ihren Familiennamen? Buchstabieren Sie bitte.",
          "Wie ist Ihre Telefonnummer?",
          "Wie ist Ihre Hausnummer?",
        ],
        prepMinutes: 0,
        speakMinutes: 1.5,
        modelAnswer:
          "Guten Tag! Mein Name ist Daniel Brooks. Ich bin einunddreißig Jahre alt. Ich komme aus England und wohne jetzt in Manchester. Ich spreche Englisch, ein bisschen Französisch und jetzt auch ein bisschen Deutsch. Ich bin Musiklehrer. Mein Hobby ist Radfahren.\n\n– Wie schreibt man Ihren Familiennamen?\n– B-R-O-O-K-S.\n– Wie ist Ihre Telefonnummer?\n– Null sieben neun eins, zwei drei vier, fünf sechs sieben acht.",
      },
    },
    {
      title: "Teil 2: Um Informationen bitten und Informationen geben",
      instructions:
        "Das Thema ist „Freizeit“. Sie ziehen Karten mit einem Wort. Stellen Sie mit jedem Wort eine Frage. Ihr Partner antwortet. Dann beantworten Sie die Fragen Ihres Partners.",
      instructionsEn:
        "The topic is free time. You draw cards with one word each. Ask a question with each word; your partner answers. Then answer your partner's questions.",
      speak: {
        prompt: "Thema: Freizeit. Stellen Sie mit jedem Wort eine Frage.",
        material: [
          {
            label: "Karten",
            body: "Wochenende\nKino\nSport\nUrlaub\nMusik\nAbend",
          },
        ],
        points: [
          "Stellen Sie zu jeder Karte eine Frage.",
          "W-Fragen (Was, Wann, Wohin …): das Verb steht an Position 2.",
          "Ja/Nein-Fragen: das Verb steht am Anfang.",
          "Beantworten Sie auch die Fragen Ihres Partners.",
        ],
        examinerQuestions: [
          "Was machen Sie gern am Abend?",
          "Wie oft machen Sie Sport?",
          "Was für Musik hören Sie gern?",
        ],
        prepMinutes: 0,
        speakMinutes: 3,
        modelAnswer:
          "Wochenende: Was machen Sie am Wochenende?\nKino: Gehen Sie gern ins Kino?\nSport: Welchen Sport machen Sie?\nUrlaub: Wohin fahren Sie im Urlaub?\nMusik: Spielen Sie ein Instrument?\nAbend: Wann essen Sie am Abend?\n\n– Was machen Sie gern am Abend?\n– Ich lese gern oder ich sehe fern.\n– Wie oft machen Sie Sport?\n– Zweimal pro Woche. Ich schwimme am Montag und am Freitag.\n– Was für Musik hören Sie gern?\n– Ich höre gern Jazz.",
      },
    },
    {
      title: "Teil 3: Bitten formulieren und darauf reagieren",
      instructions:
        "Sie ziehen Karten mit einem Bild. Formulieren Sie zu jedem Bild eine Bitte. Ihr Partner reagiert. Dann reagieren Sie auf die Bitten Ihres Partners.",
      instructionsEn:
        "You draw cards with a picture on each. Make a request for each picture; your partner reacts. Then react to your partner's requests.",
      speak: {
        prompt: "Formulieren Sie zu jedem Bild eine Bitte.",
        material: [
          {
            label: "Bildkarten",
            body: "Bild 1: ein offenes Fenster\nBild 2: ein Kugelschreiber\nBild 3: eine Uhr\nBild 4: ein Glas Wasser\nBild 5: ein Telefon\nBild 6: ein Stadtplan",
          },
        ],
        points: [
          "Formulieren Sie höflich: Können Sie bitte …? Kann ich bitte …? Ich hätte gern …",
          "Reagieren Sie auf die Bitten: Ja, gern. / Natürlich. / Hier, bitte. / Tut mir leid, …",
        ],
        examinerQuestions: [
          "Können Sie mir bitte Ihr Wörterbuch geben?",
          "Können Sie bitte langsam sprechen?",
          "Kann ich bitte Ihr Handy benutzen?",
        ],
        prepMinutes: 0,
        speakMinutes: 3,
        modelAnswer:
          "Bild 1: Können Sie bitte das Fenster schließen? Mir ist kalt.\nBild 2: Kann ich bitte Ihren Kugelschreiber haben?\nBild 3: Entschuldigung, wie spät ist es, bitte?\nBild 4: Ich hätte gern ein Glas Wasser, bitte.\nBild 5: Kann ich bitte kurz telefonieren?\nBild 6: Haben Sie bitte einen Stadtplan für mich?\n\n– Können Sie mir bitte Ihr Wörterbuch geben?\n– Ja, gern. Hier, bitte.\n– Können Sie bitte langsam sprechen?\n– Natürlich.\n– Kann ich bitte Ihr Handy benutzen?\n– Tut mir leid, mein Akku ist leer.",
      },
    },
  ],
};
