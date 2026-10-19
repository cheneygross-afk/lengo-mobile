// Synced from cheneygross-afk/lengo:src/lib/exams/de/goethe-c2-schreiben.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// Goethe-Zertifikat C2 (Großes Deutsches Sprachdiplom) practice exam --
// Schreiben. 80 minutes, 2 parts, modelled on the real exam's writing
// module: an argued text of about 350 words on one of two topics, then
// rewriting a colloquial text in a formal register without losing any
// information. All prompts and model answers are original.
const RUBRIC_TEIL_1 = [
  "Treats every guiding point in depth and with nuance, not as a checklist, and keeps to the text type asked for (an essay for the arts pages of a weekly paper, with a heading).",
  "Builds a coherent argument: presents opposing positions fairly, weighs them, and reaches a clearly reasoned, original conclusion.",
  "Structures the text with a clear introduction, paragraphs that each develop one idea, and a conclusion that does more than repeat.",
  "Uses a wide, precise vocabulary and idiomatic expressions (Funktionsverbgefüge, nominal style where it fits) at native-like level, with a consistent, formal written register.",
  "Handles complex syntax with ease (participle constructions, Konjunktiv I and II, concessive and conditional clauses) with almost no errors.",
];

export const GOETHE_C2_SCHREIBEN: ExamPaper = {
  id: "schreiben",
  kind: "writing",
  title: "Schreiben",
  minutes: 80,
  group: 2,
  tasks: [
    {
      title: "Teil 1",
      instructions:
        "Wählen Sie eines der beiden Themen. Schreiben Sie einen Text von circa 350 Wörtern für das Feuilleton einer Wochenzeitung. Behandeln Sie alle Leitpunkte, und zwar in einer sinnvollen Reihenfolge. Achten Sie auf einen klaren Aufbau, eine angemessene Sprache und eine überzeugende Argumentation. Sie haben dafür etwa 65 Minuten Zeit.",
      write: [
        {
          label: "Thema A",
          prompt:
            "Kunst und Moral: Soll man das Werk von Künstlerinnen und Künstlern meiden, die sich schweres Fehlverhalten zuschulden kommen ließen?\n– Stellen Sie die gegensätzlichen Positionen in dieser Debatte dar.\n– Unterscheiden Sie zwischen dem privaten Umgang mit einem Werk und seiner öffentlichen Präsentation.\n– Welche Verantwortung haben Museen, Theater oder Festivals?\n– Nehmen Sie begründet Stellung.",
          minWords: 300,
          maxWords: 450,
          rubric: RUBRIC_TEIL_1,
          modelAnswer:
            "Muss man Werk und Künstler trennen?\n\n" +
            "Kaum eine Frage wird im Kulturbetrieb derzeit so leidenschaftlich diskutiert wie diese: Darf man einen Film noch genießen, ein Buch noch empfehlen, wenn man weiß, dass sein Urheber sich schwerer Verfehlungen schuldig gemacht hat? Die Antworten fallen erwartungsgemäß gegensätzlich aus.\n\n" +
            "Die eine Seite beruft sich auf ein bewährtes Prinzip: Ein Kunstwerk löst sich, sobald es veröffentlicht ist, von seinem Schöpfer und muss aus sich selbst heraus beurteilt werden. Wer anfinge, Werke nach dem Lebenswandel ihrer Urheber zu sortieren, müsste ganze Regalmeter aus den Bibliotheken entfernen; kaum ein Klassiker hielte einer moralischen Prüfung stand. Und wer entschiede überhaupt, welches Vergehen schwer genug wiegt? Die Gegenseite hält dem entgegen, dass diese Trennung bei lebenden Künstlern eine Fiktion sei. Wer heute eine Eintrittskarte kauft, finanziert den Urheber unmittelbar mit und verschafft ihm Ansehen, das dieser womöglich nutzt, um weiteren Schaden anzurichten.\n\n" +
            "Mir scheint, dass beide Positionen einen wahren Kern haben, aber eine wichtige Unterscheidung übersehen: die zwischen dem privaten Umgang mit einem Werk und der öffentlichen Ehrung seines Urhebers. Ob ich ein Album weiterhin höre, ist eine Frage meines Gewissens, und niemand sollte mir darin Vorschriften machen. Ob ein städtisches Festival denselben Musiker als Ehrengast einlädt, ist dagegen eine öffentliche Entscheidung, für die die Veranstalter Rechenschaft schuldig sind. Hier halte ich Zurückhaltung für geboten, zumal wenn die Betroffenen noch leben und jede Ehrung als Hohn empfinden müssen.\n\n" +
            "Für Museen, Theater und Schulen sehe ich eine dritte Möglichkeit, die mir klüger erscheint als Verbannung oder Verschweigen: die Kontextualisierung. Ein Gemälde kann hängen bleiben, wenn daneben erläutert wird, unter welchen Umständen es entstanden ist und was über seinen Maler bekannt ist. So wird das Publikum nicht bevormundet, sondern in die Lage versetzt, sich selbst ein Urteil zu bilden. Eine Ausstellung, die die Biografie eines umstrittenen Künstlers verschweigt, verschenkt zudem die Gelegenheit zu einer Debatte, die sich ohnehin nicht vermeiden lässt.\n\n" +
            "Werk und Künstler vollständig zu trennen, ist also ebenso unmöglich, wie sie vollständig gleichzusetzen. Gefragt ist Urteilskraft – und die Bereitschaft, die unbequeme Tatsache auszuhalten, dass Großartiges auch von fragwürdigen Menschen geschaffen werden kann.",
        },
        {
          label: "Thema B",
          prompt:
            "Mehr als Broterwerb? Viele Menschen erwarten heute, dass ihre Arbeit „sinnvoll“ ist.\n– Wie haben sich die Erwartungen an die Arbeit verändert?\n– Welche Gründe gibt es für diesen Wandel?\n– Welche Schattenseiten oder Gefahren hat der Anspruch auf sinnvolle Arbeit?\n– Nehmen Sie begründet Stellung.",
          minWords: 300,
          maxWords: 450,
          rubric: RUBRIC_TEIL_1,
          modelAnswer:
            "Mehr als Broterwerb?\n\n" +
            "„Ich will etwas Sinnvolles tun“ – diesen Satz hört man heute auffallend oft, besonders von jüngeren Menschen, die vor der Berufswahl stehen oder ihre Stelle wechseln möchten. Für die Generation ihrer Großeltern hätte er vermutlich befremdlich geklungen. Arbeit war für sie in erster Linie Pflicht und Existenzsicherung; Sinn suchte man, wenn überhaupt, in der Familie, im Glauben oder im Verein.\n\n" +
            "Dass sich die Erwartungen gewandelt haben, hat nachvollziehbare Gründe. Zum einen ist der materielle Wohlstand in vielen Ländern so weit gestiegen, dass das bloße Auskommen nicht mehr im Vordergrund steht. Zum anderen haben traditionelle Sinnstifter wie Kirchen oder Parteien an Bindungskraft verloren; die Arbeit, mit der wir einen Großteil unserer wachen Zeit verbringen, soll diese Lücke füllen. Nicht zuletzt stärkt der Fachkräftemangel die Verhandlungsposition vieler Beschäftigter: Wer gebraucht wird, kann Ansprüche stellen.\n\n" +
            "So berechtigt der Wunsch nach sinnvoller Arbeit ist, so hat er doch auch seine Schattenseiten. Gerade in sozialen und kulturellen Berufen wird er nicht selten ausgenutzt. Wer mit Leidenschaft Kinder betreut oder Ausstellungen kuratiert, soll sich offenbar mit einem bescheidenen Gehalt und befristeten Verträgen zufriedengeben – schließlich wird er ja „mit Sinn bezahlt“. Hinzu kommt eine Überforderung des Einzelnen: Wird der Beruf zur Hauptquelle der eigenen Identität, wiegt jede Kündigung, jede Kränkung im Büro doppelt schwer. Und schließlich droht eine neue Form der Ungleichheit: Wer sich die Suche nach Sinn leisten kann, verfügt meist über ein finanzielles Polster; für viele andere bleibt sie ein Luxus.\n\n" +
            "Ich halte es für einen Fortschritt, dass Menschen mehr von ihrer Arbeit erwarten als ein Gehalt. Allerdings plädiere ich dafür, den Begriff des Sinns nicht zu überhöhen. Sinnvoll kann auch eine Tätigkeit sein, die niemand bewundert: die der Busfahrerin, die jeden Morgen Hunderte Menschen sicher zur Arbeit bringt, oder die des Buchhalters, ohne den kein Verein überleben würde. Und eine Arbeit muss nicht das ganze Leben ausfüllen, um ein gutes Leben zu ermöglichen.\n\n" +
            "Vielleicht wäre es an der Zeit, die Frage anders zu stellen: nicht „Wie finde ich die eine sinnvolle Arbeit?“, sondern „Wie gestalte ich ein Leben, in dem die Arbeit einen angemessenen Platz hat?“",
        },
      ],
    },
    {
      title: "Teil 2",
      instructions:
        "Formulieren Sie den unten stehenden Text so um, dass er als offizielle Mitteilung veröffentlicht werden kann. Alle Informationen müssen erhalten bleiben. Ersetzen Sie umgangssprachliche Ausdrücke und formulieren Sie persönliche Kommentare sachlich. Sie haben dafür etwa 15 Minuten Zeit.",
      write: [
        {
          prompt:
            "Sie arbeiten in der Stadtbücherei. Ein Kollege hat für die Website der Bücherei den folgenden Entwurf geschrieben, der viel zu umgangssprachlich ist. Schreiben Sie daraus eine sachliche, höfliche Mitteilung an die Nutzerinnen und Nutzer der Bücherei.",
          input: {
            text: {
              label: "Entwurf",
              title: "Infos für alle",
              body:
                "Hallo Leute,\n\nkurze Info: Ab März gibt's bei uns ein paar Änderungen. Samstags ist die Bude länger offen, nämlich bis 18 Uhr statt bis 14 Uhr. Dafür machen wir montags erst mittags um 12 auf – vormittags kommt da eh keiner.\n\nAußerdem schmeißen wir die Mahngebühren für Kinderbücher raus, die waren sowieso für alle total nervig.\n\nDie Rückgabebox draußen ist leider schon wieder kaputt, irgendwer hat da Kaffee reingekippt (echt jetzt?!). Also bitte die Sachen erst mal drinnen an der Theke abgeben, bis das Ding repariert ist.\n\nUnd noch was: Wir suchen Leute, die beim Lesefest im Mai mit anpacken. Wer Bock hat, sagt einfach an der Theke Bescheid.\n\nDanke euch und bis bald!\nEuer Bücherei-Team",
            },
          },
          minWords: 150,
          maxWords: 250,
          rubric: [
            "Keeps every piece of information: new Saturday and Monday hours (with the reason), no more late fees for children's books, the broken return box (again, damaged by a drink) and where to return items meanwhile, the call for volunteers for the reading festival in May and how to sign up.",
            "Replaces every colloquial word with a neutral or formal one (\"Bude\" → \"Bücherei\", \"rausschmeißen\" → \"abschaffen\" / \"nicht mehr erheben\", \"Bock haben\" → \"Interesse haben\", \"mit anpacken\" → \"mithelfen\" / \"unterstützen\").",
            "Turns the personal remarks (\"echt jetzt?!\", \"total nervig\", \"vormittags kommt da eh keiner\") into objective statements or leaves out the emotion without losing the fact behind it.",
            "Uses the conventions of an official notice: a heading, a formal greeting (\"Liebe Leserinnen und Leser\" / \"Sehr geehrte Nutzerinnen und Nutzer\"), \"Sie\" with capitals, a courteous close.",
            "Shows command of formal written style: nominal phrases, passive and impersonal constructions (\"wird … erhoben\", \"ist … beschädigt worden\"), precise connectors (\"darüber hinaus\", \"bis zu\", \"während\").",
          ],
          modelAnswer:
            "Änderungen ab März\n\n" +
            "Liebe Leserinnen und Leser,\n\n" +
            "ab März ändern sich die Öffnungszeiten unserer Bücherei: Samstags sind wir künftig bis 18 Uhr statt bis 14 Uhr für Sie da. Montags öffnen wir dagegen erst um 12 Uhr, da die Nachfrage am Vormittag erfahrungsgemäß sehr gering ist.\n\n" +
            "Darüber hinaus freuen wir uns, Ihnen mitteilen zu können, dass für Kinderbücher künftig keine Mahngebühren mehr erhoben werden. Damit möchten wir den Besuch der Bücherei für Familien unkomplizierter gestalten.\n\n" +
            "Leider ist die Rückgabebox vor dem Eingang erneut beschädigt worden, nachdem jemand ein Getränk hineingegossen hat. Bis zu ihrer Reparatur bitten wir Sie, entliehene Medien während der Öffnungszeiten an der Ausleihtheke zurückzugeben. Wir danken Ihnen für Ihr Verständnis.\n\n" +
            "Für unser Lesefest im Mai suchen wir außerdem ehrenamtliche Helferinnen und Helfer. Wenn Sie Interesse haben, uns zu unterstützen, wenden Sie sich bitte an unser Team an der Ausleihtheke.\n\n" +
            "Wir freuen uns auf Ihren nächsten Besuch.\n\n" +
            "Ihr Team der Stadtbücherei",
        },
      ],
    },
  ],
};
