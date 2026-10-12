// Synced from cheneygross-afk/lengo:src/lib/exams/de/goethe-b1-sprechen.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// Goethe-Zertifikat B1 practice exam -- Sprechen.
// About 15 minutes for a pair of candidates, after 15 minutes of
// preparation (here split between parts 1 and 2), 3 parts as in the real
// exam: planning something together (about 3 minutes), presenting a
// topic with five slides (about 3 minutes) and talking about the
// presentations (about 2 minutes). The examiner's lines stand in for the
// partner.
export const GOETHE_B1_SPRECHEN: ExamPaper = {
  id: "sprechen",
  kind: "speaking",
  title: "Sprechen",
  minutes: 15,
  prepMinutes: 15,
  group: 2,
  tasks: [
    {
      title: "Teil 1: Gemeinsam etwas planen",
      instructions:
        "Ihre Kollegin, Frau Schäfer, geht nach dreißig Jahren in der Firma in Rente. Sie und Ihr Partner / Ihre Partnerin möchten eine kleine Abschiedsfeier für sie organisieren. Sprechen Sie über die Punkte unten, machen Sie Vorschläge und reagieren Sie auf die Vorschläge Ihres Partners / Ihrer Partnerin. Planen und entscheiden Sie gemeinsam, was Sie tun möchten. Dauer: etwa 3 Minuten.",
      instructionsEn:
        "A colleague, Ms Schäfer, is retiring after thirty years with the company. With your partner, plan a small farewell party: make suggestions, react to your partner's, and agree on a plan together. About 3 minutes.",
      speak: {
        prompt: "Planen Sie gemeinsam eine Abschiedsfeier für Frau Schäfer.",
        points: [
          "Wann und wo feiern?",
          "Wer wird eingeladen?",
          "Essen und Getränke?",
          "Geschenk?",
        ],
        examinerQuestions: [
          "Du, Frau Schäfer geht ja Ende des Monats in Rente. Wollen wir eine kleine Feier für sie organisieren?",
          "Wann passt es dir am besten? Und wo könnten wir feiern?",
          "Sollen wir nur unsere Abteilung einladen oder auch andere Leute?",
          "Bestellen wir das Essen, oder bringt jeder etwas mit?",
          "Und was schenken wir ihr? Hast du eine Idee?",
        ],
        prepMinutes: 5,
        speakMinutes: 3,
        modelAnswer:
          "– Du, Frau Schäfer geht ja Ende des Monats in Rente. Wollen wir eine kleine Feier für sie organisieren?\n– Gute Idee! Sie arbeitet seit dreißig Jahren hier, das müssen wir feiern. Wie wäre es mit ihrem letzten Arbeitstag, also Freitag, dem 28.?\n– Freitag finde ich gut, aber nicht zu spät, viele Kollegen fahren am Wochenende weg.\n– Dann vielleicht um drei Uhr nachmittags? Und ich würde vorschlagen, dass wir in der Kantine feiern. Der Besprechungsraum ist zu klein. Ich frage den Chef, ob das geht.\n– Einverstanden. Wen laden wir ein? Nur unsere Abteilung?\n– Ich finde, wir sollten auch die Kollegen aus dem Lager einladen, mit denen hat sie ja viel zusammengearbeitet. Und was hältst du davon, wenn wir heimlich ihren Mann einladen?\n– Das wäre eine schöne Überraschung! Bestellen wir das Essen?\n– Das ist ziemlich teuer. Wir könnten lieber ein Buffet machen: Jeder bringt etwas mit, einen Salat oder einen Kuchen. Die Getränke kaufe ich.\n– Gut. Und was schenken wir ihr?\n– Sie hat doch erzählt, dass sie im Ruhestand viel wandern möchte. Wie wäre es mit einem Gutschein für ein Wochenende in den Alpen? Wenn jeder zehn Euro gibt, reicht das bestimmt.\n– Super, so machen wir es. Ich sammle das Geld ein, und du sprichst mit dem Chef wegen der Kantine.\n– Abgemacht!",
      },
    },
    {
      title: "Teil 2: Ein Thema präsentieren",
      instructions:
        "Sie sollen Ihren Zuhörern ein aktuelles Thema präsentieren. Wählen Sie ein Thema (Thema 1 oder Thema 2). Ihre Präsentation hat fünf Teile (Folien). Führen Sie durch alle fünf Folien und sprechen Sie frei. Dauer: etwa 3 Minuten.",
      instructionsEn:
        "Present a topic to your audience. Choose one of the two topics and work through its five slides, speaking freely from notes. About 3 minutes. The model answer covers Thema 1.",
      speak: {
        prompt: "Präsentieren Sie Thema 1 oder Thema 2. Gehen Sie auf alle fünf Folien ein.",
        material: [
          {
            label: "Thema 1",
            title: "Ein Jahr Pause nach der Schule?",
            body:
              "Folie 1: Ein Jahr Pause nach der Schule? – Stellen Sie Ihr Thema vor. Erklären Sie den Inhalt und die Struktur Ihrer Präsentation.\n" +
              "Folie 2: Berichten Sie von Ihrer Situation oder einem Erlebnis im Zusammenhang mit dem Thema.\n" +
              "Folie 3: Berichten Sie von der Situation in Ihrem Heimatland und geben Sie Beispiele.\n" +
              "Folie 4: Nennen Sie die Vor- und Nachteile und sagen Sie dazu Ihre Meinung. Geben Sie auch Beispiele.\n" +
              "Folie 5: Beenden Sie Ihre Präsentation und bedanken Sie sich bei den Zuhörern.",
          },
          {
            label: "Thema 2",
            title: "Online-Freundschaften – echte Freundschaften?",
            body:
              "Folie 1: Online-Freundschaften – echte Freundschaften? – Stellen Sie Ihr Thema vor. Erklären Sie den Inhalt und die Struktur Ihrer Präsentation.\n" +
              "Folie 2: Berichten Sie von Ihrer Situation oder einem Erlebnis im Zusammenhang mit dem Thema.\n" +
              "Folie 3: Berichten Sie von der Situation in Ihrem Heimatland und geben Sie Beispiele.\n" +
              "Folie 4: Nennen Sie die Vor- und Nachteile und sagen Sie dazu Ihre Meinung. Geben Sie auch Beispiele.\n" +
              "Folie 5: Beenden Sie Ihre Präsentation und bedanken Sie sich bei den Zuhörern.",
          },
        ],
        points: [
          "Folie 1: Thema vorstellen, Inhalt und Struktur nennen.",
          "Folie 2: Eigene Erfahrungen oder ein Erlebnis.",
          "Folie 3: Die Situation in Ihrem Heimatland, mit Beispielen.",
          "Folie 4: Vor- und Nachteile, Ihre Meinung, Beispiele.",
          "Folie 5: Abschluss und Dank.",
        ],
        prepMinutes: 10,
        speakMinutes: 3,
        modelAnswer:
          "Ich möchte heute über das Thema „Ein Jahr Pause nach der Schule?“ sprechen. Viele junge Menschen fangen nach dem Schulabschluss nicht sofort mit dem Studium oder einer Ausbildung an, sondern nehmen sich ein Jahr Zeit, um zu reisen, zu jobben oder ein freiwilliges soziales Jahr zu machen. Zuerst erzähle ich von meinen eigenen Erfahrungen, dann spreche ich über die Situation in meinem Heimatland. Danach nenne ich Vor- und Nachteile und sage meine Meinung.\n\n" +
          "Ich selbst habe nach der Schule ein Jahr Pause gemacht. Ich habe sechs Monate in einem Café gearbeitet und Geld gespart. Danach bin ich drei Monate durch Australien und Neuseeland gereist. Das war eine tolle Zeit. Ich bin viel selbstständiger geworden, weil ich alles allein organisieren musste.\n\n" +
          "In Großbritannien, wo ich herkomme, nennt man das ein „Gap Year“. Das ist ziemlich normal, vor allem bei jungen Leuten, die später studieren wollen. Allerdings kann sich nicht jeder eine lange Reise leisten. Deshalb arbeiten viele in diesem Jahr einfach nur, zum Beispiel im Supermarkt oder in einem Restaurant.\n\n" +
          "Ein Vorteil ist, dass man Zeit hat, über die Zukunft nachzudenken. Mit achtzehn weiß man oft noch nicht genau, was man studieren möchte. Außerdem sammelt man Erfahrungen, die man in der Schule nicht macht. Ein Nachteil ist, dass man ein Jahr später ins Berufsleben startet und später Geld verdient. Manche verlieren in dem Jahr auch die Lust am Lernen. Meiner Meinung nach überwiegen trotzdem die Vorteile, wenn man das Jahr gut plant und nicht nur zu Hause sitzt.\n\n" +
          "Damit bin ich am Ende meiner Präsentation. Vielen Dank für Ihre Aufmerksamkeit!",
      },
    },
    {
      title: "Teil 3: Über das Thema sprechen",
      instructions:
        "Nach Ihrer Präsentation: Reagieren Sie auf die Rückmeldung und die Fragen der Prüfer und Ihres Partners / Ihrer Partnerin. Nach der Präsentation Ihres Partners / Ihrer Partnerin: Geben Sie eine Rückmeldung zur Präsentation (zum Beispiel, wie Ihnen die Präsentation gefallen hat, was für Sie neu oder besonders interessant war) und stellen Sie eine Frage. Dauer: etwa 2 Minuten.",
      instructionsEn:
        "After your partner's presentation, give feedback (what you liked, what was new or interesting) and ask a question. After your own, answer the questions you're asked. About 2 minutes.",
      speak: {
        prompt: "Geben Sie Ihrer Partnerin eine Rückmeldung und stellen Sie eine Frage. Beantworten Sie dann die Fragen zu Ihrer eigenen Präsentation.",
        material: [
          {
            label: "Präsentation Ihrer Partnerin",
            title: "Thema 2: Online-Freundschaften – echte Freundschaften?",
            body:
              "Ihre Partnerin Sofia hat erzählt, dass sie seit vier Jahren eine gute Freundin in Kanada hat, die sie über ein Online-Spiel kennengelernt hat. Sie schreiben sich fast jeden Tag. In ihrem Heimatland, sagt Sofia, haben viele Jugendliche mehr Kontakte im Internet als im echten Leben. Ihre Meinung: Online-Freundschaften können echte Freundschaften sein, aber persönliche Treffen kann man nicht ersetzen.",
          },
        ],
        points: [
          "Bedanken Sie sich und sagen Sie, was Ihnen gefallen hat.",
          "Sagen Sie, was für Sie neu oder besonders interessant war.",
          "Stellen Sie Ihrer Partnerin eine Frage.",
          "Beantworten Sie die Fragen zu Ihrer eigenen Präsentation.",
        ],
        examinerQuestions: [
          "Was würden Sie jungen Leuten raten, die wenig Geld haben?",
          "Würden Sie heute wieder ein Jahr Pause machen?",
          "Glauben Sie, dass Arbeitgeber ein Jahr Pause positiv sehen?",
        ],
        prepMinutes: 0,
        speakMinutes: 2,
        modelAnswer:
          "Vielen Dank für deine Präsentation, Sofia, die hat mir sehr gut gefallen. Besonders interessant fand ich dein Beispiel mit der Freundin in Kanada. Ich wusste nicht, dass man in einem Online-Spiel so enge Freundschaften schließen kann. Ich habe aber noch eine Frage: Habt ihr euch inzwischen einmal persönlich getroffen?\n\n– Was würden Sie jungen Leuten raten, die wenig Geld haben?\n– Ich würde ihnen raten, zuerst ein paar Monate zu arbeiten. Man muss ja nicht ins Ausland fliegen. Ein freiwilliges soziales Jahr ist zum Beispiel eine gute Möglichkeit, weil man dabei ein bisschen Geld bekommt und trotzdem viel lernt.\n– Würden Sie heute wieder ein Jahr Pause machen?\n– Ja, auf jeden Fall. Aber ich würde vielleicht länger in einem Land bleiben, statt so viel herumzureisen. Dann lernt man die Menschen besser kennen.",
      },
    },
  ],
};
