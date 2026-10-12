// Synced from cheneygross-afk/lengo:src/lib/exams/de/goethe-c2-sprechen.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// Goethe-Zertifikat C2 (Großes Deutsches Sprachdiplom) practice exam --
// Sprechen. About 15 minutes after 15 minutes' preparation, 2 parts,
// modelled on the real exam's speaking module, which is taken alone with
// the examiners: a talk on a topic with guiding points (about 4 minutes),
// followed by questions on it, then a discussion with the examiner on a
// second topic, with short statements as a starting point (about
// 6 minutes).
export const GOETHE_C2_SPRECHEN: ExamPaper = {
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
        "Halten Sie einen Vortrag von etwa 4 Minuten zum unten stehenden Thema. Gehen Sie auf alle Leitpunkte ein und entwickeln Sie eine eigene, begründete Position. Im Anschluss stellen Ihnen die Prüfenden einige Fragen zu Ihrem Vortrag.",
      speak: {
        prompt: "Thema: Wissenschaft und Öffentlichkeit – sind Forschende verpflichtet, ihre Arbeit allgemeinverständlich zu erklären?",
        points: [
          "Erläutern Sie, warum Wissenschaftskommunikation heute an Bedeutung gewonnen hat.",
          "Gehen Sie auf Chancen und Risiken ein, wenn Forschende sich an die breite Öffentlichkeit wenden.",
          "Erörtern Sie, wer die Verantwortung für gute Wissenschaftskommunikation tragen sollte.",
          "Entwickeln Sie eine eigene, begründete Position.",
        ],
        examinerQuestions: [
          "Sollte man Forschungsgelder daran knüpfen, dass die Ergebnisse auch öffentlich vermittelt werden?",
          "Wie lässt sich verhindern, dass vereinfachte Aussagen in den Medien verzerrt werden?",
          "Welche Rolle spielt dabei der Wissenschaftsjournalismus?",
        ],
        prepMinutes: 15,
        speakMinutes: 4,
        modelAnswer:
          "Sehr geehrte Damen und Herren,\n\n" +
          "während der Pandemie konnte man erleben, wie Virologinnen und Epidemiologen gleichsam über Nacht zu öffentlichen Figuren wurden. Ihre Einschätzungen wurden in Talkshows diskutiert und in sozialen Netzwerken zerpflückt, manche von ihnen erhielten sogar Drohungen. Spätestens seitdem stellt sich die Frage, die ich in den Mittelpunkt meines Vortrags stellen möchte: Sind Forschende verpflichtet, ihre Arbeit der Öffentlichkeit verständlich zu erklären – und wenn ja, um welchen Preis?\n\n" +
          "Ich werde zunächst darlegen, warum Wissenschaftskommunikation so wichtig geworden ist, dann auf ihre Risiken eingehen und schließlich eine eigene Position entwickeln.\n\n" +
          "Für eine Pflicht zur Kommunikation spricht zunächst ein ganz grundsätzliches Argument: Ein großer Teil der Forschung wird mit öffentlichen Mitteln finanziert. Die Gesellschaft hat also einen berechtigten Anspruch darauf zu erfahren, was mit ihrem Geld geschieht. Hinzu kommt, dass viele politische Entscheidungen, etwa in der Klima- oder Gesundheitspolitik, auf wissenschaftlichen Erkenntnissen beruhen. In einer Demokratie müssen Bürgerinnen und Bürger diese Entscheidungen nachvollziehen können, sonst wächst das Misstrauen – und mit ihm die Anfälligkeit für Desinformation.\n\n" +
          "Andererseits wäre es naiv, die Risiken zu übersehen. Wissenschaft lebt von der Vorläufigkeit: Ergebnisse werden überprüft, korrigiert, mitunter verworfen. Die Öffentlichkeit dagegen erwartet häufig eindeutige Antworten. Wer komplexe Befunde in drei Sätze zwängt, läuft Gefahr, sie zu verfälschen. Und wenn eine Forscherin ihre Einschätzung später revidiert, wie es zum Wesen der Wissenschaft gehört, wird ihr das nicht selten als Wankelmut ausgelegt. Ein weiteres Problem ist die Zeit: Wer Vorträge hält, Interviews gibt und Fragen in sozialen Medien beantwortet, forscht in dieser Zeit nicht. Und im akademischen Betrieb, in dem Karrieren noch immer vor allem an Veröffentlichungen gemessen werden, wird dieses Engagement kaum honoriert.\n\n" +
          "Was folgt daraus? Eine individuelle Pflicht für jede einzelne Forscherin halte ich für wenig sinnvoll. Nicht jeder brillante Physiker ist ein guter Erzähler, und das muss er auch nicht sein. Wohl aber sehe ich eine institutionelle Verantwortung: Hochschulen und Forschungseinrichtungen sollten Kommunikation als Teil ihres Auftrags begreifen, Forschende darin schulen und ihnen dafür Zeit einräumen. Und sie sollten diejenigen schützen, die sich öffentlich exponieren und dafür angefeindet werden. Zugleich müssen wir als Öffentlichkeit lernen, mit Unsicherheit umzugehen. Dass die Wissenschaft ihre Einschätzung ändert, ist kein Zeichen von Schwäche, sondern ihr eigentliches Prinzip.\n\n" +
          "Lassen Sie mich zusammenfassen: Die Wissenschaft schuldet der Gesellschaft Transparenz, aber nicht jede einzelne Forscherin schuldet ihr einen Auftritt in einer Talkshow. Entscheidend ist, dass die Institutionen Rahmenbedingungen schaffen, unter denen gute Kommunikation möglich ist und anerkannt wird. Vielen Dank.\n\n" +
          "– Sollte man Forschungsgelder daran knüpfen, dass die Ergebnisse auch öffentlich vermittelt werden?\n" +
          "– In gewissem Maße geschieht das ja bereits, viele Förderprogramme verlangen inzwischen einen Plan für die Kommunikation. Das halte ich grundsätzlich für richtig, solange daraus keine reine Pflichtübung wird. Eine lieblos gestaltete Projektwebsite, die niemand liest, ist niemandem eine Hilfe. Sinnvoller wäre es, Mittel ausdrücklich für Kommunikation vorzusehen, sodass Projekte dafür auch Fachleute einbinden können.",
      },
    },
    {
      title: "Teil 2: Diskussion",
      instructions:
        "Diskutieren Sie mit den Prüfenden (etwa 6 Minuten) über das unten stehende Thema. Die Aussagen dienen als Ausgangspunkt. Vertreten Sie Ihren Standpunkt, gehen Sie auf Gegenargumente ein und versuchen Sie, Ihr Gegenüber zu überzeugen.",
      speak: {
        prompt: "Ein bedingungsloses Grundeinkommen für alle – Utopie oder Notwendigkeit?",
        material: [
          {
            label: "Aussagen",
            body:
              "„Ein Grundeinkommen befreit die Menschen von existenzieller Angst. Erst dann können sie wirklich frei entscheiden, wie sie arbeiten und leben wollen.“\n\n" +
              "„Wer soll das bezahlen? Und wer macht noch die unangenehmen Jobs, wenn das Geld ohnehin aufs Konto kommt?“\n\n" +
              "„Wenn Maschinen immer mehr Arbeit übernehmen, brauchen wir neue Wege, Einkommen und Erwerbsarbeit voneinander zu trennen.“",
          },
        ],
        points: [
          "Einen klaren Standpunkt beziehen und differenziert begründen.",
          "Auf Einwände der Prüfenden eingehen, sie aufgreifen, entkräften oder teilweise gelten lassen.",
          "Abstrakte Argumente mit konkreten Beispielen veranschaulichen.",
          "Die Diskussion aktiv mitgestalten: nachfragen, präzisieren, zusammenfassen.",
        ],
        examinerQuestions: [
          "Wer würde denn unter diesen Bedingungen noch nachts im Krankenhaus putzen?",
          "Ist ein solches Modell überhaupt finanzierbar?",
          "Die Versuche, die es gab, waren doch viel zu klein und zu kurz, um etwas zu beweisen, oder?",
          "Gäbe es nicht gezieltere Wege, Armut zu bekämpfen?",
        ],
        prepMinutes: 0,
        speakMinutes: 6,
        modelAnswer:
          "– Ich stehe der Idee eines bedingungslosen Grundeinkommens grundsätzlich offen gegenüber, allerdings nicht aus den Gründen, die man meistens hört. Mich überzeugt weniger die Vision, dass dann alle Menschen ihrer wahren Berufung folgen, als vielmehr ein nüchternes Argument: Unser heutiges System der Grundsicherung ist bürokratisch, oft demütigend, und es erreicht viele Berechtigte gar nicht, weil sie sich schämen oder an den Formularen scheitern.\n" +
          "– Wer würde denn unter diesen Bedingungen noch nachts im Krankenhaus putzen?\n" +
          "– Das ist ein ernstzunehmender Einwand, aber ich würde ihn umdrehen. Wenn niemand diese Arbeit mehr für den heutigen Lohn machen will, dann sagt das vor allem etwas über den Lohn. Ein Grundeinkommen würde die Verhandlungsposition gerade der Menschen stärken, die heute schlecht bezahlte und belastende Arbeit leisten. Die Arbeit würde dadurch teurer, ja, aber vielleicht auch angemessener bezahlt.\n" +
          "– Ist ein solches Modell überhaupt finanzierbar?\n" +
          "– Hier muss ich zugeben, dass ich keine fertige Rechnung präsentieren kann, und ich misstraue jedem, der das auf die Schnelle tut. Es hängt entscheidend von der Höhe ab und davon, welche Sozialleistungen es ersetzen würde. Ein Grundeinkommen auf dem Niveau eines guten Gehalts wäre sicher nicht bezahlbar. Ein bescheidener Sockel, der über die Steuer wieder teilweise zurückfließt, wenn man gut verdient, ist dagegen durchaus denkbar.\n" +
          "– Die Versuche, die es gab, waren doch viel zu klein und zu kurz, um etwas zu beweisen, oder?\n" +
          "– Da gebe ich Ihnen recht, und das ist ein methodisches Problem. Wer weiß, dass das Geld in zwei Jahren wieder wegfällt, verhält sich anders als jemand, der lebenslang damit rechnen kann. Immerhin lässt sich festhalten, dass die Befürchtung, die Leute würden massenhaft aufhören zu arbeiten, in diesen Versuchen nicht bestätigt wurde.\n" +
          "– Gäbe es nicht gezieltere Wege, Armut zu bekämpfen?\n" +
          "– Gezielter vielleicht, aber eben auch aufwendiger und stigmatisierender. Mein Vorschlag wäre ein Mittelweg: zunächst die bestehenden Leistungen radikal vereinfachen und automatisch auszahlen, statt sie beantragen zu lassen. Wenn sich das bewährt, kann man über den nächsten Schritt sprechen. Ich glaube, darauf könnten sich sogar Skeptiker einlassen.",
      },
    },
  ],
};
