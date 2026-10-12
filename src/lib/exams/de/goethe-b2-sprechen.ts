// Synced from cheneygross-afk/lengo:src/lib/exams/de/goethe-b2-sprechen.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// Goethe-Zertifikat B2 practice exam -- Sprechen.
// About 15 minutes for a pair of candidates, after 15 minutes of
// preparation, 2 parts as in the real exam: a talk on one of two topics
// (about 4 minutes per candidate, then questions from the partner and
// the examiner) and a discussion of a controversial question with the
// partner (about 5 minutes). The examiner's lines stand in for the
// partner.
export const GOETHE_B2_SPRECHEN: ExamPaper = {
  id: "sprechen",
  kind: "speaking",
  title: "Sprechen",
  minutes: 15,
  prepMinutes: 15,
  group: 2,
  tasks: [
    {
      title: "Teil 1: Vortrag halten",
      instructions:
        "Wählen Sie ein Thema (Thema 1 oder Thema 2) und halten Sie einen kurzen Vortrag. Strukturieren Sie Ihren Vortrag mit einer Einleitung, einem Hauptteil und einem Schluss. Sprechen Sie frei; Sie dürfen Ihre Notizen benutzen. Danach stellen Ihnen Ihr Partner / Ihre Partnerin und die Prüfenden Fragen. Dauer: etwa 4 Minuten.",
      instructionsEn:
        "Choose topic 1 or 2 and give a short talk with an introduction, a main part and a conclusion, speaking freely from your notes. Afterwards your partner and the examiners ask you questions. About 4 minutes. The model answer covers Thema 1.",
      speak: {
        prompt: "Halten Sie einen Vortrag zu Thema 1 oder Thema 2. Gehen Sie auf alle Punkte ein.",
        material: [
          {
            label: "Thema 1",
            title: "Wohnen im Alter",
            body:
              "Beschreiben Sie verschiedene Wohnformen für ältere Menschen (zum Beispiel bei der Familie).\n" +
              "Beschreiben Sie eine Wohnform genauer.\n" +
              "Nennen Sie Vor- und Nachteile dieser Wohnform und bewerten Sie diese.",
          },
          {
            label: "Thema 2",
            title: "Weiterbildung im Beruf",
            body:
              "Beschreiben Sie verschiedene Möglichkeiten, sich beruflich weiterzubilden (zum Beispiel ein Abendkurs).\n" +
              "Beschreiben Sie eine Möglichkeit genauer.\n" +
              "Nennen Sie Vor- und Nachteile dieser Möglichkeit und bewerten Sie diese.",
          },
        ],
        points: [
          "Einleitung: Thema nennen und den Aufbau des Vortrags ankündigen.",
          "Mehrere Formen oder Möglichkeiten beschreiben.",
          "Eine davon genauer beschreiben.",
          "Vor- und Nachteile nennen und bewerten.",
          "Schluss: Fazit und eigene Meinung.",
          "Danach: Fragen des Partners und der Prüfenden beantworten.",
        ],
        examinerQuestions: [
          "Wie ist das in Ihrem Heimatland: Leben ältere Menschen dort eher bei ihren Familien?",
          "Wer sollte solche Wohnprojekte Ihrer Meinung nach bezahlen?",
          "Könnten Sie sich vorstellen, selbst in einem Mehrgenerationenhaus zu wohnen?",
        ],
        prepMinutes: 10,
        speakMinutes: 4,
        modelAnswer:
          "Ich möchte heute über das Thema „Wohnen im Alter“ sprechen. Die Menschen werden immer älter, und viele fragen sich, wo und wie sie leben möchten, wenn sie nicht mehr ganz selbstständig sind. Ich werde zuerst verschiedene Wohnformen vorstellen, dann eine davon genauer beschreiben und schließlich Vor- und Nachteile abwägen.\n\n" +
          "Es gibt im Wesentlichen vier Möglichkeiten. Viele ältere Menschen bleiben so lange wie möglich in ihrer eigenen Wohnung, oft mit Unterstützung durch einen Pflegedienst. Andere ziehen zu ihren Kindern. Eine dritte Möglichkeit ist das Seniorenheim, wo man rund um die Uhr betreut wird. Und seit einigen Jahren gibt es immer mehr Mehrgenerationenhäuser.\n\n" +
          "Diese letzte Form möchte ich genauer beschreiben. In einem Mehrgenerationenhaus leben Familien, Singles und ältere Menschen unter einem Dach, aber jeder hat seine eigene Wohnung. Es gibt Gemeinschaftsräume und einen gemeinsamen Garten, und man hilft sich gegenseitig: Die Rentnerin aus dem Erdgeschoss passt nachmittags auf die Kinder auf, und dafür bringt ihr die junge Familie die Einkäufe mit.\n\n" +
          "Was sind die Vorteile? Vor allem ist man nicht einsam. Einsamkeit ist im Alter ein großes Problem, und sie kann krank machen. Außerdem bleibt man aktiv und fühlt sich gebraucht. Auch für die jüngeren Bewohner ist das ein Gewinn, weil sie im Alltag Unterstützung bekommen.\n\n" +
          "Es gibt aber auch Nachteile. Wenn jemand schwer pflegebedürftig wird, reicht die Nachbarschaftshilfe nicht mehr aus. Dann braucht man doch einen professionellen Pflegedienst oder ein Heim. Außerdem muss man bereit sein, Kompromisse zu machen und sich in eine Gemeinschaft einzufügen. Das liegt nicht jedem. Und solche Projekte gibt es bisher vor allem in Großstädten, die Wartelisten sind lang.\n\n" +
          "Wenn ich das alles abwäge, halte ich das Mehrgenerationenhaus trotzdem für eine sehr gute Lösung, zumindest solange man noch einigermaßen fit ist. Damit komme ich zum Schluss: Es gibt nicht die eine richtige Wohnform für alle. Wichtig ist, dass man sich rechtzeitig Gedanken macht, solange man noch selbst entscheiden kann. Vielen Dank fürs Zuhören.\n\n" +
          "– Wie ist das in Ihrem Heimatland: Leben ältere Menschen dort eher bei ihren Familien?\n– In Großbritannien eher nicht. Die meisten bleiben in ihrem eigenen Haus, solange es geht, und ziehen dann in ein Heim. Bei Familien, die aus Südasien stammen, ist es allerdings oft anders: Da leben drei Generationen ganz selbstverständlich zusammen.\n– Wer sollte solche Wohnprojekte bezahlen?\n– Ich finde, die Städte sollten Grundstücke günstig zur Verfügung stellen. Das wäre auf lange Sicht billiger als viele neue Heimplätze.",
      },
    },
    {
      title: "Teil 2: Diskussion führen",
      instructions:
        "Sie diskutieren mit Ihrem Partner / Ihrer Partnerin die folgende Frage. Tauschen Sie Ihre Standpunkte und Argumente aus. Reagieren Sie auf die Argumente Ihres Partners / Ihrer Partnerin. Fassen Sie am Ende zusammen: Sind Sie dafür oder dagegen? Die Stichwörter können Ihnen helfen. Dauer: etwa 5 Minuten.",
      instructionsEn:
        "Discuss the question with your partner: exchange views and arguments, respond to theirs, and at the end sum up whether you're for or against. The key words can help. About 5 minutes.",
      speak: {
        prompt: "Sollte in Städten überall Tempo 30 gelten?",
        material: [
          {
            label: "Stichwörter",
            body: "Sicherheit\nLärm\nUmwelt\nZeit und Verkehrsfluss",
          },
        ],
        points: [
          "Sagen Sie Ihren Standpunkt und begründen Sie ihn.",
          "Reagieren Sie auf die Argumente Ihres Partners / Ihrer Partnerin: zustimmen, widersprechen, einschränken.",
          "Bringen Sie Beispiele.",
          "Fassen Sie am Ende zusammen, ob Sie dafür oder dagegen sind.",
        ],
        examinerQuestions: [
          "Ich halte Tempo 30 in der ganzen Stadt für übertrieben. Auf großen Straßen muss der Verkehr fließen.",
          "Und was ist mit Bussen und Rettungswagen? Die brauchen dann länger.",
          "Für Pendler bedeutet das jeden Tag mehr Zeit im Auto.",
          "Wer soll das überhaupt kontrollieren?",
          "Fassen Sie bitte zusammen: Sind Sie dafür oder dagegen?",
        ],
        prepMinutes: 5,
        speakMinutes: 5,
        modelAnswer:
          "– Ich bin eindeutig für Tempo 30 in der Stadt. Der wichtigste Grund ist für mich die Sicherheit. Bei Tempo 30 ist der Bremsweg viel kürzer, und wenn doch etwas passiert, sind die Verletzungen deutlich weniger schwer. Gerade für Kinder und ältere Menschen macht das einen riesigen Unterschied.\n" +
          "– Ich halte Tempo 30 in der ganzen Stadt für übertrieben. Auf großen Straßen muss der Verkehr fließen.\n" +
          "– Da gebe ich Ihnen teilweise recht. Auf breiten Hauptstraßen ohne Wohnhäuser könnte man vielleicht bei fünfzig bleiben. Aber überall dort, wo Menschen wohnen oder wo Schulen und Geschäfte sind, sollte Tempo 30 gelten. Dazu kommt der Lärm: Bei Tempo 30 ist es spürbar leiser, und die Anwohner schlafen besser.\n" +
          "– Und was ist mit Bussen und Rettungswagen? Die brauchen dann länger.\n" +
          "– Das ist ein wichtiger Punkt. Rettungswagen dürfen im Einsatz ohnehin schneller fahren. Bei den Bussen sehe ich das Problem, aber in der Stadt verliert man die meiste Zeit sowieso an Ampeln und im Stau, nicht durch die Höchstgeschwindigkeit. Wenn man den Bussen eigene Spuren gibt, wären sie sogar schneller als heute.\n" +
          "– Für Pendler bedeutet das jeden Tag mehr Zeit im Auto.\n" +
          "– Meistens geht es um ein, zwei Minuten. Ich finde, das ist ein kleiner Preis dafür, dass die Straßen sicherer und ruhiger werden. Und vielleicht steigt dann der eine oder andere aufs Fahrrad oder auf die Bahn um, was auch gut für die Umwelt wäre.\n" +
          "– Wer soll das überhaupt kontrollieren?\n" +
          "– Natürlich braucht man Kontrollen, vor allem am Anfang. Aber noch wichtiger ist es, die Straßen so umzubauen, dass man gar nicht schnell fahren will, zum Beispiel mit schmaleren Fahrbahnen und mehr Bäumen.\n" +
          "– Fassen Sie bitte zusammen: Sind Sie dafür oder dagegen?\n" +
          "– Ich bin dafür. Ich verstehe, dass Sie sich Sorgen um den Verkehrsfluss machen, und auf großen Durchgangsstraßen kann man Ausnahmen machen. Aber in Wohngebieten überwiegen für mich ganz klar die Vorteile: mehr Sicherheit, weniger Lärm und bessere Luft.",
      },
    },
  ],
};
