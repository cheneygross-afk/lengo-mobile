// Synced from cheneygross-afk/lengo:src/lib/lessons/it-a2-u15.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian A2 Unit 15: Ci. Ci for places, ci with pensare / credere /
// riuscire, ci vuole and metterci, ce l'ho, and where ci goes.
// Conventions: docs/italian-course/authoring.md.
export const IT_A2_U15: Lesson[] = [
  {
    slug: "a2-ci-places",
    level: "IT-A2",
    number: 1,
    title: "Ci for Places",
    summary: "Use ci for a place already mentioned: ci vado ogni estate, ci sono stato due volte, vuoi venirci?",
    duration: "15 min",
    sections: [
      {
        heading: "Ci = there",
        body: [
          "Once a place has been mentioned, Italian replaces it with \"ci\" (there): \"Vai spesso a Napoli?\" \"Sì, ci vado ogni estate\" (yes, I go there every summer). English often drops there (I go every summer), but Italian needs \"ci\": \"vado ogni estate\" on its own sounds incomplete.",
          "\"Ci\" replaces any phrase with \"a\", \"in\" or \"da\" + place: \"a casa\", \"in Sicilia\", \"dal medico\", \"al cinema\". It goes before the conjugated verb, like the object pronouns: \"ci vado\", \"non ci vado\", \"ci andiamo insieme?\". You already know it in \"c'è\" (there is): the same little word.",
        ],
        examples: [
          { es: "Vai spesso a Napoli? Sì, ci vado ogni estate.", en: "Do you often go to Naples? Yes, I go there every summer." },
          { es: "Sei mai stata in Sicilia? No, non ci sono mai stata.", en: "Have you ever been to Sicily? No, I've never been there." },
          { es: "Andate al cinema stasera? Sì, ci andiamo alle nove.", en: "Are you going to the cinema tonight? Yes, we're going at nine." },
          { es: "Quando torni dal dentista? Ci torno lunedì.", en: "When are you going back to the dentist? I'm going back on Monday." },
          { es: "Abiti ancora a Bari? Sì, ci abito da dieci anni.", en: "Do you still live in Bari? Yes, I've lived there for ten years." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you often go to Naples? Yes, I go there every summer.", answer: "Vai spesso a Napoli? Sì, ci vado ogni estate.", altAnswers: ["Vai spesso a Napoli? Sì, ci vado tutte le estati."], explanation: "\"Ci\" = there, before \"vado\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The cinema? [We're going there] at nine.", sentence: "Il cinema? ___ alle nove.", answer: "Ci andiamo", explanation: "\"Ci\" before the verb." },
          { type: "multiple-choice", question: "\"Vieni in palestra domani?\" How do you say yes, I'm coming?", options: ["Sì, ci vengo.", "Sì, vengo ci.", "Sì, la vengo.", "Sì, ne vengo."], correctIndex: 0, explanation: "\"Ci\" replaces \"in palestra\", before the verb." },
        ],
      },
      {
        heading: "Ci in the past",
        body: [
          "In the passato prossimo \"ci\" goes before the auxiliary: \"Ci sono stato due volte\" (I've been there twice), \"Ci siamo andati in treno\" (we went there by train). Movement verbs keep \"essere\" and the participle agrees with the subject, as usual.",
          "Before \"è\" and \"era\", \"ci\" becomes \"c'\": \"Marco c'è andato ieri\" (Marco went there yesterday), \"C'ero anch'io\" (I was there too).",
        ],
        examples: [
          { es: "Sono stato a Venezia. Ci sono stato due volte.", en: "I've been to Venice. I've been there twice." },
          { es: "Ci siamo andati in treno.", en: "We went there by train." },
          { es: "Marco c'è andato ieri.", en: "Marco went there yesterday." },
          { es: "Alla festa? C'ero anch'io!", en: "At the party? I was there too!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We went there by train.", answer: "Ci siamo andati in treno.", altAnswers: ["Ci siamo andate in treno.", "Noi ci siamo andati in treno."], explanation: "\"Ci\" before \"siamo\"; \"andati\" agrees." },
          { type: "listen-choose", audio: "Alla festa? C'ero anch'io!", question: "What does the speaker say?", options: ["I was there too!", "I'm going there too!", "I wasn't there!", "There was someone else."], correctIndex: 0, explanation: "\"C'ero\" = \"ci\" + \"ero\": I was there." },
        ],
      },
      {
        heading: "Ci with infinitives and commands",
        body: [
          "With a modal verb + infinitive, \"ci\" can go before the modal or attach to the infinitive: \"Ci vuoi venire?\" or \"Vuoi venirci?\" (do you want to come?). Both are standard, as with \"lo\" and \"la\".",
          "With a \"tu\" command it attaches, and after \"va'\" it doubles: \"Vacci!\" (go there!). With Lei it goes before: \"Ci vada domani\".",
        ],
        examples: [
          { es: "Vuoi venirci con me?", en: "Do you want to come with me?" },
          { es: "Ci devo andare domani.", en: "I have to go there tomorrow." },
          { es: "Il museo è bellissimo: vacci!", en: "The museum is wonderful: go!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have to go there tomorrow.", answer: "Ci devo andare domani.", altAnswers: ["Devo andarci domani.", "Domani ci devo andare.", "Domani devo andarci."], explanation: "\"Ci\" before the modal or attached to the infinitive." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The museum is wonderful: [go there]! (to a friend)", sentence: "Il museo è bellissimo: ___!", answer: "vacci", explanation: "\"Va'\" + \"ci\" doubles." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you ever been to Sicily? No, I've never been there. (to a friend)", answer: "Sei mai stato in Sicilia? No, non ci sono mai stato.", altAnswers: ["Sei mai stata in Sicilia? No, non ci sono mai stata.", "Sei mai stato in Sicilia? No, non ci sono mai stata.", "Sei mai stata in Sicilia? No, non ci sono mai stato."], explanation: "\"Non ci sono mai stato\": \"ci\" before the auxiliary." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've been there twice.", answer: "Ci sono stato due volte.", altAnswers: ["Ci sono stata due volte."], explanation: "\"Ci\" + \"sono stato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you want to come with me? (to a friend)", answer: "Vuoi venirci con me?", altAnswers: ["Ci vuoi venire con me?", "Vuoi venire con me?"], explanation: "Two places for \"ci\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Marco went there yesterday.", answer: "Marco c'è andato ieri.", altAnswers: ["Ieri Marco c'è andato."], explanation: "\"Ci\" + \"è\" → \"c'è\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The gym? I go there three times a week.", answer: "La palestra? Ci vado tre volte alla settimana.", altAnswers: ["In palestra? Ci vado tre volte alla settimana.", "La palestra? Ci vado tre volte a settimana."], explanation: "\"Ci vado\" = I go there." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Do you still live in Bari? Yes, [I've lived there] for ten years.", sentence: "Abiti ancora a Bari? Sì, ___ da dieci anni.", answer: "ci abito", explanation: "\"Ci\" + present for a situation still going on." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The supermarket? [I'm not going there] today.", sentence: "Il supermercato? Oggi ___.", answer: "non ci vado", explanation: "\"Non\" + \"ci\" + verb." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "When are you going back to the dentist? [I'm going back] on Monday.", sentence: "Quando torni dal dentista? ___ lunedì.", answer: "Ci torno", explanation: "\"Ci\" replaces \"dal dentista\"." },
      { type: "word-order", prompt: "Put the words in order to say: No, I've never been there.", words: ["No,", "non", "ci", "sono", "mai", "stato."], translation: "No, I've never been there.", explanation: "\"Non ci sono mai stato\"." },
      { type: "multiple-choice", question: "\"Siete andati a Firenze?\" Which answer is right?", options: ["Sì, ci siamo andati a maggio.", "Sì, siamo ci andati a maggio.", "Sì, ci abbiamo andati a maggio.", "Sì, l'abbiamo andati a maggio."], correctIndex: 0, explanation: "\"Ci\" before \"essere\"." },
      { type: "dictation", audio: "Ci vado ogni estate con i miei.", explanation: "\"Ci vado\"; \"i miei\" = my parents." },
      { type: "speak", text: "Roma? Ci sono stato tre volte e ci torno a maggio!", prompt: "Say it in Italian: Rome? I've been there three times and I'm going back in May!", tip: "Link \"ci\" to the verb: ci-SO-no, ci-TOR-no.", explanation: "\"Ci\" in the past and the present." },
    ],
  },
  {
    slug: "a2-ci-pensare-credere",
    level: "IT-A2",
    number: 2,
    title: "Ci with Pensare, Credere, Riuscire",
    summary: "Use ci penso io, non ci credo, non ci riesco, ci provo and che c'entra?",
    duration: "15 min",
    sections: [
      {
        heading: "Ci = about it, in it",
        body: [
          "\"Ci\" also replaces \"a\" + a thing or idea after verbs that take \"a\": \"pensare a\" (to think about), \"credere a\" (to believe in), \"riuscire a\" (to manage to), \"provare a\" (to try to). \"Pensi al viaggio?\" \"Sì, ci penso sempre\" (yes, I think about it all the time).",
          "Some of these have become everyday phrases: \"Ci penso io\" (I'll take care of it, leave it to me), \"Ci pensi tu?\" (will you deal with it?), \"Non ci credo!\" (I don't believe it!), \"Non ci riesco\" (I can't manage it), \"Ci provo\" (I'll give it a go).",
        ],
        examples: [
          { es: "La cena? Ci penso io.", en: "Dinner? Leave it to me." },
          { es: "Ci pensi tu a prenotare?", en: "Will you take care of booking?" },
          { es: "Hai vinto? Non ci credo!", en: "You won? I don't believe it!" },
          { es: "Apro il barattolo... non ci riesco!", en: "I'm opening the jar... I can't do it!" },
          { es: "È difficile, ma ci provo.", en: "It's hard, but I'll give it a go." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Dinner? Leave it to me.", answer: "La cena? Ci penso io.", explanation: "\"Ci penso io\" = I'll take care of it." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You won? I don't believe it! (to a friend)", answer: "Hai vinto? Non ci credo!", explanation: "\"Non ci credo\" = I don't believe it." },
          { type: "listen-choose", audio: "È difficile, ma ci provo.", question: "What does the speaker mean?", options: ["It's hard, but I'll give it a go.", "It's hard, so I'll stop.", "It's hard, I tried it.", "It's easy, I'll do it."], correctIndex: 0, explanation: "\"Ci provo\" = I'll try." },
        ],
      },
      {
        heading: "Pensarci in the past and with modals",
        body: [
          "The rules of position are the same as for places: \"Ci ho pensato\" (I've thought about it), \"Non ci sono riuscito\" (I didn't manage it, \"riuscire\" takes \"essere\"), \"Ci devo pensare\" / \"Devo pensarci\" (I have to think about it).",
          "\"Ci penso\" is not the same as an opinion: \"Che ne pensi?\" (what do you think of it?) uses \"ne\", which comes in Unit 16.",
        ],
        examples: [
          { es: "Ci ho pensato tutta la notte.", en: "I thought about it all night." },
          { es: "Ho provato ad aprire la porta, ma non ci sono riuscita.", en: "I tried to open the door, but I couldn't." },
          { es: "Devo pensarci un po'.", en: "I need to think about it a bit." },
          { es: "Ci hai provato?", en: "Did you try?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I need to think about it a bit.", answer: "Devo pensarci un po'.", altAnswers: ["Ci devo pensare un po'."], explanation: "\"Ci\" attached or before \"devo\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "I tried, but [I didn't manage it].", sentence: "Ho provato, ma ___.", answer: "non ci sono riuscito", altAnswers: ["non ci sono riuscita"], explanation: "\"Riuscire\" takes \"essere\"." },
        ],
      },
      {
        heading: "Che c'entra?",
        body: [
          "\"Entrarci\" means to have to do with something: \"Che c'entra?\" (what's that got to do with it?), \"Io non c'entro\" (it's nothing to do with me). It's a fixed expression worth knowing as a chunk.",
        ],
        examples: [
          { es: "Che c'entra il calcio adesso?", en: "What's football got to do with it?" },
          { es: "Io non c'entro, chiedi a Luca!", en: "It's nothing to do with me, ask Luca!" },
          { es: "Il prezzo non c'entra.", en: "The price has nothing to do with it." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's nothing to do with me!", answer: "Io non c'entro!", altAnswers: ["Non c'entro!", "Non c'entro niente!", "Io non c'entro niente!"], explanation: "\"Entrarci\": \"non c'entro\"." },
          { type: "multiple-choice", question: "Your friend mentions the weather in an argument about money. What do you say?", options: ["Che c'entra?", "Ci penso io.", "Ci provo.", "Ci credo."], correctIndex: 0, explanation: "\"Che c'entra?\" = what's that got to do with it?" },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Will you take care of booking? (to a friend)", answer: "Ci pensi tu a prenotare?", altAnswers: ["Pensi tu a prenotare?"], explanation: "\"Pensarci\" = to see to something." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I can't do it!", answer: "Non ci riesco!", altAnswers: ["Io non ci riesco!"], explanation: "\"Riuscirci\" = to manage." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I thought about it all night.", answer: "Ci ho pensato tutta la notte.", explanation: "\"Ci\" before \"ho\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you try? (to a friend)", answer: "Ci hai provato?", explanation: "\"Provarci\" = to try." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The price has nothing to do with it.", answer: "Il prezzo non c'entra.", altAnswers: ["Il prezzo non c'entra niente."], explanation: "\"C'entra\" = has to do with it." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you believe in ghosts? No, I don't believe in them.", answer: "Credi ai fantasmi? No, non ci credo.", altAnswers: ["Tu credi ai fantasmi? No, non ci credo."], explanation: "\"Credere a\" → \"ci credo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's hard, but [I'll give it a go].", sentence: "È difficile, ma ___.", answer: "ci provo", explanation: "\"Ci provo\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Don't worry, [I'll see to it].", sentence: "Non preoccuparti, ___.", answer: "ci penso io", explanation: "\"Ci penso io\": \"io\" after the verb for emphasis." },
      { type: "word-order", prompt: "Put the words in order to say: I need to think about it a bit.", words: ["Ci", "devo", "pensare", "un", "po'."], translation: "I need to think about it a bit.", explanation: "\"Ci\" before the modal." },
      { type: "multiple-choice", question: "Which reply means leave it to me?", options: ["Ci penso io.", "Ci credo io.", "Ci riesco io.", "Ci vado io."], correctIndex: 0, explanation: "\"Pensarci\" = to take care of something." },
      { type: "dictation", audio: "Non ci credo, non ci riesco!", explanation: "Two everyday \"ci\" phrases." },
      { type: "speak", text: "Non ti preoccupare, ci penso io. Ci provo stasera.", prompt: "Reassure a friend in Italian: Don't worry, I'll take care of it. I'll try tonight.", tip: "ci-PEN-so-IO: stress \"io\" a little.", explanation: "\"Ci penso io\" and \"ci provo\"." },
    ],
  },
  {
    slug: "a2-ci-vuole-metterci",
    level: "IT-A2",
    number: 3,
    title: "It Takes: Ci Vuole and Metterci",
    summary: "Say how long or how much it takes with ci vuole / ci vogliono and with metterci.",
    duration: "15 min",
    sections: [
      {
        heading: "Ci vuole, ci vogliono",
        body: [
          "\"Volerci\" means it takes, it needs, in general: \"Ci vuole un'ora per andare a Firenze\" (it takes an hour to get to Florence). The verb agrees with what is needed: singular \"ci vuole un'ora\", plural \"ci vogliono tre ore\". That's the trap: English always says it takes.",
          "It works for things as well as time: \"Per la torta ci vogliono tre uova\" (you need three eggs for the cake), \"Ci vuole pazienza\" (it takes patience).",
        ],
        examples: [
          { es: "Ci vuole un'ora per andare a Firenze.", en: "It takes an hour to get to Florence." },
          { es: "Ci vogliono tre ore in macchina.", en: "It takes three hours by car." },
          { es: "Per la torta ci vogliono tre uova.", en: "You need three eggs for the cake." },
          { es: "Ci vuole pazienza con i bambini.", en: "It takes patience with children." },
          { es: "Quanto tempo ci vuole?", en: "How long does it take?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It takes three hours by car.", answer: "Ci vogliono tre ore in macchina.", altAnswers: ["In macchina ci vogliono tre ore."], explanation: "Plural \"ore\" → \"ci vogliono\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[It takes] an hour to get to Florence.", sentence: "___ un'ora per andare a Firenze.", answer: "Ci vuole", explanation: "Singular \"un'ora\" → \"ci vuole\"." },
          { type: "multiple-choice", question: "How do you say you need three eggs for the cake?", options: ["Per la torta ci vogliono tre uova.", "Per la torta ci vuole tre uova.", "Per la torta ci metto tre uova.", "Per la torta vuole tre uova."], correctIndex: 0, explanation: "\"Uova\" is plural → \"vogliono\"." },
        ],
      },
      {
        heading: "Metterci: how long you take",
        body: [
          "\"Metterci\" is personal: how long someone takes. It's conjugated for the person: \"Ci metto venti minuti\" (it takes me twenty minutes), \"Quanto ci metti?\" (how long does it take you?), \"Ci mettono un'ora\" (it takes them an hour).",
          "In the past it uses \"avere\": \"Ci ho messo due ore\" (it took me two hours). \"Ci vuole\" uses \"essere\" and agrees: \"C'è voluta un'ora\", \"Ci sono volute tre ore\".",
        ],
        examples: [
          { es: "Ci metto venti minuti a piedi.", en: "It takes me twenty minutes on foot." },
          { es: "Quanto ci metti per arrivare in ufficio?", en: "How long does it take you to get to the office?" },
          { es: "Ci hanno messo due ore per tornare.", en: "It took them two hours to get back." },
          { es: "Ci sono volute tre ore per finire.", en: "It took three hours to finish." },
          { es: "Non metterci troppo!", en: "Don't take too long!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How long does it take you? (to a friend)", answer: "Quanto ci metti?", altAnswers: ["Quanto tempo ci metti?", "Tu quanto ci metti?"], explanation: "Personal: \"metterci\" in the tu form." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It took me two hours.", answer: "Ci ho messo due ore.", altAnswers: ["Ci ho impiegato due ore."], explanation: "\"Metterci\" in the past: \"ci ho messo\"." },
          { type: "listen-choose", audio: "Ci metto venti minuti a piedi.", question: "What does the speaker say?", options: ["It takes me twenty minutes on foot.", "It takes twenty minutes by car.", "I put twenty minutes aside.", "I walked for twenty minutes."], correctIndex: 0, explanation: "\"Ci metto\" = it takes me." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How long does it take?", answer: "Quanto tempo ci vuole?", altAnswers: ["Quanto ci vuole?"], explanation: "Impersonal: \"ci vuole\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It takes patience with children.", answer: "Ci vuole pazienza con i bambini.", altAnswers: ["Con i bambini ci vuole pazienza."], explanation: "\"Pazienza\" singular → \"vuole\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It takes me twenty minutes on foot.", answer: "Ci metto venti minuti a piedi.", altAnswers: ["A piedi ci metto venti minuti."], explanation: "\"Ci metto\" = it takes me." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It takes them an hour.", answer: "Ci mettono un'ora.", altAnswers: ["Loro ci mettono un'ora."], explanation: "\"Metterci\" in the loro form." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It took three hours to finish.", answer: "Ci sono volute tre ore per finire.", explanation: "\"Volerci\" takes \"essere\"; \"volute\" agrees with \"ore\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Don't take too long! (to a friend)", answer: "Non metterci troppo!", altAnswers: ["Non ci mettere troppo!"], explanation: "Negative \"tu\" with \"ci\" in two positions." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[You need] two people to carry the sofa.", sentence: "___ due persone per portare il divano.", answer: "Ci vogliono", explanation: "Plural \"persone\" → \"vogliono\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "How long [does it take you] to get to the office? (to a friend)", sentence: "Quanto ___ per arrivare in ufficio?", answer: "ci metti", explanation: "Personal: \"ci metti\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[It took] an hour.", sentence: "___ un'ora.", answer: "C'è voluta", explanation: "\"Ci\" + \"è voluta\": agrees with \"un'ora\"." },
      { type: "word-order", prompt: "Put the words in order to say: It takes three hours by train.", words: ["Ci", "vogliono", "tre", "ore", "in", "treno."], translation: "It takes three hours by train.", explanation: "\"In treno\" = by train." },
      { type: "dictation", audio: "Quanto ci metti? Ci metto mezz'ora.", explanation: "\"Ci metti\", \"ci metto\"; \"mezz'ora\" = half an hour." },
      { type: "speak", text: "Per andare al lavoro ci metto quaranta minuti, ma in macchina ci vogliono venti minuti.", prompt: "Say it in Italian: It takes me forty minutes to get to work, but by car it takes twenty minutes.", tip: "ci-VO-glio-no: gli as in \"famiglia\".", explanation: "Personal \"metterci\", impersonal \"volerci\"." },
    ],
  },
  {
    slug: "a2-ce-l-ho",
    level: "IT-A2",
    number: 4,
    title: "Have You Got It? Ce L'Ho",
    summary: "Answer hai la chiave? with sì, ce l'ho or no, non ce l'ho, and use ce li ho, ce le ho.",
    duration: "15 min",
    sections: [
      {
        heading: "Ci + lo = ce l'",
        body: [
          "When you answer a question about having something, Italian rarely says \"l'ho\". It adds \"ci\" in front, the way English adds got: \"Hai la chiave?\" \"Sì, ce l'ho\" (yes, I've got it). \"No, non ce l'ho\" (no, I haven't got it). It's spoken Italian, but completely standard.",
          "Two changes happen: \"ci\" becomes \"ce\" before another pronoun, and \"lo\" / \"la\" become \"l'\" before \"ho\", \"hai\", \"ha\", \"hanno\". So \"ce l'ho, ce l'hai, ce l'ha, ce l'abbiamo, ce l'avete, ce l'hanno\". Say it as one word, stressed at the end.",
        ],
        examples: [
          { es: "Hai la chiave? Sì, ce l'ho.", en: "Have you got the key? Yes, I've got it." },
          { es: "Hai il biglietto? No, non ce l'ho.", en: "Have you got the ticket? No, I haven't." },
          { es: "Chi ha il caricabatterie? Ce l'ha Giulia.", en: "Who's got the charger? Giulia has." },
          { es: "Il passaporto ce l'abbiamo.", en: "We've got the passport." },
          { es: "Ce l'hai una penna?", en: "Have you got a pen?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you got the key? Yes, I've got it.", answer: "Hai la chiave? Sì, ce l'ho.", altAnswers: ["Ce l'hai la chiave? Sì, ce l'ho."], explanation: "\"Ce l'ho\" = I've got it." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Have you got the ticket? No, [I haven't got it].", sentence: "Hai il biglietto? No, ___.", answer: "non ce l'ho", explanation: "\"Non\" + \"ce l'ho\"." },
          { type: "listen-choose", audio: "Chi ha il caricabatterie? Ce l'ha Giulia.", question: "Who has the charger?", options: ["Giulia", "the speaker", "nobody", "the listener"], correctIndex: 0, explanation: "\"Ce l'ha Giulia\" = Giulia has it." },
        ],
      },
      {
        heading: "Ce li ho, ce le ho",
        body: [
          "With plural things \"li\" and \"le\" don't shorten: \"Hai gli occhiali?\" \"Sì, ce li ho\" (I've got them). \"Hai le chiavi?\" \"No, non ce le ho\".",
          "Use \"ce l'ho\" when the thing is already known. With a new thing, just answer with \"avere\": \"Hai una macchina?\" \"Sì, ho una Panda\".",
        ],
        examples: [
          { es: "Hai gli occhiali? Sì, ce li ho.", en: "Have you got your glasses? Yes, I've got them." },
          { es: "Le chiavi? Non ce le ho.", en: "The keys? I haven't got them." },
          { es: "I documenti ce li ha Marco.", en: "Marco's got the documents." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The keys? I haven't got them.", answer: "Le chiavi? Non ce le ho.", explanation: "\"Le chiavi\" → \"ce le ho\"." },
          { type: "multiple-choice", question: "\"Hai gli occhiali?\" Which answer is right?", options: ["Sì, ce li ho.", "Sì, ce l'ho.", "Sì, ce le ho.", "Sì, li ce ho."], correctIndex: 0, explanation: "\"Gli occhiali\" = masculine plural → \"li\"." },
        ],
      },
      {
        heading: "Ce la faccio",
        body: [
          "One more everyday phrase with \"ce\": \"farcela\" (to make it, to cope). \"Ce la faccio\" (I can make it), \"Non ce la faccio più!\" (I can't take it any more!), \"Ce l'abbiamo fatta!\" (we did it!).",
        ],
        examples: [
          { es: "Non ce la faccio più!", en: "I can't take it any more!" },
          { es: "Ce la fai ad arrivare alle otto?", en: "Can you make it by eight?" },
          { es: "Ce l'abbiamo fatta!", en: "We did it!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We did it!", answer: "Ce l'abbiamo fatta!", explanation: "\"Farcela\" in the past: \"ce l'abbiamo fatta\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can you make it by eight? (to a friend)", answer: "Ce la fai ad arrivare alle otto?", altAnswers: ["Ce la fai per le otto?", "Riesci ad arrivare alle otto?"], explanation: "\"Ce la fai?\" = can you make it?" },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you got a pen? (to a friend)", answer: "Ce l'hai una penna?", altAnswers: ["Hai una penna?"], explanation: "Spoken \"ce l'hai\" anticipates the noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We've got the passport.", answer: "Il passaporto ce l'abbiamo.", altAnswers: ["Ce l'abbiamo il passaporto.", "Abbiamo il passaporto."], explanation: "\"Ce l'abbiamo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Marco's got the documents.", answer: "I documenti ce li ha Marco.", altAnswers: ["Ce li ha Marco i documenti.", "Marco ha i documenti."], explanation: "Plural: \"ce li ha\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I can't take it any more!", answer: "Non ce la faccio più!", explanation: "\"Farcela\": \"non ce la faccio più\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you got your glasses? Yes, I've got them. (to a friend)", answer: "Hai gli occhiali? Sì, ce li ho.", altAnswers: ["Ce li hai gli occhiali? Sì, ce li ho."], explanation: "\"Ce li ho\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Who's got the charger? [Giulia has it].", sentence: "Chi ha il caricabatterie? ___.", answer: "Ce l'ha Giulia", explanation: "\"Ce l'ha\" + subject after." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The tickets? [We haven't got them].", sentence: "I biglietti? ___.", answer: "Non ce li abbiamo", explanation: "\"Li\" doesn't shorten." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The car? [They've got it].", sentence: "La macchina? ___.", answer: "Ce l'hanno", explanation: "\"La\" → \"l'\" before \"hanno\"." },
      { type: "word-order", prompt: "Put the words in order to say: No, I haven't got it.", words: ["No,", "non", "ce", "l'ho."], translation: "No, I haven't got it.", explanation: "\"Non ce l'ho\"." },
      { type: "multiple-choice", question: "\"Hai le chiavi della macchina?\" Which is the natural yes?", options: ["Sì, ce le ho.", "Sì, le ho ci.", "Sì, ce l'ho le.", "Sì, ne ho."], correctIndex: 0, explanation: "\"Le chiavi\" → \"ce le ho\"." },
      { type: "dictation", audio: "Ce l'hai il biglietto? Sì, ce l'ho.", explanation: "Say and write \"ce l'hai\", \"ce l'ho\"." },
      { type: "speak", text: "Le chiavi? Ce le ho io. Il biglietto, invece, non ce l'ho!", prompt: "Say it in Italian: The keys? I've got them. The ticket, on the other hand, I haven't got!", tip: "\"Ce l'ho\" sounds like one word: chel-LÒ.", explanation: "\"Ce le ho\" and \"non ce l'ho\"." },
    ],
  },
  {
    slug: "a2-drill-ci",
    level: "IT-A2",
    number: 5,
    title: "Drill: Ci",
    summary: "Produce ci in every use: places, pensarci, volerci, metterci and ce l'ho.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Ci on one card",
        body: [
          "Place: \"ci vado\", \"ci sono stato\". A + idea: \"ci penso\", \"ci credo\", \"ci riesco\", \"ci provo\". Time / need: \"ci vuole\" / \"ci vogliono\", \"ci metto\". Having: \"ce l'ho\", \"ce li ho\". Before the verb; attached to infinitives and tu commands.",
        ],
        examples: [
          { es: "Ci andiamo domani.", en: "We're going there tomorrow." },
          { es: "Non ci ho pensato.", en: "I didn't think of it." },
          { es: "Ci vogliono due ore.", en: "It takes two hours." },
          { es: "Ce l'hai tu?", en: "Have you got it?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I didn't think of it.", answer: "Non ci ho pensato.", explanation: "\"Ci\" before \"ho\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you got it? (to a friend)", answer: "Ce l'hai tu?", altAnswers: ["Ce l'hai?"], explanation: "\"Ce l'hai\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We're going there tomorrow.", answer: "Ci andiamo domani.", altAnswers: ["Domani ci andiamo."], explanation: "Place: \"ci andiamo\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It takes two hours.", answer: "Ci vogliono due ore.", explanation: "Plural → \"vogliono\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've never been there.", answer: "Non ci sono mai stato.", altAnswers: ["Non ci sono mai stata."], explanation: "\"Non ci sono mai stato\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It takes a lot of time.", answer: "Ci vuole molto tempo.", altAnswers: ["Ci vuole tanto tempo."], explanation: "Singular → \"vuole\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How long did it take you? (to a friend)", answer: "Quanto ci hai messo?", altAnswers: ["Quanto tempo ci hai messo?"], explanation: "\"Metterci\" in the past." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'll take care of the tickets.", answer: "Ai biglietti ci penso io.", altAnswers: ["Ci penso io ai biglietti.", "Ci penso io ai biglietti!"], explanation: "\"Pensare a\" → \"ci penso io\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I can't do it.", answer: "Non ci riesco.", altAnswers: ["Io non ci riesco.", "Non ce la faccio."], explanation: "\"Riuscirci\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bags? Luca's got them.", answer: "Le borse? Ce le ha Luca.", explanation: "\"Ce le ha\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you want to go there? (to a friend)", answer: "Vuoi andarci?", altAnswers: ["Ci vuoi andare?"], explanation: "Attached or before." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The beach? [I go there] every morning.", sentence: "La spiaggia? ___ ogni mattina.", answer: "Ci vado", explanation: "Place." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[It takes me] ten minutes by bike.", sentence: "___ dieci minuti in bici.", answer: "Ci metto", explanation: "Personal time." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "You won? [I don't believe it]!", sentence: "Hai vinto? ___!", answer: "Non ci credo", explanation: "\"Crederci\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The umbrella? [I haven't got it].", sentence: "L'ombrello? ___.", answer: "Non ce l'ho", explanation: "\"Non ce l'ho\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[We did it]!", sentence: "___!", answer: "Ce l'abbiamo fatta", explanation: "\"Farcela\" in the past." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Rome? [We went there] in May.", sentence: "Roma? ___ a maggio.", answer: "Ci siamo andati", altAnswers: ["Ci siamo andate"], explanation: "\"Ci\" + \"essere\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I'll try], but I'm not sure.", sentence: "___, ma non sono sicuro.", answer: "Ci provo", explanation: "\"Provarci\"." },
      { type: "dictation", audio: "Ci vuole un'ora, ma ci metto di più.", explanation: "Impersonal, then personal." },
      { type: "dictation", audio: "Non ce l'ho, ce l'ha Marco.", explanation: "\"Ce l'ho\", \"ce l'ha\"." },
      { type: "speak", text: "Al mare? Ci vado domani. Ci vogliono due ore, ma ci penso io alla macchina.", prompt: "Say it in Italian: To the seaside? I'm going tomorrow. It takes two hours, but I'll see to the car.", tip: "Keep \"ci\" light and quick before the verb.", explanation: "Three uses of \"ci\"." },
    ],
  },
  {
    slug: "a2-contrast-ci-vuole-metterci",
    level: "IT-A2",
    number: 6,
    title: "Contrast Clinic: Ci Vuole or Ci Metto?",
    summary: "Tell impersonal ci vuole (it takes) from personal metterci (it takes me) in pairs of sentences.",
    duration: "15 min",
    sections: [
      {
        heading: "Who takes the time?",
        body: [
          "Ask yourself whether a person is doing the taking. If the sentence is general (it takes an hour, you need three eggs), use \"volerci\", which agrees with the thing: \"ci vuole un'ora\", \"ci vogliono tre uova\". If a person takes the time, use \"metterci\", which agrees with the person: \"ci metto un'ora\", \"ci mettiamo un'ora\".",
          "So \"Ci vuole un'ora per andare a Firenze\" is a fact about the journey; \"Ci metto un'ora\" is about me. Never \"ci voglio un'ora\": that would mean I want myself there for an hour.",
        ],
        examples: [
          { es: "Ci vuole un'ora per andare a Firenze.", en: "It takes an hour to get to Florence." },
          { es: "Io ci metto un'ora e mezza, perché prendo il regionale.", en: "It takes me an hour and a half, because I take the slow train." },
          { es: "Ci vogliono tre uova per questa ricetta.", en: "This recipe needs three eggs." },
          { es: "Mia nonna ci mette due minuti a fare la pasta.", en: "My grandmother takes two minutes to make pasta." },
          { es: "Quanto ci vuole? / Quanto ci metti?", en: "How long does it take? / How long does it take you?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It takes me an hour and a half.", answer: "Ci metto un'ora e mezza.", altAnswers: ["Io ci metto un'ora e mezza."], explanation: "A person takes the time: \"metterci\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It takes an hour to get to Florence.", answer: "Ci vuole un'ora per andare a Firenze.", altAnswers: ["Per andare a Firenze ci vuole un'ora."], explanation: "General fact: \"volerci\"." },
          { type: "multiple-choice", question: "My grandmother takes two minutes to make pasta.", options: ["Mia nonna ci mette due minuti a fare la pasta.", "A mia nonna ci vogliono due minuti a fare la pasta.", "Mia nonna ci vuole due minuti a fare la pasta.", "Mia nonna mette due minuti a fare la pasta."], correctIndex: 0, explanation: "Personal subject \"mia nonna\" → \"ci mette\"." },
        ],
      },
      {
        heading: "Agreement and the past",
        body: [
          "\"Volerci\" agrees with the amount: \"ci vuole un minuto\", \"ci vogliono cinque minuti\"; in the past it takes \"essere\": \"c'è voluto un minuto\", \"ci sono voluti cinque minuti\". \"Metterci\" agrees with the person and takes \"avere\": \"ci ho messo cinque minuti\", \"ci abbiamo messo un'ora\".",
        ],
        examples: [
          { es: "Ci sono voluti cinque minuti.", en: "It took five minutes." },
          { es: "Ci abbiamo messo un'ora.", en: "It took us an hour." },
          { es: "C'è voluta una settimana per avere il documento.", en: "It took a week to get the document." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It took us an hour.", answer: "Ci abbiamo messo un'ora.", explanation: "\"Metterci\" + \"avere\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[It took] five minutes.", sentence: "___ cinque minuti.", answer: "Ci sono voluti", explanation: "\"Volerci\" + \"essere\"; \"voluti\" agrees with \"minuti\"." },
          { type: "listen-choose", audio: "C'è voluta una settimana per avere il documento.", question: "How long did it take?", options: ["a week", "a month", "a day", "a few hours"], correctIndex: 0, explanation: "\"Una settimana\" = a week." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This recipe needs three eggs.", answer: "Per questa ricetta ci vogliono tre uova.", altAnswers: ["Ci vogliono tre uova per questa ricetta."], explanation: "Plural thing → \"ci vogliono\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How long does it take you? (to a friend)", answer: "Quanto ci metti?", altAnswers: ["Quanto tempo ci metti?"], explanation: "Personal." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How long does it take?", answer: "Quanto ci vuole?", altAnswers: ["Quanto tempo ci vuole?"], explanation: "Impersonal." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It takes them two hours.", answer: "Ci mettono due ore.", altAnswers: ["Loro ci mettono due ore."], explanation: "Person: \"loro\" → \"mettono\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It took a week to get the document.", answer: "C'è voluta una settimana per avere il documento.", explanation: "\"Volerci\" in the past: \"c'è voluta\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[It takes] a lot of courage.", sentence: "___ molto coraggio.", answer: "Ci vuole", explanation: "General need, singular." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Luca [takes] half an hour to get ready.", sentence: "Luca ___ mezz'ora a prepararsi.", answer: "ci mette", explanation: "Person: \"ci mette\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[It took me] three days.", sentence: "___ tre giorni.", answer: "Ci ho messo", explanation: "\"Metterci\" + \"avere\"." },
      { type: "word-order", prompt: "Put the words in order to say: It takes two people to carry it.", words: ["Ci", "vogliono", "due", "persone", "per", "portarlo."], translation: "It takes two people to carry it.", explanation: "Plural \"persone\" → \"vogliono\"." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Ci metto venti minuti.", "Ci voglio venti minuti.", "Ci vuole io venti minuti.", "Mi vogliono venti minuti."], correctIndex: 0, explanation: "I take → \"ci metto\"." },
      { type: "dictation", audio: "Ci vogliono due ore, ma io ci metto di meno.", explanation: "Impersonal, then personal." },
      { type: "speak", text: "In treno ci vuole un'ora, ma in macchina ci metto quaranta minuti.", prompt: "Say it in Italian: By train it takes an hour, but by car it takes me forty minutes.", tip: "Stress the contrast: CI VUOLE / ci METTO.", explanation: "General vs personal." },
    ],
  },
  {
    slug: "a2-error-hunt-ci",
    level: "IT-A2",
    number: 7,
    title: "Error Hunt: Ci",
    summary: "Fix learners' mistakes with ci: vado ci, ci vuole tre ore, lo ho, non credo ci, ci voglio un'ora.",
    duration: "15 min",
    sections: [
      {
        heading: "Position and agreement",
        body: [
          "\"Vado ci\" puts \"ci\" after the verb, English-style. Like other pronouns, it goes before a conjugated verb: \"Ci vado\". \"Non credo ci\" has the same problem: \"Non ci credo\".",
          "\"Ci vuole tre ore\" forgets agreement: three hours are plural, so \"Ci vogliono tre ore\". And \"ci voglio un'ora\" mixes the two structures: it's either \"ci vuole un'ora\" (in general) or \"ci metto un'ora\" (me).",
        ],
        examples: [
          { es: "Ci vado domani.", en: "I'm going there tomorrow." },
          { es: "Non ci credo!", en: "I don't believe it!" },
          { es: "Ci vogliono tre ore.", en: "It takes three hours." },
          { es: "Ci metto un'ora.", en: "It takes me an hour." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Vado ci domani\". Write it correctly: I'm going there tomorrow.", source: "I'm going there tomorrow.", answer: "Ci vado domani.", altAnswers: ["Domani ci vado."], explanation: "\"Ci\" before the verb." },
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Ci vuole tre ore\". Write it correctly: It takes three hours.", source: "It takes three hours.", answer: "Ci vogliono tre ore.", explanation: "Plural → \"vogliono\"." },
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"Ci voglio un'ora per arrivare\". Write it correctly: It takes me an hour to get there.", source: "It takes me an hour to get there.", answer: "Ci metto un'ora per arrivare.", altAnswers: ["Ci metto un'ora ad arrivare.", "Ci metto un'ora per arrivarci."], explanation: "Me → \"ci metto\"." },
        ],
      },
      {
        heading: "Having it: ce l'ho",
        body: [
          "\"Hai il passaporto?\" \"Sì, lo ho.\" is understandable but nobody says it. When the thing is known, Italian says \"ce l'ho\". Note too that \"lo\" shortens before \"ho\": never \"lo ho\".",
          "\"Ci metto un'ora per il treno\" (it takes me an hour by train) is fine; learners sometimes think it's wrong. \"Per\" or \"a\" + infinitive both work after \"metterci\": \"ci metto un'ora per arrivare / ad arrivare\".",
        ],
        examples: [
          { es: "Hai il passaporto? Sì, ce l'ho.", en: "Have you got your passport? Yes, I have." },
          { es: "Hai le chiavi? No, non ce le ho.", en: "Have you got the keys? No, I haven't." },
          { es: "Ci metto un'ora ad arrivare.", en: "It takes me an hour to get there." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner answered \"Sì, lo ho\". Write the natural answer: Have you got your passport? Yes, I have.", source: "Have you got your passport? Yes, I have.", answer: "Hai il passaporto? Sì, ce l'ho.", explanation: "\"Ce l'ho\" for having something already mentioned." },
          { type: "multiple-choice", question: "Which sentence is correct?", options: ["Ci metto un'ora ad arrivare.", "Ci voglio un'ora ad arrivare.", "Metto ci un'ora ad arrivare.", "Ci vuole io un'ora ad arrivare."], correctIndex: 0, explanation: "\"Ci metto\" + \"a\" / \"per\" + infinitive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Non credo ci!\". Write it correctly: I don't believe it!", source: "I don't believe it!", answer: "Non ci credo!", explanation: "\"Non ci credo\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Sono stato ci due volte\". Write it correctly: I've been there twice.", source: "I've been there twice.", answer: "Ci sono stato due volte.", altAnswers: ["Ci sono stata due volte."], explanation: "\"Ci\" before the auxiliary." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Ci vuole venti minuti\". Write it correctly: It takes twenty minutes.", source: "It takes twenty minutes.", answer: "Ci vogliono venti minuti.", explanation: "Plural." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Hai la chiave? Sì, la ho.\" Write the natural answer: Yes, I've got it.", source: "Yes, I've got it.", answer: "Sì, ce l'ho.", explanation: "\"Ce l'ho\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Penso io ci\". Write it correctly: Leave it to me.", source: "Leave it to me.", answer: "Ci penso io.", explanation: "\"Ci penso io\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"Voglio andare ci\". Write it correctly: I want to go there.", source: "I want to go there.", answer: "Voglio andarci.", altAnswers: ["Ci voglio andare."], explanation: "Attached (no space) or before the modal." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The keys? [I haven't got them].", sentence: "Le chiavi? ___.", answer: "Non ce le ho", explanation: "Plural: \"ce le ho\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[It took] two hours.", sentence: "___ due ore.", answer: "Ci sono volute", explanation: "Not \"ci ha voluto\": \"volerci\" takes \"essere\"." },
      { type: "word-order", prompt: "Put the words in order to say: We went there last year.", words: ["Ci", "siamo", "andati", "l'anno", "scorso."], translation: "We went there last year.", explanation: "\"Ci siamo andati\"." },
      { type: "multiple-choice", question: "Which is correct?", options: ["Ci vogliono tre ore.", "Ci vuole tre ore.", "Ci voglio tre ore.", "Vogliono ci tre ore."], correctIndex: 0, explanation: "Agreement with \"ore\"." },
      { type: "dictation", audio: "Non ci vado, non ci credo, non ce l'ho.", explanation: "Three negatives with \"ci\" before the verb." },
      { type: "speak", text: "Il passaporto? Ce l'ho. Al consolato ci vado domani: ci vogliono due ore.", prompt: "Say it in Italian: The passport? I've got it. I'm going to the consulate tomorrow: it takes two hours.", tip: "\"Ce l'ho\": one smooth word.", explanation: "Corrected uses of \"ci\"." },
    ],
  },
  {
    slug: "a2-dialogue-lab-commute",
    level: "IT-A2",
    number: 8,
    title: "Dialogue Lab: The Commute",
    summary: "Colleagues in Milano compare how long it takes them to get to work: quanto ci metti?, ci vuole mezz'ora in metro.",
    duration: "15 min",
    sections: [
      {
        heading: "Coffee break",
        body: [
          "At the coffee machine of an office in Milano, Francesca asks her new colleague Tommaso: \"Abiti lontano? Quanto ci metti per venire in ufficio?\" (do you live far? how long does it take you to get to the office?).",
          "Tommaso lives in Monza: \"Ci metto quasi un'ora. Prendo il treno e poi la metro\". Francesca lives in the city: \"Io ci metto venti minuti in bici\".",
        ],
        examples: [
          { es: "Abiti lontano?", en: "Do you live far away?" },
          { es: "Quanto ci metti per venire in ufficio?", en: "How long does it take you to get to the office?" },
          { es: "Ci metto quasi un'ora.", en: "It takes me almost an hour." },
          { es: "Prendo il treno e poi la metro.", en: "I take the train and then the metro." },
          { es: "Io ci metto venti minuti in bici.", en: "It takes me twenty minutes by bike." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How long does it take you to get to the office? (to a colleague you call tu)", answer: "Quanto ci metti per venire in ufficio?", altAnswers: ["Quanto ci metti ad arrivare in ufficio?", "Quanto ci metti per arrivare in ufficio?"], explanation: "Personal: \"ci metti\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[It takes me] almost an hour.", sentence: "___ quasi un'ora.", answer: "Ci metto", explanation: "\"Ci metto\"." },
        ],
      },
      {
        heading: "In general",
        body: [
          "Tommaso asks about the bike: \"In bici? E quando piove?\" Francesca: \"Quando piove prendo la metro: ci vuole mezz'ora, perché ci vogliono due cambi\" (it takes half an hour, because there are two changes).",
          "Then they talk about the office car park: \"Ci vieni mai in macchina?\" (do you ever come by car?) \"No, mai! Ci vuole troppo tempo per trovare parcheggio\".",
        ],
        examples: [
          { es: "Quando piove prendo la metro.", en: "When it rains I take the metro." },
          { es: "Ci vuole mezz'ora in metro.", en: "It takes half an hour by metro." },
          { es: "Ci vogliono due cambi.", en: "You have to change twice." },
          { es: "Ci vieni mai in macchina?", en: "Do you ever come here by car?" },
          { es: "Ci vuole troppo tempo per trovare parcheggio.", en: "It takes too long to find a parking space." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It takes half an hour by metro.", answer: "Ci vuole mezz'ora in metro.", altAnswers: ["In metro ci vuole mezz'ora."], explanation: "General: \"ci vuole\"." },
          { type: "listen-choose", audio: "Ci vuole troppo tempo per trovare parcheggio.", question: "Why doesn't Francesca drive?", options: ["It takes too long to find parking.", "Parking is too expensive.", "She hasn't got a car.", "The traffic is dangerous."], correctIndex: 0, explanation: "\"Trovare parcheggio\" = to find a parking space." },
          { type: "multiple-choice", question: "Tommaso asks \"Ci vieni mai in macchina?\". What does \"ci\" refer to?", options: ["the office", "the car", "the metro", "Monza"], correctIndex: 0, explanation: "\"Ci\" = here, to the office." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you live far away? (to a colleague you call tu)", answer: "Abiti lontano?", altAnswers: ["Tu abiti lontano?"], explanation: "\"Lontano\" = far." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I take the train and then the metro.", answer: "Prendo il treno e poi la metro.", altAnswers: ["Prendo il treno e poi la metropolitana."], explanation: "\"Prendere\" for transport." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It takes me twenty minutes by bike.", answer: "Ci metto venti minuti in bici.", altAnswers: ["In bici ci metto venti minuti.", "Ci metto venti minuti in bicicletta."], explanation: "\"In bici\" = by bike." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You have to change twice.", answer: "Ci vogliono due cambi.", altAnswers: ["Bisogna cambiare due volte."], explanation: "\"Ci vogliono\" + plural noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Do you ever come here by car? (to a colleague you call tu)", answer: "Ci vieni mai in macchina?", explanation: "\"Ci\" = here (the office)." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[It takes] too long to find a parking space.", sentence: "___ troppo tempo per trovare parcheggio.", answer: "Ci vuole", explanation: "\"Tempo\" singular." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "When it rains [it takes me] forty minutes.", sentence: "Quando piove ___ quaranta minuti.", answer: "ci metto", explanation: "Personal." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Monza? [I've lived there] since 2019.", sentence: "Monza? ___ dal 2019.", answer: "Ci abito", altAnswers: ["Ci vivo"], explanation: "\"Ci\" for the place." },
      { type: "word-order", prompt: "Put the words in order to say: It takes half an hour by metro.", words: ["Ci", "vuole", "mezz'ora", "in", "metro."], translation: "It takes half an hour by metro.", explanation: "\"Mezz'ora\" with an apostrophe." },
      { type: "multiple-choice", question: "Francesca says \"Ci metto venti minuti\". What does she mean?", options: ["It takes her twenty minutes.", "She puts twenty minutes aside.", "It takes everyone twenty minutes.", "She waited twenty minutes."], correctIndex: 0, explanation: "Personal \"metterci\"." },
      { type: "dictation", audio: "Quanto ci metti? Ci metto mezz'ora in metro.", explanation: "\"Ci metti\", \"ci metto\"." },
      { type: "speak", text: "Abito a Monza e ci metto un'ora per venire in ufficio. In macchina ci vuole meno, ma non c'è parcheggio.", prompt: "Describe your commute in Italian: I live in Monza and it takes me an hour to get to the office. By car it takes less, but there's no parking.", tip: "Link \"un'ora\" into one word: u-NO-ra.", explanation: "\"Metterci\" and \"volerci\" in one answer." },
    ],
  },
  {
    slug: "a2-sound-ce-l-ho",
    level: "IT-A2",
    number: 9,
    title: "Sounds: Ce L'Ho at Speed",
    summary: "Catch ci and ce in fast speech: ce l'ho, c'è, c'era, ci vado, non ce la faccio.",
    duration: "15 min",
    sections: [
      {
        heading: "Small words, run together",
        body: [
          "In fast speech \"ci\" and \"ce\" melt into the next word. \"Ce l'ho\" sounds like one word with a long l; \"ce l'hai?\" like one word rising at the end. \"Non ce l'ho\" becomes non-cel-LÒ. \"Ci\" before a vowel loses its i in writing only before e: \"c'è\", \"c'era\", \"c'entra\"; before other vowels it's written in full: \"ci abito\", \"ci andiamo\".",
          "Listen for the long l: it's the only sign that tells \"ce l'ho\" (I've got it) from \"ce lo\" + something else, or from \"c'è\".",
        ],
        examples: [
          { es: "Ce l'hai? Sì, ce l'ho.", en: "Have you got it? Yes, I have." },
          { es: "Non ce l'ho, ce l'ha lui.", en: "I haven't got it, he has." },
          { es: "C'era tanta gente.", en: "There were lots of people." },
          { es: "Ci andiamo insieme?", en: "Shall we go there together?" },
          { es: "Non ce la faccio più.", en: "I can't take any more." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Non ce l'ho, ce l'ha lui.", question: "Who has it?", options: ["he does", "the speaker does", "nobody", "she does"], correctIndex: 0, explanation: "\"Ce l'ha lui\" = he has it." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I haven't got it, he has.", answer: "Non ce l'ho, ce l'ha lui.", explanation: "Two \"ce l'\" forms." },
          { type: "listen-choose", audio: "C'era tanta gente.", question: "What did you hear?", options: ["C'era tanta gente.", "Ce l'ha tanta gente.", "C'è tanta gente.", "Ci sono tante genti."], correctIndex: 0, explanation: "\"C'era\" = there was." },
        ],
      },
      {
        heading: "Questions at speed",
        body: [
          "Many everyday questions start with \"ci\" or \"ce\": \"Ce l'hai l'accendino?\" (have you got a lighter?), \"Ci sei?\" (are you there? are you ready?), \"Ci vieni?\" (are you coming?), \"Ce la fai?\" (can you manage?). The intonation rises at the end; the \"ci\" is barely there.",
        ],
        examples: [
          { es: "Ci sei? Partiamo!", en: "Are you ready? Let's go!" },
          { es: "Ci vieni stasera?", en: "Are you coming tonight?" },
          { es: "Ce la fai da sola?", en: "Can you manage on your own?" },
          { es: "Ce l'hai l'accendino?", en: "Have you got a lighter?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Can you manage on your own? (to a woman friend)", answer: "Ce la fai da sola?", explanation: "\"Farcela\" = to manage; \"da sola\" = on your own." },
          { type: "listen-choose", audio: "Ci sei? Partiamo!", question: "What does it mean?", options: ["Are you ready? Let's go!", "Are you there? Let's stay!", "Is it here? Let's leave it!", "Is he there? Let's call!"], correctIndex: 0, explanation: "\"Ci sei?\" = are you there / ready?" },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you got it? Yes, I have. (to a friend)", answer: "Ce l'hai? Sì, ce l'ho.", explanation: "\"Ce l'hai\", \"ce l'ho\"." },
      { type: "dictation", audio: "Non ce la faccio più.", explanation: "\"Ce la faccio\": no apostrophe before \"faccio\"." },
      { type: "dictation", audio: "C'era tanta gente alla festa.", explanation: "\"C'era\" = there was." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I can't take any more.", answer: "Non ce la faccio più.", explanation: "\"Farcela\": \"non ce la faccio più\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Shall we go there together?", answer: "Ci andiamo insieme?", explanation: "\"Ci\" before a vowel stays \"ci\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you coming tonight? (to a friend)", answer: "Ci vieni stasera?", altAnswers: ["Stasera ci vieni?", "Vieni stasera?"], explanation: "\"Ci vieni?\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you got a lighter? (to a friend)", answer: "Ce l'hai l'accendino?", altAnswers: ["Hai un accendino?", "Ce l'hai un accendino?"], explanation: "Spoken \"ce l'hai\" + the noun." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Are you ready? Let's go! (to a friend)", answer: "Ci sei? Partiamo!", altAnswers: ["Sei pronto? Partiamo!", "Sei pronta? Partiamo!", "Ci sei? Andiamo!"], explanation: "\"Ci sei?\" = are you ready?" },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[There were] lots of people.", sentence: "___ tanta gente.", answer: "C'era", explanation: "\"Gente\" is singular in Italian: \"c'era\"." },
      { type: "listen-choose", audio: "Ce l'abbiamo fatta!", question: "What does it mean?", options: ["We did it!", "We've got it!", "We made it ourselves.", "We'll do it!"], correctIndex: 0, explanation: "\"Farcela\" in the past." },
      { type: "speak", text: "Ce l'hai la chiave? No? Non ce l'ho neanch'io!", prompt: "Say it in Italian: Have you got the key? No? I haven't got it either!", tip: "Run \"ce l'hai\" and \"ce l'ho\" together, as one word each.", explanation: "Fast-speech \"ce l'\"." },
    ],
  },
  {
    slug: "a2-mission-trip-planning",
    level: "IT-A2",
    number: 10,
    title: "Real-World Mission: How Long Does It Take?",
    summary: "Plan a trip with friends: travel times with ci vuole and ci metto, and who handles what with ci penso io.",
    duration: "15 min",
    sections: [
      {
        heading: "Getting there",
        body: [
          "You and two friends are planning a weekend in the Cinque Terre from Milano. First the journey: \"Quanto ci vuole in treno?\" \"Ci vogliono circa tre ore, con un cambio a Genova\" (about three hours, with a change in Genoa). \"In macchina ci mettiamo meno, ma non c'è parcheggio\".",
          "Then the places: \"Siete mai stati a Vernazza?\" \"Io ci sono stata due anni fa. Ci torno volentieri!\".",
        ],
        examples: [
          { es: "Quanto ci vuole in treno?", en: "How long does it take by train?" },
          { es: "Ci vogliono circa tre ore, con un cambio a Genova.", en: "It takes about three hours, with a change in Genoa." },
          { es: "In macchina ci mettiamo meno.", en: "By car it takes us less." },
          { es: "Io ci sono stata due anni fa.", en: "I went there two years ago." },
          { es: "Ci torno volentieri!", en: "I'd happily go back!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How long does it take by train?", answer: "Quanto ci vuole in treno?", altAnswers: ["Quanto tempo ci vuole in treno?", "In treno quanto ci vuole?"], explanation: "General: \"ci vuole\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "By car [it takes us] less.", sentence: "In macchina ___ meno.", answer: "ci mettiamo", explanation: "Personal: \"ci mettiamo\"." },
        ],
      },
      {
        heading: "Who does what",
        body: [
          "Now the jobs: \"Chi prenota l'albergo?\" \"Ci penso io!\" \"Ai biglietti ci pensi tu, Sara?\" \"Sì, ci penso io\". Someone always forgets something: \"Hai la tessera del treno?\" \"Sì, ce l'ho\".",
          "Close the plan with a decision: \"Allora ci vediamo in stazione sabato alle 7:30!\".",
        ],
        examples: [
          { es: "Chi prenota l'albergo? Ci penso io!", en: "Who's booking the hotel? I'll do it!" },
          { es: "Ai biglietti ci pensi tu?", en: "Will you take care of the tickets?" },
          { es: "Hai la tessera del treno? Sì, ce l'ho.", en: "Have you got your rail card? Yes, I have." },
          { es: "Ci vediamo in stazione sabato alle 7:30!", en: "See you at the station on Saturday at 7:30!" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Will you take care of the tickets? (to a friend)", answer: "Ai biglietti ci pensi tu?", altAnswers: ["Ci pensi tu ai biglietti?"], explanation: "\"Pensare a\" → \"ci pensi\"." },
          { type: "listen-choose", audio: "Chi prenota l'albergo? Ci penso io!", question: "What does the speaker offer?", options: ["to book the hotel", "to buy the tickets", "to drive", "to cook"], correctIndex: 0, explanation: "\"Ci penso io\" = I'll take care of it." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It takes about three hours, with a change in Genoa.", answer: "Ci vogliono circa tre ore, con un cambio a Genova.", explanation: "\"Ci vogliono\" + plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd happily go back!", answer: "Ci torno volentieri!", altAnswers: ["Ci tornerei volentieri!"], explanation: "\"Ci\" = there." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Who's booking the hotel? I'll do it!", answer: "Chi prenota l'albergo? Ci penso io!", altAnswers: ["Chi prenota l'hotel? Ci penso io!"], explanation: "\"Ci penso io\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "See you at the station on Saturday at 7:30!", answer: "Ci vediamo in stazione sabato alle 7:30!", altAnswers: ["Sabato alle 7:30 ci vediamo in stazione!"], explanation: "\"Ci vediamo\" here is reciprocal: see each other." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Have you ever been to Vernazza? (to friends)", answer: "Siete mai stati a Vernazza?", altAnswers: ["Siete mai state a Vernazza?"], explanation: "Voi + \"stati\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Your rail card? [Have you got it]?", sentence: "La tessera del treno? ___?", answer: "Ce l'hai", explanation: "\"Ce l'hai\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[I went there] two years ago.", sentence: "___ due anni fa.", answer: "Ci sono stata", altAnswers: ["Ci sono stato", "Ci sono andata", "Ci sono andato"], explanation: "\"Ci\" before the auxiliary." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "From the station to the hotel [it takes] ten minutes on foot.", sentence: "Dalla stazione all'albergo ___ dieci minuti a piedi.", answer: "ci vogliono", explanation: "Plural \"minuti\"." },
      { type: "word-order", prompt: "Put the words in order to say: Will you take care of the tickets?", words: ["Ai", "biglietti", "ci", "pensi", "tu?"], translation: "Will you take care of the tickets?", explanation: "Topic first, then \"ci pensi\"." },
      { type: "multiple-choice", question: "Which message offers to book dinner?", options: ["Per la cena ci penso io.", "Per la cena ci credo io.", "Per la cena ce l'ho io.", "Per la cena ci metto io."], correctIndex: 0, explanation: "\"Ci penso io\"." },
      { type: "dictation", audio: "Ci vogliono tre ore, ma ci penso io al treno.", explanation: "\"Ci vogliono\", \"ci penso\"." },
      { type: "speak", text: "In treno ci vogliono tre ore. Io ci sono stata due anni fa e ci torno volentieri. All'albergo ci penso io!", prompt: "Plan the trip in Italian: By train it takes three hours. I went there two years ago and I'd happily go back. I'll see to the hotel!", tip: "Keep each \"ci\" short and unstressed.", explanation: "\"Ci\" for time, place and taking care." },
    ],
  },
];

export const IT_A2_U15_WRITING: WriteExercise = {
  type: "write",
  prompt: "You're organising a day trip with two Italian friends. Write them a message: say where you'd like to go and whether you've been there before, how long it takes to get there by train and by car, and who will take care of what (tickets, food, the car). Ask one of them if they've got something you need.",
  minWords: 50,
  maxWords: 100,
  rubric: [
    "Uses ci for a place (ci sono stato, ci andiamo, ci torno)",
    "Uses ci vuole / ci vogliono with correct agreement, and metterci for a person",
    "Uses ci penso io / ci pensi tu for dividing jobs",
    "Asks or answers with ce l'hai / ce l'ho",
  ],
  modelAnswer: "Ciao ragazzi! Sabato andiamo a Bergamo? Io ci sono stata una volta e ci torno volentieri. In treno ci vuole un'ora, in macchina ci mettiamo quaranta minuti, ma il parcheggio è caro. Ai biglietti ci penso io. Marco, al pranzo ci pensi tu? Giulia, la tua guida di Bergamo ce l'hai ancora? Ci vediamo in stazione alle nove. Ciao!",
  explanation: "\"Ci sono stata\" and \"ci torno\" replace \"a Bergamo\"; \"ci vuole un'ora\" is general and \"ci mettiamo\" is personal. \"Ci penso io\" / \"ci pensi tu\" share the jobs, and \"ce l'hai\" asks about a thing already known.",
};
