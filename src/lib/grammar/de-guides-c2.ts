// Synced from cheneygross-afk/lengo:src/lib/grammar/de-guides-c2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { DeGrammarGuide } from "./de-types";

// German grammar guides, C2 (see ./de-types.ts for the shape and conventions).
export const DE_C2_GUIDES: DeGrammarGuide[] = [
  {
    slug: "stylistic-registers",
    title: "Stylistic Registers: From Gehoben to Salopp",
    description:
      "The full range of German style levels at the Mastery level: gehoben, bildungssprachlich, neutral, umgangssprachlich, salopp and vulgär; the grammar and vocabulary that mark each one, register shifts for effect, and moving a text from one level to another.",
    level: "C2",
    intro: [
      `German dictionaries label words with style levels: "gehoben" (elevated), "bildungssprachlich" (educated, often Latin or Greek in origin), "umgangssprachlich" (colloquial), "salopp" (slangy) and "vulgär". A Mastery-level speaker not only knows these labels but uses them deliberately: to sound authoritative in a report, warm in a speech, ironic in a column.`,
      `The Advanced guide on registers covers formal vs informal and "du" vs "Sie". This guide covers the finer gradations, how grammar and vocabulary combine to create a style, and how to shift register on purpose.`,
    ],
    sections: [
      {
        heading: `The style levels`,
        body: [
          `Each level has typical vocabulary. The same idea of dying runs from "entschlafen" (gehoben) through "sterben" (neutral) to "abkratzen" (salopp, disrespectful). Choosing the wrong level can make a sentence comic or offensive.`,
        ],
        table: {
          headers: ["Level", "Typical features", "Examples"],
          rows: [
            ["gehoben", "literary, solemn words; Präteritum; genitive", "entschlafen, das Antlitz, gewahr werden, zuteilwerden"],
            ["bildungssprachlich", "learned loanwords, abstract nouns", "evident, ambivalent, prekär, der Diskurs"],
            ["neutral", "standard everyday vocabulary", "sterben, das Gesicht, bemerken, bekommen"],
            ["umgangssprachlich", "spoken, relaxed", "kriegen, kapieren, die Glotze, total"],
            ["salopp", "slangy, disrespectful", "abkratzen, die Visage, abzocken"],
            ["vulgär", "offensive; learn to recognise only", "(swear words)"],
          ],
        },
        examples: [
          { de: "Sie ist im Alter von 92 Jahren friedlich entschlafen.", en: "She passed away peacefully at the age of 92." },
          { de: "Die Lage ist prekär, die Folgen sind evident.", en: "The situation is precarious, the consequences obvious." },
          { de: "Hast du kapiert, was der will?", en: "Did you get what he wants?" },
          { de: "Ihm wurde eine große Ehre zuteil.", en: "A great honour was bestowed upon him." },
        ],
      },
      {
        heading: `Grammar as a style marker`,
        body: [
          `Elevated and written styles prefer the Präteritum, the genitive (including genitive objects: "Wir gedenken der Opfer"), Konjunktiv I, synthetic Konjunktiv II ("fände", "käme"), extended participial attributes, nominal style and the relative pronoun "welcher".`,
          `Colloquial styles prefer the Perfekt, "von" + dative, the indicative in reported speech, "würde" everywhere, contractions ("ham", "gibt's", "aufm"), "weil" + verb second, left dislocation ("Der Chef, der ist heute schlecht drauf"), the possessive dative ("dem Peter sein Auto") and the "am"-progressive ("Ich bin am Kochen").`,
        ],
        table: {
          headers: ["Elevated / written", "Neutral", "Colloquial"],
          rows: [
            ["Des Rätsels Lösung war einfach.", "Die Lösung des Rätsels war einfach.", "Die Lösung von dem Rätsel war voll einfach."],
            ["Wir gedenken der Verstorbenen.", "Wir denken an die Verstorbenen.", "Wir denken an die, die gestorben sind."],
            ["Er sagte, er komme später.", "Er hat gesagt, er kommt später.", "Er meinte, er kommt später."],
            ["Es ist Peters Wagen.", "Das ist Peters Auto.", "Das ist dem Peter sein Auto."],
          ],
        },
      },
      {
        heading: `Register shifts for effect`,
        body: [
          `Skilled writers mix levels deliberately. A sudden colloquial word in a formal text creates irony or closeness ("Die Regierung hat das Problem jahrelang ausgesessen – um nicht zu sagen: verpennt"). An elevated word in a casual context sounds humorous ("Ich begebe mich nun zur Nahrungsaufnahme" for "Ich geh essen").`,
          `The skill to practise is transposition: rewriting the same content for a different audience. Keep the facts, change vocabulary, sentence length, tense, mood and the degree of nominal style.`,
        ],
        examples: [
          { de: "Ich begebe mich nun zur Nahrungsaufnahme.", en: "I shall now proceed to the ingestion of food. (jokingly elevated)" },
          { de: "Die Firma hat den Trend schlicht verschlafen.", en: "The company simply slept through the trend. (colloquial verb in a report)" },
          { de: "Formal: Aufgrund von Personalmangel bleibt die Filiale geschlossen. – Locker: Die haben zu, weil keiner da ist.", en: "Formal: Due to staff shortages, the branch remains closed. – Casual: They're shut because there's nobody there." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Mein Opa ist letzte Woche abgekratzt.",
        right: "Mein Opa ist letzte Woche gestorben.",
        why: `"Abkratzen" is salopp and disrespectful. In neutral speech use "sterben"; in a condolence card, "verstorben" or "von uns gegangen".`,
      },
      {
        wrong: "Sehr geehrte Damen und Herren, die Sache ist total prekär.",
        right: "Sehr geehrte Damen und Herren, die Lage ist äußerst prekär.",
        why: `"Total" is colloquial; it clashes with the formal frame and the learned "prekär".`,
      },
      {
        wrong: "Wir gedenken an die Opfer.",
        right: "Wir gedenken der Opfer.",
        why: `"Gedenken" is elevated and takes a genitive object. The neutral equivalent is "denken an".`,
      },
    ],
    faqs: [
      {
        q: `Is "bildungssprachlich" the same as formal?`,
        a: `Not exactly. "Bildungssprachlich" words ("evident", "obsolet", "rekurrieren") signal education and appear in academic and journalistic texts. A formal letter to an authority can be perfectly formal without them.`,
      },
      {
        q: `Where can I check a word's register?`,
        a: `Duden and DWDS label words with "gehoben", "bildungssprachlich", "umgangssprachlich", "salopp", "abwertend" or "veraltet". Pay attention to these labels whenever you learn a new word.`,
      },
      {
        q: `Is the possessive dative ("dem Peter sein Auto") wrong?`,
        a: `It is a well-established feature of spoken German in many regions, but it is considered non-standard. Never use it in writing except to imitate speech.`,
      },
    ],
    related: ["registers-du-and-sie", "euphemism-and-indirect-language", "archaic-and-literary-forms", "idioms-and-phraseologie"],
    lessons: [
      "c2-idioms-register-contrast",
      "c2-corporate-press-release-style-workshop",
      "c2-register-shift-dialogue-lab",
      "c2-idioms-to-report-style-workshop",
      "c2-vocab-register-synonyms",
      "c2-vocab-registers-regional-words",
      "c2-challenge-register-chameleon",
    ],
  },
  {
    slug: "konjunktiv-literature-and-press",
    title: "The Konjunktiv in Literature and the Press",
    description:
      "How German journalism and literature exploit the Konjunktiv: long stretches of Konjunktiv I reporting without a reporting verb, the indicative / Konjunktiv I / Konjunktiv II choice as a signal of distance, Konjunktiv I in wishes, recipes and definitions, and Konjunktiv II in narration.",
    level: "C2",
    intro: [
      `In German, mood carries information that English expresses with words. A news report can run for a whole paragraph in Konjunktiv I without repeating "he said": the verb form alone tells the reader that every sentence is reported. A novelist can switch from indicative to Konjunktiv to move between what happened and what a character imagines.`,
      `At the Mastery level you need to read these signals instantly and produce them with control, especially in summaries, citations and reports.`,
    ],
    sections: [
      {
        heading: `Konjunktiv I as a running signal in the press`,
        body: [
          `Once a reporting verb has introduced a speaker, every following sentence in Konjunktiv I is attributed to that speaker, with no further "sagte er": "Der Minister erklärte, die Lage sei ernst. Man habe alle Optionen geprüft. Eine Steuererhöhung komme jedoch nicht in Frage." As soon as the journalist switches back to the indicative, they speak in their own voice.`,
          `Reporting verbs carry stance: "betonte" (stressed), "räumte ein" (conceded), "wies zurück" (rejected), "bestritt" (denied), "behauptete" (claimed, with doubt), "beteuerte" (protested, insisted).`,
        ],
        examples: [
          { de: "Die Sprecherin betonte, man nehme die Vorwürfe ernst. Eine Untersuchung sei bereits eingeleitet worden.", en: "The spokeswoman stressed that the allegations were being taken seriously. An investigation had already been launched." },
          { de: "Der Angeklagte beteuerte, er habe von nichts gewusst.", en: "The defendant insisted that he had known nothing." },
          { de: "Die Firma räumte ein, es habe Fehler gegeben.", en: "The company conceded that there had been mistakes." },
        ],
      },
      {
        heading: `Indicative, Konjunktiv I or Konjunktiv II?`,
        body: [
          `The three moods form a scale of distance. The indicative in reported speech suggests the reporter accepts the content ("Er sagt, dass die Zahlen stimmen"). Konjunktiv I is neutral reporting ("Er sagt, die Zahl stimme"). Konjunktiv II where a distinct Konjunktiv I form would be available often signals doubt ("Er sagt, er wäre unschuldig" instead of "er sei unschuldig").`,
          `In practice, Konjunktiv II also replaces Konjunktiv I forms that look like the indicative ("sie hätten", "sie würden"), so you must check which forms were available before reading doubt into it.`,
        ],
        table: {
          headers: ["Form", "Signal", "Example"],
          rows: [
            ["indicative", "reporter accepts it", "Sie sagt, sie ist unschuldig."],
            ["Konjunktiv I", "neutral report", "Sie sagt, sie sei unschuldig."],
            ["Konjunktiv II (Konj. I available)", "distance, doubt", "Sie sagt, sie wäre unschuldig."],
            ["Konjunktiv II (substitute)", "neutral", "Sie sagen, sie hätten nichts getan."],
          ],
        },
      },
      {
        heading: `Konjunktiv I outside reported speech`,
        body: [
          `Konjunktiv I survives in fixed wishes and formulas ("Es lebe die Freiheit!", "Gott sei Dank", "Er ruhe in Frieden", "Möge sie glücklich werden"), in instructions in recipes and mathematics ("Man nehme 200 g Mehl", "Gegeben sei ein Dreieck ABC"), in definitions in legal texts ("Als Wohnung gelte ...") and in concessive formulas ("sei es ..., sei es ...", "koste es, was es wolle", "wie dem auch sei").`,
        ],
        examples: [
          { de: "Man nehme drei Eier und schlage sie schaumig.", en: "Take three eggs and beat them until fluffy." },
          { de: "Es sei angemerkt, dass die Daten unvollständig sind.", en: "It should be noted that the data are incomplete." },
          { de: "Wir finden eine Lösung, koste es, was es wolle.", en: "We'll find a solution, whatever it takes." },
          { de: "Wie dem auch sei, wir müssen weitermachen.", en: "Be that as it may, we have to carry on." },
        ],
      },
      {
        heading: `The Konjunktiv in narration`,
        body: [
          `In fiction, the Konjunktiv marks what is imagined, feared or wished inside a character's head, often in erlebte Rede (free indirect speech): "Was, wenn sie nicht käme? Er würde allein am Bahnsteig stehen." Konjunktiv II also expresses the "future in the past" with "würde" and the counterfactual: "Nie hätte er gedacht, dass ...".`,
          `Older and literary prose sometimes uses Konjunktiv I in reported thought ("Sie dachte, er sei längst fort") and the synthetic Konjunktiv II of rare verbs ("Er wünschte, sie stürbe nicht"), which today's writers usually replace with "würde".`,
        ],
        examples: [
          { de: "Was, wenn der Brief nie ankäme? Sie würde es nie erfahren.", en: "What if the letter never arrived? She would never find out." },
          { de: "Nie hätte sie gedacht, dass sie ihn wiedersehen würde.", en: "She would never have thought she would see him again." },
          { de: "Er glaubte, man habe ihn vergessen.", en: "He believed he had been forgotten." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Der Minister sagte, die Lage sei ernst. Er sagte, man hat alles geprüft.",
        right: "Der Minister sagte, die Lage sei ernst. Man habe alles geprüft.",
        why: `Konjunktiv I lets the report continue without repeating the reporting verb. Switching to the indicative would make the journalist the speaker.`,
      },
      {
        wrong: "Man nimmt 200 g Mehl. (in a traditional recipe style)",
        right: "Man nehme 200 g Mehl.",
        why: `The traditional recipe formula uses Konjunktiv I. Modern recipes usually use the infinitive instead: "200 g Mehl abwiegen".`,
      },
      {
        wrong: "Sie behaupten, sie haben nichts gewusst.",
        right: "Sie behaupten, sie hätten nichts gewusst.",
        why: `"Sie haben" is identical to the indicative; written reporting replaces it with Konjunktiv II.`,
      },
    ],
    faqs: [
      {
        q: `Does Konjunktiv II in a news report always mean doubt?`,
        a: `No. Most Konjunktiv II forms in the press are substitutes for Konjunktiv I forms that look like the indicative. Doubt is signalled only when a distinct Konjunktiv I form ("sei", "habe", "komme") was available and the writer chose Konjunktiv II anyway.`,
      },
      {
        q: `Is "Man nehme" still used?`,
        a: `In old-fashioned cookbooks, in jokes and in academic definitions ("Man denke an ..."), yes. It sounds deliberately traditional.`,
      },
      {
        q: `How should I report speech in an academic summary?`,
        a: `Use the present-tense reporting verb and Konjunktiv I: "Die Autorin argumentiert, die Reform habe ihr Ziel verfehlt." Vary the reporting verbs and keep your own evaluation in the indicative.`,
      },
    ],
    related: ["konjunktiv-i-indirect-speech", "supposition-and-hearsay", "als-ob-and-unreal-comparisons", "archaic-and-literary-forms"],
    lessons: [
      "c2-comprehension-strategies-5",
      "c2-radio-interview-text-detective",
      "c2-citations-1",
      "c2-direct-to-indirect-quote-transformations",
      "c2-attribution-verbs-contrast",
      "c2-citations-5",
      "c2-quoting-reported-speech-spiral",
      "c2-creative-writing-1",
    ],
  },
  {
    slug: "archaic-and-literary-forms",
    title: "Archaic and Literary Forms: Dem Manne, Des Kaisers Neue Kleider, Ward",
    description:
      "The old grammar still alive in German proverbs, literature and fixed phrases: the dative -e (zu Hause, im Grunde), the preposed genitive, genitive objects (gedenken, bedürfen), uninflected adjectives (Röslein rot), old Konjunktiv II forms (hülfe, stürbe), ward, and the grammar of proverbs.",
    level: "C2",
    intro: [
      `Modern German is full of fossils. You say "zu Hause" and "im Grunde" without noticing the old dative "-e". Fairy tales give you "des Kaisers neue Kleider", poems "Röslein rot", proverbs "Wer anderen eine Grube gräbt, fällt selbst hinein". Classic literature uses "ward" and "hülfe".`,
      `You do not need to produce these forms in everyday German, but at the Mastery level you must recognise them, understand their effect and use the frozen ones correctly.`,
    ],
    sections: [
      {
        heading: `The dative "-e" and the preposed genitive`,
        body: [
          `Masculine and neuter nouns once added "-e" in the dative singular: "dem Manne", "dem Kinde", "im Hause". Today it is elevated or archaic, but it survives in fixed phrases: "zu Hause", "nach Hause", "im Grunde", "im Laufe der Zeit", "zu Tode", "zu Buche schlagen", "im Zuge", "bei Tage".`,
          `The genitive can stand before the noun, without an article on the noun: "des Kaisers neue Kleider", "des Rätsels Lösung", "der Weisheit letzter Schluss". With names this is normal ("Annas Buch"); with other nouns it is literary or deliberately solemn.`,
        ],
        examples: [
          { de: "Im Grunde hast du recht.", en: "Basically, you're right." },
          { de: "Das schlägt mit 500 Euro zu Buche.", en: "That comes to 500 euros." },
          { de: "Des Rätsels Lösung war ganz einfach.", en: "The solution to the riddle was quite simple." },
          { de: "Er lachte sich fast zu Tode.", en: "He nearly died laughing." },
        ],
      },
      {
        heading: `Genitive objects and old pronouns`,
        body: [
          `A small set of verbs takes a genitive object in elevated style: "gedenken" (commemorate), "bedürfen" (require), "sich erinnern" (remember, literary), "sich bedienen" (make use of), "sich enthalten" (abstain from), "jemanden einer Sache beschuldigen / verdächtigen / überführen". Several survive in legal and political language: "Das bedarf einer Erklärung", "Er enthielt sich der Stimme".`,
          `Old pronoun forms appear in fixed expressions: "wes" for "wessen" ("Wes Brot ich ess, des Lied ich sing"), "derer" for "deren" before a relative clause ("die Zahl derer, die ..."), "selbiger", "besagter", "obiger" in legal and ironic style.`,
        ],
        examples: [
          { de: "Wir gedenken der Opfer des Krieges.", en: "We remember the victims of the war." },
          { de: "Diese Behauptung bedarf eines Beweises.", en: "This claim requires proof." },
          { de: "Er wurde des Diebstahls beschuldigt.", en: "He was accused of theft." },
          { de: "Die Zahl derer, die zu Fuß gehen, steigt.", en: "The number of those who walk is rising." },
        ],
      },
      {
        heading: `Uninflected adjectives, old verb forms and "ward"`,
        body: [
          `Poetry and songs sometimes leave adjectives uninflected or put them after the noun: "Röslein rot", "ein einzig Wort", "auf gut Glück", "ein gut Teil". Some survive in everyday phrases: "auf gut Glück" (at random), "ruhig Blut" (keep calm).`,
          `"Ward" is the old singular Präteritum of "werden" ("Es ward Licht"). Old Konjunktiv II forms of strong verbs ("hülfe", "stürbe", "beföhle", "schwömme", "gewönne") are found in classic literature; modern German uses "würde" + infinitive instead. Old strong past forms also linger: "buk" for "backte", "frug" for "fragte" (regional or humorous).`,
        ],
        table: {
          headers: ["Archaic / literary", "Modern"],
          rows: [
            ["Und es ward Licht.", "Und es wurde Licht."],
            ["Wenn er doch hülfe!", "Wenn er doch helfen würde!"],
            ["Sie buk einen Kuchen.", "Sie backte einen Kuchen."],
            ["dem Manne", "dem Mann"],
            ["Röslein rot", "rotes Röslein"],
          ],
        },
      },
      {
        heading: `The grammar of proverbs`,
        body: [
          `Proverbs preserve older syntax. "Wer" without an antecedent and without a correlative "der": "Wer A sagt, muss auch B sagen", "Wer zuletzt lacht, lacht am besten". Missing articles: "Ende gut, alles gut", "Übung macht den Meister", "Morgenstund hat Gold im Mund". Inverted word order for rhyme or rhythm: "Was du heute kannst besorgen, das verschiebe nicht auf morgen."`,
          `Germans often quote only the first half and let the listener complete it: "Wer anderen eine Grube gräbt ..." (falls into it himself). Recognising the half-quoted proverb is a Mastery-level listening skill.`,
        ],
        examples: [
          { de: "Wer nicht wagt, der nicht gewinnt.", en: "Nothing ventured, nothing gained." },
          { de: "Ende gut, alles gut.", en: "All's well that ends well." },
          { de: "Was Hänschen nicht lernt, lernt Hans nimmermehr.", en: "You can't teach an old dog new tricks." },
          { de: "Na ja, wer zuletzt lacht ...", en: "Well, he who laughs last ..." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ich bin zu Haus. (in formal writing)",
        right: "Ich bin zu Hause.",
        why: `"Zu Hause" keeps the old dative "-e" in standard German. "Zu Haus" is colloquial.`,
      },
      {
        wrong: "Wir gedenken den Opfern.",
        right: "Wir gedenken der Opfer.",
        why: `"Gedenken" takes the genitive. For a less elevated structure, use "an die Opfer denken" or "an die Opfer erinnern".`,
      },
      {
        wrong: "die Zahl deren, die zu Fuß gehen",
        right: "die Zahl derer, die zu Fuß gehen",
        why: `Before a relative clause that it introduces, the demonstrative genitive plural is "derer". "Deren" is the relative pronoun.`,
      },
      {
        wrong: "Wenn er doch hülfe! (in a casual conversation)",
        right: "Wenn er doch helfen würde!",
        why: `"Hülfe" is correct but archaic. In normal modern German, use "würde" + infinitive for rare strong-verb forms.`,
      },
    ],
    faqs: [
      {
        q: `Should I write "dem Manne" or "im Hause"?`,
        a: `Only in fixed phrases or for a deliberately old-fashioned or ironic effect. "Im Hause Müller" (in the Müller household / company) is used in formal business language.`,
      },
      {
        q: `Is "frug" correct?`,
        a: `It is an old strong form of "fragen" that survives regionally and humorously. The standard Präteritum is "fragte".`,
      },
      {
        q: `Why do proverbs leave out articles?`,
        a: `They come from an older stage of the language and are shaped by rhythm and rhyme. The missing articles are frozen: "Übung macht den Meister", never "*Die Übung macht den Meister*".`,
      },
    ],
    related: ["stylistic-registers", "konjunktiv-literature-and-press", "idioms-and-phraseologie", "historical-narrative-tenses"],
    lessons: [
      "c2-proverbs-1",
      "c2-proverbs-complete-transformations",
      "c2-proverbs-2",
      "c2-proverbs-contradictory-contrast",
      "c2-proverbs-3",
      "c2-legal-german-1",
      "c2-historical-narrative-1",
    ],
  },
  {
    slug: "austrian-and-swiss-german",
    title: "Austrian and Swiss German: Grüß Gott, Grüezi and the Standard Varieties",
    description:
      "German as a pluricentric language: Austrian Standard German (ich bin gesessen, Jänner, das Cola, -erl), Swiss Standard German (no ß, parkieren, das Tram, diglossia with Schweizerdeutsch), regional vocabulary and how to read and write for these audiences.",
    level: "C2",
    intro: [
      `German has three equally correct standard varieties: German Standard German, Austrian Standard German and Swiss Standard German. "Jänner" in Vienna and "parkieren" in Zurich are not dialect or mistakes; they are standard in their countries and appear in newspapers, laws and school books.`,
      `This course teaches Germany's standard. At the Mastery level you should understand the other two effortlessly, recognise the main differences in grammar, spelling and vocabulary, and know when to adapt to them.`,
    ],
    sections: [
      {
        heading: `Austrian Standard German`,
        body: [
          `Grammar: "sitzen", "stehen" and "liegen" form the Perfekt with "sein": "Ich bin gesessen", "Wir sind gestanden". Speech uses the Perfekt almost exclusively. Some genders differ: "das Cola", "das E-Mail", "der Polster", "das Service" (dinner service). Diminutives in "-erl": "Sackerl" (bag), "Pickerl" (sticker, vignette), "Stamperl" (shot glass).`,
          `Vocabulary: "Jänner" (January), "heuer" (this year), "Paradeiser" (tomato), "Erdapfel" (potato), "Marille" (apricot), "Topfen" (quark), "Schlagobers" (whipped cream), "Semmel" (bread roll), "Spital" (hospital), "Matura" (school-leaving exam), "Jause" (snack). Greetings: "Grüß Gott", "Servus", "Baba" (bye).`,
        ],
        examples: [
          { de: "Ich bin den ganzen Tag im Büro gesessen.", en: "I sat in the office all day. (Austria)" },
          { de: "Heuer fahren wir im Jänner Ski.", en: "This year we're going skiing in January. (Austria)" },
          { de: "Zwei Semmeln und einen Kaffee mit Schlagobers, bitte.", en: "Two rolls and a coffee with whipped cream, please. (Austria)" },
          { de: "Brauchen Sie ein Sackerl?", en: "Do you need a bag? (Austria)" },
        ],
      },
      {
        heading: `Swiss Standard German`,
        body: [
          `Spelling: Switzerland does not use "ß"; it writes "ss" everywhere: "Strasse", "gross", "Freundliche Grüsse". Vocabulary includes many French loans and Helvetisms: "Velo" (bike), "Trottoir" (pavement), "Billett" (ticket), "Glace" (ice cream), "Perron" (platform), "parkieren", "grillieren", "zügeln" (move house), "das Tram", "der Match", "allfällig" (any, possible), "die Pendenz" (outstanding task).`,
          `Switzerland is diglossic: people speak Schweizerdeutsch (Swiss German dialects) in almost every situation and write Standard German. Standard German is used in school, in the news and with foreigners. Greetings: "Grüezi" (formal), "Sali" or "Hoi" (informal), "Merci", "Exgüsi" (excuse me), "Uf Wiederluege".`,
        ],
        examples: [
          { de: "Ich nehme das Velo und parkiere es vor dem Bahnhof.", en: "I'll take the bike and park it outside the station. (Switzerland)" },
          { de: "Wir zügeln Ende Monat nach Bern.", en: "We're moving to Bern at the end of the month. (Switzerland)" },
          { de: "Das Tram fährt ab Perron 3.", en: "The tram leaves from platform 3. (Switzerland)" },
          { de: "Allfällige Fragen beantworten wir gerne.", en: "We will gladly answer any questions. (Switzerland)" },
        ],
      },
      {
        heading: `The same thing in three countries`,
        body: [
          `Many everyday objects have different standard names. Knowing the main pairs saves misunderstandings in shops and restaurants. Note that "Pfannkuchen" is a pancake in most of Germany but a jam doughnut in Berlin.`,
        ],
        table: {
          headers: ["Germany", "Austria", "Switzerland", "English"],
          rows: [
            ["das Brötchen", "die Semmel", "das Brötli / Weggli", "bread roll"],
            ["die Sahne", "das Schlagobers / der Obers", "der Rahm", "cream"],
            ["die Kartoffel", "der Erdapfel / die Kartoffel", "die Kartoffel", "potato"],
            ["die Tomate", "der Paradeiser", "die Tomate", "tomato"],
            ["der Quark", "der Topfen", "der Quark", "quark"],
            ["das Krankenhaus", "das Spital", "das Spital", "hospital"],
            ["das Fahrrad", "das Fahrrad / Radl", "das Velo", "bicycle"],
            ["Januar", "Jänner", "Januar", "January"],
          ],
        },
      },
      {
        heading: `Adapting your German`,
        body: [
          `When you write to an Austrian or Swiss audience, you are not expected to imitate their variety, but a few adjustments are polite and practical: "ss" instead of "ß" for a Swiss text, "Jänner" in an Austrian calendar, the local words for official things ("Matura", "Spital", "Gemeinde").`,
          `When you live there, adopt the greetings and everyday words first: "Grüß Gott" in Vienna and "Grüezi" in Zurich will be noticed far more than any grammar point.`,
        ],
        examples: [
          { de: "Grüezi mitenand!", en: "Hello everyone! (Swiss German)" },
          { de: "Servus, wie geht's?", en: "Hi, how are you? (Austria, Bavaria)" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Freundliche Grüße (in a Swiss company's house style)",
        right: "Freundliche Grüsse",
        why: `Swiss Standard German never uses "ß". In a Swiss context, "ss" is the correct spelling.`,
      },
      {
        wrong: "Wir wohnen in der Goethestrasse. (in a letter in Germany)",
        right: "Wir wohnen in der Goethestraße.",
        why: `"ss" for "ß" is correct only in Swiss Standard German. In Germany and Austria, "ß" follows a long vowel or diphthong: "Straße", "groß", "heißen".`,
      },
      {
        wrong: "Ich möchte einen Pfannkuchen mit Marmelade. (meaning a pancake, in Berlin)",
        right: "Ich möchte einen Eierkuchen mit Marmelade.",
        why: `In Berlin a "Pfannkuchen" is a jam doughnut; a pancake is an "Eierkuchen" there.`,
      },
    ],
    faqs: [
      {
        q: `Is Schweizerdeutsch the same as Swiss Standard German?`,
        a: `No. Schweizerdeutsch is a group of Alemannic dialects that differ strongly from Standard German and are mainly spoken. Swiss Standard German is the written standard, close to Germany's with some Helvetisms.`,
      },
      {
        q: `Will Austrians and Swiss understand my German Standard German?`,
        a: `Completely. All three varieties are mutually intelligible and media from Germany are everywhere. Using a few local words simply shows attention and goodwill.`,
      },
      {
        q: `Is "Grüß Gott" religious?`,
        a: `Not in practice. It is the normal neutral greeting in Austria and southern Germany, used by everyone.`,
      },
    ],
    related: ["stylistic-registers", "evaluative-suffixes-and-diminutives", "registers-du-and-sie", "idioms-and-phraseologie"],
    lessons: [
      "c1-german-world-1",
      "c1-german-world-2",
      "c1-german-world-3",
      "c1-transform-berlin-zu-wien",
      "c1-error-hunt-misreading-varieties",
      "c1-german-world-4",
      "c1-dialogue-lab-plausch-in-wien",
      "c1-contrast-varieties",
      "c1-regional-vocabulary-1",
      "c1-regional-vocabulary-2",
      "c1-regional-vocabulary-3",
      "c1-regional-vocabulary-4",
      "c1-mission-wohnung-zuerich-wien",
      "c2-humour-regional-styles-word-web",
    ],
  },
  {
    slug: "idioms-and-phraseologie",
    title: "Idioms and Phraseologie: Daumen Drücken, Ins Fettnäpfchen Treten",
    description:
      "How German idioms work grammatically: frozen articles and prepositions, the dative of the person affected (jemandem auf den Keks gehen), idioms with reflexive and separable verbs, tense and passive restrictions, false friends with English idioms, and business phraseology.",
    level: "C2",
    intro: [
      `German is rich in Redewendungen (idioms) and fixed phrases: "Ich drücke dir die Daumen" (I'll keep my fingers crossed for you), "Das ist nicht mein Bier" (that's not my problem), "Ich verstehe nur Bahnhof" (it's all Greek to me). At the Mastery level, idioms are no longer decoration: they are expected in natural speech and appear in every listening and reading text.`,
      `Phraseologie is the study of these fixed expressions. The key insight for learners: an idiom is a block. Its articles, prepositions, word order and sometimes even its tense are frozen, and changing them destroys the idiom.`,
    ],
    sections: [
      {
        heading: `Frozen form`,
        body: [
          `You cannot replace the parts of an idiom: "den Nagel auf den Kopf treffen" (hit the nail on the head) cannot become "*einen Nagel auf einen Kopf treffen*". Negation is often part of the idiom: "nicht alle Tassen im Schrank haben" (not to be all there), "kein Blatt vor den Mund nehmen" (not mince one's words).`,
          `Many idioms resist the passive: "*Der Nagel wurde auf den Kopf getroffen*" is absurd. They do inflect normally for person and tense: "Du hast den Nagel auf den Kopf getroffen", "Ich bin ins Fettnäpfchen getreten".`,
        ],
        examples: [
          { de: "Da hast du den Nagel auf den Kopf getroffen.", en: "You've hit the nail on the head there." },
          { de: "Sie nimmt kein Blatt vor den Mund.", en: "She doesn't mince her words." },
          { de: "Der hat doch nicht alle Tassen im Schrank!", en: "He's not all there!" },
          { de: "Ich bin gestern voll ins Fettnäpfchen getreten.", en: "I really put my foot in it yesterday." },
        ],
      },
      {
        heading: `The dative of the person affected`,
        body: [
          `Many idioms put the person who is affected in the dative: "jemandem auf den Keks / auf die Nerven gehen" (get on someone's nerves), "jemandem die Daumen drücken", "jemandem einen Bären aufbinden" (pull someone's leg), "jemandem reinen Wein einschenken" (tell someone the plain truth). With feelings: "Mir fällt ein Stein vom Herzen" (that's a weight off my mind), "Mir geht ein Licht auf" (it dawns on me).`,
          `In dictionaries, these idioms are listed with "jemandem" (jmdm.) or "jemanden" (jmdn.). Learn the case along with the idiom.`,
        ],
        examples: [
          { de: "Ich drücke dir für die Prüfung die Daumen!", en: "Fingers crossed for your exam!" },
          { de: "Der Lärm geht mir echt auf den Keks.", en: "The noise really gets on my nerves." },
          { de: "Da hat er dir einen Bären aufgebunden.", en: "He was pulling your leg." },
          { de: "Mir ist ein Stein vom Herzen gefallen.", en: "That was a huge weight off my mind." },
        ],
      },
      {
        heading: `False friends with English idioms`,
        body: [
          `Some German idioms look like English ones but mean something else, and many English idioms cannot be translated word for word. "Ich habe einen Kater" means I have a hangover, not a cat. "Das ist mir Wurst" means I don't care. "Tomaten auf den Augen haben" means not to see the obvious. English it's raining cats and dogs is "Es regnet in Strömen" or "Es gießt wie aus Eimern".`,
        ],
        table: {
          headers: ["German idiom", "Literal", "Meaning"],
          rows: [
            ["Ich verstehe nur Bahnhof.", "I only understand station.", "It's all Greek to me."],
            ["die Katze im Sack kaufen", "buy the cat in the bag", "buy a pig in a poke"],
            ["auf dem Holzweg sein", "be on the wood path", "be on the wrong track"],
            ["um den heißen Brei herumreden", "talk around the hot porridge", "beat about the bush"],
            ["Da liegt der Hund begraben.", "That's where the dog is buried.", "That's the crux of the matter."],
            ["die Kirche im Dorf lassen", "leave the church in the village", "not get carried away"],
          ],
        },
      },
      {
        heading: `Business phraseology and register`,
        body: [
          `Professional German has its own fixed phrases: "unter Dach und Fach sein" (be signed and sealed), "in trockenen Tüchern sein" (be in the bag), "jemanden über den Tisch ziehen" (rip someone off), "an einem Strang ziehen" (pull together), "etwas auf die lange Bank schieben" (put something off).`,
          `Idioms carry register. Many are colloquial and wrong in a formal report. In a report, transpose: "Der Vertrag ist in trockenen Tüchern" becomes "Der Vertrag wurde abschließend unterzeichnet".`,
        ],
        examples: [
          { de: "Der Deal ist unter Dach und Fach.", en: "The deal is signed and sealed." },
          { de: "Wir müssen jetzt alle an einem Strang ziehen.", en: "We all need to pull together now." },
          { de: "Das Thema wurde mal wieder auf die lange Bank geschoben.", en: "The issue was put off yet again." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ich kreuze meine Finger für dich.",
        right: "Ich drücke dir die Daumen.",
        why: `The English gesture does not translate. In German you press your thumbs, with the person in the dative.`,
      },
      {
        wrong: "Er hat einen Nagel auf einen Kopf getroffen.",
        right: "Er hat den Nagel auf den Kopf getroffen.",
        why: `The articles in an idiom are frozen. Changing them turns it into a literal (and odd) sentence.`,
      },
      {
        wrong: "Es regnet Katzen und Hunde.",
        right: "Es regnet in Strömen.",
        why: `English idioms rarely translate literally. Use the German equivalent.`,
      },
      {
        wrong: "Der Lärm geht mich auf die Nerven.",
        right: "Der Lärm geht mir auf die Nerven.",
        why: `The affected person is in the dative in this idiom.`,
      },
    ],
    faqs: [
      {
        q: `How many idioms should I actively use?`,
        a: `Quality beats quantity. A few well-placed idioms in the right register ("Das ist nicht mein Bier", "Ich drücke dir die Daumen") sound natural; a text crammed with idioms sounds like a textbook.`,
      },
      {
        q: `Are idioms the same in Austria and Switzerland?`,
        a: `Most are shared, but each country has its own too. Austrian German has "einen Schmäh führen" (to joke around, spin a yarn) and "Das geht sich aus" (that will work out, there's enough time or room).`,
      },
      {
        q: `What is a Funktionsverbgefüge, compared with an idiom?`,
        a: `A Funktionsverbgefüge ("zur Verfügung stellen") is transparent: the noun carries the meaning. An idiom ("ins Gras beißen", to bite the dust) has a meaning that cannot be worked out from its parts.`,
      },
    ],
    related: ["stylistic-registers", "archaic-and-literary-forms", "euphemism-and-indirect-language", "funktionsverbgefuege"],
    lessons: [
      "c2-idioms-1",
      "c2-idioms-image-word-web",
      "c2-idioms-register-contrast",
      "c2-idioms-2",
      "c2-idioms-calques-error-hunt",
      "c2-idioms-dialogue-lab",
      "c2-business-idioms-1",
      "c2-business-idioms-2",
      "c2-business-idioms-error-hunt",
      "c2-challenge-phraseology-no-hints",
    ],
  },
  {
    slug: "rhetoric-and-cohesion",
    title: "Rhetoric and Cohesion: Building a Persuasive German Text",
    description:
      "How to make German texts hang together and persuade: the structure of an Erörterung, connectors of order and refutation (Dem ist entgegenzuhalten, dass ...), Vorfeld choice and pronouns for cohesion, rhetorical questions, anaphora, tricolon and the inclusive wir.",
    level: "C2",
    intro: [
      `At the Mastery level, correctness is assumed. What distinguishes a strong text or speech is cohesion (how sentences link) and rhetoric (how they persuade). German has its own conventions for both: the Erörterung as a model of argument, a large set of formal connectors, and a word order that lets you start each sentence exactly where the previous one ended.`,
      `This guide brings together the structures from earlier levels (connectors, Vorfeld, clefts, Konjunktiv) and shows how they work at text level.`,
    ],
    sections: [
      {
        heading: `The architecture of an argument`,
        body: [
          `A German Erörterung has three parts: "Einleitung" (a hook and the question: "Es stellt sich die Frage, ob ..."), "Hauptteil" (arguments, each with "These", "Begründung", "Beleg / Beispiel") and "Schluss" (conclusion and outlook). A linear Erörterung argues one side; a dialectical one weighs pro and contra, usually ending with the stronger side ("steigernde Anordnung": weakest argument first, strongest last).`,
          `Signposting phrases make the structure audible: "Zunächst ist festzuhalten, dass ...", "Ein weiteres Argument ist ...", "Hinzu kommt, dass ...", "Nicht zuletzt ...", "Abschließend lässt sich festhalten, dass ...".`,
        ],
        examples: [
          { de: "Es stellt sich die Frage, ob ein Tempolimit tatsächlich die Sicherheit erhöht.", en: "The question arises whether a speed limit actually increases safety." },
          { de: "Zunächst ist festzuhalten, dass die Zahl der Unfälle gesunken ist.", en: "First of all, it should be noted that the number of accidents has fallen." },
          { de: "Hinzu kommt, dass die Kosten kaum ins Gewicht fallen.", en: "In addition, the costs are hardly significant." },
          { de: "Abschließend lässt sich festhalten, dass die Vorteile überwiegen.", en: "In conclusion, the advantages outweigh the disadvantages." },
        ],
      },
      {
        heading: `Conceding and refuting`,
        body: [
          `Persuasive German acknowledges the other side before refuting it: "Zwar mag es zutreffen, dass ..., doch ...", "Man könnte einwenden, dass ... Dem ist jedoch entgegenzuhalten, dass ...", "Das trifft insofern nicht zu, als ...". Konjunktiv II signals a hypothetical objection: "Selbst wenn das stimmte, wäre damit nichts gewonnen."`,
          `Graded disagreement: "Da bin ich anderer Meinung" (neutral), "Das sehe ich grundlegend anders" (strong), "Davon kann keine Rede sein" (very strong), "Das ist schlicht falsch" (blunt).`,
        ],
        examples: [
          { de: "Man könnte einwenden, dass die Maßnahme zu teuer ist.", en: "It could be objected that the measure is too expensive." },
          { de: "Dem ist jedoch entgegenzuhalten, dass die Folgekosten weit höher wären.", en: "Against this, however, it must be said that the follow-up costs would be far higher." },
          { de: "Zwar mag das kurzfristig helfen, langfristig löst es das Problem aber nicht.", en: "That may well help in the short term, but in the long term it doesn't solve the problem." },
        ],
      },
      {
        heading: `Cohesion: Vorfeld, pronouns and pronominal adverbs`,
        body: [
          `German links sentences by putting known information in the Vorfeld: the end of one sentence becomes the start of the next. "Die Regierung hat ein neues Gesetz beschlossen. Dieses Gesetz soll ..." / "Damit ...", "Daraus folgt ...", "Dabei zeigt sich ...".`,
          `Pronominal adverbs ("dadurch", "damit", "darauf", "deswegen") and demonstratives ("dieser", "jener", "Letzterer", "Ersterer") refer back precisely. Vary references to avoid repetition: "die Reform" → "das Vorhaben" → "die Maßnahme".`,
        ],
        examples: [
          { de: "Die Mieten steigen seit Jahren. Dadurch werden viele Familien aus der Innenstadt verdrängt.", en: "Rents have been rising for years. As a result, many families are being pushed out of the city centre." },
          { de: "Es gibt zwei Modelle: ein staatliches und ein privates. Letzteres ist billiger, Ersteres sicherer.", en: "There are two models: a state one and a private one. The latter is cheaper, the former safer." },
          { de: "Das Projekt scheiterte. Woran das lag, ist bis heute umstritten.", en: "The project failed. Why that was is still disputed today." },
        ],
      },
      {
        heading: `Rhetorical devices`,
        body: [
          `Rhetorical questions assert rather than ask, often with "nicht", "denn", "etwa" or "schon": "Ist es nicht offensichtlich, dass ...?", "Wer will das schon?" (nobody wants that). Anaphora repeats an opening ("Wir brauchen Mut. Wir brauchen Geduld. Wir brauchen einander."). The tricolon groups three ("schneller, günstiger, gerechter").`,
          `Emphatic Vorfeld and clefts focus the key point: "Gerade diese Frage ist es, die uns beschäftigen muss." The inclusive "wir" and the rhetorical imperative draw the audience in: "Stellen wir uns einen Moment vor, ...", "Seien wir ehrlich: ...".`,
        ],
        examples: [
          { de: "Wer kennt das nicht?", en: "Who hasn't experienced that?" },
          { de: "Ist es nicht an der Zeit, endlich zu handeln?", en: "Isn't it time we finally acted?" },
          { de: "Stellen wir uns einen Moment vor, es gäbe keine Bibliotheken.", en: "Let us imagine for a moment that there were no libraries." },
          { de: "Seien wir ehrlich: So kann es nicht weitergehen.", en: "Let's be honest: things can't go on like this." },
          { de: "Gerade diese Frage ist es, die wir nicht länger ignorieren dürfen.", en: "It is precisely this question that we can no longer ignore." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Am Ende, ich denke, dass die Vorteile überwiegen.",
        right: "Abschließend lässt sich festhalten, dass die Vorteile überwiegen.",
        why: `Translated English signposts break German word order and register. Use the established German formulas, and remember that position 1 is followed by the verb.`,
      },
      {
        wrong: "Dem ist entgegenzuhalten, das die Kosten steigen.",
        right: "Dem ist entgegenzuhalten, dass die Kosten steigen.",
        why: `The conjunction is "dass" with double s. "Das" is an article or pronoun.`,
      },
      {
        wrong: "Ersteres Modell ist billiger.",
        right: "Das erste Modell ist billiger. / Ersteres ist billiger.",
        why: `"Ersterer" / "Letzterer" usually stand alone as pronouns referring back. Before a noun, use "das erste" / "das letzte" or "der erstgenannte".`,
      },
    ],
    faqs: [
      {
        q: `Is "meiner Meinung nach" too simple for the Mastery level?`,
        a: `It is fine, but vary it: "Meines Erachtens ...", "Ich vertrete die Auffassung, dass ...", "Aus meiner Sicht ...", "Ich halte es für erwiesen, dass ...".`,
      },
      {
        q: `How long should German sentences be in an argument?`,
        a: `Vary them. A long, carefully built sentence followed by a short one creates emphasis. German tolerates longer sentences than English, but readability still wins.`,
      },
      {
        q: `What is the difference between "einerseits ... andererseits" and "zwar ... aber"?`,
        a: `"Einerseits ... andererseits" balances two equal sides. "Zwar ... aber" concedes a point in order to weigh it down with a stronger one.`,
      },
    ],
    related: ["complex-connectors", "vorfeld-and-emphasis", "concessive-and-consequential-clauses", "stylistic-registers"],
    lessons: [
      "c2-debate-1",
      "c2-concede-then-refute-transformations",
      "c2-debate-2",
      "c2-disagreement-scale-contrast",
      "c2-debate-6",
      "c2-rhetorical-devices-style-workshop",
      "c2-closing-argument-mission",
      "c2-argument-grammar-spiral",
      "c2-rhetorical-questions-1",
      "c2-hypophora-transformations",
      "c2-question-series-style-workshop",
      "c2-rhetorical-questions-5",
      "c2-challenge-argue-to-the-limit",
    ],
  },
  {
    slug: "amtsdeutsch-legal-german",
    title: "Amtsdeutsch and Legal German: Der Mieter Hat die Kosten zu Tragen",
    description:
      "The grammar of German legal and administrative texts: the deontic present and passive, haben + zu and sein + zu for obligation, conditions without wenn (Sollte ..., so ...), genitive chains, participial attributes, frozen formulas (hiermit, gemäß § 3 Abs. 2, besagter) and how to rewrite them in plain German.",
    level: "C2",
    intro: [
      `Contracts, tax assessments and letters from the Ausländerbehörde are written in a style Germans themselves call "Amtsdeutsch" or "Behördendeutsch". It is precise but dense: "Der Mieter hat die Kosten der Schönheitsreparaturen zu tragen" means the tenant must pay for redecoration; "Die Gebühr ist binnen zwei Wochen zu entrichten" means pay the fee within two weeks.`,
      `This style is built from a small number of structures, all of which you have met before. Recognising them lets you read any official document; producing them lets you write formal complaints and applications that sound right.`,
    ],
    sections: [
      {
        heading: `Obligation without "müssen"`,
        body: [
          `Legal texts state obligations in the present tense ("Der Mieter zahlt die Miete bis zum dritten Werktag") or with "haben + zu" for persons ("Der Mieter hat die Miete ... zu zahlen") and "sein + zu" for things ("Die Miete ist ... zu zahlen"). The passive with "werden" and "verpflichtet" is common too: "Der Mieter wird verpflichtet, ...", "Der Mieter ist verpflichtet, ...".`,
          `Permission and prohibition: "ist berechtigt" (is entitled), "ist befugt" (is authorised), "ist untersagt" (is prohibited), "ist unzulässig" (is not permitted).`,
        ],
        examples: [
          { de: "Der Mieter hat die Nebenkosten monatlich im Voraus zu entrichten.", en: "The tenant shall pay the service charges monthly in advance." },
          { de: "Der Antrag ist schriftlich bei der zuständigen Behörde einzureichen.", en: "The application must be submitted in writing to the competent authority." },
          { de: "Der Arbeitnehmer ist verpflichtet, Krankheitstage unverzüglich zu melden.", en: "The employee is obliged to report sick days without delay." },
          { de: "Das Rauchen ist im gesamten Gebäude untersagt.", en: "Smoking is prohibited throughout the building." },
        ],
      },
      {
        heading: `Conditions and their consequences`,
        body: [
          `Legal conditions often drop "wenn" and put the verb first, with "so" opening the main clause: "Sollte der Mieter mit der Zahlung in Verzug geraten, so ist der Vermieter berechtigt, ...", "Wird die Frist versäumt, so verfällt der Anspruch."`,
          `Other condition markers: "sofern" (provided that), "soweit" (to the extent that), "es sei denn" (unless), "andernfalls" (otherwise), "bei Nichteinhaltung" (in the event of non-compliance), "unter der Voraussetzung, dass", "vorbehaltlich" + genitive (subject to).`,
        ],
        examples: [
          { de: "Sollte eine Bestimmung unwirksam sein, so bleibt der Vertrag im Übrigen gültig.", en: "Should any provision be invalid, the remainder of the contract shall remain valid." },
          { de: "Wird die Frist versäumt, so kann der Antrag nicht mehr berücksichtigt werden.", en: "If the deadline is missed, the application can no longer be considered." },
          { de: "Bei Nichteinhaltung der Frist wird eine Gebühr fällig.", en: "Failure to meet the deadline will incur a fee." },
          { de: "Die Zusage erfolgt vorbehaltlich der Zustimmung des Vorstands.", en: "The commitment is subject to the board's approval." },
        ],
      },
      {
        heading: `Nominal style, participles and frozen formulas`,
        body: [
          `Expect genitive chains ("die Einhaltung der Fristen des Vertrags"), extended participial attributes ("die fristgerecht eingereichten Unterlagen"), the gerundive ("die zu entrichtende Gebühr"), Funktionsverbgefüge ("in Kraft treten", "zur Kenntnis nehmen", "Widerspruch einlegen") and prepositional phrases replacing clauses ("nach Ablauf der Frist", "unter Berücksichtigung", "mit Wirkung vom 1. Mai").`,
          `Frozen formulas: "hiermit" (hereby), "gemäß § 3 Abs. 2" (in accordance with section 3, paragraph 2), "der / die Unterzeichnende" (the undersigned), "besagter", "vorgenannter", "Letzterer" (the latter), "im Folgenden" (hereinafter), "unverzüglich" (without undue delay), "fristgerecht" (in due time).`,
        ],
        examples: [
          { de: "Hiermit lege ich Widerspruch gegen den Bescheid vom 4. März ein.", en: "I hereby lodge an objection to the decision of 4 March." },
          { de: "Gemäß § 5 Abs. 1 des Mietvertrags beträgt die Kündigungsfrist drei Monate.", en: "In accordance with section 5(1) of the tenancy agreement, the notice period is three months." },
          { de: "Nach Ablauf der Frist ist ein Widerspruch nicht mehr möglich.", en: "Once the deadline has passed, an objection is no longer possible." },
          { de: "Die fristgerecht eingereichten Unterlagen werden geprüft.", en: "The documents submitted in time will be reviewed." },
        ],
      },
      {
        heading: `From Amtsdeutsch to plain German`,
        body: [
          `German authorities increasingly aim for "bürgernahe Sprache" (citizen-friendly language) and "Leichte Sprache" (easy-to-read German). Rewriting means turning nouns back into verbs, the passive into the active, and "haben / sein + zu" into "müssen" or "können", with "Sie" as the subject.`,
        ],
        table: {
          headers: ["Amtsdeutsch", "Plain German"],
          rows: [
            ["Die Gebühr ist binnen 14 Tagen zu entrichten.", "Bitte zahlen Sie die Gebühr innerhalb von 14 Tagen."],
            ["Nach erfolgter Prüfung erhalten Sie einen Bescheid.", "Wenn wir alles geprüft haben, schicken wir Ihnen einen Bescheid."],
            ["Bei Nichtvorlage der Unterlagen erfolgt keine Bearbeitung.", "Wenn Sie die Unterlagen nicht schicken, können wir Ihren Antrag nicht bearbeiten."],
          ],
        },
      },
    ],
    mistakes: [
      {
        wrong: "Der Mieter hat die Kosten tragen.",
        right: "Der Mieter hat die Kosten zu tragen.",
        why: `Obligation with "haben" needs "zu" + infinitive. Without "zu", "hat" cannot combine with an infinitive.`,
      },
      {
        wrong: "Sollte der Mieter in Verzug gerät, ...",
        right: "Sollte der Mieter in Verzug geraten, ...",
        why: `In a verb-first condition, "sollte" is the finite verb and the main verb stays in the infinitive at the end.`,
      },
      {
        wrong: "Hiermit ich kündige meinen Vertrag.",
        right: "Hiermit kündige ich meinen Vertrag.",
        why: `"Hiermit" occupies the Vorfeld, so the verb follows immediately.`,
      },
      {
        wrong: "gemäß dem § 3 Absatz 2",
        right: "gemäß § 3 Abs. 2",
        why: `Section references are written without an article, with the standard abbreviations "§" and "Abs.".`,
      },
    ],
    faqs: [
      {
        q: `Is "gemäß" followed by the dative or the genitive?`,
        a: `The dative: "gemäß dem Vertrag", "gemäß Ihrem Wunsch". It can also follow the noun: "dem Vertrag gemäß". With a bare section reference, no case is visible: "gemäß § 3".`,
      },
      {
        q: `What is the difference between "Bescheid", "Urteil" and "Beschluss"?`,
        a: `A "Bescheid" is an administrative decision by an authority (tax office, immigration office). An "Urteil" is a court judgment after a trial. A "Beschluss" is a decision or resolution, by a court without a full trial or by a committee.`,
      },
      {
        q: `Should I imitate Amtsdeutsch when I write to an authority?`,
        a: `Use its frame (formal salutation, "hiermit", clear subject line, reference numbers, "fristgerecht") but keep your sentences clear. Officials appreciate precision, not imitation.`,
      },
    ],
    related: ["passive-alternatives", "funktionsverbgefuege", "genitive-prepositions", "formal-letters-and-emails"],
    lessons: [
      "c2-legal-german-1",
      "c2-legal-german-2",
      "c2-legal-plain-language-transformations",
      "c2-legal-german-3",
      "c2-contrast-urteil-beschluss-bescheid",
      "c2-mission-schreiben-ans-amt",
      "c2-legal-german-4",
      "c2-legal-german-5",
      "c2-contract-clauses-error-hunt",
      "c2-legal-german-6",
      "c2-legal-german-7",
      "c2-text-detective-steuerbescheid",
    ],
  },
  {
    slug: "evaluative-suffixes-and-diminutives",
    title: "Diminutives and Evaluative Suffixes: Häuschen, Fragerei, Gerede, Feigling",
    description:
      "How German suffixes add feeling to words: the diminutives -chen and -lein (always neuter, with umlaut), regional -le, -li, -erl, pejorative -erei and Ge-...-e, the person suffix -ling, and intensifying prefixes like stein-, stink-, blitz- and ur-.",
    level: "C2",
    intro: [
      `German can change the emotional colour of a word with a suffix. "Haus" is neutral; "Häuschen" is small and cosy. "Fragen" is neutral; "die Fragerei" is annoying questioning. "Reden" is neutral; "das Gerede" is idle talk or gossip. "Feigling" is a coward, but "Liebling" is a darling.`,
      `These suffixes are productive: speakers create new forms all the time. Knowing their values helps you catch irony, affection and contempt, and use them yourself with care.`,
    ],
    sections: [
      {
        heading: `Diminutives: "-chen" and "-lein"`,
        body: [
          `Every diminutive is neuter, whatever the gender of the base: "der Hund" → "das Hündchen", "die Frau" → "das Fräulein". Back vowels usually take an umlaut: "Haus" → "Häuschen", "Buch" → "Büchlein", "Blume" → "Blümchen". A final "-e" drops: "Tasse" → "Tässchen". "-chen" is standard and more common; "-lein" is more literary or southern, and is used after "-ch" or "-g" ("Bächlein", "Zweiglein").`,
          `Diminutives express smallness, affection, irony or condescension: "ein Weilchen" (a little while), "Na, mein Freundchen?" (watch it, my friend; a warning). Some are lexicalised and have no neutral base meaning today: "das Mädchen", "das Brötchen", "das Kaninchen", "das Eichhörnchen", "das Märchen".`,
        ],
        examples: [
          { de: "Wir haben ein kleines Häuschen am See gemietet.", en: "We've rented a little cottage by the lake." },
          { de: "Warte noch ein Weilchen.", en: "Wait a little while longer." },
          { de: "Na, Freundchen, so geht das aber nicht!", en: "Now then, sunshine, that won't do!" },
          { de: "Das Fräulein ist eine veraltete Anrede.", en: "Fräulein is an outdated form of address." },
        ],
      },
      {
        heading: `Regional diminutives`,
        body: [
          `The South has its own: Swabian "-le" ("das Häusle", "das Schätzle"), Swiss "-li" ("das Müesli", "das Chuchichäschtli", "das Brötli"), Austrian and Bavarian "-erl" or "-l" ("das Sackerl", "das Busserl" for a kiss, "das Stamperl", "das Radl"). They are neuter like "-chen".`,
        ],
        examples: [
          { de: "Gib mir ein Busserl!", en: "Give me a kiss! (Austria, Bavaria)" },
          { de: "Ein Müesli zum Frühstück, bitte.", en: "A muesli for breakfast, please. (Switzerland)" },
        ],
      },
      {
        heading: `Pejorative suffixes: "-erei", "Ge-...-e", "-ling"`,
        body: [
          `"-erei" (feminine) often expresses an annoying, repeated activity: "die Fragerei", "die Raserei" (speeding), "die Schreiberei" (endless paperwork). It also forms neutral places and trades: "die Bäckerei", "die Druckerei".`,
          `"Ge-" + stem + "-e" (neuter; the "-e" is often dropped, as in "Gejammer") expresses a tiresome, continuous activity: "das Gerede" (talk, gossip), "das Gejammer" (whining), "das Gerenne", "das Gedränge" (crush of people).`,
          `"-ling" (masculine) forms persons, often negatively: "der Feigling" (coward), "der Schwächling" (weakling), "der Emporkömmling" (upstart). But "der Liebling", "der Lehrling" and "der Frühling" are neutral or positive, so context decides ("der Flüchtling" is neutral, though some prefer "Geflüchtete" because of the suffix).`,
        ],
        table: {
          headers: ["Suffix", "Value", "Examples"],
          rows: [
            ["-chen / -lein", "small, affectionate, ironic", "das Häuschen, das Büchlein"],
            ["-erei", "annoying repetition (or a trade)", "die Fragerei, die Bäckerei"],
            ["Ge-...-e", "tiresome continuous activity", "das Gerede, das Gejammer"],
            ["-ling", "person, often negative", "der Feigling, der Liebling"],
            ["-ler", "person, sometimes negative", "der Sportler, der Provinzler"],
          ],
        },
        examples: [
          { de: "Diese ewige Fragerei geht mir auf die Nerven.", en: "This endless questioning is getting on my nerves." },
          { de: "Hör auf mit dem Gejammer!", en: "Stop whining!" },
          { de: "Das ist doch nur Gerede.", en: "That's just gossip." },
          { de: "Sei kein Feigling!", en: "Don't be a coward!" },
        ],
      },
      {
        heading: `Intensifying prefixes`,
        body: [
          `Colloquial German intensifies adjectives with prefixes, mostly in fixed combinations: "steinalt" (ancient), "stinksauer" (furious), "stinkreich" (filthy rich), "todmüde" (dead tired), "blitzsauber" (spotless), "uralt" (very old), "mega-", "super-", "sau-" (crude: "saukalt"). Each prefix combines only with certain adjectives: "todmüde" but not "*todalt*".`,
        ],
        examples: [
          { de: "Nach der Wanderung war ich todmüde.", en: "After the hike I was dead tired." },
          { de: "Sie war stinksauer auf ihn.", en: "She was absolutely furious with him." },
          { de: "Das ist eine uralte Geschichte.", en: "That's an ancient story." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "der Häuschen",
        right: "das Häuschen",
        why: `Diminutives in "-chen" and "-lein" are always neuter.`,
      },
      {
        wrong: "das Hundchen",
        right: "das Hündchen",
        why: `Diminutives usually umlaut a back vowel in the stem (exceptions such as "Frauchen" are rare): "Hund" → "Hündchen", "Haus" → "Häuschen".`,
      },
      {
        wrong: "Sie ist todalt.",
        right: "Sie ist steinalt. / Sie ist uralt.",
        why: `Intensifying prefixes form fixed pairs. "Tod-" goes with "müde", "krank", "ernst", not with "alt".`,
      },
    ],
    faqs: [
      {
        q: `Why is it "das Mädchen" when a girl is female?`,
        a: `Because "-chen" always makes a noun neuter. In speech, many people use "sie" to refer back to "das Mädchen", and that is accepted.`,
      },
      {
        q: `Can I add "-chen" to any noun?`,
        a: `To most concrete nouns, yes, and Germans do so freely in affectionate or ironic speech. Abstract nouns rarely take it, and some diminutives sound childish in formal contexts.`,
      },
      {
        q: `Is "Fräulein" still used?`,
        a: `Not as a form of address for women; it is considered outdated and condescending. Use "Frau" for every adult woman regardless of marital status.`,
      },
    ],
    related: ["word-formation", "austrian-and-swiss-german", "stylistic-registers", "der-die-das-gender"],
    lessons: [
      "c2-exclamations-1",
      "c2-suffixes-1",
      "c2-diminutive-values-contrast",
      "c2-suffixes-2",
      "c2-pejorative-intensifying-word-web",
      "c2-lexicalised-suffixes-text-detective",
    ],
  },
  {
    slug: "euphemism-and-indirect-language",
    title: "Euphemism and Indirect Language: Saying It Gently in German",
    description:
      "How German softens and hides: the passive and man to avoid naming who did it, Konjunktiv II of politeness, negation as understatement (nicht ganz optimal), softening particles, euphemisms for death, illness and job cuts, and how to decode corporate and diplomatic language.",
    level: "C2",
    intro: [
      `Germans have a reputation for directness, and in many situations it is deserved. But German also has a full toolkit for saying unpleasant things gently, or for not quite saying them at all: "Es wurden Fehler gemacht" (mistakes were made), "Das ist nicht ganz optimal" (that's bad), "Wir trennen uns von 200 Mitarbeitern" (we are firing 200 people).`,
      `At the Mastery level you need to decode this language in the press and at work, and to use the respectful forms yourself in condolences, feedback and delicate e-mails.`,
    ],
    sections: [
      {
        heading: `Hiding the agent`,
        body: [
          `The passive without an agent and "man" hide responsibility: "Es wurden Fehler gemacht", "Man hat sich entschieden, das Projekt einzustellen", "Die Entscheidung ist gefallen". Nominal style does the same: "die Freisetzung von Mitarbeitern" (releasing staff) or "Personalanpassungen" (staff adjustments) for layoffs.`,
          `Recognising the missing agent is a key critical-reading skill: always ask "von wem?".`,
        ],
        examples: [
          { de: "Bei der Planung wurden Fehler gemacht.", en: "Mistakes were made in the planning." },
          { de: "Man hat sich gegen eine Verlängerung entschieden.", en: "It was decided not to extend." },
          { de: "Im Zuge der Umstrukturierung kommt es zu Personalanpassungen.", en: "In the course of restructuring, there will be staff adjustments. (= job cuts)" },
        ],
      },
      {
        heading: `Softening with Konjunktiv II, negation and particles`,
        body: [
          `Konjunktiv II turns demands into suggestions: "Ich hätte da eine Bitte", "Wäre es möglich, ...?", "Es wäre gut, wenn ...". Negated positives understate: "nicht ganz optimal", "nicht so ideal", "nicht unbedingt meine Lieblingslösung", "nicht ganz unproblematisch" (= problematic).`,
          `Softening words: "vielleicht", "eventuell", "eigentlich", "eher", "etwas", "ein bisschen", "gewissermaßen". In feedback, the sandwich method is common: positive, then the criticism softened ("Mir ist aufgefallen, dass ..."), then positive again.`,
        ],
        examples: [
          { de: "Die Präsentation war gut, nur der Zeitplan war nicht ganz optimal.", en: "The presentation was good, only the timing wasn't quite ideal." },
          { de: "Wäre es eventuell möglich, den Termin zu verschieben?", en: "Would it perhaps be possible to postpone the appointment?" },
          { de: "Mir ist aufgefallen, dass die Zahlen etwas veraltet sind.", en: "I noticed that the figures are a little out of date." },
          { de: "Das ist eher suboptimal.", en: "That's rather less than ideal." },
        ],
      },
      {
        heading: `Euphemisms for difficult subjects`,
        body: [
          `Death: "verstorben", "von uns gegangen", "entschlafen" (elevated), "für immer eingeschlafen"; jocular "das Zeitliche segnen", "den Löffel abgeben" (informal, never in condolences). Illness: "eine schwere Krankheit", "nach langer, schwerer Krankheit". Age: "Senioren", "in die Jahre gekommen". Disability: "Menschen mit Behinderung".`,
          `Work and money: "freisetzen" (lay off), "sozialverträglicher Stellenabbau" (job cuts without compulsory redundancies), "Preisanpassung" (price increase), "negatives Wachstum" (decline), "Nullrunde" (no pay rise).`,
        ],
        table: {
          headers: ["Euphemism", "Plain meaning"],
          rows: [
            ["Er ist von uns gegangen.", "Er ist gestorben."],
            ["eine Preisanpassung", "eine Preiserhöhung"],
            ["Wir trennen uns von Ihnen.", "Sie sind entlassen."],
            ["ein vollschlanker Mann", "ein dicker Mann"],
            ["Er hat sich stets bemüht.", "Er war nicht gut. (in a reference)"],
          ],
        },
        examples: [
          { de: "Wir trauern um unseren lieben Vater, der nach langer, schwerer Krankheit von uns gegangen ist.", en: "We mourn our dear father, who passed away after a long, serious illness." },
          { de: "Zum 1. Januar erfolgt eine Preisanpassung.", en: "Prices will be adjusted on 1 January. (= increased)" },
        ],
      },
      {
        heading: `The coded language of job references`,
        body: [
          `German employers must write references (Arbeitszeugnisse) that sound positive, so a code has developed. "Er hat sich stets bemüht" (he always tried) actually means he failed. "Stets zu unserer vollsten Zufriedenheit" is the top grade; without "stets" it drops a grade, and "zu unserer Zufriedenheit" is only adequate. "Sie war wegen ihrer Geselligkeit beliebt" may hint at too much socialising. Recognising this code is part of professional Mastery-level competence.`,
        ],
        examples: [
          { de: "Sie erledigte ihre Aufgaben stets zu unserer vollsten Zufriedenheit.", en: "She always performed her tasks to our complete satisfaction. (= excellent)" },
          { de: "Er hat sich bemüht, den Anforderungen gerecht zu werden.", en: "He made an effort to meet the requirements. (= he did not)" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Mein Beileid, ich habe gehört, dass dein Vater den Löffel abgegeben hat.",
        right: "Mein herzliches Beileid zum Tod deines Vaters.",
        why: `"Den Löffel abgeben" is a jocular, disrespectful idiom. In condolences use "Tod", "verstorben" or "von uns gegangen".`,
      },
      {
        wrong: "Sie hat zu unserer vollen Zufriedenheit gearbeitet. (meant as top praise)",
        right: "Sie hat stets zu unserer vollsten Zufriedenheit gearbeitet.",
        why: `In reference code, "zur vollen Zufriedenheit" is only a satisfactory grade. The top grade needs "stets" and "vollsten".`,
      },
      {
        wrong: "Ihr Bericht ist schlecht.",
        right: "Ihr Bericht ist inhaltlich gut, an der Struktur könnten wir aber noch arbeiten.",
        why: `Blunt negative feedback can damage a working relationship. Soften with Konjunktiv II, "noch" and a positive frame.`,
      },
    ],
    faqs: [
      {
        q: `Are Germans really as direct as people say?`,
        a: `In factual matters at work, often yes: "Das ist falsch" is not necessarily rude. But in personal matters, criticism of individuals, condolences and written references, German uses as much indirectness as English, sometimes more.`,
      },
      {
        q: `Is "suboptimal" a real word?`,
        a: `Yes, it is common in business German as a polite way of saying bad. Like "nicht ganz optimal", it often means considerably worse than it sounds.`,
      },
      {
        q: `What is the best phrase for condolences?`,
        a: `"Mein herzliches Beileid" (my heartfelt condolences) or, in writing, "Mit stillem Gruß" / "In stiller Anteilnahme" as a closing. Keep it short and avoid idioms.`,
      },
    ],
    related: ["stylistic-registers", "impersonal-passive-constructions", "idioms-and-phraseologie", "als-ob-and-unreal-comparisons"],
    lessons: [
      "c2-euphemisms-1",
      "c2-euphemism-decode-text-detective",
      "c2-euphemisms-2",
      "c2-corporate-press-release-style-workshop",
      "c2-implicature-contrast",
      "c2-euphemisms-3",
      "c2-mission-condolences-feedback",
    ],
  },
  {
    slug: "historical-narrative-tenses",
    title: "Historical Narrative: Präteritum, Plusquamperfekt, Historic Present and Sollte",
    description:
      "The tenses of written history and fiction in German: the Präteritum as narrative tense, the Plusquamperfekt for what happened earlier, the historic present (1989 fällt die Mauer), the future in the past with sollte and würde, and temporal clauses and prepositions.",
    level: "C2",
    intro: [
      `Spoken German tells stories in the Perfekt. Written German, history books and novels tell them in the Präteritum: "1871 wurde das Deutsche Kaiserreich gegründet." On top of that come the Plusquamperfekt for background, a historic present for vivid summaries, and a special construction for looking ahead from the past: "Er sollte seine Heimat nie wiedersehen" (he was never to see his home again).`,
    ],
    sections: [
      {
        heading: `Präteritum vs Perfekt`,
        body: [
          `The Präteritum is the narrative tense of writing: it tells a sequence of past events with no link to the present. The Perfekt connects the past with now ("Die Mauer ist gefallen, und heute ...") and dominates in speech. In written narration, use the Präteritum consistently and switch to the Perfekt only in direct speech or in a commentary about present relevance.`,
          `At the Mastery level you need the Präteritum of all common strong verbs, including the less frequent ones: "verlor", "beschloss", "wich", "erlag", "schwor", "verbarg", "gedieh", "befahl".`,
        ],
        examples: [
          { de: "1871 wurde in Versailles das Deutsche Kaiserreich proklamiert.", en: "In 1871 the German Empire was proclaimed at Versailles." },
          { de: "Der Kaiser verlor den Krieg und dankte ab.", en: "The emperor lost the war and abdicated." },
          { de: "Er erlag wenige Tage später seinen Verletzungen.", en: "He died of his injuries a few days later." },
        ],
      },
      {
        heading: `The Plusquamperfekt for anteriority`,
        body: [
          `The Plusquamperfekt ("hatte gemacht", "war gegangen") places an event before the main narrative line: "Als die Truppen eintrafen, hatte die Bevölkerung die Stadt bereits verlassen." It is used for background and flashbacks and is required after "nachdem" when the main clause is in the Präteritum.`,
          `Do not overuse it: once a flashback is established, writers often return to the Präteritum.`,
        ],
        examples: [
          { de: "Nachdem der Vertrag unterzeichnet worden war, begannen die Feierlichkeiten.", en: "After the treaty had been signed, the celebrations began." },
          { de: "Sie hatte das Land schon Jahre zuvor verlassen.", en: "She had left the country years before." },
          { de: "Kaum hatte er die Grenze überquert, als die Soldaten kamen.", en: "Hardly had he crossed the border when the soldiers came." },
        ],
      },
      {
        heading: `The historic present`,
        body: [
          `Timelines, summaries and documentaries often use the present to make history vivid: "1989 fällt die Mauer. Ein Jahr später ist Deutschland wiedervereinigt." It is also used in chronologies and captions. Choose one system and keep to it in a text; mixing present and Präteritum without reason looks careless.`,
        ],
        examples: [
          { de: "Am 9. November 1989 öffnet die DDR die Grenze.", en: "On 9 November 1989, the GDR opens the border." },
          { de: "1517 veröffentlicht Luther seine Thesen.", en: "In 1517 Luther publishes his theses." },
        ],
      },
      {
        heading: `Looking ahead from the past: "sollte" and "würde"`,
        body: [
          `"Sollte" + infinitive expresses destiny, what was to happen: "Er sollte das Ende des Krieges nicht mehr erleben" (he was not to live to see the end of the war). "Würde" + infinitive expresses the future in the past from a character's point of view: "Sie wusste, dass sie nie zurückkehren würde."`,
          `Both are typical of history writing and literary narrative. In English, both often correspond to was to / would.`,
        ],
        examples: [
          { de: "Es sollte der letzte Sommer vor dem Krieg sein.", en: "It was to be the last summer before the war." },
          { de: "Niemand ahnte, dass die Mauer schon bald fallen würde.", en: "Nobody suspected that the Wall would soon fall." },
          { de: "Diese Entscheidung sollte weitreichende Folgen haben.", en: "This decision was to have far-reaching consequences." },
        ],
      },
      {
        heading: `Temporal clauses and prepositions`,
        body: [
          `Narrative links: "als" (a single past event), "nachdem" (after, with tense shift), "bevor", "während", "seitdem", "sobald", "kaum dass", and inversion with "kaum": "Kaum hatte er ..., da / als ...". Formal prepositions: "während des Krieges", "innerhalb weniger Jahre", "binnen eines Monats", "im Laufe des 19. Jahrhunderts", "im Zuge der Industrialisierung", "infolge der Krise".`,
        ],
        examples: [
          { de: "Im Laufe des 19. Jahrhunderts wuchsen die Städte rasant.", en: "Over the course of the 19th century, the cities grew rapidly." },
          { de: "Im Zuge der Reformen verloren viele ihre Arbeit.", en: "In the course of the reforms, many people lost their jobs." },
          { de: "Binnen weniger Wochen brach die Regierung zusammen.", en: "Within a few weeks, the government collapsed." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Nachdem er die Stadt verließ, begann der Krieg.",
        right: "Nachdem er die Stadt verlassen hatte, begann der Krieg.",
        why: `"Nachdem" requires a tense shift: Plusquamperfekt in the clause when the main clause is in the Präteritum.`,
      },
      {
        wrong: "Er würde das Ende des Krieges nicht mehr erleben. (as the narrator's statement of fact)",
        right: "Er sollte das Ende des Krieges nicht mehr erleben.",
        why: `For destiny stated by the narrator, German uses "sollte". "Würde" suggests a character's expectation or a conditional.`,
      },
      {
        wrong: "1989 ist die Mauer gefallen. 1990 wurde Deutschland wiedervereinigt, und 1991 zieht die Regierung nach Berlin.",
        right: "1989 fiel die Mauer, 1990 wurde Deutschland wiedervereinigt, und 1991 beschloss der Bundestag den Umzug nach Berlin.",
        why: `Keep one narrative tense. Mixing Perfekt, Präteritum and present in one sequence looks careless in writing.`,
      },
    ],
    faqs: [
      {
        q: `Is the Perfekt wrong in written narration?`,
        a: `Not wrong, but unusual in a sustained narrative. It is normal in letters, blogs and personal accounts that sound like speech. In history writing and fiction, the Präteritum is the norm.`,
      },
      {
        q: `Do Southern Germans and Austrians write in the Präteritum?`,
        a: `Yes. Although their speech uses the Perfekt almost exclusively, written narrative across the German-speaking world uses the Präteritum.`,
      },
      {
        q: `What tense do German textbooks use for history?`,
        a: `Mostly the Präteritum, with timelines and summaries in the historic present.`,
      },
    ],
    related: ["archaic-and-literary-forms", "konjunktiv-literature-and-press", "rhetoric-and-cohesion", "genitive-prepositions"],
    lessons: [
      "c1-literary-narration-1",
      "c1-contrast-erzaehltempora",
      "c2-historical-narrative-1",
      "c2-same-event-four-genres-contrast",
      "c2-historical-narrative-2",
      "c2-history-tenses-error-hunt",
      "c2-historical-narrative-3",
      "c2-temporal-depth-transformations",
      "c2-historical-narrative-4",
      "c2-historical-present-future-contrast",
      "c2-historical-narrative-6",
      "c2-historian-hindsight-contrast",
    ],
  },
];
