// Synced from cheneygross-afk/lengo:src/lib/grammar/it-guides-b1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ItGrammarGuide } from "./it-types";

// Italian grammar guides, B1 (see the notes at the top of ./it-types.ts).
export const IT_B1_GUIDES: ItGrammarGuide[] = [
  {
    slug: "combined-pronouns",
    title: "Me Lo, Te La, Glielo: Combined Pronouns",
    description:
      "How two object pronouns combine: me lo, te la, ce li, ve ne, the one-word glielo, gliela, gliene for him, her, them and Lei, se lo with reflexives, and agreement in the past (te l'ho data).",
    level: "B1",
    intro: [
      `When a sentence has both an indirect object (to whom) and a direct object (what), Italian can replace both with pronouns: "Do il libro a Marta" becomes "Glielo do" (I give it to her). The pair always comes in the same order, indirect first, and the first pronoun changes its vowel.`,
      `Combined pronouns are what make spoken Italian fast and compact: "Me lo dai?", "Te lo dico io", "Ce l'ho", "Me ne vado". They are worth drilling until they come out as one word.`,
    ],
    sections: [
      {
        heading: `Me lo, te la, ce li, ve ne`,
        body: [
          `The indirect pronoun goes first and changes its "i" to "e": "mi" becomes "me", "ti" becomes "te", "ci" becomes "ce", "vi" becomes "ve", and the reflexive "si" becomes "se". The second pronoun is "lo", "la", "li", "le" or "ne". They are written as two words before a conjugated verb: "Me lo dici?", "Te la presto".`,
          `"Lo" and "la" elide before a vowel or "h": "Te l'ho detto" (I told you so), "Me l'ha regalato mia sorella".`,
        ],
        table: {
          headers: ["", "lo", "la", "li", "le", "ne"],
          rows: [
            ["mi", "me lo", "me la", "me li", "me le", "me ne"],
            ["ti", "te lo", "te la", "te li", "te le", "te ne"],
            ["si", "se lo", "se la", "se li", "se le", "se ne"],
            ["ci", "ce lo", "ce la", "ce li", "ce le", "ce ne"],
            ["vi", "ve lo", "ve la", "ve li", "ve le", "ve ne"],
          ],
        },
        examples: [
          { it: "Mi presti la penna? Sì, te la presto.", en: "Will you lend me the pen? Yes, I'll lend it to you." },
          { it: "Chi ti ha dato queste rose? Me le ha date Luca.", en: "Who gave you these roses? Luca gave them to me." },
          { it: "Ci porti i documenti? Ve li porto domani.", en: "Will you bring us the documents? I'll bring them to you tomorrow." },
          { it: "Quante foto ti ha mandato? Me ne ha mandate venti.", en: "How many photos did he send you? He sent me twenty." },
          { it: "Te l'ho già detto mille volte!", en: "I've already told you a thousand times!" },
        ],
      },
      {
        heading: `"Glielo": to him, to her, to them, to you`,
        body: [
          `"Gli" (to him, to them) and "le" (to her) both become "glie-", which joins the second pronoun in a single word: "glielo", "gliela", "glieli", "gliele", "gliene". So "glielo" can mean it to him, it to her, it to them, and with "Lei", it to you. Context decides.`,
          `This merging of "le" into "glie-" surprises learners: "Do il libro a Maria" becomes "Glielo do", never "le lo do". With "Lei" it is the polite form: "Glielo incarto?" (shall I wrap it for you?), "Gliel'ho già mandato" (I've already sent it to you).`,
        ],
        table: {
          headers: ["", "lo", "la", "li", "le", "ne"],
          rows: [["gli, le, Le", "glielo", "gliela", "glieli", "gliele", "gliene"]],
        },
        examples: [
          { it: "Hai detto a Marco della festa? Sì, gliel'ho detto.", en: "Did you tell Marco about the party? Yes, I told him." },
          { it: "La nonna vuole le foto: gliele mando stasera.", en: "Grandma wants the photos: I'll send them to her tonight." },
          { it: "Signora, glielo incarto?", en: "Madam, shall I gift-wrap it for you?" },
          { it: "I bambini vogliono le caramelle, ma non gliene do.", en: "The children want sweets, but I'm not giving them any." },
        ],
      },
      {
        heading: `Agreement in the past, and reflexive "se lo"`,
        body: [
          `In compound tenses the participle agrees with "la", "li", "le" and with "ne" + quantity, even inside a pair: "Te l'ho data" (the key), "Glieli ho restituiti" (the books), "Me ne ha dati due".`,
          `Reflexive verbs with a direct object use "me lo", "te lo", "se lo": "Mi metto il cappotto" becomes "Me lo metto"; "Si è lavato le mani" becomes "Se le è lavate". "Se ne" appears in many verbs of leaving and not caring: "Se n'è andato" (he left), "Me ne frego" (I don't care, rude).`,
        ],
        examples: [
          { it: "La chiave? Te l'ho data ieri.", en: "The key? I gave it to you yesterday." },
          { it: "Il cappotto? Me lo metto subito.", en: "The coat? I'll put it on right away." },
          { it: "Le mani? Se le è lavate.", en: "His hands? He washed them." },
          { it: "Giulia se n'è andata senza salutare.", en: "Giulia left without saying goodbye." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Mi lo dai?",
        right: "Me lo dai?",
        why: `In a pair, "mi" becomes "me".`,
      },
      {
        wrong: "Le lo do domani.",
        right: "Glielo do domani.",
        why: `"Le" (to her) becomes "glie-" and joins the next pronoun: "glielo".`,
      },
      {
        wrong: "Gli lo dico.",
        right: "Glielo dico.",
        why: `"Gli" + "lo" is one word: "glielo".`,
      },
      {
        wrong: "Lo te do.",
        right: "Te lo do.",
        why: `The indirect pronoun comes first: "te lo", "me la", "glielo".`,
      },
      {
        wrong: "La lettera? Gliel'ho mandato.",
        right: "La lettera? Gliel'ho mandata.",
        why: `The participle agrees with the direct pronoun "la", hidden in "gliel'".`,
      },
    ],
    faqs: [
      {
        q: `Isn't "glielo" ambiguous?`,
        a: `Yes, but context almost always makes it clear. When it doesn't, Italians use the full form: "L'ho dato a lei, non a lui."`,
      },
      {
        q: `When are they written as one word?`,
        a: `"Glie-" forms are always one word. The others are two words before a verb ("me lo dai") and one word attached after an infinitive, gerund or command ("dammelo", "darmelo", "dandomelo").`,
      },
      {
        q: `What about "loro" for to them?`,
        a: `"Loro" can't combine: "Lo do loro". In everyday Italian, "glielo do" is the normal form for I give it to them.`,
      },
    ],
    related: ["pronouns", "pronoun-position", "direct-object-pronouns", "indirect-object-pronouns", "pronominal-verbs"],
    lessons: [
      "b1-combined-pronouns-me-lo",
      "b1-combined-pronouns-ce-ve",
      "b1-combined-pronouns-past",
      "b1-reflexive-plus-direct",
      "b1-drill-combined-pronouns",
      "b1-contrast-mi-me",
      "b1-error-hunt-combined",
      "b1-glielo-forms",
      "b1-glielo-formal",
      "b1-gliene-and-past",
      "b1-drill-glielo",
      "b1-contrast-glielo-me-lo",
      "b1-error-hunt-glielo",
      "b1-drill-pronoun-clusters",
      "b1-listening-lab-pronouns",
    ],
  },
  {
    slug: "pronoun-position",
    title: "Te Lo Voglio Dire or Voglio Dirtelo? Where Pronouns Go",
    description:
      "Where object pronouns go: before a conjugated verb, attached to infinitives, gerunds, informal commands and ecco, the free choice with modal verbs, dimmelo and fallo, non farlo, and Lei commands.",
    level: "B1",
    intro: [
      `Italian object pronouns ("mi", "lo", "gli", "ci", "ne" and the combined "me lo", "glielo") have two possible positions: before the verb as separate words, or attached to the end of it as one word. Which one depends on the verb form, and the rules are few and strict.`,
    ],
    sections: [
      {
        heading: `Before or after?`,
        body: [
          `Before every conjugated verb, in every tense and mood: "Lo vedo", "Te l'ho detto", "Glielo darò", "Se ne andavano", "Che tu lo sappia". "Non" goes before the pronouns: "Non me lo dire".`,
          `Attached to the end of an infinitive (which drops its final "e"), a gerund, a past participle used alone, the informal imperative ("tu", "noi", "voi") and "ecco": "vederlo", "dirtelo", "vedendola", "Fatto questo, ...", "Guardalo!", "Diciamoglielo!", "Eccomi!". The stress of the verb doesn't move: "MAN-da-me-lo", "di-CEN-do-glie-lo".`,
        ],
        table: {
          headers: ["Verb form", "Position", "Example"],
          rows: [
            ["conjugated verb", "before", "Me lo dici?"],
            ["compound tense", "before the helping verb", "Me l'hai detto."],
            ["infinitive", "attached", "Devo dirtelo."],
            ["gerund", "attached", "Parlandone, ho capito tutto."],
            ["tu / noi / voi command", "attached", "Dimmelo! Diciamoglielo!"],
            ["negative tu command", "either", "Non dirmelo! / Non me lo dire!"],
            ["Lei command", "before", "Me lo dica."],
            ["ecco", "attached", "Eccotelo."],
          ],
        },
        examples: [
          { it: "Non te lo posso promettere.", en: "I can't promise you that." },
          { it: "È importante dirglielo subito.", en: "It's important to tell him right away." },
          { it: "Vedendolo così stanco, l'ho mandato a casa.", en: "Seeing him so tired, I sent him home." },
          { it: "Le chiavi? Eccotele.", en: "The keys? Here they are." },
          { it: "Ce lo spieghi di nuovo?", en: "Will you explain it to us again?" },
        ],
      },
      {
        heading: `With "volere", "potere", "dovere", "sapere"`,
        body: [
          `With a modal verb + infinitive you can choose: pronouns before the modal, or attached to the infinitive. "Te lo voglio dire" and "Voglio dirtelo" are equally correct; the first is slightly more common in speech. The same applies to "cominciare a", "stare per", "andare a" and a few similar verbs: "Lo sto per fare" / "Sto per farlo".`,
          `Never split the pair or put the pronoun between the two verbs: "voglio te lo dire" is impossible. In compound tenses the position affects the helping verb with reflexives: "Mi sono dovuto alzare" but "Ho dovuto alzarmi".`,
        ],
        examples: [
          { it: "Lo devo finire entro stasera.", en: "I have to finish it by tonight." },
          { it: "Devo finirlo entro stasera.", en: "I have to finish it by tonight." },
          { it: "Non ve lo so spiegare.", en: "I can't explain it to you." },
          { it: "Ci voglio tornare l'anno prossimo.", en: "I want to go back there next year." },
        ],
      },
      {
        heading: `Commands: "dimmelo", "fallo", "non farlo"`,
        body: [
          `With informal commands the pronouns attach: "Prendilo!", "Mandamele!", "Sediamoci!". After the one-syllable forms "da'", "di'", "fa'", "sta'", "va'" the first consonant of the pronoun doubles: "dammi", "dimmelo", "fallo", "fammelo vedere", "stammi a sentire", "vattene!". The exception is "gli": "digli", "faglielo".`,
          `In the negative "tu" command, both positions work: "Non farlo!" or "Non lo fare!", "Non dirmelo" or "Non me lo dire". "Lei" commands always take the pronouns before: "Me lo dia", "Si accomodi", "Non se ne vada".`,
        ],
        examples: [
          { it: "Il giornale? Dammelo, per favore.", en: "The newspaper? Give it to me, please." },
          { it: "Se lo sai, dillo!", en: "If you know, say it!" },
          { it: "Non me lo dire, non voglio saperlo!", en: "Don't tell me, I don't want to know!" },
          { it: "Mi scusi, me lo può ripetere?", en: "Excuse me, could you repeat that for me?" },
          { it: "Fammi sapere!", en: "Let me know!" },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Voglio te lo dire.",
        right: "Te lo voglio dire.",
        why: `Pronouns go before the modal or on the end of the infinitive ("Voglio dirtelo"), never between.`,
      },
      {
        wrong: "Dime la verità!",
        right: "Dimmi la verità!",
        why: `After "di'" the pronoun doubles its consonant: "dimmi", "dimmelo".`,
      },
      {
        wrong: "Mi lo dica.",
        right: "Me lo dica.",
        why: `"Lei" commands take the pronouns before, in their combined form.`,
      },
      {
        wrong: "Marco, lo guarda!",
        right: "Marco, guardalo!",
        why: `With the informal command the pronoun attaches to the verb.`,
      },
      {
        wrong: "Ho bisogno di vedereti.",
        right: "Ho bisogno di vederti.",
        why: `The infinitive drops its final "e" before the pronoun: "vederti", "dirlo".`,
      },
    ],
    faqs: [
      {
        q: `Does the stress move when I add pronouns?`,
        a: `No. The verb keeps its own stress, which can end up far from the end: "TE-le-fo-na-gli", "MAN-da-glie-le". Saying them correctly takes practice.`,
      },
      {
        q: `Which is more natural: "lo devo fare" or "devo farlo"?`,
        a: `Both are natural everywhere. Speech leans slightly toward the pronoun first; careful writing often attaches it. Choose one and be consistent within a sentence.`,
      },
      {
        q: `What about "andarsene" in the imperative?`,
        a: `"Vattene!" (go away!, tu), "Andiamocene!" (let's go), "Andatevene!" (voi), "Se ne vada!" (Lei). The pronouns "te ne", "ce ne" and "ve ne" attach as usual.`,
      },
    ],
    related: ["combined-pronouns", "pronouns", "imperative", "modal-verbs"],
    lessons: [
      "a2-direct-pronouns-infinitive",
      "b1-pronouns-infinitives",
      "b1-pronouns-modals",
      "b1-pronouns-commands",
      "b1-pronouns-gerund",
      "b1-drill-pronoun-position",
      "b1-contrast-before-after",
      "b1-error-hunt-pronoun-position",
      "b1-drill-pronouns-mixed-tenses",
    ],
  },
  {
    slug: "pronominal-verbs",
    title: "Andarsene, Farcela, Cavarsela: Pronominal Verbs",
    description:
      "The everyday verbs with built-in pronouns: andarsene (to leave), farcela (to manage), cavarsela (to get by), prendersela (to take offence), avercela con (to have it in for), smetterla, sentirsela, fregarsene, in every tense.",
    level: "B1",
    intro: [
      `Some of the most common Italian verbs come with one or two pronouns glued on that have lost their literal meaning: "andarsene" is to leave, "farcela" is to make it, to manage. You can't understand spoken Italian without them, and using them is one of the clearest signs of a confident speaker.`,
      `They conjugate like the base verb, with the pronouns in front and the reflexive part changing with the person: "me ne vado", "te ne vai", "se ne va".`,
    ],
    sections: [
      {
        heading: `The common ones`,
        body: [
          `Each verb is the base verb + pronouns: "andare" + "si" + "ne" = "andarsene"; "fare" + "ci" + "la" = "farcela". The pronoun "la" in many of them refers to nothing in particular; it just belongs to the expression.`,
        ],
        table: {
          headers: ["Verb", "Meaning", "Present (io)", "Example"],
          rows: [
            ["andarsene", "to leave, go away", "me ne vado", "È tardi, me ne vado."],
            ["farcela", "to manage, make it", "ce la faccio", "Ce la fai da solo?"],
            ["cavarsela", "to get by, cope", "me la cavo", "Con l'inglese me la cavo."],
            ["prendersela", "to take offence, get upset", "me la prendo", "Non prendertela!"],
            ["avercela con", "to be angry with", "ce l'ho con", "Ce l'hai con me?"],
            ["smetterla", "to stop it", "la smetto", "Smettila!"],
            ["sentirsela", "to feel up to", "me la sento", "Non me la sento di guidare."],
            ["fregarsene", "not to care (informal)", "me ne frego", "Se ne frega di tutti."],
            ["intendersene", "to know about", "me ne intendo", "Te ne intendi di vini?"],
            ["godersela", "to enjoy it", "me la godo", "Goditela!"],
          ],
        },
        examples: [
          { it: "Ce la facciamo ad arrivare per le otto?", en: "Can we make it by eight?" },
          { it: "Non me la sento di uscire stasera.", en: "I don't feel up to going out tonight." },
          { it: "Perché ce l'hai con Paolo?", en: "Why are you angry with Paolo?" },
          { it: "Te ne intendi di computer?", en: "Do you know about computers?" },
        ],
      },
      {
        heading: `Forms across persons and tenses`,
        body: [
          `The reflexive pronoun changes with the subject ("me", "te", "se", "ce", "ve", "se"), the other stays put. "Ci" in "farcela" and "avercela" doesn't change: "ce la faccio, ce la fai, ce la fa". In the passato prossimo, verbs with a reflexive part take "essere" and the participle agrees with the subject ("Se n'è andata"), while "farcela" and "avercela" take "avere" and agree with "la": "Ce l'abbiamo fatta!" (we did it!).`,
          `In the imperative the pronouns attach: "Vattene!", "Smettila!", "Cavatela da solo", "Godetevela!". In the negative: "Non andartene!" or "Non te ne andare!".`,
        ],
        table: {
          headers: ["", "andarsene", "farcela"],
          rows: [
            ["io", "me ne vado", "ce la faccio"],
            ["tu", "te ne vai", "ce la fai"],
            ["lui, lei", "se ne va", "ce la fa"],
            ["noi", "ce ne andiamo", "ce la facciamo"],
            ["voi", "ve ne andate", "ce la fate"],
            ["loro", "se ne vanno", "ce la fanno"],
            ["passato prossimo", "me ne sono andato/a", "ce l'ho fatta"],
          ],
        },
        examples: [
          { it: "Ce l'ho fatta! Ho passato l'esame!", en: "I did it! I passed the exam!" },
          { it: "Gli ospiti se ne sono andati a mezzanotte.", en: "The guests left at midnight." },
          { it: "Se l'è presa per una battuta.", en: "She got upset over a joke." },
          { it: "Dai, smettetela di litigare!", en: "Come on, you two, stop arguing!" },
          { it: "Non te la prendere, scherzavo.", en: "Don't take it badly, I was joking." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Io me ne vada.",
        right: "Io me ne vado.",
        why: `The verb part conjugates normally: "vado".`,
      },
      {
        wrong: "Ci la faccio.",
        right: "Ce la faccio.",
        why: `Before "la", "ci" becomes "ce".`,
      },
      {
        wrong: "Ho andato via. Me ne ho andato.",
        right: "Me ne sono andato.",
        why: `"Andarsene" takes "essere" in the past.`,
      },
      {
        wrong: "Ce l'abbiamo fatto!",
        right: "Ce l'abbiamo fatta!",
        why: `The participle agrees with "la": "fatta".`,
      },
      {
        wrong: "Non ti la prendere!",
        right: "Non te la prendere!",
        why: `The reflexive pronoun takes the combined form: "te la".`,
      },
    ],
    faqs: [
      {
        q: `Is "fregarsene" rude?`,
        a: `It is informal and a bit rough: "Me ne frego" is I don't give a damn. Fine among friends, not at work. "Non m'importa" is the neutral way to say I don't care.`,
      },
      {
        q: `What's the difference between "andare via" and "andarsene"?`,
        a: `They mean the same, to leave. "Andarsene" is slightly more emphatic or emotional ("Se n'è andato senza dire niente"), and is the usual choice in the imperative: "Vattene!".`,
      },
      {
        q: `Are there more of these?`,
        a: `Many: "metterci" (to take time), "volerci" (to be needed), "entrarci" (to have to do with: "Che c'entra?"), "tenerci" (to care about), "passarsela" (to be doing: "Come te la passi?"). The Upper-intermediate idiom lessons add more.`,
      },
    ],
    related: ["combined-pronouns", "ci", "ne", "reflexive-verbs"],
    lessons: [
      "b1-andarsene",
      "b1-farcela-cavarsela",
      "b1-prendersela-avercela",
      "b1-smetterla-and-others",
      "b1-drill-pronominal-present",
      "b1-drill-pronominal-past",
      "b1-error-hunt-pronominal",
      "b1-listening-lab-colloquial",
    ],
  },
  {
    slug: "trapassato-prossimo",
    title: "Avevo Fatto, Ero Andato: The Trapassato Prossimo",
    description:
      "The past before the past: the forms of the trapassato prossimo (imperfetto of avere or essere + participle), its use with già, quando and perché, and how it fits with the passato prossimo and the imperfetto in a story.",
    level: "B1",
    intro: [
      `The trapassato prossimo is the Italian pluperfect, English had done: "Quando sono arrivato, il treno era già partito" (when I arrived, the train had already left). It moves one step further back in time from a past moment.`,
      `It is formed like the passato prossimo, with the helping verb in the imperfetto instead of the present, so if you know "ho fatto" and "sono andato", you know "avevo fatto" and "ero andato".`,
    ],
    sections: [
      {
        heading: `The forms`,
        body: [
          `Take the imperfetto of "avere" or "essere" and the past participle. The choice of helping verb and the agreement rules are exactly those of the passato prossimo: "avevo mangiato", "ero uscita", "ci eravamo conosciuti", "l'avevo già vista".`,
        ],
        table: {
          headers: ["", "with avere: finire", "with essere: partire"],
          rows: [
            ["io", "avevo finito", "ero partito / partita"],
            ["tu", "avevi finito", "eri partito / partita"],
            ["lui, lei, Lei", "aveva finito", "era partito / partita"],
            ["noi", "avevamo finito", "eravamo partiti / partite"],
            ["voi", "avevate finito", "eravate partiti / partite"],
            ["loro", "avevano finito", "erano partiti / partite"],
          ],
        },
        examples: [
          { it: "Avevo già mangiato quando mi hai chiamato.", en: "I had already eaten when you called me." },
          { it: "Non ero mai stata a Venezia prima.", en: "I had never been to Venice before." },
          { it: "Si erano conosciuti all'università.", en: "They had met at university." },
          { it: "Mi ha restituito il libro che gli avevo prestato.", en: "He gave me back the book I had lent him." },
        ],
      },
      {
        heading: `When to use it`,
        body: [
          `Use it for an action completed before another past action or moment: "Quando siamo arrivati, la lezione era già cominciata." It often goes with "già" (already), "non ... ancora" (not yet), "mai" (never, ever) and "prima" (before), and it explains causes: "Ero stanco perché avevo lavorato tutto il giorno."`,
          `English often uses the simple past where the order is obvious (after I finished, I went out); Italian prefers the trapassato when the earlier action matters: "Dopo che avevo finito, sono uscito." In reported speech it reports a passato prossimo: "Ha detto che aveva perso il treno."`,
        ],
        examples: [
          { it: "Il film era già finito quando siamo entrati.", en: "The film had already ended when we went in." },
          { it: "Era arrabbiata perché nessuno l'aveva aiutata.", en: "She was angry because nobody had helped her." },
          { it: "Non avevo mai visto tanta neve.", en: "I had never seen so much snow." },
          { it: "Mi ha detto che aveva cambiato lavoro.", en: "He told me he had changed jobs." },
        ],
      },
      {
        heading: `Three past tenses in a story`,
        body: [
          `A story in the past uses three layers: the events in the passato prossimo (what happened), the background in the imperfetto (what things were like, what was going on), and anything earlier in the trapassato (what had happened before). "Era sabato (background). Sono andato alla stazione (event), ma il treno era già partito (earlier)."`,
        ],
        examples: [
          { it: "Pioveva e avevo dimenticato l'ombrello, così sono tornato a casa.", en: "It was raining and I'd forgotten my umbrella, so I went back home." },
          { it: "Quando l'ho conosciuta, Anna aveva appena finito l'università.", en: "When I met her, Anna had just finished university." },
          { it: "Ho riconosciuto la casa dove ero cresciuto.", en: "I recognised the house where I had grown up." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Quando sono arrivato, il treno è già partito.",
        right: "Quando sono arrivato, il treno era già partito.",
        why: `The train left before you arrived: that earlier action takes the trapassato.`,
      },
      {
        wrong: "Avevo andato a Roma.",
        right: "Ero andato a Roma.",
        why: `The helping verb is the same as in the passato prossimo: "andare" takes "essere".`,
      },
      {
        wrong: "Mi ha detto che ha perso le chiavi il giorno prima.",
        right: "Mi ha detto che aveva perso le chiavi il giorno prima.",
        why: `Reporting a past event after a past verb of saying moves it back to the trapassato.`,
      },
      {
        wrong: "Le avevamo visto il giorno prima.",
        right: "Le avevamo viste il giorno prima.",
        why: `Participle agreement with "lo", "la", "li", "le" works as in the passato prossimo.`,
      },
    ],
    faqs: [
      {
        q: `Is the trapassato always needed?`,
        a: `Not always. When the order of events is obvious and they follow one another ("Ho fatto la spesa e poi sono tornato"), the passato prossimo is enough. Use the trapassato when one action happened before a past point you're describing.`,
      },
      {
        q: `What is the trapassato remoto ("ebbi finito")?`,
        a: `A literary tense used after "dopo che", "appena" and "quando" with the passato remoto: "Dopo che ebbe finito, uscì." You only need to recognise it in novels.`,
      },
      {
        q: `Does it work with "da" for duration?`,
        a: `For something that had been going on up to a past moment, Italian uses the imperfetto with "da": "Abitavo lì da due anni" (I had been living there for two years).`,
      },
    ],
    related: ["past-tenses", "passato-prossimo", "imperfetto", "reported-speech"],
    lessons: [
      "b1-trapassato-forms",
      "b1-trapassato-use",
      "b1-drill-trapassato-forms",
      "b1-contrast-pp-trapassato",
      "b1-drill-trapassato-sequence",
      "b1-error-hunt-trapassato",
      "b1-story-connectors",
      "b1-three-past-tenses",
      "b1-drill-story-retelling",
      "b1-error-hunt-stories",
    ],
  },
  {
    slug: "present-subjunctive",
    title: "Che Io Sia, Che Tu Abbia: The Present Subjunctive",
    description:
      "The forms of the congiuntivo presente: regular endings, the three identical singular forms, essere, avere and the common irregulars (vada, faccia, venga, possa, voglia, debba, sappia, dica, stia, dia), and when to add the subject pronoun.",
    level: "B1",
    intro: [
      `The subjunctive (congiuntivo) is a set of verb forms used mostly after "che" when the main verb expresses an opinion, a wish, a feeling, a doubt or a necessity: "Penso che sia vero", "Voglio che tu venga". English has only traces of it (if I were you, I insist that he be present); Italian uses it every day.`,
      `This guide covers the present forms. The next ones cover when to use them.`,
    ],
    sections: [
      {
        heading: `Regular forms`,
        body: [
          `"-Are" verbs take "-i" in the three singular persons; "-ere" and "-ire" verbs take "-a". The "noi" form is the same as the present indicative ("parliamo", "prendiamo"), the "voi" form ends in "-iate", and the "loro" form adds "-no" to the singular. "-Isc-" verbs keep it where the present does: "che io finisca".`,
          `Spelling changes follow the present: "che io cerchi", "che tu paghi", "che lui mangi", "che noi cominciamo".`,
        ],
        table: {
          headers: ["", "parlare", "prendere", "dormire", "finire"],
          rows: [
            ["che io", "parli", "prenda", "dorma", "finisca"],
            ["che tu", "parli", "prenda", "dorma", "finisca"],
            ["che lui, lei", "parli", "prenda", "dorma", "finisca"],
            ["che noi", "parliamo", "prendiamo", "dormiamo", "finiamo"],
            ["che voi", "parliate", "prendiate", "dormiate", "finiate"],
            ["che loro", "parlino", "prendano", "dormano", "finiscano"],
          ],
        },
        examples: [
          { it: "Spero che tu stia bene.", en: "I hope you're well." },
          { it: "Penso che parli tre lingue.", en: "I think he speaks three languages." },
          { it: "Voglio che prendiate un taxi.", en: "I want you to take a taxi." },
          { it: "È meglio che dormano un po'.", en: "It's better if they sleep a bit." },
        ],
      },
      {
        heading: `"Essere", "avere" and the irregulars`,
        body: [
          `"Essere" gives "sia", "siamo", "siate", "siano"; "avere" gives "abbia", "abbiamo", "abbiate", "abbiano". Most other irregulars build the subjunctive on the "io" form of the present: "vado: vada", "faccio: faccia", "vengo: venga", "dico: dica", "posso: possa", "voglio: voglia", "devo: debba", "esco: esca", "bevo: beva". "Sapere", "stare" and "dare" are their own: "sappia", "stia", "dia".`,
          `The "noi" and "voi" forms of irregular verbs come from the "noi" present: "andiamo, andiate", "facciamo, facciate", "veniamo, veniate".`,
        ],
        table: {
          headers: ["Infinitive", "che io / tu / lui", "che noi", "che voi", "che loro"],
          rows: [
            ["essere", "sia", "siamo", "siate", "siano"],
            ["avere", "abbia", "abbiamo", "abbiate", "abbiano"],
            ["andare", "vada", "andiamo", "andiate", "vadano"],
            ["fare", "faccia", "facciamo", "facciate", "facciano"],
            ["venire", "venga", "veniamo", "veniate", "vengano"],
            ["dire", "dica", "diciamo", "diciate", "dicano"],
            ["potere", "possa", "possiamo", "possiate", "possano"],
            ["volere", "voglia", "vogliamo", "vogliate", "vogliano"],
            ["dovere", "debba", "dobbiamo", "dobbiate", "debbano"],
            ["sapere", "sappia", "sappiamo", "sappiate", "sappiano"],
            ["stare", "stia", "stiamo", "stiate", "stiano"],
            ["dare", "dia", "diamo", "diate", "diano"],
          ],
        },
        examples: [
          { it: "Credo che sia troppo tardi.", en: "I think it's too late." },
          { it: "Non è detto che abbiano ragione.", en: "It's not certain they're right." },
          { it: "Bisogna che tu vada dal medico.", en: "You need to go to the doctor." },
          { it: "Spero che possiate venire.", en: "I hope you can come." },
          { it: "Mi sembra che non sappia niente.", en: "It seems to me he doesn't know anything." },
        ],
      },
      {
        heading: `"Che io", "che tu": adding the pronoun`,
        body: [
          `Because "io", "tu" and "lui/lei" share one form, Italians add the subject pronoun when the person isn't clear: "Vuole che io venga" (he wants me to come) vs "Vuole che tu venga". In the third person, a name or the context usually makes it clear.`,
          `When the "tu" form is obvious from context, the pronoun can be dropped: "Spero che stia bene" is ambiguous, "Spero che tu stia bene" is not.`,
        ],
        examples: [
          { it: "Mia madre vuole che io torni presto.", en: "My mother wants me to come back early." },
          { it: "È importante che tu lo sappia.", en: "It's important that you know." },
          { it: "Pensano che lei sia americana.", en: "They think she's American." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Penso che tu sei stanco.",
        right: "Penso che tu sia stanco.",
        why: `"Pensare che" takes the subjunctive in standard Italian.`,
      },
      {
        wrong: "Voglio che lui parla con me.",
        right: "Voglio che lui parli con me.",
        why: `"-Are" verbs take "-i" in the singular subjunctive.`,
      },
      {
        wrong: "Spero che lui prendi il treno.",
        right: "Spero che lui prenda il treno.",
        why: `"-Ere" and "-ire" verbs take "-a": "prenda", "dorma".`,
      },
      {
        wrong: "È meglio che noi andassimo.",
        right: "È meglio che noi andiamo.",
        why: `After a present main verb, the present subjunctive: "andiamo" (the same as the indicative).`,
      },
      {
        wrong: "Credo che abbiano ragioni.",
        right: "Credo che abbiano ragione.",
        why: `"Avere ragione" never takes a plural noun.`,
      },
    ],
    faqs: [
      {
        q: `Do Italians really use the subjunctive?`,
        a: `Yes, in writing always and in speech very often. In casual speech some people use the indicative after "penso che" or "credo che", but in exams, at work and in writing the subjunctive is expected. The course teaches it as the standard.`,
      },
      {
        q: `Is the subjunctive the same as the Lei command?`,
        a: `Yes: the formal command is the third-person subjunctive. "Venga!", "Scusi!", "Mi dica!" are subjunctive forms.`,
      },
      {
        q: `What about "che" in wishes like "Che Dio ti benedica"?`,
        a: `A subjunctive after "che" with no main verb expresses a wish or an order: "Che entri!" (let him come in), "Che tu sia felice". It's rather formal or emphatic.`,
      },
    ],
    related: ["subjunctive-uses", "subjunctive-conjunctions", "past-subjunctive", "imperative"],
    lessons: [
      "b1-subjunctive-regular",
      "b1-subjunctive-essere-avere",
      "b1-subjunctive-irregular-1",
      "b1-subjunctive-irregular-2",
      "b1-drill-subjunctive-regular",
      "b1-drill-subjunctive-irregular",
      "b1-subjunctive-pronouns",
      "b1-error-hunt-subjunctive-forms",
      "b1-listening-lab-subjunctive",
      "b1-spiral-subjunctive-present",
    ],
  },
  {
    slug: "subjunctive-uses",
    title: "Penso Che Sia, Voglio Che Tu Venga: When to Use the Subjunctive",
    description:
      "The verbs and phrases that trigger the subjunctive (opinion, wishes, feelings, doubt, impersonal phrases like è importante che), when the indicative stays (so che, è vero che), and the infinitive when the subject is the same (penso di venire).",
    level: "B1",
    intro: [
      `The subjunctive appears in a "che" clause when the main verb presents the content as an opinion, a wish, a feeling, a doubt or a necessity rather than a fact. "So che è a casa" (I know he's home: a fact, indicative) but "Penso che sia a casa" (I think he's home: an opinion, subjunctive).`,
      `There is one more rule that saves a lot of subjunctives: when both verbs have the same subject, Italian uses "di" + infinitive instead: "Penso di venire" (I think I'll come), not "penso che io venga".`,
    ],
    sections: [
      {
        heading: `The triggers`,
        body: [
          `Opinion and belief: "pensare", "credere", "ritenere", "mi sembra", "mi pare", "suppongo", "immagino". Wishes and will: "volere", "desiderare", "preferire", "sperare", "chiedere", "lasciare". Feelings: "sono contento che", "mi dispiace che", "ho paura che", "mi stupisce che". Doubt: "dubitare", "non sono sicuro che", "non so se". Each of these is followed by "che" + subjunctive when the subject changes.`,
          `Impersonal phrases of necessity, possibility, judgement and feeling also take it: "è importante che", "è necessario che", "bisogna che", "è meglio che", "è possibile che", "può darsi che", "è strano che", "è un peccato che", "sembra che".`,
        ],
        table: {
          headers: ["Type", "Triggers", "Example"],
          rows: [
            ["opinion", "penso, credo, mi sembra che", "Credo che sia chiuso."],
            ["wish", "voglio, spero, preferisco che", "Spero che tu venga."],
            ["feeling", "sono felice, mi dispiace, ho paura che", "Mi dispiace che tu parta."],
            ["doubt", "dubito, non sono sicuro che", "Dubito che lo sappia."],
            ["impersonal", "è importante, bisogna, è meglio che", "Bisogna che studiate."],
            ["possibility", "è possibile, può darsi, sembra che", "Può darsi che piova."],
          ],
        },
        examples: [
          { it: "Mi sembra che Luca sia un po' stanco.", en: "Luca seems a bit tired to me." },
          { it: "Preferisco che tu me lo dica subito.", en: "I'd rather you told me right away." },
          { it: "Sono contenta che vi piaccia la casa.", en: "I'm glad you like the house." },
          { it: "È importante che tutti firmino il modulo.", en: "It's important that everyone signs the form." },
          { it: "Può darsi che arrivino in ritardo.", en: "They may arrive late." },
        ],
      },
      {
        heading: `Facts keep the indicative`,
        body: [
          `Verbs and phrases of knowledge, certainty and perception take the indicative: "so che", "sono sicuro che", "è vero che", "è chiaro che", "vedo che", "ho sentito che", "dimostra che". In the negative, certainty can turn into doubt and the subjunctive appears: "È vero che è partito" but "Non è vero che sia partito".`,
          `"Dire che" reports a fact (indicative: "Dice che è stanco"); "dire di" + infinitive is a request ("Mi ha detto di aspettare").`,
        ],
        examples: [
          { it: "So che hai ragione.", en: "I know you're right." },
          { it: "Sono sicuro che è a casa.", en: "I'm sure he's home." },
          { it: "Non sono sicuro che sia a casa.", en: "I'm not sure he's home." },
          { it: "È chiaro che non ci vuole venire.", en: "It's clear he doesn't want to come." },
        ],
      },
      {
        heading: `Same subject: "di" + infinitive`,
        body: [
          `When the subject of both verbs is the same, use the infinitive: "Penso di avere ragione" (I think I'm right), "Spero di vederti presto", "Sono contento di essere qui", "Ho paura di sbagliare". "Volere", "preferire" and "desiderare" take the infinitive with no "di": "Voglio venire", "Preferisco restare".`,
          `Impersonal phrases take the bare infinitive when they speak about people in general: "È importante dormire bene", "Bisogna prenotare", "È meglio partire presto". Add "che" + subjunctive to name a specific person: "È meglio che tu parta presto".`,
        ],
        examples: [
          { it: "Credo di aver capito.", en: "I think I've understood." },
          { it: "Spero di trovare lavoro a Milano.", en: "I hope to find work in Milan." },
          { it: "Voglio venire anch'io.", en: "I want to come too." },
          { it: "Voglio che venga anche tu.", en: "I want you to come too." },
          { it: "È necessario prenotare in anticipo.", en: "You need to book ahead." },
        ],
      },
      {
        heading: `What Italians say: "penso che è"`,
        body: [
          `In relaxed conversation many Italians use the indicative after verbs of opinion: "Penso che è vero", "Credo che ha ragione". You will hear it often, especially in the North and among young people, and you should understand it. But in writing, at work, in exams and in careful speech it sounds wrong or careless. Use the subjunctive.`,
          `With "spero", "voglio", "bisogna" and the conjunctions ("benché", "prima che"), the subjunctive is kept almost everywhere, even in casual speech.`,
        ],
        examples: [
          { it: "Penso che sia una buona idea.", en: "I think it's a good idea." },
          { it: "Voglio che tu sia felice.", en: "I want you to be happy." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Voglio che io venga.",
        right: "Voglio venire.",
        why: `Same subject: use the infinitive.`,
      },
      {
        wrong: "Voglio tu venire.",
        right: "Voglio che tu venga.",
        why: `Different subjects: "che" + subjunctive. Italian has no I want you to come pattern.`,
      },
      {
        wrong: "So che lui sia a casa.",
        right: "So che lui è a casa.",
        why: `"Sapere" states a fact: indicative.`,
      },
      {
        wrong: "Penso che ho ragione.",
        right: "Penso di avere ragione.",
        why: `Same subject: "di" + infinitive.`,
      },
      {
        wrong: "È importante che studiare ogni giorno.",
        right: "È importante studiare ogni giorno.",
        why: `For people in general use the bare infinitive; "che" needs a subject and a subjunctive.`,
      },
      {
        wrong: "Spero che vieni.",
        right: "Spero che tu venga.",
        why: `"Sperare che" takes the subjunctive, even in speech.`,
      },
    ],
    faqs: [
      {
        q: `Does "secondo me" take the subjunctive?`,
        a: `No. "Secondo me" (in my opinion) is not a verb, so the sentence is a normal statement: "Secondo me ha ragione."`,
      },
      {
        q: `What about "se"?`,
        a: `"Non so se" can take either: "Non so se è vero" or "Non so se sia vero" (more formal). In real conditions ("se piove...") "se" takes the indicative; in hypothetical ones ("se piovesse...") the imperfect subjunctive.`,
      },
      {
        q: `"Spero di" or "spero che"?`,
        a: `"Spero di vincere" (I hope I win: same subject); "Spero che tu vinca" (I hope you win: different subjects).`,
      },
    ],
    related: ["present-subjunctive", "subjunctive-conjunctions", "past-subjunctive", "verbs-with-prepositions"],
    lessons: [
      "b1-opinion-subjunctive",
      "b1-opinion-infinitive",
      "b1-certainty-indicative",
      "b1-drill-opinion-subjunctive",
      "b1-drill-subjunctive-or-infinitive",
      "b1-spoken-indicative",
      "b1-error-hunt-opinions",
      "b1-subjunctive-wishes",
      "b1-subjunctive-feelings",
      "b1-subjunctive-fear-doubt",
      "b1-drill-wishes-feelings",
      "b1-contrast-voglio-voglio-che",
      "b1-drill-same-different-subject",
      "b1-error-hunt-wishes",
      "b1-impersonal-subjunctive",
      "b1-impersonal-infinitive",
      "b1-impersonal-indicative",
      "b1-drill-impersonal",
      "b1-sembra-puo-darsi",
      "b1-drill-subjunctive-mixed-triggers",
      "b1-error-hunt-impersonal",
      "b1-feelings-subjunctive",
    ],
  },
  {
    slug: "subjunctive-conjunctions",
    title: "Benché, Affinché, Prima Che, Purché: Conjunctions with the Subjunctive",
    description:
      "The conjunctions that always take the subjunctive: although (benché, sebbene, nonostante), so that (affinché, perché), before and without (prima che, senza che), unless and provided (a meno che, purché), and their infinitive partners prima di and senza.",
    level: "B1",
    intro: [
      `Some conjunctions always take the subjunctive, in speech as well as writing, because they introduce something that is not a plain fact: a concession, a purpose, a condition or something that hasn't happened yet. "Esco, benché piova" (I'm going out, although it's raining).`,
      `As with verbs, several of them switch to "di" + infinitive when the subject is the same: "Ti chiamo prima che tu parta" but "Ti chiamo prima di partire".`,
    ],
    sections: [
      {
        heading: `Although, so that`,
        body: [
          `"Benché", "sebbene", "nonostante" and "malgrado" mean although, even though, and all take the subjunctive: "Benché sia stanco, continua a lavorare." "Anche se" (even if, even though) is the everyday alternative and takes the indicative: "Anche se è stanco, continua a lavorare."`,
          `"Affinché" (so that, formal) and "perché" meaning so that take the subjunctive: "Te lo ripeto perché tu lo capisca." When "perché" means because, it takes the indicative: "Te lo ripeto perché è importante."`,
        ],
        examples: [
          { it: "Sebbene abiti in Italia da anni, parla ancora poco.", en: "Although he's lived in Italy for years, he still speaks very little." },
          { it: "Nonostante faccia freddo, i bambini giocano fuori.", en: "Although it's cold, the children are playing outside." },
          { it: "Anche se fa freddo, esco.", en: "Even though it's cold, I'm going out." },
          { it: "Parla piano perché tutti capiscano.", en: "Speak slowly so that everyone understands." },
          { it: "Il comune ha stanziato fondi affinché la scuola venga ristrutturata.", en: "The council has allocated funds so that the school can be renovated." },
        ],
      },
      {
        heading: `Before, without, unless, provided`,
        body: [
          `"Prima che" (before) and "senza che" (without) take the subjunctive: "Usciamo prima che cominci a piovere", "È partito senza che nessuno se ne accorgesse." With the same subject, use "prima di" and "senza" + infinitive: "Lavati le mani prima di mangiare", "È uscito senza salutare."`,
          `"A meno che (non)" (unless) and "purché", "a condizione che", "a patto che" (provided that, as long as) take the subjunctive: "Vengo, purché tu guidi." "A meno che" is often followed by a "non" that doesn't make the sentence negative: "Partiamo domani, a meno che non piova" (unless it rains).`,
        ],
        table: {
          headers: ["Conjunction", "Meaning", "Same subject"],
          rows: [
            ["benché, sebbene, nonostante", "although", "pur + gerund"],
            ["affinché, perché", "so that", "per + infinitive"],
            ["prima che", "before", "prima di + infinitive"],
            ["senza che", "without", "senza + infinitive"],
            ["a meno che (non)", "unless", "a meno di + infinitive"],
            ["purché, a patto che, a condizione che", "provided that", "a patto di + infinitive"],
          ],
        },
        examples: [
          { it: "Torniamo a casa prima che faccia buio.", en: "Let's go home before it gets dark." },
          { it: "Finisco il lavoro prima di uscire.", en: "I'll finish work before going out." },
          { it: "È entrato senza che lo vedessimo.", en: "He came in without our seeing him." },
          { it: "Ti presto la macchina, purché tu me la riporti stasera.", en: "I'll lend you the car, as long as you bring it back tonight." },
          { it: "Ci vediamo alle otto, a meno che tu non abbia altri impegni.", en: "See you at eight, unless you have other plans." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Benché è tardi, resto ancora un po'.",
        right: "Benché sia tardi, resto ancora un po'.",
        why: `"Benché" always takes the subjunctive. With the indicative, use "anche se".`,
      },
      {
        wrong: "Ti chiamo prima che io parta.",
        right: "Ti chiamo prima di partire.",
        why: `Same subject: "prima di" + infinitive.`,
      },
      {
        wrong: "Esco prima che piove.",
        right: "Esco prima che piova.",
        why: `"Prima che" takes the subjunctive.`,
      },
      {
        wrong: "Vengo alla festa, a meno che non piove.",
        right: "Vengo alla festa, a meno che non piova.",
        why: `"A meno che" takes the subjunctive; the "non" adds no meaning.`,
      },
      {
        wrong: "Anche se sia stanco, lavora.",
        right: "Anche se è stanco, lavora.",
        why: `"Anche se" takes the indicative.`,
      },
    ],
    faqs: [
      {
        q: `Is the "non" in "a meno che non" a negative?`,
        a: `No. It is an expletive "non", traditional after "a meno che" and sometimes after "prima che" and comparisons ("più di quanto non pensi"). It adds no meaning.`,
      },
      {
        q: `How do I tell which "perché" it is?`,
        a: `If it answers why? (because), indicative. If it answers what for? (so that), subjunctive. "Lo dico perché lo sai" (because you know) vs "Lo dico perché tu lo sappia" (so that you know).`,
      },
      {
        q: `Is "nonostante" also a preposition?`,
        a: `Yes: "nonostante la pioggia" (despite the rain). With a clause it takes the subjunctive: "nonostante piovesse".`,
      },
    ],
    related: ["subjunctive-uses", "present-subjunctive", "gerund"],
    lessons: [
      "b1-although",
      "b1-so-that",
      "b1-before-without",
      "b1-unless-provided",
      "b1-drill-conjunctions",
      "b1-contrast-prima-che-prima-di",
      "b1-drill-perche-two-meanings",
      "b1-error-hunt-conjunctions",
    ],
  },
  {
    slug: "past-subjunctive",
    title: "Penso Che Sia Partito: The Past Subjunctive",
    description:
      "The congiuntivo passato (sia stato, abbia fatto): its forms, when to use it for something before the moment of the main verb, and the past infinitive (credo di aver capito) for the same subject.",
    level: "B1",
    intro: [
      `The past subjunctive is the subjunctive of the passato prossimo: "abbia fatto", "sia andato". Use it after the same triggers as the present subjunctive when the action in the "che" clause happened before the moment you're speaking about: "Penso che Marco sia già partito" (I think Marco has already left).`,
    ],
    sections: [
      {
        heading: `Forms`,
        body: [
          `Present subjunctive of "avere" or "essere" + past participle, with the same helping verbs and agreements as the passato prossimo: "che io abbia mangiato", "che lei sia arrivata", "che si siano sposati".`,
        ],
        table: {
          headers: ["", "with avere: capire", "with essere: arrivare"],
          rows: [
            ["che io", "abbia capito", "sia arrivato / arrivata"],
            ["che tu", "abbia capito", "sia arrivato / arrivata"],
            ["che lui, lei", "abbia capito", "sia arrivato / arrivata"],
            ["che noi", "abbiamo capito", "siamo arrivati / arrivate"],
            ["che voi", "abbiate capito", "siate arrivati / arrivate"],
            ["che loro", "abbiano capito", "siano arrivati / arrivate"],
          ],
        },
        examples: [
          { it: "Spero che abbiate fatto buon viaggio.", en: "I hope you had a good trip." },
          { it: "Mi sembra che abbia sbagliato strada.", en: "I think he's taken the wrong road." },
          { it: "È strano che non abbia ancora chiamato.", en: "It's strange that she hasn't called yet." },
          { it: "Sono contento che vi siate divertiti.", en: "I'm glad you had a good time." },
        ],
      },
      {
        heading: `Present or past subjunctive?`,
        body: [
          `After a main verb in the present, choose by time: the present subjunctive for something happening now or later ("Credo che sia a casa", he's home now), the past subjunctive for something that happened before ("Credo che sia stato a casa ieri", he was home yesterday).`,
          `With the same subject, use the past infinitive: "avere" or "essere" + participle, often shortened to "aver": "Credo di aver capito" (I think I've understood), "Sono contenta di essere venuta", "Mi dispiace di non averti chiamato".`,
        ],
        table: {
          headers: ["Time of the che clause", "Different subject", "Same subject"],
          rows: [
            ["now or later", "Penso che parta domani.", "Penso di partire domani."],
            ["before", "Penso che sia partito ieri.", "Penso di aver sbagliato."],
          ],
        },
        examples: [
          { it: "Non credo che sia già arrivato.", en: "I don't think he's arrived yet." },
          { it: "Penso che ieri abbia piovuto tutto il giorno.", en: "I think it rained all day yesterday." },
          { it: "Credo di aver lasciato le chiavi in macchina.", en: "I think I left the keys in the car." },
          { it: "Mi dispiace di non essere venuto alla festa.", en: "I'm sorry I didn't come to the party." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Penso che è partito.",
        right: "Penso che sia partito.",
        why: `After "penso che", the past subjunctive: "sia partito".`,
      },
      {
        wrong: "Spero che hai dormito bene.",
        right: "Spero che tu abbia dormito bene.",
        why: `"Sperare che" takes the subjunctive; the sleeping happened before, so the past subjunctive.`,
      },
      {
        wrong: "Credo che io abbia capito.",
        right: "Credo di aver capito.",
        why: `Same subject: the past infinitive.`,
      },
      {
        wrong: "È possibile che sia uscita ieri sera e torna tardi.",
        right: "È possibile che sia uscita ieri sera e che sia tornata tardi.",
        why: `Both actions depend on "è possibile che", so both take the subjunctive.`,
      },
    ],
    faqs: [
      {
        q: `What if the main verb is in the past?`,
        a: `Then the imperfect or pluperfect subjunctive is needed: "Pensavo che fosse partito." That sequence of tenses is taught at the Upper-intermediate level.`,
      },
      {
        q: `Is "aver" the same as "avere"?`,
        a: `Yes. "Avere" often drops its final "e" before a participle: "dopo aver mangiato", "credo di aver capito". Both spellings are correct.`,
      },
      {
        q: `Does the participle agree here too?`,
        a: `Yes, the same rules as the passato prossimo: with "essere" it agrees with the subject ("che sia arrivata"), with "avere" only with a preceding "lo", "la", "li", "le" ("che l'abbia vista").`,
      },
    ],
    related: ["present-subjunctive", "subjunctive-uses", "passato-prossimo"],
    lessons: [
      "b1-past-subjunctive-forms",
      "b1-past-subjunctive-use",
      "b1-past-infinitive-same-subject",
      "b1-drill-past-subjunctive",
      "b1-contrast-present-past-subjunctive",
      "b1-drill-subjunctive-tense-choice",
      "b1-error-hunt-past-subjunctive",
      "b1-listening-lab-past-guesses",
    ],
  },
  {
    slug: "past-conditional",
    title: "Avrei Voluto, Sarei Venuto: The Past Conditional",
    description:
      "The condizionale passato: its forms, regrets and missed chances (avrei dovuto, avrei potuto), the future in the past (ha detto che sarebbe venuto), and the journalistic conditional of unconfirmed news.",
    level: "B1",
    intro: [
      `The past conditional is would have: "Avrei comprato la casa" (I would have bought the house), "Sarei venuto" (I would have come). It is formed like the passato prossimo, with the helping verb in the conditional.`,
      `It has one use that English handles differently: after a past verb of saying, thinking or promising, Italian uses the past conditional for what was then the future. "Ha detto che sarebbe venuto" means he said he would come, not he said he would have come.`,
    ],
    sections: [
      {
        heading: `Forms, regrets and missed chances`,
        body: [
          `Conditional of "avere" or "essere" + past participle: "avrei fatto", "sarei andata", "ci saremmo visti". The usual helping-verb choice and agreements apply.`,
          `With modal verbs it expresses regret and criticism: "Avrei dovuto studiare di più" (I should have studied more), "Avresti potuto dirmelo!" (you could have told me!), "Avrei voluto vederti" (I would have liked to see you). With "mi sarebbe piaciuto" it describes a wish that didn't come true.`,
        ],
        table: {
          headers: ["", "with avere: dovere", "with essere: andare"],
          rows: [
            ["io", "avrei dovuto", "sarei andato / andata"],
            ["tu", "avresti dovuto", "saresti andato / andata"],
            ["lui, lei, Lei", "avrebbe dovuto", "sarebbe andato / andata"],
            ["noi", "avremmo dovuto", "saremmo andati / andate"],
            ["voi", "avreste dovuto", "sareste andati / andate"],
            ["loro", "avrebbero dovuto", "sarebbero andati / andate"],
          ],
        },
        examples: [
          { it: "Avrei dovuto prenotare prima.", en: "I should have booked earlier." },
          { it: "Saresti potuto venire con noi!", en: "You could have come with us!" },
          { it: "Mi sarebbe piaciuto vivere a Parigi.", en: "I would have liked to live in Paris." },
          { it: "Al tuo posto non avrei accettato.", en: "In your shoes, I wouldn't have accepted." },
        ],
      },
      {
        heading: `The future in the past`,
        body: [
          `When a past verb ("ha detto", "pensavo", "mi ha promesso", "sapevo") introduces something that was in the future at that time, Italian uses the past conditional, whether or not it actually happened: "Mi ha promesso che mi avrebbe chiamato" (he promised me he would call me). English uses would + verb; Italian does not use the simple conditional here.`,
        ],
        table: {
          headers: ["Direct", "Reported in the past"],
          rows: [
            ["«Verrò.»", "Ha detto che sarebbe venuto."],
            ["«Ti scriverò.»", "Mi ha promesso che mi avrebbe scritto."],
            ["«Il treno arriverà alle otto.»", "Pensavo che il treno sarebbe arrivato alle otto."],
          ],
        },
        examples: [
          { it: "Sapevo che avresti capito.", en: "I knew you would understand." },
          { it: "Ci hanno detto che il volo sarebbe partito in ritardo.", en: "They told us the flight would leave late." },
          { it: "Pensavo che sarebbe stato più facile.", en: "I thought it would be easier." },
          { it: "Mi aveva giurato che non l'avrebbe più fatto.", en: "He had sworn to me he wouldn't do it again." },
        ],
      },
      {
        heading: `The journalistic conditional`,
        body: [
          `News reports use the conditional to present information they haven't confirmed: "Il ministro sarebbe pronto a dimettersi" (the minister is said to be ready to resign), "Il ladro sarebbe fuggito in moto" (the thief reportedly escaped on a motorbike). The present conditional is for the present, the past conditional for the past. English uses reportedly, allegedly or is said to.`,
        ],
        examples: [
          { it: "Secondo alcune fonti, l'accordo sarebbe già stato firmato.", en: "According to some sources, the agreement has already been signed." },
          { it: "L'incendio sarebbe partito da una sigaretta.", en: "The fire reportedly started from a cigarette." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ha detto che verrebbe.",
        right: "Ha detto che sarebbe venuto.",
        why: `The future in the past takes the past conditional in Italian.`,
      },
      {
        wrong: "Dovrei studiare di più l'anno scorso.",
        right: "Avrei dovuto studiare di più l'anno scorso.",
        why: `A past regret takes the past conditional: should have is "avrei dovuto".`,
      },
      {
        wrong: "Avrei andato con te.",
        right: "Sarei andato con te.",
        why: `"Andare" takes "essere" in every compound tense.`,
      },
      {
        wrong: "Mi ha promesso che mi chiamerà.",
        right: "Mi ha promesso che mi avrebbe chiamato.",
        why: `After a past verb of saying, the future becomes the past conditional. (Speech sometimes keeps the future if it is still to come, but the conditional is always correct.)`,
      },
    ],
    faqs: [
      {
        q: `How do I say I would have if...?`,
        a: `With "se" + the pluperfect subjunctive: "Se l'avessi saputo, sarei venuto." These impossible-past if-sentences are taught at the Upper-intermediate level.`,
      },
      {
        q: `"Avrei dovuto" or "sarei dovuto"?`,
        a: `It follows the infinitive: "Avrei dovuto studiare" (studiare takes avere), "Sarei dovuto partire" (partire takes essere). "Avrei dovuto partire" is also common in speech.`,
      },
      {
        q: `Is the English would in 'every day he would walk' a conditional?`,
        a: `No, that's a past habit: imperfetto, "ogni giorno camminava".`,
      },
    ],
    related: ["conditional", "reported-speech", "future-perfect", "past-tenses"],
    lessons: [
      "b1-past-conditional-forms",
      "b1-past-conditional-regrets",
      "b1-should-have",
      "b1-future-in-the-past",
      "b1-drill-past-conditional",
      "b1-drill-future-in-past",
      "b1-contrast-verrebbe-sarebbe-venuto",
      "b1-error-hunt-past-conditional",
      "b1-conditional-of-hearsay",
    ],
  },
  {
    slug: "future-perfect",
    title: "Avrò Finito, Sarà Già Arrivato: The Future Perfect",
    description:
      "The futuro anteriore: its forms, its use for something completed before a future moment (quando avrò finito, dopo che sarà arrivato), and for guesses about the past (avrà perso il treno).",
    level: "B1",
    intro: [
      `The futuro anteriore is will have done: "Alle otto avrò finito" (by eight I'll have finished). It is the future of "avere" or "essere" + participle. Italians use it more than English speakers expect, because it is required after "quando" and "dopo che" for future actions, and because it is the standard way to guess about the past.`,
    ],
    sections: [
      {
        heading: `Forms and the future sequence`,
        body: [
          `Future of the helping verb + participle: "avrò fatto", "sarò arrivata", "ci saremo visti". After "quando", "dopo che", "appena" and "finché non", the action that comes first takes the futuro anteriore and the later one the futuro semplice: "Quando avrò finito, ti chiamerò" (when I've finished, I'll call you). English uses the present perfect here; Italian needs a future.`,
          `In casual speech the simple future, or even the present, often replaces it ("Quando finisco, ti chiamo"), but written Italian keeps the sequence.`,
        ],
        table: {
          headers: ["", "with avere: finire", "with essere: arrivare"],
          rows: [
            ["io", "avrò finito", "sarò arrivato / arrivata"],
            ["tu", "avrai finito", "sarai arrivato / arrivata"],
            ["lui, lei, Lei", "avrà finito", "sarà arrivato / arrivata"],
            ["noi", "avremo finito", "saremo arrivati / arrivate"],
            ["voi", "avrete finito", "sarete arrivati / arrivate"],
            ["loro", "avranno finito", "saranno arrivati / arrivate"],
          ],
        },
        examples: [
          { it: "Appena avrò ricevuto i documenti, te li manderò.", en: "As soon as I've received the documents, I'll send them to you." },
          { it: "Dopo che avrete visto il museo, andremo a pranzo.", en: "After you've seen the museum, we'll go to lunch." },
          { it: "Entro giugno avremo traslocato.", en: "By June we'll have moved." },
          { it: "Quando sarai arrivato, mandami un messaggio.", en: "When you've arrived, send me a message." },
        ],
      },
      {
        heading: `Guessing about the past`,
        body: [
          `Just as the simple future guesses about the present ("Sarà a casa", he must be home), the futuro anteriore guesses about the past: "Avrà perso il treno" (he must have missed the train), "Sarà stato stanco" (he must have been tired), "Quanto avrà pagato?" (how much do you think he paid?). It is very common in conversation.`,
        ],
        table: {
          headers: ["Certain", "Guess"],
          rows: [
            ["È a casa.", "Sarà a casa. (he must be home)"],
            ["È uscito.", "Sarà uscito. (he must have gone out)"],
            ["Ha dimenticato.", "Avrà dimenticato. (he must have forgotten)"],
          ],
        },
        examples: [
          { it: "Non risponde: si sarà addormentato.", en: "He's not answering: he must have fallen asleep." },
          { it: "Chi avrà lasciato la porta aperta?", en: "Who could have left the door open?" },
          { it: "Saranno state le tre quando sono tornati.", en: "It must have been about three when they got back." },
          { it: "Avrà avuto i suoi motivi.", en: "She must have had her reasons." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Quando ho finito, ti chiamerò.",
        right: "Quando avrò finito, ti chiamerò.",
        why: `A future action completed before another future action takes the futuro anteriore.`,
      },
      {
        wrong: "Avrò arrivato alle otto.",
        right: "Sarò arrivato alle otto.",
        why: `"Arrivare" takes "essere".`,
      },
      {
        wrong: "Deve perdere il treno.",
        right: "Avrà perso il treno.",
        why: `He must have missed it is a guess about the past: futuro anteriore, or "deve aver perso".`,
      },
      {
        wrong: "Maria non risponde: sarà uscito.",
        right: "Maria non risponde: sarà uscita.",
        why: `With "essere" the participle agrees with the subject.`,
      },
    ],
    faqs: [
      {
        q: `Is "deve aver perso" also correct?`,
        a: `Yes. "Deve aver perso il treno" and "Avrà perso il treno" mean the same. The futuro anteriore is a little more conversational and more common.`,
      },
      {
        q: `How do I tell a guess from a real future?`,
        a: `From context and time words. "Domani a quest'ora sarò arrivato" (tomorrow at this time I'll have arrived) is a real future. "Dov'è Luca? Sarà già arrivato" (he must already be there) is a guess.`,
      },
      {
        q: `Does it work after "se"?`,
        a: `Yes, in careful Italian: "Se avrai finito, potrai uscire" (if you've finished, you can go out). In speech the present is more common.`,
      },
    ],
    related: ["future-tense", "past-conditional", "if-sentences-real"],
    lessons: [
      "b1-future-perfect-forms",
      "b1-future-perfect-sequence",
      "b1-future-perfect-probability",
      "b1-drill-future-perfect",
      "b1-contrast-sara-sara-stato",
      "b1-drill-probability-mixed",
      "b1-error-hunt-future-perfect",
    ],
  },
  {
    slug: "if-sentences-real",
    title: "Se Piove, Resto a Casa: Real If-Sentences",
    description:
      "The first type of Italian if-sentence: se + present or future for real possibilities, se + present with a command, se + past for real past conditions, se vs quando, and a preview of the hypothetical se avessi.",
    level: "B1",
    intro: [
      `An if-sentence (periodo ipotetico) has two parts: the condition, with "se", and the result. When the condition is a real possibility, Italian uses the indicative in both parts, just as English does: "Se piove, restiamo a casa" (if it rains, we'll stay home).`,
      `Italian grammars call this the "periodo ipotetico della realtà". The hypothetical ("se avessi tempo, viaggerei") and the impossible ("se l'avessi saputo, sarei venuto") types use the subjunctive and come at the Upper-intermediate level.`,
    ],
    sections: [
      {
        heading: `Present and future`,
        body: [
          `For general truths and likely conditions, use the present in both parts: "Se mangio troppo, sto male." For the future, the present is common in speech ("Se domani piove, non vengo") and the future in both parts is the careful written form: "Se domani pioverà, non verrò." Don't mix: "se + future" goes with a future or a command, never with a conditional.`,
          `With a command, the "se" clause is in the present or future: "Se hai fame, mangia qualcosa!", "Se vedi Marco, salutamelo."`,
        ],
        table: {
          headers: ["Condition (se ...)", "Result", "Use"],
          rows: [
            ["present", "present", "general truths, habits"],
            ["present", "future or present", "likely future (speech)"],
            ["future", "future", "likely future (careful)"],
            ["present", "imperative", "advice, instructions"],
          ],
        },
        examples: [
          { it: "Se scaldi l'acqua a cento gradi, bolle.", en: "If you heat water to a hundred degrees, it boils." },
          { it: "Se finisco presto, ti passo a prendere.", en: "If I finish early, I'll pick you up." },
          { it: "Se avrai bisogno di aiuto, chiamami.", en: "If you need help, call me." },
          { it: "Se non ti senti bene, resta a casa.", en: "If you don't feel well, stay home." },
          { it: "Se arriveranno in tempo, cominceremo alle nove.", en: "If they arrive on time, we'll start at nine." },
        ],
      },
      {
        heading: `Real conditions in the past`,
        body: [
          `A real condition about the past uses past tenses in the indicative: "Se ha detto così, ha sbagliato" (if he said that, he was wrong), "Se eri stanco, potevi restare a casa" (if you were tired, you could have stayed home). The speaker isn't imagining an alternative, just drawing a conclusion.`,
        ],
        examples: [
          { it: "Se l'ha detto Giulia, sarà vero.", en: "If Giulia said it, it must be true." },
          { it: "Se non hai capito, perché non hai chiesto?", en: "If you didn't understand, why didn't you ask?" },
          { it: "Se ieri era chiuso, oggi sarà aperto.", en: "If it was closed yesterday, it'll be open today." },
        ],
      },
      {
        heading: `"Se" or "quando"?`,
        body: [
          `"Se" is if: the condition may or may not happen. "Quando" is when: it will happen, the question is when. "Se arriva Luca, glielo dico" (if he comes) vs "Quando arriva Luca, glielo dico" (when he comes).`,
          `"Se" also introduces indirect yes-no questions, where English uses whether: "Non so se viene" (I don't know if he's coming). That "se" can take the future: "Mi chiedo se verrà."`,
        ],
        examples: [
          { it: "Se trovo lavoro, mi trasferisco a Milano.", en: "If I find a job, I'll move to Milan." },
          { it: "Quando trovo lavoro, mi compro una macchina.", en: "When I find a job, I'll buy myself a car." },
          { it: "Non so se hanno già cenato.", en: "I don't know whether they've had dinner yet." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Se pioverebbe, resto a casa.",
        right: "Se piove, resto a casa.",
        why: `The conditional never goes in the "se" clause.`,
      },
      {
        wrong: "Se avrai tempo, verresti?",
        right: "Se avrai tempo, verrai?",
        why: `"Se" + future goes with a future (or present, or command) in the result.`,
      },
      {
        wrong: "Non so che viene stasera.",
        right: "Non so se viene stasera.",
        why: `Whether, in an indirect yes-no question, is "se".`,
      },
      {
        wrong: "Se ho tempo, verrei.",
        right: "Se ho tempo, vengo.",
        why: `A real possibility keeps the indicative in both parts. "Verrei" belongs with "se avessi tempo".`,
      },
    ],
    faqs: [
      {
        q: `How do I say if I were you?`,
        a: `That's a hypothetical: "Se fossi in te", with the imperfect subjunctive, followed by the conditional: "Se fossi in te, accetterei." Learn it as a fixed phrase for now.`,
      },
      {
        q: `Can "se" be left out, as in English should you need anything?`,
        a: `Formal Italian uses "qualora" or "nel caso in cui" + subjunctive: "Qualora avesse bisogno, ci contatti." You will meet these at the Upper-intermediate level.`,
      },
      {
        q: `Which order: condition first or result first?`,
        a: `Either: "Se piove, resto a casa" or "Resto a casa se piove". With the "se" clause first, put a comma after it.`,
      },
    ],
    related: ["future-tense", "conditional", "future-perfect", "imperative"],
    lessons: [
      "a2-quando-se-future",
      "b1-if-real-present",
      "b1-if-real-future",
      "b1-if-past-condition",
      "b1-drill-real-conditions",
      "b1-contrast-se-quando",
      "b1-drill-conditions-and-commands",
      "b1-error-hunt-real-if",
    ],
  },
  {
    slug: "passato-remoto",
    title: "Fu, Ebbe, Disse, Nacque: Recognising the Passato Remoto",
    description:
      "How to recognise the passato remoto in novels, fairy tales, history and biographies: the regular endings, essere and avere, the irregular verbs, where Italians use it, and parlò vs parlo.",
    level: "B1",
    intro: [
      `The passato remoto is the past tense of written narrative. Fairy tales start "C'era una volta un re che aveva tre figlie..." and go on "Un giorno la più giovane partì..."; biographies say "Leonardo nacque a Vinci nel 1452". In most of Italy it is rare in conversation, where the passato prossimo is used, but in parts of the South, especially Sicily and Calabria, it is still everyday speech.`,
      `At this level the aim is to recognise it when you read and hear it. You will learn to use it actively at the Advanced level.`,
    ],
    sections: [
      {
        heading: `Regular forms`,
        body: [
          `The third persons are the ones you meet most, since stories are about he, she and they: "-are" verbs end in "-ò" and "-arono" ("parlò", "parlarono"), "-ere" verbs in "-é" (or "-ette") and "-erono" ("credé" or "credette", "crederono"), "-ire" verbs in "-ì" and "-irono" ("partì", "partirono").`,
          `The final accent matters: "parlò" (he spoke, remote past) and "parlo" (I speak) differ only in stress and spelling. The same with "partì" and "parti".`,
        ],
        table: {
          headers: ["", "parlare", "credere", "partire"],
          rows: [
            ["io", "parlai", "credei (credetti)", "partii"],
            ["tu", "parlasti", "credesti", "partisti"],
            ["lui, lei", "parlò", "credé (credette)", "partì"],
            ["noi", "parlammo", "credemmo", "partimmo"],
            ["voi", "parlaste", "credeste", "partiste"],
            ["loro", "parlarono", "crederono (credettero)", "partirono"],
          ],
        },
        examples: [
          { it: "Il principe tornò al castello e raccontò tutto al re.", en: "The prince returned to the castle and told the king everything." },
          { it: "Gli ospiti partirono all'alba.", en: "The guests left at dawn." },
          { it: "La guerra finì nel 1945.", en: "The war ended in 1945." },
          { it: "Nessuno capì cosa era successo.", en: "Nobody understood what had happened." },
        ],
      },
      {
        heading: `Essere, avere and the irregulars`,
        body: [
          `"Essere" gives "fui, fosti, fu, fummo, foste, furono"; "avere" gives "ebbi, avesti, ebbe, avemmo, aveste, ebbero". Most irregular verbs follow a one-two-three pattern: irregular in "io", "lui/lei" and "loro", regular in the others. So once you recognise "disse" (he said), you will recognise "dissi" and "dissero".`,
          `The most common irregular forms in texts: "fece" (fare), "disse" (dire), "venne" (venire), "vide" (vedere), "prese" (prendere), "mise" (mettere), "nacque" (nascere), "visse" (vivere), "morì" (morire), "scrisse" (scrivere), "decise" (decidere), "chiese" (chiedere), "rispose" (rispondere), "volle" (volere), "seppe" (sapere), "stette" (stare), "diede" (dare).`,
        ],
        table: {
          headers: ["Infinitive", "lui, lei", "loro", "Infinitive", "lui, lei", "loro"],
          rows: [
            ["essere", "fu", "furono", "dire", "disse", "dissero"],
            ["avere", "ebbe", "ebbero", "vedere", "vide", "videro"],
            ["fare", "fece", "fecero", "venire", "venne", "vennero"],
            ["prendere", "prese", "presero", "nascere", "nacque", "nacquero"],
            ["mettere", "mise", "misero", "vivere", "visse", "vissero"],
            ["scrivere", "scrisse", "scrissero", "volere", "volle", "vollero"],
          ],
        },
        examples: [
          { it: "Dante nacque a Firenze nel 1265.", en: "Dante was born in Florence in 1265." },
          { it: "Il lupo disse: «Per mangiarti meglio!»", en: "The wolf said: 'All the better to eat you with!'" },
          { it: "Fu un inverno freddissimo.", en: "It was a freezing winter." },
          { it: "Ebbero tre figli e vissero felici e contenti.", en: "They had three children and lived happily ever after." },
          { it: "Manzoni scrisse il romanzo in diverse versioni.", en: "Manzoni wrote the novel in several versions." },
        ],
      },
      {
        heading: `Where you meet it`,
        body: [
          `Novels, short stories, fairy tales and fables are told in the passato remoto, with the imperfetto for background: "Era notte. La ragazza aprì la porta..." History books, biographies and encyclopedias use it for events far in the past: "Garibaldi partì da Quarto con mille volontari." In northern speech it is almost absent; in Tuscany it is used for distant events; in Sicily and Calabria many people use it for yesterday too.`,
          `When you read it, mentally translate it into the passato prossimo: "fece" is "ha fatto", "andarono" is "sono andati". The meaning is the same; only the register changes.`,
        ],
        examples: [
          { it: "C'era una volta un povero pescatore che viveva vicino al mare.", en: "Once upon a time there was a poor fisherman who lived near the sea." },
          { it: "Un giorno il pescatore prese un pesce d'oro.", en: "One day the fisherman caught a golden fish." },
          { it: "Garibaldi partì da Quarto nel maggio del 1860.", en: "Garibaldi set off from Quarto in May 1860." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ieri andai al cinema con Luca.",
        right: "Ieri sono andato al cinema con Luca.",
        why: `In standard everyday Italian, yesterday's events take the passato prossimo; the passato remoto sounds literary or southern.`,
      },
      {
        wrong: "Il re parlo con la regina.",
        right: "Il re parlò con la regina.",
        why: `The third-person remote past has a written accent: "parlò". Without it, "parlo" means I speak.`,
      },
      {
        wrong: "I due fratelli partì all'alba.",
        right: "I due fratelli partirono all'alba.",
        why: `The plural ending is "-arono", "-erono" or "-irono": "partirono". "Partì" is singular.`,
      },
      {
        wrong: "Lui fu stato a Roma.",
        right: "Lui fu a Roma.",
        why: `The passato remoto is a single word; "fu" already means he was.`,
      },
    ],
    faqs: [
      {
        q: `Do I need to learn all the forms now?`,
        a: `No. Learn to recognise the third persons and the common irregulars. Writing it comes at the Advanced level, when you start writing narrative.`,
      },
      {
        q: `Why "credé" and "credette"?`,
        a: `Most regular "-ere" verbs have two forms in the "io", "lui/lei" and "loro" persons, both correct: "credei" or "credetti", "credé" or "credette", "crederono" or "credettero". The "-etti" forms are the more common ones in modern texts.`,
      },
      {
        q: `Is it wrong to use it in conversation?`,
        a: `Not wrong, but marked. In the North and in Rome it sounds bookish for recent events. It is natural for distant history ("Mio nonno nacque nel 1920") in much of central and southern Italy.`,
      },
    ],
    related: ["past-tenses", "passato-prossimo", "imperfetto", "trapassato-prossimo"],
    lessons: [
      "b1-passato-remoto-regular",
      "b1-passato-remoto-essere-avere",
      "b1-passato-remoto-irregular",
      "b1-where-passato-remoto",
      "b1-drill-passato-remoto-recognition",
      "b1-reading-lab-fairy-tale",
      "b1-reading-lab-biography",
      "b1-drill-remote-to-recent",
      "b1-sound-final-stress",
      "b1-listening-lab-storyteller",
    ],
  },
  {
    slug: "gerund",
    title: "Studiando, Leggendo: The Gerund and English -ing",
    description:
      "The Italian gerund (-ando, -endo) for manner, means, time, cause and condition, stare + gerund, pur + gerund, the past gerund avendo fatto, and the many English -ing forms that are not gerunds in Italian.",
    level: "B1",
    intro: [
      `The Italian gerund ends in "-ando" ("parlando") or "-endo" ("leggendo", "partendo"). It looks like English -ing, but it does much less. It expresses how, by what means, while, since or if an action happens, and its subject is normally the same as the main verb's: "Studiando ogni giorno, ho imparato in fretta" (by studying every day, I learned quickly).`,
      `Most other English -ing forms become an infinitive, a noun or a relative clause in Italian. That is where English speakers make most of their mistakes.`,
    ],
    sections: [
      {
        heading: `Forms and uses`,
        body: [
          `"-Are" verbs take "-ando", the others "-endo": "parlando", "prendendo", "dormendo", "finendo". Verbs with old stems use them: "facendo", "dicendo", "bevendo", "traducendo". Pronouns attach: "parlandone", "vedendola", "alzandomi".`,
          `It answers several questions: how? ("È entrato correndo", he ran in), by what means? ("Si impara sbagliando"), when? ("Tornando a casa, ho incontrato Giulia", while going home), why? ("Essendo stanco, sono andato a letto", since I was tired), and under what condition? ("Partendo adesso, arriviamo alle sei", if we leave now). With "pur" it means although: "Pur essendo ricco, vive con poco."`,
        ],
        table: {
          headers: ["Meaning", "Example", "English"],
          rows: [
            ["manner, means", "Ho imparato l'italiano guardando film.", "by watching films"],
            ["time", "Uscendo, ho chiuso la porta.", "as I went out"],
            ["cause", "Non avendo soldi, sono rimasto a casa.", "since I had no money"],
            ["condition", "Prendendo il treno, risparmi tempo.", "if you take the train"],
            ["concession", "Pur sapendo la verità, non ha detto niente.", "although he knew"],
          ],
        },
        examples: [
          { it: "Sbagliando si impara.", en: "You learn from your mistakes." },
          { it: "Camminando per il centro, ho visto un vecchio cinema.", en: "Walking through the center, I saw an old movie theater." },
          { it: "Essendo domenica, i negozi erano chiusi.", en: "Since it was Sunday, the shops were closed." },
          { it: "Lavorando di più, guadagneresti di più.", en: "If you worked more, you'd earn more." },
          { it: "Pur non conoscendolo, l'ho aiutato.", en: "Although I didn't know him, I helped him." },
        ],
      },
      {
        heading: `Stare and andare + gerund, and the past gerund`,
        body: [
          `"Stare" + gerund is an action in progress ("Sto lavorando"). "Andare" + gerund describes something gradual or repeated: "La situazione va migliorando" (is gradually improving), "Va dicendo a tutti che..." (he goes around telling everyone that...).`,
          `The past gerund, "avendo" or "essendo" + participle, places the action before the main verb: "Avendo finito il lavoro, sono uscito" (having finished work, I went out), "Essendo arrivati tardi, abbiamo perso l'inizio".`,
        ],
        examples: [
          { it: "Stiamo cercando casa a Bologna.", en: "We're looking for a house in Bologna." },
          { it: "Il traffico va aumentando ogni anno.", en: "Traffic keeps increasing every year." },
          { it: "Avendo perso il treno, ho preso un taxi.", en: "Having missed the train, I took a taxi." },
          { it: "Essendo partita presto, è arrivata per pranzo.", en: "Having left early, she arrived in time for lunch." },
        ],
      },
      {
        heading: `English -ing that isn't a gerund`,
        body: [
          `An -ing used as a noun is an infinitive in Italian: "Fumare fa male" (smoking is bad for you), "Mi piace nuotare" (I like swimming), "Grazie per avermi aiutato". After a preposition, Italian always uses the infinitive: "prima di partire" (before leaving), "senza dire niente", "invece di lavorare".`,
          `An -ing describing a noun is a relative clause or an adjective: "la ragazza che parla con Marco" (the girl talking to Marco), "un libro interessante". Verbs of perception take the infinitive or "che": "L'ho visto uscire" or "L'ho visto che usciva" (I saw him leaving). And for plans, the present: "Domani parto" (I'm leaving tomorrow).`,
        ],
        table: {
          headers: ["English", "Italian", "Structure"],
          rows: [
            ["Swimming is good for you.", "Nuotare fa bene.", "infinitive as noun"],
            ["before leaving", "prima di partire", "preposition + infinitive"],
            ["Thanks for coming.", "Grazie di essere venuto.", "di + infinitive"],
            ["the man sitting there", "l'uomo seduto lì", "participle"],
            ["the girl singing", "la ragazza che canta", "relative clause"],
            ["I heard her singing.", "L'ho sentita cantare.", "infinitive"],
            ["I'm leaving tomorrow.", "Parto domani.", "present"],
          ],
        },
        examples: [
          { it: "Imparare una lingua richiede tempo.", en: "Learning a language takes time." },
          { it: "È uscito senza salutare.", en: "He left without saying goodbye." },
          { it: "Chi è quel signore seduto al bar?", en: "Who's that man sitting at the café?" },
          { it: "Ho sentito i vicini litigare.", en: "I heard the neighbors arguing." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Nuotando è il mio sport preferito.",
        right: "Il nuoto è il mio sport preferito.",
        why: `An -ing used as a noun is a noun or an infinitive in Italian ("nuotare", "il nuoto"), never a gerund.`,
      },
      {
        wrong: "Prima di partendo, chiudi la finestra.",
        right: "Prima di partire, chiudi la finestra.",
        why: `After a preposition Italian uses the infinitive.`,
      },
      {
        wrong: "La ragazza parlando con Marco è mia sorella.",
        right: "La ragazza che parla con Marco è mia sorella.",
        why: `An -ing that describes a noun becomes a relative clause.`,
      },
      {
        wrong: "Uscendo dal cinema, la pioggia ha cominciato.",
        right: "Uscendo dal cinema, abbiamo visto che pioveva.",
        why: `The gerund's subject is the subject of the main verb: the rain didn't leave the cinema.`,
      },
      {
        wrong: "Mi piace leggendo.",
        right: "Mi piace leggere.",
        why: `After "piacere" use the infinitive.`,
      },
    ],
    faqs: [
      {
        q: `Is the gerund common in speech?`,
        a: `Yes, especially with "stare" and in short phrases ("Sbagliando si impara", "Parlando di..."). Longer gerund clauses are more typical of writing; speech often prefers "mentre", "siccome" or "se" + verb.`,
      },
      {
        q: `Can the gerund have its own subject?`,
        a: `In formal writing, yes, placed after it: "Essendo il negozio chiuso, siamo tornati a casa." In everyday Italian, use "siccome" instead: "Siccome il negozio era chiuso, ..."`,
      },
      {
        q: `What's the difference between "parlante" and "parlando"?`,
        a: `"-Ante" and "-ente" forms are adjectives or nouns ("acqua corrente", running water; "un cantante", a singer); the gerund is a verb form. You can't freely make "-ante" forms from every verb.`,
      },
    ],
    related: ["time-expressions", "verbs-with-prepositions", "subjunctive-conjunctions", "pronoun-position"],
    lessons: [
      "b1-gerund-manner-means",
      "b1-gerund-time-cause",
      "b1-gerund-condition",
      "b1-not-a-gerund",
      "b1-drill-gerund-forms",
      "b1-drill-ing-to-italian",
      "b1-error-hunt-gerund",
    ],
  },
  {
    slug: "verbs-with-prepositions",
    title: "Decidere Di, Cominciare A: Verbs + Infinitive",
    description:
      "Which verbs take di + infinitive (decidere di, finire di, sperare di), which take a (cominciare a, riuscire a, imparare a), which take no preposition (volere, piacere, bisogna), and da and per + infinitive.",
    level: "B1",
    intro: [
      `When one verb is followed by another, the second is an infinitive, and between them there is often a small preposition: "Ho deciso di partire", "Ho cominciato a studiare", "Voglio uscire". Which one is a property of the first verb, like to + verb in English but less predictable. Learn each verb with its preposition.`,
    ],
    sections: [
      {
        heading: `"Di" + infinitive`,
        body: [
          `"Di" is the most common link, especially after verbs of saying, thinking, deciding, trying and stopping: "decidere di", "cercare di" (to try), "finire di", "smettere di", "sperare di", "pensare di" (to plan), "credere di", "dire di", "chiedere di", "ricordarsi di", "dimenticare di", "avere paura di", "avere bisogno di", "avere voglia di", "essere contento di".`,
        ],
        examples: [
          { it: "Ho deciso di cambiare casa.", en: "I've decided to move house." },
          { it: "Cerca di arrivare in orario.", en: "Try to arrive on time." },
          { it: "Ha smesso di fumare dieci anni fa.", en: "She stopped smoking ten years ago." },
          { it: "Ricordati di comprare il pane!", en: "Remember to buy bread!" },
          { it: "Mi hanno chiesto di aspettare.", en: "They asked me to wait." },
        ],
      },
      {
        heading: `"A" + infinitive`,
        body: [
          `"A" follows verbs of beginning, continuing, managing, learning, helping and moving toward something: "cominciare a", "iniziare a", "continuare a", "riuscire a" (to manage), "imparare a", "insegnare a", "aiutare a", "provare a", "abituarsi a", "andare a", "venire a", "stare a" (to stay doing). Also "pensare a" (to think about), "essere pronto a".`,
          `Some verbs change meaning with the preposition: "pensare di" (to plan to) and "pensare a" (to think about, take care of: "Ci penso io a prenotare"); "finire di" (to finish doing) and "finire per" (to end up doing).`,
        ],
        examples: [
          { it: "Ho cominciato a lavorare a diciotto anni.", en: "I started working at eighteen." },
          { it: "Non riesco a dormire con questo caldo.", en: "I can't sleep in this heat." },
          { it: "Mi insegni a fare la pasta fresca?", en: "Will you teach me to make fresh pasta?" },
          { it: "Vieni a cena da noi sabato?", en: "Are you coming to dinner at ours on Saturday?" },
          { it: "Penso di andare in Sicilia ad agosto.", en: "I'm thinking of going to Sicily in August." },
        ],
      },
      {
        heading: `No preposition, and "da" and "per"`,
        body: [
          `No preposition after modal verbs ("volere", "potere", "dovere", "sapere"), after "preferire", "desiderare", "osare", after verbs used impersonally ("piacere", "bisogna", "basta", "conviene", "serve") and after "è" + adjective ("è facile capire", "è vietato fumare"). Also after "fare" and "lasciare" ("Fammi vedere") and verbs of perception ("Ti ho visto arrivare").`,
          `"Da" + infinitive means to be done, for: "Ho tanto da fare" (I have a lot to do), "qualcosa da bere", "una casa da affittare", "una storia da ridere". "Per" + infinitive means in order to: "Studio per trovare un lavoro migliore" (English often just uses to).`,
        ],
        table: {
          headers: ["Pattern", "Common verbs"],
          rows: [
            ["verb + di", "decidere, cercare, finire, smettere, sperare, dire, chiedere, ricordarsi, dimenticare"],
            ["verb + a", "cominciare, continuare, riuscire, imparare, insegnare, aiutare, provare, andare, venire"],
            ["verb + nothing", "volere, potere, dovere, sapere, preferire, piacere, bisogna, è facile"],
            ["noun + da", "qualcosa da mangiare, niente da dire, molto da fare"],
            ["per (purpose)", "per imparare, per non perdere il treno"],
          ],
        },
        examples: [
          { it: "Preferisco restare a casa stasera.", en: "I'd rather stay home tonight." },
          { it: "Basta chiedere.", en: "You only need to ask." },
          { it: "Vuoi qualcosa da bere?", en: "Would you like something to drink?" },
          { it: "Sono venuta in Italia per studiare arte.", en: "I came to Italy to study art." },
          { it: "È difficile trovare parcheggio in centro.", en: "It's hard to find parking downtown." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ho deciso a partire.",
        right: "Ho deciso di partire.",
        why: `"Decidere" takes "di".`,
      },
      {
        wrong: "Non riesco di capire.",
        right: "Non riesco a capire.",
        why: `"Riuscire" takes "a".`,
      },
      {
        wrong: "Voglio di imparare l'italiano.",
        right: "Voglio imparare l'italiano.",
        why: `Modal verbs take no preposition.`,
      },
      {
        wrong: "Ho molto per fare oggi.",
        right: "Ho molto da fare oggi.",
        why: `Things to be done take "da".`,
      },
      {
        wrong: "Studio molto a trovare un buon lavoro.",
        right: "Studio molto per trovare un buon lavoro.",
        why: `Purpose is "per" + infinitive.`,
      },
      {
        wrong: "È importante di dormire bene.",
        right: "È importante dormire bene.",
        why: `"È" + adjective + infinitive takes no preposition.`,
      },
    ],
    faqs: [
      {
        q: `Is there a rule I can rely on?`,
        a: `Only tendencies: "a" for beginning, continuing, succeeding and movement; "di" for most of the rest. The Drill lessons in this unit give the repetition you need to make them automatic.`,
      },
      {
        q: `Why "andare a" but "per"?`,
        a: `After verbs of movement ("andare", "venire", "uscire", "tornare"), purpose is expressed with "a": "Vado a prendere il pane". After other verbs, use "per".`,
      },
      {
        q: `What about "provare a" and "cercare di"?`,
        a: `Both mean to try. "Provare a" is to try (out) something; "cercare di" is to make an effort to. Often interchangeable: "Prova a chiamarlo", "Cerca di chiamarlo".`,
      },
    ],
    related: ["modal-verbs", "subjunctive-uses", "gerund", "fare-and-lasciare-infinitive"],
    lessons: [
      "b1-verbs-plus-di",
      "b1-verbs-plus-a",
      "b1-verbs-no-preposition",
      "b1-da-per-infinitive",
      "b1-drill-di-a",
      "b1-adjectives-plus-infinitive",
      "b1-drill-prepositions-infinitive-mixed",
      "b1-error-hunt-infinitive-prepositions",
    ],
  },
  {
    slug: "fare-and-lasciare-infinitive",
    title: "Faccio Riparare la Macchina: Fare and Lasciare + Infinitive",
    description:
      "Fare + infinitive for having something done and making someone do something (faccio riparare, mi fa ridere), farsi + infinitive (mi faccio tagliare i capelli), lasciare + infinitive for letting, and where the pronouns go.",
    level: "B1",
    intro: [
      `English says I'm having my car repaired, she made me laugh, let me see. Italian uses one pattern for all of them: "fare" or "lasciare" followed directly by an infinitive. "Faccio riparare la macchina", "Mi ha fatto ridere", "Lasciami vedere".`,
    ],
    sections: [
      {
        heading: `Having something done, making someone do something`,
        body: [
          `"Fare" + infinitive means to have something done by someone else: "Faccio riparare la bici" (I'm having the bike repaired), "Abbiamo fatto costruire una casa". If you name who does it, use "da" (or "a"): "Faccio controllare il contratto da un avvocato".`,
          `It also means to make or let someone do something: "Mi fai ridere" (you make me laugh), "Il film mi ha fatto piangere", "Fammi sapere" (let me know), "Fammi pensare" (let me think). The infinitive comes right after "fare", with nothing in between.`,
        ],
        examples: [
          { it: "Devo far controllare i freni.", en: "I need to have the brakes checked." },
          { it: "Ho fatto tradurre i documenti da un professionista.", en: "I had the documents translated by a professional." },
          { it: "Questa canzone mi fa venire voglia di ballare.", en: "This song makes me want to dance." },
          { it: "Mi hai fatto aspettare un'ora!", en: "You kept me waiting for an hour!" },
          { it: "Fammi vedere le foto!", en: "Let me see the photos!" },
        ],
      },
      {
        heading: `"Farsi" + infinitive`,
        body: [
          `When you have something done to or for yourself, use "farsi": "Mi faccio tagliare i capelli" (I'm getting my hair cut), "Si è fatta prestare la macchina" (she got someone to lend her the car). In compound tenses "farsi" takes "essere", and the participle agrees with the subject.`,
          `"Farsi" + infinitive also appears in common expressions: "farsi vivo" (to get in touch), "farsi sentire" (to make oneself heard), "farsi capire" (to make oneself understood).`,
        ],
        examples: [
          { it: "Sabato mi faccio tagliare i capelli.", en: "On Saturday I'm getting my hair cut." },
          { it: "Si è fatto accompagnare in stazione.", en: "He got someone to take him to the station." },
          { it: "Non si fa vivo da mesi.", en: "He hasn't been in touch for months." },
          { it: "Parlo lentamente per farmi capire.", en: "I speak slowly to make myself understood." },
        ],
      },
      {
        heading: `"Lasciare" + infinitive, and pronouns`,
        body: [
          `"Lasciare" + infinitive means to let, allow: "Lascia stare!" (leave it, forget it), "Lasciami parlare!", "I miei non mi lasciano uscire la sera".`,
          `Pronouns go before "fare" and "lasciare", or attach to them in the informal imperative and the infinitive, never to the second infinitive: "Lo faccio riparare", "Fallo entrare", "Glielo faccio sapere", "Devo farla controllare". When the infinitive has its own object, the person becomes an indirect object: "Gli faccio lavare la macchina" (I have him wash the car).`,
        ],
        examples: [
          { it: "Lascia perdere, non importa.", en: "Forget it, it doesn't matter." },
          { it: "Mi lasci passare, per favore?", en: "Could you let me through, please?" },
          { it: "La macchina? L'ho fatta lavare ieri.", en: "The car? I had it washed yesterday." },
          { it: "Le faccio sapere entro domani.", en: "I'll let you know by tomorrow." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Faccio la macchina riparare.",
        right: "Faccio riparare la macchina.",
        why: `The infinitive comes directly after "fare"; the object follows the infinitive.`,
      },
      {
        wrong: "Ho avuto i capelli tagliati.",
        right: "Mi sono fatto tagliare i capelli.",
        why: `Having something done for yourself is "farsi" + infinitive, not "avere" + participle.`,
      },
      {
        wrong: "Faccio ripararla.",
        right: "La faccio riparare.",
        why: `The pronoun goes with "fare", not with the second infinitive.`,
      },
      {
        wrong: "Mi ho fatto tagliare i capelli.",
        right: "Mi sono fatta tagliare i capelli.",
        why: `"Farsi" takes "essere" in compound tenses.`,
      },
      {
        wrong: "Lasciami a vedere.",
        right: "Lasciami vedere.",
        why: `"Lasciare" + infinitive has no preposition.`,
      },
    ],
    faqs: [
      {
        q: `"Fammi sapere" or "lasciami sapere"?`,
        a: `"Fammi sapere" (let me know) is the fixed expression. "Lasciare" is about allowing; "fare" here is about causing.`,
      },
      {
        q: `Is "far" the same as "fare"?`,
        a: `Yes. Before an infinitive "fare" often drops its final "e": "far vedere", "far riparare", "farsi fare".`,
      },
      {
        q: `What does "Lascia stare" mean?`,
        a: `Leave it, never mind, don't bother. "Lascia perdere" is close: forget it. Both are extremely common.`,
      },
    ],
    related: ["verbs-with-prepositions", "pronoun-position", "passive"],
    lessons: [
      "b1-fare-infinitive",
      "b1-making-people-do",
      "b1-farsi-infinitive",
      "b1-lasciare-infinitive",
      "b1-drill-fare-lasciare",
      "b1-drill-fare-pronouns",
      "b1-error-hunt-fare",
      "b1-dialogue-lab-hairdresser",
    ],
  },
  {
    slug: "passive",
    title: "È Stato Costruito, Viene Venduto, Va Fatto: The Passive",
    description:
      "The three Italian passives (essere, venire and andare + participle), agreement, da for the agent, va fatto for must be done, and the si passivante (si vendono case) used on signs and in everyday speech.",
    level: "B1",
    intro: [
      `In a passive sentence the subject receives the action: "La casa è stata venduta" (the house has been sold). Italian has three passive helpers ("essere", "venire" and "andare") plus a very common alternative, the "si passivante": "Qui si parla inglese" (English is spoken here).`,
      `In all of them the participle agrees with the subject, like an adjective.`,
    ],
    sections: [
      {
        heading: `"Essere" and "venire" + participle`,
        body: [
          `The basic passive is "essere" in any tense + past participle: "Il ponte è costruito in pietra", "Il museo è stato chiuso", "Le lettere saranno spedite domani". The agent is introduced by "da": "Il libro è stato scritto da una giornalista".`,
          `"Venire" can replace "essere" in simple tenses (not compound ones) and stresses the action rather than the state: "La porta viene chiusa alle dieci" (is closed, by someone, at ten) vs "La porta è chiusa" (is closed, as a state). It is common in instructions and news: "I biglietti vengono controllati sul treno."`,
        ],
        table: {
          headers: ["Tense", "Essere", "Venire"],
          rows: [
            ["present", "è venduto", "viene venduto"],
            ["imperfetto", "era venduto", "veniva venduto"],
            ["future", "sarà venduto", "verrà venduto"],
            ["passato prossimo", "è stato venduto", "(not used)"],
          ],
        },
        examples: [
          { it: "Il Colosseo fu costruito nel primo secolo.", en: "The Colosseum was built in the first century." },
          { it: "La riunione è stata spostata a giovedì.", en: "The meeting has been moved to Thursday." },
          { it: "La pasta viene cotta in acqua salata.", en: "Pasta is cooked in salted water." },
          { it: "I vincitori verranno annunciati domani.", en: "The winners will be announced tomorrow." },
          { it: "Il quadro è stato dipinto da un artista sconosciuto.", en: "The painting was painted by an unknown artist." },
        ],
      },
      {
        heading: `"Andare" + participle: must be done`,
        body: [
          `"Andare" + participle means must be done, has to be done: "Il modulo va compilato in stampatello" (the form must be filled in in block capitals), "Questo vino va servito fresco". The negative means mustn't be: "Non va dimenticato".`,
          `With verbs of losing and destroying, "andare" means simply got (lost): "Il pacco è andato perso" (the parcel got lost), "Molti documenti andarono distrutti".`,
        ],
        examples: [
          { it: "La ricevuta va conservata.", en: "The receipt must be kept." },
          { it: "Le medicine vanno tenute lontano dai bambini.", en: "Medicines must be kept away from children." },
          { it: "Questo problema va risolto subito.", en: "This problem has to be solved right away." },
          { it: "La mia valigia è andata persa.", en: "My suitcase got lost." },
        ],
      },
      {
        heading: `The "si passivante": "si vendono case"`,
        body: [
          `"Si" + verb in the third person is the everyday passive when no agent is named: "In Italia si beve molto caffè" (a lot of coffee is drunk in Italy), "Si cercano camerieri" (waiters wanted). The verb agrees with the noun: singular with a singular noun, plural with a plural: "Si vende casa", "Si vendono case".`,
          `In compound tenses it takes "essere" and the participle agrees: "Si è venduta la casa", "Si sono spesi troppi soldi". It looks like the impersonal "si" (see that guide); the difference is that here there is a noun that acts as the subject.`,
        ],
        examples: [
          { it: "Qui si parla italiano e inglese.", en: "Italian and English are spoken here." },
          { it: "Dal terrazzo si vedono le montagne.", en: "You can see the mountains from the terrace." },
          { it: "Affittasi appartamento in centro.", en: "Apartment for rent downtown." },
          { it: "Come si scrive il tuo nome?", en: "How do you spell your name?" },
          { it: "Si sono raccolti più di mille euro.", en: "More than a thousand euros were raised." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "La casa è stata venduto.",
        right: "La casa è stata venduta.",
        why: `Both participles agree with the subject in the passive: "stata venduta".`,
      },
      {
        wrong: "Il libro è stato scritto di Calvino.",
        right: "Il libro è stato scritto da Calvino.",
        why: `The agent is introduced by "da".`,
      },
      {
        wrong: "Si vende biglietti qui.",
        right: "Si vendono biglietti qui.",
        why: `In the si passivante the verb agrees with the noun: plural.`,
      },
      {
        wrong: "La lettera è venuta spedita ieri.",
        right: "La lettera è stata spedita ieri.",
        why: `"Venire" is only used in simple tenses; compound tenses use "essere".`,
      },
      {
        wrong: "Il modulo va compilare.",
        right: "Il modulo va compilato.",
        why: `"Andare" takes the past participle, which agrees with the subject.`,
      },
    ],
    faqs: [
      {
        q: `Is the passive used more in Italian than in English?`,
        a: `The "essere" passive is about as common; the "si" form is much more common, and replaces many English passives and many English you or people sentences.`,
      },
      {
        q: `What is "affittasi" or "vendesi"?`,
        a: `The si passivante written as one word on signs: "affittasi" (for rent), "vendesi" (for sale), "cercasi" (wanted). Strictly the verb should agree ("vendonsi"), but signs usually keep the singular.`,
      },
      {
        q: `Can every verb be passive?`,
        a: `Only verbs with a direct object. "Telefonare a qualcuno" can't become passive in Italian; use "si" or an active sentence: "Mi hanno telefonato" (I was called).`,
      },
    ],
    related: ["impersonal-si", "fare-and-lasciare-infinitive", "passato-prossimo"],
    lessons: [
      "b1-passive-essere",
      "b1-passive-venire",
      "b1-passive-andare",
      "b1-si-passivante",
      "b1-drill-passive-forms",
      "b1-drill-si-passivante",
      "b1-contrast-passive-types",
      "b1-error-hunt-passive",
      "b1-reading-lab-news-passive",
    ],
  },
  {
    slug: "impersonal-si",
    title: "Si Mangia Bene, Si È Stanchi, Ci Si Alza: The Impersonal Si",
    description:
      "The impersonal si for people in general (si mangia bene qui), plural adjectives after si è (si è stanchi), ci si with reflexive verbs, essere in the past (si è mangiato bene), and si impersonale vs si passivante.",
    level: "B1",
    intro: [
      `"Si" + third-person verb is how Italian says one, you, people, we in general: "In Italia si cena tardi" (in Italy people have dinner late), "Come si dice?" (how do you say it?), "Non si fuma qui" (no smoking here). It is the everyday way to make general statements, and Italians use it constantly.`,
    ],
    sections: [
      {
        heading: `The basic pattern`,
        body: [
          `"Si" + verb in the third person singular, with no subject: "Si vive bene a Bologna", "Si parte alle otto", "Si dice che..." (they say that...). In Tuscan and colloquial speech "si" often replaces "noi": "Noi si va al mare" (we're going to the beach); recognise it, but use "andiamo".`,
          `When the verb has a plural object, it becomes a si passivante and agrees: "Si mangia la pizza", "Si mangiano gli spaghetti". With no noun, the verb stays singular.`,
        ],
        examples: [
          { it: "Da qui come si arriva al centro?", en: "How do you get to the center from here?" },
          { it: "In questo ristorante si mangia benissimo.", en: "You eat really well in this restaurant." },
          { it: "Si dice che il nuovo direttore sia molto severo.", en: "People say the new director is very strict." },
          { it: "In estate si dorme poco.", en: "In summer people sleep little." },
        ],
      },
      {
        heading: `"Si è stanchi" and "ci si alza"`,
        body: [
          `With "essere" + an adjective or a noun, the adjective is masculine plural, because it refers to people in general: "Quando si è giovani, si è ottimisti" (when you're young, you're optimistic), "Si è più felici in vacanza".`,
          `A reflexive verb already has a "si", and Italian doesn't say "si si". The impersonal "si" becomes "ci si": "Ci si alza presto in campagna" (people get up early in the country), "Ci si vede domani" (see you tomorrow), "Ci si abitua a tutto" (you get used to everything).`,
        ],
        examples: [
          { it: "Dopo una giornata così, si è sempre stanchi.", en: "After a day like that, you're always tired." },
          { it: "Si diventa più pazienti con l'età.", en: "People become more patient with age." },
          { it: "In vacanza ci si rilassa.", en: "On vacation you relax." },
          { it: "Ci si vede alle otto davanti al cinema!", en: "See you at eight in front of the movie theater!" },
        ],
      },
      {
        heading: `In the past`,
        body: [
          `Compound tenses of the impersonal "si" always take "essere": "Si è mangiato bene" (we ate well), "Si è parlato di politica". If the verb normally takes "essere", the participle is masculine plural: "Si è arrivati tardi", "Ci si è divertiti". If it normally takes "avere", it stays masculine singular: "Si è dormito poco".`,
        ],
        table: {
          headers: ["Verb normally takes", "Example", "Participle"],
          rows: [
            ["avere", "Si è mangiato bene.", "-o"],
            ["essere", "Si è partiti presto.", "-i"],
            ["reflexive", "Ci si è divertiti molto.", "-i"],
            ["avere + plural object", "Si sono mangiate tre pizze.", "agrees with the object"],
          ],
        },
        examples: [
          { it: "Ieri sera si è parlato solo di calcio.", en: "Last night all anyone talked about was football." },
          { it: "Si è arrivati a un accordo.", en: "An agreement was reached." },
          { it: "Alla festa ci si è divertiti un sacco.", en: "We had a great time at the party." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Si si alza presto.",
        right: "Ci si alza presto.",
        why: `With a reflexive verb, the impersonal "si" becomes "ci si".`,
      },
      {
        wrong: "Quando si è stanco, si dorme male.",
        right: "Quando si è stanchi, si dorme male.",
        why: `Adjectives after impersonal "si è" are masculine plural.`,
      },
      {
        wrong: "Si ha mangiato bene.",
        right: "Si è mangiato bene.",
        why: `The impersonal "si" always takes "essere" in compound tenses.`,
      },
      {
        wrong: "Si mangia molti spaghetti.",
        right: "Si mangiano molti spaghetti.",
        why: `With a plural noun the verb agrees (si passivante).`,
      },
      {
        wrong: "Uno mangia bene qui.",
        right: "Si mangia bene qui.",
        why: `"Uno" exists in speech, but "si" is the normal Italian way to say you or people in general.`,
      },
    ],
    faqs: [
      {
        q: `How do I translate impersonal "si"?`,
        a: `With you, one, people, we or a passive, whichever sounds natural: "Qui si lavora molto" can be people work hard here, we work hard here or a lot of work gets done here.`,
      },
      {
        q: `Where do other pronouns go?`,
        a: `Before "si": "Lo si fa" (it is done), "Gli si dice" (he is told). But "ne" goes after and turns "si" into "se": "Se ne parla molto" (people talk about it a lot).`,
      },
      {
        q: `Is "Ci si vede" the same as "Ci vediamo"?`,
        a: `Yes, both mean see you. "Ci si vede" is a bit more casual.`,
      },
    ],
    related: ["passive", "reflexive-verbs", "essere-or-avere"],
    lessons: [
      "b1-impersonal-si",
      "b1-si-plural-adjectives",
      "b1-ci-si",
      "b1-impersonal-past",
      "b1-drill-impersonal-si",
      "b1-contrast-si-passivante-impersonale",
      "b1-drill-si-mixed",
      "b1-error-hunt-si",
      "b1-reading-lab-customs",
    ],
  },
  {
    slug: "relative-pronouns-advanced",
    title: "Il Quale, Il Cui, Quello Che, Chi: Relative Pronouns in Full",
    description:
      "The formal relative il quale (della quale, con i quali), whose with il cui and la cui, what with quello che and ciò che, chi meaning whoever, and the sentence-level il che.",
    level: "B1",
    intro: [
      `You already know "che", "cui", "dove" and "chi". This guide adds the forms you meet in more careful Italian: "il quale" (who, which), "il cui" (whose), "quello che" and "ciò che" (what), and "il che" (which, referring to a whole sentence).`,
    ],
    sections: [
      {
        heading: `"Il quale", "la quale", "i quali", "le quali"`,
        body: [
          `"Il quale" agrees with the noun it refers to and takes the article. It can replace "che" as a subject, mainly in formal writing or to avoid ambiguity: "Ho parlato con la sorella di Marco, la quale lavora a Milano" (the sister, not Marco). After a preposition it replaces "cui", with an articulated preposition: "il collega con il quale lavoro", "la ditta per la quale lavoro", "i libri dei quali ti ho parlato".`,
          `In everyday speech "che" and "cui" are much more common; "il quale" sounds formal. Never use it as a direct object: "il libro che ho letto", not "il libro il quale ho letto".`,
        ],
        examples: [
          { it: "La persona alla quale devi rivolgerti è il direttore.", en: "The person you need to contact is the director." },
          { it: "Ho conosciuto il fratello di Laura, il quale vive a Parigi.", en: "I met Laura's brother, who lives in Paris." },
          { it: "Sono i motivi per i quali ho rinunciato.", en: "Those are the reasons why I gave up." },
          { it: "È un progetto al quale lavoriamo da anni.", en: "It's a project we've been working on for years." },
        ],
      },
      {
        heading: `Whose: "il cui", "la cui"`,
        body: [
          `Whose is "cui" between the article and the noun owned: "lo scrittore il cui romanzo ho letto" (the writer whose novel I read), "la signora la cui figlia studia con me", "un'azienda i cui prodotti sono famosi". The article agrees with the thing owned, not with the owner.`,
        ],
        examples: [
          { it: "È un regista i cui film hanno vinto molti premi.", en: "He's a director whose films have won many awards." },
          { it: "Ho un'amica la cui madre è francese.", en: "I have a friend whose mother is French." },
          { it: "È un paese il cui nome non ricordo.", en: "It's a village whose name I can't remember." },
        ],
      },
      {
        heading: `What: "quello che", "ciò che"; and "il che"`,
        body: [
          `What meaning the thing that is "quello che" (everyday) or "ciò che" (more formal): "Quello che dici è vero", "Non capisco ciò che vuole", "Fai quello che vuoi". "Tutto quello che" is everything that: "Grazie per tutto quello che hai fatto".`,
          `"Il che" refers back to a whole sentence, like English which in 'he arrived late, which annoyed me': "È arrivato in ritardo, il che mi ha dato fastidio." In speech, "e questo" or "cosa che" are more common.`,
        ],
        examples: [
          { it: "Quello che mi piace di Napoli è la gente.", en: "What I like about Naples is the people." },
          { it: "Ciò che conta è la salute.", en: "What matters is your health." },
          { it: "Ti ho detto tutto quello che so.", en: "I've told you everything I know." },
          { it: "Ha smesso di piovere, il che ci permette di uscire.", en: "It's stopped raining, which means we can go out." },
        ],
      },
      {
        heading: `"Chi": whoever, those who`,
        body: [
          `"Chi" contains both the person and the relative: "Chi ha finito può uscire" (those who have finished can leave), "C'è chi dice che..." (some people say that...), "Ringrazio chi mi ha aiutato". It always takes a singular verb, and it can't follow a noun: "la persona che", never "la persona chi".`,
        ],
        examples: [
          { it: "Chi trova un amico trova un tesoro.", en: "Whoever finds a friend finds a treasure." },
          { it: "Non tutti sono d'accordo: c'è chi preferisce aspettare.", en: "Not everyone agrees: some would rather wait." },
          { it: "Daremo il premio a chi risponde per primo.", en: "We'll give the prize to whoever answers first." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Lo scrittore chi ha vinto il premio",
        right: "Lo scrittore che ha vinto il premio",
        why: `After a noun use "che"; "chi" already contains the person.`,
      },
      {
        wrong: "La ragazza di cui la madre è medico",
        right: "La ragazza la cui madre è medico",
        why: `Whose is "il cui", "la cui", agreeing with the thing owned.`,
      },
      {
        wrong: "Che dici è vero.",
        right: "Quello che dici è vero.",
        why: `What meaning the thing that is "quello che" or "ciò che".`,
      },
      {
        wrong: "La ditta per quale lavoro",
        right: "La ditta per la quale lavoro",
        why: `"Il quale" always takes the article.`,
      },
      {
        wrong: "Il film il quale ho visto",
        right: "Il film che ho visto",
        why: `"Il quale" is not used as a direct object.`,
      },
    ],
    faqs: [
      {
        q: `Should I use "cui" or "il quale" after prepositions?`,
        a: `Both are correct. "Cui" is shorter and more common ("con cui", "per cui"); "il quale" is more formal and shows gender and number, which helps in long written sentences.`,
      },
      {
        q: `What does "per cui" mean at the start of a clause?`,
        a: `In speech it often means so, therefore: "Pioveva, per cui siamo rimasti a casa."`,
      },
      {
        q: `"Ciò che" or "quello che"?`,
        a: `They mean the same. "Quello che" is the everyday choice; "ciò che" sounds more formal or written.`,
      },
    ],
    related: ["relative-pronouns", "subjunctive-uses"],
    lessons: [
      "b1-il-quale",
      "b1-il-cui",
      "b1-quello-che-cio-che",
      "b1-chi-in-full",
      "b1-drill-relatives-full",
      "b1-drill-quello-che",
      "b1-error-hunt-relatives-full",
      "b1-reading-lab-art",
    ],
  },
  {
    slug: "reported-speech",
    title: "Ha Detto Che: Reported Speech",
    description:
      "How to report what someone said, asked or ordered: tense changes after a past reporting verb (è stanco becomes era stanco, verrò becomes sarebbe venuto), pronouns, time and place words, se for questions and di + infinitive for commands.",
    level: "B1",
    intro: [
      `Reported speech (discorso indiretto) turns «Sono stanco» into "Ha detto che era stanco". As in English, pronouns and possessives change to fit the new speaker, and when the reporting verb is in the past, the tenses shift back.`,
    ],
    sections: [
      {
        heading: `Reporting statements`,
        body: [
          `With a reporting verb in the present ("dice", "scrive", "racconta"), the tenses stay as they were: «Sono stanco» becomes "Dice che è stanco". With a past reporting verb ("ha detto", "disse", "diceva"), they shift: present to imperfetto, passato prossimo to trapassato, future to past conditional.`,
          `The imperfetto, the trapassato and the conditional don't change further, except that the present conditional becomes the past conditional: «Verrei volentieri» becomes "Ha detto che sarebbe venuto volentieri".`,
        ],
        table: {
          headers: ["Direct speech", "After ha detto che ..."],
          rows: [
            ["present: «Sono stanco.»", "imperfetto: era stanco"],
            ["passato prossimo: «Ho perso le chiavi.»", "trapassato: aveva perso le chiavi"],
            ["future: «Arriverò tardi.»", "past conditional: sarebbe arrivato tardi"],
            ["imperfetto: «Ero a casa.»", "imperfetto: era a casa"],
            ["conditional: «Vorrei un caffè.»", "past conditional: avrebbe voluto un caffè"],
          ],
        },
        examples: [
          { it: "Giulia dice che non può venire.", en: "Giulia says she can't come." },
          { it: "Giulia ha detto che non poteva venire.", en: "Giulia said she couldn't come." },
          { it: "Mi ha scritto che aveva trovato casa.", en: "He wrote to me that he had found a place to live." },
          { it: "Hanno detto che sarebbero arrivati verso le nove.", en: "They said they'd arrive around nine." },
        ],
      },
      {
        heading: `Pronouns, time and place`,
        body: [
          `First and second persons change to fit who is reporting: «Ti chiamo io» becomes "Ha detto che mi avrebbe chiamato lui". Time and place words shift when the moment and place are different: "oggi" becomes "quel giorno", "domani" "il giorno dopo", "ieri" "il giorno prima", "fra una settimana" "una settimana dopo", "qui" "lì", "questo" "quello".`,
        ],
        table: {
          headers: ["Direct", "Reported"],
          rows: [
            ["oggi", "quel giorno"],
            ["domani", "il giorno dopo, l'indomani"],
            ["ieri", "il giorno prima"],
            ["la settimana prossima", "la settimana dopo"],
            ["fa", "prima"],
            ["qui, qua", "lì, là"],
            ["questo", "quello"],
            ["venire", "andare"],
          ],
        },
        examples: [
          { it: "Mi ha detto che il giorno dopo sarebbe partito per Roma.", en: "He told me he'd be leaving for Rome the next day." },
          { it: "Ha spiegato che due anni prima abitava in quella casa.", en: "She explained that two years earlier she'd lived in that house." },
          { it: "Ha detto che quel libro non gli piaceva.", en: "He said he didn't like that book." },
        ],
      },
      {
        heading: `Questions and commands`,
        body: [
          `Yes-no questions are reported with "se" (whether), other questions with their question word, and the same tense changes: «Sei libero?» becomes "Mi ha chiesto se ero libero"; «Dove abiti?» becomes "Mi ha chiesto dove abitavo". There is no inversion and no question mark.`,
          `Commands become "di" + infinitive: «Aspetta!» becomes "Mi ha detto di aspettare"; «Non toccate niente!» becomes "Ci ha detto di non toccare niente". With "chiedere" and "pregare", requests work the same way: "Le ho chiesto di chiudere la finestra".`,
        ],
        examples: [
          { it: "Mi ha chiesto se volevo un passaggio.", en: "She asked me if I wanted a ride." },
          { it: "Gli ho domandato quanto costava il biglietto.", en: "I asked him how much the ticket cost." },
          { it: "Il medico mi ha detto di riposare.", en: "The doctor told me to rest." },
          { it: "Ci hanno chiesto di non fare rumore.", en: "They asked us not to make noise." },
        ],
      },
    ],
    mistakes: [
      {
        wrong: "Ha detto che è stanco ieri.",
        right: "Ieri ha detto che era stanco.",
        why: `After a past reporting verb, the present becomes the imperfetto.`,
      },
      {
        wrong: "Ha detto che verrà domani. (said last week)",
        right: "Ha detto che sarebbe venuto il giorno dopo.",
        why: `The future becomes the past conditional, and "domani" becomes "il giorno dopo".`,
      },
      {
        wrong: "Mi ha chiesto dove abito io?",
        right: "Mi ha chiesto dove abitavo.",
        why: `Reported questions are statements: no question mark, and the tense shifts.`,
      },
      {
        wrong: "Mi ha detto che aspetto.",
        right: "Mi ha detto di aspettare.",
        why: `A reported command is "di" + infinitive.`,
      },
      {
        wrong: "Mi ha chiesto che ero libero.",
        right: "Mi ha chiesto se ero libero.",
        why: `Yes-no questions are reported with "se".`,
      },
    ],
    faqs: [
      {
        q: `Do I always have to shift the tenses?`,
        a: `In careful Italian, yes, after a past reporting verb. In speech, if something is still true, people often keep the present: "Mi ha detto che è sposato" (and he still is). Shifting is never wrong.`,
      },
      {
        q: `When does the subjunctive appear?`,
        a: `In reported questions, formal Italian may use it: "Mi ha chiesto dove abitassi". And after verbs of opinion, as always: "Ha detto che pensava che fosse tardi". These are covered at the Upper-intermediate level.`,
      },
      {
        q: `What are «» in Italian texts?`,
        a: `Guillemets, the usual Italian quotation marks for direct speech in books and newspapers. Dialogue may also use dashes or "double quotes".`,
      },
    ],
    related: ["past-conditional", "trapassato-prossimo", "imperfetto", "verbs-with-prepositions"],
    lessons: [
      "b1-reported-statements-present",
      "b1-reported-statements-past",
      "b1-reported-time-place",
      "b1-reported-questions",
      "b1-reported-commands",
      "b1-drill-reported-statements",
      "b1-drill-reported-questions-commands",
      "b1-error-hunt-reported",
      "b1-dialogue-lab-passing-on-messages",
      "b1-mission-meeting-notes",
    ],
  },
];
