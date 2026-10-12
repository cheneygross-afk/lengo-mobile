// Synced from cheneygross-afk/lengo:src/lib/exams/de/goethe-c1-schreiben.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// Goethe-Zertifikat C1 practice exam -- Schreiben.
// 80 minutes, 2 parts, modelled on the real exam's writing module: an
// argued contribution to an online discussion (about 230 words), then a
// formal message reacting to a letter (about 120 words). All prompts and
// model answers are original.
export const GOETHE_C1_SCHREIBEN: ExamPaper = {
  id: "schreiben",
  kind: "writing",
  title: "Schreiben",
  minutes: 80,
  group: 2,
  tasks: [
    {
      title: "Teil 1",
      instructions:
        "Sie schreiben einen Beitrag für das Diskussionsforum einer Online-Zeitung. Lesen Sie die Meldung und behandeln Sie mindestens drei der vier Punkte. Schreiben Sie circa 230 Wörter. Achten Sie auf einen klaren Aufbau und verbinden Sie Ihre Gedanken sinnvoll miteinander. Sie haben dafür etwa 65 Minuten Zeit.",
      write: [
        {
          prompt:
            "Schreiben Sie einen Forumsbeitrag zum Thema „Soziales Pflichtjahr für alle?“. Behandeln Sie mindestens drei der folgenden Punkte:\n– Welche Rolle spielt freiwilliges Engagement in Ihrem Heimatland?\n– Welche Vorteile hätte ein Pflichtjahr für die Gesellschaft und für die jungen Menschen selbst?\n– Welche Nachteile oder Gefahren sehen Sie?\n– Welche Alternativen gäbe es, und wie ist Ihre persönliche Meinung?",
          input: {
            text: {
              label: "Meldung",
              title: "Soziales Pflichtjahr für alle?",
              body:
                "In der Politik wird erneut darüber diskutiert, ob junge Menschen nach der Schule verpflichtend ein Jahr lang in sozialen Einrichtungen, im Umweltschutz oder im Katastrophenschutz arbeiten sollen. Befürworter versprechen sich davon mehr gesellschaftlichen Zusammenhalt und eine Entlastung für Pflegeheime und Krankenhäuser. Kritiker halten eine solche Pflicht für einen unverhältnismäßigen Eingriff in die Freiheit junger Menschen und verweisen darauf, dass schon heute Zehntausende freiwillig ein soziales Jahr leisten.",
            },
          },
          minWords: 200,
          maxWords: 300,
          rubric: [
            "Covers at least three of the four points in depth, not just in a sentence each, and stays on the topic of the news item.",
            "Takes a clear position, supports it with reasons and examples, and weighs the other side (concession: zwar … aber, trotzdem, einerseits … andererseits).",
            "Has a clear structure: a heading or opening that states the issue, one paragraph per idea, a conclusion that sums up.",
            "Links ideas with a range of connectors (außerdem, nicht zuletzt, statt … zu, daher, gerade deshalb, kurz gesagt) instead of a string of main clauses.",
            "C1 accuracy and range: varied subordinate clauses, Konjunktiv II for hypotheses (wäre, hätte, könnten), nominal style where it fits, few errors in endings and word order.",
          ],
          modelAnswer:
            "Ein Pflichtjahr? Lieber ein attraktives Freiwilligenjahr!\n\n" +
            "Die Idee klingt zunächst sympathisch: Junge Menschen lernen Lebenswelten kennen, mit denen sie sonst kaum in Berührung kämen, und Pflegeheime bekommen dringend benötigte Unterstützung. Trotzdem halte ich ein verpflichtendes soziales Jahr für den falschen Weg.\n\n" +
            "In meinem Heimatland engagieren sich viele Jugendliche ehrenamtlich, etwa in Sportvereinen oder in den Secondhandläden von Hilfsorganisationen – und zwar gerade deshalb mit Begeisterung, weil niemand sie dazu zwingt.\n\n" +
            "Natürlich hätte ein Pflichtjahr auch Vorteile. Viele junge Leute würden zum ersten Mal Verantwortung für andere übernehmen und dabei vielleicht sogar einen Beruf entdecken, an den sie nie gedacht hätten. Außerdem kämen Menschen aus ganz unterschiedlichen Milieus zusammen, was dem gesellschaftlichen Zusammenhalt sicher guttäte.\n\n" +
            "Dennoch überwiegen für mich die Nachteile. Das Hauptproblem ist der Zwang: Wer gegen seinen Willen in einem Altenheim arbeitet, wird kaum die Geduld und Zuwendung aufbringen, die alte Menschen brauchen. Hinzu kommt die Gefahr, dass unbezahlte Kräfte reguläre Stellen ersetzen, statt sie zu ergänzen. Nicht zuletzt verlieren junge Leute ein Jahr, in dem sie bereits studieren oder eine Ausbildung beginnen könnten.\n\n" +
            "Sinnvoller fände ich es, die bestehenden Freiwilligendienste attraktiver zu machen: durch ein angemessenes Taschengeld, eine Anrechnung auf Studium oder Ausbildung und eine bessere Betreuung in den Einrichtungen. Wenn sich ein solches Jahr wirklich lohnt, werden sich auch ohne Zwang deutlich mehr junge Menschen dafür entscheiden.\n\n" +
            "Kurz gesagt: Engagement lässt sich fördern, aber nicht verordnen.",
        },
      ],
    },
    {
      title: "Teil 2",
      instructions:
        "Sie haben eine Nachricht erhalten und antworten darauf. Behandeln Sie alle Punkte der Aufgabe. Schreiben Sie circa 120 Wörter. Achten Sie auf den passenden Ton und vergessen Sie Anrede und Gruß nicht. Sie haben dafür etwa 15 Minuten Zeit.",
      write: [
        {
          prompt:
            "Sie sind Vorsitzende bzw. Vorsitzender eines Sportvereins und haben beim Ordnungsamt beantragt, im Stadtpark ein Sommerfest zu veranstalten. Sie haben die unten stehende E-Mail erhalten. Den Lageplan können Sie sofort schicken, aber Ihre Versicherung kann den Nachweis erst nach Ablauf der Frist ausstellen. Schreiben Sie an Frau Dr. Engel:\n– Entschuldigen Sie sich für die unvollständigen Unterlagen.\n– Kündigen Sie an, was Sie mitschicken.\n– Erklären Sie das Problem mit der Versicherung.\n– Bitten Sie um eine Verlängerung der Frist.",
          input: {
            text: {
              label: "E-Mail",
              title: "Ihr Antrag auf Genehmigung einer Veranstaltung",
              body:
                "Sehr geehrte Damen und Herren,\n\nIhr Antrag vom 2. Mai auf Genehmigung eines Sommerfestes im Stadtpark am 12. Juli kann in der vorliegenden Form leider nicht bearbeitet werden. Es fehlen ein Lageplan der geplanten Stände sowie der Nachweis einer Haftpflichtversicherung. Bitte reichen Sie die fehlenden Unterlagen bis spätestens 6. Juni nach. Andernfalls kann die Veranstaltung zum gewünschten Termin nicht mehr genehmigt werden.\n\nMit freundlichen Grüßen\nDr. Karin Engel\nOrdnungsamt der Stadt Wendelstadt",
            },
          },
          minWords: 100,
          maxWords: 160,
          rubric: [
            "Covers all four points: apology, what is enclosed, the insurance problem with a reason, a clear request for more time (ideally with a new date).",
            "Formal register throughout: Sehr geehrte Frau Dr. Engel, Sie and Ihnen with capitals, Mit freundlichen Grüßen, no colloquial words.",
            "Refers precisely to the letter received (Ihre Nachricht vom …, bezüglich unseres Antrags …).",
            "Uses polite, set phrases for requests and offers (Ich möchte Sie daher bitten, … ; Für Rückfragen stehe ich Ihnen gern zur Verfügung).",
            "Accurate grammar: dass- and da-clauses with the verb at the end, correct cases after prepositions (wegen, bis zum, bezüglich + genitive).",
          ],
          modelAnswer:
            "Sehr geehrte Frau Dr. Engel,\n\n" +
            "vielen Dank für Ihre Nachricht bezüglich unseres Antrags auf Genehmigung des Sommerfestes am 12. Juli. Bitte entschuldigen Sie, dass unsere Unterlagen unvollständig waren.\n\n" +
            "Den Lageplan der Stände habe ich dieser E-Mail beigefügt. Schwieriger ist es mit dem Nachweis der Haftpflichtversicherung: Unsere Versicherung hat uns mitgeteilt, dass sie die Bestätigung frühestens am 10. Juni ausstellen kann, da unser Vertrag erst zu diesem Zeitpunkt verlängert wird.\n\n" +
            "Ich möchte Sie daher bitten, die Frist für diesen Nachweis ausnahmsweise bis zum 14. Juni zu verlängern. Selbstverständlich leite ich Ihnen die Bestätigung weiter, sobald sie vorliegt.\n\n" +
            "Für Rückfragen stehe ich Ihnen jederzeit gern zur Verfügung.\n\n" +
            "Mit freundlichen Grüßen\n" +
            "Sebastian Lorenz\n" +
            "Vorsitzender des TSV Wendelstadt",
        },
      ],
    },
  ],
};
