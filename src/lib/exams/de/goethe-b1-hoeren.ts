// Synced from cheneygross-afk/lengo:src/lib/exams/de/goethe-b1-hoeren.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// Goethe-Zertifikat B1 practice exam -- Hören.
// About 40 minutes, 4 parts, 30 items, as in the real exam: five short
// texts with two items each (heard twice), a guided tour (heard once), a
// conversation between friends (heard once, true or false) and a radio
// discussion with three speakers (heard twice, who says what?).
const RF = ["Richtig", "Falsch"];
const WER = ["A. Moderatorin", "B. Frau Lorenz", "C. Herr Wagner"];

export const GOETHE_B1_HOEREN: ExamPaper = {
  id: "hoeren",
  kind: "listening",
  title: "Hören",
  minutes: 40,
  group: 1,
  tasks: [
    {
      title: "Teil 1",
      instructions:
        "Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung. Lesen Sie zuerst die Aufgaben.",
      instructionsEn:
        "You'll hear five short texts, each twice. Each text has two questions: first true or false, then a, b or c. Read the questions first.",
      audio: [
        {
          label: "Text 1",
          lines: [
            {
              voice: "m",
              text: "Und nun die Verkehrsmeldungen. Auf der A8 zwischen Augsburg und München staut sich der Verkehr nach einem Unfall auf zwölf Kilometern. Die Polizei rät, die Autobahn bei Dachau zu verlassen und über die Bundesstraße zu fahren. Wer heute mit der S-Bahn in die Innenstadt möchte, muss mit Verspätungen rechnen: Wegen einer Signalstörung fährt die S2 nur alle zwanzig Minuten. Die Störung soll bis zum Nachmittag behoben sein.",
            },
          ],
        },
        {
          label: "Text 2",
          lines: [
            {
              voice: "f",
              text: "Hallo Frau Neumann, hier ist Doris Engel von der Praxis Dr. Albers. Sie haben ja morgen um halb neun einen Termin bei uns. Leider ist Frau Doktor Albers krank, deshalb müssen wir den Termin verschieben. Wir könnten Ihnen Freitag um vierzehn Uhr anbieten oder nächsten Montag am Vormittag. Rufen Sie uns bitte bis heute Abend zurück, damit wir den Termin für Sie reservieren können. Danke und auf Wiederhören.",
            },
          ],
        },
        {
          label: "Text 3",
          lines: [
            {
              voice: "m",
              text: "Sehr geehrte Fahrgäste, in wenigen Minuten erreichen wir Hannover Hauptbahnhof. Wegen Bauarbeiten endet dieser Zug heute in Hannover. Reisende nach Hamburg steigen bitte in den Intercity um, der um elf Uhr sechzehn von Gleis neun abfährt. Ihre Fahrkarten bleiben gültig. Das Bordrestaurant ist ab sofort geschlossen. Wir bitten um Ihr Verständnis.",
            },
          ],
        },
        {
          label: "Text 4",
          lines: [
            {
              voice: "f",
              text: "Und hier noch ein Tipp fürs Wochenende: Am Samstag feiert der Stadtpark sein hundertjähriges Jubiläum. Ab zehn Uhr gibt es Musik, Führungen durch den Rosengarten und ein großes Picknick auf der Wiese. Essen müssen Sie nicht mitbringen – Bäckereien und Restaurants aus der Nachbarschaft bieten ihre Spezialitäten an. Der Eintritt ist frei. Und keine Sorge wegen des Wetters: Bei Regen findet das Fest im Rathaussaal statt.",
            },
          ],
        },
        {
          label: "Text 5",
          lines: [
            {
              voice: "f",
              text: "Hi Ben, hier ist Carla. Du, wegen Samstag: Der Umzug fängt doch schon um acht an, nicht um zehn, weil wir den Transporter nur bis vierzehn Uhr haben. Kannst du vielleicht deine Bohrmaschine mitbringen? Meine ist kaputt. Für Brötchen und Kaffee sorge ich, und abends gibt's Pizza für alle Helfer. Melde dich kurz, ja? Tschüss!",
            },
          ],
        },
      ],
      items: [
        {
          n: 1,
          source: 0,
          question: "Auf der A8 gibt es wegen eines Unfalls einen Stau.",
          options: RF,
          answer: 0,
          explanation: "„Auf der A8 … staut sich der Verkehr nach einem Unfall auf zwölf Kilometern.“",
        },
        {
          n: 2,
          source: 0,
          question: "Was sollen S-Bahn-Fahrer heute wissen?",
          options: ["Die S2 fährt heute gar nicht.", "Die S2 fährt seltener als sonst.", "Die S2 fährt nur bis Dachau."],
          answer: 1,
          explanation: "„… fährt die S2 nur alle zwanzig Minuten“: Sie fährt, aber nicht so oft. Bei Dachau sollen die Autofahrer die Autobahn verlassen.",
        },
        {
          n: 3,
          source: 1,
          question: "Frau Neumann kann morgen wie geplant zur Ärztin gehen.",
          options: RF,
          answer: 1,
          explanation: "Die Ärztin ist krank, deshalb „müssen wir den Termin verschieben“: Der Termin findet nicht wie geplant statt.",
        },
        {
          n: 4,
          source: 1,
          question: "Was soll Frau Neumann tun?",
          options: ["Am Freitag in die Praxis kommen.", "Eine andere Praxis suchen.", "Die Praxis heute noch anrufen."],
          answer: 2,
          explanation: "„Rufen Sie uns bitte bis heute Abend zurück.“ Freitag ist nur eines von zwei Angeboten.",
        },
        {
          n: 5,
          source: 2,
          question: "Der Zug fährt heute nicht bis Hamburg.",
          options: RF,
          answer: 0,
          explanation: "„Wegen Bauarbeiten endet dieser Zug heute in Hannover.“",
        },
        {
          n: 6,
          source: 2,
          question: "Was gilt für Reisende nach Hamburg?",
          options: ["Sie fahren mit einem Intercity weiter.", "Sie brauchen eine neue Fahrkarte.", "Sie müssen bis zum Nachmittag warten."],
          answer: 0,
          explanation: "Sie steigen um 11:16 Uhr auf Gleis 9 in den Intercity um, und „Ihre Fahrkarten bleiben gültig“: Sie brauchen keine neue Fahrkarte.",
        },
        {
          n: 7,
          source: 3,
          question: "Für das Fest muss man Eintritt bezahlen.",
          options: RF,
          answer: 1,
          explanation: "„Der Eintritt ist frei.“",
        },
        {
          n: 8,
          source: 3,
          question: "Was passiert, wenn es regnet?",
          options: ["Das Fest wird verschoben.", "Es gibt nur Musik, aber kein Picknick.", "Das Fest findet im Rathaus statt."],
          answer: 2,
          explanation: "„Bei Regen findet das Fest im Rathaussaal statt.“ Es wird also nicht verschoben.",
        },
        {
          n: 9,
          source: 4,
          question: "Der Umzug beginnt später als geplant.",
          options: RF,
          answer: 1,
          explanation: "Er beginnt früher: „schon um acht …, nicht um zehn“, weil sie den Transporter nur bis 14 Uhr haben.",
        },
        {
          n: 10,
          source: 4,
          question: "Was soll Ben mitbringen?",
          options: ["Brötchen.", "Eine Bohrmaschine.", "Pizza."],
          answer: 1,
          explanation: "„Kannst du vielleicht deine Bohrmaschine mitbringen?“ Für Brötchen und Kaffee sorgt Carla selbst („Für … sorge ich“).",
        },
      ],
    },
    {
      title: "Teil 2",
      instructions:
        "Sie hören einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c. Lesen Sie jetzt die Aufgaben 11 bis 15.",
      instructionsEn: "You'll hear a guided tour behind the scenes of a zoo, only once. For questions 11-15, choose a, b or c. Read the questions first.",
      audio: [
        {
          label: "Führung „Zoo hinter den Kulissen“",
          plays: 1,
          lines: [
            {
              voice: "f",
              text: "Guten Morgen, meine Damen und Herren, und herzlich willkommen zu unserer Führung „Zoo hinter den Kulissen“. Mein Name ist Judith Ostermann, ich bin seit fünfzehn Jahren Tierpflegerin hier im Zoo. In den nächsten neunzig Minuten zeige ich Ihnen Bereiche, die normale Besucher nicht sehen.",
            },
            {
              voice: "f",
              text: "Bevor wir anfangen, ein paar wichtige Hinweise: Bitte bleiben Sie immer bei der Gruppe und fassen Sie keine Tiere an, auch wenn sie noch so freundlich aussehen. Fotografieren dürfen Sie gern, aber bitte ohne Blitz – das Licht macht vielen Tieren Angst.",
            },
            {
              voice: "f",
              text: "Unsere erste Station ist die Futterküche. Hier bereiten wir jeden Tag etwa eine Tonne Futter vor: Obst, Gemüse, Fleisch, Fisch und sogar Insekten. Die Elefanten allein fressen pro Tag über hundert Kilo.",
            },
            {
              voice: "f",
              text: "Danach gehen wir zum neuen Elefantenhaus. Es wurde letztes Jahr eröffnet und hat einen weichen Sandboden, auf dem die Tiere auch nachts gut liegen können. Das alte Haus hatte noch einen Betonboden, und davon bekamen die Elefanten Probleme mit den Füßen. Deshalb haben wir das neue Haus gebaut.",
            },
            {
              voice: "f",
              text: "Zum Schluss besuchen wir die Tierarztpraxis. Wenn wir Glück haben, können Sie dort zusehen, wie unsere Tierärztin einen jungen Pinguin untersucht. Am Ende der Führung bekommt jeder von Ihnen noch einen Gutschein für einen Kaffee in unserem Zoo-Café. So, und jetzt folgen Sie mir bitte – hier entlang.",
            },
          ],
        },
      ],
      items: [
        {
          n: 11,
          question: "Frau Ostermann ist …",
          options: ["Tierärztin.", "Tierpflegerin.", "Leiterin des Zoos."],
          answer: 1,
          explanation: "„Ich bin seit fünfzehn Jahren Tierpflegerin hier im Zoo.“ Die Tierärztin ist eine andere Person, die die Gruppe am Ende vielleicht bei der Arbeit sieht.",
        },
        {
          n: 12,
          question: "Was dürfen die Teilnehmer während der Führung?",
          options: ["Fotos ohne Blitz machen.", "Die Tiere anfassen, wenn sie freundlich sind.", "Allein durch die Gebäude gehen."],
          answer: 0,
          explanation: "„Fotografieren dürfen Sie gern, aber bitte ohne Blitz.“ Die Teilnehmer müssen bei der Gruppe bleiben und dürfen keine Tiere anfassen.",
        },
        {
          n: 13,
          question: "Was erfährt man über die Futterküche?",
          options: [
            "Die Tiere bekommen dort nur Obst und Gemüse.",
            "Besucher dürfen dort beim Vorbereiten helfen.",
            "Dort wird jeden Tag etwa eine Tonne Futter vorbereitet.",
          ],
          answer: 2,
          explanation: "„Hier bereiten wir jeden Tag etwa eine Tonne Futter vor“, auch Fleisch, Fisch und sogar Insekten, also nicht nur Obst und Gemüse.",
        },
        {
          n: 14,
          question: "Warum hat der Zoo ein neues Elefantenhaus gebaut?",
          options: [
            "Die Elefanten hatten im alten Haus Probleme mit den Füßen.",
            "Der Zoo hat mehr Elefanten bekommen.",
            "Das alte Haus war zu klein.",
          ],
          answer: 0,
          explanation: "Das alte Haus hatte einen Betonboden, „und davon bekamen die Elefanten Probleme mit den Füßen. Deshalb haben wir das neue Haus gebaut.“",
        },
        {
          n: 15,
          question: "Was bekommen die Teilnehmer am Ende?",
          options: ["Ein Foto mit einem Pinguin.", "Einen Gutschein für einen Kaffee.", "Eine Eintrittskarte für den nächsten Besuch."],
          answer: 1,
          explanation: "„… bekommt jeder von Ihnen noch einen Gutschein für einen Kaffee in unserem Zoo-Café.“",
        },
      ],
    },
    {
      title: "Teil 3",
      instructions:
        "Sie hören ein Gespräch. Sie hören das Gespräch einmal. Dazu lösen Sie sieben Aufgaben. Wählen Sie: Sind die Aussagen richtig oder falsch? Lesen Sie jetzt die Aufgaben 16 bis 22.",
      instructionsEn:
        "You're at a bus stop and hear two old friends, Nina and Felix, talking. You hear it only once. Are statements 16-22 \"Richtig\" (true) or \"Falsch\" (false)?",
      audio: [
        {
          label: "Gespräch an der Bushaltestelle",
          plays: 1,
          lines: [
            { voice: "f", text: "Felix! Na so was, dich habe ich ja ewig nicht gesehen! Wie geht's dir?" },
            { voice: "m", text: "Hallo Nina! Gut, danke, ein bisschen müde. Ich habe vor drei Wochen eine neue Stelle angefangen, in einem Hotel am Marktplatz." },
            { voice: "f", text: "Ach, wirklich? Ich dachte, du arbeitest noch im Reisebüro." },
            {
              voice: "m",
              text: "Nein, das Reisebüro hat im Frühling zugemacht. Die meisten Leute buchen ihre Reisen ja inzwischen selbst im Internet. Ich war dann zwei Monate arbeitslos, das war keine schöne Zeit.",
            },
            { voice: "f", text: "Das kann ich mir vorstellen. Und, wie ist es im Hotel?" },
            {
              voice: "m",
              text: "Eigentlich super. Ich arbeite an der Rezeption, und mein Englisch und mein Spanisch kann ich jeden Tag gebrauchen. Nur die Schichtarbeit ist anstrengend. Diese Woche habe ich Nachtdienst, von zweiundzwanzig bis sechs Uhr.",
            },
            { voice: "f", text: "Oje. Und schläfst du dann tagsüber?" },
            { voice: "m", text: "Ich versuche es. Aber bei uns im Haus wird gerade das Dach repariert, da ist es ziemlich laut." },
            { voice: "f", text: "Du Armer. Hör mal, am Sonntag feiere ich meinen Geburtstag nach, bei mir im Garten. Hast du Lust zu kommen?" },
            { voice: "m", text: "Am Sonntag? Ja, da habe ich frei. Soll ich etwas mitbringen?" },
            {
              voice: "f",
              text: "Wenn du magst, einen Salat. Um die Getränke kümmert sich mein Bruder. Ach, und bring doch deine Gitarre mit! Wir singen bestimmt wieder bis spät in die Nacht.",
            },
            { voice: "m", text: "Mach ich. Oh, da kommt mein Bus. Bis Sonntag, Nina!" },
            { voice: "f", text: "Bis Sonntag!" },
          ],
        },
      ],
      items: [
        {
          n: 16,
          question: "Nina und Felix haben sich lange nicht gesehen.",
          options: RF,
          answer: 0,
          explanation: "„Dich habe ich ja ewig nicht gesehen!“ Ewig heißt hier: sehr lange.",
        },
        {
          n: 17,
          question: "Felix arbeitet seit drei Monaten im Hotel.",
          options: RF,
          answer: 1,
          explanation: "Er hat „vor drei Wochen“ angefangen. Zwei Monate war er arbeitslos.",
        },
        {
          n: 18,
          question: "Das Reisebüro hat geschlossen, weil viele Kunden online buchen.",
          options: RF,
          answer: 0,
          explanation: "„Die meisten Leute buchen ihre Reisen ja inzwischen selbst im Internet.“ Deshalb hat das Reisebüro für immer zugemacht.",
        },
        {
          n: 19,
          question: "Felix braucht bei seiner Arbeit Fremdsprachen.",
          options: RF,
          answer: 0,
          explanation: "An der Rezeption braucht er jeden Tag sein Englisch und sein Spanisch.",
        },
        {
          n: 20,
          question: "Diese Woche arbeitet Felix tagsüber.",
          options: RF,
          answer: 1,
          explanation: "„Diese Woche habe ich Nachtdienst, von zweiundzwanzig bis sechs Uhr“: Er arbeitet nachts.",
        },
        {
          n: 21,
          question: "Felix kann zu Hause gut schlafen.",
          options: RF,
          answer: 1,
          explanation: "Das Dach von seinem Haus wird repariert, „da ist es ziemlich laut“.",
        },
        {
          n: 22,
          question: "Nina bittet Felix, seine Gitarre mitzubringen.",
          options: RF,
          answer: 0,
          explanation: "„Bring doch deine Gitarre mit!“ Sie schlägt auch einen Salat vor; um die Getränke kümmert sich ihr Bruder.",
        },
      ],
    },
    {
      title: "Teil 4",
      instructions:
        "Sie hören eine Diskussion. Sie hören die Diskussion zweimal. Dazu lösen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Lesen Sie jetzt die Aussagen 23 bis 30.",
      instructionsEn:
        "The radio programme \"Thema am Abend\" discusses the four-day week. The presenter talks with Dr Lorenz, a work psychologist, and Mr Wagner, who runs a joinery. You hear it twice. Who says what? Choose A, B or C for statements 23-30. The presenter and Dr Lorenz are read by the same female voice here, so listen for who is being addressed and who answers.",
      audio: [
        {
          label: "Radiodiskussion: Die Vier-Tage-Woche",
          lines: [
            {
              voice: "f",
              text: "Guten Abend und willkommen zu „Thema am Abend“. Immer mehr Firmen in Deutschland testen die Vier-Tage-Woche: Die Beschäftigten arbeiten nur vier Tage, bekommen aber das gleiche Gehalt. Ist das die Zukunft oder ein schöner Traum? Darüber spreche ich heute mit der Arbeitspsychologin Frau Doktor Lorenz und mit Herrn Wagner, der in Kassel eine Schreinerei mit zwanzig Mitarbeitern leitet. Frau Lorenz, warum interessieren sich gerade so viele Menschen für dieses Modell?",
            },
            {
              voice: "f",
              text: "Weil viele Menschen erschöpft sind. In unseren Studien sehen wir, dass sich immer mehr Beschäftigte gestresst fühlen. Ein zusätzlicher freier Tag gibt ihnen Zeit für die Familie, für Sport oder einfach zum Ausruhen. Und wer ausgeruht ist, macht weniger Fehler.",
            },
            { voice: "f", text: "Danke, Frau Lorenz. Herr Wagner, Sie schütteln den Kopf." },
            {
              voice: "m",
              text: "Na ja, für ein Büro mag das funktionieren. Aber in einem Handwerksbetrieb sieht es anders aus. Meine Kunden wollen, dass ihre Küche pünktlich fertig wird. Wenn meine Leute einen Tag weniger arbeiten, brauche ich mehr Personal. Und gute Schreiner zu finden, ist heute schon fast unmöglich.",
            },
            {
              voice: "f",
              text: "Herr Wagner, als Psychologin sehe ich das anders: Genau da kann die Vier-Tage-Woche helfen. Junge Leute entscheiden sich heute oft für den Arbeitgeber, der ihnen mehr Freizeit bietet. Das ist ein echter Vorteil, wenn man Fachkräfte sucht.",
            },
            {
              voice: "f",
              text: "Frau Lorenz, da möchte ich kurz nachhaken. Ich habe selbst lange in Teilzeit gearbeitet und weiß, dass man dann oft in weniger Zeit genauso viel schaffen muss. Wird der Stress nicht einfach nur auf vier Tage verteilt?",
            },
            {
              voice: "f",
              text: "Das ist tatsächlich eine Gefahr, das sehen wir auch in unseren Studien. Es funktioniert nur, wenn die Firma auch die Arbeit anders organisiert, zum Beispiel mit weniger und kürzeren Besprechungen.",
            },
            {
              voice: "m",
              text: "Also, ich habe ehrlich gesagt keine Lust, meine ganze Werkstatt umzuorganisieren. Was ich mir aber vorstellen kann: dass jeder Mitarbeiter selbst wählt, ob er vier oder fünf Tage arbeitet – dann natürlich mit entsprechend weniger Lohn.",
            },
            { voice: "f", text: "Danke, Herr Wagner, das wäre also ein Kompromiss. Zum Schluss: Wo sehen Sie die Arbeitswelt in zehn Jahren? Herr Wagner?" },
            { voice: "m", text: "Ich glaube, die Fünf-Tage-Woche wird es im Handwerk weiterhin geben. Aber flexibler wird es sicher werden." },
            { voice: "f", text: "Und Sie, Frau Lorenz?" },
            {
              voice: "f",
              text: "Ich bin überzeugt, dass in zehn Jahren viele Firmen die Vier-Tage-Woche haben werden. Wer das nicht anbietet, wird es schwer haben, gute Leute zu finden.",
            },
            { voice: "f", text: "Frau Lorenz, Herr Wagner, vielen Dank Ihnen beiden für das Gespräch." },
          ],
        },
      ],
      layout: "select",
      items: [
        {
          n: 23,
          question: "Viele Arbeitnehmer fühlen sich heute überlastet.",
          options: WER,
          answer: 1,
          explanation: "Frau Lorenz (B): „Viele Menschen [sind] erschöpft … immer mehr Beschäftigte [fühlen sich] gestresst.“ Überlastet heißt: Man hat zu viel Arbeit.",
        },
        {
          n: 24,
          question: "Es ist sehr schwierig, gute Handwerker zu finden.",
          options: WER,
          answer: 2,
          explanation: "Herr Wagner (C): „Gute Schreiner zu finden, ist heute schon fast unmöglich.“",
        },
        {
          n: 25,
          question: "Mit mehr Freizeit können Firmen leichter neue Mitarbeiter gewinnen.",
          options: WER,
          answer: 1,
          explanation: "Frau Lorenz (B): Junge Leute wählen den Arbeitgeber mit mehr Freizeit, „ein echter Vorteil, wenn man Fachkräfte sucht“.",
        },
        {
          n: 26,
          question: "Ich habe selbst Erfahrung mit einer kürzeren Arbeitszeit.",
          options: WER,
          answer: 0,
          explanation: "Die Moderatorin (A): „Ich habe selbst lange in Teilzeit gearbeitet.“ Auch Moderatoren äußern manchmal ihre eigene Meinung.",
        },
        {
          n: 27,
          question: "Das Modell funktioniert nur, wenn die Arbeit neu organisiert wird.",
          options: WER,
          answer: 1,
          explanation: "Frau Lorenz (B): „Es funktioniert nur, wenn die Firma auch die Arbeit anders organisiert.“",
        },
        {
          n: 28,
          question: "Die Beschäftigten sollten selbst entscheiden können, wie viele Tage sie arbeiten.",
          options: WER,
          answer: 2,
          explanation: "Der Kompromiss von Herrn Wagner (C): Jeder wählt vier oder fünf Tage und bekommt dann entsprechend weniger Geld.",
        },
        {
          n: 29,
          question: "Vielleicht muss man dann in weniger Zeit genauso viel arbeiten.",
          options: WER,
          answer: 0,
          explanation: "Die Moderatorin (A) fragt, ob der Stress dann nicht einfach auf vier Tage verteilt würde: „in weniger Zeit genauso viel schaffen“.",
        },
        {
          n: 30,
          question: "Auch in Handwerksbetrieben werden die Arbeitszeiten in Zukunft flexibler.",
          options: WER,
          answer: 2,
          explanation: "Herr Wagner (C): Im Handwerk bleibt die Fünf-Tage-Woche, „aber flexibler wird es sicher werden“.",
        },
      ],
    },
  ],
};
