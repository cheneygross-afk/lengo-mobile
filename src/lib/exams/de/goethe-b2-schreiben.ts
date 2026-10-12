// Synced from cheneygross-afk/lengo:src/lib/exams/de/goethe-b2-schreiben.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// Goethe-Zertifikat B2 practice exam -- Schreiben.
// 75 minutes, 2 parts, as in the real exam: an opinion post for an
// online forum on one of two topics (about 150 words, four points, about
// 50 minutes), then a message in a work setting (about 100 words, four
// points, about 25 minutes).
export const GOETHE_B2_SCHREIBEN: ExamPaper = {
  id: "schreiben",
  kind: "writing",
  title: "Schreiben",
  minutes: 75,
  group: 2,
  tasks: [
    {
      title: "Teil 1",
      instructions:
        "Wählen Sie Thema A oder Thema B. Sie schreiben einen Forumsbeitrag (circa 150 Wörter). Schreiben Sie etwas zu allen vier Punkten. Achten Sie auf den Textaufbau (Einleitung, Reihenfolge der Inhaltspunkte, Schluss). Arbeitszeit: etwa 50 Minuten.",
      instructionsEn:
        "Choose topic A or B and write a post of about 150 words for an online forum. Cover all four points, and plan an introduction and a conclusion; you can take the points in any order. About 50 minutes.",
      write: [
        {
          label: "Thema A",
          prompt:
            "Sie diskutieren in einem Online-Forum über die Frage „Sollte Fleisch durch eine Steuer teurer werden?“. Schreiben Sie Ihre Meinung:\n– Äußern Sie Ihre Meinung dazu, ob Fleisch teurer werden sollte.\n– Nennen Sie Gründe, warum in vielen Ländern so viel Fleisch gegessen wird.\n– Nennen Sie andere Möglichkeiten, den Fleischkonsum zu senken.\n– Nennen Sie mögliche Nachteile einer Fleischsteuer.",
          minWords: 130,
          maxWords: 190,
          rubric: [
            "Covers all four points: opinion on a meat tax, reasons for high meat consumption, other ways to reduce it, drawbacks of a tax",
            "Has an introduction and a conclusion, and paragraphs that follow a clear line",
            "Links ideas with B2 connectors: zum einen … zum anderen, zwar … aber, allerdings, deshalb, außerdem, dennoch",
            "Expresses opinion and contrast precisely: Ich bin grundsätzlich dafür, dass … / Dagegen spricht, dass … / Meiner Ansicht nach …",
            "Uses some complex structures: subordinate clauses, Konjunktiv II for suggestions (Kantinen könnten …), the passive (es wird … gegessen)",
            "Neutral to informal forum register, used consistently (ihr or no direct address, but not Sie and du mixed)",
          ],
          modelAnswer:
            "Hallo zusammen,\n\ndas Thema „Fleischsteuer“ wird gerade überall diskutiert, und ich möchte auch meine Meinung dazu sagen.\n\nIch bin grundsätzlich dafür, dass Fleisch teurer wird. Ein Kilo Hähnchen kostet im Supermarkt manchmal weniger als ein Kilo Kirschen. Das kann nicht der wahre Preis sein, wenn man an die Tiere und die Umwelt denkt.\n\nDass so viel Fleisch gegessen wird, hat meiner Meinung nach mehrere Gründe. Zum einen ist es eben sehr billig, zum anderen gehört es für viele einfach zur Tradition: Ohne Braten ist für sie kein richtiger Sonntag.\n\nEine Steuer ist aber nicht der einzige Weg. Kantinen und Schulen könnten zum Beispiel jeden Tag ein wirklich gutes vegetarisches Gericht anbieten. Wenn es schmeckt, essen die Leute ganz automatisch weniger Fleisch.\n\nAllerdings hat eine Steuer auch Nachteile: Sie trifft vor allem Familien mit wenig Geld. Deshalb sollte man die Einnahmen nutzen, um zum Beispiel Obst und Gemüse billiger zu machen.\n\nIch bin gespannt auf eure Meinungen!",
        },
        {
          label: "Thema B",
          prompt:
            "Sie diskutieren in einem Online-Forum über die Frage „Sollen alle jungen Menschen nach der Schule ein soziales Pflichtjahr machen?“. Schreiben Sie Ihre Meinung:\n– Äußern Sie Ihre Meinung zu einem sozialen Pflichtjahr.\n– Nennen Sie Gründe, warum diese Idee zurzeit diskutiert wird.\n– Nennen Sie Bereiche, in denen junge Menschen helfen könnten.\n– Nennen Sie Bedenken oder Nachteile.",
          minWords: 130,
          maxWords: 190,
          rubric: [
            "Covers all four points: opinion, why the idea is being discussed now, areas where young people could help, concerns or drawbacks",
            "Has an introduction and a conclusion, and paragraphs that follow a clear line",
            "Links ideas with B2 connectors: zwar … aber, trotzdem, außerdem, einerseits … andererseits, deshalb",
            "Weighs both sides before concluding: Ich verstehe zwar, warum … Trotzdem bin ich gegen …",
            "Uses some complex structures: relative clauses (Menschen, die …), passive (wer gezwungen wird), Konjunktiv II (Besser fände ich es, …)",
            "Accurate vocabulary of the topic: die Pflicht, freiwillig, die Pflege, das Personal, die Gesellschaft, der Dienst",
          ],
          modelAnswer:
            "Hallo zusammen,\n\nin letzter Zeit liest man oft, dass alle jungen Menschen nach der Schule ein soziales Pflichtjahr machen sollen. Ich sehe das eher kritisch.\n\nIch verstehe zwar, warum die Idee gerade jetzt diskutiert wird. In Pflegeheimen und Krankenhäusern fehlt überall Personal, und viele haben das Gefühl, dass sich die Gesellschaft immer mehr spaltet. Ein gemeinsames Jahr könnte junge Leute aus ganz unterschiedlichen Familien zusammenbringen.\n\nEs gibt auch viele Bereiche, in denen junge Menschen helfen könnten: in Kindergärten, im Umweltschutz, beim Rettungsdienst oder bei der Betreuung alter Menschen.\n\nTrotzdem bin ich gegen eine Pflicht. Wer gezwungen wird, arbeitet selten motiviert, und gerade in der Pflege braucht man Menschen, die diese Arbeit wirklich machen wollen. Außerdem verlieren junge Leute ein Jahr, bevor sie mit der Ausbildung oder dem Studium beginnen.\n\nBesser fände ich es, den freiwilligen Dienst attraktiver zu machen, zum Beispiel mit einem höheren Taschengeld oder mit Vorteilen bei der Vergabe von Studienplätzen.\n\nViele Grüße\nElla",
        },
      ],
    },
    {
      title: "Teil 2",
      instructions:
        "Ihre Teamleiterin, Frau Krüger, hat Sie gebeten, nächste Woche eine Gruppe von Geschäftspartnern aus Österreich zu betreuen. Sie arbeiten aber gerade an einem dringenden Projekt, das bis Freitag fertig sein muss. Schreiben Sie an Frau Krüger (circa 100 Wörter). Behandeln Sie die vier Punkte. Denken Sie an eine passende Anrede und einen passenden Gruß. Arbeitszeit: etwa 25 Minuten.",
      instructionsEn:
        "Your team leader, Ms Krüger, has asked you to look after a group of business partners from Austria next week, but you're on an urgent project due on Friday. Write to her (about 100 words), covering all four points, with a suitable greeting and sign-off. About 25 minutes.",
      write: [
        {
          prompt:
            "Schreiben Sie an Frau Krüger:\n– Bedanken Sie sich für das Vertrauen.\n– Erklären Sie, warum Sie die Gruppe nicht betreuen können.\n– Schlagen Sie eine andere Lösung vor.\n– Bieten Sie Ihre Hilfe bei der Vorbereitung an.",
          minWords: 85,
          maxWords: 125,
          rubric: [
            "Covers all four points: thanks, the reason you can't, an alternative, an offer of help",
            "Semi-formal work register: Liebe Frau Krüger or Sehr geehrte Frau Krüger, Sie forms throughout, Viele Grüße or Mit freundlichen Grüßen",
            "Declines politely and diplomatically: Ich hätte das sehr gern übernommen, aber … / Leider … / Ich fürchte, dass …",
            "Makes the suggestion politely with Konjunktiv II: Wäre es möglich, dass … / Könnte vielleicht … ?",
            "Clear structure, roughly one short paragraph per point, with correct verb position in subordinate clauses",
          ],
          modelAnswer:
            "Liebe Frau Krüger,\n\nvielen Dank, dass Sie mir die Betreuung unserer Gäste aus Österreich zutrauen. Ich hätte das sehr gern übernommen.\n\nLeider muss ich bis Freitag die Präsentation für die Messe in Köln fertigstellen, und dafür brauche ich nächste Woche jede Minute. Ich fürchte, dass ich mich sonst um keine der beiden Aufgaben richtig kümmern könnte.\n\nWäre es vielleicht möglich, dass Herr Peters die Gruppe betreut? Er hat schon öfter mit unseren Kunden aus Wien zusammengearbeitet.\n\nGern stelle ich ihm vorher eine Mappe mit allen Informationen über die Gäste und das Besuchsprogramm zusammen.\n\nViele Grüße\nDaniel Hughes",
        },
      ],
    },
  ],
};
