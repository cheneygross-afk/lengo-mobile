// Synced from cheneygross-afk/lengo:src/lib/exams/de/goethe-c1-sprechen.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// Goethe-Zertifikat C1 practice exam -- Sprechen.
// About 15 minutes after 15 minutes' preparation, 2 parts, modelled on
// the real exam's speaking module: a short talk on a topic with guiding
// points (about 4 minutes, followed by a question or two), then a
// discussion in which the candidates exchange arguments and reach a
// conclusion (about 5 minutes). The real exam is usually taken in pairs;
// here the partner's side is given as the examiner's questions.
export const GOETHE_C1_SPRECHEN: ExamPaper = {
  id: "sprechen",
  kind: "speaking",
  title: "Sprechen",
  minutes: 15,
  prepMinutes: 15,
  group: 2,
  tasks: [
    {
      title: "Teil 1: Vortrag",
      instructions:
        "Halten Sie einen kurzen Vortrag (etwa 3–4 Minuten) zum unten stehenden Thema. Gehen Sie auf alle Punkte ein. Strukturieren Sie Ihren Vortrag mit einer Einleitung, einem Hauptteil und einem Schluss. Im Anschluss stellen Ihnen Ihr Gesprächspartner oder die Prüfenden Fragen zu Ihrem Vortrag.",
      speak: {
        prompt: "Thema: Lebenslanges Lernen – wie sich Erwachsene weiterbilden",
        points: [
          "Stellen Sie verschiedene Formen der Weiterbildung für Erwachsene vor.",
          "Beschreiben Sie eine dieser Formen genauer.",
          "Nennen Sie Vor- und Nachteile dieser Form.",
          "Bewerten Sie, welche Bedeutung Weiterbildung heute hat, und begründen Sie Ihre Meinung.",
        ],
        examinerQuestions: [
          "Würden Sie wieder einen Onlinekurs machen, oder lieber einen Kurs vor Ort?",
          "Sollte Weiterbildung in manchen Berufen Pflicht sein?",
          "Wie ist die Situation in Ihrem Heimatland: Wer bezahlt die Weiterbildung?",
        ],
        prepMinutes: 15,
        speakMinutes: 4,
        modelAnswer:
          "Ich möchte heute über das Thema „lebenslanges Lernen“ sprechen, genauer gesagt über die Frage, wie sich Erwachsene weiterbilden und welche Rolle das heute spielt. Mein Vortrag hat drei Teile: Zuerst gebe ich einen kurzen Überblick über verschiedene Formen der Weiterbildung, dann stelle ich eine davon genauer vor, und zum Schluss möchte ich bewerten, welche Bedeutung Weiterbildung heute hat.\n\n" +
          "Zunächst also zu den Formen. Am bekanntesten ist sicherlich die berufliche Weiterbildung, die der Arbeitgeber organisiert oder bezahlt, zum Beispiel Seminare zu neuer Software oder Schulungen für Führungskräfte. Daneben gibt es Abendkurse an Volkshochschulen oder Sprachschulen, die man aus eigenem Interesse besucht. Eine dritte Form, die in den letzten Jahren enorm an Bedeutung gewonnen hat, sind Onlinekurse, also Videokurse, Webinare oder Lern-Apps.\n\n" +
          "Auf diese Onlinekurse möchte ich etwas genauer eingehen, weil ich selbst Erfahrung damit habe. Vor zwei Jahren habe ich neben meinem Job einen Onlinekurs in Datenanalyse gemacht. Man bekam jede Woche Videos und Aufgaben und konnte sich die Zeit selbst einteilen. Am Ende gab es eine Abschlussprüfung und ein Zertifikat.\n\n" +
          "Was sind nun die Vor- und Nachteile? Der größte Vorteil liegt auf der Hand: die Flexibilität. Man kann abends lernen, am Wochenende oder in der Mittagspause, und man muss nirgendwo hinfahren. Außerdem sind viele Kurse deutlich günstiger als Präsenzveranstaltungen. Andererseits erfordert diese Freiheit sehr viel Selbstdisziplin. Ich habe selbst erlebt, wie leicht man nach einem langen Arbeitstag sagt: „Heute nicht, morgen mache ich einfach zwei Lektionen.“ Nicht umsonst brechen viele Teilnehmende solche Kurse vorzeitig ab. Ein weiterer Nachteil ist der fehlende persönliche Austausch. In einem Kurs vor Ort lernt man auch von den anderen, man diskutiert und knüpft Kontakte. Das lässt sich online nur bedingt ersetzen.\n\n" +
          "Nun zu meiner Bewertung. Ich bin überzeugt, dass Weiterbildung heute wichtiger ist als je zuvor. Früher hat man einen Beruf gelernt und ihn dann oft vierzig Jahre lang ausgeübt. Heute verändern sich viele Berufe durch die Digitalisierung so schnell, dass man ohne ständiges Dazulernen den Anschluss verliert. Allerdings halte ich es für problematisch, wenn die Verantwortung dafür allein beim Einzelnen liegt. Wer wenig verdient oder Kinder betreut, hat oft weder Zeit noch Geld für Kurse. Hier sind meiner Meinung nach die Arbeitgeber und der Staat gefragt, zum Beispiel durch bezahlte Bildungszeit.\n\n" +
          "Zusammenfassend lässt sich sagen: Es gibt heute mehr Möglichkeiten zur Weiterbildung als je zuvor, und Onlinekurse haben sie für viele überhaupt erst zugänglich gemacht. Damit aber alle davon profitieren, braucht es neben Motivation auch gute Rahmenbedingungen. Vielen Dank für Ihre Aufmerksamkeit. Ich freue mich auf Ihre Fragen.\n\n" +
          "– Würden Sie wieder einen Onlinekurs machen?\n" +
          "– Ja, aber ich würde mir eine feste Lerngruppe suchen, mit der ich mich einmal pro Woche treffe, online oder vor Ort. Dann ist man verbindlicher dabei, und der Austausch fehlt nicht.",
      },
    },
    {
      title: "Teil 2: Diskussion",
      instructions:
        "Diskutieren Sie mit Ihrem Gesprächspartner oder Ihrer Gesprächspartnerin (etwa 5 Minuten) über die unten stehende Frage. Die Aussagen können Ihnen als Anregung dienen. Tauschen Sie Argumente aus, gehen Sie auf die Argumente Ihres Gegenübers ein und kommen Sie am Ende zu einem Ergebnis.",
      speak: {
        prompt: "Sollte die private Nutzung von Smartphones an Schulen verboten werden?",
        material: [
          {
            label: "Aussagen",
            body:
              "„Kinder sollen in der Pause miteinander reden und spielen, nicht jedes für sich auf einen Bildschirm starren.“ (eine Grundschullehrerin)\n\n" +
              "„Verbote bringen nichts. Die Schule sollte uns beibringen, vernünftig mit dem Handy umzugehen.“ (ein Schüler, 16 Jahre)\n\n" +
              "„Ich möchte mein Kind jederzeit erreichen können.“ (eine Mutter)",
          },
        ],
        points: [
          "Ihre Meinung äußern und mit Argumenten und Beispielen begründen.",
          "Auf die Argumente des Gegenübers eingehen: zustimmen, widersprechen, nachfragen.",
          "Zwischen verschiedenen Situationen unterscheiden (Unterricht, Pausen, Alter der Schüler).",
          "Am Ende gemeinsam ein Ergebnis oder einen Kompromiss formulieren.",
        ],
        examinerQuestions: [
          "Ist ein komplettes Verbot nicht übertrieben? Das Smartphone gehört doch zum Alltag der Jugendlichen.",
          "Wie wollen Sie ein Verbot in den Pausen durchsetzen?",
          "Und was ist mit den Eltern, die ihr Kind erreichen möchten?",
          "Worauf können wir uns also einigen?",
        ],
        prepMinutes: 0,
        speakMinutes: 5,
        modelAnswer:
          "– Ich fange einfach mal an. Ich bin ehrlich gesagt für ein Verbot, zumindest im Unterricht und an Grundschulen auch in den Pausen. Kinder sollen in der Pause miteinander spielen und reden, nicht jedes für sich auf einen Bildschirm starren.\n" +
          "– Ist ein komplettes Verbot nicht übertrieben? Das Smartphone gehört doch zum Alltag der Jugendlichen.\n" +
          "– Ein berechtigter Einwand. Aber ein vernünftiger Umgang setzt voraus, dass man sich konzentrieren kann. Viele Lehrkräfte berichten, dass Schülerinnen und Schüler ständig durch Benachrichtigungen abgelenkt werden. Selbst wenn das Handy nur auf dem Tisch liegt, leidet die Aufmerksamkeit.\n" +
          "– Wie wollen Sie ein Verbot in den Pausen durchsetzen?\n" +
          "– Da gebe ich Ihnen recht, bei älteren Schülern ist das schwierig. Die verziehen sich dann eben auf die Toiletten. Vielleicht sollte man tatsächlich nach Alter unterscheiden: An Grundschulen ein klares Verbot, an weiterführenden Schulen Regeln, die die Schülerinnen und Schüler selbst mitbestimmen. Dann halten sie sich vermutlich auch eher daran. Und im Unterricht kann die Lehrkraft das Handy ja ganz bewusst einsetzen, etwa für eine Recherche.\n" +
          "– Und was ist mit den Eltern, die ihr Kind erreichen möchten?\n" +
          "– Für echte Notfälle gibt es das Sekretariat. Ich habe den Eindruck, dieses Argument wird oft vorgeschoben. Früher ging es schließlich auch ohne, und das Handy muss ja nicht weg, es bleibt nur in der Tasche.\n" +
          "– Worauf können wir uns also einigen?\n" +
          "– Ich würde festhalten: Im Unterricht hat das private Handy nichts zu suchen, es sei denn, es wird bewusst eingesetzt. Bei den Pausen unterscheiden wir nach Alter, und die Älteren werden an den Regeln beteiligt. Damit könnte ich gut leben.",
      },
    },
  ],
};
