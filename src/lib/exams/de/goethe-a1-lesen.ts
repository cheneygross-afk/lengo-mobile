// Synced from cheneygross-afk/lengo:src/lib/exams/de/goethe-a1-lesen.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// Goethe-Zertifikat A1 (Start Deutsch 1) practice exam -- Lesen.
// 25 minutes, 3 parts, 15 items, as in the real exam: two short
// messages (true or false), choosing the right one of two web pages or
// ads for a situation, and signs and notices (true or false).
const RF = ["Richtig", "Falsch"];

export const GOETHE_A1_LESEN: ExamPaper = {
  id: "lesen",
  kind: "reading",
  title: "Lesen",
  minutes: 25,
  group: 1,
  tasks: [
    {
      title: "Teil 1",
      instructions:
        "Lesen Sie die zwei Texte. Sind die Aussagen 1 bis 5 richtig oder falsch? Kreuzen Sie an.",
      instructionsEn:
        "Read the two texts. Are statements 1-5 true (Richtig) or false (Falsch)?",
      texts: [
        {
          label: "Text 1",
          title: "E-Mail von Katrin",
          body:
            "Liebe Maria,\n\nwie geht es dir? Ich bin jetzt seit zwei Wochen in Freiburg. Meine Wohnung ist klein, aber sie hat einen Balkon. Die Arbeit im Hotel ist gut und meine Kollegen sind sehr nett.\n\nAm Samstag habe ich frei. Möchtest du mich besuchen? Wir können zusammen in die Stadt gehen und am Abend koche ich für uns. Du kannst auch bei mir schlafen.\n\nKomm doch mit dem Zug! Er fährt jede Stunde von Basel nach Freiburg. Ich hole dich am Bahnhof ab.\n\nViele Grüße\nKatrin",
        },
        {
          label: "Text 2",
          title: "Zettel am Kühlschrank",
          body:
            "Hallo Ben,\n\nich bin beim Sport und komme um halb acht zurück. Im Kühlschrank sind Nudeln von gestern, die kannst du essen. Bitte geh noch einkaufen: Wir brauchen Milch, Brot und Eier. Das Geld liegt auf dem Tisch.\n\nPapa ruft heute Abend an.\n\nMama",
        },
      ],
      items: [
        {
          n: 1,
          question: "Katrin wohnt schon lange in Freiburg.",
          options: RF,
          answer: 1,
          source: 0,
          explanation: "„Ich bin jetzt seit zwei Wochen in Freiburg“: only two weeks, so not long (lange).",
        },
        {
          n: 2,
          question: "Katrin arbeitet am Samstag nicht.",
          options: RF,
          answer: 0,
          source: 0,
          explanation: "„Am Samstag habe ich frei“: frei haben = to have the day off.",
        },
        {
          n: 3,
          question: "Maria soll mit dem Zug kommen.",
          options: RF,
          answer: 0,
          source: 0,
          explanation: "„Komm doch mit dem Zug!“ – and „Ich hole dich am Bahnhof ab“: she'll pick Maria up at the station. doch makes the suggestion friendlier, like 'why don't you…'.",
        },
        {
          n: 4,
          question: "Ben soll das Abendessen kochen.",
          options: RF,
          answer: 1,
          source: 1,
          explanation: "There are leftover noodles in the fridge that Ben can eat; he is asked to go shopping, not to cook.",
        },
        {
          n: 5,
          question: "Ben bekommt Geld für den Einkauf.",
          options: RF,
          answer: 0,
          source: 1,
          explanation: "„Das Geld liegt auf dem Tisch“: the money for the shopping (der Einkauf) is on the table.",
        },
      ],
    },
    {
      title: "Teil 2",
      instructions:
        "Lesen Sie die Texte und die Aufgaben 6 bis 10. Wo finden Sie Informationen? Kreuzen Sie an: a oder b.",
      instructionsEn:
        "Read the texts and questions 6-10. Where do you find the information you need? Choose a or b.",
      texts: [
        {
          label: "6 a",
          title: "www.stadtbibliothek-mainz.de",
          body: "Öffnungszeiten: Dienstag bis Freitag 10 bis 19 Uhr, Samstag 10 bis 14 Uhr. Bücher, Filme und Zeitungen. Der Ausweis kostet 12 Euro im Jahr.",
        },
        {
          label: "6 b",
          title: "www.buchladen-mainz.de",
          body: "Neue Bücher, Kalender und Karten. Bestellen Sie online – morgen holen Sie Ihr Buch im Laden ab. Montag bis Samstag 9 bis 20 Uhr.",
        },
        {
          label: "7 a",
          title: "Sprachschule Lingua",
          body: "Deutschkurse für Anfänger: Montag und Mittwoch, 18 bis 20 Uhr. Nur 8 Personen in einem Kurs. Beginn: 4. März.",
        },
        {
          label: "7 b",
          title: "Volkshochschule",
          body: "Intensivkurs Deutsch A1: Montag bis Freitag, 9 bis 12 Uhr. Vier Wochen. Anmeldung im Büro, Zimmer 3.",
        },
        {
          label: "8 a",
          title: "Wetter am Wochenende",
          body: "Samstag: Sonne, 24 Grad. Sonntag: am Vormittag Sonne, ab 15 Uhr Regen und Gewitter, nur noch 17 Grad.",
        },
        {
          label: "8 b",
          title: "Wetter am Wochenende",
          body: "Samstag: Wolken und Regen, 14 Grad. Sonntag: den ganzen Tag Sonne, 22 Grad. Ideal für einen Ausflug!",
        },
        {
          label: "9 a",
          title: "Restaurant Zur Linde",
          body: "Deutsche Küche. Montag Ruhetag. Dienstag bis Sonntag 12 bis 23 Uhr. Großer Garten. Kinder bis 10 Jahre essen gratis.",
        },
        {
          label: "9 b",
          title: "Pizzeria Roma",
          body: "Pizza und Pasta. Jeden Tag 17 bis 24 Uhr. Wir liefern auch nach Hause! Bestellen Sie unter 0611 45 82 90.",
        },
        {
          label: "10 a",
          title: "Fahrradverleih am Bahnhof",
          body: "Fahrräder für einen Tag: 10 Euro, für eine Woche: 45 Euro. Bitte bringen Sie Ihren Ausweis mit.",
        },
        {
          label: "10 b",
          title: "Fahrradwerkstatt Müller",
          body: "Ist Ihr Fahrrad kaputt? Wir reparieren es schnell und billig. Wir verkaufen auch gebrauchte Fahrräder.",
        },
      ],
      items: [
        {
          n: 6,
          question: "Sie möchten ein Buch lesen, aber es nicht kaufen. Wohin gehen Sie?",
          options: ["a: www.stadtbibliothek-mainz.de", "b: www.buchladen-mainz.de"],
          answer: 0,
          explanation: "In a library (die Bibliothek) you borrow books; ein Buchladen sells them. Watch out: English 'library' is Bibliothek, and die Buchhandlung or der Buchladen is a bookshop.",
        },
        {
          n: 7,
          question: "Sie arbeiten am Vormittag und möchten am Abend Deutsch lernen. Welcher Kurs passt?",
          options: ["a: Sprachschule Lingua", "b: Volkshochschule"],
          answer: 0,
          explanation: "Lingua's course runs 18-20 Uhr, in the evening. The Volkshochschule course is 9-12 Uhr, in the morning (der Vormittag), when you work.",
        },
        {
          n: 8,
          question: "Sie möchten am Sonntag eine Fahrradtour machen. Welches Wetter ist gut für Sie?",
          options: ["a: Samstag Sonne, Sonntag ab 15 Uhr Regen", "b: Samstag Regen, Sonntag den ganzen Tag Sonne"],
          answer: 1,
          explanation: "In b, Sunday is sunny all day („den ganzen Tag Sonne“). In a, it rains on Sunday from 3 pm.",
        },
        {
          n: 9,
          question: "Sie möchten am Montagabend Pizza essen, aber nicht aus dem Haus gehen.",
          options: ["a: Restaurant Zur Linde", "b: Pizzeria Roma"],
          answer: 1,
          explanation: "„Wir liefern auch nach Hause“: Pizzeria Roma delivers, every day. Zur Linde is closed on Monday (Ruhetag).",
        },
        {
          n: 10,
          question: "Ihre Freundin ist drei Tage bei Ihnen zu Besuch. Sie braucht ein Fahrrad.",
          options: ["a: Fahrradverleih am Bahnhof", "b: Fahrradwerkstatt Müller"],
          answer: 0,
          explanation: "Der Fahrradverleih hires out bikes by the day. Die Werkstatt repairs bikes and sells used ones.",
        },
      ],
    },
    {
      title: "Teil 3",
      instructions:
        "Lesen Sie die Texte 11 bis 15. Sind die Aussagen richtig oder falsch? Kreuzen Sie an.",
      instructionsEn:
        "Read the signs and notices 11-15. Is each statement true (Richtig) or false (Falsch)?",
      texts: [
        {
          label: "11",
          title: "An der Tür einer Arztpraxis",
          body: "Liebe Patienten, die Praxis ist vom 2. bis 16. August geschlossen. In dringenden Fällen gehen Sie bitte zu Dr. Hahn, Bahnhofstraße 8.",
        },
        {
          label: "12",
          title: "Im Supermarkt",
          body: "Heute alle Brötchen ab 18 Uhr nur 20 Cent!",
        },
        {
          label: "13",
          title: "Im Hotel",
          body: "Frühstück im Restaurant im Erdgeschoss: Montag bis Freitag 6:30 bis 10 Uhr, Samstag und Sonntag 7:30 bis 11 Uhr.",
        },
        {
          label: "14",
          title: "Im Treppenhaus",
          body: "Der Aufzug ist kaputt. Bitte benutzen Sie die Treppe. Der Techniker kommt am Mittwoch. Die Hausverwaltung",
        },
        {
          label: "15",
          title: "Am Kino",
          body: "Kinotag! Jeden Dienstag kosten alle Karten nur 6 Euro. Kinder unter 12 Jahren zahlen immer 5 Euro.",
        },
      ],
      items: [
        {
          n: 11,
          question: "Im August kann man zwei Wochen nicht zu dieser Praxis gehen.",
          options: RF,
          answer: 0,
          source: 0,
          explanation: "From 2 to 16 August is two weeks; geschlossen = closed.",
        },
        {
          n: 12,
          question: "Am Abend sind die Brötchen billiger.",
          options: RF,
          answer: 0,
          source: 1,
          explanation: "„Ab 18 Uhr nur 20 Cent“: from 6 pm, in the evening, the rolls are cheaper.",
        },
        {
          n: 13,
          question: "Am Sonntag gibt es um 11:30 Uhr noch Frühstück.",
          options: RF,
          answer: 1,
          source: 2,
          explanation: "At weekends breakfast is served from 7:30 to 11 Uhr, so 11:30 is too late. noch = still.",
        },
        {
          n: 14,
          question: "Man kann heute mit dem Aufzug fahren.",
          options: RF,
          answer: 1,
          source: 3,
          explanation: "„Der Aufzug ist kaputt“: the lift is broken, use the stairs (die Treppe) until the technician comes.",
        },
        {
          n: 15,
          question: "Am Dienstag zahlen Kinder unter 12 Jahren 6 Euro.",
          options: RF,
          answer: 1,
          source: 4,
          explanation: "„Kinder unter 12 Jahren zahlen immer 5 Euro“: always 5, on Tuesdays too. The 6-euro price is for everyone else on Tuesdays.",
        },
      ],
    },
  ],
};
