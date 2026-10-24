// Synced from cheneygross-afk/lengo:src/lib/exams/de/goethe-c1-hoeren.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// Goethe-Zertifikat C1 practice exam -- Hören.
// About 40 minutes, 3 parts, 22 items, modelled on the real exam's
// listening module: an information call heard once (the real exam has
// candidates take notes; here each note is a multiple-choice question),
// a radio interview heard twice, and part of a talk heard once. All
// recordings are original scripts read by text-to-speech.
export const GOETHE_C1_HOEREN: ExamPaper = {
  id: "hoeren",
  kind: "listening",
  title: "Hören",
  minutes: 40,
  group: 1,
  tasks: [
    {
      title: "Teil 1",
      instructions:
        "Sie hören ein Telefongespräch. Sie hören den Text einmal. Lesen Sie zuerst die Aufgaben 1–7. Wählen Sie beim Hören die richtige Lösung: a, b oder c.",
      audio: [
        {
          label: "Anruf bei der Volkshochschule",
          plays: 1,
          lines: [
            {
              voice: "m",
              text: "Volkshochschule Lindenau, Bereich berufliche Bildung, Sie sprechen mit Herrn Kessler. Was kann ich für Sie tun?",
            },
            {
              voice: "f",
              text: "Guten Tag, mein Name ist Hoffmann. Ich interessiere mich für Ihren Kurs „Projektmanagement kompakt“ und hätte ein paar Fragen dazu.",
            },
            {
              voice: "m",
              text: "Gern. Den Kurs gibt es in zwei Varianten: einmal als Abendkurs mit zehn Terminen, jeweils dienstags, und einmal als Wochenendseminar an zwei Wochenenden im November.",
            },
            {
              voice: "f",
              text: "Dienstags haben wir leider immer Teamsitzung, und die zieht sich oft bis in den Abend. Dann käme eher das Wochenende in Frage. Was kostet das denn?",
            },
            {
              voice: "m",
              text: "Das Wochenendseminar kostet zweihundertachtzig Euro, die Unterlagen sind im Preis enthalten. Wenn Ihr Arbeitgeber die Kosten übernimmt, stellen wir die Rechnung auch gern direkt auf die Firma aus.",
            },
            {
              voice: "f",
              text: "Das muss ich noch klären. Ich habe gelesen, dass man bei Ihnen auch einen Bildungsgutschein einlösen kann?",
            },
            {
              voice: "m",
              text: "Grundsätzlich ja, aber leider nicht für diesen Kurs, weil er nicht für die Förderung durch die Arbeitsagentur zugelassen ist. Unter bestimmten Voraussetzungen gibt das Land aber einen Zuschuss von fünfzig Prozent. Den müssen Sie allerdings beantragen, bevor der Kurs beginnt, nicht hinterher – das wird oft übersehen.",
            },
            {
              voice: "f",
              text: "Gut zu wissen. Und gibt es am Ende eine Prüfung?",
            },
            {
              voice: "m",
              text: "Eine Prüfung im eigentlichen Sinn nicht. Sie bearbeiten zwischen den beiden Wochenenden ein kleines Projekt aus Ihrem eigenen Arbeitsalltag und stellen es am letzten Tag vor. Dafür bekommen Sie dann ein Zertifikat der Volkshochschule.",
            },
            {
              voice: "f",
              text: "Das klingt praktisch. Brauche ich dafür einen eigenen Laptop?",
            },
            {
              voice: "m",
              text: "Ja, bitte bringen Sie einen mit. Wir arbeiten mit einem kostenlosen Planungsprogramm, das Sie vorher installieren sollten. Den Link schicken wir Ihnen mit der Anmeldebestätigung.",
            },
            {
              voice: "f",
              text: "Und wie viele Plätze sind noch frei?",
            },
            {
              voice: "m",
              text: "Im Moment noch fünf von vierzehn. Ich würde Ihnen empfehlen, sich bald zu entscheiden. Wenn Sie möchten, trage ich Sie jetzt vorläufig ein. Dann haben Sie eine Woche Zeit, um die Anmeldung zu bestätigen.",
            },
            {
              voice: "f",
              text: "Das wäre sehr nett, ja. Dann kann ich in Ruhe mit meiner Chefin sprechen.",
            },
          ],
        },
      ],
      items: [
        {
          n: 1,
          question: "Warum kommt der Abendkurs für Frau Hoffmann nicht in Frage?",
          options: [
            "Er ist teurer als das Wochenendseminar.",
            "Dienstags hat sie oft lange Besprechungen.",
            "Er ist schon ausgebucht.",
          ],
          answer: 1,
          explanation:
            "„Dienstags haben wir leider immer Teamsitzung, und die zieht sich oft bis in den Abend.“ Sich ziehen heißt hier: länger dauern als geplant. Über den Preis des Abendkurses wird nichts gesagt.",
        },
        {
          n: 2,
          question: "Was ist im Preis des Wochenendseminars enthalten?",
          options: ["Die Kursunterlagen.", "Die Übernachtung.", "Ein Laptop."],
          answer: 0,
          explanation: "„Die Unterlagen sind im Preis enthalten.“ Den Laptop muss sie selbst mitbringen.",
        },
        {
          n: 3,
          question: "Was gilt für den Bildungsgutschein?",
          options: [
            "Er deckt die Hälfte der Kursgebühr.",
            "Er muss vom Arbeitgeber beantragt werden.",
            "Er kann für diesen Kurs nicht eingelöst werden.",
          ],
          answer: 2,
          explanation:
            "„Grundsätzlich ja, aber leider nicht für diesen Kurs“, weil er nicht für die Förderung durch die Arbeitsagentur zugelassen ist. Die 50 % sind etwas anderes: der Zuschuss vom Land.",
        },
        {
          n: 4,
          question: "Wann muss der Zuschuss beantragt werden?",
          options: ["Nach dem Kurs.", "Vor Kursbeginn.", "Am ersten Kurstag."],
          answer: 1,
          explanation: "„Den müssen Sie allerdings beantragen, bevor der Kurs beginnt, nicht hinterher.“ Hinterher heißt: danach.",
        },
        {
          n: 5,
          question: "Was müssen die Teilnehmenden für das Zertifikat tun?",
          options: [
            "Eine schriftliche Prüfung ablegen.",
            "An allen zehn Terminen teilnehmen.",
            "Ein Projekt aus dem eigenen Berufsalltag vorstellen.",
          ],
          answer: 2,
          explanation:
            "Eine Prüfung „im eigentlichen Sinn“ gibt es nicht: Die Teilnehmenden bearbeiten zwischen den beiden Wochenenden ein Projekt aus ihrem eigenen Beruf und stellen es am letzten Tag vor.",
        },
        {
          n: 6,
          question: "Was soll Frau Hoffmann vor dem Kurs tun?",
          options: ["Eine Software installieren.", "Einen Laptop ausleihen.", "Ein Fachbuch lesen."],
          answer: 0,
          explanation: "„Wir arbeiten mit einem kostenlosen Planungsprogramm, das Sie vorher installieren sollten.“",
        },
        {
          n: 7,
          question: "Was vereinbaren die beiden am Ende?",
          options: [
            "Frau Hoffmann meldet sich sofort verbindlich an.",
            "Herr Kessler reserviert ihr einen Platz, den sie innerhalb einer Woche bestätigen muss.",
            "Frau Hoffmann ruft nach dem Gespräch mit ihrer Chefin noch einmal an.",
          ],
          answer: 1,
          explanation:
            "Er trägt ihren Namen vorläufig ein, und sie hat eine Woche Zeit, um zu bestätigen. Verbindlich ist das Gegenteil von vorläufig. Sie will zwar mit ihrer Chefin sprechen, ein zweiter Anruf wird aber nicht vereinbart.",
        },
      ],
    },
    {
      title: "Teil 2",
      instructions:
        "Sie hören ein Interview aus einer Radiosendung. Sie hören den Text zweimal. Lesen Sie zuerst die Aufgaben 8–17. Wählen Sie beim Hören die richtige Lösung: a, b oder c.",
      audio: [
        {
          label: "Interview: Die Rückkehr des Bibers",
          lines: [
            {
              voice: "f",
              text: "Willkommen bei „Natur und Umwelt“. Vor hundert Jahren war er in Deutschland fast ausgerottet, heute lebt er wieder an vielen Flüssen und Bächen: der Biber. Bei mir im Studio ist der Wildbiologe Jonas Reuter. Herr Reuter, wie kam es zu diesem Comeback?",
            },
            {
              voice: "m",
              text: "Zum einen durch strengen Schutz: Der Biber darf seit Jahrzehnten nicht mehr gejagt werden. Zum anderen hat man ihn ab den Sechzigerjahren an einigen Orten gezielt wieder angesiedelt. Den Rest hat er dann selbst erledigt. Biber sind erstaunlich anpassungsfähig. Sie leben heute nicht nur in Auwäldern, sondern auch an Gräben zwischen Feldern und sogar mitten in Städten.",
            },
            {
              voice: "f",
              text: "„Selbst erledigt“ – das klingt, als hätten Sie großen Respekt vor ihm.",
            },
            {
              voice: "m",
              text: "Den habe ich, ja. Der Biber ist eines der wenigen Tiere, die ihren Lebensraum aktiv umgestalten. Er baut Dämme, staut Bäche auf und schafft so Teiche und Feuchtgebiete. Davon profitieren unzählige andere Arten: Libellen, Amphibien, Fische, Vögel. Wir Biologen sprechen deshalb von einem Ökosystem-Ingenieur.",
            },
            {
              voice: "f",
              text: "Nicht alle sind darüber so begeistert. Gerade in der Landwirtschaft gibt es Ärger.",
            },
            {
              voice: "m",
              text: "Das ist verständlich, und man sollte es nicht kleinreden. Wenn ein Biberdamm einen Graben aufstaut, können Felder vernässen, und ein Landwirt verliert unter Umständen einen Teil seiner Ernte. Biber fällen außerdem Obstbäume oder graben Röhren in die Uferböschung, und wenn da ein Traktor drüberfährt, kann er einbrechen. Das ist nicht nur ärgerlich, sondern im Einzelfall auch gefährlich.",
            },
            {
              voice: "f",
              text: "Wie geht man damit um?",
            },
            {
              voice: "m",
              text: "In vielen Regionen gibt es inzwischen ehrenamtliche Biberberater, die bei Konflikten vermitteln. Oft helfen einfache Maßnahmen: Man schützt wertvolle Bäume mit einem Drahtgitter oder legt ein Rohr durch den Damm, damit das Wasser nicht über ein bestimmtes Niveau steigt. Erst wenn das alles nicht hilft, dürfen Biber in manchen Bundesländern mit Genehmigung auch entnommen werden – also gefangen oder getötet. Das ist umstritten, aber ich halte es in Ausnahmefällen für vertretbar.",
            },
            {
              voice: "f",
              text: "Ein überraschender Satz aus dem Mund eines Naturschützers.",
            },
            {
              voice: "m",
              text: "Vielleicht. Aber Artenschutz funktioniert auf Dauer nur, wenn die Menschen vor Ort ihn mittragen. Wenn ein Landwirt das Gefühl hat, dass man ihn mit seinem Schaden allein lässt, schadet das dem Biber mehr als jede Ausnahmegenehmigung.",
            },
            {
              voice: "f",
              text: "Man hört auch, der Biber könne uns im Klimawandel helfen. Ist da etwas dran?",
            },
            {
              voice: "m",
              text: "Durchaus. Biberteiche halten Wasser in der Landschaft zurück. In Trockenperioden geben sie es langsam ab, und bei Hochwasser bremsen sie den Abfluss. Aus Nordamerika gibt es sogar Studien, nach denen Bibergebiete Waldbrände besser überstehen, weil sie feucht bleiben. Man sollte das aber nicht übertreiben: Ein paar Biber ersetzen keinen Hochwasserschutz für eine Großstadt.",
            },
            {
              voice: "f",
              text: "Was wünschen Sie sich für die Zukunft?",
            },
            {
              voice: "m",
              text: "Vor allem mehr Platz an den Gewässern. Wenn man entlang der Bäche einen Streifen von zehn, zwanzig Metern der Natur überlassen würde, ließen sich die meisten Konflikte von vornherein vermeiden. Dafür müssten die Landwirte allerdings fair entschädigt werden. Und das ist am Ende keine biologische Frage mehr, sondern eine politische.",
            },
          ],
        },
      ],
      items: [
        {
          n: 8,
          question: "Wie erklärt Herr Reuter die Rückkehr des Bibers?",
          options: [
            "Allein durch gezielte Wiederansiedlungen.",
            "Durch saubere Flüsse und milde Winter.",
            "Durch Schutz, Wiederansiedlung und die Anpassungsfähigkeit des Tieres.",
          ],
          answer: 2,
          explanation:
            "Drei Gründe: strenger Schutz (keine Jagd), Wiederansiedlung ab den 1960er-Jahren und „Den Rest hat er dann selbst erledigt“: Biber sind sehr anpassungsfähig.",
        },
        {
          n: 9,
          question: "Wo leben Biber heute?",
          options: [
            "Fast nur noch in Auwäldern.",
            "Auch zwischen Feldern und in Städten.",
            "Vor allem in Naturschutzgebieten.",
          ],
          answer: 1,
          explanation: "„nicht nur in Auwäldern, sondern auch an Gräben zwischen Feldern und sogar mitten in Städten“.",
        },
        {
          n: 10,
          question: "Was meint er mit „Ökosystem-Ingenieur“?",
          options: [
            "Der Biber gestaltet Lebensräume, von denen viele andere Arten profitieren.",
            "Ingenieure bauen Dämme nach dem Vorbild des Bibers.",
            "Der Biber beschädigt technische Anlagen an Flüssen.",
          ],
          answer: 0,
          explanation:
            "Der Biber baut Dämme und schafft Teiche und Feuchtgebiete; „Davon profitieren unzählige andere Arten“. Deshalb nennen ihn Biologen einen Ökosystem-Ingenieur.",
        },
        {
          n: 11,
          question: "Welches Problem nennt er für die Landwirtschaft?",
          options: [
            "Biber fressen große Mengen Getreide.",
            "Felder werden nass, und unterhöhlte Ufer können unter Fahrzeugen einbrechen.",
            "Biber übertragen Krankheiten auf Nutztiere.",
          ],
          answer: 1,
          explanation:
            "Felder können vernässen, und ein Traktor, der über einen Bau im Ufer fährt, „kann einbrechen“.",
        },
        {
          n: 12,
          question: "Was tun die Biberberater?",
          options: [
            "Sie vermitteln bei Konflikten und schlagen einfache Lösungen vor.",
            "Sie fangen Biber und setzen sie an anderen Orten aus.",
            "Sie zahlen den Landwirten Entschädigungen aus.",
          ],
          answer: 0,
          explanation:
            "Ehrenamtliche Berater „vermitteln bei Konflikten“ und schlagen einfache Maßnahmen vor, etwa Drahtgitter um Bäume oder ein Rohr durch den Damm.",
        },
        {
          n: 13,
          question: "Wie steht Herr Reuter dazu, Biber zu entnehmen?",
          options: [
            "Er lehnt es grundsätzlich ab.",
            "Er möchte, dass es leichter erlaubt wird.",
            "Er hält es in Ausnahmefällen für vertretbar.",
          ],
          answer: 2,
          explanation:
            "„Das ist umstritten, aber ich halte es in Ausnahmefällen für vertretbar.“ Entnehmen ist das beschönigende Amtswort für Fangen oder Töten.",
        },
        {
          n: 14,
          question: "Wie begründet er diese Haltung?",
          options: [
            "Es gibt inzwischen zu viele Biber in Deutschland.",
            "Artenschutz braucht auf Dauer die Unterstützung der Menschen vor Ort.",
            "Die Landwirte haben ein gesetzliches Recht darauf.",
          ],
          answer: 1,
          explanation:
            "„Artenschutz funktioniert auf Dauer nur, wenn die Menschen vor Ort ihn mittragen.“ Ein Landwirt, der mit seinen Schäden allein gelassen wird, schadet dem Biber mehr als jede Ausnahme.",
        },
        {
          n: 15,
          question: "Wie können Biber im Klimawandel helfen?",
          options: [
            "Ihre Teiche halten Wasser zurück und bremsen bei Hochwasser den Abfluss.",
            "Sie schützen Großstädte vor Hochwasser.",
            "Sie vertreiben Arten, die unter Trockenheit leiden.",
          ],
          answer: 0,
          explanation:
            "Biberteiche halten Wasser in der Landschaft, geben es bei Trockenheit langsam ab und bremsen bei Hochwasser den Abfluss. Hochwasserschutz für Großstädte ist genau das, was Biber laut ihm nicht ersetzen können.",
        },
        {
          n: 16,
          question: "Welche Einschränkung macht er dabei?",
          options: [
            "Die Studien aus Nordamerika sind nicht auf Deutschland übertragbar.",
            "Biberteiche erhöhen die Waldbrandgefahr.",
            "Die Wirkung der Biber auf den Wasserhaushalt ist begrenzt.",
          ],
          answer: 2,
          explanation:
            "„Man sollte das aber nicht übertreiben: Ein paar Biber ersetzen keinen Hochwasserschutz für eine Großstadt.“ Die Studien aus Nordamerika zitiert er zustimmend.",
        },
        {
          n: 17,
          question: "Was wäre für ihn der Schlüssel zur Lösung der meisten Konflikte?",
          options: [
            "Mehr Forschung über das Verhalten der Biber.",
            "Ein vollständiges Jagdverbot in ganz Europa.",
            "Freie Uferstreifen und eine faire Entschädigung der Landwirte.",
          ],
          answer: 2,
          explanation:
            "Zehn bis zwanzig Meter breite Uferstreifen entlang der Bäche, die man der Natur überlässt, und eine faire Entschädigung für die Landwirte: „keine biologische Frage mehr, sondern eine politische“.",
        },
      ],
    },
    {
      title: "Teil 3",
      instructions:
        "Sie hören einen Ausschnitt aus einem Vortrag. Sie hören den Text einmal. Lesen Sie zuerst die Aufgaben 18–22. Wählen Sie beim Hören die richtige Lösung: a, b oder c.",
      audio: [
        {
          label: "Vortrag: Die Macht der Erwartung",
          plays: 1,
          lines: [
            {
              voice: "f",
              text: "Meine Damen und Herren, Sie nehmen eine Tablette gegen Kopfschmerzen, und eine halbe Stunde später geht es Ihnen besser. Ob sie überhaupt einen Wirkstoff enthielt, ist dafür womöglich weniger entscheidend, als Sie glauben. Mein Thema heute ist der Placeboeffekt.",
            },
            {
              voice: "f",
              text: "Lange galt das Placebo in der Medizin vor allem als Störfaktor: Man brauchte es in Studien als Vergleich, der Effekt selbst interessierte kaum. Inzwischen weiß man, dass im Körper durchaus etwas geschieht. Wer Linderung erwartet, schüttet etwa vermehrt körpereigene schmerzhemmende Stoffe aus. Bei Schmerzen, Übelkeit oder Erschöpfung sind die Effekte oft beachtlich, einen Tumor dagegen lässt keine Scheinbehandlung schrumpfen.",
            },
            {
              voice: "f",
              text: "Erstaunlich ist, wie sehr es auf die Umstände ankommt. In einem Experiment bekamen alle Versuchspersonen dieselbe wirkungslose Pille, angeblich mal teuer, mal stark reduziert. Die vermeintlich teure Pille linderte die Schmerzen deutlich besser. Auch Farbe und Zahl der Tabletten spielen eine Rolle, ebenso das Auftreten der Ärztin.",
            },
            {
              voice: "f",
              text: "Die Kehrseite ist der Nocebo-Effekt. Wer auf dem Beipackzettel lange Listen möglicher Nebenwirkungen liest, entwickelt manche davon, auch ohne Wirkstoff. Das stellt Ärztinnen und Ärzte vor ein Dilemma: Sie müssen über Risiken aufklären, ohne durch die Art der Aufklärung neue Beschwerden hervorzurufen.",
            },
            {
              voice: "f",
              text: "Bleibt die ethische Frage. Placebos heimlich zu geben, lehnen die meisten Fachleute ab, denn Täuschung untergräbt das Vertrauen, auf dem jede Behandlung beruht. Umso interessanter sind Studien mit offenen Placebos: Die Teilnehmenden wissen, dass ihre Kapseln keinen Wirkstoff enthalten, und berichten trotzdem über weniger Beschwerden. Medizin, so zeigt sich, ist immer auch Begegnung, und die Erwartungen der Patienten lassen sich aus ihr nicht herausrechnen.",
            },
          ],
        },
      ],
      items: [
        {
          n: 18,
          question: "Welche Rolle spielte das Placebo in der Medizin lange Zeit?",
          options: ["Es galt als bestes Mittel gegen Schmerzen.", "Es diente vor allem als Vergleich in Studien.", "Es war nur in der Psychiatrie üblich."],
          answer: 1,
          explanation: "Es galt „vor allem als Störfaktor“: Man brauchte es in Studien als Vergleich, der Effekt selbst „interessierte kaum“.",
        },
        {
          n: 19,
          question: "Was sagt die Rednerin über die Reichweite des Placeboeffekts?",
          options: [
            "Er wirkt bei allen Krankheiten gleich stark.",
            "Er ist reine Einbildung, im Körper geschieht nichts.",
            "Er zeigt sich vor allem bei Beschwerden wie Schmerzen oder Übelkeit.",
          ],
          answer: 2,
          explanation:
            "Bei Schmerzen, Übelkeit oder Erschöpfung sind die Effekte „oft beachtlich“, einen Tumor lässt ein Placebo nicht schrumpfen. Antwort b ist falsch: Im Körper „geschieht durchaus etwas“.",
        },
        {
          n: 20,
          question: "Was zeigte das Experiment mit den Pillen?",
          options: [
            "Die angeblich teure Pille wirkte besser als die angeblich billige.",
            "Farbige Pillen wirkten schlechter als weiße.",
            "Die Versuchspersonen merkten, dass die Pillen wirkungslos waren.",
          ],
          answer: 0,
          explanation:
            "Alle bekamen dieselbe Pille, doch „die vermeintlich teure Pille linderte die Schmerzen deutlich besser“. Vermeintlich heißt: nur angeblich. Die Farbe nennt die Rednerin nur allgemein als Faktor.",
        },
        {
          n: 21,
          question: "Worin besteht das Dilemma, vor das der Nocebo-Effekt Ärzte stellt?",
          options: [
            "Sie dürfen nicht mehr über Nebenwirkungen informieren.",
            "Schon die Aufklärung über Risiken kann Beschwerden auslösen.",
            "Placebos haben mehr Nebenwirkungen als echte Medikamente.",
          ],
          answer: 1,
          explanation:
            "Wer lange Listen von Nebenwirkungen liest, entwickelt manche davon auch ohne Wirkstoff. Ärzte müssen also aufklären, „ohne durch die Art der Aufklärung neue Beschwerden hervorzurufen“.",
        },
        {
          n: 22,
          question: "Was folgert die Rednerin aus den Studien mit offenen Placebos?",
          options: [
            "Ärzte sollten Placebos heimlich verschreiben.",
            "Placebos wirken nur, wenn man getäuscht wird.",
            "Die Erwartungen der Patienten gehören untrennbar zur Behandlung.",
          ],
          answer: 2,
          explanation:
            "Offene Placebos wirken, obwohl die Teilnehmenden Bescheid wissen; b ist damit widerlegt. Ihr Fazit: Medizin „ist immer auch Begegnung“. Heimliche Placebos lehnen die meisten Fachleute ab.",
        },
      ],
    },
  ],
};
