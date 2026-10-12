// Synced from cheneygross-afk/lengo:src/lib/exams/de/goethe-b1-schreiben.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// Goethe-Zertifikat B1 practice exam -- Schreiben.
// 60 minutes, 3 parts, as in the real exam: an informal email to a
// friend (about 80 words, three points, about 20 minutes), an opinion
// post for an online guestbook (about 80 words, about 25 minutes) and a
// short formal message (about 40 words, about 15 minutes).
export const GOETHE_B1_SCHREIBEN: ExamPaper = {
  id: "schreiben",
  kind: "writing",
  title: "Schreiben",
  minutes: 60,
  group: 2,
  tasks: [
    {
      title: "Aufgabe 1",
      instructions:
        "Sie haben vor Kurzem an einem Kochkurs teilgenommen. Ihr Freund Lukas war nicht dabei. Schreiben Sie Lukas eine E-Mail (circa 80 Wörter). Schreiben Sie etwas zu allen drei Punkten. Denken Sie an eine passende Einleitung und einen passenden Schluss. Arbeitszeit: etwa 20 Minuten.",
      instructionsEn:
        "You recently did a cooking course; your friend Lukas wasn't there. Write him an informal email of about 80 words covering all three points, with a suitable opening and ending. About 20 minutes.",
      write: [
        {
          prompt:
            "Schreiben Sie an Lukas:\n– Beschreiben Sie: Wie war der Kurs?\n– Begründen Sie: Warum haben Sie den Kurs gemacht?\n– Machen Sie einen Vorschlag für ein Treffen.",
          minWords: 70,
          maxWords: 100,
          rubric: [
            "Covers all three points: describes the course, gives a reason for doing it, suggests meeting up",
            "Informal register throughout: du, dich, dir, dein; greeting such as Lieber Lukas / Hallo Lukas, and an ending such as Viele Grüße / Bis bald",
            "Uses the Perfekt for the past (ich habe … gekocht, wir sind … gegangen) with the right auxiliary",
            "Gives the reason with weil (verb at the end) or denn (normal word order)",
            "Makes the suggestion with a question or Wollen wir … / Hast du Lust, … zu … / Wie wäre es mit …?",
            "Joins sentences with connectors (zuerst, danach, außerdem, deshalb) rather than a list of short sentences",
          ],
          modelAnswer:
            "Lieber Lukas,\n\nstell dir vor, ich habe letzten Samstag einen Kochkurs für thailändische Küche gemacht! Wir waren zehn Leute und haben zusammen eine Suppe, ein Curry und einen Nachtisch mit Mango gekocht. Der Koch war sehr lustig und hat alles gut erklärt.\n\nIch habe den Kurs gemacht, weil ich immer nur Nudeln koche und endlich etwas Neues lernen wollte.\n\nHast du nächsten Freitag Zeit? Dann komm doch zu mir, und ich koche das Curry für uns beide. Du bringst den Nachtisch mit, okay?\n\nViele Grüße\nSam",
        },
      ],
    },
    {
      title: "Aufgabe 2",
      instructions:
        "Sie haben im Fernsehen eine Diskussionssendung zum Thema „Einkaufen im Internet“ gesehen. Im Online-Gästebuch der Sendung finden Sie folgende Meinung. Schreiben Sie nun Ihre Meinung (circa 80 Wörter). Arbeitszeit: etwa 25 Minuten.",
      instructionsEn:
        "After a TV debate about online shopping, you read the comment below in the programme's online guestbook. Write your own opinion, about 80 words. About 25 minutes.",
      write: [
        {
          prompt: "Schreiben Sie Ihre Meinung zum Thema „Einkaufen im Internet – bequem, aber schlecht für die Innenstädte?“.",
          input: {
            text: {
              title: "Gästebuch der Sendung „Konsum heute“",
              body:
                "Ralf: Ich kaufe fast alles online. Das ist billiger, ich spare Zeit und muss keinen Parkplatz suchen. Wenn die Geschäfte in der Stadt deshalb schließen, dann ist das eben der Lauf der Zeit. Früher gab es ja auch überall Videotheken.",
            },
          },
          minWords: 70,
          maxWords: 100,
          rubric: [
            "Gives a clear personal opinion on the topic, and may react to Ralf's comment",
            "Supports the opinion with at least two reasons or examples",
            "Neutral register: no du/Sie greeting needed; a guestbook post can start straight in",
            "Uses phrases for opinions: Ich finde / Ich bin der Meinung, dass … / Meiner Meinung nach … (verb straight after: Meiner Meinung nach ist …)",
            "Contrasts with trotzdem, aber, einerseits … andererseits, and puts the verb in the right place after them",
            "Vocabulary of the topic: bestellen, das Paket, der Laden, die Beratung, die Innenstadt, die Umwelt",
          ],
          modelAnswer:
            "Ich kann Ralf teilweise verstehen. Auch ich bestelle manchmal Bücher oder Elektronik im Internet, weil es schnell geht. Trotzdem finde ich es falsch, alles online zu kaufen. Wenn die Geschäfte schließen, werden die Innenstädte leer und langweilig, und viele Menschen verlieren ihre Arbeit. Außerdem kann ich im Laden Kleidung anprobieren und mich beraten lassen. Das ist mir viel wert. Und die vielen Pakete sind auch schlecht für die Umwelt. Deshalb kaufe ich lieber in den Geschäften in meiner Stadt ein, auch wenn es manchmal etwas teurer ist.",
        },
      ],
    },
    {
      title: "Aufgabe 3",
      instructions:
        "Ihr Vermieter, Herr Brückner, lädt alle Mieterinnen und Mieter am Donnerstag um 19 Uhr zu einer Versammlung über die Renovierung des Treppenhauses ein. Sie können nicht kommen. Schreiben Sie an Herrn Brückner. Entschuldigen Sie sich höflich und nennen Sie den Grund. Schreiben Sie eine E-Mail (circa 40 Wörter). Vergessen Sie nicht die Anrede und den Gruß am Schluss. Arbeitszeit: etwa 15 Minuten.",
      instructionsEn:
        "Your landlord, Mr Brückner, has invited all tenants to a meeting on Thursday at 7 pm about renovating the stairwell. You can't go. Write him a formal email of about 40 words: apologise politely and give the reason. Don't forget the greeting and sign-off. About 15 minutes.",
      write: [
        {
          prompt: "Schreiben Sie an Herrn Brückner: Entschuldigen Sie sich höflich und nennen Sie den Grund, warum Sie nicht kommen können.",
          minWords: 35,
          maxWords: 55,
          rubric: [
            "Formal greeting and sign-off: Sehr geehrter Herr Brückner, … Mit freundlichen Grüßen",
            "Sie forms throughout (Ihnen, Ihre), never du",
            "Apologises politely (Leider kann ich … nicht … / Es tut mir leid, dass …) and gives a reason",
            "Short and to the point; may add a polite request or offer (Könnten Sie mir bitte … schicken?)",
            "Correct word order in the weil or dass clause (verb at the end)",
          ],
          modelAnswer:
            "Sehr geehrter Herr Brückner,\n\nvielen Dank für die Einladung zur Versammlung am Donnerstag. Leider kann ich nicht kommen, weil ich an diesem Abend beruflich in Hamburg bin. Könnten Sie mir bitte das Protokoll schicken?\n\nMit freundlichen Grüßen\nAlex Morgan",
        },
      ],
    },
  ],
};
