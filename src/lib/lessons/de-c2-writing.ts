// Synced from cheneygross-afk/lengo:src/lib/lessons/de-c2-writing.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { UnitWriting } from "./unitWriting";

// Extra writing tasks for this level's units, so every unit asks the learner to
// write at least three times: keyed by the lesson each is added to (see
// unitWriting.ts). Marked by the AI writing feedback like every writing task.
export const DE_C2_WRITING: UnitWriting = {
  "c2-legal-german-1": [
    {
      "type": "write",
      "prompt": "You will be abroad for three months and need a friend to deal with the Bürgeramt and the Finanzamt in Leipzig on your behalf. Write a formal power of attorney (Vollmacht) authorising her to act for you, setting out exactly what she may and may not do.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Names the parties with the fixed role nouns (\"die Bevollmächtigte\", \"die Vollmachtgeberin\", \"die Unterzeichnende\") and their identifying details",
        "Uses the fixed opening and closing formulas (\"Hiermit bevollmächtige ich ...\", \"Die Vollmacht erlischt ...\", place, date and signatures)",
        "Defines the scope precisely with \"insbesondere\", \"ausgenommen\" and \"ist nicht berechtigt\"",
        "Uses the deontic style of legal texts (\"hat sich ... auszuweisen\") and adjectival nouns with correct endings"
      ],
      "modelAnswer": "Vollmacht\n\nHiermit bevollmächtige ich,\n\nAna Sofia Ribeiro, geboren am 3. April 1991 in Coimbra, wohnhaft Lindenstraße 8, 04109 Leipzig,\n\nFrau Katrin Vogel, geboren am 17. Juli 1989, wohnhaft Kantstraße 22, 04275 Leipzig,\n\nmich in der Zeit vom 1. November 2026 bis zum 31. Januar 2027 gegenüber dem Bürgeramt der Stadt Leipzig sowie dem Finanzamt Leipzig in allen Angelegenheiten zu vertreten, die meine Meldedaten und meine Einkommensteuer betreffen.\n\nDie Bevollmächtigte ist insbesondere berechtigt, in meinem Namen Anträge zu stellen, Bescheide entgegenzunehmen, Unterlagen einzureichen und abzuholen sowie Auskünfte über meine Person einzuholen. Ausgenommen sind Erklärungen, durch die die Unterzeichnende Verpflichtungen gegenüber Dritten eingeht. Zur Beantragung eines Reisepasses oder Personalausweises ist die Bevollmächtigte nicht berechtigt.\n\nDie Bevollmächtigte hat sich bei Gebrauch dieser Vollmacht durch ihren gültigen Personalausweis sowie das Original dieser Vollmacht auszuweisen. Die Vollmacht erlischt mit Ablauf des 31. Januar 2027; ein früherer Widerruf bleibt vorbehalten.\n\nLeipzig, den 20. Oktober 2026\n\nAna Sofia Ribeiro\n(Unterschrift der Vollmachtgeberin)\n\nKatrin Vogel\n(Unterschrift der Bevollmächtigten)",
      "explanation": "The document opens with the fixed formula \"Hiermit bevollmächtige ich ...\" and refers to the parties by role: \"die Bevollmächtigte\" and \"die Unterzeichnende\" are adjectival nouns and decline like adjectives (\"der Bevollmächtigten\"), whereas \"die Vollmachtgeberin\" is an ordinary noun. \"Insbesondere\", \"Ausgenommen sind ...\" and \"ist ... nicht berechtigt\" fix the scope, \"hat sich ... auszuweisen\" is the deontic haben + zu of legal texts, and \"erlischt mit Ablauf des ...\" and \"bleibt vorbehalten\" close it in standard legal wording."
    }
  ],
  "c2-legal-plain-language-transformations": [
    {
      "type": "write",
      "prompt": "Your elderly neighbour, Herr Krause, has received a Bescheid from the city charging him a winter-service fee and doesn't understand it. It contains sentences such as 'Die Gebühr ist binnen eines Monats nach Bekanntgabe dieses Bescheides zu entrichten' and 'Bei nicht fristgerechter Zahlung wird ein Säumniszuschlag erhoben.' Write him a friendly letter explaining in plain German what it says and what he has to do.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Quotes the official sentences and unpacks their noun phrases into verbs (\"nach Bekanntgabe\" → \"sobald Sie den Brief bekommen haben\")",
        "Turns sein + zu and the passive into direct statements with a subject (\"ist zu entrichten\" → \"Sie müssen ... bezahlen\")",
        "Explains the Rechtsbehelfsbelehrung (what he can do if he disagrees, and by when) in everyday words",
        "Uses a warm, respectful Sie register suitable for an elderly neighbour"
      ],
      "modelAnswer": "Lieber Herr Krause,\n\nich habe mir den Brief von der Stadt in Ruhe angesehen. Keine Sorge, die Sache ist einfacher, als sie klingt.\n\nEs geht um den Winterdienst. Die Stadt hat letzten Winter den Schnee auf dem Gehweg vor Ihrem Haus geräumt und verlangt dafür jetzt eine Gebühr von 84 Euro. So ein Schreiben nennt man Bescheid.\n\nDer wichtigste Satz lautet: „Die Gebühr ist binnen eines Monats nach Bekanntgabe dieses Bescheides zu entrichten.“ Auf gut Deutsch heißt das: Sie müssen die 84 Euro innerhalb eines Monats bezahlen. Die Frist beginnt, sobald Sie den Brief bekommen haben, in Ihrem Fall also etwa am 5. November. Die Kontonummer steht unten auf der zweiten Seite.\n\nWeiter heißt es: „Bei nicht fristgerechter Zahlung wird ein Säumniszuschlag erhoben.“ Das bedeutet: Wenn Sie zu spät bezahlen, verlangt die Stadt zusätzlich eine kleine Strafgebühr.\n\nGanz am Ende steht noch, dass Sie innerhalb eines Monats Widerspruch einlegen können. Das brauchen Sie nur, wenn Sie meinen, dass die Stadt sich geirrt hat, zum Beispiel weil Sie selbst geräumt haben. Dann müssten Sie der Stadt schriftlich erklären, warum der Bescheid falsch ist.\n\nWenn Sie möchten, machen wir die Überweisung am Wochenende zusammen. Klingeln Sie einfach bei mir.\n\nHerzliche Grüße\nIhre Nachbarin Aylin Demir",
      "explanation": "Each official sentence is quoted and then unpacked: the noun phrase \"nach Bekanntgabe\" becomes a clause with a person in it (\"sobald Sie den Brief bekommen haben\"), the deontic \"ist ... zu entrichten\" becomes \"Sie müssen ... bezahlen\", and the subjectless passive \"wird ein Säumniszuschlag erhoben\" becomes an active sentence with the city as subject. The Rechtsbehelfsbelehrung is reduced to what Herr Krause can do and by when, and the letter keeps a warm but respectful Sie."
    }
  ],
  "c2-legal-german-4": [
    {
      "type": "write",
      "prompt": "While you are abroad for six months, you are subletting your room in a Berlin shared flat to a student, with your landlord's consent. Draft the core clauses of the sublease agreement (Untermietvertrag).",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Follows the structure of a German contract with numbered § headings (Vertragsgegenstand, Mietzeit, Miete und Kaution, Pflichten, Schlussbestimmungen)",
        "Uses legal conditions (\"sofern\", \"soweit\", \"es sei denn\") and a verb-first condition with \"so\" in the main clause",
        "Uses deontic constructions (\"ist ... zu zahlen\", \"hat ... zu leisten\", \"ist verpflichtet\")",
        "Uses \"bedürfen\" with the genitive (\"bedürfen der Schriftform\", \"ohne dass es einer Kündigung bedarf\")"
      ],
      "modelAnswer": "Untermietvertrag\n\nzwischen Jonas Becker, Weserstraße 41, 12045 Berlin (im Folgenden „Untervermieter“), und Clara Nowak, derzeit wohnhaft in Krakau (im Folgenden „Untermieterin“)\n\n§ 1 Vertragsgegenstand\nDer Untervermieter überlässt der Untermieterin ein möbliertes Zimmer von ca. 16 m² in der oben genannten Wohnung zur alleinigen Nutzung. Küche und Bad werden gemeinsam mit den übrigen Mitbewohnern genutzt. Die Zustimmung der Vermieterin liegt vor.\n\n§ 2 Mietzeit\nDas Mietverhältnis beginnt am 1. Februar 2027 und endet am 31. Juli 2027, ohne dass es einer Kündigung bedarf.\n\n§ 3 Miete und Kaution\nDie monatliche Miete beträgt 520 Euro einschließlich Nebenkosten und ist bis zum dritten Werktag eines jeden Monats im Voraus zu zahlen. Die Untermieterin hat bei Einzug eine Kaution in Höhe von 800 Euro zu leisten. Diese wird nach Ende des Mietverhältnisses zurückgezahlt, soweit keine Ansprüche des Untervermieters bestehen.\n\n§ 4 Pflichten der Untermieterin\nDie Untermieterin ist verpflichtet, das Zimmer pfleglich zu behandeln und die Hausordnung einzuhalten. Sofern sie Gäste länger als zwei Wochen beherbergen möchte, hat sie dies vorher mit dem Untervermieter abzustimmen. Eine Weitervermietung ist untersagt, es sei denn, der Untervermieter stimmt ihr schriftlich zu.\n\n§ 5 Schlussbestimmungen\nÄnderungen und Ergänzungen dieses Vertrages bedürfen der Schriftform. Sollte eine Bestimmung unwirksam sein, so bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.\n\nBerlin, den 10. Januar 2027",
      "explanation": "The draft follows the anatomy of a German contract, from the parties and \"im Folgenden\" definitions to Schlussbestimmungen. Obligations are expressed deontically (\"ist ... zu zahlen\", \"hat ... zu leisten\", \"ist verpflichtet\"), conditions with \"soweit\", \"sofern\" and \"es sei denn\", and the severability clause uses a verb-first condition with \"so\" (\"Sollte ... sein, so bleibt ...\"). \"Bedürfen\" takes the genitive: \"bedürfen der Schriftform\", \"ohne dass es einer Kündigung bedarf\"."
    }
  ],
  "c2-legal-german-7": [
    {
      "type": "write",
      "prompt": "You and your partner have just signed the purchase contract for a flat in Leipzig at the notary's office. Write an email to your parents, who live abroad and are curious, explaining what happened at the appointment and what happens next.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Explains the procedure with the correct terms (Beurkundung, Kaufvertrag, Grundbuch, Auflassungsvormerkung, Grundschuld, Übergabe)",
        "Uses at least two extended participial attributes (\"den über zwanzig Seiten langen Vertrag\", \"die von ihr verlangte Grundschuld\")",
        "Uses the passive or sein + zu for the steps of the procedure (\"wird ... eingetragen\", \"ist ... zu zahlen\")",
        "Keeps a warm, personal tone while explaining the legal process clearly"
      ],
      "modelAnswer": "Liebe Mama, lieber Papa,\n\nwir haben es geschafft: Seit heute Vormittag sind wir, zumindest fast, Eigentümer einer Wohnung in Leipzig!\n\nIhr hattet gefragt, wie so ein Kauf in Deutschland abläuft. Ohne Notar geht hier gar nichts. Der Kaufvertrag muss notariell beurkundet werden, sonst ist er unwirksam. Die Notarin hat uns den gesamten, über zwanzig Seiten langen Vertrag laut vorgelesen, Wort für Wort. Das dauerte fast zwei Stunden, aber wir konnten jederzeit nachfragen. Besonders lange haben wir über den im Vertrag vereinbarten Gewährleistungsausschluss gesprochen: Wir kaufen die Wohnung so, wie wir sie besichtigt haben, spätere Mängel gehen also auf unsere Kosten.\n\nAls Nächstes wird im Grundbuch eine Auflassungsvormerkung eingetragen. Damit ist gesichert, dass der Verkäufer die Wohnung niemand anderem verkaufen kann. Gleichzeitig lässt die Bank die von ihr verlangte Grundschuld eintragen, als Sicherheit für unseren Kredit. Erst wenn das erledigt ist, ist der Kaufpreis zu zahlen. Danach erfolgt die Übergabe der Schlüssel, voraussichtlich Anfang März. Richtige Eigentümer sind wir aber erst, wenn wir selbst im Grundbuch stehen, und das kann ein paar Monate dauern.\n\nDie von uns jetzt schon heiß geliebte Wohnung liegt übrigens nur zehn Minuten vom Clara-Zetkin-Park entfernt. Ihr müsst uns unbedingt im Sommer besuchen!\n\nAlles Liebe\neure Mira und Jonas",
      "explanation": "The email explains the purchase in the right order and with the right terms: notarielle Beurkundung, Auflassungsvormerkung and Grundschuld in the Grundbuch, payment, Übergabe and finally the transfer of ownership. Extended participial attributes pack information into the noun phrase (\"den gesamten, über zwanzig Seiten langen Vertrag\", \"den im Vertrag vereinbarten Gewährleistungsausschluss\", \"die von ihr verlangte Grundschuld\"), and the passive and sein + zu (\"wird ... eingetragen\", \"ist der Kaufpreis zu zahlen\", \"erfolgt die Übergabe\") describe the procedure."
    }
  ],
  "c2-pain-descriptors-word-web": [
    {
      "type": "write",
      "prompt": "For three days you have had lower back pain that is getting worse. Before your appointment, your GP's practice asks you to describe your symptoms in writing via its online patient portal. Write the message.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Describes the pain precisely (\"dumpf\", \"drückend\", \"stechend\", \"ausstrahlend\"), its location and its intensity on the 0–10 scale",
        "Uses seit + present tense for symptoms that are still continuing (\"Seit Montag habe ich ...\")",
        "Uses both \"mir tut ... weh\" and \"ich habe ... Schmerzen\" and the word \"Beschwerden\" correctly",
        "Gives the relevant history (cause, what helps or worsens it, medication taken) in a polite, factual register"
      ],
      "modelAnswer": "Betreff: Beschwerden im unteren Rücken, Termin am Donnerstag\n\nSehr geehrte Frau Dr. Albrecht,\n\nvor meinem Termin am Donnerstag möchte ich Ihnen meine Beschwerden kurz schildern.\n\nSeit Montag habe ich Schmerzen im unteren Rücken, vor allem auf der linken Seite. Angefangen hat es, nachdem ich beim Umzug einer Freundin schwere Kisten getragen hatte. Zunächst war es nur ein dumpfer, drückender Schmerz, inzwischen ist er deutlich stärker geworden. Beim Bücken oder wenn ich mich im Bett umdrehe, wird er plötzlich stechend, und seit gestern strahlt er bis in den linken Oberschenkel aus. Auf einer Skala von 0 bis 10 würde ich ihn in Ruhe mit 4, bei Bewegung mit 7 bis 8 einschätzen.\n\nTaubheitsgefühle oder Probleme beim Wasserlassen habe ich nicht. Am meisten tut mir der Rücken morgens nach dem Aufstehen weh; Wärme und leichtes Gehen lindern die Schmerzen etwas. Seit Dienstag nehme ich zweimal täglich 400 mg Ibuprofen ein, das hilft aber nur für wenige Stunden.\n\nDa ich im Büro überwiegend sitze, wäre ich Ihnen dankbar, wenn Sie mir kurz mitteilen könnten, ob ich bis Donnerstag weiterarbeiten sollte.\n\nMit freundlichen Grüßen\nLukas Brenner\ngeb. 12.03.1988",
      "explanation": "The message describes the pain like a clinician would ask for it: location, quality (\"dumpf\", \"drückend\", \"stechend\"), radiation (\"strahlt ... aus\"), intensity on the 0–10 scale and what makes it better or worse. \"Seit Montag habe ich ...\" and \"Seit Dienstag nehme ich ...\" use the present tense because the symptoms and medication continue. \"Mir tut der Rücken weh\" and \"Ich habe Schmerzen\" both appear, and \"Beschwerden\" means symptoms here, not complaints."
    }
  ],
  "c2-contrast-technical-vs-everyday-medical": [
    {
      "type": "write",
      "prompt": "A health magazine runs a column called 'Was der Arzt eigentlich meint'. Write an article explaining several technical medical terms that patients often find in their reports, with their everyday German equivalents.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Pairs technical terms with their everyday German equivalents (\"Hypertonie\" / \"Bluthochdruck\", \"Fraktur\" / \"Knochenbruch\", \"Exanthem\" / \"Ausschlag\", \"Zephalgie\" / \"Kopfschmerzen\")",
        "Explains what typical suffixes signal (\"-itis\", \"-ektomie\", \"-om\") with examples",
        "Explains when doctors use which word (with colleagues vs with patients)",
        "Writes in the clear, reader-friendly style of a magazine column, with a title and a direct address to readers"
      ],
      "modelAnswer": "Was der Arzt eigentlich meint: Fachwörter entschlüsselt\n\nWer einen Arztbrief liest, fühlt sich oft, als hätte er eine Fremdsprache vor sich. Dabei verbergen sich hinter vielen Fachbegriffen ganz alltägliche Dinge.\n\nNehmen wir die Hypertonie. Das klingt bedrohlich, bedeutet aber schlicht Bluthochdruck, eine sehr verbreitete Erkrankung, die sich gut behandeln lässt. Ähnlich ist es mit der Zephalgie: Gemeint sind ganz gewöhnliche Kopfschmerzen. Steht im Befund „Exanthem“, handelt es sich um einen Hautausschlag, und eine Fraktur ist nichts anderes als ein Knochenbruch.\n\nHilfreich ist es, die typischen Endungen zu kennen. Die Silbe „-itis“ steht für eine Entzündung: Bei einer Gastritis ist die Magenschleimhaut entzündet, bei einer Bronchitis sind es die Bronchien. „-ektomie“ bezeichnet die operative Entfernung eines Organs, etwa die Appendektomie, im Volksmund Blinddarmoperation. Und „-om“ weist auf eine Geschwulst hin, die aber keineswegs bösartig sein muss: Ein Lipom ist eine harmlose Fettgeschwulst.\n\nWarum verwenden Ärztinnen und Ärzte überhaupt diese Begriffe? Untereinander sind sie präziser und international verständlich. Im Gespräch mit Patienten sollten sie jedoch die Alltagswörter wählen. Fällt im Sprechzimmer trotzdem ein Fachwort, das Sie nicht verstehen, fragen Sie ruhig nach. Das ist Ihr gutes Recht.",
      "explanation": "The column pairs each technical term with its everyday twin (\"Hypertonie\" / \"Bluthochdruck\", \"Zephalgie\" / \"Kopfschmerzen\", \"Exanthem\" / \"Hautausschlag\", \"Fraktur\" / \"Knochenbruch\") and decodes the suffixes \"-itis\" (inflammation), \"-ektomie\" (surgical removal) and \"-om\" (growth). It then explains the register rule: technical terms between colleagues, everyday words with patients. Phrases like \"Gemeint sind ...\", \"handelt es sich um ...\" and \"ist nichts anderes als ...\" do the explaining."
    }
  ],
  "c2-idioms-1": [
    {
      "type": "write",
      "prompt": "Your colleague Hannelore is retiring after 30 years in your company's accounts department. Write the short, warm and witty farewell speech you give at her leaving party, weaving in idioms naturally.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses at least five idioms with body parts or food (\"um den heißen Brei herumreden\", \"sich kein Blatt vor den Mund nehmen\", \"Haare auf den Zähnen haben\", \"alles in Butter\", \"jdm die Daumen drücken\")",
        "Uses each idiom in its fixed form with the correct case and tense",
        "Keeps the register warm and suitable for colleagues, with no vulgar idioms",
        "Is structured as a speech: address, anecdote, wishes and a toast"
      ],
      "modelAnswer": "Liebe Hannelore, liebe Kolleginnen und Kollegen,\n\nich will nicht lange um den heißen Brei herumreden: Heute verlieren wir die Seele unserer Buchhaltung.\n\nDreißig Jahre lang hat Hannelore dafür gesorgt, dass bei uns alles in Butter ist. Wer eine Reisekostenabrechnung ohne Belege abgab, bekam das sofort zu spüren, denn Hannelore hat sich nie ein Blatt vor den Mund genommen. Manche behaupten, sie habe Haare auf den Zähnen. Ich sage: Sie hatte einfach meistens recht.\n\nIch erinnere mich noch gut an meinen ersten Monat hier. Ich hatte eine Rechnung doppelt bezahlt und wäre vor Scham am liebsten im Boden versunken. Hannelore hat mich nur angeschaut und gesagt: „Kopf hoch, das biegen wir wieder hin.“ Und das hat sie, in einer halben Stunde. Seitdem weiß ich: Mit ihr hat man nicht nur eine Kollegin, sondern jemanden, der einem den Rücken freihält.\n\nLiebe Hannelore, jetzt beginnt für dich ein neuer Lebensabschnitt. Ob du die Welt bereist oder endlich die Füße hochlegst, ist ganz allein deine Sache. Wir drücken dir jedenfalls fest die Daumen, dass alle deine Pläne aufgehen. Und falls dir zu Hause die Decke auf den Kopf fällt: Unsere Tür steht dir immer offen.\n\nBitte erhebt eure Gläser: Auf Hannelore!",
      "explanation": "The speech is built on idioms with body parts and food, each in its frozen form: \"um den heißen Brei herumreden\", \"alles in Butter\", \"sich kein Blatt vor den Mund nehmen\", \"Haare auf den Zähnen haben\", \"vor Scham im Boden versinken\", \"Kopf hoch\", \"jemandem den Rücken freihalten\", \"die Füße hochlegen\", \"jemandem die Daumen drücken\" (dative) and \"jemandem fällt die Decke auf den Kopf\". \"Bekam das ... zu spüren\" is a native collocation, and the tone stays affectionate rather than vulgar."
    }
  ],
  "c2-idioms-2": [
    {
      "type": "write",
      "prompt": "You bought a used car from a dealer and it turned out to have a hidden accident history. Write an online review on a car-sales platform warning other buyers, using idioms with animals and objects.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses at least five idioms with animals or objects (\"die Katze im Sack kaufen\", \"Da liegt der Hund begraben\", \"jdm einen Bären aufbinden\", \"auf dem Holzweg sein\", \"den Nagel auf den Kopf treffen\", \"etw. unter den Teppich kehren\")",
        "Uses each idiom with its frozen grammar and in the right tense",
        "Keeps the register publishable: critical and pointed, but factual and not insulting",
        "Ends with a clear warning or piece of advice for other buyers"
      ],
      "modelAnswer": "Finger weg von diesem Autohaus!\n\nEigentlich bin ich kein Mensch, der schnell schlechte Bewertungen schreibt. Aber hier muss ich andere Käufer warnen.\n\nIm März habe ich einen gebrauchten Kombi gekauft, angeblich unfallfrei und in Topzustand. Der Verkäufer war ausgesprochen freundlich, und eine Probefahrt hielt er für überflüssig: Das Auto sei ja frisch durch den TÜV. Im Nachhinein weiß ich: Ich habe die Katze im Sack gekauft.\n\nNach drei Wochen leuchtete die Motorkontrollleuchte auf. Meine Werkstatt stellte fest, dass der Wagen einen reparierten Unfallschaden hatte, den man offenbar unter den Teppich gekehrt hatte. Da liegt also der Hund begraben, dachte ich. Als ich mich beschwerte, wollte mir der Verkäufer einen Bären aufbinden: Der Schaden sei erst nach dem Kauf entstanden. Wer das glaubt, ist auf dem Holzweg, denn laut Gutachten sind die Reparaturspuren mindestens zwei Jahre alt.\n\nInzwischen kümmert sich mein Anwalt um die Sache. Ein Bekannter hat es neulich auf den Punkt gebracht: Hier wird mit gezinkten Karten gespielt. Damit hat er den Nagel auf den Kopf getroffen.\n\nMein Rat: Lassen Sie jedes Auto von einem unabhängigen Gutachter prüfen, bevor Sie unterschreiben. Und machen Sie um dieses Autohaus lieber einen großen Bogen.\n\nEin Stern, weil null nicht möglich ist.",
      "explanation": "The review strings together idioms with animals and objects in their fixed grammar: \"die Katze im Sack kaufen\", \"etwas unter den Teppich kehren\", \"Da liegt der Hund begraben\", \"jemandem einen Bären aufbinden\" (dative), \"auf dem Holzweg sein\" (dative of location), \"mit gezinkten Karten spielen\", \"den Nagel auf den Kopf treffen\" and \"einen großen Bogen um etwas machen\". The verdict is sharp but stays factual (\"laut Gutachten\"), so the review remains publishable."
    }
  ],
  "c2-proverbs-1": [
    {
      "type": "write",
      "prompt": "Your 16-year-old nephew Felix has just started an apprenticeship as a carpenter and is finding the first weeks hard. Write him an encouraging letter in which you weave in a few proverbs naturally.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses at least four core proverbs in their fixed form (\"Aller Anfang ist schwer\", \"Übung macht den Meister\", \"Ohne Fleiß kein Preis\", \"Lehrjahre sind keine Herrenjahre\")",
        "Frames the proverbs naturally (\"Wie heißt es so schön ...\", \"Nicht umsonst sagt man ...\") instead of stacking them",
        "Applies each proverb to Felix's situation in plain modern German, with a personal anecdote",
        "Keeps a warm, informal du-register and a letter format"
      ],
      "modelAnswer": "Lieber Felix,\n\ndeine Mutter hat mir erzählt, dass die ersten Wochen in der Schreinerei ganz schön anstrengend sind. Um sechs aufstehen, den ganzen Tag auf den Beinen, und dann schimpft der Meister auch noch, wenn eine Kante nicht gerade ist. Glaub mir, ich verstehe dich gut.\n\nWie heißt es so schön: Aller Anfang ist schwer. Das klingt nach Kalenderspruch, aber es stimmt. Als ich damals meine Ausbildung zur Köchin angefangen habe, durfte ich drei Monate lang nur Zwiebeln schneiden. Ich habe jeden Abend geheult, und zwar nicht nur wegen der Zwiebeln. „Lehrjahre sind keine Herrenjahre“, sagte mein Chef immer, und dafür hätte ich ihn am liebsten in den Kühlraum gesperrt.\n\nHeute weiß ich, dass er recht hatte. Nach einem Jahr konnte ich schneller schneiden als alle anderen, denn Übung macht nun mal den Meister. Du wirst sehen: Irgendwann sitzt jeder Handgriff, und dann macht die Arbeit richtig Spaß.\n\nMit „Morgenstund hat Gold im Mund“ will ich dir gar nicht erst kommen, frühes Aufstehen ist und bleibt furchtbar. Aber gib nicht auf. Nicht umsonst sagt man: Ohne Fleiß kein Preis. Und wenn du eines Tages deinen ersten eigenen Tisch baust, will ich mich als Erste daransetzen.\n\nIch drück dir die Daumen!\n\nDeine Tante Bettina",
      "explanation": "The proverbs are quoted in their fixed form and framed so they don't sound like a calendar: \"Wie heißt es so schön: Aller Anfang ist schwer\", \"sagte mein Chef immer\", \"denn Übung macht nun mal den Meister\", \"Nicht umsonst sagt man: Ohne Fleiß kein Preis\". Each one is tied to a concrete experience, and \"Mit ... will ich dir gar nicht erst kommen\" quotes a proverb ironically, which keeps the tone personal."
    }
  ],
  "c2-proverbs-contradictory-contrast": [
    {
      "type": "write",
      "prompt": "A magazine has invited readers to write a short argumentative text on the question: 'Gleich und Gleich gesellt sich gern – or do opposites attract?' Weigh up the two proverbs and come to a conclusion about relationships and friendships.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Quotes both contradictory proverbs in their fixed form and frames them (\"Einerseits heißt es ...\", \"Andererseits behauptet ein ebenso bekanntes Sprichwort ...\")",
        "Weighs arguments and examples for each side with concessive and contrastive structures (\"zwar ... aber\", \"während\", \"allerdings\")",
        "Brings in a further proverb or saying to support the conclusion",
        "Has a title and reaches a nuanced conclusion with a clear position"
      ],
      "modelAnswer": "Gleich und Gleich oder Gegensätze?\n\nDer Volksmund ist sich selten einig. Einerseits heißt es: Gleich und Gleich gesellt sich gern. Andererseits behauptet ein ebenso bekanntes Sprichwort: Gegensätze ziehen sich an. Welches hat nun recht, wenn es um Liebe und Freundschaft geht?\n\nFür das erste Sprichwort spricht einiges. Wer ähnliche Werte, Interessen und Lebensziele hat, streitet seltener über Grundsätzliches. Studien legen nahe, dass sich langjährige Paare in Bildung, Humor und politischen Ansichten oft erstaunlich ähneln. Man versteht sich eben, ohne viel erklären zu müssen.\n\nGegensätze dagegen machen das Leben zwar spannender, aber nicht unbedingt leichter. Während der eine am Wochenende wandern will, möchte die andere lieber ins Museum. Was am Anfang anziehend wirkt, kann mit der Zeit zur Belastung werden. Allerdings ergänzen sich unterschiedliche Charaktere häufig gut: Der Vorsichtige bremst die Ungeduldige, die Spontane bringt Schwung in den Alltag des Planers.\n\nMeiner Ansicht nach liegt die Wahrheit, wie so oft, in der Mitte. Bei den grundlegenden Werten sollte man auf einer Wellenlänge sein, im Temperament dürfen durchaus Gegensätze herrschen. Oder, um ein drittes Sprichwort zu bemühen: Jeder Topf findet seinen Deckel. Nur muss der Deckel eben auch auf den Topf passen.",
      "explanation": "The text frames the two contradictory proverbs with \"Einerseits heißt es ...\" and \"Andererseits behauptet ein ebenso bekanntes Sprichwort ...\" and then tests each one. \"Zwar ... aber\", \"während\" and \"allerdings\" weigh the arguments, and the conclusion brings in a third saying, \"Jeder Topf findet seinen Deckel\", which the final sentence turns playfully back on itself."
    }
  ],
  "c2-humour-1": [
    {
      "type": "write",
      "prompt": "Write a short comedy sketch for a student cabaret evening, set in a driving school car, in which the jokes rest on words with two meanings (das / die Steuer, die Bank, der / die Leiter, das Schloss, umfahren ...).",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Builds at least three puns on words with two meanings (\"das Steuer\" / \"die Steuer\", \"die Bank\", \"das Schloss\")",
        "Includes a pun based on gender (\"der Leiter\" / \"die Leiter\") and one based on stress (\"UMfahren\" / \"umFAHren\")",
        "Sets up each pun so that the misunderstanding is clear from the context",
        "Is laid out as a sketch: speakers, short stage directions and a final punchline"
      ],
      "modelAnswer": "Die Fahrstunde\n\n(Ein Fahrschulauto. Fahrlehrer Krüger, Fahrschülerin Nele.)\n\nKRÜGER: So, Frau Brandt, heute geht es auf die Landstraße. Nehmen Sie das Steuer in die Hand.\nNELE: Lieber nicht. Mit der Steuer habe ich schon genug Ärger. Mein Bescheid kam gestern.\nKRÜGER: DAS Steuer, Frau Brandt. Das runde Ding vor Ihnen.\n(Sie fährt los.)\nKRÜGER: Gut. Da vorne steht ein Hütchen. Das umfahren Sie jetzt bitte.\n(Es kracht.)\nKRÜGER: Ich sagte umFAHren, nicht UMfahren!\nNELE: Dann sagen Sie doch gleich „drum herum“!\nKRÜGER: (seufzt) Halten Sie bitte an der Bank da vorne.\n(Sie hält vor der Sparkasse.)\nKRÜGER: Die Bank im Park, Frau Brandt. Ich muss mich setzen.\nNELE: Ach so. Ich dachte, Sie wollten Geld für die Reparatur abheben.\nKRÜGER: Ich bin seit zwanzig Jahren der Leiter dieser Fahrschule, aber so etwas ...\nNELE: Der Leiter? Ich dachte, Sie sind die Leiter, auf der ich zum Führerschein hochklettere.\nKRÜGER: Im Moment trampeln Sie eher auf meinen Nerven herum. Und das Schloss vom Gurt klemmt auch.\nNELE: Ein Schloss? In so einem kleinen Auto? Dann sind wir ja quasi Adel.\nKRÜGER: (steigt aus) Nächste Woche fahren Sie mit meinem Kollegen.\nNELE: (ruft ihm nach) Ist der auch ein Leiter, oder nur eine Stufe?",
      "explanation": "The sketch rests on homonyms: \"das Steuer\" (steering wheel) vs \"die Steuer\" (tax), \"die Bank\" (bench and bank) and \"das Schloss\" (lock and castle). \"Der Leiter\" (head of the school) vs \"die Leiter\" (ladder) is a gender pun, and \"umFAHren\" (inseparable, drive round) vs \"UMfahren\" (separable, knock over) is a stress pun, marked here with capitals. Each misunderstanding is set up by the instructor's line, and the punchline extends the ladder image one step further."
    }
  ],
  "c2-humour-dialogue-lab": [
    {
      "type": "write",
      "prompt": "Write a short satirical news item about a German bureaucratic absurdity, for example a new form you have to fill in before you may fill in a form. Use a parody headline and mock-solemn officialese, and present the absurd with a straight face.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Opens with a parody headline and a dateline, like a real news item",
        "Uses mock-solemn Amtsdeutsch (noun chains, passive, Funktionsverbgefüge) for comic effect",
        "Quotes an invented official, partly in reported speech with the Konjunktiv I",
        "Keeps a deadpan tone and ends with an absurd twist"
      ],
      "modelAnswer": "Neues Formular soll Ausfüllen von Formularen erleichtern\n\nBerlin – Im Zuge der Entbürokratisierung hat das Bundesamt für Verwaltungsvereinfachung ein neues Formular vorgestellt. Der sogenannte Antrag auf Genehmigung der Antragstellung (AGA 1) ist ab dem 1. Januar vor Einreichung eines jeden weiteren Antrags in dreifacher Ausfertigung vorzulegen.\n\n„Mit dem AGA 1 schaffen wir endlich Klarheit“, erklärte Amtsleiter Dr. Bernd Hollmann bei der Vorstellung. Bislang hätten viele Bürgerinnen und Bürger Anträge gestellt, ohne vorher geprüft zu haben, ob sie zur Antragstellung überhaupt berechtigt seien. Dies habe zu einer erheblichen Mehrbelastung der Behörden geführt.\n\nDie Bearbeitungsdauer des neuen Formulars beträgt nach Angaben des Amtes lediglich acht bis zwölf Wochen. In dringenden Fällen könne eine beschleunigte Bearbeitung beantragt werden, und zwar mit dem Formular AGA 1b, dem Antrag auf beschleunigte Bearbeitung des Antrags auf Genehmigung der Antragstellung. Für diesen sei wiederum ein AGA 1 erforderlich.\n\nKritik an der Neuregelung wies Hollmann entschieden zurück. Es handle sich um eine Maßnahme zur Erhöhung der Rechtssicherheit, die langfristig zu einer spürbaren Entlastung aller Beteiligten führen werde. Erste Erfolge seien bereits messbar: Seit der Ankündigung sei die Zahl der gestellten Anträge um 94 Prozent zurückgegangen.\n\nDas Amt plant derweil die nächste Reform. Ab 2028 soll auch die Abschaffung von Formularen nur noch auf Antrag möglich sein.",
      "explanation": "The satire works by imitating official language with a straight face: genitive chains (\"des Antrags auf Genehmigung der Antragstellung\"), the deontic \"ist ... vorzulegen\", nominal phrases like \"im Zuge der Entbürokratisierung\" and \"zur Erhöhung der Rechtssicherheit\", and Funktionsverbgefüge such as \"Kritik zurückweisen\" and \"zu einer Entlastung führen\". The official is reported in the Konjunktiv I (\"es handle sich\", \"seien ... messbar\") like a real news report, and the final sentence turns the logic against itself."
    }
  ],
  "c2-figurative-language-1": [
    {
      "type": "write",
      "prompt": "An anthology of short texts about cities is looking for literary descriptions of a place at a particular moment. Describe a city you know at dawn (for example the Hamburg harbour), using similes and metaphors.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses similes with \"wie\" and with \"als ob\" / \"als\" + Konjunktiv II",
        "Uses metaphors built as compounds (\"Nebelwand\", \"Häusermeer\", \"Lichterkette\") and as genitive phrases (\"der Strom der Pendler\")",
        "Turns at least one comparison into a sustained metaphor that carries the description",
        "Keeps the images coherent (no mixed metaphors) and builds an atmosphere"
      ],
      "modelAnswer": "Der Hafen um fünf\n\nUm fünf Uhr morgens liegt der Hamburger Hafen da wie ein schlafendes Tier. Über der Elbe hängt eine Nebelwand, so dicht, als hätte jemand den Fluss über Nacht in Watte gepackt. Nur die Kräne ragen aus dem Grau, stählerne Giraffen, die mit gesenkten Köpfen auf den Tag warten.\n\nDann geht das erste Licht an. Am anderen Ufer flackert eine Lichterkette entlang der Kaimauer auf, und die Containerschiffe erscheinen wie schwimmende Häuserblöcke, bunt gestapelt, als hätte ein Kind mit riesigen Bauklötzen gespielt. Ein Schlepper schiebt sich schnaufend durch das Hafenbecken, ein kleiner, hartnäckiger Hund, der einen Elefanten vor sich hertreibt.\n\nLangsam reißt der Nebel auf. Das Häusermeer von St. Pauli taucht auf, und von den Landungsbrücken her schwillt der Strom der Pendler an, die mit ihren Kaffeebechern zu den Fähren eilen. Das Kreischen der Möwen mischt sich mit dem Brummen der Motoren zu einem Konzert, das keinen Dirigenten braucht.\n\nUm sieben ist das Tier erwacht. Es atmet Diesel, es brüllt mit Schiffshörnern, und für einen Moment glaubt man, die ganze Stadt sei nur seinetwegen gebaut worden.",
      "explanation": "The description moves from simile to metaphor: the harbour lies there \"wie ein schlafendes Tier\" in the first sentence and simply is the animal at the end (\"Es atmet Diesel, es brüllt ...\"), a sustained image that also fits the giraffes, the dog and the elephant. \"Als hätte jemand ...\" and \"als hätte ein Kind ...\" are unreal comparisons with the Konjunktiv II, and the metaphors are built in the two German ways: compounds (\"Nebelwand\", \"Lichterkette\", \"Häusermeer\") and genitives (\"der Strom der Pendler\")."
    }
  ],
  "c2-figurative-language-2": [
    {
      "type": "write",
      "prompt": "Write a humorous personal blog post about moving house with your whole family, exaggerating for comic effect.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses hyperbole (\"tausend Kartons\", \"eine gefühlte Ewigkeit\") and personification (\"der Umzugswagen schaute uns vorwurfsvoll an\", \"die Waschmaschine weigerte sich\")",
        "Uses at least one litotes (\"nicht ganz unschuldig\", \"nicht unbedingt ein Vergnügen\") and one oxymoron (\"beredtes Schweigen\", \"organisiertes Chaos\")",
        "Uses at least one alliterative or twin formula (\"mit Kind und Kegel\", \"Kisten und Kästen\")",
        "Keeps a light, self-ironic tone with a clear sequence of events"
      ],
      "modelAnswer": "Mit Kind und Kegel nach Kassel\n\nAm Samstag sind wir umgezogen. Genauer gesagt: Wir haben zwölf Jahre Familienleben in tausend Kartons gepresst und quer durch Deutschland gefahren.\n\nSchon um sechs Uhr morgens stand der Umzugswagen vor der Tür und schaute uns vorwurfsvoll an. Er ahnte wohl, was auf ihn zukam. Unsere Waschmaschine weigerte sich hartnäckig, das Treppenhaus zu verlassen, und das Sofa klemmte eine gefühlte Ewigkeit im zweiten Stock fest. Es ist nicht ganz unschuldig daran, dass mein Mann seitdem Rückenschmerzen hat.\n\nDie Kinder trugen ihren Teil bei, indem sie jeden zweiten Karton wieder auspackten, um ihr Lieblingsspielzeug zu suchen. Mein Ältester entdeckte dabei sein Schlagzeug, und eine halbe Stunde lang dröhnte ein ohrenbetäubendes Konzert durch die leere Wohnung. Der Hund verfolgte das Ganze mit beredtem Schweigen aus seinem Körbchen.\n\nUm zehn Uhr abends rollte der Wagen endlich ächzend auf die Autobahn, beladen mit Kisten und Kästen, Tisch und Stühlen. In Kassel empfing uns die neue Wohnung mit kalter Dunkelheit: Der Strom war noch nicht angemeldet.\n\nInzwischen leben wir in einem gut organisierten Chaos. Die Hälfte der Kartons ist ausgepackt, die andere Hälfte wartet geduldig im Keller. Ein Umzug ist nicht unbedingt ein Vergnügen, aber man vergisst ihn so schnell nicht.",
      "explanation": "Hyperbole (\"tausend Kartons\", \"eine gefühlte Ewigkeit\") and personification (the van that \"schaute uns vorwurfsvoll an\" and \"ahnte\", the washing machine that \"weigerte sich\", the boxes that \"warten geduldig\") drive the comedy. \"Nicht ganz unschuldig\" and \"nicht unbedingt ein Vergnügen\" are litotes, \"beredtes Schweigen\" and \"organisiertes Chaos\" are oxymorons, and \"mit Kind und Kegel\", \"Kisten und Kästen\" and \"Tisch und Stühle\" are alliterative or twin formulas."
    }
  ],
  "c2-euphemisms-1": [
    {
      "type": "write",
      "prompt": "The father of a former colleague, Jana, has died after a long illness. You knew him slightly from company summer parties. Write a condolence letter to her.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Refers to death and illness with tactful euphemisms (\"von uns gegangen\", \"nach langer, schwerer Krankheit\", \"friedlich eingeschlafen\")",
        "Uses the fixed formulas of condolence (\"mein aufrichtiges Beileid\", \"mit großer Betroffenheit\", \"In stiller Anteilnahme\")",
        "Shares a brief, positive personal memory of the deceased",
        "Offers concrete help without being intrusive, in a warm du-register"
      ],
      "modelAnswer": "Liebe Jana,\n\nmit großer Betroffenheit habe ich erfahren, dass dein Vater nach langer, schwerer Krankheit von uns gegangen ist. Es tut mir unendlich leid, und ich möchte dir und deiner Familie mein aufrichtiges Beileid aussprechen.\n\nIch habe deinen Vater nur ein paar Mal erlebt, aber ich erinnere mich gut an ihn. Beim Sommerfest vor drei Jahren stand er stundenlang am Grill, erzählte Geschichten aus seiner Zeit als Seemann und brachte alle zum Lachen, sogar unseren damaligen Chef. Man spürte sofort, wie stolz er auf dich war. Jedem, der es hören wollte, erzählte er, dass seine Tochter die Firma eigentlich allein am Laufen halte.\n\nIch habe gehört, dass er am Ende friedlich eingeschlafen ist, mit euch an seiner Seite. Ich hoffe, dass dir dieser Gedanke in den kommenden Wochen ein wenig Trost spendet.\n\nWenn du Unterstützung brauchst, ob bei Behördengängen, beim Ausräumen der Wohnung oder einfach jemanden zum Reden, melde dich jederzeit. Du musst nicht antworten; ich wollte dich nur wissen lassen, dass ich in Gedanken bei dir bin.\n\nIn stiller Anteilnahme\ndeine Martina",
      "explanation": "Death and illness are named indirectly: \"von uns gegangen\", \"nach langer, schwerer Krankheit\" and \"friedlich eingeschlafen\". The letter uses the fixed formulas of condolence (\"mit großer Betroffenheit\", \"mein aufrichtiges Beileid aussprechen\", \"Trost spenden\", \"in Gedanken bei dir\", \"In stiller Anteilnahme\"), adds a concrete memory, and offers help in a way that asks for nothing back (\"Du musst nicht antworten\")."
    }
  ],
  "c2-corporate-press-release-style-workshop": [
    {
      "type": "write",
      "prompt": "You work in corporate communications for a (fictional) household-appliance manufacturer that is closing its washing-machine production in Bielefeld and cutting about 300 jobs. Write the press release as the company would phrase it, in corporate euphemism.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses corporate euphemisms for job cuts and closure (\"Anpassung der Personalkapazitäten\", \"Standortkonsolidierung\", \"sozialverträglich\", \"freisetzen\", \"Neuausrichtung\")",
        "Keeps the agent in the background with the passive and nominal style (\"Die Umsetzung soll ... erfolgen\", \"wird ... gebündelt\")",
        "Frames the bad news with future-oriented vocabulary (\"Wettbewerbsfähigkeit sichern\", \"Zukunftsfähigkeit\", \"Synergien heben\", \"die Weichen stellen\")",
        "Follows the format of a press release: headline, dateline, quote from a manager and a press contact"
      ],
      "modelAnswer": "Weyer Haushaltsgeräte stellt die Weichen für die Zukunft\n\nBielefeld, 14. Oktober 2026 – Die Weyer Haushaltsgeräte GmbH richtet ihre Produktionsstrukturen neu aus, um ihre Wettbewerbsfähigkeit langfristig zu sichern. Im Rahmen einer umfassenden Standortkonsolidierung wird die Fertigung von Waschmaschinen bis Ende 2027 schrittweise im tschechischen Werk in Brünn gebündelt.\n\nMit der Neuausrichtung ist eine Anpassung der Personalkapazitäten am Standort Bielefeld verbunden, von der rund 300 Stellen betroffen sind. Die Umsetzung soll so sozialverträglich wie möglich erfolgen. Hierzu werden zeitnah Gespräche mit dem Betriebsrat aufgenommen. Vorgesehen sind unter anderem Angebote zum vorzeitigen Ruhestand, Qualifizierungsmaßnahmen sowie eine Transfergesellschaft für Mitarbeitende, die im Zuge der Maßnahme freigesetzt werden.\n\n„Diese Entscheidung ist uns nicht leichtgefallen“, erklärt Geschäftsführerin Dr. Ulrike Sander. „Angesichts eines herausfordernden Marktumfelds und anhaltend hoher Energie- und Rohstoffpreise ist sie jedoch notwendig, um Synergien zu heben und die Zukunftsfähigkeit unseres Unternehmens zu gewährleisten.“\n\nVerwaltung, Entwicklung und Kundenservice verbleiben in Bielefeld. Das Unternehmen bekennt sich ausdrücklich zur Region als Innovationsstandort.\n\nPressekontakt:\nStefan Lorenz, Unternehmenskommunikation\nWeyer Haushaltsgeräte GmbH, Bielefeld",
      "explanation": "The release never says that a factory closes and 300 people lose their jobs. Instead it speaks of \"Standortkonsolidierung\", \"Neuausrichtung\", \"Anpassung der Personalkapazitäten\", staff who are \"freigesetzt\" and a process that is \"sozialverträglich\". Passives and nominal phrases (\"wird ... gebündelt\", \"Die Umsetzung soll ... erfolgen\", \"werden ... Gespräche aufgenommen\") keep the decision-makers out of view, and future vocabulary (\"die Weichen stellen\", \"Wettbewerbsfähigkeit sichern\", \"Synergien heben\", \"Zukunftsfähigkeit\") turns the bad news into a strategy."
    }
  ],
  "c2-exclamations-2": [
    {
      "type": "write",
      "prompt": "After fifteen years, you bump into an old school friend at Hannover station, just before one of you has to catch a train. Write the conversation, full of surprised and delighted reactions.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses \"Was für ein ...!\" exclamations in more than one case and \"Wie + adjective\" exclamations (\"Wie schön!\", \"Wie klein die Welt doch ist!\")",
        "Uses verb-first exclamations with particles (\"Ist das aber lange her!\")",
        "Uses verb-final exclamations with dass or wenn (\"Dass ich dich hier treffe!\", \"Wenn ich das Julia erzähle!\")",
        "Uses interjections and reactions of surprise and disbelief (\"Das gibt's doch nicht!\", \"Ach was!\", \"Nicht dein Ernst!\", \"Na so was!\")"
      ],
      "modelAnswer": "Sarah: Moment mal ... Tobi? Tobias Hartmann?\nTobias: Sarah! Nein, das gibt's doch nicht! Dass ich dich ausgerechnet hier treffe!\nSarah: Was für ein Zufall! Wie lange ist das her? Fünfzehn Jahre?\nTobias: Mindestens. Seit dem Abiball. Mensch, ist das aber lange her!\nSarah: Und du hast dich kaum verändert! Na ja, bis auf den Bart.\nTobias: Ach was, ich bin grau geworden. Aber du! Wie gut du aussiehst! Was machst du denn in Hannover?\nSarah: Ich wohne seit zwei Jahren hier und arbeite als Tierärztin.\nTobias: Nicht dein Ernst! Was für einen schönen Beruf du hast! Das wolltest du doch schon immer.\nSarah: Und du? Bist du immer noch Musiker?\nTobias: Schön wär's! Nein, ich bin bei einer Versicherung gelandet. Was für ein Abstieg, oder?\nSarah: Echt? Du mit deiner Gitarre? Na so was!\nTobias: Tja, so ist das Leben. Aber hör mal: Mein Zug fährt in zehn Minuten. Was für ein blödes Timing!\nSarah: Oh nein! Gib mir schnell deine Nummer. Wenn ich das Julia erzähle! Die fällt aus allen Wolken.\nTobias: Hier. Und ruf mich wirklich an, ja? Wie klein die Welt doch ist!\nSarah: Und wie! Gute Reise, Tobi!",
      "explanation": "\"Was für ein\" takes the case of its role in the sentence: nominative in \"Was für ein Zufall!\" and \"Was für ein blödes Timing!\", accusative in \"Was für einen schönen Beruf du hast!\" (with the verb at the end). \"Wie gut du aussiehst!\" and \"Wie klein die Welt doch ist!\" are wie-exclamations, \"ist das aber lange her!\" is verb-first with \"aber\", and \"Dass ich dich ... treffe!\" and \"Wenn ich das Julia erzähle!\" are verb-final exclamations. \"Das gibt's doch nicht!\", \"Nicht dein Ernst!\", \"Ach was\" and \"Na so was!\" react to surprise."
    }
  ],
  "c2-suffixes-2": [
    {
      "type": "write",
      "prompt": "A building site and its consequences have turned your quiet street upside down. Write a grumpy but humorous post for your neighbourhood's online forum, complaining about it all and asking for support.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses pejorative -erei and Ge-...-e nouns (\"die Bohrerei\", \"die Schreiberei\", \"das Gehupe\", \"das Gerede\")",
        "Uses person nouns in -ling or -ler with their nuance (\"Feigling\", \"Hinterwäldler\", \"Nörgler\")",
        "Uses intensifying prefixes on adjectives (\"todmüde\", \"stinkreich\", \"uralt\", \"steinalt\", \"blitzsauber\")",
        "Keeps a grumpy, self-ironic tone suitable for a public forum, without insulting real people"
      ],
      "modelAnswer": "Ruhe in der Lindenstraße? Fehlanzeige!\n\nLiebe Nachbarinnen und Nachbarn,\n\nich muss mir mal Luft machen. Seit drei Monaten wird auf dem Grundstück neben der uralten Bäckerei gebaut, und seitdem ist an Schlaf nicht mehr zu denken. Morgens um sieben beginnt die Bohrerei, mittags die Hämmerei, und abends hört man das Gepiepe der rückwärtsfahrenden Lastwagen bis in den Keller. Ich bin inzwischen so todmüde, dass ich gestern meine Brille im Kühlschrank gefunden habe.\n\nDazu kommt das Gehupe in der Einfahrt. Die Lieferwagen parken grundsätzlich so, dass niemand mehr herauskommt, und wer sich beschwert, gilt gleich als Hinterwäldler, der den Fortschritt nicht versteht.\n\nWas dort entsteht, wissen wir inzwischen auch: Luxuswohnungen für stinkreiche Leute, die laut Prospekt „urbanes Wohnen mit Charakter“ suchen. Den Charakter hat man gleich mit abgerissen, nämlich den steinalten Kastanienbaum. Das Gerede von der „Aufwertung des Viertels“ kann ich jedenfalls nicht mehr hören.\n\nIch weiß, ich klinge wie ein Nörgler. Vielleicht wird die neue Fassade ja wirklich blitzsauber und hübsch. Aber eine Frage hätte ich doch: Wer hat Lust, mit mir eine Unterschriftenliste für Ruhe am Samstag zu starten? Ich bin kein Feigling, aber allein ist mir die Schreiberei mit dem Bauamt zu viel.\n\nGenervte Grüße\nHerbert aus Nummer 14",
      "explanation": "The suffix -erei turns a verb into an annoying, repeated activity (\"die Bohrerei\", \"die Hämmerei\", \"die Schreiberei\"), and the circumfix Ge-...-e does the same (\"das Gepiepe\", \"das Gehupe\", \"das Gerede\"). \"Hinterwäldler\" and \"Nörgler\" (-ler) and \"Feigling\" (-ling) are person nouns with a negative tinge. Intensifying prefixes raise the volume: \"uralt\", \"todmüde\", \"stinkreich\", \"steinalt\" and \"blitzsauber\"."
    }
  ],
  "c2-vocab-verbs-of-saying-in-context": [
    {
      "type": "write",
      "prompt": "Write the minutes (Protokoll) of a marketing department meeting at which colleagues discussed switching to a new project-management tool. Report who said what with precise verbs of saying, and record the decisions.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses precise verbs of saying that show stance (\"hob hervor\", \"pflichtete bei\", \"merkte an\", \"wandte ein\", \"bemängelte\", \"gab zu bedenken\", \"räumte ein\")",
        "Reports statements in the Konjunktiv I, with the Konjunktiv II where the Konjunktiv I is not distinct",
        "Records decisions in the passive or nominal style (\"Es wird beschlossen, ...\", \"wird ... vertagt\")",
        "Follows the format of a German Protokoll (header, participants, TOP, results, responsible persons and deadlines)"
      ],
      "modelAnswer": "Protokoll der Abteilungsbesprechung Marketing\n\nDatum: 7. Oktober 2026, 10:00–11:15 Uhr\nTeilnehmende: Frau Arslan (Leitung), Herr Böhm, Frau Kraus, Herr Neumann, Frau Ott (Protokoll)\n\nTOP 1: Umstellung auf eine neue Projektmanagement-Software\n\nFrau Arslan stellte das Programm „Taskflow“ vor und hob hervor, dass es Aufgaben, Termine und Dateien an einem Ort bündle. Die bisherige Lösung sei unübersichtlich und verursache doppelte Arbeit.\n\nHerr Böhm pflichtete ihr bei und merkte an, dass die Kollegen in Wien bereits gute Erfahrungen mit dem Programm gemacht hätten. Frau Kraus wandte ein, dass die Lizenzkosten von 18 Euro pro Person und Monat deutlich über dem Budget lägen. Zudem bemängelte sie, dass es bislang keine Schnittstelle zum Buchhaltungssystem gebe.\n\nHerr Neumann gab zu bedenken, dass eine Umstellung mitten im Weihnachtsgeschäft riskant sei, und schlug vor, zunächst eine Testphase mit einem kleinen Team durchzuführen. Frau Arslan räumte ein, dass der Zeitpunkt ungünstig gewählt sei.\n\nErgebnis:\nEs wird beschlossen, die Software von Januar bis März 2027 im Team Online-Marketing zu testen. Herr Böhm klärt bis zum 31. Oktober mit dem Anbieter die Frage der Schnittstelle. Die endgültige Entscheidung wird auf die Besprechung im April vertagt.\n\nFür das Protokoll: Lena Ott",
      "explanation": "Each verb of saying shows the speaker's stance: \"hob hervor\" (stressed), \"pflichtete bei\" (agreed), \"merkte an\" (remarked), \"wandte ein\" (objected), \"bemängelte\" (criticised), \"gab zu bedenken\" (cautioned) and \"räumte ein\" (conceded). The statements are in the Konjunktiv I (\"bündle\", \"sei\", \"verursache\", \"gebe\"), with the Konjunktiv II where the Konjunktiv I would look like the indicative (\"hätten\", \"lägen\"). The results use the impersonal passive (\"Es wird beschlossen\", \"wird ... vertagt\")."
    }
  ],
  "c2-business-idioms-2": [
    {
      "type": "write",
      "prompt": "The two co-founders of a small start-up (an app for booking sports facilities) meet late at night after another bad quarter. Write their conversation about whether and how to carry on, using business idioms naturally.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses at least five money and crisis idioms (\"rote / schwarze Zahlen schreiben\", \"pleitegehen\", \"den Gürtel enger schnallen\", \"auf Sand gebaut\", \"das Handtuch werfen\", \"die Reißleine ziehen\", \"Geld wie Heu haben\")",
        "Uses at least two idioms for deals and projects (\"unter Dach und Fach\", \"in trockenen Tüchern\", \"auf die lange Bank schieben\", \"an einem Strang ziehen\")",
        "Uses each idiom with its fixed verb and grammar",
        "Writes a natural dialogue in which the two disagree and reach a decision"
      ],
      "modelAnswer": "Mila: Ich hab mir die Zahlen noch mal angeschaut. Wir schreiben seit drei Quartalen rote Zahlen.\nJan: Ich weiß. Aber das ist bei Start-ups normal. Kaum jemand schreibt im zweiten Jahr schwarze Zahlen.\nMila: Normal vielleicht, aber nicht ewig. Wenn der Investor im Januar abspringt, gehen wir pleite.\nJan: Dann müssen wir eben den Gürtel enger schnallen. Kein neues Büro, keine Messe in Barcelona.\nMila: Das reicht nicht. Ich frage mich langsam, ob unser ganzes Geschäftsmodell nicht auf Sand gebaut ist. Die Vereine buchen ihre Plätze lieber per Telefon.\nJan: Willst du etwa das Handtuch werfen? Nach allem, was wir reingesteckt haben?\nMila: Nein. Aber wir sollten die Reißleine ziehen, bevor es zu spät ist, zumindest beim Vereinsgeschäft.\nJan: Und stattdessen?\nMila: Fitnessstudios. Der Vertrag mit der Kette in Hamburg ist fast unter Dach und Fach. Wenn der in trockenen Tüchern ist, haben wir zwanzig Standorte auf einen Schlag.\nJan: Und das erzählst du mir erst jetzt?\nMila: Ich wollte es nicht beschreien. Aber wir dürfen die Entscheidung nicht länger auf die lange Bank schieben.\nJan: Okay. Wenn wir beide an einem Strang ziehen, kriegen wir das hin. Geld wie Heu werden wir trotzdem nie haben.\nMila: Brauchen wir auch nicht. Es reicht, wenn wir nächstes Jahr noch die Miete zahlen können.",
      "explanation": "The money and crisis idioms keep their fixed verbs: \"rote / schwarze Zahlen schreiben\", \"pleitegehen\", \"den Gürtel enger schnallen\", \"auf Sand gebaut sein\", \"das Handtuch werfen\", \"die Reißleine ziehen\" and \"Geld wie Heu haben\". For deals and projects, a contract is \"unter Dach und Fach\" or \"in trockenen Tüchern\", a decision is \"auf die lange Bank geschoben\", and partners \"ziehen an einem Strang\". \"Etwas nicht beschreien wollen\" adds a superstitious touch."
    }
  ],
  "c2-comprehension-strategies-1": [
    {
      "type": "write",
      "prompt": "A magazine for German learners has asked you for a short, witty column on how you learned to decode long German words. Take a few real compounds and prefixed verbs and show how you work out what they mean.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Splits a compound from the right and names the head noun and its gender",
        "Explains what prefixes such as zer-, ent-, ver- or miss- add to a verb, with examples (\"zerreden\", \"entrümpeln\", \"verschlimmbessern\")",
        "Shows how context helps and when it is fine to skip a word",
        "Keeps the light, personal tone of a column, with a title"
      ],
      "modelAnswer": "Wie ich lernte, lange Wörter zu lieben\n\nIn meiner ersten Woche in Deutschland fand ich im Briefkasten ein Schreiben über meine „Kraftfahrzeughaftpflichtversicherung“. Ich habe es ungelesen in die Schublade gelegt. Heute weiß ich: Das Wort ist kein Monster, sondern ein Zug, und man liest es am besten von hinten.\n\nGanz rechts steht der Kopf, und der bestimmt Bedeutung und Genus: die Versicherung. Davor steht, wofür sie gilt, nämlich die Haftpflicht, und noch weiter links das Kraftfahrzeug, also das Auto. Gemeint ist eine Versicherung, die zahlt, wenn ich mit dem Auto jemandem einen Schaden zufüge. Mehr ist es nicht.\n\nÄhnlich geht es mit Verben. Die Vorsilbe „zer-“ macht etwas kaputt: Ein Thema, das zerredet wird, hat man so lange besprochen, bis nichts mehr davon übrig ist. „Ent-“ nimmt etwas weg: Wer den Keller entrümpelt, wirft das Gerümpel hinaus. Mein Lieblingswort aber ist „verschlimmbessern“. Darin stecken „verbessern“ und „schlimm“, und man ahnt sofort: Jemand wollte etwas besser machen und hat es schlimmer gemacht. Ein Wort, das ich leider häufig brauche.\n\nUnd wenn gar nichts hilft? Dann lese ich einfach weiter. Oft erklärt der nächste Satz, was gemeint war, und manchmal ist das Wort für das Verständnis schlicht unwichtig. Nicht jedes Wortungetüm verdient meine Aufmerksamkeit.",
      "explanation": "The column reads the compound from the right: the last element, \"die Versicherung\", is the head and gives the whole word its meaning and its feminine gender, and each element to the left narrows it down. Prefixes change verbs systematically: \"zer-\" destroys (\"zerreden\"), \"ent-\" removes (\"entrümpeln\"), and \"verschlimmbessern\" blends \"verbessern\" with \"schlimm\". The last paragraph names the other strategy: use the context, or skip a word that doesn't matter."
    }
  ],
  "c2-comprehension-strategies-3": [
    {
      "type": "write",
      "prompt": "Write a very short story (flash fiction) about a missed train and a last-minute decision, told in a terse style that leaves the logic between sentences implicit: no weil, deshalb or trotzdem, but colons, dashes, tense and word order instead.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Links ideas without connectors (asyndeton), so that cause, contrast or sequence must be inferred",
        "Uses colons and dashes to signal explanation, consequence or surprise",
        "Uses tense (Plusquamperfekt vs Präteritum) to make the order of events clear",
        "Uses at least one long verb bracket in which the meaning arrives only at the end"
      ],
      "modelAnswer": "Gleis 7\n\nDer Zug stand noch da. Die Türen waren schon geschlossen. Lea rannte – der Koffer schlug gegen ihre Knie, die Tasche rutschte von der Schulter. Zwei Meter noch. Dann ein Pfiff, ein Ruck: Der Zug fuhr an.\n\nSie blieb stehen. Auf der Anzeigetafel blinkte der nächste Zug nach Hamburg: drei Stunden später. Das Vorstellungsgespräch war um zwei.\n\nSie hatte am Abend zuvor drei Wecker gestellt. Sie hatte die Fahrkarte ausgedruckt, das Kleid gebügelt, die Antworten auf mögliche Fragen zweimal laut vor dem Spiegel geübt. Geholfen hatte nichts davon: Die Straßenbahn war im Schnee stecken geblieben.\n\nLea setzte sich auf den Koffer. Neben ihr telefonierte ein Mann, laut, wütend – auch er hatte den Zug verpasst. Eine Taube pickte an einer Brezel. Irgendwo lief Musik.\n\nDann zog sie das Handy aus der Tasche. Die Nummer der Personalabteilung hatte sie sich, ohne zu ahnen, wofür sie sie je brauchen würde, am Abend zuvor noch in aller Eile auf einen Zettel geschrieben. Sie wählte. Eine freundliche Stimme meldete sich.\n\n„Frau Krüger? Ich habe ein Problem – nein, eigentlich habe ich einen Vorschlag.“\n\nDraußen fiel weiter Schnee. Lea lächelte.",
      "explanation": "The story leaves the links implicit: short main clauses stand side by side, and the reader infers cause and contrast (\"Der Zug stand noch da. Die Türen waren schon geschlossen.\"). Colons give the result or explanation (\"Dann ein Pfiff, ein Ruck: Der Zug fuhr an\", \"Geholfen hatte nichts davon: ...\"), and dashes add a sudden aside or turn. The Plusquamperfekt (\"hatte ... gestellt\", \"war ... stecken geblieben\") reaches back before the scene, and in \"hatte sie sich, ohne zu ahnen, ..., am Abend zuvor ... auf einen Zettel geschrieben\" the meaning only arrives with the participle."
    }
  ],
  "c2-comprehension-strategies-6": [
    {
      "type": "write",
      "prompt": "Your package holiday in Crete did not match the catalogue, which promised a quiet hotel directly on the beach with three restaurants. Write a formal complaint to the tour operator, stating precisely what was promised and what you found, and claiming a price reduction.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Gives precise figures, names and dates (booking number, travel dates, distances, opening times, amounts)",
        "Uses negations and limiters precisely (\"keineswegs\", \"kaum\", \"nicht einmal\", \"lediglich\", \"höchstens\")",
        "Contrasts promise and reality (\"Laut Katalog ... Tatsächlich ...\")",
        "Makes a concrete claim with a deadline in a formal register"
      ],
      "modelAnswer": "Reklamation: Pauschalreise nach Kreta, Buchungsnummer KR-558120\n\nSehr geehrte Damen und Herren,\n\nvom 2. bis 16. September 2026 verbrachten meine Frau und ich einen Urlaub im Hotel Olivenhain in Chersonissos, den wir am 14. März bei Ihnen gebucht hatten. Leider entsprach die Unterkunft in wesentlichen Punkten keineswegs der Beschreibung in Ihrem Katalog.\n\nLaut Katalog liegt das Hotel „direkt am Strand“. Tatsächlich beträgt die Entfernung zum Meer rund 600 Meter, und dazwischen verläuft eine vierspurige Straße. Von der versprochenen „ruhigen Lage“ kann kaum die Rede sein: Der Verkehrslärm war bis nach Mitternacht zu hören.\n\nIhr Katalog wirbt außerdem mit drei Restaurants. Geöffnet war lediglich eines, und zwar nur bis 21 Uhr. Auf unsere Beschwerde an der Rezeption am 4. September erhielten wir nicht einmal eine schriftliche Bestätigung, und Ihre Reiseleiterin war höchstens zweimal pro Woche telefonisch erreichbar.\n\nAufgrund dieser Mängel mache ich eine Minderung des Reisepreises um 30 Prozent geltend, also 834 Euro bei einem Gesamtpreis von 2.780 Euro. Ich bitte Sie, den Betrag bis zum 15. Oktober 2026 auf mein Konto zu überweisen. Fotos sowie das Protokoll meiner Beschwerde vor Ort sind beigefügt.\n\nMit freundlichen Grüßen\nMartin Seidel",
      "explanation": "The complaint pins every claim to a checkable detail: booking number, dates, the distance of 600 metres, the opening time and the exact amount. Negations and limiters carry precise meaning: \"keineswegs\" (not at all), \"kaum die Rede sein\" (hardly), \"lediglich eines\" (only one), \"nicht einmal\" (not even) and \"höchstens zweimal\" (at most). \"Laut Katalog ... Tatsächlich ...\" sets promise against reality, and \"mache ... eine Minderung ... geltend\" is the formal way to claim a reduction."
    }
  ],
  "c2-vocab-verb-noun-collocations": [
    {
      "type": "write",
      "prompt": "After a record-breaking summer heatwave, your residents' initiative wants your city to make your neighbourhood cooler. As its spokesperson, write a short proposal to the city council.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses at least five fixed verb-noun collocations (\"Bilanz ziehen\", \"Maßnahmen ergreifen\", \"Bedenken äußern\", \"Anspruch erheben\", \"Verantwortung übernehmen\", \"Stellung beziehen\", \"Vorschläge unterbreiten\")",
        "Structures the proposal: situation, numbered measures, objections, request",
        "Uses a formal register with nominal style where appropriate",
        "Ends with a clear request for a response or decision"
      ],
      "modelAnswer": "Vorschlag der Bürgerinitiative „Kühles Westend“\n\nSehr geehrte Damen und Herren,\n\nnach dem heißesten Sommer seit Beginn der Aufzeichnungen möchten wir als Bürgerinitiative Bilanz ziehen und Ihnen zugleich konkrete Vorschläge unterbreiten.\n\nAn 23 Tagen lagen die Temperaturen in unserem Viertel über 32 Grad. Besonders betroffen waren ältere Menschen und Familien mit kleinen Kindern, die in den dicht bebauten Straßen rund um den Westplatz kaum Schatten finden. Wir sind überzeugt, dass die Stadt hier rasch Maßnahmen ergreifen muss.\n\nUnsere Vorschläge:\n1. die Pflanzung von mindestens 60 Straßenbäumen bis Ende 2027, vorrangig in der Kaiser- und der Gartenstraße;\n2. die Entsiegelung des vollständig asphaltierten Westplatzes und die Anlage einer Grünfläche mit Trinkbrunnen;\n3. die Begrünung der Dächer städtischer Gebäude, beginnend mit der Grundschule am Westplatz.\n\nUns ist bewusst, dass einige Anwohner Bedenken wegen wegfallender Parkplätze geäußert haben. Diese Sorge nehmen wir ernst. Wir erheben keinen Anspruch darauf, dass alle Vorschläge sofort umgesetzt werden, erwarten aber, dass die Stadt Verantwortung übernimmt und einen verbindlichen Zeitplan vorlegt.\n\nWir bitten den Rat, in seiner nächsten Sitzung zu unseren Vorschlägen Stellung zu beziehen, und stehen für ein Gespräch jederzeit zur Verfügung.\n\nMit freundlichen Grüßen\nDr. Elif Kaya\nSprecherin der Bürgerinitiative",
      "explanation": "The proposal relies on fixed verb-noun collocations of educated German: \"Bilanz ziehen\", \"Vorschläge unterbreiten\", \"Maßnahmen ergreifen\", \"Bedenken äußern\", \"etwas ernst nehmen\", \"Anspruch erheben auf\", \"Verantwortung übernehmen\", \"einen Zeitplan vorlegen\" and \"Stellung beziehen zu\". The measures are listed as noun phrases (\"die Pflanzung von ...\", \"die Entsiegelung des ...\", \"die Begrünung der ...\"), which is the usual style of formal proposals."
    }
  ],
  "c2-debate-1": [
    {
      "type": "write",
      "prompt": "Your university's student parliament is debating whether all lectures should be recorded and put online. Write a written statement (Stellungnahme) of your position for its newsletter, building your argument step by step.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "States a clear thesis with a formal formula (\"Ich vertrete die Auffassung, dass ...\")",
        "Supports each argument with evidence (a figure or study) and an example",
        "Anticipates a counterargument and refutes it (\"Dieser Einwand ist ernst zu nehmen, greift aber zu kurz\")",
        "Draws an explicit conclusion (\"Daraus folgt ...\") and ends with a request"
      ],
      "modelAnswer": "Vorlesungen aufzeichnen: eine Frage der Fairness\n\nIch vertrete die Auffassung, dass alle Vorlesungen an unserer Universität aufgezeichnet und den Studierenden online zur Verfügung gestellt werden sollten.\n\nMein erstes Argument ist die Chancengleichheit. Laut einer Umfrage des AStA aus dem letzten Semester arbeiten fast zwei Drittel der Studierenden neben dem Studium, viele davon mehr als fünfzehn Stunden pro Woche. Wer abends in der Gastronomie jobbt oder Angehörige pflegt, verpasst zwangsläufig Veranstaltungen. Eine Aufzeichnung würde diesen Nachteil zumindest teilweise ausgleichen.\n\nZweitens verbessern Aufzeichnungen nachweislich das Lernen. In unserem Fachbereich wurden während der Pandemie alle Vorlesungen aufgezeichnet; die Durchfallquote in der Statistikklausur sank in dieser Zeit von 38 auf 27 Prozent. Studierende konnten schwierige Passagen mehrfach anhören, etwa Herleitungen, die im Hörsaal zu schnell vorbeigingen.\n\nGegner der Aufzeichnung wenden ein, die Hörsäle würden sich leeren und die Diskussion leide darunter. Dieser Einwand ist ernst zu nehmen, greift aber zu kurz. Wer heute nicht kommt, kommt auch ohne Aufzeichnung nicht, und Diskussionen finden ohnehin eher in Seminaren statt als in Vorlesungen mit 400 Teilnehmenden.\n\nDaraus folgt: Die Aufzeichnung ersetzt die Präsenz nicht, sie ergänzt sie. Ich bitte das Studierendenparlament daher, den Antrag zu unterstützen.",
      "explanation": "The statement follows the German chain of These, Argument, Beleg and Beispiel: \"Ich vertrete die Auffassung, dass ...\" states the thesis, each argument is introduced (\"Mein erstes Argument ist ...\", \"Zweitens ...\"), backed by a figure and illustrated with an example. The counterargument is reported in indirect speech (\"die Hörsäle würden sich leeren\", \"die Diskussion leide\"), acknowledged and refuted with \"ist ernst zu nehmen, greift aber zu kurz\", and \"Daraus folgt\" draws the conclusion."
    }
  ],
  "c2-debate-4": [
    {
      "type": "write",
      "prompt": "Write an excerpt from a heated radio panel discussion on banning private cars from city centres, with a moderator and two guests who interrupt each other. Show how the speakers take, hold and give back the floor.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Takes the floor politely (\"Darf ich da kurz einhaken?\", \"Wenn ich da widersprechen darf ...\")",
        "Holds the floor against interruption (\"Lassen Sie mich bitte ausreden\", \"Ich bin noch nicht fertig\")",
        "Returns to an earlier point (\"Um auf Ihren Punkt von vorhin zurückzukommen ...\")",
        "Uses doch, ja and eben for force and keeps the exchange sharp but courteous, ending in partial agreement"
      ],
      "modelAnswer": "Moderatorin: Frau Dr. Lenz, Sie fordern autofreie Innenstädte. Ist das nicht realitätsfern?\nLenz: Keineswegs. Kopenhagen und Gent zeigen ja seit Jahren, dass es funktioniert. Weniger Lärm, bessere Luft, und der Einzelhandel ...\nWagner: Darf ich da kurz einhaken? Gent ist doch nicht mit Stuttgart zu vergleichen.\nLenz: Lassen Sie mich bitte ausreden, Herr Wagner. Der Einzelhandel hat sich dort keineswegs so schlecht entwickelt, wie viele befürchtet hatten.\nWagner: Das mag sein, aber ...\nLenz: Ich bin noch nicht fertig. Das Entscheidende ist doch: Die Innenstadt gehört allen, nicht nur denen, die ein Auto haben.\nModeratorin: Herr Wagner, bitte.\nWagner: Danke. Wenn ich da widersprechen darf: Für viele Handwerker und ältere Menschen ist das Auto eben keine Bequemlichkeit, sondern eine Notwendigkeit. Wer mit dem Rollator unterwegs ist, steigt nicht mal eben aufs Lastenrad um.\nLenz: Dafür gibt es doch Ausnahmegenehmigungen. Das habe ich ja nie bestritten.\nWagner: Um auf Ihren Punkt von vorhin zurückzukommen: Sie sagten, die Innenstadt gehöre allen. Genau. Auch den Pendlern aus dem Umland, die keinen Bus vor der Haustür haben.\nModeratorin: Ein wichtiger Punkt. Frau Dr. Lenz, wie wollen Sie diese Menschen erreichen?\nLenz: Indem wir zuerst den Nahverkehr ausbauen und dann die Autos aus der Stadt holen, nicht umgekehrt. Da sind wir uns, glaube ich, sogar einig.\nWagner: Insofern, als es um die Reihenfolge geht, ja.",
      "explanation": "The guests take the floor with \"Darf ich da kurz einhaken?\" and \"Wenn ich da widersprechen darf\", and defend it with \"Lassen Sie mich bitte ausreden\" and \"Ich bin noch nicht fertig\". \"Um auf Ihren Punkt von vorhin zurückzukommen\" picks up an earlier claim and turns it against the speaker, reported in the Konjunktiv I (\"die Innenstadt gehöre allen\"). \"Doch\", \"ja\" and \"eben\" add force, and \"Insofern, als ...\" marks precise partial agreement at the end."
    }
  ],
  "c2-rhetorical-devices-style-workshop": [
    {
      "type": "write",
      "prompt": "A citizens' initiative wants to save an old open-air swimming pool from closure. Write the text of its leaflet (Aufruf), calling on residents to come to a rally and sign a petition.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses anaphora and parallelism (\"Hier haben wir ... Hier haben wir ...\", \"Wir verlangen ... Wir verlangen ...\")",
        "Uses a tricolon or a climax",
        "Uses an antithesis or a chiasmus (\"nicht ob wir uns ... leisten können, sondern ob wir es uns leisten können, ... zu verlieren\")",
        "Ends with a clear call to action: date, place and what to do"
      ],
      "modelAnswer": "Rettet das Waldbad!\n\nHier haben wir schwimmen gelernt. Hier haben wir unsere ersten Sommerferien verbracht, unsere ersten Pommes gegessen, unseren ersten Sonnenbrand bekommen. Hier treffen sich seit 1928 Jung und Alt, Arm und Reich, Alteingesessene und Zugezogene.\n\nUnd jetzt soll das Waldbad schließen. Die Stadt sagt, die Sanierung sei zu teuer. Wir sagen: Zu teuer ist es, einen Ort aufzugeben, der eine ganze Stadt zusammenhält.\n\nEin Freibad ist kein Luxus, es ist ein Stück Lebensqualität. Es ist der Ort, an dem Kinder schwimmen lernen, Rentner ihre Bahnen ziehen und Familien ohne Urlaubskasse den Sommer genießen. Wer hier spart, spart an der falschen Stelle.\n\nWir verlangen nicht das Unmögliche. Wir verlangen einen ehrlichen Kostenvergleich. Wir verlangen die Beteiligung der Bürgerinnen und Bürger. Und wir verlangen, dass die Entscheidung um ein Jahr verschoben wird.\n\nEs geht nicht darum, ob wir uns das Waldbad leisten können. Es geht darum, ob wir es uns leisten können, es zu verlieren.\n\nKommen Sie am Samstag, dem 18. April, um 11 Uhr zur Kundgebung vor dem Rathaus. Unterschreiben Sie unsere Petition, sprechen Sie mit Ihren Nachbarn, bringen Sie Ihre Kinder mit.\n\nNoch ist es nicht zu spät. Gemeinsam retten wir das Waldbad!",
      "explanation": "The leaflet opens with an anaphora (\"Hier haben wir ... Hier ...\") and a tricolon of firsts, followed by twin formulas (\"Jung und Alt, Arm und Reich\"). \"Die Stadt sagt ... Wir sagen ...\" and \"Es geht nicht darum, ob wir uns das Waldbad leisten können. Es geht darum, ob wir es uns leisten können, es zu verlieren\" are antitheses that turn the opponent's words around. The repeated \"Wir verlangen\" builds to a climax, and the closing imperatives give date, place and three concrete actions."
    }
  ],
  "c2-debate-8": [
    {
      "type": "write",
      "prompt": "For a seminar on political rhetoric, write a short analysis of one famous German speech, for example Richard von Weizsäcker's speech of 8 May 1985: its context, its key sentences and the devices that make them memorable.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Gives the context precisely (speaker, office, date, occasion)",
        "Quotes key sentences accurately with German quotation marks and integrates them into your own sentences",
        "Names and explains the devices at work (reinterpretation, metaphor, antithesis, the Wer ..., (der) ... pattern)",
        "Uses an analytical register with precise verbs (\"deutet um\", \"verleiht Gewicht\", \"appelliert an\")"
      ],
      "modelAnswer": "„Ein Tag der Befreiung“: Weizsäckers Rede zum 8. Mai 1985\n\nAm 8. Mai 1985, dem 40. Jahrestag des Kriegsendes in Europa, sprach Bundespräsident Richard von Weizsäcker in einer Gedenkstunde des Deutschen Bundestages. Die Rede gilt bis heute als eine der bedeutendsten der Bundesrepublik, und das liegt nicht zuletzt an ihrer Sprache.\n\nIhr zentraler Satz lautet: „Der 8. Mai war ein Tag der Befreiung.“ Er wirkt schlicht, ist aber eine bewusste Umdeutung. Für viele Deutsche der Kriegsgeneration hatte das Datum bis dahin vor allem für Niederlage, Zusammenbruch und Vertreibung gestanden. Indem Weizsäcker das Wort „Befreiung“ wählt, rückt er die Opfer der nationalsozialistischen Gewaltherrschaft in den Mittelpunkt und verleiht ihrer Perspektive offizielles Gewicht.\n\nEbenso einprägsam ist die Mahnung: „Wer aber vor der Vergangenheit die Augen verschließt, wird blind für die Gegenwart.“ Der Satz folgt dem klassischen Muster „Wer ..., (der) ...“, das eine allgemeingültige Regel formuliert. Das Bild der verschlossenen Augen wird im zweiten Teil zur Blindheit gesteigert, und die Antithese von Vergangenheit und Gegenwart macht deutlich, dass Erinnerung keine rückwärtsgewandte Pflicht ist, sondern eine Voraussetzung für verantwortliches Handeln.\n\nWeizsäcker appelliert dabei nicht an Schuldgefühle, sondern an Verantwortung. Gerade diese Verbindung von nüchternem Ton und präzisen Bildern erklärt, warum die Rede bis heute zitiert wird.",
      "explanation": "The analysis first places the speech (speaker, office, date, occasion), then quotes its two key sentences exactly and builds them into its own syntax (\"Ihr zentraler Satz lautet: ...\"). It names the devices: the reinterpretation (Umdeutung) of 8 May, the general rule in \"Wer ..., (der) ...\", the metaphor of closed eyes intensified into blindness, and the antithesis of Vergangenheit and Gegenwart. Analytical verbs such as \"rückt ... in den Mittelpunkt\", \"verleiht ... Gewicht\" and \"appelliert an\" keep the register academic."
    }
  ],
  "c2-presentations-negotiation-2": [
    {
      "type": "write",
      "prompt": "Your company's annual report includes a line chart of online and in-store sales from 2021 to 2025. Write the commentary that accompanies the chart, describing the trends precisely (invent consistent figures).",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses precise verbs of change (\"steigen\", \"zunehmen\", \"zurückgehen\", \"stagnieren\", \"sich verdoppeln\", \"sich abschwächen\")",
        "Distinguishes \"um\" (size of the change) from \"auf\" (new level), and Prozent from Prozentpunkte",
        "Names the chart type and what it shows (\"Das Liniendiagramm zeigt ...\", \"in Millionen Euro\")",
        "Interprets the figures briefly and ends with an outlook, in a formal register"
      ],
      "modelAnswer": "Umsatzentwicklung nach Vertriebskanälen 2021–2025\n\nDas Liniendiagramm zeigt die Umsatzentwicklung der Grünwald Möbel GmbH in den Jahren 2021 bis 2025, getrennt nach Online-Handel und stationärem Handel. Die Umsätze sind in Millionen Euro angegeben.\n\nDer Online-Umsatz hat sich im Betrachtungszeitraum mehr als verdoppelt: Er stieg von 14 Millionen Euro im Jahr 2021 auf 31 Millionen Euro im Jahr 2025. Besonders kräftig fiel das Wachstum 2023 aus, als der Umsatz gegenüber dem Vorjahr um 6 Millionen Euro zunahm. Seitdem hat sich der Anstieg etwas abgeschwächt.\n\nDer Umsatz in unseren Filialen ging dagegen zunächst deutlich zurück, und zwar von 46 Millionen Euro auf 38 Millionen Euro im Jahr 2023. In den beiden folgenden Jahren stagnierte er auf diesem Niveau.\n\nEntsprechend hat sich das Verhältnis der beiden Kanäle verschoben. Der Anteil des Online-Handels am Gesamtumsatz stieg von 23 auf 45 Prozent, also um 22 Prozentpunkte. Der Gesamtumsatz erhöhte sich im selben Zeitraum um 15 Prozent auf 69 Millionen Euro.\n\nDie Zahlen bestätigen, dass sich das Kaufverhalten unserer Kundinnen und Kunden dauerhaft verändert hat. Die Filialen bleiben jedoch als Ort der Beratung unverzichtbar. Für 2026 rechnen wir mit einem leichten Anstieg in beiden Kanälen.",
      "explanation": "The commentary names the chart and its unit, then describes each line with precise verbs: \"hat sich ... mehr als verdoppelt\", \"stieg\", \"nahm ... zu\", \"hat sich ... abgeschwächt\", \"ging ... zurück\", \"stagnierte\". \"Um\" gives the size of a change (\"um 6 Millionen Euro\", \"um 15 Prozent\") and \"auf\" the new level (\"auf 31 Millionen Euro\"). A share that rises from 23 to 45 per cent has grown by 22 Prozentpunkte, not 22 per cent."
    }
  ],
  "c2-counteroffer-dialogue-lab": [
    {
      "type": "write",
      "prompt": "Write a negotiation between the buyer for a hotel chain and the sales manager of a textile supplier about towels and bed linen: price, quantity and delivery dates. The buyer rejects the first offer, makes a counteroffer and ties every concession to a condition.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Rejects politely and proposes in the Konjunktiv II (\"Wir könnten Ihnen ... anbieten\", \"Wäre es denkbar, ...?\")",
        "Ties each concession to a condition (\"vorausgesetzt, dass ...\", \"unter der Bedingung, dass ...\", \"im Gegenzug\")",
        "Uses the vocabulary of negotiation (\"Spielraum\", \"Schmerzgrenze\", \"Zugeständnis\", \"Rahmenvertrag\")",
        "Ends with a provisional agreement summarised by one side (\"Dann halte ich fest: ...\")"
      ],
      "modelAnswer": "Einkäuferin: Herr Seidel, vielen Dank für Ihr Angebot. Der Preis von 9,80 Euro pro Handtuch liegt allerdings deutlich über dem, was wir uns vorgestellt hatten.\nVerkäufer: Das verstehe ich. Bedenken Sie aber, dass es sich um zertifizierte Bio-Baumwolle handelt. Viel Spielraum haben wir da nicht.\nEinkäuferin: Die Qualität stellen wir nicht in Frage. Wir könnten Ihnen jedoch 8,50 Euro anbieten, wenn wir die Menge auf 12.000 Stück erhöhen.\nVerkäufer: 8,50 Euro liegen unter unserer Schmerzgrenze. Bei 12.000 Stück wäre ich bereit, auf 9,20 Euro herunterzugehen, vorausgesetzt, dass Sie auch die Bettwäsche bei uns bestellen.\nEinkäuferin: Das ist ein Zugeständnis, das ich zu schätzen weiß. Wäre es denkbar, sich bei 8,90 Euro zu treffen? Im Gegenzug würden wir einen Rahmenvertrag über zwei Jahre abschließen.\nVerkäufer: Zwei Jahre, das klingt interessant. Unter der Bedingung, dass wir in zwei Teilen liefern, im März und im September, könnte ich mich darauf einlassen.\nEinkäuferin: Unsere neuen Häuser in Leipzig und Dresden eröffnen allerdings im April. Wir bräuchten die erste Lieferung spätestens Mitte März.\nVerkäufer: Mitte März ist knapp, aber machbar, wenn Sie uns die genaue Aufteilung bis Ende Januar mitteilen.\nEinkäuferin: Das sollte kein Problem sein. Dann halte ich fest: 12.000 Handtücher zu 8,90 Euro, dazu die Bettwäsche, ein Rahmenvertrag über zwei Jahre und die erste Lieferung bis Mitte März. Ich bestätige Ihnen die Einzelheiten schriftlich.\nVerkäufer: Einverstanden. Auf gute Zusammenarbeit!",
      "explanation": "Proposals and counteroffers are softened with the Konjunktiv II (\"Wir könnten Ihnen ... anbieten\", \"wäre ich bereit\", \"Wäre es denkbar, ...?\", \"würden wir ... abschließen\", \"Wir bräuchten\"). Every concession comes with a condition: \"wenn wir die Menge ... erhöhen\", \"vorausgesetzt, dass ...\", \"Im Gegenzug ...\", \"Unter der Bedingung, dass ...\". The negotiation vocabulary (\"Spielraum\", \"Schmerzgrenze\", \"Zugeständnis\", \"Rahmenvertrag\") and the closing summary \"Dann halte ich fest: ...\" make the agreement explicit."
    }
  ],
  "c2-body-language-text-detective": [
    {
      "type": "write",
      "prompt": "Write a short narrative account of a tense moment in a salary negotiation, focusing on the body language of both people: what they did and what it revealed.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses precise verbs and phrases for non-verbal signals (\"die Arme verschränken\", \"die Stirn runzeln\", \"mit den Achseln zucken\", \"den Blick abwenden\", \"sich zurücklehnen\", \"nicken\")",
        "Interprets the signals with supposition and comparison (\"als ob ...\", \"er dürfte ... begriffen haben\")",
        "Narrates in the Präteritum with a clear turning point",
        "Uses only a few lines of direct speech, so that the body language carries the scene"
      ],
      "modelAnswer": "Das Gehaltsgespräch\n\nAls Nina das Büro betrat, saß Herr Albrecht bereits hinter seinem Schreibtisch, die Arme vor der Brust verschränkt. Er nickte knapp, ohne aufzustehen. Kein gutes Zeichen, dachte sie.\n\nSie setzte sich, legte ihre Unterlagen auf den Tisch und begann, ihre Ergebnisse des letzten Jahres vorzustellen. Albrecht hörte zu, lehnte sich dabei aber immer weiter in seinem Stuhl zurück, als ob er möglichst viel Abstand zwischen sich und ihre Zahlen bringen wollte. Als sie die Summe nannte, 5.200 Euro brutto, runzelte er die Stirn und trommelte mit den Fingern auf die Tischplatte.\n\n„Das ist eine ganze Menge“, sagte er schließlich und zuckte mit den Achseln. Nina hielt seinem Blick stand. Sie hatte gelernt, dass man in solchen Momenten nicht als Erste reden darf.\n\nEine Weile war es still. Albrecht wandte den Blick ab und schaute aus dem Fenster. Dann griff er nach ihrer Mappe, blätterte darin und blieb auf der Seite mit dem Großkunden aus Lyon hängen. Seine Schultern lockerten sich, er beugte sich nach vorn und stützte die Ellbogen auf den Tisch. Er dürfte in diesem Moment begriffen haben, was ihr Weggang die Firma kosten würde.\n\n„Lassen Sie uns über 5.000 reden“, sagte er. Zum ersten Mal lächelte er.\n\nNina lächelte zurück. Die Verhandlung war so gut wie gewonnen.",
      "explanation": "The scene is told almost entirely through the body: \"die Arme vor der Brust verschränkt\", \"nickte knapp\", \"lehnte sich ... zurück\", \"runzelte die Stirn\", \"trommelte mit den Fingern\", \"zuckte mit den Achseln\", \"hielt seinem Blick stand\", \"wandte den Blick ab\" and finally \"beugte sich nach vorn\". \"Als ob er ... bringen wollte\" and \"Er dürfte ... begriffen haben\" interpret the signals as supposition, and the three short lines of direct speech mark the turning point."
    }
  ],
  "c2-qa-session-dialogue-lab": [
    {
      "type": "write",
      "prompt": "You have just presented a new car-sharing scheme to your city council's transport committee. Write the question-and-answer round that follows, with at least three questions, one of them hostile.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Thanks for questions and checks understanding with the Konjunktiv II (\"Habe ich Sie richtig verstanden, dass ...?\")",
        "Admits what you don't know and promises to follow up (\"Das kann ich Ihnen im Moment nicht genau sagen ...\", \"Ich reiche ... nach\")",
        "Stays calm and factual with a hostile question (\"Ich verstehe Ihre Skepsis. Lassen Sie mich die Fakten nennen\")",
        "Closes the round politely"
      ],
      "modelAnswer": "Vorsitzende: Vielen Dank für Ihre Präsentation, Frau Yilmaz. Gibt es Fragen? Herr Brandt, bitte.\nBrandt: Wie viele Fahrzeuge planen Sie im ersten Jahr?\nYilmaz: Danke für die Frage. Wir starten mit 120 Elektroautos an 40 Stationen. Bis Ende 2027 sollen es 300 werden.\nVorsitzende: Frau Heller.\nHeller: Sie haben vorhin von einem flächendeckenden Angebot gesprochen. Gilt das auch für die Außenbezirke?\nYilmaz: Habe ich Sie richtig verstanden, dass es Ihnen vor allem um Stadtteile wie Nordheim geht? In der ersten Phase konzentrieren wir uns tatsächlich auf die Innenstadt. Ihre Anregung nehme ich aber gern mit.\nVorsitzende: Herr Krämer.\nKrämer: Ehrlich gesagt halte ich das Ganze für ein teures Spielzeug für Großstadthipster. Wer zahlt am Ende die Rechnung? Die Steuerzahler?\nYilmaz: Ich verstehe Ihre Skepsis. Lassen Sie mich die Fakten nennen: Die Stadt stellt lediglich die Stellplätze zur Verfügung, Fahrzeuge und Betrieb finanzieren wir vollständig selbst. Und unser Pilotprojekt in Kassel hat gezeigt, dass gerade ältere Menschen ohne eigenes Auto das Angebot nutzen.\nKrämer: Und wenn Sie pleitegehen?\nYilmaz: Für diesen Fall sieht der Vertragsentwurf eine Rückbauverpflichtung vor. Wie hoch die Sicherheitsleistung genau ist, kann ich Ihnen im Moment nicht sagen. Ich reiche die Zahl aber bis Freitag schriftlich nach.\nVorsitzende: Weitere Fragen? Das scheint nicht der Fall zu sein.\nYilmaz: Dann bedanke ich mich herzlich für Ihre Aufmerksamkeit und auch für die kritischen Fragen.",
      "explanation": "The presenter thanks the first questioner, checks a vague question with \"Habe ich Sie richtig verstanden, dass ...?\" and takes a suggestion on board (\"Ihre Anregung nehme ich ... gern mit\"). The hostile question is met with acknowledgement and facts (\"Ich verstehe Ihre Skepsis. Lassen Sie mich die Fakten nennen\"), not counterattack, and a gap in knowledge is admitted openly with a promise to follow up (\"kann ich Ihnen im Moment nicht sagen. Ich reiche die Zahl ... nach\")."
    }
  ],
  "c2-citations-2": [
    {
      "type": "write",
      "prompt": "Write a short news article for a daily newspaper reporting on a (fictional) new study about how much time teenagers spend on their smartphones. Attribute every piece of information to its source.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses varied attribution formulas (\"laut\" + dative, \"X zufolge\", \"nach Angaben von\", \"wie X mitteilte\")",
        "Uses the Konjunktiv I to keep distance from claims, with the Konjunktiv II where the forms coincide, and the indicative for established facts",
        "Chooses reporting verbs by the stance they reveal (\"betonte\", \"räumte ein\", \"bestritt\", \"verwies auf\")",
        "Follows the structure of a news article: headline, a lead with the key facts, details, reactions"
      ],
      "modelAnswer": "Jugendliche verbringen fast fünf Stunden täglich am Smartphone\n\nBerlin – Jugendliche in Deutschland nutzen ihr Smartphone deutlich länger als noch vor fünf Jahren. Das geht aus einer Studie des Instituts für Medienpädagogik in Kassel hervor, die am Dienstag in Berlin vorgestellt wurde.\n\nLaut der Untersuchung verbringen 14- bis 17-Jährige im Durchschnitt 4 Stunden und 50 Minuten pro Tag am Handy; 2021 waren es noch knapp vier Stunden. Befragt wurden nach Angaben des Instituts rund 3.000 Jugendliche aus allen Bundesländern.\n\nStudienleiterin Prof. Dr. Miriam Kessler betonte, der Anstieg gehe vor allem auf Kurzvideos zurück. Viele Jugendliche unterschätzten ihre Nutzungszeit erheblich. Zugleich räumte sie ein, dass die Daten auf Selbstauskünften beruhten und daher nur begrenzt aussagekräftig seien.\n\nDem Bericht zufolge schläft fast jeder dritte Befragte unter der Woche weniger als sieben Stunden. Ob dies tatsächlich mit der Bildschirmzeit zusammenhängt, lässt die Studie offen.\n\nKritik kam von einem Verband der Digitalwirtschaft. Ein Sprecher bestritt, dass soziale Netzwerke für die Schlafprobleme verantwortlich seien, und verwies auf den Leistungsdruck in den Schulen. Wie die Veranstalter mitteilten, sollen die Ergebnisse im Herbst auf einer Fachtagung diskutiert werden.",
      "explanation": "Every fact is tied to its source: \"Das geht aus einer Studie ... hervor\", \"Laut der Untersuchung\", \"nach Angaben des Instituts\", \"Dem Bericht zufolge\" (zufolge after the noun) and \"Wie die Veranstalter mitteilten\". Claims are kept at a distance with the Konjunktiv I (\"gehe ... zurück\", \"seien\"), switching to the Konjunktiv II where the Konjunktiv I would look like the indicative (\"unterschätzten\", \"beruhten\"). \"Betonte\", \"räumte ein\" and \"bestritt\" tell the reader how each speaker positioned themselves."
    }
  ],
  "c2-citations-4": [
    {
      "type": "write",
      "prompt": "Your university newspaper is running a debate on whether submitting a text written largely by AI counts as plagiarism. Write an opinion piece (Kommentar) taking a clear position, with reference to Germany's best-known plagiarism affairs.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses the vocabulary of academic integrity (\"Plagiat\", \"Eigenleistung\", \"eidesstattliche Erklärung\", \"Quellenangabe\", \"Hilfsmittel\")",
        "Refers accurately to the Guttenberg and/or Schavan affairs and the online plagiarism hunters",
        "Distinguishes legitimate use of help and sources from plagiarism",
        "Takes and justifies a clear position and ends with a concrete recommendation"
      ],
      "modelAnswer": "Die Maschine schreibt, der Mensch unterschreibt\n\nAls Karl-Theodor zu Guttenberg 2011 seinen Doktortitel verlor und als Verteidigungsminister zurücktrat, war die Empörung groß. Freiwillige im Internet hatten im sogenannten GuttenPlag-Wiki nachgewiesen, dass weite Teile seiner Dissertation ohne Quellenangabe übernommen worden waren; aus dieser Bewegung ging später VroniPlag hervor. Zwei Jahre danach traf es Bildungsministerin Annette Schavan. Die Botschaft beider Affären war klar: Wer fremde Gedanken als eigene ausgibt, verliert seine Glaubwürdigkeit.\n\nHeute stellt sich die Frage neu. Ist eine Hausarbeit, die zu großen Teilen von einer KI formuliert wurde, ein Plagiat? Formal vielleicht nicht, denn die Sätze stammen von keinem Autor, den man zitieren könnte. Der Sache nach aber durchaus. Mit der eidesstattlichen Erklärung versichern wir, die Arbeit selbstständig verfasst und alle Hilfsmittel angegeben zu haben. Eine verschwiegene KI ist nichts anderes als eine verschwiegene Quelle.\n\nDas heißt nicht, dass KI im Studium tabu sein muss. Wer sich von ihr Literatur vorschlagen oder die eigene Gliederung kritisieren lässt, erbringt weiterhin die entscheidende Eigenleistung: Er denkt selbst. Problematisch wird es dort, wo die Maschine die Argumentation übernimmt.\n\nDie Hochschulen sollten deshalb nicht auf Verbote setzen, sondern auf Transparenz. Jede Arbeit sollte offenlegen, ob und wofür KI verwendet wurde. Wer das verschweigt, schmückt sich mit fremden Federn und sollte entsprechend behandelt werden.",
      "explanation": "The comment anchors its argument in the Guttenberg (2011) and Schavan (2013) affairs and the online plagiarism hunters behind GuttenPlag and VroniPlag. It uses the key terms precisely: \"Quellenangabe\", \"eidesstattliche Erklärung\", \"Hilfsmittel angeben\", \"Eigenleistung erbringen\". The thesis is built on a contrast between form and substance (\"Formal vielleicht nicht ... Der Sache nach aber durchaus\"), and the idiom \"sich mit fremden Federn schmücken\" sums up what plagiarism is."
    }
  ],
  "c2-citations-7": [
    {
      "type": "write",
      "prompt": "Write the abstract of your own seminar paper on a topic of your choice, for example the effect of the Deutschlandticket on commuting in rural areas. Use the impersonal academic style.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses impersonal academic formulas (\"Die vorliegende Arbeit untersucht ...\", \"Im Folgenden ...\", \"Es lässt sich zeigen, dass ...\", \"Festzuhalten ist ...\")",
        "Presents question, method, results and conclusion in that order",
        "Uses the passive and its alternatives (sich lassen, sein + zu) instead of ich",
        "Hedges results appropriately (\"deuten darauf hin\", \"legen nahe\", \"wäre ... zu prüfen\")"
      ],
      "modelAnswer": "Abstract\n\nDie vorliegende Arbeit untersucht, inwiefern die Einführung des Deutschlandtickets im Mai 2023 das Pendelverhalten im ländlichen Raum verändert hat. Während für Großstädte bereits mehrere Studien vorliegen, ist die Situation in dünn besiedelten Regionen bislang kaum erforscht.\n\nGrundlage der Untersuchung bilden eine Online-Befragung von 412 Pendlerinnen und Pendlern in einem niedersächsischen Landkreis sowie Fahrgastzahlen des regionalen Verkehrsverbunds aus den Jahren 2022 bis 2024. Im Folgenden werden zunächst die Ergebnisse der Befragung dargestellt und anschließend mit den Fahrgastzahlen abgeglichen.\n\nEs lässt sich zeigen, dass rund ein Viertel der Befragten seit Einführung des Tickets zumindest gelegentlich vom Auto auf Bus und Bahn umgestiegen ist. Die Fahrgastzahlen deuten darauf hin, dass dieser Effekt vor allem auf Strecken mit mindestens stündlichem Takt auftritt. Auf schlecht angebundenen Linien ist hingegen kaum eine Veränderung festzustellen.\n\nFestzuhalten ist somit, dass der Preis allein das Pendelverhalten nur begrenzt beeinflusst. Die Ergebnisse legen vielmehr nahe, dass das Ticket seine Wirkung erst in Verbindung mit einem ausreichenden Angebot entfaltet. Inwieweit sich diese Befunde auf andere Regionen übertragen lassen, wäre in weiteren Studien zu prüfen.",
      "explanation": "The abstract never uses ich: \"Die vorliegende Arbeit untersucht\", \"Im Folgenden werden ... dargestellt\", \"Es lässt sich zeigen\", \"ist ... festzustellen\" and \"Festzuhalten ist\" carry the impersonal academic voice through the passive, sich lassen and sein + zu. It follows the standard order of question, data and method, results, conclusion, and it hedges with \"deuten darauf hin\", \"legen nahe\" and the Konjunktiv II \"wäre ... zu prüfen\"."
    }
  ],
  "c2-vocab-politics": [
    {
      "type": "write",
      "prompt": "A German-language magazine for international residents wants a clear explainer: how does a law come into being in Germany? Write the article, using precise political vocabulary.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses precise political vocabulary (\"Gesetzentwurf\", \"Lesung\", \"Ausschuss\", \"Fraktion\", \"Koalition\", \"Opposition\", \"Bundesrat\", \"Vermittlungsausschuss\")",
        "Explains the sequence of the process with temporal connectors and the passive (\"wird ... überwiesen\", \"wird ... verkündet\")",
        "Distinguishes the roles of Bundestag, Bundesrat and Bundespräsident accurately, including Zustimmungs- vs Einspruchsgesetz",
        "Writes clearly for non-specialist readers, with a title and a hook"
      ],
      "modelAnswer": "Wie entsteht in Deutschland ein Gesetz?\n\nWer die Nachrichten verfolgt, hört oft, ein Gesetz sei „in erster Lesung beraten“ worden oder „im Bundesrat gescheitert“. Doch was bedeutet das eigentlich?\n\nAm Anfang steht ein Gesetzentwurf. Einbringen können ihn die Bundesregierung, der Bundesrat oder Abgeordnete aus der Mitte des Bundestages, etwa eine Fraktion. In der Praxis stammen die meisten Entwürfe von der Regierung. Sie legt ihren Entwurf zunächst dem Bundesrat vor, der dazu Stellung nehmen kann.\n\nAnschließend wird der Entwurf im Bundestag in drei Lesungen beraten. Nach der ersten Lesung wird er an die zuständigen Ausschüsse überwiesen. Dort findet die eigentliche Detailarbeit statt: Sachverständige werden angehört, Formulierungen geändert und Kompromisse zwischen den Koalitionsfraktionen gesucht. In der zweiten und dritten Lesung debattiert das Plenum erneut, wobei die Opposition ihre Einwände vorbringt, und stimmt schließlich ab.\n\nDanach ist wieder der Bundesrat an der Reihe, in dem die Länder vertreten sind. Bei sogenannten Zustimmungsgesetzen, etwa wenn die Finanzen der Länder betroffen sind, kann er ein Gesetz endgültig stoppen. Bei Einspruchsgesetzen dagegen kann der Bundestag einen Einspruch überstimmen. Kommt es zum Streit, wird häufig der Vermittlungsausschuss angerufen.\n\nZum Schluss unterzeichnet der Bundespräsident das Gesetz, und es wird im Bundesgesetzblatt verkündet. Erst dann kann es in Kraft treten.",
      "explanation": "The explainer walks through the process in order with \"Am Anfang\", \"zunächst\", \"Anschließend\", \"Nach der ersten Lesung\", \"Danach\" and \"Zum Schluss\", and the passive puts the bill, not the actors, at the centre (\"wird ... beraten\", \"wird ... überwiesen\", \"wird ... verkündet\"). It uses the political terms exactly: Gesetzentwurf, Fraktion, Lesung, Ausschuss, Koalitionsfraktionen, Opposition, Zustimmungs- and Einspruchsgesetz, Vermittlungsausschuss and Bundesgesetzblatt."
    }
  ],
  "c2-rhetorical-questions-2": [
    {
      "type": "write",
      "prompt": "A columnist in your local paper has written that young people today 'don't want to work any more'. Write a letter to the editor in reply, using questions that reveal your stance.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses etwa in a question that expects the answer no (\"Ist sie etwa faul, weil ...?\")",
        "Uses denn, überhaupt and eigentlich to signal reproach, surprise or doubt in questions",
        "Uses at least one negative rhetorical question that implies a positive claim (\"Ist es nicht vielmehr so, dass ...?\", \"Wer könnte es ihnen verdenken?\")",
        "Follows the form of a letter to the editor (reference to the article, signature) and ends with your own position"
      ],
      "modelAnswer": "Zur Kolumne „Die Generation, die nicht mehr arbeiten will“ vom 2. März\n\nMit wachsendem Ärger habe ich die Kolumne von Herrn Bergmann gelesen. Junge Menschen, schreibt er, wollten nicht mehr arbeiten, sondern nur noch eine gute Work-Life-Balance. Hat er eigentlich in letzter Zeit mit jungen Menschen gesprochen?\n\nMeine Tochter ist 24, Pflegefachkraft und arbeitet im Schichtdienst, auch an Weihnachten. Ist sie etwa faul, weil sie lieber vier Tage pro Woche arbeiten möchte als fünf? Und woher weiß Herr Bergmann überhaupt, was „die Jugend“ will? Seine einzige Quelle scheint ein Gespräch mit seinem Neffen zu sein.\n\nIst es nicht vielmehr so, dass junge Leute sehr genau hinschauen, unter welchen Bedingungen sie arbeiten? Viele haben erlebt, wie ihre Eltern sich bis zum Burn-out verausgabt haben. Wer könnte es ihnen da verdenken, dass sie andere Prioritäten setzen?\n\nUnd was ist denn so verwerflich daran, nach dem Sinn einer Arbeit zu fragen? Hat nicht jede Generation die Arbeitswelt ein Stück weit verändert? Frühere Generationen haben für die 40-Stunden-Woche und den freien Samstag gekämpft. Würde man ihnen heute deshalb Faulheit vorwerfen?\n\nIch wünsche mir von dieser Zeitung weniger Pauschalurteile und mehr Neugier. Junge Menschen wollen sehr wohl arbeiten, nur eben nicht um jeden Preis.\n\nSabine Krüger, Göttingen",
      "explanation": "The particles turn questions into statements of stance: \"etwa\" expects the answer no (\"Ist sie etwa faul ...?\"), \"überhaupt\" questions whether the columnist has any basis, \"eigentlich\" and \"denn\" add a note of reproach. Negative questions imply the opposite claim (\"Ist es nicht vielmehr so, dass ...?\", \"Hat nicht jede Generation ...?\"), and \"Wer könnte es ihnen da verdenken?\" means nobody could. The letter ends by stating its position plainly."
    }
  ],
  "c2-rhetorical-questions-4": [
    {
      "type": "write",
      "prompt": "Two friends argue about whether one of them should spend 3,500 euros on an e-bike instead of buying a cheap second-hand car. Write their conversation, using emphatic questions and answers.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses emphatic question structures (\"Ist es nicht gerade ..., das ...?\", \"Was anderes ist das als ...?\")",
        "Uses doch to contradict a negative question and ja or eben for emphasis in answers",
        "Uses the focus particles gerade and ausgerechnet",
        "Writes a natural dialogue in which one speaker finally gives way"
      ],
      "modelAnswer": "Ben: Du willst also wirklich 3.500 Euro für ein Fahrrad ausgeben? Ausgerechnet du, der ständig übers Geld jammert?\nLisa: Es ist ein E-Bike, kein Fahrrad. Und ja, genau das will ich.\nBen: Für das Geld bekommst du einen gebrauchten Kleinwagen. Ist es nicht gerade ein Auto, das dir im Winter fehlt?\nLisa: Fehlt es mir wirklich? Was anderes ist ein Auto in der Stadt als ein teures Stehzeug? Ich wohne fünf Kilometer vom Büro entfernt.\nBen: Und wenn es regnet? Fährst du dann etwa nicht mit dem Rad?\nLisa: Doch, natürlich fahre ich dann auch. Dafür gibt es Regenkleidung.\nBen: Und deine Einkäufe? Die Getränkekisten?\nLisa: Die bestelle ich ja sowieso online. Ist es nicht gerade die Parkplatzsuche, über die du dich jeden Tag aufregst?\nBen: Na gut, da hast du recht. Aber was ist mit Diebstahl?\nLisa: Eben! Genau deshalb kaufe ich ein gutes Schloss und eine Versicherung. Und rechne mal: Steuer, Versicherung, Benzin, Werkstatt. Was anderes ist ein altes Auto als ein Fass ohne Boden?\nBen: Hm. Du hast ja nicht ganz unrecht. Aber ausgerechnet im Februar kaufen?\nLisa: Gerade im Februar! Da gibt es die Vorjahresmodelle günstiger.\nBen: Weißt du was? Ich komme mit zum Händler. Vielleicht probiere ich auch eins aus.",
      "explanation": "\"Ist es nicht gerade ..., das / die ...?\" and \"Was anderes ist ... als ...?\" are emphatic questions that assert rather than ask. \"Doch\" contradicts the negative question \"Fährst du dann etwa nicht ...?\", while \"ja\" (\"Die bestelle ich ja sowieso\") and \"Eben!\" add emphasis in the answers. \"Ausgerechnet\" (of all people, of all months) and \"gerade\" (precisely) focus the exact point of disagreement, and Ben gives way with \"Du hast ja nicht ganz unrecht\"."
    }
  ],
  "c2-rhetorical-questions-5": [
    {
      "type": "write",
      "prompt": "Your brother promised to book the restaurant for your parents' 40th wedding anniversary party, but you have just found out he never did, and the restaurant is now fully booked. Write him an angry but ultimately constructive email.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses reproach questions (\"Was soll das denn?\", \"Hättest du nicht wenigstens ... können?\", \"Wie oft soll ich dir noch ...?\", \"Musste das ... sein?\")",
        "Sharpens the reproach with particles (denn, eigentlich, überhaupt, ausgerechnet)",
        "Turns from reproach to a constructive proposal in the Konjunktiv II",
        "Keeps an informal register between siblings, with a personal sign-off"
      ],
      "modelAnswer": "Hallo Max,\n\nich habe gerade beim „Goldenen Hirsch“ angerufen, um das Menü zu besprechen. Und weißt du, was die mir gesagt haben? Dass es gar keine Reservierung gibt. Für den 14. Juni ist das Restaurant inzwischen komplett ausgebucht.\n\nWas soll das denn? Du hast mir im Februar hoch und heilig versprochen, dass du dich darum kümmerst. Hättest du mir nicht wenigstens Bescheid sagen können, dass du es nicht schaffst? Wie oft soll ich dir eigentlich noch sagen, dass du nichts zusagen sollst, was du nicht halten kannst? Und musste das ausgerechnet bei Mamas und Papas Rubinhochzeit passieren?\n\nWeißt du überhaupt, wie viele Leute wir schon eingeladen haben? Dreißig! Tante Gisela hat sogar schon ihren Zug aus Wien gebucht.\n\nSo, jetzt habe ich mich ausgetobt. Ärgern bringt uns ja auch nicht weiter. Ich hätte einen Vorschlag: Wie wäre es, wenn wir die Feier zu uns in den Garten verlegen? Du könntest dich um Zelt und Bänke kümmern, ich frage beim Partyservice nach. Wenn du heute noch beim Verleih anrufst, könnte das klappen.\n\nUnd diesmal schickst du mir bitte bis heute Abend eine Bestätigung, ja?\n\nDeine genervte, aber immer noch liebende Schwester\nAnna",
      "explanation": "Reproach is expressed through questions that need no answer: \"Was soll das denn?\", \"Hättest du mir nicht wenigstens Bescheid sagen können?\" (Konjunktiv II past with a modal), \"Wie oft soll ich dir eigentlich noch sagen ...?\" and \"musste das ausgerechnet ... passieren?\". \"Denn\", \"eigentlich\", \"überhaupt\" and \"ausgerechnet\" sharpen the tone. \"So, jetzt habe ich mich ausgetobt\" marks the turn, after which the Konjunktiv II (\"Ich hätte einen Vorschlag\", \"Wie wäre es, wenn ...?\", \"Du könntest ...\") makes the email constructive."
    }
  ],
  "c2-rhetorical-questions-7": [
    {
      "type": "write",
      "prompt": "At the end of a turbulent year, your local paper asks you to write a short retrospective (Jahresrückblick) on what happened in your town. Use emphatic inversion and fronting to highlight the key moments.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Puts negative or restrictive elements in the Vorfeld for emphasis (\"Nie zuvor ...\", \"Selten ...\", \"Erst jetzt ...\")",
        "Uses \"Kaum hatte / war ..., da ...\" for events that followed immediately",
        "Uses \"nicht nur ..., sondern auch ...\" for emphasis",
        "Includes at least one rhetorical question and keeps the style of a newspaper column"
      ],
      "modelAnswer": "Ein Jahr, das unsere Stadt verändert hat\n\nNie zuvor hat unsere Stadt in einem einzigen Jahr so viel erlebt. Im Rückblick auf die vergangenen zwölf Monate fragt man sich: Wie viel Wandel verträgt eine Kleinstadt?\n\nKaum hatte das Jahr begonnen, da trat im Januar der Fluss über die Ufer. Selten war die Altstadt so verwundbar: Drei Tage lang standen Keller und Geschäfte unter Wasser. Doch nicht nur das Hochwasser war beeindruckend, sondern auch die Hilfsbereitschaft. Hunderte Freiwillige schleppten Sandsäcke, kochten für die Betroffenen und räumten danach gemeinsam auf.\n\nIm Frühjahr schloss dann die Schuhfabrik am Stadtrand, die fast hundert Jahre lang zum Stadtbild gehört hatte. Kaum war die Nachricht bekannt, da gründeten ehemalige Beschäftigte eine Genossenschaft, die heute in einer der alten Hallen Fahrräder repariert und verkauft.\n\nUnd dann der Sommer: Nie war das Freibad so voll, nie das Stadtfest so gut besucht wie in diesem Jahr. Nicht nur die Einheimischen feierten, sondern auch Gäste aus dem ganzen Umland.\n\nErst jetzt, am Ende des Jahres, wird klar, was diese Monate gezeigt haben: Eine Stadt ist nicht stark, weil ihr nichts passiert, sondern weil ihre Menschen zusammenhalten. Was könnte man sich für das neue Jahr Besseres wünschen?",
      "explanation": "Emphasis comes from what fills the Vorfeld: \"Nie zuvor hat ...\", \"Selten war ...\", \"Nie war ...\" and \"Erst jetzt ... wird klar\" put the restrictive word first, with the verb following directly. \"Kaum hatte das Jahr begonnen, da trat ...\" and \"Kaum war die Nachricht bekannt, da gründeten ...\" show events following immediately, and \"nicht nur ..., sondern auch ...\" stresses the unexpected. The opening and closing rhetorical questions frame the column."
    }
  ],
  "c2-job-interview-2": [
    {
      "type": "write",
      "prompt": "You are applying for a position as project manager for wind energy at a renewable-energy company in Freiburg. Write your Anschreiben, presenting your strengths with concrete evidence.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Presents strengths with evidence-based formulas (\"Ich verfüge über ...\", \"Es ist mir gelungen, ... zu ...\", \"Dabei konnte ich ...\")",
        "Uses the key soft-skill nouns precisely (\"Belastbarkeit\", \"Teamfähigkeit\", \"Durchsetzungsvermögen\", \"Verhandlungsgeschick\")",
        "Avoids both boasting and false modesty by giving concrete, measurable results",
        "Follows the structure of a German Anschreiben (subject line, motivation, experience, start date and salary expectation, closing)"
      ],
      "modelAnswer": "Bewerbung als Projektmanagerin Windenergie, Ihre Anzeige vom 2. Oktober 2026\n\nSehr geehrte Frau Dr. Hartmann,\n\ndie Energiewende nicht nur zu planen, sondern vor Ort umzusetzen: Genau das reizt mich an der ausgeschriebenen Stelle bei der Solvento GmbH.\n\nSeit 2021 arbeite ich als Projektingenieurin bei einem Planungsbüro in Kassel, wo ich Genehmigungsverfahren für Windparks in Nordhessen koordiniere. Ich verfüge über fundierte Kenntnisse im Immissionsschutzrecht und über mehrjährige Erfahrung in der Zusammenarbeit mit Behörden, Gemeinden und Grundstückseigentümern.\n\nBesonders gefordert war ich beim Windpark Hohe Heide. Als sich eine Bürgerinitiative gegen das Projekt formierte, organisierte ich drei Informationsabende und einen runden Tisch. Dabei ist es mir gelungen, die wichtigsten Einwände durch die Verlegung von zwei Anlagen auszuräumen; das Projekt wurde 2024 ohne Klage genehmigt. Diese Erfahrung hat mein Verhandlungsgeschick und meine Belastbarkeit deutlich gestärkt.\n\nMeine Kolleginnen und Kollegen schätzen meine strukturierte Arbeitsweise und meine Teamfähigkeit. Zugleich scheue ich mich nicht, Termine und Budgets gegenüber Partnern mit dem nötigen Durchsetzungsvermögen zu vertreten.\n\nIch könnte die Stelle zum 1. Januar 2027 antreten. Meine Gehaltsvorstellung liegt bei 68.000 Euro brutto im Jahr. Über die Einladung zu einem persönlichen Gespräch freue ich mich sehr.\n\nMit freundlichen Grüßen\nJohanna Weber",
      "explanation": "Strengths are stated factually and backed by evidence: \"Ich verfüge über fundierte Kenntnisse ...\", \"Dabei ist es mir gelungen, ... auszuräumen\" and the measurable result \"ohne Klage genehmigt\". The soft-skill nouns \"Verhandlungsgeschick\", \"Belastbarkeit\", \"Teamfähigkeit\" and \"Durchsetzungsvermögen\" are each tied to something concrete, which avoids both boasting and false modesty. The letter follows the German pattern of subject line, motivating opening, experience, start date and salary expectation."
    }
  ],
  "c2-job-interview-4": [
    {
      "type": "write",
      "prompt": "A company in Stuttgart has offered you a job as a controller and sent you the draft contract. Before signing, write a polite email to HR asking about salary details and contract terms, and negotiating one point.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses contract vocabulary precisely (\"Jahresbrutto\", \"13. Monatsgehalt\", \"Tarifvertrag\", \"Probezeit\", \"Kündigungsfrist\", \"befristet / unbefristet\")",
        "Asks politely with the Konjunktiv II and indirect questions (\"Könnten Sie mir bitte mitteilen, ob ...?\", \"Ich wäre Ihnen dankbar, wenn ...\")",
        "Negotiates one point tactfully, with a reason (\"Wäre es denkbar, ...?\")",
        "Opens and closes as a professional email, expressing pleasure about the offer"
      ],
      "modelAnswer": "Betreff: Ihr Vertragsangebot vom 5. Oktober – Rückfragen\n\nSehr geehrter Herr Lang,\n\nvielen Dank für Ihr Angebot und den Vertragsentwurf für die Stelle als Controllerin. Ich freue mich sehr über Ihr Vertrauen und möchte die Stelle gern antreten. Bevor ich den Vertrag unterschreibe, hätte ich allerdings noch einige Fragen.\n\nIm Entwurf ist ein Jahresbrutto von 62.000 Euro genannt. Könnten Sie mir bitte mitteilen, ob darin das 13. Monatsgehalt bereits enthalten ist oder ob es zusätzlich gezahlt wird? Außerdem wäre ich Ihnen dankbar, wenn Sie mir erläutern könnten, ob sich das Gehalt nach einem Tarifvertrag richtet und wann die nächste Gehaltsanpassung vorgesehen ist.\n\nDie Probezeit beträgt laut § 3 sechs Monate. Mich würde interessieren, welche Kündigungsfrist danach gilt, da der Vertrag lediglich auf die gesetzlichen Regelungen verweist.\n\nZuletzt ein Punkt, über den ich gern mit Ihnen sprechen würde: Der Vertrag ist zunächst auf zwei Jahre befristet. Da ich für die Stelle aus Hamburg umziehe und meine bisherige unbefristete Position aufgebe, wäre mir eine unbefristete Anstellung sehr wichtig. Wäre es denkbar, auf die Befristung zu verzichten oder zumindest eine Übernahme nach der Probezeit vertraglich festzuhalten?\n\nFür ein kurzes Telefonat stehe ich Ihnen gern zur Verfügung. Vielen Dank im Voraus für Ihre Rückmeldung.\n\nMit freundlichen Grüßen\nLaura Schmitt",
      "explanation": "The email uses the precise terms of a German employment contract (Jahresbrutto, 13. Monatsgehalt, Tarifvertrag, Probezeit, Kündigungsfrist, befristet / unbefristet). Questions are wrapped in polite Konjunktiv II frames with verb-final indirect questions (\"Könnten Sie mir bitte mitteilen, ob ...\", \"wäre ich Ihnen dankbar, wenn ...\", \"Mich würde interessieren, welche ...\"). The one real negotiation point is justified first and then raised as a tentative question: \"Wäre es denkbar, ...?\""
    }
  ],
  "c2-job-interview-5": [
    {
      "type": "write",
      "prompt": "In an interview for an accounting position, the interviewer asks about two things in your CV: you left a company after only eight months, and there is a fifteen-month gap after that. Write the part of the interview in which you explain them tactfully.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Explains the departure and the gap with neutral, nominal phrasing (\"betriebsbedingte Kündigung\", \"Pflege eines Angehörigen\", \"berufliche Neuorientierung\")",
        "Uses the passive or impersonal constructions to avoid blaming anyone (\"Die Buchhaltung wurde ... verlagert\")",
        "Frames the gap positively by showing what you did and learned (Weiterbildung, new skills)",
        "Stays factual and positive about former employers, in a natural interview dialogue"
      ],
      "modelAnswer": "Herr Fischer: Frau Novak, in Ihrem Lebenslauf fällt auf, dass Sie die Firma Brenner Logistik schon nach acht Monaten wieder verlassen haben. Was war der Grund?\nFrau Novak: Das ist eine berechtigte Frage. Die Buchhaltung wurde damals im Zuge einer Umstrukturierung an den Hauptsitz in Polen verlagert, und meine Stelle fiel weg. Es handelte sich also um eine betriebsbedingte Kündigung. Ich habe in diesen acht Monaten trotzdem viel gelernt, vor allem über Konzernabschlüsse.\nHerr Fischer: Danach gibt es eine Lücke von fünfzehn Monaten. Was haben Sie in dieser Zeit gemacht?\nFrau Novak: Kurz nach der Kündigung erkrankte mein Vater schwer. Ich habe mich bewusst dafür entschieden, ihn in dieser Phase zu pflegen und meine Mutter zu entlasten. Das war keine leichte Zeit, aber ich bereue die Entscheidung nicht.\nHerr Fischer: Das verstehe ich. Und beruflich?\nFrau Novak: Ich wollte fachlich nicht stehen bleiben. Deshalb habe ich parallel eine berufsbegleitende Weiterbildung zur Bilanzbuchhalterin absolviert und die Prüfung bei der IHK im März bestanden. Außerdem habe ich mich in DATEV eingearbeitet, das Sie ja auch verwenden.\nHerr Fischer: Und wie sieht es heute aus? Können Sie sich wieder voll auf eine neue Stelle konzentrieren?\nFrau Novak: Ja. Mein Vater ist inzwischen gut versorgt, und ich freue mich darauf, nach dieser Phase wieder Verantwortung in einem Team zu übernehmen.",
      "explanation": "The candidate explains the departure with the neutral term \"betriebsbedingte Kündigung\" and an agentless passive (\"Die Buchhaltung wurde ... verlagert\", \"meine Stelle fiel weg\"), so no one is blamed. The gap is presented as a conscious decision (\"Ich habe mich bewusst dafür entschieden, ...\") and filled with evidence of development: a Weiterbildung, an IHK exam and new software skills. \"Das ist eine berechtigte Frage\" acknowledges the question, and the answers stay factual and forward-looking."
    }
  ],
  "c2-job-interview-6": [
    {
      "type": "write",
      "prompt": "A website for international professionals moving to Germany asks you for a short article explaining the German qualification system to job seekers, and how to get a foreign degree recognised.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Explains the dual system and its key terms (\"Ausbildung\", \"Berufsschule\", \"Meisterbrief\", \"Abitur\", \"Universität\" vs \"Fachhochschule\")",
        "Explains recognition of foreign qualifications (\"Anerkennung\", \"Zeugnisbewertung\", \"reglementierter Beruf\")",
        "Uses a clear, reader-oriented style with examples and comparisons",
        "Ends with practical advice for presenting qualifications in an application"
      ],
      "modelAnswer": "Ausbildung, Meister, Bachelor: Deutsche Abschlüsse verständlich erklärt\n\nWer sich in Deutschland bewirbt, stößt schnell auf Begriffe, die es in anderen Ländern so nicht gibt. Ein kleiner Wegweiser.\n\nDas Herzstück des deutschen Systems ist die duale Ausbildung. Junge Menschen lernen dabei rund drei Jahre lang einen Beruf, etwa Industriemechanikerin oder Bankkaufmann, und zwar abwechselnd im Betrieb und in der Berufsschule. Eine abgeschlossene Ausbildung genießt hohes Ansehen und ist keineswegs ein zweitklassiger Abschluss. Wer sich danach weiterbildet, kann den Meisterbrief erwerben, der im Deutschen Qualifikationsrahmen auf derselben Stufe steht wie ein Bachelor.\n\nDas Abitur berechtigt zum Studium. Dabei unterscheidet man zwischen Universitäten, die stärker forschungsorientiert sind, und Fachhochschulen, die sich heute meist Hochschulen für angewandte Wissenschaften nennen und besonders praxisnah ausbilden.\n\nUnd was ist mit Ihrem ausländischen Abschluss? Bei nicht reglementierten Berufen, etwa in der Informatik oder im Marketing, brauchen Sie keine formale Anerkennung. Eine Zeugnisbewertung der Zentralstelle für ausländisches Bildungswesen hilft Arbeitgebern aber, Ihren Abschluss einzuordnen. Für reglementierte Berufe wie Ärztin, Pflegefachmann oder Lehrerin ist die Anerkennung dagegen Pflicht. Informationen bietet das Portal „Anerkennung in Deutschland“.\n\nUnser Tipp: Übersetzen Sie Ihre Abschlüsse nicht einfach wörtlich, sondern beschreiben Sie im Lebenslauf kurz Inhalt und Dauer, zum Beispiel: „Bachelor of Engineering, vierjähriges Studium“. So wissen Personaler sofort, woran sie sind.",
      "explanation": "The article explains the key terms of the German system in context: the duale Ausbildung with its Betrieb and Berufsschule, the Meisterbrief (on the same level as a Bachelor), the Abitur, and the difference between Universität and Fachhochschule. It then distinguishes reglementierte Berufe, which require Anerkennung, from others, where a Zeugnisbewertung is enough. Contrasts such as \"keineswegs ein zweitklassiger Abschluss\", \"dagegen\" and the imperative tip keep it reader-oriented."
    }
  ],
  "c2-conflict-resolution-2": [
    {
      "type": "write",
      "prompt": "A member of your team, Herr Hoffmann, comes to your office upset because a colleague presented his analysis to senior management as if it were her own. As team leader, write the conversation in which you listen actively before agreeing on next steps.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Paraphrases what he says (\"Wenn ich Sie richtig verstehe, ...\")",
        "Mirrors his feelings (\"Das klingt, als wären Sie ...\", \"Das kann ich gut nachvollziehen\")",
        "Asks open questions (\"Was genau meinen Sie mit ...?\", \"Was würden Sie sich wünschen?\")",
        "Reports the other side neutrally in indirect speech and agrees on a concrete next step"
      ],
      "modelAnswer": "Hoffmann: Haben Sie kurz Zeit? Es geht um die Präsentation gestern.\nTeamleiterin: Natürlich, setzen Sie sich. Was ist passiert?\nHoffmann: Frau Berger hat der Geschäftsführung die Auswertung der Kundenumfrage vorgestellt, als hätte sie alles allein gemacht. Dabei habe ich drei Wochen daran gesessen! Mein Name ist kein einziges Mal gefallen.\nTeamleiterin: Wenn ich Sie richtig verstehe, geht es Ihnen vor allem darum, dass Ihre Arbeit nicht sichtbar geworden ist.\nHoffmann: Genau. Und das ist nicht das erste Mal.\nTeamleiterin: Das klingt, als wären Sie nicht nur verärgert, sondern auch enttäuscht.\nHoffmann: Ja, enttäuscht trifft es. Ich dachte, wir arbeiten als Team.\nTeamleiterin: Das kann ich gut nachvollziehen. Was genau meinen Sie mit „nicht das erste Mal“?\nHoffmann: Bei der Marktanalyse im Frühjahr war es ähnlich. Da habe ich aber nichts gesagt.\nTeamleiterin: Danke, dass Sie es diesmal ansprechen. Ich habe gestern kurz mit Frau Berger gesprochen. Sie sagte, sie habe die Präsentation unter großem Zeitdruck vorbereitet, und es sei ihr nicht bewusst gewesen, dass auf den Folien keine Namen standen.\nHoffmann: Das mag sein. Aber es ändert nichts am Ergebnis.\nTeamleiterin: Da haben Sie recht. Was würden Sie sich jetzt wünschen?\nHoffmann: Dass die Geschäftsführung erfährt, wer die Auswertung gemacht hat.\nTeamleiterin: Dann schreibe ich der Geschäftsführung heute noch, wer daran beteiligt war, und schlage für Donnerstag ein Gespräch zu dritt vor. Wäre das ein guter erster Schritt?\nHoffmann: Ja. Danke.",
      "explanation": "The team leader first paraphrases (\"Wenn ich Sie richtig verstehe, geht es Ihnen vor allem darum, dass ...\") and mirrors the feeling with the Konjunktiv II (\"Das klingt, als wären Sie ... enttäuscht\"), then validates it (\"Das kann ich gut nachvollziehen\"). Open questions (\"Was genau meinen Sie mit ...?\", \"Was würden Sie sich jetzt wünschen?\") let him explain, and the colleague's side is reported neutrally in the Konjunktiv I (\"sie habe ... vorbereitet\", \"es sei ihr nicht bewusst gewesen\") before a concrete next step is offered as a question."
    }
  ],
  "c2-conflict-resolution-4": [
    {
      "type": "write",
      "prompt": "At your best friend's wedding, you told an embarrassing story about her ex-boyfriend in your speech, and she was deeply hurt. Write her a sincere letter of apology.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses sincere apology formulas (\"Ich möchte mich aufrichtig bei dir entschuldigen\", \"Es tut mir unendlich leid\")",
        "Names exactly what you did with the past infinitive (\"dich ... bloßgestellt zu haben\", \"dich gekränkt zu haben\")",
        "Takes full responsibility without excuses or non-apologies (no \"falls\", no agentless passive)",
        "Offers to make amends and leaves the next step to her"
      ],
      "modelAnswer": "Liebe Katrin,\n\nseit Samstag geht mir dein Gesicht nicht mehr aus dem Kopf, in dem Moment, als ich in meiner Rede die Geschichte mit Jonas und dem Campingurlaub erzählt habe. Ich habe gesehen, wie du blass geworden bist, und trotzdem weitergeredet. Dafür möchte ich mich aufrichtig bei dir entschuldigen.\n\nEs tut mir unendlich leid, dich ausgerechnet an deinem Hochzeitstag vor all euren Gästen so bloßgestellt zu haben. Ich wollte witzig sein, aber das ist keine Entschuldigung. Ich hätte wissen müssen, dass diese Geschichte nichts in einer Hochzeitsrede zu suchen hat, erst recht nicht vor Daniels Familie. Ich bereue zutiefst, dich gekränkt und dir einen Teil dieses Tages verdorben zu haben.\n\nIch schreibe dir das nicht, damit du mir sofort verzeihst. Ich weiß, dass ich dein Vertrauen verletzt habe, und ich verstehe, wenn du gerade Abstand brauchst. Wenn es etwas gibt, womit ich es wiedergutmachen kann, sag es mir bitte. Ich würde mich zum Beispiel gern auch bei Daniels Eltern entschuldigen, wenn du das für richtig hältst.\n\nDu bist seit zwanzig Jahren meine beste Freundin, und diese Freundschaft ist mir wichtiger als jede Pointe. Ich hoffe, dass wir irgendwann in Ruhe darüber sprechen können, wann immer du dazu bereit bist.\n\nIn Liebe\ndeine Sophie",
      "explanation": "The apology names the act precisely with past infinitives (\"dich ... bloßgestellt zu haben\", \"dich gekränkt und dir ... verdorben zu haben\") and takes responsibility in the first person: no \"falls sich jemand verletzt gefühlt hat\", no \"Fehler wurden gemacht\". \"Ich wollte witzig sein, aber das ist keine Entschuldigung\" refuses the excuse, \"Ich hätte wissen müssen\" admits the failure, and the offer to make amends leaves the timing to her."
    }
  ],
  "c2-historical-narrative-3": [
    {
      "type": "write",
      "prompt": "For a family history website, write a short account of an ancestor (real or invented) who emigrated from a German-speaking region in the 1920s. Use the techniques of historical narrative, including foreshadowing.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Narrates in the Präteritum, with the Plusquamperfekt for background",
        "Expresses the future in the past with \"sollte\" (what fate held) and \"würde\"",
        "Uses \"im Begriff sein, ... zu ...\" for an action about to happen",
        "Uses precise date expressions (\"im Frühjahr 1923\", \"Anfang der 1930er-Jahre\") and ends with a look forward"
      ],
      "modelAnswer": "Johann Berger: Von der Rhön nach Buenos Aires\n\nIm Frühjahr 1923 stand Johann Berger, mein Urgroßvater, mit einem Koffer und zwanzig Dollar im Hamburger Hafen. Er war damals 24 Jahre alt. Die Inflation hatte die Ersparnisse seiner Eltern innerhalb weniger Monate vernichtet, und die kleine Schreinerei in der Rhön, die die Familie seit drei Generationen betrieben hatte, warf längst nichts mehr ab.\n\nEin Freund aus dem Dorf war zwei Jahre zuvor nach Argentinien gegangen und hatte in seinen Briefen von Arbeit und Land geschwärmt. Als Johann im Begriff war, an Bord zu gehen, drehte er sich noch einmal zu seiner Mutter um. Er sollte sie nie wiedersehen: Sie starb drei Jahre später, bevor er genug Geld für eine Rückreise gespart hatte.\n\nIn Buenos Aires fand er zunächst Arbeit in einer Möbelfabrik. Nachdem er Spanisch gelernt hatte, machte er sich Anfang der 1930er-Jahre selbstständig. Seine Werkstatt würde später sein Sohn übernehmen, und noch heute stehen in manchen Häusern der Stadt Schränke mit seinem eingebrannten Zeichen.\n\nDeutsch sprach Johann bis zu seinem Lebensende nur noch, wenn er schimpfte. Seine Enkel sollten erst Jahrzehnte später nach der Rhön suchen, und sie fanden dort ein Dorf, in dem sich niemand mehr an die Bergers erinnerte.",
      "explanation": "The story is narrated in the Präteritum, with the Plusquamperfekt for what lay behind each moment (\"hatte ... vernichtet\", \"war ... gegangen\", \"Nachdem er ... gelernt hatte\"). \"Er sollte sie nie wiedersehen\" and \"Seine Enkel sollten erst Jahrzehnte später ...\" use sollte to look ahead from the narrated past, \"würde später sein Sohn übernehmen\" is the future in the past with würde, and \"im Begriff war, an Bord zu gehen\" captures the moment just before the departure."
    }
  ],
  "c2-historical-narrative-5": [
    {
      "type": "write",
      "prompt": "Write the voice-over script for a short TV documentary segment on the night of 12 to 13 August 1961, when the sealing of the border in Berlin began, following events in two or more places at the same time.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Narrates simultaneous events with \"während\" (as a conjunction and as a preposition with the genitive), \"unterdessen\", \"zur gleichen Zeit\" and \"derweil\"",
        "Anchors events precisely in time (\"gegen ein Uhr nachts\", \"binnen weniger Stunden\", \"erst neun Tage später\")",
        "Switches clearly between places so the viewer is never confused",
        "Uses the historical present consistently, as documentaries do, with a future-in-the-past ending"
      ],
      "modelAnswer": "Berlin, Samstag, 12. August 1961. Ein warmer Sommerabend. In West-Berlin sitzen die Menschen in Biergärten, im Ostteil der Stadt gehen viele früh schlafen. Niemand ahnt, was in den nächsten Stunden geschehen wird.\n\nGegen ein Uhr nachts rücken im Osten Volkspolizei, Grenzpolizei und Betriebskampfgruppen an die Sektorengrenze vor. Lastwagen bringen Stacheldraht und Betonpfähle. Binnen weniger Stunden wird eine Stadt geteilt.\n\nWährend Uniformierte am Potsdamer Platz das Pflaster aufreißen, schläft Willy Brandt, der Regierende Bürgermeister West-Berlins, in einem Zug auf dem Weg nach Kiel. Er befindet sich mitten im Bundestagswahlkampf. In Hannover erreicht ihn die Nachricht. Er bricht die Reise ab und fliegt zurück nach Berlin.\n\nUnterdessen werden in der Stadt die S- und U-Bahn-Verbindungen zwischen Ost und West unterbrochen. Zur gleichen Zeit stehen die ersten Berliner fassungslos an den Absperrungen. Manche rufen Verwandten auf der anderen Seite noch etwas zu.\n\nIn Bonn verläuft der Sonntag derweil merkwürdig ruhig. Bundeskanzler Konrad Adenauer lässt sich unterrichten, ruft zur Besonnenheit auf und setzt seinen Wahlkampf fort. Nach Berlin reist er erst neun Tage später.\n\nWährend des ganzen Vormittags wächst die Menge an der Grenze. Was in dieser Nacht mit Stacheldraht beginnt, wird bald zu einer Mauer aus Beton. Sie soll achtundzwanzig Jahre lang stehen.",
      "explanation": "The script follows three places at once and marks every switch: \"Während\" as a conjunction (\"Während Uniformierte ... aufreißen, schläft Willy Brandt ...\") and as a preposition with the genitive (\"Während des ganzen Vormittags\"), \"Unterdessen\", \"Zur gleichen Zeit\" and \"derweil\". Time anchors such as \"Gegen ein Uhr nachts\", \"Binnen weniger Stunden\" and \"erst neun Tage später\" keep the chronology clear. The historical present runs throughout, and \"Sie soll achtundzwanzig Jahre lang stehen\" is the future seen from that night."
    }
  ],
  "c2-historical-narrative-7": [
    {
      "type": "write",
      "prompt": "A history magazine has asked you to review a (fictional) new book on the decline of the Hanseatic League. Summarise the author's thesis, judge how well the sources support it, and use the cautious language of historians.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses the hedging vocabulary of historians (\"vermutlich\", \"offenbar\", \"es ist davon auszugehen, dass\", \"umstritten\", \"in der Forschung strittig\")",
        "Refers to the Quellenlage and separates what the sources show from the author's interpretation",
        "Includes a counterfactual consideration with the Konjunktiv II (\"Hätten ..., wäre ...\")",
        "Follows the form of a book review: bibliographic heading, summary, evaluation, recommendation"
      ],
      "modelAnswer": "Ulrike Brandes: Das lange Ende der Hanse. Handel und Macht im Ostseeraum 1450–1669. 384 Seiten.\n\nWarum verlor die Hanse, über Jahrhunderte die dominierende Handelsmacht im Norden Europas, ihren Einfluss? Ulrike Brandes vertritt in ihrem neuen Buch die These, der Niedergang sei weniger auf äußere Konkurrenz als auf die innere Uneinigkeit der Städte zurückzuführen.\n\nDie Autorin stützt sich vor allem auf die Protokolle der Hansetage, deren Teilnehmerzahl seit dem späten 15. Jahrhundert deutlich zurückging. Überzeugend zeigt sie, dass Städte wie Köln oder Danzig offenbar zunehmend eigene Wege gingen. Ob diese Abwendung aber Ursache oder eher Folge des wirtschaftlichen Bedeutungsverlusts war, ist in der Forschung umstritten, und auch Brandes kann diese Frage nicht abschließend beantworten. Die Quellenlage ist für viele kleinere Städte dünn; über deren Motive lässt sich vermutlich nur spekulieren.\n\nWeniger Raum gibt die Autorin der Konkurrenz durch die Niederländer und dem Aufstieg der Territorialstaaten. Es ist davon auszugehen, dass beides den Spielraum der Städte erheblich einschränkte. Hätten die Hansestädte gegenüber den Fürsten geschlossener auftreten können, wäre ihr Niedergang womöglich langsamer verlaufen, doch auch diese Überlegung bleibt notgedrungen spekulativ.\n\nInsgesamt legt Brandes eine quellennahe, gut lesbare Studie vor, deren Hauptthese anregt, ohne in jeder Hinsicht zu überzeugen. Für alle, die sich für die Geschichte des Ostseeraums interessieren, ist das Buch dennoch eine lohnende Lektüre.",
      "explanation": "The review reports the author's thesis in the Konjunktiv I (\"der Niedergang sei ... zurückzuführen\") and then separates evidence from interpretation: what the Hansetag records show, what is \"in der Forschung umstritten\" and where \"die Quellenlage ... dünn\" is. Hedges such as \"offenbar\", \"vermutlich\", \"Es ist davon auszugehen, dass ...\" and \"womöglich\" mark degrees of certainty, and the counterfactual \"Hätten ... auftreten können, wäre ... verlaufen\" is explicitly labelled as speculation."
    }
  ],
  "c2-historical-narrative-9": [
    {
      "type": "write",
      "prompt": "Your city council is debating whether to rename a street named after a 19th-century colonial official (invent him). Write an opinion piece (Kommentar) for the local paper, using the vocabulary of German memory culture.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses the vocabulary of memory culture precisely (\"Erinnerungskultur\", \"Aufarbeitung\", \"Mahnmal\" vs \"Ehrung\", \"Gedenktafel\")",
        "Distinguishes contemporary from present-day judgement (\"aus damaliger Sicht\", \"aus heutiger Sicht\")",
        "Weighs the opposing side's argument fairly before taking a position",
        "Uses the conventions of a newspaper comment: title, clear thesis, conclusion with a proposal"
      ],
      "modelAnswer": "Umbenennen allein ist keine Aufarbeitung\n\nSeit Wochen streitet der Stadtrat über die Behrensstraße. Benannt ist sie nach Carl Behrens, der um 1890 als Kolonialbeamter in Deutsch-Ostafrika diente und dort an der brutalen Niederschlagung eines Aufstands beteiligt war. Eine Initiative fordert, die Straße umzubenennen. Die Gegner sprechen von Bilderstürmerei.\n\nZunächst ein Missverständnis: Ein Straßenname ist kein Mahnmal, sondern eine Ehrung. Wer eine Straße nach einem Menschen benennt, erklärt ihn zum Vorbild. Aus damaliger Sicht war Behrens das für viele Bürger, als die Straße 1912 ihren Namen erhielt. Aus heutiger Sicht kann er es nicht mehr sein.\n\nDie Gegner haben dennoch einen Punkt. Ein neues Schild allein macht Geschichte nicht ungeschehen; es kann sie im Gegenteil unsichtbar machen. Wer in zwanzig Jahren durch die umbenannte Straße geht, erfährt nichts mehr darüber, wie selbstverständlich unsere Stadt einst Kolonialherren geehrt hat. Erinnerungskultur bedeutet aber gerade, sich unbequemen Kapiteln zu stellen, statt sie zu entsorgen.\n\nDeshalb plädiere ich für einen dritten Weg: Die Straße sollte einen neuen Namen erhalten, etwa den einer Persönlichkeit aus Tansania, die sich gegen die Kolonialherrschaft gewehrt hat. Zugleich gehört an die Ecke eine Gedenktafel, die erklärt, wer Behrens war und warum die Stadt sich von ihm distanziert. Erst diese Verbindung von Umbenennung und Information wäre echte Aufarbeitung, kein bloßer Austausch von Schildern.",
      "explanation": "The comment relies on the precise terms of German memory culture: a street name is an \"Ehrung\", not a \"Mahnmal\"; \"Erinnerungskultur\" and \"Aufarbeitung\" mean confronting the past rather than erasing it; a \"Gedenktafel\" explains. \"Aus damaliger Sicht\" and \"Aus heutiger Sicht\" separate the judgement of 1912 from today's and avoid anachronism. The opposing view is conceded (\"Die Gegner haben dennoch einen Punkt\") before the writer argues for a third way."
    }
  ],
  "c2-science-technology-1": [
    {
      "type": "write",
      "prompt": "For a school science competition, you measured how hot different playground surfaces get on summer days. Write the methods and results section of your report in the impersonal style of German research writing.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Describes the method in the passive and with impersonal constructions (\"Untersucht wurde ...\", \"Die Messungen erfolgten ...\", \"lässt sich ... nachweisen\")",
        "Uses the vocabulary of research (\"Messung\", \"Befund\", \"Stichprobe\", \"nachweisen\", \"erfassen\")",
        "Uses at least one extended participial attribute correctly (\"eine im Schatten einer Linde gelegene Sandfläche\")",
        "Reports results with precise figures and states the limitations cautiously"
      ],
      "modelAnswer": "Methode und Ergebnisse\n\nUntersucht wurde, wie stark sich verschiedene Bodenbeläge auf Spielplätzen an heißen Sommertagen erwärmen. Hierzu wurden auf drei Spielplätzen in Würzburg insgesamt sechs Flächen ausgewählt: Asphalt, Gummimatten, Sand, Holzhackschnitzel, Rasen sowie eine im Schatten einer Linde gelegene Sandfläche.\n\nDie Messungen erfolgten an zwölf Tagen im Juli und August 2026, an denen die Lufttemperatur jeweils über 30 °C lag. Gemessen wurde mit einem Infrarotthermometer stündlich zwischen 11 und 17 Uhr, und zwar stets an denselben, zuvor markierten Punkten. Pro Fläche ergaben sich so 84 Einzelmessungen.\n\nDie Befunde zeigen deutliche Unterschiede. Die höchsten Werte wurden auf den schwarzen Gummimatten gemessen, die sich im Mittel auf 61 °C erhitzten, in der Spitze sogar auf 68 °C. Asphalt erreichte durchschnittlich 54 °C. Die beschattete Sandfläche war dagegen im Mittel um 23 Grad kühler als die besonnte. Am geringsten erwärmte sich der Rasen mit durchschnittlich 34 °C.\n\nDamit lässt sich nachweisen, dass die Beschattung den größten Einfluss auf die Oberflächentemperatur hat. Ob die Ergebnisse auf andere Städte übertragbar sind, lässt sich anhand der kleinen Stichprobe jedoch nicht abschließend beurteilen. Zu berücksichtigen ist außerdem, dass Wind und Bewölkung nicht systematisch erfasst wurden.",
      "explanation": "The methods section keeps the researcher out of view with the passive (\"Untersucht wurde ...\", \"wurden ... ausgewählt\", \"Gemessen wurde ...\") and with \"erfolgen\", \"lässt sich ... nachweisen\" and \"Zu berücksichtigen ist ...\". The extended attribute \"eine im Schatten einer Linde gelegene Sandfläche\" packs a relative clause into the noun phrase. Results are given with exact figures and \"um\" for differences, and the limits of the small Stichprobe are stated explicitly."
    }
  ],
  "c2-science-technology-3": [
    {
      "type": "write",
      "prompt": "Your uncle has forwarded a chain message to the family group claiming that 5G masts cause headaches and that 'a secret study' proves it. Write him a friendly but clear email explaining why the claim doesn't hold up.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses the vocabulary of misinformation (\"Falschmeldung\", \"Faktencheck\", \"seriöse Quelle\", \"Nachweis\")",
        "Distances yourself from unverified claims with sollen and wollen (\"Eine Studie soll beweisen ...\", \"Ein Arzt will ... dokumentiert haben\")",
        "Explains the difference between correlation and causation with an everyday example",
        "Stays friendly and respectful in an informal family register"
      ],
      "modelAnswer": "Lieber Onkel Werner,\n\ndanke, dass du uns in der Familiengruppe vor 5G warnen wolltest. Ich weiß, dass du dir Sorgen machst, gerade wegen Omas Kopfschmerzen. Ich habe mir die Nachricht aber genauer angesehen, und ich bin ziemlich sicher, dass es sich um eine Falschmeldung handelt.\n\nLaut der Nachricht soll eine „geheime Studie“ beweisen, dass 5G-Masten Kopfschmerzen und Schlafstörungen verursachen. Nur: Wer hat diese Studie gemacht, und wo ist sie erschienen? Darauf gibt die Nachricht keine Antwort. Ein Arzt aus Österreich will außerdem Hunderte Fälle dokumentiert haben, aber sein Name taucht in keiner Fachzeitschrift auf. Seriöse Forschung ist nicht geheim; sie wird veröffentlicht und von anderen überprüft.\n\nDas Bundesamt für Strahlenschutz und mehrere Faktenchecks kommen zu einem anderen Ergebnis: Werden die Grenzwerte eingehalten, gibt es keinen Nachweis für gesundheitliche Schäden durch Mobilfunk.\n\nUnd noch etwas: Selbst wenn in einem Ort nach dem Bau eines Mastes mehr Menschen über Kopfschmerzen klagen, heißt das nicht, dass der Mast die Ursache ist. Im Sommer wird auch mehr Eis verkauft, und es werden mehr Sonnenbrände behandelt. Trotzdem verursacht Eis keinen Sonnenbrand; beides hängt einfach mit der Hitze zusammen.\n\nSolche Nachrichten verbreiten sich schnell, weil sie Angst machen. Wollen wir beim nächsten Mal gemeinsam schauen, woher eine Meldung kommt, bevor wir sie weiterleiten?\n\nLiebe Grüße\ndeine Clara",
      "explanation": "\"Soll ... beweisen\" passes on a claim without vouching for it, and \"will ... dokumentiert haben\" reports what someone says about himself while signalling doubt. \"Falschmeldung\", \"Fachzeitschrift\", \"Faktencheck\" and \"keinen Nachweis\" are the key terms of science communication. The ice-cream example shows that two things can rise together without one causing the other (correlation is not causation), and the closing question keeps the tone friendly rather than superior."
    }
  ],
  "c2-environment-politics-1": [
    {
      "type": "write",
      "prompt": "Your town's climate protection office asks you to write a short information sheet (Merkblatt) for homeowners on replacing an oil or gas heating system with a heat pump, in the style of an official policy text.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses the vocabulary of energy policy (\"Energiewende\", \"Klimaneutralität\", \"Wärmepumpe\", \"Wärmeplanung\", \"Förderung\", \"fossil\")",
        "Uses the noun-heavy style of policy texts (\"Prüfung der Eignung\", \"Ersatz von Öl- und Gasheizungen\")",
        "Uses the passive and impersonal constructions (\"wird geprüft\", \"ist ... zu stellen\", \"es empfiehlt sich\", \"wird empfohlen\")",
        "Is structured as an information sheet with numbered headings and a contact line"
      ],
      "modelAnswer": "Merkblatt: Umstieg auf eine Wärmepumpe\n\nDie Stadt Lindenau hat sich im Rahmen der Energiewende das Ziel gesetzt, bis 2040 klimaneutral zu werden. Ein wesentlicher Beitrag hierzu ist der Ersatz von Öl- und Gasheizungen durch klimafreundliche Heizsysteme. Dieses Merkblatt informiert Eigentümerinnen und Eigentümer über die wichtigsten Schritte.\n\n1. Prüfung der Eignung\nVor dem Einbau einer Wärmepumpe empfiehlt sich eine Energieberatung. Dabei wird geprüft, ob das Gebäude ausreichend gedämmt ist und ob die vorhandenen Heizkörper für niedrige Vorlauftemperaturen geeignet sind. Die Kosten einer Erstberatung werden von der Stadt übernommen.\n\n2. Kommunale Wärmeplanung\nDie Stadt erstellt derzeit einen Wärmeplan. Darin wird festgelegt, in welchen Stadtteilen künftig ein Anschluss an das Fernwärmenetz möglich sein wird. Eigentümern in diesen Gebieten wird empfohlen, die Veröffentlichung des Plans im Frühjahr abzuwarten.\n\n3. Förderung\nFür den Austausch einer fossilen Heizung stehen Fördermittel des Bundes zur Verfügung. Der Antrag ist vor Beginn der Maßnahme zu stellen; eine nachträgliche Förderung ist ausgeschlossen. Zusätzlich gewährt die Stadt Haushalten mit geringem Einkommen einen Zuschuss von bis zu 2.000 Euro.\n\n4. Umsetzung\nMit der Installation sollten ausschließlich Fachbetriebe beauftragt werden. Nach der Inbetriebnahme ist der Nachweis über den Einbau innerhalb von sechs Monaten beim Klimaschutzbüro einzureichen.\n\nKontakt: Klimaschutzbüro der Stadt Lindenau, Rathausplatz 1",
      "explanation": "The sheet uses the noun-heavy style of policy texts, with headings built from nominalisations (\"Prüfung der Eignung\", \"Förderung\", \"Umsetzung\") and genitive chains (\"der Ersatz von Öl- und Gasheizungen\", \"die Veröffentlichung des Plans\"). Readers are addressed impersonally: \"es empfiehlt sich\", \"wird empfohlen\", the passive (\"wird geprüft\", \"werden ... übernommen\") and sein + zu for obligations (\"Der Antrag ist ... zu stellen\", \"ist ... einzureichen\")."
    }
  ],
  "c2-environment-politics-2": [
    {
      "type": "write",
      "prompt": "A Canadian friend who is learning German has seen news about a Swiss referendum and asks how politics in Switzerland differs from Germany and Austria. Write her an informal email explaining the main differences.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses the vocabulary of political institutions accurately (\"Bundestag\", \"Nationalrat\", \"Bundesrat\", \"Koalition\", \"Fünfprozenthürde\", \"Volksinitiative\", \"Referendum\")",
        "Compares the systems with contrastive connectors (\"während\", \"im Gegensatz zu\", \"dagegen\")",
        "Explains at least one Swiss institution precisely, such as the Volksinitiative or the seven-member Bundesrat",
        "Keeps an informal, friendly register while staying accurate"
      ],
      "modelAnswer": "Hallo Emily,\n\ngute Frage! Selbst viele Deutsche wissen nicht genau, wie die Schweiz funktioniert.\n\nIn Deutschland wählen wir alle vier Jahre den Bundestag. Eine Partei braucht dabei mindestens fünf Prozent der Zweitstimmen, sonst zieht sie in der Regel nicht ins Parlament ein. Weil fast nie eine Partei allein die Mehrheit hat, bilden mehrere Parteien eine Koalition und wählen gemeinsam den Bundeskanzler oder die Bundeskanzlerin. Der Bundespräsident hat dagegen vor allem repräsentative Aufgaben. Volksabstimmungen auf Bundesebene gibt es bei uns nicht.\n\nÖsterreich ist ähnlich aufgebaut, mit dem Nationalrat als Parlament. Im Gegensatz zu Deutschland wird der Bundespräsident dort aber direkt vom Volk gewählt.\n\nDie Schweiz funktioniert ganz anders. Dort regiert der Bundesrat, ein Gremium aus sieben Mitgliedern verschiedener Parteien, das gemeinsam entscheidet. Einen Bundespräsidenten gibt es zwar auch, aber er wechselt jedes Jahr und ist nur Erster unter Gleichen. Vor allem stimmen die Bürgerinnen und Bürger mehrmals im Jahr direkt über Sachfragen ab. Wer 100.000 Unterschriften sammelt, kann mit einer Volksinitiative eine Änderung der Verfassung vorschlagen, und mit 50.000 Unterschriften lässt sich ein neues Gesetz per Referendum vors Volk bringen. So eine Abstimmung hast du wohl in den Nachrichten gesehen.\n\nWährend man in Deutschland also vor allem Parteien wählt, entscheidet man in der Schweiz oft direkt über Inhalte.\n\nLiebe Grüße aus Freiburg\nJonas",
      "explanation": "The email names each institution precisely (Bundestag, Zweitstimme, Fünfprozenthürde, Koalition, Nationalrat, the Swiss Bundesrat, Volksinitiative, Referendum) and explains how the Swiss Volksinitiative and Referendum work, with their signature thresholds. \"Dagegen\", \"Im Gegensatz zu\" and the final \"Während ..., ...\" sentence carry the comparison, and the tone stays informal (\"gute Frage!\", \"bei uns\", \"So eine Abstimmung hast du wohl ... gesehen\") without losing accuracy."
    }
  ],
  "c2-philosophy-2": [
    {
      "type": "write",
      "prompt": "For a student glossary of philosophical terms, write an entry that defines and distinguishes two related concepts that are often confused in everyday German: Moral and Ethik.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Defines with formal formulas (\"Unter ... versteht man ...\", \"... bezeichnet ...\", \"im weiteren Sinne\")",
        "Distinguishes the concepts explicitly (\"ist ... zu unterscheiden\", \"im Unterschied zu ...\", \"dagegen\")",
        "Gives the origin of the words or a classic example",
        "Uses the nominal style of philosophical German (\"das Handeln\", \"das Gute\", \"ein Sollen\")"
      ],
      "modelAnswer": "Moral und Ethik\n\nIm Alltag werden die Wörter „Moral“ und „Ethik“ häufig gleichbedeutend verwendet. In der Philosophie ist jedoch streng zwischen beiden Begriffen zu unterscheiden.\n\nUnter Moral versteht man die Gesamtheit der Normen, Werte und Überzeugungen, die in einer Gemeinschaft das Handeln ihrer Mitglieder tatsächlich leiten. Dazu gehören etwa die Regel, nicht zu lügen, oder die Erwartung, Schwächeren zu helfen. Moral ist also gelebte Praxis; sie bestimmt, was in einer Gesellschaft als gut oder schlecht gilt, oft ohne dass dies ausdrücklich begründet wird.\n\nEthik bezeichnet dagegen das philosophische Nachdenken über die Moral. Sie fragt nicht, was als gut gilt, sondern was gut ist und wie sich ein Sollen begründen lässt. Im Unterschied zur Moral ist Ethik also eine Disziplin, deren Gegenstand die Moral ist. Sie kann bestehende Moralvorstellungen bestätigen, aber auch kritisieren.\n\nBeide Wörter gehen auf antike Begriffe zurück: „Ethik“ auf das griechische „ethos“ (Gewohnheit, Charakter), „Moral“ auf das lateinische „mos“ (Sitte). Ursprünglich lagen sie also nah beieinander.\n\nIm weiteren Sinne spricht man auch von Berufsethik oder medizinischer Ethik. Gemeint sind Regeln für bestimmte Bereiche, die streng genommen zur Moral gehören, aber ethisch begründet werden. Wer präzise formulieren will, sollte daher stets klären, ob vom tatsächlichen Handeln oder von dessen Begründung die Rede ist.",
      "explanation": "The entry uses the formal tools of definition: \"Unter Moral versteht man ...\", \"Ethik bezeichnet ...\", \"Im weiteren Sinne\" and \"streng genommen\". The distinction is made explicit with \"ist ... zu unterscheiden\", \"dagegen\" and \"Im Unterschied zu ...\", and the contrast \"nicht, was als gut gilt, sondern was gut ist\" sums it up. Nominalisations such as \"das Handeln\", \"das Nachdenken\" and \"ein Sollen\" are typical of philosophical German."
    }
  ],
  "c2-philosophy-3": [
    {
      "type": "write",
      "prompt": "You have just finished reading Hannah Arendt's 'Eichmann in Jerusalem'. Write a letter to a friend from your philosophy seminar about the idea of the 'banality of evil' and the conditions under which you think it still applies today.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Presents Arendt's idea accurately (the Eichmann trial, die Banalität des Bösen, Gedankenlosigkeit)",
        "Uses precise conditions and restrictions (\"insofern als\", \"sofern\", \"vorausgesetzt, dass\")",
        "Uses the nominal style of philosophy where it fits (\"das Böse\", \"das Denken\", \"das Urteilen\")",
        "Keeps the personal, reflective tone of a letter between friends and invites a reply"
      ],
      "modelAnswer": "Liebe Merve,\n\nich habe gestern Abend endlich Hannah Arendts „Eichmann in Jerusalem“ zu Ende gelesen und muss dir einfach schreiben, weil mich das Buch nicht loslässt.\n\nDu weißt ja: Arendt hat 1961 für den „New Yorker“ über den Prozess gegen Adolf Eichmann berichtet. Was sie dort sah, war kein dämonisches Ungeheuer, sondern ein ehrgeiziger, beflissener Beamter, der in Phrasen und Amtssprache dachte. Das Böse, so ihre These, entstehe nicht unbedingt aus Hass oder abgründiger Bosheit, sondern aus Gedankenlosigkeit: aus der Unfähigkeit, sich in andere hineinzuversetzen und selbst zu urteilen.\n\nErschreckt hat mich vor allem, wie aktuell das klingt. Insofern als wir alle in Strukturen arbeiten, in denen Verantwortung verteilt ist, sind wir alle anfällig dafür, „nur unsere Pflicht“ zu tun. Trotzdem glaube ich nicht, dass jeder Mitläufer ein Eichmann ist. Von der Banalität des Bösen kann man meiner Meinung nach nur sprechen, sofern das eigene Handeln tatsächlich zu großem Unrecht beiträgt und man die Möglichkeit gehabt hätte, darüber nachzudenken. Vorausgesetzt, dass diese Möglichkeit bestand, bleibt man verantwortlich.\n\nArendts Antwort darauf ist unbequem einfach: das Denken als Widerstand. Nicht das große Heldentum schützt uns, sondern das alltägliche Urteilen.\n\nLass uns nächste Woche darüber reden, am besten bei einem langen Spaziergang. Ich bin gespannt, ob du mir widersprichst.\n\nHerzliche Grüße\nLukas",
      "explanation": "The letter reports Arendt's thesis in the Konjunktiv I (\"Das Böse ... entstehe ...\") and names its key terms: \"die Banalität des Bösen\" and \"Gedankenlosigkeit\". \"Insofern als ...\", \"sofern ...\" and \"Vorausgesetzt, dass ...\" set precise conditions on when the idea applies. Nominalised infinitives and adjectives (\"das Böse\", \"das Denken\", \"das Urteilen\", \"das Handeln\") give the reflection its philosophical register, while the frame stays personal."
    }
  ],
  "c2-psychology-emotions-2": [
    {
      "type": "write",
      "prompt": "A student magazine asks you to write a short, practical article on how to support a friend who is going through depression, using precise and respectful language about mental health.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses mental-health vocabulary precisely and respectfully (\"Depression\" vs \"Traurigkeit\", \"Antriebslosigkeit\", \"psychotherapeutische Sprechstunde\")",
        "Uses person-first language (\"ein Mensch mit Depression\" rather than \"ein Depressiver\")",
        "Uses verbs of becoming with their prepositions (\"in ... geraten\", \"sich entwickeln\", \"umschlagen in\")",
        "Gives concrete, careful advice, including where to find professional help, in an empathetic tone"
      ],
      "modelAnswer": "Da sein, ohne zu drängen: Wie wir Freunden mit Depression helfen können\n\nFast jeder kennt jemanden, der schon einmal an einer Depression erkrankt ist. Trotzdem wissen viele nicht, wie sie reagieren sollen, wenn es eine Freundin oder einen Mitbewohner trifft.\n\nZunächst ist es wichtig, die Erkrankung ernst zu nehmen. Eine Depression ist keine vorübergehende Traurigkeit, die man mit gutem Willen überwindet, sondern eine Krankheit, die behandelt werden kann und sollte. Oft entwickelt sie sich schleichend: Wer über Wochen in Antriebslosigkeit gerät, sich zurückzieht und an nichts mehr Freude findet, braucht mehr als einen gut gemeinten Rat.\n\nHilfreich ist es, auf die Sprache zu achten. Wir sprechen von einem Menschen mit Depression, nicht von einem „Depressiven“, denn die Erkrankung ist nur ein Teil dieser Person. Sätze wie „Reiß dich doch mal zusammen“ oder „Anderen geht es noch schlechter“ verstärken dagegen das Gefühl, versagt zu haben.\n\nWas hilft stattdessen? Da sein, zuhören, nachfragen, ohne zu drängen. Man kann anbieten, gemeinsam einen Termin beim Hausarzt oder in einer psychotherapeutischen Sprechstunde zu vereinbaren. Wichtig ist auch, die eigenen Grenzen zu kennen: Freunde können keine Therapie ersetzen.\n\nWenn die Stimmung in Hoffnungslosigkeit umschlägt oder jemand von Suizidgedanken spricht, sollte man nicht zögern. Die Telefonseelsorge ist rund um die Uhr kostenlos unter 0800 111 0 111 erreichbar, und im Notfall hilft die 112.",
      "explanation": "The article separates \"Depression\" as an illness from ordinary \"Traurigkeit\" and uses person-first language (\"ein Mensch mit Depression\"), explaining why. Verbs of becoming describe the course of the illness with their prepositions: \"sich schleichend entwickeln\", \"in Antriebslosigkeit geraten\", \"in Hoffnungslosigkeit umschlagen\". The advice is concrete and careful, and it names professional help (Hausarzt, psychotherapeutische Sprechstunde, Telefonseelsorge, 112)."
    }
  ],
  "c2-naming-feelings-dialogue-lab": [
    {
      "type": "write",
      "prompt": "Your friend Paula has just been offered her dream job in Vienna, but taking it means leaving her partner and her city behind. Write the conversation in which you help her put her mixed feelings into words, with open, empathetic questions.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Names mixed feelings precisely (\"zwiespältig\", \"hin- und hergerissen\", \"mulmig\", \"Wehmut\", \"Vorfreude mit Beigeschmack\")",
        "Uses impersonal constructions for feelings (\"mir ist mulmig\", \"mir graut davor\", \"Was zieht dich ...?\")",
        "Asks open, empathetic questions and paraphrases without lecturing",
        "Uses at least two reflexive verbs of feeling with their prepositions (\"sich sehnen nach\", \"sich freuen auf\", \"sich fürchten vor\", \"sich abfinden mit\")"
      ],
      "modelAnswer": "Lena: Herzlichen Glückwunsch! Du siehst aber gar nicht so glücklich aus, wie ich dachte.\nPaula: Ich weiß auch nicht. Ich habe mich drei Jahre lang nach genau so einer Stelle gesehnt, und jetzt fühle ich mich ganz zwiespältig.\nLena: Was meinst du mit zwiespältig?\nPaula: Einerseits freue ich mich wahnsinnig auf Wien, auf das Team, auf die Aufgaben. Andererseits ist mir ganz mulmig, wenn ich an Tom denke.\nLena: Du bist also hin- und hergerissen zwischen dem Job und eurer Beziehung?\nPaula: Ja, genau. Er sagt zwar, wir schaffen das mit der Fernbeziehung, aber mir graut ein bisschen davor, ihn nur alle zwei Wochen zu sehen.\nLena: Wovor fürchtest du dich am meisten, wenn du ehrlich bist?\nPaula: Dass wir uns auseinanderleben. Und vielleicht auch, dass ich mich irgendwann schuldig fühle, weil ich gegangen bin.\nLena: Das klingt, als wäre da nicht nur Angst, sondern auch ein bisschen Wehmut.\nPaula: Wehmut, ja, das trifft es. Ich vermisse Hamburg jetzt schon, dabei bin ich noch gar nicht weg.\nLena: Und was zieht dich trotzdem nach Wien?\nPaula: Das Gefühl, dass ich es mir nie verzeihen würde, wenn ich absage. Mit einem „Was wäre gewesen, wenn“ könnte ich mich nicht abfinden.\nLena: Dann ist es vielleicht keine falsche Freude, sondern einfach Vorfreude mit Beigeschmack.\nPaula: Vorfreude mit Beigeschmack. Ja. Danke, dass du mir zuhörst.",
      "explanation": "Paula's mixed feelings get precise names: \"zwiespältig\", \"hin- und hergerissen\", \"mulmig\", \"Wehmut\" and finally \"Vorfreude mit Beigeschmack\". Feelings are also expressed impersonally (\"mir ist ganz mulmig\", \"mir graut davor\", \"Was zieht dich ... nach Wien?\"), and reflexive verbs keep their prepositions: \"sich sehnen nach\", \"sich freuen auf\", \"sich fürchten vor\" (\"Wovor fürchtest du dich?\"), \"sich abfinden mit\". Lena only asks open questions and paraphrases, without giving advice."
    }
  ],
  "c2-criticism-1": [
    {
      "type": "write",
      "prompt": "For a literature seminar, write a short analysis of the opening of Franz Kafka's 'Die Verwandlung' (1915): its narrator, its handling of time and one central motif.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses the present tense of commentary and the terms of literary analysis (\"personaler Erzähler\", \"Erzählzeit\", \"erzählte Zeit\", \"Motiv\")",
        "Identifies the type of narrator precisely and explains its effect",
        "Supports claims with accurate quotation or close paraphrase of the text",
        "Interprets cautiously (\"lässt sich ... deuten\", \"scheint\", \"legt nahe\")"
      ],
      "modelAnswer": "Kafkas Erzählung „Die Verwandlung“, 1915 erschienen, beginnt mit einem der berühmtesten ersten Sätze der deutschen Literatur: „Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu einem ungeheueren Ungeziefer verwandelt.“ Das Unglaubliche wird gleich zu Beginn und ohne jede Erklärung mitgeteilt.\n\nErzählt wird die Geschichte von einem personalen Erzähler, der weitgehend an Gregors Wahrnehmung gebunden ist. Der Leser erfährt also nur, was Gregor sieht, denkt und fühlt. Gerade dadurch entsteht die verstörende Wirkung des Anfangs: Gregor wundert sich kaum über seinen neuen Körper, sondern sorgt sich vor allem darum, den Zug zu verpassen und seinen Arbeitgeber zu verärgern. Der Erzähler kommentiert diese Reaktion nicht; er überlässt es dem Leser, das Missverhältnis zu bemerken.\n\nAuffällig ist zudem das Verhältnis von Erzählzeit und erzählter Zeit. Der erste Teil umfasst kaum mehr als einen Vormittag, wird aber auf vielen Seiten erzählt. Durch diese Zeitdehnung erlebt der Leser Gregors hilflose Versuche, aus dem Bett zu kommen, gleichsam Minute für Minute mit.\n\nAls zentrales Motiv lässt sich die Tür deuten. Gregors Zimmertür ist verschlossen, Familie und Prokurist klopfen und rufen von außen. Die Tür trennt Gregor von der Welt der anderen und scheint damit seine Isolation vorwegzunehmen, die im weiteren Verlauf der Erzählung immer vollständiger wird.",
      "explanation": "The analysis uses the present tense of commentary and the standard terms: \"personaler Erzähler\" (a third-person narrator bound to one figure's perception), \"Erzählzeit\" and \"erzählte Zeit\", \"Zeitdehnung\" and \"Motiv\". Each claim is supported by the text, starting with the exact first sentence. Interpretive statements are hedged (\"lässt sich ... deuten\", \"scheint ... vorwegzunehmen\"), and the passive (\"Erzählt wird die Geschichte von ...\") keeps the focus on the text."
    }
  ],
  "c2-criticism-3": [
    {
      "type": "write",
      "prompt": "Write the text of an audio-guide stop for Caspar David Friedrich's painting 'Der Wanderer über dem Nebelmeer' (around 1818), describing its composition and suggesting an interpretation.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Describes the composition with precise terms and positions (\"Bildmitte\", \"Vordergrund\", \"Hintergrund\", \"Rückenfigur\", \"Mittelachse\", \"Leinwand\")",
        "Places the painting in its movement (Romantik)",
        "Guides the listener's eye with direct address and imperatives (\"Schauen Sie zunächst ...\", \"Lassen Sie den Blick ...\")",
        "Offers interpretations cautiously and leaves room for the listener's own view"
      ],
      "modelAnswer": "Station 14: Caspar David Friedrich, Der Wanderer über dem Nebelmeer\n\nBleiben Sie einen Moment vor diesem Bild stehen. Vielleicht kennen Sie es von Buchumschlägen und Plakaten: Kaum ein Gemälde der deutschen Romantik ist so berühmt wie der „Wanderer über dem Nebelmeer“, den Caspar David Friedrich um 1818 auf die Leinwand brachte.\n\nSchauen Sie zunächst in die Bildmitte. Dort steht im Vordergrund, auf einem dunklen Felsvorsprung, ein Mann in einem dunkelgrünen Rock, einen Spazierstock in der Hand. Er kehrt uns den Rücken zu. Friedrich verwendet diese sogenannte Rückenfigur in vielen seiner Bilder: Wir sehen nicht das Gesicht des Wanderers, sondern das, was er sieht.\n\nLassen Sie nun den Blick in die Tiefe wandern. Unter dem Wanderer breitet sich ein Meer aus Nebel aus, aus dem einzelne Felsen und Bergrücken auftauchen. Im Hintergrund verschwimmen Berge und Himmel fast ineinander. Achten Sie darauf, wie die Figur genau auf der Mittelachse steht: Die ganze Landschaft scheint sich um sie herum zu ordnen.\n\nWas denkt dieser Mann? Friedrich lässt es offen. Man kann das Bild als Ausdruck romantischer Sehnsucht deuten, als Begegnung des Einzelnen mit der Unendlichkeit der Natur. Andere sehen darin eher Einsamkeit oder sogar Überheblichkeit: einen Menschen, der sich über die Welt erhebt.\n\nVielleicht stellen Sie sich, bevor Sie weitergehen, einen Augenblick an seine Stelle. Was sehen Sie?",
      "explanation": "The audio guide leads the eye through the composition with positional terms (\"Bildmitte\", \"Vordergrund\", \"Hintergrund\", \"Mittelachse\") and imperatives addressed to the listener (\"Schauen Sie zunächst ...\", \"Lassen Sie nun den Blick ...\", \"Achten Sie darauf ...\"). It explains the \"Rückenfigur\" and places the painting in the Romantik. Interpretations are offered as possibilities (\"Man kann das Bild als ... deuten\", \"Andere sehen darin eher ...\"), and the final question hands the judgement back to the listener."
    }
  ],
  "c2-business-economics-1": [
    {
      "type": "write",
      "prompt": "Your younger brother, who has just started his first job, asks why everyone is talking about the European Central Bank raising or cutting interest rates and what it means for him. Write him an informal email explaining the connections.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses economic vocabulary precisely (\"Leitzins\", \"Inflation\" / \"Teuerung\", \"Kaufkraft\", \"Konjunktur\", \"Kredit\", \"Zinsen\")",
        "Explains cause and effect with varied structures (\"dadurch\", \"sodass\", \"infolge\", \"führt dazu, dass\")",
        "Gives concrete examples relating to his savings and a loan",
        "Keeps an informal but clear register"
      ],
      "modelAnswer": "Hi Felix,\n\ngute Frage, und gar nicht so kompliziert, wie es in den Nachrichten klingt.\n\nDie Europäische Zentralbank, kurz EZB, soll vor allem dafür sorgen, dass die Preise stabil bleiben. Ihr wichtigstes Werkzeug ist der Leitzins, also der Zins, zu dem sich Banken bei ihr Geld leihen können. Steigt die Inflation, also die Teuerung, stark an, erhöht die EZB den Leitzins. Dadurch werden Kredite teurer. Da sich Unternehmen und Haushalte dann seltener Geld leihen, wird weniger gekauft und investiert, sodass die Nachfrage sinkt und die Preise langsamer steigen.\n\nUmgekehrt senkt die EZB den Leitzins, wenn die Konjunktur schwächelt. Kredite werden billiger, Unternehmen investieren mehr, und die Wirtschaft kommt wieder in Schwung.\n\nWas heißt das für dich? Erstens für dein Erspartes: Bei höheren Leitzinsen bekommst du auf dem Tagesgeldkonto meist mehr Zinsen. Liegt die Inflation aber über deinem Zinssatz, verliert dein Geld trotzdem an Kaufkraft. Zweitens für deinen Autokredit: Infolge höherer Zinsen wird ein neuer Kredit teurer. Hast du den Zins für die ganze Laufzeit festgeschrieben, betrifft dich das allerdings nicht.\n\nMein Tipp: Vergleich die Angebote verschiedener Banken und lass dein Geld nicht einfach auf dem Girokonto liegen. Das führt nämlich nur dazu, dass es Jahr für Jahr ein bisschen weniger wert wird.\n\nWenn du magst, gehen wir das am Wochenende mal zusammen durch.\n\nLiebe Grüße\nSarah",
      "explanation": "The email defines each term as it introduces it (\"der Leitzins, also ...\", \"die Inflation, also die Teuerung\") and then chains causes and effects with varied structures: verb-first conditions (\"Steigt die Inflation ..., erhöht die EZB ...\"), \"Dadurch\", \"Da ...\", \"sodass\", \"Infolge höherer Zinsen\" and \"Das führt ... dazu, dass ...\". \"Kaufkraft\" explains why savings can lose value even with interest, and the examples (Tagesgeld, Autokredit) make the abstract mechanism concrete."
    }
  ],
  "c2-business-economics-3": [
    {
      "type": "write",
      "prompt": "Your company, a German mid-sized manufacturer of kitchen appliances, is considering taking over a smaller competitor. Write a short internal memo to the management board assessing the opportunities and risks.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses the vocabulary of mergers and competition (\"Übernahme\", \"Marktanteil\", \"Synergien\", \"Bundeskartellamt\", \"Freigabe\")",
        "Addresses supply chains and trade (\"Lieferkette\", \"Zölle\", \"Sorgfaltspflichten nach dem Lieferkettengesetz\")",
        "Uses the nominal style and the passive of an internal report, with numbered sections",
        "Ends with a weighed recommendation"
      ],
      "modelAnswer": "Vermerk an die Geschäftsführung\nBetreff: Mögliche Übernahme der Kessler Küchentechnik GmbH\n\n1. Ausgangslage\nDie Kessler Küchentechnik GmbH (Umsatz 2025: 84 Mio. Euro, 420 Beschäftigte) steht zum Verkauf. Durch eine Übernahme würde unser Marktanteil bei Einbaubacköfen in Deutschland von 14 auf rund 21 Prozent steigen.\n\n2. Chancen\nErhebliche Synergien sind vor allem im Einkauf und in der Logistik zu erwarten; die Einsparungen werden auf 5 bis 7 Mio. Euro jährlich geschätzt. Zudem verfügt Kessler über ein gut ausgebautes Händlernetz in Österreich und der Schweiz, das wir bislang kaum erschließen konnten.\n\n3. Risiken\nAufgrund der gemeinsamen Umsätze ist das Vorhaben beim Bundeskartellamt anzumelden. Eine Freigabe gilt als wahrscheinlich, ist jedoch nicht gesichert, da beide Unternehmen im Segment der Premiumgeräte direkt miteinander konkurrieren. Mit einem Prüfverfahren von bis zu fünf Monaten ist zu rechnen.\nDarüber hinaus bezieht Kessler rund 60 Prozent seiner Komponenten aus Asien. Angesichts möglicher neuer Zölle und unserer Sorgfaltspflichten nach dem Lieferkettengesetz wäre eine umfassende Prüfung der Zulieferer erforderlich.\nNicht zuletzt ist mit Widerstand des Betriebsrats zu rechnen, falls Standortschließungen erwogen werden.\n\n4. Empfehlung\nDie Übernahme erscheint strategisch sinnvoll. Es wird empfohlen, vor Abgabe eines verbindlichen Angebots eine Due-Diligence-Prüfung mit Schwerpunkt auf der Lieferkette und auf kartellrechtlichen Fragen in Auftrag zu geben.\n\nDr. Petra Lindner\nStrategie und Unternehmensentwicklung",
      "explanation": "The memo uses the vocabulary of mergers and trade precisely: \"Übernahme\", \"Marktanteil\", \"Synergien\", \"beim Bundeskartellamt anzumelden\", \"Freigabe\", \"Prüfverfahren\", \"Zölle\" and \"Sorgfaltspflichten nach dem Lieferkettengesetz\". The report style relies on the passive and sein + zu (\"sind ... zu erwarten\", \"werden ... geschätzt\", \"ist ... zu rechnen\", \"Es wird empfohlen\") and on genitive prepositions such as \"aufgrund\" and \"angesichts\". The recommendation weighs both sides before proposing a concrete next step."
    }
  ],
  "c2-creative-writing-2": [
    {
      "type": "write",
      "prompt": "Write an inner monologue (innerer Monolog) of a character sitting in a hospital corridor, waiting for news about a parent's operation. Follow the character's thoughts in the first person and the present tense, in the manner of Schnitzler.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Writes in the first person and the present tense, with no narrator and no inquit",
        "Imitates the flow of thought: fragments, associations, sudden jumps and questions to oneself",
        "Lets perceptions of the surroundings break into the thoughts",
        "Uses dashes, ellipses and particles to give the inner voice its rhythm"
      ],
      "modelAnswer": "Halb drei. Schon halb drei? Nein, die Uhr da drüben geht nach, die ging vorhin schon nach. Drei Stunden, hat der Arzt gesagt. Höchstens drei Stunden. Jetzt sind es vier. Vier Stunden und zwanzig Minuten.\n\nDieser Geruch. Desinfektionsmittel und Kaffee aus dem Automaten. Ich hätte mir keinen holen sollen, der schmeckt wie ... egal. Die Frau gegenüber strickt. Wie kann man jetzt stricken? Vielleicht wartet sie schon den ganzen Tag. Vielleicht ist Stricken das Einzige, was hilft.\n\nPapa hat noch gelacht heute Morgen. „Mach dir keine Sorgen, Kleine, das ist Routine.“ Routine. Für wen? Für die, die jeden Tag aufschneiden und zunähen ... Nein. Nicht so denken. Er hat gelacht. Er hat sogar nach dem Fußball gefragt, ob gestern ... Wer hat eigentlich gewonnen? Ich weiß es nicht mal.\n\nSchritte. Grüne Hose, Mundschutz um den Hals. Kommt er zu mir? – Nein. Er geht weiter. Atmen. Einfach weiteratmen.\n\nWann hab ich ihn zuletzt angerufen, einfach so, ohne Grund? Im Sommer? Im Frühling? Wenn das hier vorbei ist, rufe ich ihn jeden Sonntag an. Jeden. Versprochen. Wem verspreche ich das eigentlich?\n\nDie Tür. Jetzt geht die Tür auf. Eine Ärztin schaut her. Sie lächelt – lächelt sie? Ja. Doch. Sie lächelt.",
      "explanation": "The monologue stays inside one consciousness, in the first person and the present tense, without a narrator or inquit, as in Schnitzler's \"Leutnant Gustl\". Fragments (\"Dieser Geruch.\", \"Schritte.\"), self-corrections (\"Nein. Nicht so denken.\") and questions to herself imitate thought, and perceptions of the corridor (the clock, the knitting woman, the green trousers) interrupt it. Dashes and ellipses mark breaks and hesitation, and \"doch\" and \"eigentlich\" give the inner voice its spoken rhythm."
    }
  ],
  "c2-editor-writer-dialogue-lab": [
    {
      "type": "write",
      "prompt": "You are an editor at a small publishing house. Write a feedback letter to a debut author about the revised manuscript of his novel: praise its strengths, suggest cuts and changes tactfully, and propose the next steps.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Gives specific praise before criticism and ties each criticism to a concrete passage",
        "Softens suggestions with the Konjunktiv II and hedges (\"Ich könnte mir vorstellen, ...\", \"Wäre es denkbar, ...?\", \"meines Erachtens\")",
        "Uses the terminology of editing (\"Manuskript\", \"Lektorat\", \"Spannungsbogen\", \"Figur\", \"Rückblende\", \"Dialog\", \"kürzen\", \"straffen\")",
        "Leaves room for the author's choices and ends with a concrete next step"
      ],
      "modelAnswer": "Lieber Herr Albers,\n\nvielen Dank für das überarbeitete Manuskript von „Die Stille nach dem Sturm“. Ich habe es am Wochenende in einem Zug gelesen, und das will bei mir etwas heißen.\n\nBesonders überzeugt hat mich Ihre Hauptfigur. Martha ist widersprüchlich, mitunter schwer zu ertragen und gerade deshalb glaubwürdig. Die Szene am Krankenbett ihrer Mutter im vierten Kapitel gehört zum Stärksten, was ich in diesem Jahr gelesen habe: knapp, genau beobachtet, ohne ein Wort zu viel.\n\nEinige Anmerkungen hätte ich dennoch. Der Mittelteil, etwa die Kapitel 7 bis 10, verliert meines Erachtens an Spannung. Die Rückblenden in Marthas Studienzeit sind schön geschrieben, bremsen aber den Spannungsbogen, gerade als die Handlung Fahrt aufnimmt. Ich könnte mir vorstellen, sie auf eine oder zwei Episoden zu kürzen. Wäre es denkbar, die Begegnung mit dem Professor ganz zu streichen?\n\nAuch die Dialoge ließen sich hier und da noch straffen. Ihre Figuren erklären einander manchmal Dinge, die der Leser längst weiß. Vertrauen Sie ruhig darauf, dass er zwischen den Zeilen liest.\n\nSelbstverständlich sind das Vorschläge, keine Vorgaben. Wenn Sie aus gutem Grund an den Rückblenden festhalten möchten, sprechen wir gern darüber. Wie wäre es mit einem Telefonat in der kommenden Woche? Dann könnten wir auch den Zeitplan für das Lektorat festlegen.\n\nMit herzlichen Grüßen\nIhre Katharina Wendt",
      "explanation": "The letter praises specifically before it criticises, and each criticism points to a passage (\"die Kapitel 7 bis 10\", \"die Begegnung mit dem Professor\"). Suggestions are softened with the Konjunktiv II and hedges (\"meines Erachtens\", \"Ich könnte mir vorstellen, ...\", \"Wäre es denkbar, ...?\", \"ließen sich ... straffen\"), and the editing vocabulary (\"Spannungsbogen\", \"Rückblenden\", \"kürzen\", \"straffen\", \"Lektorat\") is precise. \"Vorschläge, keine Vorgaben\" leaves the final choice with the author."
    }
  ],
  "c2-challenge-register-chameleon": [
    {
      "type": "write",
      "prompt": "Because of illness, you have to cancel your trip to a conference in Vienna, where you were due to give a talk and stay with your friend Mia. Write two messages about this: a WhatsApp message to Mia and a formal email to the conference organiser, Prof. Dr. Gruber.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Changes vocabulary between registers (\"flachliegen\" / \"erkrankt sein\", \"fällt flach\" / \"absagen müssen\")",
        "Changes syntax: short, elliptical sentences and reduced forms in the chat; complete sentences with subordinate clauses and nominal style in the email",
        "Uses the right forms of address, greetings and closings for each recipient",
        "Conveys the same facts in both messages (illness, cancellation, apology) and adds the right practical offer for each"
      ],
      "modelAnswer": "WhatsApp an Mia:\n\nHey Mia, ganz blöde Nachricht: Ich lieg seit Montag mit 'ner fetten Grippe flach, 39 Fieber, nix geht mehr. Der Arzt meint, Reisen kann ich vergessen. Heißt: Wien fällt flach. Mega schade, ich hab mich so auf unseren Abend beim Heurigen gefreut! Kannst du dein Gästezimmer anderweitig verplanen? Sorry, dass ich so kurzfristig absage. Ich meld mich, sobald ich wieder halbwegs Mensch bin. Wir holen das nach, versprochen! Dicker Drücker, Jana\n\nE-Mail an Prof. Dr. Gruber:\n\nBetreff: Absage meines Vortrags am 24. Oktober\n\nSehr geehrter Herr Professor Gruber,\n\nzu meinem großen Bedauern muss ich Ihnen mitteilen, dass ich meine Teilnahme an der Tagung „Mehrsprachigkeit im Wandel“ krankheitsbedingt absagen muss. Ich bin seit Montag an einer Grippe erkrankt, und meine Ärztin hat mir dringend von einer Reise abgeraten.\n\nIch bedaure sehr, Ihnen so kurzfristig Umstände zu bereiten. Um die Lücke im Programm möglichst gering zu halten, könnte ich Ihnen bis Mittwoch eine Aufzeichnung meines Vortrags zur Verfügung stellen. Alternativ wäre meine Kollegin Dr. Lea Sommer bereit, die Ergebnisse in meinem Namen vorzustellen.\n\nBitte teilen Sie mir mit, welche Lösung Ihnen lieber ist. Für Ihr Verständnis danke ich Ihnen herzlich.\n\nMit freundlichen Grüßen\nDr. Jana Becker",
      "explanation": "The same facts appear in two registers. The chat uses colloquial vocabulary (\"flachliegen\", \"nix\", \"fällt flach\", \"mega schade\", \"Dicker Drücker\"), reduced forms (\"lieg\", \"'ner\", \"meld\") and elliptical syntax (\"Heißt: ...\"). The email switches to formal vocabulary and nominal style (\"krankheitsbedingt absagen\", \"an einer Grippe erkrankt\", \"Umstände bereiten\", \"zur Verfügung stellen\"), full subordinate clauses, the Konjunktiv II for offers (\"könnte ich Ihnen ...\", \"wäre ... bereit\") and the formal salutation and closing."
    }
  ],
  "c2-challenge-text-detective": [
    {
      "type": "write",
      "prompt": "Write a short feuilleton column (Glosse) about train delays, full of irony and understatement and with at least one literary allusion, so that readers have to infer what you really mean.",
      "minWords": 150,
      "maxWords": 260,
      "rubric": [
        "Uses irony and understatement so that the real meaning must be inferred (ironic praise, litotes)",
        "Includes at least one literary or cultural allusion (Goethe's Faust, Beckett, Kafka ...)",
        "Quotes official language in reported speech with the Konjunktiv I to make fun of it",
        "Has a title, a pointed ending and the elevated but playful register of the feuilleton"
      ],
      "modelAnswer": "Verweile doch, du bist so schön\n\nMan muss der Bahn dankbar sein. Kaum eine Institution hat so viel für die Entschleunigung des modernen Menschen getan. Wo andere Unternehmen mit Pünktlichkeit prahlen, schenkt sie uns etwas Kostbareres: Zeit.\n\nNeulich etwa in Fulda. Der ICE nach Berlin, so verkündete eine freundliche Stimme, verzögere sich wegen einer Störung im Betriebsablauf um zunächst zehn Minuten. Was genau gestört war und wessen Ablauf, blieb ein Geheimnis. Aus den zehn Minuten wurden zwanzig, dann vierzig, und irgendwann sprach niemand mehr von „zunächst“. Ein Herr neben mir zitierte halblaut Goethe: „Verweile doch, du bist so schön!“ Faust hatte den Satz bekanntlich für den Augenblick des höchsten Glücks reserviert. Der Herr auf Gleis 3 schien ihn anders zu meinen.\n\nAuf dem Bahnsteig bildete sich unterdessen eine kleine Gesellschaft. Man teilte Brezeln, Ladekabel und Theorien. Eine Studentin las Beckett; passender hätte die Lektüre nicht sein können.\n\nNach 97 Minuten fuhr unser Zug schließlich ein. Der Zugbegleiter bat um Verständnis; man sei bemüht, die Verspätung aufzuholen. Bemüht, das wissen alle, die je ein Arbeitszeugnis gelesen haben, ist nicht das schlechteste aller Wörter. Aber auch nicht das beste.\n\nKafkas Mann vom Lande wartete ein Leben lang vor dem Gesetz. Er hätte genauso gut in Fulda stehen können.",
      "explanation": "The column praises what it criticises (\"Man muss der Bahn dankbar sein\", \"schenkt sie uns ... Zeit\"), so the reader has to infer the complaint. Official language is quoted in the Konjunktiv I (\"verzögere sich\", \"man sei bemüht\") and then taken apart, with an allusion to the code of the Arbeitszeugnis. Goethe's \"Verweile doch, du bist so schön!\" from Faust, Beckett (Warten auf Godot, never named) and Kafka's \"Vor dem Gesetz\" are allusions the reader must recognise, and the last line turns the waiting into a pointed ending."
    }
  ]
};
