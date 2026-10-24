// Synced from cheneygross-afk/lengo:src/lib/grammar/de-guides-c1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { DeGrammarGuide } from "./de-types";

// German grammar guides, C1 (see ./de-types.ts for the shape and conventions).
export const DE_C1_GUIDES: DeGrammarGuide[] = [
  {
    slug: "nominalstil-vs-verbalstil",
    title: "Nominalstil vs Verbalstil: The Academic Noun Phrase",
    description:
      "How formal German packs clauses into noun phrases and how to unpack them again: deriving nouns and their genders, genitive vs von, left and right attributes, prepositions that come with the noun, and when nominal style helps or hurts.",
    level: "C1",
    intro: [
      `At the Upper-intermediate level you learned to turn "weil der Zug Verspätung hatte" into "wegen der Verspätung des Zuges". At the Advanced level the task is to handle whole noun phrases that carry the information of two or three clauses: "die von der Regierung angekündigte schrittweise Senkung der Steuern für kleine Unternehmen".`,
      `German academic, legal and administrative writing is built on such phrases. Verbalstil (verbal style) uses clauses and verbs; Nominalstil uses nouns, prepositions and the genitive. Good Advanced writers switch deliberately between the two: nominal for headlines, abstracts and reports, verbal for explanation and speech.`,
    ],
    sections: [
      {
        heading: `Building the noun phrase: left and right of the noun`,
        body: [
          `The German noun phrase has two expansion zones. To the left of the noun go the article, adjectives and extended participial attributes. To the right go genitive attributes, prepositional phrases and relative clauses.`,
          `When you nominalise a clause, the verb becomes the head noun, its subject or object becomes a genitive on the right, adverbs become adjectives on the left, and prepositional objects keep their preposition on the right: "Die Regierung senkt die Steuern schrittweise" → "die schrittweise Senkung der Steuern durch die Regierung".`,
        ],
        table: {
          headers: ["Left attributes", "Head noun", "Right attributes"],
          rows: [
            ["die schrittweise", "Senkung", "der Steuern für kleine Unternehmen"],
            ["der seit Jahren geforderte", "Ausbau", "des Schienennetzes im Osten"],
            ["eine deutliche", "Zunahme", "der Fälle von Betrug im Internet"],
          ],
        },
        examples: [
          { de: "Die Stadt plant, die Altstadt bis 2030 autofrei zu machen. → die Planung einer autofreien Altstadt bis 2030", en: "The city plans to make the old town car-free by 2030. → the planning of a car-free old town by 2030" },
          { de: "Die Zahl der Studierenden ist stark gestiegen. → der starke Anstieg der Studierendenzahlen", en: "Student numbers have risen sharply. → the sharp rise in student numbers" },
          { de: "Man hat die Daten sorgfältig ausgewertet. → die sorgfältige Auswertung der Daten", en: "The data were carefully analysed. → the careful analysis of the data" },
        ],
      },
      {
        heading: `Genitive, "von" and "durch"`,
        body: [
          `In the noun phrase, the subject of an intransitive verb and the object of a transitive verb both become a genitive: "die Ankunft des Zuges" (the train arrives), "die Reparatur der Brücke" (someone repairs the bridge). If you also need the agent, add "durch" or, less formally, "von": "die Prüfung der Anträge durch die Behörde".`,
          `Use "von" + dative when a genitive would be invisible (plural without article: "die Lieferung von Waren") or with names and pronouns in speech ("die Rede von Merkel"). Avoid chains of more than two genitives ("die Ergebnisse der Untersuchung der Proben des Labors"): break them up with a preposition or a clause.`,
        ],
        examples: [
          { de: "die Überprüfung der Unterlagen durch das Finanzamt", en: "the review of the documents by the tax office" },
          { de: "der Import von Lebensmitteln aus Drittstaaten", en: "the import of foodstuffs from third countries" },
          { de: "die Ergebnisse der im Labor untersuchten Proben", en: "the results of the samples examined in the lab" },
        ],
      },
      {
        heading: `Nouns keep their prepositions`,
        body: [
          `A noun derived from a prepositional verb or adjective usually keeps the preposition: "sich beschäftigen mit" → "die Beschäftigung mit", "verzichten auf" → "der Verzicht auf", "abhängig von" → "die Abhängigkeit von", "teilnehmen an" → "die Teilnahme an". A few change or gain one: "sich interessieren für" → "das Interesse an", "lieben" → "die Liebe zu".`,
          `Objects in the accusative become genitives, but prepositional objects stay prepositional: "die Teilnahme an der Konferenz", never "*die Teilnahme der Konferenz*".`,
        ],
        examples: [
          { de: "Der Verzicht auf Plastik ist schwieriger als gedacht.", en: "Giving up plastic is harder than expected." },
          { de: "Die Abhängigkeit von Importen ist ein Risiko.", en: "Dependence on imports is a risk." },
          { de: "Die Teilnahme an der Veranstaltung ist kostenlos.", en: "Attendance at the event is free." },
        ],
      },
      {
        heading: `Headlines, abstracts and when to stop`,
        body: [
          `Headlines and slides use pure nominal style, often without verbs or articles: "Bahn: Erhöhung der Ticketpreise ab Dezember", "Ziel: Senkung der Emissionen um 30 %".`,
          `In running text, the test is readability. If a sentence contains three or more nouns in "-ung" and only "erfolgen", "stattfinden" or "werden" as verbs, rewrite one part as a clause. "Nach erfolgter Prüfung der Unterlagen erfolgt die Zusendung des Bescheids" reads better as "Sobald wir die Unterlagen geprüft haben, schicken wir Ihnen den Bescheid."`,
        ],
        examples: [
          { de: "Senkung der Mehrwertsteuer auf Lebensmittel beschlossen", en: "Cut in VAT on food approved (headline)" },
          { de: "Ziel der Studie ist die Untersuchung des Zusammenhangs zwischen Schlaf und Gedächtnis.", en: "The aim of the study is to investigate the link between sleep and memory." },
          { de: "Sobald wir Ihre Unterlagen geprüft haben, erhalten Sie eine Antwort.", en: "As soon as we've checked your documents, you'll receive a reply." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "die Teilnahme der Konferenz",
        right: "die Teilnahme an der Konferenz",
        why: `"Teilnehmen an" keeps its preposition in the noun. Only accusative objects become genitives.`,
      },
      {
        wrong: "das Interesse für Kunst",
        right: "das Interesse an Kunst",
        why: `The verb is "sich interessieren für", but the noun takes "an" + dative.`,
      },
      {
        wrong: "Der Lösung des Problems dauert lange.",
        right: "Die Lösung des Problems dauert lange.",
        why: `Nouns formed with "-ung" are always feminine. Gender errors in derived nouns are the most common Advanced slip.`,
      },
      {
        wrong: "die Lieferung Waren",
        right: "die Lieferung von Waren",
        why: `A plural noun without article cannot show the genitive, so "von" + dative is needed.`,
      },
    ],
    faqs: [
      {
        q: `Is nominal style required in the Goethe C1 exam?`,
        a: `The writing tasks reward a range of registers. A formal text or summary with some nominal structures ("aufgrund", "die Einführung von", "im Hinblick auf") scores higher on range and register than one written entirely in spoken-style clauses. But overloaded nominal style lowers clarity.`,
      },
      {
        q: `Which suffix gives which gender?`,
        a: `"-ung", "-heit", "-keit", "-schaft", "-ion", "-tät", "-ei" are feminine; "-chen", nominalised infinitives and most nouns in "-ment" and "-tum" are neuter (exceptions: "der Moment", "der Irrtum"); "-er" (people and tools), "-ling", "-ismus" and many bare stems ("der Bau", "der Verzicht") are masculine.`,
      },
      {
        q: `How do I unpack a heavy noun phrase quickly?`,
        a: `Find the head noun (the one right after the last adjective-ending word), turn it into a verb, make its genitive the subject or object, and turn the left adjectives back into adverbs or a relative clause.`,
      },
    ],
    related: ["nominal-style", "funktionsverbgefuege", "extended-participial-attributes", "stylistic-registers"],
    lessons: [
      "c1-nominalization-1",
      "c1-nominalization-2",
      "c1-nominalization-3",
      "c1-transform-satz-zu-nomen",
      "c1-contrast-genitiv-oder-von",
      "c1-nominalization-4",
      "c1-nominalization-5",
      "c1-workshop-nominalstil",
      "c1-error-hunt-derivation",
      "c1-nominalization-6",
      "c1-text-detective-headlines",
    ],
  },
  {
    slug: "funktionsverbgefuege",
    title: "Funktionsverbgefüge: Zur Verfügung Stellen, In Frage Kommen, Eine Entscheidung Treffen",
    description:
      "German verb-noun collocations in which the noun carries the meaning and the verb only a function: the most important Funktionsverbgefüge, their active and passive pairs (stellen / stehen, bringen / kommen), and when to use them.",
    level: "C1",
    intro: [
      `"Wir stellen Ihnen ein Zimmer zur Verfügung" means we will provide you with a room. The verb "stellen" (put) has almost lost its meaning; the content lies in "Verfügung". Such combinations are called Funktionsverbgefüge (FVG): a noun, often with a preposition, plus a light verb.`,
      `They are everywhere in formal German: in letters from the authorities, contracts, business emails and the news. Most have a simple verb equivalent ("zur Verfügung stellen" ≈ "bereitstellen", "eine Entscheidung treffen" ≈ "entscheiden"), but they are not always interchangeable. Many are fixed: you can "eine Entscheidung treffen" but not "*eine Entscheidung machen*".`,
    ],
    sections: [
      {
        heading: `The most important Funktionsverbgefüge`,
        body: [
          `Learn them as units, with article or contraction exactly as they appear. Changing "zur" to "zu der", or adding an adjective to the noun in the prepositional ones ("zur Verfügung"), usually sounds wrong.`,
        ],
        table: {
          headers: ["Funktionsverbgefüge", "Simple verb", "Meaning"],
          rows: [
            ["zur Verfügung stellen / stehen", "bereitstellen / verfügbar sein", "provide / be available"],
            ["in Frage kommen / stellen", "möglich sein / bezweifeln", "be an option / call into question"],
            ["zur Sprache bringen / kommen", "ansprechen / besprochen werden", "raise / come up"],
            ["in Kraft treten / setzen", "gültig werden / einführen", "come into force / bring into force"],
            ["eine Entscheidung treffen", "entscheiden", "make a decision"],
            ["Kritik üben an", "kritisieren", "criticise"],
            ["Rücksicht nehmen auf", "berücksichtigen", "show consideration for"],
            ["in Anspruch nehmen", "nutzen, beanspruchen", "make use of, take up"],
            ["zum Ausdruck bringen", "ausdrücken", "express"],
            ["in Betracht ziehen / kommen", "erwägen / möglich sein", "consider / be an option"],
            ["einen Antrag stellen", "beantragen", "apply"],
            ["Einfluss nehmen auf", "beeinflussen", "influence"],
            ["sich in Verbindung setzen mit", "kontaktieren", "get in touch with"],
            ["zum Abschluss bringen / kommen", "abschließen", "complete / be completed"],
          ],
        },
        examples: [
          { de: "Die Firma stellt allen Mitarbeitern einen Laptop zur Verfügung.", en: "The company provides all staff with a laptop." },
          { de: "Das kommt überhaupt nicht in Frage!", en: "That's out of the question!" },
          { de: "Das neue Gesetz tritt am 1. Januar in Kraft.", en: "The new law comes into force on 1 January." },
          { de: "Bitte setzen Sie sich mit unserem Kundenservice in Verbindung.", en: "Please get in touch with our customer service." },
          { de: "Wir müssen bis Freitag eine Entscheidung treffen.", en: "We have to make a decision by Friday." },
        ],
      },
      {
        heading: `Active and passive pairs`,
        body: [
          `Many FVG come in pairs. The version with "stellen", "bringen", "setzen" or "ziehen" is active (someone does something); the version with "stehen", "kommen", "treten" or "sein" is passive or describes a state. This lets German avoid the werden-passive.`,
          `"Das Thema wurde angesprochen" = "Das Thema kam zur Sprache". "Die Räume werden bereitgestellt" = "Die Räume stehen zur Verfügung".`,
        ],
        table: {
          headers: ["Active (someone does it)", "Passive / state"],
          rows: [
            ["etwas zur Verfügung stellen", "zur Verfügung stehen"],
            ["etwas zur Sprache bringen", "zur Sprache kommen"],
            ["etwas in Kraft setzen", "in Kraft treten"],
            ["etwas in Gang setzen / bringen", "in Gang kommen"],
            ["etwas zum Abschluss bringen", "zum Abschluss kommen"],
            ["jemanden in Verlegenheit bringen", "in Verlegenheit kommen / geraten"],
          ],
        },
        examples: [
          { de: "Ich möchte noch ein Problem zur Sprache bringen.", en: "I'd like to raise one more problem." },
          { de: "In der Sitzung kam auch das Budget zur Sprache.", en: "The budget also came up in the meeting." },
          { de: "Der Parkplatz steht nur Gästen zur Verfügung.", en: "The car park is for guests only." },
          { de: "Die Verhandlungen kommen nur langsam in Gang.", en: "The negotiations are only slowly getting going." },
        ],
      },
      {
        heading: `Why use them?`,
        body: [
          `They are formal: an official letter says "Sie können einen Antrag stellen" rather than "Sie können beantragen". They can express nuances of aspect: "in Bewegung setzen" (set in motion), "in Bewegung kommen" (start moving), "in Bewegung sein" (be moving). And they make it easy to add adjectives: "eine schnelle Entscheidung treffen", "scharfe Kritik üben".`,
          `Do not overuse them in speech or personal writing, where they sound bureaucratic. "Ich treffe die Entscheidung, ins Kino zu gehen" is comically stiff.`,
        ],
        examples: [
          { de: "Die Opposition übte scharfe Kritik an dem Gesetzentwurf.", en: "The opposition sharply criticised the bill." },
          { de: "Wir nehmen Ihr Angebot gern in Anspruch.", en: "We are happy to take you up on your offer." },
          { de: "Er brachte seine Dankbarkeit zum Ausdruck.", en: "He expressed his gratitude." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "eine Entscheidung machen",
        right: "eine Entscheidung treffen",
        why: `The light verb is fixed. English make a decision does not translate word for word.`,
      },
      {
        wrong: "Das kommt nicht zu Frage.",
        right: "Das kommt nicht in Frage.",
        why: `The preposition and article in a Funktionsverbgefüge are fixed: "in Frage kommen", "zur Verfügung stehen".`,
      },
      {
        wrong: "Wir stellen Ihnen die Räume zur Verfügung gestellt.",
        right: "Die Räume werden Ihnen zur Verfügung gestellt. / Die Räume stehen Ihnen zur Verfügung.",
        why: `Either use the werden-passive of the active FVG or the stative partner with "stehen".`,
      },
      {
        wrong: "Ich übe Kritik über den Plan.",
        right: "Ich übe Kritik an dem Plan.",
        why: `"Kritik üben" takes "an" + dative, like the noun "Kritik an".`,
      },
    ],
    faqs: [
      {
        q: `"In Frage" or "infrage"?`,
        a: `Both spellings are allowed: "in Frage kommen" and "infrage kommen". Choose one and be consistent.`,
      },
      {
        q: `Are Funktionsverbgefüge the same as idioms?`,
        a: `They are collocations rather than idioms: their meaning is transparent from the noun. "Zur Verfügung stellen" is predictable once you know "Verfügung"; "jemandem einen Bären aufbinden" (to pull someone's leg) is not.`,
      },
      {
        q: `Can I always replace an FVG with the simple verb?`,
        a: `Often, but not always. "Rücksicht nehmen auf" has no perfect single-verb match ("berücksichtigen" means take into account, not show consideration for), and "in Kraft treten" has no simple verb at all.`,
      },
    ],
    related: ["nominalstil-vs-verbalstil", "nominal-style", "formal-letters-and-emails", "amtsdeutsch-legal-german"],
    lessons: [
      "b2-funktionsverbgefuege",
      "b2-qa-kommt-das-in-frage",
      "b2-chain-everyday-to-formal",
      "b2-error-hunt-funktionsverbgefuege",
      "b2-quick-round-stellen-stehen",
      "b2-fvg-extra-1",
      "c1-spiral-nominalstil-funktionsverben",
    ],
  },
  {
    slug: "complex-connectors",
    title: "Complex Connectors: Wie Auch Immer, Es Sei Denn, Zumal, Infolgedessen",
    description:
      "Advanced connectors of concession, restriction, cause and conclusion: wenngleich, wie ... auch, was auch immer, es sei denn, sofern, insofern als, zumal, infolgedessen, mithin, and where each one puts the verb.",
    level: "C1",
    intro: [
      `At the Advanced level, the difference between a good and an excellent text is often in the connections. "Obwohl" and "deshalb" get you through the Upper-intermediate level; the Advanced level needs a wider range: concessions that generalise ("wie sehr er sich auch bemüht"), restrictions ("es sei denn", "sofern", "soweit ich weiß"), formal consequences ("infolgedessen", "mithin") and markers that structure a whole argument.`,
      `Each connector belongs to a word-order class. Get the class right and the word order follows automatically.`,
    ],
    sections: [
      {
        heading: `The four word-order classes`,
        body: [
          `Position 0 conjunctions ("und", "aber", "oder", "denn", "sondern") do not count as an element: subject and verb follow normally. Adverbial connectors ("deshalb", "trotzdem", "folglich", "allerdings", "zudem") take position 1, and the verb follows directly. Subordinating conjunctions ("obgleich", "zumal", "sofern") send the verb to the end. A few connectors, like "nämlich" and usually "jedoch" and "allerdings", can sit in the Mittelfeld.`,
        ],
        table: {
          headers: ["Class", "Examples", "Word order"],
          rows: [
            ["position 0", "aber, denn, sondern, und, oder", "Aber wir haben keine Zeit."],
            ["position 1 (adverb)", "folglich, infolgedessen, zudem, dennoch, allerdings", "Folglich haben wir keine Zeit."],
            ["Mittelfeld", "nämlich, jedoch, allerdings", "Wir haben nämlich keine Zeit."],
            ["subordinating", "zumal, sofern, wenngleich, es sei denn dass", "..., zumal wir keine Zeit haben."],
          ],
        },
      },
      {
        heading: `Generalising concession: "wie ... auch (immer)", "was auch immer"`,
        body: [
          `"Wie sehr er sich auch bemüht, er schafft es nicht." The concessive clause has the verb at the end, and, unusually, the following main clause normally keeps its own verb-second order: "er schafft" rather than "schafft er". The same goes for "so ... auch" ("So schwer es auch ist, wir machen weiter") and "was / wer / wo / wann auch immer".`,
          `"Egal, ob / wie / was" is the spoken equivalent: "Egal, was du sagst, ich gehe." "Wenngleich" and "obschon" are written synonyms of "obwohl"; "wenn ... auch" is literary: "Wenn er auch reich ist, glücklich ist er nicht."`,
        ],
        examples: [
          { de: "Wie man es auch dreht, das Ergebnis bleibt gleich.", en: "However you look at it, the result is the same." },
          { de: "Was auch immer passiert, ich halte zu dir.", en: "Whatever happens, I'm on your side." },
          { de: "So verlockend das Angebot auch ist, wir lehnen ab.", en: "Tempting as the offer is, we're declining." },
          { de: "Das Konzept überzeugt, wenngleich einige Details fehlen.", en: "The concept is convincing, although some details are missing." },
          { de: "Egal, wie spät es wird, ruf mich an.", en: "No matter how late it gets, call me." },
        ],
      },
      {
        heading: `Restriction and condition: "es sei denn", "sofern", "soweit", "insofern als"`,
        body: [
          `"Es sei denn" means unless and is followed by a main clause or by "dass": "Wir fahren morgen, es sei denn, es regnet." "Außer wenn" is the everyday alternative. "Nur dass" adds a limitation: "Die Wohnung ist schön, nur dass sie laut ist."`,
          `"Sofern" (provided that) and "vorausgesetzt, dass" set conditions. "Soweit" restricts to what is known: "soweit ich weiß" (as far as I know). "Insofern ... als" explains the respect in which something is true: "Das Ergebnis ist insofern überraschend, als niemand damit gerechnet hatte."`,
        ],
        examples: [
          { de: "Ich komme, es sei denn, der Zug fällt aus.", en: "I'll come, unless the train is cancelled." },
          { de: "Sofern nichts dazwischenkommt, sind wir um acht da.", en: "Provided nothing comes up, we'll be there at eight." },
          { de: "Soweit ich weiß, ist das Büro heute geschlossen.", en: "As far as I know, the office is closed today." },
          { de: "Er hat insofern recht, als die Kosten gestiegen sind.", en: "He's right insofar as costs have gone up." },
        ],
      },
      {
        heading: `Formal cause, consequence and conclusion`,
        body: [
          `"Zumal" adds an extra reason with weight: all the more so because. "Infolgedessen", "demzufolge", "folglich", "somit" and the very formal "mithin" draw consequences (adverbs, position 1 or Mittelfeld). "Angesichts" + genitive gives a reason as a noun phrase.`,
          `To conclude: "Zusammenfassend lässt sich sagen, dass ...", "Alles in allem ...", "Letztlich ...", "Unterm Strich ..." (colloquial: the bottom line). Keep these apart: "schließlich" means finally or after all ("Er ist schließlich dein Bruder" = he is your brother, after all), while "endlich" means at last (after a long wait).`,
        ],
        examples: [
          { de: "Wir sollten früh losfahren, zumal es Glatteis geben soll.", en: "We should leave early, all the more so as there may be black ice." },
          { de: "Die Nachfrage sank. Infolgedessen wurden Stellen abgebaut.", en: "Demand fell. As a result, jobs were cut." },
          { de: "Die Bedingungen sind erfüllt; der Vertrag ist somit gültig.", en: "The conditions are met; the contract is therefore valid." },
          { de: "Zusammenfassend lässt sich sagen, dass die Vorteile überwiegen.", en: "In summary, the advantages outweigh the disadvantages." },
          { de: "Hilf ihm doch, er ist schließlich dein Bruder.", en: "Do help him, he's your brother after all." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Wie sehr er sich auch bemüht, schafft er es nicht.",
        right: "Wie sehr er sich auch bemüht, er schafft es nicht.",
        why: `After a generalising concessive clause ("wie ... auch"), the main clause normally keeps verb-second order with its own subject first; the inverted version is heard but counts as less standard.`,
      },
      {
        wrong: "Nämlich habe ich keine Zeit.",
        right: "Ich habe nämlich keine Zeit.",
        why: `"Nämlich" can never stand in position 1; it lives in the Mittelfeld.`,
      },
      {
        wrong: "Wir fahren morgen, es sei denn, dass es regnet nicht.",
        right: "Wir fahren morgen, es sei denn, es regnet.",
        why: `"Es sei denn" already means unless; adding a negation reverses the meaning. Use either "es sei denn, es regnet" or "es sei denn, dass es regnet".`,
      },
      {
        wrong: "Endlich ist er dein Bruder.",
        right: "Schließlich ist er dein Bruder.",
        why: `After all (as a reason) is "schließlich". "Endlich" means at last.`,
      },
    ],
    faqs: [
      {
        q: `Is "schlussendlich" correct?`,
        a: `It is common, especially in Switzerland and Austria, but many editors consider it a clumsy blend of "schließlich" and "endlich". In formal writing, use "letztlich" or "schließlich".`,
      },
      {
        q: `What is the difference between "zum einen ... zum anderen" and "einerseits ... andererseits"?`,
        a: `"Zum einen ... zum anderen" lists two points that point in the same direction (firstly ... secondly). "Einerseits ... andererseits" contrasts two sides of a question.`,
      },
      {
        q: `Can "allerdings" mean of course?`,
        a: `Yes, as a reply it means indeed, certainly: "War es teuer? – Allerdings!" Inside a sentence it usually means however, admittedly.`,
      },
    ],
    related: ["concessive-and-consequential-clauses", "rhetoric-and-cohesion", "formal-letters-and-emails", "mittelfeld-word-order"],
    lessons: [
      "c1-concession-1",
      "c1-concession-2",
      "c1-contrast-egal-ob-auch-wenn",
      "c1-concession-3",
      "c1-concession-4",
      "c1-transform-six-ways-to-concede",
      "c1-concession-5",
      "c1-discourse-markers-1",
      "c1-discourse-markers-2",
      "c1-discourse-markers-3",
      "c1-discourse-markers-4",
      "c1-contrast-schliesslich-endlich-letztlich",
      "c1-error-hunt-false-friend-markers",
      "c1-discourse-markers-6",
    ],
  },
  {
    slug: "supposition-and-hearsay",
    title: "Subjective Modals, Supposition and Hearsay at the Advanced Level: Er Dürfte, Er Soll, Er Will",
    description:
      "The full Advanced toolkit for degrees of certainty and reported claims in German: the modal scale (muss, dürfte, müsste, kann, mag), the perfect infinitive, hearsay sollen, claim wollen, distancing words like angeblich and mutmaßlich, and objective vs subjective modals in the past.",
    level: "C1",
    intro: [
      `German gives a careful speaker a whole scale of certainty: "Er muss zu Hause sein", "er dürfte zu Hause sein", "er müsste zu Hause sein", "er kann / könnte zu Hause sein". It also has neat ways to say where information comes from: "er soll" (people say), "er will" (he says so himself), "angeblich", "mutmaßlich", "dem Vernehmen nach".`,
      `This matters most when you read the press and police reports, and when you write cautiously in academic or professional contexts. The Upper-intermediate guide on modal verbs of inference covers the basics; this one adds the fine distinctions.`,
    ],
    sections: [
      {
        heading: `The scale in detail`,
        body: [
          `"Muss" is a strong deduction from evidence. "Dürfte" is a confident estimate, typical of formal and journalistic German. "Müsste" means should be, if everything is normal: "Das Paket müsste morgen ankommen." "Wird (wohl)" is an assumption. "Kann" and "könnte" express possibility. "Mag" concedes a point: "Das mag sein, aber ...".`,
          `All of them take the perfect infinitive for the past: "Sie muss den Termin vergessen haben", "Er dürfte schon gelandet sein", "Das Paket müsste gestern angekommen sein".`,
        ],
        table: {
          headers: ["Form", "Nuance", "Example"],
          rows: [
            ["muss", "deduction, almost certain", "Er muss den Zug verpasst haben."],
            ["dürfte", "very probable, formal estimate", "Die Kosten dürften bei zwei Millionen liegen."],
            ["müsste", "should be (expectation)", "Sie müsste gleich hier sein."],
            ["wird wohl", "assumption", "Er wird wohl im Stau stehen."],
            ["kann / könnte", "possible", "Es könnte ein Missverständnis sein."],
            ["mag", "concession", "Das mag stimmen, ist aber nicht entscheidend."],
          ],
        },
        examples: [
          { de: "Bei dem Verkehr dürfte er sich verspäten.", en: "With this traffic he's likely to be late." },
          { de: "Wenn alles gut geht, müssten wir um sechs fertig sein.", en: "If all goes well, we should be done by six." },
          { de: "Er mag ein guter Redner sein, aber als Chef ist er schwach.", en: "He may be a good speaker, but as a boss he's weak." },
          { de: "Sie kann das unmöglich allein geschafft haben.", en: "She can't possibly have managed that alone." },
        ],
      },
      {
        heading: `"Sollen", "wollen" and distancing words`,
        body: [
          `"Sollen" reports what others say, without the speaker vouching for it: "Der Täter soll ins Ausland geflohen sein" (is said to have fled). "Wollen" reports a claim the subject makes about themselves, usually with doubt: "Der Angeklagte will zur Tatzeit zu Hause gewesen sein."`,
          `Adverbs and phrases do the same job: "angeblich" (allegedly), "vermeintlich" (supposedly, but wrongly), "mutmaßlich" (presumed, in legal reports: "der mutmaßliche Täter"), "Berichten zufolge", "laut Polizei", "wie es heißt", "dem Vernehmen nach" (reportedly, from informal sources).`,
        ],
        examples: [
          { de: "Der Konzern soll Tausende Stellen streichen wollen.", en: "The company is said to be planning to cut thousands of jobs." },
          { de: "Sie will von nichts gewusst haben.", en: "She claims to have known nothing about it." },
          { de: "Der mutmaßliche Täter wurde in Hamburg festgenommen.", en: "The suspect was arrested in Hamburg." },
          { de: "Die vermeintliche Abkürzung kostete uns eine Stunde.", en: "The supposed shortcut cost us an hour." },
          { de: "Dem Vernehmen nach wird der Vertrag nicht verlängert.", en: "The contract will reportedly not be extended." },
        ],
      },
      {
        heading: `Objective vs subjective in the past`,
        body: [
          `This is where the meanings separate formally. Objective modals (obligation, ability) form the past with the Präteritum or with the double infinitive: "Er hat kommen müssen" (he had to come). Subjective modals keep the modal in the present and put the main verb in the perfect infinitive: "Er muss gekommen sein" (he must have come).`,
          `In subordinate clauses: "..., weil er hat kommen müssen" (objective; "hat" before the double infinitive) but "..., dass er gekommen sein muss" (subjective; modal at the very end).`,
        ],
        table: {
          headers: ["Objective (fact)", "Subjective (judgement)"],
          rows: [
            ["Sie hat nicht anrufen können. (She was unable to call.)", "Sie kann nicht angerufen haben. (She can't have called.)"],
            ["Er hat das wissen müssen. (He was obliged to know it.)", "Er muss das gewusst haben. (He must have known it.)"],
            ["Er sollte um acht kommen. (He was supposed to come at eight.)", "Er soll um acht gekommen sein. (He reportedly came at eight.)"],
          ],
        },
        examples: [
          { de: "Ich bin sicher, dass er davon gewusst haben muss.", en: "I'm sure he must have known about it." },
          { de: "Sie war nicht da, weil sie hat arbeiten müssen.", en: "She wasn't there because she had to work." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Er hat krank sein müssen.",
        right: "Er muss krank gewesen sein.",
        why: `A deduction about the past keeps the modal in the present with the perfect infinitive. The double infinitive is for real past obligations.`,
      },
      {
        wrong: "Der Täter sollte ins Ausland geflohen sein.",
        right: "Der Täter soll ins Ausland geflohen sein.",
        why: `Hearsay uses present "soll". "Sollte" + perfect infinitive suggests a conditional or an expectation.`,
      },
      {
        wrong: "der angebliche Täter (for an arrested suspect in a news report)",
        right: "der mutmaßliche Täter",
        why: `Legal and news German uses "mutmaßlich" for a presumed offender. "Angeblich" signals that the claim may well be false.`,
      },
    ],
    faqs: [
      {
        q: `Is "müsste" the same as "muss"?`,
        a: `No. "Muss" is a conclusion from evidence (he must be there; the lights are on). "Müsste" is an expectation based on normal circumstances (he should be there by now). "Müsste" leaves room for things to turn out otherwise.`,
      },
      {
        q: `Is "dürfte" common in speech?`,
        a: `Yes, especially in estimates ("Das dürfte so 50 Euro kosten"). It is neutral to formal and very common in news and business German.`,
      },
      {
        q: `How do I combine hearsay "sollen" with an objective modal?`,
        a: `Stack them: "Er soll das Haus verkaufen müssen" (he reportedly has to sell the house). Both are infinitives depending on the finite "soll".`,
      },
    ],
    related: ["modal-verbs-of-inference", "futur-ii-supposition", "konjunktiv-i-indirect-speech", "konjunktiv-literature-and-press"],
    lessons: [
      "c1-supposition-1",
      "c1-supposition-2",
      "c1-transform-wahrscheinlich-zu-duerfte",
      "c1-dialogue-lab-was-mag-passiert-sein",
      "c1-supposition-3",
      "c1-supposition-4",
      "c1-contrast-soll-will-duerfte-wird",
      "c1-text-detective-polizeimeldung",
      "c1-supposition-5",
      "c1-supposition-6",
      "c1-contrast-muss-gewesen-hat-muessen",
    ],
  },
  {
    slug: "als-ob-and-unreal-comparisons",
    title: "Konjunktiv II Nuances: Als Ob, Beinahe Hätte Ich, Zu ... Als Dass",
    description:
      "Advanced Konjunktiv II in German: synthetic forms (käme, ginge, wüsste), unreal comparisons with als ob and als + verb, near misses with fast and beinahe, zu ... als dass, conditions with sollte, and the polite Konjunktiv.",
    level: "C1",
    intro: [
      `By the Advanced level you know "wäre", "hätte", "würde" and the past "hätte gemacht". This guide covers the structures that make Konjunktiv II sound native: the short synthetic forms of common strong verbs ("käme", "ginge", "wüsste"), unreal comparisons ("als hätte er nichts gehört"), the near miss ("beinahe hätte ich den Zug verpasst") and the unreal result ("zu kalt, als dass wir hätten baden können").`,
    ],
    sections: [
      {
        heading: `Synthetic forms vs "würde"`,
        body: [
          `Besides "wäre", "hätte" and the modals, a group of frequent strong and mixed verbs has a living synthetic Konjunktiv II, formed from the Präteritum stem with umlaut and "-e": "käme", "ginge", "wüsste", "ließe", "bliebe", "fände", "gäbe", "nähme", "dächte", "brächte", and, by analogy, "bräuchte" (from the weak verb "brauchen").`,
          `"Würde" + infinitive is preferred for weak verbs (whose Konjunktiv II looks like the Präteritum: "ich kaufte") and for rare strong verbs with old-fashioned forms ("hülfe", "stürbe"). Avoid "würde sein", "würde haben" and "würde wissen": "wäre", "hätte" and "wüsste" are standard.`,
        ],
        examples: [
          { de: "Wenn ich das wüsste, würde ich es dir sagen.", en: "If I knew, I'd tell you." },
          { de: "Es wäre schön, wenn du mitkämst.", en: "It would be nice if you came along." },
          { de: "Ginge es nach mir, blieben wir noch eine Woche.", en: "If it were up to me, we'd stay another week." },
          { de: "Ich fände es besser, wenn wir früher anfingen.", en: "I'd prefer it if we started earlier." },
        ],
      },
      {
        heading: `Unreal comparisons: "als ob", "als wenn", "als" + verb`,
        body: [
          `"Er tut, als ob er der Chef wäre": "als ob" or "als wenn" + verb at the end. Or drop "ob" and put the verb straight after "als": "Er tut, als wäre er der Chef." The second version is more elegant in writing.`,
          `For the past, use the past Konjunktiv II: "Sie sah mich an, als hätte sie mich nie gesehen." In formal writing Konjunktiv I also appears ("als sei nichts geschehen"), and in speech the indicative ("als ob er krank ist").`,
        ],
        table: {
          headers: ["Structure", "Example"],
          rows: [
            ["als ob + verb at the end", "Er redet, als ob er alles wüsste."],
            ["als wenn + verb at the end", "Er redet, als wenn er alles wüsste."],
            ["als + verb directly after", "Er redet, als wüsste er alles."],
            ["past", "Er redet, als hätte er alles erlebt."],
          ],
        },
        examples: [
          { de: "Sie tat so, als hätte sie nichts bemerkt.", en: "She acted as if she hadn't noticed anything." },
          { de: "Es sieht so aus, als ob es gleich regnen würde.", en: "It looks as if it's about to rain." },
          { de: "Er lebt, als gäbe es kein Morgen.", en: "He lives as if there were no tomorrow." },
          { de: "Als wäre nichts gewesen, ging sie zur Arbeit.", en: "As if nothing had happened, she went to work." },
        ],
      },
      {
        heading: `Near misses and unreal results`,
        body: [
          `"Fast" or "beinahe" + past Konjunktiv II describes something that nearly happened but did not: "Ich wäre fast gestürzt" (I nearly fell), "Beinahe hätte ich den Zug verpasst." English uses the indicative (I almost missed); German uses the Konjunktiv because it did not happen.`,
          `"Zu ... , als dass" + Konjunktiv II expresses a result that is ruled out: "Es war zu kalt, als dass wir hätten baden können" (too cold for us to swim). "Ohne dass" and "nicht, dass" can also take Konjunktiv II: "Nicht, dass ich etwas dagegen hätte, aber ..."`,
        ],
        examples: [
          { de: "Fast hätte ich deinen Geburtstag vergessen.", en: "I almost forgot your birthday." },
          { de: "Er wäre beinahe überfahren worden.", en: "He was nearly run over." },
          { de: "Die Zeit ist zu knapp, als dass wir alles besprechen könnten.", en: "Time is too short for us to discuss everything." },
          { de: "Nicht, dass ich neugierig wäre, aber wer war das?", en: "Not that I'm curious, but who was that?" },
        ],
      },
      {
        heading: `Conditions with "sollte" and the polite Konjunktiv`,
        body: [
          `A verb-first condition with "sollte" means if by any chance, should: "Sollten Sie Fragen haben, rufen Sie mich an." It is the standard formula in business emails. "Falls" is its conjunction equivalent.`,
          `Konjunktiv II also softens statements and requests (the "Konjunktiv der Bescheidenheit"): "Ich hätte da eine Frage", "Wäre es möglich, den Termin zu verschieben?", "Das wäre alles", "Ich würde sagen, ...". Without it, "Ich will" or "Ich habe eine Frage" can sound blunt in formal contexts.`,
        ],
        examples: [
          { de: "Sollte der Zug ausfallen, nehmen wir den Bus.", en: "Should the train be cancelled, we'll take the bus." },
          { de: "Sollten Sie Rückfragen haben, stehe ich Ihnen gern zur Verfügung.", en: "If you have any questions, I'm happy to help." },
          { de: "Ich hätte da noch eine kurze Frage.", en: "I've just got one more quick question." },
          { de: "Würden Sie so freundlich sein, die Tür zu schließen?", en: "Would you be so kind as to close the door?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Er tut, als ob er wäre der Chef.",
        right: "Er tut, als ob er der Chef wäre. / Er tut, als wäre er der Chef.",
        why: `After "als ob" the verb goes to the end; after "als" alone it comes directly after "als". Mixing the two is wrong.`,
      },
      {
        wrong: "Ich habe fast den Zug verpasst.",
        right: "Ich hätte fast den Zug verpasst.",
        why: `What nearly happened but did not is unreal, so German normally uses the past Konjunktiv II with "fast" or "beinahe". (The indicative is heard in casual speech.)`,
      },
      {
        wrong: "Wenn ich das würde wissen, ...",
        right: "Wenn ich das wüsste, ...",
        why: `"Wissen" has a standard synthetic form "wüsste". "Würde wissen" sounds clumsy, and "würde" never comes before the infinitive in a wenn-clause.`,
      },
      {
        wrong: "Es war zu kalt, als dass wir baden konnten.",
        right: "Es war zu kalt, als dass wir hätten baden können.",
        why: `"Zu ... als dass" introduces a result that did not happen and therefore normally takes Konjunktiv II.`,
      },
    ],
    faqs: [
      {
        q: `Is "bräuchte" correct?`,
        a: `It is very common in speech, widely accepted and far more frequent than "würde brauchen", though some style guides still prefer "brauchte" or "würde brauchen" in careful writing.`,
      },
      {
        q: `Should I use "als ob" or "als" + verb?`,
        a: `Both are correct. "Als ob" is more common in speech; "als" + verb is more compact and literary.`,
      },
      {
        q: `What about forms like "hülfe", "stürbe", "schwömme"?`,
        a: `They exist and appear in older literature, but sound archaic today. Use "würde helfen", "würde sterben", "würde schwimmen". See the guide on archaic and literary forms.`,
      },
    ],
    related: ["konjunktiv-ii-past-double-infinitive", "konjunktiv-literature-and-press", "formal-letters-and-emails", "archaic-and-literary-forms"],
    lessons: [
      "b2-als-ob-1",
      "b2-minimal-pairs-als-ob-als",
      "b2-als-ob-2",
      "c1-konjunktiv-nuances-1",
      "c1-konjunktiv-nuances-2",
      "c1-contrast-kaeme-waere-gekommen",
      "c1-error-hunt-konjunktiv",
      "c1-konjunktiv-nuances-3",
      "c1-konjunktiv-nuances-4",
      "c1-transform-bedingung-ohne-wenn",
      "c1-workshop-diplomatic-konjunktiv",
    ],
  },
  {
    slug: "participle-and-infinitive-constructions",
    title: "Participle and Infinitive Constructions: Im Büro Angekommen, Behauptet, Ihn Gesehen zu Haben",
    description:
      "Non-finite structures at the Advanced level: participial phrases used as adverbials (Im Büro angekommen, rief sie an), fixed phrases like genau genommen, zu-infinitives in the past and passive, infinitives without zu, and the infinitive in instructions.",
    level: "C1",
    intro: [
      `English uses -ing forms and infinitives constantly: Having arrived at the office, she called. He claims to have seen him. German handles the same ideas with participial phrases and zu-infinitives, but with stricter rules about who the subject is, where the comma goes and which tense the infinitive takes.`,
    ],
    sections: [
      {
        heading: `Participial phrases as adverbials`,
        body: [
          `A participle with its own objects and adverbials can open a sentence as a compact clause: "Im Büro angekommen, rief sie sofort ihren Chef an" (after she arrived at the office...). "Von der Polizei verfolgt, floh der Täter über die Grenze." "Laut lachend verließ er den Raum."`,
          `The implied subject must be the subject of the main clause. Partizip II gives a completed or passive meaning, Partizip I an ongoing one. These structures are mostly written; in speech, use a clause with "als", "nachdem" or "während".`,
        ],
        examples: [
          { de: "In Berlin angekommen, suchte er sich zuerst ein Hotel.", en: "Having arrived in Berlin, he first looked for a hotel." },
          { de: "Vor Wut zitternd, legte sie den Hörer auf.", en: "Shaking with rage, she hung up." },
          { de: "Von allen Seiten kritisiert, trat der Minister zurück.", en: "Criticised from all sides, the minister resigned." },
          { de: "Zu Hause angekommen, merkte ich, dass ich den Schlüssel vergessen hatte.", en: "When I got home, I realised I'd forgotten my key." },
        ],
      },
      {
        heading: `Fixed participial phrases`,
        body: [
          `A set of fixed phrases works like sentence adverbs: "genau genommen" (strictly speaking), "streng genommen", "offen gestanden" (to be honest), "kurz gesagt" (in short), "unter uns gesagt", "abgesehen von" (apart from), "verglichen mit" (compared with), "ausgehend von" (based on), "angenommen, dass" (assuming that), "vorausgesetzt, dass" (provided that), "gesetzt den Fall, dass" (supposing that).`,
          `In the Vorfeld they count as one element, so the verb follows: "Offen gestanden habe ich keine Lust."`,
        ],
        examples: [
          { de: "Genau genommen ist das kein Fehler.", en: "Strictly speaking, that's not a mistake." },
          { de: "Abgesehen vom Wetter war der Urlaub perfekt.", en: "Apart from the weather, the holiday was perfect." },
          { de: "Verglichen mit letztem Jahr sind die Zahlen gut.", en: "Compared with last year, the figures are good." },
          { de: "Angenommen, du gewinnst im Lotto: Was machst du?", en: "Suppose you win the lottery: what do you do?" },
        ],
      },
      {
        heading: `Zu-infinitives with tense and voice`,
        body: [
          `The zu-infinitive can be past ("gesehen zu haben", "gekommen zu sein"), passive ("eingeladen zu werden") or past passive ("gewählt worden zu sein"). The subject must be the same as in the main clause (or the object, with verbs like "bitten" and "raten").`,
          `"Er behauptet, sie gesehen zu haben" (he claims to have seen her). "Sie bedauert, nicht gekommen zu sein." "Ich hoffe, eingeladen zu werden." English I hope to have finished by Friday is "Ich hoffe, bis Freitag fertig zu sein", not a literal perfect.`,
        ],
        table: {
          headers: ["", "Active", "Passive"],
          rows: [
            ["present", "zu sehen", "gesehen zu werden"],
            ["past", "gesehen zu haben", "gesehen worden zu sein"],
            ["with sein", "gekommen zu sein", ""],
          ],
        },
        examples: [
          { de: "Der Zeuge gibt an, den Täter erkannt zu haben.", en: "The witness states that he recognised the perpetrator." },
          { de: "Ich freue mich, Sie kennengelernt zu haben.", en: "I'm glad to have met you." },
          { de: "Sie war stolz, ausgewählt worden zu sein.", en: "She was proud to have been chosen." },
          { de: "Es ist wichtig, rechtzeitig informiert zu werden.", en: "It's important to be informed in good time." },
        ],
      },
      {
        heading: `Infinitives without "zu" and on signs`,
        body: [
          `No "zu" after modal verbs, "werden", "lassen", the perception verbs "sehen", "hören", "fühlen" ("Ich höre ihn kommen"), "bleiben" ("sitzen bleiben"), "gehen" and "kommen" ("einkaufen gehen"). "Helfen", "lernen" and "lehren" drop "zu" with short infinitives. "Brauchen" needs "zu" in writing: "Du brauchst nicht zu kommen."`,
          `The bare infinitive is also used for instructions, signs and recipes: "Bitte nicht stören", "Nicht hinauslehnen", "Zwiebeln klein schneiden und anbraten", and for deliberative questions: "Was tun?"`,
        ],
        examples: [
          { de: "Ich habe sie singen hören.", en: "I heard her sing." },
          { de: "Er hilft mir umziehen.", en: "He's helping me move." },
          { de: "Du brauchst mich nicht abzuholen.", en: "You don't need to pick me up." },
          { de: "Bitte die Tür geschlossen halten.", en: "Please keep the door closed." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Im Büro angekommen, klingelte das Telefon.",
        right: "Im Büro angekommen, hörte ich das Telefon klingeln. / Als ich im Büro ankam, klingelte das Telefon.",
        why: `The participial phrase must share the subject of the main clause. The telephone did not arrive at the office (a dangling participle).`,
      },
      {
        wrong: "Er behauptet, sie zu gesehen haben.",
        right: "Er behauptet, sie gesehen zu haben.",
        why: `In the past infinitive, "zu" goes before the auxiliary: "gesehen zu haben", "gekommen zu sein".`,
      },
      {
        wrong: "Ich hoffe, dass ich eingeladen werde zu.",
        right: "Ich hoffe, eingeladen zu werden.",
        why: `With the same subject, use the passive zu-infinitive: "eingeladen zu werden".`,
      },
      {
        wrong: "Ich sehe ihn zu kommen.",
        right: "Ich sehe ihn kommen.",
        why: `Perception verbs take a bare infinitive.`,
      },
    ],
    faqs: [
      {
        q: `Do I need a comma before a zu-infinitive?`,
        a: `It is required when the infinitive is announced by "es", a da-compound or a noun ("Ich freue mich darauf, dich zu sehen"), or begins with "um", "ohne", "statt", "anstatt", "außer", "als". Otherwise it is optional but recommended for clarity.`,
      },
      {
        q: `How do I translate English -ing at the start of a sentence?`,
        a: `Usually with a clause ("Als / Nachdem / Während / Weil ..."). A participial phrase is possible in writing if the subjects match. For by -ing, use "indem" or "dadurch, dass".`,
      },
      {
        q: `Why "Ich habe sie singen hören" and not "gehört"?`,
        a: `With an infinitive, perception verbs can form the Perfekt with the double infinitive. "Ich habe sie singen gehört" is also widely used and accepted.`,
      },
    ],
    related: ["extended-participial-attributes", "passive-alternatives", "nominalstil-vs-verbalstil", "lassen-in-all-its-uses"],
    lessons: [
      "c1-participles-infinitives-1",
      "c1-participles-infinitives-2",
      "c1-participles-infinitives-3",
      "c1-error-hunt-dangling-participle",
      "c1-contrast-partizip-relativsatz",
      "c1-participles-infinitives-4",
      "c1-participles-infinitives-5",
      "c1-contrast-sein-zu-haben-zu",
      "c1-transform-english-ing",
      "c1-participles-infinitives-6",
    ],
  },
  {
    slug: "impersonal-passive-constructions",
    title: "Impersonal and Subjectless Passive: Hier Wird Nicht Geraucht, Mir Wurde Geholfen",
    description:
      "The Advanced passive: all tenses and modal passives, worden vs geworden, the subjectless passive (es wird getanzt), the passive of dative verbs, the bekommen passive, impersonal es constructions and middle verbs (Das Buch liest sich leicht).",
    level: "C1",
    intro: [
      `English passives need a subject: I was helped, the door was opened. German passives do not. "Hier wird nicht geraucht" (no smoking here, literally here is not smoked) has no subject at all, and "Mir wurde geholfen" (I was helped) keeps the dative. This is the single biggest difference between the English and German passive.`,
      `At the Advanced level you also need the passive in every tense and mood ("hätte früher informiert werden müssen"), the bekommen passive, a family of impersonal "es" constructions and the middle voice ("Das liest sich gut").`,
    ],
    sections: [
      {
        heading: `All tenses, and "worden" vs "geworden"`,
        body: [
          `In the passive, the participle of "werden" is "worden", without "ge-": "Das Haus ist 1910 gebaut worden." "Geworden" is the participle of "werden" as a full verb (become): "Er ist Arzt geworden."`,
          `With modals, the passive infinitive ("gemacht werden") follows the modal: "Das muss repariert werden". In the past Konjunktiv II you get long but regular chains: "Wir hätten früher informiert werden müssen" (we should have been informed earlier).`,
        ],
        table: {
          headers: ["Tense", "Passive"],
          rows: [
            ["Präsens", "Die Brücke wird gebaut."],
            ["Präteritum", "Die Brücke wurde gebaut."],
            ["Perfekt", "Die Brücke ist gebaut worden."],
            ["Plusquamperfekt", "Die Brücke war gebaut worden."],
            ["Futur I", "Die Brücke wird gebaut werden."],
            ["with modal", "Die Brücke muss gebaut werden."],
            ["Konjunktiv II past + modal", "Die Brücke hätte längst gebaut werden müssen."],
          ],
        },
        examples: [
          { de: "Der Vertrag ist gestern unterschrieben worden.", en: "The contract was signed yesterday." },
          { de: "Die Veranstaltung wäre fast abgesagt worden.", en: "The event was almost cancelled." },
          { de: "Ich finde, dass das Problem früher hätte gelöst werden müssen.", en: "I think the problem should have been solved earlier." },
        ],
      },
      {
        heading: `The subjectless passive`,
        body: [
          `Intransitive verbs (with no accusative object) can form a passive that describes an activity going on, with no subject: "Sonntags wird nicht gearbeitet." "Es wurde bis spät in die Nacht getanzt." The verb is always third person singular.`,
          `"Es" only fills the Vorfeld. As soon as something else stands in position 1, "es" disappears: "Es wurde lange diskutiert" but "Lange wurde diskutiert" and "Gestern wurde lange diskutiert".`,
        ],
        examples: [
          { de: "Hier wird nicht geraucht.", en: "There's no smoking here." },
          { de: "In der Küche wurde gelacht und gesungen.", en: "There was laughing and singing in the kitchen." },
          { de: "Es wird gebeten, die Schuhe auszuziehen.", en: "You are requested to take off your shoes." },
          { de: "Jetzt wird aber geschlafen!", en: "Right, time for bed now! (to children)" },
        ],
      },
      {
        heading: `Dative verbs and the bekommen passive`,
        body: [
          `Verbs with a dative object ("helfen", "danken", "gratulieren", "antworten", "folgen") keep the dative in the passive and have no subject: "Mir wurde geholfen" (I was helped), "Ihnen wird gratuliert". English I was told is "Mir wurde gesagt", never "*Ich wurde gesagt*".`,
          `With verbs that have a dative person and an accusative thing ("schicken", "schenken", "erklären", "abnehmen"), the person can become the subject with "bekommen" (colloquially "kriegen") + Partizip II: "Ich bekomme das Paket zugeschickt" (the parcel is sent to me). "Er hat den Führerschein abgenommen bekommen" (he had his licence taken away).`,
        ],
        examples: [
          { de: "Uns wurde mitgeteilt, dass der Flug ausfällt.", en: "We were told that the flight was cancelled." },
          { de: "Dem Verletzten wurde sofort geholfen.", en: "The injured man was helped at once." },
          { de: "Sie bekam zum Abschied Blumen geschenkt.", en: "She was given flowers as a farewell present." },
          { de: "Ich kriege morgen die Haare geschnitten.", en: "I'm getting my hair cut tomorrow." },
        ],
      },
      {
        heading: `Impersonal "es" and the middle voice`,
        body: [
          `Several fixed constructions always have "es" as subject: "es handelt sich um" (it is a matter of; never with another subject), "es geht um" (it is about), "es kommt auf ... an" (it depends on), "es fehlt / mangelt an" (there is a lack of), "es gibt", "es gilt, ... zu" (the task is to), "es empfiehlt sich" (it is advisable).`,
          `The middle voice uses a reflexive verb to describe how something behaves: "Das Buch liest sich leicht" (the book is easy to read), "Der Wein trinkt sich gut", "Hier lässt es sich leben" (this is a good place to live). "Das gehört sich nicht" and "Das macht man nicht" state social norms.`,
        ],
        examples: [
          { de: "Bei dem Fund handelt es sich um eine römische Münze.", en: "The find is a Roman coin." },
          { de: "In dem Film geht es um eine Familie in Leipzig.", en: "The film is about a family in Leipzig." },
          { de: "Es fehlt an Lehrkräften und Geld.", en: "There is a shortage of teachers and money." },
          { de: "Jetzt gilt es, ruhig zu bleiben.", en: "The thing now is to stay calm." },
          { de: "Der Text liest sich wie ein Krimi.", en: "The text reads like a thriller." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ich wurde geholfen.",
        right: "Mir wurde geholfen.",
        why: `"Helfen" takes the dative, and the dative stays in the passive. There is no nominative subject.`,
      },
      {
        wrong: "Das Haus ist 1910 gebaut geworden.",
        right: "Das Haus ist 1910 gebaut worden.",
        why: `The passive auxiliary has the participle "worden". "Geworden" means became.`,
      },
      {
        wrong: "Das Buch handelt sich um einen Krieg.",
        right: "Das Buch handelt von einem Krieg. / Es handelt sich um einen Roman über einen Krieg.",
        why: `"Sich handeln um" only takes "es" as subject. A book "handelt von" something.`,
      },
      {
        wrong: "Gestern es wurde lange diskutiert.",
        right: "Gestern wurde lange diskutiert.",
        why: `In the subjectless passive, "es" is only a Vorfeld filler and disappears when another element takes position 1.`,
      },
    ],
    faqs: [
      {
        q: `Is the bekommen passive acceptable in writing?`,
        a: `"Bekommen" + participle is standard German ("Er bekam einen Preis verliehen"). "Kriegen" is colloquial and should stay in speech.`,
      },
      {
        q: `When is the subjectless passive used?`,
        a: `To describe an activity without naming who does it, typically rules ("Hier wird nicht geparkt"), descriptions of atmosphere ("Es wurde viel gelacht") and firm instructions ("Jetzt wird aufgeräumt!").`,
      },
      {
        q: `What does "Das gehört verboten" mean?`,
        a: `It is colloquial for that ought to be banned. "Gehören" + participle expresses what the speaker thinks should be done.`,
      },
    ],
    related: ["passive-alternatives", "participle-and-infinitive-constructions", "amtsdeutsch-legal-german", "lassen-in-all-its-uses"],
    lessons: [
      "c1-passive-impersonal-1",
      "c1-passive-impersonal-2",
      "c1-transform-hide-the-agent",
      "c1-error-hunt-passive",
      "c1-passive-impersonal-3",
      "c1-passive-impersonal-4",
      "c1-contrast-ist-wird-wurde-geschlossen",
      "c1-passive-impersonal-5",
      "c1-passive-impersonal-6",
      "c1-contrast-man-passiv-lassen-zu",
    ],
  },
  {
    slug: "lassen-in-all-its-uses",
    title: "Lassen in All Its Uses: Ich Lasse Mir die Haare Schneiden",
    description:
      "Every job German lassen does: causative (have something done), permissive (let), leave, suggestions (lass uns), sich lassen for possibility, the double infinitive (habe reparieren lassen), mich or mir, and related ways of causing feelings and actions.",
    level: "C1",
    intro: [
      `"Lassen" is one of the busiest verbs in German. "Ich lasse das Auto reparieren" (I'm having the car repaired), "Lass mich ausreden!" (let me finish), "Ich lasse den Schirm hier" (I'll leave the umbrella here), "Lass uns gehen" (let's go), "Das lässt sich machen" (that can be done). English needs have, get, let, leave and can be for the same range.`,
      `The grammar is consistent, though: when "lassen" has an infinitive, the infinitive has no "zu", and in the Perfekt you get a double infinitive.`,
    ],
    sections: [
      {
        heading: `Causative: have something done`,
        body: [
          `"Lassen" + infinitive means to have someone do something, or have something done: "Ich lasse die Heizung reparieren." Whoever does the work can be added as an accusative: "Ich lasse den Techniker die Heizung reparieren."`,
          `If you have something done to yourself, add a reflexive dative: "Ich lasse mir die Haare schneiden." Compare "Ich lasse mich untersuchen" (accusative: I'm having myself examined, the person is the object of the action).`,
        ],
        examples: [
          { de: "Wir lassen die Wohnung streichen.", en: "We're having the flat painted." },
          { de: "Ich muss mir einen neuen Pass ausstellen lassen.", en: "I need to get a new passport issued." },
          { de: "Sie lässt sich von einem Anwalt beraten.", en: "She's getting advice from a lawyer." },
          { de: "Der Chef ließ alle Mitarbeiter warten.", en: "The boss kept all the staff waiting." },
        ],
      },
      {
        heading: `Permission, leaving and suggestions`,
        body: [
          `"Lassen" + infinitive also means to let, allow: "Lass mich ausreden!", "Meine Eltern lassen mich nicht allein reisen."`,
          `Without an infinitive it means to leave (something somewhere, or someone alone): "Ich lasse das Auto heute stehen", "Lass mich in Ruhe!", "Lass das!" (stop that!).`,
          `"Lass uns" / "Lasst uns" / "Lassen Sie uns" + infinitive makes a suggestion: "Lass uns eine Pause machen." It is a little more emphatic than "Machen wir eine Pause."`,
        ],
        examples: [
          { de: "Lass mich das machen.", en: "Let me do that." },
          { de: "Lassen Sie mich kurz erklären, worum es geht.", en: "Let me briefly explain what it's about." },
          { de: "Ich habe meine Brille im Büro gelassen.", en: "I left my glasses at the office." },
          { de: "Lasst uns anfangen!", en: "Let's get started!" },
        ],
      },
      {
        heading: `The double infinitive and word order`,
        body: [
          `With an infinitive, the Perfekt of "lassen" uses the infinitive "lassen", not "gelassen": "Ich habe das Auto reparieren lassen." Without an infinitive, the normal participle is used: "Ich habe das Auto in der Garage gelassen."`,
          `In a subordinate clause, "haben" stands in front of the two infinitives: "..., weil ich das Auto habe reparieren lassen." The same rule applies to the modals and to "sehen" and "hören".`,
        ],
        table: {
          headers: ["Use", "Present", "Perfekt"],
          rows: [
            ["causative", "Ich lasse das Auto reparieren.", "Ich habe das Auto reparieren lassen."],
            ["leave", "Ich lasse das Auto stehen.", "Ich habe das Auto stehen lassen."],
            ["leave (no infinitive)", "Ich lasse den Schlüssel hier.", "Ich habe den Schlüssel hier gelassen."],
            ["subordinate", "..., weil ich das Auto reparieren lasse.", "..., weil ich das Auto habe reparieren lassen."],
          ],
        },
        examples: [
          { de: "Hast du dir die Haare schneiden lassen?", en: "Have you had your hair cut?" },
          { de: "Ich weiß nicht, ob er sich hat impfen lassen.", en: "I don't know whether he's been vaccinated." },
        ],
      },
      {
        heading: `"Sich lassen" and other ways of causing`,
        body: [
          `"Sich lassen" + infinitive means can be done: "Das Fenster lässt sich nicht öffnen", "Darüber lässt sich streiten". See the guide to passive alternatives.`,
          `"Lassen" is not the only causative. "Machen" + adjective causes a state: "Das macht mich müde." "Bringen" + "zu" causes an action or emotion: "Das bringt mich zum Lachen", "Er hat mich dazu gebracht, mitzukommen." English makes me laugh is not "*macht mich lachen*" in modern German.`,
        ],
        examples: [
          { de: "Der Fleck lässt sich leicht entfernen.", en: "The stain can easily be removed." },
          { de: "Diese Musik macht mich traurig.", en: "This music makes me sad." },
          { de: "Der Film hat uns zum Weinen gebracht.", en: "The film made us cry." },
          { de: "Wie hast du ihn dazu gebracht, sich zu entschuldigen?", en: "How did you get him to apologise?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ich habe das Auto reparieren gelassen.",
        right: "Ich habe das Auto reparieren lassen.",
        why: `With a dependent infinitive, "lassen" forms the Perfekt with the double infinitive.`,
      },
      {
        wrong: "Ich lasse meine Haare schneiden zu.",
        right: "Ich lasse mir die Haare schneiden.",
        why: `"Lassen" takes an infinitive without "zu", and for body parts German usually uses a dative reflexive with the definite article.`,
      },
      {
        wrong: "Das macht mich lachen.",
        right: "Das bringt mich zum Lachen.",
        why: `English make + verb is not "machen" + infinitive. Use "bringen zu" + nominalised infinitive, or "Darüber muss ich lachen".`,
      },
      {
        wrong: "Ich habe mein Handy zu Hause lassen.",
        right: "Ich habe mein Handy zu Hause gelassen.",
        why: `Without a dependent infinitive, "lassen" uses the normal participle "gelassen".`,
      },
    ],
    faqs: [
      {
        q: `"Stehen lassen" or "stehenlassen"?`,
        a: `Both are allowed when the meaning is figurative or idiomatic ("jemanden stehen lassen / stehenlassen", leave someone standing). In the literal sense, write it separately: "Lass die Tasche hier stehen."`,
      },
      {
        q: `Is "lass uns" the same as "let's"?`,
        a: `Yes, roughly. Germans also use "Gehen wir!" (verb first, more neutral) and, very casually, "Komm, wir gehen."`,
      },
      {
        q: `"Ich lasse mich" or "ich lasse mir"?`,
        a: `"Mich" if you are the direct object of the action ("Ich lasse mich operieren"); "mir" if there is another object and you benefit or are affected ("Ich lasse mir den Zahn ziehen").`,
      },
    ],
    related: ["passive-alternatives", "konjunktiv-ii-past-double-infinitive", "impersonal-passive-constructions", "participle-and-infinitive-constructions"],
    lessons: [
      "b2-pattern-das-laesst-sich-machen",
      "b2-zustandspassiv-extra-5",
      "c1-sein-haben-machen-4",
      "c1-transform-kernverben",
      "c1-sein-haben-machen-6",
    ],
  },
  {
    slug: "vorfeld-and-emphasis",
    title: "The Vorfeld and Emphasis: Ausgerechnet Heute, Was Ich Brauche, Ist Zeit",
    description:
      "How German puts information in focus: choosing what goes in the Vorfeld, focus particles (sogar, selbst, nur, erst, gerade, ausgerechnet) and their scope, placeholder es, cleft and pseudo-cleft sentences, demonstratives, and emphatic negation.",
    level: "C1",
    intro: [
      `English emphasises mostly with stress and with cleft sentences: It was Max who called. German has more options. It can move almost anything into the first position ("Den Film habe ich gesehen, das Buch nicht"), use focus particles ("ausgerechnet heute"), clefts and pseudo-clefts ("Was mich ärgert, ist ..."), or stressed demonstratives ("Den kenne ich!").`,
      `Knowing these tools lets you sound natural in discussion and convincing in writing, and lets you read the precise nuance of a German text.`,
    ],
    sections: [
      {
        heading: `Choosing the Vorfeld`,
        body: [
          `The Vorfeld (position 1) is the starting point of the sentence. Neutral German puts the subject or a time or place phrase there. Putting an object, an adverb or even a participle there signals topic or contrast: "Diesen Fehler mache ich nie wieder." "Gelesen habe ich das Buch, verstanden habe ich es nicht."`,
          `In writing, the Vorfeld is a tool of cohesion: start the sentence with what links back to the previous one ("Diese Entwicklung ...", "Dabei ...", "Daraus folgt ...").`,
        ],
        examples: [
          { de: "Den Film kenne ich, das Buch nicht.", en: "The film I know, the book I don't." },
          { de: "Gesehen habe ich ihn, aber gesprochen haben wir nicht.", en: "I did see him, but we didn't speak." },
          { de: "Diese Frage ist es, die uns beschäftigen sollte.", en: "It's this question that should concern us." },
        ],
      },
      {
        heading: `Focus particles and their scope`,
        body: [
          `Focus particles stand directly before the element they highlight: "Nur ich habe das gewusst" (only I) vs "Ich habe das nur gewusst" (I only knew it, did nothing). "Sogar" and "selbst" mean even; "auch" means also; "erst" means not until / only so far (time and quantity, with the idea of more to come); "schon" means already.`,
          `"Ausgerechnet" expresses annoyance: of all things / people / days. "Gerade" means precisely, especially ("gerade deshalb") or, negated, not exactly ("nicht gerade billig"). "Eben" and "genau" confirm: "Das ist es ja eben!"`,
        ],
        table: {
          headers: ["Particle", "Meaning", "Example"],
          rows: [
            ["nur", "only (nothing more)", "Er hat nur zwei Euro."],
            ["erst", "only (so far / not until)", "Er ist erst 16. Sie kommt erst morgen."],
            ["sogar / selbst", "even", "Sogar / Selbst der Chef war da."],
            ["ausgerechnet", "of all ...", "Ausgerechnet heute regnet es!"],
            ["gerade", "precisely; not exactly (negated)", "Gerade deshalb. Nicht gerade billig."],
          ],
        },
        examples: [
          { de: "Ich bin erst gestern angekommen.", en: "I only arrived yesterday." },
          { de: "Selbst Experten waren überrascht.", en: "Even experts were surprised." },
          { de: "Ausgerechnet du sagst mir das!", en: "You, of all people, tell me that!" },
          { de: "Gerade deshalb sollten wir vorsichtig sein.", en: "That's precisely why we should be careful." },
        ],
      },
      {
        heading: `Placeholder "es" and cleft sentences`,
        body: [
          `Placeholder "es" fills the Vorfeld so that the real subject can come later, where new information belongs: "Es kamen über hundert Gäste." The verb agrees with the real subject (plural "kamen"). "Es" disappears if anything else takes position 1: "Gestern kamen über hundert Gäste."`,
          `Cleft-like sentences single out an element: "Es war Anna, die angerufen hat" or, more typically German, "Anna war es, die angerufen hat". Pseudo-clefts start with a "was" or "wer" clause: "Was ich brauche, ist Zeit." "Wer das gesagt hat, war Max." "Das Einzige, was fehlt, ist Geld."`,
        ],
        examples: [
          { de: "Es meldeten sich nur drei Kandidaten.", en: "Only three candidates applied." },
          { de: "Max war es, der die Idee hatte.", en: "It was Max who had the idea." },
          { de: "Was mich stört, ist der Ton.", en: "What bothers me is the tone." },
          { de: "Woran ich denke, ist die Finanzierung.", en: "What I'm thinking of is the funding." },
        ],
      },
      {
        heading: `Demonstratives, dislocation and emphatic negation`,
        body: [
          `In speech, stressed "der / die / das" replace personal pronouns and often move to the front: "Den kenne ich!", "Die hat recht." Left dislocation repeats a noun with a demonstrative: "Den Peter, den kenne ich gut."`,
          `Emphatic negation: "keineswegs", "keinesfalls", "überhaupt nicht", "ganz und gar nicht", "nicht im Geringsten", and the formal "mitnichten". Litotes understates for effect: "nicht schlecht" (pretty good), "nicht ganz unschuldig" (partly to blame), "nicht ohne" (quite tough).`,
        ],
        examples: [
          { de: "Den Typen kenne ich doch!", en: "I know that guy!" },
          { de: "Das war keineswegs meine Absicht.", en: "That was by no means my intention." },
          { de: "Er ist an dem Streit nicht ganz unschuldig.", en: "He's not entirely blameless in the argument." },
          { de: "Die Wanderung ist nicht ohne.", en: "The hike is quite something. (tough)" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Es kam viele Gäste.",
        right: "Es kamen viele Gäste.",
        why: `Placeholder "es" is not the subject; the verb agrees with "viele Gäste".`,
      },
      {
        wrong: "Er ist nur 16, er darf noch nicht wählen.",
        right: "Er ist erst 16, er darf noch nicht wählen.",
        why: `For age and time with the idea that more will come, use "erst". "Nur" suggests nothing more.`,
      },
      {
        wrong: "Gestern es kamen viele Gäste.",
        right: "Gestern kamen viele Gäste.",
        why: `Placeholder "es" only exists in the Vorfeld. If another element is there, drop it.`,
      },
      {
        wrong: "Was ich brauche ist, Zeit.",
        right: "Was ich brauche, ist Zeit.",
        why: `The comma closes the "was" clause before the main verb.`,
      },
    ],
    faqs: [
      {
        q: `"Es war Anna, die ..." or "Anna war es, die ..."?`,
        a: `Both are correct. "Anna war es, die ..." sounds more idiomatic. German uses clefts less than English, because it can simply stress the word or move it to the Vorfeld: "ANNA hat angerufen."`,
      },
      {
        q: `Is "sogar" the same as "selbst"?`,
        a: `As focus particles meaning even, yes. "Selbst" before the noun means even; after it means -self: "selbst der Chef" (even the boss) vs "der Chef selbst" (the boss himself).`,
      },
      {
        q: `Is left dislocation ("Den Peter, den kenne ich") correct?`,
        a: `It is normal in speech and very natural, but avoid it in formal writing.`,
      },
    ],
    related: ["mittelfeld-word-order", "modal-particles-in-depth", "rhetoric-and-cohesion", "stylistic-registers"],
    lessons: [
      "b2-word-order-in-depth-2",
      "b2-es-placeholder-cleft-sentences",
      "b2-contrast-neutral-emphatic",
      "c1-emphasis-focus-1",
      "c1-emphasis-focus-2",
      "c1-transform-vorfeld-focus",
      "c1-contrast-sogar-selbst-auch-gar",
      "c1-emphasis-focus-5",
      "c1-emphasis-focus-6",
      "c1-mission-ueberzeugende-rede",
    ],
  },
  {
    slug: "word-formation",
    title: "Word Formation: Prefixes, Suffixes and Compounds",
    description:
      "How German builds words: inseparable prefixes (be-, ver-, zer-, ent-, er-, miss-), prefixes that can be separable or inseparable (über-, um-, durch-), noun and adjective suffixes and their genders, and compounds with linking elements (Arbeitsplatz, Hundehütte).",
    level: "C1",
    intro: [
      `A German dictionary looks huge, but much of it is built from a limited set of parts. "Stellen" gives "bestellen" (order), "verstellen" (adjust, disguise), "entstellen" (disfigure), "herstellen" (produce), "darstellen" (represent), "die Vorstellung" (performance, idea, introduction). Knowing the building blocks lets you guess new words and choose precise ones.`,
      `Word formation is also the key to reading fast at the Advanced and Mastery levels: compounds are read from right to left, prefixes signal a type of change, and suffixes tell you the word class and gender.`,
    ],
    sections: [
      {
        heading: `Inseparable prefixes and what they do`,
        body: [
          `"Be-", "ver-", "zer-", "ent-", "er-", "miss-", "emp-" and "ge-" never separate, are normally unstressed ("miss-" can be stressed), and their participles have no "ge-": "besucht", "verstanden", "zerbrochen". Each has typical meanings, though not every word follows them.`,
        ],
        table: {
          headers: ["Prefix", "Typical meaning", "Examples"],
          rows: [
            ["be-", "makes a verb transitive, acts on an object", "antworten auf → beantworten; malen → bemalen"],
            ["ver-", "wrong, away, change, completion", "sich verlaufen, verschlafen, verkaufen, verändern"],
            ["zer-", "into pieces", "zerbrechen, zerstören, zerreißen"],
            ["ent-", "removal, away from, start", "entfernen, entkommen, entstehen"],
            ["er-", "achieving a result; sometimes dying or killing", "erreichen, erarbeiten, ertrinken, erschießen"],
            ["miss-", "wrongly, badly", "missverstehen, misslingen, misstrauen"],
          ],
        },
        examples: [
          { de: "Bitte beantworten Sie alle Fragen.", en: "Please answer all the questions." },
          { de: "Ich habe mich in der Altstadt verlaufen.", en: "I got lost in the old town." },
          { de: "Der Sturm hat das Dach zerstört.", en: "The storm destroyed the roof." },
          { de: "Wie ist das Missverständnis entstanden?", en: "How did the misunderstanding arise?" },
        ],
      },
      {
        heading: `Separable or inseparable: "über-", "um-", "durch-", "unter-", "wieder-"`,
        body: [
          `These prefixes can be either. Separable (stressed prefix) usually keeps the literal, spatial meaning; inseparable (stressed stem) usually has a figurative meaning. "Übersetzen" with stress on "über" means ferry across ("Er setzt uns über"); with stress on "setzen" it means translate ("Sie übersetzt den Text").`,
          `"Umfahren": "Er hat das Schild umgefahren" (knocked down) vs "Er hat das Hindernis umfahren" (drove around). "Wiederholen": "Ich hole das Buch wieder" (fetch back) vs "Ich wiederhole die Frage" (repeat).`,
        ],
        examples: [
          { de: "Kannst du diesen Brief übersetzen?", en: "Can you translate this letter?" },
          { de: "Die Fähre setzt uns ans andere Ufer über.", en: "The ferry takes us across to the other bank." },
          { de: "Wir müssen die Baustelle umfahren.", en: "We have to drive around the roadworks." },
          { de: "Der Lkw hat einen Baum umgefahren.", en: "The lorry knocked down a tree." },
        ],
      },
      {
        heading: `Suffixes: word class and gender`,
        body: [
          `Noun suffixes fix the gender: "-ung", "-heit", "-keit", "-schaft", "-ion", "-tät", "-ei", "-ik" give feminine nouns; "-chen", "-lein", "-ment", "-tum", "-um" give neuter (exceptions include "der Irrtum", "der Reichtum" and "der Moment"); "-er" (for people and tools), "-ling", "-ismus", "-ist" give masculine.`,
          `Adjective suffixes add meaning: "-lich" (characteristic: "freundlich", "täglich"), "-ig" ("lustig", "heutig"), "-isch" (origin, often negative: "kindisch" childish vs "kindlich" childlike), "-bar" (can be done), "-los" (without), "-voll" (full of), "-haft" (like: "fehlerhaft", "schmerzhaft").`,
        ],
        examples: [
          { de: "die Freundschaft, die Möglichkeit, die Bäckerei", en: "the friendship, the possibility, the bakery" },
          { de: "das Eigentum, das Instrument, das Brötchen", en: "the property, the instrument, the bread roll" },
          { de: "Sein Verhalten war kindisch.", en: "His behaviour was childish." },
          { de: "Das war ein sinnloser, aber liebevoller Versuch.", en: "That was a pointless but loving attempt." },
        ],
      },
      {
        heading: `Compounds and linking elements`,
        body: [
          `A compound takes its gender and meaning from its last part, and you read it from the right: "die Haustür" is a kind of door; "das Türhaus" would be a kind of house. Earlier parts specify: "der Kinderarzt" (doctor for children), "die Arbeitszeit" (working time).`,
          `Many compounds insert a linking element (Fugenelement) between the parts: "-s-" after "-ung", "-heit", "-keit", "-ion", "-tät" and many others ("Arbeitsplatz", "Wohnungstür", "Universitätsstadt"), "-e-" ("Hundehütte"), "-n-" or "-en-" ("Straßenbahn", "Studentenwohnheim"), "-er-" ("Kinderwagen"). There is no complete rule; learn common ones and copy patterns.`,
        ],
        examples: [
          { de: "die Wohnungssuche, der Arbeitsvertrag, die Geburtstagsfeier", en: "the flat hunt, the employment contract, the birthday party" },
          { de: "die Kinderbetreuung, die Straßenbahnhaltestelle", en: "childcare, the tram stop" },
          { de: "die Bundesausbildungsförderung", en: "federal student financial aid" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ich habe das Glas gezerbrochen.",
        right: "Ich habe das Glas zerbrochen.",
        why: `Verbs with inseparable prefixes form the participle without "ge-".`,
      },
      {
        wrong: "Sie setzt den Text über.",
        right: "Sie übersetzt den Text.",
        why: `Translate is the inseparable "übersetzen". The separable verb means to ferry across.`,
      },
      {
        wrong: "Der Wohnungtür ist offen.",
        right: "Die Wohnungstür ist offen.",
        why: `The gender comes from the last part ("die Tür"), and "-ung" normally takes a linking "-s-".`,
      },
      {
        wrong: "Das war ein kindliches Verhalten von dem Chef.",
        right: "Das war ein kindisches Verhalten von dem Chef.",
        why: `"Kindisch" is childish (negative); "kindlich" is childlike (neutral or positive).`,
      },
    ],
    faqs: [
      {
        q: `How do I know whether a prefix is separable when I hear it?`,
        a: `By stress. Separable prefixes are stressed ("ÜBERsetzen", ferry across), inseparable verbs stress the stem ("überSETZen", translate). In writing, the participle tells you: "übergesetzt" vs "übersetzt".`,
      },
      {
        q: `Can I make up my own compounds?`,
        a: `Yes, German does this freely: "Wohnungsbesichtigungstermin" (flat viewing appointment) is perfectly normal. Use established linking elements and keep the most important word at the end.`,
      },
      {
        q: `Is "ver-" always negative?`,
        a: `No. It often means doing something wrong ("sich verschreiben", make a slip of the pen) but also completion or change ("verbrauchen", "verändern") and has many unpredictable meanings ("verstehen", "verkaufen").`,
      },
    ],
    related: ["nominalstil-vs-verbalstil", "nominal-style", "evaluative-suffixes-and-diminutives", "separable-verbs"],
    lessons: [
      "b1-word-formation-1",
      "b1-word-formation-2",
      "c1-nominalization-1",
      "c1-nominalization-2",
      "c1-error-hunt-derivation",
      "c2-suffixes-1",
      "c2-suffixes-2",
      "c2-vocab-prefixes",
    ],
  },
  {
    slug: "registers-du-and-sie",
    title: "Registers in German: Formal, Neutral, Colloquial, and Du vs Sie",
    description:
      "How German signals register: vocabulary triplets (erhalten / bekommen / kriegen), grammatical markers (genitive, Präteritum, Konjunktiv I, dropped endings), du vs Sie and switching between them, terms of address, and register in emails and chat.",
    level: "C1",
    intro: [
      `German has a clearer line between formal and informal than English, and it runs through grammar as well as vocabulary. The same message can be "Wir haben Ihr Schreiben erhalten", "Wir haben Ihren Brief bekommen" or "Hab deinen Brief gekriegt". All are correct; each fits a different situation.`,
      `On top of that comes the choice between "du" and "Sie", which English lost centuries ago. Getting register right is one of the clearest signs of Advanced competence.`,
    ],
    sections: [
      {
        heading: `Vocabulary in three registers`,
        body: [
          `Many everyday meanings have a formal, a neutral and a colloquial word. Formal words appear in official letters and literature; colloquial words among friends. Some colloquial words are rude or offensive, so learn them to understand rather than to use.`,
        ],
        table: {
          headers: ["Formal", "Neutral", "Colloquial"],
          rows: [
            ["erhalten", "bekommen", "kriegen"],
            ["speisen", "essen", "futtern"],
            ["sich begeben", "gehen", "abhauen (leave)"],
            ["die Wohnung, die Unterkunft", "die Wohnung", "die Bude"],
            ["finanzielle Mittel", "das Geld", "die Kohle, die Knete"],
            ["verstehen, begreifen", "verstehen", "kapieren, checken"],
          ],
        },
        examples: [
          { de: "Wir haben Ihre Bewerbung erhalten.", en: "We have received your application." },
          { de: "Hast du meine Nachricht bekommen?", en: "Did you get my message?" },
          { de: "Ich hab's echt nicht kapiert.", en: "I really didn't get it." },
        ],
      },
      {
        heading: `Grammatical markers of register`,
        body: [
          `Formal written German: genitive after "wegen" and "trotz", Präteritum in narration, Konjunktiv I for reported speech, nominal style, complete sentences.`,
          `Colloquial spoken German: "wegen" + dative, Perfekt for almost every past event, indicative or "würde" in reported speech, dropped endings and contractions ("hab", "ich geh", "gibt's", "ham", "is"), "weil" + verb second, and omitted Vorfeld pronouns ("Weiß ich nicht.", "Kenn ich.").`,
        ],
        table: {
          headers: ["Formal", "Colloquial"],
          rows: [
            ["wegen des Wetters", "wegen dem Wetter"],
            ["Er sagte, er sei krank.", "Er hat gesagt, er ist krank."],
            ["Ich habe das nicht gewusst.", "Hab ich nicht gewusst."],
            ["..., weil ich keine Zeit hatte.", "..., weil ich hatte keine Zeit."],
            ["Das weiß ich nicht.", "Weiß ich nicht."],
          ],
        },
      },
      {
        heading: `Du or Sie?`,
        body: [
          `"Sie" is the default with adults you do not know, in shops, at the bank and with the authorities, with superiors in traditional workplaces, and with teachers. "Du" is used with family, friends, children, among students and young people, in many sports clubs and online communities, and in many start-ups and companies that cultivate an informal culture.`,
          `The switch to "du" is usually offered by the older or more senior person: "Wollen wir uns duzen?" or "Ich bin übrigens Anna." Declining is possible but delicate. Mixed forms exist: the "Hamburger Sie" (first name + "Sie": "Anna, können Sie ...?") and the "Münchner Du" (surname + "du"), the latter now rare.`,
          `When you switch, everything changes together: pronouns, possessives, imperatives and reflexives. "Setzen Sie sich, nehmen Sie Ihren Mantel" becomes "Setz dich, nimm deinen Mantel".`,
        ],
        examples: [
          { de: "Wollen wir uns nicht duzen? Ich bin Thomas.", en: "Shall we use du? I'm Thomas." },
          { de: "Frau Becker, könnten Sie mir kurz helfen?", en: "Ms Becker, could you help me for a moment?" },
          { de: "Ihr könnt gern reinkommen. / Sie können gern hereinkommen.", en: "You're welcome to come in. (several people: informal / formal)" },
        ],
      },
      {
        heading: `Address and digital channels`,
        body: [
          `Address people by "Frau" or "Herr" + surname, and keep academic titles in formal contexts: "Frau Dr. Weber", "Herr Professor Schmidt". "Fräulein" is obsolete. Inclusive forms such as "Kolleginnen und Kollegen", "Mitarbeitende" or the debated "Mitarbeiter*innen" are common in institutions.`,
          `E-mails between colleagues use "Hallo Frau Wagner" or "Liebe Frau Wagner" and close with "Viele Grüße" or "Beste Grüße". Chat abbreviations ("LG" for "Liebe Grüße", "VG", "kA" for "keine Ahnung", "vllt" for "vielleicht") belong to informal messages only.`,
        ],
        examples: [
          { de: "Liebe Frau Klein, vielen Dank für Ihre schnelle Antwort.", en: "Dear Ms Klein, many thanks for your quick reply." },
          { de: "Hi Jonas, passt dir 15 Uhr? LG Mia", en: "Hi Jonas, does 3 pm suit you? Best wishes, Mia" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Frau Müller, kannst du mir helfen?",
        right: "Frau Müller, können Sie mir helfen?",
        why: `"Frau" + surname signals the formal relationship; it goes with "Sie" (except in the rare Münchner Du).`,
      },
      {
        wrong: "Setzen Sie sich, nimm deinen Mantel ab.",
        right: "Setzen Sie sich, nehmen Sie Ihren Mantel ab.",
        why: `Register switches must be consistent across pronouns, possessives and imperatives.`,
      },
      {
        wrong: "Sehr geehrter Herr Schmidt, ich hab Ihre Mail gekriegt.",
        right: "Sehr geehrter Herr Schmidt, ich habe Ihre E-Mail erhalten.",
        why: `Dropped endings and colloquial verbs clash with a formal opening.`,
      },
      {
        wrong: "Können sie mir helfen? (to one person you address)",
        right: "Können Sie mir helfen?",
        why: `Formal "Sie", "Ihnen", "Ihr" are always capitalised. Lowercase "sie" means she or they.`,
      },
    ],
    faqs: [
      {
        q: `Should I use "du" with my colleagues?`,
        a: `Follow the company culture and wait for the offer from a senior person. Many tech companies and start-ups use "du" from day one; banks, law firms and the public sector usually stay with "Sie".`,
      },
      {
        q: `Should "du" be capitalised in letters?`,
        a: `It is optional. In letters and emails, "du / Du" and "dein / Dein" may be capitalised as a sign of respect; both spellings are correct.`,
      },
      {
        q: `Is it rude to keep using "Sie"?`,
        a: `Not usually. "Sie" can express respect and professional distance, not coldness. Once someone has offered "du", however, returning to "Sie" would signal a serious break in the relationship.`,
      },
    ],
    related: ["formal-letters-and-emails", "stylistic-registers", "modal-particles-in-depth", "sein-haben-du-sie"],
    lessons: [
      "c1-registers-1",
      "c1-registers-2",
      "c1-transform-du-zu-sie",
      "c1-dialogue-lab-duzen-wir-uns",
      "c1-registers-3",
      "c1-registers-4",
      "c1-error-hunt-register-clash",
      "c1-contrast-sie-ihr-du-capitals",
      "c1-registers-5",
      "c1-registers-6",
      "c1-mission-drei-empfaenger",
    ],
  },
  {
    slug: "formal-letters-and-emails",
    title: "Formal Letters and Emails in German: Sehr Geehrte Damen und Herren",
    description:
      "How to write formal German correspondence: DIN 5008 layout, the Betreff line, Anrede with a comma and a lowercase start, Grußformeln from Mit freundlichen Grüßen to Liebe Grüße, set phrases for requests, complaints and cancellations, and Konjunktiv II for politeness.",
    level: "C1",
    intro: [
      `German formal letters follow conventions more strictly than English ones. The subject line has no "Betreff:" label, the greeting ends with a comma and the first word of the letter starts with a lowercase letter, and the closing "Mit freundlichen Grüßen" has no punctuation at all.`,
      `Learn the frame once, then fill it with a small set of fixed formulas. That is exactly what the writing tasks of the Goethe C1 exam reward: correct register, clear structure and appropriate phrases.`,
    ],
    sections: [
      {
        heading: `Layout and the opening`,
        body: [
          `A standard letter (DIN 5008) has: sender, recipient's address, place and date on the right ("Berlin, 3. März 2026"), the subject line in bold without the word "Betreff", the salutation, the text, the closing, the signature and, if needed, "Anlagen" (enclosures).`,
          `Salutations: "Sehr geehrte Damen und Herren," if you do not know the name; "Sehr geehrte Frau Weber," / "Sehr geehrter Herr Dr. Krause," with a name. After the comma, the letter continues in lowercase unless the first word is a noun or "Sie": "Sehr geehrte Frau Weber, vielen Dank für ..."`,
        ],
        examples: [
          { de: "Kündigung meines Mietvertrags zum 30. Juni 2026", en: "Termination of my tenancy agreement as of 30 June 2026 (subject line)" },
          { de: "Sehr geehrte Damen und Herren, hiermit kündige ich ...", en: "Dear Sir or Madam, I hereby give notice ..." },
          { de: "Sehr geehrter Herr Yilmaz, vielen Dank für Ihre E-Mail vom 12. Mai.", en: "Dear Mr Yilmaz, thank you for your email of 12 May." },
          { de: "Bezug nehmend auf unser Telefonat vom Montag sende ich Ihnen ...", en: "Further to our phone call on Monday, I am sending you ..." },
        ],
      },
      {
        heading: `Closings and their distance`,
        body: [
          `"Mit freundlichen Grüßen" is the neutral formal closing, with no comma after it. "Freundliche Grüße" is slightly less stiff; "Beste Grüße" and "Viele Grüße" are friendly and professional; "Liebe Grüße" is for people you know well. "Hochachtungsvoll" sounds cold and is used today mainly in disputes.`,
          `Swiss Standard German uses "ss" instead of "ß": "Freundliche Grüsse". In emails, "Guten Tag Herr Yilmaz," and "Hallo Frau Becker," are common, more relaxed openings.`,
        ],
        table: {
          headers: ["Opening", "Closing", "Relationship"],
          rows: [
            ["Sehr geehrte Damen und Herren,", "Mit freundlichen Grüßen", "formal, unknown recipient"],
            ["Sehr geehrte Frau Weber,", "Mit freundlichen Grüßen / Freundliche Grüße", "formal, known name"],
            ["Guten Tag Frau Weber, / Liebe Frau Weber,", "Beste Grüße / Viele Grüße", "professional, friendly"],
            ["Hallo Anna, / Liebe Anna,", "Viele Grüße / Liebe Grüße", "informal"],
          ],
        },
      },
      {
        heading: `Set phrases for the body`,
        body: [
          `Requests: "Ich möchte Sie bitten, ...", "Ich wäre Ihnen dankbar, wenn Sie ... könnten", "Könnten Sie mir bitte mitteilen, ob ...". Information: "Hiermit teile ich Ihnen mit, dass ...", "Anbei / Im Anhang finden Sie ...". Follow-ups: "Ich komme auf meine E-Mail vom ... zurück", "Ich möchte mich nach dem Stand meines Antrags erkundigen".`,
          `Complaints (Reklamation): state the facts ("Am 5. Mai habe ich ... bestellt"), the problem ("Leider musste ich feststellen, dass ..."), the demand ("Ich bitte Sie daher, ...") and a deadline ("bis zum 20. Mai"), with a polite threat if necessary: "Andernfalls sehe ich mich gezwungen, rechtliche Schritte einzuleiten." Close with "Für Rückfragen stehe ich Ihnen gern zur Verfügung."`,
        ],
        examples: [
          { de: "Ich wäre Ihnen sehr dankbar, wenn Sie mir die Unterlagen bis Freitag zusenden könnten.", en: "I would be very grateful if you could send me the documents by Friday." },
          { de: "Leider musste ich feststellen, dass das Gerät defekt ist.", en: "Unfortunately, I found that the device is faulty." },
          { de: "Ich bitte Sie, den Betrag bis zum 15. Juni zu erstatten.", en: "I ask you to refund the amount by 15 June." },
          { de: "Anbei erhalten Sie eine Kopie der Rechnung.", en: "Please find enclosed a copy of the invoice." },
          { de: "Für Rückfragen stehe ich Ihnen gern zur Verfügung.", en: "I'm happy to answer any questions." },
          { de: "Ich bitte um eine kurze schriftliche Bestätigung.", en: "I would ask for a brief written confirmation." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Sehr geehrte Frau Weber, Vielen Dank für Ihre Nachricht.",
        right: "Sehr geehrte Frau Weber, vielen Dank für Ihre Nachricht.",
        why: `After the comma of the salutation, the text continues in lowercase (unless the word is a noun or a formal pronoun).`,
      },
      {
        wrong: "Mit freundlichen Grüßen, Anna Schmidt",
        right: "Mit freundlichen Grüßen",
        why: `German closings take no comma. The name or signature goes on the next line.`,
      },
      {
        wrong: "Betreff: Kündigung",
        right: "Kündigung meines Vertrags",
        why: `Modern DIN 5008 letters do not write the word "Betreff". The subject line stands alone, in bold.`,
      },
      {
        wrong: "Lieber Herr Direktor, ich will eine Rückerstattung.",
        right: "Sehr geehrter Herr Dr. Krause, ich möchte Sie bitten, mir den Betrag zu erstatten.",
        why: `"Ich will" sounds blunt in a formal letter. Use "ich möchte", "ich bitte Sie" or Konjunktiv II.`,
      },
    ],
    faqs: [
      {
        q: `Is "Hochachtungsvoll" still used?`,
        a: `Very rarely, and it now sounds distant or even hostile. Use "Mit freundlichen Grüßen" for any formal letter, including complaints.`,
      },
      {
        q: `How do I address someone whose gender I don't know?`,
        a: `"Guten Tag Kim Müller," (first name and surname, no title) is a common gender-neutral formal opening, alongside "Sehr geehrte Damen und Herren," for an organisation.`,
      },
      {
        q: `"Anbei" or "im Anhang"?`,
        a: `In emails, "im Anhang" (attached) is standard; "anbei" (enclosed) is used both for letters and emails. "Beigefügt finden Sie ..." is more formal.`,
      },
    ],
    related: ["registers-du-and-sie", "funktionsverbgefuege", "genitive-prepositions", "amtsdeutsch-legal-german"],
    lessons: [
      "c1-formal-correspondence-1",
      "c1-formal-correspondence-2",
      "c1-sort-greetings-closings",
      "c1-transform-einleitungssatz",
      "c1-formal-correspondence-3",
      "c1-formal-correspondence-4",
      "c1-error-hunt-complaint-letter",
      "c1-contrast-anbei-anhang-weiterleiten",
      "c1-formal-correspondence-5",
      "c1-formal-correspondence-6",
      "c1-challenge-final-formal-letter",
    ],
  },
];
