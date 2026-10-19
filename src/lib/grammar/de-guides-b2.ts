// Synced from cheneygross-afk/lengo:src/lib/grammar/de-guides-b2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { DeGrammarGuide } from "./de-types";

// German grammar guides, B2 (see ./de-types.ts for the shape and conventions).
export const DE_B2_GUIDES: DeGrammarGuide[] = [
  {
    slug: "konjunktiv-ii-past-double-infinitive",
    title: "Konjunktiv II in the Past: Hätte Gemacht, Wäre Gegangen",
    description:
      "How to talk about what would have happened in German: hätte and wäre + Partizip II, conditionals without wenn, past wishes with doch and bloß, and the double infinitive in regrets (ich hätte anrufen sollen).",
    level: "B2",
    intro: [
      `English builds its unreal past with would have + participle: if I had known, I would have come. German needs only two little words for both halves of that sentence: "hätte" and "wäre". "Wenn ich das gewusst hätte, wäre ich gekommen." There is no "würde" anywhere.`,
      `The choice between "hätte" and "wäre" follows exactly the same rule as the Perfekt: verbs that take "haben" in the Perfekt take "hätte", verbs that take "sein" take "wäre". If you can say "ich bin gefahren", you can say "ich wäre gefahren".`,
      `The real Upper-intermediate challenge is the modal verbs. To say I should have called, German does not use a participle of "sollen" at all; it uses two infinitives side by side: "Ich hätte anrufen sollen." This double infinitive is one of the most recognisable patterns of educated German.`,
    ],
    sections: [
      {
        heading: `Form: "hätte" or "wäre" + Partizip II`,
        body: [
          `Take the Perfekt and put the auxiliary into Konjunktiv II: "ich habe gewartet" becomes "ich hätte gewartet", "sie ist gekommen" becomes "sie wäre gekommen". The participle stays exactly as it is, at the end of the clause.`,
          `Watch the umlaut. "Hatte" (had) and "hätte" (would have), "war" (was) and "wäre" (would be) differ only by the dots, and they mean completely different things. "Sein", "bleiben", "werden" and "passieren" take "wäre" even though nothing moves: "Das wäre nicht passiert."`,
        ],
        table: {
          headers: ["", "with haben", "with sein"],
          rows: [
            ["ich", "hätte gewartet", "wäre gekommen"],
            ["du", "hättest gewartet", "wärst gekommen"],
            ["er / sie / es", "hätte gewartet", "wäre gekommen"],
            ["wir", "hätten gewartet", "wären gekommen"],
            ["ihr", "hättet gewartet", "wärt gekommen"],
            ["sie / Sie", "hätten gewartet", "wären gekommen"],
          ],
        },
        examples: [
          { de: "Wenn ich früher losgefahren wäre, hätte ich den Zug erreicht.", en: "If I'd set off earlier, I'd have caught the train." },
          { de: "Ohne deine Hilfe hätte ich das nie geschafft.", en: "Without your help I'd never have managed it." },
          { de: "Das wäre nicht passiert, wenn du aufgepasst hättest.", en: "That wouldn't have happened if you'd paid attention." },
          { de: "Wir wären gern länger geblieben.", en: "We'd have liked to stay longer." },
          { de: "Er wäre fast Arzt geworden.", en: "He almost became a doctor." },
        ],
      },
      {
        heading: `Conditionals without "wenn", and wishes with "doch" and "bloß"`,
        body: [
          `As in the present, you can drop "wenn" and put the verb first: "Hätte ich das gewusst, wäre ich gekommen." English does the same in formal style (Had I known...). The main clause often starts with "dann" or "so".`,
          `A wish about the past is an unreal condition with no main clause. It needs "doch", "nur" or "bloß" (or a combination) to sound like a wish rather than half a sentence: "Wenn ich doch nur mehr gelernt hätte!" or, verb first, "Hätte ich bloß nichts gesagt!"`,
          `You can also mix times: a past condition with a present result ("Wenn ich damals Medizin studiert hätte, wäre ich jetzt Ärztin") or the reverse ("Wenn ich nicht so schüchtern wäre, hätte ich sie angesprochen").`,
        ],
        examples: [
          { de: "Hätte ich das gewusst, wäre ich zu Hause geblieben.", en: "Had I known, I'd have stayed at home." },
          { de: "Wäre der Bus pünktlich gewesen, dann hätten wir es geschafft.", en: "If the bus had been on time, we'd have made it." },
          { de: "Wenn ich doch nur früher angerufen hätte!", en: "If only I'd called earlier!" },
          { de: "Hätte ich bloß den Schirm mitgenommen!", en: "If only I'd taken the umbrella!" },
          { de: "Wenn ich damals nicht umgezogen wäre, würde ich ihn noch kennen.", en: "If I hadn't moved back then, I'd still know him." },
        ],
      },
      {
        heading: `Regrets and reproaches: the double infinitive`,
        body: [
          `With a modal verb, the past Konjunktiv II is "hätte" + infinitive + modal infinitive: "ich hätte anrufen sollen" (I should have called), "du hättest mir helfen können" (you could have helped me), "das hättest du nicht sagen dürfen" (you shouldn't have said that), "das hättest du nicht machen müssen" (you didn't have to do that). The modal is always the very last word.`,
          `In a subordinate clause the rule surprises everyone: "hätte" does not go to the end but stands in front of the two infinitives. "Ich weiß, dass ich früher hätte anrufen sollen." The block of infinitives keeps its place at the very end.`,
          `Present advice versus past reproach is a clean contrast: "Du solltest mehr schlafen" (you should sleep more) / "Du hättest mehr schlafen sollen" (you should have slept more).`,
        ],
        table: {
          headers: ["English", "German", "Pattern"],
          rows: [
            ["I should have called.", "Ich hätte anrufen sollen.", "regret"],
            ["You could have told me!", "Du hättest es mir sagen können!", "reproach"],
            ["We shouldn't have spent so much.", "Wir hätten nicht so viel ausgeben dürfen.", "regret"],
            ["You didn't need to do that.", "Das hättest du nicht machen müssen.", "thanks or reproach"],
            ["..., that I should have called", "..., dass ich hätte anrufen sollen", "subordinate clause"],
          ],
        },
        examples: [
          { de: "Ich hätte früher kommen sollen.", en: "I should have come earlier." },
          { de: "Du hättest wenigstens Bescheid sagen können!", en: "You could at least have let me know!" },
          { de: "Sie hätten mich informieren müssen.", en: "You ought to have informed me." },
          { de: "Ich weiß, dass ich das nicht hätte sagen dürfen.", en: "I know I shouldn't have said that." },
          { de: "Es wäre besser gewesen, wenn wir gebucht hätten.", en: "It would have been better if we'd booked." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Wenn ich das gewusst würde haben, würde ich gekommen sein.",
        right: "Wenn ich das gewusst hätte, wäre ich gekommen.",
        why: `English would have tempts learners into "würde ... haben". German uses "hätte" or "wäre" + Partizip II in both halves of an unreal past condition.`,
      },
      {
        wrong: "Ich hätte kommen gesollt.",
        right: "Ich hätte kommen sollen.",
        why: `With an infinitive in front of it, the modal does not use its participle "gesollt"; it stays in the infinitive. This is the double infinitive.`,
      },
      {
        wrong: "Ich sollte angerufen haben.",
        right: "Ich hätte anrufen sollen.",
        why: `"Sollte" + perfect infinitive expresses an expectation ("Er sollte längst angekommen sein", he ought to have arrived by now), not a regret about something you failed to do. The regret I should have called is "ich hätte anrufen sollen".`,
      },
      {
        wrong: "..., weil ich nicht kommen können hätte.",
        right: "..., weil ich nicht hätte kommen können.",
        why: `In a subordinate clause with a double infinitive, the auxiliary "hätte" stands before the two infinitives, not at the very end.`,
      },
      {
        wrong: "Wenn ich mehr Zeit hatte, wäre ich gekommen.",
        right: "Wenn ich mehr Zeit gehabt hätte, wäre ich gekommen.",
        why: `"Hatte" without the umlaut is the ordinary past. The unreal condition needs Konjunktiv II: "hätte ... gehabt".`,
      },
    ],
    faqs: [
      {
        q: `Can I ever use "würde" in the past?`,
        a: `"Würde ... gemacht haben" exists in grammar books but sounds clumsy, and almost nobody says it for the unreal past. Use "hätte" or "wäre" + participle and you will always be right.`,
      },
      {
        q: `How do I know whether to use "hätte" or "wäre"?`,
        a: `Ask how the verb forms its Perfekt. "Ich bin geblieben" gives "ich wäre geblieben"; "ich habe gearbeitet" gives "ich hätte gearbeitet". A transitive "fahren" takes "haben": "ich hätte das Auto gefahren", but "ich wäre nach Wien gefahren".`,
      },
      {
        q: `Does the double infinitive also appear outside the Konjunktiv?`,
        a: `Yes. The Perfekt of a modal with another verb also uses it: "Ich habe gestern arbeiten müssen", and so does "lassen": "Ich habe mir die Haare schneiden lassen". In speech, many people simply use the Präteritum instead: "Ich musste gestern arbeiten."`,
      },
    ],
    related: ["konjunktiv-i-indirect-speech", "modal-verbs-of-inference", "als-ob-and-unreal-comparisons", "german-modal-verbs"],
    lessons: [
      "b2-konjunktiv-ii-past-1",
      "b2-pattern-wenn-ich-das-gewusst-haette",
      "b2-minimal-pairs-haette-waere",
      "b2-circuit-haette-ich-das-gewusst",
      "b2-konjunktiv-ii-past-2",
      "b2-choose-explain-real-or-unreal-past",
      "b2-regrets-reproaches-double-infinitive",
      "b2-contrast-solltest-haettest-sollen",
      "b2-error-hunt-double-infinitive",
      "b2-chain-fact-to-reproach",
    ],
  },
  {
    slug: "konjunktiv-i-indirect-speech",
    title: "Konjunktiv I and Reported Speech: Er Sagt, Er Sei Krank",
    description:
      "How German reports what others said: Konjunktiv I forms (er sei, habe, komme), the substitution rule with Konjunktiv II, past and future reporting, questions and commands, and the news register with laut and zufolge.",
    level: "B2",
    intro: [
      `When English reports speech, it shifts the tense back: She said she was ill. German keeps the tense of the original statement and changes the mood instead: "Sie sagte, sie sei krank." That "sei" is Konjunktiv I, the mood of neutral reporting.`,
      `Konjunktiv I tells the reader: this is what someone else said, and I am not vouching for it. That is why you meet it constantly in newspapers, on the radio news and in minutes of meetings, and much less in everyday conversation, where people simply use the indicative or Konjunktiv II.`,
      `The good news: in practice you only need the third person singular, plus "sein" in all persons. Everywhere else Konjunktiv I looks like the indicative, and German replaces it with Konjunktiv II.`,
    ],
    sections: [
      {
        heading: `Forms: infinitive stem + "-e"`,
        body: [
          `Take the infinitive stem and add the Konjunktiv endings: "er komme", "sie habe", "es gebe", "man könne", "sie müsse", "er wisse", "sie werde". No vowel change ever happens: "er fahre", "sie lese", "er nehme" (compare the indicative "er fährt", "sie liest", "er nimmt").`,
          `"Sein" is the only verb with a full set of distinct forms, and it has no "-e" in the singular: "ich sei", "du seist", "er sei", "wir seien", "ihr seiet", "sie seien".`,
        ],
        table: {
          headers: ["", "sein", "haben", "kommen", "können"],
          rows: [
            ["ich", "sei", "(habe → hätte)", "(komme → käme / würde kommen)", "könne"],
            ["du", "seist", "habest", "kommest", "könnest"],
            ["er / sie / es", "sei", "habe", "komme", "könne"],
            ["wir", "seien", "(haben → hätten)", "(kommen → kämen / würden kommen)", "(können → könnten)"],
            ["ihr", "seiet", "habet", "kommet", "könnet"],
            ["sie / Sie", "seien", "(haben → hätten)", "(kommen → kämen / würden kommen)", "(können → könnten)"],
          ],
        },
        examples: [
          { de: "Er sagt, er sei krank.", en: "He says he's ill." },
          { de: "Sie erklärt, dass sie keine Zeit habe.", en: "She explains that she has no time." },
          { de: "Der Sprecher betonte, es gebe keine Probleme.", en: "The spokesman stressed there were no problems." },
          { de: "Sie meint, man könne das Problem lösen.", en: "She thinks the problem can be solved." },
          { de: "Er behauptet, er wisse von nichts.", en: "He claims he knows nothing about it." },
        ],
      },
      {
        heading: `The substitution rule`,
        body: [
          `If the Konjunktiv I form is identical to the indicative, it no longer signals reported speech, so German switches to Konjunktiv II: "sie haben" becomes "sie hätten", "wir kommen" becomes "wir kämen" or, more usually, "wir würden kommen".`,
          `So: "Die Mieter sagen, sie hätten keine Heizung." "Die Minister erklärten, sie würden die Pläne prüfen." Konjunktiv II in reported speech therefore does not necessarily mean doubt; it may just be the replacement form.`,
        ],
        examples: [
          { de: "Die Nachbarn sagen, sie hätten nichts gehört.", en: "The neighbours say they heard nothing." },
          { de: "Die Studenten meinen, sie würden zu wenig unterstützt.", en: "The students feel they get too little support." },
          { de: "Meine Eltern schreiben, sie kämen am Freitag.", en: "My parents write that they're coming on Friday." },
        ],
      },
      {
        heading: `Past and future in reported speech`,
        body: [
          `German has only one past Konjunktiv I: "habe" or "sei" + Partizip II. It covers originals in the Perfekt, Präteritum and Plusquamperfekt alike. "Ich war krank", "ich bin krank gewesen" and "ich war krank gewesen" all become "er sagt, er sei krank gewesen".`,
          `The future uses "werde" + infinitive: "Ich komme morgen" becomes "Sie sagte, sie werde am nächsten Tag kommen". Remember to shift persons, possessives, time and place words: "ich" becomes "er", "mein" becomes "sein", "hier" becomes "dort", "morgen" becomes "am nächsten Tag", "gestern" becomes "am Tag davor".`,
        ],
        table: {
          headers: ["Direct speech", "Reported speech"],
          rows: [
            ["„Ich habe mein Handy hier vergessen.“", "Er sagt, er habe sein Handy dort vergessen."],
            ["„Ich war gestern beim Arzt.“", "Sie sagte, sie sei am Tag davor beim Arzt gewesen."],
            ["„Wir kommen morgen.“", "Sie sagten, sie würden am nächsten Tag kommen."],
            ["„Ich werde mich darum kümmern.“", "Er versprach, er werde sich darum kümmern."],
          ],
        },
        examples: [
          { de: "Der Zeuge sagte, er habe den Mann nie gesehen.", en: "The witness said he had never seen the man." },
          { de: "Sie behauptet, sie sei um zehn zu Hause gewesen.", en: "She claims she was at home at ten." },
          { de: "Der Bürgermeister kündigte an, die neue Linie werde 2028 fertig.", en: "The mayor announced the new line would be finished in 2028." },
        ],
      },
      {
        heading: `Questions, commands and the news register`,
        body: [
          `Reported questions use "ob" (yes/no) or the question word, with the verb at the end: "Sie fragt, ob ich Zeit habe", "Er wollte wissen, wann der Zug komme".`,
          `Reported commands use "sollen": "Komm her!" becomes "Er sagt, ich solle kommen". Polite requests use "mögen": "Sie bat, man möge leise sein."`,
          `News German frames attribution with "laut" + dative ("laut Polizei", "laut dem Bericht"), postposed "zufolge" + dative ("dem Bericht zufolge"), "nach Angaben" + genitive ("nach Angaben der Polizei"), and "wie ... mitteilte". The verb that introduces the speech matters too: "behaupten" (claim, with a hint of doubt), "betonen" (stress), "zugeben" (admit), "bestreiten" (deny).`,
        ],
        examples: [
          { de: "Sie hat gefragt, ob du heute Abend Zeit hast.", en: "She asked whether you've got time tonight. (spoken: indicative)" },
          { de: "Der Arzt sagt, ich solle mehr trinken.", en: "The doctor says I should drink more." },
          { de: "Dem Bericht zufolge seien drei Personen verletzt worden.", en: "According to the report, three people were injured." },
          { de: "Der Minister bestreitet, von dem Plan gewusst zu haben.", en: "The minister denies having known about the plan." },
          { de: "Wie die Polizei mitteilte, sei der Täter geflohen.", en: "As the police reported, the culprit had fled." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Er sagte, er war krank.",
        right: "Er sagte, er sei krank.",
        why: `German does not backshift the tense in reported speech. The original was "Ich bin krank", so the report keeps the present and uses Konjunktiv I. In casual speech "er sagte, er ist krank" is also heard, but "war" makes it sound as if he had said "Ich war krank".`,
      },
      {
        wrong: "Sie sagen, sie haben keine Zeit.",
        right: "Sie sagen, sie hätten keine Zeit.",
        why: `"Sie haben" is identical to the indicative, so in writing German replaces it with Konjunktiv II "hätten".`,
      },
      {
        wrong: "Er sagt, er fährt morgen.",
        right: "Er sagt, er fahre morgen.",
        why: `In written reporting, use Konjunktiv I "fahre" (no vowel change); the indicative is fine only in casual speech. Reported on a later day, the time word shifts too: "Er sagte, er fahre am nächsten Tag."`,
      },
      {
        wrong: "Der Chef sagte, ich muss warten.",
        right: "Der Chef sagte, ich solle warten.",
        why: `A reported command uses "sollen". "Ich müsse warten" reports an obligation, not an order.`,
      },
    ],
    faqs: [
      {
        q: `Do Germans really use Konjunktiv I when they speak?`,
        a: `Rarely in casual conversation. People say "Er hat gesagt, er ist krank" or "er wär krank". In the news, in formal speech, in reports and in the Goethe B2 and C1 exams you need Konjunktiv I, so learn to produce it in writing and recognise it everywhere.`,
      },
      {
        q: `Does Konjunktiv II in reported speech mean the reporter doubts it?`,
        a: `It can. "Er sagt, er sei krank" is neutral; "Er sagt, er wäre krank" may express doubt. But when Konjunktiv II is just replacing a Konjunktiv I that looks like the indicative ("sie hätten"), there is no doubt implied.`,
      },
      {
        q: `Is "dass" necessary?`,
        a: `No. "Er sagt, er sei krank" (verb second, no "dass") and "Er sagt, dass er krank sei" (verb at the end) are both correct. Without "dass" the report sounds more like a quotation.`,
      },
    ],
    related: ["modal-verbs-of-inference", "konjunktiv-ii-past-double-infinitive", "konjunktiv-literature-and-press", "supposition-and-hearsay"],
    lessons: [
      "b2-konjunktiv-i-1",
      "b2-pattern-er-sagt-er-sei",
      "b2-circuit-ich-wird-er",
      "b2-reporting-verbs",
      "b2-konjunktiv-i-2",
      "b2-minimal-pairs-ist-sei-waere",
      "b2-quick-round-indirect-speech",
      "b2-indirect-questions-commands",
      "b2-error-hunt-indirect-speech",
      "b2-circuit-laut-zufolge-angeblich",
    ],
  },
  {
    slug: "passive-alternatives",
    title: "Passive Alternatives: Sein + Zu, Sich Lassen, -Bar and the Zustandspassiv",
    description:
      "Five ways to avoid werden in German: the Zustandspassiv (ist geöffnet), man, sich lassen (das lässt sich reparieren), sein + zu (ist zu bezahlen) and adjectives in -bar, with the nuances of possibility and obligation.",
    level: "B2",
    intro: [
      `By the Intermediate level you can form the werden-passive: "Die Tür wird geöffnet." Good German writing, however, uses a whole family of structures that do a similar job: they put the thing in focus and leave out the person doing the action. Signs, forms, instructions and newspapers are full of them.`,
      `Two ideas run through this family. Some structures add possibility (can be done): "sich lassen", adjectives in "-bar". Others add necessity (must be done): "sein + zu" can mean either, depending on context. And the Zustandspassiv describes not an action but the state that results from it.`,
    ],
    sections: [
      {
        heading: `Zustandspassiv: "ist geöffnet" vs "wird geöffnet"`,
        body: [
          `"Werden" + Partizip II describes a process: "Der Laden wird um acht geöffnet" (someone opens it at eight). "Sein" + Partizip II describes the resulting state: "Der Laden ist bis acht geöffnet" (it is open until eight). English uses is opened for both, which is why learners mix them up.`,
          `Test: can you replace the participle with an adjective? "Die Tür ist geschlossen" = the door is shut (state). "Ist repariert" (is fixed, now) differs from "ist repariert worden" (has been repaired, the event). The Zustandspassiv has a Präteritum too: "Das Fenster war schon geöffnet."`,
        ],
        examples: [
          { de: "Die Bank ist samstags geschlossen.", en: "The bank is closed on Saturdays." },
          { de: "Die Bank wird um 16 Uhr geschlossen.", en: "The bank closes (is shut) at 4 pm." },
          { de: "Keine Sorge, alles ist schon erledigt.", en: "Don't worry, everything's already done." },
          { de: "Das Auto ist repariert worden und ist jetzt wieder fahrbereit.", en: "The car has been repaired and is ready to drive again." },
          { de: "Als wir ankamen, war der Tisch schon gedeckt.", en: "When we arrived, the table was already laid." },
        ],
      },
      {
        heading: `"Sich lassen" + infinitive: can be done`,
        body: [
          `"Das lässt sich reparieren" means it can be repaired. The thing becomes the subject, "sich" is reflexive, and the infinitive goes to the end. It is the natural spoken and written alternative to "kann repariert werden".`,
          `Very common set phrases: "Das lässt sich machen" (that can be arranged), "Darüber lässt sich streiten" (that's debatable), "Das lässt sich nicht ändern" (it can't be helped). Do not confuse it with causative "lassen": "Ich lasse das Auto reparieren" means I'm having the car repaired.`,
        ],
        examples: [
          { de: "Das Fenster lässt sich nicht öffnen.", en: "The window won't open. / can't be opened." },
          { de: "Das Problem lässt sich leicht lösen.", en: "The problem can easily be solved." },
          { de: "Ob das stimmt, lässt sich schwer sagen.", en: "It's hard to say whether that's true." },
          { de: "Am Montag? Ja, das lässt sich machen.", en: "Monday? Yes, that can be arranged." },
        ],
      },
      {
        heading: `"Sein + zu" + infinitive: must or can be done`,
        body: [
          `"Die Rechnung ist bis Freitag zu bezahlen" means the bill must be paid by Friday. This is the language of official letters, rules and instructions. With separable verbs, "zu" goes inside: "Das Formular ist auszufüllen."`,
          `The same structure can mean possibility, especially with negation or adverbs like "leicht", "kaum", "nicht": "Das ist nicht zu glauben" (that's unbelievable), "Er war nicht zu erreichen" (he couldn't be reached). Context decides. Its active cousin "haben + zu" expresses obligation for a person: "Sie haben die Miete pünktlich zu zahlen."`,
        ],
        table: {
          headers: ["Structure", "Meaning", "Example"],
          rows: [
            ["werden-passive", "action", "Die Rechnung wird bezahlt."],
            ["sein + Partizip II", "resulting state", "Die Rechnung ist bezahlt."],
            ["man", "people in general", "Man bezahlt die Rechnung."],
            ["sich lassen + infinitive", "can be done", "Die Rechnung lässt sich online bezahlen."],
            ["sein + zu + infinitive", "must (or can) be done", "Die Rechnung ist sofort zu bezahlen."],
            ["-bar adjective", "can be done", "Die Rechnung ist online bezahlbar."],
          ],
        },
        examples: [
          { de: "Der Antrag ist bis zum 31. März einzureichen.", en: "The application must be submitted by 31 March." },
          { de: "Bei Fragen ist der Hausmeister zu kontaktieren.", en: "Any questions should be addressed to the caretaker." },
          { de: "Der Lärm war kaum zu ertragen.", en: "The noise was almost unbearable." },
          { de: "Gegen das Urteil ist nichts zu machen.", en: "Nothing can be done about the ruling." },
          { de: "Wir haben noch viel zu tun.", en: "We still have a lot to do." },
        ],
      },
      {
        heading: `Adjectives in "-bar", "-lich" and "-fähig"`,
        body: [
          `"-bar" turns a transitive verb into an adjective meaning can be done: "machbar" (doable), "essbar" (edible), "erreichbar" (reachable), "lesbar" (legible), "unvorstellbar" (unimaginable). It is the German equivalent of English -able.`,
          `A smaller group uses "-lich" with the same meaning: "verständlich" (understandable), "unverzeihlich" (unforgivable), "erhältlich" (available). "-fähig" means capable of: "lernfähig", "zahlungsfähig". Learn the established words rather than inventing new ones.`,
        ],
        examples: [
          { de: "Ist das Wasser trinkbar?", en: "Is the water drinkable?" },
          { de: "Der Plan ist durchaus machbar.", en: "The plan is perfectly doable." },
          { de: "Ich bin ab 9 Uhr telefonisch erreichbar.", en: "I can be reached by phone from 9 am." },
          { de: "Das Medikament ist rezeptfrei erhältlich.", en: "The medicine is available without a prescription." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Das Geschäft wird sonntags geschlossen.",
        right: "Das Geschäft ist sonntags geschlossen.",
        why: `You mean the state (it is closed on Sundays), so use "sein". "Wird geschlossen" describes the act of closing it.`,
      },
      {
        wrong: "Das Formular ist zu ausfüllen.",
        right: "Das Formular ist auszufüllen.",
        why: `With separable verbs, "zu" goes between the prefix and the stem and is written as one word: "auszufüllen", "anzurufen", "einzureichen".`,
      },
      {
        wrong: "Das lässt reparieren.",
        right: "Das lässt sich reparieren.",
        why: `The possibility meaning needs the reflexive "sich". Without it, "lassen" means to have something done and needs a person as subject.`,
      },
      {
        wrong: "Das Problem ist lösbar werden.",
        right: "Das Problem ist lösbar. / Das Problem kann gelöst werden.",
        why: `"-bar" adjectives already contain the passive idea of possibility. Do not combine them with "werden".`,
      },
    ],
    faqs: [
      {
        q: `Does "ist zu machen" mean must or can?`,
        a: `Both are possible. In rules and instructions it means must ("Der Ausweis ist vorzuzeigen"). With negation or an adverb of difficulty it usually means can ("Das ist nicht zu schaffen", "leicht zu verstehen"). Context nearly always makes it clear.`,
      },
      {
        q: `Which alternative is most common in speech?`,
        a: `"Man" and "sich lassen" are everyday spoken German. "Sein + zu" belongs to written and official language, and the Zustandspassiv is common everywhere.`,
      },
      {
        q: `Can every verb take "-bar"?`,
        a: `No. It works mostly with transitive verbs, and many possible forms are not used. Learn established words such as "machbar", "essbar", "vergleichbar", "unverzichtbar" and use "lässt sich" or "kann ... werden" otherwise.`,
      },
    ],
    related: ["extended-participial-attributes", "nominal-style", "impersonal-passive-constructions", "amtsdeutsch-legal-german"],
    lessons: [
      "b2-zustandspassiv",
      "b2-minimal-pairs-wird-ist-geoeffnet",
      "b2-circuit-schon-erledigt",
      "b2-passive-alternatives-1",
      "b2-pattern-das-laesst-sich-machen",
      "b2-quick-round-ist-zu-muss",
      "b2-passive-alternatives-2",
      "b2-transformations-ohne-werden",
      "b2-error-hunt-passive",
      "b2-choose-explain-man-lassen-zu",
      "b2-mixed-practice-schilder-formulare",
    ],
  },
  {
    slug: "extended-participial-attributes",
    title: "Extended Participial Attributes: Die von Ihm Geschriebene Mail",
    description:
      "How German packs a whole relative clause between the article and the noun: Partizip I and II as attributes, extended participle phrases (der seit Jahren leerstehende Bahnhof), the gerundive (die zu erledigenden Aufgaben) and how to unpack them.",
    level: "B2",
    intro: [
      `German newspapers, reports and textbooks love a structure English hardly has: a long phrase squeezed between the article and the noun. "Die von ihm gestern geschriebene Mail" is literally the by him yesterday written e-mail, i.e. the e-mail he wrote yesterday.`,
      `These extended attributes are relative clauses in disguise. Once you know how to unpack them, long noun phrases in the press stop being a wall of words. And once you can build them, your written German instantly sounds more advanced.`,
    ],
    sections: [
      {
        heading: `Partizip I and Partizip II as adjectives`,
        body: [
          `Partizip I (infinitive + "-d": "lachend", "steigend", "schlafend") has an active, ongoing meaning: "das schlafende Kind" (the child who is sleeping). Partizip II ("geschrieben", "renoviert", "gestohlen") usually has a passive or completed meaning: "das gestohlene Fahrrad" (the bike that was stolen).`,
          `Used before a noun, both take ordinary adjective endings: "ein lachendes Kind", "die steigenden Preise", "mit dem renovierten Bahnhof". For intransitive verbs with "sein", Partizip II is active and completed: "der angekommene Zug" (the train that has arrived).`,
        ],
        examples: [
          { de: "die steigenden Mieten", en: "the rising rents" },
          { de: "ein gut bezahlter Job", en: "a well-paid job" },
          { de: "Der verletzte Spieler wurde ausgewechselt.", en: "The injured player was substituted." },
          { de: "Wir suchen eine möblierte Wohnung.", en: "We're looking for a furnished flat." },
          { de: "der begeisternde Lehrer / der begeisterte Lehrer", en: "the inspiring teacher / the enthusiastic teacher" },
        ],
      },
      {
        heading: `Extending the attribute`,
        body: [
          `Anything that could stand in front of the participle in a relative clause can move in front of it in the attribute: time, place, manner, objects, "von" + agent. The participle with its ending stands right before the noun, and the whole block sits after the article.`,
          `To build one: take the relative clause, drop the relative pronoun and the auxiliary, and move everything before the noun. "Der Bahnhof, der seit Jahren leer steht" → "der seit Jahren leerstehende Bahnhof". "Die Mail, die von ihm geschrieben wurde" → "die von ihm geschriebene Mail".`,
        ],
        table: {
          headers: ["Relative clause", "Extended attribute"],
          rows: [
            ["das Buch, das ich gestern gekauft habe", "das gestern gekaufte Buch"],
            ["die Preise, die seit Monaten steigen", "die seit Monaten steigenden Preise"],
            ["die Zeche, die 1986 stillgelegt wurde", "die 1986 stillgelegte Zeche"],
            ["ein Risiko, das man nicht unterschätzen darf", "ein nicht zu unterschätzendes Risiko"],
          ],
        },
        examples: [
          { de: "Die im Jahr 2020 eröffnete Bibliothek ist jeden Tag voll.", en: "The library, which opened in 2020, is full every day." },
          { de: "Der seit Jahren leerstehende Bahnhof soll ein Kulturzentrum werden.", en: "The station, which has stood empty for years, is to become an arts centre." },
          { de: "Wir danken allen an dem Projekt beteiligten Kolleginnen und Kollegen.", en: "We thank all the colleagues involved in the project." },
          { de: "Die von der Regierung angekündigten Maßnahmen reichen nicht aus.", en: "The measures announced by the government are not enough." },
        ],
      },
      {
        heading: `The gerundive: "die zu erledigenden Aufgaben"`,
        body: [
          `"Zu" + Partizip I before a noun means which must (or can) be done. It is the attributive form of "sein + zu": "Die Aufgaben sind zu erledigen" → "die zu erledigenden Aufgaben" (the tasks to be done).`,
          `It is formal but common in administrative and academic texts: "die einzureichenden Unterlagen" (the documents to be submitted), "ein nicht zu unterschätzendes Problem" (a problem not to be underestimated). With separable verbs, "zu" goes inside: "einzureichend-".`,
        ],
        examples: [
          { de: "Die zu erledigenden Aufgaben stehen auf der Liste.", en: "The tasks to be done are on the list." },
          { de: "Bitte bringen Sie alle einzureichenden Unterlagen mit.", en: "Please bring all the documents to be submitted." },
          { de: "Das ist ein kaum zu lösendes Problem.", en: "That's a problem that can hardly be solved." },
        ],
      },
      {
        heading: `Reading strategy: unpack from the outside in`,
        body: [
          `When you meet an article followed by something that is clearly not the noun ("die von ..."), jump ahead to find the noun: it follows the first participle or adjective with an ending. Read article + noun first, then go back and turn the middle into a relative clause.`,
          `"Der von vielen Experten seit Langem geforderte Ausbau des Netzes" → "der Ausbau des Netzes, den viele Experten seit Langem gefordert haben" (the expansion of the network which many experts have long called for).`,
        ],
        examples: [
          { de: "der von vielen Experten seit Langem geforderte Ausbau", en: "the expansion that many experts have long been calling for" },
          { de: "die gestern in Hamburg gelandete Maschine", en: "the plane that landed in Hamburg yesterday" },
          { de: "eine ständig wachsende Zahl von Nutzern", en: "a constantly growing number of users" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "die gestern gekauft Bücher",
        right: "die gestern gekauften Bücher",
        why: `The participle is an adjective here and needs the normal adjective ending.`,
      },
      {
        wrong: "der gestiegende Preis",
        right: "der gestiegene Preis / der steigende Preis",
        why: `Partizip II of "steigen" is "gestiegen". Partizip I is "steigend". Do not blend them: "gestiegene" (has risen) vs "steigende" (is rising).`,
      },
      {
        wrong: "Der Film ist so langweilend.",
        right: "Der Film ist so langweilig.",
        why: `Not every English -ing / -ed pair maps onto Partizip I and II: boring is the ordinary adjective "langweilig" (bored is "gelangweilt", or "Mir ist langweilig"). Check pairs such as "spannend / gespannt", "langweilig / gelangweilt".`,
      },
      {
        wrong: "die von ihm schreibende Mail",
        right: "die von ihm geschriebene Mail",
        why: `The e-mail did not write anything; it was written. Passive and completed meaning needs Partizip II.`,
      },
    ],
    faqs: [
      {
        q: `Should I use extended attributes when I speak?`,
        a: `Short ones, yes ("das gestern gekaufte Brot" is normal). Long ones belong to writing. In conversation, a relative clause sounds more natural.`,
      },
      {
        q: `How long can these phrases get?`,
        a: `In legal and academic German, very long. In good journalism, a block of three to six words before the participle is typical. If you write more than that, consider a relative clause instead.`,
      },
      {
        q: `What is the difference between "spannend" and "gespannt"?`,
        a: `"Spannend" (Partizip I-type) describes what causes the feeling: an exciting film. "Gespannt" (Partizip II-type) describes the person who feels it: "Ich bin gespannt" (I'm curious, I can't wait). The same contrast exists in "überraschend / überrascht", "enttäuschend / enttäuscht".`,
      },
    ],
    related: ["passive-alternatives", "nominal-style", "participle-and-infinitive-constructions", "nominalstil-vs-verbalstil"],
    lessons: [
      "b2-partizipialattribute-1",
      "b2-pattern-das-gestern-gekaufte-buch",
      "b2-chain-relative-to-participle",
      "b2-minimal-pairs-begeisternde-begeisterte",
      "b2-partizipialattribute-2",
      "b2-circuit-zeitungsdeutsch",
      "b2-contrast-spannend-gespannt",
      "b2-participle-adverbs-clauses",
      "b2-error-hunt-participles",
      "b2-choose-explain-translating-ing",
    ],
  },
  {
    slug: "nominal-style",
    title: "Nominal Style: From Weil to Wegen, From Clause to Noun Phrase",
    description:
      "How German turns verbs and clauses into nouns (die Lieferung, das Lesen, der Anstieg), how conjunctions become prepositions (weil → wegen, nachdem → nach, obwohl → trotz), and how to unpack formal noun phrases again.",
    level: "B2",
    intro: [
      `Formal German prefers nouns to verbs. Where a conversation says "Weil der Zug zu spät ankam, haben wir den Anschluss verpasst", a report writes "Wegen der verspäteten Ankunft des Zuges wurde der Anschluss verpasst." Same content, one clause instead of two, and the people disappear.`,
      `This is called Nominalstil (nominal style). You need it to read news, official letters and university texts, and to write the formal parts of the Goethe B2 exam. You also need the reverse skill, Verbalisierung: turning heavy noun phrases back into plain clauses.`,
    ],
    sections: [
      {
        heading: `Turning verbs into nouns`,
        body: [
          `German has four main ways. The "-ung" suffix ("liefern" → "die Lieferung", "entscheiden" → "die Entscheidung") always gives a feminine noun. The infinitive as a noun ("lesen" → "das Lesen") is always neuter and means the activity. Stem nouns, often with a vowel change ("ankommen" → "die Ankunft", "steigen" → "der Anstieg", "verlaufen" → "der Verlauf"), are mostly masculine. A few add "-e": "suchen" → "die Suche".`,
          `Adjectives become nouns with "-heit", "-keit" and "-igkeit" (all feminine): "frei" → "die Freiheit", "möglich" → "die Möglichkeit", "schnell" → "die Schnelligkeit".`,
        ],
        table: {
          headers: ["Verb or adjective", "Noun", "Gender rule"],
          rows: [
            ["liefern, beantragen", "die Lieferung, die Beantragung", "-ung: always die"],
            ["lesen, rauchen", "das Lesen, das Rauchen", "infinitive: always das"],
            ["ankommen, steigen, beginnen", "die Ankunft, der Anstieg, der Beginn", "stem nouns: learn each"],
            ["suchen, reisen", "die Suche, die Reise", "-e: usually die"],
            ["frei, möglich, pünktlich", "die Freiheit, die Möglichkeit, die Pünktlichkeit", "-heit / -keit: always die"],
          ],
        },
        examples: [
          { de: "Die Lieferung erfolgt innerhalb von drei Tagen.", en: "Delivery takes place within three days." },
          { de: "Das Rauchen ist hier verboten.", en: "Smoking is prohibited here." },
          { de: "Der Anstieg der Preise beunruhigt viele.", en: "The rise in prices worries many people." },
          { de: "Die Suche nach einer Wohnung dauerte Monate.", en: "The search for a flat took months." },
        ],
      },
      {
        heading: `Subject and object become a genitive`,
        body: [
          `When a clause becomes a noun phrase, its subject or object usually turns into a genitive attribute after the noun: "Der Zug kommt an" → "die Ankunft des Zuges"; "Man repariert die Brücke" → "die Reparatur der Brücke". Adverbs become adjectives: "Er kam pünktlich an" → "seine pünktliche Ankunft".`,
          `With names, use the -s genitive ("Annas Ankunft") or "von" ("die Ankunft von Anna"). Without an article, "von" + dative is needed: "die Lieferung von Möbeln". The agent of an action can follow with "durch": "die Prüfung der Anträge durch das Amt".`,
        ],
        examples: [
          { de: "Der Zug kommt an. → die Ankunft des Zuges", en: "The train arrives. → the arrival of the train" },
          { de: "Die Firma wurde gegründet. → die Gründung der Firma", en: "The company was founded. → the founding of the company" },
          { de: "Die Kosten steigen stark. → der starke Anstieg der Kosten", en: "Costs are rising sharply. → the sharp rise in costs" },
        ],
      },
      {
        heading: `Conjunctions become prepositions`,
        body: [
          `Each common conjunction has a nominal partner. The subordinate clause disappears and a prepositional phrase takes its place. Watch the cases: "wegen", "trotz", "während" and "aufgrund" take the genitive; "bei", "nach", "vor" and "seit" take the dative; "für" and "durch" take the accusative.`,
        ],
        table: {
          headers: ["Clause", "Noun phrase"],
          rows: [
            ["weil es regnete", "wegen des Regens"],
            ["obwohl er krank war", "trotz seiner Krankheit"],
            ["als / wenn wir ankamen", "bei unserer Ankunft"],
            ["nachdem sie das Studium beendet hatte", "nach ihrem Studium / nach Abschluss ihres Studiums"],
            ["bevor die Sitzung beginnt", "vor Beginn der Sitzung"],
            ["während wir aßen", "während des Essens"],
            ["damit die Umwelt geschützt wird", "zum Schutz der Umwelt"],
            ["indem man Energie spart", "durch das Sparen von Energie"],
          ],
        },
        examples: [
          { de: "Wegen des Streiks fallen heute viele Züge aus.", en: "Because of the strike, many trains are cancelled today." },
          { de: "Bei Regen findet das Konzert in der Halle statt.", en: "If it rains, the concert will be held in the hall." },
          { de: "Nach Abschluss der Bauarbeiten wird die Straße wieder geöffnet.", en: "Once the building work is finished, the road will reopen." },
          { de: "Zur Vermeidung von Missverständnissen schicke ich Ihnen alles schriftlich.", en: "To avoid misunderstandings, I'll send you everything in writing." },
        ],
      },
      {
        heading: `Verbalisierung: unpacking the noun phrase`,
        body: [
          `To understand a dense sentence, or to rewrite it for speech, reverse the process: find the main noun, turn it back into a verb, and turn its genitive into a subject or object. "Nach der Rückkehr des Ministers aus Brüssel" → "Nachdem der Minister aus Brüssel zurückgekehrt war".`,
          `Good writing balances the two styles. A text with only nouns is hard to read; a formal letter with only verbs sounds chatty.`,
        ],
        examples: [
          { de: "Trotz intensiver Bemühungen konnte keine Lösung gefunden werden.", en: "Despite intensive efforts, no solution could be found." },
          { de: "Obwohl man sich intensiv bemüht hat, hat man keine Lösung gefunden.", en: "Although people tried hard, they found no solution." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Der Lieferung kommt morgen.",
        right: "Die Lieferung kommt morgen.",
        why: `Nouns formed with the suffix "-ung" are feminine, without exception.`,
      },
      {
        wrong: "wegen dem Regen (in a formal letter)",
        right: "wegen des Regens",
        why: `"Wegen" + dative is common in speech, but formal writing expects the genitive.`,
      },
      {
        wrong: "die Ankunft von dem Zug",
        right: "die Ankunft des Zuges",
        why: `When the noun has an article, the genitive is the normal written form. "Von" + dative is used without an article or in speech.`,
      },
      {
        wrong: "Bei wir ankamen, ...",
        right: "Bei unserer Ankunft ... / Als wir ankamen, ...",
        why: `"Bei" is a preposition and needs a noun phrase. With a clause, use the conjunction "als" or "wenn".`,
      },
    ],
    faqs: [
      {
        q: `Is nominal style good style?`,
        a: `It is expected in administrative, legal, academic and business texts, and in news headlines. Overdone, it becomes "Behördendeutsch" (officialese). For speech and personal letters, stay verbal.`,
      },
      {
        q: `How do I know the gender of a stem noun like "Anstieg" or "Ankunft"?`,
        a: `Most stem nouns without a suffix are masculine ("der Anstieg", "der Verlauf", "der Beginn"), but those in "-t" or "-ft" are often feminine ("die Ankunft", "die Abfahrt", "die Sicht"). Learn each with its article.`,
      },
      {
        q: `Which is better, "das Lesen" or "die Lesung"?`,
        a: `They mean different things. "Das Lesen" is the activity of reading. "Die Lesung" is a reading event (an author reading from a book). "Der Leser" is the reader.`,
      },
    ],
    related: ["nominalstil-vs-verbalstil", "funktionsverbgefuege", "genitive-prepositions", "extended-participial-attributes"],
    lessons: [
      "b2-nominal-style-1",
      "b2-pattern-die-ankunft-des-zuges",
      "b2-minimal-pairs-das-lesen-die-lesung",
      "b2-circuit-weil-wegen-als-bei",
      "b2-chain-clause-to-phrase",
      "b2-quick-round-gender-nominalisations",
      "b2-nominal-style-2",
      "b2-transformations-unpack-the-noun-phrase",
      "b2-error-hunt-nominal-style",
      "b2-funktionsverbgefuege",
    ],
  },
  {
    slug: "modal-verbs-of-inference",
    title: "Modal Verbs of Inference: Er Muss Krank Sein, Sie Soll Reich Sein",
    description:
      "The subjective meaning of German modal verbs: muss, dürfte, kann and könnte on a scale of certainty, soll for hearsay and will for the subject's own claim, in the present and with the perfect infinitive.",
    level: "B2",
    intro: [
      `German modal verbs have two lives. In their objective use they describe obligation, permission or ability: "Ich muss arbeiten." In their subjective use they express the speaker's judgement about how likely something is: "Er muss krank sein" (he must be ill, I'm almost sure).`,
      `English does this with must, may and might too, but German adds two very useful extras: "sollen" for things you have heard ("Er soll sehr reich sein" = he is said to be very rich) and "wollen" for something the subject claims about themselves ("Sie will ihn gesehen haben" = she claims to have seen him).`,
    ],
    sections: [
      {
        heading: `The certainty scale`,
        body: [
          `From most to least certain: "muss" (I am almost sure), "wird wohl" (I assume), "dürfte" (probably), "kann / könnte" (possibly), "kann nicht" (impossible). "Dürfte" is Konjunktiv II of "dürfen", but here it has nothing to do with permission: "Das dürfte teuer sein" means that's likely to be expensive.`,
          `Negation: the opposite of "muss" is "kann nicht", not "muss nicht". "Er kann nicht zu Hause sein" means he can't be at home (impossible). "Er muss nicht zu Hause sein" would mean he doesn't have to be at home.`,
        ],
        table: {
          headers: ["Certainty", "Modal", "Example"],
          rows: [
            ["about 95 %", "muss", "Sie muss krank sein."],
            ["about 80 %", "wird wohl", "Sie wird wohl krank sein."],
            ["about 75 %", "dürfte", "Sie dürfte krank sein."],
            ["about 50 %", "kann / könnte", "Sie könnte krank sein."],
            ["0 %", "kann nicht", "Sie kann nicht krank sein, ich habe sie gerade gesehen."],
          ],
        },
        examples: [
          { de: "Das Licht ist an, er muss zu Hause sein.", en: "The light's on, he must be at home." },
          { de: "Die Reparatur dürfte etwa 500 Euro kosten.", en: "The repair will probably cost about 500 euros." },
          { de: "Es könnte morgen regnen.", en: "It might rain tomorrow." },
          { de: "Das kann nicht stimmen!", en: "That can't be right!" },
        ],
      },
      {
        heading: `"Sollen" for hearsay, "wollen" for claims`,
        body: [
          `"Sollen" reports what other people say: "Der Film soll sehr gut sein" (the film is supposed to be very good; people say so). The speaker does not vouch for it. It is the spoken equivalent of "angeblich" or Konjunktiv I.`,
          `"Wollen" reports what the subject says about themselves, usually with scepticism: "Er will nichts davon gewusst haben" (he claims not to have known anything about it). It is common in court and police reports.`,
        ],
        examples: [
          { de: "Das neue Restaurant soll sehr teuer sein.", en: "The new restaurant is said to be very expensive." },
          { de: "Der Minister soll von dem Skandal gewusst haben.", en: "The minister is alleged to have known about the scandal." },
          { de: "Sie will den Täter gesehen haben.", en: "She claims to have seen the culprit." },
          { de: "Er will Millionär sein, aber er fährt einen alten Golf.", en: "He claims to be a millionaire, but he drives an old Golf." },
        ],
      },
      {
        heading: `Talking about the past: the perfect infinitive`,
        body: [
          `For a judgement about the past, the modal stays in the present and is followed by the perfect infinitive (Partizip II + "haben" or "sein"): "Er muss krank gewesen sein" (he must have been ill), "Sie dürfte den Zug verpasst haben" (she has probably missed the train), "Er soll das Geld gestohlen haben" (he is said to have stolen the money).`,
          `Compare the objective past with the double infinitive: "Er hat kommen müssen" (he had to come; obligation). "Er muss gekommen sein" (he must have come; deduction). This contrast is a classic exam question.`,
        ],
        table: {
          headers: ["Meaning", "Objective (fact)", "Subjective (judgement)"],
          rows: [
            ["müssen", "Er hat arbeiten müssen. (He had to work.)", "Er muss gearbeitet haben. (He must have worked.)"],
            ["können", "Sie hat nicht kommen können. (She couldn't come.)", "Sie kann nicht gekommen sein. (She can't have come.)"],
            ["sollen", "Er sollte anrufen. (He was supposed to call.)", "Er soll angerufen haben. (He is said to have called.)"],
          ],
        },
        examples: [
          { de: "Der Boden ist nass, es muss geregnet haben.", en: "The ground is wet, it must have rained." },
          { de: "Sie dürfte inzwischen angekommen sein.", en: "She has probably arrived by now." },
          { de: "Er kann das nicht allein geschrieben haben.", en: "He can't have written that on his own." },
          { de: "Die Täter sollen durch ein Fenster eingestiegen sein.", en: "The burglars are said to have got in through a window." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Er muss nicht zu Hause sein, das Auto ist weg.",
        right: "Er kann nicht zu Hause sein, das Auto ist weg.",
        why: `The negative deduction (can't be) is "kann nicht". "Muss nicht" means doesn't have to.`,
      },
      {
        wrong: "Sie hat krank sein müssen.",
        right: "Sie muss krank gewesen sein.",
        why: `For a deduction about the past, keep the modal in the present and use the perfect infinitive. "Hat ... müssen" expresses past obligation.`,
      },
      {
        wrong: "Er sollte reich sein. (meaning: people say he is rich)",
        right: "Er soll reich sein.",
        why: `Hearsay uses the present "soll". "Sollte" means should or was supposed to.`,
      },
      {
        wrong: "Er will gesehen den Unfall haben.",
        right: "Er will den Unfall gesehen haben.",
        why: `The perfect infinitive stays together at the end: participle, then "haben" or "sein".`,
      },
    ],
    faqs: [
      {
        q: `How is "dürfte" different from "könnte"?`,
        a: `"Dürfte" is more confident: probably. "Könnte" is just a possibility: might. Business and news German use "dürfte" a lot for estimates: "Die Kosten dürften steigen."`,
      },
      {
        q: `Is "sollen" for hearsay the same as Konjunktiv I?`,
        a: `Both distance the speaker from the claim. "Er soll krank sein" is spoken and short; "Er sei krank, heißt es" is written and formal. "Sollen" does not need a reporting verb.`,
      },
      {
        q: `Can "mögen" express probability too?`,
        a: `Yes, in elevated style: "Er mag etwa 50 Jahre alt sein" (he may be about 50) and in concessions: "Das mag sein, aber ..." (that may be so, but ...).`,
      },
    ],
    related: ["futur-ii-supposition", "konjunktiv-i-indirect-speech", "supposition-and-hearsay", "german-modal-verbs"],
    lessons: [
      "b2-subjective-modals-1",
      "b2-pattern-sie-muss-krank-sein",
      "b2-subjective-modals-2",
      "b2-minimal-pairs-hat-kommen-muessen",
      "b2-error-hunt-subjective-modals",
      "b2-quick-round-certainty-scale",
      "b2-mastery-check-supposition",
      "b2-contrast-soll-will-sei",
      "b2-transformations-fact-to-supposition",
    ],
  },
  {
    slug: "futur-ii-supposition",
    title: "Futur II and Supposition: Er Wird Es Vergessen Haben",
    description:
      "The forms of Futur II (wird gemacht haben, wird gegangen sein), its rare use for the completed future, its everyday use for assumptions with wohl, and the adverbs of probability wohl, vermutlich, wahrscheinlich and bestimmt.",
    level: "B2",
    intro: [
      `Futur II looks intimidating ("Sie wird den Bus verpasst haben") but you need it mostly for one everyday job: guessing what has probably happened. Your friend is late? "Sie wird den Bus verpasst haben" means she's probably missed the bus.`,
      `In the same way, Futur I with "wohl" makes a guess about the present: "Er wird wohl krank sein" (he's probably ill). The future tense in German is as much about probability as about time.`,
    ],
    sections: [
      {
        heading: `Form: "werden" + perfect infinitive`,
        body: [
          `Futur II is the present of "werden" plus the perfect infinitive (Partizip II + "haben" or "sein"). The auxiliary choice is the same as in the Perfekt: "ich werde gegessen haben", "sie wird gegangen sein".`,
          `In a subordinate clause the conjugated "werden" goes to the end: "Ich glaube, dass er den Termin vergessen haben wird."`,
        ],
        table: {
          headers: ["", "with haben", "with sein"],
          rows: [
            ["ich", "werde ... gemacht haben", "werde ... gegangen sein"],
            ["du", "wirst ... gemacht haben", "wirst ... gegangen sein"],
            ["er / sie / es", "wird ... gemacht haben", "wird ... gegangen sein"],
            ["wir / sie / Sie", "werden ... gemacht haben", "werden ... gegangen sein"],
            ["ihr", "werdet ... gemacht haben", "werdet ... gegangen sein"],
          ],
        },
        examples: [
          { de: "Sie wird den Bus verpasst haben.", en: "She'll have missed the bus. / She's probably missed the bus." },
          { de: "Er wird schon nach Hause gegangen sein.", en: "He'll have gone home already." },
          { de: "Ich nehme an, dass sie es vergessen haben wird.", en: "I assume she'll have forgotten." },
        ],
      },
      {
        heading: `The completed future (and its everyday replacement)`,
        body: [
          `Futur II can describe an action that will be finished by a point in the future: "Bis Freitag werde ich den Bericht geschrieben haben" (by Friday I will have written the report). This is correct but formal.`,
          `In everyday German the Perfekt does the same job, with a time phrase: "Bis Freitag habe ich den Bericht geschrieben." Just as the present often replaces Futur I, the Perfekt often replaces Futur II.`,
        ],
        examples: [
          { de: "In zehn Jahren werden wir das Haus abbezahlt haben.", en: "In ten years we'll have paid off the house." },
          { de: "Bis du zurückkommst, habe ich aufgeräumt.", en: "By the time you get back, I'll have tidied up." },
          { de: "Morgen um diese Zeit sind wir schon gelandet.", en: "This time tomorrow we'll already have landed." },
        ],
      },
      {
        heading: `Supposition: Futur I and II with "wohl"`,
        body: [
          `For a guess about the present use Futur I: "Er wird (wohl) im Büro sein" (he's probably at the office). For a guess about the past use Futur II: "Er wird (wohl) den Zug genommen haben" (he probably took the train).`,
          `"Wohl", "schon", "sicher" and "wahrscheinlich" make the guessing meaning clear. Without them, Futur I can be a real future or a prediction: "Er wird kommen" (he will come).`,
          `Adverbs of probability give the same nuance with any tense: "bestimmt" / "sicher" (definitely, surely), "wahrscheinlich" / "vermutlich" (probably), "wohl" (I suppose), "vielleicht" (maybe), "kaum" (hardly).`,
        ],
        examples: [
          { de: "Wo ist Tom? – Er wird wohl noch schlafen.", en: "Where's Tom? – He's probably still asleep." },
          { de: "Sie wird ihr Handy zu Hause vergessen haben.", en: "She's probably left her phone at home." },
          { de: "Das wird schon stimmen.", en: "I'm sure that's right." },
          { de: "Er hat vermutlich den letzten Bus verpasst.", en: "He has probably missed the last bus." },
          { de: "Bei dem Wetter kommt heute kaum jemand.", en: "In this weather hardly anyone will come today." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Er wird den Zug verpasst sein.",
        right: "Er wird den Zug verpasst haben.",
        why: `"Verpassen" takes "haben" in the Perfekt ("hat verpasst"), so Futur II uses "haben" too.`,
      },
      {
        wrong: "Sie wird wohl schon angekommen haben.",
        right: "Sie wird wohl schon angekommen sein.",
        why: `"Ankommen" takes "sein". The auxiliary in Futur II follows the Perfekt.`,
      },
      {
        wrong: "..., dass er es wird vergessen haben.",
        right: "..., dass er es vergessen haben wird.",
        why: `In a subordinate clause, the finite verb "wird" goes to the end, after the perfect infinitive.`,
      },
    ],
    faqs: [
      {
        q: `Is Futur II common?`,
        a: `As a completed future, not very; the Perfekt usually replaces it. As supposition about the past, yes, it is everyday spoken German: "Der wird das vergessen haben."`,
      },
      {
        q: `What is the difference between "Er wird krank sein" and "Er muss krank sein"?`,
        a: `"Er wird (wohl) krank sein" is an assumption, fairly confident. "Er muss krank sein" is a strong deduction based on evidence. "Er dürfte krank sein" is in between in tone and common in formal speech.`,
      },
      {
        q: `Can I drop "wohl"?`,
        a: `Yes, especially in Futur II, where the meaning is clear anyway. But "wohl" or "schon" signals the guessing reading immediately and sounds natural.`,
      },
    ],
    related: ["modal-verbs-of-inference", "supposition-and-hearsay", "konjunktiv-ii-past-double-infinitive"],
    lessons: [
      "b2-futur-ii-1",
      "b2-pattern-bis-dahin",
      "b2-minimal-pairs-wird-machen-wird-gemacht-haben",
      "b2-futur-ii-2",
      "b2-circuit-wohl-vermutlich-bestimmt",
      "b2-story-gaps-die-verspaetete-freundin",
      "b2-choose-explain-futur-ii-or-modal",
      "b2-mastery-check-supposition",
    ],
  },
  {
    slug: "concessive-and-consequential-clauses",
    title: "Concession, Cause and Consequence: Obwohl, Trotzdem, Zumal, Sodass, Indem",
    description:
      "The Upper-intermediate toolkit for linking ideas in German: obwohl vs trotzdem vs trotz, zwar ... aber, während and wohingegen for contrast, da and zumal for causes, sodass and so ... dass for results, and indem, ohne dass, anstatt dass for means and manner.",
    level: "B2",
    intro: [
      `One idea, three grammatical shapes: "Obwohl es regnete, gingen wir spazieren" (conjunction, verb at the end), "Es regnete, trotzdem gingen wir spazieren" (adverb, verb second), "Trotz des Regens gingen wir spazieren" (preposition + genitive). English uses although, nevertheless and despite in the same way, but German punishes the wrong word order immediately.`,
      `This guide collects the connectors of concession (although), contrast (whereas), cause (since), consequence (so that) and means (by doing) that the Goethe B2 exam expects you to use in argument.`,
    ],
    sections: [
      {
        heading: `Concession: three structures for one idea`,
        body: [
          `"Obwohl" (and its formal variants "obgleich", "obschon") introduces a subordinate clause: verb at the end. "Trotzdem" and "dennoch" are adverbs: they take the first position in the main clause and the verb comes straight after. "Trotz" is a preposition with the genitive (dative in casual speech).`,
          `"Zwar ... aber" concedes one point and then weighs against it: "Die Wohnung ist zwar klein, aber sie ist günstig." "Auch wenn" and "selbst wenn" mean even if: "Selbst wenn ich Zeit hätte, würde ich nicht mitkommen."`,
        ],
        table: {
          headers: ["Type", "Word", "Word order", "Example"],
          rows: [
            ["conjunction", "obwohl, obgleich", "verb at the end", "Obwohl er müde war, arbeitete er weiter."],
            ["adverb", "trotzdem, dennoch", "verb second", "Er war müde, trotzdem arbeitete er weiter."],
            ["preposition", "trotz + genitive", "noun phrase", "Trotz seiner Müdigkeit arbeitete er weiter."],
            ["two-part", "zwar ... aber", "two main clauses", "Er war zwar müde, aber er arbeitete weiter."],
          ],
        },
        examples: [
          { de: "Obwohl das Hotel teuer war, war der Service schlecht.", en: "Although the hotel was expensive, the service was poor." },
          { de: "Der Zug hatte Verspätung. Trotzdem kamen wir pünktlich an.", en: "The train was late. Even so, we arrived on time." },
          { de: "Trotz des schlechten Wetters fand das Fest statt.", en: "Despite the bad weather, the festival went ahead." },
          { de: "Das klingt zwar gut, aber ich bin skeptisch.", en: "That sounds good, admittedly, but I'm sceptical." },
          { de: "Auch wenn du recht hast, solltest du höflicher sein.", en: "Even if you're right, you should be more polite." },
        ],
      },
      {
        heading: `Contrast: "während", "wohingegen", "dagegen", "hingegen"`,
        body: [
          `"Während" and "wohingegen" contrast two facts and send the verb to the end: "Während mein Bruder Sport liebt, lese ich lieber." "Während" can also mean while (time), so context decides.`,
          `"Dagegen", "hingegen" and "im Gegensatz dazu" are adverbs (verb second, or placed in the middle of the clause): "Mein Bruder liebt Sport. Ich hingegen lese lieber." "Im Gegensatz zu" + dative is the prepositional version: "Im Gegensatz zu ihm lese ich lieber."`,
        ],
        examples: [
          { de: "Während die Mieten in München steigen, sinken sie auf dem Land.", en: "While rents are rising in Munich, they are falling in the countryside." },
          { de: "Der Norden ist flach, wohingegen der Süden bergig ist.", en: "The north is flat, whereas the south is mountainous." },
          { de: "Im Büro ist es laut. Zu Hause dagegen kann ich mich konzentrieren.", en: "The office is noisy. At home, on the other hand, I can concentrate." },
        ],
      },
      {
        heading: `Cause: "weil", "da", "denn", "zumal"`,
        body: [
          `"Weil" gives a new, important reason (verb at the end) and is the only one that can answer a "warum" question. "Da" gives a reason the listener already knows; it often stands at the front: "Da du schon hier bist, kannst du mir helfen." "Denn" is a coordinating conjunction (position 0, verb second) and cannot start a sentence that answers a question.`,
          `"Zumal" adds an extra, reinforcing reason: all the more so because. "Ich bleibe zu Hause, zumal ich erkältet bin."`,
        ],
        examples: [
          { de: "Da es schon spät war, nahmen wir ein Taxi.", en: "Since it was already late, we took a taxi." },
          { de: "Ich komme nicht mit, denn ich muss noch arbeiten.", en: "I'm not coming, because I still have to work." },
          { de: "Wir sollten das Angebot annehmen, zumal der Preis fair ist.", en: "We should accept the offer, especially since the price is fair." },
        ],
      },
      {
        heading: `Consequence: "sodass" and "so ... dass"`,
        body: [
          `"Sodass" (also written "so dass") introduces a result: "Es regnete stark, sodass das Spiel abgesagt wurde." When the result comes from the degree of an adjective or adverb, split it: "Ich war so müde, dass ich sofort einschlief."`,
          `Do not confuse result with purpose. "Sodass" says what happened as a consequence; "damit" says what someone intends: "Ich spreche laut, damit alle mich hören."`,
        ],
        examples: [
          { de: "Der Zug hatte Verspätung, sodass ich den Anschluss verpasste.", en: "The train was late, so I missed my connection." },
          { de: "Der Film war so spannend, dass wir die Zeit vergaßen.", en: "The film was so exciting that we forgot the time." },
          { de: "Er sprach so leise, dass niemand ihn verstand.", en: "He spoke so quietly that nobody understood him." },
        ],
      },
      {
        heading: `Means and manner: "indem", "dadurch, dass", "ohne dass", "anstatt dass"`,
        body: [
          `"Indem" means by doing: "Man spart Energie, indem man das Licht ausschaltet." "Dadurch, dass" does the same with "dadurch" in the main clause: "Dadurch, dass er jeden Tag übte, wurde er besser." The nominal version is "durch" + accusative: "durch tägliches Üben".`,
          `"Ohne ... zu" and "(an)statt ... zu" are used when both clauses have the same subject: "Er ging, ohne sich zu verabschieden." With different subjects you need "ohne dass" / "anstatt dass": "Er ging, ohne dass jemand es merkte."`,
        ],
        examples: [
          { de: "Sie lernt Vokabeln, indem sie Karteikarten schreibt.", en: "She learns vocabulary by writing flashcards." },
          { de: "Er verließ den Raum, ohne ein Wort zu sagen.", en: "He left the room without saying a word." },
          { de: "Die Tür ging auf, ohne dass jemand klingelte.", en: "The door opened without anyone ringing." },
          { de: "Anstatt zu lernen, hat er den ganzen Abend gespielt.", en: "Instead of studying, he played all evening." },
          { de: "Anstatt dass du dich beschwerst, könnten wir gemeinsam eine Lösung suchen.", en: "Instead of you complaining, we could look for a solution together." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Es regnete, trotzdem wir gingen spazieren.",
        right: "Es regnete, trotzdem gingen wir spazieren.",
        why: `"Trotzdem" is an adverb in position 1, so the verb must come straight after it.`,
      },
      {
        wrong: "Trotzdem des Regens gingen wir spazieren.",
        right: "Trotz des Regens gingen wir spazieren.",
        why: `Before a noun, use the preposition "trotz". "Trotzdem" is an adverb and cannot govern a noun.`,
      },
      {
        wrong: "Er ging, ohne dass er sich verabschiedete.",
        right: "Er ging, ohne sich zu verabschieden.",
        why: `With the same subject in both clauses, German prefers "ohne ... zu". "Ohne dass" is needed when the subjects differ.`,
      },
      {
        wrong: "Ich lerne Deutsch, sodass ich in Berlin arbeiten kann.",
        right: "Ich lerne Deutsch, damit ich in Berlin arbeiten kann. / ..., um in Berlin arbeiten zu können.",
        why: `This is a purpose, not a result. Purpose is "damit" or "um ... zu"; "sodass" states a consequence.`,
      },
    ],
    faqs: [
      {
        q: `Is "obwohl" + verb second acceptable?`,
        a: `In casual speech you will hear "obwohl, ich weiß nicht" as a kind of afterthought, like "weil" + verb second. In writing and in exams, always put the verb at the end.`,
      },
      {
        q: `What is the difference between "trotzdem" and "dennoch"?`,
        a: `None in meaning. "Dennoch" is a little more formal and written; "trotzdem" is used everywhere.`,
      },
      {
        q: `Can "da" answer the question "warum?"?`,
        a: `Not on its own. "Warum kommst du nicht? – Weil ich krank bin." "Da ich krank bin" sounds wrong as an answer, because "da" presents the reason as already known.`,
      },
    ],
    related: ["complex-connectors", "nominal-style", "genitive-prepositions", "rhetoric-and-cohesion"],
    lessons: [
      "b2-concessive-adversative-1",
      "b2-minimal-pairs-obwohl-trotzdem-trotz",
      "b2-circuit-zwar-aber-selbst-wenn",
      "b2-concessive-adversative-2",
      "b2-error-hunt-concessive",
      "b2-quick-round-obwohl-trotz-trotzdem",
      "b2-da-zumal-sodass",
      "b2-pattern-so-dass",
      "b2-indem-ohne-dass-anstatt-dass",
      "b2-contrast-ohne-zu-ohne-dass",
      "b2-choose-explain-weil-da-denn-zumal",
      "b2-transformations-indem-durch",
    ],
  },
  {
    slug: "genitive-prepositions",
    title: "Prepositions with the Genitive and Formal Relatives: Aufgrund, Innerhalb, Dessen, Deren",
    description:
      "The genitive prepositions of formal German (angesichts, aufgrund, infolge, innerhalb, anlässlich, bezüglich, zugunsten), when von + dative replaces the genitive, and the relative pronouns dessen and deren.",
    level: "B2",
    intro: [
      `Spoken German is losing the genitive, but written German is full of it, mostly after a group of prepositions that sound official: "aufgrund des Wetters", "innerhalb einer Woche", "angesichts der Lage". You will see them in every letter from an authority, every news report and every Goethe B2 reading text.`,
      `The same formal register uses the genitive relative pronouns "dessen" and "deren" (whose). They are short, but their agreement trips up almost every learner.`,
    ],
    sections: [
      {
        heading: `The most useful genitive prepositions`,
        body: [
          `After these prepositions, articles and adjectives take genitive endings: "des", "der", "eines", "einer", and masculine and neuter nouns add "-s" or "-es". Learn them in groups by meaning.`,
          `"Wegen", "trotz", "während" and "statt" also take the genitive in writing, though speech often uses the dative ("wegen dem Regen"). In formal texts, keep the genitive.`,
        ],
        table: {
          headers: ["Meaning", "Prepositions", "Example"],
          rows: [
            ["cause", "aufgrund, infolge, angesichts, wegen", "aufgrund des Streiks"],
            ["time and space", "innerhalb, außerhalb, oberhalb, unterhalb, während", "innerhalb eines Monats"],
            ["topic", "bezüglich, hinsichtlich", "bezüglich Ihrer Anfrage"],
            ["occasion", "anlässlich", "anlässlich ihres Geburtstags"],
            ["means, source", "mittels, seitens", "seitens der Regierung"],
            ["concession", "trotz, ungeachtet", "ungeachtet der Kritik"],
            ["replacement, benefit", "statt / anstelle, zugunsten", "zugunsten der Opfer"],
          ],
        },
        examples: [
          { de: "Aufgrund des Streiks fallen alle Flüge aus.", en: "Because of the strike, all flights are cancelled." },
          { de: "Bitte antworten Sie innerhalb einer Woche.", en: "Please reply within a week." },
          { de: "Angesichts der hohen Kosten wurde das Projekt gestoppt.", en: "In view of the high costs, the project was stopped." },
          { de: "Bezüglich Ihrer Anfrage vom 3. Mai teilen wir Ihnen mit, ...", en: "With regard to your enquiry of 3 May, we inform you that ..." },
          { de: "Anlässlich des Jubiläums gibt es ein Konzert.", en: "To mark the anniversary, there is a concert." },
        ],
      },
      {
        heading: `When there is no article: "von" + dative`,
        body: [
          `The genitive needs to be visible. If a plural noun has no article or adjective, the genitive is invisible, so German switches to "von" + dative: "innerhalb von zwei Wochen", "aufgrund von Problemen", "anstelle von Blumen".`,
          `With an adjective the genitive is visible again: "innerhalb weniger Tage", "aufgrund technischer Probleme".`,
        ],
        examples: [
          { de: "Die Lieferung erfolgt innerhalb von drei Tagen.", en: "Delivery takes place within three days." },
          { de: "Aufgrund technischer Probleme verzögert sich der Start.", en: "Due to technical problems, the start is delayed." },
          { de: "Anstelle von Blumen bitten wir um eine Spende.", en: "Instead of flowers, we ask for a donation." },
        ],
      },
      {
        heading: `"Dessen" and "deren": whose`,
        body: [
          `"Dessen" refers back to a masculine or neuter noun, "deren" to a feminine or plural noun. They agree with the owner (the antecedent), not with the thing owned. "Der Mann, dessen Auto ..." (masculine owner), "die Frau, deren Sohn ..." (feminine owner).`,
          `The noun after "dessen" / "deren" has no article, and an adjective takes the strong ending: "der Autor, dessen neuer Roman ...". After a preposition the case belongs to the preposition: "die Kollegin, mit deren Hilfe ich das geschafft habe".`,
        ],
        table: {
          headers: ["Owner", "Relative", "Example"],
          rows: [
            ["masculine", "dessen", "der Nachbar, dessen Hund bellt"],
            ["neuter", "dessen", "das Kind, dessen Eltern arbeiten"],
            ["feminine", "deren", "die Firma, deren Chef zurückgetreten ist"],
            ["plural", "deren", "die Studenten, deren Prüfung morgen ist"],
          ],
        },
        examples: [
          { de: "Das ist der Kollege, dessen Frau in Wien arbeitet.", en: "That's the colleague whose wife works in Vienna." },
          { de: "Die Stadt, deren Altstadt so berühmt ist, liegt am Rhein.", en: "The town whose old town is so famous lies on the Rhine." },
          { de: "Wir danken allen Eltern, deren Kinder beim Fest geholfen haben.", en: "We thank all the parents whose children helped at the party." },
          { de: "Das ist die Software, mit deren Hilfe wir Zeit sparen.", en: "This is the software with whose help we save time." },
          { de: "Der Bahnhof, in dessen Nähe ich wohne, wird renoviert.", en: "The station I live near is being renovated." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Die Frau, dessen Auto kaputt ist, ...",
        right: "Die Frau, deren Auto kaputt ist, ...",
        why: `The owner is feminine ("die Frau"), so the relative is "deren". The gender of "Auto" does not matter.`,
      },
      {
        wrong: "Der Mann, dessen der Hund bellt, ...",
        right: "Der Mann, dessen Hund bellt, ...",
        why: `"Dessen" and "deren" replace the article; the owned noun follows directly without "der", "die" or "das".`,
      },
      {
        wrong: "innerhalb zwei Wochen",
        right: "innerhalb von zwei Wochen",
        why: `A plural noun with only a number shows no genitive, so use "von" + dative.`,
      },
      {
        wrong: "aufgrund dem Wetter (in a formal letter)",
        right: "aufgrund des Wetters",
        why: `"Aufgrund" takes the genitive. The dative is heard in speech but looks careless in writing.`,
      },
    ],
    faqs: [
      {
        q: `Is "wegen dem" wrong?`,
        a: `It is normal in everyday speech and widely accepted in informal writing. In formal letters, essays and exams, use "wegen des". For personal pronouns, use "wegen mir" in speech and "meinetwegen" in writing.`,
      },
      {
        q: `Should it be "aufgrund" or "auf Grund"?`,
        a: `Both spellings are allowed. "Aufgrund" as one word is far more common today.`,
      },
      {
        q: `When do I use "welcher" as a relative pronoun?`,
        a: `"Welcher" / "welche" / "welches" can replace "der" / "die" / "das" in formal writing, mainly to avoid repetition ("die, die"). It has no genitive; you still need "dessen" or "deren" for whose.`,
      },
    ],
    related: ["nominal-style", "concessive-and-consequential-clauses", "formal-letters-and-emails", "amtsdeutsch-legal-german"],
    lessons: [
      "b2-genitive-prepositions-1",
      "b2-pattern-aufgrund-des",
      "b2-chain-join-with-dessen-deren",
      "b2-circuit-mit-deren-hilfe",
      "b2-genitive-prepositions-2",
      "b2-transformations-dessen-deren",
      "b2-error-hunt-formal-relatives",
      "b2-spiral-choose-dessen-deren",
      "b2-choose-explain-der-dessen-wo-was",
    ],
  },
  {
    slug: "mittelfeld-word-order",
    title: "Word Order in the Mittelfeld: TeKaMoLo, Pronouns and Nicht",
    description:
      "How German orders everything between the two parts of the verb: pronouns before nouns, dative before accusative nouns, the TeKaMoLo default for adverbials, the position of nicht, and what the Vorfeld and Nachfeld are for.",
    level: "B2",
    intro: [
      `A German main clause is built around a bracket (Satzklammer): the conjugated verb in second position and the rest of the verb at the end. "Ich habe ... gestern meiner Schwester das Buch gegeben." The space in between is called the Mittelfeld (middle field), and that is where most word-order decisions are made.`,
      `English has a fairly rigid order (subject, verb, object, manner, place, time). German is more flexible, but it has clear default preferences, and it uses departures from them to signal what is new or important.`,
    ],
    sections: [
      {
        heading: `The three fields`,
        body: [
          `The Vorfeld is position 1, before the conjugated verb. It holds exactly one element, often the subject or the topic. The Mittelfeld lies between the two verb parts. The Nachfeld comes after the final verb and is mostly used for subordinate clauses and long comparisons.`,
        ],
        table: {
          headers: ["Vorfeld", "Verb 1", "Mittelfeld", "Verb 2", "Nachfeld"],
          rows: [
            ["Ich", "habe", "dir gestern das Buch", "gegeben", ""],
            ["Gestern", "habe", "ich dir das Buch", "gegeben", ""],
            ["Er", "ist", "schneller", "gelaufen", "als ich."],
            ["Wir", "haben", "uns", "gefreut", "über deinen Besuch."],
          ],
        },
      },
      {
        heading: `Pronouns and objects`,
        body: [
          `Unstressed pronouns come early in the Mittelfeld, before nouns: "Gestern hat ihn mein Bruder gesehen" is normal German. Among pronouns: nominative, then accusative, then dative ("Ich gebe es ihm").`,
          `Among nouns, the dative usually comes before the accusative: "Ich gebe meiner Schwester das Buch." If one object is a pronoun, it goes first: "Ich gebe es meiner Schwester", "Ich gebe ihr das Buch."`,
        ],
        examples: [
          { de: "Ich habe meiner Mutter einen Brief geschrieben.", en: "I wrote my mother a letter." },
          { de: "Ich habe ihn meiner Mutter geschrieben.", en: "I wrote it to my mother." },
          { de: "Ich habe ihr einen Brief geschrieben.", en: "I wrote her a letter." },
          { de: "Ich habe ihn ihr gestern gegeben.", en: "I gave it to her yesterday." },
        ],
      },
      {
        heading: `Adverbials: "TeKaMoLo"`,
        body: [
          `The default order of adverbials is "temporal" (when), "kausal" (why), "modal" (how), "lokal" (where): "TeKaMoLo". "Ich fahre morgen wegen der Arbeit mit dem Zug nach Köln." English typically goes the other way: by train to Cologne tomorrow.`,
          `This is a default, not a law. Directional phrases ("nach Köln", "in die Stadt") stay close to the end of the clause, and anything you want to stress can move later in the Mittelfeld or to the Vorfeld.`,
        ],
        examples: [
          { de: "Wir sind letztes Jahr wegen des Wetters mit dem Auto nach Italien gefahren.", en: "Last year we drove to Italy because of the weather." },
          { de: "Sie arbeitet seit Mai ganztags in Hamburg.", en: "She has been working full-time in Hamburg since May." },
          { de: "Ich gehe heute Abend mit Freunden ins Kino.", en: "I'm going to the cinema with friends tonight." },
        ],
      },
      {
        heading: `Where does "nicht" go?`,
        body: [
          `To negate the whole sentence, "nicht" goes as late as possible in the Mittelfeld: after objects and time adverbs, but before the second verb part, predicates ("nicht krank"), directional phrases ("nicht nach Hause") and most manner adverbs and prepositional objects ("nicht an ihn").`,
          `To negate one element (and usually contrast it with something else), put "nicht" directly in front of it: "Ich habe nicht dich gemeint, sondern ihn."`,
        ],
        examples: [
          { de: "Ich kenne den Mann nicht.", en: "I don't know the man." },
          { de: "Er hat das Buch gestern nicht gelesen.", en: "He didn't read the book yesterday." },
          { de: "Wir fahren nicht nach Berlin.", en: "We're not going to Berlin." },
          { de: "Ich denke nicht an ihn.", en: "I'm not thinking about him." },
          { de: "Nicht ich habe das gesagt, sondern Paul.", en: "It wasn't me who said that, it was Paul." },
        ],
      },
      {
        heading: `Vorfeld and Nachfeld for emphasis`,
        body: [
          `Moving an object or adverbial into the Vorfeld makes it the topic or puts contrast on it: "Den Film habe ich schon gesehen, das Buch noch nicht." The subject then follows the verb.`,
          `Putting something into the Nachfeld (Ausklammerung) is common in speech and helps avoid long brackets: "Ich habe mich sehr gefreut über deinen Brief." Comparisons with "als" and "wie" normally go there: "Er ist früher gekommen als wir."`,
        ],
        examples: [
          { de: "Diesen Fehler mache ich nie wieder.", en: "I'll never make that mistake again." },
          { de: "Mit dir hätte ich nicht gerechnet.", en: "You're the last person I expected." },
          { de: "Wir haben lange gesprochen über das Projekt.", en: "We talked for a long time about the project. (spoken)" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ich fahre nach Köln morgen.",
        right: "Ich fahre morgen nach Köln.",
        why: `Time comes before place, and directional phrases stay close to the end of the Mittelfeld.`,
      },
      {
        wrong: "Ich gebe meiner Schwester es.",
        right: "Ich gebe es meiner Schwester.",
        why: `Pronouns come before nouns in the Mittelfeld, whatever their case.`,
      },
      {
        wrong: "Ich habe nicht das Buch gelesen.",
        right: "Ich habe das Buch nicht gelesen.",
        why: `For sentence negation, "nicht" follows the definite object. "Nicht das Buch" only works with a contrast: "nicht das Buch, sondern den Artikel".`,
      },
      {
        wrong: "Gestern ich habe ihn gesehen.",
        right: "Gestern habe ich ihn gesehen.",
        why: `The Vorfeld holds only one element. If an adverb is there, the verb comes next and the subject follows it.`,
      },
    ],
    faqs: [
      {
        q: `Is TeKaMoLo a strict rule?`,
        a: `No, it is a default. Elements that are new or stressed tend to move further right. "Ich fahre mit dem Zug morgen nach Köln" is possible if "morgen" is the new information.`,
      },
      {
        q: `Where does "nicht" go with separable verbs?`,
        a: `Before the prefix at the end: "Ich rufe dich heute nicht an."`,
      },
      {
        q: `Can more than one element go in the Vorfeld?`,
        a: `Only if they form one phrase: "Gestern Abend um acht" or "Mit meinem Bruder zusammen" count as one. Two separate elements, like "Gestern ich", never do.`,
      },
    ],
    related: ["vorfeld-and-emphasis", "verb-second-word-order", "modal-particles-in-depth", "rhetoric-and-cohesion"],
    lessons: [
      "b2-word-order-in-depth-1",
      "b2-pattern-tekamolo",
      "b2-chain-where-does-nicht-go",
      "b2-word-order-in-depth-2",
      "b2-transformations-move-it-to-the-front",
      "b2-chain-put-the-focus",
      "b2-word-order-extra-1",
      "b2-word-order-extra-2",
      "b2-word-order-extra-3",
    ],
  },
  {
    slug: "modal-particles-in-depth",
    title: "Modal Particles in Depth: Ja, Doch, Halt, Eben, Wohl, Schon, Denn, Mal, Bloß",
    description:
      "What the little untranslatable words of spoken German do: ja for shared knowledge, doch for reminders and reproaches, halt and eben for resignation, wohl for guesses, schon for concessions, denn in questions, mal and bloß, plus their position and combinations.",
    level: "B2",
    intro: [
      `"Das ist ja interessant." "Komm doch mit!" "Das ist halt so." Modal particles (Abtönungspartikeln) do not change the facts of a sentence; they change its tone. They tell the listener how to take what you are saying: as something obvious, a gentle push, a shrug, a guess.`,
      `English does the same with intonation and little phrases (you know, come on, I guess, after all). Without particles, German can sound abrupt or bookish. With the wrong ones, it can sound rude. This guide covers the core set, what each one does and where it goes.`,
    ],
    sections: [
      {
        heading: `Where particles go`,
        body: [
          `Modal particles live in the Mittelfeld, never in the Vorfeld, and they are unstressed. They usually come after pronouns and before the new information: "Ich habe dir das doch gestern gesagt." They cannot be negated or asked about.`,
          `Most of these words have a second life as ordinary words with stress ("Ja!", "Doch!", "Das ist eben passiert" = it has just happened). Stress tells you which one you have.`,
        ],
      },
      {
        heading: `The core particles`,
        body: [
          `Learn each particle together with the type of sentence it appears in. Many only work in statements, others only in questions or commands.`,
        ],
        table: {
          headers: ["Particle", "Sentence type", "Effect", "Example"],
          rows: [
            ["ja", "statement", "you know this too; surprise", "Das ist ja unglaublich!"],
            ["doch", "statement, command", "reminder, mild reproach, encouragement", "Du weißt doch, dass ich keine Zeit habe."],
            ["halt / eben", "statement", "that's just how it is", "Dann müssen wir halt warten."],
            ["wohl", "statement", "I suppose, probably", "Er ist wohl krank."],
            ["schon", "statement", "concession, reassurance", "Das wird schon klappen."],
            ["denn", "question", "interest, friendliness, surprise", "Wie heißt du denn?"],
            ["mal", "command, request", "casual, softens", "Kannst du mal kurz kommen?"],
            ["bloß / nur", "command, wish", "warning, intensity", "Mach bloß keinen Unsinn!"],
            ["eigentlich", "question", "by the way, changing topic", "Wie alt bist du eigentlich?"],
            ["etwa", "yes/no question", "I hope not! surprise", "Hast du etwa alles aufgegessen?"],
          ],
        },
        examples: [
          { de: "Du bist ja ganz nass!", en: "You're soaking wet! (I can see it.)" },
          { de: "Ruf ihn doch einfach an.", en: "Why don't you just call him?" },
          { de: "Ich habe das doch gesagt!", en: "I did say that! (you should remember)" },
          { de: "Der Zug ist weg. Dann nehmen wir eben den nächsten.", en: "The train's gone. Then we'll just take the next one." },
          { de: "Keine Sorge, das schaffst du schon.", en: "Don't worry, you'll manage." },
          { de: "Was ist denn hier los?", en: "What's going on here, then?" },
        ],
      },
      {
        heading: `Combinations`,
        body: [
          `Particles often come in pairs, in a fairly fixed order: "ja doch", "doch mal", "denn eigentlich", "halt mal", "doch wohl". "Komm doch mal vorbei!" (do drop by sometime) is warmer than "Komm vorbei!". "Das ist doch wohl nicht dein Ernst!" (you can't be serious!) is indignant.`,
          `The general order is: "ja" before "doch", "doch" before "mal" and "wohl", "denn" before "eigentlich". You do not need to memorise rules; learn the common combinations as phrases.`,
        ],
        examples: [
          { de: "Komm doch mal vorbei!", en: "Do drop by sometime!" },
          { de: "Das ist doch wohl nicht dein Ernst!", en: "You can't be serious!" },
          { de: "Was machst du denn eigentlich beruflich?", en: "So what do you actually do for a living?" },
          { de: "Das kannst du ja mal versuchen.", en: "You could always give it a try." },
        ],
      },
      {
        heading: `Politeness and tone`,
        body: [
          `A bare imperative can sound like an order: "Setzen Sie sich." With particles it becomes an invitation: "Setzen Sie sich doch." A bare question can sound like an interrogation: "Wo wohnst du?" With "denn" it sounds interested: "Wo wohnst du denn?"`,
          `But particles can also sharpen: "Jetzt hör doch mal zu!" is impatient, and "Was willst du denn?" can sound annoyed with the wrong intonation. In writing, particles appear in e-mails and chat, rarely in formal letters.`,
        ],
        examples: [
          { de: "Nehmen Sie doch Platz.", en: "Do take a seat." },
          { de: "Kannst du mir mal helfen?", en: "Could you give me a hand?" },
          { de: "Jetzt hör doch mal zu!", en: "Will you just listen!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Doch ist das schön!",
        right: "Das ist doch schön!",
        why: `Modal particles cannot stand in the Vorfeld. They belong in the middle of the sentence.`,
      },
      {
        wrong: "Wie heißt du doch?",
        right: "Wie heißt du denn?",
        why: `In W-questions the friendly particle is "denn". ("Wie hieß er doch gleich?" exists, but means what was his name again?)`,
      },
      {
        wrong: "Mach mal das nicht!",
        right: "Mach das bloß nicht!",
        why: `"Mal" softens requests; a warning not to do something takes "bloß" or "ja": "Mach das ja nicht!"`,
      },
      {
        wrong: "Sehr geehrte Frau Wagner, ich habe Ihnen ja doch halt geschrieben, ...",
        right: "Sehr geehrte Frau Wagner, wie bereits in meiner letzten E-Mail erwähnt, ...",
        why: `Particles belong to spoken and informal style. In formal letters, express the nuance with explicit words.`,
      },
    ],
    faqs: [
      {
        q: `Is "halt" the same as "eben"?`,
        a: `Almost. Both express resignation: that's just the way it is. "Halt" is more southern and colloquial; "eben" is more northern and slightly more neutral.`,
      },
      {
        q: `How can I start using particles without sounding odd?`,
        a: `Start with fixed phrases: "Komm doch mit!", "Wie geht's denn?", "Das ist ja toll!", "Warte mal!", "Das ist halt so." Copy them from dialogues rather than building them from rules.`,
      },
      {
        q: `Is "doch" as an answer the same word?`,
        a: `It is the same word with a different job. Stressed "Doch!" contradicts a negative statement or question ("Kommst du nicht?" – "Doch!"). The unstressed particle "doch" in the middle of a sentence is a modal particle.`,
      },
    ],
    related: ["vorfeld-and-emphasis", "mittelfeld-word-order", "stylistic-registers", "german-questions-doch"],
    lessons: [
      "b1-spoken-german-1",
      "b1-spoken-german-2",
      "b1-fix-the-paragraph-particles",
      "b2-emphasis-extra-2",
      "c1-emphasis-focus-3",
      "c1-error-hunt-particles",
      "c1-dialogue-lab-aeh-also-halt",
    ],
  },
  {
    slug: "fixed-prepositions-in-depth",
    title: "Verbs, Nouns and Adjectives with Fixed Prepositions: Warten Auf, Stolz Auf, Angst Vor",
    description:
      "The Upper-intermediate view of German prepositional verbs: an and auf with accusative or dative, verbs that change meaning with the preposition (sich freuen auf / über, halten für / von), nouns and adjectives with prepositions, and da-compounds before clauses.",
    level: "B2",
    intro: [
      `Many German verbs, nouns and adjectives come with a fixed preposition, and it is often not the one English would choose: "warten auf" (wait for), "Angst vor" (fear of), "stolz auf" (proud of), "abhängen von" (depend on). There is no logic to deduce; the preposition is part of the word.`,
      `At the Intermediate level you met the common verbs. At the Upper-intermediate level you need the whole system: which case follows two-way prepositions like "an" and "auf", verbs whose meaning changes with the preposition, the same patterns in nouns and adjectives, and the da-compounds that announce a following clause.`,
    ],
    sections: [
      {
        heading: `"An" and "auf": accusative or dative?`,
        body: [
          `After a prepositional verb, "an" and "auf" have no sense of location, so you cannot use the "wo"/"wohin" test. With "auf", the accusative is far more common ("warten auf", "sich freuen auf", "achten auf", "sich verlassen auf"); "bestehen auf" takes the dative. With "an", both are common: "denken an", "sich erinnern an", "sich gewöhnen an" + accusative, but "teilnehmen an", "zweifeln an", "leiden an", "arbeiten an" + dative.`,
          `Prepositions that always take one case keep it: "über", "für", "um" + accusative; "mit", "von", "zu", "nach", "bei", "aus" + dative; "vor" in prepositional verbs takes the dative ("Angst haben vor", "warnen vor").`,
        ],
        table: {
          headers: ["Preposition", "+ accusative", "+ dative"],
          rows: [
            ["auf", "warten, sich freuen, achten, sich verlassen, verzichten", "bestehen, beruhen"],
            ["an", "denken, sich erinnern, sich gewöhnen, glauben", "teilnehmen, zweifeln, leiden, arbeiten, sich beteiligen"],
            ["über", "sich ärgern, sprechen, sich beschweren, nachdenken", ""],
            ["vor", "", "Angst haben, warnen, schützen, sich fürchten"],
          ],
        },
        examples: [
          { de: "Ich kann mich nicht an den Lärm gewöhnen.", en: "I can't get used to the noise." },
          { de: "Sie nimmt an einem Sprachkurs teil.", en: "She's taking part in a language course." },
          { de: "Er besteht auf einer Entschuldigung.", en: "He insists on an apology." },
          { de: "Wir zweifeln an seiner Ehrlichkeit.", en: "We doubt his honesty." },
          { de: "Der Arzt warnt vor zu viel Zucker.", en: "The doctor warns against too much sugar." },
        ],
      },
      {
        heading: `Same verb, different preposition, different meaning`,
        body: [
          `Some verbs combine with several prepositions and mean something different each time. These pairs are classic exam material.`,
        ],
        table: {
          headers: ["Verb", "Meaning"],
          rows: [
            ["sich freuen auf + A / über + A", "look forward to / be pleased about"],
            ["halten für + A / von + D", "consider (as) / think of, have an opinion of"],
            ["bestehen aus + D / auf + D", "consist of / insist on"],
            ["sorgen für + A / sich sorgen um + A", "look after, provide / worry about"],
            ["leiden an + D / unter + D", "suffer from (an illness) / suffer under (circumstances)"],
            ["sich handeln um + A (es handelt sich um)", "be about, concern"],
          ],
        },
        examples: [
          { de: "Ich freue mich auf das Wochenende.", en: "I'm looking forward to the weekend." },
          { de: "Ich habe mich über dein Geschenk gefreut.", en: "I was pleased with your present." },
          { de: "Was hältst du von dem Vorschlag?", en: "What do you think of the proposal?" },
          { de: "Ich halte ihn für einen guten Chef.", en: "I consider him a good boss." },
          { de: "Viele Menschen leiden unter dem Stress.", en: "Many people suffer from the stress." },
        ],
      },
      {
        heading: `Nouns and adjectives`,
        body: [
          `Nouns derived from prepositional verbs usually keep the preposition: "warten auf" → "das Warten auf", "sich interessieren für" → "das Interesse an" (watch out: different!), "Angst vor", "die Lust auf", "die Suche nach", "der Grund für", "die Antwort auf".`,
          `Adjectives have their own: "stolz auf", "abhängig von", "zufrieden mit", "gespannt auf", "verantwortlich für", "neidisch auf", "interessiert an", "bereit zu", "überzeugt von", "typisch für".`,
        ],
        examples: [
          { de: "Ich habe keine Lust auf Streit.", en: "I'm not in the mood for an argument." },
          { de: "Sie hat großes Interesse an Kunst.", en: "She is very interested in art." },
          { de: "Wir sind sehr stolz auf unsere Tochter.", en: "We're very proud of our daughter." },
          { de: "Das ist typisch für ihn.", en: "That's typical of him." },
          { de: "Bist du bereit zu einem Kompromiss?", en: "Are you ready for a compromise?" },
        ],
      },
      {
        heading: `Da-compounds before clauses`,
        body: [
          `When the object of the preposition is a whole clause, German announces it with a da-compound in the main clause: "Ich freue mich darauf, dass du kommst." "Es kommt darauf an, ob wir Zeit haben." "Er hat sich daran gewöhnt, früh aufzustehen."`,
          `For things, use "da(r)-" + preposition ("darauf", "daran", "darüber"); for people, use preposition + pronoun ("auf ihn", "an sie"). The questions are "worauf?", "woran?" for things and "auf wen?", "an wen?" for people.`,
        ],
        examples: [
          { de: "Ich warte darauf, dass er sich meldet.", en: "I'm waiting for him to get in touch." },
          { de: "Es hängt davon ab, wie viel es kostet.", en: "It depends on how much it costs." },
          { de: "Worüber ärgerst du dich? – Über den Lärm.", en: "What are you annoyed about? – The noise." },
          { de: "An wen denkst du? – An meine Oma.", en: "Who are you thinking of? – My grandma." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ich warte für den Bus.",
        right: "Ich warte auf den Bus.",
        why: `English wait for, German "warten auf" + accusative.`,
      },
      {
        wrong: "Ich bin interessiert in Politik.",
        right: "Ich interessiere mich für Politik. / Ich bin an Politik interessiert.",
        why: `The verb takes "für", the adjective and noun take "an" + dative. "In" is never possible.`,
      },
      {
        wrong: "Ich freue mich über die Ferien nächsten Monat.",
        right: "Ich freue mich auf die Ferien nächsten Monat.",
        why: `Looking forward to something in the future is "sich freuen auf". "Über" is for something that has happened or is happening.`,
      },
      {
        wrong: "Ich denke an es.",
        right: "Ich denke daran.",
        why: `For things, use a da-compound, not preposition + pronoun.`,
      },
      {
        wrong: "Es hängt ab, ob es regnet.",
        right: "Es hängt davon ab, ob es regnet.",
        why: `Before a clause, the preposition is kept as a da-compound ("davon") in the main clause.`,
      },
    ],
    faqs: [
      {
        q: `Is there any rule to predict the preposition?`,
        a: `Only partly. Verbs of emotion often take "über" (cause) or "auf" (future). Verbs of fear take "vor". But mostly you need to learn the verb together with its preposition and case, as one vocabulary item: "warten auf + A".`,
      },
      {
        q: `When is the da-compound optional?`,
        a: `With some verbs it can be left out before a clause: "Ich erinnere mich (daran), dass ...". With others it is required: "Es kommt darauf an, ob ..." Including it is rarely wrong, but it can change the meaning: "Ich freue mich, dass du kommst" (I'm glad you're coming) vs "Ich freue mich darauf, dass du kommst" (I'm looking forward to your coming).`,
      },
      {
        q: `Do Germans say "auf was" or "worauf"?`,
        a: `"Worauf?" is standard. "Auf was?" is very common in speech but considered colloquial.`,
      },
    ],
    related: ["funktionsverbgefuege", "genitive-prepositions", "mittelfeld-word-order", "dative-case"],
    lessons: [
      "b1-verbs-prepositions-1",
      "b1-verbs-prepositions-2",
      "b1-contrast-clinic-english-preposition",
      "b2-fvg-extra-1",
      "c1-verb-prepositions-1",
      "c1-verb-prepositions-2",
      "c1-verb-prepositions-3",
      "c1-contrast-halten-fuer-von-an",
      "c1-verb-prepositions-4",
      "c1-verb-prepositions-5",
      "c1-verb-prepositions-6",
    ],
  },
  {
    slug: "weak-nouns-in-depth",
    title: "Weak Nouns in Depth: Der Kollege, Den Kollegen; Der Name, Des Namens",
    description:
      "The German n-declension at the Upper-intermediate level: which masculine nouns add -n or -en (Kollege, Student, Präsident, Mensch, Herr), the special group with -ns in the genitive (Name, Gedanke, Glaube), das Herz, and the colloquial habit of dropping the ending.",
    level: "B2",
    intro: [
      `A small but important group of masculine nouns adds "-n" or "-en" in every case except the nominative singular: "der Kollege", but "den Kollegen", "dem Kollegen", "des Kollegen". These are the weak nouns (the n-Deklination).`,
      `They are few, but they are frequent: people ("der Mensch", "der Nachbar", "der Kunde"), professions in "-ent" and "-ist", animals ("der Bär", "der Affe"). At the Upper-intermediate level, errors with them stand out, especially in formal writing.`,
    ],
    sections: [
      {
        heading: `How they decline`,
        body: [
          `In the singular, the weak noun adds "-(e)n" in the accusative, dative and genitive. In the plural it has "-(e)n" everywhere. Compare a normal masculine noun: "der Tisch", "den Tisch", "dem Tisch", "des Tisches".`,
        ],
        table: {
          headers: ["Case", "Singular", "Plural"],
          rows: [
            ["Nominative", "der Kollege, der Student", "die Kollegen, die Studenten"],
            ["Accusative", "den Kollegen, den Studenten", "die Kollegen, die Studenten"],
            ["Dative", "dem Kollegen, dem Studenten", "den Kollegen, den Studenten"],
            ["Genitive", "des Kollegen, des Studenten", "der Kollegen, der Studenten"],
          ],
        },
        examples: [
          { de: "Kennst du den neuen Kollegen?", en: "Do you know the new colleague?" },
          { de: "Ich habe mit dem Präsidenten gesprochen.", en: "I spoke with the president." },
          { de: "Das ist das Auto meines Nachbarn.", en: "That's my neighbour's car." },
          { de: "Die Polizei sucht einen Zeugen.", en: "The police are looking for a witness." },
        ],
      },
      {
        heading: `Which nouns are weak?`,
        body: [
          `Masculine nouns ending in "-e" that refer to people or animals: "der Junge", "der Kunde", "der Kollege", "der Zeuge", "der Experte", "der Löwe", "der Affe", "der Franzose", "der Pole".`,
          `Masculine nouns from Latin or Greek with these endings: "-ant" ("der Praktikant"), "-ent" ("der Student", "der Präsident"), "-ist" ("der Journalist", "der Polizist"), "-oge" ("der Psychologe", "der Biologe"), "-at" ("der Kandidat", "der Soldat"), "-et" ("der Athlet"), "-graf" ("der Fotograf").`,
          `A few short nouns to memorise: "der Mensch", "der Herr" ("den Herrn", plural "die Herren"), "der Nachbar", "der Bauer", "der Bär", "der Held", "der Prinz", "der Fürst", "der Graf".`,
        ],
        examples: [
          { de: "Der Journalist hat den Politiker interviewt.", en: "The journalist interviewed the politician. (\"Politiker\" is not weak)" },
          { de: "Wir haben dem Kandidaten gratuliert.", en: "We congratulated the candidate." },
          { de: "Sehr geehrter Herr Braun, ...", en: "Dear Mr Braun, ..." },
          { de: "Ich schreibe Herrn Braun eine E-Mail.", en: "I'm writing Mr Braun an e-mail." },
        ],
      },
      {
        heading: `The mixed group: "der Name, des Namens"`,
        body: [
          `A handful of abstract masculine nouns add "-n" like weak nouns but also "-s" in the genitive: "der Name, den Namen, dem Namen, des Namens". The group: "der Name", "der Gedanke", "der Glaube", "der Buchstabe", "der Wille", "der Friede(n)", "der Funke", "der Same".`,
          `"Das Herz" is the only neuter noun with a special pattern: "das Herz, das Herz, dem Herzen, des Herzens", plural "die Herzen". Neuter nouns are otherwise never weak.`,
        ],
        examples: [
          { de: "Wie war noch mal der Name des Hotels?", en: "What was the name of the hotel again?" },
          { de: "Ich kann mich an seinen Namen nicht erinnern.", en: "I can't remember his name." },
          { de: "Der Gedanke an die Prüfung macht mich nervös.", en: "The thought of the exam makes me nervous." },
          { de: "Sie ist mit ganzem Herzen dabei.", en: "She's putting her whole heart into it." },
          { de: "Trotz des guten Willens hat es nicht geklappt.", en: "Despite the good will, it didn't work out." },
        ],
      },
      {
        heading: `In speech and without an article`,
        body: [
          `In casual speech, the ending is often dropped, especially in the dative and accusative: "mit dem Student" or "den Präsident" are common but count as mistakes in writing.`,
          `When the noun stands without article or with only a name, the ending is usually dropped as well: "ein Gespräch mit Präsident Müller", "ein Treffen zwischen Student und Professor". With "Herr" before a name, keep the ending: "für Herrn Müller", "an Herrn Dr. Weber".`,
        ],
        examples: [
          { de: "Wir haben ein Interview mit Präsident Schulz geführt.", en: "We interviewed President Schulz." },
          { de: "Bitte geben Sie das Herrn Weber.", en: "Please give that to Mr Weber." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ich habe den Student gefragt.",
        right: "Ich habe den Studenten gefragt.",
        why: `"Student" is a weak noun: accusative singular "den Studenten".`,
      },
      {
        wrong: "an Herr Müller",
        right: "an Herrn Müller",
        why: `"Herr" is weak: "Herrn" in the accusative, dative and genitive singular, also before a name in letters and addresses.`,
      },
      {
        wrong: "des Namen",
        right: "des Namens",
        why: `"Name" belongs to the mixed group, which adds "-ns" in the genitive.`,
      },
      {
        wrong: "den Lehreren",
        right: "den Lehrern",
        why: `"Lehrer" is not weak. Masculine nouns in "-er" are normal nouns; the dative plural just adds "-n".`,
      },
    ],
    faqs: [
      {
        q: `How do I recognise a weak noun from the dictionary entry?`,
        a: `Look at the genitive and plural: "Student, der; -en, -en" means genitive "des Studenten", plural "die Studenten", so it is weak. A normal noun shows "-(e)s" in the genitive.`,
      },
      {
        q: `Are feminine forms like "Studentin" weak?`,
        a: `No. Weak declension only affects masculine nouns (and "das Herz"). Feminine nouns never change in the singular: "der Studentin", "die Kollegin".`,
      },
      {
        q: `Is "dem Bauer" or "dem Bauern" correct?`,
        a: `"Dem Bauern" is standard (weak). "Der Nachbar" is also weak: "dem Nachbarn".`,
      },
    ],
    related: ["genitive-prepositions", "fixed-prepositions-in-depth", "nominative-accusative", "dative-case"],
    lessons: [
      "b1-n-declension",
      "b1-fix-the-paragraph-n-declension",
      "b1-error-hunt-n-declension-genitive",
      "b2-genitive-prepositions-1",
    ],
  },
];
