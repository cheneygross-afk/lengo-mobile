// Synced from cheneygross-afk/lengo:src/lib/exams/de/goethe-a2-sprechen.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// Goethe-Zertifikat A2 practice exam -- Sprechen.
// About 15 minutes for a pair of candidates, 3 parts, as in the real
// exam: asking and answering questions from word cards, talking about
// your own life from a card, and planning something together with a
// partner whose diary differs from yours. Here the examiner's questions
// stand in for the partner.
export const GOETHE_A2_SPRECHEN: ExamPaper = {
  id: "sprechen",
  kind: "speaking",
  title: "Sprechen",
  minutes: 15,
  group: 2,
  tasks: [
    {
      title: "Teil 1: Fragen zur Person",
      instructions:
        "Sie bekommen vier Karten. Stellen Sie Ihrem Partner mit jeder Karte eine Frage und beantworten Sie dann seine Fragen.",
      instructionsEn:
        "You get four cards. Ask your partner one question with each card, then answer their questions.",
      speak: {
        prompt: "Fragen Sie Ihren Partner. Antworten Sie auf seine Fragen.",
        material: [
          {
            label: "Karten",
            body: "Geburtstag?\nWohnung?\nLieblingsessen?\nReisen?",
          },
        ],
        points: [
          "Stellen Sie zu jeder Karte eine Frage, mit Sie.",
          "Benutzen Sie verschiedene Fragewörter: Wann …? Wie …? Was …? Wohin …?",
          "Beantworten Sie die Fragen Ihres Partners mit ganzen Sätzen.",
        ],
        examinerQuestions: [
          "Wo wohnen Sie?",
          "Was machen Sie in Ihrer Freizeit?",
          "Welche Sprachen sprechen Sie?",
          "Was haben Sie letztes Wochenende gemacht?",
        ],
        prepMinutes: 0,
        speakMinutes: 3,
        modelAnswer:
          "Geburtstag: Wann haben Sie Geburtstag?\nWohnung: Wie groß ist Ihre Wohnung?\nLieblingsessen: Was ist Ihr Lieblingsessen?\nReisen: Wohin reisen Sie gern?\n\n– Wo wohnen Sie?\n– Ich wohne in Manchester, in einer kleinen Wohnung im Zentrum.\n– Was machen Sie in Ihrer Freizeit?\n– Ich fahre gern Fahrrad und ich spiele Gitarre.\n– Welche Sprachen sprechen Sie?\n– Englisch natürlich, ein bisschen Französisch und jetzt Deutsch.\n– Was haben Sie letztes Wochenende gemacht?\n– Am Samstag war ich mit Freunden im Kino, und am Sonntag habe ich meine Eltern besucht.",
      },
    },
    {
      title: "Teil 2: Über das eigene Leben sprechen",
      instructions:
        "Sie bekommen eine Karte mit einer Frage. Erzählen Sie etwas über Ihr Leben. Die Wörter auf der Karte helfen Ihnen. Ihr Partner fragt dann noch etwas.",
      instructionsEn:
        "You get a card with a question. Talk about your own life; the words on the card help you. Then your partner asks you a question or two.",
      speak: {
        prompt: "Was machen Sie gern am Wochenende?",
        material: [
          {
            label: "Karte",
            body: "Was machen Sie gern am Wochenende?\n\nFreunde?\nSport?\nFamilie?\nZu Hause?",
          },
        ],
        points: [
          "Sprechen Sie über alle vier Punkte auf der Karte.",
          "Erzählen Sie auch, was Sie letztes Wochenende gemacht haben (Perfekt).",
          "Sagen Sie, was Ihnen gefällt und warum (weil …).",
        ],
        examinerQuestions: [
          "Und was machen Sie am Wochenende nicht so gern?",
          "Was machen Sie nächstes Wochenende?",
        ],
        prepMinutes: 0,
        speakMinutes: 2,
        modelAnswer:
          "Am Wochenende habe ich endlich Zeit für meine Freunde. Am Samstagabend gehen wir oft zusammen essen oder ins Kino. Sport mache ich auch gern: Am Sonntagmorgen fahre ich mit dem Fahrrad an den Fluss, weil es dort sehr ruhig ist. Meine Familie wohnt nicht in Manchester, aber ich rufe meine Eltern jeden Sonntag an. Zu Hause koche ich gern etwas Neues. Letztes Wochenende habe ich zum ersten Mal Käsespätzle gemacht. Sie waren sehr lecker!\n\n– Und was machen Sie am Wochenende nicht so gern?\n– Ich putze nicht gern, aber das muss ich leider auch machen.\n– Was machen Sie nächstes Wochenende?\n– Nächstes Wochenende fahre ich nach London und besuche meine Schwester.",
      },
    },
    {
      title: "Teil 3: Gemeinsam etwas planen",
      instructions:
        "Ihre Kollegin Anke hat am Samstag Geburtstag. Sie möchten zusammen mit Ihrem Partner ein Geschenk für sie kaufen. Wann haben Sie beide Zeit? Finden Sie einen Termin. Ihr Partner hat einen anderen Kalender.",
      instructionsEn:
        "Your colleague Anke's birthday is on Saturday. You and your partner want to buy her a present together. When are you both free? Find a time. Your partner has a different diary from yours.",
      speak: {
        prompt: "Finden Sie einen Termin für den Geschenkekauf. Sie haben diesen Kalender für Freitag.",
        material: [
          {
            label: "Ihr Kalender: Freitag",
            body:
              "7:00 aufstehen, joggen\n8:00–12:00 arbeiten\n12:00–13:00 Mittagessen mit Tom\n13:00–15:00 arbeiten\n15:00–16:00 frei\n16:00–17:00 Deutschkurs\n17:00–18:30 frei\n19:00 Kino mit Lisa",
          },
          {
            label: "Kalender Ihres Partners: Freitag (im echten Test sehen Sie ihn nicht)",
            body:
              "8:00–16:00 arbeiten\n16:00–17:00 Zahnarzt\n17:30–19:00 frei\n19:30 Abendessen bei den Eltern",
          },
        ],
        points: [
          "Machen Sie Vorschläge: Wollen wir …? Hast du um … Zeit? Wie wäre es um …?",
          "Reagieren Sie auf die Vorschläge: Ja, das passt gut. / Nein, da kann ich leider nicht, da …",
          "Sagen Sie, was Sie kaufen wollen, und finden Sie zusammen eine Lösung.",
        ],
        examinerQuestions: [
          "Wann hast du am Freitag Zeit?",
          "Um drei muss ich noch arbeiten. Geht es bei dir später?",
          "Was wollen wir Anke denn schenken?",
        ],
        prepMinutes: 0,
        speakMinutes: 3,
        modelAnswer:
          "– Wann hast du am Freitag Zeit?\n– Am Vormittag arbeite ich, und um zwölf esse ich mit Tom zu Mittag. Um drei habe ich eine Stunde frei. Hast du um drei Zeit?\n– Um drei muss ich noch arbeiten. Geht es bei dir später?\n– Von vier bis fünf habe ich Deutschkurs. Aber danach bin ich frei, bis halb sieben. Wie wäre es um halb sechs?\n– Ja, um halb sechs geht es. Da bin ich schon beim Zahnarzt fertig.\n– Super! Dann treffen wir uns um halb sechs vor dem Kaufhaus. Um sieben gehe ich ins Kino, das passt also gut.\n– Was wollen wir Anke denn schenken?\n– Sie liest gern. Wollen wir ihr ein Buch kaufen? Oder einen schönen Kalender?\n– Ein Buch finde ich gut. Also bis Freitag!",
      },
    },
  ],
};
