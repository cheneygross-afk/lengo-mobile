// Synced from cheneygross-afk/lengo:src/lib/exams/de/goethe-a2-schreiben.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// Goethe-Zertifikat A2 practice exam -- Schreiben.
// 30 minutes, 2 parts, as in the real exam: a short informal text
// message of 20-30 words, then an email to someone you know less well
// (a teacher, a colleague) of 30-40 words, each covering three points.
export const GOETHE_A2_SCHREIBEN: ExamPaper = {
  id: "schreiben",
  kind: "writing",
  title: "Schreiben",
  minutes: 30,
  group: 2,
  tasks: [
    {
      title: "Teil 1",
      instructions:
        "Sie sind mit Ihrer Freundin Nele um 18 Uhr im Café verabredet, aber Sie kommen zu spät. Schreiben Sie Nele eine SMS. Entschuldigen Sie sich und sagen Sie, warum Sie zu spät kommen. Schreiben Sie, wann Sie im Café sind. Machen Sie einen Vorschlag, was Nele bis dahin machen kann. Schreiben Sie 20 bis 30 Wörter. Schreiben Sie zu allen drei Punkten.",
      instructionsEn:
        "You're meeting your friend Nele at a café at 6 pm, but you're running late. Text her: apologise and say why you're late, say when you'll be there, and suggest what she can do until then. 20-30 words, covering all three points.",
      write: [
        {
          prompt:
            "SMS an Nele: Entschuldigen Sie sich und sagen Sie, warum Sie zu spät kommen. Wann sind Sie im Café? Was kann Nele bis dahin machen?",
          minWords: 20,
          maxWords: 30,
          rubric: [
            "Covers all three points: apology and reason, arrival time, a suggestion for Nele",
            "Writes informally, with \"du\" and a short greeting and sign-off (\"Hallo Nele\" … \"Bis gleich!\")",
            "Gives the reason with \"weil\" (verb at the end) or \"denn\" (normal word order)",
            "Uses the right word order after a time phrase: \"Um halb sieben bin ich da.\"",
            "Makes the suggestion with \"doch\" or a question (\"Bestell doch schon mal …\" / \"Kannst du …?\")",
          ],
          modelAnswer:
            "Hallo Nele, es tut mir leid, ich komme zu spät, weil mein Bus Verspätung hat. Um halb sieben bin ich im Café. Bestell doch schon mal einen Kaffee! Bis gleich, Sam",
        },
      ],
    },
    {
      title: "Teil 2",
      instructions:
        "Ihr Deutschlehrer, Herr Albrecht, hat Sie zu seinem Abschiedsfest eingeladen. Er geht in Rente. Schreiben Sie Herrn Albrecht eine E-Mail. Bedanken Sie sich für die Einladung. Sagen Sie, dass Sie nicht kommen können, und erklären Sie, warum. Fragen Sie, ob Sie ihn später einmal besuchen können. Schreiben Sie 30 bis 40 Wörter. Schreiben Sie zu allen drei Punkten.",
      instructionsEn:
        "Your German teacher, Mr Albrecht, has invited you to his farewell party: he's retiring. Email him: thank him for the invitation, say you can't come and explain why, and ask if you can visit him some time later. 30-40 words, covering all three points.",
      write: [
        {
          prompt:
            "E-Mail an Herrn Albrecht: Bedanken Sie sich für die Einladung. Sie können nicht kommen: Warum nicht? Fragen Sie, ob Sie ihn später besuchen können.",
          minWords: 30,
          maxWords: 40,
          rubric: [
            "Covers all three points: thanks, refusal with a reason, the question about a later visit",
            "Uses the polite \"Sie\" forms and a suitable greeting and sign-off (\"Lieber Herr Albrecht\" … \"Viele Grüße\")",
            "Thanks with \"für\" + accusative (\"vielen Dank für die Einladung\")",
            "Asks the indirect question with \"ob\" and the verb at the end (\"… ob ich Sie später einmal besuchen kann\")",
            "Links ideas with \"weil\", \"aber\", \"denn\" and puts the verb in the right place",
          ],
          modelAnswer:
            "Lieber Herr Albrecht,\n\nvielen Dank für Ihre Einladung! Leider kann ich nicht kommen, weil ich an dem Tag in London bei meiner Schwester bin. Darf ich fragen, ob ich Sie später einmal besuchen kann?\n\nViele Grüße\nSam",
        },
      ],
    },
  ],
};
