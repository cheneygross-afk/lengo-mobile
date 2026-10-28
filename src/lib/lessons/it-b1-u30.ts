// Synced from cheneygross-afk/lengo:src/lib/lessons/it-b1-u30.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson, WriteExercise } from "./types";

// Italian B1 Unit 30: The Environment and the City. Recycling, transport,
// climate, proposals; review of impersonal phrases + subjunctive, the passive,
// si and the conditional. Conventions: docs/italian-course/authoring.md.
export const IT_B1_U30: Lesson[] = [
  {
    slug: "b1-recycling",
    level: "IT-B1",
    number: 1,
    title: "Raccolta Differenziata",
    summary: "Sort your trash the Italian way: umido, plastica, carta, vetro, indifferenziato, the collection calendar and va buttato nel ...",
    duration: "17 min",
    sections: [
      {
        heading: "Five bins",
        body: [
          "In most Italian towns, household waste is sorted: this is \"la raccolta differenziata\". The usual categories are \"l'umido\" or \"l'organico\" (food scraps), \"la plastica\" (often with metal cans: \"plastica e metalli\"), \"la carta\" (paper and cardboard, \"il cartone\"), \"il vetro\" (glass) and \"l'indifferenziato\" or \"il secco\" (everything else).",
          "The rules change from one \"comune\" (municipality) to another, so always check the local guide. Bulky items, \"gli ingombranti\", go to \"l'isola ecologica\" (the recycling center).",
          "Borderline items are where towns disagree: milk cartons go with paper in some places and with plastic in others, and bin colors vary too. Most comuni publish \"il rifiutario\" (an A-to-Z list of items) or an app; use it rather than guessing. The waste tax, \"la TARI\", is paid by whoever lives in the home, and the amount depends on the comune, so check the current rules there.",
        ],
        examples: [
          { es: "Le bucce di patata vanno nell'umido.", en: "Potato peelings go in the food waste." },
          { es: "Le lattine vanno con la plastica.", en: "Cans go with the plastic." },
          { es: "Il cartone della pizza pulito va nella carta.", en: "A clean pizza box goes in the paper." },
          { es: "I bicchieri rotti vanno nell'indifferenziato, non nel vetro.", en: "Broken drinking glasses go in general waste, not the glass bin." },
          { es: "Il vecchio divano va portato all'isola ecologica.", en: "The old sofa has to be taken to the recycling center." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Cans go with the plastic.", answer: "Le lattine vanno con la plastica.", altAnswers: ["Le lattine vanno nella plastica."], explanation: "\"Andare\" = to belong, go (in a bin)." },
          { type: "listen-choose", audio: "Le bucce di patata vanno nell'umido.", question: "Where do potato peelings go?", options: ["food waste", "plastic", "paper", "glass"], correctIndex: 0, explanation: "\"L'umido\" = organic, food waste." },
        ],
      },
      {
        heading: "Va buttato nel ...",
        body: [
          "\"Andare\" + past participle means must be: \"Il vetro va buttato nella campana verde\" (glass must be thrown in the green glass bin). The participle agrees with the subject: \"la carta va piegata\", \"le bottiglie vanno sciacquate\" (must be rinsed), \"i giornali vanno legati\".",
          "Use \"nel / nella / nell'\" with the bin: \"nel vetro\", \"nella plastica\", \"nell'umido\".",
        ],
        examples: [
          { es: "Il vetro va buttato nella campana verde.", en: "Glass must go in the green glass bin." },
          { es: "Le bottiglie vanno sciacquate.", en: "Bottles must be rinsed." },
          { es: "La carta va piegata.", en: "Paper must be folded." },
          { es: "Le pile vanno portate negli appositi contenitori.", en: "Batteries must be taken to the special containers." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Bottles [must be rinsed].", sentence: "Le bottiglie ___.", answer: "vanno sciacquate", explanation: "\"Andare\" + participle; feminine plural." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Glass must go in the green glass bin.", answer: "Il vetro va buttato nella campana verde.", altAnswers: ["Il vetro va messo nella campana verde.", "Il vetro si butta nella campana verde."], explanation: "\"Va buttato\": masculine singular." },
        ],
      },
      {
        heading: "The collection calendar",
        body: [
          "Many towns use \"la raccolta porta a porta\" (door-to-door collection): you put out \"il bidone\" or \"il sacchetto\" (bag) on set evenings, following \"il calendario della raccolta\". In big cities you use \"i cassonetti\" (street bins).",
          "Typical sentences: \"Il martedì passano a prendere la carta\" (on Tuesdays they collect paper), \"Il sacchetto va esposto dopo le 20\" (must be put out after 8 p.m.), \"Si rischia una multa\" (you risk a fine).",
        ],
        examples: [
          { es: "Il martedì passano a prendere la carta.", en: "On Tuesdays they collect the paper." },
          { es: "Il sacchetto va esposto dopo le otto di sera.", en: "The bag must be put out after eight in the evening." },
          { es: "Qui c'è la raccolta porta a porta.", en: "There's door-to-door collection here." },
          { es: "Se si sbaglia bidone, si rischia una multa.", en: "If you use the wrong bin, you risk a fine." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "On Tuesdays they collect the paper.", answer: "Il martedì passano a prendere la carta.", altAnswers: ["Il martedì raccolgono la carta.", "Di martedì passano a prendere la carta."], explanation: "\"Il martedì\" = every Tuesday." },
          { type: "multiple-choice", question: "\"Il sacchetto va esposto dopo le 20\" means ...", options: ["The bag must be put out after 8 p.m.", "The bag is collected at 8 p.m.", "The bag costs 20 euros.", "The bag must be taken in by 8 p.m."], correctIndex: 0, explanation: "\"Esporre\" here = to put out." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Where does the plastic go?", answer: "Dove va la plastica?", altAnswers: ["La plastica dove va?", "Dove si butta la plastica?"], explanation: "\"Andare\" for where things belong." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Coffee grounds go in the food waste.", answer: "I fondi di caffè vanno nell'umido.", altAnswers: ["I fondi del caffè vanno nell'umido.", "I fondi di caffè vanno nell'organico."], explanation: "\"Nell'\" before a vowel." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Newspapers must be tied together.", answer: "I giornali vanno legati.", altAnswers: ["I giornali vanno legati insieme."], explanation: "Masculine plural: \"vanno legati\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The old fridge must be taken to the recycling center.", answer: "Il vecchio frigorifero va portato all'isola ecologica.", altAnswers: ["Il vecchio frigo va portato all'isola ecologica."], explanation: "\"Va portato\": must be taken." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Here there's door-to-door collection.", answer: "Qui c'è la raccolta porta a porta.", altAnswers: ["Qui fanno la raccolta porta a porta."], explanation: "\"Porta a porta\" = door-to-door." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Broken glasses go in general waste.", answer: "I bicchieri rotti vanno nell'indifferenziato.", altAnswers: ["I bicchieri rotti vanno nel secco."], explanation: "Drinking glasses are not bottle glass." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Paper [must be folded].", sentence: "La carta ___.", answer: "va piegata", explanation: "Feminine singular." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Batteries go in [the special containers].", sentence: "Le pile vanno negli ___.", answer: "appositi contenitori", explanation: "\"Apposito\" = special, designated." },
      { type: "word-order", prompt: "Put the words in order to say: The bag must be put out after eight.", words: ["Il", "sacchetto", "va", "esposto", "dopo", "le", "otto."], translation: "The bag must be put out after eight.", explanation: "\"Va esposto\"." },
      { type: "multiple-choice", question: "An empty jam jar goes in ...", options: ["il vetro", "l'umido", "la carta", "gli ingombranti"], correctIndex: 0, explanation: "Glass jars go in \"il vetro\"." },
      { type: "dictation", audio: "Le bottiglie di plastica vanno schiacciate prima di buttarle.", explanation: "\"Schiacciare\" = to squash." },
      { type: "speak", text: "Scusi, dove va buttato il vetro? E quando passano a prendere la plastica?", prompt: "Ask a neighbor (formal): Excuse me, where does glass go? And when do they collect plastic?", tip: "\"Scusi\" for a neighbor you don't know well.", explanation: "\"Va buttato\" and \"passano a prendere\"." },
    ],
  },
  {
    slug: "b1-city-transport",
    level: "IT-B1",
    number: 2,
    title: "Getting Around the City",
    summary: "Talk about the ZTL, public transportation, the metro, bike sharing, traffic and parking in an Italian city.",
    duration: "17 min",
    sections: [
      {
        heading: "The ZTL",
        body: [
          "Most Italian historic centers are a \"ZTL\" (zona a traffico limitato): only residents and authorized vehicles can drive in at certain hours. At the entrance, \"il varco\" (the gate) has a camera and a sign: \"varco attivo\" (active: don't enter) or \"varco non attivo\" (you can enter). Enter when it's active and you get \"una multa\" (a fine) by mail, sometimes months later.",
        ],
        examples: [
          { es: "Il centro è zona a traffico limitato.", en: "The center is a limited traffic zone." },
          { es: "Attenzione, il varco è attivo.", en: "Careful, the gate is active." },
          { es: "Mi è arrivata una multa per la ZTL.", en: "I got a fine for the ZTL." },
          { es: "I residenti hanno il permesso per entrare.", en: "Residents have a permit to enter." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I got a fine for the ZTL.", answer: "Mi è arrivata una multa per la ZTL.", altAnswers: ["Ho preso una multa per la ZTL.", "Ho ricevuto una multa per la ZTL."], explanation: "\"Mi è arrivata\": the fine is the subject." },
          { type: "multiple-choice", question: "The sign says \"varco attivo\". What do you do?", options: ["Don't drive in.", "Drive in quickly.", "Pay at the gate.", "Park at the gate."], correctIndex: 0, explanation: "Active gate = the camera is on." },
        ],
      },
      {
        heading: "Public transportation",
        body: [
          "\"I mezzi pubblici\" (or just \"i mezzi\") are buses, trams and the metro: \"Vado al lavoro con i mezzi\". Buy \"il biglietto\" before you board and \"convalidare\" it (validate it; people also say \"timbrare\"). Regular users have \"l'abbonamento\" (a pass). \"Il bike sharing\" and \"i monopattini\" (e-scooters) are common in big cities.",
          "Travel without a validated ticket and \"il controllore\" (the inspector) can fine you on the spot; saying you didn't know rarely helps. Public transportation strikes, \"gli scioperi\", are announced in advance and usually keep \"fasce di garanzia\" (guaranteed service hours), so check the local transit company's website. Ticket rules differ by city (some let you tap a bank card at the validator), so check before you travel.",
        ],
        examples: [
          { es: "Vado al lavoro con i mezzi.", en: "I go to work by public transportation." },
          { es: "Il biglietto va convalidato appena sali.", en: "The ticket must be validated as soon as you get on." },
          { es: "Ho l'abbonamento mensile.", en: "I have a monthly pass." },
          { es: "La metro passa ogni cinque minuti.", en: "The metro comes every five minutes." },
          { es: "Prendo una bici del bike sharing.", en: "I'll take a bike-sharing bike." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I go to work by public transportation.", answer: "Vado al lavoro con i mezzi.", altAnswers: ["Vado a lavoro con i mezzi.", "Vado al lavoro con i mezzi pubblici.", "Vado a lavoro con i mezzi pubblici."], explanation: "\"Con i mezzi\" = by public transportation." },
          { type: "listen-choose", audio: "La metro passa ogni cinque minuti.", question: "How often does the metro come?", options: ["every five minutes", "every fifteen minutes", "at five o'clock", "five times a day"], correctIndex: 0, explanation: "\"Ogni cinque minuti\"." },
        ],
      },
      {
        heading: "Traffic and parking",
        body: [
          "\"C'è traffico\" or \"c'è un ingorgo\" (a traffic jam). Parking: \"le strisce blu\" (blue lines) are paid parking, paid at \"il parchimetro\" or by app; \"le strisce bianche\" are usually free; \"le strisce gialle\" are reserved (residents, disabled people, loading). Comparisons help you choose: \"In centro è più veloce la bici della macchina\".",
        ],
        examples: [
          { es: "A quest'ora c'è sempre un ingorgo.", en: "At this time there's always a traffic jam." },
          { es: "Sulle strisce blu si paga.", en: "You pay on the blue lines." },
          { es: "Non trovo mai parcheggio.", en: "I can never find parking." },
          { es: "In centro la bici è più veloce della macchina.", en: "In the center, a bike is faster than a car." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I can never find parking.", answer: "Non trovo mai parcheggio.", altAnswers: ["Non trovo mai un parcheggio.", "Non trovo mai posto."], explanation: "\"Non ... mai\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The bike is [faster than] the car.", sentence: "La bici è ___ macchina.", answer: "più veloce della", explanation: "\"Più ... di\" + article: \"della\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The center is closed to traffic.", answer: "Il centro è chiuso al traffico.", altAnswers: ["Il centro storico è chiuso al traffico."], explanation: "\"Chiuso al traffico\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Careful, the gate is active!", answer: "Attenzione, il varco è attivo!", altAnswers: ["Attento, il varco è attivo!", "Attenta, il varco è attivo!"], explanation: "\"Varco attivo\" = don't enter." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I have a monthly pass.", answer: "Ho l'abbonamento mensile.", altAnswers: ["Ho un abbonamento mensile."], explanation: "\"Abbonamento\" = pass, subscription." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Did you validate the ticket?", answer: "Hai convalidato il biglietto?", altAnswers: ["Hai timbrato il biglietto?"], explanation: "\"Convalidare\" or \"timbrare\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There's always traffic at this time.", answer: "A quest'ora c'è sempre traffico.", altAnswers: ["C'è sempre traffico a quest'ora.", "A quest'ora c'è sempre un ingorgo."], explanation: "\"A quest'ora\" = at this time." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The metro is faster than the bus.", answer: "La metro è più veloce dell'autobus.", altAnswers: ["La metropolitana è più veloce dell'autobus.", "La metro è più veloce del bus."], explanation: "\"Di\" + \"l'\" = \"dell'\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "You pay [on the blue lines].", sentence: "___ si paga.", answer: "Sulle strisce blu", explanation: "\"Su\" + \"le\" = \"sulle\"; \"blu\" doesn't change." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There's a [traffic jam] on the ring road.", sentence: "C'è un ___ sulla tangenziale.", answer: "ingorgo", explanation: "\"Ingorgo\" = traffic jam." },
      { type: "word-order", prompt: "Put the words in order to say: Residents have a permit to enter.", words: ["I", "residenti", "hanno", "il", "permesso", "per", "entrare."], translation: "Residents have a permit to enter.", explanation: "\"Permesso\" = permit." },
      { type: "multiple-choice", question: "Where is parking usually free?", options: ["on the white lines", "on the blue lines", "on the yellow lines", "in the ZTL"], correctIndex: 0, explanation: "\"Strisce bianche\" are usually free." },
      { type: "dictation", audio: "Il biglietto va convalidato appena sali sull'autobus.", explanation: "\"Va convalidato\": must be validated." },
      { type: "speak", text: "Di solito vado al lavoro con i mezzi, perché in centro non trovo mai parcheggio.", prompt: "Say it: I usually go to work by public transportation, because I can never find parking in the center.", tip: "\"I mezzi\": the \"z\" sounds like dz.", explanation: "Transportation + reason." },
    ],
  },
  {
    slug: "b1-environment",
    level: "IT-B1",
    number: 3,
    title: "Climate and Environment",
    summary: "Talk about pollution, global warming, renewable energy and saving energy, using bisogna che, the passive and si.",
    duration: "17 min",
    sections: [
      {
        heading: "Problems",
        body: [
          "Key words: \"l'inquinamento\" (pollution; \"inquinare\", \"inquinato\"), \"lo smog\", \"le polveri sottili\" (fine particles), \"il riscaldamento globale\" (global warming), \"il cambiamento climatico\", \"la siccità\" (drought), \"l'alluvione\" (flood), \"lo spreco\" (waste; \"sprecare\" = to waste).",
          "The impersonal \"si\" is common in this kind of talk: \"Si spreca troppa acqua\", \"Si producono troppi rifiuti\" (plural noun → plural verb).",
          "News and weather reports add their own set: \"un'ondata di calore\" (a heat wave), \"una bomba d'acqua\" (a cloudburst), \"l'allerta meteo\" (a weather warning: \"gialla\", \"arancione\" or \"rossa\"). Useful collocations: \"ridurre le emissioni\", \"tutelare l'ambiente\" (to protect the environment), \"sostenibile\", \"a basso impatto\". The adjective is \"ambientale\" (\"un disastro ambientale\"), and \"il clima\" is masculine despite its \"-a\".",
        ],
        examples: [
          { es: "L'aria in città è molto inquinata.", en: "The air in the city is very polluted." },
          { es: "Quest'estate c'è stata una lunga siccità.", en: "This summer there was a long drought." },
          { es: "Si spreca troppa acqua.", en: "Too much water is wasted." },
          { es: "Si producono troppi rifiuti.", en: "Too much trash is produced." },
          { es: "Il riscaldamento globale è un problema di tutti.", en: "Global warming is everyone's problem." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Too much water is wasted.", answer: "Si spreca troppa acqua.", altAnswers: ["Sprechiamo troppa acqua.", "Viene sprecata troppa acqua."], explanation: "Impersonal \"si\" + singular noun." },
          { type: "listen-choose", audio: "Quest'estate c'è stata una lunga siccità.", question: "What happened this summer?", options: ["a long drought", "a big flood", "a lot of smog", "a cold spell"], correctIndex: 0, explanation: "\"Siccità\" = drought." },
        ],
      },
      {
        heading: "Solutions",
        body: [
          "\"Le energie rinnovabili\": \"l'energia solare\" (\"i pannelli solari\"), \"l'energia eolica\" (wind). \"Il risparmio energetico\" (energy saving): \"spegnere le luci\", \"abbassare il riscaldamento\", \"usare meno la macchina\".",
          "The passive with \"essere\" or \"venire\" is typical of news and reports: \"Ogni anno vengono installati migliaia di pannelli solari\", \"Il 60% dei rifiuti è riciclato\".",
        ],
        examples: [
          { es: "Abbiamo messo i pannelli solari sul tetto.", en: "We've put solar panels on the roof." },
          { es: "Spegni la luce quando esci.", en: "Turn the light off when you go out." },
          { es: "Ogni anno vengono installati migliaia di pannelli solari.", en: "Thousands of solar panels are installed every year." },
          { es: "Più della metà dei rifiuti viene riciclata.", en: "More than half of the trash is recycled." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We've put solar panels on the roof.", answer: "Abbiamo messo i pannelli solari sul tetto.", altAnswers: ["Abbiamo installato i pannelli solari sul tetto.", "Abbiamo messo dei pannelli solari sul tetto."], explanation: "\"Pannelli solari\"." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Thousands of trees [are planted] every year.", sentence: "Ogni anno ___ migliaia di alberi.", answer: "vengono piantati", altAnswers: ["sono piantati"], explanation: "Passive with \"venire\"; \"migliaia di alberi\" is masculine plural." },
        ],
      },
      {
        heading: "Bisogna che ...",
        body: [
          "Impersonal phrases + \"che\" take the subjunctive: \"Bisogna che tutti facciano la loro parte\" (everyone needs to do their bit), \"È necessario che il governo investa di più\", \"È importante che ricicliamo\". With no specific person, use the infinitive: \"Bisogna risparmiare energia\".",
        ],
        examples: [
          { es: "Bisogna che tutti facciano la loro parte.", en: "Everyone needs to do their bit." },
          { es: "È necessario che il governo investa di più.", en: "The government needs to invest more." },
          { es: "È importante che ricicliamo bene.", en: "It's important that we recycle properly." },
          { es: "Bisogna risparmiare energia.", en: "We need to save energy." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Everyone needs to do their bit.", answer: "Bisogna che tutti facciano la loro parte.", altAnswers: ["È necessario che tutti facciano la loro parte.", "Tutti devono fare la loro parte."], explanation: "\"Bisogna che\" + subjunctive." },
          { type: "multiple-choice", question: "\"È importante che ___ meno la macchina.\" (we)", options: ["usiamo", "usare", "usavamo", "useremo"], correctIndex: 0, explanation: "\"Noi\" subjunctive = \"usiamo\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The air in the city is very polluted.", answer: "L'aria in città è molto inquinata.", altAnswers: ["In città l'aria è molto inquinata."], explanation: "\"Inquinato\" agrees with \"l'aria\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Too much trash is produced.", answer: "Si producono troppi rifiuti.", altAnswers: ["Vengono prodotti troppi rifiuti.", "Produciamo troppi rifiuti."], explanation: "Plural noun → \"si producono\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Turn off the light when you go out. (to a friend)", answer: "Spegni la luce quando esci.", altAnswers: ["Spegni la luce quando vai via."], explanation: "Imperative \"spegni\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The government needs to invest more.", answer: "È necessario che il governo investa di più.", altAnswers: ["Bisogna che il governo investa di più.", "Il governo deve investire di più."], explanation: "\"Investa\": subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's important that we recycle properly.", answer: "È importante che ricicliamo bene.", altAnswers: ["È importante che facciamo bene la differenziata.", "È importante riciclare bene."], explanation: "\"Ricicliamo\": indicative and subjunctive look the same." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We need to save energy.", answer: "Bisogna risparmiare energia.", altAnswers: ["Dobbiamo risparmiare energia.", "Bisogna risparmiare l'energia."], explanation: "No specific person: infinitive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[Global warming] is everyone's problem.", sentence: "___ è un problema di tutti.", answer: "Il riscaldamento globale", explanation: "\"Riscaldamento\" = warming, heating." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's necessary that companies [pollute] less.", sentence: "È necessario che le aziende ___ meno.", answer: "inquinino", explanation: "Subjunctive, \"loro\" form." },
      { type: "word-order", prompt: "Put the words in order to say: Too much water is wasted.", words: ["Si", "spreca", "troppa", "acqua."], translation: "Too much water is wasted.", explanation: "Impersonal \"si\"." },
      { type: "multiple-choice", question: "\"L'energia eolica\" comes from ...", options: ["the wind", "the sun", "water", "coal"], correctIndex: 0, explanation: "\"Eolico\" = wind (from Aeolus)." },
      { type: "dictation", audio: "Più della metà dei rifiuti viene riciclata.", explanation: "Passive with \"venire\"." },
      { type: "speak", text: "Secondo me bisogna che tutti facciano la loro parte: si spreca troppa energia.", prompt: "Say it: In my view everyone needs to do their bit: too much energy is wasted.", tip: "\"Facciano\": double \"c\", FAC-cia-no.", explanation: "\"Bisogna che\" + subjunctive and impersonal \"si\"." },
    ],
  },
  {
    slug: "b1-proposals",
    level: "IT-B1",
    number: 4,
    title: "Making Proposals",
    summary: "Make proposals for your city with bisognerebbe, si potrebbe, sarebbe meglio + infinitive, propongo di and perché non ...?",
    duration: "17 min",
    sections: [
      {
        heading: "Bisognerebbe, si potrebbe",
        body: [
          "The conditional softens a proposal: \"Bisognerebbe piantare più alberi\" (more trees ought to be planted), \"Si potrebbe chiudere il centro alle auto\" (the center could be closed to cars), \"Il comune dovrebbe aumentare le piste ciclabili\".",
          "With \"si potrebbe\" + infinitive + plural noun, the verb usually goes plural: \"Si potrebbero aggiungere più autobus\".",
        ],
        examples: [
          { es: "Bisognerebbe piantare più alberi.", en: "More trees ought to be planted." },
          { es: "Si potrebbe chiudere il centro alle auto.", en: "The center could be closed to cars." },
          { es: "Si potrebbero aggiungere più autobus di notte.", en: "More night buses could be added." },
          { es: "Il comune dovrebbe aumentare le piste ciclabili.", en: "The city should increase the bike lanes." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "More trees ought to be planted.", answer: "Bisognerebbe piantare più alberi.", altAnswers: ["Si dovrebbero piantare più alberi.", "Si potrebbero piantare più alberi."], explanation: "\"Bisognerebbe\" + infinitive." },
          { type: "listen-choose", audio: "Si potrebbero aggiungere più autobus di notte.", question: "What is proposed?", options: ["more night buses", "fewer buses", "a new metro line", "free buses"], correctIndex: 0, explanation: "\"Aggiungere\" = to add." },
        ],
      },
      {
        heading: "Sarebbe meglio ...",
        body: [
          "\"Sarebbe meglio\", \"sarebbe utile\" and \"sarebbe bello\" + infinitive make general proposals: \"Sarebbe meglio investire nei trasporti\", \"Sarebbe utile avere più fontanelle\". To name who should act, use \"dovrebbe\": \"Il comune dovrebbe investire nei trasporti\". You'll also hear \"sarebbe meglio che\" + a subjunctive form (\"sarebbe meglio che il comune investisse\"); just recognize it for now: that tense comes at Upper Intermediate.",
        ],
        examples: [
          { es: "Sarebbe meglio investire nei trasporti.", en: "It would be better to invest in transportation." },
          { es: "Sarebbe utile avere più fontanelle.", en: "It would be useful to have more drinking fountains." },
          { es: "Il comune dovrebbe investire nei trasporti.", en: "The city should invest in transportation." },
          { es: "Sarebbe bello usare meno la macchina.", en: "It would be nice to use the car less." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It would be better [to invest] in transportation.", sentence: "Sarebbe meglio ___ nei trasporti.", answer: "investire", explanation: "\"Sarebbe meglio\" + infinitive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "There should be more parks.", answer: "Ci dovrebbero essere più parchi.", altAnswers: ["Dovrebbero esserci più parchi.", "Servirebbero più parchi.", "Ci vorrebbero più parchi."], explanation: "\"Dovrebbero\": plural, agreeing with \"parchi\"." },
        ],
      },
      {
        heading: "Propongo di, perché non ...?",
        body: [
          "In a meeting or letter: \"Propongo di creare un'area pedonale\" (I propose creating a pedestrian area), \"Propongo che il mercato si sposti in piazza\" (present subjunctive). In conversation: \"Perché non ...?\" + present, or \"Che ne dite di\" + infinitive (how about ...?): \"Che ne dite di fare una raccolta firme?\" (how about starting a petition?).",
          "To answer a proposal: \"Mi sembra un'ottima idea\", \"Sono d'accordo, però ...\" or, with doubts, \"Non sono convinto che sia la soluzione giusta\" (subjunctive after doubt). To order several proposals in a letter or meeting: \"innanzitutto\" (first of all), \"in secondo luogo\", \"infine\". \"Forse si potrebbe ...\" and \"Non sarebbe male\" + infinitive soften things even more.",
        ],
        examples: [
          { es: "Propongo di creare un'area pedonale.", en: "I propose creating a pedestrian area." },
          { es: "Propongo che il mercato si sposti in piazza.", en: "I propose that the market move to the square." },
          { es: "Perché non organizziamo una giornata senza auto?", en: "Why don't we organize a car-free day?" },
          { es: "Che ne dite di fare una raccolta firme?", en: "How about starting a petition?" },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "How about starting a petition? (to a group)", answer: "Che ne dite di fare una raccolta firme?", altAnswers: ["Che ne dite di fare una petizione?", "Perché non facciamo una raccolta firme?"], explanation: "\"Che ne dite di\" + infinitive." },
          { type: "multiple-choice", question: "Which proposal is correct?", options: ["Propongo di creare più piste ciclabili.", "Propongo creare più piste ciclabili.", "Propongo per creare più piste ciclabili.", "Propongo a creare più piste ciclabili."], correctIndex: 0, explanation: "\"Proporre di\" + infinitive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The center could be closed to cars.", answer: "Si potrebbe chiudere il centro alle auto.", altAnswers: ["Si potrebbe chiudere il centro alle macchine.", "Il centro potrebbe essere chiuso alle auto."], explanation: "\"Si potrebbe\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The city should increase the bike lanes.", answer: "Il comune dovrebbe aumentare le piste ciclabili.", altAnswers: ["Il Comune dovrebbe aumentare le piste ciclabili."], explanation: "\"Dovrebbe\" = should." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It would be better to use the car less.", answer: "Sarebbe meglio usare meno la macchina.", altAnswers: ["Sarebbe meglio usare meno l'auto.", "Sarebbe meglio usare la macchina di meno."], explanation: "\"Sarebbe meglio\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I propose creating a pedestrian area.", answer: "Propongo di creare un'area pedonale.", altAnswers: ["Propongo di creare una zona pedonale."], explanation: "\"Proporre di\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Why don't we organize a car-free day?", answer: "Perché non organizziamo una giornata senza auto?", altAnswers: ["Perché non organizziamo una giornata senza macchine?"], explanation: "\"Perché non\" + present." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "More bins could be added.", answer: "Si potrebbero aggiungere più cestini.", altAnswers: ["Si potrebbero mettere più cestini.", "Bisognerebbe aggiungere più cestini."], explanation: "Plural noun: \"si potrebbero\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There [should be] more fountains.", sentence: "Ci ___ essere più fontanelle.", answer: "dovrebbero", explanation: "Plural conditional, agreeing with \"fontanelle\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[More trees ought to be] planted.", sentence: "___ piantare più alberi.", answer: "Bisognerebbe", explanation: "Conditional of \"bisognare\"." },
      { type: "word-order", prompt: "Put the words in order to say: Why don't we close the street on Sundays?", words: ["Perché", "non", "chiudiamo", "la", "strada", "la", "domenica?"], translation: "Why don't we close the street on Sundays?", explanation: "\"Perché non\" + present." },
      { type: "multiple-choice", question: "\"Bisogna che il sindaco ___ con i cittadini.\"", options: ["parli", "parla", "parlare", "parlerà"], correctIndex: 0, explanation: "\"Bisogna che\" + present subjunctive." },
      { type: "dictation", audio: "Bisognerebbe aumentare le corse degli autobus la sera.", explanation: "\"Le corse\" = the runs, services." },
      { type: "speak", text: "Propongo di chiudere il centro alle auto la domenica. E perché non facciamo anche una giornata del riciclo?", prompt: "Make two proposals: I propose closing the center to cars on Sundays. And why don't we also have a recycling day?", tip: "\"Facciamo\": double \"c\", fac-CIA-mo.", explanation: "\"Proporre di\" and \"perché non\" + present." },
    ],
  },
  {
    slug: "b1-drill-environment",
    level: "IT-B1",
    number: 5,
    title: "Drill: Environment Vocabulary",
    summary: "Produce the words for trash, transportation, pollution and energy fast, in full sentences.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Key words",
        body: [
          "Bins: \"l'umido\", \"la plastica\", \"la carta\", \"il vetro\", \"l'indifferenziato\". Transportation: \"i mezzi\", \"l'abbonamento\", \"la ZTL\", \"il parcheggio\", \"l'ingorgo\". Environment: \"l'inquinamento\", \"lo spreco\", \"le energie rinnovabili\", \"il risparmio energetico\".",
        ],
        examples: [
          { es: "I gusci d'uovo vanno nell'umido.", en: "Eggshells go in the food waste." },
          { es: "Ho rinnovato l'abbonamento dell'autobus.", en: "I've renewed my bus pass." },
          { es: "Lo smog in inverno è terribile.", en: "The smog in winter is terrible." },
          { es: "Il risparmio energetico conviene a tutti.", en: "Saving energy benefits everyone." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Eggshells go in the food waste.", answer: "I gusci d'uovo vanno nell'umido.", altAnswers: ["I gusci delle uova vanno nell'umido.", "I gusci d'uovo vanno nell'organico."], explanation: "\"Nell'umido\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I've renewed my bus pass.", answer: "Ho rinnovato l'abbonamento dell'autobus.", altAnswers: ["Ho rinnovato l'abbonamento del bus.", "Ho rinnovato l'abbonamento."], explanation: "\"Rinnovare\" = to renew." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Cardboard goes in the paper.", answer: "Il cartone va nella carta.", altAnswers: ["Il cartone va con la carta."], explanation: "\"Nella carta\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Plastic bottles go in the plastic.", answer: "Le bottiglie di plastica vanno nella plastica.", altAnswers: ["Le bottiglie di plastica vanno con la plastica."], explanation: "\"Vanno\": plural subject." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Where's the nearest glass bin?", answer: "Dov'è la campana del vetro più vicina?", altAnswers: ["Dove si trova la campana del vetro più vicina?", "Dov'è la campana più vicina?"], explanation: "\"La campana\" = the bell-shaped glass bin." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The bus is always full in the morning.", answer: "L'autobus è sempre pieno la mattina.", altAnswers: ["La mattina l'autobus è sempre pieno.", "Il bus è sempre pieno la mattina."], explanation: "\"La mattina\" = in the mornings." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I got a parking ticket.", answer: "Ho preso una multa per divieto di sosta.", altAnswers: ["Ho preso una multa per il parcheggio.", "Mi hanno fatto una multa per il parcheggio."], explanation: "\"Divieto di sosta\" = no parking." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Pollution is a serious problem.", answer: "L'inquinamento è un problema serio.", altAnswers: ["L'inquinamento è un problema grave."], explanation: "\"L'inquinamento\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "We waste too much food.", answer: "Sprechiamo troppo cibo.", altAnswers: ["Si spreca troppo cibo."], explanation: "\"Sprecare\" = to waste." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Renewable energy is cheaper.", answer: "Le energie rinnovabili costano meno.", altAnswers: ["L'energia rinnovabile costa meno.", "L'energia rinnovabile è più economica.", "Le energie rinnovabili sono più economiche."], explanation: "Singular or plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Lower the heating, please. (to a friend)", answer: "Abbassa il riscaldamento, per favore.", altAnswers: ["Abbassa il riscaldamento, per piacere."], explanation: "Imperative \"abbassa\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "This summer there was a drought.", answer: "Quest'estate c'è stata la siccità.", altAnswers: ["Quest'estate c'è stata una siccità.", "Questa estate c'è stata la siccità."], explanation: "\"Siccità\" is feminine and ends in a stressed \"-à\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There's a lot of [traffic] in the center.", sentence: "In centro c'è molto ___.", answer: "traffico", explanation: "\"Traffico\" = traffic." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The sofa goes to the [recycling center].", sentence: "Il divano va all'___.", answer: "isola ecologica", explanation: "\"Isola ecologica\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "We've put in [solar panels].", sentence: "Abbiamo messo i ___.", answer: "pannelli solari", explanation: "\"Pannello\" = panel." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There's been a [flood] in the valley.", sentence: "C'è stata un'___ nella valle.", answer: "alluvione", explanation: "\"L'alluvione\" is feminine." },
      { type: "word-order", prompt: "Put the words in order to say: The metro is quicker than the car.", words: ["La", "metro", "è", "più", "veloce", "della", "macchina."], translation: "The metro is quicker than the car.", explanation: "\"Più ... di\"." },
      { type: "multiple-choice", question: "\"Lo spreco\" means ...", options: ["waste", "trash can", "saving", "recycling"], correctIndex: 0, explanation: "From \"sprecare\" = to waste." },
      { type: "dictation", audio: "L'isola ecologica è aperta il sabato mattina.", explanation: "\"Isola ecologica\"." },
      { type: "dictation", audio: "Con l'abbonamento risparmio parecchio.", explanation: "\"Parecchio\" = quite a lot." },
      { type: "speak", text: "Faccio bene la differenziata, uso i mezzi e cerco di non sprecare energia.", prompt: "Say it: I sort my trash properly, I use public transportation and I try not to waste energy.", tip: "\"La differenziata\" is short for \"la raccolta differenziata\".", explanation: "Three green habits." },
    ],
  },
  {
    slug: "b1-drill-proposals",
    level: "IT-B1",
    number: 6,
    title: "Drill: Proposals",
    summary: "Produce proposals fast: bisognerebbe, si potrebbe, dovrebbe, sarebbe meglio + infinitive, bisogna che + present subjunctive.",
    duration: "22 min",
    kind: "drill",
    sections: [
      {
        heading: "Two patterns",
        body: [
          "Bisogna che / è necessario che + present subjunctive when you name who must act: \"Bisogna che il comune intervenga\", \"È necessario che tutti ricicliamo\". For softer proposals, use the conditional: \"Il comune dovrebbe intervenire\", \"Bisognerebbe intervenire\", \"Sarebbe meglio intervenire subito\".",
        ],
        examples: [
          { es: "Bisogna che il comune intervenga.", en: "The city needs to act." },
          { es: "Il comune dovrebbe intervenire.", en: "The city should act." },
          { es: "Bisognerebbe intervenire subito.", en: "Action ought to be taken right away." },
          { es: "Si potrebbero usare i pannelli solari.", en: "Solar panels could be used." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The city needs to act.", answer: "Bisogna che il comune intervenga.", altAnswers: ["È necessario che il comune intervenga.", "Il comune deve intervenire."], explanation: "\"Intervenga\": subjunctive of \"intervenire\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The city should act.", answer: "Il comune dovrebbe intervenire.", altAnswers: ["Il Comune dovrebbe intervenire.", "Il comune dovrebbe agire."], explanation: "\"Dovrebbe\" + infinitive." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "More bike lanes ought to be built.", answer: "Bisognerebbe costruire più piste ciclabili.", altAnswers: ["Si dovrebbero costruire più piste ciclabili.", "Si potrebbero costruire più piste ciclabili."], explanation: "\"Bisognerebbe\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Buses could run more often.", answer: "Gli autobus potrebbero passare più spesso.", altAnswers: ["Gli autobus potrebbero passare più di frequente.", "I bus potrebbero passare più spesso."], explanation: "\"Potrebbero\" = could." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Shops should use less plastic.", answer: "I negozi dovrebbero usare meno plastica.", altAnswers: ["I negozi dovrebbero utilizzare meno plastica."], explanation: "\"Dovrebbero\": plural." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Everyone needs to recycle.", answer: "Bisogna che tutti riciclino.", altAnswers: ["È necessario che tutti riciclino.", "Tutti devono riciclare."], explanation: "\"Riciclino\": present subjunctive, \"loro\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I propose planting trees in the square.", answer: "Propongo di piantare alberi in piazza.", altAnswers: ["Propongo di piantare degli alberi in piazza.", "Propongo di piantare alberi nella piazza."], explanation: "\"Proporre di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Why don't we go to work by bike?", answer: "Perché non andiamo al lavoro in bici?", altAnswers: ["Perché non andiamo a lavoro in bici?", "Perché non andiamo al lavoro in bicicletta?"], explanation: "\"Perché non\" + present." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "It's important that the government invests in renewable energy.", answer: "È importante che il governo investa nelle energie rinnovabili.", altAnswers: ["È importante che il governo investa nell'energia rinnovabile."], explanation: "\"Investa\": present subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The city needs to be cleaner.", answer: "Bisogna che la città sia più pulita.", altAnswers: ["È necessario che la città sia più pulita.", "La città deve essere più pulita."], explanation: "\"Sia\": present subjunctive of \"essere\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The center should be closed to cars.", answer: "Il centro dovrebbe essere chiuso alle auto.", altAnswers: ["Bisognerebbe chiudere il centro alle auto.", "Il centro andrebbe chiuso alle auto."], explanation: "\"Dovrebbe essere\" + participle." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It's necessary that we [use] less water.", sentence: "È necessario che ___ meno acqua.", answer: "usiamo", explanation: "\"Noi\" subjunctive." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "There [should be] more buses.", sentence: "Ci ___ essere più autobus.", answer: "dovrebbero", explanation: "Plural conditional, agreeing with \"autobus\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "More bins [could be added].", sentence: "___ aggiungere più cestini.", answer: "Si potrebbero", explanation: "Plural object → \"si potrebbero\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The mayor needs to [listen] to residents.", sentence: "Bisogna che il sindaco ___ i residenti.", answer: "ascolti", explanation: "Present subjunctive of \"ascoltare\"." },
      { type: "word-order", prompt: "Put the words in order to say: It would be better to leave the market in the square.", words: ["Sarebbe", "meglio", "lasciare", "il", "mercato", "in", "piazza."], translation: "It would be better to leave the market in the square.", explanation: "\"Sarebbe meglio\" + infinitive." },
      { type: "multiple-choice", question: "\"Bisogna che i cittadini ___ la loro parte.\"", options: ["facciano", "fanno", "fare", "faranno"], correctIndex: 0, explanation: "\"Bisogna che\" + present subjunctive." },
      { type: "multiple-choice", question: "\"Sarebbe meglio ___ la nostra parte.\"", options: ["fare", "facciamo", "faremo", "che fare"], correctIndex: 0, explanation: "No specific subject: \"sarebbe meglio\" + infinitive." },
      { type: "dictation", audio: "Il comune dovrebbe ascoltare di più i residenti.", explanation: "\"Dovrebbe\" + infinitive." },
      { type: "dictation", audio: "Si potrebbero aggiungere più fontanelle nei parchi.", explanation: "\"Si potrebbero\" with a plural noun." },
      { type: "speak", text: "Bisognerebbe piantare più alberi e gli autobus dovrebbero passare più spesso.", prompt: "Say it: More trees ought to be planted, and buses should come more often.", tip: "\"Dovrebbero\": stress on BE, do-VREB-be-ro.", explanation: "Two conditional proposals." },
    ],
  },
  {
    slug: "b1-reading-lab-comune-notice",
    level: "IT-B1",
    number: 7,
    title: "Reading Lab: A Notice from the Comune",
    summary: "Read two notices from a town hall, on the new recycling rules and on the ZTL, and answer questions on the rules.",
    duration: "18 min",
    sections: [
      {
        heading: "Notice 1: recycling",
        body: [
          "\"COMUNE DI SAN VITO. AVVISO AI CITTADINI. Dal 1° marzo cambia il calendario della raccolta porta a porta. L'umido sarà raccolto il lunedì, il mercoledì e il venerdì; la plastica e i metalli il martedì; la carta il giovedì; il vetro ogni due settimane, il sabato. I contenitori vanno esposti dopo le ore 20 della sera precedente e ritirati entro le ore 12 del giorno di raccolta. I rifiuti non conformi non saranno ritirati. Per gli ingombranti è necessario prenotare il ritiro gratuito al numero verde.\"",
          "Official notices use the future passive (\"sarà raccolto\"), \"vanno\" + participle and set phrases: \"la sera precedente\" (the evening before), \"entro\" (by), \"non conforme\" (not following the rules), \"il numero verde\" (toll-free number).",
        ],
        examples: [
          { es: "Dal 1° marzo cambia il calendario.", en: "From March 1 the calendar changes." },
          { es: "L'umido sarà raccolto il lunedì.", en: "Food waste will be collected on Mondays." },
          { es: "I contenitori vanno esposti la sera precedente.", en: "Bins must be put out the evening before." },
          { es: "I rifiuti non conformi non saranno ritirati.", en: "Waste that doesn't follow the rules won't be collected." },
          { es: "Bisogna prenotare il ritiro al numero verde.", en: "You need to book the collection by calling the toll-free number." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "When is glass collected?", options: ["every other Saturday", "every Saturday", "on Tuesdays", "on Thursdays"], correctIndex: 0, explanation: "\"Ogni due settimane, il sabato\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Bins must be put out the evening before.", answer: "I contenitori vanno esposti la sera precedente.", altAnswers: ["I contenitori vanno esposti la sera prima.", "I bidoni vanno esposti la sera prima."], explanation: "\"Vanno esposti\"." },
        ],
      },
      {
        heading: "Notice 2: the ZTL",
        body: [
          "\"Si informa la cittadinanza che, a partire dal 15 aprile, l'orario della ZTL del centro storico sarà esteso: i varchi saranno attivi dalle 8 alle 20 tutti i giorni, festivi compresi. I residenti in possesso di permesso potranno continuare a circolare liberamente. I veicoli elettrici sono esentati. I trasgressori saranno sanzionati secondo il Codice della Strada.\"",
          "\"Si informa la cittadinanza\" (citizens are informed) is a typical bureaucratic opening. \"Esteso\" (extended), \"festivi compresi\" (including public holidays), \"esentato\" (exempt), \"trasgressori\" (offenders), \"secondo il Codice della Strada\" (under the national traffic code, which sets the fines; amounts change, so check the current figures).",
        ],
        examples: [
          { es: "Si informa la cittadinanza che l'orario cambia.", en: "Citizens are informed that the schedule is changing." },
          { es: "I varchi saranno attivi tutti i giorni, festivi compresi.", en: "The gates will be active every day, including holidays." },
          { es: "I veicoli elettrici sono esentati.", en: "Electric vehicles are exempt." },
          { es: "I trasgressori saranno multati.", en: "Offenders will be fined." },
        ],
        checkpoint: [
          { type: "multiple-choice", question: "Who can still drive in freely?", options: ["residents with a permit", "all residents of the town", "anyone on public holidays", "nobody"], correctIndex: 0, explanation: "\"I residenti in possesso di permesso\"; electric vehicles are exempt too." },
          { type: "listen-choose", audio: "I varchi saranno attivi dalle otto alle venti tutti i giorni, festivi compresi.", question: "When are the gates active?", options: ["8 a.m. to 8 p.m., every day", "8 a.m. to 8 p.m., weekdays only", "only on holidays", "all night"], correctIndex: 0, explanation: "\"Festivi compresi\" = holidays included." },
        ],
      },
      {
        heading: "Reading official notices",
        body: [
          "Find four things: what changes, from when (\"dal\", \"a partire da\"), who it affects, and what happens if you don't comply. Turn the formal language into everyday Italian: \"saranno sanzionati\" → \"prenderanno una multa\", \"vanno esposti\" → \"bisogna metterli fuori\".",
        ],
        examples: [
          { es: "A partire dal 15 aprile l'orario sarà esteso.", en: "From April 15 the hours will be extended." },
          { es: "In pratica, prenderai una multa.", en: "In practice, you'll get a fine." },
          { es: "Bisogna metterli fuori la sera prima.", en: "You need to put them out the night before." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Offenders will be fined.", answer: "I trasgressori saranno multati.", altAnswers: ["I trasgressori saranno sanzionati.", "I trasgressori verranno multati."], explanation: "Future passive." },
          { type: "multiple-choice", question: "What happens to bins put out with the wrong waste?", options: ["They won't be collected.", "They'll be collected the next day.", "They'll be collected for free.", "They'll be taken to the recycling center."], correctIndex: 0, explanation: "\"Non saranno ritirati\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "From March 1 the calendar changes.", answer: "Dal primo marzo cambia il calendario.", altAnswers: ["Dal 1° marzo cambia il calendario.", "Dal primo marzo il calendario cambia.", "A partire dal primo marzo cambia il calendario."], explanation: "\"Dal\" + date." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Paper will be collected on Thursdays.", answer: "La carta sarà raccolta il giovedì.", altAnswers: ["La carta verrà raccolta il giovedì.", "La carta sarà ritirata il giovedì."], explanation: "Future passive; \"il giovedì\" = every Thursday." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Bins must be taken in by noon.", answer: "I contenitori vanno ritirati entro mezzogiorno.", altAnswers: ["I contenitori vanno ritirati entro le dodici.", "I bidoni vanno ritirati entro mezzogiorno."], explanation: "\"Entro\" = by." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "You need to book the collection of bulky items.", answer: "Bisogna prenotare il ritiro degli ingombranti.", altAnswers: ["È necessario prenotare il ritiro degli ingombranti."], explanation: "\"Ingombranti\" = bulky items." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Electric vehicles are exempt.", answer: "I veicoli elettrici sono esentati.", altAnswers: ["I veicoli elettrici sono esenti.", "Le auto elettriche sono esentate."], explanation: "\"Esentato\" or \"esente\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The gates will be active every day, including holidays.", answer: "I varchi saranno attivi tutti i giorni, festivi compresi.", altAnswers: ["I varchi saranno attivi tutti i giorni, compresi i festivi."], explanation: "\"Festivi compresi\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The collection is free.", answer: "Il ritiro è gratuito.", altAnswers: ["Il ritiro è gratis.", "La raccolta è gratuita."], explanation: "\"Gratuito\" (formal) or \"gratis\"." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "[From] April 15 the hours change.", sentence: "___ 15 aprile cambia l'orario.", answer: "A partire dal", altAnswers: ["Dal"], explanation: "\"A partire da\" = starting from." },
      { type: "word-order", prompt: "Put the words in order to say: Citizens are informed that the schedule is changing.", words: ["Si", "informa", "la", "cittadinanza", "che", "l'orario", "cambia."], translation: "Citizens are informed that the schedule is changing.", explanation: "Formal impersonal opening." },
      { type: "multiple-choice", question: "\"Numero verde\" is ...", options: ["a free phone number", "an emergency number", "a recycling code", "a bin number"], correctIndex: 0, explanation: "Toll-free number." },
      { type: "dictation", audio: "I rifiuti non conformi non saranno ritirati.", explanation: "Future passive, negative." },
      { type: "speak", text: "Dal primo marzo l'umido si raccoglie tre volte a settimana, e i bidoni vanno messi fuori la sera prima.", prompt: "Explain the new rule to a neighbor: From March 1 food waste is collected three times a week, and bins must be put out the night before.", tip: "Everyday words: \"messi fuori\", not \"esposti\".", explanation: "Turn the notice into everyday Italian." },
    ],
  },
  {
    slug: "b1-listening-lab-city-interviews",
    level: "IT-B1",
    number: 8,
    title: "Listening Lab: Street Interviews",
    summary: "Listen to people in an Italian city talking about its problems: traffic, trash, parking, noise. Catch the problem and the proposal.",
    duration: "18 min",
    sections: [
      {
        heading: "Interview 1: a student",
        body: [
          "A local radio reporter asks people in Bari: \"Qual è il problema più grande della città?\" A student, Ilaria, answers: \"Secondo me i trasporti. Gli autobus passano ogni mezz'ora e la sera non ci sono quasi. Bisognerebbe aumentare le corse, soprattutto per gli studenti.\"",
          "Listen for the problem (\"i trasporti\") and the proposal (\"bisognerebbe aumentare le corse\"). \"Quasi\" at the end of a sentence means hardly any.",
        ],
        examples: [
          { es: "Qual è il problema più grande della città?", en: "What's the city's biggest problem?" },
          { es: "Gli autobus passano ogni mezz'ora.", en: "Buses come every half hour." },
          { es: "La sera non ci sono quasi.", en: "In the evening there are hardly any." },
          { es: "Bisognerebbe aumentare le corse.", en: "They should run more services." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Gli autobus passano ogni mezz'ora e la sera non ci sono quasi.", question: "What's the problem with the buses?", options: ["Not frequent, and almost none in the evening.", "Too expensive.", "Too crowded in the morning.", "Always late."], correctIndex: 0, explanation: "\"Ogni mezz'ora\", \"non ci sono quasi\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They should run more services.", answer: "Bisognerebbe aumentare le corse.", altAnswers: ["Si dovrebbero aumentare le corse.", "Dovrebbero aumentare le corse."], explanation: "\"Le corse\" = bus or train services." },
        ],
      },
      {
        heading: "Interview 2: a shopkeeper",
        body: [
          "Signor Pasquale, who has a shop in the center: \"Il problema è la ZTL. Da quando l'hanno allargata, i clienti non vengono più: non sanno dove parcheggiare. Io non sono contro l'ambiente, eh, però il comune dovrebbe fare dei parcheggi fuori dal centro, con una navetta.\"",
          "\"Da quando\" (since) + passato prossimo, \"allargare\" (to enlarge), \"una navetta\" (a shuttle bus). The \"eh\" softens the statement.",
        ],
        examples: [
          { es: "Da quando l'hanno allargata, i clienti non vengono più.", en: "Since they enlarged it, customers don't come any more." },
          { es: "Non sanno dove parcheggiare.", en: "They don't know where to park." },
          { es: "Non sono contro l'ambiente.", en: "I'm not against the environment." },
          { es: "Il comune dovrebbe fare dei parcheggi fuori dal centro.", en: "The city should build parking lots outside the center." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Il comune dovrebbe fare dei parcheggi fuori dal centro, con una navetta.", question: "What does Pasquale propose?", options: ["parking lots outside the center with a shuttle", "abolishing the ZTL", "free parking in the center", "more bike lanes"], correctIndex: 0, explanation: "\"Parcheggi fuori dal centro, con una navetta\"." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "They don't know where to park.", answer: "Non sanno dove parcheggiare.", altAnswers: ["Non sanno dove lasciare la macchina."], explanation: "\"Dove\" + infinitive." },
        ],
      },
      {
        heading: "Interview 3: a retired woman",
        body: [
          "Signora Rosa, retired: \"Per me è la sporcizia. La gente butta tutto per terra, e i cassonetti sono sempre pieni. Bisogna che il comune svuoti i cassonetti più spesso, ma bisogna anche che la gente impari l'educazione!\"",
          "\"La sporcizia\" (dirt, litter), \"buttare per terra\" (to drop on the ground), \"svuotare\" (to empty), \"l'educazione\" (manners, not education).",
        ],
        examples: [
          { es: "La gente butta tutto per terra.", en: "People throw everything on the ground." },
          { es: "I cassonetti sono sempre pieni.", en: "The street bins are always full." },
          { es: "Bisogna che il comune svuoti i cassonetti più spesso.", en: "The city needs to empty the bins more often." },
          { es: "Bisogna che la gente impari l'educazione.", en: "People need to learn some manners." },
        ],
        checkpoint: [
          { type: "listen-choose", audio: "Per me è la sporcizia. La gente butta tutto per terra.", question: "What's Signora Rosa's complaint?", options: ["litter", "noise", "traffic", "parking"], correctIndex: 0, explanation: "\"La sporcizia\" = dirt, litter." },
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "The city needs to [empty] the bins more often.", sentence: "Bisogna che il comune ___ i cassonetti più spesso.", answer: "svuoti", explanation: "Present subjunctive of \"svuotare\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "What's the city's biggest problem?", answer: "Qual è il problema più grande della città?", altAnswers: ["Qual è il più grande problema della città?", "Qual è il problema principale della città?"], explanation: "\"Qual è\": no apostrophe." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Buses come every half hour.", answer: "Gli autobus passano ogni mezz'ora.", altAnswers: ["Gli autobus passano ogni mezza ora."], explanation: "\"Passare\" for buses." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Since they enlarged the ZTL, customers don't come any more.", answer: "Da quando hanno allargato la ZTL, i clienti non vengono più.", altAnswers: ["Da quando hanno allargato la ZTL i clienti non vengono più."], explanation: "\"Da quando\" + passato prossimo." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The street bins are always full.", answer: "I cassonetti sono sempre pieni.", altAnswers: ["I cassonetti sono pieni sempre."], explanation: "\"Cassonetto\" = large street bin." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "People need to learn some manners.", answer: "Bisogna che la gente impari l'educazione.", altAnswers: ["La gente deve imparare l'educazione."], explanation: "\"La gente\" + singular subjunctive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'm not against the environment.", answer: "Non sono contro l'ambiente.", altAnswers: ["Io non sono contro l'ambiente."], explanation: "\"Contro\" = against." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "In the evening there are hardly any buses.", answer: "La sera non ci sono quasi autobus.", altAnswers: ["La sera non ci sono quasi.", "La sera gli autobus non ci sono quasi."], explanation: "\"Non ... quasi\" = hardly any." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "A [shuttle bus] would be useful.", sentence: "Sarebbe utile una ___.", answer: "navetta", explanation: "\"Navetta\" = shuttle." },
      { type: "word-order", prompt: "Put the words in order to say: People throw everything on the ground.", words: ["La", "gente", "butta", "tutto", "per", "terra."], translation: "People throw everything on the ground.", explanation: "\"La gente\" takes a singular verb." },
      { type: "multiple-choice", question: "Who mentions students?", options: ["Ilaria", "Signor Pasquale", "Signora Rosa", "the reporter"], correctIndex: 0, explanation: "\"Soprattutto per gli studenti\"." },
      { type: "dictation", audio: "Bisogna che il comune svuoti i cassonetti più spesso.", explanation: "\"Svuoti\": subjunctive." },
      { type: "speak", text: "Secondo me il problema più grande è il traffico. Bisognerebbe aumentare le corse degli autobus.", prompt: "Answer the reporter: In my view the biggest problem is traffic. They should run more buses.", tip: "Start with your opinion, then the proposal.", explanation: "Problem + proposal." },
    ],
  },
  {
    slug: "b1-error-hunt-environment",
    level: "IT-B1",
    number: 9,
    title: "Error Hunt: Environment",
    summary: "Fix the classic slips: va buttata for va buttato, bisogna che riciclamo, usare più i mezzi, nel umido.",
    duration: "17 min",
    sections: [
      {
        heading: "Agreement with va buttato",
        body: [
          "Each sentence below has one mistake. \"Il vetro va buttata\" is wrong: with \"andare\" + participle, the participle agrees with the subject. \"Il vetro va buttato\", \"la carta va buttata\", \"i giornali vanno buttati\", \"le bottiglie vanno buttate\".",
        ],
        examples: [
          { es: "Il vetro va buttato nella campana.", en: "Glass must go in the glass bin." },
          { es: "La carta va buttata il giovedì.", en: "Paper must be put out on Thursdays." },
          { es: "I giornali vanno legati.", en: "Newspapers must be tied up." },
          { es: "Le lattine vanno sciacquate.", en: "Cans must be rinsed." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "A learner wrote \"va buttata\". Write the Italian for the bold words.", en: "Glass [must be thrown] in the glass bin.", sentence: "Il vetro ___ nella campana.", answer: "va buttato", explanation: "\"Il vetro\" is masculine singular." },
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"vanno sciacquato\". Write it correctly: Cans must be rinsed.", source: "Cans must be rinsed.", answer: "Le lattine vanno sciacquate.", altAnswers: ["Le lattine vanno lavate."], explanation: "Feminine plural: \"sciacquate\"." },
        ],
      },
      {
        heading: "Bisogna che ricicliamo",
        body: [
          "\"Bisogna che riciclamo\" needs the subjunctive. For -are verbs, the \"noi\" subjunctive is the same as the present: \"ricicliamo\" (stem \"ricicl-\" + \"-iamo\"). The error is often a spelling one: \"riciclamo\" doesn't exist. The same goes for \"mangiamo\", \"cerchiamo\", \"paghiamo\".",
          "\"Si potrebbe usare più i mezzi\": the adverb goes after the verb, \"usare di più i mezzi\" or \"usare più spesso i mezzi\". \"Più i mezzi\" sounds like more of the buses.",
        ],
        examples: [
          { es: "Bisogna che ricicliamo di più.", en: "We need to recycle more." },
          { es: "È importante che paghiamo le tasse sui rifiuti.", en: "It's important that we pay the waste tax." },
          { es: "Si potrebbero usare di più i mezzi.", en: "Public transportation could be used more." },
          { es: "Bisognerebbe usare più spesso la bici.", en: "We ought to use the bike more often." },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "A learner wrote \"bisogna che riciclamo\". Write it correctly: We need to recycle more.", source: "We need to recycle more.", answer: "Bisogna che ricicliamo di più.", altAnswers: ["Bisogna riciclare di più.", "Dobbiamo riciclare di più."], explanation: "\"Ricicliamo\", with \"i\"." },
          { type: "multiple-choice", question: "Which sentence is correct?", options: ["Si potrebbero usare di più i mezzi.", "Si potrebbe usare più i mezzi.", "Si potrebbe più usare i mezzi.", "Si potrebbe usare i più mezzi."], correctIndex: 0, explanation: "\"Usare di più\"; plural noun → \"si potrebbero\"." },
        ],
      },
      {
        heading: "Nell'umido",
        body: [
          "\"Nel umido\" forgets the elision: before a vowel, \"in\" + \"lo / l'\" = \"nell'\": \"nell'umido\", \"nell'indifferenziato\", \"nell'organico\". And watch the content: ordinary plastic never goes in the food waste, only compostable bags.",
        ],
        examples: [
          { es: "Il sacchetto compostabile va nell'umido.", en: "The compostable bag goes in the food waste." },
          { es: "Gli scontrini vanno nell'indifferenziato.", en: "Receipts go in general waste." },
          { es: "La plastica va nel bidone giallo.", en: "Plastic goes in the yellow bin." },
          { es: "Le foglie vanno nell'organico.", en: "Leaves go in the organic waste." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "A learner wrote \"nel umido\". Write the Italian for the bold words.", en: "Banana skins go [in the food waste].", sentence: "Le bucce di banana vanno ___.", answer: "nell'umido", altAnswers: ["nell'organico"], explanation: "\"In\" + \"l'\" = \"nell'\"." },
          { type: "listen-choose", audio: "Gli scontrini vanno nell'indifferenziato.", question: "Where do receipts go?", options: ["general waste", "paper", "plastic", "food waste"], correctIndex: 0, explanation: "Thermal paper isn't recyclable." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"la carta va buttato\". Write it correctly: Paper must be put out on Thursdays.", source: "Paper must be put out on Thursdays.", answer: "La carta va buttata il giovedì.", altAnswers: ["La carta va messa fuori il giovedì.", "La carta va esposta il giovedì."], explanation: "\"La carta\" → \"buttata\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"i giornali va legati\". Write it correctly: Newspapers must be tied up.", source: "Newspapers must be tied up.", answer: "I giornali vanno legati.", altAnswers: ["I giornali vanno legati insieme."], explanation: "Plural: \"vanno\"." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"bisogna che paghamo\". Write it correctly: We need to pay the bill.", source: "We need to pay the bill.", answer: "Bisogna che paghiamo la bolletta.", altAnswers: ["Bisogna pagare la bolletta.", "Dobbiamo pagare la bolletta."], explanation: "\"Paghiamo\": \"h\" keeps the hard g, \"i\" for the ending." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"usare più la bici\". Write it correctly: People should use the bike more.", source: "People should use the bike more.", answer: "La gente dovrebbe usare di più la bici.", altAnswers: ["La gente dovrebbe usare la bici di più.", "La gente dovrebbe usare più spesso la bici."], explanation: "\"Di più\" after the verb." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"nel organico\". Write it correctly: Leaves go in the organic waste.", source: "Leaves go in the organic waste.", answer: "Le foglie vanno nell'organico.", altAnswers: ["Le foglie vanno nell'umido."], explanation: "\"Nell'\" before a vowel." },
      { type: "translate", direction: "en-es", prompt: "A learner wrote \"è importante che cercamo\". Write it correctly: It's important that we look for solutions.", source: "It's important that we look for solutions.", answer: "È importante che cerchiamo soluzioni.", altAnswers: ["È importante che cerchiamo delle soluzioni.", "È importante cercare soluzioni."], explanation: "\"Cerchiamo\": \"h\" + \"i\"." },
      { type: "fill-blank", prompt: "A learner wrote \"vanno buttato\". Write the Italian for the bold words.", en: "Bottles [must be thrown] in the glass.", sentence: "Le bottiglie ___ nel vetro.", answer: "vanno buttate", explanation: "Feminine plural." },
      { type: "fill-blank", prompt: "A learner wrote \"riciclamo\". Write the Italian for the bold words.", en: "It's necessary that we [recycle].", sentence: "È necessario che ___.", answer: "ricicliamo", explanation: "\"Ricicl-\" + \"-iamo\"." },
      { type: "word-order", prompt: "Put the words in order to say: Public transportation could be used more.", words: ["Si", "potrebbero", "usare", "di", "più", "i", "mezzi."], translation: "Public transportation could be used more.", explanation: "\"Di più\" after the infinitive." },
      { type: "multiple-choice", question: "Which sentence is correct?", options: ["Il cartone va buttato nella carta.", "Il cartone va buttata nella carta.", "Il cartone vanno buttato nella carta.", "Il cartone va buttato nel carta."], correctIndex: 0, explanation: "Agreement and \"nella\"." },
      { type: "dictation", audio: "Il vetro va buttato nella campana verde, non nell'indifferenziato.", explanation: "\"Va buttato\", \"nell'\"." },
      { type: "speak", text: "Bisogna che ricicliamo di più: il vetro va buttato nella campana e le bucce nell'umido.", prompt: "Fix it and say it: a learner said \"Bisogna che riciclamo di più: il vetro va buttata nella campana e le bucce nel umido.\"", tip: "\"Nell'umido\": link the two words, nel-LU-mi-do.", explanation: "Three fixes: \"ricicliamo\", \"buttato\", \"nell'\"." },
    ],
  },
  {
    slug: "b1-mission-letter-to-the-mayor",
    level: "IT-B1",
    number: 10,
    title: "Real-World Mission: A Letter to the Mayor",
    summary: "Write a formal letter to the mayor describing your city's problems and proposing solutions.",
    duration: "17 min",
    kind: "review",
    sections: [
      {
        heading: "Formal letter frame",
        body: [
          "Your mission: write to the mayor of your Italian town about two problems (for example, the buses and the litter in the park) and propose solutions. Use \"Lei\" and formal phrases.",
          "Opening: \"Gentile Sindaco\" or \"Gentile Sindaca\", \"Le scrivo in qualità di residente del quartiere ...\" (I'm writing as a resident of ...). Closing: \"La ringrazio per l'attenzione\", \"In attesa di un Suo riscontro\" (awaiting your reply), \"Distinti saluti\".",
        ],
        examples: [
          { es: "Gentile Sindaco, Le scrivo in qualità di residente.", en: "Dear Mayor, I'm writing to you as a resident." },
          { es: "Vorrei segnalarLe due problemi.", en: "I'd like to bring two problems to your attention." },
          { es: "La ringrazio per l'attenzione.", en: "Thank you for your attention." },
          { es: "In attesa di un Suo riscontro, porgo distinti saluti.", en: "I look forward to your reply. Sincerely," },
        ],
        checkpoint: [
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Thank you for your attention.", answer: "La ringrazio per l'attenzione.", altAnswers: ["La ringrazio dell'attenzione.", "Grazie per l'attenzione."], explanation: "\"La\" = you (formal), object." },
          { type: "listen-choose", audio: "Vorrei segnalarLe due problemi del nostro quartiere.", question: "What is the writer doing?", options: ["reporting two problems in the area", "thanking the mayor", "asking for a job", "complaining about a neighbor"], correctIndex: 0, explanation: "\"Segnalare\" = to report, point out." },
        ],
      },
      {
        heading: "Problems and proposals",
        body: [
          "State the problem with facts: \"Da mesi gli autobus della linea 7 passano ogni quaranta minuti\", \"Il parco è pieno di rifiuti\". Then propose: \"Bisognerebbe ...\", \"Il Comune dovrebbe ...\", \"Sarebbe utile + infinitive\", \"Propongo di ...\". Compare: \"I mezzi sono più lenti che in altre città\".",
        ],
        examples: [
          { es: "Da mesi gli autobus passano ogni quaranta minuti.", en: "For months buses have been coming every forty minutes." },
          { es: "Il parco è pieno di rifiuti.", en: "The park is full of trash." },
          { es: "Sarebbe utile installare più cestini.", en: "It would be useful to install more bins." },
          { es: "Propongo di organizzare una giornata di pulizia con i residenti.", en: "I propose organizing a clean-up day with residents." },
        ],
        checkpoint: [
          { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "It would be useful [to install] more bins.", sentence: "Sarebbe utile ___ più cestini.", answer: "installare", explanation: "\"Sarebbe utile\" + infinitive." },
          { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "The park is full of trash.", answer: "Il parco è pieno di rifiuti.", altAnswers: ["Il parco è pieno di spazzatura.", "Il parco è pieno di immondizia."], explanation: "\"Pieno di\"." },
        ],
      },
    ],
    exercises: [
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Dear Mayor, I'm writing to you as a resident of the San Paolo area.", answer: "Gentile Sindaco, Le scrivo in qualità di residente del quartiere San Paolo.", altAnswers: ["Gentile Sindaco, Le scrivo come residente del quartiere San Paolo.", "Egregio Sindaco, Le scrivo in qualità di residente del quartiere San Paolo."], explanation: "Capital \"Le\" is a courtesy in formal letters." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I'd like to bring two problems to your attention.", answer: "Vorrei segnalarLe due problemi.", altAnswers: ["Vorrei segnalarle due problemi.", "Vorrei segnalare due problemi."], explanation: "\"Segnalare\" = to report." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "For months buses have been coming every forty minutes.", answer: "Da mesi gli autobus passano ogni quaranta minuti.", altAnswers: ["Gli autobus passano ogni quaranta minuti da mesi."], explanation: "\"Da\" + present." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "More bins ought to be installed.", answer: "Bisognerebbe installare più cestini.", altAnswers: ["Si dovrebbero installare più cestini.", "Si potrebbero installare più cestini."], explanation: "Conditional proposal." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I propose organizing a clean-up day.", answer: "Propongo di organizzare una giornata di pulizia.", altAnswers: ["Propongo di organizzare una giornata per pulire il parco."], explanation: "\"Proporre di\"." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "Buses should come more often.", answer: "Gli autobus dovrebbero passare più spesso.", altAnswers: ["Gli autobus dovrebbero passare più di frequente."], explanation: "\"Dovrebbero\" + infinitive." },
      { type: "translate", direction: "en-es", prompt: "Translate into Italian.", source: "I look forward to your reply. Sincerely,", answer: "In attesa di un Suo riscontro, porgo distinti saluti.", altAnswers: ["In attesa di un Suo riscontro, distinti saluti.", "In attesa di una Sua risposta, distinti saluti."], explanation: "Formal closing." },
      { type: "fill-blank", prompt: "Write the Italian for the bold words.", en: "Public transportation is [slower than] in other cities.", sentence: "I mezzi sono ___ in altre città.", answer: "più lenti che", explanation: "\"Che\" before a preposition phrase." },
      { type: "word-order", prompt: "Put the words in order to say: Thank you for your attention.", words: ["La", "ringrazio", "per", "l'attenzione."], translation: "Thank you for your attention.", explanation: "Formal \"La\"." },
      { type: "multiple-choice", question: "Which opening suits a letter to the mayor?", options: ["Gentile Sindaco,", "Ciao Sindaco,", "Caro amico,", "Ehi,"], correctIndex: 0, explanation: "Formal opening." },
      { type: "dictation", audio: "Il Comune potrebbe installare più cestini nel parco.", explanation: "\"Potrebbe\" + infinitive: a polite proposal." },
      { type: "speak", text: "Gentile Sindaco, Le scrivo per segnalarLe un problema: il parco è pieno di rifiuti. Propongo di installare più cestini.", prompt: "Read the start of your letter aloud: Dear Mayor, I'm writing to report a problem: the park is full of trash. I propose installing more bins.", tip: "Formal tone: steady and clear.", explanation: "Formal opening, problem, proposal." },
    ],
  },
];

export const IT_B1_U30_WRITING: WriteExercise = {
  type: "write",
  prompt: "Write a formal letter to the mayor of your Italian town (100-140 words). Introduce yourself as a resident, describe two problems in your area (transportation, trash, traffic, noise or green spaces), propose at least two solutions, and close formally.",
  minWords: 90,
  maxWords: 150,
  rubric: [
    "Uses a formal opening and closing (Gentile Sindaco; La ringrazio per l'attenzione; Distinti saluti) and Lei throughout",
    "Describes two problems with concrete facts (da mesi, ogni ... minuti, pieno di)",
    "Makes proposals in the conditional (bisognerebbe, si potrebbe / si potrebbero, il Comune dovrebbe)",
    "Uses at least one impersonal phrase + present subjunctive (bisogna che, è necessario che, è importante che)",
    "Uses environment and transportation vocabulary accurately (le corse, i cestini, la raccolta differenziata, le piste ciclabili)",
  ],
  modelAnswer: "Gentile Sindaca, Le scrivo in qualità di residente del quartiere Borgo Nuovo per segnalarLe due problemi. Il primo riguarda i trasporti: da mesi gli autobus della linea 4 passano ogni quaranta minuti e la sera non ci sono quasi. Molti anziani e studenti restano a casa o usano la macchina. Il secondo è il parco di via Verdi, che è sempre pieno di rifiuti perché ci sono pochissimi cestini. Bisognerebbe aumentare le corse serali, almeno fino alle 23. Inoltre sarebbe utile installare più cestini per la raccolta differenziata. Propongo anche di organizzare una giornata di pulizia con i residenti: sono sicura che molti parteciperebbero. È necessario che tutti facciamo la nostra parte. La ringrazio per l'attenzione. In attesa di un Suo riscontro, porgo distinti saluti. Elena Ferri",
  explanation: "The letter keeps \"Lei\" throughout (\"Le scrivo\", \"segnalarLe\", \"La ringrazio\"), states two problems with facts, and proposes solutions with the conditional (\"bisognerebbe\", \"parteciperebbero\") and the subjunctive (\"è necessario che ... facciamo\").",
};
