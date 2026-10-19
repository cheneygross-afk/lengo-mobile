// Synced from cheneygross-afk/lengo:src/lib/grammar/de-guides-b1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { DeGrammarGuide } from "./de-types";

// German grammar guides, B1 (see ./de-types.ts for the shape and conventions).
export const DE_B1_GUIDES: DeGrammarGuide[] = [
  {
    slug: "german-praeteritum",
    title: "The Präteritum: The Past Tense of Stories",
    description:
      "How to form the German Präteritum of regular, irregular and mixed verbs, separable verbs in the past, and when Germans write it instead of the Perfekt.",
    level: "B1",
    intro: [
      `The Präteritum is the past tense of written German: novels, fairy tales, news reports, biographies and police reports all narrate in it. "Es war einmal ein König. Er hatte drei Töchter." In speech Germans mostly use the Perfekt, except for "war", "hatte", the modals and a few others.`,
      `Both tenses describe the same finished past; the difference is register, not meaning. At this level you need to read the Präteritum fluently and write it in stories, reports and formal emails.`,
    ],
    sections: [
      {
        heading: `Regular verbs: stem + -te`,
        body: [
          `Regular (weak) verbs add "-te" plus the person endings to the stem. If the stem ends in -t, -d, or in -m/-n after another consonant (not after l, r or h), add "-ete": "arbeitete", "redete", "öffnete", but "lernte". The "ich" and "er/sie/es" forms are identical, and neither has a final -t.`,
        ],
        table: {
          headers: ["", "machen", "arbeiten"],
          rows: [
            ["ich", "machte", "arbeitete"],
            ["du", "machtest", "arbeitetest"],
            ["er, sie, es", "machte", "arbeitete"],
            ["wir", "machten", "arbeiteten"],
            ["ihr", "machtet", "arbeitetet"],
            ["sie, Sie", "machten", "arbeiteten"],
          ],
        },
        examples: [
          { de: "Sie wohnte zehn Jahre in Hamburg.", en: "She lived in Hamburg for ten years." },
          { de: "Wir warteten über eine Stunde.", en: "We waited for over an hour." },
          { de: "Er studierte in Leipzig Medizin.", en: "He studied medicine in Leipzig." },
          { de: "Es regnete den ganzen Tag.", en: "It rained all day." },
        ],
      },
      {
        heading: `Irregular verbs: a new vowel, no -te`,
        body: [
          `Irregular (strong) verbs change their stem vowel and take no "-te". The "ich" and "er" forms have no ending at all: "ich ging", "er kam". The plural takes "-en": "wir gingen". The Präteritum vowel is often different from the participle vowel, so learn the three forms together: "gehen, ging, gegangen", "schreiben, schrieb, geschrieben", "finden, fand, gefunden".`,
          `Mixed verbs combine a vowel change with "-te": "bringen, brachte", "denken, dachte", "kennen, kannte", "wissen, wusste", "nennen, nannte", "rennen, rannte".`,
        ],
        table: {
          headers: ["Infinitive", "Präteritum", "Perfekt"],
          rows: [
            ["gehen", "ging", "ist gegangen"],
            ["kommen", "kam", "ist gekommen"],
            ["sehen", "sah", "hat gesehen"],
            ["nehmen", "nahm", "hat genommen"],
            ["sprechen", "sprach", "hat gesprochen"],
            ["fahren", "fuhr", "ist gefahren"],
            ["schreiben", "schrieb", "hat geschrieben"],
            ["finden", "fand", "hat gefunden"],
            ["denken", "dachte", "hat gedacht"],
            ["wissen", "wusste", "hat gewusst"],
          ],
        },
        examples: [
          { de: "Sie nahm ihre Tasche und ging.", en: "She took her bag and left." },
          { de: "Der Zug fuhr pünktlich ab.", en: "The train left on time." },
          { de: "Niemand wusste, wo er war.", en: "Nobody knew where he was." },
          { de: "Sie fand den Film langweilig.", en: "She found the film boring." },
          { de: "Er schrieb ihr jeden Tag einen Brief.", en: "He wrote her a letter every day." },
        ],
      },
      {
        heading: `Separable verbs and the position verbs`,
        body: [
          `Separable verbs split in the Präteritum just as in the present: "Sie stand um sechs auf", "Der Film fing um acht an". In a subordinate clause they join up at the end: "..., als der Zug ankam".`,
          `Keep the position and placing verbs apart: "lag" (was lying) versus "legte" (laid, put), "saß" (sat, was sitting) versus "setzte" (set, put), "stand" (stood) versus "stellte" (put upright), "hing" (was hanging) versus "hängte" (hung something up).`,
        ],
        examples: [
          { de: "Der Zug kam mit zwanzig Minuten Verspätung an.", en: "The train arrived twenty minutes late." },
          { de: "Als er nach Hause kam, schlief das Kind schon.", en: "When he got home, the child was already asleep." },
          { de: "Das Buch lag auf dem Tisch.", en: "The book was lying on the table." },
          { de: "Sie legte das Buch auf den Tisch.", en: "She put the book on the table." },
        ],
      },
      {
        heading: `Präteritum or Perfekt?`,
        body: [
          `Speaking about your own past: mainly Perfekt, with "war", "hatte", modals and "es gab" in the Präteritum. Writing a story, a report, a CV narrative or a formal account: Präteritum throughout. A personal email or chat message sits in between and follows spoken habits.`,
          `Swapping one for the other almost never changes the meaning. Mixing both in one written story is unusual, though, so once you start narrating in the Präteritum, stay there.`,
        ],
        examples: [
          { de: "Gestern bin ich ins Kino gegangen. Der Film war super.", en: "I went to the cinema yesterday. The film was great. (spoken)" },
          { de: "Am Abend ging sie ins Kino. Der Film war großartig.", en: "In the evening she went to the cinema. The film was wonderful. (written)" },
          { de: "1989 fiel die Berliner Mauer.", en: "The Berlin Wall fell in 1989." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Er gingte nach Hause.",
        right: "Er ging nach Hause.",
        why: `Strong verbs change the vowel and never add "-te".`,
      },
      {
        wrong: "Er machtet das.",
        right: "Er machte das.",
        why: `The "er" form in the Präteritum has no "-t" ending.`,
      },
      {
        wrong: "Sie denkte an ihn.",
        right: "Sie dachte an ihn.",
        why: `"Denken" is a mixed verb: "dachte".`,
      },
      {
        wrong: "Er aufstand um sieben.",
        right: "Er stand um sieben auf.",
        why: `Separable verbs split in a main clause, in the Präteritum as in the present.`,
      },
      {
        wrong: "Ich wuste das nicht.",
        right: "Ich wusste das nicht.",
        why: `"Wusste" has ss after the short u.`,
      },
    ],
    faqs: [
      {
        q: `Do I need to learn every strong verb's Präteritum?`,
        a: `For reading, recognise them; for writing, learn the most frequent forty or so in the three-form pattern ("gehen, ging, gegangen"). Many share vowel patterns: "bleiben, blieb", "schreiben, schrieb"; "finden, fand", "trinken, trank".`,
      },
      {
        q: `Is the Präteritum ever used in speech?`,
        a: `Always for "sein", "haben", the modals, "es gab", and commonly for "wusste", "dachte", "fand" (I found it, as in an opinion), "ging" (in "es ging", it was okay). In northern Germany it is more common in speech than in the south.`,
      },
    ],
    related: ["perfekt-haben-sein", "praeteritum-sein-haben-modals", "plusquamperfekt", "als-wenn-wann"],
    lessons: [
      "b1-praeteritum-writing-1",
      "b1-pattern-praeteritum-weak-verbs",
      "b1-pattern-praeteritum-strong-verbs",
      "b1-minimal-pairs-er-macht-er-machte",
      "b1-praeteritum-writing-2",
      "b1-minimal-pairs-lag-legte-sass-setzte",
      "b1-contrast-clinic-speech-or-writing",
    ],
  },
  {
    slug: "plusquamperfekt",
    title: "The Plusquamperfekt: Had Done",
    description:
      "How to form the German Plusquamperfekt with hatte or war + participle, how to use it with nachdem, and the difference between nach, nachdem and danach.",
    level: "B1",
    intro: [
      `The Plusquamperfekt is the past of the past, the German had done. It describes something that was already finished before another past event: "Als wir ankamen, war der Zug schon abgefahren" (when we arrived, the train had already left).`,
      `It is easy to form if you know the Perfekt: replace the present-tense helper with its Präteritum. "Ich habe gegessen" becomes "ich hatte gegessen"; "ich bin gegangen" becomes "ich war gegangen".`,
    ],
    sections: [
      {
        heading: `"Hatte" or "war" + participle`,
        body: [
          `The same verbs that take "haben" in the Perfekt take "hatte" here, and the same verbs that take "sein" take "war". The participle goes to the end, exactly as in the Perfekt.`,
        ],
        table: {
          headers: ["", "with haben", "with sein"],
          rows: [
            ["ich", "hatte gegessen", "war gegangen"],
            ["du", "hattest gegessen", "warst gegangen"],
            ["er, sie, es", "hatte gegessen", "war gegangen"],
            ["wir", "hatten gegessen", "waren gegangen"],
            ["ihr", "hattet gegessen", "wart gegangen"],
            ["sie, Sie", "hatten gegessen", "waren gegangen"],
          ],
        },
        examples: [
          { de: "Ich hatte den Film schon gesehen.", en: "I had already seen the film." },
          { de: "Sie war noch nie im Ausland gewesen.", en: "She had never been abroad." },
          { de: "Als ich ankam, waren alle schon gegangen.", en: "When I arrived, everyone had already left." },
          { de: "Er hatte seinen Schlüssel vergessen.", en: "He had forgotten his key." },
        ],
      },
      {
        heading: `"Nachdem": after something had happened`,
        body: [
          `"Nachdem" (after) is a conjunction that sends the verb to the end, and it requires the earlier action to be one tense further back. If the main clause is in the past (Präteritum or Perfekt), the nachdem-clause is in the Plusquamperfekt. If the main clause is in the present, the nachdem-clause is in the Perfekt.`,
        ],
        table: {
          headers: ["nachdem-clause", "main clause"],
          rows: [
            ["Plusquamperfekt: Nachdem ich gegessen hatte,", "Präteritum or Perfekt: ging ich spazieren."],
            ["Perfekt: Nachdem ich gegessen habe,", "present: gehe ich spazieren."],
          ],
        },
        examples: [
          { de: "Nachdem sie das Studium beendet hatte, zog sie nach München.", en: "After she had finished her degree, she moved to Munich." },
          { de: "Nachdem wir gegessen hatten, haben wir einen Spaziergang gemacht.", en: "After we had eaten, we went for a walk." },
          { de: "Nachdem ich aufgestanden bin, trinke ich immer einen Kaffee.", en: "After I've got up, I always have a coffee." },
        ],
      },
      {
        heading: `"Nach", "nachdem" or "danach"?`,
        body: [
          `All three mean after, but they are different parts of speech. "Nach" is a preposition with a noun in the dative: "nach dem Essen". "Nachdem" is a conjunction with a whole clause, verb at the end: "nachdem wir gegessen hatten". "Danach" is an adverb meaning afterwards; it stands alone and, in position 1, pulls the verb in after it: "Danach gingen wir spazieren".`,
        ],
        examples: [
          { de: "Nach der Arbeit gehe ich einkaufen.", en: "After work I go shopping." },
          { de: "Nachdem ich gearbeitet habe, gehe ich einkaufen.", en: "Once I've finished working, I go shopping." },
          { de: "Ich arbeite bis fünf. Danach gehe ich einkaufen.", en: "I work until five. Afterwards I go shopping." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Nachdem ich gegessen habe, ging ich spazieren.",
        right: "Nachdem ich gegessen hatte, ging ich spazieren.",
        why: `With a past main clause, the nachdem-clause goes one step back: Plusquamperfekt.`,
      },
      {
        wrong: "Nachdem dem Essen gehen wir spazieren.",
        right: "Nach dem Essen gehen wir spazieren.",
        why: `With a noun, use the preposition "nach", not the conjunction "nachdem".`,
      },
      {
        wrong: "Ich hatte nach Hause gegangen.",
        right: "Ich war nach Hause gegangen.",
        why: `Verbs that take "sein" in the Perfekt take "war" in the Plusquamperfekt.`,
      },
      {
        wrong: "Danach ich habe ferngesehen.",
        right: "Danach habe ich ferngesehen.",
        why: `"Danach" in position 1 is followed immediately by the verb.`,
      },
    ],
    faqs: [
      {
        q: `Do I always need the Plusquamperfekt for an earlier past?`,
        a: `After "nachdem" in a past story, yes. Elsewhere, if the order is already clear from words like "vorher" or "schon", Germans often use the Perfekt or Präteritum in speech. In writing the Plusquamperfekt is the clean choice.`,
      },
      {
        q: `Is "hatte gehabt" correct?`,
        a: `Yes, "ich hatte Glück gehabt" (I had been lucky) is correct, and so is "ich war krank gewesen". They are just less frequent.`,
      },
    ],
    related: ["german-praeteritum", "perfekt-haben-sein", "als-wenn-wann", "two-part-connectors"],
    lessons: [
      "b1-plusquamperfekt-1",
      "b1-plusquamperfekt-2",
      "b1-circuit-hatte-or-war",
      "b1-quick-round-nach-nachdem-danach",
    ],
  },
  {
    slug: "als-wenn-wann",
    title: "Als, Wenn or Wann? Three Words for When",
    description:
      "How to choose between als, wenn and wann in German: one past event, repeated or future events, and questions, with the word order each one needs.",
    level: "B1",
    intro: [
      `English uses when for three different jobs, and German uses three different words. "Als" is for a single event or period in the past. "Wenn" is for repeated events (whenever) and for the present or future (when, if). "Wann" is for questions, direct or indirect.`,
      `Getting this right is one of the clearest signs of a confident Intermediate speaker, and "wenn" where "als" belongs is one of the most frequent errors in Goethe B1 writing.`,
    ],
    sections: [
      {
        heading: `"Als": once, in the past`,
        body: [
          `Use "als" for something that happened once, or for a single period such as a childhood: "Als ich zehn war" (when I was ten), "Als ich in Berlin wohnte" (when I lived in Berlin). It sends the verb to the end.`,
        ],
        examples: [
          { de: "Als ich ein Kind war, wohnten wir auf dem Land.", en: "When I was a child, we lived in the country." },
          { de: "Als er die Nachricht hörte, rief er sofort an.", en: "When he heard the news, he called straight away." },
          { de: "Ich war sehr nervös, als ich die Prüfung gemacht habe.", en: "I was very nervous when I took the exam." },
        ],
      },
      {
        heading: `"Wenn": every time, now and later`,
        body: [
          `Use "wenn" for repeated past events, often with "immer": "Immer wenn wir Oma besuchten, gab es Kuchen" (whenever we visited Grandma, there was cake). Use it for every present and future when: "Wenn ich nach Hause komme, rufe ich dich an" (when I get home, I'll call you). And use it for if: "Wenn es regnet, bleiben wir drinnen".`,
        ],
        examples: [
          { de: "Wenn ich Zeit habe, lese ich gern.", en: "When I have time, I like reading." },
          { de: "Immer wenn es geschneit hat, sind wir Schlitten gefahren.", en: "Whenever it snowed, we went sledging." },
          { de: "Sag Bescheid, wenn du fertig bist.", en: "Let me know when you're ready." },
          { de: "Wenn ich mehr Geld hätte, würde ich reisen.", en: "If I had more money, I'd travel." },
        ],
      },
      {
        heading: `"Wann": questions`,
        body: [
          `"Wann" asks at what time. In a direct question the verb comes second: "Wann kommst du?". In an indirect question it sends the verb to the end: "Weißt du, wann der Film anfängt?". If you could replace when with at what time, it is "wann".`,
        ],
        table: {
          headers: ["Word", "When to use it", "Example"],
          rows: [
            ["als", "one event or period in the past", "Als ich ankam, ..."],
            ["wenn", "repeated events; present and future; if", "Immer wenn ..., Wenn du kommst, ..."],
            ["wann", "questions, direct or indirect", "Wann kommst du? Ich weiß nicht, wann ..."],
          ],
        },
        examples: [
          { de: "Wann hast du Geburtstag?", en: "When is your birthday?" },
          { de: "Ich weiß nicht, wann der letzte Bus fährt.", en: "I don't know when the last bus goes." },
          { de: "Kannst du mir sagen, wann du ankommst?", en: "Can you tell me when you're arriving?" },
        ],
      },
      {
        heading: `Word order with time clauses`,
        body: [
          `All three send the verb to the end of their clause. When the time clause comes first, it fills position 1, so the main verb follows right after the comma: "Als ich ankam, war es schon dunkel". The pattern verb, comma, verb is the sign you have it right.`,
          `The same goes for the other time conjunctions: "bevor" (before), "nachdem" (after), "während" (while), "seit" or "seitdem" (since), "bis" (until), "sobald" (as soon as).`,
        ],
        examples: [
          { de: "Bevor du gehst, mach bitte das Licht aus.", en: "Before you go, please turn off the light." },
          { de: "Während ich koche, deckst du den Tisch.", en: "While I'm cooking, you lay the table." },
          { de: "Sobald ich etwas weiß, sage ich dir Bescheid.", en: "As soon as I know anything, I'll let you know." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Wenn ich klein war, hatte ich einen Hund.",
        right: "Als ich klein war, hatte ich einen Hund.",
        why: `Childhood is a single period in the past: "als".`,
      },
      {
        wrong: "Als ich nach Hause komme, rufe ich dich an.",
        right: "Wenn ich nach Hause komme, rufe ich dich an.",
        why: `For the present and future, "wenn".`,
      },
      {
        wrong: "Wenn kommst du?",
        right: "Wann kommst du?",
        why: `Questions use "wann".`,
      },
      {
        wrong: "Als ich ankam, es war dunkel.",
        right: "Als ich ankam, war es dunkel.",
        why: `After a fronted time clause, the main verb comes first.`,
      },
      {
        wrong: "Ich weiß nicht, wenn er kommt.",
        right: "Ich weiß nicht, wann er kommt.",
        why: `An indirect question asking at what time uses "wann".`,
      },
    ],
    faqs: [
      {
        q: `What about repeated actions in the past without "immer"?`,
        a: `"Wenn" still works, but "immer wenn" or "jedes Mal, wenn" makes the repetition clear and is very common: "Jedes Mal, wenn ich ihn traf, lachte er."`,
      },
      {
        q: `Does "als" have other meanings?`,
        a: `Yes: than after comparatives ("größer als"), as in a role ("Er arbeitet als Koch") and as if in "als ob". Context makes them easy to tell apart.`,
      },
    ],
    related: ["weil-dass-verb-final", "german-praeteritum", "plusquamperfekt", "konjunktiv-ii"],
    lessons: [
      "b1-als-wenn-wann-1",
      "b1-pattern-als-ich-klein-war",
      "b1-minimal-pairs-als-wenn",
      "b1-als-wenn-wann-2",
      "b1-quick-round-als-wenn-or-wann",
      "b1-mastery-check-als-wenn-wann",
      "b1-bevor-nachdem",
    ],
  },
  {
    slug: "konjunktiv-ii",
    title: "Konjunktiv II: Würde, Wäre, Hätte, Könnte",
    description:
      "How to imagine, wish and ask politely in German: würde + infinitive, the one-word forms wäre, hätte and the modals, and unreal conditions with wenn.",
    level: "B1",
    intro: [
      `The Konjunktiv II is the German for would, could and were in imagined situations: "Ich würde gern in Wien wohnen" (I'd like to live in Vienna), "Wenn ich Zeit hätte, käme ich mit" (if I had time, I'd come along). It is also the standard way to be polite: "Könnten Sie mir helfen?".`,
      `Most verbs use "würde" + infinitive. A handful of very common verbs ("sein", "haben", the modals and a few others) use their own one-word forms instead, built from the Präteritum with an umlaut: "war" becomes "wäre", "hatte" becomes "hätte", "konnte" becomes "könnte".`,
    ],
    sections: [
      {
        heading: `"Würde" + infinitive`,
        body: [
          `"Würde" is conjugated and goes in position 2; the infinitive goes to the end. In a subordinate clause, "würde" is the last word. Separable verbs stay whole at the end: "Ich würde gern ausschlafen".`,
          `Do not confuse "würde" (would) with "wurde" (became, was, the Präteritum of "werden"). The umlaut is the whole difference.`,
        ],
        table: {
          headers: ["", "würde", "sein", "haben"],
          rows: [
            ["ich", "würde", "wäre", "hätte"],
            ["du", "würdest", "wärst", "hättest"],
            ["er, sie, es", "würde", "wäre", "hätte"],
            ["wir", "würden", "wären", "hätten"],
            ["ihr", "würdet", "wärt", "hättet"],
            ["sie, Sie", "würden", "wären", "hätten"],
          ],
        },
        examples: [
          { de: "Ich würde gern mal nach Island fahren.", en: "I'd love to go to Iceland some time." },
          { de: "Was würdest du an meiner Stelle machen?", en: "What would you do in my place?" },
          { de: "Das wäre super!", en: "That would be great!" },
          { de: "Ich hätte gern einen Kaffee, bitte.", en: "I'd like a coffee, please." },
        ],
      },
      {
        heading: `The modals and other one-word forms`,
        body: [
          `The modals take the Präteritum and add an umlaut where they have one in the infinitive: "könnte", "müsste", "dürfte", "möchte". "Sollte" and "wollte" have no umlaut, so their Konjunktiv II looks like the Präteritum; context decides.`,
          `A few other one-word forms are still common in speech: "käme" (would come), "ginge" (would go, as in "es ginge" for that would work), "wüsste" (would know), "gäbe" (there would be). For everything else, use "würde".`,
        ],
        examples: [
          { de: "Du könntest mal deine Eltern anrufen.", en: "You could call your parents some time." },
          { de: "Wir müssten eigentlich schon los.", en: "We really ought to be going." },
          { de: "Du solltest mehr schlafen.", en: "You should sleep more." },
          { de: "Wenn ich das wüsste!", en: "If only I knew!" },
          { de: "Es wäre schön, wenn es mehr Parks gäbe.", en: "It would be nice if there were more parks." },
        ],
      },
      {
        heading: `Unreal conditions: "wenn" + Konjunktiv II`,
        body: [
          `For conditions that are not true or not likely, both halves take the Konjunktiv II: "Wenn ich reich wäre, würde ich ein Haus am Meer kaufen." Compare a real condition with the indicative: "Wenn ich Zeit habe, komme ich" (I may well have time) versus "Wenn ich Zeit hätte, würde ich kommen" (I don't have time).`,
          `In writing, the wenn-clause can drop "wenn" and start with the verb: "Hätte ich mehr Geld, würde ich reisen." For conditions in the past (if I had known), German uses "hätte" or "wäre" + participle, which comes at the next level.`,
        ],
        examples: [
          { de: "Wenn ich du wäre, würde ich das Angebot annehmen.", en: "If I were you, I'd accept the offer." },
          { de: "Wenn wir ein Auto hätten, könnten wir ans Meer fahren.", en: "If we had a car, we could drive to the sea." },
          { de: "Ich würde kommen, wenn ich nicht arbeiten müsste.", en: "I'd come if I didn't have to work." },
          { de: "Hätte ich mehr Zeit, würde ich Gitarre lernen.", en: "If I had more time, I'd learn the guitar." },
        ],
      },
      {
        heading: `Wishes, advice and politeness`,
        body: [
          `Wishes: "Ich wünschte, ich hätte mehr Zeit" (I wish I had more time), "Wenn ich doch nur mehr Zeit hätte!" (if only I had more time). Advice: "An deiner Stelle würde ich ..." (if I were you, I'd ...), "Du solltest ..." (you should ...).`,
          `Politeness: the Konjunktiv II softens every request. "Kannst du ...?" becomes "Könntest du ...?", "Ich will ..." becomes "Ich möchte ..." or "Ich hätte gern ...". In shops, offices and emails it is the expected register.`,
        ],
        examples: [
          { de: "Könnten Sie mir bitte sagen, wo der Bahnhof ist?", en: "Could you tell me where the station is, please?" },
          { de: "Würden Sie bitte das Fenster schließen?", en: "Would you close the window, please?" },
          { de: "An deiner Stelle würde ich zum Arzt gehen.", en: "If I were you, I'd go to the doctor." },
          { de: "Ich wünschte, du wärst hier.", en: "I wish you were here." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Wenn ich reich würde sein, ...",
        right: "Wenn ich reich wäre, ...",
        why: `"Sein" uses its own form, "wäre", and the verb goes to the end of the wenn-clause.`,
      },
      {
        wrong: "Ich wurde gern kommen.",
        right: "Ich würde gern kommen.",
        why: `Would is "würde" with an umlaut; "wurde" is the past of "werden".`,
      },
      {
        wrong: "Wenn ich Zeit hätte, ich würde kommen.",
        right: "Wenn ich Zeit hätte, würde ich kommen.",
        why: `After the fronted wenn-clause, the verb comes first in the main clause.`,
      },
      {
        wrong: "Als Kind würde ich jeden Tag draußen spielen.",
        right: "Als Kind habe ich jeden Tag draußen gespielt.",
        why: `English would for past habits is not Konjunktiv II in German. Use a past tense.`,
      },
      {
        wrong: "Ich würde haben mehr Zeit.",
        right: "Ich hätte mehr Zeit.",
        why: `"Haben" uses "hätte"; "*würde haben*" sounds wrong.`,
      },
    ],
    faqs: [
      {
        q: `Can I always use "würde" instead of the one-word forms?`,
        a: `For most verbs, yes, and in speech that is what Germans do. For "sein", "haben" and the modals, use "wäre", "hätte", "könnte" and so on: "*ich würde sein*" and "*ich würde können*" sound clumsy or wrong.`,
      },
      {
        q: `Is the Konjunktiv II the same as the Konjunktiv I?`,
        a: `No. The Konjunktiv I ("er sei", "sie habe") is used mainly for reported speech in news and formal writing. You will meet it at the next level.`,
      },
      {
        q: `What is the difference between "möchte" and "würde gern"?`,
        a: `Very little in the present: "Ich möchte nach Rom fahren" and "Ich würde gern nach Rom fahren" both mean I'd like to go to Rome. "Würde gern" is slightly more dreamy; "möchte" is more concrete, as in ordering.`,
      },
    ],
    related: ["praeteritum-sein-haben-modals", "german-modal-verbs", "als-wenn-wann", "konjunktiv-ii-past-double-infinitive"],
    lessons: [
      "b1-konjunktiv-ii-forms-1",
      "b1-pattern-ich-wuerde-gern",
      "b1-minimal-pairs-wurde-wuerde",
      "b1-quick-round-waere-haette",
      "b1-konjunktiv-ii-forms-2",
      "b1-minimal-pairs-konnte-koennte",
      "b1-konjunktiv-politeness",
      "b1-wishes-ich-wuenschte",
      "b1-advice-an-deiner-stelle",
      "b1-conditional-sentences-1",
      "b1-conditional-sentences-2",
    ],
  },
  {
    slug: "relative-clauses",
    title: "Relative Clauses: Der Mann, den ich kenne",
    description:
      "How German relative clauses work: relative pronouns that agree in gender and take their own case, dessen and deren, prepositions, wo and was, commas and verb-final order.",
    level: "B1",
    intro: [
      `A relative clause describes a noun: the man who lives next door, the book that I'm reading. German uses the relative pronouns "der", "die", "das" (which mostly look like the definite article) instead of who, which and that, and it never leaves them out the way English can (the book I'm reading).`,
      `Two decisions pick the pronoun. Its gender and number come from the noun it describes. Its case comes from its role inside the relative clause. Then the verb goes to the end, and commas mark the clause off.`,
    ],
    sections: [
      {
        heading: `Gender from outside, case from inside`,
        body: [
          `Take "der Mann" (masculine). If he is the subject of the relative clause, you need the nominative: "der Mann, der nebenan wohnt". If he is the object, accusative: "der Mann, den ich kenne". If he is the receiver or comes after a dative verb, dative: "der Mann, dem ich helfe".`,
          `The forms match the definite article except in the dative plural ("denen") and the genitive ("dessen", "deren").`,
        ],
        table: {
          headers: ["", "Masculine", "Feminine", "Neuter", "Plural"],
          rows: [
            ["nominative", "der", "die", "das", "die"],
            ["accusative", "den", "die", "das", "die"],
            ["dative", "dem", "der", "dem", "denen"],
            ["genitive", "dessen", "deren", "dessen", "deren"],
          ],
        },
        examples: [
          { de: "Das ist der Kollege, der aus Wien kommt.", en: "That's the colleague who comes from Vienna." },
          { de: "Das ist der Kollege, den ich gestern getroffen habe.", en: "That's the colleague I met yesterday." },
          { de: "Das ist der Kollege, dem ich beim Umzug geholfen habe.", en: "That's the colleague I helped with the move." },
          { de: "Die Leute, denen das Haus gehört, wohnen in Spanien.", en: "The people who own the house live in Spain." },
          { de: "Wie heißt der Film, den du so gut fandest?", en: "What's the film you liked so much called?" },
        ],
      },
      {
        heading: `Whose: "dessen" and "deren"`,
        body: [
          `"Dessen" (for masculine and neuter nouns) and "deren" (for feminine and plural nouns) mean whose. They agree with the owner, not with the thing owned, and the noun after them takes no article: "der Mann, dessen Auto ..." (the man whose car ...).`,
        ],
        examples: [
          { de: "Das ist die Nachbarin, deren Hund immer bellt.", en: "That's the neighbour whose dog always barks." },
          { de: "Ich habe einen Freund, dessen Mutter Ärztin ist.", en: "I have a friend whose mother is a doctor." },
          { de: "Die Kinder, deren Eltern noch nicht da sind, warten hier.", en: "The children whose parents aren't here yet are waiting here." },
        ],
      },
      {
        heading: `Prepositions with relative pronouns`,
        body: [
          `If the relative pronoun follows a preposition, the preposition comes first and decides the case: "die Stadt, in der ich wohne" (the city I live in), "der Freund, mit dem ich reise" (the friend I'm travelling with). English can leave the preposition dangling at the end; German never does.`,
        ],
        examples: [
          { de: "Das ist das Café, in dem wir uns kennengelernt haben.", en: "That's the café where we met." },
          { de: "Die Frau, mit der ich gesprochen habe, war sehr freundlich.", en: "The woman I spoke to was very friendly." },
          { de: "Das Thema, über das wir diskutiert haben, war schwierig.", en: "The topic we discussed was difficult." },
        ],
      },
      {
        heading: `"Wo", "was" and "wer"`,
        body: [
          `For places, "wo" can replace preposition + pronoun: "die Stadt, wo ich wohne" is as good as "die Stadt, in der ich wohne". After "alles", "nichts", "etwas", "das" and superlatives used as nouns, the relative pronoun is "was": "alles, was ich weiß", "das Beste, was mir passiert ist". "Was" also refers back to a whole clause: "Er hat angerufen, was mich gefreut hat".`,
          `"Wer" means whoever, those who: "Wer zu spät kommt, muss draußen warten".`,
        ],
        examples: [
          { de: "Das ist alles, was ich weiß.", en: "That's all I know." },
          { de: "Es gibt nichts, was er nicht kann.", en: "There's nothing he can't do." },
          { de: "Sie hat die Prüfung bestanden, was niemand erwartet hatte.", en: "She passed the exam, which nobody had expected." },
          { de: "Wer Fragen hat, kann mich jederzeit anrufen.", en: "Anyone with questions can call me at any time." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Der Mann, der ich kenne, ...",
        right: "Der Mann, den ich kenne, ...",
        why: `He is the object of "kenne" inside the clause, so the accusative: "den".`,
      },
      {
        wrong: "Das Buch, ich lese, ist spannend.",
        right: "Das Buch, das ich lese, ist spannend.",
        why: `German never drops the relative pronoun.`,
      },
      {
        wrong: "Die Stadt, die ich wohne in, ...",
        right: "Die Stadt, in der ich wohne, ...",
        why: `The preposition always comes before the relative pronoun.`,
      },
      {
        wrong: "Der Mann, der wohnt nebenan, ...",
        right: "Der Mann, der nebenan wohnt, ...",
        why: `The conjugated verb goes to the end of the relative clause.`,
      },
      {
        wrong: "Das ist alles, das ich weiß.",
        right: "Das ist alles, was ich weiß.",
        why: `After "alles", "nichts" and "etwas", use "was".`,
      },
    ],
    faqs: [
      {
        q: `Do I always need commas?`,
        a: `Yes. A German relative clause is always marked off by commas, at the start and, if the sentence continues, at the end. English distinguishes defining and non-defining clauses with commas; German does not.`,
      },
      {
        q: `What is "welcher" as a relative pronoun?`,
        a: `"Welcher", "welche", "welches" can replace "der", "die", "das", but this is old-fashioned or very formal. Use the short forms.`,
      },
    ],
    related: ["weil-dass-verb-final", "genitive-case", "da-wo-compounds", "dative-case"],
    lessons: [
      "b1-relative-clauses-1",
      "b1-pattern-join-nom-akk",
      "b1-relative-clauses-2",
      "b1-circuit-relative-pronoun-table",
      "b1-minimal-pairs-der-den-dem",
      "b1-preposition-relative",
      "b1-wo-was-wer",
      "b1-contrast-clinic-das-or-was",
    ],
  },
  {
    slug: "zu-infinitive-um-zu",
    title: "Zu + Infinitive and Um ... zu",
    description:
      "When German needs zu before an infinitive and when it does not, zu with separable verbs, um ... zu, ohne ... zu, statt ... zu, and the choice between um ... zu and damit.",
    level: "B1",
    intro: [
      `German infinitive clauses work much like English to-clauses: "Ich habe vergessen, dich anzurufen" (I forgot to call you). The "zu" goes right before the infinitive at the end of the clause, and the clause is usually marked off with a comma.`,
      `The trap runs both ways: some verbs take no "zu" in German even where English has to (the modals, as in want to and have to, and "lassen", "gehen", "sehen", "hören"), and German has extra infinitive clauses with "um", "ohne" and "statt" where English uses -ing or in order to.`,
    ],
    sections: [
      {
        heading: `Verbs, nouns and adjectives with "zu"`,
        body: [
          `Many verbs take a zu-infinitive: "versuchen" (try), "vergessen" (forget), "anfangen" (start), "aufhören" (stop), "vorhaben" (plan), "hoffen" (hope), "vorschlagen" (suggest). So do expressions with nouns and adjectives: "Lust haben" (feel like), "Zeit haben", "Es ist wichtig", "Es ist schwer".`,
          `With a separable verb, "zu" goes between the prefix and the stem, written as one word: "anrufen" becomes "anzurufen", "aufstehen" becomes "aufzustehen".`,
        ],
        examples: [
          { de: "Ich versuche, jeden Tag Deutsch zu sprechen.", en: "I try to speak German every day." },
          { de: "Hast du Lust, heute Abend essen zu gehen?", en: "Do you feel like going out to eat tonight?" },
          { de: "Es ist wichtig, früh aufzustehen.", en: "It's important to get up early." },
          { de: "Vergiss nicht, deine Mutter anzurufen.", en: "Don't forget to call your mother." },
          { de: "Es hat angefangen zu regnen.", en: "It's started to rain." },
        ],
      },
      {
        heading: `No "zu": modals and a few other verbs`,
        body: [
          `The modal verbs never take "zu": "Ich muss arbeiten", "Ich kann schwimmen". Nor do "werden" (future), "lassen", "bleiben", "gehen", "lernen" (often), and the perception verbs "sehen" and "hören": "Ich gehe schwimmen", "Ich höre ihn singen".`,
        ],
        examples: [
          { de: "Ich möchte morgen ausschlafen.", en: "I'd like to sleep in tomorrow." },
          { de: "Wir gehen am Samstag einkaufen.", en: "We're going shopping on Saturday." },
          { de: "Ich lasse mir die Haare schneiden.", en: "I'm having my hair cut." },
        ],
      },
      {
        heading: `"Um ... zu", "ohne ... zu", "statt ... zu"`,
        body: [
          `"Um ... zu" expresses purpose, in order to: "Ich lerne Deutsch, um in Berlin zu arbeiten". "Ohne ... zu" is without doing: "Er ging, ohne sich zu verabschieden" (he left without saying goodbye). "Statt ... zu" (or "anstatt ... zu") is instead of doing: "Statt zu lernen, hat er gespielt".`,
          `English often uses an -ing form where German uses these structures: without saying, instead of studying. German never uses an -ing-style form here.`,
        ],
        examples: [
          { de: "Ich spare Geld, um ein Auto zu kaufen.", en: "I'm saving money to buy a car." },
          { de: "Sie ist gekommen, ohne vorher anzurufen.", en: "She came without calling first." },
          { de: "Statt den Bus zu nehmen, sind wir zu Fuß gegangen.", en: "Instead of taking the bus, we walked." },
          { de: "Um pünktlich zu sein, nehme ich ein Taxi.", en: "I'm taking a taxi so as to be on time." },
        ],
      },
      {
        heading: `"Um ... zu" or "damit"?`,
        body: [
          `Both express purpose. Use "um ... zu" when the subject of both clauses is the same person: "Ich lerne, um die Prüfung zu bestehen" (I learn, I pass). Use "damit" with a full clause, verb at the end, when the subjects differ: "Ich erkläre es dir, damit du es verstehst" (I explain, you understand). "Damit" also works with the same subject, but "um ... zu" is preferred there; with different subjects only "damit" is possible.`,
        ],
        table: {
          headers: ["Same subject", "Different subjects"],
          rows: [
            ["Ich arbeite viel, um Geld zu sparen.", "Ich arbeite viel, damit meine Kinder studieren können."],
            ["Sie fährt nach Wien, um ihre Oma zu besuchen.", "Sie fährt nach Wien, damit ihre Oma nicht allein ist."],
          ],
        },
        examples: [
          { de: "Ich spreche langsam, damit alle mich verstehen.", en: "I speak slowly so that everyone understands me." },
          { de: "Ich spreche langsam, um keine Fehler zu machen.", en: "I speak slowly so as not to make mistakes." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ich muss zu arbeiten.",
        right: "Ich muss arbeiten.",
        why: `Modal verbs never take "zu".`,
      },
      {
        wrong: "Ich habe vergessen, zu anrufen dich.",
        right: "Ich habe vergessen, dich anzurufen.",
        why: `"Zu" goes inside the separable verb, and the infinitive goes last.`,
      },
      {
        wrong: "Ich lerne Deutsch für in Berlin arbeiten.",
        right: "Ich lerne Deutsch, um in Berlin zu arbeiten.",
        why: `Purpose with a verb is "um ... zu", never "für".`,
      },
      {
        wrong: "Ich erkläre es, um du es verstehst.",
        right: "Ich erkläre es, damit du es verstehst.",
        why: `With a different subject, use "damit" and a full clause.`,
      },
      {
        wrong: "Er ging ohne sagen tschüs.",
        right: "Er ging, ohne tschüs zu sagen.",
        why: `Without doing is "ohne ... zu" + infinitive at the end.`,
      },
    ],
    faqs: [
      {
        q: `Do I need a comma before a zu-infinitive?`,
        a: `With "um", "ohne", "statt", always. Otherwise it is often optional, but a comma is never wrong when the infinitive clause has more than just "zu" + verb, and it helps readers.`,
      },
      {
        q: `What does "brauchen ... zu" mean?`,
        a: `"Du brauchst nicht zu kommen" means you don't need to come. "Brauchen" with "zu" is mostly used with "nicht" or "nur" as a negative of "müssen".`,
      },
    ],
    related: ["german-modal-verbs", "separable-verbs", "weil-dass-verb-final", "da-wo-compounds"],
    lessons: [
      "b1-zu-infinitive-1",
      "b1-pattern-zu-separable",
      "b1-contrast-clinic-zu-or-no-zu",
      "b1-zu-infinitive-2",
      "b1-damit-um-zu-1",
      "b1-pattern-damit",
      "b1-minimal-pairs-um-zu-damit",
      "b1-damit-um-zu-2",
    ],
  },
  {
    slug: "german-passive",
    title: "The Passive: Wird Gemacht, Wurde Gemacht",
    description:
      "How the German passive works with werden + participle in the present, Präteritum and Perfekt, the passive with modals, von or durch for the agent, and man as an alternative.",
    level: "B1",
    intro: [
      `The passive puts the action in focus rather than the person doing it: "Das Brot wird jeden Morgen frisch gebacken" (the bread is baked fresh every morning). German builds it with "werden" + past participle, not with "sein". This is the single most important point, because English is built and German "ist gebaut" mean different things.`,
      `You meet the passive constantly in news, instructions, history, signs and official letters. In everyday speech, Germans often prefer "man" (one, people) instead.`,
    ],
    sections: [
      {
        heading: `"Werden" + participle`,
        body: [
          `Conjugate "werden" in position 2 and put the participle at the end. The object of the active sentence becomes the subject: "Man repariert die Straße" becomes "Die Straße wird repariert". For the past, use "wurde": "Die Straße wurde repariert".`,
          `The Perfekt passive uses "sein" + participle + "worden" (not "geworden"): "Die Straße ist repariert worden". In subordinate clauses the whole verb cluster goes to the end: "..., weil die Straße repariert wird".`,
        ],
        table: {
          headers: ["Tense", "Passive", "English"],
          rows: [
            ["present", "Das Haus wird gebaut.", "The house is being built."],
            ["Präteritum", "Das Haus wurde gebaut.", "The house was built."],
            ["Perfekt", "Das Haus ist gebaut worden.", "The house has been built."],
            ["with a modal", "Das Haus muss gebaut werden.", "The house must be built."],
          ],
        },
        examples: [
          { de: "Hier wird nicht geraucht.", en: "There's no smoking here." },
          { de: "Der Kölner Dom wurde 1880 fertiggestellt.", en: "Cologne Cathedral was completed in 1880." },
          { de: "Die Mauer wurde 1989 geöffnet.", en: "The Wall was opened in 1989." },
          { de: "Mein Fahrrad ist gestohlen worden.", en: "My bike has been stolen." },
          { de: "Der Müll wird dienstags abgeholt.", en: "The rubbish is collected on Tuesdays." },
        ],
      },
      {
        heading: `The passive with modal verbs`,
        body: [
          `With a modal, the modal is conjugated and the end of the clause has participle + "werden": "Das Formular muss unterschrieben werden" (the form must be signed). In the past: "Das Formular musste unterschrieben werden".`,
        ],
        examples: [
          { de: "Das kann nicht repariert werden.", en: "That can't be repaired." },
          { de: "Die Rechnung muss bis Freitag bezahlt werden.", en: "The bill must be paid by Friday." },
          { de: "Hier darf nicht geparkt werden.", en: "Parking is not allowed here." },
        ],
      },
      {
        heading: `Who did it: "von" or "durch"`,
        body: [
          `If you mention the agent, use "von" + dative for a person or a direct cause: "Das Bild wurde von Klimt gemalt". "Durch" + accusative is for a means or an indirect cause: "Die Stadt wurde durch ein Erdbeben zerstört". Most passive sentences leave the agent out, which is the point of the passive.`,
        ],
        examples: [
          { de: "Das Buch wurde von einer jungen Autorin geschrieben.", en: "The book was written by a young author." },
          { de: "Der Termin wurde vom Chef abgesagt.", en: "The appointment was cancelled by the boss." },
          { de: "Die Brücke wurde durch das Hochwasser beschädigt.", en: "The bridge was damaged by the flood." },
        ],
      },
      {
        heading: `The three jobs of "werden", and "man"`,
        body: [
          `"Werden" does three jobs, and the last word of the clause tells you which. With an adjective or noun it means become: "Es wird kalt". With an infinitive it is the future: "Sie wird morgen kommen". With a participle it is the passive: "Das Paket wird morgen gebracht".`,
          `"Man" + active verb is the everyday alternative: "Man spricht hier Deutsch" equals "Hier wird Deutsch gesprochen". "Man" sounds more spoken and general; the passive more official.`,
        ],
        examples: [
          { de: "Er wird Lehrer.", en: "He's going to be a teacher." },
          { de: "Er wird uns helfen.", en: "He'll help us." },
          { de: "Er wird operiert.", en: "He's having an operation." },
          { de: "In Österreich isst man viel Kuchen.", en: "People eat a lot of cake in Austria." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Das Haus ist 1900 gebaut.",
        right: "Das Haus wurde 1900 gebaut.",
        why: `The action of building is "werden". "Ist gebaut" describes the finished state, not the event.`,
      },
      {
        wrong: "Das Paket ist gestern geschickt geworden.",
        right: "Das Paket ist gestern geschickt worden.",
        why: `In the Perfekt passive, "werden" becomes "worden", not "geworden".`,
      },
      {
        wrong: "Das Formular muss unterschreiben werden.",
        right: "Das Formular muss unterschrieben werden.",
        why: `The passive needs the participle, not the infinitive.`,
      },
      {
        wrong: "Das Bild wurde bei Klimt gemalt.",
        right: "Das Bild wurde von Klimt gemalt.",
        why: `The agent of a passive takes "von" + dative.`,
      },
      {
        wrong: "Die Briefe wird morgen gebracht.",
        right: "Die Briefe werden morgen gebracht.",
        why: `The verb agrees with the plural subject "die Briefe".`,
      },
    ],
    faqs: [
      {
        q: `What is "Das Fenster ist geöffnet" then?`,
        a: `That is the state passive (Zustandspassiv) with "sein": the window is open, as a result. "Das Fenster wird geöffnet" is the action: someone is opening it. The state passive is covered at the next level.`,
      },
      {
        q: `Can verbs without an object be passive?`,
        a: `Yes, which surprises English speakers: "Hier wird getanzt" (there's dancing here), "Sonntags wird nicht gearbeitet" (people don't work on Sundays). There is no real subject; "es" fills position 1 if nothing else does: "Es wird getanzt".`,
      },
    ],
    related: ["perfekt-haben-sein", "german-praeteritum", "german-modal-verbs", "passive-alternatives"],
    lessons: [
      "b1-passive-1",
      "b1-pattern-wird-werden",
      "b1-circuit-three-uses-of-werden",
      "b1-passive-2",
      "b1-minimal-pairs-wird-wurde-wuerde",
      "b1-passive-perfekt",
      "b1-passive-with-modals",
      "b1-von-or-durch",
      "b1-minimal-pairs-geworden-worden",
    ],
  },
  {
    slug: "adjective-endings-complete",
    title: "Adjective Endings: The Complete System",
    description:
      "All German adjective endings in all four cases after der-words, ein-words and no article, with a simple way to work them out, plus adjectives used as nouns.",
    level: "B1",
    intro: [
      `German adjective endings look like three tables of sixteen cells each. In practice there is one idea behind them: the gender, number and case need to be shown once, clearly, by a strong ending. If the article in front already has that strong ending, the adjective takes a weak ending ("-e" or "-en"). If there is no article, or the article has no ending, the adjective takes the strong ending itself.`,
      `The strong endings are simply the endings of "der", "die", "das": -er, -e, -es in the nominative, -en, -e, -es in the accusative, -em, -er, -em, -en in the dative, and so on. Only the masculine and neuter genitive differ (the adjective takes "-en" there, because the noun already has an -s).`,
    ],
    sections: [
      {
        heading: `After "der", "dieser", "jeder", "welcher" (weak endings)`,
        body: [
          `The article shows everything, so the adjective takes "-e" in five nominative and accusative singular cells (all three nominatives, and the feminine and neuter accusative), and "-en" everywhere else, including all of the dative, all of the genitive and every plural.`,
        ],
        table: {
          headers: ["", "Masculine", "Feminine", "Neuter", "Plural"],
          rows: [
            ["nominative", "der alte Mann", "die alte Frau", "das alte Haus", "die alten Leute"],
            ["accusative", "den alten Mann", "die alte Frau", "das alte Haus", "die alten Leute"],
            ["dative", "dem alten Mann", "der alten Frau", "dem alten Haus", "den alten Leuten"],
            ["genitive", "des alten Mannes", "der alten Frau", "des alten Hauses", "der alten Leute"],
          ],
        },
        examples: [
          { de: "Wir wohnen in der kleinen Wohnung im dritten Stock.", en: "We live in the small flat on the third floor." },
          { de: "Der Preis des neuen Autos ist zu hoch.", en: "The price of the new car is too high." },
          { de: "Ich mag diese alten Fotos.", en: "I like these old photos." },
        ],
      },
      {
        heading: `After "ein", "kein", "mein" (mixed endings)`,
        body: [
          `"Ein" has no ending in three cells: masculine nominative, neuter nominative and neuter accusative. There the adjective takes the strong ending: "ein alter Mann", "ein altes Haus". Everywhere else, exactly as after "der".`,
        ],
        table: {
          headers: ["", "Masculine", "Feminine", "Neuter", "Plural"],
          rows: [
            ["nominative", "ein alter Mann", "eine alte Frau", "ein altes Haus", "meine alten Freunde"],
            ["accusative", "einen alten Mann", "eine alte Frau", "ein altes Haus", "meine alten Freunde"],
            ["dative", "einem alten Mann", "einer alten Frau", "einem alten Haus", "meinen alten Freunden"],
            ["genitive", "eines alten Mannes", "einer alten Frau", "eines alten Hauses", "meiner alten Freunde"],
          ],
        },
        examples: [
          { de: "Sie hat einen interessanten Job gefunden.", en: "She's found an interesting job." },
          { de: "Mein neues Handy ist schon kaputt.", en: "My new phone is already broken." },
          { de: "Wir haben mit unseren neuen Nachbarn gegrillt.", en: "We had a barbecue with our new neighbours." },
        ],
      },
      {
        heading: `No article (strong endings)`,
        body: [
          `With no article, the adjective takes the article's endings itself. The one exception is the masculine and neuter genitive, which take "-en": "trotz schlechten Wetters". This pattern is used with uncountable nouns, plurals without an article, and after numbers and words like "viele", "einige", "wenige", "ein paar".`,
        ],
        table: {
          headers: ["", "Masculine", "Feminine", "Neuter", "Plural"],
          rows: [
            ["nominative", "guter Wein", "gute Musik", "gutes Brot", "gute Freunde"],
            ["accusative", "guten Wein", "gute Musik", "gutes Brot", "gute Freunde"],
            ["dative", "gutem Wein", "guter Musik", "gutem Brot", "guten Freunden"],
            ["genitive", "guten Weines", "guter Musik", "guten Brotes", "guter Freunde"],
          ],
        },
        examples: [
          { de: "Ich trinke lieber schwarzen Tee.", en: "I prefer black tea." },
          { de: "Wir haben viele nette Leute kennengelernt.", en: "We met lots of nice people." },
          { de: "Mit freundlichen Grüßen", en: "Kind regards" },
          { de: "Zwei große Pizzen, bitte.", en: "Two large pizzas, please." },
        ],
      },
      {
        heading: `Adjectives as nouns`,
        body: [
          `German turns adjectives into nouns by capitalising them and keeping the adjective ending: "der Deutsche" (the German man), "ein Deutscher" (a German man), "die Deutschen" (the Germans). The same with "der Bekannte" (acquaintance), "der Erwachsene" (adult), "der Kranke" (sick person).`,
          `After "etwas", "nichts", "viel" and "wenig", an adjective becomes a neuter noun with a strong ending: "etwas Neues" (something new), "nichts Besonderes" (nothing special). After "das" it is weak: "das Gute" (the good thing), "das Beste" (the best thing).`,
        ],
        examples: [
          { de: "Mein Mann ist Deutscher, ich bin Engländerin.", en: "My husband is German, I'm English." },
          { de: "Ein Bekannter hat mir die Wohnung empfohlen.", en: "An acquaintance recommended the flat to me." },
          { de: "Gibt es etwas Neues?", en: "Is there anything new?" },
          { de: "Das Beste kommt noch.", en: "The best is yet to come." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ich trinke gern kalte Kaffee.",
        right: "Ich trinke gern kalten Kaffee.",
        why: `No article, masculine accusative: the adjective shows the case with "-en".`,
      },
      {
        wrong: "mit einem guten Freundin",
        right: "mit einer guten Freundin",
        why: `"Freundin" is feminine: the dative article is "einer". The adjective ending "-en" was right.`,
      },
      {
        wrong: "Mit freundliche Grüße",
        right: "Mit freundlichen Grüßen",
        why: `"Mit" takes the dative: plural "-en" on the adjective and "-n" on the noun.`,
      },
      {
        wrong: "Gibt es etwas neues?",
        right: "Gibt es etwas Neues?",
        why: `After "etwas" the adjective is a noun: capitalised, with "-es".`,
      },
      {
        wrong: "Er ist ein Deutsche.",
        right: "Er ist ein Deutscher.",
        why: `Nominalised adjectives keep adjective endings: after "ein", masculine nominative "-er".`,
      },
    ],
    faqs: [
      {
        q: `Is there a quick way to decide in real time?`,
        a: `Ask: does the word in front already show the gender and case with a strong ending (-er, -e, -es, -en, -em)? If yes, the adjective takes "-e" or "-en". If there is no word in front, or it is "ein", "kein", "mein" with no ending, the adjective takes the strong ending.`,
      },
      {
        q: `What about "viele" and "alle"?`,
        a: `After "viele", "einige", "mehrere", "wenige" the adjective takes strong endings ("viele neue Leute"). After "alle" it takes weak endings, as after "die" ("alle neuen Leute").`,
      },
    ],
    related: ["adjective-endings-intro", "genitive-case", "n-declension", "comparatives-superlatives"],
    lessons: [
      "b1-adjective-endings-1",
      "b1-pattern-dative-adjectives",
      "b1-minimal-pairs-ein-alter-der-alte",
      "b1-adjective-endings-2",
      "b1-adjectives-as-nouns",
      "b1-das-gute-etwas-neues",
      "b1-contrast-clinic-der-deutsche-ein-deutscher",
    ],
  },
  {
    slug: "genitive-case",
    title: "The Genitive Case: Des Mannes, Wessen?",
    description:
      "How the German genitive works: des and der, the -s or -es on the noun, names with -s, genitive prepositions like wegen and trotz, and when von + dative replaces it.",
    level: "B1",
    intro: [
      `The genitive is the fourth German case. It shows possession and relationship, the job English does with 's and of: "das Auto meines Vaters" (my father's car), "das Ende des Films" (the end of the film). It is very much alive in writing, in set phrases and after certain prepositions.`,
      `In everyday speech Germans often replace it with "von" + dative ("das Auto von meinem Vater"), but you need the genitive to read the news, write formal texts and pass the Goethe B1 exam.`,
    ],
    sections: [
      {
        heading: `The genitive articles and the noun ending`,
        body: [
          `Masculine and neuter take "des" (or "eines", "meines") and add "-s" to the noun ("des Vaters"), or "-es": always after -s, -ß, -x, -z ("des Hauses"), often with one-syllable nouns ("des Kindes"; but "des Films" and "des Filmes" are both correct). Feminine and plural take "der" (or "einer", "meiner") and add nothing to the noun.`,
          `The genitive noun phrase follows the noun it belongs to: "die Farbe des Autos" (the colour of the car). Adjectives in the genitive almost always end in "-en".`,
        ],
        table: {
          headers: ["", "Masculine", "Feminine", "Neuter", "Plural"],
          rows: [
            ["definite", "des Mannes", "der Frau", "des Kindes", "der Kinder"],
            ["indefinite", "eines Mannes", "einer Frau", "eines Kindes", "von Kindern"],
            ["possessive", "meines Mannes", "meiner Frau", "meines Kindes", "meiner Kinder"],
          ],
        },
        examples: [
          { de: "Das ist das Haus meiner Großeltern.", en: "That's my grandparents' house." },
          { de: "Am Ende des Films haben alle geweint.", en: "At the end of the film everyone cried." },
          { de: "Der Name des Hotels fällt mir nicht ein.", en: "I can't think of the name of the hotel." },
          { de: "Die Wohnung eines Freundes ist frei.", en: "A friend's flat is free." },
        ],
      },
      {
        heading: `Names and "wessen"`,
        body: [
          `Names take "-s" with no apostrophe and come before the noun, as in English: "Annas Auto", "Peters Mutter", "Deutschlands Hauptstadt". After names ending in -s, -ß, -x or -z, write an apostrophe only: "Klaus' Fahrrad", though in speech people avoid it with "das Fahrrad von Klaus".`,
          `The question word is "wessen" (whose): "Wessen Jacke ist das?". In speech, "Wem gehört die Jacke?" is more common.`,
        ],
        examples: [
          { de: "Das ist Marias Bruder.", en: "That's Maria's brother." },
          { de: "Wessen Idee war das?", en: "Whose idea was that?" },
          { de: "Berlin ist Deutschlands größte Stadt.", en: "Berlin is Germany's largest city." },
        ],
      },
      {
        heading: `Genitive prepositions`,
        body: [
          `"Wegen" (because of), "trotz" (despite), "während" (during), "statt" or "anstatt" (instead of), "innerhalb" and "außerhalb" (inside, outside of) take the genitive in written German. In casual speech, "wegen" and "trotz" often take the dative ("wegen dem Regen"), which you will hear but should not write.`,
          `Some set phrases are genitive too: "eines Tages" (one day), "eines Abends" (one evening), "meiner Meinung nach" (in my opinion).`,
        ],
        examples: [
          { de: "Wegen des Streiks fallen viele Züge aus.", en: "Many trains are cancelled because of the strike." },
          { de: "Trotz des schlechten Wetters war das Fest ein Erfolg.", en: "Despite the bad weather, the festival was a success." },
          { de: "Während der Ferien arbeite ich in einem Café.", en: "During the holidays I work in a café." },
          { de: "Eines Tages klingelte das Telefon.", en: "One day the phone rang." },
        ],
      },
      {
        heading: `Genitive or "von" + dative?`,
        body: [
          `"Von" + dative replaces the genitive in speech and is required when there is no article to show the genitive, as with bare plurals: "der Preis von Äpfeln", "die Hälfte von zehn". With names and pronouns, "von" is also normal: "ein Freund von mir" (a friend of mine).`,
          `In writing, prefer the genitive whenever there is an article: "das Ende des Tages", not "das Ende von dem Tag".`,
        ],
        examples: [
          { de: "Das ist ein Freund von mir.", en: "He's a friend of mine." },
          { de: "Die Mutter von meinem Freund ist Lehrerin.", en: "My friend's mother is a teacher. (spoken)" },
          { de: "Die Mutter meines Freundes ist Lehrerin.", en: "My friend's mother is a teacher. (written)" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "das Auto des Vater",
        right: "das Auto des Vaters",
        why: `Masculine and neuter nouns add "-s" or "-es" in the genitive.`,
      },
      {
        wrong: "Anna's Auto",
        right: "Annas Auto",
        why: `Standard spelling is a plain "-s" with no apostrophe; "Anna's" is tolerated on signs but best avoided.`,
      },
      {
        wrong: "das Ende der Film",
        right: "das Ende des Films",
        why: `"Der Film" is masculine: the genitive is "des Films", with "-s" on the noun.`,
      },
      {
        wrong: "während die Ferien",
        right: "während der Ferien",
        why: `"Während" takes the genitive: plural "der".`,
      },
      {
        wrong: "trotz das Wetter",
        right: "trotz des Wetters",
        why: `"Trotz" takes the genitive (or in speech the dative), never the nominative or accusative.`,
      },
    ],
    faqs: [
      {
        q: `Is the genitive dying?`,
        a: `In speech it is retreating, replaced by "von" + dative. In writing it is fully alive, and it signals an educated register. Use it in the exam, in letters and in anything formal.`,
      },
      {
        q: `Why do some masculine nouns take "-en" instead of "-s"?`,
        a: `Those are the n-declension nouns such as "der Student" and "der Kollege": "des Studenten", "des Kollegen". They have their own guide.`,
      },
    ],
    related: ["n-declension", "adjective-endings-complete", "german-case-prepositions", "genitive-prepositions"],
    lessons: [
      "a2-genitive-basics",
      "b1-genitive-in-full-1",
      "b1-qa-wessen",
      "b1-genitive-in-full-2",
      "b1-genitive-time-expressions",
    ],
  },
  {
    slug: "n-declension",
    title: "The N-Declension: Der Student, Den Studenten",
    description:
      "Which German masculine nouns add -n or -en in every case except the nominative singular, how to recognise them, and the irregular der Name and das Herz.",
    level: "B1",
    intro: [
      `A group of masculine nouns adds "-n" or "-en" in every form except the nominative singular: "der Student" but "den Studenten", "dem Studenten", "des Studenten". This is the n-declension (also called weak masculine nouns). Forgetting the ending is one of the most common errors at the Intermediate level, and examiners notice it.`,
      `The good news: the group is easy to recognise from its form and meaning, and almost all of them are male people or animals.`,
    ],
    sections: [
      {
        heading: `The pattern`,
        body: [
          `Nominative singular: no ending. Every other form, singular and plural: "-n" (after -e) or "-en". The plural is the same as the other cases.`,
        ],
        table: {
          headers: ["", "Singular", "Plural"],
          rows: [
            ["nominative", "der Kollege", "die Kollegen"],
            ["accusative", "den Kollegen", "die Kollegen"],
            ["dative", "dem Kollegen", "den Kollegen"],
            ["genitive", "des Kollegen", "der Kollegen"],
          ],
        },
        examples: [
          { de: "Kennst du den neuen Kollegen?", en: "Do you know the new colleague?" },
          { de: "Ich habe mit dem Studenten gesprochen.", en: "I spoke to the student." },
          { de: "Wir haben einen Praktikanten.", en: "We have an intern." },
          { de: "Das ist das Büro des Präsidenten.", en: "That's the president's office." },
        ],
      },
      {
        heading: `How to recognise them`,
        body: [
          `Masculine nouns ending in -e that refer to people or animals: "der Junge", "der Kollege", "der Kunde", "der Neffe", "der Löwe", "der Affe", and nationalities: "der Franzose", "der Pole", "der Türke".`,
          `Masculine nouns from Latin or Greek with these endings: -ant, -ent, -ist, -at, -oge, -graf: "der Praktikant", "der Student", "der Polizist", "der Soldat", "der Biologe", "der Fotograf". And a few short ones to learn: "der Mensch", "der Herr", "der Nachbar", "der Bär", "der Held", "der Bauer".`,
          `"Herr" takes "-n" in the singular and "-en" in the plural: "Sehr geehrter Herr Müller", but "an Herrn Müller", "die Herren".`,
        ],
        examples: [
          { de: "Ich habe Herrn Schmidt eine E-Mail geschrieben.", en: "I wrote Mr Schmidt an email." },
          { de: "Fragen Sie doch mal den Nachbarn.", en: "Why don't you ask the neighbour?" },
          { de: "Der Polizist hat dem Jungen geholfen.", en: "The police officer helped the boy." },
          { de: "Jeder Mensch braucht Freunde.", en: "Everyone needs friends." },
        ],
      },
      {
        heading: `The irregular few: "der Name", "das Herz"`,
        body: [
          `A handful of nouns take the n-ending and an "-s" in the genitive: "der Name, den Namen, dem Namen, des Namens". The same for "der Gedanke", "der Buchstabe", "der Glaube". "Das Herz" (neuter) goes "das Herz, das Herz, dem Herzen, des Herzens".`,
        ],
        examples: [
          { de: "Wie schreibt man Ihren Namen?", en: "How do you spell your name?" },
          { de: "Ich habe den Gedanken nicht verstanden.", en: "I didn't understand the idea." },
          { de: "Ich danke Ihnen von ganzem Herzen.", en: "I thank you with all my heart." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ich kenne den Student.",
        right: "Ich kenne den Studenten.",
        why: `"Student" is an n-declension noun: "-en" in the accusative.`,
      },
      {
        wrong: "Ich spreche mit dem Kunde.",
        right: "Ich spreche mit dem Kunden.",
        why: `"Der Kunde" adds "-n" in the dative.`,
      },
      {
        wrong: "Sehr geehrte Herr Müller",
        right: "Sehr geehrter Herr Müller",
        why: `In a letter, "Herr" is nominative with no ending, and the adjective takes "-er".`,
      },
      {
        wrong: "Ich schreibe an Herr Müller.",
        right: "Ich schreibe an Herrn Müller.",
        why: `After "an" + accusative, "Herr" becomes "Herrn".`,
      },
      {
        wrong: "des Studentes",
        right: "des Studenten",
        why: `N-declension nouns take "-en" in the genitive, not "-es".`,
      },
    ],
    faqs: [
      {
        q: `Do Germans drop the ending in speech?`,
        a: `With some nouns, yes: you will hear "mit dem Nachbar" and "den Bär" in casual speech. With very common ones like "Herrn", "Kollegen", "Kunden" and "Menschen", native speakers keep the ending, and in writing you should always keep it.`,
      },
      {
        q: `Are female forms affected?`,
        a: `No. "Die Studentin", "die Kollegin", "die Kundin" are feminine and decline normally, with no ending in the singular.`,
      },
    ],
    related: ["genitive-case", "nominative-accusative", "adjective-endings-complete", "weak-nouns-in-depth"],
    lessons: ["b1-n-declension", "b1-fix-the-paragraph-n-declension"],
  },
  {
    slug: "verbs-with-prepositions",
    title: "Verbs with Prepositions: Warten Auf, Denken An",
    description:
      "German verbs that come with a fixed preposition and case, like warten auf, denken an, sich freuen über and sich interessieren für, and how they differ from English.",
    level: "B1",
    intro: [
      `Many German verbs come with a fixed preposition that you cannot guess from English: "warten auf" (wait for), "denken an" (think of), "sich interessieren für" (be interested in), "Angst haben vor" (be afraid of). The preposition is part of the verb, and so is the case after two-way prepositions like "auf" and "an".`,
      `The only reliable method is to learn each verb with its preposition and case as one unit: "warten auf + accusative". This guide groups the most frequent ones so they are easier to remember.`,
    ],
    sections: [
      {
        heading: `With the accusative`,
        body: [
          `When the preposition is a two-way one, these verbs mostly take the accusative, especially with "auf" and "über". "Für", "um" and "gegen" are always accusative anyway.`,
        ],
        table: {
          headers: ["Verb", "Meaning", "Example"],
          rows: [
            ["warten auf + Akk.", "wait for", "Ich warte auf den Bus."],
            ["sich freuen auf + Akk.", "look forward to", "Ich freue mich auf den Urlaub."],
            ["sich freuen über + Akk.", "be happy about", "Ich freue mich über das Geschenk."],
            ["denken an + Akk.", "think of", "Ich denke oft an dich."],
            ["sich erinnern an + Akk.", "remember", "Erinnerst du dich an ihn?"],
            ["sich interessieren für", "be interested in", "Sie interessiert sich für Politik."],
            ["sprechen über + Akk.", "talk about", "Wir sprechen über das Wetter."],
            ["sich kümmern um", "look after", "Er kümmert sich um seine Mutter."],
            ["sich ärgern über + Akk.", "be annoyed about", "Ich ärgere mich über den Lärm."],
          ],
        },
        examples: [
          { de: "Wir warten schon seit einer Stunde auf dich.", en: "We've been waiting for you for an hour." },
          { de: "Ich freue mich schon auf das Wochenende.", en: "I'm already looking forward to the weekend." },
          { de: "Kannst du dich um die Katze kümmern?", en: "Can you look after the cat?" },
        ],
      },
      {
        heading: `With the dative`,
        body: [
          `"Mit", "von", "zu", "nach", "bei" and "aus" are always dative. With "vor" and "an" in the sense of fear or taking part, the case is also dative.`,
        ],
        table: {
          headers: ["Verb", "Meaning", "Example"],
          rows: [
            ["Angst haben vor + Dat.", "be afraid of", "Er hat Angst vor Hunden."],
            ["teilnehmen an + Dat.", "take part in", "Ich nehme an dem Kurs teil."],
            ["sprechen mit", "talk to", "Hast du mit ihr gesprochen?"],
            ["träumen von", "dream of", "Sie träumt von einer Reise."],
            ["fragen nach", "ask about", "Er hat nach dir gefragt."],
            ["gratulieren zu", "congratulate on", "Ich gratuliere dir zum Geburtstag."],
            ["abhängen von", "depend on", "Das hängt vom Wetter ab."],
            ["sich verabschieden von", "say goodbye to", "Wir haben uns von allen verabschiedet."],
          ],
        },
        examples: [
          { de: "Ich habe keine Angst vor der Prüfung.", en: "I'm not afraid of the exam." },
          { de: "Hast du schon mit deinem Chef gesprochen?", en: "Have you spoken to your boss yet?" },
          { de: "Es hängt davon ab, wie viel es kostet.", en: "It depends on how much it costs." },
        ],
      },
      {
        heading: `Where English goes a different way`,
        body: [
          `The prepositions rarely match English. Wait for is "warten auf" (on), think of is "denken an" (at), be proud of is "stolz auf", depend on is "abhängen von" (from), ask about is "fragen nach" (after). Translating the English preposition word for word is the main source of errors.`,
          `"Sich freuen" has two meanings that depend on the preposition: "auf" for the future (look forward to), "über" for something happening now or in the past (be pleased about).`,
        ],
        examples: [
          { de: "Ich bin stolz auf dich.", en: "I'm proud of you." },
          { de: "Ich habe mich sehr über deinen Brief gefreut.", en: "I was really pleased with your letter." },
          { de: "Ich freue mich auf deinen Besuch.", en: "I'm looking forward to your visit." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ich warte für den Bus.",
        right: "Ich warte auf den Bus.",
        why: `Wait for is "warten auf" + accusative.`,
      },
      {
        wrong: "Ich denke über dich.",
        right: "Ich denke an dich.",
        why: `Thinking of someone is "denken an". "Denken über" is for opinions ("Was denkst du über ihn?"), and "nachdenken über" means to think something over.`,
      },
      {
        wrong: "Ich interessiere mich in Musik.",
        right: "Ich interessiere mich für Musik.",
        why: `Interested in is "sich interessieren für".`,
      },
      {
        wrong: "Ich freue mich auf das Geschenk, das du mir gestern gegeben hast.",
        right: "Ich freue mich über das Geschenk, das du mir gestern gegeben hast.",
        why: `"Freuen auf" is for the future; something you already have takes "über".`,
      },
      {
        wrong: "Ich habe Angst von Spinnen.",
        right: "Ich habe Angst vor Spinnen.",
        why: `Afraid of is "Angst haben vor" + dative.`,
      },
    ],
    faqs: [
      {
        q: `How do I ask a question with these verbs?`,
        a: `For people, the preposition plus "wen" or "wem": "Auf wen wartest du?". For things, a wo-compound: "Worauf wartest du?". The da- and wo-compounds guide covers this.`,
      },
      {
        q: `Is there a logic to the cases?`,
        a: `A loose one: "auf" and "über" in abstract uses usually take the accusative; "vor" and "an" in the sense of fear or taking part take the dative. But learn each verb with its case rather than relying on rules.`,
      },
    ],
    related: ["da-wo-compounds", "reflexive-verbs", "two-way-prepositions", "fixed-prepositions-in-depth"],
    lessons: [
      "b1-verbs-prepositions-1",
      "b1-pattern-auf-an-ueber-akk",
      "b1-verbs-prepositions-2",
      "b1-minimal-pairs-freuen-auf-ueber",
      "b1-contrast-clinic-english-preposition",
    ],
  },
  {
    slug: "da-wo-compounds",
    title: "Da- and Wo-Compounds: Darauf, Worauf",
    description:
      "How German replaces preposition + it with darauf, daran, dafür, asks with worauf, woran, wofür, keeps auf ihn for people, and points ahead to dass- and zu-clauses.",
    level: "B1",
    intro: [
      `German does not say "*auf es*" or "*mit es*". When a preposition would be followed by it, that or what, referring to a thing or an idea, German glues "da-" or "wo-" onto the front of the preposition: "darauf" (on it, for it), "damit" (with it), "worauf" (on what, for what), "womit" (with what).`,
      `These compounds are everywhere because so many verbs come with prepositions: "Ich warte auf den Bus" becomes "Ich warte darauf" (I'm waiting for it), and the question is "Worauf wartest du?" (what are you waiting for?).`,
    ],
    sections: [
      {
        heading: `Da-compounds for things and ideas`,
        body: [
          `"Da-" + preposition replaces preposition + a pronoun that refers to a thing, an idea or a whole sentence. If the preposition starts with a vowel, add an "r": "darauf", "daran", "darüber", "darin", "darum". Otherwise just "da-": "dafür", "damit", "davon", "dazu", "dabei", "danach".`,
        ],
        table: {
          headers: ["Preposition", "da-compound", "wo-compound"],
          rows: [
            ["auf", "darauf", "worauf"],
            ["an", "daran", "woran"],
            ["über", "darüber", "worüber"],
            ["für", "dafür", "wofür"],
            ["mit", "damit", "womit"],
            ["von", "davon", "wovon"],
            ["nach", "danach", "wonach"],
            ["zu", "dazu", "wozu"],
          ],
        },
        examples: [
          { de: "Denkst du an den Termin? Ja, ich denke daran.", en: "Will you remember the appointment? Yes, I'll remember it." },
          { de: "Hast du dich über das Geschenk gefreut? Ja, ich habe mich sehr darüber gefreut.", en: "Were you pleased with the present? Yes, I was really pleased with it." },
          { de: "Ich bin dafür.", en: "I'm in favour (of it)." },
          { de: "Was machst du damit?", en: "What are you doing with it?" },
        ],
      },
      {
        heading: `People keep the pronoun`,
        body: [
          `For people, keep preposition + personal pronoun: "Ich warte auf ihn" (I'm waiting for him), "Ich denke an sie" (I'm thinking of her). "Darauf" in that sentence would mean you are waiting for a thing.`,
          `The same split works in questions: for people, preposition + "wen" or "wem" ("Auf wen wartest du?", "Mit wem sprichst du?"); for things, the wo-compound ("Worauf wartest du?", "Womit fährst du?").`,
        ],
        examples: [
          { de: "Ich warte auf meine Schwester. Auf wen wartest du?", en: "I'm waiting for my sister. Who are you waiting for?" },
          { de: "Ich warte auf das Paket. Worauf wartest du?", en: "I'm waiting for the parcel. What are you waiting for?" },
          { de: "Wofür interessierst du dich?", en: "What are you interested in?" },
          { de: "Woran denkst du gerade?", en: "What are you thinking about right now?" },
        ],
      },
      {
        heading: `Pointing ahead: "darauf, dass ..."`,
        body: [
          `A da-compound can announce a whole clause that follows, a dass-clause or a zu-infinitive. "Ich freue mich darauf, dich zu sehen" (I'm looking forward to seeing you). "Es kommt darauf an, ob es regnet" (it depends on whether it rains). English has nothing similar, so this is easy to forget.`,
          `With some verbs the da-compound is required ("Es kommt darauf an"), with others it is optional but common ("Ich habe (daran) gedacht, dass ...").`,
        ],
        examples: [
          { de: "Ich freue mich darauf, dass du kommst.", en: "I'm looking forward to you coming." },
          { de: "Denk bitte daran, die Tür abzuschließen.", en: "Please remember to lock the door." },
          { de: "Es hängt davon ab, wie viel Zeit wir haben.", en: "It depends on how much time we have." },
          { de: "Sie hat sich darüber beschwert, dass es zu laut war.", en: "She complained that it was too loud." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ich denke an es.",
        right: "Ich denke daran.",
        why: `Preposition + "es" is not possible; use the da-compound.`,
      },
      {
        wrong: "Ich warte auf meinen Freund. Ich warte schon lange darauf.",
        right: "Ich warte auf meinen Freund. Ich warte schon lange auf ihn.",
        why: `For people, keep preposition + pronoun.`,
      },
      {
        wrong: "Über was sprichst du?",
        right: "Worüber sprichst du?",
        why: `"Über was" is colloquial; standard German uses the wo-compound for things.`,
      },
      {
        wrong: "Ich freue mich, dich zu sehen am Wochenende.",
        right: "Ich freue mich darauf, dich am Wochenende zu sehen.",
        why: `Looking forward needs "darauf", and the infinitive goes to the end of its clause.`,
      },
      {
        wrong: "daauf, daüber",
        right: "darauf, darüber",
        why: `Before a vowel, add an "r": "dar-".`,
      },
    ],
    faqs: [
      {
        q: `Does "damit" mean so that or with it?`,
        a: `Both. As a conjunction, sending the verb to the end, it means so that: "..., damit du es verstehst". As a da-compound it means with it: "Was machst du damit?". Word order tells them apart.`,
      },
      {
        q: `Can I say "Mit was?" in speech?`,
        a: `You will hear it often, especially in the south. It is fine in casual conversation but considered non-standard in writing; use "womit".`,
      },
    ],
    related: ["verbs-with-prepositions", "zu-infinitive-um-zu", "weil-dass-verb-final", "relative-clauses"],
    lessons: [
      "b1-da-wo-compounds-1",
      "b1-da-wo-compounds-2",
      "b1-pattern-auf-wen-worauf",
      "b1-quick-round-daran-darauf-darueber",
      "b1-fix-the-paragraph-auf-es",
      "b1-choose-explain-person-or-thing",
    ],
  },
  {
    slug: "two-part-connectors",
    title: "Two-Part Connectors: Entweder ... Oder, Je ... Desto",
    description:
      "German paired connectors: entweder ... oder, weder ... noch, sowohl ... als auch, nicht nur ... sondern auch, zwar ... aber and je ... desto, with the word order each one needs.",
    level: "B1",
    intro: [
      `Two-part connectors link ideas in pairs: either ... or, neither ... nor, both ... and, not only ... but also. German has a set of them that are essential for writing and for the Goethe B1 speaking task, where you weigh options and argue.`,
      `The meanings mostly match English. The challenge is word order: some parts are neutral, some count as position 1 and pull the verb in after them, and "je ... desto" combines a verb-final clause with an inverted one.`,
    ],
    sections: [
      {
        heading: `"Entweder ... oder", "weder ... noch", "sowohl ... als auch"`,
        body: [
          `"Entweder ... oder" (either ... or) offers a choice. "Weder ... noch" (neither ... nor) negates both parts; it already contains the negation, so never add "nicht". "Sowohl ... als auch" (both ... and, as well as) adds two things.`,
          `"Entweder" can stand in position 1, followed by the verb, or outside the sentence with normal order; "oder" never changes word order.`,
        ],
        examples: [
          { de: "Wir fahren entweder ans Meer oder in die Berge.", en: "We're going either to the sea or to the mountains." },
          { de: "Entweder kommst du mit, oder du bleibst hier.", en: "Either you come along or you stay here." },
          { de: "Ich habe weder Zeit noch Geld.", en: "I have neither time nor money." },
          { de: "Sie spricht sowohl Deutsch als auch Türkisch.", en: "She speaks both German and Turkish." },
        ],
      },
      {
        heading: `"Nicht nur ... sondern auch", "zwar ... aber"`,
        body: [
          `"Nicht nur ... sondern auch" (not only ... but also) stresses the second part. "Zwar ... aber" (admittedly ... but, it's true ... but) concedes a point before contradicting it, and is very useful in argument: "Die Wohnung ist zwar klein, aber sie ist günstig."`,
          `"Zwar" in position 1 pulls the verb in: "Zwar ist die Wohnung klein, aber ...". "Aber" and "sondern" leave word order unchanged.`,
        ],
        examples: [
          { de: "Er ist nicht nur Arzt, sondern auch Musiker.", en: "He's not only a doctor but also a musician." },
          { de: "Das Hotel war zwar teuer, aber sehr schön.", en: "The hotel was expensive, it's true, but very nice." },
          { de: "Ich komme zwar mit, aber ich bleibe nicht lange.", en: "I'll come along, but I won't stay long." },
        ],
      },
      {
        heading: `"Je ... desto" ("umso")`,
        body: [
          `"Je" + comparative ... "desto" (or "umso") + comparative means the more ... the more. The je-clause sends its verb to the end; the desto-clause has the comparative in position 1 and the verb straight after it.`,
        ],
        table: {
          headers: ["je-clause (verb last)", "desto-clause (verb second)"],
          rows: [
            ["Je mehr ich übe,", "desto besser spreche ich."],
            ["Je älter er wird,", "desto ruhiger wird er."],
            ["Je früher wir losfahren,", "umso weniger Verkehr gibt es."],
          ],
        },
        examples: [
          { de: "Je länger ich in Berlin wohne, desto besser gefällt es mir.", en: "The longer I live in Berlin, the more I like it." },
          { de: "Je mehr, desto besser.", en: "The more, the better." },
          { de: "Je schneller du fährst, desto gefährlicher ist es.", en: "The faster you drive, the more dangerous it is." },
        ],
      },
      {
        heading: `"Aber" or "sondern"?`,
        body: [
          `Both mean but. "Sondern" (but rather, instead) corrects a negative statement: "nicht heute, sondern morgen". "Aber" adds a contrast without correcting: "Es ist kalt, aber sonnig." After "nicht" or "kein", if the second part replaces the first, use "sondern".`,
        ],
        examples: [
          { de: "Ich trinke keinen Kaffee, sondern Tee.", en: "I don't drink coffee, I drink tea." },
          { de: "Ich trinke keinen Kaffee, aber ich mag den Geruch.", en: "I don't drink coffee, but I like the smell." },
          { de: "Das Konzert ist nicht am Samstag, sondern am Sonntag.", en: "The concert isn't on Saturday, it's on Sunday." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ich habe weder Zeit noch nicht Geld.",
        right: "Ich habe weder Zeit noch Geld.",
        why: `"Weder ... noch" already negates both parts; no "nicht" or "kein".`,
      },
      {
        wrong: "Je mehr ich übe, desto ich spreche besser.",
        right: "Je mehr ich übe, desto besser spreche ich.",
        why: `"Desto" + comparative fills position 1; the verb comes next.`,
      },
      {
        wrong: "Je mehr ich übe ich, ...",
        right: "Je mehr ich übe, ...",
        why: `The je-clause is a subordinate clause with the verb at the end.`,
      },
      {
        wrong: "Nicht heute, aber morgen.",
        right: "Nicht heute, sondern morgen.",
        why: `Correcting a negative is "sondern".`,
      },
      {
        wrong: "Sowohl ich als auch mein Bruder spielt Fußball.",
        right: "Sowohl ich als auch mein Bruder spielen Fußball.",
        why: `Two subjects joined by "sowohl ... als auch" normally take a plural verb.`,
      },
    ],
    faqs: [
      {
        q: `Is "umso" different from "desto"?`,
        a: `No, they are interchangeable after "je": "je mehr, desto besser" and "je mehr, umso besser". "Umso" is slightly more common in speech.`,
      },
      {
        q: `What about "sowohl ... wie auch"?`,
        a: `It is a less common variant of "sowohl ... als auch" with the same meaning. Stick with "als auch".`,
      },
    ],
    related: ["weil-dass-verb-final", "comparatives-superlatives", "verb-second-word-order", "nicht-vs-kein"],
    lessons: [
      "b1-two-part-connectors-1",
      "b1-pattern-entweder-oder",
      "b1-circuit-weder-noch-never-nicht",
      "b1-choose-explain-aber-or-sondern",
      "b1-two-part-connectors-2",
      "b1-pattern-je-desto",
    ],
  },
];
