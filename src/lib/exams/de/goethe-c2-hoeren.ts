// Synced from cheneygross-afk/lengo:src/lib/exams/de/goethe-c2-hoeren.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "../types";

// Goethe-Zertifikat C2 (Großes Deutsches Sprachdiplom) practice exam --
// Hören. About 35 minutes, 3 parts, 20 items, modelled on the real
// exam's listening module: five short radio pieces heard once (news,
// review, comment, listener's call, announcement), a long radio
// conversation heard twice, and part of a lecture heard once. All
// recordings are original scripts read by text-to-speech.
export const GOETHE_C2_HOEREN: ExamPaper = {
  id: "hoeren",
  kind: "listening",
  title: "Hören",
  minutes: 35,
  group: 1,
  tasks: [
    {
      title: "Teil 1",
      instructions:
        "Sie hören fünf kurze Texte aus dem Radio. Sie hören jeden Text einmal. Wählen Sie bei jeder Aufgabe (1–5) die richtige Lösung: a, b oder c.",
      audio: [
        {
          label: "Text 1",
          plays: 1,
          lines: [
            {
              voice: "f",
              text: "Stadtlärm verändert offenbar den Gesang von Vögeln stärker als bisher angenommen. Ein Forschungsteam hat über drei Jahre hinweg Kohlmeisen in Parks und an verkehrsreichen Straßen aufgenommen. Die Vögel an den Straßen sangen nicht nur lauter, sondern auch höher – vermutlich, um sich vom tiefen Brummen des Verkehrs abzuheben. Ob das ihren Erfolg bei der Partnersuche beeinträchtigt, ist allerdings noch offen. Dieser Frage wollen die Forschenden in einer Folgestudie nachgehen.",
            },
          ],
        },
        {
          label: "Text 2",
          plays: 1,
          lines: [
            {
              voice: "m",
              text: "Wer nach den ersten fünfzig Seiten dieses Romans aufgibt, ist zu entschuldigen. Die Autorin nimmt sich viel Zeit, ihre Figuren in einem Dorf an der Oder einzuführen, und lange scheint nichts zu geschehen. Wer aber durchhält, wird belohnt: Ganz allmählich verdichten sich die scheinbar beiläufigen Szenen zum bedrückenden Bild einer Gemeinschaft, die gemeinsam ein Verbrechen verschweigt. Ein Buch, das Geduld verlangt – und sie in jeder Hinsicht rechtfertigt.",
            },
          ],
        },
        {
          label: "Text 3",
          plays: 1,
          lines: [
            {
              voice: "f",
              text: "Die Stadt rühmt sich, in diesem Jahr so viele Baugenehmigungen erteilt zu haben wie nie zuvor. Das klingt gut, sagt aber wenig. Eine Genehmigung ist noch keine Wohnung, und ein erheblicher Teil der genehmigten Projekte wird wegen gestiegener Zinsen und Baukosten vorerst nicht verwirklicht. Wer wissen will, wie es um den Wohnungsbau tatsächlich steht, sollte auf die Zahl der fertiggestellten Wohnungen schauen – und die ist im dritten Jahr in Folge gesunken.",
            },
          ],
        },
        {
          label: "Text 4",
          plays: 1,
          lines: [
            {
              voice: "m",
              text: "Ja, hallo, ich wollte mal was zum Thema Nachtruhe sagen. Ich wohne direkt über einer Bar, und ehrlich gesagt hat mich das nie groß gestört – ich wusste ja, wo ich einziehe. Was mich ärgert, sind die neuen Nachbarn, die jetzt mit Beschwerden und Anwälten dafür sorgen wollen, dass die Bar um zehn zumacht. Da zieht man doch nicht in die Altstadt, wenn man es ruhig haben will!",
            },
          ],
        },
        {
          label: "Text 5",
          plays: 1,
          lines: [
            {
              voice: "f",
              text: "Und noch ein Hinweis in eigener Sache: Unsere Reihe „Gespräche am Fluss“ geht in die nächste Runde. Anders als angekündigt findet die Auftaktveranstaltung allerdings nicht im Bootshaus statt, sondern in der Aula des Stadtgymnasiums, da das Bootshaus nach dem Hochwasser noch gesperrt ist. Termin und Uhrzeit bleiben unverändert, der Eintritt ist weiterhin frei. Wir bitten aber um Anmeldung, weil die Aula weniger Plätze bietet.",
            },
          ],
        },
      ],
      items: [
        {
          n: 1,
          question: "Was ist laut der Meldung noch ungeklärt?",
          options: [
            "Ob Vögel an Straßen lauter singen als in Parks.",
            "Ob der veränderte Gesang die Partnersuche erschwert.",
            "Ob auch Vögel in Parks vom Lärm betroffen sind.",
          ],
          answer: 1,
          explanation:
            "„Ob das ihren Erfolg bei der Partnersuche beeinträchtigt, ist allerdings noch offen.“ Dass die Vögel lauter und höher singen, ist dagegen das Ergebnis der Studie.",
        },
        {
          n: 2,
          question: "Wie urteilt der Kritiker über den Roman?",
          options: [
            "Der Roman ist langatmig und enttäuschend.",
            "Der Roman hätte deutlich gekürzt werden müssen.",
            "Der langsame Anfang zahlt sich am Ende aus.",
          ],
          answer: 2,
          explanation:
            "Wer früh aufgibt, ist entschuldigt, „Wer aber durchhält, wird belohnt“: ein Buch, das Geduld verlangt „und sie in jeder Hinsicht rechtfertigt“. Sich auszahlen heißt: sich am Ende lohnen.",
        },
        {
          n: 3,
          question: "Was kritisiert die Kommentatorin?",
          options: [
            "Die Zahl der Genehmigungen vermittelt ein irreführendes Bild.",
            "Die Stadt erteilt zu wenige Baugenehmigungen.",
            "Die Stadt hat die Zinsen erhöht.",
          ],
          answer: 0,
          explanation:
            "Die Rekordzahl an Genehmigungen „klingt gut, sagt aber wenig“: Eine Genehmigung ist noch keine Wohnung, und die Zahl der fertiggestellten Wohnungen ist drei Jahre in Folge gesunken.",
        },
        {
          n: 4,
          question: "Welche Haltung hat der Anrufer?",
          options: [
            "Er fordert strengere Sperrzeiten für Bars.",
            "Er hält die Beschwerden der neuen Nachbarn für unangemessen.",
            "Er überlegt, aus der Altstadt wegzuziehen.",
          ],
          answer: 1,
          explanation:
            "Die Bar hat ihn nie gestört; ihn ärgern die Zugezogenen, die wollen, dass sie um zehn schließt: „Da zieht man doch nicht in die Altstadt, wenn man es ruhig haben will!“ Die Partikel „doch“ drückt Empörung aus.",
        },
        {
          n: 5,
          question: "Was hat sich an der Veranstaltung geändert?",
          options: ["Der Ort.", "Der Termin.", "Der Eintrittspreis."],
          answer: 0,
          explanation:
            "Die Veranstaltung zieht wegen der Hochwasserschäden vom Bootshaus in die Schulaula um. „Termin und Uhrzeit bleiben unverändert“, und der Eintritt ist weiterhin frei, jetzt allerdings mit Anmeldung.",
        },
      ],
    },
    {
      title: "Teil 2",
      instructions:
        "Sie hören ein Gespräch aus einer Radiosendung. Sie hören den Text zweimal. Lesen Sie zuerst die Aufgaben 6–15. Wählen Sie beim Hören die richtige Lösung: a, b oder c.",
      audio: [
        {
          label: "Gespräch: Mit mehreren Sprachen aufwachsen",
          lines: [
            {
              voice: "m",
              text: "Guten Abend und willkommen bei „Zeitfragen“. In Deutschland wachsen sehr viele Kinder mit mehr als einer Sprache auf. Trotzdem hält sich hartnäckig die Sorge, Mehrsprachigkeit könne Kinder überfordern. Darüber spreche ich mit der Sprachwissenschaftlerin Miriam Sander. Frau Sander, ist diese Sorge berechtigt?",
            },
            {
              voice: "f",
              text: "Kurz gesagt: nein. Die Vorstellung, das Gehirn habe nur begrenzt Platz für Sprachen und eine zweite verdränge die erste, ist wissenschaftlich längst widerlegt. Weltweit wächst vermutlich die Mehrheit der Menschen mehrsprachig auf. Einsprachigkeit ist, global betrachtet, eher die Ausnahme.",
            },
            {
              voice: "m",
              text: "Woher kommt dann die Sorge?",
            },
            {
              voice: "f",
              text: "Zum Teil aus Beobachtungen, die man falsch deutet. Mehrsprachige Kinder mischen manchmal die Sprachen, sie sagen etwa einen deutschen Satz mit einem türkischen Wort darin. Das galt lange als Zeichen von Verwirrung. Heute wissen wir: Das ist eine ganz normale, oft sogar sehr geschickte Strategie, die auch erwachsene Mehrsprachige ständig anwenden. Und dann gibt es einen Effekt, den man durchaus ernst nehmen muss: In jeder einzelnen Sprache haben mehrsprachige Kinder anfangs oft einen etwas kleineren Wortschatz als einsprachige. Zählt man beide Sprachen zusammen, ist er aber mindestens genauso groß.",
            },
            {
              voice: "m",
              text: "Eltern bekommen ja viele Ratschläge. Einer der bekanntesten lautet: eine Person, eine Sprache. Die Mutter spricht nur Spanisch, der Vater nur Deutsch. Ist das sinnvoll?",
            },
            {
              voice: "f",
              text: "Es kann sinnvoll sein, aber es ist kein Naturgesetz. Viel wichtiger als eine strenge Regel ist, dass das Kind jede Sprache oft genug hört und dass es einen echten Grund hat, sie zu benutzen. Wenn ein Kind merkt, dass die Mutter ohnehin alles auf Deutsch versteht, antwortet es irgendwann eben nur noch auf Deutsch. Dann helfen Großeltern, die nur die andere Sprache sprechen, oder Ferien im Herkunftsland mehr als jede Regel.",
            },
            {
              voice: "m",
              text: "Was raten Sie Eltern, deren eigenes Deutsch nicht so gut ist? Sollen sie mit ihrem Kind trotzdem Deutsch sprechen, damit es in der Schule besser zurechtkommt?",
            },
            {
              voice: "f",
              text: "Diese Frage wird mir sehr oft gestellt, und meine Antwort überrascht manche: Sprechen Sie die Sprache, in der Sie sich am wohlsten fühlen. Ein Kind profitiert von reicher, lebendiger Sprache – von Geschichten, Witzen, Gesprächen über Gefühle. Wenn Eltern sich in einer Sprache unsicher fühlen, wird ihr Sprechen oft karg und vorsichtig. Deutsch lernen die Kinder dann in der Kita und in der Schule, und zwar umso leichter, je solider die Grundlage in der Familiensprache ist.",
            },
            {
              voice: "m",
              text: "Da sind wir bei einem politischen Punkt. Herkunftssprachen haben in deutschen Schulen nicht unbedingt den besten Ruf.",
            },
            {
              voice: "f",
              text: "Leider, ja. Und es gibt eine merkwürdige Hierarchie: Ein Kind, das Englisch und Französisch spricht, gilt als begabt; ein Kind, das Arabisch und Deutsch spricht, gilt schnell als Problemfall. Sprachwissenschaftlich ist das völlig unbegründet. Ich würde mir wünschen, dass mehr Schulen Herkunftssprachen als reguläres Fach anbieten, mit Noten, die im Zeugnis zählen. Das würde den Kindern signalisieren: Was du kannst, ist etwas wert.",
            },
            {
              voice: "m",
              text: "Zum Schluss: Hat Mehrsprachigkeit auch Vorteile über die Sprache hinaus? Man liest ja oft, sie mache klüger.",
            },
            {
              voice: "f",
              text: "Da wäre ich vorsichtig. Es gab eine Phase, in der man mehrsprachigen Menschen alle möglichen geistigen Vorteile zuschrieb, etwa bei der Aufmerksamkeit. Neuere, größere Studien konnten viele dieser Effekte nicht bestätigen. Ich finde das aber gar nicht schlimm. Mehrsprachigkeit braucht keine Begründung durch Intelligenztests. Sie öffnet Türen zu Menschen, zu Literatur, zur eigenen Familiengeschichte. Das ist Grund genug.",
            },
          ],
        },
      ],
      items: [
        {
          n: 6,
          question: "Wie beurteilt Frau Sander die Sorge, Mehrsprachigkeit überfordere Kinder?",
          options: [
            "Sie ist teilweise berechtigt.",
            "Sie betrifft nur sehr kleine Kinder.",
            "Sie ist wissenschaftlich widerlegt.",
          ],
          answer: 2,
          explanation:
            "„Kurz gesagt: nein.“ Die Vorstellung, eine zweite Sprache verdränge die erste, „ist wissenschaftlich längst widerlegt“.",
        },
        {
          n: 7,
          question: "Was sagt sie über Einsprachigkeit weltweit?",
          options: ["Sie ist die Regel.", "Sie ist eher die Ausnahme.", "Sie nimmt stark zu."],
          answer: 1,
          explanation: "„Einsprachigkeit ist, global betrachtet, eher die Ausnahme“: Wahrscheinlich wachsen die meisten Menschen auf der Welt mit mehreren Sprachen auf.",
        },
        {
          n: 8,
          question: "Wie deutet die heutige Forschung das Mischen von Sprachen?",
          options: [
            "Als übliche Strategie, die auch Erwachsene nutzen.",
            "Als Zeichen von Verwirrung.",
            "Als Hinweis auf eine Sprachstörung.",
          ],
          answer: 0,
          explanation:
            "Das Mischen „galt lange als Zeichen von Verwirrung“; heute sieht man darin „eine ganz normale, oft sogar sehr geschickte Strategie“, die auch zweisprachige Erwachsene ständig nutzen. Antwort b ist die alte Sichtweise.",
        },
        {
          n: 9,
          question: "Was gilt für den Wortschatz mehrsprachiger Kinder?",
          options: [
            "Er ist in jeder Sprache größer als bei einsprachigen Kindern.",
            "Er ist in jeder einzelnen Sprache anfangs oft kleiner, insgesamt aber nicht.",
            "Er ist insgesamt kleiner, gleicht sich aber in der Schule aus.",
          ],
          answer: 1,
          explanation:
            "In jeder einzelnen Sprache ist der Wortschatz anfangs oft etwas kleiner, aber „Zählt man beide Sprachen zusammen, ist er aber mindestens genauso groß.“",
        },
        {
          n: 10,
          question: "Was hält sie von der Regel „eine Person, eine Sprache“?",
          options: [
            "Sie ist unverzichtbar.",
            "Sie schadet den Kindern.",
            "Sie ist weniger wichtig als häufiger Kontakt und echte Anlässe, eine Sprache zu benutzen.",
          ],
          answer: 2,
          explanation:
            "„Es kann sinnvoll sein, aber es ist kein Naturgesetz.“ Wichtiger ist, jede Sprache oft genug zu hören und einen echten Anlass zu haben, sie zu benutzen.",
        },
        {
          n: 11,
          question: "Warum antworten manche Kinder irgendwann nur noch auf Deutsch?",
          options: [
            "Weil sie merken, dass der Elternteil ohnehin Deutsch versteht.",
            "Weil die Großeltern es von ihnen verlangen.",
            "Weil sie die Familiensprache vollständig verlernt haben.",
          ],
          answer: 0,
          explanation:
            "„Wenn ein Kind merkt, dass die Mutter ohnehin alles auf Deutsch versteht …“, hat es keinen Grund mehr, die andere Sprache zu benutzen. Großeltern, die nur diese Sprache sprechen, sind das Gegenmittel, nicht die Ursache.",
        },
        {
          n: 12,
          question: "Was rät sie Eltern, die selbst unsicher im Deutschen sind?",
          options: [
            "Mit dem Kind möglichst viel Deutsch zu sprechen.",
            "Die Sprache zu sprechen, in der sie sich am wohlsten fühlen.",
            "Beide Sprachen täglich abzuwechseln.",
          ],
          answer: 1,
          explanation:
            "„Sprechen Sie die Sprache, in der Sie sich am wohlsten fühlen.“ Unsicheres Sprechen wird karg, und eine gefestigte Familiensprache erleichtert später das Deutschlernen.",
        },
        {
          n: 13,
          question: "Welche „Hierarchie“ kritisiert Frau Sander?",
          options: [
            "Englisch wird an Schulen früher unterrichtet als Französisch.",
            "Lehrkräfte sprechen besser Englisch als Arabisch.",
            "Manche Sprachen gelten als Begabung, andere als Problem.",
          ],
          answer: 2,
          explanation:
            "Ein Kind mit Englisch und Französisch „gilt als begabt“, ein Kind mit Arabisch und Deutsch „gilt schnell als Problemfall“; sprachwissenschaftlich ist das nach ihren Worten völlig unbegründet.",
        },
        {
          n: 14,
          question: "Was wünscht sie sich von den Schulen?",
          options: [
            "Herkunftssprachen als reguläres Fach mit Noten im Zeugnis.",
            "Mehr Deutschförderung in der Kita.",
            "Englischunterricht ab der ersten Klasse.",
          ],
          answer: 0,
          explanation:
            "„… dass mehr Schulen Herkunftssprachen als reguläres Fach anbieten, mit Noten, die im Zeugnis zählen.“ Das Signal an das Kind: Was du kannst, ist etwas wert.",
        },
        {
          n: 15,
          question: "Wie steht sie zu der These, Mehrsprachigkeit mache klüger?",
          options: [
            "Sie hält die These für eindeutig bewiesen.",
            "Sie ist zurückhaltend, weil neuere Studien vieles nicht bestätigen konnten.",
            "Sie hält die These für das wichtigste Argument für Mehrsprachigkeit.",
          ],
          answer: 1,
          explanation:
            "„Da wäre ich vorsichtig“: Größere, neuere Studien konnten viele der Effekte nicht bestätigen. Außerdem braucht Mehrsprachigkeit für sie keine Rechtfertigung durch Intelligenztests.",
        },
      ],
    },
    {
      title: "Teil 3",
      instructions:
        "Sie hören einen Ausschnitt aus einem Vortrag. Sie hören den Text einmal. Lesen Sie zuerst die Aufgaben 16–20. Wählen Sie beim Hören die richtige Lösung: a, b oder c.",
      audio: [
        {
          label: "Vortrag: Wie die Eisenbahn die Zeit veränderte",
          plays: 1,
          lines: [
            {
              voice: "m",
              text: "Meine Damen und Herren, wenn wir heute sagen, es ist zwölf Uhr, dann meinen wir in ganz Deutschland denselben Augenblick. Das ist keineswegs selbstverständlich. Bis weit ins neunzehnte Jahrhundert hatte jede Stadt ihre eigene Zeit, die sich nach dem Stand der Sonne richtete. Wenn es in Berlin Mittag war, zeigten die Uhren in Köln noch knapp eine halbe Stunde früher. Solange man mit der Postkutsche reiste, spielte das kaum eine Rolle. Bei einer Reise von mehreren Tagen fielen ein paar Minuten nicht ins Gewicht.",
            },
            {
              voice: "m",
              text: "Mit der Eisenbahn änderte sich das grundlegend. Fahrpläne mussten nun auf die Minute stimmen, und das Nebeneinander der Ortszeiten führte zu einem heillosen Durcheinander. Die Bahngesellschaften behalfen sich zunächst damit, dass sie intern eine einheitliche Bahnzeit verwendeten, während die Uhren für die Reisenden vielerorts weiter die Ortszeit anzeigten. Eine Lösung, die mehr Verwirrung stiftete, als sie beseitigte.",
            },
            {
              voice: "m",
              text: "Erst im Jahr achtzehnhundertdreiundneunzig wurde im Deutschen Reich eine einheitliche Zeit gesetzlich eingeführt, die mitteleuropäische Zeit. Bemerkenswert ist, dass sich dagegen durchaus Widerstand regte. Manche empfanden es als Anmaßung, dass die Uhr nun nicht mehr der Sonne folgen sollte, sondern einem Beschluss in der Hauptstadt.",
            },
            {
              voice: "m",
              text: "Ich erzähle Ihnen das nicht aus Nostalgie. Mich interessiert, wie eine Technik nicht nur unser Reisen, sondern unser Zeitempfinden verändert hat. Pünktlichkeit im heutigen Sinne, also das Eintreffen auf die Minute genau, ist ein Kind der Eisenbahn. Und es ist kein Zufall, dass wir heute, im Zeitalter des Smartphones, die Zeit noch einmal anders erleben: nicht mehr als feste Verabredung, sondern als etwas, das sich jederzeit verschieben lässt. „Ich bin in zehn Minuten da“ – diese Nachricht hätte vor dreißig Jahren kaum jemand verschicken können.",
            },
          ],
        },
      ],
      items: [
        {
          n: 16,
          question: "Wonach richtete sich die Zeit in den Städten vor der Vereinheitlichung?",
          options: [
            "Nach der Zeit in der Hauptstadt.",
            "Nach dem Stand der Sonne vor Ort.",
            "Nach den Fahrplänen der Post.",
          ],
          answer: 1,
          explanation:
            "Jede Stadt hatte ihre eigene Zeit, „die sich nach dem Stand der Sonne richtete“; deshalb war es im weiter westlich gelegenen Köln fast eine halbe Stunde früher als in Berlin.",
        },
        {
          n: 17,
          question: "Warum waren die Zeitunterschiede zur Zeit der Postkutsche kein Problem?",
          options: [
            "Weil ein paar Minuten bei tagelangen Reisen keine Rolle spielten.",
            "Weil die Postkutschen nur innerhalb einer Stadt fuhren.",
            "Weil die Reisenden noch keine Uhren besaßen.",
          ],
          answer: 0,
          explanation: "„Bei einer Reise von mehreren Tagen fielen ein paar Minuten nicht ins Gewicht.“ Nicht ins Gewicht fallen heißt: keine Rolle spielen.",
        },
        {
          n: 18,
          question: "Wie lösten die Bahngesellschaften das Problem zunächst?",
          options: [
            "Sie stellten alle Bahnhofsuhren auf Berliner Zeit um.",
            "Sie verzichteten auf minutengenaue Fahrpläne.",
            "Sie nutzten intern eine eigene Bahnzeit, während für die Reisenden oft die Ortszeit galt.",
          ],
          answer: 2,
          explanation:
            "Intern galt eine eigene Bahnzeit, während die Uhren für die Reisenden oft noch die Ortszeit zeigten, „eine Lösung, die mehr Verwirrung stiftete, als sie beseitigte“.",
        },
        {
          n: 19,
          question: "Wie reagierten manche Menschen auf die Einführung der einheitlichen Zeit?",
          options: [
            "Sie begrüßten sie einhellig.",
            "Sie empfanden sie als Bevormundung durch die Hauptstadt.",
            "Sie forderten zusätzlich eine Sommerzeit.",
          ],
          answer: 1,
          explanation:
            "Es gab Widerstand: Manche empfanden es als Anmaßung, dass sich die Uhren nach „einem Beschluss in der Hauptstadt“ statt nach der Sonne richten sollten. Bevormundung heißt: Andere schreiben einem vor, was man zu tun hat.",
        },
        {
          n: 20,
          question: "Was will der Redner mit dem Beispiel „Ich bin in zehn Minuten da“ zeigen?",
          options: [
            "Dass die Menschen früher pünktlicher waren.",
            "Dass Verabredungen heute seltener sind als früher.",
            "Dass Technik unseren Umgang mit Zeit erneut verändert.",
          ],
          answer: 2,
          explanation:
            "Er will zeigen, dass Technik prägt, wie wir Zeit erleben: Die Eisenbahn brachte die minutengenaue Pünktlichkeit, und das Smartphone macht Verabredungen zu etwas, das sich jederzeit verschieben lässt.",
        },
      ],
    },
  ],
};
