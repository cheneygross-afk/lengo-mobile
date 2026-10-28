// Synced from cheneygross-afk/lengo:src/lib/grammar/it-guides-c1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ItGrammarGuide } from "./it-types";

// Italian grammar guides, C1 (see the notes at the top of ./it-types.ts).
export const IT_C1_GUIDES: ItGrammarGuide[] = [
  {
    slug: "passato-remoto-production",
    title: "Nacque, Visse, Morì: Writing with the Passato Remoto",
    description:
      "How to produce the Italian passato remoto in every person: regular forms (parlai, credei / credetti, dormii), the 1-3-3 pattern of the irregulars (ebbi, ebbe, ebbero), and when to choose it over the passato prossimo in narrative.",
    level: "C1",
    intro: [
      `At Intermediate level you learned to recognise the passato remoto in books. At this level you write it: in stories, biographies, history and any narrative set in a closed past. "Nacque a Firenze nel 1265" (he was born in Florence in 1265); "quella sera decisero di partire" (that evening they decided to leave).`,
      `The regular forms are easy. The irregular verbs look intimidating, but nearly all of them follow one pattern: only three persons are irregular, and they share the same stem.`,
    ],
    sections: [
      {
        heading: `Regular forms`,
        body: [
          `Each group keeps its own vowel: "-are" verbs take "-ai, -asti, -ò, -ammo, -aste, -arono"; "-ere" verbs take "-ei, -esti, -é, -emmo, -este, -erono"; "-ire" verbs take "-ii, -isti, -ì, -immo, -iste, -irono". Mind the accents on the third person singular: "parlò", "credé", "dormì".`,
          `Many "-ere" verbs have a second set in "-etti, -ette, -ettero": "credetti", "credette", "credettero". Both are correct and the "-etti" forms are very common in modern prose. Verbs whose stem already ends in "t" prefer the "-ei" set: "potei", "battei".`,
        ],
        table: {
          headers: ["", "parlare", "credere", "dormire"],
          rows: [
            ["io", "parlai", "credei / credetti", "dormii"],
            ["tu", "parlasti", "credesti", "dormisti"],
            ["lui, lei", "parlò", "credé / credette", "dormì"],
            ["noi", "parlammo", "credemmo", "dormimmo"],
            ["voi", "parlaste", "credeste", "dormiste"],
            ["loro", "parlarono", "crederono / credettero", "dormirono"],
          ],
        },
        examples: [
          { it: "Quella sera parlammo fino all'alba.", en: "That evening we talked until dawn." },
          { it: "Nessuno gli credette.", en: "Nobody believed him." },
          { it: "Dormì per dodici ore di fila.", en: "He slept for twelve hours straight." },
          { it: "I due fratelli partirono per l'America nel 1910.", en: "The two brothers left for America in 1910." },
        ],
      },
      {
        heading: `The irregular 1-3-3 pattern`,
        body: [
          `Most irregular verbs are irregular only in the io, lui/lei and loro forms (persons 1, 3 and 6), which share a special stem: "ebbi, ebbe, ebbero" from "avere"; "feci, fece, fecero" from "fare"; "dissi, disse, dissero" from "dire". The other three persons are regular, built on the infinitive: "avesti, avemmo, aveste"; "facesti, facemmo, faceste".`,
          `So for each verb you only need the io form: "presi" (prendere) gives "prese", "presero"; the rest is "prendesti, prendemmo, prendeste". "Essere" is the one fully irregular verb: "fui, fosti, fu, fummo, foste, furono". "Dare" and "stare" go "diedi, desti, diede, demmo, deste, diedero" and "stetti, stesti, stette, stemmo, steste, stettero".`,
        ],
        table: {
          headers: ["Infinitive", "io", "lui, lei", "loro", "tu (regular)"],
          rows: [
            ["avere", "ebbi", "ebbe", "ebbero", "avesti"],
            ["fare", "feci", "fece", "fecero", "facesti"],
            ["dire", "dissi", "disse", "dissero", "dicesti"],
            ["venire", "venni", "venne", "vennero", "venisti"],
            ["vedere", "vidi", "vide", "videro", "vedesti"],
            ["prendere", "presi", "prese", "presero", "prendesti"],
            ["mettere", "misi", "mise", "misero", "mettesti"],
            ["scrivere", "scrissi", "scrisse", "scrissero", "scrivesti"],
            ["chiedere", "chiesi", "chiese", "chiesero", "chiedesti"],
            ["rispondere", "risposi", "rispose", "risposero", "rispondesti"],
            ["decidere", "decisi", "decise", "decisero", "decidesti"],
            ["conoscere", "conobbi", "conobbe", "conobbero", "conoscesti"],
            ["vivere", "vissi", "visse", "vissero", "vivesti"],
            ["nascere", "nacqui", "nacque", "nacquero", "nascesti"],
            ["volere", "volli", "volle", "vollero", "volesti"],
            ["sapere", "seppi", "seppe", "seppero", "sapesti"],
            ["rompere", "ruppi", "ruppe", "ruppero", "rompesti"],
            ["cadere", "caddi", "cadde", "caddero", "cadesti"],
            ["tenere", "tenni", "tenne", "tennero", "tenesti"],
          ],
        },
        examples: [
          { it: "Ebbe tre figli e visse fino a novant'anni.", en: "She had three children and lived to ninety." },
          { it: "Quando lo vide, capì subito tutto.", en: "When she saw him, she understood everything at once." },
          { it: "Mi chiese perché fossi venuto, ma non risposi.", en: "He asked me why I had come, but I didn't answer." },
          { it: "Conobbero il successo solo dopo la guerra.", en: "They only found success after the war." },
          { it: "Fu un anno difficile per tutti.", en: "It was a difficult year for everyone." },
        ],
      },
      {
        heading: `Remote or recent past?`,
        body: [
          `The passato prossimo connects the past to the present; the passato remoto presents it as closed and distant. In standard writing, use the remoto for history, biography, fairy tales and fiction ("Garibaldi sbarcò in Sicilia nel 1860"), and the prossimo for anything still connected to you ("mi sono laureata nel 2015, e lavoro qui da allora").`,
          `Region matters in speech: in the North the passato remoto has almost disappeared from conversation, while in parts of the South (Sicily, Calabria, Campania) people use it even for yesterday. In a narrative, combine it with the imperfetto for background, exactly as you combine imperfetto and passato prossimo: "pioveva quando arrivammo".`,
        ],
        examples: [
          { it: "Garibaldi sbarcò in Sicilia nel 1860.", en: "Garibaldi landed in Sicily in 1860." },
          { it: "Mio nonno emigrò in Argentina da giovane.", en: "My grandfather emigrated to Argentina as a young man." },
          { it: "Pioveva a dirotto quando arrivammo alla stazione.", en: "It was pouring with rain when we arrived at the station." },
          { it: "C'era una volta un re che aveva tre figlie. Un giorno le chiamò e disse...", en: "Once upon a time there was a king who had three daughters. One day he called them and said..." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Lui parlo per un'ora.",
        right: "Lui parlò per un'ora.",
        why: `Without the accent "parlo" is the present (I speak). The third person singular of the remoto is stressed on the ending: "parlò".`,
      },
      {
        wrong: "Loro fecerono un errore.",
        right: "Loro fecero un errore.",
        why: `Irregular loro forms add "-ero" to the special stem: "fecero", "dissero", "ebbero".`,
      },
      {
        wrong: "Lui prendé il treno.",
        right: "Lui prese il treno.",
        why: `"Prendere" is a 1-3-3 verb: "presi", "prese", "presero".`,
      },
      {
        wrong: "Noi ebbimo paura.",
        right: "Noi avemmo paura.",
        why: `The noi form is always regular: "avemmo", "facemmo", "dicemmo".`,
      },
      {
        wrong: "Stamattina mi alzai alle sette. (in standard Italian)",
        right: "Stamattina mi sono alzato alle sette.",
        why: `A past linked to today takes the passato prossimo in standard Italian; the remoto here is regional.`,
      },
    ],
    faqs: [
      {
        q: `Do I need to use the passato remoto when I speak?`,
        a: `Not in most of Italy. You need it to tell a historical story, read aloud or write narrative. In conversation about your own life, the passato prossimo is the safe standard choice.`,
      },
      {
        q: `How do I find the irregular stem?`,
        a: `Learn the io form: everything else follows. Many stems end in "-ssi" or "-si" ("dissi", "presi", "misi"), and verbs that double a consonant often have "-bbi" or "-nni" ("ebbi", "conobbi", "venni", "tenni").`,
      },
      {
        q: `"Diedi" or "detti"?`,
        a: `Both exist for "dare": "diedi, diede, diedero" are more common, "detti, dette, dettero" are also correct.`,
      },
    ],
    related: ["passato-remoto", "literary-italian", "past-tenses", "imperfetto"],
    lessons: [
      "c1-passato-remoto-regular-full",
      "c1-passato-remoto-irregular-1",
      "c1-passato-remoto-irregular-2",
      "c1-remote-vs-recent-past",
      "c1-narrative-writing",
      "c1-drill-passato-remoto",
      "c1-error-hunt-passato-remoto",
      "c1-mission-family-legend",
      "c1-transform-recent-to-remote",
      "c1-centuries-and-dates",
    ],
  },
  {
    slug: "literary-italian",
    title: "Ebbe Finito, Egli Disse, Affittasi: Reading Literary Italian",
    description:
      "The forms of Italian literature and older prose: the trapassato remoto (dopo che ebbe finito), literary pronouns egli, ella, esso, enclitics on finite verbs (dissegli, affittasi, vendesi), older spellings, and free indirect speech.",
    level: "C1",
    intro: [
      `Novels, classics and older documents use forms you rarely hear today. Some are still productive in formal writing (the trapassato remoto, "egli"), others survive only as fossils on signs ("affittasi", "vendesi"), and some belong to the 19th century ("dissegli", "vedesi", "giuoco").`,
      `This guide covers what you need to read Manzoni, Verga, Pirandello and Svevo with confidence, and to write a literary pastiche of your own.`,
    ],
    sections: [
      {
        heading: `The trapassato remoto`,
        body: [
          `Formed with the passato remoto of "avere" or "essere" + participle ("ebbi finito", "fu partito"), the trapassato remoto appears only in a subordinate clause after "dopo che", "appena", "quando", "non appena", with a passato remoto in the main clause. It marks an action completed just before: "dopo che ebbe finito la lettera, la chiuse".`,
          `In modern writing it is rare and often replaced by an implicit clause: "finita la lettera, la chiuse" or "dopo aver finito la lettera".`,
        ],
        examples: [
          { it: "Dopo che ebbe finito la lettera, la chiuse in un cassetto.", en: "After she had finished the letter, she shut it in a drawer." },
          { it: "Appena fu uscito, tutti scoppiarono a ridere.", en: "As soon as he had gone out, everyone burst out laughing." },
          { it: "Quando ebbero mangiato, si misero in cammino.", en: "When they had eaten, they set off." },
          { it: "Non appena ebbi saputo la notizia, partii.", en: "As soon as I had heard the news, I left." },
        ],
      },
      {
        heading: `Egli, ella, esso and other literary pronouns`,
        body: [
          `Older and very formal Italian uses "egli" (he) and "ella" (she) as subject pronouns for people, "esso" and "essa" for things and animals, and "essi", "esse" for the plural. Modern Italian uses "lui", "lei", "loro" for all of these, or no pronoun.`,
          `"Ella" is now archaic; "egli" survives in academic and legal prose ("egli sostiene che..."). You will meet "esso" in technical texts: "il sistema e i suoi componenti: esso è composto da...".`,
        ],
        table: {
          headers: ["Literary / formal", "Modern"],
          rows: [
            ["egli disse", "lui disse / disse"],
            ["esso funziona", "funziona"],
            ["essi partirono", "loro partirono / partirono"],
            ["costui, costei, costoro", "questo, questa, questi (people)"],
            ["colui che", "quello che, chi"],
          ],
        },
        examples: [
          { it: "Egli sostiene che la teoria sia incompleta.", en: "He maintains that the theory is incomplete." },
          { it: "Egli sorrise e non disse nulla.", en: "He smiled and said nothing." },
          { it: "Colui che rompe, paga.", en: "Whoever breaks it, pays." },
        ],
      },
      {
        heading: `Enclitics, fossils and older spellings`,
        body: [
          `Until the early 20th century pronouns could attach to the end of a conjugated verb: "dissegli" (gli disse), "vedesi" (si vede), "trovavasi" (si trovava). Today only fossils survive, on signs and in ads: "affittasi" (for rent), "vendesi" (for sale), "cercasi" (wanted), "dicesi" (is called, in definitions).`,
          `Older texts also show forms like "giuoco" (gioco), "avea" (aveva), "dicea" (diceva), "core" (cuore) in verse, and accents placed differently ("perchè" with a grave accent was once common). Read them as variants, never copy them.`,
        ],
        examples: [
          { it: "Affittasi bilocale in centro.", en: "Two-room flat for rent in the centre." },
          { it: "Cercasi cameriere con esperienza.", en: "Experienced waiter wanted." },
          { it: "Dicesi triangolo un poligono con tre lati.", en: "A triangle is defined as a polygon with three sides." },
          { it: "E voltatosi, dissegli: «Vattene.»", en: "And, turning round, he said to him: 'Go away.'" },
        ],
      },
      {
        heading: `Free indirect speech`,
        body: [
          `Modern novels often report a character's thoughts without "pensò che" or quotation marks, in the third person and the imperfetto, but with the character's own words, questions and exclamations: "Che cosa avrebbe detto a sua madre? Non poteva certo raccontarle tutto." This is the discorso indiretto libero.`,
          `Recognise it by the mixture: third person and past tenses (narrator) with exclamations, questions, "ormai", "domani", "qui" (character). It is one of the key techniques of Verga, Pirandello and Svevo.`,
        ],
        examples: [
          { it: "Che cosa avrebbe detto a sua madre? Non poteva certo raccontarle tutto.", en: "What would she tell her mother? She certainly couldn't tell her everything." },
          { it: "Domani, sì, domani avrebbe parlato con il direttore.", en: "Tomorrow, yes, tomorrow he would talk to the director." },
          { it: "Era tardi, ormai. Tanto valeva tornare a casa.", en: "It was too late now. Might as well go home." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Dopo che ebbe finito, è uscito.",
        right: "Dopo che ebbe finito, uscì.",
        why: `The trapassato remoto goes only with a passato remoto main clause.`,
      },
      {
        wrong: "Quando ebbe finito, usciva.",
        right: "Quando ebbe finito, uscì.",
        why: `The main clause is a single completed event: passato remoto, not imperfetto.`,
      },
      {
        wrong: "Egli è un libro interessante.",
        right: "È un libro interessante.",
        why: `"Egli" is only for people; for things the old form was "esso", and modern Italian uses no pronoun.`,
      },
      {
        wrong: "Si affittasi camera.",
        right: "Affittasi camera.",
        why: `The "-si" on the end already is the "si": don't add another one in front.`,
      },
    ],
    faqs: [
      {
        q: `Should I use the trapassato remoto in my own writing?`,
        a: `Only in deliberately literary narrative. In essays and reports, an implicit clause ("dopo aver finito", "finito il lavoro") is more natural.`,
      },
      {
        q: `Is "egli" still correct?`,
        a: `Yes, it is correct but formal and dated. Academic and legal texts still use it; in conversation it would sound comic.`,
      },
      {
        q: `How can I read 19th-century Italian faster?`,
        a: `Expect long sentences: find the main verb first, then the subordinates. Mentally move attached pronouns back in front of the verb ("dissegli" = "gli disse") and modernise the spelling as you go.`,
      },
    ],
    related: ["passato-remoto-production", "formal-syntax", "passato-remoto"],
    lessons: [
      "c1-trapassato-remoto",
      "c1-literary-pronouns",
      "c1-fossil-forms",
      "c1-literary-narration",
      "c1-drill-literary-tenses",
      "c1-error-hunt-literary",
      "c1-transform-modern-literary",
      "c1-mission-literary-pastiche",
      "c1-reading-older-italian",
      "c1-drill-literary-forms",
      "c1-free-indirect-speech",
    ],
  },
  {
    slug: "formal-syntax",
    title: "Il Partire, Disse il Presidente: Literary and Formal Syntax",
    description:
      "The syntax of formal Italian prose: subject-verb inversion, the infinitive used as a noun (il partire), absolute participle and gerund constructions, and how to build and punctuate a long hypotactic sentence.",
    level: "C1",
    intro: [
      `Formal Italian prose differs from conversation less in its words than in its architecture. Sentences are longer, built on subordination (ipotassi) rather than juxtaposition (paratassi); the subject can follow the verb; infinitives act as nouns; participles and gerunds compress whole clauses.`,
      `You need these structures to read essays, newspapers and literature, and you need a few of them to write at an Advanced level.`,
    ],
    sections: [
      {
        heading: `Inversion`,
        body: [
          `Italian word order is flexible, and putting the subject after the verb is normal in several contexts: after a quotation ("«Non è vero», disse il presidente"), with verbs of happening and arriving where the subject is the new information ("è arrivato il treno", "sono cambiate molte cose"), and in formal or literary emphasis ("così parlò il saggio").`,
          `Placing the subject last makes it the focus. "Ha vinto Chiara" answers who won?; "Chiara ha vinto" answers what did Chiara do?`,
        ],
        examples: [
          { it: "«Non è vero», rispose il ministro.", en: "'It isn't true,' the minister replied." },
          { it: "Sono cambiate molte cose dall'anno scorso.", en: "A lot has changed since last year." },
          { it: "Chi ha vinto? Ha vinto Chiara.", en: "Who won? Chiara did." },
          { it: "Restano da chiarire alcuni punti.", en: "Some points remain to be clarified." },
        ],
      },
      {
        heading: `The infinitive as a noun`,
        body: [
          `Any infinitive can take the masculine article and act as a noun: "il partire" (the act of leaving), "il mangiare", "il suo continuo lamentarsi" (his constant complaining). English uses an -ing form here. It can take adjectives and objects: "il continuo rimandare le decisioni".`,
          `Some infinitives have become ordinary nouns with a plural: "il dovere, i doveri", "il piacere, i piaceri", "il potere", "il parere".`,
        ],
        examples: [
          { it: "Il suo continuo lamentarsi mi stanca.", en: "His constant complaining wears me out." },
          { it: "Il viaggiare apre la mente.", en: "Travelling broadens the mind." },
          { it: "Il rimandare le decisioni ha un costo.", en: "Putting off decisions has a cost." },
          { it: "Secondo il mio parere, è un errore.", en: "In my opinion, it's a mistake." },
        ],
      },
      {
        heading: `Absolute constructions`,
        body: [
          `The absolute participle and gerund compress a clause with its own subject: "terminata la riunione, i partecipanti uscirono" (once the meeting was over...), "essendo il tempo incerto, la gita fu rinviata" (the weather being uncertain...). Formal prose chains them: "considerata la situazione e sentito il parere degli esperti, il consiglio ha deciso...".`,
          `Bureaucratic and legal Italian makes heavy use of fixed absolute participles: "visto il decreto", "considerato che", "accertato che", "premesso che".`,
        ],
        examples: [
          { it: "Terminata la riunione, i partecipanti uscirono in silenzio.", en: "When the meeting was over, the participants left in silence." },
          { it: "Essendo il tempo incerto, la gita fu rinviata.", en: "As the weather was uncertain, the trip was postponed." },
          { it: "Sentito il parere degli esperti, il consiglio ha approvato il progetto.", en: "Having heard the experts' opinion, the council approved the project." },
          { it: "Considerato che i fondi sono limitati, occorre stabilire delle priorità.", en: "Given that funds are limited, priorities must be set." },
        ],
      },
      {
        heading: `Long sentences and their punctuation`,
        body: [
          `A hypotactic sentence has one main clause and several subordinates hanging from it, each introduced by a conjunction, a relative pronoun or an implicit form. Build it from the main clause outward and keep the main verb near the start or clearly marked; readers search for it.`,
          `Use commas to set off subordinates and parentheticals, semicolons to separate long coordinated blocks, and never put a comma between subject and verb. When a sentence passes about forty words, ask whether it would read better as two.`,
        ],
        examples: [
          { it: "Il comune, dopo aver consultato i cittadini, ha deciso di chiudere il centro al traffico, che negli ultimi anni era diventato insostenibile.", en: "The council, after consulting residents, decided to close the centre to traffic, which had become unbearable in recent years." },
          { it: "Benché il progetto fosse ambizioso, i fondi arrivarono in tempo; i lavori, tuttavia, durarono il doppio del previsto.", en: "Although the project was ambitious, the funds arrived on time; the works, however, took twice as long as planned." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Il ministro, ha dichiarato che la riforma è necessaria.",
        right: "Il ministro ha dichiarato che la riforma è necessaria.",
        why: `Never put a comma between the subject and its verb.`,
      },
      {
        wrong: "«Non è vero», il ministro rispose.",
        right: "«Non è vero», rispose il ministro.",
        why: `After a quotation, Italian inverts: verb, then subject.`,
      },
      {
        wrong: "Il partire è difficile ma il suo continuo si lamentare mi stanca.",
        right: "Partire è difficile, ma il suo continuo lamentarsi mi stanca.",
        why: `The pronoun attaches to the nominalised infinitive: "lamentarsi".`,
      },
      {
        wrong: "Finito la riunione, siamo usciti.",
        right: "Finita la riunione, siamo usciti.",
        why: `The absolute participle agrees with its noun: "la riunione", "finita".`,
      },
    ],
    faqs: [
      {
        q: `Is it bad style to write short sentences in Italian?`,
        a: `No. Contemporary Italian prose, journalism and plain-language guidelines favour clarity. Long hypotactic sentences are a resource, not a requirement: alternate them with short ones.`,
      },
      {
        q: `Does inversion change the meaning?`,
        a: `It changes the focus. The last element of an Italian sentence carries the new information: "è arrivato Marco" (Marco, not someone else, has arrived).`,
      },
      {
        q: `Can I nominalise every infinitive?`,
        a: `Grammatically yes, but it sounds formal or literary. In everyday writing, a bare infinitive ("viaggiare apre la mente") or a real noun ("il viaggio") is often better.`,
      },
    ],
    related: ["implicit-clauses", "literary-italian", "burocratese", "punctuation-and-style"],
    lessons: [
      "c1-inversion",
      "c1-infinitive-as-noun",
      "c1-absolute-constructions",
      "c1-long-sentences",
      "c1-drill-formal-syntax",
      "c1-reading-lab-formal-prose",
      "c1-error-hunt-formal-syntax",
      "c1-transform-paratactic-hypotactic",
      "c1-mission-formal-paragraph",
    ],
  },
  {
    slug: "burocratese",
    title: "Il Sottoscritto, Ai Sensi Dell'Art.: Bureaucratic Italian",
    description:
      "How to read Italian burocratese (la presente, il sottoscritto, si fa presente, si prega di, in ottemperanza a, ai sensi dell'art.), fill in an autocertificazione, and rewrite official texts in plain Italian.",
    level: "C1",
    intro: [
      `Italian public administration writes in a style of its own, the burocratese: long nominal phrases, passives and impersonals, archaic connectors and fixed formulas. "Si comunica che la S.V. è tenuta a presentare la documentazione entro e non oltre il 30 giugno" means you must hand in the papers by 30 June.`,
      `Living in Italy means reading notices, forms and letters like this. Since the 1990s Italian institutions have published guidelines for clearer administrative writing, so you will also learn how to translate burocratese into plain Italian.`,
    ],
    sections: [
      {
        heading: `The features`,
        body: [
          `Burocratese prefers nouns to verbs ("procedere alla verifica" for "verificare"), impersonals and passives ("si fa presente", "è stato disposto"), present participles as adjectives ("la ditta richiedente", "il documento attestante") and archaic or Latinate words ("la presente" for this letter, "codesto" for that office of yours, "suddetto", "predetto").`,
          `It addresses the reader as "la S.V." (la Signoria Vostra) and refers to the writer as "il sottoscritto" or "la sottoscritta". It never says "entro il 30" when it can say "entro e non oltre il 30".`,
        ],
        table: {
          headers: ["Burocratese", "Plain Italian", "Meaning"],
          rows: [
            ["la presente", "questa lettera", "this letter"],
            ["si fa presente che", "le ricordiamo che", "please note that"],
            ["si prega di", "per favore", "please"],
            ["in ottemperanza a", "secondo, rispettando", "in compliance with"],
            ["ai sensi dell'art. 5", "in base all'articolo 5", "under article 5"],
            ["entro e non oltre", "entro", "by, no later than"],
            ["procedere al pagamento", "pagare", "to pay"],
            ["in data odierna", "oggi", "today"],
            ["previo appuntamento", "su appuntamento", "by appointment"],
            ["la S.V.", "Lei", "you"],
          ],
        },
        examples: [
          { it: "Si fa presente che l'ufficio resterà chiuso nei giorni festivi.", en: "Please note that the office will be closed on public holidays." },
          { it: "Si prega di non lasciare bagagli incustoditi.", en: "Please do not leave luggage unattended." },
          { it: "La domanda deve pervenire entro e non oltre il 15 settembre.", en: "The application must arrive by 15 September at the latest." },
          { it: "Il pagamento va effettuato previa ricezione della fattura.", en: "Payment is to be made after receipt of the invoice." },
        ],
      },
      {
        heading: `Forms and the autocertificazione`,
        body: [
          `Many Italian forms start with a fixed declaration in the first person, with blanks for your details: "Il/La sottoscritto/a ... nato/a a ... il ... residente in ... consapevole delle sanzioni penali previste in caso di dichiarazioni mendaci, dichiara di...". This autocertificazione lets citizens certify facts (residence, family, studies) without certificates.`,
          `Typical verbs: "dichiara di essere residente", "chiede il rilascio di", "allega copia del documento", "autorizza il trattamento dei dati personali".`,
        ],
        examples: [
          { it: "La sottoscritta Giulia Ferri, nata a Bari il 3 aprile 1990, dichiara di essere residente a Torino.", en: "I, the undersigned Giulia Ferri, born in Bari on 3 April 1990, declare that I am resident in Turin." },
          { it: "Il sottoscritto chiede il rilascio della carta d'identità.", en: "The undersigned applies for the issue of an identity card." },
          { it: "Si allega copia del documento di riconoscimento.", en: "A copy of an identity document is attached." },
        ],
      },
      {
        heading: `Rewriting in plain Italian`,
        body: [
          `To simplify, turn nouns back into verbs, name who does what, use the active voice, put the main information first and replace the formulas with everyday words. "Si comunica alla S.V. che è stato disposto il rinnovo del contratto" becomes "Le comunichiamo che abbiamo rinnovato il Suo contratto".`,
          `Know both directions: you will write formal letters to offices, and you will want to explain official letters to others.`,
        ],
        examples: [
          { it: "Si comunica che è stato disposto il rinnovo del contratto. → Le comunichiamo che il contratto è stato rinnovato.", en: "We wish to inform you that the contract has been renewed." },
          { it: "Si prega di procedere al pagamento. → Per favore, paghi.", en: "Please pay." },
          { it: "In data odierna è pervenuta la Sua istanza. → Oggi abbiamo ricevuto la Sua domanda.", en: "We received your application today." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Entro e non oltre di venerdì.",
        right: "Entro e non oltre venerdì.",
        why: `"Entro" takes the date directly, with no preposition.`,
      },
      {
        wrong: "Il sottoscritto Maria Rossi dichiara...",
        right: "La sottoscritta Maria Rossi dichiara...",
        why: `The formula agrees with the person: "il sottoscritto", "la sottoscritta".`,
      },
      {
        wrong: "Ai sensi del art. 3",
        right: "Ai sensi dell'art. 3",
        why: `"Articolo" begins with a vowel: "dell'articolo", abbreviated "dell'art.".`,
      },
      {
        wrong: "Si prega di non fumare, grazie per favore.",
        right: "Si prega di non fumare.",
        why: `"Si prega di" already means please; don't add "per favore".`,
      },
    ],
    faqs: [
      {
        q: `Should I write in burocratese to an office?`,
        a: `No. Write formal, polite, clear Italian. Use the standard letter formulas, but there is no need for "la S.V." or "codesto"; offices themselves are moving away from them.`,
      },
      {
        q: `What is "codesto"?`,
        a: `A demonstrative meaning that, near you (the reader). Outside Tuscany it survives only in bureaucratic letters: "codesto ufficio" = your office.`,
      },
      {
        q: `What does "previa" mean?`,
        a: `Subject to, after: "previa prenotazione" = after booking, by reservation only. It agrees with the noun: "previo appuntamento", "previa autorizzazione".`,
      },
    ],
    related: ["formal-writing", "nominal-style", "register-shifting", "legal-italian"],
    lessons: [
      "c1-burocratese-features",
      "c1-burocratese-formulas",
      "c1-plain-italian",
      "c1-official-forms",
      "c1-drill-burocratese",
      "c1-reading-lab-official-notice",
      "c1-error-hunt-official-writing",
      "c1-dialogue-lab-ufficio",
      "c1-mission-autocertificazione",
    ],
  },
  {
    slug: "academic-italian",
    title: "Si Ritiene, Sembrerebbe: Academic Italian",
    description:
      "The impersonal voice of Italian academic writing (si ritiene, è possibile osservare), hedging with the conditional (sembrerebbe, si potrebbe ipotizzare), citing sources (secondo, come sostiene, cfr.), summary and paraphrase, and academic connectors.",
    level: "C1",
    intro: [
      `Italian academic prose avoids "io" almost entirely. Instead of I think it says "si ritiene", "è possibile affermare", or uses "noi" as a modest plural ("come abbiamo visto"). Claims are hedged with the conditional ("sembrerebbe", "si potrebbe ipotizzare"), sources are introduced with a small set of verbs, and paragraphs are linked by formal connectors.`,
      `The same toolkit serves essays, theses, abstracts, reports and the CILS TRE writing tasks.`,
    ],
    sections: [
      {
        heading: `The impersonal voice`,
        body: [
          `Use the impersonal "si" ("si ritiene che", "si osserva che"), impersonal expressions ("è possibile osservare", "è opportuno sottolineare", "va precisato che") and the passive ("è stato dimostrato che"). Verbs of opinion and possibility take the subjunctive: "si ritiene che il fenomeno sia recente".`,
          `The academic "noi" includes the reader: "come vedremo nel secondo capitolo", "possiamo quindi concludere". "Io" appears only in personal reflections or prefaces.`,
        ],
        examples: [
          { it: "Si ritiene che il fenomeno sia più diffuso di quanto si pensasse.", en: "The phenomenon is believed to be more widespread than was thought." },
          { it: "È opportuno sottolineare che i dati sono parziali.", en: "It should be stressed that the data are incomplete." },
          { it: "Come vedremo nel prossimo capitolo, la questione è complessa.", en: "As we shall see in the next chapter, the question is complex." },
          { it: "Va precisato che il campione comprende solo adulti.", en: "It should be pointed out that the sample includes only adults." },
        ],
      },
      {
        heading: `Hedging`,
        body: [
          `Italian scholars soften claims with the conditional: "sembrerebbe che" (it would seem that), "si potrebbe ipotizzare", "ciò suggerirebbe", "i dati indicherebbero". Adverbs help too: "probabilmente", "verosimilmente", "in parte", "in linea di massima".`,
          `Hedging is not weakness: an unqualified claim ("è certo che") must be backed by strong evidence, and Italian readers notice the difference.`,
        ],
        examples: [
          { it: "Sembrerebbe che le due versioni siano state scritte nello stesso periodo.", en: "It would seem that the two versions were written in the same period." },
          { it: "Si potrebbe ipotizzare un'influenza francese.", en: "A French influence might be hypothesised." },
          { it: "Questi risultati suggerirebbero un legame tra i due fattori.", en: "These results would suggest a link between the two factors." },
          { it: "Verosimilmente il testo fu copiato da un allievo.", en: "The text was probably copied by a pupil." },
        ],
      },
      {
        heading: `Citing and connecting`,
        body: [
          `Introduce sources with "secondo X", "come sostiene Y", "come osserva Z", "X afferma che", "a detta di", and point to them with "cfr." (compare, see), "ibid." and "op. cit.". When paraphrasing, change the structure as well as the words, and keep the reporting verb in the present: "Rossi sostiene che...".`,
          `Formal connectors: "pertanto", "dunque" (therefore), "ne consegue che" (it follows that), "a tal proposito" (in this regard), "in altri termini" (in other words), "d'altra parte" (on the other hand), "in sintesi" (in short).`,
        ],
        table: {
          headers: ["Function", "Connectors"],
          rows: [
            ["consequence", "pertanto, dunque, ne consegue che, di conseguenza"],
            ["addition", "inoltre, per di più, altresì"],
            ["contrast", "tuttavia, d'altra parte, al contrario"],
            ["reformulation", "in altri termini, ovvero, vale a dire"],
            ["example", "ad esempio, si pensi a, a titolo di esempio"],
            ["summary", "in sintesi, in conclusione, riassumendo"],
          ],
        },
        examples: [
          { it: "Secondo alcuni studiosi, il manoscritto è più antico.", en: "According to some scholars, the manuscript is older." },
          { it: "Come osserva l'autore, la lingua cambia più in fretta della norma.", en: "As the author observes, language changes faster than the norm." },
          { it: "I dati sono incompleti; ne consegue che le conclusioni sono provvisorie.", en: "The data are incomplete; it follows that the conclusions are provisional." },
          { it: "Si pensi, ad esempio, al ruolo della televisione.", en: "Consider, for example, the role of television." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Io penso che il fenomeno è recente.",
        right: "Si ritiene che il fenomeno sia recente.",
        why: `Academic prose prefers the impersonal, and opinion verbs take the subjunctive.`,
      },
      {
        wrong: "Sembrerebbe che il testo è stato copiato.",
        right: "Sembrerebbe che il testo sia stato copiato.",
        why: `"Sembrare che" takes the subjunctive, conditional or not.`,
      },
      {
        wrong: "Come ha sostenuto da Rossi...",
        right: "Come sostiene Rossi...",
        why: `"Sostenere" is active; no "da". And the reporting verb is usually in the present.`,
      },
      {
        wrong: "Pertanto, ma i dati mostrano il contrario.",
        right: "Tuttavia, i dati mostrano il contrario.",
        why: `"Pertanto" means therefore; for a contrast use "tuttavia", and never combine two connectors.`,
      },
    ],
    faqs: [
      {
        q: `Can I use "io" in a thesis?`,
        a: `Sparingly, in the introduction or when stating your own choices of method. Most Italian academic writing uses the impersonal or "noi".`,
      },
      {
        q: `What does "altresì" mean?`,
        a: `Also, likewise. It is very formal ("si segnala altresì che...") and belongs to academic and legal writing.`,
      },
      {
        q: `How do I cite in Italian style?`,
        a: `Common forms are author and year in parentheses ("(Rossi 2019)") or footnotes with "cfr." for see. Follow the style sheet of your department or journal.`,
      },
    ],
    related: ["passive-and-impersonal-in-writing", "formal-writing", "journalistic-italian", "scientific-and-financial-italian"],
    lessons: [
      "c1-academic-voice",
      "c1-hedging",
      "c1-citing-sources",
      "c1-summarising",
      "c1-drill-academic-phrases",
      "c1-reading-lab-academic",
      "c1-error-hunt-academic",
      "c1-mission-abstract",
      "c1-transform-informal-academic",
    ],
  },
  {
    slug: "journalistic-italian",
    title: "Sarebbe Stato Arrestato: The Language of Italian News",
    description:
      "How Italian journalism works: the conditional of hearsay (sarebbe stato arrestato, secondo fonti), headlines without verbs, quoting with ha dichiarato and ha precisato, the passive and impersonal in news, and the voice of the opinion column.",
    level: "C1",
    intro: [
      `Italian newspapers have their own grammar. The conditional marks unconfirmed facts ("il sindaco si sarebbe dimesso", the mayor has reportedly resigned), headlines drop verbs and articles ("Roma, chiuso il Colosseo per sciopero"), and quotations are introduced by a rich set of verbs.`,
      `Understanding these conventions lets you read between the lines: what the paper presents as fact, what it reports, and what it thinks.`,
    ],
    sections: [
      {
        heading: `The conditional of hearsay`,
        body: [
          `The present conditional reports an unconfirmed present ("il ministro sarebbe pronto a dimettersi", the minister is said to be ready to resign); the past conditional reports an unconfirmed past ("l'uomo avrebbe rubato tre auto", the man allegedly stole three cars). It often comes with "secondo fonti", "secondo indiscrezioni", "stando a".`,
          `This conditional has no condition: it is a pure marker of distance. Translating it into English needs allegedly, reportedly or is said to.`,
        ],
        examples: [
          { it: "Secondo fonti vicine al governo, il ministro sarebbe pronto a dimettersi.", en: "According to sources close to the government, the minister is ready to resign." },
          { it: "L'uomo avrebbe rubato tre auto in una settimana.", en: "The man allegedly stole three cars in a week." },
          { it: "Stando alle prime ricostruzioni, l'incendio sarebbe partito da un cortocircuito.", en: "According to initial reports, the fire was started by a short circuit." },
          { it: "I due si sarebbero conosciuti all'università.", en: "The two reportedly met at university." },
        ],
      },
      {
        heading: `Headlines`,
        body: [
          `Headlines drop the verb or reduce it to a participle: "Maltempo, chiuse le scuole a Genova" (schools closed); "Approvata la riforma"; "Treni, sciopero di 24 ore venerdì". A place or topic followed by a comma sets the scene.`,
          `Nominal style dominates ("Boom di turisti a Venezia", "Stop alle auto in centro"), and English loanwords are common in headlines: "boom", "stop", "flop", "record".`,
        ],
        examples: [
          { it: "Maltempo, chiuse le scuole a Genova", en: "Bad weather: schools closed in Genoa" },
          { it: "Approvata la riforma delle pensioni", en: "Pension reform approved" },
          { it: "Treni, sciopero di 24 ore venerdì", en: "Trains: 24-hour strike on Friday" },
          { it: "Musei, record di visitatori ad agosto", en: "Museums: record visitor numbers in August" },
        ],
      },
      {
        heading: `Quoting and reporting`,
        body: [
          `Italian news rarely repeats "ha detto". It chooses verbs that also tell you the speaker's stance: "ha dichiarato", "ha affermato", "ha sottolineato" (stressed), "ha precisato" (clarified), "ha ribadito" (reiterated), "ha ammesso", "ha smentito" (denied), "ha annunciato", "ha replicato" (retorted).`,
          `Direct quotations go in « », and the verb often follows with inversion: "«Non mi dimetto», ha ribadito il sindaco." Opinion columns use the first person, irony, rhetorical questions and allusion; the news section uses the passive and impersonal to keep a neutral tone.`,
        ],
        table: {
          headers: ["Verb", "Nuance"],
          rows: [
            ["dichiarare, affermare", "neutral statement"],
            ["sottolineare", "emphasis"],
            ["precisare", "clarification, correction"],
            ["ribadire", "repetition, insistence"],
            ["smentire", "denial of a report"],
            ["replicare", "response to criticism"],
            ["ammettere", "concession"],
          ],
        },
        examples: [
          { it: "«Non mi dimetto», ha ribadito il sindaco.", en: "'I'm not resigning,' the mayor reiterated." },
          { it: "L'azienda ha smentito le voci di una chiusura.", en: "The company denied rumours of a closure." },
          { it: "Il ministro ha precisato che la misura sarà temporanea.", en: "The minister made clear that the measure will be temporary." },
          { it: "Sono stati evacuati circa duecento residenti.", en: "About two hundred residents were evacuated." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Secondo la polizia, l'uomo ha probabilmente rubato forse tre auto.",
        right: "Secondo la polizia, l'uomo avrebbe rubato tre auto.",
        why: `Italian news marks an unconfirmed fact with the past conditional, not with stacked adverbs.`,
      },
      {
        wrong: "Il sindaco sarebbe dimesso.",
        right: "Il sindaco si sarebbe dimesso.",
        why: `"Dimettersi" is reflexive; keep the "si" in the conditional.`,
      },
      {
        wrong: "«Non è vero», il portavoce ha smentito.",
        right: "«Non è vero», ha smentito il portavoce.",
        why: `After a quotation, the verb comes before the subject.`,
      },
      {
        wrong: "L'azienda ha smentito che chiude.",
        right: "L'azienda ha smentito che stia per chiudere.",
        why: `"Smentire che" takes the subjunctive, like other verbs of denial.`,
      },
    ],
    faqs: [
      {
        q: `Is the conditional of hearsay used outside journalism?`,
        a: `Yes, whenever you report something without vouching for it: "a quanto pare, Marco si sarebbe trasferito a Londra". It is very common in formal speech and writing.`,
      },
      {
        q: `Why do Italian headlines use so many English words?`,
        a: `They are short and punchy. Some ("boom", "stop", "flop", "record") are fully established in Italian; others are fashion. Inside the article the Italian term often appears.`,
      },
      {
        q: `What is a "pezzo di colore"?`,
        a: `A colour piece: a descriptive, often light article around a news event. The "editoriale" or "fondo" is the paper's main opinion piece; the "corsivo" is a short, often ironic comment.`,
      },
    ],
    related: ["past-conditional", "reported-speech-advanced", "nominal-style", "rhetoric-and-persuasion"],
    lessons: [
      "c1-news-conditional",
      "c1-headline-syntax",
      "c1-quoting",
      "c1-opinion-column",
      "c1-drill-journalism",
      "c1-reading-lab-front-page",
      "c1-error-hunt-journalism",
      "c1-mission-opinion-column",
      "c1-transform-fact-to-news",
    ],
  },
  {
    slug: "mood-and-meaning",
    title: "Non Dico Che Sia Vero: When the Mood Changes the Meaning",
    description:
      "Advanced Italian mood choice: the same verb with the indicative or the subjunctive meaning different things (non dico che è vero / sia vero, capisco che sei / tu sia, ammetto che), il fatto che, and a che-clause placed at the start of the sentence.",
    level: "C1",
    intro: [
      `At Intermediate level the subjunctive follows triggers. At this level you discover that many verbs take both moods, and the choice is a message in itself. "Non dico che è vero" asserts that it is true while refusing to say it; "non dico che sia vero" leaves the truth open. "Capisco che sei stanco" means I realise you're tired; "capisco che tu sia stanco" means I understand why you might be.`,
      `The general principle: the indicative presents information as fact; the subjunctive presents it as something considered, evaluated, assumed or not asserted.`,
    ],
    sections: [
      {
        heading: `Same verb, two meanings`,
        body: [
          `Verbs of saying, understanding and admitting change meaning with the mood. With the indicative they report a fact; with the subjunctive they comment on a possibility or concede a point.`,
          `"Ammettere che" + indicative is to admit a fact ("ammetto che ho sbagliato"); + subjunctive it means to grant, for the sake of argument ("ammettiamo che tu abbia ragione"). "Sentire che" + indicative is to hear or feel that; "aspettare che" always takes the subjunctive.`,
        ],
        table: {
          headers: ["Verb", "Indicative", "Subjunctive"],
          rows: [
            ["capire che", "Capisco che sei stanco. (I realise)", "Capisco che tu sia stanco. (I understand why)"],
            ["non dire che", "Non dico che è falso. (it is, but...)", "Non dico che sia falso. (it may not be)"],
            ["ammettere che", "Ammetto che ho sbagliato. (admit)", "Ammettiamo che tu abbia ragione. (suppose)"],
            ["pensare che", "Pensa che è già mezzanotte! (just think)", "Penso che sia mezzanotte. (I believe)"],
            ["sapere se / non so se", "Non so se viene. (spoken)", "Non so se venga. (formal, more doubtful)"],
          ],
        },
        examples: [
          { it: "Non dico che hai torto, dico solo che potevi avvisarmi.", en: "I'm not saying you're wrong, just that you could have told me." },
          { it: "Non dico che sia impossibile, ma è molto difficile.", en: "I'm not saying it's impossible, but it's very difficult." },
          { it: "Capisco che tu sia arrabbiato, ma calmati.", en: "I understand you might be angry, but calm down." },
          { it: "Ammettiamo che abbia ragione lui: cosa facciamo?", en: "Let's suppose he's right: what do we do?" },
          { it: "Pensa che non lo vedo da vent'anni!", en: "Just think, I haven't seen him for twenty years!" },
        ],
      },
      {
        heading: `Il fatto che`,
        body: [
          `"Il fatto che" (the fact that) presents information as a topic to evaluate, and usually takes the subjunctive, even when the fact is certain: "il fatto che sia arrivato in ritardo non mi sorprende". When the clause states new information after the verb, the indicative is also possible: "dipende dal fatto che non ha studiato".`,
          `"Che" + subjunctive at the start of a sentence works the same way: "che sia difficile, lo so" (that it's difficult, I know). The fronted clause is the topic, and Italian picks it up with "lo".`,
        ],
        examples: [
          { it: "Il fatto che sia arrivato in ritardo non mi sorprende.", en: "The fact that he arrived late doesn't surprise me." },
          { it: "Mi preoccupa il fatto che nessuno abbia risposto.", en: "It worries me that nobody has answered." },
          { it: "Che sia difficile, lo sappiamo tutti.", en: "We all know it's difficult." },
          { it: "Che tu abbia ragione, non lo metto in dubbio.", en: "I don't doubt that you're right." },
        ],
      },
      {
        heading: `Relative clauses and degrees of certainty`,
        body: [
          `In relative clauses the mood marks whether the thing is known or only described: "cerco una casa che ha il giardino" (a specific one I've heard about) vs "cerco una casa che abbia il giardino" (any such house).`,
          `After "è vero che", "è certo che", "è evidente che" the indicative is standard; after their negatives ("non è vero che", "non è detto che") the subjunctive: "non è detto che sia così" (it isn't necessarily so).`,
        ],
        examples: [
          { it: "È vero che il museo è chiuso il lunedì.", en: "It's true that the museum is closed on Mondays." },
          { it: "Non è detto che sia una cattiva idea.", en: "It's not necessarily a bad idea." },
          { it: "Cerco una casa che abbia il giardino, anche piccolo.", en: "I'm looking for a house with a garden, even a small one." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ammettiamo che hai ragione.",
        right: "Ammettiamo che tu abbia ragione.",
        why: `"Ammettiamo che" (let's suppose) introduces a hypothesis: subjunctive.`,
      },
      {
        wrong: "Il fatto che è partito mi dispiace.",
        right: "Il fatto che sia partito mi dispiace.",
        why: `"Il fatto che" as the topic of an evaluation takes the subjunctive.`,
      },
      {
        wrong: "Che sia difficile, so.",
        right: "Che sia difficile, lo so.",
        why: `A fronted "che" clause is picked up by "lo".`,
      },
      {
        wrong: "Non è detto che è così.",
        right: "Non è detto che sia così.",
        why: `"Non è detto che" denies certainty: subjunctive.`,
      },
    ],
    faqs: [
      {
        q: `Is the indicative after "capisco che" a mistake?`,
        a: `No: it means something different. "Capisco che sei stanco" (I can see you're tired) is a statement; "capisco che tu sia stanco" is empathy or concession.`,
      },
      {
        q: `Do native speakers really make these distinctions?`,
        a: `Educated speakers do, especially in writing and careful speech. In casual conversation the indicative spreads, but the subjunctive still carries the nuance of distance or hypothesis.`,
      },
      {
        q: `How do I translate the nuance into English?`,
        a: `With words: necessarily, might, I can see why, for the sake of argument. English marks with vocabulary what Italian marks with mood.`,
      },
    ],
    related: ["subjunctive-in-main-clauses", "subjunctive-in-relative-clauses", "subjunctive-uses", "modal-nuance"],
    lessons: [
      "c1-mood-changes-meaning",
      "c1-il-fatto-che",
      "c1-fronted-che-clause",
      "c1-drill-mood-nuance",
      "c1-reading-lab-mood",
      "c1-error-hunt-mood",
      "c1-dialogue-lab-nuance",
      "c1-mission-nuanced-reply",
      "c1-spiral-mood-modal",
    ],
  },
  {
    slug: "subjunctive-in-main-clauses",
    title: "Che Sia Vero? Venga Pure! The Subjunctive Standing Alone",
    description:
      "The Italian subjunctive without a main verb: doubtful questions (che sia vero?), permissions and orders (venga pure!, che entrino), wishes and blessings (che Dio ce la mandi buona, magari!), and fixed expressions like sia... sia, costi quel che costi, che io sappia.",
    level: "C1",
    intro: [
      `The subjunctive usually depends on a verb or conjunction. But Italian also uses it alone, in independent clauses, where it carries a meaning of its own: a doubtful question ("che sia già partito?", could he have left already?), a permission or indirect order ("venga pure", "che entrino"), or a wish ("che Dio ce la mandi buona!").`,
      `Many fixed expressions also preserve the subjunctive, and they are frequent in speech and writing alike: "sia... sia", "costi quel che costi", "che io sappia", "piaccia o non piaccia".`,
    ],
    sections: [
      {
        heading: `Doubt: che sia vero?`,
        body: [
          `"Che" + subjunctive as a question expresses a worried or puzzled guess: "che sia malato?" (could he be ill?), "che abbiano cambiato idea?" (might they have changed their minds?). It is the spoken equivalent of "è possibile che...?" and very common.`,
          `With the imperfect subjunctive, the guess refers to the past: "che fosse lui l'uomo della foto?"`,
        ],
        examples: [
          { it: "Non risponde al telefono. Che sia già partito?", en: "He's not answering the phone. Could he have left already?" },
          { it: "Che abbiano sbagliato indirizzo?", en: "Might they have got the address wrong?" },
          { it: "Che fosse lui l'uomo della foto?", en: "Could he have been the man in the photo?" },
        ],
      },
      {
        heading: `Permission and orders`,
        body: [
          `The polite "Lei" imperative is itself a present subjunctive: "venga", "si accomodi", "scusi". Adding "pure" makes it a permission: "venga pure" (do come in), "faccia pure" (go ahead).`,
          `"Che" + third-person subjunctive gives an order or permission about someone not present: "che entrino" (let them come in), "che aspetti" (he can wait), "se vuole lamentarsi, che si lamenti" (if he wants to complain, let him).`,
        ],
        examples: [
          { it: "Posso entrare? Venga pure!", en: "Can I come in? Of course, do come in!" },
          { it: "Faccia pure con calma.", en: "Take your time." },
          { it: "Sono arrivati i signori Bianchi. Che entrino.", en: "Mr and Mrs Bianchi have arrived. Let them come in." },
          { it: "Se vuole lamentarsi, che si lamenti pure.", en: "If he wants to complain, let him." },
        ],
      },
      {
        heading: `Wishes and fixed expressions`,
        body: [
          `Wishes and blessings: "che Dio ce la mandi buona" (let's hope for the best), "che ti venga un colpo!" (a curse, damn you), "magari fosse vero!", "volesse il cielo!" (heaven grant it!), "viva gli sposi!".`,
          `Fixed expressions with the subjunctive are everywhere: "sia... sia" (both... and), "che io sappia" (as far as I know), "costi quel che costi" (whatever it takes), "come che sia" (be that as it may), "non sia mai!" (heaven forbid!), "a dire il vero", "piaccia o non piaccia" (like it or not).`,
        ],
        table: {
          headers: ["Expression", "Meaning"],
          rows: [
            ["sia... sia", "both... and"],
            ["che io sappia", "as far as I know"],
            ["costi quel che costi", "whatever it costs"],
            ["piaccia o non piaccia", "like it or not"],
            ["non sia mai!", "heaven forbid!"],
            ["volesse il cielo!", "if only! heaven grant it!"],
            ["che Dio ce la mandi buona", "let's hope for the best"],
          ],
        },
        examples: [
          { it: "Che io sappia, il negozio è aperto anche la domenica.", en: "As far as I know, the shop is open on Sundays too." },
          { it: "Lo finiremo entro venerdì, costi quel che costi.", en: "We'll finish it by Friday, whatever it takes." },
          { it: "Piaccia o non piaccia, le regole sono queste.", en: "Like it or not, these are the rules." },
          { it: "Il corso è aperto sia agli studenti sia ai lavoratori.", en: "The course is open to both students and workers." },
          { it: "Domani c'è l'esame: che Dio ce la mandi buona!", en: "The exam is tomorrow: let's hope for the best!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Che è già partito?",
        right: "Che sia già partito?",
        why: `A doubtful "che" question takes the subjunctive.`,
      },
      {
        wrong: "Venga puro!",
        right: "Venga pure!",
        why: `The adverb is "pure" (do, by all means), invariable.`,
      },
      {
        wrong: "Che io so, è chiuso.",
        right: "Che io sappia, è chiuso.",
        why: `The fixed expression is "che io sappia", with the subjunctive.`,
      },
      {
        wrong: "Sia gli studenti che sia i docenti.",
        right: "Sia gli studenti sia i docenti.",
        why: `Use "sia... sia" or "sia... che", never both.`,
      },
    ],
    faqs: [
      {
        q: `Is "sia... che" correct, or only "sia... sia"?`,
        a: `Both are accepted. "Sia... sia" is considered more careful; "sia... che" is extremely common and fine in most contexts.`,
      },
      {
        q: `Why is the Lei imperative a subjunctive?`,
        a: `Historically, polite orders were indirect wishes in the third person ("[che] Lei venga"). The "che" disappeared but the subjunctive stayed.`,
      },
      {
        q: `Are curses like "che ti venga un colpo" rude?`,
        a: `It depends on tone; this one is often half-joking. Treat curses as recognition vocabulary until you are sure of the register.`,
      },
    ],
    related: ["mood-and-meaning", "imperative", "imperfect-subjunctive"],
    lessons: [
      "c1-independent-subjunctive",
      "c1-drill-mood-nuance",
      "c1-dialogue-lab-nuance",
      "c1-listening-lab-nuance",
    ],
  },
  {
    slug: "modal-nuance",
    title: "Avrebbe Dovuto, Deve Essere Stato: Modal Verbs in Depth",
    description:
      "Italian dovere, potere and volere across tenses and moods: obligation and deduction (deve aver perso il treno), reproach (avresti dovuto dirmelo), the auxiliary of modals (sarebbe potuto venire), potere vs riuscire vs sapere, and verbs of perception + infinitive.",
    level: "C1",
    intro: [
      `"Dovere" and "potere" change meaning with tense and mood far more than must and can do in English. "Doveva essere a casa" can mean he was supposed to be at home or he must have been at home; "avresti dovuto dirmelo" is a reproach (you should have told me); "deve aver perso il treno" is a deduction (he must have missed the train).`,
      `This guide sorts out these meanings, the choice of auxiliary with modals, the distinction between "potere", "riuscire" and "sapere", and the verbs of perception that take an infinitive: "l'ho visto uscire".`,
    ],
    sections: [
      {
        heading: `Dovere: obligation, expectation, deduction`,
        body: [
          `Present: obligation or deduction. "Devo partire" (I have to leave); "deve essere stanco" (he must be tired). Past deduction uses the present of "dovere" + past infinitive: "deve aver perso il treno" (he must have missed the train).`,
          `Imperfetto: a plan or expectation, not necessarily fulfilled: "dovevo partire ieri, ma..." (I was supposed to leave yesterday). Passato prossimo: an obligation that was fulfilled: "ho dovuto aspettare un'ora" (I had to wait, and I did). Past conditional: what should have happened and didn't: "avresti dovuto dirmelo".`,
        ],
        table: {
          headers: ["Form", "Meaning", "Example"],
          rows: [
            ["devo / deve", "must, have to; must be", "Deve essere stanco."],
            ["deve aver + participle", "must have (deduction)", "Deve aver perso il treno."],
            ["dovevo", "was supposed to", "Dovevo partire ieri."],
            ["ho dovuto", "had to (and did)", "Ho dovuto aspettare un'ora."],
            ["dovrei", "should, ought to", "Dovrei studiare di più."],
            ["avrei dovuto", "should have (but didn't)", "Avresti dovuto dirmelo."],
          ],
        },
        examples: [
          { it: "Non risponde: deve essere ancora in riunione.", en: "He's not answering: he must still be in a meeting." },
          { it: "Deve aver dimenticato l'appuntamento.", en: "She must have forgotten the appointment." },
          { it: "Dovevamo vederci alle otto, ma è saltato tutto.", en: "We were supposed to meet at eight, but it all fell through." },
          { it: "Ho dovuto rifare tutto da capo.", en: "I had to redo everything from scratch." },
          { it: "Avresti dovuto dirmelo prima.", en: "You should have told me before." },
        ],
      },
      {
        heading: `Potere, and the auxiliary of modals`,
        body: [
          `"Potrebbe" is possibility (it might); "avrebbe potuto" is a missed possibility or a reproach (he could have). "Poteva" in the imperfetto can also reproach: "potevi chiamare!" (you could have called!). "Può darsi che" + subjunctive means maybe.`,
          `In compound tenses, a modal takes the auxiliary of the infinitive that follows: "sono dovuto partire" (partire takes essere), "ho dovuto lavorare". In speech "avere" is common with all verbs ("ho dovuto partire"), and both are accepted. With a reflexive, the auxiliary depends on where the pronoun goes: "mi sono dovuto alzare" but "ho dovuto alzarmi".`,
        ],
        examples: [
          { it: "Potrebbe piovere nel pomeriggio.", en: "It might rain in the afternoon." },
          { it: "Saresti potuto venire con noi.", en: "You could have come with us." },
          { it: "Potevi almeno avvisarmi!", en: "You could at least have let me know!" },
          { it: "Mi sono dovuta alzare alle cinque. / Ho dovuto alzarmi alle cinque.", en: "I had to get up at five." },
        ],
      },
      {
        heading: `Potere, riuscire, sapere`,
        body: [
          `"Potere" is permission or possibility ("posso entrare?"); "riuscire a" is managing despite difficulty ("non riesco ad aprire la porta"); "sapere" + infinitive is a learned skill ("so nuotare", "sai guidare?"). English can covers all three, which is why learners say "non posso nuotare" for "non so nuotare".`,
          `In the past, "non sono riuscito a" is often the natural translation of couldn't: "non sono riuscito a dormire" (I couldn't sleep).`,
        ],
        examples: [
          { it: "Scusi, posso sedermi qui?", en: "Excuse me, may I sit here?" },
          { it: "Non riesco a leggere senza occhiali.", en: "I can't read without my glasses." },
          { it: "Sai suonare la chitarra?", en: "Can you play the guitar?" },
          { it: "Stanotte non sono riuscita a dormire.", en: "I couldn't sleep last night." },
        ],
      },
      {
        heading: `Perception + infinitive`,
        body: [
          `After "vedere", "sentire", "guardare", "ascoltare", "osservare", Italian uses the infinitive where English has an infinitive or -ing: "l'ho visto uscire" (I saw him go out), "li ho sentiti litigare" (I heard them arguing). The object pronoun goes before the conjugated verb, and the participle agrees with it.`,
          `A relative clause with "che" is an alternative: "l'ho visto che usciva". Never use the gerund here.`,
        ],
        examples: [
          { it: "L'ho vista uscire dal portone alle sette.", en: "I saw her come out of the front door at seven." },
          { it: "Li abbiamo sentiti litigare tutta la notte.", en: "We heard them arguing all night." },
          { it: "Guardavo i bambini giocare nel parco.", en: "I was watching the children play in the park." },
          { it: "Hai mai sentito cantare Marta?", en: "Have you ever heard Marta sing?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Doveva perdere il treno. (meaning he must have missed it)",
        right: "Deve aver perso il treno.",
        why: `Deduction about the past: present "deve" + past infinitive. "Doveva perdere il treno" means he was supposed to miss it.`,
      },
      {
        wrong: "Dovresti avermelo detto.",
        right: "Avresti dovuto dirmelo.",
        why: `Should have = past conditional of "dovere" + simple infinitive.`,
      },
      {
        wrong: "Non posso nuotare, non ho mai imparato.",
        right: "Non so nuotare, non ho mai imparato.",
        why: `A learned skill takes "sapere".`,
      },
      {
        wrong: "L'ho visto uscendo.",
        right: "L'ho visto uscire.",
        why: `Verbs of perception take the infinitive, not the gerund.`,
      },
      {
        wrong: "Mi ho dovuto alzare presto.",
        right: "Mi sono dovuto alzare presto.",
        why: `With the pronoun before the modal, the auxiliary is "essere".`,
      },
    ],
    faqs: [
      {
        q: `"Ho dovuto partire" or "sono dovuto partire"?`,
        a: `The traditional rule wants "sono dovuto partire" (the auxiliary of "partire"). "Ho dovuto partire" is also widely used and accepted. In careful writing follow the rule.`,
      },
      {
        q: `How do I say must have in Italian?`,
        a: `"Deve aver" + participle for a deduction ("deve aver dimenticato") and "sarà" + participle for a softer guess ("avrà dimenticato", he's probably forgotten).`,
      },
      {
        q: `Can "volere" be used like this too?`,
        a: `Yes: "avrei voluto" (I would have liked), "ho voluto" (I insisted on), "volevo" (I wanted, also a polite request: "volevo un caffè").`,
      },
    ],
    related: ["modal-verbs", "past-conditional", "future-perfect", "fare-and-lasciare-infinitive"],
    lessons: [
      "c1-dovere-nuance",
      "c1-potere-nuance",
      "c1-modal-past-conditional",
      "c1-perception-infinitive",
      "c1-drill-modal-nuance",
      "c1-reading-lab-modals",
      "c1-error-hunt-modals",
      "c1-dialogue-lab-deductions",
      "c1-mission-incident-analysis",
      "c1-listening-lab-modals",
    ],
  },
  {
    slug: "idioms-and-proverbs",
    title: "In Bocca al Lupo: Italian Idioms and Proverbs",
    description:
      "The Italian idioms and proverbs every advanced learner needs: fare la bella figura, essere al verde, costare un occhio della testa, prendere due piccioni con una fava, chi va piano va sano e va lontano, and how to use them without sounding forced.",
    level: "C1",
    intro: [
      `Idioms (modi di dire) and proverbs (proverbi) are where Italian stops being translatable word for word. "Essere al verde" has nothing to do with green (it means to be broke), and "in bocca al lupo" (into the wolf's mouth) means good luck, to which you answer "crepi!" (may it die!).`,
      `Use them the way Italians do: one at the right moment, often shortened. "Tra il dire e il fare..." is enough; everyone completes the proverb in their head.`,
    ],
    sections: [
      {
        heading: `Everyday idioms with verbs and the body`,
        body: [
          `Many idioms are built on "fare", "avere", "essere" or a part of the body. Learn them with their grammar: "fare finta di" + infinitive, "non vedere l'ora di" + infinitive, "prendere in giro" + person.`,
          `"Fare bella figura" and "fare brutta figura" deserve special attention: the idea of making a good or bad impression is central to Italian social life.`,
        ],
        table: {
          headers: ["Idiom", "Meaning"],
          rows: [
            ["fare bella / brutta figura", "to make a good / bad impression"],
            ["fare finta di", "to pretend to"],
            ["fare a meno di", "to do without"],
            ["non vedere l'ora di", "can't wait to"],
            ["prendere in giro", "to tease, to make fun of"],
            ["costare un occhio della testa", "to cost an arm and a leg"],
            ["avere le mani bucate", "to spend money like water"],
            ["essere al verde", "to be broke"],
            ["avere la testa tra le nuvole", "to have your head in the clouds"],
            ["essere un pezzo di pane", "to be a good-hearted person"],
          ],
        },
        examples: [
          { it: "Non vedo l'ora di andare in vacanza.", en: "I can't wait to go on holiday." },
          { it: "Ha fatto finta di non vedermi.", en: "He pretended not to see me." },
          { it: "Quel divano è costato un occhio della testa.", en: "That sofa cost an arm and a leg." },
          { it: "A fine mese sono sempre al verde.", en: "At the end of the month I'm always broke." },
          { it: "Con quel discorso ha fatto proprio una brutta figura.", en: "He really made a bad impression with that speech." },
        ],
      },
      {
        heading: `Animals and colours`,
        body: [
          `Animal idioms describe character and luck: "essere una volpe" (to be cunning), "prendere due piccioni con una fava" (to kill two birds with one stone), "in bocca al lupo", "avere una fame da lupi" (to be starving), "essere un orso" (to be unsociable).`,
          `Colours describe moods and situations: "vedere tutto nero" (to be pessimistic), "passare la notte in bianco" (to have a sleepless night), "essere al verde", "diventare rosso" (to blush), "un matrimonio in bianco" (an unconsummated marriage), "cronaca nera" (crime news), "il giallo" (a detective story).`,
        ],
        examples: [
          { it: "Domani hai l'esame? In bocca al lupo! Crepi!", en: "You've got the exam tomorrow? Good luck! Thanks!" },
          { it: "Passando dalla posta, ho preso due piccioni con una fava.", en: "By going via the post office, I killed two birds with one stone." },
          { it: "Ho passato la notte in bianco per il caldo.", en: "I didn't sleep a wink because of the heat." },
          { it: "Non vedere tutto nero, vedrai che si sistema.", en: "Don't be so gloomy, you'll see it'll sort itself out." },
          { it: "Ho una fame da lupi!", en: "I'm starving!" },
        ],
      },
      {
        heading: `Proverbs`,
        body: [
          `Proverbs comment on a situation, often with a hint of irony. Italians frequently say only the first half: "chi la fa..." (he who does it... [expects it back]), "tra il dire e il fare...".`,
          `Use them in conversation and opinion columns; avoid them in formal reports.`,
        ],
        table: {
          headers: ["Proverb", "Meaning, or English equivalent"],
          rows: [
            ["Chi va piano va sano e va lontano.", "Slow and steady wins the race."],
            ["Tra il dire e il fare c'è di mezzo il mare.", "Easier said than done."],
            ["L'abito non fa il monaco.", "Don't judge a book by its cover."],
            ["Chi la fa l'aspetti.", "What goes around comes around."],
            ["Non tutte le ciambelle riescono col buco.", "Things don't always turn out as planned."],
            ["Meglio tardi che mai.", "Better late than never."],
            ["Chi dorme non piglia pesci.", "The early bird catches the worm."],
            ["Il buongiorno si vede dal mattino.", "A good start says a lot about the rest."],
          ],
        },
        examples: [
          { it: "La torta è un po' bruciata, ma non tutte le ciambelle riescono col buco.", en: "The cake is a bit burnt, but things don't always turn out perfectly." },
          { it: "Ti ha fatto lo stesso scherzo? Eh, chi la fa l'aspetti!", en: "He played the same trick on you? Well, what goes around comes around!" },
          { it: "Vuole aprire un ristorante, ma tra il dire e il fare...", en: "He wants to open a restaurant, but easier said than done..." },
        ],
      },
      {
        heading: `Idioms with verbs`,
        body: [
          `Some verb idioms are informal and best used among friends: "tagliare la corda" (to sneak off), "alzare il gomito" (to drink too much), "rompere le scatole" (to be a pain, a polite version of ruder expressions), "piantare in asso" (to leave someone in the lurch), "vuotare il sacco" (to spill the beans).`,
        ],
        examples: [
          { it: "Alla festa, verso mezzanotte, abbiamo tagliato la corda.", en: "At the party, around midnight, we slipped away." },
          { it: "Ieri sera Luca ha alzato un po' il gomito.", en: "Last night Luca had a bit too much to drink." },
          { it: "Smettila di rompere le scatole!", en: "Stop being such a pain!" },
          { it: "Alla fine ha vuotato il sacco.", en: "In the end he spilled the beans." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "In bocca al lupo! Grazie!",
        right: "In bocca al lupo! Crepi!",
        why: `The traditional reply is "crepi" (or "crepi il lupo"). "Grazie" is considered bad luck by some.`,
      },
      {
        wrong: "Non vedo l'ora a partire.",
        right: "Non vedo l'ora di partire.",
        why: `"Non vedere l'ora" takes "di" + infinitive.`,
      },
      {
        wrong: "Ha fatto una figura bella.",
        right: "Ha fatto bella figura.",
        why: `The idiom is fixed: "fare bella figura", with no article and the adjective first.`,
      },
      {
        wrong: "Ho ucciso due uccelli con una pietra.",
        right: "Ho preso due piccioni con una fava.",
        why: `Translate idioms by equivalent, not word for word.`,
      },
    ],
    faqs: [
      {
        q: `Will using many idioms make my Italian sound more natural?`,
        a: `Only if they fit the moment. One well-placed idiom sounds fluent; three in a sentence sound like a textbook. Listen for how often Italians actually use each one.`,
      },
      {
        q: `Are idioms the same all over Italy?`,
        a: `The ones here are national. Every region also has its own, often from dialect, which you will meet in conversation.`,
      },
      {
        q: `Why "crepi" after "in bocca al lupo"?`,
        a: `It comes from hunters' superstition: wishing someone good luck directly could bring the opposite. Answering may the wolf die closes the ritual.`,
      },
    ],
    related: ["advanced-idioms-and-latin", "spoken-italian", "register-shifting"],
    lessons: [
      "b2-idioms-fare",
      "b2-idioms-body",
      "b2-idioms-food",
      "b2-idioms-everyday",
      "c1-proverbs",
      "c1-animal-idioms",
      "c1-colour-idioms",
      "c1-verb-idioms",
      "c1-drill-idioms",
      "c1-error-hunt-idioms",
      "c1-mission-idiom-column",
    ],
  },
  {
    slug: "register-shifting",
    title: "Dai, Raga! / Gentile Dottoressa: Shifting Register",
    description:
      "How Italian marks register (tu / Lei, vocabulary, syntax, sentence length), from informal chat to very formal letters, how to rewrite a message for a different reader, and the politeness strategies that make requests sound right.",
    level: "C1",
    intro: [
      `Every Italian sentence carries a register, and Italians notice it immediately. "Ciao raga, ci vediamo dopo?" (to friends), "Ci vediamo più tardi?" (neutral), "Sarebbe possibile incontrarci nel pomeriggio?" (formal) and "Si richiede la Sua presenza in data odierna" (bureaucratic) all ask for a meeting.`,
      `At an Advanced level you are expected to move between these registers on purpose: to write the same message three ways, and to read the signals in what others write to you.`,
    ],
    sections: [
      {
        heading: `The markers of register`,
        body: [
          `The address form is the first signal: "tu" for friends, family, young people and many colleagues; "Lei" for strangers, customers, older people and anyone in an official role. Vocabulary is the second: "prendere" vs "ricevere", "dire" vs "comunicare", "fare" vs "effettuare", "un sacco di" vs "numerosi".`,
          `Syntax and length are the third. Informal Italian uses short sentences, dislocation and markers ("dai", "tipo", "cioè"); formal Italian uses subordination, the subjunctive, the conditional and nominal phrases.`,
        ],
        table: {
          headers: ["Informal", "Neutral", "Formal"],
          rows: [
            ["Ciao!", "Buongiorno!", "Gentile signora,"],
            ["Mi passi il file?", "Puoi mandarmi il file?", "Le sarei grato se potesse inviarmi il documento."],
            ["Un sacco di gente", "Molte persone", "Numerose persone"],
            ["Boh, non lo so.", "Non lo so.", "Non sono in grado di rispondere."],
            ["Ci sentiamo!", "A presto!", "Cordiali saluti"],
          ],
        },
        examples: [
          { it: "Raga, stasera pizza da me?", en: "Guys, pizza at mine tonight?" },
          { it: "Ti va di venire a cena da me stasera?", en: "Do you fancy coming to dinner at mine tonight?" },
          { it: "Sarebbe disponibile per un incontro giovedì pomeriggio?", en: "Would you be available for a meeting on Thursday afternoon?" },
          { it: "La riunione è stata spostata a data da destinarsi.", en: "The meeting has been postponed until a date to be decided." },
        ],
      },
      {
        heading: `Rewriting for another reader`,
        body: [
          `To raise the register: switch to "Lei", replace the imperative with a conditional or "potrebbe", add a formula of greeting and closing, replace everyday verbs with precise ones and remove dislocations and markers. To lower it, do the reverse and shorten.`,
          `Watch consistency: a message that starts with "Gentile" and ends with "Ciao!", or mixes "tu" and "Lei", sounds wrong to Italians.`,
        ],
        examples: [
          { it: "Mandami il contratto entro domani, grazie.", en: "Send me the contract by tomorrow, thanks." },
          { it: "Potrebbe inviarmi il contratto entro domani? La ringrazio.", en: "Could you send me the contract by tomorrow? Thank you." },
          { it: "Ti ricordo che domani c'è la riunione.", en: "Just a reminder that the meeting is tomorrow." },
          { it: "Le ricordo che la riunione si terrà domani alle 10.", en: "May I remind you that the meeting will be held tomorrow at 10." },
        ],
      },
      {
        heading: `Politeness strategies`,
        body: [
          `Italian softens requests with the conditional ("vorrei", "potrebbe"), the imperfetto of courtesy ("volevo chiederLe una cosa", I wanted to ask you something), indirect questions ("Le dispiacerebbe...?", "Sa per caso se...?") and minimisers ("un attimo", "una cosa veloce").`,
          `Refusals are cushioned too: "purtroppo non mi è possibile", "mi dispiace, ma...", "magari un'altra volta". A flat "no" sounds rude in most contexts.`,
        ],
        examples: [
          { it: "Buongiorno, volevo chiedere un'informazione.", en: "Good morning, I wanted to ask for some information." },
          { it: "Scusi, sa per caso se c'è una farmacia qui vicino?", en: "Excuse me, do you happen to know if there's a pharmacy near here?" },
          { it: "Le dispiacerebbe chiudere il finestrino?", en: "Would you mind closing the window?" },
          { it: "Mi dispiace, purtroppo stasera non posso. Magari un'altra volta?", en: "I'm sorry, I can't tonight unfortunately. Another time maybe?" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Gentile professore, ciao! Mi mandi i voti?",
        right: "Gentile professore, potrebbe inviarmi i voti? La ringrazio.",
        why: `Don't mix registers: a formal opening needs a formal request and closing.`,
      },
      {
        wrong: "Scusa, signora, dov'è la stazione?",
        right: "Scusi, signora, dov'è la stazione?",
        why: `A stranger addressed as "signora" gets "Lei": "scusi", not "scusa".`,
      },
      {
        wrong: "Voglio un caffè.",
        right: "Vorrei un caffè, per favore.",
        why: `"Voglio" sounds demanding in a request; use "vorrei" or the courtesy "volevo".`,
      },
      {
        wrong: "Le ringrazio, signora.",
        right: "La ringrazio, signora.",
        why: `"Ringraziare" takes a direct object: "La ringrazio" (formal you).`,
      },
    ],
    faqs: [
      {
        q: `When do Italians switch from Lei to tu?`,
        a: `When the older or more senior person proposes it: "diamoci del tu" or "dammi pure del tu". Among young people and in many workplaces "tu" is the default from the start.`,
      },
      {
        q: `What does "raga" mean?`,
        a: `It is short for "ragazzi" (guys), used by young people in speech and chat. Very informal.`,
      },
      {
        q: `Is the "imperfetto di cortesia" correct Italian?`,
        a: `Yes. "Volevo un chilo di pane", "volevo sapere se..." are standard and polite, softer than "voglio" and less formal than "vorrei".`,
      },
    ],
    related: ["formal-writing", "spoken-italian", "burocratese", "slang-and-youth-language"],
    lessons: [
      "c1-register-markers",
      "c1-informal-to-formal",
      "c1-formal-to-informal",
      "c1-politeness-strategies",
      "c1-drill-register-shifting",
      "c1-reading-lab-registers",
      "c1-error-hunt-register",
      "c1-dialogue-lab-registers",
      "c1-mission-three-versions",
      "c1-spiral-register",
    ],
  },
  {
    slug: "regional-italian",
    title: "La Maria, Annamo, Mo': Regional Italian",
    description:
      "How spoken Italian varies from region to region: the article with names in the North, the passato remoto in the South, tenere and stare in Naples, Roman and Tuscan features, Sicilian verb-final order, Swiss Italian words, and regional vocabulary like anguria and cocomero.",
    level: "C1",
    intro: [
      `Every Italian speaks a regional variety of the standard language. A Milanese says "la Giulia" and "ho mangiato" for yesterday's lunch, a Roman says "annamo" and "mo'", a Neapolitan asks "tieni fame?" and "stai a casa?", a Sicilian may say "andai al mare ieri". These are not dialects, which are separate languages, but regional Italian.`,
      `You need to recognise these features to follow natural conversation and films. In your own speech and writing, stay with the standard unless you live in the region and want to blend in.`,
    ],
    sections: [
      {
        heading: `The North`,
        body: [
          `In northern speech, especially in Lombardy, the article often goes before first names: "la Maria", "il Giovanni". The passato prossimo is used for all past events, even distant ones: "mio nonno è nato nel 1920". Vowels: "perché" may sound open, and "s" between vowels is voiced ("casa" with a z sound).`,
          `Typical words: "figo" (cool, now national), "pirla" (idiot, Milanese), "ciapa" (here, take it, from dialect), "la michetta" (a bread roll in Milan), "il moroso" or "la morosa" (boyfriend, girlfriend, in the North-East).`,
        ],
        examples: [
          { it: "Hai visto la Giulia stamattina?", en: "Have you seen Giulia this morning?" },
          { it: "Mio nonno è nato nel 1920 e ha fatto la guerra.", en: "My grandfather was born in 1920 and fought in the war." },
          { it: "Mi prendi due michette dal panettiere?", en: "Will you get me two bread rolls from the baker's?" },
        ],
      },
      {
        heading: `Rome and Tuscany`,
        body: [
          `Roman Italian drops endings and doubles consonants: "annamo" (andiamo), "mo'" (now), "daje" (come on), "er" for "il" ("er Colosseo"), "'sto" for "questo". "Ao!" is the typical Roman call.`,
          `Tuscan speech has the gorgia, the aspiration of "c" between vowels ("la hasa" for "la casa"), and uses "noi si va" for "noi andiamo". Words: "il cocomero" (watermelon, called "anguria" in the North), "il babbo" (dad).`,
        ],
        examples: [
          { it: "Daje, annamo, che è tardi! (Roman)", en: "Come on, let's go, it's late!" },
          { it: "Noi si va al mare domenica. (Tuscan)", en: "We're going to the seaside on Sunday." },
          { it: "Il babbo è uscito a comprare il cocomero. (Tuscan)", en: "Dad has gone out to buy a watermelon." },
        ],
      },
      {
        heading: `The South and the Islands`,
        body: [
          `Southern Italian, from Naples down, uses "tenere" for "avere" ("tieni fame?", are you hungry?) and "stare" for "essere" ("sto a casa", "stai stanco?"). It often marks the direct object of a person with "a" ("ho visto a Marco"). The passato remoto is alive in speech, especially in Sicily and Calabria: "ieri andai al mare".`,
          `Sicilian Italian can put the verb last for emphasis: "Montalbano sono" (I'm Montalbano), "bello è!". Vowels are often open where the standard has them closed, and "mo'" (now) is also southern.`,
        ],
        examples: [
          { it: "Tieni fame? Ti preparo qualcosa. (southern)", en: "Are you hungry? I'll make you something." },
          { it: "Ieri andai al mercato con mia madre. (southern)", en: "Yesterday I went to the market with my mother." },
          { it: "Stai tranquillo, ci penso io.", en: "Don't worry, I'll take care of it." },
        ],
      },
      {
        heading: `Regional words and Swiss Italian`,
        body: [
          `Everyday objects change name across Italy: watermelon is "anguria" (North) or "cocomero" (Centre, South); a bread roll is "panino", "rosetta" (Rome) or "michetta" (Milan); "stracchino" and "crescenza" are the same cheese.`,
          `In Ticino, Swiss Italian uses words from Swiss institutions and French or German: "l'azione" (a special offer, Italy "l'offerta"), "la licenza di condurre" (Italy "la patente"), "il natel" (mobile phone, Italy "il cellulare"), "la Posta" for the post office as in Italy.`,
        ],
        table: {
          headers: ["Meaning", "North", "Centre / South", "Ticino"],
          rows: [
            ["watermelon", "anguria", "cocomero (also mellone in the South)", "anguria"],
            ["bread roll", "michetta (Milan)", "rosetta (Rome), panino", "panino"],
            ["driving licence", "patente", "patente", "licenza di condurre"],
            ["mobile phone", "cellulare", "cellulare", "natel"],
            ["special offer", "offerta", "offerta", "azione"],
          ],
        },
        examples: [
          { it: "In Ticino ho comprato il caffè in azione.", en: "In Ticino I bought the coffee on special offer." },
          { it: "D'estate al Nord si mangia l'anguria, al Centro il cocomero.", en: "In summer the North eats anguria and the Centre eats cocomero: both are watermelon." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Teniamo due figli. (in standard Italian)",
        right: "Abbiamo due figli.",
        why: `"Tenere" for "avere" is southern regional usage; the standard is "avere".`,
      },
      {
        wrong: "Ho visto a Marco ieri.",
        right: "Ho visto Marco ieri.",
        why: `The "a" before a direct object is southern; standard Italian has none.`,
      },
      {
        wrong: "Ieri andai al cinema. (in a chat in Milan)",
        right: "Ieri sono andato al cinema.",
        why: `For a recent past linked to now, standard Italian uses the passato prossimo.`,
      },
      {
        wrong: "Il mio natel è scarico. (in Italy)",
        right: "Il mio cellulare è scarico.",
        why: `"Natel" is Swiss; in Italy say "cellulare" or "telefono".`,
      },
    ],
    faqs: [
      {
        q: `Is regional Italian the same as dialect?`,
        a: `No. A dialect (Neapolitan, Venetian, Sicilian...) is a separate language descended from Latin. Regional Italian is standard Italian with local pronunciation, words and grammar features.`,
      },
      {
        q: `Which accent should I learn?`,
        a: `None in particular: aim for a neutral standard pronunciation. If you live in a region, you will pick up its features naturally.`,
      },
      {
        q: `Is "la Maria" wrong?`,
        a: `In northern speech it is normal and friendly. In writing, and in central and southern Italy, use the name alone: "Maria".`,
      },
    ],
    related: ["dialects-and-regional-languages", "spoken-italian", "register-shifting"],
    lessons: [
      "b2-regional-north",
      "b2-regional-centre",
      "b2-regional-south",
      "b2-regional-words",
      "b2-drill-regional-to-standard",
      "b2-drill-regional-recognition",
      "c1-voices-milano",
      "c1-voices-roma",
      "c1-voices-napoli",
      "c1-voices-palermo",
      "c1-voices-ticino",
      "c1-drill-regional-to-standard",
      "c1-error-hunt-regional",
    ],
  },
  {
    slug: "rhetoric-and-persuasion",
    title: "Anafora, Litote, Domanda Retorica: Rhetoric and Persuasion",
    description:
      "The rhetorical devices of Italian speeches, ads and opinion pieces (anafora, climax, domanda retorica, antitesi, litote), the imperatives and conditionals of advertising, and how to build a persuasive text.",
    level: "C1",
    intro: [
      `Italian has a long rhetorical tradition, and you will hear it in political speeches, sermons, advertising and opinion columns. Recognising the devices helps you understand how a text works on you; using a few of them makes your own writing and speaking more persuasive.`,
      `The names are Greek and Latin and identical to English ones, but the Italian examples have their own rhythm.`,
    ],
    sections: [
      {
        heading: `The main devices`,
        body: [
          `"Anafora" repeats the same word at the start of successive clauses ("vogliamo scuole migliori, vogliamo ospedali efficienti, vogliamo un futuro"). "Climax" builds in intensity ("l'ho pensato, l'ho detto, l'ho fatto"). "Antitesi" sets opposites side by side ("poche parole, molti fatti").`,
          `The "domanda retorica" asks a question whose answer is obvious ("chi di noi non ha mai sbagliato?"). The "litote" denies the opposite to affirm with understatement ("non è stupido" = he's quite clever; "non è un'impresa facile").`,
        ],
        table: {
          headers: ["Device", "Example"],
          rows: [
            ["anafora", "Vogliamo lavoro, vogliamo dignità, vogliamo rispetto."],
            ["climax", "Ci abbiamo creduto, ci abbiamo lavorato, ce l'abbiamo fatta."],
            ["antitesi", "Meno parole, più fatti."],
            ["domanda retorica", "Chi di noi non ha mai sbagliato?"],
            ["litote", "Non è un'impresa facile."],
            ["tricolon", "Più veloce, più sicuro, più economico."],
          ],
        },
        examples: [
          { it: "Vogliamo città più verdi, vogliamo trasporti più puliti, vogliamo aria respirabile.", en: "We want greener cities, we want cleaner transport, we want breathable air." },
          { it: "Chi di noi non ha mai avuto paura del futuro?", en: "Which of us has never been afraid of the future?" },
          { it: "Non è stato un anno facile per nessuno.", en: "It hasn't been an easy year for anyone." },
          { it: "Meno promesse, più fatti.", en: "Fewer promises, more action." },
        ],
      },
      {
        heading: `The language of advertising`,
        body: [
          `Italian ads address the reader with "tu" (sometimes "voi"), use the imperative ("scopri", "prova", "approfitta", "non perdere"), the conditional to invite dreams ("ti piacerebbe...?", "immagina se potessi..."), and nominal slogans ("qualità e convenienza").`,
          `Watch the pronouns attached to imperatives: "scoprilo", "provala", "regalati un momento di relax".`,
        ],
        examples: [
          { it: "Scopri la nuova collezione e approfitta degli sconti!", en: "Discover the new collection and take advantage of the discounts!" },
          { it: "Ti piacerebbe svegliarti ogni mattina vicino al mare?", en: "Would you like to wake up by the sea every morning?" },
          { it: "Regalati un momento di relax.", en: "Treat yourself to a moment of relaxation." },
          { it: "Provalo gratis per trenta giorni.", en: "Try it free for thirty days." },
        ],
      },
      {
        heading: `Building a persuasive text`,
        body: [
          `Open with a hook (a question, a striking fact), state your position clearly, give arguments in rising order of strength, deal with the strongest objection ("certo, qualcuno dirà che... ma"), and close with a call to action or a memorable line.`,
          `Speeches use "noi" to include the audience ("insieme possiamo"), short sentences at the climax, and repetition that would be too heavy in writing.`,
        ],
        examples: [
          { it: "Certo, qualcuno dirà che costa troppo. Ma quanto ci costa non fare nulla?", en: "Of course, some will say it costs too much. But how much does doing nothing cost us?" },
          { it: "Insieme possiamo cambiare questa città.", en: "Together we can change this city." },
          { it: "Il momento di agire non è domani: è adesso.", en: "The moment to act is not tomorrow: it's now." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Prova lo gratis!",
        right: "Provalo gratis!",
        why: `Pronouns attach to the "tu" imperative as one word: "provalo", "scoprila", "regalati".`,
      },
      {
        wrong: "Non è un'impresa difficile. (meaning it is very hard)",
        right: "Non è un'impresa facile.",
        why: `A litote denies the opposite: to suggest difficulty, deny ease.`,
      },
      {
        wrong: "Ti piacerebbe se potresti viaggiare di più?",
        right: "Ti piacerebbe poter viaggiare di più?",
        why: `Never the conditional after "se"; here a simple infinitive is smoother.`,
      },
    ],
    faqs: [
      {
        q: `Do Italians find rhetoric old-fashioned?`,
        a: `Heavy rhetoric can sound pompous ("retorico" is often a criticism). Used lightly, the same devices make a text lively and memorable.`,
      },
      {
        q: `Why do Italian ads use "tu"?`,
        a: `To sound friendly and direct. Banks, insurers and luxury brands sometimes keep "Lei" or "voi" to sound more serious.`,
      },
      {
        q: `What is a "tricolon"?`,
        a: `A list of three parallel elements ("veni, vidi, vici" in Latin). Three items feel complete; Italian speeches use the pattern constantly.`,
      },
    ],
    related: ["journalistic-italian", "figures-of-speech-and-poetic-language", "formal-writing", "irony-and-humour"],
    lessons: [
      "c1-rhetorical-devices",
      "c1-advertising-language",
      "c1-political-speech",
      "c1-persuasive-writing",
      "c1-drill-rhetoric",
      "c1-reading-lab-speech",
      "c1-error-hunt-persuasion",
      "c1-dialogue-lab-pitch",
      "c1-mission-speech",
      "c1-listening-lab-ads",
    ],
  },
  {
    slug: "translating-from-english",
    title: "Phrasal Verbs, -ing and Noun Stacks: Translating English into Italian",
    description:
      "How to translate the hardest English structures into natural Italian: phrasal verbs, -ing forms, the English passive, noun stacks, possessive 's, general you, the present perfect continuous (da + present) and advanced false friends.",
    level: "C1",
    intro: [
      `At an Advanced level your Italian mistakes come less from grammar than from English structures leaking through. 'I've been waiting for an hour' is not "sono stato aspettando per un'ora" but "aspetto da un'ora". 'The customer service team leader' cannot be stacked the same way in Italian.`,
      `This guide lists the English structures that need rebuilding, with the Italian patterns that replace them.`,
    ],
    sections: [
      {
        heading: `Phrasal verbs and -ing forms`,
        body: [
          `An English phrasal verb usually corresponds to one precise Italian verb: 'give up' is "rinunciare" or "smettere", 'find out' is "scoprire", 'put off' is "rimandare", 'turn down' is "rifiutare", 'run out of' is "finire" or "restare senza". Translate the meaning, not the particles.`,
          `English -ing has many Italian equivalents: the infinitive as subject ("leggere mi rilassa"), "di" + infinitive after verbs and adjectives ("ho smesso di fumare"), a relative clause ('the man sitting there' = "l'uomo seduto lì" or "che è seduto lì"), "mentre" + verb, or a noun ('swimming' = "il nuoto").`,
        ],
        table: {
          headers: ["English", "Italian"],
          rows: [
            ["give up smoking", "smettere di fumare"],
            ["find out the truth", "scoprire la verità"],
            ["put off the meeting", "rimandare la riunione"],
            ["we ran out of milk", "è finito il latte"],
            ["Reading relaxes me.", "Leggere mi rilassa."],
            ["the woman standing at the door", "la donna in piedi alla porta"],
            ["Thank you for coming.", "Grazie di essere venuto."],
          ],
        },
        examples: [
          { it: "Ho smesso di fumare tre anni fa.", en: "I gave up smoking three years ago." },
          { it: "Abbiamo dovuto rimandare la partenza.", en: "We had to put off our departure." },
          { it: "Al bar è finito il latte.", en: "The bar has run out of milk." },
          { it: "Grazie di essere venuti.", en: "Thank you for coming." },
          { it: "Mi piace nuotare, ma odio correre.", en: "I like swimming, but I hate running." },
        ],
      },
      {
        heading: `Passive, possessive, noun stacks`,
        body: [
          `English uses the passive with people as subject where Italian cannot: 'I was told' becomes "mi hanno detto" or "mi è stato detto"; 'she was given a prize' becomes "le hanno dato un premio". Impersonal 'they' and "si" often sound more natural than a passive.`,
          `Possessive 's becomes "di": 'Marco's car' = "la macchina di Marco". Noun stacks unfold from right to left with prepositions: 'customer service team leader' = "il responsabile del team del servizio clienti"; 'city centre parking problems' = "i problemi di parcheggio in centro".`,
        ],
        examples: [
          { it: "Mi hanno detto che il museo è chiuso.", en: "I was told the museum is closed." },
          { it: "Le è stato assegnato un premio per la sua ricerca.", en: "She was given a prize for her research." },
          { it: "Il responsabile del servizio clienti ti richiamerà.", en: "The customer service manager will call you back." },
          { it: "I problemi di parcheggio in centro sono aumentati.", en: "City-centre parking problems have increased." },
        ],
      },
      {
        heading: `Tenses, general you and false friends`,
        body: [
          `The present perfect continuous for something still going on becomes "da" + present: 'I've been living here for ten years' = "abito qui da dieci anni". General 'you' becomes impersonal "si" or the infinitive: 'you never know' = "non si sa mai"; 'you have to book' = "bisogna prenotare".`,
          `Advanced false friends: "eventualmente" (if necessary, not eventually = "alla fine"), "attualmente" (currently), "argomento" (topic, not argument = "discussione, lite"), "educato" (polite), "sensibile" (sensitive), "realizzare" (to carry out, not realise = "rendersi conto"), "addizionale", "assistere a" (attend, witness).`,
        ],
        table: {
          headers: ["Italian", "Means", "Not"],
          rows: [
            ["eventualmente", "if necessary", "eventually (alla fine)"],
            ["attualmente", "currently", "actually (in realtà)"],
            ["argomento", "topic, subject", "argument (lite, discussione)"],
            ["educato", "polite", "educated (istruito, colto)"],
            ["sensibile", "sensitive", "sensible (sensato, ragionevole)"],
            ["realizzare", "to carry out, achieve", "to realise (rendersi conto)"],
            ["assistere a", "to attend, witness", "to assist (aiutare)"],
          ],
        },
        examples: [
          { it: "Abito a Torino da dieci anni.", en: "I've been living in Turin for ten years." },
          { it: "Non si sa mai cosa può succedere.", en: "You never know what might happen." },
          { it: "Mi sono reso conto troppo tardi dell'errore.", en: "I realised the mistake too late." },
          { it: "Eventualmente ti chiamo domani.", en: "If need be, I'll call you tomorrow." },
          { it: "In realtà non ci sono mai stato.", en: "Actually, I've never been there." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Sto aspettando per un'ora.",
        right: "Aspetto da un'ora.",
        why: `An action still going on since a point in the past: "da" + present.`,
      },
      {
        wrong: "Ho realizzato che avevo sbagliato.",
        right: "Mi sono reso conto che avevo sbagliato.",
        why: `"Realizzare" means to carry out; to realise is "rendersi conto".`,
      },
      {
        wrong: "Io sono stato detto di aspettare.",
        right: "Mi hanno detto di aspettare.",
        why: `Italian cannot make the indirect object the subject of a passive.`,
      },
      {
        wrong: "Attualmente, non sono d'accordo.",
        right: "In realtà, non sono d'accordo.",
        why: `"Attualmente" means currently; actually is "in realtà" or "veramente".`,
      },
    ],
    faqs: [
      {
        q: `Is translating word for word ever right?`,
        a: `For simple sentences, often. The trouble lies in structures English builds differently: phrasal verbs, -ing, noun stacks, passives with people as subject and continuous tenses.`,
      },
      {
        q: `How do I avoid long chains of "di"?`,
        a: `Vary the prepositions ("per", "in", "su"), use an adjective ("il traffico cittadino" rather than "il traffico della città") or a relative clause.`,
      },
      {
        q: `Is "stare + gerund" ever a good translation of -ing?`,
        a: `Only for an action in progress at a precise moment: "sto mangiando" (I'm eating right now). Italian uses it much less than English uses -ing.`,
      },
    ],
    related: ["near-synonyms-and-collocations", "gerund", "passive"],
    lessons: [
      "c1-translating-phrasal-verbs",
      "c1-translating-ing",
      "c1-translating-passive",
      "c1-translating-noun-stacks",
      "c1-drill-translation",
      "c1-false-friends-advanced",
      "c1-translating-tone",
      "c1-error-hunt-translation",
      "c1-mission-translate-an-article",
      "c1-translation-final",
    ],
  },
];
